"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6784],{"./public/app/angular/AngularLocationWrapper.ts":(t,e,a)=>{a.d(e,{O:()=>r});var s=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-runtime/src/index.ts");const i={http:80,https:443,ftp:21};class r{constructor(){this.absUrl=this.wrapInDeprecationWarning(this.absUrl),this.hash=this.wrapInDeprecationWarning(this.hash),this.host=this.wrapInDeprecationWarning(this.host),this.path=this.wrapInDeprecationWarning(this.path),this.port=this.wrapInDeprecationWarning(this.port,"window.location"),this.protocol=this.wrapInDeprecationWarning(this.protocol,"window.location"),this.replace=this.wrapInDeprecationWarning(this.replace),this.search=this.wrapInDeprecationWarning(this.search),this.state=this.wrapInDeprecationWarning(this.state),this.url=this.wrapInDeprecationWarning(this.url)}wrapInDeprecationWarning(t,e){let a=this;return function(){return(0,s.deprecationWarning)("$location",t.name,e||"locationService"),t.apply(a,arguments)}}absUrl(){return`${window.location.origin}${this.url()}`}hash(t){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: hash"),t)throw new Error("AngularLocationWrapper method not implemented.");return n.locationService.getLocation().hash.slice(1)}host(){return new URL(window.location.href).hostname}path(t){(0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: path");const e=n.locationService.getLocation();if(null!=t){let a=String(t);a=a.startsWith("/")?a:`/${a}`;const s=new URL(`${window.location.origin}${a}`);return n.locationService.push({pathname:s.pathname,search:s.search.length>0?s.search:e.search,hash:s.hash.length>0?s.hash:e.hash}),this}return null===t?(n.locationService.push("/"),this):e.pathname}port(){const t=new URL(window.location.href);return parseInt(t.port,10)||i[t.protocol]||null}protocol(){return new URL(window.location.href).protocol.slice(0,-1)}replace(){throw new Error("AngularLocationWrapper method not implemented.")}search(t,e){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: search"),!t)return n.locationService.getSearchObject();if(t&&arguments.length>1)return n.locationService.partial({[t]:e}),this;if(t){let e;e="object"==typeof t?Object.assign({},t):(0,n.locationSearchToObject)(t);for(const t of Object.keys(e))null!==e[t]&&void 0!==e[t]||delete e[t];const a=s.urlUtil.renderUrl(n.locationService.getLocation().pathname,e);n.locationService.push(a)}return this}state(t){throw(0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: state"),new Error("AngularLocationWrapper method not implemented.")}url(t){if((0,n.navigationLogger)("AngularLocationWrapper",!1,"Angular compat layer: url"),void 0!==t)return t.startsWith("#")?n.locationService.push(Object.assign({},n.locationService.getLocation(),{hash:t})):t.startsWith("?")?n.locationService.push(Object.assign({},n.locationService.getLocation(),{search:t})):0===t.trim().length?n.locationService.push("/"):n.locationService.push(t),n.locationService;const e=n.locationService.getLocation();return`${e.pathname}${e.search}${e.hash}`}}},"./public/app/angular/panel/metrics_panel_ctrl.ts":(t,e,a)=>{a.d(e,{k:()=>o});var s=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=a("./packages/grafana-data/src/index.ts"),i=a("./public/app/angular/panel/panel_ctrl.ts"),r=a("./public/app/features/dashboard/utils/panel.ts");function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class o extends i.q{constructor(t,e){super(t,e),l(this,"contextSrv",void 0),l(this,"datasourceSrv",void 0),l(this,"timeSrv",void 0),l(this,"templateSrv",void 0),l(this,"interval",void 0),l(this,"intervalMs",void 0),l(this,"resolution",void 0),l(this,"timeInfo",void 0),l(this,"skipDataOnInit",!1),l(this,"dataList",[]),l(this,"querySubscription",void 0),l(this,"useDataFrames",!1),l(this,"panelData",void 0),l(this,"panelDataObserver",{next:t=>{if(this.panelData=t,t.state===n.LoadingState.Error&&(this.loading=!1,this.processDataError(t.error)),t.state===n.LoadingState.Loading)return this.loading=!0,void this.angularDirtyCheck();if(t.request){const{timeInfo:e}=t.request;e&&(this.timeInfo=e)}if(t.timeRange&&(this.range=t.timeRange),this.useDataFrames)this.handleDataFrames(t.series);else{const e=t.series.map((t=>(0,n.toLegacyResponseData)(t)));this.handleQueryResult({data:e})}this.angularDirtyCheck()}}),this.contextSrv=e.get("contextSrv"),this.datasourceSrv=e.get("datasourceSrv"),this.timeSrv=e.get("timeSrv"),this.templateSrv=e.get("templateSrv"),this.panel.datasource=this.panel.datasource||null,this.events.on(n.PanelEvents.refresh,this.onMetricsPanelRefresh.bind(this)),this.events.on(n.PanelEvents.panelTeardown,this.onPanelTearDown.bind(this)),this.events.on(n.PanelEvents.componentDidMount,this.onMetricsPanelMounted.bind(this))}onMetricsPanelMounted(){const t=this.panel.getQueryRunner();this.querySubscription=t.getData({withTransforms:!0,withFieldConfig:!0}).subscribe(this.panelDataObserver)}onPanelTearDown(){this.querySubscription&&(this.querySubscription.unsubscribe(),this.querySubscription=null)}onMetricsPanelRefresh(){if(!this.otherPanelInFullscreenMode()){if(this.panel.snapshotData){this.updateTimeRange();let t=this.panel.snapshotData;return(0,s.isArray)(t)||(t=t.data),this.panelData={state:n.LoadingState.Done,series:t,timeRange:this.range},this.$timeout((()=>{this.events.emit(n.PanelEvents.dataSnapshotLoad,t)}))}return delete this.error,this.loading=!0,this.datasourceSrv.get(this.panel.datasource,this.panel.scopedVars).then(this.issueQueries.bind(this)).catch((t=>{this.processDataError(t)}))}}processDataError(t){t.cancelled||(this.error=t.message||"Request Error",t.data&&(t.data.message?this.error=t.data.message:t.data.error&&(this.error=t.data.error)),this.angularDirtyCheck())}angularDirtyCheck(){this.$scope.$root.$$phase||this.$scope.$digest()}updateTimeRange(t){this.datasource=t||this.datasource,this.range=this.timeSrv.timeRange();const e=(0,r.W1)(this.panel,this.range);this.timeInfo=e.timeInfo,this.range=e.timeRange}issueQueries(t){this.updateTimeRange(t),this.datasource=t;const e=this.panel;return e.getQueryRunner().run({datasource:e.datasource,queries:e.targets,panelId:e.id,dashboardId:this.dashboard.id,timezone:this.dashboard.getTimezone(),timeInfo:this.timeInfo,timeRange:this.range,maxDataPoints:e.maxDataPoints||this.width,minInterval:e.interval,scopedVars:e.scopedVars,cacheTimeout:e.cacheTimeout,transformations:e.transformations})}handleDataFrames(t){this.loading=!1,this.dashboard&&this.dashboard.snapshot&&(this.panel.snapshotData=t.map((t=>(0,n.toDataFrameDTO)(t))));try{this.events.emit(n.PanelEvents.dataFramesReceived,t)}catch(t){this.processDataError(t)}}handleQueryResult(t){this.loading=!1,this.dashboard.snapshot&&(this.panel.snapshotData=t.data),t&&t.data||(t={data:[]});try{this.events.emit(n.PanelEvents.dataReceived,t.data)}catch(t){this.processDataError(t)}}}},"./public/app/angular/panel/panel_ctrl.ts":(t,e,a)=>{a.d(e,{q:()=>h});var s=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=a("./packages/grafana-data/src/index.ts"),i=a("./public/app/angular/AngularLocationWrapper.ts"),r=a("./public/app/core/config.ts"),l=a("./public/app/core/core.ts");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class h{constructor(t,e){var a,s;o(this,"panel",void 0),o(this,"error",void 0),o(this,"pluginName",""),o(this,"pluginId",""),o(this,"editorTabs",void 0),o(this,"$scope",void 0),o(this,"$injector",void 0),o(this,"$timeout",void 0),o(this,"editModeInitiated",!1),o(this,"containerHeight",void 0),o(this,"events",void 0),o(this,"loading",!1),o(this,"timing",void 0),o(this,"$location",void 0),o(this,"onPluginTypeChange",(t=>{})),this.panel=null!==(a=this.panel)&&void 0!==a?a:t.$parent.panel,this.dashboard=null!==(s=this.dashboard)&&void 0!==s?s:t.$parent.dashboard,this.$injector=e,this.$scope=t,this.$timeout=e.get("$timeout"),this.editorTabs=[],this.$location=new i.O,this.events=new n.EventBusSrv,this.timing={};const l=r.ZP.panels[this.panel.type];l&&(this.pluginId=l.id,this.pluginName=l.name),t.$on(n.PanelEvents.componentDidMount.name,(()=>this.panelDidMount()))}panelDidMount(){this.events.emit(n.PanelEvents.componentDidMount),this.events.emit(n.PanelEvents.initialized),this.dashboard.panelInitialized(this.panel)}renderingCompleted(){l.rv.renderingCompleted()}refresh(){this.panel.refresh()}publishAppEvent(t,e){this.$scope.$root.appEvent(t,e)}initEditMode(){this.editModeInitiated||(this.editModeInitiated=!0,this.events.emit(n.PanelEvents.editModeInitialized))}addEditorTab(t,e,a,n){const i={title:t,directiveFn:e,icon:n};(0,s.isString)(e)&&(i.directiveFn=()=>({templateUrl:e})),a?this.editorTabs.splice(a,0,i):this.editorTabs.push(i)}getExtendedMenu(){const t=[];return this.events.emit(n.PanelEvents.initPanelActions,t),t}async getAdditionalMenuItems(){return[]}otherPanelInFullscreenMode(){return this.dashboard.otherPanelInFullscreen(this.panel)}render(t){this.events.emit(n.PanelEvents.render,t)}}},"./public/app/angular/panel/query_ctrl.ts":(t,e,a)=>{a.d(e,{G:()=>i});var s=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class i{constructor(t,e){var a,i,r,l,o;this.$scope=t,this.$injector=e,n(this,"target",void 0),n(this,"datasource",void 0),n(this,"panelCtrl",void 0),n(this,"panel",void 0),n(this,"hasRawMode",void 0),n(this,"error",void 0),n(this,"isLastQuery",void 0),this.$scope=t,this.$injector=e,this.panelCtrl=null!==(a=this.panelCtrl)&&void 0!==a?a:t.ctrl.panelCtrl,this.target=null!==(i=this.target)&&void 0!==i?i:t.ctrl.target,this.datasource=null!==(r=this.datasource)&&void 0!==r?r:t.ctrl.datasource,this.panel=null!==(l=null===(o=this.panelCtrl)||void 0===o?void 0:o.panel)&&void 0!==l?l:t.ctrl.panelCtrl.panel,this.isLastQuery=(0,s.indexOf)(this.panel.targets,this.target)===this.panel.targets.length-1}refresh(){this.panelCtrl.refresh()}}},"./public/app/plugins/panel/table-old/module.ts":(t,e,a)=>{a.r(e),a.d(e,{TablePanelCtrl:()=>$,plugin:()=>k});var s=a("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js"),n=a.n(s),i=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),r=a("./packages/grafana-data/src/index.ts"),l=a("./public/app/core/config.ts"),o=a("./public/app/features/variables/adhoc/actions.ts"),h=a("./public/app/plugins/sdk.ts"),c=a("./public/app/store/store.ts");function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class p{constructor(t){u(this,"panel",void 0),u(this,"panelCtrl",void 0),u(this,"colorModes",void 0),u(this,"columnStyles",void 0),u(this,"columnTypes",void 0),u(this,"fontSizes",void 0),u(this,"dateFormats",void 0),u(this,"addColumnSegment",void 0),u(this,"unitFormats",void 0),u(this,"getColumnNames",void 0),u(this,"activeStyleIndex",void 0),u(this,"mappingTypes",void 0),u(this,"alignTypes",void 0),t.editor=this,this.activeStyleIndex=0,this.panelCtrl=t.ctrl,this.panel=this.panelCtrl.panel,this.unitFormats=(0,r.getValueFormats)(),this.colorModes=[{text:"Disabled",value:null},{text:"Cell",value:"cell"},{text:"Value",value:"value"},{text:"Row",value:"row"}],this.columnTypes=[{text:"Number",value:"number"},{text:"String",value:"string"},{text:"Date",value:"date"},{text:"Hidden",value:"hidden"}],this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.dateFormats=[{text:"YYYY-MM-DD HH:mm:ss",value:"YYYY-MM-DD HH:mm:ss"},{text:"YYYY-MM-DD HH:mm:ss.SSS",value:"YYYY-MM-DD HH:mm:ss.SSS"},{text:"MM/DD/YY h:mm:ss a",value:"MM/DD/YY h:mm:ss a"},{text:"MMMM D, YYYY LT",value:"MMMM D, YYYY LT"},{text:"YYYY-MM-DD",value:"YYYY-MM-DD"}],this.mappingTypes=[{text:"Value to text",value:1},{text:"Range to text",value:2}],this.alignTypes=p.alignTypesEnum,this.getColumnNames=()=>this.panelCtrl.table?(0,i.map)(this.panelCtrl.table.columns,(t=>t.text)):[],this.onColorChange=this.onColorChange.bind(this)}render(){this.panelCtrl.render()}setUnitFormat(t){return e=>{t.unit=e,this.panelCtrl.render()}}addColumnStyle(){const t=this.panel.styles,e=t.length;let a=e;if(e>0){"/.*/"===t[e-1].pattern&&(a=e-1)}t.splice(a,0,{unit:"short",type:"number",alias:"",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"",dateFormat:"YYYY-MM-DD HH:mm:ss",thresholds:[],mappingType:1,align:"auto"}),this.activeStyleIndex=a}removeColumnStyle(t){this.panel.styles=(0,i.without)(this.panel.styles,t)}invertColorOrder(t){const e=this.panel.styles[t].colors,a=e[0];e[0]=e[2],e[2]=a,this.panelCtrl.render()}onColorChange(t,e){return a=>{t.colors[e]=a,this.render()}}addValueMap(t){t.valueMaps||(t.valueMaps=[]),t.valueMaps.push({value:"",text:""}),this.panelCtrl.render()}removeValueMap(t,e){t.valueMaps.splice(e,1),this.panelCtrl.render()}addRangeMap(t){t.rangeMaps||(t.rangeMaps=[]),t.rangeMaps.push({from:"",to:"",text:""}),this.panelCtrl.render()}removeRangeMap(t,e){t.rangeMaps.splice(e,1),this.panelCtrl.render()}}function d(){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table-old/column_options.html",controller:p}}p.$inject=["$scope"],u(p,"alignTypesEnum",[{text:"auto",value:""},{text:"left",value:"left"},{text:"center",value:"center"},{text:"right",value:"right"}]);var m=a("./public/app/core/table_model.ts"),g=a("./public/app/core/time_series2.ts"),v=a("./public/app/core/utils/flatten.ts");const f={},b=t=>Array.isArray(t)?t.reduce(((t,e)=>e.datapoints?t.concat(e):t),[]):t.datapoints?[t]:[],y=t=>Array.isArray(t)?t.reduce(((t,e)=>e.columns?t.concat(e):t),[]):t.columns?[t]:[];function S(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}f.timeseries_to_rows={description:"Time series to rows",getColumns:()=>[],transform:(t,e,a)=>{a.columns=[{text:"Time",type:"date"},{text:"Metric"},{text:"Value"}];const s=b(t);for(let t=0;t<s.length;t++){const e=s[t];for(let t=0;t<e.datapoints.length;t++){const s=e.datapoints[t];a.rows.push([s[1],e.target,s[0]])}}}},f.timeseries_to_columns={description:"Time series to columns",getColumns:()=>[],transform:(t,e,a)=>{a.columns.push({text:"Time",type:"date"});const s={},n=b(t);for(let t=0;t<n.length;t++){const e=n[t];a.columns.push({text:e.target});for(let a=0;a<e.datapoints.length;a++){const n=e.datapoints[a],i=n[1].toString();s[i]||(s[i]={time:n[1]}),s[i][t]=n[0]}}for(const t in s){const e=s[t],i=[e.time];for(let t=0;t<n.length;t++){const a=e[t];i.push(a)}a.rows.push(i)}}},f.timeseries_aggregations={description:"Time series aggregations",getColumns:()=>[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Total",value:"total"},{text:"Current",value:"current"},{text:"Count",value:"count"}],transform:(t,e,a)=>{let s,n;for(a.columns.push({text:"Metric"}),s=0;s<e.columns.length;s++)a.columns.push({text:e.columns[s].text});const i=b(t);for(s=0;s<i.length;s++){const t=new g.Z({datapoints:i[s].datapoints,alias:i[s].target});t.getFlotPairs("connected");const r=[t.alias];for(n=0;n<e.columns.length;n++)r.push(t.stats[e.columns[n].value]);a.rows.push(r)}}},f.annotations={description:"Annotations",getColumns:()=>[],transform:(t,e,a)=>{if(a.columns.push({text:"Time",type:"date"}),a.columns.push({text:"Title"}),a.columns.push({text:"Text"}),a.columns.push({text:"Tags"}),t&&t.annotations&&0!==t.annotations.length)for(let e=0;e<t.annotations.length;e++){const s=t.annotations[e];a.rows.push([s.time,s.title,s.text,s.tags])}}},f.table={description:"Table",getColumns:t=>{if(!t||0===t.length)return[];if(1===t.length)return[...t[0].columns];const e=y(t),a={};return e.reduce(((t,e)=>(e.columns.forEach((e=>{const{text:s}=e;void 0===a[s]&&(a[s]=t.length,t.push(e))})),t)),[])},transform:(t,e,a)=>{if(!t||0===t.length)return;const s=y(t),n=(0,i.findIndex)(s,(t=>"columns"in t&&"rows"in t));if(n<0)throw{message:`Result of query #${String.fromCharCode(65+n)} is not in table format, try using another transform.`};(0,m.M)(a,...s)}},f.json={description:"JSON Data",getColumns:t=>{if(!t||0===t.length)return[];const e={};for(let a=0;a<t.length;a++){const s=t[a];if("docs"!==s.type)continue;const n=Math.min(s.datapoints.length,100);for(let t=0;t<n;t++){const a=s.datapoints[t],n=(0,v.default)(a,{});for(const t in n)e[t]=!0}}return(0,i.map)(e,((t,e)=>({text:e,value:e})))},transform:(t,e,a)=>{let s,n,r;for(const s of e.columns){const e={text:s.text};t.length>0&&t[0].filterable&&(e.filterable=!0),a.columns.push(e)}for(0===a.columns.length&&a.columns.push({text:"JSON"}),s=0;s<t.length;s++){const l=t[s];for(n=0;n<l.datapoints.length;n++){const t=l.datapoints[n],s=[];if((0,i.isObject)(t)&&e.columns.length>0){const a=(0,v.default)(t);for(r=0;r<e.columns.length;r++)s.push(a[e.columns[r].value])}else s.push(JSON.stringify(t));a.rows.push(s)}}}};class C{constructor(t,e){this.uiSegmentSrv=e,S(this,"panel",void 0),S(this,"panelCtrl",void 0),S(this,"transformers",void 0),S(this,"fontSizes",void 0),S(this,"addColumnSegment",void 0),S(this,"getColumnNames",void 0),S(this,"canSetColumns",!1),S(this,"columnsHelpMessage",""),this.uiSegmentSrv=e,t.editor=this,this.panelCtrl=t.ctrl,this.panel=this.panelCtrl.panel,this.transformers=f,this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.addColumnSegment=e.newPlusButton(),this.updateTransformHints()}updateTransformHints(){switch(this.canSetColumns=!1,this.columnsHelpMessage="",this.panel.transform){case"timeseries_aggregations":case"json":this.canSetColumns=!0;break;case"table":this.columnsHelpMessage="Columns and their order are determined by the data query"}}getColumnOptions(){if(!this.panelCtrl.dataRaw)return Promise.resolve([]);const t=this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),e=(0,i.map)(t,(t=>this.uiSegmentSrv.newSegment({value:t.text})));return Promise.resolve(e)}addColumn(){const t=f[this.panel.transform].getColumns(this.panelCtrl.dataRaw),e=(0,i.find)(t,{text:this.addColumnSegment.value});e&&(this.panel.columns.push(e),this.render());const a=this.uiSegmentSrv.newPlusButton();this.addColumnSegment.html=a.html,this.addColumnSegment.value=a.value}transformChanged(){this.panel.columns=[],"annotations"===this.panel.transform?this.panelCtrl.refresh():("timeseries_aggregations"===this.panel.transform&&this.panel.columns.push({text:"Avg",value:"avg"}),this.updateTransformHints(),this.render())}render(){this.panelCtrl.render()}removeColumn(t){this.panel.columns=(0,i.without)(this.panel.columns,t),this.panelCtrl.render()}}function w(t){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table-old/editor.html",controller:C}}C.$inject=["$scope","uiSegmentSrv"];var x=a("./packages/grafana-runtime/src/index.ts");function M(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class D{constructor(t,e,a,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,x.getTemplateSrv)(),i=arguments.length>5?arguments[5]:void 0;this.panel=t,this.table=e,this.timeZone=a,this.sanitize=s,this.templateSrv=n,this.theme=i,M(this,"formatters",[]),M(this,"colorState",void 0),this.panel=t,this.table=e,this.timeZone=a,this.sanitize=s,this.templateSrv=n,this.theme=i,this.initColumns()}setTable(t){this.table=t,this.initColumns()}initColumns(){this.formatters=[],this.colorState={};for(let t=0;t<this.table.columns.length;t++){const e=this.table.columns[t];e.title=e.text;for(let t=0;t<this.panel.styles.length;t++){const a=this.panel.styles[t],s=(0,r.stringStartsAsRegEx)(a.pattern)?a.pattern:(0,r.escapeStringForRegex)((0,r.unEscapeStringFromRegex)(a.pattern)),n=(0,r.stringToJsRegex)(s);if(e.text.match(n)){e.style=a,a.alias&&(e.title=r.textUtil.escapeHtml(e.text.replace(n,a.alias)));break}}this.formatters[t]=this.createColumnFormatter(e)}}getColorForValue(t,e){if(!e.thresholds||!e.colors)return null;for(let a=e.thresholds.length;a>0;a--)if(t>=e.thresholds[a-1])return(0,r.getColorForTheme)(e.colors[a],this.theme);return(0,r.getColorForTheme)((0,i.first)(e.colors),this.theme)}defaultCellFormatter(t,e){return null==t||void 0===t?"":((0,i.isArray)(t)&&(t=t.join(", ")),e&&e.sanitize?this.sanitize(t):(0,i.escape)(t))}createColumnFormatter(t){if(!t.style)return this.defaultCellFormatter;if("hidden"===t.style.type)return t=>{};if("date"===t.style.type)return e=>null==e?"-":((0,i.isArray)(e)&&(e=e[0]),(0,i.isString)(e)&&!isNaN(e)&&e.length>12&&(e=parseInt(e,10)),t.style.dateFormat?(0,r.dateTimeFormat)(e,{format:t.style.dateFormat,timeZone:this.timeZone}):(0,r.dateTimeFormatISO)(e,{timeZone:this.timeZone}));if("string"===t.style.type)return e=>{(0,i.isArray)(e)&&(e=e.join(", "));const a=t.style.mappingType||0;if(1===a&&t.style.valueMaps)for(let a=0;a<t.style.valueMaps.length;a++){const s=t.style.valueMaps[a];if(null!==e){if(!(0,i.isString)(e)&&Number(s.value)===Number(e)||s.value===e)return this.setColorState(e,t.style),this.defaultCellFormatter(s.text,t.style)}else if("null"===s.value)return s.text}if(2===a&&t.style.rangeMaps)for(let a=0;a<t.style.rangeMaps.length;a++){const s=t.style.rangeMaps[a];if(null!==e){if(Number(s.from)<=Number(e)&&Number(s.to)>=Number(e))return this.setColorState(e,t.style),this.defaultCellFormatter(s.text,t.style)}else if("null"===s.from&&"null"===s.to)return s.text}return null==e?"-":(this.setColorState(e,t.style),this.defaultCellFormatter(e,t.style))};if("number"===t.style.type){const e=(0,r.getValueFormat)(t.unit||t.style.unit);return a=>null==a?"-":isNaN(a)||(0,i.isArray)(a)?this.defaultCellFormatter(a,t.style):(this.setColorState(a,t.style),(0,r.formattedValueToString)(e(a,t.style.decimals,null)))}return e=>this.defaultCellFormatter(e,t.style)}setColorState(t,e){if(!e.colorMode)return;if(null==t||(0,i.isArray)(t))return;const a=Number(t);isNaN(a)||(this.colorState[e.colorMode]=this.getColorForValue(a,e))}renderRowVariables(t){const e={};let a;const s=this.table.rows[t];for(let t=0;t<s.length;t++)a=`__cell_${t}`,e[a]={value:s[t],text:s[t]?s[t].toString():""};return e}formatColumnValue(t,e){const a=this.formatters[t];return a?a(e):e}renderCell(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];a=this.formatColumnValue(t,a);const n=this.table.columns[t],l=[];let o="";const h=[];let c="";this.colorState.cell?(l.push("background-color:"+this.colorState.cell),h.push("table-panel-color-cell"),this.colorState.cell=null):this.colorState.value&&(l.push("color:"+this.colorState.value),this.colorState.value=null);let u="";if(s&&(u='<div class="table-panel-width-hack">'+this.table.columns[t].title+"</div>"),void 0===a?(l.push("display:none"),n.hidden=!0):n.hidden=!1,!0===n.hidden)return"";if(n.style&&n.style.preserveFormat&&h.push("table-panel-cell-pre"),n.style&&n.style.align){const t=(0,i.find)(p.alignTypesEnum,["text",n.style.align]);t&&t.value&&l.push(`text-align:${t.value}`)}if(l.length&&(o=' style="'+l.join(";")+'"'),n.style&&n.style.link){const t=this.renderRowVariables(e);t.__cell={value:a,text:a?a.toString():""};const s=this.templateSrv.replace(n.style.linkUrl,t,encodeURIComponent),i=r.textUtil.sanitizeUrl(s),l=r.textUtil.escapeHtml(this.templateSrv.replace(n.style.linkTooltip,t)),c=n.style.linkTargetBlank?"_blank":"";h.push("table-panel-cell-link"),u+=`<a href="${i}" target="${c}" data-link-tooltip data-original-title="${l}" data-placement="right"${o}>`,u+=`${a}`,u+="</a>"}else u+=a;return n.filterable&&(h.push("table-panel-cell-filterable"),u+=`<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"\n           data-row="${e}" data-column="${t}" data-operator="!=">`,u+='<i class="fa fa-search-minus"></i>',u+="</a>",u+=`<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"\n           data-row="${e}" data-column="${t}" data-operator="=">`,u+='<i class="fa fa-search-plus"></i>',u+="</a>"),h.length&&(c=' class="'+h.join(" ")+'"'),u="<td"+c+o+">"+u+"</td>",u}render(t){const e=this.panel.pageSize||100,a=t*e,s=Math.min(a+e,this.table.rows.length);let n="";for(let t=a;t<s;t++){const e=this.table.rows[t];let s="",i="";const r=[];let l="";for(let n=0;n<this.table.columns.length;n++)s+=this.renderCell(n,t,e[n],t===a);this.colorState.row&&(i=' style="background-color:'+this.colorState.row+'"',r.push("table-panel-color-row"),this.colorState.row=null),r.length&&(l=' class="'+r.join(" ")+'"'),n+="<tr "+l+i+">"+s+"</tr>"}return n}render_values(){const t=[],e=this.table.columns.filter((t=>!t.hidden));for(let e=0;e<this.table.rows.length;e++){const a=this.table.rows[e],s=[];for(let t=0;t<this.table.columns.length;t++)this.table.columns[t].hidden||s.push(this.formatColumnValue(t,a[t]));t.push(s)}return{columns:e,rows:t}}}function T(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class $ extends h.MetricsPanelCtrl{constructor(t,e,a,s){super(t,e),this.annotationsSrv=a,this.$sanitize=s,T(this,"pageIndex",void 0),T(this,"dataRaw",void 0),T(this,"table",void 0),T(this,"renderer",void 0),T(this,"panelHasRowColorMode",void 0),T(this,"panelHasLinks",void 0),T(this,"panelDefaults",{targets:[{}],transform:"timeseries_to_columns",pageSize:null,showHeader:!0,styles:[{type:"date",pattern:"Time",alias:"Time",dateFormat:"YYYY-MM-DD HH:mm:ss",align:"auto"},{unit:"short",type:"number",alias:"",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"/.*/",thresholds:[],align:"right"}],columns:[],fontSize:"100%",sort:{col:0,desc:!0}}),this.annotationsSrv=a,this.$sanitize=s,this.pageIndex=0,void 0===this.panel.styles&&(this.panel.styles=this.panel.columns,this.panel.columns=this.panel.fields,delete this.panel.columns,delete this.panel.fields),(0,i.defaults)(this.panel,this.panelDefaults),this.panelHasRowColorMode=Boolean(this.panel.styles.find((t=>"row"===t.colorMode))),this.panelHasLinks=Boolean(this.panel.styles.find((t=>t.link))),this.events.on(r.PanelEvents.dataReceived,this.onDataReceived.bind(this)),this.events.on(r.PanelEvents.dataSnapshotLoad,this.onDataReceived.bind(this)),this.events.on(r.PanelEvents.editModeInitialized,this.onInitEditMode.bind(this))}onInitEditMode(){this.addEditorTab("Options",w,2),this.addEditorTab("Column Styles",d,3)}migrateToPanel(t){this.onPluginTypeChange(l.ZP.panels[t])}issueQueries(t){return this.pageIndex=0,"annotations"===this.panel.transform?this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}).then((t=>(this.loading=!1,this.dataRaw=t,this.pageIndex=0,this.render(),{data:this.dataRaw}))):super.issueQueries(t)}onDataReceived(t){this.dataRaw=t,this.pageIndex=0,this.dataRaw&&this.dataRaw.length&&((0,r.isTableData)(this.dataRaw[0])?this.panel.transform="table":"docs"===this.dataRaw[0].type?this.panel.transform="json":"table"!==this.panel.transform&&"json"!==this.panel.transform||(this.panel.transform="timeseries_to_rows")),this.render()}render(){return this.table=function(t,e){const a=new m.Z;if(!t||0===t.length)return a;const s=f[e.transform];if(!s)throw{message:"Transformer "+e.transform+" not found"};return s.transform(t,e,a),a}(this.dataRaw,this.panel),this.table.sort(this.panel.sort),this.renderer=new D(this.panel,this.table,this.dashboard.getTimezone(),this.$sanitize,this.templateSrv,l.ZP.theme),super.render(this.table)}toggleColumnSort(t,e){this.table.columns[this.panel.sort.col]&&(this.table.columns[this.panel.sort.col].sort=!1),this.panel.sort.col===e?this.panel.sort.desc?this.panel.sort.desc=!1:this.panel.sort.col=null:(this.panel.sort.col=e,this.panel.sort.desc=!0),this.render()}link(t,e,a,s){let i;const l=s.panel;let h=0;function u(){let t=s.height;return h>1&&(t-=26),t-31+"px"}function p(){const t=e.parents(".panel-content"),a=e.find(".table-panel-scroll"),r=e.find("tbody"),o=e.find(".table-panel-footer");e.css({"font-size":l.fontSize}),t.addClass("table-panel-content"),function(t){s.renderer.setTable(i),t.empty(),t.html(s.renderer.render(s.pageIndex))}(r),function(t){t.empty();const e=l.pageSize||100;if(h=Math.ceil(i.rows.length/e),1===h)return;const a=Math.max(s.pageIndex-3,0),r=Math.min(h,a+9),o=n()("<ul></ul>");for(let t=a;t<r;t++){const e=t===s.pageIndex?"active":"",a=n()('<li><a class="table-panel-page-link pointer '+e+'">'+(t+1)+"</a></li>");o.append(a)}t.append(o)}(o),a.css({"max-height":u()})}e.tooltip({selector:"[data-link-tooltip]"}),e.on("click",".table-panel-page-link",(function(t){const e=n()(t.currentTarget);s.pageIndex=parseInt(e.text(),10)-1,p()})),e.on("click",".table-panel-filter-link",(function(t){const e=n()(t.currentTarget).data(),a={datasource:l.datasource,key:i.columns[e.column].text,value:i.rows[e.row][e.column],operator:e.operator};(0,c.WI)((0,o.m2)(a))}));const d=t.$on("$destroy",(()=>{e.off("click",".table-panel-page-link"),e.off("click",".table-panel-filter-link"),d()}));s.events.on(r.PanelEvents.render,(t=>{i=t||i,i&&p(),s.renderingCompleted()}))}}$.$inject=["$scope","$injector","annotationsSrv","$sanitize"],T($,"templateUrl","module.html");const k=new r.PanelPlugin(null);k.angularPanelCtrl=$,k.setNoPadding()},"./public/app/plugins/sdk.ts":(t,e,a)=>{a.r(e),a.d(e,{MetricsPanelCtrl:()=>h,PanelCtrl:()=>o,QueryCtrl:()=>c,loadPluginCss:()=>n.loadPluginCss});var s=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-runtime/src/index.ts"),i=a("./public/app/angular/panel/metrics_panel_ctrl.ts"),r=a("./public/app/angular/panel/panel_ctrl.ts"),l=a("./public/app/angular/panel/query_ctrl.ts");const o=(0,s.makeClassES5Compatible)(r.q),h=(0,s.makeClassES5Compatible)(i.k),c=(0,s.makeClassES5Compatible)(l.G)}}]);