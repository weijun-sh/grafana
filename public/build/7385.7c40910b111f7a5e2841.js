(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7385],{

 "./public/app/angular/AngularLocationWrapper.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "O": () => ( AngularLocationWrapper)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


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

 }),

 "./public/app/angular/core_module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

 "./public/app/angular/index.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "AngularApp": () => ( AngularApp),
  "coreModule": () => ( core_module.hF)
});

var core = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/core.js");
var core_default = __webpack_require__.n(core);
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var core_module = __webpack_require__("./public/app/angular/core_module.ts");
var events = __webpack_require__("./public/app/types/events.ts");
;






const panelTemplate = `
  <ng-transclude class="panel-height-helper"></ng-transclude>
`;
core_module.hF.directive('grafanaPanel', ["$rootScope", "$document", "$timeout", ($rootScope, $document, $timeout) => {
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
      const subs = new Subscription.w0();
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

      updateDimensionsFromParentScope(); 

      subs.add(panel.events.subscribe(grafana_runtime_src.RefreshEvent, () => {
        updateDimensionsFromParentScope();
        ctrl.events.emit('refresh');
      }));
      subs.add(panel.events.subscribe(events._z, event => {
        var _event$payload;

        if ((_event$payload = event.payload) !== null && _event$payload !== void 0 && _event$payload.fromAngular) {
          return;
        }

        updateDimensionsFromParentScope();
        $timeout(() => {
          resizeScrollableContent();
          ctrl.events.emit('render');
        });
      }));
      subs.add(ctrl.events.subscribe(events._z, event => {
        if (event.payload) {
          event.payload.fromAngular = true;
          panel.events.publish(event);
        }
      }));
      scope.$on('$destroy', () => {
        elem.off(); 

        subs.unsubscribe(); 

        ctrl.events.emit(src.PanelEvents.panelTeardown);
        ctrl.events.removeAllListeners();

        if (panelScrollbar) {
          panelScrollbar.dispose();
        }
      });
      panel.events.publish(events.GT);
    }
  };
}]);
var query_ctrl = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");
var angular = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
var angular_default = __webpack_require__.n(angular);
;
panelEditorTab.$inject = ["dynamicDirectiveSrv"];

const directiveModule = angular_default().module('grafana.directives');
const directiveCache = {};

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
;
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
      this.panelCtrl.toggleEditorMode = this.queryCtrl.toggleEditorMode.bind(this.queryCtrl);
    }

    if (this.queryCtrl.getCollapsedText) {
      this.panelCtrl.getCollapsedText = this.queryCtrl.getCollapsedText.bind(this.queryCtrl);
    }
  }

}
QueryRowCtrl.$inject = [];

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

core_module.hF.directive('queryEditorRow', queryEditorRowDirective);
;




var partials = __webpack_require__("./public/app/angular/partials.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var lodash_default = __webpack_require__.n(lodash);
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
;





core_module.ZP.filter('stringSort', () => {
  return input => {
    return input.sort();
  };
});
core_module.ZP.filter('slice', () => {
  return (arr, start, end) => {
    if (!(0,lodash.isUndefined)(arr)) {
      return arr.slice(start, end);
    }

    return arr;
  };
});
core_module.ZP.filter('stringify', () => {
  return arr => {
    if ((0,lodash.isObject)(arr) && !(0,lodash.isArray)(arr)) {
      return angular_default().toJson(arr);
    } else {
      return (0,lodash.isNull)(arr) ? null : arr.toString();
    }
  };
});
core_module.ZP.filter('moment', () => {
  return (date, mode) => {
    switch (mode) {
      case 'ago':
        return (0,src.dateTime)(date).fromNow();
    }

    return (0,src.dateTime)(date).fromNow();
  };
});

function interpolateTemplateVars() {
  let templateSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,template_srv.J)();

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

core_module.ZP.filter('interpolateTemplateVars', interpolateTemplateVars);
 const filters = ({});
;

class AlertSrv {
  constructor() {}

  set() {
    console.warn('old deprecated alert srv being used');
  }

}
AlertSrv.$inject = [];
core_module.ZP.service('alertSrv', AlertSrv);
;



class DynamicDirectiveSrv {
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
      core_module.ZP.directive(attrs.$normalize(directiveInfo.name), directiveInfo.fn);
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
core_module.ZP.service('dynamicDirectiveSrv', DynamicDirectiveSrv);
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var react_dom = __webpack_require__("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
;




function getReactComponent(name, $injector) {
  if (angular_default().isFunction(name)) {
    return name;
  } 


  if (!name) {
    throw new Error('ReactComponent name attribute must be specified');
  } 


  let reactComponent;

  try {
    reactComponent = $injector.get(name);
  } catch (e) {}

  if (!reactComponent) {
    try {
      reactComponent = name.split('.').reduce((current, namePart) => {
        return current[namePart];
      }, window);
    } catch (e) {}
  }

  if (!reactComponent) {
    throw Error('Cannot find react component ' + name);
  }

  return reactComponent;
} 


function applied(fn, scope) {
  if (fn.wrappedInApply) {
    return fn;
  } 


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


function applyFunctions(obj, scope, propsConfig) {
  return Object.keys(obj || {}).reduce((prev, key) => {
    const value = obj[key];
    const config = (propsConfig || {})[key] || {};

    prev[key] = angular_default().isFunction(value) && config.wrapApply !== false ? applied(value, scope) : value;
    return prev;
  }, {});
}


function watchProps(watchDepth, scope, watchExpressions, listener) {
  const supportsWatchCollection = angular_default().isFunction(scope.$watchCollection);
  const supportsWatchGroup = angular_default().isFunction(scope.$watchGroup);
  const watchGroupExpressions = [];

  for (const expr of watchExpressions) {
    const actualExpr = getPropExpression(expr);
    const exprWatchDepth = getPropWatchDepth(watchDepth, expr); 

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
} 


function renderComponent(component, props, scope, elem) {
  scope.$evalAsync(() => {
    react_dom.render( react.createElement(component, props), elem[0]);
  });
} 


function getPropName(prop) {
  return Array.isArray(prop) ? prop[0] : prop;
} 


function getPropConfig(prop) {
  return Array.isArray(prop) ? prop[1] : {};
} 


function getPropExpression(prop) {
  return Array.isArray(prop) ? prop[0] : prop;
}


function findAttribute(attrs, propName) {
  const index = Object.keys(attrs).find(attr => {
    return attr.toLowerCase() === propName.toLowerCase() || (0,lodash.kebabCase)(attr) === (0,lodash.kebabCase)(propName);
  }); 

  return attrs[index];
} 


function getPropWatchDepth(defaultWatch, prop) {
  const customWatchDepth = Array.isArray(prop) && angular_default().isObject(prop[1]) && prop[1].watchDepth;
  return customWatchDepth || defaultWatch;
} 


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
      }; 


      attrs.props ? watchProps(attrs.watchDepth, scope, [attrs.props], renderMyComponent) : renderMyComponent(); 

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
}; 


const reactDirective = $injector => {
  return (reactComponentName, props, conf, injectableProps) => {
    const directive = {
      restrict: 'E',
      replace: true,
      link: function (scope, elem, attrs) {
        const reactComponent = getReactComponent(reactComponentName, $injector); 

        props = props || Object.keys(reactComponent.propTypes || {}); 

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
        }; 


        const propExpressions = props.map(prop => {
          return Array.isArray(prop) ? [findAttribute(attrs, prop[0]), getPropConfig(prop)] : findAttribute(attrs, prop);
        }); 

        props.length ? watchProps(attrs.watchDepth, scope, propExpressions, renderMyComponent) : renderMyComponent(); 

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
;
uiSegmentSrv.$inject = ["$sce", "templateSrv"];

function segment_srv_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
      } 


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
core_module.ZP.service('uiSegmentSrv', uiSegmentSrv);
var js_drop = __webpack_require__("./.yarn/cache/tether-drop-https-3382d2649f-a10a7337d5.zip/node_modules/tether-drop/dist/js/drop.js");
var drop_default = __webpack_require__.n(js_drop);
;
popoverSrv.$inject = ["$compile", "$rootScope", "$timeout"];




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
    }, 100); 

    return () => {
      if (drop) {
        drop.close();
      }
    };
  };
}

core_module.ZP.service('popoverSrv', popoverSrv);
;
function timer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Timer {
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
core_module.ZP.service('timer', Timer);
;



class AngularLoader {
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
core_module.ZP.service('angularLoader', AngularLoader);
var jquery_exposed = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
var jquery_exposed_default = __webpack_require__.n(jquery_exposed);
;



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
;
dropdownTypeahead2.$inject = ["$compile"];
dropdownTypeahead.$inject = ["$compile"];




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
        $button.focus(); 

        setTimeout(() => {
          elem.removeClass('open');
        }, 200);
      });
      $compile(elem.contents())($scope);
    }
  };
}

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
core_module.ZP.directive('dropdownTypeahead', dropdownTypeahead);
core_module.ZP.directive('dropdownTypeahead2', dropdownTypeahead2);
;
autofillEventFix.$inject = ["$compile"];


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
      }; 


      input.addEventListener('animationstart', onAnimationStart); 

      $scope.$on('$destroy', () => {
        input.removeEventListener('animationstart', onAnimationStart); 
      });
    }
  };
}
core_module.ZP.directive('autofillEventFix', autofillEventFix);
;
metricSegmentModel.$inject = ["uiSegmentSrv"];
metricSegment.$inject = ["$compile", "$sce", "templateSrv"];




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
            }); 

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
          } 


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
core_module.ZP.directive('metricSegment', metricSegment);
core_module.ZP.directive('metricSegmentModel', metricSegmentModel);
;
gfDropdown.$inject = ["$parse", "$compile", "$timeout"];
editorCheckbox.$inject = ["$compile", "$interpolate"];
editorOptBool.$inject = ["$compile"];
compile.$inject = ["$compile"];
tip.$inject = ["$compile"];



