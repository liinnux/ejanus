System.register(["./base-legacy.f53a0713.js","./loading-legacy.36861a78.js","./ZFormItem-legacy.ee097f08.js","./button-legacy.9af9d3a6.js","./radio-legacy.7c8e5e97.js","./switch-legacy.8d49ebdd.js","./input-legacy.1469b40d.js","./index-legacy.2de5676a.js","./useLinkSetting-legacy.455d3ea0.js","./index-legacy.bb28c642.js","./directive-legacy.1ac5dcca.js","./index-legacy.61ab75a6.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./event-legacy.39ad8904.js","./validator-legacy.21431d38.js","./admin-setting-legacy.ac753087.js","./request-legacy.e2497089.js"],(function(e){"use strict";var l,a,t,o,n,d,i,r,u,f,s,c,p,m,V,y,b,g,w,_,h;return{setters:[function(e){l=e.r},function(){},function(e){a=e.Z,t=e.a},function(){},function(e){o=e.E},function(e){n=e.E},function(){},function(e){d=e.a,i=e.f,r=e.u,u=e.Q,f=e.b,s=e.e,c=e.p,p=e.h,m=e.t,V=e.R,y=e.I,b=e.k,g=e.J},function(e){w=e.u},function(e){_=e.E},function(e){h=e.v},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const k={class:"zfile-admin-down-link-body"},v=g(" 直链设置 "),j=g(" 这里可以配置直链相关设置 "),L=g(" 直链地址前缀, 如 http(s)://ip:port/"),U={class:"text-red-400 font-bold"},x=g("/path/filename "),T=g(" 仅控制是否显示直/短链生成按钮，不影响使用允许使用直/短链下载 "),z=g(" 是否记录直链下载日志 "),A=g(" 控制是否生成直链时显示短链路径及是否允许使用短链进行下载 "),E=g(" 控制是否生成直链时显示直链路径及是否允许使用直链进行下载 "),P=c("span",null,'是否允许未通过 "生成直链" 功能的直链可访问 (仅表示可访问, 如未开启上方 "是否允许使用直链（路径）" 功能，则即使访问了也不允许下载.)',-1),R=c("br",null,null,-1),S=c("br",null,null,-1),D=c("span",null,"因路径直链的格式是文件路径和文件名，所以很容易被猜到并访问, 如您不想未生成直链就可直接访问，可考虑使用此功能控制.",-1),B=g("不启用 Referer 防盗链"),C=g("启用白名单"),I=g("启用黑名单"),Z=g(" 防盗链支持访问文件直链或短链时校验，如用户直接访问直链跳转后的存储源原始链接，无法进行校验和拦截。 "),q=g("允许 Referer 为空"),F=g("禁止 Referer 为空"),J=g(" 每行输入一个域名，支持 * 通配符，如白名单 *zfile.vip 将只允许 zfile.vip、www.zfile.vip、demo.zfile.vip 等网站访问。 "),Q=g(" 每行输入一个域名，支持 * 通配符，如黑名单 *zfile.vip 将禁止所有如 zfile.vip、www.zfile.vip、demo.zfile.vip 等网站访问。 "),G={class:"dialog-footer"},H=g("保存");e("default",{__name:"basic-setting",setup(e){const g=w(),K=g.data,M=g.saveData,N=g.saveLoading;return(e,g)=>{const w=_,O=a,W=n,X=o,Y=l,$=t,ee=h;return d(),i("div",k,[r(K)?u((d(),f($,{key:0,model:r(K),"element-loading-text":"保存中..."},{"form-title":s((()=>[v])),"form-sub-title":s((()=>[j])),footer:s((()=>[c("span",G,[p(Y,{type:"primary",onClick:r(M)},{default:s((()=>[H])),_:1},8,["onClick"])])])),default:s((()=>[p(O,{label:"直链地址前缀"},{tips:s((()=>[L,c("span",U,m(r(K).directLinkPrefix),1),x])),default:s((()=>[p(w,{modelValue:r(K).directLinkPrefix,"onUpdate:modelValue":g[0]||(g[0]=e=>r(K).directLinkPrefix=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"显示生成直/短链功能"},{tips:s((()=>[T])),default:s((()=>[p(W,{modelValue:r(K).showLinkBtn,"onUpdate:modelValue":g[1]||(g[1]=e=>r(K).showLinkBtn=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"记录下载日志"},{tips:s((()=>[z])),default:s((()=>[p(W,{modelValue:r(K).recordDownloadLog,"onUpdate:modelValue":g[2]||(g[2]=e=>r(K).recordDownloadLog=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"是否允许使用短链"},{tips:s((()=>[A])),default:s((()=>[p(W,{modelValue:r(K).showShortLink,"onUpdate:modelValue":g[3]||(g[3]=e=>r(K).showShortLink=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"是否允许使用直链（路径）"},{tips:s((()=>[E])),default:s((()=>[p(W,{modelValue:r(K).showPathLink,"onUpdate:modelValue":g[4]||(g[4]=e=>r(K).showPathLink=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"是否允许路径直链可直接访问"},{tips:s((()=>[P,R,S,D])),default:s((()=>[p(W,{modelValue:r(K).allowPathLinkAnonAccess,"onUpdate:modelValue":g[5]||(g[5]=e=>r(K).allowPathLinkAnonAccess=e)},null,8,["modelValue"])])),_:1}),p(O,{label:"Referer 防盗链"},{tips:s((()=>[Z])),default:s((()=>[p(X,{modelValue:r(K).refererType,"onUpdate:modelValue":g[6]||(g[6]=e=>r(K).refererType=e),label:"off"},{default:s((()=>[B])),_:1},8,["modelValue"]),p(X,{modelValue:r(K).refererType,"onUpdate:modelValue":g[7]||(g[7]=e=>r(K).refererType=e),label:"white_list"},{default:s((()=>[C])),_:1},8,["modelValue"]),p(X,{modelValue:r(K).refererType,"onUpdate:modelValue":g[8]||(g[8]=e=>r(K).refererType=e),label:"black_list"},{default:s((()=>[I])),_:1},8,["modelValue"])])),_:1}),u(p(O,{label:"Referer 配置"},{default:s((()=>[p(X,{modelValue:r(K).refererAllowEmpty,"onUpdate:modelValue":g[9]||(g[9]=e=>r(K).refererAllowEmpty=e),label:!0},{default:s((()=>[q])),_:1},8,["modelValue"]),p(X,{modelValue:r(K).refererAllowEmpty,"onUpdate:modelValue":g[10]||(g[10]=e=>r(K).refererAllowEmpty=e),label:!1},{default:s((()=>[F])),_:1},8,["modelValue"])])),_:1},512),[[V,"no"!==r(K).refererType]]),u(p(O,{label:"白名单"},y({default:s((()=>[p(w,{type:"textarea",rows:6,placeholder:"每行输入一个域名",modelValue:r(K).refererValue,"onUpdate:modelValue":g[11]||(g[11]=e=>r(K).refererValue=e)},null,8,["modelValue"])])),_:2},["white_list"===r(K).refererType?{name:"tips",fn:s((()=>[J]))}:void 0,"black_list"===r(K).refererType?{name:"tips",fn:s((()=>[Q]))}:void 0]),1536),[[V,"no"!==r(K).refererType]])])),_:1},8,["model"])),[[ee,r(N)]]):b("",!0)])}}})}}}));
