import{Q as S}from"./QPage-D9zP8CA_.js";import{c as f}from"./createElement-DCXfWXei.js";import{d as w,r as x,o as k,_,O as T,S as N,Z as u,P as U,Q as $,k as C}from"./index-5uoXRgNL.js";import"./render-CISo-Xqw.js";const v=[{id:0,imgUrl:"/src/assets/study/images/01.jpg",title:"Title One",caption:"One",captionPos:["center","center"]},{id:1,imgUrl:"/src/assets/study/images/02.jpg",title:"Title Two",caption:"Two",captionPos:["center","center"]},{id:2,imgUrl:"/src/assets/study/images/03.jpg",title:"Title Three",caption:"Three",captionPos:["center","center"]},{id:3,imgUrl:"/src/assets/study/images/04.jpg",title:"Title Three",caption:"Four",captionPos:["center","center"]},{id:4,imgUrl:"/src/assets/study/images/05.jpg",title:"Title Five",caption:"Five",captionPos:["center","center"]}];function y({parentNode:g,itemList:p,visibleCount:o=1,slideCount:i=1,buttonPos:a="horizontal"}){const[d]=f({tagName:"div",parent:g,count:1});d.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const[e]=f({tagName:"div",parent:d});if(a==="horizontal"?e.style.cssText=`
      display: flex;
      align-items: center;
      transform: translateX(0px);
    `:e.style.cssText=`
      display: flex;
      flex-wrap: wrap;
      transform: translateY(0px);
    `,p)p.forEach(r=>{m(e,r)});else for(let r=0;r<v.length;r++)m(e,v[r]);j();const L=Math.trunc(700/o),b=Math.trunc(250/o);function h(r){let s=0,t=0;switch(a){case"vertical":{t=b,s=t*i;for(let n=0;n<i;n++)r==="prev"?e.prepend(e.children[e.children.length-n-1].cloneNode(!0)):(s=-s,e.appendChild(e.children[n].cloneNode(!0)));e.style.transform=`translateY(${s}px)`;break}default:{if(t=L,e.style.transitionDuration="2s",s=t*i,r==="prev"){console.log("t",e.children.length,o),e.style.transform=`translateX(${s}px)`;for(let n=0;n<i;n++)e.prepend(e.children[e.children.length-n-1].cloneNode(!0))}else{s=-s,e.style.transform=`translateX(${s}px)`;for(let n=0;n<i;n++)e.appendChild(e.children[n].cloneNode(!0))}console.log("default",r,s);break}}e.ontransitionend=()=>{P(r)}}function P(r){var s,t,n,l;if(e.style.removeProperty("transition-duration"),a==="horizontal"){for(let c=0;c<i;c++)r==="prev"?(s=e.lastChild)==null||s.remove():(t=e.firstChild)==null||t.remove();e.style.transform="translateX(0)",console.log("transform",e.style.transform)}else{console.log(r);for(let c=0;c<i;c++)r==="prev"?(n=e.lastChild)==null||n.remove():(console.log(r),(l=e.firstChild)==null||l.remove());e.style.transform="translateY(0)"}}function j(){const r=`
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
  `,n=`
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
      <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  `,[l,c]=f({tagName:"button",parent:d,count:2});l.style.cssText=`
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
  `,c.style.cssText=l.style.cssText,a==="horizontal"?(l.innerHTML=s,l.style.cssText+=`
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    `,c.innerHTML=r,c.style.cssText+=`
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `):(l.innerHTML=n,l.style.cssText+=`
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    `,c.innerHTML=t,c.style.cssText+=`
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    `),c.onclick=()=>h("next"),l.onclick=()=>h("prev")}function m(r,s){const[t]=f({tagName:"div",parent:r});t.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      overflow: hidden;
    `,a==="horizontal"?t.style.cssText+=`
        width: calc(700px / ${o});
        height: 250px;
      `:t.style.cssText+=`
        flex-direction: column;
        width: 700px;
        height: calc(250px / ${o});
      `;const[n]=f({tagName:"img",parent:t,properties:{src:s.imgUrl}});n.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[l]=f({tagName:"span",properties:{innerText:s.caption},parent:t});if(l.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,s.captionPos){switch(s.captionPos[0]){case"top":{t.style.justifyContent="flex-start";break}case"bottom":{t.style.justifyContent="flex-end";break}default:t.style.justifyContent="center"}switch(s.captionPos[1]){case"left":{t.style.alignItems="flex-start";break}case"right":{t.style.alignItems="flex-end";break}default:t.style.alignItems="center"}}return t}}const B=w({__name:"CarouselJS",setup(g,{expose:p}){p();const o=x(void 0),i=x(void 0);k(()=>{o.value!==void 0&&y({parentNode:o.value,itemList:[{id:1,imgUrl:"/src/assets/study/images/01.jpg",title:"",caption:"One",captionPos:["center","center"]},{id:2,imgUrl:"/src/assets/study/images/02.jpg",title:"",caption:"Two",captionPos:["center","center"]},{id:3,imgUrl:"/src/assets/study/images/03.jpg",title:"",caption:"Three",captionPos:["center","center"]},{id:4,imgUrl:"/src/assets/study/images/04.jpg",title:"",caption:"Four",captionPos:["center","center"]},{id:5,imgUrl:"/src/assets/study/images/05.jpg",title:"",caption:"Five",captionPos:["center","center"]},{id:6,imgUrl:"/src/assets/study/images/06.jpg",title:"",caption:"Six",captionPos:["center","center"]},{id:7,imgUrl:"/src/assets/study/images/07.jpg",title:"",caption:"Seven",captionPos:["center","center"]}],visibleCount:5,slideCount:3,buttonPos:"horizontal"}),i.value!==void 0&&y({parentNode:i.value,visibleCount:2,slideCount:1,buttonPos:"vertical"})});const a={carouselRef:o,carousel2Ref:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),M={class:"wrap",style:{width:"700px",height:"250px",background:"#000"},ref:"carouselRef"},J={class:"text-wrap",style:{width:"700px",height:"250px",background:"#f1f2f3"},ref:"carousel2Ref"};function z(g,p,o,i,a,d){return T(),N("div",null,[u("div",M,null,512),p[0]||(p[0]=u("div",{style:{height:"50px"}},null,-1)),u("div",J,null,512)])}const I=_(B,[["render",z],["__file","CarouselJS.vue"]]),H=w({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(g,{expose:p}){p();const o=g;function i(d){return{minHeight:d?`calc(100vh - ${d}px)`:"100vh",width:o.openSidebar?"calc(100vw - 300px)":"100vw"}}const a={props:o,carouselJsStyle:i,CarouselJS:I};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function O(g,p,o,i,a,d){return T(),U(S,{"style-fn":i.carouselJsStyle},{default:$(()=>[C(i.CarouselJS)]),_:1})}const Z=_(H,[["render",O],["__file","CarouselJsPage.vue"]]);export{Z as default};
