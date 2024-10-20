import{Q as j}from"./QPage.1858b152.js";import{c as p}from"./createElement.6b6e8b9e.js";import{d as y,r as _,o as k,K as v,O as B,U as M,L as N,M as C,f as I}from"./index.05641f81.js";import"./render.56cb7d60.js";function S({parentNode:g,itemList:l,visibleCount:a=1,slideCount:c=1,captionArray:f=[],captionPos:m=["center","center"],buttonPos:h="horizontal"}){const[x]=p({tagName:"div",parent:g,count:1});x.style.cssText=`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;const[e]=p({tagName:"div",parent:x});l?l.forEach((n,t)=>{d(e,l[t],f[t])}):(d(e,"/src/assets/study/images/01.jpg"),d(e,"/src/assets/study/images/02.jpg"),d(e,"/src/assets/study/images/03.jpg"),d(e,"/src/assets/study/images/04.jpg"),d(e,"/src/assets/study/images/05.jpg")),b();const u=Math.trunc(700/a),L=Math.trunc(250/a);function w(n){for(let t=0;t<c;++t){console.log("i: ",t);const i=t&e.children.length;n==="next"?(console.log(n,": ",t,i),e.appendChild(e.children[t].cloneNode(!0))):(console.log(n,": ",t,i),e.prepend(e.children[e.children.length-t-1].cloneNode(!0)))}n==="next"||(e.style.transform=`
        translateX(${u}px);
      `),setTimeout(()=>{T(n)},0)}function T(n){console.log("handleTransitionEnd",n),e.style.transitionDuration="0.5s";let t=0,i=0;n==="next"&&(t=-i*c),h==="horizontal"?(e.style.cssText=`
        display: flex;
        align-items:center;
        transform: translateX(0px);
      `,i=u,e.style.transform=`translateX(${t}px)`,console.log("hori",t),e.style.removeProperty("transition-duration"),e.style.transform="translateX(0)"):(e.style.cssText=`
        display: flex;
        flex-wrap: wrap;
        transform: translateY(0px);
      `,i=L,e.style.transform=`translateY(${t}px)`,console.log("vert",t),e.style.removeProperty("transition-duration"),e.style.transform="translateY(0)"),e.ontransitionend=()=>{var s,r;for(let o=0;o<c;++o)console.log(n,"delete"),n==="next"?(console.log(n,"delete"),(s=e.firstChild)==null||s.remove()):(console.log(n,"delete"),(r=e.lastChild)==null||r.remove())}}function b(){const n=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    `,t=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
    `,i=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    `,s=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
      </svg>
    `,[r,o]=p({tagName:"button",parent:x,count:2});r.style.cssText=`
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
    `,o.style.cssText=r.style.cssText,h==="horizontal"?(r.innerHTML=t,r.style.cssText+=`
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
      `,o.innerHTML=n,o.style.cssText+=`
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      `):(r.innerHTML=s,r.style.cssText+=`
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
      `,o.innerHTML=i,o.style.cssText+=`
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
      `),o.onclick=()=>w("next"),r.onclick=()=>w("prev")}function d(n,t,i="Caption text"){const[s]=p({tagName:"div",parent:n});switch(s.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(700px / ${a});
      height: 250px;
      background: #000;
      overflow: hidden;
    `,h==="vertical"&&(s.style.width="700px",s.style.height=`calc(250px / ${a})`),m[0]){case"top":{s.style.justifyContent="flex-start";break}case"center":{s.style.justifyContent="center";break}case"bottom":{s.style.justifyContent="flex-end";break}}switch(m[1]){case"left":{s.style.alignItems="flex-start";break}case"center":{s.style.alignItems="center";break}case"right":{s.style.alignItems="flex-end";break}}h==="vertical"&&(s.style.cssText+=`
        flex-direction: column;
      `);const[r]=p({tagName:"img",parent:s,properties:{src:t}});r.style.cssText=`
      height: 100%;
      object-position: 50% 50%;
      object-fit: cover;
    `;const[o]=p({tagName:"span",properties:{innerText:i},parent:s});return o.style.cssText=`
      position: absolute;
      color: white;
      font-weight: bold;
      filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.5));
    `,s}}const $=y({__name:"CarouselJS",setup(g){const l=_(void 0);return k(()=>{const[a]=p({tagName:"div",properties:{id:"carousel-wrap"},parent:l.value});a.style.cssText=`
    width: 700px;
    height: 250px;
    background-color: #646464;
  `,S({parentNode:a,itemList:["/src/assets/study/images/02.jpg","/src/assets/study/images/03.jpg","/src/assets/study/images/04.jpg","/src/assets/study/images/05.jpg","/src/assets/study/images/06.jpg","/src/assets/study/images/07.jpg"],visibleCount:5,slideCount:3,captionArray:["One","Two","Three","Four","Five","Six"],captionPos:["center","center"],buttonPos:"horizontal"})}),(a,c)=>(v(),B("div",null,[M("div",{class:"wrap",ref_key:"carouselRef",ref:l},null,512)]))}}),Y=y({__name:"CarouselJsPage",props:{openSidebar:{type:Boolean,default:!0}},setup(g){const l=g;function a(c){return{minHeight:c?`calc(100vh - ${c}px)`:"100vh",width:l.openSidebar?"calc(100vw - 300px)":"100vw"}}return(c,f)=>(v(),N(j,{"style-fn":a},{default:C(()=>[I($)]),_:1}))}});export{Y as default};
