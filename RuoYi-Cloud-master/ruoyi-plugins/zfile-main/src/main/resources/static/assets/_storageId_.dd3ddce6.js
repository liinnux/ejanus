import{r as g,L as K,P as X,o as Y,ai as ee,Q as te,u as t,a as y,b as U,e as s,p as e,h as a,t as ae,S as F,f as oe,y as le,F as se,k as ie,U as re,V as ne,J as r}from"./index.9f622a37.js";import{b3 as z,b4 as de,l as me,m as pe,aR as ce,r as ue}from"./base.130d3d79.js";/* empty css                *//* empty css               *//* empty css              *//* empty css            */import{E as _e,a as fe}from"./select.52b82429.js";import"./scrollbar.cc00d8ca.js";import{E as ve}from"./popper.5fa9a149.js";import{E as he}from"./alert.9f52d17e.js";import"./tooltip.f118fcb0.js";import{E as ge}from"./switch.759c5aa3.js";import{_ as xe}from"./SvgIcon.261b5bde.js";import{Z as M,a as be}from"./ZFormItem.30bb018e.js";import{o as we,p as ye,e as L,q as ke}from"./admin-storage.bbd5bbcc.js";import{u as T,r as Ie}from"./common.9099d3b1.js";import{S as Ve}from"./sortable.esm.a99254e8.js";import{E as Z}from"./request.b205aa07.js";import{E as Re}from"./index.109b76e3.js";import Ee from"./readme-editor-dialog.76e6bb60.js";import{b as N}from"./route-block.9b0645f8.js";import{_ as Se}from"./plugin-vue_export-helper.21dcd24c.js";import{r as Ce}from"./BadgeCheckIcon.d2916495.js";import{E as Ue}from"./index.36cab1dc.js";import{v as ze}from"./directive.0cfb6a3e.js";import"./index.36d84cab.js";import"./index.d1012321.js";import"./index.0cd3ee2d.js";import"./event.776e7e11.js";import"./scroll.4c4cec4f.js";import"./isEqual.8c560905.js";import"./debounce.1c205aad.js";import"./validator.3c5d84ac.js";import"./focus-trap.fe9e3ce7.js";import"./event.3ec63147.js";import"./index.5cf4e3bb.js";import"./index.612f1529.js";import"./dialog.d6048ccd.js";import"./overlay.82806793.js";import"./refs.dab41f4c.js";let i=g([]),B=g(!1);function Te(c,u){let x=u.params.storageId;const k=()=>{we(x).then(m=>{i.value=m.data,i.value.length===0&&b(),I()})},I=()=>{const m=document.querySelector(".z-form-body");Ve.create(m,{draggable:".expression-item",filter:".el-button, .editor-input",onEnd:l=>{if(l.oldIndex===l.newIndex)return;const _=i.value.splice(l.oldIndex-1,1)[0];i.value.splice(l.newIndex-1,0,_)}})},V=()=>{if(!i.value.find(l=>{if(T.isEmpty(l.description)||T.isEmpty(l.expression)||T.isEmpty(l.readmeText))return Z.warning("\u8BF7\u68C0\u67E5\u6570\u636E\u586B\u5199\u662F\u5426\u5B8C\u6574"),!0})){B.value=!0;for(let l=0;l<i.value.length;l++){let _=i.value[l];_.id=l+1}ye(x,i.value).then(()=>{Re.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:l=>{l==="confirm"&&c.push("/admin/storage-list")}})}).finally(()=>{B.value=!1})}},b=()=>{i.value.push({description:"\u8868\u8FBE\u5F0F - "+(i.value.length+1),expression:"",readmeText:"",displayMode:"top",storageId:x})};return{loading:B,loadReadmeData:k,readmeList:i,addReadmeItem:b,deleteReadmeItem:m=>{i.value.splice(m,1)},saveReadmeData:V}}const p=c=>(re("data-v-1c3d44e3"),c=c(),ne(),c),Be={class:"flex justify-between"},qe=p(()=>e("span",{class:"mr-4 text-sm text-gray-500"},"\u517C\u5BB9\u4E3A\u8BFB\u53D6 readme.md",-1)),De=p(()=>e("div",{class:"rules-tips"},"Glob \u8868\u8FBE\u5F0F\u89C4\u5219\uFF1A",-1)),Fe=p(()=>e("div",{class:"rules-tips"},[e("b",null,"/"),r(": \u6839\u76EE\u5F55, \u5982 "),e("span",{class:"code select-all"},"/"),r(" \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Me=p(()=>e("div",{class:"rules-tips"},[e("b",null,"*"),r("\uFF1A\u5355\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),e("span",{class:"code select-all"},"/*"),r(" \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u7684\u76F4\u63A5\u5B50\u6587\u4EF6\u5939\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Le=p(()=>e("div",{class:"rules-tips"},[e("b",null,"**"),r("\uFF1A\u591A\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),e("span",{class:"code select-all"},"/music/**"),r(" \u8868\u793A /music \u6587\u4EF6\u5939\u53CA\u4EE5\u4E0B\u6240\u6709\u6587\u4EF6\u5939\u90FD\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863.")],-1)),Ne=p(()=>e("div",{class:"rules-tips"},"\u6CE8\uFF1A\u7CFB\u7EDF\u5339\u914D\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u7684\u89C4\u5219\u5C31\u4F1A\u53D6\u6587\u6863\u8FDB\u884C\u663E\u793A\uFF0C\u6240\u4EE5\u8BF7\u8C03\u6574\u597D\u89C4\u5219\u987A\u5E8F\uFF0C\u4E0B\u65B9\u89C4\u5219\u53EF\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1)),Ze={class:"rules-tips-link"},Ge={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},$e=p(()=>e("span",null,"\u53C2\u8003\u6587\u7AE0 (Wikipedia)",-1)),je={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Ae=r("\u53C2\u8003\u6587\u7AE0 (\u962E\u4E00\u5CF0)"),Je={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},Oe=r("\u53C2\u8003\u6587\u7AE0 (Github)"),Pe={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},Qe=r("\u6DFB\u52A0\u66F4\u591A"),We=r("\u4FDD\u5B58\u8BBE\u7F6E"),G={__name:"[storageId]",setup(c){let u=K(),x=X(),k=u.params.storageId;const{loading:I,loadReadmeData:V,readmeList:b,addReadmeItem:q,deleteReadmeItem:m,saveReadmeData:l}=Te(x,u);Y(()=>{V(),$()});const _=g(),$=()=>{L(k).then(n=>{n.data.type=n.data.type.key,_.value=n.data})};let f=g(!1);L(u.params.storageId).then(n=>{f.value=n.data.compatibilityReadme||!1});const j=()=>{ke(u.params.storageId,f.value).then(n=>{Z.success("\u4FDD\u5B58\u6210\u529F")})};let R=g({}),v=g(!1);const A=n=>{v.value=!0,R.value=n};return(n,h)=>{const J=xe,O=ee("router-link"),P=ge,D=ve,Q=he,E=Ue,S=_e,W=fe,C=ue,H=ze;return te((y(),U(be,{model:t(b),class:"zfile-admin-readme-form"},{"form-title":s(()=>{var o;return[e("div",Be,[e("div",null,[a(O,{to:"/admin/storage-list"},{default:s(()=>[a(J,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),e("span",null,"\u76EE\u5F55\u6587\u6863\uFF08"+ae((o=_.value)==null?void 0:o.name)+"\uFF09",1)]),a(D,{placement:"top",content:"\u542F\u7528\u540E\u4E0B\u53D1\u7684\u89C4\u5219\u8BBE\u7F6E\u4F1A\u5931\u6548\uFF0C\u4EC5\u4F1A\u4E3A\u8BFB\u53D6\u76EE\u5F55\u4E0B\u7684 readme.md \u6587\u4EF6\u6765\u6E32\u67D3\u6587\u6863, \u4E14\u56FA\u5B9A\u5728\u5E95\u90E8\u663E\u793A."},{default:s(()=>[e("div",null,[qe,a(P,{onChange:j,"active-text":"\u662F","inline-prompt":"","inactive-text":"\u5426",modelValue:t(f),"onUpdate:modelValue":h[0]||(h[0]=w=>F(f)?f.value=w:f=w)},null,8,["modelValue"])])]),_:1})])]}),"form-sub-title":s(()=>[a(Q,{closable:!1,type:"info"},{default:s(()=>[De,Fe,Me,Le,Ne,e("div",Ze,[e("a",Ge,[a(t(z),{class:"inline mr-1"}),$e]),e("a",je,[a(t(z),{class:"inline mr-1"}),Ae]),e("a",Je,[a(t(z),{class:"inline mr-1"}),Oe])])]),_:1})]),footer:s(()=>[a(C,{type:"primary",size:"default",icon:t(Ce),onClick:t(l)},{default:s(()=>[We]),_:1},8,["icon","onClick"])]),default:s(()=>[(y(!0),oe(se,null,le(t(b),(o,w)=>(y(),U(M,{required:!0,key:o,class:"expression-item"},{default:s(()=>[e("div",Pe,[a(D,{content:"\u6B64\u5904\u53EF\u586B\u5199\u8868\u8FBE\u4E66\u63CF\u8FF0\uFF0C\u7528\u4E8E\u8F85\u52A9\u8BB0\u5FC6\uFF0C\u9632\u6B62\u65F6\u95F4\u8FC7\u957F\u540E\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u542B\u4E49.",placement:"top"},{default:s(()=>[a(E,{"prefix-icon":t(de),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F\u63CF\u8FF0",modelValue:o.description,"onUpdate:modelValue":d=>o.description=d},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),a(E,{"prefix-icon":t(Ie),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F",modelValue:o.expression,"onUpdate:modelValue":d=>o.expression=d},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),a(E,{class:"editor-input",onClick:d=>A(o),readonly:"","prefix-icon":t(me),placeholder:"\u8BF7\u70B9\u51FB\u7F16\u8F91\u6587\u6863",modelValue:o.readmeText,"onUpdate:modelValue":d=>o.readmeText=d},null,8,["onClick","prefix-icon","modelValue","onUpdate:modelValue"]),a(W,{class:"editor-input",modelValue:o.displayMode,"onUpdate:modelValue":d=>o.displayMode=d},{default:s(()=>[a(S,{label:"\u9876\u90E8\u663E\u793A",value:"top"}),a(S,{label:"\u5E95\u90E8\u663E\u793A",value:"bottom"}),a(S,{label:"\u5F39\u7A97\u663E\u793A",value:"dialog"})]),_:2},1032,["modelValue","onUpdate:modelValue"]),a(C,{type:"danger",onClick:d=>t(m)(w),icon:t(pe)},null,8,["onClick","icon"])])]),_:2},1024))),128)),a(M,null,{default:s(()=>[a(C,{type:"primary",size:"default",icon:t(ce),onClick:t(q)},{default:s(()=>[Qe]),_:1},8,["icon","onClick"])]),_:1}),t(v)?(y(),U(Ee,{key:0,modelValue:t(R).readmeText,"onUpdate:modelValue":h[1]||(h[1]=o=>t(R).readmeText=o),visible:t(v),"onUpdate:visible":h[2]||(h[2]=o=>F(v)?v.value=o:v=o)},null,8,["modelValue","visible"])):ie("",!0)]),_:1},8,["model"])),[[H,t(I)]])}}};typeof N=="function"&&N(G);var Ft=Se(G,[["__scopeId","data-v-1c3d44e3"]]);export{Ft as default};
