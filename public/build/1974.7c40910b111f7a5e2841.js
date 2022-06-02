"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1974],{

 "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "l": () => ( DashboardPanel)
});


var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var actions = __webpack_require__("./public/app/features/panel/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/panel/state/reducers.ts");
var useEffectOnce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
var useUniqueId = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




function LazyLoader(_ref) {
  let {
    children,
    width,
    height,
    onLoad,
    onChange
  } = _ref;
  const id = (0,useUniqueId.L)();
  const [loaded, setLoaded] = (0,react.useState)(false);
  const [isInView, setIsInView] = (0,react.useState)(false);
  const wrapperRef = (0,react.useRef)(null);
  (0,useEffectOnce.Z)(() => {
    LazyLoader.addCallback(id, entry => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad();
      }

      setIsInView(entry.isIntersecting);
      onChange === null || onChange === void 0 ? void 0 : onChange(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;

    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }

    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);

      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return (0,jsx_runtime.jsx)("div", {
    id: id,
    ref: wrapperRef,
    style: {
      width,
      height
    },
    children: loaded && (typeof children === 'function' ? children({
      isInView
    }) : children)
  });
}
LazyLoader.callbacks = {};

LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;

LazyLoader.observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    LazyLoader.callbacks[entry.target.id](entry);
  }
}, {
  rootMargin: '100px'
});
var classnames = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
var classnames_default = __webpack_require__.n(classnames);
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var constants = __webpack_require__("./public/app/core/constants.ts");
var profiler = __webpack_require__("./public/app/core/profiler.ts");
var utils_panel = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
;

const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const {
    overrides
  } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex(override => {
    return override.matcher.id === src.FieldMatcherID.byName && override.matcher.options === label;
  });

  if (currentIndex < 0) {
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    });
  }

  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex(p => p.id === 'color');

  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = Object.assign({}, existing, {
      properties: [...existing.properties, createProperty(color)]
    });
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = Object.assign({}, existing, {
    properties: propertiesCopy
  });
  return Object.assign({}, fieldConfig, {
    overrides: overridesCopy
  });
};

const createOverride = (label, color) => {
  return {
    matcher: {
      id: src.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};

const createProperty = color => {
  return {
    id: 'color',
    value: {
      mode: src.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};
var events = __webpack_require__("./public/app/types/events.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
;
function isSoloRoute(path) {
  return /(d-solo|dashboard-solo)/.test(path === null || path === void 0 ? void 0 : path.toLowerCase());
}
var api = __webpack_require__("./public/app/features/annotations/api.ts");
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
var loadSnapshotData = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var linkSuppliers = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
var PanelHeaderCorner = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
;
var _Tooltip;






const PanelHeaderLoadingIndicator = _ref => {
  let {
    state,
    onClick
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);

  if (state === src.LoadingState.Loading) {
    return (0,jsx_runtime.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: _Tooltip || (_Tooltip = (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
        content: "Cancel query",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          className: "panel-loading__spinner spin-clockwise",
          name: "sync"
        })
      }))
    });
  }

  if (state === src.LoadingState.Streaming) {
    return (0,jsx_runtime.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: (0,jsx_runtime.jsx)("div", {
        title: "Streaming (click to stop)",
        className: styles.streamIndicator
      })
    });
  }

  return null;
};

function getStyles(theme) {
  return {
    streamIndicator: emotion_css_esm.css`
      width: 10px;
      height: 10px;
      background: ${theme.colors.textFaint};
      box-shadow: 0 0 2px ${theme.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `
  };
}
;
const _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const PanelHeaderMenuTrigger = _ref => {
  let {
    children
  } = _ref,
      divProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [clickCoordinates, setClickCoordinates] = (0,react.useState)({
    x: 0,
    y: 0
  });
  const [panelMenuOpen, setPanelMenuOpen] = (0,react.useState)(false);
  const onMenuToggle = (0,react.useCallback)(event => {
    if (!isClick(clickCoordinates, eventToClickCoordinates(event))) {
      return;
    }

    event.stopPropagation();
    setPanelMenuOpen(!panelMenuOpen);
  }, [clickCoordinates, panelMenuOpen, setPanelMenuOpen]);
  const onMouseDown = (0,react.useCallback)(event => {
    setClickCoordinates(eventToClickCoordinates(event));
  }, [setClickCoordinates]);
  return (0,jsx_runtime.jsx)("header", Object.assign({}, divProps, {
    className: "panel-title-container",
    onClick: onMenuToggle,
    onMouseDown: onMouseDown,
    children: children({
      panelMenuOpen,
      closeMenu: () => setPanelMenuOpen(false)
    })
  }));
};

function isClick(current, clicked) {
  return clicked.x === current.x && clicked.y === current.y;
}

