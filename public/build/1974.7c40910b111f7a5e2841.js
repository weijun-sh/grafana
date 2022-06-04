"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1974],{"./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":(e,t,a)=>{a.d(t,{l:()=>ge});var n=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=a("./public/app/features/panel/state/actions.ts"),r=a("./public/app/features/panel/state/reducers.ts"),o=a("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js"),l=a("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts"),d=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function c(e){let{children:t,width:a,height:s,onLoad:i,onChange:r}=e;const p=(0,l.L)(),[h,u]=(0,n.useState)(!1),[g,m]=(0,n.useState)(!1),b=(0,n.useRef)(null);return(0,o.Z)(()=>{c.addCallback(p,e=>{!h&&e.isIntersecting&&(u(!0),null===i||void 0===i||i()),m(e.isIntersecting),null===r||void 0===r||r(e.isIntersecting)});const e=b.current;return e&&c.observer.observe(e),()=>{delete c.callbacks[p],e&&c.observer.unobserve(e),0===Object.keys(c.callbacks).length&&c.observer.disconnect()}}),(0,d.jsx)("div",{id:p,ref:b,style:{width:a,height:s},children:h&&("function"==typeof t?t({isInView:g}):t)})}c.callbacks={},c.addCallback=((e,t)=>c.callbacks[e]=t),c.observer=new IntersectionObserver(e=>{for(const t of e)c.callbacks[t.target.id](t)},{rootMargin:"100px"});var p=a("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"),h=a.n(p),u=a("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js"),g=a("./packages/grafana-data/src/index.ts"),m=a("./packages/grafana-e2e-selectors/src/index.ts"),b=a("./packages/grafana-runtime/src/index.ts"),f=a("./packages/grafana-ui/src/index.ts"),v=a("./public/app/core/config.ts"),x=a("./public/app/core/constants.ts"),y=a("./public/app/core/profiler.ts"),S=a("./public/app/features/dashboard/utils/panel.ts");const C=(e,t,a)=>{const{overrides:n}=a,s=a.overrides.findIndex(t=>t.matcher.id===g.FieldMatcherID.byName&&t.matcher.options===e);if(s<0)return Object.assign({},a,{overrides:[...a.overrides,w(e,t)]});const i=Array.from(n),r=i[s],o=r.properties.findIndex(e=>"color"===e.id);if(o<0)return i[s]=Object.assign({},r,{properties:[...r.properties,k(t)]}),Object.assign({},a,{overrides:i});const l=Array.from(r.properties);return l[o]=k(t),i[s]=Object.assign({},r,{properties:l}),Object.assign({},a,{overrides:i})},w=(e,t)=>({matcher:{id:g.FieldMatcherID.byName,options:e},properties:[k(t)]}),k=e=>({id:"color",value:{mode:g.FieldColorModeId.Fixed,fixedColor:e}});var j=a("./public/app/types/events.ts"),I=a("./public/app/core/services/context_srv.ts");function P(e){return/(d-solo|dashboard-solo)/.test(null===e||void 0===e?void 0:e.toLowerCase())}var D,E=a("./public/app/features/annotations/api.ts"),N=a("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts"),O=a("./public/app/features/dashboard/services/TimeSrv.ts"),A=a("./public/app/features/dashboard/utils/loadSnapshotData.ts"),R=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),T=a("./public/app/features/panel/panellinks/linkSuppliers.ts"),V=a("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");const L=e=>{let{state:t,onClick:a}=e;const n=(0,f.useStyles)(F);return t===g.LoadingState.Loading?(0,d.jsx)("div",{className:"panel-loading",onClick:a,children:D||(D=(0,d.jsx)(f.Tooltip,{content:"Cancel query",children:(0,d.jsx)(f.Icon,{className:"panel-loading__spinner spin-clockwise",name:"sync"})}))}):t===g.LoadingState.Streaming?(0,d.jsx)("div",{className:"panel-loading",onClick:a,children:(0,d.jsx)("div",{title:"Streaming (click to stop)",className:n.streamIndicator})}):null};function F(e){return{streamIndicator:R.css`
      width: 10px;
      height: 10px;
      background: ${e.colors.textFaint};
      box-shadow: 0 0 2px ${e.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `}}const M=["children"];const _=e=>{let{children:t}=e,a=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,M);const[s,i]=(0,n.useState)({x:0,y:0}),[r,o]=(0,n.useState)(!1),l=(0,n.useCallback)(e=>{(function(e,t){return t.x===e.x&&t.y===e.y})(s,U(e))&&(e.stopPropagation(),o(!r))},[s,r,o]),c=(0,n.useCallback)(e=>{i(U(e))},[i]);return(0,d.jsx)("header",Object.assign({},a,{className:"panel-title-container",onClick:l,onMouseDown:c,children:t({panelMenuOpen:r,closeMenu:()=>o(!1)})}))};function U(e){return{x:Math.floor(e.clientX),y:Math.floor(e.clientY)}}var z=a("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuItem.tsx");class H extends n.PureComponent{constructor(){var e,t,a,n;super(...arguments),e=this,n=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,d.jsx)("ul",{className:"dropdown-menu dropdown-menu--menu panel-menu",role:a?"":"menu",children:t.map((t,a)=>(0,d.jsx)(z.u,{type:t.type,text:t.text,iconClassName:t.iconClassName,onClick:t.onClick,shortcut:t.shortcut,children:t.subMenu&&e.renderItems(t.subMenu,!0)},`${t.text}${a}`))})},(a="renderItems")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){return(0,d.jsx)("div",{className:"panel-menu-container dropdown open",children:this.renderItems(this.props.items)})}}var Q=a("./public/app/features/panel/state/selectors.ts"),q=a("./public/app/features/library-panels/guard.ts"),$=a("./public/app/store/store.ts"),W=a("./public/app/core/utils/explore.ts"),B=a("./public/app/features/explore/state/main.ts");const Z=e=>{let{panel:t,dashboard:a,children:i}=e;const[r,o]=(0,n.useState)([]),l=(0,s.useSelector)(e=>{var a;return null===(a=(0,Q.i)(e,t))||void 0===a?void 0:a.angularComponent});return(0,n.useEffect)(()=>{o(function(e,t,a){const n=e=>{e.preventDefault(),b.locationService.partial({viewPanel:t.id})},s=e=>{e.preventDefault(),b.locationService.partial({editPanel:t.id})},i=a=>{a.preventDefault(),(0,S.Kq)(e,t)},r=e=>{e.preventDefault(),(0,S.oe)(t)},o=e=>{b.locationService.partial({inspect:t.id,inspectTab:e})},l=e=>{e.preventDefault()},d=a=>{a.preventDefault(),(0,S.jN)(e,t)},c=e=>{e.preventDefault(),(0,S.bY)(t)},p=a=>{a.preventDefault(),(0,S.WJ)(e,t,!0)},h=e=>{e.preventDefault();const a=e.ctrlKey||e.metaKey?e=>window.open(`${v.ZP.appSubUrl}${e}`):void 0;$.h.dispatch((0,B.m$)(t,{getDataSourceSrv:b.getDataSourceSrv,getTimeSrv:O.$t,getExploreUrl:W.H6,openInNewWindow:a}))},u=[];t.isEditing||u.push({text:"View",iconClassName:"eye",onClick:n,shortcut:"v"}),e.canEditPanel(t)&&!t.isEditing&&u.push({text:"Edit",iconClassName:"edit",onClick:s,shortcut:"e"}),u.push({text:"Share",iconClassName:"share-alt",onClick:a=>{a.preventDefault(),(0,S.Po)(e,t)},shortcut:"p s"}),!I.Vt.hasAccessToExplore()||t.plugin&&t.plugin.meta.skipDataQuery||u.push({text:"Explore",iconClassName:"compass",shortcut:"x",onClick:h});const g=[];t.plugin&&!t.plugin.meta.skipDataQuery&&(g.push({text:"Data",onClick:e=>o("data")}),e.meta.canEdit&&g.push({text:"Query",onClick:e=>o("query")})),g.push({text:"Panel JSON",onClick:e=>o("json")}),u.push({type:"submenu",text:"Inspect",iconClassName:"info-circle",onClick:e=>o(),shortcut:"i",subMenu:g});const m=[];if(!e.canEditPanel(t)||t.isViewing||t.isEditing||(m.push({text:"Duplicate",onClick:d,shortcut:"p d"}),m.push({text:"Copy",onClick:c}),(0,q.V)(t)?m.push({text:"Unlink library panel",onClick:r}):m.push({text:"Create library panel",onClick:i})),a){const e=a.getScope(),t=e.$$childHead.ctrl,n=t.getExtendedMenu();for(const a of n){const n={text:a.text,href:a.href,shortcut:a.shortcut};a.click&&(n.onClick=(()=>{e.$eval(a.click,{ctrl:t})})),m.push(n)}}return!t.isEditing&&m.length&&u.push({type:"submenu",text:"More...",iconClassName:"cube",subMenu:m,onClick:l}),!e.canEditPanel(t)||t.isEditing||t.isViewing||(u.push({type:"divider",text:""}),u.push({text:"Remove",iconClassName:"trash-alt",onClick:p,shortcut:"p r"})),u}(a,t,l))},[a,t,l,o]),i({items:r})},K=e=>{let{show:t,onClose:a,panel:n,dashboard:s}=e;return t?(0,d.jsx)(f.ClickOutsideWrapper,{onClick:a,parent:document,children:(0,d.jsx)(Z,{panel:n,dashboard:s,children:e=>{let{items:t}=e;return(0,d.jsx)(H,{items:t})}})}):null},J=e=>{let{notice:t,onClick:a}=e;const n="error"===t.severity||"warning"===t.severity?"exclamation-triangle":"info-circle";return(0,d.jsx)(f.Tooltip,{content:t.text,children:t.inspect?(0,d.jsx)("div",{className:"panel-info-notice pointer",onClick:e=>a(e,t.inspect),children:(0,d.jsx)(f.Icon,{name:n,style:{marginRight:"8px"}})}):(0,d.jsx)("a",{className:"panel-info-notice",href:t.link,target:"_blank",rel:"noreferrer",children:(0,d.jsx)(f.Icon,{name:n,style:{marginRight:"8px"}})})},t.severity)},Y=e=>{let{frames:t,panelId:a}=e;const s=(0,n.useCallback)((e,t)=>{e.stopPropagation(),b.locationService.partial({inspect:a,inspectTab:t})},[a]),i={};for(const e of t)if(e.meta&&e.meta.notices)for(const t of e.meta.notices)i[t.severity]=t;return(0,d.jsx)(d.Fragment,{children:Object.values(i).map(e=>(0,d.jsx)(J,{notice:e,onClick:s},e.severity))})};var X,G;const ee=e=>{let{panel:t,error:a,isViewing:n,isEditing:s,data:i,alertState:r,dashboard:o}=e;const l=t.getDisplayTitle(),c=(0,R.cx)("panel-header",n||s?"":"grid-drag-handle"),p=(0,f.useStyles2)(te);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L,{state:i.state,onClick:()=>t.getQueryRunner().cancelQuery()}),(0,d.jsx)(V.Z,{panel:t,title:t.title,description:t.description,scopedVars:t.scopedVars,links:(0,T.H)(t),error:a}),(0,d.jsx)("div",{className:c,children:(0,d.jsx)(_,{"data-testid":m.wl.components.Panels.Panel.title(l),children:e=>{let{closeMenu:a,panelMenuOpen:n}=e;return(0,d.jsxs)("div",{className:"panel-title",children:[(0,d.jsx)(Y,{frames:i.series,panelId:t.id}),r?(0,d.jsx)(f.Icon,{name:"alerting"===r?"heart-break":"heart",className:"icon-gf panel-alert-icon",style:{marginRight:"4px"},size:"sm"}):null,(0,d.jsx)("h2",{className:p.titleText,children:l}),X||(X=(0,d.jsx)(f.Icon,{name:"angle-down",className:"panel-menu-toggle"})),(0,d.jsx)(K,{panel:t,dashboard:o,show:n,onClose:a}),i.request&&i.request.timeInfo&&(0,d.jsxs)("span",{className:"panel-time-info",children:[G||(G=(0,d.jsx)(f.Icon,{name:"clock-nine",size:"sm"}))," ",i.request.timeInfo]})]})}})})]})},te=e=>({titleText:R.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${e.typography.fontWeightMedium};
      font-size: ${e.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${e.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `});var ae=a("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts"),ne=a("./public/app/features/dashboard/dashgrid/liveTimer.ts");function se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const ie="Error in plugin";class re extends n.PureComponent{constructor(e){super(e),se(this,"timeSrv",(0,O.$t)()),se(this,"subs",new u.w0),se(this,"eventFilter",{onlyLocal:!0}),se(this,"canEditDashboard",()=>Boolean(this.props.dashboard.meta.canEdit||this.props.dashboard.meta.canMakeEditable)),se(this,"canAddAnnotation",()=>{let e=!0;var t;I.Vt.accessControlEnabled()&&(e=!(null===(t=this.props.dashboard.meta.annotationsPermissions)||void 0===t||!t.dashboard.canAdd));return e&&this.canEditDashboard()}),se(this,"canEditAnnotation",e=>{let t=!0;var a,n;I.Vt.accessControlEnabled()&&(t=0!==e?!(null===(a=this.props.dashboard.meta.annotationsPermissions)||void 0===a||!a.dashboard.canEdit):!(null===(n=this.props.dashboard.meta.annotationsPermissions)||void 0===n||!n.organization.canEdit));return t&&this.canEditDashboard()}),se(this,"canDeleteAnnotation",e=>{let t=!0;var a,n;I.Vt.accessControlEnabled()&&(t=0!==e?!(null===(a=this.props.dashboard.meta.annotationsPermissions)||void 0===a||!a.dashboard.canDelete):!(null===(n=this.props.dashboard.meta.annotationsPermissions)||void 0===n||!n.organization.canDelete));return t&&this.canEditDashboard()}),se(this,"getSync",()=>this.props.isEditing?g.DashboardCursorSync.Off:this.props.dashboard.graphTooltip),se(this,"onInstanceStateChange",e=>{this.props.onInstanceStateChange(e),this.setState({context:Object.assign({},this.state.context,{instanceState:e})})}),se(this,"onSeriesColorChange",(e,t)=>{this.onFieldConfigChange(C(e,t,this.props.panel.fieldConfig))}),se(this,"onSeriesVisibilityChange",(e,t)=>{this.onFieldConfigChange((0,ae.N)(e,t,this.props.panel.fieldConfig,this.state.data.series))}),se(this,"onToggleLegendSort",e=>{const t=this.props.panel.options.legend;if(!t)return;let a=t.sortDesc,n=t.sortBy;e!==n&&(a=void 0),!1===a?(n=void 0,a=void 0):(a=!a,n=e),this.onOptionsChange(Object.assign({},this.props.panel.options,{legend:Object.assign({},t,{sortBy:n,sortDesc:a})}))}),se(this,"onRefresh",()=>{const{panel:e,isInView:t,width:a}=this.props;if(!t)return void this.setState({refreshWhenInView:!0});const n=(0,S.W1)(e,this.timeSrv.timeRange());if(this.wantsQueryExecution){if(a<0)return;this.state.refreshWhenInView&&this.setState({refreshWhenInView:!1}),e.runAllPanelQueries(this.props.dashboard.id,this.props.dashboard.getTimezone(),n,a)}else this.setState({data:Object.assign({},this.state.data,{timeRange:this.timeSrv.timeRange()}),renderCounter:this.state.renderCounter+1,liveTime:void 0})}),se(this,"onRender",()=>{const e={renderCounter:this.state.renderCounter+1};this.setState(e)}),se(this,"onOptionsChange",e=>{this.props.panel.updateOptions(e)}),se(this,"onFieldConfigChange",e=>{this.props.panel.updateFieldConfig(e)}),se(this,"onPanelError",e=>{const t=e.message||ie;this.state.errorMessage!==t&&this.setState({errorMessage:t})}),se(this,"onPanelErrorRecover",()=>{this.setState({errorMessage:void 0})}),se(this,"onAnnotationCreate",async e=>{const t=e.from!==e.to,a={dashboardId:this.props.dashboard.id,panelId:this.props.panel.id,isRegion:t,time:e.from,timeEnd:t?e.to:0,tags:e.tags,text:e.description};await(0,E.xD)(a),(0,N.kt)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent(a))}),se(this,"onAnnotationDelete",async e=>{await(0,E.Dl)({id:e}),(0,N.kt)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent({id:e}))}),se(this,"onAnnotationUpdate",async e=>{const t=e.from!==e.to,a={id:e.id,dashboardId:this.props.dashboard.id,panelId:this.props.panel.id,isRegion:t,time:e.from,timeEnd:t?e.to:0,tags:e.tags,text:e.description};await(0,E._E)(a),(0,N.kt)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent(a))}),se(this,"onChangeTimeRange",e=>{this.timeSrv.setTime({from:(0,g.toUtc)(e.from),to:(0,g.toUtc)(e.to)})});const t=e.dashboard.events.newScopedBus(`panel:${e.panel.id}`,this.eventFilter);this.state={isFirstLoad:!0,renderCounter:0,refreshWhenInView:!1,context:{eventBus:t,app:this.getPanelContextApp(),sync:this.getSync,onSeriesColorChange:this.onSeriesColorChange,onToggleSeriesVisibility:this.onSeriesVisibilityChange,onAnnotationCreate:this.onAnnotationCreate,onAnnotationUpdate:this.onAnnotationUpdate,onAnnotationDelete:this.onAnnotationDelete,canAddAnnotations:this.canAddAnnotation,onInstanceStateChange:this.onInstanceStateChange,onToggleLegendSort:this.onToggleLegendSort,canEditAnnotations:this.canEditAnnotation,canDeleteAnnotations:this.canDeleteAnnotation},data:this.getInitialPanelDataState()}}getPanelContextApp(){return this.props.isEditing?g.CoreApp.PanelEditor:this.props.isViewing?g.CoreApp.PanelViewer:g.CoreApp.Dashboard}getInitialPanelDataState(){return{state:g.LoadingState.NotStarted,series:[],timeRange:(0,g.getDefaultTimeRange)()}}componentDidMount(){const{panel:e,dashboard:t}=this.props;this.subs.add(e.events.subscribe(b.RefreshEvent,this.onRefresh)),this.subs.add(e.events.subscribe(j._z,this.onRender)),t.panelInitialized(this.props.panel),this.hasPanelSnapshot?this.setState({data:(0,A.y)(e,t),isFirstLoad:!1}):(this.wantsQueryExecution||this.setState({isFirstLoad:!1}),this.subs.add(e.getQueryRunner().getData({withTransforms:!0,withFieldConfig:!0}).subscribe({next:e=>this.onDataUpdate(e)})),ne.A.listen(this))}componentWillUnmount(){this.subs.unsubscribe(),ne.A.remove(this)}liveTimeChanged(e){const{data:t}=this.state;if(t.timeRange){const a=e.to.valueOf()-t.timeRange.to.valueOf();if(a<100)return void console.log("Skip tick render",this.props.panel.title,a)}this.setState({liveTime:e})}componentDidUpdate(e){const{isInView:t,width:a}=this.props,{context:n}=this.state,s=this.getPanelContextApp();n.app!==s&&this.setState({context:Object.assign({},n,{app:s})}),t!==e.isInView&&t&&this.state.refreshWhenInView&&this.onRefresh(),a!==e.width&&ne.A.updateInterval(this)}onDataUpdate(e){const{dashboard:t,panel:a,plugin:n}=this.props;if(n.meta.skipDataQuery)return void this.setState({data:this.getInitialPanelDataState()});let s,{isFirstLoad:i}=this.state;switch(e.state){case g.LoadingState.Loading:if(this.state.data.state===g.LoadingState.Loading)return;break;case g.LoadingState.Error:const{error:n}=e;n&&s!==n.message&&(s=n.message);break;case g.LoadingState.Done:t.snapshot&&(a.snapshotData=e.series.map(e=>(0,g.toDataFrameDTO)(e))),i&&(i=!1)}this.setState({isFirstLoad:i,errorMessage:s,data:e,liveTime:void 0})}get hasPanelSnapshot(){const{panel:e}=this.props;return e.snapshotData&&e.snapshotData.length}get wantsQueryExecution(){return!(this.props.plugin.meta.skipDataQuery||this.hasPanelSnapshot)}shouldSignalRenderingCompleted(e,t){return e===g.LoadingState.Done||t.skipDataQuery}skipFirstRender(e){const{isFirstLoad:t}=this.state;return this.wantsQueryExecution&&t&&(e===g.LoadingState.Loading||e===g.LoadingState.NotStarted)}renderPanel(e,t){var a,n;const{panel:s,plugin:i,dashboard:r}=this.props,{renderCounter:o,data:l}=this.state,{theme:c}=v.ZP,{state:p}=l;if(this.skipFirstRender(p))return null;this.shouldSignalRenderingCompleted(p,i.meta)&&y.r.renderingCompleted();const u=i.panel,g=null!==(a=null!==(n=this.state.liveTime)&&void 0!==n?n:l.timeRange)&&void 0!==a?a:this.timeSrv.timeRange(),m=this.hasOverlayHeader()?0:c.panelHeaderHeight,b=i.noPadding?0:c.panelPadding,S=e-2*b-x.QO,C=t-m-2*b-x.QO,w=h()({"panel-content":!0,"panel-content--no-padding":i.noPadding}),k=s.getOptions();return this.eventFilter.onlyLocal=0===r.graphTooltip,(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:w,children:(0,d.jsx)(f.PanelContextProvider,{value:this.state.context,children:(0,d.jsx)(u,{id:s.id,data:l,title:s.title,timeRange:g,timeZone:this.props.dashboard.getTimezone(),options:k,fieldConfig:s.fieldConfig,transparent:s.transparent,width:S,height:C,renderCounter:o,replaceVariables:s.replaceVariables,onOptionsChange:this.onOptionsChange,onFieldConfigChange:this.onFieldConfigChange,onChangeTimeRange:this.onChangeTimeRange,eventBus:r.events})})})})}hasOverlayHeader(){const{panel:e}=this.props,{data:t}=this.state;return(!t.request||!t.request.timeInfo)&&!e.hasTitle()}render(){var e;const{dashboard:t,panel:a,isViewing:n,isEditing:s,width:i,height:r,plugin:o}=this.props,{errorMessage:l,data:c}=this.state,{transparent:p}=a,u=null===(e=c.alertState)||void 0===e?void 0:e.state,g=h()({"panel-container":!0,"panel-container--absolute":P(b.locationService.getLocation().pathname),"panel-container--transparent":p,"panel-container--no-title":this.hasOverlayHeader(),[`panel-alert-state--${u}`]:void 0!==u});return(0,d.jsxs)("section",{className:g,"aria-label":m.wl.components.Panels.Panel.containerByTitle(a.title),children:[(0,d.jsx)(ee,{panel:a,dashboard:t,title:a.title,description:a.description,links:a.links,error:l,isEditing:s,isViewing:n,alertState:u,data:c}),(0,d.jsx)(f.ErrorBoundary,{dependencies:[c,o,a.getOptions()],onError:this.onPanelError,onRecover:this.onPanelErrorRecover,children:e=>{let{error:t}=e;return t?null:this.renderPanel(i,r)}})]})}}function oe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const le={setPanelAngularComponent:r.o8},de=(0,s.connect)((e,t)=>{var a;return{angularComponent:null===(a=(0,Q.i)(e,t.panel))||void 0===a?void 0:a.angularComponent}},le)(class extends n.PureComponent{constructor(e){super(e),oe(this,"element",null),oe(this,"timeSrv",(0,O.$t)()),oe(this,"scopeProps",void 0),oe(this,"subs",new u.w0),this.state={data:{state:g.LoadingState.NotStarted,series:[],timeRange:(0,g.getDefaultTimeRange)()}}}componentDidMount(){const{panel:e}=this.props;this.loadAngularPanel();const t=e.getQueryRunner();this.subs.add(t.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:e=>this.onPanelDataUpdate(e)}))}onPanelDataUpdate(e){let t;if(e.state===g.LoadingState.Error){const{error:a}=e;a&&t!==a.message&&(t=a.message)}this.setState({data:e,errorMessage:t})}componentWillUnmount(){this.subs.unsubscribe()}componentDidUpdate(e,t){const{plugin:a,height:n,width:s,panel:i}=this.props;e.plugin!==a&&this.loadAngularPanel(),e.width===s&&e.height===n||this.scopeProps&&(this.scopeProps.size.height=this.getInnerPanelHeight(),this.scopeProps.size.width=this.getInnerPanelWidth(),i.render())}getInnerPanelHeight(){const{plugin:e,height:t}=this.props,{theme:a}=v.ZP;return t-(this.hasOverlayHeader()?0:a.panelHeaderHeight)-2*(e.noPadding?0:a.panelPadding)-x.QO}getInnerPanelWidth(){const{plugin:e,width:t}=this.props,{theme:a}=v.ZP;return t-2*(e.noPadding?0:a.panelPadding)-x.QO}loadAngularPanel(){const{panel:e,dashboard:t,setPanelAngularComponent:a}=this.props;if(!this.element)return;const n=(0,b.getAngularLoader)();this.scopeProps={panel:e,dashboard:t,size:{width:this.getInnerPanelWidth(),height:this.getInnerPanelHeight()}},a({key:e.key,angularComponent:n.load(this.element,this.scopeProps,'<plugin-component type="panel" class="panel-height-helper"></plugin-component>')})}hasOverlayHeader(){const{panel:e}=this.props,{data:t}=this.state;return!(t.request&&t.request.timeInfo||e.hasTitle())}render(){var e;const{dashboard:t,panel:a,isViewing:n,isEditing:s,plugin:i}=this.props,{errorMessage:r,data:o}=this.state,{transparent:l}=a,c=null===(e=o.alertState)||void 0===e?void 0:e.state,p=h()({"panel-container":!0,"panel-container--absolute":P(b.locationService.getLocation().pathname),"panel-container--transparent":l,"panel-container--no-title":this.hasOverlayHeader(),"panel-has-alert":void 0!==a.alert,[`panel-alert-state--${c}`]:void 0!==c}),u=h()({"panel-content":!0,"panel-content--no-padding":i.noPadding});return(0,d.jsxs)("div",{className:p,"aria-label":m.wl.components.Panels.Panel.containerByTitle(a.title),children:[(0,d.jsx)(ee,{panel:a,dashboard:t,title:a.title,description:a.description,links:a.links,error:r,isViewing:n,isEditing:s,data:o,alertState:c}),(0,d.jsx)("div",{className:u,children:(0,d.jsx)("div",{ref:e=>this.element=e,className:"panel-height-helper"})})]})}});function ce(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const pe={initPanelState:i.JI,setPanelInstanceState:r.pC},he=(0,s.connect)((e,t)=>{const a=e.panels[t.stateKey];return a?{plugin:a.plugin,instanceState:a.instanceState}:{plugin:null}},pe);class ue extends n.PureComponent{constructor(){super(...arguments),ce(this,"onInstanceStateChange",e=>{this.props.setPanelInstanceState({key:this.props.stateKey,value:e})}),ce(this,"onVisibilityChange",e=>{this.props.panel.isInView=e}),ce(this,"onPanelLoad",()=>{this.props.plugin||this.props.initPanelState(this.props.panel)})}componentDidMount(){this.props.panel.isInView=!this.props.lazy,this.props.lazy||this.onPanelLoad()}render(){const{dashboard:e,panel:t,isViewing:a,isEditing:n,width:s,height:i,lazy:r,plugin:o}=this.props,l=r=>o&&(o.angularPanelCtrl?(0,d.jsx)(de,{plugin:o,panel:t,dashboard:e,isViewing:a,isEditing:n,isInView:r,width:s,height:i}):(0,d.jsx)(re,{plugin:o,panel:t,dashboard:e,isViewing:a,isEditing:n,isInView:r,width:s,height:i,onInstanceStateChange:this.onInstanceStateChange}));return r?(0,d.jsx)(c,{width:s,height:i,onChange:this.onVisibilityChange,onLoad:this.onPanelLoad,children:e=>{let{isInView:t}=e;return l(t)}}):l(!0)}}ce(ue,"defaultProps",{lazy:!0});const ge=he(ue)},"./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx":(e,t,a)=>{a.d(t,{Z:()=>m});var n,s,i,r=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),o=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-e2e-selectors/src/index.ts"),d=a("./packages/grafana-runtime/src/index.ts"),c=a("./packages/grafana-ui/src/index.ts"),p=a("./public/app/features/dashboard/services/TimeSrv.ts"),h=a("./public/app/features/inspector/types.ts"),u=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(e){e.Error="Error",e.Info="Info",e.Links="Links"}(i||(i={}));const m=class extends r.Component{constructor(){super(...arguments),g(this,"timeSrv",(0,p.$t)()),g(this,"getInfoMode",()=>{const{panel:e,error:t}=this.props;return t?i.Error:e.description?i.Info:e.links&&e.links.length?i.Links:void 0}),g(this,"getInfoContent",()=>{const{panel:e}=this.props,t=e.description||"",a=(0,d.getTemplateSrv)().replace(t,e.scopedVars),n=(0,o.renderMarkdown)(a),s=this.props.links&&this.props.links.getLinks(e.replaceVariables);return(0,u.jsxs)("div",{className:"panel-info-content markdown-html",children:[(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),s&&s.length>0&&(0,u.jsx)("ul",{className:"panel-info-corner-links",children:s.map((e,t)=>(0,u.jsx)("li",{children:(0,u.jsx)("a",{className:"panel-info-corner-links__item",href:e.href,target:e.target,children:e.title})},t))})]})}),g(this,"onClickError",()=>{d.locationService.partial({inspect:this.props.panel.id,inspectTab:h.q.Error})})}renderCornerType(e,t,a){const r=e===i.Error?"error":"info",o=`panel-info-corner panel-info-corner--${e.toLowerCase()}`,d=l.wl.components.Panels.Panel.headerCornerInfo(e.toLowerCase());return(0,u.jsx)(c.Tooltip,{content:t,placement:"top-start",theme:r,interactive:!0,children:(0,u.jsxs)("section",{className:o,onClick:a,"aria-label":d,children:[n||(n=(0,u.jsx)("i",{"aria-hidden":!0,className:"fa"})),s||(s=(0,u.jsx)("span",{className:"panel-info-corner-inner"}))]})})}render(){const{error:e}=this.props,t=this.getInfoMode();return t?t===i.Error&&e?this.renderCornerType(t,e,this.onClickError):t===i.Info||t===i.Links?this.renderCornerType(t,this.getInfoContent):null:null}}},"./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":(e,t,a)=>{a.d(t,{N:()=>(function(e,t,a,n){const{overrides:i}=a,h=e,u=i.findIndex(r);if(u<0){if(t===s.SeriesVisibilityChangeMode.ToggleSelection){const e=o([h]);return Object.assign({},a,{overrides:[...a.overrides,e]})}const e=p(n,h),i=o(e);return Object.assign({},a,{overrides:[...a.overrides,i]})}const g=Array.from(i),[m]=g.splice(u,1);if(t===s.SeriesVisibilityChangeMode.ToggleSelection){const e=d(m);if(e[0]===h&&1===e.length)return Object.assign({},a,{overrides:g});const t=o([h]);return Object.assign({},a,{overrides:[...g,t]})}const b=l(m,h);if(c(b,n))return Object.assign({},a,{overrides:g});return Object.assign({},a,{overrides:[...g,b]})})});var n=a("./packages/grafana-data/src/index.ts"),s=a("./packages/grafana-ui/src/index.ts");const i="hideSeriesFrom",r=(0,n.isSystemOverrideWithRef)(i);function o(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.ByNamesMatcherMode.exclude,s=arguments.length>2?arguments[2]:void 0;return s=null!==(t=s)&&void 0!==t?t:{id:"custom.hideFrom",value:{viz:!0,legend:!1,tooltip:!1}},{__systemRef:i,matcher:{id:n.FieldMatcherID.byNames,options:{mode:a,names:e,prefix:a===n.ByNamesMatcherMode.exclude?"All except:":void 0,readOnly:!0}},properties:[Object.assign({},s,{value:{viz:!0,legend:!1,tooltip:!1}})]}}const l=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.ByNamesMatcherMode.exclude;const s=e.properties.find(e=>"custom.hideFrom"===e.id),i=d(e),r=i.findIndex(e=>e===t);return r<0?i.push(t):i.splice(r,1),o(i,a,s)},d=e=>{var t;const a=null===(t=e.matcher.options)||void 0===t?void 0:t.names;return Array.isArray(a)?[...a]:[]},c=(e,t)=>d(e).length===p(t).length,p=(e,t)=>{const a=new Set;for(const s of e)for(const i of s.fields){if(i.type!==n.FieldType.number)continue;const r=(0,n.getFieldDisplayName)(i,s,e);r!==t&&a.add(r)}return Array.from(a)}},"./public/app/features/dashboard/state/initDashboard.ts":(e,t,a)=>{a.d(t,{ZQ:()=>S,mV:()=>(function(e){return async(t,a)=>{var k;t((0,y.sf)());const j=await async function(e,t,a){const i=d.Z.getObject(C);if(i)return w(),i;try{switch(e.routeName){case m.vq.Home:{const e=await o.ae.get("/api/dashboards/home");if(e.redirectUri){const t=n.locationUtil.stripBaseFromUrl(e.redirectUri);return s.locationService.replace(t),null}return e.meta.canSave=!1,e.meta.canShare=!1,e.meta.canStar=!1,e}case m.vq.Normal:{const t=await c.pD.loadDashboard(e.urlType,e.urlSlug,e.urlUid);if(e.fixUrl&&t.meta.url){const e=n.locationUtil.stripBaseFromUrl(t.meta.url),a=s.locationService.getLocation().pathname;e!==a&&(s.locationService.replace(Object.assign({},s.locationService.getLocation(),{pathname:e})),console.log("not correct url correcting",e,a))}return t}case m.vq.New:return S(e.urlFolderId);default:throw{message:"Unknown route "+e.routeName}}}catch(e){return e.cancelled?null:(t((0,y.jA)({message:"Failed to fetch dashboard",error:e})),console.error(e),null)}}(e,t);if(!j)return;let I;t((0,y.Nv)());try{I=new x.f(j.dashboard,j.meta)}catch(e){return t((0,y.jA)({message:"Failed create dashboard model",error:e})),void console.error(e)}const P=a(),D=s.locationService.getSearchObject();D.orgId||s.locationService.partial({orgId:P.user.orgId},!0);const E=(0,h.$t)(),N=(0,p.h4)();N.setCurrent(I),E.init(I);const O=(0,g.mn)(null!==(k=e.urlUid)&&void 0!==k?k:I.uid);await t((0,f.LX)(O,I));const A=(0,b.Tl)({dashboard:I,timeSrv:E});if(A.run({dashboard:I,range:E.timeRange()}),(0,v.cp)(a())===O&&a().dashboard.initPhase===m.bG.Services){try{I.processRepeats(),D.autofitpanels&&I.autoFitPanels(window.innerHeight,D.kiosk),l.K.setupDashboardBindings(I)}catch(e){t((0,i.$l)((0,r.t_)("Dashboard init failed",e))),console.error(e)}e.routeName!==m.vq.New?(!function(e){const t={dashboardId:e.id,dashboardName:e.title,dashboardUid:e.uid,folderName:e.meta.folderTitle,eventName:s.MetaAnalyticsEventName.DashboardView};(0,s.reportMetaAnalytics)(t)}(I),u.H.watch(I.uid)):u.H.leave(),""!==I.weekStart?(0,n.setWeekStart)(I.weekStart):(0,n.setWeekStart)(s.config.bootData.user.weekStart),t((0,y.dS)(I))}}}),f1:()=>w,$M:()=>(function(e){d.Z.setObject(C,e)})});var n=a("./packages/grafana-data/src/index.ts"),s=a("./packages/grafana-runtime/src/index.ts"),i=a("./public/app/core/actions/index.ts"),r=a("./public/app/core/copy/appNotification.ts"),o=a("./public/app/core/services/backend_srv.ts"),l=a("./public/app/core/services/keybindingSrv.ts"),d=a("./public/app/core/store.ts"),c=a("./public/app/features/dashboard/services/DashboardLoaderSrv.ts"),p=a("./public/app/features/dashboard/services/DashboardSrv.ts"),h=a("./public/app/features/dashboard/services/TimeSrv.ts"),u=a("./public/app/features/live/dashboard/dashboardWatcher.ts"),g=a("./public/app/features/variables/utils.ts"),m=a("./public/app/types/index.ts"),b=a("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts"),f=a("./public/app/features/variables/state/actions.ts"),v=a("./public/app/features/variables/state/selectors.ts"),x=a("./public/app/features/dashboard/state/DashboardModel.ts");var y=a("./public/app/features/dashboard/state/reducers.ts");function S(e){const t={meta:{canStar:!1,canShare:!1,isNew:!0,folderId:0},dashboard:{title:"New dashboard",panels:[{type:"add-panel",gridPos:{x:0,y:0,w:12,h:9},title:"Panel Title"}]}};return e&&(t.meta.folderId=parseInt(e,10)),t}const C="DASHBOARD_FROM_LS_KEY";function w(){d.Z.delete(C)}},"./public/app/features/dashboard/utils/loadSnapshotData.ts":(e,t,a)=>{a.d(t,{y:()=>(function(e,t){const a=(0,r.F9)(e.snapshotData),d=new i.g,c={dashboard:t,range:(0,n.getDefaultTimeRange)()},p=d.canWork(c)?d.getAnnotationsInSnapshot(t,e.id):[],h=[new n.ArrayDataFrame(p)];return{timeRange:(0,l.W1)(e,(0,o.$t)().timeRange()).timeRange,state:n.LoadingState.Done,series:(0,n.applyFieldOverrides)({data:a,fieldConfig:{defaults:{},overrides:[]},replaceVariables:e.replaceVariables,fieldConfigRegistry:e.plugin.fieldConfigRegistry,theme:s.vc.theme2,timeZone:t.getTimezone()}),annotations:h}})});var n=a("./packages/grafana-data/src/index.ts"),s=a("./public/app/core/config.ts"),i=a("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts"),r=a("./public/app/features/query/state/runRequest.ts"),o=a("./public/app/features/dashboard/services/TimeSrv.ts"),l=a("./public/app/features/dashboard/utils/panel.ts")},"./public/app/features/inspector/types.ts":(e,t,a)=>{let n;a.d(t,{q:()=>n}),function(e){e.Data="data",e.Meta="meta",e.Error="error",e.Stats="stats",e.JSON="json",e.Query="query",e.Actions="actions"}(n||(n={}))},"./public/app/features/panel/panellinks/linkSuppliers.ts":(e,t,a)=>{a.d(t,{H:()=>r,n:()=>i});var n=a("./packages/grafana-data/src/index.ts"),s=a("./public/app/features/panel/panellinks/link_srv.ts");const i=e=>{const t=e.field.links;if(t&&0!==t.length)return{getLinks:a=>{const i={};if(e.view){const{dataFrame:t}=e.view;i.__series={value:{name:t.name,refId:t.refId},text:"Series"};const a=void 0!==e.colIndex?t.fields[e.colIndex]:void 0;if(a){if(i.__field={value:{name:a.name,labels:a.labels},text:"Field"},void 0!==e.rowIndex&&e.rowIndex>=0){const{timeField:s}=(0,n.getTimeField)(t);i.__value={value:{raw:a.values.get(e.rowIndex),numeric:e.display.numeric,text:(0,n.formattedValueToString)(e.display),time:s?s.values.get(e.rowIndex):void 0},text:"Value"}}e.view&&(i.__data={value:{name:t.name,refId:t.refId,fields:(0,n.getFieldDisplayValuesProxy)({frame:t,rowIndex:e.rowIndex})},text:"Data"})}else i.__value={value:{raw:e.display.numeric,numeric:e.display.numeric,text:(0,n.formattedValueToString)(e.display),calc:e.name},text:"Value"}}else console.log("VALUE",e);const r=(e,t,n)=>{const s=Object.assign({},i,t);return a(e,s,n)};return t.map(t=>(0,s.Bq)().getDataLinkUIModel(t,r,e))}}},r=e=>{const t=e.links;if(t&&0!==t.length)return{getLinks:()=>t.map(t=>(0,s.Bq)().getDataLinkUIModel(t,e.replaceVariables,e))}}},"./public/app/features/panel/state/selectors.ts":(e,t,a)=>{a.d(t,{i:()=>(function(e,t){return e.panels[t.key]})})}}]);