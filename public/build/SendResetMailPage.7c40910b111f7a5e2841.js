"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[133],{"./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":(e,r,s)=>{s.r(r),s.d(r,{SendResetMailPage:()=>f,default:()=>j});var a,i,n,t,o=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=s("./public/app/core/components/Login/LoginLayout.tsx"),l=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=s("./packages/grafana-runtime/src/index.ts"),u=s("./packages/grafana-ui/src/index.ts"),p=s("./public/app/core/config.ts"),m=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const g=e=>l.css`
  color: ${e.colors.formDescription};
  font-size: ${e.typography.size.sm};
  font-weight: ${e.typography.weight.regular};
  margin-top: ${e.spacing.sm};
  display: block;
`,h=()=>{var e,r;const[s,c]=(0,o.useState)(!1),l=(0,u.useStyles)(g),h=`${p.ZP.appSubUrl}/login`;return s?(0,m.jsxs)("div",{children:[a||(a=(0,m.jsx)("p",{children:"An email with a reset link has been sent to the email address. You should receive it shortly."})),i||(i=(0,m.jsx)(u.Container,{margin:"md"})),(0,m.jsx)(u.LinkButton,{variant:"primary",href:h,children:"Back to login"})]}):(0,m.jsx)(u.Form,{onSubmit:async e=>{await(0,d.getBackendSrv)().post("/api/user/password/send-reset-email",e)&&c(!0)},children:s=>{var a;let{register:i,errors:o}=s;return(0,m.jsxs)(m.Fragment,{children:[n||(n=(0,m.jsx)(u.Legend,{children:"Reset password"})),(0,m.jsx)(u.Field,{label:"User",description:"Enter your information to get a reset link sent to you",invalid:!!o.userOrEmail,error:null===o||void 0===o?void 0:null===(a=o.userOrEmail)||void 0===a?void 0:a.message,children:(0,m.jsx)(u.Input,Object.assign({id:"user-input",placeholder:"Email or username"},i("userOrEmail",{required:"Email or username is required"})))}),e||(e=(0,m.jsxs)(u.HorizontalGroup,{children:[t||(t=(0,m.jsx)(u.Button,{type:"submit",children:"Send reset email"})),(0,m.jsx)(u.LinkButton,{fill:"text",href:h,children:"Back to login"})]})),r||(r=(0,m.jsx)("p",{className:l,children:"Did you forget your username or email? Contact your Grafana administrator."}))]})}})};var x;const f=()=>x||(x=(0,m.jsx)(c.dd,{children:(0,m.jsx)(c.$s,{children:(0,m.jsx)(h,{})})})),j=f}}]);