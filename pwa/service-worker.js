if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"brscale"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.eb6eb50e.css",revision:null},{url:"/css/chunk-vendors.f49e746c.css",revision:null},{url:"/fonts/FrederickatheGreat-Regular.a653394b.ttf",revision:null},{url:"/index.html",revision:"8c9a32320fe33f9d7b8b910edb885595"},{url:"/js/app.b64354e4.js",revision:null},{url:"/js/chunk-vendors.5f6b09b1.js",revision:null},{url:"/manifest.json",revision:"833df8ef313ee664192e9b7900e26876"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
