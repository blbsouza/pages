if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>r(e,l),t={module:{uri:l},exports:o,require:c};s[l]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"brscale"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.05d147c1.css",revision:null},{url:"css/chunk-vendors.f49e746c.css",revision:null},{url:"fonts/FrederickatheGreat-Regular.a653394b.ttf",revision:null},{url:"img/brscale.3c113901.svg",revision:null},{url:"img/qrcode.31399fb8.png",revision:null},{url:"img/splash.png",revision:"f7f225f258683bd78e90cd45e44b8755"},{url:"index.html",revision:"5eb97f24fc649a8d161c56aee0884ac6"},{url:"js/app.8c3c4388.js",revision:null},{url:"js/chunk-vendors.433433cc.js",revision:null},{url:"manifest.json",revision:"833df8ef313ee664192e9b7900e26876"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
