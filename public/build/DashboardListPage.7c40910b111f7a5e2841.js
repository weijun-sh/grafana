"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4074],{"./public/app/features/search/components/DashboardListPage.tsx":(e,a,s)=>{s.r(a),s.d(a,{DashboardListPage:()=>h,default:()=>m});var r=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),t=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),c=s("./packages/grafana-data/src/index.ts"),o=s("./packages/grafana-runtime/src/index.ts"),d=s("./public/app/core/components/Page/Page.tsx"),l=s("./public/app/core/selectors/navModel.ts"),i=s("./public/app/core/services/backend_srv.ts"),p=s("./public/app/features/folders/state/navModel.ts");var u=s("./public/app/features/search/components/ManageDashboards.tsx"),v=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const h=(0,r.memo)(e=>{var a;let{navModel:s,match:r,location:n}=e;const{loading:l,value:h}=(0,t.Z)(()=>{const e=r.params.uid,a=n.pathname;return e&&a.startsWith("/dashboards")?(e=>i.ae.getFolderByUid(e).then(e=>{const a=(0,p.B)(e);return a.children[0].active=!0,{folder:e,folderNav:a}}))(e).then(e=>{let{folder:a,folderNav:r}=e;const t=c.locationUtil.stripBaseFromUrl(a.url);return t!==n.pathname&&o.locationService.push(t),{folder:a,pageNavModel:Object.assign({},s,{main:r})}}):Promise.resolve({pageNavModel:s})},[r.params.uid]);return(0,v.jsx)(d.Z,{navModel:null!==(a=null===h||void 0===h?void 0:h.pageNavModel)&&void 0!==a?a:s,children:(0,v.jsx)(d.Z.Contents,{isLoading:l,children:(0,v.jsx)(u.Z,{folder:null===h||void 0===h?void 0:h.folder})})})});h.displayName="DashboardListPage";const m=(0,n.connect)(e=>({navModel:(0,l.h)(e.navIndex,"manage-dashboards")}))(h)}}]);