function eventToClickCoordinates(event) {
  return {
    x: Math.floor(event.clientX),
    y: Math.floor(event.clientY)
  };
}
var PanelHeaderMenuItem = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuItem.tsx");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PanelHeaderMenu extends react.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    _defineProperty(this, "renderItems", function (menu) {
      let isSubMenu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return (0,jsx_runtime.jsx)("ul", {
        className: "dropdown-menu dropdown-menu--menu panel-menu",
        role: isSubMenu ? '' : 'menu',
        children: menu.map((menuItem, idx) => {
          return (0,jsx_runtime.jsx)(PanelHeaderMenuItem.u, {
            type: menuItem.type,
            text: menuItem.text,
            iconClassName: menuItem.iconClassName,
            onClick: menuItem.onClick,
            shortcut: menuItem.shortcut,
            children: menuItem.subMenu && _this.renderItems(menuItem.subMenu, true)
          }, `${menuItem.text}${idx}`);
        })
      });
    });
  }

  render() {
    return (0,jsx_runtime.jsx)("div", {
      className: "panel-menu-container dropdown open",
      children: this.renderItems(this.props.items)
    });
  }

}
var selectors = __webpack_require__("./public/app/features/panel/state/selectors.ts");
var guard = __webpack_require__("./public/app/features/library-panels/guard.ts");
var store = __webpack_require__("./public/app/store/store.ts");
var explore = __webpack_require__("./public/app/core/utils/explore.ts");
var main = __webpack_require__("./public/app/features/explore/state/main.ts");
;









