var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,o){function s(e){try{l(n.next(e))}catch(r){o(r)}}function i(e){try{l(n["throw"](e))}catch(r){o(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,i)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1];o=s;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(s);break}if(o[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(i){s=[6,i];a=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var o=arguments[r],s=0,i=o.length;s<i;s++,a++)n[a]=o[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="demo";var a=0;var o=false;var s;var i;var l;var f=false;var c=false;var u=false;var $=window;var v=document;var d={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var h=function(){return!!v.documentElement.attachShadow}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g=new WeakMap;var m=function(e){return g.get(e)};var y=e("r",(function(e,r){return g.set(r.$lazyInstance$=e,r)}));var w=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return g.set(e,r)};var b=function(e){return console.error(e)};var R=new Map;var S=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var o=e.$lazyBundleIds$;var s=R.get(o);if(s){return s[a]}return r.import("./"+o+".entry.js"+"").then((function(e){{R.set(o,e)}return e[a]}),b)};var _=new Map;var N=[];var x=[];var T=[];var C=function(e,r){return function(t){e.push(t);if(!o){o=true;if(r&&d.$flags$&4){A(L)}else{d.raf(L)}}}};var j=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){b(t)}}e.length=0};var E=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){b(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var L=function(){a++;j(N);var e=(d.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;E(x,e);E(T,e);if(x.length>0){T.push.apply(T,x);x.length=0}if(o=N.length+x.length+T.length>0){d.raf(L)}else{a=0}};var A=function(e){return Promise.resolve().then(e)};var U=C(x,true);var k=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var P=function(e,r){if(r===void 0){r=""}{return function(){return}}};var B=function(e,r){{return function(){return}}};var I=e("a",(function(){if(!($.CSS&&$.CSS.supports&&$.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){d.$cssShim$=$.__stencil_cssshim;if(d.$cssShim$){return d.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,o,s;return __generator(this,(function(i){switch(i.label){case 0:{d.$cssShim$=$.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(v.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));o=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},o),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,$.location.href));q(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:i.sent();i.label=3;case 3:return[2,Object.assign(Object.assign({},o),{resourcesUrl:s.href})]}}))}))}));var q=function(e){var r=O(n);try{$[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;$[r]=function(n){var a=new URL(n,e).href;var o=t.get(a);if(!o){var s=v.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){s.onload=function(){e($[r].m);s.remove()}}));t.set(a,o);v.head.appendChild(s)}return o}}};var z="hydrated";var F=new WeakMap;var W=function(e,r,t){var n=_.get(e);if(p&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}_.set(e,n)};var G=function(e,r,t,n){var a=V(r.$tagName$);var o=_.get(a);e=e.nodeType===11?e:v;if(o){if(typeof o==="string"){e=e.head||e;var s=F.get(e);var i=void 0;if(!s){F.set(e,s=new Set)}if(!s.has(a)){{if(d.$cssShim$){i=d.$cssShim$.createHostStyle(n,a,o,!!(r.$flags$&10));var l=i["s-sc"];if(l){a=l;s=null}}else{i=v.createElement("style");i.innerHTML=o}e.insertBefore(i,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[o])}}return a};var Q=function(e,r,t){var n=P("attachStyles",r.$tagName$);var a=G(h&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var V=function(e,r){return"sc-"+e};var D=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var o=null;var s=false;var i=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!M(a)){a=String(a)}if(s&&i){l[l.length-1].$text$+=a}else{l.push(s?J(null,a):a)}i=s}}};f(t);if(r){if(r.name){o=r.name}}var c=J(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$name$=o}return c}));var J=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$name$=null}return t};var K={};var X=function(e){return e&&e.$tag$===K};var Y=function(e,r,t,n){var a=r.$children$[t];var o=0;var c;var $;var d;if(!f){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){c=a.$elm$=v.createTextNode(a.$text$)}else if(a.$flags$&1){c=a.$elm$=v.createTextNode("")}else{c=a.$elm$=v.createElement(a.$flags$&2?"slot-fb":a.$tag$);if(k(s)&&c["s-si"]!==s){c.classList.add(c["s-si"]=s)}if(a.$children$){for(o=0;o<a.$children$.length;++o){$=Y(e,a,o,c);if($){c.appendChild($)}}}}{c["s-hn"]=l;if(a.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===a.$tag$&&e.$elm$){Z(e.$elm$,false)}}}return c};var Z=function(e,r){d.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){te(a).insertBefore(a,re(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(r){Z(a,r)}}d.$flags$&=~1};var ee=function(e,r,t,n,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=o;++a){if(n[a]){i=Y(null,t,a,e);if(i){n[a].$elm$=i;s.insertBefore(i,re(r))}}}};var re=function(e){return e&&e["s-ol"]||e};var te=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ne=function(e,r){var t=r.$elm$=e.$elm$;var n=r.$children$;var a;if(r.$text$===null){if(n!==null){ee(t,null,r,n,0,n.length-1)}}else if(a=t["s-cr"]){a.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var ae=function(e){var r=e.childNodes;var t;var n;var a;var o;var s;var i;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(o=0;o<a;o++){if(r[o]["s-hn"]!==t["s-hn"]){i=r[o].nodeType;if(s!==""){if(i===1&&s===r[o].getAttribute("slot")){t.hidden=true;break}}else{if(i===1||i===3&&r[o].textContent.trim()!==""){t.hidden=true;break}}}}}ae(t)}}};var oe=[];var se=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var o=0;var s;var i;var l;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(i=s["s-cr"])){l=i.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){i=l[a];if(!i["s-cn"]&&!i["s-nr"]&&i["s-hn"]!==s["s-hn"]){o=i.nodeType;if((o===3||o===8)&&f===""||o===1&&i.getAttribute("slot")===null&&f===""||o===1&&i.getAttribute("slot")===f){if(!oe.some((function(e){return e.$nodeToRelocate$===i}))){c=true;i["s-sn"]=f;oe.push({$slotRefNode$:s,$nodeToRelocate$:i})}}}}}if(s.nodeType===1){se(s)}}};var ie=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||J(null,null);var o=X(n)?n:D(null,null,n);o.$tag$=null;o.$flags$|=4;r.$vnode$=o;o.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{i=e["s-cr"];f=h&&(t.$flags$&1)!==0;u=c=false}ne(a,o);{if(u){se(o.$elm$);for(var $=0;$<oe.length;$++){var p=oe[$];if(!p.$nodeToRelocate$["s-ol"]){var g=v.createTextNode("");g["s-nr"]=p.$nodeToRelocate$;p.$nodeToRelocate$.parentNode.insertBefore(p.$nodeToRelocate$["s-ol"]=g,p.$nodeToRelocate$)}}d.$flags$|=1;for(var $=0;$<oe.length;$++){var p=oe[$];var m=p.$slotRefNode$.parentNode;var y=p.$slotRefNode$.nextSibling;var g=p.$nodeToRelocate$["s-ol"];while(g=g.previousSibling){var w=g["s-nr"];if(w&&w["s-sn"]===p.$nodeToRelocate$["s-sn"]&&m===w.parentNode){w=w.nextSibling;if(!w||!w["s-nr"]){y=w;break}}}if(!y&&m!==p.$nodeToRelocate$.parentNode||p.$nodeToRelocate$.nextSibling!==y){if(p.$nodeToRelocate$!==y){m.insertBefore(p.$nodeToRelocate$,y)}}}d.$flags$&=~1}if(c){ae(o.$elm$)}oe.length=0}};var le=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var fe=function(e,r,t,n){if(r.$flags$&4){r.$flags$|=512;return}var a=P("scheduleUpdate",t.$tagName$);var o=r.$ancestorComponent$;var s=r.$lazyInstance$;var i=function(){return ce(e,r,t,s,n)};le(r,o);var l;a();return ve(l,(function(){return U(i)}))};var ce=function(e,r,t,n,a){var o=P("update",t.$tagName$);var s=e["s-rc"];if(a){Q(e,t,r.$modeName$)}var i=P("render",t.$tagName$);{{try{ie(e,r,t,n.render())}catch(c){b(c)}}}if(d.$cssShim$){d.$cssShim$.updateHost(e)}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}i();o();{var l=e["s-p"];var f=function(){return ue(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var ue=function(e,r,t){var n=P("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}n();{r.$onReadyResolve$(e);if(!a){$e()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){A((function(){return fe(e,r,t,false)}))}r.$flags$&=~(4|512)}};var $e=function(e){{v.documentElement.classList.add(z)}{d.$flags$|=2}};var ve=function(e,r){return e&&e.then?e.then(r):r()};var de=function(e,r,t){return e};var he=function(e,n,a,o,s){return __awaiter(t,void 0,void 0,(function(){var t,o,i,l,f,c,u;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=S(a);if(!s.then)return[3,2];t=B();return[4,s];case 1:s=$.sent();t();$.label=2;case 2:o=P("createInstance",a.$tagName$);try{new s(n)}catch(v){b(v)}o();i=V(a.$tagName$);if(!(!_.has(i)&&s.style))return[3,5];l=P("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,i,false)}))];case 3:f=$.sent();$.label=4;case 4:W(i,f,!!(a.$flags$&1));l();$.label=5;case 5:c=n.$ancestorComponent$;u=function(){return fe(e,n,a,true)};if(c&&c["s-rc"]){c["s-rc"].push(u)}else{u()}return[2]}}))}))};var pe=function(e,r){if((d.$flags$&1)===0){var t=P("connectedCallback",r.$tagName$);var n=m(e);if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(r.$flags$&4||r.$flags$&8){ge(e)}}{var o=e;while(o=o.parentNode||o.host){if(o["s-p"]){le(n,n.$ancestorComponent$=o);break}}}{A((function(){return he(e,n,r)}))}}t()}};var ge=function(e){var r="";var t=e["s-cr"]=v.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var me=function(e){if((d.$flags$&1)===0){var r=m(e);if(d.$cssShim$){d.$cssShim$.removeHost(e)}}};var ye=e("b",(function(e,r){if(r===void 0){r={}}var t=P();var n=[];var a=r.exclude||[];var o=v.head;var s=$.customElements;var i=o.querySelector("meta[charset]");var l=v.createElement("style");var f=[];var c;var u=true;Object.assign(d,r);d.$resourcesUrl$=new URL(r.resourcesUrl||"./",v.baseURI).href;if(r.syncQueue){d.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};if(!h&&t.$flags$&1){t.$flags$|=8}var o=t.$tagName$;var i=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;w(r);if(t.$flags$&1){if(h){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(u){f.push(this)}else{d.jmp((function(){return pe(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return me(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){};r.prototype.componentOnReady=function(){return m(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(o)&&!s.get(o)){n.push(o);s.define(o,de(i))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");o.insertBefore(l,i?i.nextSibling:o.firstChild);u=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{d.jmp((function(){return c=setTimeout($e,30,"timeout")}))}t()}))}}}));