"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["iconPanel"],{

/***/ "./public/app/features/canvas/element.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/elements/button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonItem": () => (/* binding */ buttonItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






class ButtonDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      data
    } = this.props;

    const onClick = () => {
      if (data !== null && data !== void 0 && data.api) {
        (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.callApi)(data.api);
      }
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api;

    const data = {
      text: cfg !== null && cfg !== void 0 && cfg.text ? ctx.getText(cfg.text).value() : '',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };
    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Button'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/droneFront.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneFrontItem": () => (/* binding */ droneFrontItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneFrontDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneFrontTransformStyle = `rotate(${data !== null && data !== void 0 && data.rollAngle ? data.rollAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneFront,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneFrontTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
        cx: "650",
        cy: "160",
        r: "40",
        fill: "none"
      })]
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
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
  // Called when data changes
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneFront: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneSide.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneSideItem": () => (/* binding */ droneSideItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneSideDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneSidePitchTransformStyle = `rotate(${data !== null && data !== void 0 && data.pitchAngle ? data.pitchAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneSide,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneSidePitchTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      })
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
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
  // Called when data changes
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneTop.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneTopItem": () => (/* binding */ droneTopItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _path, _path2;








const DroneTopDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const fRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.fRightRotorRPM ? 60 / Math.abs(data.fRightRotorRPM) : 0}s linear infinite`;
  const fLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.fLeftRotorRPM ? 60 / Math.abs(data.fLeftRotorRPM) : 0}s linear infinite`;
  const bRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.bRightRotorRPM ? 60 / Math.abs(data.bRightRotorRPM) : 0}s linear infinite`;
  const bLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.bLeftRotorRPM ? 60 / Math.abs(data.bLeftRotorRPM) : 0}s linear infinite`;
  const droneTopTransformStyle = `rotate(${data !== null && data !== void 0 && data.yawAngle ? data.yawAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "-43 -43 640 640",
    xmlSpace: "preserve",
    style: {
      transform: droneTopTransformStyle
    },
    children: [_path || (_path = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 137.95 127.967 C 137.14 127.157 136.189 126.58 135.178 126.218 C 138.173 121.545 139.967 116.036 140.125 110.123 L 217.64 151.862 C 214.049 157.411 211.8 163.922 211.386 170.95 L 209.694 199.712 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 Z  M 134.268 426.981 C 130.211 421.314 124.328 417.045 117.482 415.041 L 201.999 330.523 L 201.385 340.955 C 200.67 353.107 202.829 364.914 207.563 375.673 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 Z  M 324.765 373.673 L 228.527 373.673 Q 215.374 358.611 216.361 341.835 L 226.361 171.832 C 226.825 163.94 231.012 157.096 237.146 152.957 L 316.146 152.957 C 322.28 157.096 326.466 163.94 326.931 171.832 L 336.931 341.835 Q 337.918 358.611 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 Z  M 435.81 415.041 C 428.964 417.045 423.081 421.314 419.024 426.981 L 345.727 375.673 C 350.461 364.914 352.62 353.107 351.905 340.955 L 351.291 330.523 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 Z  M 343.596 199.713 L 341.904 170.951 C 341.49 163.923 339.242 157.411 335.651 151.863 L 413.167 110.124 C 413.325 116.037 415.119 121.546 418.114 126.219 C 417.103 126.581 416.152 127.158 415.342 127.968 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 Z  M 444.646 92.771 C 453.744 92.771 461.146 100.172 461.146 109.271 C 461.146 118.369 453.744 125.771 444.646 125.771 C 435.548 125.771 428.146 118.369 428.146 109.271 C 428.146 100.172 435.548 92.771 444.646 92.771 L 444.646 92.771 L 444.646 92.771 L 444.646 92.771 Z  M 108.647 92.771 C 117.745 92.771 125.147 100.172 125.147 109.271 C 125.147 118.369 117.745 125.771 108.647 125.771 C 99.549 125.771 92.147 118.369 92.147 109.271 C 92.147 100.172 99.549 92.771 108.647 92.771 L 108.647 92.771 L 108.647 92.771 Z  M 108.647 461.771 C 99.549 461.771 92.147 454.369 92.147 445.271 C 92.147 436.172 99.549 428.771 108.647 428.771 C 117.745 428.771 125.147 436.172 125.147 445.271 C 125.147 454.369 117.745 461.771 108.647 461.771 L 108.647 461.771 Z  M 92.322 136.202 C 97.086 139.1 102.675 140.771 108.647 140.771 C 114.883 140.771 120.697 138.941 125.594 135.802 C 125.956 136.813 126.534 137.764 127.343 138.573 L 207.342 218.573 C 207.711 218.942 208.109 219.264 208.528 219.54 L 203.212 309.908 C 201.794 310.182 200.44 310.869 199.342 311.967 L 95.343 415.967 C 94.954 416.356 94.62 416.779 94.335 417.224 C 93.651 417.575 92.976 417.942 92.322 418.34 Q 84.615 424.182 81.716 428.946 C 78.817 433.71 77.147 439.299 77.147 445.271 C 77.147 462.64 91.278 476.771 108.647 476.771 C 114.619 476.771 120.208 475.1 124.972 472.202 C 129.736 469.304 132.678 466.36 135.577 461.596 C 138.476 456.832 140.147 451.243 140.147 445.271 C 140.147 443.943 140.055 442.637 139.895 441.352 L 214.997 388.78 C 217.05 391.677 336.242 391.678 338.295 388.78 L 413.398 441.352 C 413.238 442.637 413.146 443.943 413.146 445.271 C 413.146 451.243 414.817 456.832 417.715 461.596 C 420.613 466.36 423.557 469.304 428.321 472.202 C 433.085 475.1 438.674 476.771 444.646 476.771 C 462.015 476.771 476.146 462.64 476.146 445.271 C 476.146 439.299 474.475 433.71 471.577 428.946 C 468.679 424.182 459.642 417.575 458.958 417.224 C 458.672 416.779 458.339 416.356 457.95 415.967 L 353.95 311.967 C 352.852 310.869 351.498 310.182 350.08 309.908 L 344.764 219.54 C 345.183 219.264 345.581 218.942 345.95 218.573 L 425.95 138.573 C 426.76 137.763 427.337 136.812 427.699 135.802 C 432.596 138.941 438.409 140.771 444.646 140.771 C 450.618 140.771 456.207 139.1 460.971 136.202 C 465.735 133.304 468.679 130.36 471.577 125.596 C 474.475 120.832 476.146 115.243 476.146 109.271 C 476.146 91.903 462.015 77.772 444.646 77.772 C 438.674 77.772 433.085 79.442 428.321 82.34 L 416.215 91.446 L 324.765 140.688 C 318.402 136.324 310.718 133.771 302.473 133.771 L 250.819 133.771 C 242.574 133.771 234.89 136.324 228.527 140.688 L 137.078 91.446 L 124.972 82.34 C 120.208 79.442 114.619 77.772 108.647 77.772 C 91.278 77.772 77.147 91.903 77.147 109.271 C 77.147 115.243 78.818 120.832 81.716 125.595 C 84.614 130.358 87.558 133.304 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 Z  M 444.646 461.771 C 435.548 461.771 428.146 454.369 428.146 445.271 C 428.146 436.172 435.548 428.771 444.646 428.771 C 453.744 428.771 461.146 436.172 461.146 445.271 C 461.146 454.369 453.744 461.771 444.646 461.771 Z "
    })), _path2 || (_path2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 259.458 334.235 L 259.458 337.211 L 254.514 337.211 L 254.514 350.795 L 250.842 350.795 L 250.842 337.211 L 245.898 337.211 L 245.898 334.235 L 259.458 334.235 Z  M 266.226 347.939 L 272.586 347.939 L 272.754 350.627 L 272.754 350.627 Q 270.498 350.867 265.074 350.867 L 265.074 350.867 L 265.074 350.867 Q 263.418 350.867 262.434 349.967 L 262.434 349.967 L 262.434 349.967 Q 261.45 349.067 261.426 347.531 L 261.426 347.531 L 261.426 337.499 L 261.426 337.499 Q 261.45 335.963 262.434 335.063 L 262.434 335.063 L 262.434 335.063 Q 263.418 334.163 265.074 334.163 L 265.074 334.163 L 265.074 334.163 Q 270.498 334.163 272.754 334.403 L 272.754 334.403 L 272.586 337.115 L 266.226 337.115 L 266.226 337.115 Q 265.626 337.115 265.362 337.403 L 265.362 337.403 L 265.362 337.403 Q 265.098 337.691 265.098 338.339 L 265.098 338.339 L 265.098 340.859 L 271.698 340.859 L 271.698 343.499 L 265.098 343.499 L 265.098 346.691 L 265.098 346.691 Q 265.098 347.363 265.362 347.651 L 265.362 347.651 L 265.362 347.651 Q 265.626 347.939 266.226 347.939 L 266.226 347.939 Z  M 275.202 333.995 L 278.73 333.995 L 278.73 346.931 L 278.73 346.931 Q 278.73 348.131 280.074 348.131 L 280.074 348.131 L 281.034 348.131 L 281.442 350.603 L 281.442 350.603 Q 280.53 351.083 278.61 351.083 L 278.61 351.083 L 278.61 351.083 Q 277.026 351.083 276.114 350.231 L 276.114 350.231 L 276.114 350.231 Q 275.202 349.379 275.202 347.819 L 275.202 347.819 L 275.202 333.995 Z  M 283.05 333.995 L 286.578 333.995 L 286.578 346.931 L 286.578 346.931 Q 286.578 348.131 287.922 348.131 L 287.922 348.131 L 288.882 348.131 L 289.29 350.603 L 289.29 350.603 Q 288.378 351.083 286.458 351.083 L 286.458 351.083 L 286.458 351.083 Q 284.874 351.083 283.962 350.231 L 283.962 350.231 L 283.962 350.231 Q 283.05 349.379 283.05 347.819 L 283.05 347.819 L 283.05 333.995 Z  M 292.086 335.759 L 292.086 335.759 L 292.086 335.759 Q 293.634 333.923 297.618 333.923 L 297.618 333.923 L 297.618 333.923 Q 301.602 333.923 303.162 335.759 L 303.162 335.759 L 303.162 335.759 Q 304.722 337.595 304.722 342.515 L 304.722 342.515 L 304.722 342.515 Q 304.722 347.435 303.162 349.271 L 303.162 349.271 L 303.162 349.271 Q 301.602 351.107 297.618 351.107 L 297.618 351.107 L 297.618 351.107 Q 293.634 351.107 292.086 349.271 L 292.086 349.271 L 292.086 349.271 Q 290.538 347.435 290.538 342.515 L 290.538 342.515 L 290.538 342.515 Q 290.538 337.595 292.086 335.759 Z  M 300.174 338.051 L 300.174 338.051 L 300.174 338.051 Q 299.49 336.875 297.618 336.875 L 297.618 336.875 L 297.618 336.875 Q 295.746 336.875 295.062 338.051 L 295.062 338.051 L 295.062 338.051 Q 294.378 339.227 294.378 342.515 L 294.378 342.515 L 294.378 342.515 Q 294.378 345.803 295.062 346.979 L 295.062 346.979 L 295.062 346.979 Q 295.746 348.155 297.618 348.155 L 297.618 348.155 L 297.618 348.155 Q 299.49 348.155 300.174 346.979 L 300.174 346.979 L 300.174 346.979 Q 300.858 345.803 300.858 342.515 L 300.858 342.515 L 300.858 342.515 Q 300.858 339.227 300.174 338.051 Z "
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propeller-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: bRightRotorAnimation
        },
        d: " M 461.563 418.77 L 463.992 416.34 Q 465.495 407.116 466.461 400.395 C 467.426 393.675 469.363 388.087 474.731 383.284 Q 533.862 341.514 538.196 338.859 C 542.529 336.203 548.345 334.299 551.492 338.29 C 554.639 342.282 553.481 346.02 549.419 350.082 L 471.147 428.354 L 461.563 418.77 Z  M 427.729 471.772 L 425.299 474.202 Q 423.797 483.426 422.831 490.146 C 421.866 496.867 419.929 502.454 414.561 507.257 Q 355.43 549.028 351.096 551.683 C 346.763 554.338 340.947 556.243 337.8 552.251 C 334.653 548.26 335.811 544.522 339.873 540.46 L 418.145 462.187 L 427.729 471.772 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: fRightRotorAnimation
        },
        d: " M 461.563 135.773 L 463.992 138.203 Q 465.495 147.426 466.461 154.147 C 467.426 160.868 469.363 166.455 474.731 171.258 Q 533.862 213.028 538.196 215.684 C 542.529 218.339 548.345 220.244 551.492 216.252 C 554.639 212.26 553.481 208.523 549.419 204.46 L 471.147 126.188 L 461.563 135.773 Z  M 427.729 82.77 L 425.299 80.34 Q 423.797 71.117 422.831 64.396 C 421.866 57.675 419.929 52.088 414.561 47.285 Q 355.43 5.515 351.096 2.859 C 346.763 0.204 340.947 -1.701 337.8 2.291 C 334.653 6.282 335.811 10.02 339.873 14.082 L 418.145 92.355 L 427.729 82.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: bLeftRotorAnimation
        },
        d: " M 125.563 471.772 L 127.993 474.202 Q 129.496 483.426 130.461 490.146 C 131.427 496.867 133.363 502.454 138.731 507.257 Q 197.863 549.028 202.196 551.683 C 206.53 554.338 212.345 556.243 215.492 552.251 C 218.639 548.26 217.482 544.522 213.419 540.46 L 135.148 462.187 L 125.563 471.772 Z  M 91.73 418.77 L 89.3 416.34 Q 87.797 407.116 86.832 400.395 C 85.866 393.675 83.93 388.087 78.562 383.284 Q 19.431 341.514 15.097 338.859 C 10.763 336.203 4.948 334.299 1.801 338.29 C -1.346 342.282 -0.189 346.02 3.874 350.082 L 82.146 428.354 L 91.73 418.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
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
  // Called when data changes
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fRightRotorRPM',
      path: 'config.fRightRotorRPM',
      name: 'Front Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fLeftRotorRPM',
      path: 'config.fLeftRotorRPM',
      name: 'Front Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bRightRotorRPM',
      path: 'config.bRightRotorRPM',
      name: 'Back Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bLeftRotorRPM',
      path: 'config.bLeftRotorRPM',
      name: 'Back Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  propeller: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
  propellerCW: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    animation-direction: normal;
  `,
  propellerCCW: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    animation-direction: reverse;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconDisplay": () => (/* binding */ IconDisplay),
