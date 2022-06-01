(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7385],{

/***/ "./public/app/angular/AngularLocationWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AngularLocationWrapper)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

 // Ref: https://github.com/angular/angular.js/blob/ae8e903edf88a83fedd116ae02c0628bf72b150c/src/ng/location.js#L5

const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ftp: 21
};
class AngularLocationWrapper {
  constructor() {
    this.absUrl = this.wrapInDeprecationWarning(this.absUrl);
    this.hash = this.wrapInDeprecationWarning(this.hash);
    this.host = this.wrapInDeprecationWarning(this.host);
    this.path = this.wrapInDeprecationWarning(this.path);
    this.port = this.wrapInDeprecationWarning(this.port, 'window.location');
    this.protocol = this.wrapInDeprecationWarning(this.protocol, 'window.location');
    this.replace = this.wrapInDeprecationWarning(this.replace);
    this.search = this.wrapInDeprecationWarning(this.search);
    this.state = this.wrapInDeprecationWarning(this.state);
    this.url = this.wrapInDeprecationWarning(this.url);
  }

  wrapInDeprecationWarning(fn, replacement) {
    let self = this;
    return function wrapper() {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.deprecationWarning)('$location', fn.name, replacement || 'locationService');
      return fn.apply(self, arguments);
    };
  }

  absUrl() {
    return `${window.location.origin}${this.url()}`;
  }

  hash(newHash) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: hash');

    if (!newHash) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().hash.slice(1);
    } else {
      throw new Error('AngularLocationWrapper method not implemented.');
    }
  }

  host() {
    return new URL(window.location.href).hostname;
  }

  path(pathname) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: path');
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();

    if (pathname !== undefined && pathname !== null) {
      let parsedPath = String(pathname);
      parsedPath = parsedPath.startsWith('/') ? parsedPath : `/${parsedPath}`;
      const url = new URL(`${window.location.origin}${parsedPath}`);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({
        pathname: url.pathname,
        search: url.search.length > 0 ? url.search : location.search,
        hash: url.hash.length > 0 ? url.hash : location.hash
      });
      return this;
    }

    if (pathname === null) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      return this;
    }

    return location.pathname;
  }

  port() {
    const url = new URL(window.location.href);
    return parseInt(url.port, 10) || DEFAULT_PORTS[url.protocol] || null;
  }

  protocol() {
    return new URL(window.location.href).protocol.slice(0, -1);
  }

  replace() {
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  search(search, paramValue) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: search');

    if (!search) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();
    }

    if (search && arguments.length > 1) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        [search]: paramValue
      });
      return this;
    }

    if (search) {
      let newQuery;

      if (typeof search === 'object') {
        newQuery = Object.assign({}, search);
      } else {
        newQuery = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationSearchToObject)(search);
      }

      for (const key of Object.keys(newQuery)) {
        // removing params with null | undefined
        if (newQuery[key] === null || newQuery[key] === undefined) {
          delete newQuery[key];
        }
      }

      const updatedUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname, newQuery);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(updatedUrl);
    }

    return this;
  }

  state(state) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: state');
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  url(newUrl) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: url');

    if (newUrl !== undefined) {
      if (newUrl.startsWith('#')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          hash: newUrl
        }));
      } else if (newUrl.startsWith('?')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          search: newUrl
        }));
      } else if (newUrl.trim().length === 0) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      } else {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(newUrl);
      }

      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService;
    }

    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();
    return `${location.pathname}${location.search}${location.hash}`;
  }

}

/***/ }),

/***/ "./public/app/angular/core_module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hF": () => (/* binding */ coreModule),
/* harmony export */   "rb": () => (/* binding */ angularModules)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

const coreModule = angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.core', ['ngRoute']); // legacy modules

const angularModules = [coreModule, angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.controllers', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.directives', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.factories', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.services', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.filters', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.routes', [])];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreModule);

/***/ }),

/***/ "./public/app/angular/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AngularApp": () => (/* reexport */ AngularApp),
  "coreModule": () => (/* reexport */ core_module/* coreModule */.hF)
});

// EXTERNAL MODULE: ./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/core.js
var core = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/core.js");
var core_default = /*#__PURE__*/__webpack_require__.n(core);
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/angular/core_module.ts
var core_module = __webpack_require__("./public/app/angular/core_module.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var events = __webpack_require__("./public/app/types/events.ts");
;// CONCATENATED MODULE: ./public/app/angular/panel/panel_directive.ts
// @ts-ignore






const panelTemplate = `
  <ng-transclude class="panel-height-helper"></ng-transclude>
`;
core_module/* coreModule.directive */.hF.directive('grafanaPanel', ["$rootScope", "$document", "$timeout", ($rootScope, $document, $timeout) => {
  return {
    restrict: 'E',
    template: panelTemplate,
    transclude: true,
    scope: {
      ctrl: '='
    },
    link: (scope, elem) => {
      const ctrl = scope.ctrl;
      const panel = scope.ctrl.panel;
      const subs = new Subscription/* Subscription */.w0();
      let panelScrollbar;

      function resizeScrollableContent() {
        if (panelScrollbar) {
          panelScrollbar.update();
        }
      }

      ctrl.events.on(src.PanelEvents.componentDidMount, () => {
        if (ctrl.__proto__.constructor.scrollable) {
          const scrollRootClass = 'baron baron__root baron__clipper panel-content--scrollable';
          const scrollerClass = 'baron__scroller';
          const scrollBarHTML = `
            <div class="baron__track">
              <div class="baron__bar"></div>
            </div>
          `;
          const scrollRoot = elem;
          const scroller = elem.find(':first').find(':first');
          scrollRoot.addClass(scrollRootClass);
          $(scrollBarHTML).appendTo(scrollRoot);
          scroller.addClass(scrollerClass);
          panelScrollbar = core_default()({
            root: scrollRoot[0],
            scroller: scroller[0],
            bar: '.baron__bar',
            barOnCls: '_scrollbar',
            scrollingCls: '_scrolling'
          });
          panelScrollbar.scroll();
        }
      });

      function updateDimensionsFromParentScope() {
        ctrl.height = scope.$parent.$parent.size.height;
        ctrl.width = scope.$parent.$parent.size.width;
      }

      updateDimensionsFromParentScope(); // Pass PanelModel events down to angular controller event emitter

      subs.add(panel.events.subscribe(grafana_runtime_src.RefreshEvent, () => {
        updateDimensionsFromParentScope();
        ctrl.events.emit('refresh');
      }));
      subs.add(panel.events.subscribe(events/* RenderEvent */._z, event => {
        var _event$payload;

        // this event originated from angular so no need to bubble it back
        if ((_event$payload = event.payload) !== null && _event$payload !== void 0 && _event$payload.fromAngular) {
          return;
        }

        updateDimensionsFromParentScope();
        $timeout(() => {
          resizeScrollableContent();
          ctrl.events.emit('render');
        });
      }));
      subs.add(ctrl.events.subscribe(events/* RenderEvent */._z, event => {
        // this event originated from angular so bubble it to react so the PanelChromeAngular can update the panel header alert state
        if (event.payload) {
          event.payload.fromAngular = true;
          panel.events.publish(event);
        }
      }));
      scope.$on('$destroy', () => {
        elem.off(); // Remove PanelModel.event subs

        subs.unsubscribe(); // Remove Angular controller event subs

        ctrl.events.emit(src.PanelEvents.panelTeardown);
        ctrl.events.removeAllListeners();

        if (panelScrollbar) {
          panelScrollbar.dispose();
        }
      });
      panel.events.publish(events/* PanelDirectiveReadyEvent */.GT);
    }
  };
}]);
// EXTERNAL MODULE: ./public/app/angular/panel/query_ctrl.ts
var query_ctrl = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");
// EXTERNAL MODULE: ./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js
var angular = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
var angular_default = /*#__PURE__*/__webpack_require__.n(angular);
;// CONCATENATED MODULE: ./public/app/angular/panel/panel_editor_tab.ts
panelEditorTab.$inject = ["dynamicDirectiveSrv"];

const directiveModule = angular_default().module('grafana.directives');
const directiveCache = {};
/** @ngInject */

function panelEditorTab(dynamicDirectiveSrv) {
  return dynamicDirectiveSrv.create({
    scope: {
      ctrl: '=',
      editorTab: '='
    },
    directive: scope => {
      const pluginId = scope.ctrl.pluginId;
      const tabName = scope.editorTab.title.toLowerCase().replace(' ', '-').replace('&', '').replace(' ', '').replace(' ', '-');

      if (directiveCache[pluginId]) {
        if (directiveCache[pluginId][tabName]) {
          return directiveCache[pluginId][tabName];
        }
      } else {
        directiveCache[pluginId] = [];
      }

      const result = {
        fn: () => scope.editorTab.directiveFn(),
        name: `panel-editor-tab-${pluginId}${tabName}`
      };
      directiveCache[pluginId][tabName] = result;
      return result;
    }
  });
}

directiveModule.directive('panelEditorTab', panelEditorTab);
;// CONCATENATED MODULE: ./public/app/angular/panel/query_editor_row.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class QueryRowCtrl {
  constructor() {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "queryCtrl", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "hasTextEditMode", false);
  }

  $onInit() {
    this.panelCtrl = this.queryCtrl.panelCtrl;
    this.target = this.queryCtrl.target;
    this.panel = this.panelCtrl.panel;

    if (this.hasTextEditMode && this.queryCtrl.toggleEditorMode) {
      // expose this function to react parent component
      this.panelCtrl.toggleEditorMode = this.queryCtrl.toggleEditorMode.bind(this.queryCtrl);
    }

    if (this.queryCtrl.getCollapsedText) {
      // expose this function to react parent component
      this.panelCtrl.getCollapsedText = this.queryCtrl.getCollapsedText.bind(this.queryCtrl);
    }
  }

}
QueryRowCtrl.$inject = [];

/** @ngInject */
function queryEditorRowDirective() {
  return {
    restrict: 'E',
    controller: QueryRowCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: 'public/app/angular/panel/partials/query_editor_row.html',
    transclude: true,
    scope: {
      queryCtrl: '=',
      canCollapse: '=',
      hasTextEditMode: '='
    }
  };
}

core_module/* coreModule.directive */.hF.directive('queryEditorRow', queryEditorRowDirective);
;// CONCATENATED MODULE: ./public/app/angular/panel/all.ts




// EXTERNAL MODULE: ./public/app/angular/partials.ts
var partials = __webpack_require__("./public/app/angular/partials.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
;// CONCATENATED MODULE: ./public/app/angular/filters/filters.ts





core_module/* default.filter */.ZP.filter('stringSort', () => {
  return input => {
    return input.sort();
  };
});
core_module/* default.filter */.ZP.filter('slice', () => {
  return (arr, start, end) => {
    if (!(0,lodash.isUndefined)(arr)) {
      return arr.slice(start, end);
    }

    return arr;
  };
});
core_module/* default.filter */.ZP.filter('stringify', () => {
  return arr => {
    if ((0,lodash.isObject)(arr) && !(0,lodash.isArray)(arr)) {
      return angular_default().toJson(arr);
    } else {
      return (0,lodash.isNull)(arr) ? null : arr.toString();
    }
  };
});
core_module/* default.filter */.ZP.filter('moment', () => {
  return (date, mode) => {
    switch (mode) {
      case 'ago':
        return (0,src.dateTime)(date).fromNow();
    }

    return (0,src.dateTime)(date).fromNow();
  };
});

function interpolateTemplateVars() {
  let templateSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,template_srv/* getTemplateSrv */.J)();

  const filterFunc = (text, scope) => {
    let scopedVars;

    if (scope.ctrl) {
      scopedVars = (scope.ctrl.panel || scope.ctrl.row).scopedVars;
    } else {
      scopedVars = scope.row.scopedVars;
    }

    return templateSrv.replaceWithText(text, scopedVars);
  };

  filterFunc.$stateful = true;
  return filterFunc;
}

core_module/* default.filter */.ZP.filter('interpolateTemplateVars', interpolateTemplateVars);
/* harmony default export */ const filters = ({});
;// CONCATENATED MODULE: ./public/app/angular/services/alert_srv.ts

class AlertSrv {
  constructor() {}

  set() {
    console.warn('old deprecated alert srv being used');
  }

}
AlertSrv.$inject = [];
// this is just added to not break old plugins that might be using it
core_module/* default.service */.ZP.service('alertSrv', AlertSrv);
;// CONCATENATED MODULE: ./public/app/angular/services/dynamic_directive_srv.ts



class DynamicDirectiveSrv {
  /** @ngInject */
  constructor($compile) {
    this.$compile = $compile;
    this.$compile = $compile;
  }

  addDirective(element, name, scope) {
    const child = angular_default().element(document.createElement(name));
    this.$compile(child)(scope);
    element.empty();
    element.append(child);
  }

  link(scope, elem, attrs, options) {
    const directiveInfo = options.directive(scope);

    if (!directiveInfo || !directiveInfo.fn) {
      elem.empty();
      return;
    }

    if (!directiveInfo.fn.registered) {
      core_module/* default.directive */.ZP.directive(attrs.$normalize(directiveInfo.name), directiveInfo.fn);
      directiveInfo.fn.registered = true;
    }

    this.addDirective(elem, directiveInfo.name, scope);
  }

  create(options) {
    const directiveDef = {
      restrict: 'E',
      scope: options.scope,
      link: (scope, elem, attrs) => {
        if (options.watchPath) {
          let childScope = null;
          scope.$watch(options.watchPath, () => {
            if (childScope) {
              childScope.$destroy();
            }

            childScope = scope.$new();
            this.link(childScope, elem, attrs, options);
          });
        } else {
          this.link(scope, elem, attrs, options);
        }
      }
    };
    return directiveDef;
  }

}

