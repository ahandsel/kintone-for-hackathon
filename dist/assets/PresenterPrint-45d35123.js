import{d as _,u as d,a as p,c as m,b as u,r as h,e as s,f as t,t as a,g as l,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-e3d12a73.js";import{N as w}from"./NoteDisplay-a47cfdc4.js";const V={class:"m-4"},H={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),s("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",H,[t("h1",L,a(l(m).title),1),t("div",S,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(i.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),j])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),s("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/puppy/GitHub/kintone-for-hackathon/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