/* harmony export */   "iconItem": () => (/* binding */ iconItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








// When a stoke is defined, we want the path to be in page units
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
      (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.callApi)(data.api);
    }
  };

  const svgStyle = {
    fill: data === null || data === void 0 ? void 0 : data.fill,
    stroke: data === null || data === void 0 ? void 0 : data.strokeColor,
    strokeWidth: data === null || data === void 0 ? void 0 : data.stroke
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/question-circle.svg'
      },
      fill: {
        fixed: '#FFF899'
      }
    }
  }),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api, _cfg$stroke;

    let path = undefined;

    if (cfg.path) {
      path = ctx.getResource(cfg.path).value();
    }

    if (!path || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(path)) {
      path = (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getPublicOrAbsoluteUrl)('img/icons/unicons/question-circle.svg');
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
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Icon'];
    builder.addCustomEditor({
      category,
      id: 'iconSelector',
      path: 'config.path',
      name: 'SVG Path',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionEditor,
      settings: {
        resourceType: 'icon'
      }
    }).addCustomEditor({
      category,
      id: 'config.fill',
      path: 'config.fill',
      name: 'Fill color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
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
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/notFound.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFoundItem": () => (/* binding */ notFoundItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





class NotFoundDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      config
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        children: "NOT FOUND:"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
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

/***/ }),

/***/ "./public/app/features/canvas/elements/textBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Align": () => (/* binding */ Align),
/* harmony export */   "VAlign": () => (/* binding */ VAlign),
/* harmony export */   "textBoxItem": () => (/* binding */ textBoxItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







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

class TextBoxDisplay extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  render() {
    const {
      data
    } = this.props;
    const styles = getStyles(app_core_config__WEBPACK_IMPORTED_MODULE_3__.config.theme2, data);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.span,
        children: data === null || data === void 0 ? void 0 : data.text
      })
    });
  }

}

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)((theme, data) => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
  `,
  span: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
  // Called when data changes
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
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Text box'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'config.color',
      path: 'config.color',
      name: 'Text color',
      editor: app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
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

/***/ }),

/***/ "./public/app/features/canvas/elements/windTurbine.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "windTurbineItem": () => (/* binding */ windTurbineItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _symbol, _g, _use, _use2, _use3;








const WindTurbineDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const windTurbineAnimation = `spin ${data !== null && data !== void 0 && data.rpm ? 60 / Math.abs(data.rpm) : 0}s linear infinite`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    viewBox: "0 0 189.326 283.989",
    preserveAspectRatio: "xMidYMid meet",
    children: [_symbol || (_symbol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("symbol", {
      id: "blade",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#e6e6e6",
        id: "blade-front",
        d: "M14.6491879,1.85011601 C14.2684455,-0.0535962877 10.7150812,-0.815081206 9.06473318,3.37308585 L0.434338747,70.7658933 L8.93805104,91.9607889 L15.4106729,90.437819 L17.5684455,78.3807425 L14.5218097,1.97679814 L14.6491879,1.85011601 Z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#d0d6d7",
        id: "blade-side",
        d: "M11.0951276,0.581206497 C10.3336427,0.961948956 9.57215777,1.85011601 8.93735499,3.24640371 L0.306960557,70.6392111 L8.81067285,91.8341067 L3.35359629,70.0044084 L11.0951276,0.581206497 Z"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        id: "structure",
        transform: "translate(58.123, 82.664)",
        fillRule: "nonzero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polygon", {
          id: "tower",
          fill: "#e6e6e6",
          points: "33.111,10.984 39.965,10.984 44.28,196.176 28.796,196.176"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "yaw",
          fill: "rgba(0,0,0,0.25)",
          d: "M40.3454756,23.2948956 L40.7262181,34.8445476 C38.8225058,35.0986079 35.7765661,35.0986079 32.349884,34.337123 L32.7306265,23.2955916 L40.3454756,23.2955916 L40.3454756,23.2948956 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "base",
          fill: "#d0d6d7",
          transform: "translate(0 42)",
          d: "M26.3846868,150.591647 L46.5640371,150.591647 C48.8484919,150.591647 50.7522042,152.49536 50.7522042,154.779814 L50.7522042,158.967981 L22.0691415,158.967981 L22.0691415,154.779814 C22.0691415,152.49536 23.9728538,150.591647 26.2573086,150.591647 L26.3846868,150.591647 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "nacelle",
          fill: "#e6e6e6",
          cx: "36.54",
          cy: "12",
          r: "11.93"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "gearbox",
          fill: "none",
          stroke: "#d0d6d7",
          strokeWidth: "2.75",
          cx: "36.538",
          cy: "11.999",
          r: "5.8"
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        className: styles.blade,
        style: {
          animation: windTurbineAnimation
        },
        children: [_use || (_use = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade1",
          href: "#blade",
          x: "83.24",
          y: "0"
        })), _use2 || (_use2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade2",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(120 94.663 94.663)"
        })), _use3 || (_use3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
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
  // Called when data changes
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  blade: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

/***/ }),

/***/ "./public/app/features/canvas/frame.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize),
/* harmony export */   "CanvasFrameOptions": () => (/* reexport safe */ _frame__WEBPACK_IMPORTED_MODULE_2__.CanvasFrameOptions),
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "HorizontalConstraint": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.HorizontalConstraint),
/* harmony export */   "VerticalConstraint": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.VerticalConstraint),
/* harmony export */   "canvasElementRegistry": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/types.ts");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/element.ts");
/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/frame.ts");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/registry.ts");





/***/ }),

/***/ "./public/app/features/canvas/registry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* binding */ DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "canvasElementRegistry": () => (/* binding */ canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/elements/button.tsx");
/* harmony import */ var _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/droneFront.tsx");
/* harmony import */ var _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/elements/droneSide.tsx");
/* harmony import */ var _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/canvas/elements/droneTop.tsx");
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _elements_textBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/canvas/elements/textBox.tsx");
/* harmony import */ var _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/canvas/elements/windTurbine.tsx");








const DEFAULT_CANVAS_ELEMENT_CONFIG = Object.assign({}, _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.getNewOptions(), {
  type: _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.id,
  name: `Element 1`
});
const canvasElementRegistry = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(() => [_elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem, // default for now
_elements_textBox__WEBPACK_IMPORTED_MODULE_6__.textBoxItem, _elements_button__WEBPACK_IMPORTED_MODULE_1__.buttonItem, _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__.droneTopItem, _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__.droneFrontItem, _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__.droneSideItem, _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__.windTurbineItem]);

/***/ }),

/***/ "./public/app/features/canvas/runtime/element.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementState": () => (/* binding */ ElementState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/notFound.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let counter = 0;
class ElementState {
  // UID necessary for moveable to work (for now)
  // Filled in by ref
  // Calculated
  // depends on the type
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
      const top = vertical === _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top || vertical === _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom;
      const bottom = vertical === _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Bottom || vertical === _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom;
      const left = horizontal === _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left || horizontal === _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight;
      const right = horizontal === _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Right || horizontal === _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight;
      const style = event.target.style;
      const deltaX = event.delta[0];
      const deltaY = event.delta[1];
      const dirLR = event.direction[0];
      const dirTB = event.direction[1];

      if (dirLR === 1) {
        // RIGHT
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
        // LEFT
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
        // TOP
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
        // BOTTOM
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
      vertical: _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top,
      horizontal: _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left
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
  /** Use the configured options to update CSS style properties directly on the wrapper div **/


  applyLayoutStylesToDiv() {
    var _this$options$placeme, _placement$top, _placement$height, _placement$bottom, _placement$height2, _placement$top2, _placement$bottom2, _placement$top3, _placement$height3, _placement$top4, _placement$bottom3, _placement$left, _placement$width, _placement$right, _placement$width2, _placement$left2, _placement$right2, _placement$left3, _placement$width3, _placement$left4, _placement$right3;

    if (this.isRoot()) {
      // Root supersedes layout engine and is always 100% width + height of panel
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
      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top:
        placement.top = (_placement$top = placement.top) !== null && _placement$top !== void 0 ? _placement$top : 0;
        placement.height = (_placement$height = placement.height) !== null && _placement$height !== void 0 ? _placement$height : 100;
        style.top = `${placement.top}px`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Bottom:
        placement.bottom = (_placement$bottom = placement.bottom) !== null && _placement$bottom !== void 0 ? _placement$bottom : 0;
        placement.height = (_placement$height2 = placement.height) !== null && _placement$height2 !== void 0 ? _placement$height2 : 100;
        style.bottom = `${placement.bottom}px`;
        style.height = `${placement.height}px`;
        delete placement.top;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom:
        placement.top = (_placement$top2 = placement.top) !== null && _placement$top2 !== void 0 ? _placement$top2 : 0;
        placement.bottom = (_placement$bottom2 = placement.bottom) !== null && _placement$bottom2 !== void 0 ? _placement$bottom2 : 0;
        style.top = `${placement.top}px`;
        style.bottom = `${placement.bottom}px`;
        delete placement.height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Center:
        placement.top = (_placement$top3 = placement.top) !== null && _placement$top3 !== void 0 ? _placement$top3 : 0;
        placement.height = (_placement$height3 = placement.height) !== null && _placement$height3 !== void 0 ? _placement$height3 : 100;
        translate[1] = '-50%';
        style.top = `calc(50% - ${placement.top}px)`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Scale:
        placement.top = (_placement$top4 = placement.top) !== null && _placement$top4 !== void 0 ? _placement$top4 : 0;
        placement.bottom = (_placement$bottom3 = placement.bottom) !== null && _placement$bottom3 !== void 0 ? _placement$bottom3 : 0;
        style.top = `${placement.top}%`;
        style.bottom = `${placement.bottom}%`;
        delete placement.height;
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left:
        placement.left = (_placement$left = placement.left) !== null && _placement$left !== void 0 ? _placement$left : 0;
        placement.width = (_placement$width = placement.width) !== null && _placement$width !== void 0 ? _placement$width : 100;
        style.left = `${placement.left}px`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Right:
        placement.right = (_placement$right = placement.right) !== null && _placement$right !== void 0 ? _placement$right : 0;
        placement.width = (_placement$width2 = placement.width) !== null && _placement$width2 !== void 0 ? _placement$width2 : 100;
        style.right = `${placement.right}px`;
        style.width = `${placement.width}px`;
        delete placement.left;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight:
        placement.left = (_placement$left2 = placement.left) !== null && _placement$left2 !== void 0 ? _placement$left2 : 0;
        placement.right = (_placement$right2 = placement.right) !== null && _placement$right2 !== void 0 ? _placement$right2 : 0;
        style.left = `${placement.left}px`;
        style.right = `${placement.right}px`;
        delete placement.width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Center:
        placement.left = (_placement$left3 = placement.left) !== null && _placement$left3 !== void 0 ? _placement$left3 : 0;
        placement.width = (_placement$width3 = placement.width) !== null && _placement$width3 !== void 0 ? _placement$width3 : 100;
        translate[0] = '-50%';
        style.left = `calc(50% - ${placement.left}px)`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Scale:
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
      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top:
        placement.top = relativeTop;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Bottom:
        placement.bottom = relativeBottom;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom:
        placement.top = relativeTop;
        placement.bottom = relativeBottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Center:
        const elementCenter = elementContainer ? relativeTop + height / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.height / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.top = distanceFromCenter;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Scale:
        placement.top = relativeTop / ((_parentContainer$heig = (_parentContainer = parentContainer) === null || _parentContainer === void 0 ? void 0 : _parentContainer.height) !== null && _parentContainer$heig !== void 0 ? _parentContainer$heig : height) * 100;
        placement.bottom = relativeBottom / ((_parentContainer$heig2 = (_parentContainer2 = parentContainer) === null || _parentContainer2 === void 0 ? void 0 : _parentContainer2.height) !== null && _parentContainer$heig2 !== void 0 ? _parentContainer$heig2 : height) * 100;
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left:
        placement.left = relativeLeft;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Right:
        placement.right = relativeRight;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight:
        placement.left = relativeLeft;
        placement.right = relativeRight;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Center:
        const elementCenter = elementContainer ? relativeLeft + width / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.width / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.left = distanceFromCenter;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Scale:
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
      this.revId++; // rerender
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

            switch ((_background$size = background.size) !== null && _background$size !== void 0 ? _background$size : app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain) {
              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain:
                css.backgroundSize = 'contain';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Cover:
                css.backgroundSize = 'cover';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Original:
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Tile:
                css.backgroundRepeat = 'repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Fill:
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
      css.borderColor = color.value(); // Move the image to inside the border

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
  /** Recursively visit all nodes */


  visit(visitor) {
    visitor(this);
  }

  onChange(options) {
    if (this.item.id !== options.type) {
      var _canvasElementRegistr;

      this.item = (_canvasElementRegistr = app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.canvasElementRegistry.getIfExists(options.type)) !== null && _canvasElementRegistr !== void 0 ? _canvasElementRegistr : app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__.notFoundItem;
    } // rename handling


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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ref: this.initElement,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(item.display, {
        config: this.options.config,
        data: this.data
      }, `${this.UID}/${this.revId}`)
    }, this.UID);
  }

}

/***/ }),

/***/ "./public/app/features/canvas/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* binding */ BackgroundImageSize),
/* harmony export */   "HorizontalConstraint": () => (/* binding */ HorizontalConstraint),
/* harmony export */   "VerticalConstraint": () => (/* binding */ VerticalConstraint)
/* harmony export */ });
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

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/APIEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIEditor": () => (/* binding */ APIEditor),
/* harmony export */   "callApi": () => (/* binding */ callApi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _JSONFormatter, _br;









const dummyStringSettings = {
  settings: {}
};
const callApi = (api, isTest = false) => {
  if (api) {
    var _api$data;

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
      url: api.endpoint,
      method: 'POST',
      data: (_api$data = api.data) !== null && _api$data !== void 0 ? _api$data : {}
    }).subscribe({
      error: error => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertError, ['Error has occurred: ', JSON.stringify(error)]);
          console.error(error);
        }
      },
      complete: () => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Test successful']);
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
      return _JSONFormatter || (_JSONFormatter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, {
        json: json
      }));
    } catch (error) {
      return `Invalid JSON provided: ${error.message}`;
    }
  };

  const renderTestAPIButton = api => {
    if (api && api.endpoint) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => callApi(api, true),
        title: 'Test API',
        children: "Test API"
      });
    }

    return;
  };

  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.disableSanitizeHtml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Endpoint',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.StringValueEditor, {
          context: context,
          value: value === null || value === void 0 ? void 0 : value.endpoint,
          onChange: onEndpointChange,
          item: dummyStringSettings
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Data',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.StringValueEditor, {
          context: context,
          value: (_value$data = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data !== void 0 ? _value$data : '{}',
          onChange: onDataChange,
          item: dummyStringSettings
        })
      })
    }), renderTestAPIButton(value), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})), renderJSON((_value$data2 = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data2 !== void 0 ? _value$data2 : '{}')]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: "Must enable disableSanitizeHtml feature flag to access"
  });
};

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionBuilder": () => (/* binding */ optionBuilder)
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
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
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ResourceDimensionEditor,
      settings: {
        resourceType: 'image'
      }
    }).addRadio({
      category,
      path: 'background.size',
      name: 'Image size',
      settings: {
        options: [{
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Original,
          label: 'Original'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Contain,
          label: 'Contain'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover,
          label: 'Cover'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Fill,
          label: 'Fill'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Tile,
          label: 'Tile'
        }]
      },
      defaultValue: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover
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
        editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
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

/***/ "./public/app/plugins/panel/icon/IconPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconPanel": () => (/* binding */ IconPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IconPanel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "initElement", props => {
      this.element = new app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_3__.ElementState(app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__.iconItem, props.options.root);
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
        vertical: app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.VerticalConstraint.Top,
        horizontal: app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.HorizontalConstraint.Left
      };
      this.element.options.placement = {
        left: 0,
        top: 0,
        width,
        height
      };
    });

    _defineProperty(this, "dims", {
      getColor: color => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getColorDimensionFromData)(this.props.data, color),
      getScale: scale => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getScaleDimensionFromData)(this.props.data, scale),
      getScalar: scalar => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getScalarDimensionFromData)(this.props.data, scalar),
      getText: text => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getTextDimensionFromData)(this.props.data, text),
      getResource: res => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getResourceDimensionFromData)(this.props.data, res)
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
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

/***/ }),

/***/ "./public/app/plugins/panel/icon/models.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPanelOptions": () => (/* binding */ defaultPanelOptions)
/* harmony export */ });
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/dimensions/index.ts");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOTE: This file will be auto generated from models.cue
// It is currenty hand written but will serve as the target for cuetsy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const defaultPanelOptions = {
  root: {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/analysis.svg'
      },
      fill: {
        fixed: 'green'
      }
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/options.ts");
/* harmony import */ var _IconPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/icon/IconPanel.tsx");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/icon/models.gen.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_IconPanel__WEBPACK_IMPORTED_MODULE_3__.IconPanel).setNoPadding() // extend to panel edges
.useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldConfigProperty.Mappings]: {
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
      app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_1__.iconItem.registerOptionsUI(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__.optionBuilder.addBackground(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__.optionBuilder.addBorder(builder, ctx);
    },
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_4__.defaultPanelOptions.root
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxPQUFPLENBQUNpUSxnQkFBUixDQUEyRDtBQUN6RGhRLElBQUFBLFFBQVEsRUFBRSxDQUFDLE1BQUQsQ0FEK0M7QUFFekRFLElBQUFBLElBQUksRUFBRSxNQUZtRDtBQUl6RDtBQUNBK1AsSUFBQUEsS0FBSyxFQUFFLENBQUNsUSxPQUFELEVBQVVOLEdBQVYsS0FBa0I7QUFDdkI0RCxNQUFBQSx5RkFBQSxDQUE0QnRELE9BQTVCLEVBQXFDTixHQUFyQztBQUVBdU8sTUFBQUEsK0VBQUEsQ0FBNEJqTyxPQUE1QixFQUFxQ04sR0FBckM7QUFDQXVPLE1BQUFBLDJFQUFBLENBQXdCak8sT0FBeEIsRUFBaUNOLEdBQWpDO0FBQ0QsS0FWd0Q7QUFZekR5RSxJQUFBQSxZQUFZLEVBQUVvTCxpRUFBd0JYO0FBWm1CLEdBQTNEO0FBY0QsQ0ExQm1CLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvZHJvbmVGcm9udC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2Ryb25lU2lkZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2Ryb25lVG9wLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL25vdEZvdW5kLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvdGV4dEJveC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL3dpbmRUdXJiaW5lLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9ydW50aW1lL2VsZW1lbnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2NhbnZhcy9lZGl0b3IvQVBJRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2NhbnZhcy9lZGl0b3Ivb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vSWNvblBhbmVsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vbW9kZWxzLmdlbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL2ljb24vbW9kdWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2NvbnRleHQnO1xuaW1wb3J0IHsgVGV4dERpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMvVGV4dERpbWVuc2lvbkVkaXRvcic7XG5pbXBvcnQgeyBUZXh0RGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvdHlwZXMnO1xuaW1wb3J0IHsgQVBJRWRpdG9yLCBBUElFZGl0b3JDb25maWcsIGNhbGxBcGkgfSBmcm9tICdhcHAvcGx1Z2lucy9wYW5lbC9jYW52YXMvZWRpdG9yL0FQSUVkaXRvcic7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuaW50ZXJmYWNlIEJ1dHRvbkRhdGEge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBhcGk/OiBBUElFZGl0b3JDb25maWc7XG59XG5cbmludGVyZmFjZSBCdXR0b25Db25maWcge1xuICB0ZXh0PzogVGV4dERpbWVuc2lvbkNvbmZpZztcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG5jbGFzcyBCdXR0b25EaXNwbGF5IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxDYW52YXNFbGVtZW50UHJvcHM8QnV0dG9uQ29uZmlnLCBCdXR0b25EYXRhPj4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoZGF0YT8uYXBpKSB7XG4gICAgICAgIGNhbGxBcGkoZGF0YS5hcGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIHtkYXRhPy50ZXh0fVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYnV0dG9uSXRlbTogQ2FudmFzRWxlbWVudEl0ZW08QnV0dG9uQ29uZmlnLCBCdXR0b25EYXRhPiA9IHtcbiAgaWQ6ICdidXR0b24nLFxuICBuYW1lOiAnQnV0dG9uJyxcbiAgZGVzY3JpcHRpb246ICdCdXR0b24nLFxuXG4gIGRpc3BsYXk6IEJ1dHRvbkRpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogNTAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IEJ1dHRvbkNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IEJ1dHRvbkRhdGEgPSB7XG4gICAgICB0ZXh0OiBjZmc/LnRleHQgPyBjdHguZ2V0VGV4dChjZmcudGV4dCkudmFsdWUoKSA6ICcnLFxuICAgICAgYXBpOiBjZmc/LmFwaSA/PyB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIC8vIEhlYXRtYXAgb3ZlcmxheSBvcHRpb25zXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydCdXR0b24nXTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAndGV4dFNlbGVjdG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy50ZXh0JyxcbiAgICAgICAgbmFtZTogJ1RleHQnLFxuICAgICAgICBlZGl0b3I6IFRleHREaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2FwaVNlbGVjdG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5hcGknLFxuICAgICAgICBuYW1lOiAnQVBJJyxcbiAgICAgICAgZWRpdG9yOiBBUElFZGl0b3IsXG4gICAgICB9KTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCwgU2NhbGFyRGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgU2NhbGFyRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuaW50ZXJmYWNlIERyb25lRnJvbnREYXRhIHtcbiAgcm9sbEFuZ2xlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRHJvbmVGcm9udENvbmZpZyB7XG4gIHJvbGxBbmdsZT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgRHJvbmVGcm9udERpc3BsYXk6IEZDPENhbnZhc0VsZW1lbnRQcm9wczxEcm9uZUZyb250Q29uZmlnLCBEcm9uZUZyb250RGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRyb25lRnJvbnRUcmFuc2Zvcm1TdHlsZSA9IGByb3RhdGUoJHtkYXRhPy5yb2xsQW5nbGUgPyBkYXRhLnJvbGxBbmdsZSA6IDB9ZGVnKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9uZUZyb250fVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEzMDAgMjkwXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogZHJvbmVGcm9udFRyYW5zZm9ybVN0eWxlIH19XG4gICAgPlxuICAgICAgPGcgY2xhc3NOYW1lPVwiYXJtc1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIyOHB4XCI+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI1MTBcIiB4Mj1cIjMyMFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxOTBcIiB5Mj1cIjIxMFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNzkwXCIgeDI9XCI5ODBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImJvZHlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gNTEwIDEzMCBDIDUxMCAxMjQgNTEwIDExMCA1MTAgMTAwIEMgNTEwIDkwIDUzMCA3MSA1NDAgNzAgQyA2NDAgNjEgNjcwIDYwIDc2MCA3MCBDIDc3MCA3MSA3OTAgOTAgNzkwIDEwMCBRIDc5MCAxMjAgNzkwIDEzMCBMIDc5MCAxMzAgUSA3OTAgMTc3IDc5MCAxOTYgQyA3OTAgMjA3IDc3MCAyMjUgNzYwIDIyNiBDIDY3MCAyMzYgNjQwIDIzNiA1NDAgMjI2IEMgNTMwIDIyNiA1MTAgMjA2IDUxMCAxOTYgUSA1MTAgMTc3IDUxMCAxMzAgUSA1MTAgMTMzIDUxMCAxMzAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiNjUwXCIgY3k9XCIxNjBcIiByPVwiNDBcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJtb3RvcnNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG9yXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDMyMCA2MCBMIDI1MCA2MCBMIDI1MCAyMzAgTCAyNjAgMjkwIEwgMzEwIDI5MCBMIDMyMCAyMzAgTCAzMjAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG9yXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDEwNTAgNjAgTCA5ODAgNjAgTCA5ODAgMjMwIEwgOTkwIDI5MCBMIDEwNDAgMjkwIEwgMTA1MCAyMzAgTCAxMDUwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cInByb3BlbGxlcnNcIiBmaWxsPVwiYmxhY2tcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9wXCJcbiAgICAgICAgICBkPVwiIE0gMjcwIDYwIEwgMzAwIDYwIEwgMzAwIDIwIFEgMzExIDMwIDMzMCAzMCBRIDM0OSAzMCA1NzAgMTAgTCAzMDAgMTAgUSAzMDAgMCAyOTAgMCBDIDI4NiAwIDI4NCAwIDI4MCAwIFEgMjcwIDAgMjcwIDEwIEwgMCAxMCBRIDIyMCAzMCAyNDAgMzAgUSAyNjAgMzAgMjcwIDIwIEwgMjcwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9wXCJcbiAgICAgICAgICBkPVwiIE0gMTAwMCA2MCBMIDEwMzAgNjAgTCAxMDMwIDIwIFEgMTA0MSAzMCAxMDYwIDMwIFEgMTA3OSAzMCAxMzAwIDEwIEwgMTAzMCAxMCBRIDEwMzAgMCAxMDIwIDAgQyAxMDE2IDAgMTAxNCAwIDEwMTAgMCBRIDEwMDAgMCAxMDAwIDEwIEwgNzMwIDEwIFEgOTUwIDMwIDk3MCAzMCBRIDk5MCAzMCAxMDAwIDIwIEwgMTAwMCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJvbmVGcm9udEl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICdkcm9uZUZyb250JyxcbiAgbmFtZTogJ0Ryb25lIEZyb250JyxcbiAgZGVzY3JpcHRpb246ICdEcm9uZSBmcm9udCcsXG5cbiAgZGlzcGxheTogRHJvbmVGcm9udERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBEcm9uZUZyb250Q29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogRHJvbmVGcm9udERhdGEgPSB7XG4gICAgICByb2xsQW5nbGU6IGNmZz8ucm9sbEFuZ2xlID8gY3R4LmdldFNjYWxhcihjZmcucm9sbEFuZ2xlKS52YWx1ZSgpIDogMCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0Ryb25lIEZyb250J107XG4gICAgYnVpbGRlci5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZDogJ3JvbGxBbmdsZScsXG4gICAgICBwYXRoOiAnY29uZmlnLnJvbGxBbmdsZScsXG4gICAgICBuYW1lOiAnUm9sbCBBbmdsZScsXG4gICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICB9KTtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZHJvbmVGcm9udDogY3NzYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCwgU2NhbGFyRGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgU2NhbGFyRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuaW50ZXJmYWNlIERyb25lU2lkZURhdGEge1xuICBwaXRjaEFuZ2xlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRHJvbmVTaWRlQ29uZmlnIHtcbiAgcGl0Y2hBbmdsZT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgRHJvbmVTaWRlRGlzcGxheTogRkM8Q2FudmFzRWxlbWVudFByb3BzPERyb25lU2lkZUNvbmZpZywgRHJvbmVTaWRlRGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRyb25lU2lkZVBpdGNoVHJhbnNmb3JtU3R5bGUgPSBgcm90YXRlKCR7ZGF0YT8ucGl0Y2hBbmdsZSA/IGRhdGEucGl0Y2hBbmdsZSA6IDB9ZGVnKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9uZVNpZGV9XG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTMwMCAyOTBcIlxuICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBkcm9uZVNpZGVQaXRjaFRyYW5zZm9ybVN0eWxlIH19XG4gICAgPlxuICAgICAgPGcgY2xhc3NOYW1lPVwiYXJtc1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIyOHB4XCI+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI1MTBcIiB4Mj1cIjMyMFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxOTBcIiB5Mj1cIjIxMFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNzkwXCIgeDI9XCI5ODBcIiB5MT1cIjEwMFwiIHkyPVwiMTUwXCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImJvZHlcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gNTEwIDEzMCBDIDUxMCAxMjQgNTEwIDExMCA1MTAgMTAwIEMgNTEwIDkwIDUzMCA3MSA1NDAgNzAgQyA2NDAgNjEgNjcwIDYwIDc2MCA3MCBDIDc3MCA3MSA3OTAgOTAgNzkwIDEwMCBRIDc5MCAxMjAgNzkwIDEzMCBMIDc5MCAxMzAgUSA3OTAgMTc3IDc5MCAxOTYgQyA3OTAgMjA3IDc3MCAyMjUgNzYwIDIyNiBDIDY3MCAyMzYgNjQwIDIzNiA1NDAgMjI2IEMgNTMwIDIyNiA1MTAgMjA2IDUxMCAxOTYgUSA1MTAgMTc3IDUxMCAxMzAgUSA1MTAgMTMzIDUxMCAxMzAgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGcgY2xhc3NOYW1lPVwibW90b3JzXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjI4cHhcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvclwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIGQ9XCIgTSAzMjAgNjAgTCAyNTAgNjAgTCAyNTAgMjMwIEwgMjYwIDI5MCBMIDMxMCAyOTAgTCAzMjAgMjMwIEwgMzIwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvclwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIGQ9XCIgTSAxMDUwIDYwIEwgOTgwIDYwIEwgOTgwIDIzMCBMIDk5MCAyOTAgTCAxMDQwIDI5MCBMIDEwNTAgMjMwIEwgMTA1MCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJwcm9wZWxsZXJzXCIgZmlsbD1cImJsYWNrXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvcFwiXG4gICAgICAgICAgZD1cIiBNIDI3MCA2MCBMIDMwMCA2MCBMIDMwMCAyMCBRIDMxMSAzMCAzMzAgMzAgUSAzNDkgMzAgNTcwIDEwIEwgMzAwIDEwIFEgMzAwIDAgMjkwIDAgQyAyODYgMCAyODQgMCAyODAgMCBRIDI3MCAwIDI3MCAxMCBMIDAgMTAgUSAyMjAgMzAgMjQwIDMwIFEgMjYwIDMwIDI3MCAyMCBMIDI3MCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvcFwiXG4gICAgICAgICAgZD1cIiBNIDEwMDAgNjAgTCAxMDMwIDYwIEwgMTAzMCAyMCBRIDEwNDEgMzAgMTA2MCAzMCBRIDEwNzkgMzAgMTMwMCAxMCBMIDEwMzAgMTAgUSAxMDMwIDAgMTAyMCAwIEMgMTAxNiAwIDEwMTQgMCAxMDEwIDAgUSAxMDAwIDAgMTAwMCAxMCBMIDczMCAxMCBRIDk1MCAzMCA5NzAgMzAgUSA5OTAgMzAgMTAwMCAyMCBMIDEwMDAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyb25lU2lkZUl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICdkcm9uZVNpZGUnLFxuICBuYW1lOiAnRHJvbmUgU2lkZScsXG4gIGRlc2NyaXB0aW9uOiAnRHJvbmUgU2lkZScsXG5cbiAgZGlzcGxheTogRHJvbmVTaWRlRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IERyb25lU2lkZUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IERyb25lU2lkZURhdGEgPSB7XG4gICAgICBwaXRjaEFuZ2xlOiBjZmc/LnBpdGNoQW5nbGUgPyBjdHguZ2V0U2NhbGFyKGNmZy5waXRjaEFuZ2xlKS52YWx1ZSgpIDogMCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgcmVnaXN0ZXJPcHRpb25zVUk6IChidWlsZGVyKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0Ryb25lIFNpZGUnXTtcbiAgICBidWlsZGVyLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkOiAncGl0Y2hBbmdsZScsXG4gICAgICBwYXRoOiAnY29uZmlnLnBpdGNoQW5nbGUnLFxuICAgICAgbmFtZTogJ1BpdGNoIEFuZ2xlJyxcbiAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgIH0pO1xuICB9LFxufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBkcm9uZVNpZGU6IGNzc2BcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFNjYWxhckRpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmludGVyZmFjZSBEcm9uZVRvcERhdGEge1xuICBiUmlnaHRSb3RvclJQTT86IG51bWJlcjtcbiAgYkxlZnRSb3RvclJQTT86IG51bWJlcjtcbiAgZlJpZ2h0Um90b3JSUE0/OiBudW1iZXI7XG4gIGZMZWZ0Um90b3JSUE0/OiBudW1iZXI7XG4gIHlhd0FuZ2xlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRHJvbmVUb3BDb25maWcge1xuICBiUmlnaHRSb3RvclJQTT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbiAgYkxlZnRSb3RvclJQTT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbiAgZlJpZ2h0Um90b3JSUE0/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG4gIGZMZWZ0Um90b3JSUE0/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG4gIHlhd0FuZ2xlPzogU2NhbGFyRGltZW5zaW9uQ29uZmlnO1xufVxuXG5jb25zdCBEcm9uZVRvcERpc3BsYXk6IEZDPENhbnZhc0VsZW1lbnRQcm9wczxEcm9uZVRvcENvbmZpZywgRHJvbmVUb3BEYXRhPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZlJpZ2h0Um90b3JBbmltYXRpb24gPSBgc3BpbiAke2RhdGE/LmZSaWdodFJvdG9yUlBNID8gNjAgLyBNYXRoLmFicyhkYXRhLmZSaWdodFJvdG9yUlBNKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIGNvbnN0IGZMZWZ0Um90b3JBbmltYXRpb24gPSBgc3BpbiAke2RhdGE/LmZMZWZ0Um90b3JSUE0gPyA2MCAvIE1hdGguYWJzKGRhdGEuZkxlZnRSb3RvclJQTSkgOiAwfXMgbGluZWFyIGluZmluaXRlYDtcblxuICBjb25zdCBiUmlnaHRSb3RvckFuaW1hdGlvbiA9IGBzcGluICR7ZGF0YT8uYlJpZ2h0Um90b3JSUE0gPyA2MCAvIE1hdGguYWJzKGRhdGEuYlJpZ2h0Um90b3JSUE0pIDogMH1zIGxpbmVhciBpbmZpbml0ZWA7XG5cbiAgY29uc3QgYkxlZnRSb3RvckFuaW1hdGlvbiA9IGBzcGluICR7ZGF0YT8uYkxlZnRSb3RvclJQTSA/IDYwIC8gTWF0aC5hYnMoZGF0YS5iTGVmdFJvdG9yUlBNKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIGNvbnN0IGRyb25lVG9wVHJhbnNmb3JtU3R5bGUgPSBgcm90YXRlKCR7ZGF0YT8ueWF3QW5nbGUgPyBkYXRhLnlhd0FuZ2xlIDogMH1kZWcpYDtcblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgdmlld0JveD1cIi00MyAtNDMgNjQwIDY0MFwiXG4gICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogZHJvbmVUb3BUcmFuc2Zvcm1TdHlsZSB9fVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCIgTSAxMzcuOTUgMTI3Ljk2NyBDIDEzNy4xNCAxMjcuMTU3IDEzNi4xODkgMTI2LjU4IDEzNS4xNzggMTI2LjIxOCBDIDEzOC4xNzMgMTIxLjU0NSAxMzkuOTY3IDExNi4wMzYgMTQwLjEyNSAxMTAuMTIzIEwgMjE3LjY0IDE1MS44NjIgQyAyMTQuMDQ5IDE1Ny40MTEgMjExLjggMTYzLjkyMiAyMTEuMzg2IDE3MC45NSBMIDIwOS42OTQgMTk5LjcxMiBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBaICBNIDEzNC4yNjggNDI2Ljk4MSBDIDEzMC4yMTEgNDIxLjMxNCAxMjQuMzI4IDQxNy4wNDUgMTE3LjQ4MiA0MTUuMDQxIEwgMjAxLjk5OSAzMzAuNTIzIEwgMjAxLjM4NSAzNDAuOTU1IEMgMjAwLjY3IDM1My4xMDcgMjAyLjgyOSAzNjQuOTE0IDIwNy41NjMgMzc1LjY3MyBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBMIDEzNC4yNjggNDI2Ljk4MSBaICBNIDMyNC43NjUgMzczLjY3MyBMIDIyOC41MjcgMzczLjY3MyBRIDIxNS4zNzQgMzU4LjYxMSAyMTYuMzYxIDM0MS44MzUgTCAyMjYuMzYxIDE3MS44MzIgQyAyMjYuODI1IDE2My45NCAyMzEuMDEyIDE1Ny4wOTYgMjM3LjE0NiAxNTIuOTU3IEwgMzE2LjE0NiAxNTIuOTU3IEMgMzIyLjI4IDE1Ny4wOTYgMzI2LjQ2NiAxNjMuOTQgMzI2LjkzMSAxNzEuODMyIEwgMzM2LjkzMSAzNDEuODM1IFEgMzM3LjkxOCAzNTguNjExIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBMIDMyNC43NjUgMzczLjY3MyBaICBNIDQzNS44MSA0MTUuMDQxIEMgNDI4Ljk2NCA0MTcuMDQ1IDQyMy4wODEgNDIxLjMxNCA0MTkuMDI0IDQyNi45ODEgTCAzNDUuNzI3IDM3NS42NzMgQyAzNTAuNDYxIDM2NC45MTQgMzUyLjYyIDM1My4xMDcgMzUxLjkwNSAzNDAuOTU1IEwgMzUxLjI5MSAzMzAuNTIzIEwgNDM1LjgxIDQxNS4wNDEgTCA0MzUuODEgNDE1LjA0MSBMIDQzNS44MSA0MTUuMDQxIEwgNDM1LjgxIDQxNS4wNDEgTCA0MzUuODEgNDE1LjA0MSBMIDQzNS44MSA0MTUuMDQxIFogIE0gMzQzLjU5NiAxOTkuNzEzIEwgMzQxLjkwNCAxNzAuOTUxIEMgMzQxLjQ5IDE2My45MjMgMzM5LjI0MiAxNTcuNDExIDMzNS42NTEgMTUxLjg2MyBMIDQxMy4xNjcgMTEwLjEyNCBDIDQxMy4zMjUgMTE2LjAzNyA0MTUuMTE5IDEyMS41NDYgNDE4LjExNCAxMjYuMjE5IEMgNDE3LjEwMyAxMjYuNTgxIDQxNi4xNTIgMTI3LjE1OCA0MTUuMzQyIDEyNy45NjggTCAzNDMuNTk2IDE5OS43MTMgTCAzNDMuNTk2IDE5OS43MTMgTCAzNDMuNTk2IDE5OS43MTMgTCAzNDMuNTk2IDE5OS43MTMgTCAzNDMuNTk2IDE5OS43MTMgWiAgTSA0NDQuNjQ2IDkyLjc3MSBDIDQ1My43NDQgOTIuNzcxIDQ2MS4xNDYgMTAwLjE3MiA0NjEuMTQ2IDEwOS4yNzEgQyA0NjEuMTQ2IDExOC4zNjkgNDUzLjc0NCAxMjUuNzcxIDQ0NC42NDYgMTI1Ljc3MSBDIDQzNS41NDggMTI1Ljc3MSA0MjguMTQ2IDExOC4zNjkgNDI4LjE0NiAxMDkuMjcxIEMgNDI4LjE0NiAxMDAuMTcyIDQzNS41NDggOTIuNzcxIDQ0NC42NDYgOTIuNzcxIEwgNDQ0LjY0NiA5Mi43NzEgTCA0NDQuNjQ2IDkyLjc3MSBMIDQ0NC42NDYgOTIuNzcxIFogIE0gMTA4LjY0NyA5Mi43NzEgQyAxMTcuNzQ1IDkyLjc3MSAxMjUuMTQ3IDEwMC4xNzIgMTI1LjE0NyAxMDkuMjcxIEMgMTI1LjE0NyAxMTguMzY5IDExNy43NDUgMTI1Ljc3MSAxMDguNjQ3IDEyNS43NzEgQyA5OS41NDkgMTI1Ljc3MSA5Mi4xNDcgMTE4LjM2OSA5Mi4xNDcgMTA5LjI3MSBDIDkyLjE0NyAxMDAuMTcyIDk5LjU0OSA5Mi43NzEgMTA4LjY0NyA5Mi43NzEgTCAxMDguNjQ3IDkyLjc3MSBMIDEwOC42NDcgOTIuNzcxIFogIE0gMTA4LjY0NyA0NjEuNzcxIEMgOTkuNTQ5IDQ2MS43NzEgOTIuMTQ3IDQ1NC4zNjkgOTIuMTQ3IDQ0NS4yNzEgQyA5Mi4xNDcgNDM2LjE3MiA5OS41NDkgNDI4Ljc3MSAxMDguNjQ3IDQyOC43NzEgQyAxMTcuNzQ1IDQyOC43NzEgMTI1LjE0NyA0MzYuMTcyIDEyNS4xNDcgNDQ1LjI3MSBDIDEyNS4xNDcgNDU0LjM2OSAxMTcuNzQ1IDQ2MS43NzEgMTA4LjY0NyA0NjEuNzcxIEwgMTA4LjY0NyA0NjEuNzcxIFogIE0gOTIuMzIyIDEzNi4yMDIgQyA5Ny4wODYgMTM5LjEgMTAyLjY3NSAxNDAuNzcxIDEwOC42NDcgMTQwLjc3MSBDIDExNC44ODMgMTQwLjc3MSAxMjAuNjk3IDEzOC45NDEgMTI1LjU5NCAxMzUuODAyIEMgMTI1Ljk1NiAxMzYuODEzIDEyNi41MzQgMTM3Ljc2NCAxMjcuMzQzIDEzOC41NzMgTCAyMDcuMzQyIDIxOC41NzMgQyAyMDcuNzExIDIxOC45NDIgMjA4LjEwOSAyMTkuMjY0IDIwOC41MjggMjE5LjU0IEwgMjAzLjIxMiAzMDkuOTA4IEMgMjAxLjc5NCAzMTAuMTgyIDIwMC40NCAzMTAuODY5IDE5OS4zNDIgMzExLjk2NyBMIDk1LjM0MyA0MTUuOTY3IEMgOTQuOTU0IDQxNi4zNTYgOTQuNjIgNDE2Ljc3OSA5NC4zMzUgNDE3LjIyNCBDIDkzLjY1MSA0MTcuNTc1IDkyLjk3NiA0MTcuOTQyIDkyLjMyMiA0MTguMzQgUSA4NC42MTUgNDI0LjE4MiA4MS43MTYgNDI4Ljk0NiBDIDc4LjgxNyA0MzMuNzEgNzcuMTQ3IDQzOS4yOTkgNzcuMTQ3IDQ0NS4yNzEgQyA3Ny4xNDcgNDYyLjY0IDkxLjI3OCA0NzYuNzcxIDEwOC42NDcgNDc2Ljc3MSBDIDExNC42MTkgNDc2Ljc3MSAxMjAuMjA4IDQ3NS4xIDEyNC45NzIgNDcyLjIwMiBDIDEyOS43MzYgNDY5LjMwNCAxMzIuNjc4IDQ2Ni4zNiAxMzUuNTc3IDQ2MS41OTYgQyAxMzguNDc2IDQ1Ni44MzIgMTQwLjE0NyA0NTEuMjQzIDE0MC4xNDcgNDQ1LjI3MSBDIDE0MC4xNDcgNDQzLjk0MyAxNDAuMDU1IDQ0Mi42MzcgMTM5Ljg5NSA0NDEuMzUyIEwgMjE0Ljk5NyAzODguNzggQyAyMTcuMDUgMzkxLjY3NyAzMzYuMjQyIDM5MS42NzggMzM4LjI5NSAzODguNzggTCA0MTMuMzk4IDQ0MS4zNTIgQyA0MTMuMjM4IDQ0Mi42MzcgNDEzLjE0NiA0NDMuOTQzIDQxMy4xNDYgNDQ1LjI3MSBDIDQxMy4xNDYgNDUxLjI0MyA0MTQuODE3IDQ1Ni44MzIgNDE3LjcxNSA0NjEuNTk2IEMgNDIwLjYxMyA0NjYuMzYgNDIzLjU1NyA0NjkuMzA0IDQyOC4zMjEgNDcyLjIwMiBDIDQzMy4wODUgNDc1LjEgNDM4LjY3NCA0NzYuNzcxIDQ0NC42NDYgNDc2Ljc3MSBDIDQ2Mi4wMTUgNDc2Ljc3MSA0NzYuMTQ2IDQ2Mi42NCA0NzYuMTQ2IDQ0NS4yNzEgQyA0NzYuMTQ2IDQzOS4yOTkgNDc0LjQ3NSA0MzMuNzEgNDcxLjU3NyA0MjguOTQ2IEMgNDY4LjY3OSA0MjQuMTgyIDQ1OS42NDIgNDE3LjU3NSA0NTguOTU4IDQxNy4yMjQgQyA0NTguNjcyIDQxNi43NzkgNDU4LjMzOSA0MTYuMzU2IDQ1Ny45NSA0MTUuOTY3IEwgMzUzLjk1IDMxMS45NjcgQyAzNTIuODUyIDMxMC44NjkgMzUxLjQ5OCAzMTAuMTgyIDM1MC4wOCAzMDkuOTA4IEwgMzQ0Ljc2NCAyMTkuNTQgQyAzNDUuMTgzIDIxOS4yNjQgMzQ1LjU4MSAyMTguOTQyIDM0NS45NSAyMTguNTczIEwgNDI1Ljk1IDEzOC41NzMgQyA0MjYuNzYgMTM3Ljc2MyA0MjcuMzM3IDEzNi44MTIgNDI3LjY5OSAxMzUuODAyIEMgNDMyLjU5NiAxMzguOTQxIDQzOC40MDkgMTQwLjc3MSA0NDQuNjQ2IDE0MC43NzEgQyA0NTAuNjE4IDE0MC43NzEgNDU2LjIwNyAxMzkuMSA0NjAuOTcxIDEzNi4yMDIgQyA0NjUuNzM1IDEzMy4zMDQgNDY4LjY3OSAxMzAuMzYgNDcxLjU3NyAxMjUuNTk2IEMgNDc0LjQ3NSAxMjAuODMyIDQ3Ni4xNDYgMTE1LjI0MyA0NzYuMTQ2IDEwOS4yNzEgQyA0NzYuMTQ2IDkxLjkwMyA0NjIuMDE1IDc3Ljc3MiA0NDQuNjQ2IDc3Ljc3MiBDIDQzOC42NzQgNzcuNzcyIDQzMy4wODUgNzkuNDQyIDQyOC4zMjEgODIuMzQgTCA0MTYuMjE1IDkxLjQ0NiBMIDMyNC43NjUgMTQwLjY4OCBDIDMxOC40MDIgMTM2LjMyNCAzMTAuNzE4IDEzMy43NzEgMzAyLjQ3MyAxMzMuNzcxIEwgMjUwLjgxOSAxMzMuNzcxIEMgMjQyLjU3NCAxMzMuNzcxIDIzNC44OSAxMzYuMzI0IDIyOC41MjcgMTQwLjY4OCBMIDEzNy4wNzggOTEuNDQ2IEwgMTI0Ljk3MiA4Mi4zNCBDIDEyMC4yMDggNzkuNDQyIDExNC42MTkgNzcuNzcyIDEwOC42NDcgNzcuNzcyIEMgOTEuMjc4IDc3Ljc3MiA3Ny4xNDcgOTEuOTAzIDc3LjE0NyAxMDkuMjcxIEMgNzcuMTQ3IDExNS4yNDMgNzguODE4IDEyMC44MzIgODEuNzE2IDEyNS41OTUgQyA4NC42MTQgMTMwLjM1OCA4Ny41NTggMTMzLjMwNCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgWiAgTSA0NDQuNjQ2IDQ2MS43NzEgQyA0MzUuNTQ4IDQ2MS43NzEgNDI4LjE0NiA0NTQuMzY5IDQyOC4xNDYgNDQ1LjI3MSBDIDQyOC4xNDYgNDM2LjE3MiA0MzUuNTQ4IDQyOC43NzEgNDQ0LjY0NiA0MjguNzcxIEMgNDUzLjc0NCA0MjguNzcxIDQ2MS4xNDYgNDM2LjE3MiA0NjEuMTQ2IDQ0NS4yNzEgQyA0NjEuMTQ2IDQ1NC4zNjkgNDUzLjc0NCA0NjEuNzcxIDQ0NC42NDYgNDYxLjc3MSBaIFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIiBNIDI1OS40NTggMzM0LjIzNSBMIDI1OS40NTggMzM3LjIxMSBMIDI1NC41MTQgMzM3LjIxMSBMIDI1NC41MTQgMzUwLjc5NSBMIDI1MC44NDIgMzUwLjc5NSBMIDI1MC44NDIgMzM3LjIxMSBMIDI0NS44OTggMzM3LjIxMSBMIDI0NS44OTggMzM0LjIzNSBMIDI1OS40NTggMzM0LjIzNSBaICBNIDI2Ni4yMjYgMzQ3LjkzOSBMIDI3Mi41ODYgMzQ3LjkzOSBMIDI3Mi43NTQgMzUwLjYyNyBMIDI3Mi43NTQgMzUwLjYyNyBRIDI3MC40OTggMzUwLjg2NyAyNjUuMDc0IDM1MC44NjcgTCAyNjUuMDc0IDM1MC44NjcgTCAyNjUuMDc0IDM1MC44NjcgUSAyNjMuNDE4IDM1MC44NjcgMjYyLjQzNCAzNDkuOTY3IEwgMjYyLjQzNCAzNDkuOTY3IEwgMjYyLjQzNCAzNDkuOTY3IFEgMjYxLjQ1IDM0OS4wNjcgMjYxLjQyNiAzNDcuNTMxIEwgMjYxLjQyNiAzNDcuNTMxIEwgMjYxLjQyNiAzMzcuNDk5IEwgMjYxLjQyNiAzMzcuNDk5IFEgMjYxLjQ1IDMzNS45NjMgMjYyLjQzNCAzMzUuMDYzIEwgMjYyLjQzNCAzMzUuMDYzIEwgMjYyLjQzNCAzMzUuMDYzIFEgMjYzLjQxOCAzMzQuMTYzIDI2NS4wNzQgMzM0LjE2MyBMIDI2NS4wNzQgMzM0LjE2MyBMIDI2NS4wNzQgMzM0LjE2MyBRIDI3MC40OTggMzM0LjE2MyAyNzIuNzU0IDMzNC40MDMgTCAyNzIuNzU0IDMzNC40MDMgTCAyNzIuNTg2IDMzNy4xMTUgTCAyNjYuMjI2IDMzNy4xMTUgTCAyNjYuMjI2IDMzNy4xMTUgUSAyNjUuNjI2IDMzNy4xMTUgMjY1LjM2MiAzMzcuNDAzIEwgMjY1LjM2MiAzMzcuNDAzIEwgMjY1LjM2MiAzMzcuNDAzIFEgMjY1LjA5OCAzMzcuNjkxIDI2NS4wOTggMzM4LjMzOSBMIDI2NS4wOTggMzM4LjMzOSBMIDI2NS4wOTggMzQwLjg1OSBMIDI3MS42OTggMzQwLjg1OSBMIDI3MS42OTggMzQzLjQ5OSBMIDI2NS4wOTggMzQzLjQ5OSBMIDI2NS4wOTggMzQ2LjY5MSBMIDI2NS4wOTggMzQ2LjY5MSBRIDI2NS4wOTggMzQ3LjM2MyAyNjUuMzYyIDM0Ny42NTEgTCAyNjUuMzYyIDM0Ny42NTEgTCAyNjUuMzYyIDM0Ny42NTEgUSAyNjUuNjI2IDM0Ny45MzkgMjY2LjIyNiAzNDcuOTM5IEwgMjY2LjIyNiAzNDcuOTM5IFogIE0gMjc1LjIwMiAzMzMuOTk1IEwgMjc4LjczIDMzMy45OTUgTCAyNzguNzMgMzQ2LjkzMSBMIDI3OC43MyAzNDYuOTMxIFEgMjc4LjczIDM0OC4xMzEgMjgwLjA3NCAzNDguMTMxIEwgMjgwLjA3NCAzNDguMTMxIEwgMjgxLjAzNCAzNDguMTMxIEwgMjgxLjQ0MiAzNTAuNjAzIEwgMjgxLjQ0MiAzNTAuNjAzIFEgMjgwLjUzIDM1MS4wODMgMjc4LjYxIDM1MS4wODMgTCAyNzguNjEgMzUxLjA4MyBMIDI3OC42MSAzNTEuMDgzIFEgMjc3LjAyNiAzNTEuMDgzIDI3Ni4xMTQgMzUwLjIzMSBMIDI3Ni4xMTQgMzUwLjIzMSBMIDI3Ni4xMTQgMzUwLjIzMSBRIDI3NS4yMDIgMzQ5LjM3OSAyNzUuMjAyIDM0Ny44MTkgTCAyNzUuMjAyIDM0Ny44MTkgTCAyNzUuMjAyIDMzMy45OTUgWiAgTSAyODMuMDUgMzMzLjk5NSBMIDI4Ni41NzggMzMzLjk5NSBMIDI4Ni41NzggMzQ2LjkzMSBMIDI4Ni41NzggMzQ2LjkzMSBRIDI4Ni41NzggMzQ4LjEzMSAyODcuOTIyIDM0OC4xMzEgTCAyODcuOTIyIDM0OC4xMzEgTCAyODguODgyIDM0OC4xMzEgTCAyODkuMjkgMzUwLjYwMyBMIDI4OS4yOSAzNTAuNjAzIFEgMjg4LjM3OCAzNTEuMDgzIDI4Ni40NTggMzUxLjA4MyBMIDI4Ni40NTggMzUxLjA4MyBMIDI4Ni40NTggMzUxLjA4MyBRIDI4NC44NzQgMzUxLjA4MyAyODMuOTYyIDM1MC4yMzEgTCAyODMuOTYyIDM1MC4yMzEgTCAyODMuOTYyIDM1MC4yMzEgUSAyODMuMDUgMzQ5LjM3OSAyODMuMDUgMzQ3LjgxOSBMIDI4My4wNSAzNDcuODE5IEwgMjgzLjA1IDMzMy45OTUgWiAgTSAyOTIuMDg2IDMzNS43NTkgTCAyOTIuMDg2IDMzNS43NTkgTCAyOTIuMDg2IDMzNS43NTkgUSAyOTMuNjM0IDMzMy45MjMgMjk3LjYxOCAzMzMuOTIzIEwgMjk3LjYxOCAzMzMuOTIzIEwgMjk3LjYxOCAzMzMuOTIzIFEgMzAxLjYwMiAzMzMuOTIzIDMwMy4xNjIgMzM1Ljc1OSBMIDMwMy4xNjIgMzM1Ljc1OSBMIDMwMy4xNjIgMzM1Ljc1OSBRIDMwNC43MjIgMzM3LjU5NSAzMDQuNzIyIDM0Mi41MTUgTCAzMDQuNzIyIDM0Mi41MTUgTCAzMDQuNzIyIDM0Mi41MTUgUSAzMDQuNzIyIDM0Ny40MzUgMzAzLjE2MiAzNDkuMjcxIEwgMzAzLjE2MiAzNDkuMjcxIEwgMzAzLjE2MiAzNDkuMjcxIFEgMzAxLjYwMiAzNTEuMTA3IDI5Ny42MTggMzUxLjEwNyBMIDI5Ny42MTggMzUxLjEwNyBMIDI5Ny42MTggMzUxLjEwNyBRIDI5My42MzQgMzUxLjEwNyAyOTIuMDg2IDM0OS4yNzEgTCAyOTIuMDg2IDM0OS4yNzEgTCAyOTIuMDg2IDM0OS4yNzEgUSAyOTAuNTM4IDM0Ny40MzUgMjkwLjUzOCAzNDIuNTE1IEwgMjkwLjUzOCAzNDIuNTE1IEwgMjkwLjUzOCAzNDIuNTE1IFEgMjkwLjUzOCAzMzcuNTk1IDI5Mi4wODYgMzM1Ljc1OSBaICBNIDMwMC4xNzQgMzM4LjA1MSBMIDMwMC4xNzQgMzM4LjA1MSBMIDMwMC4xNzQgMzM4LjA1MSBRIDI5OS40OSAzMzYuODc1IDI5Ny42MTggMzM2Ljg3NSBMIDI5Ny42MTggMzM2Ljg3NSBMIDI5Ny42MTggMzM2Ljg3NSBRIDI5NS43NDYgMzM2Ljg3NSAyOTUuMDYyIDMzOC4wNTEgTCAyOTUuMDYyIDMzOC4wNTEgTCAyOTUuMDYyIDMzOC4wNTEgUSAyOTQuMzc4IDMzOS4yMjcgMjk0LjM3OCAzNDIuNTE1IEwgMjk0LjM3OCAzNDIuNTE1IEwgMjk0LjM3OCAzNDIuNTE1IFEgMjk0LjM3OCAzNDUuODAzIDI5NS4wNjIgMzQ2Ljk3OSBMIDI5NS4wNjIgMzQ2Ljk3OSBMIDI5NS4wNjIgMzQ2Ljk3OSBRIDI5NS43NDYgMzQ4LjE1NSAyOTcuNjE4IDM0OC4xNTUgTCAyOTcuNjE4IDM0OC4xNTUgTCAyOTcuNjE4IDM0OC4xNTUgUSAyOTkuNDkgMzQ4LjE1NSAzMDAuMTc0IDM0Ni45NzkgTCAzMDAuMTc0IDM0Ni45NzkgTCAzMDAuMTc0IDM0Ni45NzkgUSAzMDAuODU4IDM0NS44MDMgMzAwLjg1OCAzNDIuNTE1IEwgMzAwLjg1OCAzNDIuNTE1IEwgMzAwLjg1OCAzNDIuNTE1IFEgMzAwLjg1OCAzMzkuMjI3IDMwMC4xNzQgMzM4LjA1MSBaIFwiXG4gICAgICAvPlxuICAgICAgPGcgY2xhc3NOYW1lPVwicHJvcGVsbGVyLWdyb3VwXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvcGVsbGVyfSAke3N0eWxlcy5wcm9wZWxsZXJDV31gfVxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogYlJpZ2h0Um90b3JBbmltYXRpb24gfX1cbiAgICAgICAgICBkPVwiIE0gNDYxLjU2MyA0MTguNzcgTCA0NjMuOTkyIDQxNi4zNCBRIDQ2NS40OTUgNDA3LjExNiA0NjYuNDYxIDQwMC4zOTUgQyA0NjcuNDI2IDM5My42NzUgNDY5LjM2MyAzODguMDg3IDQ3NC43MzEgMzgzLjI4NCBRIDUzMy44NjIgMzQxLjUxNCA1MzguMTk2IDMzOC44NTkgQyA1NDIuNTI5IDMzNi4yMDMgNTQ4LjM0NSAzMzQuMjk5IDU1MS40OTIgMzM4LjI5IEMgNTU0LjYzOSAzNDIuMjgyIDU1My40ODEgMzQ2LjAyIDU0OS40MTkgMzUwLjA4MiBMIDQ3MS4xNDcgNDI4LjM1NCBMIDQ2MS41NjMgNDE4Ljc3IFogIE0gNDI3LjcyOSA0NzEuNzcyIEwgNDI1LjI5OSA0NzQuMjAyIFEgNDIzLjc5NyA0ODMuNDI2IDQyMi44MzEgNDkwLjE0NiBDIDQyMS44NjYgNDk2Ljg2NyA0MTkuOTI5IDUwMi40NTQgNDE0LjU2MSA1MDcuMjU3IFEgMzU1LjQzIDU0OS4wMjggMzUxLjA5NiA1NTEuNjgzIEMgMzQ2Ljc2MyA1NTQuMzM4IDM0MC45NDcgNTU2LjI0MyAzMzcuOCA1NTIuMjUxIEMgMzM0LjY1MyA1NDguMjYgMzM1LjgxMSA1NDQuNTIyIDMzOS44NzMgNTQwLjQ2IEwgNDE4LjE0NSA0NjIuMTg3IEwgNDI3LjcyOSA0NzEuNzcyIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9wZWxsZXJ9ICR7c3R5bGVzLnByb3BlbGxlckNDV31gfVxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogZlJpZ2h0Um90b3JBbmltYXRpb24gfX1cbiAgICAgICAgICBkPVwiIE0gNDYxLjU2MyAxMzUuNzczIEwgNDYzLjk5MiAxMzguMjAzIFEgNDY1LjQ5NSAxNDcuNDI2IDQ2Ni40NjEgMTU0LjE0NyBDIDQ2Ny40MjYgMTYwLjg2OCA0NjkuMzYzIDE2Ni40NTUgNDc0LjczMSAxNzEuMjU4IFEgNTMzLjg2MiAyMTMuMDI4IDUzOC4xOTYgMjE1LjY4NCBDIDU0Mi41MjkgMjE4LjMzOSA1NDguMzQ1IDIyMC4yNDQgNTUxLjQ5MiAyMTYuMjUyIEMgNTU0LjYzOSAyMTIuMjYgNTUzLjQ4MSAyMDguNTIzIDU0OS40MTkgMjA0LjQ2IEwgNDcxLjE0NyAxMjYuMTg4IEwgNDYxLjU2MyAxMzUuNzczIFogIE0gNDI3LjcyOSA4Mi43NyBMIDQyNS4yOTkgODAuMzQgUSA0MjMuNzk3IDcxLjExNyA0MjIuODMxIDY0LjM5NiBDIDQyMS44NjYgNTcuNjc1IDQxOS45MjkgNTIuMDg4IDQxNC41NjEgNDcuMjg1IFEgMzU1LjQzIDUuNTE1IDM1MS4wOTYgMi44NTkgQyAzNDYuNzYzIDAuMjA0IDM0MC45NDcgLTEuNzAxIDMzNy44IDIuMjkxIEMgMzM0LjY1MyA2LjI4MiAzMzUuODExIDEwLjAyIDMzOS44NzMgMTQuMDgyIEwgNDE4LjE0NSA5Mi4zNTUgTCA0MjcuNzI5IDgyLjc3IFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9wZWxsZXJ9ICR7c3R5bGVzLnByb3BlbGxlckNDV31gfVxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogYkxlZnRSb3RvckFuaW1hdGlvbiB9fVxuICAgICAgICAgIGQ9XCIgTSAxMjUuNTYzIDQ3MS43NzIgTCAxMjcuOTkzIDQ3NC4yMDIgUSAxMjkuNDk2IDQ4My40MjYgMTMwLjQ2MSA0OTAuMTQ2IEMgMTMxLjQyNyA0OTYuODY3IDEzMy4zNjMgNTAyLjQ1NCAxMzguNzMxIDUwNy4yNTcgUSAxOTcuODYzIDU0OS4wMjggMjAyLjE5NiA1NTEuNjgzIEMgMjA2LjUzIDU1NC4zMzggMjEyLjM0NSA1NTYuMjQzIDIxNS40OTIgNTUyLjI1MSBDIDIxOC42MzkgNTQ4LjI2IDIxNy40ODIgNTQ0LjUyMiAyMTMuNDE5IDU0MC40NiBMIDEzNS4xNDggNDYyLjE4NyBMIDEyNS41NjMgNDcxLjc3MiBaICBNIDkxLjczIDQxOC43NyBMIDg5LjMgNDE2LjM0IFEgODcuNzk3IDQwNy4xMTYgODYuODMyIDQwMC4zOTUgQyA4NS44NjYgMzkzLjY3NSA4My45MyAzODguMDg3IDc4LjU2MiAzODMuMjg0IFEgMTkuNDMxIDM0MS41MTQgMTUuMDk3IDMzOC44NTkgQyAxMC43NjMgMzM2LjIwMyA0Ljk0OCAzMzQuMjk5IDEuODAxIDMzOC4yOSBDIC0xLjM0NiAzNDIuMjgyIC0wLjE4OSAzNDYuMDIgMy44NzQgMzUwLjA4MiBMIDgyLjE0NiA0MjguMzU0IEwgOTEuNzMgNDE4Ljc3IFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9wZWxsZXJ9ICR7c3R5bGVzLnByb3BlbGxlckNXfWB9XG4gICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uOiBmTGVmdFJvdG9yQW5pbWF0aW9uIH19XG4gICAgICAgICAgZD1cIiBNIDEyNS41NjMgODIuNzcgTCAxMjcuOTkzIDgwLjM0IFEgMTI5LjQ5NiA3MS4xMTcgMTMwLjQ2MSA2NC4zOTYgQyAxMzEuNDI3IDU3LjY3NSAxMzMuMzYzIDUyLjA4OCAxMzguNzMxIDQ3LjI4NSBRIDE5Ny44NjMgNS41MTUgMjAyLjE5NiAyLjg1OSBDIDIwNi41MyAwLjIwNCAyMTIuMzQ1IC0xLjcwMSAyMTUuNDkyIDIuMjkxIEMgMjE4LjYzOSA2LjI4MiAyMTcuNDgyIDEwLjAyIDIxMy40MTkgMTQuMDgzIEwgMTM1LjE0NyA5Mi4zNTUgTCAxMjUuNTYzIDgyLjc3IFogIE0gOTEuNzMgMTM1Ljc3MyBMIDg5LjMgMTM4LjIwMyBRIDg3Ljc5NyAxNDcuNDI2IDg2LjgzMiAxNTQuMTQ3IEMgODUuODY2IDE2MC44NjggODMuOTMgMTY2LjQ1NSA3OC41NjIgMTcxLjI1OCBRIDE5LjQzMSAyMTMuMDI4IDE1LjA5NyAyMTUuNjg0IEMgMTAuNzYzIDIxOC4zMzkgNC45NDggMjIwLjI0MyAxLjgwMSAyMTYuMjUyIEMgLTEuMzQ2IDIxMi4yNiAtMC4xODkgMjA4LjUyMyAzLjg3NCAyMDQuNDYgTCA4Mi4xNDYgMTI2LjE4OCBMIDkxLjczIDEzNS43NzMgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyb25lVG9wSXRlbTogQ2FudmFzRWxlbWVudEl0ZW08YW55LCBhbnk+ID0ge1xuICBpZDogJ2Ryb25lVG9wJyxcbiAgbmFtZTogJ0Ryb25lIFRvcCcsXG4gIGRlc2NyaXB0aW9uOiAnRHJvbmUgdG9wJyxcblxuICBkaXNwbGF5OiBEcm9uZVRvcERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBEcm9uZVRvcENvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IERyb25lVG9wRGF0YSA9IHtcbiAgICAgIGJSaWdodFJvdG9yUlBNOiBjZmc/LmJSaWdodFJvdG9yUlBNID8gY3R4LmdldFNjYWxhcihjZmcuYlJpZ2h0Um90b3JSUE0pLnZhbHVlKCkgOiAwLFxuICAgICAgYkxlZnRSb3RvclJQTTogY2ZnPy5iTGVmdFJvdG9yUlBNID8gY3R4LmdldFNjYWxhcihjZmcuYkxlZnRSb3RvclJQTSkudmFsdWUoKSA6IDAsXG4gICAgICBmUmlnaHRSb3RvclJQTTogY2ZnPy5mUmlnaHRSb3RvclJQTSA/IGN0eC5nZXRTY2FsYXIoY2ZnLmZSaWdodFJvdG9yUlBNKS52YWx1ZSgpIDogMCxcbiAgICAgIGZMZWZ0Um90b3JSUE06IGNmZz8uZkxlZnRSb3RvclJQTSA/IGN0eC5nZXRTY2FsYXIoY2ZnLmZMZWZ0Um90b3JSUE0pLnZhbHVlKCkgOiAwLFxuICAgICAgeWF3QW5nbGU6IGNmZz8ueWF3QW5nbGUgPyBjdHguZ2V0U2NhbGFyKGNmZy55YXdBbmdsZSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydEcm9uZSBUb3AnXTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAneWF3QW5nbGUnLFxuICAgICAgICBwYXRoOiAnY29uZmlnLnlhd0FuZ2xlJyxcbiAgICAgICAgbmFtZTogJ1lhdyBBbmdsZScsXG4gICAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdmUmlnaHRSb3RvclJQTScsXG4gICAgICAgIHBhdGg6ICdjb25maWcuZlJpZ2h0Um90b3JSUE0nLFxuICAgICAgICBuYW1lOiAnRnJvbnQgUmlnaHQgUm90b3IgUlBNJyxcbiAgICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2ZMZWZ0Um90b3JSUE0nLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmZMZWZ0Um90b3JSUE0nLFxuICAgICAgICBuYW1lOiAnRnJvbnQgTGVmdCBSb3RvciBSUE0nLFxuICAgICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYlJpZ2h0Um90b3JSUE0nLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmJSaWdodFJvdG9yUlBNJyxcbiAgICAgICAgbmFtZTogJ0JhY2sgUmlnaHQgUm90b3IgUlBNJyxcbiAgICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2JMZWZ0Um90b3JSUE0nLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmJMZWZ0Um90b3JSUE0nLFxuICAgICAgICBuYW1lOiAnQmFjayBMZWZ0IFJvdG9yIFJQTScsXG4gICAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSk7XG4gIH0sXG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHByb3BlbGxlcjogY3NzYFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHByb3BlbGxlckNXOiBjc3NgXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICBgLFxuICBwcm9wZWxsZXJDQ1c6IGNzc2BcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU1ZHIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5cbmltcG9ydCB7XG4gIENvbG9yRGltZW5zaW9uQ29uZmlnLFxuICBSZXNvdXJjZURpbWVuc2lvbkNvbmZpZyxcbiAgUmVzb3VyY2VEaW1lbnNpb25Nb2RlLFxuICBnZXRQdWJsaWNPckFic29sdXRlVXJsLFxufSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBEaW1lbnNpb25Db250ZXh0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvY29udGV4dCc7XG5pbXBvcnQgeyBDb2xvckRpbWVuc2lvbkVkaXRvciwgUmVzb3VyY2VEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcbmltcG9ydCB7IEFQSUVkaXRvciwgQVBJRWRpdG9yQ29uZmlnLCBjYWxsQXBpIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvY2FudmFzL2VkaXRvci9BUElFZGl0b3InO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5pbXBvcnQgeyBMaW5lQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWcge1xuICBwYXRoPzogUmVzb3VyY2VEaW1lbnNpb25Db25maWc7XG4gIGZpbGw/OiBDb2xvckRpbWVuc2lvbkNvbmZpZztcbiAgc3Ryb2tlPzogTGluZUNvbmZpZztcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG5pbnRlcmZhY2UgSWNvbkRhdGEge1xuICBwYXRoOiBzdHJpbmc7XG4gIGZpbGw6IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gIHN0cm9rZT86IG51bWJlcjtcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG4vLyBXaGVuIGEgc3Rva2UgaXMgZGVmaW5lZCwgd2Ugd2FudCB0aGUgcGF0aCB0byBiZSBpbiBwYWdlIHVuaXRzXG5jb25zdCBzdmdTdHJva2VQYXRoQ2xhc3MgPSBjc3NgXG4gIHBhdGgge1xuICAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIEljb25EaXNwbGF5KHByb3BzOiBDYW52YXNFbGVtZW50UHJvcHMpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcbiAgaWYgKCFkYXRhPy5wYXRoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkYXRhPy5hcGkpIHtcbiAgICAgIGNhbGxBcGkoZGF0YS5hcGkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdmdTdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgICBmaWxsOiBkYXRhPy5maWxsLFxuICAgIHN0cm9rZTogZGF0YT8uc3Ryb2tlQ29sb3IsXG4gICAgc3Ryb2tlV2lkdGg6IGRhdGE/LnN0cm9rZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTVkdcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzcmM9e2RhdGEucGF0aH1cbiAgICAgIHN0eWxlPXtzdmdTdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17c3ZnU3R5bGUuc3Ryb2tlV2lkdGggPyBzdmdTdHJva2VQYXRoQ2xhc3MgOiB1bmRlZmluZWR9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGljb25JdGVtOiBDYW52YXNFbGVtZW50SXRlbTxJY29uQ29uZmlnLCBJY29uRGF0YT4gPSB7XG4gIGlkOiAnaWNvbicsXG4gIG5hbWU6ICdJY29uJyxcbiAgZGVzY3JpcHRpb246ICdTVkcgSWNvbiBkaXNwbGF5JyxcblxuICBkaXNwbGF5OiBJY29uRGlzcGxheSxcblxuICBnZXROZXdPcHRpb25zOiAob3B0aW9ucykgPT4gKHtcbiAgICBwbGFjZW1lbnQ6IHtcbiAgICAgIHdpZHRoOiA1MCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgICBjb25maWc6IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgbW9kZTogUmVzb3VyY2VEaW1lbnNpb25Nb2RlLkZpeGVkLFxuICAgICAgICBmaXhlZDogJ2ltZy9pY29ucy91bmljb25zL3F1ZXN0aW9uLWNpcmNsZS5zdmcnLFxuICAgICAgfSxcbiAgICAgIGZpbGw6IHsgZml4ZWQ6ICcjRkZGODk5JyB9LFxuICAgIH0sXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBJY29uQ29uZmlnKSA9PiB7XG4gICAgbGV0IHBhdGg6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoY2ZnLnBhdGgpIHtcbiAgICAgIHBhdGggPSBjdHguZ2V0UmVzb3VyY2UoY2ZnLnBhdGgpLnZhbHVlKCk7XG4gICAgfVxuICAgIGlmICghcGF0aCB8fCAhaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHBhdGggPSBnZXRQdWJsaWNPckFic29sdXRlVXJsKCdpbWcvaWNvbnMvdW5pY29ucy9xdWVzdGlvbi1jaXJjbGUuc3ZnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YTogSWNvbkRhdGEgPSB7XG4gICAgICBwYXRoLFxuICAgICAgZmlsbDogY2ZnLmZpbGwgPyBjdHguZ2V0Q29sb3IoY2ZnLmZpbGwpLnZhbHVlKCkgOiAnI0NDQycsXG4gICAgICBhcGk6IGNmZz8uYXBpID8/IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgaWYgKGNmZy5zdHJva2U/LndpZHRoICYmIGNmZy5zdHJva2UuY29sb3IpIHtcbiAgICAgIGlmIChjZmcuc3Ryb2tlLndpZHRoID4gMCkge1xuICAgICAgICBkYXRhLnN0cm9rZSA9IGNmZy5zdHJva2U/LndpZHRoO1xuICAgICAgICBkYXRhLnN0cm9rZUNvbG9yID0gY3R4LmdldENvbG9yKGNmZy5zdHJva2UuY29sb3IpLnZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIC8vIEhlYXRtYXAgb3ZlcmxheSBvcHRpb25zXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydJY29uJ107XG4gICAgYnVpbGRlclxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2ljb25TZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcucGF0aCcsXG4gICAgICAgIG5hbWU6ICdTVkcgUGF0aCcsXG4gICAgICAgIGVkaXRvcjogUmVzb3VyY2VEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcmVzb3VyY2VUeXBlOiAnaWNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2NvbmZpZy5maWxsJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5maWxsJyxcbiAgICAgICAgbmFtZTogJ0ZpbGwgY29sb3InLFxuICAgICAgICBlZGl0b3I6IENvbG9yRGltZW5zaW9uRWRpdG9yLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgICAgIC8vIENvbmZpZ3VyZWQgdmFsdWVzXG4gICAgICAgICAgZml4ZWQ6ICdncmV5JyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkU2xpZGVySW5wdXQoe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5zdHJva2Uud2lkdGgnLFxuICAgICAgICBuYW1lOiAnU3Ryb2tlJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdjb25maWcuc3Ryb2tlLmNvbG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5zdHJva2UuY29sb3InLFxuICAgICAgICBuYW1lOiAnU3Ryb2tlIGNvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgICAvLyBDb25maWd1cmVkIHZhbHVlc1xuICAgICAgICAgIGZpeGVkOiAnZ3JleScsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dJZjogKGNmZykgPT4gQm9vbGVhbihjZmc/LmNvbmZpZz8uc3Ryb2tlPy53aWR0aCksXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2FwaVNlbGVjdG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5hcGknLFxuICAgICAgICBuYW1lOiAnQVBJJyxcbiAgICAgICAgZWRpdG9yOiBBUElFZGl0b3IsXG4gICAgICB9KTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuXG5pbnRlcmZhY2UgTm90Rm91bmRDb25maWcge1xuICBvcmlnPzogYW55O1xufVxuXG5jbGFzcyBOb3RGb3VuZERpc3BsYXkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PENhbnZhc0VsZW1lbnRQcm9wczxOb3RGb3VuZENvbmZpZz4+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+Tk9UIEZPVU5EOjwvaDM+XG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RGb3VuZEl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPE5vdEZvdW5kQ29uZmlnPiA9IHtcbiAgaWQ6ICdub3QtZm91bmQnLFxuICBuYW1lOiAnTm90IGZvdW5kJyxcbiAgZGVzY3JpcHRpb246ICdEaXNwbGF5IHdoZW4gZWxlbWVudCB0eXBlIGlzIG5vdCBmb3VuZCBpbiB0aGUgcmVnaXN0cnknLFxuXG4gIGRpc3BsYXk6IE5vdEZvdW5kRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKCkgPT4gKHtcbiAgICBjb25maWc6IHt9LFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHN0eWxlc0ZhY3RvcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2NvbnRleHQnO1xuaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzL0NvbG9yRGltZW5zaW9uRWRpdG9yJztcbmltcG9ydCB7IFRleHREaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzL1RleHREaW1lbnNpb25FZGl0b3InO1xuaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25Db25maWcsIFRleHREaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy90eXBlcyc7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuZXhwb3J0IGVudW0gQWxpZ24ge1xuICBMZWZ0ID0gJ2xlZnQnLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxufVxuXG5leHBvcnQgZW51bSBWQWxpZ24ge1xuICBUb3AgPSAndG9wJyxcbiAgTWlkZGxlID0gJ21pZGRsZScsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxufVxuXG5pbnRlcmZhY2UgVGV4dEJveERhdGEge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjsgLy8gMCBvciBtaXNzaW5nIHdpbGwgXCJhdXRvIHNpemVcIlxuICBhbGlnbjogQWxpZ247XG4gIHZhbGlnbjogVkFsaWduO1xufVxuXG5pbnRlcmZhY2UgVGV4dEJveENvbmZpZyB7XG4gIHRleHQ/OiBUZXh0RGltZW5zaW9uQ29uZmlnO1xuICBjb2xvcj86IENvbG9yRGltZW5zaW9uQ29uZmlnO1xuICBzaXplPzogbnVtYmVyOyAvLyAwIG9yIG1pc3Npbmcgd2lsbCBcImF1dG8gc2l6ZVwiXG4gIGFsaWduOiBBbGlnbjtcbiAgdmFsaWduOiBWQWxpZ247XG59XG5cbmNsYXNzIFRleHRCb3hEaXNwbGF5IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxDYW52YXNFbGVtZW50UHJvcHM8VGV4dEJveENvbmZpZywgVGV4dEJveERhdGE+PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKGNvbmZpZy50aGVtZTIsIGRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PntkYXRhPy50ZXh0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUyLCBkYXRhKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICBgLFxuICBzcGFuOiBjc3NgXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogJHtkYXRhLnZhbGlnbn07XG4gICAgdGV4dC1hbGlnbjogJHtkYXRhLmFsaWdufTtcbiAgICBmb250LXNpemU6ICR7ZGF0YT8uc2l6ZX1weDtcbiAgICBjb2xvcjogJHtkYXRhPy5jb2xvcn07XG4gIGAsXG59KSk7XG5leHBvcnQgY29uc3QgdGV4dEJveEl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPFRleHRCb3hDb25maWcsIFRleHRCb3hEYXRhPiA9IHtcbiAgaWQ6ICd0ZXh0LWJveCcsXG4gIG5hbWU6ICdUZXh0JyxcbiAgZGVzY3JpcHRpb246ICdUZXh0IGJveCcsXG5cbiAgZGlzcGxheTogVGV4dEJveERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMjQwLFxuICAgIGhlaWdodDogMTYwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGZpeGVkOiAnZ3JleScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgICBjb25maWc6IHtcbiAgICAgIGFsaWduOiBBbGlnbi5MZWZ0LFxuICAgICAgdmFsaWduOiBWQWxpZ24uTWlkZGxlLFxuICAgIH0sXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBUZXh0Qm94Q29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogVGV4dEJveERhdGEgPSB7XG4gICAgICB0ZXh0OiBjZmcudGV4dCA/IGN0eC5nZXRUZXh0KGNmZy50ZXh0KS52YWx1ZSgpIDogJycsXG4gICAgICBhbGlnbjogY2ZnLmFsaWduID8/IEFsaWduLkNlbnRlcixcbiAgICAgIHZhbGlnbjogY2ZnLnZhbGlnbiA/PyBWQWxpZ24uTWlkZGxlLFxuICAgICAgc2l6ZTogY2ZnLnNpemUsXG4gICAgfTtcblxuICAgIGlmIChjZmcuY29sb3IpIHtcbiAgICAgIGRhdGEuY29sb3IgPSBjdHguZ2V0Q29sb3IoY2ZnLmNvbG9yKS52YWx1ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIC8vIEhlYXRtYXAgb3ZlcmxheSBvcHRpb25zXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydUZXh0IGJveCddO1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICd0ZXh0U2VsZWN0b3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLnRleHQnLFxuICAgICAgICBuYW1lOiAnVGV4dCcsXG4gICAgICAgIGVkaXRvcjogVGV4dERpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnY29uZmlnLmNvbG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5jb2xvcicsXG4gICAgICAgIG5hbWU6ICdUZXh0IGNvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHt9LFxuICAgICAgfSlcbiAgICAgIC5hZGRSYWRpbyh7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwYXRoOiAnY29uZmlnLmFsaWduJyxcbiAgICAgICAgbmFtZTogJ0FsaWduIHRleHQnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IEFsaWduLkxlZnQsIGxhYmVsOiAnTGVmdCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEFsaWduLkNlbnRlciwgbGFiZWw6ICdDZW50ZXInIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBBbGlnbi5SaWdodCwgbGFiZWw6ICdSaWdodCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IEFsaWduLkxlZnQsXG4gICAgICB9KVxuICAgICAgLmFkZFJhZGlvKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjb25maWcudmFsaWduJyxcbiAgICAgICAgbmFtZTogJ1ZlcnRpY2FsIGFsaWduJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHZhbHVlOiBWQWxpZ24uVG9wLCBsYWJlbDogJ1RvcCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFZBbGlnbi5NaWRkbGUsIGxhYmVsOiAnTWlkZGxlJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogVkFsaWduLkJvdHRvbSwgbGFiZWw6ICdCb3R0b20nIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBWQWxpZ24uTWlkZGxlLFxuICAgICAgfSlcbiAgICAgIC5hZGROdW1iZXJJbnB1dCh7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwYXRoOiAnY29uZmlnLnNpemUnLFxuICAgICAgICBuYW1lOiAnVGV4dCBzaXplJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0F1dG8nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFNjYWxhckRpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmludGVyZmFjZSBXaW5kVHVyYmluZURhdGEge1xuICBycG0/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBXaW5kVHVyYmluZUNvbmZpZyB7XG4gIHJwbT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgV2luZFR1cmJpbmVEaXNwbGF5OiBGQzxDYW52YXNFbGVtZW50UHJvcHM8V2luZFR1cmJpbmVDb25maWcsIFdpbmRUdXJiaW5lRGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHdpbmRUdXJiaW5lQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5ycG0gPyA2MCAvIE1hdGguYWJzKGRhdGEucnBtKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE4OS4zMjYgMjgzLjk4OVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICA8c3ltYm9sIGlkPVwiYmxhZGVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiI2U2ZTZlNlwiXG4gICAgICAgICAgaWQ9XCJibGFkZS1mcm9udFwiXG4gICAgICAgICAgZD1cIk0xNC42NDkxODc5LDEuODUwMTE2MDEgQzE0LjI2ODQ0NTUsLTAuMDUzNTk2Mjg3NyAxMC43MTUwODEyLC0wLjgxNTA4MTIwNiA5LjA2NDczMzE4LDMuMzczMDg1ODUgTDAuNDM0MzM4NzQ3LDcwLjc2NTg5MzMgTDguOTM4MDUxMDQsOTEuOTYwNzg4OSBMMTUuNDEwNjcyOSw5MC40Mzc4MTkgTDE3LjU2ODQ0NTUsNzguMzgwNzQyNSBMMTQuNTIxODA5NywxLjk3Njc5ODE0IEwxNC42NDkxODc5LDEuODUwMTE2MDEgWlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiNkMGQ2ZDdcIlxuICAgICAgICAgIGlkPVwiYmxhZGUtc2lkZVwiXG4gICAgICAgICAgZD1cIk0xMS4wOTUxMjc2LDAuNTgxMjA2NDk3IEMxMC4zMzM2NDI3LDAuOTYxOTQ4OTU2IDkuNTcyMTU3NzcsMS44NTAxMTYwMSA4LjkzNzM1NDk5LDMuMjQ2NDAzNzEgTDAuMzA2OTYwNTU3LDcwLjYzOTIxMTEgTDguODEwNjcyODUsOTEuODM0MTA2NyBMMy4zNTM1OTYyOSw3MC4wMDQ0MDg0IEwxMS4wOTUxMjc2LDAuNTgxMjA2NDk3IFpcIlxuICAgICAgICAvPlxuICAgICAgPC9zeW1ib2w+XG5cbiAgICAgIDxnPlxuICAgICAgICA8ZyBpZD1cInN0cnVjdHVyZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1OC4xMjMsIDgyLjY2NClcIiBmaWxsUnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cInRvd2VyXCIgZmlsbD1cIiNlNmU2ZTZcIiBwb2ludHM9XCIzMy4xMTEsMTAuOTg0IDM5Ljk2NSwxMC45ODQgNDQuMjgsMTk2LjE3NiAyOC43OTYsMTk2LjE3NlwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwieWF3XCJcbiAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsMCwwLDAuMjUpXCJcbiAgICAgICAgICAgIGQ9XCJNNDAuMzQ1NDc1NiwyMy4yOTQ4OTU2IEw0MC43MjYyMTgxLDM0Ljg0NDU0NzYgQzM4LjgyMjUwNTgsMzUuMDk4NjA3OSAzNS43NzY1NjYxLDM1LjA5ODYwNzkgMzIuMzQ5ODg0LDM0LjMzNzEyMyBMMzIuNzMwNjI2NSwyMy4yOTU1OTE2IEw0MC4zNDU0NzU2LDIzLjI5NTU5MTYgTDQwLjM0NTQ3NTYsMjMuMjk0ODk1NiBaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cImJhc2VcIlxuICAgICAgICAgICAgZmlsbD1cIiNkMGQ2ZDdcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNDIpXCJcbiAgICAgICAgICAgIGQ9XCJNMjYuMzg0Njg2OCwxNTAuNTkxNjQ3IEw0Ni41NjQwMzcxLDE1MC41OTE2NDcgQzQ4Ljg0ODQ5MTksMTUwLjU5MTY0NyA1MC43NTIyMDQyLDE1Mi40OTUzNiA1MC43NTIyMDQyLDE1NC43Nzk4MTQgTDUwLjc1MjIwNDIsMTU4Ljk2Nzk4MSBMMjIuMDY5MTQxNSwxNTguOTY3OTgxIEwyMi4wNjkxNDE1LDE1NC43Nzk4MTQgQzIyLjA2OTE0MTUsMTUyLjQ5NTM2IDIzLjk3Mjg1MzgsMTUwLjU5MTY0NyAyNi4yNTczMDg2LDE1MC41OTE2NDcgTDI2LjM4NDY4NjgsMTUwLjU5MTY0NyBaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxjaXJjbGUgaWQ9XCJuYWNlbGxlXCIgZmlsbD1cIiNlNmU2ZTZcIiBjeD1cIjM2LjU0XCIgY3k9XCIxMlwiIHI9XCIxMS45M1wiIC8+XG4gICAgICAgICAgPGNpcmNsZSBpZD1cImdlYXJib3hcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMGQ2ZDdcIiBzdHJva2VXaWR0aD1cIjIuNzVcIiBjeD1cIjM2LjUzOFwiIGN5PVwiMTEuOTk5XCIgcj1cIjUuOFwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xhc3NOYW1lPXtzdHlsZXMuYmxhZGV9IHN0eWxlPXt7IGFuaW1hdGlvbjogd2luZFR1cmJpbmVBbmltYXRpb24gfX0+XG4gICAgICAgICAgPHVzZSBpZD1cImJsYWRlMVwiIGhyZWY9XCIjYmxhZGVcIiB4PVwiODMuMjRcIiB5PVwiMFwiIC8+XG4gICAgICAgICAgPHVzZSBpZD1cImJsYWRlMlwiIGhyZWY9XCIjYmxhZGVcIiB4PVwiODMuMjRcIiB5PVwiMFwiIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgOTQuNjYzIDk0LjY2MylcIiAvPlxuICAgICAgICAgIDx1c2UgaWQ9XCJibGFkZTNcIiBocmVmPVwiI2JsYWRlXCIgeD1cIjgzLjI0XCIgeT1cIjBcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTEyMCA5NC42NjMgOTQuNjYzKVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3aW5kVHVyYmluZUl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICd3aW5kVHVyYmluZScsXG4gIG5hbWU6ICdXaW5kIFR1cmJpbmUnLFxuICBkZXNjcmlwdGlvbjogJ1NwaW5ueSBzcGlubnknLFxuXG4gIGRpc3BsYXk6IFdpbmRUdXJiaW5lRGlzcGxheSxcblxuICBkZWZhdWx0U2l6ZToge1xuICAgIHdpZHRoOiAxMDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gIH0sXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSksXG5cbiAgLy8gQ2FsbGVkIHdoZW4gZGF0YSBjaGFuZ2VzXG4gIHByZXBhcmVEYXRhOiAoY3R4OiBEaW1lbnNpb25Db250ZXh0LCBjZmc6IFdpbmRUdXJiaW5lQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZGF0YTogV2luZFR1cmJpbmVEYXRhID0ge1xuICAgICAgcnBtOiBjZmc/LnJwbSA/IGN0eC5nZXRTY2FsYXIoY2ZnLnJwbSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydXaW5kIFR1cmJpbmUnXTtcbiAgICBidWlsZGVyLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGlkOiAncnBtJyxcbiAgICAgIHBhdGg6ICdjb25maWcucnBtJyxcbiAgICAgIG5hbWU6ICdSUE0nLFxuICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJsYWRlOiBjc3NgXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5NC42NjNweCA5NC42NjNweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIGAsXG59KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50JztcbmV4cG9ydCB7IENhbnZhc0ZyYW1lT3B0aW9ucyB9IGZyb20gJy4vZnJhbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3RyeSc7XG4iLCJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudE9wdGlvbnMgfSBmcm9tICcuL2VsZW1lbnQnO1xuaW1wb3J0IHsgYnV0dG9uSXRlbSB9IGZyb20gJy4vZWxlbWVudHMvYnV0dG9uJztcbmltcG9ydCB7IGRyb25lRnJvbnRJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9uZUZyb250JztcbmltcG9ydCB7IGRyb25lU2lkZUl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL2Ryb25lU2lkZSc7XG5pbXBvcnQgeyBkcm9uZVRvcEl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL2Ryb25lVG9wJztcbmltcG9ydCB7IGljb25JdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9pY29uJztcbmltcG9ydCB7IHRleHRCb3hJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy90ZXh0Qm94JztcbmltcG9ydCB7IHdpbmRUdXJiaW5lSXRlbSB9IGZyb20gJy4vZWxlbWVudHMvd2luZFR1cmJpbmUnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQU5WQVNfRUxFTUVOVF9DT05GSUc6IENhbnZhc0VsZW1lbnRPcHRpb25zID0ge1xuICAuLi5pY29uSXRlbS5nZXROZXdPcHRpb25zKCksXG4gIHR5cGU6IGljb25JdGVtLmlkLFxuICBuYW1lOiBgRWxlbWVudCAxYCxcbn07XG5cbmV4cG9ydCBjb25zdCBjYW52YXNFbGVtZW50UmVnaXN0cnkgPSBuZXcgUmVnaXN0cnk8Q2FudmFzRWxlbWVudEl0ZW0+KCgpID0+IFtcbiAgaWNvbkl0ZW0sIC8vIGRlZmF1bHQgZm9yIG5vd1xuICB0ZXh0Qm94SXRlbSxcbiAgYnV0dG9uSXRlbSxcbiAgZHJvbmVUb3BJdGVtLFxuICBkcm9uZUZyb250SXRlbSxcbiAgZHJvbmVTaWRlSXRlbSxcbiAgd2luZFR1cmJpbmVJdGVtLFxuXSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9uRHJhZywgT25SZXNpemUgfSBmcm9tICdyZWFjdC1tb3ZlYWJsZS9kZWNsYXJhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IExheWVyRWxlbWVudCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTGF5ZXJzL3R5cGVzJztcbmltcG9ydCB7XG4gIEJhY2tncm91bmRJbWFnZVNpemUsXG4gIENhbnZhc0VsZW1lbnRJdGVtLFxuICBDYW52YXNFbGVtZW50T3B0aW9ucyxcbiAgY2FudmFzRWxlbWVudFJlZ2lzdHJ5LFxufSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzJztcbmltcG9ydCB7IG5vdEZvdW5kSXRlbSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvbm90Rm91bmQnO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcblxuaW1wb3J0IHsgSG9yaXpvbnRhbENvbnN0cmFpbnQsIFBsYWNlbWVudCwgVmVydGljYWxDb25zdHJhaW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBGcmFtZVN0YXRlIH0gZnJvbSAnLi9mcmFtZSc7XG5pbXBvcnQgeyBSb290RWxlbWVudCB9IGZyb20gJy4vcm9vdCc7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xuXG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50U3RhdGUgaW1wbGVtZW50cyBMYXllckVsZW1lbnQge1xuICAvLyBVSUQgbmVjZXNzYXJ5IGZvciBtb3ZlYWJsZSB0byB3b3JrIChmb3Igbm93KVxuICByZWFkb25seSBVSUQgPSBjb3VudGVyKys7XG4gIHJldklkID0gMDtcbiAgc2l6ZVN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge307XG4gIGRhdGFTdHlsZTogQ1NTUHJvcGVydGllcyA9IHt9O1xuXG4gIC8vIEZpbGxlZCBpbiBieSByZWZcbiAgZGl2PzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgLy8gQ2FsY3VsYXRlZFxuICBkYXRhPzogYW55OyAvLyBkZXBlbmRzIG9uIHRoZSB0eXBlXG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IENhbnZhc0VsZW1lbnRJdGVtLCBwdWJsaWMgb3B0aW9uczogQ2FudmFzRWxlbWVudE9wdGlvbnMsIHB1YmxpYyBwYXJlbnQ/OiBGcmFtZVN0YXRlKSB7XG4gICAgY29uc3QgZmFsbGJhY2tOYW1lID0gYEVsZW1lbnQgJHtEYXRlLm5vdygpfWA7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7IHR5cGU6IGl0ZW0uaWQsIG5hbWU6IGZhbGxiYWNrTmFtZSB9O1xuICAgIH1cblxuICAgIG9wdGlvbnMuY29uc3RyYWludCA9IG9wdGlvbnMuY29uc3RyYWludCA/PyB7XG4gICAgICB2ZXJ0aWNhbDogVmVydGljYWxDb25zdHJhaW50LlRvcCxcbiAgICAgIGhvcml6b250YWw6IEhvcml6b250YWxDb25zdHJhaW50LkxlZnQsXG4gICAgfTtcbiAgICBvcHRpb25zLnBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50ID8/IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHRvcDogMCwgbGVmdDogMCB9O1xuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5nZXRTY2VuZSgpO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICBjb25zdCBuZXdOYW1lID0gc2NlbmU/LmdldE5leHRFbGVtZW50TmFtZSgpO1xuICAgICAgb3B0aW9ucy5uYW1lID0gbmV3TmFtZSA/PyBmYWxsYmFja05hbWU7XG4gICAgfVxuICAgIHNjZW5lPy5ieU5hbWUuc2V0KG9wdGlvbnMubmFtZSwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjZW5lKCk6IFNjZW5lIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgdHJhdiA9IHRoaXMucGFyZW50O1xuICAgIHdoaWxlICh0cmF2KSB7XG4gICAgICBpZiAodHJhdi5pc1Jvb3QoKSkge1xuICAgICAgICByZXR1cm4gdHJhdi5zY2VuZTtcbiAgICAgIH1cbiAgICAgIHRyYXYgPSB0cmF2LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hbWU7XG4gIH1cblxuICAvKiogVXNlIHRoZSBjb25maWd1cmVkIG9wdGlvbnMgdG8gdXBkYXRlIENTUyBzdHlsZSBwcm9wZXJ0aWVzIGRpcmVjdGx5IG9uIHRoZSB3cmFwcGVyIGRpdiAqKi9cbiAgYXBwbHlMYXlvdXRTdHlsZXNUb0RpdigpIHtcbiAgICBpZiAodGhpcy5pc1Jvb3QoKSkge1xuICAgICAgLy8gUm9vdCBzdXBlcnNlZGVzIGxheW91dCBlbmdpbmUgYW5kIGlzIGFsd2F5cyAxMDAlIHdpZHRoICsgaGVpZ2h0IG9mIHBhbmVsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb25zdHJhaW50IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9ID0gY29uc3RyYWludCA/PyB7fTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID8/ICh7fSBhcyBQbGFjZW1lbnQpO1xuXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgdHJhbnNsYXRlID0gWycwcHgnLCAnMHB4J107XG5cbiAgICBzd2l0Y2ggKHZlcnRpY2FsKSB7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Ub3A6XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSBwbGFjZW1lbnQudG9wID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBwbGFjZW1lbnQuaGVpZ2h0ID8/IDEwMDtcbiAgICAgICAgc3R5bGUudG9wID0gYCR7cGxhY2VtZW50LnRvcH1weGA7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudC5oZWlnaHR9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LmJvdHRvbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Cb3R0b206XG4gICAgICAgIHBsYWNlbWVudC5ib3R0b20gPSBwbGFjZW1lbnQuYm90dG9tID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBwbGFjZW1lbnQuaGVpZ2h0ID8/IDEwMDtcbiAgICAgICAgc3R5bGUuYm90dG9tID0gYCR7cGxhY2VtZW50LmJvdHRvbX1weGA7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudC5oZWlnaHR9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Ub3BCb3R0b206XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSBwbGFjZW1lbnQudG9wID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC5ib3R0b20gPSBwbGFjZW1lbnQuYm90dG9tID8/IDA7XG4gICAgICAgIHN0eWxlLnRvcCA9IGAke3BsYWNlbWVudC50b3B9cHhgO1xuICAgICAgICBzdHlsZS5ib3R0b20gPSBgJHtwbGFjZW1lbnQuYm90dG9tfXB4YDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuQ2VudGVyOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcGxhY2VtZW50LnRvcCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gcGxhY2VtZW50LmhlaWdodCA/PyAxMDA7XG4gICAgICAgIHRyYW5zbGF0ZVsxXSA9ICctNTAlJztcbiAgICAgICAgc3R5bGUudG9wID0gYGNhbGMoNTAlIC0gJHtwbGFjZW1lbnQudG9wfXB4KWA7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudC5oZWlnaHR9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LmJvdHRvbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5TY2FsZTpcbiAgICAgICAgcGxhY2VtZW50LnRvcCA9IHBsYWNlbWVudC50b3AgPz8gMDtcbiAgICAgICAgcGxhY2VtZW50LmJvdHRvbSA9IHBsYWNlbWVudC5ib3R0b20gPz8gMDtcbiAgICAgICAgc3R5bGUudG9wID0gYCR7cGxhY2VtZW50LnRvcH0lYDtcbiAgICAgICAgc3R5bGUuYm90dG9tID0gYCR7cGxhY2VtZW50LmJvdHRvbX0lYDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5MZWZ0OlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHBsYWNlbWVudC5sZWZ0ID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHBsYWNlbWVudC53aWR0aCA/PyAxMDA7XG4gICAgICAgIHN0eWxlLmxlZnQgPSBgJHtwbGFjZW1lbnQubGVmdH1weGA7XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC5yaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhvcml6b250YWxDb25zdHJhaW50LlJpZ2h0OlxuICAgICAgICBwbGFjZW1lbnQucmlnaHQgPSBwbGFjZW1lbnQucmlnaHQgPz8gMDtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoID0gcGxhY2VtZW50LndpZHRoID8/IDEwMDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke3BsYWNlbWVudC53aWR0aH1weGA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhvcml6b250YWxDb25zdHJhaW50LkxlZnRSaWdodDpcbiAgICAgICAgcGxhY2VtZW50LmxlZnQgPSBwbGFjZW1lbnQubGVmdCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQucmlnaHQgPSBwbGFjZW1lbnQucmlnaHQgPz8gMDtcbiAgICAgICAgc3R5bGUubGVmdCA9IGAke3BsYWNlbWVudC5sZWZ0fXB4YDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LndpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuQ2VudGVyOlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHBsYWNlbWVudC5sZWZ0ID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHBsYWNlbWVudC53aWR0aCA/PyAxMDA7XG4gICAgICAgIHRyYW5zbGF0ZVswXSA9ICctNTAlJztcbiAgICAgICAgc3R5bGUubGVmdCA9IGBjYWxjKDUwJSAtICR7cGxhY2VtZW50LmxlZnR9cHgpYDtcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQud2lkdGh9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LnJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuU2NhbGU6XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ID0gcGxhY2VtZW50LmxlZnQgPz8gMDtcbiAgICAgICAgcGxhY2VtZW50LnJpZ2h0ID0gcGxhY2VtZW50LnJpZ2h0ID8/IDA7XG4gICAgICAgIHN0eWxlLmxlZnQgPSBgJHtwbGFjZW1lbnQubGVmdH0lYDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9JWA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVbMF19LCAke3RyYW5zbGF0ZVsxXX0pYDtcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIHRoaXMuc2l6ZVN0eWxlID0gc3R5bGU7XG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNpemVTdHlsZSkge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZVtrZXkgYXMgYW55XSA9ICh0aGlzLnNpemVTdHlsZSBhcyBhbnkpW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YVN0eWxlKSB7XG4gICAgICAgIHRoaXMuZGl2LnN0eWxlW2tleSBhcyBhbnldID0gKHRoaXMuZGF0YVN0eWxlIGFzIGFueSlba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQbGFjZW1lbnRGcm9tQ29uc3RyYWludChlbGVtZW50Q29udGFpbmVyPzogRE9NUmVjdCwgcGFyZW50Q29udGFpbmVyPzogRE9NUmVjdCkge1xuICAgIGNvbnN0IHsgY29uc3RyYWludCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgdmVydGljYWwsIGhvcml6b250YWwgfSA9IGNvbnN0cmFpbnQgPz8ge307XG5cbiAgICBpZiAoIWVsZW1lbnRDb250YWluZXIpIHtcbiAgICAgIGVsZW1lbnRDb250YWluZXIgPSB0aGlzLmRpdiAmJiB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRDb250YWluZXIpIHtcbiAgICAgIHBhcmVudENvbnRhaW5lciA9IHRoaXMuZGl2ICYmIHRoaXMuZGl2LnBhcmVudEVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aXZlVG9wID1cbiAgICAgIGVsZW1lbnRDb250YWluZXIgJiYgcGFyZW50Q29udGFpbmVyID8gTWF0aC5hYnMoTWF0aC5yb3VuZChlbGVtZW50Q29udGFpbmVyLnRvcCAtIHBhcmVudENvbnRhaW5lci50b3ApKSA6IDA7XG4gICAgY29uc3QgcmVsYXRpdmVCb3R0b20gPVxuICAgICAgZWxlbWVudENvbnRhaW5lciAmJiBwYXJlbnRDb250YWluZXIgPyBNYXRoLmFicyhNYXRoLnJvdW5kKGVsZW1lbnRDb250YWluZXIuYm90dG9tIC0gcGFyZW50Q29udGFpbmVyLmJvdHRvbSkpIDogMDtcbiAgICBjb25zdCByZWxhdGl2ZUxlZnQgPVxuICAgICAgZWxlbWVudENvbnRhaW5lciAmJiBwYXJlbnRDb250YWluZXIgPyBNYXRoLmFicyhNYXRoLnJvdW5kKGVsZW1lbnRDb250YWluZXIubGVmdCAtIHBhcmVudENvbnRhaW5lci5sZWZ0KSkgOiAwO1xuICAgIGNvbnN0IHJlbGF0aXZlUmlnaHQgPVxuICAgICAgZWxlbWVudENvbnRhaW5lciAmJiBwYXJlbnRDb250YWluZXIgPyBNYXRoLmFicyhNYXRoLnJvdW5kKGVsZW1lbnRDb250YWluZXIucmlnaHQgLSBwYXJlbnRDb250YWluZXIucmlnaHQpKSA6IDA7XG5cbiAgICBjb25zdCBwbGFjZW1lbnQgPSB7fSBhcyBQbGFjZW1lbnQ7XG5cbiAgICBjb25zdCB3aWR0aCA9IGVsZW1lbnRDb250YWluZXI/LndpZHRoID8/IDEwMDtcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50Q29udGFpbmVyPy5oZWlnaHQgPz8gMTAwO1xuXG4gICAgc3dpdGNoICh2ZXJ0aWNhbCkge1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuVG9wOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcmVsYXRpdmVUb3A7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuQm90dG9tOlxuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gcmVsYXRpdmVCb3R0b207XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuVG9wQm90dG9tOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcmVsYXRpdmVUb3A7XG4gICAgICAgIHBsYWNlbWVudC5ib3R0b20gPSByZWxhdGl2ZUJvdHRvbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5DZW50ZXI6XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDZW50ZXIgPSBlbGVtZW50Q29udGFpbmVyID8gcmVsYXRpdmVUb3AgKyBoZWlnaHQgLyAyIDogMDtcbiAgICAgICAgY29uc3QgcGFyZW50Q2VudGVyID0gcGFyZW50Q29udGFpbmVyID8gcGFyZW50Q29udGFpbmVyLmhlaWdodCAvIDIgOiAwO1xuICAgICAgICBjb25zdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBwYXJlbnRDZW50ZXIgLSBlbGVtZW50Q2VudGVyO1xuICAgICAgICBwbGFjZW1lbnQudG9wID0gZGlzdGFuY2VGcm9tQ2VudGVyO1xuICAgICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmVydGljYWxDb25zdHJhaW50LlNjYWxlOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gKHJlbGF0aXZlVG9wIC8gKHBhcmVudENvbnRhaW5lcj8uaGVpZ2h0ID8/IGhlaWdodCkpICogMTAwO1xuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gKHJlbGF0aXZlQm90dG9tIC8gKHBhcmVudENvbnRhaW5lcj8uaGVpZ2h0ID8/IGhlaWdodCkpICogMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGhvcml6b250YWwpIHtcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuTGVmdDpcbiAgICAgICAgcGxhY2VtZW50LmxlZnQgPSByZWxhdGl2ZUxlZnQ7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuUmlnaHQ6XG4gICAgICAgIHBsYWNlbWVudC5yaWdodCA9IHJlbGF0aXZlUmlnaHQ7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuTGVmdFJpZ2h0OlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHJlbGF0aXZlTGVmdDtcbiAgICAgICAgcGxhY2VtZW50LnJpZ2h0ID0gcmVsYXRpdmVSaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhvcml6b250YWxDb25zdHJhaW50LkNlbnRlcjpcbiAgICAgICAgY29uc3QgZWxlbWVudENlbnRlciA9IGVsZW1lbnRDb250YWluZXIgPyByZWxhdGl2ZUxlZnQgKyB3aWR0aCAvIDIgOiAwO1xuICAgICAgICBjb25zdCBwYXJlbnRDZW50ZXIgPSBwYXJlbnRDb250YWluZXIgPyBwYXJlbnRDb250YWluZXIud2lkdGggLyAyIDogMDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VGcm9tQ2VudGVyID0gcGFyZW50Q2VudGVyIC0gZWxlbWVudENlbnRlcjtcbiAgICAgICAgcGxhY2VtZW50LmxlZnQgPSBkaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuU2NhbGU6XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ID0gKHJlbGF0aXZlTGVmdCAvIChwYXJlbnRDb250YWluZXI/LndpZHRoID8/IHdpZHRoKSkgKiAxMDA7XG4gICAgICAgIHBsYWNlbWVudC5yaWdodCA9IChyZWxhdGl2ZVJpZ2h0IC8gKHBhcmVudENvbnRhaW5lcj8ud2lkdGggPz8gd2lkdGgpKSAqIDEwMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcblxuICAgIHRoaXMuYXBwbHlMYXlvdXRTdHlsZXNUb0RpdigpO1xuICAgIHRoaXMucmV2SWQrKztcbiAgfVxuXG4gIHVwZGF0ZURhdGEoY3R4OiBEaW1lbnNpb25Db250ZXh0KSB7XG4gICAgaWYgKHRoaXMuaXRlbS5wcmVwYXJlRGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5pdGVtLnByZXBhcmVEYXRhKGN0eCwgdGhpcy5vcHRpb25zLmNvbmZpZyk7XG4gICAgICB0aGlzLnJldklkKys7IC8vIHJlcmVuZGVyXG4gICAgfVxuXG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kLCBib3JkZXIgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBjc3M6IENTU1Byb3BlcnRpZXMgPSB7fTtcbiAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgaWYgKGJhY2tncm91bmQuY29sb3IpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBjdHguZ2V0Q29sb3IoYmFja2dyb3VuZC5jb2xvcik7XG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci52YWx1ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tncm91bmQuaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjdHguZ2V0UmVzb3VyY2UoYmFja2dyb3VuZC5pbWFnZSk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgIGNvbnN0IHYgPSBpbWFnZS52YWx1ZSgpO1xuICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICBjc3MuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7dn1cIilgO1xuICAgICAgICAgICAgc3dpdGNoIChiYWNrZ3JvdW5kLnNpemUgPz8gQmFja2dyb3VuZEltYWdlU2l6ZS5Db250YWluKSB7XG4gICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZEltYWdlU2l6ZS5Db250YWluOlxuICAgICAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuQ292ZXI6XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuT3JpZ2luYWw6XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kSW1hZ2VTaXplLlRpbGU6XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRSZXBlYXQgPSAncmVwZWF0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kSW1hZ2VTaXplLkZpbGw6XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRTaXplID0gJzEwMCUgMTAwJSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJvcmRlciAmJiBib3JkZXIuY29sb3IgJiYgYm9yZGVyLndpZHRoKSB7XG4gICAgICBjb25zdCBjb2xvciA9IGN0eC5nZXRDb2xvcihib3JkZXIuY29sb3IpO1xuICAgICAgY3NzLmJvcmRlcldpZHRoID0gYm9yZGVyLndpZHRoO1xuICAgICAgY3NzLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgICAgIGNzcy5ib3JkZXJDb2xvciA9IGNvbG9yLnZhbHVlKCk7XG5cbiAgICAgIC8vIE1vdmUgdGhlIGltYWdlIHRvIGluc2lkZSB0aGUgYm9yZGVyXG4gICAgICBpZiAoY3NzLmJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICBjc3MuYmFja2dyb3VuZE9yaWdpbiA9ICdwYWRkaW5nLWJveCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU3R5bGUgPSBjc3M7XG4gICAgdGhpcy5hcHBseUxheW91dFN0eWxlc1RvRGl2KCk7XG4gIH1cblxuICBpc1Jvb3QoKTogdGhpcyBpcyBSb290RWxlbWVudCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIFJlY3Vyc2l2ZWx5IHZpc2l0IGFsbCBub2RlcyAqL1xuICB2aXNpdCh2aXNpdG9yOiAodjogRWxlbWVudFN0YXRlKSA9PiB2b2lkKSB7XG4gICAgdmlzaXRvcih0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKG9wdGlvbnM6IENhbnZhc0VsZW1lbnRPcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuaXRlbS5pZCAhPT0gb3B0aW9ucy50eXBlKSB7XG4gICAgICB0aGlzLml0ZW0gPSBjYW52YXNFbGVtZW50UmVnaXN0cnkuZ2V0SWZFeGlzdHMob3B0aW9ucy50eXBlKSA/PyBub3RGb3VuZEl0ZW07XG4gICAgfVxuXG4gICAgLy8gcmVuYW1lIGhhbmRsaW5nXG4gICAgY29uc3Qgb2xkTmFtZSA9IHRoaXMub3B0aW9ucy5uYW1lO1xuICAgIGNvbnN0IG5ld05hbWUgPSBvcHRpb25zLm5hbWU7XG5cbiAgICB0aGlzLnJldklkKys7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gICAgbGV0IHRyYXYgPSB0aGlzLnBhcmVudDtcbiAgICB3aGlsZSAodHJhdikge1xuICAgICAgaWYgKHRyYXYuaXNSb290KCkpIHtcbiAgICAgICAgdHJhdi5zY2VuZS5zYXZlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdHJhdi5yZXZJZCsrO1xuICAgICAgdHJhdiA9IHRyYXYucGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5nZXRTY2VuZSgpO1xuICAgIGlmIChvbGROYW1lICE9PSBuZXdOYW1lICYmIHNjZW5lKSB7XG4gICAgICBzY2VuZS5ieU5hbWUuZGVsZXRlKG9sZE5hbWUpO1xuICAgICAgc2NlbmUuYnlOYW1lLnNldChuZXdOYW1lLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBnZXRTYXZlTW9kZWwoKSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5vcHRpb25zIH07XG4gIH1cblxuICBpbml0RWxlbWVudCA9ICh0YXJnZXQ6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kaXYgPSB0YXJnZXQ7XG4gICAgdGhpcy5hcHBseUxheW91dFN0eWxlc1RvRGl2KCk7XG4gIH07XG5cbiAgYXBwbHlEcmFnID0gKGV2ZW50OiBPbkRyYWcpID0+IHtcbiAgICBldmVudC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gZXZlbnQudHJhbnNmb3JtO1xuICB9O1xuXG4gIC8vIGtpbmRhIGxpa2U6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFmYW5hL2dyYWZhbmEtZWRnZS1hcHAvYmxvYi9tYWluL3NyYy9wYW5lbHMvZHJhdy9XcmFwSXRlbS50c3gjTDQ0XG4gIGFwcGx5UmVzaXplID0gKGV2ZW50OiBPblJlc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcztcbiAgICBjb25zdCB7IHBsYWNlbWVudCwgY29uc3RyYWludCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IHZlcnRpY2FsLCBob3Jpem9udGFsIH0gPSBjb25zdHJhaW50ID8/IHt9O1xuXG4gICAgY29uc3QgdG9wID0gdmVydGljYWwgPT09IFZlcnRpY2FsQ29uc3RyYWludC5Ub3AgfHwgdmVydGljYWwgPT09IFZlcnRpY2FsQ29uc3RyYWludC5Ub3BCb3R0b207XG4gICAgY29uc3QgYm90dG9tID0gdmVydGljYWwgPT09IFZlcnRpY2FsQ29uc3RyYWludC5Cb3R0b20gfHwgdmVydGljYWwgPT09IFZlcnRpY2FsQ29uc3RyYWludC5Ub3BCb3R0b207XG4gICAgY29uc3QgbGVmdCA9IGhvcml6b250YWwgPT09IEhvcml6b250YWxDb25zdHJhaW50LkxlZnQgfHwgaG9yaXpvbnRhbCA9PT0gSG9yaXpvbnRhbENvbnN0cmFpbnQuTGVmdFJpZ2h0O1xuICAgIGNvbnN0IHJpZ2h0ID0gaG9yaXpvbnRhbCA9PT0gSG9yaXpvbnRhbENvbnN0cmFpbnQuUmlnaHQgfHwgaG9yaXpvbnRhbCA9PT0gSG9yaXpvbnRhbENvbnN0cmFpbnQuTGVmdFJpZ2h0O1xuXG4gICAgY29uc3Qgc3R5bGUgPSBldmVudC50YXJnZXQuc3R5bGU7XG4gICAgY29uc3QgZGVsdGFYID0gZXZlbnQuZGVsdGFbMF07XG4gICAgY29uc3QgZGVsdGFZID0gZXZlbnQuZGVsdGFbMV07XG4gICAgY29uc3QgZGlyTFIgPSBldmVudC5kaXJlY3Rpb25bMF07XG4gICAgY29uc3QgZGlyVEIgPSBldmVudC5kaXJlY3Rpb25bMV07XG4gICAgaWYgKGRpckxSID09PSAxKSB7XG4gICAgICAvLyBSSUdIVFxuICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgIHBsYWNlbWVudCEucmlnaHQhIC09IGRlbHRhWDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQhLnJpZ2h0fXB4YDtcbiAgICAgICAgaWYgKCFsZWZ0KSB7XG4gICAgICAgICAgcGxhY2VtZW50IS53aWR0aCA9IGV2ZW50LndpZHRoO1xuICAgICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50IS53aWR0aH1weGA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudCEud2lkdGghID0gZXZlbnQud2lkdGg7XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50IS53aWR0aH1weGA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJMUiA9PT0gLTEpIHtcbiAgICAgIC8vIExFRlRcbiAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgIHBsYWNlbWVudCEubGVmdCEgLT0gZGVsdGFYO1xuICAgICAgICBwbGFjZW1lbnQhLndpZHRoISA9IGV2ZW50LndpZHRoO1xuICAgICAgICBzdHlsZS5sZWZ0ID0gYCR7cGxhY2VtZW50IS5sZWZ0fXB4YDtcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQhLndpZHRofXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudCEud2lkdGghICs9IGRlbHRhWDtcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQhLndpZHRofXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyVEIgPT09IC0xKSB7XG4gICAgICAvLyBUT1BcbiAgICAgIGlmICh0b3ApIHtcbiAgICAgICAgcGxhY2VtZW50IS50b3AhIC09IGRlbHRhWTtcbiAgICAgICAgcGxhY2VtZW50IS5oZWlnaHQgPSBldmVudC5oZWlnaHQ7XG4gICAgICAgIHN0eWxlLnRvcCA9IGAke3BsYWNlbWVudCEudG9wfXB4YDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50IS5oZWlnaHR9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhY2VtZW50IS5oZWlnaHQgPSBldmVudC5oZWlnaHQ7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudCEuaGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpclRCID09PSAxKSB7XG4gICAgICAvLyBCT1RUT01cbiAgICAgIGlmIChib3R0b20pIHtcbiAgICAgICAgcGxhY2VtZW50IS5ib3R0b20hIC09IGRlbHRhWTtcbiAgICAgICAgcGxhY2VtZW50IS5oZWlnaHQhID0gZXZlbnQuaGVpZ2h0O1xuICAgICAgICBzdHlsZS5ib3R0b20gPSBgJHtwbGFjZW1lbnQhLmJvdHRvbX1weGA7XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3BsYWNlbWVudCEuaGVpZ2h0fXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlbWVudCEuaGVpZ2h0ISA9IGV2ZW50LmhlaWdodDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50IS5oZWlnaHR9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtIH0gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17dGhpcy5VSUR9IHJlZj17dGhpcy5pbml0RWxlbWVudH0+XG4gICAgICAgIDxpdGVtLmRpc3BsYXkga2V5PXtgJHt0aGlzLlVJRH0vJHt0aGlzLnJldklkfWB9IGNvbmZpZz17dGhpcy5vcHRpb25zLmNvbmZpZ30gZGF0YT17dGhpcy5kYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25Db25maWcsIFJlc291cmNlRGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlbWVudCB7XG4gIHRvcD86IG51bWJlcjtcbiAgbGVmdD86IG51bWJlcjtcbiAgcmlnaHQ/OiBudW1iZXI7XG4gIGJvdHRvbT86IG51bWJlcjtcblxuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN0cmFpbnQge1xuICBob3Jpem9udGFsPzogSG9yaXpvbnRhbENvbnN0cmFpbnQ7XG4gIHZlcnRpY2FsPzogVmVydGljYWxDb25zdHJhaW50O1xufVxuXG5leHBvcnQgZW51bSBIb3Jpem9udGFsQ29uc3RyYWludCB7XG4gIExlZnQgPSAnbGVmdCcsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgTGVmdFJpZ2h0ID0gJ2xlZnRyaWdodCcsXG4gIENlbnRlciA9ICdjZW50ZXInLFxuICBTY2FsZSA9ICdzY2FsZScsXG59XG5cbmV4cG9ydCBlbnVtIFZlcnRpY2FsQ29uc3RyYWludCB7XG4gIFRvcCA9ICd0b3AnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgVG9wQm90dG9tID0gJ3RvcGJvdHRvbScsXG4gIENlbnRlciA9ICdjZW50ZXInLFxuICBTY2FsZSA9ICdzY2FsZScsXG59XG5cbmV4cG9ydCBlbnVtIEJhY2tncm91bmRJbWFnZVNpemUge1xuICBPcmlnaW5hbCA9ICdvcmlnaW5hbCcsXG4gIENvbnRhaW4gPSAnY29udGFpbicsXG4gIENvdmVyID0gJ2NvdmVyJyxcbiAgRmlsbCA9ICdmaWxsJyxcbiAgVGlsZSA9ICd0aWxlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kQ29uZmlnIHtcbiAgY29sb3I/OiBDb2xvckRpbWVuc2lvbkNvbmZpZztcbiAgaW1hZ2U/OiBSZXNvdXJjZURpbWVuc2lvbkNvbmZpZztcbiAgc2l6ZT86IEJhY2tncm91bmRJbWFnZVNpemU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNvbmZpZyB7XG4gIGNvbG9yPzogQ29sb3JEaW1lbnNpb25Db25maWc7XG4gIHdpZHRoPzogbnVtYmVyO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwRXZlbnRzLCBTdGFuZGFyZEVkaXRvclByb3BzLCBTdGFuZGFyZEVkaXRvcnNSZWdpc3RyeUl0ZW0sIFN0cmluZ0ZpZWxkQ29uZmlnU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIEpTT05Gb3JtYXR0ZXIsIFN0cmluZ1ZhbHVlRWRpdG9yIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgYXBwRXZlbnRzIH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJRWRpdG9yQ29uZmlnIHtcbiAgZW5kcG9pbnQ6IHN0cmluZztcbiAgZGF0YT86IHN0cmluZztcbn1cblxuY29uc3QgZHVtbXlTdHJpbmdTZXR0aW5nczogU3RhbmRhcmRFZGl0b3JzUmVnaXN0cnlJdGVtPHN0cmluZywgU3RyaW5nRmllbGRDb25maWdTZXR0aW5ncz4gPSB7XG4gIHNldHRpbmdzOiB7fSxcbn0gYXMgYW55O1xuXG5leHBvcnQgY29uc3QgY2FsbEFwaSA9IChhcGk6IEFQSUVkaXRvckNvbmZpZywgaXNUZXN0ID0gZmFsc2UpID0+IHtcbiAgaWYgKGFwaSkge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmZldGNoKHtcbiAgICAgICAgdXJsOiBhcGkuZW5kcG9pbnQhLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogYXBpLmRhdGEgPz8ge30sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIGVycm9yOiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc1Rlc3QpIHtcbiAgICAgICAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydEVycm9yLCBbJ0Vycm9yIGhhcyBvY2N1cnJlZDogJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVGVzdCkge1xuICAgICAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgWydUZXN0IHN1Y2Nlc3NmdWwnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBUElFZGl0b3I6IEZDPFN0YW5kYXJkRWRpdG9yUHJvcHM8QVBJRWRpdG9yQ29uZmlnLCBhbnksIGFueT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUsIGNvbnRleHQsIG9uQ2hhbmdlIH0gPSBwcm9wcztcbiAgY29uc3QgbGFiZWxXaWR0aCA9IDk7XG5cbiAgY29uc3Qgb25FbmRwb2ludENoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlbmRwb2ludCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgZW5kcG9pbnQsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgdmFsdWVdXG4gICk7XG5cbiAgY29uc3Qgb25EYXRhQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4udmFsdWUsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgdmFsdWVdXG4gICk7XG5cbiAgY29uc3QgcmVuZGVySlNPTiA9IChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICByZXR1cm4gPEpTT05Gb3JtYXR0ZXIganNvbj17anNvbn0gLz47XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBgSW52YWxpZCBKU09OIHByb3ZpZGVkOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGVzdEFQSUJ1dHRvbiA9IChhcGk6IEFQSUVkaXRvckNvbmZpZykgPT4ge1xuICAgIGlmIChhcGkgJiYgYXBpLmVuZHBvaW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNhbGxBcGkoYXBpLCB0cnVlKX0gdGl0bGU9eydUZXN0IEFQSSd9PlxuICAgICAgICAgIFRlc3QgQVBJXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIGNvbmZpZy5kaXNhYmxlU2FuaXRpemVIdG1sID8gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17J0VuZHBvaW50J30gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0gZ3Jvdz17dHJ1ZX0+XG4gICAgICAgICAgPFN0cmluZ1ZhbHVlRWRpdG9yXG4gICAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPy5lbmRwb2ludH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkVuZHBvaW50Q2hhbmdlfVxuICAgICAgICAgICAgaXRlbT17ZHVtbXlTdHJpbmdTZXR0aW5nc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnRGF0YSd9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9IGdyb3c9e3RydWV9PlxuICAgICAgICAgIDxTdHJpbmdWYWx1ZUVkaXRvclxuICAgICAgICAgICAgY29udGV4dD17Y29udGV4dH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT8uZGF0YSA/PyAne30nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRGF0YUNoYW5nZX1cbiAgICAgICAgICAgIGl0ZW09e2R1bW15U3RyaW5nU2V0dGluZ3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICB7cmVuZGVyVGVzdEFQSUJ1dHRvbih2YWx1ZSl9XG4gICAgICA8YnIgLz5cbiAgICAgIHtyZW5kZXJKU09OKHZhbHVlPy5kYXRhID8/ICd7fScpfVxuICAgIDwvPlxuICApIDogKFxuICAgIDw+TXVzdCBlbmFibGUgZGlzYWJsZVNhbml0aXplSHRtbCBmZWF0dXJlIGZsYWcgdG8gYWNjZXNzPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgUGFuZWxPcHRpb25zU3VwcGxpZXIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhL3NyYy9wYW5lbC9QYW5lbFBsdWdpbic7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2VTaXplLCBDYW52YXNFbGVtZW50T3B0aW9ucyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25FZGl0b3IsIFJlc291cmNlRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5cbmludGVyZmFjZSBPcHRpb25TdXBwbGllcnMge1xuICBhZGRCYWNrZ3JvdW5kOiBQYW5lbE9wdGlvbnNTdXBwbGllcjxDYW52YXNFbGVtZW50T3B0aW9ucz47XG4gIGFkZEJvcmRlcjogUGFuZWxPcHRpb25zU3VwcGxpZXI8Q2FudmFzRWxlbWVudE9wdGlvbnM+O1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uQnVpbGRlcjogT3B0aW9uU3VwcGxpZXJzID0ge1xuICBhZGRCYWNrZ3JvdW5kOiAoYnVpbGRlciwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydCYWNrZ3JvdW5kJ107XG4gICAgYnVpbGRlclxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2JhY2tncm91bmQuY29sb3InLFxuICAgICAgICBwYXRoOiAnYmFja2dyb3VuZC5jb2xvcicsXG4gICAgICAgIG5hbWU6ICdDb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgLy8gQ29uZmlndXJlZCB2YWx1ZXNcbiAgICAgICAgICBmaXhlZDogJycsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2JhY2tncm91bmQuaW1hZ2UnLFxuICAgICAgICBwYXRoOiAnYmFja2dyb3VuZC5pbWFnZScsXG4gICAgICAgIG5hbWU6ICdJbWFnZScsXG4gICAgICAgIGVkaXRvcjogUmVzb3VyY2VEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcmVzb3VyY2VUeXBlOiAnaW1hZ2UnLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGRSYWRpbyh7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwYXRoOiAnYmFja2dyb3VuZC5zaXplJyxcbiAgICAgICAgbmFtZTogJ0ltYWdlIHNpemUnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuT3JpZ2luYWwsIGxhYmVsOiAnT3JpZ2luYWwnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvbnRhaW4sIGxhYmVsOiAnQ29udGFpbicgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuQ292ZXIsIGxhYmVsOiAnQ292ZXInIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBCYWNrZ3JvdW5kSW1hZ2VTaXplLkZpbGwsIGxhYmVsOiAnRmlsbCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuVGlsZSwgbGFiZWw6ICdUaWxlJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5Db3ZlcixcbiAgICAgIH0pO1xuICB9LFxuXG4gIGFkZEJvcmRlcjogKGJ1aWxkZXIsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnQm9yZGVyJ107XG4gICAgYnVpbGRlci5hZGRTbGlkZXJJbnB1dCh7XG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHBhdGg6ICdib3JkZXIud2lkdGgnLFxuICAgICAgbmFtZTogJ1dpZHRoJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMixcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAyMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoY29udGV4dC5vcHRpb25zPy5ib3JkZXI/LndpZHRoKSB7XG4gICAgICBidWlsZGVyLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2JvcmRlci5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdib3JkZXIuY29sb3InLFxuICAgICAgICBuYW1lOiAnQ29sb3InLFxuICAgICAgICBlZGl0b3I6IENvbG9yRGltZW5zaW9uRWRpdG9yLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgICAgIC8vIENvbmZpZ3VyZWQgdmFsdWVzXG4gICAgICAgICAgZml4ZWQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBhbmVsUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxDb25zdHJhaW50LCBWZXJ0aWNhbENvbnN0cmFpbnQgfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzJztcbmltcG9ydCB7IGljb25JdGVtIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9pY29uJztcbmltcG9ydCB7IEVsZW1lbnRTdGF0ZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvcnVudGltZS9lbGVtZW50JztcbmltcG9ydCB7XG4gIENvbG9yRGltZW5zaW9uQ29uZmlnLFxuICBEaW1lbnNpb25Db250ZXh0LFxuICBnZXRDb2xvckRpbWVuc2lvbkZyb21EYXRhLFxuICBnZXRSZXNvdXJjZURpbWVuc2lvbkZyb21EYXRhLFxuICBnZXRTY2FsYXJEaW1lbnNpb25Gcm9tRGF0YSxcbiAgZ2V0U2NhbGVEaW1lbnNpb25Gcm9tRGF0YSxcbiAgZ2V0VGV4dERpbWVuc2lvbkZyb21EYXRhLFxuICBSZXNvdXJjZURpbWVuc2lvbkNvbmZpZyxcbiAgU2NhbGFyRGltZW5zaW9uQ29uZmlnLFxuICBTY2FsZURpbWVuc2lvbkNvbmZpZyxcbiAgVGV4dERpbWVuc2lvbkNvbmZpZyxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMnO1xuXG5pbXBvcnQgeyBQYW5lbE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy5nZW4nO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQYW5lbFByb3BzPFBhbmVsT3B0aW9ucz4ge31cblxuZXhwb3J0IGNsYXNzIEljb25QYW5lbCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRTdGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5pbml0RWxlbWVudChwcm9wcyk7XG4gIH1cblxuICBpbml0RWxlbWVudCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgRWxlbWVudFN0YXRlKGljb25JdGVtLCBwcm9wcy5vcHRpb25zLnJvb3QgYXMgYW55KTtcbiAgICB0aGlzLnVwZGF0ZVNpemUocHJvcHMpO1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGVEYXRhKHRoaXMuZGltcyk7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfTtcblxuICB1cGRhdGVTaXplID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHM7XG4gICAgdGhpcy5lbGVtZW50Lm9wdGlvbnMuY29uc3RyYWludCA9IHtcbiAgICAgIHZlcnRpY2FsOiBWZXJ0aWNhbENvbnN0cmFpbnQuVG9wLFxuICAgICAgaG9yaXpvbnRhbDogSG9yaXpvbnRhbENvbnN0cmFpbnQuTGVmdCxcbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudC5vcHRpb25zLnBsYWNlbWVudCA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICB9O1xuICB9O1xuXG4gIGRpbXM6IERpbWVuc2lvbkNvbnRleHQgPSB7XG4gICAgZ2V0Q29sb3I6IChjb2xvcjogQ29sb3JEaW1lbnNpb25Db25maWcpID0+IGdldENvbG9yRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCBjb2xvciksXG4gICAgZ2V0U2NhbGU6IChzY2FsZTogU2NhbGVEaW1lbnNpb25Db25maWcpID0+IGdldFNjYWxlRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCBzY2FsZSksXG4gICAgZ2V0U2NhbGFyOiAoc2NhbGFyOiBTY2FsYXJEaW1lbnNpb25Db25maWcpID0+IGdldFNjYWxhckRpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgc2NhbGFyKSxcbiAgICBnZXRUZXh0OiAodGV4dDogVGV4dERpbWVuc2lvbkNvbmZpZykgPT4gZ2V0VGV4dERpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgdGV4dCksXG4gICAgZ2V0UmVzb3VyY2U6IChyZXM6IFJlc291cmNlRGltZW5zaW9uQ29uZmlnKSA9PiBnZXRSZXNvdXJjZURpbWVuc2lvbkZyb21EYXRhKHRoaXMucHJvcHMuZGF0YSwgcmVzKSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHdpZHRoICE9PSBuZXh0UHJvcHMud2lkdGggfHwgaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemUobmV4dFByb3BzKTtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51cGRhdGVEYXRhKHRoaXMuZGltcyk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBSZWxvYWQgdGhlIGVsZW1lbnQgd2hlbiBvcHRpb25zIGNoYW5nZVxuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnM/LnJvb3QgIT09IG5leHRQcm9wcy5vcHRpb25zPy5yb290KSB7XG4gICAgICB0aGlzLmluaXRFbGVtZW50KG5leHRQcm9wcyk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+e3RoaXMuZWxlbWVudC5yZW5kZXIoKX08L2Rpdj47XG4gIH1cbn1cbiIsIi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIE5PVEU6IFRoaXMgZmlsZSB3aWxsIGJlIGF1dG8gZ2VuZXJhdGVkIGZyb20gbW9kZWxzLmN1ZVxuLy8gSXQgaXMgY3VycmVudHkgaGFuZCB3cml0dGVuIGJ1dCB3aWxsIHNlcnZlIGFzIHRoZSB0YXJnZXQgZm9yIGN1ZXRzeVxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50T3B0aW9ucyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMvZWxlbWVudHMvaWNvbic7XG5pbXBvcnQgeyBSZXNvdXJjZURpbWVuc2lvbk1vZGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxPcHRpb25zIHtcbiAgcm9vdDogT21pdDxDYW52YXNFbGVtZW50T3B0aW9uczxJY29uQ29uZmlnPiwgJ3R5cGUnIHwgJ25hbWUnPjsgLy8gdHlwZSBpcyBmb3JjZWRcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYW5lbE9wdGlvbnM6IFBhbmVsT3B0aW9ucyA9IHtcbiAgcm9vdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgcGF0aDoge1xuICAgICAgICBtb2RlOiBSZXNvdXJjZURpbWVuc2lvbk1vZGUuRml4ZWQsXG4gICAgICAgIGZpeGVkOiAnaW1nL2ljb25zL3VuaWNvbnMvYW5hbHlzaXMuc3ZnJyxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7XG4gICAgICAgIGZpeGVkOiAnZ3JlZW4nXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZ1Byb3BlcnR5LCBQYW5lbFBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FudmFzRWxlbWVudE9wdGlvbnMgfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzJztcbmltcG9ydCB7IEljb25Db25maWcsIGljb25JdGVtIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9pY29uJztcblxuaW1wb3J0IHsgb3B0aW9uQnVpbGRlciB9IGZyb20gJy4uL2NhbnZhcy9lZGl0b3Ivb3B0aW9ucyc7XG5cbmltcG9ydCB7IEljb25QYW5lbCB9IGZyb20gJy4vSWNvblBhbmVsJztcbmltcG9ydCB7IGRlZmF1bHRQYW5lbE9wdGlvbnMsIFBhbmVsT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgUGFuZWxQbHVnaW48UGFuZWxPcHRpb25zPihJY29uUGFuZWwpXG4gIC5zZXROb1BhZGRpbmcoKSAvLyBleHRlbmQgdG8gcGFuZWwgZWRnZXNcbiAgLnVzZUZpZWxkQ29uZmlnKHtcbiAgICBzdGFuZGFyZE9wdGlvbnM6IHtcbiAgICAgIFtGaWVsZENvbmZpZ1Byb3BlcnR5Lk1hcHBpbmdzXToge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGljb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIC5zZXRQYW5lbE9wdGlvbnMoKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZE5lc3RlZE9wdGlvbnM8Q2FudmFzRWxlbWVudE9wdGlvbnM8SWNvbkNvbmZpZz4+KHtcbiAgICAgIGNhdGVnb3J5OiBbJ0ljb24nXSxcbiAgICAgIHBhdGg6ICdyb290JyxcblxuICAgICAgLy8gRHluYW1pY2FsbHkgZmlsbCB0aGUgc2VsZWN0ZWQgZWxlbWVudFxuICAgICAgYnVpbGQ6IChidWlsZGVyLCBjdHgpID0+IHtcbiAgICAgICAgaWNvbkl0ZW0ucmVnaXN0ZXJPcHRpb25zVUkhKGJ1aWxkZXIsIGN0eCk7XG5cbiAgICAgICAgb3B0aW9uQnVpbGRlci5hZGRCYWNrZ3JvdW5kKGJ1aWxkZXIsIGN0eCk7XG4gICAgICAgIG9wdGlvbkJ1aWxkZXIuYWRkQm9yZGVyKGJ1aWxkZXIsIGN0eCk7XG4gICAgICB9LFxuXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRQYW5lbE9wdGlvbnMucm9vdCBhcyBhbnksXG4gICAgfSk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJ1dHRvbiIsIlRleHREaW1lbnNpb25FZGl0b3IiLCJBUElFZGl0b3IiLCJjYWxsQXBpIiwiQnV0dG9uRGlzcGxheSIsInJlbmRlciIsImRhdGEiLCJwcm9wcyIsIm9uQ2xpY2siLCJhcGkiLCJ0ZXh0IiwiYnV0dG9uSXRlbSIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZGlzcGxheSIsImRlZmF1bHRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJnZXROZXdPcHRpb25zIiwib3B0aW9ucyIsInByZXBhcmVEYXRhIiwiY3R4IiwiY2ZnIiwiZ2V0VGV4dCIsInZhbHVlIiwidW5kZWZpbmVkIiwicmVnaXN0ZXJPcHRpb25zVUkiLCJidWlsZGVyIiwiY2F0ZWdvcnkiLCJhZGRDdXN0b21FZGl0b3IiLCJwYXRoIiwiZWRpdG9yIiwiY3NzIiwidXNlU3R5bGVzMiIsIlNjYWxhckRpbWVuc2lvbkVkaXRvciIsIkRyb25lRnJvbnREaXNwbGF5Iiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZHJvbmVGcm9udFRyYW5zZm9ybVN0eWxlIiwicm9sbEFuZ2xlIiwiZHJvbmVGcm9udCIsInRyYW5zZm9ybSIsImRyb25lRnJvbnRJdGVtIiwiZ2V0U2NhbGFyIiwidGhlbWUiLCJEcm9uZVNpZGVEaXNwbGF5IiwiZHJvbmVTaWRlUGl0Y2hUcmFuc2Zvcm1TdHlsZSIsInBpdGNoQW5nbGUiLCJkcm9uZVNpZGUiLCJkcm9uZVNpZGVJdGVtIiwiRHJvbmVUb3BEaXNwbGF5IiwiZlJpZ2h0Um90b3JBbmltYXRpb24iLCJmUmlnaHRSb3RvclJQTSIsIk1hdGgiLCJhYnMiLCJmTGVmdFJvdG9yQW5pbWF0aW9uIiwiZkxlZnRSb3RvclJQTSIsImJSaWdodFJvdG9yQW5pbWF0aW9uIiwiYlJpZ2h0Um90b3JSUE0iLCJiTGVmdFJvdG9yQW5pbWF0aW9uIiwiYkxlZnRSb3RvclJQTSIsImRyb25lVG9wVHJhbnNmb3JtU3R5bGUiLCJ5YXdBbmdsZSIsInByb3BlbGxlciIsInByb3BlbGxlckNXIiwiYW5pbWF0aW9uIiwicHJvcGVsbGVyQ0NXIiwiZHJvbmVUb3BJdGVtIiwiaXNTdHJpbmciLCJTVkciLCJSZXNvdXJjZURpbWVuc2lvbk1vZGUiLCJnZXRQdWJsaWNPckFic29sdXRlVXJsIiwiQ29sb3JEaW1lbnNpb25FZGl0b3IiLCJSZXNvdXJjZURpbWVuc2lvbkVkaXRvciIsInN2Z1N0cm9rZVBhdGhDbGFzcyIsIkljb25EaXNwbGF5Iiwic3ZnU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VXaWR0aCIsImljb25JdGVtIiwicGxhY2VtZW50IiwidG9wIiwibGVmdCIsImNvbmZpZyIsIm1vZGUiLCJGaXhlZCIsImZpeGVkIiwiZ2V0UmVzb3VyY2UiLCJnZXRDb2xvciIsImNvbG9yIiwic2V0dGluZ3MiLCJyZXNvdXJjZVR5cGUiLCJkZWZhdWx0VmFsdWUiLCJhZGRTbGlkZXJJbnB1dCIsIm1pbiIsIm1heCIsInNob3dJZiIsIkJvb2xlYW4iLCJOb3RGb3VuZERpc3BsYXkiLCJKU09OIiwic3RyaW5naWZ5Iiwibm90Rm91bmRJdGVtIiwic3R5bGVzRmFjdG9yeSIsIkFsaWduIiwiVkFsaWduIiwiVGV4dEJveERpc3BsYXkiLCJ0aGVtZTIiLCJjb250YWluZXIiLCJzcGFuIiwidmFsaWduIiwiYWxpZ24iLCJzaXplIiwidGV4dEJveEl0ZW0iLCJiYWNrZ3JvdW5kIiwiTGVmdCIsIk1pZGRsZSIsIkNlbnRlciIsImFkZFJhZGlvIiwibGFiZWwiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsImFkZE51bWJlcklucHV0IiwicGxhY2Vob2xkZXIiLCJXaW5kVHVyYmluZURpc3BsYXkiLCJ3aW5kVHVyYmluZUFuaW1hdGlvbiIsInJwbSIsImJsYWRlIiwid2luZFR1cmJpbmVJdGVtIiwiQ2FudmFzRnJhbWVPcHRpb25zIiwiUmVnaXN0cnkiLCJERUZBVUxUX0NBTlZBU19FTEVNRU5UX0NPTkZJRyIsInR5cGUiLCJjYW52YXNFbGVtZW50UmVnaXN0cnkiLCJCYWNrZ3JvdW5kSW1hZ2VTaXplIiwiSG9yaXpvbnRhbENvbnN0cmFpbnQiLCJWZXJ0aWNhbENvbnN0cmFpbnQiLCJjb3VudGVyIiwiRWxlbWVudFN0YXRlIiwiY29uc3RydWN0b3IiLCJpdGVtIiwicGFyZW50IiwidGFyZ2V0IiwiZGl2IiwiYXBwbHlMYXlvdXRTdHlsZXNUb0RpdiIsImV2ZW50Iiwic3R5bGUiLCJjb25zdHJhaW50IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiVG9wQm90dG9tIiwiYm90dG9tIiwiTGVmdFJpZ2h0IiwicmlnaHQiLCJkZWx0YVgiLCJkZWx0YSIsImRlbHRhWSIsImRpckxSIiwiZGlyZWN0aW9uIiwiZGlyVEIiLCJmYWxsYmFja05hbWUiLCJEYXRlIiwibm93Iiwic2NlbmUiLCJnZXRTY2VuZSIsIm5ld05hbWUiLCJnZXROZXh0RWxlbWVudE5hbWUiLCJieU5hbWUiLCJzZXQiLCJ0cmF2IiwiaXNSb290IiwiZ2V0TmFtZSIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwiU2NhbGUiLCJzaXplU3R5bGUiLCJrZXkiLCJkYXRhU3R5bGUiLCJzZXRQbGFjZW1lbnRGcm9tQ29uc3RyYWludCIsImVsZW1lbnRDb250YWluZXIiLCJwYXJlbnRDb250YWluZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRFbGVtZW50IiwicmVsYXRpdmVUb3AiLCJyb3VuZCIsInJlbGF0aXZlQm90dG9tIiwicmVsYXRpdmVMZWZ0IiwicmVsYXRpdmVSaWdodCIsImVsZW1lbnRDZW50ZXIiLCJwYXJlbnRDZW50ZXIiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyZXZJZCIsInVwZGF0ZURhdGEiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZSIsInYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDb250YWluIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiQ292ZXIiLCJPcmlnaW5hbCIsIlRpbGUiLCJGaWxsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZE9yaWdpbiIsInZpc2l0IiwidmlzaXRvciIsIm9uQ2hhbmdlIiwiZ2V0SWZFeGlzdHMiLCJvbGROYW1lIiwic2F2ZSIsImRlbGV0ZSIsImdldFNhdmVNb2RlbCIsImluaXRFbGVtZW50IiwiVUlEIiwidXNlQ2FsbGJhY2siLCJBcHBFdmVudHMiLCJnZXRCYWNrZW5kU3J2IiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIkpTT05Gb3JtYXR0ZXIiLCJTdHJpbmdWYWx1ZUVkaXRvciIsImFwcEV2ZW50cyIsImR1bW15U3RyaW5nU2V0dGluZ3MiLCJpc1Rlc3QiLCJmZXRjaCIsInVybCIsImVuZHBvaW50IiwibWV0aG9kIiwic3Vic2NyaWJlIiwiZXJyb3IiLCJlbWl0IiwiYWxlcnRFcnJvciIsImNvbnNvbGUiLCJjb21wbGV0ZSIsImFsZXJ0U3VjY2VzcyIsImNvbnRleHQiLCJsYWJlbFdpZHRoIiwib25FbmRwb2ludENoYW5nZSIsIm9uRGF0YUNoYW5nZSIsInJlbmRlckpTT04iLCJqc29uIiwicGFyc2UiLCJtZXNzYWdlIiwicmVuZGVyVGVzdEFQSUJ1dHRvbiIsImRpc2FibGVTYW5pdGl6ZUh0bWwiLCJvcHRpb25CdWlsZGVyIiwiYWRkQmFja2dyb3VuZCIsImFkZEJvcmRlciIsIkNvbXBvbmVudCIsImdldENvbG9yRGltZW5zaW9uRnJvbURhdGEiLCJnZXRSZXNvdXJjZURpbWVuc2lvbkZyb21EYXRhIiwiZ2V0U2NhbGFyRGltZW5zaW9uRnJvbURhdGEiLCJnZXRTY2FsZURpbWVuc2lvbkZyb21EYXRhIiwiZ2V0VGV4dERpbWVuc2lvbkZyb21EYXRhIiwiSWNvblBhbmVsIiwiZWxlbWVudCIsInJvb3QiLCJ1cGRhdGVTaXplIiwiZGltcyIsImdldFNjYWxlIiwic2NhbGUiLCJzY2FsYXIiLCJyZXMiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJjaGFuZ2VkIiwib3ZlcmZsb3ciLCJkZWZhdWx0UGFuZWxPcHRpb25zIiwiRmllbGRDb25maWdQcm9wZXJ0eSIsIlBhbmVsUGx1Z2luIiwicGx1Z2luIiwic2V0Tm9QYWRkaW5nIiwidXNlRmllbGRDb25maWciLCJzdGFuZGFyZE9wdGlvbnMiLCJNYXBwaW5ncyIsImljb24iLCJzZXRQYW5lbE9wdGlvbnMiLCJhZGROZXN0ZWRPcHRpb25zIiwiYnVpbGQiXSwic291cmNlUm9vdCI6IiJ9