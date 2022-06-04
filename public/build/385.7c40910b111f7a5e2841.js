"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[385],{"./public/app/features/canvas/elements/icon.tsx":(t,e,i)=>{i.d(e,{e:()=>p});var o=i("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),a=i("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=(i.n(a),i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js")),s=i("./public/app/features/dimensions/index.ts"),l=i("./public/app/features/dimensions/editors/index.ts"),r=i("./public/app/plugins/panel/canvas/editor/APIEditor.tsx"),d=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=o.css`
  path {
    vector-effect: non-scaling-stroke;
  }
`;const p={id:"icon",name:"Icon",description:"SVG Icon display",display:function(t){const{data:e}=t;if(null===e||void 0===e||!e.path)return null;const i={fill:null===e||void 0===e?void 0:e.fill,stroke:null===e||void 0===e?void 0:e.strokeColor,strokeWidth:null===e||void 0===e?void 0:e.stroke};return(0,d.jsx)(n.Z,{onClick:()=>{null!==e&&void 0!==e&&e.api&&(0,r.t)(e.api)},src:e.path,style:i,className:i.strokeWidth?c:void 0})},getNewOptions:t=>Object.assign({placement:{width:50,height:50,top:0,left:0}},t,{config:{path:{mode:s.Q8.Fixed,fixed:"img/icons/unicons/question-circle.svg"},fill:{fixed:"#FFF899"}}}),prepareData:(t,e)=>{var i,o;let n=void 0;e.path&&(n=t.getResource(e.path).value()),n&&(0,a.isString)(n)||(n=(0,s.t7)("img/icons/unicons/question-circle.svg"));const l={path:n,fill:e.fill?t.getColor(e.fill).value():"#CCC",api:null!==(i=null===e||void 0===e?void 0:e.api)&&void 0!==i?i:void 0};var r;null!==(o=e.stroke)&&void 0!==o&&o.width&&e.stroke.color&&(e.stroke.width>0&&(l.stroke=null===(r=e.stroke)||void 0===r?void 0:r.width,l.strokeColor=t.getColor(e.stroke.color).value()));return l},registerOptionsUI:t=>{const e=["Icon"];t.addCustomEditor({category:e,id:"iconSelector",path:"config.path",name:"SVG Path",editor:l.Lv,settings:{resourceType:"icon"}}).addCustomEditor({category:e,id:"config.fill",path:"config.fill",name:"Fill color",editor:l.Lm,settings:{},defaultValue:{fixed:"grey"}}).addSliderInput({category:e,path:"config.stroke.width",name:"Stroke",defaultValue:0,settings:{min:0,max:10}}).addCustomEditor({category:e,id:"config.stroke.color",path:"config.stroke.color",name:"Stroke color",editor:l.Lm,settings:{},defaultValue:{fixed:"grey"},showIf:t=>{var e,i;return Boolean(null===t||void 0===t?void 0:null===(e=t.config)||void 0===e?void 0:null===(i=e.stroke)||void 0===i?void 0:i.width)}}).addCustomEditor({category:e,id:"apiSelector",path:"config.api",name:"API",editor:r.U})}}},"./public/app/features/canvas/elements/notFound.tsx":(t,e,i)=>{i.d(e,{C:()=>s});var o,a=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const s={id:"not-found",name:"Not found",description:"Display when element type is not found in the registry",display:class extends a.PureComponent{render(){const{config:t}=this.props;return(0,n.jsxs)("div",{children:[o||(o=(0,n.jsx)("h3",{children:"NOT FOUND:"})),(0,n.jsx)("pre",{children:JSON.stringify(t,null,2)})]})}},defaultSize:{width:100,height:100},getNewOptions:()=>({config:{}})}},"./public/app/features/canvas/index.ts":(t,e,i)=>{i.d(e,{Uy:()=>o.Uy,Nm:()=>F,_5:()=>o._5,fJ:()=>o.fJ,Jk:()=>J});var o=i("./public/app/features/canvas/types.ts"),a=i("./packages/grafana-data/src/index.ts"),n=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=i("./packages/grafana-ui/src/index.ts"),l=i("./public/app/features/dimensions/editors/TextDimensionEditor.tsx"),r=i("./public/app/plugins/panel/canvas/editor/APIEditor.tsx"),d=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c={id:"button",name:"Button",description:"Button",display:class extends n.PureComponent{render(){const{data:t}=this.props;return(0,d.jsx)(s.Button,{type:"submit",onClick:()=>{null!==t&&void 0!==t&&t.api&&(0,r.t)(t.api)},children:null===t||void 0===t?void 0:t.text})}},defaultSize:{width:200,height:50},getNewOptions:t=>Object.assign({},t),prepareData:(t,e)=>{var i;return{text:null!==e&&void 0!==e&&e.text?t.getText(e.text).value():"",api:null!==(i=null===e||void 0===e?void 0:e.api)&&void 0!==i?i:void 0}},registerOptionsUI:t=>{const e=["Button"];t.addCustomEditor({category:e,id:"textSelector",path:"config.text",name:"Text",editor:l.$}).addCustomEditor({category:e,id:"apiSelector",path:"config.api",name:"API",editor:r.U})}};var p,h,g,u,L=i("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),m=i("./public/app/features/dimensions/editors/index.ts");const f={id:"droneFront",name:"Drone Front",description:"Drone front",display:t=>{const e=(0,s.useStyles2)(v),{data:i}=t,o=`rotate(${null!==i&&void 0!==i&&i.rollAngle?i.rollAngle:0}deg)`;return(0,d.jsxs)("svg",{className:e.droneFront,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1300 290",style:{transform:o},children:[p||(p=(0,d.jsxs)("g",{className:"arms",stroke:"black",strokeWidth:"28px",children:[(0,d.jsx)("line",{x1:"510",x2:"320",y1:"100",y2:"150"}),(0,d.jsx)("line",{x1:"510",x2:"320",y1:"190",y2:"210"}),(0,d.jsx)("line",{x1:"790",x2:"980",y1:"190",y2:"210"}),(0,d.jsx)("line",{x1:"790",x2:"980",y1:"100",y2:"150"})]})),h||(h=(0,d.jsxs)("g",{className:"body",stroke:"black",strokeWidth:"28px",children:[(0,d.jsx)("path",{fill:"none",d:" M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "}),(0,d.jsx)("circle",{cx:"650",cy:"160",r:"40",fill:"none"})]})),g||(g=(0,d.jsxs)("g",{className:"motors",stroke:"black",strokeWidth:"28px",children:[(0,d.jsx)("path",{className:"motor",fill:"none",d:" M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "}),(0,d.jsx)("path",{className:"motor",fill:"none",d:" M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "})]})),u||(u=(0,d.jsxs)("g",{className:"propellers",fill:"black",children:[(0,d.jsx)("path",{className:"prop",d:" M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "}),(0,d.jsx)("path",{className:"prop",d:" M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "})]}))]})},defaultSize:{width:100,height:100},getNewOptions:t=>Object.assign({},t),prepareData:(t,e)=>{return{rollAngle:null!==e&&void 0!==e&&e.rollAngle?t.getScalar(e.rollAngle).value():0}},registerOptionsUI:t=>{t.addCustomEditor({category:["Drone Front"],id:"rollAngle",path:"config.rollAngle",name:"Roll Angle",editor:m.k9})}},v=t=>({droneFront:L.css`
    transition: transform 0.4s;
  `});var x,b,C,y;const w={id:"droneSide",name:"Drone Side",description:"Drone Side",display:t=>{const e=(0,s.useStyles2)(R),{data:i}=t,o=`rotate(${null!==i&&void 0!==i&&i.pitchAngle?i.pitchAngle:0}deg)`;return(0,d.jsxs)("svg",{className:e.droneSide,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1300 290",style:{transform:o},children:[x||(x=(0,d.jsxs)("g",{className:"arms",stroke:"black",strokeWidth:"28px",children:[(0,d.jsx)("line",{x1:"510",x2:"320",y1:"100",y2:"150"}),(0,d.jsx)("line",{x1:"510",x2:"320",y1:"190",y2:"210"}),(0,d.jsx)("line",{x1:"790",x2:"980",y1:"190",y2:"210"}),(0,d.jsx)("line",{x1:"790",x2:"980",y1:"100",y2:"150"})]})),b||(b=(0,d.jsx)("g",{className:"body",stroke:"black",strokeWidth:"28px",children:(0,d.jsx)("path",{fill:"none",d:" M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "})})),C||(C=(0,d.jsxs)("g",{className:"motors",stroke:"black",strokeWidth:"28px",children:[(0,d.jsx)("path",{className:"motor",fill:"none",d:" M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "}),(0,d.jsx)("path",{className:"motor",fill:"none",d:" M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "})]})),y||(y=(0,d.jsxs)("g",{className:"propellers",fill:"black",children:[(0,d.jsx)("path",{className:"prop",d:" M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "}),(0,d.jsx)("path",{className:"prop",d:" M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "})]}))]})},defaultSize:{width:100,height:100},getNewOptions:t=>Object.assign({},t),prepareData:(t,e)=>{return{pitchAngle:null!==e&&void 0!==e&&e.pitchAngle?t.getScalar(e.pitchAngle).value():0}},registerOptionsUI:t=>{t.addCustomEditor({category:["Drone Side"],id:"pitchAngle",path:"config.pitchAngle",name:"Pitch Angle",editor:m.k9})}},R=t=>({droneSide:L.css`
    transition: transform 0.4s;
  `});var k,j;const M={id:"droneTop",name:"Drone Top",description:"Drone top",display:t=>{const e=(0,s.useStyles2)(Q),{data:i}=t,o=`spin ${null!==i&&void 0!==i&&i.fRightRotorRPM?60/Math.abs(i.fRightRotorRPM):0}s linear infinite`,a=`spin ${null!==i&&void 0!==i&&i.fLeftRotorRPM?60/Math.abs(i.fLeftRotorRPM):0}s linear infinite`,n=`spin ${null!==i&&void 0!==i&&i.bRightRotorRPM?60/Math.abs(i.bRightRotorRPM):0}s linear infinite`,l=`spin ${null!==i&&void 0!==i&&i.bLeftRotorRPM?60/Math.abs(i.bLeftRotorRPM):0}s linear infinite`,r=`rotate(${null!==i&&void 0!==i&&i.yawAngle?i.yawAngle:0}deg)`;return(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-43 -43 640 640",xmlSpace:"preserve",style:{transform:r},children:[k||(k=(0,d.jsx)("path",{fillRule:"evenodd",d:" M 137.95 127.967 C 137.14 127.157 136.189 126.58 135.178 126.218 C 138.173 121.545 139.967 116.036 140.125 110.123 L 217.64 151.862 C 214.049 157.411 211.8 163.922 211.386 170.95 L 209.694 199.712 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 Z  M 134.268 426.981 C 130.211 421.314 124.328 417.045 117.482 415.041 L 201.999 330.523 L 201.385 340.955 C 200.67 353.107 202.829 364.914 207.563 375.673 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 Z  M 324.765 373.673 L 228.527 373.673 Q 215.374 358.611 216.361 341.835 L 226.361 171.832 C 226.825 163.94 231.012 157.096 237.146 152.957 L 316.146 152.957 C 322.28 157.096 326.466 163.94 326.931 171.832 L 336.931 341.835 Q 337.918 358.611 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 Z  M 435.81 415.041 C 428.964 417.045 423.081 421.314 419.024 426.981 L 345.727 375.673 C 350.461 364.914 352.62 353.107 351.905 340.955 L 351.291 330.523 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 Z  M 343.596 199.713 L 341.904 170.951 C 341.49 163.923 339.242 157.411 335.651 151.863 L 413.167 110.124 C 413.325 116.037 415.119 121.546 418.114 126.219 C 417.103 126.581 416.152 127.158 415.342 127.968 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 Z  M 444.646 92.771 C 453.744 92.771 461.146 100.172 461.146 109.271 C 461.146 118.369 453.744 125.771 444.646 125.771 C 435.548 125.771 428.146 118.369 428.146 109.271 C 428.146 100.172 435.548 92.771 444.646 92.771 L 444.646 92.771 L 444.646 92.771 L 444.646 92.771 Z  M 108.647 92.771 C 117.745 92.771 125.147 100.172 125.147 109.271 C 125.147 118.369 117.745 125.771 108.647 125.771 C 99.549 125.771 92.147 118.369 92.147 109.271 C 92.147 100.172 99.549 92.771 108.647 92.771 L 108.647 92.771 L 108.647 92.771 Z  M 108.647 461.771 C 99.549 461.771 92.147 454.369 92.147 445.271 C 92.147 436.172 99.549 428.771 108.647 428.771 C 117.745 428.771 125.147 436.172 125.147 445.271 C 125.147 454.369 117.745 461.771 108.647 461.771 L 108.647 461.771 Z  M 92.322 136.202 C 97.086 139.1 102.675 140.771 108.647 140.771 C 114.883 140.771 120.697 138.941 125.594 135.802 C 125.956 136.813 126.534 137.764 127.343 138.573 L 207.342 218.573 C 207.711 218.942 208.109 219.264 208.528 219.54 L 203.212 309.908 C 201.794 310.182 200.44 310.869 199.342 311.967 L 95.343 415.967 C 94.954 416.356 94.62 416.779 94.335 417.224 C 93.651 417.575 92.976 417.942 92.322 418.34 Q 84.615 424.182 81.716 428.946 C 78.817 433.71 77.147 439.299 77.147 445.271 C 77.147 462.64 91.278 476.771 108.647 476.771 C 114.619 476.771 120.208 475.1 124.972 472.202 C 129.736 469.304 132.678 466.36 135.577 461.596 C 138.476 456.832 140.147 451.243 140.147 445.271 C 140.147 443.943 140.055 442.637 139.895 441.352 L 214.997 388.78 C 217.05 391.677 336.242 391.678 338.295 388.78 L 413.398 441.352 C 413.238 442.637 413.146 443.943 413.146 445.271 C 413.146 451.243 414.817 456.832 417.715 461.596 C 420.613 466.36 423.557 469.304 428.321 472.202 C 433.085 475.1 438.674 476.771 444.646 476.771 C 462.015 476.771 476.146 462.64 476.146 445.271 C 476.146 439.299 474.475 433.71 471.577 428.946 C 468.679 424.182 459.642 417.575 458.958 417.224 C 458.672 416.779 458.339 416.356 457.95 415.967 L 353.95 311.967 C 352.852 310.869 351.498 310.182 350.08 309.908 L 344.764 219.54 C 345.183 219.264 345.581 218.942 345.95 218.573 L 425.95 138.573 C 426.76 137.763 427.337 136.812 427.699 135.802 C 432.596 138.941 438.409 140.771 444.646 140.771 C 450.618 140.771 456.207 139.1 460.971 136.202 C 465.735 133.304 468.679 130.36 471.577 125.596 C 474.475 120.832 476.146 115.243 476.146 109.271 C 476.146 91.903 462.015 77.772 444.646 77.772 C 438.674 77.772 433.085 79.442 428.321 82.34 L 416.215 91.446 L 324.765 140.688 C 318.402 136.324 310.718 133.771 302.473 133.771 L 250.819 133.771 C 242.574 133.771 234.89 136.324 228.527 140.688 L 137.078 91.446 L 124.972 82.34 C 120.208 79.442 114.619 77.772 108.647 77.772 C 91.278 77.772 77.147 91.903 77.147 109.271 C 77.147 115.243 78.818 120.832 81.716 125.595 C 84.614 130.358 87.558 133.304 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 Z  M 444.646 461.771 C 435.548 461.771 428.146 454.369 428.146 445.271 C 428.146 436.172 435.548 428.771 444.646 428.771 C 453.744 428.771 461.146 436.172 461.146 445.271 C 461.146 454.369 453.744 461.771 444.646 461.771 Z "})),j||(j=(0,d.jsx)("path",{fillRule:"evenodd",d:" M 259.458 334.235 L 259.458 337.211 L 254.514 337.211 L 254.514 350.795 L 250.842 350.795 L 250.842 337.211 L 245.898 337.211 L 245.898 334.235 L 259.458 334.235 Z  M 266.226 347.939 L 272.586 347.939 L 272.754 350.627 L 272.754 350.627 Q 270.498 350.867 265.074 350.867 L 265.074 350.867 L 265.074 350.867 Q 263.418 350.867 262.434 349.967 L 262.434 349.967 L 262.434 349.967 Q 261.45 349.067 261.426 347.531 L 261.426 347.531 L 261.426 337.499 L 261.426 337.499 Q 261.45 335.963 262.434 335.063 L 262.434 335.063 L 262.434 335.063 Q 263.418 334.163 265.074 334.163 L 265.074 334.163 L 265.074 334.163 Q 270.498 334.163 272.754 334.403 L 272.754 334.403 L 272.586 337.115 L 266.226 337.115 L 266.226 337.115 Q 265.626 337.115 265.362 337.403 L 265.362 337.403 L 265.362 337.403 Q 265.098 337.691 265.098 338.339 L 265.098 338.339 L 265.098 340.859 L 271.698 340.859 L 271.698 343.499 L 265.098 343.499 L 265.098 346.691 L 265.098 346.691 Q 265.098 347.363 265.362 347.651 L 265.362 347.651 L 265.362 347.651 Q 265.626 347.939 266.226 347.939 L 266.226 347.939 Z  M 275.202 333.995 L 278.73 333.995 L 278.73 346.931 L 278.73 346.931 Q 278.73 348.131 280.074 348.131 L 280.074 348.131 L 281.034 348.131 L 281.442 350.603 L 281.442 350.603 Q 280.53 351.083 278.61 351.083 L 278.61 351.083 L 278.61 351.083 Q 277.026 351.083 276.114 350.231 L 276.114 350.231 L 276.114 350.231 Q 275.202 349.379 275.202 347.819 L 275.202 347.819 L 275.202 333.995 Z  M 283.05 333.995 L 286.578 333.995 L 286.578 346.931 L 286.578 346.931 Q 286.578 348.131 287.922 348.131 L 287.922 348.131 L 288.882 348.131 L 289.29 350.603 L 289.29 350.603 Q 288.378 351.083 286.458 351.083 L 286.458 351.083 L 286.458 351.083 Q 284.874 351.083 283.962 350.231 L 283.962 350.231 L 283.962 350.231 Q 283.05 349.379 283.05 347.819 L 283.05 347.819 L 283.05 333.995 Z  M 292.086 335.759 L 292.086 335.759 L 292.086 335.759 Q 293.634 333.923 297.618 333.923 L 297.618 333.923 L 297.618 333.923 Q 301.602 333.923 303.162 335.759 L 303.162 335.759 L 303.162 335.759 Q 304.722 337.595 304.722 342.515 L 304.722 342.515 L 304.722 342.515 Q 304.722 347.435 303.162 349.271 L 303.162 349.271 L 303.162 349.271 Q 301.602 351.107 297.618 351.107 L 297.618 351.107 L 297.618 351.107 Q 293.634 351.107 292.086 349.271 L 292.086 349.271 L 292.086 349.271 Q 290.538 347.435 290.538 342.515 L 290.538 342.515 L 290.538 342.515 Q 290.538 337.595 292.086 335.759 Z  M 300.174 338.051 L 300.174 338.051 L 300.174 338.051 Q 299.49 336.875 297.618 336.875 L 297.618 336.875 L 297.618 336.875 Q 295.746 336.875 295.062 338.051 L 295.062 338.051 L 295.062 338.051 Q 294.378 339.227 294.378 342.515 L 294.378 342.515 L 294.378 342.515 Q 294.378 345.803 295.062 346.979 L 295.062 346.979 L 295.062 346.979 Q 295.746 348.155 297.618 348.155 L 297.618 348.155 L 297.618 348.155 Q 299.49 348.155 300.174 346.979 L 300.174 346.979 L 300.174 346.979 Q 300.858 345.803 300.858 342.515 L 300.858 342.515 L 300.858 342.515 Q 300.858 339.227 300.174 338.051 Z "})),(0,d.jsxs)("g",{className:"propeller-group",children:[(0,d.jsx)("path",{className:`${e.propeller} ${e.propellerCW}`,style:{animation:n},d:" M 461.563 418.77 L 463.992 416.34 Q 465.495 407.116 466.461 400.395 C 467.426 393.675 469.363 388.087 474.731 383.284 Q 533.862 341.514 538.196 338.859 C 542.529 336.203 548.345 334.299 551.492 338.29 C 554.639 342.282 553.481 346.02 549.419 350.082 L 471.147 428.354 L 461.563 418.77 Z  M 427.729 471.772 L 425.299 474.202 Q 423.797 483.426 422.831 490.146 C 421.866 496.867 419.929 502.454 414.561 507.257 Q 355.43 549.028 351.096 551.683 C 346.763 554.338 340.947 556.243 337.8 552.251 C 334.653 548.26 335.811 544.522 339.873 540.46 L 418.145 462.187 L 427.729 471.772 Z "}),(0,d.jsx)("path",{className:`${e.propeller} ${e.propellerCCW}`,style:{animation:o},d:" M 461.563 135.773 L 463.992 138.203 Q 465.495 147.426 466.461 154.147 C 467.426 160.868 469.363 166.455 474.731 171.258 Q 533.862 213.028 538.196 215.684 C 542.529 218.339 548.345 220.244 551.492 216.252 C 554.639 212.26 553.481 208.523 549.419 204.46 L 471.147 126.188 L 461.563 135.773 Z  M 427.729 82.77 L 425.299 80.34 Q 423.797 71.117 422.831 64.396 C 421.866 57.675 419.929 52.088 414.561 47.285 Q 355.43 5.515 351.096 2.859 C 346.763 0.204 340.947 -1.701 337.8 2.291 C 334.653 6.282 335.811 10.02 339.873 14.082 L 418.145 92.355 L 427.729 82.77 Z "}),(0,d.jsx)("path",{className:`${e.propeller} ${e.propellerCCW}`,style:{animation:l},d:" M 125.563 471.772 L 127.993 474.202 Q 129.496 483.426 130.461 490.146 C 131.427 496.867 133.363 502.454 138.731 507.257 Q 197.863 549.028 202.196 551.683 C 206.53 554.338 212.345 556.243 215.492 552.251 C 218.639 548.26 217.482 544.522 213.419 540.46 L 135.148 462.187 L 125.563 471.772 Z  M 91.73 418.77 L 89.3 416.34 Q 87.797 407.116 86.832 400.395 C 85.866 393.675 83.93 388.087 78.562 383.284 Q 19.431 341.514 15.097 338.859 C 10.763 336.203 4.948 334.299 1.801 338.29 C -1.346 342.282 -0.189 346.02 3.874 350.082 L 82.146 428.354 L 91.73 418.77 Z "}),(0,d.jsx)("path",{className:`${e.propeller} ${e.propellerCW}`,style:{animation:a},d:" M 125.563 82.77 L 127.993 80.34 Q 129.496 71.117 130.461 64.396 C 131.427 57.675 133.363 52.088 138.731 47.285 Q 197.863 5.515 202.196 2.859 C 206.53 0.204 212.345 -1.701 215.492 2.291 C 218.639 6.282 217.482 10.02 213.419 14.083 L 135.147 92.355 L 125.563 82.77 Z  M 91.73 135.773 L 89.3 138.203 Q 87.797 147.426 86.832 154.147 C 85.866 160.868 83.93 166.455 78.562 171.258 Q 19.431 213.028 15.097 215.684 C 10.763 218.339 4.948 220.243 1.801 216.252 C -1.346 212.26 -0.189 208.523 3.874 204.46 L 82.146 126.188 L 91.73 135.773 Z "})]})]})},defaultSize:{width:100,height:100},getNewOptions:t=>Object.assign({},t),prepareData:(t,e)=>{return{bRightRotorRPM:null!==e&&void 0!==e&&e.bRightRotorRPM?t.getScalar(e.bRightRotorRPM).value():0,bLeftRotorRPM:null!==e&&void 0!==e&&e.bLeftRotorRPM?t.getScalar(e.bLeftRotorRPM).value():0,fRightRotorRPM:null!==e&&void 0!==e&&e.fRightRotorRPM?t.getScalar(e.fRightRotorRPM).value():0,fLeftRotorRPM:null!==e&&void 0!==e&&e.fLeftRotorRPM?t.getScalar(e.fLeftRotorRPM).value():0,yawAngle:null!==e&&void 0!==e&&e.yawAngle?t.getScalar(e.yawAngle).value():0}},registerOptionsUI:t=>{const e=["Drone Top"];t.addCustomEditor({category:e,id:"yawAngle",path:"config.yawAngle",name:"Yaw Angle",editor:m.k9}).addCustomEditor({category:e,id:"fRightRotorRPM",path:"config.fRightRotorRPM",name:"Front Right Rotor RPM",editor:m.k9}).addCustomEditor({category:e,id:"fLeftRotorRPM",path:"config.fLeftRotorRPM",name:"Front Left Rotor RPM",editor:m.k9}).addCustomEditor({category:e,id:"bRightRotorRPM",path:"config.bRightRotorRPM",name:"Back Right Rotor RPM",editor:m.k9}).addCustomEditor({category:e,id:"bLeftRotorRPM",path:"config.bLeftRotorRPM",name:"Back Left Rotor RPM",editor:m.k9})}},Q=t=>({propeller:L.css`
    transform-origin: 50% 50%;
    transform-box: fill-box;
    display: block;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,propellerCW:L.css`
    animation-direction: normal;
  `,propellerCCW:L.css`
    animation-direction: reverse;
  `});var S=i("./public/app/features/canvas/elements/icon.tsx"),$=i("./public/app/core/config.ts"),N=i("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");let P,_;!function(t){t.Left="left",t.Center="center",t.Right="right"}(P||(P={})),function(t){t.Top="top",t.Middle="middle",t.Bottom="bottom"}(_||(_={}));const z=(0,s.stylesFactory)((t,e)=>({container:L.css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
  `,span:L.css`
    display: table-cell;
    vertical-align: ${e.valign};
    text-align: ${e.align};
    font-size: ${null===e||void 0===e?void 0:e.size}px;
    color: ${null===e||void 0===e?void 0:e.color};
  `})),T={id:"text-box",name:"Text",description:"Text box",display:class extends n.PureComponent{render(){const{data:t}=this.props,e=z($.vc.theme2,t);return(0,d.jsx)("div",{className:e.container,children:(0,d.jsx)("span",{className:e.span,children:null===t||void 0===t?void 0:t.text})})}},defaultSize:{width:240,height:160},getNewOptions:t=>Object.assign({background:{color:{fixed:"grey"}}},t,{config:{align:P.Left,valign:_.Middle}}),prepareData:(t,e)=>{var i,o;const a={text:e.text?t.getText(e.text).value():"",align:null!==(i=e.align)&&void 0!==i?i:P.Center,valign:null!==(o=e.valign)&&void 0!==o?o:_.Middle,size:e.size};return e.color&&(a.color=t.getColor(e.color).value()),a},registerOptionsUI:t=>{const e=["Text box"];t.addCustomEditor({category:e,id:"textSelector",path:"config.text",name:"Text",editor:l.$}).addCustomEditor({category:e,id:"config.color",path:"config.color",name:"Text color",editor:N.L,settings:{},defaultValue:{}}).addRadio({category:e,path:"config.align",name:"Align text",settings:{options:[{value:P.Left,label:"Left"},{value:P.Center,label:"Center"},{value:P.Right,label:"Right"}]},defaultValue:P.Left}).addRadio({category:e,path:"config.valign",name:"Vertical align",settings:{options:[{value:_.Top,label:"Top"},{value:_.Middle,label:"Middle"},{value:_.Bottom,label:"Bottom"}]},defaultValue:_.Middle}).addNumberInput({category:e,path:"config.size",name:"Text size",settings:{placeholder:"Auto"}})}};var O,Z,I,A,E;const D={id:"windTurbine",name:"Wind Turbine",description:"Spinny spinny",display:t=>{const e=(0,s.useStyles2)(B),{data:i}=t,o=`spin ${null!==i&&void 0!==i&&i.rpm?60/Math.abs(i.rpm):0}s linear infinite`;return(0,d.jsxs)("svg",{viewBox:"0 0 189.326 283.989",preserveAspectRatio:"xMidYMid meet",children:[O||(O=(0,d.jsxs)("symbol",{id:"blade",children:[(0,d.jsx)("path",{fill:"#e6e6e6",id:"blade-front",d:"M14.6491879,1.85011601 C14.2684455,-0.0535962877 10.7150812,-0.815081206 9.06473318,3.37308585 L0.434338747,70.7658933 L8.93805104,91.9607889 L15.4106729,90.437819 L17.5684455,78.3807425 L14.5218097,1.97679814 L14.6491879,1.85011601 Z"}),(0,d.jsx)("path",{fill:"#d0d6d7",id:"blade-side",d:"M11.0951276,0.581206497 C10.3336427,0.961948956 9.57215777,1.85011601 8.93735499,3.24640371 L0.306960557,70.6392111 L8.81067285,91.8341067 L3.35359629,70.0044084 L11.0951276,0.581206497 Z"})]})),(0,d.jsxs)("g",{children:[Z||(Z=(0,d.jsxs)("g",{id:"structure",transform:"translate(58.123, 82.664)",fillRule:"nonzero",children:[(0,d.jsx)("polygon",{id:"tower",fill:"#e6e6e6",points:"33.111,10.984 39.965,10.984 44.28,196.176 28.796,196.176"}),(0,d.jsx)("path",{id:"yaw",fill:"rgba(0,0,0,0.25)",d:"M40.3454756,23.2948956 L40.7262181,34.8445476 C38.8225058,35.0986079 35.7765661,35.0986079 32.349884,34.337123 L32.7306265,23.2955916 L40.3454756,23.2955916 L40.3454756,23.2948956 Z"}),(0,d.jsx)("path",{id:"base",fill:"#d0d6d7",transform:"translate(0 42)",d:"M26.3846868,150.591647 L46.5640371,150.591647 C48.8484919,150.591647 50.7522042,152.49536 50.7522042,154.779814 L50.7522042,158.967981 L22.0691415,158.967981 L22.0691415,154.779814 C22.0691415,152.49536 23.9728538,150.591647 26.2573086,150.591647 L26.3846868,150.591647 Z"}),(0,d.jsx)("circle",{id:"nacelle",fill:"#e6e6e6",cx:"36.54",cy:"12",r:"11.93"}),(0,d.jsx)("circle",{id:"gearbox",fill:"none",stroke:"#d0d6d7",strokeWidth:"2.75",cx:"36.538",cy:"11.999",r:"5.8"})]})),(0,d.jsxs)("g",{className:e.blade,style:{animation:o},children:[I||(I=(0,d.jsx)("use",{id:"blade1",href:"#blade",x:"83.24",y:"0"})),A||(A=(0,d.jsx)("use",{id:"blade2",href:"#blade",x:"83.24",y:"0",transform:"rotate(120 94.663 94.663)"})),E||(E=(0,d.jsx)("use",{id:"blade3",href:"#blade",x:"83.24",y:"0",transform:"rotate(-120 94.663 94.663)"}))]})]})]})},defaultSize:{width:100,height:100},getNewOptions:t=>Object.assign({},t),prepareData:(t,e)=>{return{rpm:null!==e&&void 0!==e&&e.rpm?t.getScalar(e.rpm).value():0}},registerOptionsUI:t=>{t.addCustomEditor({category:["Wind Turbine"],id:"rpm",path:"config.rpm",name:"RPM",editor:m.k9})}},B=t=>({blade:L.css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    transform-origin: 94.663px 94.663px;
    transform: rotate(15deg);
  `}),F=Object.assign({},S.e.getNewOptions(),{type:S.e.id,name:"Element 1"}),J=new a.Registry(()=>[S.e,T,c,M,f,w,D])},"./public/app/features/canvas/runtime/element.tsx":(t,e,i)=>{i.d(e,{f:()=>(class{constructor(t,e,i){var o,a;this.item=t,this.options=e,this.parent=i,l(this,"UID",r++),l(this,"revId",0),l(this,"sizeStyle",{}),l(this,"dataStyle",{}),l(this,"div",void 0),l(this,"data",void 0),l(this,"initElement",t=>{this.div=t,this.applyLayoutStylesToDiv()}),l(this,"applyDrag",t=>{t.target.style.transform=t.transform}),l(this,"applyResize",t=>{const{options:e}=this,{placement:i,constraint:o}=e,{vertical:a,horizontal:s}=null!==o&&void 0!==o?o:{},l=a===n.fJ.Top||a===n.fJ.TopBottom,r=a===n.fJ.Bottom||a===n.fJ.TopBottom,d=s===n._5.Left||s===n._5.LeftRight,c=s===n._5.Right||s===n._5.LeftRight,p=t.target.style,h=t.delta[0],g=t.delta[1],u=t.direction[0],L=t.direction[1];1===u?c?(i.right-=h,p.right=`${i.right}px`,d||(i.width=t.width,p.width=`${i.width}px`)):(i.width=t.width,p.width=`${i.width}px`):-1===u&&(d?(i.left-=h,i.width=t.width,p.left=`${i.left}px`,p.width=`${i.width}px`):(i.width+=h,p.width=`${i.width}px`)),-1===L?l?(i.top-=g,i.height=t.height,p.top=`${i.top}px`,p.height=`${i.height}px`):(i.height=t.height,p.height=`${i.height}px`):1===L&&(r?(i.bottom-=g,i.height=t.height,p.bottom=`${i.bottom}px`,p.height=`${i.height}px`):(i.height=t.height,p.height=`${i.height}px`))}),this.item=t,this.options=e,this.parent=i;const s=`Element ${Date.now()}`;e||(this.options={type:t.id,name:s}),e.constraint=null!==(o=e.constraint)&&void 0!==o?o:{vertical:n.fJ.Top,horizontal:n._5.Left},e.placement=null!==(a=e.placement)&&void 0!==a?a:{width:100,height:100,top:0,left:0};const d=this.getScene();if(!e.name){const t=null===d||void 0===d?void 0:d.getNextElementName();e.name=null!==t&&void 0!==t?t:s}null===d||void 0===d||d.byName.set(e.name,this)}getScene(){let t=this.parent;for(;t;){if(t.isRoot())return t.scene;t=t.parent}}getName(){return this.options.name}applyLayoutStylesToDiv(){var t,e,i,o,a,s,l,r,d,c,p,h,g,u,L,m,f,v,x,b,C;if(this.isRoot())return;const{constraint:y}=this.options,{vertical:w,horizontal:R}=null!==y&&void 0!==y?y:{},k=null!==(t=this.options.placement)&&void 0!==t?t:{},j={position:"absolute"},M=["0px","0px"];switch(w){case n.fJ.Top:k.top=null!==(e=k.top)&&void 0!==e?e:0,k.height=null!==(i=k.height)&&void 0!==i?i:100,j.top=`${k.top}px`,j.height=`${k.height}px`,delete k.bottom;break;case n.fJ.Bottom:k.bottom=null!==(o=k.bottom)&&void 0!==o?o:0,k.height=null!==(a=k.height)&&void 0!==a?a:100,j.bottom=`${k.bottom}px`,j.height=`${k.height}px`,delete k.top;break;case n.fJ.TopBottom:k.top=null!==(s=k.top)&&void 0!==s?s:0,k.bottom=null!==(l=k.bottom)&&void 0!==l?l:0,j.top=`${k.top}px`,j.bottom=`${k.bottom}px`,delete k.height;break;case n.fJ.Center:k.top=null!==(r=k.top)&&void 0!==r?r:0,k.height=null!==(d=k.height)&&void 0!==d?d:100,M[1]="-50%",j.top=`calc(50% - ${k.top}px)`,j.height=`${k.height}px`,delete k.bottom;break;case n.fJ.Scale:k.top=null!==(c=k.top)&&void 0!==c?c:0,k.bottom=null!==(p=k.bottom)&&void 0!==p?p:0,j.top=`${k.top}%`,j.bottom=`${k.bottom}%`,delete k.height}switch(R){case n._5.Left:k.left=null!==(h=k.left)&&void 0!==h?h:0,k.width=null!==(g=k.width)&&void 0!==g?g:100,j.left=`${k.left}px`,j.width=`${k.width}px`,delete k.right;break;case n._5.Right:k.right=null!==(u=k.right)&&void 0!==u?u:0,k.width=null!==(L=k.width)&&void 0!==L?L:100,j.right=`${k.right}px`,j.width=`${k.width}px`,delete k.left;break;case n._5.LeftRight:k.left=null!==(m=k.left)&&void 0!==m?m:0,k.right=null!==(f=k.right)&&void 0!==f?f:0,j.left=`${k.left}px`,j.right=`${k.right}px`,delete k.width;break;case n._5.Center:k.left=null!==(v=k.left)&&void 0!==v?v:0,k.width=null!==(x=k.width)&&void 0!==x?x:100,M[0]="-50%",j.left=`calc(50% - ${k.left}px)`,j.width=`${k.width}px`,delete k.right;break;case n._5.Scale:k.left=null!==(b=k.left)&&void 0!==b?b:0,k.right=null!==(C=k.right)&&void 0!==C?C:0,j.left=`${k.left}%`,j.right=`${k.right}%`,delete k.width}if(j.transform=`translate(${M[0]}, ${M[1]})`,this.options.placement=k,this.sizeStyle=j,this.div){for(const t in this.sizeStyle)this.div.style[t]=this.sizeStyle[t];for(const t in this.dataStyle)this.div.style[t]=this.dataStyle[t]}}setPlacementFromConstraint(t,e){var i,o,a,s,l,r,d,c,p,h,g,u;const{constraint:L}=this.options,{vertical:m,horizontal:f}=null!==L&&void 0!==L?L:{};var v;(t||(t=this.div&&this.div.getBoundingClientRect()),e)||(e=this.div&&(null===(v=this.div.parentElement)||void 0===v?void 0:v.getBoundingClientRect()));const x=t&&e?Math.abs(Math.round(t.top-e.top)):0,b=t&&e?Math.abs(Math.round(t.bottom-e.bottom)):0,C=t&&e?Math.abs(Math.round(t.left-e.left)):0,y=t&&e?Math.abs(Math.round(t.right-e.right)):0,w={},R=null!==(i=null===(o=t)||void 0===o?void 0:o.width)&&void 0!==i?i:100,k=null!==(a=null===(s=t)||void 0===s?void 0:s.height)&&void 0!==a?a:100;switch(m){case n.fJ.Top:w.top=x,w.height=k;break;case n.fJ.Bottom:w.bottom=b,w.height=k;break;case n.fJ.TopBottom:w.top=x,w.bottom=b;break;case n.fJ.Center:const i=t?x+k/2:0,o=e?e.height/2:0,a=o-i;w.top=a,w.height=k;break;case n.fJ.Scale:w.top=x/(null!==(l=null===(r=e)||void 0===r?void 0:r.height)&&void 0!==l?l:k)*100,w.bottom=b/(null!==(d=null===(c=e)||void 0===c?void 0:c.height)&&void 0!==d?d:k)*100}switch(f){case n._5.Left:w.left=C,w.width=R;break;case n._5.Right:w.right=y,w.width=R;break;case n._5.LeftRight:w.left=C,w.right=y;break;case n._5.Center:const i=t?C+R/2:0,o=e?e.width/2:0,a=o-i;w.left=a,w.width=R;break;case n._5.Scale:w.left=C/(null!==(p=null===(h=e)||void 0===h?void 0:h.width)&&void 0!==p?p:R)*100,w.right=y/(null!==(g=null===(u=e)||void 0===u?void 0:u.width)&&void 0!==g?g:R)*100}this.options.placement=w,this.applyLayoutStylesToDiv(),this.revId++}updateData(t){var e;this.item.prepareData&&(this.data=this.item.prepareData(t,this.options.config),this.revId++);const{background:i,border:a}=this.options,n={};if(i){if(i.color){const e=t.getColor(i.color);n.backgroundColor=e.value()}if(i.image){const a=t.getResource(i.image);if(a){const t=a.value();if(t)switch(n.backgroundImage=`url("${t}")`,null!==(e=i.size)&&void 0!==e?e:o.Uy.Contain){case o.Uy.Contain:n.backgroundSize="contain",n.backgroundRepeat="no-repeat";break;case o.Uy.Cover:n.backgroundSize="cover",n.backgroundRepeat="no-repeat";break;case o.Uy.Original:n.backgroundRepeat="no-repeat";break;case o.Uy.Tile:n.backgroundRepeat="repeat";break;case o.Uy.Fill:n.backgroundSize="100% 100%"}}}}if(a&&a.color&&a.width){const e=t.getColor(a.color);n.borderWidth=a.width,n.borderStyle="solid",n.borderColor=e.value(),n.backgroundImage&&(n.backgroundOrigin="padding-box")}this.dataStyle=n,this.applyLayoutStylesToDiv()}isRoot(){return!1}visit(t){t(this)}onChange(t){var e;this.item.id!==t.type&&(this.item=null!==(e=o.Jk.getIfExists(t.type))&&void 0!==e?e:a.C);const i=this.options.name,n=t.name;this.revId++,this.options=Object.assign({},t);let s=this.parent;for(;s;){if(s.isRoot()){s.scene.save();break}s.revId++,s=s.parent}const l=this.getScene();i!==n&&l&&(l.byName.delete(i),l.byName.set(n,this))}getSaveModel(){return Object.assign({},this.options)}render(){const{item:t}=this;return(0,s.jsx)("div",{ref:this.initElement,children:(0,s.jsx)(t.display,{config:this.options.config,data:this.data},`${this.UID}/${this.revId}`)},this.UID)}})});i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var o=i("./public/app/features/canvas/index.ts"),a=i("./public/app/features/canvas/elements/notFound.tsx"),n=i("./public/app/features/canvas/types.ts"),s=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}let r=0},"./public/app/features/canvas/types.ts":(t,e,i)=>{let o,a,n;i.d(e,{Uy:()=>n,_5:()=>o,fJ:()=>a}),function(t){t.Left="left",t.Right="right",t.LeftRight="leftright",t.Center="center",t.Scale="scale"}(o||(o={})),function(t){t.Top="top",t.Bottom="bottom",t.TopBottom="topbottom",t.Center="center",t.Scale="scale"}(a||(a={})),function(t){t.Original="original",t.Contain="contain",t.Cover="cover",t.Fill="fill",t.Tile="tile"}(n||(n={}))},"./public/app/plugins/panel/canvas/editor/APIEditor.tsx":(t,e,i)=>{i.d(e,{U:()=>g,t:()=>h});var o,a,n=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=i("./packages/grafana-data/src/index.ts"),l=i("./packages/grafana-runtime/src/index.ts"),r=i("./packages/grafana-ui/src/index.ts"),d=i("./public/app/core/core.ts"),c=i("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p={settings:{}},h=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var i;t&&(0,l.getBackendSrv)().fetch({url:t.endpoint,method:"POST",data:null!==(i=t.data)&&void 0!==i?i:{}}).subscribe({error:t=>{e&&(d.h$.emit(s.AppEvents.alertError,["Error has occurred: ",JSON.stringify(t)]),console.error(t))},complete:()=>{e&&d.h$.emit(s.AppEvents.alertSuccess,["Test successful"])}})},g=t=>{var e,i;const{value:s,context:d,onChange:g}=t,u=(0,n.useCallback)(t=>{g(Object.assign({},s,{endpoint:t}))},[g,s]),L=(0,n.useCallback)(t=>{g(Object.assign({},s,{data:t}))},[g,s]);return l.config.disableSanitizeHtml?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.InlineFieldRow,{children:(0,c.jsx)(r.InlineField,{label:"Endpoint",labelWidth:9,grow:!0,children:(0,c.jsx)(r.StringValueEditor,{context:d,value:null===s||void 0===s?void 0:s.endpoint,onChange:u,item:p})})}),(0,c.jsx)(r.InlineFieldRow,{children:(0,c.jsx)(r.InlineField,{label:"Data",labelWidth:9,grow:!0,children:(0,c.jsx)(r.StringValueEditor,{context:d,value:null!==(e=null===s||void 0===s?void 0:s.data)&&void 0!==e?e:"{}",onChange:L,item:p})})}),(t=>{if(t&&t.endpoint)return(0,c.jsx)(r.Button,{onClick:()=>h(t,!0),title:"Test API",children:"Test API"})})(s),a||(a=(0,c.jsx)("br",{})),(t=>{try{const e=JSON.parse(t);return o||(o=(0,c.jsx)(r.JSONFormatter,{json:e}))}catch(t){return`Invalid JSON provided: ${t.message}`}})(null!==(i=null===s||void 0===s?void 0:s.data)&&void 0!==i?i:"{}")]}):(0,c.jsx)(c.Fragment,{children:"Must enable disableSanitizeHtml feature flag to access"})}}}]);