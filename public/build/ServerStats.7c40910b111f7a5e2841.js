"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7641],{

 "./public/app/features/admin/ServerStats.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "ServerStats": () => ( ServerStats)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var Loader = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;







const CrawlerStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,grafana_ui_src.useTheme2)());
  const [open, setOpen] = (0,react.useState)(false);
  const [body, setBody] = (0,react.useState)({
    mode: 'thumbs',
    theme: src.config.theme2.isLight ? 'light' : 'dark'
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,src.getBackendSrv)().post('/api/admin/crawler/start', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
      title: 'Start crawler',
      isOpen: open,
      onDismiss: onDismiss,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.wrap,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); 
          }
        })
      }), (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          type: "submit",
          onClick: doStart,
          children: "Start"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Start"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: emotion_css_esm.css`
      border: 2px solid #111;
    `
  };
};
;
var _br, _CrawlerStartButton, _CrawlerStartButton2;









const CrawlerStatus = () => {
  const styles = CrawlerStatus_getStyles((0,grafana_ui_src.useTheme2)());
  const [status, setStatus] = (0,react.useState)();
  (0,react.useEffect)(() => {
    const subscription = (0,src.getGrafanaLiveSrv)().getStream({
      scope: grafana_data_src.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'crawler'
    }).subscribe({
      next: evt => {
        if ((0,grafana_data_src.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,grafana_data_src.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.wrap,
      children: ["No status (never run)", _br || (_br = (0,jsx_runtime.jsx)("br", {})), _CrawlerStartButton || (_CrawlerStartButton = (0,jsx_runtime.jsx)(CrawlerStartButton, {}))]
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrap,
    children: [(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), status.state !== 'running' && (_CrawlerStartButton2 || (_CrawlerStartButton2 = (0,jsx_runtime.jsx)(CrawlerStartButton, {}))), status.state !== 'stopped' && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      onClick: () => {
        (0,src.getBackendSrv)().post('/api/admin/crawler/stop');
      },
      children: "Stop"
    })]
  });
};

const CrawlerStatus_getStyles = theme => {
  return {
    wrap: emotion_css_esm.css`
      border: 4px solid red;
    `,
    running: emotion_css_esm.css`
      border: 4px solid green;
    `
  };
};
;







const ExportStartButton = () => {
  var _JSON$stringify;

  const styles = ExportStartButton_getStyles((0,grafana_ui_src.useTheme2)());
  const [open, setOpen] = (0,react.useState)(false);
  const [body, setBody] = (0,react.useState)({
    format: 'git',
    git: {}
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,src.getBackendSrv)().post('/api/admin/export', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
      title: 'Export grafana instance',
      isOpen: open,
      onDismiss: onDismiss,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.wrap,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); 
          }
        })
      }), (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          onClick: doStart,
          children: "Start"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Export"
    })]
  });
};

const ExportStartButton_getStyles = theme => {
  return {
    wrap: emotion_css_esm.css`
      border: 2px solid #111;
    `
  };
};
;
var _ExportStartButton, _ExportStartButton2;









const ExportStatus = () => {
  const styles = ExportStatus_getStyles((0,grafana_ui_src.useTheme2)());
  const [status, setStatus] = (0,react.useState)();
  (0,react.useEffect)(() => {
    const subscription = (0,src.getGrafanaLiveSrv)().getStream({
      scope: grafana_data_src.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'export'
    }).subscribe({
      next: evt => {
        if ((0,grafana_data_src.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,grafana_data_src.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.wrap,
      children: _ExportStartButton || (_ExportStartButton = (0,jsx_runtime.jsx)(ExportStartButton, {}))
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrap,
    children: [(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), Boolean(!status.running) && (_ExportStartButton2 || (_ExportStartButton2 = (0,jsx_runtime.jsx)(ExportStartButton, {}))), Boolean(status.running) && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      onClick: () => {
        (0,src.getBackendSrv)().post('/api/admin/export/stop');
      },
      children: "Stop"
    })]
  });
};

const ExportStatus_getStyles = theme => {
  return {
    wrap: emotion_css_esm.css`
      border: 4px solid red;
    `,
    running: emotion_css_esm.css`
      border: 4px solid green;
    `
  };
};
;

const getServerStats = async () => {
  return (0,src.getBackendSrv)().get('api/admin/stats').catch(err => {
    console.error(err);
    return null;
  });
};
;
var _Loader, _LinkButton, _LinkButton2, _LinkButton3, _LinkButton4, _CrawlerStatus, _ExportStatus;














const ServerStats = () => {
  const [stats, setStats] = (0,react.useState)(null);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const styles = (0,grafana_ui_src.useStyles2)(ServerStats_getStyles);
  const hasAccessToDataSources = context_srv.Vt.hasAccess(types.bW.DataSourcesRead, context_srv.Vt.isGrafanaAdmin);
  const hasAccessToAdminUsers = context_srv.Vt.hasAccess(types.bW.UsersRead, context_srv.Vt.isGrafanaAdmin);
  (0,react.useEffect)(() => {
    if (context_srv.Vt.hasAccess(types.bW.ActionServerStatsRead, context_srv.Vt.isGrafanaAdmin)) {
      setIsLoading(true);
      getServerStats().then(stats => {
        setStats(stats);
        setIsLoading(false);
      });
    }
  }, []);

  if (!context_srv.Vt.hasAccess(types.bW.ActionServerStatsRead, context_srv.Vt.isGrafanaAdmin)) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)("h2", {
      className: styles.title,
      children: "Instance statistics"
    }), isLoading ? (0,jsx_runtime.jsx)("div", {
      className: styles.loader,
      children: _Loader || (_Loader = (0,jsx_runtime.jsx)(Loader.a, {
        text: 'Loading instance stats...'
      }))
    }) : stats ? (0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(StatCard, {
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
        footer: _LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
          href: '/dashboards',
          variant: 'secondary',
          children: "Manage dashboards"
        }))
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.doubleRow,
        children: [(0,jsx_runtime.jsx)(StatCard, {
          content: [{
            name: 'Data sources',
            value: stats.datasources
          }],
          footer: hasAccessToDataSources && (_LinkButton2 || (_LinkButton2 = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            href: '/datasources',
            variant: 'secondary',
            children: "Manage data sources"
          })))
        }), (0,jsx_runtime.jsx)(StatCard, {
          content: [{
            name: 'Alerts',
            value: stats.alerts
          }],
          footer: _LinkButton3 || (_LinkButton3 = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            href: '/alerting/list',
            variant: 'secondary',
            children: "Alerts"
          }))
        })]
      }), (0,jsx_runtime.jsx)(StatCard, {
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
        footer: hasAccessToAdminUsers && (_LinkButton4 || (_LinkButton4 = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
          href: '/admin/users',
          variant: 'secondary',
          children: "Manage users"
        })))
      })]
    }) : (0,jsx_runtime.jsx)("p", {
      className: styles.notFound,
      children: "No stats found."
    }), src.config.featureToggles.dashboardPreviews && src.config.featureToggles.dashboardPreviewsAdmin && (_CrawlerStatus || (_CrawlerStatus = (0,jsx_runtime.jsx)(CrawlerStatus, {}))), src.config.featureToggles["export"] && (_ExportStatus || (_ExportStatus = (0,jsx_runtime.jsx)(ExportStatus, {})))]
  });
};

const ServerStats_getStyles = theme => {
  return {
    title: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(4)};
    `,
    row: emotion_css_esm.css`
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
    doubleRow: emotion_css_esm.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${theme.spacing(2)};
      }
    `,
    loader: emotion_css_esm.css`
      height: 290px;
    `,
    notFound: emotion_css_esm.css`
      font-size: ${theme.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `
  };
};

const StatCard = _ref => {
  let {
    content,
    footer
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getCardStyles);
  return (0,jsx_runtime.jsx)(grafana_ui_src.CardContainer, {
    className: styles.container,
    disableHover: true,
    children: (0,jsx_runtime.jsxs)("div", {
      className: styles.inner,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.content,
        children: content.map(item => {
          return (0,jsx_runtime.jsxs)("div", {
            className: styles.row,
            children: [(0,jsx_runtime.jsx)("span", {
              children: item.name
            }), (0,jsx_runtime.jsx)("span", {
              children: item.value
            })]
          }, item.name);
        })
      }), footer && (0,jsx_runtime.jsx)("div", {
        children: footer
      })]
    })
  });
};

const getCardStyles = theme => {
  return {
    container: emotion_css_esm.css`
      padding: ${theme.spacing(2)};
    `,
    inner: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: emotion_css_esm.css`
      flex: 1 0 auto;
    `,
    row: emotion_css_esm.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${theme.spacing(2)};
      align-items: center;
    `
  };
};

 }),

 "./public/app/features/plugins/admin/components/Loader.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "a": () => ( Loader)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = _ref => {
  let {
    text = 'Loading...'
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

 })

}]);