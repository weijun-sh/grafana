"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[385],{

 "./public/app/features/canvas/elements/icon.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "e": () => ( iconItem)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
 var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
 var app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/index.ts");
 var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
 var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const svgStrokePathClass = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  path {
    vector-effect: non-scaling-stroke;
  }
`;
function IconDisplay(props) {
  const {
    data
  } = props;

  if (!(data !== null && data !== void 0 && data.path)) {
    return null;
  }

  const onClick = () => {
    if (data !== null && data !== void 0 && data.api) {
      (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ .t)(data.api);
    }
  };

  const svgStyle = {
    fill: data === null || data === void 0 ? void 0 : data.fill,
    stroke: data === null || data === void 0 ? void 0 : data.strokeColor,
    strokeWidth: data === null || data === void 0 ? void 0 : data.stroke
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ .Z, {
    onClick: onClick,
    src: data.path,
    style: svgStyle,
    className: svgStyle.strokeWidth ? svgStrokePathClass : undefined
  });
}
const iconItem = {
  id: 'icon',
  name: 'Icon',
  description: 'SVG Icon display',
  display: IconDisplay,
  getNewOptions: options => Object.assign({
    placement: {
      width: 50,
      height: 50,
      top: 0,
      left: 0
    }
  }, options, {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ .Q8.Fixed,
        fixed: 'img/icons/unicons/question-circle.svg'
      },
      fill: {
        fixed: '#FFF899'
      }
    }
  }),
  prepareData: (ctx, cfg) => {
    var _cfg$api, _cfg$stroke;

    let path = undefined;

    if (cfg.path) {
      path = ctx.getResource(cfg.path).value();
    }

    if (!path || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(path)) {
      path = (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ .t7)('img/icons/unicons/question-circle.svg');
    }

    const data = {
      path,
      fill: cfg.fill ? ctx.getColor(cfg.fill).value() : '#CCC',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };

    if ((_cfg$stroke = cfg.stroke) !== null && _cfg$stroke !== void 0 && _cfg$stroke.width && cfg.stroke.color) {
      if (cfg.stroke.width > 0) {
        var _cfg$stroke2;

        data.stroke = (_cfg$stroke2 = cfg.stroke) === null || _cfg$stroke2 === void 0 ? void 0 : _cfg$stroke2.width;
        data.strokeColor = ctx.getColor(cfg.stroke.color).value();
      }
    }

    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Icon'];
    builder.addCustomEditor({
      category,
      id: 'iconSelector',
      path: 'config.path',
      name: 'SVG Path',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ .Lv,
      settings: {
        resourceType: 'icon'
      }
    }).addCustomEditor({
      category,
      id: 'config.fill',
      path: 'config.fill',
      name: 'Fill color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ .Lm,
      settings: {},
      defaultValue: {
        fixed: 'grey'
      }
    }).addSliderInput({
      category,
      path: 'config.stroke.width',
      name: 'Stroke',
      defaultValue: 0,
      settings: {
        min: 0,
        max: 10
      }
    }).addCustomEditor({
      category,
      id: 'config.stroke.color',
      path: 'config.stroke.color',
      name: 'Stroke color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ .Lm,
      settings: {},
      defaultValue: {
        fixed: 'grey'
      },
      showIf: cfg => {
        var _cfg$config, _cfg$config$stroke;

        return Boolean(cfg === null || cfg === void 0 ? void 0 : (_cfg$config = cfg.config) === null || _cfg$config === void 0 ? void 0 : (_cfg$config$stroke = _cfg$config.stroke) === null || _cfg$config$stroke === void 0 ? void 0 : _cfg$config$stroke.width);
      }
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ .U
    });
  }
};

 }),

 "./public/app/features/canvas/elements/notFound.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "C": () => ( notFoundItem)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





class NotFoundDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      config
    } = this.props;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        children: "NOT FOUND:"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
        children: JSON.stringify(config, null, 2)
      })]
    });
  }

}

const notFoundItem = {
  id: 'not-found',
  name: 'Not found',
  description: 'Display when element type is not found in the registry',
  display: NotFoundDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: () => ({
    config: {}
  })
};

 }),

 "./public/app/features/canvas/index.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "Uy": () => ( types.Uy),
  "Nm": () => ( DEFAULT_CANVAS_ELEMENT_CONFIG),
  "_5": () => ( types._5),
  "fJ": () => ( types.fJ),
  "Jk": () => ( canvasElementRegistry)
});


var types = __webpack_require__("./public/app/features/canvas/types.ts");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var TextDimensionEditor = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
var APIEditor = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;






class ButtonDisplay extends react.PureComponent {
  render() {
    const {
      data
    } = this.props;

    const onClick = () => {
      if (data !== null && data !== void 0 && data.api) {
        (0,APIEditor.t)(data.api);
      }
    };

    return (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      type: "submit",
      onClick: onClick,
      children: data === null || data === void 0 ? void 0 : data.text
    });
  }

}

const buttonItem = {
  id: 'button',
  name: 'Button',
  description: 'Button',
  display: ButtonDisplay,
  defaultSize: {
    width: 200,
    height: 50
  },
  getNewOptions: options => Object.assign({}, options),
  prepareData: (ctx, cfg) => {
    var _cfg$api;

    const data = {
      text: cfg !== null && cfg !== void 0 && cfg.text ? ctx.getText(cfg.text).value() : '',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Button'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: TextDimensionEditor.$
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: APIEditor.U
    });
  }
};
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var editors = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
;
var _g, _g2, _g3, _g4;








const DroneFrontDisplay = props => {
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneFrontTransformStyle = `rotate(${data !== null && data !== void 0 && data.rollAngle ? data.rollAngle : 0}deg)`;
  return (0,jsx_runtime.jsxs)("svg", {
    className: styles.droneFront,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneFrontTransformStyle
    },
    children: [_g || (_g = (0,jsx_runtime.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [(0,jsx_runtime.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = (0,jsx_runtime.jsxs)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: [(0,jsx_runtime.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      }), (0,jsx_runtime.jsx)("circle", {
        cx: "650",
        cy: "160",
        r: "40",
        fill: "none"
      })]
    })), _g3 || (_g3 = (0,jsx_runtime.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [(0,jsx_runtime.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = (0,jsx_runtime.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [(0,jsx_runtime.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneFrontItem = {
  id: 'droneFront',
  name: 'Drone Front',
  description: 'Drone front',
  display: DroneFrontDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  prepareData: (ctx, cfg) => {
    const data = {
      rollAngle: cfg !== null && cfg !== void 0 && cfg.rollAngle ? ctx.getScalar(cfg.rollAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Front'];
    builder.addCustomEditor({
      category,
      id: 'rollAngle',
      path: 'config.rollAngle',
      name: 'Roll Angle',
      editor: editors.k9
    });
  }
};

const getStyles = theme => ({
  droneFront: emotion_css_esm.css`
    transition: transform 0.4s;
  `
});
;
var droneSide_g, droneSide_g2, droneSide_g3, droneSide_g4;








const DroneSideDisplay = props => {
  const styles = (0,grafana_ui_src.useStyles2)(droneSide_getStyles);
  const {
    data
  } = props;
  const droneSidePitchTransformStyle = `rotate(${data !== null && data !== void 0 && data.pitchAngle ? data.pitchAngle : 0}deg)`;
  return (0,jsx_runtime.jsxs)("svg", {
    className: styles.droneSide,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneSidePitchTransformStyle
    },
    children: [droneSide_g || (droneSide_g = (0,jsx_runtime.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [(0,jsx_runtime.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), (0,jsx_runtime.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), droneSide_g2 || (droneSide_g2 = (0,jsx_runtime.jsx)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: (0,jsx_runtime.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      })
    })), droneSide_g3 || (droneSide_g3 = (0,jsx_runtime.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [(0,jsx_runtime.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), droneSide_g4 || (droneSide_g4 = (0,jsx_runtime.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [(0,jsx_runtime.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneSideItem = {
  id: 'droneSide',
  name: 'Drone Side',
  description: 'Drone Side',
  display: DroneSideDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  prepareData: (ctx, cfg) => {
    const data = {
      pitchAngle: cfg !== null && cfg !== void 0 && cfg.pitchAngle ? ctx.getScalar(cfg.pitchAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Side'];
    builder.addCustomEditor({
      category,
      id: 'pitchAngle',
      path: 'config.pitchAngle',
      name: 'Pitch Angle',
      editor: editors.k9
    });
  }
};

const droneSide_getStyles = theme => ({
  droneSide: emotion_css_esm.css`
    transition: transform 0.4s;
  `
});
;
var _path, _path2;








const DroneTopDisplay = props => {
  const styles = (0,grafana_ui_src.useStyles2)(droneTop_getStyles);
  const {
    data
  } = props;
  const fRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.fRightRotorRPM ? 60 / Math.abs(data.fRightRotorRPM) : 0}s linear infinite`;
  const fLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.fLeftRotorRPM ? 60 / Math.abs(data.fLeftRotorRPM) : 0}s linear infinite`;
  const bRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.bRightRotorRPM ? 60 / Math.abs(data.bRightRotorRPM) : 0}s linear infinite`;
  const bLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.bLeftRotorRPM ? 60 / Math.abs(data.bLeftRotorRPM) : 0}s linear infinite`;
  const droneTopTransformStyle = `rotate(${data !== null && data !== void 0 && data.yawAngle ? data.yawAngle : 0}deg)`;
  return (0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "-43 -43 640 640",
    xmlSpace: "preserve",
    style: {
      transform: droneTopTransformStyle
    },
    children: [_path || (_path = (0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      d: " M 137.95 127.967 C 137.14 127.157 136.189 126.58 135.178 126.218 C 138.173 121.545 139.967 116.036 140.125 110.123 L 217.64 151.862 C 214.049 157.411 211.8 163.922 211.386 170.95 L 209.694 199.712 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 Z  M 134.268 426.981 C 130.211 421.314 124.328 417.045 117.482 415.041 L 201.999 330.523 L 201.385 340.955 C 200.67 353.107 202.829 364.914 207.563 375.673 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 Z  M 324.765 373.673 L 228.527 373.673 Q 215.374 358.611 216.361 341.835 L 226.361 171.832 C 226.825 163.94 231.012 157.096 237.146 152.957 L 316.146 152.957 C 322.28 157.096 326.466 163.94 326.931 171.832 L 336.931 341.835 Q 337.918 358.611 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 Z  M 435.81 415.041 C 428.964 417.045 423.081 421.314 419.024 426.981 L 345.727 375.673 C 350.461 364.914 352.62 353.107 351.905 340.955 L 351.291 330.523 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 Z  M 343.596 199.713 L 341.904 170.951 C 341.49 163.923 339.242 157.411 335.651 151.863 L 413.167 110.124 C 413.325 116.037 415.119 121.546 418.114 126.219 C 417.103 126.581 416.152 127.158 415.342 127.968 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 Z  M 444.646 92.771 C 453.744 92.771 461.146 100.172 461.146 109.271 C 461.146 118.369 453.744 125.771 444.646 125.771 C 435.548 125.771 428.146 118.369 428.146 109.271 C 428.146 100.172 435.548 92.771 444.646 92.771 L 444.646 92.771 L 444.646 92.771 L 444.646 92.771 Z  M 108.647 92.771 C 117.745 92.771 125.147 100.172 125.147 109.271 C 125.147 118.369 117.745 125.771 108.647 125.771 C 99.549 125.771 92.147 118.369 92.147 109.271 C 92.147 100.172 99.549 92.771 108.647 92.771 L 108.647 92.771 L 108.647 92.771 Z  M 108.647 461.771 C 99.549 461.771 92.147 454.369 92.147 445.271 C 92.147 436.172 99.549 428.771 108.647 428.771 C 117.745 428.771 125.147 436.172 125.147 445.271 C 125.147 454.369 117.745 461.771 108.647 461.771 L 108.647 461.771 Z  M 92.322 136.202 C 97.086 139.1 102.675 140.771 108.647 140.771 C 114.883 140.771 120.697 138.941 125.594 135.802 C 125.956 136.813 126.534 137.764 127.343 138.573 L 207.342 218.573 C 207.711 218.942 208.109 219.264 208.528 219.54 L 203.212 309.908 C 201.794 310.182 200.44 310.869 199.342 311.967 L 95.343 415.967 C 94.954 416.356 94.62 416.779 94.335 417.224 C 93.651 417.575 92.976 417.942 92.322 418.34 Q 84.615 424.182 81.716 428.946 C 78.817 433.71 77.147 439.299 77.147 445.271 C 77.147 462.64 91.278 476.771 108.647 476.771 C 114.619 476.771 120.208 475.1 124.972 472.202 C 129.736 469.304 132.678 466.36 135.577 461.596 C 138.476 456.832 140.147 451.243 140.147 445.271 C 140.147 443.943 140.055 442.637 139.895 441.352 L 214.997 388.78 C 217.05 391.677 336.242 391.678 338.295 388.78 L 413.398 441.352 C 413.238 442.637 413.146 443.943 413.146 445.271 C 413.146 451.243 414.817 456.832 417.715 461.596 C 420.613 466.36 423.557 469.304 428.321 472.202 C 433.085 475.1 438.674 476.771 444.646 476.771 C 462.015 476.771 476.146 462.64 476.146 445.271 C 476.146 439.299 474.475 433.71 471.577 428.946 C 468.679 424.182 459.642 417.575 458.958 417.224 C 458.672 416.779 458.339 416.356 457.95 415.967 L 353.95 311.967 C 352.852 310.869 351.498 310.182 350.08 309.908 L 344.764 219.54 C 345.183 219.264 345.581 218.942 345.95 218.573 L 425.95 138.573 C 426.76 137.763 427.337 136.812 427.699 135.802 C 432.596 138.941 438.409 140.771 444.646 140.771 C 450.618 140.771 456.207 139.1 460.971 136.202 C 465.735 133.304 468.679 130.36 471.577 125.596 C 474.475 120.832 476.146 115.243 476.146 109.271 C 476.146 91.903 462.015 77.772 444.646 77.772 C 438.674 77.772 433.085 79.442 428.321 82.34 L 416.215 91.446 L 324.765 140.688 C 318.402 136.324 310.718 133.771 302.473 133.771 L 250.819 133.771 C 242.574 133.771 234.89 136.324 228.527 140.688 L 137.078 91.446 L 124.972 82.34 C 120.208 79.442 114.619 77.772 108.647 77.772 C 91.278 77.772 77.147 91.903 77.147 109.271 C 77.147 115.243 78.818 120.832 81.716 125.595 C 84.614 130.358 87.558 133.304 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 Z  M 444.646 461.771 C 435.548 461.771 428.146 454.369 428.146 445.271 C 428.146 436.172 435.548 428.771 444.646 428.771 C 453.744 428.771 461.146 436.172 461.146 445.271 C 461.146 454.369 453.744 461.771 444.646 461.771 Z "
    })), _path2 || (_path2 = (0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      d: " M 259.458 334.235 L 259.458 337.211 L 254.514 337.211 L 254.514 350.795 L 250.842 350.795 L 250.842 337.211 L 245.898 337.211 L 245.898 334.235 L 259.458 334.235 Z  M 266.226 347.939 L 272.586 347.939 L 272.754 350.627 L 272.754 350.627 Q 270.498 350.867 265.074 350.867 L 265.074 350.867 L 265.074 350.867 Q 263.418 350.867 262.434 349.967 L 262.434 349.967 L 262.434 349.967 Q 261.45 349.067 261.426 347.531 L 261.426 347.531 L 261.426 337.499 L 261.426 337.499 Q 261.45 335.963 262.434 335.063 L 262.434 335.063 L 262.434 335.063 Q 263.418 334.163 265.074 334.163 L 265.074 334.163 L 265.074 334.163 Q 270.498 334.163 272.754 334.403 L 272.754 334.403 L 272.586 337.115 L 266.226 337.115 L 266.226 337.115 Q 265.626 337.115 265.362 337.403 L 265.362 337.403 L 265.362 337.403 Q 265.098 337.691 265.098 338.339 L 265.098 338.339 L 265.098 340.859 L 271.698 340.859 L 271.698 343.499 L 265.098 343.499 L 265.098 346.691 L 265.098 346.691 Q 265.098 347.363 265.362 347.651 L 265.362 347.651 L 265.362 347.651 Q 265.626 347.939 266.226 347.939 L 266.226 347.939 Z  M 275.202 333.995 L 278.73 333.995 L 278.73 346.931 L 278.73 346.931 Q 278.73 348.131 280.074 348.131 L 280.074 348.131 L 281.034 348.131 L 281.442 350.603 L 281.442 350.603 Q 280.53 351.083 278.61 351.083 L 278.61 351.083 L 278.61 351.083 Q 277.026 351.083 276.114 350.231 L 276.114 350.231 L 276.114 350.231 Q 275.202 349.379 275.202 347.819 L 275.202 347.819 L 275.202 333.995 Z  M 283.05 333.995 L 286.578 333.995 L 286.578 346.931 L 286.578 346.931 Q 286.578 348.131 287.922 348.131 L 287.922 348.131 L 288.882 348.131 L 289.29 350.603 L 289.29 350.603 Q 288.378 351.083 286.458 351.083 L 286.458 351.083 L 286.458 351.083 Q 284.874 351.083 283.962 350.231 L 283.962 350.231 L 283.962 350.231 Q 283.05 349.379 283.05 347.819 L 283.05 347.819 L 283.05 333.995 Z  M 292.086 335.759 L 292.086 335.759 L 292.086 335.759 Q 293.634 333.923 297.618 333.923 L 297.618 333.923 L 297.618 333.923 Q 301.602 333.923 303.162 335.759 L 303.162 335.759 L 303.162 335.759 Q 304.722 337.595 304.722 342.515 L 304.722 342.515 L 304.722 342.515 Q 304.722 347.435 303.162 349.271 L 303.162 349.271 L 303.162 349.271 Q 301.602 351.107 297.618 351.107 L 297.618 351.107 L 297.618 351.107 Q 293.634 351.107 292.086 349.271 L 292.086 349.271 L 292.086 349.271 Q 290.538 347.435 290.538 342.515 L 290.538 342.515 L 290.538 342.515 Q 290.538 337.595 292.086 335.759 Z  M 300.174 338.051 L 300.174 338.051 L 300.174 338.051 Q 299.49 336.875 297.618 336.875 L 297.618 336.875 L 297.618 336.875 Q 295.746 336.875 295.062 338.051 L 295.062 338.051 L 295.062 338.051 Q 294.378 339.227 294.378 342.515 L 294.378 342.515 L 294.378 342.515 Q 294.378 345.803 295.062 346.979 L 295.062 346.979 L 295.062 346.979 Q 295.746 348.155 297.618 348.155 L 297.618 348.155 L 297.618 348.155 Q 299.49 348.155 300.174 346.979 L 300.174 346.979 L 300.174 346.979 Q 300.858 345.803 300.858 342.515 L 300.858 342.515 L 300.858 342.515 Q 300.858 339.227 300.174 338.051 Z "
    })), (0,jsx_runtime.jsxs)("g", {
      className: "propeller-group",
      children: [(0,jsx_runtime.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: bRightRotorAnimation
        },
        d: " M 461.563 418.77 L 463.992 416.34 Q 465.495 407.116 466.461 400.395 C 467.426 393.675 469.363 388.087 474.731 383.284 Q 533.862 341.514 538.196 338.859 C 542.529 336.203 548.345 334.299 551.492 338.29 C 554.639 342.282 553.481 346.02 549.419 350.082 L 471.147 428.354 L 461.563 418.77 Z  M 427.729 471.772 L 425.299 474.202 Q 423.797 483.426 422.831 490.146 C 421.866 496.867 419.929 502.454 414.561 507.257 Q 355.43 549.028 351.096 551.683 C 346.763 554.338 340.947 556.243 337.8 552.251 C 334.653 548.26 335.811 544.522 339.873 540.46 L 418.145 462.187 L 427.729 471.772 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: fRightRotorAnimation
        },
        d: " M 461.563 135.773 L 463.992 138.203 Q 465.495 147.426 466.461 154.147 C 467.426 160.868 469.363 166.455 474.731 171.258 Q 533.862 213.028 538.196 215.684 C 542.529 218.339 548.345 220.244 551.492 216.252 C 554.639 212.26 553.481 208.523 549.419 204.46 L 471.147 126.188 L 461.563 135.773 Z  M 427.729 82.77 L 425.299 80.34 Q 423.797 71.117 422.831 64.396 C 421.866 57.675 419.929 52.088 414.561 47.285 Q 355.43 5.515 351.096 2.859 C 346.763 0.204 340.947 -1.701 337.8 2.291 C 334.653 6.282 335.811 10.02 339.873 14.082 L 418.145 92.355 L 427.729 82.77 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: bLeftRotorAnimation
        },
        d: " M 125.563 471.772 L 127.993 474.202 Q 129.496 483.426 130.461 490.146 C 131.427 496.867 133.363 502.454 138.731 507.257 Q 197.863 549.028 202.196 551.683 C 206.53 554.338 212.345 556.243 215.492 552.251 C 218.639 548.26 217.482 544.522 213.419 540.46 L 135.148 462.187 L 125.563 471.772 Z  M 91.73 418.77 L 89.3 416.34 Q 87.797 407.116 86.832 400.395 C 85.866 393.675 83.93 388.087 78.562 383.284 Q 19.431 341.514 15.097 338.859 C 10.763 336.203 4.948 334.299 1.801 338.29 C -1.346 342.282 -0.189 346.02 3.874 350.082 L 82.146 428.354 L 91.73 418.77 Z "
      }), (0,jsx_runtime.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: fLeftRotorAnimation
        },
        d: " M 125.563 82.77 L 127.993 80.34 Q 129.496 71.117 130.461 64.396 C 131.427 57.675 133.363 52.088 138.731 47.285 Q 197.863 5.515 202.196 2.859 C 206.53 0.204 212.345 -1.701 215.492 2.291 C 218.639 6.282 217.482 10.02 213.419 14.083 L 135.147 92.355 L 125.563 82.77 Z  M 91.73 135.773 L 89.3 138.203 Q 87.797 147.426 86.832 154.147 C 85.866 160.868 83.93 166.455 78.562 171.258 Q 19.431 213.028 15.097 215.684 C 10.763 218.339 4.948 220.243 1.801 216.252 C -1.346 212.26 -0.189 208.523 3.874 204.46 L 82.146 126.188 L 91.73 135.773 Z "
      })]
    })]
  });
};

const droneTopItem = {
  id: 'droneTop',
  name: 'Drone Top',
  description: 'Drone top',
  display: DroneTopDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  prepareData: (ctx, cfg) => {
    const data = {
      bRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.bRightRotorRPM ? ctx.getScalar(cfg.bRightRotorRPM).value() : 0,
      bLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.bLeftRotorRPM ? ctx.getScalar(cfg.bLeftRotorRPM).value() : 0,
      fRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.fRightRotorRPM ? ctx.getScalar(cfg.fRightRotorRPM).value() : 0,
      fLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.fLeftRotorRPM ? ctx.getScalar(cfg.fLeftRotorRPM).value() : 0,
      yawAngle: cfg !== null && cfg !== void 0 && cfg.yawAngle ? ctx.getScalar(cfg.yawAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Top'];
    builder.addCustomEditor({
      category,
      id: 'yawAngle',
      path: 'config.yawAngle',
      name: 'Yaw Angle',
      editor: editors.k9
    }).addCustomEditor({
      category,
      id: 'fRightRotorRPM',
      path: 'config.fRightRotorRPM',
      name: 'Front Right Rotor RPM',
      editor: editors.k9
    }).addCustomEditor({
      category,
      id: 'fLeftRotorRPM',
      path: 'config.fLeftRotorRPM',
      name: 'Front Left Rotor RPM',
      editor: editors.k9
    }).addCustomEditor({
      category,
      id: 'bRightRotorRPM',
      path: 'config.bRightRotorRPM',
      name: 'Back Right Rotor RPM',
      editor: editors.k9
    }).addCustomEditor({
      category,
      id: 'bLeftRotorRPM',
      path: 'config.bLeftRotorRPM',
      name: 'Back Left Rotor RPM',
      editor: editors.k9
    });
  }
};

const droneTop_getStyles = theme => ({
  propeller: emotion_css_esm.css`
    transform-origin: 50% 50%;
    transform-box: fill-box;
    display: block;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  propellerCW: emotion_css_esm.css`
    animation-direction: normal;
  `,
  propellerCCW: emotion_css_esm.css`
    animation-direction: reverse;
  `
});
var icon = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
var config = __webpack_require__("./public/app/core/config.ts");
var ColorDimensionEditor = __webpack_require__("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");
;







