import{c as et,a as nt}from"./selection-DmC3Vc--.js";import{r as P,P as lt,aa as D,a1 as Y,K as Q,w as $,o as ot,I,g as J,J as it,ad as z,ae as N,m as at,a as rt,a2 as st,h as R,af as ut,c as V,S as ct,W as dt}from"./index--EMNpieo.js";import{a as k,v as ft}from"./use-router-link-y8xtRhYq.js";let q,M=0;const h=new Array(256);for(let t=0;t<256;t++)h[t]=(t+256).toString(16).substring(1);const ht=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const l=new Uint8Array(e);return t.getRandomValues(l),l}}return e=>{const l=[];for(let n=e;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),_=4096;function St(){(q===void 0||M+16>_)&&(M=0,q=ht(_));const t=Array.prototype.slice.call(q,M,M+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,h[t[0]]+h[t[1]]+h[t[2]]+h[t[3]]+"-"+h[t[4]]+h[t[5]]+"-"+h[t[6]]+h[t[7]]+"-"+h[t[8]]+h[t[9]]+"-"+h[t[10]]+h[t[11]]+h[t[12]]+h[t[13]]+h[t[14]]+h[t[15]]}let b=[],W=[];function Z(t){W=W.filter(e=>e!==t)}function mt(t){Z(t),W.push(t)}function G(t){Z(t),W.length===0&&b.length!==0&&(b[b.length-1](),b=[])}function Lt(t){W.length===0?t():b.push(t)}function At(t){b=b.filter(e=>e!==t)}const vt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},kt={...vt,contextMenu:Boolean};function qt({showing:t,avoidEmit:e,configureAnchorEl:l}){const{props:n,proxy:o,emit:s}=J(),i=P(null);let c=null;function d(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};l===void 0&&(Object.assign(u,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){lt(a,13)===!0&&u.toggle(a)},contextClick(a){o.hide(a),D(a),Y(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:D,mobileTouch(a){if(u.mobileCleanup(a),d(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const r=a.target;Q(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&a!==void 0&&et()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let r;a===!0?o.$q.platform.is.mobile===!0?r=[[i.value,"touchstart","mobileTouch","passive"]]:r=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:r=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Q(u,"anchor",r)});function f(){it(u,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function p(){if(n.target===!1||n.target===""||o.$el.parentNode===null)i.value=null;else if(n.target===!0)g(o.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return $(()=>n.contextMenu,a=>{i.value!==null&&(f(),l(a))}),$(()=>n.target,()=>{i.value!==null&&f(),p()}),$(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?f():l())}),ot(()=>{p(),e!==!0&&n.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),I(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:i,canShow:d,anchorEvents:u}}function Ft(t,e){const l=P(null);let n;function o(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:n;c!==window&&c[u]("scroll",f,z.passive),window[u]("scroll",f,z.passive),n=d}function s(){l.value!==null&&(o(l.value),l.value=null)}const i=$(()=>t.noParentEvent,()=>{l.value!==null&&(s(),e())});return I(i),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:o}}let gt=1,pt=document.body;function xt(t,e){const l=document.createElement("div");if(l.id=e!==void 0?`q-portal--${e}--${gt++}`:t,N.globalNodes!==void 0){const n=N.globalNodes.class;n!==void 0&&(l.className=n)}return pt.appendChild(l),l}function bt(t){t.remove()}const H=[];function zt(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return k(t)}else if(t.__qPortal===!0){const l=k(t);return l!==void 0&&l.$options.name==="QPopupProxy"?(t.hide(e),l):t}t=k(t)}while(t!=null)}const yt=at({name:"QPortal",setup(t,{slots:e}){return()=>e.default()}});function wt(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Bt(t,e,l,n){const o=P(!1),s=P(!1);let i=null;const c={},d=n==="dialog"&&wt(t);function u(g){if(g===!0){G(c),s.value=!0;return}s.value=!1,o.value===!1&&(d===!1&&i===null&&(i=xt(!1,n)),o.value=!0,H.push(t.proxy),mt(c))}function f(g){if(s.value=!1,g!==!0)return;G(c),o.value=!1;const p=H.indexOf(t.proxy);p!==-1&&H.splice(p,1),i!==null&&(bt(i),i=null)}return rt(()=>{f(!0)}),t.proxy.__qPortal=!0,st(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:f,portalIsActive:o,portalIsAccessible:s,renderPortal:()=>d===!0?l():o.value===!0?[R(ut,{to:i},R(yt,l))]:void 0}}const It={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function jt(t,e=()=>{},l=()=>{}){return{transitionProps:V(()=>{const n=`q-transition--${t.transitionShow||e()}`,o=`q-transition--${t.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:V(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Dt(){let t;const e=J();function l(){t=void 0}return ct(l),I(l),{removeTick:l,registerTick(n){t=n,Y(()=>{t===n&&(ft(e)===!1&&t(),t=void 0)})}}}const{notPassiveCapture:S}=z,y=[];function L(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let l=H.length-1;for(;l>=0;){const n=H[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=y.length-1;n>=0;n--){const o=y[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(e)===!1)&&(e===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(e)===!1))t.qClickOutside=!0,o.onClickOutside(t);else return}}function Qt(t){y.push(t),y.length===1&&(document.addEventListener("mousedown",L,S),document.addEventListener("touchstart",L,S))}function Nt(t){const e=y.findIndex(l=>l===t);e!==-1&&(y.splice(e,1),y.length===0&&(document.removeEventListener("mousedown",L,S),document.removeEventListener("touchstart",L,S)))}let K,U;function Rt(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Vt(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const B={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{B[`${t}#ltr`]=t,B[`${t}#rtl`]=t});function _t(t,e){const l=t.split(" ");return{vertical:l[0],horizontal:B[`${l[1]}#${e===!0?"rtl":"ltr"}`]}}function Et(t,e){let{top:l,left:n,right:o,bottom:s,width:i,height:c}=t.getBoundingClientRect();return e!==void 0&&(l-=e[1],n-=e[0],s+=e[1],o+=e[0],i+=e[0],c+=e[1]),{top:l,bottom:s,height:c,left:n,right:o,width:i,middle:n+(o-n)/2,center:l+(s-l)/2}}function Ct(t,e,l){let{top:n,left:o}=t.getBoundingClientRect();return n+=e.top,o+=e.left,l!==void 0&&(n+=l[1],o+=l[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function Ht(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function X(t,e,l,n){return{top:t[l.vertical]-e[n.vertical],left:t[l.horizontal]-e[n.horizontal]}}function Wt(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{Wt(t,e+1)},10);return}const{targetEl:l,offset:n,anchorEl:o,anchorOrigin:s,selfOrigin:i,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:g}=t;if(dt.is.ios===!0&&window.visualViewport!==void 0){const T=document.body.style,{offsetLeft:E,offsetTop:x}=window.visualViewport;E!==K&&(T.setProperty("--q-pe-left",E+"px"),K=E),x!==U&&(T.setProperty("--q-pe-top",x+"px"),U=x)}const{scrollLeft:p,scrollTop:a}=l,r=c===void 0?Et(o,u===!0?[0,0]:n):Ct(o,c,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:f,visibility:"visible"});const{offsetWidth:j,offsetHeight:A}=l,{elWidth:O,elHeight:tt}=d===!0||u===!0?{elWidth:Math.max(r.width,j),elHeight:u===!0?Math.max(r.height,A):A}:{elWidth:j,elHeight:A};let v={maxWidth:g,maxHeight:f};(d===!0||u===!0)&&(v.minWidth=r.width+"px",u===!0&&(v.minHeight=r.height+"px")),Object.assign(l.style,v);const w=Ht(O,tt);let m=X(r,w,s,i);if(c===void 0||n===void 0)F(m,r,w,s,i);else{const{top:T,left:E}=m;F(m,r,w,s,i);let x=!1;if(m.top!==T){x=!0;const C=2*n[1];r.center=r.top-=C,r.bottom-=C+2}if(m.left!==E){x=!0;const C=2*n[0];r.middle=r.left-=C,r.right-=C+2}x===!0&&(m=X(r,w,s,i),F(m,r,w,s,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",r.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",r.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==p&&(l.scrollLeft=p)}function F(t,e,l,n,o){const s=l.bottom,i=l.right,c=nt(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(o.vertical==="center")t.top=e[n.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(e[n.vertical]>d/2){const f=Math.min(d,n.vertical==="center"?e.center:n.vertical===o.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,f),t.top=Math.max(0,f-s)}else t.top=Math.max(0,n.vertical==="center"?e.center:n.vertical===o.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+i>u)if(t.maxWidth=Math.min(i,u),o.horizontal==="middle")t.left=e[n.horizontal]>u/2?Math.max(0,u-i):0;else if(e[n.horizontal]>u/2){const f=Math.min(u,n.horizontal==="middle"?e.middle:n.horizontal===o.horizontal?e.right:e.left);t.maxWidth=Math.min(i,f),t.left=Math.max(0,f-t.maxWidth)}else t.left=Math.max(0,n.horizontal==="middle"?e.middle:n.horizontal===o.horizontal?e.left:e.right),t.maxWidth=Math.min(i,u-t.left)}let Tt=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,Tt=t.scrollLeft>=0,t.remove()}export{It as a,Vt as b,Dt as c,jt as d,Ft as e,qt as f,Bt as g,Qt as h,Tt as i,Lt as j,St as k,At as l,kt as m,zt as n,_t as p,Nt as r,Wt as s,vt as u,Rt as v};