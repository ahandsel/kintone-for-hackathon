import{o as n,e as a,f as s,d as k,p as B,P as $,L as A,g as e,am as R,B as u,l as t,m as Z,H as l,q as m,S as h,as as M,F as y,at as S,_ as L}from"./index-e3d12a73.js";import{D as V,_ as D}from"./DevicesList-27a5f1a4.js";import{r as H}from"./recording-eca406ef.js";const N={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z=s("path",{fill:"currentColor",d:"m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"},null,-1),F=[z];function T(r,o){return n(),a("svg",N,[...F])}const q={name:"carbon-chevron-up",render:T},E={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G=s("path",{fill:"currentColor",d:"M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"},null,-1),P=s("path",{fill:"currentColor",d:"M20 12v8h-8v-8h8m0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"},null,-1),U=[G,P];function j(r,o){return n(),a("svg",E,[...U])}const I={name:"carbon-stop-outline",render:j},J={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K=s("path",{fill:"currentColor",d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"},null,-1),O=s("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"},null,-1),Q=[K,O];function W(r,o){return n(),a("svg",J,[...Q])}const X={name:"carbon-user-avatar",render:W},Y={class:"slidev-icon-btn h-full !text-sm !px-0"},ee=k({__name:"RecordingControls",setup(r){const{recording:o,showAvatar:c,streamCamera:v,stopRecording:p,toggleAvatar:i}=H,_=B("slidev-webcam-show",!1);$(c,()=>{_.value=c.value});function g(){o.value?p():S.value=!0}return A(()=>{_.value&&!c.value&&i()}),(oe,d)=>{const f=X,x=I,b=D,C=q;return n(),a(y,null,[e(R)!=="none"?(n(),a("button",{key:0,class:u(["slidev-icon-btn <md:hidden",{"text-green-500":!!(e(c)&&e(v))}]),title:"Show camera view",onClick:d[0]||(d[0]=(...w)=>e(i)&&e(i)(...w))},[t(l,{text:"Toggle camera view"}),t(f)],2)):Z("v-if",!0),s("button",{class:u(["slidev-icon-btn",{"text-red-500":e(o)}]),title:"Recording",onClick:g},[t(l,{text:e(o)?"Stop record video":"Record video"},null,8,["text"]),e(o)?(n(),m(x,{key:0})):(n(),m(b,{key:1}))],2),t(M,{disabled:e(o)},{button:h(()=>[s("button",Y,[t(l,{text:"Select recording device"}),t(C,{class:"opacity-50"})])]),menu:h(()=>[t(V)]),_:1},8,["disabled"])],64)}}}),ae=L(ee,[["__file","/Users/puppy/GitHub/kintone-for-hackathon/node_modules/@slidev/client/internals/RecordingControls.vue"]]);export{ae as default};