function tip($compile) {
  return {
    restrict: 'E',
    link: (scope, elem, attrs) => {
      let _t = '<i class="grafana-tip fa fa-' + (attrs.icon || 'question-circle') + '" bs-tooltip="\'' + 
      elem.text().replace(/[\'\"\\{}<>&]/g, m => '&amp;#' + m.charCodeAt(0) + ';') + '\'"></i>';

      elem.replaceWith($compile(angular_default().element(_t))(scope));
    }
  };
}


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

core_module.ZP.directive('tip', tip);
core_module.ZP.directive('compile', compile);
core_module.ZP.directive('watchChange', watchChange);
core_module.ZP.directive('editorOptBool', editorOptBool);
core_module.ZP.directive('editorCheckbox', editorCheckbox);
core_module.ZP.directive('gfDropdown', gfDropdown);
;



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
          return true; 
        }

        const info = src.rangeUtil.describeTextRange(viewValue);
        return info.invalid !== true;
      };
    }
  };
}

core_module.ZP.directive('ngModelOnblur', ngModelOnBlur);
core_module.ZP.directive('emptyToNull', emptyToNull);
core_module.ZP.directive('validTimeSpan', validTimeSpan);
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var bootstrap_tagsinput = __webpack_require__("./public/vendor/tagsinput/bootstrap-tagsinput.js");
;






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

core_module.ZP.directive('tagColorFromName', tagColorFromName);
core_module.ZP.directive('bootstrapTagsinput', bootstrapTagsinput);
;
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

core_module.ZP.directive('rebuildOnChange', rebuildOnChange);
;

