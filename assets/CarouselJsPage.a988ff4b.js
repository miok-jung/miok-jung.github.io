import{Q as z}from"./QPage.6528b6aa.js";import{c as p}from"./createElement.6b6e8b9e.js";import{d as v,r as M,o as N,K as u,O as C,U as $,L as I,M as H,f as S}from"./index.92a7ff62.js";import"./render.e4bbdacf.js";function X({parentNode:d,imageArray:o,visibleCount:s=1,slideCount:a=1,captionArray:h=[],captionPos:g=["center","center"],buttonPos:n="horizontal"}){const[x]=p({tagName:"div",parent:d,count:1});x.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const L=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  `,T=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  `,_=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `,b=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `,[l,f]=p({tagName:"button",parent:x,count:2});l.style.cssText=`
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
  `,f.style.cssText=l.style.cssText,n==="horizontal"?(l.innerHTML=T,l.style.cssText+=`
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `,f.innerHTML=L,f.style.cssText+=`
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `):(l.innerHTML=b,l.style.cssText+=`
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `,f.innerHTML=_,f.style.cssText+=`
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `);const m=700/s,y=250/s;f.onclick=()=>w("next"),l.onclick=()=>w("prev");function w(r){e.style.transitionDuration="0.5s";let i=0;r==="prev"?i=(n==="horizontal"?m:y)*a:i=(n==="horizontal"?-m:-y)*a,r==="prev"?n==="horizontal"?e.style.transform=`translateX(${i}px)`:e.style.transform=`translateY(${i}px)`:n==="horizontal"?e.style.transform=`translateX(${i}px)`:e.style.transform=`translateY(${i}px)`,e.ontransitionend=()=>{if(e.style.removeProperty("transition-duration"),r==="prev")for(let c=0;c<a;c++)e.prepend(e.lastChild);else for(let c=0;c<a;c++)e.appendChild(e.firstChild);n==="horizontal"?(e.style.transform="translateX(0)",console.log("ontransitioned",e.style.transform)):e.style.transform="translateY(0)"}}const[e]=p({tagName:"div",parent:x});n==="horizontal"?e.style.cssText=`
      display: flex;
      align-items:center;
      transform: translateX(0px);
    `:e.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `;for(let r=0;r<o.length;r++)k(e,o[r],h[r]);function k(r,i,c="Caption text"){const[t]=p({tagName:"div",parent:r});switch(t.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(700px / ${s});
      height: 250px;
      overflow: hidden;
    `,n==="vertical"&&(t.style.width="700px",t.style.height=`calc(250px / ${s})`),g[0]){case"top":{t.style.justifyContent="flex-start";break}case"center":{t.style.justifyContent="center";break}case"bottom":{t.style.justifyContent="flex-end";break}}switch(g[1]){case"left":{t.style.alignItems="flex-start";break}case"center":{t.style.alignItems="center";break}case"right":{t.style.alignItems="flex-end";break}}n==="vertical"&&(t.style.cssText+=`
        flex-direction: column;
      `);const[j]=p({tagName:"img",parent:t,properties:{src:i}});j.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[B]=p({tagName:"span",properties:{innerText:c},parent:t});return B.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,t}}const Y=v({__name:"CarouselJS",setup(d){const o=M(void 0);return N(()=>{const[s]=p({tagName:"div",properties:{id:"carousel-wrap"},parent:o.value});s.style.cssText=`
    width: 700px;
    height: 250px;
    background-color: #646464;
  `,X({parentNode:s,imageArray:["/src/assets/study/images/02.jpg","/src/assets/study/images/03.jpg","/src/assets/study/images/04.jpg","/src/assets/study/images/05.jpg","/src/assets/study/images/06.jpg","/src/assets/study/images/07.jpg"],visibleCount:3,slideCount:2,captionArray:["One","Two","Three","Four","Five","Six"],captionPos:["center","center"],buttonPos:"horizontal"})}),(s,a)=>(u(),C("div",null,[$("div",{class:"wrap",ref_key:"carouselRef",ref:o},null,512)]))}}),E=v({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(d){const o=d;function s(a){return{minHeight:a?`calc(100vh - ${a}px)`:"100vh",width:o.openSidebar?"calc(100vw - 300px)":"100vw"}}return(a,h)=>(u(),I(z,{"style-fn":s},{default:H(()=>[S(Y)]),_:1}))}});export{E as default};