let Align;

(function (Align) {
  Align["Left"] = "left";
  Align["Center"] = "center";
  Align["Right"] = "right";
})(Align || (Align = {}));

let VAlign;

(function (VAlign) {
  VAlign["Top"] = "top";
  VAlign["Middle"] = "middle";
  VAlign["Bottom"] = "bottom";
})(VAlign || (VAlign = {}));

class TextBoxDisplay extends react.PureComponent {
  render() {
    const {
      data
    } = this.props;
    const styles = textBox_getStyles(config.vc.theme2, data);
    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: (0,jsx_runtime.jsx)("span", {
        className: styles.span,
        children: data === null || data === void 0 ? void 0 : data.text
      })
    });
  }

}

const textBox_getStyles = (0,grafana_ui_src.stylesFactory)((theme, data) => ({
  container: emotion_css_esm.css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
  `,
  span: emotion_css_esm.css`
    display: table-cell;
    vertical-align: ${data.valign};
    text-align: ${data.align};
    font-size: ${data === null || data === void 0 ? void 0 : data.size}px;
    color: ${data === null || data === void 0 ? void 0 : data.color};
  `
}));
const textBoxItem = {
  id: 'text-box',
  name: 'Text',
  description: 'Text box',
  display: TextBoxDisplay,
  defaultSize: {
    width: 240,
    height: 160
  },
  getNewOptions: options => Object.assign({
    background: {
      color: {
        fixed: 'grey'
      }
    }
  }, options, {
    config: {
      align: Align.Left,
      valign: VAlign.Middle
    }
  }),
  prepareData: (ctx, cfg) => {
    var _cfg$align, _cfg$valign;

    const data = {
      text: cfg.text ? ctx.getText(cfg.text).value() : '',
      align: (_cfg$align = cfg.align) !== null && _cfg$align !== void 0 ? _cfg$align : Align.Center,
      valign: (_cfg$valign = cfg.valign) !== null && _cfg$valign !== void 0 ? _cfg$valign : VAlign.Middle,
      size: cfg.size
    };

    if (cfg.color) {
      data.color = ctx.getColor(cfg.color).value();
    }

    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Text box'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: TextDimensionEditor.$
    }).addCustomEditor({
      category,
      id: 'config.color',
      path: 'config.color',
      name: 'Text color',
      editor: ColorDimensionEditor.L,
      settings: {},
      defaultValue: {}
    }).addRadio({
      category,
      path: 'config.align',
      name: 'Align text',
      settings: {
        options: [{
          value: Align.Left,
          label: 'Left'
        }, {
          value: Align.Center,
          label: 'Center'
        }, {
          value: Align.Right,
          label: 'Right'
        }]
      },
      defaultValue: Align.Left
    }).addRadio({
      category,
      path: 'config.valign',
      name: 'Vertical align',
      settings: {
        options: [{
          value: VAlign.Top,
          label: 'Top'
        }, {
          value: VAlign.Middle,
          label: 'Middle'
        }, {
          value: VAlign.Bottom,
          label: 'Bottom'
        }]
      },
      defaultValue: VAlign.Middle
    }).addNumberInput({
      category,
      path: 'config.size',
      name: 'Text size',
      settings: {
        placeholder: 'Auto'
      }
    });
  }
};
;
var _symbol, windTurbine_g, _use, _use2, _use3;








const WindTurbineDisplay = props => {
  const styles = (0,grafana_ui_src.useStyles2)(windTurbine_getStyles);
  const {
    data
  } = props;
  const windTurbineAnimation = `spin ${data !== null && data !== void 0 && data.rpm ? 60 / Math.abs(data.rpm) : 0}s linear infinite`;
  return (0,jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 189.326 283.989",
    preserveAspectRatio: "xMidYMid meet",
    children: [_symbol || (_symbol = (0,jsx_runtime.jsxs)("symbol", {
      id: "blade",
      children: [(0,jsx_runtime.jsx)("path", {
        fill: "#e6e6e6",
        id: "blade-front",
        d: "M14.6491879,1.85011601 C14.2684455,-0.0535962877 10.7150812,-0.815081206 9.06473318,3.37308585 L0.434338747,70.7658933 L8.93805104,91.9607889 L15.4106729,90.437819 L17.5684455,78.3807425 L14.5218097,1.97679814 L14.6491879,1.85011601 Z"
      }), (0,jsx_runtime.jsx)("path", {
        fill: "#d0d6d7",
        id: "blade-side",
        d: "M11.0951276,0.581206497 C10.3336427,0.961948956 9.57215777,1.85011601 8.93735499,3.24640371 L0.306960557,70.6392111 L8.81067285,91.8341067 L3.35359629,70.0044084 L11.0951276,0.581206497 Z"
      })]
    })), (0,jsx_runtime.jsxs)("g", {
      children: [windTurbine_g || (windTurbine_g = (0,jsx_runtime.jsxs)("g", {
        id: "structure",
        transform: "translate(58.123, 82.664)",
        fillRule: "nonzero",
        children: [(0,jsx_runtime.jsx)("polygon", {
          id: "tower",
          fill: "#e6e6e6",
          points: "33.111,10.984 39.965,10.984 44.28,196.176 28.796,196.176"
        }), (0,jsx_runtime.jsx)("path", {
          id: "yaw",
          fill: "rgba(0,0,0,0.25)",
          d: "M40.3454756,23.2948956 L40.7262181,34.8445476 C38.8225058,35.0986079 35.7765661,35.0986079 32.349884,34.337123 L32.7306265,23.2955916 L40.3454756,23.2955916 L40.3454756,23.2948956 Z"
        }), (0,jsx_runtime.jsx)("path", {
          id: "base",
          fill: "#d0d6d7",
          transform: "translate(0 42)",
          d: "M26.3846868,150.591647 L46.5640371,150.591647 C48.8484919,150.591647 50.7522042,152.49536 50.7522042,154.779814 L50.7522042,158.967981 L22.0691415,158.967981 L22.0691415,154.779814 C22.0691415,152.49536 23.9728538,150.591647 26.2573086,150.591647 L26.3846868,150.591647 Z"
        }), (0,jsx_runtime.jsx)("circle", {
          id: "nacelle",
          fill: "#e6e6e6",
          cx: "36.54",
          cy: "12",
          r: "11.93"
        }), (0,jsx_runtime.jsx)("circle", {
          id: "gearbox",
          fill: "none",
          stroke: "#d0d6d7",
          strokeWidth: "2.75",
          cx: "36.538",
          cy: "11.999",
          r: "5.8"
        })]
      })), (0,jsx_runtime.jsxs)("g", {
        className: styles.blade,
        style: {
          animation: windTurbineAnimation
        },
        children: [_use || (_use = (0,jsx_runtime.jsx)("use", {
          id: "blade1",
          href: "#blade",
          x: "83.24",
          y: "0"
        })), _use2 || (_use2 = (0,jsx_runtime.jsx)("use", {
          id: "blade2",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(120 94.663 94.663)"
        })), _use3 || (_use3 = (0,jsx_runtime.jsx)("use", {
          id: "blade3",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(-120 94.663 94.663)"
        }))]
      })]
    })]
  });
};

const windTurbineItem = {
  id: 'windTurbine',
  name: 'Wind Turbine',
  description: 'Spinny spinny',
  display: WindTurbineDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  prepareData: (ctx, cfg) => {
    const data = {
      rpm: cfg !== null && cfg !== void 0 && cfg.rpm ? ctx.getScalar(cfg.rpm).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Wind Turbine'];
    builder.addCustomEditor({
      category,
      id: 'rpm',
      path: 'config.rpm',
      name: 'RPM',
      editor: editors.k9
    });
  }
};

const windTurbine_getStyles = theme => ({
  blade: emotion_css_esm.css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    transform-origin: 94.663px 94.663px;
    transform: rotate(15deg);
  `
});
;








const DEFAULT_CANVAS_ELEMENT_CONFIG = Object.assign({}, icon.e.getNewOptions(), {
  type: icon.e.id,
  name: `Element 1`
});
const canvasElementRegistry = new src.Registry(() => [icon.e, 
textBoxItem, buttonItem, droneTopItem, droneFrontItem, droneSideItem, windTurbineItem]);
;





 }),

 "./public/app/features/canvas/runtime/element.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "f": () => ( ElementState)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
 var app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/notFound.tsx");
 var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/types.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let counter = 0;
