"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_admin_UpgradePage_tsx"],{

/***/ "./public/app/features/admin/CrawlerStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStartButton": () => (/* binding */ CrawlerStartButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const CrawlerStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    mode: 'thumbs',
    theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2.isLight ? 'light' : 'dark'
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/admin/crawler/start', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: 'Start crawler',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "submit",
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Start"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/CrawlerStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStatus": () => (/* binding */ CrawlerStatus)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/CrawlerStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _CrawlerStartButton, _CrawlerStartButton2;









const CrawlerStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'crawler'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.wrap,
      children: ["No status (never run)", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _CrawlerStartButton || (_CrawlerStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), status.state !== 'running' && (_CrawlerStartButton2 || (_CrawlerStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))), status.state !== 'stopped' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/crawler/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/ExportStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportStartButton": () => (/* binding */ ExportStartButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ExportStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    format: 'git',
    git: {}
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/admin/export', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: 'Export grafana instance',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Export"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/ExportStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportStatus": () => (/* binding */ ExportStatus)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExportStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/ExportStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _ExportStartButton, _ExportStartButton2;









const ExportStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'export'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.wrap,
      children: _ExportStartButton || (_ExportStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExportStartButton__WEBPACK_IMPORTED_MODULE_5__.ExportStartButton, {}))
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), Boolean(!status.running) && (_ExportStartButton2 || (_ExportStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExportStartButton__WEBPACK_IMPORTED_MODULE_5__.ExportStartButton, {}))), Boolean(status.running) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/export/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "LicenseChrome": () => (/* binding */ LicenseChrome)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  const backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  const footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 36px 79px;
      background: ${theme.colors.panelBg};
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-align: center;
      padding: 16px;
      background: ${footerBg};
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${backgroundUrl}') right;
    `
  };
});
function LicenseChrome({
  header,
  editionNotice,
  subheader,
  children
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: title,
        children: header
      }), subheader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: subheader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Circle, {
        size: "128px",
        style: {
          boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
          background: '#0A1C36',
          position: 'absolute',
          top: '19px',
          left: '71%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: "public/img/grafana_icon.svg",
          alt: "Grafana",
          width: "80px",
          style: {
            position: 'absolute',
            left: '23px',
            top: '20px'
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.container,
      children: children
    }), editionNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.footer,
      children: editionNotice
    })]
  });
}
const Circle = ({
  size,
  style,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: Object.assign({
      width: size,
      height: size,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: '50%'
    }, style),
    children: children
  });
};

/***/ }),

/***/ "./public/app/features/admin/ServerStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStats": () => (/* binding */ ServerStats)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _CrawlerStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/CrawlerStatus.tsx");
/* harmony import */ var _ExportStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/admin/ExportStatus.tsx");
/* harmony import */ var _state_apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/state/apis.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Loader, _LinkButton, _LinkButton2, _LinkButton3, _LinkButton4, _CrawlerStatus, _ExportStatus;














const ServerStats = () => {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const hasAccessToDataSources = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  const hasAccessToAdminUsers = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.UsersRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
      setIsLoading(true);
      (0,_state_apis__WEBPACK_IMPORTED_MODULE_9__.getServerStats)().then(stats => {
        setStats(stats);
        setIsLoading(false);
      });
    }
  }, []);

  if (!_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
      className: styles.title,
      children: "Instance statistics"
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: styles.loader,
      children: _Loader || (_Loader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, {
        text: 'Loading instance stats...'
      }))
    }) : stats ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
        content: [{
          name: 'Dashboards (starred)',
          value: `${stats.dashboards} (${stats.stars})`
        }, {
          name: 'Tags',
          value: stats.tags
        }, {
          name: 'Playlists',
          value: stats.playlists
        }, {
          name: 'Snapshots',
          value: stats.snapshots
        }],
        footer: _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: '/dashboards',
          variant: 'secondary',
          children: "Manage dashboards"
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.doubleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
          content: [{
            name: 'Data sources',
            value: stats.datasources
          }],
          footer: hasAccessToDataSources && (_LinkButton2 || (_LinkButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            href: '/datasources',
            variant: 'secondary',
            children: "Manage data sources"
          })))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
          content: [{
            name: 'Alerts',
            value: stats.alerts
          }],
          footer: _LinkButton3 || (_LinkButton3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            href: '/alerting/list',
            variant: 'secondary',
            children: "Alerts"
          }))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
        content: [{
          name: 'Organisations',
          value: stats.orgs
        }, {
          name: 'Users total',
          value: stats.users
        }, {
          name: 'Active users in last 30 days',
          value: stats.activeUsers
        }, {
          name: 'Active sessions',
          value: stats.activeSessions
        }],
        footer: hasAccessToAdminUsers && (_LinkButton4 || (_LinkButton4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: '/admin/users',
          variant: 'secondary',
          children: "Manage users"
        })))
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
      className: styles.notFound,
      children: "No stats found."
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviews && _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviewsAdmin && (_CrawlerStatus || (_CrawlerStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CrawlerStatus__WEBPACK_IMPORTED_MODULE_7__.CrawlerStatus, {}))), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles["export"] && (_ExportStatus || (_ExportStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ExportStatus__WEBPACK_IMPORTED_MODULE_8__.ExportStatus, {})))]
  });
};

const getStyles = theme => {
  return {
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(4)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${theme.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,
    doubleRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${theme.spacing(2)};
      }
    `,
    loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 290px;
    `,
    notFound: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `
  };
};

