"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["graphitePlugin"],{

/***/ "./public/app/core/utils/version.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemVersion": () => (/* binding */ SemVersion),
/* harmony export */   "isVersionGtOrEq": () => (/* binding */ isVersionGtOrEq)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    _defineProperty(this, "major", void 0);

    _defineProperty(this, "minor", void 0);

    _defineProperty(this, "patch", void 0);

    _defineProperty(this, "meta", void 0);

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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this.major);
  }

  get comparable() {
    return [this.major, this.minor, this.patch];
  }

}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGraphiteFunction": () => (/* binding */ AddGraphiteFunction)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function AddGraphiteFunction({
  funcDefs
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.mapFuncDefsToSelectables)(funcDefs), [funcDefs]); // Note: actions.addFunction will add a component that will have a dropdown or input in auto-focus
  // (the first param of the function). This auto-focus will cause onBlur() on AddGraphiteFunction's
  // Segment component and trigger onChange once again. (why? we call onChange if the user dismissed
  // the dropdown, see: SegmentSelect.onCloseMenu for more details). To avoid it we need to wait for
  // the Segment to disappear first (hence useEffect) and then dispatch the action that will add new
  // components.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value.value) !== undefined) {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.addFunction({
        name: value.value
      }));
      setValue(undefined);
    }
  }, [value, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      icon: "plus",
      variant: "secondary",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button),
      "aria-label": "Add new function"
    }),
    options: options,
    onChange: setValue,
    inputMinWidth: 150
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditor": () => (/* binding */ FunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _TooltipContent, _span;

const _excluded = ["onMoveLeft", "onMoveRight", "func"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const getStyles = theme => {
  return {
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `,
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
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

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const renderContent = ({
    updatePopperPosition
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FunctionEditorControls__WEBPACK_IMPORTED_MODULE_3__.FunctionEditorControls, Object.assign({}, props, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [func.def.unknown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: _TooltipContent || (_TooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TooltipContent, {})),
      placement: "bottom",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        "data-testid": "warning-icon",
        name: "exclamation-triangle",
        size: "xs",
        className: styles.icon
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: renderContent,
      placement: "top",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: styles.label,
        children: func.def.name
      })
    })]
  });
};

const TooltipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(() => {
  return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
    children: ["This function is not supported. Check your function for typos and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      target: "_blank",
      className: "external-link",
      rel: "noreferrer noopener",
      href: "https://graphite.readthedocs.io/en/latest/functions.html",
      children: "read the docs"
    }), ' ', "to see whether you need to upgrade your data source\u2019s version to make this function available."]
  }));
});
TooltipContent.displayName = 'FunctionEditorTooltipContent';


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditorControls": () => (/* binding */ FunctionEditorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;





const FunctionDescription = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(async () => {
  // @ts-ignore
  const {
    default: rst2html
  } = await __webpack_require__.e(/* import() | rst2html */ "rst2html").then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/rst2html-https-e87da7ea2f-63d5ff3068.zip/node_modules/rst2html/dist/rst2html.min.js", 23));
  return {
    default(props) {
      var _props$description;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: rst2html((_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : '')
        }
      });
    }

  };
});

const FunctionHelpButton = props => {
  if (props.description) {
    let tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "Loading description..."
      })),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionDescription, {
        description: props.description
      })
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: tooltip,
      placement: 'bottom-end',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        className: props.description ? undefined : 'pointer',
        name: "question-circle"
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      display: 'flex',
      width: '60px',
      justifyContent: 'space-between'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-left",
      onClick: () => onMoveLeft(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionHelpButton, {
      name: func.def.name,
      description: func.def.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "times",
      onClick: () => onRemove(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-right",
      onClick: () => onMoveRight(func)
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionParamEditor": () => (/* binding */ FunctionParamEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





/**
 * Render a function parameter with a segment dropdown for multiple options or simple input.
 */
function FunctionParamEditor({
  editableParam,
  onChange,
  onExpandedChange,
  autofocus
}) {
  var _editableParam$option;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (((_editableParam$option = editableParam.options) === null || _editableParam$option === void 0 ? void 0 : _editableParam$option.length) > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
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

const getStyles = theme => ({
  segment: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    margin: 0,
    padding: 0
  }),
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    padding: 0;
    input {
      height: 25px;
    },
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionsSection": () => (/* binding */ FunctionsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx");
/* harmony import */ var _GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function FunctionsSection({
  functions = [],
  funcDefs
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentSection, {
    label: "Functions",
    fill: true,
    children: [functions.map((func, index) => {
      return !func.hidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_3__.GraphiteFunctionEditor, {
        func: func
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__.AddGraphiteFunction, {
      funcDefs: funcDefs
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteFunctionEditor": () => (/* binding */ GraphiteFunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx");
/* harmony import */ var _FunctionParamEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











/**
 * Allows editing function params and removing/moving a function (note: editing function name is not supported)
 */
function GraphiteFunctionEditor({
  func
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles); // keep track of mouse over and isExpanded state to display buttons for adding optional/multiple params
  // only when the user mouse over over the function editor OR any param editor is expanded.

  const [mouseOver, setIsMouseOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [expanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let params = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.mapFuncInstanceToParams)(func);
  params = params.filter((p, index) => {
    // func.added is set for newly added functions - see autofocus below
    return index < func.def.params.length && !p.optional || func.added || p.value || expanded || mouseOver;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, {
      [styles.error]: func.def.unknown
    }),
    onMouseOver: () => setIsMouseOver(true),
    onMouseLeave: () => setIsMouseOver(false),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      spacing: "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionEditor__WEBPACK_IMPORTED_MODULE_5__.FunctionEditor, {
        func: func,
        onMoveLeft: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.moveFunction({
            func,
            offset: -1
          }));
        },
        onMoveRight: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.moveFunction({
            func,
            offset: 1
          }));
        },
        onRemove: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.removeFunction({
            func
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        className: styles.label,
        children: "("
      }), params.map((editableParam, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionParamEditor__WEBPACK_IMPORTED_MODULE_6__.FunctionParamEditor, {
            autofocus: index === 0 && func.added,
            editableParam: editableParam,
            onChange: value => {
              if (value !== '' || editableParam.optional) {
                dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.updateFunctionParam({
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        className: styles.label,
        children: ")"
      })]
    })
  });
}

const getStyles = theme => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.borderRadius(),
    marginRight: theme.spacing(0.5),
    padding: `0 ${theme.spacing(1)}`,
    height: `${theme.v1.spacing.formInputHeight}px`
  }),
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    border: 1px solid ${theme.colors.error.main};
  `,
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: 0,
    margin: 0
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0.5)
  })
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditor": () => (/* binding */ GraphiteQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx");
/* harmony import */ var _GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx");
/* harmony import */ var _SeriesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/SeriesSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _GraphiteQueryEditorC;












function GraphiteQueryEditor({
  datasource,
  onRunQuery,
  onChange,
  query,
  range,
  queries
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_state_context__WEBPACK_IMPORTED_MODULE_4__.GraphiteQueryEditorContext, {
    datasource: datasource,
    onRunQuery: onRunQuery,
    onChange: onChange,
    query: query,
    queries: queries,
    range: range,
    children: _GraphiteQueryEditorC || (_GraphiteQueryEditorC = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GraphiteQueryEditorContent, {}))
  });
}

function GraphiteQueryEditorContent() {
  var _state$target, _state$target2, _state$queryModel;

  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const state = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useGraphiteState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.visualEditor,
      children: [((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_6__.GraphiteTextEditor, {
        rawQuery: state.target.target
      }), !((_state$target2 = state.target) !== null && _state$target2 !== void 0 && _state$target2.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SeriesSection__WEBPACK_IMPORTED_MODULE_7__.SeriesSection, {
          state: state
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionsSection__WEBPACK_IMPORTED_MODULE_5__.FunctionsSection, {
          functions: (_state$queryModel = state.queryModel) === null || _state$queryModel === void 0 ? void 0 : _state$queryModel.functions,
          funcDefs: state.funcDefs
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.toggleButton,
      icon: "pen",
      variant: "secondary",
      "aria-label": "Toggle editor mode",
      onClick: () => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.toggleEditorMode());
      }
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    visualEditor: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
    `,
    toggleButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteTextEditor": () => (/* binding */ GraphiteTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GraphiteTextEditor({
  rawQuery
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const updateQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateQuery({
      query
    }));
  }, [dispatch]);
  const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.runQuery());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
    query: rawQuery,
    onChange: updateQuery,
    onBlur: runQuery,
    onRunQuery: runQuery,
    placeholder: 'Enter a Graphite query (run with Shift+Enter)',
    portalOrigin: "graphite"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricSegment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricSegment": () => (/* binding */ MetricSegment)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








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
function MetricSegment({
  metricIndex,
  segment,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getAltSegmentsSelectables)(state, metricIndex, value || '');
  }, [state, metricIndex]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(loadOptions, 200, {
    leading: true
  }), [loadOptions]);
  const onSegmentChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(selectableValue => {
    // selectableValue.value is always defined because emptyValues are not allowed in SegmentAsync by default
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.segmentValueChanged({
      segment: selectableValue.value,
      index: metricIndex
    }));
  }, [dispatch, metricIndex]); // segmentValueChanged action will destroy SegmentAsync immediately if a tag is selected. To give time
  // for the clean up the action is debounced.

  const onSegmentChangedDebounced = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onSegmentChanged, 100), [onSegmentChanged]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
    value: segment.value,
    inputMinWidth: 150,
    allowCustomValue: true,
    loadOptions: debouncedLoadOptions,
    reloadOptionsOnChange: true,
    onChange: onSegmentChangedDebounced
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricTankMetaInspector": () => (/* binding */ MetricTankMetaInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _div, _h;









class MetricTankMetaInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  renderMeta(meta, key) {
    var _meta$consolidatorNo;

    const styles = getStyles();
    const buckets = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.parseSchemaRetentions)(meta['schema-retentions']);
    const rollupNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.getRollupNotice)([meta]);
    const runtimeNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.getRuntimeConsolidationNotice)([meta]);
    const normFunc = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
    const totalSeconds = buckets.reduce((acc, bucket) => acc + (bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0), 0);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.metaItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemHeader,
        children: ["Schema: ", meta['schema-name'], /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "small muted",
          children: ["Series count: ", meta.count]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemBody,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 1: Fetch"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "First data is fetched, either from raw data archive or a rollup archive"
          }), rollupNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: rollupNotice.text
          }), !rollupNotice && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No rollup archive was used"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            children: buckets.map((bucket, index) => {
              const bucketLength = bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0;
              const lengthPercent = bucketLength / totalSeconds * 100;
              const isActive = index === meta['archive-read'];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: styles.bucket,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: styles.bucketInterval,
                  children: bucket.interval
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bucketRetention, {
                    [styles.bucketRetentionActive]: isActive
                  }),
                  style: {
                    flexGrow: lengthPercent
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  style: {
                    flexGrow: 100 - lengthPercent
                  },
                  children: bucket.retention
                })]
              }, bucket.retention);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 2: Normalization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "Normalization happens when series with different intervals between points are combined."
          }), meta['aggnum-norm'] > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: ["Normalization did occur using ", normFunc]
          }), meta['aggnum-norm'] === 1 && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No normalization was needed"
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 3: Runtime consolidation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "If there are too many data points at this point Metrictank will consolidate them down to below max data points (set in queries tab)."
          }), runtimeNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: runtimeNotice.text
          }), !runtimeNotice && (_p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
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
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No response meta data"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "page-heading",
        children: "Metrictank Lineage"
      })), Object.keys(seriesMetas).map(key => this.renderMeta(seriesMetas[key], key))]
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_4__.config;
  const borderColor = theme.isDark ? theme.palette.gray25 : theme.palette.gray85;
  const background = theme.isDark ? theme.palette.dark1 : theme.palette.white;
  const headerBg = theme.isDark ? theme.palette.gray15 : theme.palette.gray85;
  return {
    metaItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${background};
      border: 1px solid ${borderColor};
      margin-bottom: ${theme.spacing.md};
    `,
    metaItemHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${headerBg};
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.typography.size.md};
      display: flex;
      justify-content: space-between;
    `,
    metaItemBody: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing.md};
    `,
    stepHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.md};
    `,
    stepDescription: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
      margin-bottom: ${theme.spacing.sm};
    `,
    step: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.lg};

      &:last-child {
        margin-bottom: 0;
      }
    `,
    bucket: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing.sm};
      border-radius: ${theme.border.radius.md};
    `,
    bucketInterval: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      width: 60px;
    `,
    bucketRetention: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.blue85}, ${theme.palette.blue95});
      text-align: center;
      color: ${theme.palette.white};
      margin-right: ${theme.spacing.md};
      border-radius: ${theme.border.radius.md};
    `,
    bucketRetentionActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.greenBase}, ${theme.palette.greenShade});
    `
  };
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsSection": () => (/* binding */ MetricsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MetricSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricSegment.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MetricsSection({
  segments = [],
  state
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: segments.map((segment, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MetricSegment__WEBPACK_IMPORTED_MODULE_1__.MetricSegment, {
        segment: segment,
        metricIndex: index,
        state: state
      }, index);
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/PlayButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayButton": () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PlayButton() {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.unpause());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "play",
    onClick: onClick,
    type: "button",
    variant: "secondary",
    "aria-label": "Unpause query"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/SeriesSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesSection": () => (/* binding */ SeriesSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _MetricsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricsSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagsSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function SeriesSection({
  state
}) {
  var _state$queryModel, _state$queryModel2;

  const sectionContent = (_state$queryModel = state.queryModel) !== null && _state$queryModel !== void 0 && _state$queryModel.seriesByTagUsed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_3__.TagsSection, {
    tags: (_state$queryModel2 = state.queryModel) === null || _state$queryModel2 === void 0 ? void 0 : _state$queryModel2.tags,
    state: state
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MetricsSection__WEBPACK_IMPORTED_MODULE_2__.MetricsSection, {
    segments: state.segments,
    state: state
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentSection, {
    label: "Series",
    fill: true,
    children: sectionContent
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagEditor": () => (/* binding */ TagEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










/**
 * Editor for a tag at given index. Allows changing the name of the tag, operator or value. Tag names are provided with
 * getTagsSelectables and contain only valid tags (it may depend on currently used tags). The dropdown for tag names is
 * also used for removing tag (with a special "--remove tag--" option provided by getTagsSelectables).
 *
 * Options for tag names and values are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagEditor({
  tag,
  tagIndex,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const getTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagsSelectables)(state, tagIndex, inputValue || '');
  }, [state, tagIndex]);
  const debouncedGetTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagsOptions, 200, {
    leading: true
  }), [getTagsOptions]);
  const getTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagValuesSelectables)(state, tag, tagIndex, inputValue || '');
  }, [state, tagIndex, tag]);
  const debouncedGetTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagValueOptions, 200, {
    leading: true
  }), [getTagValueOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.key,
      loadOptions: debouncedGetTagsOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            key: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      inputMinWidth: 50,
      value: tag.operator,
      options: (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagOperatorsSelectables)(),
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            operator: value.value
          }),
          index: tagIndex
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.value,
      loadOptions: debouncedGetTagValueOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/PlayButton.tsx");
/* harmony import */ var _TagEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PlayButton;














/**
 * Renders all tags and a button allowing to add more tags.
 *
 * Options for tag names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagsSection({
  tags,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Options are reloaded while user is typing with backend taking care of auto-complete (auto-complete cannot be
  // implemented in front-end because backend returns only limited number of entries)

  const getTagsAsSegmentsOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_6__.getTagsAsSegmentsSelectables)(state, inputValue || '');
  }, [state]);
  const debouncedGetTagsAsSegments = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getTagsAsSegmentsOptions, 200, {
    leading: true
  }), [getTagsAsSegmentsOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [tags.map((tag, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TagEditor__WEBPACK_IMPORTED_MODULE_8__.TagEditor, {
        tagIndex: index,
        tag: tag,
        state: state
      }, index);
    }), tags.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentAsync, {
      inputMinWidth: 150,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.addNewTag({
          segment: value.value
        }));
      },
      loadOptions: debouncedGetTagsAsSegments,
      reloadOptionsOnChange: true,
      Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "plus",
        variant: "secondary",
        className: styles.button,
        "aria-label": "Add new tag"
      })
    }), state.paused && (_PlayButton || (_PlayButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlayButton__WEBPACK_IMPORTED_MODULE_7__.PlayButton, {})))]
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapFuncDefsToSelectables": () => (/* binding */ mapFuncDefsToSelectables),
/* harmony export */   "mapFuncInstanceToParams": () => (/* binding */ mapFuncInstanceToParams),
/* harmony export */   "mapSegmentsToSelectables": () => (/* binding */ mapSegmentsToSelectables),
/* harmony export */   "mapStringsToSelectables": () => (/* binding */ mapStringsToSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

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
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDefs, funcDef => {
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
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(categories, 'label');
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "SHOW_MAPPINGS_HELP_KEY": () => (/* binding */ SHOW_MAPPINGS_HELP_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
/* harmony import */ var _MappingsConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx");
/* harmony import */ var _parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Alert, _h, _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const {
  Select,
  Switch
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const SHOW_MAPPINGS_HELP_KEY = 'grafana.datasources.graphite.config.showMappingsHelp';
const graphiteVersions = _versions__WEBPACK_IMPORTED_MODULE_5__.GRAPHITE_VERSIONS.map(version => ({
  label: `${version}.x`,
  value: version
}));
const graphiteTypes = Object.entries(_types__WEBPACK_IMPORTED_MODULE_4__.GraphiteType).map(([label, value]) => ({
  label,
  value
}));
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderTypeHelp", () => {
      return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        children: ["There are different types of Graphite compatible backends. Here you can specify the type you are using. If you are using", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
          href: "https://github.com/grafana/metrictank",
          className: "pointer",
          target: "_blank",
          rel: "noreferrer",
          children: "Metrictank"
        }), ' ', "then select that here. This will enable Metrictank specific features like query processing meta data. Metrictank is a multi-tenant timeseries engine for Graphite and friends."]
      }));
    });

    this.state = {
      showMappingsHelp: app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].getObject(SHOW_MAPPINGS_HELP_KEY, true)
    };
  }

  componentDidMount() {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)(this.props, 'graphiteVersion', this.currentGraphiteVersion);
  }

  render() {
    var _options$jsonData$imp, _options$jsonData$imp2;

    const {
      options,
      onOptionsChange
    } = this.props;
    const currentVersion = graphiteVersions.find(item => item.value === this.currentGraphiteVersion);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "This data source uses browser access mode. This mode is deprecated and will be removed in the future. Please use server access mode instead."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
        defaultUrl: "http://localhost:8080",
        dataSourceConfig: options,
        onChange: onOptionsChange
      }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: "page-heading",
        children: "Graphite details"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "gf-form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
              tooltip: "This option controls what functions are available in the Graphite query editor.",
              children: "Version"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite version",
              value: currentVersion,
              options: graphiteVersions,
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteVersion')
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
              tooltip: this.renderTypeHelp,
              children: "Type"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite backend type",
              options: graphiteTypes,
              value: graphiteTypes.find(type => type.value === options.jsonData.graphiteType),
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteType')
            })]
          })
        }), options.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_4__.GraphiteType.Metrictank && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Switch, {
              label: "Rollup indicator",
              labelClass: 'width-10',
              tooltip: "Shows up as an info icon in panel headers when data is aggregated",
              checked: !!options.jsonData.rollupIndicatorEnabled,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionChecked)(this.props, 'rollupIndicatorEnabled')
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MappingsConfiguration__WEBPACK_IMPORTED_MODULE_6__.MappingsConfiguration, {
        mappings: (((_options$jsonData$imp = options.jsonData.importConfiguration) === null || _options$jsonData$imp === void 0 ? void 0 : (_options$jsonData$imp2 = _options$jsonData$imp.loki) === null || _options$jsonData$imp2 === void 0 ? void 0 : _options$jsonData$imp2.mappings) || []).map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__.toString),
        showHelp: this.state.showMappingsHelp,
        onDismiss: () => {
          this.setState({
            showMappingsHelp: false
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, false);
        },
        onRestoreHelp: () => {
          this.setState({
            showMappingsHelp: true
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, true);
        },
        onChange: mappings => {
          onOptionsChange(Object.assign({}, options, {
            jsonData: Object.assign({}, options.jsonData, {
              importConfiguration: Object.assign({}, options.jsonData.importConfiguration, {
                loki: {
                  mappings: mappings.map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__.fromString)
                }
              })
            })
          }));
        }
      })]
    });
  }

  get currentGraphiteVersion() {
    return this.props.options.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_GRAPHITE_VERSION;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MappingsConfiguration": () => (/* binding */ MappingsConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _MappingsHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Icon;






const MappingsConfiguration = props => {
  const [mappings, setMappings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.mappings || []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "page-heading",
      children: "Label mappings"
    })), !props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "link",
        onClick: props.onRestoreHelp,
        children: "Learn how label mappings work"
      })
    }), props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MappingsHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDismiss: props.onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-group",
      children: [mappings.map((mapping, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: `Mapping (${i + 1})`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: "trash-alt"
          }))
        })]
      }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MappingsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _p4, _table;





function MappingsHelp(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    severity: "info",
    title: "How to map Graphite metrics to labels?",
    onRemove: props.onDismiss,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "Mappings are currently supported only between Graphite and Loki queries."
    })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "When you switch your data source from Graphite to Loki, your queries are mapped according to the mappings defined in the example below. To define a mapping, write the full path of the metric and replace nodes you want to map to label with the label name in parentheses. The value of the label is extracted from your Graphite query when you switch data sources."
    })), _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "All tags are automatically mapped to labels regardless of the mapping configuration. Graphite matching patterns (using {}) are converted to Loki's regular expressions matching patterns. When you use functions in your queries, the metrics, and tags are extracted to match them with defined mappings."
    })), _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["Example: for a mapping = ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        children: "servers.(cluster).(server).*"
      }), ":"]
    })), _table || (_table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Graphite query"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Mapped to Loki query"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), ".cpu,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{cluster=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), "\", server=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.*.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "{001,002}"
              }), ".*,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{server=~\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "(001|002)"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "interpolate(seriesByTag('foo=bar', 'server=002'), inf))"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "{foo=\"bar\", server=\"002\"}"
            })
          })]
        })]
      })]
    }))]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
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

function toString(mapping) {
  return mapping.matchers.map(matcher => {
    return matcher.labelName ? `(${matcher.labelName})` : `${matcher.value}`;
  }).join('.');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteDatasource": () => (/* binding */ GraphiteDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/version.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _gfunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/gfunc.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Types




const GRAPHITE_TAG_COMPARATORS = {
  '=': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.Equal,
  '!=': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqual,
  '=~': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.EqualRegEx,
  '!=~': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqualRegEx
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

class GraphiteDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "graphiteVersion", void 0);

    _defineProperty(this, "supportsTags", void 0);

    _defineProperty(this, "isMetricTank", void 0);

    _defineProperty(this, "rollupIndicatorEnabled", void 0);

    _defineProperty(this, "cacheTimeout", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "funcDefs", null);

    _defineProperty(this, "funcDefsPromise", null);

    _defineProperty(this, "_seriesRefLetters", void 0);

    _defineProperty(this, "metricMappings", void 0);

    _defineProperty(this, "convertResponseToDataFrames", result => {
      const data = [];

      if (!result || !result.data) {
        return {
          data
        };
      } // Series are either at the root or under a node called 'series'


      const series = result.data.series || result.data;

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(series)) {
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

        const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrame)(s); // Metrictank metadata

        if (s.meta) {
          frame.meta = {
            custom: {
              requestMetaList: result.data.meta,
              // info for the whole request
              seriesMetaList: s.meta // Array of metadata

            }
          };

          if (this.rollupIndicatorEnabled) {
            const rollupNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__.getRollupNotice)(s.meta);
            const runtimeNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__.getRuntimeConsolidationNotice)(s.meta);

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

    this.graphiteVersion = instanceSettings.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_GRAPHITE_VERSION;
    this.metricMappings = ((_instanceSettings$jso = instanceSettings.jsonData.importConfiguration) === null || _instanceSettings$jso === void 0 ? void 0 : (_instanceSettings$jso2 = _instanceSettings$jso.loki) === null || _instanceSettings$jso2 === void 0 ? void 0 : _instanceSettings$jso2.mappings) || [];
    this.isMetricTank = instanceSettings.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteType.Metrictank;
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
    const graphiteQuery = new _graphite_query__WEBPACK_IMPORTED_MODULE_8__["default"](this, Object.assign({}, query, {
      target: query.target || '',
      textEditor: false
    }), (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)());
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
              operator: converted !== value ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.EqualRegEx : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.Equal,
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
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

    return this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(this.convertResponseToDataFrames));
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(graphiteQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(result => {
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

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(results.data)) {
          console.error(`Unable to get annotations from ${results.url}.`);
          return [];
        }

        for (let i = 0; i < results.data.length; i++) {
          const e = results.data[i];
          let tags = e.tags;

          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(e.tags)) {
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

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest({
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
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now';
      } else if (date.indexOf('now-') >= 0 && date.indexOf('/') === -1) {
        date = date.substring(3);
        date = date.replace('m', 'min');
        date = date.replace('M', 'mon');
        return date;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp, timezone);
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

    let interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_6__.getSearchFilterScopedVar)({
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
    interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_6__.getSearchFilterScopedVar)({
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, metric => {
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.results, metric => {
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, tag => {
        return {
          text: tag.tag,
          id: tag.id
        };
      });
    })));
  }

  getTagValues(options = {}) {
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data && results.data.values) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.values, value => {
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
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim()))
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getTagValuesAutoComplete(expressions, tag, valuePrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/values',
      params: {
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim())),
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getVersion(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/version',
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data) {
        const semver = new app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.SemVersion(results.data);
        return semver.isValid() ? results.data : '';
      }

      return '';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)('');
    })));
  }

  createFuncInstance(funcDef, options) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].createFuncInstance(funcDef, options, this.funcDefs);
  }

  getFuncDef(name) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDef(name, this.funcDefs);
  }

  waitForFuncDefsLoaded() {
    return this.getFuncDefs();
  }

  getFuncDefs() {
    if (this.funcDefsPromise !== null) {
      return this.funcDefsPromise;
    }

    if (!supportsFunctionIndex(this.graphiteVersion)) {
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDefs(this.graphiteVersion);
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      // Fix for a Graphite bug: https://github.com/graphite-project/graphite-web/issues/2609
      // There is a fix for it https://github.com/graphite-project/graphite-web/pull/2612 but
      // it was merged to master in July 2020 but it has never been released (the last Graphite
      // release was 1.1.7 - March 2020). The bug was introduced in Graphite 1.1.7, in versions
      // 1.1.0 - 1.1.6 /functions endpoint returns a valid JSON
      const fixedData = JSON.parse(results.data.replace(/"default": ?Infinity/g, '"default": 1e9999'));
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].parseFuncDefs(fixedData);
      return this.funcDefs;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(error => {
      console.error('Fetching graphite functions error', error);
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDefs(this.graphiteVersion);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.funcDefs);
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(query)).then(() => ({
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
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.throwError)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.reduceError)(err));
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

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(options, (value, key) => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(graphiteOptions, key) === -1) {
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
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function supportsFunctionIndex(version) {
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function mapToTags() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
    if (results.data) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, value => {
        return {
          text: value
        };
      });
    } else {
      return [];
    }
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/gfunc.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncInstance": () => (/* binding */ FuncInstance),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/version.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  return !obj.version || (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(graphiteVersion, obj.version);
}

class FuncInstance {
  /**
   * Hidden functions are not displayed in UI but available in text editor
   * This is used for seriesByTagUsed function which when used switches
   * the editor to tag-only mode. Defined tags are provided to seriesByTagUsed
   * as parameters.
   */
  constructor(funcDef, options) {
    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "text", void 0);

    _defineProperty(this, "hidden", void 0);

    this.def = funcDef;
    this.params = [];

    if (options && options.withDefaultParams && funcDef.defaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }

    this.updateText();
  }

  render(metricExp, replaceVariables) {
    const str = this.def.name + '(';
    const parameters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.params, (value, index) => {
      let paramType;

      if (index < this.def.params.length) {
        paramType = this.def.params[index].type;
      } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
        paramType = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'type');
      } // param types that should never be quoted


      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['value_or_series', 'boolean', 'int', 'float', 'node', 'int_or_infinity'], paramType)) {
        return value;
      }

      const valueInterpolated = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? replaceVariables(value) : value; // param types that might be quoted
      // To quote variables correctly we need to interpolate it to check if it contains a numeric or string value

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['int_or_interval', 'node_or_tag'], paramType) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFinite)(+valueInterpolated)) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(value);
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

    if (index + 1 >= this.def.params.length && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
      return true;
    }

    return false;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    // if string contains ',' and next param is optional, split and update both
    if (this._hasMultipleParamsInString(strValue, index)) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(strValue.split(','), (partVal, idx) => {
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
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(funcDef)) {
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
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(idx || index, funcDef => {
    if (isVersionRelatedFunction(funcDef, graphiteVersion)) {
      funcs[funcDef.name] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, funcDef, {
        params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(funcDef.params, param => {
          return isVersionRelatedFunction(param, graphiteVersion);
        })
      });
    }
  });
  return funcs;
} // parse response from graphite /functions endpoint into internal format


function parseFuncDefs(rawDefs) {
  const funcDefs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(rawDefs || {}, (funcDef, funcName) => {
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

    if (/^seriesLists?$/.test((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(funcDef, 'params[0].type', ''))) {
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

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDef.params, rawParam => {
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
          func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.default));
        }
      } else if (rawParam.suggestions) {
        func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.suggestions[0]));
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
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.options, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      } else if (rawParam.suggestions) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.suggestions, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      }

      func.params.push(param);
    });
    funcDefs[funcName] = func;
  });
  return funcDefs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createFuncInstance: createFuncInstance,
  getFuncDef: getFuncDef,
  getFuncDefs: getFuncDefs,
  parseFuncDefs: parseFuncDefs
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/graphite_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphiteQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/arrayMove.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GraphiteQuery {
  /** @ngInject */
  constructor(datasource, target, templateSrv, scopedVars) {
    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "functions", []);

    _defineProperty(this, "segments", []);

    _defineProperty(this, "tags", []);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "seriesByTagUsed", false);

    _defineProperty(this, "checkOtherSegmentsIndex", 0);

    _defineProperty(this, "removeTagValue", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

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

    const parser = new _parser__WEBPACK_IMPORTED_MODULE_2__.Parser(this.target.target);
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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(arr, (result, segment) => {
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
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(astNode.params, param => {
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
          this.addFunctionParameter(func, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.join)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(astNode.segments, 'value'), '.'));
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
    if (func.params.length >= func.def.params.length && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(func.def.params), 'multiple', false)) {
      throw {
        message: 'too many parameters for function ' + func.def.name
      };
    }

    func.params.push(value);
  }

  removeFunction(func) {
    this.functions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.functions, func);
  }

  moveFunction(func, offset) {
    const index = this.functions.indexOf(func);
    (0,app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__.arrayMove)(this.functions, index, index + offset);
  }

  updateModelTarget(targets) {
    const wrapFunction = (target, func) => {
      return func.render(target, value => {
        return this.templateSrv.replace(value, this.scopedVars);
      });
    };

    if (!this.target.textEditor) {
      const metricPath = this.getSegmentPathUpTo(this.segments.length).replace(/\.?select metric$/, '');
      this.target.target = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.functions, wrapFunction, metricPath);
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
    const targetsByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(targets, 'refId'); // no references to self

    delete targetsByRefId[target.refId];
    const nestedSeriesRefRegex = /\#([A-Z])/g;
    let targetWithNestedQueries = target.target; // Use ref count to track circular references

    function countTargetRefs(targetsByRefId, refId) {
      let refCount = 0;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
        if (id !== refId) {
          const match = nestedSeriesRefRegex.exec(t.target);
          const count = match && match.length ? match.length - 1 : 0;
          refCount += count;
        }
      });
      targetsByRefId[refId].refCount = refCount;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(func.params, param => {
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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(this.functions, func => func.def.name === 'seriesByTag');
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

  renderTagExpressions(excludeIndex = -1) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.tags, (tagExpr, index) => {
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/lexer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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

    const readUnicodeEscapeSequence = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
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
    const getIdentifierStart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
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
    const getIdentifierPart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/meta.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRollupNotice": () => (/* binding */ getRollupNotice),
/* harmony export */   "getRuntimeConsolidationNotice": () => (/* binding */ getRuntimeConsolidationNotice),
/* harmony export */   "parseSchemaRetentions": () => (/* binding */ parseSchemaRetentions)
/* harmony export */ });
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx");
/* harmony import */ var _components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AnnotationsQueryCtrl {}

_defineProperty(AnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.GraphiteDatasource).setQueryEditor(_components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryEditor).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setMetadataInspector(_components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__.MetricTankMetaInspector).setAnnotationQueryCtrl(AnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/lexer.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Parser {
  constructor(expression) {
    _defineProperty(this, "expression", void 0);

    _defineProperty(this, "lexer", void 0);

    _defineProperty(this, "tokens", void 0);

    _defineProperty(this, "index", void 0);

    this.expression = expression;
    this.lexer = new _lexer__WEBPACK_IMPORTED_MODULE_0__.Lexer(expression);
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


/**
 * List of possible actions changing the state of QueryEditor
 */
const init = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('init');
/**
 * Synchronise editor dependencies with internal state.
 */

const timeRangeChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('time-range-changed');
const queriesChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('queries-changed');
const queryChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('query-changed'); // Metrics & Tags

const segmentValueChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('segment-value-changed'); // Tags

const addNewTag = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-new-tag');
const tagChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('tag-changed');
const unpause = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('unpause'); // Functions

const addFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-function');
const removeFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('remove-function');
const moveFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('move-function');
const updateFunctionParam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('change-function-param'); // Text editor

const updateQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('update-query');
const runQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('run-current-query');
const toggleEditorMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('toggle-editor');
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditorContext": () => (/* binding */ GraphiteQueryEditorContext),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch),
/* harmony export */   "useGraphiteState": () => (/* binding */ useGraphiteState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GraphiteStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDispatch = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);
};
const useGraphiteState = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GraphiteStateContext);
};
const GraphiteQueryEditorContext = ({
  datasource,
  onRunQuery,
  onChange,
  query,
  queries,
  range,
  children
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [needsRefresh, setNeedsRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_store__WEBPACK_IMPORTED_MODULE_3__.createStore)(state => {
      setState(state);
    });
  }, []); // synchronise changes provided in props with editor's state

  const previousRange = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(range);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((previousRange === null || previousRange === void 0 ? void 0 : previousRange.raw) !== (range === null || range === void 0 ? void 0 : range.raw)) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.timeRangeChanged(range));
    }
  }, [dispatch, range, previousRange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queriesChanged(queries));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, queries]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _state$target;

    if (state && ((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.target) !== query.target) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queryChanged(query));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.init({
      target: query,
      datasource: datasource,
      range: range,
      templateSrv: (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)(),
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GraphiteStateContext.Provider, {
      value: state,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DispatchContext.Provider, {
        value: dispatch,
        children: children
      })
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHITE_TAG_OPERATORS": () => (/* binding */ GRAPHITE_TAG_OPERATORS),
/* harmony export */   "TAG_PREFIX": () => (/* binding */ TAG_PREFIX),
/* harmony export */   "addSelectMetricSegment": () => (/* binding */ addSelectMetricSegment),
/* harmony export */   "addSeriesByTagFunc": () => (/* binding */ addSeriesByTagFunc),
/* harmony export */   "buildSegments": () => (/* binding */ buildSegments),
/* harmony export */   "checkOtherSegments": () => (/* binding */ checkOtherSegments),
/* harmony export */   "emptySegments": () => (/* binding */ emptySegments),
/* harmony export */   "handleMetricsAutoCompleteError": () => (/* binding */ handleMetricsAutoCompleteError),
/* harmony export */   "handleTagsAutoCompleteError": () => (/* binding */ handleTagsAutoCompleteError),
/* harmony export */   "handleTargetChanged": () => (/* binding */ handleTargetChanged),
/* harmony export */   "parseTarget": () => (/* binding */ parseTarget),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "removeTagPrefix": () => (/* binding */ removeTagPrefix),
/* harmony export */   "smartlyHandleNewAliasByNode": () => (/* binding */ smartlyHandleNewAliasByNode),
/* harmony export */   "spliceSegments": () => (/* binding */ spliceSegments)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");





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

async function buildSegments(state, modifyLastSegment = true) {
  // Start with a shallow copy from the model, then check if "select metric" segment should be added at the end
  state.segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(state.queryModel.segments);
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

async function checkOtherSegments(state, fromIndex, modifyLastSegment = true) {
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
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)(`Fetching metrics failed: ${error.message}.`)));
  }

  return state;
}
/**
 * When tags autocomplete fails - the error is shown, but only once per page view
 */

function handleTagsAutoCompleteError(state, error) {
  if (!state.tagsAutoCompleteErrorShown) {
    state.tagsAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)(`Fetching tags failed: ${error.message}.`)));
  }

  return state;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/providers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAltSegmentsSelectables": () => (/* binding */ getAltSegmentsSelectables),
/* harmony export */   "getTagOperatorsSelectables": () => (/* binding */ getTagOperatorsSelectables),
/* harmony export */   "getTagValuesSelectables": () => (/* binding */ getTagValuesSelectables),
/* harmony export */   "getTagsAsSegmentsSelectables": () => (/* binding */ getTagsAsSegmentsSelectables),
/* harmony export */   "getTagsSelectables": () => (/* binding */ getTagsSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");




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
    const altSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(segments, segment => {
      return {
        value: segment.text,
        expandable: segment.expandable
      };
    });

    if (index > 0 && altSegments.length === 0) {
      return altSegments;
    } // add query references


    if (index === 0) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.queries, target => {
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


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleMetricsAutoCompleteError)(state, err);
  }

  return [];
}
/**
 * Get the list of segments with tags and metrics. Suggestions are reduced in getAltSegments and addAltTagSegments so in case
 * we hit MAX_SUGGESTIONS limit there are always some tags and metrics shown.
 */


async function getAltSegmentsSelectables(state, index, prefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getAltSegments(state, index, prefix));
}
function getTagOperatorsSelectables() {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(_helpers__WEBPACK_IMPORTED_MODULE_2__.GRAPHITE_TAG_OPERATORS);
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
    const altTags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text');
    altTags.splice(0, 0, state.removeTagValue);
    return altTags;
  } catch (err) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
  }

  return [];
}

async function getTagsSelectables(state, index, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTags(state, index, tagPrefix));
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
    tagsAsSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, val => {
      return {
        value: val.text,
        type: 'tag',
        expandable: false
      };
    });
  } catch (err) {
    tagsAsSegments = [];
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
  }

  return tagsAsSegments;
}
/**
 * Get list of tags, used when adding additional tags (first tag is selected from a joined list of metrics and tags)
 */


async function getTagsAsSegmentsSelectables(state, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getTagsAsSegments(state, tagPrefix));
}

async function getTagValues(state, tag, index, valuePrefix) {
  const tagExpressions = state.queryModel.renderTagExpressions(index);
  const tagKey = tag.key;
  const values = await state.datasource.getTagValuesAutoComplete(tagExpressions, tagKey, valuePrefix, {
    limit: MAX_SUGGESTIONS
  });
  const altValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text'); // Add template variables as additional values

  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
    altValues.push('${' + variable.name + ':regex}');
  });
  return altValues;
}

async function getTagValuesSelectables(state, tag, index, valuePrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTagValues(state, tag, index, valuePrefix));
}
/**
 * Add segments with tags prefixed with "tag: " to include them in the same list as metrics
 */

async function addAltTagSegments(state, prefix, altSegments) {
  let tagSegments = await getTagsAsSegments(state, prefix);
  tagSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(tagSegments, segment => {
    segment.value = _helpers__WEBPACK_IMPORTED_MODULE_2__.TAG_PREFIX + segment.value;
    return segment;
  });
  return altSegments.concat(...tagSegments);
}

function removeTaggedEntry(altSegments) {
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(altSegments, s => s.value === '_tagged');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");





const reducer = async (action, state) => {
  state = Object.assign({}, state);

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.init.match(action)) {
    const deps = action.payload;
    deps.target.target = deps.target.target || '';
    await deps.datasource.waitForFuncDefsLoaded();
    state = Object.assign({}, state, deps, {
      queryModel: new _graphite_query__WEBPACK_IMPORTED_MODULE_1__["default"](deps.datasource, deps.target, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()),
      supportsTags: deps.datasource.supportsTags,
      paused: false,
      removeTagValue: '-- remove tag --',
      funcDefs: deps.datasource.funcDefs,
      queries: deps.queries
    });
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.buildSegments)(state, false);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.timeRangeChanged.match(action)) {
    state.range = action.payload;
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queriesChanged.match(action)) {
    state.queries = action.payload;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queryChanged.match(action)) {
    state.target.target = action.payload.target || '';
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.segmentValueChanged.match(action)) {
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
      const tag = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.removeTagPrefix)(segment.value);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.pause)(state);
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.addSeriesByTagFunc)(state, tag);
      return state;
    } // if newly selected segment can be expanded -> check if the path is correct


    if (segment.expandable) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, segmentIndex + 1);
    } else {
      // if not expandable -> remove all other segments
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.spliceSegments)(state, segmentIndex + 1);
    }

    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged.match(action)) {
    const {
      tag,
      index: tagIndex
    } = action.payload;
    state.queryModel.updateTag(tag, tagIndex);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);

    if (state.queryModel.tags.length === 0) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, 0);
      state.paused = false;
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addNewTag.match(action)) {
    const segment = action.payload.segment;
    const newTagKey = segment.value;
    const newTag = {
      key: newTagKey,
      operator: '=',
      value: ''
    };
    state.queryModel.addTag(newTag);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.unpause.match(action)) {
    state.paused = false;
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addFunction.match(action)) {
    const newFunc = state.datasource.createFuncInstance(action.payload.name, {
      withDefaultParams: true
    });
    newFunc.added = true;
    state.queryModel.addFunction(newFunc);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.smartlyHandleNewAliasByNode)(state, newFunc);

    if (state.segments.length === 1 && state.segments[0].fake) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.emptySegments)(state);
    }

    if (!newFunc.params.length && newFunc.added) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
    }

    if (newFunc.def.name === 'seriesByTag') {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.removeFunction.match(action)) {
    state.queryModel.removeFunction(action.payload.func);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.moveFunction.match(action)) {
    const {
      func,
      offset
    } = action.payload;
    state.queryModel.moveFunction(func, offset);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateFunctionParam.match(action)) {
    const {
      func,
      index,
      value
    } = action.payload;
    func.updateParam(value, index);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateQuery.match(action)) {
    state.target.target = action.payload.query;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.runQuery.match(action)) {
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.toggleEditorMode.match(action)) {
    state.target.textEditor = !state.target.textEditor;
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
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

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteType": () => (/* binding */ GraphiteType)
/* harmony export */ });
let GraphiteType;

(function (GraphiteType) {
  GraphiteType["Default"] = "default";
  GraphiteType["Metrictank"] = "metrictank";
})(GraphiteType || (GraphiteType = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduceError": () => (/* binding */ reduceError)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

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
    const newMessage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(error.data.message.replace(/(<([^>]+)>)/gi, '').trim().split(/\n/)).replace(/u?&#[^;]+;/g, '');
    error.data.message = `Graphite encountered an unexpected error while handling your request. ${newMessage}`;
  }

  return error;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/versions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_GRAPHITE_VERSION": () => (/* binding */ DEFAULT_GRAPHITE_VERSION),
/* harmony export */   "GRAPHITE_VERSIONS": () => (/* binding */ GRAPHITE_VERSIONS)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const GRAPHITE_VERSIONS = ['0.9', '1.0', '1.1'];
const DEFAULT_GRAPHITE_VERSION = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(GRAPHITE_VERSIONS);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLEdBQUd6Tyw0Q0FBSSxDQUNyQnhZLEtBQUssQ0FBQ3dGLElBQU4sQ0FBV3NLLE9BQVgsQ0FDRzlMLE9BREgsQ0FDVyxlQURYLEVBQzRCLEVBRDVCLEVBRUd3UyxJQUZILEdBR0dqSixLQUhILENBR1MsSUFIVCxDQURxQixDQUFKLENBS2hCdkosT0FMZ0IsQ0FLUixhQUxRLEVBS08sRUFMUCxDQUFuQjtBQU1BaEUsSUFBQUEsS0FBSyxDQUFDd0YsSUFBTixDQUFXc0ssT0FBWCxHQUFzQix5RUFBd0VtWCxVQUFXLEVBQXpHO0FBQ0Q7O0FBQ0QsU0FBT2puQixLQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDcEJEO0FBRU8sTUFBTXlLLGlCQUFpQixHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQTFCO0FBRUEsTUFBTUQsd0JBQXdCLEdBQUdnTyw0Q0FBSSxDQUFDL04saUJBQUQsQ0FBckM7Ozs7Ozs7Ozs7OztBQ0ptQztBQUMzQjtBQUNmLGNBQWMsNkNBQU07QUFDcEIsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL3V0aWxzL3ZlcnNpb24udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvQWRkR3JhcGhpdGVGdW5jdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uRWRpdG9yQ29udHJvbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uUGFyYW1FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlVGV4dEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljU2VnbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljVGFua01ldGFJbnNwZWN0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9QbGF5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9TZXJpZXNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9UYWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL1RhZ3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbmZpZ3VyYXRpb24vTWFwcGluZ3NDb25maWd1cmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29uZmlndXJhdGlvbi9NYXBwaW5nc0hlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL3BhcnNlTG9raUxhYmVsTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2dmdW5jLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9ncmFwaGl0ZV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvbGV4ZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21ldGEudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvaGVscGVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvcHJvdmlkZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS92ZXJzaW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2ZXJzaW9uUGF0dGVybiA9IC9eKFxcZCspKD86XFwuKFxcZCspKT8oPzpcXC4oXFxkKykpPyg/Oi0oWzAtOUEtWmEtelxcLl0rKSk/LztcblxuZXhwb3J0IGNsYXNzIFNlbVZlcnNpb24ge1xuICBtYWpvcjogbnVtYmVyO1xuICBtaW5vcjogbnVtYmVyO1xuICBwYXRjaDogbnVtYmVyO1xuICBtZXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodmVyc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5tYWpvciA9IDA7XG4gICAgdGhpcy5taW5vciA9IDA7XG4gICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgdGhpcy5tZXRhID0gJyc7XG4gICAgY29uc3QgbWF0Y2ggPSB2ZXJzaW9uUGF0dGVybi5leGVjKHZlcnNpb24pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5tYWpvciA9IE51bWJlcihtYXRjaFsxXSk7XG4gICAgICB0aGlzLm1pbm9yID0gTnVtYmVyKG1hdGNoWzJdIHx8IDApO1xuICAgICAgdGhpcy5wYXRjaCA9IE51bWJlcihtYXRjaFszXSB8fCAwKTtcbiAgICAgIHRoaXMubWV0YSA9IG1hdGNoWzRdO1xuICAgIH1cbiAgfVxuXG4gIGlzR3RPckVxKHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBhcmVkID0gbmV3IFNlbVZlcnNpb24odmVyc2lvbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGFyYWJsZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyYWJsZVtpXSA+IGNvbXBhcmVkLmNvbXBhcmFibGVbaV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wYXJhYmxlW2ldIDwgY29tcGFyZWQuY29tcGFyYWJsZVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5tYWpvcik7XG4gIH1cblxuICBnZXQgY29tcGFyYWJsZSgpIHtcbiAgICByZXR1cm4gW3RoaXMubWFqb3IsIHRoaXMubWlub3IsIHRoaXMucGF0Y2hdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb25HdE9yRXEoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgYVNlbXZlciA9IG5ldyBTZW1WZXJzaW9uKGEpO1xuICByZXR1cm4gYVNlbXZlci5pc0d0T3JFcShiKTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWdtZW50LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBGdW5jRGVmcyB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbmltcG9ydCB7IG1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyB9IGZyb20gJy4vaGVscGVycyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZ1bmNEZWZzOiBGdW5jRGVmcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uKHsgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gbWFwRnVuY0RlZnNUb1NlbGVjdGFibGVzKGZ1bmNEZWZzKSwgW2Z1bmNEZWZzXSk7XG5cbiAgLy8gTm90ZTogYWN0aW9ucy5hZGRGdW5jdGlvbiB3aWxsIGFkZCBhIGNvbXBvbmVudCB0aGF0IHdpbGwgaGF2ZSBhIGRyb3Bkb3duIG9yIGlucHV0IGluIGF1dG8tZm9jdXNcbiAgLy8gKHRoZSBmaXJzdCBwYXJhbSBvZiB0aGUgZnVuY3Rpb24pLiBUaGlzIGF1dG8tZm9jdXMgd2lsbCBjYXVzZSBvbkJsdXIoKSBvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uJ3NcbiAgLy8gU2VnbWVudCBjb21wb25lbnQgYW5kIHRyaWdnZXIgb25DaGFuZ2Ugb25jZSBhZ2Fpbi4gKHdoeT8gd2UgY2FsbCBvbkNoYW5nZSBpZiB0aGUgdXNlciBkaXNtaXNzZWRcbiAgLy8gdGhlIGRyb3Bkb3duLCBzZWU6IFNlZ21lbnRTZWxlY3Qub25DbG9zZU1lbnUgZm9yIG1vcmUgZGV0YWlscykuIFRvIGF2b2lkIGl0IHdlIG5lZWQgdG8gd2FpdCBmb3JcbiAgLy8gdGhlIFNlZ21lbnQgdG8gZGlzYXBwZWFyIGZpcnN0IChoZW5jZSB1c2VFZmZlY3QpIGFuZCB0aGVuIGRpc3BhdGNoIHRoZSBhY3Rpb24gdGhhdCB3aWxsIGFkZCBuZXdcbiAgLy8gY29tcG9uZW50cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWU/LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuYWRkRnVuY3Rpb24oeyBuYW1lOiB2YWx1ZS52YWx1ZSB9KSk7XG4gICAgICBzZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnRcbiAgICAgIENvbXBvbmVudD17PEJ1dHRvbiBpY29uPVwicGx1c1wiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2N4KHN0eWxlcy5idXR0b24pfSBhcmlhLWxhYmVsPVwiQWRkIG5ldyBmdW5jdGlvblwiIC8+fVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuXG5pbXBvcnQgeyBGdW5jdGlvbkVkaXRvckNvbnRyb2xzLCBGdW5jdGlvbkVkaXRvckNvbnRyb2xzUHJvcHMgfSBmcm9tICcuL0Z1bmN0aW9uRWRpdG9yQ29udHJvbHMnO1xuXG5pbnRlcmZhY2UgRnVuY3Rpb25FZGl0b3JQcm9wcyBleHRlbmRzIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB7XG4gIGZ1bmM6IEZ1bmNJbnN0YW5jZTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgYCxcbiAgICBsYWJlbDogY3NzKHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZSwgLy8gdG8gbWF0Y2ggLmdmLWZvcm0tbGFiZWxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgfSksXG4gIH07XG59O1xuXG5jb25zdCBGdW5jdGlvbkVkaXRvcjogUmVhY3QuRkM8RnVuY3Rpb25FZGl0b3JQcm9wcz4gPSAoeyBvbk1vdmVMZWZ0LCBvbk1vdmVSaWdodCwgZnVuYywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICh7IHVwZGF0ZVBvcHBlclBvc2l0aW9uIH06IGFueSkgPT4gKFxuICAgIDxGdW5jdGlvbkVkaXRvckNvbnRyb2xzXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBmdW5jPXtmdW5jfVxuICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICBvbk1vdmVMZWZ0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgIG9uTW92ZVJpZ2h0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtmdW5jLmRlZi51bmtub3duICYmIChcbiAgICAgICAgPFRvb2x0aXAgY29udGVudD17PFRvb2x0aXBDb250ZW50IC8+fSBwbGFjZW1lbnQ9XCJib3R0b21cIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgICA8SWNvbiBkYXRhLXRlc3RpZD1cIndhcm5pbmctaWNvblwiIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIHNpemU9XCJ4c1wiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gICAgICA8VG9vbHRpcCBjb250ZW50PXtyZW5kZXJDb250ZW50fSBwbGFjZW1lbnQ9XCJ0b3BcIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntmdW5jLmRlZi5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuIENoZWNrIHlvdXIgZnVuY3Rpb24gZm9yIHR5cG9zIGFuZHsnICd9XG4gICAgICA8YVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dyYXBoaXRlLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9mdW5jdGlvbnMuaHRtbFwiXG4gICAgICA+XG4gICAgICAgIHJlYWQgdGhlIGRvY3NcbiAgICAgIDwvYT57JyAnfVxuICAgICAgdG8gc2VlIHdoZXRoZXIgeW91IG5lZWQgdG8gdXBncmFkZSB5b3VyIGRhdGEgc291cmNl4oCZcyB2ZXJzaW9uIHRvIG1ha2UgdGhpcyBmdW5jdGlvbiBhdmFpbGFibGUuXG4gICAgPC9zcGFuPlxuICApO1xufSk7XG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9ICdGdW5jdGlvbkVkaXRvclRvb2x0aXBDb250ZW50JztcblxuZXhwb3J0IHsgRnVuY3Rpb25FZGl0b3IgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB7XG4gIG9uTW92ZUxlZnQ6IChmdW5jOiBGdW5jSW5zdGFuY2UpID0+IHZvaWQ7XG4gIG9uTW92ZVJpZ2h0OiAoZnVuYzogRnVuY0luc3RhbmNlKSA9PiB2b2lkO1xuICBvblJlbW92ZTogKGZ1bmM6IEZ1bmNJbnN0YW5jZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgRnVuY3Rpb25EZXNjcmlwdGlvbiA9IFJlYWN0LmxhenkoYXN5bmMgKCkgPT4ge1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHsgZGVmYXVsdDogcnN0Mmh0bWwgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInJzdDJodG1sXCIgKi8gJ3JzdDJodG1sJyk7XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdChwcm9wczogeyBkZXNjcmlwdGlvbj86IHN0cmluZyB9KSB7XG4gICAgICByZXR1cm4gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJzdDJodG1sKHByb3BzLmRlc2NyaXB0aW9uID8/ICcnKSB9fSAvPjtcbiAgICB9LFxuICB9O1xufSk7XG5cbmNvbnN0IEZ1bmN0aW9uSGVscEJ1dHRvbiA9IChwcm9wczogeyBkZXNjcmlwdGlvbj86IHN0cmluZzsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgaWYgKHByb3BzLmRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHRvb2x0aXAgPSAoXG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxzcGFuPkxvYWRpbmcgZGVzY3JpcHRpb24uLi48L3NwYW4+fT5cbiAgICAgICAgPEZ1bmN0aW9uRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBjb250ZW50PXt0b29sdGlwfSBwbGFjZW1lbnQ9eydib3R0b20tZW5kJ30+XG4gICAgICAgIDxJY29uIGNsYXNzTmFtZT17cHJvcHMuZGVzY3JpcHRpb24gPyB1bmRlZmluZWQgOiAncG9pbnRlcid9IG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJY29uXG4gICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihcbiAgICAgICAgICAnaHR0cDovL2dyYXBoaXRlLnJlYWR0aGVkb2NzLm9yZy9lbi9sYXRlc3QvZnVuY3Rpb25zLmh0bWwjZ3JhcGhpdGUucmVuZGVyLmZ1bmN0aW9ucy4nICsgcHJvcHMubmFtZSxcbiAgICAgICAgICAnX2JsYW5rJ1xuICAgICAgICApO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZ1bmN0aW9uRWRpdG9yQ29udHJvbHMgPSAoXG4gIHByb3BzOiBGdW5jdGlvbkVkaXRvckNvbnRyb2xzUHJvcHMgJiB7XG4gICAgZnVuYzogRnVuY0luc3RhbmNlO1xuICB9XG4pID0+IHtcbiAgY29uc3QgeyBmdW5jLCBvbk1vdmVMZWZ0LCBvbk1vdmVSaWdodCwgb25SZW1vdmUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6ICc2MHB4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEljb24gbmFtZT1cImFycm93LWxlZnRcIiBvbkNsaWNrPXsoKSA9PiBvbk1vdmVMZWZ0KGZ1bmMpfSAvPlxuICAgICAgPEZ1bmN0aW9uSGVscEJ1dHRvbiBuYW1lPXtmdW5jLmRlZi5uYW1lfSBkZXNjcmlwdGlvbj17ZnVuYy5kZWYuZGVzY3JpcHRpb259IC8+XG4gICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShmdW5jKX0gLz5cbiAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIG9uQ2xpY2s9eygpID0+IG9uTW92ZVJpZ2h0KGZ1bmMpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZ21lbnQsIFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IHR5cGUgRWRpdGFibGVQYXJhbSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25hbDogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pjtcbn07XG5cbnR5cGUgRmllbGRFZGl0b3JQcm9wcyA9IHtcbiAgZWRpdGFibGVQYXJhbTogRWRpdGFibGVQYXJhbTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkV4cGFuZGVkQ2hhbmdlOiAoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGF1dG9mb2N1czogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmVuZGVyIGEgZnVuY3Rpb24gcGFyYW1ldGVyIHdpdGggYSBzZWdtZW50IGRyb3Bkb3duIGZvciBtdWx0aXBsZSBvcHRpb25zIG9yIHNpbXBsZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uUGFyYW1FZGl0b3IoeyBlZGl0YWJsZVBhcmFtLCBvbkNoYW5nZSwgb25FeHBhbmRlZENoYW5nZSwgYXV0b2ZvY3VzIH06IEZpZWxkRWRpdG9yUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmIChlZGl0YWJsZVBhcmFtLm9wdGlvbnM/Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnRcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XG4gICAgICAgIHZhbHVlPXtlZGl0YWJsZVBhcmFtLnZhbHVlfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlZ21lbnR9XG4gICAgICAgIG9wdGlvbnM9e2VkaXRhYmxlUGFyYW0ub3B0aW9uc31cbiAgICAgICAgcGxhY2Vob2xkZXI9eycgKycgKyBlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS52YWx1ZSB8fCAnJyk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRXhwYW5kZWRDaGFuZ2U9e29uRXhwYW5kZWRDaGFuZ2V9XG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgYWxsb3dFbXB0eVZhbHVlPXt0cnVlfVxuICAgICAgPjwvU2VnbWVudD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VnbWVudElucHV0XG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2VkaXRhYmxlUGFyYW0udmFsdWUgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsnICsnICsgZWRpdGFibGVQYXJhbS5uYW1lfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25FeHBhbmRlZENoYW5nZT17b25FeHBhbmRlZENoYW5nZX1cbiAgICAgICAgLy8gaW5wdXQgc3R5bGVcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjVweCcsIHBhZGRpbmdUb3A6ICcycHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBwYWRkaW5nTGVmdDogJzRweCcsIG1pbldpZHRoOiAnMTAwcHgnIH19XG4gICAgICA+PC9TZWdtZW50SW5wdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHNlZ21lbnQ6IGNzcyh7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBpbnB1dDogY3NzYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9LFxuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWdtZW50U2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0RlZnMsIEZ1bmNJbnN0YW5jZSB9IGZyb20gJy4uL2dmdW5jJztcblxuaW1wb3J0IHsgQWRkR3JhcGhpdGVGdW5jdGlvbiB9IGZyb20gJy4vQWRkR3JhcGhpdGVGdW5jdGlvbic7XG5pbXBvcnQgeyBHcmFwaGl0ZUZ1bmN0aW9uRWRpdG9yIH0gZnJvbSAnLi9HcmFwaGl0ZUZ1bmN0aW9uRWRpdG9yJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZnVuY3Rpb25zOiBGdW5jSW5zdGFuY2VbXTtcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uc1NlY3Rpb24oeyBmdW5jdGlvbnMgPSBbXSwgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJGdW5jdGlvbnNcIiBmaWxsPXt0cnVlfT5cbiAgICAgIHtmdW5jdGlvbnMubWFwKChmdW5jOiBGdW5jSW5zdGFuY2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuICFmdW5jLmhpZGRlbiAmJiA8R3JhcGhpdGVGdW5jdGlvbkVkaXRvciBrZXk9e2luZGV4fSBmdW5jPXtmdW5jfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPEFkZEdyYXBoaXRlRnVuY3Rpb24gZnVuY0RlZnM9e2Z1bmNEZWZzfSAvPlxuICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBJbmxpbmVMYWJlbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcblxuaW1wb3J0IHsgRnVuY3Rpb25FZGl0b3IgfSBmcm9tICcuL0Z1bmN0aW9uRWRpdG9yJztcbmltcG9ydCB7IEVkaXRhYmxlUGFyYW0sIEZ1bmN0aW9uUGFyYW1FZGl0b3IgfSBmcm9tICcuL0Z1bmN0aW9uUGFyYW1FZGl0b3InO1xuaW1wb3J0IHsgbWFwRnVuY0luc3RhbmNlVG9QYXJhbXMgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBGdW5jdGlvbkVkaXRvclByb3BzID0ge1xuICBmdW5jOiBGdW5jSW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIEFsbG93cyBlZGl0aW5nIGZ1bmN0aW9uIHBhcmFtcyBhbmQgcmVtb3ZpbmcvbW92aW5nIGEgZnVuY3Rpb24gKG5vdGU6IGVkaXRpbmcgZnVuY3Rpb24gbmFtZSBpcyBub3Qgc3VwcG9ydGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVGdW5jdGlvbkVkaXRvcih7IGZ1bmMgfTogRnVuY3Rpb25FZGl0b3JQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBrZWVwIHRyYWNrIG9mIG1vdXNlIG92ZXIgYW5kIGlzRXhwYW5kZWQgc3RhdGUgdG8gZGlzcGxheSBidXR0b25zIGZvciBhZGRpbmcgb3B0aW9uYWwvbXVsdGlwbGUgcGFyYW1zXG4gIC8vIG9ubHkgd2hlbiB0aGUgdXNlciBtb3VzZSBvdmVyIG92ZXIgdGhlIGZ1bmN0aW9uIGVkaXRvciBPUiBhbnkgcGFyYW0gZWRpdG9yIGlzIGV4cGFuZGVkLlxuICBjb25zdCBbbW91c2VPdmVyLCBzZXRJc01vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHBhcmFtcyA9IG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmMpO1xuICBwYXJhbXMgPSBwYXJhbXMuZmlsdGVyKChwOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gZnVuYy5hZGRlZCBpcyBzZXQgZm9yIG5ld2x5IGFkZGVkIGZ1bmN0aW9ucyAtIHNlZSBhdXRvZm9jdXMgYmVsb3dcbiAgICByZXR1cm4gKGluZGV4IDwgZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAmJiAhcC5vcHRpb25hbCkgfHwgZnVuYy5hZGRlZCB8fCBwLnZhbHVlIHx8IGV4cGFuZGVkIHx8IG1vdXNlT3ZlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5lcnJvcl06IGZ1bmMuZGVmLnVua25vd24gfSl9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNNb3VzZU92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTW91c2VPdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIHNwYWNpbmc9XCJub25lXCI+XG4gICAgICAgIDxGdW5jdGlvbkVkaXRvclxuICAgICAgICAgIGZ1bmM9e2Z1bmN9XG4gICAgICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5tb3ZlRnVuY3Rpb24oeyBmdW5jLCBvZmZzZXQ6IC0xIH0pKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm1vdmVGdW5jdGlvbih7IGZ1bmMsIG9mZnNldDogMSB9KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVGdW5jdGlvbih7IGZ1bmMgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+KDwvSW5saW5lTGFiZWw+XG4gICAgICAgIHtwYXJhbXMubWFwKChlZGl0YWJsZVBhcmFtOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEZ1bmN0aW9uUGFyYW1FZGl0b3JcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e2luZGV4ID09PSAwICYmIGZ1bmMuYWRkZWR9XG4gICAgICAgICAgICAgICAgZWRpdGFibGVQYXJhbT17ZWRpdGFibGVQYXJhbX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnIHx8IGVkaXRhYmxlUGFyYW0ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVGdW5jdGlvblBhcmFtKHsgZnVuYywgaW5kZXgsIHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgc2V0SXNNb3VzZU92ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZT17c2V0SXNFeHBhbmRlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2luZGV4ICE9PSBwYXJhbXMubGVuZ3RoIC0gMSA/ICcsJyA6ICcnfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4pPC9JbmxpbmVMYWJlbD5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjaW5nKDEpfWAsXG4gICAgaGVpZ2h0OiBgJHt0aGVtZS52MS5zcGFjaW5nLmZvcm1JbnB1dEhlaWdodH1weGAsXG4gIH0pLFxuICBlcnJvcjogY3NzYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmVycm9yLm1haW59O1xuICBgLFxuICBsYWJlbDogY3NzKHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgfSksXG4gIGJ1dHRvbjogY3NzKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGV4dCwgR3JhcGhpdGVRdWVyeUVkaXRvclByb3BzLCB1c2VEaXNwYXRjaCwgdXNlR3JhcGhpdGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBGdW5jdGlvbnNTZWN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnNTZWN0aW9uJztcbmltcG9ydCB7IEdyYXBoaXRlVGV4dEVkaXRvciB9IGZyb20gJy4vR3JhcGhpdGVUZXh0RWRpdG9yJztcbmltcG9ydCB7IFNlcmllc1NlY3Rpb24gfSBmcm9tICcuL1Nlcmllc1NlY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVRdWVyeUVkaXRvcih7XG4gIGRhdGFzb3VyY2UsXG4gIG9uUnVuUXVlcnksXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgcmFuZ2UsXG4gIHF1ZXJpZXMsXG59OiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHRcbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICA+XG4gICAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRlbnQgLz5cbiAgICA8L0dyYXBoaXRlUXVlcnlFZGl0b3JDb250ZXh0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGVudCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdGF0ZSA9IHVzZUdyYXBoaXRlU3RhdGUoKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXN1YWxFZGl0b3J9PlxuICAgICAgICB7c3RhdGUudGFyZ2V0Py50ZXh0RWRpdG9yICYmIDxHcmFwaGl0ZVRleHRFZGl0b3IgcmF3UXVlcnk9e3N0YXRlLnRhcmdldC50YXJnZXR9IC8+fVxuICAgICAgICB7IXN0YXRlLnRhcmdldD8udGV4dEVkaXRvciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZXJpZXNTZWN0aW9uIHN0YXRlPXtzdGF0ZX0gLz5cbiAgICAgICAgICAgIDxGdW5jdGlvbnNTZWN0aW9uIGZ1bmN0aW9ucz17c3RhdGUucXVlcnlNb2RlbD8uZnVuY3Rpb25zfSBmdW5jRGVmcz17c3RhdGUuZnVuY0RlZnMhfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn1cbiAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGVkaXRvciBtb2RlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMudG9nZ2xlRWRpdG9yTW9kZSgpKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIHZpc3VhbEVkaXRvcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgdG9nZ2xlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJhd1F1ZXJ5OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVUZXh0RWRpdG9yKHsgcmF3UXVlcnkgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHVwZGF0ZVF1ZXJ5ID0gdXNlQ2FsbGJhY2soXG4gICAgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMudXBkYXRlUXVlcnkoeyBxdWVyeSB9KSk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2hdXG4gICk7XG5cbiAgY29uc3QgcnVuUXVlcnkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy5ydW5RdWVyeSgpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlGaWVsZFxuICAgICAgcXVlcnk9e3Jhd1F1ZXJ5fVxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZVF1ZXJ5fVxuICAgICAgb25CbHVyPXtydW5RdWVyeX1cbiAgICAgIG9uUnVuUXVlcnk9e3J1blF1ZXJ5fVxuICAgICAgcGxhY2Vob2xkZXI9eydFbnRlciBhIEdyYXBoaXRlIHF1ZXJ5IChydW4gd2l0aCBTaGlmdCtFbnRlciknfVxuICAgICAgcG9ydGFsT3JpZ2luPVwiZ3JhcGhpdGVcIlxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VnbWVudEFzeW5jIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyB9IGZyb20gJy4uL3N0YXRlL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudDtcbiAgbWV0cmljSW5kZXg6IG51bWJlcjtcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZTtcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZXRyaWMgbm9kZSBpbiB0aGUgbWV0cmljIHBhdGggYXQgdGhlIGdpdmVuIGluZGV4LiBBbGxvd3MgdG8gY2hhbmdlIHRoZSBtZXRyaWMgbmFtZSB0byBvbmUgb2YgdGhlXG4gKiBwcm92aWRlZCBvcHRpb25zIG9yIGEgY3VzdG9tIHZhbHVlLlxuICpcbiAqIE9wdGlvbnMgZm9yIHRhZyBuYW1lcyBhbmQgbWV0cmljIG5hbWVzIGFyZSByZWxvYWRlZCB3aGlsZSB1c2VyIGlzIHR5cGluZyB3aXRoIGJhY2tlbmQgdGFraW5nIGNhcmUgb2YgYXV0by1jb21wbGV0ZVxuICogKGF1dG8tY29tcGxldGUgY2Fubm90IGJlIGltcGxlbWVudGVkIGluIGZyb250LWVuZCBiZWNhdXNlIGJhY2tlbmQgcmV0dXJucyBvbmx5IGxpbWl0ZWQgbnVtYmVyIG9mIGVudHJpZXMpXG4gKlxuICogZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcygpIGFsc28gcmV0dXJucyBsaXN0IG9mIHRhZ3MgZm9yIHNlZ21lbnQgd2l0aCBpbmRleD0wLiBPbmNlIGEgdGFnIGlzIHNlbGVjdGVkIHRoZSBlZGl0b3JcbiAqIGVudGVycyB0YWctYWRkaW5nIG1vZGUgKHNlZSBTZXJpZXNTZWN0aW9uIGFuZCBHcmFwaGl0ZVF1ZXJ5TW9kZWwuc2VyaWVzQnlUYWdVc2VkKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1ldHJpY1NlZ21lbnQoeyBtZXRyaWNJbmRleCwgc2VnbWVudCwgc3RhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2FkT3B0aW9ucyA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyhzdGF0ZSwgbWV0cmljSW5kZXgsIHZhbHVlIHx8ICcnKTtcbiAgICB9LFxuICAgIFtzdGF0ZSwgbWV0cmljSW5kZXhdXG4gICk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiBkZWJvdW5jZShsb2FkT3B0aW9ucywgMjAwLCB7IGxlYWRpbmc6IHRydWUgfSksIFtsb2FkT3B0aW9uc10pO1xuXG4gIGNvbnN0IG9uU2VnbWVudENoYW5nZWQgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0YWJsZVZhbHVlOiBTZWxlY3RhYmxlVmFsdWU8R3JhcGhpdGVTZWdtZW50IHwgc3RyaW5nPikgPT4ge1xuICAgICAgLy8gc2VsZWN0YWJsZVZhbHVlLnZhbHVlIGlzIGFsd2F5cyBkZWZpbmVkIGJlY2F1c2UgZW1wdHlWYWx1ZXMgYXJlIG5vdCBhbGxvd2VkIGluIFNlZ21lbnRBc3luYyBieSBkZWZhdWx0XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNlZ21lbnRWYWx1ZUNoYW5nZWQoeyBzZWdtZW50OiBzZWxlY3RhYmxlVmFsdWUudmFsdWUhLCBpbmRleDogbWV0cmljSW5kZXggfSkpO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoLCBtZXRyaWNJbmRleF1cbiAgKTtcblxuICAvLyBzZWdtZW50VmFsdWVDaGFuZ2VkIGFjdGlvbiB3aWxsIGRlc3Ryb3kgU2VnbWVudEFzeW5jIGltbWVkaWF0ZWx5IGlmIGEgdGFnIGlzIHNlbGVjdGVkLiBUbyBnaXZlIHRpbWVcbiAgLy8gZm9yIHRoZSBjbGVhbiB1cCB0aGUgYWN0aW9uIGlzIGRlYm91bmNlZC5cbiAgY29uc3Qgb25TZWdtZW50Q2hhbmdlZERlYm91bmNlZCA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2Uob25TZWdtZW50Q2hhbmdlZCwgMTAwKSwgW29uU2VnbWVudENoYW5nZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWdtZW50QXN5bmM8R3JhcGhpdGVTZWdtZW50IHwgc3RyaW5nPlxuICAgICAgdmFsdWU9e3NlZ21lbnQudmFsdWV9XG4gICAgICBpbnB1dE1pbldpZHRoPXsxNTB9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgcmVsb2FkT3B0aW9uc09uQ2hhbmdlPXt0cnVlfVxuICAgICAgb25DaGFuZ2U9e29uU2VnbWVudENoYW5nZWREZWJvdW5jZWR9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1ldGFkYXRhSW5zcGVjdG9yUHJvcHMsIHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5cbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgcGFyc2VTY2hlbWFSZXRlbnRpb25zLCBnZXRSb2xsdXBOb3RpY2UsIGdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIH0gZnJvbSAnLi4vbWV0YSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnMsIE1ldHJpY1RhbmtTZXJpZXNNZXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE1ldGFkYXRhSW5zcGVjdG9yUHJvcHM8R3JhcGhpdGVEYXRhc291cmNlLCBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcmVuZGVyTWV0YShtZXRhOiBNZXRyaWNUYW5rU2VyaWVzTWV0YSwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcbiAgICBjb25zdCBidWNrZXRzID0gcGFyc2VTY2hlbWFSZXRlbnRpb25zKG1ldGFbJ3NjaGVtYS1yZXRlbnRpb25zJ10pO1xuICAgIGNvbnN0IHJvbGx1cE5vdGljZSA9IGdldFJvbGx1cE5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IHJ1bnRpbWVOb3RpY2UgPSBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IG5vcm1GdW5jID0gKG1ldGFbJ2NvbnNvbGlkYXRvci1ub3JtZmV0Y2gnXSA/PyAnJykucmVwbGFjZSgnQ29uc29saWRhdG9yJywgJycpO1xuXG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gYnVja2V0cy5yZWR1Y2UoXG4gICAgICAoYWNjLCBidWNrZXQpID0+IGFjYyArIChidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtfSBrZXk9e2tleX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YUl0ZW1IZWFkZXJ9PlxuICAgICAgICAgIFNjaGVtYToge21ldGFbJ3NjaGVtYS1uYW1lJ119XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBtdXRlZFwiPlNlcmllcyBjb3VudDoge21ldGEuY291bnR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtQm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcEhlYWRpbmd9PlN0ZXAgMTogRmV0Y2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgRmlyc3QgZGF0YSBpcyBmZXRjaGVkLCBlaXRoZXIgZnJvbSByYXcgZGF0YSBhcmNoaXZlIG9yIGEgcm9sbHVwIGFyY2hpdmVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cm9sbHVwTm90aWNlICYmIDxwPntyb2xsdXBOb3RpY2UudGV4dH08L3A+fVxuICAgICAgICAgICAgeyFyb2xsdXBOb3RpY2UgJiYgPHA+Tm8gcm9sbHVwIGFyY2hpdmUgd2FzIHVzZWQ8L3A+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7YnVja2V0cy5tYXAoKGJ1Y2tldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRMZW5ndGggPSBidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGhQZXJjZW50ID0gKGJ1Y2tldExlbmd0aCAvIHRvdGFsU2Vjb25kcykgKiAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpbmRleCA9PT0gbWV0YVsnYXJjaGl2ZS1yZWFkJ107XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2J1Y2tldC5yZXRlbnRpb259IGNsYXNzTmFtZT17c3R5bGVzLmJ1Y2tldH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVja2V0SW50ZXJ2YWx9PntidWNrZXQuaW50ZXJ2YWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5idWNrZXRSZXRlbnRpb24sIHsgW3N0eWxlcy5idWNrZXRSZXRlbnRpb25BY3RpdmVdOiBpc0FjdGl2ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogbGVuZ3RoUGVyY2VudCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxMDAgLSBsZW5ndGhQZXJjZW50IH19PntidWNrZXQucmV0ZW50aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDI6IE5vcm1hbGl6YXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgTm9ybWFsaXphdGlvbiBoYXBwZW5zIHdoZW4gc2VyaWVzIHdpdGggZGlmZmVyZW50IGludGVydmFscyBiZXR3ZWVuIHBvaW50cyBhcmUgY29tYmluZWQuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPiAxICYmIDxwPk5vcm1hbGl6YXRpb24gZGlkIG9jY3VyIHVzaW5nIHtub3JtRnVuY308L3A+fVxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPT09IDEgJiYgPHA+Tm8gbm9ybWFsaXphdGlvbiB3YXMgbmVlZGVkPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDM6IFJ1bnRpbWUgY29uc29saWRhdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICBJZiB0aGVyZSBhcmUgdG9vIG1hbnkgZGF0YSBwb2ludHMgYXQgdGhpcyBwb2ludCBNZXRyaWN0YW5rIHdpbGwgY29uc29saWRhdGUgdGhlbSBkb3duIHRvIGJlbG93IG1heCBkYXRhXG4gICAgICAgICAgICAgIHBvaW50cyAoc2V0IGluIHF1ZXJpZXMgdGFiKS5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cnVudGltZU5vdGljZSAmJiA8cD57cnVudGltZU5vdGljZS50ZXh0fTwvcD59XG4gICAgICAgICAgICB7IXJ1bnRpbWVOb3RpY2UgJiYgPHA+Tm8gcnVudGltZSBjb25zb2xpZGF0aW9uPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIGF3YXkgdG8gZGVkdXBlIHRoZW1cbiAgICBjb25zdCBzZXJpZXNNZXRhczogUmVjb3JkPHN0cmluZywgTWV0cmljVGFua1Nlcmllc01ldGE+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNlcmllcyBvZiBkYXRhKSB7XG4gICAgICBpZiAoc2VyaWVzLm1ldGEgJiYgc2VyaWVzLm1ldGEuY3VzdG9tKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2Ygc2VyaWVzLm1ldGEuY3VzdG9tLnNlcmllc01ldGFMaXN0IGFzIE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pIHtcbiAgICAgICAgICAvLyBrZXkgaXMgdG8gZGVkdXBlIGFzIG1hbnkgc2VyaWVzIHdpbGwgaGF2ZSBpZGVudGl0aWNhbCBtZXRhXG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7SlNPTi5zdHJpbmdpZnkobWV0YUl0ZW0pfWA7XG5cbiAgICAgICAgICBpZiAoc2VyaWVzTWV0YXNba2V5XSkge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XS5jb3VudCArPSBtZXRhSXRlbS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XSA9IG1ldGFJdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhzZXJpZXNNZXRhcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdj5ObyByZXNwb25zZSBtZXRhIGRhdGE8L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5NZXRyaWN0YW5rIExpbmVhZ2U8L2gyPlxuICAgICAgICB7T2JqZWN0LmtleXMoc2VyaWVzTWV0YXMpLm1hcCgoa2V5KSA9PiB0aGlzLnJlbmRlck1ldGEoc2VyaWVzTWV0YXNba2V5XSwga2V5KSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWUuaXNEYXJrID8gdGhlbWUucGFsZXR0ZS5ncmF5MjUgOiB0aGVtZS5wYWxldHRlLmdyYXk4NTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZGFyazEgOiB0aGVtZS5wYWxldHRlLndoaXRlO1xuICBjb25zdCBoZWFkZXJCZyA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZ3JheTE1IDogdGhlbWUucGFsZXR0ZS5ncmF5ODU7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhSXRlbTogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1ldGFJdGVtSGVhZGVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke2hlYWRlckJnfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIG1ldGFJdGVtQm9keTogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBIZWFkaW5nOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBEZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFdlYWt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHN0ZXA6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5sZ307XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYCxcbiAgICBidWNrZXQ6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLm1kfTtcbiAgICBgLFxuICAgIGJ1Y2tldEludGVydmFsOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICBgLFxuICAgIGJ1Y2tldFJldGVudGlvbjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUucGFsZXR0ZS5ibHVlODV9LCAke3RoZW1lLnBhbGV0dGUuYmx1ZTk1fSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLndoaXRlfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyLnJhZGl1cy5tZH07XG4gICAgYCxcbiAgICBidWNrZXRSZXRlbnRpb25BY3RpdmU6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLnBhbGV0dGUuZ3JlZW5CYXNlfSwgJHt0aGVtZS5wYWxldHRlLmdyZWVuU2hhZGV9KTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IE1ldHJpY1NlZ21lbnQgfSBmcm9tICcuL01ldHJpY1NlZ21lbnQnO1xuXG50eXBlIFByb3BzID0ge1xuICBzZWdtZW50czogR3JhcGhpdGVTZWdtZW50W107XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gTWV0cmljc1NlY3Rpb24oeyBzZWdtZW50cyA9IFtdLCBzdGF0ZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VnbWVudHMubWFwKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPE1ldHJpY1NlZ21lbnQgc2VnbWVudD17c2VnbWVudH0gbWV0cmljSW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSBzdGF0ZT17c3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlCdXR0b24oKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChhY3Rpb25zLnVucGF1c2UoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICByZXR1cm4gPEJ1dHRvbiBpY29uPVwicGxheVwiIG9uQ2xpY2s9e29uQ2xpY2t9IHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgYXJpYS1sYWJlbD1cIlVucGF1c2UgcXVlcnlcIiAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlZ21lbnRTZWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5cbmltcG9ydCB7IE1ldHJpY3NTZWN0aW9uIH0gZnJvbSAnLi9NZXRyaWNzU2VjdGlvbic7XG5pbXBvcnQgeyBUYWdzU2VjdGlvbiB9IGZyb20gJy4vVGFnc1NlY3Rpb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlcmllc1NlY3Rpb24oeyBzdGF0ZSB9OiBQcm9wcykge1xuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IHN0YXRlLnF1ZXJ5TW9kZWw/LnNlcmllc0J5VGFnVXNlZCA/IChcbiAgICA8VGFnc1NlY3Rpb24gdGFncz17c3RhdGUucXVlcnlNb2RlbD8udGFnc30gc3RhdGU9e3N0YXRlfSAvPlxuICApIDogKFxuICAgIDxNZXRyaWNzU2VjdGlvbiBzZWdtZW50cz17c3RhdGUuc2VnbWVudHN9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWdtZW50U2VjdGlvbiBsYWJlbD1cIlNlcmllc1wiIGZpbGw9e3RydWV9PlxuICAgICAge3NlY3Rpb25Db250ZW50fVxuICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlZ21lbnQsIFNlZ21lbnRBc3luYyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcbmltcG9ydCB7IGdldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzLCBnZXRUYWdzU2VsZWN0YWJsZXMsIGdldFRhZ1ZhbHVlc1NlbGVjdGFibGVzIH0gZnJvbSAnLi4vc3RhdGUvcHJvdmlkZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IEdyYXBoaXRlVGFnLCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICB0YWc6IEdyYXBoaXRlVGFnO1xuICB0YWdJbmRleDogbnVtYmVyO1xuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xufTtcblxuLyoqXG4gKiBFZGl0b3IgZm9yIGEgdGFnIGF0IGdpdmVuIGluZGV4LiBBbGxvd3MgY2hhbmdpbmcgdGhlIG5hbWUgb2YgdGhlIHRhZywgb3BlcmF0b3Igb3IgdmFsdWUuIFRhZyBuYW1lcyBhcmUgcHJvdmlkZWQgd2l0aFxuICogZ2V0VGFnc1NlbGVjdGFibGVzIGFuZCBjb250YWluIG9ubHkgdmFsaWQgdGFncyAoaXQgbWF5IGRlcGVuZCBvbiBjdXJyZW50bHkgdXNlZCB0YWdzKS4gVGhlIGRyb3Bkb3duIGZvciB0YWcgbmFtZXMgaXNcbiAqIGFsc28gdXNlZCBmb3IgcmVtb3ZpbmcgdGFnICh3aXRoIGEgc3BlY2lhbCBcIi0tcmVtb3ZlIHRhZy0tXCIgb3B0aW9uIHByb3ZpZGVkIGJ5IGdldFRhZ3NTZWxlY3RhYmxlcykuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFuZCB2YWx1ZXMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlXG4gKiAoYXV0by1jb21wbGV0ZSBjYW5ub3QgYmUgaW1wbGVtZW50ZWQgaW4gZnJvbnQtZW5kIGJlY2F1c2UgYmFja2VuZCByZXR1cm5zIG9ubHkgbGltaXRlZCBudW1iZXIgb2YgZW50cmllcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRhZ0VkaXRvcih7IHRhZywgdGFnSW5kZXgsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZ2V0VGFnc09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnc1NlbGVjdGFibGVzKHN0YXRlLCB0YWdJbmRleCwgaW5wdXRWYWx1ZSB8fCAnJyk7XG4gICAgfSxcbiAgICBbc3RhdGUsIHRhZ0luZGV4XVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0VGFnc09wdGlvbnMsIDIwMCwgeyBsZWFkaW5nOiB0cnVlIH0pLCBbZ2V0VGFnc09wdGlvbnNdKTtcblxuICBjb25zdCBnZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMoc3RhdGUsIHRhZywgdGFnSW5kZXgsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlLCB0YWdJbmRleCwgdGFnXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKGdldFRhZ1ZhbHVlT3B0aW9ucywgMjAwLCB7IGxlYWRpbmc6IHRydWUgfSksXG4gICAgW2dldFRhZ1ZhbHVlT3B0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VnbWVudEFzeW5jXG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgdmFsdWU9e3RhZy5rZXl9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRHZXRUYWdzT3B0aW9uc31cbiAgICAgICAgcmVsb2FkT3B0aW9uc09uQ2hhbmdlPXt0cnVlfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBhY3Rpb25zLnRhZ0NoYW5nZWQoe1xuICAgICAgICAgICAgICB0YWc6IHsgLi4udGFnLCBrZXk6IHZhbHVlLnZhbHVlISB9LFxuICAgICAgICAgICAgICBpbmRleDogdGFnSW5kZXgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAvPlxuICAgICAgPFNlZ21lbnQ8R3JhcGhpdGVUYWdPcGVyYXRvcj5cbiAgICAgICAgaW5wdXRNaW5XaWR0aD17NTB9XG4gICAgICAgIHZhbHVlPXt0YWcub3BlcmF0b3J9XG4gICAgICAgIG9wdGlvbnM9e2dldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzKCl9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIG9wZXJhdG9yOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxTZWdtZW50QXN5bmNcbiAgICAgICAgaW5wdXRNaW5XaWR0aD17MTUwfVxuICAgICAgICB2YWx1ZT17dGFnLnZhbHVlfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkR2V0VGFnVmFsdWVPcHRpb25zfVxuICAgICAgICByZWxvYWRPcHRpb25zT25DaGFuZ2U9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIHZhbHVlOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgU2VnbWVudEFzeW5jLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVRhZyB9IGZyb20gJy4uL2dyYXBoaXRlX3F1ZXJ5JztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5pbXBvcnQgeyBnZXRUYWdzQXNTZWdtZW50c1NlbGVjdGFibGVzIH0gZnJvbSAnLi4vc3RhdGUvcHJvdmlkZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUGxheUJ1dHRvbiB9IGZyb20gJy4vUGxheUJ1dHRvbic7XG5pbXBvcnQgeyBUYWdFZGl0b3IgfSBmcm9tICcuL1RhZ0VkaXRvcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhZ3M6IEdyYXBoaXRlVGFnW107XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYWxsIHRhZ3MgYW5kIGEgYnV0dG9uIGFsbG93aW5nIHRvIGFkZCBtb3JlIHRhZ3MuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFyZSByZWxvYWRlZCB3aGlsZSB1c2VyIGlzIHR5cGluZyB3aXRoIGJhY2tlbmQgdGFraW5nIGNhcmUgb2YgYXV0by1jb21wbGV0ZVxuICogKGF1dG8tY29tcGxldGUgY2Fubm90IGJlIGltcGxlbWVudGVkIGluIGZyb250LWVuZCBiZWNhdXNlIGJhY2tlbmQgcmV0dXJucyBvbmx5IGxpbWl0ZWQgbnVtYmVyIG9mIGVudHJpZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUYWdzU2VjdGlvbih7IHRhZ3MsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlIChhdXRvLWNvbXBsZXRlIGNhbm5vdCBiZVxuICAvLyBpbXBsZW1lbnRlZCBpbiBmcm9udC1lbmQgYmVjYXVzZSBiYWNrZW5kIHJldHVybnMgb25seSBsaW1pdGVkIG51bWJlciBvZiBlbnRyaWVzKVxuICBjb25zdCBnZXRUYWdzQXNTZWdtZW50c09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZT86IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGdldFRhZ3NBc1NlZ21lbnRzU2VsZWN0YWJsZXMoc3RhdGUsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzQXNTZWdtZW50cyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZGVib3VuY2UoZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zLCAyMDAsIHsgbGVhZGluZzogdHJ1ZSB9KSxcbiAgICBbZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFRhZ0VkaXRvciBrZXk9e2luZGV4fSB0YWdJbmRleD17aW5kZXh9IHRhZz17dGFnfSBzdGF0ZT17c3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgICB7dGFncy5sZW5ndGggJiYgKFxuICAgICAgICA8U2VnbWVudEFzeW5jPEdyYXBoaXRlU2VnbWVudD5cbiAgICAgICAgICBpbnB1dE1pbldpZHRoPXsxNTB9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGROZXdUYWcoeyBzZWdtZW50OiB2YWx1ZS52YWx1ZSEgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZEdldFRhZ3NBc1NlZ21lbnRzfVxuICAgICAgICAgIHJlbG9hZE9wdGlvbnNPbkNoYW5nZT17dHJ1ZX1cbiAgICAgICAgICBDb21wb25lbnQ9ezxCdXR0b24gaWNvbj1cInBsdXNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBhcmlhLWxhYmVsPVwiQWRkIG5ldyB0YWdcIiAvPn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c3RhdGUucGF1c2VkICYmIDxQbGF5QnV0dG9uIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JFYWNoLCBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRnVuY0RlZnMsIEZ1bmNJbnN0YW5jZSwgUGFyYW1EZWYgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEVkaXRhYmxlUGFyYW0gfSBmcm9tICcuL0Z1bmN0aW9uUGFyYW1FZGl0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXM8VCBleHRlbmRzIHN0cmluZz4odmFsdWVzOiBUW10pOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8VD4+IHtcbiAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoe1xuICAgIHZhbHVlLFxuICAgIGxhYmVsOiB2YWx1ZSxcbiAgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzKHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVNlZ21lbnQ+PiB7XG4gIHJldHVybiBzZWdtZW50cy5tYXAoKHNlZ21lbnQpID0+ICh7XG4gICAgbGFiZWw6IHNlZ21lbnQudmFsdWUsXG4gICAgdmFsdWU6IHNlZ21lbnQsXG4gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyhmdW5jRGVmczogRnVuY0RlZnMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBhbnkgPSB7fTtcblxuICBmb3JFYWNoKGZ1bmNEZWZzLCAoZnVuY0RlZikgPT4ge1xuICAgIGlmICghZnVuY0RlZi5jYXRlZ29yeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0pIHtcbiAgICAgIGNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0gPSB7IGxhYmVsOiBmdW5jRGVmLmNhdGVnb3J5LCB2YWx1ZTogZnVuY0RlZi5jYXRlZ29yeSwgb3B0aW9uczogW10gfTtcbiAgICB9XG4gICAgY2F0ZWdvcmllc1tmdW5jRGVmLmNhdGVnb3J5XS5vcHRpb25zLnB1c2goe1xuICAgICAgbGFiZWw6IGZ1bmNEZWYubmFtZSxcbiAgICAgIHZhbHVlOiBmdW5jRGVmLm5hbWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzb3J0QnkoY2F0ZWdvcmllcywgJ2xhYmVsJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWY6IFBhcmFtRGVmLCBhZGRpdGlvbmFsOiBib29sZWFuLCB2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IEVkaXRhYmxlUGFyYW0ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHBhcmFtRGVmLm5hbWUsXG4gICAgdmFsdWU6IHZhbHVlPy50b1N0cmluZygpIHx8ICcnLFxuICAgIG9wdGlvbmFsOiAhIXBhcmFtRGVmLm9wdGlvbmFsIHx8IGFkZGl0aW9uYWwsIC8vIG9ubHkgZmlyc3QgcGFyYW0gaXMgcmVxdWlyZWQgd2hlbiBtdWx0aXBsZSBhcmUgYWxsb3dlZFxuICAgIG11bHRpcGxlOiAhIXBhcmFtRGVmLm11bHRpcGxlLFxuICAgIG9wdGlvbnM6XG4gICAgICBwYXJhbURlZi5vcHRpb25zPy5tYXAoKG9wdGlvbjogc3RyaW5nIHwgbnVtYmVyKSA9PiAoe1xuICAgICAgICB2YWx1ZTogb3B0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgIGxhYmVsOiBvcHRpb24udG9TdHJpbmcoKSxcbiAgICAgIH0pKSA/PyBbXSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBsaXN0IG9mIHBhcmFtcyB0aGF0IGNhbiBiZSBlZGl0ZWQgaW4gdGhlIGZ1bmN0aW9uIGVkaXRvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmM6IEZ1bmNJbnN0YW5jZSk6IEVkaXRhYmxlUGFyYW1bXSB7XG4gIC8vIGxpc3Qgb2YgcmVxdWlyZWQgcGFyYW1ldGVycyAoZnJvbSBmdW5jLmRlZilcbiAgY29uc3QgcGFyYW1zOiBFZGl0YWJsZVBhcmFtW10gPSBmdW5jLmRlZi5wYXJhbXMubWFwKChwYXJhbURlZjogUGFyYW1EZWYsIGluZGV4OiBudW1iZXIpID0+XG4gICAgY3JlYXRlRWRpdGFibGVQYXJhbShwYXJhbURlZiwgZmFsc2UsIGZ1bmMucGFyYW1zW2luZGV4XSlcbiAgKTtcblxuICAvLyBsaXN0IG9mIGFkZGl0aW9uYWwgKG11bHRpcGxlIG9yIG9wdGlvbmFsKSBwYXJhbXMgZW50ZXJlZCBieSB0aGUgdXNlclxuICB3aGlsZSAocGFyYW1zLmxlbmd0aCA8IGZ1bmMucGFyYW1zLmxlbmd0aCkge1xuICAgIGNvbnN0IHBhcmFtRGVmID0gZnVuYy5kZWYucGFyYW1zW2Z1bmMuZGVmLnBhcmFtcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCB2YWx1ZSA9IGZ1bmMucGFyYW1zW3BhcmFtcy5sZW5ndGhdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsIHZhbHVlKSk7XG4gIH1cblxuICAvLyBleHRyYSBcImZha2VcIiBwYXJhbSB0byBhbGxvdyBhZGRpbmcgbW9yZSBtdWx0aXBsZSB2YWx1ZXMgYXQgdGhlIGVuZFxuICBpZiAocGFyYW1zLmxlbmd0aCAmJiBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdLnZhbHVlICYmIHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0/Lm11bHRpcGxlKSB7XG4gICAgY29uc3QgcGFyYW1EZWYgPSBmdW5jLmRlZi5wYXJhbXNbZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAtIDFdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsICcnKSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbiAgb25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QsXG4gIG9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uQ2hlY2tlZCxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncywgSW5saW5lRm9ybUxhYmVsLCBMZWdhY3lGb3JtcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmltcG9ydCB7IEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OLCBHUkFQSElURV9WRVJTSU9OUyB9IGZyb20gJy4uL3ZlcnNpb25zJztcblxuaW1wb3J0IHsgTWFwcGluZ3NDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9NYXBwaW5nc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgZnJvbVN0cmluZywgdG9TdHJpbmcgfSBmcm9tICcuL3BhcnNlTG9raUxhYmVsTWFwcGluZ3MnO1xuXG5jb25zdCB7IFNlbGVjdCwgU3dpdGNoIH0gPSBMZWdhY3lGb3JtcztcbmV4cG9ydCBjb25zdCBTSE9XX01BUFBJTkdTX0hFTFBfS0VZID0gJ2dyYWZhbmEuZGF0YXNvdXJjZXMuZ3JhcGhpdGUuY29uZmlnLnNob3dNYXBwaW5nc0hlbHAnO1xuXG5jb25zdCBncmFwaGl0ZVZlcnNpb25zID0gR1JBUEhJVEVfVkVSU0lPTlMubWFwKCh2ZXJzaW9uKSA9PiAoeyBsYWJlbDogYCR7dmVyc2lvbn0ueGAsIHZhbHVlOiB2ZXJzaW9uIH0pKTtcblxuY29uc3QgZ3JhcGhpdGVUeXBlcyA9IE9iamVjdC5lbnRyaWVzKEdyYXBoaXRlVHlwZSkubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gKHtcbiAgbGFiZWwsXG4gIHZhbHVlLFxufSkpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8R3JhcGhpdGVPcHRpb25zPjtcblxudHlwZSBTdGF0ZSA9IHtcbiAgc2hvd01hcHBpbmdzSGVscDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNYXBwaW5nc0hlbHA6IHN0b3JlLmdldE9iamVjdChTSE9XX01BUFBJTkdTX0hFTFBfS0VZLCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyVHlwZUhlbHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBhcmUgZGlmZmVyZW50IHR5cGVzIG9mIEdyYXBoaXRlIGNvbXBhdGlibGUgYmFja2VuZHMuIEhlcmUgeW91IGNhbiBzcGVjaWZ5IHRoZSB0eXBlIHlvdSBhcmUgdXNpbmcuIElmIHlvdVxuICAgICAgICBhcmUgdXNpbmd7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvbWV0cmljdGFua1wiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgTWV0cmljdGFua1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgdGhlbiBzZWxlY3QgdGhhdCBoZXJlLiBUaGlzIHdpbGwgZW5hYmxlIE1ldHJpY3Rhbmsgc3BlY2lmaWMgZmVhdHVyZXMgbGlrZSBxdWVyeSBwcm9jZXNzaW5nIG1ldGEgZGF0YS4gTWV0cmljdGFua1xuICAgICAgICBpcyBhIG11bHRpLXRlbmFudCB0aW1lc2VyaWVzIGVuZ2luZSBmb3IgR3JhcGhpdGUgYW5kIGZyaWVuZHMuXG4gICAgICA8L3A+XG4gICAgKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ2dyYXBoaXRlVmVyc2lvbicsIHRoaXMuY3VycmVudEdyYXBoaXRlVmVyc2lvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IGdyYXBoaXRlVmVyc2lvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gdGhpcy5jdXJyZW50R3JhcGhpdGVWZXJzaW9uKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7b3B0aW9ucy5hY2Nlc3MgPT09ICdkaXJlY3QnICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJEZXByZWNhdGlvbiBOb3RpY2VcIiBzZXZlcml0eT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIFRoaXMgZGF0YSBzb3VyY2UgdXNlcyBicm93c2VyIGFjY2VzcyBtb2RlLiBUaGlzIG1vZGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuIFBsZWFzZVxuICAgICAgICAgICAgdXNlIHNlcnZlciBhY2Nlc3MgbW9kZSBpbnN0ZWFkLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiXG4gICAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+R3JhcGhpdGUgZGV0YWlsczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHRvb2x0aXA9XCJUaGlzIG9wdGlvbiBjb250cm9scyB3aGF0IGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlIGluIHRoZSBHcmFwaGl0ZSBxdWVyeSBlZGl0b3IuXCI+XG4gICAgICAgICAgICAgICAgVmVyc2lvblxuICAgICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcmFwaGl0ZSB2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFZlcnNpb259XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JhcGhpdGVWZXJzaW9uc31cbiAgICAgICAgICAgICAgICB3aWR0aD17OH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QodGhpcy5wcm9wcywgJ2dyYXBoaXRlVmVyc2lvbicpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgdG9vbHRpcD17dGhpcy5yZW5kZXJUeXBlSGVscH0+VHlwZTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyYXBoaXRlIGJhY2tlbmQgdHlwZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JhcGhpdGVUeXBlc31cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3JhcGhpdGVUeXBlcy5maW5kKCh0eXBlKSA9PiB0eXBlLnZhbHVlID09PSBvcHRpb25zLmpzb25EYXRhLmdyYXBoaXRlVHlwZSl9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHRoaXMucHJvcHMsICdncmFwaGl0ZVR5cGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtvcHRpb25zLmpzb25EYXRhLmdyYXBoaXRlVHlwZSA9PT0gR3JhcGhpdGVUeXBlLk1ldHJpY3RhbmsgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJvbGx1cCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzcz17J3dpZHRoLTEwJ31cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTaG93cyB1cCBhcyBhbiBpbmZvIGljb24gaW4gcGFuZWwgaGVhZGVycyB3aGVuIGRhdGEgaXMgYWdncmVnYXRlZFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshIW9wdGlvbnMuanNvbkRhdGEucm9sbHVwSW5kaWNhdG9yRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbkNoZWNrZWQodGhpcy5wcm9wcywgJ3JvbGx1cEluZGljYXRvckVuYWJsZWQnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWFwcGluZ3NDb25maWd1cmF0aW9uXG4gICAgICAgICAgbWFwcGluZ3M9eyhvcHRpb25zLmpzb25EYXRhLmltcG9ydENvbmZpZ3VyYXRpb24/Lmxva2k/Lm1hcHBpbmdzIHx8IFtdKS5tYXAodG9TdHJpbmcpfVxuICAgICAgICAgIHNob3dIZWxwPXt0aGlzLnN0YXRlLnNob3dNYXBwaW5nc0hlbHB9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01hcHBpbmdzSGVscDogZmFsc2UgfSk7XG4gICAgICAgICAgICBzdG9yZS5zZXRPYmplY3QoU0hPV19NQVBQSU5HU19IRUxQX0tFWSwgZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXN0b3JlSGVscD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNYXBwaW5nc0hlbHA6IHRydWUgfSk7XG4gICAgICAgICAgICBzdG9yZS5zZXRPYmplY3QoU0hPV19NQVBQSU5HU19IRUxQX0tFWSwgdHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KG1hcHBpbmdzKSA9PiB7XG4gICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2Uoe1xuICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICBqc29uRGF0YToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEsXG4gICAgICAgICAgICAgICAgaW1wb3J0Q29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS5pbXBvcnRDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgbG9raToge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nczogbWFwcGluZ3MubWFwKGZyb21TdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJyZW50R3JhcGhpdGVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMuanNvbkRhdGEuZ3JhcGhpdGVWZXJzaW9uIHx8IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgTWFwcGluZ3NIZWxwIGZyb20gJy4vTWFwcGluZ3NIZWxwJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbWFwcGluZ3M6IHN0cmluZ1tdO1xuICBvbkNoYW5nZTogKG1hcHBpbmdzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBvblJlc3RvcmVIZWxwOiAoKSA9PiB2b2lkO1xuICBzaG93SGVscDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBNYXBwaW5nc0NvbmZpZ3VyYXRpb24gPSAocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbbWFwcGluZ3MsIHNldE1hcHBpbmdzXSA9IHVzZVN0YXRlKHByb3BzLm1hcHBpbmdzIHx8IFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+TGFiZWwgbWFwcGluZ3M8L2gzPlxuICAgICAgeyFwcm9wcy5zaG93SGVscCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpbmtcIiBvbkNsaWNrPXtwcm9wcy5vblJlc3RvcmVIZWxwfT5cbiAgICAgICAgICAgIExlYXJuIGhvdyBsYWJlbCBtYXBwaW5ncyB3b3JrXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICB7cHJvcHMuc2hvd0hlbHAgJiYgPE1hcHBpbmdzSGVscCBvbkRpc21pc3M9e3Byb3BzLm9uRGlzbWlzc30gLz59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICB7bWFwcGluZ3MubWFwKChtYXBwaW5nLCBpKSA9PiAoXG4gICAgICAgICAgPElubGluZUZpZWxkUm93IGtleT17aX0+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9e2BNYXBwaW5nICgke2kgKyAxfSlgfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hhbmdlRXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3TWFwcGluZ3MgPSBtYXBwaW5ncy5jb25jYXQoKTtcbiAgICAgICAgICAgICAgICAgIG5ld01hcHBpbmdzW2ldID0gY2hhbmdlRXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgc2V0TWFwcGluZ3MobmV3TWFwcGluZ3MpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShtYXBwaW5ncyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gdGVzdC5tZXRyaWMuKGxhYmVsTmFtZSkuKlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hcHBpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSBoZWFkZXJcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3TWFwcGluZ3MgPSBtYXBwaW5ncy5jb25jYXQoKTtcbiAgICAgICAgICAgICAgICBuZXdNYXBwaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgc2V0TWFwcGluZ3MobmV3TWFwcGluZ3MpO1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG5ld01hcHBpbmdzKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInRyYXNoLWFsdFwiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICApKX1cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRNYXBwaW5ncyhbLi4ubWFwcGluZ3MsICcnXSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBsYWJlbCBtYXBwaW5nXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcHBpbmdzSGVscChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPVwiSG93IHRvIG1hcCBHcmFwaGl0ZSBtZXRyaWNzIHRvIGxhYmVscz9cIiBvblJlbW92ZT17cHJvcHMub25EaXNtaXNzfT5cbiAgICAgIDxwPk1hcHBpbmdzIGFyZSBjdXJyZW50bHkgc3VwcG9ydGVkIG9ubHkgYmV0d2VlbiBHcmFwaGl0ZSBhbmQgTG9raSBxdWVyaWVzLjwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIHlvdSBzd2l0Y2ggeW91ciBkYXRhIHNvdXJjZSBmcm9tIEdyYXBoaXRlIHRvIExva2ksIHlvdXIgcXVlcmllcyBhcmUgbWFwcGVkIGFjY29yZGluZyB0byB0aGUgbWFwcGluZ3NcbiAgICAgICAgZGVmaW5lZCBpbiB0aGUgZXhhbXBsZSBiZWxvdy4gVG8gZGVmaW5lIGEgbWFwcGluZywgd3JpdGUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgbWV0cmljIGFuZCByZXBsYWNlIG5vZGVzIHlvdSB3YW50XG4gICAgICAgIHRvIG1hcCB0byBsYWJlbCB3aXRoIHRoZSBsYWJlbCBuYW1lIGluIHBhcmVudGhlc2VzLiBUaGUgdmFsdWUgb2YgdGhlIGxhYmVsIGlzIGV4dHJhY3RlZCBmcm9tIHlvdXIgR3JhcGhpdGUgcXVlcnlcbiAgICAgICAgd2hlbiB5b3Ugc3dpdGNoIGRhdGEgc291cmNlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBbGwgdGFncyBhcmUgYXV0b21hdGljYWxseSBtYXBwZWQgdG8gbGFiZWxzIHJlZ2FyZGxlc3Mgb2YgdGhlIG1hcHBpbmcgY29uZmlndXJhdGlvbi4gR3JhcGhpdGUgbWF0Y2hpbmcgcGF0dGVybnNcbiAgICAgICAgKHVzaW5nICYjMTIzOyYjMTI1OykgYXJlIGNvbnZlcnRlZCB0byBMb2tpJmFwb3M7cyByZWd1bGFyIGV4cHJlc3Npb25zIG1hdGNoaW5nIHBhdHRlcm5zLiBXaGVuIHlvdSB1c2UgZnVuY3Rpb25zXG4gICAgICAgIGluIHlvdXIgcXVlcmllcywgdGhlIG1ldHJpY3MsIGFuZCB0YWdzIGFyZSBleHRyYWN0ZWQgdG8gbWF0Y2ggdGhlbSB3aXRoIGRlZmluZWQgbWFwcGluZ3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgRXhhbXBsZTogZm9yIGEgbWFwcGluZyA9IDxjb2RlPnNlcnZlcnMuKGNsdXN0ZXIpLihzZXJ2ZXIpLio8L2NvZGU+OlxuICAgICAgPC9wPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkdyYXBoaXRlIHF1ZXJ5PC90aD5cbiAgICAgICAgICAgIDx0aD5NYXBwZWQgdG8gTG9raSBxdWVyeTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgYWxpYXMoc2VydmVycy48dT53ZXN0PC91Pi48dT4wMDE8L3U+LmNwdSwxLDIpXG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICYjMTIzO2NsdXN0ZXI9JnF1b3Q7PHU+d2VzdDwvdT4mcXVvdDssIHNlcnZlcj0mcXVvdDs8dT4wMDE8L3U+JnF1b3Q7JiMxMjU7XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgIGFsaWFzKHNlcnZlcnMuKi48dT4mIzEyMzswMDEsMDAyJiMxMjU7PC91Pi4qLDEsMilcbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgJiMxMjM7c2VydmVyPX4mcXVvdDs8dT4oMDAxfDAwMik8L3U+JnF1b3Q7JiMxMjU7XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmludGVycG9sYXRlKHNlcmllc0J5VGFnKCZhcG9zO2Zvbz1iYXImYXBvczssICZhcG9zO3NlcnZlcj0wMDImYXBvczspLCBpbmYpKTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPiYjMTIzO2Zvbz0mcXVvdDtiYXImcXVvdDssIHNlcnZlcj0mcXVvdDswMDImcXVvdDsmIzEyNTs8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvQWxlcnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBHcmFwaGl0ZUxva2lNYXBwaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc2ltcGxlIHN0cmluZyB1c2VkIGluIExva2lMb2dzTWFwcGluZ3MgY29tcG9uZW50IChlLmcuIFwic2VydmVycy4obmFtZSkuKlwiKVxuICogdG8gZGF0YSBtb2RlbCBzYXZlZCBpbiBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyh0ZXh0OiBzdHJpbmcpOiBHcmFwaGl0ZUxva2lNYXBwaW5nIHtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVyczogdGV4dC5zcGxpdCgnLicpLm1hcCgobWV0cmljTm9kZSkgPT4ge1xuICAgICAgaWYgKG1ldHJpY05vZGUuc3RhcnRzV2l0aCgnKCcpICYmIG1ldHJpY05vZGUuZW5kc1dpdGgoJyknKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiAnKicsXG4gICAgICAgICAgbGFiZWxOYW1lOiBtZXRyaWNOb2RlLnNsaWNlKDEsIC0xKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBtZXRyaWNOb2RlIH07XG4gICAgICB9XG4gICAgfSksXG4gIH07XG59XG5cbi8qKlxuICogQ292ZXJ0cyBjb25maWd1cmF0aW9uIHN0b3JlZCBpbiBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uIGludG8gYSBzdHJpbmcgZGlzcGxheWVkIGluIExva2lMb2dzTWFwcGluZ3MgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcobWFwcGluZzogR3JhcGhpdGVMb2tpTWFwcGluZyk6IHN0cmluZyB7XG4gIHJldHVybiBtYXBwaW5nLm1hdGNoZXJzXG4gICAgLm1hcCgobWF0Y2hlcikgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXIubGFiZWxOYW1lID8gYCgke21hdGNoZXIubGFiZWxOYW1lfSlgIDogYCR7bWF0Y2hlci52YWx1ZX1gO1xuICAgIH0pXG4gICAgLmpvaW4oJy4nKTtcbn1cbiIsImltcG9ydCB7IGVhY2gsIGluZGV4T2YsIGlzQXJyYXksIGlzU3RyaW5nLCBtYXAgYXMgX21hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgcGlwZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlV2l0aFF1ZXJ5RXhwb3J0U3VwcG9ydCxcbiAgZGF0ZU1hdGgsXG4gIEFic3RyYWN0UXVlcnksXG4gIEFic3RyYWN0TGFiZWxPcGVyYXRvcixcbiAgQWJzdHJhY3RMYWJlbE1hdGNoZXIsXG4gIE1ldHJpY0ZpbmRWYWx1ZSxcbiAgUXVlcnlSZXN1bHRNZXRhU3RhdCxcbiAgU2NvcGVkVmFycyxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBpc1ZlcnNpb25HdE9yRXEsIFNlbVZlcnNpb24gfSBmcm9tICdhcHAvY29yZS91dGlscy92ZXJzaW9uJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5pbXBvcnQgeyBnZXRSb2xsdXBOb3RpY2UsIGdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9tZXRhJztcblxuaW1wb3J0IHsgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcblxuaW1wb3J0IGdmdW5jLCB7IEZ1bmNEZWZzLCBGdW5jSW5zdGFuY2UgfSBmcm9tICcuL2dmdW5jJztcbmltcG9ydCBHcmFwaGl0ZVF1ZXJ5TW9kZWwgZnJvbSAnLi9ncmFwaGl0ZV9xdWVyeSc7XG4vLyBUeXBlc1xuaW1wb3J0IHtcbiAgR3JhcGhpdGVMb2tpTWFwcGluZyxcbiAgR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlcixcbiAgR3JhcGhpdGVPcHRpb25zLFxuICBHcmFwaGl0ZVF1ZXJ5LFxuICBHcmFwaGl0ZVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbixcbiAgR3JhcGhpdGVUeXBlLFxuICBNZXRyaWNUYW5rUmVxdWVzdE1ldGEsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgcmVkdWNlRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbnMnO1xuXG5jb25zdCBHUkFQSElURV9UQUdfQ09NUEFSQVRPUlMgPSB7XG4gICc9JzogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLkVxdWFsLFxuICAnIT0nOiBBYnN0cmFjdExhYmVsT3BlcmF0b3IuTm90RXF1YWwsXG4gICc9fic6IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbFJlZ0V4LFxuICAnIT1+JzogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLk5vdEVxdWFsUmVnRXgsXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIEdyYXBoaXRlIGdsb2ItbGlrZSBwYXR0ZXJuIHRvIGEgcmVndWxhciBleHByZXNzaW9uXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRHbG9iVG9SZWdFeCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodGV4dC5pbmNsdWRlcygnKicpIHx8IHRleHQuaW5jbHVkZXMoJ3snKSkge1xuICAgIHJldHVybiAnXicgKyB0ZXh0LnJlcGxhY2UoL1xcKi9nLCAnLionKS5yZXBsYWNlKC9cXHsvZywgJygnKS5yZXBsYWNlKC99L2csICcpJykucmVwbGFjZSgvLC9nLCAnfCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGl0ZURhdGFzb3VyY2VcbiAgZXh0ZW5kcyBEYXRhU291cmNlQXBpPEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24+XG4gIGltcGxlbWVudHMgRGF0YVNvdXJjZVdpdGhRdWVyeUV4cG9ydFN1cHBvcnQ8R3JhcGhpdGVRdWVyeT5cbntcbiAgYmFzaWNBdXRoOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGdyYXBoaXRlVmVyc2lvbjogYW55O1xuICBzdXBwb3J0c1RhZ3M6IGJvb2xlYW47XG4gIGlzTWV0cmljVGFuazogYm9vbGVhbjtcbiAgcm9sbHVwSW5kaWNhdG9yRW5hYmxlZDogYm9vbGVhbjtcbiAgY2FjaGVUaW1lb3V0OiBhbnk7XG4gIHdpdGhDcmVkZW50aWFsczogYm9vbGVhbjtcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzIHwgbnVsbCA9IG51bGw7XG4gIGZ1bmNEZWZzUHJvbWlzZTogUHJvbWlzZTxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIF9zZXJpZXNSZWZMZXR0ZXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWV0cmljTWFwcGluZ3M6IEdyYXBoaXRlTG9raU1hcHBpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihpbnN0YW5jZVNldHRpbmdzOiBhbnksIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKSkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMuYmFzaWNBdXRoID0gaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGg7XG4gICAgdGhpcy51cmwgPSBpbnN0YW5jZVNldHRpbmdzLnVybDtcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgLy8gZ3JhcGhpdGVWZXJzaW9uIGlzIHNldCB3aGVuIGEgZGF0YXNvdXJjZSBpcyBjcmVhdGVkIGJ1dCBpdCBoYWRuJ3QgYmVlbiBzZXQgaW4gdGhlIHBhc3Qgc28gd2UncmVcbiAgICAvLyBzdGlsbCBmYWxsaW5nIGJhY2sgdG8gdGhlIGRlZmF1bHQgYmVoYXZpb3IgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNlZSBhbHNvICMxNzQyOSlcbiAgICB0aGlzLmdyYXBoaXRlVmVyc2lvbiA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuZ3JhcGhpdGVWZXJzaW9uIHx8IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTjtcbiAgICB0aGlzLm1ldHJpY01hcHBpbmdzID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5pbXBvcnRDb25maWd1cmF0aW9uPy5sb2tpPy5tYXBwaW5ncyB8fCBbXTtcbiAgICB0aGlzLmlzTWV0cmljVGFuayA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuZ3JhcGhpdGVUeXBlID09PSBHcmFwaGl0ZVR5cGUuTWV0cmljdGFuaztcbiAgICB0aGlzLnN1cHBvcnRzVGFncyA9IHN1cHBvcnRzVGFncyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgdGhpcy5jYWNoZVRpbWVvdXQgPSBpbnN0YW5jZVNldHRpbmdzLmNhY2hlVGltZW91dDtcbiAgICB0aGlzLnJvbGx1cEluZGljYXRvckVuYWJsZWQgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLnJvbGx1cEluZGljYXRvckVuYWJsZWQ7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBpbnN0YW5jZVNldHRpbmdzLndpdGhDcmVkZW50aWFscztcbiAgICB0aGlzLmZ1bmNEZWZzID0gbnVsbDtcbiAgICB0aGlzLmZ1bmNEZWZzUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5fc2VyaWVzUmVmTGV0dGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIH1cblxuICBnZXRRdWVyeU9wdGlvbnNJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXhEYXRhUG9pbnRzOiB0cnVlLFxuICAgICAgY2FjaGVUaW1lb3V0OiB0cnVlLFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIZWxwJyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9mZWF0dXJlcy9kYXRhc291cmNlcy9ncmFwaGl0ZS8jdXNpbmctZ3JhcGhpdGUtaW4tZ3JhZmFuYScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRJbXBvcnRRdWVyeUNvbmZpZ3VyYXRpb24oKTogR3JhcGhpdGVRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2tpOiB7XG4gICAgICAgIG1hcHBpbmdzOiB0aGlzLm1ldHJpY01hcHBpbmdzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZXhwb3J0VG9BYnN0cmFjdFF1ZXJpZXMocXVlcmllczogR3JhcGhpdGVRdWVyeVtdKTogUHJvbWlzZTxBYnN0cmFjdFF1ZXJ5W10+IHtcbiAgICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB0aGlzLmV4cG9ydFRvQWJzdHJhY3RRdWVyeShxdWVyeSkpO1xuICB9XG5cbiAgZXhwb3J0VG9BYnN0cmFjdFF1ZXJ5KHF1ZXJ5OiBHcmFwaGl0ZVF1ZXJ5KTogQWJzdHJhY3RRdWVyeSB7XG4gICAgY29uc3QgZ3JhcGhpdGVRdWVyeTogR3JhcGhpdGVRdWVyeU1vZGVsID0gbmV3IEdyYXBoaXRlUXVlcnlNb2RlbChcbiAgICAgIHRoaXMsXG4gICAgICB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICB0YXJnZXQ6IHF1ZXJ5LnRhcmdldCB8fCAnJyxcbiAgICAgICAgdGV4dEVkaXRvcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZ2V0VGVtcGxhdGVTcnYoKVxuICAgICk7XG4gICAgZ3JhcGhpdGVRdWVyeS5wYXJzZVRhcmdldCgpO1xuXG4gICAgbGV0IGxhYmVsczogQWJzdHJhY3RMYWJlbE1hdGNoZXJbXSA9IFtdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0SW1wb3J0UXVlcnlDb25maWd1cmF0aW9uKCkubG9raTtcblxuICAgIGlmIChncmFwaGl0ZVF1ZXJ5LnNlcmllc0J5VGFnVXNlZCkge1xuICAgICAgZ3JhcGhpdGVRdWVyeS50YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgbmFtZTogdGFnLmtleSxcbiAgICAgICAgICBvcGVyYXRvcjogR1JBUEhJVEVfVEFHX0NPTVBBUkFUT1JTW3RhZy5vcGVyYXRvcl0sXG4gICAgICAgICAgdmFsdWU6IHRhZy52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZXMgPSBncmFwaGl0ZVF1ZXJ5LnNlZ21lbnRzLm1hcCgoc2VnbWVudCkgPT4gc2VnbWVudC52YWx1ZSk7XG4gICAgICBsZXQgbWFwcGluZ3MgPSBjb25maWcubWFwcGluZ3MuZmlsdGVyKChtYXBwaW5nKSA9PiBtYXBwaW5nLm1hdGNoZXJzLmxlbmd0aCA8PSB0YXJnZXROb2Rlcy5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBtYXBwaW5nIG9mIG1hcHBpbmdzKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXJzID0gbWFwcGluZy5tYXRjaGVycy5jb25jYXQoKTtcblxuICAgICAgICBtYXRjaGVycy5ldmVyeSgobWF0Y2hlcjogR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChtYXRjaGVyLmxhYmVsTmFtZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gKHRhcmdldE5vZGVzW2luZGV4XSBhcyBzdHJpbmcpITtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnKicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9IGNvbnZlcnRHbG9iVG9SZWdFeCh2YWx1ZSk7XG4gICAgICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoZXIubGFiZWxOYW1lLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogY29udmVydGVkICE9PSB2YWx1ZSA/IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbFJlZ0V4IDogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLkVxdWFsLFxuICAgICAgICAgICAgICB2YWx1ZTogY29udmVydGVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGVzW2luZGV4XSA9PT0gbWF0Y2hlci52YWx1ZSB8fCBtYXRjaGVyLnZhbHVlID09PSAnKic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogcXVlcnkucmVmSWQsXG4gICAgICBsYWJlbE1hdGNoZXJzOiBsYWJlbHMsXG4gICAgfTtcbiAgfVxuXG4gIHF1ZXJ5KG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8R3JhcGhpdGVRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0ge1xuICAgICAgZnJvbTogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKSxcbiAgICAgIHVudGlsOiB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS5yYXcudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgdGFyZ2V0czogb3B0aW9ucy50YXJnZXRzLFxuICAgICAgZm9ybWF0OiAob3B0aW9ucyBhcyBhbnkpLmZvcm1hdCxcbiAgICAgIGNhY2hlVGltZW91dDogb3B0aW9ucy5jYWNoZVRpbWVvdXQgfHwgdGhpcy5jYWNoZVRpbWVvdXQsXG4gICAgICBtYXhEYXRhUG9pbnRzOiBvcHRpb25zLm1heERhdGFQb2ludHMsXG4gICAgfTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuYnVpbGRHcmFwaGl0ZVBhcmFtcyhncmFwaE9wdGlvbnMsIG9wdGlvbnMuc2NvcGVkVmFycyk7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTWV0cmljVGFuaykge1xuICAgICAgcGFyYW1zLnB1c2goJ21ldGE9dHJ1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9yZW5kZXInLFxuICAgICAgZGF0YTogcGFyYW1zLmpvaW4oJyYnKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRUcmFjaW5nSGVhZGVycyhodHRwT3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5wYW5lbElkKSB7XG4gICAgICBodHRwT3B0aW9ucy5yZXF1ZXN0SWQgPSB0aGlzLm5hbWUgKyAnLnBhbmVsSWQuJyArIG9wdGlvbnMucGFuZWxJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShtYXAodGhpcy5jb252ZXJ0UmVzcG9uc2VUb0RhdGFGcmFtZXMpKTtcbiAgfVxuXG4gIGFkZFRyYWNpbmdIZWFkZXJzKGh0dHBPcHRpb25zOiB7IGhlYWRlcnM6IGFueSB9LCBvcHRpb25zOiB7IGRhc2hib2FyZElkPzogbnVtYmVyOyBwYW5lbElkPzogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBwcm94eU1vZGUgPSAhdGhpcy51cmwubWF0Y2goL15odHRwLyk7XG4gICAgaWYgKHByb3h5TW9kZSkge1xuICAgICAgaWYgKG9wdGlvbnMuZGFzaGJvYXJkSWQpIHtcbiAgICAgICAgaHR0cE9wdGlvbnMuaGVhZGVyc1snWC1EYXNoYm9hcmQtSWQnXSA9IG9wdGlvbnMuZGFzaGJvYXJkSWQ7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYW5lbElkKSB7XG4gICAgICAgIGh0dHBPcHRpb25zLmhlYWRlcnNbJ1gtUGFuZWwtSWQnXSA9IG9wdGlvbnMucGFuZWxJZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb252ZXJ0UmVzcG9uc2VUb0RhdGFGcmFtZXMgPSAocmVzdWx0OiBhbnkpOiBEYXRhUXVlcnlSZXNwb25zZSA9PiB7XG4gICAgY29uc3QgZGF0YTogRGF0YUZyYW1lW10gPSBbXTtcbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIHJldHVybiB7IGRhdGEgfTtcbiAgICB9XG5cbiAgICAvLyBTZXJpZXMgYXJlIGVpdGhlciBhdCB0aGUgcm9vdCBvciB1bmRlciBhIG5vZGUgY2FsbGVkICdzZXJpZXMnXG4gICAgY29uc3Qgc2VyaWVzID0gcmVzdWx0LmRhdGEuc2VyaWVzIHx8IHJlc3VsdC5kYXRhO1xuXG4gICAgaWYgKCFpc0FycmF5KHNlcmllcykpIHtcbiAgICAgIHRocm93IHsgbWVzc2FnZTogJ01pc3Npbmcgc2VyaWVzIGluIHJlc3VsdCcsIGRhdGE6IHJlc3VsdCB9O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzID0gc2VyaWVzW2ldO1xuXG4gICAgICAvLyBEaXNhYmxlcyBHcmFmYW5hIG93biBzZXJpZXMgbmFtaW5nXG4gICAgICBzLnRpdGxlID0gcy50YXJnZXQ7XG5cbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcy5kYXRhcG9pbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIHMuZGF0YXBvaW50c1t5XVsxXSAqPSAxMDAwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmFtZSA9IHRvRGF0YUZyYW1lKHMpO1xuXG4gICAgICAvLyBNZXRyaWN0YW5rIG1ldGFkYXRhXG4gICAgICBpZiAocy5tZXRhKSB7XG4gICAgICAgIGZyYW1lLm1ldGEgPSB7XG4gICAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgICByZXF1ZXN0TWV0YUxpc3Q6IHJlc3VsdC5kYXRhLm1ldGEsIC8vIGluZm8gZm9yIHRoZSB3aG9sZSByZXF1ZXN0XG4gICAgICAgICAgICBzZXJpZXNNZXRhTGlzdDogcy5tZXRhLCAvLyBBcnJheSBvZiBtZXRhZGF0YVxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMucm9sbHVwSW5kaWNhdG9yRW5hYmxlZCkge1xuICAgICAgICAgIGNvbnN0IHJvbGx1cE5vdGljZSA9IGdldFJvbGx1cE5vdGljZShzLm1ldGEpO1xuICAgICAgICAgIGNvbnN0IHJ1bnRpbWVOb3RpY2UgPSBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShzLm1ldGEpO1xuXG4gICAgICAgICAgaWYgKHJvbGx1cE5vdGljZSkge1xuICAgICAgICAgICAgZnJhbWUubWV0YS5ub3RpY2VzID0gW3JvbGx1cE5vdGljZV07XG4gICAgICAgICAgfSBlbHNlIGlmIChydW50aW1lTm90aWNlKSB7XG4gICAgICAgICAgICBmcmFtZS5tZXRhLm5vdGljZXMgPSBbcnVudGltZU5vdGljZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBhZGQgdGhlIHJlcXVlc3Qgc3RhdHMgdG8gdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmIChpID09PSAwICYmIHJlc3VsdC5kYXRhLm1ldGEuc3RhdHMpIHtcbiAgICAgICAgICBmcmFtZS5tZXRhLnN0YXRzID0gdGhpcy5nZXRSZXF1ZXN0U3RhdHMocmVzdWx0LmRhdGEubWV0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGF0YS5wdXNoKGZyYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhIH07XG4gIH07XG5cbiAgZ2V0UmVxdWVzdFN0YXRzKG1ldGE6IE1ldHJpY1RhbmtSZXF1ZXN0TWV0YSk6IFF1ZXJ5UmVzdWx0TWV0YVN0YXRbXSB7XG4gICAgY29uc3Qgc3RhdHM6IFF1ZXJ5UmVzdWx0TWV0YVN0YXRbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWV0YS5zdGF0cykge1xuICAgICAgbGV0IHVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKGtleS5lbmRzV2l0aCgnLm1zJykpIHtcbiAgICAgICAgdW5pdCA9ICdtcyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRzLnB1c2goeyBkaXNwbGF5TmFtZToga2V5LCB2YWx1ZTogbWV0YS5zdGF0c1trZXldLCB1bml0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0cztcbiAgfVxuXG4gIHBhcnNlVGFncyh0YWdTdHJpbmc6IHN0cmluZykge1xuICAgIGxldCB0YWdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRhZ3MgPSB0YWdTdHJpbmcuc3BsaXQoJywnKTtcbiAgICBpZiAodGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRhZ3MgPSB0YWdTdHJpbmcuc3BsaXQoJyAnKTtcbiAgICAgIGlmICh0YWdzWzBdID09PSAnJykge1xuICAgICAgICB0YWdzID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YWdzO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMocXVlcmllczogR3JhcGhpdGVRdWVyeVtdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogR3JhcGhpdGVRdWVyeVtdIHtcbiAgICBsZXQgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcztcbiAgICBpZiAocXVlcmllcyAmJiBxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkudGFyZ2V0ID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICAvLyBHcmFwaGl0ZSBtZXRyaWMgYXMgYW5ub3RhdGlvblxuICAgIGlmIChvcHRpb25zLmFubm90YXRpb24udGFyZ2V0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnRhcmdldCwge30sICdnbG9iJyk7XG4gICAgICBjb25zdCBncmFwaGl0ZVF1ZXJ5ID0ge1xuICAgICAgICByYW5nZTogb3B0aW9ucy5yYW5nZSxcbiAgICAgICAgdGFyZ2V0czogW3sgdGFyZ2V0OiB0YXJnZXQgfV0sXG4gICAgICAgIGZvcm1hdDogJ2pzb24nLFxuICAgICAgICBtYXhEYXRhUG9pbnRzOiAxMDAsXG4gICAgICB9IGFzIHVua25vd24gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxHcmFwaGl0ZVF1ZXJ5PjtcblxuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMucXVlcnkoZ3JhcGhpdGVRdWVyeSkucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcmVzdWx0LmRhdGFbaV07XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXJnZXQubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gdGFyZ2V0LmZpZWxkc1swXS52YWx1ZXMuZ2V0KHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmZpZWxkc1sxXS52YWx1ZXMuZ2V0KHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR3JhcGhpdGUgZXZlbnQgYXMgYW5ub3RhdGlvblxuICAgICAgY29uc3QgdGFncyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24udGFncyk7XG4gICAgICByZXR1cm4gdGhpcy5ldmVudHMoeyByYW5nZTogb3B0aW9ucy5yYW5nZSwgdGFnczogdGFncyB9KS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICBpZiAoIWlzQXJyYXkocmVzdWx0cy5kYXRhKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBnZXQgYW5ub3RhdGlvbnMgZnJvbSAke3Jlc3VsdHMudXJsfS5gKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gcmVzdWx0cy5kYXRhW2ldO1xuXG4gICAgICAgICAgbGV0IHRhZ3MgPSBlLnRhZ3M7XG4gICAgICAgICAgaWYgKGlzU3RyaW5nKGUudGFncykpIHtcbiAgICAgICAgICAgIHRhZ3MgPSB0aGlzLnBhcnNlVGFncyhlLnRhZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICAgICAgICB0aW1lOiBlLndoZW4gKiAxMDAwLFxuICAgICAgICAgICAgdGl0bGU6IGUud2hhdCxcbiAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICB0ZXh0OiBlLmRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyhvcHRpb25zOiB7IHJhbmdlOiBUaW1lUmFuZ2U7IHRhZ3M6IGFueTsgdGltZXpvbmU/OiBhbnkgfSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdGFncyA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMudGFncykge1xuICAgICAgICB0YWdzID0gJyZ0YWdzPScgKyBvcHRpb25zLnRhZ3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAnL2V2ZW50cy9nZXRfZGF0YT9mcm9tPScgK1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKSArXG4gICAgICAgICAgICAnJnVudGlsPScgK1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKSArXG4gICAgICAgICAgICB0YWdzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBHcmFwaGl0ZVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZSh0YXJnZXQudGFyZ2V0ID8/ICcnKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZVRpbWUoZGF0ZTogYW55LCByb3VuZFVwOiBhbnksIHRpbWV6b25lOiBhbnkpIHtcbiAgICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcbiAgICAgIGlmIChkYXRlID09PSAnbm93Jykge1xuICAgICAgICByZXR1cm4gJ25vdyc7XG4gICAgICB9IGVsc2UgaWYgKGRhdGUuaW5kZXhPZignbm93LScpID49IDAgJiYgZGF0ZS5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICAgIGRhdGUgPSBkYXRlLnN1YnN0cmluZygzKTtcbiAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgnbScsICdtaW4nKTtcbiAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgnTScsICdtb24nKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG4gICAgICBkYXRlID0gZGF0ZU1hdGgucGFyc2UoZGF0ZSwgcm91bmRVcCwgdGltZXpvbmUpO1xuICAgIH1cblxuICAgIC8vIGdyYXBoaXRlJyBzIGZyb20gZmlsdGVyIGlzIGV4Y2x1c2l2ZVxuICAgIC8vIGhlcmUgd2Ugc3RlcCBiYWNrIG9uZSBtaW51dGUgaW4gb3JkZXJcbiAgICAvLyB0byBndWFyYW50ZWUgdGhhdCB3ZSBnZXQgYWxsIHRoZSBkYXRhIHRoYXRcbiAgICAvLyBleGlzdHMgZm9yIHRoZSBzcGVjaWZpZWQgcmFuZ2VcbiAgICBpZiAocm91bmRVcCkge1xuICAgICAgaWYgKGRhdGUuZ2V0KCdzJykpIHtcbiAgICAgICAgZGF0ZS5hZGQoMSwgJ3MnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvdW5kVXAgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoZGF0ZS5nZXQoJ3MnKSkge1xuICAgICAgICBkYXRlLnN1YnRyYWN0KDEsICdzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGUudW5peCgpO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9ucz86IGFueSk6IFByb21pc2U8TWV0cmljRmluZFZhbHVlW10+IHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBvcHRpb25hbE9wdGlvbnMgfHwge307XG5cbiAgICAvLyBGaXJzdCBhdHRlbXB0IHRvIGNoZWNrIGZvciB0YWctcmVsYXRlZCBmdW5jdGlvbnMgKHVzaW5nIGVtcHR5IHdpbGRjYXJkIGZvciBpbnRlcnBvbGF0aW9uKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJycsIG9wdGlvbnM6IG9wdGlvbmFsT3B0aW9ucyB9KVxuICAgICk7XG5cbiAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0YWdfdmFsdWVzKDx0YWc+Wyw8ZXhwcmVzc2lvbj5dKiksIHRoaXMgaXMgdXNlZCBmb3IgdGVtcGxhdGUgdmFyaWFibGVzXG4gICAgbGV0IGFsbFBhcmFtcyA9IGludGVycG9sYXRlZFF1ZXJ5Lm1hdGNoKC9edGFnX3ZhbHVlc1xcKCguKilcXCkkLyk7XG4gICAgbGV0IGV4cHJlc3Npb25zID0gYWxsUGFyYW1zID8gYWxsUGFyYW1zWzFdLnNwbGl0KCcsJykuZmlsdGVyKChwKSA9PiAhIXApIDogdW5kZWZpbmVkO1xuICAgIGlmIChleHByZXNzaW9ucykge1xuICAgICAgb3B0aW9ucy5saW1pdCA9IDEwMDAwO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFnVmFsdWVzQXV0b0NvbXBsZXRlKGV4cHJlc3Npb25zLnNsaWNlKDEpLCBleHByZXNzaW9uc1swXSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0YWdzKDxleHByZXNzaW9uPlssPGV4cHJlc3Npb24+XSopLCB0aGlzIGlzIHVzZWQgZm9yIHRlbXBsYXRlIHZhcmlhYmxlc1xuICAgIGFsbFBhcmFtcyA9IGludGVycG9sYXRlZFF1ZXJ5Lm1hdGNoKC9edGFnc1xcKCguKilcXCkkLyk7XG4gICAgZXhwcmVzc2lvbnMgPSBhbGxQYXJhbXMgPyBhbGxQYXJhbXNbMV0uc3BsaXQoJywnKS5maWx0ZXIoKHApID0+ICEhcCkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKGV4cHJlc3Npb25zKSB7XG4gICAgICBvcHRpb25zLmxpbWl0ID0gMTAwMDA7XG4gICAgICByZXR1cm4gdGhpcy5nZXRUYWdzQXV0b0NvbXBsZXRlKGV4cHJlc3Npb25zLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIHRhZy1yZWxhdGVkIHF1ZXJ5IHdhcyBmb3VuZCwgcGVyZm9ybSBtZXRyaWMtYmFzZWQgc2VhcmNoICh1c2luZyAqIGFzIHRoZSB3aWxkY2FyZCBmb3IgaW50ZXJwb2xhdGlvbilcbiAgICBsZXQgdXNlRXhwYW5kID0gcXVlcnkubWF0Y2goL15leHBhbmRcXCgoLiopXFwpJC8pO1xuICAgIHF1ZXJ5ID0gdXNlRXhwYW5kID8gdXNlRXhwYW5kWzFdIDogcXVlcnk7XG5cbiAgICBpbnRlcnBvbGF0ZWRRdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyonLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSlcbiAgICApO1xuXG4gICAgbGV0IHJhbmdlO1xuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICByYW5nZSA9IHtcbiAgICAgICAgZnJvbTogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgICB1bnRpbDogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodXNlRXhwYW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0cmljRXhwYW5kKGludGVycG9sYXRlZFF1ZXJ5LCBvcHRpb25zLnJlcXVlc3RJZCwgcmFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0cmljRmluZChpbnRlcnBvbGF0ZWRRdWVyeSwgb3B0aW9ucy5yZXF1ZXN0SWQsIHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBtZXRyaWNzIG1hdGNoaW5nIGdpdmluZyBwYXR0ZXJuIHVzaW5nIC9tZXRyaWNzL2ZpbmQgZW5kcG9pbnQuIEl0IHdpbGxcbiAgICogcmV0dXJuIGFsbCBwb3NzaWJsZSB2YWx1ZXMgYXQgdGhlIGxhc3QgbGV2ZWwgb2YgdGhlIHF1ZXJ5LCBmb3IgZXhhbXBsZTpcbiAgICpcbiAgICogbWV0cmljczogcHJvZC5zZXJ2ZXJzLjAwMS5jcHUsIHByb2Quc2VydmVycy4wMDIuY3B1XG4gICAqIHF1ZXJ5OiAqLnNlcnZlcnMuKlxuICAgKiByZXN1bHQ6IDAwMSwgMDAyXG4gICAqXG4gICAqIEZvciBtb3JlIGNvbXBsZXggc2VhcmNoZXMgdXNlIHJlcXVlc3RNZXRyaWNFeHBhbmRcbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdE1ldHJpY0ZpbmQoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICByYW5nZT86IHsgZnJvbTogYW55OyB1bnRpbDogYW55IH1cbiAgKTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9tZXRyaWNzL2ZpbmQnLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGRhdGE6IGBxdWVyeT0ke3F1ZXJ5fWAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmIChyYW5nZSkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmZyb20gPSByYW5nZS5mcm9tO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gcmFuZ2UudW50aWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBfbWFwKHJlc3VsdHMuZGF0YSwgKG1ldHJpYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGV4dDogbWV0cmljLnRleHQsXG4gICAgICAgICAgICAgIGV4cGFuZGFibGU6IG1ldHJpYy5leHBhbmRhYmxlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgbWV0cmljcyBtYXRjaGluZyBnaXZpbmcgcGF0dGVybiB1c2luZyAvbWV0cmljcy9leHBhbmQgZW5kcG9pbnQuXG4gICAqIFRoZSByZXN1bHQgd2lsbCBjb250YWluIGFsbCBtZXRyaWNzICh3aXRoIGZ1bGwgbmFtZSkgbWF0Y2hpbmcgcHJvdmlkZWQgcXVlcnkuXG4gICAqIEl0J3MgYSBtb3JlIGZsZXhpYmxlIHZlcnNpb24gb2YgL21ldHJpY3MvZmluZCBlbmRwb2ludCAoQHNlZSByZXF1ZXN0TWV0cmljRmluZClcbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdE1ldHJpY0V4cGFuZChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICAgIHJhbmdlPzogeyBmcm9tOiBhbnk7IHVudGlsOiBhbnkgfVxuICApOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvbWV0cmljcy9leHBhbmQnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gcmFuZ2UuZnJvbTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHJhbmdlLnVudGlsO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEucmVzdWx0cywgKG1ldHJpYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGV4dDogbWV0cmljLFxuICAgICAgICAgICAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhZ3Mob3B0aW9uYWxPcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncycsXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkOiBvcHRpb25zLnJlcXVlc3RJZCxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEsICh0YWcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IHRhZy50YWcsXG4gICAgICAgICAgICAgIGlkOiB0YWcuaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYWdWYWx1ZXMob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy90YWdzLycgKyB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5rZXkpLFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMuZnJvbSA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YSAmJiByZXN1bHRzLmRhdGEudmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFnc0F1dG9Db21wbGV0ZShleHByZXNzaW9uczogYW55W10sIHRhZ1ByZWZpeDogYW55LCBvcHRpb25hbE9wdGlvbnM/OiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncy9hdXRvQ29tcGxldGUvdGFncycsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZXhwcjogX21hcChleHByZXNzaW9ucywgKGV4cHJlc3Npb24pID0+IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSgoZXhwcmVzc2lvbiB8fCAnJykudHJpbSgpKSksXG4gICAgICB9LFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmICh0YWdQcmVmaXgpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy50YWdQcmVmaXggPSB0YWdQcmVmaXg7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxpbWl0KSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMubGltaXQgPSBvcHRpb25zLmxpbWl0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yYW5nZSkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmZyb20gPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudW50aWwgPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS50bywgdHJ1ZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUobWFwVG9UYWdzKCkpKTtcbiAgfVxuXG4gIGdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZShleHByZXNzaW9uczogYW55W10sIHRhZzogYW55LCB2YWx1ZVByZWZpeDogYW55LCBvcHRpb25hbE9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBvcHRpb25hbE9wdGlvbnMgfHwge307XG5cbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy90YWdzL2F1dG9Db21wbGV0ZS92YWx1ZXMnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGV4cHI6IF9tYXAoZXhwcmVzc2lvbnMsIChleHByZXNzaW9uKSA9PiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoKGV4cHJlc3Npb24gfHwgJycpLnRyaW0oKSkpLFxuICAgICAgICB0YWc6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSgodGFnIHx8ICcnKS50cmltKCkpLFxuICAgICAgfSxcbiAgICAgIC8vIGZvciBjYW5jZWxsYXRpb25zXG4gICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMucmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAodmFsdWVQcmVmaXgpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy52YWx1ZVByZWZpeCA9IHZhbHVlUHJlZml4O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5saW1pdCkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmxpbWl0ID0gb3B0aW9ucy5saW1pdDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKG1hcFRvVGFncygpKSk7XG4gIH1cblxuICBnZXRWZXJzaW9uKG9wdGlvbmFsT3B0aW9uczogYW55KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbmFsT3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy92ZXJzaW9uJyxcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzZW12ZXIgPSBuZXcgU2VtVmVyc2lvbihyZXN1bHRzLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbXZlci5pc1ZhbGlkKCkgPyByZXN1bHRzLmRhdGEgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKCcnKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlRnVuY0luc3RhbmNlKGZ1bmNEZWY6IGFueSwgb3B0aW9ucz86IGFueSk6IEZ1bmNJbnN0YW5jZSB7XG4gICAgcmV0dXJuIGdmdW5jLmNyZWF0ZUZ1bmNJbnN0YW5jZShmdW5jRGVmLCBvcHRpb25zLCB0aGlzLmZ1bmNEZWZzKTtcbiAgfVxuXG4gIGdldEZ1bmNEZWYobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdmdW5jLmdldEZ1bmNEZWYobmFtZSwgdGhpcy5mdW5jRGVmcyk7XG4gIH1cblxuICB3YWl0Rm9yRnVuY0RlZnNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RnVuY0RlZnMoKTtcbiAgfVxuXG4gIGdldEZ1bmNEZWZzKCkge1xuICAgIGlmICh0aGlzLmZ1bmNEZWZzUHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnNQcm9taXNlO1xuICAgIH1cblxuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvbkluZGV4KHRoaXMuZ3JhcGhpdGVWZXJzaW9uKSkge1xuICAgICAgdGhpcy5mdW5jRGVmcyA9IGdmdW5jLmdldEZ1bmNEZWZzKHRoaXMuZ3JhcGhpdGVWZXJzaW9uKTtcbiAgICAgIHRoaXMuZnVuY0RlZnNQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZnVuY0RlZnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnNQcm9taXNlO1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9mdW5jdGlvbnMnLFxuICAgICAgLy8gYWRkIHJlc3BvbnNlVHlwZSBiZWNhdXNlIGlmIHRoaXMgaXMgbm90IGRlZmluZWQsXG4gICAgICAvLyBiYWNrZW5kX3NydiBkZWZhdWx0cyB0byBqc29uXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIEZpeCBmb3IgYSBHcmFwaGl0ZSBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaGl0ZS1wcm9qZWN0L2dyYXBoaXRlLXdlYi9pc3N1ZXMvMjYwOVxuICAgICAgICAgIC8vIFRoZXJlIGlzIGEgZml4IGZvciBpdCBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhpdGUtcHJvamVjdC9ncmFwaGl0ZS13ZWIvcHVsbC8yNjEyIGJ1dFxuICAgICAgICAgIC8vIGl0IHdhcyBtZXJnZWQgdG8gbWFzdGVyIGluIEp1bHkgMjAyMCBidXQgaXQgaGFzIG5ldmVyIGJlZW4gcmVsZWFzZWQgKHRoZSBsYXN0IEdyYXBoaXRlXG4gICAgICAgICAgLy8gcmVsZWFzZSB3YXMgMS4xLjcgLSBNYXJjaCAyMDIwKS4gVGhlIGJ1ZyB3YXMgaW50cm9kdWNlZCBpbiBHcmFwaGl0ZSAxLjEuNywgaW4gdmVyc2lvbnNcbiAgICAgICAgICAvLyAxLjEuMCAtIDEuMS42IC9mdW5jdGlvbnMgZW5kcG9pbnQgcmV0dXJucyBhIHZhbGlkIEpTT05cbiAgICAgICAgICBjb25zdCBmaXhlZERhdGEgPSBKU09OLnBhcnNlKHJlc3VsdHMuZGF0YS5yZXBsYWNlKC9cImRlZmF1bHRcIjogP0luZmluaXR5L2csICdcImRlZmF1bHRcIjogMWU5OTk5JykpO1xuICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5wYXJzZUZ1bmNEZWZzKGZpeGVkRGF0YSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnM7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2hpbmcgZ3JhcGhpdGUgZnVuY3Rpb25zIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5nZXRGdW5jRGVmcyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgICAgcmV0dXJuIG9mKHRoaXMuZnVuY0RlZnMpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHBhbmVsSWQ6IDMsXG4gICAgICByYW5nZVJhdzogeyBmcm9tOiAnbm93LTFoJywgdG86ICdub3cnIH0sXG4gICAgICByYW5nZToge1xuICAgICAgICByYXc6IHsgZnJvbTogJ25vdy0xaCcsIHRvOiAnbm93JyB9LFxuICAgICAgfSxcbiAgICAgIHRhcmdldHM6IFt7IHRhcmdldDogJ2NvbnN0YW50TGluZSgxMDApJyB9XSxcbiAgICAgIG1heERhdGFQb2ludHM6IDMwMCxcbiAgICB9IGFzIHVua25vd24gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxHcmFwaGl0ZVF1ZXJ5PjtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMucXVlcnkocXVlcnkpKS50aGVuKCgpID0+ICh7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfSkpO1xuICB9XG5cbiAgZG9HcmFwaGl0ZVJlcXVlc3Qob3B0aW9uczoge1xuICAgIG1ldGhvZD86IHN0cmluZztcbiAgICB1cmw6IGFueTtcbiAgICByZXF1ZXN0SWQ/OiBhbnk7XG4gICAgd2l0aENyZWRlbnRpYWxzPzogYW55O1xuICAgIGhlYWRlcnM/OiBhbnk7XG4gICAgaW5zcGVjdD86IGFueTtcbiAgfSkge1xuICAgIGlmICh0aGlzLmJhc2ljQXV0aCB8fCB0aGlzLndpdGhDcmVkZW50aWFscykge1xuICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5iYXNpY0F1dGgpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5iYXNpY0F1dGg7XG4gICAgfVxuXG4gICAgb3B0aW9ucy51cmwgPSB0aGlzLnVybCArIG9wdGlvbnMudXJsO1xuICAgIG9wdGlvbnMuaW5zcGVjdCA9IHsgdHlwZTogJ2dyYXBoaXRlJyB9O1xuXG4gICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmZldGNoKG9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZWR1Y2VFcnJvcihlcnIpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBidWlsZEdyYXBoaXRlUGFyYW1zKG9wdGlvbnM6IGFueSwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZ3JhcGhpdGVPcHRpb25zID0gWydmcm9tJywgJ3VudGlsJywgJ3Jhd0RhdGEnLCAnZm9ybWF0JywgJ21heERhdGFQb2ludHMnLCAnY2FjaGVUaW1lb3V0J107XG4gICAgY29uc3QgY2xlYW5PcHRpb25zID0gW10sXG4gICAgICB0YXJnZXRzOiBhbnkgPSB7fTtcbiAgICBsZXQgdGFyZ2V0LCB0YXJnZXRWYWx1ZSwgaTtcbiAgICBjb25zdCByZWdleCA9IC9cXCMoW0EtWl0pL2c7XG4gICAgY29uc3QgaW50ZXJ2YWxGb3JtYXRGaXhSZWdleCA9IC8nKFxcZCspbScvZ2k7XG4gICAgbGV0IGhhc1RhcmdldHMgPSBmYWxzZTtcblxuICAgIG9wdGlvbnNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXG4gICAgZnVuY3Rpb24gZml4SW50ZXJ2YWxGb3JtYXQobWF0Y2g6IGFueSkge1xuICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoJ20nLCAnbWluJykucmVwbGFjZSgnTScsICdtb24nKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy50YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbaV07XG4gICAgICBpZiAoIXRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFyZ2V0LnJlZklkKSB7XG4gICAgICAgIHRhcmdldC5yZWZJZCA9IHRoaXMuX3Nlcmllc1JlZkxldHRlcnNbaV07XG4gICAgICB9XG5cbiAgICAgIHRhcmdldFZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC50YXJnZXQsIHNjb3BlZFZhcnMpO1xuICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZS5yZXBsYWNlKGludGVydmFsRm9ybWF0Rml4UmVnZXgsIGZpeEludGVydmFsRm9ybWF0KTtcbiAgICAgIHRhcmdldHNbdGFyZ2V0LnJlZklkXSA9IHRhcmdldFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5lc3RlZFNlcmllc1JlZ2V4UmVwbGFjZXIobWF0Y2g6IGFueSwgZzE6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRhcmdldHNbZzFdIHx8IG1hdGNoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLnRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0c1tpXTtcbiAgICAgIGlmICghdGFyZ2V0LnRhcmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRzW3RhcmdldC5yZWZJZF07XG4gICAgICB0YXJnZXRWYWx1ZSA9IHRhcmdldFZhbHVlLnJlcGxhY2UocmVnZXgsIG5lc3RlZFNlcmllc1JlZ2V4UmVwbGFjZXIpO1xuICAgICAgdGFyZ2V0c1t0YXJnZXQucmVmSWRdID0gdGFyZ2V0VmFsdWU7XG5cbiAgICAgIGlmICghdGFyZ2V0LmhpZGUpIHtcbiAgICAgICAgaGFzVGFyZ2V0cyA9IHRydWU7XG4gICAgICAgIGNsZWFuT3B0aW9ucy5wdXNoKCd0YXJnZXQ9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0YXJnZXRWYWx1ZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVhY2gob3B0aW9ucywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmIChpbmRleE9mKGdyYXBoaXRlT3B0aW9ucywga2V5KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNsZWFuT3B0aW9ucy5wdXNoKGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFoYXNUYXJnZXRzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsZWFuT3B0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1RhZ3ModmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1ZlcnNpb25HdE9yRXEodmVyc2lvbiwgJzEuMScpO1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0Z1bmN0aW9uSW5kZXgodmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1ZlcnNpb25HdE9yRXEodmVyc2lvbiwgJzEuMScpO1xufVxuXG5mdW5jdGlvbiBtYXBUb1RhZ3MoKTogT3BlcmF0b3JGdW5jdGlvbjxhbnksIEFycmF5PHsgdGV4dDogc3RyaW5nIH0+PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0cy5kYXRhKSB7XG4gICAgICAgIHJldHVybiBfbWFwKHJlc3VsdHMuZGF0YSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdGV4dDogdmFsdWUgfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn1cbiIsImltcG9ydCB7IGFzc2lnbiwgZWFjaCwgZmlsdGVyLCBmb3JFYWNoLCBnZXQsIGluY2x1ZGVzLCBpc1N0cmluZywgbGFzdCwgbWFwLCB0b1N0cmluZywgaXNGaW5pdGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBJbnRlcnBvbGF0ZUZ1bmN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBpc1ZlcnNpb25HdE9yRXEgfSBmcm9tICdhcHAvY29yZS91dGlscy92ZXJzaW9uJztcblxuZXhwb3J0IHR5cGUgUGFyYW1EZWYgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBvcHRpb25zPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICBvcHRpb25hbD86IGJvb2xlYW47XG4gIHZlcnNpb24/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNEZWYge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhcmFtczogUGFyYW1EZWZbXTtcbiAgZGVmYXVsdFBhcmFtczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIHNob3J0TmFtZT86IGFueTtcbiAgZmFrZT86IGJvb2xlYW47XG4gIHZlcnNpb24/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZnVuY3Rpb24gd2FzIG5vdCBmb3VuZCBvbiB0aGUgbGlzdCBvZiBhdmFpbGFibGUgZnVuY3Rpb24gZGVzY3JpcHRpb25zLlxuICAgKi9cbiAgdW5rbm93bj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEZ1bmNEZWZzID0ge1xuICBbZnVuY3Rpb25OYW1lIGluIHN0cmluZ106IEZ1bmNEZWY7XG59O1xuXG5jb25zdCBpbmRleDogRnVuY0RlZnMgPSB7fTtcblxuZnVuY3Rpb24gYWRkRnVuY0RlZihmdW5jRGVmOiBQYXJ0aWFsPEZ1bmNEZWY+ICYgeyBuYW1lOiBzdHJpbmc7IGNhdGVnb3J5OiBzdHJpbmcgfSkge1xuICBmdW5jRGVmLnBhcmFtcyA9IGZ1bmNEZWYucGFyYW1zIHx8IFtdO1xuICBmdW5jRGVmLmRlZmF1bHRQYXJhbXMgPSBmdW5jRGVmLmRlZmF1bHRQYXJhbXMgfHwgW107XG5cbiAgaW5kZXhbZnVuY0RlZi5uYW1lXSA9IGZ1bmNEZWYgYXMgRnVuY0RlZjtcbiAgaWYgKGZ1bmNEZWYuc2hvcnROYW1lKSB7XG4gICAgaW5kZXhbZnVuY0RlZi5zaG9ydE5hbWVdID0gZnVuY0RlZiBhcyBGdW5jRGVmO1xuICB9XG59XG5cbmNvbnN0IG9wdGlvbmFsU2VyaWVzUmVmQXJncyA9IFt7IG5hbWU6ICdvdGhlcicsIHR5cGU6ICd2YWx1ZV9vcl9zZXJpZXMnLCBvcHRpb25hbDogdHJ1ZSwgbXVsdGlwbGU6IHRydWUgfV07XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc2NhbGVUb1NlY29uZHMnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ3NlY29uZHMnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzFdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncGVyU2Vjb25kJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdtYXggdmFsdWUnLCB0eXBlOiAnaW50Jywgb3B0aW9uYWw6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaG9sdFdpbnRlcnNGb3JlY2FzdCcsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hvbHRXaW50ZXJzQ29uZmlkZW5jZUJhbmRzJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdkZWx0YScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdob2x0V2ludGVyc0FiZXJyYXRpb24nLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2RlbHRhJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ25QZXJjZW50aWxlJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdOdGggcGVyY2VudGlsZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbOTVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZGlmZlNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdGRkZXZTZXJpZXMnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2RpdmlkZVNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtdWx0aXBseVNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhc1BlcmNlbnQnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycjQSddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZ3JvdXAnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycjQScsICcjQiddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3VtU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnc3VtJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnYXZnJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyYW5nZU9mU2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3BlcmNlbnRpbGVPZlNlcmllcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ2ludGVycG9sYXRlJywgdHlwZTogJ2Jvb2xlYW4nLCBvcHRpb25zOiBbJ3RydWUnLCAnZmFsc2UnXSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbOTUsICdmYWxzZSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3VtU2VyaWVzV2l0aFdpbGRjYXJkcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ25vZGUnLCB0eXBlOiAnaW50JywgbXVsdGlwbGU6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21heFNlcmllcycsXG4gIHNob3J0TmFtZTogJ21heCcsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtaW5TZXJpZXMnLFxuICBzaG9ydE5hbWU6ICdtaW4nLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZVNlcmllc1dpdGhXaWxkY2FyZHMnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdub2RlJywgdHlwZTogJ2ludCcsIG11bHRpcGxlOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhcycsXG4gIGNhdGVnb3J5OiAnQWxpYXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdhbGlhcycsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2FsaWFzJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhc1N1YicsXG4gIGNhdGVnb3J5OiAnQWxpYXMnLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdzZWFyY2gnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHsgbmFtZTogJ3JlcGxhY2UnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJycsICdcXFxcMSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY29uc29saWRhdGVCeScsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZXJhZ2UnLCAnbWluJywgJ21heCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnbWF4J10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjdW11bGF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdncm91cEJ5Tm9kZScsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWF4U2VyaWVzJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzMsICdzdW0nXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzQnlOb2RlJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdWJzdHInLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbLTYsIC01LCAtNCwgLTMsIC0yLCAtMSwgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdG9wJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWy02LCAtNSwgLTQsIC0zLCAtMiwgLTEsIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzAsIDBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc29ydEJ5TmFtZScsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYXR1cmFsJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIG9wdGlvbnM6IFsndHJ1ZScsICdmYWxzZSddLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydmYWxzZSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc29ydEJ5TWF4aW1hJyxcbiAgY2F0ZWdvcnk6ICdTb3J0aW5nJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NvcnRCeU1pbmltYScsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzb3J0QnlUb3RhbCcsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhc0J5TWV0cmljJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyYW5kb21XYWxrJyxcbiAgZmFrZTogdHJ1ZSxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3JhbmRvbVdhbGsnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NvdW50U2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NvbnN0YW50TGluZScsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ3ZhbHVlJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjYWN0aVN0eWxlJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2tlZXBMYXN0VmFsdWUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzEwMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjaGFuZ2VkJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzY2FsZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZmFjdG9yJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnYW1vdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0cmFuc2Zvcm1OdWxsJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdhbW91bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaW50ZWdyYWwnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdkZXJpdmF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbm9uTmVnYXRpdmVEZXJpdmF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdtYXggdmFsdWUgb3IgMCcsIHR5cGU6ICdpbnQnLCBvcHRpb25hbDogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3RpbWVTaGlmdCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Ftb3VudCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnMWgnLCAnNmgnLCAnMTJoJywgJzFkJywgJzJkJywgJzdkJywgJzE0ZCcsICczMGQnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFkJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0aW1lU3RhY2snLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd0aW1lU2hpZnRVbml0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWycxaCcsICc2aCcsICcxMmgnLCAnMWQnLCAnMmQnLCAnN2QnLCAnMTRkJywgJzMwZCddLFxuICAgIH0sXG4gICAgeyBuYW1lOiAndGltZVNoaWZ0U3RhcnQnLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ3RpbWVTaGlmdEVuZCcsIHR5cGU6ICdpbnQnIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMWQnLCAwLCA3XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3N1bW1hcml6ZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnaW50ZXJ2YWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZnJywgJ21pbicsICdtYXgnLCAnbGFzdCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2FsaWduVG9Gcm9tJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgb3B0aW9uczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxaCcsICdzdW0nLCAnZmFsc2UnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NtYXJ0U3VtbWFyaXplJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdpbnRlcnZhbCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmMnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWluJywgJ21heCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxaCcsICdzdW0nXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2Fic29sdXRlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaGl0Y291bnQnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2ludGVydmFsJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMTBzJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsb2cnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2Jhc2UnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycxMCddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY3VycmVudEFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY3VycmVudEJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWF4aW11bUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWF4aW11bUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWluaW11bUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWluaW11bUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbGltaXQnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vc3REZXZpYW50JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZXhjbHVkZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2V4Y2x1ZGUnLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydleGNsdWRlJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdoaWdoZXN0Q3VycmVudCcsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hpZ2hlc3RNYXgnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsb3dlc3RDdXJyZW50JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nQXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vdmluZ01lZGlhbicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyc1J10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdGRldicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH0sXG4gICAgeyBuYW1lOiAndG9sZXJhbmNlJywgdHlwZTogJ2ludCcgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzUsIDAuMV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdoaWdoZXN0QXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2xvd2VzdEF2ZXJhZ2UnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVBYm92ZVBlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBEYXRhJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVBYm92ZVZhbHVlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgRGF0YScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVtb3ZlQmVsb3dQZXJjZW50aWxlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgRGF0YScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVtb3ZlQmVsb3dWYWx1ZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIERhdGEnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3VzZVNlcmllc0Fib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ3NlYXJjaCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgeyBuYW1lOiAncmVwbGFjZScsIHR5cGU6ICdzdHJpbmcnIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFswLCAnc2VhcmNoJywgJ3JlcGxhY2UnXSxcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR3JhcGhpdGUgMS4wLnggLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYWdncmVnYXRlTGluZScsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmMnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWluJywgJ21heCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhdmcnXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlT3V0c2lkZVBlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs5NV0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZGVsYXknLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ3N0ZXBzJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdleHBvbmVudGlhbE1vdmluZ0F2ZXJhZ2UnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dTaXplJyxcbiAgICAgIHR5cGU6ICdpbnRfb3JfaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyc1JywgJzcnLCAnMTAnLCAnNW1pbicsICcxMG1pbicsICczMG1pbicsICcxaG91ciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZmFsbGJhY2tTZXJpZXMnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdmYWxsYmFjaycsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2NvbnN0YW50TGluZSgwKSddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyZXAnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdncmVwJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnZ3JlcCddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyb3VwQnlOb2RlcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZycsICdtYXhTZXJpZXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3N1bScsIDNdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2ludGVncmFsQnlJbnRlcnZhbCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ludGVydmFsVW5pdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnMWgnLCAnNmgnLCAnMTJoJywgJzFkJywgJzJkJywgJzdkJywgJzE0ZCcsICczMGQnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFkJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaW50ZXJwb2xhdGUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2xpbWl0JywgdHlwZTogJ2ludCcsIG9wdGlvbmFsOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdpbnZlcnQnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaXNOb25OdWxsJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsaW5lYXJSZWdyZXNzaW9uJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnc3RhcnRTb3VyY2VBdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnLTFoJywgJy02aCcsICctMTJoJywgJy0xZCcsICctMmQnLCAnLTdkJywgJy0xNGQnLCAnLTMwZCddLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZW5kU291cmNlQXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJy0xaCcsICctNmgnLCAnLTEyaCcsICctMWQnLCAnLTJkJywgJy03ZCcsICctMTRkJywgJy0zMGQnXSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21hcFNlcmllcycsXG4gIHNob3J0TmFtZTogJ21hcCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ25vZGUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vdmluZ01pbicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtb3ZpbmdNYXgnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dTaXplJyxcbiAgICAgIHR5cGU6ICdpbnRfb3JfaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyc1JywgJzcnLCAnMTAnLCAnNW1pbicsICcxMG1pbicsICczMG1pbicsICcxaG91ciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nU3VtJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnd2luZG93U2l6ZScsXG4gICAgICB0eXBlOiAnaW50X29yX2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnNScsICc3JywgJzEwJywgJzVtaW4nLCAnMTBtaW4nLCAnMzBtaW4nLCAnMWhvdXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ211bHRpcGx5U2VyaWVzV2l0aFdpbGRjYXJkcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdwb3NpdGlvbicsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIG9wdGlvbnM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdLFxuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzJdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ29mZnNldFRvWmVybycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdwb3cnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2ZhY3RvcicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3Bvd1NlcmllcycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVkdWNlU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAncmVkdWNlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydhc1BlcmNlbnQnLCAnZGlmZlNlcmllcycsICdkaXZpZGVTZXJpZXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdyZWR1Y2VOb2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzXSxcbiAgICB9LFxuICAgIHsgbmFtZTogJ3JlZHVjZU1hdGNoZXJzJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYXNQZXJjZW50JywgMiwgJ3VzZWRfYnl0ZXMnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVCZXR3ZWVuUGVyY2VudGlsZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzk1XSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVFbXB0eVNlcmllcycsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3F1YXJlUm9vdCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0aW1lU2xpY2UnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdzdGFydFNsaWNlQXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJy0xaCcsICctNmgnLCAnLTEyaCcsICctMWQnLCAnLTJkJywgJy03ZCcsICctMTRkJywgJy0zMGQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdlbmRTbGljZUF0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWyctMWgnLCAnLTZoJywgJy0xMmgnLCAnLTFkJywgJy0yZCcsICctN2QnLCAnLTE0ZCcsICctMzBkJ10sXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJy0xaCddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3dlaWdodGVkQXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ290aGVyJywgdHlwZTogJ3ZhbHVlX29yX3NlcmllcycsIG9wdGlvbmFsOiB0cnVlIH0sXG4gICAge1xuICAgICAgbmFtZTogJ25vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJywgNF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc2VyaWVzQnlUYWcnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd0YWdFeHByZXNzaW9uJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH1dLFxuICB2ZXJzaW9uOiAnMS4xJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyb3VwQnlUYWdzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZnJywgJ21heFNlcmllcyddLFxuICAgIH0sXG4gICAgeyBuYW1lOiAndGFnJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnc3VtJywgJ3RhZyddLFxuICB2ZXJzaW9uOiAnMS4xJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzQnlUYWdzJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ3RhZycsIHR5cGU6ICdzdHJpbmcnLCBtdWx0aXBsZTogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWyd0YWcnXSxcbiAgdmVyc2lvbjogJzEuMScsXG59KTtcblxuZnVuY3Rpb24gaXNWZXJzaW9uUmVsYXRlZEZ1bmN0aW9uKG9iajogeyB2ZXJzaW9uPzogc3RyaW5nIH0sIGdyYXBoaXRlVmVyc2lvbjogc3RyaW5nKSB7XG4gIHJldHVybiAhb2JqLnZlcnNpb24gfHwgaXNWZXJzaW9uR3RPckVxKGdyYXBoaXRlVmVyc2lvbiwgb2JqLnZlcnNpb24pO1xufVxuXG5leHBvcnQgY2xhc3MgRnVuY0luc3RhbmNlIHtcbiAgZGVmOiBGdW5jRGVmO1xuICBwYXJhbXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj47XG4gIHRleHQ6IGFueTtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBmdW5jdGlvbiB3YXMganVzdCBhZGRlZCBhbmQgbm90IGVkaXRlZCB5ZXQuIEl0J3MgdXNlZCB0byBmb2N1cyBvbiBmaXJzdFxuICAgKiBmdW5jdGlvbiBwYXJhbSB0byBlZGl0IGl0IHN0cmFpZ2h0IGF3YXkgYWZ0ZXIgYWRkaW5nIGEgZnVuY3Rpb24uXG4gICAqL1xuICBkZWNsYXJlIGFkZGVkOiBib29sZWFuO1xuICAvKipcbiAgICogSGlkZGVuIGZ1bmN0aW9ucyBhcmUgbm90IGRpc3BsYXllZCBpbiBVSSBidXQgYXZhaWxhYmxlIGluIHRleHQgZWRpdG9yXG4gICAqIFRoaXMgaXMgdXNlZCBmb3Igc2VyaWVzQnlUYWdVc2VkIGZ1bmN0aW9uIHdoaWNoIHdoZW4gdXNlZCBzd2l0Y2hlc1xuICAgKiB0aGUgZWRpdG9yIHRvIHRhZy1vbmx5IG1vZGUuIERlZmluZWQgdGFncyBhcmUgcHJvdmlkZWQgdG8gc2VyaWVzQnlUYWdVc2VkXG4gICAqIGFzIHBhcmFtZXRlcnMuXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGZ1bmNEZWY6IEZ1bmNEZWYsIG9wdGlvbnM/OiB7IHdpdGhEZWZhdWx0UGFyYW1zOiBhbnkgfSkge1xuICAgIHRoaXMuZGVmID0gZnVuY0RlZjtcbiAgICB0aGlzLnBhcmFtcyA9IFtdO1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53aXRoRGVmYXVsdFBhcmFtcyAmJiBmdW5jRGVmLmRlZmF1bHRQYXJhbXMpIHtcbiAgICAgIHRoaXMucGFyYW1zID0gZnVuY0RlZi5kZWZhdWx0UGFyYW1zLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG5cbiAgcmVuZGVyKG1ldHJpY0V4cDogc3RyaW5nLCByZXBsYWNlVmFyaWFibGVzOiBJbnRlcnBvbGF0ZUZ1bmN0aW9uKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHIgPSB0aGlzLmRlZi5uYW1lICsgJygnO1xuXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IG1hcCh0aGlzLnBhcmFtcywgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHBhcmFtVHlwZTtcblxuICAgICAgaWYgKGluZGV4IDwgdGhpcy5kZWYucGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBwYXJhbVR5cGUgPSB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLnR5cGU7XG4gICAgICB9IGVsc2UgaWYgKGdldChsYXN0KHRoaXMuZGVmLnBhcmFtcyksICdtdWx0aXBsZScpKSB7XG4gICAgICAgIHBhcmFtVHlwZSA9IGdldChsYXN0KHRoaXMuZGVmLnBhcmFtcyksICd0eXBlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhcmFtIHR5cGVzIHRoYXQgc2hvdWxkIG5ldmVyIGJlIHF1b3RlZFxuICAgICAgaWYgKGluY2x1ZGVzKFsndmFsdWVfb3Jfc2VyaWVzJywgJ2Jvb2xlYW4nLCAnaW50JywgJ2Zsb2F0JywgJ25vZGUnLCAnaW50X29yX2luZmluaXR5J10sIHBhcmFtVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZUludGVycG9sYXRlZCA9IGlzU3RyaW5nKHZhbHVlKSA/IHJlcGxhY2VWYXJpYWJsZXModmFsdWUpIDogdmFsdWU7XG5cbiAgICAgIC8vIHBhcmFtIHR5cGVzIHRoYXQgbWlnaHQgYmUgcXVvdGVkXG4gICAgICAvLyBUbyBxdW90ZSB2YXJpYWJsZXMgY29ycmVjdGx5IHdlIG5lZWQgdG8gaW50ZXJwb2xhdGUgaXQgdG8gY2hlY2sgaWYgaXQgY29udGFpbnMgYSBudW1lcmljIG9yIHN0cmluZyB2YWx1ZVxuICAgICAgaWYgKGluY2x1ZGVzKFsnaW50X29yX2ludGVydmFsJywgJ25vZGVfb3JfdGFnJ10sIHBhcmFtVHlwZSkgJiYgaXNGaW5pdGUoK3ZhbHVlSW50ZXJwb2xhdGVkKSkge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCInXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgIH0pO1xuXG4gICAgLy8gZG9uJ3Qgc2VuZCBhbnkgYmxhbmsgcGFyYW1ldGVycyB0byBncmFwaGl0ZVxuICAgIHdoaWxlIChwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgICBwYXJhbWV0ZXJzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChtZXRyaWNFeHApIHtcbiAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChtZXRyaWNFeHApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIgKyBwYXJhbWV0ZXJzLmpvaW4oJywgJykgKyAnKSc7XG4gIH1cblxuICBfaGFzTXVsdGlwbGVQYXJhbXNJblN0cmluZyhzdHJWYWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHN0clZhbHVlLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWYucGFyYW1zW2luZGV4ICsgMV0gJiYgdGhpcy5kZWYucGFyYW1zW2luZGV4ICsgMV0ub3B0aW9uYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbmRleCArIDEgPj0gdGhpcy5kZWYucGFyYW1zLmxlbmd0aCAmJiBnZXQobGFzdCh0aGlzLmRlZi5wYXJhbXMpLCAnbXVsdGlwbGUnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlUGFyYW0oc3RyVmFsdWU6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIC8vIGhhbmRsZSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgLy8gaWYgc3RyaW5nIGNvbnRhaW5zICcsJyBhbmQgbmV4dCBwYXJhbSBpcyBvcHRpb25hbCwgc3BsaXQgYW5kIHVwZGF0ZSBib3RoXG4gICAgaWYgKHRoaXMuX2hhc011bHRpcGxlUGFyYW1zSW5TdHJpbmcoc3RyVmFsdWUsIGluZGV4KSkge1xuICAgICAgZWFjaChzdHJWYWx1ZS5zcGxpdCgnLCcpLCAocGFydFZhbCwgaWR4KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFyYW0ocGFydFZhbC50cmltKCksIGluZGV4ICsgaWR4KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgJiYgKGluZGV4ID49IHRoaXMuZGVmLnBhcmFtcy5sZW5ndGggfHwgdGhpcy5kZWYucGFyYW1zW2luZGV4XS5vcHRpb25hbCkpIHtcbiAgICAgIHRoaXMucGFyYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFyYW1zW2luZGV4XSA9IHN0clZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG5cbiAgdXBkYXRlVGV4dCgpIHtcbiAgICBpZiAodGhpcy5wYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnRleHQgPSB0aGlzLmRlZi5uYW1lICsgJygpJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dCA9IHRoaXMuZGVmLm5hbWUgKyAnKCc7XG4gICAgdGV4dCArPSB0aGlzLnBhcmFtcy5qb2luKCcsICcpO1xuICAgIHRleHQgKz0gJyknO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVuY0luc3RhbmNlKGZ1bmNEZWY6IGFueSwgb3B0aW9ucz86IHsgd2l0aERlZmF1bHRQYXJhbXM6IGFueSB9LCBpZHg/OiBhbnkpOiBGdW5jSW5zdGFuY2Uge1xuICBpZiAoaXNTdHJpbmcoZnVuY0RlZikpIHtcbiAgICBmdW5jRGVmID0gZ2V0RnVuY0RlZihmdW5jRGVmLCBpZHgpO1xuICB9XG4gIHJldHVybiBuZXcgRnVuY0luc3RhbmNlKGZ1bmNEZWYsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRGdW5jRGVmKG5hbWU6IHN0cmluZywgaWR4PzogYW55KTogRnVuY0RlZiB7XG4gIGlmICghKGlkeCB8fCBpbmRleClbbmFtZV0pIHtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBwYXJhbXM6IFt7IG5hbWU6ICcnLCB0eXBlOiAnJywgbXVsdGlwbGU6IHRydWUgfV0sIGRlZmF1bHRQYXJhbXM6IFsnJ10sIHVua25vd246IHRydWUgfTtcbiAgfVxuICByZXR1cm4gKGlkeCB8fCBpbmRleClbbmFtZV07XG59XG5cbmZ1bmN0aW9uIGdldEZ1bmNEZWZzKGdyYXBoaXRlVmVyc2lvbjogc3RyaW5nLCBpZHg/OiBhbnkpOiBGdW5jRGVmcyB7XG4gIGNvbnN0IGZ1bmNzOiBGdW5jRGVmcyA9IHt9O1xuICBmb3JFYWNoKGlkeCB8fCBpbmRleCwgKGZ1bmNEZWY6IEZ1bmNEZWYpID0+IHtcbiAgICBpZiAoaXNWZXJzaW9uUmVsYXRlZEZ1bmN0aW9uKGZ1bmNEZWYsIGdyYXBoaXRlVmVyc2lvbikpIHtcbiAgICAgIGZ1bmNzW2Z1bmNEZWYubmFtZV0gPSBhc3NpZ24oe30sIGZ1bmNEZWYsIHtcbiAgICAgICAgcGFyYW1zOiBmaWx0ZXIoZnVuY0RlZi5wYXJhbXMsIChwYXJhbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc1ZlcnNpb25SZWxhdGVkRnVuY3Rpb24ocGFyYW0sIGdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZ1bmNzO1xufVxuXG4vLyBwYXJzZSByZXNwb25zZSBmcm9tIGdyYXBoaXRlIC9mdW5jdGlvbnMgZW5kcG9pbnQgaW50byBpbnRlcm5hbCBmb3JtYXRcbmZ1bmN0aW9uIHBhcnNlRnVuY0RlZnMocmF3RGVmczogYW55KTogRnVuY0RlZnMge1xuICBjb25zdCBmdW5jRGVmczogRnVuY0RlZnMgPSB7fTtcblxuICBmb3JFYWNoKHJhd0RlZnMgfHwge30sIChmdW5jRGVmLCBmdW5jTmFtZSkgPT4ge1xuICAgIC8vIHNraXAgZ3JhcGhpdGUgZ3JhcGggZnVuY3Rpb25zXG4gICAgaWYgKGZ1bmNEZWYuZ3JvdXAgPT09ICdHcmFwaCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmdW5jRGVmLmRlc2NyaXB0aW9uO1xuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgLy8gdGlkeSB1cCBzb21lIHB5ZG9jIHN5bnRheCB0aGF0IHJzdDJodG1sIGNhbid0IGhhbmRsZVxuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAucmVwbGFjZSgvOnB5OmZ1bmM6YCguKykoIDxbXj5dKj4pP2AvZywgJ2BgJDFgYCcpXG4gICAgICAgIC5yZXBsYWNlKC8uLiBzZWVhbHNvOjogL2csICdTZWUgYWxzbzogJylcbiAgICAgICAgLnJlcGxhY2UoLy4uIGNvZGUtYmxvY2sgKjo6ICpub25lL2csICcuLiBjb2RlLWJsb2NrOjonKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdW5jOiBGdW5jRGVmID0ge1xuICAgICAgbmFtZTogZnVuY0RlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjYXRlZ29yeTogZnVuY0RlZi5ncm91cCxcbiAgICAgIHBhcmFtczogW10sXG4gICAgICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgICAgIGZha2U6IGZhbHNlLFxuICAgIH07XG5cbiAgICAvLyBnZXQgcmlkIG9mIHRoZSBmaXJzdCBcInNlcmllc0xpc3RcIiBwYXJhbVxuICAgIGlmICgvXnNlcmllc0xpc3RzPyQvLnRlc3QoZ2V0KGZ1bmNEZWYsICdwYXJhbXNbMF0udHlwZScsICcnKSkpIHtcbiAgICAgIC8vIGhhbmRsZSBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbXVsdGlwbGUgc2VyaWVzTGlzdHNcbiAgICAgIC8vIHdlIGxlYXZlIHRoZSBwYXJhbSBpbiBwbGFjZSBidXQgbWFyayBpdCBvcHRpb25hbCwgc28gdXNlcnMgY2FuIGFkZCBtb3JlIHNlcmllcyBpZiB0aGV5IHdpc2hcbiAgICAgIGlmIChmdW5jRGVmLnBhcmFtc1swXS5tdWx0aXBsZSkge1xuICAgICAgICBmdW5jRGVmLnBhcmFtc1swXS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvLyBvdGhlcndpc2UgY2hvcCBvZmYgdGhlIGZpcnN0IHBhcmFtLCBpdCdsbCBiZSBoYW5kbGVkIHNlcGFyYXRlbHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmNEZWYucGFyYW1zLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICAvLyB0YWcgZnVuY3Rpb24gYXMgZmFrZVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jLmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvckVhY2goZnVuY0RlZi5wYXJhbXMsIChyYXdQYXJhbSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW06IGFueSA9IHtcbiAgICAgICAgbmFtZTogcmF3UGFyYW0ubmFtZSxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG9wdGlvbmFsOiAhcmF3UGFyYW0ucmVxdWlyZWQsXG4gICAgICAgIG11bHRpcGxlOiAhIXJhd1BhcmFtLm11bHRpcGxlLFxuICAgICAgICBvcHRpb25zOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBpZiAocmF3UGFyYW0uZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyYXdQYXJhbS5kZWZhdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIGZ1bmMuZGVmYXVsdFBhcmFtcy5wdXNoKCdpbmYnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmdW5jLmRlZmF1bHRQYXJhbXMucHVzaCh0b1N0cmluZyhyYXdQYXJhbS5kZWZhdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0uc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgZnVuYy5kZWZhdWx0UGFyYW1zLnB1c2godG9TdHJpbmcocmF3UGFyYW0uc3VnZ2VzdGlvbnNbMF0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmMuZGVmYXVsdFBhcmFtcy5wdXNoKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWyd0cnVlJywgJ2ZhbHNlJ107XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdmbG9hdCcpIHtcbiAgICAgICAgcGFyYW0udHlwZSA9ICdmbG9hdCc7XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ25vZGUnO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdub2RlT3JUYWcnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnbm9kZV9vcl90YWcnO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWyduYW1lJywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2ludE9ySW50ZXJ2YWwnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnaW50X29yX2ludGVydmFsJztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ3Nlcmllc0xpc3QnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAndmFsdWVfb3Jfc2VyaWVzJztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2ludE9ySW5mJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2ludF9vcl9pbmZpbml0eSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyYXdQYXJhbS5vcHRpb25zKSB7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBtYXAocmF3UGFyYW0ub3B0aW9ucywgdG9TdHJpbmcpO1xuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS5zdWdnZXN0aW9ucykge1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gbWFwKHJhd1BhcmFtLnN1Z2dlc3Rpb25zLCB0b1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmMucGFyYW1zLnB1c2gocGFyYW0pO1xuICAgIH0pO1xuXG4gICAgZnVuY0RlZnNbZnVuY05hbWVdID0gZnVuYztcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmNEZWZzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUZ1bmNJbnN0YW5jZTogY3JlYXRlRnVuY0luc3RhbmNlLFxuICBnZXRGdW5jRGVmOiBnZXRGdW5jRGVmLFxuICBnZXRGdW5jRGVmczogZ2V0RnVuY0RlZnMsXG4gIHBhcnNlRnVuY0RlZnM6IHBhcnNlRnVuY0RlZnMsXG59O1xuIiwiaW1wb3J0IHsgY29tcGFjdCwgZWFjaCwgZmluZEluZGV4LCBmbGF0dGVuLCBnZXQsIGpvaW4sIGtleUJ5LCBsYXN0LCBtYXAsIHJlZHVjZSwgd2l0aG91dCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBhcnJheU1vdmUgfSBmcm9tICdhcHAvY29yZS91dGlscy9hcnJheU1vdmUnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi9nZnVuYyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUYWdPcGVyYXRvciA9ICc9JyB8ICc9ficgfCAnIT0nIHwgJyE9fic7XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVGFnID0ge1xuICBrZXk6IHN0cmluZztcbiAgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhcmdldCA9IHtcbiAgcmVmSWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBmdWxsIHF1ZXJ5IGFmdGVyIGludGVycG9sYXRpbmcgc3ViLXF1ZXJpZXMgKGUuZy4gXCJmdW5jdGlvbigjQSlcIiByZWZlcmVuY2luZyBxdWVyeSB3aXRoIHJlZklkPUEpXG4gICAqL1xuICB0YXJnZXRGdWxsOiBzdHJpbmc7XG4gIHRleHRFZGl0b3I6IGJvb2xlYW47XG4gIHBhdXNlZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaXRlUXVlcnkge1xuICBkYXRhc291cmNlOiBHcmFwaGl0ZURhdGFzb3VyY2U7XG4gIHRhcmdldDogR3JhcGhpdGVUYXJnZXQ7XG4gIGZ1bmN0aW9uczogRnVuY0luc3RhbmNlW10gPSBbXTtcbiAgc2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdID0gW107XG4gIHRhZ3M6IEdyYXBoaXRlVGFnW10gPSBbXTtcbiAgZXJyb3I6IGFueTtcbiAgc2VyaWVzQnlUYWdVc2VkID0gZmFsc2U7XG4gIGNoZWNrT3RoZXJTZWdtZW50c0luZGV4ID0gMDtcbiAgcmVtb3ZlVGFnVmFsdWU6IHN0cmluZztcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgc2NvcGVkVmFyczogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoZGF0YXNvdXJjZTogYW55LCB0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSB0ZW1wbGF0ZVNydjtcbiAgICB0aGlzLnNjb3BlZFZhcnMgPSBzY29wZWRWYXJzO1xuICAgIHRoaXMucGFyc2VUYXJnZXQoKTtcblxuICAgIHRoaXMucmVtb3ZlVGFnVmFsdWUgPSAnLS0gcmVtb3ZlIHRhZyAtLSc7XG4gIH1cblxuICBwYXJzZVRhcmdldCgpIHtcbiAgICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xuICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLnNlcmllc0J5VGFnVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0LnRleHRFZGl0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMudGFyZ2V0LnRhcmdldCk7XG4gICAgY29uc3QgYXN0Tm9kZSA9IHBhcnNlci5nZXRBc3QoKTtcbiAgICBpZiAoYXN0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jaGVja090aGVyU2VnbWVudHNJbmRleCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFzdE5vZGUudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5lcnJvciA9IGFzdE5vZGUubWVzc2FnZSArICcgYXQgcG9zaXRpb246ICcgKyBhc3ROb2RlLnBvcztcbiAgICAgIHRoaXMudGFyZ2V0LnRleHRFZGl0b3IgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnBhcnNlVGFyZ2V0UmVjdXJzaXZlKGFzdE5vZGUsIG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgcGFyc2luZyB0YXJnZXQ6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgICAgdGhpcy50YXJnZXQudGV4dEVkaXRvciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja090aGVyU2VnbWVudHNJbmRleCA9IHRoaXMuc2VnbWVudHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGdldFNlZ21lbnRQYXRoVXBUbyhpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5zZWdtZW50cy5zbGljZSgwLCBpbmRleCk7XG5cbiAgICByZXR1cm4gcmVkdWNlKFxuICAgICAgYXJyLFxuICAgICAgKHJlc3VsdCwgc2VnbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0ICsgJy4nICsgc2VnbWVudC52YWx1ZSA6IHNlZ21lbnQudmFsdWU7XG4gICAgICB9LFxuICAgICAgJydcbiAgICApO1xuICB9XG5cbiAgcGFyc2VUYXJnZXRSZWN1cnNpdmUoYXN0Tm9kZTogYW55LCBmdW5jOiBhbnkpOiBhbnkge1xuICAgIGlmIChhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFzdE5vZGUudHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBpbm5lckZ1bmMgPSB0aGlzLmRhdGFzb3VyY2UuY3JlYXRlRnVuY0luc3RhbmNlKGFzdE5vZGUubmFtZSwge1xuICAgICAgICAgIHdpdGhEZWZhdWx0UGFyYW1zOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2goYXN0Tm9kZS5wYXJhbXMsIChwYXJhbSkgPT4ge1xuICAgICAgICAgIHRoaXMucGFyc2VUYXJnZXRSZWN1cnNpdmUocGFyYW0sIGlubmVyRnVuYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlubmVyRnVuYy51cGRhdGVUZXh0KCk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goaW5uZXJGdW5jKTtcblxuICAgICAgICAvLyBleHRyYWN0IHRhZ3MgZnJvbSBzZXJpZXNCeVRhZyBmdW5jdGlvbiBhbmQgaGlkZSBmdW5jdGlvblxuICAgICAgICBpZiAoaW5uZXJGdW5jLmRlZi5uYW1lID09PSAnc2VyaWVzQnlUYWcnICYmICF0aGlzLnNlcmllc0J5VGFnVXNlZCkge1xuICAgICAgICAgIHRoaXMuc2VyaWVzQnlUYWdVc2VkID0gdHJ1ZTtcbiAgICAgICAgICBpbm5lckZ1bmMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB0aGlzLnNwbGl0U2VyaWVzQnlUYWdQYXJhbXMoaW5uZXJGdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VyaWVzLXJlZic6XG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgfHwgdGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCgpID49IDApIHtcbiAgICAgICAgICB0aGlzLmFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmMsIGFzdE5vZGUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChhc3ROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHRoaXMuYWRkRnVuY3Rpb25QYXJhbWV0ZXIoZnVuYywgYXN0Tm9kZS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoIHx8IHRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmMsIGpvaW4obWFwKGFzdE5vZGUuc2VnbWVudHMsICd2YWx1ZScpLCAnLicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlZ21lbnRzID0gYXN0Tm9kZS5zZWdtZW50cztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTZWdtZW50VmFsdWUoc2VnbWVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWdtZW50c1tpbmRleF0udmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICB9XG5cbiAgYWRkU2VsZWN0TWV0cmljU2VnbWVudCgpIHtcbiAgICB0aGlzLnNlZ21lbnRzLnB1c2goeyB2YWx1ZTogJ3NlbGVjdCBtZXRyaWMnIH0pO1xuICB9XG5cbiAgYWRkRnVuY3Rpb24obmV3RnVuYzogYW55KSB7XG4gICAgdGhpcy5mdW5jdGlvbnMucHVzaChuZXdGdW5jKTtcbiAgfVxuXG4gIGFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmM6IGFueSwgdmFsdWU6IHN0cmluZykge1xuICAgIGlmIChmdW5jLnBhcmFtcy5sZW5ndGggPj0gZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAmJiAhZ2V0KGxhc3QoZnVuYy5kZWYucGFyYW1zKSwgJ211bHRpcGxlJywgZmFsc2UpKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICd0b28gbWFueSBwYXJhbWV0ZXJzIGZvciBmdW5jdGlvbiAnICsgZnVuYy5kZWYubmFtZSB9O1xuICAgIH1cbiAgICBmdW5jLnBhcmFtcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUZ1bmN0aW9uKGZ1bmM6IGFueSkge1xuICAgIHRoaXMuZnVuY3Rpb25zID0gd2l0aG91dCh0aGlzLmZ1bmN0aW9ucywgZnVuYyk7XG4gIH1cblxuICBtb3ZlRnVuY3Rpb24oZnVuYzogYW55LCBvZmZzZXQ6IG51bWJlcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jdGlvbnMuaW5kZXhPZihmdW5jKTtcbiAgICBhcnJheU1vdmUodGhpcy5mdW5jdGlvbnMsIGluZGV4LCBpbmRleCArIG9mZnNldCk7XG4gIH1cblxuICB1cGRhdGVNb2RlbFRhcmdldCh0YXJnZXRzOiBhbnkpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSAodGFyZ2V0OiBzdHJpbmcsIGZ1bmM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmMucmVuZGVyKHRhcmdldCwgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh2YWx1ZSwgdGhpcy5zY29wZWRWYXJzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnRleHRFZGl0b3IpIHtcbiAgICAgIGNvbnN0IG1ldHJpY1BhdGggPSB0aGlzLmdldFNlZ21lbnRQYXRoVXBUbyh0aGlzLnNlZ21lbnRzLmxlbmd0aCkucmVwbGFjZSgvXFwuP3NlbGVjdCBtZXRyaWMkLywgJycpO1xuICAgICAgdGhpcy50YXJnZXQudGFyZ2V0ID0gcmVkdWNlKHRoaXMuZnVuY3Rpb25zLCB3cmFwRnVuY3Rpb24sIG1ldHJpY1BhdGgpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVuZGVyZWRUYXJnZXQodGhpcy50YXJnZXQsIHRhcmdldHMpO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIG90aGVyIHF1ZXJpZXMgYW5kIHVwZGF0ZSB0YXJnZXRGdWxsIGFzIG5lZWRlZFxuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMgfHwgW10pIHtcbiAgICAgIGlmICh0YXJnZXQucmVmSWQgIT09IHRoaXMudGFyZ2V0LnJlZklkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZWRUYXJnZXQodGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhbi11cCBhZGRlZCBwYXJhbVxuICAgIHRoaXMuZnVuY3Rpb25zLmZvckVhY2goKGZ1bmMpID0+IChmdW5jLmFkZGVkID0gZmFsc2UpKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbmRlcmVkVGFyZ2V0KHRhcmdldDogeyByZWZJZDogc3RyaW5nIHwgbnVtYmVyOyB0YXJnZXQ6IGFueTsgdGFyZ2V0RnVsbDogYW55IH0sIHRhcmdldHM6IGFueSkge1xuICAgIC8vIHJlbmRlciBuZXN0ZWQgcXVlcnlcbiAgICBjb25zdCB0YXJnZXRzQnlSZWZJZCA9IGtleUJ5KHRhcmdldHMsICdyZWZJZCcpO1xuXG4gICAgLy8gbm8gcmVmZXJlbmNlcyB0byBzZWxmXG4gICAgZGVsZXRlIHRhcmdldHNCeVJlZklkW3RhcmdldC5yZWZJZF07XG5cbiAgICBjb25zdCBuZXN0ZWRTZXJpZXNSZWZSZWdleCA9IC9cXCMoW0EtWl0pL2c7XG4gICAgbGV0IHRhcmdldFdpdGhOZXN0ZWRRdWVyaWVzID0gdGFyZ2V0LnRhcmdldDtcblxuICAgIC8vIFVzZSByZWYgY291bnQgdG8gdHJhY2sgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGNvdW50VGFyZ2V0UmVmcyh0YXJnZXRzQnlSZWZJZDogYW55LCByZWZJZDogc3RyaW5nKSB7XG4gICAgICBsZXQgcmVmQ291bnQgPSAwO1xuICAgICAgZWFjaCh0YXJnZXRzQnlSZWZJZCwgKHQsIGlkKSA9PiB7XG4gICAgICAgIGlmIChpZCAhPT0gcmVmSWQpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IG5lc3RlZFNlcmllc1JlZlJlZ2V4LmV4ZWModC50YXJnZXQpO1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID8gbWF0Y2gubGVuZ3RoIC0gMSA6IDA7XG4gICAgICAgICAgcmVmQ291bnQgKz0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0c0J5UmVmSWRbcmVmSWRdLnJlZkNvdW50ID0gcmVmQ291bnQ7XG4gICAgfVxuICAgIGVhY2godGFyZ2V0c0J5UmVmSWQsICh0LCBpZCkgPT4ge1xuICAgICAgY291bnRUYXJnZXRSZWZzKHRhcmdldHNCeVJlZklkLCBpZCk7XG4gICAgfSk7XG5cbiAgICAvLyBLZWVwIGludGVycG9sYXRpbmcgdW50aWwgdGhlcmUgYXJlIG5vIHF1ZXJ5IHJlZmVyZW5jZXNcbiAgICAvLyBUaGUgcmVhc29uIGZvciB0aGUgbG9vcCBpcyB0aGF0IHRoZSByZWZlcmVuY2VkIHF1ZXJ5IG1pZ2h0IGNvbnRhaW4gYW5vdGhlciByZWZlcmVuY2UgdG8gYW5vdGhlciBxdWVyeVxuICAgIHdoaWxlICh0YXJnZXRXaXRoTmVzdGVkUXVlcmllcy5tYXRjaChuZXN0ZWRTZXJpZXNSZWZSZWdleCkpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSB0YXJnZXRXaXRoTmVzdGVkUXVlcmllcy5yZXBsYWNlKG5lc3RlZFNlcmllc1JlZlJlZ2V4LCAobWF0Y2g6IHN0cmluZywgZzE6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB0ID0gdGFyZ2V0c0J5UmVmSWRbZzFdO1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIGlmICh0LnJlZkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldHNCeVJlZklkW2cxXTtcbiAgICAgICAgfVxuICAgICAgICB0LnJlZkNvdW50LS07XG5cbiAgICAgICAgcmV0dXJuIHQudGFyZ2V0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh1cGRhdGVkID09PSB0YXJnZXRXaXRoTmVzdGVkUXVlcmllcykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMgPSB1cGRhdGVkO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0YXJnZXQudGFyZ2V0RnVsbDtcbiAgICBpZiAodGFyZ2V0LnRhcmdldCAhPT0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMpIHtcbiAgICAgIHRhcmdldC50YXJnZXRGdWxsID0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXM7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRTZXJpZXNCeVRhZ1BhcmFtcyhmdW5jOiB7IHBhcmFtczogYW55IH0pIHtcbiAgICBjb25zdCB0YWdQYXR0ZXJuID0gLyhbXlxcIT1+XSspKFxcIT89fj8pKC4qKS87XG4gICAgcmV0dXJuIGZsYXR0ZW4oXG4gICAgICBtYXAoZnVuYy5wYXJhbXMsIChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0YWdQYXR0ZXJuLmV4ZWMocGFyYW0pO1xuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IG1hdGNoZXMuc2xpY2UoMSk7XG4gICAgICAgICAgaWYgKHRhZy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogdGFnWzBdLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogdGFnWzFdIGFzIEdyYXBoaXRlVGFnT3BlcmF0b3IsXG4gICAgICAgICAgICAgIHZhbHVlOiB0YWdbMl0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCgpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHRoaXMuZnVuY3Rpb25zLCAoZnVuYykgPT4gZnVuYy5kZWYubmFtZSA9PT0gJ3Nlcmllc0J5VGFnJyk7XG4gIH1cblxuICBnZXRTZXJpZXNCeVRhZ0Z1bmMoKSB7XG4gICAgY29uc3Qgc2VyaWVzQnlUYWdGdW5jSW5kZXggPSB0aGlzLmdldFNlcmllc0J5VGFnRnVuY0luZGV4KCk7XG4gICAgaWYgKHNlcmllc0J5VGFnRnVuY0luZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uc1tzZXJpZXNCeVRhZ0Z1bmNJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgYWRkVGFnKHRhZzogeyBrZXk6IGFueTsgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7IHZhbHVlOiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IG5ld1RhZ1BhcmFtID0gcmVuZGVyVGFnU3RyaW5nKHRhZyk7XG4gICAgdGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmMoKSEucGFyYW1zLnB1c2gobmV3VGFnUGFyYW0pO1xuICAgIHRoaXMudGFncy5wdXNoKHRhZyk7XG4gIH1cblxuICByZW1vdmVUYWcoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkhLnBhcmFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudGFncy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgdXBkYXRlVGFnKHRhZzogeyBrZXk6IHN0cmluZzsgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7IHZhbHVlOiBzdHJpbmcgfSwgdGFnSW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRhZy5rZXkgPT09IHRoaXMucmVtb3ZlVGFnVmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlVGFnKHRhZ0luZGV4KTtcbiAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRnVuY3Rpb24odGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmMoKSk7XG4gICAgICAgIHRoaXMuY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNlcmllc0J5VGFnVXNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkhLnBhcmFtc1t0YWdJbmRleF0gPSByZW5kZXJUYWdTdHJpbmcodGFnKTtcbiAgICB0aGlzLnRhZ3NbdGFnSW5kZXhdID0gdGFnO1xuICB9XG5cbiAgcmVuZGVyVGFnRXhwcmVzc2lvbnMoZXhjbHVkZUluZGV4ID0gLTEpIHtcbiAgICByZXR1cm4gY29tcGFjdChcbiAgICAgIG1hcCh0aGlzLnRhZ3MsICh0YWdFeHByLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBEb24ndCByZW5kZXIgdGFnIHRoYXQgd2Ugd2FudCB0byBsb29rdXBcbiAgICAgICAgaWYgKGluZGV4ICE9PSBleGNsdWRlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdGFnRXhwci5rZXkgKyB0YWdFeHByLm9wZXJhdG9yICsgdGFnRXhwci52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFnU3RyaW5nKHRhZzogeyBrZXk6IGFueTsgb3BlcmF0b3I/OiBhbnk7IHZhbHVlPzogYW55IH0pIHtcbiAgcmV0dXJuIHRhZy5rZXkgKyB0YWcub3BlcmF0b3IgKyB0YWcudmFsdWU7XG59XG4iLCJpbXBvcnQgeyBiaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gVGhpcyBpcyBhdXRvIGdlbmVyYXRlZCBmcm9tIHRoZSB1bmljb2RlIHRhYmxlcy5cbi8vIFRoZSB0YWJsZXMgYXJlIGF0OlxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0x1L2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTGwvbGlzdC5odG1cbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9MdC9saXN0Lmh0bVxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0xtL2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTG8vbGlzdC5odG1cbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9ObC9saXN0Lmh0bVxuXG5jb25zdCB1bmljb2RlTGV0dGVyVGFibGUgPSBbXG4gIDE3MCwgMTcwLCAxODEsIDE4MSwgMTg2LCAxODYsIDE5MiwgMjE0LCAyMTYsIDI0NiwgMjQ4LCA3MDUsIDcxMCwgNzIxLCA3MzYsIDc0MCwgNzQ4LCA3NDgsIDc1MCwgNzUwLCA4ODAsIDg4NCwgODg2LFxuICA4ODcsIDg5MCwgODkzLCA5MDIsIDkwMiwgOTA0LCA5MDYsIDkwOCwgOTA4LCA5MTAsIDkyOSwgOTMxLCAxMDEzLCAxMDE1LCAxMTUzLCAxMTYyLCAxMzE5LCAxMzI5LCAxMzY2LCAxMzY5LCAxMzY5LFxuICAxMzc3LCAxNDE1LCAxNDg4LCAxNTE0LCAxNTIwLCAxNTIyLCAxNTY4LCAxNjEwLCAxNjQ2LCAxNjQ3LCAxNjQ5LCAxNzQ3LCAxNzQ5LCAxNzQ5LCAxNzY1LCAxNzY2LCAxNzc0LCAxNzc1LCAxNzg2LFxuICAxNzg4LCAxNzkxLCAxNzkxLCAxODA4LCAxODA4LCAxODEwLCAxODM5LCAxODY5LCAxOTU3LCAxOTY5LCAxOTY5LCAxOTk0LCAyMDI2LCAyMDM2LCAyMDM3LCAyMDQyLCAyMDQyLCAyMDQ4LCAyMDY5LFxuICAyMDc0LCAyMDc0LCAyMDg0LCAyMDg0LCAyMDg4LCAyMDg4LCAyMTEyLCAyMTM2LCAyMzA4LCAyMzYxLCAyMzY1LCAyMzY1LCAyMzg0LCAyMzg0LCAyMzkyLCAyNDAxLCAyNDE3LCAyNDIzLCAyNDI1LFxuICAyNDMxLCAyNDM3LCAyNDQ0LCAyNDQ3LCAyNDQ4LCAyNDUxLCAyNDcyLCAyNDc0LCAyNDgwLCAyNDgyLCAyNDgyLCAyNDg2LCAyNDg5LCAyNDkzLCAyNDkzLCAyNTEwLCAyNTEwLCAyNTI0LCAyNTI1LFxuICAyNTI3LCAyNTI5LCAyNTQ0LCAyNTQ1LCAyNTY1LCAyNTcwLCAyNTc1LCAyNTc2LCAyNTc5LCAyNjAwLCAyNjAyLCAyNjA4LCAyNjEwLCAyNjExLCAyNjEzLCAyNjE0LCAyNjE2LCAyNjE3LCAyNjQ5LFxuICAyNjUyLCAyNjU0LCAyNjU0LCAyNjc0LCAyNjc2LCAyNjkzLCAyNzAxLCAyNzAzLCAyNzA1LCAyNzA3LCAyNzI4LCAyNzMwLCAyNzM2LCAyNzM4LCAyNzM5LCAyNzQxLCAyNzQ1LCAyNzQ5LCAyNzQ5LFxuICAyNzY4LCAyNzY4LCAyNzg0LCAyNzg1LCAyODIxLCAyODI4LCAyODMxLCAyODMyLCAyODM1LCAyODU2LCAyODU4LCAyODY0LCAyODY2LCAyODY3LCAyODY5LCAyODczLCAyODc3LCAyODc3LCAyOTA4LFxuICAyOTA5LCAyOTExLCAyOTEzLCAyOTI5LCAyOTI5LCAyOTQ3LCAyOTQ3LCAyOTQ5LCAyOTU0LCAyOTU4LCAyOTYwLCAyOTYyLCAyOTY1LCAyOTY5LCAyOTcwLCAyOTcyLCAyOTcyLCAyOTc0LCAyOTc1LFxuICAyOTc5LCAyOTgwLCAyOTg0LCAyOTg2LCAyOTkwLCAzMDAxLCAzMDI0LCAzMDI0LCAzMDc3LCAzMDg0LCAzMDg2LCAzMDg4LCAzMDkwLCAzMTEyLCAzMTE0LCAzMTIzLCAzMTI1LCAzMTI5LCAzMTMzLFxuICAzMTMzLCAzMTYwLCAzMTYxLCAzMTY4LCAzMTY5LCAzMjA1LCAzMjEyLCAzMjE0LCAzMjE2LCAzMjE4LCAzMjQwLCAzMjQyLCAzMjUxLCAzMjUzLCAzMjU3LCAzMjYxLCAzMjYxLCAzMjk0LCAzMjk0LFxuICAzMjk2LCAzMjk3LCAzMzEzLCAzMzE0LCAzMzMzLCAzMzQwLCAzMzQyLCAzMzQ0LCAzMzQ2LCAzMzg2LCAzMzg5LCAzMzg5LCAzNDA2LCAzNDA2LCAzNDI0LCAzNDI1LCAzNDUwLCAzNDU1LCAzNDYxLFxuICAzNDc4LCAzNDgyLCAzNTA1LCAzNTA3LCAzNTE1LCAzNTE3LCAzNTE3LCAzNTIwLCAzNTI2LCAzNTg1LCAzNjMyLCAzNjM0LCAzNjM1LCAzNjQ4LCAzNjU0LCAzNzEzLCAzNzE0LCAzNzE2LCAzNzE2LFxuICAzNzE5LCAzNzIwLCAzNzIyLCAzNzIyLCAzNzI1LCAzNzI1LCAzNzMyLCAzNzM1LCAzNzM3LCAzNzQzLCAzNzQ1LCAzNzQ3LCAzNzQ5LCAzNzQ5LCAzNzUxLCAzNzUxLCAzNzU0LCAzNzU1LCAzNzU3LFxuICAzNzYwLCAzNzYyLCAzNzYzLCAzNzczLCAzNzczLCAzNzc2LCAzNzgwLCAzNzgyLCAzNzgyLCAzODA0LCAzODA1LCAzODQwLCAzODQwLCAzOTA0LCAzOTExLCAzOTEzLCAzOTQ4LCAzOTc2LCAzOTgwLFxuICA0MDk2LCA0MTM4LCA0MTU5LCA0MTU5LCA0MTc2LCA0MTgxLCA0MTg2LCA0MTg5LCA0MTkzLCA0MTkzLCA0MTk3LCA0MTk4LCA0MjA2LCA0MjA4LCA0MjEzLCA0MjI1LCA0MjM4LCA0MjM4LCA0MjU2LFxuICA0MjkzLCA0MzA0LCA0MzQ2LCA0MzQ4LCA0MzQ4LCA0MzUyLCA0NjgwLCA0NjgyLCA0Njg1LCA0Njg4LCA0Njk0LCA0Njk2LCA0Njk2LCA0Njk4LCA0NzAxLCA0NzA0LCA0NzQ0LCA0NzQ2LCA0NzQ5LFxuICA0NzUyLCA0Nzg0LCA0Nzg2LCA0Nzg5LCA0NzkyLCA0Nzk4LCA0ODAwLCA0ODAwLCA0ODAyLCA0ODA1LCA0ODA4LCA0ODIyLCA0ODI0LCA0ODgwLCA0ODgyLCA0ODg1LCA0ODg4LCA0OTU0LCA0OTkyLFxuICA1MDA3LCA1MDI0LCA1MTA4LCA1MTIxLCA1NzQwLCA1NzQzLCA1NzU5LCA1NzYxLCA1Nzg2LCA1NzkyLCA1ODY2LCA1ODcwLCA1ODcyLCA1ODg4LCA1OTAwLCA1OTAyLCA1OTA1LCA1OTIwLCA1OTM3LFxuICA1OTUyLCA1OTY5LCA1OTg0LCA1OTk2LCA1OTk4LCA2MDAwLCA2MDE2LCA2MDY3LCA2MTAzLCA2MTAzLCA2MTA4LCA2MTA4LCA2MTc2LCA2MjYzLCA2MjcyLCA2MzEyLCA2MzE0LCA2MzE0LCA2MzIwLFxuICA2Mzg5LCA2NDAwLCA2NDI4LCA2NDgwLCA2NTA5LCA2NTEyLCA2NTE2LCA2NTI4LCA2NTcxLCA2NTkzLCA2NTk5LCA2NjU2LCA2Njc4LCA2Njg4LCA2NzQwLCA2ODIzLCA2ODIzLCA2OTE3LCA2OTYzLFxuICA2OTgxLCA2OTg3LCA3MDQzLCA3MDcyLCA3MDg2LCA3MDg3LCA3MTA0LCA3MTQxLCA3MTY4LCA3MjAzLCA3MjQ1LCA3MjQ3LCA3MjU4LCA3MjkzLCA3NDAxLCA3NDA0LCA3NDA2LCA3NDA5LCA3NDI0LFxuICA3NjE1LCA3NjgwLCA3OTU3LCA3OTYwLCA3OTY1LCA3OTY4LCA4MDA1LCA4MDA4LCA4MDEzLCA4MDE2LCA4MDIzLCA4MDI1LCA4MDI1LCA4MDI3LCA4MDI3LCA4MDI5LCA4MDI5LCA4MDMxLCA4MDYxLFxuICA4MDY0LCA4MTE2LCA4MTE4LCA4MTI0LCA4MTI2LCA4MTI2LCA4MTMwLCA4MTMyLCA4MTM0LCA4MTQwLCA4MTQ0LCA4MTQ3LCA4MTUwLCA4MTU1LCA4MTYwLCA4MTcyLCA4MTc4LCA4MTgwLCA4MTgyLFxuICA4MTg4LCA4MzA1LCA4MzA1LCA4MzE5LCA4MzE5LCA4MzM2LCA4MzQ4LCA4NDUwLCA4NDUwLCA4NDU1LCA4NDU1LCA4NDU4LCA4NDY3LCA4NDY5LCA4NDY5LCA4NDczLCA4NDc3LCA4NDg0LCA4NDg0LFxuICA4NDg2LCA4NDg2LCA4NDg4LCA4NDg4LCA4NDkwLCA4NDkzLCA4NDk1LCA4NTA1LCA4NTA4LCA4NTExLCA4NTE3LCA4NTIxLCA4NTI2LCA4NTI2LCA4NTQ0LCA4NTg0LCAxMTI2NCwgMTEzMTAsIDExMzEyLFxuICAxMTM1OCwgMTEzNjAsIDExNDkyLCAxMTQ5OSwgMTE1MDIsIDExNTIwLCAxMTU1NywgMTE1NjgsIDExNjIxLCAxMTYzMSwgMTE2MzEsIDExNjQ4LCAxMTY3MCwgMTE2ODAsIDExNjg2LCAxMTY4OCwgMTE2OTQsXG4gIDExNjk2LCAxMTcwMiwgMTE3MDQsIDExNzEwLCAxMTcxMiwgMTE3MTgsIDExNzIwLCAxMTcyNiwgMTE3MjgsIDExNzM0LCAxMTczNiwgMTE3NDIsIDExODIzLCAxMTgyMywgMTIyOTMsIDEyMjk1LCAxMjMyMSxcbiAgMTIzMjksIDEyMzM3LCAxMjM0MSwgMTIzNDQsIDEyMzQ4LCAxMjM1MywgMTI0MzgsIDEyNDQ1LCAxMjQ0NywgMTI0NDksIDEyNTM4LCAxMjU0MCwgMTI1NDMsIDEyNTQ5LCAxMjU4OSwgMTI1OTMsIDEyNjg2LFxuICAxMjcwNCwgMTI3MzAsIDEyNzg0LCAxMjc5OSwgMTMzMTIsIDEzMzEyLCAxOTg5MywgMTk4OTMsIDE5OTY4LCAxOTk2OCwgNDA5MDcsIDQwOTA3LCA0MDk2MCwgNDIxMjQsIDQyMTkyLCA0MjIzNywgNDIyNDAsXG4gIDQyNTA4LCA0MjUxMiwgNDI1MjcsIDQyNTM4LCA0MjUzOSwgNDI1NjAsIDQyNjA2LCA0MjYyMywgNDI2NDcsIDQyNjU2LCA0MjczNSwgNDI3NzUsIDQyNzgzLCA0Mjc4NiwgNDI4ODgsIDQyODkxLCA0Mjg5NCxcbiAgNDI4OTYsIDQyODk3LCA0MjkxMiwgNDI5MjEsIDQzMDAyLCA0MzAwOSwgNDMwMTEsIDQzMDEzLCA0MzAxNSwgNDMwMTgsIDQzMDIwLCA0MzA0MiwgNDMwNzIsIDQzMTIzLCA0MzEzOCwgNDMxODcsIDQzMjUwLFxuICA0MzI1NSwgNDMyNTksIDQzMjU5LCA0MzI3NCwgNDMzMDEsIDQzMzEyLCA0MzMzNCwgNDMzNjAsIDQzMzg4LCA0MzM5NiwgNDM0NDIsIDQzNDcxLCA0MzQ3MSwgNDM1MjAsIDQzNTYwLCA0MzU4NCwgNDM1ODYsXG4gIDQzNTg4LCA0MzU5NSwgNDM2MTYsIDQzNjM4LCA0MzY0MiwgNDM2NDIsIDQzNjQ4LCA0MzY5NSwgNDM2OTcsIDQzNjk3LCA0MzcwMSwgNDM3MDIsIDQzNzA1LCA0MzcwOSwgNDM3MTIsIDQzNzEyLCA0MzcxNCxcbiAgNDM3MTQsIDQzNzM5LCA0Mzc0MSwgNDM3NzcsIDQzNzgyLCA0Mzc4NSwgNDM3OTAsIDQzNzkzLCA0Mzc5OCwgNDM4MDgsIDQzODE0LCA0MzgxNiwgNDM4MjIsIDQzOTY4LCA0NDAwMiwgNDQwMzIsIDQ0MDMyLFxuICA1NTIwMywgNTUyMDMsIDU1MjE2LCA1NTIzOCwgNTUyNDMsIDU1MjkxLCA2Mzc0NCwgNjQwNDUsIDY0MDQ4LCA2NDEwOSwgNjQxMTIsIDY0MjE3LCA2NDI1NiwgNjQyNjIsIDY0Mjc1LCA2NDI3OSwgNjQyODUsXG4gIDY0Mjg1LCA2NDI4NywgNjQyOTYsIDY0Mjk4LCA2NDMxMCwgNjQzMTIsIDY0MzE2LCA2NDMxOCwgNjQzMTgsIDY0MzIwLCA2NDMyMSwgNjQzMjMsIDY0MzI0LCA2NDMyNiwgNjQ0MzMsIDY0NDY3LCA2NDgyOSxcbiAgNjQ4NDgsIDY0OTExLCA2NDkxNCwgNjQ5NjcsIDY1MDA4LCA2NTAxOSwgNjUxMzYsIDY1MTQwLCA2NTE0MiwgNjUyNzYsIDY1MzEzLCA2NTMzOCwgNjUzNDUsIDY1MzcwLCA2NTM4MiwgNjU0NzAsIDY1NDc0LFxuICA2NTQ3OSwgNjU0ODIsIDY1NDg3LCA2NTQ5MCwgNjU0OTUsIDY1NDk4LCA2NTUwMCwgNjU1MzYsIDY1NTQ3LCA2NTU0OSwgNjU1NzQsIDY1NTc2LCA2NTU5NCwgNjU1OTYsIDY1NTk3LCA2NTU5OSwgNjU2MTMsXG4gIDY1NjE2LCA2NTYyOSwgNjU2NjQsIDY1Nzg2LCA2NTg1NiwgNjU5MDgsIDY2MTc2LCA2NjIwNCwgNjYyMDgsIDY2MjU2LCA2NjMwNCwgNjYzMzQsIDY2MzUyLCA2NjM3OCwgNjY0MzIsIDY2NDYxLCA2NjQ2NCxcbiAgNjY0OTksIDY2NTA0LCA2NjUxMSwgNjY1MTMsIDY2NTE3LCA2NjU2MCwgNjY3MTcsIDY3NTg0LCA2NzU4OSwgNjc1OTIsIDY3NTkyLCA2NzU5NCwgNjc2MzcsIDY3NjM5LCA2NzY0MCwgNjc2NDQsIDY3NjQ0LFxuICA2NzY0NywgNjc2NjksIDY3ODQwLCA2Nzg2MSwgNjc4NzIsIDY3ODk3LCA2ODA5NiwgNjgwOTYsIDY4MTEyLCA2ODExNSwgNjgxMTcsIDY4MTE5LCA2ODEyMSwgNjgxNDcsIDY4MTkyLCA2ODIyMCwgNjgzNTIsXG4gIDY4NDA1LCA2ODQxNiwgNjg0MzcsIDY4NDQ4LCA2ODQ2NiwgNjg2MDgsIDY4NjgwLCA2OTYzNSwgNjk2ODcsIDY5NzYzLCA2OTgwNywgNzM3MjgsIDc0NjA2LCA3NDc1MiwgNzQ4NTAsIDc3ODI0LCA3ODg5NCxcbiAgOTIxNjAsIDkyNzI4LCAxMTA1OTIsIDExMDU5MywgMTE5ODA4LCAxMTk4OTIsIDExOTg5NCwgMTE5OTY0LCAxMTk5NjYsIDExOTk2NywgMTE5OTcwLCAxMTk5NzAsIDExOTk3MywgMTE5OTc0LCAxMTk5NzcsXG4gIDExOTk4MCwgMTE5OTgyLCAxMTk5OTMsIDExOTk5NSwgMTE5OTk1LCAxMTk5OTcsIDEyMDAwMywgMTIwMDA1LCAxMjAwNjksIDEyMDA3MSwgMTIwMDc0LCAxMjAwNzcsIDEyMDA4NCwgMTIwMDg2LFxuICAxMjAwOTIsIDEyMDA5NCwgMTIwMTIxLCAxMjAxMjMsIDEyMDEyNiwgMTIwMTI4LCAxMjAxMzIsIDEyMDEzNCwgMTIwMTM0LCAxMjAxMzgsIDEyMDE0NCwgMTIwMTQ2LCAxMjA0ODUsIDEyMDQ4OCxcbiAgMTIwNTEyLCAxMjA1MTQsIDEyMDUzOCwgMTIwNTQwLCAxMjA1NzAsIDEyMDU3MiwgMTIwNTk2LCAxMjA1OTgsIDEyMDYyOCwgMTIwNjMwLCAxMjA2NTQsIDEyMDY1NiwgMTIwNjg2LCAxMjA2ODgsXG4gIDEyMDcxMiwgMTIwNzE0LCAxMjA3NDQsIDEyMDc0NiwgMTIwNzcwLCAxMjA3NzIsIDEyMDc3OSwgMTMxMDcyLCAxMzEwNzIsIDE3Mzc4MiwgMTczNzgyLCAxNzM4MjQsIDE3MzgyNCwgMTc3OTcyLFxuICAxNzc5NzIsIDE3Nzk4NCwgMTc3OTg0LCAxNzgyMDUsIDE3ODIwNSwgMTk0NTYwLCAxOTUxMDEsXG5dO1xuXG5jb25zdCBpZGVudGlmaWVyU3RhcnRUYWJsZTogYW55W10gPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICBpZGVudGlmaWVyU3RhcnRUYWJsZVtpXSA9XG4gICAgKGkgPj0gNDggJiYgaSA8PSA1NykgfHwgLy8gMC05XG4gICAgaSA9PT0gMzYgfHwgLy8gJFxuICAgIGkgPT09IDEyNiB8fCAvLyB+XG4gICAgaSA9PT0gMTI0IHx8IC8vIHxcbiAgICAoaSA+PSA2NSAmJiBpIDw9IDkwKSB8fCAvLyBBLVpcbiAgICBpID09PSA5NSB8fCAvLyBfXG4gICAgaSA9PT0gNDUgfHwgLy8gLVxuICAgIGkgPT09IDQyIHx8IC8vICpcbiAgICBpID09PSA1OCB8fCAvLyA6XG4gICAgaSA9PT0gOTEgfHwgLy8gdGVtcGxhdGVTdGFydCBbXG4gICAgaSA9PT0gOTMgfHwgLy8gdGVtcGxhdGVFbmQgXVxuICAgIGkgPT09IDYzIHx8IC8vID9cbiAgICBpID09PSAzNyB8fCAvLyAlXG4gICAgaSA9PT0gMzUgfHwgLy8gI1xuICAgIGkgPT09IDYxIHx8IC8vID1cbiAgICAoaSA+PSA5NyAmJiBpIDw9IDEyMik7IC8vIGEtelxufVxuXG5jb25zdCBpZGVudGlmaWVyUGFydFRhYmxlID0gaWRlbnRpZmllclN0YXJ0VGFibGU7XG5cbmV4cG9ydCBjbGFzcyBMZXhlciB7XG4gIGlucHV0OiBhbnk7XG4gIGNoYXI6IG51bWJlcjtcbiAgZnJvbTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IGFueSkge1xuICAgIHRoaXMuaW5wdXQgPSBleHByZXNzaW9uO1xuICAgIHRoaXMuY2hhciA9IDE7XG4gICAgdGhpcy5mcm9tID0gMTtcbiAgfVxuXG4gIHBlZWsoaT86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmlucHV0LmNoYXJBdChpIHx8IDApO1xuICB9XG5cbiAgc2tpcChpPzogbnVtYmVyKSB7XG4gICAgaSA9IGkgfHwgMTtcbiAgICB0aGlzLmNoYXIgKz0gaTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5zbGljZShpKTtcbiAgfVxuXG4gIHRva2VuaXplKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLm5leHQoKTtcbiAgICB3aGlsZSAodG9rZW4pIHtcbiAgICAgIGxpc3QucHVzaCh0b2tlbik7XG4gICAgICB0b2tlbiA9IHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5mcm9tID0gdGhpcy5jaGFyO1xuXG4gICAgLy8gTW92ZSB0byB0aGUgbmV4dCBub24tc3BhY2UgY2hhcmFjdGVyLlxuICAgIGlmICgvXFxzLy50ZXN0KHRoaXMucGVlaygpKSkge1xuICAgICAgd2hpbGUgKC9cXHMvLnRlc3QodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgIHRoaXMuZnJvbSArPSAxO1xuICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnJykge1xuICAgICAgICAvLyBFT0xcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gdGhpcy5zY2FuU3RyaW5nTGl0ZXJhbCgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIG1hdGNoID0gdGhpcy5zY2FuUHVuY3R1YXRvcigpIHx8IHRoaXMuc2Nhbk51bWVyaWNMaXRlcmFsKCkgfHwgdGhpcy5zY2FuSWRlbnRpZmllcigpIHx8IHRoaXMuc2NhblRlbXBsYXRlU2VxdWVuY2UoKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5za2lwKG1hdGNoLnZhbHVlLmxlbmd0aCk7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgLy8gTm8gdG9rZW4gY291bGQgYmUgbWF0Y2hlZCwgZ2l2ZSB1cC5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNjYW5UZW1wbGF0ZVNlcXVlbmNlKCkge1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1snICYmIHRoaXMucGVlaygxKSA9PT0gJ1snKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGVtcGxhdGVTdGFydCcsXG4gICAgICAgIHZhbHVlOiAnW1snLFxuICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGVlaygpID09PSAnXScgJiYgdGhpcy5wZWVrKDEpID09PSAnXScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0ZW1wbGF0ZUVuZCcsXG4gICAgICAgIHZhbHVlOiAnW1snLFxuICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0IGEgSmF2YVNjcmlwdCBpZGVudGlmaWVyIG91dCBvZiB0aGUgbmV4dCBzZXF1ZW5jZSBvZlxuICAgKiBjaGFyYWN0ZXJzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gSW4gYWRkaXRpb24sXG4gICAqIHRvIElkZW50aWZpZXIgdGhpcyBtZXRob2QgY2FuIGFsc28gcHJvZHVjZSBCb29sZWFuTGl0ZXJhbFxuICAgKiAodHJ1ZS9mYWxzZSkgYW5kIE51bGxMaXRlcmFsIChudWxsKS5cbiAgICovXG4gIHNjYW5JZGVudGlmaWVyKCkge1xuICAgIGxldCBpZCA9ICcnO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHR5cGUsIGNoYXI7XG5cbiAgICAvLyBEZXRlY3RzIGFueSBjaGFyYWN0ZXIgaW4gdGhlIFVuaWNvZGUgY2F0ZWdvcmllcyBcIlVwcGVyY2FzZVxuICAgIC8vIGxldHRlciAoTHUpXCIsIFwiTG93ZXJjYXNlIGxldHRlciAoTGwpXCIsIFwiVGl0bGVjYXNlIGxldHRlclxuICAgIC8vIChMdClcIiwgXCJNb2RpZmllciBsZXR0ZXIgKExtKVwiLCBcIk90aGVyIGxldHRlciAoTG8pXCIsIG9yXG4gICAgLy8gXCJMZXR0ZXIgbnVtYmVyIChObClcIi5cbiAgICAvL1xuICAgIC8vIEJvdGggYXBwcm9hY2ggYW5kIHVuaWNvZGVMZXR0ZXJUYWJsZSB3ZXJlIGJvcnJvd2VkIGZyb21cbiAgICAvLyBHb29nbGUncyBUcmFjZXVyLlxuXG4gICAgZnVuY3Rpb24gaXNVbmljb2RlTGV0dGVyKGNvZGU6IG51bWJlcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmljb2RlTGV0dGVyVGFibGUubGVuZ3RoOyApIHtcbiAgICAgICAgaWYgKGNvZGUgPCB1bmljb2RlTGV0dGVyVGFibGVbaSsrXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlIDw9IHVuaWNvZGVMZXR0ZXJUYWJsZVtpKytdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSGV4RGlnaXQoc3RyOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiAvXlswLTlhLWZBLUZdJC8udGVzdChzdHIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRVbmljb2RlRXNjYXBlU2VxdWVuY2UgPSBiaW5kKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgIGlmICh0aGlzLnBlZWsoaW5kZXgpICE9PSAndScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoMSA9IHRoaXMucGVlayhpbmRleCArIDEpO1xuICAgICAgY29uc3QgY2gyID0gdGhpcy5wZWVrKGluZGV4ICsgMik7XG4gICAgICBjb25zdCBjaDMgPSB0aGlzLnBlZWsoaW5kZXggKyAzKTtcbiAgICAgIGNvbnN0IGNoNCA9IHRoaXMucGVlayhpbmRleCArIDQpO1xuICAgICAgbGV0IGNvZGU7XG5cbiAgICAgIGlmIChpc0hleERpZ2l0KGNoMSkgJiYgaXNIZXhEaWdpdChjaDIpICYmIGlzSGV4RGlnaXQoY2gzKSAmJiBpc0hleERpZ2l0KGNoNCkpIHtcbiAgICAgICAgY29kZSA9IHBhcnNlSW50KGNoMSArIGNoMiArIGNoMyArIGNoNCwgMTYpO1xuXG4gICAgICAgIGlmIChpc1VuaWNvZGVMZXR0ZXIoY29kZSkpIHtcbiAgICAgICAgICBpbmRleCArPSA1O1xuICAgICAgICAgIHJldHVybiAnXFxcXHUnICsgY2gxICsgY2gyICsgY2gzICsgY2g0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY29uc3QgZ2V0SWRlbnRpZmllclN0YXJ0ID0gYmluZChmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICBjb25zdCBjaHIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgY29uc3QgY29kZSA9IGNoci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICBpZiAoY2hyID09PSAnKicpIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgPT09IDkyKSB7XG4gICAgICAgIHJldHVybiByZWFkVW5pY29kZUVzY2FwZVNlcXVlbmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICAgIGlmIChpZGVudGlmaWVyU3RhcnRUYWJsZVtjb2RlXSkge1xuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNVbmljb2RlTGV0dGVyKGNvZGUpKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBjaHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY29uc3QgZ2V0SWRlbnRpZmllclBhcnQgPSBiaW5kKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgIGNvbnN0IGNociA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBjb25zdCBjb2RlID0gY2hyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgIGlmIChjb2RlID09PSA5Mikge1xuICAgICAgICByZXR1cm4gcmVhZFVuaWNvZGVFc2NhcGVTZXF1ZW5jZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgICBpZiAoaWRlbnRpZmllclBhcnRUYWJsZVtjb2RlXSkge1xuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNVbmljb2RlTGV0dGVyKGNvZGUpKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBjaHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY2hhciA9IGdldElkZW50aWZpZXJTdGFydCgpO1xuICAgIGlmIChjaGFyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZCA9IGNoYXI7XG4gICAgZm9yICg7Oykge1xuICAgICAgY2hhciA9IGdldElkZW50aWZpZXJQYXJ0KCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZCArPSBjaGFyO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgJ3RydWUnOiB7XG4gICAgICAgIHR5cGUgPSAnYm9vbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZmFsc2UnOiB7XG4gICAgICAgIHR5cGUgPSAnYm9vbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHlwZSA9ICdpZGVudGlmaWVyJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0IGEgbnVtZXJpYyBsaXRlcmFsIG91dCBvZiB0aGUgbmV4dCBzZXF1ZW5jZSBvZlxuICAgKiBjaGFyYWN0ZXJzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gVGhpcyBtZXRob2RcbiAgICogc3VwcG9ydHMgYWxsIG51bWVyaWMgbGl0ZXJhbHMgZGVzY3JpYmVkIGluIHNlY3Rpb24gNy44LjNcbiAgICogb2YgdGhlIEVjbWFTY3JpcHQgNSBzcGVjaWZpY2F0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCdzIGltcGxlbWVudGF0aW9uIHdhcyBoZWF2aWx5IGluZmx1ZW5jZWQgYnkgdGhlXG4gICAqIHNjYW5OdW1lcmljTGl0ZXJhbCBmdW5jdGlvbiBpbiB0aGUgRXNwcmltYSBwYXJzZXIncyBzb3VyY2UgY29kZS5cbiAgICovXG4gIHNjYW5OdW1lcmljTGl0ZXJhbCgpOiBhbnkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGg7XG4gICAgbGV0IGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgIGxldCBiYWQ7XG5cbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxEaWdpdChzdHI6IHN0cmluZykge1xuICAgICAgcmV0dXJuIC9eWzAtOV0kLy50ZXN0KHN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPY3RhbERpZ2l0KHN0cjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gL15bMC03XSQvLnRlc3Qoc3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0hleERpZ2l0KHN0cjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mQS1GXSQvLnRlc3Qoc3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjaDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gY2ggPT09ICckJyB8fCBjaCA9PT0gJ18nIHx8IGNoID09PSAnXFxcXCcgfHwgKGNoID49ICdhJyAmJiBjaCA8PSAneicpIHx8IChjaCA+PSAnQScgJiYgY2ggPD0gJ1onKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgbmVnYXRpdmUgbnVtIGxpdGVyYWxzXG4gICAgaWYgKGNoYXIgPT09ICctJykge1xuICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBOdW1iZXJzIG11c3Qgc3RhcnQgZWl0aGVyIHdpdGggYSBkZWNpbWFsIGRpZ2l0IG9yIGEgcG9pbnQuXG4gICAgaWYgKGNoYXIgIT09ICcuJyAmJiAhaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaGFyICE9PSAnLicpIHtcbiAgICAgIHZhbHVlICs9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgIC8vIEJhc2UtMTYgbnVtYmVycy5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd4JyB8fCBjaGFyID09PSAnWCcpIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG5cbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCFpc0hleERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAvLyAweFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgaXNNYWxmb3JtZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGJhc2U6IDE2LFxuICAgICAgICAgICAgaXNNYWxmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2UtOCBudW1iZXJzLlxuICAgICAgICBpZiAoaXNPY3RhbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICAgIGJhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcblxuICAgICAgICAgICAgLy8gTnVtYmVycyBsaWtlICcwMTknIChub3RlIHRoZSA5KSBhcmUgbm90IHZhbGlkIG9jdGFsc1xuICAgICAgICAgICAgLy8gYnV0IHdlIHN0aWxsIHBhcnNlIHRoZW0gYW5kIG1hcmsgYXMgbWFsZm9ybWVkLlxuXG4gICAgICAgICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICAgICAgYmFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNPY3RhbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGFyIGlzIGEgbm9uIHB1bmN0dWF0b3IgdGhlbiBpdHMgbm90IGEgdmFsaWQgbnVtYmVyXG4gICAgICAgICAgICAgIGlmICghdGhpcy5pc1B1bmN0dWF0b3IoY2hhcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgICAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQoY2hhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgYmFzZTogOCxcbiAgICAgICAgICAgIGlzTWFsZm9ybWVkOiBiYWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlY2ltYWwgbnVtYmVycyB0aGF0IHN0YXJ0IHdpdGggJzAnIHN1Y2ggYXMgJzA5JyBhcmUgaWxsZWdhbFxuICAgICAgICAvLyBidXQgd2Ugc3RpbGwgcGFyc2UgdGhlbSBhbmQgcmV0dXJuIGFzIG1hbGZvcm1lZC5cblxuICAgICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICBpZiAoIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNpbWFsIGRpZ2l0cy5cblxuICAgIGlmIChjaGFyID09PSAnLicpIHtcbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICBpbmRleCArPSAxO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgIGlmICghaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9uZW50IHBhcnQuXG5cbiAgICBpZiAoY2hhciA9PT0gJ2UnIHx8IGNoYXIgPT09ICdFJykge1xuICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcblxuICAgICAgaWYgKGNoYXIgPT09ICcrJyB8fCBjaGFyID09PSAnLScpIHtcbiAgICAgICAgdmFsdWUgKz0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgaW5kZXggKz0gMTtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgICBpZiAoIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLmlzUHVuY3R1YXRvcihjaGFyKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBiYXNlOiAxMCxcbiAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgaXNNYWxmb3JtZWQ6ICFpc0Zpbml0ZSgrdmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBpc1B1bmN0dWF0b3IoY2gxOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGNoMSkge1xuICAgICAgY2FzZSAnLic6XG4gICAgICBjYXNlICcoJzpcbiAgICAgIGNhc2UgJyknOlxuICAgICAgY2FzZSAnLCc6XG4gICAgICBjYXNlICd7JzpcbiAgICAgIGNhc2UgJ30nOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzY2FuUHVuY3R1YXRvcigpIHtcbiAgICBjb25zdCBjaDEgPSB0aGlzLnBlZWsoKTtcblxuICAgIGlmICh0aGlzLmlzUHVuY3R1YXRvcihjaDEpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjaDEsXG4gICAgICAgIHZhbHVlOiBjaDEsXG4gICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3QgYSBzdHJpbmcgb3V0IG9mIHRoZSBuZXh0IHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYW5kL29yXG4gICAqIGxpbmVzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gU2luY2Ugc3RyaW5ncyBjYW5cbiAgICogc3BhbiBhY3Jvc3MgbXVsdGlwbGUgbGluZXMgdGhpcyBtZXRob2QgaGFzIHRvIG1vdmUgdGhlIGNoYXJcbiAgICogcG9pbnRlci5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgcmVjb2duaXplcyBwc2V1ZG8tbXVsdGlsaW5lIEphdmFTY3JpcHQgc3RyaW5nczpcbiAgICpcbiAgICogICB2YXIgc3RyID0gXCJoZWxsb1xcXG4gICAqICAgd29ybGRcIjtcbiAgICovXG4gIHNjYW5TdHJpbmdMaXRlcmFsKCkge1xuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5wZWVrKCk7XG5cbiAgICAvLyBTdHJpbmcgbXVzdCBzdGFydCB3aXRoIGEgcXVvdGUuXG4gICAgaWYgKHF1b3RlICE9PSAnXCInICYmIHF1b3RlICE9PSBcIidcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gJyc7XG5cbiAgICB0aGlzLnNraXAoKTtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUpIHtcbiAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJycpIHtcbiAgICAgICAgLy8gRW5kIE9mIExpbmVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNVbmNsb3NlZDogdHJ1ZSxcbiAgICAgICAgICBxdW90ZTogcXVvdGUsXG4gICAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLnBlZWsoKTtcbiAgICAgIGNvbnN0IGp1bXAgPSAxOyAvLyBBIGxlbmd0aCBvZiBhIGp1bXAsIGFmdGVyIHdlJ3JlIGRvbmVcbiAgICAgIC8vIHBhcnNpbmcgdGhpcyBjaGFyYWN0ZXIuXG5cbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICB0aGlzLnNraXAoanVtcCk7XG4gICAgfVxuXG4gICAgdGhpcy5za2lwKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaXNVbmNsb3NlZDogZmFsc2UsXG4gICAgICBxdW90ZTogcXVvdGUsXG4gICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTWV0cmljVGFua1Nlcmllc01ldGEgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvbWV0cmljdGFuay9ibG9iL21hc3Rlci9zY3JpcHRzL2NvbmZpZy9zdG9yYWdlLXNjaGVtYXMuY29uZiNMMTUtTDQ2XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV0ZW50aW9uSW5mbyB7XG4gIGludGVydmFsOiBzdHJpbmc7XG4gIHJldGVudGlvbj86IHN0cmluZztcbiAgY2h1bmtzcGFuPzogc3RyaW5nO1xuICBudW1jaHVua3M/OiBudW1iZXI7XG4gIHJlYWR5PzogYm9vbGVhbiB8IG51bWJlcjsgLy8gd2hldGhlciwgb3IgYXMgb2Ygd2hhdCBkYXRhIHRpbWVzdGFtcCwgdGhlIGFyY2hpdmUgaXMgcmVhZHkgZm9yIHF1ZXJ5aW5nLlxufVxuXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsPzogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0b0Jvb2xlYW5PclRpbWVzdGFtcCh2YWw/OiBzdHJpbmcpOiBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHZhbCkge1xuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb2xsdXBOb3RpY2UobWV0YUxpc3Q6IE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pOiBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfCBudWxsIHtcbiAgZm9yIChjb25zdCBtZXRhIG9mIG1ldGFMaXN0KSB7XG4gICAgY29uc3QgYXJjaGl2ZUluZGV4ID0gbWV0YVsnYXJjaGl2ZS1yZWFkJ107XG5cbiAgICBpZiAoYXJjaGl2ZUluZGV4ID4gMCkge1xuICAgICAgY29uc3Qgc2NoZW1hID0gcGFyc2VTY2hlbWFSZXRlbnRpb25zKG1ldGFbJ3NjaGVtYS1yZXRlbnRpb25zJ10pO1xuICAgICAgY29uc3QgaW50ZXJ2YWxTdHJpbmcgPSBzY2hlbWFbYXJjaGl2ZUluZGV4XS5pbnRlcnZhbDtcbiAgICAgIGNvbnN0IGZ1bmMgPSAobWV0YVsnY29uc29saWRhdG9yLW5vcm1mZXRjaCddID8/ICcnKS5yZXBsYWNlKCdDb25zb2xpZGF0b3InLCAnJyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGBEYXRhIGlzIHJvbGxlZCB1cCwgYWdncmVnYXRlZCBvdmVyICR7aW50ZXJ2YWxTdHJpbmd9IHVzaW5nICR7ZnVuY30gZnVuY3Rpb25gLFxuICAgICAgICBzZXZlcml0eTogJ2luZm8nLFxuICAgICAgICBpbnNwZWN0OiAnbWV0YScsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnVudGltZUNvbnNvbGlkYXRpb25Ob3RpY2UobWV0YUxpc3Q6IE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pOiBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfCBudWxsIHtcbiAgZm9yIChjb25zdCBtZXRhIG9mIG1ldGFMaXN0KSB7XG4gICAgY29uc3QgcnVudGltZU5yID0gbWV0YVsnYWdnbnVtLXJjJ107XG5cbiAgICBpZiAocnVudGltZU5yID4gMCkge1xuICAgICAgY29uc3QgZnVuYyA9IChtZXRhWydjb25zb2xpZGF0b3ItcmMnXSA/PyAnJykucmVwbGFjZSgnQ29uc29saWRhdG9yJywgJycpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBgRGF0YSBpcyBydW50aW1lIGNvbnNvbGlkYXRlZCwgJHtydW50aW1lTnJ9IGRhdGFwb2ludHMgY29tYmluZWQgdXNpbmcgJHtmdW5jfSBmdW5jdGlvbmAsXG4gICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgIGluc3BlY3Q6ICdtZXRhJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNjaGVtYVJldGVudGlvbnMoc3BlYzogc3RyaW5nKTogUmV0ZW50aW9uSW5mb1tdIHtcbiAgaWYgKCFzcGVjKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzcGVjLnNwbGl0KCcsJykubWFwKChzdHIpID0+IHtcbiAgICBjb25zdCB2YWxzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVydmFsOiB2YWxzWzBdLFxuICAgICAgcmV0ZW50aW9uOiB2YWxzWzFdLFxuICAgICAgY2h1bmtzcGFuOiB2YWxzWzJdLFxuICAgICAgbnVtY2h1bmtzOiB0b0ludGVnZXIodmFsc1szXSksXG4gICAgICByZWFkeTogdG9Cb29sZWFuT3JUaW1lc3RhbXAodmFsc1s0XSksXG4gICAgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvR3JhcGhpdGVRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBNZXRyaWNUYW5rTWV0YUluc3BlY3RvciB9IGZyb20gJy4vY29tcG9uZW50cy9NZXRyaWNUYW5rTWV0YUluc3BlY3Rvcic7XG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmNsYXNzIEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEdyYXBoaXRlRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9yKEdyYXBoaXRlUXVlcnlFZGl0b3IpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0TWV0YWRhdGFJbnNwZWN0b3IoTWV0cmljVGFua01ldGFJbnNwZWN0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKEFubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBleHByZXNzaW9uOiBhbnk7XG4gIGxleGVyOiBMZXhlcjtcbiAgdG9rZW5zOiBhbnk7XG4gIGluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogYW55KSB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmxleGVyID0gbmV3IExleGVyKGV4cHJlc3Npb24pO1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbml6ZSgpO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0QXN0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25DYWxsKCkgfHwgdGhpcy5tZXRyaWNFeHByZXNzaW9uKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgICBwb3M6IGUucG9zLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjdXJseUJyYWNlU2VnbWVudCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicsICd7JykgfHwgdGhpcy5tYXRjaCgneycpKSB7XG4gICAgICBsZXQgY3VybHlTZWdtZW50ID0gJyc7XG5cbiAgICAgIHdoaWxlICghdGhpcy5tYXRjaCgnJykgJiYgIXRoaXMubWF0Y2goJ30nKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm1hdGNoKCd9JykpIHtcbiAgICAgICAgdGhpcy5lcnJvck1hcmsoXCJFeHBlY3RlZCBjbG9zaW5nICd9J1wiKTtcbiAgICAgIH1cblxuICAgICAgY3VybHlTZWdtZW50ICs9IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWU7XG5cbiAgICAgIC8vIGlmIGN1cmx5IHNlZ21lbnQgaXMgZGlyZWN0bHkgZm9sbG93ZWQgYnkgaWRlbnRpZmllclxuICAgICAgLy8gaW5jbHVkZSBpdCBpbiB0aGUgc2VnbWVudFxuICAgICAgaWYgKHRoaXMubWF0Y2goJ2lkZW50aWZpZXInKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogY3VybHlTZWdtZW50LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbWV0cmljU2VnbWVudCgpIHtcbiAgICBjb25zdCBjdXJseSA9IHRoaXMuY3VybHlCcmFjZVNlZ21lbnQoKTtcbiAgICBpZiAoY3VybHkpIHtcbiAgICAgIHJldHVybiBjdXJseTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicpIHx8IHRoaXMubWF0Y2goJ251bWJlcicpKSB7XG4gICAgICAvLyBoYWNrIHRvIGhhbmRsZSBmbG9hdCBudW1iZXJzIGluIG1ldHJpYyBzZWdtZW50c1xuICAgICAgY29uc3QgcGFydHMgPSB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZSh0aGlzLmluZGV4LCAwLCB7IHR5cGU6ICcuJyB9KTtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKHRoaXMuaW5kZXggKyAxLCAwLCB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgdmFsdWU6IHBhcnRzWzFdLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogcGFydHNbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpKSB7XG4gICAgICB0aGlzLmVycm9yTWFyaygnRXhwZWN0ZWQgbWV0cmljIGlkZW50aWZpZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBpZGVudGlmaWVyIGFmdGVyIHRlbXBsYXRlU3RhcnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJ3RlbXBsYXRlRW5kJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCB0ZW1wbGF0ZUVuZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBtZXRyaWNFeHByZXNzaW9uKCkge1xuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpICYmICF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykgJiYgIXRoaXMubWF0Y2goJ251bWJlcicpICYmICF0aGlzLm1hdGNoKCd7JykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcbiAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgc2VnbWVudHM6IFtdLFxuICAgIH07XG5cbiAgICBub2RlLnNlZ21lbnRzLnB1c2godGhpcy5tZXRyaWNTZWdtZW50KCkpO1xuXG4gICAgd2hpbGUgKHRoaXMubWF0Y2goJy4nKSkge1xuICAgICAgdGhpcy5jb25zdW1lVG9rZW4oKTtcblxuICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMubWV0cmljU2VnbWVudCgpO1xuICAgICAgaWYgKCFzZWdtZW50KSB7XG4gICAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBtZXRyaWMgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgICBub2RlLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbkNhbGwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJywgJygnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZTogYW55ID0ge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIG5hbWU6IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWUsXG4gICAgfTtcblxuICAgIC8vIGNvbnN1bWUgbGVmdCBwYXJlbnRoZXNpc1xuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG5cbiAgICBub2RlLnBhcmFtcyA9IHRoaXMuZnVuY3Rpb25QYXJhbWV0ZXJzKCk7XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJyknKSkge1xuICAgICAgdGhpcy5lcnJvck1hcmsoJ0V4cGVjdGVkIGNsb3NpbmcgcGFyZW50aGVzaXMnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBib29sRXhwcmVzc2lvbigpIHtcbiAgICBpZiAoIXRoaXMubWF0Y2goJ2Jvb2wnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlID09PSAndHJ1ZScsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uUGFyYW1ldGVycygpOiBhbnkge1xuICAgIGlmICh0aGlzLm1hdGNoKCcpJykgfHwgdGhpcy5tYXRjaCgnJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbSA9XG4gICAgICB0aGlzLmZ1bmN0aW9uQ2FsbCgpIHx8XG4gICAgICB0aGlzLm51bWVyaWNMaXRlcmFsKCkgfHxcbiAgICAgIHRoaXMuc2VyaWVzUmVmRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLmJvb2xFeHByZXNzaW9uKCkgfHxcbiAgICAgIHRoaXMubWV0cmljRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLnN0cmluZ0xpdGVyYWwoKTtcblxuICAgIGlmICghdGhpcy5tYXRjaCgnLCcpKSB7XG4gICAgICByZXR1cm4gW3BhcmFtXTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIHJldHVybiBbcGFyYW1dLmNvbmNhdCh0aGlzLmZ1bmN0aW9uUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHNlcmllc1JlZkV4cHJlc3Npb24oKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0udmFsdWU7XG4gICAgaWYgKCF2YWx1ZS5tYXRjaCgvXFwjW0EtWl0vKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzZXJpZXMtcmVmJyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgbnVtZXJpY0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdudW1iZXInKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHN0cmluZ0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIGlmICh0b2tlbi5pc1VuY2xvc2VkKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdVbmNsb3NlZCBzdHJpbmcgcGFyYW1ldGVyJywgcG9zOiB0b2tlbi5wb3MgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGVycm9yTWFyayh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICBjb25zdCB0eXBlID0gY3VycmVudFRva2VuID8gY3VycmVudFRva2VuLnR5cGUgOiAnZW5kIG9mIHN0cmluZyc7XG4gICAgdGhyb3cge1xuICAgICAgbWVzc2FnZTogdGV4dCArICcgaW5zdGVhZCBmb3VuZCAnICsgdHlwZSxcbiAgICAgIHBvczogY3VycmVudFRva2VuID8gY3VycmVudFRva2VuLnBvcyA6IHRoaXMubGV4ZXIuY2hhcixcbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJucyB0b2tlbiB2YWx1ZSBhbmQgaW5jcmVcbiAgY29uc3VtZVRva2VuKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCAtIDFdO1xuICB9XG5cbiAgbWF0Y2hUb2tlbih0eXBlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXggKyBpbmRleF07XG4gICAgcmV0dXJuICh0b2tlbiA9PT0gdW5kZWZpbmVkICYmIHR5cGUgPT09ICcnKSB8fCAodG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBtYXRjaCh0b2tlbjE6IGFueSwgdG9rZW4yPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hUb2tlbih0b2tlbjEsIDApICYmICghdG9rZW4yIHx8IHRoaXMubWF0Y2hUb2tlbih0b2tlbjIsIDEpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB7IFRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZVF1ZXJ5RWRpdG9yRGVwZW5kZW5jaWVzLCBHcmFwaGl0ZVNlZ21lbnQsIEdyYXBoaXRlVGFnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIExpc3Qgb2YgcG9zc2libGUgYWN0aW9ucyBjaGFuZ2luZyB0aGUgc3RhdGUgb2YgUXVlcnlFZGl0b3JcbiAqL1xuXG5jb25zdCBpbml0ID0gY3JlYXRlQWN0aW9uPEdyYXBoaXRlUXVlcnlFZGl0b3JEZXBlbmRlbmNpZXM+KCdpbml0Jyk7XG5cbi8qKlxuICogU3luY2hyb25pc2UgZWRpdG9yIGRlcGVuZGVuY2llcyB3aXRoIGludGVybmFsIHN0YXRlLlxuICovXG5jb25zdCB0aW1lUmFuZ2VDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPFRpbWVSYW5nZSB8IHVuZGVmaW5lZD4oJ3RpbWUtcmFuZ2UtY2hhbmdlZCcpO1xuY29uc3QgcXVlcmllc0NoYW5nZWQgPSBjcmVhdGVBY3Rpb248R3JhcGhpdGVRdWVyeVtdIHwgdW5kZWZpbmVkPigncXVlcmllcy1jaGFuZ2VkJyk7XG5jb25zdCBxdWVyeUNoYW5nZWQgPSBjcmVhdGVBY3Rpb248R3JhcGhpdGVRdWVyeT4oJ3F1ZXJ5LWNoYW5nZWQnKTtcblxuLy8gTWV0cmljcyAmIFRhZ3NcbmNvbnN0IHNlZ21lbnRWYWx1ZUNoYW5nZWQgPSBjcmVhdGVBY3Rpb248eyBzZWdtZW50OiBHcmFwaGl0ZVNlZ21lbnQgfCBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT4oJ3NlZ21lbnQtdmFsdWUtY2hhbmdlZCcpO1xuXG4vLyBUYWdzXG5jb25zdCBhZGROZXdUYWcgPSBjcmVhdGVBY3Rpb248eyBzZWdtZW50OiBHcmFwaGl0ZVNlZ21lbnQgfT4oJ2FkZC1uZXctdGFnJyk7XG5jb25zdCB0YWdDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPHsgdGFnOiBHcmFwaGl0ZVRhZzsgaW5kZXg6IG51bWJlciB9PigndGFnLWNoYW5nZWQnKTtcbmNvbnN0IHVucGF1c2UgPSBjcmVhdGVBY3Rpb24oJ3VucGF1c2UnKTtcblxuLy8gRnVuY3Rpb25zXG5jb25zdCBhZGRGdW5jdGlvbiA9IGNyZWF0ZUFjdGlvbjx7IG5hbWU6IHN0cmluZyB9PignYWRkLWZ1bmN0aW9uJyk7XG5jb25zdCByZW1vdmVGdW5jdGlvbiA9IGNyZWF0ZUFjdGlvbjx7IGZ1bmM6IEZ1bmNJbnN0YW5jZSB9PigncmVtb3ZlLWZ1bmN0aW9uJyk7XG5jb25zdCBtb3ZlRnVuY3Rpb24gPSBjcmVhdGVBY3Rpb248eyBmdW5jOiBGdW5jSW5zdGFuY2U7IG9mZnNldDogbnVtYmVyIH0+KCdtb3ZlLWZ1bmN0aW9uJyk7XG5jb25zdCB1cGRhdGVGdW5jdGlvblBhcmFtID0gY3JlYXRlQWN0aW9uPHsgZnVuYzogRnVuY0luc3RhbmNlOyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+KCdjaGFuZ2UtZnVuY3Rpb24tcGFyYW0nKTtcblxuLy8gVGV4dCBlZGl0b3JcbmNvbnN0IHVwZGF0ZVF1ZXJ5ID0gY3JlYXRlQWN0aW9uPHsgcXVlcnk6IHN0cmluZyB9PigndXBkYXRlLXF1ZXJ5Jyk7XG5jb25zdCBydW5RdWVyeSA9IGNyZWF0ZUFjdGlvbigncnVuLWN1cnJlbnQtcXVlcnknKTtcbmNvbnN0IHRvZ2dsZUVkaXRvck1vZGUgPSBjcmVhdGVBY3Rpb24oJ3RvZ2dsZS1lZGl0b3InKTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIGluaXQsXG4gIHRpbWVSYW5nZUNoYW5nZWQsXG4gIHF1ZXJpZXNDaGFuZ2VkLFxuICBxdWVyeUNoYW5nZWQsXG4gIHNlZ21lbnRWYWx1ZUNoYW5nZWQsXG4gIHRhZ0NoYW5nZWQsXG4gIGFkZE5ld1RhZyxcbiAgdW5wYXVzZSxcbiAgYWRkRnVuY3Rpb24sXG4gIHJlbW92ZUZ1bmN0aW9uLFxuICBtb3ZlRnVuY3Rpb24sXG4gIHVwZGF0ZUZ1bmN0aW9uUGFyYW0sXG4gIHVwZGF0ZVF1ZXJ5LFxuICBydW5RdWVyeSxcbiAgdG9nZ2xlRWRpdG9yTW9kZSxcbn07XG4iLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcblxuaW1wb3J0IHsgR3JhcGhpdGVEYXRhc291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBHcmFwaGl0ZU9wdGlvbnMsIEdyYXBoaXRlUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4vc3RvcmUnO1xuXG5jb25zdCBEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PERpc3BhdGNoPEFueUFjdGlvbj4+KHt9IGFzIERpc3BhdGNoPEFueUFjdGlvbj4pO1xuY29uc3QgR3JhcGhpdGVTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZT4oe30gYXMgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BhdGNoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdyYXBoaXRlU3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEdyYXBoaXRlU3RhdGVDb250ZXh0KTtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlFZGl0b3JQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8R3JhcGhpdGVEYXRhc291cmNlLCBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnM+O1xuXG5leHBvcnQgY29uc3QgR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHQgPSAoe1xuICBkYXRhc291cmNlLFxuICBvblJ1blF1ZXJ5LFxuICBvbkNoYW5nZSxcbiAgcXVlcnksXG4gIHF1ZXJpZXMsXG4gIHJhbmdlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPEdyYXBoaXRlUXVlcnlFZGl0b3JQcm9wcz4pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU+KCk7XG4gIGNvbnN0IFtuZWVkc1JlZnJlc2gsIHNldE5lZWRzUmVmcmVzaF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoKHN0YXRlKSA9PiB7XG4gICAgICBzZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBzeW5jaHJvbmlzZSBjaGFuZ2VzIHByb3ZpZGVkIGluIHByb3BzIHdpdGggZWRpdG9yJ3Mgc3RhdGVcbiAgY29uc3QgcHJldmlvdXNSYW5nZSA9IHVzZVByZXZpb3VzKHJhbmdlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldmlvdXNSYW5nZT8ucmF3ICE9PSByYW5nZT8ucmF3KSB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnRpbWVSYW5nZUNoYW5nZWQocmFuZ2UpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgcmFuZ2UsIHByZXZpb3VzUmFuZ2VdKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMucXVlcmllc0NoYW5nZWQocXVlcmllcykpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gYWRkaW5nIHN0YXRlIHRvIGRlcGVuZGVuY2llcyBjYXVzZXMgaW5maW5pdGUgbG9vcHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2Rpc3BhdGNoLCBxdWVyaWVzXVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUgJiYgc3RhdGUudGFyZ2V0Py50YXJnZXQgIT09IHF1ZXJ5LnRhcmdldCkge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLnF1ZXJ5Q2hhbmdlZChxdWVyeSkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gYWRkaW5nIHN0YXRlIHRvIGRlcGVuZGVuY2llcyBjYXVzZXMgaW5maW5pdGUgbG9vcHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2Rpc3BhdGNoLCBxdWVyeV1cbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKG5lZWRzUmVmcmVzaCAmJiBzdGF0ZSkge1xuICAgICAgICBzZXROZWVkc1JlZnJlc2goZmFsc2UpO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCB0YXJnZXQ6IHN0YXRlLnRhcmdldC50YXJnZXQgfSk7XG4gICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGFkZGluZyBzdGF0ZSB0byBkZXBlbmRlbmNpZXMgY2F1c2VzIGluZmluaXRlIGxvb3BzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtuZWVkc1JlZnJlc2gsIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5LCBxdWVyeV1cbiAgKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhY3Rpb25zLmluaXQoe1xuICAgICAgICB0YXJnZXQ6IHF1ZXJ5LFxuICAgICAgICBkYXRhc291cmNlOiBkYXRhc291cmNlLFxuICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgIHRlbXBsYXRlU3J2OiBnZXRUZW1wbGF0ZVNydigpLFxuICAgICAgICAvLyBsaXN0IG9mIHF1ZXJpZXMgaXMgcGFzc2VkIG9ubHkgd2hlbiB0aGUgZWRpdG9yIGlzIGluIERhc2hib2FyZHMuIFRoaXMgaXMgdG8gYWxsb3cgaW50ZXJwb2xhdGlvblxuICAgICAgICAvLyBvZiBzdWItcXVlcmllcyB3aGljaCBhcmUgc3RvcmVkIGluIFwidGFyZ2V0RnVsbFwiIHByb3BlcnR5IHVzZWQgYnkgYWxlcnRpbmcgaW4gdGhlIGJhY2tlbmQuXG4gICAgICAgIHF1ZXJpZXM6IHF1ZXJpZXMgfHwgW10sXG4gICAgICAgIHJlZnJlc2g6ICgpID0+IHtcbiAgICAgICAgICAvLyBkbyBub3QgcnVuIG9uQ2hhbmdlL29uUnVuUXVlcnkgc3RyYWlnaHQgYXdheSB0byBlbnN1cmUgdGhlIGludGVybmFsIHN0YXRlIGdldHMgdXBkYXRlZCBmaXJzdFxuICAgICAgICAgIC8vIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyAob25DaGFuZ2UgY291bGQgdXBkYXRlIHByb3BzIGJlZm9yZSB0aGUgcmVkdWNlciBhY3Rpb24gZmluaXNoZXMpXG4gICAgICAgICAgc2V0TmVlZHNSZWZyZXNoKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8R3JhcGhpdGVTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAgPERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PntjaGlsZHJlbn08L0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvR3JhcGhpdGVTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNsb25lIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvcmVkdWNlcnMvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeSwgR3JhcGhpdGVUYWdPcGVyYXRvciB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogSGVscGVycyB1c2VkIGJ5IHJlZHVjZXJzIGFuZCBwcm92aWRlcnMuIFRoZXkgbW9kaWZ5IHN0YXRlIG9iamVjdCBkaXJlY3RseSBzbyBzaG91bGQgb3BlcmF0ZSBvbiBhIGNvcHkgb2YgdGhlIHN0YXRlLlxuICovXG5cbmV4cG9ydCBjb25zdCBHUkFQSElURV9UQUdfT1BFUkFUT1JTOiBHcmFwaGl0ZVRhZ09wZXJhdG9yW10gPSBbJz0nLCAnIT0nLCAnPX4nLCAnIT1+J107XG5cbi8qKlxuICogVGFnIG5hbWVzIGFuZCBtZXRyaWMgbmFtZXMgYXJlIGRpc3BsYXllZCBpbiBhIHNpbmdsZSBkcm9wZG93bi4gVGhpcyBwcmVmaXggaXMgdXNlZCB0b1xuICogZGlzdGluZ3Vpc2ggYm90aCBpbiB0aGUgVUkuXG4gKi9cbmV4cG9ydCBjb25zdCBUQUdfUFJFRklYID0gJ3RhZzogJztcblxuLyoqXG4gKiBDcmVhdGUgbmV3IEFTVCBiYXNlZCBvbiBuZXcgcXVlcnkuXG4gKiBCdWlsZCBzZWdtZW50cyBmcm9tIHBhcnNlZCBtZXRyaWMgbmFtZSBhbmQgZnVuY3Rpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VUYXJnZXQoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xuICBzdGF0ZS5xdWVyeU1vZGVsLnBhcnNlVGFyZ2V0KCk7XG4gIGF3YWl0IGJ1aWxkU2VnbWVudHMoc3RhdGUpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBzZWdtZW50cyBvdXQgb2YgdGhlIGN1cnJlbnQgbWV0cmljIHBhdGggKyBhZGQgXCJzZWxlY3QgbWV0cmljc1wiIGlmIGl0J3MgcG9zc2libGUgdG8gYWRkIG1vcmUgdG8gdGhlIHBhdGhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkU2VnbWVudHMoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgbW9kaWZ5TGFzdFNlZ21lbnQgPSB0cnVlKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFN0YXJ0IHdpdGggYSBzaGFsbG93IGNvcHkgZnJvbSB0aGUgbW9kZWwsIHRoZW4gY2hlY2sgaWYgXCJzZWxlY3QgbWV0cmljXCIgc2VnbWVudCBzaG91bGQgYmUgYWRkZWQgYXQgdGhlIGVuZFxuICBzdGF0ZS5zZWdtZW50cyA9IGNsb25lKHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMpO1xuXG4gIGNvbnN0IGNoZWNrT3RoZXJTZWdtZW50c0luZGV4ID0gc3RhdGUucXVlcnlNb2RlbC5jaGVja090aGVyU2VnbWVudHNJbmRleCB8fCAwO1xuXG4gIGF3YWl0IGNoZWNrT3RoZXJTZWdtZW50cyhzdGF0ZSwgY2hlY2tPdGhlclNlZ21lbnRzSW5kZXgsIG1vZGlmeUxhc3RTZWdtZW50KTtcbn1cblxuLyoqXG4gKiBBZGQgXCJzZWxlY3QgbWV0cmljXCIgc2VnbWVudCBhdCB0aGUgZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRTZWxlY3RNZXRyaWNTZWdtZW50KHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiB2b2lkIHtcbiAgc3RhdGUucXVlcnlNb2RlbC5hZGRTZWxlY3RNZXRyaWNTZWdtZW50KCk7XG4gIHN0YXRlLnNlZ21lbnRzLnB1c2goeyB2YWx1ZTogJ3NlbGVjdCBtZXRyaWMnLCBmYWtlOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyB0aGUgc3RhdGUgYWZ0ZXIgYWRkaW5nIG9yIGNoYW5naW5nIGEgc2VnbWVudDpcbiAqIC0gYWRkcyBcInNlbGVjdCBtZXRyaWNcIiBvbmx5IHdoZW4gbW9yZSBzZWdtZW50cyBjYW4gYmUgYWRkZWQgdG8gdGhlIG1ldHJpYyBuYW1lXG4gKiAtIGNoZWNrIGlmIHN1YnNlcXVlbnQgc2VnbWVudHMgYXJlIHN0aWxsIHZhbGlkIGlmIGluLWJldHdlZW4gc2VnbWVudCBjaGFuZ2VzIGFuZFxuICogICByZW1vdmVzIGludmFsaWQgc2VnbWVudHMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja090aGVyU2VnbWVudHMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIGZyb21JbmRleDogbnVtYmVyLFxuICBtb2RpZnlMYXN0U2VnbWVudCA9IHRydWVcbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cy5sZW5ndGggPT09IDEgJiYgc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50c1swXS50eXBlID09PSAnc2VyaWVzLXJlZicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZnJvbUluZGV4ID09PSAwKSB7XG4gICAgYWRkU2VsZWN0TWV0cmljU2VnbWVudChzdGF0ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGF0aCA9IHN0YXRlLnF1ZXJ5TW9kZWwuZ2V0U2VnbWVudFBhdGhVcFRvKGZyb21JbmRleCArIDEpO1xuICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gYXdhaXQgc3RhdGUuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkocGF0aCk7XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHBhdGggIT09ICcnICYmIG1vZGlmeUxhc3RTZWdtZW50KSB7XG4gICAgICAgIHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMgPSBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzLnNwbGljZSgwLCBmcm9tSW5kZXgpO1xuICAgICAgICBzdGF0ZS5zZWdtZW50cyA9IHN0YXRlLnNlZ21lbnRzLnNwbGljZSgwLCBmcm9tSW5kZXgpO1xuICAgICAgICBhZGRTZWxlY3RNZXRyaWNTZWdtZW50KHN0YXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdLmV4cGFuZGFibGUpIHtcbiAgICAgIGlmIChzdGF0ZS5zZWdtZW50cy5sZW5ndGggPT09IGZyb21JbmRleCkge1xuICAgICAgICBhZGRTZWxlY3RNZXRyaWNTZWdtZW50KHN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGNoZWNrT3RoZXJTZWdtZW50cyhzdGF0ZSwgZnJvbUluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBoYW5kbGVNZXRyaWNzQXV0b0NvbXBsZXRlRXJyb3Ioc3RhdGUsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZVNlZ21lbnRzKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgc3RhdGUuc2VnbWVudHMgPSBzdGF0ZS5zZWdtZW50cy5zcGxpY2UoMCwgaW5kZXgpO1xuICBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzID0gc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cy5zcGxpY2UoMCwgaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlTZWdtZW50cyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogdm9pZCB7XG4gIHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMgPSBbXTtcbiAgc3RhdGUuc2VnbWVudHMgPSBbXTtcbn1cblxuLyoqXG4gKiBXaGVuIHNlcmllc0J5VGFnIGZ1bmN0aW9uIGlzIGFkZGVkIHRoZSBVSSBjaGFuZ2VzIGl0J3Mgc3RhdGUgYW5kIG9ubHkgdGFncyBjYW4gYmUgYWRkZWQgZnJvbSBub3cuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRTZXJpZXNCeVRhZ0Z1bmMoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgdGFnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbmV3RnVuYyA9IHN0YXRlLmRhdGFzb3VyY2UuY3JlYXRlRnVuY0luc3RhbmNlKCdzZXJpZXNCeVRhZycsIHtcbiAgICB3aXRoRGVmYXVsdFBhcmFtczogZmFsc2UsXG4gIH0pO1xuICBjb25zdCB0YWdQYXJhbSA9IGAke3RhZ309YDtcbiAgbmV3RnVuYy5wYXJhbXMgPSBbdGFnUGFyYW1dO1xuICBzdGF0ZS5xdWVyeU1vZGVsLmFkZEZ1bmN0aW9uKG5ld0Z1bmMpO1xuICBuZXdGdW5jLmFkZGVkID0gdHJ1ZTtcblxuICBlbXB0eVNlZ21lbnRzKHN0YXRlKTtcbiAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIGF3YWl0IHBhcnNlVGFyZ2V0KHN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtYXJ0bHlIYW5kbGVOZXdBbGlhc0J5Tm9kZShzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCBmdW5jOiBGdW5jSW5zdGFuY2UpOiB2b2lkIHtcbiAgaWYgKGZ1bmMuZGVmLm5hbWUgIT09ICdhbGlhc0J5Tm9kZScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnNlZ21lbnRzW2ldLnZhbHVlLmluZGV4T2YoJyonKSA+PSAwKSB7XG4gICAgICBmdW5jLnBhcmFtc1swXSA9IGk7XG4gICAgICBmdW5jLmFkZGVkID0gZmFsc2U7XG4gICAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQYXVzZXMgcnVubmluZyB0aGUgcXVlcnkgdG8gYWxsb3cgc2VsZWN0aW5nIHRhZyB2YWx1ZS4gVGhpcyBpcyB0byBwcmV2ZW50IGdldHRpbmcgZXJyb3JzIGlmIHRoZSBxdWVyeSBpcyBydW5cbiAqIGZvciBhIHRhZyB3aXRoIG5vIHNlbGVjdGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF1c2Uoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IHZvaWQge1xuICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFnUHJlZml4KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShUQUdfUFJFRklYLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiB2b2lkIHtcbiAgaWYgKHN0YXRlLnF1ZXJ5TW9kZWwuZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvbGRUYXJnZXQgPSBzdGF0ZS5xdWVyeU1vZGVsLnRhcmdldC50YXJnZXQ7XG4gIC8vIEludGVycG9sYXRlIGZyb20gb3RoZXIgcXVlcmllczpcbiAgLy8gQmVjYXVzZSBvZiBtaXhlZCBkYXRhIHNvdXJjZXMgdGhlIGxpc3QgbWF5IGNvbnRhaW4gcXVlcmllcyBmb3Igbm9uLUdyYXBoaXRlIGRhdGEgc291cmNlcy4gVG8gZW5zdXJlIGEgdmFsaWQgcXVlcnlcbiAgLy8gaXMgdXNlZCBmb3IgaW50ZXJwb2xhdGlvbiB3ZSBzaG91bGQgY2hlY2sgcmVxdWlyZWQgcHJvcGVydGllcyBhcmUgcGFzc2VkIHRob3VnaCBpbiB0aGVvcnkgaXQgYWxsb3dzIHRvIGludGVycG9sYXRlXG4gIC8vIHdpdGggcXVlcmllcyB0aGF0IGNvbnRhaW4gXCJ0YXJnZXRcIiBwcm9wZXJ0eSBhcyB3ZWxsLlxuICBzdGF0ZS5xdWVyeU1vZGVsLnVwZGF0ZU1vZGVsVGFyZ2V0KFxuICAgIChzdGF0ZS5xdWVyaWVzIHx8IFtdKS5maWx0ZXIoKHF1ZXJ5KSA9PiAndGFyZ2V0JyBpbiBxdWVyeSAmJiB0eXBlb2YgKHF1ZXJ5IGFzIEdyYXBoaXRlUXVlcnkpLnRhcmdldCA9PT0gJ3N0cmluZycpXG4gICk7XG5cbiAgaWYgKHN0YXRlLnF1ZXJ5TW9kZWwudGFyZ2V0LnRhcmdldCAhPT0gb2xkVGFyZ2V0ICYmICFzdGF0ZS5wYXVzZWQpIHtcbiAgICBzdGF0ZS5yZWZyZXNoKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBXaGVuIG1ldHJpY3MgYXV0b2NvbXBsZXRlIGZhaWxzIC0gdGhlIGVycm9yIGlzIHNob3duLCBidXQgb25seSBvbmNlIHBlciBwYWdlIHZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1ldHJpY3NBdXRvQ29tcGxldGVFcnJvcihcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgZXJyb3I6IEVycm9yXG4pOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUge1xuICBpZiAoIXN0YXRlLm1ldHJpY0F1dG9Db21wbGV0ZUVycm9yU2hvd24pIHtcbiAgICBzdGF0ZS5tZXRyaWNBdXRvQ29tcGxldGVFcnJvclNob3duID0gdHJ1ZTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oYEZldGNoaW5nIG1ldHJpY3MgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9LmApKSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFdoZW4gdGFncyBhdXRvY29tcGxldGUgZmFpbHMgLSB0aGUgZXJyb3IgaXMgc2hvd24sIGJ1dCBvbmx5IG9uY2UgcGVyIHBhZ2Ugdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIGVycm9yOiBFcnJvcik6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB7XG4gIGlmICghc3RhdGUudGFnc0F1dG9Db21wbGV0ZUVycm9yU2hvd24pIHtcbiAgICBzdGF0ZS50YWdzQXV0b0NvbXBsZXRlRXJyb3JTaG93biA9IHRydWU7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGBGZXRjaGluZyB0YWdzIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfS5gKSkpO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IGVhY2hSaWdodCwgbWFwLCByZW1vdmUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzLCBtYXBTdHJpbmdzVG9TZWxlY3RhYmxlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVscGVycyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQsIEdyYXBoaXRlVGFnLCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQge1xuICBUQUdfUFJFRklYLFxuICBHUkFQSElURV9UQUdfT1BFUkFUT1JTLFxuICBoYW5kbGVNZXRyaWNzQXV0b0NvbXBsZXRlRXJyb3IsXG4gIGhhbmRsZVRhZ3NBdXRvQ29tcGxldGVFcnJvcixcbn0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4vc3RvcmUnO1xuXG4vKipcbiAqIEFsbCBhdXRvLWNvbXBsZXRlIGxpc3RzIGFyZSB1cGRhdGVkIHdoaWxlIHR5cGluZy4gVG8gYXZvaWQgcGVyZm9ybWFuY2UgaXNzdWVzIHdlIGRvIG5vdCByZW5kZXIgbW9yZVxuICogdGhhbiBNQVhfU1VHR0VTVElPTlMgbGltaXRzIGluIGEgc2luZ2xlIGRyb3Bkb3duLlxuICpcbiAqIE1BWF9TVUdHRVNUSU9OUyBpcyBwZXIgbWV0cmljcyBhbmQgdGFncyBzZXBhcmF0ZWx5LiBPbiB0aGUgdmVyeSBmaXJzdCBkcm9wZG93biB3aGVyZSBtZXRyaWNzIGFuZCB0YWdzIGFyZVxuICogY29tYmluZWQgdG9nZXRoZXIgbWVhbmluZyBpdCBtYXkgZW5kIHVwIHdpdGggbWF4IG9mIDIgKiBNQVhfU1VHR0VTVElPTlMgaXRlbXMgaW4gdG90YWwuXG4gKi9cbmNvbnN0IE1BWF9TVUdHRVNUSU9OUyA9IDUwMDA7XG5cbi8qKlxuICogUHJvdmlkZXJzIGFyZSBob29rcyBmb3Igdmlld3MgdG8gcHJvdmlkZSB0ZW1wb3JhbCBkYXRhIGZvciBhdXRvY29tcGxldGUuIFRoZXkgZG9uJ3QgbW9kaWZ5IHRoZSBzdGF0ZS5cbiAqL1xuXG4vKipcbiAqIFJldHVybiBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb25zIGZvciBhIHNlZ21lbnQgd2l0aCBnaXZlbiBpbmRleFxuICpcbiAqIEl0IG1heSBiZTpcbiAqIC0gbWl4ZWQgbGlzdCBvZiBtZXRyaWNzIGFuZCB0YWdzIChvbmx5IHdoZW4gbm90aGluZyB3YXMgc2VsZWN0ZWQpXG4gKiAtIGxpc3Qgb2YgbWV0cmljIG5hbWVzIChpZiBhIG1ldHJpYyBuYW1lIHdhcyBzZWxlY3RlZCBmb3IgdGhpcyBzZWdtZW50KVxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRBbHRTZWdtZW50cyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgaW5kZXg6IG51bWJlcixcbiAgcHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8R3JhcGhpdGVTZWdtZW50W10+IHtcbiAgbGV0IHF1ZXJ5ID0gcHJlZml4Lmxlbmd0aCA+IDAgPyAnKicgKyBwcmVmaXggKyAnKicgOiAnKic7XG4gIGlmIChpbmRleCA+IDApIHtcbiAgICBxdWVyeSA9IHN0YXRlLnF1ZXJ5TW9kZWwuZ2V0U2VnbWVudFBhdGhVcFRvKGluZGV4KSArICcuJyArIHF1ZXJ5O1xuICB9XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmFuZ2U6IHN0YXRlLnJhbmdlLFxuICAgIHJlcXVlc3RJZDogJ2dldC1hbHQtc2VnbWVudHMnLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBhd2FpdCBzdGF0ZS5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeShxdWVyeSwgb3B0aW9ucyk7XG4gICAgY29uc3QgYWx0U2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdID0gbWFwKHNlZ21lbnRzLCAoc2VnbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHNlZ21lbnQudGV4dCxcbiAgICAgICAgZXhwYW5kYWJsZTogc2VnbWVudC5leHBhbmRhYmxlLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCA+IDAgJiYgYWx0U2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYWx0U2VnbWVudHM7XG4gICAgfVxuXG4gICAgLy8gYWRkIHF1ZXJ5IHJlZmVyZW5jZXNcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGVhY2hSaWdodChzdGF0ZS5xdWVyaWVzLCAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQucmVmSWQgPT09IHN0YXRlLnF1ZXJ5TW9kZWwudGFyZ2V0LnJlZklkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWx0U2VnbWVudHMudW5zaGlmdCh7XG4gICAgICAgICAgdHlwZTogJ3Nlcmllcy1yZWYnLFxuICAgICAgICAgIHZhbHVlOiAnIycgKyB0YXJnZXQucmVmSWQsXG4gICAgICAgICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRlbXBsYXRlIHZhcmlhYmxlc1xuICAgIGVhY2hSaWdodChzdGF0ZS50ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKSwgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHtcbiAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgdmFsdWU6ICckJyArIHZhcmlhYmxlLm5hbWUsXG4gICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCB3aWxkY2FyZCBvcHRpb24gYW5kIGxpbWl0IG51bWJlciBvZiBzdWdnZXN0aW9ucyAoQVBJIGRvZXNuJ3Qgc3VwcG9ydCBsaW1pdGluZ1xuICAgIC8vIGhlbmNlIHdlIGFyZSBkb2luZyBpdCBoZXJlKVxuICAgIGFsdFNlZ21lbnRzLnVuc2hpZnQoeyB2YWx1ZTogJyonLCBleHBhbmRhYmxlOiB0cnVlIH0pO1xuICAgIGFsdFNlZ21lbnRzLnNwbGljZShNQVhfU1VHR0VTVElPTlMpO1xuXG4gICAgaWYgKHN0YXRlLnN1cHBvcnRzVGFncyAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgcmVtb3ZlVGFnZ2VkRW50cnkoYWx0U2VnbWVudHMpO1xuICAgICAgcmV0dXJuIGF3YWl0IGFkZEFsdFRhZ1NlZ21lbnRzKHN0YXRlLCBwcmVmaXgsIGFsdFNlZ21lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFsdFNlZ21lbnRzO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGlzdCBvZiBzZWdtZW50cyB3aXRoIHRhZ3MgYW5kIG1ldHJpY3MuIFN1Z2dlc3Rpb25zIGFyZSByZWR1Y2VkIGluIGdldEFsdFNlZ21lbnRzIGFuZCBhZGRBbHRUYWdTZWdtZW50cyBzbyBpbiBjYXNlXG4gKiB3ZSBoaXQgTUFYX1NVR0dFU1RJT05TIGxpbWl0IHRoZXJlIGFyZSBhbHdheXMgc29tZSB0YWdzIGFuZCBtZXRyaWNzIHNob3duLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgaW5kZXg6IG51bWJlcixcbiAgcHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPEdyYXBoaXRlU2VnbWVudD4+PiB7XG4gIHJldHVybiBtYXBTZWdtZW50c1RvU2VsZWN0YWJsZXMoYXdhaXQgZ2V0QWx0U2VnbWVudHMoc3RhdGUsIGluZGV4LCBwcmVmaXgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVRhZ09wZXJhdG9yPj4ge1xuICByZXR1cm4gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXMoR1JBUEhJVEVfVEFHX09QRVJBVE9SUyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0YWdzIGFzIGRyb3Bkb3duIG9wdGlvbnNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0VGFncyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCBpbmRleDogbnVtYmVyLCB0YWdQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWdFeHByZXNzaW9ucyA9IHN0YXRlLnF1ZXJ5TW9kZWwucmVuZGVyVGFnRXhwcmVzc2lvbnMoaW5kZXgpO1xuICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHN0YXRlLmRhdGFzb3VyY2UuZ2V0VGFnc0F1dG9Db21wbGV0ZSh0YWdFeHByZXNzaW9ucywgdGFnUHJlZml4LCB7XG4gICAgICByYW5nZTogc3RhdGUucmFuZ2UsXG4gICAgICBsaW1pdDogTUFYX1NVR0dFU1RJT05TLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWx0VGFncyA9IG1hcCh2YWx1ZXMsICd0ZXh0Jyk7XG4gICAgYWx0VGFncy5zcGxpY2UoMCwgMCwgc3RhdGUucmVtb3ZlVGFnVmFsdWUpO1xuICAgIHJldHVybiBhbHRUYWdzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBoYW5kbGVUYWdzQXV0b0NvbXBsZXRlRXJyb3Ioc3RhdGUsIGVycik7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzU2VsZWN0YWJsZXMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIGluZGV4OiBudW1iZXIsXG4gIHRhZ1ByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICByZXR1cm4gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXMoYXdhaXQgZ2V0VGFncyhzdGF0ZSwgaW5kZXgsIHRhZ1ByZWZpeCkpO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgdGFncyB3aGVuIGEgdGFnIGlzIGFkZGVkLiBnZXRUYWdzIGlzIHVzZWQgZm9yIGVkaXRpbmcuXG4gKiBXaGVuIGFkZGluZyAtIHNlZ21lbnQgaXMgdXNlZC4gV2hlbiBlZGl0aW5nIC0gZHJvcGRvd24gaXMgdXNlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0VGFnc0FzU2VnbWVudHMoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgdGFnUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPEdyYXBoaXRlU2VnbWVudFtdPiB7XG4gIGxldCB0YWdzQXNTZWdtZW50czogR3JhcGhpdGVTZWdtZW50W107XG4gIHRyeSB7XG4gICAgY29uc3QgdGFnRXhwcmVzc2lvbnMgPSBzdGF0ZS5xdWVyeU1vZGVsLnJlbmRlclRhZ0V4cHJlc3Npb25zKCk7XG4gICAgY29uc3QgdmFsdWVzID0gYXdhaXQgc3RhdGUuZGF0YXNvdXJjZS5nZXRUYWdzQXV0b0NvbXBsZXRlKHRhZ0V4cHJlc3Npb25zLCB0YWdQcmVmaXgsIHtcbiAgICAgIHJhbmdlOiBzdGF0ZS5yYW5nZSxcbiAgICAgIGxpbWl0OiBNQVhfU1VHR0VTVElPTlMsXG4gICAgfSk7XG4gICAgdGFnc0FzU2VnbWVudHMgPSBtYXAodmFsdWVzLCAodmFsKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsLnRleHQsXG4gICAgICAgIHR5cGU6ICd0YWcnLFxuICAgICAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRhZ3NBc1NlZ21lbnRzID0gW107XG4gICAgaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIHRhZ3NBc1NlZ21lbnRzO1xufVxuXG4vKipcbiAqIEdldCBsaXN0IG9mIHRhZ3MsIHVzZWQgd2hlbiBhZGRpbmcgYWRkaXRpb25hbCB0YWdzIChmaXJzdCB0YWcgaXMgc2VsZWN0ZWQgZnJvbSBhIGpvaW5lZCBsaXN0IG9mIG1ldHJpY3MgYW5kIHRhZ3MpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdzQXNTZWdtZW50c1NlbGVjdGFibGVzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICB0YWdQcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8R3JhcGhpdGVTZWdtZW50Pj4+IHtcbiAgcmV0dXJuIG1hcFNlZ21lbnRzVG9TZWxlY3RhYmxlcyhhd2FpdCBnZXRUYWdzQXNTZWdtZW50cyhzdGF0ZSwgdGFnUHJlZml4KSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRhZ1ZhbHVlcyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgdGFnOiBHcmFwaGl0ZVRhZyxcbiAgaW5kZXg6IG51bWJlcixcbiAgdmFsdWVQcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YWdFeHByZXNzaW9ucyA9IHN0YXRlLnF1ZXJ5TW9kZWwucmVuZGVyVGFnRXhwcmVzc2lvbnMoaW5kZXgpO1xuICBjb25zdCB0YWdLZXkgPSB0YWcua2V5O1xuICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBzdGF0ZS5kYXRhc291cmNlLmdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZSh0YWdFeHByZXNzaW9ucywgdGFnS2V5LCB2YWx1ZVByZWZpeCwge1xuICAgIGxpbWl0OiBNQVhfU1VHR0VTVElPTlMsXG4gIH0pO1xuICBjb25zdCBhbHRWYWx1ZXMgPSBtYXAodmFsdWVzLCAndGV4dCcpO1xuICAvLyBBZGQgdGVtcGxhdGUgdmFyaWFibGVzIGFzIGFkZGl0aW9uYWwgdmFsdWVzXG4gIGVhY2hSaWdodChzdGF0ZS50ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKSwgKHZhcmlhYmxlKSA9PiB7XG4gICAgYWx0VmFsdWVzLnB1c2goJyR7JyArIHZhcmlhYmxlLm5hbWUgKyAnOnJlZ2V4fScpO1xuICB9KTtcblxuICByZXR1cm4gYWx0VmFsdWVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIHRhZzogR3JhcGhpdGVUYWcsXG4gIGluZGV4OiBudW1iZXIsXG4gIHZhbHVlUHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gIHJldHVybiBtYXBTdHJpbmdzVG9TZWxlY3RhYmxlcyhhd2FpdCBnZXRUYWdWYWx1ZXMoc3RhdGUsIHRhZywgaW5kZXgsIHZhbHVlUHJlZml4KSk7XG59XG5cbi8qKlxuICogQWRkIHNlZ21lbnRzIHdpdGggdGFncyBwcmVmaXhlZCB3aXRoIFwidGFnOiBcIiB0byBpbmNsdWRlIHRoZW0gaW4gdGhlIHNhbWUgbGlzdCBhcyBtZXRyaWNzXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZEFsdFRhZ1NlZ21lbnRzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBwcmVmaXg6IHN0cmluZyxcbiAgYWx0U2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdXG4pOiBQcm9taXNlPEdyYXBoaXRlU2VnbWVudFtdPiB7XG4gIGxldCB0YWdTZWdtZW50cyA9IGF3YWl0IGdldFRhZ3NBc1NlZ21lbnRzKHN0YXRlLCBwcmVmaXgpO1xuXG4gIHRhZ1NlZ21lbnRzID0gbWFwKHRhZ1NlZ21lbnRzLCAoc2VnbWVudCkgPT4ge1xuICAgIHNlZ21lbnQudmFsdWUgPSBUQUdfUFJFRklYICsgc2VnbWVudC52YWx1ZTtcbiAgICByZXR1cm4gc2VnbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGFsdFNlZ21lbnRzLmNvbmNhdCguLi50YWdTZWdtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhZ2dlZEVudHJ5KGFsdFNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSkge1xuICByZW1vdmUoYWx0U2VnbWVudHMsIChzKSA9PiBzLnZhbHVlID09PSAnX3RhZ2dlZCcpO1xufVxuIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBY3Rpb24sIERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBEYXRhUXVlcnksIFRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEZ1bmNEZWZzIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuaW1wb3J0IEdyYXBoaXRlUXVlcnksIHsgR3JhcGhpdGVUYXJnZXQgfSBmcm9tICcuLi9ncmFwaGl0ZV9xdWVyeSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQsIEdyYXBoaXRlVGFnT3BlcmF0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgYWRkU2VyaWVzQnlUYWdGdW5jLFxuICBidWlsZFNlZ21lbnRzLFxuICBjaGVja090aGVyU2VnbWVudHMsXG4gIGVtcHR5U2VnbWVudHMsXG4gIGhhbmRsZVRhcmdldENoYW5nZWQsXG4gIHBhcnNlVGFyZ2V0LFxuICBwYXVzZSxcbiAgcmVtb3ZlVGFnUHJlZml4LFxuICBzbWFydGx5SGFuZGxlTmV3QWxpYXNCeU5vZGUsXG4gIHNwbGljZVNlZ21lbnRzLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgPSB7XG4gIC8vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICBkYXRhc291cmNlOiBHcmFwaGl0ZURhdGFzb3VyY2U7XG4gIHRhcmdldDogR3JhcGhpdGVUYXJnZXQ7XG4gIHJlZnJlc2g6ICgpID0+IHZvaWQ7XG4gIHF1ZXJpZXM/OiBEYXRhUXVlcnlbXTtcbiAgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2O1xuICByYW5nZT86IFRpbWVSYW5nZTtcblxuICAvLyBpbnRlcm5hbFxuICBzdXBwb3J0c1RhZ3M6IGJvb2xlYW47XG4gIHBhdXNlZDogYm9vbGVhbjtcbiAgcmVtb3ZlVGFnVmFsdWU6IHN0cmluZztcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzIHwgbnVsbDtcbiAgc2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdO1xuICBxdWVyeU1vZGVsOiBHcmFwaGl0ZVF1ZXJ5O1xuICBlcnJvcjogRXJyb3IgfCBudWxsO1xuICB0YWdzQXV0b0NvbXBsZXRlRXJyb3JTaG93bjogYm9vbGVhbjtcbiAgbWV0cmljQXV0b0NvbXBsZXRlRXJyb3JTaG93bjogYm9vbGVhbjtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSBhc3luYyAoYWN0aW9uOiBBY3Rpb24sIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiBQcm9taXNlPEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZT4gPT4ge1xuICBzdGF0ZSA9IHsgLi4uc3RhdGUgfTtcblxuICBpZiAoYWN0aW9ucy5pbml0Lm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCBkZXBzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVwcy50YXJnZXQudGFyZ2V0ID0gZGVwcy50YXJnZXQudGFyZ2V0IHx8ICcnO1xuXG4gICAgYXdhaXQgZGVwcy5kYXRhc291cmNlLndhaXRGb3JGdW5jRGVmc0xvYWRlZCgpO1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmRlcHMsXG4gICAgICBxdWVyeU1vZGVsOiBuZXcgR3JhcGhpdGVRdWVyeShkZXBzLmRhdGFzb3VyY2UsIGRlcHMudGFyZ2V0LCBnZXRUZW1wbGF0ZVNydigpKSxcbiAgICAgIHN1cHBvcnRzVGFnczogZGVwcy5kYXRhc291cmNlLnN1cHBvcnRzVGFncyxcbiAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICByZW1vdmVUYWdWYWx1ZTogJy0tIHJlbW92ZSB0YWcgLS0nLFxuICAgICAgZnVuY0RlZnM6IGRlcHMuZGF0YXNvdXJjZS5mdW5jRGVmcyxcbiAgICAgIHF1ZXJpZXM6IGRlcHMucXVlcmllcyxcbiAgICB9O1xuXG4gICAgYXdhaXQgYnVpbGRTZWdtZW50cyhzdGF0ZSwgZmFsc2UpO1xuICB9XG4gIGlmIChhY3Rpb25zLnRpbWVSYW5nZUNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnJhbmdlID0gYWN0aW9uLnBheWxvYWQ7XG4gIH1cbiAgaWYgKGFjdGlvbnMucXVlcmllc0NoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnF1ZXJpZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy5xdWVyeUNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnRhcmdldC50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXQgfHwgJyc7XG4gICAgYXdhaXQgcGFyc2VUYXJnZXQoc3RhdGUpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnNlZ21lbnRWYWx1ZUNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgc2VnbWVudDogc2VnbWVudE9yU3RyaW5nLCBpbmRleDogc2VnbWVudEluZGV4IH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgIGxldCBzZWdtZW50O1xuICAgIC8vIGlzIHNlZ21lbnQgd2FzIGNoYW5nZWQgdG8gYSBzdHJpbmcgLSBjcmVhdGUgYSBuZXcgc2VnbWVudFxuICAgIGlmICh0eXBlb2Ygc2VnbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgc2VnbWVudCA9IHtcbiAgICAgICAgdmFsdWU6IHNlZ21lbnRPclN0cmluZyxcbiAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICAgICAgZmFrZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWdtZW50ID0gc2VnbWVudE9yU3RyaW5nIGFzIEdyYXBoaXRlU2VnbWVudDtcbiAgICB9XG5cbiAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgc3RhdGUuc2VnbWVudHNbc2VnbWVudEluZGV4XSA9IHNlZ21lbnQ7XG4gICAgc3RhdGUucXVlcnlNb2RlbC51cGRhdGVTZWdtZW50VmFsdWUoc2VnbWVudCwgc2VnbWVudEluZGV4KTtcblxuICAgIGlmIChzdGF0ZS5xdWVyeU1vZGVsLmZ1bmN0aW9ucy5sZW5ndGggPiAwICYmIHN0YXRlLnF1ZXJ5TW9kZWwuZnVuY3Rpb25zWzBdLmRlZi5mYWtlKSB7XG4gICAgICBzdGF0ZS5xdWVyeU1vZGVsLmZ1bmN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChzZWdtZW50LnR5cGUgPT09ICd0YWcnKSB7XG4gICAgICBjb25zdCB0YWcgPSByZW1vdmVUYWdQcmVmaXgoc2VnbWVudC52YWx1ZSk7XG4gICAgICBwYXVzZShzdGF0ZSk7XG4gICAgICBhd2FpdCBhZGRTZXJpZXNCeVRhZ0Z1bmMoc3RhdGUsIHRhZyk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgLy8gaWYgbmV3bHkgc2VsZWN0ZWQgc2VnbWVudCBjYW4gYmUgZXhwYW5kZWQgLT4gY2hlY2sgaWYgdGhlIHBhdGggaXMgY29ycmVjdFxuICAgIGlmIChzZWdtZW50LmV4cGFuZGFibGUpIHtcbiAgICAgIGF3YWl0IGNoZWNrT3RoZXJTZWdtZW50cyhzdGF0ZSwgc2VnbWVudEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vdCBleHBhbmRhYmxlIC0+IHJlbW92ZSBhbGwgb3RoZXIgc2VnbWVudHNcbiAgICAgIHNwbGljZVNlZ21lbnRzKHN0YXRlLCBzZWdtZW50SW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy50YWdDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCB7IHRhZywgaW5kZXg6IHRhZ0luZGV4IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLnVwZGF0ZVRhZyh0YWcsIHRhZ0luZGV4KTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgICBpZiAoc3RhdGUucXVlcnlNb2RlbC50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgY2hlY2tPdGhlclNlZ21lbnRzKHN0YXRlLCAwKTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoYWN0aW9ucy5hZGROZXdUYWcubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBhY3Rpb24ucGF5bG9hZC5zZWdtZW50O1xuICAgIGNvbnN0IG5ld1RhZ0tleSA9IHNlZ21lbnQudmFsdWU7XG4gICAgY29uc3QgbmV3VGFnID0geyBrZXk6IG5ld1RhZ0tleSwgb3BlcmF0b3I6ICc9JyBhcyBHcmFwaGl0ZVRhZ09wZXJhdG9yLCB2YWx1ZTogJycgfTtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLmFkZFRhZyhuZXdUYWcpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnVucGF1c2UubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLnJlZnJlc2goKTtcbiAgfVxuICBpZiAoYWN0aW9ucy5hZGRGdW5jdGlvbi5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgbmV3RnVuYyA9IHN0YXRlLmRhdGFzb3VyY2UuY3JlYXRlRnVuY0luc3RhbmNlKGFjdGlvbi5wYXlsb2FkLm5hbWUsIHtcbiAgICAgIHdpdGhEZWZhdWx0UGFyYW1zOiB0cnVlLFxuICAgIH0pO1xuICAgIG5ld0Z1bmMuYWRkZWQgPSB0cnVlO1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwuYWRkRnVuY3Rpb24obmV3RnVuYyk7XG4gICAgc21hcnRseUhhbmRsZU5ld0FsaWFzQnlOb2RlKHN0YXRlLCBuZXdGdW5jKTtcblxuICAgIGlmIChzdGF0ZS5zZWdtZW50cy5sZW5ndGggPT09IDEgJiYgc3RhdGUuc2VnbWVudHNbMF0uZmFrZSkge1xuICAgICAgZW1wdHlTZWdtZW50cyhzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFuZXdGdW5jLnBhcmFtcy5sZW5ndGggJiYgbmV3RnVuYy5hZGRlZCkge1xuICAgICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0Z1bmMuZGVmLm5hbWUgPT09ICdzZXJpZXNCeVRhZycpIHtcbiAgICAgIGF3YWl0IHBhcnNlVGFyZ2V0KHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgaWYgKGFjdGlvbnMucmVtb3ZlRnVuY3Rpb24ubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwucmVtb3ZlRnVuY3Rpb24oYWN0aW9uLnBheWxvYWQuZnVuYyk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMubW92ZUZ1bmN0aW9uLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCB7IGZ1bmMsIG9mZnNldCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgc3RhdGUucXVlcnlNb2RlbC5tb3ZlRnVuY3Rpb24oZnVuYywgb2Zmc2V0KTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy51cGRhdGVGdW5jdGlvblBhcmFtLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCB7IGZ1bmMsIGluZGV4LCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgZnVuYy51cGRhdGVQYXJhbSh2YWx1ZSwgaW5kZXgpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnVwZGF0ZVF1ZXJ5Lm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS50YXJnZXQudGFyZ2V0ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMucnVuUXVlcnkubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnJlZnJlc2goKTtcbiAgfVxuICBpZiAoYWN0aW9ucy50b2dnbGVFZGl0b3JNb2RlLm1hdGNoKGFjdGlvbikpIHtcbiAgICBzdGF0ZS50YXJnZXQudGV4dEVkaXRvciA9ICFzdGF0ZS50YXJnZXQudGV4dEVkaXRvcjtcbiAgICBhd2FpdCBwYXJzZVRhcmdldChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4geyAuLi5zdGF0ZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gKG9uQ2hhbmdlOiAoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSkgPT4gdm9pZCk6IERpc3BhdGNoPEFueUFjdGlvbj4gPT4ge1xuICBsZXQgc3RhdGUgPSB7fSBhcyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBhc3luYyAoYWN0aW9uOiBBbnlBY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IGF3YWl0IHJlZHVjZXIoYWN0aW9uLCBzdGF0ZSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiBkaXNwYXRjaCBhcyBEaXNwYXRjaDxBbnlBY3Rpb24+O1xufTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVNvdXJjZUpzb25EYXRhLCBUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5cbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhpdGVRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaGl0ZU9wdGlvbnMgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBncmFwaGl0ZVZlcnNpb246IHN0cmluZztcbiAgZ3JhcGhpdGVUeXBlOiBHcmFwaGl0ZVR5cGU7XG4gIHJvbGx1cEluZGljYXRvckVuYWJsZWQ/OiBib29sZWFuO1xuICBpbXBvcnRDb25maWd1cmF0aW9uOiBHcmFwaGl0ZVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGVudW0gR3JhcGhpdGVUeXBlIHtcbiAgRGVmYXVsdCA9ICdkZWZhdWx0JyxcbiAgTWV0cmljdGFuayA9ICdtZXRyaWN0YW5rJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaWNUYW5rUmVxdWVzdE1ldGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljVGFua1Nlcmllc01ldGEge1xuICAnc2NoZW1hLW5hbWUnOiBzdHJpbmc7XG4gICdzY2hlbWEtcmV0ZW50aW9ucyc6IHN0cmluZzsgLy9cIjFzOjM1ZDoyMG1pbjo1OjE1NDIyNzQwODUsMW1pbjozOGQ6Mmg6MTp0cnVlLDEwbWluOjEyMGQ6Nmg6MTp0cnVlLDJoOjJ5OjZoOjJcIixcbiAgJ2FyY2hpdmUtcmVhZCc6IG51bWJlcjtcbiAgJ2FyY2hpdmUtaW50ZXJ2YWwnOiBudW1iZXI7XG4gICdhZ2dudW0tbm9ybSc6IG51bWJlcjtcbiAgJ2NvbnNvbGlkYXRvci1ub3JtZmV0Y2gnOiBzdHJpbmc7IC8vXCJNYXhpbXVtQ29uc29saWRhdG9yXCIsXG4gICdhZ2dudW0tcmMnOiBudW1iZXI7XG4gICdjb25zb2xpZGF0b3ItcmMnOiBzdHJpbmc7IC8vXCJNYXhpbXVtQ29uc29saWRhdG9yXCIsXG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljVGFua01ldGEge1xuICByZXF1ZXN0OiBNZXRyaWNUYW5rUmVxdWVzdE1ldGE7XG4gIGluZm86IE1ldHJpY1RhbmtTZXJpZXNNZXRhW107XG59XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uID0ge1xuICBsb2tpOiBHcmFwaGl0ZVRvTG9raVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbjtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVG9Mb2tpUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uID0ge1xuICBtYXBwaW5nczogR3JhcGhpdGVMb2tpTWFwcGluZ1tdO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVMb2tpTWFwcGluZyA9IHtcbiAgbWF0Y2hlcnM6IEdyYXBoaXRlTWV0cmljTG9raU1hdGNoZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlTWV0cmljTG9raU1hdGNoZXIgPSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlU2VnbWVudCA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdHlwZT86ICd0YWcnIHwgJ21ldHJpYycgfCAnc2VyaWVzLXJlZicgfCAndGVtcGxhdGUnO1xuICBleHBhbmRhYmxlPzogYm9vbGVhbjtcbiAgZmFrZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhZ09wZXJhdG9yID0gJz0nIHwgJyE9JyB8ICc9ficgfCAnIT1+JztcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUYWcgPSB7XG4gIGtleTogc3RyaW5nO1xuICBvcGVyYXRvcjogR3JhcGhpdGVUYWdPcGVyYXRvcjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlFZGl0b3JEZXBlbmRlbmNpZXMgPSB7XG4gIHRhcmdldDogYW55O1xuICBkYXRhc291cmNlOiBHcmFwaGl0ZURhdGFzb3VyY2U7XG4gIHJhbmdlPzogVGltZVJhbmdlO1xuICB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnY7XG4gIHF1ZXJpZXM6IERhdGFRdWVyeVtdO1xuICAvLyBzY2hlZHVsZSBvbkNoYW5nZS9vblJ1blF1ZXJ5IGFmdGVyIHRoZSByZWR1Y2VyIGFjdGlvbnMgZmluaXNoZXNcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbn07XG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBHcmFwaGl0ZS13ZWIgYmVmb3JlIHYxLjYgcmV0dXJucyBIVFRQIDUwMCB3aXRoIGZ1bGwgc3RhY2sgdHJhY2VzIGluIGFuIEhUTUwgcGFnZVxuICogd2hlbiBhIHF1ZXJ5IGZhaWxzLiBJdCByZXN1bHRzIGluIG1hc3NpdmUgZXJyb3IgYWxlcnRzIHdpdGggSFRNTCB0YWdzIGluIHRoZSBVSS5cbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbGwgSFRNTCB0YWdzIGFuZCBrZWVwcyBvbmx5IHRoZSBsYXN0IGxpbmUgZnJvbSB0aGUgc3RhY2tcbiAqIHRyYWNlIHdoaWNoIHNob3VsZCBiZSB0aGUgbW9zdCBtZWFuaW5nZnVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRXJyb3IoZXJyb3I6IGFueSk6IGFueSB7XG4gIGlmIChlcnJvciAmJiBlcnJvci5zdGF0dXMgPT09IDUwMCAmJiBlcnJvci5kYXRhPy5tZXNzYWdlPy5zdGFydHNXaXRoKCc8Ym9keScpKSB7XG4gICAgLy8gUmVtb3ZlIGFsbCBIVE1MIHRhZ3MgYW5kIHRha2UgdGhlIGxhc3QgbGluZSBmcm9tIHRoZSBzdGFjayB0cmFjZVxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBsYXN0PHN0cmluZz4oXG4gICAgICBlcnJvci5kYXRhLm1lc3NhZ2VcbiAgICAgICAgLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJylcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xcbi8pXG4gICAgKSEucmVwbGFjZSgvdT8mI1teO10rOy9nLCAnJyk7XG4gICAgZXJyb3IuZGF0YS5tZXNzYWdlID0gYEdyYXBoaXRlIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgaGFuZGxpbmcgeW91ciByZXF1ZXN0LiAke25ld01lc3NhZ2V9YDtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IEdSQVBISVRFX1ZFUlNJT05TID0gWycwLjknLCAnMS4wJywgJzEuMSddO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OID0gbGFzdChHUkFQSElURV9WRVJTSU9OUykhO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQcmV2aW91cyhzdGF0ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWYuY3VycmVudCA9IHN0YXRlO1xuICAgIH0pO1xuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cbiJdLCJuYW1lcyI6WyJpc051bWJlciIsInZlcnNpb25QYXR0ZXJuIiwiU2VtVmVyc2lvbiIsImNvbnN0cnVjdG9yIiwidmVyc2lvbiIsIm1ham9yIiwibWlub3IiLCJwYXRjaCIsIm1ldGEiLCJtYXRjaCIsImV4ZWMiLCJOdW1iZXIiLCJpc0d0T3JFcSIsImNvbXBhcmVkIiwiaSIsImNvbXBhcmFibGUiLCJsZW5ndGgiLCJpc1ZhbGlkIiwiaXNWZXJzaW9uR3RPckVxIiwiYSIsImIiLCJhU2VtdmVyIiwiY3NzIiwiY3giLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlNlZ21lbnQiLCJ1c2VTdHlsZXMyIiwiYWN0aW9ucyIsInVzZURpc3BhdGNoIiwibWFwRnVuY0RlZnNUb1NlbGVjdGFibGVzIiwiQWRkR3JhcGhpdGVGdW5jdGlvbiIsImZ1bmNEZWZzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsInNldFZhbHVlIiwidW5kZWZpbmVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwib3B0aW9ucyIsImFkZEZ1bmN0aW9uIiwibmFtZSIsImJ1dHRvbiIsInRoZW1lIiwic3BhY2luZyIsIkljb24iLCJUb29sdGlwIiwiRnVuY3Rpb25FZGl0b3JDb250cm9scyIsImljb24iLCJsYWJlbCIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRTaXplIiwiYm9keVNtYWxsIiwiY3Vyc29yIiwiZGlzcGxheSIsIkZ1bmN0aW9uRWRpdG9yIiwib25Nb3ZlTGVmdCIsIm9uTW92ZVJpZ2h0IiwiZnVuYyIsInByb3BzIiwicmVuZGVyQ29udGVudCIsInVwZGF0ZVBvcHBlclBvc2l0aW9uIiwiZGVmIiwidW5rbm93biIsIlRvb2x0aXBDb250ZW50IiwibWVtbyIsImRpc3BsYXlOYW1lIiwiU3VzcGVuc2UiLCJGdW5jdGlvbkRlc2NyaXB0aW9uIiwibGF6eSIsImRlZmF1bHQiLCJyc3QyaHRtbCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiRnVuY3Rpb25IZWxwQnV0dG9uIiwidG9vbHRpcCIsIndpbmRvdyIsIm9wZW4iLCJvblJlbW92ZSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJTZWdtZW50SW5wdXQiLCJGdW5jdGlvblBhcmFtRWRpdG9yIiwiZWRpdGFibGVQYXJhbSIsIm9uQ2hhbmdlIiwib25FeHBhbmRlZENoYW5nZSIsImF1dG9mb2N1cyIsInNlZ21lbnQiLCJpbnB1dCIsInRvU3RyaW5nIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwibWluV2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiU2VnbWVudFNlY3Rpb24iLCJHcmFwaGl0ZUZ1bmN0aW9uRWRpdG9yIiwiRnVuY3Rpb25zU2VjdGlvbiIsImZ1bmN0aW9ucyIsIm1hcCIsImluZGV4IiwiaGlkZGVuIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5saW5lTGFiZWwiLCJtYXBGdW5jSW5zdGFuY2VUb1BhcmFtcyIsIm1vdXNlT3ZlciIsInNldElzTW91c2VPdmVyIiwiZXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwicGFyYW1zIiwiZmlsdGVyIiwicCIsIm9wdGlvbmFsIiwiYWRkZWQiLCJjb250YWluZXIiLCJlcnJvciIsIm1vdmVGdW5jdGlvbiIsIm9mZnNldCIsInJlbW92ZUZ1bmN0aW9uIiwidXBkYXRlRnVuY3Rpb25QYXJhbSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsIm1hcmdpblJpZ2h0IiwidjEiLCJmb3JtSW5wdXRIZWlnaHQiLCJtYWluIiwiR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHQiLCJ1c2VHcmFwaGl0ZVN0YXRlIiwiR3JhcGhpdGVUZXh0RWRpdG9yIiwiU2VyaWVzU2VjdGlvbiIsIkdyYXBoaXRlUXVlcnlFZGl0b3IiLCJkYXRhc291cmNlIiwib25SdW5RdWVyeSIsInF1ZXJ5IiwicmFuZ2UiLCJxdWVyaWVzIiwiR3JhcGhpdGVRdWVyeUVkaXRvckNvbnRlbnQiLCJzdGF0ZSIsInZpc3VhbEVkaXRvciIsInRhcmdldCIsInRleHRFZGl0b3IiLCJxdWVyeU1vZGVsIiwidG9nZ2xlQnV0dG9uIiwidG9nZ2xlRWRpdG9yTW9kZSIsInVzZUNhbGxiYWNrIiwiUXVlcnlGaWVsZCIsInJhd1F1ZXJ5IiwidXBkYXRlUXVlcnkiLCJydW5RdWVyeSIsImRlYm91bmNlIiwiU2VnbWVudEFzeW5jIiwiZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyIsIk1ldHJpY1NlZ21lbnQiLCJtZXRyaWNJbmRleCIsImxvYWRPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJsZWFkaW5nIiwib25TZWdtZW50Q2hhbmdlZCIsInNlbGVjdGFibGVWYWx1ZSIsInNlZ21lbnRWYWx1ZUNoYW5nZWQiLCJvblNlZ21lbnRDaGFuZ2VkRGVib3VuY2VkIiwiUHVyZUNvbXBvbmVudCIsInJhbmdlVXRpbCIsInN0eWxlc0ZhY3RvcnkiLCJjb25maWciLCJwYXJzZVNjaGVtYVJldGVudGlvbnMiLCJnZXRSb2xsdXBOb3RpY2UiLCJnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZSIsIk1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIiwicmVuZGVyTWV0YSIsImtleSIsImJ1Y2tldHMiLCJyb2xsdXBOb3RpY2UiLCJydW50aW1lTm90aWNlIiwibm9ybUZ1bmMiLCJyZXBsYWNlIiwidG90YWxTZWNvbmRzIiwicmVkdWNlIiwiYWNjIiwiYnVja2V0IiwicmV0ZW50aW9uIiwiaW50ZXJ2YWxUb1NlY29uZHMiLCJtZXRhSXRlbSIsIm1ldGFJdGVtSGVhZGVyIiwiY291bnQiLCJtZXRhSXRlbUJvZHkiLCJzdGVwIiwic3RlcEhlYWRpbmciLCJzdGVwRGVzY3JpcHRpb24iLCJ0ZXh0IiwiYnVja2V0TGVuZ3RoIiwibGVuZ3RoUGVyY2VudCIsImlzQWN0aXZlIiwiYnVja2V0SW50ZXJ2YWwiLCJpbnRlcnZhbCIsImJ1Y2tldFJldGVudGlvbiIsImJ1Y2tldFJldGVudGlvbkFjdGl2ZSIsImZsZXhHcm93IiwicmVuZGVyIiwiZGF0YSIsInNlcmllc01ldGFzIiwic2VyaWVzIiwiY3VzdG9tIiwic2VyaWVzTWV0YUxpc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0Iiwia2V5cyIsImJvcmRlckNvbG9yIiwiaXNEYXJrIiwicGFsZXR0ZSIsImdyYXkyNSIsImdyYXk4NSIsImRhcmsxIiwid2hpdGUiLCJoZWFkZXJCZyIsImdyYXkxNSIsIm1kIiwieHMiLCJzaXplIiwic20iLCJ0ZXh0V2VhayIsImxnIiwiYm9yZGVyIiwicmFkaXVzIiwiYmx1ZTg1IiwiYmx1ZTk1IiwiZ3JlZW5CYXNlIiwiZ3JlZW5TaGFkZSIsIk1ldHJpY3NTZWN0aW9uIiwic2VnbWVudHMiLCJQbGF5QnV0dG9uIiwib25DbGljayIsInVucGF1c2UiLCJUYWdzU2VjdGlvbiIsInNlY3Rpb25Db250ZW50Iiwic2VyaWVzQnlUYWdVc2VkIiwidGFncyIsImdldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzIiwiZ2V0VGFnc1NlbGVjdGFibGVzIiwiZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMiLCJUYWdFZGl0b3IiLCJ0YWciLCJ0YWdJbmRleCIsImdldFRhZ3NPcHRpb25zIiwiaW5wdXRWYWx1ZSIsImRlYm91bmNlZEdldFRhZ3NPcHRpb25zIiwiZ2V0VGFnVmFsdWVPcHRpb25zIiwiZGVib3VuY2VkR2V0VGFnVmFsdWVPcHRpb25zIiwidGFnQ2hhbmdlZCIsIm9wZXJhdG9yIiwiZ2V0VGFnc0FzU2VnbWVudHNTZWxlY3RhYmxlcyIsImdldFRhZ3NBc1NlZ21lbnRzT3B0aW9ucyIsImRlYm91bmNlZEdldFRhZ3NBc1NlZ21lbnRzIiwiYWRkTmV3VGFnIiwicGF1c2VkIiwiZm9yRWFjaCIsInNvcnRCeSIsIm1hcFN0cmluZ3NUb1NlbGVjdGFibGVzIiwidmFsdWVzIiwibWFwU2VnbWVudHNUb1NlbGVjdGFibGVzIiwiY2F0ZWdvcmllcyIsImZ1bmNEZWYiLCJjYXRlZ29yeSIsInB1c2giLCJjcmVhdGVFZGl0YWJsZVBhcmFtIiwicGFyYW1EZWYiLCJhZGRpdGlvbmFsIiwibXVsdGlwbGUiLCJvcHRpb24iLCJ1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24iLCJvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCIsIm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uQ2hlY2tlZCIsIkFsZXJ0IiwiRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyIsIklubGluZUZvcm1MYWJlbCIsIkxlZ2FjeUZvcm1zIiwic3RvcmUiLCJHcmFwaGl0ZVR5cGUiLCJERUZBVUxUX0dSQVBISVRFX1ZFUlNJT04iLCJHUkFQSElURV9WRVJTSU9OUyIsIk1hcHBpbmdzQ29uZmlndXJhdGlvbiIsImZyb21TdHJpbmciLCJTZWxlY3QiLCJTd2l0Y2giLCJTSE9XX01BUFBJTkdTX0hFTFBfS0VZIiwiZ3JhcGhpdGVWZXJzaW9ucyIsImdyYXBoaXRlVHlwZXMiLCJlbnRyaWVzIiwiQ29uZmlnRWRpdG9yIiwic2hvd01hcHBpbmdzSGVscCIsImdldE9iamVjdCIsImNvbXBvbmVudERpZE1vdW50IiwiY3VycmVudEdyYXBoaXRlVmVyc2lvbiIsIm9uT3B0aW9uc0NoYW5nZSIsImN1cnJlbnRWZXJzaW9uIiwiZmluZCIsIml0ZW0iLCJhY2Nlc3MiLCJyZW5kZXJUeXBlSGVscCIsInR5cGUiLCJqc29uRGF0YSIsImdyYXBoaXRlVHlwZSIsIk1ldHJpY3RhbmsiLCJyb2xsdXBJbmRpY2F0b3JFbmFibGVkIiwiaW1wb3J0Q29uZmlndXJhdGlvbiIsImxva2kiLCJtYXBwaW5ncyIsInNldFN0YXRlIiwic2V0T2JqZWN0IiwiZ3JhcGhpdGVWZXJzaW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklucHV0IiwiTWFwcGluZ3NIZWxwIiwic2V0TWFwcGluZ3MiLCJzaG93SGVscCIsIm9uUmVzdG9yZUhlbHAiLCJvbkRpc21pc3MiLCJtYXBwaW5nIiwiY2hhbmdlRXZlbnQiLCJuZXdNYXBwaW5ncyIsImNvbmNhdCIsIl8iLCJzcGxpY2UiLCJtYXRjaGVycyIsInNwbGl0IiwibWV0cmljTm9kZSIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImxhYmVsTmFtZSIsInNsaWNlIiwibWF0Y2hlciIsImpvaW4iLCJlYWNoIiwiaW5kZXhPZiIsImlzQXJyYXkiLCJpc1N0cmluZyIsIl9tYXAiLCJsYXN0VmFsdWVGcm9tIiwib2YiLCJwaXBlIiwidGhyb3dFcnJvciIsImNhdGNoRXJyb3IiLCJEYXRhU291cmNlQXBpIiwiZGF0ZU1hdGgiLCJBYnN0cmFjdExhYmVsT3BlcmF0b3IiLCJ0b0RhdGFGcmFtZSIsImdldEJhY2tlbmRTcnYiLCJnZXRUZW1wbGF0ZVNydiIsImdldFNlYXJjaEZpbHRlclNjb3BlZFZhciIsImdmdW5jIiwiR3JhcGhpdGVRdWVyeU1vZGVsIiwicmVkdWNlRXJyb3IiLCJHUkFQSElURV9UQUdfQ09NUEFSQVRPUlMiLCJFcXVhbCIsIk5vdEVxdWFsIiwiRXF1YWxSZWdFeCIsIk5vdEVxdWFsUmVnRXgiLCJjb252ZXJ0R2xvYlRvUmVnRXgiLCJpbmNsdWRlcyIsIkdyYXBoaXRlRGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJ0ZW1wbGF0ZVNydiIsInJlc3VsdCIsIm1lc3NhZ2UiLCJzIiwidGl0bGUiLCJ5IiwiZGF0YXBvaW50cyIsImZyYW1lIiwicmVxdWVzdE1ldGFMaXN0Iiwibm90aWNlcyIsInN0YXRzIiwiZ2V0UmVxdWVzdFN0YXRzIiwiYmFzaWNBdXRoIiwidXJsIiwibWV0cmljTWFwcGluZ3MiLCJpc01ldHJpY1RhbmsiLCJzdXBwb3J0c1RhZ3MiLCJjYWNoZVRpbWVvdXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJmdW5jRGVmc1Byb21pc2UiLCJfc2VyaWVzUmVmTGV0dGVycyIsImdldFF1ZXJ5T3B0aW9uc0luZm8iLCJtYXhEYXRhUG9pbnRzIiwibGlua3MiLCJnZXRJbXBvcnRRdWVyeUNvbmZpZ3VyYXRpb24iLCJleHBvcnRUb0Fic3RyYWN0UXVlcmllcyIsImV4cG9ydFRvQWJzdHJhY3RRdWVyeSIsImdyYXBoaXRlUXVlcnkiLCJwYXJzZVRhcmdldCIsImxhYmVscyIsInRhcmdldE5vZGVzIiwiZXZlcnkiLCJjb252ZXJ0ZWQiLCJyZWZJZCIsImxhYmVsTWF0Y2hlcnMiLCJncmFwaE9wdGlvbnMiLCJmcm9tIiwidHJhbnNsYXRlVGltZSIsInJhdyIsInRpbWV6b25lIiwidW50aWwiLCJ0byIsInRhcmdldHMiLCJmb3JtYXQiLCJidWlsZEdyYXBoaXRlUGFyYW1zIiwic2NvcGVkVmFycyIsImh0dHBPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImFkZFRyYWNpbmdIZWFkZXJzIiwicGFuZWxJZCIsInJlcXVlc3RJZCIsImRvR3JhcGhpdGVSZXF1ZXN0IiwiY29udmVydFJlc3BvbnNlVG9EYXRhRnJhbWVzIiwicHJveHlNb2RlIiwiZGFzaGJvYXJkSWQiLCJ1bml0IiwicGFyc2VUYWdzIiwidGFnU3RyaW5nIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwiYW5ub3RhdGlvblF1ZXJ5IiwiYW5ub3RhdGlvbiIsImxpc3QiLCJ0aW1lIiwiZmllbGRzIiwiZ2V0IiwiZXZlbnRzIiwidGhlbiIsInJlc3VsdHMiLCJjb25zb2xlIiwiZSIsIndoZW4iLCJ3aGF0IiwiZXJyIiwiUHJvbWlzZSIsInJlamVjdCIsInRhcmdldENvbnRhaW5zVGVtcGxhdGUiLCJjb250YWluc1RlbXBsYXRlIiwiZGF0ZSIsInJvdW5kVXAiLCJzdWJzdHJpbmciLCJwYXJzZSIsImFkZCIsInN1YnRyYWN0IiwidW5peCIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsImludGVycG9sYXRlZFF1ZXJ5Iiwid2lsZGNhcmRDaGFyIiwiYWxsUGFyYW1zIiwiZXhwcmVzc2lvbnMiLCJsaW1pdCIsImdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZSIsImdldFRhZ3NBdXRvQ29tcGxldGUiLCJ1c2VFeHBhbmQiLCJyZXF1ZXN0TWV0cmljRXhwYW5kIiwicmVxdWVzdE1ldHJpY0ZpbmQiLCJtZXRyaWMiLCJleHBhbmRhYmxlIiwiZ2V0VGFncyIsImlkIiwiZ2V0VGFnVmFsdWVzIiwidGFnUHJlZml4IiwiZXhwciIsImV4cHJlc3Npb24iLCJ0cmltIiwibWFwVG9UYWdzIiwidmFsdWVQcmVmaXgiLCJnZXRWZXJzaW9uIiwic2VtdmVyIiwiY3JlYXRlRnVuY0luc3RhbmNlIiwiZ2V0RnVuY0RlZiIsIndhaXRGb3JGdW5jRGVmc0xvYWRlZCIsImdldEZ1bmNEZWZzIiwic3VwcG9ydHNGdW5jdGlvbkluZGV4IiwicmVzb2x2ZSIsInJlc3BvbnNlVHlwZSIsImZpeGVkRGF0YSIsInBhcnNlRnVuY0RlZnMiLCJ0ZXN0RGF0YXNvdXJjZSIsInJhbmdlUmF3Iiwic3RhdHVzIiwiQXV0aG9yaXphdGlvbiIsImluc3BlY3QiLCJmZXRjaCIsImdyYXBoaXRlT3B0aW9ucyIsImNsZWFuT3B0aW9ucyIsInRhcmdldFZhbHVlIiwicmVnZXgiLCJpbnRlcnZhbEZvcm1hdEZpeFJlZ2V4IiwiaGFzVGFyZ2V0cyIsImZpeEludGVydmFsRm9ybWF0IiwibmVzdGVkU2VyaWVzUmVnZXhSZXBsYWNlciIsImcxIiwiaGlkZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImFzc2lnbiIsImxhc3QiLCJpc0Zpbml0ZSIsImFkZEZ1bmNEZWYiLCJkZWZhdWx0UGFyYW1zIiwic2hvcnROYW1lIiwib3B0aW9uYWxTZXJpZXNSZWZBcmdzIiwiZmFrZSIsImlzVmVyc2lvblJlbGF0ZWRGdW5jdGlvbiIsIm9iaiIsIkZ1bmNJbnN0YW5jZSIsIndpdGhEZWZhdWx0UGFyYW1zIiwidXBkYXRlVGV4dCIsIm1ldHJpY0V4cCIsInJlcGxhY2VWYXJpYWJsZXMiLCJzdHIiLCJwYXJhbWV0ZXJzIiwicGFyYW1UeXBlIiwidmFsdWVJbnRlcnBvbGF0ZWQiLCJwb3AiLCJ1bnNoaWZ0IiwiX2hhc011bHRpcGxlUGFyYW1zSW5TdHJpbmciLCJzdHJWYWx1ZSIsInVwZGF0ZVBhcmFtIiwicGFydFZhbCIsImlkeCIsImZ1bmNzIiwicGFyYW0iLCJyYXdEZWZzIiwiZnVuY05hbWUiLCJncm91cCIsInRlc3QiLCJyZXF1aXJlZCIsInNoaWZ0IiwicmF3UGFyYW0iLCJJbmZpbml0eSIsInN1Z2dlc3Rpb25zIiwiY29tcGFjdCIsImZpbmRJbmRleCIsImZsYXR0ZW4iLCJrZXlCeSIsIndpdGhvdXQiLCJhcnJheU1vdmUiLCJQYXJzZXIiLCJHcmFwaGl0ZVF1ZXJ5IiwicmVtb3ZlVGFnVmFsdWUiLCJwYXJzZXIiLCJhc3ROb2RlIiwiZ2V0QXN0IiwiY2hlY2tPdGhlclNlZ21lbnRzSW5kZXgiLCJwb3MiLCJwYXJzZVRhcmdldFJlY3Vyc2l2ZSIsImdldFNlZ21lbnRQYXRoVXBUbyIsImFyciIsImlubmVyRnVuYyIsInNwbGl0U2VyaWVzQnlUYWdQYXJhbXMiLCJnZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCIsImFkZEZ1bmN0aW9uUGFyYW1ldGVyIiwidXBkYXRlU2VnbWVudFZhbHVlIiwiYWRkU2VsZWN0TWV0cmljU2VnbWVudCIsIm5ld0Z1bmMiLCJ1cGRhdGVNb2RlbFRhcmdldCIsIndyYXBGdW5jdGlvbiIsIm1ldHJpY1BhdGgiLCJ1cGRhdGVSZW5kZXJlZFRhcmdldCIsInRhcmdldHNCeVJlZklkIiwibmVzdGVkU2VyaWVzUmVmUmVnZXgiLCJ0YXJnZXRXaXRoTmVzdGVkUXVlcmllcyIsImNvdW50VGFyZ2V0UmVmcyIsInJlZkNvdW50IiwidCIsInVwZGF0ZWQiLCJ0YXJnZXRGdWxsIiwidGFnUGF0dGVybiIsIm1hdGNoZXMiLCJnZXRTZXJpZXNCeVRhZ0Z1bmMiLCJzZXJpZXNCeVRhZ0Z1bmNJbmRleCIsImFkZFRhZyIsIm5ld1RhZ1BhcmFtIiwicmVuZGVyVGFnU3RyaW5nIiwicmVtb3ZlVGFnIiwidXBkYXRlVGFnIiwicmVuZGVyVGFnRXhwcmVzc2lvbnMiLCJleGNsdWRlSW5kZXgiLCJ0YWdFeHByIiwiYmluZCIsInVuaWNvZGVMZXR0ZXJUYWJsZSIsImlkZW50aWZpZXJTdGFydFRhYmxlIiwiaWRlbnRpZmllclBhcnRUYWJsZSIsIkxleGVyIiwiY2hhciIsInBlZWsiLCJjaGFyQXQiLCJza2lwIiwidG9rZW5pemUiLCJ0b2tlbiIsIm5leHQiLCJzY2FuU3RyaW5nTGl0ZXJhbCIsInNjYW5QdW5jdHVhdG9yIiwic2Nhbk51bWVyaWNMaXRlcmFsIiwic2NhbklkZW50aWZpZXIiLCJzY2FuVGVtcGxhdGVTZXF1ZW5jZSIsImlzVW5pY29kZUxldHRlciIsImNvZGUiLCJpc0hleERpZ2l0IiwicmVhZFVuaWNvZGVFc2NhcGVTZXF1ZW5jZSIsImNoMSIsImNoMiIsImNoMyIsImNoNCIsInBhcnNlSW50IiwiZ2V0SWRlbnRpZmllclN0YXJ0IiwiY2hyIiwiY2hhckNvZGVBdCIsImdldElkZW50aWZpZXJQYXJ0IiwiYmFkIiwiaXNEZWNpbWFsRGlnaXQiLCJpc09jdGFsRGlnaXQiLCJpc0lkZW50aWZpZXJTdGFydCIsImNoIiwiaXNNYWxmb3JtZWQiLCJiYXNlIiwiaXNQdW5jdHVhdG9yIiwicXVvdGUiLCJpc1VuY2xvc2VkIiwianVtcCIsInRvSW50ZWdlciIsInZhbCIsInRvQm9vbGVhbk9yVGltZXN0YW1wIiwibWV0YUxpc3QiLCJhcmNoaXZlSW5kZXgiLCJzY2hlbWEiLCJpbnRlcnZhbFN0cmluZyIsInNldmVyaXR5IiwicnVudGltZU5yIiwic3BlYyIsInZhbHMiLCJjaHVua3NwYW4iLCJudW1jaHVua3MiLCJyZWFkeSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInBsdWdpbiIsInNldFF1ZXJ5RWRpdG9yIiwic2V0Q29uZmlnRWRpdG9yIiwic2V0TWV0YWRhdGFJbnNwZWN0b3IiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwibGV4ZXIiLCJ0b2tlbnMiLCJzdGFydCIsImZ1bmN0aW9uQ2FsbCIsIm1ldHJpY0V4cHJlc3Npb24iLCJjdXJseUJyYWNlU2VnbWVudCIsImN1cmx5U2VnbWVudCIsImNvbnN1bWVUb2tlbiIsImVycm9yTWFyayIsIm1ldHJpY1NlZ21lbnQiLCJjdXJseSIsInBhcnRzIiwibm9kZSIsImZ1bmN0aW9uUGFyYW1ldGVycyIsImJvb2xFeHByZXNzaW9uIiwibnVtZXJpY0xpdGVyYWwiLCJzZXJpZXNSZWZFeHByZXNzaW9uIiwic3RyaW5nTGl0ZXJhbCIsInBhcnNlRmxvYXQiLCJjdXJyZW50VG9rZW4iLCJtYXRjaFRva2VuIiwidG9rZW4xIiwidG9rZW4yIiwiY3JlYXRlQWN0aW9uIiwiaW5pdCIsInRpbWVSYW5nZUNoYW5nZWQiLCJxdWVyaWVzQ2hhbmdlZCIsInF1ZXJ5Q2hhbmdlZCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUHJldmlvdXMiLCJjcmVhdGVTdG9yZSIsIkRpc3BhdGNoQ29udGV4dCIsIkdyYXBoaXRlU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJuZWVkc1JlZnJlc2giLCJzZXROZWVkc1JlZnJlc2giLCJwcmV2aW91c1JhbmdlIiwicmVmcmVzaCIsImNsb25lIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJub3RpZnlBcHAiLCJHUkFQSElURV9UQUdfT1BFUkFUT1JTIiwiVEFHX1BSRUZJWCIsImJ1aWxkU2VnbWVudHMiLCJtb2RpZnlMYXN0U2VnbWVudCIsImNoZWNrT3RoZXJTZWdtZW50cyIsImZyb21JbmRleCIsInBhdGgiLCJoYW5kbGVNZXRyaWNzQXV0b0NvbXBsZXRlRXJyb3IiLCJzcGxpY2VTZWdtZW50cyIsImVtcHR5U2VnbWVudHMiLCJhZGRTZXJpZXNCeVRhZ0Z1bmMiLCJ0YWdQYXJhbSIsImhhbmRsZVRhcmdldENoYW5nZWQiLCJzbWFydGx5SGFuZGxlTmV3QWxpYXNCeU5vZGUiLCJwYXVzZSIsInJlbW92ZVRhZ1ByZWZpeCIsIm9sZFRhcmdldCIsIm1ldHJpY0F1dG9Db21wbGV0ZUVycm9yU2hvd24iLCJoYW5kbGVUYWdzQXV0b0NvbXBsZXRlRXJyb3IiLCJ0YWdzQXV0b0NvbXBsZXRlRXJyb3JTaG93biIsImVhY2hSaWdodCIsInJlbW92ZSIsIk1BWF9TVUdHRVNUSU9OUyIsImdldEFsdFNlZ21lbnRzIiwicHJlZml4IiwiYWx0U2VnbWVudHMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZSIsInJlbW92ZVRhZ2dlZEVudHJ5IiwiYWRkQWx0VGFnU2VnbWVudHMiLCJ0YWdFeHByZXNzaW9ucyIsImFsdFRhZ3MiLCJnZXRUYWdzQXNTZWdtZW50cyIsInRhZ3NBc1NlZ21lbnRzIiwidGFnS2V5IiwiYWx0VmFsdWVzIiwidGFnU2VnbWVudHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZGVwcyIsInBheWxvYWQiLCJzZWdtZW50T3JTdHJpbmciLCJzZWdtZW50SW5kZXgiLCJuZXdUYWdLZXkiLCJuZXdUYWciLCJuZXdNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==