DynamicDirectiveSrv.$inject = ["$compile"];
core_module/* default.service */.ZP.service('dynamicDirectiveSrv', DynamicDirectiveSrv);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js
var react_dom = __webpack_require__("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./public/app/angular/services/ng_react.ts
//
// This is using ng-react with this PR applied https://github.com/ngReact/ngReact/pull/199
//
// # ngReact
// ### Use React Components inside of your Angular applications
//
// Composed of
// - reactComponent (generic directive for delegating off to React Components)
// - reactDirective (factory for creating specific directives that correspond to reactComponent directives)



 // get a react component from name (components can be an angular injectable e.g. value, factory or
// available on window

function getReactComponent(name, $injector) {
  // if name is a function assume it is component and return it
  if (angular_default().isFunction(name)) {
    return name;
  } // a React component name must be specified


  if (!name) {
    throw new Error('ReactComponent name attribute must be specified');
  } // ensure the specified React component is accessible, and fail fast if it's not


  let reactComponent;

  try {
    reactComponent = $injector.get(name);
  } catch (e) {}

  if (!reactComponent) {
    try {
      reactComponent = name.split('.').reduce((current, namePart) => {
        // @ts-ignore
        return current[namePart];
      }, window);
    } catch (e) {}
  }

  if (!reactComponent) {
    throw Error('Cannot find react component ' + name);
  }

  return reactComponent;
} // wraps a function with scope.$apply, if already applied just return


function applied(fn, scope) {
  if (fn.wrappedInApply) {
    return fn;
  } // this had the equivalent of `eslint-disable-next-line prefer-arrow/prefer-arrow-functions`


  const wrapped = function () {
    const args = arguments;
    const phase = scope.$root.$$phase;

    if (phase === '$apply' || phase === '$digest') {
      return fn.apply(null, args);
    } else {
      return scope.$apply(() => {
        return fn.apply(null, args);
      });
    }
  };

  wrapped.wrappedInApply = true;
  return wrapped;
}
/**
 * wraps functions on obj in scope.$apply
 *
 * keeps backwards compatibility, as if propsConfig is not passed, it will
 * work as before, wrapping all functions and won't wrap only when specified.
 *
 * @version 0.4.1
 * @param obj react component props
 * @param scope current scope
 * @param propsConfig configuration object for all properties
 * @returns {Object} props with the functions wrapped in scope.$apply
 */


function applyFunctions(obj, scope, propsConfig) {
  return Object.keys(obj || {}).reduce((prev, key) => {
    const value = obj[key];
    const config = (propsConfig || {})[key] || {};
    /**
     * wrap functions in a function that ensures they are scope.$applied
     * ensures that when function is called from a React component
     * the Angular digest cycle is run
     */
    // @ts-ignore

    prev[key] = angular_default().isFunction(value) && config.wrapApply !== false ? applied(value, scope) : value;
    return prev;
  }, {});
}
/**
 *
 * @param watchDepth (value of HTML watch-depth attribute)
 * @param scope (angular scope)
 *
 * Uses the watchDepth attribute to determine how to watch props on scope.
 * If watchDepth attribute is NOT reference or collection, watchDepth defaults to deep watching by value
 */


function watchProps(watchDepth, scope, watchExpressions, listener) {
  const supportsWatchCollection = angular_default().isFunction(scope.$watchCollection);
  const supportsWatchGroup = angular_default().isFunction(scope.$watchGroup);
  const watchGroupExpressions = [];

  for (const expr of watchExpressions) {
    const actualExpr = getPropExpression(expr);
    const exprWatchDepth = getPropWatchDepth(watchDepth, expr); // ignore empty expressions & expressions with functions

    if (!actualExpr || actualExpr.match(/\(.*\)/) || exprWatchDepth === 'one-time') {
      continue;
    }

    if (exprWatchDepth === 'collection' && supportsWatchCollection) {
      scope.$watchCollection(actualExpr, listener);
    } else if (exprWatchDepth === 'reference' && supportsWatchGroup) {
      watchGroupExpressions.push(actualExpr);
    } else {
      scope.$watch(actualExpr, listener, exprWatchDepth !== 'reference');
    }
  }

  if (watchDepth === 'one-time') {
    listener();
  }

  if (watchGroupExpressions.length) {
    scope.$watchGroup(watchGroupExpressions, listener);
  }
} // render React component, with scope[attrs.props] being passed in as the component props


function renderComponent(component, props, scope, elem) {
  scope.$evalAsync(() => {
    react_dom.render( /*#__PURE__*/react.createElement(component, props), elem[0]);
  });
} // get prop name from prop (string or array)


function getPropName(prop) {
  return Array.isArray(prop) ? prop[0] : prop;
} // get prop name from prop (string or array)


function getPropConfig(prop) {
  return Array.isArray(prop) ? prop[1] : {};
} // get prop expression from prop (string or array)


function getPropExpression(prop) {
  return Array.isArray(prop) ? prop[0] : prop;
}
/**
 * Finds the normalized attribute knowing that React props accept any type of capitalization and it also handles
 * kabab case attributes which can be used in case the attribute would also be a standard html attribute and would be
 * evaluated by the browser as such.
 * @param attrs All attributes of the component.
 * @param propName Name of the prop that react component expects.
 */


function findAttribute(attrs, propName) {
  const index = Object.keys(attrs).find(attr => {
    return attr.toLowerCase() === propName.toLowerCase() || (0,lodash.kebabCase)(attr) === (0,lodash.kebabCase)(propName);
  }); // @ts-ignore

  return attrs[index];
} // get watch depth of prop (string or array)


function getPropWatchDepth(defaultWatch, prop) {
  const customWatchDepth = Array.isArray(prop) && angular_default().isObject(prop[1]) && prop[1].watchDepth;
  return customWatchDepth || defaultWatch;
} // # reactComponent
// Directive that allows React components to be used in Angular templates.
//
// Usage:
//     <react-component name="Hello" props="name"/>
//
// This requires that there exists an injectable or globally available 'Hello' React component.
// The 'props' attribute is optional and is passed to the component.
//
// The following would would create and register the component:
//
//     var module = angular.module('ace.react.components');
//     module.value('Hello', React.createClass({
//         render: function() {
//             return <div>Hello {this.props.name}</div>;
//         }
//     }));
//


const reactComponent = $injector => {
  return {
    restrict: 'E',
    replace: true,
    link: function (scope, elem, attrs) {
      const reactComponent = getReactComponent(attrs.name, $injector);

      const renderMyComponent = () => {
        const scopeProps = scope.$eval(attrs.props);
        const props = applyFunctions(scopeProps, scope);
        renderComponent(reactComponent, props, scope, elem);
      }; // If there are props, re-render when they change


      attrs.props ? watchProps(attrs.watchDepth, scope, [attrs.props], renderMyComponent) : renderMyComponent(); // cleanup when scope is destroyed

      scope.$on('$destroy', () => {
        if (!attrs.onScopeDestroy) {
          react_dom.unmountComponentAtNode(elem[0]);
        } else {
          scope.$eval(attrs.onScopeDestroy, {
            unmountComponent: react_dom.unmountComponentAtNode.bind(this, elem[0])
          });
        }
      });
    }
  };
}; // # reactDirective
// Factory function to create directives for React components.
//
// With a component like this:
//
//     var module = angular.module('ace.react.components');
//     module.value('Hello', React.createClass({
//         render: function() {
//             return <div>Hello {this.props.name}</div>;
//         }
//     }));
//
// A directive can be created and registered with:
//
//     module.directive('hello', function(reactDirective) {
//         return reactDirective('Hello', ['name']);
//     });
//
// Where the first argument is the injectable or globally accessible name of the React component
// and the second argument is an array of property names to be watched and passed to the React component
// as props.
//
// This directive can then be used like this:
//
//     <hello name="name"/>
//


const reactDirective = $injector => {
  return (reactComponentName, props, conf, injectableProps) => {
    const directive = {
      restrict: 'E',
      replace: true,
      link: function (scope, elem, attrs) {
        const reactComponent = getReactComponent(reactComponentName, $injector); // if props is not defined, fall back to use the React component's propTypes if present

        props = props || Object.keys(reactComponent.propTypes || {}); // for each of the properties, get their scope value and set it to scope.props

        const renderMyComponent = () => {
          let scopeProps = {};
          const config = {};
          props.forEach(prop => {
            const propName = getPropName(prop);
            scopeProps[propName] = scope.$eval(findAttribute(attrs, propName));
            config[propName] = getPropConfig(prop);
          });
          scopeProps = applyFunctions(scopeProps, scope, config);
          scopeProps = angular_default().extend({}, scopeProps, injectableProps);
          renderComponent(reactComponent, scopeProps, scope, elem);
        }; // watch each property name and trigger an update whenever something changes,
        // to update scope.props with new values


        const propExpressions = props.map(prop => {
          return Array.isArray(prop) ? [findAttribute(attrs, prop[0]), getPropConfig(prop)] : findAttribute(attrs, prop);
        }); // If we don't have any props, then our watch statement won't fire.

        props.length ? watchProps(attrs.watchDepth, scope, propExpressions, renderMyComponent) : renderMyComponent(); // cleanup when scope is destroyed

        scope.$on('$destroy', () => {
          if (!attrs.onScopeDestroy) {
            react_dom.unmountComponentAtNode(elem[0]);
          } else {
            scope.$eval(attrs.onScopeDestroy, {
              unmountComponent: react_dom.unmountComponentAtNode.bind(this, elem[0])
            });
          }
        });
      }
    };
    return angular_default().extend(directive, conf);
  };
};

const ngModule = angular_default().module('react', []);
ngModule.directive('reactComponent', ['$injector', reactComponent]);
ngModule.factory('reactDirective', ['$injector', reactDirective]);
;// CONCATENATED MODULE: ./public/app/angular/services/segment_srv.ts
uiSegmentSrv.$inject = ["$sce", "templateSrv"];

function segment_srv_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** @ngInject */

function uiSegmentSrv($sce, templateSrv) {
  const self = this;

  class MetricSegment {
    constructor(options) {
      segment_srv_defineProperty(this, "value", void 0);

      segment_srv_defineProperty(this, "html", void 0);

      segment_srv_defineProperty(this, "type", void 0);

      segment_srv_defineProperty(this, "expandable", void 0);

      segment_srv_defineProperty(this, "text", void 0);

      segment_srv_defineProperty(this, "cssClass", void 0);

      segment_srv_defineProperty(this, "fake", void 0);

      segment_srv_defineProperty(this, "custom", void 0);

      segment_srv_defineProperty(this, "selectMode", void 0);

      if (options === '*' || options.value === '*') {
        this.value = '*';
        this.html = $sce.trustAsHtml('<i class="fa fa-asterisk"><i>');
        this.type = options.type;
        this.expandable = true;
        return;
      }

      if ((0,lodash.isString)(options)) {
        this.value = options;
        this.html = $sce.trustAsHtml(templateSrv.highlightVariablesAsHtml(this.value));
        return;
      } // temp hack to work around legacy inconsistency in segment model


      this.text = options.value;
      this.cssClass = options.cssClass;
      this.custom = options.custom;
      this.type = options.type;
      this.fake = options.fake;
      this.value = options.value;
      this.selectMode = options.selectMode;
      this.expandable = options.expandable;
      this.html = options.html || $sce.trustAsHtml(templateSrv.highlightVariablesAsHtml(this.value));
    }

  }

  this.getSegmentForValue = function (value, fallbackText) {
    if (value) {
      return this.newSegment(value);
    } else {
      return this.newSegment({
        value: fallbackText,
        fake: true
      });
    }
  };

  this.newSelectMeasurement = () => {
    return new MetricSegment({
      value: 'select measurement',
      fake: true
    });
  };

  this.newFake = (text, type, cssClass) => {
    return new MetricSegment({
      value: text,
      fake: true,
      type: type,
      cssClass: cssClass
    });
  };

  this.newSegment = options => {
    return new MetricSegment(options);
  };

  this.newKey = key => {
    return new MetricSegment({
      value: key,
      type: 'key',
      cssClass: 'query-segment-key'
    });
  };

  this.newKeyValue = value => {
    return new MetricSegment({
      value: value,
      type: 'value',
      cssClass: 'query-segment-value'
    });
  };

  this.newCondition = condition => {
    return new MetricSegment({
      value: condition,
      type: 'condition',
      cssClass: 'query-keyword'
    });
  };

  this.newOperator = op => {
    return new MetricSegment({
      value: op,
      type: 'operator',
      cssClass: 'query-segment-operator'
    });
  };

  this.newOperators = ops => {
    return (0,lodash.map)(ops, op => {
      return new MetricSegment({
        value: op,
        type: 'operator',
        cssClass: 'query-segment-operator'
      });
    });
  };

  this.transformToSegments = (addTemplateVars, variableTypeFilter) => {
    return results => {
      const segments = (0,lodash.map)(results, segment => {
        return self.newSegment({
          value: segment.text,
          expandable: segment.expandable
        });
      });

      if (addTemplateVars) {
        (0,lodash.each)(templateSrv.getVariables(), variable => {
          if (variableTypeFilter === void 0 || variableTypeFilter === variable.type) {
            segments.unshift(self.newSegment({
              type: 'value',
              value: '$' + variable.name,
              expandable: true
            }));
          }
        });
      }

      return segments;
    };
  };

  this.newSelectMetric = () => {
    return new MetricSegment({
      value: 'select metric',
      fake: true
    });
  };

  this.newPlusButton = () => {
    return new MetricSegment({
      fake: true,
      html: '<i class="fa fa-plus "></i>',
      type: 'plus-button',
      cssClass: 'query-part'
    });
  };
}
core_module/* default.service */.ZP.service('uiSegmentSrv', uiSegmentSrv);
// EXTERNAL MODULE: ./.yarn/cache/tether-drop-https-3382d2649f-a10a7337d5.zip/node_modules/tether-drop/dist/js/drop.js
var js_drop = __webpack_require__("./.yarn/cache/tether-drop-https-3382d2649f-a10a7337d5.zip/node_modules/tether-drop/dist/js/drop.js");
var drop_default = /*#__PURE__*/__webpack_require__.n(js_drop);
;// CONCATENATED MODULE: ./public/app/angular/services/popover_srv.ts
popoverSrv.$inject = ["$compile", "$rootScope", "$timeout"];
 // @ts-ignore



/** @ngInject */

function popoverSrv($compile, $rootScope, $timeout) {
  let openDrop = null;

  this.close = () => {
    if (openDrop) {
      openDrop.close();
    }
  };

  this.show = options => {
    if (openDrop) {
      openDrop.close();
      openDrop = null;
    }

    const scope = (0,lodash.extend)($rootScope.$new(true), options.model);
    let drop;

    const cleanUp = () => {
      setTimeout(() => {
        scope.$destroy();

        if (drop.tether) {
          drop.destroy();
        }

        if (options.onClose) {
          options.onClose();
        }
      });
      openDrop = null;
    };

    scope.dismiss = () => {
      drop.close();
    };

    const contentElement = document.createElement('div');
    contentElement.innerHTML = options.template;
    $compile(contentElement)(scope);
    $timeout(() => {
      drop = new (drop_default())({
        target: options.element,
        content: contentElement,
        position: options.position,
        classes: options.classNames || 'drop-popover',
        openOn: options.openOn,
        hoverCloseDelay: 200,
        tetherOptions: {
          constraints: [{
            to: 'scrollParent',
            attachment: 'together'
          }]
        }
      });
      drop.on('close', () => {
        cleanUp();
      });
      openDrop = drop;
      openDrop.open();
    }, 100); // return close function

    return () => {
      if (drop) {
        drop.close();
      }
    };
  };
}

core_module/* default.service */.ZP.service('popoverSrv', popoverSrv);
;// CONCATENATED MODULE: ./public/app/angular/services/timer.ts
function timer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // This service really just tracks a list of $timeout promises to give us a
// method for canceling them all when we need to

class Timer {
  /** @ngInject */
  constructor($timeout) {
    this.$timeout = $timeout;

    timer_defineProperty(this, "timers", []);

    this.$timeout = $timeout;
  }

  register(promise) {
    this.timers.push(promise);
    return promise;
  }

  cancel(promise) {
    this.timers = (0,lodash.without)(this.timers, promise);
    this.$timeout.cancel(promise);
  }

  cancelAll() {
    (0,lodash.each)(this.timers, t => {
      this.$timeout.cancel(t);
    });
    this.timers = [];
  }

}
Timer.$inject = ["$timeout"];
core_module/* default.service */.ZP.service('timer', Timer);
;// CONCATENATED MODULE: ./public/app/angular/services/AngularLoader.ts



class AngularLoader {
  /** @ngInject */
  constructor($compile, $rootScope) {
    this.$compile = $compile;
    this.$rootScope = $rootScope;
    this.$compile = $compile;
    this.$rootScope = $rootScope;
  }

  load(elem, scopeProps, template) {
    const scope = this.$rootScope.$new();
    (0,lodash.assign)(scope, scopeProps);
    const compiledElem = this.$compile(template)(scope);
    const rootNode = angular_default().element(elem);
    rootNode.append(compiledElem);
    return {
      destroy: () => {
        scope.$destroy();
        compiledElem.remove();
      },
      digest: () => {
        if (!scope.$$phase) {
          scope.$digest();
        }
      },
      getScope: () => {
        return scope;
      }
    };
  }

}
AngularLoader.$inject = ["$compile", "$rootScope"];
core_module/* default.service */.ZP.service('angularLoader', AngularLoader);
// EXTERNAL MODULE: ./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js
var jquery_exposed = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
var jquery_exposed_default = /*#__PURE__*/__webpack_require__.n(jquery_exposed);
;// CONCATENATED MODULE: ./public/app/angular/jquery_extended.ts



const $win = jquery_exposed_default()(window);

(jquery_exposed_default()).fn.place_tt = (() => {
  const defaults = {
    offset: 5
  };
  return function (x, y, opts) {
    opts = jquery_exposed_default().extend(true, {}, defaults, opts);
    return this.each(() => {
      const $tooltip = jquery_exposed_default()(this);
      let width, height;
      $tooltip.addClass('grafana-tooltip');
      jquery_exposed_default()('#tooltip').remove();
      $tooltip.appendTo(document.body);

      if (opts.compile) {
        angular_default().element(document).injector().invoke(['$compile', '$rootScope', ($compile, $rootScope) => {
          const tmpScope = $rootScope.$new(true);
          (0,lodash.extend)(tmpScope, opts.scopeData);
          $compile($tooltip)(tmpScope);
          tmpScope.$digest();
          tmpScope.$destroy();
        }]);
      }

      width = $tooltip.outerWidth(true);
      height = $tooltip.outerHeight(true);
      const left = x + opts.offset + width > $win.width() ? x - opts.offset - width : x + opts.offset;
      const top = y + opts.offset + height > $win.height() ? y - opts.offset - height : y + opts.offset;
      $tooltip.css('left', left > 0 ? left : 0);
      $tooltip.css('top', top > 0 ? top : 0);
    });
  };
})();
;// CONCATENATED MODULE: ./public/app/angular/dropdown_typeahead.ts
dropdownTypeahead2.$inject = ["$compile"];
dropdownTypeahead.$inject = ["$compile"];



/** @ngInject */

function dropdownTypeahead($compile) {
  const inputTemplate = '<input type="text"' + ' class="gf-form-input input-medium tight-form-input"' + ' spellcheck="false" style="display:none"></input>';
  const buttonTemplate = '<a class="gf-form-label tight-form-func dropdown-toggle"' + ' tabindex="1" gf-dropdown="menuItems" data-toggle="dropdown"' + ' ><i class="fa fa-plus"></i></a>';
  return {
    scope: {
      menuItems: '=dropdownTypeahead',
      dropdownTypeaheadOnSelect: '&dropdownTypeaheadOnSelect',
      model: '=ngModel'
    },
    link: ($scope, elem, attrs) => {
      const $input = jquery_exposed_default()(inputTemplate);
      const $button = jquery_exposed_default()(buttonTemplate);
      $input.appendTo(elem);
      $button.appendTo(elem);

      if (attrs.linkText) {
        $button.html(attrs.linkText);
      }

      if (attrs.ngModel) {
        $scope.$watch('model', newValue => {
          (0,lodash.each)($scope.menuItems, item => {
            (0,lodash.each)(item.submenu, subItem => {
              if (subItem.value === newValue) {
                $button.html(subItem.text);
              }
            });
          });
        });
      }

      const typeaheadValues = (0,lodash.reduce)($scope.menuItems, (memo, value, index) => {
        if (!value.submenu) {
          value.click = 'menuItemSelected(' + index + ')';
          memo.push(value.text);
        } else {
          (0,lodash.each)(value.submenu, (item, subIndex) => {
            item.click = 'menuItemSelected(' + index + ',' + subIndex + ')';
            memo.push(value.text + ' ' + item.text);
          });
        }

        return memo;
      }, []);

      const closeDropdownMenu = () => {
        $input.hide();
        $input.val('');
        $button.show();
        $button.focus();
        elem.removeClass('open');
      };

      $scope.menuItemSelected = (index, subIndex) => {
        const menuItem = $scope.menuItems[index];
        const payload = {
          $item: menuItem
        };

        if (menuItem.submenu && subIndex !== void 0) {
          payload.$subItem = menuItem.submenu[subIndex];
        }

        $scope.dropdownTypeaheadOnSelect(payload);
        closeDropdownMenu();
      };

      $input.attr('data-provide', 'typeahead');
      $input.typeahead({
        source: typeaheadValues,
        minLength: 1,
        items: 10,
        updater: value => {
          const result = {};
          (0,lodash.each)($scope.menuItems, menuItem => {
            (0,lodash.each)(menuItem.submenu, submenuItem => {
              if (value === menuItem.text + ' ' + submenuItem.text) {
                result.$subItem = submenuItem;
                result.$item = menuItem;
              }
            });
          });

          if (result.$item) {
            $scope.$apply(() => {
              $scope.dropdownTypeaheadOnSelect(result);
            });
          }

          $input.trigger('blur');
          return '';
        }
      });
      $button.click(() => {
        $button.hide();
        $input.show();
        $input.focus();
      });
      $input.keyup(() => {
        elem.toggleClass('open', $input.val() === '');
      });
      elem.mousedown(evt => {
        evt.preventDefault();
      });
      $input.blur(() => {
        $input.hide();
        $input.val('');
        $button.show();
        $button.focus(); // clicking the function dropdown menu won't
        // work if you remove class at once

        setTimeout(() => {
          elem.removeClass('open');
        }, 200);
      });
      $compile(elem.contents())($scope);
    }
  };
}
/** @ngInject */

function dropdownTypeahead2($compile) {
  const inputTemplate = '<input type="text"' + ' class="gf-form-input"' + ' spellcheck="false" style="display:none"></input>';
  const buttonTemplate = '<a class="{{buttonTemplateClass}} dropdown-toggle"' + ' tabindex="1" gf-dropdown="menuItems" data-toggle="dropdown"' + ' ><i class="fa fa-plus"></i></a>';
  return {
    scope: {
      menuItems: '=dropdownTypeahead2',
      dropdownTypeaheadOnSelect: '&dropdownTypeaheadOnSelect',
      model: '=ngModel',
      buttonTemplateClass: '@'
    },
    link: ($scope, elem, attrs) => {
      const $input = jquery_exposed_default()(inputTemplate);

      if (!$scope.buttonTemplateClass) {
        $scope.buttonTemplateClass = 'gf-form-input';
      }

      const $button = jquery_exposed_default()(buttonTemplate);
      const timeoutId = {
        blur: null
      };
      $input.appendTo(elem);
      $button.appendTo(elem);

      if (attrs.linkText) {
        $button.html(attrs.linkText);
      }

      if (attrs.ngModel) {
        $scope.$watch('model', newValue => {
          (0,lodash.each)($scope.menuItems, item => {
            (0,lodash.each)(item.submenu, subItem => {
              if (subItem.value === newValue) {
                $button.html(subItem.text);
              }
            });
          });
        });
      }

      const typeaheadValues = (0,lodash.reduce)($scope.menuItems, (memo, value, index) => {
        if (!value.submenu) {
          value.click = 'menuItemSelected(' + index + ')';
          memo.push(value.text);
        } else {
          (0,lodash.each)(value.submenu, (item, subIndex) => {
            item.click = 'menuItemSelected(' + index + ',' + subIndex + ')';
            memo.push(value.text + ' ' + item.text);
          });
        }

        return memo;
      }, []);

      const closeDropdownMenu = () => {
        $input.hide();
        $input.val('');
        $button.show();
        $button.focus();
        elem.removeClass('open');
      };

      $scope.menuItemSelected = (index, subIndex) => {
        const menuItem = $scope.menuItems[index];
        const payload = {
          $item: menuItem
        };

        if (menuItem.submenu && subIndex !== void 0) {
          payload.$subItem = menuItem.submenu[subIndex];
        }

        $scope.dropdownTypeaheadOnSelect(payload);
        closeDropdownMenu();
      };

      $input.attr('data-provide', 'typeahead');
      $input.typeahead({
        source: typeaheadValues,
        minLength: 1,
        items: 10,
        updater: value => {
          const result = {};
          (0,lodash.each)($scope.menuItems, menuItem => {
            (0,lodash.each)(menuItem.submenu, submenuItem => {
              if (value === menuItem.text + ' ' + submenuItem.text) {
                result.$subItem = submenuItem;
                result.$item = menuItem;
              }
            });
          });

          if (result.$item) {
            $scope.$apply(() => {
              $scope.dropdownTypeaheadOnSelect(result);
            });
          }

          $input.trigger('blur');
          return '';
        }
      });
      $button.click(() => {
        $button.hide();
        $input.show();
        $input.focus();
      });
      $input.keyup(() => {
        elem.toggleClass('open', $input.val() === '');
      });
      elem.mousedown(evt => {
        evt.preventDefault();
        timeoutId.blur = null;
      });
      $input.blur(() => {
        timeoutId.blur = setTimeout(() => {
          closeDropdownMenu();
        }, 1);
      });
      $compile(elem.contents())($scope);
    }
  };
}
core_module/* default.directive */.ZP.directive('dropdownTypeahead', dropdownTypeahead);
core_module/* default.directive */.ZP.directive('dropdownTypeahead2', dropdownTypeahead2);
;// CONCATENATED MODULE: ./public/app/angular/autofill_event_fix.ts
autofillEventFix.$inject = ["$compile"];

/** @ngInject */

function autofillEventFix($compile) {
  return {
    link: ($scope, elem) => {
      const input = elem[0];

      const dispatchChangeEvent = () => {
        const event = new Event('change');
        return input.dispatchEvent(event);
      };

      const onAnimationStart = _ref => {
        let {
          animationName
        } = _ref;

        switch (animationName) {
          case 'onAutoFillStart':
            return dispatchChangeEvent();

          case 'onAutoFillCancel':
            return dispatchChangeEvent();
        }

        return null;
      }; // const onChange = (evt: Event) => console.log(evt);


      input.addEventListener('animationstart', onAnimationStart); // input.addEventListener('change', onChange);

      $scope.$on('$destroy', () => {
        input.removeEventListener('animationstart', onAnimationStart); // input.removeEventListener('change', onChange);
      });
    }
  };
}
core_module/* default.directive */.ZP.directive('autofillEventFix', autofillEventFix);
;// CONCATENATED MODULE: ./public/app/angular/metric_segment.ts
metricSegmentModel.$inject = ["uiSegmentSrv"];
metricSegment.$inject = ["$compile", "$sce", "templateSrv"];



/** @ngInject */

function metricSegment($compile, $sce, templateSrv) {
  const inputTemplate = '<input type="text" data-provide="typeahead" ' + ' class="gf-form-input input-medium"' + ' spellcheck="false" style="display:none"></input>';
  const linkTemplate = '<a class="gf-form-label" ng-class="segment.cssClass" ' + 'tabindex="1" give-focus="segment.focus" ng-bind-html="segment.html"></a>';
  const selectTemplate = '<a class="gf-form-input gf-form-input--dropdown" ng-class="segment.cssClass" ' + 'tabindex="1" give-focus="segment.focus" ng-bind-html="segment.html"></a>';
  return {
    scope: {
      segment: '=',
      getOptions: '&',
      onChange: '&',
      debounce: '@'
    },
    link: ($scope, elem) => {
      const $input = jquery_exposed_default()(inputTemplate);
      const segment = $scope.segment;
      const $button = jquery_exposed_default()(segment.selectMode ? selectTemplate : linkTemplate);
      let options = null;
      let cancelBlur = null;
      let linkMode = true;
      const debounceLookup = $scope.debounce;
      $input.appendTo(elem);
      $button.appendTo(elem);

      $scope.updateVariableValue = value => {
        if (value === '' || segment.value === value) {
          return;
        }

        $scope.$apply(() => {
          const selected = (0,lodash.find)($scope.altSegments, {
            value: value
          });

          if (selected) {
            segment.value = selected.value;
            segment.html = selected.html || $sce.trustAsHtml(templateSrv.highlightVariablesAsHtml(selected.value));
            segment.fake = false;
            segment.expandable = selected.expandable;

            if (selected.type) {
              segment.type = selected.type;
            }
          } else if (segment.custom !== 'false') {
            segment.value = value;
            segment.html = $sce.trustAsHtml(templateSrv.highlightVariablesAsHtml(value));
            segment.expandable = true;
            segment.fake = false;
          }

          $scope.onChange();
        });
      };

      $scope.switchToLink = fromClick => {
        if (linkMode && !fromClick) {
          return;
        }

        clearTimeout(cancelBlur);
        cancelBlur = null;
        linkMode = true;
        $input.hide();
        $button.show();
        $scope.updateVariableValue($input.val());
      };

      $scope.inputBlur = () => {
        // happens long before the click event on the typeahead options
        // need to have long delay because the blur
        cancelBlur = setTimeout($scope.switchToLink, 200);
      };

      $scope.source = (query, callback) => {
        $scope.$apply(() => {
          $scope.getOptions({
            $query: query
          }).then(altSegments => {
            $scope.altSegments = altSegments;
            options = (0,lodash.map)($scope.altSegments, alt => {
              return (0,lodash.escape)(alt.value);
            }); // add custom values

            if (segment.custom !== 'false') {
              if (!segment.fake && (0,lodash.indexOf)(options, segment.value) === -1) {
                options.unshift((0,lodash.escape)(segment.value));
              }
            }

            callback(options);
          });
        });
      };

      $scope.updater = value => {
        value = (0,lodash.unescape)(value);

        if (value === segment.value) {
          clearTimeout(cancelBlur);
          $input.focus();
          return value;
        }

        $input.val(value);
        $scope.switchToLink(true);
        return value;
      };

      $scope.matcher = function (item) {
        if (linkMode) {
          return false;
        }

        let str = this.query;

        if (str[0] === '/') {
          str = str.substring(1);
        }

        if (str[str.length - 1] === '/') {
          str = str.substring(0, str.length - 1);
        }

        try {
          return item.toLowerCase().match(str.toLowerCase());
        } catch (e) {
          return false;
        }
      };

      $input.attr('data-provide', 'typeahead');
      $input.typeahead({
        source: $scope.source,
        minLength: 0,
        items: 10000,
        updater: $scope.updater,
        matcher: $scope.matcher
      });
      const typeahead = $input.data('typeahead');

      typeahead.lookup = function () {
        this.query = this.$element.val() || '';
        const items = this.source(this.query, jquery_exposed_default().proxy(this.process, this));
        return items ? this.process(items) : items;
      };

      if (debounceLookup) {
        typeahead.lookup = (0,lodash.debounce)(typeahead.lookup, 500, {
          leading: true
        });
      }

      $button.keydown(evt => {
        // trigger typeahead on down arrow or enter key
        if (evt.keyCode === 40 || evt.keyCode === 13) {
          $button.click();
        }
      });
      $button.click(() => {
        options = null;
        $input.css('width', Math.max($button.width(), 80) + 16 + 'px');
        $button.hide();
        $input.show();
        $input.focus();
        linkMode = false;
        const typeahead = $input.data('typeahead');

        if (typeahead) {
          $input.val('');
          typeahead.lookup();
        }
      });
      $input.blur($scope.inputBlur);
      $compile(elem.contents())($scope);
    }
  };
}
/** @ngInject */

function metricSegmentModel(uiSegmentSrv) {
  return {
    template: '<metric-segment segment="segment" get-options="getOptionsInternal()" on-change="onSegmentChange()"></metric-segment>',
    restrict: 'E',
    scope: {
      property: '=',
      options: '=',
      getOptions: '&',
      onChange: '&'
    },
    link: {
      pre: function postLink($scope, elem, attrs) {
        let cachedOptions;

        $scope.valueToSegment = value => {
          const option = (0,lodash.find)($scope.options, {
            value: value
          });
          const segment = {
            cssClass: attrs.cssClass,
            custom: attrs.custom,
            value: option ? option.text : value,
            selectMode: attrs.selectMode
          };
          return uiSegmentSrv.newSegment(segment);
        };

        $scope.getOptionsInternal = () => {
          if ($scope.options) {
            cachedOptions = $scope.options;
            return Promise.resolve((0,lodash.map)($scope.options, option => {
              return {
                value: option.text
              };
            }));
          } else {
            return $scope.getOptions().then(options => {
              cachedOptions = options;
              return (0,lodash.map)(options, option => {
                if (option.html) {
                  return option;
                }

                return {
                  value: option.text
                };
              });
            });
          }
        };

        $scope.onSegmentChange = () => {
          if (cachedOptions) {
            const option = (0,lodash.find)(cachedOptions, {
              text: $scope.segment.value
            });

            if (option && option.value !== $scope.property) {
              $scope.property = option.value;
            } else if (attrs.custom !== 'false') {
              $scope.property = $scope.segment.value;
            }
          } else {
            $scope.property = $scope.segment.value;
          } // needs to call this after digest so
          // property is synced with outerscope


          $scope.$$postDigest(() => {
            $scope.$apply(() => {
              $scope.onChange();
            });
          });
        };

        $scope.segment = $scope.valueToSegment($scope.property);
      }
    }
  };
}
core_module/* default.directive */.ZP.directive('metricSegment', metricSegment);
core_module/* default.directive */.ZP.directive('metricSegmentModel', metricSegmentModel);
;// CONCATENATED MODULE: ./public/app/angular/misc.ts
gfDropdown.$inject = ["$parse", "$compile", "$timeout"];
editorCheckbox.$inject = ["$compile", "$interpolate"];
editorOptBool.$inject = ["$compile"];
compile.$inject = ["$compile"];
tip.$inject = ["$compile"];


/** @ngInject */

function tip($compile) {
  return {
    restrict: 'E',
    link: (scope, elem, attrs) => {
      let _t = '<i class="grafana-tip fa fa-' + (attrs.icon || 'question-circle') + '" bs-tooltip="\'' + // here we double-html-encode any special characters in the source string
      // this is needed so that the final html contains the encoded entities as they
      // will be decoded when _t is parsed by angular
      elem.text().replace(/[\'\"\\{}<>&]/g, m => '&amp;#' + m.charCodeAt(0) + ';') + '\'"></i>';

      elem.replaceWith($compile(angular_default().element(_t))(scope));
    }
  };
}
/** @ngInject */


function compile($compile) {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      scope.$watch(scope => {
        return scope.$eval(attrs.compile);
      }, value => {
        element.html(value);
        $compile(element.contents())(scope);
      });
    }
  };
}

function watchChange() {
  return {
    scope: {
      onchange: '&watchChange'
    },
    link: (scope, element) => {
      element.on('input', () => {
        scope.$apply(() => {
          scope.onchange({
            inputValue: element.val()
          });
        });
      });
    }
  };
}
/** @ngInject */


function editorOptBool($compile) {
  return {
    restrict: 'E',
    link: (scope, elem, attrs) => {
      const ngchange = attrs.change ? ' ng-change="' + attrs.change + '"' : '';
      const tip = attrs.tip ? ' <tip>' + attrs.tip + '</tip>' : '';
      const showIf = attrs.showIf ? ' ng-show="' + attrs.showIf + '" ' : '';
      const template = '<div class="editor-option gf-form-checkbox text-center"' + showIf + '>' + ' <label for="' + attrs.model + '" class="small">' + attrs.text + tip + '</label>' + '<input class="cr1" id="' + attrs.model + '" type="checkbox" ' + '       ng-model="' + attrs.model + '"' + ngchange + '       ng-checked="' + attrs.model + '"></input>' + ' <label for="' + attrs.model + '" class="cr1"></label>';
      elem.replaceWith($compile(angular_default().element(template))(scope));
    }
  };
}
/** @ngInject */


function editorCheckbox($compile, $interpolate) {
  return {
    restrict: 'E',
    link: (scope, elem, attrs) => {
      const text = $interpolate(attrs.text)(scope);
      const model = $interpolate(attrs.model)(scope);
      const ngchange = attrs.change ? ' ng-change="' + attrs.change + '"' : '';
      const tip = attrs.tip ? ' <tip>' + attrs.tip + '</tip>' : '';
      const label = '<label for="' + scope.$id + model + '" class="checkbox-label">' + text + tip + '</label>';
      let template = '<input class="cr1" id="' + scope.$id + model + '" type="checkbox" ' + '       ng-model="' + model + '"' + ngchange + '       ng-checked="' + model + '"></input>' + ' <label for="' + scope.$id + model + '" class="cr1"></label>';
      template = template + label;
      elem.addClass('gf-form-checkbox');
      elem.html($compile(angular_default().element(template))(scope));
    }
  };
}
/** @ngInject */


function gfDropdown($parse, $compile, $timeout) {
  function buildTemplate(items, placement) {
    const upclass = placement === 'top' ? 'dropup' : '';
    const ul = ['<ul class="dropdown-menu ' + upclass + '" role="menu" aria-labelledby="drop1">', '</ul>'];

    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      if (item.divider) {
        ul.splice(index + 1, 0, '<li class="divider"></li>');
        continue;
      }

      let li = '<li' + (item.submenu && item.submenu.length ? ' class="dropdown-submenu"' : '') + '>' + '<a tabindex="-1" ng-href="' + (item.href || '') + '"' + (item.click ? ' ng-click="' + item.click + '"' : '') + (item.target ? ' target="' + item.target + '"' : '') + (item.method ? ' data-method="' + item.method + '"' : '') + '>' + (item.text || '') + '</a>';

      if (item.submenu && item.submenu.length) {
        li += buildTemplate(item.submenu).join('\n');
      }

      li += '</li>';
      ul.splice(index + 1, 0, li);
    }

    return ul;
  }

  return {
    restrict: 'EA',
    scope: true,
    link: function postLink(scope, iElement, iAttrs) {
      const getter = $parse(iAttrs.gfDropdown),
            items = getter(scope);
      $timeout(() => {
        const placement = iElement.data('placement');
        const dropdown = angular_default().element(buildTemplate(items, placement).join(''));
        dropdown.insertAfter(iElement);
        $compile(iElement.next('ul.dropdown-menu'))(scope);
      });
      iElement.addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    }
  };
}

core_module/* default.directive */.ZP.directive('tip', tip);
core_module/* default.directive */.ZP.directive('compile', compile);
core_module/* default.directive */.ZP.directive('watchChange', watchChange);
core_module/* default.directive */.ZP.directive('editorOptBool', editorOptBool);
core_module/* default.directive */.ZP.directive('editorCheckbox', editorCheckbox);
core_module/* default.directive */.ZP.directive('gfDropdown', gfDropdown);
;// CONCATENATED MODULE: ./public/app/angular/ng_model_on_blur.ts



function ngModelOnBlur() {
  return {
    restrict: 'A',
    priority: 1,
    require: 'ngModel',
    link: (scope, elm, attr, ngModelCtrl) => {
      if (attr.type === 'radio' || attr.type === 'checkbox') {
        return;
      }

      elm.off('input keydown change');
      elm.bind('blur', () => {
        scope.$apply(() => {
          ngModelCtrl.$setViewValue(elm.val());
        });
      });
    }
  };
}

function emptyToNull() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, elm, attrs, ctrl) => {
      ctrl.$parsers.push(viewValue => {
        if (viewValue === '') {
          return null;
        }

        return viewValue;
      });
    }
  };
}

function validTimeSpan() {
  return {
    require: 'ngModel',
    link: (scope, elm, attrs, ctrl) => {
      ctrl.$validators.integer = (modelValue, viewValue) => {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        if (viewValue.indexOf('$') === 0 || viewValue.indexOf('+$') === 0) {
          return true; // allow template variable
        }

        const info = src.rangeUtil.describeTextRange(viewValue);
        return info.invalid !== true;
      };
    }
  };
}

core_module/* default.directive */.ZP.directive('ngModelOnblur', ngModelOnBlur);
core_module/* default.directive */.ZP.directive('emptyToNull', emptyToNull);
core_module/* default.directive */.ZP.directive('validTimeSpan', validTimeSpan);
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/vendor/tagsinput/bootstrap-tagsinput.js
var bootstrap_tagsinput = __webpack_require__("./public/vendor/tagsinput/bootstrap-tagsinput.js");
;// CONCATENATED MODULE: ./public/app/angular/tags.ts






function setColor(name, element) {
  const {
    color,
    borderColor
  } = (0,grafana_ui_src.getTagColorsFromName)(name);
  element.css('background-color', color);
  element.css('border-color', borderColor);
}

function tagColorFromName() {
  return {
    scope: {
      tagColorFromName: '='
    },
    link: (scope, element) => {
      setColor(scope.tagColorFromName, element);
    }
  };
}

function bootstrapTagsinput() {
  function getItemProperty(scope, property) {
    if (!property) {
      return undefined;
    }

    if (angular_default().isFunction(scope.$parent[property])) {
      return scope.$parent[property];
    }

    return item => {
      return item[property];
    };
  }

  return {
    restrict: 'EA',
    scope: {
      model: '=ngModel',
      onTagsUpdated: '&'
    },
    template: '<select multiple></select>',
    replace: false,
    link: function (scope, element, attrs) {
      if (!angular_default().isArray(scope.model)) {
        scope.model = [];
      }

      const select = jquery_exposed_default()('select', element);

      if (attrs.placeholder) {
        select.attr('placeholder', attrs.placeholder);
      }

      select.tagsinput({
        typeahead: {
          source: angular_default().isFunction(scope.$parent[attrs.typeaheadSource]) ? scope.$parent[attrs.typeaheadSource] : null
        },
        widthClass: attrs.widthClass,
        itemValue: getItemProperty(scope, attrs.itemvalue),
        itemText: getItemProperty(scope, attrs.itemtext),
        tagClass: angular_default().isFunction(scope.$parent[attrs.tagclass]) ? scope.$parent[attrs.tagclass] : () => {
          return attrs.tagclass;
        }
      });
      select.on('itemAdded', event => {
        if (scope.model.indexOf(event.item) === -1) {
          scope.model.push(event.item);

          if (scope.onTagsUpdated) {
            scope.onTagsUpdated();
          }
        }

        const tagElement = select.next().children('span').filter(() => {
          return jquery_exposed_default()(this).text() === event.item;
        });
        setColor(event.item, tagElement);
      });
      select.on('itemRemoved', event => {
        const idx = scope.model.indexOf(event.item);

        if (idx !== -1) {
          scope.model.splice(idx, 1);

          if (scope.onTagsUpdated) {
            scope.onTagsUpdated();
          }
        }
      });
      scope.$watch('model', () => {
        if (!angular_default().isArray(scope.model)) {
          scope.model = [];
        }

        select.tagsinput('removeAll');

        for (let i = 0; i < scope.model.length; i++) {
          select.tagsinput('add', scope.model[i]);
        }
      }, true);
    }
  };
}

core_module/* default.directive */.ZP.directive('tagColorFromName', tagColorFromName);
core_module/* default.directive */.ZP.directive('bootstrapTagsinput', bootstrapTagsinput);
;// CONCATENATED MODULE: ./public/app/angular/rebuild_on_change.ts
rebuildOnChange.$inject = ["$animate"];



function getBlockNodes(nodes) {
  let node = nodes[0];
  const endNode = nodes[nodes.length - 1];
  let blockNodes;
  node = node.nextSibling;

  for (let i = 1; node !== endNode && node; i++) {
    if (blockNodes || nodes[i] !== node) {
      if (!blockNodes) {
        blockNodes = jquery_exposed_default()([].slice.call(nodes, 0, i));
      }

      blockNodes.push(node);
    }

    node = node.nextSibling;
  }

  return blockNodes || nodes;
}
/** @ngInject */


function rebuildOnChange($animate) {
  return {
    multiElement: true,
    terminal: true,
    transclude: true,
    priority: 600,
    restrict: 'E',
    link: (scope, elem, attrs, ctrl, transclude) => {
      let block, childScope, previousElements;

      function cleanUp() {
        if (previousElements) {
          previousElements.remove();
          previousElements = null;
        }

        if (childScope) {
          childScope.$destroy();
          childScope = null;
        }

        if (block) {
          previousElements = getBlockNodes(block.clone);
          $animate.leave(previousElements).then(() => {
            previousElements = null;
          });
          block = null;
        }
      }

      scope.$watch(attrs.property, function rebuildOnChangeAction(value, oldValue) {
        if (childScope && value !== oldValue) {
          cleanUp();
        }

        if (!childScope && (value || attrs.showNull)) {
          transclude((clone, newScope) => {
            childScope = newScope;
            clone[clone.length++] = document.createComment(' end rebuild on change ');
            block = {
              clone: clone
            };
            $animate.enter(clone, elem.parent(), elem);
          });
        } else {
          cleanUp();
        }
      });
    }
  };
}

core_module/* default.directive */.ZP.directive('rebuildOnChange', rebuildOnChange);
;// CONCATENATED MODULE: ./public/app/angular/give_focus.ts

core_module/* default.directive */.ZP.directive('giveFocus', () => {
  return (scope, element, attrs) => {
    element.click(e => {
      e.stopPropagation();
    });
    scope.$watch(attrs.giveFocus, newValue => {
      if (!newValue) {
        return;
      }

      setTimeout(() => {
        element.focus();
        const domEl = element[0];

        if (domEl.setSelectionRange) {
          const pos = element.val().length * 2;
          domEl.setSelectionRange(pos, pos);
        }
      }, 200);
    }, true);
  };
});
/* harmony default export */ const give_focus = ({});
;// CONCATENATED MODULE: ./public/app/angular/diff-view.ts
function diff_view_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DeltaCtrl {
  /** @ngInject */
  constructor() {
    diff_view_defineProperty(this, "observer", void 0);

    const waitForCompile = () => {};

    this.observer = new MutationObserver(waitForCompile);
    const observerConfig = {
      attributes: true,
      attributeFilter: ['class'],
      characterData: false,
      childList: true,
      subtree: false
    };
    this.observer.observe(angular_default().element('.delta-html')[0], observerConfig);
  }

  $onDestroy() {
    this.observer.disconnect();
  }

}
DeltaCtrl.$inject = [];
function delta() {
  return {
    controller: DeltaCtrl,
    replace: false,
    restrict: 'A'
  };
}
core_module/* default.directive */.ZP.directive('diffDelta', delta); // Link to JSON line number

class LinkJSONCtrl {
  /** @ngInject */
  constructor($scope, $rootScope, $anchorScroll) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$anchorScroll = $anchorScroll;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$anchorScroll = $anchorScroll;
  }

  goToLine(line) {
    let unbind;

    const scroll = () => {
      this.$anchorScroll(`l${line}`);
      unbind();
    };

    this.$scope.switchView().then(() => {
      unbind = this.$rootScope.$on('json-diff-ready', scroll.bind(this));
    });
  }

}
LinkJSONCtrl.$inject = ["$scope", "$rootScope", "$anchorScroll"];
function linkJson() {
  return {
    controller: LinkJSONCtrl,
    controllerAs: 'ctrl',
    replace: true,
    restrict: 'E',
    scope: {
      line: '@lineDisplay',
      link: '@lineLink',
      switchView: '&'
    },
    template: `<a class="diff-linenum btn btn-inverse btn-small" ng-click="ctrl.goToLine(link)">Line {{ line }}</a>`
  };
}
core_module/* default.directive */.ZP.directive('diffLinkJson', linkJson);
;// CONCATENATED MODULE: ./public/app/angular/array_join.ts