core_module.ZP.directive('giveFocus', () => {
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
 const give_focus = ({});
;
function diff_view_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DeltaCtrl {
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
core_module.ZP.directive('diffDelta', delta); 

class LinkJSONCtrl {
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
core_module.ZP.directive('diffLinkJson', linkJson);
;


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
core_module.ZP.directive('arrayJoin', arrayJoin);
var ConfigProvider = __webpack_require__("./public/app/core/utils/ConfigProvider.tsx");
;


function react2AngularDirective(name, component, options) {
  core_module.ZP.directive(name, ['reactDirective', reactDirective => {
    return reactDirective((0,ConfigProvider.ER)(component), options);
  }]);
}
var FolderPicker = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
var TimePickerSettings = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/TimePickerSettings.tsx");
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
var components = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _AnnotationsHelp;

function AnnotationQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const {
  Input
} = grafana_ui_src.LegacyForms;
const DefaultTarget = {
  editorMode: types.je.Visual,
  projectName: '',
  projects: [],
  metricType: '',
  filters: [],
  metricKind: types.lH.GAUGE,
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
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(components.IK, {
        refId: this.props.refId,
        templateVariableOptions: variableOptions,
        datasource: datasource,
        projectName: projectName || datasource.getDefaultProject(),
        onChange: value => this.onChange('projectName', value)
      }), (0,jsx_runtime.jsx)(components.C3, {
        refId: this.props.refId,
        projectName: projectName,
        metricType: metricType,
        templateSrv: datasource.templateSrv,
        datasource: datasource,
        templateVariableOptions: variableOptions,
        onChange: metric => this.onMetricTypeChange(metric),
        children: metric => (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: (0,jsx_runtime.jsx)(components.pj, {
            labels: labels,
            filters: filters,
            onChange: value => this.onChange('filters', value),
            variableOptionGroup: variableOptionGroup
          })
        })
      }), (0,jsx_runtime.jsx)(components.x5, {
        label: "Title",
        children: (0,jsx_runtime.jsx)(Input, {
          type: "text",
          className: "gf-form-input width-20",
          value: title,
          onChange: e => this.onChange('title', e.target.value)
        })
      }), (0,jsx_runtime.jsx)(components.x5, {
        label: "Text",
        children: (0,jsx_runtime.jsx)(Input, {
          type: "text",
          className: "gf-form-input width-20",
          value: text,
          onChange: e => this.onChange('text', e.target.value)
        })
      }), _AnnotationsHelp || (_AnnotationsHelp = (0,jsx_runtime.jsx)(components.zI, {}))]
    });
  }

}
var QueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var Footer = __webpack_require__("./public/app/core/components/Footer/Footer.tsx");
var PageHeader = __webpack_require__("./public/app/core/components/PageHeader/PageHeader.tsx");
;




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
  return (0,jsx_runtime.jsx)(Select, {
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
var TagFilter = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
var HelpModal = __webpack_require__("./public/app/core/components/help/HelpModal.tsx");
var search = __webpack_require__("./public/app/features/search/index.ts");
var LokiOptionFields = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx");
var LokiQueryField = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
;




const LokiAnnotationsQueryEditor = (0,react.memo)(function LokiAnnotationQueryEditor(props) {
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
  return (0,jsx_runtime.jsx)("div", {
    className: "gf-form-group",
    children: (0,jsx_runtime.jsx)(LokiQueryField.n, {
      datasource: datasource,
      query: queryWithRefId,
      onChange: onChange,
      onRunQuery: () => {},
      onBlur: () => {},
      history: [],
      ExtraFieldElement: (0,jsx_runtime.jsx)(LokiOptionFields.JX, {
        lineLimitValue: (queryWithRefId === null || queryWithRefId === void 0 ? void 0 : (_queryWithRefId$maxLi = queryWithRefId.maxLines) === null || _queryWithRefId$maxLi === void 0 ? void 0 : _queryWithRefId$maxLi.toString()) || '',
        resolution: queryWithRefId.resolution || 1,
        query: queryWithRefId,
        onRunQuery: () => {},
        onChange: onChange
      })
    })
  });
});
;














const {
  SecretFormField
} = grafana_ui_src.LegacyForms;
function registerAngularDirectives() {
  react2AngularDirective('footer', Footer.$_, []);
  react2AngularDirective('icon', grafana_ui_src.Icon, ['name', 'size', 'type', ['onClick', {
    watchDepth: 'reference',
    wrapApply: true
  }]]);
  react2AngularDirective('spinner', grafana_ui_src.Spinner, ['inline']);
  react2AngularDirective('helpModal', HelpModal.B, []);
  react2AngularDirective('pageHeader', PageHeader.Z, ['model', 'noTabs']);
  react2AngularDirective('emptyListCta', EmptyListCTA.Z, ['title', 'buttonIcon', 'buttonLink', 'buttonTitle', ['onClick', {
    watchDepth: 'reference',
    wrapApply: true
  }], 'proTip', 'proTipLink', 'proTipLinkTitle', 'proTipTarget', 'infoBox', 'infoBoxTitle']); 

  react2AngularDirective('searchField', search.Um, ['query', 'autoFocus', ['onChange', {
    watchDepth: 'reference'
  }], ['onKeyDown', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('searchResults', search.sZ, ['results', 'editable', 'selectors', ['onSelectionChanged', {
    watchDepth: 'reference'
  }], ['onTagSelected', {
    watchDepth: 'reference'
  }], ['onFolderExpanding', {
    watchDepth: 'reference'
  }], ['onToggleSelection', {
    watchDepth: 'reference'
  }]]);
  react2AngularDirective('searchFilters', search.fC, ['allChecked', 'canMove', 'canDelete', 'tagFilterOptions', 'selectedStarredFilter', 'selectedTagFilter', ['onSelectAllChanged', {
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
  react2AngularDirective('tagFilter', TagFilter.D, ['tags', ['onChange', {
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
  react2AngularDirective('cloudMonitoringQueryEditor', QueryEditor.W, ['target', 'onQueryChange', 'onExecuteQuery', ['events', {
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
  }]]); 

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
  react2AngularDirective('folderPicker', FolderPicker.E, ['labelClass', 'rootName', 'enableCreateNew', 'enableReset', 'initialTitle', 'initialFolderId', 'dashboardId', 'onCreateFolder', ['enterFolderCreation', {
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
  react2AngularDirective('timePickerSettings', TimePickerSettings.P, ['renderCount', 'refreshIntervals', 'timePickerHidden', 'nowDelay', 'timezone', ['onTimeZoneChange', {
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
var promiseToDigest = __webpack_require__("./public/app/angular/promiseToDigest.ts");
;
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
        (0,promiseToDigest.E)($scope)($scope.handleEvent({
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
core_module.ZP.directive('queryPartEditor', queryPartEditorDirective);
;
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
    this.debounce = false; 

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
    }); 

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
    return (0,promiseToDigest.E)(this.$scope)(Promise.resolve(this.getOptions({
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
      this.optionCache = options; 

      const optionTexts = (0,lodash.map)(options, op => {
        return (0,lodash.escape)(op.text);
      }); 

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
      } 


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
core_module.ZP.directive('gfFormDropdown', formDropdownDirective);
;



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
core_module.ZP.directive('grafanaScrollbar', geminiScrollbar);
;


core_module.ZP.directive('jsonTree', [function jsonTreeDirective() {
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
;
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
core_module.ZP.directive('gfFormSwitch', switchDirective);
core_module.ZP.directive('gfFormCheckbox', checkboxDirective);
;



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
        }; 

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
core_module.ZP.directive('infoPopover', infoPopover);
;


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
core_module.ZP.directive('spectrumPicker', spectrumPicker);
var config = __webpack_require__("./public/app/core/config.ts");
;


const DEFAULT_THEME_DARK = 'ace/theme/grafana-dark';
const DEFAULT_THEME_LIGHT = 'ace/theme/textmate';
const DEFAULT_MODE = 'text';
const DEFAULT_MAX_LINES = 10;
const DEFAULT_TAB_SIZE = 2;
const DEFAULT_BEHAVIORS = true;
const DEFAULT_SNIPPETS = true;
const editorTemplate = `<div></div>`;

async function code_editor_link(scope, elem, attrs) {
  const langMode = attrs.mode || DEFAULT_MODE;
  const maxLines = attrs.maxLines || DEFAULT_MAX_LINES;
  const showGutter = attrs.showGutter !== undefined;
  const tabSize = attrs.tabSize || DEFAULT_TAB_SIZE;
  const behavioursEnabled = attrs.behavioursEnabled ? attrs.behavioursEnabled === 'true' : DEFAULT_BEHAVIORS;
  const snippetsEnabled = attrs.snippetsEnabled ? attrs.snippetsEnabled === 'true' : DEFAULT_SNIPPETS; 

  const aceElem = elem.get(0);
  const {
    default: ace
  } = await __webpack_require__.e( 5673).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/index.js", 23));
  await __webpack_require__.e( 557).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/ext/language_tools.js", 23));
  await __webpack_require__.e( 7946).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/theme/textmate.js", 23));
  await __webpack_require__.e( 6098).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/text.js", 23));
  await __webpack_require__.e( 7914).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/text.js", 23));
  await __webpack_require__.e( 4934).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/sql.js", 23));
  await __webpack_require__.e( 5808).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/sql.js", 23));
  await __webpack_require__.e( 1669).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/sqlserver.js", 23));
  await __webpack_require__.e( 8520).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/sqlserver.js", 23));
  await __webpack_require__.e( 3154).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/markdown.js", 23));
  await __webpack_require__.e( 9720).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/markdown.js", 23));
  await __webpack_require__.e( 1026).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/json.js", 23));
  await __webpack_require__.e( 9057).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/snippets/json.js", 23)); 

  await __webpack_require__.e( 7428).then(__webpack_require__.t.bind(__webpack_require__, "./public/app/angular/components/code_editor/theme-grafana-dark.js", 23));
  const codeEditor = ace.edit(aceElem);
  const editorSession = codeEditor.getSession();
  const editorOptions = {
    maxLines: maxLines,
    showGutter: showGutter,
    tabSize: tabSize,
    behavioursEnabled: behavioursEnabled,
    highlightActiveLine: false,
    showPrintMargin: false,
    autoScrollEditorIntoView: true 

  }; 

  codeEditor.setOptions(editorOptions); 

  codeEditor.$blockScrolling = Infinity; 

  codeEditor.renderer.setScrollMargin(10, 10);
  codeEditor.renderer.setPadding(10);
  setThemeMode();
  setLangMode(langMode);
  setEditorContent(scope.content); 

  elem.addClass('gf-code-editor');
  const textarea = elem.find('textarea');
  textarea.addClass('gf-form-input'); 

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
  } 


  editorSession.on('change', e => {
    scope.$apply(() => {
      const newValue = codeEditor.getValue();
      scope.content = newValue;
    });
  }); 

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
  }); 

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
      const anyEditor = codeEditor;
      anyEditor.completers = anyEditor.completers.slice();
      anyEditor.completers.push(scope.getCompleter());
    }

    const aceModeName = `ace/mode/${lang}`;
    editorSession.setMode(aceModeName);
  }

  function setThemeMode() {
    let theme = DEFAULT_THEME_DARK;

    if (config.ZP.bootData.user.lightTheme) {
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
core_module.ZP.directive('codeEditor', codeEditorDirective);
;
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
              }); 

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
core_module.ZP.directive('sqlPartEditor', sqlPartEditorDirective);
;

core_module.hF.directive('datasourceHttpSettings', () => {
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
        $scope.showAccessOption = $scope.noDirectAccess !== 'true';

        $scope.onChange = datasourceSetting => {
          $scope.current = datasourceSetting;
        };
      }
    }
  };
});
;

core_module.hF.directive('datasourceTlsAuthSettings', () => {
  return {
    scope: {
      current: '='
    },
    templateUrl: 'public/app/angular/partials/tls_auth_settings.html'
  };
});
var importPanelPlugin = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
var plugin_loader = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
;
pluginDirectiveLoader.$inject = ["$compile", "$http", "$templateCache", "$location"];








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
    const panelInfo = config.ZP.panels[scope.panel.type];
    return (0,importPanelPlugin.U)(panelInfo.id).then(panelPlugin => {
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

      case 'annotations-query-ctrl':
        {
          const baseUrl = scope.ctrl.currentDatasource.meta.baseUrl;
          const pluginId = scope.ctrl.currentDatasource.meta.id;
          return (0,plugin_loader.nL)(scope.ctrl.currentDatasource.meta).then(dsPlugin => {
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

      case 'datasource-config-ctrl':
        {
          const dsMeta = scope.ctrl.datasourceMeta;
          const angularUrl = $location.url();
          return (0,plugin_loader.nL)(dsMeta).then(dsPlugin => {
            scope.$watch('ctrl.current', () => {
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

      case 'app-config-ctrl':
        {
          const model = scope.ctrl.model;
          return (0,plugin_loader.Av)(model).then(appPlugin => {
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
    elem.empty(); 

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
      core_module.ZP.directive(directiveName, directiveFn);
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

core_module.ZP.directive('pluginComponent', pluginDirectiveLoader);
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var live = __webpack_require__("./public/app/features/live/index.ts");
var app_types = __webpack_require__("./public/app/types/index.ts");
;









class GrafanaCtrl {
  constructor($scope, utilSrv, $rootScope, contextSrv, angularLoader, $injector) {
    (0,grafana_runtime_src.setAngularLoader)(angularLoader);
    (0,grafana_runtime_src.setLegacyAngularInjector)($injector);
    (0,grafana_runtime_src.setAppEvents)(app_events.Z);
    (0,live.Bp)();

    $scope.init = () => {
      $scope.contextSrv = contextSrv;
      $scope.appSubUrl = config.ZP.appSubUrl;
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
        app_events.Z.emit(event, payload);
      } else {
        $rootScope.$emit(event.name, payload);
        app_events.Z.emit(event, payload);
      }
    };

    $scope.init();
  }

}
GrafanaCtrl.$inject = ["$scope", "utilSrv", "$rootScope", "contextSrv", "angularLoader", "$injector"];

function grafanaAppDirective() {
  return {
    restrict: 'E',
    controller: GrafanaCtrl,
    link: (scope, elem) => {
      const body = jquery_exposed_default()('body'); 

      (jquery_exposed_default()).fn.modal.Constructor.prototype.enforceFocus = () => {};

      app_events.Z.on(app_types.RW.Ai, () => {
        body.toggleClass('sidemenu-hidden');
      }); 

      let lastActivity = new Date().getTime();
      let activeUser = true;
      const inActiveTimeLimit = 60 * 5000;

      function checkForInActiveUser() {
        if (!activeUser) {
          return;
        } 


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
      } 


      body.mousemove(userActivityDetected);
      body.keydown(userActivityDetected); 

      document.addEventListener('wheel', userActivityDetected, {
        capture: true,
        passive: true
      }); 

      document.addEventListener('visibilitychange', userActivityDetected); 

      setInterval(checkForInActiveUser, 2000); 

      body.click(evt => {
        const target = jquery_exposed_default()(evt.target);

        if (target.parents().length === 0) {
          return;
        } 


        body.find('.dropdown-menu-open').removeClass('dropdown-menu-open'); 

        const clickAutoHide = target.closest('[data-click-hide]');

        if (clickAutoHide.length) {
          const clickAutoHideParent = clickAutoHide.parent();
          clickAutoHide.detach();
          setTimeout(() => {
            clickAutoHideParent.append(clickAutoHide);
          }, 100);
        } 


        const popover = elem.find('.popover');

        if (popover.length > 0 && target.parents('.graph-legend').length === 0) {
          popover.hide();
        }
      });
    }
  };
}
core_module.ZP.directive('grafanaApp', grafanaAppDirective);
var angular_route = __webpack_require__("./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/index.js");
var angular_sanitize = __webpack_require__("./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/index.js");
var bindonce = __webpack_require__("./.yarn/cache/angular-bindonce-npm-0.3.1-63597abd34-6a9adeb527.zip/node_modules/angular-bindonce/bindonce.js");
var bootstrap = __webpack_require__("./public/vendor/bootstrap/bootstrap.js");
var angular_strap = __webpack_require__("./public/vendor/angular-other/angular-strap.js");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var DashboardLoaderSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
var sdk = __webpack_require__("./public/app/plugins/sdk.ts");
;
function RouteParamsProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class RouteParamsProvider {
  constructor() {
    RouteParamsProvider_defineProperty(this, "$get", () => {
    });

    (0,grafana_runtime_src.navigationLogger)('Patch angular', false, 'RouteParamsProvider');
  }

}
;

class RouteProvider {
  constructor() {
    (0,grafana_runtime_src.navigationLogger)('Patch angular', false, 'RouteProvider');
  }

  $get() {
    return this;
  }

}
var AngularLocationWrapper = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
;




const tamperAngularLocation = () => {
  core_module.hF.config(['$provide', $provide => {
    $provide.decorator('$browser', ['$delegate', $delegate => {
      $delegate.onUrlChange = () => {};

      $delegate.url = () => '';

      return $delegate;
    }]);
  }]);
}; 


const interceptAngularLocation = () => {
  core_module.hF.config(['$provide', $provide => {
    $provide.decorator('$location', ['$delegate', $delegate => {
      $delegate = new AngularLocationWrapper.O();
      return $delegate;
    }]);
  }]);
  core_module.hF.provider('$route', RouteProvider);
  core_module.hF.provider('$routeParams', RouteParamsProvider);
};

function initAngularRoutingBridge() {
  tamperAngularLocation();
  interceptAngularLocation();
}
;
function monkeyPatchInjectorWithPreAssignedBindings(injector) {
  injector.oldInvoke = injector.invoke;

  injector.invoke = (fn, self, locals, serviceName) => {
    var _locals$$scope;

    const parentScope = locals === null || locals === void 0 ? void 0 : (_locals$$scope = locals.$scope) === null || _locals$$scope === void 0 ? void 0 : _locals$$scope.$parent;

    if (parentScope) {
      var _parentScope$ctrl, _parentScope$ctrl2, _parentScope$ctrl3, _parentScope$$parent, _parentScope$$parent$, _parentScope$$parent$2;

      if (parentScope.panel) {
        self.panel = parentScope.panel;
      } 


      if (parentScope.dashboard) {
        self.dashboard = parentScope.dashboard;
      } 


      if ((_parentScope$ctrl = parentScope.ctrl) !== null && _parentScope$ctrl !== void 0 && _parentScope$ctrl.target) {
        self.panelCtrl = parentScope.ctrl;
        self.datasource = parentScope.ctrl.datasource;
        self.target = parentScope.ctrl.target;
      } 


      if ((_parentScope$ctrl2 = parentScope.ctrl) !== null && _parentScope$ctrl2 !== void 0 && _parentScope$ctrl2.datasourceMeta) {
        self.meta = parentScope.ctrl.datasourceMeta;
        self.current = parentScope.ctrl.current;
      } 


      if ((_parentScope$ctrl3 = parentScope.ctrl) !== null && _parentScope$ctrl3 !== void 0 && _parentScope$ctrl3.currentAnnotation) {
        self.annotation = parentScope.ctrl.currentAnnotation;
        self.datasource = parentScope.ctrl.currentDatasource;
      } 


      if (parentScope.isAppConfigCtrl) {
        self.appEditCtrl = parentScope.ctrl;
        self.appModel = parentScope.ctrl.model;
      } 


      if ((_parentScope$$parent = parentScope.$parent) !== null && _parentScope$$parent !== void 0 && (_parentScope$$parent$ = _parentScope$$parent.$parent) !== null && _parentScope$$parent$ !== void 0 && (_parentScope$$parent$2 = _parentScope$$parent$.ctrl) !== null && _parentScope$$parent$2 !== void 0 && _parentScope$$parent$2.appModel) {
        var _parentScope$$parent2, _parentScope$$parent3, _parentScope$$parent4;

        self.appModel = (_parentScope$$parent2 = parentScope.$parent) === null || _parentScope$$parent2 === void 0 ? void 0 : (_parentScope$$parent3 = _parentScope$$parent2.$parent) === null || _parentScope$$parent3 === void 0 ? void 0 : (_parentScope$$parent4 = _parentScope$$parent3.ctrl) === null || _parentScope$$parent4 === void 0 ? void 0 : _parentScope$$parent4.appModel;
      }
    }

    return injector.oldInvoke(fn, self, locals, serviceName);
  };
}
var core_core = __webpack_require__("./public/app/core/core.ts");
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
var ValidationSrv = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
var link_srv = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");
;
function UtilSrv_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class UtilSrv {
  constructor($rootScope, $modal) {
    this.$rootScope = $rootScope;
    this.$modal = $modal;

    UtilSrv_defineProperty(this, "modalScope", void 0);

    this.$rootScope = $rootScope;
    this.$modal = $modal;
  }

  init() {
    app_events.h.subscribe(events.le, e => this.showModal(e.payload));
    app_events.h.subscribe(events.OW, this.hideModal.bind(this));
  }


  hideModal() {
    (0,src.deprecationWarning)('UtilSrv', 'hideModal', 'showModalReact');

    if (this.modalScope && this.modalScope.dismiss) {
      this.modalScope.dismiss();
    }
  }


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
var api = __webpack_require__("./public/app/features/annotations/api.ts");
;




class AnnotationsSrv {
  clearPromiseCaches() {
    (0,src.deprecationWarning)('annotations_srv.ts', 'clearPromiseCaches', 'DashboardQueryRunner');
  }


  getAnnotations(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getAnnotations', 'DashboardQueryRunner.getResult');
    return Promise.resolve({
      annotations: [],
      alertState: undefined
    });
  }


  getAlertStates(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getAlertStates', 'DashboardQueryRunner.getResult');
    return Promise.resolve(undefined);
  }


  getGlobalAnnotations(options) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'getGlobalAnnotations', 'DashboardQueryRunner.getResult');
    return Promise.resolve([]);
  }


  saveAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'saveAnnotationEvent', 'api/saveAnnotation');
    return (0,api.xD)(annotation);
  }


  updateAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'updateAnnotationEvent', 'api/updateAnnotation');
    return (0,api._E)(annotation);
  }


  deleteAnnotationEvent(annotation) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'deleteAnnotationEvent', 'api/deleteAnnotation');
    return (0,api.Dl)(annotation);
  }


  translateQueryResult(annotation, results) {
    (0,src.deprecationWarning)('annotations_srv.ts', 'translateQueryResult', 'DashboardQueryRunner/utils/translateQueryResult'); 

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
;








function registerComponents() {
  core_module.ZP.factory('backendSrv', () => (0,grafana_runtime_src.getBackendSrv)());
  core_module.ZP.factory('contextSrv', () => core_core.Vt);
  core_module.ZP.factory('dashboardSrv', () => (0,DashboardSrv.h4)());
  core_module.ZP.factory('datasourceSrv', () => (0,grafana_runtime_src.getDataSourceSrv)());
  core_module.ZP.factory('linkSrv', () => (0,link_srv.Bq)());
  core_module.ZP.factory('validationSrv', () => ValidationSrv.t);
  core_module.ZP.service('annotationsSrv', AnnotationsSrv);
  core_module.ZP.service('utilSrv', UtilSrv);
}
;
function AngularApp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























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
      if (config.vc.buildInfo.env !== 'development') {
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
            if (!$templateCache.get(url)) {
              url += '?v=' + new Date().getTime();
            }
          }

          return get(url, config);
        };

        return $delegate;
      }]);
    }]);
    this.ngModuleDependencies = ['grafana.core', 'ngSanitize', '$strap.directives', 'grafana', 'pasvaz.bindonce', 'react']; 

    core_module.rb.forEach(m => {
      this.useModule(m);
    }); 

    angular_default().module('grafana.services').service('dashboardLoaderSrv', DashboardLoaderSrv.Bg);
    core_module.ZP.factory('timeSrv', () => (0,TimeSrv.$t)());
    core_module.ZP.factory('templateSrv', () => (0,grafana_runtime_src.getTemplateSrv)());
    registerAngularDirectives();
    registerComponents();
    initAngularRoutingBridge(); 

    (0,plugin_loader.kY)('angular', (angular_default()));
    (0,plugin_loader.kY)('app/core/utils/promiseToDigest', {
      promiseToDigest: promiseToDigest.E,
      __esModule: true
    });
    (0,plugin_loader.kY)('app/plugins/sdk', sdk);
    (0,plugin_loader.kY)('app/core/core_module', core_module.ZP);
    (0,plugin_loader.kY)('app/core/core', {
      coreModule: core_module.ZP,
      appEvents: app_events.Z,
      contextSrv: context_srv.Vt,
      __esModule: true
    }); 

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
      }); 

      return () => {};
    });
    return injector;
  }

}
;






































 }),

 "./public/app/angular/panel/metrics_panel_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( MetricsPanelCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
 var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ .q {
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
        } 


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
    if (this.otherPanelInFullscreenMode()) {
      return;
    } 


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; 

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; 

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataSnapshotLoad, data);
      });
    } 


    delete this.error;
    this.loading = true; 

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
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
  } 


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ .W1)(this.panel, this.range);
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



 }),

 "./public/app/angular/panel/panel_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "q": () => ( PanelCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
 var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
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
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ .O();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.EventBusSrv();
    this.timing = {}; 

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_3__ .ZP.panels[this.panel.type];

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
    app_core_core__WEBPACK_IMPORTED_MODULE_4__ .rv.renderingCompleted();
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
  } 


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.render, payload);
  } 


}

 }),

 "./public/app/angular/panel/query_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( QueryCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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

 }),

 "./public/app/angular/partials.ts":
 ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let templates = __webpack_require__("./public/app sync recursive \\.html$");

