import{Q as ne}from"./QPage.7f132533.js";import{_ as re}from"./Header.0890a746.js";import{Q as x,a as A}from"./QCardSection.2c58fd46.js";import{c as y,l as ae,r as c,a4 as ie,o as B,h as v,q as oe,w as V,g as le,d as R,an as se,K as s,O as S,F as N,P as $,V as M,L as b,M as d,f as m,U as a,R as u,N as _,Q as z,a5 as F,D as ue,ao as ce,al as G}from"./index.a4da22d2.js";import{Q as de}from"./dom.b53f7d82.js";import{a as me}from"./render.7066e7ad.js";import{v as Q,Q as H}from"./use-router-link.5a004635.js";import{u as P}from"./TouchPan.73b887ad.js";import{Q as ge}from"./QScrollArea.8045854d.js";import{c as fe}from"./colors.85fc653d.js";import"./use-dark.ace9528c.js";import"./QResizeObserver.f9089eeb.js";const ve={ratio:[String,Number]};function he(e,o){return y(()=>{const i=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const ye=1.7778;var _e=ae({name:"QImg",props:{...ve,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ye},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:i}){const l=c(e.initialRatio),r=he(e,l),n=le(),{registerTimeout:p,removeTimeout:k}=P(),{registerTimeout:K,removeTimeout:D}=P(),w=y(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),E=y(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),g=[c(null),c(w.value)],f=c(0),C=c(!1),q=c(!1),O=y(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),U=y(()=>({width:e.width,height:e.height})),W=y(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),J=y(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function X(){if(D(),e.loadingShowDelay===0){C.value=!0;return}K(()=>{C.value=!0},e.loadingShowDelay)}function L(){D(),C.value=!1}function Y({target:t}){Q(n)===!1&&(k(),l.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,I(t,1))}function I(t,h){h===1e3||Q(n)===!0||(t.complete===!0?Z(t):p(()=>{I(t,h+1)},50))}function Z(t){Q(n)!==!0&&(f.value=f.value^1,g[f.value].value=null,L(),t.getAttribute("__qerror")!=="true"&&(q.value=!1),i("load",t.currentSrc||t.src))}function ee(t){k(),L(),q.value=!0,g[f.value].value=E.value,g[f.value^1].value=w.value,i("error",t)}function j(t){const h=g[t].value,T={key:"img_"+t,class:W.value,style:J.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...h};return f.value===t?Object.assign(T,{class:T.class+"current",onLoad:Y,onError:ee}):T.class+="loaded",v("div",{class:"q-img__container absolute-full",key:"img"+t},v("img",T))}function te(){return C.value===!1?v("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},me(o[q.value===!0?"error":"default"])):v("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[v(de,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){V(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,h=>{k(),q.value=!1,h===null?(L(),g[f.value^1].value=w.value):X(),g[f.value].value=h},{immediate:!0})};ie.value===!0?B(t):t()}return()=>{const t=[];return r.value!==null&&t.push(v("div",{key:"filler",style:r.value})),g[0].value!==null&&t.push(j(0)),g[1].value!==null&&t.push(j(1)),t.push(v(oe,{name:"q-transition--fade"},te)),v("div",{key:"main",class:O.value,style:U.value,role:"img","aria-label":e.alt},t)}}});const pe={gift:[{id:0,ko_name:"\uC544\uCE58\uCE74\uD398 \uCF54\uCF54\uB11B \uCE74\uD478\uCE58\uB178 240g",en_name:"Archcafe",vn:"57700",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1825089797/B.jpg?823000000",description:"\uD310\uB9E4\uCC98: \uB86F\uB370\uB9C8\uD2B8<br />\uC5C5\uB370\uC774\uD2B8 \uB0A0\uC9DC: 2024\uB144 3\uC6D4<br />\uBCA0\uD2B8\uB0A8 \uC544\uCE58\uCE74\uD398 \uC885\uB958\uB294 \uCD1D 5\uAC00\uC9C0(\uCD08\uCF54\uB77C\uB5BC, \uCE74\uD478\uCE58\uB178, \uB9D0\uCC28\uB77C\uB5BC, \uC5F0\uC720\uCEE4\uD53C, \uBC14\uB098\uB098\uCE74\uD478\uCE58\uB178 \uB4F1)\uAC00 \uC788\uC73C\uBA70, \uADF8 \uC911\uC5D0\uC11C \uCE74\uD478\uCE58\uB178 \uB9DB\uC774 \uAC00\uC7A5 \uC720\uBA85\uD558\uB2E4."},{id:1,ko_name:"\uCEE4\uD53C\uC870\uC774 156g",en_name:"Coffee Joy",vn:"19500",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/7568596668/B.jpg?850000000",description:"\uD310\uB9E4\uCC98: \uB86F\uB370\uB9C8\uD2B8<br />\uCEE4\uD53C\uB9DB \uACFC\uC790\uB85C, \uCEE4\uD53C\uD5A5\uC774\uB098\uB294 \uACFC\uC790\uC774\uB2E4."},{id:2,ko_name:"\uAC8C\uB9AC \uCE58\uC988 \uD06C\uB798\uCEE4",en_name:"Gerry Cheese Crackers",vn:"33900",img_url:"https://sitem.ssgcdn.com/29/95/49/item/1000025499529_i1_1200.jpg",description:"\uCE58\uC988\uB9DB \uACFC\uC790\uB85C \uBCA0\uD2B8\uB0A8\uC5D0\uC11C \uAC00\uC7A5 \uC720\uBA85"},{id:3,ko_name:"\uAC8C\uB9AC \uCF54\uCF54\uB11B \uD06C\uB798\uCEE4",en_name:"Gerry Coconut Crackers",vn:"33900",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2692035098/A2.jpg?675000000",description:"\uCE58\uC988\uB9DB \uACFC\uC790\uB85C \uBCA0\uD2B8\uB0A8\uC5D0\uC11C \uAC00\uC7A5 \uC720\uBA85"},{id:4,ko_name:"\uD328\uC158\uD6C4\uB974\uCE20\uCCAD 500ml",en_name:"Golden Farm Passion Fruit Smoothie",vn:"62300",img_url:"https://sitem.ssgcdn.com/17/23/04/item/1000617042317_i1_1200.jpg",description:"\uD0C4\uC0B0\uC218\uB098 \uBB3C\uC5D0 \uD0C0\uBA39\uC73C\uBA74 \uB9DB\uC788\uB294 \uCCAD\uC73C\uB85C, \uB2E4\uC591\uD55C \uCCAD\uC73C\uB85C \uD310\uB2E4.<br />500ml\uB85C \uC57D 12\uAC1C\uC758 \uC5D0\uC774\uB4DC\uB97C \uB9CC\uB4E4 \uC218 \uC788\uB2E4."},{id:5,ko_name:"\uC544\uD558 90g",en_name:"Ahh",vn:"23900",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/6833085465/B.jpg?201000000",description:"\uD310\uB9E4\uCC98: \uB86F\uB370\uB9C8\uD2B8<br />\uC61B\uB0A0\uC758 \uCC28\uCE74\uB2C8 \uACFC\uC790\uC640 \uC720\uC0AC\uD558\uB2E4\uACE0 \uD55C\uB2E4."}]};var Se={vietnam:pe};const be={nahtrang:[{id:0,ko_name:"\uB098\uD2B8\uB791 \uB370\uBE44\uC2A4\uC7BC",en_name:"Devis jam",address:"121 Nguy\u1EC5n Thi\u1EC7n Thu\u1EADt, L\u1ED9c Th\u1ECD, Nha Trang, Kh\xE1nh H\xF2a 65000 \uBCA0\uD2B8\uB0A8",open:"10:00",close:"21:00",description:"\uC2DC\uB0B4\uAD8C \uC120\uBB3C\uC744\uC704\uD574 \uB9CE\uC774\uB4E4 \uAD6C\uB9E4\uD558\uB294 \uB9E4\uC7A5\uC73C\uB85C \uAC74\uAC15\uD55C \uC218\uC81C\uC7BC\uC73C\uB85C \uC720\uBA85\uD558\uB2E4.<br />\uC7BC\uC758 \uC885\uB958\uB294 \uD06C\uAC8C 6\uAC00\uC9C0\uB85C \uB418\uC5B4\uC788\uC73C\uBA70 \uCF54\uCF54\uB11B, \uBC84\uD130, \uCEE4\uD53C, \uB545\uCF69, \uC5BC\uADF8\uB808\uC774, \uB179\uCC28 \uB4F1\uC73C\uB85C \uB418\uC5B4\uC788\uB2E4."}]};var ke={vietnam:be};const Ce={class:"row"},qe=["innerHTML"],Te=["innerHTML"],xe=R({__name:"Depth2",setup(e){const o=se(),i=c([]);return B(()=>{i.value=o.path.split("/").filter(Boolean)}),(l,r)=>(s(),S("div",Ce,[(s(!0),S(N,null,$(M(Se).vietnam.gift,n=>(s(),S(N,{key:n.id},[i.value[2]==="gift"?(s(),b(A,{key:0,bordered:""},{default:d(()=>[m(x,{class:"q-pb-none"},{default:d(()=>[a("p",null,[a("b",null,u(n.ko_name),1),r[0]||(r[0]=_(" \xA0 ( ")),a("span",null,u(n.en_name),1),r[1]||(r[1]=_(" ) "))]),a("p",null,[a("b",null,u(Intl.NumberFormat("VN",{style:"currency",currency:"VND"}).format(parseInt(n.vn))),1),r[2]||(r[2]=_(" \xA0 ( ")),a("span",null,u(Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW"}).format(Math.floor(parseInt(n.vn)/20))),1),r[3]||(r[3]=_(" ) "))])]),_:2},1024),m(x,{class:"q-pb-none"},{default:d(()=>[n.img_url!==""?(s(),b(_e,{key:0,src:n.img_url},null,8,["src"])):z("",!0),a("p",{innerHTML:n.description},null,8,qe)]),_:2},1024)]),_:2},1024)):z("",!0)],64))),128)),(s(!0),S(N,null,$(M(ke).vietnam.nahtrang,n=>(s(),S(N,{key:n.id},[i.value[2]==="nahtrang"?(s(),b(A,{key:0,bordered:""},{default:d(()=>[m(x,{class:"q-pb-none"},{default:d(()=>[a("p",null,[a("b",null,u(n.ko_name),1),r[4]||(r[4]=_(" \xA0 ( ")),a("span",null,u(n.en_name),1),r[5]||(r[5]=_(" ) "))]),a("p",null,[m(H,{name:"mdi-map-marker-outline"}),a("span",null,u(n.address),1)]),a("p",null,[m(H,{name:"mdi-clock-time-ten-outline"}),a("span",null,u(n.open)+" - "+u(n.close),1)])]),_:2},1024),m(x,{class:"q-pb-none"},{default:d(()=>[a("p",{innerHTML:n.description},null,8,Te)]),_:2},1024)]),_:2},1024)):z("",!0)],64))),128))]))}}),Ne=R({__name:"ScrollArea",props:{style:{default:()=>({height:"100vh"})}},setup(e){const o=e,{getPaletteColor:i}=fe,l=c(i("primary")),r=F({right:"4px",borderRadius:"5px",backgroundColor:l.value,width:"5px",opacity:"0.75"}),n=F({right:"2px",borderRadius:"9px",backgroundColor:l.value,width:"9px",opacity:"0.2"});return V(l,p=>{r.backgroundColor=p}),B(()=>{console.log("onMounted")}),ue(()=>{console.log("update")}),(p,k)=>(s(),b(ge,{style:G(o.style),"thumb-style":r,"bar-style":n},{default:d(()=>[ce(p.$slots,"default")]),_:3},8,["style","thumb-style","bar-style"]))}}),Fe=R({__name:"DataDepth2Page",setup(e){const o=c(0);function i(l){return o.value=l,{maxHeight:l?`calc(100vh - ${l}px)`:"100vh"}}return(l,r)=>(s(),b(ne,{"style-fn":i},{default:d(()=>[m(Ne,{style:G({padding:"1rem",height:`calc(100vh - ${o.value}px)`})},{default:d(()=>[m(re),m(xe)]),_:1},8,["style"])]),_:1}))}});export{Fe as default};