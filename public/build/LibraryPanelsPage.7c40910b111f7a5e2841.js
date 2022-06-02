"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7878],{"./public/app/features/library-panels/LibraryPanelsPage.tsx":(e,a,n)=>{n.r(a),n.d(a,{LibraryPanelsPage:()=>u,default:()=>p});var s=n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),l=n("./public/app/core/components/Page/Page.tsx"),i=n("./public/app/core/selectors/navModel.ts"),o=n("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx"),t=n("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx"),c=n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const d=e=>({navModel:(0,i.h)(e.navIndex,"library-panels")}),u=((0,r.connect)(d,void 0),e=>{let{navModel:a}=e;const[n,r]=(0,s.useState)(void 0);return(0,c.jsx)(l.Z,{navModel:a,children:(0,c.jsxs)(l.Z.Contents,{children:[(0,c.jsx)(o.N,{onClick:r,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0,showFolderFilter:!0}),n?(0,c.jsx)(t.b,{onDismiss:()=>r(void 0),libraryPanel:n}):null]})})}),p=(0,r.connect)(d)(u)},"./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":(e,a,n)=>{n.d(a,{b:()=>(function(e){let{libraryPanel:a,onDismiss:n}=e;const r=(0,c.useStyles2)(p),[b,h]=(0,i.useState)(!1),[m,f]=(0,i.useState)(0),[x,y]=(0,i.useState)(void 0);(0,i.useEffect)(()=>{(async()=>{const e=await(0,d.Ef)(a.uid);f(e.length)})()},[a.uid]);const v=(0,i.useCallback)(e=>(async function(e,a,n){n(!0);const s=(await(0,d.E8)(e)).filter(e=>e.title.toLowerCase().includes(a.toLowerCase())).map(e=>({label:e.title,value:e}));return n(!1),s})(a.uid,e,h),[a.uid]),j=(0,i.useMemo)(()=>(0,l.debounce)(v,300,{leading:!0,trailing:!0}),[v]);return(0,u.jsxs)(c.Modal,{title:"View panel in dashboard",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[(0,u.jsxs)("div",{className:r.container,children:[0===m?s||(s=(0,u.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,m>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["This panel is being used in"," ",(0,u.jsxs)("strong",{children:[m," ",m>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,u.jsx)(c.AsyncSelect,{isClearable:!0,isLoading:b,defaultOptions:!0,loadOptions:j,onChange:y,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,u.jsxs)(c.Modal.ButtonRow,{children:[(0,u.jsx)(c.Button,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),(0,u.jsx)(c.Button,{onClick:e=>{var a;e.preventDefault(),t.locationService.push(o.urlUtil.renderUrl(`/d/${null===x||void 0===x?void 0:null===(a=x.value)||void 0===a?void 0:a.uid}`,{}))},disabled:!Boolean(x),children:x?`View panel in ${null===x||void 0===x?void 0:x.label}...`:"View panel in dashboard..."})]})]})})});var s,r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=n("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),i=(n.n(l),n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=n("./packages/grafana-data/src/index.ts"),t=n("./packages/grafana-runtime/src/index.ts"),c=n("./packages/grafana-ui/src/index.ts"),d=n("./public/app/features/library-panels/state/api.ts"),u=n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function p(e){return{container:r.css``}}}}]);