function arrayJoin() {
  'use strict';

  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attr, ngModel) => {
      function split_array(text) {
        return (text || '').split(',');
      }

      function join_array(text) {
        if ((0,lodash.isArray)(text)) {
          return (text || '').join(',');
        } else {
          return text;
        }
      }

      ngModel.$parsers.push(split_array);
      ngModel.$formatters.push(join_array);
    }
  };
}
core_module/* default.directive */.ZP.directive('arrayJoin', arrayJoin);
// EXTERNAL MODULE: ./public/app/core/utils/ConfigProvider.tsx
var ConfigProvider = __webpack_require__("./public/app/core/utils/ConfigProvider.tsx");
;// CONCATENATED MODULE: ./public/app/angular/react2angular.ts


function react2AngularDirective(name, component, options) {
  core_module/* default.directive */.ZP.directive(name, ['reactDirective', reactDirective => {
    return reactDirective((0,ConfigProvider/* provideTheme */.ER)(component), options);
  }]);
}
// EXTERNAL MODULE: ./public/app/core/components/Select/FolderPicker.tsx
var FolderPicker = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/DashboardSettings/TimePickerSettings.tsx + 1 modules
var TimePickerSettings = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/TimePickerSettings.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/index.ts + 14 modules
var components = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/AnnotationQueryEditor.tsx
var _AnnotationsHelp;

function AnnotationQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const {
  Input
} = grafana_ui_src.LegacyForms;
const DefaultTarget = {
  editorMode: types/* EditorMode.Visual */.je.Visual,
  projectName: '',
  projects: [],
  metricType: '',
  filters: [],
  metricKind: types/* MetricKind.GAUGE */.lH.GAUGE,
  valueType: '',
  refId: 'annotationQuery',
  title: '',
  text: '',
  labels: {},
  variableOptionGroup: {},
  variableOptions: []
};
class AnnotationQueryEditor extends react.Component {
  constructor() {
    super(...arguments);

    AnnotationQueryEditor_defineProperty(this, "state", DefaultTarget);

    AnnotationQueryEditor_defineProperty(this, "onMetricTypeChange", _ref => {
      let {
        valueType,
        metricKind,
        type,
        unit
      } = _ref;
      const {
        onQueryChange,
        datasource
      } = this.props;
      this.setState({
        metricType: type,
        unit,
        valueType,
        metricKind
      }, () => {
        onQueryChange(this.state);
      });
      datasource.getLabels(type, this.state.refId, this.state.projectName).then(labels => this.setState({
        labels
      }));
    });
  }

  async UNSAFE_componentWillMount() {
    // Unfortunately, migrations like this need to go UNSAFE_componentWillMount. As soon as there's
    // migration hook for this module.ts, we can do the migrations there instead.
    const {
      target,
      datasource
    } = this.props;

    if (!target.projectName) {
      target.projectName = datasource.getDefaultProject();
    }

    const variableOptionGroup = {
      label: 'Template Variables',
      options: datasource.getVariables().map(src.toOption)
    };
    const projects = await datasource.getProjects();
    this.setState(Object.assign({
      variableOptionGroup,
      variableOptions: variableOptionGroup.options
    }, target, {
      projects
    }));
    datasource.getLabels(target.metricType, target.projectName, target.refId).then(labels => this.setState({
      labels
    }));
  }

  onChange(prop, value) {
    this.setState({
      [prop]: value
    }, () => {
      this.props.onQueryChange(this.state);
    });
  }

  render() {
    const {
      metricType,
      projectName,
      filters,
      title,
      text,
      variableOptionGroup,
      labels,
      variableOptions
    } = this.state;
    const {
      datasource
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* Project */.IK, {
        refId: this.props.refId,
        templateVariableOptions: variableOptions,
        datasource: datasource,
        projectName: projectName || datasource.getDefaultProject(),
        onChange: value => this.onChange('projectName', value)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* Metrics */.C3, {
        refId: this.props.refId,
        projectName: projectName,
        metricType: metricType,
        templateSrv: datasource.templateSrv,
        datasource: datasource,
        templateVariableOptions: variableOptions,
        onChange: metric => this.onMetricTypeChange(metric),
        children: metric => /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* LabelFilter */.pj, {
            labels: labels,
            filters: filters,
            onChange: value => this.onChange('filters', value),
            variableOptionGroup: variableOptionGroup
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* QueryEditorRow */.x5, {
        label: "Title",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
          type: "text",
          className: "gf-form-input width-20",
          value: title,
          onChange: e => this.onChange('title', e.target.value)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* QueryEditorRow */.x5, {
        label: "Text",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
          type: "text",
          className: "gf-form-input width-20",
          value: text,
          onChange: e => this.onChange('text', e.target.value)
        })
      }), _AnnotationsHelp || (_AnnotationsHelp = /*#__PURE__*/(0,jsx_runtime.jsx)(components/* AnnotationsHelp */.zI, {}))]
    });
  }

}
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx
var QueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/core/components/Footer/Footer.tsx
var Footer = __webpack_require__("./public/app/core/components/Footer/Footer.tsx");
// EXTERNAL MODULE: ./public/app/core/components/PageHeader/PageHeader.tsx
var PageHeader = __webpack_require__("./public/app/core/components/PageHeader/PageHeader.tsx");
;// CONCATENATED MODULE: ./public/app/core/components/Select/MetricSelect.tsx




const {
  Select
} = grafana_ui_src.LegacyForms;
const MetricSelect = props => {
  const {
    value,
    placeholder,
    className,
    isSearchable,
    onChange
  } = props;
  const options = useSelectOptions(props);
  const selected = useSelectedOption(options, value);
  const onChangeValue = (0,react.useCallback)(selectable => onChange(selectable.value), [onChange]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
    className: className,
    isMulti: false,
    isClearable: false,
    backspaceRemovesValue: false,
    onChange: onChangeValue,
    options: options,
    isSearchable: isSearchable,
    maxMenuHeight: 500,
    placeholder: placeholder,
    noOptionsMessage: () => 'No options found',
    value: selected
  });
};

const useSelectOptions = _ref => {
  let {
    variables = [],
    options
  } = _ref;
  return (0,react.useMemo)(() => {
    if (!Array.isArray(variables) || variables.length === 0) {
      return options;
    }

    return [{
      label: 'Template Variables',
      options: variables.map(_ref2 => {
        let {
          name
        } = _ref2;
        return {
          label: `$${name}`,
          value: `$${name}`
        };
      })
    }, ...options];
  }, [variables, options]);
};

const useSelectedOption = (options, value) => {
  return (0,react.useMemo)(() => {
    const allOptions = options.every(o => o.options) ? (0,lodash.flatten)(options.map(o => o.options)) : options;
    return allOptions.find(option => option.value === value);
  }, [options, value]);
};
// EXTERNAL MODULE: ./public/app/core/components/TagFilter/TagFilter.tsx + 1 modules
var TagFilter = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
// EXTERNAL MODULE: ./public/app/core/components/help/HelpModal.tsx
var HelpModal = __webpack_require__("./public/app/core/components/help/HelpModal.tsx");
// EXTERNAL MODULE: ./public/app/features/search/index.ts + 4 modules
var search = __webpack_require__("./public/app/features/search/index.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx
var LokiOptionFields = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/loki/components/LokiQueryField.tsx + 1 modules
var LokiQueryField = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/loki/components/AnnotationsQueryEditor.tsx
// Libraries
 // Types




const LokiAnnotationsQueryEditor = /*#__PURE__*/(0,react.memo)(function LokiAnnotationQueryEditor(props) {
  var _queryWithRefId$maxLi;

  const {
    expr,
    maxLines,
    instant,
    datasource,
    onChange
  } = props;
  const queryWithRefId = {
    refId: '',
    expr,
    maxLines,
    instant
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "gf-form-group",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(LokiQueryField/* LokiQueryField */.n, {
      datasource: datasource,
      query: queryWithRefId,
      onChange: onChange,
      onRunQuery: () => {},
      onBlur: () => {},
      history: [],
      ExtraFieldElement: /*#__PURE__*/(0,jsx_runtime.jsx)(LokiOptionFields/* LokiOptionFields */.JX, {
        lineLimitValue: (queryWithRefId === null || queryWithRefId === void 0 ? void 0 : (_queryWithRefId$maxLi = queryWithRefId.maxLines) === null || _queryWithRefId$maxLi === void 0 ? void 0 : _queryWithRefId$maxLi.toString()) || '',
        resolution: queryWithRefId.resolution || 1,
        query: queryWithRefId,
        onRunQuery: () => {},
        onChange: onChange
      })
    })
  });
});
;// CONCATENATED MODULE: ./public/app/angular/angular_wrappers.ts














