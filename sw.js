if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const d=e=>s(e,n),c={module:{uri:n},exports:o,require:d};i[n]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-4d3b49f6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.js",revision:"849883fc12545453ee2e310a30a342f9"},{url:"index.html",revision:"0c0709e47202d8c4a67d85d7887ddcec"},{url:"index.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"},{url:"style.css",revision:"dc88fac0768f6b717f2849b5cb498de3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
