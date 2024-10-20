import{Q as j}from"./QPage.6d1d3196.js";import{c as p}from"./createElement.6b6e8b9e.js";import{d as y,r as _,o as k,K as w,O as B,U as M,L as N,M as C,f as I}from"./index.00b35fce.js";import"./render.fd78851c.js";function z({parentNode:h,itemList:o,visibleCount:r=1,slideCount:c=1,captionArray:x=[],captionPos:m=["center","center"],buttonPos:g="horizontal"}){const[f]=p({tagName:"div",parent:h,count:1});f.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const[e]=p({tagName:"div",parent:f});o?o.forEach((n,s)=>{console.log("list",s),d(e,o[s],x[s])}):(d(e,"/src/assets/study/images/01.jpg"),d(e,"/src/assets/study/images/02.jpg"),d(e,"/src/assets/study/images/03.jpg"),d(e,"/src/assets/study/images/04.jpg"),d(e,"/src/assets/study/images/05.jpg")),b();const v=Math.trunc(700/r),L=Math.trunc(250/r);function u(n){for(let s=0;s<c;++s){const i=s%e.children.length;console.log("type, i: ",n,s,i),n==="next"?e.appendChild(e.children[s].cloneNode(!0)):e.prepend(e.children[e.children.length-s-1].cloneNode(!0))}g==="horizontal"?e.style.transform=`translateX(${v}px)`:e.style.transform=`translateY(${L}px)`,setTimeout(()=>{T(n)},0)}function T(n){console.log("handle end",n),e.style.transitionDuration="0.5s",g==="horizontal"?(e.style.cssText=`
        display: flex;
        align-items: center;
        transform: translateX(0px);
      `,e.style.removeProperty("transition-duration"),e.style.transform="translateX(0)"):(e.style.cssText=`
        display: flex;
        flex-wrap: wrap;
        flex-wrap: translateY(0px);
      `,e.style.removeProperty("transition-duration"),e.style.transform="translateY(0)"),e.ontransitionend=()=>{var s,i;for(let t=0;t<c;++t)console.log("trans end: ",t),n==="next"?(s=e.firstChild)==null||s.remove():(i=e.lastChild)==null||i.remove()}}function b(){const n=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  `,s=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  `,i=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `,t=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `,[a,l]=p({tagName:"button",parent:f,count:2});a.style.cssText=`
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.7));
  `,l.style.cssText=a.style.cssText,g==="horizontal"?(a.innerHTML=s,a.style.cssText+=`
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `,l.innerHTML=n,l.style.cssText+=`
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `):(a.innerHTML=t,a.style.cssText+=`
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `,l.innerHTML=i,l.style.cssText+=`
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `),l.onclick=()=>u("next"),a.onclick=()=>u("prev")}function d(n,s,i="Caption text"){const[t]=p({tagName:"div",parent:n});switch(t.style.cssText=`
      display: flex;
      width: calc(700px / ${r});
      height: 250px;
      background: #000;
      overflow: hidden;
    `,g==="vertical"?(t.style.width="700px",t.style.height=`calc(250px / ${r})`):(t.style.justifyContent="center",t.style.alignItems="center"),m[0]){case"top":{t.style.justifyContent="flex-start";break}case"center":{t.style.justifyContent="center";break}case"bottom":{t.style.justifyContent="flex-end";break}}switch(m[1]){case"left":{t.style.alignItems="flex-start";break}case"center":{t.style.alignItems="center";break}case"right":{t.style.alignItems="flex-end";break}}g==="vertical"&&(t.style.cssText+=`
        flex-direction: column;
      `);const[a]=p({tagName:"img",parent:t,properties:{src:s}});a.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[l]=p({tagName:"span",properties:{innerText:i},parent:t});return l.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,t}}const H=y({__name:"CarouselJS",setup(h){const o=_(void 0);return k(()=>{const[r]=p({tagName:"div",properties:{id:"carousel-wrap"},parent:o.value});r.style.cssText=`
    width: 700px;
    height: 250px;
    background-color: #646464;
  `,z({parentNode:r,itemList:["/src/assets/study/images/02.jpg","/src/assets/study/images/03.jpg","/src/assets/study/images/04.jpg","/src/assets/study/images/05.jpg","/src/assets/study/images/06.jpg","/src/assets/study/images/07.jpg"],visibleCount:5,slideCount:3,captionArray:["One","Two","Three","Four","Five","Six"],captionPos:["center","center"],buttonPos:"horizontal"})}),(r,c)=>(w(),B("div",null,[M("div",{class:"wrap",ref_key:"carouselRef",ref:o},null,512)]))}}),E=y({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(h){const o=h;function r(c){return{minHeight:c?`calc(100vh - ${c}px)`:"100vh",width:o.openSidebar?"calc(100vw - 300px)":"100vw"}}return(c,x)=>(w(),N(j,{"style-fn":r},{default:C(()=>[I(H)]),_:1}))}});export{E as default};