const {
  SecretFormField
} = grafana_ui_src.LegacyForms;
function registerAngularDirectives() {
  react2AngularDirective('footer', Footer/* Footer */.$_, []);
  react2AngularDirective('icon', grafana_ui_src.Icon, ['name', 'size', 'type', ['onClick', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('spinner', grafana_ui_src.Spinner, ['inline']);
  react2AngularDirective('helpModal', HelpModal/* HelpModal */.B, []);
  react2AngularDirective('pageHeader', PageHeader/* default */.Z, ['model', 'noTabs']);
  react2AngularDirective('emptyListCta', EmptyListCTA/* default */.Z, ['title', 'buttonIcon', 'buttonLink', 'buttonTitle', ['onClick', {
    watchDepth: 'reference',
    wrapApply: true
  }], 'proTip', 'proTipLink', 'proTipLinkTitle', 'proTipTarget', 'infoBox', 'infoBoxTitle']); //Search

  react2AngularDirective('searchField', search/* SearchField */.Um, ['query', 'autoFocus', ['onChange', {
    watchDepth: 'reference'
  }], ['onKeyDown', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('searchResults', search/* SearchResults */.sZ, ['results', 'editable', 'selectors', ['onSelectionChanged', {
    watchDepth: 'reference'
  }], ['onTagSelected', {
    watchDepth: 'reference'
  }], ['onFolderExpanding', {
    watchDepth: 'reference'
  }], ['onToggleSelection', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('searchFilters', search/* SearchResultsFilter */.fC, ['allChecked', 'canMove', 'canDelete', 'tagFilterOptions', 'selectedStarredFilter', 'selectedTagFilter', ['onSelectAllChanged', {
    watchDepth: 'reference'
  }], ['deleteItem', {
    watchDepth: 'reference'
  }], ['moveTo', {
    watchDepth: 'reference'
  }], ['onStarredFilterChange', {
    watchDepth: 'reference'
  }], ['onTagFilterChange', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('tagFilter', TagFilter/* TagFilter */.D, ['tags', ['onChange', {
    watchDepth: 'reference'
  }], ['tagOptions', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('colorPicker', grafana_ui_src.ColorPicker, ['color', ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('seriesColorPickerPopover', grafana_ui_src.SeriesColorPickerPopoverWithTheme, ['color', 'series', 'onColorChange', 'onToggleAxis']);
  react2AngularDirective('unitPicker', grafana_ui_src.UnitPicker, ['value', 'width', ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('metricSelect', MetricSelect, ['options', 'onChange', 'value', 'isSearchable', 'className', 'placeholder', ['variables', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('cloudMonitoringQueryEditor', QueryEditor/* QueryEditor */.W, ['target', 'onQueryChange', 'onExecuteQuery', ['events', {
    watchDepth: 'reference'
  }], ['datasource', {
    watchDepth: 'reference'
  }], ['templateSrv', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('cloudMonitoringAnnotationQueryEditor', AnnotationQueryEditor, ['target', 'onQueryChange', ['datasource', {
    watchDepth: 'reference'
  }], ['templateSrv', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('secretFormField', SecretFormField, ['value', 'isConfigured', 'inputWidth', 'labelWidth', 'aria-label', ['onReset', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('graphContextMenu', grafana_ui_src.GraphContextMenu, ['x', 'y', 'itemsGroup', ['onClose', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['getContextMenuSource', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['timeZone', {
    watchDepth: 'reference',
    wrapApply: true
  }]]); // We keep the drilldown terminology here because of as using data-* directive
  // being in conflict with HTML data attributes

  react2AngularDirective('drilldownLinksEditor', grafana_ui_src.DataLinksInlineEditor, ['value', 'links', 'suggestions', ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('lokiAnnotationsQueryEditor', LokiAnnotationsQueryEditor, ['expr', 'maxLines', 'instant', 'onChange', ['datasource', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('datasourceHttpSettingsNext', grafana_ui_src.DataSourceHttpSettings, ['defaultUrl', 'showAccessOptions', 'dataSourceConfig', 'showForwardOAuthIdentityOption', ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('folderPicker', FolderPicker/* FolderPicker */.E, ['labelClass', 'rootName', 'enableCreateNew', 'enableReset', 'initialTitle', 'initialFolderId', 'dashboardId', 'onCreateFolder', ['enterFolderCreation', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['exitFolderCreation', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onLoad', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('timePickerSettings', TimePickerSettings/* TimePickerSettings */.P, ['renderCount', 'refreshIntervals', 'timePickerHidden', 'nowDelay', 'timezone', ['onTimeZoneChange', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onRefreshIntervalChange', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onNowDelayChange', {
    watchDepth: 'reference',
    wrapApply: true
  }], ['onHideTimePickerChange', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('clipboardButton', grafana_ui_src.ClipboardButton, [['getText', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
}
// EXTERNAL MODULE: ./public/app/angular/promiseToDigest.ts
var promiseToDigest = __webpack_require__("./public/app/angular/promiseToDigest.ts");
;// CONCATENATED MODULE: ./public/app/angular/components/query_part_editor.ts
queryPartEditorDirective.$inject = ["templateSrv"];




const template = `
<div class="dropdown cascade-open">
<a ng-click="showActionsMenu()" class="query-part-name pointer dropdown-toggle" data-toggle="dropdown">{{part.def.type}}</a>
<span>(</span><span class="query-part-parameters"></span><span>)</span>
<ul class="dropdown-menu">
  <li ng-repeat="action in partActions">
    <a ng-click="triggerPartAction(action)">{{action.text}}</a>
  </li>
</ul>
`;
/** @ngInject */

function queryPartEditorDirective(templateSrv) {
  const paramTemplate = '<input type="text" class="hide input-mini tight-form-func-param"></input>';
  return {
    restrict: 'E',
    template: template,
    scope: {
      part: '=',
      handleEvent: '&',
      debounce: '@'
    },
    link: function postLink($scope, elem) {
      const part = $scope.part;
      const partDef = part.def;
      const $paramsContainer = elem.find('.query-part-parameters');
      const debounceLookup = $scope.debounce;
      $scope.partActions = [];

      function clickFuncParam(paramIndex) {
        const $link = jquery_exposed_default()(this);
        const $input = $link.next();
        $input.val(part.params[paramIndex]);
        $input.css('width', $link.width() + 16 + 'px');
        $link.hide();
        $input.show();
        $input.focus();
        $input.select();
        const typeahead = $input.data('typeahead');

        if (typeahead) {
          $input.val('');
          typeahead.lookup();
        }
      }

      function inputBlur(paramIndex) {
        const $input = jquery_exposed_default()(this);
        const $link = $input.prev();
        const newValue = $input.val();

        if (newValue !== '' || part.def.params[paramIndex].optional) {
          $link.html(templateSrv.highlightVariablesAsHtml(newValue));
          part.updateParam($input.val(), paramIndex);
          $scope.$apply(() => {
            $scope.handleEvent({
              $event: {
                name: 'part-param-changed'
              }
            });
          });
        }

        $input.hide();
        $link.show();
      }

      function inputKeyPress(paramIndex, e) {
        if (e.which === 13) {
          inputBlur.call(this, paramIndex);
        }
      }

      function inputKeyDown() {
        this.style.width = (3 + this.value.length) * 8 + 'px';
      }

      function addTypeahead($input, param, paramIndex) {
        if (!param.options && !param.dynamicLookup) {
          return;
        }

        const typeaheadSource = (query, callback) => {
          if (param.options) {
            let options = param.options;

            if (param.type === 'int') {
              options = (0,lodash.map)(options, val => {
                return val.toString();
              });
            }

            return options;
          }

          $scope.$apply(() => {
            $scope.handleEvent({
              $event: {
                name: 'get-param-options'
              }
            }).then(result => {
              const dynamicOptions = (0,lodash.map)(result, op => {
                return (0,lodash.escape)(op.value);
              });
              callback(dynamicOptions);
            });
          });
        };

        $input.attr('data-provide', 'typeahead');
        $input.typeahead({
          source: typeaheadSource,
          minLength: 0,
          items: 1000,
          updater: value => {
            value = (0,lodash.unescape)(value);
            setTimeout(() => {
              inputBlur.call($input[0], paramIndex);
            }, 0);
            return value;
          }
        });
        const typeahead = $input.data('typeahead');

        typeahead.lookup = function () {
          this.query = this.$element.val() || '';
          const items = this.source(this.query, jquery_exposed_default().proxy(this.process, this));
          return items ? this.process(items) : items;
        };

        if (debounceLookup) {
          typeahead.lookup = (0,lodash.debounce)(typeahead.lookup, 500, {
            leading: true
          });
        }
      }

      $scope.showActionsMenu = () => {
        (0,promiseToDigest/* promiseToDigest */.E)($scope)($scope.handleEvent({
          $event: {
            name: 'get-part-actions'
          }
        }).then(res => {
          $scope.partActions = res;
        }));
      };

      $scope.triggerPartAction = action => {
        $scope.handleEvent({
          $event: {
            name: 'action',
            action: action
          }
        });
      };

      function addElementsAndCompile() {
        (0,lodash.each)(partDef.params, (param, index) => {
          if (param.optional && part.params.length <= index) {
            return;
          }

          if (index > 0) {
            jquery_exposed_default()('<span>, </span>').appendTo($paramsContainer);
          }

          const paramValue = templateSrv.highlightVariablesAsHtml(part.params[index]);
          const $paramLink = jquery_exposed_default()('<a class="graphite-func-param-link pointer">' + paramValue + '</a>');
          const $input = jquery_exposed_default()(paramTemplate);
          $paramLink.appendTo($paramsContainer);
          $input.appendTo($paramsContainer);
          $input.blur((0,lodash.partial)(inputBlur, index));
          $input.keyup(inputKeyDown);
          $input.keypress((0,lodash.partial)(inputKeyPress, index));
          $paramLink.click((0,lodash.partial)(clickFuncParam, index));
          addTypeahead($input, param, index);
        });
      }

      function relink() {
        $paramsContainer.empty();
        addElementsAndCompile();
      }

      relink();
    }
  };
}
core_module/* default.directive */.ZP.directive('queryPartEditor', queryPartEditorDirective);
;// CONCATENATED MODULE: ./public/app/angular/components/form_dropdown/form_dropdown.ts
function form_dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function typeaheadMatcher(item) {
  let str = this.query;

  if (str === '') {
    return true;
  }

  if (str[0] === '/') {
    str = str.substring(1);
  }

  if (str[str.length - 1] === '/') {
    str = str.substring(0, str.length - 1);
  }

  return item.toLowerCase().match(str.toLowerCase());
}

class FormDropdownCtrl {
  /** @ngInject */
  constructor($scope, $element, $sce, templateSrv) {
    this.$scope = $scope;
    this.$sce = $sce;
    this.templateSrv = templateSrv;

    form_dropdown_defineProperty(this, "inputElement", void 0);

    form_dropdown_defineProperty(this, "linkElement", void 0);

    form_dropdown_defineProperty(this, "model", void 0);

    form_dropdown_defineProperty(this, "display", void 0);

    form_dropdown_defineProperty(this, "text", void 0);

    form_dropdown_defineProperty(this, "options", void 0);

    form_dropdown_defineProperty(this, "cssClass", void 0);

    form_dropdown_defineProperty(this, "cssClasses", void 0);

    form_dropdown_defineProperty(this, "allowCustom", void 0);

    form_dropdown_defineProperty(this, "labelMode", void 0);

    form_dropdown_defineProperty(this, "linkMode", void 0);

    form_dropdown_defineProperty(this, "cancelBlur", void 0);

    form_dropdown_defineProperty(this, "onChange", void 0);

    form_dropdown_defineProperty(this, "getOptions", void 0);

    form_dropdown_defineProperty(this, "optionCache", void 0);

    form_dropdown_defineProperty(this, "lookupText", void 0);

    form_dropdown_defineProperty(this, "placeholder", void 0);

    form_dropdown_defineProperty(this, "startOpen", void 0);

    form_dropdown_defineProperty(this, "debounce", void 0);

    this.$scope = $scope;
    this.$sce = $sce;
    this.templateSrv = templateSrv;
    this.inputElement = $element.find('input').first();
    this.linkElement = $element.find('a').first();
    this.linkMode = true;
    this.cancelBlur = null;
    this.labelMode = false;
    this.lookupText = false;
    this.debounce = false; // listen to model changes

    $scope.$watch('ctrl.model', this.modelChanged.bind(this));
  }

  $onInit() {
    if (this.labelMode) {
      this.cssClasses = 'gf-form-label ' + this.cssClass;
    } else {
      this.cssClasses = 'gf-form-input gf-form-input--dropdown ' + this.cssClass;
    }

    if (this.placeholder) {
      this.inputElement.attr('placeholder', this.placeholder);
    }

    this.inputElement.attr('data-provide', 'typeahead');
    this.inputElement.typeahead({
      source: this.typeaheadSource.bind(this),
      minLength: 0,
      items: 10000,
      updater: this.typeaheadUpdater.bind(this),
      matcher: typeaheadMatcher
    }); // modify typeahead lookup
    // this = typeahead

    const typeahead = this.inputElement.data('typeahead');

    typeahead.lookup = function () {
      this.query = this.$element.val() || '';
      this.source(this.query, this.process.bind(this));
    };

    if (this.debounce) {
      typeahead.lookup = (0,lodash.debounce)(typeahead.lookup, 500, {
        leading: true
      });
    }

    this.linkElement.keydown(evt => {
      // trigger typeahead on down arrow or enter key
      if (evt.keyCode === 40 || evt.keyCode === 13) {
        this.linkElement.click();
      }
    });
    this.inputElement.keydown(evt => {
      if (evt.keyCode === 13) {
        setTimeout(() => {
          this.inputElement.blur();
        }, 300);
      }
    });
    this.inputElement.blur(this.inputBlur.bind(this));

    if (this.startOpen) {
      setTimeout(this.open.bind(this), 0);
    }
  }

  getOptionsInternal(query) {
    return (0,promiseToDigest/* promiseToDigest */.E)(this.$scope)(Promise.resolve(this.getOptions({
      $query: query
    })));
  }

  isPromiseLike(obj) {
    return obj && typeof obj.then === 'function';
  }

  modelChanged() {
    if ((0,lodash.isObject)(this.model)) {
      this.updateDisplay(this.model.text);
    } else {
      // if we have text use it
      if (this.lookupText) {
        this.getOptionsInternal('').then(options => {
          const item = (0,lodash.find)(options, {
            value: this.model
          });
          this.updateDisplay(item ? item.text : this.model);
        });
      } else {
        this.updateDisplay(this.model);
      }
    }
  }

  typeaheadSource(query, callback) {
    this.getOptionsInternal(query).then(options => {
      this.optionCache = options; // extract texts

      const optionTexts = (0,lodash.map)(options, op => {
        return (0,lodash.escape)(op.text);
      }); // add custom values

      if (this.allowCustom && this.text !== '') {
        if ((0,lodash.indexOf)(optionTexts, this.text) === -1) {
          optionTexts.unshift(this.text);
        }
      }

      callback(optionTexts);
    });
  }

  typeaheadUpdater(text) {
    if (text === this.text) {
      clearTimeout(this.cancelBlur);
      this.inputElement.focus();
      return text;
    }

    this.inputElement.val(text);
    this.switchToLink(true);
    return text;
  }

  switchToLink(fromClick) {
    if (this.linkMode && !fromClick) {
      return;
    }

    clearTimeout(this.cancelBlur);
    this.cancelBlur = null;
    this.linkMode = true;
    this.inputElement.hide();
    this.linkElement.show();
    this.updateValue(this.inputElement.val());
  }

  inputBlur() {
    // happens long before the click event on the typeahead options
    // need to have long delay because the blur
    this.cancelBlur = setTimeout(this.switchToLink.bind(this), 200);
  }

  updateValue(text) {
    text = (0,lodash.unescape)(text);

    if (text === '' || this.text === text) {
      return;
    }

    this.$scope.$apply(() => {
      const option = (0,lodash.find)(this.optionCache, {
        text: text
      });

      if (option) {
        if ((0,lodash.isObject)(this.model)) {
          this.model = option;
        } else {
          this.model = option.value;
        }

        this.text = option.text;
      } else if (this.allowCustom) {
        if ((0,lodash.isObject)(this.model)) {
          this.model.text = this.model.value = text;
        } else {
          this.model = text;
        }

        this.text = text;
      } // needs to call this after digest so
      // property is synced with outerscope


      this.$scope.$$postDigest(() => {
        this.$scope.$apply(() => {
          this.onChange({
            $option: option
          });
        });
      });
    });
  }

  updateDisplay(text) {
    this.text = text;
    this.display = this.$sce.trustAsHtml(this.templateSrv.highlightVariablesAsHtml(text));
  }

  open() {
    this.inputElement.css('width', Math.max(this.linkElement.width(), 80) + 16 + 'px');
    this.inputElement.show();
    this.inputElement.focus();
    this.linkElement.hide();
    this.linkMode = false;
    const typeahead = this.inputElement.data('typeahead');

    if (typeahead) {
      this.inputElement.val('');
      typeahead.lookup();
    }
  }

}
FormDropdownCtrl.$inject = ["$scope", "$element", "$sce", "templateSrv"];
const form_dropdown_template = `
<input type="text"
  data-provide="typeahead"
  class="gf-form-input"
  spellcheck="false"
  style="display:none">
</input>
<a ng-class="ctrl.cssClasses"
   tabindex="1"
   ng-click="ctrl.open()"
   give-focus="ctrl.focus"
   ng-bind-html="ctrl.display || '&nbsp;'">
</a>
`;
function formDropdownDirective() {
  return {
    restrict: 'E',
    template: form_dropdown_template,
    controller: FormDropdownCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      model: '=',
      getOptions: '&',
      onChange: '&',
      cssClass: '@',
      allowCustom: '@',
      labelMode: '@',
      lookupText: '@',
      placeholder: '@',
      startOpen: '@',
      debounce: '@'
    }
  };
}
core_module/* default.directive */.ZP.directive('gfFormDropdown', formDropdownDirective);
;// CONCATENATED MODULE: ./public/app/angular/components/scroll.ts
// @ts-ignore



const scrollBarHTML = `
<div class="baron__track">
  <div class="baron__bar"></div>
</div>
`;
const scrollRootClass = 'baron baron__root';
const scrollerClass = 'baron__scroller';
function geminiScrollbar() {
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {
      let scrollRoot = elem.parent();
      const scroller = elem;

      if (attrs.grafanaScrollbar && attrs.grafanaScrollbar === 'scrollonroot') {
        scrollRoot = scroller;
      }

      scrollRoot.addClass(scrollRootClass);
      jquery_exposed_default()(scrollBarHTML).appendTo(scrollRoot);
      elem.addClass(scrollerClass);
      const scrollParams = {
        root: scrollRoot[0],
        scroller: scroller[0],
        bar: '.baron__bar',
        barOnCls: '_scrollbar',
        scrollingCls: '_scrolling',
        track: '.baron__track',
        direction: 'v'
      };
      const scrollbar = core_default()(scrollParams);
      scope.$on('$destroy', () => {
        scrollbar.dispose();
      });
    }
  };
}
core_module/* default.directive */.ZP.directive('grafanaScrollbar', geminiScrollbar);
;// CONCATENATED MODULE: ./public/app/angular/components/jsontree.ts


core_module/* default.directive */.ZP.directive('jsonTree', [function jsonTreeDirective() {
  return {
    restrict: 'E',
    scope: {
      object: '=',
      startExpanded: '@',
      rootName: '@'
    },
    link: (scope, elem) => {
      let expansionLevel = scope.startExpanded;

      if (scope.startExpanded === 'true') {
        expansionLevel = 2;
      } else if (scope.startExpanded === 'false') {
        expansionLevel = 1;
      }

      const jsonObject = {
        [scope.rootName]: scope.object
      };
      const jsonExp = new grafana_ui_src.JsonExplorer(jsonObject, expansionLevel, {
        animateOpen: true
      });
      const html = jsonExp.render(true);
      elem.append(html);
    }
  };
}]);
;// CONCATENATED MODULE: ./public/app/angular/components/switch.ts
function switch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const switch_template = `
<label for="check-{{ctrl.id}}" class="gf-form-switch-container">
  <div class="gf-form-label {{ctrl.labelClass}}" ng-show="ctrl.label">
    {{ctrl.label}}
    <info-popover mode="right-normal" ng-if="ctrl.tooltip" position="top center">
      {{ctrl.tooltip}}
    </info-popover>
  </div>
  <div class="gf-form-switch {{ctrl.switchClass}}" ng-if="ctrl.show">
    <input id="check-{{ctrl.id}}" type="checkbox" ng-model="ctrl.checked" ng-change="ctrl.internalOnChange()">
    <span class="gf-form-switch__slider"></span>
  </div>
</label>
`;
const checkboxTemplate = `
<label for="check-{{ctrl.id}}" class="gf-form-switch-container">
   <div class="gf-form-label {{ctrl.labelClass}}" ng-show="ctrl.label">
    {{ctrl.label}}
    <info-popover mode="right-normal" ng-if="ctrl.tooltip" position="top center">
      {{ctrl.tooltip}}
    </info-popover>
  </div>
  <div class="gf-form-checkbox {{ctrl.switchClass}}" ng-if="ctrl.show">
    <input id="check-{{ctrl.id}}" type="checkbox" ng-model="ctrl.checked" ng-change="ctrl.internalOnChange()">
    <span class="gf-form-switch__checkbox"></span>
  </div>
</label>
`;
class SwitchCtrl {
  /** @ngInject */
  constructor($scope, $timeout) {
    this.$timeout = $timeout;

    switch_defineProperty(this, "onChange", void 0);

    switch_defineProperty(this, "checked", void 0);

    switch_defineProperty(this, "show", void 0);

    switch_defineProperty(this, "id", void 0);

    switch_defineProperty(this, "label", void 0);

    this.$timeout = $timeout;
    this.show = true;
    this.id = $scope.$id;
  }

  internalOnChange() {
    return this.$timeout(() => {
      return this.onChange();
    });
  }

}
SwitchCtrl.$inject = ["$scope", "$timeout"];
function switchDirective() {
  return {
    restrict: 'E',
    controller: SwitchCtrl,
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      checked: '=',
      label: '@',
      labelClass: '@',
      tooltip: '@',
      switchClass: '@',
      onChange: '&'
    },
    template: switch_template
  };
}
function checkboxDirective() {
  return {
    restrict: 'E',
    controller: SwitchCtrl,
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      checked: '=',
      label: '@',
      labelClass: '@',
      tooltip: '@',
      switchClass: '@',
      onChange: '&'
    },
    template: checkboxTemplate
  };
}
core_module/* default.directive */.ZP.directive('gfFormSwitch', switchDirective);
core_module/* default.directive */.ZP.directive('gfFormCheckbox', checkboxDirective);
;// CONCATENATED MODULE: ./public/app/angular/components/info_popover.ts
 // @ts-ignore



function infoPopover() {
  return {
    restrict: 'E',
    template: `<icon name="'info-circle'" style="margin-left: 10px;" size="'xs'"></icon>`,
    transclude: true,
    link: (scope, elem, attrs, ctrl, transclude) => {
      const offset = attrs.offset || '0 -10px';
      const position = attrs.position || 'right middle';
      let classes = 'drop-help drop-hide-out-of-bounds';
      const openOn = 'hover';
      elem.addClass('gf-form-help-icon');

      if (attrs.wide) {
        classes += ' drop-wide';
      }

      if (attrs.mode) {
        elem.addClass('gf-form-help-icon--' + attrs.mode);
      }

      transclude((clone, newScope) => {
        const content = document.createElement('div');
        content.className = 'markdown-html';
        (0,lodash.each)(clone, node => {
          content.appendChild(node);
        });
        const dropOptions = {
          target: elem[0],
          content: content,
          position: position,
          classes: classes,
          openOn: openOn,
          hoverOpenDelay: 400,
          tetherOptions: {
            offset: offset,
            constraints: [{
              to: 'window',
              attachment: 'together',
              pin: true
            }]
          }
        }; // Create drop in next digest after directive content is rendered.

        scope.$applyAsync(() => {
          const drop = new (drop_default())(dropOptions);
          const unbind = scope.$on('$destroy', () => {
            drop.destroy();
            unbind();
          });
        });
      });
    }
  };
}
core_module/* default.directive */.ZP.directive('infoPopover', infoPopover);
;// CONCATENATED MODULE: ./public/app/angular/components/spectrum_picker.ts
/**
 * Wrapper for the new ngReact <color-picker> directive for backward compatibility.
 * Allows remaining <spectrum-picker> untouched in outdated plugins.
 * Technically, it's just a wrapper for react component with two-way data binding support.
 */

/** @ngInject */

function spectrumPicker() {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: true,
    replace: true,
    template: '<color-picker color="ngModel.$viewValue" on-change="onColorChange"></color-picker>',
    link: (scope, element, attrs, ngModel) => {
      scope.ngModel = ngModel;

      scope.onColorChange = color => {
        ngModel.$setViewValue(color);
      };
    }
  };
}
core_module/* default.directive */.ZP.directive('spectrumPicker', spectrumPicker);
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/angular/components/code_editor/code_editor.ts
/**
 * codeEditor directive based on Ace code editor
 * https://github.com/ajaxorg/ace
 *
 * Basic usage:
 * <code-editor content="ctrl.target.query" on-change="ctrl.panelCtrl.refresh()"
 *  data-mode="sql" data-show-gutter>
 * </code-editor>
 *
 * Params:
 * content:      Editor content.
 * onChange:     Function called on content change (invoked on editor blur, ctrl+enter, not on every change).
 * getCompleter: Function returned external completer. Completer is an object implemented getCompletions() method,
 *               see Prometheus Data Source implementation for details.
 *
 * Some Ace editor options available via data-* attributes:
 * data-mode               - Language mode (text, sql, javascript, etc.). Default is 'text'.
 * data-theme              - Editor theme (eg 'solarized_dark').
 * data-max-lines          - Max editor height in lines. Editor grows automatically from 1 to maxLines.
 * data-show-gutter        - Show gutter (contains line numbers and additional info).
 * data-tab-size           - Tab size, default is 2.
 * data-behaviours-enabled - Specifies whether to use behaviors or not. "Behaviors" in this case is the auto-pairing of
 *                           special characters, like quotation marks, parenthesis, or brackets.
 * data-snippets-enabled   - Specifies whether to use snippets or not. "Snippets" are small pieces of code that can be
 *                           inserted via the completion box.
 *
 * Keybindings:
 * Ctrl-Enter (Command-Enter): run onChange() function
 */


const DEFAULT_THEME_DARK = 'ace/theme/grafana-dark';
const DEFAULT_THEME_LIGHT = 'ace/theme/textmate';
const DEFAULT_MODE = 'text';
const DEFAULT_MAX_LINES = 10;
const DEFAULT_TAB_SIZE = 2;
const DEFAULT_BEHAVIORS = true;
const DEFAULT_SNIPPETS = true;
const editorTemplate = `<div></div>`;

async function code_editor_link(scope, elem, attrs) {
  // Options
  const langMode = attrs.mode || DEFAULT_MODE;
  const maxLines = attrs.maxLines || DEFAULT_MAX_LINES;
  const showGutter = attrs.showGutter !== undefined;
  const tabSize = attrs.tabSize || DEFAULT_TAB_SIZE;
  const behavioursEnabled = attrs.behavioursEnabled ? attrs.behavioursEnabled === 'true' : DEFAULT_BEHAVIORS;
  const snippetsEnabled = attrs.snippetsEnabled ? attrs.snippetsEnabled === 'true' : DEFAULT_SNIPPETS; // Initialize editor

  const aceElem = elem.get(0);
  const {
    default: ace
  } = await __webpack_require__.e(/* import() | brace */ 5673).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/index.js", 23));
  await __webpack_require__.e(/* import() */ 557).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/ext/language_tools.js", 23));
  await __webpack_require__.e(/* import() */ 7946).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/theme/textmate.js", 23));
  await __webpack_require__.e(/* import() */ 6098).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/text.js", 23));
  await __webpack_require__.e(/* import() */ 7914).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/text.js", 23));
  await __webpack_require__.e(/* import() */ 4934).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/sql.js", 23));
  await __webpack_require__.e(/* import() */ 5808).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/sql.js", 23));
  await __webpack_require__.e(/* import() */ 1669).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/sqlserver.js", 23));
  await __webpack_require__.e(/* import() */ 8520).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/sqlserver.js", 23));
  await __webpack_require__.e(/* import() */ 3154).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/markdown.js", 23));
  await __webpack_require__.e(/* import() */ 9720).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/markdown.js", 23));
  await __webpack_require__.e(/* import() */ 1026).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/json.js", 23));
  await __webpack_require__.e(/* import() */ 9057).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/json.js", 23)); // @ts-ignore

  await __webpack_require__.e(/* import() */ 7428).then(__webpack_require__.t.bind(__webpack_require__, "./public/app/angular/components/code_editor/theme-grafana-dark.js", 23));
  const codeEditor = ace.edit(aceElem);
  const editorSession = codeEditor.getSession();
  const editorOptions = {
    maxLines: maxLines,
    showGutter: showGutter,
    tabSize: tabSize,
    behavioursEnabled: behavioursEnabled,
    highlightActiveLine: false,
    showPrintMargin: false,
    autoScrollEditorIntoView: true // this is needed if editor is inside scrollable page

  }; // Set options

  codeEditor.setOptions(editorOptions); // disable depreacation warning

  codeEditor.$blockScrolling = Infinity; // Padding hacks

  codeEditor.renderer.setScrollMargin(10, 10);
  codeEditor.renderer.setPadding(10);
  setThemeMode();
  setLangMode(langMode);
  setEditorContent(scope.content); // Add classes

  elem.addClass('gf-code-editor');
  const textarea = elem.find('textarea');
  textarea.addClass('gf-form-input'); // All aria-label to be set for accessibility

  textarea.attr('aria-label', attrs.textareaLabel);

  if (scope.codeEditorFocus) {
    setTimeout(() => {
      textarea.focus();
      const domEl = textarea[0];

      if (domEl.setSelectionRange) {
        const pos = textarea.val().length * 2;
        domEl.setSelectionRange(pos, pos);
      }
    }, 100);
  } // Event handlers


  editorSession.on('change', e => {
    scope.$apply(() => {
      const newValue = codeEditor.getValue();
      scope.content = newValue;
    });
  }); // Sync with outer scope - update editor content if model has been changed from outside of directive.

  scope.$watch('content', (newValue, oldValue) => {
    const editorValue = codeEditor.getValue();

    if (newValue !== editorValue && newValue !== oldValue) {
      scope.$$postDigest(() => {
        setEditorContent(newValue);
      });
    }
  });
  codeEditor.on('blur', () => {
    scope.onChange();
  });
  scope.$on('$destroy', () => {
    codeEditor.destroy();
  }); // Keybindings

  codeEditor.commands.addCommand({
    name: 'executeQuery',
    bindKey: {
      win: 'Ctrl-Enter',
      mac: 'Command-Enter'
    },
    exec: () => {
      scope.onChange();
    }
  });

  function setLangMode(lang) {
    ace.acequire('ace/ext/language_tools');
    codeEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: snippetsEnabled
    });

    if (scope.getCompleter()) {
      // make copy of array as ace seems to share completers array between instances
      const anyEditor = codeEditor;
      anyEditor.completers = anyEditor.completers.slice();
      anyEditor.completers.push(scope.getCompleter());
    }

    const aceModeName = `ace/mode/${lang}`;
    editorSession.setMode(aceModeName);
  }

  function setThemeMode() {
    let theme = DEFAULT_THEME_DARK;

    if (config/* default.bootData.user.lightTheme */.ZP.bootData.user.lightTheme) {
      theme = DEFAULT_THEME_LIGHT;
    }

    codeEditor.setTheme(theme);
  }

  function setEditorContent(value) {
    codeEditor.setValue(value);
    codeEditor.clearSelection();
  }
}

function codeEditorDirective() {
  return {
    restrict: 'E',
    template: editorTemplate,
    scope: {
      content: '=',
      datasource: '=',
      codeEditorFocus: '<',
      onChange: '&',
      getCompleter: '&'
    },
    link: code_editor_link
  };
}
core_module/* default.directive */.ZP.directive('codeEditor', codeEditorDirective);
;// CONCATENATED MODULE: ./public/app/angular/components/sql_part/sql_part_editor.ts
sqlPartEditorDirective.$inject = ["templateSrv"];



const sql_part_editor_template = `
<div class="dropdown cascade-open">
<a ng-click="showActionsMenu()" class="query-part-name pointer dropdown-toggle" data-toggle="dropdown">{{part.label}}</a>
<span>{{part.def.wrapOpen}}</span><span class="query-part-parameters"></span><span>{{part.def.wrapClose}}</span>
<ul class="dropdown-menu">
  <li ng-repeat="action in partActions">
    <a ng-click="triggerPartAction(action)">{{action.text}}</a>
  </li>
</ul>
`;
/** @ngInject */

function sqlPartEditorDirective(templateSrv) {
  const paramTemplate = '<input type="text" class="hide input-mini"></input>';
  return {
    restrict: 'E',
    template: sql_part_editor_template,
    scope: {
      part: '=',
      handleEvent: '&',
      debounce: '@'
    },
    link: function postLink($scope, elem) {
      const part = $scope.part;
      const partDef = part.def;
      const $paramsContainer = elem.find('.query-part-parameters');
      const debounceLookup = $scope.debounce;
      let cancelBlur = null;
      $scope.partActions = [];

      function clickFuncParam(paramIndex) {
        const $link = jquery_exposed_default()(this);
        const $input = $link.next();
        $input.val(part.params[paramIndex]);
        $input.css('width', $link.width() + 16 + 'px');
        $link.hide();
        $input.show();
        $input.focus();
        $input.select();
        const typeahead = $input.data('typeahead');

        if (typeahead) {
          $input.val('');
          typeahead.lookup();
        }
      }

      function inputBlur($input, paramIndex) {
        cancelBlur = setTimeout(() => {
          switchToLink($input, paramIndex);
        }, 200);
      }

      function switchToLink($input, paramIndex) {
        const $link = $input.prev();
        const newValue = $input.val();

        if (newValue !== '' || part.def.params[paramIndex].optional) {
          $link.html(templateSrv.highlightVariablesAsHtml(newValue));
          part.updateParam($input.val(), paramIndex);
          $scope.$apply(() => {
            $scope.handleEvent({
              $event: {
                name: 'part-param-changed'
              }
            });
          });
        }

        $input.hide();
        $link.show();
      }

      function inputKeyPress(paramIndex, e) {
        if (e.which === 13) {
          switchToLink(jquery_exposed_default()(this), paramIndex);
        }
      }

      function inputKeyDown() {
        this.style.width = (3 + this.value.length) * 8 + 'px';
      }

      function addTypeahead($input, param, paramIndex) {
        if (!param.options && !param.dynamicLookup) {
          return;
        }

        const typeaheadSource = (query, callback) => {
          if (param.options) {
            let options = param.options;

            if (param.type === 'int') {
              options = (0,lodash.map)(options, val => {
                return val.toString();
              });
            }

            return options;
          }

          $scope.$apply(() => {
            $scope.handleEvent({
              $event: {
                name: 'get-param-options',
                param: param
              }
            }).then(result => {
              const dynamicOptions = (0,lodash.map)(result, op => {
                return (0,lodash.escape)(op.value);
              }); // add current value to dropdown if it's not in dynamicOptions

              if ((0,lodash.indexOf)(dynamicOptions, part.params[paramIndex]) === -1) {
                dynamicOptions.unshift((0,lodash.escape)(part.params[paramIndex]));
              }

              callback(dynamicOptions);
            });
          });
        };

        $input.attr('data-provide', 'typeahead');
        $input.typeahead({
          source: typeaheadSource,
          minLength: 0,
          items: 1000,
          updater: value => {
            value = (0,lodash.unescape)(value);

            if (value === part.params[paramIndex]) {
              clearTimeout(cancelBlur);
              $input.focus();
              return value;
            }

            return value;
          }
        });
        const typeahead = $input.data('typeahead');

        typeahead.lookup = function () {
          this.query = this.$element.val() || '';
          const items = this.source(this.query, jquery_exposed_default().proxy(this.process, this));
          return items ? this.process(items) : items;
        };

        if (debounceLookup) {
          typeahead.lookup = (0,lodash.debounce)(typeahead.lookup, 500, {
            leading: true
          });
        }
      }

      $scope.showActionsMenu = () => {
        $scope.handleEvent({
          $event: {
            name: 'get-part-actions'
          }
        }).then(res => {
          $scope.partActions = res;
        });
      };

      $scope.triggerPartAction = action => {
        $scope.handleEvent({
          $event: {
            name: 'action',
            action: action
          }
        });
      };

      function addElementsAndCompile() {
        (0,lodash.each)(partDef.params, (param, index) => {
          if (param.optional && part.params.length <= index) {
            return;
          }

          if (index > 0) {
            jquery_exposed_default()('<span>' + partDef.separator + '</span>').appendTo($paramsContainer);
          }

          const paramValue = templateSrv.highlightVariablesAsHtml(part.params[index]);
          const $paramLink = jquery_exposed_default()('<a class="query-part__link">' + paramValue + '</a>');
          const $input = jquery_exposed_default()(paramTemplate);
          $paramLink.appendTo($paramsContainer);
          $input.appendTo($paramsContainer);
          $input.blur((0,lodash.partial)(inputBlur, $input, index));
          $input.keyup(inputKeyDown);
          $input.keypress((0,lodash.partial)(inputKeyPress, index));
          $paramLink.click((0,lodash.partial)(clickFuncParam, index));
          addTypeahead($input, param, index);
        });
      }

      function relink() {
        $paramsContainer.empty();
        addElementsAndCompile();
      }

      relink();
    }
  };
}
core_module/* default.directive */.ZP.directive('sqlPartEditor', sqlPartEditorDirective);
;// CONCATENATED MODULE: ./public/app/angular/components/HttpSettingsCtrl.ts

core_module/* coreModule.directive */.hF.directive('datasourceHttpSettings', () => {
  return {
    scope: {
      current: '=',
      suggestUrl: '@',
      noDirectAccess: '@',
      showForwardOAuthIdentityOption: '@'
    },
    templateUrl: 'public/app/angular/partials/http_settings_next.html',
    link: {
      pre: $scope => {
        // do not show access option if direct access is disabled
        $scope.showAccessOption = $scope.noDirectAccess !== 'true';

        $scope.onChange = datasourceSetting => {
          $scope.current = datasourceSetting;
        };
      }
    }
  };
});
;// CONCATENATED MODULE: ./public/app/angular/components/TlsAuthSettingsCtrl.ts

core_module/* coreModule.directive */.hF.directive('datasourceTlsAuthSettings', () => {
  return {
    scope: {
      current: '='
    },
    templateUrl: 'public/app/angular/partials/tls_auth_settings.html'
  };
});
// EXTERNAL MODULE: ./public/app/features/plugins/importPanelPlugin.ts
var importPanelPlugin = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/plugin_loader.ts + 147 modules
var plugin_loader = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
;// CONCATENATED MODULE: ./public/app/angular/components/plugin_component.ts
pluginDirectiveLoader.$inject = ["$compile", "$http", "$templateCache", "$location"];







/** @ngInject */

function pluginDirectiveLoader($compile, $http, $templateCache, $location) {
  function getTemplate(component) {
    if (component.template) {
      return Promise.resolve(component.template);
    }

    const cached = $templateCache.get(component.templateUrl);

    if (cached) {
      return Promise.resolve(cached);
    }

    return $http.get(component.templateUrl).then(res => {
      return res.data;
    });
  }

  function relativeTemplateUrlToAbs(templateUrl, baseUrl) {
    if (!templateUrl) {
      return undefined;
    }

    if (templateUrl.indexOf('public') === 0) {
      return templateUrl;
    }

    return baseUrl + '/' + templateUrl;
  }

  function getPluginComponentDirective(options) {
    // handle relative template urls for plugin templates
    options.Component.templateUrl = relativeTemplateUrlToAbs(options.Component.templateUrl, options.baseUrl);
    return () => {
      return {
        templateUrl: options.Component.templateUrl,
        template: options.Component.template,
        restrict: 'E',
        controller: options.Component,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: options.bindings,
        link: (scope, elem, attrs, ctrl) => {
          if (ctrl.link) {
            ctrl.link(scope, elem, attrs, ctrl);
          }

          if (ctrl.init) {
            ctrl.init();
          }
        }
      };
    };
  }

  function loadPanelComponentInfo(scope, attrs) {
    const componentInfo = {
      name: 'panel-plugin-' + scope.panel.type,
      bindings: {
        dashboard: '=',
        panel: '=',
        row: '='
      },
      attrs: {
        dashboard: 'dashboard',
        panel: 'panel',
        class: 'panel-height-helper'
      }
    };
    const panelInfo = config/* default.panels */.ZP.panels[scope.panel.type];
    return (0,importPanelPlugin/* importPanelPlugin */.U)(panelInfo.id).then(panelPlugin => {
      const PanelCtrl = panelPlugin.angularPanelCtrl;
      componentInfo.Component = PanelCtrl;

      if (!PanelCtrl || PanelCtrl.registered) {
        return componentInfo;
      }

      if (PanelCtrl.templatePromise) {
        return PanelCtrl.templatePromise.then(res => {
          return componentInfo;
        });
      }

      if (panelInfo) {
        PanelCtrl.templateUrl = relativeTemplateUrlToAbs(PanelCtrl.templateUrl, panelInfo.baseUrl);
      }

      PanelCtrl.templatePromise = getTemplate(PanelCtrl).then(template => {
        PanelCtrl.templateUrl = null;
        PanelCtrl.template = `<grafana-panel ctrl="ctrl" class="panel-height-helper">${template}</grafana-panel>`;
        return componentInfo;
      });
      return PanelCtrl.templatePromise;
    });
  }

  function getModule(scope, attrs) {
    switch (attrs.type) {
      // QueryCtrl
      case 'query-ctrl':
        {
          const ds = scope.ctrl.datasource;
          return Promise.resolve({
            baseUrl: ds.meta.baseUrl,
            name: 'query-ctrl-' + ds.meta.id,
            bindings: {
              target: '=',
              panelCtrl: '=',
              datasource: '='
            },
            attrs: {
              target: 'ctrl.target',
              'panel-ctrl': 'ctrl',
              datasource: 'ctrl.datasource'
            },
            Component: ds.components.QueryCtrl
          });
        }
      // Annotations

      case 'annotations-query-ctrl':
        {
          const baseUrl = scope.ctrl.currentDatasource.meta.baseUrl;
          const pluginId = scope.ctrl.currentDatasource.meta.id;
          return (0,plugin_loader/* importDataSourcePlugin */.nL)(scope.ctrl.currentDatasource.meta).then(dsPlugin => {
            return {
              baseUrl,
              name: 'annotations-query-ctrl-' + pluginId,
              bindings: {
                annotation: '=',
                datasource: '='
              },
              attrs: {
                annotation: 'ctrl.currentAnnotation',
                datasource: 'ctrl.currentDatasource'
              },
              Component: dsPlugin.components.AnnotationsQueryCtrl
            };
          });
        }
      // Datasource ConfigCtrl

      case 'datasource-config-ctrl':
        {
          const dsMeta = scope.ctrl.datasourceMeta;
          const angularUrl = $location.url();
          return (0,plugin_loader/* importDataSourcePlugin */.nL)(dsMeta).then(dsPlugin => {
            scope.$watch('ctrl.current', () => {
              // This watcher can trigger when we navigate away due to late digests
              // This check is to stop onModelChanged from being called when navigating away
              // as it triggers a redux action which comes before the angular $routeChangeSucces and
              // This makes the bridgeSrv think location changed from redux before detecting it was actually
              // changed from angular.
              if (angularUrl === $location.url()) {
                scope.onModelChanged(scope.ctrl.current);
              }
            }, true);
            return {
              baseUrl: dsMeta.baseUrl,
              name: 'ds-config-' + dsMeta.id,
              bindings: {
                meta: '=',
                current: '='
              },
              attrs: {
                meta: 'ctrl.datasourceMeta',
                current: 'ctrl.current'
              },
              Component: dsPlugin.angularConfigCtrl
            };
          });
        }
      // AppConfigCtrl

      case 'app-config-ctrl':
        {
          const model = scope.ctrl.model;
          return (0,plugin_loader/* importAppPlugin */.Av)(model).then(appPlugin => {
            return {
              baseUrl: model.baseUrl,
              name: 'app-config-' + model.id,
              bindings: {
                appModel: '=',
                appEditCtrl: '='
              },
              attrs: {
                'app-model': 'ctrl.model',
                'app-edit-ctrl': 'ctrl'
              },
              Component: appPlugin.angularConfigCtrl
            };
          });
        }
      // Panel

      case 'panel':
        {
          return loadPanelComponentInfo(scope, attrs);
        }

      default:
        {
          return Promise.reject({
            message: 'Could not find component type: ' + attrs.type
          });
        }
    }
  }

  function appendAndCompile(scope, elem, componentInfo) {
    const child = angular_default().element(document.createElement(componentInfo.name));
    (0,lodash.each)(componentInfo.attrs, (value, key) => {
      child.attr(key, value);
    });
    $compile(child)(scope);
    elem.empty(); // let a binding digest cycle complete before adding to dom

    setTimeout(() => {
      scope.$applyAsync(() => {
        elem.append(child);
        setTimeout(() => {
          scope.$applyAsync(() => {
            scope.$broadcast(src.PanelEvents.componentDidMount.name);
          });
        });
      });
    });
  }

  function registerPluginComponent(scope, elem, attrs, componentInfo) {
    if (componentInfo.notFound) {
      elem.empty();
      return;
    }

    if (!componentInfo.Component) {
      throw {
        message: 'Failed to find exported plugin component for ' + componentInfo.name
      };
    }

    if (!componentInfo.Component.registered) {
      const directiveName = attrs.$normalize(componentInfo.name);
      const directiveFn = getPluginComponentDirective(componentInfo);
      core_module/* default.directive */.ZP.directive(directiveName, directiveFn);
      componentInfo.Component.registered = true;
    }

    appendAndCompile(scope, elem, componentInfo);
  }

  return {
    restrict: 'E',
    link: (scope, elem, attrs) => {
      getModule(scope, attrs).then(componentInfo => {
        registerPluginComponent(scope, elem, attrs, componentInfo);
      }).catch(err => {
        console.error('Plugin component error', err);
      });
    }
  };
}

core_module/* default.directive */.ZP.directive('pluginComponent', pluginDirectiveLoader);
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/features/live/index.ts + 4 modules
var live = __webpack_require__("./public/app/features/live/index.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var app_types = __webpack_require__("./public/app/types/index.ts");
;// CONCATENATED MODULE: ./public/app/angular/GrafanaCtrl.ts

 // eslint-disable-line lodash/import-scope








class GrafanaCtrl {
  /** @ngInject */
  constructor($scope, utilSrv, $rootScope, contextSrv, angularLoader, $injector) {
    // make angular loader service available to react components
    (0,grafana_runtime_src.setAngularLoader)(angularLoader);
    (0,grafana_runtime_src.setLegacyAngularInjector)($injector);
    (0,grafana_runtime_src.setAppEvents)(app_events/* default */.Z);
    (0,live/* initGrafanaLive */.Bp)();

    $scope.init = () => {
      $scope.contextSrv = contextSrv;
      $scope.appSubUrl = config/* default.appSubUrl */.ZP.appSubUrl;
      $scope._ = (lodash_default());
      utilSrv.init();
    };

    $rootScope.colors = grafana_ui_src.colors;

    $rootScope.onAppEvent = function (event, callback, localScope) {
      let unbind;

      if (typeof event === 'string') {
        unbind = $rootScope.$on(event, callback);
      } else {
        unbind = $rootScope.$on(event.name, callback);
      }

      let callerScope = this;

      if (callerScope.$id === 1 && !localScope) {
        console.warn('warning rootScope onAppEvent called without localscope');
      }

      if (localScope) {
        callerScope = localScope;
      }

      callerScope.$on('$destroy', unbind);
    };

    $rootScope.appEvent = (event, payload) => {
      if (typeof event === 'string') {
        $rootScope.$emit(event, payload);
        app_events/* default.emit */.Z.emit(event, payload);
      } else {
        $rootScope.$emit(event.name, payload);
        app_events/* default.emit */.Z.emit(event, payload);
      }
    };

    $scope.init();
  }

}
GrafanaCtrl.$inject = ["$scope", "utilSrv", "$rootScope", "contextSrv", "angularLoader", "$injector"];

/** @ngInject */
function grafanaAppDirective() {
  return {
    restrict: 'E',
    controller: GrafanaCtrl,
    link: (scope, elem) => {
      const body = jquery_exposed_default()('body'); // see https://github.com/zenorocha/clipboard.js/issues/155

      (jquery_exposed_default()).fn.modal.Constructor.prototype.enforceFocus = () => {};

      app_events/* default.on */.Z.on(app_types/* CoreEvents.toggleSidemenuHidden */.RW.Ai, () => {
        body.toggleClass('sidemenu-hidden');
      }); // handle in active view state class

      let lastActivity = new Date().getTime();
      let activeUser = true;
      const inActiveTimeLimit = 60 * 5000;

      function checkForInActiveUser() {
        if (!activeUser) {
          return;
        } // only go to activity low mode on dashboard page


        if (!body.hasClass('page-dashboard')) {
          return;
        }

        if (new Date().getTime() - lastActivity > inActiveTimeLimit) {
          activeUser = false;
          body.addClass('view-mode--inactive');
        }
      }

      function userActivityDetected() {
        lastActivity = new Date().getTime();

        if (!activeUser) {
          activeUser = true;
          body.removeClass('view-mode--inactive');
        }
      } // mouse and keyboard is user activity


      body.mousemove(userActivityDetected);
      body.keydown(userActivityDetected); // set useCapture = true to catch event here

      document.addEventListener('wheel', userActivityDetected, {
        capture: true,
        passive: true
      }); // treat tab change as activity

      document.addEventListener('visibilitychange', userActivityDetected); // check every 2 seconds

      setInterval(checkForInActiveUser, 2000); // handle document clicks that should hide things

      body.click(evt => {
        const target = jquery_exposed_default()(evt.target);

        if (target.parents().length === 0) {
          return;
        } // ensure dropdown menu doesn't impact on z-index


        body.find('.dropdown-menu-open').removeClass('dropdown-menu-open'); // for stuff that animates, slides out etc, clicking it needs to
        // hide it right away

        const clickAutoHide = target.closest('[data-click-hide]');

        if (clickAutoHide.length) {
          const clickAutoHideParent = clickAutoHide.parent();
          clickAutoHide.detach();
          setTimeout(() => {
            clickAutoHideParent.append(clickAutoHide);
          }, 100);
        } // hide popovers


        const popover = elem.find('.popover');

        if (popover.length > 0 && target.parents('.graph-legend').length === 0) {
          popover.hide();
        }
      });
    }
  };
}
core_module/* default.directive */.ZP.directive('grafanaApp', grafanaAppDirective);
// EXTERNAL MODULE: ./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/index.js
var angular_route = __webpack_require__("./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/index.js");
// EXTERNAL MODULE: ./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/index.js
var angular_sanitize = __webpack_require__("./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/index.js");
// EXTERNAL MODULE: ./.yarn/cache/angular-bindonce-npm-0.3.1-63597abd34-6a9adeb527.zip/node_modules/angular-bindonce/bindonce.js
var bindonce = __webpack_require__("./.yarn/cache/angular-bindonce-npm-0.3.1-63597abd34-6a9adeb527.zip/node_modules/angular-bindonce/bindonce.js");
// EXTERNAL MODULE: ./public/vendor/bootstrap/bootstrap.js
var bootstrap = __webpack_require__("./public/vendor/bootstrap/bootstrap.js");
// EXTERNAL MODULE: ./public/vendor/angular-other/angular-strap.js
var angular_strap = __webpack_require__("./public/vendor/angular-other/angular-strap.js");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardLoaderSrv.ts
var DashboardLoaderSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/plugins/sdk.ts
var sdk = __webpack_require__("./public/app/plugins/sdk.ts");
;// CONCATENATED MODULE: ./public/app/core/navigation/patch/RouteParamsProvider.ts
function RouteParamsProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This is empty for now, as I think it's not going to be necessary.
// This replaces Angular RouteParamsProvider implementation with a dummy one to keep the ball rolling

class RouteParamsProvider {
  constructor() {
    RouteParamsProvider_defineProperty(this, "$get", () => {// throw new Error('TODO: Refactor $routeParams');
    });

    (0,grafana_runtime_src.navigationLogger)('Patch angular', false, 'RouteParamsProvider');
  }

}
;// CONCATENATED MODULE: ./public/app/core/navigation/patch/RouteProvider.ts
// This is empty for now, as I think it's not going to be necessary.
// This replaces Angular RouteProvider implementation with a dummy one to keep the ball rolling

class RouteProvider {
  constructor() {
    (0,grafana_runtime_src.navigationLogger)('Patch angular', false, 'RouteProvider');
  }

  $get() {
    return this;
  }

}
// EXTERNAL MODULE: ./public/app/angular/AngularLocationWrapper.ts
var AngularLocationWrapper = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
;// CONCATENATED MODULE: ./public/app/angular/bridgeReactAngularRouting.ts



 // Neutralizing Angular’s location tampering
// https://stackoverflow.com/a/19825756

const tamperAngularLocation = () => {
  core_module/* coreModule.config */.hF.config(['$provide', $provide => {
    $provide.decorator('$browser', ['$delegate', $delegate => {
      $delegate.onUrlChange = () => {};

      $delegate.url = () => '';

      return $delegate;
    }]);
  }]);
}; // Intercepting $location service with implementation based on history


const interceptAngularLocation = () => {
  core_module/* coreModule.config */.hF.config(['$provide', $provide => {
    $provide.decorator('$location', ['$delegate', $delegate => {
      $delegate = new AngularLocationWrapper/* AngularLocationWrapper */.O();
      return $delegate;
    }]);
  }]);
  core_module/* coreModule.provider */.hF.provider('$route', RouteProvider);
  core_module/* coreModule.provider */.hF.provider('$routeParams', RouteParamsProvider);
};

function initAngularRoutingBridge() {
  tamperAngularLocation();
  interceptAngularLocation();
}
;// CONCATENATED MODULE: ./public/app/angular/injectorMonkeyPatch.ts
function monkeyPatchInjectorWithPreAssignedBindings(injector) {
  injector.oldInvoke = injector.invoke;

  injector.invoke = (fn, self, locals, serviceName) => {
    var _locals$$scope;

    const parentScope = locals === null || locals === void 0 ? void 0 : (_locals$$scope = locals.$scope) === null || _locals$$scope === void 0 ? void 0 : _locals$$scope.$parent;

    if (parentScope) {
      var _parentScope$ctrl, _parentScope$ctrl2, _parentScope$ctrl3, _parentScope$$parent, _parentScope$$parent$, _parentScope$$parent$2;

      // PanelCtrl
      if (parentScope.panel) {
        self.panel = parentScope.panel;
      } // Panels & dashboard SettingsCtrl


      if (parentScope.dashboard) {
        self.dashboard = parentScope.dashboard;
      } // Query editors


      if ((_parentScope$ctrl = parentScope.ctrl) !== null && _parentScope$ctrl !== void 0 && _parentScope$ctrl.target) {
        self.panelCtrl = parentScope.ctrl;
        self.datasource = parentScope.ctrl.datasource;
        self.target = parentScope.ctrl.target;
      } // Data source ConfigCtrl


      if ((_parentScope$ctrl2 = parentScope.ctrl) !== null && _parentScope$ctrl2 !== void 0 && _parentScope$ctrl2.datasourceMeta) {
        self.meta = parentScope.ctrl.datasourceMeta;
        self.current = parentScope.ctrl.current;
      } // Data source AnnotationsQueryCtrl


      if ((_parentScope$ctrl3 = parentScope.ctrl) !== null && _parentScope$ctrl3 !== void 0 && _parentScope$ctrl3.currentAnnotation) {
        self.annotation = parentScope.ctrl.currentAnnotation;
        self.datasource = parentScope.ctrl.currentDatasource;
      } // App config ctrl


      if (parentScope.isAppConfigCtrl) {
        self.appEditCtrl = parentScope.ctrl;
        self.appModel = parentScope.ctrl.model;
      } // App page ctrl


      if ((_parentScope$$parent = parentScope.$parent) !== null && _parentScope$$parent !== void 0 && (_parentScope$$parent$ = _parentScope$$parent.$parent) !== null && _parentScope$$parent$ !== void 0 && (_parentScope$$parent$2 = _parentScope$$parent$.ctrl) !== null && _parentScope$$parent$2 !== void 0 && _parentScope$$parent$2.appModel) {
        var _parentScope$$parent2, _parentScope$$parent3, _parentScope$$parent4;

        self.appModel = (_parentScope$$parent2 = parentScope.$parent) === null || _parentScope$$parent2 === void 0 ? void 0 : (_parentScope$$parent3 = _parentScope$$parent2.$parent) === null || _parentScope$$parent3 === void 0 ? void 0 : (_parentScope$$parent4 = _parentScope$$parent3.ctrl) === null || _parentScope$$parent4 === void 0 ? void 0 : _parentScope$$parent4.appModel;
      }
    }

    return injector.oldInvoke(fn, self, locals, serviceName);
  };
}
// EXTERNAL MODULE: ./public/app/core/core.ts
var core_core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardSrv.ts
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
// EXTERNAL MODULE: ./public/app/features/manage-dashboards/services/ValidationSrv.ts
var ValidationSrv = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
// EXTERNAL MODULE: ./public/app/features/panel/panellinks/link_srv.ts
var link_srv = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");
;// CONCATENATED MODULE: ./public/app/angular/services/UtilSrv.ts
function UtilSrv_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Old legacy utilSrv exposed to angular services and handles angular modals.
 * Not used by any core or known external plugin.
 */

class UtilSrv {
  /** @ngInject */
  constructor($rootScope, $modal) {
    this.$rootScope = $rootScope;
    this.$modal = $modal;

    UtilSrv_defineProperty(this, "modalScope", void 0);

    this.$rootScope = $rootScope;
    this.$modal = $modal;
  }

  init() {
    app_events/* appEvents.subscribe */.h.subscribe(events/* ShowModalEvent */.le, e => this.showModal(e.payload));
    app_events/* appEvents.subscribe */.h.subscribe(events/* HideModalEvent */.OW, this.hideModal.bind(this));
  }
  /**
   * @deprecated use showModalReact instead that has this capability built in
   */


  hideModal() {
    (0,src.deprecationWarning)('UtilSrv', 'hideModal', 'showModalReact');

    if (this.modalScope && this.modalScope.dismiss) {
      this.modalScope.dismiss();
    }
  }
  /**
   * @deprecated use showModalReact instead
   */


  showModal(options) {
    (0,src.deprecationWarning)('UtilSrv', 'showModal', 'showModalReact');

    if (this.modalScope && this.modalScope.dismiss) {
      this.modalScope.dismiss();
    }

    this.modalScope = options.scope;

    if (options.model) {
      this.modalScope = this.$rootScope.$new();
      this.modalScope.model = options.model;
    } else if (!this.modalScope) {
      this.modalScope = this.$rootScope.$new();
    }

    const modal = this.$modal({
      modalClass: options.modalClass,
      template: options.src,
      templateHtml: options.templateHtml,
      persist: false,
      show: false,
      scope: this.modalScope,
      keyboard: false,
      backdrop: options.backdrop
    });
    Promise.resolve(modal).then(modalEl => {
      modalEl.modal('show');
    });
  }

}
UtilSrv.$inject = ["$rootScope", "$modal"];
// EXTERNAL MODULE: ./public/app/features/annotations/api.ts
var api = __webpack_require__("./public/app/features/annotations/api.ts");
;// CONCATENATED MODULE: ./public/app/angular/services/annotations_srv.ts




/**
 * @deprecated AnnotationsSrv is deprecated in favor of DashboardQueryRunner
 */
class AnnotationsSrv {
  /**
   * @deprecated clearPromiseCaches is deprecated
   */
  clearPromiseCaches() {
    (0,src.deprecationWarning)('annotations_srv.ts', 'clearPromiseCaches', 'DashboardQueryRunner');
  }
  /**
   * @deprecated getAnnotations is deprecated in favor of DashboardQueryRunner.getResult
   */


  getAnnotations(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getAnnotations', 'DashboardQueryRunner.getResult');
    return Promise.resolve({
      annotations: [],
      alertState: undefined
    });
  }
  /**
   * @deprecated getAlertStates is deprecated in favor of DashboardQueryRunner.getResult
   */


  getAlertStates(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getAlertStates', 'DashboardQueryRunner.getResult');
    return Promise.resolve(undefined);
  }
  /**
   * @deprecated getGlobalAnnotations is deprecated in favor of DashboardQueryRunner.getResult
   */


  getGlobalAnnotations(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getGlobalAnnotations', 'DashboardQueryRunner.getResult');
    return Promise.resolve([]);
  }
  /**
   * @deprecated saveAnnotationEvent is deprecated
   */


  saveAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'saveAnnotationEvent', 'api/saveAnnotation');
    return (0,api/* saveAnnotation */.xD)(annotation);
  }
  /**
   * @deprecated updateAnnotationEvent is deprecated
   */


  updateAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'updateAnnotationEvent', 'api/updateAnnotation');
    return (0,api/* updateAnnotation */._E)(annotation);
  }
  /**
   * @deprecated deleteAnnotationEvent is deprecated
   */


  deleteAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'deleteAnnotationEvent', 'api/deleteAnnotation');
    return (0,api/* deleteAnnotation */.Dl)(annotation);
  }
  /**
   * @deprecated translateQueryResult is deprecated in favor of DashboardQueryRunner/utils/translateQueryResult
   */


  translateQueryResult(annotation, results) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'translateQueryResult', 'DashboardQueryRunner/utils/translateQueryResult'); // if annotation has snapshotData
    // make clone and remove it

    if (annotation.snapshotData) {
      annotation = (0,lodash.cloneDeep)(annotation);
      delete annotation.snapshotData;
    }

    for (const item of results) {
      item.source = annotation;
      item.color = annotation.iconColor;
      item.type = annotation.name;
      item.isRegion = item.timeEnd && item.time !== item.timeEnd;
    }

    return results;
  }

}
;// CONCATENATED MODULE: ./public/app/angular/registerComponents.ts








function registerComponents() {
  core_module/* default.factory */.ZP.factory('backendSrv', () => (0,grafana_runtime_src.getBackendSrv)());
  core_module/* default.factory */.ZP.factory('contextSrv', () => core_core/* contextSrv */.Vt);
  core_module/* default.factory */.ZP.factory('dashboardSrv', () => (0,DashboardSrv/* getDashboardSrv */.h4)());
  core_module/* default.factory */.ZP.factory('datasourceSrv', () => (0,grafana_runtime_src.getDataSourceSrv)());
  core_module/* default.factory */.ZP.factory('linkSrv', () => (0,link_srv/* getLinkSrv */.Bq)());
  core_module/* default.factory */.ZP.factory('validationSrv', () => ValidationSrv/* validationSrv */.t);
  core_module/* default.service */.ZP.service('annotationsSrv', AnnotationsSrv);
  core_module/* default.service */.ZP.service('utilSrv', UtilSrv);
}
;// CONCATENATED MODULE: ./public/app/angular/AngularApp.ts
function AngularApp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // eslint-disable-line no-duplicate-imports
















class AngularApp {
  constructor() {
    AngularApp_defineProperty(this, "ngModuleDependencies", void 0);

    AngularApp_defineProperty(this, "preBootModules", void 0);

    AngularApp_defineProperty(this, "registerFunctions", void 0);

    this.preBootModules = [];
    this.ngModuleDependencies = [];
    this.registerFunctions = {};
  }

  init() {
    const app = angular_default().module('grafana', []);
    app.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$httpProvider", "$provide", ($controllerProvider, $compileProvider, $filterProvider, $httpProvider, $provide) => {
      if (config/* config.buildInfo.env */.vc.buildInfo.env !== 'development') {
        $compileProvider.debugInfoEnabled(false);
      }

      $httpProvider.useApplyAsync(true);
      this.registerFunctions.controller = $controllerProvider.register;
      this.registerFunctions.directive = $compileProvider.directive;
      this.registerFunctions.factory = $provide.factory;
      this.registerFunctions.service = $provide.service;
      this.registerFunctions.filter = $filterProvider.register;
      $provide.decorator('$http', ['$delegate', '$templateCache', ($delegate, $templateCache) => {
        const get = $delegate.get;

        $delegate.get = (url, config) => {
          if (url.match(/\.html$/)) {
            // some template's already exist in the cache
            if (!$templateCache.get(url)) {
              url += '?v=' + new Date().getTime();
            }
          }

          return get(url, config);
        };

        return $delegate;
      }]);
    }]);
    this.ngModuleDependencies = ['grafana.core', 'ngSanitize', '$strap.directives', 'grafana', 'pasvaz.bindonce', 'react']; // makes it possible to add dynamic stuff

    core_module/* angularModules.forEach */.rb.forEach(m => {
      this.useModule(m);
    }); // register react angular wrappers

    angular_default().module('grafana.services').service('dashboardLoaderSrv', DashboardLoaderSrv/* DashboardLoaderSrv */.Bg);
    core_module/* default.factory */.ZP.factory('timeSrv', () => (0,TimeSrv/* getTimeSrv */.$t)());
    core_module/* default.factory */.ZP.factory('templateSrv', () => (0,grafana_runtime_src.getTemplateSrv)());
    registerAngularDirectives();
    registerComponents();
    initAngularRoutingBridge(); // Angular plugins import this

    (0,plugin_loader/* exposeToPlugin */.kY)('angular', (angular_default()));
    (0,plugin_loader/* exposeToPlugin */.kY)('app/core/utils/promiseToDigest', {
      promiseToDigest: promiseToDigest/* promiseToDigest */.E,
      __esModule: true
    });
    (0,plugin_loader/* exposeToPlugin */.kY)('app/plugins/sdk', sdk);
    (0,plugin_loader/* exposeToPlugin */.kY)('app/core/core_module', core_module/* default */.ZP);
    (0,plugin_loader/* exposeToPlugin */.kY)('app/core/core', {
      coreModule: core_module/* default */.ZP,
      appEvents: app_events/* default */.Z,
      contextSrv: context_srv/* contextSrv */.Vt,
      __esModule: true
    }); // disable tool tip animation

    $.fn.tooltip.defaults.animation = false;
  }

  useModule(module) {
    if (this.preBootModules) {
      this.preBootModules.push(module);
    } else {
      (0,lodash.extend)(module, this.registerFunctions);
    }

    this.ngModuleDependencies.push(module.name);
    return module;
  }

  bootstrap() {
    const injector = angular_default().bootstrap(document.getElementById('ngRoot'), this.ngModuleDependencies);
    monkeyPatchInjectorWithPreAssignedBindings(injector);
    injector.invoke(() => {
      this.preBootModules.forEach(module => {
        (0,lodash.extend)(module, this.registerFunctions);
      }); // I don't know

      return () => {};
    });
    return injector;
  }

}
;// CONCATENATED MODULE: ./public/app/angular/index.ts





















 // components

















/***/ }),

/***/ "./public/app/angular/panel/metrics_panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ MetricsPanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__/* .PanelCtrl */ .q {
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "contextSrv", void 0);

    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "timeSrv", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "intervalMs", void 0);

    _defineProperty(this, "resolution", void 0);

    _defineProperty(this, "timeInfo", void 0);

    _defineProperty(this, "skipDataOnInit", false);

    _defineProperty(this, "dataList", []);

    _defineProperty(this, "querySubscription", void 0);

    _defineProperty(this, "useDataFrames", false);

    _defineProperty(this, "panelData", void 0);

    _defineProperty(this, "panelDataObserver", {
      next: data => {
        this.panelData = data;

        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error) {
          this.loading = false;
          this.processDataError(data.error);
        } // Ignore data in loading state


        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading) {
          this.loading = true;
          this.angularDirtyCheck();
          return;
        }

        if (data.request) {
          const {
            timeInfo
          } = data.request;

          if (timeInfo) {
            this.timeInfo = timeInfo;
          }
        }

        if (data.timeRange) {
          this.range = data.timeRange;
        }

        if (this.useDataFrames) {
          this.handleDataFrames(data.series);
        } else {
          // Make the results look as if they came directly from a <6.2 datasource request
          const legacy = data.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toLegacyResponseData)(v));
          this.handleQueryResult({
            data: legacy
          });
        }

        this.angularDirtyCheck();
      }
    });

    this.contextSrv = $injector.get('contextSrv');
    this.datasourceSrv = $injector.get('datasourceSrv');
    this.timeSrv = $injector.get('timeSrv');
    this.templateSrv = $injector.get('templateSrv');
    this.panel.datasource = this.panel.datasource || null;
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.refresh, this.onMetricsPanelRefresh.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.panelTeardown, this.onPanelTearDown.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount, this.onMetricsPanelMounted.bind(this));
  }

  onMetricsPanelMounted() {
    const queryRunner = this.panel.getQueryRunner();
    this.querySubscription = queryRunner.getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe(this.panelDataObserver);
  }

  onPanelTearDown() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onMetricsPanelRefresh() {
    // ignore fetching data if another panel is in fullscreen
    if (this.otherPanelInFullscreenMode()) {
      return;
    } // if we have snapshot data use that


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; // backward compatibility

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; // Defer panel rendering till the next digest cycle.
      // For some reason snapshot panels don't init at this time, so this helps to avoid rendering issues.

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataSnapshotLoad, data);
      });
    } // clear loading/error state


    delete this.error;
    this.loading = true; // load datasource service

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
    // if canceled  keep loading set to true
    if (err.cancelled) {
      console.log('Panel request cancelled', err);
      return;
    }

    this.error = err.message || 'Request Error';

    if (err.data) {
      if (err.data.message) {
        this.error = err.data.message;
      } else if (err.data.error) {
        this.error = err.data.error;
      }
    }

    this.angularDirtyCheck();
  }

  angularDirtyCheck() {
    if (!this.$scope.$root.$$phase) {
      this.$scope.$digest();
    }
  } // Updates the response with information from the stream


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__/* .applyPanelTimeOverrides */ .W1)(this.panel, this.range);
    this.timeInfo = newTimeData.timeInfo;
    this.range = newTimeData.timeRange;
  }

  issueQueries(datasource) {
    this.updateTimeRange(datasource);
    this.datasource = datasource;
    const panel = this.panel;
    const queryRunner = panel.getQueryRunner();
    return queryRunner.run({
      datasource: panel.datasource,
      queries: panel.targets,
      panelId: panel.id,
      dashboardId: this.dashboard.id,
      timezone: this.dashboard.getTimezone(),
      timeInfo: this.timeInfo,
      timeRange: this.range,
      maxDataPoints: panel.maxDataPoints || this.width,
      minInterval: panel.interval,
      scopedVars: panel.scopedVars,
      cacheTimeout: panel.cacheTimeout,
      transformations: panel.transformations
    });
  }

  handleDataFrames(data) {
    this.loading = false;

    if (this.dashboard && this.dashboard.snapshot) {
      this.panel.snapshotData = data.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrameDTO)(frame));
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataFramesReceived, data);
    } catch (err) {
      this.processDataError(err);
    }
  }

  handleQueryResult(result) {
    this.loading = false;

    if (this.dashboard.snapshot) {
      this.panel.snapshotData = result.data;
    }

    if (!result || !result.data) {
      console.log('Data source query result invalid, missing data field:', result);
      result = {
        data: []
      };
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, result.data);
    } catch (err) {
      this.processDataError(err);
    }
  }

}



/***/ }),

/***/ "./public/app/angular/panel/panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelCtrl {
  constructor($scope, $injector) {
    var _this$panel, _this$dashboard;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "pluginName", '');

    _defineProperty(this, "pluginId", '');

    _defineProperty(this, "editorTabs", void 0);

    _defineProperty(this, "$scope", void 0);

    _defineProperty(this, "$injector", void 0);

    _defineProperty(this, "$timeout", void 0);

    _defineProperty(this, "editModeInitiated", false);

    _defineProperty(this, "containerHeight", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "loading", false);

    _defineProperty(this, "timing", void 0);

    _defineProperty(this, "$location", void 0);

    _defineProperty(this, "onPluginTypeChange", plugin => {});

    this.panel = (_this$panel = this.panel) !== null && _this$panel !== void 0 ? _this$panel : $scope.$parent.panel;
    this.dashboard = (_this$dashboard = this.dashboard) !== null && _this$dashboard !== void 0 ? _this$dashboard : $scope.$parent.dashboard;
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get('$timeout');
    this.editorTabs = [];
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__/* .AngularLocationWrapper */ .O();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.EventBusSrv();
    this.timing = {}; // not used but here to not break plugins

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].panels */ .ZP.panels[this.panel.type];

    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }

    $scope.$on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount.name, () => this.panelDidMount());
  }

  panelDidMount() {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount);
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initialized);
    this.dashboard.panelInitialized(this.panel);
  }

  renderingCompleted() {
    app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .profiler.renderingCompleted */ .rv.renderingCompleted();
  }

  refresh() {
    this.panel.refresh();
  }

  publishAppEvent(event, payload) {
    this.$scope.$root.appEvent(event, payload);
  }

  initEditMode() {
    if (!this.editModeInitiated) {
      this.editModeInitiated = true;
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.editModeInitialized);
    }
  }

  addEditorTab(title, directiveFn, index, icon) {
    const editorTab = {
      title,
      directiveFn,
      icon
    };

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(directiveFn)) {
      editorTab.directiveFn = () => {
        return {
          templateUrl: directiveFn
        };
      };
    }

    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }

  getExtendedMenu() {
    const menu = [];
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initPanelActions, menu);
    return menu;
  } // Override in sub-class to add items before extended menu


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.render, payload);
  } // overriden from react


}