class ElementState {
  constructor(item, options, parent) {
    var _options$constraint, _options$placement;

    this.item = item;
    this.options = options;
    this.parent = parent;

    _defineProperty(this, "UID", counter++);

    _defineProperty(this, "revId", 0);

    _defineProperty(this, "sizeStyle", {});

    _defineProperty(this, "dataStyle", {});

    _defineProperty(this, "div", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "initElement", target => {
      this.div = target;
      this.applyLayoutStylesToDiv();
    });

    _defineProperty(this, "applyDrag", event => {
      event.target.style.transform = event.transform;
    });

    _defineProperty(this, "applyResize", event => {
      const {
        options
      } = this;
      const {
        placement,
        constraint
      } = options;
      const {
        vertical,
        horizontal
      } = constraint !== null && constraint !== void 0 ? constraint : {};
      const top = vertical === _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Top || vertical === _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.TopBottom;
      const bottom = vertical === _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Bottom || vertical === _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.TopBottom;
      const left = horizontal === _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Left || horizontal === _types__WEBPACK_IMPORTED_MODULE_3__ ._5.LeftRight;
      const right = horizontal === _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Right || horizontal === _types__WEBPACK_IMPORTED_MODULE_3__ ._5.LeftRight;
      const style = event.target.style;
      const deltaX = event.delta[0];
      const deltaY = event.delta[1];
      const dirLR = event.direction[0];
      const dirTB = event.direction[1];

      if (dirLR === 1) {
        if (right) {
          placement.right -= deltaX;
          style.right = `${placement.right}px`;

          if (!left) {
            placement.width = event.width;
            style.width = `${placement.width}px`;
          }
        } else {
          placement.width = event.width;
          style.width = `${placement.width}px`;
        }
      } else if (dirLR === -1) {
        if (left) {
          placement.left -= deltaX;
          placement.width = event.width;
          style.left = `${placement.left}px`;
          style.width = `${placement.width}px`;
        } else {
          placement.width += deltaX;
          style.width = `${placement.width}px`;
        }
      }

      if (dirTB === -1) {
        if (top) {
          placement.top -= deltaY;
          placement.height = event.height;
          style.top = `${placement.top}px`;
          style.height = `${placement.height}px`;
        } else {
          placement.height = event.height;
          style.height = `${placement.height}px`;
        }
      } else if (dirTB === 1) {
        if (bottom) {
          placement.bottom -= deltaY;
          placement.height = event.height;
          style.bottom = `${placement.bottom}px`;
          style.height = `${placement.height}px`;
        } else {
          placement.height = event.height;
          style.height = `${placement.height}px`;
        }
      }
    });

    this.item = item;
    this.options = options;
    this.parent = parent;
    const fallbackName = `Element ${Date.now()}`;

    if (!options) {
      this.options = {
        type: item.id,
        name: fallbackName
      };
    }

    options.constraint = (_options$constraint = options.constraint) !== null && _options$constraint !== void 0 ? _options$constraint : {
      vertical: _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Top,
      horizontal: _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Left
    };
    options.placement = (_options$placement = options.placement) !== null && _options$placement !== void 0 ? _options$placement : {
      width: 100,
      height: 100,
      top: 0,
      left: 0
    };
    const scene = this.getScene();

    if (!options.name) {
      const newName = scene === null || scene === void 0 ? void 0 : scene.getNextElementName();
      options.name = newName !== null && newName !== void 0 ? newName : fallbackName;
    }

    scene === null || scene === void 0 ? void 0 : scene.byName.set(options.name, this);
  }

