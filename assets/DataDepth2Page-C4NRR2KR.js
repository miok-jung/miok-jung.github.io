import{Q as Z}from"./QPage-BxEEKaaN.js";import{_ as ee}from"./Header.vue_vue_type_script_setup_true_lang-CHc66DzO.js";import{Q as T,a as D}from"./QCardSection-CTMdLTud.js";import{a as h,d as te,r as f,$ as ne,H as F,h as g,T as re,C as ie,g as ae,e as M,f as oe,o as s,m as p,F as C,n as Q,p as $,j as q,w as v,k as u,z as i,x as l,l as y,v as B,B as le}from"./index-BfqmbkLt.js";import{Q as se}from"./QSpinner-BqFsKtcz.js";import{a as ue}from"./render-DbdArWqF.js";import{v as L}from"./use-router-link-DQcUiVjs.js";import{u as H}from"./use-timeout-c9G2iPay.js";import{Q as R}from"./QIcon-Co71Wnrj.js";import{_ as ce}from"./ScrollArea.vue_vue_type_script_setup_true_lang-CwSCrNlk.js";import"./use-dark-DmMYkLxl.js";import"./QScrollArea-B6KY5lk7.js";import"./QResizeObserver-BudfCMHm.js";import"./TouchPan-BxkXXr1I.js";import"./selection-BX2fgnzo.js";import"./dom-CUVC4Cee.js";import"./colors-BttFFNdH.js";const me={ratio:[String,Number]};function de(e,o){return h(()=>{const a=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const ge=1.7778,fe=te({name:"QImg",props:{...me,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ge},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:a}){const c=f(e.initialRatio),r=de(e,c),n=ae(),{registerTimeout:A,removeTimeout:N}=H(),{registerTimeout:V,removeTimeout:j}=H(),w=h(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),P=h(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),m=[f(null),f(w.value)],d=f(0),S=f(!1),b=f(!1),G=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),E=h(()=>({width:e.width,height:e.height})),K=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),O=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function W(){if(j(),e.loadingShowDelay===0){S.value=!0;return}V(()=>{S.value=!0},e.loadingShowDelay)}function z(){j(),S.value=!1}function J({target:t}){L(n)===!1&&(N(),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,x(t,1))}function x(t,_){_===1e3||L(n)===!0||(t.complete===!0?U(t):A(()=>{x(t,_+1)},50))}function U(t){L(n)!==!0&&(d.value=d.value^1,m[d.value].value=null,z(),t.getAttribute("__qerror")!=="true"&&(b.value=!1),a("load",t.currentSrc||t.src))}function X(t){N(),z(),b.value=!0,m[d.value].value=P.value,m[d.value^1].value=w.value,a("error",t)}function I(t){const _=m[t].value,k={key:"img_"+t,class:K.value,style:O.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return d.value===t?Object.assign(k,{class:k.class+"current",onLoad:J,onError:X}):k.class+="loaded",g("div",{class:"q-img__container absolute-full",key:"img"+t},g("img",k))}function Y(){return S.value===!1?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ue(o[b.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[g(se,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){ie(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,_=>{N(),b.value=!1,_===null?(z(),m[d.value^1].value=w.value):W(),m[d.value].value=_},{immediate:!0})};ne.value===!0?F(t):t()}return()=>{const t=[];return r.value!==null&&t.push(g("div",{key:"filler",style:r.value})),m[0].value!==null&&t.push(I(0)),m[1].value!==null&&t.push(I(1)),t.push(g(re,{name:"q-transition--fade"},Y)),g("div",{key:"main",class:G.value,style:E.value,role:"img","aria-label":e.alt},t)}}}),ve={gift:[{id:0,ko_name:"아치카페 코코넛 카푸치노 240g",en_name:"Archcafe",vn:"57700",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1825089797/B.jpg?823000000",description:"판매처: 롯데마트<br />업데이트 날짜: 2024년 3월<br />베트남 아치카페 종류는 총 5가지(초코라떼, 카푸치노, 말차라떼, 연유커피, 바나나카푸치노 등)가 있으며, 그 중에서 카푸치노 맛이 가장 유명하다."},{id:1,ko_name:"커피조이 156g",en_name:"Coffee Joy",vn:"19500",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/7568596668/B.jpg?850000000",description:"판매처: 롯데마트<br />커피맛 과자로, 커피향이나는 과자이다."},{id:2,ko_name:"게리 치즈 크래커",en_name:"Gerry Cheese Crackers",vn:"33900",img_url:"https://sitem.ssgcdn.com/29/95/49/item/1000025499529_i1_1200.jpg",description:"치즈맛 과자로 베트남에서 가장 유명"},{id:3,ko_name:"게리 코코넛 크래커",en_name:"Gerry Coconut Crackers",vn:"33900",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/2692035098/A2.jpg?675000000",description:"치즈맛 과자로 베트남에서 가장 유명"},{id:4,ko_name:"패션후르츠청 500ml",en_name:"Golden Farm Passion Fruit Smoothie",vn:"62300",img_url:"https://sitem.ssgcdn.com/17/23/04/item/1000617042317_i1_1200.jpg",description:"탄산수나 물에 타먹으면 맛있는 청으로, 다양한 청으로 판다.<br />500ml로 약 12개의 에이드를 만들 수 있다."},{id:5,ko_name:"아하 90g",en_name:"Ahh",vn:"23900",img_url:"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/6833085465/B.jpg?201000000",description:"판매처: 롯데마트<br />옛날의 차카니 과자와 유사하다고 한다."}]},_e={vietnam:ve},he={nahtrang:[{id:0,ko_name:"나트랑 데비스잼",en_name:"Devis jam",address:"121 Nguyễn Thiện Thuật, Lộc Thọ, Nha Trang, Khánh Hòa 65000 베트남",open:"10:00",close:"21:00",description:"시내권 선물을위해 많이들 구매하는 매장으로 건강한 수제잼으로 유명하다.<br />잼의 종류는 크게 6가지로 되어있으며 코코넛, 버터, 커피, 땅콩, 얼그레이, 녹차 등으로 되어있다."}]},ye={vietnam:he},pe={class:"row"},Se=["innerHTML"],be=["innerHTML"],ke=M({__name:"Depth2",setup(e){const o=oe(),a=f([]);return F(()=>{a.value=o.path.split("/").filter(Boolean)}),(c,r)=>(s(),p("div",pe,[(s(!0),p(C,null,Q($(_e).vietnam.gift,n=>(s(),p(C,{key:n.id},[a.value[2]==="gift"?(s(),q(D,{key:0,bordered:""},{default:v(()=>[u(T,{class:"q-pb-none"},{default:v(()=>[i("p",null,[i("b",null,l(n.ko_name),1),r[0]||(r[0]=y("   ( ")),i("span",null,l(n.en_name),1),r[1]||(r[1]=y(" ) "))]),i("p",null,[i("b",null,l(Intl.NumberFormat("VN",{style:"currency",currency:"VND"}).format(parseInt(n.vn))),1),r[2]||(r[2]=y("   ( ")),i("span",null,l(Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW"}).format(Math.floor(parseInt(n.vn)/20))),1),r[3]||(r[3]=y(" ) "))])]),_:2},1024),u(T,{class:"q-pb-none"},{default:v(()=>[n.img_url!==""?(s(),q(fe,{key:0,src:n.img_url},null,8,["src"])):B("",!0),i("p",{innerHTML:n.description},null,8,Se)]),_:2},1024)]),_:2},1024)):B("",!0)],64))),128)),(s(!0),p(C,null,Q($(ye).vietnam.nahtrang,n=>(s(),p(C,{key:n.id},[a.value[2]==="nahtrang"?(s(),q(D,{key:0,bordered:""},{default:v(()=>[u(T,{class:"q-pb-none"},{default:v(()=>[i("p",null,[i("b",null,l(n.ko_name),1),r[4]||(r[4]=y("   ( ")),i("span",null,l(n.en_name),1),r[5]||(r[5]=y(" ) "))]),i("p",null,[u(R,{name:"mdi-map-marker-outline"}),i("span",null,l(n.address),1)]),i("p",null,[u(R,{name:"mdi-clock-time-ten-outline"}),i("span",null,l(n.open)+" - "+l(n.close),1)])]),_:2},1024),u(T,{class:"q-pb-none"},{default:v(()=>[i("p",{innerHTML:n.description},null,8,be)]),_:2},1024)]),_:2},1024)):B("",!0)],64))),128))]))}}),Me=M({__name:"DataDepth2Page",setup(e){const o=f(0);function a(c){return o.value=c,{maxHeight:c?`calc(100vh - ${c}px)`:"100vh"}}return(c,r)=>(s(),q(Z,{"style-fn":a},{default:v(()=>[u(ce,{style:le({padding:"1rem",height:`calc(100vh - ${o.value}px)`})},{default:v(()=>[u(ee),u(ke)]),_:1},8,["style"])]),_:1}))}});export{Me as default};