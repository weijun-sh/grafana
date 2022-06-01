"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[53],{

/***/ "./public/app/plugins/panel/canvas/editor/options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ optionBuilder)
/* harmony export */ });
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");


const optionBuilder = {
  addBackground: (builder, context) => {
    const category = ['Background'];
    builder.addCustomEditor({
      category,
      id: 'background.color',
      path: 'background.color',
      name: 'Color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__/* .ColorDimensionEditor */ .Lm,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: ''
      }
    }).addCustomEditor({
      category,
      id: 'background.image',
      path: 'background.image',
      name: 'Image',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__/* .ResourceDimensionEditor */ .Lv,
      settings: {
        resourceType: 'image'
      }
    }).addRadio({
      category,
      path: 'background.size',
      name: 'Image size',
      settings: {
        options: [{
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Original */ .Uy.Original,
          label: 'Original'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Contain */ .Uy.Contain,
          label: 'Contain'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Cover */ .Uy.Cover,
          label: 'Cover'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Fill */ .Uy.Fill,
          label: 'Fill'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Tile */ .Uy.Tile,
          label: 'Tile'
        }]
      },
      defaultValue: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__/* .BackgroundImageSize.Cover */ .Uy.Cover
    });
  },
  addBorder: (builder, context) => {
    var _context$options, _context$options$bord;

    const category = ['Border'];
    builder.addSliderInput({
      category,
      path: 'border.width',
      name: 'Width',
      defaultValue: 2,
      settings: {
        min: 0,
        max: 20
      }
    });

    if ((_context$options = context.options) !== null && _context$options !== void 0 && (_context$options$bord = _context$options.border) !== null && _context$options$bord !== void 0 && _context$options$bord.width) {
      builder.addCustomEditor({
        category,
        id: 'border.color',
        path: 'border.color',
        name: 'Color',
        editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__/* .ColorDimensionEditor */ .Lm,
        settings: {},
        defaultValue: {
          // Configured values
          fixed: ''
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/canvas/elements/icon.tsx
var icon = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
// EXTERNAL MODULE: ./public/app/plugins/panel/canvas/editor/options.ts
var options = __webpack_require__("./public/app/plugins/panel/canvas/editor/options.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./public/app/features/canvas/index.ts + 7 modules
var canvas = __webpack_require__("./public/app/features/canvas/index.ts");
// EXTERNAL MODULE: ./public/app/features/canvas/runtime/element.tsx
var runtime_element = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
// EXTERNAL MODULE: ./public/app/features/dimensions/index.ts + 2 modules
var dimensions = __webpack_require__("./public/app/features/dimensions/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/panel/icon/IconPanel.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IconPanel extends react.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "initElement", props => {
      this.element = new runtime_element/* ElementState */.f(icon/* iconItem */.e, props.options.root);
      this.updateSize(props);
      this.element.updateData(this.dims);
      return this.element;
    });

    _defineProperty(this, "updateSize", props => {
      const {
        width,
        height
      } = props;
      this.element.options.constraint = {
        vertical: canvas/* VerticalConstraint.Top */.fJ.Top,
        horizontal: canvas/* HorizontalConstraint.Left */._5.Left
      };
      this.element.options.placement = {
        left: 0,
        top: 0,
        width,
        height
      };
    });

    _defineProperty(this, "dims", {
      getColor: color => (0,dimensions/* getColorDimensionFromData */.FP)(this.props.data, color),
      getScale: scale => (0,dimensions/* getScaleDimensionFromData */.pb)(this.props.data, scale),
      getScalar: scalar => (0,dimensions/* getScalarDimensionFromData */.z2)(this.props.data, scalar),
      getText: text => (0,dimensions/* getTextDimensionFromData */.WO)(this.props.data, text),
      getResource: res => (0,dimensions/* getResourceDimensionFromData */.Qz)(this.props.data, res)
    });

    this.element = this.initElement(_props);
  }

  shouldComponentUpdate(nextProps) {
    var _this$props$options, _nextProps$options;

    const {
      width,
      height,
      data
    } = this.props;
    let changed = false;

    if (width !== nextProps.width || height !== nextProps.height) {
      this.updateSize(nextProps);
      changed = true;
    }

    if (data !== nextProps.data) {
      this.element.updateData(this.dims);
      changed = true;
    } // Reload the element when options change


    if (((_this$props$options = this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.root) !== ((_nextProps$options = nextProps.options) === null || _nextProps$options === void 0 ? void 0 : _nextProps$options.root)) {
      this.initElement(nextProps);
      changed = true;
    }

    return changed;
  }

  render() {
    const {
      width,
      height
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        width,
        height,
        overflow: 'hidden',
        position: 'relative'
      },
      children: this.element.render()
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/panel/icon/models.gen.ts
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOTE: This file will be auto generated from models.cue
// It is currenty hand written but will serve as the target for cuetsy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const defaultPanelOptions = {
  root: {
    config: {
      path: {
        mode: dimensions/* ResourceDimensionMode.Fixed */.Q8.Fixed,
        fixed: 'img/icons/unicons/analysis.svg'
      },
      fill: {
        fixed: 'green'
      }
    }
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/panel/icon/module.tsx





const module_plugin = new src.PanelPlugin(IconPanel).setNoPadding() // extend to panel edges
.useFieldConfig({
  standardOptions: {
    [src.FieldConfigProperty.Mappings]: {
      settings: {
        icon: true
      }
    }
  }
}).setPanelOptions(builder => {
  builder.addNestedOptions({
    category: ['Icon'],
    path: 'root',
    // Dynamically fill the selected element
    build: (builder, ctx) => {
      icon/* iconItem.registerOptionsUI */.e.registerOptionsUI(builder, ctx);
      options/* optionBuilder.addBackground */.I.addBackground(builder, ctx);
      options/* optionBuilder.addBorder */.I.addBorder(builder, ctx);
    },
    defaultValue: defaultPanelOptions.root
  });
});

/***/ })

}]);