  getScene() {
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        return trav.scene;
      }

      trav = trav.parent;
    }

    return undefined;
  }

  getName() {
    return this.options.name;
  }


  applyLayoutStylesToDiv() {
    var _this$options$placeme, _placement$top, _placement$height, _placement$bottom, _placement$height2, _placement$top2, _placement$bottom2, _placement$top3, _placement$height3, _placement$top4, _placement$bottom3, _placement$left, _placement$width, _placement$right, _placement$width2, _placement$left2, _placement$right2, _placement$left3, _placement$width3, _placement$left4, _placement$right3;

    if (this.isRoot()) {
      return;
    }

    const {
      constraint
    } = this.options;
    const {
      vertical,
      horizontal
    } = constraint !== null && constraint !== void 0 ? constraint : {};
    const placement = (_this$options$placeme = this.options.placement) !== null && _this$options$placeme !== void 0 ? _this$options$placeme : {};
    const style = {
      position: 'absolute'
    };
    const translate = ['0px', '0px'];

    switch (vertical) {
      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Top:
        placement.top = (_placement$top = placement.top) !== null && _placement$top !== void 0 ? _placement$top : 0;
        placement.height = (_placement$height = placement.height) !== null && _placement$height !== void 0 ? _placement$height : 100;
        style.top = `${placement.top}px`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Bottom:
        placement.bottom = (_placement$bottom = placement.bottom) !== null && _placement$bottom !== void 0 ? _placement$bottom : 0;
        placement.height = (_placement$height2 = placement.height) !== null && _placement$height2 !== void 0 ? _placement$height2 : 100;
        style.bottom = `${placement.bottom}px`;
        style.height = `${placement.height}px`;
        delete placement.top;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.TopBottom:
        placement.top = (_placement$top2 = placement.top) !== null && _placement$top2 !== void 0 ? _placement$top2 : 0;
        placement.bottom = (_placement$bottom2 = placement.bottom) !== null && _placement$bottom2 !== void 0 ? _placement$bottom2 : 0;
        style.top = `${placement.top}px`;
        style.bottom = `${placement.bottom}px`;
        delete placement.height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Center:
        placement.top = (_placement$top3 = placement.top) !== null && _placement$top3 !== void 0 ? _placement$top3 : 0;
        placement.height = (_placement$height3 = placement.height) !== null && _placement$height3 !== void 0 ? _placement$height3 : 100;
        translate[1] = '-50%';
        style.top = `calc(50% - ${placement.top}px)`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Scale:
        placement.top = (_placement$top4 = placement.top) !== null && _placement$top4 !== void 0 ? _placement$top4 : 0;
        placement.bottom = (_placement$bottom3 = placement.bottom) !== null && _placement$bottom3 !== void 0 ? _placement$bottom3 : 0;
        style.top = `${placement.top}%`;
        style.bottom = `${placement.bottom}%`;
        delete placement.height;
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Left:
        placement.left = (_placement$left = placement.left) !== null && _placement$left !== void 0 ? _placement$left : 0;
        placement.width = (_placement$width = placement.width) !== null && _placement$width !== void 0 ? _placement$width : 100;
        style.left = `${placement.left}px`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Right:
        placement.right = (_placement$right = placement.right) !== null && _placement$right !== void 0 ? _placement$right : 0;
        placement.width = (_placement$width2 = placement.width) !== null && _placement$width2 !== void 0 ? _placement$width2 : 100;
        style.right = `${placement.right}px`;
        style.width = `${placement.width}px`;
        delete placement.left;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.LeftRight:
        placement.left = (_placement$left2 = placement.left) !== null && _placement$left2 !== void 0 ? _placement$left2 : 0;
        placement.right = (_placement$right2 = placement.right) !== null && _placement$right2 !== void 0 ? _placement$right2 : 0;
        style.left = `${placement.left}px`;
        style.right = `${placement.right}px`;
        delete placement.width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Center:
        placement.left = (_placement$left3 = placement.left) !== null && _placement$left3 !== void 0 ? _placement$left3 : 0;
        placement.width = (_placement$width3 = placement.width) !== null && _placement$width3 !== void 0 ? _placement$width3 : 100;
        translate[0] = '-50%';
        style.left = `calc(50% - ${placement.left}px)`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Scale:
        placement.left = (_placement$left4 = placement.left) !== null && _placement$left4 !== void 0 ? _placement$left4 : 0;
        placement.right = (_placement$right3 = placement.right) !== null && _placement$right3 !== void 0 ? _placement$right3 : 0;
        style.left = `${placement.left}%`;
        style.right = `${placement.right}%`;
        delete placement.width;
        break;
    }

    style.transform = `translate(${translate[0]}, ${translate[1]})`;
    this.options.placement = placement;
    this.sizeStyle = style;

    if (this.div) {
      for (const key in this.sizeStyle) {
        this.div.style[key] = this.sizeStyle[key];
      }

      for (const key in this.dataStyle) {
        this.div.style[key] = this.dataStyle[key];
      }
    }
  }

  setPlacementFromConstraint(elementContainer, parentContainer) {
    var _elementContainer$wid, _elementContainer, _elementContainer$hei, _elementContainer2, _parentContainer$heig, _parentContainer, _parentContainer$heig2, _parentContainer2, _parentContainer$widt, _parentContainer3, _parentContainer$widt2, _parentContainer4;

    const {
      constraint
    } = this.options;
    const {
      vertical,
      horizontal
    } = constraint !== null && constraint !== void 0 ? constraint : {};

    if (!elementContainer) {
      elementContainer = this.div && this.div.getBoundingClientRect();
    }

    if (!parentContainer) {
      var _this$div$parentEleme;

      parentContainer = this.div && ((_this$div$parentEleme = this.div.parentElement) === null || _this$div$parentEleme === void 0 ? void 0 : _this$div$parentEleme.getBoundingClientRect());
    }

    const relativeTop = elementContainer && parentContainer ? Math.abs(Math.round(elementContainer.top - parentContainer.top)) : 0;
    const relativeBottom = elementContainer && parentContainer ? Math.abs(Math.round(elementContainer.bottom - parentContainer.bottom)) : 0;
    const relativeLeft = elementContainer && parentContainer ? Math.abs(Math.round(elementContainer.left - parentContainer.left)) : 0;
    const relativeRight = elementContainer && parentContainer ? Math.abs(Math.round(elementContainer.right - parentContainer.right)) : 0;
    const placement = {};
    const width = (_elementContainer$wid = (_elementContainer = elementContainer) === null || _elementContainer === void 0 ? void 0 : _elementContainer.width) !== null && _elementContainer$wid !== void 0 ? _elementContainer$wid : 100;
    const height = (_elementContainer$hei = (_elementContainer2 = elementContainer) === null || _elementContainer2 === void 0 ? void 0 : _elementContainer2.height) !== null && _elementContainer$hei !== void 0 ? _elementContainer$hei : 100;

    switch (vertical) {
      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Top:
        placement.top = relativeTop;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Bottom:
        placement.bottom = relativeBottom;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.TopBottom:
        placement.top = relativeTop;
        placement.bottom = relativeBottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Center:
        const elementCenter = elementContainer ? relativeTop + height / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.height / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.top = distanceFromCenter;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ .fJ.Scale:
        placement.top = relativeTop / ((_parentContainer$heig = (_parentContainer = parentContainer) === null || _parentContainer === void 0 ? void 0 : _parentContainer.height) !== null && _parentContainer$heig !== void 0 ? _parentContainer$heig : height) * 100;
        placement.bottom = relativeBottom / ((_parentContainer$heig2 = (_parentContainer2 = parentContainer) === null || _parentContainer2 === void 0 ? void 0 : _parentContainer2.height) !== null && _parentContainer$heig2 !== void 0 ? _parentContainer$heig2 : height) * 100;
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Left:
        placement.left = relativeLeft;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Right:
        placement.right = relativeRight;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.LeftRight:
        placement.left = relativeLeft;
        placement.right = relativeRight;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Center:
        const elementCenter = elementContainer ? relativeLeft + width / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.width / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.left = distanceFromCenter;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__ ._5.Scale:
        placement.left = relativeLeft / ((_parentContainer$widt = (_parentContainer3 = parentContainer) === null || _parentContainer3 === void 0 ? void 0 : _parentContainer3.width) !== null && _parentContainer$widt !== void 0 ? _parentContainer$widt : width) * 100;
        placement.right = relativeRight / ((_parentContainer$widt2 = (_parentContainer4 = parentContainer) === null || _parentContainer4 === void 0 ? void 0 : _parentContainer4.width) !== null && _parentContainer$widt2 !== void 0 ? _parentContainer$widt2 : width) * 100;
        break;
    }

    this.options.placement = placement;
    this.applyLayoutStylesToDiv();
    this.revId++;
  }

  updateData(ctx) {
    var _background$size;

    if (this.item.prepareData) {
      this.data = this.item.prepareData(ctx, this.options.config);
      this.revId++; 
    }

    const {
      background,
      border
    } = this.options;
    const css = {};

    if (background) {
      if (background.color) {
        const color = ctx.getColor(background.color);
        css.backgroundColor = color.value();
      }

      if (background.image) {
        const image = ctx.getResource(background.image);

        if (image) {
          const v = image.value();

          if (v) {
            css.backgroundImage = `url("${v}")`;

            switch ((_background$size = background.size) !== null && _background$size !== void 0 ? _background$size : app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Contain) {
              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Contain:
                css.backgroundSize = 'contain';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Cover:
                css.backgroundSize = 'cover';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Original:
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Tile:
                css.backgroundRepeat = 'repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Uy.Fill:
                css.backgroundSize = '100% 100%';
                break;
            }
          }
        }
      }
    }

    if (border && border.color && border.width) {
      const color = ctx.getColor(border.color);
      css.borderWidth = border.width;
      css.borderStyle = 'solid';
      css.borderColor = color.value(); 

      if (css.backgroundImage) {
        css.backgroundOrigin = 'padding-box';
      }
    }

    this.dataStyle = css;
    this.applyLayoutStylesToDiv();
  }

  isRoot() {
    return false;
  }


  visit(visitor) {
    visitor(this);
  }

  onChange(options) {
    if (this.item.id !== options.type) {
      var _canvasElementRegistr;

      this.item = (_canvasElementRegistr = app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ .Jk.getIfExists(options.type)) !== null && _canvasElementRegistr !== void 0 ? _canvasElementRegistr : app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__ .C;
    } 


    const oldName = this.options.name;
    const newName = options.name;
    this.revId++;
    this.options = Object.assign({}, options);
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        trav.scene.save();
        break;
      }

      trav.revId++;
      trav = trav.parent;
    }

    const scene = this.getScene();

    if (oldName !== newName && scene) {
      scene.byName.delete(oldName);
      scene.byName.set(newName, this);
    }
  }

  getSaveModel() {
    return Object.assign({}, this.options);
  }

  render() {
    const {
      item
    } = this;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ref: this.initElement,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(item.display, {
        config: this.options.config,
        data: this.data
      }, `${this.UID}/${this.revId}`)
    }, this.UID);
  }

}

 }),

 "./public/app/features/canvas/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Uy": () => ( BackgroundImageSize),
   "_5": () => ( HorizontalConstraint),
   "fJ": () => ( VerticalConstraint)
 });