/***/ }),

/***/ "./public/app/angular/panel/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ QueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class QueryCtrl {
  constructor($scope, $injector) {
    var _this$panelCtrl, _this$target, _this$datasource, _this$panelCtrl$panel, _this$panelCtrl2;

    this.$scope = $scope;
    this.$injector = $injector;

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "hasRawMode", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "isLastQuery", void 0);

    this.$scope = $scope;
    this.$injector = $injector;
    this.panelCtrl = (_this$panelCtrl = this.panelCtrl) !== null && _this$panelCtrl !== void 0 ? _this$panelCtrl : $scope.ctrl.panelCtrl;
    this.target = (_this$target = this.target) !== null && _this$target !== void 0 ? _this$target : $scope.ctrl.target;
    this.datasource = (_this$datasource = this.datasource) !== null && _this$datasource !== void 0 ? _this$datasource : $scope.ctrl.datasource;
    this.panel = (_this$panelCtrl$panel = (_this$panelCtrl2 = this.panelCtrl) === null || _this$panelCtrl2 === void 0 ? void 0 : _this$panelCtrl2.panel) !== null && _this$panelCtrl$panel !== void 0 ? _this$panelCtrl$panel : $scope.ctrl.panelCtrl.panel;
    this.isLastQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.panel.targets, this.target) === this.panel.targets.length - 1;
  }

  refresh() {
    this.panelCtrl.refresh();
  }

}

/***/ }),

/***/ "./public/app/angular/partials.ts":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let templates = __webpack_require__("./public/app sync recursive \\.html$");

templates.keys().forEach(key => {
  templates(key);
});

/***/ }),

/***/ "./public/app/angular/promiseToDigest.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ promiseToDigest)
/* harmony export */ });
const promiseToDigest = $scope => promise => promise.finally($scope.$evalAsync);

/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JX": () => (/* binding */ LokiOptionFields),
/* harmony export */   "TQ": () => (/* binding */ DEFAULT_RESOLUTION),
/* harmony export */   "Wz": () => (/* binding */ preprocessMaxLines),
/* harmony export */   "oZ": () => (/* binding */ RESOLUTION_OPTIONS),
/* harmony export */   "uG": () => (/* binding */ queryTypeOptions)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

const _excluded = ["instant", "range"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Libraries


 // Types






const queryTypeOptions = [{
  value: _types__WEBPACK_IMPORTED_MODULE_5__/* .LokiQueryType.Range */ .EM.Range,
  label: 'Range',
  description: 'Run query over a range of time.'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__/* .LokiQueryType.Instant */ .EM.Instant,
  label: 'Instant',
  description: 'Run query against a single point in time. For this query, the "To" time is used.'
}];

if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.lokiLive) {
  queryTypeOptions.push({
    value: _types__WEBPACK_IMPORTED_MODULE_5__/* .LokiQueryType.Stream */ .EM.Stream,
    label: 'Stream',
    description: 'Run a query and keep sending results on an interval'
  });
}

const DEFAULT_RESOLUTION = {
  value: 1,
  label: '1/1'
};
const RESOLUTION_OPTIONS = [DEFAULT_RESOLUTION].concat((0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)([2, 3, 4, 5, 10], value => ({
  value,
  label: '1/' + value
})));
function LokiOptionFields(props) {
  var _props$query, _query$queryType;

  const {
    lineLimitValue,
    resolution,
    onRunQuery,
    runOnBlur,
    onChange
  } = props;
  const query = (_props$query = props.query) !== null && _props$query !== void 0 ? _props$query : {};
  let queryType = (_query$queryType = query.queryType) !== null && _query$queryType !== void 0 ? _query$queryType : query.instant ? _types__WEBPACK_IMPORTED_MODULE_5__/* .LokiQueryType.Instant */ .EM.Instant : _types__WEBPACK_IMPORTED_MODULE_5__/* .LokiQueryType.Range */ .EM.Range;

  function onChangeQueryLimit(value) {
    const nextQuery = Object.assign({}, query, {
      maxLines: preprocessMaxLines(value)
    });
    onChange(nextQuery);
  }

  function onQueryTypeChange(queryType) {
    const rest = _objectWithoutPropertiesLoose(query, _excluded);

    onChange(Object.assign({}, rest, {
      queryType
    }));
  }

  function onMaxLinesChange(e) {
    if (query.maxLines !== preprocessMaxLines(e.currentTarget.value)) {
      onChangeQueryLimit(e.currentTarget.value);
    }
  }

  function onReturnKeyDown(e) {
    if (e.key === 'Enter') {
      onRunQuery();
    }
  }

  function onResolutionChange(option) {
    const nextQuery = Object.assign({}, query, {
      resolution: option.value
    });
    onChange(nextQuery);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    "aria-label": "Loki extra field",
    className: "gf-form-inline",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "queryTypeField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form explore-input-margin', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Query type field",
      children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, {
        width: "auto",
        children: "Query type"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
        options: queryTypeOptions,
        value: queryType,
        onChange: type => {
          onQueryTypeChange(type);

          if (runOnBlur) {
            onRunQuery();
          }
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "lineLimitField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Line limit field",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Line limit",
        tooltip: 'Upper limit for number of log lines returned by query.',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "width-4",
          placeholder: "auto",
          type: "number",
          min: 0,
          onChange: onMaxLinesChange,
          onKeyDown: onReturnKeyDown,
          value: lineLimitValue,
          onBlur: () => {
            if (runOnBlur) {
              onRunQuery();
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Resolution",
        tooltip: 'Resolution 1/1 sets step parameter of Loki metrics range queries such that each pixel corresponds to one data point. For better performance, lower resolutions can be picked. 1/2 only retrieves a data point for every other pixel, and 1/10 retrieves one data point per 10 pixels.',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          isSearchable: false,
          onChange: onResolutionChange,
          options: RESOLUTION_OPTIONS,
          value: resolution,
          "aria-label": "Select resolution"
        })
      })]
    })]
  });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (memo(LokiOptionFields))));
function preprocessMaxLines(value) {
  if (value.length === 0) {
    // empty input - falls back to dataSource.maxLines limit
    return NaN;
  } else if (value.length > 0 && (isNaN(+value) || +value < 0)) {
    // input with at least 1 character and that is either incorrect (value in the input field is not a number) or negative
    // falls back to the limit of 0 lines
    return 0;
  } else {
    // default case - correct input
    return +value;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EM": () => (/* binding */ LokiQueryType),
/* harmony export */   "ox": () => (/* binding */ LokiResultType),
/* harmony export */   "sb": () => (/* binding */ LokiQueryDirection)
/* harmony export */ });
let LokiResultType;

(function (LokiResultType) {
  LokiResultType["Stream"] = "streams";
  LokiResultType["Vector"] = "vector";
  LokiResultType["Matrix"] = "matrix";
})(LokiResultType || (LokiResultType = {}));

let LokiQueryType;

(function (LokiQueryType) {
  LokiQueryType["Range"] = "range";
  LokiQueryType["Instant"] = "instant";
  LokiQueryType["Stream"] = "stream";
})(LokiQueryType || (LokiQueryType = {}));

let LokiQueryDirection;

(function (LokiQueryDirection) {
  LokiQueryDirection["Backward"] = "backward";
  LokiQueryDirection["Forward"] = "forward";
})(LokiQueryDirection || (LokiQueryDirection = {}));

/***/ }),

/***/ "./public/app/plugins/sdk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl),
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl),
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl),
/* harmony export */   "loadPluginCss": () => (/* reexport safe */ _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__/* .PanelCtrl */ .q);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__/* .MetricsPanelCtrl */ .k);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__/* .QueryCtrl */ .G);


/***/ }),

