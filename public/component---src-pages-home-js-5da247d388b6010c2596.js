"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[528],{2768:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(1504),n=a(6564),r=a(6076),c=a(9128),u=a(4056);var s=e=>{const{carddata:t,albumdata:a}=e;return l.createElement(c.q0,null,l.createElement(u.Link,{to:"/album/"+a.id},l.createElement("img",{src:a.cover_big,alt:t.name})),l.createElement(c.iu,null,l.createElement("small",null,a.title),l.createElement(c.OO,null,"By ",t.name),l.createElement(c.ik,null,l.createElement(c.q,{to:"/artist/"+t.id},"View Artist"))))};var m=()=>{const{0:e,1:t}=(0,l.useState)("beyonce"),{0:a,1:u}=(0,l.useState)([]);return null===a&&console.log("Mbuso"),(0,l.useEffect)((()=>{(async e=>{let t=[];try{const a=n.c.get(r.W+"search/?q="+e);t=(await a).data}catch(a){console.log(a)}try{u(t.data)}catch(a){console.log(a)}})(e)}),[e]),l.createElement(c.q4,null,l.createElement(c.WA,null,l.createElement(c.ou,null,l.createElement(c.EF,{type:"text",placeholder:"Search",value:e,onChange:e=>{t(e.target.value)}}))),l.createElement(c.WA,null,a&&a.map((e=>l.createElement(c.ou,{key:e.id},l.createElement(s,{carddata:e.artist,albumdata:e.album}))))))}}}]);
//# sourceMappingURL=component---src-pages-home-js-5da247d388b6010c2596.js.map