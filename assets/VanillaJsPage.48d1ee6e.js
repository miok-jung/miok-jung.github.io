import{Q as b}from"./QPage.567b6e92.js";import{d as h,r as y,o as v,a as N,S as f,X as w,U as S,V as k,f as _}from"./index.329aeef0.js";import"./render.e45d0764.js";const C=h({__name:"VanillaJS",setup(m){const s=y(void 0);function r({tagName:e,properties:t={},parent:n=void 0,children:i=[],count:l=1}){const a=[],u=()=>{const o=document.createElement(e);return Object.assign(o,t),i.forEach(p=>{p.parent=o,r(p)}),o};for(let o=0;o<l;o++)a.push(u());return n&&(Array.isArray(n)?n.forEach(o=>o.appendChild(a[0])):n.appendChild(a[0])),l===1?a[0]:a}function c(){let e=document.querySelectorAll("#item-list > li"),t=document.querySelector(".total-count");t!=null&&t.TEXT_NODE&&(t.innerHTML=e.length.toString())}function d(){var l;let e=(l=document.querySelector("#item-list"))==null?void 0:l.childNodes.length;const t=document.querySelector(".todo-input"),n=document.querySelector("#item-list");e?e=e+1:e=1,r({tagName:"li",parent:n,children:[{tagName:"input",properties:{id:"check"+e,type:"checkbox"}},{tagName:"label",properties:{htmlFor:"check"+e}},{tagName:"span",properties:{innerText:t.value}},{tagName:"button",properties:{className:`remove-button index-${e}`,innerText:"\uC0AD\uC81C"}}]}),c();const i=document.querySelector(`.remove-button.index-${e}`);i==null||i.addEventListener("click",x)}function x(e){const t=parseInt(e.currentTarget.classList[1].slice(-1)),n=document.querySelector("#item-list");n&&n.childNodes[t-1].remove(),c(),g()}function g(){const e=document.querySelector("#item-list");if(e)for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];const i=n.querySelector("input"),l=n.querySelector("label"),a=n.querySelector("button");if(i&&l&&a){i.id=`check-${t+1}`,l.htmlFor=i.id;const u=/^index-\d+$/;a.classList.forEach(o=>{if(u.test(o)){const p=`index-${t+1}`;a.classList.replace(o,p)}})}}}return v(()=>{const e=r({tagName:"div",properties:{id:"app"},parent:s.value});r({tagName:"div",properties:{id:"header"},parent:e,children:[{tagName:"p",properties:{className:"text-h4",innerText:"To-do list"}},{tagName:"div",properties:{id:"container"},children:[{tagName:"span",properties:{innerText:"Total: "}},{tagName:"b",properties:{className:"total-count",innerText:"0"}},{tagName:"span",properties:{className:"space-center-border"}},{tagName:"span",properties:{innerText:"Completed: "}},{tagName:"b",properties:{className:"complete-count",innerText:"0"}}]}]}),r({tagName:"div",properties:{id:"input-field"},parent:e,children:[{tagName:"input",properties:{className:"todo-input",ariaPlaceholder:"\uD560\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},{tagName:"button",properties:{className:"add-button",innerText:"Add"}}]});const t=r({tagName:"div",properties:{id:"item-list-container"},parent:e});r({tagName:"ul",properties:{id:"item-list"},parent:t}),document.styleSheets[0].insertRule(`#app {
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
        content:'\u2714';
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

  `),document.adoptedStyleSheets=[n];const i=document.querySelector(".add-button");i&&i.addEventListener("click",d)}),N(()=>{const e=document.querySelector(".add-button");e&&e.removeEventListener("click",d)}),(e,t)=>(f(),w("div",{class:"wrap",ref_key:"vanillaRef",ref:s},null,512))}}),L=h({__name:"VanillaJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(m){const s=m;function r(c){return{minHeight:c?`calc(100vh - ${c}px)`:"100vh",width:s.openSidebar?"calc(100vw - 300px)":"100vw"}}return(c,d)=>(f(),S(b,{"style-fn":r},{default:k(()=>[_(C)]),_:1}))}});export{L as default};
