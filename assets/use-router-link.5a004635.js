import{c as l,l as K,h as v,g as _}from"./index.a4da22d2.js";import{a as Q,h as x}from"./render.7066e7ad.js";const H={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function U(e,t=H){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const E="0 0 24 24",w=e=>e,S=e=>`ionicons ${e}`,C={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},V={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},G=new RegExp("^("+Object.keys(C).join("|")+")"),J=new RegExp("^("+Object.keys(I).join("|")+")"),B=new RegExp("^("+Object.keys(V).join("|")+")"),W=/^[Mm]\s?[-+]?\.?\d/,X=/^img:/,Y=/^svguse:/,Z=/^ion-/,ee=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var le=K({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=_(),r=U(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let s,n=e.name;if(n==="none"||!n)return{none:!0};if(o.iconMapFn!==null){const a=o.iconMapFn(n);if(a!==void 0)if(a.icon!==void 0){if(n=a.icon,n==="none"||!n)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(W.test(n)===!0){const[a,m=E]=n.split("|");return{svg:!0,viewBox:m,nodes:a.split("&&").map($=>{const[R,b,k]=$.split("@@");return v("path",{style:b,d:R,transform:k})})}}if(X.test(n)===!0)return{img:!0,src:n.substring(4)};if(Y.test(n)===!0){const[a,m=E]=n.split("|");return{svguse:!0,src:a.substring(7),viewBox:m}}let p=" ";const g=n.match(G);if(g!==null)s=C[g[1]](n);else if(ee.test(n)===!0)s=n;else if(Z.test(n)===!0)s=`ionicons ion-${o.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(B.test(n)===!0){s="notranslate material-symbols";const a=n.match(B);a!==null&&(n=n.substring(6),s+=V[a[1]]),p=n}else{s="notranslate material-icons";const a=n.match(J);a!==null&&(n=n.substring(2),s+=I[a[1]]),p=n}return{cls:s,content:p}});return()=>{const s={class:c.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,s,Q(t.default)):u.value.img===!0?v(e.tag,s,x(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v(e.tag,s,x(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v(e.tag,s,x(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(s.class+=" "+u.value.cls),v(e.tag,s,x(t.default,[u.value.content])))}}});const q={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},te=Object.keys(q),ce={align:{type:String,validator:e=>te.includes(e)}};function fe(e){return l(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${q[t]}`})}function ve(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function D(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(o=>{D(e,o)}):e.add(t)}function ge(e){const t=new Set;return e.forEach(o=>{D(t,o)}),Array.from(t)}function ne(e){return e.appContext.config.globalProperties.$router!==void 0}function de(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function re(e,t){for(const o in t){const r=t[o],c=e[o];if(typeof r=="string"){if(r!==c)return!1}else if(Array.isArray(c)===!1||c.length!==r.length||r.some((u,s)=>u!==c[s]))return!1}return!0}function M(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((o,r)=>o===t[r]):e.length===1&&e[0]===t}function ae(e,t){return Array.isArray(e)===!0?M(e,t):Array.isArray(t)===!0?M(t,e):e===t}function se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(ae(e[o],t[o])===!1)return!1;return!0}const ie={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},he={...ie,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function me({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const o=_(),{props:r,proxy:c,emit:u}=o,s=ne(o),n=l(()=>r.disable!==!0&&r.href!==void 0),p=t===!0?l(()=>s===!0&&r.disable!==!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):l(()=>s===!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),g=l(()=>p.value===!0?O(r.to):null),a=l(()=>g.value!==null),m=l(()=>n.value===!0||a.value===!0),$=l(()=>r.type==="a"||m.value===!0?"a":r.tag||e||"div"),R=l(()=>n.value===!0?{href:r.href,target:r.target}:a.value===!0?{href:g.value.href,target:r.target}:{}),b=l(()=>{if(a.value===!1)return-1;const{matched:i}=g.value,{length:f}=i,d=i[f-1];if(d===void 0)return-1;const h=c.$route.matched;if(h.length===0)return-1;const y=h.findIndex(z.bind(null,d));if(y!==-1)return y;const j=L(i[f-2]);return f>1&&L(d)===j&&h[h.length-1].path!==j?h.findIndex(z.bind(null,i[f-2])):y}),k=l(()=>a.value===!0&&b.value!==-1&&re(c.$route.params,g.value.params)),A=l(()=>k.value===!0&&b.value===c.$route.matched.length-1&&se(c.$route.params,g.value.params)),N=l(()=>a.value===!0?A.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":k.value===!0?` ${r.activeClass}`:"":"");function O(i){try{return c.$router.resolve(i)}catch{}return null}function P(i,{returnRouterError:f,to:d=r.to,replace:h=r.replace}={}){if(r.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||r.target==="_blank")return Promise.resolve(!1);i.preventDefault();const y=c.$router[h===!0?"replace":"push"](d);return f===!0?y:y.then(()=>{}).catch(()=>{})}function F(i){if(a.value===!0){const f=d=>P(i,d);u("click",i,f),i.defaultPrevented!==!0&&f()}else u("click",i)}return{hasRouterLink:a,hasHrefLink:n,hasLink:m,linkTag:$,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:N,linkAttrs:R,getLink:O,navigateToRouterLink:P,navigateOnClick:F}}export{le as Q,T as a,ie as b,ce as c,fe as d,me as e,he as f,H as g,ve as h,ne as i,ge as j,U as u,de as v};