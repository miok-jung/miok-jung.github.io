import{m as A,w,o as X,I as _,X as z,g as x,ad as D,V as F,W as m,Y as L,K as h,Z as g,aa as S,a3 as y,$ as E,J as b,l as Y}from"./index--EMNpieo.js";import{s as B,g as N,i as k,h as $,c as j}from"./selection-DmC3Vc--.js";const{passive:P}=D,U=["both","horizontal","vertical"],J=A({name:"QScrollObserver",props:{axis:{type:String,validator:n=>U.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:B},emits:["scroll"],setup(n,{emit:o}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,e,t;w(()=>n.scrollTarget,()=>{u(),a()});function i(){c!==null&&c();const d=Math.max(0,k(e)),f=$(e),l={top:d-r.position.top,left:f-r.position.left};if(n.axis==="vertical"&&l.top===0||n.axis==="horizontal"&&l.left===0)return;const v=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";r.position={top:d,left:f},r.directionChanged=r.direction!==v,r.delta=l,r.directionChanged===!0&&(r.direction=v,r.inflectionPoint=r.position),o("scroll",{...r})}function a(){e=N(t,n.scrollTarget),e.addEventListener("scroll",s,P),s(!0)}function u(){e!==void 0&&(e.removeEventListener("scroll",s,P),e=void 0)}function s(d){if(d===!0||n.debounce===0||n.debounce==="0")i();else if(c===null){const[f,l]=n.debounce?[setTimeout(i,n.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];c=()=>{l(f),c=null}}}const{proxy:p}=x();return w(()=>p.$q.lang.rtl,i),X(()=>{t=p.$el.parentNode,a()}),_(()=>{c!==null&&c(),u()}),Object.assign(p,{trigger:s,getPosition:()=>r}),z}}),q={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},V=Object.keys(q);q.all=!0;function M(n){const o={};for(const r of V)n[r]===!0&&(o[r]=!0);return Object.keys(o).length===0?q:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const H=["INPUT","TEXTAREA"];function O(n,o){return o.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof o.handler=="function"&&H.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(o.uid)===-1)}function C(n,o,r){const c=E(n);let e,t=c.left-o.event.x,i=c.top-o.event.y,a=Math.abs(t),u=Math.abs(i);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?e=t<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=i<0?"up":"down":s.up===!0&&i<0?(e="up",a>u&&(s.left===!0&&t<0?e="left":s.right===!0&&t>0&&(e="right"))):s.down===!0&&i>0?(e="down",a>u&&(s.left===!0&&t<0?e="left":s.right===!0&&t>0&&(e="right"))):s.left===!0&&t<0?(e="left",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down"))):s.right===!0&&t>0&&(e="right",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down")));let p=!1;if(e===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,p=!0,e==="left"||e==="right"?(c.left-=t,a=0,t=0):(c.top-=i,u=0,i=0)}return{synthetic:p,payload:{evt:n,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:c,direction:e,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:a,y:u},offset:{x:t,y:i},delta:{x:c.left-o.event.lastX,y:c.top-o.event.lastY}}}}let I=0;const R=F({name:"touch-pan",beforeMount(n,{value:o,modifiers:r}){if(r.mouse!==!0&&m.has.touch!==!0)return;function c(t,i){r.mouse===!0&&i===!0?Y(t):(r.stop===!0&&y(t),r.prevent===!0&&S(t))}const e={uid:"qvtp_"+I++,handler:o,modifiers:r,direction:M(r),noop:z,mouseStart(t){O(t,e)&&L(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(O(t,e)){const i=t.target;h(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,i){if(m.is.firefox===!0&&g(n,!0),e.lastEvt=t,i===!0||r.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&S(s),t.cancelBubble===!0&&y(s),Object.assign(s,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:s}}y(t)}const{left:a,top:u}=E(t);e.event={x:a,y:u,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:u}},move(t){if(e.event===void 0)return;const i=E(t),a=i.left-e.event.x,u=i.top-e.event.y;if(a===0&&u===0)return;e.lastEvt=t;const s=e.event.mouse===!0,p=()=>{c(t,s);let l;r.preserveCursor!==!0&&r.preservecursor!==!0&&(l=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),j(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,l!==void 0&&(document.documentElement.style.cursor=l),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{T(),v()},50):T()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(t,e.event.mouse);const{payload:l,synthetic:v}=C(t,e,!1);l!==void 0&&(e.handler(l)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=l.position.left,e.event.lastY=l.position.top,e.event.lastDir=v===!0?void 0:l.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(t);return}const d=Math.abs(a),f=Math.abs(u);d!==f&&(e.direction.horizontal===!0&&d>f||e.direction.vertical===!0&&d<f||e.direction.up===!0&&d<f&&u<0||e.direction.down===!0&&d<f&&u>0||e.direction.left===!0&&d>f&&a<0||e.direction.right===!0&&d>f&&a>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,i){if(e.event!==void 0){if(b(e,"temp"),m.is.firefox===!0&&g(n,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(C(t===void 0?e.lastEvt:t,e).payload);const{payload:a}=C(t===void 0?e.lastEvt:t,e,!0),u=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(n.__qtouchpan=e,r.mouse===!0){const t=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";h(e,"main",[[n,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[n,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,o){const r=n.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=M(o.modifiers))},beforeUnmount(n){const o=n.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),b(o,"main"),b(o,"temp"),m.is.firefox===!0&&g(n,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete n.__qtouchpan)}});export{J as Q,R as T,M as g,O as s};