/***/ "./.yarn/cache/angular-bindonce-npm-0.3.1-63597abd34-6a9adeb527.zip/node_modules/angular-bindonce/bindonce.js":
/***/ (() => {

(function () {
	"use strict";
	/**
	 * Bindonce - Zero watches binding for AngularJs
	 * @version v0.3.1
	 * @link https://github.com/Pasvaz/bindonce
	 * @author Pasquale Vazzana <pasqualevazzana@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	var bindonceModule = angular.module('pasvaz.bindonce', []);

	bindonceModule.directive('bindonce', function ()
	{
		var toBoolean = function (value)
		{
			if (value && value.length !== 0)
			{
				var v = angular.lowercase("" + value);
				value = !(v === 'f' || v === '0' || v === 'false' || v === 'no' || v === 'n' || v === '[]');
			}
			else
			{
				value = false;
			}
			return value;
		};

		var msie = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		if (isNaN(msie))
		{
			msie = parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
		}

		var bindonceDirective =
		{
			restrict: "AM",
			controller: ['$scope', '$element', '$attrs', '$interpolate', function ($scope, $element, $attrs, $interpolate)
			{
				var showHideBinder = function (elm, attr, value)
				{
					var show = (attr === 'show') ? '' : 'none';
					var hide = (attr === 'hide') ? '' : 'none';
					elm.css('display', toBoolean(value) ? show : hide);
				};
				var classBinder = function (elm, value)
				{
					if (angular.isObject(value) && !angular.isArray(value))
					{
						var results = [];
						angular.forEach(value, function (value, index)
						{
							if (value) results.push(index);
						});
						value = results;
					}
					if (value)
					{
						elm.addClass(angular.isArray(value) ? value.join(' ') : value);
					}
				};

				var ctrl =
				{
					watcherRemover: undefined,
					binders: [],
					group: $attrs.boName,
					element: $element,
					ran: false,

					addBinder: function (binder)
					{
						this.binders.push(binder);

						// In case of late binding (when using the directive bo-name/bo-parent)
						// it happens only when you use nested bindonce, if the bo-children
						// are not dom children the linking can follow another order
						if (this.ran)
						{
							this.runBinders();
						}
					},

					setupWatcher: function (bindonceValue)
					{
						var that = this;
						this.watcherRemover = $scope.$watch(bindonceValue, function (newValue)
						{
							if (newValue === undefined) return;
							that.removeWatcher();
							that.runBinders();
						}, true);
					},

					removeWatcher: function ()
					{
						if (this.watcherRemover !== undefined)
						{
							this.watcherRemover();
							this.watcherRemover = undefined;
						}
					},

					runBinders: function ()
					{
						while (this.binders.length > 0)
						{
							var binder = this.binders.shift();
							if (this.group && this.group != binder.group) continue;
							var value = binder.scope.$eval((binder.interpolate) ? $interpolate(binder.value) : binder.value);
							switch (binder.attr)
							{
								case 'boIf':
									if (toBoolean(value))
									{
										binder.transclude(binder.scope.$new(), function (clone)
										{
											var parent = binder.element.parent();
											var afterNode = binder.element && binder.element[binder.element.length - 1];
											var parentNode = parent && parent[0] || afterNode && afterNode.parentNode;
											var afterNextSibling = (afterNode && afterNode.nextSibling) || null;
											angular.forEach(clone, function (node)
											{
												parentNode.insertBefore(node, afterNextSibling);
											});
										});
									}
									break;
								case 'boSwitch':
									var selectedTranscludes, switchCtrl = binder.controller[0];
									if ((selectedTranscludes = switchCtrl.cases['!' + value] || switchCtrl.cases['?']))
									{
										binder.scope.$eval(binder.attrs.change);
										angular.forEach(selectedTranscludes, function (selectedTransclude)
										{
											selectedTransclude.transclude(binder.scope.$new(), function (clone)
											{
												var parent = selectedTransclude.element.parent();
												var afterNode = selectedTransclude.element && selectedTransclude.element[selectedTransclude.element.length - 1];
												var parentNode = parent && parent[0] || afterNode && afterNode.parentNode;
												var afterNextSibling = (afterNode && afterNode.nextSibling) || null;
												angular.forEach(clone, function (node)
												{
													parentNode.insertBefore(node, afterNextSibling);
												});

											});
										});
									}
									break;
								case 'boSwitchWhen':
									var ctrl = binder.controller[0];
									ctrl.cases['!' + binder.attrs.boSwitchWhen] = (ctrl.cases['!' + binder.attrs.boSwitchWhen] || []);
									ctrl.cases['!' + binder.attrs.boSwitchWhen].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'boSwitchDefault':
									var ctrl = binder.controller[0];
									ctrl.cases['?'] = (ctrl.cases['?'] || []);
									ctrl.cases['?'].push({ transclude: binder.transclude, element: binder.element });
									break;
								case 'hide':
								case 'show':
									showHideBinder(binder.element, binder.attr, value);
									break;
								case 'class':
									classBinder(binder.element, value);
									break;
								case 'text':
									binder.element.text(value);
									break;
								case 'html':
									binder.element.html(value);
									break;
								case 'style':
									binder.element.css(value);
									break;
								case 'src':
									binder.element.attr(binder.attr, value);
									if (msie) binder.element.prop('src', value);
									break;
								case 'attr':
									angular.forEach(binder.attrs, function (attrValue, attrKey)
									{
										var newAttr, newValue;
										if (attrKey.match(/^boAttr./) && binder.attrs[attrKey])
										{
											newAttr = attrKey.replace(/^boAttr/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
											newValue = binder.scope.$eval(binder.attrs[attrKey]);
											binder.element.attr(newAttr, newValue);
										}
									});
									break;
								case 'href':
								case 'alt':
								case 'title':
								case 'id':
								case 'value':
									binder.element.attr(binder.attr, value);
									break;
							}
						}
						this.ran = true;
					}
				};

				return ctrl;
			}],

			link: function (scope, elm, attrs, bindonceController)
			{
				var value = (attrs.bindonce) ? scope.$eval(attrs.bindonce) : true;
				if (value !== undefined)
				{
					bindonceController.runBinders();
				}
				else
				{
					bindonceController.setupWatcher(attrs.bindonce);
					elm.bind("$destroy", bindonceController.removeWatcher);
				}
			}
		};

		return bindonceDirective;
	});

	angular.forEach(
	[
		{ directiveName: 'boShow', attribute: 'show' },
		{ directiveName: 'boHide', attribute: 'hide' },
		{ directiveName: 'boClass', attribute: 'class' },
		{ directiveName: 'boText', attribute: 'text' },
		{ directiveName: 'boBind', attribute: 'text' },
		{ directiveName: 'boHtml', attribute: 'html' },
		{ directiveName: 'boSrcI', attribute: 'src', interpolate: true },
		{ directiveName: 'boSrc', attribute: 'src' },
		{ directiveName: 'boHrefI', attribute: 'href', interpolate: true },
		{ directiveName: 'boHref', attribute: 'href' },
		{ directiveName: 'boAlt', attribute: 'alt' },
		{ directiveName: 'boTitle', attribute: 'title' },
		{ directiveName: 'boId', attribute: 'id' },
		{ directiveName: 'boStyle', attribute: 'style' },
		{ directiveName: 'boValue', attribute: 'value' },
		{ directiveName: 'boAttr', attribute: 'attr' },

		{ directiveName: 'boIf', transclude: 'element', terminal: true, priority: 1000 },
		{ directiveName: 'boSwitch', require: 'boSwitch', controller: function () { this.cases = {}; } },
		{ directiveName: 'boSwitchWhen', transclude: 'element', priority: 800, require: '^boSwitch', },
		{ directiveName: 'boSwitchDefault', transclude: 'element', priority: 800, require: '^boSwitch', }
	],
	function (boDirective)
	{
		var childPriority = 200;
		return bindonceModule.directive(boDirective.directiveName, function ()
		{
			var bindonceDirective =
			{
				priority: boDirective.priority || childPriority,
				transclude: boDirective.transclude || false,
				terminal: boDirective.terminal || false,
				require: ['^bindonce'].concat(boDirective.require || []),
				controller: boDirective.controller,
				compile: function (tElement, tAttrs, transclude)
				{
					return function (scope, elm, attrs, controllers)
					{
						var bindonceController = controllers[0];
						var name = attrs.boParent;
						if (name && bindonceController.group !== name)
						{
							var element = bindonceController.element.parent();
							bindonceController = undefined;
							var parentValue;

							while (element[0].nodeType !== 9 && element.length)
							{
								if ((parentValue = element.data('$bindonceController'))
									&& parentValue.group === name)
								{
									bindonceController = parentValue;
									break;
								}
								element = element.parent();
							}
							if (!bindonceController)
							{
								throw new Error("No bindonce controller: " + name);
							}
						}

						bindonceController.addBinder(
						{
							element: elm,
							attr: boDirective.attribute || boDirective.directiveName,
							attrs: attrs,
							value: attrs[boDirective.directiveName],
							interpolate: boDirective.interpolate,
							group: name,
							transclude: transclude,
							controller: controllers.slice(1),
							scope: scope
						});
					};
				}
			};

			return bindonceDirective;
		});
	})
})();


/***/ }),

/***/ "./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/angular-route.js":
/***/ (() => {

/**
 * @license AngularJS v1.8.2
 * (c) 2010-2020 Google LLC. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* global shallowCopy: true */

/**
 * Creates a shallow copy of an object, an array or a primitive.
 *
 * Assumes that there are no proto properties for objects.
 */
function shallowCopy(src, dst) {
  if (isArray(src)) {
    dst = dst || [];

    for (var i = 0, ii = src.length; i < ii; i++) {
      dst[i] = src[i];
    }
  } else if (isObject(src)) {
    dst = dst || {};

    for (var key in src) {
      if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
        dst[key] = src[key];
      }
    }
  }

  return dst || src;
}

/* global routeToRegExp: true */

/**
 * @param {string} path - The path to parse. (It is assumed to have query and hash stripped off.)
 * @param {Object} opts - Options.
 * @return {Object} - An object containing an array of path parameter names (`keys`) and a regular
 *     expression (`regexp`) that can be used to identify a matching URL and extract the path
 *     parameter values.
 *
 * @description
 * Parses the given path, extracting path parameter names and a regular expression to match URLs.
 *
 * Originally inspired by `pathRexp` in `visionmedia/express/lib/utils.js`.
 */
function routeToRegExp(path, opts) {
  var keys = [];

  var pattern = path
    .replace(/([().])/g, '\\$1')
    .replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(_, slash, key, option) {
      var optional = option === '?' || option === '*?';
      var star = option === '*' || option === '*?';
      keys.push({name: key, optional: optional});
      slash = slash || '';
      return (
        (optional ? '(?:' + slash : slash + '(?:') +
        (star ? '(.+?)' : '([^/]+)') +
        (optional ? '?)?' : ')')
      );
    })
    .replace(/([/$*])/g, '\\$1');

  if (opts.ignoreTrailingSlashes) {
    pattern = pattern.replace(/\/+$/, '') + '/*';
  }

  return {
    keys: keys,
    regexp: new RegExp(
      '^' + pattern + '(?:[?#]|$)',
      opts.caseInsensitiveMatch ? 'i' : ''
    )
  };
}

/* global routeToRegExp: false */
/* global shallowCopy: false */

// `isArray` and `isObject` are necessary for `shallowCopy()` (included via `src/shallowCopy.js`).
// They are initialized inside the `$RouteProvider`, to ensure `window.angular` is available.
var isArray;
var isObject;
var isDefined;
var noop;

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for AngularJS apps.
 *
 * ## Example
 * See {@link ngRoute.$route#examples $route} for an example of configuring and using `ngRoute`.
 *
 */
/* global -ngRouteModule */
var ngRouteModule = angular.
  module('ngRoute', []).
  info({ angularVersion: '1.8.2' }).
  provider('$route', $RouteProvider).
  // Ensure `$route` will be instantiated in time to capture the initial `$locationChangeSuccess`
  // event (unless explicitly disabled). This is necessary in case `ngView` is included in an
  // asynchronously loaded template.
  run(instantiateRoute);
var $routeMinErr = angular.$$minErr('ngRoute');
var isEagerInstantiationEnabled;


/**
 * @ngdoc provider
 * @name $routeProvider
 * @this
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#examples $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider() {
  isArray = angular.isArray;
  isObject = angular.isObject;
  isDefined = angular.isDefined;
  noop = angular.noop;

  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|Function)=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.
   *      If present, the controller will be published to scope under the `controllerAs` name.
   *    - `template` – `{(string|Function)=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *      One of `template` or `templateUrl` is required.
   *
   *    - `templateUrl` – `{(string|Function)=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *      One of `templateUrl` or `template` is required.
   *
   *    - `resolve` - `{Object.<string, Function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired.
   *      For easier access to the resolved dependencies from the template, the `resolve` map will
   *      be available on the scope of the route, under `$resolve` (by default) or a custom name
   *      specified by the `resolveAs` property (see below). This can be particularly useful, when
   *      working with {@link angular.Module#component components} as route templates.<br />
   *      <div class="alert alert-warning">
   *        **Note:** If your scope already contains a property with this name, it will be hidden
   *        or overwritten. Make sure, you specify an appropriate name for this property, that
   *        does not collide with other properties on the scope.
   *      </div>
   *      The map object is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|Function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on
   *      the scope of the route. If omitted, defaults to `$resolve`.
   *
   *    - `redirectTo` – `{(string|Function)=}` – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.url()`. If the function throws an error, no further processing will
   *      take place and the {@link ngRoute.$route#$routeChangeError $routeChangeError} event will
   *      be fired.
   *
   *      Routes that specify `redirectTo` will not have their controllers, template functions
   *      or resolves called, the `$location` will be changed to the redirect url and route
   *      processing will stop. The exception to this is if the `redirectTo` is a function that
   *      returns `undefined`. In this case the route transition occurs as though there was no
   *      redirection.
   *
   *    - `resolveRedirectTo` – `{Function=}` – a function that will (eventually) return the value
   *      to update {@link ng.$location $location} URL with and trigger route redirection. In
   *      contrast to `redirectTo`, dependencies can be injected into `resolveRedirectTo` and the
   *      return value can be either a string or a promise that will be resolved to a string.
   *
   *      Similar to `redirectTo`, if the return value is `undefined` (or a promise that gets
   *      resolved to `undefined`), no redirection takes place and the route transition occurs as
   *      though there was no redirection.
   *
   *      If the function throws an error or the returned promise gets rejected, no further
   *      processing will take place and the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event will be fired.
   *
   *      `redirectTo` takes precedence over `resolveRedirectTo`, so specifying both on the same
   *      route definition, will cause the latter to be ignored.
   *
   *    - `[reloadOnUrl=true]` - `{boolean=}` - reload route when any part of the URL changes
   *      (including the path) even if the new URL maps to the same route.
   *
   *      If the option is set to `false` and the URL in the browser changes, but the new URL maps
   *      to the same route, then a `$routeUpdate` event is broadcasted on the root scope (without
   *      reloading the route).
   *
   *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and the URL in the browser changes, then a `$routeUpdate`
   *      event is broadcasted on the root scope (without reloading the route).
   *
   *      <div class="alert alert-warning">
   *        **Note:** This option has no effect if `reloadOnUrl` is set to `false`.
   *      </div>
   *
   *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    //copy original route object to preserve params inherited from proto chain
    var routeCopy = shallowCopy(route);
    if (angular.isUndefined(routeCopy.reloadOnUrl)) {
      routeCopy.reloadOnUrl = true;
    }
    if (angular.isUndefined(routeCopy.reloadOnSearch)) {
      routeCopy.reloadOnSearch = true;
    }
    if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
      routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
    }
    routes[path] = angular.extend(
      routeCopy,
      {originalPath: path},
      path && routeToRegExp(path, routeCopy)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length - 1] === '/')
            ? path.substr(0, path.length - 1)
            : path + '/';

      routes[redirectPath] = angular.extend(
        {originalPath: path, redirectTo: path},
        routeToRegExp(redirectPath, routeCopy)
      );
    }

    return this;
  };

  /**
   * @ngdoc property
   * @name $routeProvider#caseInsensitiveMatch
   * @description
   *
   * A boolean property indicating if routes defined
   * using this provider should be matched using a case insensitive
   * algorithm. Defaults to `false`.
   */
  this.caseInsensitiveMatch = false;

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object|string} params Mapping information to be assigned to `$route.current`.
   * If called with a string, the value maps to `redirectTo`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };

  /**
   * @ngdoc method
   * @name $routeProvider#eagerInstantiationEnabled
   * @kind function
   *
   * @description
   * Call this method as a setter to enable/disable eager instantiation of the
   * {@link ngRoute.$route $route} service upon application bootstrap. You can also call it as a
   * getter (i.e. without any arguments) to get the current value of the
   * `eagerInstantiationEnabled` flag.
   *
   * Instantiating `$route` early is necessary for capturing the initial
   * {@link ng.$location#$locationChangeStart $locationChangeStart} event and navigating to the
   * appropriate route. Usually, `$route` is instantiated in time by the
   * {@link ngRoute.ngView ngView} directive. Yet, in cases where `ngView` is included in an
   * asynchronously loaded template (e.g. in another directive's template), the directive factory
   * might not be called soon enough for `$route` to be instantiated _before_ the initial
   * `$locationChangeSuccess` event is fired. Eager instantiation ensures that `$route` is always
   * instantiated in time, regardless of when `ngView` will be loaded.
   *
   * The default value is true.
   *
   * **Note**:<br />
   * You may want to disable the default behavior when unit-testing modules that depend on
   * `ngRoute`, in order to avoid an unexpected request for the default route's template.
   *
   * @param {boolean=} enabled - If provided, update the internal `eagerInstantiationEnabled` flag.
   *
   * @returns {*} The current value of the `eagerInstantiationEnabled` flag if used as a getter or
   *     itself (for chaining) if used as a setter.
   */
  isEagerInstantiationEnabled = true;
  this.eagerInstantiationEnabled = function eagerInstantiationEnabled(enabled) {
    if (isDefined(enabled)) {
      isEagerInstantiationEnabled = enabled;
      return this;
    }

    return isEagerInstantiationEnabled;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$templateRequest',
               '$sce',
               '$browser',
      function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce, $browser) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as defined in the route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     *     The `locals` will be assigned to the route scope's `$resolve` property. You can override
     *     the property name, using `resolveAs` in the route definition. See
     *     {@link ngRoute.$routeProvider $routeProvider} for more info.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = 'BookController';
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = 'ChapterController';
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller: ChapterController/);
     *       expect(content).toMatch(/Book Id: Moby/);
     *       expect(content).toMatch(/Chapter Id: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller: BookController/);
     *       expect(content).toMatch(/Book Id: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * The route change (and the `$location` change that triggered it) can be prevented
     * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
     * for more details about event object.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route change has happened successfully.
     * The `resolve` dependencies are now available in the `current.locals` property.
     *
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if a redirection function fails or any redirection or resolve promises are
     * rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection The thrown error or the rejection reason of the promise. Usually
     * the rejection reason is the error that caused the promise to get rejected.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if the same instance of a route (including template, controller instance,
     * resolved dependencies, etc.) is being reused. This can happen if either `reloadOnSearch` or
     * `reloadOnUrl` has been set to `false`.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current/previous route information.
     */

    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope and reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;

            var fakeLocationEvent = {
              defaultPrevented: false,
              preventDefault: function fakePreventDefault() {
                this.defaultPrevented = true;
                forceReload = false;
              }
            };

            $rootScope.$evalAsync(function() {
              prepareRoute(fakeLocationEvent);
              if (!fakeLocationEvent.defaultPrevented) commitRoute();
            });
          },

          /**
           * @ngdoc method
           * @name $route#updateParams
           *
           * @description
           * Causes `$route` service to update the current URL, replacing
           * current route parameters with those specified in `newParams`.
           * Provided property names that match the route's path segment
           * definitions will be interpolated into the location's path, while
           * remaining properties will be treated as query params.
           *
           * @param {!Object<string, string>} newParams mapping of URL parameter names to values
           */
          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              // interpolate modifies newParams, only query params are left
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function prepareRoute($locationEvent) {
      var lastRoute = $route.current;

      preparedRoute = parseRoute();
      preparedRouteIsUpdateOnly = isNavigationUpdateOnly(preparedRoute, lastRoute);

      if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
          if ($locationEvent) {
            $locationEvent.preventDefault();
          }
        }
      }
    }

    function commitRoute() {
      var lastRoute = $route.current;
      var nextRoute = preparedRoute;

      if (preparedRouteIsUpdateOnly) {
        lastRoute.params = nextRoute.params;
        angular.copy(lastRoute.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', lastRoute);
      } else if (nextRoute || lastRoute) {
        forceReload = false;
        $route.current = nextRoute;

        var nextRoutePromise = $q.resolve(nextRoute);

        $browser.$$incOutstandingRequestCount('$route');

        nextRoutePromise.
          then(getRedirectionData).
          then(handlePossibleRedirection).
          then(function(keepProcessingRoute) {
            return keepProcessingRoute && nextRoutePromise.
              then(resolveLocals).
              then(function(locals) {
                // after route change
                if (nextRoute === $route.current) {
                  if (nextRoute) {
                    nextRoute.locals = locals;
                    angular.copy(nextRoute.params, $routeParams);
                  }
                  $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
                }
              });
          }).catch(function(error) {
            if (nextRoute === $route.current) {
              $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
            }
          }).finally(function() {
            // Because `commitRoute()` is called from a `$rootScope.$evalAsync` block (see
            // `$locationWatch`), this `$$completeOutstandingRequest()` call will not cause
            // `outstandingRequestCount` to hit zero.  This is important in case we are redirecting
            // to a new route which also requires some asynchronous work.

            $browser.$$completeOutstandingRequest(noop, '$route');
          });
      }
    }

    function getRedirectionData(route) {
      var data = {
        route: route,
        hasRedirection: false
      };

      if (route) {
        if (route.redirectTo) {
          if (angular.isString(route.redirectTo)) {
            data.path = interpolate(route.redirectTo, route.params);
            data.search = route.params;
            data.hasRedirection = true;
          } else {
            var oldPath = $location.path();
            var oldSearch = $location.search();
            var newUrl = route.redirectTo(route.pathParams, oldPath, oldSearch);

            if (angular.isDefined(newUrl)) {
              data.url = newUrl;
              data.hasRedirection = true;
            }
          }
        } else if (route.resolveRedirectTo) {
          return $q.
            resolve($injector.invoke(route.resolveRedirectTo)).
            then(function(newUrl) {
              if (angular.isDefined(newUrl)) {
                data.url = newUrl;
                data.hasRedirection = true;
              }

              return data;
            });
        }
      }

      return data;
    }

    function handlePossibleRedirection(data) {
      var keepProcessingRoute = true;

      if (data.route !== $route.current) {
        keepProcessingRoute = false;
      } else if (data.hasRedirection) {
        var oldUrl = $location.url();
        var newUrl = data.url;

        if (newUrl) {
          $location.
            url(newUrl).
            replace();
        } else {
          newUrl = $location.
            path(data.path).
            search(data.search).
            replace().
            url();
        }

        if (newUrl !== oldUrl) {
          // Exit out and don't process current next value,
          // wait for next location change from redirect
          keepProcessingRoute = false;
        }
      }

      return keepProcessingRoute;
    }

    function resolveLocals(route) {
      if (route) {
        var locals = angular.extend({}, route.resolve);
        angular.forEach(locals, function(value, key) {
          locals[key] = angular.isString(value) ?
              $injector.get(value) :
              $injector.invoke(value, null, null, key);
        });
        var template = getTemplateFor(route);
        if (angular.isDefined(template)) {
          locals['$template'] = template;
        }
        return $q.all(locals);
      }
    }

    function getTemplateFor(route) {
      var template, templateUrl;
      if (angular.isDefined(template = route.template)) {
        if (angular.isFunction(template)) {
          template = template(route.params);
        }
      } else if (angular.isDefined(templateUrl = route.templateUrl)) {
        if (angular.isFunction(templateUrl)) {
          templateUrl = templateUrl(route.params);
        }
        if (angular.isDefined(templateUrl)) {
          route.loadedTemplateUrl = $sce.valueOf(templateUrl);
          template = $templateRequest(templateUrl);
        }
      }
      return template;
    }

    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @param {Object} newRoute - The new route configuration (as returned by `parseRoute()`).
     * @param {Object} oldRoute - The previous route configuration (as returned by `parseRoute()`).
     * @returns {boolean} Whether this is an "update-only" navigation, i.e. the URL maps to the same
     *                    route and it can be reused (based on the config and the type of change).
     */
    function isNavigationUpdateOnly(newRoute, oldRoute) {
      // IF this is not a forced reload
      return !forceReload
          // AND both `newRoute`/`oldRoute` are defined
          && newRoute && oldRoute
          // AND they map to the same Route Definition Object
          && (newRoute.$$route === oldRoute.$$route)
          // AND `reloadOnUrl` is disabled
          && (!newRoute.reloadOnUrl
              // OR `reloadOnSearch` is disabled
              || (!newRoute.reloadOnSearch
                  // AND both routes have the same path params
                  && angular.equals(newRoute.pathParams, oldRoute.pathParams)
              )
          );
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

instantiateRoute.$inject = ['$injector'];
function instantiateRoute($injector) {
  if (isEagerInstantiationEnabled) {
    // Instantiate `$route`
    $injector.get('$route');
  }
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 * @this
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * | Animation                        | Occurs                              |
 * |----------------------------------|-------------------------------------|
 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM |
 * | {@link ng.$animate#leave leave}  | when the old element is removed from to the DOM  |
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function MainCtrl($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
            this.name = 'BookCtrl';
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
            this.name = 'ChapterCtrl';
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: ChapterCtrl/);
          expect(content).toMatch(/Book Id: Moby/);
          expect(content).toMatch(/Chapter Id: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: BookCtrl/);
          expect(content).toMatch(/Book Id: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory($route, $anchorScroll, $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousLeaveAnimation,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if (previousLeaveAnimation) {
            $animate.cancel(previousLeaveAnimation);
            previousLeaveAnimation = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if (currentElement) {
            previousLeaveAnimation = $animate.leave(currentElement);
            previousLeaveAnimation.done(function(response) {
              if (response !== false) previousLeaveAnimation = null;
            });
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element).done(function onNgViewEnter(response) {
                if (response !== false && angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }
      scope[current.resolveAs || '$resolve'] = locals;

      link(scope);
    }
  };
}


})(window, window.angular);


/***/ }),

/***/ "./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__("./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/angular-route.js");
module.exports = 'ngRoute';


/***/ }),

