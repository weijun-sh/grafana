"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9834,7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,t)=>{t.r(s),t.d(s,{ServerStats:()=>G});var a=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=t("./packages/grafana-runtime/src/index.ts"),r=t("./packages/grafana-ui/src/index.ts"),c=t("./public/app/types/index.ts"),l=t("./public/app/core/services/context_srv.ts"),o=t("./public/app/features/plugins/admin/components/Loader.tsx"),d=t("./packages/grafana-data/src/index.ts"),p=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const u=()=>{var e;const s=x((0,r.useTheme2)()),[t,a]=(0,n.useState)(!1),[c,l]=(0,n.useState)({mode:"thumbs",theme:i.config.theme2.isLight?"light":"dark"}),o=()=>a(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.Modal,{title:"Start crawler",isOpen:t,onDismiss:o,children:[(0,p.jsx)("div",{className:s.wrap,children:(0,p.jsx)(r.CodeEditor,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{l(JSON.parse(e))}})}),(0,p.jsxs)(r.Modal.ButtonRow,{children:[(0,p.jsx)(r.Button,{type:"submit",onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/crawler/start",c).then(e=>{console.log("GOT",e),o()})},children:"Start"}),(0,p.jsx)(r.Button,{variant:"secondary",onClick:o,children:"Cancel"})]})]}),(0,p.jsx)(r.Button,{onClick:()=>a(!0),variant:"primary",children:"Start"})]})},x=e=>({wrap:a.css`
      border: 2px solid #111;
    `});var h,g,m;const j=()=>{const e=v((0,r.useTheme2)()),[s,t]=(0,n.useState)();return(0,n.useEffect)(()=>{const e=(0,i.getGrafanaLiveSrv)().getStream({scope:d.LiveChannelScope.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:e=>{(0,d.isLiveChannelMessageEvent)(e)?t(e.message):(0,d.isLiveChannelStatusEvent)(e)&&t(e.message)}});return()=>{e.unsubscribe()}},[]),s?(0,p.jsxs)("div",{className:e.wrap,children:[(0,p.jsx)("pre",{children:JSON.stringify(s,null,2)}),"running"!==s.state&&(m||(m=(0,p.jsx)(u,{}))),"stopped"!==s.state&&(0,p.jsx)(r.Button,{variant:"secondary",onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/crawler/stop")},children:"Stop"})]}):(0,p.jsxs)("div",{className:e.wrap,children:["No status (never run)",h||(h=(0,p.jsx)("br",{})),g||(g=(0,p.jsx)(u,{}))]})},v=e=>({wrap:a.css`
      border: 4px solid red;
    `,running:a.css`
      border: 4px solid green;
    `}),f=()=>{var e;const s=b((0,r.useTheme2)()),[t,a]=(0,n.useState)(!1),[c,l]=(0,n.useState)({format:"git",git:{}}),o=()=>a(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.Modal,{title:"Export grafana instance",isOpen:t,onDismiss:o,children:[(0,p.jsx)("div",{className:s.wrap,children:(0,p.jsx)(r.CodeEditor,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{l(JSON.parse(e))}})}),(0,p.jsxs)(r.Modal.ButtonRow,{children:[(0,p.jsx)(r.Button,{onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/export",c).then(e=>{console.log("GOT",e),o()})},children:"Start"}),(0,p.jsx)(r.Button,{variant:"secondary",onClick:o,children:"Cancel"})]})]}),(0,p.jsx)(r.Button,{onClick:()=>a(!0),variant:"primary",children:"Export"})]})},b=e=>({wrap:a.css`
      border: 2px solid #111;
    `});var y,S;const w=()=>{const e=k((0,r.useTheme2)()),[s,t]=(0,n.useState)();return(0,n.useEffect)(()=>{const e=(0,i.getGrafanaLiveSrv)().getStream({scope:d.LiveChannelScope.Grafana,namespace:"broadcast",path:"export"}).subscribe({next:e=>{(0,d.isLiveChannelMessageEvent)(e)?t(e.message):(0,d.isLiveChannelStatusEvent)(e)&&t(e.message)}});return()=>{e.unsubscribe()}},[]),s?(0,p.jsxs)("div",{className:e.wrap,children:[(0,p.jsx)("pre",{children:JSON.stringify(s,null,2)}),Boolean(!s.running)&&(S||(S=(0,p.jsx)(f,{}))),Boolean(s.running)&&(0,p.jsx)(r.Button,{variant:"secondary",onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/export/stop")},children:"Stop"})]}):(0,p.jsx)("div",{className:e.wrap,children:y||(y=(0,p.jsx)(f,{}))})},k=e=>({wrap:a.css`
      border: 4px solid red;
    `,running:a.css`
      border: 4px solid green;
    `});var N,A,_,B,C,L,E;const G=()=>{const[e,s]=(0,n.useState)(null),[t,a]=(0,n.useState)(!1),d=(0,r.useStyles2)(M),u=l.Vt.hasAccess(c.bW.DataSourcesRead,l.Vt.isGrafanaAdmin),x=l.Vt.hasAccess(c.bW.UsersRead,l.Vt.isGrafanaAdmin);return(0,n.useEffect)(()=>{l.Vt.hasAccess(c.bW.ActionServerStatsRead,l.Vt.isGrafanaAdmin)&&(a(!0),(async()=>(0,i.getBackendSrv)().get("api/admin/stats").catch(e=>(console.error(e),null)))().then(e=>{s(e),a(!1)}))},[]),l.Vt.hasAccess(c.bW.ActionServerStatsRead,l.Vt.isGrafanaAdmin)?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:d.title,children:"Instance statistics"}),t?(0,p.jsx)("div",{className:d.loader,children:N||(N=(0,p.jsx)(o.a,{text:"Loading instance stats..."}))}):e?(0,p.jsxs)("div",{className:d.row,children:[(0,p.jsx)(z,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:A||(A=(0,p.jsx)(r.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,p.jsxs)("div",{className:d.doubleRow,children:[(0,p.jsx)(z,{content:[{name:"Data sources",value:e.datasources}],footer:u&&(_||(_=(0,p.jsx)(r.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"})))}),(0,p.jsx)(z,{content:[{name:"Alerts",value:e.alerts}],footer:B||(B=(0,p.jsx)(r.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,p.jsx)(z,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:x&&(C||(C=(0,p.jsx)(r.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"})))})]}):(0,p.jsx)("p",{className:d.notFound,children:"No stats found."}),i.config.featureToggles.dashboardPreviews&&i.config.featureToggles.dashboardPreviewsAdmin&&(L||(L=(0,p.jsx)(j,{}))),i.config.featureToggles.export&&(E||(E=(0,p.jsx)(w,{})))]}):null},M=e=>({title:a.css`
      margin-bottom: ${e.spacing(4)};
    `,row:a.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:a.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:a.css`
      height: 290px;
    `,notFound:a.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),z=e=>{let{content:s,footer:t}=e;const a=(0,r.useStyles2)(D);return(0,p.jsx)(r.CardContainer,{className:a.container,disableHover:!0,children:(0,p.jsxs)("div",{className:a.inner,children:[(0,p.jsx)("div",{className:a.content,children:s.map(e=>(0,p.jsxs)("div",{className:a.row,children:[(0,p.jsx)("span",{children:e.name}),(0,p.jsx)("span",{children:e.value})]},e.name))}),t&&(0,p.jsx)("div",{children:t})]})})},D=e=>({container:a.css`
      padding: ${e.spacing(2)};
    `,inner:a.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:a.css`
      flex: 1 0 auto;
    `,row:a.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/admin/UpgradePage.tsx":(e,s,t)=>{t.r(s),t.d(s,{UpgradeInfo:()=>L,UpgradePage:()=>B,default:()=>$});var a=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=(t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js")),i=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/core/components/Page/Page.tsx"),c=t("./public/app/core/selectors/navModel.ts"),l=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const o={fontWeight:500,fontSize:"26px",lineHeight:"123%"},d=(0,i.stylesFactory)(e=>{const s=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",t=e.isDark?e.palette.dark9:e.palette.gray6;return{container:a.css`
      padding: 36px 79px;
      background: ${e.colors.panelBg};
    `,footer:a.css`
      text-align: center;
      padding: 16px;
      background: ${t};
    `,header:a.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${s}') right;
    `}});function p(e){let{header:s,editionNotice:t,subheader:a,children:n}=e;const r=(0,i.useTheme)(),c=d(r);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:c.header,children:[(0,l.jsx)("h2",{style:o,children:s}),a&&(0,l.jsx)("h3",{children:a}),(0,l.jsx)(u,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"},children:(0,l.jsx)("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}})})]}),(0,l.jsx)("div",{className:c.container,children:n}),t&&(0,l.jsx)("div",{className:c.footer,children:t})]})}const u=e=>{let{size:s,style:t,children:a}=e;return(0,l.jsx)("div",{style:Object.assign({width:s,height:s,position:"absolute",bottom:0,right:0,borderRadius:"50%"},t),children:a})};var x,h,g,m,j,v,f,b,y,S,w,k,N,A,_=t("./public/app/features/admin/ServerStats.tsx");function B(e){let{navModel:s}=e;return(0,l.jsx)(r.Z,{navModel:s,children:x||(x=(0,l.jsxs)(r.Z.Contents,{children:[(0,l.jsx)(_.ServerStats,{}),(0,l.jsx)(L,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})]}))})}const C={fontWeight:500,fontSize:"26px",lineHeight:"123%"},L=e=>{let{editionNotice:s}=e;const t=(0,i.useStyles2)(E);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:t.title,children:"Enterprise license"}),(0,l.jsx)(p,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:s,children:(0,l.jsxs)("div",{className:t.column,children:[h||(h=(0,l.jsx)(D,{})),g||(g=(0,l.jsx)(z,{}))]})})]})},E=e=>({column:a.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:a.css`
      margin: ${e.spacing(4)} 0;
    `}),G=()=>(0,l.jsxs)("div",{style:{marginTop:"40px",marginBottom:"30px"},children:[m||(m=(0,l.jsx)("h2",{style:C,children:"Get Grafana Enterprise"})),j||(j=(0,l.jsx)(M,{})),(0,l.jsx)("p",{style:{paddingTop:"12px"},children:"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."})]}),M=()=>v||(v=(0,l.jsx)(i.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",children:"Contact us and get a free trial"})),z=()=>(0,l.jsxs)("div",{children:[f||(f=(0,l.jsx)("h4",{children:"At your service"})),b||(b=(0,l.jsxs)(P,{children:[(0,l.jsx)(T,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),(0,l.jsx)(T,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),(0,l.jsxs)(T,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg",children:["24 x 7 x 365 support via",(0,l.jsxs)(P,{nested:!0,children:[(0,l.jsx)(T,{title:"Email"}),(0,l.jsx)(T,{title:"Private Slack channel"}),(0,l.jsx)(T,{title:"Phone"})]})]}),(0,l.jsx)(T,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg",children:"in the upgrade process"})]})),(0,l.jsxs)("div",{style:{marginTop:"20px"},children:[y||(y=(0,l.jsx)("strong",{children:"Also included:"})),S||(S=(0,l.jsx)("br",{})),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]}),w||(w=(0,l.jsx)(G,{}))]}),D=()=>(0,l.jsxs)("div",{style:{paddingRight:"11px"},children:[k||(k=(0,l.jsx)("h4",{children:"Enhanced functionality"})),N||(N=(0,l.jsx)(O,{}))]}),O=()=>A||(A=(0,l.jsxs)(P,{children:[(0,l.jsx)(T,{title:"Data source permissions"}),(0,l.jsx)(T,{title:"Reporting"}),(0,l.jsx)(T,{title:"SAML authentication"}),(0,l.jsx)(T,{title:"Enhanced LDAP integration"}),(0,l.jsx)(T,{title:"Team Sync",children:"LDAP, GitHub OAuth, Auth Proxy, Okta"}),(0,l.jsx)(T,{title:"White labeling"}),(0,l.jsx)(T,{title:"Auditing"}),(0,l.jsx)(T,{title:"Settings updates at runtime"}),(0,l.jsx)(T,{title:"Grafana usage insights",children:(0,l.jsxs)(P,{nested:!0,children:[(0,l.jsx)(T,{title:"Sort dashboards by popularity in search"}),(0,l.jsx)(T,{title:"Find unused dashboards"}),(0,l.jsx)(T,{title:"Dashboard usage stats drawer"}),(0,l.jsx)(T,{title:"Dashboard presence indicators"})]})}),(0,l.jsx)(T,{title:"Enterprise plugins",children:(0,l.jsxs)(P,{nested:!0,children:[(0,l.jsx)(T,{title:"Oracle"}),(0,l.jsx)(T,{title:"Splunk"}),(0,l.jsx)(T,{title:"Service Now"}),(0,l.jsx)(T,{title:"Dynatrace"}),(0,l.jsx)(T,{title:"New Relic"}),(0,l.jsx)(T,{title:"DataDog"}),(0,l.jsx)(T,{title:"AppDynamics"}),(0,l.jsx)(T,{title:"SAP HANA®"}),(0,l.jsx)(T,{title:"Gitlab"}),(0,l.jsx)(T,{title:"Honeycomb"}),(0,l.jsx)(T,{title:"Jira"}),(0,l.jsx)(T,{title:"MongoDB"}),(0,l.jsx)(T,{title:"Salesforce"}),(0,l.jsx)(T,{title:"Snowflake"}),(0,l.jsx)(T,{title:"Wavefront"})]})})]})),P=e=>{let{children:s,nested:t}=e;const n=a.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${t?0:8}px;
    }
  `;return(0,l.jsx)("div",{className:n,children:s})},T=e=>{let{children:s,title:t,image:n}=e;const i=n||"public/img/licensing/checkmark.svg",r=a.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,c=a.css`
    font-weight: 500;
    line-height: 1.7;
  `;return(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("img",{src:i,alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:c,children:t}),s]})]})},$=(0,n.connect)(e=>({navModel:(0,c.h)(e.navIndex,"upgrading")}))(B)},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,t)=>{t.d(s,{a:()=>i});t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var a=t("./packages/grafana-ui/src/index.ts"),n=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{text:s="Loading..."}=e;return(0,n.jsx)("div",{className:"page-loader-wrapper",children:(0,n.jsx)(a.LoadingPlaceholder,{text:s})})}}}]);