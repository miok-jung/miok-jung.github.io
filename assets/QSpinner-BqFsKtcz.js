import{b as s}from"./QIcon-Co71Wnrj.js";import{a as i,d as c,h as n}from"./index-BfqmbkLt.js";const o={size:{type:[String,Number],default:"1em"},color:String};function a(e){return{cSize:i(()=>e.size in s?`${s[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const m=c({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=a(e);return()=>n("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[n("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{m as Q};