const StatCard = ({
  content,
  footer
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getCardStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {
    className: styles.container,
    disableHover: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.content,
        children: content.map(item => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: styles.row,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: item.value
            })]
          }, item.name);
        })
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        children: footer
      })]
    })
  });
};

const getCardStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2)};
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1 0 auto;
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${theme.spacing(2)};
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/UpgradePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeInfo": () => (/* binding */ UpgradeInfo),
/* harmony export */   "UpgradePage": () => (/* binding */ UpgradePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _FeatureInfo, _ServiceInfo, _h, _CallToAction, _LinkButton, _h2, _List, _strong, _br, _GetEnterprise, _h3, _FeatureListing, _List2;












function UpgradePage({
  navModel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_7__.ServerStats, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(UpgradeInfo, {
        editionNotice: "You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."
      })]
    }))
  });
}
const titleStyles = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const UpgradeInfo = ({
  editionNotice
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      className: styles.title,
      children: "Enterprise license"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_6__.LicenseChrome, {
      header: "Grafana Enterprise",
      subheader: "Get your free trial",
      editionNotice: editionNotice,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.column,
        children: [_FeatureInfo || (_FeatureInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureInfo, {})), _ServiceInfo || (_ServiceInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ServiceInfo, {}))]
      })
    })]
  });
};

const getStyles = theme => {
  return {
    column: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(4)} 0;
    `
  };
};

const GetEnterprise = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      marginTop: '40px',
      marginBottom: '30px'
    },
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      style: titleStyles,
      children: "Get Grafana Enterprise"
    })), _CallToAction || (_CallToAction = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CallToAction, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      style: {
        paddingTop: '12px'
      },
      children: "You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."
    })]
  });
};

const CallToAction = () => {
  return _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
    variant: "primary",
    size: "lg",
    href: "https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",
    children: "Contact us and get a free trial"
  }));
};

const ServiceInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [_h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "At your service"
    })), _List || (_List = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Enterprise Plugins",
        image: "public/img/licensing/plugin_enterprise.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Critical SLA: 2 hours",
        image: "public/img/licensing/sla.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Item, {
        title: "Unlimited Expert Support",
        image: "public/img/licensing/customer_support.svg",
        children: ["24 x 7 x 365 support via", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
          nested: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Private Slack channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Phone"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Hand-in-hand support",
        image: "public/img/licensing/handinhand_support.svg",
        children: "in the upgrade process"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [_strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
        children: "Also included:"
      })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), "Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]
    }), _GetEnterprise || (_GetEnterprise = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GetEnterprise, {}))]
  });
};

const FeatureInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      paddingRight: '11px'
    },
    children: [_h3 || (_h3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "Enhanced functionality"
    })), _FeatureListing || (_FeatureListing = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureListing, {}))]
  });
};

const FeatureListing = () => {
  return _List2 || (_List2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Data source permissions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Reporting"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "SAML authentication"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enhanced LDAP integration"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Team Sync",
      children: "LDAP, GitHub OAuth, Auth Proxy, Okta"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "White labeling"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Auditing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Settings updates at runtime"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Grafana usage insights",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Sort dashboards by popularity in search"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Find unused dashboards"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard usage stats drawer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard presence indicators"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enterprise plugins",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Oracle"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Splunk"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Service Now"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dynatrace"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "New Relic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "DataDog"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "AppDynamics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "SAP HANA\xAE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Gitlab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Honeycomb"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Jira"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "MongoDB"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Salesforce"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Snowflake"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Wavefront"
        })]
      })
    })]
  }));
};

const List = ({
  children,
  nested
}) => {
  const listStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${nested ? 0 : 8}px;
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: listStyle,
    children: children
  });
};

const Item = ({
  children,
  title,
  image
}) => {
  const imageUrl = image ? image : 'public/img/licensing/checkmark.svg';
  const itemStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `;
  const titleStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-weight: 500;
    line-height: 1.7;
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: itemStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: imageUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: titleStyle,
        children: title
      }), children]
    })]
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'upgrading')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(UpgradePage));

/***/ }),