function getPanelMenu(dashboard, panel, angularComponent) {
  const onViewPanel = event => {
    event.preventDefault();
    grafana_runtime_src.locationService.partial({
      viewPanel: panel.id
    });
  };

  const onEditPanel = event => {
    event.preventDefault();
    grafana_runtime_src.locationService.partial({
      editPanel: panel.id
    });
  };

  const onSharePanel = event => {
    event.preventDefault();
    (0,utils_panel.Po)(dashboard, panel);
  };

  const onAddLibraryPanel = event => {
    event.preventDefault();
    (0,utils_panel.Kq)(dashboard, panel);
  };

  const onUnlinkLibraryPanel = event => {
    event.preventDefault();
    (0,utils_panel.oe)(panel);
  };

  const onInspectPanel = tab => {
    grafana_runtime_src.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };

  const onMore = event => {
    event.preventDefault();
  };

  const onDuplicatePanel = event => {
    event.preventDefault();
    (0,utils_panel.jN)(dashboard, panel);
  };

  const onCopyPanel = event => {
    event.preventDefault();
    (0,utils_panel.bY)(panel);
  };

  const onRemovePanel = event => {
    event.preventDefault();
    (0,utils_panel.WJ)(dashboard, panel, true);
  };

  const onNavigateToExplore = event => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? url => window.open(`${config/* default.appSubUrl */.ZP.appSubUrl}${url}`) : undefined;
    store.h.dispatch((0,main.m$)(panel, {
      getDataSourceSrv: grafana_runtime_src.getDataSourceSrv,
      getTimeSrv: TimeSrv.$t,
      getExploreUrl: explore.H6,
      openInNewWindow
    }));
  };

  const menu = [];

  if (!panel.isEditing) {
    menu.push({
      text: 'View',
      iconClassName: 'eye',
      onClick: onViewPanel,
      shortcut: 'v'
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: 'Edit',
      iconClassName: 'edit',
      onClick: onEditPanel,
      shortcut: 'e'
    });
  }

  menu.push({
    text: 'Share',
    iconClassName: 'share-alt',
    onClick: onSharePanel,
    shortcut: 'p s'
  });

  if (context_srv.Vt.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery)) {
    menu.push({
      text: 'Explore',
      iconClassName: 'compass',
      shortcut: 'x',
      onClick: onNavigateToExplore
    });
  }

  const inspectMenu = []; 

  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: 'Data',
      onClick: e => onInspectPanel('data')
    });

    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: 'Query',
        onClick: e => onInspectPanel('query')
      });
    }
  }

  inspectMenu.push({
    text: 'Panel JSON',
    onClick: e => onInspectPanel('json')
  });
  menu.push({
    type: 'submenu',
    text: 'Inspect',
    iconClassName: 'info-circle',
    onClick: e => onInspectPanel(),
    shortcut: 'i',
    subMenu: inspectMenu
  });
  const subMenu = [];

  if (dashboard.canEditPanel(panel) && !(panel.isViewing || panel.isEditing)) {
    subMenu.push({
      text: 'Duplicate',
      onClick: onDuplicatePanel,
      shortcut: 'p d'
    });
    subMenu.push({
      text: 'Copy',
      onClick: onCopyPanel
    });

    if ((0,guard.V)(panel)) {
      subMenu.push({
        text: 'Unlink library panel',
        onClick: onUnlinkLibraryPanel
      });
    } else {
      subMenu.push({
        text: 'Create library panel',
        onClick: onAddLibraryPanel
      });
    }
  } 


  if (angularComponent) {
    const scope = angularComponent.getScope();
    const panelCtrl = scope.$$childHead.ctrl;
    const angularMenuItems = panelCtrl.getExtendedMenu();

    for (const item of angularMenuItems) {
      const reactItem = {
        text: item.text,
        href: item.href,
        shortcut: item.shortcut
      };

      if (item.click) {
        reactItem.onClick = () => {
          scope.$eval(item.click, {
            ctrl: panelCtrl
          });
        };
      }

      subMenu.push(reactItem);
    }
  }

  if (!panel.isEditing && subMenu.length) {
    menu.push({
      type: 'submenu',
      text: 'More...',
      iconClassName: 'cube',
      subMenu,
      onClick: onMore
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({
      type: 'divider',
      text: ''
    });
    menu.push({
      text: 'Remove',
      iconClassName: 'trash-alt',
      onClick: onRemovePanel,
      shortcut: 'p r'
    });
  }

  return menu;
}
;




const PanelHeaderMenuProvider = _ref => {
  let {
    panel,
    dashboard,
    children
  } = _ref;
  const [items, setItems] = (0,react.useState)([]);
  const angularComponent = (0,es.useSelector)(state => {
    var _getPanelStateForMode;

    return (_getPanelStateForMode = (0,selectors.i)(state, panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent;
  });
  (0,react.useEffect)(() => {
    setItems(getPanelMenu(dashboard, panel, angularComponent));
  }, [dashboard, panel, angularComponent, setItems]);
  return children({
    items
  });
};
;





const PanelHeaderMenuWrapper = _ref => {
  let {
    show,
    onClose,
    panel,
    dashboard
  } = _ref;

  if (!show) {
    return null;
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.ClickOutsideWrapper, {
    onClick: onClose,
    parent: document,
    children: (0,jsx_runtime.jsx)(PanelHeaderMenuProvider, {
      panel: panel,
      dashboard: dashboard,
      children: _ref2 => {
        let {
          items
        } = _ref2;
        return (0,jsx_runtime.jsx)(PanelHeaderMenu, {
          items: items
        });
      }
    })
  });
};
;



const PanelHeaderNotice = _ref => {
  let {
    notice,
    onClick
  } = _ref;
  const iconName = notice.severity === 'error' || notice.severity === 'warning' ? 'exclamation-triangle' : 'info-circle';
  return (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
    content: notice.text,
    children: notice.inspect ? (0,jsx_runtime.jsx)("div", {
      className: "panel-info-notice pointer",
      onClick: e => onClick(e, notice.inspect),
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    }) : (0,jsx_runtime.jsx)("a", {
      className: "panel-info-notice",
      href: notice.link,
      target: "_blank",
      rel: "noreferrer",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    })
  }, notice.severity);
};
;





const PanelHeaderNotices = _ref => {
  let {
    frames,
    panelId
  } = _ref;
  const openInspect = (0,react.useCallback)((e, tab) => {
    e.stopPropagation();
    grafana_runtime_src.locationService.partial({
      inspect: panelId,
      inspectTab: tab
    });
  }, [panelId]); 

  const notices = {};

  for (const frame of frames) {
    if (!frame.meta || !frame.meta.notices) {
      continue;
    }

    for (const notice of frame.meta.notices) {
      notices[notice.severity] = notice;
    }
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: Object.values(notices).map(notice => (0,jsx_runtime.jsx)(PanelHeaderNotice, {
      notice: notice,
      onClick: openInspect
    }, notice.severity))
  });
};
;
var _Icon, _Icon2;














const PanelHeader = _ref => {
  let {
    panel,
    error,
    isViewing,
    isEditing,
    data,
    alertState,
    dashboard
  } = _ref;

  const onCancelQuery = () => panel.getQueryRunner().cancelQuery();

  const title = panel.getDisplayTitle();
  const className = (0,emotion_css_esm.cx)('panel-header', !(isViewing || isEditing) ? 'grid-drag-handle' : '');
  const styles = (0,grafana_ui_src.useStyles2)(panelStyles);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(PanelHeaderLoadingIndicator, {
      state: data.state,
      onClick: onCancelQuery
    }), (0,jsx_runtime.jsx)(PanelHeaderCorner.Z, {
      panel: panel,
      title: panel.title,
      description: panel.description,
      scopedVars: panel.scopedVars,
      links: (0,linkSuppliers.H)(panel),
      error: error
    }), (0,jsx_runtime.jsx)("div", {
      className: className,
      children: (0,jsx_runtime.jsx)(PanelHeaderMenuTrigger, {
        "data-testid": grafana_e2e_selectors_src.wl.components.Panels.Panel.title(title),
        children: _ref2 => {
          let {
            closeMenu,
            panelMenuOpen
          } = _ref2;
          return (0,jsx_runtime.jsxs)("div", {
            className: "panel-title",
            children: [(0,jsx_runtime.jsx)(PanelHeaderNotices, {
              frames: data.series,
              panelId: panel.id
            }), alertState ? (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
              name: alertState === 'alerting' ? 'heart-break' : 'heart',
              className: "icon-gf panel-alert-icon",
              style: {
                marginRight: '4px'
              },
              size: "sm"
            }) : null, (0,jsx_runtime.jsx)("h2", {
              className: styles.titleText,
              children: title
            }), _Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
              name: "angle-down",
              className: "panel-menu-toggle"
            })), (0,jsx_runtime.jsx)(PanelHeaderMenuWrapper, {
              panel: panel,
              dashboard: dashboard,
              show: panelMenuOpen,
              onClose: closeMenu
            }), data.request && data.request.timeInfo && (0,jsx_runtime.jsxs)("span", {
              className: "panel-time-info",
              children: [_Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: "clock-nine",
                size: "sm"
              })), " ", data.request.timeInfo]
            })]
          });
        }
      })
    })]
  });
};

