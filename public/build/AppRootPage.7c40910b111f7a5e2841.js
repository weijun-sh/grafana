"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[295],{

 "./public/app/angular/core_module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
   "hF": () => ( coreModule),
   "rb": () => ( angularModules)
 });
 var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
 var angular__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

const coreModule = angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.core', ['ngRoute']); 

const angularModules = [coreModule, angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.controllers', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.directives', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.factories', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.services', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.filters', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.routes', [])];

 const __WEBPACK_DEFAULT_EXPORT__ = (coreModule);

 }),

 "./public/app/features/plugins/components/AppRootPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( components_AppRootPage),
  "getAppPluginPageError": () => ( getAppPluginPageError)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var react_dom = __webpack_require__("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
;
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ELEMENT_TYPE_HTML = 'html';
var ELEMENT_TYPE_SVG = 'svg';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var validateElementType = function (domElement, elementType) {
    if (elementType === ELEMENT_TYPE_HTML) {
        return domElement instanceof HTMLElement;
    }
    if (elementType === ELEMENT_TYPE_SVG) {
        return domElement instanceof SVGElement;
    }
    throw new Error("Unrecognized element type \"" + elementType + "\" for validateElementType.");
};
var createPortalNode = function (elementType, options) {
    var initialProps = {};
    var parent;
    var lastPlaceholder;
    var element;
    if (elementType === ELEMENT_TYPE_HTML) {
        element = document.createElement('div');
    }
    else if (elementType === ELEMENT_TYPE_SVG) {
        element = document.createElementNS(SVG_NAMESPACE, 'g');
    }
    else {
        throw new Error("Invalid element type \"" + elementType + "\" for createPortalNode: must be \"html\" or \"svg\".");
    }
    if (options && typeof options === "object") {
        for (var _i = 0, _a = Object.entries(options.attributes); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            element.setAttribute(key, value);
        }
    }
    var portalNode = {
        element: element,
        elementType: elementType,
        setPortalProps: function (props) {
            initialProps = props;
        },
        getInitialPortalProps: function () {
            return initialProps;
        },
        mount: function (newParent, newPlaceholder) {
            if (newPlaceholder === lastPlaceholder) {
                return;
            }
            portalNode.unmount();
            if (newParent !== parent) {
                if (!validateElementType(newParent, elementType)) {
                    throw new Error("Invalid element type for portal: \"" + elementType + "\" portalNodes must be used with " + elementType + " elements, but OutPortal is within <" + newParent.tagName + ">.");
                }
            }
            newParent.replaceChild(portalNode.element, newPlaceholder);
            parent = newParent;
            lastPlaceholder = newPlaceholder;
        },
        unmount: function (expectedPlaceholder) {
            if (expectedPlaceholder && expectedPlaceholder !== lastPlaceholder) {
                return;
            }
            if (parent && lastPlaceholder) {
                parent.replaceChild(lastPlaceholder, portalNode.element);
                parent = undefined;
                lastPlaceholder = undefined;
            }
        }
    };
    return portalNode;
};
var InPortal =  (function (_super) {
    __extends(InPortal, _super);
    function InPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.addPropsChannel = function () {
            Object.assign(_this.props.node, {
                setPortalProps: function (props) {
                    _this.setState({ nodeProps: props });
                }
            });
        };
        _this.state = {
            nodeProps: _this.props.node.getInitialPortalProps(),
        };
        return _this;
    }
    InPortal.prototype.componentDidMount = function () {
        this.addPropsChannel();
    };
    InPortal.prototype.componentDidUpdate = function () {
        this.addPropsChannel();
    };
    InPortal.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, node = _a.node;
        return react_dom.createPortal(react.Children.map(children, function (child) {
            if (!react.isValidElement(child))
                return child;
            return react.cloneElement(child, _this.state.nodeProps);
        }), node.element);
    };
    return InPortal;
}(react.PureComponent));
var OutPortal =  (function (_super) {
    __extends(OutPortal, _super);
    function OutPortal(props) {
        var _this = _super.call(this, props) || this;
        _this.placeholderNode = react.createRef();
        _this.passPropsThroughPortal();
        return _this;
    }
    OutPortal.prototype.passPropsThroughPortal = function () {
        var propsForTarget = Object.assign({}, this.props, { node: undefined });
        this.props.node.setPortalProps(propsForTarget);
    };
    OutPortal.prototype.componentDidMount = function () {
        var node = this.props.node;
        this.currentPortalNode = node;
        var placeholder = this.placeholderNode.current;
        var parent = placeholder.parentNode;
        node.mount(parent, placeholder);
        this.passPropsThroughPortal();
    };
    OutPortal.prototype.componentDidUpdate = function () {
        var node = this.props.node;
        if (this.currentPortalNode && node !== this.currentPortalNode) {
            this.currentPortalNode.unmount(this.placeholderNode.current);
            this.currentPortalNode = node;
        }
        var placeholder = this.placeholderNode.current;
        var parent = placeholder.parentNode;
        node.mount(parent, placeholder);
        this.passPropsThroughPortal();
    };
    OutPortal.prototype.componentWillUnmount = function () {
        var node = this.props.node;
        node.unmount(this.placeholderNode.current);
    };
    OutPortal.prototype.render = function () {
        return react.createElement("div", { ref: this.placeholderNode });
    };
    return OutPortal;
}(react.PureComponent));
var createHtmlPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_HTML);
var createSvgPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_SVG);

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var core_module = __webpack_require__("./public/app/angular/core_module.ts");
var config = __webpack_require__("./public/app/core/config.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NavModelSrv {
  constructor() {
    _defineProperty(this, "navItems", void 0);

    this.navItems = config.ZP.bootData.navTree;
  }

  getCfgNode() {
    return this.navItems.find(navItem => navItem.id === 'cfg');
  }

  getNav() {
    var _nav$main;

    let children = this.navItems;
    const nav = {
      breadcrumbs: []
    };

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (const id of args) {
      if (typeof id === 'number') {
        nav.main = nav.breadcrumbs[id];
        break;
      }

      const node = children.find(child => child.id === id);

      if (node) {
        var _node$children;

        nav.breadcrumbs.push(node);
        nav.node = node;
        nav.main = node;
        children = (_node$children = node.children) !== null && _node$children !== void 0 ? _node$children : [];
      }
    }

    if ((_nav$main = nav.main) !== null && _nav$main !== void 0 && _nav$main.children) {
      for (const item of nav.main.children) {
        var _nav$node;

        item.active = item.url === ((_nav$node = nav.node) === null || _nav$node === void 0 ? void 0 : _nav$node.url);
      }
    }

    return nav;
  }

  getNotFoundNav() {
    return getNotFoundNav(); 
  }

}
NavModelSrv.$inject = [];
function getExceptionNav(error) {
  console.error(error);
  return getWarningNav('Exception thrown', 'See console for details');
}
function getNotFoundNav() {
  return getWarningNav('Page not found', '404 Error');
}
function getWarningNav(text, subTitle) {
  const node = {
    text,
    subTitle,
    icon: 'exclamation-triangle'
  };
  return {
    breadcrumbs: [node],
    node: node,
    main: node
  };
}
core_module.ZP.service('navModelSrv', NavModelSrv);
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var PageLoader = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
var core = __webpack_require__("./public/app/core/core.ts");
var pluginSettings = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
var plugin_loader = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _div, _PageLoader;

function AppRootPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function getAppPluginPageError(meta) {
  if (!meta) {
    return 'Unknown Plugin';
  }

  if (meta.type !== src.PluginType.app) {
    return 'Plugin must be an app';
  }

  if (!meta.enabled) {
    return 'Application Not Enabled';
  }

  return null;
}

class AppRootPage extends react.Component {
  constructor(props) {
    super(props);

    AppRootPage_defineProperty(this, "onNavChanged", nav => {
      this.setState({
        nav
      });
    });

    this.state = {
      loading: true,
      portalNode: createHtmlPortalNode()
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.location.pathname.startsWith('/a/');
  }

  async loadPluginSettings() {
    const {
      params
    } = this.props.match;

    try {
      const app = await (0,pluginSettings.a)(params.pluginId).then(info => {
        const error = getAppPluginPageError(info);

        if (error) {
          core.h$.emit(src.AppEvents.alertError, [error]);
          this.setState({
            nav: getWarningNav(error)
          });
          return null;
        }

        return (0,plugin_loader.Av)(info);
      });
      this.setState({
        plugin: app,
        loading: false,
        nav: undefined
      });
    } catch (err) {
      this.setState({
        plugin: null,
        loading: false,
        nav:  false ? 0 : getNotFoundNav()
      });
    }
  }

  componentDidMount() {
    this.loadPluginSettings();
  }

  componentDidUpdate(prevProps) {
    const {
      params
    } = this.props.match;

    if (prevProps.match.params.pluginId !== params.pluginId) {
      this.setState({
        loading: true
      });
      this.loadPluginSettings();
    }
  }

  render() {
    const {
      loading,
      plugin,
      nav,
      portalNode
    } = this.state;

    if (plugin && !plugin.root) {
      return _div || (_div = (0,jsx_runtime.jsx)("div", {
        children: "No Root App"
      }));
    }

    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(InPortal, {
        node: portalNode,
        children: plugin && plugin.root && (0,jsx_runtime.jsx)(plugin.root, {
          meta: plugin.meta,
          basename: this.props.match.url,
          onNavChanged: this.onNavChanged,
          query: this.props.queryParams,
          path: this.props.location.pathname
        })
      }), nav ? (0,jsx_runtime.jsx)(Page.Z, {
        navModel: nav,
        children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
          isLoading: loading,
          children: (0,jsx_runtime.jsx)(OutPortal, {
            node: portalNode
          })
        })
      }) : (0,jsx_runtime.jsxs)(Page.Z, {
        children: [(0,jsx_runtime.jsx)(OutPortal, {
          node: portalNode
        }), loading && (_PageLoader || (_PageLoader = (0,jsx_runtime.jsx)(PageLoader.Z, {})))]
      })]
    });
  }

}

 const components_AppRootPage = (AppRootPage);

 })

}]);