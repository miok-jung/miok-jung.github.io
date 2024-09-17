import{Q as N}from"./QPage.ddb7f3f4.js";import{d as b,r as x,o as S,p as k,S as y,X as w,U as C,V as _,f as q}from"./index.446e193a.js";import"./render.d4568fcc.js";const T=b({__name:"VanillaJS",setup(h){const s=x(void 0);function c({tagName:e,properties:t={},parent:n=void 0,children:i=[],count:o=1}){const r=[],m=()=>{const a=document.createElement(e);return Object.assign(a,t),i.forEach(d=>{d.parent=a,c(d)}),a};for(let a=0;a<o;a++)r.push(m());return n&&(Array.isArray(n)?n.forEach(a=>a.appendChild(r[0])):n.appendChild(r[0])),o===1?r[0]:r}function l(){let e=document.querySelectorAll("#item-list > li"),t=document.querySelector(".total-count");t!=null&&t.TEXT_NODE&&(t.innerHTML=e.length.toString())}function f(){var r;let e=(r=document.querySelector("#item-list"))==null?void 0:r.childNodes.length;const t=document.querySelector(".todo-input"),n=document.querySelector("#item-list");e?e=e+1:e=1,c({tagName:"li",parent:n,children:[{tagName:"input",properties:{id:"check"+e,type:"checkbox"}},{tagName:"label",properties:{htmlFor:"check"+e}},{tagName:"span",properties:{innerText:t.value}},{tagName:"button",properties:{className:`remove-button index-${e}`,innerText:"\uC0AD\uC81C"}}]}),l();const i=document.querySelector(`#check${e}`);i&&i.addEventListener("change",u);const o=document.querySelector(`.remove-button.index-${e}`);o==null||o.addEventListener("click",g)}const p=x(0);function u(){let e=document.querySelectorAll("input[type='checkbox']");p.value=0,e.forEach(n=>{n.checked&&(p.value=p.value+1)});let t=document.querySelector(".complete-count");t&&(t.innerHTML=p.value.toString())}function g(e){const t=parseInt(e.currentTarget.classList[1].slice(-1)),n=document.querySelector("#item-list");n&&n.childNodes[t-1].remove(),l(),u(),v()}function v(){const e=document.querySelector("#item-list");if(e)for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];const i=n.querySelector("input"),o=n.querySelector("label"),r=n.querySelector("button");if(i&&o&&r){i.id=`check-${t+1}`,o.htmlFor=i.id;const m=/^index-\d+$/;r.classList.forEach(a=>{if(m.test(a)){const d=`index-${t+1}`;r.classList.replace(a,d)}})}}}return S(()=>{const e=c({tagName:"div",properties:{id:"app"},parent:s.value});c({tagName:"div",properties:{id:"header"},parent:e,children:[{tagName:"p",properties:{className:"text-h4",innerText:"To-do list"}},{tagName:"div",properties:{id:"container"},children:[{tagName:"span",properties:{innerText:"Total: "}},{tagName:"b",properties:{className:"total-count",innerText:"0"}},{tagName:"span",properties:{className:"space-center-border"}},{tagName:"span",properties:{innerText:"Completed: "}},{tagName:"b",properties:{className:"complete-count",innerText:"0"}}]}]}),c({tagName:"div",properties:{id:"input-field"},parent:e,children:[{tagName:"input",properties:{className:"todo-input",ariaPlaceholder:"\uD560\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},{tagName:"button",properties:{className:"add-button",innerText:"Add"}}]});const t=c({tagName:"div",properties:{id:"item-list-container"},parent:e});c({tagName:"ul",properties:{id:"item-list"},parent:t}),document.styleSheets[0].insertRule(`#app {
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

  `),document.adoptedStyleSheets=[n];const i=document.querySelector(".add-button");i&&i.addEventListener("click",f)}),k(()=>{const e=document.querySelector("#item-list");if(e)for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];const i=n.querySelector("input"),o=n.querySelector("button");i&&o&&(i.removeEventListener("change",u),o.removeEventListener("click",g))}}),(e,t)=>(y(),w("div",{class:"wrap",ref_key:"vanillaRef",ref:s},null,512))}}),A=b({__name:"VanillaJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(h){const s=h;function c(l){return{minHeight:l?`calc(100vh - ${l}px)`:"100vh",width:s.openSidebar?"calc(100vw - 300px)":"100vw"}}return(l,f)=>(y(),C(N,{"style-fn":c},{default:_(()=>[q(T)]),_:1}))}});export{A as default};