const panelStyles = theme => {
  return {
    titleText: emotion_css_esm.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${theme.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `
  };
};
var SeriesVisibilityConfigFactory = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
var liveTimer = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
;
function PanelChrome_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const DEFAULT_PLUGIN_ERROR = 'Error in plugin';
class PanelChrome extends react.PureComponent {
  constructor(props) {
    super(props); 

    PanelChrome_defineProperty(this, "timeSrv", (0,TimeSrv.$t)());

    PanelChrome_defineProperty(this, "subs", new Subscription.w0());

    PanelChrome_defineProperty(this, "eventFilter", {
      onlyLocal: true
    });

    PanelChrome_defineProperty(this, "canEditDashboard", () => Boolean(this.props.dashboard.meta.canEdit || this.props.dashboard.meta.canMakeEditable));

    PanelChrome_defineProperty(this, "canAddAnnotation", () => {
      let canAdd = true;

      if (context_srv.Vt.accessControlEnabled()) {
        var _this$props$dashboard;

        canAdd = !!((_this$props$dashboard = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard !== void 0 && _this$props$dashboard.dashboard.canAdd);
      }

      return canAdd && this.canEditDashboard();
    });

    PanelChrome_defineProperty(this, "canEditAnnotation", dashboardId => {
      let canEdit = true;

      if (context_srv.Vt.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard2;

          canEdit = !!((_this$props$dashboard2 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard2 !== void 0 && _this$props$dashboard2.dashboard.canEdit);
        } else {
          var _this$props$dashboard3;

          canEdit = !!((_this$props$dashboard3 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard3 !== void 0 && _this$props$dashboard3.organization.canEdit);
        }
      }

      return canEdit && this.canEditDashboard();
    });

    PanelChrome_defineProperty(this, "canDeleteAnnotation", dashboardId => {
      let canDelete = true;

      if (context_srv.Vt.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard4;

          canDelete = !!((_this$props$dashboard4 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard4 !== void 0 && _this$props$dashboard4.dashboard.canDelete);
        } else {
          var _this$props$dashboard5;

          canDelete = !!((_this$props$dashboard5 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard5 !== void 0 && _this$props$dashboard5.organization.canDelete);
        }
      }

      return canDelete && this.canEditDashboard();
    });

    PanelChrome_defineProperty(this, "getSync", () => this.props.isEditing ? src.DashboardCursorSync.Off : this.props.dashboard.graphTooltip);

    PanelChrome_defineProperty(this, "onInstanceStateChange", value => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: Object.assign({}, this.state.context, {
          instanceState: value
        })
      });
    });

    PanelChrome_defineProperty(this, "onSeriesColorChange", (label, color) => {
      this.onFieldConfigChange(changeSeriesColorConfigFactory(label, color, this.props.panel.fieldConfig));
    });

    PanelChrome_defineProperty(this, "onSeriesVisibilityChange", (label, mode) => {
      this.onFieldConfigChange((0,SeriesVisibilityConfigFactory.N)(label, mode, this.props.panel.fieldConfig, this.state.data.series));
    });

    PanelChrome_defineProperty(this, "onToggleLegendSort", sortKey => {
      const legendOptions = this.props.panel.options.legend; 

      if (!legendOptions) {
        return;
      }

      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;

      if (sortKey !== sortBy) {
        sortDesc = undefined;
      } 


      if (sortDesc === false) {
        sortBy = undefined;
        sortDesc = undefined;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }

      this.onOptionsChange(Object.assign({}, this.props.panel.options, {
        legend: Object.assign({}, legendOptions, {
          sortBy,
          sortDesc
        })
      }));
    });

    PanelChrome_defineProperty(this, "onRefresh", () => {
      const {
        panel,
        isInView,
        width
      } = this.props;

      if (!isInView) {
        this.setState({
          refreshWhenInView: true
        });
        return;
      }

      const timeData = (0,utils_panel.W1)(panel, this.timeSrv.timeRange()); 

      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }

        if (this.state.refreshWhenInView) {
          this.setState({
            refreshWhenInView: false
          });
        }

        panel.runAllPanelQueries(this.props.dashboard.id, this.props.dashboard.getTimezone(), timeData, width);
      } else {
        this.setState({
          data: Object.assign({}, this.state.data, {
            timeRange: this.timeSrv.timeRange()
          }),
          renderCounter: this.state.renderCounter + 1,
          liveTime: undefined
        });
      }
    });

    PanelChrome_defineProperty(this, "onRender", () => {
      const stateUpdate = {
        renderCounter: this.state.renderCounter + 1
      };
      this.setState(stateUpdate);
    });

    PanelChrome_defineProperty(this, "onOptionsChange", options => {
      this.props.panel.updateOptions(options);
    });

    PanelChrome_defineProperty(this, "onFieldConfigChange", config => {
      this.props.panel.updateFieldConfig(config);
    });

    PanelChrome_defineProperty(this, "onPanelError", error => {
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;

      if (this.state.errorMessage !== errorMessage) {
        this.setState({
          errorMessage
        });
      }
    });

    PanelChrome_defineProperty(this, "onPanelErrorRecover", () => {
      this.setState({
        errorMessage: undefined
      });
    });

    PanelChrome_defineProperty(this, "onAnnotationCreate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,api.xD)(anno);
      (0,DashboardQueryRunner.kt)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new src.AnnotationChangeEvent(anno));
    });

    PanelChrome_defineProperty(this, "onAnnotationDelete", async id => {
      await (0,api.Dl)({
        id
      });
      (0,DashboardQueryRunner.kt)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new src.AnnotationChangeEvent({
        id
      }));
    });

    PanelChrome_defineProperty(this, "onAnnotationUpdate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,api._E)(anno);
      (0,DashboardQueryRunner.kt)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new src.AnnotationChangeEvent(anno));
    });

    PanelChrome_defineProperty(this, "onChangeTimeRange", timeRange => {
      this.timeSrv.setTime({
        from: (0,src.toUtc)(timeRange.from),
        to: (0,src.toUtc)(timeRange.to)
      });
    });

    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      refreshWhenInView: false,
      context: {
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        canAddAnnotations: this.canAddAnnotation,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canEditAnnotations: this.canEditAnnotation,
        canDeleteAnnotations: this.canDeleteAnnotation
      },
      data: this.getInitialPanelDataState()
    };
  }

  getPanelContextApp() {
    if (this.props.isEditing) {
      return src.CoreApp.PanelEditor;
    }

    if (this.props.isViewing) {
      return src.CoreApp.PanelViewer;
    }

    return src.CoreApp.Dashboard;
  }

  getInitialPanelDataState() {
    return {
      state: src.LoadingState.NotStarted,
      series: [],
      timeRange: (0,src.getDefaultTimeRange)()
    };
  }

  componentDidMount() {
    const {
      panel,
      dashboard
    } = this.props; 

    this.subs.add(panel.events.subscribe(grafana_runtime_src.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(events._z, this.onRender));
    dashboard.panelInitialized(this.props.panel); 

    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,loadSnapshotData.y)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }

    if (!this.wantsQueryExecution) {
      this.setState({
        isFirstLoad: false
      });
    }

    this.subs.add(panel.getQueryRunner().getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe({
      next: data => this.onDataUpdate(data)
    })); 

    liveTimer.A.listen(this);
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
    liveTimer.A.remove(this);
  }

  liveTimeChanged(liveTime) {
    const {
      data
    } = this.state;

    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();

      if (delta < 100) {
        console.log('Skip tick render', this.props.panel.title, delta);
        return;
      }
    }

    this.setState({
      liveTime
    });
  }

  componentDidUpdate(prevProps) {
    const {
      isInView,
      width
    } = this.props;
    const {
      context
    } = this.state;
    const app = this.getPanelContextApp();

    if (context.app !== app) {
      this.setState({
        context: Object.assign({}, context, {
          app
        })
      });
    } 


    if (isInView !== prevProps.isInView) {
      if (isInView) {
        if (this.state.refreshWhenInView) {
          this.onRefresh();
        }
      }
    } 


    if (width !== prevProps.width) {
      liveTimer.A.updateInterval(this);
    }
  } 


  onDataUpdate(data) {
    const {
      dashboard,
      panel,
      plugin
    } = this.props; 

    if (plugin.meta.skipDataQuery) {
      this.setState({
        data: this.getInitialPanelDataState()
      });
      return;
    }

    let {
      isFirstLoad
    } = this.state;
    let errorMessage;

    switch (data.state) {
      case src.LoadingState.Loading:
        if (this.state.data.state === src.LoadingState.Loading) {
          return;
        }

        break;

      case src.LoadingState.Error:
        const {
          error
        } = data;

        if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }

        break;

      case src.LoadingState.Done:
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map(frame => (0,src.toDataFrameDTO)(frame));
        }

        if (isFirstLoad) {
          isFirstLoad = false;
        }

        break;
    }

    this.setState({
      isFirstLoad,
      errorMessage,
      data,
      liveTime: undefined
    });
  }

  get hasPanelSnapshot() {
    const {
      panel
    } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }

  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }

  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === src.LoadingState.Done || pluginMeta.skipDataQuery;
  }

  skipFirstRender(loadingState) {
    const {
      isFirstLoad
    } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === src.LoadingState.Loading || loadingState === src.LoadingState.NotStarted);
  }

  renderPanel(width, height) {
    var _ref, _this$state$liveTime;

    const {
      panel,
      plugin,
      dashboard
    } = this.props;
    const {
      renderCounter,
      data
    } = this.state;
    const {
      theme
    } = config.ZP;
    const {
      state: loadingState
    } = data; 

    if (this.skipFirstRender(loadingState)) {
      return null;
    } 


    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      profiler.r.renderingCompleted();
    }

    const PanelComponent = plugin.panel;
    const timeRange = (_ref = (_this$state$liveTime = this.state.liveTime) !== null && _this$state$liveTime !== void 0 ? _this$state$liveTime : data.timeRange) !== null && _ref !== void 0 ? _ref : this.timeSrv.timeRange();
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    const panelWidth = width - chromePadding * 2 - constants.QO;
    const innerPanelHeight = height - headerHeight - chromePadding * 2 - constants.QO;
    const panelContentClassNames = classnames_default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    const panelOptions = panel.getOptions(); 

    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: (0,jsx_runtime.jsx)("div", {
        className: panelContentClassNames,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.PanelContextProvider, {
          value: this.state.context,
          children: (0,jsx_runtime.jsx)(PanelComponent, {
            id: panel.id,
            data: data,
            title: panel.title,
            timeRange: timeRange,
            timeZone: this.props.dashboard.getTimezone(),
            options: panelOptions,
            fieldConfig: panel.fieldConfig,
            transparent: panel.transparent,
            width: panelWidth,
            height: innerPanelHeight,
            renderCounter: renderCounter,
            replaceVariables: panel.replaceVariables,
            onOptionsChange: this.onOptionsChange,
            onFieldConfigChange: this.onFieldConfigChange,
            onChangeTimeRange: this.onChangeTimeRange,
            eventBus: dashboard.events
          })
        })
      })
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; 

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames_default()({
      'panel-container': true,
      'panel-container--absolute': isSoloRoute(grafana_runtime_src.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    return (0,jsx_runtime.jsxs)("section", {
      className: containerClassNames,
      "aria-label": grafana_e2e_selectors_src.wl.components.Panels.Panel.containerByTitle(panel.title),
      children: [(0,jsx_runtime.jsx)(PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isEditing: isEditing,
        isViewing: isViewing,
        alertState: alertState,
        data: data
      }), (0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundary, {
        dependencies: [data, plugin, panel.getOptions()],
        onError: this.onPanelError,
        onRecover: this.onPanelErrorRecover,
        children: _ref2 => {
          let {
            error
          } = _ref2;

          if (error) {
            return null;
          }

          return this.renderPanel(width, height);
        }
      })]
    });
  }

}
;
function PanelChromeAngular_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class PanelChromeAngularUnconnected extends react.PureComponent {
  constructor(props) {
    super(props);

    PanelChromeAngular_defineProperty(this, "element", null);

    PanelChromeAngular_defineProperty(this, "timeSrv", (0,TimeSrv.$t)());

    PanelChromeAngular_defineProperty(this, "scopeProps", void 0);

    PanelChromeAngular_defineProperty(this, "subs", new Subscription.w0());

    this.state = {
      data: {
        state: src.LoadingState.NotStarted,
        series: [],
        timeRange: (0,src.getDefaultTimeRange)()
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.loadAngularPanel(); 

    const queryRunner = panel.getQueryRunner(); 

    this.subs.add(queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    }));
  }

  onPanelDataUpdate(data) {
    let errorMessage;

    if (data.state === src.LoadingState.Error) {
      const {
        error
      } = data;

      if (error) {
        if (errorMessage !== error.message) {
          errorMessage = error.message;
        }
      }
    }

    this.setState({
      data,
      errorMessage
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      plugin,
      height,
      width,
      panel
    } = this.props;

    if (prevProps.plugin !== plugin) {
      this.loadAngularPanel();
    }

    if (prevProps.width !== width || prevProps.height !== height) {
      if (this.scopeProps) {
        this.scopeProps.size.height = this.getInnerPanelHeight();
        this.scopeProps.size.width = this.getInnerPanelWidth();
        panel.render();
      }
    }
  }

  getInnerPanelHeight() {
    const {
      plugin,
      height
    } = this.props;
    const {
      theme
    } = config.ZP;
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return height - headerHeight - chromePadding * 2 - constants.QO;
  }

  getInnerPanelWidth() {
    const {
      plugin,
      width
    } = this.props;
    const {
      theme
    } = config.ZP;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return width - chromePadding * 2 - constants.QO;
  }

  loadAngularPanel() {
    const {
      panel,
      dashboard,
      setPanelAngularComponent
    } = this.props; 

    if (!this.element) {
      return;
    }

    const loader = (0,grafana_runtime_src.getAngularLoader)();
    const template = '<plugin-component type="panel" class="panel-height-helper"></plugin-component>';
    this.scopeProps = {
      panel: panel,
      dashboard: dashboard,
      size: {
        width: this.getInnerPanelWidth(),
        height: this.getInnerPanelHeight()
      }
    };
    setPanelAngularComponent({
      key: panel.key,
      angularComponent: loader.load(this.element, this.scopeProps, template)
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; 

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames_default()({
      'panel-container': true,
      'panel-container--absolute': isSoloRoute(grafana_runtime_src.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      'panel-has-alert': panel.alert !== undefined,
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    const panelContentClassNames = classnames_default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    return (0,jsx_runtime.jsxs)("div", {
      className: containerClassNames,
      "aria-label": grafana_e2e_selectors_src.wl.components.Panels.Panel.containerByTitle(panel.title),
      children: [(0,jsx_runtime.jsx)(PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isViewing: isViewing,
        isEditing: isEditing,
        data: data,
        alertState: alertState
      }), (0,jsx_runtime.jsx)("div", {
        className: panelContentClassNames,
        children: (0,jsx_runtime.jsx)("div", {
          ref: element => this.element = element,
          className: "panel-height-helper"
        })
      })]
    });
  }

}

const mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularComponent: (_getPanelStateForMode = (0,selectors.i)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  setPanelAngularComponent: reducers.o8
};
const PanelChromeAngular = (0,es.connect)(mapStateToProps, mapDispatchToProps)(PanelChromeAngularUnconnected);
;
function DashboardPanel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const DashboardPanel_mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];

  if (!panelState) {
    return {
      plugin: null
    };
  }

  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};

const DashboardPanel_mapDispatchToProps = {
  initPanelState: actions.JI,
  setPanelInstanceState: reducers.pC
};
const connector = (0,es.connect)(DashboardPanel_mapStateToProps, DashboardPanel_mapDispatchToProps);
class DashboardPanelUnconnected extends react.PureComponent {
  constructor() {
    super(...arguments);

    DashboardPanel_defineProperty(this, "onInstanceStateChange", value => {
      this.props.setPanelInstanceState({
        key: this.props.stateKey,
        value
      });
    });

    DashboardPanel_defineProperty(this, "onVisibilityChange", v => {
      this.props.panel.isInView = v;
    });

    DashboardPanel_defineProperty(this, "onPanelLoad", () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    });
  }

  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;

    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }

  render() {
    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      lazy,
      plugin
    } = this.props;

    const renderPanelChrome = isInView => plugin && (plugin.angularPanelCtrl ? (0,jsx_runtime.jsx)(PanelChromeAngular, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height
    }) : (0,jsx_runtime.jsx)(PanelChrome, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height,
      onInstanceStateChange: this.onInstanceStateChange
    }));

    return lazy ? (0,jsx_runtime.jsx)(LazyLoader, {
      width: width,
      height: height,
      onChange: this.onVisibilityChange,
      onLoad: this.onPanelLoad,
      children: _ref => {
        let {
          isInView
        } = _ref;
        return renderPanelChrome(isInView);
      }
    }) : renderPanelChrome(true);
  }

}

DashboardPanel_defineProperty(DashboardPanelUnconnected, "defaultProps", {
  lazy: true
});

const DashboardPanel = connector(DashboardPanelUnconnected);

 }),

 "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
 var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/types.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var InfoMode;

(function (InfoMode) {
  InfoMode["Error"] = "Error";
  InfoMode["Info"] = "Info";
  InfoMode["Links"] = "Links";
})(InfoMode || (InfoMode = {}));

class PanelHeaderCorner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "timeSrv", (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__ .$t)());

    _defineProperty(this, "getInfoMode", () => {
      const {
        panel,
        error
      } = this.props;

      if (error) {
        return InfoMode.Error;
      }

      if (!!panel.description) {
        return InfoMode.Info;
      }

      if (panel.links && panel.links.length) {
        return InfoMode.Links;
      }

      return undefined;
    });

    _defineProperty(this, "getInfoContent", () => {
      const {
        panel
      } = this.props;
      const markdown = panel.description || '';
      const interpolatedMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(markdown, panel.scopedVars);
      const markedInterpolatedMarkdown = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(interpolatedMarkdown);
      const links = this.props.links && this.props.links.getLinks(panel.replaceVariables);
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "panel-info-content markdown-html",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: markedInterpolatedMarkdown
          }
        }), links && links.length > 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
          className: "panel-info-corner-links",
          children: links.map((link, idx) => {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                className: "panel-info-corner-links__item",
                href: link.href,
                target: link.target,
                children: link.title
              })
            }, idx);
          })
        })]
      });
    });

    _defineProperty(this, "onClickError", () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__ .q.Error
      });
    });
  }

  renderCornerType(infoMode, content, onClick) {
    const theme = infoMode === InfoMode.Error ? 'error' : 'info';
    const className = `panel-info-corner panel-info-corner--${infoMode.toLowerCase()}`;
    const ariaLabel = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ .wl.components.Panels.Panel.headerCornerInfo(infoMode.toLowerCase());
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
      content: content,
      placement: "top-start",
      theme: theme,
      interactive: true,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
        className: className,
        onClick: onClick,
        "aria-label": ariaLabel,
        children: [_i || (_i = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          "aria-hidden": true,
          className: "fa"
        })), _span || (_span = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "panel-info-corner-inner"
        }))]
      })
    });
  }

  render() {
    const {
      error
    } = this.props;
    const infoMode = this.getInfoMode();

    if (!infoMode) {
      return null;
    }

    if (infoMode === InfoMode.Error && error) {
      return this.renderCornerType(infoMode, error, this.onClickError);
    }

    if (infoMode === InfoMode.Info || infoMode === InfoMode.Links) {
      return this.renderCornerType(infoMode, this.getInfoContent);
    }

    return null;
  }

}
 const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderCorner);

 }),

 "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "N": () => ( seriesVisibilityConfigFactory)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names) {
  var _property;

  let mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude;
  let property = arguments.length > 2 ? arguments[2] : undefined;
  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = function (current, displayName) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude;
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return [...names];
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

 }),

 "./public/app/features/dashboard/state/initDashboard.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "ZQ": () => ( getNewDashboardModelData),
  "mV": () => ( initDashboard),
  "f1": () => ( removeDashboardToFetchFromLocalStorage),
  "$M": () => ( setDashboardToFetchFromLocalStorage)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var keybindingSrv = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
var store = __webpack_require__("./public/app/core/store.ts");
var DashboardLoaderSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
var dashboardWatcher = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
var state_actions = __webpack_require__("./public/app/features/variables/state/actions.ts");
var selectors = __webpack_require__("./public/app/features/variables/state/selectors.ts");
var DashboardModel = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
;

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: grafana_runtime_src.MetaAnalyticsEventName.DashboardView
  };
  (0,grafana_runtime_src.reportMetaAnalytics)(eventData);
}
var reducers = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
;




















async function fetchDashboard(args, dispatch, getState) {
  const model = store.Z.getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case types.vq.Home:
        {
          const dashDTO = await backend_srv.ae.get('/api/dashboards/home'); 

          if (dashDTO.redirectUri) {
            const newUrl = src.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            grafana_runtime_src.locationService.replace(newUrl);
            return null;
          } 


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case types.vq.Normal:
        {
          const dashDTO = await DashboardLoaderSrv.pD.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            const dashboardUrl = src.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = grafana_runtime_src.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              grafana_runtime_src.locationService.replace(Object.assign({}, grafana_runtime_src.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case types.vq.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    if (err.cancelled) {
      return null;
    }

    dispatch((0,reducers.jA)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    dispatch((0,reducers.sf)()); 

    const dashDTO = await fetchDashboard(args, dispatch, getState); 

    if (!dashDTO) {
      return;
    } 


    dispatch((0,reducers.Nv)()); 

    let dashboard;

    try {
      dashboard = new DashboardModel.f(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,reducers.jA)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } 


    const storeState = getState();
    const queryParams = grafana_runtime_src.locationService.getSearchObject();

    if (!queryParams.orgId) {
      grafana_runtime_src.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } 


    const timeSrv = (0,TimeSrv.$t)();
    const dashboardSrv = (0,DashboardSrv.h4)(); 

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,utils.mn)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); 

    await dispatch((0,state_actions.LX)(dashboardUid, dashboard)); 

    const runner = (0,DashboardQueryRunner.Tl)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,selectors.cp)(getState()) !== dashboardUid) {
      return;
    } 


    if (getState().dashboard.initPhase !== types.bG.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); 

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      keybindingSrv.K.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,actions.$l)((0,appNotification.t_)('Dashboard init failed', err)));
      console.error(err);
    } 


    if (args.routeName !== types.vq.New) {
      emitDashboardViewEvent(dashboard); 

      dashboardWatcher.H.watch(dashboard.uid);
    } else {
      dashboardWatcher.H.leave();
    } 


    if (dashboard.weekStart !== '') {
      (0,src.setWeekStart)(dashboard.weekStart);
    } else {
      (0,src.setWeekStart)(grafana_runtime_src.config.bootData.user.weekStart);
    } 


    dispatch((0,reducers.dS)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  store.Z.setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  store.Z["delete"](DASHBOARD_FROM_LS_KEY);
}

 }),

 "./public/app/features/dashboard/utils/loadSnapshotData.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "y": () => ( loadSnapshotData)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
 var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
 var _query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
 var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
 var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ .F9)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ .g();
  const options = {
    dashboard,
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
  };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_5__ .W1)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ .$t)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_1__ .vc.theme2,
      timeZone: dashboard.getTimezone()
    }),
    annotations
  };
}

 }),

 "./public/app/features/inspector/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "q": () => ( InspectTab)
 });
let InspectTab;

(function (InspectTab) {
  InspectTab["Data"] = "data";
  InspectTab["Meta"] = "meta";
  InspectTab["Error"] = "error";
  InspectTab["Stats"] = "stats";
  InspectTab["JSON"] = "json";
  InspectTab["Query"] = "query";
  InspectTab["Actions"] = "actions";
})(InspectTab || (InspectTab = {}));

 }),

 "./public/app/features/panel/panellinks/linkSuppliers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( getPanelLinksSupplier),
   "n": () => ( getFieldLinksSupplier)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _link_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");



const getFieldLinksSupplier = value => {
  const links = value.field.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: replaceVariables => {
      const scopedVars = {};

      if (value.view) {
        const {
          dataFrame
        } = value.view;
        scopedVars['__series'] = {
          value: {
            name: dataFrame.name,
            refId: dataFrame.refId
          },
          text: 'Series'
        };
        const field = value.colIndex !== undefined ? dataFrame.fields[value.colIndex] : undefined;

        if (field) {
          scopedVars['__field'] = {
            value: {
              name: field.name,
              labels: field.labels
            },
            text: 'Field'
          };

          if (value.rowIndex !== undefined && value.rowIndex >= 0) {
            const {
              timeField
            } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getTimeField)(dataFrame);
            scopedVars['__value'] = {
              value: {
                raw: field.values.get(value.rowIndex),
                numeric: value.display.numeric,
                text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
                time: timeField ? timeField.values.get(value.rowIndex) : undefined
              },
              text: 'Value'
            };
          } 


          if (value.view) {
            scopedVars['__data'] = {
              value: {
                name: dataFrame.name,
                refId: dataFrame.refId,
                fields: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayValuesProxy)({
                  frame: dataFrame,
                  rowIndex: value.rowIndex
                })
              },
              text: 'Data'
            };
          }
        } else {
          scopedVars['__value'] = {
            value: {
              raw: value.display.numeric,
              numeric: value.display.numeric,
              text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
              calc: value.name
            },
            text: 'Value'
          };
        }
      } else {
        console.log('VALUE', value);
      }

      const replace = (value, vars, fmt) => {
        const finalVars = Object.assign({}, scopedVars, vars);
        return replaceVariables(value, finalVars, fmt);
      };

      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__ .Bq)().getDataLinkUIModel(link, replace, value);
      });
    }
  };
};
const getPanelLinksSupplier = panel => {
  const links = panel.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: () => {
      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__ .Bq)().getDataLinkUIModel(link, panel.replaceVariables, panel);
      });
    }
  };
};

 }),

 "./public/app/features/panel/state/selectors.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "i": () => ( getPanelStateForModel)
 });
function getPanelStateForModel(state, model) {
  return state.panels[model.key];
}

 })

}]);