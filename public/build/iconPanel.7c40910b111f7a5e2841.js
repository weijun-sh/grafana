"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[53],{

 "./public/app/plugins/panel/canvas/editor/options.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "I": () => ( optionBuilder)
 });
 var app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/index.ts");
 var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");


const optionBuilder = {
  addBackground: (builder, context) => {
    const category = ['Background'];
    builder.addCustomEditor({
      category,
      id: 'background.color',
      path: 'background.color',
      name: 'Color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ .Lm,
      settings: {},
      defaultValue: {
        fixed: ''
      }
    }).addCustomEditor({
      category,
      id: 'background.image',
      path: 'background.image',
      name: 'Image',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ .Lv,
      settings: {
        resourceType: 'image'
      }
    }).addRadio({
      category,
      path: 'background.size',
      name: 'Image size',
      settings: {
        options: [{
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Original,
          label: 'Original'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Contain,
          label: 'Contain'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Cover,
          label: 'Cover'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Fill,
          label: 'Fill'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Tile,
          label: 'Tile'
        }]
      },
      defaultValue: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ .Uy.Cover
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
        editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ .Lm,
        settings: {},
        defaultValue: {
          fixed: ''
        }
      });
    }
  }
};

 }),

 "./public/app/plugins/panel/icon/module.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var icon = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
var options = __webpack_require__("./public/app/plugins/panel/canvas/editor/options.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var canvas = __webpack_require__("./public/app/features/canvas/index.ts");
var runtime_element = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
var dimensions = __webpack_require__("./public/app/features/dimensions/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IconPanel extends react.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "initElement", props => {
      this.element = new runtime_element.f(icon.e, props.options.root);
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
        vertical: canvas.fJ.Top,
        horizontal: canvas._5.Left
      };
      this.element.options.placement = {
        left: 0,
        top: 0,
        width,
        height
      };
    });

    _defineProperty(this, "dims", {
      getColor: color => (0,dimensions.FP)(this.props.data, color),
      getScale: scale => (0,dimensions.pb)(this.props.data, scale),
      getScalar: scalar => (0,dimensions.z2)(this.props.data, scalar),
      getText: text => (0,dimensions.WO)(this.props.data, text),
      getResource: res => (0,dimensions.Qz)(this.props.data, res)
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
    } 


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
    return (0,jsx_runtime.jsx)("div", {
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
;

const defaultPanelOptions = {
  root: {
    config: {
      path: {
        mode: dimensions.Q8.Fixed,
        fixed: 'img/icons/unicons/analysis.svg'
      },
      fill: {
        fixed: 'green'
      }
    }
  }
};
;





const module_plugin = new src.PanelPlugin(IconPanel).setNoPadding() 
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
    build: (builder, ctx) => {
      icon.e.registerOptionsUI(builder, ctx);
      options.I.addBackground(builder, ctx);
      options.I.addBorder(builder, ctx);
    },
    defaultValue: defaultPanelOptions.root
  });
});

 })

}]);