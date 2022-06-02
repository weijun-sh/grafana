"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9975],{"./public/app/features/playlist/PlaylistForm.tsx":(e,a,t)=>{t.d(a,{H:()=>k});var s=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./packages/grafana-e2e-selectors/src/index.ts"),i=t("./packages/grafana-runtime/src/index.ts"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),o=t.n(r),c=t("./public/app/core/services/backend_srv.ts"),d=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=e=>{let{onChange:a,value:t,width:s,isClearable:l=!1,invalid:i,disabled:r,id:p,optionLabel:u="label"}=e;const m=o()(e=>(async function(e,a){return(await c.ae.search({type:"dash-db",query:e,limit:100})).map(e=>{let{id:t,uid:s="",title:l,folderTitle:i}=e;const n={id:t,uid:s,[a]:`${null!==i&&void 0!==i?i:"General"}/${l}`};return{value:n,[a]:n[a]}})})(e||"",u),300),b=t?{value:t,[u]:t[u]}:void 0;return(0,d.jsx)(n.AsyncSelect,{inputId:p,width:s,isClearable:l,defaultOptions:!0,loadOptions:m,onChange:e=>{a(null===e||void 0===e?void 0:e.value)},placeholder:"Select dashboard",noOptionsMessage:"No dashboards found",value:b,invalid:i,disabled:r,getOptionLabel:e=>e[u]})};var u=t("./public/app/core/components/TagFilter/TagFilter.tsx"),m=t("./public/app/core/services/search_srv.ts"),b=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),g=t("./public/app/core/components/TagFilter/TagBadge.tsx");const v=e=>{let{item:a,onDelete:t,onMoveDown:s,onMoveUp:i,first:r,last:o}=e;const c=(0,n.useStyles)(y);return(0,d.jsxs)("tr",{"aria-label":l.wl.pages.PlaylistForm.itemRow,children:["dashboard_by_id"===a.type?(0,d.jsxs)("td",{className:(0,b.cx)(c.td,c.item),children:[(0,d.jsx)(n.Icon,{name:"apps","aria-label":l.wl.pages.PlaylistForm.itemIdType}),(0,d.jsx)("span",{children:a.title})]}):null,"dashboard_by_tag"===a.type?(0,d.jsxs)("td",{className:(0,b.cx)(c.td,c.item),children:[(0,d.jsx)(n.Icon,{name:"tag-alt","aria-label":l.wl.pages.PlaylistForm.itemTagType}),(0,d.jsx)(g.e,{label:a.title,removeIcon:!1,count:0},a.id)]}):null,(0,d.jsxs)("td",{className:(0,b.cx)(c.td,c.settings),children:[r?null:(0,d.jsx)(n.IconButton,{name:"arrow-up",size:"md",onClick:e=>{e.preventDefault(),i(a)},"aria-label":l.wl.pages.PlaylistForm.itemMoveUp,type:"button"}),o?null:(0,d.jsx)(n.IconButton,{name:"arrow-down",size:"md",onClick:e=>{e.preventDefault(),s(a)},"aria-label":l.wl.pages.PlaylistForm.itemMoveDown,type:"button"}),(0,d.jsx)(n.IconButton,{name:"times",size:"md",onClick:e=>{e.preventDefault(),t(a)},"aria-label":l.wl.pages.PlaylistForm.itemDelete,type:"button"})]})]},a.title)};function y(e){return{td:b.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,item:b.css`
      label: item;
      span {
        margin-left: ${e.spacing.xs};
      }
    `,settings:b.css`
      label: settings;
      text-align: right;
    `}}var h;const x=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return 0===a.length?h||(h=(0,d.jsx)("tr",{children:(0,d.jsx)("td",{children:(0,d.jsx)("em",{children:"Playlist is empty. Add dashboards below."})})})):(0,d.jsx)(d.Fragment,{children:a.map((e,i)=>{const n=0===i,r=i===a.length-1;return(0,d.jsx)(v,{first:n,last:r,item:e,onDelete:l,onMoveDown:s,onMoveUp:t},e.title)})})};var f;const j=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return(0,d.jsxs)("div",{className:"gf-form-group",children:[f||(f=(0,d.jsx)("h3",{className:"page-headering",children:"Dashboards"})),(0,d.jsx)("table",{className:"filter-table",children:(0,d.jsx)("tbody",{children:(0,d.jsx)(x,{items:a,onMoveUp:t,onMoveDown:s,onDelete:l})})})]})};var w;const _=new m.i,k=e=>{var a,t;let{onSubmit:r,playlist:o}=e;const{name:c,interval:m,items:b}=o,{items:g,addById:v,addByTag:y,deleteItem:h,moveDown:x,moveUp:f}=function(e){const[a,t]=(0,s.useState)(null!==e&&void 0!==e?e:[]),l=(0,s.useCallback)(e=>{if(!e||a.find(a=>a.id===e.id))return;const s={id:e.id,title:e.label,type:"dashboard_by_id",value:e.id.toString(10),order:a.length+1};t([...a,s])},[a]),i=(0,s.useCallback)(e=>{const s=e[0];if(!s||a.find(e=>e.value===s))return;const l={title:s,type:"dashboard_by_tag",value:s,order:a.length+1};t([...a,l])},[a]),n=(0,s.useCallback)((e,s)=>{const l=[...a],i=l.indexOf(e),n=i+s;n>=0&&n<l.length&&(l.splice(i,1),l.splice(n,0,e)),t(l)},[a]),r=(0,s.useCallback)(e=>{n(e,-1)},[n]),o=(0,s.useCallback)(e=>{n(e,1)},[n]),c=(0,s.useCallback)(e=>{t(a.filter(a=>a!==e))},[a]);return{items:a,addById:l,addByTag:i,deleteItem:c,moveDown:o,moveUp:r}}(b);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Form,{onSubmit:e=>r(Object.assign({},e,{items:g})),validateOn:"onBlur",children:e=>{var s,r;let{register:o,errors:b}=e;const k=0===g.length||Object.keys(b).length>0;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Field,{label:"Name",invalid:!!b.name,error:null===b||void 0===b?void 0:null===(s=b.name)||void 0===s?void 0:s.message,children:(0,d.jsx)(n.Input,Object.assign({type:"text"},o("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:c,"aria-label":l.wl.pages.PlaylistForm.name}))}),(0,d.jsx)(n.Field,{label:"Interval",invalid:!!b.interval,error:null===b||void 0===b?void 0:null===(r=b.interval)||void 0===r?void 0:r.message,children:(0,d.jsx)(n.Input,Object.assign({type:"text"},o("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!==m&&void 0!==m?m:"5m","aria-label":l.wl.pages.PlaylistForm.interval}))}),a||(a=(0,d.jsx)(j,{items:g,onMoveUp:f,onMoveDown:x,onDelete:h})),(0,d.jsxs)("div",{className:"gf-form-group",children:[w||(w=(0,d.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),t||(t=(0,d.jsx)(n.Field,{label:"Add by title",children:(0,d.jsx)(p,{onChange:v,id:"dashboard-picker",isClearable:!0})})),(0,d.jsx)(n.Field,{label:"Add by tag",children:(0,d.jsx)(u.D,{isClearable:!0,tags:[],hideValues:!0,tagOptions:_.getDashboardTags,onChange:y,placeholder:""})})]}),(0,d.jsxs)(n.HorizontalGroup,{children:[(0,d.jsx)(n.Button,{variant:"primary",disabled:k,children:"Save"}),(0,d.jsx)(n.LinkButton,{variant:"secondary",href:`${i.config.appSubUrl}/playlists`,children:"Cancel"})]})]})}})})}},"./public/app/features/playlist/PlaylistNewPage.tsx":(e,a,t)=>{t.r(a),t.d(a,{PlaylistNewPage:()=>m,default:()=>b});t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),l=t("./packages/grafana-runtime/src/index.ts"),i=t("./packages/grafana-ui/src/index.ts"),n=t("./public/app/core/components/Page/Page.tsx"),r=t("./public/app/core/selectors/navModel.ts"),o=t("./public/app/features/playlist/PlaylistForm.tsx"),c=t("./public/app/features/playlist/api.ts"),d=t("./public/app/features/playlist/styles.ts"),p=t("./public/app/features/playlist/usePlaylist.tsx"),u=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{navModel:a}=e;const t=(0,i.useStyles2)(d.e),{playlist:s,loading:r}=(0,p.Z)();return(0,u.jsx)(n.Z,{navModel:a,children:(0,u.jsxs)(n.Z.Contents,{isLoading:r,children:[(0,u.jsx)("h3",{className:t.subHeading,children:"New Playlist"}),(0,u.jsx)("p",{className:t.description,children:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."}),(0,u.jsx)(o.H,{onSubmit:async e=>{await(0,c.cg)(e),l.locationService.push("/playlists")},playlist:s})]})})},b=(0,s.connect)(e=>({navModel:(0,r.h)(e.navIndex,"playlists")}))(m)},"./public/app/features/playlist/api.ts":(e,a,t)=>{t.d(a,{A5:()=>(async function(e){return await(0,s.getBackendSrv)().get(`/api/playlists/${e}`)}),CE:()=>(async function(e,a){await r(()=>(0,s.getBackendSrv)().put(`/api/playlists/${e}`,a))}),Dv:()=>(async function(e){return await(0,s.getBackendSrv)().get("/api/playlists/",{query:e})}),cg:()=>(async function(e){await r(()=>(0,s.getBackendSrv)().post("/api/playlists",e))}),l8:()=>(async function(e){await r(()=>(0,s.getBackendSrv)().delete(`/api/playlists/${e}`),"Playlist deleted")})});var s=t("./packages/grafana-runtime/src/index.ts"),l=t("./public/app/core/actions/index.ts"),i=t("./public/app/core/copy/appNotification.ts"),n=t("./public/app/store/store.ts");async function r(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Playlist saved";try{await e(),(0,n.WI)((0,l.$l)((0,i.AT)(a)))}catch(e){(0,n.WI)((0,l.$l)((0,i.t_)("Unable to save playlist",e)))}}},"./public/app/features/playlist/styles.ts":(e,a,t)=>{t.d(a,{e:()=>(function(e){return{description:s.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,subHeading:s.css`
      label: sub-heading;
      margin-bottom: ${e.spacing(2)};
    `}})});var s=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js")},"./public/app/features/playlist/usePlaylist.tsx":(e,a,t)=>{t.d(a,{Z:()=>(function(e){const[a,t]=(0,s.useState)({items:[],interval:"5m",name:""}),[i,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{(async()=>{if(!e)return void n(!1);const a=await(0,l.A5)(e);t(a),n(!1)})()},[e]),{playlist:a,loading:i}})});var s=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./public/app/features/playlist/api.ts")}}]);