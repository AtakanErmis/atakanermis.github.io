var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function u(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function d(t){m=t}const p=[],h=[],g=[],$=[],b=Promise.resolve();let k=!1;function y(t){g.push(t)}let x=!1;const v=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),_(n.$$)}for(p.length=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];v.has(n)||(v.add(n),n())}g.length=0}while(p.length);for(;$.length;)$.pop()();k=!1,x=!1,v.clear()}}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const A=new Set;function E(t,n){-1===t.$$.dirty[0]&&(p.push(t),k||(k=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(i,l,a,s,f,u,p=[-1]){const h=m;d(i);const g=l.props||{},$=i.$$={fragment:null,ctx:null,props:u,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:p};let b=!1;if($.ctx=a?a(i,g,(t,n,...e)=>{const r=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),b&&E(i,t)),n}):[],$.update(),b=!0,r($.before_update),$.fragment=!!s&&s($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(c)}else $.fragment&&$.fragment.c();l.intro&&((k=i.$$.fragment)&&k.i&&(A.delete(k),k.i(x))),function(t,e,i){const{fragment:l,on_mount:a,on_destroy:c,after_update:s}=t.$$;l&&l.m(e,i),y(()=>{const e=a.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(y)}(i,l.target,l.anchor),w()}var k,x;d(h)}function L(t,n,e){const r=t.slice();return r[1]=n[e].name,r[2]=n[e].link,r[3]=n[e].icon,r}function M(t){let n,e,r,o,i,m,d;return{c(){n=s("li"),e=s("a"),r=s("i"),d=f(),u(r,"class",o=t[3]),u(e,"href",i=t[2]),u(e,"aria-label",m=t[1]),u(e,"rel","noopener noreferrer"),u(e,"target","_blank"),u(e,"class","svelte-b4fxju"),u(n,"class","svelte-b4fxju")},m(t,o){a(t,n,o),l(n,e),l(e,r),l(n,d)},p(t,n){1&n&&o!==(o=t[3])&&u(r,"class",o),1&n&&i!==(i=t[2])&&u(e,"href",i),1&n&&m!==(m=t[1])&&u(e,"aria-label",m)},d(t){t&&c(n)}}}function T(n){let e,r,o,i,m,d,p=n[0],h=[];for(let t=0;t<p.length;t+=1)h[t]=M(L(n,p,t));return{c(){e=s("main"),r=s("h1"),r.textContent="ATAKAN ERMİŞ",o=f(),i=s("h2"),i.textContent="Software Developer",m=f(),d=s("ul");for(let t=0;t<h.length;t+=1)h[t].c();u(r,"class","svelte-b4fxju"),u(i,"class","svelte-b4fxju"),u(d,"class","svelte-b4fxju"),u(e,"class","svelte-b4fxju")},m(t,n){a(t,e,n),l(e,r),l(e,o),l(e,i),l(e,m),l(e,d);for(let t=0;t<h.length;t+=1)h[t].m(d,null)},p(t,[n]){if(1&n){let e;for(p=t[0],e=0;e<p.length;e+=1){const r=L(t,p,e);h[e]?h[e].p(r,n):(h[e]=M(r),h[e].c(),h[e].m(d,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=p.length}},i:t,o:t,d(t){t&&c(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(h,t)}}}function N(t,n,e){let{socialLinks:r}=n;return t.$set=t=>{"socialLinks"in t&&e(0,r=t.socialLinks)},[r]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),j(this,t,N,T,i,{socialLinks:0})}}({target:document.body,props:{socialLinks:[{name:"Twitter",icon:"ri-twitter-fill",link:"https://twitter.com/atakan_ermis"},{name:"Reddit",icon:"ri-reddit-fill",link:"https://www.reddit.com/user/AtakanErmis"},{name:"Github",icon:"ri-github-fill",link:"https://github.com/AtakanErmis"},{name:"Telegram",icon:"ri-telegram-fill",link:"https://t.me/AtakanErmis"},{name:"Last.FM",icon:"ri-music-fill",link:"https://www.last.fm/user/AtakanErmis"},{name:"Spotify",icon:"ri-spotify-fill",link:"https://open.spotify.com/user/5c9in3cvvftwlkbaeqcfvsdok?si=g6Llj8FyQTmMMN40HUgTOg"},{name:"Instagram",icon:"ri-instagram-line",link:"https://instagram.com/atakanermis"},{name:"E-Mail",icon:"ri-mail-line",link:"mailto:ataerms@gmail.com"}]}})}();
//# sourceMappingURL=bundle.js.map