let HorizontalConstraint;

(function (HorizontalConstraint) {
  HorizontalConstraint["Left"] = "left";
  HorizontalConstraint["Right"] = "right";
  HorizontalConstraint["LeftRight"] = "leftright";
  HorizontalConstraint["Center"] = "center";
  HorizontalConstraint["Scale"] = "scale";
})(HorizontalConstraint || (HorizontalConstraint = {}));

let VerticalConstraint;

(function (VerticalConstraint) {
  VerticalConstraint["Top"] = "top";
  VerticalConstraint["Bottom"] = "bottom";
  VerticalConstraint["TopBottom"] = "topbottom";
  VerticalConstraint["Center"] = "center";
  VerticalConstraint["Scale"] = "scale";
})(VerticalConstraint || (VerticalConstraint = {}));

let BackgroundImageSize;

(function (BackgroundImageSize) {
  BackgroundImageSize["Original"] = "original";
  BackgroundImageSize["Contain"] = "contain";
  BackgroundImageSize["Cover"] = "cover";
  BackgroundImageSize["Fill"] = "fill";
  BackgroundImageSize["Tile"] = "tile";
})(BackgroundImageSize || (BackgroundImageSize = {}));

 }),

 "./public/app/plugins/panel/canvas/editor/APIEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "U": () => ( APIEditor),
   "t": () => ( callApi)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _JSONFormatter, _br;









