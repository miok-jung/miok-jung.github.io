import{Q as _}from"./QPage.b8411aa9.js";import{c as p}from"./createElement.6b6e8b9e.js";import{d as w,r as k,o as j,K as v,O as N,U as B,L as M,M as z,f as $}from"./index.d341ed16.js";import"./render.8884b462.js";function S({parentNode:d,itemList:l,visibleCount:c=1,slideCount:a=1,captionArray:g=[],captionPos:x=["center","center"],buttonPos:f="horizontal"}){const[h]=p({tagName:"div",parent:d,count:1});h.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const[t]=p({tagName:"div",parent:h});if(f==="horizontal"?t.style.cssText=`
      display: flex;
      align-items: center;
      transform: translateX(0px);
    `:t.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `,l)l.forEach((r,n)=>{u(t,r,g[n])});else for(let r=0;r<5;r++)u(t,`/src/assets/study/images/0${r+1}.jpg`,`${r}${r}`);b();const y=Math.trunc(700/c),L=Math.trunc(250/c);function m(r){let n=0,i=0;if(f==="horizontal"){if(i=y,r==="prev")for(let e=0;e<a;e++)t.prepend(t.children[t.children.length-e-1].cloneNode(!0));else{n=-1;for(let e=0;e<a;e++)t.appendChild(t.children[e].cloneNode(!0))}n=n*i*a,t.style.transitionDuration="0.5s",t.style.transform=`translateX(calc(${n})px)`}else{if(i=L,r==="prev")for(let e=0;e<a;e++)t.prepend(t.children[t.children.length-e-1].cloneNode(!0)),n=i*a;else for(let e=0;e<a;e++)t.appendChild(t.children[e].cloneNode(!0)),n=-i*a;t.style.transform=`translateY(${n}px)`}setTimeout(()=>{T(r)},0)}function T(r){var n,i,e,o;if(f==="horizontal"){if(r==="prev")for(let s=0;s<a;s++)(n=t.lastChild)==null||n.remove();else for(let s=0;s<a;s++)(i=t.firstChild)==null||i.remove();t.style.transform="translateX(0)"}else{if(r==="prev")for(let s=0;s<a;s++)(e=t.lastChild)==null||e.remove();else for(let s=0;s<a;s++)(o=t.firstChild)==null||o.remove();t.style.transform="translateY(0)"}}function b(){const r=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  `,n=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  `,i=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `,e=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `,[o,s]=p({tagName:"button",parent:h,count:2});o.style.cssText=`
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
  `,s.style.cssText=o.style.cssText,f==="horizontal"?(o.innerHTML=n,o.style.cssText+=`
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `,s.innerHTML=r,s.style.cssText+=`
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `):(o.innerHTML=e,o.style.cssText+=`
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `,s.innerHTML=i,s.style.cssText+=`
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `),s.onclick=()=>m("next"),o.onclick=()=>m("prev")}function u(r,n,i="Caption text"){const[e]=p({tagName:"div",parent:r});e.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      overflow: hidden;
    `,f==="horizontal"?e.style.cssText+=`
        width: calc(700px / ${c});
        height: 250px;
      `:e.style.cssText+=`
        flex-direction: column;
        width: 700px;
        height: calc(250px / ${c});
      `;const[o]=p({tagName:"img",parent:e,properties:{src:n}});o.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[s]=p({tagName:"span",properties:{innerText:i},parent:e});switch(s.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,x[0]){case"top":{e.style.justifyContent="flex-start";break}case"center":{e.style.justifyContent="center";break}case"bottom":{e.style.justifyContent="flex-end";break}}switch(x[1]){case"left":{e.style.alignItems="flex-start";break}case"center":{e.style.alignItems="center";break}case"right":{e.style.alignItems="flex-end";break}}return e}}const I=w({__name:"CarouselJS",setup(d){const l=k(void 0);return j(()=>{l.value!==void 0&&S({parentNode:l.value,itemList:["/src/assets/study/images/01.jpg","/src/assets/study/images/02.jpg","/src/assets/study/images/03.jpg","/src/assets/study/images/04.jpg","/src/assets/study/images/05.jpg","/src/assets/study/images/06.jpg","/src/assets/study/images/07.jpg"],visibleCount:5,slideCount:3,captionArray:["One","Two","Three","Four","Five","Six","Seven"],captionPos:["center","center"],buttonPos:"horizontal"})}),(c,a)=>(v(),N("div",null,[B("div",{class:"wrap",style:{width:"700px",height:"250px",background:"#000"},ref_key:"carouselRef",ref:l},null,512)]))}}),E=w({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(d){const l=d;function c(a){return{minHeight:a?`calc(100vh - ${a}px)`:"100vh",width:l.openSidebar?"calc(100vw - 300px)":"100vw"}}return(a,g)=>(v(),M(_,{"style-fn":c},{default:z(()=>[$(I)]),_:1}))}});export{E as default};
