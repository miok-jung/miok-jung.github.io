import{c as et,a as nt}from"./selection-BX2fgnzo.js";import{r as P,L as lt,a5 as I,a4 as Y,G as Q,C as $,H as it,D,g as Z,E as ot,aa as z,ab as N,d as at,ac as rt,a3 as st,h as R,ad as ut,a as G,O as ct,R as dt}from"./index-BfqmbkLt.js";import{a as k,v as ft}from"./use-router-link-DQcUiVjs.js";let q,M=0;const h=new Array(256);for(let t=0;t<256;t++)h[t]=(t+256).toString(16).substring(1);const ht=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const l=new Uint8Array(e);return t.getRandomValues(l),l}}return e=>{const l=[];for(let n=e;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),V=4096;function St(){(q===void 0||M+16>V)&&(M=0,q=ht(V));const t=Array.prototype.slice.call(q,M,M+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,h[t[0]]+h[t[1]]+h[t[2]]+h[t[3]]+"-"+h[t[4]]+h[t[5]]+"-"+h[t[6]]+h[t[7]]+"-"+h[t[8]]+h[t[9]]+"-"+h[t[10]]+h[t[11]]+h[t[12]]+h[t[13]]+h[t[14]]+h[t[15]]}let b=[],T=[];function J(t){T=T.filter(e=>e!==t)}function mt(t){J(t),T.push(t)}function _(t){J(t),T.length===0&&b.length!==0&&(b[b.length-1](),b=[])}function Lt(t){T.length===0?t():b.push(t)}function At(t){b=b.filter(e=>e!==t)}const vt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},kt={...vt,contextMenu:Boolean};function qt({showing:t,avoidEmit:e,configureAnchorEl:l}){const{props:n,proxy:i,emit:s}=Z(),o=P(null);let c=null;function d(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};l===void 0&&(Object.assign(u,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){lt(a,13)===!0&&u.toggle(a)},contextClick(a){i.hide(a),I(a),Y(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:I,mobileTouch(a){if(u.mobileCleanup(a),d(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const r=a.target;Q(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&a!==void 0&&et()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let r;a===!0?i.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],Q(u,"anchor",r)});function f(){ot(u,"anchor")}function g(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function p(){if(n.target===!1||n.target===""||i.$el.parentNode===null)o.value=null;else if(n.target===!0)g(i.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,l()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return $(()=>n.contextMenu,a=>{o.value!==null&&(f(),l(a))}),$(()=>n.target,()=>{o.value!==null&&f(),p()}),$(()=>n.noParentEvent,a=>{o.value!==null&&(a===!0?f():l())}),it(()=>{p(),e!==!0&&n.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),D(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:o,canShow:d,anchorEvents:u}}function Ft(t,e){const l=P(null);let n;function i(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:n;c!==window&&c[u]("scroll",f,z.passive),window[u]("scroll",f,z.passive),n=d}function s(){l.value!==null&&(i(l.value),l.value=null)}const o=$(()=>t.noParentEvent,()=>{l.value!==null&&(s(),e())});return D(o),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:i}}let gt=1,pt=document.body;function xt(t,e){const l=document.createElement("div");if(l.id=e!==void 0?`q-portal--${e}--${gt++}`:t,N.globalNodes!==void 0){const n=N.globalNodes.class;n!==void 0&&(l.className=n)}return pt.appendChild(l),l}function bt(t){t.remove()}const H=[];function zt(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return k(t)}else if(t.__qPortal===!0){const l=k(t);return l!==void 0&&l.$options.name==="QPopupProxy"?(t.hide(e),l):t}t=k(t)}while(t!=null)}const yt=at({name:"QPortal",setup(t,{slots:e}){return()=>e.default()}});function wt(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Bt(t,e,l,n){const i=P(!1),s=P(!1);let o=null;const c={},d=n==="dialog"&&wt(t);function u(g){if(g===!0){_(c),s.value=!0;return}s.value=!1,i.value===!1&&(d===!1&&o===null&&(o=xt(!1,n)),i.value=!0,H.push(t.proxy),mt(c))}function f(g){if(s.value=!1,g!==!0)return;_(c),i.value=!1;const p=H.indexOf(t.proxy);p!==-1&&H.splice(p,1),o!==null&&(bt(o),o=null)}return rt(()=>{f(!0)}),t.proxy.__qPortal=!0,st(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:f,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>d===!0?l():i.value===!0?[R(ut,{to:o},R(yt,l))]:void 0}}const Dt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function jt(t,e=()=>{},l=()=>{}){return{transitionProps:G(()=>{const n=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:G(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function It(){let t;const e=Z();function l(){t=void 0}return ct(l),D(l),{removeTick:l,registerTick(n){t=n,Y(()=>{t===n&&(ft(e)===!1&&t(),t=void 0)})}}}const{notPassiveCapture:S}=z,y=[];function L(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let l=H.length-1;for(;l>=0;){const n=H[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=y.length-1;n>=0;n--){const i=y[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function Qt(t){y.push(t),y.length===1&&(document.addEventListener("mousedown",L,S),document.addEventListener("touchstart",L,S))}function Nt(t){const e=y.findIndex(l=>l===t);e!==-1&&(y.splice(e,1),y.length===0&&(document.removeEventListener("mousedown",L,S),document.removeEventListener("touchstart",L,S)))}let U,K;function Rt(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Gt(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const B={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{B[`${t}#ltr`]=t,B[`${t}#rtl`]=t});function Vt(t,e){const l=t.split(" ");return{vertical:l[0],horizontal:B[`${l[1]}#${e===!0?"rtl":"ltr"}`]}}function Et(t,e){let{top:l,left:n,right:i,bottom:s,width:o,height:c}=t.getBoundingClientRect();return e!==void 0&&(l-=e[1],n-=e[0],s+=e[1],i+=e[0],o+=e[0],c+=e[1]),{top:l,bottom:s,height:c,left:n,right:i,width:o,middle:n+(i-n)/2,center:l+(s-l)/2}}function Ct(t,e,l){let{top:n,left:i}=t.getBoundingClientRect();return n+=e.top,i+=e.left,l!==void 0&&(n+=l[1],i+=l[0]),{top:n,bottom:n+1,height:1,left:i,right:i+1,width:1,middle:i,center:n}}function Ht(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function X(t,e,l,n){return{top:t[l.vertical]-e[n.vertical],left:t[l.horizontal]-e[n.horizontal]}}function Tt(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{Tt(t,e+1)},10);return}const{targetEl:l,offset:n,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:g}=t;if(dt.is.ios===!0&&window.visualViewport!==void 0){const W=document.body.style,{offsetLeft:E,offsetTop:x}=window.visualViewport;E!==U&&(W.setProperty("--q-pe-left",E+"px"),U=E),x!==K&&(W.setProperty("--q-pe-top",x+"px"),K=x)}const{scrollLeft:p,scrollTop:a}=l,r=c===void 0?Et(i,u===!0?[0,0]:n):Ct(i,c,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:f,visibility:"visible"});const{offsetWidth:j,offsetHeight:A}=l,{elWidth:O,elHeight:tt}=d===!0||u===!0?{elWidth:Math.max(r.width,j),elHeight:u===!0?Math.max(r.height,A):A}:{elWidth:j,elHeight:A};let v={maxWidth:g,maxHeight:f};(d===!0||u===!0)&&(v.minWidth=r.width+"px",u===!0&&(v.minHeight=r.height+"px")),Object.assign(l.style,v);const w=Ht(O,tt);let m=X(r,w,s,o);if(c===void 0||n===void 0)F(m,r,w,s,o);else{const{top:W,left:E}=m;F(m,r,w,s,o);let x=!1;if(m.top!==W){x=!0;const C=2*n[1];r.center=r.top-=C,r.bottom-=C+2}if(m.left!==E){x=!0;const C=2*n[0];r.middle=r.left-=C,r.right-=C+2}x===!0&&(m=X(r,w,s,o),F(m,r,w,s,o))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==p&&(l.scrollLeft=p)}function F(t,e,l,n,i){const s=l.bottom,o=l.right,c=nt(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(i.vertical==="center")t.top=e[n.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(e[n.vertical]>d/2){const f=Math.min(d,n.vertical==="center"?e.center:n.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,f),t.top=Math.max(0,f-s)}else t.top=Math.max(0,n.vertical==="center"?e.center:n.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),i.horizontal==="middle")t.left=e[n.horizontal]>u/2?Math.max(0,u-o):0;else if(e[n.horizontal]>u/2){const f=Math.min(u,n.horizontal==="middle"?e.middle:n.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,f),t.left=Math.max(0,f-t.maxWidth)}else t.left=Math.max(0,n.horizontal==="middle"?e.middle:n.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,u-t.left)}let Wt=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,Wt=t.scrollLeft>=0,t.remove()}export{Dt as a,Gt as b,It as c,jt as d,Ft as e,qt as f,Bt as g,Qt as h,Wt as i,St as j,Lt as k,At as l,kt as m,zt as n,Vt as p,Nt as r,Tt as s,vt as u,Rt as v};