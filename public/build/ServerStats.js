"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServerStats"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxHQUFHLFlBQXdDO0FBQ3BFLFNBQU83RCwrREFBYSxHQUNqQjRHLEdBREksQ0FDQSxpQkFEQSxFQUVKQyxLQUZJLENBRUdDLEdBQUQsSUFBUztBQUNkeEYsSUFBQUEsT0FBTyxDQUFDeUYsS0FBUixDQUFjRCxHQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FMSSxDQUFQO0FBTUQsQ0FQTTs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFFQTs7QUFNTyxNQUFNbEQsTUFBTSxHQUFHLENBQUM7QUFBRWpDLEVBQUFBLElBQUksR0FBRztBQUFULENBQUQsS0FBb0M7QUFDeEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSwyQkFDRSx1REFBQywyREFBRDtBQUFvQixVQUFJLEVBQUVBO0FBQTFCO0FBREYsSUFERjtBQUtELENBTk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9DcmF3bGVyU3RhcnRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGF0dXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0V4cG9ydFN0YXJ0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9FeHBvcnRTdGF0dXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1NlcnZlclN0YXRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9zdGF0ZS9hcGlzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7XG4gICAgbW9kZTogJ3RodW1icycsXG4gICAgdGhlbWU6IGNvbmZpZy50aGVtZTIuaXNMaWdodCA/ICdsaWdodCcgOiAnZGFyaycsXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RhcnQnLCBib2R5KVxuICAgICAgLnRoZW4oKHYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHYpO1xuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB0aXRsZT17J1N0YXJ0IGNyYXdsZXInfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtkb1N0YXJ0fT5cbiAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgU3RhcnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCwgaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50LCBMaXZlQ2hhbm5lbFNjb3BlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IENyYXdsZXJTdGFydEJ1dHRvbiB9IGZyb20gJy4vQ3Jhd2xlclN0YXJ0QnV0dG9uJztcblxuaW50ZXJmYWNlIENyYXdsZXJTdGF0dXNNZXNzYWdlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgc3RhcnRlZDogc3RyaW5nO1xuICBmaW5pc2hlZDogc3RyaW5nO1xuICBjb21wbGV0ZTogbnVtYmVyO1xuICBxdWV1ZTogbnVtYmVyO1xuICBsYXN0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDcmF3bGVyU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8Q3Jhd2xlclN0YXR1c01lc3NhZ2U+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBnZXRHcmFmYW5hTGl2ZVNydigpXG4gICAgICAuZ2V0U3RyZWFtPENyYXdsZXJTdGF0dXNNZXNzYWdlPih7XG4gICAgICAgIHNjb3BlOiBMaXZlQ2hhbm5lbFNjb3BlLkdyYWZhbmEsXG4gICAgICAgIG5hbWVzcGFjZTogJ2Jyb2FkY2FzdCcsXG4gICAgICAgIHBhdGg6ICdjcmF3bGVyJyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKGV2dCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGlmICghc3RhdHVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgIE5vIHN0YXR1cyAobmV2ZXIgcnVuKVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPENyYXdsZXJTdGFydEJ1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHN0YXR1cywgbnVsbCwgMil9PC9wcmU+XG4gICAgICB7c3RhdHVzLnN0YXRlICE9PSAncnVubmluZycgJiYgPENyYXdsZXJTdGFydEJ1dHRvbiAvPn1cbiAgICAgIHtzdGF0dXMuc3RhdGUgIT09ICdzdG9wcGVkJyAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hZG1pbi9jcmF3bGVyL3N0b3AnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RvcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XG4gICAgYCxcbiAgICBydW5uaW5nOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29kZUVkaXRvciwgTW9kYWwsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IEV4cG9ydFN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHtcbiAgICBmb3JtYXQ6ICdnaXQnLFxuICAgIGdpdDoge30sXG4gIH0pO1xuICBjb25zdCBvbkRpc21pc3MgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgY29uc3QgZG9TdGFydCA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL2FkbWluL2V4cG9ydCcsIGJvZHkpXG4gICAgICAudGhlbigodikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR09UJywgdik7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXsnRXhwb3J0IGdyYWZhbmEgaW5zdGFuY2UnfSBpc09wZW49e29wZW59IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoYm9keSwgbnVsbCwgMikgPz8gJyd9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJqc29uXCJcbiAgICAgICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQmx1cj17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBzZXRCb2R5KEpTT04ucGFyc2UodGV4dCkpOyAvLyBmb3JjZSBKU09OP1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2RvU3RhcnR9PlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX0gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgRXhwb3J0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTE7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQsIGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudCwgTGl2ZUNoYW5uZWxTY29wZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgZ2V0R3JhZmFuYUxpdmVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFeHBvcnRTdGFydEJ1dHRvbiB9IGZyb20gJy4vRXhwb3J0U3RhcnRCdXR0b24nO1xuXG5pbnRlcmZhY2UgRXhwb3J0U3RhdHVzTWVzc2FnZSB7XG4gIHJ1bm5pbmc6IGJvb2xlYW47XG4gIHRhcmdldDogc3RyaW5nO1xuICBzdGFydGVkOiBudW1iZXI7XG4gIGZpbmlzaGVkOiBudW1iZXI7XG4gIHVwZGF0ZTogbnVtYmVyO1xuICBjb3VudDogbnVtYmVyO1xuICBjdXJyZW50OiBudW1iZXI7XG4gIGxhc3Q6IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFeHBvcnRTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxFeHBvcnRTdGF0dXNNZXNzYWdlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZ2V0R3JhZmFuYUxpdmVTcnYoKVxuICAgICAgLmdldFN0cmVhbTxFeHBvcnRTdGF0dXNNZXNzYWdlPih7XG4gICAgICAgIHNjb3BlOiBMaXZlQ2hhbm5lbFNjb3BlLkdyYWZhbmEsXG4gICAgICAgIG5hbWVzcGFjZTogJ2Jyb2FkY2FzdCcsXG4gICAgICAgIHBhdGg6ICdleHBvcnQnLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZXZ0KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgPEV4cG9ydFN0YXJ0QnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RhdHVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIHtCb29sZWFuKCFzdGF0dXMucnVubmluZykgJiYgPEV4cG9ydFN0YXJ0QnV0dG9uIC8+fVxuICAgICAge0Jvb2xlYW4oc3RhdHVzLnJ1bm5pbmcpICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL2V4cG9ydC9zdG9wJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGAsXG4gICAgcnVubmluZzogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ2FyZENvbnRhaW5lciwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyJztcblxuaW1wb3J0IHsgQ3Jhd2xlclN0YXR1cyB9IGZyb20gJy4vQ3Jhd2xlclN0YXR1cyc7XG5pbXBvcnQgeyBFeHBvcnRTdGF0dXMgfSBmcm9tICcuL0V4cG9ydFN0YXR1cyc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTdGF0cywgU2VydmVyU3RhdCB9IGZyb20gJy4vc3RhdGUvYXBpcyc7XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJTdGF0cyA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZTxTZXJ2ZXJTdGF0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pO1xuICBjb25zdCBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLlVzZXJzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25TZXJ2ZXJTdGF0c1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pKSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBnZXRTZXJ2ZXJTdGF0cygpLnRoZW4oKHN0YXRzKSA9PiB7XG4gICAgICAgIHNldFN0YXRzKHN0YXRzKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmICghY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25TZXJ2ZXJTdGF0c1JlYWQsIGNvbnRleHRTcnYuaXNHcmFmYW5hQWRtaW4pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pkluc3RhbmNlIHN0YXRpc3RpY3M8L2gyPlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICAgIDxMb2FkZXIgdGV4dD17J0xvYWRpbmcgaW5zdGFuY2Ugc3RhdHMuLi4nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBzdGF0cyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdEYXNoYm9hcmRzIChzdGFycmVkKScsIHZhbHVlOiBgJHtzdGF0cy5kYXNoYm9hcmRzfSAoJHtzdGF0cy5zdGFyc30pYCB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdUYWdzJywgdmFsdWU6IHN0YXRzLnRhZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnUGxheWxpc3RzJywgdmFsdWU6IHN0YXRzLnBsYXlsaXN0cyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdTbmFwc2hvdHMnLCB2YWx1ZTogc3RhdHMuc25hcHNob3RzIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9kYXNoYm9hcmRzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgIE1hbmFnZSBkYXNoYm9hcmRzXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kb3VibGVSb3d9PlxuICAgICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1t7IG5hbWU6ICdEYXRhIHNvdXJjZXMnLCB2YWx1ZTogc3RhdHMuZGF0YXNvdXJjZXMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgaGFzQWNjZXNzVG9EYXRhU291cmNlcyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2RhdGFzb3VyY2VzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgZGF0YSBzb3VyY2VzXG4gICAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1t7IG5hbWU6ICdBbGVydHMnLCB2YWx1ZTogc3RhdHMuYWxlcnRzIH1dfVxuICAgICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWxlcnRpbmcvbGlzdCd9IHZhcmlhbnQ9eydzZWNvbmRhcnknfT5cbiAgICAgICAgICAgICAgICAgIEFsZXJ0c1xuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgIGNvbnRlbnQ9e1tcbiAgICAgICAgICAgICAgeyBuYW1lOiAnT3JnYW5pc2F0aW9ucycsIHZhbHVlOiBzdGF0cy5vcmdzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1VzZXJzIHRvdGFsJywgdmFsdWU6IHN0YXRzLnVzZXJzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0FjdGl2ZSB1c2VycyBpbiBsYXN0IDMwIGRheXMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlVXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHNlc3Npb25zJywgdmFsdWU6IHN0YXRzLmFjdGl2ZVNlc3Npb25zIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgaGFzQWNjZXNzVG9BZG1pblVzZXJzICYmIChcbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2FkbWluL3VzZXJzJ30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgTWFuYWdlIHVzZXJzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RGb3VuZH0+Tm8gc3RhdHMgZm91bmQuPC9wPlxuICAgICAgKX1cblxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3cyAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZGFzaGJvYXJkUHJldmlld3NBZG1pbiAmJiA8Q3Jhd2xlclN0YXR1cyAvPn1cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMuZXhwb3J0ICYmIDxFeHBvcnRTdGF0dXMgLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIH1cblxuICAgICAgJiA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAzMy4zJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGRvdWJsZVJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG4gICAgYCxcblxuICAgIGxvYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICBgLFxuXG4gICAgbm90Rm91bmQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg2LmZvbnRTaXplfTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbnR5cGUgU3RhdENhcmRQcm9wcyA9IHtcbiAgY29udGVudDogQXJyYXk8UmVjb3JkPHN0cmluZywgbnVtYmVyIHwgc3RyaW5nPj47XG4gIGZvb3Rlcj86IEpTWC5FbGVtZW50IHwgYm9vbGVhbjtcbn07XG5cbmNvbnN0IFN0YXRDYXJkID0gKHsgY29udGVudCwgZm9vdGVyIH06IFN0YXRDYXJkUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDYXJkU3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGRpc2FibGVIb3Zlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgIHtjb250ZW50Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtmb290ZXIgJiYgPGRpdj57Zm9vdGVyfTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENhcmRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBpbm5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGNvbnRlbnQ6IGNzc2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJTdGF0IHtcbiAgYWN0aXZlQWRtaW5zOiBudW1iZXI7XG4gIGFjdGl2ZUVkaXRvcnM6IG51bWJlcjtcbiAgYWN0aXZlU2Vzc2lvbnM6IG51bWJlcjtcbiAgYWN0aXZlVXNlcnM6IG51bWJlcjtcbiAgYWN0aXZlVmlld2VyczogbnVtYmVyO1xuICBhZG1pbnM6IG51bWJlcjtcbiAgYWxlcnRzOiBudW1iZXI7XG4gIGRhc2hib2FyZHM6IG51bWJlcjtcbiAgZGF0YXNvdXJjZXM6IG51bWJlcjtcbiAgZWRpdG9yczogbnVtYmVyO1xuICBvcmdzOiBudW1iZXI7XG4gIHBsYXlsaXN0czogbnVtYmVyO1xuICBzbmFwc2hvdHM6IG51bWJlcjtcbiAgc3RhcnM6IG51bWJlcjtcbiAgdGFnczogbnVtYmVyO1xuICB1c2VyczogbnVtYmVyO1xuICB2aWV3ZXJzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTdGF0cyA9IGFzeW5jICgpOiBQcm9taXNlPFNlcnZlclN0YXQgfCBudWxsPiA9PiB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCdhcGkvYWRtaW4vc3RhdHMnKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHsgdGV4dCA9ICdMb2FkaW5nLi4uJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sb2FkZXItd3JhcHBlclwiPlxuICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsImNvbmZpZyIsIkJ1dHRvbiIsIkNvZGVFZGl0b3IiLCJNb2RhbCIsInVzZVRoZW1lMiIsIkNyYXdsZXJTdGFydEJ1dHRvbiIsInN0eWxlcyIsImdldFN0eWxlcyIsIm9wZW4iLCJzZXRPcGVuIiwiYm9keSIsInNldEJvZHkiLCJtb2RlIiwidGhlbWUiLCJ0aGVtZTIiLCJpc0xpZ2h0Iiwib25EaXNtaXNzIiwiZG9TdGFydCIsInBvc3QiLCJ0aGVuIiwidiIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJwYXJzZSIsInVzZUVmZmVjdCIsImlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQiLCJpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQiLCJMaXZlQ2hhbm5lbFNjb3BlIiwiZ2V0R3JhZmFuYUxpdmVTcnYiLCJDcmF3bGVyU3RhdHVzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3Vic2NyaXB0aW9uIiwiZ2V0U3RyZWFtIiwic2NvcGUiLCJHcmFmYW5hIiwibmFtZXNwYWNlIiwicGF0aCIsInN1YnNjcmliZSIsIm5leHQiLCJldnQiLCJtZXNzYWdlIiwidW5zdWJzY3JpYmUiLCJzdGF0ZSIsInJ1bm5pbmciLCJFeHBvcnRTdGFydEJ1dHRvbiIsImZvcm1hdCIsImdpdCIsIkV4cG9ydFN0YXR1cyIsIkJvb2xlYW4iLCJDYXJkQ29udGFpbmVyIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiY29udGV4dFNydiIsIkxvYWRlciIsImdldFNlcnZlclN0YXRzIiwiU2VydmVyU3RhdHMiLCJzdGF0cyIsInNldFN0YXRzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzQWNjZXNzVG9EYXRhU291cmNlcyIsImhhc0FjY2VzcyIsIkRhdGFTb3VyY2VzUmVhZCIsImlzR3JhZmFuYUFkbWluIiwiaGFzQWNjZXNzVG9BZG1pblVzZXJzIiwiVXNlcnNSZWFkIiwiQWN0aW9uU2VydmVyU3RhdHNSZWFkIiwidGl0bGUiLCJsb2FkZXIiLCJyb3ciLCJuYW1lIiwidmFsdWUiLCJkYXNoYm9hcmRzIiwic3RhcnMiLCJ0YWdzIiwicGxheWxpc3RzIiwic25hcHNob3RzIiwiZG91YmxlUm93IiwiZGF0YXNvdXJjZXMiLCJhbGVydHMiLCJvcmdzIiwidXNlcnMiLCJhY3RpdmVVc2VycyIsImFjdGl2ZVNlc3Npb25zIiwibm90Rm91bmQiLCJmZWF0dXJlVG9nZ2xlcyIsImRhc2hib2FyZFByZXZpZXdzIiwiZGFzaGJvYXJkUHJldmlld3NBZG1pbiIsImV4cG9ydCIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiaDYiLCJmb250U2l6ZSIsIlN0YXRDYXJkIiwiY29udGVudCIsImZvb3RlciIsImdldENhcmRTdHlsZXMiLCJjb250YWluZXIiLCJpbm5lciIsIm1hcCIsIml0ZW0iLCJnZXQiLCJjYXRjaCIsImVyciIsImVycm9yIiwiTG9hZGluZ1BsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==