import{Q as k}from"./QPage-BgEK3RFZ.js";import{c as p}from"./createElement-DCXfWXei.js";import{d as y,r as b,o as w,x as q,_ as v,L as _,P as T,M as L,N as $,k as C}from"./index-CVJixrne.js";import"./render-Ce3m_4z0.js";const E=y({__name:"VanillaJS",setup(u,{expose:d}){d();const c=b(void 0);function r(){let e=document.querySelectorAll("#item-list > li"),t=document.querySelector(".total-count");t!=null&&t.TEXT_NODE&&(t.innerHTML=e.length.toString())}function l(){var s;let e=(s=document.querySelector("#item-list"))==null?void 0:s.childNodes.length;const t=document.querySelector(".todo-input"),n=document.querySelector("#item-list");e?e=e+1:e=1,p({tagName:"li",parent:n,children:[{tagName:"input",properties:{id:"check"+e,type:"checkbox"}},{tagName:"label",properties:{htmlFor:"check"+e}},{tagName:"span",properties:{innerText:t.value}},{tagName:"button",properties:{className:`remove-button index-${e}`,innerText:"삭제"}}]}),r();const i=document.querySelector(`#check${e}`);i&&i.addEventListener("change",m);const a=document.querySelector(`.remove-button.index-${e}`);a==null||a.addEventListener("click",f)}const o=b(0);function m(){let e=document.querySelectorAll("input[type='checkbox']");o.value=0,e.forEach(n=>{n.checked&&(o.value=o.value+1)});let t=document.querySelector(".complete-count");t&&(t.innerHTML=o.value.toString())}function f(e){const t=parseInt(e.currentTarget.classList[1].slice(-1)),n=document.querySelector("#item-list");n&&n.childNodes[t-1].remove(),r(),m(),h()}function h(){const e=document.querySelector("#item-list");if(e)for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];const i=n.querySelector("input"),a=n.querySelector("label"),s=n.querySelector("button");if(i&&a&&s){i.id=`check-${t+1}`,a.htmlFor=i.id;const S=/^index-\d+$/;s.classList.forEach(x=>{if(S.test(x)){const N=`index-${t+1}`;s.classList.replace(x,N)}})}}}w(()=>{const[e]=p({tagName:"div",properties:{id:"app"},parent:c.value});p({tagName:"div",properties:{id:"header"},parent:e,children:[{tagName:"p",properties:{className:"text-h4",innerText:"To-do list"}},{tagName:"div",properties:{id:"container"},children:[{tagName:"span",properties:{innerText:"Total: "}},{tagName:"b",properties:{className:"total-count",innerText:"0"}},{tagName:"span",properties:{className:"space-center-border"}},{tagName:"span",properties:{innerText:"Completed: "}},{tagName:"b",properties:{className:"complete-count",innerText:"0"}}]}]}),p({tagName:"div",properties:{id:"input-field"},parent:e,children:[{tagName:"input",properties:{className:"todo-input",ariaPlaceholder:"할일을 입력해주세요"}},{tagName:"button",properties:{className:"add-button",innerText:"Add"}}]});const[t]=p({tagName:"div",properties:{id:"item-list-container"},parent:e});p({tagName:"ul",properties:{id:"item-list"},parent:t}),document.styleSheets[0].insertRule(`#app {
    background: #fff;
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }`);const n=new CSSStyleSheet;n.replace(`
      .wrap {
        height: calc(100vh - 50px);
        background: linear-gradient(
          180deg,
          #3ac6f3 0%,
          rgba(200, 180, 180, 0.4) 40%,
          rgba(255, 0, 0, 0.56) 100%
        );
        overflow: hidden;
      }

      #app {
        background: #fff;
        max-width: 500px;
        width: 100%;
        margin: 100px auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      }

      #header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #counter span {
        margin-right: 0.5rem;
      }

      #input-field {
        margin: 20px 0;
        width: 100%;
        display: flex;
        height: 2.5rem;
      }

      #input-field input {
        width: calc(100% - 55px);
        height: 100%;
        border-radius: 3px;
        border: 1px solid #ccc;
        font-size: 0.8rem;
        padding-left: 15px;
        outline: none;
      }

      #input-field input:focus {
        border-color: #ff0051;
      }

      #input-field button {
        width: 50px;
        height: 100%;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 18px;
        outline: none;
        background: #3ac6f3;
        border-radius: 5px;
        cursor: pointer;
      }

      #input-field button:hover {
        background: #ff0051;
      }

      #item-list-container {
        max-height: 250px;
        overflow: auto;
      }

      #item-list-container li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
      }

      #item-list-container div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      #item-list-container input {
        margin: 0.5rem;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button {
        width: 50px;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        outline: none;
        background: #f97;
        border-radius: 5px;
        transition-duration: 0.5s;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      #item-list-container button:hover {
        background-color: #ddd;
      }
      #item-list-container span {
        margin-left: 25px;
        width: calc(100% - 80px);
        text-align: left;
      }
      input[type='checkbox']{
        display: none;
      }
      input[type='checkbox'] + label {
        display: inline-block;
        min-width: 20px;
        height: 20px;
        border: 2px solid #707070;
        position: absolute;
        margin-right: 5px;
        border-radius: 2px;
        cursor: pointer;
      }
      input:checked + label::after{
        content:'✔';
        font-size: 20px;
        width: 20px;
        height: 20px;
        color: lightGreen;
        text-align: center;
        position: absolute;
        left: -2px;
        top: -100%;
      }
      input:checked + label + span{
        text-decoration: line-through;
      }

  `),document.adoptedStyleSheets=[n];const i=document.querySelector(".add-button");i&&i.addEventListener("click",l)}),q(()=>{const e=document.querySelector("#item-list");if(e)for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];const i=n.querySelector("input"),a=n.querySelector("button");i&&a&&(i.removeEventListener("change",m),a.removeEventListener("click",f))}});const g={vanillaRef:c,setTodoTotalCount:r,onClickAddTodoList:l,isCheckedCount:o,onChangeCheckLabel:m,onClickRemoveButton:f,setTodoIndex:h};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),P={class:"wrap",ref:"vanillaRef"};function J(u,d,c,r,l,o){return _(),T("div",P,null,512)}const B=v(E,[["render",J],["__file","VanillaJS.vue"]]),V=y({__name:"VanillaJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(u,{expose:d}){d();const c=u;function r(o){return{minHeight:o?`calc(100vh - ${o}px)`:"100vh",width:c.openSidebar?"calc(100vw - 300px)":"100vw"}}const l={props:c,vanillaJsStyle:r,VanillaJS:B};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}});function j(u,d,c,r,l,o){return _(),L(k,{"style-fn":r.vanillaJsStyle},{default:$(()=>[C(r.VanillaJS)]),_:1})}const W=v(V,[["render",j],["__file","VanillaJsPage.vue"]]);export{W as default};