/***/ "./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/angular-sanitize.js":
/***/ (() => {

/**
 * @license AngularJS v1.8.2
 * (c) 2010-2020 Google LLC. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sanitizeMinErr = angular.$$minErr('$sanitize');
var bind;
var extend;
var forEach;
var isArray;
var isDefined;
var lowercase;
var noop;
var nodeContains;
var htmlParser;
var htmlSanitizeWriter;

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   Sanitizes an html string by stripping all potentially dangerous tokens.
 *
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a trusted URI list) are
 *   then serialized back to a properly escaped HTML string. This means that no unsafe input can make
 *   it into the returned string.
 *
 *   The trusted URIs for URL sanitization of attribute values is configured using the functions
 *   `aHrefSanitizationTrustedUrlList` and `imgSrcSanitizationTrustedUrlList` of {@link $compileProvider}.
 *
 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js" name="sanitize-service">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */


/**
 * @ngdoc provider
 * @name $sanitizeProvider
 * @this
 *
 * @description
 * Creates and configures {@link $sanitize} instance.
 */
function $SanitizeProvider() {
  var hasBeenInstantiated = false;
  var svgEnabled = false;

  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    hasBeenInstantiated = true;
    if (svgEnabled) {
      extend(validElements, svgElements);
    }
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];


  /**
   * @ngdoc method
   * @name $sanitizeProvider#enableSvg
   * @kind function
   *
   * @description
   * Enables a subset of svg to be supported by the sanitizer.
   *
   * <div class="alert alert-warning">
   *   <p>By enabling this setting without taking other precautions, you might expose your
   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
   *   link). Such behavior can then result in phishing incidents.</p>
   *
   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
   *   tags within the sanitized content:</p>
   *
   *   <br>
   *
   *   <pre><code>
   *   .rootOfTheIncludedContent svg {
   *     overflow: hidden !important;
   *   }
   *   </code></pre>
   * </div>
   *
   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
   * @returns {boolean|$sanitizeProvider} Returns the currently configured value if called
   *    without an argument or self for chaining otherwise.
   */
  this.enableSvg = function(enableSvg) {
    if (isDefined(enableSvg)) {
      svgEnabled = enableSvg;
      return this;
    } else {
      return svgEnabled;
    }
  };


  /**
   * @ngdoc method
   * @name $sanitizeProvider#addValidElements
   * @kind function
   *
   * @description
   * Extends the built-in lists of valid HTML/SVG elements, i.e. elements that are considered safe
   * and are not stripped off during sanitization. You can extend the following lists of elements:
   *
   * - `htmlElements`: A list of elements (tag names) to extend the current list of safe HTML
   *   elements. HTML elements considered safe will not be removed during sanitization. All other
   *   elements will be stripped off.
   *
   * - `htmlVoidElements`: This is similar to `htmlElements`, but marks the elements as
   *   "void elements" (similar to HTML
   *   [void elements](https://rawgit.com/w3c/html/html5.1-2/single-page.html#void-elements)). These
   *   elements have no end tag and cannot have content.
   *
   * - `svgElements`: This is similar to `htmlElements`, but for SVG elements. This list is only
   *   taken into account if SVG is {@link ngSanitize.$sanitizeProvider#enableSvg enabled} for
   *   `$sanitize`.
   *
   * <div class="alert alert-info">
   *   This method must be called during the {@link angular.Module#config config} phase. Once the
   *   `$sanitize` service has been instantiated, this method has no effect.
   * </div>
   *
   * <div class="alert alert-warning">
   *   Keep in mind that extending the built-in lists of elements may expose your app to XSS or
   *   other vulnerabilities. Be very mindful of the elements you add.
   * </div>
   *
   * @param {Array<String>|Object} elements - A list of valid HTML elements or an object with one or
   *   more of the following properties:
   *   - **htmlElements** - `{Array<String>}` - A list of elements to extend the current list of
   *     HTML elements.
   *   - **htmlVoidElements** - `{Array<String>}` - A list of elements to extend the current list of
   *     void HTML elements; i.e. elements that do not have an end tag.
   *   - **svgElements** - `{Array<String>}` - A list of elements to extend the current list of SVG
   *     elements. The list of SVG elements is only taken into account if SVG is
   *     {@link ngSanitize.$sanitizeProvider#enableSvg enabled} for `$sanitize`.
   *
   * Passing an array (`[...]`) is equivalent to passing `{htmlElements: [...]}`.
   *
   * @return {$sanitizeProvider} Returns self for chaining.
   */
  this.addValidElements = function(elements) {
    if (!hasBeenInstantiated) {
      if (isArray(elements)) {
        elements = {htmlElements: elements};
      }

      addElementsTo(svgElements, elements.svgElements);
      addElementsTo(voidElements, elements.htmlVoidElements);
      addElementsTo(validElements, elements.htmlVoidElements);
      addElementsTo(validElements, elements.htmlElements);
    }

    return this;
  };


  /**
   * @ngdoc method
   * @name $sanitizeProvider#addValidAttrs
   * @kind function
   *
   * @description
   * Extends the built-in list of valid attributes, i.e. attributes that are considered safe and are
   * not stripped off during sanitization.
   *
   * **Note**:
   * The new attributes will not be treated as URI attributes, which means their values will not be
   * sanitized as URIs using `$compileProvider`'s
   * {@link ng.$compileProvider#aHrefSanitizationTrustedUrlList aHrefSanitizationTrustedUrlList} and
   * {@link ng.$compileProvider#imgSrcSanitizationTrustedUrlList imgSrcSanitizationTrustedUrlList}.
   *
   * <div class="alert alert-info">
   *   This method must be called during the {@link angular.Module#config config} phase. Once the
   *   `$sanitize` service has been instantiated, this method has no effect.
   * </div>
   *
   * <div class="alert alert-warning">
   *   Keep in mind that extending the built-in list of attributes may expose your app to XSS or
   *   other vulnerabilities. Be very mindful of the attributes you add.
   * </div>
   *
   * @param {Array<String>} attrs - A list of valid attributes.
   *
   * @returns {$sanitizeProvider} Returns self for chaining.
   */
  this.addValidAttrs = function(attrs) {
    if (!hasBeenInstantiated) {
      extend(validAttrs, arrayToMap(attrs, true));
    }
    return this;
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Private stuff
  //////////////////////////////////////////////////////////////////////////////////////////////////

  bind = angular.bind;
  extend = angular.extend;
  forEach = angular.forEach;
  isArray = angular.isArray;
  isDefined = angular.isDefined;
  lowercase = angular.$$lowercase;
  noop = angular.noop;

  htmlParser = htmlParserImpl;
  htmlSanitizeWriter = htmlSanitizeWriterImpl;

  nodeContains = window.Node.prototype.contains || /** @this */ function(arg) {
    // eslint-disable-next-line no-bitwise
    return !!(this.compareDocumentPosition(arg) & 16);
  };

  // Regular Expressions for parsing tags and attributes
  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    // Match everything outside of normal chars and " (quote character)
    NON_ALPHANUMERIC_REGEXP = /([^#-~ |!])/g;


  // Good source of info about elements and attributes
  // http://dev.w3.org/html5/spec/Overview.html#semantics
  // http://simon.html5.org/html-elements

  // Safe Void Elements - HTML5
  // http://dev.w3.org/html5/spec/Overview.html#void-elements
  var voidElements = stringToMap('area,br,col,hr,img,wbr');

  // Elements that you can, intentionally, leave open (and which close themselves)
  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
  var optionalEndTagBlockElements = stringToMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
      optionalEndTagInlineElements = stringToMap('rp,rt'),
      optionalEndTagElements = extend({},
                                              optionalEndTagInlineElements,
                                              optionalEndTagBlockElements);

  // Safe Block Elements - HTML5
  var blockElements = extend({}, optionalEndTagBlockElements, stringToMap('address,article,' +
          'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
          'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));

  // Inline Elements - HTML5
  var inlineElements = extend({}, optionalEndTagInlineElements, stringToMap('a,abbr,acronym,b,' +
          'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' +
          'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));

  // SVG Elements
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
  // They can potentially allow for arbitrary javascript to be executed. See #11290
  var svgElements = stringToMap('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,' +
          'hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,' +
          'radialGradient,rect,stop,svg,switch,text,title,tspan');

  // Blocked Elements (will be stripped)
  var blockedElements = stringToMap('script,style');

  var validElements = extend({},
                                     voidElements,
                                     blockElements,
                                     inlineElements,
                                     optionalEndTagElements);

  //Attributes that have href and hence need to be sanitized
  var uriAttrs = stringToMap('background,cite,href,longdesc,src,xlink:href,xml:base');

  var htmlAttrs = stringToMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
      'valign,value,vspace,width');

  // SVG attributes (without "id" and "name" attributes)
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
  var svgAttrs = stringToMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

  var validAttrs = extend({},
                                  uriAttrs,
                                  svgAttrs,
                                  htmlAttrs);

  function stringToMap(str, lowercaseKeys) {
    return arrayToMap(str.split(','), lowercaseKeys);
  }

  function arrayToMap(items, lowercaseKeys) {
    var obj = {}, i;
    for (i = 0; i < items.length; i++) {
      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
    }
    return obj;
  }

  function addElementsTo(elementsMap, newElements) {
    if (newElements && newElements.length) {
      extend(elementsMap, arrayToMap(newElements));
    }
  }

  /**
   * Create an inert document that contains the dirty HTML that needs sanitizing.
   * We use the DOMParser API by default and fall back to createHTMLDocument if DOMParser is not
   * available.
   */
  var getInertBodyElement /* function(html: string): HTMLBodyElement */ = (function(window, document) {
    if (isDOMParserAvailable()) {
      return getInertBodyElement_DOMParser;
    }

    if (!document || !document.implementation) {
      throw $sanitizeMinErr('noinert', 'Can\'t create an inert html document');
    }
    var inertDocument = document.implementation.createHTMLDocument('inert');
    var inertBodyElement = (inertDocument.documentElement || inertDocument.getDocumentElement()).querySelector('body');
    return getInertBodyElement_InertDocument;

    function isDOMParserAvailable() {
      try {
        return !!getInertBodyElement_DOMParser('');
      } catch (e) {
        return false;
      }
    }

    function getInertBodyElement_DOMParser(html) {
      // We add this dummy element to ensure that the rest of the content is parsed as expected
      // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the `<head>` tag.
      html = '<remove></remove>' + html;
      try {
        var body = new window.DOMParser().parseFromString(html, 'text/html').body;
        body.firstChild.remove();
        return body;
      } catch (e) {
        return undefined;
      }
    }

    function getInertBodyElement_InertDocument(html) {
      inertBodyElement.innerHTML = html;

      // Support: IE 9-11 only
      // strip custom-namespaced attributes on IE<=11
      if (document.documentMode) {
        stripCustomNsAttrs(inertBodyElement);
      }

      return inertBodyElement;
    }
  })(window, window.document);

  /**
   * @example
   * htmlParser(htmlString, {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * });
   *
   * @param {string} html string
   * @param {object} handler
   */
  function htmlParserImpl(html, handler) {
    if (html === null || html === undefined) {
      html = '';
    } else if (typeof html !== 'string') {
      html = '' + html;
    }

    var inertBodyElement = getInertBodyElement(html);
    if (!inertBodyElement) return '';

    //mXSS protection
    var mXSSAttempts = 5;
    do {
      if (mXSSAttempts === 0) {
        throw $sanitizeMinErr('uinput', 'Failed to sanitize html because the input is unstable');
      }
      mXSSAttempts--;

      // trigger mXSS if it is going to happen by reading and writing the innerHTML
      html = inertBodyElement.innerHTML;
      inertBodyElement = getInertBodyElement(html);
    } while (html !== inertBodyElement.innerHTML);

    var node = inertBodyElement.firstChild;
    while (node) {
      switch (node.nodeType) {
        case 1: // ELEMENT_NODE
          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
          break;
        case 3: // TEXT NODE
          handler.chars(node.textContent);
          break;
      }

      var nextNode;
      if (!(nextNode = node.firstChild)) {
        if (node.nodeType === 1) {
          handler.end(node.nodeName.toLowerCase());
        }
        nextNode = getNonDescendant('nextSibling', node);
        if (!nextNode) {
          while (nextNode == null) {
            node = getNonDescendant('parentNode', node);
            if (node === inertBodyElement) break;
            nextNode = getNonDescendant('nextSibling', node);
            if (node.nodeType === 1) {
              handler.end(node.nodeName.toLowerCase());
            }
          }
        }
      }
      node = nextNode;
    }

    while ((node = inertBodyElement.firstChild)) {
      inertBodyElement.removeChild(node);
    }
  }

  function attrToMap(attrs) {
    var map = {};
    for (var i = 0, ii = attrs.length; i < ii; i++) {
      var attr = attrs[i];
      map[attr.name] = attr.value;
    }
    return map;
  }


  /**
   * Escapes all potentially dangerous characters, so that the
   * resulting string can be safely inserted into attribute or
   * element text.
   * @param value
   * @returns {string} escaped text
   */
  function encodeEntities(value) {
    return value.
      replace(/&/g, '&amp;').
      replace(SURROGATE_PAIR_REGEXP, function(value) {
        var hi = value.charCodeAt(0);
        var low = value.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
      }).
      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
        return '&#' + value.charCodeAt(0) + ';';
      }).
      replace(/</g, '&lt;').
      replace(/>/g, '&gt;');
  }

  /**
   * create an HTML/XML writer which writes to buffer
   * @param {Array} buf use buf.join('') to get out sanitized html string
   * @returns {object} in the form of {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * }
   */
  function htmlSanitizeWriterImpl(buf, uriValidator) {
    var ignoreCurrentElement = false;
    var out = bind(buf, buf.push);
    return {
      start: function(tag, attrs) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && blockedElements[tag]) {
          ignoreCurrentElement = tag;
        }
        if (!ignoreCurrentElement && validElements[tag] === true) {
          out('<');
          out(tag);
          forEach(attrs, function(value, key) {
            var lkey = lowercase(key);
            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
            if (validAttrs[lkey] === true &&
              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
              out(' ');
              out(key);
              out('="');
              out(encodeEntities(value));
              out('"');
            }
          });
          out('>');
        }
      },
      end: function(tag) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
          out('</');
          out(tag);
          out('>');
        }
        // eslint-disable-next-line eqeqeq
        if (tag == ignoreCurrentElement) {
          ignoreCurrentElement = false;
        }
      },
      chars: function(chars) {
        if (!ignoreCurrentElement) {
          out(encodeEntities(chars));
        }
      }
    };
  }


  /**
   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
   * to allow any of these custom attributes. This method strips them all.
   *
   * @param node Root element to process
   */
  function stripCustomNsAttrs(node) {
    while (node) {
      if (node.nodeType === window.Node.ELEMENT_NODE) {
        var attrs = node.attributes;
        for (var i = 0, l = attrs.length; i < l; i++) {
          var attrNode = attrs[i];
          var attrName = attrNode.name.toLowerCase();
          if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
            node.removeAttributeNode(attrNode);
            i--;
            l--;
          }
        }
      }

      var nextNode = node.firstChild;
      if (nextNode) {
        stripCustomNsAttrs(nextNode);
      }

      node = getNonDescendant('nextSibling', node);
    }
  }

  function getNonDescendant(propName, node) {
    // An element is clobbered if its `propName` property points to one of its descendants
    var nextNode = node[propName];
    if (nextNode && nodeContains.call(node, nextNode)) {
      throw $sanitizeMinErr('elclob', 'Failed to sanitize html because the element is clobbered: {0}', node.outerHTML || node.outerText);
    }
    return nextNode;
  }
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, noop);
  writer.chars(chars);
  return buf.join('');
}


// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', [])
  .provider('$sanitize', $SanitizeProvider)
  .info({ angularVersion: '1.8.2' });

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports `http/https/ftp/sftp/mailto` and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} [target] Window (`_blank|_self|_parent|_top`) or named frame to open links in.
 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
 *
 *    Can be one of:
 *
 *    - `object`: A map of attributes
 *    - `function`: Takes the url as a parameter and returns a map of attributes
 *
 *    If the map of attributes contains a value for `target`, it overrides the value of
 *    the target parameter.
 *
 *
 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js" name="linky-filter">
     <file name="index.html">
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <th>Filter</th>
           <th>Source</th>
           <th>Rendered</th>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="linky-custom-attributes">
          <td>linky custom attributes</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="script.js">
       angular.module('linkyExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.snippet =
             'Pretty text with some links:\n' +
             'http://angularjs.org/,\n' +
             'mailto:us@somewhere.org,\n' +
             'another@somewhere.org,\n' +
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithSingleURL = 'http://angularjs.org/';
         }]);
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });

       it('should optionally add custom attributes', function() {
        expect(element(by.id('linky-custom-attributes')).
            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      MAILTO_REGEXP = /^mailto:/i;

  var linkyMinErr = angular.$$minErr('linky');
  var isDefined = angular.isDefined;
  var isFunction = angular.isFunction;
  var isObject = angular.isObject;
  var isString = angular.isString;

  return function(text, target, attributes) {
    if (text == null || text === '') return text;
    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

    var attributesFn =
      isFunction(attributes) ? attributes :
      isObject(attributes) ? function getAttributesObject() {return attributes;} :
      function getEmptyAttributesObject() {return {};};

    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/www/mailto then assume mailto
      if (!match[2] && !match[4]) {
        url = (match[3] ? 'http://' : 'mailto:') + url;
      }
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      var key, linkAttributes = attributesFn(url);
      html.push('<a ');

      for (key in linkAttributes) {
        html.push(key + '="' + linkAttributes[key] + '" ');
      }

      if (isDefined(target) && !('target' in linkAttributes)) {
        html.push('target="',
                  target,
                  '" ');
      }
      html.push('href="',
                url.replace(/"/g, '&quot;'),
                '">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);


/***/ }),

/***/ "./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__("./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/angular-sanitize.js");
module.exports = 'ngSanitize';


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/autoUpdate.js":
/***/ ((module) => {

"use strict";


/* Autoupdate plugin for baron 0.6+ */

function autoUpdateOne(MutationObserver) {
    var self = this
    var watcher

    if (this._au) {
        return
    }

    function actualizeWatcher() {
        if (!self.root[self.origin.offset]) {
            startWatch()
        } else {
            stopWatch()
        }
    }

    // Set interval timeout for watching when root node will be visible
    function startWatch() {
        if (watcher) return

        watcher = setInterval(function() {
            if (self.root[self.origin.offset]) {
                stopWatch()
                self.update()
            }
        }, 300) // is it good enought for you?)
    }

    function stopWatch() {
        clearInterval(watcher)
        watcher = null
    }

    var debouncedUpdater = self._debounce(function() {
        self.update()
    }, 300)

    this._observer = new MutationObserver(function() {
        actualizeWatcher()
        self.update()
        debouncedUpdater()
    })

    this.on('init', function() {
        self._observer.observe(self.root, {
            childList: true,
            subtree: true,
            characterData: true
            // attributes: true
            // No reasons to set attributes to true
            // The case when root/child node with already properly inited baron toggled to hidden and then back to visible,
            // and the size of parent was changed during that hidden state, is very rare
            // Other cases are covered by watcher, and you still can do .update by yourself
        })

        actualizeWatcher()
    })

    this.on('dispose', function() {
        self._observer.disconnect()
        stopWatch()
        delete self._observer
    })

    this._au = true
}

module.exports = function autoUpdateCreator(win) {
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver || null

    return function autoUpdate() {
        if (!MutationObserver) return this

        autoUpdateOne.call(this, MutationObserver)

        return this
    }
}


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/controls.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* Controls plugin for baron */

var qs = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").qs)

module.exports = function controls(params) {
    var forward, backward, track, screen,
        self = this,
        event

    screen = params.screen || 0.9

    if (params.forward) {
        forward = qs(params.forward, this.clipper)

        event = {
            element: forward,

            handler: function() {
                var y = self.pos() + (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.backward) {
        backward = qs(params.backward, this.clipper)

        event = {
            element: backward,

            handler: function() {
                var y = self.pos() - (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.track) {
        if (params.track === true) {
            track = this.track
        } else {
            track = qs(params.track, this.clipper)
        }

        if (track) {
            event = {
                element: track,

                handler: function(e) {
                    // https://github.com/Diokuz/baron/issues/121
                    if (e.target != track) return

                    var x = e['offset' + self.origin.x],
                        xBar = self.bar[self.origin.offsetPos],
                        sign = 0

                    if (x < xBar) {
                        sign = -1
                    } else if (x > xBar + self.bar[self.origin.offset]) {
                        sign = 1
                    }

                    var y = self.pos() + sign * screen * self.scroller[self.origin.client]

                    self.pos(y)
                },

                type: 'mousedown'
            }

            this._eventHandlers.push(event) // For auto-dispose
            this.event(event.element, event.type, event.handler, 'on')
        }
    }
}


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var g = (function() {
    return this || (1, eval)('this')
}())
var scopedWindow = g && g.window || g

var event = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .event */ .B)
var css = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .css */ .iv)
var add = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .add */ .IH)
var has = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .has */ .e$)
var rm = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").rm)
var clone = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .clone */ .d9)
var qs = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").qs)

var _baron = baron // Stored baron value for noConflict usage
// var Item = {}
var pos = ['left', 'top', 'right', 'bottom', 'width', 'height']
// Global store for all baron instances (to be able to dispose them on html-nodes)
var instances = []
var origin = {
    v: { // Vertical
        x: 'Y', pos: pos[1], oppos: pos[3], crossPos: pos[0], crossOpPos: pos[2],
        size: pos[5],
        crossSize: pos[4], crossMinSize: 'min-' + pos[4], crossMaxSize: 'max-' + pos[4],
        client: 'clientHeight', crossClient: 'clientWidth',
        scrollEdge: 'scrollLeft',
        offset: 'offsetHeight', crossOffset: 'offsetWidth', offsetPos: 'offsetTop',
        scroll: 'scrollTop', scrollSize: 'scrollHeight'
    },
    h: { // Horizontal
        x: 'X', pos: pos[0], oppos: pos[2], crossPos: pos[1], crossOpPos: pos[3],
        size: pos[4],
        crossSize: pos[5], crossMinSize: 'min-' + pos[5], crossMaxSize: 'max-' + pos[5],
        client: 'clientWidth', crossClient: 'clientHeight',
        scrollEdge: 'scrollTop',
        offset: 'offsetWidth', crossOffset: 'offsetHeight', offsetPos: 'offsetLeft',
        scroll: 'scrollLeft', scrollSize: 'scrollWidth'
    }
}

// Some ugly vars
var opera12maxScrollbarSize = 17
// I hate you https://github.com/Diokuz/baron/issues/110
var macmsxffScrollbarSize = 15
var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/
var isMacFF = macosxffRe.test(scopedWindow.navigator && scopedWindow.navigator.userAgent)

var log, liveBarons, shownErrors

if (false) {}

// window.baron and jQuery.fn.baron points to this function
function baron(user) {
    var withParams = !!user
    var tryNode = (user && user[0]) || user
    var isNode = typeof user == 'string' || tryNode instanceof HTMLElement
    var params = isNode ? { root: user } : clone(user)
    var jQueryMode
    var rootNode
    var defaultParams = {
        direction: 'v',
        barOnCls: '_scrollbar',
        resizeDebounce: 0,
        event: event,
        cssGuru: false,
        impact: 'scroller',
        position: 'static'
    }

    params = params || {}

    // Extending default params by user-defined params
    for (var key in defaultParams) {
        if (params[key] == null) { // eslint-disable-line
            params[key] = defaultParams[key]
        }
    }

    if (false) {}

    // `this` could be a jQuery instance
    jQueryMode = this && this instanceof scopedWindow.jQuery

    if (params._chain) {
        rootNode = params.root
    } else if (jQueryMode) {
        params.root = rootNode = this[0]
    } else {
        rootNode = qs(params.root || params.scroller)
    }

    if (false) {}

    var attr = manageAttr(rootNode, params.direction)
    var id = +attr // Could be NaN

    params.index = id

    // baron() can return existing instances,
    // @TODO update params on-the-fly
    // https://github.com/Diokuz/baron/issues/124
    if (id == id && attr !== null && instances[id]) {
        if (false) {}

        return instances[id]
    }

    // root and scroller can be different nodes
    if (params.root && params.scroller) {
        params.scroller = qs(params.scroller, rootNode)
        if (false) {}
    } else {
        params.scroller = rootNode
    }

    params.root = rootNode

    var instance = init(params)

    if (instance.autoUpdate) {
        instance.autoUpdate()
    }

    return instance
}

function arrayEach(_obj, iterator) {
    var i = 0
    var obj = _obj

    if (obj.length === undefined || obj === scopedWindow) obj = [obj]

    while (obj[i]) {
        iterator.call(this, obj[i], i)
        i++
    }
}

// shortcut for getTime
function getTime() {
    return new Date().getTime()
}

if (false) {}

function manageEvents(item, eventManager, mode) {
    // Creating new functions for one baron item only one time
    item._eventHandlers = item._eventHandlers || [
        {
            // onScroll:
            element: item.scroller,

            handler: function(e) {
                item.scroll(e)
            },

            type: 'scroll'
        }, {
            // css transitions & animations
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'transitionend animationend'
        }, {
            // onKeyup (textarea):
            element: item.scroller,

            handler: function() {
                item.update()
            },

            type: 'keyup'
        }, {
            // onMouseDown:
            element: item.bar,

            handler: function(e) {
                e.preventDefault() // Text selection disabling in Opera
                item.selection() // Disable text selection in ie8
                item.drag.now = 1 // Save private byte
                if (item.draggingCls) {
                    add(item.root, item.draggingCls)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseUp:
            element: document,

            handler: function() {
                item.selection(1) // Enable text selection
                item.drag.now = 0
                if (item.draggingCls) {
                    rm(item.root, item.draggingCls)
                }
            },

            type: 'mouseup blur touchend'
        }, {
            // onCoordinateReset:
            element: document,

            handler: function(e) {
                if (e.button != 2) { // Not RM
                    item._pos0(e)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseMove:
            element: document,

            handler: function(e) {
                if (item.drag.now) {
                    item.drag(e)
                }
            },

            type: 'mousemove touchmove'
        }, {
            // @TODO make one global listener
            // onResize:
            element: scopedWindow,

            handler: function() {
                item.update()
            },

            type: 'resize'
        }, {
            // @todo remove
            // sizeChange:
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'sizeChange'
        }, {
            // Clipper onScroll bug https://github.com/Diokuz/baron/issues/116
            element: item.clipper,

            handler: function() {
                item.clipperOnScroll()
            },

            type: 'scroll'
        }
    ]

    arrayEach(item._eventHandlers, function(evt) {
        if (evt.element) {
            // workaround for element-elements in `fix` plugin
            // @todo dispose `fix` in proper way and remove workaround
            if (evt.element.length && evt.element !== scopedWindow) {
                for (var i = 0; i < evt.element.length; i++) {
                    eventManager(evt.element[i], evt.type, evt.handler, mode)
                }
            } else {
                eventManager(evt.element, evt.type, evt.handler, mode)
            }
        }
    })

    // if (item.scroller) {
    //     event(item.scroller, 'scroll', item._eventHandlers.onScroll, mode)
    // }
    // if (item.bar) {
    //     event(item.bar, 'touchstart mousedown', item._eventHandlers.onMouseDown, mode)
    // }
    // event(document, 'mouseup blur touchend', item._eventHandlers.onMouseUp, mode)
    // event(document, 'touchstart mousedown', item._eventHandlers.onCoordinateReset, mode)
    // event(document, 'mousemove touchmove', item._eventHandlers.onMouseMove, mode)
    // event(window, 'resize', item._eventHandlers.onResize, mode)
    // if (item.root) {
    //     event(item.root, 'sizeChange', item._eventHandlers.onResize, mode)
    //     // Custon event for alternate baron update mechanism
    // }
}

// set, remove or read baron-specific id-attribute
// @returns {String|null} - id node value, or null, if there is no attr
function manageAttr(node, direction, mode, id) {
    var attrName = 'data-baron-' + direction + '-id'

    if (mode == 'on') {
        node.setAttribute(attrName, id)
    } else if (mode == 'off') {
        node.removeAttribute(attrName)
    }

    return node.getAttribute(attrName)
}

function init(params) {
    var out = new baron.prototype.constructor(params)

    manageEvents(out, params.event, 'on')

    manageAttr(out.root, params.direction, 'on', instances.length)
    instances.push(out)

    if (false) {}

    out.update()

    return out
}

function fire(eventName) {
    if (this.events && this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
            var args = Array.prototype.slice.call( arguments, 1 )

            this.events[eventName][i].apply(this, args)
        }
    }
}

baron.prototype = {
    // underscore.js realization
    // used in autoUpdate plugin
    _debounce: function(func, wait) {
        var self = this,
            timeout,
            // args, // right now there is no need for arguments
            // context, // and for context
            timestamp
            // result // and for result

        var later = function() {
            if (self._disposed) {
                clearTimeout(timeout)
                timeout = self = null
                return
            }

            var last = getTime() - timestamp

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null
                // result = func.apply(context, args)
                func()
                // context = args = null
            }
        }

        return function() {
            // context = this
            // args = arguments
            timestamp = getTime()

            if (!timeout) {
                timeout = setTimeout(later, wait)
            }

            // return result
        }
    },

    constructor: function(params) {
        var barPos,
            scrollerPos0,
            track,
            resizePauseTimer,
            scrollingTimer,
            resizeLastFire,
            oldBarSize

        resizeLastFire = getTime()

        this.params = params
        this.event = params.event
        this.events = {}

        // DOM elements
        this.root = params.root // Always html node, not just selector
        this.scroller = qs(params.scroller)
        if (false) {}
        this.bar = qs(params.bar, this.root)
        track = this.track = qs(params.track, this.root)
        if (!this.track && this.bar) {
            track = this.bar.parentNode
        }
        this.clipper = this.scroller.parentNode

        // Parameters
        this.direction = params.direction
        this.rtl = params.rtl
        this.origin = origin[this.direction]
        this.barOnCls = params.barOnCls
        this.scrollingCls = params.scrollingCls
        this.draggingCls = params.draggingCls
        this.impact = params.impact
        this.position = params.position
        this.rtl = params.rtl
        this.barTopLimit = 0
        this.resizeDebounce = params.resizeDebounce

        // Updating height or width of bar
        function setBarSize(_size) {
            var barMinSize = this.barMinSize || 20
            var size = _size

            if (size > 0 && size < barMinSize) {
                size = barMinSize
            }

            if (this.bar) {
                css(this.bar, this.origin.size, parseInt(size, 10) + 'px')
            }
        }

        // Updating top or left bar position
        function posBar(_pos) {
            if (this.bar) {
                var was = css(this.bar, this.origin.pos),
                    will = +_pos + 'px'

                if (will && will != was) {
                    css(this.bar, this.origin.pos, will)
                }
            }
        }

        // Free path for bar
        function k() {
            return track[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset]
        }

        // Relative content top position to bar top position
        function relToPos(r) {
            return r * k.call(this) + this.barTopLimit
        }

        // Bar position to relative content position
        function posToRel(t) {
            return (t - this.barTopLimit) / k.call(this)
        }

        // Cursor position in main direction in px // Now with iOs support
        this.cursor = function(e) {
            return e['client' + this.origin.x] ||
                (((e.originalEvent || e).touches || {})[0] || {})['page' + this.origin.x]
        }

        // Text selection pos preventing
        function dontPosSelect() {
            return false
        }

        this.pos = function(x) { // Absolute scroller position in px
            var ie = 'page' + this.origin.x + 'Offset',
                key = (this.scroller[ie]) ? ie : this.origin.scroll

            if (x !== undefined) this.scroller[key] = x

            return this.scroller[key]
        }

        this.rpos = function(r) { // Relative scroller position (0..1)
            var free = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client],
                x

            if (r) {
                x = this.pos(r * free)
            } else {
                x = this.pos()
            }

            return x / (free || 1)
        }

        // Switch on the bar by adding user-defined CSS classname to scroller
        this.barOn = function(dispose) {
            if (this.barOnCls) {
                var noScroll = this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize]

                if (dispose || noScroll) {
                    if (has(this.root, this.barOnCls)) {
                        rm(this.root, this.barOnCls)
                    }
                } else if (!has(this.root, this.barOnCls)) {
                    add(this.root, this.barOnCls)
                }
            }
        }

        this._pos0 = function(e) {
            scrollerPos0 = this.cursor(e) - barPos
        }

        this.drag = function(e) {
            var rel = posToRel.call(this, this.cursor(e) - scrollerPos0)
            var sub = (this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client])

            this.scroller[this.origin.scroll] = rel * sub
        }

        // Text selection preventing on drag
        this.selection = function(enable) {
            this.event(document, 'selectpos selectstart', dontPosSelect, enable ? 'off' : 'on')
        }

        // onResize & DOM modified handler
        // also fires on init
        // Note: max/min-size didnt sets if size did not really changed (for example, on init in Chrome)
        this.resize = function() {
            var self = this
            var minPeriod = (self.resizeDebounce === undefined) ? 300 : self.resizeDebounce
            var delay = 0

            if (getTime() - resizeLastFire < minPeriod) {
                clearTimeout(resizePauseTimer)
                delay = minPeriod
            }

            function upd() {
                var offset = self.scroller[self.origin.crossOffset]
                var client = self.scroller[self.origin.crossClient]
                var padding = 0
                var was, will

                // https://github.com/Diokuz/baron/issues/110
                if (isMacFF) {
                    padding = macmsxffScrollbarSize

                // Opera 12 bug https://github.com/Diokuz/baron/issues/105
                } else if (client > 0 && offset === 0) {
                    // Only Opera 12 in some rare nested flexbox cases goes here
                    // Sorry guys for magic,
                    // but I dont want to create temporary html-nodes set
                    // just for measuring scrollbar size in Opera 12.
                    // 17px for Windows XP-8.1, 15px for Mac (really rare).
                    offset = client + opera12maxScrollbarSize
                }

                if (offset) { // if there is no size, css should not be set
                    self.barOn()

                    if (self.impact == 'scroller') { // scroller
                        var delta = offset - client + padding

                        // `static` position works only for `scroller` impact
                        if (self.position == 'static') { // static
                            was = css(self.scroller, self.origin.crossSize)
                            will = self.clipper[self.origin.crossClient] + delta + 'px'

                            if (was != will) {
                                self._setCrossSizes(self.scroller, will)
                            }
                        } else { // absolute
                            var styles = {}
                            var key = self.rtl ? 'Left' : 'Right'

                            if (self.direction == 'h') {
                                key = 'Bottom'
                            }

                            styles['padding' + key] = delta + 'px'
                            css(self.scroller, styles)
                        }
                    } else { // clipper
                        was = css(self.clipper, self.origin.crossSize)
                        will = client + 'px'

                        if (was != will) {
                            self._setCrossSizes(self.clipper, will)
                        }
                    }
                } else {
                    // do nothing (display: none, or something)
                }

                Array.prototype.unshift.call(arguments, 'resize')
                fire.apply(self, arguments)

                resizeLastFire = getTime()
            }

            if (delay) {
                resizePauseTimer = setTimeout(upd, delay)
            } else {
                upd()
            }
        }

        this.updatePositions = function(force) {
            var newBarSize,
                self = this

            if (self.bar) {
                newBarSize = (track[self.origin.client] - self.barTopLimit) *
                    self.scroller[self.origin.client] / self.scroller[self.origin.scrollSize]

                // Positioning bar
                if (force || parseInt(oldBarSize, 10) != parseInt(newBarSize, 10)) {
                    setBarSize.call(self, newBarSize)
                    oldBarSize = newBarSize
                }

                barPos = relToPos.call(self, self.rpos())

                posBar.call(self, barPos)
            }

            Array.prototype.unshift.call( arguments, 'scroll' )
            fire.apply(self, arguments)
        }

        // onScroll handler
        this.scroll = function() {
            var self = this

            self.updatePositions()

            if (self.scrollingCls) {
                if (!scrollingTimer) {
                    add(self.root, self.scrollingCls)
                }
                clearTimeout(scrollingTimer)
                scrollingTimer = setTimeout(function() {
                    rm(self.root, self.scrollingCls)
                    scrollingTimer = undefined
                }, 300)
            }
        }

        // https://github.com/Diokuz/baron/issues/116
        this.clipperOnScroll = function() {
            // WTF is this line? https://github.com/Diokuz/baron/issues/134
            // if (this.direction == 'h') return

            // assign `initial scroll position` to `clipper.scrollLeft` (0 for ltr, ~20 for rtl)
            if (!this.rtl) {
                this.clipper[this.origin.scrollEdge] = 0
            } else {
                this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize]
            }
        }

        // Flexbox `align-items: stretch` (default) requires to set min-width for vertical
        // and max-height for horizontal scroll. Just set them all.
        // http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-stretch
        this._setCrossSizes = function(node, size) {
            var styles = {}

            styles[this.origin.crossSize] = size
            styles[this.origin.crossMinSize] = size
            styles[this.origin.crossMaxSize] = size

            css(node, styles)
        }

        // Set common css rules
        this._dumbCss = function(on) {
            if (params.cssGuru) return

            var overflow = on ? 'hidden' : null
            var msOverflowStyle = on ? 'none' : null

            css(this.clipper, {
                overflow: overflow,
                msOverflowStyle: msOverflowStyle,
                position: this.position == 'static' ? '' : 'relative'
            })

            var scroll = on ? 'scroll' : null
            var axis = this.direction == 'v' ? 'y' : 'x'
            var scrollerCss = {}

            scrollerCss['overflow-' + axis] = scroll
            scrollerCss['box-sizing'] = 'border-box'
            scrollerCss.margin = '0'
            scrollerCss.border = '0'

            if (this.position == 'absolute') {
                scrollerCss.position = 'absolute'
                scrollerCss.top = '0'

                if (this.direction == 'h') {
                    scrollerCss.left = scrollerCss.right = '0'
                } else {
                    scrollerCss.bottom = '0'
                    scrollerCss.right = this.rtl ? '0' : ''
                    scrollerCss.left = this.rtl ? '' : '0'
                }
            }

            css(this.scroller, scrollerCss)
        }

        // onInit actions
        this._dumbCss(true)

        if (isMacFF) {
            var padding = 'paddingRight'
            var styles = {}
            // getComputedStyle is ie9+, but we here only in f ff
            var paddingWas = scopedWindow.getComputedStyle(this.scroller)[[padding]]

            if (params.direction == 'h') {
                padding = 'paddingBottom'
            } else if (params.rtl) {
                padding = 'paddingLeft'
            }

            var numWas = parseInt(paddingWas, 10)

            if (numWas != numWas) numWas = 0
            styles[padding] = (macmsxffScrollbarSize + numWas) + 'px'
            css(this.scroller, styles)
        }

        return this
    },

    // fires on any update and on init
    update: function(params) {
        if (false) {}

        fire.call(this, 'upd', params) // Update all plugins' params

        this.resize(1)
        this.updatePositions(1)

        return this
    },

    // One instance
    dispose: function() {
        if (false) {}

        manageEvents(this, this.event, 'off')
        manageAttr(this.root, this.params.direction, 'off')
        if (this.params.direction == 'v') {
            this._setCrossSizes(this.scroller, '')
        } else {
            this._setCrossSizes(this.clipper, '')
        }
        this._dumbCss(false)
        this.barOn(true)
        fire.call(this, 'dispose')
        instances[this.params.index] = null
        this.params = null
        this._disposed = true
    },

    on: function(eventName, func, arg) {
        var names = eventName.split(' ')

        for (var i = 0; i < names.length; i++) {
            if (names[i] == 'init') {
                func.call(this, arg)
            } else {
                this.events[names[i]] = this.events[names[i]] || []

                this.events[names[i]].push(function(userArg) {
                    func.call(this, userArg || arg)
                })
            }
        }
    },

    baron: function(params) {
        params.root = this.params.root
        params.scroller = this.params.scroller
        params.direction = (this.params.direction == 'v') ? 'h' : 'v'
        params._chain = true

        return baron(params)
    }
}

// baron.fn.constructor.prototype = baron.fn
baron.prototype.constructor.prototype = baron.prototype

// Use when you need "baron" global var for another purposes
baron.noConflict = function() {
    scopedWindow.baron = _baron // Restoring original value of "baron" global var

    return baron
}

baron.version = '3.0.1'

baron.prototype.autoUpdate = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/autoUpdate.js")(scopedWindow)
baron.prototype.fix = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/fix.js")
baron.prototype.controls = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/controls.js")

module.exports = baron


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/fix.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* Fixable elements plugin for baron */

var log = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/log.js")
var css = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .css */ .iv)
var add = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js")/* .add */ .IH)
var rm = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").rm)

module.exports = function fix(userParams) {
    var elements,
        viewPortSize,
        params = { // Default params
            outside: '',
            inside: '',
            before: '',
            after: '',
            past: '',
            future: '',
            radius: 0,
            minView: 0
        },
        topFixHeights = [], // inline style for element
        topRealHeights = [], // ? something related to negative margins for fixable elements
        headerTops = [], // offset positions when not fixed
        scroller = this.scroller,
        eventManager = this.event,
        self = this

    if (false) {}

    // i - number of fixing element, pos - fix-position in px, flag - 1: top, 2: bottom
    // Invocation only in case when fix-state changed
    function fixElement(i, _pos, flag) {
        var pos = _pos
        var ori = flag == 1 ? 'pos' : 'oppos'

        if (viewPortSize < (params.minView || 0)) { // No headers fixing when no enought space for viewport
            pos = undefined
        }

        // Removing all fixing stuff - we can do this because fixElement triggers only when fixState really changed
        css(elements[i], this.origin.pos, '')
        css(elements[i], this.origin.oppos, '')
        rm(elements[i], params.outside)

        // Fixing if needed
        if (pos !== undefined) {
            pos += 'px'
            css(elements[i], this.origin[ori], pos)
            add(elements[i], params.outside)
        }
    }

    function bubbleWheel(e) {
        try {
            var i = document.createEvent('WheelEvent') // i - for extra byte

            // evt.initWebKitWheelEvent(deltaX, deltaY, window, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey)
            i.initWebKitWheelEvent(e.originalEvent.wheelDeltaX, e.originalEvent.wheelDeltaY)
            scroller.dispatchEvent(i)
            e.preventDefault()
        } catch (ex) {
            //
        }
    }

    function init(_params) {
        var pos

        for (var key in _params) {
            params[key] = _params[key]
        }

        if (params.elements instanceof HTMLElement) {
            elements = [params.elements]
        } else if (typeof params.elements == 'string') {
            elements = this.scroller.querySelectorAll(params.elements)
        } else if (params.elements && params.elements[0] instanceof HTMLElement) {
            elements = params.elements
        }

        if (elements) {
            viewPortSize = this.scroller[this.origin.client]
            for (var i = 0; i < elements.length; i++) {
                // Variable header heights
                pos = {}
                pos[this.origin.size] = elements[i][this.origin.offset] + 'px'
                if (elements[i].parentNode !== this.scroller) {
                    css(elements[i].parentNode, pos)
                }
                pos = {}
                pos[this.origin.crossSize] = elements[i].parentNode[this.origin.crossClient] + 'px'
                css(elements[i], pos)

                // Between fixed headers
                viewPortSize -= elements[i][this.origin.offset]

                headerTops[i] = elements[i].parentNode[this.origin.offsetPos] // No paddings for parentNode

                // Summary elements height above current
                topFixHeights[i] = (topFixHeights[i - 1] || 0) // Not zero because of negative margins
                topRealHeights[i] = (topRealHeights[i - 1] || Math.min(headerTops[i], 0))

                if (elements[i - 1]) {
                    topFixHeights[i] += elements[i - 1][this.origin.offset]
                    topRealHeights[i] += elements[i - 1][this.origin.offset]
                }

                if ( !(i == 0 && headerTops[i] == 0)/* && force */) {
                    this.event(elements[i], 'mousewheel', bubbleWheel, 'off')
                    this.event(elements[i], 'mousewheel', bubbleWheel)
                }
            }

            if (params.limiter && elements[0]) { // Bottom edge of first header as top limit for track
                if (this.track && this.track != this.scroller) {
                    pos = {}
                    pos[this.origin.pos] = elements[0].parentNode[this.origin.offset] + 'px'
                    css(this.track, pos)
                } else {
                    this.barTopLimit = elements[0].parentNode[this.origin.offset]
                }
                // this.barTopLimit = elements[0].parentNode[this.origin.offset]
                this.scroll()
            }

            if (params.limiter === false) { // undefined (in second fix instance) should have no influence on bar limit
                this.barTopLimit = 0
            }
        }

        var event = {
            element: elements,

            handler: function() {
                var parent = this.parentNode,
                    top = parent.offsetTop,
                    num

                // finding num -> elements[num] === this
                for (var j = 0; j < elements.length; j++ ) {
                    if (elements[j] === this) num = j
                }

                var locPos = top - topFixHeights[num]

                if (params.scroll) { // User defined callback
                    params.scroll({
                        x1: self.scroller.scrollTop,
                        x2: locPos
                    })
                } else {
                    self.scroller.scrollTop = locPos
                }
            },

            type: 'click'
        }

        if (params.clickable) {
            this._eventHandlers.push(event) // For auto-dispose
            // eventManager(event.element, event.type, event.handler, 'off')
            for (var j = 0; j < event.element.length; j++) {
                eventManager(event.element[j], event.type, event.handler, 'on')
            }
        }
    }

    this.on('init', init, userParams)

    var fixFlag = [], // 1 - past, 2 - future, 3 - current (not fixed)
        gradFlag = []

    this.on('init scroll', function() {
        var fixState, hTop, gradState
        var i

        if (elements) {
            var change

            // fixFlag update
            for (i = 0; i < elements.length; i++) {
                fixState = 0
                if (headerTops[i] - this.pos() < topRealHeights[i] + params.radius) {
                    // Header trying to go up
                    fixState = 1
                    hTop = topFixHeights[i]
                } else if (headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize - params.radius) {
                    // Header trying to go down
                    fixState = 2
                    // console.log('topFixHeights[i] + viewPortSize + topRealHeights[i]', topFixHeights[i], this.scroller[this.origin.client], topRealHeights[i])
                    hTop = this.scroller[this.origin.client] - elements[i][this.origin.offset] - topFixHeights[i] - viewPortSize
                    // console.log('hTop', hTop, viewPortSize, elements[this.origin.offset], topFixHeights[i])
                    // (topFixHeights[i] + viewPortSize + elements[this.origin.offset]) - this.scroller[this.origin.client]
                } else {
                    // Header in viewport
                    fixState = 3
                    hTop = undefined
                }

                gradState = false
                if (headerTops[i] - this.pos() < topRealHeights[i] || headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize) {
                    gradState = true
                }

                if (fixState != fixFlag[i] || gradState != gradFlag[i]) {
                    fixElement.call(this, i, hTop, fixState)
                    fixFlag[i] = fixState
                    gradFlag[i] = gradState
                    change = true
                }
            }

            // Adding positioning classes (on last top and first bottom header)
            if (change) { // At leats one change in elements flag structure occured
                for (i = 0; i < elements.length; i++) {
                    if (fixFlag[i] == 1 && params.past) {
                        add(elements[i], params.past)
                        rm(elements[i], params.future)
                    }

                    if (fixFlag[i] == 2 && params.future) {
                        add(elements[i], params.future)
                        rm(elements[i], params.past)
                    }

                    if (fixFlag[i] == 3) {
                        rm(elements[i], params.past)
                        rm(elements[i], params.future)
                        add(elements[i], params.inside)
                    }

                    if (fixFlag[i] != fixFlag[i + 1] && fixFlag[i] == 1) {
                        add(elements[i], params.before)
                        rm(elements[i], params.after) // Last top fixed header
                    } else if (fixFlag[i] != fixFlag[i - 1] && fixFlag[i] == 2) {
                        add(elements[i], params.after)
                        rm(elements[i], params.before) // First bottom fixed header
                    } else {
                        rm(elements[i], params.before)
                        rm(elements[i], params.after)
                    }

                    if (params.grad) {
                        if (gradFlag[i]) {
                            add(elements[i], params.grad)
                        } else {
                            rm(elements[i], params.grad)
                        }
                    }
                }
            }
        }
    })

    this.on('resize upd', function(updParams) {
        init.call(this, updParams && updParams.fix)
    })

    return this
}


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/log.js":
/***/ ((module) => {

module.exports = function log(level, msg, more) {
    var func = console[level] || console.log
    var args = [
        'Baron: ' + msg,
        more
    ]

    Function.prototype.apply.call(func, console, args)
}


/***/ }),

/***/ "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js":
/***/ ((module) => {

"use strict";
var __webpack_unused_export__;


// Test via a getter in the options object to see if the passive property is accessed
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false

try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true
        }
    })

    window.addEventListener('test', null, opts)
} catch (e) {
    // pass
}

module.exports.B = function event(elem, _eventNames, handler, mode) {
    var eventNames = _eventNames.split(' ')
    var prefix = mode == 'on' ? 'add' : 'remove'

    eventNames.forEach(function(eventName) {
        var options = false

        if (['scroll', 'touchstart', 'touchmove'].indexOf(eventName) != -1 && supportsPassive) {
            options = { passive: true }
        }

        elem[prefix + 'EventListener'](eventName, handler, options)
    })
}

function each(obj, handler) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            handler(key, obj[key])
        }
    }
}

