var P=Object.defineProperty,E=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(t,e,l)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,m=(t,e)=>{for(var l in e||(e={}))R.call(e,l)&&w(t,l,e[l]);if(h)for(var l of h(e))j.call(e,l)&&w(t,l,e[l]);return t},p=(t,e)=>E(t,O(e));var k=(t,e,l)=>new Promise((s,a)=>{var o=d=>{try{c(l.next(d))}catch(r){a(r)}},u=d=>{try{c(l.throw(d))}catch(r){a(r)}},c=d=>d.done?s(d.value):Promise.resolve(d.value).then(o,u);c((l=l.apply(t,e)).next())});import{ah as Z,r as T,W as q,as as z,ao as g,e as D,Q as F,R as H,h as K,T as M,Z as $,m as B,a9 as I,av as Q,S as W}from"./index.9f622a37.js";import{u as N,aa as y,A as Y,P as G,ab as b,a8 as A}from"./base.130d3d79.js";function J(t){let e;const l=N("loading"),s=T(!1),a=q(p(m({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function o(n){a.text=n}function u(){const n=a.parent;if(!n.vLoadingAddClassList){let v=n.getAttribute("loading-number");v=Number.parseInt(v)-1,v?n.setAttribute("loading-number",v.toString()):(y(n,l.bm("parent","relative")),n.removeAttribute("loading-number")),y(n,l.bm("parent","hidden"))}c(),f.unmount()}function c(){var n,v;(v=(n=i.$el)==null?void 0:n.parentNode)==null||v.removeChild(i.$el)}function d(){var n;if(t.beforeClose&&!t.beforeClose())return;const v=a.parent;v.vLoadingAddClassList=void 0,s.value=!0,clearTimeout(e),e=window.setTimeout(()=>{s.value&&(s.value=!1,u())},400),a.visible=!1,(n=t.closed)==null||n.call(t)}function r(){!s.value||(s.value=!1,u())}const f=z({name:"ElLoading",setup(){return()=>{const n=a.spinner||a.svg,v=g("svg",m({class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"25 25 50 50"},n?{innerHTML:n}:{}),[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),V=a.text?g("p",{class:l.b("text")},[a.text]):void 0;return g(M,{name:l.b("fade"),onAfterLeave:r},{default:D(()=>[F(K("div",{style:{backgroundColor:a.background||""},class:[l.b("mask"),a.customClass,a.fullscreen?"is-fullscreen":""]},[g("div",{class:l.b("spinner")},[v,V])]),[[H,a.visible]])])})}}}),i=f.mount(document.createElement("div"));return p(m({},Z(a)),{setText:o,removeElLoadingChild:c,close:d,handleAfterLeave:r,vm:i,get $el(){return i.$el}})}let x;const U=function(t={}){if(!Y)return;const e=X(t);if(e.fullscreen&&x)return x;const l=J(p(m({},e),{closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(x=void 0)}}));ee(e,e.parent,l),_(e,e.parent,l),e.parent.vLoadingAddClassList=()=>_(e,e.parent,l);let s=e.parent.getAttribute("loading-number");return s?s=`${Number.parseInt(s)+1}`:s="1",e.parent.setAttribute("loading-number",s),e.parent.appendChild(l.$el),$(()=>l.visible.value=e.visible),e.fullscreen&&(x=l),l},X=t=>{var e,l,s,a;let o;return B(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(s=t.lock)!=null?s:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:o}},ee=(t,e,l)=>k(void 0,null,function*(){const{nextZIndex:s}=G(),a={};if(t.fullscreen)l.originalPosition.value=b(document.body,"position"),l.originalOverflow.value=b(document.body,"overflow"),a.zIndex=s();else if(t.parent===document.body){l.originalPosition.value=b(document.body,"position"),yield $();for(const o of["top","left"]){const u=o==="top"?"scrollTop":"scrollLeft";a[o]=`${t.target.getBoundingClientRect()[o]+document.body[u]+document.documentElement[u]-Number.parseInt(b(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])a[o]=`${t.target.getBoundingClientRect()[o]}px`}else l.originalPosition.value=b(e,"position");for(const[o,u]of Object.entries(a))l.$el.style[o]=u}),_=(t,e,l)=>{const s=N("loading");l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?A(e,s.bm("parent","relative")):y(e,s.bm("parent","relative")),t.fullscreen&&t.lock?A(e,s.bm("parent","hidden")):y(e,s.bm("parent","hidden"))},L=Symbol("ElLoading"),S=(t,e)=>{var l,s,a,o;const u=e.instance,c=i=>I(e.value)?e.value[i]:void 0,d=i=>{const n=B(i)&&(u==null?void 0:u[i])||i;return n&&T(n)},r=i=>d(c(i)||t.getAttribute(`element-loading-${Q(i)}`)),C=(l=c("fullscreen"))!=null?l:e.modifiers.fullscreen,f={text:r("text"),svg:r("svg"),svgViewBox:r("svgViewBox"),spinner:r("spinner"),background:r("background"),customClass:r("customClass"),fullscreen:C,target:(s=c("target"))!=null?s:C?void 0:t,body:(a=c("body"))!=null?a:e.modifiers.body,lock:(o=c("lock"))!=null?o:e.modifiers.lock};t[L]={options:f,instance:U(f)}},te=(t,e)=>{for(const l of Object.keys(e))W(e[l])&&(e[l].value=t[l])},oe={mounted(t,e){e.value&&S(t,e)},updated(t,e){const l=t[L];e.oldValue!==e.value&&(e.value&&!e.oldValue?S(t,e):e.value&&e.oldValue?I(e.value)&&te(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[L])==null||e.instance.close()}};export{U as L,oe as v};
