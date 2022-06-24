"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2462],{"./packages/grafana-ui/src/components/Monaco/ReactMonacoEditor.tsx":(e,n,t)=>{function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}function d(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function f(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"==typeof e}t.r(n),t.d(n,{ReactMonacoEditor:()=>he});var p=d((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,n){return f(n)||p("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&p("changeField"),n},selector:function(e){g(e)||p("selectorType")},handler:function(e){g(e)||f(e)||p("handlerType"),f(e)&&Object.values(e).some((function(e){return!g(e)}))&&p("handlersType")},initial:function(e){var n;e||p("initialIsRequired"),f(e)||p("initialType"),n=e,Object.keys(n).length||p("initialContent")}};function m(e,n){return g(n)?n(e.current):n}function v(e,n){return e.current=s(s({},e.current),n),n}function y(e,n,t){return g(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var b={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(n);var t={current:e},r=d(y)(t,n),o=d(v)(t),i=d(h.changes)(e),a=d(m)(t);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(t.current)}function u(e){l(r,o,i,a)(e)}return[c,u]}};const w=b;const O={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"}};const j=function(e){return{}.toString.call(e).includes("Object")};var M=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}((function(e,n){throw new Error(e[n]||e.default)}))({configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "}),k={config:function(e){return e||M("configIsRequired"),j(e)||M("configType"),e.urls?{paths:{vs:e.urls.monacoBase}}:e}};const P=k;const E=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}};const R=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)};var T={type:"cancelation",msg:"operation is manually canceled"};const C=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(T):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t};var S,V,I=w.create({config:O,isInitialized:!1,resolve:null,reject:null,monaco:null}),_=(V=2,function(e){if(Array.isArray(e))return e}(S=I)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(S,V)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(S,V)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),N=_[0],x=_[1];function z(e){return document.body.appendChild(e)}function L(e){var n,t,r=N((function(e){return{config:e.config,reject:e.reject}})),o=(n="".concat(r.config.paths.vs,"/loader.js"),t=document.createElement("script"),n&&(t.src=n),t);return o.onload=function(){return e()},o.onerror=r.reject,o}function A(){var e=N((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){D(n),e.resolve(n)}),(function(n){e.reject(n)}))}function D(e){N().monaco||x({monaco:e})}var q=new Promise((function(e,n){return x({resolve:e,reject:n})})),B={config:function(e){x((function(n){return{config:R(n.config,P.config(e))}}))},init:function(){if(!N((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return D(window.monaco),C(Promise.resolve(window.monaco));E(z,L)(A),x({isInitialized:!0})}return C(q)},__getMonacoInstance:function(){return N((function(e){return e.monaco}))}};const F=B;var U=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),W=t("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"),Y=t.n(W);function $(){return $=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$.apply(this,arguments)}const G={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};const H=function({content:e}){return U.createElement("div",{style:G},e)},J={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function K({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:a}){return U.createElement("section",$({style:{...J.wrapper,width:e,height:n}},a),!t&&U.createElement(H,{content:r}),U.createElement("div",{ref:o,style:{...J.fullWidth,...!t&&J.hide},className:i}))}K.propTypes={width:Y().oneOfType([Y().number,Y().string]).isRequired,height:Y().oneOfType([Y().number,Y().string]).isRequired,loading:Y().oneOfType([Y().element,Y().string]).isRequired,isEditorReady:Y().bool.isRequired,className:Y().string,wrapperProps:Y().object};const Q=K;const X=(0,U.memo)(Q);const Z=function(e){(0,U.useEffect)(e,[])};const ee=function(e,n,t=!0){const r=(0,U.useRef)(!0);(0,U.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function ne(){}function te(e,n,t,r){return function(e,n){return e.editor.getModel(re(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&re(e,r))}(e,n,t,r)}function re(e,n){return e.Uri.parse(n)}function oe({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:c,keepCurrentModifiedModel:u,theme:s,loading:l,options:d,height:f,width:g,className:p,wrapperProps:h,beforeMount:m,onMount:v}){const[y,b]=(0,U.useState)(!1),[w,O]=(0,U.useState)(!0),j=(0,U.useRef)(null),M=(0,U.useRef)(null),k=(0,U.useRef)(null),P=(0,U.useRef)(v),E=(0,U.useRef)(m);Z((()=>{const e=F.init();return e.then((e=>(M.current=e)&&O(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&void 0)),()=>j.current?function(){const e=j.current.getModel();var n,t;c||null===(n=e.original)||void 0===n||n.dispose();u||null===(t=e.modified)||void 0===t||t.dispose();j.current.dispose()}():e.cancel()})),ee((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],y),ee((()=>{j.current.getModel().original.setValue(e)}),[e],y),ee((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],y),ee((()=>{M.current.editor.setTheme(s)}),[s],y),ee((()=>{j.current.updateOptions(d)}),[d],y);const R=(0,U.useCallback)((()=>{E.current(M.current);const c=te(M.current,e,r||t,i),u=te(M.current,n,o||t,a);j.current.setModel({original:c,modified:u})}),[t,n,o,e,r,i,a]),T=(0,U.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...d}),R(),M.current.editor.setTheme(s),b(!0)}),[d,s,R]);return(0,U.useEffect)((()=>{y&&P.current(j.current,M.current)}),[y]),(0,U.useEffect)((()=>{!w&&!y&&T()}),[w,y,T]),U.createElement(X,{width:g,height:f,isEditorReady:y,loading:l,_ref:k,className:p,wrapperProps:h})}oe.propTypes={original:Y().string,modified:Y().string,language:Y().string,originalLanguage:Y().string,modifiedLanguage:Y().string,originalModelPath:Y().string,modifiedModelPath:Y().string,keepCurrentOriginalModel:Y().bool,keepCurrentModifiedModel:Y().bool,theme:Y().string,loading:Y().oneOfType([Y().element,Y().string]),options:Y().object,width:Y().oneOfType([Y().number,Y().string]),height:Y().oneOfType([Y().number,Y().string]),className:Y().string,wrapperProps:Y().object,beforeMount:Y().func,onMount:Y().func},oe.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:ne,onMount:ne};const ie=function(){const[e,n]=(0,U.useState)(F.__getMonacoInstance());return Z((()=>{let t;return e||(t=F.init(),t.then((e=>{n(e)}))),()=>{var e;return null===(e=t)||void 0===e?void 0:e.cancel()}})),e};const ae=function(e){const n=(0,U.useRef)();return(0,U.useEffect)((()=>{n.current=e}),[e]),n.current},ce=new Map;function ue({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:a,line:c,loading:u,options:s,overrideServices:l,saveViewState:d,keepCurrentModel:f,width:g,height:p,className:h,wrapperProps:m,beforeMount:v,onMount:y,onChange:b,onValidate:w}){const[O,j]=(0,U.useState)(!1),[M,k]=(0,U.useState)(!0),P=(0,U.useRef)(null),E=(0,U.useRef)(null),R=(0,U.useRef)(null),T=(0,U.useRef)(y),C=(0,U.useRef)(v),S=(0,U.useRef)(null),V=(0,U.useRef)(r),I=ae(i);Z((()=>{const e=F.init();return e.then((e=>(P.current=e)&&k(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&void 0)),()=>E.current?function(){var e,n;null===(e=S.current)||void 0===e||e.dispose(),f?d&&ce.set(i,E.current.saveViewState()):null===(n=E.current.getModel())||void 0===n||n.dispose();E.current.dispose()}():e.cancel()})),ee((()=>{const t=te(P.current,e||r,n||o,i);t!==E.current.getModel()&&(d&&ce.set(I,E.current.saveViewState()),E.current.setModel(t),d&&E.current.restoreViewState(ce.get(i)))}),[i],O),ee((()=>{E.current.updateOptions(s)}),[s],O),ee((()=>{E.current.getOption(P.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop())}),[r],O),ee((()=>{P.current.editor.setModelLanguage(E.current.getModel(),o)}),[o],O),ee((()=>{void 0!==c&&E.current.revealLine(c)}),[c],O),ee((()=>{P.current.editor.setTheme(a)}),[a],O);const _=(0,U.useCallback)((()=>{C.current(P.current);const c=i||t,u=te(P.current,r||e,n||o,c);E.current=P.current.editor.create(R.current,{model:u,automaticLayout:!0,...s},l),d&&E.current.restoreViewState(ce.get(c)),P.current.editor.setTheme(a),j(!0)}),[e,n,t,r,o,i,s,l,d,a]);return(0,U.useEffect)((()=>{O&&T.current(E.current,P.current)}),[O]),(0,U.useEffect)((()=>{!M&&!O&&_()}),[M,O,_]),V.current=r,(0,U.useEffect)((()=>{var e,n;O&&b&&(null===(e=S.current)||void 0===e||e.dispose(),S.current=null===(n=E.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{const n=E.current.getValue();V.current!==n&&b(n,e)})))}),[O,b]),(0,U.useEffect)((()=>{if(O){const e=P.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=E.current.getModel())||void 0===n?void 0:n.uri;if(t){if(e.find((e=>e.path===t.path))){const e=P.current.editor.getModelMarkers({resource:t});null==w||w(e)}}}));return()=>{null==e||e.dispose()}}}),[O,w]),U.createElement(X,{width:g,height:p,isEditorReady:O,loading:u,_ref:R,className:h,wrapperProps:m})}ue.propTypes={defaultValue:Y().string,defaultPath:Y().string,defaultLanguage:Y().string,value:Y().string,language:Y().string,path:Y().string,theme:Y().string,line:Y().number,loading:Y().oneOfType([Y().element,Y().string]),options:Y().object,overrideServices:Y().object,saveViewState:Y().bool,keepCurrentModel:Y().bool,width:Y().oneOfType([Y().number,Y().string]),height:Y().oneOfType([Y().number,Y().string]),className:Y().string,wrapperProps:Y().object,beforeMount:Y().func,onMount:Y().func,onChange:Y().func,onValidate:Y().func},ue.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:ne,onMount:ne,onValidate:ne};const se=ue;const le=(0,U.memo)(se);var de=t("./packages/grafana-ui/src/themes/index.ts");function fe(e,n){const t=function(e){return void 0===e?{}:{"editor.background":e.components.input.background,"minimap.background":e.colors.background.secondary}}(n);e.editor.defineTheme("grafana-dark",{base:"vs-dark",inherit:!0,colors:t,rules:[{token:"predefined",foreground:null==n?void 0:n.visualization.getColorByName("purple")},{token:"operator",foreground:null==n?void 0:n.visualization.getColorByName("orange")},{token:"tag",foreground:null==n?void 0:n.visualization.getColorByName("green")}]}),e.editor.defineTheme("grafana-light",{base:"vs",inherit:!0,colors:t,rules:[{token:"predefined",foreground:null==n?void 0:n.visualization.getColorByName("purple")},{token:"operator",foreground:null==n?void 0:n.visualization.getColorByName("orange")},{token:"tag",foreground:null==n?void 0:n.visualization.getColorByName("green")}]})}var ge=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");let pe=!1;const he=e=>{const n=(0,de.l4)(),t=ie();var r;(0,U.useEffect)((()=>{null!==t&&fe(t,n)}),[t,n]),pe||(F.config({paths:{vs:(null!==(r=window.__grafana_public_path__)&&void 0!==r?r:"public/")+"lib/monaco/min/vs"}}),pe=!0,F.init().then((e=>{fe(e)})));const o=n.isDark?"grafana-dark":"grafana-light";return(0,ge.jsx)(le,Object.assign({theme:o},e))}}}]);