const dummyStringSettings = {
  settings: {}
};
const callApi = function (api) {
  let isTest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (api) {
    var _api$data;

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
      url: api.endpoint,
      method: 'POST',
      data: (_api$data = api.data) !== null && _api$data !== void 0 ? _api$data : {}
    }).subscribe({
      error: error => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__ .h$.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertError, ['Error has occurred: ', JSON.stringify(error)]);
          console.error(error);
        }
      },
      complete: () => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__ .h$.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Test successful']);
        }
      }
    });
  }
};
const APIEditor = props => {
  var _value$data, _value$data2;

  const {
    value,
    context,
    onChange
  } = props;
  const labelWidth = 9;
  const onEndpointChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(endpoint => {
    onChange(Object.assign({}, value, {
      endpoint
    }));
  }, [onChange, value]);
  const onDataChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    onChange(Object.assign({}, value, {
      data
    }));
  }, [onChange, value]);

  const renderJSON = data => {
    try {
      const json = JSON.parse(data);
      return _JSONFormatter || (_JSONFormatter = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, {
        json: json
      }));
    } catch (error) {
      return `Invalid JSON provided: ${error.message}`;
    }
  };

  const renderTestAPIButton = api => {
    if (api && api.endpoint) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => callApi(api, true),
        title: 'Test API',
        children: "Test API"
      });
    }

    return;
  };

  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.disableSanitizeHtml ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Endpoint',
        labelWidth: labelWidth,
        grow: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.StringValueEditor, {
          context: context,
          value: value === null || value === void 0 ? void 0 : value.endpoint,
          onChange: onEndpointChange,
          item: dummyStringSettings
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Data',
        labelWidth: labelWidth,
        grow: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.StringValueEditor, {
          context: context,
          value: (_value$data = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data !== void 0 ? _value$data : '{}',
          onChange: onDataChange,
          item: dummyStringSettings
        })
      })
    }), renderTestAPIButton(value), _br || (_br = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})), renderJSON((_value$data2 = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data2 !== void 0 ? _value$data2 : '{}')]
  }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: "Must enable disableSanitizeHtml feature flag to access"
  });
};

 })

}]);