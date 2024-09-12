import{Q as f}from"./QPage.b31d40fe.js";import{d as l,r as g,o as h,S as c,X as x,U as b,V as w,f as v}from"./index.4f753583.js";import"./render.10045068.js";const N=l({__name:"VanillaJS",setup(p){const a=g(void 0);function i({tagName:e,properties:r={},parent:o=void 0,children:u=[],count:d=1}){const n=[],m=()=>{const t=document.createElement(e);return Object.assign(t,r),u.forEach(s=>{s.parent=t,i(s)}),t};for(let t=0;t<d;t++)n.push(m());return o&&(Array.isArray(n)?n.forEach(t=>o.appendChild(t)):o.appendChild(n[0])),d===1?n[0]:n}return h(()=>{const e=i({tagName:"div",properties:{id:"app"},parent:a.value});document.styleSheets[0].insertRule(`#app {
    background: #fff;
    max-width: 500px;
    width: 100%;
    margin: 100px auto;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }`);const r=new CSSStyleSheet;r.replace(`
  * {
        margin: 0;
        padding: 0;
      }

      .wrap {
        height: 100vh;
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
        border-radius: 6px;
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
        width: 85%;
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
        font-size: 21px;
        outline: none;
        background: #3ac6f3;
        border-radius: 3px;
      }

      #input-field button:hover {
        background: #ff0051;
      }

      #item-list-container {
        max-height: 250px;
        overflow: scroll;
      }

      #item-list-container li {
        position: relative;
        display: flex;
        justify-content: space-between;
        list-style: none;
        height: 3rem;
        line-height: 3rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        border-radius: 5px;
      }

      #item-list-container div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      #item-list-container input {
        margin: 1rem;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button {
        width: 3rem;
        margin: 0.3rem 1rem;
        width: 3rem;
        border: none;
        color: #fff;
        margin-left: 5px;
        font-size: 0.8rem;
        font-weight: bold;
        outline: none;
        background: #f97;
        border-radius: 3px;
        transition-duration: 0.5s;
        opacity: 1;
      }
      #item-list-container button:hover {
        background-color: #ddd;
      }
      #item-list-container span {
        width: 100%;
        text-align: 'left';
      }
  
  `),document.adoptedStyleSheets=[r],i({tagName:"div",properties:{id:"header"},parent:e,children:[{tagName:"h1",properties:{innerText:"To-do list"}},{tagName:"div",properties:{id:"container"},children:[{tagName:"span",properties:{innerText:"Total: "}},{tagName:"span",properties:{innerText:"0"}},{tagName:"span",properties:{innerText:"Completed: "}},{tagName:"span",properties:{innerText:"0"}}]}]}),i({tagName:"div",properties:{id:"input-field"},parent:e,children:[{tagName:"input",properties:{ariaPlaceholder:"\uD560\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},{tagName:"button",properties:{innerText:"Add"}}]}),i({tagName:"div",properties:{id:"item-list-container"},parent:e,children:[{tagName:"ul",properties:{id:"item-list"},children:[{tagName:"li",children:[{tagName:"div",children:[{tagName:"input",properties:{type:"checkbox"}},{tagName:"span",properties:{innerText:"\uD560\uC77C1"}},{tagName:"button",properties:{innerText:"\uC0AD\uC81C"}}]}]},{tagName:"li"},{tagName:"li"},{tagName:"li"}]}]})}),(e,r)=>(c(),x("div",{class:"wrap",ref_key:"vanillaRef",ref:a},null,512))}}),k=l({__name:"VanillaJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(p){const a=p;function i(e){return{minHeight:e?`calc(100vh - ${e}px)`:"100vh",width:a.openSidebar?"calc(100vw - 300px)":"100vw"}}return(e,r)=>(c(),b(f,{"style-fn":i},{default:w(()=>[v(N)]),_:1}))}});export{k as default};
