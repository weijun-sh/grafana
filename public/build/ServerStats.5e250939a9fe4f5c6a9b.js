"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,a)=>{a.r(s),a.d(s,{ServerStats:()=>E});var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./packages/grafana-runtime/src/index.ts"),i=a("./packages/grafana-ui/src/index.ts"),c=a("./public/app/types/index.ts"),o=a("./public/app/core/services/context_srv.ts"),l=a("./public/app/features/plugins/admin/components/Loader.tsx"),d=a("./packages/grafana-data/src/index.ts"),u=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=()=>{var e;const s=h((0,i.useTheme2)()),[a,n]=(0,t.useState)(!1),[c,o]=(0,t.useState)({mode:"thumbs",theme:r.config.theme2.isLight?"light":"dark"}),l=()=>n(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.Modal,{title:"Start crawler",isOpen:a,onDismiss:l,children:[(0,u.jsx)("div",{className:s.wrap,children:(0,u.jsx)(i.CodeEditor,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{o(JSON.parse(e))}})}),(0,u.jsxs)(i.Modal.ButtonRow,{children:[(0,u.jsx)(i.Button,{type:"submit",onClick:()=>{(0,r.getBackendSrv)().post("/api/admin/crawler/start",c).then((e=>{console.log("GOT",e),l()}))},children:"Start"}),(0,u.jsx)(i.Button,{variant:"secondary",onClick:l,children:"Cancel"})]})]}),(0,u.jsx)(i.Button,{onClick:()=>n(!0),variant:"primary",children:"Start"})]})},h=e=>({wrap:n.css`
      border: 2px solid #111;
    `});var m,x,g;const v=()=>{const e=f((0,i.useTheme2)()),[s,a]=(0,t.useState)();return(0,t.useEffect)((()=>{const e=(0,r.getGrafanaLiveSrv)().getStream({scope:d.LiveChannelScope.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:e=>{((0,d.isLiveChannelMessageEvent)(e)||(0,d.isLiveChannelStatusEvent)(e))&&a(e.message)}});return()=>{e.unsubscribe()}}),[]),s?(0,u.jsxs)("div",{className:e.wrap,children:[(0,u.jsx)("pre",{children:JSON.stringify(s,null,2)}),"running"!==s.state&&(g||(g=(0,u.jsx)(p,{}))),"stopped"!==s.state&&(0,u.jsx)(i.Button,{variant:"secondary",onClick:()=>{(0,r.getBackendSrv)().post("/api/admin/crawler/stop")},children:"Stop"})]}):(0,u.jsxs)("div",{className:e.wrap,children:["No status (never run)",m||(m=(0,u.jsx)("br",{})),x||(x=(0,u.jsx)(p,{}))]})},f=e=>({wrap:n.css`
      border: 4px solid red;
    `,running:n.css`
      border: 4px solid green;
    `}),j=()=>{var e;const s=b((0,i.useTheme2)()),[a,n]=(0,t.useState)(!1),[c,o]=(0,t.useState)({format:"git",git:{}}),l=()=>n(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.Modal,{title:"Export grafana instance",isOpen:a,onDismiss:l,children:[(0,u.jsx)("div",{className:s.wrap,children:(0,u.jsx)(i.CodeEditor,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{o(JSON.parse(e))}})}),(0,u.jsxs)(i.Modal.ButtonRow,{children:[(0,u.jsx)(i.Button,{onClick:()=>{(0,r.getBackendSrv)().post("/api/admin/export",c).then((e=>{console.log("GOT",e),l()}))},children:"Start"}),(0,u.jsx)(i.Button,{variant:"secondary",onClick:l,children:"Cancel"})]})]}),(0,u.jsx)(i.Button,{onClick:()=>n(!0),variant:"primary",children:"Export"})]})},b=e=>({wrap:n.css`
      border: 2px solid #111;
    `});var S,y;const w=()=>{const e=k((0,i.useTheme2)()),[s,a]=(0,t.useState)();return(0,t.useEffect)((()=>{const e=(0,r.getGrafanaLiveSrv)().getStream({scope:d.LiveChannelScope.Grafana,namespace:"broadcast",path:"export"}).subscribe({next:e=>{((0,d.isLiveChannelMessageEvent)(e)||(0,d.isLiveChannelStatusEvent)(e))&&a(e.message)}});return()=>{e.unsubscribe()}}),[]),s?(0,u.jsxs)("div",{className:e.wrap,children:[(0,u.jsx)("pre",{children:JSON.stringify(s,null,2)}),Boolean(!s.running)&&(y||(y=(0,u.jsx)(j,{}))),Boolean(s.running)&&(0,u.jsx)(i.Button,{variant:"secondary",onClick:()=>{(0,r.getBackendSrv)().post("/api/admin/export/stop")},children:"Stop"})]}):(0,u.jsx)("div",{className:e.wrap,children:S||(S=(0,u.jsx)(j,{}))})},k=e=>({wrap:n.css`
      border: 4px solid red;
    `,running:n.css`
      border: 4px solid green;
    `});var N,B,C,L,A,M,O;const E=()=>{const[e,s]=(0,t.useState)(null),[a,n]=(0,t.useState)(!1),d=(0,i.useStyles2)(G),p=o.Vt.hasAccess(c.bW.DataSourcesRead,o.Vt.isGrafanaAdmin),h=o.Vt.hasAccess(c.bW.UsersRead,o.Vt.isGrafanaAdmin);return(0,t.useEffect)((()=>{o.Vt.hasAccess(c.bW.ActionServerStatsRead,o.Vt.isGrafanaAdmin)&&(n(!0),(async()=>(0,r.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),n(!1)})))}),[]),o.Vt.hasAccess(c.bW.ActionServerStatsRead,o.Vt.isGrafanaAdmin)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:d.title,children:"Instance statistics"}),a?(0,u.jsx)("div",{className:d.loader,children:N||(N=(0,u.jsx)(l.a,{text:"Loading instance stats..."}))}):e?(0,u.jsxs)("div",{className:d.row,children:[(0,u.jsx)(T,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:B||(B=(0,u.jsx)(i.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,u.jsxs)("div",{className:d.doubleRow,children:[(0,u.jsx)(T,{content:[{name:"Data sources",value:e.datasources}],footer:p&&(C||(C=(0,u.jsx)(i.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"})))}),(0,u.jsx)(T,{content:[{name:"Alerts",value:e.alerts}],footer:L||(L=(0,u.jsx)(i.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,u.jsx)(T,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:h&&(A||(A=(0,u.jsx)(i.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"})))})]}):(0,u.jsx)("p",{className:d.notFound,children:"No stats found."}),r.config.featureToggles.dashboardPreviews&&r.config.featureToggles.dashboardPreviewsAdmin&&(M||(M=(0,u.jsx)(v,{}))),r.config.featureToggles.export&&(O||(O=(0,u.jsx)(w,{})))]}):null},G=e=>({title:n.css`
      margin-bottom: ${e.spacing(4)};
    `,row:n.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:n.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:n.css`
      height: 290px;
    `,notFound:n.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),T=e=>{let{content:s,footer:a}=e;const n=(0,i.useStyles2)(_);return(0,u.jsx)(i.CardContainer,{className:n.container,disableHover:!0,children:(0,u.jsxs)("div",{className:n.inner,children:[(0,u.jsx)("div",{className:n.content,children:s.map((e=>(0,u.jsxs)("div",{className:n.row,children:[(0,u.jsx)("span",{children:e.name}),(0,u.jsx)("span",{children:e.value})]},e.name)))}),a&&(0,u.jsx)("div",{children:a})]})})},_=e=>({container:n.css`
      padding: ${e.spacing(2)};
    `,inner:n.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:n.css`
      flex: 1 0 auto;
    `,row:n.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,a)=>{a.d(s,{a:()=>r});a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=a("./packages/grafana-ui/src/index.ts"),t=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const r=e=>{let{text:s="Loading..."}=e;return(0,t.jsx)("div",{className:"page-loader-wrapper",children:(0,t.jsx)(n.LoadingPlaceholder,{text:s})})}}}]);