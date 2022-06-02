"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9834,7641],{

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

 "./public/app/features/admin/UpgradePage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "UpgradeInfo": () => ( UpgradeInfo),
  "UpgradePage": () => ( UpgradePage),
  "default": () => ( admin_UpgradePage)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;






const title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const getStyles = (0,src.stylesFactory)(theme => {
  const backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  const footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: emotion_css_esm.css`
      padding: 36px 79px;
      background: ${theme.colors.panelBg};
    `,
    footer: emotion_css_esm.css`
      text-align: center;
      padding: 16px;
      background: ${footerBg};
    `,
    header: emotion_css_esm.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${backgroundUrl}') right;
    `
  };
});
function LicenseChrome(_ref) {
  let {
    header,
    editionNotice,
    subheader,
    children
  } = _ref;
  const theme = (0,src.useTheme)();
  const styles = getStyles(theme);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.header,
      children: [(0,jsx_runtime.jsx)("h2", {
        style: title,
        children: header
      }), subheader && (0,jsx_runtime.jsx)("h3", {
        children: subheader
      }), (0,jsx_runtime.jsx)(Circle, {
        size: "128px",
        style: {
          boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
          background: '#0A1C36',
          position: 'absolute',
          top: '19px',
          left: '71%'
        },
        children: (0,jsx_runtime.jsx)("img", {
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
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: children
    }), editionNotice && (0,jsx_runtime.jsx)("div", {
      className: styles.footer,
      children: editionNotice
    })]
  });
}
const Circle = _ref2 => {
  let {
    size,
    style,
    children
  } = _ref2;
  return (0,jsx_runtime.jsx)("div", {
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
var ServerStats = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
;
var _Page$Contents, _FeatureInfo, _ServiceInfo, _h, _CallToAction, _LinkButton, _h2, _List, _strong, _br, _GetEnterprise, _h3, _FeatureListing, _List2;












function UpgradePage(_ref) {
  let {
    navModel
  } = _ref;
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = (0,jsx_runtime.jsxs)(Page.Z.Contents, {
      children: [(0,jsx_runtime.jsx)(ServerStats.ServerStats, {}), (0,jsx_runtime.jsx)(UpgradeInfo, {
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
const UpgradeInfo = _ref2 => {
  let {
    editionNotice
  } = _ref2;
  const styles = (0,src.useStyles2)(UpgradePage_getStyles);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)("h2", {
      className: styles.title,
      children: "Enterprise license"
    }), (0,jsx_runtime.jsx)(LicenseChrome, {
      header: "Grafana Enterprise",
      subheader: "Get your free trial",
      editionNotice: editionNotice,
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.column,
        children: [_FeatureInfo || (_FeatureInfo = (0,jsx_runtime.jsx)(FeatureInfo, {})), _ServiceInfo || (_ServiceInfo = (0,jsx_runtime.jsx)(ServiceInfo, {}))]
      })
    })]
  });
};

const UpgradePage_getStyles = theme => {
  return {
    column: emotion_css_esm.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,
    title: emotion_css_esm.css`
      margin: ${theme.spacing(4)} 0;
    `
  };
};

const GetEnterprise = () => {
  return (0,jsx_runtime.jsxs)("div", {
    style: {
      marginTop: '40px',
      marginBottom: '30px'
    },
    children: [_h || (_h = (0,jsx_runtime.jsx)("h2", {
      style: titleStyles,
      children: "Get Grafana Enterprise"
    })), _CallToAction || (_CallToAction = (0,jsx_runtime.jsx)(CallToAction, {})), (0,jsx_runtime.jsx)("p", {
      style: {
        paddingTop: '12px'
      },
      children: "You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."
    })]
  });
};

const CallToAction = () => {
  return _LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(src.LinkButton, {
    variant: "primary",
    size: "lg",
    href: "https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",
    children: "Contact us and get a free trial"
  }));
};

const ServiceInfo = () => {
  return (0,jsx_runtime.jsxs)("div", {
    children: [_h2 || (_h2 = (0,jsx_runtime.jsx)("h4", {
      children: "At your service"
    })), _List || (_List = (0,jsx_runtime.jsxs)(List, {
      children: [(0,jsx_runtime.jsx)(Item, {
        title: "Enterprise Plugins",
        image: "public/img/licensing/plugin_enterprise.svg"
      }), (0,jsx_runtime.jsx)(Item, {
        title: "Critical SLA: 2 hours",
        image: "public/img/licensing/sla.svg"
      }), (0,jsx_runtime.jsxs)(Item, {
        title: "Unlimited Expert Support",
        image: "public/img/licensing/customer_support.svg",
        children: ["24 x 7 x 365 support via", (0,jsx_runtime.jsxs)(List, {
          nested: true,
          children: [(0,jsx_runtime.jsx)(Item, {
            title: "Email"
          }), (0,jsx_runtime.jsx)(Item, {
            title: "Private Slack channel"
          }), (0,jsx_runtime.jsx)(Item, {
            title: "Phone"
          })]
        })]
      }), (0,jsx_runtime.jsx)(Item, {
        title: "Hand-in-hand support",
        image: "public/img/licensing/handinhand_support.svg",
        children: "in the upgrade process"
      })]
    })), (0,jsx_runtime.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [_strong || (_strong = (0,jsx_runtime.jsx)("strong", {
        children: "Also included:"
      })), _br || (_br = (0,jsx_runtime.jsx)("br", {})), "Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]
    }), _GetEnterprise || (_GetEnterprise = (0,jsx_runtime.jsx)(GetEnterprise, {}))]
  });
};

const FeatureInfo = () => {
  return (0,jsx_runtime.jsxs)("div", {
    style: {
      paddingRight: '11px'
    },
    children: [_h3 || (_h3 = (0,jsx_runtime.jsx)("h4", {
      children: "Enhanced functionality"
    })), _FeatureListing || (_FeatureListing = (0,jsx_runtime.jsx)(FeatureListing, {}))]
  });
};

const FeatureListing = () => {
  return _List2 || (_List2 = (0,jsx_runtime.jsxs)(List, {
    children: [(0,jsx_runtime.jsx)(Item, {
      title: "Data source permissions"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Reporting"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "SAML authentication"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Enhanced LDAP integration"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Team Sync",
      children: "LDAP, GitHub OAuth, Auth Proxy, Okta"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "White labeling"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Auditing"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Settings updates at runtime"
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Grafana usage insights",
      children: (0,jsx_runtime.jsxs)(List, {
        nested: true,
        children: [(0,jsx_runtime.jsx)(Item, {
          title: "Sort dashboards by popularity in search"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Find unused dashboards"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Dashboard usage stats drawer"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Dashboard presence indicators"
        })]
      })
    }), (0,jsx_runtime.jsx)(Item, {
      title: "Enterprise plugins",
      children: (0,jsx_runtime.jsxs)(List, {
        nested: true,
        children: [(0,jsx_runtime.jsx)(Item, {
          title: "Oracle"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Splunk"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Service Now"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Dynatrace"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "New Relic"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "DataDog"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "AppDynamics"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "SAP HANA\xAE"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Gitlab"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Honeycomb"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Jira"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "MongoDB"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Salesforce"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Snowflake"
        }), (0,jsx_runtime.jsx)(Item, {
          title: "Wavefront"
        })]
      })
    })]
  }));
};

const List = _ref3 => {
  let {
    children,
    nested
  } = _ref3;
  const listStyle = emotion_css_esm.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${nested ? 0 : 8}px;
    }
  `;
  return (0,jsx_runtime.jsx)("div", {
    className: listStyle,
    children: children
  });
};

const Item = _ref4 => {
  let {
    children,
    title,
    image
  } = _ref4;
  const imageUrl = image ? image : 'public/img/licensing/checkmark.svg';
  const itemStyle = emotion_css_esm.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `;
  const titleStyle = emotion_css_esm.css`
    font-weight: 500;
    line-height: 1.7;
  `;
  return (0,jsx_runtime.jsxs)("div", {
    className: itemStyle,
    children: [(0,jsx_runtime.jsx)("img", {
      src: imageUrl,
      alt: ""
    }), (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("div", {
        className: titleStyle,
        children: title
      }), children]
    })]
  });
};

const mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'upgrading')
});

 const admin_UpgradePage = ((0,es.connect)(mapStateToProps)(UpgradePage));

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