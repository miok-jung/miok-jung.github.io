import{Q as ge,_ as me}from"./ScrollArea.vue_vue_type_script_setup_true_lang-CtcV154S.js";import{u as he,a as ve,_ as ke,j as we,k as xe}from"./_plugin-vue_export-helper-Cd8EbbpS.js";import{u as ye,f as Me,a as Ce,g as Se,c as be,b as Fe,e as _e,h as ne,i as Ve}from"./use-key-composition-ClF1KL3l.js";import{r as Q,w as p,n as z,a1 as Ee,c as E,k as te,l as Re,o as ie,h as K,P as Ae,g as se,a0 as ae,d as oe,D as de,a2 as Te,f as Z,G as L,a8 as ee,E as $e,a9 as qe,a4 as Y}from"./index-CprQqKhJ.js";import{h as fe}from"./dom-rTqap7vc.js";import"./QIcon-DVMJewMY.js";const le={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ce=Object.keys(G);ce.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const pe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ce.join("")+"])|(.)","g"),re=/[.*+?^${}()|[\]\\]/g,w="",Pe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Be(e,c,S,h){let s,d,R,A,P,y;const M=Q(null),g=Q(F());function W(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}p(()=>e.type+e.autogrow,N),p(()=>e.mask,l=>{if(l!==void 0)O(g.value,!0);else{const n=_(g.value);N(),e.modelValue!==n&&c("update:modelValue",n)}}),p(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&O(g.value,!0)}),p(()=>e.unmaskedValue,()=>{M.value===!0&&O(g.value)});function F(){if(N(),M.value===!0){const l=j(_(e.modelValue));return e.fillMask!==!1?H(l):l}return e.modelValue}function B(l){if(l<s.length)return s.slice(-l);let n="",r=s;const a=r.indexOf(w);if(a!==-1){for(let i=l-r.length;i>0;i--)n+=w;r=r.slice(0,a)+n+r.slice(a)}return r}function N(){if(M.value=e.mask!==void 0&&e.mask.length!==0&&W(),M.value===!1){A=void 0,s="",d="";return}const l=le[e.mask]===void 0?e.mask:le[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",r=n.replace(re,"\\$&"),a=[],i=[],u=[];let k=e.reverseFillMask===!0,o="",f="";l.replace(pe,(x,t,v,T,V)=>{if(T!==void 0){const C=G[T];u.push(C),f=C.negate,k===!0&&(i.push("(?:"+f+"+)?("+C.pattern+"+)?(?:"+f+"+)?("+C.pattern+"+)?"),k=!1),i.push("(?:"+f+"+)?("+C.pattern+")?")}else if(v!==void 0)o="\\"+(v==="\\"?"":v),u.push(v),a.push("([^"+o+"]+)?"+o+"?");else{const C=t!==void 0?t:V;o=C==="\\"?"\\\\\\\\":C.replace(re,"\\\\$&"),u.push(C),a.push("([^"+o+"]+)?"+o+"?")}});const I=new RegExp("^"+a.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),q=i.length-1,m=i.map((x,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+x):t===q?new RegExp("^"+x+"("+(f===""?".":f)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+x));R=u,A=x=>{const t=I.exec(e.reverseFillMask===!0?x:x.slice(0,u.length+1));t!==null&&(x=t.slice(1).join(""));const v=[],T=m.length;for(let V=0,C=x;V<T;V++){const D=m[V].exec(C);if(D===null)break;C=C.slice(D.shift().length),v.push(...D)}return v.length!==0?v.join(""):x},s=u.map(x=>typeof x=="string"?x:w).join(""),d=s.split(w).join(n)}function O(l,n,r){const a=h.value,i=a.selectionEnd,u=a.value.length-i,k=_(l);n===!0&&N();const o=j(k),f=e.fillMask!==!1?H(o):o,I=g.value!==f;a.value!==f&&(a.value=f),I===!0&&(g.value=f),document.activeElement===a&&z(()=>{if(f===d){const m=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(m,m,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const m=a.selectionEnd;let x=i-1;for(let t=P;t<=x&&t<m;t++)s[t]!==w&&x++;b.right(a,x);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)!==-1){const m=e.reverseFillMask===!0?i===0?f.length>o.length?1:0:Math.max(0,f.length-(f===d?0:Math.min(o.length,u)+1))+1:i;a.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(I===!0){const m=Math.max(0,f.length-(f===d?0:Math.min(o.length,u+1)));m===1&&i===1?a.setSelectionRange(m,m,"forward"):b.rightReverse(a,m)}else{const m=f.length-u;a.setSelectionRange(m,m,"backward")}else if(I===!0){const m=Math.max(0,s.indexOf(w),Math.min(o.length,i)-1);b.right(a,m)}else{const m=i-1;b.right(a,m)}});const q=e.unmaskedValue===!0?_(f):f;String(e.modelValue)!==q&&(e.modelValue!==null||q!=="")&&S(q,!0)}function X(l,n,r){const a=j(_(l.value));n=Math.max(0,s.indexOf(w),Math.min(a.length,n)),P=n,l.setSelectionRange(n,r,"forward")}const b={left(l,n){const r=s.slice(n-1).indexOf(w)===-1;let a=Math.max(0,n-1);for(;a>=0;a--)if(s[a]===w){n=a,r===!0&&n++;break}if(a<0&&s[n]!==void 0&&s[n]!==w)return b.right(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},right(l,n){const r=l.value.length;let a=Math.min(r,n+1);for(;a<=r;a++)if(s[a]===w){n=a;break}else s[a-1]===w&&(n=a);if(a>r&&s[n-1]!==void 0&&s[n-1]!==w)return b.left(l,r);l.setSelectionRange(n,n,"forward")},leftReverse(l,n){const r=B(l.value.length);let a=Math.max(0,n-1);for(;a>=0;a--)if(r[a-1]===w){n=a;break}else if(r[a]===w&&(n=a,a===0))break;if(a<0&&r[n]!==void 0&&r[n]!==w)return b.rightReverse(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},rightReverse(l,n){const r=l.value.length,a=B(r),i=a.slice(0,n+1).indexOf(w)===-1;let u=Math.min(r,n+1);for(;u<=r;u++)if(a[u-1]===w){n=u,n>0&&i===!0&&n--;break}if(u>r&&a[n-1]!==void 0&&a[n-1]!==w)return b.leftReverse(l,r);l.setSelectionRange(n,n,"forward")}};function J(l){c("click",l),y=void 0}function U(l){if(c("keydown",l),Ee(l)===!0||l.altKey===!0)return;const n=h.value,r=n.selectionStart,a=n.selectionEnd;if(l.shiftKey||(y=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&y===void 0&&(y=n.selectionDirection==="forward"?r:a);const i=b[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),i(n,y===r?a:r),l.shiftKey){const u=n.selectionStart;n.setSelectionRange(Math.min(y,u),Math.max(y,u),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&r===a?(b.left(n,r),n.setSelectionRange(n.selectionStart,a,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&r===a&&(b.rightReverse(n,a),n.setSelectionRange(r,n.selectionEnd,"forward"))}function j(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return $(l);const n=R;let r=0,a="";for(let i=0;i<n.length;i++){const u=l[r],k=n[i];if(typeof k=="string")a+=k,u===k&&r++;else if(u!==void 0&&k.regex.test(u))a+=k.transform!==void 0?k.transform(u):u,r++;else return a}return a}function $(l){const n=R,r=s.indexOf(w);let a=l.length-1,i="";for(let u=n.length-1;u>=0&&a!==-1;u--){const k=n[u];let o=l[a];if(typeof k=="string")i=k+i,o===k&&a--;else if(o!==void 0&&k.regex.test(o))do i=(k.transform!==void 0?k.transform(o):o)+i,a--,o=l[a];while(r===u&&o!==void 0&&k.regex.test(o));else return i}return i}function _(l){return typeof l!="string"||A===void 0?typeof l=="number"?A(""+l):l:A(l)}function H(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:g,hasMask:M,moveCursorForPaste:X,updateMaskValue:O,onMaskedKeydown:U,onMaskedClick:J}}function Oe(e,c){function S(){const h=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(h)===h&&("length"in h?Array.from(h):[h]).forEach(d=>{s.items.add(d)}),{files:s.files}}catch{return{files:void 0}}}return E(()=>{if(e.type==="file")return S()})}const Ie=te({name:"QInput",inheritAttrs:!1,props:{...ye,...Pe,...Me,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ce,"paste","change","keydown","click","animationend"],setup(e,{emit:c,attrs:S}){const{proxy:h}=se(),{$q:s}=h,d={};let R=NaN,A,P,y=null,M;const g=Q(null),W=Se(e),{innerValue:F,hasMask:B,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:X,onMaskedClick:b}=Be(e,c,o,g),J=Oe(e),U=E(()=>ne(F.value)),j=Ve(u),$=be({changeEvent:!0}),_=E(()=>e.type==="textarea"||e.autogrow===!0),H=E(()=>_.value===!0||["text","search","url","tel","password"].includes(e.type)),l=E(()=>{const t={...$.splitAttrs.listeners.value,onInput:u,onPaste:i,onChange:I,onBlur:q,onFocus:ae};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=j,B.value===!0&&(t.onKeydown=X,t.onClick=b),e.autogrow===!0&&(t.onAnimationend=k),t}),n=E(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:W.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return _.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});p(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),p(()=>e.modelValue,t=>{if(B.value===!0){if(P===!0&&(P=!1,String(t)===R))return;O(t)}else F.value!==t&&(F.value=t,e.type==="number"&&d.hasOwnProperty("value")===!0&&(A===!0?A=!1:delete d.value));e.autogrow===!0&&z(f)}),p(()=>e.autogrow,t=>{t===!0?z(f):g.value!==null&&S.rows>0&&(g.value.style.height="auto")}),p(()=>e.dense,()=>{e.autogrow===!0&&z(f)});function r(){_e(()=>{const t=document.activeElement;g.value!==null&&g.value!==t&&(t===null||t.id!==$.targetUid.value)&&g.value.focus({preventScroll:!0})})}function a(){g.value!==null&&g.value.select()}function i(t){if(B.value===!0&&e.reverseFillMask!==!0){const v=t.target;N(v,v.selectionStart,v.selectionEnd)}c("paste",t)}function u(t){if(!t||!t.target)return;if(e.type==="file"){c("update:modelValue",t.target.files);return}const v=t.target.value;if(t.target.qComposing===!0){d.value=v;return}if(B.value===!0)O(v,!1,t.inputType);else if(o(v),H.value===!0&&t.target===document.activeElement){const{selectionStart:T,selectionEnd:V}=t.target;T!==void 0&&V!==void 0&&z(()=>{t.target===document.activeElement&&v.indexOf(t.target.value)===0&&t.target.setSelectionRange(T,V)})}e.autogrow===!0&&f()}function k(t){c("animationend",t),f()}function o(t,v){M=()=>{y=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==t&&R!==t&&(R=t,v===!0&&(P=!0),c("update:modelValue",t),z(()=>{R===t&&(R=NaN)})),M=void 0},e.type==="number"&&(A=!0,d.value=t),e.debounce!==void 0?(y!==null&&clearTimeout(y),d.value=t,y=setTimeout(M,e.debounce)):M()}function f(){requestAnimationFrame(()=>{const t=g.value;if(t!==null){const v=t.parentNode.style,{scrollTop:T}=t,{overflowY:V,maxHeight:C}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),D=V!==void 0&&V!=="scroll";D===!0&&(t.style.overflowY="hidden"),v.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",D===!0&&(t.style.overflowY=parseInt(C,10)<t.scrollHeight?"auto":"hidden"),v.marginBottom="",t.scrollTop=T}})}function I(t){j(t),y!==null&&(clearTimeout(y),y=null),M!==void 0&&M(),c("change",t.target.value)}function q(t){t!==void 0&&ae(t),y!==null&&(clearTimeout(y),y=null),M!==void 0&&M(),A=!1,P=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=F.value!==void 0?F.value:"")})}function m(){return d.hasOwnProperty("value")===!0?d.value:F.value!==void 0?F.value:""}Re(()=>{q()}),ie(()=>{e.autogrow===!0&&f()}),Object.assign($,{innerValue:F,fieldClass:E(()=>`q-${_.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:E(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:o,hasValue:U,floatingLabel:E(()=>U.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||ne(e.displayValue)),getControl:()=>K(_.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...l.value,...e.type!=="file"?{value:m()}:J.value}),getShadowControl:()=>K("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(_.value===!0?"":" text-no-wrap")},[K("span",{class:"invisible"},m()),K("span",e.shadowText)])});const x=Fe($);return Object.assign(h,{focus:r,select:a,getNativeElement:()=>g.value}),Ae(h,"nativeEl",()=>g.value),x}}),ue=te({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:c}){const S=E(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>K(e.tag,{class:S.value},fe(c.default))}}),Ne=te({name:"QCard",props:{...he,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:c}){const{proxy:{$q:S}}=se(),h=ve(e,S),s=E(()=>"q-card"+(h.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>K(e.tag,{class:s.value},fe(c.default))}}),je={class:"calculator-wrap"},De=oe({__name:"CalculatorForm",setup(e){const c=Q("");return ie(()=>{console.log("onMounted CalculatorForm")}),(S,h)=>(de(),Te("div",je,[Z(Ne,{class:"row no-shadow",bordered:""},{default:L(()=>[Z(ue,{class:"col left-wrap"},{default:L(()=>[ee("div",null,[Z(Ie,{modelValue:c.value,"onUpdate:modelValue":h[0]||(h[0]=s=>c.value=s)},null,8,["modelValue"])]),h[1]||(h[1]=ee("div",null,"카드 입력 버튼 공간",-1))]),_:1}),Z(ue,{class:"col right-wrap"},{default:L(()=>h[2]||(h[2]=[ee("div",null,"카드 기록 공간",-1)])),_:1})]),_:1})]))}}),ze=ke(De,[["__scopeId","data-v-3aff8fc4"]]),Ye=oe({__name:"CalculatorPage",setup(e){const c=we(),S=xe(),h=Q(0);function s(d){return h.value=d,{minHeight:d?`calc(${c.screen.height}px - ${d}px)`:`${c.screen.height}px`,width:S.isSidebarShow?`calc(${c.screen.width}px - 300px)`:`${c.screen.width}px`}}return(d,R)=>(de(),$e(ge,{class:"row items-center justify-evenly","style-fn":s},{default:L(()=>[Z(me,{style:qe({width:Y(S).isSidebarShow?`${Y(c).screen.width}px`:`calc(${Y(c).screen.width}px - 300px)`,height:`calc(${Y(c).screen.height}px - ${h.value}px)`})},{default:L(()=>[Z(ze)]),_:1},8,["style"])]),_:1}))}});export{Ye as default};