templates.keys().forEach(key => {
  templates(key);
});

 }),

 "./public/app/angular/promiseToDigest.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "E": () => ( promiseToDigest)
 });
const promiseToDigest = $scope => promise => promise.finally($scope.$evalAsync);

 }),

 "./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "JX": () => ( LokiOptionFields),
   "TQ": () => ( DEFAULT_RESOLUTION),
   "Wz": () => ( preprocessMaxLines),
   "oZ": () => ( RESOLUTION_OPTIONS),
   "uG": () => ( queryTypeOptions)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
 var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

const _excluded = ["instant", "range"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const queryTypeOptions = [{
  value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Range,
  label: 'Range',
  description: 'Run query over a range of time.'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Instant,
  label: 'Instant',
  description: 'Run query against a single point in time. For this query, the "To" time is used.'
}];

if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.lokiLive) {
  queryTypeOptions.push({
    value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Stream,
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
  let queryType = (_query$queryType = query.queryType) !== null && _query$queryType !== void 0 ? _query$queryType : query.instant ? _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Instant : _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Range;

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

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    "aria-label": "Loki extra field",
    className: "gf-form-inline",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "queryTypeField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form explore-input-margin', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Query type field",
      children: [_InlineFormLabel || (_InlineFormLabel = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, {
        width: "auto",
        children: "Query type"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
        options: queryTypeOptions,
        value: queryType,
        onChange: type => {
          onQueryTypeChange(type);

          if (runOnBlur) {
            onRunQuery();
          }
        }
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "lineLimitField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Line limit field",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Line limit",
        tooltip: 'Upper limit for number of log lines returned by query.',
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
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
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Resolution",
        tooltip: 'Resolution 1/1 sets step parameter of Loki metrics range queries such that each pixel corresponds to one data point. For better performance, lower resolutions can be picked. 1/2 only retrieves a data point for every other pixel, and 1/10 retrieves one data point per 10 pixels.',
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
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
 var __WEBPACK_DEFAULT_EXPORT__ = (( null && (memo(LokiOptionFields))));
function preprocessMaxLines(value) {
  if (value.length === 0) {
    return NaN;
  } else if (value.length > 0 && (isNaN(+value) || +value < 0)) {
    return 0;
  } else {
    return +value;
  }
}

 }),

 "./public/app/plugins/datasource/loki/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "EM": () => ( LokiQueryType),
   "ox": () => ( LokiResultType),
   "sb": () => ( LokiQueryDirection)
 });
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

 }),

 "./public/app/plugins/sdk.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "MetricsPanelCtrl": () => ( MetricsPanelCtrl),
   "PanelCtrl": () => ( PanelCtrl),
   "QueryCtrl": () => ( QueryCtrl),
   "loadPluginCss": () => ( _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
 var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
 var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ .q);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ .k);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ .G);


 }),

 "./.yarn/cache/angular-bindonce-npm-0.3.1-63597abd34-6a9adeb527.zip/node_modules/angular-bindonce/bindonce.js":
 (() => {

(function () {
	"use strict";

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


 }),

 "./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/angular-route.js":
 (() => {

(function(window, angular) {'use strict';


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


var isArray;
var isObject;
var isDefined;
var noop;

var ngRouteModule = angular.
  module('ngRoute', []).
  info({ angularVersion: '1.8.2' }).
  provider('$route', $RouteProvider).
  run(instantiateRoute);
var $routeMinErr = angular.$$minErr('ngRoute');
var isEagerInstantiationEnabled;


function $RouteProvider() {
  isArray = angular.isArray;
  isObject = angular.isObject;
  isDefined = angular.isDefined;
  noop = angular.noop;

  function inherit(parent, extra) {
    return angular.extend(Object.create(parent), extra);
  }

  var routes = {};

  this.when = function(path, route) {
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

  this.caseInsensitiveMatch = false;

  this.otherwise = function(params) {
    if (typeof params === 'string') {
      params = {redirectTo: params};
    }
    this.when(null, params);
    return this;
  };

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






    var forceReload = false,
        preparedRoute,
        preparedRouteIsUpdateOnly,
        $route = {
          routes: routes,

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

          updateParams: function(newParams) {
            if (this.current && this.current.$$route) {
              newParams = angular.extend({}, this.current.params, newParams);
              $location.path(interpolate(this.current.$$route.originalPath, newParams));
              $location.search(newParams);
            } else {
              throw $routeMinErr('norout', 'Tried updating route with no current route');
            }
          }
        };

    $rootScope.$on('$locationChangeStart', prepareRoute);
    $rootScope.$on('$locationChangeSuccess', commitRoute);

    return $route;


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

    function parseRoute() {
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    function isNavigationUpdateOnly(newRoute, oldRoute) {
      return !forceReload
          && newRoute && oldRoute
          && (newRoute.$$route === oldRoute.$$route)
          && (!newRoute.reloadOnUrl
              || (!newRoute.reloadOnSearch
                  && angular.equals(newRoute.pathParams, oldRoute.pathParams)
              )
          );
    }

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
    $injector.get('$route');
  }
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);




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


 }),

 "./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__("./.yarn/cache/angular-route-npm-1.8.2-11a799fee9-08d84d6a35.zip/node_modules/angular-route/angular-route.js");
module.exports = 'ngRoute';


 }),

 "./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/angular-sanitize.js":
 (() => {

(function(window, angular) {'use strict';


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


  this.enableSvg = function(enableSvg) {
    if (isDefined(enableSvg)) {
      svgEnabled = enableSvg;
      return this;
    } else {
      return svgEnabled;
    }
  };


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


  this.addValidAttrs = function(attrs) {
    if (!hasBeenInstantiated) {
      extend(validAttrs, arrayToMap(attrs, true));
    }
    return this;
  };


  bind = angular.bind;
  extend = angular.extend;
  forEach = angular.forEach;
  isArray = angular.isArray;
  isDefined = angular.isDefined;
  lowercase = angular.$$lowercase;
  noop = angular.noop;

  htmlParser = htmlParserImpl;
  htmlSanitizeWriter = htmlSanitizeWriterImpl;

  nodeContains = window.Node.prototype.contains ||  function(arg) {
    return !!(this.compareDocumentPosition(arg) & 16);
  };

  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    NON_ALPHANUMERIC_REGEXP = /([^#-~ |!])/g;



  var voidElements = stringToMap('area,br,col,hr,img,wbr');

  var optionalEndTagBlockElements = stringToMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
      optionalEndTagInlineElements = stringToMap('rp,rt'),
      optionalEndTagElements = extend({},
                                              optionalEndTagInlineElements,
                                              optionalEndTagBlockElements);

  var blockElements = extend({}, optionalEndTagBlockElements, stringToMap('address,article,' +
          'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
          'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));

  var inlineElements = extend({}, optionalEndTagInlineElements, stringToMap('a,abbr,acronym,b,' +
          'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' +
          'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));

  var svgElements = stringToMap('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,' +
          'hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,' +
          'radialGradient,rect,stop,svg,switch,text,title,tspan');

  var blockedElements = stringToMap('script,style');

  var validElements = extend({},
                                     voidElements,
                                     blockElements,
                                     inlineElements,
                                     optionalEndTagElements);

  var uriAttrs = stringToMap('background,cite,href,longdesc,src,xlink:href,xml:base');

  var htmlAttrs = stringToMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
      'valign,value,vspace,width');

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

  var getInertBodyElement  = (function(window, document) {
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

      if (document.documentMode) {
        stripCustomNsAttrs(inertBodyElement);
      }

      return inertBodyElement;
    }
  })(window, window.document);

  function htmlParserImpl(html, handler) {
    if (html === null || html === undefined) {
      html = '';
    } else if (typeof html !== 'string') {
      html = '' + html;
    }

    var inertBodyElement = getInertBodyElement(html);
    if (!inertBodyElement) return '';

    var mXSSAttempts = 5;
    do {
      if (mXSSAttempts === 0) {
        throw $sanitizeMinErr('uinput', 'Failed to sanitize html because the input is unstable');
      }
      mXSSAttempts--;

      html = inertBodyElement.innerHTML;
      inertBodyElement = getInertBodyElement(html);
    } while (html !== inertBodyElement.innerHTML);

    var node = inertBodyElement.firstChild;
    while (node) {
      switch (node.nodeType) {
        case 1: 
          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
          break;
        case 3: 
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


angular.module('ngSanitize', [])
  .provider('$sanitize', $SanitizeProvider)
  .info({ angularVersion: '1.8.2' });

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
      url = match[0];
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


 }),

 "./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__("./.yarn/cache/angular-sanitize-npm-1.8.2-378e7cdaed-df06ddee2a.zip/node_modules/angular-sanitize/angular-sanitize.js");
module.exports = 'ngSanitize';


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/autoUpdate.js":
 ((module) => {

"use strict";



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

    function startWatch() {
        if (watcher) return

        watcher = setInterval(function() {
            if (self.root[self.origin.offset]) {
                stopWatch()
                self.update()
            }
        }, 300) 
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


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/controls.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



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

        this._eventHandlers.push(event) 
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

        this._eventHandlers.push(event) 
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

            this._eventHandlers.push(event) 
            this.event(event.element, event.type, event.handler, 'on')
        }
    }
}


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/core.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var g = (function() {
    return this || (1, eval)('this')
}())
var scopedWindow = g && g.window || g

var event = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .B)
var css = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .iv)
var add = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .IH)
var has = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .e$)
var rm = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").rm)
var clone = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .d9)
var qs = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").qs)

var _baron = baron 
var pos = ['left', 'top', 'right', 'bottom', 'width', 'height']
var instances = []
var origin = {
    v: { 
        x: 'Y', pos: pos[1], oppos: pos[3], crossPos: pos[0], crossOpPos: pos[2],
        size: pos[5],
        crossSize: pos[4], crossMinSize: 'min-' + pos[4], crossMaxSize: 'max-' + pos[4],
        client: 'clientHeight', crossClient: 'clientWidth',
        scrollEdge: 'scrollLeft',
        offset: 'offsetHeight', crossOffset: 'offsetWidth', offsetPos: 'offsetTop',
        scroll: 'scrollTop', scrollSize: 'scrollHeight'
    },
    h: { 
        x: 'X', pos: pos[0], oppos: pos[2], crossPos: pos[1], crossOpPos: pos[3],
        size: pos[4],
        crossSize: pos[5], crossMinSize: 'min-' + pos[5], crossMaxSize: 'max-' + pos[5],
        client: 'clientWidth', crossClient: 'clientHeight',
        scrollEdge: 'scrollTop',
        offset: 'offsetWidth', crossOffset: 'offsetHeight', offsetPos: 'offsetLeft',
        scroll: 'scrollLeft', scrollSize: 'scrollWidth'
    }
}

var opera12maxScrollbarSize = 17
var macmsxffScrollbarSize = 15
var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/
var isMacFF = macosxffRe.test(scopedWindow.navigator && scopedWindow.navigator.userAgent)

var log, liveBarons, shownErrors

if (false) {}

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

    for (var key in defaultParams) {
        if (params[key] == null) { 
            params[key] = defaultParams[key]
        }
    }

    if (false) {}

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
    var id = +attr 

    params.index = id

    if (id == id && attr !== null && instances[id]) {
        if (false) {}

        return instances[id]
    }

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

function getTime() {
    return new Date().getTime()
}

if (false) {}

function manageEvents(item, eventManager, mode) {
    item._eventHandlers = item._eventHandlers || [
        {
            element: item.scroller,

            handler: function(e) {
                item.scroll(e)
            },

            type: 'scroll'
        }, {
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'transitionend animationend'
        }, {
            element: item.scroller,

            handler: function() {
                item.update()
            },

            type: 'keyup'
        }, {
            element: item.bar,

            handler: function(e) {
                e.preventDefault() 
                item.selection() 
                item.drag.now = 1 
                if (item.draggingCls) {
                    add(item.root, item.draggingCls)
                }
            },

            type: 'touchstart mousedown'
        }, {
            element: document,

            handler: function() {
                item.selection(1) 
                item.drag.now = 0
                if (item.draggingCls) {
                    rm(item.root, item.draggingCls)
                }
            },

            type: 'mouseup blur touchend'
        }, {
            element: document,

            handler: function(e) {
                if (e.button != 2) { 
                    item._pos0(e)
                }
            },

            type: 'touchstart mousedown'
        }, {
            element: document,

            handler: function(e) {
                if (item.drag.now) {
                    item.drag(e)
                }
            },

            type: 'mousemove touchmove'
        }, {
            element: scopedWindow,

            handler: function() {
                item.update()
            },

            type: 'resize'
        }, {
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'sizeChange'
        }, {
            element: item.clipper,

            handler: function() {
                item.clipperOnScroll()
            },

            type: 'scroll'
        }
    ]

    arrayEach(item._eventHandlers, function(evt) {
        if (evt.element) {
            if (evt.element.length && evt.element !== scopedWindow) {
                for (var i = 0; i < evt.element.length; i++) {
                    eventManager(evt.element[i], evt.type, evt.handler, mode)
                }
            } else {
                eventManager(evt.element, evt.type, evt.handler, mode)
            }
        }
    })

}

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
    _debounce: function(func, wait) {
        var self = this,
            timeout,
            timestamp

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
                func()
            }
        }

        return function() {
            timestamp = getTime()

            if (!timeout) {
                timeout = setTimeout(later, wait)
            }

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

        this.root = params.root 
        this.scroller = qs(params.scroller)
        if (false) {}
        this.bar = qs(params.bar, this.root)
        track = this.track = qs(params.track, this.root)
        if (!this.track && this.bar) {
            track = this.bar.parentNode
        }
        this.clipper = this.scroller.parentNode

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

        function posBar(_pos) {
            if (this.bar) {
                var was = css(this.bar, this.origin.pos),
                    will = +_pos + 'px'

                if (will && will != was) {
                    css(this.bar, this.origin.pos, will)
                }
            }
        }

        function k() {
            return track[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset]
        }

        function relToPos(r) {
            return r * k.call(this) + this.barTopLimit
        }

        function posToRel(t) {
            return (t - this.barTopLimit) / k.call(this)
        }

        this.cursor = function(e) {
            return e['client' + this.origin.x] ||
                (((e.originalEvent || e).touches || {})[0] || {})['page' + this.origin.x]
        }

        function dontPosSelect() {
            return false
        }

        this.pos = function(x) { 
            var ie = 'page' + this.origin.x + 'Offset',
                key = (this.scroller[ie]) ? ie : this.origin.scroll

            if (x !== undefined) this.scroller[key] = x

            return this.scroller[key]
        }

        this.rpos = function(r) { 
            var free = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client],
                x

            if (r) {
                x = this.pos(r * free)
            } else {
                x = this.pos()
            }

            return x / (free || 1)
        }

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

        this.selection = function(enable) {
            this.event(document, 'selectpos selectstart', dontPosSelect, enable ? 'off' : 'on')
        }

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

                if (isMacFF) {
                    padding = macmsxffScrollbarSize

                } else if (client > 0 && offset === 0) {
                    offset = client + opera12maxScrollbarSize
                }

                if (offset) { 
                    self.barOn()

                    if (self.impact == 'scroller') { 
                        var delta = offset - client + padding

                        if (self.position == 'static') { 
                            was = css(self.scroller, self.origin.crossSize)
                            will = self.clipper[self.origin.crossClient] + delta + 'px'

                            if (was != will) {
                                self._setCrossSizes(self.scroller, will)
                            }
                        } else { 
                            var styles = {}
                            var key = self.rtl ? 'Left' : 'Right'

                            if (self.direction == 'h') {
                                key = 'Bottom'
                            }

                            styles['padding' + key] = delta + 'px'
                            css(self.scroller, styles)
                        }
                    } else { 
                        was = css(self.clipper, self.origin.crossSize)
                        will = client + 'px'

                        if (was != will) {
                            self._setCrossSizes(self.clipper, will)
                        }
                    }
                } else {
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

        this.clipperOnScroll = function() {

            if (!this.rtl) {
                this.clipper[this.origin.scrollEdge] = 0
            } else {
                this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize]
            }
        }

        this._setCrossSizes = function(node, size) {
            var styles = {}

            styles[this.origin.crossSize] = size
            styles[this.origin.crossMinSize] = size
            styles[this.origin.crossMaxSize] = size

            css(node, styles)
        }

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

        this._dumbCss(true)

        if (isMacFF) {
            var padding = 'paddingRight'
            var styles = {}
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

    update: function(params) {
        if (false) {}

        fire.call(this, 'upd', params) 

        this.resize(1)
        this.updatePositions(1)

        return this
    },

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

baron.prototype.constructor.prototype = baron.prototype

baron.noConflict = function() {
    scopedWindow.baron = _baron 

    return baron
}

baron.version = '3.0.1'

baron.prototype.autoUpdate = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/autoUpdate.js")(scopedWindow)
baron.prototype.fix = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/fix.js")
baron.prototype.controls = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/controls.js")

module.exports = baron


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/fix.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



var log = __webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/log.js")
var css = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .iv)
var add = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js") .IH)
var rm = (__webpack_require__("./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js").rm)

module.exports = function fix(userParams) {
    var elements,
        viewPortSize,
        params = { 
            outside: '',
            inside: '',
            before: '',
            after: '',
            past: '',
            future: '',
            radius: 0,
            minView: 0
        },
        topFixHeights = [], 
        topRealHeights = [], 
        headerTops = [], 
        scroller = this.scroller,
        eventManager = this.event,
        self = this

    if (false) {}

    function fixElement(i, _pos, flag) {
        var pos = _pos
        var ori = flag == 1 ? 'pos' : 'oppos'

        if (viewPortSize < (params.minView || 0)) { 
            pos = undefined
        }

        css(elements[i], this.origin.pos, '')
        css(elements[i], this.origin.oppos, '')
        rm(elements[i], params.outside)

        if (pos !== undefined) {
            pos += 'px'
            css(elements[i], this.origin[ori], pos)
            add(elements[i], params.outside)
        }
    }

    function bubbleWheel(e) {
        try {
            var i = document.createEvent('WheelEvent') 

            i.initWebKitWheelEvent(e.originalEvent.wheelDeltaX, e.originalEvent.wheelDeltaY)
            scroller.dispatchEvent(i)
            e.preventDefault()
        } catch (ex) {
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
                pos = {}
                pos[this.origin.size] = elements[i][this.origin.offset] + 'px'
                if (elements[i].parentNode !== this.scroller) {
                    css(elements[i].parentNode, pos)
                }
                pos = {}
                pos[this.origin.crossSize] = elements[i].parentNode[this.origin.crossClient] + 'px'
                css(elements[i], pos)

                viewPortSize -= elements[i][this.origin.offset]

                headerTops[i] = elements[i].parentNode[this.origin.offsetPos] 

                topFixHeights[i] = (topFixHeights[i - 1] || 0) 
                topRealHeights[i] = (topRealHeights[i - 1] || Math.min(headerTops[i], 0))

                if (elements[i - 1]) {
                    topFixHeights[i] += elements[i - 1][this.origin.offset]
                    topRealHeights[i] += elements[i - 1][this.origin.offset]
                }

                if ( !(i == 0 && headerTops[i] == 0)) {
                    this.event(elements[i], 'mousewheel', bubbleWheel, 'off')
                    this.event(elements[i], 'mousewheel', bubbleWheel)
                }
            }

            if (params.limiter && elements[0]) { 
                if (this.track && this.track != this.scroller) {
                    pos = {}
                    pos[this.origin.pos] = elements[0].parentNode[this.origin.offset] + 'px'
                    css(this.track, pos)
                } else {
                    this.barTopLimit = elements[0].parentNode[this.origin.offset]
                }
                this.scroll()
            }

            if (params.limiter === false) { 
                this.barTopLimit = 0
            }
        }

        var event = {
            element: elements,

            handler: function() {
                var parent = this.parentNode,
                    top = parent.offsetTop,
                    num

                for (var j = 0; j < elements.length; j++ ) {
                    if (elements[j] === this) num = j
                }

                var locPos = top - topFixHeights[num]

                if (params.scroll) { 
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
            this._eventHandlers.push(event) 
            for (var j = 0; j < event.element.length; j++) {
                eventManager(event.element[j], event.type, event.handler, 'on')
            }
        }
    }

    this.on('init', init, userParams)

    var fixFlag = [], 
        gradFlag = []

    this.on('init scroll', function() {
        var fixState, hTop, gradState
        var i

        if (elements) {
            var change

            for (i = 0; i < elements.length; i++) {
                fixState = 0
                if (headerTops[i] - this.pos() < topRealHeights[i] + params.radius) {
                    fixState = 1
                    hTop = topFixHeights[i]
                } else if (headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize - params.radius) {
                    fixState = 2
                    hTop = this.scroller[this.origin.client] - elements[i][this.origin.offset] - topFixHeights[i] - viewPortSize
                } else {
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

            if (change) { 
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
                        rm(elements[i], params.after) 
                    } else if (fixFlag[i] != fixFlag[i - 1] && fixFlag[i] == 2) {
                        add(elements[i], params.after)
                        rm(elements[i], params.before) 
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


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/log.js":
 ((module) => {

module.exports = function log(level, msg, more) {
    var func = console[level] || console.log
    var args = [
        'Baron: ' + msg,
        more
    ]

    Function.prototype.apply.call(func, console, args)
}


 }),

 "./.yarn/cache/baron-npm-3.0.3-255b365962-5fd57232e2.zip/node_modules/baron/src/utils.js":
 ((module) => {

"use strict";
var __webpack_unused_export__;


var supportsPassive = false

try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true
        }
    })

    window.addEventListener('test', null, opts)
} catch (e) {
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


 }),

 "./public/vendor/angular-other/angular-strap.js":
 (() => {

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
          container: 'body', 
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


 }),

 "./public/vendor/bootstrap/bootstrap.js":
 (() => {



!function ($) {

  "use strict"; 



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

}(window.jQuery);


!function ($) {

  "use strict"; 




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

      if (e.keyCode == 38 && index > 0) index--                                        
      if (e.keyCode == 40 && index < $items.length - 1) index++                        
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
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') 
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }



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



  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }



  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);


!function ($) {

  "use strict"; 



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
            that.$element.appendTo(document.body) 
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth 
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

          if (doAnimate) this.$backdrop[0].offsetWidth 

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



  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }



  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) 
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);


!function ($) {

  "use strict"; 



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

          case 'topLeft':
            tp = {top: pos.top - actualHeight,  left: pos.left + pos.width / 2 - (actualWidth * .10)};
            break;
          case 'topRight':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - (actualWidth * .90)};
            break;

          case 'rightTop':
            tp = {top: pos.top + pos.height / 2 - (actualHeight *.10), left: pos.left + pos.width};
            break;
          case 'rightBottom':
            tp = {top: pos.top + pos.height / 2 - (actualHeight * .90), left: pos.left + pos.width};
            break;

          case 'bottomLeft':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - (actualWidth * .10)};
            break;
          case 'bottomRight':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - (actualWidth * .90)};
            break;

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



  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);



!function ($) {

  "use strict"; 



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
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') 
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
          element[0].offsetWidth 
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



  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }



  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);


!function($){

  "use strict"; 



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

      if (e.shiftKey && e.keyCode === 40) {
        return;
      }

      switch(e.keyCode) {
        case 9: 
        case 13: 
        case 27: 
          e.preventDefault()
          break

        case 38: 
          e.preventDefault()
          this.prev()
          break

        case 40: 
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
        case 40: 
        case 38: 
        case 16: 
        case 17: 
        case 18: 
          break

        case 9: 
        case 13: 
          if (!this.shown) return
          this.select()
          break

        case 27: 
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup();
      }

      if(e.keyCode === 13 && typeof this.$menu.find('.active').attr('data-value') === 'undefined') {
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



  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }



  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);


!function ($) {

  "use strict"; 



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



  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }



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


 }),

 "./public/vendor/tagsinput/bootstrap-tagsinput.js":
 (() => {

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

    add: function(item, dontPushVal) {
      var self = this;

      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
        return;

      if (item !== false && !item)
        return;

      if (typeof item === "object" && !self.objectItems)
        throw("Can't add objects when itemValue option is not set");

      if (item.toString().match(/^\s*$/))
        return;

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

      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
      if (existing) {
        if (self.options.onTagExists) {
          var $existingTag = $(".tag", self.$container).filter(function() { return $(this).data("item") === existing; });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      self.itemsArray.push(item);

      var $tag = $('<span class="tag ' + htmlEncode(tagClass) + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
      $tag.data('item', item);
      self.findInputWrapper().before($tag);
      $tag.after(' ');

      if (self.isSelect && !$('option[value="' + escape(itemValue) + '"]',self.$element)[0]) {
        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
        $option.data('item', item);
        $option.attr('value', itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal)
        self.pushVal();

      if (self.options.maxTags === self.itemsArray.length)
        self.$container.addClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemAdded', { item: item }));
    },

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

      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemRemoved',  { item: item }));
    },

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

    refresh: function() {
      var self = this;
      $('.tag', self.$container).each(function() {
        var $tag = $(this),
            item = $tag.data('item'),
            itemValue = self.options.itemValue(item),
            itemText = self.options.itemText(item),
            tagClass = self.options.tagClass(item);

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

    items: function() {
      return this.itemsArray;
    },

    pushVal: function() {
      var self = this,
          val = $.map(self.items(), function(item) {
            return self.options.itemValue(item).toString();
          });

      self.$element.val(val, true).trigger('change');
    },

    build: function(options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      var typeahead = self.options.typeahead || {};

      if (self.objectItems)
        self.options.freeInput = false;

      makeOptionItemFunction(self.options, 'itemValue');
      makeOptionItemFunction(self.options, 'itemText');
      makeOptionItemFunction(self.options, 'tagClass');

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
              data.success(processItems);
            } else {
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
          case 8:
            if (doGetCaretPosition($input[0]) === 0) {
              var prev = $inputWrapper.prev();
              if (prev) {
                self.remove(prev.data('item'));
              }
            }
            break;

          case 46:
            if (doGetCaretPosition($input[0]) === 0) {
              var next = $inputWrapper.next();
              if (next) {
                self.remove(next.data('item'));
              }
            }
            break;

          case 37:
            var $prevTag = $inputWrapper.prev();
            if ($input.val().length === 0 && $prevTag[0]) {
              $prevTag.before($inputWrapper);
              $input.focus();
            }
            break;
          case 39:
            var $nextTag = $inputWrapper.next();
            if ($input.val().length === 0 && $nextTag[0]) {
              $nextTag.after($inputWrapper);
              $input.focus();
            }
            break;
         default:
            if (self.options.freeInput && $.inArray(event.which, self.options.confirmKeys) >= 0) {
              self.add($input.val());
              $input.val('');
              event.preventDefault();
            }
        }

        $input.attr('size', Math.max(this.inputSize, $input.val().length));
      }, self));

      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
        self.remove($(event.target).closest('.tag').data('item'));
        event.stopPropagation();
      }, self));

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

    destroy: function() {
      var self = this;

      self.$container.off('keypress', 'input');
      self.$container.off('click', '[role=remove]');

      self.$container.remove();
      self.$element.removeData('tagsinput');
      self.$element.show();
    },

    focus: function() {
      this.$input.focus();
    },

    input: function() {
      return this.$input;
    },

    findInputWrapper: function() {
      var elt = this.$input[0],
          container = this.$container[0];
      while(elt && elt.parentNode !== container)
        elt = elt.parentNode;

      return $(elt);
    }
  };

  $.fn.tagsinput = function(arg1, arg2) {
    var results = [];

    this.each(function() {
      var tagsinput = $(this).data('tagsinput');

      if (!tagsinput) {
        tagsinput = new TagsInput(this, arg1);
        $(this).data('tagsinput', tagsinput);
        results.push(tagsinput);

        if (this.tagName === 'SELECT') {
          $('option', $(this)).attr('selected', 'selected');
        }

        $(this).val($(this).val());
      } else {
        var retVal = tagsinput[arg1](arg2);
        if (retVal !== undefined)
          results.push(retVal);
      }
    });

    if ( typeof arg1 == 'string') {
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;

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
  var htmlEncodeContainer = $('<div />');
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return '';
    }
  }

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

  $(function() {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
  });
})(window.jQuery);


 })

}]);