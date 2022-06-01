"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1034],{

/***/ "./public/app/features/dashboard/containers/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoloPanel": () => (/* binding */ SoloPanel),
/* harmony export */   "SoloPanelPage": () => (/* binding */ SoloPanelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const mapStateToProps = state => ({
  dashboard: state.dashboard.getModel()
});

const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__/* .initDashboard */ .mV
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class SoloPanelPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      panel: null,
      notFound: false
    });
  }

  componentDidMount() {
    const {
      match,
      route
    } = this.props;
    this.props.initDashboard({
      urlSlug: match.params.slug,
      urlUid: match.params.uid,
      urlType: match.params.type,
      routeName: route.routeName,
      fixUrl: false
    });
  }

  getPanelId() {
    var _this$props$queryPara;

    return parseInt((_this$props$queryPara = this.props.queryParams.panelId) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : '0', 10);
  }

  componentDidUpdate(prevProps) {
    const {
      dashboard
    } = this.props;

    if (!dashboard) {
      return;
    } // we just got a new dashboard


    if (!prevProps.dashboard || prevProps.dashboard.uid !== dashboard.uid) {
      const panel = dashboard.getPanelByUrlId(this.props.queryParams.panelId);

      if (!panel) {
        this.setState({
          notFound: true
        });
        return;
      }

      this.setState({
        panel
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SoloPanel, {
      dashboard: this.props.dashboard,
      notFound: this.state.notFound,
      panel: this.state.panel,
      panelId: this.getPanelId()
    });
  }

}
const SoloPanel = _ref => {
  let {
    dashboard,
    notFound,
    panel,
    panelId
  } = _ref;

  if (notFound) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "alert alert-error",
      children: ["Panel with id ", panelId, " not found"]
    });
  }

  if (!panel || !dashboard) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: "Loading & initializing dashboard"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "panel-solo",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: _ref2 => {
        let {
          width,
          height
        } = _ref2;

        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__/* .DashboardPanel */ .l, {
          stateKey: panel.key,
          width: width,
          height: height,
          dashboard: dashboard,
          panel: panel,
          isEditing: false,
          isViewing: false,
          lazy: false
        });
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SoloPanelPage));

/***/ })

}]);