module.exports.iv = function css(node, key, value) {
    var styles

    if (value === undefined) {
        // Getter mode
        if (typeof key == 'string') {
            return node.style[key]
        }

        styles = key
    } else {
        styles = {}
        styles[key] = value
    }

    each(styles, function(k, val) {
        node.style[k] = val
    })
}

module.exports.IH = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.add(cls)
}

module.exports.rm = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.remove(cls)
}

module.exports.e$ = function has(node, cls) {
    if (!cls) {
        return false
    }

    return node.classList.contains(cls)
}

module.exports.d9 = function clone(_input) {
    var output = {}
    var input = _input || {}

    each(input, function(key, value) {
        output[key] = value
    })

    return output
}

module.exports.qs = function qs(selector, _ctx) {
    if (selector instanceof HTMLElement) {
        return selector
    }

    var ctx = _ctx || document

    return ctx.querySelector(selector)
}

__webpack_unused_export__ = each


/***/ }),

/***/ "./public/vendor/angular-other/angular-strap.js":
/***/ (() => {

/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.5 - 2013-07-21
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('$strap.config', []).value('$strapConfig', {});
angular.module('$strap.filters', ['$strap.config']);
angular.module('$strap.directives', ['$strap.config']);
angular.module('$strap', [
  '$strap.filters',
  '$strap.directives',
  '$strap.config'
]);
'use strict';
angular.module('$strap.directives').factory('$modal', [
  '$rootScope',
  '$compile',
  '$http',
  '$timeout',
  '$q',
  '$templateCache',
  '$strapConfig',
  function ($rootScope, $compile, $http, $timeout, $q, $templateCache, $strapConfig) {
    var ModalFactory = function ModalFactory(config) {
      function Modal(config) {
        var options = angular.extend({ show: true }, $strapConfig.modal, config);
        var scope = options.scope ? options.scope : $rootScope.$new()
        var templateUrl = options.template;
        return $q.when(options.templateHtml || $templateCache.get(templateUrl) || $http.get(templateUrl, { cache: true }).then(function (res) {
          return res.data;
        })).then(function onSuccess(template) {
          var id = scope.$id;
          if (templateUrl) {
            id += templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, '-');
          }
          // grafana change, removed fade
          var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).html(template);
          if (options.modalClass)
            $modal.addClass(options.modalClass);
          $('body').append($modal);
          $timeout(function () {
            $compile($modal)(scope);
          });
          scope.$modal = function (name) {
            $modal.modal(name);
          };
          angular.forEach([
            'show',
            'hide'
          ], function (name) {
            scope[name] = function () {
              $modal.modal(name);
            };
          });
          scope.dismiss = scope.hide;
          angular.forEach([
            'show',
            'shown',
            'hide',
            'hidden'
          ], function (name) {
            $modal.on(name, function (ev) {
              scope.$emit('modal-' + name, ev);
            });
          });
          $modal.on('shown', function (ev) {
            $('input[autofocus], textarea[autofocus]', $modal).first().trigger('focus');
          });
          $modal.on('hidden', function (ev) {
            if (!options.persist)
              scope.$destroy();
          });
          scope.$on('$destroy', function () {
            $modal.remove();
          });
          $modal.modal(options);
          return $modal;
        });
      }
      return new Modal(config);
    };
    return ModalFactory;
  }
])

'use strict';
angular.module('$strap.directives').directive('bsTooltip', [
  '$parse',
  '$compile',
  function ($parse, $compile) {
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs, ctrl) {
        var getter = $parse(attrs.bsTooltip), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTooltip, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        // Grafana change, always hide other tooltips
        if (true) {
          element.on('show', function (ev) {
            $('.tooltip.in').each(function () {
              var $this = $(this), tooltip = $this.data('tooltip');
              if (tooltip && !tooltip.$element.is(element)) {
                $this.tooltip('hide');
              }
            });
          });
        }
        element.tooltip({
          title: function () {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          html: true,
          container: 'body', // Grafana change
        });
        var tooltip = element.data('tooltip');
        tooltip.show = function () {
          var r = $.fn.tooltip.Constructor.prototype.show.apply(this, arguments);
          this.tip().data('tooltip', this);
          return r;
        };
        scope._tooltip = function (event) {
          element.tooltip(event);
        };
        scope.hide = function () {
          element.tooltip('hide');
        };
        scope.show = function () {
          element.tooltip('show');
        };
        scope.dismiss = scope.hide;
      }
    };
  }
]);

'use strict';
angular.module('$strap.directives').directive('bsTypeahead', [
  '$parse',
  function ($parse) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var getter = $parse(attrs.bsTypeahead), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTypeahead, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        element.attr('data-provide', 'typeahead');
        element.typeahead({
          source: function (query) {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          minLength: attrs.minLength || 1,
          items: attrs.items,
          updater: function (value) {
            if (controller) {
              scope.$apply(function () {
                controller.$setViewValue(value);
              });
            }
            scope.$emit('typeahead-updated', value);
            return value;
          }
        });
        var typeahead = element.data('typeahead');
        typeahead.lookup = function (ev) {
          var items;
          this.query = this.$element.val() || '';
          if (this.query.length < this.options.minLength) {
            return this.shown ? this.hide() : this;
          }
          items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
          return items ? this.process(items) : this;
        };
        if (!!attrs.matchAll) {
          typeahead.matcher = function (item) {
            return true;
          };
        }
        if (attrs.minLength === '0') {
          setTimeout(function () {
            element.on('focus', function () {
              element.val().length === 0 && setTimeout(element.typeahead.bind(element, 'lookup'), 200);
            });
          });
        }
      }
    };
  }
]);


/***/ }),

/***/ "./public/vendor/bootstrap/bootstrap.js":
/***/ (() => {

/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;

/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#dropdowns
 * ============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      // grafana backport fix from bootstrap 3
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break

          // extend placements (top)
          case 'topLeft':
            tp = {top: pos.top - actualHeight,  left: pos.left + pos.width / 2 - (actualWidth * .10)};
            break;
          case 'topRight':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - (actualWidth * .90)};
            break;

          // extend placements (right)
          case 'rightTop':
            tp = {top: pos.top + pos.height / 2 - (actualHeight *.10), left: pos.left + pos.width};
            break;
          case 'rightBottom':
            tp = {top: pos.top + pos.height / 2 - (actualHeight * .90), left: pos.left + pos.width};
            break;

          // extend placements (bottom)
          case 'bottomLeft':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - (actualWidth * .10)};
            break;
          case 'bottomRight':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - (actualWidth * .90)};
            break;

          // extend placements (left)
          case 'leftTop':
            tp = {top: pos.top + pos.height / 2 - (actualHeight *.10), left: pos.left - actualWidth};
            break;
          case 'leftBottom':
            tp = {top: pos.top + pos.height / 2 - (actualHeight * .90), left: pos.left - actualWidth};
            break;


        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#tabs
 * ========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
    // CHANGE (rashidkpc) If nothing is selected, use existing value
      var val = this.$menu.find('.active').attr('data-value') || this.$element.val();
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

    , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      if (!query) {
        return item;
      }
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      });
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      // CHANGE (rashidpc) Do not select first element by default
      // items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    },

    destroy: function () {
      this.$element.off().removeData('typeahead');
      this.$menu.off();
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      // grafana change, shift+left parenthesis
      if (e.shiftKey && e.keyCode === 40) {
        return;
      }

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27,57])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup();
      }

      if(e.keyCode === 13 && typeof this.$menu.find('.active').attr('data-value') === 'undefined') {
        // CHANGE (rashidkpc). Enter was hit, nothing was selected from typeahead, submit form
        this.$element.submit();
      } else {
        e.stopPropagation()
        e.preventDefault()
      }

  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#affix
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);


/***/ }),

/***/ "./public/vendor/tagsinput/bootstrap-tagsinput.js":
/***/ (() => {

(function ($) {
  "use strict";

  var defaultOptions = {
    tagClass: function(item) {
      return 'label label-info';
    },
    itemValue: function(item) {
      return item ? item.toString() : item;
    },
    itemText: function(item) {
      return this.itemValue(item);
    },
    freeInput: true,
    maxTags: undefined,
    confirmKeys: [13],
    onTagExists: function(item, $tag) {
      $tag.hide().fadeIn();
    }
  };

  /**
   * Constructor function
   */
  function TagsInput(element, options) {
    this.itemsArray = [];

    this.$element = $(element);
    this.$element.hide();

    this.widthClass = options.widthClass || 'width-9';
    this.isSelect = (element.tagName === 'SELECT');
    this.multiple = (this.isSelect && element.hasAttribute('multiple'));
    this.objectItems = options && options.itemValue;
    this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';

    this.$container = $('<div class="bootstrap-tagsinput"></div>');
    this.$input = $('<input class="gf-form-input ' + this.widthClass + '" type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);

    this.$element.after(this.$container);

    this.build(options);
  }

  TagsInput.prototype = {
    constructor: TagsInput,

    /**
     * Adds the given item as a new tag. Pass true to dontPushVal to prevent
     * updating the elements val()
     */
    add: function(item, dontPushVal) {
      var self = this;

      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
        return;

      // Ignore falsey values, except false
      if (item !== false && !item)
        return;

      // Throw an error when trying to add an object while the itemValue option was not set
      if (typeof item === "object" && !self.objectItems)
        throw("Can't add objects when itemValue option is not set");

      // Ignore strings only containg whitespace
      if (item.toString().match(/^\s*$/))
        return;

      // If SELECT but not multiple, remove current tag
      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
        self.remove(self.itemsArray[0]);

      if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
        var items = item.split(',');
        if (items.length > 1) {
          for (var i = 0; i < items.length; i++) {
            this.add(items[i], true);
          }

          if (!dontPushVal)
            self.pushVal();
          return;
        }
      }

      var itemValue = self.options.itemValue(item),
          itemText = self.options.itemText(item),
          tagClass = self.options.tagClass(item);

      // Ignore items already added
      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
      if (existing) {
        // Invoke onTagExists
        if (self.options.onTagExists) {
          var $existingTag = $(".tag", self.$container).filter(function() { return $(this).data("item") === existing; });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      // register item in internal array and map
      self.itemsArray.push(item);

      // add a tag element
      var $tag = $('<span class="tag ' + htmlEncode(tagClass) + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
      $tag.data('item', item);
      self.findInputWrapper().before($tag);
      $tag.after(' ');

      // add <option /> if item represents a value not present in one of the <select />'s options
      if (self.isSelect && !$('option[value="' + escape(itemValue) + '"]',self.$element)[0]) {
        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
        $option.data('item', item);
        $option.attr('value', itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal)
        self.pushVal();

      // Add class when reached maxTags
      if (self.options.maxTags === self.itemsArray.length)
        self.$container.addClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemAdded', { item: item }));
    },

    /**
     * Removes the given item. Pass true to dontPushVal to prevent updating the
     * elements val()
     */
    remove: function(item, dontPushVal) {
      var self = this;

      if (self.objectItems) {
        if (typeof item === "object")
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } )[0];
        else
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } )[0];
      }

      if (item) {
        $('.tag', self.$container).filter(function() { return $(this).data('item') === item; }).remove();
        $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();
        self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
      }

      if (!dontPushVal)
        self.pushVal();

      // Remove class when reached maxTags
      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemRemoved',  { item: item }));
    },

    /**
     * Removes all items
     */
    removeAll: function() {
      var self = this;

      $('.tag', self.$container).remove();
      $('option', self.$element).remove();

      while(self.itemsArray.length > 0)
        self.itemsArray.pop();

      self.pushVal();

      if (self.options.maxTags && !this.isEnabled())
        this.enable();
    },

    /**
     * Refreshes the tags so they match the text/value of their corresponding
     * item.
     */
    refresh: function() {
      var self = this;
      $('.tag', self.$container).each(function() {
        var $tag = $(this),
            item = $tag.data('item'),
            itemValue = self.options.itemValue(item),
            itemText = self.options.itemText(item),
            tagClass = self.options.tagClass(item);

          // Update tag's class and inner text
          $tag.attr('class', null);
          $tag.addClass('tag ' + htmlEncode(tagClass));
          $tag.contents().filter(function() {
            return this.nodeType == 3;
          })[0].nodeValue = htmlEncode(itemText);

          if (self.isSelect) {
            var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });
            option.attr('value', itemValue);
          }
      });
    },

    /**
     * Returns the items added as tags
     */
    items: function() {
      return this.itemsArray;
    },

    /**
     * Assembly value by retrieving the value of each item, and set it on the
     * element.
     */
    pushVal: function() {
      var self = this,
          val = $.map(self.items(), function(item) {
            return self.options.itemValue(item).toString();
          });

      self.$element.val(val, true).trigger('change');
    },

    /**
     * Initializes the tags input behaviour on the element
     */
    build: function(options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      var typeahead = self.options.typeahead || {};

      // When itemValue is set, freeInput should always be false
      if (self.objectItems)
        self.options.freeInput = false;

      makeOptionItemFunction(self.options, 'itemValue');
      makeOptionItemFunction(self.options, 'itemText');
      makeOptionItemFunction(self.options, 'tagClass');

      // for backwards compatibility, self.options.source is deprecated
      if (self.options.source)
        typeahead.source = self.options.source;

      if (typeahead.source && $.fn.typeahead) {
        makeOptionFunction(typeahead, 'source');

        self.$input.typeahead({
          source: function (query, process) {
            function processItems(items) {
              var texts = [];

              for (var i = 0; i < items.length; i++) {
                var text = self.options.itemText(items[i]);
                map[text] = items[i];
                texts.push(text);
              }
              process(texts);
            }

            this.map = {};
            var map = this.map,
                data = typeahead.source(query);

            if ($.isFunction(data.success)) {
              // support for Angular promises
              data.success(processItems);
            } else {
              // support for functions and jquery promises
              $.when(data)
               .then(processItems);
            }
          },
          updater: function (text) {
            self.add(this.map[text]);
          },
          matcher: function (text) {
            return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
          },
          sorter: function (texts) {
            return texts.sort();
          },
          highlighter: function (text) {
            var regex = new RegExp( '(' + this.query + ')', 'gi' );
            return text.replace( regex, "<strong>$1</strong>" );
          }
        });
      }

      self.$container.on('click', $.proxy(function(event) {
        self.$input.focus();
      }, self));

      self.$container.on('blur', 'input', $.proxy(function(event) {
        var $input = $(event.target);
        self.add($input.val());
        $input.val('');
        event.preventDefault();
      }, self));

      self.$container.on('keydown', 'input', $.proxy(function(event) {
        var $input = $(event.target),
            $inputWrapper = self.findInputWrapper();

        switch (event.which) {
          // BACKSPACE
          case 8:
            if (doGetCaretPosition($input[0]) === 0) {
              var prev = $inputWrapper.prev();
              if (prev) {
                self.remove(prev.data('item'));
              }
            }
            break;

          // DELETE
          case 46:
            if (doGetCaretPosition($input[0]) === 0) {
              var next = $inputWrapper.next();
              if (next) {
                self.remove(next.data('item'));
              }
            }
            break;

          // LEFT ARROW
          case 37:
            // Try to move the input before the previous tag
            var $prevTag = $inputWrapper.prev();
            if ($input.val().length === 0 && $prevTag[0]) {
              $prevTag.before($inputWrapper);
              $input.focus();
            }
            break;
          // RIGHT ARROW
          case 39:
            // Try to move the input after the next tag
            var $nextTag = $inputWrapper.next();
            if ($input.val().length === 0 && $nextTag[0]) {
              $nextTag.after($inputWrapper);
              $input.focus();
            }
            break;
         default:
            // When key corresponds one of the confirmKeys, add current input
            // as a new tag
            if (self.options.freeInput && $.inArray(event.which, self.options.confirmKeys) >= 0) {
              self.add($input.val());
              $input.val('');
              event.preventDefault();
            }
        }

        // Reset internal input's size
        $input.attr('size', Math.max(this.inputSize, $input.val().length));
      }, self));

      // Remove icon clicked
      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
        self.remove($(event.target).closest('.tag').data('item'));
        // Grafana mod, if tags input used in popover the click event will bubble up and hide popover
        event.stopPropagation();
      }, self));

      // Only add existing value as tags when using strings as tags
      if (self.options.itemValue === defaultOptions.itemValue) {
        if (self.$element[0].tagName === 'INPUT') {
            self.add(self.$element.val());
        } else {
          $('option', self.$element).each(function() {
            self.add($(this).attr('value'), true);
          });
        }
      }
    },

    /**
     * Removes all tagsinput behaviour and unregsiter all event handlers
     */
    destroy: function() {
      var self = this;

      // Unbind events
      self.$container.off('keypress', 'input');
      self.$container.off('click', '[role=remove]');

      self.$container.remove();
      self.$element.removeData('tagsinput');
      self.$element.show();
    },

    /**
     * Sets focus on the tagsinput
     */
    focus: function() {
      this.$input.focus();
    },

    /**
     * Returns the internal input element
     */
    input: function() {
      return this.$input;
    },

    /**
     * Returns the element which is wrapped around the internal input. This
     * is normally the $container, but typeahead.js moves the $input element.
     */
    findInputWrapper: function() {
      var elt = this.$input[0],
          container = this.$container[0];
      while(elt && elt.parentNode !== container)
        elt = elt.parentNode;

      return $(elt);
    }
  };

  /**
   * Register JQuery plugin
   */
  $.fn.tagsinput = function(arg1, arg2) {
    var results = [];

    this.each(function() {
      var tagsinput = $(this).data('tagsinput');

      // Initialize a new tags input
      if (!tagsinput) {
        tagsinput = new TagsInput(this, arg1);
        $(this).data('tagsinput', tagsinput);
        results.push(tagsinput);

        if (this.tagName === 'SELECT') {
          $('option', $(this)).attr('selected', 'selected');
        }

        // Init tags from $(this).val()
        $(this).val($(this).val());
      } else {
        // Invoke function on existing tags input
        var retVal = tagsinput[arg1](arg2);
        if (retVal !== undefined)
          results.push(retVal);
      }
    });

    if ( typeof arg1 == 'string') {
      // Return the results from the invoked function calls
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;

  /**
   * Most options support both a string or number as well as a function as
   * option value. This function makes sure that the option with the given
   * key in the given options is wrapped in a function
   */
  function makeOptionItemFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var propertyName = options[key];
      options[key] = function(item) { return item[propertyName]; };
    }
  }
  function makeOptionFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var value = options[key];
      options[key] = function() { return value; };
    }
  }
  /**
   * HtmlEncodes the given value
   */
  var htmlEncodeContainer = $('<div />');
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return '';
    }
  }

  /**
   * Returns the position of the caret in the given input field
   * http://flightschool.acylt.com/devnotes/caret-position-woes/
   */
  function doGetCaretPosition(oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus ();
      var oSel = document.selection.createRange();
      oSel.moveStart ('character', -oField.value.length);
      iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == '0') {
      iCaretPos = oField.selectionStart;
    }
    return (iCaretPos);
  }

  /**
   * Initialize tagsinput behaviour on inputs and selects which have
   * data-role=tagsinput
   */
  $(function() {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
  });
})(window.jQuery);


/***/ })

}]);