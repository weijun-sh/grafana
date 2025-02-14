"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1281],{"./public/app/features/search/page/SearchPage.tsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>we});var n=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),a=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),o=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),r=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js"),l=s("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),i=s("./packages/grafana-runtime/src/index.ts"),c=s("./packages/grafana-ui/src/index.ts"),d=s("./public/app/core/components/Page/Page.tsx"),u=s("./public/app/features/search/components/PreviewsSystemRequirements.tsx"),p=s("./public/app/features/search/hooks/useSearchQuery.ts"),h=s("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),g=s("./packages/grafana-data/src/index.ts"),m=s("./public/app/plugins/datasource/grafana/types.ts");class f{async search(e){var t;if(null!==(t=e.facet)&&void 0!==t&&t.length)throw"facets not supported!";return v(e)}async list(e){return v({query:`list:${null!=e?e:""}`})}async tags(e){var t;const s=await(0,i.getDataSourceSrv)().get("-- Grafana --"),n=Object.assign({},e,{refId:"A",queryType:m.hR.Search,query:null!==(t=e.query)&&void 0!==t?t:"*",facet:[{field:"tag"}],limit:1}),a=(await(0,h.n)(s.query({targets:[n]}))).data;for(const e of a)if("tag"===e.fields[0].name)return x(e);return[]}}async function v(e){var t,s,n,a,o;const r=await(0,i.getDataSourceSrv)().get("-- Grafana --"),l=Object.assign({},e,{refId:"A",queryType:m.hR.Search,query:null!==(t=e.query)&&void 0!==t?t:"*",limit:50}),c=null!==(s=null===(n=(await(0,h.n)(r.query({targets:[l]}))).data)||void 0===n?void 0:n[0])&&void 0!==s?s:{fields:[],length:0};for(const e of c.fields)e.display=(0,g.getDisplayProcessor)({field:e,theme:i.config.theme2});const d=null===(a=c.meta)||void 0===a?void 0:a.custom,u=new g.DataFrameView(c);return{totalRows:null!==(o=d.count)&&void 0!==o?o:c.length,view:u,loadMoreItems:async(e,t)=>{var s,n;const a=u.dataFrame.length,o=t-a;if(o<0)return;const i=null===(s=(await(0,h.n)(r.query({targets:[Object.assign({},l,{refId:"Page",facet:void 0,from:a,limit:Math.max(o,100)})]}))).data)||void 0===s?void 0:s[0];if(!i)return;if(i.fields.length!==u.dataFrame.fields.length)return;const c=i.length+u.dataFrame.length;for(let e=0;e<i.fields.length;e++){u.dataFrame.fields[e].values.buffer.push(...i.fields[e].values.toArray())}u.dataFrame.length=c;const p=null===(n=i.meta)||void 0===n?void 0:n.custom;if(null!=p&&p.locationInfo&&d)for(const[e,t]of Object.entries(p.locationInfo))d.locationInfo[e]=t},isItemLoaded:e=>e<u.dataFrame.length}}function x(e){const t=e.fields[0].values,s=e.fields[1].values,n=[];for(let a=0;a<e.length;a++)n.push({term:t.get(a),count:s.get(a)});return n}let b;function y(){return b||(b=new f),b}var j=s("./public/app/features/search/types.ts"),w=s("./public/app/core/components/Select/SortPicker.tsx"),S=s("./public/app/core/components/TagFilter/TagFilter.tsx"),C=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const _=[{value:j.A.Folders,icon:"folder",ariaLabel:"View by folders"},{value:j.A.List,icon:"list-ul",ariaLabel:"View as list"}];function I(e){var t;const s=null!==(t=e.layout)&&void 0!==t?t:j.A.Folders;return s===j.A.Folders&&(e.query||e.sort)?j.A.List:s!==j.A.Grid||i.config.featureToggles.dashboardPreviews?s:j.A.List}i.config.featureToggles.dashboardPreviews&&_.push({value:j.A.Grid,icon:"apps",ariaLabel:"Grid view"});const k=e=>{var t;let{onLayoutChange:s,onSortChange:n,onStarredFilterChange:a=(()=>{}),onTagFilterChange:o,getTagOptions:r,onDatasourceChange:l,query:i,showStarredFilter:d,hideLayout:u}=e;const p=(0,c.useStyles2)(R);return(0,C.jsxs)("div",{className:p.actionRow,children:[(0,C.jsx)("div",{className:p.rowContainer,children:(0,C.jsxs)(c.HorizontalGroup,{spacing:"md",width:"auto",children:[!u&&(0,C.jsx)(c.RadioButtonGroup,{options:_,onChange:s,value:I(i)}),(0,C.jsx)(w.P,{onChange:n,value:null===(t=i.sort)||void 0===t?void 0:t.value})]})}),(0,C.jsxs)(c.HorizontalGroup,{spacing:"md",width:"auto",children:[d&&(0,C.jsx)("div",{className:p.checkboxWrapper,children:(0,C.jsx)(c.Checkbox,{label:"Filter by starred",onChange:a,value:i.starred})}),i.datasource&&(0,C.jsxs)(c.Button,{icon:"times",variant:"secondary",onClick:()=>l(void 0),children:["Datasource: ",i.datasource]}),(0,C.jsx)(S.D,{isClearable:!0,tags:i.tag,tagOptions:r,onChange:o})]})]})};k.displayName="ActionRow";const R=e=>({actionRow:n.css`
      display: none;

      @media only screen and (min-width: ${e.v1.breakpoints.md}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${e.v1.spacing.lg} 0;
        width: 100%;
      }
    `,rowContainer:n.css`
      margin-right: ${e.v1.spacing.md};
    `,checkboxWrapper:n.css`
      label {
        line-height: 1.2;
      }
    `});var T,$=s("./packages/grafana-e2e-selectors/src/index.ts"),D=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js"),N=s("./public/app/features/search/utils.ts"),z=s("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts"),F=s("./public/app/features/search/index.ts");const O=e=>{let{section:t,selectionToggle:s,onTagSelected:n,selection:a}=e;const r=null!=s,l=(0,c.useTheme)(),i=L(l,t.selected,r),[d,u]=(0,D.Z)((0,N.tT)(t.title),!1),p=(0,o.Z)((async()=>{if(!d)return Promise.resolve([]);let e={query:"*",kind:["dashboard"],location:t.uid};"Starred"===t.title||t.title;return(await y().search(e)).view.map((e=>{var t;return{uid:e.uid,title:e.name,url:e.url,uri:e.url,type:"folder"===e.kind?j.o.DashFolder:j.o.DashDB,id:666,isStarred:!1,tags:null!==(t=e.tags)&&void 0!==t?t:[],checked:!!a&&a(e.kind,e.uid)}}))}),[d,t]),h=`section-header-label-${(0,z.L)()}`;let g=t.icon;return g||(g=d?"folder-open":"folder"),(0,C.jsx)(c.CollapsableSection,{isOpen:null!=d&&d,onToggle:()=>{u(!d)},className:i.wrapper,contentClassName:i.content,loading:p.loading,labelId:h,label:(0,C.jsxs)(C.Fragment,{children:[s&&a&&(0,C.jsx)("div",{onClick:e=>{},className:i.checkbox,children:(0,C.jsx)(c.Checkbox,{value:a(t.kind,t.uid),"aria-label":"Select folder"})}),(0,C.jsx)("div",{className:i.icon,children:(0,C.jsx)(c.Icon,{name:g})}),(0,C.jsxs)("div",{className:i.text,children:[(0,C.jsx)("span",{id:h,children:t.title}),t.url&&(0,C.jsxs)("a",{href:t.url,className:i.link,children:[(0,C.jsx)("span",{className:i.separator,children:"|"})," ",T||(T=(0,C.jsx)(c.Icon,{name:"folder-upload"}))," Go to folder"]})]})]}),children:p.value&&(0,C.jsx)("ul",{children:p.value.map((e=>(0,C.jsx)(F.T2,{item:e,onTagSelected:n},e.uid)))})})},L=(0,c.stylesFactory)((function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2?arguments[2]:void 0;const{sm:a}=e.spacing;return{wrapper:(0,n.cx)(n.css`
        align-items: center;
        font-size: ${e.typography.size.base};
        padding: 12px;
        border-bottom: none;
        color: ${e.colors.textWeak};
        z-index: 1;

        &:hover,
        &.selected {
          color: ${e.colors.text};
        }

        &:hover,
        &:focus-visible,
        &:focus-within {
          a {
            opacity: 1;
          }
        }
      `,"pointer",{selected:t}),checkbox:n.css`
      padding: 0 ${a} 0 0;
    `,icon:n.css`
      padding: 0 ${a} 0 ${s?0:a};
    `,text:n.css`
      flex-grow: 1;
      line-height: 24px;
    `,link:n.css`
      padding: 2px 10px 0;
      color: ${e.colors.textWeak};
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    `,separator:n.css`
      margin-right: 6px;
    `,content:n.css`
      padding-top: 0px;
      padding-bottom: 0px;
    `}}));var A,M;const P=e=>{let{selection:t,selectionToggle:s,onTagSelected:n}=e;const a=(0,c.useStyles2)(q),r=(0,o.Z)((async()=>{const e=await y().search({query:"*",kind:["folder"]}),t=[{title:"Recent",icon:"clock",kind:"query-recent",uid:"__recent"},{title:"Starred",icon:"star",kind:"query-star",uid:"__starred"},{title:"General",url:"/dashboards",kind:"folder",uid:"general"}];for(const s of e.view)t.push({title:s.name,url:s.url,uid:s.uid,kind:s.kind});return t}),[]);return r.loading?A||(A=(0,C.jsx)(c.Spinner,{})):r.value?(0,C.jsx)("div",{className:a.wrapper,children:r.value.map((e=>(0,C.jsx)("div",{"data-testid":$.wl.components.Search,className:a.section,children:e.title&&(0,C.jsx)(O,{selection:t,selectionToggle:s,onTagSelected:n,section:e})},e.title)))}):M||(M=(0,C.jsx)("div",{children:"?"}))},q=e=>{const{md:t,sm:s}=e.v1.spacing;return{virtualizedGridItemWrapper:n.css`
      padding: 4px;
    `,wrapper:n.css`
      display: flex;
      flex-direction: column;

      > ul {
        list-style: none;
      }
    `,section:n.css`
      display: flex;
      flex-direction: column;
      background: ${e.v1.colors.panelBg};
      border-bottom: solid 1px ${e.v1.colors.border2};
    `,sectionItems:n.css`
      margin: 0 24px 0 32px;
    `,spinner:n.css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
    `,gridContainer:n.css`
      display: grid;
      gap: ${s};
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      margin-bottom: ${t};
    `,resultsContainer:n.css`
      position: relative;
      flex-grow: 10;
      margin-bottom: ${t};
      background: ${e.v1.colors.bg1};
      border: 1px solid ${e.v1.colors.border1};
      border-radius: 3px;
      height: 100%;
    `,noResults:n.css`
      padding: ${t};
      background: ${e.v1.colors.bg2};
      font-style: italic;
      margin-top: ${e.v1.spacing.md};
    `,listModeWrapper:n.css`
      position: relative;
      height: 100%;
      padding: ${t};
    `}};var G=s("./public/app/core/services/context_srv.ts"),B=s("./public/app/features/search/constants.ts"),H=s("./public/app/features/manage-dashboards/state/actions.ts");const W=e=>{var t,s;let{results:n,onDeleteItems:a,isOpen:o,onDismiss:r}=e;const l=(0,c.useTheme)(),i=U(l),d=Array.from(null!==(t=n.get("dashboard"))&&void 0!==t?t:[]),u=Array.from(null!==(s=n.get("folder"))&&void 0!==s?s:[]),p=u.length,h=d.length;let g,m="Do you want to delete the ";const f=1===h?"":"s",v=1===p?"":"s";p>0&&h>0?(m+=`selected folder${v} and dashboard${f}?\n`,g=`All dashboards and alerts of the selected folder${v} will also be deleted`):m+=p>0?`selected folder${v} and all ${1===p?"its":"their"} dashboards and alerts?`:`${h} selected dashboard${f}?`;return o?(0,C.jsx)(c.ConfirmModal,{isOpen:o,title:"Delete",body:(0,C.jsxs)(C.Fragment,{children:[m," ",g&&(0,C.jsx)("div",{className:i.subtitle,children:g})]}),confirmText:"Delete",onConfirm:()=>{(0,H.Fd)(u,d).then((()=>{r(),a(u,d)}))},onDismiss:r}):null},U=(0,c.stylesFactory)((e=>({subtitle:n.css`
      font-size: ${e.typography.size.base};
      padding-top: ${e.spacing.md};
    `})));var E=s("./public/app/core/components/Select/FolderPicker.tsx"),Z=s("./public/app/core/copy/appNotification.ts");const V=e=>{var t;let{results:s,onMoveItems:n,isOpen:o,onDismiss:r}=e;const[l,i]=(0,a.useState)(null),d=(0,c.useTheme)(),u=Q(d),p=(0,Z.iG)(),h=Array.from(null!==(t=s.get("dashboard"))&&void 0!==t?t:[]);return o?(0,C.jsx)(c.Modal,{className:u.modal,title:"Choose Dashboard Folder",icon:"folder-plus",isOpen:o,onDismiss:r,children:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:u.content,children:[(0,C.jsxs)("p",{children:["Move the ",h.length," selected dashboard",1===h.length?"":"s"," to the following folder:"]}),(0,C.jsx)(E.E,{onChange:e=>i(e)})]}),(0,C.jsxs)(c.HorizontalGroup,{justify:"center",children:[(0,C.jsx)(c.Button,{variant:"primary",onClick:()=>{if(l&&h.length){var e;const t=null!==(e=l.title)&&void 0!==e?e:"General";(0,H.ct)(h,l).then((e=>{if(e.successCount>0){const s=1===e.successCount?"":"s",n=`Dashboard${s} Moved`,a=`${e.successCount} dashboard${s} moved to ${t}`;p.success(n,a)}e.totalCount===e.alreadyInFolderCount?p.error("Error",`Dashboard already belongs to folder ${t}`):n(h,l),r()}))}},children:"Move"}),(0,C.jsx)(c.Button,{variant:"secondary",onClick:r,children:"Cancel"})]})]})}):null},Q=(0,c.stylesFactory)((e=>({modal:n.css`
      width: 500px;
    `,content:n.css`
      margin-bottom: ${e.spacing.lg};
    `})));function Y(e){var t;let{items:s,folder:n}=e;const o=(0,c.useStyles2)(R),r=null==n?void 0:n.canSave,l=n?r:G.Vt.hasEditPermissionInFolders,i=l,d=Array.from(null!==(t=s.get("folders"))&&void 0!==t?t:[]).find((e=>e===B.YQ)),u=l&&!d,[p,h]=(0,a.useState)(!1),[g,m]=(0,a.useState)(!1);return(0,C.jsxs)("div",{className:o.actionRow,children:[(0,C.jsx)("div",{className:o.rowContainer,children:(0,C.jsxs)(c.HorizontalGroup,{spacing:"md",width:"auto",children:[(0,C.jsx)(c.Checkbox,{value:!1,onClick:()=>{alert("TODO, toggle all....")}}),(0,C.jsx)(c.Button,{disabled:!i,onClick:()=>{h(!0)},icon:"exchange-alt",variant:"secondary",children:"Move"}),(0,C.jsx)(c.Button,{disabled:!u,onClick:()=>{m(!0)},icon:"trash-alt",variant:"destructive",children:"Delete"}),[...s.keys()].map((e=>{const t=s.get(e);return(0,C.jsxs)("div",{children:[e," (",null==t?void 0:t.size,")"]},e)}))]})}),(0,C.jsx)(W,{onDeleteItems:(e,t)=>{},results:s,isOpen:g,onDismiss:()=>m(!1)}),(0,C.jsx)(V,{onMoveItems:(e,t)=>{},results:s,isOpen:p,onDismiss:()=>h(!1)})]})}var K=s("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");var J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),ee=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};const te=function(e){function t(){var e,s,n;J(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return s=n=ee(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n._lastRenderedStartIndex=-1,n._lastRenderedStopIndex=-1,n._memoizedUnloadedRanges=[],n._onItemsRendered=function(e){var t=e.visibleStartIndex,s=e.visibleStopIndex;n._lastRenderedStartIndex=t,n._lastRenderedStopIndex=s,n._ensureRowsLoaded(t,s)},n._setRef=function(e){n._listRef=e},ee(n,s)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),X(t,[{key:"resetloadMoreItemsCache",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._memoizedUnloadedRanges=[],e&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){return(0,this.props.children)({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(e,t){var s=this.props,n=s.isItemLoaded,a=s.itemCount,o=s.minimumBatchSize,r=void 0===o?10:o,l=s.threshold,i=void 0===l?15:l,c=function(e){for(var t=e.isItemLoaded,s=e.itemCount,n=e.minimumBatchSize,a=e.startIndex,o=e.stopIndex,r=[],l=null,i=null,c=a;c<=o;c++)t(c)?null!==i&&(r.push(l,i),l=i=null):(i=c,null===l&&(l=c));if(null!==i){for(var d=Math.min(Math.max(i,l+n-1),s-1),u=i+1;u<=d&&!t(u);u++)i=u;r.push(l,i)}if(r.length)for(;r[1]-r[0]+1<n&&r[0]>0;){var p=r[0]-1;if(t(p))break;r[0]=p}return r}({isItemLoaded:n,itemCount:a,minimumBatchSize:r,startIndex:Math.max(0,e-i),stopIndex:Math.min(a-1,t+i)});(this._memoizedUnloadedRanges.length!==c.length||this._memoizedUnloadedRanges.some((function(e,t){return c[t]!==e})))&&(this._memoizedUnloadedRanges=c,this._loadUnloadedRanges(c))}},{key:"_loadUnloadedRanges",value:function(e){for(var t=this,s=this.props.loadMoreItems||this.props.loadMoreRows,n=function(n){var a=e[n],o=e[n+1],r=s(a,o);null!=r&&r.then((function(){if(function(e){var t=e.lastRenderedStartIndex,s=e.lastRenderedStopIndex,n=e.startIndex,a=e.stopIndex;return!(n>s||a<t)}({lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:a,stopIndex:o})){if(null==t._listRef)return;"function"==typeof t._listRef.resetAfterIndex?t._listRef.resetAfterIndex(a,!0):("function"==typeof t._listRef._getItemStyleCache&&t._listRef._getItemStyleCache(-1),t._listRef.forceUpdate())}}))},a=0;a<e.length;a+=2)n(a)}}]),t}(a.PureComponent);var se=s("./public/app/features/search/components/SearchCard.tsx");const ne=e=>{var t;let{response:s,width:n,height:a,selection:o,selectionToggle:r,onTagSelected:l,onDatasourceChange:i}=e;const d=(0,c.useStyles2)(ae),u={editable:null!=o,onToggleChecked:e=>{const t=e,s=t.type===j.o.DashFolder?"folder":"dashboard";r&&r(s,t.uid)},onTagSelected:l},p=null!==(t=s.totalRows)&&void 0!==t?t:s.view.length,h=s.view,g=Math.ceil(n/320),m=n/g,f=.75*(m-64)+56+8,v=Math.ceil(p/g);return(0,C.jsx)(te,{isItemLoaded:s.isItemLoaded,itemCount:p,loadMoreItems:s.loadMoreItems,children:e=>{let{onItemsRendered:t,ref:s}=e;return(0,C.jsx)(K.Ym,{columnCount:g,columnWidth:m,rowCount:v,rowHeight:f,className:d.wrapper,innerElementType:"ul",height:a,width:n-2,children:e=>{var t,s;let{columnIndex:n,rowIndex:a,style:r}=e;const l=a*g+n;if(l>=h.length)return null;const i=h.get(l),c=null!==(t=i.kind)&&void 0!==t?t:"dashboard",p={uid:i.uid,title:i.name,url:i.url,uri:i.url,type:"folder"===c?j.o.DashFolder:j.o.DashDB,id:666,isStarred:!1,tags:null!==(s=i.tags)&&void 0!==s?s:[],checked:!!o&&o(c,i.uid)};return i?(0,C.jsx)("li",{style:r,className:d.virtualizedGridItemWrapper,children:(0,C.jsx)(se.K,Object.assign({},u,{item:p}),i.uid)}):null}})}})},ae=e=>({virtualizedGridItemWrapper:n.css`
    padding: 4px;
  `,wrapper:n.css`
    display: flex;
    flex-direction: column;

    > ul {
      list-style: none;
    }
  `});var oe=s("./.yarn/__virtual__/react-table-virtual-3932e42729/0/cache/react-table-npm-7.7.0-95e9357cd2-a679edecc7.zip/node_modules/react-table/index.js"),re=s("./packages/grafana-ui/src/components/Table/TableCell.tsx"),le=s("./packages/grafana-ui/src/components/Table/styles.ts"),ie=s("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js"),ce=s("./packages/grafana-ui/src/components/Table/DefaultCell.tsx");const de=(e,t,s,a,o,r,l)=>{var d;const u=[],p=e.view.fields,h=p.uid,g=p.kind;let m=50;s&&a&&(m=30,u.push({id:"column-checkbox",width:m,Header:()=>(0,C.jsx)("div",{className:o.checkboxHeader,children:(0,C.jsx)(c.Checkbox,{onChange:e=>{e.stopPropagation(),e.preventDefault(),alert("SELECT ALL!!!")}})}),Cell:e=>{const t=h.values.get(e.row.index),n=g?g.values.get(e.row.index):"dashboard",r=s(n,t),l=null!=t;return(0,C.jsx)("div",Object.assign({},e.cellProps,{className:e.cellStyle,children:(0,C.jsx)("div",{className:o.checkbox,children:(0,C.jsx)(c.Checkbox,{disabled:!l,value:r&&l,onChange:e=>{a(n,t)}})})}))},field:h}),t-=m),m=Math.max(.2*t,300),u.push({Cell:e=>{const t=p.name.values.get(e.row.index);return(0,C.jsx)("a",Object.assign({},e.cellProps,{href:e.userProps.href,className:(0,n.cx)(e.cellStyle,o.cellWrapper),children:t}))},id:"column-name",field:p.name,Header:"Name",width:m}),t-=m,m=130,u.push(function(e,t,s,n){return{Cell:ce.G,id:"column-type",field:null!=e?e:t,Header:"Type",accessor:(s,a)=>{var o;const r=null!==(o=null==e?void 0:e.values.get(a))&&void 0!==o?o:"dashboard";let l="public/img/icons/unicons/apps.svg",c="Dashboard";if(r)switch(c=r,c){case"dashboard":c="Dashboard";break;case"folder":l="public/img/icons/unicons/folder.svg",c="Folder";break;case"panel":l="public/img/icons/unicons/graph-bar.svg";const e=t.values.get(a);if(e){c=e;const t=i.config.panels[c];if(null!=t&&t.name){var d;const e=null===(d=t.info)||void 0===d?void 0:d.logos.small;e&&e.endsWith(".svg")&&(l=e),c=t.name}}}return(0,C.jsxs)("div",{className:n.typeText,children:[(0,C.jsx)(ie.Z,{src:l,width:14,height:14,title:c,className:n.typeIcon}),c]})},width:s}}(p.kind,p.panel_type,m,o)),t-=m,p.ds_uid&&l&&(m=200,u.push(function(e,t,s,a,o,r){const l=(0,i.getDataSourceSrv)();return{id:"column-datasource",field:e,Header:"Data source",Cell:t=>{const i=e.values.get(t.row.index);return null!=i&&i.length?(0,C.jsx)("div",Object.assign({},t.cellProps,{className:(0,n.cx)(t.cellStyle,a),children:i.map(((e,t)=>{var n,a,i;const c=l.getInstanceSettings(e),d=null==c||null===(n=c.meta)||void 0===n||null===(a=n.info)||void 0===a||null===(i=a.logos)||void 0===i?void 0:i.small;return d?(0,C.jsxs)("span",{onClick:e=>{e.stopPropagation(),e.preventDefault(),r(c.uid)},children:[(0,C.jsx)("img",{src:d,width:14,height:14,title:c.type,className:s}),c.name]},t):(0,C.jsx)("span",{className:o,children:e},t)}))})):null},width:t}}(p.ds_uid,m,o.typeIcon,o.datasourceItem,o.invalidDatasourceItem,l)),t-=m),p.tags&&(m=200,u.push(function(e,t,s,n){return{Cell:t=>{var a;const o=e.values.get(t.row.index);return o?(0,C.jsx)("div",Object.assign({},t.cellProps,{className:t.cellStyle,children:a||(a=(0,C.jsx)(c.TagList,{className:s,tags:o,onClick:n}))})):null},id:"column-tags",field:e,Header:"Tags",width:t}}(p.tags,m,o.tagList,r)),t-=m),m=Math.max(t,200);const f=null===(d=e.view.dataFrame.meta)||void 0===d?void 0:d.custom;var v;null!=f&&f.locationInfo&&u.push({Cell:e=>{var t,s;const a=(null!==(t=null===(s=p.location)||void 0===s?void 0:s.values.get(e.row.index))&&void 0!==t?t:"").split("/");return(0,C.jsx)("div",Object.assign({},e.cellProps,{className:(0,n.cx)(e.cellStyle,n.css`
                padding-right: 10px;
              `),children:a.map((e=>{const t=f.locationInfo[e];return t?(0,C.jsxs)("a",{href:t.url,className:o.locationItem,children:[(0,C.jsx)(c.Icon,{name:ue(t.kind)})," ",t.name]},e):(0,C.jsx)("span",{children:e},e)}))}))},id:"column-location",field:null!==(v=p.location)&&void 0!==v?v:p.url,Header:"Location",width:m});return u};function ue(e){return"dashboard"===e?"apps":"folder"===e?"folder":"question-circle"}const pe=["key"],he=["key"];function ge(e,t){if(null==e)return{};var s,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}const me=e=>{var t;let{response:s,width:n,height:o,selection:r,selectionToggle:l,onTagSelected:i,onDatasourceChange:d}=e;const u=(0,c.useStyles2)(fe),p=(0,c.useStyles2)(le.V),h=(0,a.useMemo)((()=>{var e;return null!=s&&null!==(e=s.view)&&void 0!==e&&e.dataFrame.fields.length?Array(s.totalRows).fill(0):[]}),[s]),g=(0,a.useMemo)((()=>de(s,n,r,l,u,i,d)),[s,n,u,r,l,i,d]),m=(0,a.useMemo)((()=>({columns:g,data:h})),[g,h]),{getTableProps:f,getTableBodyProps:v,headerGroups:x,rows:b,prepareRow:y}=(0,oe.useTable)(m,oe.useAbsoluteLayout),j=a.useCallback((e=>{var t;let{index:n,style:a}=e;const o=b[n];y(o);const r=null===(t=s.view.fields.url)||void 0===t?void 0:t.values.get(n);return(0,C.jsx)("div",Object.assign({},o.getRowProps({style:a}),{className:u.rowContainer,children:o.cells.map(((e,t)=>(0,C.jsx)(re.p,{tableStyles:p,cell:e,columnIndex:t,columnCount:o.cells.length,userProps:{href:r}},t)))}))}),[b,y,null===(t=s.view.fields.url)||void 0===t?void 0:t.values,u.rowContainer,p]);return b.length?(0,C.jsxs)("div",Object.assign({},f(),{"aria-label":"Search result table",role:"table",children:[(0,C.jsx)("div",{children:x.map((e=>{const t=e.getHeaderGroupProps(),{key:s}=t,n=ge(t,pe);return(0,C.jsx)("div",Object.assign({},n,{className:u.headerRow,children:e.headers.map((e=>{const t=e.getHeaderProps(),{key:s}=t,n=ge(t,he);return(0,C.jsx)("div",Object.assign({},n,{role:"columnheader",className:u.headerCell,children:e.render("Header")}),s)}))}),s)}))}),(0,C.jsx)("div",Object.assign({},v(),{children:(0,C.jsx)(te,{isItemLoaded:s.isItemLoaded,itemCount:b.length,loadMoreItems:s.loadMoreItems,children:e=>{let{onItemsRendered:t,ref:s}=e;return(0,C.jsx)(K.t7,{ref:s,onItemsRendered:t,height:o-36,itemCount:b.length,itemSize:p.rowHeight,width:"100%",style:{overflow:"hidden auto"},children:j})}})}))]})):(0,C.jsx)("div",{className:u.noData,children:"No data"})},fe=e=>{const t=e.colors.emphasize(e.colors.background.primary,.03);return{noData:n.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,table:n.css`
      width: 100%;
    `,cellIcon:n.css`
      display: flex;
      align-items: center;
    `,cellWrapper:n.css`
      border-right: none;
      &:hover {
        box-shadow: none;
      }
    `,headerCell:n.css`
      padding-top: 2px;
      padding-left: 10px;
    `,headerRow:n.css`
      background-color: ${e.colors.background.secondary};
      height: ${36}px;
      align-items: center;
    `,rowContainer:n.css`
      label: row;
      &:hover {
        background-color: ${t};
      }

      &:not(:hover) div[role='cell'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,typeIcon:n.css`
      margin-left: 5px;
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${e.v1.spacing.xxs};
      fill: ${e.colors.text.secondary};
    `,datasourceItem:n.css`
      span {
        &:hover {
          color: ${e.colors.text.link};
        }
      }
    `,invalidDatasourceItem:n.css`
      color: ${e.colors.error.main};
      text-decoration: line-through;
    `,typeText:n.css`
      color: ${e.colors.text.secondary};
    `,locationItem:n.css`
      color: ${e.colors.text.secondary};
      margin-right: 12px;
    `,checkboxHeader:n.css`
      // display: flex;
      // justify-content: flex-start;
    `,checkbox:n.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,infoWrap:n.css`
      color: ${e.colors.text.secondary};
      span {
        margin-right: 10px;
      }
    `,tagList:n.css`
      justify-content: flex-start;
      flex-wrap: nowrap;
    `}};var ve,xe,be,ye;const je={id:"search",text:"Search playground",subTitle:"The body below will eventually live inside existing UI layouts",icon:"dashboard",url:"search"};function we(){const e=(0,c.useStyles2)(Se),{query:t,onQueryChange:s,onTagFilterChange:h,onDatasourceChange:g,onSortChange:m,onLayoutChange:f}=(0,p.A)({}),[v,x]=(0,a.useState)(!1),[b,w]=(0,a.useState)(function(){const e=new Map;return{items:e,isSelected:(t,s)=>{var n;return Boolean(null===(n=e.get(t))||void 0===n?void 0:n.has(s))}}}()),S=I(t),_=S===j.A.Folders,R=(0,o.Z)((()=>{var e;let s=t.query;null!==(e=s)&&void 0!==e&&e.length||(s="*");const n={query:s,tags:t.tag,ds_uid:t.datasource};return y().search(n)}),[t,S]),[T,$]=(0,a.useState)("");if((0,r.Z)((()=>s(T)),200,[T]),!i.config.featureToggles.panelTitleSearch)return(0,C.jsx)("div",{className:e.unsupported,children:"Unsupported"});const D=e=>{h([...new Set(t.tag).add(e)])},N=(e,t)=>{const s=b.isSelected(e,t);w(function(e,t,s,n){const a=e.items;if(n.length){const e=a.get(s);if(e){for(const s of n)t?e.add(s):e.delete(s);e.size<1&&a.delete(s)}else t&&a.set(s,new Set(n))}return{items:a,isSelected:(e,t)=>{var s;return Boolean(null===(s=a.get(e))||void 0===s?void 0:s.has(t))}}}(b,!s,e,[t]))};return(0,C.jsx)(d.Z,{navModel:{node:je,main:je},children:(0,C.jsxs)(d.Z.Contents,{className:n.css`
          display: flex;
          flex-direction: column;
        `,children:[(0,C.jsx)(c.Input,{value:T,onChange:e=>{e.preventDefault(),$(e.currentTarget.value)},autoFocus:!0,spellCheck:!1,placeholder:"Search for dashboards and panels",className:e.searchInput,suffix:R.loading?ye||(ye=(0,C.jsx)(c.Spinner,{})):null}),(0,C.jsx)(c.InlineFieldRow,{children:(0,C.jsx)(c.InlineField,{label:"Show manage options",children:(0,C.jsx)(c.InlineSwitch,{value:v,onChange:()=>x(!v)})})}),Boolean(b.items.size>0)?(0,C.jsx)(Y,{items:b.items}):(0,C.jsx)(k,{onLayoutChange:e=>{e===j.A.Folders&&t.query&&s(""),f(e)},onSortChange:m,onTagFilterChange:h,getTagOptions:()=>{var e;const s={query:null!==(e=t.query)&&void 0!==e?e:"*",tags:t.tag,ds_uid:t.datasource};return y().tags(s)},onDatasourceChange:g,query:t}),S===j.A.Grid&&(0,C.jsx)(u.R,{bottomSpacing:3,showPreviews:!0,onRemove:()=>f(j.A.List)}),(()=>{const n=R.value;if(!(n&&n.totalRows||_))return R.loading&&!n?ve||(ve=(0,C.jsx)(c.Spinner,{})):(0,C.jsxs)("div",{className:e.noResults,children:[xe||(xe=(0,C.jsx)("div",{children:"No results found for your query."})),be||(be=(0,C.jsx)("br",{})),(0,C.jsx)(c.Button,{variant:"secondary",onClick:()=>{var e;t.query&&s(""),null!==(e=t.tag)&&void 0!==e&&e.length&&h([]),t.datasource&&g(void 0)},children:"Remove search constraints"})]});const a=v?b.isSelected:void 0;return S===j.A.Folders?(0,C.jsx)(P,{selection:a,selectionToggle:N,onTagSelected:D}):(0,C.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,C.jsx)(l.Z,{children:e=>{let{width:s,height:o}=e;const r={response:n,selection:a,selectionToggle:N,width:s,height:o,onTagSelected:D,onDatasourceChange:t.datasource?g:void 0};return S===j.A.Grid?(0,C.jsx)(ne,Object.assign({},r)):(0,C.jsx)(me,Object.assign({},r))}})})})()]})})}const Se=e=>({searchInput:n.css`
    margin-bottom: 6px;
  `,unsupported:n.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,noResults:n.css`
    padding: ${e.v1.spacing.md};
    background: ${e.v1.colors.bg2};
    font-style: italic;
    margin-top: ${e.v1.spacing.md};
  `})},"./public/app/plugins/datasource/grafana/types.ts":(e,t,s)=>{let n;s.d(t,{_$:()=>o,hR:()=>n,wi:()=>a}),function(e){e.LiveMeasurements="measurements",e.Annotations="annotations",e.RandomWalk="randomWalk",e.List="list",e.Read="read",e.Search="search"}(n||(n={}));const a={refId:"A",queryType:n.RandomWalk};let o;!function(e){e.Dashboard="dashboard",e.Tags="tags"}(o||(o={}))}}]);