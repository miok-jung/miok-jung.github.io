import{a as c,u as l}from"./use-dark-DmMYkLxl.js";import{d as t,a as o,h as s,g as i}from"./index-BfqmbkLt.js";import{a as d}from"./render-DbdArWqF.js";const g=t({name:"QCard",props:{...c,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=i(),n=l(a,e),u=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:u.value},d(r.default))}}),p=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},d(r.default))}});export{p as Q,g as a};