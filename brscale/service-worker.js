if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>r(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"brscale"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.40a17428.css",revision:null},{url:"css/chunk-vendors.f49e746c.css",revision:null},{url:"fonts/FrederickatheGreat-Regular.a653394b.ttf",revision:null},{url:"img/brscale.3c113901.svg",revision:null},{url:"img/splash.png",revision:"f7f225f258683bd78e90cd45e44b8755"},{url:"index.html",revision:"ac04da1c07997a33dae67b4a1458cda1"},{url:"js/app.5bbb9936.js",revision:null},{url:"js/chunk-vendors.0031c34b.js",revision:null},{url:"manifest.json",revision:"833df8ef313ee664192e9b7900e26876"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
