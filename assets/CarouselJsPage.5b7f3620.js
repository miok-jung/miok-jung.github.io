import{Q as k}from"./QPage.354c0fa8.js";import{c as d}from"./createElement.6b6e8b9e.js";import{d as w,r as x,o as P,K as T,O as U,U as h,L as N,M as B,f as M}from"./index.2ff4ecc2.js";import"./render.dbac444b.js";const v=[{id:0,imgUrl:"/src/assets/study/images/01.jpg",title:"Title One",caption:"One",captionPos:["center","center"]},{id:1,imgUrl:"/src/assets/study/images/02.jpg",title:"Title Two",caption:"Two",captionPos:["center","center"]},{id:2,imgUrl:"/src/assets/study/images/03.jpg",title:"Title Three",caption:"Three",captionPos:["center","center"]},{id:3,imgUrl:"/src/assets/study/images/04.jpg",title:"Title Three",caption:"Four",captionPos:["center","center"]},{id:4,imgUrl:"/src/assets/study/images/05.jpg",title:"Title Five",caption:"Five",captionPos:["center","center"]}];function y({parentNode:g,itemList:c,visibleCount:l=1,slideCount:n=1,buttonPos:p="horizontal"}){const[f]=d({tagName:"div",parent:g,count:1});f.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const[e]=d({tagName:"div",parent:f});if(p==="horizontal"?e.style.cssText=`
      display: flex;
      align-items: center;
      transform: translateX(0px);
    `:e.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `,c)c.forEach(i=>{u(e,i)});else for(let i=0;i<v.length;i++)u(e,v[i]);j();const L=Math.trunc(700/l),b=Math.trunc(250/l);function m(i){let s=0,t=0;switch(p){case"vertical":{t=b,s=t*n;for(let r=0;r<n;r++)i==="prev"?e.prepend(e.children[e.children.length-r-1].cloneNode(!0)):(s=-s,e.appendChild(e.children[r].cloneNode(!0)));e.style.transform=`translateY(${s}px)`;break}default:{if(t=L,e.style.transitionDuration="2s",s=t*n,i==="prev"){console.log("t",e.children.length,l),e.style.transform=`translateX(${s}px)`;for(let r=0;r<n;r++)e.prepend(e.children[e.children.length-r-1].cloneNode(!0))}else{s=-s,e.style.transform=`translateX(${s}px)`;for(let r=0;r<n;r++)e.appendChild(e.children[r].cloneNode(!0))}console.log("default",i,s);break}}e.ontransitionend=()=>{_(i)}}function _(i){var s,t,r,o;if(e.style.removeProperty("transition-duration"),p==="horizontal"){for(let a=0;a<n;a++)i==="prev"?(s=e.lastChild)==null||s.remove():(t=e.firstChild)==null||t.remove();e.style.transform="translateX(0)",console.log("transform",e.style.transform)}else{console.log(i);for(let a=0;a<n;a++)i==="prev"?(r=e.lastChild)==null||r.remove():(console.log(i),(o=e.firstChild)==null||o.remove());e.style.transform="translateY(0)"}}function j(){const i=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  `,s=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  `,t=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `,r=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `,[o,a]=d({tagName:"button",parent:f,count:2});o.style.cssText=`
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
  `,a.style.cssText=o.style.cssText,p==="horizontal"?(o.innerHTML=s,o.style.cssText+=`
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `,a.innerHTML=i,a.style.cssText+=`
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `):(o.innerHTML=r,o.style.cssText+=`
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `,a.innerHTML=t,a.style.cssText+=`
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `),a.onclick=()=>m("next"),o.onclick=()=>m("prev")}function u(i,s){const[t]=d({tagName:"div",parent:i});t.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      overflow: hidden;
    `,p==="horizontal"?t.style.cssText+=`
        width: calc(700px / ${l});
        height: 250px;
      `:t.style.cssText+=`
        flex-direction: column;
        width: 700px;
        height: calc(250px / ${l});
      `;const[r]=d({tagName:"img",parent:t,properties:{src:s.imgUrl}});r.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[o]=d({tagName:"span",properties:{innerText:s.caption},parent:t});if(o.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,s.captionPos){switch(s.captionPos[0]){case"top":{t.style.justifyContent="flex-start";break}case"bottom":{t.style.justifyContent="flex-end";break}default:t.style.justifyContent="center"}switch(s.captionPos[1]){case"left":{t.style.alignItems="flex-start";break}case"right":{t.style.alignItems="flex-end";break}default:t.style.alignItems="center"}}return t}}const z=h("div",{style:{height:"50px"}},null,-1),C=w({__name:"CarouselJS",setup(g){const c=x(void 0),l=x(void 0);return P(()=>{c.value!==void 0&&y({parentNode:c.value,itemList:[{id:1,imgUrl:"/src/assets/study/images/01.jpg",title:"",caption:"One",captionPos:["center","center"]},{id:2,imgUrl:"/src/assets/study/images/02.jpg",title:"",caption:"Two",captionPos:["center","center"]},{id:3,imgUrl:"/src/assets/study/images/03.jpg",title:"",caption:"Three",captionPos:["center","center"]},{id:4,imgUrl:"/src/assets/study/images/04.jpg",title:"",caption:"Four",captionPos:["center","center"]},{id:5,imgUrl:"/src/assets/study/images/05.jpg",title:"",caption:"Five",captionPos:["center","center"]},{id:6,imgUrl:"/src/assets/study/images/06.jpg",title:"",caption:"Six",captionPos:["center","center"]},{id:7,imgUrl:"/src/assets/study/images/07.jpg",title:"",caption:"Seven",captionPos:["center","center"]}],visibleCount:5,slideCount:3,buttonPos:"horizontal"}),l.value!==void 0&&y({parentNode:l.value,visibleCount:2,slideCount:1,buttonPos:"vertical"})}),(n,p)=>(T(),U("div",null,[h("div",{class:"wrap",style:{width:"700px",height:"250px",background:"#000"},ref_key:"carouselRef",ref:c},null,512),z,h("div",{class:"text-wrap",style:{width:"700px",height:"250px",background:"#f1f2f3"},ref_key:"carousel2Ref",ref:l},null,512)]))}}),X=w({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(g){const c=g;function l(n){return{minHeight:n?`calc(100vh - ${n}px)`:"100vh",width:c.openSidebar?"calc(100vw - 300px)":"100vw"}}return(n,p)=>(T(),N(k,{"style-fn":l},{default:B(()=>[M(C)]),_:1}))}});export{X as default};
