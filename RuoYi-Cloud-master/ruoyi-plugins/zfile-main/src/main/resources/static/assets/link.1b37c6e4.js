var g=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var s=(r,l,o)=>l in r?g(r,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[l]=o,k=(r,l)=>{for(var o in l||(l={}))m.call(l,o)&&s(r,o,l[o]);if(c)for(var o of c(l))y.call(l,o)&&s(r,o,l[o]);return r},d=(r,l)=>b(r,x(l));import{b as w,L as E,u as C,E as z,_ as B,w as _}from"./base.130d3d79.js";import{d as L,a as t,f as v,b as f,e as $,q as P,u as n,k as a,n as u,g as h}from"./index.9f622a37.js";const S=w({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:E,default:""}}),j={click:r=>r instanceof MouseEvent},I=["href"],N={name:"ElLink"},q=L(d(k({},N),{props:S,emits:j,setup(r,{emit:l}){const o=r,i=C("link");function p(e){o.disabled||l("click",e)}return(e,M)=>(t(),v("a",{class:u([n(i).b(),n(i).m(e.type),n(i).is("disabled",e.disabled),n(i).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:p},[e.icon?(t(),f(n(z),{key:0},{default:$(()=>[(t(),f(P(e.icon)))]),_:1})):a("v-if",!0),e.$slots.default?(t(),v("span",{key:1,class:u(n(i).e("inner"))},[h(e.$slots,"default")],2)):a("v-if",!0),e.$slots.icon?h(e.$slots,"icon",{key:2}):a("v-if",!0)],10,I))}}));var D=B(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const F=_(D);export{F as E};
