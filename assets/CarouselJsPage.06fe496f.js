import{Q as v}from"./QPage.db96e6dd.js";import{c as s}from"./createElement.6b6e8b9e.js";import{d as u,r as b,o as k,K as x,O as _,U as T,L as C,M as N,f as B}from"./index.8b0af5e0.js";import"./render.958985ac.js";const j=u({__name:"CarouselJS",setup(p){const n=b(void 0);return k(()=>{const[a]=s({tagName:"div",properties:{id:"carousel-wrap"},parent:n.value});a.style.cssText=`
    width: 700px;
    height: 250px;
    background-color: #646464;
  `;const[t]=s({tagName:"div",parent:a,count:1});t.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const d=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path color="white" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  `,h=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path color="white" stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  `,[r,o]=s({tagName:"button",parent:t,count:2});Array.isArray([r,o])?console.log("array true"):console.log("array false"),r.style.cssText=`
    z-index: 1;
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    border: 0;
    background-color: transparent;
    background: linear-gradient(90deg, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0) 100%);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.7));
  `,o.style.cssText=r.style.cssText,o.style.background="linear-gradient(270deg, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0) 100%)",r.style.left="0px",o.style.right="0px",r.innerHTML=h,o.innerHTML=d,o.onclick=()=>g("next"),r.onclick=()=>g("prev");function g(l){e.style.transitionDuration="0.5s",e.style.transform=l==="prev"?`translateX(${0})`:`translateX(${-1400}px)`,e.ontransitionend=()=>{e.style.removeProperty("transition-duration"),e.style.transform="translateX(-700px)",l==="prev"?e.prepend(e.lastChild):e.appendChild(e.firstChild)}}const[e]=s({tagName:"div",parent:t});e.style.cssText=`
    display: flex;
    transform: translateX(-700px);
  `,i(e,"/src/assets/study/images/02.jpg"),i(e,"/src/assets/study/images/03.jpg"),i(e,"/src/assets/study/images/04.jpg"),i(e,"/src/assets/study/images/05.jpg");function i(l,m,f="Caption text"){const[c]=s({tagName:"div",parent:l});c.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 250px;
    overflow: hidden;
  `;const[w]=s({tagName:"img",parent:c,properties:{src:m}});w.style.cssText="height: 100%;";const[y]=s({tagName:"span",properties:{innerText:f},parent:c});return y.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,c}}),(a,t)=>(x(),_("div",null,[T("div",{class:"wrap",ref_key:"carouselRef",ref:n},null,512)]))}}),X=u({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(p){const n=p;function a(t){return{minHeight:t?`calc(100vh - ${t}px)`:"100vh",width:n.openSidebar?"calc(100vw - 300px)":"100vw"}}return(t,d)=>(x(),C(v,{"style-fn":a},{default:N(()=>[B(j)]),_:1}))}});export{X as default};
