(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[489],{

 "./public/app/core/components/Layers/AddLayerButton.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "f": () => ( AddLayerButton)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const AddLayerButton = _ref => {
  let {
    onChange,
    options,
    label
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ValuePicker, {
    icon: "plus",
    label: label,
    variant: "secondary",
    options: options,
    onChange: onChange,
    isFullWidth: true
  });
};

 }),

 "./public/app/core/components/Layers/LayerDragDropList.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

__webpack_require__.d(__webpack_exports__, {
  "E": () => ( LayerDragDropList)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var react_beautiful_dnd_esm = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;






const LayerName = _ref => {
  let {
    name,
    onChange,
    verifyLayerNameUniqueness
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);
  const [isEditing, setIsEditing] = (0,react.useState)(false);
  const [validationError, setValidationError] = (0,react.useState)(null);

  const onEditLayer = event => {
    setIsEditing(true);
  };

  const onEndEditName = newName => {
    setIsEditing(false);

    if (validationError) {
      setValidationError(null);
      return;
    }

    if (name !== newName) {
      onChange(newName);
    }
  };

  const onInputChange = event => {
    const newName = event.currentTarget.value.trim();

    if (newName.length === 0) {
      setValidationError('An empty layer name is not allowed');
      return;
    }

    if (verifyLayerNameUniqueness && !verifyLayerNameUniqueness(newName) && newName !== name) {
      setValidationError('Layer name already exists');
      return;
    }

    if (validationError) {
      setValidationError(null);
    }
  };

  const onEditLayerBlur = event => {
    onEndEditName(event.currentTarget.value.trim());
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onEndEditName(event.target.value);
    }
  };

  const onFocus = event => {
    event.target.select();
  };

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: (0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [!isEditing && (0,jsx_runtime.jsxs)("button", {
        className: styles.layerNameWrapper,
        title: "Edit layer name",
        onClick: onEditLayer,
        "data-testid": "layer-name-div",
        children: [(0,jsx_runtime.jsx)("span", {
          className: styles.layerName,
          children: name
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "pen",
          className: styles.layerEditIcon,
          size: "sm"
        })]
      }), isEditing && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          defaultValue: name,
          onBlur: onEditLayerBlur,
          autoFocus: true,
          onKeyDown: onKeyDown,
          onFocus: onFocus,
          invalid: validationError !== null,
          onChange: onInputChange,
          className: styles.layerNameInput,
          "data-testid": "layer-name-input"
        }), validationError && (0,jsx_runtime.jsx)(grafana_ui_src.FieldValidationMessage, {
          horizontal: true,
          children: validationError
        })]
      })]
    })
  });
};

const getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      label: Wrapper;
      display: flex;
      align-items: center;
      margin-left: ${theme.spacing.xs};
    `,
    layerNameWrapper: emotion_css_esm.css`
      display: flex;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: ${theme.border.radius.md};
      align-items: center;
      padding: 0 0 0 ${theme.spacing.xs};
      margin: 0;
      background: transparent;

      &:hover {
        background: ${theme.colors.bg3};
        border: 1px dashed ${theme.colors.border3};
      }

      &:focus {
        border: 2px solid ${theme.colors.formInputBorderActive};
      }

      &:hover,
      &:focus {
        .query-name-edit-icon {
          visibility: visible;
        }
      }
    `,
    layerName: emotion_css_esm.css`
      font-weight: ${theme.typography.weight.semibold};
      color: ${theme.colors.textBlue};
      cursor: pointer;
      overflow: hidden;
      margin-left: ${theme.spacing.xs};
    `,
    layerEditIcon: (0,emotion_css_esm.cx)(emotion_css_esm.css`
        margin-left: ${theme.spacing.md};
        visibility: hidden;
      `, 'query-name-edit-icon'),
    layerNameInput: emotion_css_esm.css`
      max-width: 300px;
      margin: -4px 0;
    `
  };
};
;









const LayerDragDropList = _ref => {
  let {
    layers,
    getLayerInfo,
    onDragEnd,
    onSelect,
    onDelete,
    onDuplicate,
    isFrame,
    selection,
    excludeBaseLayer,
    onNameChange,
    verifyLayerNameUniqueness
  } = _ref;
  const style = styles(src.config.theme);

  const getRowStyle = isSelected => {
    return isSelected ? `${style.row} ${style.sel}` : style.row;
  };

  return (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.Z5, {
    onDragEnd: onDragEnd,
    children: (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.bK, {
      droppableId: "droppable",
      children: (provided, snapshot) => (0,jsx_runtime.jsxs)("div", Object.assign({}, provided.droppableProps, {
        ref: provided.innerRef,
        children: [(() => {
          const rows = [];
          const lastLayerIndex = excludeBaseLayer ? 1 : 0;
          const shouldRenderDragIconLengthThreshold = excludeBaseLayer ? 2 : 1;

          for (let i = layers.length - 1; i >= lastLayerIndex; i--) {
            const element = layers[i];
            const uid = element.getName();
            const isSelected = Boolean(selection === null || selection === void 0 ? void 0 : selection.includes(uid));
            rows.push( (0,jsx_runtime.jsx)(react_beautiful_dnd_esm._l, {
              draggableId: uid,
              index: rows.length,
              children: (provided, snapshot) => (0,jsx_runtime.jsxs)("div", Object.assign({
                className: getRowStyle(isSelected),
                ref: provided.innerRef
              }, provided.draggableProps, provided.dragHandleProps, {
                onMouseDown: () => onSelect(element),
                children: [(0,jsx_runtime.jsx)(LayerName, {
                  name: uid,
                  onChange: v => onNameChange(element, v),
                  verifyLayerNameUniqueness: verifyLayerNameUniqueness !== null && verifyLayerNameUniqueness !== void 0 ? verifyLayerNameUniqueness : undefined
                }), (0,jsx_runtime.jsxs)("div", {
                  className: style.textWrapper,
                  children: ["\xA0 ", getLayerInfo(element)]
                }), isFrame(element) && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [onDuplicate ? (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
                    name: "copy",
                    title: 'Duplicate',
                    className: style.actionIcon,
                    onClick: () => onDuplicate(element),
                    surface: "header"
                  }) : null, (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
                    name: "trash-alt",
                    title: 'remove',
                    className: (0,emotion_css_esm.cx)(style.actionIcon, style.dragIcon),
                    onClick: () => onDelete(element),
                    surface: "header"
                  }), layers.length > shouldRenderDragIconLengthThreshold && (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                    title: "Drag and drop to reorder",
                    name: "draggabledots",
                    size: "lg",
                    className: style.dragIcon
                  })]
                })]
              }))
            }, uid));
          }

          return rows;
        })(), provided.placeholder]
      }))
    })
  });
};
LayerDragDropList.defaultProps = {
  isGroup: () => false
};
const styles = (0,grafana_ui_src.stylesFactory)(theme => ({
  wrapper: emotion_css_esm.css`
    margin-bottom: ${theme.spacing.md};
  `,
  row: emotion_css_esm.css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.border.radius.sm};
    background: ${theme.colors.bg2};
    min-height: ${theme.spacing.formInputHeight}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3px;
    cursor: pointer;

    border: 1px solid ${theme.colors.formInputBorder};
    &:hover {
      border: 1px solid ${theme.colors.formInputBorderHover};
    }
  `,
  sel: emotion_css_esm.css`
    border: 1px solid ${theme.colors.formInputBorderActive};
    &:hover {
      border: 1px solid ${theme.colors.formInputBorderActive};
    }
  `,
  dragIcon: emotion_css_esm.css`
    cursor: drag;
  `,
  actionIcon: emotion_css_esm.css`
    color: ${theme.colors.textWeak};
    &:hover {
      color: ${theme.colors.text};
    }
  `,
  typeWrapper: emotion_css_esm.css`
    color: ${theme.colors.textBlue};
    margin-right: 5px;
  `,
  textWrapper: emotion_css_esm.css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
    margin-right: ${theme.spacing.sm};
  `
}));

 }),

 "./public/app/features/canvas/runtime/frame.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "f": () => ( FrameState)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_features_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/index.ts");
 var app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/elements/notFound.tsx");
 var app_plugins_panel_canvas_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/canvas/types.ts");
 var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/canvas/types.ts");
 var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const frameItemDummy = {
  id: 'frame',
  name: 'Frame',
  description: 'Frame',
  getNewOptions: () => ({
    config: {}
  }),
  display: () => {
    return _div || (_div = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: "FRAME!"
    }));
  }
};
class FrameState extends _element__WEBPACK_IMPORTED_MODULE_6__ .f {
  constructor(options, scene, parent) {
    var _this;

    super(frameItemDummy, options, parent);
    _this = this;
    this.options = options;
    this.parent = parent;

    _defineProperty(this, "elements", []);

    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "doAction", function (action, element) {
      let updateName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      let shiftItemsOnDuplicate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      switch (action) {
        case app_plugins_panel_canvas_types__WEBPACK_IMPORTED_MODULE_4__ .G.Delete:
          _this.elements = _this.elements.filter(e => e !== element);

          _this.scene.byName.delete(element.options.name);

          _this.scene.save();

          _this.reinitializeMoveable();

          break;

        case app_plugins_panel_canvas_types__WEBPACK_IMPORTED_MODULE_4__ .G.Duplicate:
          if (element.item.id === 'frame') {
            console.log('Can not duplicate frames (yet)', action, element);
            return;
          }

          const opts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(element.options);

          if (shiftItemsOnDuplicate) {
            const {
              constraint,
              placement: oldPlacement
            } = element.options;
            const {
              vertical,
              horizontal
            } = constraint !== null && constraint !== void 0 ? constraint : {};
            const placement = oldPlacement !== null && oldPlacement !== void 0 ? oldPlacement : {};

            switch (vertical) {
              case _types__WEBPACK_IMPORTED_MODULE_5__ .fJ.Top:
              case _types__WEBPACK_IMPORTED_MODULE_5__ .fJ.TopBottom:
                if (placement.top == null) {
                  placement.top = 25;
                } else {
                  placement.top += 10;
                }

                break;

              case _types__WEBPACK_IMPORTED_MODULE_5__ .fJ.Bottom:
                if (placement.bottom == null) {
                  placement.bottom = 100;
                } else {
                  placement.bottom -= 10;
                }

                break;
            }

            switch (horizontal) {
              case _types__WEBPACK_IMPORTED_MODULE_5__ ._5.Left:
              case _types__WEBPACK_IMPORTED_MODULE_5__ ._5.LeftRight:
                if (placement.left == null) {
                  placement.left = 50;
                } else {
                  placement.left += 10;
                }

                break;

              case _types__WEBPACK_IMPORTED_MODULE_5__ ._5.Right:
                if (placement.right == null) {
                  placement.right = 50;
                } else {
                  placement.right -= 10;
                }

                break;
            }

            opts.placement = placement;
          }

          const copy = new _element__WEBPACK_IMPORTED_MODULE_6__ .f(element.item, opts, _this);
          copy.updateData(_this.scene.context);

          if (updateName) {
            copy.options.name = _this.scene.getNextElementName();
          }

          _this.elements.push(copy);

          _this.scene.byName.set(copy.options.name, copy);

          _this.scene.save();

          _this.reinitializeMoveable();

          break;

        default:
          console.log('DO action', action, element);
          return;
      }
    });

    this.options = options;
    this.parent = parent;
    this.scene = scene; 

    let {
      elements
    } = this.options;

    if (!elements) {
      this.options.elements = elements = [];
    }

    for (const c of elements) {
      if (c.type === 'frame') {
        this.elements.push(new FrameState(c, scene, this));
      } else {
        var _canvasElementRegistr;

        const item = (_canvasElementRegistr = app_features_canvas__WEBPACK_IMPORTED_MODULE_2__ .Jk.getIfExists(c.type)) !== null && _canvasElementRegistr !== void 0 ? _canvasElementRegistr : app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_3__ .C;
        this.elements.push(new _element__WEBPACK_IMPORTED_MODULE_6__ .f(item, c, this));
      }
    }
  }

  isRoot() {
    return false;
  }

  updateData(ctx) {
    super.updateData(ctx);

    for (const elem of this.elements) {
      elem.updateData(ctx);
    }
  } 


  reorder(startIndex, endIndex) {
    const result = Array.from(this.elements);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.elements = result;
    this.reinitializeMoveable();
  }

  reinitializeMoveable() {
    this.scene.clearCurrentSelection();
    setTimeout(() => this.scene.initMoveable(true, this.scene.isEditingEnabled), 100);
  } 


  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ref: this.initElement,
      style: {
        overflow: 'hidden'
      },
      children: this.elements.map(v => v.render())
    }, this.UID);
  }


  visit(visitor) {
    super.visit(visitor);

    for (const e of this.elements) {
      visitor(e);
    }
  }

  getSaveModel() {
    return Object.assign({}, this.options, {
      elements: this.elements.map(v => v.getSaveModel())
    });
  }

}

 }),

 "./public/app/plugins/panel/canvas/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( LayerActionID)
 });
let LayerActionID;

(function (LayerActionID) {
  LayerActionID["Delete"] = "delete";
  LayerActionID["Duplicate"] = "duplicate";
  LayerActionID["MoveTop"] = "move-top";
  LayerActionID["MoveBottom"] = "move-bottom";
})(LayerActionID || (LayerActionID = {}));

 }),

 "./public/app/plugins/panel/geomap/module.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var emotion_react_browser_esm = __webpack_require__("./.yarn/__virtual__/@emotion-react-virtual-db6d574d94/0/cache/@emotion-react-npm-11.8.2-ff5ae3d6e8-a8733f8375.zip/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var Disposable = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/Disposable.js");
var functions = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/functions.js");
var util = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/util.js");
var ol_transform = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/transform.js");
var ol_extent = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/extent.js");
var asserts = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/asserts.js");
var math = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/math.js");
;


var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
var NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
function asString(color) {
    if (typeof color === 'string') {
        return color;
    }
    else {
        return color_toString(color);
    }
}
function fromNamed(color) {
    var el = document.createElement('div');
    el.style.color = color;
    if (el.style.color !== '') {
        document.body.appendChild(el);
        var rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        return rgb;
    }
    else {
        return '';
    }
}
var fromString = (function () {
    var MAX_CACHE_SIZE = 1024;
    var cache = {};
    var cacheSize = 0;
    return (
    function (s) {
        var color;
        if (cache.hasOwnProperty(s)) {
            color = cache[s];
        }
        else {
            if (cacheSize >= MAX_CACHE_SIZE) {
                var i = 0;
                for (var key in cache) {
                    if ((i++ & 3) === 0) {
                        delete cache[key];
                        --cacheSize;
                    }
                }
            }
            color = fromStringInternal_(s);
            cache[s] = color;
            ++cacheSize;
        }
        return color;
    });
})();
function asArray(color) {
    if (Array.isArray(color)) {
        return color;
    }
    else {
        return fromString(color);
    }
}
function fromStringInternal_(s) {
    var r, g, b, a, color;
    if (NAMED_COLOR_RE_.exec(s)) {
        s = fromNamed(s);
    }
    if (HEX_COLOR_RE_.exec(s)) {
        var n = s.length - 1; 
        var d = 
         void 0; 
        if (n <= 4) {
            d = 1;
        }
        else {
            d = 2;
        }
        var hasAlpha = n === 4 || n === 8;
        r = parseInt(s.substr(1 + 0 * d, d), 16);
        g = parseInt(s.substr(1 + 1 * d, d), 16);
        b = parseInt(s.substr(1 + 2 * d, d), 16);
        if (hasAlpha) {
            a = parseInt(s.substr(1 + 3 * d, d), 16);
        }
        else {
            a = 255;
        }
        if (d == 1) {
            r = (r << 4) + r;
            g = (g << 4) + g;
            b = (b << 4) + b;
            if (hasAlpha) {
                a = (a << 4) + a;
            }
        }
        color = [r, g, b, a / 255];
    }
    else if (s.indexOf('rgba(') == 0) {
        color = s.slice(5, -1).split(',').map(Number);
        normalize(color);
    }
    else if (s.indexOf('rgb(') == 0) {
        color = s.slice(4, -1).split(',').map(Number);
        color.push(1);
        normalize(color);
    }
    else {
        (0,asserts.h)(false, 14); 
    }
    return color;
}
function normalize(color) {
    color[0] = (0,math.uZ)((color[0] + 0.5) | 0, 0, 255);
    color[1] = (0,math.uZ)((color[1] + 0.5) | 0, 0, 255);
    color[2] = (0,math.uZ)((color[2] + 0.5) | 0, 0, 255);
    color[3] = (0,math.uZ)(color[3], 0, 1);
    return color;
}
function color_toString(color) {
    var r = color[0];
    if (r != (r | 0)) {
        r = (r + 0.5) | 0;
    }
    var g = color[1];
    if (g != (g | 0)) {
        g = (g + 0.5) | 0;
    }
    var b = color[2];
    if (b != (b | 0)) {
        b = (b + 0.5) | 0;
    }
    var a = color[3] === undefined ? 1 : Math.round(color[3] * 100) / 100;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function isStringColor(s) {
    if (NAMED_COLOR_RE_.test(s)) {
        s = fromNamed(s);
    }
    return (HEX_COLOR_RE_.test(s) || s.indexOf('rgba(') === 0 || s.indexOf('rgb(') === 0);
}
;

var IconImageCache =  (function () {
    function IconImageCache() {
        this.cache_ = {};
        this.cacheSize_ = 0;
        this.maxCacheSize_ = 32;
    }
    IconImageCache.prototype.clear = function () {
        this.cache_ = {};
        this.cacheSize_ = 0;
    };
    IconImageCache.prototype.canExpireCache = function () {
        return this.cacheSize_ > this.maxCacheSize_;
    };
    IconImageCache.prototype.expire = function () {
        if (this.canExpireCache()) {
            var i = 0;
            for (var key in this.cache_) {
                var iconImage = this.cache_[key];
                if ((i++ & 3) === 0 && !iconImage.hasListener()) {
                    delete this.cache_[key];
                    --this.cacheSize_;
                }
            }
        }
    };
    IconImageCache.prototype.get = function (src, crossOrigin, color) {
        var key = getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
    };
    IconImageCache.prototype.set = function (src, crossOrigin, color, iconImage) {
        var key = getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
    };
    IconImageCache.prototype.setSize = function (maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
    };
    return IconImageCache;
}());
function getKey(src, crossOrigin, color) {
    var colorString = color ? asString(color) : 'null';
    return crossOrigin + ':' + src + ':' + colorString;
}
 const style_IconImageCache = (( null && (IconImageCache)));
var shared = new IconImageCache();
var ol_Object = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/Object.js");
;
 const Property = ({
    OPACITY: 'opacity',
    VISIBLE: 'visible',
    EXTENT: 'extent',
    Z_INDEX: 'zIndex',
    MAX_RESOLUTION: 'maxResolution',
    MIN_RESOLUTION: 'minResolution',
    MAX_ZOOM: 'maxZoom',
    MIN_ZOOM: 'minZoom',
    SOURCE: 'source',
    MAP: 'map',
});
var obj = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/obj.js");
;
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var BaseLayer =  (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer(options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.background_ = options.background;
        var properties = (0,obj.f0)({}, options);
        if (typeof options.properties === 'object') {
            delete properties.properties;
            (0,obj.f0)(properties, options.properties);
        }
        properties[Property.OPACITY] =
            options.opacity !== undefined ? options.opacity : 1;
        (0,asserts.h)(typeof properties[Property.OPACITY] === 'number', 64); 
        properties[Property.VISIBLE] =
            options.visible !== undefined ? options.visible : true;
        properties[Property.Z_INDEX] = options.zIndex;
        properties[Property.MAX_RESOLUTION] =
            options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[Property.MIN_RESOLUTION] =
            options.minResolution !== undefined ? options.minResolution : 0;
        properties[Property.MIN_ZOOM] =
            options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[Property.MAX_ZOOM] =
            options.maxZoom !== undefined ? options.maxZoom : Infinity;
        _this.className_ =
            properties.className !== undefined ? properties.className : 'ol-layer';
        delete properties.className;
        _this.setProperties(properties);
        _this.state_ = null;
        return _this;
    }
    BaseLayer.prototype.getBackground = function () {
        return this.background_;
    };
    BaseLayer.prototype.getClassName = function () {
        return this.className_;
    };
    BaseLayer.prototype.getLayerState = function (opt_managed) {
        var state = this.state_ ||
 ({
                layer: this,
                managed: opt_managed === undefined ? true : opt_managed,
            });
        var zIndex = this.getZIndex();
        state.opacity = (0,math.uZ)(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    };
    BaseLayer.prototype.getLayersArray = function (opt_array) {
        return (0,util.O3)();
    };
    BaseLayer.prototype.getLayerStatesArray = function (opt_states) {
        return (0,util.O3)();
    };
    BaseLayer.prototype.getExtent = function () {
        return  (this.get(Property.EXTENT));
    };
    BaseLayer.prototype.getMaxResolution = function () {
        return  (this.get(Property.MAX_RESOLUTION));
    };
    BaseLayer.prototype.getMinResolution = function () {
        return  (this.get(Property.MIN_RESOLUTION));
    };
    BaseLayer.prototype.getMinZoom = function () {
        return  (this.get(Property.MIN_ZOOM));
    };
    BaseLayer.prototype.getMaxZoom = function () {
        return  (this.get(Property.MAX_ZOOM));
    };
    BaseLayer.prototype.getOpacity = function () {
        return  (this.get(Property.OPACITY));
    };
    BaseLayer.prototype.getSourceState = function () {
        return (0,util.O3)();
    };
    BaseLayer.prototype.getVisible = function () {
        return  (this.get(Property.VISIBLE));
    };
    BaseLayer.prototype.getZIndex = function () {
        return  (this.get(Property.Z_INDEX));
    };
    BaseLayer.prototype.setBackground = function (opt_background) {
        this.background_ = opt_background;
        this.changed();
    };
    BaseLayer.prototype.setExtent = function (extent) {
        this.set(Property.EXTENT, extent);
    };
    BaseLayer.prototype.setMaxResolution = function (maxResolution) {
        this.set(Property.MAX_RESOLUTION, maxResolution);
    };
    BaseLayer.prototype.setMinResolution = function (minResolution) {
        this.set(Property.MIN_RESOLUTION, minResolution);
    };
    BaseLayer.prototype.setMaxZoom = function (maxZoom) {
        this.set(Property.MAX_ZOOM, maxZoom);
    };
    BaseLayer.prototype.setMinZoom = function (minZoom) {
        this.set(Property.MIN_ZOOM, minZoom);
    };
    BaseLayer.prototype.setOpacity = function (opacity) {
        (0,asserts.h)(typeof opacity === 'number', 64); 
        this.set(Property.OPACITY, opacity);
    };
    BaseLayer.prototype.setVisible = function (visible) {
        this.set(Property.VISIBLE, visible);
    };
    BaseLayer.prototype.setZIndex = function (zindex) {
        this.set(Property.Z_INDEX, zindex);
    };
    BaseLayer.prototype.disposeInternal = function () {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        _super.prototype.disposeInternal.call(this);
    };
    return BaseLayer;
}(ol_Object.Z));
 const Base = (BaseLayer);
var EventType = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/events/EventType.js");
;
 const render_EventType = ({
    PRERENDER: 'prerender',
    POSTRENDER: 'postrender',
    PRECOMPOSE: 'precompose',
    POSTCOMPOSE: 'postcompose',
    RENDERCOMPLETE: 'rendercomplete',
});
;
 const State = ({
    UNDEFINED: 'undefined',
    LOADING: 'loading',
    READY: 'ready',
    ERROR: 'error',
});
var events = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/events.js");
;
var Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Layer =  (function (_super) {
    Layer_extends(Layer, _super);
    function Layer(options) {
        var _this = this;
        var baseOptions = (0,obj.f0)({}, options);
        delete baseOptions.source;
        _this = _super.call(this, baseOptions) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.mapPrecomposeKey_ = null;
        _this.mapRenderKey_ = null;
        _this.sourceChangeKey_ = null;
        _this.renderer_ = null;
        _this.rendered = false;
        if (options.render) {
            _this.render = options.render;
        }
        if (options.map) {
            _this.setMap(options.map);
        }
        _this.addChangeListener(Property.SOURCE, _this.handleSourcePropertyChange_);
        var source = options.source
            ?  (options.source)
            : null;
        _this.setSource(source);
        return _this;
    }
    Layer.prototype.getLayersArray = function (opt_array) {
        var array = opt_array ? opt_array : [];
        array.push(this);
        return array;
    };
    Layer.prototype.getLayerStatesArray = function (opt_states) {
        var states = opt_states ? opt_states : [];
        states.push(this.getLayerState());
        return states;
    };
    Layer.prototype.getSource = function () {
        return  (this.get(Property.SOURCE)) || null;
    };
    Layer.prototype.getRenderSource = function () {
        return this.getSource();
    };
    Layer.prototype.getSourceState = function () {
        var source = this.getSource();
        return !source ? State.UNDEFINED : source.getState();
    };
    Layer.prototype.handleSourceChange_ = function () {
        this.changed();
    };
    Layer.prototype.handleSourcePropertyChange_ = function () {
        if (this.sourceChangeKey_) {
            (0,events.bN)(this.sourceChangeKey_);
            this.sourceChangeKey_ = null;
        }
        var source = this.getSource();
        if (source) {
            this.sourceChangeKey_ = (0,events.oL)(source, EventType.Z.CHANGE, this.handleSourceChange_, this);
        }
        this.changed();
    };
    Layer.prototype.getFeatures = function (pixel) {
        if (!this.renderer_) {
            return new Promise(function (resolve) { return resolve([]); });
        }
        return this.renderer_.getFeatures(pixel);
    };
    Layer.prototype.getData = function (pixel) {
        if (!this.renderer_ || !this.rendered) {
            return null;
        }
        return this.renderer_.getData(pixel);
    };
    Layer.prototype.render = function (frameState, target) {
        var layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
            this.rendered = true;
            return layerRenderer.renderFrame(frameState, target);
        }
    };
    Layer.prototype.unrender = function () {
        this.rendered = false;
    };
    Layer.prototype.setMapInternal = function (map) {
        if (!map) {
            this.unrender();
        }
        this.set(Property.MAP, map);
    };
    Layer.prototype.getMapInternal = function () {
        return this.get(Property.MAP);
    };
    Layer.prototype.setMap = function (map) {
        if (this.mapPrecomposeKey_) {
            (0,events.bN)(this.mapPrecomposeKey_);
            this.mapPrecomposeKey_ = null;
        }
        if (!map) {
            this.changed();
        }
        if (this.mapRenderKey_) {
            (0,events.bN)(this.mapRenderKey_);
            this.mapRenderKey_ = null;
        }
        if (map) {
            this.mapPrecomposeKey_ = (0,events.oL)(map, render_EventType.PRECOMPOSE, function (evt) {
                var renderEvent = 
 (evt);
                var layerStatesArray = renderEvent.frameState.layerStatesArray;
                var layerState = this.getLayerState(false);
                (0,asserts.h)(!layerStatesArray.some(function (arrayLayerState) {
                    return arrayLayerState.layer === layerState.layer;
                }), 67);
                layerStatesArray.push(layerState);
            }, this);
            this.mapRenderKey_ = (0,events.oL)(this, EventType.Z.CHANGE, map.render, map);
            this.changed();
        }
    };
    Layer.prototype.setSource = function (source) {
        this.set(Property.SOURCE, source);
    };
    Layer.prototype.getRenderer = function () {
        if (!this.renderer_) {
            this.renderer_ = this.createRenderer();
        }
        return this.renderer_;
    };
    Layer.prototype.hasRenderer = function () {
        return !!this.renderer_;
    };
    Layer.prototype.createRenderer = function () {
        return null;
    };
    Layer.prototype.disposeInternal = function () {
        if (this.renderer_) {
            this.renderer_.dispose();
            delete this.renderer_;
        }
        this.setSource(null);
        _super.prototype.disposeInternal.call(this);
    };
    return Layer;
}(Base));
function inView(layerState, viewState) {
    if (!layerState.visible) {
        return false;
    }
    var resolution = viewState.resolution;
    if (resolution < layerState.minResolution ||
        resolution >= layerState.maxResolution) {
        return false;
    }
    var zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
 const layer_Layer = (Layer);
var ol_coordinate = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/coordinate.js");
;
var Map_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var MapRenderer =  (function (_super) {
    Map_extends(MapRenderer, _super);
    function MapRenderer(map) {
        var _this = _super.call(this) || this;
        _this.map_ = map;
        return _this;
    }
    MapRenderer.prototype.dispatchRenderEvent = function (type, frameState) {
        (0,util.O3)();
    };
    MapRenderer.prototype.calculateMatrices2D = function (frameState) {
        var viewState = frameState.viewState;
        var coordinateToPixelTransform = frameState.coordinateToPixelTransform;
        var pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
        (0,ol_transform.qC)(coordinateToPixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / viewState.resolution, -1 / viewState.resolution, -viewState.rotation, -viewState.center[0], -viewState.center[1]);
        (0,ol_transform.nb)(pixelToCoordinateTransform, coordinateToPixelTransform);
    };
    MapRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
        var result;
        var viewState = frameState.viewState;
        function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
            return callback.call(thisArg, feature, managed ? layer : null, geometry);
        }
        var projection = viewState.projection;
        var translatedCoordinate = (0,ol_coordinate.Cf)(coordinate.slice(), projection);
        var offsets = [[0, 0]];
        if (projection.canWrapX() && checkWrapped) {
            var projectionExtent = projection.getExtent();
            var worldWidth = (0,ol_extent.dz)(projectionExtent);
            offsets.push([-worldWidth, 0], [worldWidth, 0]);
        }
        var layerStates = frameState.layerStatesArray;
        var numLayers = layerStates.length;
        var matches =  ([]);
        var tmpCoord = [];
        for (var i = 0; i < offsets.length; i++) {
            for (var j = numLayers - 1; j >= 0; --j) {
                var layerState = layerStates[j];
                var layer = layerState.layer;
                if (layer.hasRenderer() &&
                    inView(layerState, viewState) &&
                    layerFilter.call(thisArg2, layer)) {
                    var layerRenderer = layer.getRenderer();
                    var source = layer.getSource();
                    if (layerRenderer && source) {
                        var coordinates = source.getWrapX()
                            ? translatedCoordinate
                            : coordinate;
                        var callback_1 = forEachFeatureAtCoordinate.bind(null, layerState.managed);
                        tmpCoord[0] = coordinates[0] + offsets[i][0];
                        tmpCoord[1] = coordinates[1] + offsets[i][1];
                        result = layerRenderer.forEachFeatureAtCoordinate(tmpCoord, frameState, hitTolerance, callback_1, matches);
                    }
                    if (result) {
                        return result;
                    }
                }
            }
        }
        if (matches.length === 0) {
            return undefined;
        }
        var order = 1 / matches.length;
        matches.forEach(function (m, i) { return (m.distanceSq += i * order); });
        matches.sort(function (a, b) { return a.distanceSq - b.distanceSq; });
        matches.some(function (m) {
            return (result = m.callback(m.feature, m.layer, m.geometry));
        });
        return result;
    };
    MapRenderer.prototype.forEachLayerAtPixel = function (pixel, frameState, hitTolerance, callback, layerFilter) {
        return (0,util.O3)();
    };
    MapRenderer.prototype.hasFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
        var hasFeature = this.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, functions.uX, this, layerFilter, thisArg);
        return hasFeature !== undefined;
    };
    MapRenderer.prototype.getMap = function () {
        return this.map_;
    };
    MapRenderer.prototype.renderFrame = function (frameState) {
        (0,util.O3)();
    };
    MapRenderer.prototype.scheduleExpireIconCache = function (frameState) {
        if (shared.canExpireCache()) {
            frameState.postRenderFunctions.push(expireIconCache);
        }
    };
    return MapRenderer;
}(Disposable.Z));
function expireIconCache(map, frameState) {
    shared.expire();
}
 const renderer_Map = (MapRenderer);
var ObjectEventType = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/ObjectEventType.js");
var Event = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/events/Event.js");
;
var Event_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RenderEvent =  (function (_super) {
    Event_extends(RenderEvent, _super);
    function RenderEvent(type, opt_inversePixelTransform, opt_frameState, opt_context) {
        var _this = _super.call(this, type) || this;
        _this.inversePixelTransform = opt_inversePixelTransform;
        _this.frameState = opt_frameState;
        _this.context = opt_context;
        return _this;
    }
    return RenderEvent;
}(Event.ZP));
 const render_Event = (RenderEvent);
;
var CLASS_HIDDEN = 'ol-hidden';
var CLASS_SELECTABLE = 'ol-selectable';
var CLASS_UNSELECTABLE = 'ol-unselectable';
var CLASS_UNSUPPORTED = 'ol-unsupported';
var CLASS_CONTROL = 'ol-control';
var CLASS_COLLAPSED = 'ol-collapsed';
var fontRegEx = new RegExp([
    '^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)',
    '(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)',
    '(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)',
    '(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?',
    '(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))',
    '(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))',
    '?\\s*([-,\\"\\\'\\sa-z]+?)\\s*$',
].join(''), 'i');
var fontRegExMatchIndex = [
    'style',
    'variant',
    'weight',
    'size',
    'lineHeight',
    'family',
];
var getFontParameters = function (fontSpec) {
    var match = fontSpec.match(fontRegEx);
    if (!match) {
        return null;
    }
    var style =  ({
        lineHeight: 'normal',
        size: '1.2em',
        style: 'normal',
        weight: 'normal',
        variant: 'normal',
    });
    for (var i = 0, ii = fontRegExMatchIndex.length; i < ii; ++i) {
        var value = match[i + 1];
        if (value !== undefined) {
            style[fontRegExMatchIndex[i]] = value;
        }
    }
    style.families = style.family.split(/,\s?/);
    return style;
};
function cssOpacity(opacity) {
    return opacity === 1 ? '' : String(Math.round(opacity * 100) / 100);
}
var Target = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/events/Target.js");
var has = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/has.js");
;

function createCanvasContext2D(opt_width, opt_height, opt_canvasPool, opt_Context2DSettings) {
    var canvas;
    if (opt_canvasPool && opt_canvasPool.length) {
        canvas = opt_canvasPool.shift();
    }
    else if (has.Id) {
        canvas = new OffscreenCanvas(opt_width || 300, opt_height || 300);
    }
    else {
        canvas = document.createElement('canvas');
    }
    if (opt_width) {
        canvas.width = opt_width;
    }
    if (opt_height) {
        canvas.height = opt_height;
    }
    return  (canvas.getContext('2d', opt_Context2DSettings));
}
function dom_outerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
function dom_outerHeight(element) {
    var height = element.offsetHeight;
    var style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
function replaceNode(newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (parent) {
        parent.replaceChild(newNode, oldNode);
    }
}
function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
function removeChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}
function replaceChildren(node, children) {
    var oldChildren = node.childNodes;
    for (var i = 0; true; ++i) {
        var oldChild = oldChildren[i];
        var newChild = children[i];
        if (!oldChild && !newChild) {
            break;
        }
        if (oldChild === newChild) {
            continue;
        }
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        node.insertBefore(newChild, oldChild);
    }
}
;






var defaultFont = '10px sans-serif';
var defaultFillStyle = '#000';
var defaultLineCap = 'round';
var defaultLineDash = [];
var defaultLineDashOffset = 0;
var defaultLineJoin = 'round';
var defaultMiterLimit = 10;
var defaultStrokeStyle = '#000';
var defaultTextAlign = 'center';
var defaultTextBaseline = 'middle';
var defaultPadding = [0, 0, 0, 0];
var defaultLineWidth = 1;
var checkedFonts = new ol_Object.Z();
var labelCache = new Target.Z();
labelCache.setSize = function () {
    console.warn('labelCache is deprecated.'); 
};
var measureContext = null;
var measureFont;
var textHeights = {};
var registerFont = (function () {
    var retries = 100;
    var size = '32px ';
    var referenceFonts = ['monospace', 'serif'];
    var len = referenceFonts.length;
    var text = 'wmytzilWMYTZIL@#/&?$%10\uF013';
    var interval, referenceWidth;
    function isAvailable(fontStyle, fontWeight, fontFamily) {
        var available = true;
        for (var i = 0; i < len; ++i) {
            var referenceFont = referenceFonts[i];
            referenceWidth = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + referenceFont, text);
            if (fontFamily != referenceFont) {
                var width = measureTextWidth(fontStyle +
                    ' ' +
                    fontWeight +
                    ' ' +
                    size +
                    fontFamily +
                    ',' +
                    referenceFont, text);
                available = available && width != referenceWidth;
            }
        }
        if (available) {
            return true;
        }
        return false;
    }
    function check() {
        var done = true;
        var fonts = checkedFonts.getKeys();
        for (var i = 0, ii = fonts.length; i < ii; ++i) {
            var font = fonts[i];
            if (checkedFonts.get(font) < retries) {
                if (isAvailable.apply(this, font.split('\n'))) {
                    (0,obj.ZH)(textHeights);
                    measureContext = null;
                    measureFont = undefined;
                    checkedFonts.set(font, retries);
                }
                else {
                    checkedFonts.set(font, checkedFonts.get(font) + 1, true);
                    done = false;
                }
            }
        }
        if (done) {
            clearInterval(interval);
            interval = undefined;
        }
    }
    return function (fontSpec) {
        var font = getFontParameters(fontSpec);
        if (!font) {
            return;
        }
        var families = font.families;
        for (var i = 0, ii = families.length; i < ii; ++i) {
            var family = families[i];
            var key = font.style + '\n' + font.weight + '\n' + family;
            if (checkedFonts.get(key) === undefined) {
                checkedFonts.set(key, retries, true);
                if (!isAvailable(font.style, font.weight, family)) {
                    checkedFonts.set(key, 0, true);
                    if (interval === undefined) {
                        interval = setInterval(check, 32);
                    }
                }
            }
        }
    };
})();
var measureTextHeight = (function () {
    var measureElement;
    return function (fontSpec) {
        var height = textHeights[fontSpec];
        if (height == undefined) {
            if (has.Id) {
                var font = getFontParameters(fontSpec);
                var metrics = measureText(fontSpec, 'Žg');
                var lineHeight = isNaN(Number(font.lineHeight))
                    ? 1.2
                    : Number(font.lineHeight);
                height =
                    lineHeight *
                        (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
            }
            else {
                if (!measureElement) {
                    measureElement = document.createElement('div');
                    measureElement.innerHTML = 'M';
                    measureElement.style.minHeight = '0';
                    measureElement.style.maxHeight = 'none';
                    measureElement.style.height = 'auto';
                    measureElement.style.padding = '0';
                    measureElement.style.border = 'none';
                    measureElement.style.position = 'absolute';
                    measureElement.style.display = 'block';
                    measureElement.style.left = '-99999px';
                }
                measureElement.style.font = fontSpec;
                document.body.appendChild(measureElement);
                height = measureElement.offsetHeight;
                document.body.removeChild(measureElement);
            }
            textHeights[fontSpec] = height;
        }
        return height;
    };
})();
function measureText(font, text) {
    if (!measureContext) {
        measureContext = createCanvasContext2D(1, 1);
    }
    if (font != measureFont) {
        measureContext.font = font;
        measureFont = measureContext.font;
    }
    return measureContext.measureText(text);
}
function measureTextWidth(font, text) {
    return measureText(font, text).width;
}
function measureAndCacheTextWidth(font, text, cache) {
    if (text in cache) {
        return cache[text];
    }
    var width = measureTextWidth(font, text);
    cache[text] = width;
    return width;
}
function getTextDimensions(baseStyle, chunks) {
    var widths = [];
    var heights = [];
    var lineWidths = [];
    var width = 0;
    var lineWidth = 0;
    var height = 0;
    var lineHeight = 0;
    for (var i = 0, ii = chunks.length; i <= ii; i += 2) {
        var text = chunks[i];
        if (text === '\n' || i === ii) {
            width = Math.max(width, lineWidth);
            lineWidths.push(lineWidth);
            lineWidth = 0;
            height += lineHeight;
            continue;
        }
        var font = chunks[i + 1] || baseStyle.font;
        var currentWidth = measureTextWidth(font, text);
        widths.push(currentWidth);
        lineWidth += currentWidth;
        var currentHeight = measureTextHeight(font);
        heights.push(currentHeight);
        lineHeight = Math.max(lineHeight, currentHeight);
    }
    return { width: width, height: height, widths: widths, heights: heights, lineWidths: lineWidths };
}
function rotateAtOffset(context, rotation, offsetX, offsetY) {
    if (rotation !== 0) {
        context.translate(offsetX, offsetY);
        context.rotate(rotation);
        context.translate(-offsetX, -offsetY);
    }
}
function drawImageOrLabel(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
    context.save();
    if (opacity !== 1) {
        context.globalAlpha *= opacity;
    }
    if (transform) {
        context.setTransform.apply(context, transform);
    }
    if ( (labelOrImage).contextInstructions) {
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        executeLabelInstructions( (labelOrImage), context);
    }
    else if (scale[0] < 0 || scale[1] < 0) {
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        context.drawImage(
 (labelOrImage), originX, originY, w, h, 0, 0, w, h);
    }
    else {
        context.drawImage(
 (labelOrImage), originX, originY, w, h, x, y, w * scale[0], h * scale[1]);
    }
    context.restore();
}
function executeLabelInstructions(label, context) {
    var contextInstructions = label.contextInstructions;
    for (var i = 0, ii = contextInstructions.length; i < ii; i += 2) {
        if (Array.isArray(contextInstructions[i + 1])) {
            context[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
        }
        else {
            context[contextInstructions[i]] = contextInstructions[i + 1];
        }
    }
}
;
var Composite_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var CompositeMapRenderer =  (function (_super) {
    Composite_extends(CompositeMapRenderer, _super);
    function CompositeMapRenderer(map) {
        var _this = _super.call(this, map) || this;
        _this.fontChangeListenerKey_ = (0,events.oL)(checkedFonts, ObjectEventType.Z.PROPERTYCHANGE, map.redrawText.bind(map));
        _this.element_ = document.createElement('div');
        var style = _this.element_.style;
        style.position = 'absolute';
        style.width = '100%';
        style.height = '100%';
        style.zIndex = '0';
        _this.element_.className = CLASS_UNSELECTABLE + ' ol-layers';
        var container = map.getViewport();
        container.insertBefore(_this.element_, container.firstChild || null);
        _this.children_ = [];
        _this.renderedVisible_ = true;
        return _this;
    }
    CompositeMapRenderer.prototype.dispatchRenderEvent = function (type, frameState) {
        var map = this.getMap();
        if (map.hasListener(type)) {
            var event_1 = new render_Event(type, undefined, frameState);
            map.dispatchEvent(event_1);
        }
    };
    CompositeMapRenderer.prototype.disposeInternal = function () {
        (0,events.bN)(this.fontChangeListenerKey_);
        this.element_.parentNode.removeChild(this.element_);
        _super.prototype.disposeInternal.call(this);
    };
    CompositeMapRenderer.prototype.renderFrame = function (frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element_.style.display = 'none';
                this.renderedVisible_ = false;
            }
            return;
        }
        this.calculateMatrices2D(frameState);
        this.dispatchRenderEvent(render_EventType.PRECOMPOSE, frameState);
        var layerStatesArray = frameState.layerStatesArray.sort(function (a, b) {
            return a.zIndex - b.zIndex;
        });
        var viewState = frameState.viewState;
        this.children_.length = 0;
        var declutterLayers = [];
        var previousElement = null;
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var layerState = layerStatesArray[i];
            frameState.layerIndex = i;
            var layer = layerState.layer;
            var sourceState = layer.getSourceState();
            if (!inView(layerState, viewState) ||
                (sourceState != State.READY &&
                    sourceState != State.UNDEFINED)) {
                layer.unrender();
                continue;
            }
            var element = layer.render(frameState, previousElement);
            if (!element) {
                continue;
            }
            if (element !== previousElement) {
                this.children_.push(element);
                previousElement = element;
            }
            if ('getDeclutter' in layer) {
                declutterLayers.push(
 (layer));
            }
        }
        for (var i = declutterLayers.length - 1; i >= 0; --i) {
            declutterLayers[i].renderDeclutter(frameState);
        }
        replaceChildren(this.element_, this.children_);
        this.dispatchRenderEvent(render_EventType.POSTCOMPOSE, frameState);
        if (!this.renderedVisible_) {
            this.element_.style.display = '';
            this.renderedVisible_ = true;
        }
        this.scheduleExpireIconCache(frameState);
    };
    CompositeMapRenderer.prototype.forEachLayerAtPixel = function (pixel, frameState, hitTolerance, callback, layerFilter) {
        var viewState = frameState.viewState;
        var layerStates = frameState.layerStatesArray;
        var numLayers = layerStates.length;
        for (var i = numLayers - 1; i >= 0; --i) {
            var layerState = layerStates[i];
            var layer = layerState.layer;
            if (layer.hasRenderer() &&
                inView(layerState, viewState) &&
                layerFilter(layer)) {
                var layerRenderer = layer.getRenderer();
                var data = layerRenderer.getDataAtPixel(pixel, frameState, hitTolerance);
                if (data) {
                    var result = callback(layer, data);
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return undefined;
    };
    return CompositeMapRenderer;
}(renderer_Map));
 const Composite = (CompositeMapRenderer);
var AssertionError = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/AssertionError.js");
;
 const CollectionEventType = ({
    ADD: 'add',
    REMOVE: 'remove',
});
;
var Collection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Collection_Property = {
    LENGTH: 'length',
};
var CollectionEvent =  (function (_super) {
    Collection_extends(CollectionEvent, _super);
    function CollectionEvent(type, opt_element, opt_index) {
        var _this = _super.call(this, type) || this;
        _this.element = opt_element;
        _this.index = opt_index;
        return _this;
    }
    return CollectionEvent;
}(Event.ZP));

var Collection =  (function (_super) {
    Collection_extends(Collection, _super);
    function Collection(opt_array, opt_options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        var options = opt_options || {};
        _this.unique_ = !!options.unique;
        _this.array_ = opt_array ? opt_array : [];
        if (_this.unique_) {
            for (var i = 0, ii = _this.array_.length; i < ii; ++i) {
                _this.assertUnique_(_this.array_[i], i);
            }
        }
        _this.updateLength_();
        return _this;
    }
    Collection.prototype.clear = function () {
        while (this.getLength() > 0) {
            this.pop();
        }
    };
    Collection.prototype.extend = function (arr) {
        for (var i = 0, ii = arr.length; i < ii; ++i) {
            this.push(arr[i]);
        }
        return this;
    };
    Collection.prototype.forEach = function (f) {
        var array = this.array_;
        for (var i = 0, ii = array.length; i < ii; ++i) {
            f(array[i], i, array);
        }
    };
    Collection.prototype.getArray = function () {
        return this.array_;
    };
    Collection.prototype.item = function (index) {
        return this.array_[index];
    };
    Collection.prototype.getLength = function () {
        return this.get(Collection_Property.LENGTH);
    };
    Collection.prototype.insertAt = function (index, elem) {
        if (this.unique_) {
            this.assertUnique_(elem);
        }
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(CollectionEventType.ADD, elem, index));
    };
    Collection.prototype.pop = function () {
        return this.removeAt(this.getLength() - 1);
    };
    Collection.prototype.push = function (elem) {
        if (this.unique_) {
            this.assertUnique_(elem);
        }
        var n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
    };
    Collection.prototype.remove = function (elem) {
        var arr = this.array_;
        for (var i = 0, ii = arr.length; i < ii; ++i) {
            if (arr[i] === elem) {
                return this.removeAt(i);
            }
        }
        return undefined;
    };
    Collection.prototype.removeAt = function (index) {
        var prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(CollectionEventType.REMOVE, prev, index));
        return prev;
    };
    Collection.prototype.setAt = function (index, elem) {
        var n = this.getLength();
        if (index < n) {
            if (this.unique_) {
                this.assertUnique_(elem, index);
            }
            var prev = this.array_[index];
            this.array_[index] = elem;
            this.dispatchEvent(new CollectionEvent(CollectionEventType.REMOVE, prev, index));
            this.dispatchEvent(new CollectionEvent(CollectionEventType.ADD, elem, index));
        }
        else {
            for (var j = n; j < index; ++j) {
                this.insertAt(j, undefined);
            }
            this.insertAt(index, elem);
        }
    };
    Collection.prototype.updateLength_ = function () {
        this.set(Collection_Property.LENGTH, this.array_.length);
    };
    Collection.prototype.assertUnique_ = function (elem, opt_except) {
        for (var i = 0, ii = this.array_.length; i < ii; ++i) {
            if (this.array_[i] === elem && i !== opt_except) {
                throw new AssertionError.Z(58);
            }
        }
    };
    return Collection;
}(ol_Object.Z));
 const ol_Collection = (Collection);
;
var Group_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();












var GroupEvent =  (function (_super) {
    Group_extends(GroupEvent, _super);
    function GroupEvent(type, layer) {
        var _this = _super.call(this, type) || this;
        _this.layer = layer;
        return _this;
    }
    return GroupEvent;
}(Event.ZP));

var Group_Property = {
    LAYERS: 'layers',
};
var LayerGroup =  (function (_super) {
    Group_extends(LayerGroup, _super);
    function LayerGroup(opt_options) {
        var _this = this;
        var options = opt_options || {};
        var baseOptions =  ((0,obj.f0)({}, options));
        delete baseOptions.layers;
        var layers = options.layers;
        _this = _super.call(this, baseOptions) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.layersListenerKeys_ = [];
        _this.listenerKeys_ = {};
        _this.addChangeListener(Group_Property.LAYERS, _this.handleLayersChanged_);
        if (layers) {
            if (Array.isArray(layers)) {
                layers = new ol_Collection(layers.slice(), { unique: true });
            }
            else {
                (0,asserts.h)(typeof ( (layers).getArray) === 'function', 43); 
            }
        }
        else {
            layers = new ol_Collection(undefined, { unique: true });
        }
        _this.setLayers(layers);
        return _this;
    }
    LayerGroup.prototype.handleLayerChange_ = function () {
        this.changed();
    };
    LayerGroup.prototype.handleLayersChanged_ = function () {
        this.layersListenerKeys_.forEach(events.bN);
        this.layersListenerKeys_.length = 0;
        var layers = this.getLayers();
        this.layersListenerKeys_.push((0,events.oL)(layers, CollectionEventType.ADD, this.handleLayersAdd_, this), (0,events.oL)(layers, CollectionEventType.REMOVE, this.handleLayersRemove_, this));
        for (var id in this.listenerKeys_) {
            this.listenerKeys_[id].forEach(events.bN);
        }
        (0,obj.ZH)(this.listenerKeys_);
        var layersArray = layers.getArray();
        for (var i = 0, ii = layersArray.length; i < ii; i++) {
            var layer = layersArray[i];
            this.registerLayerListeners_(layer);
            this.dispatchEvent(new GroupEvent('addlayer', layer));
        }
        this.changed();
    };
    LayerGroup.prototype.registerLayerListeners_ = function (layer) {
        var listenerKeys = [
            (0,events.oL)(layer, ObjectEventType.Z.PROPERTYCHANGE, this.handleLayerChange_, this),
            (0,events.oL)(layer, EventType.Z.CHANGE, this.handleLayerChange_, this),
        ];
        if (layer instanceof LayerGroup) {
            listenerKeys.push((0,events.oL)(layer, 'addlayer', this.handleLayerGroupAdd_, this), (0,events.oL)(layer, 'removelayer', this.handleLayerGroupRemove_, this));
        }
        this.listenerKeys_[(0,util.sq)(layer)] = listenerKeys;
    };
    LayerGroup.prototype.handleLayerGroupAdd_ = function (event) {
        this.dispatchEvent(new GroupEvent('addlayer', event.layer));
    };
    LayerGroup.prototype.handleLayerGroupRemove_ = function (event) {
        this.dispatchEvent(new GroupEvent('removelayer', event.layer));
    };
    LayerGroup.prototype.handleLayersAdd_ = function (collectionEvent) {
        var layer =  (collectionEvent.element);
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent('addlayer', layer));
        this.changed();
    };
    LayerGroup.prototype.handleLayersRemove_ = function (collectionEvent) {
        var layer =  (collectionEvent.element);
        var key = (0,util.sq)(layer);
        this.listenerKeys_[key].forEach(events.bN);
        delete this.listenerKeys_[key];
        this.dispatchEvent(new GroupEvent('removelayer', layer));
        this.changed();
    };
    LayerGroup.prototype.getLayers = function () {
        return  (this.get(Group_Property.LAYERS));
    };
    LayerGroup.prototype.setLayers = function (layers) {
        var collection = this.getLayers();
        if (collection) {
            var currentLayers = collection.getArray();
            for (var i = 0, ii = currentLayers.length; i < ii; ++i) {
                this.dispatchEvent(new GroupEvent('removelayer', currentLayers[i]));
            }
        }
        this.set(Group_Property.LAYERS, layers);
    };
    LayerGroup.prototype.getLayersArray = function (opt_array) {
        var array = opt_array !== undefined ? opt_array : [];
        this.getLayers().forEach(function (layer) {
            layer.getLayersArray(array);
        });
        return array;
    };
    LayerGroup.prototype.getLayerStatesArray = function (opt_states) {
        var states = opt_states !== undefined ? opt_states : [];
        var pos = states.length;
        this.getLayers().forEach(function (layer) {
            layer.getLayerStatesArray(states);
        });
        var ownLayerState = this.getLayerState();
        var defaultZIndex = ownLayerState.zIndex;
        if (!opt_states && ownLayerState.zIndex === undefined) {
            defaultZIndex = 0;
        }
        for (var i = pos, ii = states.length; i < ii; i++) {
            var layerState = states[i];
            layerState.opacity *= ownLayerState.opacity;
            layerState.visible = layerState.visible && ownLayerState.visible;
            layerState.maxResolution = Math.min(layerState.maxResolution, ownLayerState.maxResolution);
            layerState.minResolution = Math.max(layerState.minResolution, ownLayerState.minResolution);
            layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
            layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
            if (ownLayerState.extent !== undefined) {
                if (layerState.extent !== undefined) {
                    layerState.extent = (0,ol_extent.Ed)(layerState.extent, ownLayerState.extent);
                }
                else {
                    layerState.extent = ownLayerState.extent;
                }
            }
            if (layerState.zIndex === undefined) {
                layerState.zIndex = defaultZIndex;
            }
        }
        return states;
    };
    LayerGroup.prototype.getSourceState = function () {
        return State.READY;
    };
    return LayerGroup;
}(Base));
 const Group = (LayerGroup);
;
var MapEvent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MapEvent =  (function (_super) {
    MapEvent_extends(MapEvent, _super);
    function MapEvent(type, map, opt_frameState) {
        var _this = _super.call(this, type) || this;
        _this.map = map;
        _this.frameState = opt_frameState !== undefined ? opt_frameState : null;
        return _this;
    }
    return MapEvent;
}(Event.ZP));
 const ol_MapEvent = (MapEvent);
;
var MapBrowserEvent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MapBrowserEvent =  (function (_super) {
    MapBrowserEvent_extends(MapBrowserEvent, _super);
    function MapBrowserEvent(type, map, originalEvent, opt_dragging, opt_frameState) {
        var _this = _super.call(this, type, map, opt_frameState) || this;
        _this.originalEvent = originalEvent;
        _this.pixel_ = null;
        _this.coordinate_ = null;
        _this.dragging = opt_dragging !== undefined ? opt_dragging : false;
        return _this;
    }
    Object.defineProperty(MapBrowserEvent.prototype, "pixel", {
        get: function () {
            if (!this.pixel_) {
                this.pixel_ = this.map.getEventPixel(this.originalEvent);
            }
            return this.pixel_;
        },
        set: function (pixel) {
            this.pixel_ = pixel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapBrowserEvent.prototype, "coordinate", {
        get: function () {
            if (!this.coordinate_) {
                this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
            }
            return this.coordinate_;
        },
        set: function (coordinate) {
            this.coordinate_ = coordinate;
        },
        enumerable: false,
        configurable: true
    });
    MapBrowserEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
        if ('preventDefault' in this.originalEvent) {
 (this.originalEvent).preventDefault();
        }
    };
    MapBrowserEvent.prototype.stopPropagation = function () {
        _super.prototype.stopPropagation.call(this);
        if ('stopPropagation' in this.originalEvent) {
 (this.originalEvent).stopPropagation();
        }
    };
    return MapBrowserEvent;
}(ol_MapEvent));
 const ol_MapBrowserEvent = (MapBrowserEvent);
;

 const ol_MapBrowserEventType = ({
    SINGLECLICK: 'singleclick',
    CLICK: EventType.Z.CLICK,
    DBLCLICK: EventType.Z.DBLCLICK,
    POINTERDRAG: 'pointerdrag',
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    POINTERCANCEL: 'pointercancel',
});
;
 const pointer_EventType = ({
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    POINTERCANCEL: 'pointercancel',
});
;
var MapBrowserEventHandler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var MapBrowserEventHandler =  (function (_super) {
    MapBrowserEventHandler_extends(MapBrowserEventHandler, _super);
    function MapBrowserEventHandler(map, moveTolerance) {
        var _this = _super.call(this, map) || this;
        _this.map_ = map;
        _this.clickTimeoutId_;
        _this.emulateClicks_ = false;
        _this.dragging_ = false;
        _this.dragListenerKeys_ = [];
        _this.moveTolerance_ = moveTolerance === undefined ? 1 : moveTolerance;
        _this.down_ = null;
        var element = _this.map_.getViewport();
        _this.activePointers_ = 0;
        _this.trackedTouches_ = {};
        _this.element_ = element;
        _this.pointerdownListenerKey_ = (0,events.oL)(element, pointer_EventType.POINTERDOWN, _this.handlePointerDown_, _this);
        _this.originalPointerMoveEvent_;
        _this.relayedListenerKey_ = (0,events.oL)(element, pointer_EventType.POINTERMOVE, _this.relayEvent_, _this);
        _this.boundHandleTouchMove_ = _this.handleTouchMove_.bind(_this);
        _this.element_.addEventListener(EventType.Z.TOUCHMOVE, _this.boundHandleTouchMove_, has.bM ? { passive: false } : false);
        return _this;
    }
    MapBrowserEventHandler.prototype.emulateClick_ = function (pointerEvent) {
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.CLICK, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        if (this.clickTimeoutId_ !== undefined) {
            clearTimeout(this.clickTimeoutId_);
            this.clickTimeoutId_ = undefined;
            newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.DBLCLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        }
        else {
            this.clickTimeoutId_ = setTimeout(
            function () {
                this.clickTimeoutId_ = undefined;
                var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.SINGLECLICK, this.map_, pointerEvent);
                this.dispatchEvent(newEvent);
            }.bind(this), 250);
        }
    };
    MapBrowserEventHandler.prototype.updateActivePointers_ = function (pointerEvent) {
        var event = pointerEvent;
        if (event.type == ol_MapBrowserEventType.POINTERUP ||
            event.type == ol_MapBrowserEventType.POINTERCANCEL) {
            delete this.trackedTouches_[event.pointerId];
        }
        else if (event.type == ol_MapBrowserEventType.POINTERDOWN) {
            this.trackedTouches_[event.pointerId] = true;
        }
        this.activePointers_ = Object.keys(this.trackedTouches_).length;
    };
    MapBrowserEventHandler.prototype.handlePointerUp_ = function (pointerEvent) {
        this.updateActivePointers_(pointerEvent);
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERUP, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        if (this.emulateClicks_ &&
            !newEvent.defaultPrevented &&
            !this.dragging_ &&
            this.isMouseActionButton_(pointerEvent)) {
            this.emulateClick_(this.down_);
        }
        if (this.activePointers_ === 0) {
            this.dragListenerKeys_.forEach(events.bN);
            this.dragListenerKeys_.length = 0;
            this.dragging_ = false;
            this.down_ = null;
        }
    };
    MapBrowserEventHandler.prototype.isMouseActionButton_ = function (pointerEvent) {
        return pointerEvent.button === 0;
    };
    MapBrowserEventHandler.prototype.handlePointerDown_ = function (pointerEvent) {
        this.emulateClicks_ = this.activePointers_ === 0;
        this.updateActivePointers_(pointerEvent);
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERDOWN, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        this.down_ =  ({});
        for (var property in pointerEvent) {
            var value = pointerEvent[property];
            this.down_[property] = typeof value === 'function' ? functions.Zn : value;
        }
        if (this.dragListenerKeys_.length === 0) {
            var doc = this.map_.getOwnerDocument();
            this.dragListenerKeys_.push((0,events.oL)(doc, ol_MapBrowserEventType.POINTERMOVE, this.handlePointerMove_, this), (0,events.oL)(doc, ol_MapBrowserEventType.POINTERUP, this.handlePointerUp_, this), 
            (0,events.oL)(this.element_, ol_MapBrowserEventType.POINTERCANCEL, this.handlePointerUp_, this));
            if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
                this.dragListenerKeys_.push((0,events.oL)(this.element_.getRootNode(), ol_MapBrowserEventType.POINTERUP, this.handlePointerUp_, this));
            }
        }
    };
    MapBrowserEventHandler.prototype.handlePointerMove_ = function (pointerEvent) {
        if (this.isMoving_(pointerEvent)) {
            this.dragging_ = true;
            var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERDRAG, this.map_, pointerEvent, this.dragging_);
            this.dispatchEvent(newEvent);
        }
    };
    MapBrowserEventHandler.prototype.relayEvent_ = function (pointerEvent) {
        this.originalPointerMoveEvent_ = pointerEvent;
        var dragging = !!(this.down_ && this.isMoving_(pointerEvent));
        this.dispatchEvent(new ol_MapBrowserEvent(pointerEvent.type, this.map_, pointerEvent, dragging));
    };
    MapBrowserEventHandler.prototype.handleTouchMove_ = function (event) {
        var originalEvent = this.originalPointerMoveEvent_;
        if ((!originalEvent || originalEvent.defaultPrevented) &&
            (typeof event.cancelable !== 'boolean' || event.cancelable === true)) {
            event.preventDefault();
        }
    };
    MapBrowserEventHandler.prototype.isMoving_ = function (pointerEvent) {
        return (this.dragging_ ||
            Math.abs(pointerEvent.clientX - this.down_.clientX) >
                this.moveTolerance_ ||
            Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_);
    };
    MapBrowserEventHandler.prototype.disposeInternal = function () {
        if (this.relayedListenerKey_) {
            (0,events.bN)(this.relayedListenerKey_);
            this.relayedListenerKey_ = null;
        }
        this.element_.removeEventListener(EventType.Z.TOUCHMOVE, this.boundHandleTouchMove_);
        if (this.pointerdownListenerKey_) {
            (0,events.bN)(this.pointerdownListenerKey_);
            this.pointerdownListenerKey_ = null;
        }
        this.dragListenerKeys_.forEach(events.bN);
        this.dragListenerKeys_.length = 0;
        this.element_ = null;
        _super.prototype.disposeInternal.call(this);
    };
    return MapBrowserEventHandler;
}(Target.Z));
 const ol_MapBrowserEventHandler = (MapBrowserEventHandler);
;
 const MapEventType = ({
    POSTRENDER: 'postrender',
    MOVESTART: 'movestart',
    MOVEEND: 'moveend',
    LOADSTART: 'loadstart',
    LOADEND: 'loadend',
});
;
 const MapProperty = ({
    LAYERGROUP: 'layergroup',
    SIZE: 'size',
    TARGET: 'target',
    VIEW: 'view',
});
;


var DROP = Infinity;
var PriorityQueue =  (function () {
    function PriorityQueue(priorityFunction, keyFunction) {
        this.priorityFunction_ = priorityFunction;
        this.keyFunction_ = keyFunction;
        this.elements_ = [];
        this.priorities_ = [];
        this.queuedElements_ = {};
    }
    PriorityQueue.prototype.clear = function () {
        this.elements_.length = 0;
        this.priorities_.length = 0;
        (0,obj.ZH)(this.queuedElements_);
    };
    PriorityQueue.prototype.dequeue = function () {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var element = elements[0];
        if (elements.length == 1) {
            elements.length = 0;
            priorities.length = 0;
        }
        else {
            elements[0] = elements.pop();
            priorities[0] = priorities.pop();
            this.siftUp_(0);
        }
        var elementKey = this.keyFunction_(element);
        delete this.queuedElements_[elementKey];
        return element;
    };
    PriorityQueue.prototype.enqueue = function (element) {
        (0,asserts.h)(!(this.keyFunction_(element) in this.queuedElements_), 31); 
        var priority = this.priorityFunction_(element);
        if (priority != DROP) {
            this.elements_.push(element);
            this.priorities_.push(priority);
            this.queuedElements_[this.keyFunction_(element)] = true;
            this.siftDown_(0, this.elements_.length - 1);
            return true;
        }
        return false;
    };
    PriorityQueue.prototype.getCount = function () {
        return this.elements_.length;
    };
    PriorityQueue.prototype.getLeftChildIndex_ = function (index) {
        return index * 2 + 1;
    };
    PriorityQueue.prototype.getRightChildIndex_ = function (index) {
        return index * 2 + 2;
    };
    PriorityQueue.prototype.getParentIndex_ = function (index) {
        return (index - 1) >> 1;
    };
    PriorityQueue.prototype.heapify_ = function () {
        var i;
        for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
            this.siftUp_(i);
        }
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.elements_.length === 0;
    };
    PriorityQueue.prototype.isKeyQueued = function (key) {
        return key in this.queuedElements_;
    };
    PriorityQueue.prototype.isQueued = function (element) {
        return this.isKeyQueued(this.keyFunction_(element));
    };
    PriorityQueue.prototype.siftUp_ = function (index) {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var count = elements.length;
        var element = elements[index];
        var priority = priorities[index];
        var startIndex = index;
        while (index < count >> 1) {
            var lIndex = this.getLeftChildIndex_(index);
            var rIndex = this.getRightChildIndex_(index);
            var smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex]
                ? rIndex
                : lIndex;
            elements[index] = elements[smallerChildIndex];
            priorities[index] = priorities[smallerChildIndex];
            index = smallerChildIndex;
        }
        elements[index] = element;
        priorities[index] = priority;
        this.siftDown_(startIndex, index);
    };
    PriorityQueue.prototype.siftDown_ = function (startIndex, index) {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var element = elements[index];
        var priority = priorities[index];
        while (index > startIndex) {
            var parentIndex = this.getParentIndex_(index);
            if (priorities[parentIndex] > priority) {
                elements[index] = elements[parentIndex];
                priorities[index] = priorities[parentIndex];
                index = parentIndex;
            }
            else {
                break;
            }
        }
        elements[index] = element;
        priorities[index] = priority;
    };
    PriorityQueue.prototype.reprioritize = function () {
        var priorityFunction = this.priorityFunction_;
        var elements = this.elements_;
        var priorities = this.priorities_;
        var index = 0;
        var n = elements.length;
        var element, i, priority;
        for (i = 0; i < n; ++i) {
            element = elements[i];
            priority = priorityFunction(element);
            if (priority == DROP) {
                delete this.queuedElements_[this.keyFunction_(element)];
            }
            else {
                priorities[index] = priority;
                elements[index++] = element;
            }
        }
        elements.length = index;
        priorities.length = index;
        this.heapify_();
    };
    return PriorityQueue;
}());
 const structs_PriorityQueue = (PriorityQueue);
;
 const TileState = ({
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4,
});
;
var TileQueue_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TileQueue =  (function (_super) {
    TileQueue_extends(TileQueue, _super);
    function TileQueue(tilePriorityFunction, tileChangeCallback) {
        var _this = _super.call(this, 
        function (element) {
            return tilePriorityFunction.apply(null, element);
        }, 
        function (element) {
            return  (element[0]).getKey();
        }) || this;
        _this.boundHandleTileChange_ = _this.handleTileChange.bind(_this);
        _this.tileChangeCallback_ = tileChangeCallback;
        _this.tilesLoading_ = 0;
        _this.tilesLoadingKeys_ = {};
        return _this;
    }
    TileQueue.prototype.enqueue = function (element) {
        var added = _super.prototype.enqueue.call(this, element);
        if (added) {
            var tile = element[0];
            tile.addEventListener(EventType.Z.CHANGE, this.boundHandleTileChange_);
        }
        return added;
    };
    TileQueue.prototype.getTilesLoading = function () {
        return this.tilesLoading_;
    };
    TileQueue.prototype.handleTileChange = function (event) {
        var tile =  (event.target);
        var state = tile.getState();
        if (state === TileState.LOADED ||
            state === TileState.ERROR ||
            state === TileState.EMPTY) {
            tile.removeEventListener(EventType.Z.CHANGE, this.boundHandleTileChange_);
            var tileKey = tile.getKey();
            if (tileKey in this.tilesLoadingKeys_) {
                delete this.tilesLoadingKeys_[tileKey];
                --this.tilesLoading_;
            }
            this.tileChangeCallback_();
        }
    };
    TileQueue.prototype.loadMoreTiles = function (maxTotalLoading, maxNewLoads) {
        var newLoads = 0;
        var state, tile, tileKey;
        while (this.tilesLoading_ < maxTotalLoading &&
            newLoads < maxNewLoads &&
            this.getCount() > 0) {
            tile =  (this.dequeue()[0]);
            tileKey = tile.getKey();
            state = tile.getState();
            if (state === TileState.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
                this.tilesLoadingKeys_[tileKey] = true;
                ++this.tilesLoading_;
                ++newLoads;
                tile.load();
            }
        }
    };
    return TileQueue;
}(structs_PriorityQueue));
 const ol_TileQueue = (TileQueue);
function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
        return DROP;
    }
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
        return DROP;
    }
    var center = frameState.viewState.center;
    var deltaX = tileCenter[0] - center[0];
    var deltaY = tileCenter[1] - center[1];
    return (65536 * Math.log(tileResolution) +
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution);
}
var geom_GeometryType = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/GeometryType.js");
var Units = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/proj/Units.js");
;
 const ViewHint = ({
    ANIMATING: 0,
    INTERACTING: 1,
});
;
 const ViewProperty = ({
    CENTER: 'center',
    RESOLUTION: 'resolution',
    ROTATION: 'rotation',
});
;
var DEFAULT_MAX_ZOOM = 42;
var DEFAULT_TILE_SIZE = 256;
var ol_proj = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/proj.js");
;

function createExtent(extent, onlyCenter, smooth) {
    return (
    function (center, resolution, size, opt_isMoving, opt_centerShift) {
        if (!center) {
            return undefined;
        }
        if (!resolution && !onlyCenter) {
            return center;
        }
        var viewWidth = onlyCenter ? 0 : size[0] * resolution;
        var viewHeight = onlyCenter ? 0 : size[1] * resolution;
        var shiftX = opt_centerShift ? opt_centerShift[0] : 0;
        var shiftY = opt_centerShift ? opt_centerShift[1] : 0;
        var minX = extent[0] + viewWidth / 2 + shiftX;
        var maxX = extent[2] - viewWidth / 2 + shiftX;
        var minY = extent[1] + viewHeight / 2 + shiftY;
        var maxY = extent[3] - viewHeight / 2 + shiftY;
        if (minX > maxX) {
            minX = (maxX + minX) / 2;
            maxX = minX;
        }
        if (minY > maxY) {
            minY = (maxY + minY) / 2;
            maxY = minY;
        }
        var x = (0,math.uZ)(center[0], minX, maxX);
        var y = (0,math.uZ)(center[1], minY, maxY);
        if (opt_isMoving && smooth && resolution) {
            var ratio = 30 * resolution;
            x +=
                -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) +
                    ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
            y +=
                -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) +
                    ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [x, y];
    });
}
function none(center) {
    return center;
}
var array = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/array.js");
;



function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    var xResolution = (0,ol_extent.dz)(maxExtent) / viewportSize[0];
    var yResolution = (0,ol_extent.Cr)(maxExtent) / viewportSize[1];
    if (showFullExtent) {
        return Math.min(resolution, Math.max(xResolution, yResolution));
    }
    return Math.min(resolution, Math.min(xResolution, yResolution));
}
function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    var result = Math.min(resolution, maxResolution);
    var ratio = 50;
    result *=
        Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio +
            1;
    if (minResolution) {
        result = Math.max(result, minResolution);
        result /=
            Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) /
                ratio +
                1;
    }
    return (0,math.uZ)(result, minResolution / 2, maxResolution * 2);
}
function createSnapToResolutions(resolutions, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var maxResolution = resolutions[0];
            var minResolution = resolutions[resolutions.length - 1];
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            if (opt_isMoving) {
                var smooth = opt_smooth !== undefined ? opt_smooth : true;
                if (!smooth) {
                    return (0,math.uZ)(resolution, minResolution, cappedMaxRes);
                }
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            var capped = Math.min(cappedMaxRes, resolution);
            var z = Math.floor((0,array.h7)(resolutions, capped, direction));
            if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
                return resolutions[z + 1];
            }
            return resolutions[z];
        }
        else {
            return undefined;
        }
    });
}
function createSnapToPower(power, maxResolution, opt_minResolution, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            var minResolution = opt_minResolution !== undefined ? opt_minResolution : 0;
            if (opt_isMoving) {
                var smooth = opt_smooth !== undefined ? opt_smooth : true;
                if (!smooth) {
                    return (0,math.uZ)(resolution, minResolution, cappedMaxRes);
                }
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            var tolerance = 1e-9;
            var minZoomLevel = Math.ceil(Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance);
            var offset = -direction * (0.5 - tolerance) + 0.5;
            var capped = Math.min(cappedMaxRes, resolution);
            var cappedZoomLevel = Math.floor(Math.log(maxResolution / capped) / Math.log(power) + offset);
            var zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
            var newResolution = maxResolution / Math.pow(power, zoomLevel);
            return (0,math.uZ)(newResolution, minResolution, cappedMaxRes);
        }
        else {
            return undefined;
        }
    });
}
function createMinMaxResolution(maxResolution, minResolution, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            var smooth = opt_smooth !== undefined ? opt_smooth : true;
            if (!smooth || !opt_isMoving) {
                return (0,math.uZ)(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
        }
        else {
            return undefined;
        }
    });
}
;

function disable(rotation) {
    if (rotation !== undefined) {
        return 0;
    }
    else {
        return undefined;
    }
}
function rotationconstraint_none(rotation) {
    if (rotation !== undefined) {
        return rotation;
    }
    else {
        return undefined;
    }
}
function createSnapToN(n) {
    var theta = (2 * Math.PI) / n;
    return (
    function (rotation, opt_isMoving) {
        if (opt_isMoving) {
            return rotation;
        }
        if (rotation !== undefined) {
            rotation = Math.floor(rotation / theta + 0.5) * theta;
            return rotation;
        }
        else {
            return undefined;
        }
    });
}
function createSnapToZero(opt_tolerance) {
    var tolerance = opt_tolerance || (0,math.Yr)(5);
    return (
    function (rotation, opt_isMoving) {
        if (opt_isMoving) {
            return rotation;
        }
        if (rotation !== undefined) {
            if (Math.abs(rotation) <= tolerance) {
                return 0;
            }
            else {
                return rotation;
            }
        }
        else {
            return undefined;
        }
    });
}
;
function easeIn(t) {
    return Math.pow(t, 3);
}
function easeOut(t) {
    return 1 - easeIn(1 - t);
}
function inAndOut(t) {
    return 3 * t * t - 2 * t * t * t;
}
function linear(t) {
    return t;
}
function upAndDown(t) {
    if (t < 0.5) {
        return inAndOut(2 * t);
    }
    else {
        return 1 - inAndOut(2 * (t - 0.5));
    }
}
var Polygon = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/Polygon.js");
;
var View_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



















var DEFAULT_MIN_ZOOM = 0;
var View =  (function (_super) {
    View_extends(View, _super);
    function View(opt_options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        var options = (0,obj.f0)({}, opt_options);
        _this.hints_ = [0, 0];
        _this.animations_ = [];
        _this.updateAnimationKey_;
        _this.projection_ = (0,ol_proj.UQ)(options.projection, 'EPSG:3857');
        _this.viewportSize_ = [100, 100];
        _this.targetCenter_ = null;
        _this.targetResolution_;
        _this.targetRotation_;
        _this.nextCenter_ = null;
        _this.nextResolution_;
        _this.nextRotation_;
        _this.cancelAnchor_ = undefined;
        if (options.projection) {
            (0,ol_proj.h_)();
        }
        if (options.center) {
            options.center = (0,ol_proj.Vs)(options.center, _this.projection_);
        }
        if (options.extent) {
            options.extent = (0,ol_proj.dY)(options.extent, _this.projection_);
        }
        _this.applyOptions_(options);
        return _this;
    }
    View.prototype.applyOptions_ = function (options) {
        var properties = (0,obj.f0)({}, options);
        for (var key in ViewProperty) {
            delete properties[key];
        }
        this.setProperties(properties, true);
        var resolutionConstraintInfo = createResolutionConstraint(options);
        this.maxResolution_ = resolutionConstraintInfo.maxResolution;
        this.minResolution_ = resolutionConstraintInfo.minResolution;
        this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
        this.resolutions_ = options.resolutions;
        this.padding_ = options.padding;
        this.minZoom_ = resolutionConstraintInfo.minZoom;
        var centerConstraint = createCenterConstraint(options);
        var resolutionConstraint = resolutionConstraintInfo.constraint;
        var rotationConstraint = createRotationConstraint(options);
        this.constraints_ = {
            center: centerConstraint,
            resolution: resolutionConstraint,
            rotation: rotationConstraint,
        };
        this.setRotation(options.rotation !== undefined ? options.rotation : 0);
        this.setCenterInternal(options.center !== undefined ? options.center : null);
        if (options.resolution !== undefined) {
            this.setResolution(options.resolution);
        }
        else if (options.zoom !== undefined) {
            this.setZoom(options.zoom);
        }
    };
    Object.defineProperty(View.prototype, "padding", {
        get: function () {
            return this.padding_;
        },
        set: function (padding) {
            var oldPadding = this.padding_;
            this.padding_ = padding;
            var center = this.getCenter();
            if (center) {
                var newPadding = padding || [0, 0, 0, 0];
                oldPadding = oldPadding || [0, 0, 0, 0];
                var resolution = this.getResolution();
                var offsetX = (resolution / 2) *
                    (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
                var offsetY = (resolution / 2) *
                    (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
                this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
            }
        },
        enumerable: false,
        configurable: true
    });
    View.prototype.getUpdatedOptions_ = function (newOptions) {
        var options = this.getProperties();
        if (options.resolution !== undefined) {
            options.resolution = this.getResolution();
        }
        else {
            options.zoom = this.getZoom();
        }
        options.center = this.getCenterInternal();
        options.rotation = this.getRotation();
        return (0,obj.f0)({}, options, newOptions);
    };
    View.prototype.animate = function (var_args) {
        if (this.isDef() && !this.getAnimating()) {
            this.resolveConstraints(0);
        }
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i) {
            var options = arguments[i];
            if (options.center) {
                options = (0,obj.f0)({}, options);
                options.center = (0,ol_proj.Vs)(options.center, this.getProjection());
            }
            if (options.anchor) {
                options = (0,obj.f0)({}, options);
                options.anchor = (0,ol_proj.Vs)(options.anchor, this.getProjection());
            }
            args[i] = options;
        }
        this.animateInternal.apply(this, args);
    };
    View.prototype.animateInternal = function (var_args) {
        var animationCount = arguments.length;
        var callback;
        if (animationCount > 1 &&
            typeof arguments[animationCount - 1] === 'function') {
            callback = arguments[animationCount - 1];
            --animationCount;
        }
        var i = 0;
        for (; i < animationCount && !this.isDef(); ++i) {
            var state = arguments[i];
            if (state.center) {
                this.setCenterInternal(state.center);
            }
            if (state.zoom !== undefined) {
                this.setZoom(state.zoom);
            }
            else if (state.resolution) {
                this.setResolution(state.resolution);
            }
            if (state.rotation !== undefined) {
                this.setRotation(state.rotation);
            }
        }
        if (i === animationCount) {
            if (callback) {
                animationCallback(callback, true);
            }
            return;
        }
        var start = Date.now();
        var center = this.targetCenter_.slice();
        var resolution = this.targetResolution_;
        var rotation = this.targetRotation_;
        var series = [];
        for (; i < animationCount; ++i) {
            var options =  (arguments[i]);
            var animation = {
                start: start,
                complete: false,
                anchor: options.anchor,
                duration: options.duration !== undefined ? options.duration : 1000,
                easing: options.easing || inAndOut,
                callback: callback,
            };
            if (options.center) {
                animation.sourceCenter = center;
                animation.targetCenter = options.center.slice();
                center = animation.targetCenter;
            }
            if (options.zoom !== undefined) {
                animation.sourceResolution = resolution;
                animation.targetResolution = this.getResolutionForZoom(options.zoom);
                resolution = animation.targetResolution;
            }
            else if (options.resolution) {
                animation.sourceResolution = resolution;
                animation.targetResolution = options.resolution;
                resolution = animation.targetResolution;
            }
            if (options.rotation !== undefined) {
                animation.sourceRotation = rotation;
                var delta = (0,math.$W)(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
                animation.targetRotation = rotation + delta;
                rotation = animation.targetRotation;
            }
            if (isNoopAnimation(animation)) {
                animation.complete = true;
            }
            else {
                start += animation.duration;
            }
            series.push(animation);
        }
        this.animations_.push(series);
        this.setHint(ViewHint.ANIMATING, 1);
        this.updateAnimations_();
    };
    View.prototype.getAnimating = function () {
        return this.hints_[ViewHint.ANIMATING] > 0;
    };
    View.prototype.getInteracting = function () {
        return this.hints_[ViewHint.INTERACTING] > 0;
    };
    View.prototype.cancelAnimations = function () {
        this.setHint(ViewHint.ANIMATING, -this.hints_[ViewHint.ANIMATING]);
        var anchor;
        for (var i = 0, ii = this.animations_.length; i < ii; ++i) {
            var series = this.animations_[i];
            if (series[0].callback) {
                animationCallback(series[0].callback, false);
            }
            if (!anchor) {
                for (var j = 0, jj = series.length; j < jj; ++j) {
                    var animation = series[j];
                    if (!animation.complete) {
                        anchor = animation.anchor;
                        break;
                    }
                }
            }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
    };
    View.prototype.updateAnimations_ = function () {
        if (this.updateAnimationKey_ !== undefined) {
            cancelAnimationFrame(this.updateAnimationKey_);
            this.updateAnimationKey_ = undefined;
        }
        if (!this.getAnimating()) {
            return;
        }
        var now = Date.now();
        var more = false;
        for (var i = this.animations_.length - 1; i >= 0; --i) {
            var series = this.animations_[i];
            var seriesComplete = true;
            for (var j = 0, jj = series.length; j < jj; ++j) {
                var animation = series[j];
                if (animation.complete) {
                    continue;
                }
                var elapsed = now - animation.start;
                var fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
                if (fraction >= 1) {
                    animation.complete = true;
                    fraction = 1;
                }
                else {
                    seriesComplete = false;
                }
                var progress = animation.easing(fraction);
                if (animation.sourceCenter) {
                    var x0 = animation.sourceCenter[0];
                    var y0 = animation.sourceCenter[1];
                    var x1 = animation.targetCenter[0];
                    var y1 = animation.targetCenter[1];
                    this.nextCenter_ = animation.targetCenter;
                    var x = x0 + progress * (x1 - x0);
                    var y = y0 + progress * (y1 - y0);
                    this.targetCenter_ = [x, y];
                }
                if (animation.sourceResolution && animation.targetResolution) {
                    var resolution = progress === 1
                        ? animation.targetResolution
                        : animation.sourceResolution +
                            progress *
                                (animation.targetResolution - animation.sourceResolution);
                    if (animation.anchor) {
                        var size = this.getViewportSize_(this.getRotation());
                        var constrainedResolution = this.constraints_.resolution(resolution, 0, size, true);
                        this.targetCenter_ = this.calculateCenterZoom(constrainedResolution, animation.anchor);
                    }
                    this.nextResolution_ = animation.targetResolution;
                    this.targetResolution_ = resolution;
                    this.applyTargetState_(true);
                }
                if (animation.sourceRotation !== undefined &&
                    animation.targetRotation !== undefined) {
                    var rotation = progress === 1
                        ? (0,math.$W)(animation.targetRotation + Math.PI, 2 * Math.PI) -
                            Math.PI
                        : animation.sourceRotation +
                            progress *
                                (animation.targetRotation - animation.sourceRotation);
                    if (animation.anchor) {
                        var constrainedRotation = this.constraints_.rotation(rotation, true);
                        this.targetCenter_ = this.calculateCenterRotate(constrainedRotation, animation.anchor);
                    }
                    this.nextRotation_ = animation.targetRotation;
                    this.targetRotation_ = rotation;
                }
                this.applyTargetState_(true);
                more = true;
                if (!animation.complete) {
                    break;
                }
            }
            if (seriesComplete) {
                this.animations_[i] = null;
                this.setHint(ViewHint.ANIMATING, -1);
                this.nextCenter_ = null;
                this.nextResolution_ = NaN;
                this.nextRotation_ = NaN;
                var callback = series[0].callback;
                if (callback) {
                    animationCallback(callback, true);
                }
            }
        }
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === undefined) {
            this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this));
        }
    };
    View.prototype.calculateCenterRotate = function (rotation, anchor) {
        var center;
        var currentCenter = this.getCenterInternal();
        if (currentCenter !== undefined) {
            center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
            (0,ol_coordinate.U1)(center, rotation - this.getRotation());
            (0,ol_coordinate.IH)(center, anchor);
        }
        return center;
    };
    View.prototype.calculateCenterZoom = function (resolution, anchor) {
        var center;
        var currentCenter = this.getCenterInternal();
        var currentResolution = this.getResolution();
        if (currentCenter !== undefined && currentResolution !== undefined) {
            var x = anchor[0] -
                (resolution * (anchor[0] - currentCenter[0])) / currentResolution;
            var y = anchor[1] -
                (resolution * (anchor[1] - currentCenter[1])) / currentResolution;
            center = [x, y];
        }
        return center;
    };
    View.prototype.getViewportSize_ = function (opt_rotation) {
        var size = this.viewportSize_;
        if (opt_rotation) {
            var w = size[0];
            var h = size[1];
            return [
                Math.abs(w * Math.cos(opt_rotation)) +
                    Math.abs(h * Math.sin(opt_rotation)),
                Math.abs(w * Math.sin(opt_rotation)) +
                    Math.abs(h * Math.cos(opt_rotation)),
            ];
        }
        else {
            return size;
        }
    };
    View.prototype.setViewportSize = function (opt_size) {
        this.viewportSize_ = Array.isArray(opt_size)
            ? opt_size.slice()
            : [100, 100];
        if (!this.getAnimating()) {
            this.resolveConstraints(0);
        }
    };
    View.prototype.getCenter = function () {
        var center = this.getCenterInternal();
        if (!center) {
            return center;
        }
        return (0,ol_proj.lO)(center, this.getProjection());
    };
    View.prototype.getCenterInternal = function () {
        return  (this.get(ViewProperty.CENTER));
    };
    View.prototype.getConstraints = function () {
        return this.constraints_;
    };
    View.prototype.getConstrainResolution = function () {
        return this.get('constrainResolution');
    };
    View.prototype.getHints = function (opt_hints) {
        if (opt_hints !== undefined) {
            opt_hints[0] = this.hints_[0];
            opt_hints[1] = this.hints_[1];
            return opt_hints;
        }
        else {
            return this.hints_.slice();
        }
    };
    View.prototype.calculateExtent = function (opt_size) {
        var extent = this.calculateExtentInternal(opt_size);
        return (0,ol_proj.Fj)(extent, this.getProjection());
    };
    View.prototype.calculateExtentInternal = function (opt_size) {
        var size = opt_size || this.getViewportSizeMinusPadding_();
        var center =  (this.getCenterInternal());
        (0,asserts.h)(center, 1); 
        var resolution =  (this.getResolution());
        (0,asserts.h)(resolution !== undefined, 2); 
        var rotation =  (this.getRotation());
        (0,asserts.h)(rotation !== undefined, 3); 
        return (0,ol_extent.p8)(center, resolution, rotation, size);
    };
    View.prototype.getMaxResolution = function () {
        return this.maxResolution_;
    };
    View.prototype.getMinResolution = function () {
        return this.minResolution_;
    };
    View.prototype.getMaxZoom = function () {
        return  (this.getZoomForResolution(this.minResolution_));
    };
    View.prototype.setMaxZoom = function (zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ maxZoom: zoom }));
    };
    View.prototype.getMinZoom = function () {
        return  (this.getZoomForResolution(this.maxResolution_));
    };
    View.prototype.setMinZoom = function (zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ minZoom: zoom }));
    };
    View.prototype.setConstrainResolution = function (enabled) {
        this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: enabled }));
    };
    View.prototype.getProjection = function () {
        return this.projection_;
    };
    View.prototype.getResolution = function () {
        return  (this.get(ViewProperty.RESOLUTION));
    };
    View.prototype.getResolutions = function () {
        return this.resolutions_;
    };
    View.prototype.getResolutionForExtent = function (extent, opt_size) {
        return this.getResolutionForExtentInternal((0,ol_proj.dY)(extent, this.getProjection()), opt_size);
    };
    View.prototype.getResolutionForExtentInternal = function (extent, opt_size) {
        var size = opt_size || this.getViewportSizeMinusPadding_();
        var xResolution = (0,ol_extent.dz)(extent) / size[0];
        var yResolution = (0,ol_extent.Cr)(extent) / size[1];
        return Math.max(xResolution, yResolution);
    };
    View.prototype.getResolutionForValueFunction = function (opt_power) {
        var power = opt_power || 2;
        var maxResolution = this.getConstrainedResolution(this.maxResolution_);
        var minResolution = this.minResolution_;
        var max = Math.log(maxResolution / minResolution) / Math.log(power);
        return (
        function (value) {
            var resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
        });
    };
    View.prototype.getRotation = function () {
        return  (this.get(ViewProperty.ROTATION));
    };
    View.prototype.getValueForResolutionFunction = function (opt_power) {
        var logPower = Math.log(opt_power || 2);
        var maxResolution = this.getConstrainedResolution(this.maxResolution_);
        var minResolution = this.minResolution_;
        var max = Math.log(maxResolution / minResolution) / logPower;
        return (
        function (resolution) {
            var value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
        });
    };
    View.prototype.getViewportSizeMinusPadding_ = function (opt_rotation) {
        var size = this.getViewportSize_(opt_rotation);
        var padding = this.padding_;
        if (padding) {
            size = [
                size[0] - padding[1] - padding[3],
                size[1] - padding[0] - padding[2],
            ];
        }
        return size;
    };
    View.prototype.getState = function () {
        var projection = this.getProjection();
        var resolution = this.getResolution();
        var rotation = this.getRotation();
        var center =  (this.getCenterInternal());
        var padding = this.padding_;
        if (padding) {
            var reducedSize = this.getViewportSizeMinusPadding_();
            center = calculateCenterOn(center, this.getViewportSize_(), [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]], resolution, rotation);
        }
        return {
            center: center.slice(0),
            projection: projection !== undefined ? projection : null,
            resolution: resolution,
            nextCenter: this.nextCenter_,
            nextResolution: this.nextResolution_,
            nextRotation: this.nextRotation_,
            rotation: rotation,
            zoom: this.getZoom(),
        };
    };
    View.prototype.getZoom = function () {
        var zoom;
        var resolution = this.getResolution();
        if (resolution !== undefined) {
            zoom = this.getZoomForResolution(resolution);
        }
        return zoom;
    };
    View.prototype.getZoomForResolution = function (resolution) {
        var offset = this.minZoom_ || 0;
        var max, zoomFactor;
        if (this.resolutions_) {
            var nearest = (0,array.h7)(this.resolutions_, resolution, 1);
            offset = nearest;
            max = this.resolutions_[nearest];
            if (nearest == this.resolutions_.length - 1) {
                zoomFactor = 2;
            }
            else {
                zoomFactor = max / this.resolutions_[nearest + 1];
            }
        }
        else {
            max = this.maxResolution_;
            zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    };
    View.prototype.getResolutionForZoom = function (zoom) {
        if (this.resolutions_) {
            if (this.resolutions_.length <= 1) {
                return 0;
            }
            var baseLevel = (0,math.uZ)(Math.floor(zoom), 0, this.resolutions_.length - 2);
            var zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
            return (this.resolutions_[baseLevel] /
                Math.pow(zoomFactor, (0,math.uZ)(zoom - baseLevel, 0, 1)));
        }
        else {
            return (this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_));
        }
    };
    View.prototype.fit = function (geometryOrExtent, opt_options) {
        var geometry;
        (0,asserts.h)(Array.isArray(geometryOrExtent) ||
            typeof ( (geometryOrExtent).getSimplifiedGeometry) ===
                'function', 24); 
        if (Array.isArray(geometryOrExtent)) {
            (0,asserts.h)(!(0,ol_extent.xb)(geometryOrExtent), 25); 
            var extent = (0,ol_proj.dY)(geometryOrExtent, this.getProjection());
            geometry = (0,Polygon.oJ)(extent);
        }
        else if (geometryOrExtent.getType() === geom_GeometryType.Z.CIRCLE) {
            var extent = (0,ol_proj.dY)(geometryOrExtent.getExtent(), this.getProjection());
            geometry = (0,Polygon.oJ)(extent);
            geometry.rotate(this.getRotation(), (0,ol_extent.qg)(extent));
        }
        else {
            var userProjection = (0,ol_proj.Cs)();
            if (userProjection) {
                geometry =  (geometryOrExtent
                    .clone()
                    .transform(userProjection, this.getProjection()));
            }
            else {
                geometry = geometryOrExtent;
            }
        }
        this.fitInternal(geometry, opt_options);
    };
    View.prototype.rotatedExtentForGeometry = function (geometry) {
        var rotation = this.getRotation();
        var cosAngle = Math.cos(rotation);
        var sinAngle = Math.sin(-rotation);
        var coords = geometry.getFlatCoordinates();
        var stride = geometry.getStride();
        var minRotX = +Infinity;
        var minRotY = +Infinity;
        var maxRotX = -Infinity;
        var maxRotY = -Infinity;
        for (var i = 0, ii = coords.length; i < ii; i += stride) {
            var rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
            var rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
            minRotX = Math.min(minRotX, rotX);
            minRotY = Math.min(minRotY, rotY);
            maxRotX = Math.max(maxRotX, rotX);
            maxRotY = Math.max(maxRotY, rotY);
        }
        return [minRotX, minRotY, maxRotX, maxRotY];
    };
    View.prototype.fitInternal = function (geometry, opt_options) {
        var options = opt_options || {};
        var size = options.size;
        if (!size) {
            size = this.getViewportSizeMinusPadding_();
        }
        var padding = options.padding !== undefined ? options.padding : [0, 0, 0, 0];
        var nearest = options.nearest !== undefined ? options.nearest : false;
        var minResolution;
        if (options.minResolution !== undefined) {
            minResolution = options.minResolution;
        }
        else if (options.maxZoom !== undefined) {
            minResolution = this.getResolutionForZoom(options.maxZoom);
        }
        else {
            minResolution = 0;
        }
        var rotatedExtent = this.rotatedExtentForGeometry(geometry);
        var resolution = this.getResolutionForExtentInternal(rotatedExtent, [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2],
        ]);
        resolution = isNaN(resolution)
            ? minResolution
            : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
        var rotation = this.getRotation();
        var sinAngle = Math.sin(rotation);
        var cosAngle = Math.cos(rotation);
        var centerRot = (0,ol_extent.qg)(rotatedExtent);
        centerRot[0] += ((padding[1] - padding[3]) / 2) * resolution;
        centerRot[1] += ((padding[0] - padding[2]) / 2) * resolution;
        var centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        var centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        var center = this.getConstrainedCenter([centerX, centerY], resolution);
        var callback = options.callback ? options.callback : functions.Zn;
        if (options.duration !== undefined) {
            this.animateInternal({
                resolution: resolution,
                center: center,
                duration: options.duration,
                easing: options.easing,
            }, callback);
        }
        else {
            this.targetResolution_ = resolution;
            this.targetCenter_ = center;
            this.applyTargetState_(false, true);
            animationCallback(callback, true);
        }
    };
    View.prototype.centerOn = function (coordinate, size, position) {
        this.centerOnInternal((0,ol_proj.Vs)(coordinate, this.getProjection()), size, position);
    };
    View.prototype.centerOnInternal = function (coordinate, size, position) {
        this.setCenterInternal(calculateCenterOn(coordinate, size, position, this.getResolution(), this.getRotation()));
    };
    View.prototype.calculateCenterShift = function (center, resolution, rotation, size) {
        var centerShift;
        var padding = this.padding_;
        if (padding && center) {
            var reducedSize = this.getViewportSizeMinusPadding_(-rotation);
            var shiftedCenter = calculateCenterOn(center, size, [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]], resolution, rotation);
            centerShift = [
                center[0] - shiftedCenter[0],
                center[1] - shiftedCenter[1],
            ];
        }
        return centerShift;
    };
    View.prototype.isDef = function () {
        return !!this.getCenterInternal() && this.getResolution() !== undefined;
    };
    View.prototype.adjustCenter = function (deltaCoordinates) {
        var center = (0,ol_proj.lO)(this.targetCenter_, this.getProjection());
        this.setCenter([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1],
        ]);
    };
    View.prototype.adjustCenterInternal = function (deltaCoordinates) {
        var center = this.targetCenter_;
        this.setCenterInternal([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1],
        ]);
    };
    View.prototype.adjustResolution = function (ratio, opt_anchor) {
        var anchor = opt_anchor && (0,ol_proj.Vs)(opt_anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
    };
    View.prototype.adjustResolutionInternal = function (ratio, opt_anchor) {
        var isMoving = this.getAnimating() || this.getInteracting();
        var size = this.getViewportSize_(this.getRotation());
        var newResolution = this.constraints_.resolution(this.targetResolution_ * ratio, 0, size, isMoving);
        if (opt_anchor) {
            this.targetCenter_ = this.calculateCenterZoom(newResolution, opt_anchor);
        }
        this.targetResolution_ *= ratio;
        this.applyTargetState_();
    };
    View.prototype.adjustZoom = function (delta, opt_anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), opt_anchor);
    };
    View.prototype.adjustRotation = function (delta, opt_anchor) {
        if (opt_anchor) {
            opt_anchor = (0,ol_proj.Vs)(opt_anchor, this.getProjection());
        }
        this.adjustRotationInternal(delta, opt_anchor);
    };
    View.prototype.adjustRotationInternal = function (delta, opt_anchor) {
        var isMoving = this.getAnimating() || this.getInteracting();
        var newRotation = this.constraints_.rotation(this.targetRotation_ + delta, isMoving);
        if (opt_anchor) {
            this.targetCenter_ = this.calculateCenterRotate(newRotation, opt_anchor);
        }
        this.targetRotation_ += delta;
        this.applyTargetState_();
    };
    View.prototype.setCenter = function (center) {
        this.setCenterInternal(center ? (0,ol_proj.Vs)(center, this.getProjection()) : center);
    };
    View.prototype.setCenterInternal = function (center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
    };
    View.prototype.setHint = function (hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
    };
    View.prototype.setResolution = function (resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
    };
    View.prototype.setRotation = function (rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
    };
    View.prototype.setZoom = function (zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
    };
    View.prototype.applyTargetState_ = function (opt_doNotCancelAnims, opt_forceMoving) {
        var isMoving = this.getAnimating() || this.getInteracting() || opt_forceMoving;
        var newRotation = this.constraints_.rotation(this.targetRotation_, isMoving);
        var size = this.getViewportSize_(newRotation);
        var newResolution = this.constraints_.resolution(this.targetResolution_, 0, size, isMoving);
        var newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, isMoving, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (this.get(ViewProperty.ROTATION) !== newRotation) {
            this.set(ViewProperty.ROTATION, newRotation);
        }
        if (this.get(ViewProperty.RESOLUTION) !== newResolution) {
            this.set(ViewProperty.RESOLUTION, newResolution);
            this.set('zoom', this.getZoom(), true);
        }
        if (!newCenter ||
            !this.get(ViewProperty.CENTER) ||
            !(0,ol_coordinate.fS)(this.get(ViewProperty.CENTER), newCenter)) {
            this.set(ViewProperty.CENTER, newCenter);
        }
        if (this.getAnimating() && !opt_doNotCancelAnims) {
            this.cancelAnimations();
        }
        this.cancelAnchor_ = undefined;
    };
    View.prototype.resolveConstraints = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        var duration = opt_duration !== undefined ? opt_duration : 200;
        var direction = opt_resolutionDirection || 0;
        var newRotation = this.constraints_.rotation(this.targetRotation_);
        var size = this.getViewportSize_(newRotation);
        var newResolution = this.constraints_.resolution(this.targetResolution_, direction, size);
        var newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, false, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (duration === 0 && !this.cancelAnchor_) {
            this.targetResolution_ = newResolution;
            this.targetRotation_ = newRotation;
            this.targetCenter_ = newCenter;
            this.applyTargetState_();
            return;
        }
        var anchor = opt_anchor || (duration === 0 ? this.cancelAnchor_ : undefined);
        this.cancelAnchor_ = undefined;
        if (this.getResolution() !== newResolution ||
            this.getRotation() !== newRotation ||
            !this.getCenterInternal() ||
            !(0,ol_coordinate.fS)(this.getCenterInternal(), newCenter)) {
            if (this.getAnimating()) {
                this.cancelAnimations();
            }
            this.animateInternal({
                rotation: newRotation,
                center: newCenter,
                resolution: newResolution,
                duration: duration,
                easing: easeOut,
                anchor: anchor,
            });
        }
    };
    View.prototype.beginInteraction = function () {
        this.resolveConstraints(0);
        this.setHint(ViewHint.INTERACTING, 1);
    };
    View.prototype.endInteraction = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        var anchor = opt_anchor && (0,ol_proj.Vs)(opt_anchor, this.getProjection());
        this.endInteractionInternal(opt_duration, opt_resolutionDirection, anchor);
    };
    View.prototype.endInteractionInternal = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        this.setHint(ViewHint.INTERACTING, -1);
        this.resolveConstraints(opt_duration, opt_resolutionDirection, opt_anchor);
    };
    View.prototype.getConstrainedCenter = function (targetCenter, opt_targetResolution) {
        var size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(targetCenter, opt_targetResolution || this.getResolution(), size);
    };
    View.prototype.getConstrainedZoom = function (targetZoom, opt_direction) {
        var targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(this.getConstrainedResolution(targetRes, opt_direction));
    };
    View.prototype.getConstrainedResolution = function (targetResolution, opt_direction) {
        var direction = opt_direction || 0;
        var size = this.getViewportSize_(this.getRotation());
        return this.constraints_.resolution(targetResolution, direction, size);
    };
    return View;
}(ol_Object.Z));
function animationCallback(callback, returnValue) {
    setTimeout(function () {
        callback(returnValue);
    }, 0);
}
function createCenterConstraint(options) {
    if (options.extent !== undefined) {
        var smooth = options.smoothExtentConstraint !== undefined
            ? options.smoothExtentConstraint
            : true;
        return createExtent(options.extent, options.constrainOnlyCenter, smooth);
    }
    var projection = (0,ol_proj.UQ)(options.projection, 'EPSG:3857');
    if (options.multiWorld !== true && projection.isGlobal()) {
        var extent = projection.getExtent().slice();
        extent[0] = -Infinity;
        extent[2] = Infinity;
        return createExtent(extent, false, false);
    }
    return none;
}
function createResolutionConstraint(options) {
    var resolutionConstraint;
    var maxResolution;
    var minResolution;
    var defaultMaxZoom = 28;
    var defaultZoomFactor = 2;
    var minZoom = options.minZoom !== undefined ? options.minZoom : DEFAULT_MIN_ZOOM;
    var maxZoom = options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;
    var zoomFactor = options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;
    var multiWorld = options.multiWorld !== undefined ? options.multiWorld : false;
    var smooth = options.smoothResolutionConstraint !== undefined
        ? options.smoothResolutionConstraint
        : true;
    var showFullExtent = options.showFullExtent !== undefined ? options.showFullExtent : false;
    var projection = (0,ol_proj.UQ)(options.projection, 'EPSG:3857');
    var projExtent = projection.getExtent();
    var constrainOnlyCenter = options.constrainOnlyCenter;
    var extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
        constrainOnlyCenter = false;
        extent = projExtent;
    }
    if (options.resolutions !== undefined) {
        var resolutions = options.resolutions;
        maxResolution = resolutions[minZoom];
        minResolution =
            resolutions[maxZoom] !== undefined
                ? resolutions[maxZoom]
                : resolutions[resolutions.length - 1];
        if (options.constrainResolution) {
            resolutionConstraint = createSnapToResolutions(resolutions, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
        else {
            resolutionConstraint = createMinMaxResolution(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
    }
    else {
        var size = !projExtent
            ? 
                (360 * ol_proj.Wm[Units.ZP.DEGREES]) / projection.getMetersPerUnit()
            : Math.max((0,ol_extent.dz)(projExtent), (0,ol_extent.Cr)(projExtent));
        var defaultMaxResolution = size / DEFAULT_TILE_SIZE / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
        var defaultMinResolution = defaultMaxResolution /
            Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
        maxResolution = options.maxResolution;
        if (maxResolution !== undefined) {
            minZoom = 0;
        }
        else {
            maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
        }
        minResolution = options.minResolution;
        if (minResolution === undefined) {
            if (options.maxZoom !== undefined) {
                if (options.maxResolution !== undefined) {
                    minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
                }
                else {
                    minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
                }
            }
            else {
                minResolution = defaultMinResolution;
            }
        }
        maxZoom =
            minZoom +
                Math.floor(Math.log(maxResolution / minResolution) / Math.log(zoomFactor));
        minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
        if (options.constrainResolution) {
            resolutionConstraint = createSnapToPower(zoomFactor, maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
        else {
            resolutionConstraint = createMinMaxResolution(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
    }
    return {
        constraint: resolutionConstraint,
        maxResolution: maxResolution,
        minResolution: minResolution,
        minZoom: minZoom,
        zoomFactor: zoomFactor,
    };
}
function createRotationConstraint(options) {
    var enableRotation = options.enableRotation !== undefined ? options.enableRotation : true;
    if (enableRotation) {
        var constrainRotation = options.constrainRotation;
        if (constrainRotation === undefined || constrainRotation === true) {
            return createSnapToZero();
        }
        else if (constrainRotation === false) {
            return rotationconstraint_none;
        }
        else if (typeof constrainRotation === 'number') {
            return createSnapToN(constrainRotation);
        }
        else {
            return rotationconstraint_none;
        }
    }
    else {
        return disable;
    }
}
function isNoopAnimation(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
        if (!(0,ol_coordinate.fS)(animation.sourceCenter, animation.targetCenter)) {
            return false;
        }
    }
    if (animation.sourceResolution !== animation.targetResolution) {
        return false;
    }
    if (animation.sourceRotation !== animation.targetRotation) {
        return false;
    }
    return true;
}
function calculateCenterOn(coordinate, size, position, resolution, rotation) {
    var cosAngle = Math.cos(-rotation);
    var sinAngle = Math.sin(-rotation);
    var rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    var rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    sinAngle = -sinAngle; 
    var centerX = rotX * cosAngle - rotY * sinAngle;
    var centerY = rotY * cosAngle + rotX * sinAngle;
    return [centerX, centerY];
}
 const ol_View = (View);
;
function buffer(size, num, opt_size) {
    if (opt_size === undefined) {
        opt_size = [0, 0];
    }
    opt_size[0] = size[0] + 2 * num;
    opt_size[1] = size[1] + 2 * num;
    return opt_size;
}
function hasArea(size) {
    return size[0] > 0 && size[1] > 0;
}
function scale(size, ratio, opt_size) {
    if (opt_size === undefined) {
        opt_size = [0, 0];
    }
    opt_size[0] = (size[0] * ratio + 0.5) | 0;
    opt_size[1] = (size[1] * ratio + 0.5) | 0;
    return opt_size;
}
function toSize(size, opt_size) {
    if (Array.isArray(size)) {
        return size;
    }
    else {
        if (opt_size === undefined) {
            opt_size = [size, size];
        }
        else {
            opt_size[0] = size;
            opt_size[1] = size;
        }
        return opt_size;
    }
}
;
var PluggableMap_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




























function removeLayerMapProperty(layer) {
    if (layer instanceof layer_Layer) {
        layer.setMapInternal(null);
        return;
    }
    if (layer instanceof Group) {
        layer.getLayers().forEach(removeLayerMapProperty);
    }
}
function setLayerMapProperty(layer, map) {
    if (layer instanceof layer_Layer) {
        layer.setMapInternal(map);
        return;
    }
    if (layer instanceof Group) {
        var layers = layer.getLayers().getArray();
        for (var i = 0, ii = layers.length; i < ii; ++i) {
            setLayerMapProperty(layers[i], map);
        }
    }
}
var PluggableMap =  (function (_super) {
    PluggableMap_extends(PluggableMap, _super);
    function PluggableMap(options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        var optionsInternal = createOptionsInternal(options);
        _this.renderComplete_;
        _this.loaded_ = true;
        _this.boundHandleBrowserEvent_ = _this.handleBrowserEvent.bind(_this);
        _this.maxTilesLoading_ =
            options.maxTilesLoading !== undefined ? options.maxTilesLoading : 16;
        _this.pixelRatio_ =
            options.pixelRatio !== undefined
                ? options.pixelRatio
                : has.MP;
        _this.postRenderTimeoutHandle_;
        _this.animationDelayKey_;
        _this.animationDelay_ =  function () {
            this.animationDelayKey_ = undefined;
            this.renderFrame_(Date.now());
        }.bind(_this);
        _this.coordinateToPixelTransform_ = (0,ol_transform.Ue)();
        _this.pixelToCoordinateTransform_ = (0,ol_transform.Ue)();
        _this.frameIndex_ = 0;
        _this.frameState_ = null;
        _this.previousExtent_ = null;
        _this.viewPropertyListenerKey_ = null;
        _this.viewChangeListenerKey_ = null;
        _this.layerGroupPropertyListenerKeys_ = null;
        _this.viewport_ = document.createElement('div');
        _this.viewport_.className =
            'ol-viewport' + ('ontouchstart' in window ? ' ol-touch' : '');
        _this.viewport_.style.position = 'relative';
        _this.viewport_.style.overflow = 'hidden';
        _this.viewport_.style.width = '100%';
        _this.viewport_.style.height = '100%';
        _this.overlayContainer_ = document.createElement('div');
        _this.overlayContainer_.style.position = 'absolute';
        _this.overlayContainer_.style.zIndex = '0';
        _this.overlayContainer_.style.width = '100%';
        _this.overlayContainer_.style.height = '100%';
        _this.overlayContainer_.style.pointerEvents = 'none';
        _this.overlayContainer_.className = 'ol-overlaycontainer';
        _this.viewport_.appendChild(_this.overlayContainer_);
        _this.overlayContainerStopEvent_ = document.createElement('div');
        _this.overlayContainerStopEvent_.style.position = 'absolute';
        _this.overlayContainerStopEvent_.style.zIndex = '0';
        _this.overlayContainerStopEvent_.style.width = '100%';
        _this.overlayContainerStopEvent_.style.height = '100%';
        _this.overlayContainerStopEvent_.style.pointerEvents = 'none';
        _this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent';
        _this.viewport_.appendChild(_this.overlayContainerStopEvent_);
        _this.mapBrowserEventHandler_ = null;
        _this.moveTolerance_ = options.moveTolerance;
        _this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
        _this.targetChangeHandlerKeys_ = null;
        _this.controls = optionsInternal.controls || new ol_Collection();
        _this.interactions = optionsInternal.interactions || new ol_Collection();
        _this.overlays_ = optionsInternal.overlays;
        _this.overlayIdIndex_ = {};
        _this.renderer_ = null;
        _this.postRenderFunctions_ = [];
        _this.tileQueue_ = new ol_TileQueue(_this.getTilePriority.bind(_this), _this.handleTileChange_.bind(_this));
        _this.addChangeListener(MapProperty.LAYERGROUP, _this.handleLayerGroupChanged_);
        _this.addChangeListener(MapProperty.VIEW, _this.handleViewChanged_);
        _this.addChangeListener(MapProperty.SIZE, _this.handleSizeChanged_);
        _this.addChangeListener(MapProperty.TARGET, _this.handleTargetChanged_);
        _this.setProperties(optionsInternal.values);
        var map = _this;
        if (options.view && !(options.view instanceof ol_View)) {
            options.view.then(function (viewOptions) {
                map.setView(new ol_View(viewOptions));
            });
        }
        _this.controls.addEventListener(CollectionEventType.ADD, 
        function (event) {
            event.element.setMap(this);
        }.bind(_this));
        _this.controls.addEventListener(CollectionEventType.REMOVE, 
        function (event) {
            event.element.setMap(null);
        }.bind(_this));
        _this.interactions.addEventListener(CollectionEventType.ADD, 
        function (event) {
            event.element.setMap(this);
        }.bind(_this));
        _this.interactions.addEventListener(CollectionEventType.REMOVE, 
        function (event) {
            event.element.setMap(null);
        }.bind(_this));
        _this.overlays_.addEventListener(CollectionEventType.ADD, 
        function (event) {
            this.addOverlayInternal_(
 (event.element));
        }.bind(_this));
        _this.overlays_.addEventListener(CollectionEventType.REMOVE, 
        function (event) {
            var overlay =  (event.element);
            var id = overlay.getId();
            if (id !== undefined) {
                delete this.overlayIdIndex_[id.toString()];
            }
            event.element.setMap(null);
        }.bind(_this));
        _this.controls.forEach(
        function (control) {
            control.setMap(this);
        }.bind(_this));
        _this.interactions.forEach(
        function (interaction) {
            interaction.setMap(this);
        }.bind(_this));
        _this.overlays_.forEach(_this.addOverlayInternal_.bind(_this));
        return _this;
    }
    PluggableMap.prototype.createRenderer = function () {
        throw new Error('Use a map type that has a createRenderer method');
    };
    PluggableMap.prototype.addControl = function (control) {
        this.getControls().push(control);
    };
    PluggableMap.prototype.addInteraction = function (interaction) {
        this.getInteractions().push(interaction);
    };
    PluggableMap.prototype.addLayer = function (layer) {
        var layers = this.getLayerGroup().getLayers();
        layers.push(layer);
    };
    PluggableMap.prototype.handleLayerAdd_ = function (event) {
        setLayerMapProperty(event.layer, this);
    };
    PluggableMap.prototype.addOverlay = function (overlay) {
        this.getOverlays().push(overlay);
    };
    PluggableMap.prototype.addOverlayInternal_ = function (overlay) {
        var id = overlay.getId();
        if (id !== undefined) {
            this.overlayIdIndex_[id.toString()] = overlay;
        }
        overlay.setMap(this);
    };
    PluggableMap.prototype.disposeInternal = function () {
        this.setTarget(null);
        _super.prototype.disposeInternal.call(this);
    };
    PluggableMap.prototype.forEachFeatureAtPixel = function (pixel, callback, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return;
        }
        var coordinate = this.getCoordinateFromPixelInternal(pixel);
        opt_options = opt_options !== undefined ? opt_options : {};
        var hitTolerance = opt_options.hitTolerance !== undefined ? opt_options.hitTolerance : 0;
        var layerFilter = opt_options.layerFilter !== undefined ? opt_options.layerFilter : functions.uX;
        var checkWrapped = opt_options.checkWrapped !== false;
        return this.renderer_.forEachFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, callback, null, layerFilter, null);
    };
    PluggableMap.prototype.getFeaturesAtPixel = function (pixel, opt_options) {
        var features = [];
        this.forEachFeatureAtPixel(pixel, function (feature) {
            features.push(feature);
        }, opt_options);
        return features;
    };
    PluggableMap.prototype.getAllLayers = function () {
        var layers = [];
        function addLayersFrom(layerGroup) {
            layerGroup.forEach(function (layer) {
                if (layer instanceof Group) {
                    addLayersFrom(layer.getLayers());
                }
                else {
                    layers.push(layer);
                }
            });
        }
        addLayersFrom(this.getLayers());
        return layers;
    };
    PluggableMap.prototype.forEachLayerAtPixel = function (pixel, callback, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return;
        }
        var options = opt_options || {};
        var hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        var layerFilter = options.layerFilter || functions.uX;
        return this.renderer_.forEachLayerAtPixel(pixel, this.frameState_, hitTolerance, callback, layerFilter);
    };
    PluggableMap.prototype.hasFeatureAtPixel = function (pixel, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return false;
        }
        var coordinate = this.getCoordinateFromPixelInternal(pixel);
        opt_options = opt_options !== undefined ? opt_options : {};
        var layerFilter = opt_options.layerFilter !== undefined ? opt_options.layerFilter : functions.uX;
        var hitTolerance = opt_options.hitTolerance !== undefined ? opt_options.hitTolerance : 0;
        var checkWrapped = opt_options.checkWrapped !== false;
        return this.renderer_.hasFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, layerFilter, null);
    };
    PluggableMap.prototype.getEventCoordinate = function (event) {
        return this.getCoordinateFromPixel(this.getEventPixel(event));
    };
    PluggableMap.prototype.getEventCoordinateInternal = function (event) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    };
    PluggableMap.prototype.getEventPixel = function (event) {
        var viewportPosition = this.viewport_.getBoundingClientRect();
        var eventPosition = 
        'changedTouches' in event
            ?  (event).changedTouches[0]
            :  (event);
        return [
            eventPosition.clientX - viewportPosition.left,
            eventPosition.clientY - viewportPosition.top,
        ];
    };
    PluggableMap.prototype.getTarget = function () {
        return  (this.get(MapProperty.TARGET));
    };
    PluggableMap.prototype.getTargetElement = function () {
        var target = this.getTarget();
        if (target !== undefined) {
            return typeof target === 'string'
                ? document.getElementById(target)
                : target;
        }
        else {
            return null;
        }
    };
    PluggableMap.prototype.getCoordinateFromPixel = function (pixel) {
        return (0,ol_proj.lO)(this.getCoordinateFromPixelInternal(pixel), this.getView().getProjection());
    };
    PluggableMap.prototype.getCoordinateFromPixelInternal = function (pixel) {
        var frameState = this.frameState_;
        if (!frameState) {
            return null;
        }
        else {
            return (0,ol_transform.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
        }
    };
    PluggableMap.prototype.getControls = function () {
        return this.controls;
    };
    PluggableMap.prototype.getOverlays = function () {
        return this.overlays_;
    };
    PluggableMap.prototype.getOverlayById = function (id) {
        var overlay = this.overlayIdIndex_[id.toString()];
        return overlay !== undefined ? overlay : null;
    };
    PluggableMap.prototype.getInteractions = function () {
        return this.interactions;
    };
    PluggableMap.prototype.getLayerGroup = function () {
        return  (this.get(MapProperty.LAYERGROUP));
    };
    PluggableMap.prototype.setLayers = function (layers) {
        var group = this.getLayerGroup();
        if (layers instanceof ol_Collection) {
            group.setLayers(layers);
            return;
        }
        var collection = group.getLayers();
        collection.clear();
        collection.extend(layers);
    };
    PluggableMap.prototype.getLayers = function () {
        var layers = this.getLayerGroup().getLayers();
        return layers;
    };
    PluggableMap.prototype.getLoadingOrNotReady = function () {
        var layerStatesArray = this.getLayerGroup().getLayerStatesArray();
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var state = layerStatesArray[i];
            if (!state.visible) {
                continue;
            }
            var renderer = state.layer.getRenderer();
            if (renderer && !renderer.ready) {
                return true;
            }
            var source =  (state.layer).getSource();
            if (source && source.loading) {
                return true;
            }
        }
        return false;
    };
    PluggableMap.prototype.getPixelFromCoordinate = function (coordinate) {
        var viewCoordinate = (0,ol_proj.Vs)(coordinate, this.getView().getProjection());
        return this.getPixelFromCoordinateInternal(viewCoordinate);
    };
    PluggableMap.prototype.getPixelFromCoordinateInternal = function (coordinate) {
        var frameState = this.frameState_;
        if (!frameState) {
            return null;
        }
        else {
            return (0,ol_transform.nn)(frameState.coordinateToPixelTransform, coordinate.slice(0, 2));
        }
    };
    PluggableMap.prototype.getRenderer = function () {
        return this.renderer_;
    };
    PluggableMap.prototype.getSize = function () {
        return  (this.get(MapProperty.SIZE));
    };
    PluggableMap.prototype.getView = function () {
        return  (this.get(MapProperty.VIEW));
    };
    PluggableMap.prototype.getViewport = function () {
        return this.viewport_;
    };
    PluggableMap.prototype.getOverlayContainer = function () {
        return this.overlayContainer_;
    };
    PluggableMap.prototype.getOverlayContainerStopEvent = function () {
        return this.overlayContainerStopEvent_;
    };
    PluggableMap.prototype.getOwnerDocument = function () {
        var targetElement = this.getTargetElement();
        return targetElement ? targetElement.ownerDocument : document;
    };
    PluggableMap.prototype.getTilePriority = function (tile, tileSourceKey, tileCenter, tileResolution) {
        return getTilePriority(this.frameState_, tile, tileSourceKey, tileCenter, tileResolution);
    };
    PluggableMap.prototype.handleBrowserEvent = function (browserEvent, opt_type) {
        var type = opt_type || browserEvent.type;
        var mapBrowserEvent = new ol_MapBrowserEvent(type, this, browserEvent);
        this.handleMapBrowserEvent(mapBrowserEvent);
    };
    PluggableMap.prototype.handleMapBrowserEvent = function (mapBrowserEvent) {
        if (!this.frameState_) {
            return;
        }
        var originalEvent =  (mapBrowserEvent.originalEvent);
        var eventType = originalEvent.type;
        if (eventType === pointer_EventType.POINTERDOWN ||
            eventType === EventType.Z.WHEEL ||
            eventType === EventType.Z.KEYDOWN) {
            var doc = this.getOwnerDocument();
            var rootNode = this.viewport_.getRootNode
                ? this.viewport_.getRootNode()
                : doc;
            var target =  (originalEvent.target);
            if (
            this.overlayContainerStopEvent_.contains(target) ||
                !(rootNode === doc ? doc.documentElement : rootNode).contains(target)) {
                return;
            }
        }
        mapBrowserEvent.frameState = this.frameState_;
        if (this.dispatchEvent(mapBrowserEvent) !== false) {
            var interactionsArray = this.getInteractions().getArray().slice();
            for (var i = interactionsArray.length - 1; i >= 0; i--) {
                var interaction = interactionsArray[i];
                if (interaction.getMap() !== this ||
                    !interaction.getActive() ||
                    !this.getTargetElement()) {
                    continue;
                }
                var cont = interaction.handleEvent(mapBrowserEvent);
                if (!cont || mapBrowserEvent.propagationStopped) {
                    break;
                }
            }
        }
    };
    PluggableMap.prototype.handlePostRender = function () {
        var frameState = this.frameState_;
        var tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
            var maxTotalLoading = this.maxTilesLoading_;
            var maxNewLoads = maxTotalLoading;
            if (frameState) {
                var hints = frameState.viewHints;
                if (hints[ViewHint.ANIMATING] || hints[ViewHint.INTERACTING]) {
                    var lowOnFrameBudget = Date.now() - frameState.time > 8;
                    maxTotalLoading = lowOnFrameBudget ? 0 : 8;
                    maxNewLoads = lowOnFrameBudget ? 0 : 2;
                }
            }
            if (tileQueue.getTilesLoading() < maxTotalLoading) {
                tileQueue.reprioritize(); 
                tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
            }
        }
        if (frameState && this.renderer_ && !frameState.animate) {
            if (this.renderComplete_ === true) {
                if (this.hasListener(render_EventType.RENDERCOMPLETE)) {
                    this.renderer_.dispatchRenderEvent(render_EventType.RENDERCOMPLETE, frameState);
                }
                if (this.loaded_ === false) {
                    this.loaded_ = true;
                    this.dispatchEvent(new ol_MapEvent(MapEventType.LOADEND, this, frameState));
                }
            }
            else if (this.loaded_ === true) {
                this.loaded_ = false;
                this.dispatchEvent(new ol_MapEvent(MapEventType.LOADSTART, this, frameState));
            }
        }
        var postRenderFunctions = this.postRenderFunctions_;
        for (var i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
            postRenderFunctions[i](this, frameState);
        }
        postRenderFunctions.length = 0;
    };
    PluggableMap.prototype.handleSizeChanged_ = function () {
        if (this.getView() && !this.getView().getAnimating()) {
            this.getView().resolveConstraints(0);
        }
        this.render();
    };
    PluggableMap.prototype.handleTargetChanged_ = function () {
        if (this.mapBrowserEventHandler_) {
            for (var i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
                (0,events.bN)(this.targetChangeHandlerKeys_[i]);
            }
            this.targetChangeHandlerKeys_ = null;
            this.viewport_.removeEventListener(EventType.Z.CONTEXTMENU, this.boundHandleBrowserEvent_);
            this.viewport_.removeEventListener(EventType.Z.WHEEL, this.boundHandleBrowserEvent_);
            this.mapBrowserEventHandler_.dispose();
            this.mapBrowserEventHandler_ = null;
            removeNode(this.viewport_);
        }
        var targetElement = this.getTargetElement();
        if (!targetElement) {
            if (this.renderer_) {
                clearTimeout(this.postRenderTimeoutHandle_);
                this.postRenderTimeoutHandle_ = undefined;
                this.postRenderFunctions_.length = 0;
                this.renderer_.dispose();
                this.renderer_ = null;
            }
            if (this.animationDelayKey_) {
                cancelAnimationFrame(this.animationDelayKey_);
                this.animationDelayKey_ = undefined;
            }
        }
        else {
            targetElement.appendChild(this.viewport_);
            if (!this.renderer_) {
                this.renderer_ = this.createRenderer();
            }
            this.mapBrowserEventHandler_ = new ol_MapBrowserEventHandler(this, this.moveTolerance_);
            for (var key in ol_MapBrowserEventType) {
                this.mapBrowserEventHandler_.addEventListener(ol_MapBrowserEventType[key], this.handleMapBrowserEvent.bind(this));
            }
            this.viewport_.addEventListener(EventType.Z.CONTEXTMENU, this.boundHandleBrowserEvent_, false);
            this.viewport_.addEventListener(EventType.Z.WHEEL, this.boundHandleBrowserEvent_, has.bM ? { passive: false } : false);
            var defaultView = this.getOwnerDocument().defaultView;
            var keyboardEventTarget = !this.keyboardEventTarget_
                ? targetElement
                : this.keyboardEventTarget_;
            this.targetChangeHandlerKeys_ = [
                (0,events.oL)(keyboardEventTarget, EventType.Z.KEYDOWN, this.handleBrowserEvent, this),
                (0,events.oL)(keyboardEventTarget, EventType.Z.KEYPRESS, this.handleBrowserEvent, this),
                (0,events.oL)(defaultView, EventType.Z.RESIZE, this.updateSize, this),
            ];
        }
        this.updateSize();
    };
    PluggableMap.prototype.handleTileChange_ = function () {
        this.render();
    };
    PluggableMap.prototype.handleViewPropertyChanged_ = function () {
        this.render();
    };
    PluggableMap.prototype.handleViewChanged_ = function () {
        if (this.viewPropertyListenerKey_) {
            (0,events.bN)(this.viewPropertyListenerKey_);
            this.viewPropertyListenerKey_ = null;
        }
        if (this.viewChangeListenerKey_) {
            (0,events.bN)(this.viewChangeListenerKey_);
            this.viewChangeListenerKey_ = null;
        }
        var view = this.getView();
        if (view) {
            this.updateViewportSize_();
            this.viewPropertyListenerKey_ = (0,events.oL)(view, ObjectEventType.Z.PROPERTYCHANGE, this.handleViewPropertyChanged_, this);
            this.viewChangeListenerKey_ = (0,events.oL)(view, EventType.Z.CHANGE, this.handleViewPropertyChanged_, this);
            view.resolveConstraints(0);
        }
        this.render();
    };
    PluggableMap.prototype.handleLayerGroupChanged_ = function () {
        if (this.layerGroupPropertyListenerKeys_) {
            this.layerGroupPropertyListenerKeys_.forEach(events.bN);
            this.layerGroupPropertyListenerKeys_ = null;
        }
        var layerGroup = this.getLayerGroup();
        if (layerGroup) {
            this.handleLayerAdd_(new GroupEvent('addlayer', layerGroup));
            this.layerGroupPropertyListenerKeys_ = [
                (0,events.oL)(layerGroup, ObjectEventType.Z.PROPERTYCHANGE, this.render, this),
                (0,events.oL)(layerGroup, EventType.Z.CHANGE, this.render, this),
                (0,events.oL)(layerGroup, 'addlayer', this.handleLayerAdd_, this),
                (0,events.oL)(layerGroup, 'removelayer', this.handleLayerRemove_, this),
            ];
        }
        this.render();
    };
    PluggableMap.prototype.isRendered = function () {
        return !!this.frameState_;
    };
    PluggableMap.prototype.renderSync = function () {
        if (this.animationDelayKey_) {
            cancelAnimationFrame(this.animationDelayKey_);
        }
        this.animationDelay_();
    };
    PluggableMap.prototype.redrawText = function () {
        var layerStates = this.getLayerGroup().getLayerStatesArray();
        for (var i = 0, ii = layerStates.length; i < ii; ++i) {
            var layer = layerStates[i].layer;
            if (layer.hasRenderer()) {
                layer.getRenderer().handleFontsChanged();
            }
        }
    };
    PluggableMap.prototype.render = function () {
        if (this.renderer_ && this.animationDelayKey_ === undefined) {
            this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
        }
    };
    PluggableMap.prototype.removeControl = function (control) {
        return this.getControls().remove(control);
    };
    PluggableMap.prototype.removeInteraction = function (interaction) {
        return this.getInteractions().remove(interaction);
    };
    PluggableMap.prototype.removeLayer = function (layer) {
        var layers = this.getLayerGroup().getLayers();
        return layers.remove(layer);
    };
    PluggableMap.prototype.handleLayerRemove_ = function (event) {
        removeLayerMapProperty(event.layer);
    };
    PluggableMap.prototype.removeOverlay = function (overlay) {
        return this.getOverlays().remove(overlay);
    };
    PluggableMap.prototype.renderFrame_ = function (time) {
        var _this = this;
        var size = this.getSize();
        var view = this.getView();
        var previousFrameState = this.frameState_;
        var frameState = null;
        if (size !== undefined && hasArea(size) && view && view.isDef()) {
            var viewHints = view.getHints(this.frameState_ ? this.frameState_.viewHints : undefined);
            var viewState = view.getState();
            frameState = {
                animate: false,
                coordinateToPixelTransform: this.coordinateToPixelTransform_,
                declutterTree: null,
                extent: (0,ol_extent.p8)(viewState.center, viewState.resolution, viewState.rotation, size),
                index: this.frameIndex_++,
                layerIndex: 0,
                layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
                pixelRatio: this.pixelRatio_,
                pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
                postRenderFunctions: [],
                size: size,
                tileQueue: this.tileQueue_,
                time: time,
                usedTiles: {},
                viewState: viewState,
                viewHints: viewHints,
                wantedTiles: {},
                mapId: (0,util.sq)(this),
                renderTargets: {},
            };
            if (viewState.nextCenter && viewState.nextResolution) {
                var rotation = isNaN(viewState.nextRotation)
                    ? viewState.rotation
                    : viewState.nextRotation;
                frameState.nextExtent = (0,ol_extent.p8)(viewState.nextCenter, viewState.nextResolution, rotation, size);
            }
        }
        this.frameState_ = frameState;
 (this.renderer_).renderFrame(frameState);
        if (frameState) {
            if (frameState.animate) {
                this.render();
            }
            Array.prototype.push.apply(this.postRenderFunctions_, frameState.postRenderFunctions);
            if (previousFrameState) {
                var moveStart = !this.previousExtent_ ||
                    (!(0,ol_extent.xb)(this.previousExtent_) &&
                        !(0,ol_extent.fS)(frameState.extent, this.previousExtent_));
                if (moveStart) {
                    this.dispatchEvent(new ol_MapEvent(MapEventType.MOVESTART, this, previousFrameState));
                    this.previousExtent_ = (0,ol_extent.YN)(this.previousExtent_);
                }
            }
            var idle = this.previousExtent_ &&
                !frameState.viewHints[ViewHint.ANIMATING] &&
                !frameState.viewHints[ViewHint.INTERACTING] &&
                !(0,ol_extent.fS)(frameState.extent, this.previousExtent_);
            if (idle) {
                this.dispatchEvent(new ol_MapEvent(MapEventType.MOVEEND, this, frameState));
                (0,ol_extent.d9)(frameState.extent, this.previousExtent_);
            }
        }
        this.dispatchEvent(new ol_MapEvent(MapEventType.POSTRENDER, this, frameState));
        this.renderComplete_ =
            this.hasListener(MapEventType.LOADSTART) ||
                this.hasListener(MapEventType.LOADEND) ||
                this.hasListener(render_EventType.RENDERCOMPLETE)
                ? !this.tileQueue_.getTilesLoading() &&
                    !this.tileQueue_.getCount() &&
                    !this.getLoadingOrNotReady()
                : undefined;
        if (!this.postRenderTimeoutHandle_) {
            this.postRenderTimeoutHandle_ = setTimeout(function () {
                _this.postRenderTimeoutHandle_ = undefined;
                _this.handlePostRender();
            }, 0);
        }
    };
    PluggableMap.prototype.setLayerGroup = function (layerGroup) {
        var oldLayerGroup = this.getLayerGroup();
        if (oldLayerGroup) {
            this.handleLayerRemove_(new GroupEvent('removelayer', oldLayerGroup));
        }
        this.set(MapProperty.LAYERGROUP, layerGroup);
    };
    PluggableMap.prototype.setSize = function (size) {
        this.set(MapProperty.SIZE, size);
    };
    PluggableMap.prototype.setTarget = function (target) {
        this.set(MapProperty.TARGET, target);
    };
    PluggableMap.prototype.setView = function (view) {
        if (!view || view instanceof ol_View) {
            this.set(MapProperty.VIEW, view);
            return;
        }
        this.set(MapProperty.VIEW, new ol_View());
        var map = this;
        view.then(function (viewOptions) {
            map.setView(new ol_View(viewOptions));
        });
    };
    PluggableMap.prototype.updateSize = function () {
        var targetElement = this.getTargetElement();
        var size = undefined;
        if (targetElement) {
            var computedStyle = getComputedStyle(targetElement);
            var width = targetElement.offsetWidth -
                parseFloat(computedStyle['borderLeftWidth']) -
                parseFloat(computedStyle['paddingLeft']) -
                parseFloat(computedStyle['paddingRight']) -
                parseFloat(computedStyle['borderRightWidth']);
            var height = targetElement.offsetHeight -
                parseFloat(computedStyle['borderTopWidth']) -
                parseFloat(computedStyle['paddingTop']) -
                parseFloat(computedStyle['paddingBottom']) -
                parseFloat(computedStyle['borderBottomWidth']);
            if (!isNaN(width) && !isNaN(height)) {
                size = [width, height];
                if (!hasArea(size) &&
                    !!(targetElement.offsetWidth ||
                        targetElement.offsetHeight ||
                        targetElement.getClientRects().length)) {
                    console.warn("No map visible because the map container's width or height are 0.");
                }
            }
        }
        this.setSize(size);
        this.updateViewportSize_();
    };
    PluggableMap.prototype.updateViewportSize_ = function () {
        var view = this.getView();
        if (view) {
            var size = undefined;
            var computedStyle = getComputedStyle(this.viewport_);
            if (computedStyle.width && computedStyle.height) {
                size = [
                    parseInt(computedStyle.width, 10),
                    parseInt(computedStyle.height, 10),
                ];
            }
            view.setViewportSize(size);
        }
    };
    return PluggableMap;
}(ol_Object.Z));
function createOptionsInternal(options) {
    var keyboardEventTarget = null;
    if (options.keyboardEventTarget !== undefined) {
        keyboardEventTarget =
            typeof options.keyboardEventTarget === 'string'
                ? document.getElementById(options.keyboardEventTarget)
                : options.keyboardEventTarget;
    }
    var values = {};
    var layerGroup = options.layers &&
        typeof ( (options.layers).getLayers) === 'function'
        ?  (options.layers)
        : new Group({ layers:  (options.layers) });
    values[MapProperty.LAYERGROUP] = layerGroup;
    values[MapProperty.TARGET] = options.target;
    values[MapProperty.VIEW] =
        options.view instanceof ol_View ? options.view : new ol_View();
    var controls;
    if (options.controls !== undefined) {
        if (Array.isArray(options.controls)) {
            controls = new ol_Collection(options.controls.slice());
        }
        else {
            (0,asserts.h)(typeof ( (options.controls).getArray) === 'function', 47); 
            controls =  (options.controls);
        }
    }
    var interactions;
    if (options.interactions !== undefined) {
        if (Array.isArray(options.interactions)) {
            interactions = new ol_Collection(options.interactions.slice());
        }
        else {
            (0,asserts.h)(typeof ( (options.interactions).getArray) ===
                'function', 48); 
            interactions =  (options.interactions);
        }
    }
    var overlays;
    if (options.overlays !== undefined) {
        if (Array.isArray(options.overlays)) {
            overlays = new ol_Collection(options.overlays.slice());
        }
        else {
            (0,asserts.h)(typeof ( (options.overlays).getArray) === 'function', 49); 
            overlays = options.overlays;
        }
    }
    else {
        overlays = new ol_Collection();
    }
    return {
        controls: controls,
        interactions: interactions,
        keyboardEventTarget: keyboardEventTarget,
        overlays: overlays,
        values: values,
    };
}
 const ol_PluggableMap = (PluggableMap);
;
var Control_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Control =  (function (_super) {
    Control_extends(Control, _super);
    function Control(options) {
        var _this = _super.call(this) || this;
        var element = options.element;
        if (element && !options.target && !element.style.pointerEvents) {
            element.style.pointerEvents = 'auto';
        }
        _this.element = element ? element : null;
        _this.target_ = null;
        _this.map_ = null;
        _this.listenerKeys = [];
        if (options.render) {
            _this.render = options.render;
        }
        if (options.target) {
            _this.setTarget(options.target);
        }
        return _this;
    }
    Control.prototype.disposeInternal = function () {
        removeNode(this.element);
        _super.prototype.disposeInternal.call(this);
    };
    Control.prototype.getMap = function () {
        return this.map_;
    };
    Control.prototype.setMap = function (map) {
        if (this.map_) {
            removeNode(this.element);
        }
        for (var i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
            (0,events.bN)(this.listenerKeys[i]);
        }
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
            var target = this.target_
                ? this.target_
                : map.getOverlayContainerStopEvent();
            target.appendChild(this.element);
            if (this.render !== functions.Zn) {
                this.listenerKeys.push((0,events.oL)(map, MapEventType.POSTRENDER, this.render, this));
            }
            map.render();
        }
    };
    Control.prototype.render = function (mapEvent) { };
    Control.prototype.setTarget = function (target) {
        this.target_ =
            typeof target === 'string' ? document.getElementById(target) : target;
    };
    return Control;
}(ol_Object.Z));
 const control_Control = (Control);
;
var Attribution_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Attribution =  (function (_super) {
    Attribution_extends(Attribution, _super);
    function Attribution(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            render: options.render,
            target: options.target,
        }) || this;
        _this.ulElement_ = document.createElement('ul');
        _this.collapsed_ =
            options.collapsed !== undefined ? options.collapsed : true;
        _this.userCollapsed_ = _this.collapsed_;
        _this.overrideCollapsible_ = options.collapsible !== undefined;
        _this.collapsible_ =
            options.collapsible !== undefined ? options.collapsible : true;
        if (!_this.collapsible_) {
            _this.collapsed_ = false;
        }
        var className = options.className !== undefined ? options.className : 'ol-attribution';
        var tipLabel = options.tipLabel !== undefined ? options.tipLabel : 'Attributions';
        var expandClassName = options.expandClassName !== undefined
            ? options.expandClassName
            : className + '-expand';
        var collapseLabel = options.collapseLabel !== undefined ? options.collapseLabel : '\u203A';
        var collapseClassName = options.collapseClassName !== undefined
            ? options.collapseClassName
            : className + '-collapse';
        if (typeof collapseLabel === 'string') {
            _this.collapseLabel_ = document.createElement('span');
            _this.collapseLabel_.textContent = collapseLabel;
            _this.collapseLabel_.className = collapseClassName;
        }
        else {
            _this.collapseLabel_ = collapseLabel;
        }
        var label = options.label !== undefined ? options.label : 'i';
        if (typeof label === 'string') {
            _this.label_ = document.createElement('span');
            _this.label_.textContent = label;
            _this.label_.className = expandClassName;
        }
        else {
            _this.label_ = label;
        }
        var activeLabel = _this.collapsible_ && !_this.collapsed_ ? _this.collapseLabel_ : _this.label_;
        _this.toggleButton_ = document.createElement('button');
        _this.toggleButton_.setAttribute('type', 'button');
        _this.toggleButton_.setAttribute('aria-expanded', String(!_this.collapsed_));
        _this.toggleButton_.title = tipLabel;
        _this.toggleButton_.appendChild(activeLabel);
        _this.toggleButton_.addEventListener(EventType.Z.CLICK, _this.handleClick_.bind(_this), false);
        var cssClasses = className +
            ' ' +
            CLASS_UNSELECTABLE +
            ' ' +
            CLASS_CONTROL +
            (_this.collapsed_ && _this.collapsible_ ? ' ' + CLASS_COLLAPSED : '') +
            (_this.collapsible_ ? '' : ' ol-uncollapsible');
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(_this.toggleButton_);
        element.appendChild(_this.ulElement_);
        _this.renderedAttributions_ = [];
        _this.renderedVisible_ = true;
        return _this;
    }
    Attribution.prototype.collectSourceAttributions_ = function (frameState) {
        var lookup = {};
        var visibleAttributions = [];
        var collapsible = true;
        var layerStatesArray = frameState.layerStatesArray;
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var layerState = layerStatesArray[i];
            if (!inView(layerState, frameState.viewState)) {
                continue;
            }
            var source =  (layerState.layer).getSource();
            if (!source) {
                continue;
            }
            var attributionGetter = source.getAttributions();
            if (!attributionGetter) {
                continue;
            }
            var attributions = attributionGetter(frameState);
            if (!attributions) {
                continue;
            }
            collapsible =
                collapsible && source.getAttributionsCollapsible() !== false;
            if (Array.isArray(attributions)) {
                for (var j = 0, jj = attributions.length; j < jj; ++j) {
                    if (!(attributions[j] in lookup)) {
                        visibleAttributions.push(attributions[j]);
                        lookup[attributions[j]] = true;
                    }
                }
            }
            else {
                if (!(attributions in lookup)) {
                    visibleAttributions.push(attributions);
                    lookup[attributions] = true;
                }
            }
        }
        if (!this.overrideCollapsible_) {
            this.setCollapsible(collapsible);
        }
        return visibleAttributions;
    };
    Attribution.prototype.updateElement_ = function (frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element.style.display = 'none';
                this.renderedVisible_ = false;
            }
            return;
        }
        var attributions = this.collectSourceAttributions_(frameState);
        var visible = attributions.length > 0;
        if (this.renderedVisible_ != visible) {
            this.element.style.display = visible ? '' : 'none';
            this.renderedVisible_ = visible;
        }
        if ((0,array.fS)(attributions, this.renderedAttributions_)) {
            return;
        }
        removeChildren(this.ulElement_);
        for (var i = 0, ii = attributions.length; i < ii; ++i) {
            var element = document.createElement('li');
            element.innerHTML = attributions[i];
            this.ulElement_.appendChild(element);
        }
        this.renderedAttributions_ = attributions;
    };
    Attribution.prototype.handleClick_ = function (event) {
        event.preventDefault();
        this.handleToggle_();
        this.userCollapsed_ = this.collapsed_;
    };
    Attribution.prototype.handleToggle_ = function () {
        this.element.classList.toggle(CLASS_COLLAPSED);
        if (this.collapsed_) {
            replaceNode(this.collapseLabel_, this.label_);
        }
        else {
            replaceNode(this.label_, this.collapseLabel_);
        }
        this.collapsed_ = !this.collapsed_;
        this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_));
    };
    Attribution.prototype.getCollapsible = function () {
        return this.collapsible_;
    };
    Attribution.prototype.setCollapsible = function (collapsible) {
        if (this.collapsible_ === collapsible) {
            return;
        }
        this.collapsible_ = collapsible;
        this.element.classList.toggle('ol-uncollapsible');
        if (this.userCollapsed_) {
            this.handleToggle_();
        }
    };
    Attribution.prototype.setCollapsed = function (collapsed) {
        this.userCollapsed_ = collapsed;
        if (!this.collapsible_ || this.collapsed_ === collapsed) {
            return;
        }
        this.handleToggle_();
    };
    Attribution.prototype.getCollapsed = function () {
        return this.collapsed_;
    };
    Attribution.prototype.render = function (mapEvent) {
        this.updateElement_(mapEvent.frameState);
    };
    return Attribution;
}(control_Control));
 const control_Attribution = (Attribution);
;
var Rotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Rotate =  (function (_super) {
    Rotate_extends(Rotate, _super);
    function Rotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            render: options.render,
            target: options.target,
        }) || this;
        var className = options.className !== undefined ? options.className : 'ol-rotate';
        var label = options.label !== undefined ? options.label : '\u21E7';
        var compassClassName = options.compassClassName !== undefined
            ? options.compassClassName
            : 'ol-compass';
        _this.label_ = null;
        if (typeof label === 'string') {
            _this.label_ = document.createElement('span');
            _this.label_.className = compassClassName;
            _this.label_.textContent = label;
        }
        else {
            _this.label_ = label;
            _this.label_.classList.add(compassClassName);
        }
        var tipLabel = options.tipLabel ? options.tipLabel : 'Reset rotation';
        var button = document.createElement('button');
        button.className = className + '-reset';
        button.setAttribute('type', 'button');
        button.title = tipLabel;
        button.appendChild(_this.label_);
        button.addEventListener(EventType.Z.CLICK, _this.handleClick_.bind(_this), false);
        var cssClasses = className + ' ' + CLASS_UNSELECTABLE + ' ' + CLASS_CONTROL;
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(button);
        _this.callResetNorth_ = options.resetNorth ? options.resetNorth : undefined;
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        _this.autoHide_ = options.autoHide !== undefined ? options.autoHide : true;
        _this.rotation_ = undefined;
        if (_this.autoHide_) {
            _this.element.classList.add(CLASS_HIDDEN);
        }
        return _this;
    }
    Rotate.prototype.handleClick_ = function (event) {
        event.preventDefault();
        if (this.callResetNorth_ !== undefined) {
            this.callResetNorth_();
        }
        else {
            this.resetNorth_();
        }
    };
    Rotate.prototype.resetNorth_ = function () {
        var map = this.getMap();
        var view = map.getView();
        if (!view) {
            return;
        }
        var rotation = view.getRotation();
        if (rotation !== undefined) {
            if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
                view.animate({
                    rotation: 0,
                    duration: this.duration_,
                    easing: easeOut,
                });
            }
            else {
                view.setRotation(0);
            }
        }
    };
    Rotate.prototype.render = function (mapEvent) {
        var frameState = mapEvent.frameState;
        if (!frameState) {
            return;
        }
        var rotation = frameState.viewState.rotation;
        if (rotation != this.rotation_) {
            var transform = 'rotate(' + rotation + 'rad)';
            if (this.autoHide_) {
                var contains = this.element.classList.contains(CLASS_HIDDEN);
                if (!contains && rotation === 0) {
                    this.element.classList.add(CLASS_HIDDEN);
                }
                else if (contains && rotation !== 0) {
                    this.element.classList.remove(CLASS_HIDDEN);
                }
            }
            this.label_.style.transform = transform;
        }
        this.rotation_ = rotation;
    };
    return Rotate;
}(control_Control));
 const control_Rotate = (Rotate);
;
var Zoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Zoom =  (function (_super) {
    Zoom_extends(Zoom, _super);
    function Zoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            target: options.target,
        }) || this;
        var className = options.className !== undefined ? options.className : 'ol-zoom';
        var delta = options.delta !== undefined ? options.delta : 1;
        var zoomInClassName = options.zoomInClassName !== undefined
            ? options.zoomInClassName
            : className + '-in';
        var zoomOutClassName = options.zoomOutClassName !== undefined
            ? options.zoomOutClassName
            : className + '-out';
        var zoomInLabel = options.zoomInLabel !== undefined ? options.zoomInLabel : '+';
        var zoomOutLabel = options.zoomOutLabel !== undefined ? options.zoomOutLabel : '\u2013';
        var zoomInTipLabel = options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : 'Zoom in';
        var zoomOutTipLabel = options.zoomOutTipLabel !== undefined
            ? options.zoomOutTipLabel
            : 'Zoom out';
        var inElement = document.createElement('button');
        inElement.className = zoomInClassName;
        inElement.setAttribute('type', 'button');
        inElement.title = zoomInTipLabel;
        inElement.appendChild(typeof zoomInLabel === 'string'
            ? document.createTextNode(zoomInLabel)
            : zoomInLabel);
        inElement.addEventListener(EventType.Z.CLICK, _this.handleClick_.bind(_this, delta), false);
        var outElement = document.createElement('button');
        outElement.className = zoomOutClassName;
        outElement.setAttribute('type', 'button');
        outElement.title = zoomOutTipLabel;
        outElement.appendChild(typeof zoomOutLabel === 'string'
            ? document.createTextNode(zoomOutLabel)
            : zoomOutLabel);
        outElement.addEventListener(EventType.Z.CLICK, _this.handleClick_.bind(_this, -delta), false);
        var cssClasses = className + ' ' + CLASS_UNSELECTABLE + ' ' + CLASS_CONTROL;
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(inElement);
        element.appendChild(outElement);
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    Zoom.prototype.handleClick_ = function (delta, event) {
        event.preventDefault();
        this.zoomByDelta_(delta);
    };
    Zoom.prototype.zoomByDelta_ = function (delta) {
        var map = this.getMap();
        var view = map.getView();
        if (!view) {
            return;
        }
        var currentZoom = view.getZoom();
        if (currentZoom !== undefined) {
            var newZoom = view.getConstrainedZoom(currentZoom + delta);
            if (this.duration_ > 0) {
                if (view.getAnimating()) {
                    view.cancelAnimations();
                }
                view.animate({
                    zoom: newZoom,
                    duration: this.duration_,
                    easing: easeOut,
                });
            }
            else {
                view.setZoom(newZoom);
            }
        }
    };
    return Zoom;
}(control_Control));
 const control_Zoom = (Zoom);
;














function defaults(opt_options) {
    var options = opt_options ? opt_options : {};
    var controls = new ol_Collection();
    var zoomControl = options.zoom !== undefined ? options.zoom : true;
    if (zoomControl) {
        controls.push(new control_Zoom(options.zoomOptions));
    }
    var rotateControl = options.rotate !== undefined ? options.rotate : true;
    if (rotateControl) {
        controls.push(new control_Rotate(options.rotateOptions));
    }
    var attributionControl = options.attribution !== undefined ? options.attribution : true;
    if (attributionControl) {
        controls.push(new control_Attribution(options.attributionOptions));
    }
    return controls;
}
;
 const interaction_Property = ({
    ACTIVE: 'active',
});
;
var Interaction_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Interaction =  (function (_super) {
    Interaction_extends(Interaction, _super);
    function Interaction(opt_options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        if (opt_options && opt_options.handleEvent) {
            _this.handleEvent = opt_options.handleEvent;
        }
        _this.map_ = null;
        _this.setActive(true);
        return _this;
    }
    Interaction.prototype.getActive = function () {
        return  (this.get(interaction_Property.ACTIVE));
    };
    Interaction.prototype.getMap = function () {
        return this.map_;
    };
    Interaction.prototype.handleEvent = function (mapBrowserEvent) {
        return true;
    };
    Interaction.prototype.setActive = function (active) {
        this.set(interaction_Property.ACTIVE, active);
    };
    Interaction.prototype.setMap = function (map) {
        this.map_ = map;
    };
    return Interaction;
}(ol_Object.Z));
function pan(view, delta, opt_duration) {
    var currentCenter = view.getCenterInternal();
    if (currentCenter) {
        var center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
        view.animateInternal({
            duration: opt_duration !== undefined ? opt_duration : 250,
            easing: linear,
            center: view.getConstrainedCenter(center),
        });
    }
}
function zoomByDelta(view, delta, opt_anchor, opt_duration) {
    var currentZoom = view.getZoom();
    if (currentZoom === undefined) {
        return;
    }
    var newZoom = view.getConstrainedZoom(currentZoom + delta);
    var newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) {
        view.cancelAnimations();
    }
    view.animate({
        resolution: newResolution,
        anchor: opt_anchor,
        duration: opt_duration !== undefined ? opt_duration : 250,
        easing: easeOut,
    });
}
 const interaction_Interaction = (Interaction);
;
var DoubleClickZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DoubleClickZoom =  (function (_super) {
    DoubleClickZoom_extends(DoubleClickZoom, _super);
    function DoubleClickZoom(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        _this.delta_ = options.delta ? options.delta : 1;
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    DoubleClickZoom.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == ol_MapBrowserEventType.DBLCLICK) {
            var browserEvent =  (mapBrowserEvent.originalEvent);
            var map = mapBrowserEvent.map;
            var anchor = mapBrowserEvent.coordinate;
            var delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
            var view = map.getView();
            zoomByDelta(view, delta, anchor, this.duration_);
            browserEvent.preventDefault();
            stopEvent = true;
        }
        return !stopEvent;
    };
    return DoubleClickZoom;
}(interaction_Interaction));
 const interaction_DoubleClickZoom = (DoubleClickZoom);
;
var Pointer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PointerInteraction =  (function (_super) {
    Pointer_extends(PointerInteraction, _super);
    function PointerInteraction(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, 
 (options)) || this;
        if (options.handleDownEvent) {
            _this.handleDownEvent = options.handleDownEvent;
        }
        if (options.handleDragEvent) {
            _this.handleDragEvent = options.handleDragEvent;
        }
        if (options.handleMoveEvent) {
            _this.handleMoveEvent = options.handleMoveEvent;
        }
        if (options.handleUpEvent) {
            _this.handleUpEvent = options.handleUpEvent;
        }
        if (options.stopDown) {
            _this.stopDown = options.stopDown;
        }
        _this.handlingDownUpSequence = false;
        _this.trackedPointers_ = {};
        _this.targetPointers = [];
        return _this;
    }
    PointerInteraction.prototype.getPointerCount = function () {
        return this.targetPointers.length;
    };
    PointerInteraction.prototype.handleDownEvent = function (mapBrowserEvent) {
        return false;
    };
    PointerInteraction.prototype.handleDragEvent = function (mapBrowserEvent) { };
    PointerInteraction.prototype.handleEvent = function (mapBrowserEvent) {
        if (!mapBrowserEvent.originalEvent) {
            return true;
        }
        var stopEvent = false;
        this.updateTrackedPointers_(mapBrowserEvent);
        if (this.handlingDownUpSequence) {
            if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERDRAG) {
                this.handleDragEvent(mapBrowserEvent);
                mapBrowserEvent.originalEvent.preventDefault();
            }
            else if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERUP) {
                var handledUp = this.handleUpEvent(mapBrowserEvent);
                this.handlingDownUpSequence =
                    handledUp && this.targetPointers.length > 0;
            }
        }
        else {
            if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERDOWN) {
                var handled = this.handleDownEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handled;
                stopEvent = this.stopDown(handled);
            }
            else if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERMOVE) {
                this.handleMoveEvent(mapBrowserEvent);
            }
        }
        return !stopEvent;
    };
    PointerInteraction.prototype.handleMoveEvent = function (mapBrowserEvent) { };
    PointerInteraction.prototype.handleUpEvent = function (mapBrowserEvent) {
        return false;
    };
    PointerInteraction.prototype.stopDown = function (handled) {
        return handled;
    };
    PointerInteraction.prototype.updateTrackedPointers_ = function (mapBrowserEvent) {
        if (isPointerDraggingEvent(mapBrowserEvent)) {
            var event_1 = mapBrowserEvent.originalEvent;
            var id = event_1.pointerId.toString();
            if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERUP) {
                delete this.trackedPointers_[id];
            }
            else if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERDOWN) {
                this.trackedPointers_[id] = event_1;
            }
            else if (id in this.trackedPointers_) {
                this.trackedPointers_[id] = event_1;
            }
            this.targetPointers = (0,obj.KX)(this.trackedPointers_);
        }
    };
    return PointerInteraction;
}(interaction_Interaction));
function Pointer_centroid(pointerEvents) {
    var length = pointerEvents.length;
    var clientX = 0;
    var clientY = 0;
    for (var i = 0; i < length; i++) {
        clientX += pointerEvents[i].clientX;
        clientY += pointerEvents[i].clientY;
    }
    return [clientX / length, clientY / length];
}
function isPointerDraggingEvent(mapBrowserEvent) {
    var type = mapBrowserEvent.type;
    return (type === ol_MapBrowserEventType.POINTERDOWN ||
        type === ol_MapBrowserEventType.POINTERDRAG ||
        type === ol_MapBrowserEventType.POINTERUP);
}
 const Pointer = (PointerInteraction);
;




function condition_all(var_args) {
    var conditions = arguments;
    return function (event) {
        var pass = true;
        for (var i = 0, ii = conditions.length; i < ii; ++i) {
            pass = pass && conditions[i](event);
            if (!pass) {
                break;
            }
        }
        return pass;
    };
}
var altKeyOnly = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return (originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
var altShiftKeysOnly = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return (originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey);
};
var condition_focus = function (event) {
    var targetElement = event.map.getTargetElement();
    var activeElement = event.map.getOwnerDocument().activeElement;
    return targetElement.contains(activeElement);
};
var focusWithTabindex = function (event) {
    return event.map.getTargetElement().hasAttribute('tabindex')
        ? condition_focus(event)
        : true;
};
var always = functions.uX;
var click = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.CLICK;
};
var mouseActionButton = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return originalEvent.button == 0 && !(has.G$ && has.tK && originalEvent.ctrlKey);
};
var never = ( null && (FALSE));
var pointerMove = function (mapBrowserEvent) {
    return mapBrowserEvent.type == 'pointermove';
};
var singleClick = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.SINGLECLICK;
};
var doubleClick = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.DBLCLICK;
};
var noModifierKeys = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
var platformModifierKeyOnly = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        (MAC ? originalEvent.metaKey : originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
var shiftKeyOnly = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey);
};
var targetNotEditable = function (mapBrowserEvent) {
    var originalEvent =  (mapBrowserEvent.originalEvent);
    var tagName =  (originalEvent.target).tagName;
    return tagName !== 'INPUT' && tagName !== 'SELECT' && tagName !== 'TEXTAREA';
};
var mouseOnly = function (mapBrowserEvent) {
    var pointerEvent =  (mapBrowserEvent).originalEvent;
    (0,asserts.h)(pointerEvent !== undefined, 56); 
    return pointerEvent.pointerType == 'mouse';
};
var touchOnly = function (mapBrowserEvent) {
    var pointerEvt =  (mapBrowserEvent).originalEvent;
    assert(pointerEvt !== undefined, 56); 
    return pointerEvt.pointerType === 'touch';
};
var penOnly = function (mapBrowserEvent) {
    var pointerEvt =  (mapBrowserEvent).originalEvent;
    assert(pointerEvt !== undefined, 56); 
    return pointerEvt.pointerType === 'pen';
};
var primaryAction = function (mapBrowserEvent) {
    var pointerEvent =  (mapBrowserEvent).originalEvent;
    (0,asserts.h)(pointerEvent !== undefined, 56); 
    return pointerEvent.isPrimary && pointerEvent.button === 0;
};
;
var DragPan_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DragPan =  (function (_super) {
    DragPan_extends(DragPan, _super);
    function DragPan(opt_options) {
        var _this = _super.call(this, {
            stopDown: functions.Dv,
        }) || this;
        var options = opt_options ? opt_options : {};
        _this.kinetic_ = options.kinetic;
        _this.lastCentroid = null;
        _this.lastPointersCount_;
        _this.panning_ = false;
        var condition = options.condition
            ? options.condition
            : condition_all(noModifierKeys, primaryAction);
        _this.condition_ = options.onFocusOnly
            ? condition_all(focusWithTabindex, condition)
            : condition;
        _this.noKinetic_ = false;
        return _this;
    }
    DragPan.prototype.handleDragEvent = function (mapBrowserEvent) {
        if (!this.panning_) {
            this.panning_ = true;
            this.getMap().getView().beginInteraction();
        }
        var targetPointers = this.targetPointers;
        var centroid = Pointer_centroid(targetPointers);
        if (targetPointers.length == this.lastPointersCount_) {
            if (this.kinetic_) {
                this.kinetic_.update(centroid[0], centroid[1]);
            }
            if (this.lastCentroid) {
                var delta = [
                    this.lastCentroid[0] - centroid[0],
                    centroid[1] - this.lastCentroid[1],
                ];
                var map = mapBrowserEvent.map;
                var view = map.getView();
                (0,ol_coordinate.bA)(delta, view.getResolution());
                (0,ol_coordinate.U1)(delta, view.getRotation());
                view.adjustCenterInternal(delta);
            }
        }
        else if (this.kinetic_) {
            this.kinetic_.begin();
        }
        this.lastCentroid = centroid;
        this.lastPointersCount_ = targetPointers.length;
        mapBrowserEvent.originalEvent.preventDefault();
    };
    DragPan.prototype.handleUpEvent = function (mapBrowserEvent) {
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (this.targetPointers.length === 0) {
            if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
                var distance = this.kinetic_.getDistance();
                var angle = this.kinetic_.getAngle();
                var center = view.getCenterInternal();
                var centerpx = map.getPixelFromCoordinateInternal(center);
                var dest = map.getCoordinateFromPixelInternal([
                    centerpx[0] - distance * Math.cos(angle),
                    centerpx[1] - distance * Math.sin(angle),
                ]);
                view.animateInternal({
                    center: view.getConstrainedCenter(dest),
                    duration: 500,
                    easing: easeOut,
                });
            }
            if (this.panning_) {
                this.panning_ = false;
                view.endInteraction();
            }
            return false;
        }
        else {
            if (this.kinetic_) {
                this.kinetic_.begin();
            }
            this.lastCentroid = null;
            return true;
        }
    };
    DragPan.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            this.lastCentroid = null;
            if (view.getAnimating()) {
                view.cancelAnimations();
            }
            if (this.kinetic_) {
                this.kinetic_.begin();
            }
            this.noKinetic_ = this.targetPointers.length > 1;
            return true;
        }
        else {
            return false;
        }
    };
    return DragPan;
}(Pointer));
 const interaction_DragPan = (DragPan);
;
var DragRotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var DragRotate =  (function (_super) {
    DragRotate_extends(DragRotate, _super);
    function DragRotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            stopDown: functions.Dv,
        }) || this;
        _this.condition_ = options.condition ? options.condition : altShiftKeysOnly;
        _this.lastAngle_ = undefined;
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    DragRotate.prototype.handleDragEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return;
        }
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (view.getConstraints().rotation === disable) {
            return;
        }
        var size = map.getSize();
        var offset = mapBrowserEvent.pixel;
        var theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
        if (this.lastAngle_ !== undefined) {
            var delta = theta - this.lastAngle_;
            view.adjustRotationInternal(-delta);
        }
        this.lastAngle_ = theta;
    };
    DragRotate.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return true;
        }
        var map = mapBrowserEvent.map;
        var view = map.getView();
        view.endInteraction(this.duration_);
        return false;
    };
    DragRotate.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return false;
        }
        if (mouseActionButton(mapBrowserEvent) &&
            this.condition_(mapBrowserEvent)) {
            var map = mapBrowserEvent.map;
            map.getView().beginInteraction();
            this.lastAngle_ = undefined;
            return true;
        }
        else {
            return false;
        }
    };
    return DragRotate;
}(Pointer));
 const interaction_DragRotate = (DragRotate);
;
var Box_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RenderBox =  (function (_super) {
    Box_extends(RenderBox, _super);
    function RenderBox(className) {
        var _this = _super.call(this) || this;
        _this.geometry_ = null;
        _this.element_ = document.createElement('div');
        _this.element_.style.position = 'absolute';
        _this.element_.style.pointerEvents = 'auto';
        _this.element_.className = 'ol-box ' + className;
        _this.map_ = null;
        _this.startPixel_ = null;
        _this.endPixel_ = null;
        return _this;
    }
    RenderBox.prototype.disposeInternal = function () {
        this.setMap(null);
    };
    RenderBox.prototype.render_ = function () {
        var startPixel = this.startPixel_;
        var endPixel = this.endPixel_;
        var px = 'px';
        var style = this.element_.style;
        style.left = Math.min(startPixel[0], endPixel[0]) + px;
        style.top = Math.min(startPixel[1], endPixel[1]) + px;
        style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
        style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    };
    RenderBox.prototype.setMap = function (map) {
        if (this.map_) {
            this.map_.getOverlayContainer().removeChild(this.element_);
            var style = this.element_.style;
            style.left = 'inherit';
            style.top = 'inherit';
            style.width = 'inherit';
            style.height = 'inherit';
        }
        this.map_ = map;
        if (this.map_) {
            this.map_.getOverlayContainer().appendChild(this.element_);
        }
    };
    RenderBox.prototype.setPixels = function (startPixel, endPixel) {
        this.startPixel_ = startPixel;
        this.endPixel_ = endPixel;
        this.createOrUpdateGeometry();
        this.render_();
    };
    RenderBox.prototype.createOrUpdateGeometry = function () {
        var startPixel = this.startPixel_;
        var endPixel = this.endPixel_;
        var pixels = [
            startPixel,
            [startPixel[0], endPixel[1]],
            endPixel,
            [endPixel[0], startPixel[1]],
        ];
        var coordinates = pixels.map(this.map_.getCoordinateFromPixelInternal, this.map_);
        coordinates[4] = coordinates[0].slice();
        if (!this.geometry_) {
            this.geometry_ = new Polygon.ZP([coordinates]);
        }
        else {
            this.geometry_.setCoordinates([coordinates]);
        }
    };
    RenderBox.prototype.getGeometry = function () {
        return this.geometry_;
    };
    return RenderBox;
}(Disposable.Z));
 const Box = (RenderBox);
;
var DragBox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var DragBoxEventType = {
    BOXSTART: 'boxstart',
    BOXDRAG: 'boxdrag',
    BOXEND: 'boxend',
    BOXCANCEL: 'boxcancel',
};
var DragBoxEvent =  (function (_super) {
    DragBox_extends(DragBoxEvent, _super);
    function DragBoxEvent(type, coordinate, mapBrowserEvent) {
        var _this = _super.call(this, type) || this;
        _this.coordinate = coordinate;
        _this.mapBrowserEvent = mapBrowserEvent;
        return _this;
    }
    return DragBoxEvent;
}(Event.ZP));

var DragBox =  (function (_super) {
    DragBox_extends(DragBox, _super);
    function DragBox(opt_options) {
        var _this = _super.call(this) || this;
        _this.on;
        _this.once;
        _this.un;
        var options = opt_options ? opt_options : {};
        _this.box_ = new Box(options.className || 'ol-dragbox');
        _this.minArea_ = options.minArea !== undefined ? options.minArea : 64;
        if (options.onBoxEnd) {
            _this.onBoxEnd = options.onBoxEnd;
        }
        _this.startPixel_ = null;
        _this.condition_ = options.condition ? options.condition : mouseActionButton;
        _this.boxEndCondition_ = options.boxEndCondition
            ? options.boxEndCondition
            : _this.defaultBoxEndCondition;
        return _this;
    }
    DragBox.prototype.defaultBoxEndCondition = function (mapBrowserEvent, startPixel, endPixel) {
        var width = endPixel[0] - startPixel[0];
        var height = endPixel[1] - startPixel[1];
        return width * width + height * height >= this.minArea_;
    };
    DragBox.prototype.getGeometry = function () {
        return this.box_.getGeometry();
    };
    DragBox.prototype.handleDragEvent = function (mapBrowserEvent) {
        this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
        this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXDRAG, mapBrowserEvent.coordinate, mapBrowserEvent));
    };
    DragBox.prototype.handleUpEvent = function (mapBrowserEvent) {
        this.box_.setMap(null);
        var completeBox = this.boxEndCondition_(mapBrowserEvent, this.startPixel_, mapBrowserEvent.pixel);
        if (completeBox) {
            this.onBoxEnd(mapBrowserEvent);
        }
        this.dispatchEvent(new DragBoxEvent(completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL, mapBrowserEvent.coordinate, mapBrowserEvent));
        return false;
    };
    DragBox.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.condition_(mapBrowserEvent)) {
            this.startPixel_ = mapBrowserEvent.pixel;
            this.box_.setMap(mapBrowserEvent.map);
            this.box_.setPixels(this.startPixel_, this.startPixel_);
            this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXSTART, mapBrowserEvent.coordinate, mapBrowserEvent));
            return true;
        }
        else {
            return false;
        }
    };
    DragBox.prototype.onBoxEnd = function (event) { };
    return DragBox;
}(Pointer));
 const interaction_DragBox = (DragBox);
;
var DragZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DragZoom =  (function (_super) {
    DragZoom_extends(DragZoom, _super);
    function DragZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var condition = options.condition ? options.condition : shiftKeyOnly;
        _this = _super.call(this, {
            condition: condition,
            className: options.className || 'ol-dragzoom',
            minArea: options.minArea,
        }) || this;
        _this.duration_ = options.duration !== undefined ? options.duration : 200;
        _this.out_ = options.out !== undefined ? options.out : false;
        return _this;
    }
    DragZoom.prototype.onBoxEnd = function (event) {
        var map = this.getMap();
        var view =  (map.getView());
        var geometry = this.getGeometry();
        if (this.out_) {
            var rotatedExtent = view.rotatedExtentForGeometry(geometry);
            var resolution = view.getResolutionForExtentInternal(rotatedExtent);
            var factor = view.getResolution() / resolution;
            geometry = geometry.clone();
            geometry.scale(factor * factor);
        }
        view.fitInternal(geometry, {
            duration: this.duration_,
            easing: easeOut,
        });
    };
    return DragZoom;
}(interaction_DragBox));
 const interaction_DragZoom = (DragZoom);
;
 const KeyCode = ({
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
});
;
var KeyboardPan_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var KeyboardPan =  (function (_super) {
    KeyboardPan_extends(KeyboardPan, _super);
    function KeyboardPan(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options || {};
        _this.defaultCondition_ = function (mapBrowserEvent) {
            return (noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent));
        };
        _this.condition_ =
            options.condition !== undefined
                ? options.condition
                : _this.defaultCondition_;
        _this.duration_ = options.duration !== undefined ? options.duration : 100;
        _this.pixelDelta_ =
            options.pixelDelta !== undefined ? options.pixelDelta : 128;
        return _this;
    }
    KeyboardPan.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == EventType.Z.KEYDOWN) {
            var keyEvent =  (mapBrowserEvent.originalEvent);
            var keyCode = keyEvent.keyCode;
            if (this.condition_(mapBrowserEvent) &&
                (keyCode == KeyCode.DOWN ||
                    keyCode == KeyCode.LEFT ||
                    keyCode == KeyCode.RIGHT ||
                    keyCode == KeyCode.UP)) {
                var map = mapBrowserEvent.map;
                var view = map.getView();
                var mapUnitsDelta = view.getResolution() * this.pixelDelta_;
                var deltaX = 0, deltaY = 0;
                if (keyCode == KeyCode.DOWN) {
                    deltaY = -mapUnitsDelta;
                }
                else if (keyCode == KeyCode.LEFT) {
                    deltaX = -mapUnitsDelta;
                }
                else if (keyCode == KeyCode.RIGHT) {
                    deltaX = mapUnitsDelta;
                }
                else {
                    deltaY = mapUnitsDelta;
                }
                var delta = [deltaX, deltaY];
                (0,ol_coordinate.U1)(delta, view.getRotation());
                pan(view, delta, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    };
    return KeyboardPan;
}(interaction_Interaction));
 const interaction_KeyboardPan = (KeyboardPan);
;
var KeyboardZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var KeyboardZoom =  (function (_super) {
    KeyboardZoom_extends(KeyboardZoom, _super);
    function KeyboardZoom(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        _this.condition_ = options.condition ? options.condition : targetNotEditable;
        _this.delta_ = options.delta ? options.delta : 1;
        _this.duration_ = options.duration !== undefined ? options.duration : 100;
        return _this;
    }
    KeyboardZoom.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == EventType.Z.KEYDOWN ||
            mapBrowserEvent.type == EventType.Z.KEYPRESS) {
            var keyEvent =  (mapBrowserEvent.originalEvent);
            var charCode = keyEvent.charCode;
            if (this.condition_(mapBrowserEvent) &&
                (charCode == '+'.charCodeAt(0) || charCode == '-'.charCodeAt(0))) {
                var map = mapBrowserEvent.map;
                var delta = charCode == '+'.charCodeAt(0) ? this.delta_ : -this.delta_;
                var view = map.getView();
                zoomByDelta(view, delta, undefined, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    };
    return KeyboardZoom;
}(interaction_Interaction));
 const interaction_KeyboardZoom = (KeyboardZoom);
;
var Kinetic =  (function () {
    function Kinetic(decay, minVelocity, delay) {
        this.decay_ = decay;
        this.minVelocity_ = minVelocity;
        this.delay_ = delay;
        this.points_ = [];
        this.angle_ = 0;
        this.initialVelocity_ = 0;
    }
    Kinetic.prototype.begin = function () {
        this.points_.length = 0;
        this.angle_ = 0;
        this.initialVelocity_ = 0;
    };
    Kinetic.prototype.update = function (x, y) {
        this.points_.push(x, y, Date.now());
    };
    Kinetic.prototype.end = function () {
        if (this.points_.length < 6) {
            return false;
        }
        var delay = Date.now() - this.delay_;
        var lastIndex = this.points_.length - 3;
        if (this.points_[lastIndex + 2] < delay) {
            return false;
        }
        var firstIndex = lastIndex - 3;
        while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
            firstIndex -= 3;
        }
        var duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
        if (duration < 1000 / 60) {
            return false;
        }
        var dx = this.points_[lastIndex] - this.points_[firstIndex];
        var dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
        this.angle_ = Math.atan2(dy, dx);
        this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
        return this.initialVelocity_ > this.minVelocity_;
    };
    Kinetic.prototype.getDistance = function () {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    };
    Kinetic.prototype.getAngle = function () {
        return this.angle_;
    };
    return Kinetic;
}());
 const ol_Kinetic = (Kinetic);
;
var MouseWheelZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Mode = {
    TRACKPAD: 'trackpad',
    WHEEL: 'wheel',
};
var MouseWheelZoom =  (function (_super) {
    MouseWheelZoom_extends(MouseWheelZoom, _super);
    function MouseWheelZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, 
 (options)) || this;
        _this.totalDelta_ = 0;
        _this.lastDelta_ = 0;
        _this.maxDelta_ = options.maxDelta !== undefined ? options.maxDelta : 1;
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        _this.timeout_ = options.timeout !== undefined ? options.timeout : 80;
        _this.useAnchor_ =
            options.useAnchor !== undefined ? options.useAnchor : true;
        _this.constrainResolution_ =
            options.constrainResolution !== undefined
                ? options.constrainResolution
                : false;
        var condition = options.condition ? options.condition : always;
        _this.condition_ = options.onFocusOnly
            ? condition_all(focusWithTabindex, condition)
            : condition;
        _this.lastAnchor_ = null;
        _this.startTime_ = undefined;
        _this.timeoutId_;
        _this.mode_ = undefined;
        _this.trackpadEventGap_ = 400;
        _this.trackpadTimeoutId_;
        _this.deltaPerZoom_ = 300;
        return _this;
    }
    MouseWheelZoom.prototype.endInteraction_ = function () {
        this.trackpadTimeoutId_ = undefined;
        var view = this.getMap().getView();
        view.endInteraction(undefined, this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0, this.lastAnchor_);
    };
    MouseWheelZoom.prototype.handleEvent = function (mapBrowserEvent) {
        if (!this.condition_(mapBrowserEvent)) {
            return true;
        }
        var type = mapBrowserEvent.type;
        if (type !== EventType.Z.WHEEL) {
            return true;
        }
        var map = mapBrowserEvent.map;
        var wheelEvent =  (mapBrowserEvent.originalEvent);
        wheelEvent.preventDefault();
        if (this.useAnchor_) {
            this.lastAnchor_ = mapBrowserEvent.coordinate;
        }
        var delta;
        if (mapBrowserEvent.type == EventType.Z.WHEEL) {
            delta = wheelEvent.deltaY;
            if (has.V && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
                delta /= has.MP;
            }
            if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) {
                delta *= 40;
            }
        }
        if (delta === 0) {
            return false;
        }
        else {
            this.lastDelta_ = delta;
        }
        var now = Date.now();
        if (this.startTime_ === undefined) {
            this.startTime_ = now;
        }
        if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
            this.mode_ = Math.abs(delta) < 4 ? Mode.TRACKPAD : Mode.WHEEL;
        }
        var view = map.getView();
        if (this.mode_ === Mode.TRACKPAD &&
            !(view.getConstrainResolution() || this.constrainResolution_)) {
            if (this.trackpadTimeoutId_) {
                clearTimeout(this.trackpadTimeoutId_);
            }
            else {
                if (view.getAnimating()) {
                    view.cancelAnimations();
                }
                view.beginInteraction();
            }
            this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_);
            view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
            this.startTime_ = now;
            return false;
        }
        this.totalDelta_ += delta;
        var timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, map), timeLeft);
        return false;
    };
    MouseWheelZoom.prototype.handleWheelZoom_ = function (map) {
        var view = map.getView();
        if (view.getAnimating()) {
            view.cancelAnimations();
        }
        var delta = -(0,math.uZ)(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
        if (view.getConstrainResolution() || this.constrainResolution_) {
            delta = delta ? (delta > 0 ? 1 : -1) : 0;
        }
        zoomByDelta(view, delta, this.lastAnchor_, this.duration_);
        this.mode_ = undefined;
        this.totalDelta_ = 0;
        this.lastAnchor_ = null;
        this.startTime_ = undefined;
        this.timeoutId_ = undefined;
    };
    MouseWheelZoom.prototype.setMouseAnchor = function (useAnchor) {
        this.useAnchor_ = useAnchor;
        if (!useAnchor) {
            this.lastAnchor_ = null;
        }
    };
    return MouseWheelZoom;
}(interaction_Interaction));
 const interaction_MouseWheelZoom = (MouseWheelZoom);
;
var PinchRotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PinchRotate =  (function (_super) {
    PinchRotate_extends(PinchRotate, _super);
    function PinchRotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var pointerOptions =  (options);
        if (!pointerOptions.stopDown) {
            pointerOptions.stopDown = functions.Dv;
        }
        _this = _super.call(this, pointerOptions) || this;
        _this.anchor_ = null;
        _this.lastAngle_ = undefined;
        _this.rotating_ = false;
        _this.rotationDelta_ = 0.0;
        _this.threshold_ = options.threshold !== undefined ? options.threshold : 0.3;
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    PinchRotate.prototype.handleDragEvent = function (mapBrowserEvent) {
        var rotationDelta = 0.0;
        var touch0 = this.targetPointers[0];
        var touch1 = this.targetPointers[1];
        var angle = Math.atan2(touch1.clientY - touch0.clientY, touch1.clientX - touch0.clientX);
        if (this.lastAngle_ !== undefined) {
            var delta = angle - this.lastAngle_;
            this.rotationDelta_ += delta;
            if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
                this.rotating_ = true;
            }
            rotationDelta = delta;
        }
        this.lastAngle_ = angle;
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (view.getConstraints().rotation === disable) {
            return;
        }
        var viewportPosition = map.getViewport().getBoundingClientRect();
        var centroid = Pointer_centroid(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        if (this.rotating_) {
            map.render();
            view.adjustRotationInternal(rotationDelta, this.anchor_);
        }
    };
    PinchRotate.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            view.endInteraction(this.duration_);
            return false;
        }
        else {
            return true;
        }
    };
    PinchRotate.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            var map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastAngle_ = undefined;
            this.rotating_ = false;
            this.rotationDelta_ = 0.0;
            if (!this.handlingDownUpSequence) {
                map.getView().beginInteraction();
            }
            return true;
        }
        else {
            return false;
        }
    };
    return PinchRotate;
}(Pointer));
 const interaction_PinchRotate = (PinchRotate);
;
var PinchZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PinchZoom =  (function (_super) {
    PinchZoom_extends(PinchZoom, _super);
    function PinchZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var pointerOptions =  (options);
        if (!pointerOptions.stopDown) {
            pointerOptions.stopDown = functions.Dv;
        }
        _this = _super.call(this, pointerOptions) || this;
        _this.anchor_ = null;
        _this.duration_ = options.duration !== undefined ? options.duration : 400;
        _this.lastDistance_ = undefined;
        _this.lastScaleDelta_ = 1;
        return _this;
    }
    PinchZoom.prototype.handleDragEvent = function (mapBrowserEvent) {
        var scaleDelta = 1.0;
        var touch0 = this.targetPointers[0];
        var touch1 = this.targetPointers[1];
        var dx = touch0.clientX - touch1.clientX;
        var dy = touch0.clientY - touch1.clientY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (this.lastDistance_ !== undefined) {
            scaleDelta = this.lastDistance_ / distance;
        }
        this.lastDistance_ = distance;
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (scaleDelta != 1.0) {
            this.lastScaleDelta_ = scaleDelta;
        }
        var viewportPosition = map.getViewport().getBoundingClientRect();
        var centroid = Pointer_centroid(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        map.render();
        view.adjustResolutionInternal(scaleDelta, this.anchor_);
    };
    PinchZoom.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            var direction = this.lastScaleDelta_ > 1 ? 1 : -1;
            view.endInteraction(this.duration_, direction);
            return false;
        }
        else {
            return true;
        }
    };
    PinchZoom.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            var map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastDistance_ = undefined;
            this.lastScaleDelta_ = 1;
            if (!this.handlingDownUpSequence) {
                map.getView().beginInteraction();
            }
            return true;
        }
        else {
            return false;
        }
    };
    return PinchZoom;
}(Pointer));
 const interaction_PinchZoom = (PinchZoom);
;































function interaction_defaults(opt_options) {
    var options = opt_options ? opt_options : {};
    var interactions = new ol_Collection();
    var kinetic = new ol_Kinetic(-0.005, 0.05, 100);
    var altShiftDragRotate = options.altShiftDragRotate !== undefined
        ? options.altShiftDragRotate
        : true;
    if (altShiftDragRotate) {
        interactions.push(new interaction_DragRotate());
    }
    var doubleClickZoom = options.doubleClickZoom !== undefined ? options.doubleClickZoom : true;
    if (doubleClickZoom) {
        interactions.push(new interaction_DoubleClickZoom({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
        }));
    }
    var dragPan = options.dragPan !== undefined ? options.dragPan : true;
    if (dragPan) {
        interactions.push(new interaction_DragPan({
            onFocusOnly: options.onFocusOnly,
            kinetic: kinetic,
        }));
    }
    var pinchRotate = options.pinchRotate !== undefined ? options.pinchRotate : true;
    if (pinchRotate) {
        interactions.push(new interaction_PinchRotate());
    }
    var pinchZoom = options.pinchZoom !== undefined ? options.pinchZoom : true;
    if (pinchZoom) {
        interactions.push(new interaction_PinchZoom({
            duration: options.zoomDuration,
        }));
    }
    var keyboard = options.keyboard !== undefined ? options.keyboard : true;
    if (keyboard) {
        interactions.push(new interaction_KeyboardPan());
        interactions.push(new interaction_KeyboardZoom({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
        }));
    }
    var mouseWheelZoom = options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) {
        interactions.push(new interaction_MouseWheelZoom({
            onFocusOnly: options.onFocusOnly,
            duration: options.zoomDuration,
        }));
    }
    var shiftDragZoom = options.shiftDragZoom !== undefined ? options.shiftDragZoom : true;
    if (shiftDragZoom) {
        interactions.push(new interaction_DragZoom({
            duration: options.zoomDuration,
        }));
    }
    return interactions;
}
;
var ol_Map_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Map_Map =  (function (_super) {
    ol_Map_extends(Map, _super);
    function Map(options) {
        options = (0,obj.f0)({}, options);
        if (!options.controls) {
            options.controls = defaults();
        }
        if (!options.interactions) {
            options.interactions = interaction_defaults({
                onFocusOnly: true,
            });
        }
        return _super.call(this, options) || this;
    }
    Map.prototype.createRenderer = function () {
        return new Composite(this);
    };
    return Map;
}(ol_PluggableMap));
 const ol_Map = (Map_Map);
;
var ScaleLine_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var UNITS_PROP = 'units';
var ScaleLine_Units = {
    DEGREES: 'degrees',
    IMPERIAL: 'imperial',
    NAUTICAL: 'nautical',
    METRIC: 'metric',
    US: 'us',
};
var LEADING_DIGITS = [1, 2, 5];
var DEFAULT_DPI = 25.4 / 0.28;
var ScaleLine =  (function (_super) {
    ScaleLine_extends(ScaleLine, _super);
    function ScaleLine(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var className = options.className !== undefined
            ? options.className
            : options.bar
                ? 'ol-scale-bar'
                : 'ol-scale-line';
        _this = _super.call(this, {
            element: document.createElement('div'),
            render: options.render,
            target: options.target,
        }) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.innerElement_ = document.createElement('div');
        _this.innerElement_.className = className + '-inner';
        _this.element.className = className + ' ' + CLASS_UNSELECTABLE;
        _this.element.appendChild(_this.innerElement_);
        _this.viewState_ = null;
        _this.minWidth_ = options.minWidth !== undefined ? options.minWidth : 64;
        _this.renderedVisible_ = false;
        _this.renderedWidth_ = undefined;
        _this.renderedHTML_ = '';
        _this.addChangeListener(UNITS_PROP, _this.handleUnitsChanged_);
        _this.setUnits(options.units || ScaleLine_Units.METRIC);
        _this.scaleBar_ = options.bar || false;
        _this.scaleBarSteps_ = options.steps || 4;
        _this.scaleBarText_ = options.text || false;
        _this.dpi_ = options.dpi || undefined;
        return _this;
    }
    ScaleLine.prototype.getUnits = function () {
        return this.get(UNITS_PROP);
    };
    ScaleLine.prototype.handleUnitsChanged_ = function () {
        this.updateElement_();
    };
    ScaleLine.prototype.setUnits = function (units) {
        this.set(UNITS_PROP, units);
    };
    ScaleLine.prototype.setDpi = function (dpi) {
        this.dpi_ = dpi;
    };
    ScaleLine.prototype.updateElement_ = function () {
        var viewState = this.viewState_;
        if (!viewState) {
            if (this.renderedVisible_) {
                this.element.style.display = 'none';
                this.renderedVisible_ = false;
            }
            return;
        }
        var center = viewState.center;
        var projection = viewState.projection;
        var units = this.getUnits();
        var pointResolutionUnits = units == ScaleLine_Units.DEGREES ? Units.ZP.DEGREES : Units.ZP.METERS;
        var pointResolution = (0,ol_proj._Q)(projection, viewState.resolution, center, pointResolutionUnits);
        var minWidth = (this.minWidth_ * (this.dpi_ || DEFAULT_DPI)) / DEFAULT_DPI;
        var nominalCount = minWidth * pointResolution;
        var suffix = '';
        if (units == ScaleLine_Units.DEGREES) {
            var metersPerDegree = ol_proj.Wm[Units.ZP.DEGREES];
            nominalCount *= metersPerDegree;
            if (nominalCount < metersPerDegree / 60) {
                suffix = '\u2033'; 
                pointResolution *= 3600;
            }
            else if (nominalCount < metersPerDegree) {
                suffix = '\u2032'; 
                pointResolution *= 60;
            }
            else {
                suffix = '\u00b0'; 
            }
        }
        else if (units == ScaleLine_Units.IMPERIAL) {
            if (nominalCount < 0.9144) {
                suffix = 'in';
                pointResolution /= 0.0254;
            }
            else if (nominalCount < 1609.344) {
                suffix = 'ft';
                pointResolution /= 0.3048;
            }
            else {
                suffix = 'mi';
                pointResolution /= 1609.344;
            }
        }
        else if (units == ScaleLine_Units.NAUTICAL) {
            pointResolution /= 1852;
            suffix = 'nm';
        }
        else if (units == ScaleLine_Units.METRIC) {
            if (nominalCount < 0.001) {
                suffix = 'μm';
                pointResolution *= 1000000;
            }
            else if (nominalCount < 1) {
                suffix = 'mm';
                pointResolution *= 1000;
            }
            else if (nominalCount < 1000) {
                suffix = 'm';
            }
            else {
                suffix = 'km';
                pointResolution /= 1000;
            }
        }
        else if (units == ScaleLine_Units.US) {
            if (nominalCount < 0.9144) {
                suffix = 'in';
                pointResolution *= 39.37;
            }
            else if (nominalCount < 1609.344) {
                suffix = 'ft';
                pointResolution /= 0.30480061;
            }
            else {
                suffix = 'mi';
                pointResolution /= 1609.3472;
            }
        }
        else {
            (0,asserts.h)(false, 33); 
        }
        var i = 3 * Math.floor(Math.log(minWidth * pointResolution) / Math.log(10));
        var count, width, decimalCount;
        while (true) {
            decimalCount = Math.floor(i / 3);
            var decimal = Math.pow(10, decimalCount);
            count = LEADING_DIGITS[((i % 3) + 3) % 3] * decimal;
            width = Math.round(count / pointResolution);
            if (isNaN(width)) {
                this.element.style.display = 'none';
                this.renderedVisible_ = false;
                return;
            }
            else if (width >= minWidth) {
                break;
            }
            ++i;
        }
        var html;
        if (this.scaleBar_) {
            html = this.createScaleBar(width, count, suffix);
        }
        else {
            html = count.toFixed(decimalCount < 0 ? -decimalCount : 0) + ' ' + suffix;
        }
        if (this.renderedHTML_ != html) {
            this.innerElement_.innerHTML = html;
            this.renderedHTML_ = html;
        }
        if (this.renderedWidth_ != width) {
            this.innerElement_.style.width = width + 'px';
            this.renderedWidth_ = width;
        }
        if (!this.renderedVisible_) {
            this.element.style.display = '';
            this.renderedVisible_ = true;
        }
    };
    ScaleLine.prototype.createScaleBar = function (width, scale, suffix) {
        var mapScale = '1 : ' + Math.round(this.getScaleForResolution()).toLocaleString();
        var scaleSteps = [];
        var stepWidth = width / this.scaleBarSteps_;
        var backgroundColor = '#ffffff';
        for (var i = 0; i < this.scaleBarSteps_; i++) {
            if (i === 0) {
                scaleSteps.push(this.createMarker('absolute', i));
            }
            scaleSteps.push('<div>' +
                '<div ' +
                'class="ol-scale-singlebar" ' +
                'style=' +
                '"width: ' +
                stepWidth +
                'px;' +
                'background-color: ' +
                backgroundColor +
                ';"' +
                '>' +
                '</div>' +
                this.createMarker('relative', i) +
                (i % 2 === 0 || this.scaleBarSteps_ === 2
                    ? this.createStepText(i, width, false, scale, suffix)
                    : '') +
                '</div>');
            if (i === this.scaleBarSteps_ - 1) {
                {
                }
                scaleSteps.push(this.createStepText(i + 1, width, true, scale, suffix));
            }
            if (backgroundColor === '#ffffff') {
                backgroundColor = '#000000';
            }
            else {
                backgroundColor = '#ffffff';
            }
        }
        var scaleBarText;
        if (this.scaleBarText_) {
            scaleBarText =
                '<div ' +
                    'class="ol-scale-text" ' +
                    'style="width: ' +
                    width +
                    'px;">' +
                    mapScale +
                    '</div>';
        }
        else {
            scaleBarText = '';
        }
        var container = '<div ' +
            'style="display: flex;">' +
            scaleBarText +
            scaleSteps.join('') +
            '</div>';
        return container;
    };
    ScaleLine.prototype.createMarker = function (position, i) {
        var top = position === 'absolute' ? 3 : -10;
        return ('<div ' +
            'class="ol-scale-step-marker" ' +
            'style="position: ' +
            position +
            ';' +
            'top: ' +
            top +
            'px;"' +
            '></div>');
    };
    ScaleLine.prototype.createStepText = function (i, width, isLast, scale, suffix) {
        var length = i === 0 ? 0 : Math.round((scale / this.scaleBarSteps_) * i * 100) / 100;
        var lengthString = length + (i === 0 ? '' : ' ' + suffix);
        var margin = i === 0 ? -3 : (width / this.scaleBarSteps_) * -1;
        var minWidth = i === 0 ? 0 : (width / this.scaleBarSteps_) * 2;
        return ('<div ' +
            'class="ol-scale-step-text" ' +
            'style="' +
            'margin-left: ' +
            margin +
            'px;' +
            'text-align: ' +
            (i === 0 ? 'left' : 'center') +
            '; ' +
            'min-width: ' +
            minWidth +
            'px;' +
            'left: ' +
            (isLast ? width + 'px' : 'unset') +
            ';"' +
            '>' +
            lengthString +
            '</div>');
    };
    ScaleLine.prototype.getScaleForResolution = function () {
        var resolution = (0,ol_proj._Q)(this.viewState_.projection, this.viewState_.resolution, this.viewState_.center, Units.ZP.METERS);
        var dpi = this.dpi_ || DEFAULT_DPI;
        var inchesPerMeter = 1000 / 25.4;
        return parseFloat(resolution.toString()) * inchesPerMeter * dpi;
    };
    ScaleLine.prototype.render = function (mapEvent) {
        var frameState = mapEvent.frameState;
        if (!frameState) {
            this.viewState_ = null;
        }
        else {
            this.viewState_ = frameState.viewState;
        }
        this.updateElement_();
    };
    return ScaleLine;
}(control_Control));
 const control_ScaleLine = (ScaleLine);
var rbush_min = __webpack_require__("./.yarn/cache/rbush-npm-3.0.1-9fc2a71778-b7def5ba76.zip/node_modules/rbush/rbush.min.js");
;
 const ImageState = ({
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4,
});
;


var ImageStyle =  (function () {
    function ImageStyle(options) {
        this.opacity_ = options.opacity;
        this.rotateWithView_ = options.rotateWithView;
        this.rotation_ = options.rotation;
        this.scale_ = options.scale;
        this.scaleArray_ = toSize(options.scale);
        this.displacement_ = options.displacement;
    }
    ImageStyle.prototype.clone = function () {
        var scale = this.getScale();
        return new ImageStyle({
            opacity: this.getOpacity(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            displacement: this.getDisplacement().slice(),
        });
    };
    ImageStyle.prototype.getOpacity = function () {
        return this.opacity_;
    };
    ImageStyle.prototype.getRotateWithView = function () {
        return this.rotateWithView_;
    };
    ImageStyle.prototype.getRotation = function () {
        return this.rotation_;
    };
    ImageStyle.prototype.getScale = function () {
        return this.scale_;
    };
    ImageStyle.prototype.getScaleArray = function () {
        return this.scaleArray_;
    };
    ImageStyle.prototype.getDisplacement = function () {
        return this.displacement_;
    };
    ImageStyle.prototype.getAnchor = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getImage = function (pixelRatio) {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getHitDetectionImage = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getPixelRatio = function (pixelRatio) {
        return 1;
    };
    ImageStyle.prototype.getImageState = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getImageSize = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getOrigin = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.getSize = function () {
        return (0,util.O3)();
    };
    ImageStyle.prototype.setDisplacement = function (displacement) {
        this.displacement_ = displacement;
    };
    ImageStyle.prototype.setOpacity = function (opacity) {
        this.opacity_ = opacity;
    };
    ImageStyle.prototype.setRotateWithView = function (rotateWithView) {
        this.rotateWithView_ = rotateWithView;
    };
    ImageStyle.prototype.setRotation = function (rotation) {
        this.rotation_ = rotation;
    };
    ImageStyle.prototype.setScale = function (scale) {
        this.scale_ = scale;
        this.scaleArray_ = toSize(scale);
    };
    ImageStyle.prototype.listenImageChange = function (listener) {
        (0,util.O3)();
    };
    ImageStyle.prototype.load = function () {
        (0,util.O3)();
    };
    ImageStyle.prototype.unlistenImageChange = function (listener) {
        (0,util.O3)();
    };
    return ImageStyle;
}());
 const style_Image = (ImageStyle);
;

function asColorLike(color) {
    if (Array.isArray(color)) {
        return color_toString(color);
    }
    else {
        return color;
    }
}
;
var RegularShape_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var RegularShape =  (function (_super) {
    RegularShape_extends(RegularShape, _super);
    function RegularShape(options) {
        var _this = this;
        var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
        _this = _super.call(this, {
            opacity: 1,
            rotateWithView: rotateWithView,
            rotation: options.rotation !== undefined ? options.rotation : 0,
            scale: options.scale !== undefined ? options.scale : 1,
            displacement: options.displacement !== undefined ? options.displacement : [0, 0],
        }) || this;
        _this.canvas_ = undefined;
        _this.hitDetectionCanvas_ = null;
        _this.fill_ = options.fill !== undefined ? options.fill : null;
        _this.origin_ = [0, 0];
        _this.points_ = options.points;
        _this.radius_ =
            options.radius !== undefined ? options.radius : options.radius1;
        _this.radius2_ = options.radius2;
        _this.angle_ = options.angle !== undefined ? options.angle : 0;
        _this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        _this.size_ = null;
        _this.renderOptions_ = null;
        _this.render();
        return _this;
    }
    RegularShape.prototype.clone = function () {
        var scale = this.getScale();
        var style = new RegularShape({
            fill: this.getFill() ? this.getFill().clone() : undefined,
            points: this.getPoints(),
            radius: this.getRadius(),
            radius2: this.getRadius2(),
            angle: this.getAngle(),
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            displacement: this.getDisplacement().slice(),
        });
        style.setOpacity(this.getOpacity());
        return style;
    };
    RegularShape.prototype.getAnchor = function () {
        var size = this.size_;
        if (!size) {
            return null;
        }
        var displacement = this.getDisplacement();
        return [size[0] / 2 - displacement[0], size[1] / 2 + displacement[1]];
    };
    RegularShape.prototype.getAngle = function () {
        return this.angle_;
    };
    RegularShape.prototype.getFill = function () {
        return this.fill_;
    };
    RegularShape.prototype.getHitDetectionImage = function () {
        if (!this.hitDetectionCanvas_) {
            this.createHitDetectionCanvas_(this.renderOptions_);
        }
        return this.hitDetectionCanvas_;
    };
    RegularShape.prototype.getImage = function (pixelRatio) {
        var image = this.canvas_[pixelRatio];
        if (!image) {
            var renderOptions = this.renderOptions_;
            var context = createCanvasContext2D(renderOptions.size * pixelRatio, renderOptions.size * pixelRatio);
            this.draw_(renderOptions, context, pixelRatio);
            image = context.canvas;
            this.canvas_[pixelRatio] = image;
        }
        return image;
    };
    RegularShape.prototype.getPixelRatio = function (pixelRatio) {
        return pixelRatio;
    };
    RegularShape.prototype.getImageSize = function () {
        return this.size_;
    };
    RegularShape.prototype.getImageState = function () {
        return ImageState.LOADED;
    };
    RegularShape.prototype.getOrigin = function () {
        return this.origin_;
    };
    RegularShape.prototype.getPoints = function () {
        return this.points_;
    };
    RegularShape.prototype.getRadius = function () {
        return this.radius_;
    };
    RegularShape.prototype.getRadius2 = function () {
        return this.radius2_;
    };
    RegularShape.prototype.getSize = function () {
        return this.size_;
    };
    RegularShape.prototype.getStroke = function () {
        return this.stroke_;
    };
    RegularShape.prototype.listenImageChange = function (listener) { };
    RegularShape.prototype.load = function () { };
    RegularShape.prototype.unlistenImageChange = function (listener) { };
    RegularShape.prototype.calculateLineJoinSize_ = function (lineJoin, strokeWidth, miterLimit) {
        if (strokeWidth === 0 ||
            this.points_ === Infinity ||
            (lineJoin !== 'bevel' && lineJoin !== 'miter')) {
            return strokeWidth;
        }
        var r1 = this.radius_;
        var r2 = this.radius2_ === undefined ? r1 : this.radius2_;
        if (r1 < r2) {
            var tmp = r1;
            r1 = r2;
            r2 = tmp;
        }
        var points = this.radius2_ === undefined ? this.points_ : this.points_ * 2;
        var alpha = (2 * Math.PI) / points;
        var a = r2 * Math.sin(alpha);
        var b = Math.sqrt(r2 * r2 - a * a);
        var d = r1 - b;
        var e = Math.sqrt(a * a + d * d);
        var miterRatio = e / a;
        if (lineJoin === 'miter' && miterRatio <= miterLimit) {
            return miterRatio * strokeWidth;
        }
        var k = strokeWidth / 2 / miterRatio;
        var l = (strokeWidth / 2) * (d / e);
        var maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
        var bevelAdd = maxr - r1;
        if (this.radius2_ === undefined || lineJoin === 'bevel') {
            return bevelAdd * 2;
        }
        var aa = r1 * Math.sin(alpha);
        var bb = Math.sqrt(r1 * r1 - aa * aa);
        var dd = r2 - bb;
        var ee = Math.sqrt(aa * aa + dd * dd);
        var innerMiterRatio = ee / aa;
        if (innerMiterRatio <= miterLimit) {
            var innerLength = (innerMiterRatio * strokeWidth) / 2 - r2 - r1;
            return 2 * Math.max(bevelAdd, innerLength);
        }
        return bevelAdd * 2;
    };
    RegularShape.prototype.createRenderOptions = function () {
        var lineJoin = defaultLineJoin;
        var miterLimit = 0;
        var lineDash = null;
        var lineDashOffset = 0;
        var strokeStyle;
        var strokeWidth = 0;
        if (this.stroke_) {
            strokeStyle = this.stroke_.getColor();
            if (strokeStyle === null) {
                strokeStyle = defaultStrokeStyle;
            }
            strokeStyle = asColorLike(strokeStyle);
            strokeWidth = this.stroke_.getWidth();
            if (strokeWidth === undefined) {
                strokeWidth = defaultLineWidth;
            }
            lineDash = this.stroke_.getLineDash();
            lineDashOffset = this.stroke_.getLineDashOffset();
            lineJoin = this.stroke_.getLineJoin();
            if (lineJoin === undefined) {
                lineJoin = defaultLineJoin;
            }
            miterLimit = this.stroke_.getMiterLimit();
            if (miterLimit === undefined) {
                miterLimit = defaultMiterLimit;
            }
        }
        var add = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
        var maxRadius = Math.max(this.radius_, this.radius2_ || 0);
        var size = Math.ceil(2 * maxRadius + add);
        return {
            strokeStyle: strokeStyle,
            strokeWidth: strokeWidth,
            size: size,
            lineDash: lineDash,
            lineDashOffset: lineDashOffset,
            lineJoin: lineJoin,
            miterLimit: miterLimit,
        };
    };
    RegularShape.prototype.render = function () {
        this.renderOptions_ = this.createRenderOptions();
        var size = this.renderOptions_.size;
        this.canvas_ = {};
        this.size_ = [size, size];
    };
    RegularShape.prototype.draw_ = function (renderOptions, context, pixelRatio) {
        context.scale(pixelRatio, pixelRatio);
        context.translate(renderOptions.size / 2, renderOptions.size / 2);
        this.createPath_(context);
        if (this.fill_) {
            var color = this.fill_.getColor();
            if (color === null) {
                color = defaultFillStyle;
            }
            context.fillStyle = asColorLike(color);
            context.fill();
        }
        if (this.stroke_) {
            context.strokeStyle = renderOptions.strokeStyle;
            context.lineWidth = renderOptions.strokeWidth;
            if (context.setLineDash && renderOptions.lineDash) {
                context.setLineDash(renderOptions.lineDash);
                context.lineDashOffset = renderOptions.lineDashOffset;
            }
            context.lineJoin = renderOptions.lineJoin;
            context.miterLimit = renderOptions.miterLimit;
            context.stroke();
        }
    };
    RegularShape.prototype.createHitDetectionCanvas_ = function (renderOptions) {
        if (this.fill_) {
            var color = this.fill_.getColor();
            var opacity = 0;
            if (typeof color === 'string') {
                color = asArray(color);
            }
            if (color === null) {
                opacity = 1;
            }
            else if (Array.isArray(color)) {
                opacity = color.length === 4 ? color[3] : 1;
            }
            if (opacity === 0) {
                var context = createCanvasContext2D(renderOptions.size, renderOptions.size);
                this.hitDetectionCanvas_ = context.canvas;
                this.drawHitDetectionCanvas_(renderOptions, context);
            }
        }
        if (!this.hitDetectionCanvas_) {
            this.hitDetectionCanvas_ = this.getImage(1);
        }
    };
    RegularShape.prototype.createPath_ = function (context) {
        var points = this.points_;
        var radius = this.radius_;
        if (points === Infinity) {
            context.arc(0, 0, radius, 0, 2 * Math.PI);
        }
        else {
            var radius2 = this.radius2_ === undefined ? radius : this.radius2_;
            if (this.radius2_ !== undefined) {
                points *= 2;
            }
            var startAngle = this.angle_ - Math.PI / 2;
            var step = (2 * Math.PI) / points;
            for (var i = 0; i < points; i++) {
                var angle0 = startAngle + i * step;
                var radiusC = i % 2 === 0 ? radius : radius2;
                context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
            }
            context.closePath();
        }
    };
    RegularShape.prototype.drawHitDetectionCanvas_ = function (renderOptions, context) {
        context.translate(renderOptions.size / 2, renderOptions.size / 2);
        this.createPath_(context);
        context.fillStyle = defaultFillStyle;
        context.fill();
        if (this.stroke_) {
            context.strokeStyle = renderOptions.strokeStyle;
            context.lineWidth = renderOptions.strokeWidth;
            if (renderOptions.lineDash) {
                context.setLineDash(renderOptions.lineDash);
                context.lineDashOffset = renderOptions.lineDashOffset;
            }
            context.lineJoin = renderOptions.lineJoin;
            context.miterLimit = renderOptions.miterLimit;
            context.stroke();
        }
    };
    return RegularShape;
}(style_Image));
 const style_RegularShape = (RegularShape);
;
var Circle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Circle_CircleStyle =  (function (_super) {
    Circle_extends(CircleStyle, _super);
    function CircleStyle(opt_options) {
        var options = opt_options ? opt_options : {};
        return _super.call(this, {
            points: Infinity,
            fill: options.fill,
            radius: options.radius,
            stroke: options.stroke,
            scale: options.scale !== undefined ? options.scale : 1,
            rotation: options.rotation !== undefined ? options.rotation : 0,
            rotateWithView: options.rotateWithView !== undefined ? options.rotateWithView : false,
            displacement: options.displacement !== undefined ? options.displacement : [0, 0],
        }) || this;
    }
    CircleStyle.prototype.clone = function () {
        var scale = this.getScale();
        var style = new CircleStyle({
            fill: this.getFill() ? this.getFill().clone() : undefined,
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            radius: this.getRadius(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            displacement: this.getDisplacement().slice(),
        });
        style.setOpacity(this.getOpacity());
        return style;
    };
    CircleStyle.prototype.setRadius = function (radius) {
        this.radius_ = radius;
        this.render();
    };
    return CircleStyle;
}(style_RegularShape));
 const Circle = (Circle_CircleStyle);
;
var Fill_Fill =  (function () {
    function Fill(opt_options) {
        var options = opt_options || {};
        this.color_ = options.color !== undefined ? options.color : null;
    }
    Fill.prototype.clone = function () {
        var color = this.getColor();
        return new Fill({
            color: Array.isArray(color) ? color.slice() : color || undefined,
        });
    };
    Fill.prototype.getColor = function () {
        return this.color_;
    };
    Fill.prototype.setColor = function (color) {
        this.color_ = color;
    };
    return Fill;
}());
 const style_Fill = (Fill_Fill);
;
var Stroke_Stroke =  (function () {
    function Stroke(opt_options) {
        var options = opt_options || {};
        this.color_ = options.color !== undefined ? options.color : null;
        this.lineCap_ = options.lineCap;
        this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;
        this.lineDashOffset_ = options.lineDashOffset;
        this.lineJoin_ = options.lineJoin;
        this.miterLimit_ = options.miterLimit;
        this.width_ = options.width;
    }
    Stroke.prototype.clone = function () {
        var color = this.getColor();
        return new Stroke({
            color: Array.isArray(color) ? color.slice() : color || undefined,
            lineCap: this.getLineCap(),
            lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
            lineDashOffset: this.getLineDashOffset(),
            lineJoin: this.getLineJoin(),
            miterLimit: this.getMiterLimit(),
            width: this.getWidth(),
        });
    };
    Stroke.prototype.getColor = function () {
        return this.color_;
    };
    Stroke.prototype.getLineCap = function () {
        return this.lineCap_;
    };
    Stroke.prototype.getLineDash = function () {
        return this.lineDash_;
    };
    Stroke.prototype.getLineDashOffset = function () {
        return this.lineDashOffset_;
    };
    Stroke.prototype.getLineJoin = function () {
        return this.lineJoin_;
    };
    Stroke.prototype.getMiterLimit = function () {
        return this.miterLimit_;
    };
    Stroke.prototype.getWidth = function () {
        return this.width_;
    };
    Stroke.prototype.setColor = function (color) {
        this.color_ = color;
    };
    Stroke.prototype.setLineCap = function (lineCap) {
        this.lineCap_ = lineCap;
    };
    Stroke.prototype.setLineDash = function (lineDash) {
        this.lineDash_ = lineDash;
    };
    Stroke.prototype.setLineDashOffset = function (lineDashOffset) {
        this.lineDashOffset_ = lineDashOffset;
    };
    Stroke.prototype.setLineJoin = function (lineJoin) {
        this.lineJoin_ = lineJoin;
    };
    Stroke.prototype.setMiterLimit = function (miterLimit) {
        this.miterLimit_ = miterLimit;
    };
    Stroke.prototype.setWidth = function (width) {
        this.width_ = width;
    };
    return Stroke;
}());
 const style_Stroke = (Stroke_Stroke);
;





var Style =  (function () {
    function Style(opt_options) {
        var options = opt_options || {};
        this.geometry_ = null;
        this.geometryFunction_ = defaultGeometryFunction;
        if (options.geometry !== undefined) {
            this.setGeometry(options.geometry);
        }
        this.fill_ = options.fill !== undefined ? options.fill : null;
        this.image_ = options.image !== undefined ? options.image : null;
        this.renderer_ = options.renderer !== undefined ? options.renderer : null;
        this.hitDetectionRenderer_ =
            options.hitDetectionRenderer !== undefined
                ? options.hitDetectionRenderer
                : null;
        this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        this.text_ = options.text !== undefined ? options.text : null;
        this.zIndex_ = options.zIndex;
    }
    Style.prototype.clone = function () {
        var geometry = this.getGeometry();
        if (geometry && typeof geometry === 'object') {
            geometry =  (geometry).clone();
        }
        return new Style({
            geometry: geometry,
            fill: this.getFill() ? this.getFill().clone() : undefined,
            image: this.getImage() ? this.getImage().clone() : undefined,
            renderer: this.getRenderer(),
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            text: this.getText() ? this.getText().clone() : undefined,
            zIndex: this.getZIndex(),
        });
    };
    Style.prototype.getRenderer = function () {
        return this.renderer_;
    };
    Style.prototype.setRenderer = function (renderer) {
        this.renderer_ = renderer;
    };
    Style.prototype.setHitDetectionRenderer = function (renderer) {
        this.hitDetectionRenderer_ = renderer;
    };
    Style.prototype.getHitDetectionRenderer = function () {
        return this.hitDetectionRenderer_;
    };
    Style.prototype.getGeometry = function () {
        return this.geometry_;
    };
    Style.prototype.getGeometryFunction = function () {
        return this.geometryFunction_;
    };
    Style.prototype.getFill = function () {
        return this.fill_;
    };
    Style.prototype.setFill = function (fill) {
        this.fill_ = fill;
    };
    Style.prototype.getImage = function () {
        return this.image_;
    };
    Style.prototype.setImage = function (image) {
        this.image_ = image;
    };
    Style.prototype.getStroke = function () {
        return this.stroke_;
    };
    Style.prototype.setStroke = function (stroke) {
        this.stroke_ = stroke;
    };
    Style.prototype.getText = function () {
        return this.text_;
    };
    Style.prototype.setText = function (text) {
        this.text_ = text;
    };
    Style.prototype.getZIndex = function () {
        return this.zIndex_;
    };
    Style.prototype.setGeometry = function (geometry) {
        if (typeof geometry === 'function') {
            this.geometryFunction_ = geometry;
        }
        else if (typeof geometry === 'string') {
            this.geometryFunction_ = function (feature) {
                return  (feature.get(geometry));
            };
        }
        else if (!geometry) {
            this.geometryFunction_ = defaultGeometryFunction;
        }
        else if (geometry !== undefined) {
            this.geometryFunction_ = function () {
                return  (geometry);
            };
        }
        this.geometry_ = geometry;
    };
    Style.prototype.setZIndex = function (zIndex) {
        this.zIndex_ = zIndex;
    };
    return Style;
}());
function toFunction(obj) {
    var styleFunction;
    if (typeof obj === 'function') {
        styleFunction = obj;
    }
    else {
        var styles_1;
        if (Array.isArray(obj)) {
            styles_1 = obj;
        }
        else {
            (0,asserts.h)(typeof ( (obj).getZIndex) === 'function', 41); 
            var style =  (obj);
            styles_1 = [style];
        }
        styleFunction = function () {
            return styles_1;
        };
    }
    return styleFunction;
}
var defaultStyles = null;
function createDefaultStyle(feature, resolution) {
    if (!defaultStyles) {
        var fill = new style_Fill({
            color: 'rgba(255,255,255,0.4)',
        });
        var stroke = new style_Stroke({
            color: '#3399CC',
            width: 1.25,
        });
        defaultStyles = [
            new Style({
                image: new Circle({
                    fill: fill,
                    stroke: stroke,
                    radius: 5,
                }),
                fill: fill,
                stroke: stroke,
            }),
        ];
    }
    return defaultStyles;
}
function createEditingStyle() {
    var styles = {};
    var white = [255, 255, 255, 1];
    var blue = [0, 153, 255, 1];
    var width = 3;
    styles[GeometryType.POLYGON] = [
        new Style({
            fill: new Fill({
                color: [255, 255, 255, 0.5],
            }),
        }),
    ];
    styles[GeometryType.MULTI_POLYGON] = styles[GeometryType.POLYGON];
    styles[GeometryType.LINE_STRING] = [
        new Style({
            stroke: new Stroke({
                color: white,
                width: width + 2,
            }),
        }),
        new Style({
            stroke: new Stroke({
                color: blue,
                width: width,
            }),
        }),
    ];
    styles[GeometryType.MULTI_LINE_STRING] = styles[GeometryType.LINE_STRING];
    styles[GeometryType.CIRCLE] = styles[GeometryType.POLYGON].concat(styles[GeometryType.LINE_STRING]);
    styles[GeometryType.POINT] = [
        new Style({
            image: new CircleStyle({
                radius: width * 2,
                fill: new Fill({
                    color: blue,
                }),
                stroke: new Stroke({
                    color: white,
                    width: width / 2,
                }),
            }),
            zIndex: Infinity,
        }),
    ];
    styles[GeometryType.MULTI_POINT] = styles[GeometryType.POINT];
    styles[GeometryType.GEOMETRY_COLLECTION] = styles[GeometryType.POLYGON].concat(styles[GeometryType.LINE_STRING], styles[GeometryType.POINT]);
    return styles;
}
function defaultGeometryFunction(feature) {
    return feature.getGeometry();
}
 const style_Style = (Style);
;
var BaseVector_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BaseVector_Property = {
    RENDER_ORDER: 'renderOrder',
};
var BaseVectorLayer =  (function (_super) {
    BaseVector_extends(BaseVectorLayer, _super);
    function BaseVectorLayer(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var baseOptions = (0,obj.f0)({}, options);
        delete baseOptions.style;
        delete baseOptions.renderBuffer;
        delete baseOptions.updateWhileAnimating;
        delete baseOptions.updateWhileInteracting;
        _this = _super.call(this, baseOptions) || this;
        _this.declutter_ =
            options.declutter !== undefined ? options.declutter : false;
        _this.renderBuffer_ =
            options.renderBuffer !== undefined ? options.renderBuffer : 100;
        _this.style_ = null;
        _this.styleFunction_ = undefined;
        _this.setStyle(options.style);
        _this.updateWhileAnimating_ =
            options.updateWhileAnimating !== undefined
                ? options.updateWhileAnimating
                : false;
        _this.updateWhileInteracting_ =
            options.updateWhileInteracting !== undefined
                ? options.updateWhileInteracting
                : false;
        return _this;
    }
    BaseVectorLayer.prototype.getDeclutter = function () {
        return this.declutter_;
    };
    BaseVectorLayer.prototype.getFeatures = function (pixel) {
        return _super.prototype.getFeatures.call(this, pixel);
    };
    BaseVectorLayer.prototype.getRenderBuffer = function () {
        return this.renderBuffer_;
    };
    BaseVectorLayer.prototype.getRenderOrder = function () {
        return  (this.get(BaseVector_Property.RENDER_ORDER));
    };
    BaseVectorLayer.prototype.getStyle = function () {
        return this.style_;
    };
    BaseVectorLayer.prototype.getStyleFunction = function () {
        return this.styleFunction_;
    };
    BaseVectorLayer.prototype.getUpdateWhileAnimating = function () {
        return this.updateWhileAnimating_;
    };
    BaseVectorLayer.prototype.getUpdateWhileInteracting = function () {
        return this.updateWhileInteracting_;
    };
    BaseVectorLayer.prototype.renderDeclutter = function (frameState) {
        if (!frameState.declutterTree) {
            frameState.declutterTree = new rbush_min(9);
        }
 (this.getRenderer()).renderDeclutter(frameState);
    };
    BaseVectorLayer.prototype.setRenderOrder = function (renderOrder) {
        this.set(BaseVector_Property.RENDER_ORDER, renderOrder);
    };
    BaseVectorLayer.prototype.setStyle = function (opt_style) {
        this.style_ = opt_style !== undefined ? opt_style : createDefaultStyle;
        this.styleFunction_ =
            opt_style === null ? undefined : toFunction(this.style_);
        this.changed();
    };
    return BaseVectorLayer;
}(layer_Layer));
 const BaseVector = (BaseVectorLayer);
;
var Instruction = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
};
var fillInstruction = [Instruction.FILL];
var strokeInstruction = [Instruction.STROKE];
var beginPathInstruction = [Instruction.BEGIN_PATH];
var closePathInstruction = [Instruction.CLOSE_PATH];
 const canvas_Instruction = (Instruction);
var Relationship = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/extent/Relationship.js");
;
var VectorContext =  (function () {
    function VectorContext() {
    }
    VectorContext.prototype.drawCustom = function (geometry, feature, renderer, hitDetectionRenderer) { };
    VectorContext.prototype.drawGeometry = function (geometry) { };
    VectorContext.prototype.setStyle = function (style) { };
    VectorContext.prototype.drawCircle = function (circleGeometry, feature) { };
    VectorContext.prototype.drawFeature = function (feature, style) { };
    VectorContext.prototype.drawGeometryCollection = function (geometryCollectionGeometry, feature) { };
    VectorContext.prototype.drawLineString = function (lineStringGeometry, feature) { };
    VectorContext.prototype.drawMultiLineString = function (multiLineStringGeometry, feature) { };
    VectorContext.prototype.drawMultiPoint = function (multiPointGeometry, feature) { };
    VectorContext.prototype.drawMultiPolygon = function (multiPolygonGeometry, feature) { };
    VectorContext.prototype.drawPoint = function (pointGeometry, feature) { };
    VectorContext.prototype.drawPolygon = function (polygonGeometry, feature) { };
    VectorContext.prototype.drawText = function (geometry, feature) { };
    VectorContext.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) { };
    VectorContext.prototype.setImageStyle = function (imageStyle, opt_declutterImageWithText) { };
    VectorContext.prototype.setTextStyle = function (textStyle, opt_declutterImageWithText) { };
    return VectorContext;
}());
 const render_VectorContext = (VectorContext);
var inflate = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/flat/inflate.js");
;
var Builder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var CanvasBuilder =  (function (_super) {
    Builder_extends(CanvasBuilder, _super);
    function CanvasBuilder(tolerance, maxExtent, resolution, pixelRatio) {
        var _this = _super.call(this) || this;
        _this.tolerance = tolerance;
        _this.maxExtent = maxExtent;
        _this.pixelRatio = pixelRatio;
        _this.maxLineWidth = 0;
        _this.resolution = resolution;
        _this.beginGeometryInstruction1_ = null;
        _this.beginGeometryInstruction2_ = null;
        _this.bufferedMaxExtent_ = null;
        _this.instructions = [];
        _this.coordinates = [];
        _this.tmpCoordinate_ = [];
        _this.hitDetectionInstructions = [];
        _this.state =  ({});
        return _this;
    }
    CanvasBuilder.prototype.applyPixelRatio = function (dashArray) {
        var pixelRatio = this.pixelRatio;
        return pixelRatio == 1
            ? dashArray
            : dashArray.map(function (dash) {
                return dash * pixelRatio;
            });
    };
    CanvasBuilder.prototype.appendFlatPointCoordinates = function (flatCoordinates, stride) {
        var extent = this.getBufferedMaxExtent();
        var tmpCoord = this.tmpCoordinate_;
        var coordinates = this.coordinates;
        var myEnd = coordinates.length;
        for (var i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
            tmpCoord[0] = flatCoordinates[i];
            tmpCoord[1] = flatCoordinates[i + 1];
            if ((0,ol_extent.b8)(extent, tmpCoord)) {
                coordinates[myEnd++] = tmpCoord[0];
                coordinates[myEnd++] = tmpCoord[1];
            }
        }
        return myEnd;
    };
    CanvasBuilder.prototype.appendFlatLineCoordinates = function (flatCoordinates, offset, end, stride, closed, skipFirst) {
        var coordinates = this.coordinates;
        var myEnd = coordinates.length;
        var extent = this.getBufferedMaxExtent();
        if (skipFirst) {
            offset += stride;
        }
        var lastXCoord = flatCoordinates[offset];
        var lastYCoord = flatCoordinates[offset + 1];
        var nextCoord = this.tmpCoordinate_;
        var skipped = true;
        var i, lastRel, nextRel;
        for (i = offset + stride; i < end; i += stride) {
            nextCoord[0] = flatCoordinates[i];
            nextCoord[1] = flatCoordinates[i + 1];
            nextRel = (0,ol_extent.pX)(extent, nextCoord);
            if (nextRel !== lastRel) {
                if (skipped) {
                    coordinates[myEnd++] = lastXCoord;
                    coordinates[myEnd++] = lastYCoord;
                    skipped = false;
                }
                coordinates[myEnd++] = nextCoord[0];
                coordinates[myEnd++] = nextCoord[1];
            }
            else if (nextRel === Relationship.Z.INTERSECTING) {
                coordinates[myEnd++] = nextCoord[0];
                coordinates[myEnd++] = nextCoord[1];
                skipped = false;
            }
            else {
                skipped = true;
            }
            lastXCoord = nextCoord[0];
            lastYCoord = nextCoord[1];
            lastRel = nextRel;
        }
        if ((closed && skipped) || i === offset + stride) {
            coordinates[myEnd++] = lastXCoord;
            coordinates[myEnd++] = lastYCoord;
        }
        return myEnd;
    };
    CanvasBuilder.prototype.drawCustomCoordinates_ = function (flatCoordinates, offset, ends, stride, builderEnds) {
        for (var i = 0, ii = ends.length; i < ii; ++i) {
            var end = ends[i];
            var builderEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
            builderEnds.push(builderEnd);
            offset = end;
        }
        return offset;
    };
    CanvasBuilder.prototype.drawCustom = function (geometry, feature, renderer, hitDetectionRenderer) {
        this.beginGeometry(geometry, feature);
        var type = geometry.getType();
        var stride = geometry.getStride();
        var builderBegin = this.coordinates.length;
        var flatCoordinates, builderEnd, builderEnds, builderEndss;
        var offset;
        switch (type) {
            case geom_GeometryType.Z.MULTI_POLYGON:
                flatCoordinates =
 (geometry).getOrientedFlatCoordinates();
                builderEndss = [];
                var endss = 
 (geometry).getEndss();
                offset = 0;
                for (var i = 0, ii = endss.length; i < ii; ++i) {
                    var myEnds = [];
                    offset = this.drawCustomCoordinates_(flatCoordinates, offset, endss[i], stride, myEnds);
                    builderEndss.push(myEnds);
                }
                this.instructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEndss,
                    geometry,
                    renderer,
                    inflate.ug,
                ]);
                this.hitDetectionInstructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEndss,
                    geometry,
                    hitDetectionRenderer || renderer,
                    inflate.ug,
                ]);
                break;
            case geom_GeometryType.Z.POLYGON:
            case geom_GeometryType.Z.MULTI_LINE_STRING:
                builderEnds = [];
                flatCoordinates =
                    type == geom_GeometryType.Z.POLYGON
                        ?  (geometry).getOrientedFlatCoordinates()
                        : geometry.getFlatCoordinates();
                offset = this.drawCustomCoordinates_(flatCoordinates, 0, 
 (geometry).getEnds(), stride, builderEnds);
                this.instructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnds,
                    geometry,
                    renderer,
                    inflate.o1,
                ]);
                this.hitDetectionInstructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnds,
                    geometry,
                    hitDetectionRenderer || renderer,
                    inflate.o1,
                ]);
                break;
            case geom_GeometryType.Z.LINE_STRING:
            case geom_GeometryType.Z.CIRCLE:
                flatCoordinates = geometry.getFlatCoordinates();
                builderEnd = this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
                this.instructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnd,
                    geometry,
                    renderer,
                    inflate.Ml,
                ]);
                this.hitDetectionInstructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnd,
                    geometry,
                    hitDetectionRenderer || renderer,
                    inflate.Ml,
                ]);
                break;
            case geom_GeometryType.Z.MULTI_POINT:
                flatCoordinates = geometry.getFlatCoordinates();
                builderEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
                if (builderEnd > builderBegin) {
                    this.instructions.push([
                        canvas_Instruction.CUSTOM,
                        builderBegin,
                        builderEnd,
                        geometry,
                        renderer,
                        inflate.Ml,
                    ]);
                    this.hitDetectionInstructions.push([
                        canvas_Instruction.CUSTOM,
                        builderBegin,
                        builderEnd,
                        geometry,
                        hitDetectionRenderer || renderer,
                        inflate.Ml,
                    ]);
                }
                break;
            case geom_GeometryType.Z.POINT:
                flatCoordinates = geometry.getFlatCoordinates();
                this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
                builderEnd = this.coordinates.length;
                this.instructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnd,
                    geometry,
                    renderer,
                ]);
                this.hitDetectionInstructions.push([
                    canvas_Instruction.CUSTOM,
                    builderBegin,
                    builderEnd,
                    geometry,
                    hitDetectionRenderer || renderer,
                ]);
                break;
            default:
        }
        this.endGeometry(feature);
    };
    CanvasBuilder.prototype.beginGeometry = function (geometry, feature) {
        this.beginGeometryInstruction1_ = [
            canvas_Instruction.BEGIN_GEOMETRY,
            feature,
            0,
            geometry,
        ];
        this.instructions.push(this.beginGeometryInstruction1_);
        this.beginGeometryInstruction2_ = [
            canvas_Instruction.BEGIN_GEOMETRY,
            feature,
            0,
            geometry,
        ];
        this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
    };
    CanvasBuilder.prototype.finish = function () {
        return {
            instructions: this.instructions,
            hitDetectionInstructions: this.hitDetectionInstructions,
            coordinates: this.coordinates,
        };
    };
    CanvasBuilder.prototype.reverseHitDetectionInstructions = function () {
        var hitDetectionInstructions = this.hitDetectionInstructions;
        hitDetectionInstructions.reverse();
        var i;
        var n = hitDetectionInstructions.length;
        var instruction;
        var type;
        var begin = -1;
        for (i = 0; i < n; ++i) {
            instruction = hitDetectionInstructions[i];
            type =  (instruction[0]);
            if (type == canvas_Instruction.END_GEOMETRY) {
                begin = i;
            }
            else if (type == canvas_Instruction.BEGIN_GEOMETRY) {
                instruction[2] = i;
                (0,array.FZ)(this.hitDetectionInstructions, begin, i);
                begin = -1;
            }
        }
    };
    CanvasBuilder.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) {
        var state = this.state;
        if (fillStyle) {
            var fillStyleColor = fillStyle.getColor();
            state.fillStyle = asColorLike(fillStyleColor ? fillStyleColor : defaultFillStyle);
        }
        else {
            state.fillStyle = undefined;
        }
        if (strokeStyle) {
            var strokeStyleColor = strokeStyle.getColor();
            state.strokeStyle = asColorLike(strokeStyleColor ? strokeStyleColor : defaultStrokeStyle);
            var strokeStyleLineCap = strokeStyle.getLineCap();
            state.lineCap =
                strokeStyleLineCap !== undefined ? strokeStyleLineCap : defaultLineCap;
            var strokeStyleLineDash = strokeStyle.getLineDash();
            state.lineDash = strokeStyleLineDash
                ? strokeStyleLineDash.slice()
                : defaultLineDash;
            var strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
            state.lineDashOffset = strokeStyleLineDashOffset
                ? strokeStyleLineDashOffset
                : defaultLineDashOffset;
            var strokeStyleLineJoin = strokeStyle.getLineJoin();
            state.lineJoin =
                strokeStyleLineJoin !== undefined
                    ? strokeStyleLineJoin
                    : defaultLineJoin;
            var strokeStyleWidth = strokeStyle.getWidth();
            state.lineWidth =
                strokeStyleWidth !== undefined ? strokeStyleWidth : defaultLineWidth;
            var strokeStyleMiterLimit = strokeStyle.getMiterLimit();
            state.miterLimit =
                strokeStyleMiterLimit !== undefined
                    ? strokeStyleMiterLimit
                    : defaultMiterLimit;
            if (state.lineWidth > this.maxLineWidth) {
                this.maxLineWidth = state.lineWidth;
                this.bufferedMaxExtent_ = null;
            }
        }
        else {
            state.strokeStyle = undefined;
            state.lineCap = undefined;
            state.lineDash = null;
            state.lineDashOffset = undefined;
            state.lineJoin = undefined;
            state.lineWidth = undefined;
            state.miterLimit = undefined;
        }
    };
    CanvasBuilder.prototype.createFill = function (state) {
        var fillStyle = state.fillStyle;
        var fillInstruction = [canvas_Instruction.SET_FILL_STYLE, fillStyle];
        if (typeof fillStyle !== 'string') {
            fillInstruction.push(true);
        }
        return fillInstruction;
    };
    CanvasBuilder.prototype.applyStroke = function (state) {
        this.instructions.push(this.createStroke(state));
    };
    CanvasBuilder.prototype.createStroke = function (state) {
        return [
            canvas_Instruction.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth * this.pixelRatio,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            this.applyPixelRatio(state.lineDash),
            state.lineDashOffset * this.pixelRatio,
        ];
    };
    CanvasBuilder.prototype.updateFillStyle = function (state, createFill) {
        var fillStyle = state.fillStyle;
        if (typeof fillStyle !== 'string' || state.currentFillStyle != fillStyle) {
            if (fillStyle !== undefined) {
                this.instructions.push(createFill.call(this, state));
            }
            state.currentFillStyle = fillStyle;
        }
    };
    CanvasBuilder.prototype.updateStrokeStyle = function (state, applyStroke) {
        var strokeStyle = state.strokeStyle;
        var lineCap = state.lineCap;
        var lineDash = state.lineDash;
        var lineDashOffset = state.lineDashOffset;
        var lineJoin = state.lineJoin;
        var lineWidth = state.lineWidth;
        var miterLimit = state.miterLimit;
        if (state.currentStrokeStyle != strokeStyle ||
            state.currentLineCap != lineCap ||
            (lineDash != state.currentLineDash &&
                !(0,array.fS)(state.currentLineDash, lineDash)) ||
            state.currentLineDashOffset != lineDashOffset ||
            state.currentLineJoin != lineJoin ||
            state.currentLineWidth != lineWidth ||
            state.currentMiterLimit != miterLimit) {
            if (strokeStyle !== undefined) {
                applyStroke.call(this, state);
            }
            state.currentStrokeStyle = strokeStyle;
            state.currentLineCap = lineCap;
            state.currentLineDash = lineDash;
            state.currentLineDashOffset = lineDashOffset;
            state.currentLineJoin = lineJoin;
            state.currentLineWidth = lineWidth;
            state.currentMiterLimit = miterLimit;
        }
    };
    CanvasBuilder.prototype.endGeometry = function (feature) {
        this.beginGeometryInstruction1_[2] = this.instructions.length;
        this.beginGeometryInstruction1_ = null;
        this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
        this.beginGeometryInstruction2_ = null;
        var endGeometryInstruction = [canvas_Instruction.END_GEOMETRY, feature];
        this.instructions.push(endGeometryInstruction);
        this.hitDetectionInstructions.push(endGeometryInstruction);
    };
    CanvasBuilder.prototype.getBufferedMaxExtent = function () {
        if (!this.bufferedMaxExtent_) {
            this.bufferedMaxExtent_ = (0,ol_extent.d9)(this.maxExtent);
            if (this.maxLineWidth > 0) {
                var width = (this.resolution * (this.maxLineWidth + 1)) / 2;
                (0,ol_extent.f3)(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
            }
        }
        return this.bufferedMaxExtent_;
    };
    return CanvasBuilder;
}(render_VectorContext));
 const Builder = (CanvasBuilder);
;
var ImageBuilder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CanvasImageBuilder =  (function (_super) {
    ImageBuilder_extends(CanvasImageBuilder, _super);
    function CanvasImageBuilder(tolerance, maxExtent, resolution, pixelRatio) {
        var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
        _this.hitDetectionImage_ = null;
        _this.image_ = null;
        _this.imagePixelRatio_ = undefined;
        _this.anchorX_ = undefined;
        _this.anchorY_ = undefined;
        _this.height_ = undefined;
        _this.opacity_ = undefined;
        _this.originX_ = undefined;
        _this.originY_ = undefined;
        _this.rotateWithView_ = undefined;
        _this.rotation_ = undefined;
        _this.scale_ = undefined;
        _this.width_ = undefined;
        _this.declutterImageWithText_ = undefined;
        return _this;
    }
    CanvasImageBuilder.prototype.drawPoint = function (pointGeometry, feature) {
        if (!this.image_) {
            return;
        }
        this.beginGeometry(pointGeometry, feature);
        var flatCoordinates = pointGeometry.getFlatCoordinates();
        var stride = pointGeometry.getStride();
        var myBegin = this.coordinates.length;
        var myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        this.instructions.push([
            canvas_Instruction.DRAW_IMAGE,
            myBegin,
            myEnd,
            this.image_,
            this.anchorX_ * this.imagePixelRatio_,
            this.anchorY_ * this.imagePixelRatio_,
            Math.ceil(this.height_ * this.imagePixelRatio_),
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            [
                (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
                (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
            ],
            Math.ceil(this.width_ * this.imagePixelRatio_),
            this.declutterImageWithText_,
        ]);
        this.hitDetectionInstructions.push([
            canvas_Instruction.DRAW_IMAGE,
            myBegin,
            myEnd,
            this.hitDetectionImage_,
            this.anchorX_,
            this.anchorY_,
            this.height_,
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            this.scale_,
            this.width_,
            this.declutterImageWithText_,
        ]);
        this.endGeometry(feature);
    };
    CanvasImageBuilder.prototype.drawMultiPoint = function (multiPointGeometry, feature) {
        if (!this.image_) {
            return;
        }
        this.beginGeometry(multiPointGeometry, feature);
        var flatCoordinates = multiPointGeometry.getFlatCoordinates();
        var stride = multiPointGeometry.getStride();
        var myBegin = this.coordinates.length;
        var myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        this.instructions.push([
            canvas_Instruction.DRAW_IMAGE,
            myBegin,
            myEnd,
            this.image_,
            this.anchorX_ * this.imagePixelRatio_,
            this.anchorY_ * this.imagePixelRatio_,
            Math.ceil(this.height_ * this.imagePixelRatio_),
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            [
                (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
                (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
            ],
            Math.ceil(this.width_ * this.imagePixelRatio_),
            this.declutterImageWithText_,
        ]);
        this.hitDetectionInstructions.push([
            canvas_Instruction.DRAW_IMAGE,
            myBegin,
            myEnd,
            this.hitDetectionImage_,
            this.anchorX_,
            this.anchorY_,
            this.height_,
            this.opacity_,
            this.originX_,
            this.originY_,
            this.rotateWithView_,
            this.rotation_,
            this.scale_,
            this.width_,
            this.declutterImageWithText_,
        ]);
        this.endGeometry(feature);
    };
    CanvasImageBuilder.prototype.finish = function () {
        this.reverseHitDetectionInstructions();
        this.anchorX_ = undefined;
        this.anchorY_ = undefined;
        this.hitDetectionImage_ = null;
        this.image_ = null;
        this.imagePixelRatio_ = undefined;
        this.height_ = undefined;
        this.scale_ = undefined;
        this.opacity_ = undefined;
        this.originX_ = undefined;
        this.originY_ = undefined;
        this.rotateWithView_ = undefined;
        this.rotation_ = undefined;
        this.width_ = undefined;
        return _super.prototype.finish.call(this);
    };
    CanvasImageBuilder.prototype.setImageStyle = function (imageStyle, opt_sharedData) {
        var anchor = imageStyle.getAnchor();
        var size = imageStyle.getSize();
        var hitDetectionImage = imageStyle.getHitDetectionImage();
        var image = imageStyle.getImage(this.pixelRatio);
        var origin = imageStyle.getOrigin();
        this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
        this.anchorX_ = anchor[0];
        this.anchorY_ = anchor[1];
        this.hitDetectionImage_ = hitDetectionImage;
        this.image_ = image;
        this.height_ = size[1];
        this.opacity_ = imageStyle.getOpacity();
        this.originX_ = origin[0] * this.imagePixelRatio_;
        this.originY_ = origin[1] * this.imagePixelRatio_;
        this.rotateWithView_ = imageStyle.getRotateWithView();
        this.rotation_ = imageStyle.getRotation();
        this.scale_ = imageStyle.getScaleArray();
        this.width_ = size[0];
        this.declutterImageWithText_ = opt_sharedData;
    };
    return CanvasImageBuilder;
}(Builder));
 const ImageBuilder = (CanvasImageBuilder);
;
var LineStringBuilder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CanvasLineStringBuilder =  (function (_super) {
    LineStringBuilder_extends(CanvasLineStringBuilder, _super);
    function CanvasLineStringBuilder(tolerance, maxExtent, resolution, pixelRatio) {
        return _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
    }
    CanvasLineStringBuilder.prototype.drawFlatCoordinates_ = function (flatCoordinates, offset, end, stride) {
        var myBegin = this.coordinates.length;
        var myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
        var moveToLineToInstruction = [
            canvas_Instruction.MOVE_TO_LINE_TO,
            myBegin,
            myEnd,
        ];
        this.instructions.push(moveToLineToInstruction);
        this.hitDetectionInstructions.push(moveToLineToInstruction);
        return end;
    };
    CanvasLineStringBuilder.prototype.drawLineString = function (lineStringGeometry, feature) {
        var state = this.state;
        var strokeStyle = state.strokeStyle;
        var lineWidth = state.lineWidth;
        if (strokeStyle === undefined || lineWidth === undefined) {
            return;
        }
        this.updateStrokeStyle(state, this.applyStroke);
        this.beginGeometry(lineStringGeometry, feature);
        this.hitDetectionInstructions.push([
            canvas_Instruction.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            defaultLineDash,
            defaultLineDashOffset,
        ], beginPathInstruction);
        var flatCoordinates = lineStringGeometry.getFlatCoordinates();
        var stride = lineStringGeometry.getStride();
        this.drawFlatCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
        this.hitDetectionInstructions.push(strokeInstruction);
        this.endGeometry(feature);
    };
    CanvasLineStringBuilder.prototype.drawMultiLineString = function (multiLineStringGeometry, feature) {
        var state = this.state;
        var strokeStyle = state.strokeStyle;
        var lineWidth = state.lineWidth;
        if (strokeStyle === undefined || lineWidth === undefined) {
            return;
        }
        this.updateStrokeStyle(state, this.applyStroke);
        this.beginGeometry(multiLineStringGeometry, feature);
        this.hitDetectionInstructions.push([
            canvas_Instruction.SET_STROKE_STYLE,
            state.strokeStyle,
            state.lineWidth,
            state.lineCap,
            state.lineJoin,
            state.miterLimit,
            state.lineDash,
            state.lineDashOffset,
        ], beginPathInstruction);
        var ends = multiLineStringGeometry.getEnds();
        var flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
        var stride = multiLineStringGeometry.getStride();
        var offset = 0;
        for (var i = 0, ii = ends.length; i < ii; ++i) {
            offset = this.drawFlatCoordinates_(flatCoordinates, offset, 
 (ends[i]), stride);
        }
        this.hitDetectionInstructions.push(strokeInstruction);
        this.endGeometry(feature);
    };
    CanvasLineStringBuilder.prototype.finish = function () {
        var state = this.state;
        if (state.lastStroke != undefined &&
            state.lastStroke != this.coordinates.length) {
            this.instructions.push(strokeInstruction);
        }
        this.reverseHitDetectionInstructions();
        this.state = null;
        return _super.prototype.finish.call(this);
    };
    CanvasLineStringBuilder.prototype.applyStroke = function (state) {
        if (state.lastStroke != undefined &&
            state.lastStroke != this.coordinates.length) {
            this.instructions.push(strokeInstruction);
            state.lastStroke = this.coordinates.length;
        }
        state.lastStroke = 0;
        _super.prototype.applyStroke.call(this, state);
        this.instructions.push(beginPathInstruction);
    };
    return CanvasLineStringBuilder;
}(Builder));
 const LineStringBuilder = (CanvasLineStringBuilder);
var simplify = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/flat/simplify.js");
;
var PolygonBuilder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CanvasPolygonBuilder =  (function (_super) {
    PolygonBuilder_extends(CanvasPolygonBuilder, _super);
    function CanvasPolygonBuilder(tolerance, maxExtent, resolution, pixelRatio) {
        return _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
    }
    CanvasPolygonBuilder.prototype.drawFlatCoordinatess_ = function (flatCoordinates, offset, ends, stride) {
        var state = this.state;
        var fill = state.fillStyle !== undefined;
        var stroke = state.strokeStyle !== undefined;
        var numEnds = ends.length;
        this.instructions.push(beginPathInstruction);
        this.hitDetectionInstructions.push(beginPathInstruction);
        for (var i = 0; i < numEnds; ++i) {
            var end = ends[i];
            var myBegin = this.coordinates.length;
            var myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, true, !stroke);
            var moveToLineToInstruction = [
                canvas_Instruction.MOVE_TO_LINE_TO,
                myBegin,
                myEnd,
            ];
            this.instructions.push(moveToLineToInstruction);
            this.hitDetectionInstructions.push(moveToLineToInstruction);
            if (stroke) {
                this.instructions.push(closePathInstruction);
                this.hitDetectionInstructions.push(closePathInstruction);
            }
            offset = end;
        }
        if (fill) {
            this.instructions.push(fillInstruction);
            this.hitDetectionInstructions.push(fillInstruction);
        }
        if (stroke) {
            this.instructions.push(strokeInstruction);
            this.hitDetectionInstructions.push(strokeInstruction);
        }
        return offset;
    };
    CanvasPolygonBuilder.prototype.drawCircle = function (circleGeometry, feature) {
        var state = this.state;
        var fillStyle = state.fillStyle;
        var strokeStyle = state.strokeStyle;
        if (fillStyle === undefined && strokeStyle === undefined) {
            return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(circleGeometry, feature);
        if (state.fillStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_FILL_STYLE,
                defaultFillStyle,
            ]);
        }
        if (state.strokeStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_STROKE_STYLE,
                state.strokeStyle,
                state.lineWidth,
                state.lineCap,
                state.lineJoin,
                state.miterLimit,
                state.lineDash,
                state.lineDashOffset,
            ]);
        }
        var flatCoordinates = circleGeometry.getFlatCoordinates();
        var stride = circleGeometry.getStride();
        var myBegin = this.coordinates.length;
        this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
        var circleInstruction = [canvas_Instruction.CIRCLE, myBegin];
        this.instructions.push(beginPathInstruction, circleInstruction);
        this.hitDetectionInstructions.push(beginPathInstruction, circleInstruction);
        if (state.fillStyle !== undefined) {
            this.instructions.push(fillInstruction);
            this.hitDetectionInstructions.push(fillInstruction);
        }
        if (state.strokeStyle !== undefined) {
            this.instructions.push(strokeInstruction);
            this.hitDetectionInstructions.push(strokeInstruction);
        }
        this.endGeometry(feature);
    };
    CanvasPolygonBuilder.prototype.drawPolygon = function (polygonGeometry, feature) {
        var state = this.state;
        var fillStyle = state.fillStyle;
        var strokeStyle = state.strokeStyle;
        if (fillStyle === undefined && strokeStyle === undefined) {
            return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(polygonGeometry, feature);
        if (state.fillStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_FILL_STYLE,
                defaultFillStyle,
            ]);
        }
        if (state.strokeStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_STROKE_STYLE,
                state.strokeStyle,
                state.lineWidth,
                state.lineCap,
                state.lineJoin,
                state.miterLimit,
                state.lineDash,
                state.lineDashOffset,
            ]);
        }
        var ends = polygonGeometry.getEnds();
        var flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
        var stride = polygonGeometry.getStride();
        this.drawFlatCoordinatess_(flatCoordinates, 0, 
 (ends), stride);
        this.endGeometry(feature);
    };
    CanvasPolygonBuilder.prototype.drawMultiPolygon = function (multiPolygonGeometry, feature) {
        var state = this.state;
        var fillStyle = state.fillStyle;
        var strokeStyle = state.strokeStyle;
        if (fillStyle === undefined && strokeStyle === undefined) {
            return;
        }
        this.setFillStrokeStyles_();
        this.beginGeometry(multiPolygonGeometry, feature);
        if (state.fillStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_FILL_STYLE,
                defaultFillStyle,
            ]);
        }
        if (state.strokeStyle !== undefined) {
            this.hitDetectionInstructions.push([
                canvas_Instruction.SET_STROKE_STYLE,
                state.strokeStyle,
                state.lineWidth,
                state.lineCap,
                state.lineJoin,
                state.miterLimit,
                state.lineDash,
                state.lineDashOffset,
            ]);
        }
        var endss = multiPolygonGeometry.getEndss();
        var flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
        var stride = multiPolygonGeometry.getStride();
        var offset = 0;
        for (var i = 0, ii = endss.length; i < ii; ++i) {
            offset = this.drawFlatCoordinatess_(flatCoordinates, offset, endss[i], stride);
        }
        this.endGeometry(feature);
    };
    CanvasPolygonBuilder.prototype.finish = function () {
        this.reverseHitDetectionInstructions();
        this.state = null;
        var tolerance = this.tolerance;
        if (tolerance !== 0) {
            var coordinates = this.coordinates;
            for (var i = 0, ii = coordinates.length; i < ii; ++i) {
                coordinates[i] = (0,simplify.uZ)(coordinates[i], tolerance);
            }
        }
        return _super.prototype.finish.call(this);
    };
    CanvasPolygonBuilder.prototype.setFillStrokeStyles_ = function () {
        var state = this.state;
        var fillStyle = state.fillStyle;
        if (fillStyle !== undefined) {
            this.updateFillStyle(state, this.createFill);
        }
        if (state.strokeStyle !== undefined) {
            this.updateStrokeStyle(state, this.applyStroke);
        }
    };
    return CanvasPolygonBuilder;
}(Builder));
 const PolygonBuilder = (CanvasPolygonBuilder);
;
 const TextPlacement = ({
    POINT: 'point',
    LINE: 'line',
});
;
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
    var chunkStart = offset;
    var chunkEnd = offset;
    var chunkM = 0;
    var m = 0;
    var start = offset;
    var acos, i, m12, m23, x1, y1, x12, y12, x23, y23;
    for (i = offset; i < end; i += stride) {
        var x2 = flatCoordinates[i];
        var y2 = flatCoordinates[i + 1];
        if (x1 !== undefined) {
            x23 = x2 - x1;
            y23 = y2 - y1;
            m23 = Math.sqrt(x23 * x23 + y23 * y23);
            if (x12 !== undefined) {
                m += m12;
                acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));
                if (acos > maxAngle) {
                    if (m > chunkM) {
                        chunkM = m;
                        chunkStart = start;
                        chunkEnd = i;
                    }
                    m = 0;
                    start = i - stride;
                }
            }
            m12 = m23;
            x12 = x23;
            y12 = y23;
        }
        x1 = x2;
        y1 = y2;
    }
    m += m23;
    return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}
;
var TextBuilder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var TEXT_ALIGN = {
    'left': 0,
    'end': 0,
    'center': 0.5,
    'right': 1,
    'start': 1,
    'top': 0,
    'middle': 0.5,
    'hanging': 0.2,
    'alphabetic': 0.8,
    'ideographic': 0.8,
    'bottom': 1,
};
var CanvasTextBuilder =  (function (_super) {
    TextBuilder_extends(CanvasTextBuilder, _super);
    function CanvasTextBuilder(tolerance, maxExtent, resolution, pixelRatio) {
        var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
        _this.labels_ = null;
        _this.text_ = '';
        _this.textOffsetX_ = 0;
        _this.textOffsetY_ = 0;
        _this.textRotateWithView_ = undefined;
        _this.textRotation_ = 0;
        _this.textFillState_ = null;
        _this.fillStates = {};
        _this.textStrokeState_ = null;
        _this.strokeStates = {};
        _this.textState_ =  ({});
        _this.textStates = {};
        _this.textKey_ = '';
        _this.fillKey_ = '';
        _this.strokeKey_ = '';
        _this.declutterImageWithText_ = undefined;
        return _this;
    }
    CanvasTextBuilder.prototype.finish = function () {
        var instructions = _super.prototype.finish.call(this);
        instructions.textStates = this.textStates;
        instructions.fillStates = this.fillStates;
        instructions.strokeStates = this.strokeStates;
        return instructions;
    };
    CanvasTextBuilder.prototype.drawText = function (geometry, feature) {
        var fillState = this.textFillState_;
        var strokeState = this.textStrokeState_;
        var textState = this.textState_;
        if (this.text_ === '' || !textState || (!fillState && !strokeState)) {
            return;
        }
        var coordinates = this.coordinates;
        var begin = coordinates.length;
        var geometryType = geometry.getType();
        var flatCoordinates = null;
        var stride = geometry.getStride();
        if (textState.placement === TextPlacement.LINE &&
            (geometryType == geom_GeometryType.Z.LINE_STRING ||
                geometryType == geom_GeometryType.Z.MULTI_LINE_STRING ||
                geometryType == geom_GeometryType.Z.POLYGON ||
                geometryType == geom_GeometryType.Z.MULTI_POLYGON)) {
            if (!(0,ol_extent.kK)(this.getBufferedMaxExtent(), geometry.getExtent())) {
                return;
            }
            var ends = void 0;
            flatCoordinates = geometry.getFlatCoordinates();
            if (geometryType == geom_GeometryType.Z.LINE_STRING) {
                ends = [flatCoordinates.length];
            }
            else if (geometryType == geom_GeometryType.Z.MULTI_LINE_STRING) {
                ends =  (geometry).getEnds();
            }
            else if (geometryType == geom_GeometryType.Z.POLYGON) {
                ends =  (geometry)
                    .getEnds()
                    .slice(0, 1);
            }
            else if (geometryType == geom_GeometryType.Z.MULTI_POLYGON) {
                var endss = 
 (geometry).getEndss();
                ends = [];
                for (var i = 0, ii = endss.length; i < ii; ++i) {
                    ends.push(endss[i][0]);
                }
            }
            this.beginGeometry(geometry, feature);
            var textAlign = textState.textAlign;
            var flatOffset = 0;
            var flatEnd = void 0;
            for (var o = 0, oo = ends.length; o < oo; ++o) {
                if (textAlign == undefined) {
                    var range = matchingChunk(textState.maxAngle, flatCoordinates, flatOffset, ends[o], stride);
                    flatOffset = range[0];
                    flatEnd = range[1];
                }
                else {
                    flatEnd = ends[o];
                }
                for (var i = flatOffset; i < flatEnd; i += stride) {
                    coordinates.push(flatCoordinates[i], flatCoordinates[i + 1]);
                }
                var end = coordinates.length;
                flatOffset = ends[o];
                this.drawChars_(begin, end);
                begin = end;
            }
            this.endGeometry(feature);
        }
        else {
            var geometryWidths = textState.overflow ? null : [];
            switch (geometryType) {
                case geom_GeometryType.Z.POINT:
                case geom_GeometryType.Z.MULTI_POINT:
                    flatCoordinates =
 (geometry).getFlatCoordinates();
                    break;
                case geom_GeometryType.Z.LINE_STRING:
                    flatCoordinates =
 (geometry).getFlatMidpoint();
                    break;
                case geom_GeometryType.Z.CIRCLE:
                    flatCoordinates =
 (geometry).getCenter();
                    break;
                case geom_GeometryType.Z.MULTI_LINE_STRING:
                    flatCoordinates =
 (geometry).getFlatMidpoints();
                    stride = 2;
                    break;
                case geom_GeometryType.Z.POLYGON:
                    flatCoordinates =
 (geometry).getFlatInteriorPoint();
                    if (!textState.overflow) {
                        geometryWidths.push(flatCoordinates[2] / this.resolution);
                    }
                    stride = 3;
                    break;
                case geom_GeometryType.Z.MULTI_POLYGON:
                    var interiorPoints = 
 (geometry).getFlatInteriorPoints();
                    flatCoordinates = [];
                    for (var i = 0, ii = interiorPoints.length; i < ii; i += 3) {
                        if (!textState.overflow) {
                            geometryWidths.push(interiorPoints[i + 2] / this.resolution);
                        }
                        flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
                    }
                    if (flatCoordinates.length === 0) {
                        return;
                    }
                    stride = 2;
                    break;
                default:
            }
            var end = this.appendFlatPointCoordinates(flatCoordinates, stride);
            if (end === begin) {
                return;
            }
            if (geometryWidths &&
                (end - begin) / 2 !== flatCoordinates.length / stride) {
                var beg_1 = begin / 2;
                geometryWidths = geometryWidths.filter(function (w, i) {
                    var keep = coordinates[(beg_1 + i) * 2] === flatCoordinates[i * stride] &&
                        coordinates[(beg_1 + i) * 2 + 1] === flatCoordinates[i * stride + 1];
                    if (!keep) {
                        --beg_1;
                    }
                    return keep;
                });
            }
            this.saveTextStates_();
            if (textState.backgroundFill || textState.backgroundStroke) {
                this.setFillStrokeStyle(textState.backgroundFill, textState.backgroundStroke);
                if (textState.backgroundFill) {
                    this.updateFillStyle(this.state, this.createFill);
                    this.hitDetectionInstructions.push(this.createFill(this.state));
                }
                if (textState.backgroundStroke) {
                    this.updateStrokeStyle(this.state, this.applyStroke);
                    this.hitDetectionInstructions.push(this.createStroke(this.state));
                }
            }
            this.beginGeometry(geometry, feature);
            var padding = textState.padding;
            if (padding != defaultPadding &&
                (textState.scale[0] < 0 || textState.scale[1] < 0)) {
                var p0 = textState.padding[0];
                var p1 = textState.padding[1];
                var p2 = textState.padding[2];
                var p3 = textState.padding[3];
                if (textState.scale[0] < 0) {
                    p1 = -p1;
                    p3 = -p3;
                }
                if (textState.scale[1] < 0) {
                    p0 = -p0;
                    p2 = -p2;
                }
                padding = [p0, p1, p2, p3];
            }
            var pixelRatio_1 = this.pixelRatio;
            this.instructions.push([
                canvas_Instruction.DRAW_IMAGE,
                begin,
                end,
                null,
                NaN,
                NaN,
                NaN,
                1,
                0,
                0,
                this.textRotateWithView_,
                this.textRotation_,
                [1, 1],
                NaN,
                this.declutterImageWithText_,
                padding == defaultPadding
                    ? defaultPadding
                    : padding.map(function (p) {
                        return p * pixelRatio_1;
                    }),
                !!textState.backgroundFill,
                !!textState.backgroundStroke,
                this.text_,
                this.textKey_,
                this.strokeKey_,
                this.fillKey_,
                this.textOffsetX_,
                this.textOffsetY_,
                geometryWidths,
            ]);
            var scale = 1 / pixelRatio_1;
            this.hitDetectionInstructions.push([
                canvas_Instruction.DRAW_IMAGE,
                begin,
                end,
                null,
                NaN,
                NaN,
                NaN,
                1,
                0,
                0,
                this.textRotateWithView_,
                this.textRotation_,
                [scale, scale],
                NaN,
                this.declutterImageWithText_,
                padding,
                !!textState.backgroundFill,
                !!textState.backgroundStroke,
                this.text_,
                this.textKey_,
                this.strokeKey_,
                this.fillKey_,
                this.textOffsetX_,
                this.textOffsetY_,
                geometryWidths,
            ]);
            this.endGeometry(feature);
        }
    };
    CanvasTextBuilder.prototype.saveTextStates_ = function () {
        var strokeState = this.textStrokeState_;
        var textState = this.textState_;
        var fillState = this.textFillState_;
        var strokeKey = this.strokeKey_;
        if (strokeState) {
            if (!(strokeKey in this.strokeStates)) {
                this.strokeStates[strokeKey] = {
                    strokeStyle: strokeState.strokeStyle,
                    lineCap: strokeState.lineCap,
                    lineDashOffset: strokeState.lineDashOffset,
                    lineWidth: strokeState.lineWidth,
                    lineJoin: strokeState.lineJoin,
                    miterLimit: strokeState.miterLimit,
                    lineDash: strokeState.lineDash,
                };
            }
        }
        var textKey = this.textKey_;
        if (!(textKey in this.textStates)) {
            this.textStates[textKey] = {
                font: textState.font,
                textAlign: textState.textAlign || defaultTextAlign,
                textBaseline: textState.textBaseline || defaultTextBaseline,
                scale: textState.scale,
            };
        }
        var fillKey = this.fillKey_;
        if (fillState) {
            if (!(fillKey in this.fillStates)) {
                this.fillStates[fillKey] = {
                    fillStyle: fillState.fillStyle,
                };
            }
        }
    };
    CanvasTextBuilder.prototype.drawChars_ = function (begin, end) {
        var strokeState = this.textStrokeState_;
        var textState = this.textState_;
        var strokeKey = this.strokeKey_;
        var textKey = this.textKey_;
        var fillKey = this.fillKey_;
        this.saveTextStates_();
        var pixelRatio = this.pixelRatio;
        var baseline = TEXT_ALIGN[textState.textBaseline];
        var offsetY = this.textOffsetY_ * pixelRatio;
        var text = this.text_;
        var strokeWidth = strokeState
            ? (strokeState.lineWidth * Math.abs(textState.scale[0])) / 2
            : 0;
        this.instructions.push([
            canvas_Instruction.DRAW_CHARS,
            begin,
            end,
            baseline,
            textState.overflow,
            fillKey,
            textState.maxAngle,
            pixelRatio,
            offsetY,
            strokeKey,
            strokeWidth * pixelRatio,
            text,
            textKey,
            1,
        ]);
        this.hitDetectionInstructions.push([
            canvas_Instruction.DRAW_CHARS,
            begin,
            end,
            baseline,
            textState.overflow,
            fillKey,
            textState.maxAngle,
            1,
            offsetY,
            strokeKey,
            strokeWidth,
            text,
            textKey,
            1 / pixelRatio,
        ]);
    };
    CanvasTextBuilder.prototype.setTextStyle = function (textStyle, opt_sharedData) {
        var textState, fillState, strokeState;
        if (!textStyle) {
            this.text_ = '';
        }
        else {
            var textFillStyle = textStyle.getFill();
            if (!textFillStyle) {
                fillState = null;
                this.textFillState_ = fillState;
            }
            else {
                fillState = this.textFillState_;
                if (!fillState) {
                    fillState =  ({});
                    this.textFillState_ = fillState;
                }
                fillState.fillStyle = asColorLike(textFillStyle.getColor() || defaultFillStyle);
            }
            var textStrokeStyle = textStyle.getStroke();
            if (!textStrokeStyle) {
                strokeState = null;
                this.textStrokeState_ = strokeState;
            }
            else {
                strokeState = this.textStrokeState_;
                if (!strokeState) {
                    strokeState =  ({});
                    this.textStrokeState_ = strokeState;
                }
                var lineDash = textStrokeStyle.getLineDash();
                var lineDashOffset = textStrokeStyle.getLineDashOffset();
                var lineWidth = textStrokeStyle.getWidth();
                var miterLimit = textStrokeStyle.getMiterLimit();
                strokeState.lineCap = textStrokeStyle.getLineCap() || defaultLineCap;
                strokeState.lineDash = lineDash ? lineDash.slice() : defaultLineDash;
                strokeState.lineDashOffset =
                    lineDashOffset === undefined ? defaultLineDashOffset : lineDashOffset;
                strokeState.lineJoin = textStrokeStyle.getLineJoin() || defaultLineJoin;
                strokeState.lineWidth =
                    lineWidth === undefined ? defaultLineWidth : lineWidth;
                strokeState.miterLimit =
                    miterLimit === undefined ? defaultMiterLimit : miterLimit;
                strokeState.strokeStyle = asColorLike(textStrokeStyle.getColor() || defaultStrokeStyle);
            }
            textState = this.textState_;
            var font = textStyle.getFont() || defaultFont;
            registerFont(font);
            var textScale = textStyle.getScaleArray();
            textState.overflow = textStyle.getOverflow();
            textState.font = font;
            textState.maxAngle = textStyle.getMaxAngle();
            textState.placement = textStyle.getPlacement();
            textState.textAlign = textStyle.getTextAlign();
            textState.textBaseline =
                textStyle.getTextBaseline() || defaultTextBaseline;
            textState.backgroundFill = textStyle.getBackgroundFill();
            textState.backgroundStroke = textStyle.getBackgroundStroke();
            textState.padding = textStyle.getPadding() || defaultPadding;
            textState.scale = textScale === undefined ? [1, 1] : textScale;
            var textOffsetX = textStyle.getOffsetX();
            var textOffsetY = textStyle.getOffsetY();
            var textRotateWithView = textStyle.getRotateWithView();
            var textRotation = textStyle.getRotation();
            this.text_ = textStyle.getText() || '';
            this.textOffsetX_ = textOffsetX === undefined ? 0 : textOffsetX;
            this.textOffsetY_ = textOffsetY === undefined ? 0 : textOffsetY;
            this.textRotateWithView_ =
                textRotateWithView === undefined ? false : textRotateWithView;
            this.textRotation_ = textRotation === undefined ? 0 : textRotation;
            this.strokeKey_ = strokeState
                ? (typeof strokeState.strokeStyle == 'string'
                    ? strokeState.strokeStyle
                    : (0,util.sq)(strokeState.strokeStyle)) +
                    strokeState.lineCap +
                    strokeState.lineDashOffset +
                    '|' +
                    strokeState.lineWidth +
                    strokeState.lineJoin +
                    strokeState.miterLimit +
                    '[' +
                    strokeState.lineDash.join() +
                    ']'
                : '';
            this.textKey_ =
                textState.font +
                    textState.scale +
                    (textState.textAlign || '?') +
                    (textState.textBaseline || '?');
            this.fillKey_ = fillState
                ? typeof fillState.fillStyle == 'string'
                    ? fillState.fillStyle
                    : '|' + (0,util.sq)(fillState.fillStyle)
                : '';
        }
        this.declutterImageWithText_ = opt_sharedData;
    };
    return CanvasTextBuilder;
}(Builder));
 const TextBuilder = (CanvasTextBuilder);
;





var BATCH_CONSTRUCTORS = {
    'Circle': PolygonBuilder,
    'Default': Builder,
    'Image': ImageBuilder,
    'LineString': LineStringBuilder,
    'Polygon': PolygonBuilder,
    'Text': TextBuilder,
};
var BuilderGroup =  (function () {
    function BuilderGroup(tolerance, maxExtent, resolution, pixelRatio) {
        this.tolerance_ = tolerance;
        this.maxExtent_ = maxExtent;
        this.pixelRatio_ = pixelRatio;
        this.resolution_ = resolution;
        this.buildersByZIndex_ = {};
    }
    BuilderGroup.prototype.finish = function () {
        var builderInstructions = {};
        for (var zKey in this.buildersByZIndex_) {
            builderInstructions[zKey] = builderInstructions[zKey] || {};
            var builders = this.buildersByZIndex_[zKey];
            for (var builderKey in builders) {
                var builderInstruction = builders[builderKey].finish();
                builderInstructions[zKey][builderKey] = builderInstruction;
            }
        }
        return builderInstructions;
    };
    BuilderGroup.prototype.getBuilder = function (zIndex, builderType) {
        var zIndexKey = zIndex !== undefined ? zIndex.toString() : '0';
        var replays = this.buildersByZIndex_[zIndexKey];
        if (replays === undefined) {
            replays = {};
            this.buildersByZIndex_[zIndexKey] = replays;
        }
        var replay = replays[builderType];
        if (replay === undefined) {
            var Constructor = BATCH_CONSTRUCTORS[builderType];
            replay = new Constructor(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_);
            replays[builderType] = replay;
        }
        return replay;
    };
    return BuilderGroup;
}());
 const canvas_BuilderGroup = (BuilderGroup);
var Observable = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/Observable.js");
;
var renderer_Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var LayerRenderer =  (function (_super) {
    renderer_Layer_extends(LayerRenderer, _super);
    function LayerRenderer(layer) {
        var _this = _super.call(this) || this;
        _this.ready = true;
        _this.boundHandleImageChange_ = _this.handleImageChange_.bind(_this);
        _this.layer_ = layer;
        _this.declutterExecutorGroup = null;
        return _this;
    }
    LayerRenderer.prototype.getFeatures = function (pixel) {
        return (0,util.O3)();
    };
    LayerRenderer.prototype.getData = function (pixel) {
        return null;
    };
    LayerRenderer.prototype.prepareFrame = function (frameState) {
        return (0,util.O3)();
    };
    LayerRenderer.prototype.renderFrame = function (frameState, target) {
        return (0,util.O3)();
    };
    LayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
        if (!tiles[zoom]) {
            tiles[zoom] = {};
        }
        tiles[zoom][tile.tileCoord.toString()] = tile;
        return undefined;
    };
    LayerRenderer.prototype.createLoadedTileFinder = function (source, projection, tiles) {
        return (
        function (zoom, tileRange) {
            var callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
        }.bind(this));
    };
    LayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, matches) {
        return undefined;
    };
    LayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        return null;
    };
    LayerRenderer.prototype.getLayer = function () {
        return this.layer_;
    };
    LayerRenderer.prototype.handleFontsChanged = function () { };
    LayerRenderer.prototype.handleImageChange_ = function (event) {
        var image =  (event.target);
        if (image.getState() === ImageState.LOADED) {
            this.renderIfReadyAndVisible();
        }
    };
    LayerRenderer.prototype.loadImage = function (image) {
        var imageState = image.getState();
        if (imageState != ImageState.LOADED && imageState != ImageState.ERROR) {
            image.addEventListener(EventType.Z.CHANGE, this.boundHandleImageChange_);
        }
        if (imageState == ImageState.IDLE) {
            image.load();
            imageState = image.getState();
        }
        return imageState == ImageState.LOADED;
    };
    LayerRenderer.prototype.renderIfReadyAndVisible = function () {
        var layer = this.getLayer();
        if (layer.getVisible() && layer.getSourceState() == State.READY) {
            layer.changed();
        }
    };
    LayerRenderer.prototype.disposeInternal = function () {
        delete this.layer_;
        _super.prototype.disposeInternal.call(this);
    };
    return LayerRenderer;
}(Observable.Z));
 const renderer_Layer = (LayerRenderer);
;
var canvas_Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var pixelContext = null;
function createPixelContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    pixelContext = canvas.getContext('2d');
}
var CanvasLayerRenderer =  (function (_super) {
    canvas_Layer_extends(CanvasLayerRenderer, _super);
    function CanvasLayerRenderer(layer) {
        var _this = _super.call(this, layer) || this;
        _this.container = null;
        _this.renderedResolution;
        _this.tempTransform = (0,ol_transform.Ue)();
        _this.pixelTransform = (0,ol_transform.Ue)();
        _this.inversePixelTransform = (0,ol_transform.Ue)();
        _this.context = null;
        _this.containerReused = false;
        _this.pixelContext_ = null;
        _this.frameState = null;
        return _this;
    }
    CanvasLayerRenderer.prototype.getImageData = function (image, col, row) {
        if (!pixelContext) {
            createPixelContext();
        }
        pixelContext.clearRect(0, 0, 1, 1);
        var data;
        try {
            pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        }
        catch (err) {
            return null;
        }
        return data;
    };
    CanvasLayerRenderer.prototype.getBackground = function (frameState) {
        var layer = this.getLayer();
        var background = layer.getBackground();
        if (typeof background === 'function') {
            background = background(frameState.viewState.resolution);
        }
        return background || undefined;
    };
    CanvasLayerRenderer.prototype.useContainer = function (target, transform, opacity, opt_backgroundColor) {
        var layerClassName = this.getLayer().getClassName();
        var container, context;
        if (target &&
            target.className === layerClassName &&
            target.style.opacity === '' &&
            opacity === 1 &&
            (!opt_backgroundColor ||
                (target.style.backgroundColor &&
                    (0,array.fS)(asArray(target.style.backgroundColor), asArray(opt_backgroundColor))))) {
            var canvas = target.firstElementChild;
            if (canvas instanceof HTMLCanvasElement) {
                context = canvas.getContext('2d');
            }
        }
        if (context && context.canvas.style.transform === transform) {
            this.container = target;
            this.context = context;
            this.containerReused = true;
        }
        else if (this.containerReused) {
            this.container = null;
            this.context = null;
            this.containerReused = false;
        }
        if (!this.container) {
            container = document.createElement('div');
            container.className = layerClassName;
            var style = container.style;
            style.position = 'absolute';
            style.width = '100%';
            style.height = '100%';
            if (opt_backgroundColor) {
                style.backgroundColor = opt_backgroundColor;
            }
            context = createCanvasContext2D();
            var canvas = context.canvas;
            container.appendChild(canvas);
            style = canvas.style;
            style.position = 'absolute';
            style.left = '0';
            style.transformOrigin = 'top left';
            this.container = container;
            this.context = context;
        }
    };
    CanvasLayerRenderer.prototype.clipUnrotated = function (context, frameState, extent) {
        var topLeft = (0,ol_extent.rL)(extent);
        var topRight = (0,ol_extent.Xv)(extent);
        var bottomRight = (0,ol_extent.w$)(extent);
        var bottomLeft = (0,ol_extent.hC)(extent);
        (0,ol_transform.nn)(frameState.coordinateToPixelTransform, topLeft);
        (0,ol_transform.nn)(frameState.coordinateToPixelTransform, topRight);
        (0,ol_transform.nn)(frameState.coordinateToPixelTransform, bottomRight);
        (0,ol_transform.nn)(frameState.coordinateToPixelTransform, bottomLeft);
        var inverted = this.inversePixelTransform;
        (0,ol_transform.nn)(inverted, topLeft);
        (0,ol_transform.nn)(inverted, topRight);
        (0,ol_transform.nn)(inverted, bottomRight);
        (0,ol_transform.nn)(inverted, bottomLeft);
        context.save();
        context.beginPath();
        context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
        context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
        context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
        context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
        context.clip();
    };
    CanvasLayerRenderer.prototype.dispatchRenderEvent_ = function (type, context, frameState) {
        var layer = this.getLayer();
        if (layer.hasListener(type)) {
            var event_1 = new render_Event(type, this.inversePixelTransform, frameState, context);
            layer.dispatchEvent(event_1);
        }
    };
    CanvasLayerRenderer.prototype.preRender = function (context, frameState) {
        this.frameState = frameState;
        this.dispatchRenderEvent_(render_EventType.PRERENDER, context, frameState);
    };
    CanvasLayerRenderer.prototype.postRender = function (context, frameState) {
        this.dispatchRenderEvent_(render_EventType.POSTRENDER, context, frameState);
    };
    CanvasLayerRenderer.prototype.getRenderTransform = function (center, resolution, rotation, pixelRatio, width, height, offsetX) {
        var dx1 = width / 2;
        var dy1 = height / 2;
        var sx = pixelRatio / resolution;
        var sy = -sx;
        var dx2 = -center[0] + offsetX;
        var dy2 = -center[1];
        return (0,ol_transform.qC)(this.tempTransform, dx1, dy1, sx, sy, -rotation, dx2, dy2);
    };
    CanvasLayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        var renderPixel = (0,ol_transform.nn)(this.inversePixelTransform, pixel.slice());
        var context = this.context;
        var layer = this.getLayer();
        var layerExtent = layer.getExtent();
        if (layerExtent) {
            var renderCoordinate = (0,ol_transform.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
            if (!(0,ol_extent.b8)(layerExtent, renderCoordinate)) {
                return null;
            }
        }
        var x = Math.round(renderPixel[0]);
        var y = Math.round(renderPixel[1]);
        var pixelContext = this.pixelContext_;
        if (!pixelContext) {
            var pixelCanvas = document.createElement('canvas');
            pixelCanvas.width = 1;
            pixelCanvas.height = 1;
            pixelContext = pixelCanvas.getContext('2d');
            this.pixelContext_ = pixelContext;
        }
        pixelContext.clearRect(0, 0, 1, 1);
        var data;
        try {
            pixelContext.drawImage(context.canvas, x, y, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        }
        catch (err) {
            if (err.name === 'SecurityError') {
                this.pixelContext_ = null;
                return new Uint8Array();
            }
            return data;
        }
        if (data[3] === 0) {
            return null;
        }
        return data;
    };
    CanvasLayerRenderer.prototype.disposeInternal = function () {
        delete this.frameState;
        _super.prototype.disposeInternal.call(this);
    };
    return CanvasLayerRenderer;
}(renderer_Layer));
 const canvas_Layer = (CanvasLayerRenderer);
;
 const BuilderType = ({
    CIRCLE: 'Circle',
    DEFAULT: 'Default',
    IMAGE: 'Image',
    LINE_STRING: 'LineString',
    POLYGON: 'Polygon',
    TEXT: 'Text',
});
var flat_transform = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/flat/transform.js");
;


function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale, measureAndCacheTextWidth, font, cache, rotation) {
    var x2 = flatCoordinates[offset];
    var y2 = flatCoordinates[offset + 1];
    var x1 = 0;
    var y1 = 0;
    var segmentLength = 0;
    var segmentM = 0;
    function advance() {
        x1 = x2;
        y1 = y2;
        offset += stride;
        x2 = flatCoordinates[offset];
        y2 = flatCoordinates[offset + 1];
        segmentM += segmentLength;
        segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    do {
        advance();
    } while (offset < end - stride && segmentM + segmentLength < startM);
    var interpolate = segmentLength === 0 ? 0 : (startM - segmentM) / segmentLength;
    var beginX = (0,math.t7)(x1, x2, interpolate);
    var beginY = (0,math.t7)(y1, y2, interpolate);
    var startOffset = offset - stride;
    var startLength = segmentM;
    var endM = startM + scale * measureAndCacheTextWidth(font, text, cache);
    while (offset < end - stride && segmentM + segmentLength < endM) {
        advance();
    }
    interpolate = segmentLength === 0 ? 0 : (endM - segmentM) / segmentLength;
    var endX = (0,math.t7)(x1, x2, interpolate);
    var endY = (0,math.t7)(y1, y2, interpolate);
    var reverse;
    if (rotation) {
        var flat = [beginX, beginY, endX, endY];
        (0,flat_transform.U1)(flat, 0, 4, 2, rotation, flat, flat);
        reverse = flat[0] > flat[2];
    }
    else {
        reverse = beginX > endX;
    }
    var PI = Math.PI;
    var result = [];
    var singleSegment = startOffset + stride === offset;
    offset = startOffset;
    segmentLength = 0;
    segmentM = startLength;
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    var previousAngle;
    if (singleSegment) {
        advance();
        previousAngle = Math.atan2(y2 - y1, x2 - x1);
        if (reverse) {
            previousAngle += previousAngle > 0 ? -PI : PI;
        }
        var x = (endX + beginX) / 2;
        var y = (endY + beginY) / 2;
        result[0] = [x, y, (endM - startM) / 2, previousAngle, text];
        return result;
    }
    for (var i = 0, ii = text.length; i < ii;) {
        advance();
        var angle = Math.atan2(y2 - y1, x2 - x1);
        if (reverse) {
            angle += angle > 0 ? -PI : PI;
        }
        if (previousAngle !== undefined) {
            var delta = angle - previousAngle;
            delta += delta > PI ? -2 * PI : delta < -PI ? 2 * PI : 0;
            if (Math.abs(delta) > maxAngle) {
                return null;
            }
        }
        previousAngle = angle;
        var iStart = i;
        var charLength = 0;
        for (; i < ii; ++i) {
            var index = reverse ? ii - i - 1 : i;
            var len = scale * measureAndCacheTextWidth(font, text[index], cache);
            if (offset + stride < end &&
                segmentM + segmentLength < startM + charLength + len / 2) {
                break;
            }
            charLength += len;
        }
        if (i === iStart) {
            continue;
        }
        var chars = reverse
            ? text.substring(ii - iStart, ii - i)
            : text.substring(iStart, i);
        interpolate =
            segmentLength === 0
                ? 0
                : (startM + charLength / 2 - segmentM) / segmentLength;
        var x = (0,math.t7)(x1, x2, interpolate);
        var y = (0,math.t7)(y1, y2, interpolate);
        result.push([x, y, charLength / 2, angle, chars]);
        startM += charLength;
    }
    return result;
}
var flat_length = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/flat/length.js");
;










var tmpExtent = (0,ol_extent.lJ)();
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
function getDeclutterBox(replayImageOrLabelArgs) {
    return replayImageOrLabelArgs[3].declutterBox;
}
var rtlRegEx = new RegExp(
'[' +
    String.fromCharCode(0x00591) + '-' + String.fromCharCode(0x008ff) +
    String.fromCharCode(0x0fb1d) + '-' + String.fromCharCode(0x0fdff) +
    String.fromCharCode(0x0fe70) + '-' + String.fromCharCode(0x0fefc) +
    String.fromCharCode(0x10800) + '-' + String.fromCharCode(0x10fff) +
    String.fromCharCode(0x1e800) + '-' + String.fromCharCode(0x1efff) +
    ']'
);
function horizontalTextAlign(text, align) {
    if ((align === 'start' || align === 'end') && !rtlRegEx.test(text)) {
        align = align === 'start' ? 'left' : 'right';
    }
    return TEXT_ALIGN[align];
}
function createTextChunks(acc, line, i) {
    if (i > 0) {
        acc.push('\n', '');
    }
    acc.push(line, '');
    return acc;
}
var Executor =  (function () {
    function Executor(resolution, pixelRatio, overlaps, instructions) {
        this.overlaps = overlaps;
        this.pixelRatio = pixelRatio;
        this.resolution = resolution;
        this.alignFill_;
        this.instructions = instructions.instructions;
        this.coordinates = instructions.coordinates;
        this.coordinateCache_ = {};
        this.renderedTransform_ = (0,ol_transform.Ue)();
        this.hitDetectionInstructions = instructions.hitDetectionInstructions;
        this.pixelCoordinates_ = null;
        this.viewRotation_ = 0;
        this.fillStates = instructions.fillStates || {};
        this.strokeStates = instructions.strokeStates || {};
        this.textStates = instructions.textStates || {};
        this.widths_ = {};
        this.labels_ = {};
    }
    Executor.prototype.createLabel = function (text, textKey, fillKey, strokeKey) {
        var key = text + textKey + fillKey + strokeKey;
        if (this.labels_[key]) {
            return this.labels_[key];
        }
        var strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
        var fillState = fillKey ? this.fillStates[fillKey] : null;
        var textState = this.textStates[textKey];
        var pixelRatio = this.pixelRatio;
        var scale = [
            textState.scale[0] * pixelRatio,
            textState.scale[1] * pixelRatio,
        ];
        var textIsArray = Array.isArray(text);
        var align = horizontalTextAlign(textIsArray ? text[0] : text, textState.textAlign || defaultTextAlign);
        var strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
        var chunks = textIsArray
            ? text
            : text.split('\n').reduce(createTextChunks, []);
        var _a = getTextDimensions(textState, chunks), width = _a.width, height = _a.height, widths = _a.widths, heights = _a.heights, lineWidths = _a.lineWidths;
        var renderWidth = width + strokeWidth;
        var contextInstructions = [];
        var w = (renderWidth + 2) * scale[0];
        var h = (height + strokeWidth) * scale[1];
        var label = {
            width: w < 0 ? Math.floor(w) : Math.ceil(w),
            height: h < 0 ? Math.floor(h) : Math.ceil(h),
            contextInstructions: contextInstructions,
        };
        if (scale[0] != 1 || scale[1] != 1) {
            contextInstructions.push('scale', scale);
        }
        if (strokeKey) {
            contextInstructions.push('strokeStyle', strokeState.strokeStyle);
            contextInstructions.push('lineWidth', strokeWidth);
            contextInstructions.push('lineCap', strokeState.lineCap);
            contextInstructions.push('lineJoin', strokeState.lineJoin);
            contextInstructions.push('miterLimit', strokeState.miterLimit);
            var Context = has.Id ? OffscreenCanvasRenderingContext2D : CanvasRenderingContext2D;
            if (Context.prototype.setLineDash) {
                contextInstructions.push('setLineDash', [strokeState.lineDash]);
                contextInstructions.push('lineDashOffset', strokeState.lineDashOffset);
            }
        }
        if (fillKey) {
            contextInstructions.push('fillStyle', fillState.fillStyle);
        }
        contextInstructions.push('textBaseline', 'middle');
        contextInstructions.push('textAlign', 'center');
        var leftRight = 0.5 - align;
        var x = align * renderWidth + leftRight * strokeWidth;
        var strokeInstructions = [];
        var fillInstructions = [];
        var lineHeight = 0;
        var lineOffset = 0;
        var widthHeightIndex = 0;
        var lineWidthIndex = 0;
        var previousFont;
        for (var i = 0, ii = chunks.length; i < ii; i += 2) {
            var text_1 = chunks[i];
            if (text_1 === '\n') {
                lineOffset += lineHeight;
                lineHeight = 0;
                x = align * renderWidth + leftRight * strokeWidth;
                ++lineWidthIndex;
                continue;
            }
            var font = chunks[i + 1] || textState.font;
            if (font !== previousFont) {
                if (strokeKey) {
                    strokeInstructions.push('font', font);
                }
                if (fillKey) {
                    fillInstructions.push('font', font);
                }
                previousFont = font;
            }
            lineHeight = Math.max(lineHeight, heights[widthHeightIndex]);
            var fillStrokeArgs = [
                text_1,
                x +
                    leftRight * widths[widthHeightIndex] +
                    align * (widths[widthHeightIndex] - lineWidths[lineWidthIndex]),
                0.5 * (strokeWidth + lineHeight) + lineOffset,
            ];
            x += widths[widthHeightIndex];
            if (strokeKey) {
                strokeInstructions.push('strokeText', fillStrokeArgs);
            }
            if (fillKey) {
                fillInstructions.push('fillText', fillStrokeArgs);
            }
            ++widthHeightIndex;
        }
        Array.prototype.push.apply(contextInstructions, strokeInstructions);
        Array.prototype.push.apply(contextInstructions, fillInstructions);
        this.labels_[key] = label;
        return label;
    };
    Executor.prototype.replayTextBackground_ = function (context, p1, p2, p3, p4, fillInstruction, strokeInstruction) {
        context.beginPath();
        context.moveTo.apply(context, p1);
        context.lineTo.apply(context, p2);
        context.lineTo.apply(context, p3);
        context.lineTo.apply(context, p4);
        context.lineTo.apply(context, p1);
        if (fillInstruction) {
            this.alignFill_ =  (fillInstruction[2]);
            this.fill_(context);
        }
        if (strokeInstruction) {
            this.setStrokeStyle_(context, 
 (strokeInstruction));
            context.stroke();
        }
    };
    Executor.prototype.calculateImageOrLabelDimensions_ = function (sheetWidth, sheetHeight, centerX, centerY, width, height, anchorX, anchorY, originX, originY, rotation, scale, snapToPixel, padding, fillStroke, feature) {
        anchorX *= scale[0];
        anchorY *= scale[1];
        var x = centerX - anchorX;
        var y = centerY - anchorY;
        var w = width + originX > sheetWidth ? sheetWidth - originX : width;
        var h = height + originY > sheetHeight ? sheetHeight - originY : height;
        var boxW = padding[3] + w * scale[0] + padding[1];
        var boxH = padding[0] + h * scale[1] + padding[2];
        var boxX = x - padding[3];
        var boxY = y - padding[0];
        if (fillStroke || rotation !== 0) {
            p1[0] = boxX;
            p4[0] = boxX;
            p1[1] = boxY;
            p2[1] = boxY;
            p2[0] = boxX + boxW;
            p3[0] = p2[0];
            p3[1] = boxY + boxH;
            p4[1] = p3[1];
        }
        var transform;
        if (rotation !== 0) {
            transform = (0,ol_transform.qC)((0,ol_transform.Ue)(), centerX, centerY, 1, 1, rotation, -centerX, -centerY);
            (0,ol_transform.nn)(transform, p1);
            (0,ol_transform.nn)(transform, p2);
            (0,ol_transform.nn)(transform, p3);
            (0,ol_transform.nn)(transform, p4);
            (0,ol_extent.T9)(Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1]), tmpExtent);
        }
        else {
            (0,ol_extent.T9)(Math.min(boxX, boxX + boxW), Math.min(boxY, boxY + boxH), Math.max(boxX, boxX + boxW), Math.max(boxY, boxY + boxH), tmpExtent);
        }
        if (snapToPixel) {
            x = Math.round(x);
            y = Math.round(y);
        }
        return {
            drawImageX: x,
            drawImageY: y,
            drawImageW: w,
            drawImageH: h,
            originX: originX,
            originY: originY,
            declutterBox: {
                minX: tmpExtent[0],
                minY: tmpExtent[1],
                maxX: tmpExtent[2],
                maxY: tmpExtent[3],
                value: feature,
            },
            canvasTransform: transform,
            scale: scale,
        };
    };
    Executor.prototype.replayImageOrLabel_ = function (context, contextScale, imageOrLabel, dimensions, opacity, fillInstruction, strokeInstruction) {
        var fillStroke = !!(fillInstruction || strokeInstruction);
        var box = dimensions.declutterBox;
        var canvas = context.canvas;
        var strokePadding = strokeInstruction
            ? (strokeInstruction[2] * dimensions.scale[0]) / 2
            : 0;
        var intersects = box.minX - strokePadding <= canvas.width / contextScale &&
            box.maxX + strokePadding >= 0 &&
            box.minY - strokePadding <= canvas.height / contextScale &&
            box.maxY + strokePadding >= 0;
        if (intersects) {
            if (fillStroke) {
                this.replayTextBackground_(context, p1, p2, p3, p4, 
 (fillInstruction), 
 (strokeInstruction));
            }
            drawImageOrLabel(context, dimensions.canvasTransform, opacity, imageOrLabel, dimensions.originX, dimensions.originY, dimensions.drawImageW, dimensions.drawImageH, dimensions.drawImageX, dimensions.drawImageY, dimensions.scale);
        }
        return true;
    };
    Executor.prototype.fill_ = function (context) {
        if (this.alignFill_) {
            var origin_1 = (0,ol_transform.nn)(this.renderedTransform_, [0, 0]);
            var repeatSize = 512 * this.pixelRatio;
            context.save();
            context.translate(origin_1[0] % repeatSize, origin_1[1] % repeatSize);
            context.rotate(this.viewRotation_);
        }
        context.fill();
        if (this.alignFill_) {
            context.restore();
        }
    };
    Executor.prototype.setStrokeStyle_ = function (context, instruction) {
        context['strokeStyle'] =
 (instruction[1]);
        context.lineWidth =  (instruction[2]);
        context.lineCap =  (instruction[3]);
        context.lineJoin =  (instruction[4]);
        context.miterLimit =  (instruction[5]);
        if (context.setLineDash) {
            context.lineDashOffset =  (instruction[7]);
            context.setLineDash( (instruction[6]));
        }
    };
    Executor.prototype.drawLabelWithPointPlacement_ = function (text, textKey, strokeKey, fillKey) {
        var textState = this.textStates[textKey];
        var label = this.createLabel(text, textKey, fillKey, strokeKey);
        var strokeState = this.strokeStates[strokeKey];
        var pixelRatio = this.pixelRatio;
        var align = horizontalTextAlign(Array.isArray(text) ? text[0] : text, textState.textAlign || defaultTextAlign);
        var baseline = TEXT_ALIGN[textState.textBaseline || defaultTextBaseline];
        var strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0;
        var width = label.width / pixelRatio - 2 * textState.scale[0];
        var anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
        var anchorY = (baseline * label.height) / pixelRatio +
            2 * (0.5 - baseline) * strokeWidth;
        return {
            label: label,
            anchorX: anchorX,
            anchorY: anchorY,
        };
    };
    Executor.prototype.execute_ = function (context, contextScale, transform, instructions, snapToPixel, opt_featureCallback, opt_hitExtent, opt_declutterTree) {
        var pixelCoordinates;
        if (this.pixelCoordinates_ && (0,array.fS)(transform, this.renderedTransform_)) {
            pixelCoordinates = this.pixelCoordinates_;
        }
        else {
            if (!this.pixelCoordinates_) {
                this.pixelCoordinates_ = [];
            }
            pixelCoordinates = (0,flat_transform.vT)(this.coordinates, 0, this.coordinates.length, 2, transform, this.pixelCoordinates_);
            (0,ol_transform.lk)(this.renderedTransform_, transform);
        }
        var i = 0; 
        var ii = instructions.length; 
        var d = 0; 
        var dd; 
        var anchorX, anchorY, prevX, prevY, roundX, roundY, image, text, textKey, strokeKey, fillKey;
        var pendingFill = 0;
        var pendingStroke = 0;
        var lastFillInstruction = null;
        var lastStrokeInstruction = null;
        var coordinateCache = this.coordinateCache_;
        var viewRotation = this.viewRotation_;
        var viewRotationFromTransform = Math.round(Math.atan2(-transform[1], transform[0]) * 1e12) / 1e12;
        var state =  ({
            context: context,
            pixelRatio: this.pixelRatio,
            resolution: this.resolution,
            rotation: viewRotation,
        });
        var batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
        var  feature;
        var x, y, currentGeometry;
        while (i < ii) {
            var instruction = instructions[i];
            var type =  (instruction[0]);
            switch (type) {
                case canvas_Instruction.BEGIN_GEOMETRY:
                    feature =  (instruction[1]);
                    currentGeometry = instruction[3];
                    if (!feature.getGeometry()) {
                        i =  (instruction[2]);
                    }
                    else if (opt_hitExtent !== undefined &&
                        !(0,ol_extent.kK)(opt_hitExtent, currentGeometry.getExtent())) {
                        i =  (instruction[2]) + 1;
                    }
                    else {
                        ++i;
                    }
                    break;
                case canvas_Instruction.BEGIN_PATH:
                    if (pendingFill > batchSize) {
                        this.fill_(context);
                        pendingFill = 0;
                    }
                    if (pendingStroke > batchSize) {
                        context.stroke();
                        pendingStroke = 0;
                    }
                    if (!pendingFill && !pendingStroke) {
                        context.beginPath();
                        prevX = NaN;
                        prevY = NaN;
                    }
                    ++i;
                    break;
                case canvas_Instruction.CIRCLE:
                    d =  (instruction[1]);
                    var x1 = pixelCoordinates[d];
                    var y1 = pixelCoordinates[d + 1];
                    var x2 = pixelCoordinates[d + 2];
                    var y2 = pixelCoordinates[d + 3];
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var r = Math.sqrt(dx * dx + dy * dy);
                    context.moveTo(x1 + r, y1);
                    context.arc(x1, y1, r, 0, 2 * Math.PI, true);
                    ++i;
                    break;
                case canvas_Instruction.CLOSE_PATH:
                    context.closePath();
                    ++i;
                    break;
                case canvas_Instruction.CUSTOM:
                    d =  (instruction[1]);
                    dd = instruction[2];
                    var geometry = 
 (instruction[3]);
                    var renderer = instruction[4];
                    var fn = instruction.length == 6 ? instruction[5] : undefined;
                    state.geometry = geometry;
                    state.feature = feature;
                    if (!(i in coordinateCache)) {
                        coordinateCache[i] = [];
                    }
                    var coords = coordinateCache[i];
                    if (fn) {
                        fn(pixelCoordinates, d, dd, 2, coords);
                    }
                    else {
                        coords[0] = pixelCoordinates[d];
                        coords[1] = pixelCoordinates[d + 1];
                        coords.length = 2;
                    }
                    renderer(coords, state);
                    ++i;
                    break;
                case canvas_Instruction.DRAW_IMAGE:
                    d =  (instruction[1]);
                    dd =  (instruction[2]);
                    image =
 (instruction[3]);
                    anchorX =  (instruction[4]);
                    anchorY =  (instruction[5]);
                    var height =  (instruction[6]);
                    var opacity =  (instruction[7]);
                    var originX =  (instruction[8]);
                    var originY =  (instruction[9]);
                    var rotateWithView =  (instruction[10]);
                    var rotation =  (instruction[11]);
                    var scale =  (instruction[12]);
                    var width =  (instruction[13]);
                    var declutterImageWithText = 
 (instruction[14]);
                    if (!image && instruction.length >= 19) {
                        text =  (instruction[18]);
                        textKey =  (instruction[19]);
                        strokeKey =  (instruction[20]);
                        fillKey =  (instruction[21]);
                        var labelWithAnchor = this.drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey);
                        image = labelWithAnchor.label;
                        instruction[3] = image;
                        var textOffsetX =  (instruction[22]);
                        anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
                        instruction[4] = anchorX;
                        var textOffsetY =  (instruction[23]);
                        anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
                        instruction[5] = anchorY;
                        height = image.height;
                        instruction[6] = height;
                        width = image.width;
                        instruction[13] = width;
                    }
                    var geometryWidths = void 0;
                    if (instruction.length > 24) {
                        geometryWidths =  (instruction[24]);
                    }
                    var padding = void 0, backgroundFill = void 0, backgroundStroke = void 0;
                    if (instruction.length > 16) {
                        padding =  (instruction[15]);
                        backgroundFill =  (instruction[16]);
                        backgroundStroke =  (instruction[17]);
                    }
                    else {
                        padding = defaultPadding;
                        backgroundFill = false;
                        backgroundStroke = false;
                    }
                    if (rotateWithView && viewRotationFromTransform) {
                        rotation += viewRotation;
                    }
                    else if (!rotateWithView && !viewRotationFromTransform) {
                        rotation -= viewRotation;
                    }
                    var widthIndex = 0;
                    for (; d < dd; d += 2) {
                        if (geometryWidths &&
                            geometryWidths[widthIndex++] < width / this.pixelRatio) {
                            continue;
                        }
                        var dimensions = this.calculateImageOrLabelDimensions_(image.width, image.height, pixelCoordinates[d], pixelCoordinates[d + 1], width, height, anchorX, anchorY, originX, originY, rotation, scale, snapToPixel, padding, backgroundFill || backgroundStroke, feature);
                        var args = [
                            context,
                            contextScale,
                            image,
                            dimensions,
                            opacity,
                            backgroundFill
                                ?  (lastFillInstruction)
                                : null,
                            backgroundStroke
                                ?  (lastStrokeInstruction)
                                : null,
                        ];
                        var imageArgs = void 0;
                        var imageDeclutterBox = void 0;
                        if (opt_declutterTree && declutterImageWithText) {
                            var index = dd - d;
                            if (!declutterImageWithText[index]) {
                                declutterImageWithText[index] = args;
                                continue;
                            }
                            imageArgs = declutterImageWithText[index];
                            delete declutterImageWithText[index];
                            imageDeclutterBox = getDeclutterBox(imageArgs);
                            if (opt_declutterTree.collides(imageDeclutterBox)) {
                                continue;
                            }
                        }
                        if (opt_declutterTree &&
                            opt_declutterTree.collides(dimensions.declutterBox)) {
                            continue;
                        }
                        if (imageArgs) {
                            if (opt_declutterTree) {
                                opt_declutterTree.insert(imageDeclutterBox);
                            }
                            this.replayImageOrLabel_.apply(this, imageArgs);
                        }
                        if (opt_declutterTree) {
                            opt_declutterTree.insert(dimensions.declutterBox);
                        }
                        this.replayImageOrLabel_.apply(this, args);
                    }
                    ++i;
                    break;
                case canvas_Instruction.DRAW_CHARS:
                    var begin =  (instruction[1]);
                    var end =  (instruction[2]);
                    var baseline =  (instruction[3]);
                    var overflow =  (instruction[4]);
                    fillKey =  (instruction[5]);
                    var maxAngle =  (instruction[6]);
                    var measurePixelRatio =  (instruction[7]);
                    var offsetY =  (instruction[8]);
                    strokeKey =  (instruction[9]);
                    var strokeWidth =  (instruction[10]);
                    text =  (instruction[11]);
                    textKey =  (instruction[12]);
                    var pixelRatioScale = [
 (instruction[13]),
 (instruction[13]),
                    ];
                    var textState = this.textStates[textKey];
                    var font = textState.font;
                    var textScale = [
                        textState.scale[0] * measurePixelRatio,
                        textState.scale[1] * measurePixelRatio,
                    ];
                    var cachedWidths = void 0;
                    if (font in this.widths_) {
                        cachedWidths = this.widths_[font];
                    }
                    else {
                        cachedWidths = {};
                        this.widths_[font] = cachedWidths;
                    }
                    var pathLength = (0,flat_length.W)(pixelCoordinates, begin, end, 2);
                    var textLength = Math.abs(textScale[0]) *
                        measureAndCacheTextWidth(font, text, cachedWidths);
                    if (overflow || textLength <= pathLength) {
                        var textAlign = this.textStates[textKey].textAlign;
                        var startM = (pathLength - textLength) * TEXT_ALIGN[textAlign];
                        var parts = drawTextOnPath(pixelCoordinates, begin, end, 2, text, startM, maxAngle, Math.abs(textScale[0]), measureAndCacheTextWidth, font, cachedWidths, viewRotationFromTransform ? 0 : this.viewRotation_);
                        drawChars: if (parts) {
                            var replayImageOrLabelArgs = [];
                            var c = void 0, cc = void 0, chars = void 0, label = void 0, part = void 0;
                            if (strokeKey) {
                                for (c = 0, cc = parts.length; c < cc; ++c) {
                                    part = parts[c]; 
                                    chars =  (part[4]);
                                    label = this.createLabel(chars, textKey, '', strokeKey);
                                    anchorX =
 (part[2]) +
                                            (textScale[0] < 0 ? -strokeWidth : strokeWidth);
                                    anchorY =
                                        baseline * label.height +
                                            ((0.5 - baseline) * 2 * strokeWidth * textScale[1]) /
                                                textScale[0] -
                                            offsetY;
                                    var dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, defaultPadding, false, feature);
                                    if (opt_declutterTree &&
                                        opt_declutterTree.collides(dimensions.declutterBox)) {
                                        break drawChars;
                                    }
                                    replayImageOrLabelArgs.push([
                                        context,
                                        contextScale,
                                        label,
                                        dimensions,
                                        1,
                                        null,
                                        null,
                                    ]);
                                }
                            }
                            if (fillKey) {
                                for (c = 0, cc = parts.length; c < cc; ++c) {
                                    part = parts[c]; 
                                    chars =  (part[4]);
                                    label = this.createLabel(chars, textKey, fillKey, '');
                                    anchorX =  (part[2]);
                                    anchorY = baseline * label.height - offsetY;
                                    var dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, defaultPadding, false, feature);
                                    if (opt_declutterTree &&
                                        opt_declutterTree.collides(dimensions.declutterBox)) {
                                        break drawChars;
                                    }
                                    replayImageOrLabelArgs.push([
                                        context,
                                        contextScale,
                                        label,
                                        dimensions,
                                        1,
                                        null,
                                        null,
                                    ]);
                                }
                            }
                            if (opt_declutterTree) {
                                opt_declutterTree.load(replayImageOrLabelArgs.map(getDeclutterBox));
                            }
                            for (var i_1 = 0, ii_1 = replayImageOrLabelArgs.length; i_1 < ii_1; ++i_1) {
                                this.replayImageOrLabel_.apply(this, replayImageOrLabelArgs[i_1]);
                            }
                        }
                    }
                    ++i;
                    break;
                case canvas_Instruction.END_GEOMETRY:
                    if (opt_featureCallback !== undefined) {
                        feature =  (instruction[1]);
                        var result = opt_featureCallback(feature, currentGeometry);
                        if (result) {
                            return result;
                        }
                    }
                    ++i;
                    break;
                case canvas_Instruction.FILL:
                    if (batchSize) {
                        pendingFill++;
                    }
                    else {
                        this.fill_(context);
                    }
                    ++i;
                    break;
                case canvas_Instruction.MOVE_TO_LINE_TO:
                    d =  (instruction[1]);
                    dd =  (instruction[2]);
                    x = pixelCoordinates[d];
                    y = pixelCoordinates[d + 1];
                    roundX = (x + 0.5) | 0;
                    roundY = (y + 0.5) | 0;
                    if (roundX !== prevX || roundY !== prevY) {
                        context.moveTo(x, y);
                        prevX = roundX;
                        prevY = roundY;
                    }
                    for (d += 2; d < dd; d += 2) {
                        x = pixelCoordinates[d];
                        y = pixelCoordinates[d + 1];
                        roundX = (x + 0.5) | 0;
                        roundY = (y + 0.5) | 0;
                        if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
                            context.lineTo(x, y);
                            prevX = roundX;
                            prevY = roundY;
                        }
                    }
                    ++i;
                    break;
                case canvas_Instruction.SET_FILL_STYLE:
                    lastFillInstruction = instruction;
                    this.alignFill_ = instruction[2];
                    if (pendingFill) {
                        this.fill_(context);
                        pendingFill = 0;
                        if (pendingStroke) {
                            context.stroke();
                            pendingStroke = 0;
                        }
                    }
                    context.fillStyle =
 (instruction[1]);
                    ++i;
                    break;
                case canvas_Instruction.SET_STROKE_STYLE:
                    lastStrokeInstruction = instruction;
                    if (pendingStroke) {
                        context.stroke();
                        pendingStroke = 0;
                    }
                    this.setStrokeStyle_(context,  (instruction));
                    ++i;
                    break;
                case canvas_Instruction.STROKE:
                    if (batchSize) {
                        pendingStroke++;
                    }
                    else {
                        context.stroke();
                    }
                    ++i;
                    break;
                default:
                    ++i; 
                    break;
            }
        }
        if (pendingFill) {
            this.fill_(context);
        }
        if (pendingStroke) {
            context.stroke();
        }
        return undefined;
    };
    Executor.prototype.execute = function (context, contextScale, transform, viewRotation, snapToPixel, opt_declutterTree) {
        this.viewRotation_ = viewRotation;
        this.execute_(context, contextScale, transform, this.instructions, snapToPixel, undefined, undefined, opt_declutterTree);
    };
    Executor.prototype.executeHitDetection = function (context, transform, viewRotation, opt_featureCallback, opt_hitExtent) {
        this.viewRotation_ = viewRotation;
        return this.execute_(context, 1, transform, this.hitDetectionInstructions, true, opt_featureCallback, opt_hitExtent);
    };
    return Executor;
}());
 const canvas_Executor = (Executor);
;








var ORDER = [
    BuilderType.POLYGON,
    BuilderType.CIRCLE,
    BuilderType.LINE_STRING,
    BuilderType.IMAGE,
    BuilderType.TEXT,
    BuilderType.DEFAULT,
];
var ExecutorGroup =  (function () {
    function ExecutorGroup(maxExtent, resolution, pixelRatio, overlaps, allInstructions, opt_renderBuffer) {
        this.maxExtent_ = maxExtent;
        this.overlaps_ = overlaps;
        this.pixelRatio_ = pixelRatio;
        this.resolution_ = resolution;
        this.renderBuffer_ = opt_renderBuffer;
        this.executorsByZIndex_ = {};
        this.hitDetectionContext_ = null;
        this.hitDetectionTransform_ = (0,ol_transform.Ue)();
        this.createExecutors_(allInstructions);
    }
    ExecutorGroup.prototype.clip = function (context, transform) {
        var flatClipCoords = this.getClipCoords(transform);
        context.beginPath();
        context.moveTo(flatClipCoords[0], flatClipCoords[1]);
        context.lineTo(flatClipCoords[2], flatClipCoords[3]);
        context.lineTo(flatClipCoords[4], flatClipCoords[5]);
        context.lineTo(flatClipCoords[6], flatClipCoords[7]);
        context.clip();
    };
    ExecutorGroup.prototype.createExecutors_ = function (allInstructions) {
        for (var zIndex in allInstructions) {
            var executors = this.executorsByZIndex_[zIndex];
            if (executors === undefined) {
                executors = {};
                this.executorsByZIndex_[zIndex] = executors;
            }
            var instructionByZindex = allInstructions[zIndex];
            for (var builderType in instructionByZindex) {
                var instructions = instructionByZindex[builderType];
                executors[builderType] = new canvas_Executor(this.resolution_, this.pixelRatio_, this.overlaps_, instructions);
            }
        }
    };
    ExecutorGroup.prototype.hasExecutors = function (executors) {
        for (var zIndex in this.executorsByZIndex_) {
            var candidates = this.executorsByZIndex_[zIndex];
            for (var i = 0, ii = executors.length; i < ii; ++i) {
                if (executors[i] in candidates) {
                    return true;
                }
            }
        }
        return false;
    };
    ExecutorGroup.prototype.forEachFeatureAtCoordinate = function (coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
        hitTolerance = Math.round(hitTolerance);
        var contextSize = hitTolerance * 2 + 1;
        var transform = (0,ol_transform.qC)(this.hitDetectionTransform_, hitTolerance + 0.5, hitTolerance + 0.5, 1 / resolution, -1 / resolution, -rotation, -coordinate[0], -coordinate[1]);
        var newContext = !this.hitDetectionContext_;
        if (newContext) {
            this.hitDetectionContext_ = createCanvasContext2D(contextSize, contextSize);
        }
        var context = this.hitDetectionContext_;
        if (context.canvas.width !== contextSize ||
            context.canvas.height !== contextSize) {
            context.canvas.width = contextSize;
            context.canvas.height = contextSize;
        }
        else if (!newContext) {
            context.clearRect(0, 0, contextSize, contextSize);
        }
        var hitExtent;
        if (this.renderBuffer_ !== undefined) {
            hitExtent = (0,ol_extent.lJ)();
            (0,ol_extent.Wj)(hitExtent, coordinate);
            (0,ol_extent.f3)(hitExtent, resolution * (this.renderBuffer_ + hitTolerance), hitExtent);
        }
        var indexes = getPixelIndexArray(hitTolerance);
        var builderType;
        function featureCallback(feature, geometry) {
            var imageData = context.getImageData(0, 0, contextSize, contextSize).data;
            for (var i_1 = 0, ii = indexes.length; i_1 < ii; i_1++) {
                if (imageData[indexes[i_1]] > 0) {
                    if (!declutteredFeatures ||
                        (builderType !== BuilderType.IMAGE &&
                            builderType !== BuilderType.TEXT) ||
                        declutteredFeatures.indexOf(feature) !== -1) {
                        var idx = (indexes[i_1] - 3) / 4;
                        var x = hitTolerance - (idx % contextSize);
                        var y = hitTolerance - ((idx / contextSize) | 0);
                        var result_1 = callback(feature, geometry, x * x + y * y);
                        if (result_1) {
                            return result_1;
                        }
                    }
                    context.clearRect(0, 0, contextSize, contextSize);
                    break;
                }
            }
            return undefined;
        }
        var zs = Object.keys(this.executorsByZIndex_).map(Number);
        zs.sort(array.kK);
        var i, j, executors, executor, result;
        for (i = zs.length - 1; i >= 0; --i) {
            var zIndexKey = zs[i].toString();
            executors = this.executorsByZIndex_[zIndexKey];
            for (j = ORDER.length - 1; j >= 0; --j) {
                builderType = ORDER[j];
                executor = executors[builderType];
                if (executor !== undefined) {
                    result = executor.executeHitDetection(context, transform, rotation, featureCallback, hitExtent);
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return undefined;
    };
    ExecutorGroup.prototype.getClipCoords = function (transform) {
        var maxExtent = this.maxExtent_;
        if (!maxExtent) {
            return null;
        }
        var minX = maxExtent[0];
        var minY = maxExtent[1];
        var maxX = maxExtent[2];
        var maxY = maxExtent[3];
        var flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
        (0,flat_transform.vT)(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
        return flatClipCoords;
    };
    ExecutorGroup.prototype.isEmpty = function () {
        return (0,obj.xb)(this.executorsByZIndex_);
    };
    ExecutorGroup.prototype.execute = function (context, contextScale, transform, viewRotation, snapToPixel, opt_builderTypes, opt_declutterTree) {
        var zs = Object.keys(this.executorsByZIndex_).map(Number);
        zs.sort(array.kK);
        if (this.maxExtent_) {
            context.save();
            this.clip(context, transform);
        }
        var builderTypes = opt_builderTypes ? opt_builderTypes : ORDER;
        var i, ii, j, jj, replays, replay;
        if (opt_declutterTree) {
            zs.reverse();
        }
        for (i = 0, ii = zs.length; i < ii; ++i) {
            var zIndexKey = zs[i].toString();
            replays = this.executorsByZIndex_[zIndexKey];
            for (j = 0, jj = builderTypes.length; j < jj; ++j) {
                var builderType = builderTypes[j];
                replay = replays[builderType];
                if (replay !== undefined) {
                    replay.execute(context, contextScale, transform, viewRotation, snapToPixel, opt_declutterTree);
                }
            }
        }
        if (this.maxExtent_) {
            context.restore();
        }
    };
    return ExecutorGroup;
}());
var circlePixelIndexArrayCache = {};
function getPixelIndexArray(radius) {
    if (circlePixelIndexArrayCache[radius] !== undefined) {
        return circlePixelIndexArrayCache[radius];
    }
    var size = radius * 2 + 1;
    var maxDistanceSq = radius * radius;
    var distances = new Array(maxDistanceSq + 1);
    for (var i = 0; i <= radius; ++i) {
        for (var j = 0; j <= radius; ++j) {
            var distanceSq = i * i + j * j;
            if (distanceSq > maxDistanceSq) {
                break;
            }
            var distance = distances[distanceSq];
            if (!distance) {
                distance = [];
                distances[distanceSq] = distance;
            }
            distance.push(((radius + i) * size + (radius + j)) * 4 + 3);
            if (i > 0) {
                distance.push(((radius - i) * size + (radius + j)) * 4 + 3);
            }
            if (j > 0) {
                distance.push(((radius + i) * size + (radius - j)) * 4 + 3);
                if (i > 0) {
                    distance.push(((radius - i) * size + (radius - j)) * 4 + 3);
                }
            }
        }
    }
    var pixelIndex = [];
    for (var i = 0, ii = distances.length; i < ii; ++i) {
        if (distances[i]) {
            pixelIndex.push.apply(pixelIndex, distances[i]);
        }
    }
    circlePixelIndexArrayCache[radius] = pixelIndex;
    return pixelIndex;
}
 const canvas_ExecutorGroup = (ExecutorGroup);
var SimpleGeometry = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/geom/SimpleGeometry.js");
;
var Immediate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var CanvasImmediateRenderer =  (function (_super) {
    Immediate_extends(CanvasImmediateRenderer, _super);
    function CanvasImmediateRenderer(context, pixelRatio, extent, transform, viewRotation, opt_squaredTolerance, opt_userTransform) {
        var _this = _super.call(this) || this;
        _this.context_ = context;
        _this.pixelRatio_ = pixelRatio;
        _this.extent_ = extent;
        _this.transform_ = transform;
        _this.viewRotation_ = viewRotation;
        _this.squaredTolerance_ = opt_squaredTolerance;
        _this.userTransform_ = opt_userTransform;
        _this.contextFillState_ = null;
        _this.contextStrokeState_ = null;
        _this.contextTextState_ = null;
        _this.fillState_ = null;
        _this.strokeState_ = null;
        _this.image_ = null;
        _this.imageAnchorX_ = 0;
        _this.imageAnchorY_ = 0;
        _this.imageHeight_ = 0;
        _this.imageOpacity_ = 0;
        _this.imageOriginX_ = 0;
        _this.imageOriginY_ = 0;
        _this.imageRotateWithView_ = false;
        _this.imageRotation_ = 0;
        _this.imageScale_ = [0, 0];
        _this.imageWidth_ = 0;
        _this.text_ = '';
        _this.textOffsetX_ = 0;
        _this.textOffsetY_ = 0;
        _this.textRotateWithView_ = false;
        _this.textRotation_ = 0;
        _this.textScale_ = [0, 0];
        _this.textFillState_ = null;
        _this.textStrokeState_ = null;
        _this.textState_ = null;
        _this.pixelCoordinates_ = [];
        _this.tmpLocalTransform_ = (0,ol_transform.Ue)();
        return _this;
    }
    CanvasImmediateRenderer.prototype.drawImages_ = function (flatCoordinates, offset, end, stride) {
        if (!this.image_) {
            return;
        }
        var pixelCoordinates = (0,flat_transform.vT)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
        var context = this.context_;
        var localTransform = this.tmpLocalTransform_;
        var alpha = context.globalAlpha;
        if (this.imageOpacity_ != 1) {
            context.globalAlpha = alpha * this.imageOpacity_;
        }
        var rotation = this.imageRotation_;
        if (this.imageRotateWithView_) {
            rotation += this.viewRotation_;
        }
        for (var i = 0, ii = pixelCoordinates.length; i < ii; i += 2) {
            var x = pixelCoordinates[i] - this.imageAnchorX_;
            var y = pixelCoordinates[i + 1] - this.imageAnchorY_;
            if (rotation !== 0 ||
                this.imageScale_[0] != 1 ||
                this.imageScale_[1] != 1) {
                var centerX = x + this.imageAnchorX_;
                var centerY = y + this.imageAnchorY_;
                (0,ol_transform.qC)(localTransform, centerX, centerY, 1, 1, rotation, -centerX, -centerY);
                context.setTransform.apply(context, localTransform);
                context.translate(centerX, centerY);
                context.scale(this.imageScale_[0], this.imageScale_[1]);
                context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_);
                context.setTransform(1, 0, 0, 1, 0, 0);
            }
            else {
                context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, x, y, this.imageWidth_, this.imageHeight_);
            }
        }
        if (this.imageOpacity_ != 1) {
            context.globalAlpha = alpha;
        }
    };
    CanvasImmediateRenderer.prototype.drawText_ = function (flatCoordinates, offset, end, stride) {
        if (!this.textState_ || this.text_ === '') {
            return;
        }
        if (this.textFillState_) {
            this.setContextFillState_(this.textFillState_);
        }
        if (this.textStrokeState_) {
            this.setContextStrokeState_(this.textStrokeState_);
        }
        this.setContextTextState_(this.textState_);
        var pixelCoordinates = (0,flat_transform.vT)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
        var context = this.context_;
        var rotation = this.textRotation_;
        if (this.textRotateWithView_) {
            rotation += this.viewRotation_;
        }
        for (; offset < end; offset += stride) {
            var x = pixelCoordinates[offset] + this.textOffsetX_;
            var y = pixelCoordinates[offset + 1] + this.textOffsetY_;
            if (rotation !== 0 ||
                this.textScale_[0] != 1 ||
                this.textScale_[1] != 1) {
                var localTransform = (0,ol_transform.qC)(this.tmpLocalTransform_, x, y, 1, 1, rotation, -x, -y);
                context.setTransform.apply(context, localTransform);
                context.translate(x, y);
                context.scale(this.textScale_[0], this.textScale_[1]);
                if (this.textStrokeState_) {
                    context.strokeText(this.text_, 0, 0);
                }
                if (this.textFillState_) {
                    context.fillText(this.text_, 0, 0);
                }
                context.setTransform(1, 0, 0, 1, 0, 0);
            }
            else {
                if (this.textStrokeState_) {
                    context.strokeText(this.text_, x, y);
                }
                if (this.textFillState_) {
                    context.fillText(this.text_, x, y);
                }
            }
        }
    };
    CanvasImmediateRenderer.prototype.moveToLineTo_ = function (flatCoordinates, offset, end, stride, close) {
        var context = this.context_;
        var pixelCoordinates = (0,flat_transform.vT)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
        context.moveTo(pixelCoordinates[0], pixelCoordinates[1]);
        var length = pixelCoordinates.length;
        if (close) {
            length -= 2;
        }
        for (var i = 2; i < length; i += 2) {
            context.lineTo(pixelCoordinates[i], pixelCoordinates[i + 1]);
        }
        if (close) {
            context.closePath();
        }
        return end;
    };
    CanvasImmediateRenderer.prototype.drawRings_ = function (flatCoordinates, offset, ends, stride) {
        for (var i = 0, ii = ends.length; i < ii; ++i) {
            offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, true);
        }
        return offset;
    };
    CanvasImmediateRenderer.prototype.drawCircle = function (geometry) {
        if (!(0,ol_extent.kK)(this.extent_, geometry.getExtent())) {
            return;
        }
        if (this.fillState_ || this.strokeState_) {
            if (this.fillState_) {
                this.setContextFillState_(this.fillState_);
            }
            if (this.strokeState_) {
                this.setContextStrokeState_(this.strokeState_);
            }
            var pixelCoordinates = (0,SimpleGeometry.Kr)(geometry, this.transform_, this.pixelCoordinates_);
            var dx = pixelCoordinates[2] - pixelCoordinates[0];
            var dy = pixelCoordinates[3] - pixelCoordinates[1];
            var radius = Math.sqrt(dx * dx + dy * dy);
            var context = this.context_;
            context.beginPath();
            context.arc(pixelCoordinates[0], pixelCoordinates[1], radius, 0, 2 * Math.PI);
            if (this.fillState_) {
                context.fill();
            }
            if (this.strokeState_) {
                context.stroke();
            }
        }
        if (this.text_ !== '') {
            this.drawText_(geometry.getCenter(), 0, 2, 2);
        }
    };
    CanvasImmediateRenderer.prototype.setStyle = function (style) {
        this.setFillStrokeStyle(style.getFill(), style.getStroke());
        this.setImageStyle(style.getImage());
        this.setTextStyle(style.getText());
    };
    CanvasImmediateRenderer.prototype.setTransform = function (transform) {
        this.transform_ = transform;
    };
    CanvasImmediateRenderer.prototype.drawGeometry = function (geometry) {
        var type = geometry.getType();
        switch (type) {
            case geom_GeometryType.Z.POINT:
                this.drawPoint(
 (geometry));
                break;
            case geom_GeometryType.Z.LINE_STRING:
                this.drawLineString(
 (geometry));
                break;
            case geom_GeometryType.Z.POLYGON:
                this.drawPolygon(
 (geometry));
                break;
            case geom_GeometryType.Z.MULTI_POINT:
                this.drawMultiPoint(
 (geometry));
                break;
            case geom_GeometryType.Z.MULTI_LINE_STRING:
                this.drawMultiLineString(
 (geometry));
                break;
            case geom_GeometryType.Z.MULTI_POLYGON:
                this.drawMultiPolygon(
 (geometry));
                break;
            case geom_GeometryType.Z.GEOMETRY_COLLECTION:
                this.drawGeometryCollection(
 (geometry));
                break;
            case geom_GeometryType.Z.CIRCLE:
                this.drawCircle(
 (geometry));
                break;
            default:
        }
    };
    CanvasImmediateRenderer.prototype.drawFeature = function (feature, style) {
        var geometry = style.getGeometryFunction()(feature);
        if (!geometry || !(0,ol_extent.kK)(this.extent_, geometry.getExtent())) {
            return;
        }
        this.setStyle(style);
        this.drawGeometry(geometry);
    };
    CanvasImmediateRenderer.prototype.drawGeometryCollection = function (geometry) {
        var geometries = geometry.getGeometriesArray();
        for (var i = 0, ii = geometries.length; i < ii; ++i) {
            this.drawGeometry(geometries[i]);
        }
    };
    CanvasImmediateRenderer.prototype.drawPoint = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =  (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        var flatCoordinates = geometry.getFlatCoordinates();
        var stride = geometry.getStride();
        if (this.image_) {
            this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
        if (this.text_ !== '') {
            this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
    };
    CanvasImmediateRenderer.prototype.drawMultiPoint = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =  (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        var flatCoordinates = geometry.getFlatCoordinates();
        var stride = geometry.getStride();
        if (this.image_) {
            this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
        if (this.text_ !== '') {
            this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
        }
    };
    CanvasImmediateRenderer.prototype.drawLineString = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =  (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        if (!(0,ol_extent.kK)(this.extent_, geometry.getExtent())) {
            return;
        }
        if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var context = this.context_;
            var flatCoordinates = geometry.getFlatCoordinates();
            context.beginPath();
            this.moveToLineTo_(flatCoordinates, 0, flatCoordinates.length, geometry.getStride(), false);
            context.stroke();
        }
        if (this.text_ !== '') {
            var flatMidpoint = geometry.getFlatMidpoint();
            this.drawText_(flatMidpoint, 0, 2, 2);
        }
    };
    CanvasImmediateRenderer.prototype.drawMultiLineString = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =
 (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        var geometryExtent = geometry.getExtent();
        if (!(0,ol_extent.kK)(this.extent_, geometryExtent)) {
            return;
        }
        if (this.strokeState_) {
            this.setContextStrokeState_(this.strokeState_);
            var context = this.context_;
            var flatCoordinates = geometry.getFlatCoordinates();
            var offset = 0;
            var ends =  (geometry.getEnds());
            var stride = geometry.getStride();
            context.beginPath();
            for (var i = 0, ii = ends.length; i < ii; ++i) {
                offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, false);
            }
            context.stroke();
        }
        if (this.text_ !== '') {
            var flatMidpoints = geometry.getFlatMidpoints();
            this.drawText_(flatMidpoints, 0, flatMidpoints.length, 2);
        }
    };
    CanvasImmediateRenderer.prototype.drawPolygon = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =  (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        if (!(0,ol_extent.kK)(this.extent_, geometry.getExtent())) {
            return;
        }
        if (this.strokeState_ || this.fillState_) {
            if (this.fillState_) {
                this.setContextFillState_(this.fillState_);
            }
            if (this.strokeState_) {
                this.setContextStrokeState_(this.strokeState_);
            }
            var context = this.context_;
            context.beginPath();
            this.drawRings_(geometry.getOrientedFlatCoordinates(), 0, 
 (geometry.getEnds()), geometry.getStride());
            if (this.fillState_) {
                context.fill();
            }
            if (this.strokeState_) {
                context.stroke();
            }
        }
        if (this.text_ !== '') {
            var flatInteriorPoint = geometry.getFlatInteriorPoint();
            this.drawText_(flatInteriorPoint, 0, 2, 2);
        }
    };
    CanvasImmediateRenderer.prototype.drawMultiPolygon = function (geometry) {
        if (this.squaredTolerance_) {
            geometry =  (geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
        }
        if (!(0,ol_extent.kK)(this.extent_, geometry.getExtent())) {
            return;
        }
        if (this.strokeState_ || this.fillState_) {
            if (this.fillState_) {
                this.setContextFillState_(this.fillState_);
            }
            if (this.strokeState_) {
                this.setContextStrokeState_(this.strokeState_);
            }
            var context = this.context_;
            var flatCoordinates = geometry.getOrientedFlatCoordinates();
            var offset = 0;
            var endss = geometry.getEndss();
            var stride = geometry.getStride();
            context.beginPath();
            for (var i = 0, ii = endss.length; i < ii; ++i) {
                var ends = endss[i];
                offset = this.drawRings_(flatCoordinates, offset, ends, stride);
            }
            if (this.fillState_) {
                context.fill();
            }
            if (this.strokeState_) {
                context.stroke();
            }
        }
        if (this.text_ !== '') {
            var flatInteriorPoints = geometry.getFlatInteriorPoints();
            this.drawText_(flatInteriorPoints, 0, flatInteriorPoints.length, 2);
        }
    };
    CanvasImmediateRenderer.prototype.setContextFillState_ = function (fillState) {
        var context = this.context_;
        var contextFillState = this.contextFillState_;
        if (!contextFillState) {
            context.fillStyle = fillState.fillStyle;
            this.contextFillState_ = {
                fillStyle: fillState.fillStyle,
            };
        }
        else {
            if (contextFillState.fillStyle != fillState.fillStyle) {
                contextFillState.fillStyle = fillState.fillStyle;
                context.fillStyle = fillState.fillStyle;
            }
        }
    };
    CanvasImmediateRenderer.prototype.setContextStrokeState_ = function (strokeState) {
        var context = this.context_;
        var contextStrokeState = this.contextStrokeState_;
        if (!contextStrokeState) {
            context.lineCap = strokeState.lineCap;
            if (context.setLineDash) {
                context.setLineDash(strokeState.lineDash);
                context.lineDashOffset = strokeState.lineDashOffset;
            }
            context.lineJoin = strokeState.lineJoin;
            context.lineWidth = strokeState.lineWidth;
            context.miterLimit = strokeState.miterLimit;
            context.strokeStyle = strokeState.strokeStyle;
            this.contextStrokeState_ = {
                lineCap: strokeState.lineCap,
                lineDash: strokeState.lineDash,
                lineDashOffset: strokeState.lineDashOffset,
                lineJoin: strokeState.lineJoin,
                lineWidth: strokeState.lineWidth,
                miterLimit: strokeState.miterLimit,
                strokeStyle: strokeState.strokeStyle,
            };
        }
        else {
            if (contextStrokeState.lineCap != strokeState.lineCap) {
                contextStrokeState.lineCap = strokeState.lineCap;
                context.lineCap = strokeState.lineCap;
            }
            if (context.setLineDash) {
                if (!(0,array.fS)(contextStrokeState.lineDash, strokeState.lineDash)) {
                    context.setLineDash((contextStrokeState.lineDash = strokeState.lineDash));
                }
                if (contextStrokeState.lineDashOffset != strokeState.lineDashOffset) {
                    contextStrokeState.lineDashOffset = strokeState.lineDashOffset;
                    context.lineDashOffset = strokeState.lineDashOffset;
                }
            }
            if (contextStrokeState.lineJoin != strokeState.lineJoin) {
                contextStrokeState.lineJoin = strokeState.lineJoin;
                context.lineJoin = strokeState.lineJoin;
            }
            if (contextStrokeState.lineWidth != strokeState.lineWidth) {
                contextStrokeState.lineWidth = strokeState.lineWidth;
                context.lineWidth = strokeState.lineWidth;
            }
            if (contextStrokeState.miterLimit != strokeState.miterLimit) {
                contextStrokeState.miterLimit = strokeState.miterLimit;
                context.miterLimit = strokeState.miterLimit;
            }
            if (contextStrokeState.strokeStyle != strokeState.strokeStyle) {
                contextStrokeState.strokeStyle = strokeState.strokeStyle;
                context.strokeStyle = strokeState.strokeStyle;
            }
        }
    };
    CanvasImmediateRenderer.prototype.setContextTextState_ = function (textState) {
        var context = this.context_;
        var contextTextState = this.contextTextState_;
        var textAlign = textState.textAlign
            ? textState.textAlign
            : defaultTextAlign;
        if (!contextTextState) {
            context.font = textState.font;
            context.textAlign =  (textAlign);
            context.textBaseline =  (textState.textBaseline);
            this.contextTextState_ = {
                font: textState.font,
                textAlign: textAlign,
                textBaseline: textState.textBaseline,
            };
        }
        else {
            if (contextTextState.font != textState.font) {
                contextTextState.font = textState.font;
                context.font = textState.font;
            }
            if (contextTextState.textAlign != textAlign) {
                contextTextState.textAlign =  (textAlign);
                context.textAlign =  (textAlign);
            }
            if (contextTextState.textBaseline != textState.textBaseline) {
                contextTextState.textBaseline =  (textState.textBaseline);
                context.textBaseline =  (textState.textBaseline);
            }
        }
    };
    CanvasImmediateRenderer.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) {
        var _this = this;
        if (!fillStyle) {
            this.fillState_ = null;
        }
        else {
            var fillStyleColor = fillStyle.getColor();
            this.fillState_ = {
                fillStyle: asColorLike(fillStyleColor ? fillStyleColor : defaultFillStyle),
            };
        }
        if (!strokeStyle) {
            this.strokeState_ = null;
        }
        else {
            var strokeStyleColor = strokeStyle.getColor();
            var strokeStyleLineCap = strokeStyle.getLineCap();
            var strokeStyleLineDash = strokeStyle.getLineDash();
            var strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
            var strokeStyleLineJoin = strokeStyle.getLineJoin();
            var strokeStyleWidth = strokeStyle.getWidth();
            var strokeStyleMiterLimit = strokeStyle.getMiterLimit();
            var lineDash = strokeStyleLineDash
                ? strokeStyleLineDash
                : defaultLineDash;
            this.strokeState_ = {
                lineCap: strokeStyleLineCap !== undefined
                    ? strokeStyleLineCap
                    : defaultLineCap,
                lineDash: this.pixelRatio_ === 1
                    ? lineDash
                    : lineDash.map(function (n) { return n * _this.pixelRatio_; }),
                lineDashOffset: (strokeStyleLineDashOffset
                    ? strokeStyleLineDashOffset
                    : defaultLineDashOffset) * this.pixelRatio_,
                lineJoin: strokeStyleLineJoin !== undefined
                    ? strokeStyleLineJoin
                    : defaultLineJoin,
                lineWidth: (strokeStyleWidth !== undefined
                    ? strokeStyleWidth
                    : defaultLineWidth) * this.pixelRatio_,
                miterLimit: strokeStyleMiterLimit !== undefined
                    ? strokeStyleMiterLimit
                    : defaultMiterLimit,
                strokeStyle: asColorLike(strokeStyleColor ? strokeStyleColor : defaultStrokeStyle),
            };
        }
    };
    CanvasImmediateRenderer.prototype.setImageStyle = function (imageStyle) {
        var imageSize;
        if (!imageStyle || !(imageSize = imageStyle.getSize())) {
            this.image_ = null;
            return;
        }
        var imageAnchor = imageStyle.getAnchor();
        var imageOrigin = imageStyle.getOrigin();
        this.image_ = imageStyle.getImage(this.pixelRatio_);
        this.imageAnchorX_ = imageAnchor[0] * this.pixelRatio_;
        this.imageAnchorY_ = imageAnchor[1] * this.pixelRatio_;
        this.imageHeight_ = imageSize[1] * this.pixelRatio_;
        this.imageOpacity_ = imageStyle.getOpacity();
        this.imageOriginX_ = imageOrigin[0];
        this.imageOriginY_ = imageOrigin[1];
        this.imageRotateWithView_ = imageStyle.getRotateWithView();
        this.imageRotation_ = imageStyle.getRotation();
        this.imageScale_ = imageStyle.getScaleArray();
        this.imageWidth_ = imageSize[0] * this.pixelRatio_;
    };
    CanvasImmediateRenderer.prototype.setTextStyle = function (textStyle) {
        if (!textStyle) {
            this.text_ = '';
        }
        else {
            var textFillStyle = textStyle.getFill();
            if (!textFillStyle) {
                this.textFillState_ = null;
            }
            else {
                var textFillStyleColor = textFillStyle.getColor();
                this.textFillState_ = {
                    fillStyle: asColorLike(textFillStyleColor ? textFillStyleColor : defaultFillStyle),
                };
            }
            var textStrokeStyle = textStyle.getStroke();
            if (!textStrokeStyle) {
                this.textStrokeState_ = null;
            }
            else {
                var textStrokeStyleColor = textStrokeStyle.getColor();
                var textStrokeStyleLineCap = textStrokeStyle.getLineCap();
                var textStrokeStyleLineDash = textStrokeStyle.getLineDash();
                var textStrokeStyleLineDashOffset = textStrokeStyle.getLineDashOffset();
                var textStrokeStyleLineJoin = textStrokeStyle.getLineJoin();
                var textStrokeStyleWidth = textStrokeStyle.getWidth();
                var textStrokeStyleMiterLimit = textStrokeStyle.getMiterLimit();
                this.textStrokeState_ = {
                    lineCap: textStrokeStyleLineCap !== undefined
                        ? textStrokeStyleLineCap
                        : defaultLineCap,
                    lineDash: textStrokeStyleLineDash
                        ? textStrokeStyleLineDash
                        : defaultLineDash,
                    lineDashOffset: textStrokeStyleLineDashOffset
                        ? textStrokeStyleLineDashOffset
                        : defaultLineDashOffset,
                    lineJoin: textStrokeStyleLineJoin !== undefined
                        ? textStrokeStyleLineJoin
                        : defaultLineJoin,
                    lineWidth: textStrokeStyleWidth !== undefined
                        ? textStrokeStyleWidth
                        : defaultLineWidth,
                    miterLimit: textStrokeStyleMiterLimit !== undefined
                        ? textStrokeStyleMiterLimit
                        : defaultMiterLimit,
                    strokeStyle: asColorLike(textStrokeStyleColor ? textStrokeStyleColor : defaultStrokeStyle),
                };
            }
            var textFont = textStyle.getFont();
            var textOffsetX = textStyle.getOffsetX();
            var textOffsetY = textStyle.getOffsetY();
            var textRotateWithView = textStyle.getRotateWithView();
            var textRotation = textStyle.getRotation();
            var textScale = textStyle.getScaleArray();
            var textText = textStyle.getText();
            var textTextAlign = textStyle.getTextAlign();
            var textTextBaseline = textStyle.getTextBaseline();
            this.textState_ = {
                font: textFont !== undefined ? textFont : defaultFont,
                textAlign: textTextAlign !== undefined ? textTextAlign : defaultTextAlign,
                textBaseline: textTextBaseline !== undefined
                    ? textTextBaseline
                    : defaultTextBaseline,
            };
            this.text_ =
                textText !== undefined
                    ? Array.isArray(textText)
                        ? textText.reduce(function (acc, t, i) { return (acc += i % 2 ? ' ' : t); }, '')
                        : textText
                    : '';
            this.textOffsetX_ =
                textOffsetX !== undefined ? this.pixelRatio_ * textOffsetX : 0;
            this.textOffsetY_ =
                textOffsetY !== undefined ? this.pixelRatio_ * textOffsetY : 0;
            this.textRotateWithView_ =
                textRotateWithView !== undefined ? textRotateWithView : false;
            this.textRotation_ = textRotation !== undefined ? textRotation : 0;
            this.textScale_ = [
                this.pixelRatio_ * textScale[0],
                this.pixelRatio_ * textScale[1],
            ];
        }
    };
    return CanvasImmediateRenderer;
}(render_VectorContext));
 const Immediate = (CanvasImmediateRenderer);
;
 const IconAnchorUnits = ({
    FRACTION: 'fraction',
    PIXELS: 'pixels',
});
;
 const IconOrigin = ({
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
});
;
var ImageBase_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ImageBase =  (function (_super) {
    ImageBase_extends(ImageBase, _super);
    function ImageBase(extent, resolution, pixelRatio, state) {
        var _this = _super.call(this) || this;
        _this.extent = extent;
        _this.pixelRatio_ = pixelRatio;
        _this.resolution = resolution;
        _this.state = state;
        return _this;
    }
    ImageBase.prototype.changed = function () {
        this.dispatchEvent(EventType.Z.CHANGE);
    };
    ImageBase.prototype.getExtent = function () {
        return this.extent;
    };
    ImageBase.prototype.getImage = function () {
        return (0,util.O3)();
    };
    ImageBase.prototype.getPixelRatio = function () {
        return this.pixelRatio_;
    };
    ImageBase.prototype.getResolution = function () {
        return  (this.resolution);
    };
    ImageBase.prototype.getState = function () {
        return this.state;
    };
    ImageBase.prototype.load = function () {
        (0,util.O3)();
    };
    return ImageBase;
}(Target.Z));
 const ol_ImageBase = (ImageBase);
;
var Image_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ImageWrapper =  (function (_super) {
    Image_extends(ImageWrapper, _super);
    function ImageWrapper(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction) {
        var _this = _super.call(this, extent, resolution, pixelRatio, ImageState.IDLE) || this;
        _this.src_ = src;
        _this.image_ = new Image();
        if (crossOrigin !== null) {
            _this.image_.crossOrigin = crossOrigin;
        }
        _this.unlisten_ = null;
        _this.state = ImageState.IDLE;
        _this.imageLoadFunction_ = imageLoadFunction;
        return _this;
    }
    ImageWrapper.prototype.getImage = function () {
        return this.image_;
    };
    ImageWrapper.prototype.handleImageError_ = function () {
        this.state = ImageState.ERROR;
        this.unlistenImage_();
        this.changed();
    };
    ImageWrapper.prototype.handleImageLoad_ = function () {
        if (this.resolution === undefined) {
            this.resolution = (0,ol_extent.Cr)(this.extent) / this.image_.height;
        }
        this.state = ImageState.LOADED;
        this.unlistenImage_();
        this.changed();
    };
    ImageWrapper.prototype.load = function () {
        if (this.state == ImageState.IDLE || this.state == ImageState.ERROR) {
            this.state = ImageState.LOADING;
            this.changed();
            this.imageLoadFunction_(this, this.src_);
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    };
    ImageWrapper.prototype.setImage = function (image) {
        this.image_ = image;
        this.resolution = (0,ol_extent.Cr)(this.extent) / this.image_.height;
    };
    ImageWrapper.prototype.unlistenImage_ = function () {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    };
    return ImageWrapper;
}(ol_ImageBase));
function listenImage(image, loadHandler, errorHandler) {
    var img =  (image);
    var listening = true;
    var decoding = false;
    var loaded = false;
    var listenerKeys = [
        (0,events.Vx)(img, EventType.Z.LOAD, function () {
            loaded = true;
            if (!decoding) {
                loadHandler();
            }
        }),
    ];
    if (img.src && has.Tp) {
        decoding = true;
        img
            .decode()
            .then(function () {
            if (listening) {
                loadHandler();
            }
        })
            .catch(function (error) {
            if (listening) {
                if (loaded) {
                    loadHandler();
                }
                else {
                    errorHandler();
                }
            }
        });
    }
    else {
        listenerKeys.push((0,events.Vx)(img, EventType.Z.ERROR, errorHandler));
    }
    return function unlisten() {
        listening = false;
        listenerKeys.forEach(events.bN);
    };
}
 const ol_Image = (( null && (ImageWrapper)));
;
var IconImage_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var taintedTestContext = null;
var IconImage =  (function (_super) {
    IconImage_extends(IconImage, _super);
    function IconImage(image, src, size, crossOrigin, imageState, color) {
        var _this = _super.call(this) || this;
        _this.hitDetectionImage_ = null;
        _this.image_ = !image ? new Image() : image;
        if (crossOrigin !== null) {
 (_this.image_).crossOrigin = crossOrigin;
        }
        _this.canvas_ = {};
        _this.color_ = color;
        _this.unlisten_ = null;
        _this.imageState_ = imageState;
        _this.size_ = size;
        _this.src_ = src;
        _this.tainted_;
        return _this;
    }
    IconImage.prototype.isTainted_ = function () {
        if (this.tainted_ === undefined && this.imageState_ === ImageState.LOADED) {
            if (!taintedTestContext) {
                taintedTestContext = createCanvasContext2D(1, 1);
            }
            taintedTestContext.drawImage(this.image_, 0, 0);
            try {
                taintedTestContext.getImageData(0, 0, 1, 1);
                this.tainted_ = false;
            }
            catch (e) {
                taintedTestContext = null;
                this.tainted_ = true;
            }
        }
        return this.tainted_ === true;
    };
    IconImage.prototype.dispatchChangeEvent_ = function () {
        this.dispatchEvent(EventType.Z.CHANGE);
    };
    IconImage.prototype.handleImageError_ = function () {
        this.imageState_ = ImageState.ERROR;
        this.unlistenImage_();
        this.dispatchChangeEvent_();
    };
    IconImage.prototype.handleImageLoad_ = function () {
        this.imageState_ = ImageState.LOADED;
        if (this.size_) {
            this.image_.width = this.size_[0];
            this.image_.height = this.size_[1];
        }
        else {
            this.size_ = [this.image_.width, this.image_.height];
        }
        this.unlistenImage_();
        this.dispatchChangeEvent_();
    };
    IconImage.prototype.getImage = function (pixelRatio) {
        this.replaceColor_(pixelRatio);
        return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
    };
    IconImage.prototype.getPixelRatio = function (pixelRatio) {
        this.replaceColor_(pixelRatio);
        return this.canvas_[pixelRatio] ? pixelRatio : 1;
    };
    IconImage.prototype.getImageState = function () {
        return this.imageState_;
    };
    IconImage.prototype.getHitDetectionImage = function () {
        if (!this.hitDetectionImage_) {
            if (this.isTainted_()) {
                var width = this.size_[0];
                var height = this.size_[1];
                var context = createCanvasContext2D(width, height);
                context.fillRect(0, 0, width, height);
                this.hitDetectionImage_ = context.canvas;
            }
            else {
                this.hitDetectionImage_ = this.image_;
            }
        }
        return this.hitDetectionImage_;
    };
    IconImage.prototype.getSize = function () {
        return this.size_;
    };
    IconImage.prototype.getSrc = function () {
        return this.src_;
    };
    IconImage.prototype.load = function () {
        if (this.imageState_ == ImageState.IDLE) {
            this.imageState_ = ImageState.LOADING;
            try {
 (this.image_).src = this.src_;
            }
            catch (e) {
                this.handleImageError_();
            }
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    };
    IconImage.prototype.replaceColor_ = function (pixelRatio) {
        if (!this.color_ ||
            this.canvas_[pixelRatio] ||
            this.imageState_ !== ImageState.LOADED) {
            return;
        }
        var canvas = document.createElement('canvas');
        this.canvas_[pixelRatio] = canvas;
        canvas.width = Math.ceil(this.image_.width * pixelRatio);
        canvas.height = Math.ceil(this.image_.height * pixelRatio);
        var ctx = canvas.getContext('2d');
        ctx.scale(pixelRatio, pixelRatio);
        ctx.drawImage(this.image_, 0, 0);
        ctx.globalCompositeOperation = 'multiply';
        if (ctx.globalCompositeOperation === 'multiply' || this.isTainted_()) {
            ctx.fillStyle = asString(this.color_);
            ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
            ctx.globalCompositeOperation = 'destination-in';
            ctx.drawImage(this.image_, 0, 0);
        }
        else {
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imgData.data;
            var r = this.color_[0] / 255.0;
            var g = this.color_[1] / 255.0;
            var b = this.color_[2] / 255.0;
            var a = this.color_[3];
            for (var i = 0, ii = data.length; i < ii; i += 4) {
                data[i] *= r;
                data[i + 1] *= g;
                data[i + 2] *= b;
                data[i + 3] *= a;
            }
            ctx.putImageData(imgData, 0, 0);
        }
    };
    IconImage.prototype.unlistenImage_ = function () {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    };
    return IconImage;
}(Target.Z));
function get(image, src, size, crossOrigin, imageState, color) {
    var iconImage = shared.get(src, crossOrigin, color);
    if (!iconImage) {
        iconImage = new IconImage(image, src, size, crossOrigin, imageState, color);
        shared.set(src, crossOrigin, color, iconImage);
    }
    return iconImage;
}
 const style_IconImage = (( null && (IconImage)));
;
var Icon_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Icon =  (function (_super) {
    Icon_extends(Icon, _super);
    function Icon(opt_options) {
        var _this = this;
        var options = opt_options || {};
        var opacity = options.opacity !== undefined ? options.opacity : 1;
        var rotation = options.rotation !== undefined ? options.rotation : 0;
        var scale = options.scale !== undefined ? options.scale : 1;
        var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
        _this = _super.call(this, {
            opacity: opacity,
            rotation: rotation,
            scale: scale,
            displacement: options.displacement !== undefined ? options.displacement : [0, 0],
            rotateWithView: rotateWithView,
        }) || this;
        _this.anchor_ = options.anchor !== undefined ? options.anchor : [0.5, 0.5];
        _this.normalizedAnchor_ = null;
        _this.anchorOrigin_ =
            options.anchorOrigin !== undefined
                ? options.anchorOrigin
                : IconOrigin.TOP_LEFT;
        _this.anchorXUnits_ =
            options.anchorXUnits !== undefined
                ? options.anchorXUnits
                : IconAnchorUnits.FRACTION;
        _this.anchorYUnits_ =
            options.anchorYUnits !== undefined
                ? options.anchorYUnits
                : IconAnchorUnits.FRACTION;
        _this.crossOrigin_ =
            options.crossOrigin !== undefined ? options.crossOrigin : null;
        var image = options.img !== undefined ? options.img : null;
        _this.imgSize_ = options.imgSize;
        var src = options.src;
        (0,asserts.h)(!(src !== undefined && image), 4); 
        (0,asserts.h)(!image || (image && _this.imgSize_), 5); 
        if ((src === undefined || src.length === 0) && image) {
            src =  (image).src || (0,util.sq)(image);
        }
        (0,asserts.h)(src !== undefined && src.length > 0, 6); 
        var imageState = options.src !== undefined ? ImageState.IDLE : ImageState.LOADED;
        _this.color_ = options.color !== undefined ? asArray(options.color) : null;
        _this.iconImage_ = get(image, 
 (src), _this.imgSize_ !== undefined ? _this.imgSize_ : null, _this.crossOrigin_, imageState, _this.color_);
        _this.offset_ = options.offset !== undefined ? options.offset : [0, 0];
        _this.offsetOrigin_ =
            options.offsetOrigin !== undefined
                ? options.offsetOrigin
                : IconOrigin.TOP_LEFT;
        _this.origin_ = null;
        _this.size_ = options.size !== undefined ? options.size : null;
        return _this;
    }
    Icon.prototype.clone = function () {
        var scale = this.getScale();
        return new Icon({
            anchor: this.anchor_.slice(),
            anchorOrigin: this.anchorOrigin_,
            anchorXUnits: this.anchorXUnits_,
            anchorYUnits: this.anchorYUnits_,
            color: this.color_ && this.color_.slice
                ? this.color_.slice()
                : this.color_ || undefined,
            crossOrigin: this.crossOrigin_,
            imgSize: this.imgSize_,
            offset: this.offset_.slice(),
            offsetOrigin: this.offsetOrigin_,
            opacity: this.getOpacity(),
            rotateWithView: this.getRotateWithView(),
            rotation: this.getRotation(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            size: this.size_ !== null ? this.size_.slice() : undefined,
            src: this.getSrc(),
        });
    };
    Icon.prototype.getAnchor = function () {
        var anchor = this.normalizedAnchor_;
        if (!anchor) {
            anchor = this.anchor_;
            var size = this.getSize();
            if (this.anchorXUnits_ == IconAnchorUnits.FRACTION ||
                this.anchorYUnits_ == IconAnchorUnits.FRACTION) {
                if (!size) {
                    return null;
                }
                anchor = this.anchor_.slice();
                if (this.anchorXUnits_ == IconAnchorUnits.FRACTION) {
                    anchor[0] *= size[0];
                }
                if (this.anchorYUnits_ == IconAnchorUnits.FRACTION) {
                    anchor[1] *= size[1];
                }
            }
            if (this.anchorOrigin_ != IconOrigin.TOP_LEFT) {
                if (!size) {
                    return null;
                }
                if (anchor === this.anchor_) {
                    anchor = this.anchor_.slice();
                }
                if (this.anchorOrigin_ == IconOrigin.TOP_RIGHT ||
                    this.anchorOrigin_ == IconOrigin.BOTTOM_RIGHT) {
                    anchor[0] = -anchor[0] + size[0];
                }
                if (this.anchorOrigin_ == IconOrigin.BOTTOM_LEFT ||
                    this.anchorOrigin_ == IconOrigin.BOTTOM_RIGHT) {
                    anchor[1] = -anchor[1] + size[1];
                }
            }
            this.normalizedAnchor_ = anchor;
        }
        var displacement = this.getDisplacement();
        return [anchor[0] - displacement[0], anchor[1] + displacement[1]];
    };
    Icon.prototype.setAnchor = function (anchor) {
        this.anchor_ = anchor;
        this.normalizedAnchor_ = null;
    };
    Icon.prototype.getColor = function () {
        return this.color_;
    };
    Icon.prototype.getImage = function (pixelRatio) {
        return this.iconImage_.getImage(pixelRatio);
    };
    Icon.prototype.getPixelRatio = function (pixelRatio) {
        return this.iconImage_.getPixelRatio(pixelRatio);
    };
    Icon.prototype.getImageSize = function () {
        return this.iconImage_.getSize();
    };
    Icon.prototype.getImageState = function () {
        return this.iconImage_.getImageState();
    };
    Icon.prototype.getHitDetectionImage = function () {
        return this.iconImage_.getHitDetectionImage();
    };
    Icon.prototype.getOrigin = function () {
        if (this.origin_) {
            return this.origin_;
        }
        var offset = this.offset_;
        if (this.offsetOrigin_ != IconOrigin.TOP_LEFT) {
            var size = this.getSize();
            var iconImageSize = this.iconImage_.getSize();
            if (!size || !iconImageSize) {
                return null;
            }
            offset = offset.slice();
            if (this.offsetOrigin_ == IconOrigin.TOP_RIGHT ||
                this.offsetOrigin_ == IconOrigin.BOTTOM_RIGHT) {
                offset[0] = iconImageSize[0] - size[0] - offset[0];
            }
            if (this.offsetOrigin_ == IconOrigin.BOTTOM_LEFT ||
                this.offsetOrigin_ == IconOrigin.BOTTOM_RIGHT) {
                offset[1] = iconImageSize[1] - size[1] - offset[1];
            }
        }
        this.origin_ = offset;
        return this.origin_;
    };
    Icon.prototype.getSrc = function () {
        return this.iconImage_.getSrc();
    };
    Icon.prototype.getSize = function () {
        return !this.size_ ? this.iconImage_.getSize() : this.size_;
    };
    Icon.prototype.listenImageChange = function (listener) {
        this.iconImage_.addEventListener(EventType.Z.CHANGE, listener);
    };
    Icon.prototype.load = function () {
        this.iconImage_.load();
    };
    Icon.prototype.unlistenImageChange = function (listener) {
        this.iconImage_.removeEventListener(EventType.Z.CHANGE, listener);
    };
    return Icon;
}(style_Image));
 const style_Icon = (Icon);
;








var HIT_DETECT_RESOLUTION = 0.5;
function createHitDetectionImageData(size, transforms, features, styleFunction, extent, resolution, rotation) {
    var width = size[0] * HIT_DETECT_RESOLUTION;
    var height = size[1] * HIT_DETECT_RESOLUTION;
    var context = createCanvasContext2D(width, height);
    context.imageSmoothingEnabled = false;
    var canvas = context.canvas;
    var renderer = new Immediate(context, HIT_DETECT_RESOLUTION, extent, null, rotation);
    var featureCount = features.length;
    var indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
    var featuresByZIndex = {};
    for (var i = 1; i <= featureCount; ++i) {
        var feature = features[i - 1];
        var featureStyleFunction = feature.getStyleFunction() || styleFunction;
        if (!styleFunction) {
            continue;
        }
        var styles = featureStyleFunction(feature, resolution);
        if (!styles) {
            continue;
        }
        if (!Array.isArray(styles)) {
            styles = [styles];
        }
        var index = i * indexFactor;
        var color = '#' + ('000000' + index.toString(16)).slice(-6);
        for (var j = 0, jj = styles.length; j < jj; ++j) {
            var originalStyle = styles[j];
            var geometry = originalStyle.getGeometryFunction()(feature);
            if (!geometry || !(0,ol_extent.kK)(extent, geometry.getExtent())) {
                continue;
            }
            var style = originalStyle.clone();
            var fill = style.getFill();
            if (fill) {
                fill.setColor(color);
            }
            var stroke = style.getStroke();
            if (stroke) {
                stroke.setColor(color);
                stroke.setLineDash(null);
            }
            style.setText(undefined);
            var image = originalStyle.getImage();
            if (image && image.getOpacity() !== 0) {
                var imgSize = image.getImageSize();
                if (!imgSize) {
                    continue;
                }
                var imgContext = createCanvasContext2D(imgSize[0], imgSize[1], undefined, { alpha: false });
                var img = imgContext.canvas;
                imgContext.fillStyle = color;
                imgContext.fillRect(0, 0, img.width, img.height);
                style.setImage(new style_Icon({
                    img: img,
                    imgSize: imgSize,
                    anchor: image.getAnchor(),
                    anchorXUnits: IconAnchorUnits.PIXELS,
                    anchorYUnits: IconAnchorUnits.PIXELS,
                    offset: image.getOrigin(),
                    opacity: 1,
                    size: image.getSize(),
                    scale: image.getScale(),
                    rotation: image.getRotation(),
                    rotateWithView: image.getRotateWithView(),
                }));
            }
            var zIndex = style.getZIndex() || 0;
            var byGeometryType = featuresByZIndex[zIndex];
            if (!byGeometryType) {
                byGeometryType = {};
                featuresByZIndex[zIndex] = byGeometryType;
                byGeometryType[geom_GeometryType.Z.POLYGON] = [];
                byGeometryType[geom_GeometryType.Z.CIRCLE] = [];
                byGeometryType[geom_GeometryType.Z.LINE_STRING] = [];
                byGeometryType[geom_GeometryType.Z.POINT] = [];
            }
            byGeometryType[geometry.getType().replace('Multi', '')].push(geometry, style);
        }
    }
    var zIndexKeys = Object.keys(featuresByZIndex)
        .map(Number)
        .sort(array.kK);
    for (var i = 0, ii = zIndexKeys.length; i < ii; ++i) {
        var byGeometryType = featuresByZIndex[zIndexKeys[i]];
        for (var type in byGeometryType) {
            var geomAndStyle = byGeometryType[type];
            for (var j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
                renderer.setStyle(geomAndStyle[j + 1]);
                for (var k = 0, kk = transforms.length; k < kk; ++k) {
                    renderer.setTransform(transforms[k]);
                    renderer.drawGeometry(geomAndStyle[j]);
                }
            }
        }
    }
    return context.getImageData(0, 0, canvas.width, canvas.height);
}
function hitDetect(pixel, features, imageData) {
    var resultFeatures = [];
    if (imageData) {
        var x = Math.floor(Math.round(pixel[0]) * HIT_DETECT_RESOLUTION);
        var y = Math.floor(Math.round(pixel[1]) * HIT_DETECT_RESOLUTION);
        var index = ((0,math.uZ)(x, 0, imageData.width - 1) +
            (0,math.uZ)(y, 0, imageData.height - 1) * imageData.width) *
            4;
        var r = imageData.data[index];
        var g = imageData.data[index + 1];
        var b = imageData.data[index + 2];
        var i = b + 256 * (g + 256 * r);
        var indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);
        if (i && i % indexFactor === 0) {
            resultFeatures.push(features[i / indexFactor - 1]);
        }
    }
    return resultFeatures;
}
;




var SIMPLIFY_TOLERANCE = 0.5;
var GEOMETRY_RENDERERS = {
    'Point': renderPointGeometry,
    'LineString': renderLineStringGeometry,
    'Polygon': renderPolygonGeometry,
    'MultiPoint': renderMultiPointGeometry,
    'MultiLineString': renderMultiLineStringGeometry,
    'MultiPolygon': renderMultiPolygonGeometry,
    'GeometryCollection': renderGeometryCollectionGeometry,
    'Circle': renderCircleGeometry,
};
function defaultOrder(feature1, feature2) {
    return parseInt((0,util.sq)(feature1), 10) - parseInt((0,util.sq)(feature2), 10);
}
function getSquaredTolerance(resolution, pixelRatio) {
    var tolerance = getTolerance(resolution, pixelRatio);
    return tolerance * tolerance;
}
function getTolerance(resolution, pixelRatio) {
    return (SIMPLIFY_TOLERANCE * resolution) / pixelRatio;
}
function renderCircleGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var fillStyle = style.getFill();
    var strokeStyle = style.getStroke();
    if (fillStyle || strokeStyle) {
        var circleReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.CIRCLE);
        circleReplay.setFillStrokeStyle(fillStyle, strokeStyle);
        circleReplay.drawCircle(geometry, feature);
    }
    var textStyle = style.getText();
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle);
        textReplay.drawText(geometry, feature);
    }
}
function renderFeature(replayGroup, feature, style, squaredTolerance, listener, opt_transform, opt_declutterBuilderGroup) {
    var loading = false;
    var imageStyle = style.getImage();
    if (imageStyle) {
        var imageState = imageStyle.getImageState();
        if (imageState == ImageState.LOADED || imageState == ImageState.ERROR) {
            imageStyle.unlistenImageChange(listener);
        }
        else {
            if (imageState == ImageState.IDLE) {
                imageStyle.load();
            }
            imageState = imageStyle.getImageState();
            imageStyle.listenImageChange(listener);
            loading = true;
        }
    }
    renderFeatureInternal(replayGroup, feature, style, squaredTolerance, opt_transform, opt_declutterBuilderGroup);
    return loading;
}
function renderFeatureInternal(replayGroup, feature, style, squaredTolerance, opt_transform, opt_declutterBuilderGroup) {
    var geometry = style.getGeometryFunction()(feature);
    if (!geometry) {
        return;
    }
    var simplifiedGeometry = geometry.simplifyTransformed(squaredTolerance, opt_transform);
    var renderer = style.getRenderer();
    if (renderer) {
        renderGeometry(replayGroup, simplifiedGeometry, style, feature);
    }
    else {
        var geometryRenderer = GEOMETRY_RENDERERS[simplifiedGeometry.getType()];
        geometryRenderer(replayGroup, simplifiedGeometry, style, feature, opt_declutterBuilderGroup);
    }
}
function renderGeometry(replayGroup, geometry, style, feature) {
    if (geometry.getType() == geom_GeometryType.Z.GEOMETRY_COLLECTION) {
        var geometries = 
 (geometry).getGeometries();
        for (var i = 0, ii = geometries.length; i < ii; ++i) {
            renderGeometry(replayGroup, geometries[i], style, feature);
        }
        return;
    }
    var replay = replayGroup.getBuilder(style.getZIndex(), BuilderType.DEFAULT);
    replay.drawCustom(
 (geometry), feature, style.getRenderer(), style.getHitDetectionRenderer());
}
function renderGeometryCollectionGeometry(replayGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var geometries = geometry.getGeometriesArray();
    var i, ii;
    for (i = 0, ii = geometries.length; i < ii; ++i) {
        var geometryRenderer = GEOMETRY_RENDERERS[geometries[i].getType()];
        geometryRenderer(replayGroup, geometries[i], style, feature, opt_declutterBuilderGroup);
    }
}
function renderLineStringGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var strokeStyle = style.getStroke();
    if (strokeStyle) {
        var lineStringReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.LINE_STRING);
        lineStringReplay.setFillStrokeStyle(null, strokeStyle);
        lineStringReplay.drawLineString(geometry, feature);
    }
    var textStyle = style.getText();
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle);
        textReplay.drawText(geometry, feature);
    }
}
function renderMultiLineStringGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var strokeStyle = style.getStroke();
    if (strokeStyle) {
        var lineStringReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.LINE_STRING);
        lineStringReplay.setFillStrokeStyle(null, strokeStyle);
        lineStringReplay.drawMultiLineString(geometry, feature);
    }
    var textStyle = style.getText();
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle);
        textReplay.drawText(geometry, feature);
    }
}
function renderMultiPolygonGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var fillStyle = style.getFill();
    var strokeStyle = style.getStroke();
    if (strokeStyle || fillStyle) {
        var polygonReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.POLYGON);
        polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
        polygonReplay.drawMultiPolygon(geometry, feature);
    }
    var textStyle = style.getText();
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle);
        textReplay.drawText(geometry, feature);
    }
}
function renderPointGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var imageStyle = style.getImage();
    var textStyle = style.getText();
    var declutterImageWithText;
    if (opt_declutterBuilderGroup) {
        builderGroup = opt_declutterBuilderGroup;
        declutterImageWithText =
            imageStyle && textStyle && textStyle.getText() ? {} : undefined;
    }
    if (imageStyle) {
        if (imageStyle.getImageState() != ImageState.LOADED) {
            return;
        }
        var imageReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.IMAGE);
        imageReplay.setImageStyle(imageStyle, declutterImageWithText);
        imageReplay.drawPoint(geometry, feature);
    }
    if (textStyle && textStyle.getText()) {
        var textReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle, declutterImageWithText);
        textReplay.drawText(geometry, feature);
    }
}
function renderMultiPointGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var imageStyle = style.getImage();
    var textStyle = style.getText();
    var declutterImageWithText;
    if (opt_declutterBuilderGroup) {
        builderGroup = opt_declutterBuilderGroup;
        declutterImageWithText =
            imageStyle && textStyle && textStyle.getText() ? {} : undefined;
    }
    if (imageStyle) {
        if (imageStyle.getImageState() != ImageState.LOADED) {
            return;
        }
        var imageReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.IMAGE);
        imageReplay.setImageStyle(imageStyle, declutterImageWithText);
        imageReplay.drawMultiPoint(geometry, feature);
    }
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle, declutterImageWithText);
        textReplay.drawText(geometry, feature);
    }
}
function renderPolygonGeometry(builderGroup, geometry, style, feature, opt_declutterBuilderGroup) {
    var fillStyle = style.getFill();
    var strokeStyle = style.getStroke();
    if (fillStyle || strokeStyle) {
        var polygonReplay = builderGroup.getBuilder(style.getZIndex(), BuilderType.POLYGON);
        polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
        polygonReplay.drawPolygon(geometry, feature);
    }
    var textStyle = style.getText();
    if (textStyle && textStyle.getText()) {
        var textReplay = (opt_declutterBuilderGroup || builderGroup).getBuilder(style.getZIndex(), BuilderType.TEXT);
        textReplay.setTextStyle(textStyle);
        textReplay.drawText(geometry, feature);
    }
}
;
var VectorLayer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();













var CanvasVectorLayerRenderer =  (function (_super) {
    VectorLayer_extends(CanvasVectorLayerRenderer, _super);
    function CanvasVectorLayerRenderer(vectorLayer) {
        var _this = _super.call(this, vectorLayer) || this;
        _this.boundHandleStyleImageChange_ = _this.handleStyleImageChange_.bind(_this);
        _this.animatingOrInteracting_;
        _this.dirty_ = false;
        _this.hitDetectionImageData_ = null;
        _this.renderedFeatures_ = null;
        _this.renderedRevision_ = -1;
        _this.renderedResolution_ = NaN;
        _this.renderedExtent_ = (0,ol_extent.lJ)();
        _this.wrappedRenderedExtent_ = (0,ol_extent.lJ)();
        _this.renderedRotation_;
        _this.renderedCenter_ = null;
        _this.renderedProjection_ = null;
        _this.renderedRenderOrder_ = null;
        _this.replayGroup_ = null;
        _this.replayGroupChanged = true;
        _this.declutterExecutorGroup = null;
        _this.clipping = true;
        return _this;
    }
    CanvasVectorLayerRenderer.prototype.renderWorlds = function (executorGroup, frameState, opt_declutterTree) {
        var extent = frameState.extent;
        var viewState = frameState.viewState;
        var center = viewState.center;
        var resolution = viewState.resolution;
        var projection = viewState.projection;
        var rotation = viewState.rotation;
        var projectionExtent = projection.getExtent();
        var vectorSource = this.getLayer().getSource();
        var pixelRatio = frameState.pixelRatio;
        var viewHints = frameState.viewHints;
        var snapToPixel = !(viewHints[ViewHint.ANIMATING] || viewHints[ViewHint.INTERACTING]);
        var context = this.context;
        var width = Math.round(frameState.size[0] * pixelRatio);
        var height = Math.round(frameState.size[1] * pixelRatio);
        var multiWorld = vectorSource.getWrapX() && projection.canWrapX();
        var worldWidth = multiWorld ? (0,ol_extent.dz)(projectionExtent) : null;
        var endWorld = multiWorld
            ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1
            : 1;
        var world = multiWorld
            ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth)
            : 0;
        do {
            var transform = this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, world * worldWidth);
            executorGroup.execute(context, 1, transform, rotation, snapToPixel, undefined, opt_declutterTree);
        } while (++world < endWorld);
    };
    CanvasVectorLayerRenderer.prototype.renderDeclutter = function (frameState) {
        if (this.declutterExecutorGroup) {
            this.renderWorlds(this.declutterExecutorGroup, frameState, frameState.declutterTree);
        }
    };
    CanvasVectorLayerRenderer.prototype.renderFrame = function (frameState, target) {
        var pixelRatio = frameState.pixelRatio;
        var layerState = frameState.layerStatesArray[frameState.layerIndex];
        (0,ol_transform.n3)(this.pixelTransform, 1 / pixelRatio, 1 / pixelRatio);
        (0,ol_transform.nb)(this.inversePixelTransform, this.pixelTransform);
        var canvasTransform = (0,ol_transform.BB)(this.pixelTransform);
        this.useContainer(target, canvasTransform, layerState.opacity, this.getBackground(frameState));
        var context = this.context;
        var canvas = context.canvas;
        var replayGroup = this.replayGroup_;
        var declutterExecutorGroup = this.declutterExecutorGroup;
        if ((!replayGroup || replayGroup.isEmpty()) &&
            (!declutterExecutorGroup || declutterExecutorGroup.isEmpty())) {
            return null;
        }
        var width = Math.round(frameState.size[0] * pixelRatio);
        var height = Math.round(frameState.size[1] * pixelRatio);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
            if (canvas.style.transform !== canvasTransform) {
                canvas.style.transform = canvasTransform;
            }
        }
        else if (!this.containerReused) {
            context.clearRect(0, 0, width, height);
        }
        this.preRender(context, frameState);
        var viewState = frameState.viewState;
        var projection = viewState.projection;
        var clipped = false;
        var render = true;
        if (layerState.extent && this.clipping) {
            var layerExtent = (0,ol_proj.dY)(layerState.extent, projection);
            render = (0,ol_extent.kK)(layerExtent, frameState.extent);
            clipped = render && !(0,ol_extent.r4)(layerExtent, frameState.extent);
            if (clipped) {
                this.clipUnrotated(context, frameState, layerExtent);
            }
        }
        if (render) {
            this.renderWorlds(replayGroup, frameState);
        }
        if (clipped) {
            context.restore();
        }
        this.postRender(context, frameState);
        var opacity = cssOpacity(layerState.opacity);
        var container = this.container;
        if (opacity !== container.style.opacity) {
            container.style.opacity = opacity;
        }
        if (this.renderedRotation_ !== viewState.rotation) {
            this.renderedRotation_ = viewState.rotation;
            this.hitDetectionImageData_ = null;
        }
        return this.container;
    };
    CanvasVectorLayerRenderer.prototype.getFeatures = function (pixel) {
        return new Promise(
        function (resolve) {
            if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
                var size = [this.context.canvas.width, this.context.canvas.height];
                (0,ol_transform.nn)(this.pixelTransform, size);
                var center = this.renderedCenter_;
                var resolution = this.renderedResolution_;
                var rotation = this.renderedRotation_;
                var projection = this.renderedProjection_;
                var extent = this.wrappedRenderedExtent_;
                var layer = this.getLayer();
                var transforms = [];
                var width = size[0] * HIT_DETECT_RESOLUTION;
                var height = size[1] * HIT_DETECT_RESOLUTION;
                transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, 0).slice());
                var source = layer.getSource();
                var projectionExtent = projection.getExtent();
                if (source.getWrapX() &&
                    projection.canWrapX() &&
                    !(0,ol_extent.r4)(projectionExtent, extent)) {
                    var startX = extent[0];
                    var worldWidth = (0,ol_extent.dz)(projectionExtent);
                    var world = 0;
                    var offsetX = void 0;
                    while (startX < projectionExtent[0]) {
                        --world;
                        offsetX = worldWidth * world;
                        transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
                        startX += worldWidth;
                    }
                    world = 0;
                    startX = extent[2];
                    while (startX > projectionExtent[2]) {
                        ++world;
                        offsetX = worldWidth * world;
                        transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
                        startX -= worldWidth;
                    }
                }
                this.hitDetectionImageData_ = createHitDetectionImageData(size, transforms, this.renderedFeatures_, layer.getStyleFunction(), extent, resolution, rotation);
            }
            resolve(hitDetect(pixel, this.renderedFeatures_, this.hitDetectionImageData_));
        }.bind(this));
    };
    CanvasVectorLayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, matches) {
        var _this = this;
        if (!this.replayGroup_) {
            return undefined;
        }
        var resolution = frameState.viewState.resolution;
        var rotation = frameState.viewState.rotation;
        var layer = this.getLayer();
        var features = {};
        var featureCallback = function (feature, geometry, distanceSq) {
            var key = (0,util.sq)(feature);
            var match = features[key];
            if (!match) {
                if (distanceSq === 0) {
                    features[key] = true;
                    return callback(feature, layer, geometry);
                }
                matches.push((features[key] = {
                    feature: feature,
                    layer: layer,
                    geometry: geometry,
                    distanceSq: distanceSq,
                    callback: callback,
                }));
            }
            else if (match !== true && distanceSq < match.distanceSq) {
                if (distanceSq === 0) {
                    features[key] = true;
                    matches.splice(matches.lastIndexOf(match), 1);
                    return callback(feature, layer, geometry);
                }
                match.geometry = geometry;
                match.distanceSq = distanceSq;
            }
            return undefined;
        };
        var result;
        var executorGroups = [this.replayGroup_];
        if (this.declutterExecutorGroup) {
            executorGroups.push(this.declutterExecutorGroup);
        }
        executorGroups.some(function (executorGroup) {
            return (result = executorGroup.forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, featureCallback, executorGroup === _this.declutterExecutorGroup &&
                frameState.declutterTree
                ? frameState.declutterTree.all().map(function (item) { return item.value; })
                : null));
        });
        return result;
    };
    CanvasVectorLayerRenderer.prototype.handleFontsChanged = function () {
        var layer = this.getLayer();
        if (layer.getVisible() && this.replayGroup_) {
            layer.changed();
        }
    };
    CanvasVectorLayerRenderer.prototype.handleStyleImageChange_ = function (event) {
        this.renderIfReadyAndVisible();
    };
    CanvasVectorLayerRenderer.prototype.prepareFrame = function (frameState) {
        var vectorLayer = this.getLayer();
        var vectorSource = vectorLayer.getSource();
        if (!vectorSource) {
            return false;
        }
        var animating = frameState.viewHints[ViewHint.ANIMATING];
        var interacting = frameState.viewHints[ViewHint.INTERACTING];
        var updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
        var updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();
        if ((!this.dirty_ && !updateWhileAnimating && animating) ||
            (!updateWhileInteracting && interacting)) {
            this.animatingOrInteracting_ = true;
            return true;
        }
        this.animatingOrInteracting_ = false;
        var frameStateExtent = frameState.extent;
        var viewState = frameState.viewState;
        var projection = viewState.projection;
        var resolution = viewState.resolution;
        var pixelRatio = frameState.pixelRatio;
        var vectorLayerRevision = vectorLayer.getRevision();
        var vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
        var vectorLayerRenderOrder = vectorLayer.getRenderOrder();
        if (vectorLayerRenderOrder === undefined) {
            vectorLayerRenderOrder = defaultOrder;
        }
        var center = viewState.center.slice();
        var extent = (0,ol_extent.f3)(frameStateExtent, vectorLayerRenderBuffer * resolution);
        var renderedExtent = extent.slice();
        var loadExtents = [extent.slice()];
        var projectionExtent = projection.getExtent();
        if (vectorSource.getWrapX() &&
            projection.canWrapX() &&
            !(0,ol_extent.r4)(projectionExtent, frameState.extent)) {
            var worldWidth = (0,ol_extent.dz)(projectionExtent);
            var gutter = Math.max((0,ol_extent.dz)(extent) / 2, worldWidth);
            extent[0] = projectionExtent[0] - gutter;
            extent[2] = projectionExtent[2] + gutter;
            (0,ol_coordinate.Cf)(center, projection);
            var loadExtent = (0,ol_extent.Cf)(loadExtents[0], projection);
            if (loadExtent[0] < projectionExtent[0] &&
                loadExtent[2] < projectionExtent[2]) {
                loadExtents.push([
                    loadExtent[0] + worldWidth,
                    loadExtent[1],
                    loadExtent[2] + worldWidth,
                    loadExtent[3],
                ]);
            }
            else if (loadExtent[0] > projectionExtent[0] &&
                loadExtent[2] > projectionExtent[2]) {
                loadExtents.push([
                    loadExtent[0] - worldWidth,
                    loadExtent[1],
                    loadExtent[2] - worldWidth,
                    loadExtent[3],
                ]);
            }
        }
        if (!this.dirty_ &&
            this.renderedResolution_ == resolution &&
            this.renderedRevision_ == vectorLayerRevision &&
            this.renderedRenderOrder_ == vectorLayerRenderOrder &&
            (0,ol_extent.r4)(this.wrappedRenderedExtent_, extent)) {
            if (!(0,array.fS)(this.renderedExtent_, renderedExtent)) {
                this.hitDetectionImageData_ = null;
                this.renderedExtent_ = renderedExtent;
            }
            this.renderedCenter_ = center;
            this.replayGroupChanged = false;
            return true;
        }
        this.replayGroup_ = null;
        this.dirty_ = false;
        var replayGroup = new canvas_BuilderGroup(getTolerance(resolution, pixelRatio), extent, resolution, pixelRatio);
        var declutterBuilderGroup;
        if (this.getLayer().getDeclutter()) {
            declutterBuilderGroup = new canvas_BuilderGroup(getTolerance(resolution, pixelRatio), extent, resolution, pixelRatio);
        }
        var userProjection = (0,ol_proj.Cs)();
        var userTransform;
        if (userProjection) {
            for (var i = 0, ii = loadExtents.length; i < ii; ++i) {
                var extent_1 = loadExtents[i];
                var userExtent_1 = (0,ol_proj.Fj)(extent_1, projection);
                vectorSource.loadFeatures(userExtent_1, (0,ol_proj.on)(resolution, projection), userProjection);
            }
            userTransform = (0,ol_proj.WO)(userProjection, projection);
        }
        else {
            for (var i = 0, ii = loadExtents.length; i < ii; ++i) {
                vectorSource.loadFeatures(loadExtents[i], resolution, projection);
            }
        }
        var squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
        var render = 
        function (feature) {
            var styles;
            var styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();
            if (styleFunction) {
                styles = styleFunction(feature, resolution);
            }
            if (styles) {
                var dirty = this.renderFeature(feature, squaredTolerance, styles, replayGroup, userTransform, declutterBuilderGroup);
                this.dirty_ = this.dirty_ || dirty;
            }
        }.bind(this);
        var userExtent = (0,ol_proj.Fj)(extent, projection);
        var features = vectorSource.getFeaturesInExtent(userExtent);
        if (vectorLayerRenderOrder) {
            features.sort(vectorLayerRenderOrder);
        }
        for (var i = 0, ii = features.length; i < ii; ++i) {
            render(features[i]);
        }
        this.renderedFeatures_ = features;
        var replayGroupInstructions = replayGroup.finish();
        var executorGroup = new canvas_ExecutorGroup(extent, resolution, pixelRatio, vectorSource.getOverlaps(), replayGroupInstructions, vectorLayer.getRenderBuffer());
        if (declutterBuilderGroup) {
            this.declutterExecutorGroup = new canvas_ExecutorGroup(extent, resolution, pixelRatio, vectorSource.getOverlaps(), declutterBuilderGroup.finish(), vectorLayer.getRenderBuffer());
        }
        this.renderedResolution_ = resolution;
        this.renderedRevision_ = vectorLayerRevision;
        this.renderedRenderOrder_ = vectorLayerRenderOrder;
        this.renderedExtent_ = renderedExtent;
        this.wrappedRenderedExtent_ = extent;
        this.renderedCenter_ = center;
        this.renderedProjection_ = projection;
        this.replayGroup_ = executorGroup;
        this.hitDetectionImageData_ = null;
        this.replayGroupChanged = true;
        return true;
    };
    CanvasVectorLayerRenderer.prototype.renderFeature = function (feature, squaredTolerance, styles, builderGroup, opt_transform, opt_declutterBuilderGroup) {
        if (!styles) {
            return false;
        }
        var loading = false;
        if (Array.isArray(styles)) {
            for (var i = 0, ii = styles.length; i < ii; ++i) {
                loading =
                    renderFeature(builderGroup, feature, styles[i], squaredTolerance, this.boundHandleStyleImageChange_, opt_transform, opt_declutterBuilderGroup) || loading;
            }
        }
        else {
            loading = renderFeature(builderGroup, feature, styles, squaredTolerance, this.boundHandleStyleImageChange_, opt_transform, opt_declutterBuilderGroup);
        }
        return loading;
    };
    return CanvasVectorLayerRenderer;
}(canvas_Layer));
 const canvas_VectorLayer = (CanvasVectorLayerRenderer);
;
var Vector_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VectorLayer =  (function (_super) {
    Vector_extends(VectorLayer, _super);
    function VectorLayer(opt_options) {
        return _super.call(this, opt_options) || this;
    }
    VectorLayer.prototype.createRenderer = function () {
        return new canvas_VectorLayer(this);
    };
    return VectorLayer;
}(BaseVector));
 const Vector = (VectorLayer);
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
var Subject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subject.js");
var types_events = __webpack_require__("./public/app/types/events.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class GeomapOverlay extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "style", getStyles(grafana_runtime_src.config.theme));
  }

  render() {
    const {
      topRight,
      bottomLeft
    } = this.props;
    return (0,jsx_runtime.jsxs)("div", {
      className: this.style.overlay,
      children: [Boolean(topRight === null || topRight === void 0 ? void 0 : topRight.length) && (0,jsx_runtime.jsx)("div", {
        className: this.style.TR,
        children: topRight
      }), Boolean(bottomLeft === null || bottomLeft === void 0 ? void 0 : bottomLeft.length) && (0,jsx_runtime.jsx)("div", {
        className: this.style.BL,
        style: this.props.blStyle,
        children: bottomLeft
      })]
    });
  }

}
const getStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  overlay: emotion_css_esm.css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 500;
    pointer-events: none;
  `,
  TR: emotion_css_esm.css`
    position: absolute;
    top: 8px;
    right: 8px;
    pointer-events: auto;
  `,
  BL: emotion_css_esm.css`
    position: absolute;
    bottom: 8px;
    left: 8px;
    pointer-events: auto;
  `
}));
var dist_module = __webpack_require__("./.yarn/__virtual__/@react-aria-dialog-virtual-36fdcda623/0/cache/@react-aria-dialog-npm-3.1.8-568ff8e753-524c57f436.zip/node_modules/@react-aria/dialog/dist/module.js");
var overlays_dist_module = __webpack_require__("./.yarn/__virtual__/@react-aria-overlays-virtual-16fed4c078/0/cache/@react-aria-overlays-npm-3.8.1-6c1273b9ae-29c7f97f12.zip/node_modules/@react-aria/overlays/dist/module.js");
var CloseButton = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
var DataHoverView = __webpack_require__("./public/app/plugins/panel/geomap/components/DataHoverView.tsx");
;
const _excluded = ["geometry"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DataHoverRow = _ref => {
  let {
    feature
  } = _ref;
  let data;
  let rowIndex = 0;

  if (!feature) {
    return null;
  }

  data = feature.get('frame');

  if (data) {
    rowIndex = feature.get('rowIndex');
  } else {
    const _feature$getPropertie = feature.getProperties(),
          properties = _objectWithoutPropertiesLoose(_feature$getPropertie, _excluded);

    data = new src.ArrayDataFrame([properties]);
  }

  return (0,jsx_runtime.jsx)(DataHoverView.H, {
    data: data,
    rowIndex: rowIndex
  });
};
;







const DataHoverRows = _ref => {
  let {
    layers,
    activeTabIndex
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(DataHoverRows_getStyles);
  const [rowMap, setRowMap] = (0,react.useState)(new Map());

  const updateRowMap = (key, value) => {
    setRowMap(new Map(rowMap.set(key, value)));
  };

  return (0,jsx_runtime.jsx)(grafana_ui_src.TabContent, {
    children: layers.map((geomapLayer, index) => index === activeTabIndex && (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)("div", {
        children: geomapLayer.features.map((feature, idx) => {
          var _feature$getId;

          const key = (_feature$getId = feature.getId()) !== null && _feature$getId !== void 0 ? _feature$getId : idx;
          const shouldDisplayCollapse = geomapLayer.features.length > 1;
          return shouldDisplayCollapse ? (0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
            collapsible: true,
            label: generateLabel(feature, idx),
            isOpen: rowMap.get(key),
            onToggle: () => {
              updateRowMap(key, !rowMap.get(key));
            },
            className: styles.collapsibleRow,
            children: (0,jsx_runtime.jsx)(DataHoverRow, {
              feature: feature
            })
          }, key) : (0,jsx_runtime.jsx)(DataHoverRow, {
            feature: feature
          }, key);
        })
      })
    }, geomapLayer.layer.getName()))
  });
};
const generateLabel = (feature, idx) => {
  const names = ['Name', 'name', 'Title', 'ID', 'id'];
  let props = feature.getProperties();
  let first = '';
  const frame = feature.get('frame');

  if (frame) {
    const rowIndex = feature.get('rowIndex');

    for (const f of frame.fields) {
      if (f.type === src.FieldType.string) {
        const k = (0,src.getFieldDisplayName)(f, frame);

        if (!first) {
          first = k;
        }

        props[k] = f.values.get(rowIndex);
      }
    }
  }

  for (let k of names) {
    const v = props[k];

    if (v) {
      return v;
    }
  }

  if (first) {
    return `${first}: ${props[first]}`;
  }

  for (let k of Object.keys(props)) {
    const v = props[k];

    if ((0,lodash.isString)(v)) {
      return `${k}: ${v}`;
    }
  }

  return `Match: ${idx + 1}`;
};

const DataHoverRows_getStyles = theme => ({
  collapsibleRow: emotion_css_esm.css`
    margin-bottom: 0px;
  `
});
;



const DataHoverTabs = _ref => {
  let {
    layers,
    setActiveTabIndex,
    activeTabIndex
  } = _ref;
  return (0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
    children: layers && layers.map((g, index) => (0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
      label: g.layer.getName(),
      active: index === activeTabIndex,
      counter: g.features.length > 1 ? g.features.length : null,
      onChangeTab: () => {
        setActiveTabIndex(index);
      }
    }, index))
  });
};
;







const ComplexDataHoverView = _ref => {
  let {
    layers,
    onClose,
    isOpen
  } = _ref;
  const [activeTabIndex, setActiveTabIndex] = (0,react.useState)(0);

  if (!layers) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [isOpen && (0,jsx_runtime.jsx)(CloseButton.P, {
      style: {
        zIndex: 1
      },
      onClick: onClose
    }), (0,jsx_runtime.jsx)(DataHoverTabs, {
      layers: layers,
      setActiveTabIndex: setActiveTabIndex,
      activeTabIndex: activeTabIndex
    }), (0,jsx_runtime.jsx)(DataHoverRows, {
      layers: layers,
      activeTabIndex: activeTabIndex
    })]
  });
};
;







const GeomapTooltip = _ref => {
  let {
    ttip,
    onClose,
    isOpen
  } = _ref;
  const ref = (0,react.createRef)();
  const {
    overlayProps
  } = (0,overlays_dist_module.Ir)({
    onClose,
    isDismissable: true,
    isOpen
  }, ref);
  const {
    dialogProps
  } = (0,dist_module.R)({}, ref);
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: ttip && ttip.layers && (0,jsx_runtime.jsx)(grafana_ui_src.VizTooltipContainer, {
      position: {
        x: ttip.pageX,
        y: ttip.pageY
      },
      offset: {
        x: 10,
        y: 10
      },
      allowPointerEvents: true,
      children: (0,jsx_runtime.jsx)("section", Object.assign({
        ref: ref
      }, overlayProps, dialogProps, {
        children: (0,jsx_runtime.jsx)(ComplexDataHoverView, {
          layers: ttip.layers,
          isOpen: isOpen,
          onClose: onClose
        })
      }))
    })
  });
};
var tinycolor = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
var tinycolor_default = __webpack_require__.n(tinycolor);
var config = __webpack_require__("./public/app/core/config.ts");
;
var _th, _th2;

function DebugOverlay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DebugOverlay extends react.PureComponent {
  constructor(props) {
    super(props);

    DebugOverlay_defineProperty(this, "style", DebugOverlay_getStyles(config.vc.theme));

    DebugOverlay_defineProperty(this, "updateViewState", () => {
      const view = this.props.map.getView();
      this.setState({
        zoom: view.getZoom(),
        center: (0,ol_proj.vs)(view.getCenter(), view.getProjection(), 'EPSG:4326')
      });
    });

    this.state = {
      zoom: 0,
      center: [0, 0]
    };
  }

  componentDidMount() {
    this.props.map.on('moveend', this.updateViewState);
    this.updateViewState();
  }

  render() {
    const {
      zoom,
      center
    } = this.state;
    return (0,jsx_runtime.jsx)("div", {
      className: this.style.infoWrap,
      children: (0,jsx_runtime.jsx)("table", {
        children: (0,jsx_runtime.jsxs)("tbody", {
          children: [(0,jsx_runtime.jsxs)("tr", {
            children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
              children: "Zoom:"
            })), (0,jsx_runtime.jsx)("td", {
              children: zoom === null || zoom === void 0 ? void 0 : zoom.toFixed(1)
            })]
          }), (0,jsx_runtime.jsxs)("tr", {
            children: [_th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
              children: "Center:\xA0"
            })), (0,jsx_runtime.jsxs)("td", {
              children: [center[0].toFixed(5), ", ", center[1].toFixed(5)]
            })]
          })]
        })
      })
    });
  }

}
const DebugOverlay_getStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  infoWrap: emotion_css_esm.css`
    color: ${theme.colors.text};
    background: ${tinycolor_default()(theme.colors.panelBg).setAlpha(0.7).toString()};
    border-radius: 2px;
    padding: 8px;
  `
}));
var ol = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/ol.css");
;



function getGlobalStyles(theme) {
  return emotion_react_browser_esm.iv`
    .ol-scale-line {
      background: ${theme.colors.border.weak}; // rgba(0,60,136,0.3);
    }
    .ol-scale-line-inner {
      border: 1px solid ${theme.colors.text.primary}; // #eee;
      border-top: 0px;
      color: ${theme.colors.text.primary}; //  #eee;
    }
    .ol-control {
      background-color: ${theme.colors.background.secondary}; //rgba(255,255,255,0.4);
    }
    .ol-control:hover {
      background-color: ${theme.colors.action.hover}; // rgba(255,255,255,0.6);
    }
    .ol-control button {
      color: ${theme.colors.secondary.text}; // white;
      background-color: ${theme.colors.secondary.main}; // rgba(0,60,136,0.5);
    }
    .ol-control button:hover {
      background-color: ${theme.colors.secondary.shade}; // rgba(0,60,136,0.5);
    }
    .ol-control button:focus {
      background-color: ${theme.colors.secondary.main}; // rgba(0,60,136,0.5);
    }
    .ol-attribution ul {
      color: ${theme.colors.text.primary}; //  #000;
      text-shadow: none;
    }
    .ol-attribution:not(.ol-collapsed) {
      background-color: ${theme.colors.background.secondary}; // rgba(255,255,255,0.8);
    }
  `;
}
var utils_location = __webpack_require__("./public/app/features/geo/utils/location.ts");
var dimensions = __webpack_require__("./public/app/features/dimensions/index.ts");
;
function ObservablePropsWrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ObservablePropsWrapper extends react.Component {
  constructor(props) {
    super(props);

    ObservablePropsWrapper_defineProperty(this, "sub", void 0);

    this.state = {
      subProps: props.initialSubProps
    };
  }

  componentDidMount() {
    this.sub = this.props.watch.subscribe({
      next: subProps => {
        this.setState({
          subProps
        });
      },
      complete: () => {
      },
      error: err => {
      }
    });
  }

  componentWillUnmount() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  render() {
    const {
      subProps
    } = this.state;
    return (0,jsx_runtime.jsx)(this.props.child, Object.assign({}, subProps));
  }

}
var utils = __webpack_require__("./public/app/plugins/panel/state-timeline/utils.ts");
var field_scale = __webpack_require__("./packages/grafana-data/src/field/scale.ts");
var esm = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
var ColorScale = __webpack_require__("./public/app/core/components/ColorScale/ColorScale.tsx");
var useObservable = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
;
var _div;















function MarkersLegend(props) {
  var _mouseEvents, _state, _styleConfig$dims, _styleConfig$dims$col, _styleConfig$base, _styleConfig$config$s, _colorField$config;

  const {
    layerName,
    styleConfig,
    layer
  } = props;
  const style = (0,grafana_ui_src.useStyles2)(MarkersLegend_getStyles);
  const hoverEvent = (0,useObservable.Z)((_mouseEvents = layer === null || layer === void 0 ? void 0 : (_state = layer.__state) === null || _state === void 0 ? void 0 : _state.mouseEvents) !== null && _mouseEvents !== void 0 ? _mouseEvents : (0,of.of)(undefined));
  const colorField = styleConfig === null || styleConfig === void 0 ? void 0 : (_styleConfig$dims = styleConfig.dims) === null || _styleConfig$dims === void 0 ? void 0 : (_styleConfig$dims$col = _styleConfig$dims.color) === null || _styleConfig$dims$col === void 0 ? void 0 : _styleConfig$dims$col.field;
  const hoverValue = (0,react.useMemo)(() => {
    if (!colorField || !hoverEvent) {
      return undefined;
    }

    const props = hoverEvent.getProperties();
    const frame = props.frame;

    if (!frame) {
      return undefined;
    }

    const rowIndex = props.rowIndex;
    return colorField.values.get(rowIndex);
  }, [hoverEvent, colorField]);

  if (!styleConfig) {
    return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }

  const {
    color,
    opacity
  } = (_styleConfig$base = styleConfig === null || styleConfig === void 0 ? void 0 : styleConfig.base) !== null && _styleConfig$base !== void 0 ? _styleConfig$base : {};
  const symbol = styleConfig === null || styleConfig === void 0 ? void 0 : (_styleConfig$config$s = styleConfig.config.symbol) === null || _styleConfig$config$s === void 0 ? void 0 : _styleConfig$config$s.fixed;

  if (color && symbol && !colorField) {
    return (0,jsx_runtime.jsxs)("div", {
      className: style.infoWrap,
      children: [(0,jsx_runtime.jsx)("div", {
        className: style.layerName,
        children: layerName
      }), (0,jsx_runtime.jsx)("div", {
        className: (0,emotion_css_esm.cx)(style.layerBody, style.fixedColorContainer),
        children: (0,jsx_runtime.jsx)(esm.Z, {
          src: `public/${symbol}`,
          className: style.legendSymbol,
          title: 'Symbol',
          style: {
            fill: color,
            opacity: opacity
          }
        })
      })]
    });
  }

  if (!colorField) {
    return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }

  const colorMode = (0,src.getFieldColorModeForField)(colorField);

  if (colorMode.isContinuous && colorMode.getColors) {
    const colors = colorMode.getColors(config.vc.theme2);
    const colorRange = (0,field_scale.dz)(colorField); 

    const display = colorField.display ? v => (0,src.formattedValueToString)(colorField.display(v)) : v => `${v}`;
    return (0,jsx_runtime.jsxs)("div", {
      className: style.infoWrap,
      children: [(0,jsx_runtime.jsx)("div", {
        className: style.layerName,
        children: layerName
      }), (0,jsx_runtime.jsx)("div", {
        className: (0,emotion_css_esm.cx)(style.layerBody, style.colorScaleWrapper),
        children: (0,jsx_runtime.jsx)(ColorScale.q, {
          hoverValue: hoverValue,
          colorPalette: colors,
          min: colorRange.min,
          max: colorRange.max,
          display: display,
          useStopsPercentage: false
        })
      })]
    });
  }

  const thresholds = colorField === null || colorField === void 0 ? void 0 : (_colorField$config = colorField.config) === null || _colorField$config === void 0 ? void 0 : _colorField$config.thresholds;

  if (!thresholds || thresholds.steps.length < 2) {
    return _div || (_div = (0,jsx_runtime.jsx)("div", {})); 
  }

  const items = (0,utils.Ur)(colorField.config, config.vc.theme2);
  return (0,jsx_runtime.jsxs)("div", {
    className: style.infoWrap,
    children: [(0,jsx_runtime.jsx)("div", {
      className: style.layerName,
      children: layerName
    }), (0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(style.layerBody, style.legend),
      children: items.map((item, idx) => (0,jsx_runtime.jsxs)("div", {
        className: style.legendItem,
        children: [(0,jsx_runtime.jsx)("i", {
          style: {
            background: item.color
          }
        }), item.label]
      }, `${idx}/${item.label}`))
    })]
  });
}

const MarkersLegend_getStyles = theme => ({
  infoWrap: emotion_css_esm.css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background.secondary};
    border-radius: 1px;
    padding: ${theme.spacing(1)};
    border-bottom: 2px solid ${theme.colors.border.strong};
    min-width: 150px;
  `,
  layerName: emotion_css_esm.css`
    font-size: ${theme.typography.body.fontSize};
  `,
  layerBody: emotion_css_esm.css`
    padding-left: 10px;
  `,
  legend: emotion_css_esm.css`
    line-height: 18px;
    display: flex;
    flex-direction: column;
    font-size: ${theme.typography.bodySmall.fontSize};
    padding: 5px 10px 0;

    i {
      width: 18px;
      height: 18px;
      float: left;
      margin-right: 8px;
      opacity: 0.7;
    }
  `,
  legendItem: emotion_css_esm.css`
    white-space: nowrap;
  `,
  fixedColorContainer: emotion_css_esm.css`
    min-width: 80px;
    font-size: ${theme.typography.bodySmall.fontSize};
    padding-top: 5px;
  `,
  legendSymbol: emotion_css_esm.css`
    height: 15px;
    width: 15px;
    margin: auto;
  `,
  colorScaleWrapper: emotion_css_esm.css`
    min-width: 200px;
    font-size: ${theme.typography.bodySmall.fontSize};
    padding-top: 10px;
  `
});
var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
;

let GeometryTypeId; 

(function (GeometryTypeId) {
  GeometryTypeId["Point"] = "point";
  GeometryTypeId["Line"] = "line";
  GeometryTypeId["Polygon"] = "polygon";
  GeometryTypeId["Any"] = "*any*";
})(GeometryTypeId || (GeometryTypeId = {}));

const DEFAULT_SIZE = 5;
let TextAlignment;

(function (TextAlignment) {
  TextAlignment["Left"] = "left";
  TextAlignment["Center"] = "center";
  TextAlignment["Right"] = "right";
})(TextAlignment || (TextAlignment = {}));

let TextBaseline;

(function (TextBaseline) {
  TextBaseline["Top"] = "top";
  TextBaseline["Middle"] = "middle";
  TextBaseline["Bottom"] = "bottom";
})(TextBaseline || (TextBaseline = {}));

const defaultStyleConfig = Object.freeze({
  size: {
    fixed: DEFAULT_SIZE,
    min: 2,
    max: 15
  },
  color: {
    fixed: 'dark-green' 

  },
  opacity: 0.4,
  symbol: {
    mode: dimensions.Q8.Fixed,
    fixed: 'img/icons/marker/circle.svg'
  },
  textConfig: {
    fontSize: 12,
    textAlign: TextAlignment.Center,
    textBaseline: TextBaseline.Middle,
    offsetX: 0,
    offsetY: 0
  },
  rotation: {
    fixed: 0,
    mode: dimensions.eK.Mod,
    min: -360,
    max: 360
  }
});
var editors = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
var types = __webpack_require__("./public/app/features/dimensions/types.ts");
;



var DEFAULT_FILL_COLOR = '#333';
var Text =  (function () {
    function Text(opt_options) {
        var options = opt_options || {};
        this.font_ = options.font;
        this.rotation_ = options.rotation;
        this.rotateWithView_ = options.rotateWithView;
        this.scale_ = options.scale;
        this.scaleArray_ = toSize(options.scale !== undefined ? options.scale : 1);
        this.text_ = options.text;
        this.textAlign_ = options.textAlign;
        this.textBaseline_ = options.textBaseline;
        this.fill_ =
            options.fill !== undefined
                ? options.fill
                : new style_Fill({ color: DEFAULT_FILL_COLOR });
        this.maxAngle_ =
            options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;
        this.placement_ =
            options.placement !== undefined ? options.placement : TextPlacement.POINT;
        this.overflow_ = !!options.overflow;
        this.stroke_ = options.stroke !== undefined ? options.stroke : null;
        this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;
        this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;
        this.backgroundFill_ = options.backgroundFill
            ? options.backgroundFill
            : null;
        this.backgroundStroke_ = options.backgroundStroke
            ? options.backgroundStroke
            : null;
        this.padding_ = options.padding === undefined ? null : options.padding;
    }
    Text.prototype.clone = function () {
        var scale = this.getScale();
        return new Text({
            font: this.getFont(),
            placement: this.getPlacement(),
            maxAngle: this.getMaxAngle(),
            overflow: this.getOverflow(),
            rotation: this.getRotation(),
            rotateWithView: this.getRotateWithView(),
            scale: Array.isArray(scale) ? scale.slice() : scale,
            text: this.getText(),
            textAlign: this.getTextAlign(),
            textBaseline: this.getTextBaseline(),
            fill: this.getFill() ? this.getFill().clone() : undefined,
            stroke: this.getStroke() ? this.getStroke().clone() : undefined,
            offsetX: this.getOffsetX(),
            offsetY: this.getOffsetY(),
            backgroundFill: this.getBackgroundFill()
                ? this.getBackgroundFill().clone()
                : undefined,
            backgroundStroke: this.getBackgroundStroke()
                ? this.getBackgroundStroke().clone()
                : undefined,
            padding: this.getPadding() || undefined,
        });
    };
    Text.prototype.getOverflow = function () {
        return this.overflow_;
    };
    Text.prototype.getFont = function () {
        return this.font_;
    };
    Text.prototype.getMaxAngle = function () {
        return this.maxAngle_;
    };
    Text.prototype.getPlacement = function () {
        return this.placement_;
    };
    Text.prototype.getOffsetX = function () {
        return this.offsetX_;
    };
    Text.prototype.getOffsetY = function () {
        return this.offsetY_;
    };
    Text.prototype.getFill = function () {
        return this.fill_;
    };
    Text.prototype.getRotateWithView = function () {
        return this.rotateWithView_;
    };
    Text.prototype.getRotation = function () {
        return this.rotation_;
    };
    Text.prototype.getScale = function () {
        return this.scale_;
    };
    Text.prototype.getScaleArray = function () {
        return this.scaleArray_;
    };
    Text.prototype.getStroke = function () {
        return this.stroke_;
    };
    Text.prototype.getText = function () {
        return this.text_;
    };
    Text.prototype.getTextAlign = function () {
        return this.textAlign_;
    };
    Text.prototype.getTextBaseline = function () {
        return this.textBaseline_;
    };
    Text.prototype.getBackgroundFill = function () {
        return this.backgroundFill_;
    };
    Text.prototype.getBackgroundStroke = function () {
        return this.backgroundStroke_;
    };
    Text.prototype.getPadding = function () {
        return this.padding_;
    };
    Text.prototype.setOverflow = function (overflow) {
        this.overflow_ = overflow;
    };
    Text.prototype.setFont = function (font) {
        this.font_ = font;
    };
    Text.prototype.setMaxAngle = function (maxAngle) {
        this.maxAngle_ = maxAngle;
    };
    Text.prototype.setOffsetX = function (offsetX) {
        this.offsetX_ = offsetX;
    };
    Text.prototype.setOffsetY = function (offsetY) {
        this.offsetY_ = offsetY;
    };
    Text.prototype.setPlacement = function (placement) {
        this.placement_ = placement;
    };
    Text.prototype.setRotateWithView = function (rotateWithView) {
        this.rotateWithView_ = rotateWithView;
    };
    Text.prototype.setFill = function (fill) {
        this.fill_ = fill;
    };
    Text.prototype.setRotation = function (rotation) {
        this.rotation_ = rotation;
    };
    Text.prototype.setScale = function (scale) {
        this.scale_ = scale;
        this.scaleArray_ = toSize(scale !== undefined ? scale : 1);
    };
    Text.prototype.setStroke = function (stroke) {
        this.stroke_ = stroke;
    };
    Text.prototype.setText = function (text) {
        this.text_ = text;
    };
    Text.prototype.setTextAlign = function (textAlign) {
        this.textAlign_ = textAlign;
    };
    Text.prototype.setTextBaseline = function (textBaseline) {
        this.textBaseline_ = textBaseline;
    };
    Text.prototype.setBackgroundFill = function (fill) {
        this.backgroundFill_ = fill;
    };
    Text.prototype.setBackgroundStroke = function (stroke) {
        this.backgroundStroke_ = stroke;
    };
    Text.prototype.setPadding = function (padding) {
        this.padding_ = padding;
    };
    return Text;
}());
 const style_Text = (Text);
;






var RegularShapeId;

(function (RegularShapeId) {
  RegularShapeId["circle"] = "circle";
  RegularShapeId["square"] = "square";
  RegularShapeId["triangle"] = "triangle";
  RegularShapeId["star"] = "star";
  RegularShapeId["cross"] = "cross";
  RegularShapeId["x"] = "x";
})(RegularShapeId || (RegularShapeId = {}));

const MarkerShapePath = {
  circle: 'img/icons/marker/circle.svg',
  square: 'img/icons/marker/square.svg',
  triangle: 'img/icons/marker/triangle.svg',
  star: 'img/icons/marker/star.svg',
  cross: 'img/icons/marker/cross.svg',
  x: 'img/icons/marker/x-mark.svg'
};
function getFillColor(cfg) {
  const opacity = cfg.opacity == null ? 0.8 : cfg.opacity;

  if (opacity === 1) {
    return new style_Fill({
      color: cfg.color
    });
  }

  if (opacity > 0) {
    const color = tinycolor_default()(cfg.color).setAlpha(opacity).toRgbString();
    return new style_Fill({
      color
    });
  }

  return undefined;
}

const textLabel = cfg => {
  var _cfg$color;

  if (!cfg.text) {
    return undefined;
  }

  const fontFamily = grafana_runtime_src.config.theme2.typography.fontFamily;
  const textConfig = Object.assign({}, defaultStyleConfig.textConfig, cfg.textConfig);
  return new style_Text(Object.assign({
    text: cfg.text,
    fill: new style_Fill({
      color: (_cfg$color = cfg.color) !== null && _cfg$color !== void 0 ? _cfg$color : defaultStyleConfig.color.fixed
    }),
    font: `normal ${textConfig.fontSize}px ${fontFamily}`
  }, textConfig));
};

const textMarker = cfg => {
  return new style_Style({
    text: textLabel(cfg)
  });
};
const circleMarker = cfg => {
  var _cfg$lineWidth, _cfg$size;

  const stroke = new style_Stroke({
    color: cfg.color,
    width: (_cfg$lineWidth = cfg.lineWidth) !== null && _cfg$lineWidth !== void 0 ? _cfg$lineWidth : 1
  });
  return new style_Style({
    image: new Circle({
      stroke,
      fill: getFillColor(cfg),
      radius: (_cfg$size = cfg.size) !== null && _cfg$size !== void 0 ? _cfg$size : DEFAULT_SIZE
    }),
    text: textLabel(cfg),
    stroke 

  });
}; 

const polyStyle = cfg => {
  var _cfg$lineWidth2;

  return new style_Style({
    fill: getFillColor(cfg),
    stroke: new style_Stroke({
      color: cfg.color,
      width: (_cfg$lineWidth2 = cfg.lineWidth) !== null && _cfg$lineWidth2 !== void 0 ? _cfg$lineWidth2 : 1
    }),
    text: textLabel(cfg)
  });
}; 

const errorMarker = cfg => {
  var _cfg$size2;

  const radius = (_cfg$size2 = cfg.size) !== null && _cfg$size2 !== void 0 ? _cfg$size2 : DEFAULT_SIZE;
  const stroke = new style_Stroke({
    color: '#F00',
    width: 1
  });
  return [new style_Style({
    image: new style_RegularShape({
      stroke,
      points: 4,
      radius,
      angle: Math.PI / 4
    })
  }), new style_Style({
    image: new style_RegularShape({
      stroke,
      points: 4,
      radius,
      radius2: 0,
      angle: 0
    })
  })];
};

const makers = [{
  id: RegularShapeId.circle,
  name: 'Circle',
  aliasIds: [MarkerShapePath.circle],
  make: circleMarker
}, {
  id: RegularShapeId.square,
  name: 'Square',
  aliasIds: [MarkerShapePath.square],
  make: cfg => {
    var _cfg$size3, _cfg$rotation, _cfg$lineWidth3;

    const radius = (_cfg$size3 = cfg.size) !== null && _cfg$size3 !== void 0 ? _cfg$size3 : DEFAULT_SIZE;
    const rotation = (_cfg$rotation = cfg.rotation) !== null && _cfg$rotation !== void 0 ? _cfg$rotation : 0;
    return new style_Style({
      image: new style_RegularShape({
        stroke: new style_Stroke({
          color: cfg.color,
          width: (_cfg$lineWidth3 = cfg.lineWidth) !== null && _cfg$lineWidth3 !== void 0 ? _cfg$lineWidth3 : 1
        }),
        fill: getFillColor(cfg),
        points: 4,
        radius,
        rotation: rotation * Math.PI / 180 + Math.PI / 4
      }),
      text: textLabel(cfg)
    });
  }
}, {
  id: RegularShapeId.triangle,
  name: 'Triangle',
  aliasIds: [MarkerShapePath.triangle],
  make: cfg => {
    var _cfg$size4, _cfg$rotation2, _cfg$lineWidth4;

    const radius = (_cfg$size4 = cfg.size) !== null && _cfg$size4 !== void 0 ? _cfg$size4 : DEFAULT_SIZE;
    const rotation = (_cfg$rotation2 = cfg.rotation) !== null && _cfg$rotation2 !== void 0 ? _cfg$rotation2 : 0;
    return new style_Style({
      image: new style_RegularShape({
        stroke: new style_Stroke({
          color: cfg.color,
          width: (_cfg$lineWidth4 = cfg.lineWidth) !== null && _cfg$lineWidth4 !== void 0 ? _cfg$lineWidth4 : 1
        }),
        fill: getFillColor(cfg),
        points: 3,
        radius,
        rotation: rotation * Math.PI / 180,
        angle: 0
      }),
      text: textLabel(cfg)
    });
  }
}, {
  id: RegularShapeId.star,
  name: 'Star',
  aliasIds: [MarkerShapePath.star],
  make: cfg => {
    var _cfg$size5, _cfg$rotation3, _cfg$lineWidth5;

    const radius = (_cfg$size5 = cfg.size) !== null && _cfg$size5 !== void 0 ? _cfg$size5 : DEFAULT_SIZE;
    const rotation = (_cfg$rotation3 = cfg.rotation) !== null && _cfg$rotation3 !== void 0 ? _cfg$rotation3 : 0;
    return new style_Style({
      image: new style_RegularShape({
        stroke: new style_Stroke({
          color: cfg.color,
          width: (_cfg$lineWidth5 = cfg.lineWidth) !== null && _cfg$lineWidth5 !== void 0 ? _cfg$lineWidth5 : 1
        }),
        fill: getFillColor(cfg),
        points: 5,
        radius,
        radius2: radius * 0.4,
        angle: 0,
        rotation: rotation * Math.PI / 180
      }),
      text: textLabel(cfg)
    });
  }
}, {
  id: RegularShapeId.cross,
  name: 'Cross',
  aliasIds: [MarkerShapePath.cross],
  make: cfg => {
    var _cfg$size6, _cfg$rotation4, _cfg$lineWidth6;

    const radius = (_cfg$size6 = cfg.size) !== null && _cfg$size6 !== void 0 ? _cfg$size6 : DEFAULT_SIZE;
    const rotation = (_cfg$rotation4 = cfg.rotation) !== null && _cfg$rotation4 !== void 0 ? _cfg$rotation4 : 0;
    return new style_Style({
      image: new style_RegularShape({
        stroke: new style_Stroke({
          color: cfg.color,
          width: (_cfg$lineWidth6 = cfg.lineWidth) !== null && _cfg$lineWidth6 !== void 0 ? _cfg$lineWidth6 : 1
        }),
        points: 4,
        radius,
        radius2: 0,
        angle: 0,
        rotation: rotation * Math.PI / 180
      }),
      text: textLabel(cfg)
    });
  }
}, {
  id: RegularShapeId.x,
  name: 'X',
  aliasIds: [MarkerShapePath.x],
  make: cfg => {
    var _cfg$size7, _cfg$rotation5, _cfg$lineWidth7;

    const radius = (_cfg$size7 = cfg.size) !== null && _cfg$size7 !== void 0 ? _cfg$size7 : DEFAULT_SIZE;
    const rotation = (_cfg$rotation5 = cfg.rotation) !== null && _cfg$rotation5 !== void 0 ? _cfg$rotation5 : 0;
    return new style_Style({
      image: new style_RegularShape({
        stroke: new style_Stroke({
          color: cfg.color,
          width: (_cfg$lineWidth7 = cfg.lineWidth) !== null && _cfg$lineWidth7 !== void 0 ? _cfg$lineWidth7 : 1
        }),
        points: 4,
        radius,
        radius2: 0,
        rotation: rotation * Math.PI / 180 + Math.PI / 4
      }),
      text: textLabel(cfg)
    });
  }
}];

async function prepareSVG(url, size) {
  return fetch(url, {
    method: 'GET'
  }).then(res => {
    return res.text();
  }).then(text => {
    var _svg$getAttribute, _svg$getAttribute2;

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'image/svg+xml');
    const svg = doc.getElementsByTagName('svg')[0];

    if (!svg) {
      return '';
    }

    const svgSize = size !== null && size !== void 0 ? size : 100;
    const width = (_svg$getAttribute = svg.getAttribute('width')) !== null && _svg$getAttribute !== void 0 ? _svg$getAttribute : svgSize;
    const height = (_svg$getAttribute2 = svg.getAttribute('height')) !== null && _svg$getAttribute2 !== void 0 ? _svg$getAttribute2 : svgSize; 

    svg.setAttribute('fill', '#fff');
    svg.setAttribute('width', `${width}px`);
    svg.setAttribute('height', `${height}px`);
    const svgString = new XMLSerializer().serializeToString(svg);
    const svgURI = encodeURIComponent(svgString);
    return `data:image/svg+xml,${svgURI}`;
  }).catch(error => {
    console.error(error);
    return '';
  });
} 


const markerMakers = new src.Registry(() => makers);
function getMarkerAsPath(shape) {
  var _marker$aliasIds;

  const marker = markerMakers.getIfExists(shape);

  if (marker !== null && marker !== void 0 && (_marker$aliasIds = marker.aliasIds) !== null && _marker$aliasIds !== void 0 && _marker$aliasIds.length) {
    return marker.aliasIds[0];
  }

  return undefined;
} 

async function getMarkerMaker(symbol, hasTextLabel) {
  if (!symbol) {
    return hasTextLabel ? textMarker : circleMarker;
  }

  let maker = markerMakers.getIfExists(symbol);

  if (maker) {
    return maker.make;
  } 


  if (symbol.endsWith('.svg')) {
    const src = await prepareSVG((0,dimensions.t7)(symbol));
    maker = {
      id: symbol,
      name: symbol,
      aliasIds: [],
      make: src ? cfg => {
        var _cfg$size8, _cfg$rotation6, _cfg$opacity;

        const radius = (_cfg$size8 = cfg.size) !== null && _cfg$size8 !== void 0 ? _cfg$size8 : DEFAULT_SIZE;
        const rotation = (_cfg$rotation6 = cfg.rotation) !== null && _cfg$rotation6 !== void 0 ? _cfg$rotation6 : 0;
        return [new style_Style({
          image: new style_Icon({
            src,
            color: cfg.color,
            opacity: (_cfg$opacity = cfg.opacity) !== null && _cfg$opacity !== void 0 ? _cfg$opacity : 1,
            scale: (DEFAULT_SIZE + radius) / 100,
            rotation: rotation * Math.PI / 180
          }),
          text: !(cfg !== null && cfg !== void 0 && cfg.text) ? undefined : textLabel(cfg)
        }), 
        new style_Style({
          image: new style_RegularShape({
            fill: new style_Fill({
              color: 'rgba(0,0,0,0)'
            }),
            points: 4,
            radius: cfg.size,
            rotation: rotation * Math.PI / 180 + Math.PI / 4
          })
        })];
      } : errorMarker
    };
    markerMakers.register(maker);
    return maker.make;
  } 


  return errorMarker;
}
;





function styleUsesText(config) {
  var _text$fixed, _text$field;

  const text = config === null || config === void 0 ? void 0 : config.text;

  if (!text) {
    return false;
  }

  if (text.mode === dimensions.xy.Fixed && (_text$fixed = text.fixed) !== null && _text$fixed !== void 0 && _text$fixed.length) {
    return true;
  }

  if (text.mode === dimensions.xy.Field && (_text$field = text.field) !== null && _text$field !== void 0 && _text$field.length) {
    return true;
  }

  return false;
}

async function getStyleConfigState(cfg) {
  var _cfg$symbol, _cfg$color$fixed, _cfg$color, _cfg$opacity, _cfg$lineWidth, _cfg$size$fixed, _cfg$size, _cfg$rotation$fixed, _cfg$rotation, _cfg$color2, _cfg$color2$field, _cfg$size2, _cfg$size2$field, _cfg$rotation2, _cfg$rotation2$field;

  if (!cfg) {
    cfg = defaultStyleConfig;
  }

  const hasText = styleUsesText(cfg);
  const fields = {};
  const maker = await getMarkerMaker((_cfg$symbol = cfg.symbol) === null || _cfg$symbol === void 0 ? void 0 : _cfg$symbol.fixed, hasText);
  const state = {
    config: cfg,
    hasText,
    fields,
    base: {
      color: grafana_runtime_src.config.theme2.visualization.getColorByName((_cfg$color$fixed = (_cfg$color = cfg.color) === null || _cfg$color === void 0 ? void 0 : _cfg$color.fixed) !== null && _cfg$color$fixed !== void 0 ? _cfg$color$fixed : defaultStyleConfig.color.fixed),
      opacity: (_cfg$opacity = cfg.opacity) !== null && _cfg$opacity !== void 0 ? _cfg$opacity : defaultStyleConfig.opacity,
      lineWidth: (_cfg$lineWidth = cfg.lineWidth) !== null && _cfg$lineWidth !== void 0 ? _cfg$lineWidth : 1,
      size: (_cfg$size$fixed = (_cfg$size = cfg.size) === null || _cfg$size === void 0 ? void 0 : _cfg$size.fixed) !== null && _cfg$size$fixed !== void 0 ? _cfg$size$fixed : defaultStyleConfig.size.fixed,
      rotation: (_cfg$rotation$fixed = (_cfg$rotation = cfg.rotation) === null || _cfg$rotation === void 0 ? void 0 : _cfg$rotation.fixed) !== null && _cfg$rotation$fixed !== void 0 ? _cfg$rotation$fixed : defaultStyleConfig.rotation.fixed 

    },
    maker
  };

  if ((_cfg$color2 = cfg.color) !== null && _cfg$color2 !== void 0 && (_cfg$color2$field = _cfg$color2.field) !== null && _cfg$color2$field !== void 0 && _cfg$color2$field.length) {
    fields.color = cfg.color.field;
  }

  if ((_cfg$size2 = cfg.size) !== null && _cfg$size2 !== void 0 && (_cfg$size2$field = _cfg$size2.field) !== null && _cfg$size2$field !== void 0 && _cfg$size2$field.length) {
    fields.size = cfg.size.field;
  }

  if ((_cfg$rotation2 = cfg.rotation) !== null && _cfg$rotation2 !== void 0 && (_cfg$rotation2$field = _cfg$rotation2.field) !== null && _cfg$rotation2$field !== void 0 && _cfg$rotation2$field.length) {
    fields.rotation = cfg.rotation.field;
  }

  if (hasText) {
    var _cfg$text, _cfg$textConfig, _cfg$text2, _cfg$text2$field;

    state.base.text = (_cfg$text = cfg.text) === null || _cfg$text === void 0 ? void 0 : _cfg$text.fixed;
    state.base.textConfig = (_cfg$textConfig = cfg.textConfig) !== null && _cfg$textConfig !== void 0 ? _cfg$textConfig : defaultStyleConfig.textConfig;

    if ((_cfg$text2 = cfg.text) !== null && _cfg$text2 !== void 0 && (_cfg$text2$field = _cfg$text2.field) !== null && _cfg$text2$field !== void 0 && _cfg$text2$field.length) {
      fields.text = cfg.text.field;
    }
  } 


  if (!Object.keys(fields).length) {
    state.fields = undefined;
  }

  return state;
}
;











const StyleEditor = _ref => {
  var _value$size, _value$symbol2, _value$color2, _value$opacity2, _value$rotation2, _value$text, _value$textConfig$fon, _value$textConfig, _value$textConfig$off, _value$textConfig2, _value$textConfig$off2, _value$textConfig3, _value$textConfig$tex, _value$textConfig4, _value$textConfig$tex2, _value$textConfig5;

  let {
    value,
    context,
    onChange,
    item
  } = _ref;
  const settings = item.settings;

  const onSizeChange = sizeValue => {
    onChange(Object.assign({}, value, {
      size: sizeValue
    }));
  };

  const onSymbolChange = symbolValue => {
    onChange(Object.assign({}, value, {
      symbol: symbolValue
    }));
  };

  const onColorChange = colorValue => {
    onChange(Object.assign({}, value, {
      color: colorValue
    }));
  };

  const onOpacityChange = opacityValue => {
    onChange(Object.assign({}, value, {
      opacity: opacityValue
    }));
  };

  const onRotationChange = rotationValue => {
    onChange(Object.assign({}, value, {
      rotation: rotationValue
    }));
  };

  const onTextChange = textValue => {
    onChange(Object.assign({}, value, {
      text: textValue
    }));
  };

  const onTextFontSizeChange = fontSize => {
    onChange(Object.assign({}, value, {
      textConfig: Object.assign({}, value.textConfig, {
        fontSize
      })
    }));
  };

  const onTextOffsetXChange = offsetX => {
    onChange(Object.assign({}, value, {
      textConfig: Object.assign({}, value.textConfig, {
        offsetX
      })
    }));
  };

  const onTextOffsetYChange = offsetY => {
    onChange(Object.assign({}, value, {
      textConfig: Object.assign({}, value.textConfig, {
        offsetY
      })
    }));
  };

  const onTextAlignChange = textAlign => {
    onChange(Object.assign({}, value, {
      textConfig: Object.assign({}, value.textConfig, {
        textAlign: textAlign
      })
    }));
  };

  const onTextBaselineChange = textBaseline => {
    onChange(Object.assign({}, value, {
      textConfig: Object.assign({}, value.textConfig, {
        textBaseline: textBaseline
      })
    }));
  };

  let featuresHavePoints = false;

  if (settings !== null && settings !== void 0 && settings.layerInfo) {
    const propertyOptions = (0,useObservable.Z)(settings === null || settings === void 0 ? void 0 : settings.layerInfo);
    featuresHavePoints = (propertyOptions === null || propertyOptions === void 0 ? void 0 : propertyOptions.geometryType) === GeometryTypeId.Point;
  }

  const hasTextLabel = styleUsesText(value); 

  if (settings !== null && settings !== void 0 && settings.simpleFixedValues) {
    var _value$symbol, _value$rotation, _value$color$fixed, _value$color, _value$opacity;

    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [featuresHavePoints && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
          children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: 'Symbol',
            children: (0,jsx_runtime.jsx)(editors.Lv, {
              value: (_value$symbol = value === null || value === void 0 ? void 0 : value.symbol) !== null && _value$symbol !== void 0 ? _value$symbol : defaultStyleConfig.symbol,
              context: context,
              onChange: onSymbolChange,
              item: {
                settings: {
                  resourceType: 'icon',
                  folderName: types.QS.Marker,
                  placeholderText: hasTextLabel ? 'Select a symbol' : 'Select a symbol or add a text label',
                  placeholderValue: defaultStyleConfig.symbol.fixed,
                  showSourceRadio: false
                }
              }
            })
          })
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: 'Rotation angle',
          children: (0,jsx_runtime.jsx)(editors.k9, {
            value: (_value$rotation = value === null || value === void 0 ? void 0 : value.rotation) !== null && _value$rotation !== void 0 ? _value$rotation : defaultStyleConfig.rotation,
            context: context,
            onChange: onRotationChange,
            item: {
              settings: {
                min: defaultStyleConfig.rotation.min,
                max: defaultStyleConfig.rotation.max
              }
            }
          })
        })]
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Color",
          labelWidth: 10,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
            width: 4,
            children: (0,jsx_runtime.jsx)(grafana_ui_src.ColorPicker, {
              color: (_value$color$fixed = value === null || value === void 0 ? void 0 : (_value$color = value.color) === null || _value$color === void 0 ? void 0 : _value$color.fixed) !== null && _value$color$fixed !== void 0 ? _value$color$fixed : defaultStyleConfig.color.fixed,
              onChange: v => {
                onColorChange({
                  fixed: v
                });
              }
            })
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Opacity",
          labelWidth: 10,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.SliderValueEditor, {
            value: (_value$opacity = value === null || value === void 0 ? void 0 : value.opacity) !== null && _value$opacity !== void 0 ? _value$opacity : defaultStyleConfig.opacity,
            context: context,
            onChange: onOpacityChange,
            item: {
              settings: {
                min: 0,
                max: 1,
                step: 0.1
              }
            }
          })
        })
      })]
    });
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Size',
      children: (0,jsx_runtime.jsx)(editors.cL, {
        value: (_value$size = value === null || value === void 0 ? void 0 : value.size) !== null && _value$size !== void 0 ? _value$size : defaultStyleConfig.size,
        context: context,
        onChange: onSizeChange,
        item: {
          settings: {
            min: 1,
            max: 100
          }
        }
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Symbol',
      children: (0,jsx_runtime.jsx)(editors.Lv, {
        value: (_value$symbol2 = value === null || value === void 0 ? void 0 : value.symbol) !== null && _value$symbol2 !== void 0 ? _value$symbol2 : defaultStyleConfig.symbol,
        context: context,
        onChange: onSymbolChange,
        item: {
          settings: {
            resourceType: 'icon',
            folderName: types.QS.Marker,
            placeholderText: hasTextLabel ? 'Select a symbol' : 'Select a symbol or add a text label',
            placeholderValue: defaultStyleConfig.symbol.fixed,
            showSourceRadio: false
          }
        }
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Color',
      children: (0,jsx_runtime.jsx)(editors.Lm, {
        value: (_value$color2 = value === null || value === void 0 ? void 0 : value.color) !== null && _value$color2 !== void 0 ? _value$color2 : defaultStyleConfig.color,
        context: context,
        onChange: onColorChange,
        item: {}
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Fill opacity',
      children: (0,jsx_runtime.jsx)(grafana_ui_src.SliderValueEditor, {
        value: (_value$opacity2 = value === null || value === void 0 ? void 0 : value.opacity) !== null && _value$opacity2 !== void 0 ? _value$opacity2 : defaultStyleConfig.opacity,
        context: context,
        onChange: onOpacityChange,
        item: {
          settings: {
            min: 0,
            max: 1,
            step: 0.1
          }
        }
      })
    }), (settings === null || settings === void 0 ? void 0 : settings.displayRotation) && (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Rotation angle',
      children: (0,jsx_runtime.jsx)(editors.k9, {
        value: (_value$rotation2 = value === null || value === void 0 ? void 0 : value.rotation) !== null && _value$rotation2 !== void 0 ? _value$rotation2 : defaultStyleConfig.rotation,
        context: context,
        onChange: onRotationChange,
        item: {
          settings: {
            min: defaultStyleConfig.rotation.min,
            max: defaultStyleConfig.rotation.max
          }
        }
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: 'Text label',
      children: (0,jsx_runtime.jsx)(editors.$2, {
        value: (_value$text = value === null || value === void 0 ? void 0 : value.text) !== null && _value$text !== void 0 ? _value$text : types.qj,
        context: context,
        onChange: onTextChange,
        item: {}
      })
    }), hasTextLabel && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: 'Font size',
          children: (0,jsx_runtime.jsx)(grafana_ui_src.NumberValueEditor, {
            value: (_value$textConfig$fon = value === null || value === void 0 ? void 0 : (_value$textConfig = value.textConfig) === null || _value$textConfig === void 0 ? void 0 : _value$textConfig.fontSize) !== null && _value$textConfig$fon !== void 0 ? _value$textConfig$fon : defaultStyleConfig.textConfig.fontSize,
            context: context,
            onChange: onTextFontSizeChange,
            item: {}
          })
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: 'X offset',
          children: (0,jsx_runtime.jsx)(grafana_ui_src.NumberValueEditor, {
            value: (_value$textConfig$off = value === null || value === void 0 ? void 0 : (_value$textConfig2 = value.textConfig) === null || _value$textConfig2 === void 0 ? void 0 : _value$textConfig2.offsetX) !== null && _value$textConfig$off !== void 0 ? _value$textConfig$off : defaultStyleConfig.textConfig.offsetX,
            context: context,
            onChange: onTextOffsetXChange,
            item: {}
          })
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: 'Y offset',
          children: (0,jsx_runtime.jsx)(grafana_ui_src.NumberValueEditor, {
            value: (_value$textConfig$off2 = value === null || value === void 0 ? void 0 : (_value$textConfig3 = value.textConfig) === null || _value$textConfig3 === void 0 ? void 0 : _value$textConfig3.offsetY) !== null && _value$textConfig$off2 !== void 0 ? _value$textConfig$off2 : defaultStyleConfig.textConfig.offsetY,
            context: context,
            onChange: onTextOffsetYChange,
            item: {}
          })
        })]
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: 'Align',
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          value: (_value$textConfig$tex = value === null || value === void 0 ? void 0 : (_value$textConfig4 = value.textConfig) === null || _value$textConfig4 === void 0 ? void 0 : _value$textConfig4.textAlign) !== null && _value$textConfig$tex !== void 0 ? _value$textConfig$tex : defaultStyleConfig.textConfig.textAlign,
          onChange: onTextAlignChange,
          options: [{
            value: TextAlignment.Left,
            label: (0,lodash.capitalize)(TextAlignment.Left)
          }, {
            value: TextAlignment.Center,
            label: (0,lodash.capitalize)(TextAlignment.Center)
          }, {
            value: TextAlignment.Right,
            label: (0,lodash.capitalize)(TextAlignment.Right)
          }]
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: 'Baseline',
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          value: (_value$textConfig$tex2 = value === null || value === void 0 ? void 0 : (_value$textConfig5 = value.textConfig) === null || _value$textConfig5 === void 0 ? void 0 : _value$textConfig5.textBaseline) !== null && _value$textConfig$tex2 !== void 0 ? _value$textConfig$tex2 : defaultStyleConfig.textConfig.textBaseline,
          onChange: onTextBaselineChange,
          options: [{
            value: TextBaseline.Top,
            label: (0,lodash.capitalize)(TextBaseline.Top)
          }, {
            value: TextBaseline.Middle,
            label: (0,lodash.capitalize)(TextBaseline.Middle)
          }, {
            value: TextBaseline.Bottom,
            label: (0,lodash.capitalize)(TextBaseline.Bottom)
          }]
        })
      })]
    })]
  });
};
var Feature = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/Feature.js");
;




var RBush =  (function () {
    function RBush(opt_maxEntries) {
        this.rbush_ = new rbush_min(opt_maxEntries);
        this.items_ = {};
    }
    RBush.prototype.insert = function (extent, value) {
        var item = {
            minX: extent[0],
            minY: extent[1],
            maxX: extent[2],
            maxY: extent[3],
            value: value,
        };
        this.rbush_.insert(item);
        this.items_[(0,util.sq)(value)] = item;
    };
    RBush.prototype.load = function (extents, values) {
        var items = new Array(values.length);
        for (var i = 0, l = values.length; i < l; i++) {
            var extent = extents[i];
            var value = values[i];
            var item = {
                minX: extent[0],
                minY: extent[1],
                maxX: extent[2],
                maxY: extent[3],
                value: value,
            };
            items[i] = item;
            this.items_[(0,util.sq)(value)] = item;
        }
        this.rbush_.load(items);
    };
    RBush.prototype.remove = function (value) {
        var uid = (0,util.sq)(value);
        var item = this.items_[uid];
        delete this.items_[uid];
        return this.rbush_.remove(item) !== null;
    };
    RBush.prototype.update = function (extent, value) {
        var item = this.items_[(0,util.sq)(value)];
        var bbox = [item.minX, item.minY, item.maxX, item.maxY];
        if (!(0,ol_extent.fS)(bbox, extent)) {
            this.remove(value);
            this.insert(extent, value);
        }
    };
    RBush.prototype.getAll = function () {
        var items = this.rbush_.all();
        return items.map(function (item) {
            return item.value;
        });
    };
    RBush.prototype.getInExtent = function (extent) {
        var bbox = {
            minX: extent[0],
            minY: extent[1],
            maxX: extent[2],
            maxY: extent[3],
        };
        var items = this.rbush_.search(bbox);
        return items.map(function (item) {
            return item.value;
        });
    };
    RBush.prototype.forEach = function (callback) {
        return this.forEach_(this.getAll(), callback);
    };
    RBush.prototype.forEachInExtent = function (extent, callback) {
        return this.forEach_(this.getInExtent(extent), callback);
    };
    RBush.prototype.forEach_ = function (values, callback) {
        var result;
        for (var i = 0, l = values.length; i < l; i++) {
            result = callback(values[i]);
            if (result) {
                return result;
            }
        }
        return result;
    };
    RBush.prototype.isEmpty = function () {
        return (0,obj.xb)(this.items_);
    };
    RBush.prototype.clear = function () {
        this.rbush_.clear();
        this.items_ = {};
    };
    RBush.prototype.getExtent = function (opt_extent) {
        var data = this.rbush_.toJSON();
        return (0,ol_extent.T9)(data.minX, data.minY, data.maxX, data.maxY, opt_extent);
    };
    RBush.prototype.concat = function (rbush) {
        this.rbush_.load(rbush.rbush_.all());
        for (var i in rbush.items_) {
            this.items_[i] = rbush.items_[i];
        }
    };
    return RBush;
}());
 const structs_RBush = (RBush);
;
var Source_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Source =  (function (_super) {
    Source_extends(Source, _super);
    function Source(options) {
        var _this = _super.call(this) || this;
        _this.projection = (0,ol_proj.U2)(options.projection);
        _this.attributions_ = adaptAttributions(options.attributions);
        _this.attributionsCollapsible_ =
            options.attributionsCollapsible !== undefined
                ? options.attributionsCollapsible
                : true;
        _this.loading = false;
        _this.state_ =
            options.state !== undefined ? options.state : State.READY;
        _this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
        _this.interpolate_ = !!options.interpolate;
        _this.viewResolver = null;
        _this.viewRejector = null;
        var self = _this;
        _this.viewPromise_ = new Promise(function (resolve, reject) {
            self.viewResolver = resolve;
            self.viewRejector = reject;
        });
        return _this;
    }
    Source.prototype.getAttributions = function () {
        return this.attributions_;
    };
    Source.prototype.getAttributionsCollapsible = function () {
        return this.attributionsCollapsible_;
    };
    Source.prototype.getProjection = function () {
        return this.projection;
    };
    Source.prototype.getResolutions = function () {
        return (0,util.O3)();
    };
    Source.prototype.getView = function () {
        return this.viewPromise_;
    };
    Source.prototype.getState = function () {
        return this.state_;
    };
    Source.prototype.getWrapX = function () {
        return this.wrapX_;
    };
    Source.prototype.getInterpolate = function () {
        return this.interpolate_;
    };
    Source.prototype.refresh = function () {
        this.changed();
    };
    Source.prototype.setAttributions = function (attributions) {
        this.attributions_ = adaptAttributions(attributions);
        this.changed();
    };
    Source.prototype.setState = function (state) {
        this.state_ = state;
        this.changed();
    };
    return Source;
}(ol_Object.Z));
function adaptAttributions(attributionLike) {
    if (!attributionLike) {
        return null;
    }
    if (Array.isArray(attributionLike)) {
        return function (frameState) {
            return attributionLike;
        };
    }
    if (typeof attributionLike === 'function') {
        return attributionLike;
    }
    return function (frameState) {
        return [attributionLike];
    };
}
 const source_Source = (Source);
;
 const VectorEventType = ({
    ADDFEATURE: 'addfeature',
    CHANGEFEATURE: 'changefeature',
    CLEAR: 'clear',
    REMOVEFEATURE: 'removefeature',
    FEATURESLOADSTART: 'featuresloadstart',
    FEATURESLOADEND: 'featuresloadend',
    FEATURESLOADERROR: 'featuresloaderror',
});
;

function loadingstrategy_all(extent, resolution) {
    return [[-Infinity, -Infinity, Infinity, Infinity]];
}
function bbox(extent, resolution) {
    return [extent];
}
function tile(tileGrid) {
    return (
    function (extent, resolution, projection) {
        var z = tileGrid.getZForResolution(fromUserResolution(resolution, projection));
        var tileRange = tileGrid.getTileRangeForExtentAndZ(fromUserExtent(extent, projection), z);
        var extents = [];
        var tileCoord = [z, 0, 0];
        for (tileCoord[1] = tileRange.minX; tileCoord[1] <= tileRange.maxX; ++tileCoord[1]) {
            for (tileCoord[2] = tileRange.minY; tileCoord[2] <= tileRange.maxY; ++tileCoord[2]) {
                extents.push(toUserExtent(tileGrid.getTileCoordExtent(tileCoord), projection));
            }
        }
        return extents;
    });
}
var FormatType = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/format/FormatType.js");
;


var withCredentials = false;
function loadFeaturesXhr(url, format, extent, resolution, projection, success, failure) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', typeof url === 'function' ? url(extent, resolution, projection) : url, true);
    if (format.getType() == FormatType.Z.ARRAY_BUFFER) {
        xhr.responseType = 'arraybuffer';
    }
    xhr.withCredentials = withCredentials;
    xhr.onload = function (event) {
        if (!xhr.status || (xhr.status >= 200 && xhr.status < 300)) {
            var type = format.getType();
            var source = void 0;
            if (type == FormatType.Z.JSON || type == FormatType.Z.TEXT) {
                source = xhr.responseText;
            }
            else if (type == FormatType.Z.XML) {
                source = xhr.responseXML;
                if (!source) {
                    source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
                }
            }
            else if (type == FormatType.Z.ARRAY_BUFFER) {
                source =  (xhr.response);
            }
            if (source) {
                success(
                (format.readFeatures(source, {
                    extent: extent,
                    featureProjection: projection,
                })), format.readProjection(source));
            }
            else {
                failure();
            }
        }
        else {
            failure();
        }
    };
    xhr.onerror = failure;
    xhr.send();
}
function xhr(url, format) {
    return function (extent, resolution, projection, success, failure) {
        var source =  (this);
        loadFeaturesXhr(url, format, extent, resolution, projection, 
        function (features, dataProjection) {
            source.addFeatures(features);
            if (success !== undefined) {
                success(features);
            }
        }, 
 failure ? failure : functions.Zn);
    };
}
function setWithCredentials(xhrWithCredentials) {
    withCredentials = xhrWithCredentials;
}
;
var source_Vector_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


















var VectorSourceEvent =  (function (_super) {
    source_Vector_extends(VectorSourceEvent, _super);
    function VectorSourceEvent(type, opt_feature, opt_features) {
        var _this = _super.call(this, type) || this;
        _this.feature = opt_feature;
        _this.features = opt_features;
        return _this;
    }
    return VectorSourceEvent;
}(Event.ZP));

var VectorSource =  (function (_super) {
    source_Vector_extends(VectorSource, _super);
    function VectorSource(opt_options) {
        var _this = this;
        var options = opt_options || {};
        _this = _super.call(this, {
            attributions: options.attributions,
            interpolate: true,
            projection: undefined,
            state: State.READY,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
        }) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.loader_ = functions.Zn;
        _this.format_ = options.format;
        _this.overlaps_ = options.overlaps === undefined ? true : options.overlaps;
        _this.url_ = options.url;
        if (options.loader !== undefined) {
            _this.loader_ = options.loader;
        }
        else if (_this.url_ !== undefined) {
            (0,asserts.h)(_this.format_, 7); 
            _this.loader_ = xhr(_this.url_, 
 (_this.format_));
        }
        _this.strategy_ =
            options.strategy !== undefined ? options.strategy : loadingstrategy_all;
        var useSpatialIndex = options.useSpatialIndex !== undefined ? options.useSpatialIndex : true;
        _this.featuresRtree_ = useSpatialIndex ? new structs_RBush() : null;
        _this.loadedExtentsRtree_ = new structs_RBush();
        _this.loadingExtentsCount_ = 0;
        _this.nullGeometryFeatures_ = {};
        _this.idIndex_ = {};
        _this.uidIndex_ = {};
        _this.featureChangeKeys_ = {};
        _this.featuresCollection_ = null;
        var collection, features;
        if (Array.isArray(options.features)) {
            features =
 (options.features);
        }
        else if (options.features) {
            collection =
 (options.features);
            features = collection.getArray();
        }
        if (!useSpatialIndex && collection === undefined) {
            collection = new ol_Collection(features);
        }
        if (features !== undefined) {
            _this.addFeaturesInternal(features);
        }
        if (collection !== undefined) {
            _this.bindFeaturesCollection_(collection);
        }
        return _this;
    }
    VectorSource.prototype.addFeature = function (feature) {
        this.addFeatureInternal(feature);
        this.changed();
    };
    VectorSource.prototype.addFeatureInternal = function (feature) {
        var featureKey = (0,util.sq)(feature);
        if (!this.addToIndex_(featureKey, feature)) {
            if (this.featuresCollection_) {
                this.featuresCollection_.remove(feature);
            }
            return;
        }
        this.setupChangeEvents_(featureKey, feature);
        var geometry = feature.getGeometry();
        if (geometry) {
            var extent = geometry.getExtent();
            if (this.featuresRtree_) {
                this.featuresRtree_.insert(extent, feature);
            }
        }
        else {
            this.nullGeometryFeatures_[featureKey] = feature;
        }
        this.dispatchEvent(new VectorSourceEvent(VectorEventType.ADDFEATURE, feature));
    };
    VectorSource.prototype.setupChangeEvents_ = function (featureKey, feature) {
        this.featureChangeKeys_[featureKey] = [
            (0,events.oL)(feature, EventType.Z.CHANGE, this.handleFeatureChange_, this),
            (0,events.oL)(feature, ObjectEventType.Z.PROPERTYCHANGE, this.handleFeatureChange_, this),
        ];
    };
    VectorSource.prototype.addToIndex_ = function (featureKey, feature) {
        var valid = true;
        var id = feature.getId();
        if (id !== undefined) {
            if (!(id.toString() in this.idIndex_)) {
                this.idIndex_[id.toString()] = feature;
            }
            else {
                valid = false;
            }
        }
        if (valid) {
            (0,asserts.h)(!(featureKey in this.uidIndex_), 30); 
            this.uidIndex_[featureKey] = feature;
        }
        return valid;
    };
    VectorSource.prototype.addFeatures = function (features) {
        this.addFeaturesInternal(features);
        this.changed();
    };
    VectorSource.prototype.addFeaturesInternal = function (features) {
        var extents = [];
        var newFeatures = [];
        var geometryFeatures = [];
        for (var i = 0, length_1 = features.length; i < length_1; i++) {
            var feature = features[i];
            var featureKey = (0,util.sq)(feature);
            if (this.addToIndex_(featureKey, feature)) {
                newFeatures.push(feature);
            }
        }
        for (var i = 0, length_2 = newFeatures.length; i < length_2; i++) {
            var feature = newFeatures[i];
            var featureKey = (0,util.sq)(feature);
            this.setupChangeEvents_(featureKey, feature);
            var geometry = feature.getGeometry();
            if (geometry) {
                var extent = geometry.getExtent();
                extents.push(extent);
                geometryFeatures.push(feature);
            }
            else {
                this.nullGeometryFeatures_[featureKey] = feature;
            }
        }
        if (this.featuresRtree_) {
            this.featuresRtree_.load(extents, geometryFeatures);
        }
        if (this.hasListener(VectorEventType.ADDFEATURE)) {
            for (var i = 0, length_3 = newFeatures.length; i < length_3; i++) {
                this.dispatchEvent(new VectorSourceEvent(VectorEventType.ADDFEATURE, newFeatures[i]));
            }
        }
    };
    VectorSource.prototype.bindFeaturesCollection_ = function (collection) {
        var modifyingCollection = false;
        this.addEventListener(VectorEventType.ADDFEATURE, 
        function (evt) {
            if (!modifyingCollection) {
                modifyingCollection = true;
                collection.push(evt.feature);
                modifyingCollection = false;
            }
        });
        this.addEventListener(VectorEventType.REMOVEFEATURE, 
        function (evt) {
            if (!modifyingCollection) {
                modifyingCollection = true;
                collection.remove(evt.feature);
                modifyingCollection = false;
            }
        });
        collection.addEventListener(CollectionEventType.ADD, 
        function (evt) {
            if (!modifyingCollection) {
                modifyingCollection = true;
                this.addFeature(
 (evt.element));
                modifyingCollection = false;
            }
        }.bind(this));
        collection.addEventListener(CollectionEventType.REMOVE, 
        function (evt) {
            if (!modifyingCollection) {
                modifyingCollection = true;
                this.removeFeature(
 (evt.element));
                modifyingCollection = false;
            }
        }.bind(this));
        this.featuresCollection_ = collection;
    };
    VectorSource.prototype.clear = function (opt_fast) {
        if (opt_fast) {
            for (var featureId in this.featureChangeKeys_) {
                var keys = this.featureChangeKeys_[featureId];
                keys.forEach(events.bN);
            }
            if (!this.featuresCollection_) {
                this.featureChangeKeys_ = {};
                this.idIndex_ = {};
                this.uidIndex_ = {};
            }
        }
        else {
            if (this.featuresRtree_) {
                var removeAndIgnoreReturn = function (feature) {
                    this.removeFeatureInternal(feature);
                }.bind(this);
                this.featuresRtree_.forEach(removeAndIgnoreReturn);
                for (var id in this.nullGeometryFeatures_) {
                    this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
                }
            }
        }
        if (this.featuresCollection_) {
            this.featuresCollection_.clear();
        }
        if (this.featuresRtree_) {
            this.featuresRtree_.clear();
        }
        this.nullGeometryFeatures_ = {};
        var clearEvent = new VectorSourceEvent(VectorEventType.CLEAR);
        this.dispatchEvent(clearEvent);
        this.changed();
    };
    VectorSource.prototype.forEachFeature = function (callback) {
        if (this.featuresRtree_) {
            return this.featuresRtree_.forEach(callback);
        }
        else if (this.featuresCollection_) {
            this.featuresCollection_.forEach(callback);
        }
    };
    VectorSource.prototype.forEachFeatureAtCoordinateDirect = function (coordinate, callback) {
        var extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
        return this.forEachFeatureInExtent(extent, function (feature) {
            var geometry = feature.getGeometry();
            if (geometry.intersectsCoordinate(coordinate)) {
                return callback(feature);
            }
            else {
                return undefined;
            }
        });
    };
    VectorSource.prototype.forEachFeatureInExtent = function (extent, callback) {
        if (this.featuresRtree_) {
            return this.featuresRtree_.forEachInExtent(extent, callback);
        }
        else if (this.featuresCollection_) {
            this.featuresCollection_.forEach(callback);
        }
    };
    VectorSource.prototype.forEachFeatureIntersectingExtent = function (extent, callback) {
        return this.forEachFeatureInExtent(extent, 
        function (feature) {
            var geometry = feature.getGeometry();
            if (geometry.intersectsExtent(extent)) {
                var result = callback(feature);
                if (result) {
                    return result;
                }
            }
        });
    };
    VectorSource.prototype.getFeaturesCollection = function () {
        return this.featuresCollection_;
    };
    VectorSource.prototype.getFeatures = function () {
        var features;
        if (this.featuresCollection_) {
            features = this.featuresCollection_.getArray().slice(0);
        }
        else if (this.featuresRtree_) {
            features = this.featuresRtree_.getAll();
            if (!(0,obj.xb)(this.nullGeometryFeatures_)) {
                (0,array.l7)(features, (0,obj.KX)(this.nullGeometryFeatures_));
            }
        }
        return  (features);
    };
    VectorSource.prototype.getFeaturesAtCoordinate = function (coordinate) {
        var features = [];
        this.forEachFeatureAtCoordinateDirect(coordinate, function (feature) {
            features.push(feature);
        });
        return features;
    };
    VectorSource.prototype.getFeaturesInExtent = function (extent) {
        if (this.featuresRtree_) {
            return this.featuresRtree_.getInExtent(extent);
        }
        else if (this.featuresCollection_) {
            return this.featuresCollection_.getArray().slice(0);
        }
        else {
            return [];
        }
    };
    VectorSource.prototype.getClosestFeatureToCoordinate = function (coordinate, opt_filter) {
        var x = coordinate[0];
        var y = coordinate[1];
        var closestFeature = null;
        var closestPoint = [NaN, NaN];
        var minSquaredDistance = Infinity;
        var extent = [-Infinity, -Infinity, Infinity, Infinity];
        var filter = opt_filter ? opt_filter : functions.uX;
        this.featuresRtree_.forEachInExtent(extent, 
        function (feature) {
            if (filter(feature)) {
                var geometry = feature.getGeometry();
                var previousMinSquaredDistance = minSquaredDistance;
                minSquaredDistance = geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);
                if (minSquaredDistance < previousMinSquaredDistance) {
                    closestFeature = feature;
                    var minDistance = Math.sqrt(minSquaredDistance);
                    extent[0] = x - minDistance;
                    extent[1] = y - minDistance;
                    extent[2] = x + minDistance;
                    extent[3] = y + minDistance;
                }
            }
        });
        return closestFeature;
    };
    VectorSource.prototype.getExtent = function (opt_extent) {
        return this.featuresRtree_.getExtent(opt_extent);
    };
    VectorSource.prototype.getFeatureById = function (id) {
        var feature = this.idIndex_[id.toString()];
        return feature !== undefined ? feature : null;
    };
    VectorSource.prototype.getFeatureByUid = function (uid) {
        var feature = this.uidIndex_[uid];
        return feature !== undefined ? feature : null;
    };
    VectorSource.prototype.getFormat = function () {
        return this.format_;
    };
    VectorSource.prototype.getOverlaps = function () {
        return this.overlaps_;
    };
    VectorSource.prototype.getUrl = function () {
        return this.url_;
    };
    VectorSource.prototype.handleFeatureChange_ = function (event) {
        var feature =  (event.target);
        var featureKey = (0,util.sq)(feature);
        var geometry = feature.getGeometry();
        if (!geometry) {
            if (!(featureKey in this.nullGeometryFeatures_)) {
                if (this.featuresRtree_) {
                    this.featuresRtree_.remove(feature);
                }
                this.nullGeometryFeatures_[featureKey] = feature;
            }
        }
        else {
            var extent = geometry.getExtent();
            if (featureKey in this.nullGeometryFeatures_) {
                delete this.nullGeometryFeatures_[featureKey];
                if (this.featuresRtree_) {
                    this.featuresRtree_.insert(extent, feature);
                }
            }
            else {
                if (this.featuresRtree_) {
                    this.featuresRtree_.update(extent, feature);
                }
            }
        }
        var id = feature.getId();
        if (id !== undefined) {
            var sid = id.toString();
            if (this.idIndex_[sid] !== feature) {
                this.removeFromIdIndex_(feature);
                this.idIndex_[sid] = feature;
            }
        }
        else {
            this.removeFromIdIndex_(feature);
            this.uidIndex_[featureKey] = feature;
        }
        this.changed();
        this.dispatchEvent(new VectorSourceEvent(VectorEventType.CHANGEFEATURE, feature));
    };
    VectorSource.prototype.hasFeature = function (feature) {
        var id = feature.getId();
        if (id !== undefined) {
            return id in this.idIndex_;
        }
        else {
            return (0,util.sq)(feature) in this.uidIndex_;
        }
    };
    VectorSource.prototype.isEmpty = function () {
        if (this.featuresRtree_) {
            return (this.featuresRtree_.isEmpty() && (0,obj.xb)(this.nullGeometryFeatures_));
        }
        if (this.featuresCollection_) {
            return this.featuresCollection_.getLength() === 0;
        }
        return true;
    };
    VectorSource.prototype.loadFeatures = function (extent, resolution, projection) {
        var loadedExtentsRtree = this.loadedExtentsRtree_;
        var extentsToLoad = this.strategy_(extent, resolution, projection);
        var _loop_1 = function (i, ii) {
            var extentToLoad = extentsToLoad[i];
            var alreadyLoaded = loadedExtentsRtree.forEachInExtent(extentToLoad, 
            function (object) {
                return (0,ol_extent.r4)(object.extent, extentToLoad);
            });
            if (!alreadyLoaded) {
                ++this_1.loadingExtentsCount_;
                this_1.dispatchEvent(new VectorSourceEvent(VectorEventType.FEATURESLOADSTART));
                this_1.loader_.call(this_1, extentToLoad, resolution, projection, function (features) {
                    --this.loadingExtentsCount_;
                    this.dispatchEvent(new VectorSourceEvent(VectorEventType.FEATURESLOADEND, undefined, features));
                }.bind(this_1), function () {
                    --this.loadingExtentsCount_;
                    this.dispatchEvent(new VectorSourceEvent(VectorEventType.FEATURESLOADERROR));
                }.bind(this_1));
                loadedExtentsRtree.insert(extentToLoad, { extent: extentToLoad.slice() });
            }
        };
        var this_1 = this;
        for (var i = 0, ii = extentsToLoad.length; i < ii; ++i) {
            _loop_1(i, ii);
        }
        this.loading =
            this.loader_.length < 4 ? false : this.loadingExtentsCount_ > 0;
    };
    VectorSource.prototype.refresh = function () {
        this.clear(true);
        this.loadedExtentsRtree_.clear();
        _super.prototype.refresh.call(this);
    };
    VectorSource.prototype.removeLoadedExtent = function (extent) {
        var loadedExtentsRtree = this.loadedExtentsRtree_;
        var obj;
        loadedExtentsRtree.forEachInExtent(extent, function (object) {
            if ((0,ol_extent.fS)(object.extent, extent)) {
                obj = object;
                return true;
            }
        });
        if (obj) {
            loadedExtentsRtree.remove(obj);
        }
    };
    VectorSource.prototype.removeFeature = function (feature) {
        if (!feature) {
            return;
        }
        var featureKey = (0,util.sq)(feature);
        if (featureKey in this.nullGeometryFeatures_) {
            delete this.nullGeometryFeatures_[featureKey];
        }
        else {
            if (this.featuresRtree_) {
                this.featuresRtree_.remove(feature);
            }
        }
        var result = this.removeFeatureInternal(feature);
        if (result) {
            this.changed();
        }
    };
    VectorSource.prototype.removeFeatureInternal = function (feature) {
        var featureKey = (0,util.sq)(feature);
        var featureChangeKeys = this.featureChangeKeys_[featureKey];
        if (!featureChangeKeys) {
            return;
        }
        featureChangeKeys.forEach(events.bN);
        delete this.featureChangeKeys_[featureKey];
        var id = feature.getId();
        if (id !== undefined) {
            delete this.idIndex_[id.toString()];
        }
        delete this.uidIndex_[featureKey];
        this.dispatchEvent(new VectorSourceEvent(VectorEventType.REMOVEFEATURE, feature));
        return feature;
    };
    VectorSource.prototype.removeFromIdIndex_ = function (feature) {
        var removed = false;
        for (var id in this.idIndex_) {
            if (this.idIndex_[id] === feature) {
                delete this.idIndex_[id];
                removed = true;
                break;
            }
        }
        return removed;
    };
    VectorSource.prototype.setLoader = function (loader) {
        this.loader_ = loader;
    };
    VectorSource.prototype.setUrl = function (url) {
        (0,asserts.h)(this.format_, 7); 
        this.url_ = url;
        this.setLoader(xhr(url, this.format_));
    };
    return VectorSource;
}(source_Source));
 const source_Vector = (VectorSource);
;



class FrameVectorSource extends source_Vector {
  constructor(location) {
    super({});
    this.location = location;
    this.location = location;
  }

  update(frame) {
    this.clear(true);
    const info = (0,utils_location.g6)(frame, this.location);

    if (!info.field) {
      this.changed();
      return;
    }

    for (let i = 0; i < frame.length; i++) {
      this.addFeatureInternal(new Feature.Z({
        frame,
        rowIndex: i,
        geometry: info.field.values.get(i)
      }));
    } 


    this.changed();
  }

}
;














const defaultOptions = {
  style: defaultStyleConfig,
  showLegend: true
};
const MARKERS_LAYER_ID = 'markers'; 

const defaultMarkersConfig = {
  type: MARKERS_LAYER_ID,
  name: '',
  config: defaultOptions,
  location: {
    mode: src.FrameGeometrySourceMode.Auto
  },
  tooltip: true
};

const markersLayer = {
  id: MARKERS_LAYER_ID,
  name: 'Markers',
  description: 'Use markers to render each data point',
  isBaseMap: false,
  showLocation: true,

  create: async (map, options, theme) => {
    const config = Object.assign({}, defaultOptions, options === null || options === void 0 ? void 0 : options.config);
    const style = await getStyleConfigState(config.style);
    const location = await (0,utils_location.cJ)(options.location);
    const source = new FrameVectorSource(location);
    const vectorLayer = new Vector({
      source
    });
    const legendProps = new ReplaySubject.t(1);
    let legend = null;

    if (config.showLegend) {
      legend = (0,jsx_runtime.jsx)(ObservablePropsWrapper, {
        watch: legendProps,
        initialSubProps: {},
        child: MarkersLegend
      });
    }

    if (!style.fields) {
      vectorLayer.setStyle(style.maker(style.base));
    } else {
      vectorLayer.setStyle(feature => {
        const idx = feature.get('rowIndex');
        const dims = style.dims;

        if (!dims || !(0,lodash.isNumber)(idx)) {
          return style.maker(style.base);
        }

        const values = Object.assign({}, style.base);

        if (dims.color) {
          values.color = dims.color.get(idx);
        }

        if (dims.size) {
          values.size = dims.size.get(idx);
        }

        if (dims.text) {
          values.text = dims.text.get(idx);
        }

        if (dims.rotation) {
          values.rotation = dims.rotation.get(idx);
        }

        return style.maker(values);
      });
    }

    return {
      init: () => vectorLayer,
      legend: legend,
      update: data => {
        var _data$series;

        if (!((_data$series = data.series) !== null && _data$series !== void 0 && _data$series.length)) {
          source.clear();
          return; 
        }

        for (const frame of data.series) {
          if (style.fields) {
            const dims = {};

            if (style.fields.color) {
              var _style$config$color;

              dims.color = (0,dimensions.PX)(frame, (_style$config$color = style.config.color) !== null && _style$config$color !== void 0 ? _style$config$color : defaultStyleConfig.color, theme);
            }

            if (style.fields.size) {
              var _style$config$size;

              dims.size = (0,dimensions.W8)(frame, (_style$config$size = style.config.size) !== null && _style$config$size !== void 0 ? _style$config$size : defaultStyleConfig.size);
            }

            if (style.fields.text) {
              dims.text = (0,dimensions.Bw)(frame, style.config.text);
            }

            if (style.fields.rotation) {
              var _style$config$rotatio;

              dims.rotation = (0,dimensions.yq)(frame, (_style$config$rotatio = style.config.rotation) !== null && _style$config$rotatio !== void 0 ? _style$config$rotatio : defaultStyleConfig.rotation);
            }

            style.dims = dims;
          } 


          if (legend) {
            var _style$dims;

            legendProps.next({
              styleConfig: style,
              size: (_style$dims = style.dims) === null || _style$dims === void 0 ? void 0 : _style$dims.size,
              layerName: options.name,
              layer: vectorLayer
            });
          }

          source.update(frame);
          break; 
        }
      },
      registerOptionsUI: builder => {
        builder.addCustomEditor({
          id: 'config.style',
          path: 'config.style',
          name: 'Styles',
          editor: StyleEditor,
          settings: {
            displayRotation: true
          },
          defaultValue: defaultOptions.style
        }).addBooleanSwitch({
          path: 'config.showLegend',
          name: 'Show legend',
          description: 'Show map legend',
          defaultValue: defaultOptions.showLegend
        });
      }
    };
  },
  defaultOptions
};
;
 const TileProperty = ({
    PRELOAD: 'preload',
    USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError',
});
;
var BaseTile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BaseTileLayer =  (function (_super) {
    BaseTile_extends(BaseTileLayer, _super);
    function BaseTileLayer(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var baseOptions = (0,obj.f0)({}, options);
        delete baseOptions.preload;
        delete baseOptions.useInterimTilesOnError;
        _this = _super.call(this, baseOptions) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.setPreload(options.preload !== undefined ? options.preload : 0);
        _this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined
            ? options.useInterimTilesOnError
            : true);
        return _this;
    }
    BaseTileLayer.prototype.getPreload = function () {
        return  (this.get(TileProperty.PRELOAD));
    };
    BaseTileLayer.prototype.setPreload = function (preload) {
        this.set(TileProperty.PRELOAD, preload);
    };
    BaseTileLayer.prototype.getUseInterimTilesOnError = function () {
        return  (this.get(TileProperty.USE_INTERIM_TILES_ON_ERROR));
    };
    BaseTileLayer.prototype.setUseInterimTilesOnError = function (useInterimTilesOnError) {
        this.set(TileProperty.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    };
    BaseTileLayer.prototype.getData = function (pixel) {
        return _super.prototype.getData.call(this, pixel);
    };
    return BaseTileLayer;
}(layer_Layer));
 const BaseTile = (BaseTileLayer);
;
var Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Tile =  (function (_super) {
    Tile_extends(Tile, _super);
    function Tile(tileCoord, state, opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        _this.tileCoord = tileCoord;
        _this.state = state;
        _this.interimTile = null;
        _this.key = '';
        _this.transition_ =
            options.transition === undefined ? 250 : options.transition;
        _this.transitionStarts_ = {};
        _this.interpolate = !!options.interpolate;
        return _this;
    }
    Tile.prototype.changed = function () {
        this.dispatchEvent(EventType.Z.CHANGE);
    };
    Tile.prototype.release = function () { };
    Tile.prototype.getKey = function () {
        return this.key + '/' + this.tileCoord;
    };
    Tile.prototype.getInterimTile = function () {
        if (!this.interimTile) {
            return this;
        }
        var tile = this.interimTile;
        do {
            if (tile.getState() == TileState.LOADED) {
                this.transition_ = 0;
                return tile;
            }
            tile = tile.interimTile;
        } while (tile);
        return this;
    };
    Tile.prototype.refreshInterimChain = function () {
        if (!this.interimTile) {
            return;
        }
        var tile = this.interimTile;
        var prev = this;
        do {
            if (tile.getState() == TileState.LOADED) {
                tile.interimTile = null;
                break;
            }
            else if (tile.getState() == TileState.LOADING) {
                prev = tile;
            }
            else if (tile.getState() == TileState.IDLE) {
                prev.interimTile = tile.interimTile;
            }
            else {
                prev = tile;
            }
            tile = prev.interimTile;
        } while (tile);
    };
    Tile.prototype.getTileCoord = function () {
        return this.tileCoord;
    };
    Tile.prototype.getState = function () {
        return this.state;
    };
    Tile.prototype.setState = function (state) {
        if (this.state !== TileState.ERROR && this.state > state) {
            throw new Error('Tile load sequence violation');
        }
        this.state = state;
        this.changed();
    };
    Tile.prototype.load = function () {
        (0,util.O3)();
    };
    Tile.prototype.getAlpha = function (id, time) {
        if (!this.transition_) {
            return 1;
        }
        var start = this.transitionStarts_[id];
        if (!start) {
            start = time;
            this.transitionStarts_[id] = start;
        }
        else if (start === -1) {
            return 1;
        }
        var delta = time - start + 1000 / 60; 
        if (delta >= this.transition_) {
            return 1;
        }
        return easeIn(delta / this.transition_);
    };
    Tile.prototype.inTransition = function (id) {
        if (!this.transition_) {
            return false;
        }
        return this.transitionStarts_[id] !== -1;
    };
    Tile.prototype.endTransition = function (id) {
        if (this.transition_) {
            this.transitionStarts_[id] = -1;
        }
    };
    return Tile;
}(Target.Z));
 const ol_Tile = (Tile);
;
var ImageTile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ImageTile =  (function (_super) {
    ImageTile_extends(ImageTile, _super);
    function ImageTile(tileCoord, state, src, crossOrigin, tileLoadFunction, opt_options) {
        var _this = _super.call(this, tileCoord, state, opt_options) || this;
        _this.crossOrigin_ = crossOrigin;
        _this.src_ = src;
        _this.key = src;
        _this.image_ = new Image();
        if (crossOrigin !== null) {
            _this.image_.crossOrigin = crossOrigin;
        }
        _this.unlisten_ = null;
        _this.tileLoadFunction_ = tileLoadFunction;
        return _this;
    }
    ImageTile.prototype.getImage = function () {
        return this.image_;
    };
    ImageTile.prototype.setImage = function (element) {
        this.image_ = element;
        this.state = TileState.LOADED;
        this.unlistenImage_();
        this.changed();
    };
    ImageTile.prototype.handleImageError_ = function () {
        this.state = TileState.ERROR;
        this.unlistenImage_();
        this.image_ = getBlankImage();
        this.changed();
    };
    ImageTile.prototype.handleImageLoad_ = function () {
        var image =  (this.image_);
        if (image.naturalWidth && image.naturalHeight) {
            this.state = TileState.LOADED;
        }
        else {
            this.state = TileState.EMPTY;
        }
        this.unlistenImage_();
        this.changed();
    };
    ImageTile.prototype.load = function () {
        if (this.state == TileState.ERROR) {
            this.state = TileState.IDLE;
            this.image_ = new Image();
            if (this.crossOrigin_ !== null) {
                this.image_.crossOrigin = this.crossOrigin_;
            }
        }
        if (this.state == TileState.IDLE) {
            this.state = TileState.LOADING;
            this.changed();
            this.tileLoadFunction_(this, this.src_);
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    };
    ImageTile.prototype.unlistenImage_ = function () {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    };
    return ImageTile;
}(ol_Tile));
function getBlankImage() {
    var ctx = createCanvasContext2D(1, 1);
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
}
 const ol_ImageTile = (ImageTile);
;
var ERROR_THRESHOLD = 0.5;
var ENABLE_RASTER_REPROJECTION = true;
;



var MAX_SUBDIVISION = 10;
var MAX_TRIANGLE_WIDTH = 0.25;
var Triangulation =  (function () {
    function Triangulation(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, opt_destinationResolution) {
        this.sourceProj_ = sourceProj;
        this.targetProj_ = targetProj;
        var transformInvCache = {};
        var transformInv = (0,ol_proj.Ck)(this.targetProj_, this.sourceProj_);
        this.transformInv_ = function (c) {
            var key = c[0] + '/' + c[1];
            if (!transformInvCache[key]) {
                transformInvCache[key] = transformInv(c);
            }
            return transformInvCache[key];
        };
        this.maxSourceExtent_ = maxSourceExtent;
        this.errorThresholdSquared_ = errorThreshold * errorThreshold;
        this.triangles_ = [];
        this.wrapsXInSource_ = false;
        this.canWrapXInSource_ =
            this.sourceProj_.canWrapX() &&
                !!maxSourceExtent &&
                !!this.sourceProj_.getExtent() &&
                (0,ol_extent.dz)(maxSourceExtent) == (0,ol_extent.dz)(this.sourceProj_.getExtent());
        this.sourceWorldWidth_ = this.sourceProj_.getExtent()
            ? (0,ol_extent.dz)(this.sourceProj_.getExtent())
            : null;
        this.targetWorldWidth_ = this.targetProj_.getExtent()
            ? (0,ol_extent.dz)(this.targetProj_.getExtent())
            : null;
        var destinationTopLeft = (0,ol_extent.rL)(targetExtent);
        var destinationTopRight = (0,ol_extent.Xv)(targetExtent);
        var destinationBottomRight = (0,ol_extent.w$)(targetExtent);
        var destinationBottomLeft = (0,ol_extent.hC)(targetExtent);
        var sourceTopLeft = this.transformInv_(destinationTopLeft);
        var sourceTopRight = this.transformInv_(destinationTopRight);
        var sourceBottomRight = this.transformInv_(destinationBottomRight);
        var sourceBottomLeft = this.transformInv_(destinationBottomLeft);
        var maxSubdivision = MAX_SUBDIVISION +
            (opt_destinationResolution
                ? Math.max(0, Math.ceil((0,math.k3)((0,ol_extent.bg)(targetExtent) /
                    (opt_destinationResolution *
                        opt_destinationResolution *
                        256 *
                        256))))
                : 0);
        this.addQuad_(destinationTopLeft, destinationTopRight, destinationBottomRight, destinationBottomLeft, sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft, maxSubdivision);
        if (this.wrapsXInSource_) {
            var leftBound_1 = Infinity;
            this.triangles_.forEach(function (triangle, i, arr) {
                leftBound_1 = Math.min(leftBound_1, triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
            });
            this.triangles_.forEach(function (triangle) {
                if (Math.max(triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]) -
                    leftBound_1 >
                    this.sourceWorldWidth_ / 2) {
                    var newTriangle = [
                        [triangle.source[0][0], triangle.source[0][1]],
                        [triangle.source[1][0], triangle.source[1][1]],
                        [triangle.source[2][0], triangle.source[2][1]],
                    ];
                    if (newTriangle[0][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[0][0] -= this.sourceWorldWidth_;
                    }
                    if (newTriangle[1][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[1][0] -= this.sourceWorldWidth_;
                    }
                    if (newTriangle[2][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[2][0] -= this.sourceWorldWidth_;
                    }
                    var minX = Math.min(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    var maxX = Math.max(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    if (maxX - minX < this.sourceWorldWidth_ / 2) {
                        triangle.source = newTriangle;
                    }
                }
            }.bind(this));
        }
        transformInvCache = {};
    }
    Triangulation.prototype.addTriangle_ = function (a, b, c, aSrc, bSrc, cSrc) {
        this.triangles_.push({
            source: [aSrc, bSrc, cSrc],
            target: [a, b, c],
        });
    };
    Triangulation.prototype.addQuad_ = function (a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
        var sourceQuadExtent = (0,ol_extent.hI)([aSrc, bSrc, cSrc, dSrc]);
        var sourceCoverageX = this.sourceWorldWidth_
            ? (0,ol_extent.dz)(sourceQuadExtent) / this.sourceWorldWidth_
            : null;
        var sourceWorldWidth =  (this.sourceWorldWidth_);
        var wrapsX = this.sourceProj_.canWrapX() &&
            sourceCoverageX > 0.5 &&
            sourceCoverageX < 1;
        var needsSubdivision = false;
        if (maxSubdivision > 0) {
            if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
                var targetQuadExtent = (0,ol_extent.hI)([a, b, c, d]);
                var targetCoverageX = (0,ol_extent.dz)(targetQuadExtent) / this.targetWorldWidth_;
                needsSubdivision =
                    targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
            if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
                needsSubdivision =
                    sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
        }
        if (!needsSubdivision && this.maxSourceExtent_) {
            if (isFinite(sourceQuadExtent[0]) &&
                isFinite(sourceQuadExtent[1]) &&
                isFinite(sourceQuadExtent[2]) &&
                isFinite(sourceQuadExtent[3])) {
                if (!(0,ol_extent.kK)(sourceQuadExtent, this.maxSourceExtent_)) {
                    return;
                }
            }
        }
        var isNotFinite = 0;
        if (!needsSubdivision) {
            if (!isFinite(aSrc[0]) ||
                !isFinite(aSrc[1]) ||
                !isFinite(bSrc[0]) ||
                !isFinite(bSrc[1]) ||
                !isFinite(cSrc[0]) ||
                !isFinite(cSrc[1]) ||
                !isFinite(dSrc[0]) ||
                !isFinite(dSrc[1])) {
                if (maxSubdivision > 0) {
                    needsSubdivision = true;
                }
                else {
                    isNotFinite =
                        (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) +
                            (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) +
                            (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) +
                            (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
                    if (isNotFinite != 1 &&
                        isNotFinite != 2 &&
                        isNotFinite != 4 &&
                        isNotFinite != 8) {
                        return;
                    }
                }
            }
        }
        if (maxSubdivision > 0) {
            if (!needsSubdivision) {
                var center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
                var centerSrc = this.transformInv_(center);
                var dx = void 0;
                if (wrapsX) {
                    var centerSrcEstimX = ((0,math.$W)(aSrc[0], sourceWorldWidth) +
                        (0,math.$W)(cSrc[0], sourceWorldWidth)) /
                        2;
                    dx = centerSrcEstimX - (0,math.$W)(centerSrc[0], sourceWorldWidth);
                }
                else {
                    dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
                }
                var dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
                var centerSrcErrorSquared = dx * dx + dy * dy;
                needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
            }
            if (needsSubdivision) {
                if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
                    var bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
                    var bcSrc = this.transformInv_(bc);
                    var da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
                    var daSrc = this.transformInv_(da);
                    this.addQuad_(a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
                    this.addQuad_(da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
                }
                else {
                    var ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
                    var abSrc = this.transformInv_(ab);
                    var cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
                    var cdSrc = this.transformInv_(cd);
                    this.addQuad_(a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
                    this.addQuad_(ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
                }
                return;
            }
        }
        if (wrapsX) {
            if (!this.canWrapXInSource_) {
                return;
            }
            this.wrapsXInSource_ = true;
        }
        if ((isNotFinite & 0xb) == 0) {
            this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
        }
        if ((isNotFinite & 0xe) == 0) {
            this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
        }
        if (isNotFinite) {
            if ((isNotFinite & 0xd) == 0) {
                this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
            }
            if ((isNotFinite & 0x7) == 0) {
                this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
            }
        }
    };
    Triangulation.prototype.calculateSourceExtent = function () {
        var extent = (0,ol_extent.lJ)();
        this.triangles_.forEach(function (triangle, i, arr) {
            var src = triangle.source;
            (0,ol_extent.Wj)(extent, src[0]);
            (0,ol_extent.Wj)(extent, src[1]);
            (0,ol_extent.Wj)(extent, src[2]);
        });
        return extent;
    };
    Triangulation.prototype.getTriangles = function () {
        return this.triangles_;
    };
    return Triangulation;
}());
 const reproj_Triangulation = (Triangulation);
;
var IMAGE_SMOOTHING_DISABLED = {
    imageSmoothingEnabled: false,
    msImageSmoothingEnabled: false,
};
var IMAGE_SMOOTHING_ENABLED = {
    imageSmoothingEnabled: true,
    msImageSmoothingEnabled: true,
};
;






var brokenDiagonalRendering_;
function drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
}
function verifyBrokenDiagonalRendering(data, offset) {
    return (Math.abs(data[offset * 4] - 210) > 2 ||
        Math.abs(data[offset * 4 + 3] - 0.75 * 255) > 2);
}
function isBrokenDiagonalRendering() {
    if (brokenDiagonalRendering_ === undefined) {
        var ctx = document.createElement('canvas').getContext('2d');
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = 'rgba(210, 0, 0, 0.75)';
        drawTestTriangle(ctx, 4, 5, 4, 0);
        drawTestTriangle(ctx, 4, 5, 0, 5);
        var data = ctx.getImageData(0, 0, 3, 3).data;
        brokenDiagonalRendering_ =
            verifyBrokenDiagonalRendering(data, 0) ||
                verifyBrokenDiagonalRendering(data, 4) ||
                verifyBrokenDiagonalRendering(data, 8);
    }
    return brokenDiagonalRendering_;
}
function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
    var sourceCenter = (0,ol_proj.vs)(targetCenter, targetProj, sourceProj);
    var sourceResolution = (0,ol_proj._Q)(targetProj, targetResolution, targetCenter);
    var targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== undefined) {
        sourceResolution *= targetMetersPerUnit;
    }
    var sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== undefined) {
        sourceResolution /= sourceMetersPerUnit;
    }
    var sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || (0,ol_extent.b8)(sourceExtent, sourceCenter)) {
        var compensationFactor = (0,ol_proj._Q)(sourceProj, sourceResolution, sourceCenter) /
            sourceResolution;
        if (isFinite(compensationFactor) && compensationFactor > 0) {
            sourceResolution /= compensationFactor;
        }
    }
    return sourceResolution;
}
function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
    var targetCenter = (0,ol_extent.qg)(targetExtent);
    var sourceResolution = calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution);
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
        (0,ol_extent.H6)(targetExtent, function (corner) {
            sourceResolution = calculateSourceResolution(sourceProj, targetProj, corner, targetResolution);
            return isFinite(sourceResolution) && sourceResolution > 0;
        });
    }
    return sourceResolution;
}
function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, opt_renderEdges, opt_interpolate) {
    var context = createCanvasContext2D(Math.round(pixelRatio * width), Math.round(pixelRatio * height));
    if (!opt_interpolate) {
        (0,obj.f0)(context, IMAGE_SMOOTHING_DISABLED);
    }
    if (sources.length === 0) {
        return context.canvas;
    }
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
        return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = 'lighter';
    var sourceDataExtent = (0,ol_extent.lJ)();
    sources.forEach(function (src, i, arr) {
        (0,ol_extent.l7)(sourceDataExtent, src.extent);
    });
    var canvasWidthInUnits = (0,ol_extent.dz)(sourceDataExtent);
    var canvasHeightInUnits = (0,ol_extent.Cr)(sourceDataExtent);
    var stitchContext = createCanvasContext2D(Math.round((pixelRatio * canvasWidthInUnits) / sourceResolution), Math.round((pixelRatio * canvasHeightInUnits) / sourceResolution));
    if (!opt_interpolate) {
        (0,obj.f0)(stitchContext, IMAGE_SMOOTHING_DISABLED);
    }
    var stitchScale = pixelRatio / sourceResolution;
    sources.forEach(function (src, i, arr) {
        var xPos = src.extent[0] - sourceDataExtent[0];
        var yPos = -(src.extent[3] - sourceDataExtent[3]);
        var srcWidth = (0,ol_extent.dz)(src.extent);
        var srcHeight = (0,ol_extent.Cr)(src.extent);
        if (src.image.width > 0 && src.image.height > 0) {
            stitchContext.drawImage(src.image, gutter, gutter, src.image.width - 2 * gutter, src.image.height - 2 * gutter, xPos * stitchScale, yPos * stitchScale, srcWidth * stitchScale, srcHeight * stitchScale);
        }
    });
    var targetTopLeft = (0,ol_extent.rL)(targetExtent);
    triangulation.getTriangles().forEach(function (triangle, i, arr) {
        var source = triangle.source;
        var target = triangle.target;
        var x0 = source[0][0], y0 = source[0][1];
        var x1 = source[1][0], y1 = source[1][1];
        var x2 = source[2][0], y2 = source[2][1];
        var u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
        var v0 = pixelRound(-(target[0][1] - targetTopLeft[1]) / targetResolution);
        var u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
        var v1 = pixelRound(-(target[1][1] - targetTopLeft[1]) / targetResolution);
        var u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
        var v2 = pixelRound(-(target[2][1] - targetTopLeft[1]) / targetResolution);
        var sourceNumericalShiftX = x0;
        var sourceNumericalShiftY = y0;
        x0 = 0;
        y0 = 0;
        x1 -= sourceNumericalShiftX;
        y1 -= sourceNumericalShiftY;
        x2 -= sourceNumericalShiftX;
        y2 -= sourceNumericalShiftY;
        var augmentedMatrix = [
            [x1, y1, 0, 0, u1 - u0],
            [x2, y2, 0, 0, u2 - u0],
            [0, 0, x1, y1, v1 - v0],
            [0, 0, x2, y2, v2 - v0],
        ];
        var affineCoefs = (0,math.SV)(augmentedMatrix);
        if (!affineCoefs) {
            return;
        }
        context.save();
        context.beginPath();
        if (isBrokenDiagonalRendering() || !opt_interpolate) {
            context.moveTo(u1, v1);
            var steps = 4;
            var ud = u0 - u1;
            var vd = v0 - v1;
            for (var step = 0; step < steps; step++) {
                context.lineTo(u1 + pixelRound(((step + 1) * ud) / steps), v1 + pixelRound((step * vd) / (steps - 1)));
                if (step != steps - 1) {
                    context.lineTo(u1 + pixelRound(((step + 1) * ud) / steps), v1 + pixelRound(((step + 1) * vd) / (steps - 1)));
                }
            }
            context.lineTo(u2, v2);
        }
        else {
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
        }
        context.clip();
        context.transform(affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);
        context.translate(sourceDataExtent[0] - sourceNumericalShiftX, sourceDataExtent[3] - sourceNumericalShiftY);
        context.scale(sourceResolution / pixelRatio, -sourceResolution / pixelRatio);
        context.drawImage(stitchContext.canvas, 0, 0);
        context.restore();
    });
    if (opt_renderEdges) {
        context.save();
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        triangulation.getTriangles().forEach(function (triangle, i, arr) {
            var target = triangle.target;
            var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
            var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
            var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
            var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
            var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
            var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
            context.beginPath();
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
            context.closePath();
            context.stroke();
        });
        context.restore();
    }
    return context.canvas;
}
;
var reproj_Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var ReprojTile =  (function (_super) {
    reproj_Tile_extends(ReprojTile, _super);
    function ReprojTile(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, opt_errorThreshold, opt_renderEdges, opt_interpolate) {
        var _this = _super.call(this, tileCoord, TileState.IDLE, { interpolate: !!opt_interpolate }) || this;
        _this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;
        _this.pixelRatio_ = pixelRatio;
        _this.gutter_ = gutter;
        _this.canvas_ = null;
        _this.sourceTileGrid_ = sourceTileGrid;
        _this.targetTileGrid_ = targetTileGrid;
        _this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
        _this.sourceTiles_ = [];
        _this.sourcesListenerKeys_ = null;
        _this.sourceZ_ = 0;
        var targetExtent = targetTileGrid.getTileCoordExtent(_this.wrappedTileCoord_);
        var maxTargetExtent = _this.targetTileGrid_.getExtent();
        var maxSourceExtent = _this.sourceTileGrid_.getExtent();
        var limitedTargetExtent = maxTargetExtent
            ? (0,ol_extent.Ed)(targetExtent, maxTargetExtent)
            : targetExtent;
        if ((0,ol_extent.bg)(limitedTargetExtent) === 0) {
            _this.state = TileState.EMPTY;
            return _this;
        }
        var sourceProjExtent = sourceProj.getExtent();
        if (sourceProjExtent) {
            if (!maxSourceExtent) {
                maxSourceExtent = sourceProjExtent;
            }
            else {
                maxSourceExtent = (0,ol_extent.Ed)(maxSourceExtent, sourceProjExtent);
            }
        }
        var targetResolution = targetTileGrid.getResolution(_this.wrappedTileCoord_[0]);
        var sourceResolution = calculateSourceExtentResolution(sourceProj, targetProj, limitedTargetExtent, targetResolution);
        if (!isFinite(sourceResolution) || sourceResolution <= 0) {
            _this.state = TileState.EMPTY;
            return _this;
        }
        var errorThresholdInPixels = opt_errorThreshold !== undefined ? opt_errorThreshold : ERROR_THRESHOLD;
        _this.triangulation_ = new reproj_Triangulation(sourceProj, targetProj, limitedTargetExtent, maxSourceExtent, sourceResolution * errorThresholdInPixels, targetResolution);
        if (_this.triangulation_.getTriangles().length === 0) {
            _this.state = TileState.EMPTY;
            return _this;
        }
        _this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
        var sourceExtent = _this.triangulation_.calculateSourceExtent();
        if (maxSourceExtent) {
            if (sourceProj.canWrapX()) {
                sourceExtent[1] = (0,math.uZ)(sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
                sourceExtent[3] = (0,math.uZ)(sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
            }
            else {
                sourceExtent = (0,ol_extent.Ed)(sourceExtent, maxSourceExtent);
            }
        }
        if (!(0,ol_extent.bg)(sourceExtent)) {
            _this.state = TileState.EMPTY;
        }
        else {
            var sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(sourceExtent, _this.sourceZ_);
            for (var srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
                for (var srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
                    var tile = getTileFunction(_this.sourceZ_, srcX, srcY, pixelRatio);
                    if (tile) {
                        _this.sourceTiles_.push(tile);
                    }
                }
            }
            if (_this.sourceTiles_.length === 0) {
                _this.state = TileState.EMPTY;
            }
        }
        return _this;
    }
    ReprojTile.prototype.getImage = function () {
        return this.canvas_;
    };
    ReprojTile.prototype.reproject_ = function () {
        var sources = [];
        this.sourceTiles_.forEach(function (tile, i, arr) {
            if (tile && tile.getState() == TileState.LOADED) {
                sources.push({
                    extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
                    image: tile.getImage(),
                });
            }
        }.bind(this));
        this.sourceTiles_.length = 0;
        if (sources.length === 0) {
            this.state = TileState.ERROR;
        }
        else {
            var z = this.wrappedTileCoord_[0];
            var size = this.targetTileGrid_.getTileSize(z);
            var width = typeof size === 'number' ? size : size[0];
            var height = typeof size === 'number' ? size : size[1];
            var targetResolution = this.targetTileGrid_.getResolution(z);
            var sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);
            var targetExtent = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
            this.canvas_ = render(width, height, this.pixelRatio_, sourceResolution, this.sourceTileGrid_.getExtent(), targetResolution, targetExtent, this.triangulation_, sources, this.gutter_, this.renderEdges_, this.interpolate);
            this.state = TileState.LOADED;
        }
        this.changed();
    };
    ReprojTile.prototype.load = function () {
        if (this.state == TileState.IDLE) {
            this.state = TileState.LOADING;
            this.changed();
            var leftToLoad_1 = 0;
            this.sourcesListenerKeys_ = [];
            this.sourceTiles_.forEach(function (tile, i, arr) {
                var state = tile.getState();
                if (state == TileState.IDLE || state == TileState.LOADING) {
                    leftToLoad_1++;
                    var sourceListenKey_1 = (0,events.oL)(tile, EventType.Z.CHANGE, function (e) {
                        var state = tile.getState();
                        if (state == TileState.LOADED ||
                            state == TileState.ERROR ||
                            state == TileState.EMPTY) {
                            (0,events.bN)(sourceListenKey_1);
                            leftToLoad_1--;
                            if (leftToLoad_1 === 0) {
                                this.unlistenSources_();
                                this.reproject_();
                            }
                        }
                    }, this);
                    this.sourcesListenerKeys_.push(sourceListenKey_1);
                }
            }.bind(this));
            if (leftToLoad_1 === 0) {
                setTimeout(this.reproject_.bind(this), 0);
            }
            else {
                this.sourceTiles_.forEach(function (tile, i, arr) {
                    var state = tile.getState();
                    if (state == TileState.IDLE) {
                        tile.load();
                    }
                });
            }
        }
    };
    ReprojTile.prototype.unlistenSources_ = function () {
        this.sourcesListenerKeys_.forEach(events.bN);
        this.sourcesListenerKeys_ = null;
    };
    return ReprojTile;
}(ol_Tile));
 const reproj_Tile = (ReprojTile);
;
var TileRange =  (function () {
    function TileRange(minX, maxX, minY, maxY) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }
    TileRange.prototype.contains = function (tileCoord) {
        return this.containsXY(tileCoord[1], tileCoord[2]);
    };
    TileRange.prototype.containsTileRange = function (tileRange) {
        return (this.minX <= tileRange.minX &&
            tileRange.maxX <= this.maxX &&
            this.minY <= tileRange.minY &&
            tileRange.maxY <= this.maxY);
    };
    TileRange.prototype.containsXY = function (x, y) {
        return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    };
    TileRange.prototype.equals = function (tileRange) {
        return (this.minX == tileRange.minX &&
            this.minY == tileRange.minY &&
            this.maxX == tileRange.maxX &&
            this.maxY == tileRange.maxY);
    };
    TileRange.prototype.extend = function (tileRange) {
        if (tileRange.minX < this.minX) {
            this.minX = tileRange.minX;
        }
        if (tileRange.maxX > this.maxX) {
            this.maxX = tileRange.maxX;
        }
        if (tileRange.minY < this.minY) {
            this.minY = tileRange.minY;
        }
        if (tileRange.maxY > this.maxY) {
            this.maxY = tileRange.maxY;
        }
    };
    TileRange.prototype.getHeight = function () {
        return this.maxY - this.minY + 1;
    };
    TileRange.prototype.getSize = function () {
        return [this.getWidth(), this.getHeight()];
    };
    TileRange.prototype.getWidth = function () {
        return this.maxX - this.minX + 1;
    };
    TileRange.prototype.intersects = function (tileRange) {
        return (this.minX <= tileRange.maxX &&
            this.maxX >= tileRange.minX &&
            this.minY <= tileRange.maxY &&
            this.maxY >= tileRange.minY);
    };
    return TileRange;
}());
function createOrUpdate(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== undefined) {
        tileRange.minX = minX;
        tileRange.maxX = maxX;
        tileRange.minY = minY;
        tileRange.maxY = maxY;
        return tileRange;
    }
    else {
        return new TileRange(minX, maxX, minY, maxY);
    }
}
 const ol_TileRange = (TileRange);
;
var TileLayer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














var CanvasTileLayerRenderer =  (function (_super) {
    TileLayer_extends(CanvasTileLayerRenderer, _super);
    function CanvasTileLayerRenderer(tileLayer) {
        var _this = _super.call(this, tileLayer) || this;
        _this.extentChanged = true;
        _this.renderedExtent_ = null;
        _this.renderedPixelRatio;
        _this.renderedProjection = null;
        _this.renderedRevision;
        _this.renderedTiles = [];
        _this.newTiles_ = false;
        _this.tmpExtent = (0,ol_extent.lJ)();
        _this.tmpTileRange_ = new ol_TileRange(0, 0, 0, 0);
        return _this;
    }
    CanvasTileLayerRenderer.prototype.isDrawableTile = function (tile) {
        var tileLayer = this.getLayer();
        var tileState = tile.getState();
        var useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
        return (tileState == TileState.LOADED ||
            tileState == TileState.EMPTY ||
            (tileState == TileState.ERROR && !useInterimTilesOnError));
    };
    CanvasTileLayerRenderer.prototype.getTile = function (z, x, y, frameState) {
        var pixelRatio = frameState.pixelRatio;
        var projection = frameState.viewState.projection;
        var tileLayer = this.getLayer();
        var tileSource = tileLayer.getSource();
        var tile = tileSource.getTile(z, x, y, pixelRatio, projection);
        if (tile.getState() == TileState.ERROR) {
            if (!tileLayer.getUseInterimTilesOnError()) {
                tile.setState(TileState.LOADED);
            }
            else if (tileLayer.getPreload() > 0) {
                this.newTiles_ = true;
            }
        }
        if (!this.isDrawableTile(tile)) {
            tile = tile.getInterimTile();
        }
        return tile;
    };
    CanvasTileLayerRenderer.prototype.getData = function (pixel) {
        var frameState = this.frameState;
        if (!frameState) {
            return null;
        }
        var layer = this.getLayer();
        var coordinate = (0,ol_transform.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
        var layerExtent = layer.getExtent();
        if (layerExtent) {
            if (!(0,ol_extent.b8)(layerExtent, coordinate)) {
                return null;
            }
        }
        var pixelRatio = frameState.pixelRatio;
        var projection = frameState.viewState.projection;
        var viewState = frameState.viewState;
        var source = layer.getRenderSource();
        var tileGrid = source.getTileGridForProjection(viewState.projection);
        var tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
        for (var z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
            var tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
            var tile = source.getTile(z, tileCoord[1], tileCoord[2], pixelRatio, projection);
            if (!(tile instanceof ol_ImageTile || tile instanceof reproj_Tile)) {
                return null;
            }
            if (tile.getState() !== TileState.LOADED) {
                continue;
            }
            var tileOrigin = tileGrid.getOrigin(z);
            var tileSize = toSize(tileGrid.getTileSize(z));
            var tileResolution = tileGrid.getResolution(z);
            var col = Math.floor(tilePixelRatio *
                ((coordinate[0] - tileOrigin[0]) / tileResolution -
                    tileCoord[1] * tileSize[0]));
            var row = Math.floor(tilePixelRatio *
                ((tileOrigin[1] - coordinate[1]) / tileResolution -
                    tileCoord[2] * tileSize[1]));
            return this.getImageData(tile.getImage(), col, row);
        }
        return null;
    };
    CanvasTileLayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
        if (this.isDrawableTile(tile)) {
            return _super.prototype.loadedTileCallback.call(this, tiles, zoom, tile);
        }
        return false;
    };
    CanvasTileLayerRenderer.prototype.prepareFrame = function (frameState) {
        return !!this.getLayer().getSource();
    };
    CanvasTileLayerRenderer.prototype.renderFrame = function (frameState, target) {
        var layerState = frameState.layerStatesArray[frameState.layerIndex];
        var viewState = frameState.viewState;
        var projection = viewState.projection;
        var viewResolution = viewState.resolution;
        var viewCenter = viewState.center;
        var rotation = viewState.rotation;
        var pixelRatio = frameState.pixelRatio;
        var tileLayer = this.getLayer();
        var tileSource = tileLayer.getSource();
        var sourceRevision = tileSource.getRevision();
        var tileGrid = tileSource.getTileGridForProjection(projection);
        var z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
        var tileResolution = tileGrid.getResolution(z);
        var extent = frameState.extent;
        var layerExtent = layerState.extent && (0,ol_proj.dY)(layerState.extent, projection);
        if (layerExtent) {
            extent = (0,ol_extent.Ed)(extent, (0,ol_proj.dY)(layerState.extent, projection));
        }
        var tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
        var width = Math.round(frameState.size[0] * tilePixelRatio);
        var height = Math.round(frameState.size[1] * tilePixelRatio);
        if (rotation) {
            var size = Math.round(Math.sqrt(width * width + height * height));
            width = size;
            height = size;
        }
        var dx = (tileResolution * width) / 2 / tilePixelRatio;
        var dy = (tileResolution * height) / 2 / tilePixelRatio;
        var canvasExtent = [
            viewCenter[0] - dx,
            viewCenter[1] - dy,
            viewCenter[0] + dx,
            viewCenter[1] + dy,
        ];
        var tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
        var tilesToDrawByZ = {};
        tilesToDrawByZ[z] = {};
        var findLoadedTiles = this.createLoadedTileFinder(tileSource, projection, tilesToDrawByZ);
        var tmpExtent = this.tmpExtent;
        var tmpTileRange = this.tmpTileRange_;
        this.newTiles_ = false;
        for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
            for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
                var tile = this.getTile(z, x, y, frameState);
                if (this.isDrawableTile(tile)) {
                    var uid = (0,util.sq)(this);
                    if (tile.getState() == TileState.LOADED) {
                        tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
                        var inTransition = tile.inTransition(uid);
                        if (!this.newTiles_ &&
                            (inTransition || this.renderedTiles.indexOf(tile) === -1)) {
                            this.newTiles_ = true;
                        }
                    }
                    if (tile.getAlpha(uid, frameState.time) === 1) {
                        continue;
                    }
                }
                var childTileRange = tileGrid.getTileCoordChildTileRange(tile.tileCoord, tmpTileRange, tmpExtent);
                var covered = false;
                if (childTileRange) {
                    covered = findLoadedTiles(z + 1, childTileRange);
                }
                if (!covered) {
                    tileGrid.forEachTileCoordParentTileRange(tile.tileCoord, findLoadedTiles, tmpTileRange, tmpExtent);
                }
            }
        }
        var canvasScale = tileResolution / viewResolution;
        (0,ol_transform.qC)(this.pixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / tilePixelRatio, 1 / tilePixelRatio, rotation, -width / 2, -height / 2);
        var canvasTransform = (0,ol_transform.BB)(this.pixelTransform);
        this.useContainer(target, canvasTransform, layerState.opacity, this.getBackground(frameState));
        var context = this.context;
        var canvas = context.canvas;
        (0,ol_transform.nb)(this.inversePixelTransform, this.pixelTransform);
        (0,ol_transform.qC)(this.tempTransform, width / 2, height / 2, canvasScale, canvasScale, 0, -width / 2, -height / 2);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
        }
        else if (!this.containerReused) {
            context.clearRect(0, 0, width, height);
        }
        if (layerExtent) {
            this.clipUnrotated(context, frameState, layerExtent);
        }
        if (!tileSource.getInterpolate()) {
            (0,obj.f0)(context, IMAGE_SMOOTHING_DISABLED);
        }
        this.preRender(context, frameState);
        this.renderedTiles.length = 0;
        var zs = Object.keys(tilesToDrawByZ).map(Number);
        zs.sort(array.kK);
        var clips, clipZs, currentClip;
        if (layerState.opacity === 1 &&
            (!this.containerReused ||
                tileSource.getOpaque(frameState.viewState.projection))) {
            zs = zs.reverse();
        }
        else {
            clips = [];
            clipZs = [];
        }
        for (var i = zs.length - 1; i >= 0; --i) {
            var currentZ = zs[i];
            var currentTilePixelSize = tileSource.getTilePixelSize(currentZ, pixelRatio, projection);
            var currentResolution = tileGrid.getResolution(currentZ);
            var currentScale = currentResolution / tileResolution;
            var dx_1 = currentTilePixelSize[0] * currentScale * canvasScale;
            var dy_1 = currentTilePixelSize[1] * currentScale * canvasScale;
            var originTileCoord = tileGrid.getTileCoordForCoordAndZ((0,ol_extent.rL)(canvasExtent), currentZ);
            var originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
            var origin_1 = (0,ol_transform.nn)(this.tempTransform, [
                (tilePixelRatio * (originTileExtent[0] - canvasExtent[0])) /
                    tileResolution,
                (tilePixelRatio * (canvasExtent[3] - originTileExtent[3])) /
                    tileResolution,
            ]);
            var tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
            var tilesToDraw = tilesToDrawByZ[currentZ];
            for (var tileCoordKey in tilesToDraw) {
                var tile =  (tilesToDraw[tileCoordKey]);
                var tileCoord = tile.tileCoord;
                var xIndex = originTileCoord[1] - tileCoord[1];
                var nextX = Math.round(origin_1[0] - (xIndex - 1) * dx_1);
                var yIndex = originTileCoord[2] - tileCoord[2];
                var nextY = Math.round(origin_1[1] - (yIndex - 1) * dy_1);
                var x = Math.round(origin_1[0] - xIndex * dx_1);
                var y = Math.round(origin_1[1] - yIndex * dy_1);
                var w = nextX - x;
                var h = nextY - y;
                var transition = z === currentZ;
                var inTransition = transition && tile.getAlpha((0,util.sq)(this), frameState.time) !== 1;
                var contextSaved = false;
                if (!inTransition) {
                    if (clips) {
                        currentClip = [x, y, x + w, y, x + w, y + h, x, y + h];
                        for (var i_1 = 0, ii = clips.length; i_1 < ii; ++i_1) {
                            if (z !== currentZ && currentZ < clipZs[i_1]) {
                                var clip = clips[i_1];
                                if ((0,ol_extent.kK)([x, y, x + w, y + h], [clip[0], clip[3], clip[4], clip[7]])) {
                                    if (!contextSaved) {
                                        context.save();
                                        contextSaved = true;
                                    }
                                    context.beginPath();
                                    context.moveTo(currentClip[0], currentClip[1]);
                                    context.lineTo(currentClip[2], currentClip[3]);
                                    context.lineTo(currentClip[4], currentClip[5]);
                                    context.lineTo(currentClip[6], currentClip[7]);
                                    context.moveTo(clip[6], clip[7]);
                                    context.lineTo(clip[4], clip[5]);
                                    context.lineTo(clip[2], clip[3]);
                                    context.lineTo(clip[0], clip[1]);
                                    context.clip();
                                }
                            }
                        }
                        clips.push(currentClip);
                        clipZs.push(currentZ);
                    }
                    else {
                        context.clearRect(x, y, w, h);
                    }
                }
                this.drawTileImage(tile, frameState, x, y, w, h, tileGutter, transition);
                if (clips && !inTransition) {
                    if (contextSaved) {
                        context.restore();
                    }
                    this.renderedTiles.unshift(tile);
                }
                else {
                    this.renderedTiles.push(tile);
                }
                this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
            }
        }
        this.renderedRevision = sourceRevision;
        this.renderedResolution = tileResolution;
        this.extentChanged =
            !this.renderedExtent_ || !(0,ol_extent.fS)(this.renderedExtent_, canvasExtent);
        this.renderedExtent_ = canvasExtent;
        this.renderedPixelRatio = pixelRatio;
        this.renderedProjection = projection;
        this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, z, tileLayer.getPreload());
        this.scheduleExpireCache(frameState, tileSource);
        this.postRender(context, frameState);
        if (layerState.extent) {
            context.restore();
        }
        (0,obj.f0)(context, IMAGE_SMOOTHING_ENABLED);
        if (canvasTransform !== canvas.style.transform) {
            canvas.style.transform = canvasTransform;
        }
        var opacity = cssOpacity(layerState.opacity);
        var container = this.container;
        if (opacity !== container.style.opacity) {
            container.style.opacity = opacity;
        }
        return this.container;
    };
    CanvasTileLayerRenderer.prototype.drawTileImage = function (tile, frameState, x, y, w, h, gutter, transition) {
        var image = this.getTileImage(tile);
        if (!image) {
            return;
        }
        var uid = (0,util.sq)(this);
        var alpha = transition ? tile.getAlpha(uid, frameState.time) : 1;
        var alphaChanged = alpha !== this.context.globalAlpha;
        if (alphaChanged) {
            this.context.save();
            this.context.globalAlpha = alpha;
        }
        this.context.drawImage(image, gutter, gutter, image.width - 2 * gutter, image.height - 2 * gutter, x, y, w, h);
        if (alphaChanged) {
            this.context.restore();
        }
        if (alpha !== 1) {
            frameState.animate = true;
        }
        else if (transition) {
            tile.endTransition(uid);
        }
    };
    CanvasTileLayerRenderer.prototype.getImage = function () {
        var context = this.context;
        return context ? context.canvas : null;
    };
    CanvasTileLayerRenderer.prototype.getTileImage = function (tile) {
        return tile.getImage();
    };
    CanvasTileLayerRenderer.prototype.scheduleExpireCache = function (frameState, tileSource) {
        if (tileSource.canExpireCache()) {
            var postRenderFunction = function (tileSource, map, frameState) {
                var tileSourceKey = (0,util.sq)(tileSource);
                if (tileSourceKey in frameState.usedTiles) {
                    tileSource.expireCache(frameState.viewState.projection, frameState.usedTiles[tileSourceKey]);
                }
            }.bind(null, tileSource);
            frameState.postRenderFunctions.push(
 (postRenderFunction));
        }
    };
    CanvasTileLayerRenderer.prototype.updateUsedTiles = function (usedTiles, tileSource, tile) {
        var tileSourceKey = (0,util.sq)(tileSource);
        if (!(tileSourceKey in usedTiles)) {
            usedTiles[tileSourceKey] = {};
        }
        usedTiles[tileSourceKey][tile.getKey()] = true;
    };
    CanvasTileLayerRenderer.prototype.manageTilePyramid = function (frameState, tileSource, tileGrid, pixelRatio, projection, extent, currentZ, preload, opt_tileCallback) {
        var tileSourceKey = (0,util.sq)(tileSource);
        if (!(tileSourceKey in frameState.wantedTiles)) {
            frameState.wantedTiles[tileSourceKey] = {};
        }
        var wantedTiles = frameState.wantedTiles[tileSourceKey];
        var tileQueue = frameState.tileQueue;
        var minZoom = tileGrid.getMinZoom();
        var tileCount = 0;
        var tile, tileRange, tileResolution, x, y, z;
        for (z = minZoom; z <= currentZ; ++z) {
            tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, tileRange);
            tileResolution = tileGrid.getResolution(z);
            for (x = tileRange.minX; x <= tileRange.maxX; ++x) {
                for (y = tileRange.minY; y <= tileRange.maxY; ++y) {
                    if (currentZ - z <= preload) {
                        ++tileCount;
                        tile = tileSource.getTile(z, x, y, pixelRatio, projection);
                        if (tile.getState() == TileState.IDLE) {
                            wantedTiles[tile.getKey()] = true;
                            if (!tileQueue.isKeyQueued(tile.getKey())) {
                                tileQueue.enqueue([
                                    tile,
                                    tileSourceKey,
                                    tileGrid.getTileCoordCenter(tile.tileCoord),
                                    tileResolution,
                                ]);
                            }
                        }
                        if (opt_tileCallback !== undefined) {
                            opt_tileCallback(tile);
                        }
                    }
                    else {
                        tileSource.useTile(z, x, y, projection);
                    }
                }
            }
        }
        tileSource.updateCacheSize(tileCount, projection);
    };
    return CanvasTileLayerRenderer;
}(canvas_Layer));
 const canvas_TileLayer = (CanvasTileLayerRenderer);
;
var layer_Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TileLayer =  (function (_super) {
    layer_Tile_extends(TileLayer, _super);
    function TileLayer(opt_options) {
        return _super.call(this, opt_options) || this;
    }
    TileLayer.prototype.createRenderer = function () {
        return new canvas_TileLayer(this);
    };
    return TileLayer;
}(BaseTile));
 const layer_Tile = (TileLayer);
;

var LRUCache =  (function () {
    function LRUCache(opt_highWaterMark) {
        this.highWaterMark =
            opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;
        this.count_ = 0;
        this.entries_ = {};
        this.oldest_ = null;
        this.newest_ = null;
    }
    LRUCache.prototype.canExpireCache = function () {
        return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    };
    LRUCache.prototype.expireCache = function (keep) {
        while (this.canExpireCache()) {
            this.pop();
        }
    };
    LRUCache.prototype.clear = function () {
        this.count_ = 0;
        this.entries_ = {};
        this.oldest_ = null;
        this.newest_ = null;
    };
    LRUCache.prototype.containsKey = function (key) {
        return this.entries_.hasOwnProperty(key);
    };
    LRUCache.prototype.forEach = function (f) {
        var entry = this.oldest_;
        while (entry) {
            f(entry.value_, entry.key_, this);
            entry = entry.newer;
        }
    };
    LRUCache.prototype.get = function (key, opt_options) {
        var entry = this.entries_[key];
        (0,asserts.h)(entry !== undefined, 15); 
        if (entry === this.newest_) {
            return entry.value_;
        }
        else if (entry === this.oldest_) {
            this.oldest_ =  (this.oldest_.newer);
            this.oldest_.older = null;
        }
        else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        entry.newer = null;
        entry.older = this.newest_;
        this.newest_.newer = entry;
        this.newest_ = entry;
        return entry.value_;
    };
    LRUCache.prototype.remove = function (key) {
        var entry = this.entries_[key];
        (0,asserts.h)(entry !== undefined, 15); 
        if (entry === this.newest_) {
            this.newest_ =  (entry.older);
            if (this.newest_) {
                this.newest_.newer = null;
            }
        }
        else if (entry === this.oldest_) {
            this.oldest_ =  (entry.newer);
            if (this.oldest_) {
                this.oldest_.older = null;
            }
        }
        else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        delete this.entries_[key];
        --this.count_;
        return entry.value_;
    };
    LRUCache.prototype.getCount = function () {
        return this.count_;
    };
    LRUCache.prototype.getKeys = function () {
        var keys = new Array(this.count_);
        var i = 0;
        var entry;
        for (entry = this.newest_; entry; entry = entry.older) {
            keys[i++] = entry.key_;
        }
        return keys;
    };
    LRUCache.prototype.getValues = function () {
        var values = new Array(this.count_);
        var i = 0;
        var entry;
        for (entry = this.newest_; entry; entry = entry.older) {
            values[i++] = entry.value_;
        }
        return values;
    };
    LRUCache.prototype.peekLast = function () {
        return this.oldest_.value_;
    };
    LRUCache.prototype.peekLastKey = function () {
        return this.oldest_.key_;
    };
    LRUCache.prototype.peekFirstKey = function () {
        return this.newest_.key_;
    };
    LRUCache.prototype.pop = function () {
        var entry = this.oldest_;
        delete this.entries_[entry.key_];
        if (entry.newer) {
            entry.newer.older = null;
        }
        this.oldest_ =  (entry.newer);
        if (!this.oldest_) {
            this.newest_ = null;
        }
        --this.count_;
        return entry.value_;
    };
    LRUCache.prototype.replace = function (key, value) {
        this.get(key); 
        this.entries_[key].value_ = value;
    };
    LRUCache.prototype.set = function (key, value) {
        (0,asserts.h)(!(key in this.entries_), 16); 
        var entry = {
            key_: key,
            newer: null,
            older: this.newest_,
            value_: value,
        };
        if (!this.newest_) {
            this.oldest_ = entry;
        }
        else {
            this.newest_.newer = entry;
        }
        this.newest_ = entry;
        this.entries_[key] = entry;
        ++this.count_;
    };
    LRUCache.prototype.setSize = function (size) {
        this.highWaterMark = size;
    };
    return LRUCache;
}());
 const structs_LRUCache = (LRUCache);
;
function tilecoord_createOrUpdate(z, x, y, opt_tileCoord) {
    if (opt_tileCoord !== undefined) {
        opt_tileCoord[0] = z;
        opt_tileCoord[1] = x;
        opt_tileCoord[2] = y;
        return opt_tileCoord;
    }
    else {
        return [z, x, y];
    }
}
function getKeyZXY(z, x, y) {
    return z + '/' + x + '/' + y;
}
function tilecoord_getKey(tileCoord) {
    return getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
}
function getCacheKeyForTileKey(tileKey) {
    var _a = tileKey
        .substring(tileKey.lastIndexOf('/') + 1, tileKey.length)
        .split(',')
        .map(Number), z = _a[0], x = _a[1], y = _a[2];
    return getKeyZXY(z, x, y);
}
function fromKey(key) {
    return key.split('/').map(Number);
}
function hash(tileCoord) {
    return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}
function withinExtentAndZ(tileCoord, tileGrid) {
    var z = tileCoord[0];
    var x = tileCoord[1];
    var y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
        return false;
    }
    var tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) {
        return true;
    }
    else {
        return tileRange.containsXY(x, y);
    }
}
;
var TileCache_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TileCache =  (function (_super) {
    TileCache_extends(TileCache, _super);
    function TileCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileCache.prototype.expireCache = function (usedTiles) {
        while (this.canExpireCache()) {
            var tile = this.peekLast();
            if (tile.getKey() in usedTiles) {
                break;
            }
            else {
                this.pop().release();
            }
        }
    };
    TileCache.prototype.pruneExceptNewestZ = function () {
        if (this.getCount() === 0) {
            return;
        }
        var key = this.peekFirstKey();
        var tileCoord = fromKey(key);
        var z = tileCoord[0];
        this.forEach(function (tile) {
            if (tile.tileCoord[0] !== z) {
                this.remove(tilecoord_getKey(tile.tileCoord));
                tile.release();
            }
        }.bind(this));
    };
    return TileCache;
}(structs_LRUCache));
 const ol_TileCache = (TileCache);
;
 const TileEventType = ({
    TILELOADSTART: 'tileloadstart',
    TILELOADEND: 'tileloadend',
    TILELOADERROR: 'tileloaderror',
});
var Corner = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/extent/Corner.js");
;








var tmpTileCoord = [0, 0, 0];
var DECIMALS = 5;
var TileGrid =  (function () {
    function TileGrid(options) {
        this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;
        this.resolutions_ = options.resolutions;
        (0,asserts.h)((0,array.pT)(this.resolutions_, function (a, b) {
            return b - a;
        }, true), 17); 
        var zoomFactor;
        if (!options.origins) {
            for (var i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
                if (!zoomFactor) {
                    zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
                }
                else {
                    if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
                        zoomFactor = undefined;
                        break;
                    }
                }
            }
        }
        this.zoomFactor_ = zoomFactor;
        this.maxZoom = this.resolutions_.length - 1;
        this.origin_ = options.origin !== undefined ? options.origin : null;
        this.origins_ = null;
        if (options.origins !== undefined) {
            this.origins_ = options.origins;
            (0,asserts.h)(this.origins_.length == this.resolutions_.length, 20); 
        }
        var extent = options.extent;
        if (extent !== undefined && !this.origin_ && !this.origins_) {
            this.origin_ = (0,ol_extent.rL)(extent);
        }
        (0,asserts.h)((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18); 
        this.tileSizes_ = null;
        if (options.tileSizes !== undefined) {
            this.tileSizes_ = options.tileSizes;
            (0,asserts.h)(this.tileSizes_.length == this.resolutions_.length, 19); 
        }
        this.tileSize_ =
            options.tileSize !== undefined
                ? options.tileSize
                : !this.tileSizes_
                    ? DEFAULT_TILE_SIZE
                    : null;
        (0,asserts.h)((!this.tileSize_ && this.tileSizes_) ||
            (this.tileSize_ && !this.tileSizes_), 22); 
        this.extent_ = extent !== undefined ? extent : null;
        this.fullTileRanges_ = null;
        this.tmpSize_ = [0, 0];
        this.tmpExtent_ = [0, 0, 0, 0];
        if (options.sizes !== undefined) {
            this.fullTileRanges_ = options.sizes.map(function (size, z) {
                var tileRange = new ol_TileRange(Math.min(0, size[0]), Math.max(size[0] - 1, -1), Math.min(0, size[1]), Math.max(size[1] - 1, -1));
                if (extent) {
                    var restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
                    tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
                    tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
                    tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
                    tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
                }
                return tileRange;
            }, this);
        }
        else if (extent) {
            this.calculateTileRanges_(extent);
        }
    }
    TileGrid.prototype.forEachTileCoord = function (extent, zoom, callback) {
        var tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
        for (var i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
            for (var j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
                callback([zoom, i, j]);
            }
        }
    };
    TileGrid.prototype.forEachTileCoordParentTileRange = function (tileCoord, callback, opt_tileRange, opt_extent) {
        var tileRange, x, y;
        var tileCoordExtent = null;
        var z = tileCoord[0] - 1;
        if (this.zoomFactor_ === 2) {
            x = tileCoord[1];
            y = tileCoord[2];
        }
        else {
            tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
        }
        while (z >= this.minZoom) {
            if (this.zoomFactor_ === 2) {
                x = Math.floor(x / 2);
                y = Math.floor(y / 2);
                tileRange = createOrUpdate(x, x, y, y, opt_tileRange);
            }
            else {
                tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
            }
            if (callback(z, tileRange)) {
                return true;
            }
            --z;
        }
        return false;
    };
    TileGrid.prototype.getExtent = function () {
        return this.extent_;
    };
    TileGrid.prototype.getMaxZoom = function () {
        return this.maxZoom;
    };
    TileGrid.prototype.getMinZoom = function () {
        return this.minZoom;
    };
    TileGrid.prototype.getOrigin = function (z) {
        if (this.origin_) {
            return this.origin_;
        }
        else {
            return this.origins_[z];
        }
    };
    TileGrid.prototype.getResolution = function (z) {
        return this.resolutions_[z];
    };
    TileGrid.prototype.getResolutions = function () {
        return this.resolutions_;
    };
    TileGrid.prototype.getTileCoordChildTileRange = function (tileCoord, opt_tileRange, opt_extent) {
        if (tileCoord[0] < this.maxZoom) {
            if (this.zoomFactor_ === 2) {
                var minX = tileCoord[1] * 2;
                var minY = tileCoord[2] * 2;
                return createOrUpdate(minX, minX + 1, minY, minY + 1, opt_tileRange);
            }
            var tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent || this.tmpExtent_);
            return this.getTileRangeForExtentAndZ(tileCoordExtent, tileCoord[0] + 1, opt_tileRange);
        }
        return null;
    };
    TileGrid.prototype.getTileRangeForTileCoordAndZ = function (tileCoord, z, opt_tileRange) {
        if (z > this.maxZoom || z < this.minZoom) {
            return null;
        }
        var tileCoordZ = tileCoord[0];
        var tileCoordX = tileCoord[1];
        var tileCoordY = tileCoord[2];
        if (z === tileCoordZ) {
            return createOrUpdate(tileCoordX, tileCoordY, tileCoordX, tileCoordY, opt_tileRange);
        }
        if (this.zoomFactor_) {
            var factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
            var minX = Math.floor(tileCoordX * factor);
            var minY = Math.floor(tileCoordY * factor);
            if (z < tileCoordZ) {
                return createOrUpdate(minX, minX, minY, minY, opt_tileRange);
            }
            var maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
            var maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
            return createOrUpdate(minX, maxX, minY, maxY, opt_tileRange);
        }
        var tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
        return this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
    };
    TileGrid.prototype.getTileRangeExtent = function (z, tileRange, opt_extent) {
        var origin = this.getOrigin(z);
        var resolution = this.getResolution(z);
        var tileSize = toSize(this.getTileSize(z), this.tmpSize_);
        var minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
        var maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
        var minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
        var maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
        return (0,ol_extent.T9)(minX, minY, maxX, maxY, opt_extent);
    };
    TileGrid.prototype.getTileRangeForExtentAndZ = function (extent, z, opt_tileRange) {
        var tileCoord = tmpTileCoord;
        this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tileCoord);
        var minX = tileCoord[1];
        var minY = tileCoord[2];
        this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tileCoord);
        return createOrUpdate(minX, tileCoord[1], minY, tileCoord[2], opt_tileRange);
    };
    TileGrid.prototype.getTileCoordCenter = function (tileCoord) {
        var origin = this.getOrigin(tileCoord[0]);
        var resolution = this.getResolution(tileCoord[0]);
        var tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
        return [
            origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
            origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution,
        ];
    };
    TileGrid.prototype.getTileCoordExtent = function (tileCoord, opt_extent) {
        var origin = this.getOrigin(tileCoord[0]);
        var resolution = this.getResolution(tileCoord[0]);
        var tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
        var minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
        var minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
        var maxX = minX + tileSize[0] * resolution;
        var maxY = minY + tileSize[1] * resolution;
        return (0,ol_extent.T9)(minX, minY, maxX, maxY, opt_extent);
    };
    TileGrid.prototype.getTileCoordForCoordAndResolution = function (coordinate, resolution, opt_tileCoord) {
        return this.getTileCoordForXYAndResolution_(coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
    };
    TileGrid.prototype.getTileCoordForXYAndResolution_ = function (x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
        var z = this.getZForResolution(resolution);
        var scale = resolution / this.getResolution(z);
        var origin = this.getOrigin(z);
        var tileSize = toSize(this.getTileSize(z), this.tmpSize_);
        var tileCoordX = (scale * (x - origin[0])) / resolution / tileSize[0];
        var tileCoordY = (scale * (origin[1] - y)) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0,math.mD)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0,math.mD)(tileCoordY, DECIMALS) - 1;
        }
        else {
            tileCoordX = (0,math.GW)(tileCoordX, DECIMALS);
            tileCoordY = (0,math.GW)(tileCoordY, DECIMALS);
        }
        return tilecoord_createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
    };
    TileGrid.prototype.getTileCoordForXYAndZ_ = function (x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
        var origin = this.getOrigin(z);
        var resolution = this.getResolution(z);
        var tileSize = toSize(this.getTileSize(z), this.tmpSize_);
        var tileCoordX = (x - origin[0]) / resolution / tileSize[0];
        var tileCoordY = (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0,math.mD)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0,math.mD)(tileCoordY, DECIMALS) - 1;
        }
        else {
            tileCoordX = (0,math.GW)(tileCoordX, DECIMALS);
            tileCoordY = (0,math.GW)(tileCoordY, DECIMALS);
        }
        return tilecoord_createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
    };
    TileGrid.prototype.getTileCoordForCoordAndZ = function (coordinate, z, opt_tileCoord) {
        return this.getTileCoordForXYAndZ_(coordinate[0], coordinate[1], z, false, opt_tileCoord);
    };
    TileGrid.prototype.getTileCoordResolution = function (tileCoord) {
        return this.resolutions_[tileCoord[0]];
    };
    TileGrid.prototype.getTileSize = function (z) {
        if (this.tileSize_) {
            return this.tileSize_;
        }
        else {
            return this.tileSizes_[z];
        }
    };
    TileGrid.prototype.getFullTileRange = function (z) {
        if (!this.fullTileRanges_) {
            return this.extent_
                ? this.getTileRangeForExtentAndZ(this.extent_, z)
                : null;
        }
        else {
            return this.fullTileRanges_[z];
        }
    };
    TileGrid.prototype.getZForResolution = function (resolution, opt_direction) {
        var z = (0,array.h7)(this.resolutions_, resolution, opt_direction || 0);
        return (0,math.uZ)(z, this.minZoom, this.maxZoom);
    };
    TileGrid.prototype.calculateTileRanges_ = function (extent) {
        var length = this.resolutions_.length;
        var fullTileRanges = new Array(length);
        for (var z = this.minZoom; z < length; ++z) {
            fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
        }
        this.fullTileRanges_ = fullTileRanges;
    };
    return TileGrid;
}());
 const tilegrid_TileGrid = (TileGrid);
;







function getForProjection(projection) {
    var tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
        tileGrid = createForProjection(projection);
        projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
}
function wrapX(tileGrid, tileCoord, projection) {
    var z = tileCoord[0];
    var center = tileGrid.getTileCoordCenter(tileCoord);
    var projectionExtent = extentFromProjection(projection);
    if (!(0,ol_extent.b8)(projectionExtent, center)) {
        var worldWidth = (0,ol_extent.dz)(projectionExtent);
        var worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
        center[0] += worldWidth * worldsAway;
        return tileGrid.getTileCoordForCoordAndZ(center, z);
    }
    else {
        return tileCoord;
    }
}
function createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner) {
    var corner = opt_corner !== undefined ? opt_corner : Corner.Z.TOP_LEFT;
    var resolutions = resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize);
    return new tilegrid_TileGrid({
        extent: extent,
        origin: (0,ol_extent.g0)(extent, corner),
        resolutions: resolutions,
        tileSize: opt_tileSize,
    });
}
function createXYZ(opt_options) {
    var xyzOptions = opt_options || {};
    var extent = xyzOptions.extent || (0,ol_proj.U2)('EPSG:3857').getExtent();
    var gridOptions = {
        extent: extent,
        minZoom: xyzOptions.minZoom,
        tileSize: xyzOptions.tileSize,
        resolutions: resolutionsFromExtent(extent, xyzOptions.maxZoom, xyzOptions.tileSize, xyzOptions.maxResolution),
    };
    return new tilegrid_TileGrid(gridOptions);
}
function resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize, opt_maxResolution) {
    var maxZoom = opt_maxZoom !== undefined ? opt_maxZoom : DEFAULT_MAX_ZOOM;
    var height = (0,ol_extent.Cr)(extent);
    var width = (0,ol_extent.dz)(extent);
    var tileSize = toSize(opt_tileSize !== undefined ? opt_tileSize : DEFAULT_TILE_SIZE);
    var maxResolution = opt_maxResolution > 0
        ? opt_maxResolution
        : Math.max(width / tileSize[0], height / tileSize[1]);
    var length = maxZoom + 1;
    var resolutions = new Array(length);
    for (var z = 0; z < length; ++z) {
        resolutions[z] = maxResolution / Math.pow(2, z);
    }
    return resolutions;
}
function createForProjection(projection, opt_maxZoom, opt_tileSize, opt_corner) {
    var extent = extentFromProjection(projection);
    return createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner);
}
function extentFromProjection(projection) {
    projection = (0,ol_proj.U2)(projection);
    var extent = projection.getExtent();
    if (!extent) {
        var half = (180 * ol_proj.Wm[Units.ZP.DEGREES]) / projection.getMetersPerUnit();
        extent = (0,ol_extent.T9)(-half, -half, half, half);
    }
    return extent;
}
;
var source_Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var TileSource =  (function (_super) {
    source_Tile_extends(TileSource, _super);
    function TileSource(options) {
        var _this = _super.call(this, {
            attributions: options.attributions,
            attributionsCollapsible: options.attributionsCollapsible,
            projection: options.projection,
            state: options.state,
            wrapX: options.wrapX,
            interpolate: options.interpolate,
        }) || this;
        _this.on;
        _this.once;
        _this.un;
        _this.opaque_ = options.opaque !== undefined ? options.opaque : false;
        _this.tilePixelRatio_ =
            options.tilePixelRatio !== undefined ? options.tilePixelRatio : 1;
        _this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;
        var tileSize = [256, 256];
        if (_this.tileGrid) {
            toSize(_this.tileGrid.getTileSize(_this.tileGrid.getMinZoom()), tileSize);
        }
        _this.tileCache = new ol_TileCache(options.cacheSize || 0);
        _this.tmpSize = [0, 0];
        _this.key_ = options.key || '';
        _this.tileOptions = {
            transition: options.transition,
            interpolate: options.interpolate,
        };
        _this.zDirection = options.zDirection ? options.zDirection : 0;
        return _this;
    }
    TileSource.prototype.canExpireCache = function () {
        return this.tileCache.canExpireCache();
    };
    TileSource.prototype.expireCache = function (projection, usedTiles) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (tileCache) {
            tileCache.expireCache(usedTiles);
        }
    };
    TileSource.prototype.forEachLoadedTile = function (projection, z, tileRange, callback) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (!tileCache) {
            return false;
        }
        var covered = true;
        var tile, tileCoordKey, loaded;
        for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
            for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
                tileCoordKey = getKeyZXY(z, x, y);
                loaded = false;
                if (tileCache.containsKey(tileCoordKey)) {
                    tile =  (tileCache.get(tileCoordKey));
                    loaded = tile.getState() === TileState.LOADED;
                    if (loaded) {
                        loaded = callback(tile) !== false;
                    }
                }
                if (!loaded) {
                    covered = false;
                }
            }
        }
        return covered;
    };
    TileSource.prototype.getGutterForProjection = function (projection) {
        return 0;
    };
    TileSource.prototype.getKey = function () {
        return this.key_;
    };
    TileSource.prototype.setKey = function (key) {
        if (this.key_ !== key) {
            this.key_ = key;
            this.changed();
        }
    };
    TileSource.prototype.getOpaque = function (projection) {
        return this.opaque_;
    };
    TileSource.prototype.getResolutions = function () {
        if (!this.tileGrid) {
            return null;
        }
        return this.tileGrid.getResolutions();
    };
    TileSource.prototype.getTile = function (z, x, y, pixelRatio, projection) {
        return (0,util.O3)();
    };
    TileSource.prototype.getTileGrid = function () {
        return this.tileGrid;
    };
    TileSource.prototype.getTileGridForProjection = function (projection) {
        if (!this.tileGrid) {
            return getForProjection(projection);
        }
        else {
            return this.tileGrid;
        }
    };
    TileSource.prototype.getTileCacheForProjection = function (projection) {
        (0,asserts.h)((0,ol_proj.OP)(this.getProjection(), projection), 68 
        );
        return this.tileCache;
    };
    TileSource.prototype.getTilePixelRatio = function (pixelRatio) {
        return this.tilePixelRatio_;
    };
    TileSource.prototype.getTilePixelSize = function (z, pixelRatio, projection) {
        var tileGrid = this.getTileGridForProjection(projection);
        var tilePixelRatio = this.getTilePixelRatio(pixelRatio);
        var tileSize = toSize(tileGrid.getTileSize(z), this.tmpSize);
        if (tilePixelRatio == 1) {
            return tileSize;
        }
        else {
            return scale(tileSize, tilePixelRatio, this.tmpSize);
        }
    };
    TileSource.prototype.getTileCoordForTileUrlFunction = function (tileCoord, opt_projection) {
        var projection = opt_projection !== undefined ? opt_projection : this.getProjection();
        var tileGrid = this.getTileGridForProjection(projection);
        if (this.getWrapX() && projection.isGlobal()) {
            tileCoord = wrapX(tileGrid, tileCoord, projection);
        }
        return withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
    };
    TileSource.prototype.clear = function () {
        this.tileCache.clear();
    };
    TileSource.prototype.refresh = function () {
        this.clear();
        _super.prototype.refresh.call(this);
    };
    TileSource.prototype.updateCacheSize = function (tileCount, projection) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (tileCount > tileCache.highWaterMark) {
            tileCache.highWaterMark = tileCount;
        }
    };
    TileSource.prototype.useTile = function (z, x, y, projection) { };
    return TileSource;
}(source_Source));
var TileSourceEvent =  (function (_super) {
    source_Tile_extends(TileSourceEvent, _super);
    function TileSourceEvent(type, tile) {
        var _this = _super.call(this, type) || this;
        _this.tile = tile;
        return _this;
    }
    return TileSourceEvent;
}(Event.ZP));

 const source_Tile = (TileSource);
;



function createFromTemplate(template, tileGrid) {
    var zRegEx = /\{z\}/g;
    var xRegEx = /\{x\}/g;
    var yRegEx = /\{y\}/g;
    var dashYRegEx = /\{-y\}/g;
    return (
    function (tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
            return undefined;
        }
        else {
            return template
                .replace(zRegEx, tileCoord[0].toString())
                .replace(xRegEx, tileCoord[1].toString())
                .replace(yRegEx, tileCoord[2].toString())
                .replace(dashYRegEx, function () {
                var z = tileCoord[0];
                var range = tileGrid.getFullTileRange(z);
                (0,asserts.h)(range, 55); 
                var y = range.getHeight() - tileCoord[2] - 1;
                return y.toString();
            });
        }
    });
}
function createFromTemplates(templates, tileGrid) {
    var len = templates.length;
    var tileUrlFunctions = new Array(len);
    for (var i = 0; i < len; ++i) {
        tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
    }
    return createFromTileUrlFunctions(tileUrlFunctions);
}
function createFromTileUrlFunctions(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) {
        return tileUrlFunctions[0];
    }
    return (
    function (tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
            return undefined;
        }
        else {
            var h = hash(tileCoord);
            var index = (0,math.$W)(h, tileUrlFunctions.length);
            return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
        }
    });
}
function nullTileUrlFunction(tileCoord, pixelRatio, projection) {
    return undefined;
}
function expandUrl(url) {
    var urls = [];
    var match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
        var startCharCode = match[1].charCodeAt(0);
        var stopCharCode = match[2].charCodeAt(0);
        var charCode = void 0;
        for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
            urls.push(url.replace(match[0], String.fromCharCode(charCode)));
        }
        return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
        var stop_1 = parseInt(match[2], 10);
        for (var i = parseInt(match[1], 10); i <= stop_1; i++) {
            urls.push(url.replace(match[0], i.toString()));
        }
        return urls;
    }
    urls.push(url);
    return urls;
}
;
var UrlTile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var UrlTile =  (function (_super) {
    UrlTile_extends(UrlTile, _super);
    function UrlTile(options) {
        var _this = _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tilePixelRatio: options.tilePixelRatio,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
        _this.generateTileUrlFunction_ =
            _this.tileUrlFunction === UrlTile.prototype.tileUrlFunction;
        _this.tileLoadFunction = options.tileLoadFunction;
        if (options.tileUrlFunction) {
            _this.tileUrlFunction = options.tileUrlFunction;
        }
        _this.urls = null;
        if (options.urls) {
            _this.setUrls(options.urls);
        }
        else if (options.url) {
            _this.setUrl(options.url);
        }
        _this.tileLoadingKeys_ = {};
        return _this;
    }
    UrlTile.prototype.getTileLoadFunction = function () {
        return this.tileLoadFunction;
    };
    UrlTile.prototype.getTileUrlFunction = function () {
        return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
            ? this.tileUrlFunction.bind(this)
            : this.tileUrlFunction;
    };
    UrlTile.prototype.getUrls = function () {
        return this.urls;
    };
    UrlTile.prototype.handleTileChange = function (event) {
        var tile =  (event.target);
        var uid = (0,util.sq)(tile);
        var tileState = tile.getState();
        var type;
        if (tileState == TileState.LOADING) {
            this.tileLoadingKeys_[uid] = true;
            type = TileEventType.TILELOADSTART;
        }
        else if (uid in this.tileLoadingKeys_) {
            delete this.tileLoadingKeys_[uid];
            type =
                tileState == TileState.ERROR
                    ? TileEventType.TILELOADERROR
                    : tileState == TileState.LOADED
                        ? TileEventType.TILELOADEND
                        : undefined;
        }
        if (type != undefined) {
            this.dispatchEvent(new TileSourceEvent(type, tile));
        }
    };
    UrlTile.prototype.setTileLoadFunction = function (tileLoadFunction) {
        this.tileCache.clear();
        this.tileLoadFunction = tileLoadFunction;
        this.changed();
    };
    UrlTile.prototype.setTileUrlFunction = function (tileUrlFunction, key) {
        this.tileUrlFunction = tileUrlFunction;
        this.tileCache.pruneExceptNewestZ();
        if (typeof key !== 'undefined') {
            this.setKey(key);
        }
        else {
            this.changed();
        }
    };
    UrlTile.prototype.setUrl = function (url) {
        var urls = expandUrl(url);
        this.urls = urls;
        this.setUrls(urls);
    };
    UrlTile.prototype.setUrls = function (urls) {
        this.urls = urls;
        var key = urls.join('\n');
        if (this.generateTileUrlFunction_) {
            this.setTileUrlFunction(createFromTemplates(urls, this.tileGrid), key);
        }
        else {
            this.setKey(key);
        }
    };
    UrlTile.prototype.tileUrlFunction = function (tileCoord, pixelRatio, projection) {
        return undefined;
    };
    UrlTile.prototype.useTile = function (z, x, y) {
        var tileCoordKey = getKeyZXY(z, x, y);
        if (this.tileCache.containsKey(tileCoordKey)) {
            this.tileCache.get(tileCoordKey);
        }
    };
    return UrlTile;
}(source_Tile));
 const source_UrlTile = (UrlTile);
;
var TileImage_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var TileImage =  (function (_super) {
    TileImage_extends(TileImage, _super);
    function TileImage(options) {
        var _this = this;
        var interpolate = options.imageSmoothing !== undefined ? options.imageSmoothing : true;
        if (options.interpolate !== undefined) {
            interpolate = options.interpolate;
        }
        _this = _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tileLoadFunction: options.tileLoadFunction
                ? options.tileLoadFunction
                : defaultTileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
        _this.crossOrigin =
            options.crossOrigin !== undefined ? options.crossOrigin : null;
        _this.tileClass =
            options.tileClass !== undefined ? options.tileClass : ol_ImageTile;
        _this.tileCacheForProjection = {};
        _this.tileGridForProjection = {};
        _this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
        _this.renderReprojectionEdges_ = false;
        return _this;
    }
    TileImage.prototype.canExpireCache = function () {
        if (!ENABLE_RASTER_REPROJECTION) {
            return _super.prototype.canExpireCache.call(this);
        }
        if (this.tileCache.canExpireCache()) {
            return true;
        }
        else {
            for (var key in this.tileCacheForProjection) {
                if (this.tileCacheForProjection[key].canExpireCache()) {
                    return true;
                }
            }
        }
        return false;
    };
    TileImage.prototype.expireCache = function (projection, usedTiles) {
        if (!ENABLE_RASTER_REPROJECTION) {
            _super.prototype.expireCache.call(this, projection, usedTiles);
            return;
        }
        var usedTileCache = this.getTileCacheForProjection(projection);
        this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
        for (var id in this.tileCacheForProjection) {
            var tileCache = this.tileCacheForProjection[id];
            tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
        }
    };
    TileImage.prototype.getGutterForProjection = function (projection) {
        if (ENABLE_RASTER_REPROJECTION &&
            this.getProjection() &&
            projection &&
            !(0,ol_proj.OP)(this.getProjection(), projection)) {
            return 0;
        }
        else {
            return this.getGutter();
        }
    };
    TileImage.prototype.getGutter = function () {
        return 0;
    };
    TileImage.prototype.getKey = function () {
        var key = _super.prototype.getKey.call(this);
        if (!this.getInterpolate()) {
            key += ':disable-interpolation';
        }
        return key;
    };
    TileImage.prototype.getOpaque = function (projection) {
        if (ENABLE_RASTER_REPROJECTION &&
            this.getProjection() &&
            projection &&
            !(0,ol_proj.OP)(this.getProjection(), projection)) {
            return false;
        }
        else {
            return _super.prototype.getOpaque.call(this, projection);
        }
    };
    TileImage.prototype.getTileGridForProjection = function (projection) {
        if (!ENABLE_RASTER_REPROJECTION) {
            return _super.prototype.getTileGridForProjection.call(this, projection);
        }
        var thisProj = this.getProjection();
        if (this.tileGrid && (!thisProj || (0,ol_proj.OP)(thisProj, projection))) {
            return this.tileGrid;
        }
        else {
            var projKey = (0,util.sq)(projection);
            if (!(projKey in this.tileGridForProjection)) {
                this.tileGridForProjection[projKey] =
                    getForProjection(projection);
            }
            return this.tileGridForProjection[projKey];
        }
    };
    TileImage.prototype.getTileCacheForProjection = function (projection) {
        if (!ENABLE_RASTER_REPROJECTION) {
            return _super.prototype.getTileCacheForProjection.call(this, projection);
        }
        var thisProj = this.getProjection();
        if (!thisProj || (0,ol_proj.OP)(thisProj, projection)) {
            return this.tileCache;
        }
        else {
            var projKey = (0,util.sq)(projection);
            if (!(projKey in this.tileCacheForProjection)) {
                this.tileCacheForProjection[projKey] = new ol_TileCache(this.tileCache.highWaterMark);
            }
            return this.tileCacheForProjection[projKey];
        }
    };
    TileImage.prototype.createTile_ = function (z, x, y, pixelRatio, projection, key) {
        var tileCoord = [z, x, y];
        var urlTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
        var tileUrl = urlTileCoord
            ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection)
            : undefined;
        var tile = new this.tileClass(tileCoord, tileUrl !== undefined ? TileState.IDLE : TileState.EMPTY, tileUrl !== undefined ? tileUrl : '', this.crossOrigin, this.tileLoadFunction, this.tileOptions);
        tile.key = key;
        tile.addEventListener(EventType.Z.CHANGE, this.handleTileChange.bind(this));
        return tile;
    };
    TileImage.prototype.getTile = function (z, x, y, pixelRatio, projection) {
        var sourceProjection = this.getProjection();
        if (!ENABLE_RASTER_REPROJECTION ||
            !sourceProjection ||
            !projection ||
            (0,ol_proj.OP)(sourceProjection, projection)) {
            return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
        }
        else {
            var cache = this.getTileCacheForProjection(projection);
            var tileCoord = [z, x, y];
            var tile = void 0;
            var tileCoordKey = tilecoord_getKey(tileCoord);
            if (cache.containsKey(tileCoordKey)) {
                tile = cache.get(tileCoordKey);
            }
            var key = this.getKey();
            if (tile && tile.key == key) {
                return tile;
            }
            else {
                var sourceTileGrid = this.getTileGridForProjection(sourceProjection);
                var targetTileGrid = this.getTileGridForProjection(projection);
                var wrappedTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
                var newTile = new reproj_Tile(sourceProjection, sourceTileGrid, projection, targetTileGrid, tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio), this.getGutter(), function (z, x, y, pixelRatio) {
                    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
                }.bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.getInterpolate());
                newTile.key = key;
                if (tile) {
                    newTile.interimTile = tile;
                    newTile.refreshInterimChain();
                    cache.replace(tileCoordKey, newTile);
                }
                else {
                    cache.set(tileCoordKey, newTile);
                }
                return newTile;
            }
        }
    };
    TileImage.prototype.getTileInternal = function (z, x, y, pixelRatio, projection) {
        var tile = null;
        var tileCoordKey = getKeyZXY(z, x, y);
        var key = this.getKey();
        if (!this.tileCache.containsKey(tileCoordKey)) {
            tile = this.createTile_(z, x, y, pixelRatio, projection, key);
            this.tileCache.set(tileCoordKey, tile);
        }
        else {
            tile = this.tileCache.get(tileCoordKey);
            if (tile.key != key) {
                var interimTile = tile;
                tile = this.createTile_(z, x, y, pixelRatio, projection, key);
                if (interimTile.getState() == TileState.IDLE) {
                    tile.interimTile = interimTile.interimTile;
                }
                else {
                    tile.interimTile = interimTile;
                }
                tile.refreshInterimChain();
                this.tileCache.replace(tileCoordKey, tile);
            }
        }
        return tile;
    };
    TileImage.prototype.setRenderReprojectionEdges = function (render) {
        if (!ENABLE_RASTER_REPROJECTION ||
            this.renderReprojectionEdges_ == render) {
            return;
        }
        this.renderReprojectionEdges_ = render;
        for (var id in this.tileCacheForProjection) {
            this.tileCacheForProjection[id].clear();
        }
        this.changed();
    };
    TileImage.prototype.setTileGridForProjection = function (projection, tilegrid) {
        if (ENABLE_RASTER_REPROJECTION) {
            var proj = (0,ol_proj.U2)(projection);
            if (proj) {
                var projKey = (0,util.sq)(proj);
                if (!(projKey in this.tileGridForProjection)) {
                    this.tileGridForProjection[projKey] = tilegrid;
                }
            }
        }
    };
    return TileImage;
}(source_UrlTile));
function defaultTileLoadFunction(imageTile, src) {
 (imageTile.getImage()).src =
        src;
}
 const source_TileImage = (TileImage);
;
var XYZ_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var XYZ =  (function (_super) {
    XYZ_extends(XYZ, _super);
    function XYZ(opt_options) {
        var options = opt_options || {};
        var interpolate = options.imageSmoothing !== undefined ? options.imageSmoothing : true;
        if (options.interpolate !== undefined) {
            interpolate = options.interpolate;
        }
        var projection = options.projection !== undefined ? options.projection : 'EPSG:3857';
        var tileGrid = options.tileGrid !== undefined
            ? options.tileGrid
            : createXYZ({
                extent: extentFromProjection(projection),
                maxResolution: options.maxResolution,
                maxZoom: options.maxZoom,
                minZoom: options.minZoom,
                tileSize: options.tileSize,
            });
        return _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            crossOrigin: options.crossOrigin,
            interpolate: interpolate,
            opaque: options.opaque,
            projection: projection,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileGrid: tileGrid,
            tileLoadFunction: options.tileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
            transition: options.transition,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
    }
    return XYZ;
}(source_TileImage));
 const source_XYZ = (XYZ);
;


let LayerTheme;

(function (LayerTheme) {
  LayerTheme["Auto"] = "auto";
  LayerTheme["Light"] = "light";
  LayerTheme["Dark"] = "dark";
})(LayerTheme || (LayerTheme = {}));

const defaultCartoConfig = {
  theme: LayerTheme.Auto,
  showLabels: true
};
const carto = {
  id: 'carto',
  name: 'CARTO reference map',
  isBaseMap: true,
  defaultOptions: defaultCartoConfig,

  create: async (map, options, theme) => ({
    init: () => {
      const cfg = Object.assign({}, defaultCartoConfig, options.config);
      let style = cfg.theme;

      if (!style || style === LayerTheme.Auto) {
        style = theme.isDark ? 'dark' : 'light';
      }

      if (cfg.showLabels) {
        style += '_all';
      } else {
        style += '_nolabels';
      }

      return new layer_Tile({
        source: new source_XYZ({
          attributions: `<a href="https://carto.com/attribution/">© CARTO</a>`,
          url: `https://{1-4}.basemaps.cartocdn.com/${style}/{z}/{x}/{y}.png`
        })
      });
    },
    registerOptionsUI: builder => {
      builder.addRadio({
        path: 'config.theme',
        name: 'Theme',
        settings: {
          options: [{
            value: LayerTheme.Auto,
            label: 'Auto',
            description: 'Match grafana theme'
          }, {
            value: LayerTheme.Light,
            label: 'Light'
          }, {
            value: LayerTheme.Dark,
            label: 'Dark'
          }]
        },
        defaultValue: defaultCartoConfig.theme
      }).addBooleanSwitch({
        path: 'config.showLabels',
        name: 'Show labels',
        description: '',
        defaultValue: defaultCartoConfig.showLabels
      });
    }
  })
};
const cartoLayers = [carto];
;


const sampleURL = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer';
const defaultXYZConfig = {
  url: sampleURL + '/tile/{z}/{y}/{x}',
  attribution: `Tiles © <a href="${sampleURL}">ArcGIS</a>`
};
const xyzTiles = {
  id: 'xyz',
  name: 'XYZ Tile layer',
  isBaseMap: true,
  create: async (map, options, theme) => ({
    init: () => {
      const cfg = Object.assign({}, options.config);

      if (!cfg.url) {
        var _cfg$attribution;

        cfg.url = defaultXYZConfig.url;
        cfg.attribution = (_cfg$attribution = cfg.attribution) !== null && _cfg$attribution !== void 0 ? _cfg$attribution : defaultXYZConfig.attribution;
      }

      return new layer_Tile({
        source: new source_XYZ({
          url: cfg.url,
          attributions: cfg.attribution 

        }),
        minZoom: cfg.minZoom,
        maxZoom: cfg.maxZoom
      });
    },
    registerOptionsUI: builder => {
      builder.addTextInput({
        path: 'config.url',
        name: 'URL template',
        description: 'Must include {x}, {y} or {-y}, and {z} placeholders',
        settings: {
          placeholder: defaultXYZConfig.url
        }
      }).addTextInput({
        path: 'config.attribution',
        name: 'Attribution',
        settings: {
          placeholder: defaultXYZConfig.attribution
        }
      });
    }
  })
};
const genericLayers = [xyzTiles];
;


const CUSTOM_SERVICE = 'custom';
const DEFAULT_SERVICE = 'streets';
const publicServiceRegistry = new src.Registry(() => [{
  id: DEFAULT_SERVICE,
  name: 'World Street Map',
  slug: 'World_Street_Map'
}, {
  id: 'world-imagery',
  name: 'World Imagery',
  slug: 'World_Imagery'
}, {
  id: 'world-physical',
  name: 'World Physical',
  slug: 'World_Physical_Map'
}, {
  id: 'topo',
  name: 'Topographic',
  slug: 'World_Topo_Map'
}, {
  id: 'usa-topo',
  name: 'USA Topographic',
  slug: 'USA_Topo_Maps'
}, {
  id: 'ocean',
  name: 'World Ocean',
  slug: 'Ocean/World_Ocean_Base'
}, {
  id: CUSTOM_SERVICE,
  name: 'Custom MapServer',
  description: 'Use a custom MapServer with pre-cached values',
  slug: ''
}]);
const esriXYZTiles = {
  id: 'esri-xyz',
  name: 'ArcGIS MapServer',
  isBaseMap: true,
  create: async (map, options, theme) => {
    var _cfg$server;

    const cfg = Object.assign({}, options.config);
    const svc = publicServiceRegistry.getIfExists((_cfg$server = cfg.server) !== null && _cfg$server !== void 0 ? _cfg$server : DEFAULT_SERVICE);

    if (svc.id !== CUSTOM_SERVICE) {
      const base = 'https://services.arcgisonline.com/ArcGIS/rest/services/';
      cfg.url = `${base}${svc.slug}/MapServer/tile/{z}/{y}/{x}`;
      cfg.attribution = `Tiles © <a href="${base}${svc.slug}/MapServer">ArcGIS</a>`;
    }

    const opts = Object.assign({}, options, {
      config: cfg
    });
    return xyzTiles.create(map, opts, theme).then(xyz => {
      xyz.registerOptionsUI = builder => {
        builder.addSelect({
          path: 'config.server',
          name: 'Server instance',
          settings: {
            options: publicServiceRegistry.selectOptions().options
          }
        }).addTextInput({
          path: 'config.url',
          name: 'URL template',
          description: 'Must include {x}, {y} or {-y}, and {z} placeholders',
          settings: {
            placeholder: defaultXYZConfig.url
          },
          showIf: cfg => {
            var _cfg$config;

            return ((_cfg$config = cfg.config) === null || _cfg$config === void 0 ? void 0 : _cfg$config.server) === CUSTOM_SERVICE;
          }
        }).addTextInput({
          path: 'config.attribution',
          name: 'Attribution',
          settings: {
            placeholder: defaultXYZConfig.attribution
          },
          showIf: cfg => {
            var _cfg$config2;

            return ((_cfg$config2 = cfg.config) === null || _cfg$config2 === void 0 ? void 0 : _cfg$config2.server) === CUSTOM_SERVICE;
          }
        });
      };

      return xyz;
    });
  },
  defaultOptions: {
    server: DEFAULT_SERVICE
  }
};
const esriLayers = [esriXYZTiles];
;
var OSM_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ATTRIBUTION = '&#169; ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> ' +
    'contributors.';
var OSM =  (function (_super) {
    OSM_extends(OSM, _super);
    function OSM(opt_options) {
        var options = opt_options || {};
        var interpolate = options.imageSmoothing !== undefined ? options.imageSmoothing : true;
        if (options.interpolate !== undefined) {
            interpolate = options.interpolate;
        }
        var attributions;
        if (options.attributions !== undefined) {
            attributions = options.attributions;
        }
        else {
            attributions = [ATTRIBUTION];
        }
        var crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : 'anonymous';
        var url = options.url !== undefined
            ? options.url
            : 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        return _super.call(this, {
            attributions: attributions,
            attributionsCollapsible: false,
            cacheSize: options.cacheSize,
            crossOrigin: crossOrigin,
            interpolate: interpolate,
            maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
            opaque: options.opaque !== undefined ? options.opaque : true,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileLoadFunction: options.tileLoadFunction,
            transition: options.transition,
            url: url,
            wrapX: options.wrapX,
            zDirection: options.zDirection,
        }) || this;
    }
    return OSM;
}(source_XYZ));
 const source_OSM = (OSM);
;


const standard = {
  id: 'osm-standard',
  name: 'Open Street Map',
  isBaseMap: true,

  create: async (map, options) => ({
    init: () => {
      return new layer_Tile({
        source: new source_OSM()
      });
    }
  })
};
const osmLayers = [standard];
;





const basemapLayers = [...osmLayers, ...cartoLayers, ...esriLayers, 
...genericLayers];
var GeoJSON = __webpack_require__("./.yarn/cache/ol-npm-6.14.1-7e449a67c6-118ae5b40f.zip/node_modules/ol/format/GeoJSON.js");
;

let MapCenterID;

(function (MapCenterID) {
  MapCenterID["Zero"] = "zero";
  MapCenterID["Coordinates"] = "coords";
  MapCenterID["Fit"] = "fit";
})(MapCenterID || (MapCenterID = {}));

const centerPointRegistry = new src.Registry(() => [{
  id: MapCenterID.Fit,
  name: 'Fit data layers',
  zoom: 15 

}, {
  id: MapCenterID.Zero,
  name: '(0°, 0°)',
  lat: 0,
  lon: 0
}, {
  id: 'north-america',
  name: 'North America',
  lat: 40,
  lon: -100,
  zoom: 4
}, {
  id: 'europe',
  name: 'Europe',
  lat: 46,
  lon: 14,
  zoom: 4
}, {
  id: 'west-asia',
  name: 'West Asia',
  lat: 26,
  lon: 53,
  zoom: 4
}, {
  id: 'se-asia',
  name: 'South-east Asia',
  lat: 10,
  lon: 106,
  zoom: 4
}, {
  id: MapCenterID.Coordinates,
  name: 'Coordinates'
}]);
;

const defaultView = {
  id: MapCenterID.Zero,
  lat: 0,
  lon: 0,
  zoom: 1
};

let ComparisonOperation; 

(function (ComparisonOperation) {
  ComparisonOperation["EQ"] = "eq";
  ComparisonOperation["NEQ"] = "neq";
  ComparisonOperation["LT"] = "lt";
  ComparisonOperation["LTE"] = "lte";
  ComparisonOperation["GT"] = "gt";
  ComparisonOperation["GTE"] = "gte";
})(ComparisonOperation || (ComparisonOperation = {}));
;


const checkFeatureMatchesStyleRule = (rule, feature) => {
  const val = feature.get(rule.property);

  switch (rule.operation) {
    case ComparisonOperation.EQ:
      return `${val}` === `${rule.value}`;

    case ComparisonOperation.NEQ:
      return val !== rule.value;

    case ComparisonOperation.GT:
      return val > rule.value;

    case ComparisonOperation.GTE:
      return val >= rule.value;

    case ComparisonOperation.LT:
      return val < rule.value;

    case ComparisonOperation.LTE:
      return val <= rule.value;

    default:
      return false;
  }
};
var NumberInput = __webpack_require__("./public/app/features/dimensions/editors/NumberInput.tsx");
;

function getLayerPropertyInfo(features) {
  const types = new Set();
  const props = new Set();
  features.some((feature, idx) => {
    for (const key of Object.keys(feature.getProperties())) {
      if (key === 'geometry') {
        continue;
      }

      props.add(key);
      const g = feature.getGeometry();

      if (g) {
        types.add(g.getType());
      }
    }

    return idx > 10; 
  });
  let geometryType = GeometryTypeId.Any;

  if (types.size === 1) {
    switch (types.values().next().value) {
      case 'Point':
      case 'MultiPoint':
        geometryType = GeometryTypeId.Point;
        break;

      case 'Line':
      case 'MultiLine':
        geometryType = GeometryTypeId.Line;
        break;

      case 'Polygon':
        geometryType = GeometryTypeId.Polygon;
    }
  }

  return {
    geometryType,
    propertes: Array.from(props.keys()).map(v => ({
      label: v,
      value: v
    }))
  };
}
function getUniqueFeatureValues(features, key) {
  const unique = new Set();

  for (const feature of features) {
    const v = feature.get(key);

    if (v != null) {
      unique.add(`${v}`); 
    }
  }

  const buffer = Array.from(unique);
  buffer.sort();
  return buffer;
}
;
function getSelectionInfo(v, options) {
  if (v && !options) {
    const current = {
      label: `${v}`,
      value: v
    };
    return {
      options: [current],
      current
    };
  }

  if (!options) {
    options = [];
  }

  let current = options.find(item => item.value === v);

  if (v && !current) {
    current = {
      label: `${v} (not found)`,
      value: v
    };
    options.push(current);
  }

  return {
    options,
    current
  };
}
;













const comparators = [{
  label: '==',
  value: ComparisonOperation.EQ
}, {
  label: '!=',
  value: ComparisonOperation.NEQ
}, {
  label: '>',
  value: ComparisonOperation.GT
}, {
  label: '>=',
  value: ComparisonOperation.GTE
}, {
  label: '<',
  value: ComparisonOperation.LT
}, {
  label: '<=',
  value: ComparisonOperation.LTE
}];
const StyleRuleEditor = props => {
  var _value$check3, _value$style;

  const {
    value,
    onChange,
    item,
    context
  } = props;
  const settings = item.settings;
  const {
    features,
    layerInfo
  } = settings;
  const propertyOptions = (0,useObservable.Z)(layerInfo);
  const feats = (0,useObservable.Z)(features);
  const uniqueSelectables = (0,react.useMemo)(() => {
    var _value$check, _value$check2;

    const key = value === null || value === void 0 ? void 0 : (_value$check = value.check) === null || _value$check === void 0 ? void 0 : _value$check.property;

    if (key && feats && ((_value$check2 = value.check) === null || _value$check2 === void 0 ? void 0 : _value$check2.operation) === ComparisonOperation.EQ) {
      return getUniqueFeatureValues(feats, key).map(v => {
        let newValue;
        let isNewValueNumber = !isNaN(Number(v));

        if (isNewValueNumber) {
          newValue = {
            value: Number(v),
            label: v
          };
        } else {
          newValue = {
            value: v,
            label: v
          };
        }

        return newValue;
      });
    }

    return [];
  }, [feats, value]);
  const styles = (0,grafana_ui_src.useStyles2)(StyleRuleEditor_getStyles);
  const LABEL_WIDTH = 10;
  const onChangeProperty = (0,react.useCallback)(selection => {
    onChange(Object.assign({}, value, {
      check: Object.assign({}, value.check, {
        property: selection === null || selection === void 0 ? void 0 : selection.value
      })
    }));
  }, [onChange, value]);
  const onChangeComparison = (0,react.useCallback)(selection => {
    var _selection$value;

    onChange(Object.assign({}, value, {
      check: Object.assign({}, value.check, {
        operation: (_selection$value = selection.value) !== null && _selection$value !== void 0 ? _selection$value : ComparisonOperation.EQ
      })
    }));
  }, [onChange, value]);
  const onChangeValue = (0,react.useCallback)(selection => {
    onChange(Object.assign({}, value, {
      check: Object.assign({}, value.check, {
        value: selection === null || selection === void 0 ? void 0 : selection.value
      })
    }));
  }, [onChange, value]);
  const onChangeNumericValue = (0,react.useCallback)(v => {
    onChange(Object.assign({}, value, {
      check: Object.assign({}, value.check, {
        value: v
      })
    }));
  }, [onChange, value]);
  const onChangeStyle = (0,react.useCallback)(style => {
    onChange(Object.assign({}, value, {
      style
    }));
  }, [onChange, value]);
  const onDelete = (0,react.useCallback)(() => {
    onChange(undefined);
  }, [onChange]);
  const check = (_value$check3 = value.check) !== null && _value$check3 !== void 0 ? _value$check3 : DEFAULT_STYLE_RULE.check;
  const propv = getSelectionInfo(check.property, propertyOptions === null || propertyOptions === void 0 ? void 0 : propertyOptions.propertes);
  const valuev = getSelectionInfo(check.value, uniqueSelectables);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.rule,
    children: [(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Rule",
        labelWidth: LABEL_WIDTH,
        grow: true,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          placeholder: 'Feature property',
          value: propv.current,
          options: propv.options,
          onChange: onChangeProperty,
          "aria-label": 'Feature property',
          isClearable: true,
          allowCustomValue: true
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        className: styles.inline,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          value: comparators.find(v => v.value === check.operation),
          options: comparators,
          onChange: onChangeComparison,
          "aria-label": 'Comparison operator',
          width: 8
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        className: styles.inline,
        grow: true,
        children: (0,jsx_runtime.jsxs)("div", {
          className: styles.flexRow,
          children: [(check.operation === ComparisonOperation.EQ || check.operation === ComparisonOperation.NEQ) && (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            placeholder: 'value',
            value: valuev.current,
            options: valuev.options,
            onChange: onChangeValue,
            "aria-label": 'Comparison value',
            isClearable: true,
            allowCustomValue: true
          }), check.operation !== ComparisonOperation.EQ && (0,jsx_runtime.jsx)(NumberInput.Y, {
            value: !isNaN(Number(check.value)) ? Number(check.value) : 0,
            placeholder: "numeric value",
            onChange: onChangeNumericValue
          }, `${check.property}/${check.operation}`)]
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        size: "md",
        icon: "trash-alt",
        onClick: () => onDelete(),
        variant: "secondary",
        "aria-label": 'Delete style rule',
        className: styles.button
      })]
    }), (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)(StyleEditor, {
        value: (_value$style = value.style) !== null && _value$style !== void 0 ? _value$style : defaultStyleConfig,
        context: context,
        onChange: onChangeStyle,
        item: {
          settings: {
            simpleFixedValues: true,
            layerInfo
          }
        }
      })
    })]
  });
};

const StyleRuleEditor_getStyles = theme => ({
  rule: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  row: emotion_css_esm.css`
    display: flex;
    margin-bottom: 4px;
  `,
  inline: emotion_css_esm.css`
    margin-bottom: 0;
    margin-left: 4px;
  `,
  button: emotion_css_esm.css`
    margin-left: 4px;
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  `
});
;








const GeomapStyleRulesEditor = props => {
  const {
    value,
    onChange,
    context,
    item
  } = props;
  const theme = (0,grafana_ui_src.useTheme2)();
  const settings = item.settings;
  const onAddRule = (0,react.useCallback)(() => {
    const {
      palette
    } = theme.visualization;
    const color = {
      fixed: palette[Math.floor(Math.random() * palette.length)]
    };
    const newRule = [...value, Object.assign({}, DEFAULT_STYLE_RULE, {
      style: Object.assign({}, defaultStyleConfig, {
        color
      })
    })];
    onChange(newRule);
  }, [onChange, value, theme.visualization]);
  const onRuleChange = (0,react.useCallback)(idx => style => {
    const copyStyles = [...value];

    if (style) {
      copyStyles[idx] = style;
    } else {
      copyStyles.splice(idx, 1);
    }

    onChange(copyStyles);
  }, [onChange, value]);
  const styleOptions = value && value.map((style, idx) => {
    var _style$check;

    const itemSettings = {
      settings
    };
    return (0,jsx_runtime.jsx)(StyleRuleEditor, {
      value: style,
      onChange: onRuleChange(idx),
      context: context,
      item: itemSettings
    }, `${idx}-${(_style$check = style.check) === null || _style$check === void 0 ? void 0 : _style$check.property}`);
  });
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [styleOptions, (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      size: "sm",
      icon: "plus",
      onClick: onAddRule,
      variant: "secondary",
      "aria-label": 'Add geomap style rule',
      children: 'Add style rule'
    })]
  });
};
var first = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/first.js");
var operators_map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
;
















const geojsonLayer_defaultOptions = {
  src: 'public/maps/countries.geojson',
  rules: [],
  style: defaultStyleConfig
};
const DEFAULT_STYLE_RULE = {
  style: defaultStyleConfig,
  check: {
    property: '',
    operation: ComparisonOperation.EQ,
    value: ''
  }
};
let publicGeoJSONFiles = undefined;
const geojsonLayer = {
  id: 'geojson',
  name: 'GeoJSON',
  description: 'Load static data from a geojson file',
  isBaseMap: false,
  state: src.PluginState.beta,

  create: async (map, options, theme) => {
    const config = Object.assign({}, geojsonLayer_defaultOptions, options.config);
    const source = new source_Vector({
      url: config.src,
      format: new GeoJSON.Z()
    });
    const features = new ReplaySubject.t();
    const key = source.on('change', () => {
      if (source.getState() == 'ready') {
        (0,Observable.B)(key);
        features.next(source.getFeatures());
      }
    });
    const styles = [];

    if (config.rules) {
      for (const r of config.rules) {
        if (r.style) {
          const s = await getStyleConfigState(r.style);
          styles.push({
            state: s,
            rule: r.check
          });
        }
      }
    }

    if (true) {
      const s = await getStyleConfigState(config.style);
      styles.push({
        state: s
      });
    }

    const vectorLayer = new Vector({
      source,
      style: feature => {
        var _feature$getGeometry;

        const isPoint = ((_feature$getGeometry = feature.getGeometry()) === null || _feature$getGeometry === void 0 ? void 0 : _feature$getGeometry.getType()) === 'Point';

        for (const check of styles) {
          if (check.rule && !checkFeatureMatchesStyleRule(check.rule, feature)) {
            continue;
          } 


          if (check.state.fields) {
            const values = Object.assign({}, check.state.base);
            const {
              text
            } = check.state.fields;

            if (text) {
              values.text = `${feature.get(text)}`;
            }

            if (isPoint) {
              return check.state.maker(values);
            }

            return polyStyle(values);
          } 


          if (isPoint) {
            if (!check.point) {
              check.point = check.state.maker(check.state.base);
            }

            return check.point;
          }

          if (!check.poly) {
            check.poly = polyStyle(check.state.base);
          }

          return check.poly;
        }

        return undefined; 
      }
    });
    return {
      init: () => vectorLayer,
      update: data => {
        console.log('todo... find values matching the ID and update');
      },
      registerOptionsUI: builder => {
        var _publicGeoJSONFiles;

        const layerInfo = features.pipe((0,first.P)(), (0,operators_map.U)(v => getLayerPropertyInfo(v)));

        if (!publicGeoJSONFiles) {
          initGeojsonFiles();
        }

        builder.addSelect({
          path: 'config.src',
          name: 'GeoJSON URL',
          settings: {
            options: (_publicGeoJSONFiles = publicGeoJSONFiles) !== null && _publicGeoJSONFiles !== void 0 ? _publicGeoJSONFiles : [],
            allowCustomValue: true
          },
          defaultValue: geojsonLayer_defaultOptions.src
        }).addCustomEditor({
          id: 'config.style',
          path: 'config.style',
          name: 'Default style',
          description: 'The style to apply when no rules above match',
          editor: StyleEditor,
          settings: {
            simpleFixedValues: true,
            layerInfo
          },
          defaultValue: geojsonLayer_defaultOptions.style
        }).addCustomEditor({
          id: 'config.rules',
          path: 'config.rules',
          name: 'Style rules',
          description: 'Apply styles based on feature properties',
          editor: GeomapStyleRulesEditor,
          settings: {
            features,
            layerInfo
          },
          defaultValue: []
        });
      }
    };
  },
  defaultOptions: geojsonLayer_defaultOptions
}; 

async function initGeojsonFiles() {
  if (publicGeoJSONFiles) {
    return;
  }

  publicGeoJSONFiles = [];
  const ds = await (0,grafana_runtime_src.getDataSourceSrv)().get('-- Grafana --');

  for (let folder of ['maps', 'gazetteer']) {
    ds.listFiles(folder).subscribe({
      next: frame => {
        frame.forEach(item => {
          if (item.name.endsWith('.geojson')) {
            const value = `public/${folder}/${item.name}`;
            publicGeoJSONFiles.push({
              value,
              label: value
            });
          }
        });
      }
    });
  }
}
;


var ARRAY_BUFFER = 0x8892;
var ELEMENT_ARRAY_BUFFER = 0x8893;
var STREAM_DRAW = 0x88e0;
var STATIC_DRAW = 0x88e4;
var DYNAMIC_DRAW = 0x88e8;
var UNSIGNED_BYTE = 0x1401;
var UNSIGNED_SHORT = 0x1403;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var CONTEXT_IDS = ['experimental-webgl', 'webgl', 'webkit-3d', 'moz-webgl'];
function getContext(canvas, opt_attributes) {
    var attributes = (0,obj.f0)({
        preserveDrawingBuffer: true,
        antialias: has.ME ? false : true, 
    }, opt_attributes);
    var ii = CONTEXT_IDS.length;
    for (var i = 0; i < ii; ++i) {
        try {
            var context = canvas.getContext(CONTEXT_IDS[i], attributes);
            if (context) {
                return  (context);
            }
        }
        catch (e) {
        }
    }
    return null;
}
var supportedExtensions;
function getSupportedExtensions() {
    if (!supportedExtensions) {
        var canvas = document.createElement('canvas');
        var gl = getContext(canvas);
        if (gl) {
            supportedExtensions = gl.getSupportedExtensions();
        }
    }
    return supportedExtensions;
}
;


var BufferUsage = {
    STATIC_DRAW: STATIC_DRAW,
    STREAM_DRAW: STREAM_DRAW,
    DYNAMIC_DRAW: DYNAMIC_DRAW,
};
var WebGLArrayBuffer =  (function () {
    function WebGLArrayBuffer(type, opt_usage) {
        this.array = null;
        this.type = type;
        (0,asserts.h)(type === ARRAY_BUFFER || type === ELEMENT_ARRAY_BUFFER, 62);
        this.usage = opt_usage !== undefined ? opt_usage : BufferUsage.STATIC_DRAW;
    }
    WebGLArrayBuffer.prototype.ofSize = function (size) {
        this.array = new (getArrayClassForType(this.type))(size);
    };
    WebGLArrayBuffer.prototype.fromArray = function (array) {
        var arrayClass = getArrayClassForType(this.type);
        this.array = arrayClass.from
            ? arrayClass.from(array)
            : new arrayClass(array);
    };
    WebGLArrayBuffer.prototype.fromArrayBuffer = function (buffer) {
        this.array = new (getArrayClassForType(this.type))(buffer);
    };
    WebGLArrayBuffer.prototype.getType = function () {
        return this.type;
    };
    WebGLArrayBuffer.prototype.getArray = function () {
        return this.array;
    };
    WebGLArrayBuffer.prototype.getUsage = function () {
        return this.usage;
    };
    WebGLArrayBuffer.prototype.getSize = function () {
        return this.array ? this.array.length : 0;
    };
    return WebGLArrayBuffer;
}());
function getArrayClassForType(type) {
    switch (type) {
        case ARRAY_BUFFER:
            return Float32Array;
        case ELEMENT_ARRAY_BUFFER:
            return Uint32Array;
        default:
            return Float32Array;
    }
}
 const Buffer = (WebGLArrayBuffer);
;
 const ContextEventType = ({
    LOST: 'webglcontextlost',
    RESTORED: 'webglcontextrestored',
});
;

var DEFAULT_VERTEX_SHADER = "\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n";
var DEFAULT_FRAGMENT_SHADER = "\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n  uniform float u_opacity;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;\n  }\n";
var WebGLPostProcessingPass =  (function () {
    function WebGLPostProcessingPass(options) {
        this.gl_ = options.webGlContext;
        var gl = this.gl_;
        this.scaleRatio_ = options.scaleRatio || 1;
        this.renderTargetTexture_ = gl.createTexture();
        this.renderTargetTextureSize_ = null;
        this.frameBuffer_ = gl.createFramebuffer();
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, options.vertexShader || DEFAULT_VERTEX_SHADER);
        gl.compileShader(vertexShader);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, options.fragmentShader || DEFAULT_FRAGMENT_SHADER);
        gl.compileShader(fragmentShader);
        this.renderTargetProgram_ = gl.createProgram();
        gl.attachShader(this.renderTargetProgram_, vertexShader);
        gl.attachShader(this.renderTargetProgram_, fragmentShader);
        gl.linkProgram(this.renderTargetProgram_);
        this.renderTargetVerticesBuffer_ = gl.createBuffer();
        var verticesArray = [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1];
        gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesArray), gl.STATIC_DRAW);
        this.renderTargetAttribLocation_ = gl.getAttribLocation(this.renderTargetProgram_, 'a_position');
        this.renderTargetUniformLocation_ = gl.getUniformLocation(this.renderTargetProgram_, 'u_screenSize');
        this.renderTargetOpacityLocation_ = gl.getUniformLocation(this.renderTargetProgram_, 'u_opacity');
        this.renderTargetTextureLocation_ = gl.getUniformLocation(this.renderTargetProgram_, 'u_image');
        this.uniforms_ = [];
        options.uniforms &&
            Object.keys(options.uniforms).forEach(function (name) {
                this.uniforms_.push({
                    value: options.uniforms[name],
                    location: gl.getUniformLocation(this.renderTargetProgram_, name),
                });
            }.bind(this));
    }
    WebGLPostProcessingPass.prototype.getGL = function () {
        return this.gl_;
    };
    WebGLPostProcessingPass.prototype.init = function (frameState) {
        var gl = this.getGL();
        var textureSize = [
            gl.drawingBufferWidth * this.scaleRatio_,
            gl.drawingBufferHeight * this.scaleRatio_,
        ];
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
        gl.viewport(0, 0, textureSize[0], textureSize[1]);
        if (!this.renderTargetTextureSize_ ||
            this.renderTargetTextureSize_[0] !== textureSize[0] ||
            this.renderTargetTextureSize_[1] !== textureSize[1]) {
            this.renderTargetTextureSize_ = textureSize;
            var level = 0;
            var internalFormat = gl.RGBA;
            var border = 0;
            var format = gl.RGBA;
            var type = gl.UNSIGNED_BYTE;
            var data = null;
            gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, textureSize[0], textureSize[1], border, format, type, data);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.renderTargetTexture_, 0);
        }
    };
    WebGLPostProcessingPass.prototype.apply = function (frameState, nextPass, preCompose, postCompose) {
        var gl = this.getGL();
        var size = frameState.size;
        gl.bindFramebuffer(gl.FRAMEBUFFER, nextPass ? nextPass.getFrameBuffer() : null);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
        if (!nextPass) {
            var canvasId = (0,util.sq)(gl.canvas);
            if (!frameState.renderTargets[canvasId]) {
                var attributes = gl.getContextAttributes();
                if (attributes && attributes.preserveDrawingBuffer) {
                    gl.clearColor(0.0, 0.0, 0.0, 0.0);
                    gl.clear(gl.COLOR_BUFFER_BIT);
                }
                frameState.renderTargets[canvasId] = true;
            }
        }
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
        gl.useProgram(this.renderTargetProgram_);
        gl.enableVertexAttribArray(this.renderTargetAttribLocation_);
        gl.vertexAttribPointer(this.renderTargetAttribLocation_, 2, gl.FLOAT, false, 0, 0);
        gl.uniform2f(this.renderTargetUniformLocation_, size[0], size[1]);
        gl.uniform1i(this.renderTargetTextureLocation_, 0);
        var opacity = frameState.layerStatesArray[frameState.layerIndex].opacity;
        gl.uniform1f(this.renderTargetOpacityLocation_, opacity);
        this.applyUniforms(frameState);
        if (preCompose) {
            preCompose(gl, frameState);
        }
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (postCompose) {
            postCompose(gl, frameState);
        }
    };
    WebGLPostProcessingPass.prototype.getFrameBuffer = function () {
        return this.frameBuffer_;
    };
    WebGLPostProcessingPass.prototype.applyUniforms = function (frameState) {
        var gl = this.getGL();
        var value;
        var textureSlot = 1;
        this.uniforms_.forEach(function (uniform) {
            value =
                typeof uniform.value === 'function'
                    ? uniform.value(frameState)
                    : uniform.value;
            if (value instanceof HTMLCanvasElement || value instanceof ImageData) {
                if (!uniform.texture) {
                    uniform.texture = gl.createTexture();
                }
                gl.activeTexture(gl["TEXTURE".concat(textureSlot)]);
                gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                if (value instanceof ImageData) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, value.width, value.height, 0, gl.UNSIGNED_BYTE, new Uint8Array(value.data));
                }
                else {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
                }
                gl.uniform1i(uniform.location, textureSlot++);
            }
            else if (Array.isArray(value)) {
                switch (value.length) {
                    case 2:
                        gl.uniform2f(uniform.location, value[0], value[1]);
                        return;
                    case 3:
                        gl.uniform3f(uniform.location, value[0], value[1], value[2]);
                        return;
                    case 4:
                        gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);
                        return;
                    default:
                        return;
                }
            }
            else if (typeof value === 'number') {
                gl.uniform1f(uniform.location, value);
            }
        });
    };
    return WebGLPostProcessingPass;
}());
 const PostProcessingPass = (WebGLPostProcessingPass);
;
function create() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function fromTransform(mat4, transform) {
    mat4[0] = transform[0];
    mat4[1] = transform[1];
    mat4[4] = transform[2];
    mat4[5] = transform[3];
    mat4[12] = transform[4];
    mat4[13] = transform[5];
    return mat4;
}
;
var Helper_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var ShaderType = {
    FRAGMENT_SHADER: 0x8b30,
    VERTEX_SHADER: 0x8b31,
};
var DefaultUniform = {
    PROJECTION_MATRIX: 'u_projectionMatrix',
    OFFSET_SCALE_MATRIX: 'u_offsetScaleMatrix',
    OFFSET_ROTATION_MATRIX: 'u_offsetRotateMatrix',
    TIME: 'u_time',
    ZOOM: 'u_zoom',
    RESOLUTION: 'u_resolution',
};
var AttributeType = {
    UNSIGNED_BYTE: UNSIGNED_BYTE,
    UNSIGNED_SHORT: UNSIGNED_SHORT,
    UNSIGNED_INT: UNSIGNED_INT,
    FLOAT: FLOAT,
};
var canvasCache = {};
function getSharedCanvasCacheKey(key) {
    return 'shared/' + key;
}
var uniqueCanvasCacheKeyCount = 0;
function getUniqueCanvasCacheKey() {
    var key = 'unique/' + uniqueCanvasCacheKeyCount;
    uniqueCanvasCacheKeyCount += 1;
    return key;
}
function getCanvas(key) {
    var cacheItem = canvasCache[key];
    if (!cacheItem) {
        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.left = '0';
        cacheItem = { users: 0, canvas: canvas };
        canvasCache[key] = cacheItem;
    }
    cacheItem.users += 1;
    return cacheItem.canvas;
}
function releaseCanvas(key) {
    var cacheItem = canvasCache[key];
    if (!cacheItem) {
        return;
    }
    cacheItem.users -= 1;
    if (cacheItem.users > 0) {
        return;
    }
    var canvas = cacheItem.canvas;
    var gl = getContext(canvas);
    var extension = gl.getExtension('WEBGL_lose_context');
    if (extension) {
        extension.loseContext();
    }
    delete canvasCache[key];
}
var WebGLHelper =  (function (_super) {
    Helper_extends(WebGLHelper, _super);
    function WebGLHelper(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options || {};
        _this.boundHandleWebGLContextLost_ = _this.handleWebGLContextLost.bind(_this);
        _this.boundHandleWebGLContextRestored_ =
            _this.handleWebGLContextRestored.bind(_this);
        _this.canvasCacheKey_ = options.canvasCacheKey
            ? getSharedCanvasCacheKey(options.canvasCacheKey)
            : getUniqueCanvasCacheKey();
        _this.canvas_ = getCanvas(_this.canvasCacheKey_);
        _this.gl_ = getContext(_this.canvas_);
        _this.bufferCache_ = {};
        _this.extensionCache_ = {};
        _this.currentProgram_ = null;
        _this.canvas_.addEventListener(ContextEventType.LOST, _this.boundHandleWebGLContextLost_);
        _this.canvas_.addEventListener(ContextEventType.RESTORED, _this.boundHandleWebGLContextRestored_);
        _this.offsetRotateMatrix_ = (0,ol_transform.Ue)();
        _this.offsetScaleMatrix_ = (0,ol_transform.Ue)();
        _this.tmpMat4_ = create();
        _this.uniformLocations_ = {};
        _this.attribLocations_ = {};
        _this.uniforms_ = [];
        if (options.uniforms) {
            _this.setUniforms(options.uniforms);
        }
        var gl = _this.getGL();
        _this.postProcessPasses_ = options.postProcesses
            ? options.postProcesses.map(function (options) {
                return new PostProcessingPass({
                    webGlContext: gl,
                    scaleRatio: options.scaleRatio,
                    vertexShader: options.vertexShader,
                    fragmentShader: options.fragmentShader,
                    uniforms: options.uniforms,
                });
            })
            : [new PostProcessingPass({ webGlContext: gl })];
        _this.shaderCompileErrors_ = null;
        _this.startTime_ = Date.now();
        return _this;
    }
    WebGLHelper.prototype.setUniforms = function (uniforms) {
        this.uniforms_ = [];
        for (var name_1 in uniforms) {
            this.uniforms_.push({
                name: name_1,
                value: uniforms[name_1],
            });
        }
        this.uniformLocations_ = {};
    };
    WebGLHelper.prototype.canvasCacheKeyMatches = function (canvasCacheKey) {
        return this.canvasCacheKey_ === getSharedCanvasCacheKey(canvasCacheKey);
    };
    WebGLHelper.prototype.getExtension = function (name) {
        if (name in this.extensionCache_) {
            return this.extensionCache_[name];
        }
        var extension = this.gl_.getExtension(name);
        this.extensionCache_[name] = extension;
        return extension;
    };
    WebGLHelper.prototype.bindBuffer = function (buffer) {
        var gl = this.getGL();
        var bufferKey = (0,util.sq)(buffer);
        var bufferCache = this.bufferCache_[bufferKey];
        if (!bufferCache) {
            var webGlBuffer = gl.createBuffer();
            bufferCache = {
                buffer: buffer,
                webGlBuffer: webGlBuffer,
            };
            this.bufferCache_[bufferKey] = bufferCache;
        }
        gl.bindBuffer(buffer.getType(), bufferCache.webGlBuffer);
    };
    WebGLHelper.prototype.flushBufferData = function (buffer) {
        var gl = this.getGL();
        this.bindBuffer(buffer);
        gl.bufferData(buffer.getType(), buffer.getArray(), buffer.getUsage());
    };
    WebGLHelper.prototype.deleteBuffer = function (buf) {
        var gl = this.getGL();
        var bufferKey = (0,util.sq)(buf);
        var bufferCacheEntry = this.bufferCache_[bufferKey];
        if (bufferCacheEntry && !gl.isContextLost()) {
            gl.deleteBuffer(bufferCacheEntry.webGlBuffer);
        }
        delete this.bufferCache_[bufferKey];
    };
    WebGLHelper.prototype.disposeInternal = function () {
        this.canvas_.removeEventListener(ContextEventType.LOST, this.boundHandleWebGLContextLost_);
        this.canvas_.removeEventListener(ContextEventType.RESTORED, this.boundHandleWebGLContextRestored_);
        releaseCanvas(this.canvasCacheKey_);
        delete this.gl_;
        delete this.canvas_;
    };
    WebGLHelper.prototype.prepareDraw = function (frameState, opt_disableAlphaBlend) {
        var gl = this.getGL();
        var canvas = this.getCanvas();
        var size = frameState.size;
        var pixelRatio = frameState.pixelRatio;
        canvas.width = size[0] * pixelRatio;
        canvas.height = size[1] * pixelRatio;
        canvas.style.width = size[0] + 'px';
        canvas.style.height = size[1] + 'px';
        gl.useProgram(this.currentProgram_);
        for (var i = this.postProcessPasses_.length - 1; i >= 0; i--) {
            this.postProcessPasses_[i].init(frameState);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, opt_disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(this.currentProgram_);
        this.applyFrameState(frameState);
        this.applyUniforms(frameState);
    };
    WebGLHelper.prototype.prepareDrawToRenderTarget = function (frameState, renderTarget, opt_disableAlphaBlend) {
        var gl = this.getGL();
        var size = renderTarget.getSize();
        gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.getFramebuffer());
        gl.viewport(0, 0, size[0], size[1]);
        gl.bindTexture(gl.TEXTURE_2D, renderTarget.getTexture());
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, opt_disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(this.currentProgram_);
        this.applyFrameState(frameState);
        this.applyUniforms(frameState);
    };
    WebGLHelper.prototype.drawElements = function (start, end) {
        var gl = this.getGL();
        this.getExtension('OES_element_index_uint');
        var elementType = gl.UNSIGNED_INT;
        var elementSize = 4;
        var numItems = end - start;
        var offsetInBytes = start * elementSize;
        gl.drawElements(gl.TRIANGLES, numItems, elementType, offsetInBytes);
    };
    WebGLHelper.prototype.finalizeDraw = function (frameState, preCompose, postCompose) {
        for (var i = 0, ii = this.postProcessPasses_.length; i < ii; i++) {
            if (i === ii - 1) {
                this.postProcessPasses_[i].apply(frameState, null, preCompose, postCompose);
            }
            else {
                this.postProcessPasses_[i].apply(frameState, this.postProcessPasses_[i + 1]);
            }
        }
    };
    WebGLHelper.prototype.getCanvas = function () {
        return this.canvas_;
    };
    WebGLHelper.prototype.getGL = function () {
        return this.gl_;
    };
    WebGLHelper.prototype.applyFrameState = function (frameState) {
        var size = frameState.size;
        var rotation = frameState.viewState.rotation;
        var offsetScaleMatrix = (0,ol_transform.mc)(this.offsetScaleMatrix_);
        (0,ol_transform.bA)(offsetScaleMatrix, 2 / size[0], 2 / size[1]);
        var offsetRotateMatrix = (0,ol_transform.mc)(this.offsetRotateMatrix_);
        if (rotation !== 0) {
            (0,ol_transform.U1)(offsetRotateMatrix, -rotation);
        }
        this.setUniformMatrixValue(DefaultUniform.OFFSET_SCALE_MATRIX, fromTransform(this.tmpMat4_, offsetScaleMatrix));
        this.setUniformMatrixValue(DefaultUniform.OFFSET_ROTATION_MATRIX, fromTransform(this.tmpMat4_, offsetRotateMatrix));
        this.setUniformFloatValue(DefaultUniform.TIME, (Date.now() - this.startTime_) * 0.001);
        this.setUniformFloatValue(DefaultUniform.ZOOM, frameState.viewState.zoom);
        this.setUniformFloatValue(DefaultUniform.RESOLUTION, frameState.viewState.resolution);
    };
    WebGLHelper.prototype.applyUniforms = function (frameState) {
        var gl = this.getGL();
        var value;
        var textureSlot = 0;
        this.uniforms_.forEach(function (uniform) {
            value =
                typeof uniform.value === 'function'
                    ? uniform.value(frameState)
                    : uniform.value;
            if (value instanceof HTMLCanvasElement ||
                value instanceof HTMLImageElement ||
                value instanceof ImageData) {
                if (!uniform.texture) {
                    uniform.prevValue = undefined;
                    uniform.texture = gl.createTexture();
                }
                gl.activeTexture(gl["TEXTURE".concat(textureSlot)]);
                gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                var imageReady = !(value instanceof HTMLImageElement) ||
 (value).complete;
                if (imageReady && uniform.prevValue !== value) {
                    uniform.prevValue = value;
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
                }
                gl.uniform1i(this.getUniformLocation(uniform.name), textureSlot++);
            }
            else if (Array.isArray(value) && value.length === 6) {
                this.setUniformMatrixValue(uniform.name, fromTransform(this.tmpMat4_, value));
            }
            else if (Array.isArray(value) && value.length <= 4) {
                switch (value.length) {
                    case 2:
                        gl.uniform2f(this.getUniformLocation(uniform.name), value[0], value[1]);
                        return;
                    case 3:
                        gl.uniform3f(this.getUniformLocation(uniform.name), value[0], value[1], value[2]);
                        return;
                    case 4:
                        gl.uniform4f(this.getUniformLocation(uniform.name), value[0], value[1], value[2], value[3]);
                        return;
                    default:
                        return;
                }
            }
            else if (typeof value === 'number') {
                gl.uniform1f(this.getUniformLocation(uniform.name), value);
            }
        }.bind(this));
    };
    WebGLHelper.prototype.useProgram = function (program) {
        if (program == this.currentProgram_) {
            return false;
        }
        else {
            var gl = this.getGL();
            gl.useProgram(program);
            this.currentProgram_ = program;
            this.uniformLocations_ = {};
            this.attribLocations_ = {};
            return true;
        }
    };
    WebGLHelper.prototype.compileShader = function (source, type) {
        var gl = this.getGL();
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    };
    WebGLHelper.prototype.getProgram = function (fragmentShaderSource, vertexShaderSource) {
        var gl = this.getGL();
        var fragmentShader = this.compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        var vertexShader = this.compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        var program = gl.createProgram();
        gl.attachShader(program, fragmentShader);
        gl.attachShader(program, vertexShader);
        gl.linkProgram(program);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            var message = "Fragment shader compliation failed: ".concat(gl.getShaderInfoLog(fragmentShader));
            throw new Error(message);
        }
        gl.deleteShader(fragmentShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            var message = "Vertex shader compilation failed: ".concat(gl.getShaderInfoLog(vertexShader));
            throw new Error(message);
        }
        gl.deleteShader(vertexShader);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            var message = "GL program linking failed: ".concat(gl.getShaderInfoLog(vertexShader));
            throw new Error(message);
        }
        return program;
    };
    WebGLHelper.prototype.getUniformLocation = function (name) {
        if (this.uniformLocations_[name] === undefined) {
            this.uniformLocations_[name] = this.getGL().getUniformLocation(this.currentProgram_, name);
        }
        return this.uniformLocations_[name];
    };
    WebGLHelper.prototype.getAttributeLocation = function (name) {
        if (this.attribLocations_[name] === undefined) {
            this.attribLocations_[name] = this.getGL().getAttribLocation(this.currentProgram_, name);
        }
        return this.attribLocations_[name];
    };
    WebGLHelper.prototype.makeProjectionTransform = function (frameState, transform) {
        var size = frameState.size;
        var rotation = frameState.viewState.rotation;
        var resolution = frameState.viewState.resolution;
        var center = frameState.viewState.center;
        (0,ol_transform.mc)(transform);
        (0,ol_transform.qC)(transform, 0, 0, 2 / (resolution * size[0]), 2 / (resolution * size[1]), -rotation, -center[0], -center[1]);
        return transform;
    };
    WebGLHelper.prototype.setUniformFloatValue = function (uniform, value) {
        this.getGL().uniform1f(this.getUniformLocation(uniform), value);
    };
    WebGLHelper.prototype.setUniformFloatVec4 = function (uniform, value) {
        this.getGL().uniform4fv(this.getUniformLocation(uniform), value);
    };
    WebGLHelper.prototype.setUniformMatrixValue = function (uniform, value) {
        this.getGL().uniformMatrix4fv(this.getUniformLocation(uniform), false, value);
    };
    WebGLHelper.prototype.enableAttributeArray_ = function (attribName, size, type, stride, offset) {
        var location = this.getAttributeLocation(attribName);
        if (location < 0) {
            return;
        }
        this.getGL().enableVertexAttribArray(location);
        this.getGL().vertexAttribPointer(location, size, type, false, stride, offset);
    };
    WebGLHelper.prototype.enableAttributes = function (attributes) {
        var stride = computeAttributesStride(attributes);
        var offset = 0;
        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            this.enableAttributeArray_(attr.name, attr.size, attr.type || FLOAT, stride, offset);
            offset += attr.size * getByteSizeFromType(attr.type);
        }
    };
    WebGLHelper.prototype.handleWebGLContextLost = function () {
        (0,obj.ZH)(this.bufferCache_);
        this.currentProgram_ = null;
    };
    WebGLHelper.prototype.handleWebGLContextRestored = function () { };
    WebGLHelper.prototype.createTexture = function (size, opt_data, opt_texture) {
        var gl = this.getGL();
        var texture = opt_texture || gl.createTexture();
        var level = 0;
        var internalFormat = gl.RGBA;
        var border = 0;
        var format = gl.RGBA;
        var type = gl.UNSIGNED_BYTE;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (opt_data) {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, format, type, opt_data);
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, size[0], size[1], border, format, type, null);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return texture;
    };
    return WebGLHelper;
}(Disposable.Z));
function computeAttributesStride(attributes) {
    var stride = 0;
    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        stride += attr.size * getByteSizeFromType(attr.type);
    }
    return stride;
}
function getByteSizeFromType(type) {
    switch (type) {
        case AttributeType.UNSIGNED_BYTE:
            return Uint8Array.BYTES_PER_ELEMENT;
        case AttributeType.UNSIGNED_SHORT:
            return Uint16Array.BYTES_PER_ELEMENT;
        case AttributeType.UNSIGNED_INT:
            return Uint32Array.BYTES_PER_ELEMENT;
        case AttributeType.FLOAT:
        default:
            return Float32Array.BYTES_PER_ELEMENT;
    }
}
 const Helper = (WebGLHelper);
;
var webgl_Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var WebGLWorkerMessageType = {
    GENERATE_BUFFERS: 'GENERATE_BUFFERS',
};
var WebGLLayerRenderer =  (function (_super) {
    webgl_Layer_extends(WebGLLayerRenderer, _super);
    function WebGLLayerRenderer(layer, opt_options) {
        var _this = _super.call(this, layer) || this;
        var options = opt_options || {};
        _this.inversePixelTransform_ = (0,ol_transform.Ue)();
        _this.pixelContext_ = null;
        _this.postProcesses_ = options.postProcesses;
        _this.uniforms_ = options.uniforms;
        _this.helper;
        layer.addChangeListener(Property.MAP, _this.removeHelper.bind(_this));
        _this.dispatchPreComposeEvent = _this.dispatchPreComposeEvent.bind(_this);
        _this.dispatchPostComposeEvent = _this.dispatchPostComposeEvent.bind(_this);
        return _this;
    }
    WebGLLayerRenderer.prototype.dispatchPreComposeEvent = function (context, frameState) {
        var layer = this.getLayer();
        if (layer.hasListener(render_EventType.PRECOMPOSE)) {
            var event_1 = new render_Event(render_EventType.PRECOMPOSE, undefined, frameState, context);
            layer.dispatchEvent(event_1);
        }
    };
    WebGLLayerRenderer.prototype.dispatchPostComposeEvent = function (context, frameState) {
        var layer = this.getLayer();
        if (layer.hasListener(render_EventType.POSTCOMPOSE)) {
            var event_2 = new render_Event(render_EventType.POSTCOMPOSE, undefined, frameState, context);
            layer.dispatchEvent(event_2);
        }
    };
    WebGLLayerRenderer.prototype.reset = function (options) {
        this.uniforms_ = options.uniforms;
        if (this.helper) {
            this.helper.setUniforms(this.uniforms_);
        }
    };
    WebGLLayerRenderer.prototype.removeHelper = function () {
        if (this.helper) {
            this.helper.dispose();
            delete this.helper;
        }
    };
    WebGLLayerRenderer.prototype.prepareFrame = function (frameState) {
        if (this.getLayer().getRenderSource()) {
            var incrementGroup = true;
            var groupNumber = -1;
            var className = void 0;
            for (var i = 0, ii = frameState.layerStatesArray.length; i < ii; i++) {
                var layer = frameState.layerStatesArray[i].layer;
                var renderer = layer.getRenderer();
                if (!(renderer instanceof WebGLLayerRenderer)) {
                    incrementGroup = true;
                    continue;
                }
                var layerClassName = layer.getClassName();
                if (incrementGroup || layerClassName !== className) {
                    groupNumber += 1;
                    incrementGroup = false;
                }
                className = layerClassName;
                if (renderer === this) {
                    break;
                }
            }
            var canvasCacheKey = 'map/' + frameState.mapId + '/group/' + groupNumber;
            if (!this.helper || !this.helper.canvasCacheKeyMatches(canvasCacheKey)) {
                this.removeHelper();
                this.helper = new Helper({
                    postProcesses: this.postProcesses_,
                    uniforms: this.uniforms_,
                    canvasCacheKey: canvasCacheKey,
                });
                if (className) {
                    this.helper.getCanvas().className = className;
                }
                this.afterHelperCreated();
            }
        }
        return this.prepareFrameInternal(frameState);
    };
    WebGLLayerRenderer.prototype.afterHelperCreated = function () { };
    WebGLLayerRenderer.prototype.prepareFrameInternal = function (frameState) {
        return true;
    };
    WebGLLayerRenderer.prototype.disposeInternal = function () {
        this.removeHelper();
        _super.prototype.disposeInternal.call(this);
    };
    WebGLLayerRenderer.prototype.dispatchRenderEvent_ = function (type, context, frameState) {
        var layer = this.getLayer();
        if (layer.hasListener(type)) {
            (0,ol_transform.qC)(this.inversePixelTransform_, 0, 0, frameState.pixelRatio, -frameState.pixelRatio, 0, 0, -frameState.size[1]);
            var event_3 = new render_Event(type, this.inversePixelTransform_, frameState, context);
            layer.dispatchEvent(event_3);
        }
    };
    WebGLLayerRenderer.prototype.preRender = function (context, frameState) {
        this.dispatchRenderEvent_(render_EventType.PRERENDER, context, frameState);
    };
    WebGLLayerRenderer.prototype.postRender = function (context, frameState) {
        this.dispatchRenderEvent_(render_EventType.POSTRENDER, context, frameState);
    };
    WebGLLayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        var renderPixel = (0,ol_transform.nn)([frameState.pixelRatio, 0, 0, frameState.pixelRatio, 0, 0], pixel.slice());
        var gl = this.helper.getGL();
        if (!gl) {
            return null;
        }
        var layer = this.getLayer();
        var layerExtent = layer.getExtent();
        if (layerExtent) {
            var renderCoordinate = (0,ol_transform.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
            if (!(0,ol_extent.b8)(layerExtent, renderCoordinate)) {
                return null;
            }
        }
        var attributes = gl.getContextAttributes();
        if (!attributes || !attributes.preserveDrawingBuffer) {
            return new Uint8Array();
        }
        var x = Math.round(renderPixel[0]);
        var y = Math.round(renderPixel[1]);
        var pixelContext = this.pixelContext_;
        if (!pixelContext) {
            var pixelCanvas = document.createElement('canvas');
            pixelCanvas.width = 1;
            pixelCanvas.height = 1;
            pixelContext = pixelCanvas.getContext('2d');
            this.pixelContext_ = pixelContext;
        }
        pixelContext.clearRect(0, 0, 1, 1);
        var data;
        try {
            pixelContext.drawImage(gl.canvas, x, y, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        }
        catch (err) {
            return data;
        }
        if (data[3] === 0) {
            return null;
        }
        return data;
    };
    return WebGLLayerRenderer;
}(renderer_Layer));
var tmpArray_ = ( null && ([]));
var bufferPositions_ = { vertexPosition: 0, indexPosition: 0 };
function writePointVertex(buffer, pos, x, y, index) {
    buffer[pos + 0] = x;
    buffer[pos + 1] = y;
    buffer[pos + 2] = index;
}
function writePointFeatureToBuffers(instructions, elementIndex, vertexBuffer, indexBuffer, customAttributesCount, bufferPositions) {
    var baseVertexAttrsCount = 3;
    var baseInstructionsCount = 2;
    var stride = baseVertexAttrsCount + customAttributesCount;
    var x = instructions[elementIndex + 0];
    var y = instructions[elementIndex + 1];
    var customAttrs = tmpArray_;
    customAttrs.length = customAttributesCount;
    for (var i = 0; i < customAttrs.length; i++) {
        customAttrs[i] = instructions[elementIndex + baseInstructionsCount + i];
    }
    var vPos = bufferPositions ? bufferPositions.vertexPosition : 0;
    var iPos = bufferPositions ? bufferPositions.indexPosition : 0;
    var baseIndex = vPos / stride;
    writePointVertex(vertexBuffer, vPos, x, y, 0);
    customAttrs.length &&
        vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 1);
    customAttrs.length &&
        vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 2);
    customAttrs.length &&
        vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    writePointVertex(vertexBuffer, vPos, x, y, 3);
    customAttrs.length &&
        vertexBuffer.set(customAttrs, vPos + baseVertexAttrsCount);
    vPos += stride;
    indexBuffer[iPos++] = baseIndex;
    indexBuffer[iPos++] = baseIndex + 1;
    indexBuffer[iPos++] = baseIndex + 3;
    indexBuffer[iPos++] = baseIndex + 1;
    indexBuffer[iPos++] = baseIndex + 2;
    indexBuffer[iPos++] = baseIndex + 3;
    bufferPositions_.vertexPosition = vPos;
    bufferPositions_.indexPosition = iPos;
    return bufferPositions_;
}
function getBlankImageData() {
    var canvas = document.createElement('canvas');
    var image = canvas.getContext('2d').createImageData(1, 1);
    image.data[0] = 255;
    image.data[1] = 255;
    image.data[2] = 255;
    image.data[3] = 255;
    return image;
}
function colorEncodeId(id, opt_array) {
    var array = opt_array || [];
    var radix = 256;
    var divide = radix - 1;
    array[0] = Math.floor(id / radix / radix / radix) / divide;
    array[1] = (Math.floor(id / radix / radix) % radix) / divide;
    array[2] = (Math.floor(id / radix) % radix) / divide;
    array[3] = (id % radix) / divide;
    return array;
}
function colorDecodeId(color) {
    var id = 0;
    var radix = 256;
    var mult = radix - 1;
    id += Math.round(color[0] * radix * radix * radix * mult);
    id += Math.round(color[1] * radix * radix * mult);
    id += Math.round(color[2] * radix * mult);
    id += Math.round(color[3] * mult);
    return id;
}
 const webgl_Layer = (WebGLLayerRenderer);
;

var tmpArray4 = new Uint8Array(4);
var WebGLRenderTarget =  (function () {
    function WebGLRenderTarget(helper, opt_size) {
        this.helper_ = helper;
        var gl = helper.getGL();
        this.texture_ = gl.createTexture();
        this.framebuffer_ = gl.createFramebuffer();
        this.size_ = opt_size || [1, 1];
        this.data_ = new Uint8Array(0);
        this.dataCacheDirty_ = true;
        this.updateSize_();
    }
    WebGLRenderTarget.prototype.setSize = function (size) {
        if ((0,array.fS)(size, this.size_)) {
            return;
        }
        this.size_[0] = size[0];
        this.size_[1] = size[1];
        this.updateSize_();
    };
    WebGLRenderTarget.prototype.getSize = function () {
        return this.size_;
    };
    WebGLRenderTarget.prototype.clearCachedData = function () {
        this.dataCacheDirty_ = true;
    };
    WebGLRenderTarget.prototype.readAll = function () {
        if (this.dataCacheDirty_) {
            var size = this.size_;
            var gl = this.helper_.getGL();
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
            gl.readPixels(0, 0, size[0], size[1], gl.RGBA, gl.UNSIGNED_BYTE, this.data_);
            this.dataCacheDirty_ = false;
        }
        return this.data_;
    };
    WebGLRenderTarget.prototype.readPixel = function (x, y) {
        if (x < 0 || y < 0 || x > this.size_[0] || y >= this.size_[1]) {
            tmpArray4[0] = 0;
            tmpArray4[1] = 0;
            tmpArray4[2] = 0;
            tmpArray4[3] = 0;
            return tmpArray4;
        }
        this.readAll();
        var index = Math.floor(x) + (this.size_[1] - Math.floor(y) - 1) * this.size_[0];
        tmpArray4[0] = this.data_[index * 4];
        tmpArray4[1] = this.data_[index * 4 + 1];
        tmpArray4[2] = this.data_[index * 4 + 2];
        tmpArray4[3] = this.data_[index * 4 + 3];
        return tmpArray4;
    };
    WebGLRenderTarget.prototype.getTexture = function () {
        return this.texture_;
    };
    WebGLRenderTarget.prototype.getFramebuffer = function () {
        return this.framebuffer_;
    };
    WebGLRenderTarget.prototype.updateSize_ = function () {
        var size = this.size_;
        var gl = this.helper_.getGL();
        this.texture_ = this.helper_.createTexture(size, null, this.texture_);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
        gl.viewport(0, 0, size[0], size[1]);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture_, 0);
        this.data_ = new Uint8Array(size[0] * size[1] * 4);
    };
    return WebGLRenderTarget;
}());
 const RenderTarget = (WebGLRenderTarget);
;
 var webgl_Buffer = __webpack_require__("?7500")["Buffer"];
function webgl_create() {
    var source = "var e=\"function\"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError(\"Cannot convert undefined or null to object\");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n=\"GENERATE_BUFFERS\",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,a){var u=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=a?a.vertexPosition:0,h=a?a.indexPosition:0,d=b/u;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=u,l,v,1),c.length&&i.set(c,b+3),o(i,b+=u,l,v,2),c.length&&i.set(c,b+3),o(i,b+=u,l,v,3),c.length&&i.set(c,b+3),b+=u,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o,s=r.customAttributesCount,a=2+s,u=new Float32Array(r.renderInstructions),l=u.length/a,v=4*l*(s+3),c=new Uint32Array(6*l),g=new Float32Array(v),b=0;b<u.length;b+=a)o=i(u,b,g,c,s,o);var h=e({vertexBuffer:g.buffer,indexBuffer:c.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[g.buffer,c.buffer,u.buffer])}};";
    return new Worker(typeof Blob === 'undefined'
        ? 'data:application/javascript;base64,' + webgl_Buffer.from(source, 'binary').toString('base64')
        : URL.createObjectURL(new Blob([source], { type: 'application/javascript' })));
}
;
var PointsLayer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();















var WebGLPointsLayerRenderer =  (function (_super) {
    PointsLayer_extends(WebGLPointsLayerRenderer, _super);
    function WebGLPointsLayerRenderer(layer, options) {
        var _this = this;
        var uniforms = options.uniforms || {};
        var projectionMatrixTransform = (0,ol_transform.Ue)();
        uniforms[DefaultUniform.PROJECTION_MATRIX] = projectionMatrixTransform;
        _this = _super.call(this, layer, {
            uniforms: uniforms,
            postProcesses: options.postProcesses,
        }) || this;
        _this.ready = false;
        _this.sourceRevision_ = -1;
        _this.verticesBuffer_ = new Buffer(ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.hitVerticesBuffer_ = new Buffer(ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.indicesBuffer_ = new Buffer(ELEMENT_ARRAY_BUFFER, DYNAMIC_DRAW);
        _this.vertexShader_ = options.vertexShader;
        _this.fragmentShader_ = options.fragmentShader;
        _this.program_;
        _this.hitDetectionEnabled_ =
            options.hitFragmentShader && options.hitVertexShader ? true : false;
        _this.hitVertexShader_ = options.hitVertexShader;
        _this.hitFragmentShader_ = options.hitFragmentShader;
        _this.hitProgram_;
        var customAttributes = options.attributes
            ? options.attributes.map(function (attribute) {
                return {
                    name: 'a_' + attribute.name,
                    size: 1,
                    type: AttributeType.FLOAT,
                };
            })
            : [];
        _this.attributes = [
            {
                name: 'a_position',
                size: 2,
                type: AttributeType.FLOAT,
            },
            {
                name: 'a_index',
                size: 1,
                type: AttributeType.FLOAT,
            },
        ].concat(customAttributes);
        _this.hitDetectionAttributes = [
            {
                name: 'a_position',
                size: 2,
                type: AttributeType.FLOAT,
            },
            {
                name: 'a_index',
                size: 1,
                type: AttributeType.FLOAT,
            },
            {
                name: 'a_hitColor',
                size: 4,
                type: AttributeType.FLOAT,
            },
            {
                name: 'a_featureUid',
                size: 1,
                type: AttributeType.FLOAT,
            },
        ].concat(customAttributes);
        _this.customAttributes = options.attributes ? options.attributes : [];
        _this.previousExtent_ = (0,ol_extent.lJ)();
        _this.currentTransform_ = projectionMatrixTransform;
        _this.renderTransform_ = (0,ol_transform.Ue)();
        _this.invertRenderTransform_ = (0,ol_transform.Ue)();
        _this.renderInstructions_ = new Float32Array(0);
        _this.hitRenderInstructions_ = new Float32Array(0);
        _this.hitRenderTarget_;
        _this.generateBuffersRun_ = 0;
        _this.worker_ = webgl_create();
        _this.worker_.addEventListener('message', 
        function (event) {
            var received = event.data;
            if (received.type === WebGLWorkerMessageType.GENERATE_BUFFERS) {
                var projectionTransform = received.projectionTransform;
                if (received.hitDetection) {
                    this.hitVerticesBuffer_.fromArrayBuffer(received.vertexBuffer);
                    this.helper.flushBufferData(this.hitVerticesBuffer_);
                }
                else {
                    this.verticesBuffer_.fromArrayBuffer(received.vertexBuffer);
                    this.helper.flushBufferData(this.verticesBuffer_);
                }
                this.indicesBuffer_.fromArrayBuffer(received.indexBuffer);
                this.helper.flushBufferData(this.indicesBuffer_);
                this.renderTransform_ = projectionTransform;
                (0,ol_transform.nb)(this.invertRenderTransform_, this.renderTransform_);
                if (received.hitDetection) {
                    this.hitRenderInstructions_ = new Float32Array(event.data.renderInstructions);
                }
                else {
                    this.renderInstructions_ = new Float32Array(event.data.renderInstructions);
                    if (received.generateBuffersRun === this.generateBuffersRun_) {
                        this.ready = true;
                    }
                }
                this.getLayer().changed();
            }
        }.bind(_this));
        _this.featureCache_ = {};
        _this.featureCount_ = 0;
        var source = _this.getLayer().getSource();
        _this.sourceListenKeys_ = [
            (0,events.oL)(source, VectorEventType.ADDFEATURE, _this.handleSourceFeatureAdded_, _this),
            (0,events.oL)(source, VectorEventType.CHANGEFEATURE, _this.handleSourceFeatureChanged_, _this),
            (0,events.oL)(source, VectorEventType.REMOVEFEATURE, _this.handleSourceFeatureDelete_, _this),
            (0,events.oL)(source, VectorEventType.CLEAR, _this.handleSourceFeatureClear_, _this),
        ];
        source.forEachFeature(function (feature) {
            this.featureCache_[(0,util.sq)(feature)] = {
                feature: feature,
                properties: feature.getProperties(),
                geometry: feature.getGeometry(),
            };
            this.featureCount_++;
        }.bind(_this));
        return _this;
    }
    WebGLPointsLayerRenderer.prototype.afterHelperCreated = function () {
        this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_);
        if (this.hitDetectionEnabled_) {
            this.hitProgram_ = this.helper.getProgram(this.hitFragmentShader_, this.hitVertexShader_);
            this.hitRenderTarget_ = new RenderTarget(this.helper);
        }
    };
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureAdded_ = function (event) {
        var feature = event.feature;
        this.featureCache_[(0,util.sq)(feature)] = {
            feature: feature,
            properties: feature.getProperties(),
            geometry: feature.getGeometry(),
        };
        this.featureCount_++;
    };
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureChanged_ = function (event) {
        var feature = event.feature;
        this.featureCache_[(0,util.sq)(feature)] = {
            feature: feature,
            properties: feature.getProperties(),
            geometry: feature.getGeometry(),
        };
    };
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureDelete_ = function (event) {
        var feature = event.feature;
        delete this.featureCache_[(0,util.sq)(feature)];
        this.featureCount_--;
    };
    WebGLPointsLayerRenderer.prototype.handleSourceFeatureClear_ = function () {
        this.featureCache_ = {};
        this.featureCount_ = 0;
    };
    WebGLPointsLayerRenderer.prototype.renderFrame = function (frameState) {
        var gl = this.helper.getGL();
        this.preRender(gl, frameState);
        var renderCount = this.indicesBuffer_.getSize();
        this.helper.drawElements(0, renderCount);
        this.helper.finalizeDraw(frameState, this.dispatchPreComposeEvent, this.dispatchPostComposeEvent);
        var canvas = this.helper.getCanvas();
        if (this.hitDetectionEnabled_) {
            this.renderHitDetection(frameState);
            this.hitRenderTarget_.clearCachedData();
        }
        this.postRender(gl, frameState);
        return canvas;
    };
    WebGLPointsLayerRenderer.prototype.prepareFrameInternal = function (frameState) {
        var layer = this.getLayer();
        var vectorSource = layer.getSource();
        var viewState = frameState.viewState;
        var viewNotMoving = !frameState.viewHints[ViewHint.ANIMATING] &&
            !frameState.viewHints[ViewHint.INTERACTING];
        var extentChanged = !(0,ol_extent.fS)(this.previousExtent_, frameState.extent);
        var sourceChanged = this.sourceRevision_ < vectorSource.getRevision();
        if (sourceChanged) {
            this.sourceRevision_ = vectorSource.getRevision();
        }
        if (viewNotMoving && (extentChanged || sourceChanged)) {
            var projection = viewState.projection;
            var resolution = viewState.resolution;
            var renderBuffer = layer instanceof BaseVector ? layer.getRenderBuffer() : 0;
            var extent = (0,ol_extent.f3)(frameState.extent, renderBuffer * resolution);
            vectorSource.loadFeatures(extent, resolution, projection);
            this.rebuildBuffers_(frameState);
            this.previousExtent_ = frameState.extent.slice();
        }
        this.helper.makeProjectionTransform(frameState, this.currentTransform_);
        (0,ol_transform.Jp)(this.currentTransform_, this.invertRenderTransform_);
        this.helper.useProgram(this.program_);
        this.helper.prepareDraw(frameState);
        this.helper.bindBuffer(this.verticesBuffer_);
        this.helper.bindBuffer(this.indicesBuffer_);
        this.helper.enableAttributes(this.attributes);
        return true;
    };
    WebGLPointsLayerRenderer.prototype.rebuildBuffers_ = function (frameState) {
        var projectionTransform = (0,ol_transform.Ue)();
        this.helper.makeProjectionTransform(frameState, projectionTransform);
        var totalInstructionsCount = (2 + this.customAttributes.length) * this.featureCount_;
        if (!this.renderInstructions_ ||
            this.renderInstructions_.length !== totalInstructionsCount) {
            this.renderInstructions_ = new Float32Array(totalInstructionsCount);
        }
        if (this.hitDetectionEnabled_) {
            var totalHitInstructionsCount = (7 + this.customAttributes.length) * this.featureCount_;
            if (!this.hitRenderInstructions_ ||
                this.hitRenderInstructions_.length !== totalHitInstructionsCount) {
                this.hitRenderInstructions_ = new Float32Array(totalHitInstructionsCount);
            }
        }
        var featureCache, geometry;
        var tmpCoords = [];
        var tmpColor = [];
        var renderIndex = 0;
        var hitIndex = 0;
        var hitColor;
        for (var featureUid in this.featureCache_) {
            featureCache = this.featureCache_[featureUid];
            geometry =  (featureCache.geometry);
            if (!geometry || geometry.getType() !== geom_GeometryType.Z.POINT) {
                continue;
            }
            tmpCoords[0] = geometry.getFlatCoordinates()[0];
            tmpCoords[1] = geometry.getFlatCoordinates()[1];
            (0,ol_transform.nn)(projectionTransform, tmpCoords);
            hitColor = colorEncodeId(hitIndex + 6, tmpColor);
            this.renderInstructions_[renderIndex++] = tmpCoords[0];
            this.renderInstructions_[renderIndex++] = tmpCoords[1];
            if (this.hitDetectionEnabled_) {
                this.hitRenderInstructions_[hitIndex++] = tmpCoords[0];
                this.hitRenderInstructions_[hitIndex++] = tmpCoords[1];
                this.hitRenderInstructions_[hitIndex++] = hitColor[0];
                this.hitRenderInstructions_[hitIndex++] = hitColor[1];
                this.hitRenderInstructions_[hitIndex++] = hitColor[2];
                this.hitRenderInstructions_[hitIndex++] = hitColor[3];
                this.hitRenderInstructions_[hitIndex++] = Number(featureUid);
            }
            var value = void 0;
            for (var j = 0; j < this.customAttributes.length; j++) {
                value = this.customAttributes[j].callback(featureCache.feature, featureCache.properties);
                this.renderInstructions_[renderIndex++] = value;
                if (this.hitDetectionEnabled_) {
                    this.hitRenderInstructions_[hitIndex++] = value;
                }
            }
        }
        var message = {
            type: WebGLWorkerMessageType.GENERATE_BUFFERS,
            renderInstructions: this.renderInstructions_.buffer,
            customAttributesCount: this.customAttributes.length,
        };
        message['projectionTransform'] = projectionTransform;
        message['generateBuffersRun'] = ++this.generateBuffersRun_;
        this.ready = false;
        this.worker_.postMessage(message, [this.renderInstructions_.buffer]);
        this.renderInstructions_ = null;
        if (this.hitDetectionEnabled_) {
            var hitMessage = {
                type: WebGLWorkerMessageType.GENERATE_BUFFERS,
                renderInstructions: this.hitRenderInstructions_.buffer,
                customAttributesCount: 5 + this.customAttributes.length,
            };
            hitMessage['projectionTransform'] = projectionTransform;
            hitMessage['hitDetection'] = true;
            this.worker_.postMessage(hitMessage, [
                this.hitRenderInstructions_.buffer,
            ]);
            this.hitRenderInstructions_ = null;
        }
    };
    WebGLPointsLayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, matches) {
        (0,asserts.h)(this.hitDetectionEnabled_, 66);
        if (!this.hitRenderInstructions_) {
            return undefined;
        }
        var pixel = (0,ol_transform.nn)(frameState.coordinateToPixelTransform, coordinate.slice());
        var data = this.hitRenderTarget_.readPixel(pixel[0] / 2, pixel[1] / 2);
        var color = [data[0] / 255, data[1] / 255, data[2] / 255, data[3] / 255];
        var index = colorDecodeId(color);
        var opacity = this.hitRenderInstructions_[index];
        var uid = Math.floor(opacity).toString();
        var source = this.getLayer().getSource();
        var feature = source.getFeatureByUid(uid);
        if (feature) {
            return callback(feature, this.getLayer(), null);
        }
        return undefined;
    };
    WebGLPointsLayerRenderer.prototype.renderHitDetection = function (frameState) {
        if (!this.hitVerticesBuffer_.getSize()) {
            return;
        }
        this.hitRenderTarget_.setSize([
            Math.floor(frameState.size[0] / 2),
            Math.floor(frameState.size[1] / 2),
        ]);
        this.helper.useProgram(this.hitProgram_);
        this.helper.prepareDrawToRenderTarget(frameState, this.hitRenderTarget_, true);
        this.helper.bindBuffer(this.hitVerticesBuffer_);
        this.helper.bindBuffer(this.indicesBuffer_);
        this.helper.enableAttributes(this.hitDetectionAttributes);
        var renderCount = this.indicesBuffer_.getSize();
        this.helper.drawElements(0, renderCount);
    };
    WebGLPointsLayerRenderer.prototype.disposeInternal = function () {
        this.worker_.terminate();
        this.layer_ = null;
        this.sourceListenKeys_.forEach(function (key) {
            (0,events.bN)(key);
        });
        this.sourceListenKeys_ = null;
        _super.prototype.disposeInternal.call(this);
    };
    return WebGLPointsLayerRenderer;
}(webgl_Layer));
 const PointsLayer = (WebGLPointsLayerRenderer);
;
var Heatmap_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Heatmap_Property = {
    BLUR: 'blur',
    GRADIENT: 'gradient',
    RADIUS: 'radius',
};
var DEFAULT_GRADIENT = ['#00f', '#0ff', '#0f0', '#ff0', '#f00'];
var Heatmap =  (function (_super) {
    Heatmap_extends(Heatmap, _super);
    function Heatmap(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var baseOptions = (0,obj.f0)({}, options);
        delete baseOptions.gradient;
        delete baseOptions.radius;
        delete baseOptions.blur;
        delete baseOptions.weight;
        _this = _super.call(this, baseOptions) || this;
        _this.gradient_ = null;
        _this.addChangeListener(Heatmap_Property.GRADIENT, _this.handleGradientChanged_);
        _this.setGradient(options.gradient ? options.gradient : DEFAULT_GRADIENT);
        _this.setBlur(options.blur !== undefined ? options.blur : 15);
        _this.setRadius(options.radius !== undefined ? options.radius : 8);
        var weight = options.weight ? options.weight : 'weight';
        if (typeof weight === 'string') {
            _this.weightFunction_ = function (feature) {
                return feature.get(weight);
            };
        }
        else {
            _this.weightFunction_ = weight;
        }
        _this.setRenderOrder(null);
        return _this;
    }
    Heatmap.prototype.getBlur = function () {
        return  (this.get(Heatmap_Property.BLUR));
    };
    Heatmap.prototype.getGradient = function () {
        return  (this.get(Heatmap_Property.GRADIENT));
    };
    Heatmap.prototype.getRadius = function () {
        return  (this.get(Heatmap_Property.RADIUS));
    };
    Heatmap.prototype.handleGradientChanged_ = function () {
        this.gradient_ = createGradient(this.getGradient());
    };
    Heatmap.prototype.setBlur = function (blur) {
        this.set(Heatmap_Property.BLUR, blur);
    };
    Heatmap.prototype.setGradient = function (colors) {
        this.set(Heatmap_Property.GRADIENT, colors);
    };
    Heatmap.prototype.setRadius = function (radius) {
        this.set(Heatmap_Property.RADIUS, radius);
    };
    Heatmap.prototype.createRenderer = function () {
        return new PointsLayer(this, {
            className: this.getClassName(),
            attributes: [
                {
                    name: 'weight',
                    callback: function (feature) {
                        var weight = this.weightFunction_(feature);
                        return weight !== undefined ? (0,math.uZ)(weight, 0, 1) : 1;
                    }.bind(this),
                },
            ],
            vertexShader: "\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",
            fragmentShader: "\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",
            hitVertexShader: "\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",
            hitFragmentShader: "\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",
            uniforms: {
                u_size: function () {
                    return (this.get(Heatmap_Property.RADIUS) + this.get(Heatmap_Property.BLUR)) * 2;
                }.bind(this),
                u_blurSlope: function () {
                    return (this.get(Heatmap_Property.RADIUS) / Math.max(1, this.get(Heatmap_Property.BLUR)));
                }.bind(this),
            },
            postProcesses: [
                {
                    fragmentShader: "\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n            uniform float u_opacity;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a * u_opacity;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",
                    uniforms: {
                        u_gradientTexture: function () {
                            return this.gradient_;
                        }.bind(this),
                        u_opacity: function () {
                            return this.getOpacity();
                        }.bind(this),
                    },
                },
            ],
        });
    };
    Heatmap.prototype.renderDeclutter = function () { };
    return Heatmap;
}(BaseVector));
function createGradient(colors) {
    var width = 1;
    var height = 256;
    var context = createCanvasContext2D(width, height);
    var gradient = context.createLinearGradient(0, 0, width, height);
    var step = 1 / (colors.length - 1);
    for (var i = 0, ii = colors.length; i < ii; ++i) {
        gradient.addColorStop(i * step, colors[i]);
    }
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    return context.canvas;
}
 const layer_Heatmap = (Heatmap);
;






const heatMap_defaultOptions = {
  weight: {
    fixed: 1,
    min: 0,
    max: 1
  },
  blur: 15,
  radius: 5
};

const heatmapLayer = {
  id: 'heatmap',
  name: 'Heatmap',
  description: 'Visualizes a heatmap of the data',
  isBaseMap: false,
  showLocation: true,

  create: async (map, options, theme) => {
    const config = Object.assign({}, heatMap_defaultOptions, options.config);
    const location = await (0,utils_location.cJ)(options.location);
    const source = new FrameVectorSource(location);
    const WEIGHT_KEY = "_weight"; 

    const vectorLayer = new layer_Heatmap({
      source,
      blur: config.blur,
      radius: config.radius,
      weight: feature => {
        return feature.get(WEIGHT_KEY);
      }
    });
    return {
      init: () => vectorLayer,
      update: data => {
        var _weightDim$field;

        const frame = data.series[0];

        if (!frame) {
          return;
        }

        source.update(frame);
        const weightDim = (0,dimensions.W8)(frame, config.weight);
        source.forEachFeature(f => {
          const idx = f.get('rowIndex');

          if (idx != null) {
            f.set(WEIGHT_KEY, weightDim.get(idx));
          }
        }); 

        let colors = ['#00f', '#0ff', '#0f0', '#ff0', '#f00']; 

        const field = (_weightDim$field = weightDim.field) !== null && _weightDim$field !== void 0 ? _weightDim$field : frame.fields.find(field => field.type === src.FieldType.number);

        if (field) {
          const colorMode = (0,src.getFieldColorModeForField)(field);

          if (colorMode.isContinuous && colorMode.getColors) {
            colors = colorMode.getColors(theme);
          }
        }

        vectorLayer.setGradient(colors);
      },
      registerOptionsUI: builder => {
        builder.addCustomEditor({
          id: 'config.weight',
          path: 'config.weight',
          name: 'Weight values',
          description: 'Scale the distribution for each row',
          editor: editors.cL,
          settings: {
            min: 0,
            max: 1,
            hideRange: true 

          },
          defaultValue: {
            fixed: 1,
            min: 0,
            max: 1
          }
        }).addSliderInput({
          path: 'config.radius',
          description: 'Configures the size of clusters',
          name: 'Radius',
          defaultValue: heatMap_defaultOptions.radius,
          settings: {
            min: 1,
            max: 50,
            step: 1
          }
        }).addSliderInput({
          path: 'config.blur',
          description: 'Configures the amount of blur of clusters',
          name: 'Blur',
          defaultValue: heatMap_defaultOptions.blur,
          settings: {
            min: 1,
            max: 50,
            step: 1
          }
        });
      }
    };
  },
  defaultOptions: heatMap_defaultOptions
};
;






const lastPointTracker_defaultOptions = {
  icon: 'https://openlayers.org/en/latest/examples/data/icon.png'
};
const lastPointTracker = {
  id: 'last-point-tracker',
  name: 'Icon at last point',
  description: 'Show an icon at the last point',
  isBaseMap: false,
  showLocation: true,
  state: src.PluginState.alpha,

  create: async (map, options, theme) => {
    const point = new Feature.Z({});
    const config = Object.assign({}, lastPointTracker_defaultOptions, options.config);
    point.setStyle(new style_Style({
      image: new style_Icon({
        src: config.icon
      })
    }));
    const vectorSource = new source_Vector({
      features: [point]
    });
    const vectorLayer = new Vector({
      source: vectorSource
    });
    const matchers = await (0,utils_location.cJ)(options.location);
    return {
      init: () => vectorLayer,
      update: data => {
        const frame = data.series[0];

        if (frame && frame.length) {
          const out = (0,utils_location.g6)(frame, matchers);

          if (!out.field) {
            return; 
          }

          point.setGeometry(out.field.values.get(frame.length - 1));
        }
      }
    };
  },
  defaultOptions: lastPointTracker_defaultOptions
};
;





const dataLayers = [markersLayer, heatmapLayer, lastPointTracker, geojsonLayer];
;





const DEFAULT_BASEMAP_CONFIG = {
  type: 'default',
  name: '',
  config: {}
}; 

const defaultBaseLayer = {
  id: DEFAULT_BASEMAP_CONFIG.type,
  name: 'Default base layer',
  isBaseMap: true,
  create: (map, options, theme) => {
    var _config$geomapDefault;

    const serverLayerType = config.vc === null || config.vc === void 0 ? void 0 : (_config$geomapDefault = config.vc.geomapDefaultBaseLayerConfig) === null || _config$geomapDefault === void 0 ? void 0 : _config$geomapDefault.type;

    if (serverLayerType) {
      const layer = geomapLayerRegistry.getIfExists(serverLayerType);

      if (!layer) {
        throw new Error('Invalid basemap configuration on server');
      }

      return layer.create(map, config.vc.geomapDefaultBaseLayerConfig, theme);
    } 


    return carto.create(map, options, theme);
  }
};

const geomapLayerRegistry = new src.Registry(() => [defaultBaseLayer, ...basemapLayers, 
...dataLayers 
]);
;
function GeomapPanel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























let sharedView = undefined;
class GeomapPanel extends react.Component {
  constructor(_props) {
    super(_props);

    GeomapPanel_defineProperty(this, "panelContext", {});

    GeomapPanel_defineProperty(this, "subs", new Subscription.w0());

    GeomapPanel_defineProperty(this, "globalCSS", getGlobalStyles(grafana_runtime_src.config.theme2));

    GeomapPanel_defineProperty(this, "mouseWheelZoom", void 0);

    GeomapPanel_defineProperty(this, "style", GeomapPanel_getStyles(grafana_runtime_src.config.theme));

    GeomapPanel_defineProperty(this, "hoverPayload", {
      point: {},
      pageX: -1,
      pageY: -1
    });

    GeomapPanel_defineProperty(this, "hoverEvent", new src.DataHoverEvent(this.hoverPayload));

    GeomapPanel_defineProperty(this, "map", void 0);

    GeomapPanel_defineProperty(this, "mapDiv", void 0);

    GeomapPanel_defineProperty(this, "layers", []);

    GeomapPanel_defineProperty(this, "byName", new Map());

    GeomapPanel_defineProperty(this, "getNextLayerName", () => {
      let idx = this.layers.length; 

      while ( true && idx < 100) {
        const name = `Layer ${idx++}`;

        if (!this.byName.has(name)) {
          return name;
        }
      }

      return `Layer ${Date.now()}`;
    });

    GeomapPanel_defineProperty(this, "actions", {
      selectLayer: uid => {
        const selected = this.layers.findIndex(v => v.options.name === uid);

        if (this.panelContext.onInstanceStateChange) {
          this.panelContext.onInstanceStateChange({
            map: this.map,
            layers: this.layers,
            selected,
            actions: this.actions
          });
        }
      },
      canRename: v => {
        return !this.byName.has(v);
      },
      deleteLayer: uid => {
        const layers = [];

        for (const lyr of this.layers) {
          if (lyr.options.name === uid) {
            var _this$map;

            (_this$map = this.map) === null || _this$map === void 0 ? void 0 : _this$map.removeLayer(lyr.layer);
          } else {
            layers.push(lyr);
          }
        }

        this.layers = layers;
        this.doOptionsUpdate(0);
      },
      addlayer: type => {
        const item = geomapLayerRegistry.getIfExists(type);

        if (!item) {
          return; 
        }

        this.initLayer(this.map, {
          type: item.id,
          name: this.getNextLayerName(),
          config: (0,lodash.cloneDeep)(item.defaultOptions),
          location: item.showLocation ? {
            mode: src.FrameGeometrySourceMode.Auto
          } : undefined,
          tooltip: true
        }, false).then(lyr => {
          var _this$map2;

          this.layers = this.layers.slice(0);
          this.layers.push(lyr);
          (_this$map2 = this.map) === null || _this$map2 === void 0 ? void 0 : _this$map2.addLayer(lyr.layer);
          this.doOptionsUpdate(this.layers.length - 1);
        });
      },
      reorder: (startIndex, endIndex) => {
        var _this$map3;

        const result = Array.from(this.layers);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        this.layers = result;
        this.doOptionsUpdate(endIndex); 

        const group = (_this$map3 = this.map) === null || _this$map3 === void 0 ? void 0 : _this$map3.getLayers();
        group.clear();
        this.layers.forEach(v => group.push(v.layer));
      }
    });

    GeomapPanel_defineProperty(this, "initMapRef", async div => {
      this.mapDiv = div;

      if (this.map) {
        this.map.dispose();
      }

      if (!div) {
        this.map = undefined;
        return;
      }

      const {
        options
      } = this.props;
      const map = this.map = new ol_Map({
        view: this.initMapView(options.view, undefined),
        pixelRatio: 1,
        layers: [],
        controls: [],
        target: div,
        interactions: interaction_defaults({
          mouseWheelZoom: false 

        })
      });
      this.byName.clear();
      const layers = [];

      try {
        var _options$basemap, _options$layers;

        layers.push(await this.initLayer(map, (_options$basemap = options.basemap) !== null && _options$basemap !== void 0 ? _options$basemap : DEFAULT_BASEMAP_CONFIG, true)); 

        const layerOptions = (_options$layers = options.layers) !== null && _options$layers !== void 0 ? _options$layers : [defaultMarkersConfig];

        for (const lyr of layerOptions) {
          layers.push(await this.initLayer(map, lyr, false));
        }
      } catch (ex) {
        console.error('error loading layers', ex);
      }

      for (const lyr of layers) {
        map.addLayer(lyr.layer);
      }

      this.layers = layers;
      this.map = map; 

      this.initViewExtent(map.getView(), options.view, map.getLayers());
      this.mouseWheelZoom = new interaction_MouseWheelZoom();
      this.map.addInteraction(this.mouseWheelZoom);
      this.initControls(options.controls);
      this.forceUpdate(); 

      this.map.on('singleclick', this.pointerClickListener);
      this.map.on('pointermove', this.pointerMoveListener);
      this.map.getViewport().addEventListener('mouseout', evt => {
        this.props.eventBus.publish(new src.DataHoverClearEvent());
      }); 

      if (this.panelContext.onInstanceStateChange) {
        this.panelContext.onInstanceStateChange({
          map: this.map,
          layers: layers,
          selected: layers.length - 1,
          actions: this.actions
        });
      }

      this.setState({
        legends: this.getLegends()
      });
    });

    GeomapPanel_defineProperty(this, "clearTooltip", () => {
      if (this.state.ttip && !this.state.ttipOpen) {
        this.tooltipPopupClosed();
      }
    });

    GeomapPanel_defineProperty(this, "tooltipPopupClosed", () => {
      this.setState({
        ttipOpen: false,
        ttip: undefined
      });
    });

    GeomapPanel_defineProperty(this, "pointerClickListener", evt => {
      if (this.pointerMoveListener(evt)) {
        evt.preventDefault();
        evt.stopPropagation();
        this.setState({
          ttipOpen: true
        });
      }
    });

    GeomapPanel_defineProperty(this, "pointerMoveListener", evt => {
      if (!this.map || this.state.ttipOpen) {
        return false;
      }

      const mouse = evt.originalEvent;
      const pixel = this.map.getEventPixel(mouse);
      const hover = (0,ol_proj.bU)(this.map.getCoordinateFromPixel(pixel));
      const {
        hoverPayload
      } = this;
      hoverPayload.pageX = mouse.pageX;
      hoverPayload.pageY = mouse.pageY;
      hoverPayload.point = {
        lat: hover[1],
        lon: hover[0]
      };
      hoverPayload.data = undefined;
      hoverPayload.columnIndex = undefined;
      hoverPayload.rowIndex = undefined;
      hoverPayload.layers = undefined;
      const layers = [];
      const layerLookup = new Map();
      let ttip = {};
      this.map.forEachFeatureAtPixel(pixel, (feature, layer, geo) => {
        const s = layer.__state; 

        if (!hoverPayload.data) {
          const props = feature.getProperties();
          const frame = props['frame'];

          if (frame) {
            hoverPayload.data = ttip.data = frame;
            hoverPayload.rowIndex = ttip.rowIndex = props['rowIndex'];
          }

          if (s !== null && s !== void 0 && s.mouseEvents) {
            s.mouseEvents.next(feature);
          }
        }

        if (s) {
          let h = layerLookup.get(s);

          if (!h) {
            h = {
              layer: s,
              features: []
            };
            layerLookup.set(s, h);
            layers.push(h);
          }

          h.features.push(feature);
        }
      }, {
        layerFilter: l => {
          const hoverLayerState = l.__state;
          return hoverLayerState.options.tooltip !== false;
        }
      });
      this.hoverPayload.layers = layers.length ? layers : undefined;
      this.props.eventBus.publish(this.hoverEvent);
      this.setState({
        ttip: Object.assign({}, hoverPayload)
      });

      if (!layers.length) {
        this.layers.forEach(layer => {
          layer.mouseEvents.next(undefined);
        });
      }

      return layers.length ? true : false;
    });

    GeomapPanel_defineProperty(this, "updateLayer", async (uid, newOptions) => {
      var _this$map4;

      if (!this.map) {
        return false;
      }

      const current = this.byName.get(uid);

      if (!current) {
        return false;
      }

      let layerIndex = -1;
      const group = (_this$map4 = this.map) === null || _this$map4 === void 0 ? void 0 : _this$map4.getLayers();

      for (let i = 0; i < (group === null || group === void 0 ? void 0 : group.getLength()); i++) {
        if (group.item(i) === current.layer) {
          layerIndex = i;
          break;
        }
      } 


      if (newOptions.name !== uid) {
        if (!newOptions.name) {
          newOptions.name = uid;
        } else if (this.byName.has(newOptions.name)) {
          return false;
        }

        console.log('Layer name changed', uid, '>>>', newOptions.name);
        this.byName.delete(uid);
        uid = newOptions.name;
        this.byName.set(uid, current);
      } 


      if (current.options.type !== newOptions.type) {
      } else {
      }

      const layers = this.layers.slice(0);

      try {
        const info = await this.initLayer(this.map, newOptions, current.isBasemap);
        layers[layerIndex] = info;
        group.setAt(layerIndex, info.layer); 

        if (info.handler.update) {
          info.handler.update(this.props.data);
        }
      } catch (err) {
        console.warn('ERROR', err);
        return false;
      } 


      this.setState({
        legends: []
      });
      this.layers = layers;
      this.doOptionsUpdate(layerIndex);
      return true;
    });

    this.state = {
      ttipOpen: false,
      legends: []
    };
    this.subs.add(this.props.eventBus.subscribe(types_events.Yr, evt => {
      if (this.mapDiv && this.props.id === evt.payload) {
        this.initMapRef(this.mapDiv);
      }
    }));
  }

  componentDidMount() {
    this.panelContext = this.context;
  }

  shouldComponentUpdate(nextProps) {
    if (!this.map) {
      return true; 
    } 


    if (this.props.height !== nextProps.height || this.props.width !== nextProps.width) {
      this.map.updateSize();
    } 


    if (this.props.data !== nextProps.data) {
      this.dataChanged(nextProps.data);
    } 


    if (this.props.options !== nextProps.options) {
      this.optionsChanged(nextProps.options);
    }

    return true; 
  }

  componentDidUpdate(prevProps) {
    if (this.map && (this.props.height !== prevProps.height || this.props.width !== prevProps.width)) {
      this.map.updateSize();
    }
  }


  doOptionsUpdate(selected) {
    const {
      options,
      onOptionsChange
    } = this.props;
    const layers = this.layers;
    onOptionsChange(Object.assign({}, options, {
      basemap: layers[0].options,
      layers: layers.slice(1).map(v => v.options)
    })); 

    if (this.panelContext.onInstanceStateChange) {
      this.panelContext.onInstanceStateChange({
        map: this.map,
        layers: layers,
        selected,
        actions: this.actions
      });
    }

    this.setState({
      legends: this.getLegends()
    });
  }

  optionsChanged(options) {
    const oldOptions = this.props.options;
    console.log('options changed!', options);

    if (options.view !== oldOptions.view) {
      console.log('View changed');
      this.map.setView(this.initMapView(options.view, this.map.getLayers()));
    }

    if (options.controls !== oldOptions.controls) {
      var _options$controls;

      console.log('Controls changed');
      this.initControls((_options$controls = options.controls) !== null && _options$controls !== void 0 ? _options$controls : {
        showZoom: true,
        showAttribution: true
      });
    }
  }


  dataChanged(data) {
    for (const state of this.layers) {
      if (state.handler.update) {
        state.handler.update(data);
      }
    }
  }

  async initLayer(map, options, isBasemap) {
    var _options, _options2;

    if (isBasemap && (!((_options = options) !== null && _options !== void 0 && _options.type) || grafana_runtime_src.config.geomapDisableCustomBaseLayer)) {
      options = DEFAULT_BASEMAP_CONFIG;
    } 


    if (!((_options2 = options) !== null && _options2 !== void 0 && _options2.type)) {
      options = {
        type: MARKERS_LAYER_ID,
        name: this.getNextLayerName(),
        config: {}
      };
    }

    const item = geomapLayerRegistry.getIfExists(options.type);

    if (!item) {
      return Promise.reject('unknown layer: ' + options.type);
    }

    const handler = await item.create(map, options, grafana_runtime_src.config.theme2);
    const layer = handler.init();

    if (handler.update) {
      handler.update(this.props.data);
    }

    if (!options.name) {
      options.name = this.getNextLayerName();
    }

    const UID = options.name;
    const state = {
      isBasemap,
      options,
      layer,
      handler,
      mouseEvents: new Subject.x(),
      getName: () => UID,
      onChange: cfg => {
        this.updateLayer(UID, cfg);
      }
    };
    this.byName.set(UID, state);
    state.layer.__state = state;
    return state;
  }

  initMapView(config, layers) {
    let view = new ol_View({
      center: [0, 0],
      zoom: 1,
      showFullExtent: true 

    }); 

    if (config.shared) {
      if (!sharedView) {
        sharedView = view;
      } else {
        view = sharedView;
      }
    }

    if (layers) {
      this.initViewExtent(view, config, layers);
    }

    return view;
  }

  initViewExtent(view, config, layers) {
    const v = centerPointRegistry.getIfExists(config.id);

    if (v) {
      let coord = undefined;

      if (v.lat == null) {
        if (v.id === MapCenterID.Coordinates) {
          var _config$lon, _config$lat;

          coord = [(_config$lon = config.lon) !== null && _config$lon !== void 0 ? _config$lon : 0, (_config$lat = config.lat) !== null && _config$lat !== void 0 ? _config$lat : 0];
        } else if (v.id === MapCenterID.Fit) {
          var extent = layers.getArray().filter(l => l instanceof Vector).map(l => {
            var _getSource$getExtent;

            return (_getSource$getExtent = l.getSource().getExtent()) !== null && _getSource$getExtent !== void 0 ? _getSource$getExtent : [];
          }).reduce(ol_extent.l7, (0,ol_extent.lJ)());

          if (!(0,ol_extent.xb)(extent)) {
            var _config$zoom;

            view.fit(extent, {
              padding: [30, 30, 30, 30],
              maxZoom: (_config$zoom = config.zoom) !== null && _config$zoom !== void 0 ? _config$zoom : config.maxZoom
            });
          }
        } else {
          console.log('TODO, view requires special handling', v);
        }
      } else {
        var _v$lon, _v$lat;

        coord = [(_v$lon = v.lon) !== null && _v$lon !== void 0 ? _v$lon : 0, (_v$lat = v.lat) !== null && _v$lat !== void 0 ? _v$lat : 0];
      }

      if (coord) {
        view.setCenter((0,ol_proj.mi)(coord));
      }
    }

    if (config.maxZoom) {
      view.setMaxZoom(config.maxZoom);
    }

    if (config.minZoom) {
      view.setMaxZoom(config.minZoom);
    }

    if (config.zoom && (v === null || v === void 0 ? void 0 : v.id) !== MapCenterID.Fit) {
      view.setZoom(config.zoom);
    }
  }

  initControls(options) {
    if (!this.map) {
      return;
    }

    this.map.getControls().clear();

    if (options.showZoom) {
      this.map.addControl(new control_Zoom());
    }

    if (options.showScale) {
      this.map.addControl(new control_ScaleLine({
        units: options.scaleUnits,
        minWidth: 100
      }));
    }

    this.mouseWheelZoom.setActive(Boolean(options.mouseWheelZoom));

    if (options.showAttribution) {
      this.map.addControl(new control_Attribution({
        collapsed: true,
        collapsible: true
      }));
    } 


    let topRight = [];

    if (options.showDebug) {
      topRight = [(0,jsx_runtime.jsx)(DebugOverlay, {
        map: this.map
      }, "debug")];
    }

    this.setState({
      topRight
    });
  }

  getLegends() {
    const legends = [];

    for (const state of this.layers) {
      if (state.handler.legend) {
        legends.push( (0,jsx_runtime.jsx)("div", {
          children: state.handler.legend
        }, state.options.name));
      }
    }

    return legends;
  }

  render() {
    const {
      ttip,
      ttipOpen,
      topRight,
      legends
    } = this.state;
    const showScale = this.props.options.controls.showScale;
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(emotion_react_browser_esm.xB, {
        styles: this.globalCSS
      }), (0,jsx_runtime.jsxs)("div", {
        className: this.style.wrap,
        onMouseLeave: this.clearTooltip,
        children: [(0,jsx_runtime.jsx)("div", {
          className: this.style.map,
          ref: this.initMapRef
        }), (0,jsx_runtime.jsx)(GeomapOverlay, {
          bottomLeft: legends,
          topRight: topRight,
          blStyle: {
            bottom: showScale ? '35px' : '8px'
          }
        })]
      }), (0,jsx_runtime.jsx)(GeomapTooltip, {
        ttip: ttip,
        isOpen: ttipOpen,
        onClose: this.tooltipPopupClosed
      })]
    });
  }

}

GeomapPanel_defineProperty(GeomapPanel, "contextType", grafana_ui_src.PanelContextRoot);

const GeomapPanel_getStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  wrap: emotion_css_esm.css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  map: emotion_css_esm.css`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
  `
}));
var AddLayerButton = __webpack_require__("./public/app/core/components/Layers/AddLayerButton.tsx");
var LayerDragDropList = __webpack_require__("./public/app/core/components/Layers/LayerDragDropList.tsx");
var runtime_frame = __webpack_require__("./public/app/features/canvas/runtime/frame.tsx");
var PanelEditor_utils = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");
var locationEditor = __webpack_require__("./public/app/features/geo/editor/locationEditor.ts");
;







function getLayerEditor(opts) {
  return {
    category: opts.category,
    path: '--',
    defaultValue: opts.basemaps ? DEFAULT_BASEMAP_CONFIG : defaultMarkersConfig,
    values: parent => ({
      getContext: parent => {
        return Object.assign({}, parent, {
          options: opts.state.options,
          instanceState: opts.state
        });
      },
      getValue: path => (0,lodash.get)(opts.state.options, path),
      onChange: (path, value) => {
        const {
          state
        } = opts;
        const {
          options
        } = state;

        if (path === 'type' && value) {
          const layer = geomapLayerRegistry.getIfExists(value);

          if (layer) {
            console.log('Change layer type:', value, state);
            const opts = Object.assign({}, options, {
              type: layer.id,
              config: Object.assign({}, layer.defaultOptions) 

            });

            if (layer.showLocation) {
              var _opts$location;

              if (!((_opts$location = opts.location) !== null && _opts$location !== void 0 && _opts$location.mode)) {
                opts.location = {
                  mode: src.FrameGeometrySourceMode.Auto
                };
              } else {
                delete opts.location;
              }
            }

            state.onChange(opts);
            return;
          }
        }

        state.onChange((0,PanelEditor_utils.hs)(options, path, value));
      }
    }),
    build: (builder, context) => {
      if (!opts.state) {
        console.log('MISSING LAYER!!!', opts);
        return;
      }

      const {
        handler,
        options
      } = opts.state;
      const layer = geomapLayerRegistry.getIfExists(options === null || options === void 0 ? void 0 : options.type);
      const layerTypes = geomapLayerRegistry.selectOptions(options !== null && options !== void 0 && options.type 
      ? [options.type] 
      : [DEFAULT_BASEMAP_CONFIG.type], opts.basemaps ? baseMapFilter : dataLayerFilter);
      builder.addSelect({
        path: 'type',
        name: 'Layer type',
        settings: {
          options: layerTypes.options
        }
      });

      if (!layer) {
        return; 
      } 


      if (options.type === DEFAULT_BASEMAP_CONFIG.type) {
        return;
      }

      if (layer.showLocation) {
        (0,locationEditor.C)('Location', 'location.', builder, options.location);
      }

      if (handler.registerOptionsUI) {
        handler.registerOptionsUI(builder);
      }

      if (layer.showOpacity) {
      }

      if (!(0,lodash.isEqual)(opts.category, ['Base layer'])) {
        builder.addBooleanSwitch({
          path: 'tooltip',
          name: 'Display tooltip',
          description: 'Show the tooltip for layer',
          defaultValue: true
        });
      }
    }
  };
}

function baseMapFilter(layer) {
  if (!layer.isBaseMap) {
    return false;
  }

  if (layer.state === src.PluginState.alpha) {
    return config.Oh;
  }

  return true;
}

function dataLayerFilter(layer) {
  if (layer.isBaseMap) {
    return false;
  }

  if (layer.state === src.PluginState.alpha) {
    return config.Oh;
  }

  return true;
}
;
var LayersEditor_div, _br;











const LayersEditor = props => {
  var _props$context$instan, _layers$selected;

  const {
    layers,
    selected,
    actions
  } = (_props$context$instan = props.context.instanceState) !== null && _props$context$instan !== void 0 ? _props$context$instan : {};

  if (!layers || !actions) {
    return LayersEditor_div || (LayersEditor_div = (0,jsx_runtime.jsx)("div", {
      children: "No layers?"
    }));
  }

  const onDragEnd = result => {
    var _props$context$instan2;

    if (!result.destination) {
      return;
    }

    const {
      layers,
      actions
    } = (_props$context$instan2 = props.context.instanceState) !== null && _props$context$instan2 !== void 0 ? _props$context$instan2 : {};

    if (!layers || !actions) {
      return;
    } 


    const count = layers.length - 1;
    const src = (result.source.index - count) * -1;
    const dst = (result.destination.index - count) * -1;
    actions.reorder(src, dst);
  };

  const onSelect = element => {
    actions.selectLayer(element.options.name);
  };

  const onDelete = element => {
    actions.deleteLayer(element.options.name);
  };

  const getLayerInfo = element => {
    return element.options.type;
  };

  const onNameChange = (element, name) => {
    element.onChange(Object.assign({}, element.options, {
      name
    }));
  };

  const isFrame = element => {
    return element instanceof runtime_frame.f;
  };

  const selection = selected ? [(_layers$selected = layers[selected]) === null || _layers$selected === void 0 ? void 0 : _layers$selected.getName()] : [];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Container, {
      children: (0,jsx_runtime.jsx)(AddLayerButton.f, {
        onChange: v => actions.addlayer(v.value),
        options: geomapLayerRegistry.selectOptions(undefined, dataLayerFilter).options,
        label: 'Add layer'
      })
    }), _br || (_br = (0,jsx_runtime.jsx)("br", {})), (0,jsx_runtime.jsx)(LayerDragDropList.E, {
      layers: layers,
      getLayerInfo: getLayerInfo,
      onDragEnd: onDragEnd,
      onSelect: onSelect,
      onDelete: onDelete,
      selection: selection,
      isFrame: isFrame,
      excludeBaseLayer: true,
      onNameChange: onNameChange,
      verifyLayerNameUniqueness: actions.canRename
    })]
  });
};
;
var _span;









const MapViewEditor = _ref => {
  var _value$zoom;

  let {
    value,
    onChange,
    context
  } = _ref;
  const labelWidth = 10;
  const views = (0,react.useMemo)(() => {
    const ids = [];

    if (value !== null && value !== void 0 && value.id) {
      ids.push(value.id);
    } else {
      ids.push(centerPointRegistry.list()[0].id);
    }

    return centerPointRegistry.selectOptions(ids);
  }, [value === null || value === void 0 ? void 0 : value.id]);
  const onSetCurrentView = (0,react.useCallback)(() => {
    var _context$instanceStat;

    const map = (_context$instanceStat = context.instanceState) === null || _context$instanceStat === void 0 ? void 0 : _context$instanceStat.map;

    if (map) {
      const view = map.getView();
      const coords = view.getCenter();

      if (coords) {
        const center = (0,ol_proj.bU)(coords, view.getProjection());
        onChange(Object.assign({}, value, {
          id: MapCenterID.Coordinates,
          lon: +center[0].toFixed(6),
          lat: +center[1].toFixed(6),
          zoom: +view.getZoom().toFixed(2)
        }));
      }
    }
  }, [value, onChange, context.instanceState]);
  const onSelectView = (0,react.useCallback)(selection => {
    const v = centerPointRegistry.getIfExists(selection.value);

    if (v) {
      var _v$lat, _v$lon, _v$zoom;

      onChange(Object.assign({}, value, {
        id: v.id,
        lat: (_v$lat = v.lat) !== null && _v$lat !== void 0 ? _v$lat : value === null || value === void 0 ? void 0 : value.lat,
        lon: (_v$lon = v.lon) !== null && _v$lon !== void 0 ? _v$lon : value === null || value === void 0 ? void 0 : value.lon,
        zoom: (_v$zoom = v.zoom) !== null && _v$zoom !== void 0 ? _v$zoom : value === null || value === void 0 ? void 0 : value.zoom
      }));
    }
  }, [value, onChange]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "View",
        labelWidth: labelWidth,
        grow: true,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          options: views.options,
          value: views.current,
          onChange: onSelectView
        })
      })
    }), (value === null || value === void 0 ? void 0 : value.id) === MapCenterID.Coordinates && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Latitude",
          labelWidth: labelWidth,
          grow: true,
          children: (0,jsx_runtime.jsx)(NumberInput.Y, {
            value: value.lat,
            min: -90,
            max: 90,
            step: 0.001,
            onChange: v => {
              onChange(Object.assign({}, value, {
                lat: v
              }));
            }
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Longitude",
          labelWidth: labelWidth,
          grow: true,
          children: (0,jsx_runtime.jsx)(NumberInput.Y, {
            value: value.lon,
            min: -180,
            max: 180,
            step: 0.001,
            onChange: v => {
              onChange(Object.assign({}, value, {
                lon: v
              }));
            }
          })
        })
      })]
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Zoom",
        labelWidth: labelWidth,
        grow: true,
        children: (0,jsx_runtime.jsx)(NumberInput.Y, {
          value: (_value$zoom = value === null || value === void 0 ? void 0 : value.zoom) !== null && _value$zoom !== void 0 ? _value$zoom : 1,
          min: 1,
          max: 18,
          step: 0.01,
          onChange: v => {
            onChange(Object.assign({}, value, {
              zoom: v
            }));
          }
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        size: "sm",
        fullWidth: true,
        onClick: onSetCurrentView,
        children: _span || (_span = (0,jsx_runtime.jsx)("span", {
          children: "Use current map settings"
        }))
      })
    })]
  });
};
;







const mapPanelChangedHandler = (panel, prevPluginId, prevOptions, prevFieldConfig) => {
  if (prevPluginId === 'grafana-worldmap-panel' && prevOptions.angular) {
    const {
      fieldConfig,
      options
    } = worldmapToGeomapOptions(Object.assign({}, prevOptions.angular, {
      fieldConfig: prevFieldConfig
    }));
    panel.fieldConfig = fieldConfig; 

    return options;
  }

  return {};
};
function worldmapToGeomapOptions(angular) {
  const fieldConfig = {
    defaults: {},
    overrides: []
  };
  const options = {
    view: {
      id: MapCenterID.Zero
    },
    controls: {
      showZoom: true,
      mouseWheelZoom: Boolean(angular.mouseWheelZoom)
    },
    basemap: {
      type: 'default',
      name: 'Basemap'
    },
    layers: [
    ]
  };
  let v = asNumber(angular.decimals);

  if (v) {
    fieldConfig.defaults.decimals = v;
  } 


  if (angular.thresholds && angular.colors) {
    const levels = angular.thresholds.split(',').map(strVale => {
      return Number(strVale.trim());
    }); 

    const thresholds = [];

    for (const color of angular.colors) {
      const idx = thresholds.length - 1;

      if (idx >= 0) {
        thresholds.push({
          value: levels[idx],
          color
        });
      } else {
        thresholds.push({
          value: -Infinity,
          color
        });
      }
    }

    fieldConfig.defaults.thresholds = {
      mode: src.ThresholdsMode.Absolute,
      steps: thresholds
    };
  }

  v = asNumber(angular.initialZoom);

  if (v) {
    options.view.zoom = v;
  } 


  const mapCenters = {
    '(0°, 0°)': MapCenterID.Zero,
    'North America': 'north-america',
    Europe: 'europe',
    'West Asia': 'west-asia',
    'SE Asia': 'se-asia',
    'Last GeoHash': MapCenterID.Coordinates 

  };
  options.view.id = mapCenters[angular.mapCenter];
  options.view.lat = asNumber(angular.mapCenterLatitude);
  options.view.lon = asNumber(angular.mapCenterLongitude);
  return {
    fieldConfig,
    options
  };
}

function asNumber(v) {
  const num = +v;
  return isNaN(num) ? undefined : num;
}

const mapMigrationHandler = panel => {
  var _panel$pluginVersion;

  const pluginVersion = (_panel$pluginVersion = panel === null || panel === void 0 ? void 0 : panel.pluginVersion) !== null && _panel$pluginVersion !== void 0 ? _panel$pluginVersion : ''; 

  if (pluginVersion.startsWith('8.1') || pluginVersion.startsWith('8.2')) {
    var _panel$options;

    const layers = (_panel$options = panel.options) === null || _panel$options === void 0 ? void 0 : _panel$options.layers;

    if ((layers === null || layers === void 0 ? void 0 : layers.length) === 1) {
      const layer = panel.options.layers[0];

      if ((layer === null || layer === void 0 ? void 0 : layer.type) === 'markers' && layer.config) {
        const oldConfig = layer.config;
        const config = {
          style: (0,lodash.cloneDeep)(defaultStyleConfig),
          showLegend: Boolean(oldConfig.showLegend)
        };

        if (oldConfig.size) {
          config.style.size = oldConfig.size;
        }

        if (oldConfig.color) {
          config.style.color = oldConfig.color;
        }

        if (oldConfig.fillOpacity) {
          config.style.opacity = oldConfig.fillOpacity;
        }

        const symbol = getMarkerAsPath(oldConfig.shape);

        if (symbol) {
          config.style.symbol = {
            fixed: symbol,
            mode: dimensions.Q8.Fixed
          };
        }

        return Object.assign({}, panel.options, {
          layers: [Object.assign({}, layer, {
            config
          })]
        });
      }
    }
  }

  return panel.options;
};
;
var module_div;












const module_plugin = new src.PanelPlugin(GeomapPanel).setNoPadding().setPanelChangeHandler(mapPanelChangedHandler).setMigrationHandler(mapMigrationHandler).useFieldConfig({
  useCustomConfig: builder => {
    grafana_ui_src.commonOptionsBuilder.addHideFrom(builder);
  }
}).setPanelOptions((builder, context) => {
  let category = ['Map view'];
  builder.addCustomEditor({
    category,
    id: 'view',
    path: 'view',
    name: 'Initial view',
    description: 'This location will show when the panel first loads.',
    editor: MapViewEditor,
    defaultValue: defaultView
  });
  builder.addBooleanSwitch({
    category,
    path: 'view.shared',
    description: 'Use the same view across multiple panels.  Note: this may require a dashboard reload.',
    name: 'Share view',
    defaultValue: defaultView.shared
  });
  const state = context.instanceState;

  if (!(state !== null && state !== void 0 && state.layers)) {
  } else {
    builder.addCustomEditor({
      category: ['Data layer'],
      id: 'layers',
      path: '',
      name: '',
      editor: LayersEditor
    });
    const selected = state.layers[state.selected];

    if (state.selected && selected) {
      builder.addNestedOptions(getLayerEditor({
        state: selected,
        category: ['Data layer'],
        basemaps: false
      }));
    }

    const baselayer = state.layers[0];

    if (grafana_runtime_src.config.geomapDisableCustomBaseLayer) {
      builder.addCustomEditor({
        category: ['Base layer'],
        id: 'layers',
        path: '',
        name: '',
        editor: () => module_div || (module_div = (0,jsx_runtime.jsx)("div", {
          children: "The base layer is configured by the server admin."
        }))
      });
    } else if (baselayer) {
      builder.addNestedOptions(getLayerEditor({
        state: baselayer,
        category: ['Base layer'],
        basemaps: true
      }));
    }
  } 


  category = ['Map controls'];
  builder.addBooleanSwitch({
    category,
    path: 'controls.showZoom',
    description: 'Show zoom control buttons in the upper left corner',
    name: 'Show zoom control',
    defaultValue: true
  }).addBooleanSwitch({
    category,
    path: 'controls.mouseWheelZoom',
    description: 'Enable zoom control via mouse wheel',
    name: 'Mouse wheel zoom',
    defaultValue: true
  }).addBooleanSwitch({
    category,
    path: 'controls.showAttribution',
    name: 'Show attribution',
    description: 'Show the map source attribution info in the lower right',
    defaultValue: true
  }).addBooleanSwitch({
    category,
    path: 'controls.showScale',
    name: 'Show scale',
    description: 'Indicate map scale',
    defaultValue: false
  }).addBooleanSwitch({
    category,
    path: 'controls.showDebug',
    name: 'Show debug',
    description: 'Show map info',
    defaultValue: false
  });
});

 }),

 "./.yarn/__virtual__/css-loader-virtual-b2611cabd9/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js":
 ((module) => {

"use strict";


module.exports = function (cssWithMappingToString) {
  var list = []; 

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; 


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

 }),

 "./.yarn/__virtual__/css-loader-virtual-b2611cabd9/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js":
 ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ .Z)(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
 const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
 ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js":
 ((module) => {

"use strict";


var memo = {};

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); 

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js":
 ((module) => {

"use strict";


function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js":
 ((module) => {

"use strict";


function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } 



  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

 }),

 "./.yarn/__virtual__/style-loader-virtual-d3a1f2e0f4/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js":
 ((module) => {

"use strict";


function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

 }),

 "./.yarn/cache/rbush-npm-3.0.1-9fc2a71778-b7def5ba76.zip/node_modules/rbush/rbush.min.js":
 (function(module) {

!function(t,i){ true?module.exports=i():0}(this,function(){"use strict";function t(t,r,e,a,h){!function t(n,r,e,a,h){for(;a>e;){if(a-e>600){var o=a-e+1,s=r-e+1,l=Math.log(o),f=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*f*(o-f)/o)*(s-o/2<0?-1:1),m=Math.max(e,Math.floor(r-s*f/o+u)),c=Math.min(a,Math.floor(r+(o-s)*f/o+u));t(n,r,m,c,h)}var p=n[r],d=e,x=a;for(i(n,e,r),h(n[a],p)>0&&i(n,e,a);d<x;){for(i(n,d,x),d++,x--;h(n[d],p)<0;)d++;for(;h(n[x],p)>0;)x--}0===h(n[e],p)?i(n,e,x):i(n,++x,a),x<=r&&(e=x+1),r<=x&&(a=x-1)}}(t,r,e||0,a||t.length-1,h||n)}function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i){return t<i?-1:t>i?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function e(t,i,n){if(!n)return i.indexOf(t);for(var r=0;r<i.length;r++)if(n(t,i[r]))return r;return-1}function a(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,r,e){e||(e=p(null)),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(var a=i;a<n;a++){var h=t.children[a];o(e,t.leaf?r(h):h)}return e}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,r,e,a){for(var h=[n,r];h.length;)if(!((r=h.pop())-(n=h.pop())<=e)){var o=n+Math.ceil((r-n)/e/2)*e;t(i,o,n,r,a),h.push(n,o,o,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var i=this.data,n=[];if(!c(t,i))return n;for(var r=this.toBBox,e=[];i;){for(var a=0;a<i.children.length;a++){var h=i.children[a],o=i.leaf?r(h):h;c(t,o)&&(i.leaf?n.push(h):m(t,o)?this._all(h,n):e.push(h))}i=e.pop()}return n},r.prototype.collides=function(t){var i=this.data;if(!c(t,i))return!1;for(var n=[];i;){for(var r=0;r<i.children.length;r++){var e=i.children[r],a=i.leaf?this.toBBox(e):e;if(c(t,a)){if(i.leaf||m(t,a))return!0;n.push(e)}}i=n.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=p([]),this},r.prototype.remove=function(t,i){if(!t)return this;for(var n,r,a,h=this.data,o=this.toBBox(t),s=[],l=[];h||s.length;){if(h||(h=s.pop(),r=s[s.length-1],n=l.pop(),a=!0),h.leaf){var f=e(t,h.children,i);if(-1!==f)return h.children.splice(f,1),s.push(h),this._condense(s),this}a||h.leaf||!m(h,o)?r?(n++,h=r.children[n],a=!1):h=null:(s.push(h),l.push(n),n=0,r=h,h=h.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,i){return t.minX-i.minX},r.prototype.compareMinY=function(t,i){return t.minY-i.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},r.prototype._build=function(t,i,n,r){var e,h=n-i+1,o=this._maxEntries;if(h<=o)return a(e=p(t.slice(i,n+1)),this.toBBox),e;r||(r=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,r-1))),(e=p([])).leaf=!1,e.height=r;var s=Math.ceil(h/o),l=s*Math.ceil(Math.sqrt(o));d(t,i,n,l,this.compareMinX);for(var f=i;f<=n;f+=l){var u=Math.min(f+l-1,n);d(t,f,u,s,this.compareMinY);for(var m=f;m<=u;m+=s){var c=Math.min(m+s-1,u);e.children.push(this._build(t,m,c,r-1))}}return a(e,this.toBBox),e},r.prototype._chooseSubtree=function(t,i,n,r){for(;r.push(i),!i.leaf&&r.length-1!==n;){for(var e=1/0,a=1/0,h=void 0,o=0;o<i.children.length;o++){var s=i.children[o],l=f(s),u=(m=t,c=s,(Math.max(c.maxX,m.maxX)-Math.min(c.minX,m.minX))*(Math.max(c.maxY,m.maxY)-Math.min(c.minY,m.minY))-l);u<a?(a=u,e=l<e?l:e,h=s):u===a&&l<e&&(e=l,h=s)}i=h||i.children[0]}var m,c;return i},r.prototype._insert=function(t,i,n){var r=n?t:this.toBBox(t),e=[],a=this._chooseSubtree(r,this.data,i,e);for(a.children.push(t),o(a,r);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(r,e,i)},r.prototype._split=function(t,i){var n=t[i],r=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,r);var h=this._chooseSplitIndex(n,e,r),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},r.prototype._splitRoot=function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,i,n){for(var r,e,a,o,s,l,u,m=1/0,c=1/0,p=i;p<=n-i;p++){var d=h(t,0,p,this.toBBox),x=h(t,p,n,this.toBBox),v=(e=d,a=x,o=void 0,s=void 0,l=void 0,u=void 0,o=Math.max(e.minX,a.minX),s=Math.max(e.minY,a.minY),l=Math.min(e.maxX,a.maxX),u=Math.min(e.maxY,a.maxY),Math.max(0,l-o)*Math.max(0,u-s)),M=f(d)+f(x);v<m?(m=v,r=p,c=M<c?M:c):v===m&&M<c&&(c=M,r=p)}return r||n-i},r.prototype._chooseSplitAxis=function(t,i,n){var r=t.leaf?this.compareMinX:s,e=t.leaf?this.compareMinY:l;this._allDistMargin(t,i,n,r)<this._allDistMargin(t,i,n,e)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,i,n,r){t.children.sort(r);for(var e=this.toBBox,a=h(t,0,i,e),s=h(t,n-i,n,e),l=u(a)+u(s),f=i;f<n-i;f++){var m=t.children[f];o(a,t.leaf?e(m):m),l+=u(a)}for(var c=n-i-1;c>=i;c--){var p=t.children[c];o(s,t.leaf?e(p):p),l+=u(s)}return l},r.prototype._adjustParentBBoxes=function(t,i,n){for(var r=n;r>=0;r--)o(i[r],t)},r.prototype._condense=function(t){for(var i=t.length-1,n=void 0;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():a(t[i],this.toBBox)},r});


 })

}]);