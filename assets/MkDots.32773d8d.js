import{o as a,c,a as e}from"./app.2a58ae32.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const o="abcdefghijklmnopqrstuvwxyz",n={props:{space:{type:Number,required:!1,default:15}},setup(){return{id:Array.from(Array(32)).map(()=>o[Math.floor(Math.random()*o.length)]).join("")}}},l={fill:"none"},d=["id","width","height"],h=e("circle",{cx:"2",cy:"2",r:"2",fill:"currentColor"},null,-1),p=[h],_=["fill"];function f(s,u,t,r,m,g){return a(),c("svg",l,[e("defs",null,[e("pattern",{id:r.id,x:"0",y:"0",width:t.space,height:t.space,patternUnits:"userSpaceOnUse"},p,8,d)]),e("rect",{width:"100%",height:"100%",fill:`url(#${r.id})`},null,8,_)])}var j=i(n,[["render",f]]);export{j as default};
