(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"f0bb600c",3:"95ae7c32",4:"a6e7026b",5:"2efb9f2e",6:"82c1362a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([0,1]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2dce":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("0ca9"),n("5b0d");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b178");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"]});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],s={name:"App"},l=s,p=n("2877"),f=Object(p["a"])(l,u,c,!1,null,null,null),d=f.exports,h=n("2f62");r["a"].use(h["a"]);var b=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},v=n("8c4f");const y=[{path:"/",component:()=>n.e(3).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(2).then(n.bind(null,"8b24"))},{path:"chat",component:()=>n.e(4).then(n.bind(null,"4d23"))},{path:"chat-2",component:()=>n.e(5).then(n.bind(null,"c0b4"))}]},{path:"*",component:()=>n.e(6).then(n.bind(null,"e51e"))}];var m=y;r["a"].use(v["a"]);var w=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:m,mode:"history",base:"/"});return e},g=async function(){const e="function"===typeof b?await b({Vue:r["a"]}):b,t="function"===typeof w?await w({Vue:r["a"],store:e}):w;e.$router=t;const n={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:n,store:e,router:t}},j=n("bc3a"),O=n.n(j);r["a"].prototype.$axios=O.a;var P=n("2591");n("e71f");var S={apiKey:"AIzaSyCANzVwrZIak01UJWuOf7JKyVdL9eKWsGI",authDomain:"vue-chat-4681a.firebaseapp.com",projectId:"vue-chat-4681a",storageBucket:"vue-chat-4681a.appspot.com",messagingSenderId:"95660354568",appId:"1:95660354568:web:7a55829af3630a2d6035bd"};P["a"].initializeApp(S);const x=P["a"].firestore();x.settings({timeStampsInSnapshots:!0}),r["a"].prototype.$firebase=P["a"],r["a"].prototype.$db=x;var _=n("2dce"),I=n.n(_);const k="/";async function A(){const{app:e,store:t,router:n}=await g();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[void 0,void 0,I.a];for(let s=0;!1===o&&s<u.length;s++)if("function"===typeof u[s])try{await u[s]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:k})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}A()},"5b0d":function(e,t,n){}});