/***/ "./public/app/features/admin/state/apis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerStats": () => (/* binding */ getServerStats)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const getServerStats = async () => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('api/admin/stats').catch(err => {
    console.error(err);
    return null;
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19hZG1pbl9VcGdyYWRlUGFnZV90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFTyxNQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDSCxzREFBUyxFQUFWLENBQXhCO0FBQ0EsUUFBTSxDQUFDSSxJQUFELEVBQU9DLE9BQVAsSUFBa0JYLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ1ksSUFBRCxFQUFPQyxPQUFQLElBQWtCYiwrQ0FBUSxDQUFDO0FBQy9CYyxJQUFBQSxJQUFJLEVBQUUsUUFEeUI7QUFFL0JDLElBQUFBLEtBQUssRUFBRWIsbUVBQUEsR0FBd0IsT0FBeEIsR0FBa0M7QUFGVixHQUFELENBQWhDOztBQUlBLFFBQU1nQixTQUFTLEdBQUcsTUFBTVAsT0FBTyxDQUFDLEtBQUQsQ0FBL0I7O0FBQ0EsUUFBTVEsT0FBTyxHQUFHLE1BQU07QUFDcEJsQixJQUFBQSwrREFBYSxHQUNWbUIsSUFESCxDQUNRLDBCQURSLEVBQ29DUixJQURwQyxFQUVHUyxJQUZILENBRVNDLENBQUQsSUFBTztBQUNYQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixDQUFuQjtBQUNBSixNQUFBQSxTQUFTO0FBQ1YsS0FMSDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBRSxlQUFkO0FBQStCLFlBQU0sRUFBRVIsSUFBdkM7QUFBNkMsZUFBUyxFQUFFUSxTQUF4RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVYsTUFBTSxDQUFDaUIsSUFBdkI7QUFBQSwrQkFDRSx1REFBQyxtREFBRDtBQUNFLGdCQUFNLEVBQUUsR0FEVjtBQUVFLGVBQUsscUJBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJC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QUFNd0YsZUFBZSxHQUFJbkgsS0FBRCxLQUF3QjtBQUM5QzhGLEVBQUFBLFFBQVEsRUFBRUYscUVBQVcsQ0FBQzVGLEtBQUssQ0FBQ29ILFFBQVAsRUFBaUIsV0FBakI7QUFEeUIsQ0FBeEIsQ0FBeEI7O0FBSUEsaUVBQWUxQixvREFBTyxDQUFDeUIsZUFBRCxDQUFQLENBQXlCdEIsV0FBekIsQ0FBZjs7Ozs7Ozs7Ozs7O0FDM09BO0FBc0JPLE1BQU05QyxjQUFjLEdBQUcsWUFBd0M7QUFDcEUsU0FBTy9GLCtEQUFhLEdBQ2pCcUssR0FESSxDQUNBLGlCQURBLEVBRUpDLEtBRkksQ0FFR0MsR0FBRCxJQUFTO0FBQ2RqSixJQUFBQSxPQUFPLENBQUNrSixLQUFSLENBQWNELEdBQWQ7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUxJLENBQVA7QUFNRCxDQVBNOzs7Ozs7Ozs7Ozs7OztBQ3RCUDtBQUVBOztBQU1PLE1BQU16RSxNQUFNLEdBQUcsQ0FBQztBQUFFbkUsRUFBQUEsSUFBSSxHQUFHO0FBQVQsQ0FBRCxLQUFvQztBQUN4RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBLDJCQUNFLHVEQUFDLDJEQUFEO0FBQW9CLFVBQUksRUFBRUE7QUFBMUI7QUFERixJQURGO0FBS0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGFydEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQ3Jhd2xlclN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vRXhwb3J0U3RhcnRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0V4cG9ydFN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vTGljZW5zZUNocm9tZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vU2VydmVyU3RhdHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1VwZ3JhZGVQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9zdGF0ZS9hcGlzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7XG4gICAgbW9kZTogJ3RodW1icycsXG4gICAgdGhlbWU6IGNvbmZpZy50aGVtZTIuaXNMaWdodCA/ICdsaWdodCcgOiAnZGFyaycsXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RhcnQnLCBib2R5KVxuICAgICAgLnRoZW4oKHYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHYpO1xuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB0aXRsZT17J1N0YXJ0IGNyYXdsZXInfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtkb1N0YXJ0fT5cbiAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgU3RhcnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCwgaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50LCBMaXZlQ2hhbm5lbFNjb3BlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IENyYXdsZXJTdGFydEJ1dHRvbiB9IGZyb20gJy4vQ3Jhd2xlclN0YXJ0QnV0dG9uJztcblxuaW50ZXJmYWNlIENyYXdsZXJTdGF0dXNNZXNzYWdlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgc3RhcnRlZDogc3RyaW5nO1xuICBmaW5pc2hlZDogc3RyaW5nO1xuICBjb21wbGV0ZTogbnVtYmVyO1xuICBxdWV1ZTogbnVtYmVyO1xuICBsYXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDcmF3bGVyU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8Q3Jhd2xlclN0YXR1c01lc3NhZ2U+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBnZXRHcmFmYW5hTGl2ZVNydigpXG4gICAgICAuZ2V0U3RyZWFtPENyYXdsZXJTdGF0dXNNZXNzYWdlPih7XG4gICAgICAgIHNjb3BlOiBMaXZlQ2hhbm5lbFNjb3BlLkdyYWZhbmEsXG4gICAgICAgIG5hbWVzcGFjZTogJ2Jyb2FkY2FzdCcsXG4gICAgICAgIHBhdGg6ICdjcmF3bGVyJyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKGV2dCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGlmICghc3RhdHVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgIE5vIHN0YXR1cyAobmV2ZXIgcnVuKVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPENyYXdsZXJTdGFydEJ1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHN0YXR1cywgbnVsbCwgMil9PC9wcmU+XG4gICAgICB7c3RhdHVzLnN0YXRlICE9PSAncnVubmluZycgJiYgPENyYXdsZXJTdGFydEJ1dHRvbiAvPn1cbiAgICAgIHtzdGF0dXMuc3RhdGUgIT09ICdzdG9wcGVkJyAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hZG1pbi9jcmF3bGVyL3N0b3AnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RvcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XG4gICAgYCxcbiAgICBydW5uaW5nOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IEV4cG9ydFN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHtcbiAgICBmb3JtYXQ6ICdnaXQnLFxuICAgIGdpdDoge30sXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2V4cG9ydCcsIGJvZHkpXG4gICAgICAudGhlbigodikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR09UJywgdik7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXsnRXhwb3J0IGdyYWZhbmEgaW5zdGFuY2UnfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2RvU3RhcnR9PlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgRXhwb3J0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTE7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQsIGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudCwgTGl2ZUNoYW5uZWxTY29wZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgZ2V0R3JhZmFuYUxpdmVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFeHBvcnRTdGFydEJ1dHRvbiB9IGZyb20gJy4vRXhwb3J0U3RhcnRCdXR0b24nO1xuXG5pbnRlcmZhY2UgRXhwb3J0U3RhdHVzTWVzc2FnZSB7XG4gIHJ1bm5pbmc6IGJvb2xlYW47XG4gIHRhcmdldDogc3RyaW5nO1xuICBzdGFydGVkOiBudW1iZXI7XG4gIGZpbmlzaGVkOiBudW1iZXI7XG4gIHVwZGF0ZTogbnVtYmVyO1xuICBjb3VudDogbnVtYmVyO1xuICBjdXJyZW50OiBudW1iZXI7XG4gIGxhc3Q6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFeHBvcnRTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxFeHBvcnRTdGF0dXNNZXNzYWdlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZ2V0R3JhZmFuYUxpdmVTcnYoKVxuICAgICAgLmdldFN0cmVhbTxFeHBvcnRTdGF0dXNNZXNzYWdlPih7XG4gICAgICAgIHNjb3BlOiBMaXZlQ2hhbm5lbFNjb3BlLkdyYWZhbmEsXG4gICAgICAgIG5hbWVzcGFjZTogJ2Jyb2FkY2FzdCcsXG4gICAgICAgIHBhdGg6ICdleHBvcnQnLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZXZ0KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgPEV4cG9ydFN0YXJ0QnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RhdHVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIHtCb29sZWFuKCFzdGF0dXMucnVubmluZykgJiYgPEV4cG9ydFN0YXJ0QnV0dG9uIC8+fVxuICAgICAge0Jvb2xlYW4oc3RhdHVzLnJ1bm5pbmcpICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL2V4cG9ydC9zdG9wJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGAsXG4gICAgcnVubmluZzogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzdHlsZXNGYWN0b3J5LCB1c2VUaGVtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgdGl0bGUgPSB7IGZvbnRXZWlnaHQ6IDUwMCwgZm9udFNpemU6ICcyNnB4JywgbGluZUhlaWdodDogJzEyMyUnIH07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgY29uc3QgYmFja2dyb3VuZFVybCA9IHRoZW1lLmlzRGFyayA/ICdwdWJsaWMvaW1nL2xpY2Vuc2luZy9oZWFkZXJfZGFyay5zdmcnIDogJ3B1YmxpYy9pbWcvbGljZW5zaW5nL2hlYWRlcl9saWdodC5zdmcnO1xuICBjb25zdCBmb290ZXJCZyA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZGFyazkgOiB0aGVtZS5wYWxldHRlLmdyYXk2O1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBwYWRkaW5nOiAzNnB4IDc5cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5wYW5lbEJnfTtcbiAgICBgLFxuICAgIGZvb3RlcjogY3NzYFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICR7Zm9vdGVyQmd9O1xuICAgIGAsXG4gICAgaGVhZGVyOiBjc3NgXG4gICAgICBoZWlnaHQ6IDEzN3B4O1xuICAgICAgcGFkZGluZzogNDBweCAwIDAgNzlweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnJHtiYWNrZ3JvdW5kVXJsfScpIHJpZ2h0O1xuICAgIGAsXG4gIH07XG59KTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHN1YmhlYWRlcj86IHN0cmluZztcbiAgZWRpdGlvbk5vdGljZT86IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaWNlbnNlQ2hyb21lKHsgaGVhZGVyLCBlZGl0aW9uTm90aWNlLCBzdWJoZWFkZXIsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHRoZW1lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxoMiBzdHlsZT17dGl0bGV9PntoZWFkZXJ9PC9oMj5cbiAgICAgICAge3N1YmhlYWRlciAmJiA8aDM+e3N1YmhlYWRlcn08L2gzPn1cblxuICAgICAgICA8Q2lyY2xlXG4gICAgICAgICAgc2l6ZT1cIjEyOHB4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAyNHB4IHJnYmEoMjQsIDU4LCAxMTAsIDAuNDUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMEExQzM2JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTlweCcsXG4gICAgICAgICAgICBsZWZ0OiAnNzElJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnXCJcbiAgICAgICAgICAgIGFsdD1cIkdyYWZhbmFcIlxuICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMjNweCcsIHRvcDogJzIwcHgnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DaXJjbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj5cblxuICAgICAge2VkaXRpb25Ob3RpY2UgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PntlZGl0aW9uTm90aWNlfTwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIENpcmNsZVByb3BzIHtcbiAgc2l6ZTogc3RyaW5nO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59XG5cbmV4cG9ydCBjb25zdCBDaXJjbGU6IFJlYWN0LkZDPENpcmNsZVByb3BzPiA9ICh7IHNpemUsIHN0eWxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IENhcmRDb250YWluZXIsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlcic7XG5cbmltcG9ydCB7IENyYXdsZXJTdGF0dXMgfSBmcm9tICcuL0NyYXdsZXJTdGF0dXMnO1xuaW1wb3J0IHsgRXhwb3J0U3RhdHVzIH0gZnJvbSAnLi9FeHBvcnRTdGF0dXMnO1xuaW1wb3J0IHsgZ2V0U2VydmVyU3RhdHMsIFNlcnZlclN0YXQgfSBmcm9tICcuL3N0YXRlL2FwaXMnO1xuXG5leHBvcnQgY29uc3QgU2VydmVyU3RhdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGU8U2VydmVyU3RhdCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgaGFzQWNjZXNzVG9EYXRhU291cmNlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcbiAgY29uc3QgaGFzQWNjZXNzVG9BZG1pblVzZXJzID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5Vc2Vyc1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uU2VydmVyU3RhdHNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKSkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgZ2V0U2VydmVyU3RhdHMoKS50aGVuKChzdGF0cykgPT4ge1xuICAgICAgICBzZXRTdGF0cyhzdGF0cyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAoIWNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uU2VydmVyU3RhdHNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5JbnN0YW5jZSBzdGF0aXN0aWNzPC9oMj5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT5cbiAgICAgICAgICA8TG9hZGVyIHRleHQ9eydMb2FkaW5nIGluc3RhbmNlIHN0YXRzLi4uJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogc3RhdHMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgeyBuYW1lOiAnRGFzaGJvYXJkcyAoc3RhcnJlZCknLCB2YWx1ZTogYCR7c3RhdHMuZGFzaGJvYXJkc30gKCR7c3RhdHMuc3RhcnN9KWAgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVGFncycsIHZhbHVlOiBzdGF0cy50YWdzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1BsYXlsaXN0cycsIHZhbHVlOiBzdGF0cy5wbGF5bGlzdHMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnU25hcHNob3RzJywgdmFsdWU6IHN0YXRzLnNuYXBzaG90cyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGFzaGJvYXJkcyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICBNYW5hZ2UgZGFzaGJvYXJkc1xuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG91YmxlUm93fT5cbiAgICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgICBjb250ZW50PXtbeyBuYW1lOiAnRGF0YSBzb3VyY2VzJywgdmFsdWU6IHN0YXRzLmRhdGFzb3VyY2VzIH1dfVxuICAgICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICAgIGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9kYXRhc291cmNlcyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgICAgTWFuYWdlIGRhdGEgc291cmNlc1xuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgICBjb250ZW50PXtbeyBuYW1lOiAnQWxlcnRzJywgdmFsdWU6IHN0YXRzLmFsZXJ0cyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2FsZXJ0aW5nL2xpc3QnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBBbGVydHNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ09yZ2FuaXNhdGlvbnMnLCB2YWx1ZTogc3RhdHMub3JncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdVc2VycyB0b3RhbCcsIHZhbHVlOiBzdGF0cy51c2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgdXNlcnMgaW4gbGFzdCAzMCBkYXlzJywgdmFsdWU6IHN0YXRzLmFjdGl2ZVVzZXJzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0FjdGl2ZSBzZXNzaW9ucycsIHZhbHVlOiBzdGF0cy5hY3RpdmVTZXNzaW9ucyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgIGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hZG1pbi91c2Vycyd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZSB1c2Vyc1xuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmR9Pk5vIHN0YXRzIGZvdW5kLjwvcD5cbiAgICAgICl9XG5cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMuZGFzaGJvYXJkUHJldmlld3MgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzQWRtaW4gJiYgPENyYXdsZXJTdGF0dXMgLz59XG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmV4cG9ydCAmJiA8RXhwb3J0U3RhdHVzIC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgJiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG5cbiAgICAgICYgPiBkaXYge1xuICAgICAgICB3aWR0aDogMzMuMyU7XG4gICAgICB9XG4gICAgYCxcbiAgICBkb3VibGVSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuICAgIGAsXG5cbiAgICBsb2FkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgYCxcblxuICAgIG5vdEZvdW5kOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNi5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG4gIH07XG59O1xuXG50eXBlIFN0YXRDYXJkUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IEFycmF5PFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZz4+O1xuICBmb290ZXI/OiBKU1guRWxlbWVudCB8IGJvb2xlYW47XG59O1xuXG5jb25zdCBTdGF0Q2FyZCA9ICh7IGNvbnRlbnQsIGZvb3RlciB9OiBTdGF0Q2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Q2FyZFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkaXNhYmxlSG92ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0udmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Zm9vdGVyICYmIDxkaXY+e2Zvb3Rlcn08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmRDb250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRDYXJkU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgaW5uZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTGljZW5zZUNocm9tZSB9IGZyb20gJy4vTGljZW5zZUNocm9tZSc7XG5pbXBvcnQgeyBTZXJ2ZXJTdGF0cyB9IGZyb20gJy4vU2VydmVyU3RhdHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVcGdyYWRlUGFnZSh7IG5hdk1vZGVsIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8U2VydmVyU3RhdHMgLz5cbiAgICAgICAgPFVwZ3JhZGVJbmZvXG4gICAgICAgICAgZWRpdGlvbk5vdGljZT1cIllvdSBhcmUgcnVubmluZyB0aGUgb3Blbi1zb3VyY2UgdmVyc2lvbiBvZiBHcmFmYW5hLlxuICAgICAgICBZb3UgaGF2ZSB0byBpbnN0YWxsIHRoZSBFbnRlcnByaXNlIGVkaXRpb24gaW4gb3JkZXIgZW5hYmxlIEVudGVycHJpc2UgZmVhdHVyZXMuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmNvbnN0IHRpdGxlU3R5bGVzID0geyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjZweCcsIGxpbmVIZWlnaHQ6ICcxMjMlJyB9O1xuXG5pbnRlcmZhY2UgVXBncmFkZUluZm9Qcm9wcyB7XG4gIGVkaXRpb25Ob3RpY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVcGdyYWRlSW5mbzogUmVhY3QuRkM8VXBncmFkZUluZm9Qcm9wcz4gPSAoeyBlZGl0aW9uTm90aWNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+RW50ZXJwcmlzZSBsaWNlbnNlPC9oMj5cbiAgICAgIDxMaWNlbnNlQ2hyb21lIGhlYWRlcj1cIkdyYWZhbmEgRW50ZXJwcmlzZVwiIHN1YmhlYWRlcj1cIkdldCB5b3VyIGZyZWUgdHJpYWxcIiBlZGl0aW9uTm90aWNlPXtlZGl0aW9uTm90aWNlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgIDxGZWF0dXJlSW5mbyAvPlxuICAgICAgICAgIDxTZXJ2aWNlSW5mbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGljZW5zZUNocm9tZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbHVtbjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XG4gICAgICByb3ctZ2FwOiA0MHB4O1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA1MHB4KSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0KX0gMDtcbiAgICBgLFxuICB9O1xufTtcblxuY29uc3QgR2V0RW50ZXJwcmlzZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0MHB4JywgbWFyZ2luQm90dG9tOiAnMzBweCcgfX0+XG4gICAgICA8aDIgc3R5bGU9e3RpdGxlU3R5bGVzfT5HZXQgR3JhZmFuYSBFbnRlcnByaXNlPC9oMj5cbiAgICAgIDxDYWxsVG9BY3Rpb24gLz5cbiAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxMnB4JyB9fT5cbiAgICAgICAgWW91IGNhbiB1c2UgdGhlIHRyaWFsIHZlcnNpb24gZm9yIGZyZWUgZm9yIDMwIGRheXMuIFdlIHdpbGwgcmVtaW5kIHlvdSBhYm91dCBpdCBmaXZlIGRheXMgYmVmb3JlIHRoZSB0cmlhbFxuICAgICAgICBwZXJpb2QgZW5kcy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENhbGxUb0FjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmtCdXR0b25cbiAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9jb250YWN0P2Fib3V0PWdyYWZhbmEtZW50ZXJwcmlzZSZ1dG1fc291cmNlPWdyYWZhbmEtdXBncmFkZS1wYWdlXCJcbiAgICA+XG4gICAgICBDb250YWN0IHVzIGFuZCBnZXQgYSBmcmVlIHRyaWFsXG4gICAgPC9MaW5rQnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgU2VydmljZUluZm86IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+QXQgeW91ciBzZXJ2aWNlPC9oND5cblxuICAgICAgPExpc3Q+XG4gICAgICAgIDxJdGVtIHRpdGxlPVwiRW50ZXJwcmlzZSBQbHVnaW5zXCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9wbHVnaW5fZW50ZXJwcmlzZS5zdmdcIiAvPlxuICAgICAgICA8SXRlbSB0aXRsZT1cIkNyaXRpY2FsIFNMQTogMiBob3Vyc1wiIGltYWdlPVwicHVibGljL2ltZy9saWNlbnNpbmcvc2xhLnN2Z1wiIC8+XG4gICAgICAgIDxJdGVtIHRpdGxlPVwiVW5saW1pdGVkIEV4cGVydCBTdXBwb3J0XCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9jdXN0b21lcl9zdXBwb3J0LnN2Z1wiPlxuICAgICAgICAgIDI0IHggNyB4IDM2NSBzdXBwb3J0IHZpYVxuICAgICAgICAgIDxMaXN0IG5lc3RlZD17dHJ1ZX0+XG4gICAgICAgICAgICA8SXRlbSB0aXRsZT1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxJdGVtIHRpdGxlPVwiUHJpdmF0ZSBTbGFjayBjaGFubmVsXCIgLz5cbiAgICAgICAgICAgIDxJdGVtIHRpdGxlPVwiUGhvbmVcIiAvPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSB0aXRsZT1cIkhhbmQtaW4taGFuZCBzdXBwb3J0XCIgaW1hZ2U9XCJwdWJsaWMvaW1nL2xpY2Vuc2luZy9oYW5kaW5oYW5kX3N1cHBvcnQuc3ZnXCI+XG4gICAgICAgICAgaW4gdGhlIHVwZ3JhZGUgcHJvY2Vzc1xuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgIDxzdHJvbmc+QWxzbyBpbmNsdWRlZDo8L3N0cm9uZz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEluZGVtbmlmaWNhdGlvbiwgd29ya2luZyB3aXRoIEdyYWZhbmEgTGFicyBvbiBmdXR1cmUgcHJpb3JpdGl6YXRpb24sIGFuZCB0cmFpbmluZyBmcm9tIHRoZSBjb3JlIEdyYWZhbmEgdGVhbS5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8R2V0RW50ZXJwcmlzZSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRmVhdHVyZUluZm86IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTFweCcgfX0+XG4gICAgICA8aDQ+RW5oYW5jZWQgZnVuY3Rpb25hbGl0eTwvaDQ+XG4gICAgICA8RmVhdHVyZUxpc3RpbmcgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZlYXR1cmVMaXN0aW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIDxJdGVtIHRpdGxlPVwiRGF0YSBzb3VyY2UgcGVybWlzc2lvbnNcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJSZXBvcnRpbmdcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJTQU1MIGF1dGhlbnRpY2F0aW9uXCIgLz5cbiAgICAgIDxJdGVtIHRpdGxlPVwiRW5oYW5jZWQgTERBUCBpbnRlZ3JhdGlvblwiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIlRlYW0gU3luY1wiPkxEQVAsIEdpdEh1YiBPQXV0aCwgQXV0aCBQcm94eSwgT2t0YTwvSXRlbT5cbiAgICAgIDxJdGVtIHRpdGxlPVwiV2hpdGUgbGFiZWxpbmdcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJBdWRpdGluZ1wiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIlNldHRpbmdzIHVwZGF0ZXMgYXQgcnVudGltZVwiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIkdyYWZhbmEgdXNhZ2UgaW5zaWdodHNcIj5cbiAgICAgICAgPExpc3QgbmVzdGVkPXt0cnVlfT5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNvcnQgZGFzaGJvYXJkcyBieSBwb3B1bGFyaXR5IGluIHNlYXJjaFwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJGaW5kIHVudXNlZCBkYXNoYm9hcmRzXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkRhc2hib2FyZCB1c2FnZSBzdGF0cyBkcmF3ZXJcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiRGFzaGJvYXJkIHByZXNlbmNlIGluZGljYXRvcnNcIiAvPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbSB0aXRsZT1cIkVudGVycHJpc2UgcGx1Z2luc1wiPlxuICAgICAgICA8TGlzdCBuZXN0ZWQ9e3RydWV9PlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiT3JhY2xlXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNwbHVua1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTZXJ2aWNlIE5vd1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJEeW5hdHJhY2VcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiTmV3IFJlbGljXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkRhdGFEb2dcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiQXBwRHluYW1pY3NcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiU0FQIEhBTkHCrlwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJHaXRsYWJcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiSG9uZXljb21iXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkppcmFcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiTW9uZ29EQlwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTYWxlc2ZvcmNlXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNub3dmbGFrZVwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJXYXZlZnJvbnRcIiAvPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICApO1xufTtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIG5lc3RlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPExpc3RQcm9wcz4gPSAoeyBjaGlsZHJlbiwgbmVzdGVkIH0pID0+IHtcbiAgY29uc3QgbGlzdFN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgPiBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHtuZXN0ZWQgPyAwIDogOH1weDtcbiAgICB9XG4gIGA7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtsaXN0U3R5bGV9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGltYWdlIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBpbWFnZSA/IGltYWdlIDogJ3B1YmxpYy9pbWcvbGljZW5zaW5nL2NoZWNrbWFyay5zdmcnO1xuICBjb25zdCBpdGVtU3R5bGUgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgID4gaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IHRpdGxlU3R5bGUgPSBjc3NgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2l0ZW1TdHlsZX0+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndXBncmFkaW5nJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVwZ3JhZGVQYWdlKTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdGF0IHtcbiAgYWN0aXZlQWRtaW5zOiBudW1iZXI7XG4gIGFjdGl2ZUVkaXRvcnM6IG51bWJlcjtcbiAgYWN0aXZlU2Vzc2lvbnM6IG51bWJlcjtcbiAgYWN0aXZlVXNlcnM6IG51bWJlcjtcbiAgYWN0aXZlVmlld2VyczogbnVtYmVyO1xuICBhZG1pbnM6IG51bWJlcjtcbiAgYWxlcnRzOiBudW1iZXI7XG4gIGRhc2hib2FyZHM6IG51bWJlcjtcbiAgZGF0YXNvdXJjZXM6IG51bWJlcjtcbiAgZWRpdG9yczogbnVtYmVyO1xuICBvcmdzOiBudW1iZXI7XG4gIHBsYXlsaXN0czogbnVtYmVyO1xuICBzbmFwc2hvdHM6IG51bWJlcjtcbiAgc3RhcnM6IG51bWJlcjtcbiAgdGFnczogbnVtYmVyO1xuICB1c2VyczogbnVtYmVyO1xuICB2aWV3ZXJzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTdGF0cyA9IGFzeW5jICgpOiBQcm9taXNlPFNlcnZlclN0YXQgfCBudWxsPiA9PiB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCdhcGkvYWRtaW4vc3RhdHMnKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHsgdGV4dCA9ICdMb2FkaW5nLi4uJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sb2FkZXItd3JhcHBlclwiPlxuICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsImNvbmZpZyIsIkJ1dHRvbiIsIkNvZGVFZGl0b3IiLCJNb2RhbCIsInVzZVRoZW1lMiIsIkNyYXdsZXJTdGFydEJ1dHRvbiIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9wZW4iLCJzZXRPcGVuIiwiYm9keSIsInNldEJvZHkiLCJtb2RlIiwidGhlbWUiLCJ0aGVtZTIiLCJpc0xpZ2h0Iiwib25EaXNtaXNzIiwiZG9TdGFydCIsInBvc3QiLCJ0aGVuIiwidiIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJwYXJzZSIsInVzZUVmZmVjdCIsImlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQiLCJpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQiLCJMaXZlQ2hhbm5lbFNjb3BlIiwiZ2V0R3JhZmFuYUxpdmVTcnYiLCJDcmF3bGVyU3RhdHVzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3Vic2NyaXB0aW9uIiwiZ2V0U3RyZWFtIiwic2NvcGUiLCJHcmFmYW5hIiwibmFtZXNwYWNlIiwicGF0aCIsInN1YnNjcmliZSIsIm5leHQiLCJldnQiLCJtZXNzYWdlIiwidW5zdWJzY3JpYmUiLCJzdGF0ZSIsInJ1bm5pbmciLCJFeHBvcnRTdGFydEJ1dHRvbiIsImZvcm1hdCIsImdpdCIsIkV4cG9ydFN0YXR1cyIsIkJvb2xlYW4iLCJzdHlsZXNGYWN0b3J5IiwidXNlVGhlbWUiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kVXJsIiwiaXNEYXJrIiwiZm9vdGVyQmciLCJwYWxldHRlIiwiZGFyazkiLCJncmF5NiIsImNvbnRhaW5lciIsImNvbG9ycyIsInBhbmVsQmciLCJmb290ZXIiLCJoZWFkZXIiLCJMaWNlbnNlQ2hyb21lIiwiZWRpdGlvbk5vdGljZSIsInN1YmhlYWRlciIsImNoaWxkcmVuIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkNpcmNsZSIsInNpemUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJDYXJkQ29udGFpbmVyIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiY29udGV4dFNydiIsIkxvYWRlciIsImdldFNlcnZlclN0YXRzIiwiU2VydmVyU3RhdHMiLCJzdGF0cyIsInNldFN0YXRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzQWNjZXNzVG9EYXRhU291cmNlcyIsImhhc0FjY2VzcyIsIkRhdGFTb3VyY2VzUmVhZCIsImlzR3JhZmFuYUFkbWluIiwiaGFzQWNjZXNzVG9BZG1pblVzZXJzIiwiVXNlcnNSZWFkIiwiQWN0aW9uU2VydmVyU3RhdHNSZWFkIiwibG9hZGVyIiwicm93IiwibmFtZSIsInZhbHVlIiwiZGFzaGJvYXJkcyIsInN0YXJzIiwidGFncyIsInBsYXlsaXN0cyIsInNuYXBzaG90cyIsImRvdWJsZVJvdyIsImRhdGFzb3VyY2VzIiwiYWxlcnRzIiwib3JncyIsInVzZXJzIiwiYWN0aXZlVXNlcnMiLCJhY3RpdmVTZXNzaW9ucyIsIm5vdEZvdW5kIiwiZmVhdHVyZVRvZ2dsZXMiLCJkYXNoYm9hcmRQcmV2aWV3cyIsImRhc2hib2FyZFByZXZpZXdzQWRtaW4iLCJleHBvcnQiLCJzcGFjaW5nIiwidHlwb2dyYXBoeSIsImg2IiwiU3RhdENhcmQiLCJjb250ZW50IiwiZ2V0Q2FyZFN0eWxlcyIsImlubmVyIiwibWFwIiwiaXRlbSIsImNvbm5lY3QiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJVcGdyYWRlUGFnZSIsIm5hdk1vZGVsIiwidGl0bGVTdHlsZXMiLCJVcGdyYWRlSW5mbyIsImNvbHVtbiIsIkdldEVudGVycHJpc2UiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nVG9wIiwiQ2FsbFRvQWN0aW9uIiwiU2VydmljZUluZm8iLCJGZWF0dXJlSW5mbyIsInBhZGRpbmdSaWdodCIsIkZlYXR1cmVMaXN0aW5nIiwiTGlzdCIsIm5lc3RlZCIsImxpc3RTdHlsZSIsIkl0ZW0iLCJpbWFnZSIsImltYWdlVXJsIiwiaXRlbVN0eWxlIiwidGl0bGVTdHlsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm5hdkluZGV4IiwiZ2V0IiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIkxvYWRpbmdQbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=