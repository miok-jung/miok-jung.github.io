import{Q as x}from"./QIcon-Co71Wnrj.js";import{d as h,a as u,h as r,e as $,f as q,r as B,H as S,o as v,m as Q,k as f,w as E,j as p,v as g}from"./index-BfqmbkLt.js";import{h as A,a as N}from"./render-DbdArWqF.js";import{u as V,b as w,c as R,d as H,g as L}from"./use-router-link-DQcUiVjs.js";const b=h({name:"QBreadcrumbsEl",props:{...V,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:l}){const{linkTag:a,linkAttrs:o,linkClass:i,navigateOnClick:d}=w(),n=u(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+i.value:"q-breadcrumbs__el--disable"),...o.value,onClick:d})),c=u(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const s=[];return e.icon!==void 0&&s.push(r(x,{class:c.value,name:e.icon})),e.label!==void 0&&s.push(e.label),r(a.value,{...n.value},A(l.default,s))}}}),M=["",!0],P=h({name:"QBreadcrumbs",props:{...R,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const a=H(e),o=u(()=>`flex items-center ${a.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),i=u(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=u(()=>` text-${e.activeColor}`);return()=>{if(l.default===void 0)return;const n=L(N(l.default));if(n.length===0)return;let c=1;const s=[],_=n.filter(t=>t.type!==void 0&&t.type.name==="QBreadcrumbsEl").length,k=l.separator!==void 0?l.separator:()=>e.separator;return n.forEach(t=>{if(t.type!==void 0&&t.type.name==="QBreadcrumbsEl"){const m=c<_,C=t.props!==null&&M.includes(t.props.disable),y=(m===!0?"":" q-breadcrumbs--last")+(C!==!0&&m===!0?d.value:"");c++,s.push(r("div",{class:`flex items-center${y}`},[t])),m===!0&&s.push(r("div",{class:"q-breadcrumbs__separator"+i.value},k()))}else s.push(t)}),r("div",{class:"q-breadcrumbs"},[r("div",{class:o.value},s)])}}}),T=$({__name:"Header",setup(e){const l=q(),a=B([]);return S(()=>{a.value=l.path.split("/").filter(Boolean)}),(o,i)=>(v(),Q("header",null,[f(P,null,{default:E(()=>[f(b,{class:"text-grey",to:`/${a.value[0]}`,label:a.value[0]},null,8,["to","label"]),a.value[1]?(v(),p(b,{key:0,class:"text-grey",to:`/${a.value[0]}/${a.value[1]}`,label:a.value[1]},null,8,["to","label"])):g("",!0),a.value[2]?(v(),p(b,{key:1,class:"text-primary",to:`/${a.value[0]}/${a.value[1]}/${a.value[2]}`,label:a.value[2]},null,8,["to","label"])):g("",!0)]),_:1})]))}});export{T as _};