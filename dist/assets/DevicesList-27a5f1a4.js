import{o as u,e as v,f,d as h,b as c,l as p,g as l,am as t,W as o,au as n,av as i,q as y,m as x,_ as L}from"./index-e3d12a73.js";import{c as k,d as C,s as M,e as b,f as g,m}from"./recording-eca406ef.js";const B={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D=f("path",{fill:"currentColor",d:"M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2ZM4 8v16h17v-6a1 1 0 0 1 1.58-.81L28 21.06V10.94l-5.42 3.87A1 1 0 0 1 21 14V8Z"},null,-1),I=[D];function N(_,r){return u(),v("svg",B,[...I])}const E={name:"carbon-video",render:N},U={class:"text-sm"},T=h({__name:"DevicesList",setup(_){const r=c(()=>[{value:"none",display:"None"},...k.value.map(e=>({value:e.deviceId,display:e.label}))]),V=c(()=>[{value:"none",display:"None"},...C.value.map(e=>({value:e.deviceId,display:e.label}))]),d=M.map(e=>({value:e,display:b[e].toUpperCase()}));return g(),(e,s)=>(u(),v("div",U,[p(n,{modelValue:l(t),"onUpdate:modelValue":s[0]||(s[0]=a=>o(t)?t.value=a:null),title:"Camera",items:r.value},null,8,["modelValue","items"]),p(n,{modelValue:l(i),"onUpdate:modelValue":s[1]||(s[1]=a=>o(i)?i.value=a:null),title:"Microphone",items:V.value},null,8,["modelValue","items"]),l(d).length?(u(),y(n,{key:0,modelValue:l(m),"onUpdate:modelValue":s[2]||(s[2]=a=>o(m)?m.value=a:null),title:"mimeType",items:l(d)},null,8,["modelValue","items"])):x("v-if",!0)]))}}),H=L(T,[["__file","/Users/puppy/GitHub/kintone-for-hackathon/node_modules/@slidev/client/internals/DevicesList.vue"]]);export{H as D,E as _};
