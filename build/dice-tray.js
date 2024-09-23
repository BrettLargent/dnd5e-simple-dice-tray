!function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,e,n){t.$$.on_destroy.push(s(e,n))}function u(t,e,n){return t.set(n),e}const d="undefined"!=typeof window;let a=d?()=>window.performance.now():()=>Date.now(),f=d?t=>requestAnimationFrame(t):t;const m=new Set;function h(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&f(h)}function p(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=b("style");return function(t,e){p(t.head||t,e)}(g(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}const A=new Set;let D,S=0;function C(t,e,n,o,r,i,c,s=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*i(t);u+=100*t+`%{${c(o,1-o)}}\n`}const d=u+`100% {${c(n,1-n)}}\n}`,a=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${s}`,f=g(t);A.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=v(t).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[a]||(h[a]=!0,m.insertRule(`@keyframes ${a} ${d}`,m.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${o}ms linear ${r}ms 1 both`,S+=1,a}function N(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||f((()=>{S||(A.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),A.clear())})))}function F(t){D=t}function R(){if(!D)throw new Error("Function called outside component initialization");return D}const L=[],B=[],V=[],O=[],T=Promise.resolve();let j=!1;function q(){j||(j=!0,T.then(W))}function H(t){V.push(t)}let P=!1;const Y=new Set;function W(){if(!P){P=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];F(e),I(e.$$)}for(F(null),L.length=0;B.length;)B.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];Y.has(e)||(Y.add(e),e())}V.length=0}while(L.length);for(;O.length;)O.pop()();j=!1,P=!1,Y.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let K;function U(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const G=new Set;let J;function Q(){J={r:0,c:[],p:J}}function X(){J.r||r(J.c),J=J.p}function Z(t,e){t&&t.i&&(G.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const et={duration:0};function nt(n,o,c,s){let l=o(n,c),u=s?0:1,d=null,p=null,g=null;function v(){g&&N(n,g)}function $(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:i=0,duration:c=300,easing:s=e,tick:y=t,css:b}=l||et,w={start:a()+i,b:o};o||(w.group=J,J.r+=1),d||p?p=w:(b&&(v(),g=C(n,u,o,c,i,s,b)),o&&y(0,1),d=$(w,c),H((()=>U(n,o,"start"))),function(t){let e;0===m.size&&f(h),new Promise((n=>{m.add(e={c:t,f:n})}))}((t=>{if(p&&t>p.start&&(d=$(p,c),p=null,U(n,d.b,"start"),b&&(v(),g=C(n,u,d.b,d.duration,0,s,l.css))),d)if(t>=d.end)y(u=d.b,1-u),U(n,d.b,"end"),p||(d.b?v():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*s(e/d.duration),y(u,1-u)}return!(!d&&!p)})))}return{run(t){i(l)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{l=l(),y(t)})):y(t)},end(){v(),d=p=null}}}function ot(t,e,o,c){const{fragment:s,on_mount:l,on_destroy:u,after_update:d}=t.$$;s&&s.m(e,o),c||H((()=>{const e=l.map(n).filter(i);u?u.push(...e):r(e),t.$$.on_mount=[]})),d.forEach(H)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(e,n,i,c,s,l,u,d=[-1]){const a=D;F(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||a.$$.root};u&&u(f.root);let m=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&function(t,e){-1===t.$$.dirty[0]&&(L.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&Z(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),W()}F(a)}class ct{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function st(t){const e=t-1;return e*e*e+1}function lt(t,{delay:e=0,duration:n=400,easing:o=st}={}){const r=getComputedStyle(t),i=+r.opacity,c=parseFloat(r.height),s=parseFloat(r.paddingTop),l=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),d=parseFloat(r.marginBottom),a=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*c}px;padding-top: ${t*s}px;padding-bottom: ${t*l}px;margin-top: ${t*u}px;margin-bottom: ${t*d}px;border-top-width: ${t*a}px;border-bottom-width: ${t*f}px;`}}const ut=[];function dt(e,n=t){let o;const r=new Set;function i(t){if(c(e,t)&&(e=t,o)){const t=!ut.length;for(const t of r)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const l=[c,s];return r.add(l),1===r.size&&(o=n(i)||t),c(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}const at=function(){const{subscribe:t,update:e}=dt({dice:{},mod:0});return{subscribe:t,incrementDie:t=>e((e=>{const n=e.dice;return n[t]?(n[t]++,e):(n[t]=1,e)})),decrementDie:t=>e((e=>{const n=e.dice,o=n[t];return o&&1!==o?(n[t]--,e):(delete n[t],e)})),incrementMod:()=>e((t=>(t.mod++,t))),decrementMod:()=>e((t=>(t.mod--,t))),setMod:t=>e((e=>(e.mod=t?Number.parseInt(t,10):0,e))),clear:()=>e((()=>({dice:{},mod:0})))}}(),ft=dt(""),mt=function(e,n,o){const c=!Array.isArray(e),l=c?[e]:e,u=n.length<2;return{subscribe:dt(o,(e=>{let o=!1;const d=[];let a=0,f=t;const m=()=>{if(a)return;f();const o=n(c?d[0]:d,e);u?e(o):f=i(o)?o:t},h=l.map(((t,e)=>s(t,(t=>{d[e]=t,a&=~(1<<e),o&&m()}),(()=>{a|=1<<e}))));return o=!0,m(),function(){r(h),f()}})).subscribe}}([at,ft],(([t,e])=>{const n=Object.entries(t.dice);let o=!0,r="";if(n.length){let i="/r";for(const[t,c]of n)i+=` ${r}${c}d${t}${e}`,o&&(r="+ ",o=!1);if(t.mod)if(t.mod<0){i+=` - ${t.mod.toString().slice(1)}`}else i+=` + ${t.mod}`;return i}return""}));function ht(e){let n,o,i,c,s,l,u;return{c(){n=b("button"),o=w("svg"),i=w("use"),M(i,"xlink:href",c="modules/foundry-vtt-dice-tray/assets/dice-sprite.svg#d"+e[0]),z(o,"class","die-svg svelte-16i6ix9"),z(o,"width","20"),z(o,"height","20"),z(n,"class",s="dice-tray-btn d"+e[0]+" svelte-16i6ix9")},m(t,r){$(t,n,r),p(n,o),p(o,i),l||(u=[x(n,"click",e[3]),x(n,"contextmenu",E(e[4])),x(n,"keyup",e[1]),x(n,"wheel",e[2])],l=!0)},p(t,[e]){1&e&&c!==(c="modules/foundry-vtt-dice-tray/assets/dice-sprite.svg#d"+t[0])&&M(i,"xlink:href",c),1&e&&s!==(s="dice-tray-btn d"+t[0]+" svelte-16i6ix9")&&z(n,"class",s)},i:t,o:t,d(t){t&&y(n),l=!1,r(u)}}}function pt(t,e,n){let{die:o}=e;return t.$$set=t=>{"die"in t&&n(0,o=t.die)},[o,function({key:t}){({Delete:1,Backspace:1})[t]&&at.decrementDie(o)},function({deltaY:t}){t<0?at.incrementDie(o):at.decrementDie(o)},()=>at.incrementDie(o),()=>at.decrementDie(o)]}class gt extends ct{constructor(t){super(),it(this,t,pt,ht,c,{die:0})}}function vt(t,e,n){const o=t.slice();return o[15]=e[n],o}function $t(t){let e,n,o,i,c,s,l,u,d,a,f,m,h,g,v,w,M,A,D,S,C,N,F,R,L,B,V,O,T=t[3],j=[];for(let e=0;e<T.length;e+=1)j[e]=yt(vt(t,T,e));const q=t=>tt(j[t],1,1,(()=>{j[t]=null}));return{c(){e=b("div"),n=b("div");for(let t=0;t<j.length;t+=1)j[t].c();o=k(),i=b("div"),c=b("button"),c.textContent="Clear",s=k(),l=b("div"),u=b("button"),d=_("Adv"),f=k(),m=b("button"),h=_("dAdv"),v=k(),w=b("div"),M=b("input"),D=k(),S=b("div"),S.innerHTML='<i data-feather="chevron-up"></i>',C=k(),N=b("div"),N.innerHTML='<i data-feather="chevron-down"></i>',F=k(),R=b("button"),R.textContent="Roll",z(n,"id","dice-btn-row"),z(n,"class","svelte-16wzgtt"),z(c,"class","dice-tray-btn svelte-16wzgtt"),z(u,"class",a="dice-tray-btn "+("kh"===t[2]?"active":"")+" svelte-16wzgtt"),z(m,"class",g="dice-tray-btn "+("kl"===t[2]?"active":"")+" svelte-16wzgtt"),z(l,"class","dice-tray-kh-kl-container svelte-16wzgtt"),z(M,"type","number"),z(M,"name","dice-tray-roll-mod"),z(M,"id","dice-tray-roll-mod"),M.value=A=t[1].mod,z(M,"class","svelte-16wzgtt"),z(S,"class","dice-tray-roll-mod-icon chevron-up svelte-16wzgtt"),z(N,"class","dice-tray-roll-mod-icon chevron-down svelte-16wzgtt"),z(w,"class","dice-tray-input-container dice-tray-btn svelte-16wzgtt"),z(R,"class","dice-tray-btn svelte-16wzgtt"),z(i,"id","dice-actions-row"),z(i,"class","svelte-16wzgtt"),z(e,"id","dice-tray-container"),z(e,"class","svelte-16wzgtt")},m(r,a){$(r,e,a),p(e,n);for(let t=0;t<j.length;t+=1)j[t].m(n,null);p(e,o),p(e,i),p(i,c),p(i,s),p(i,l),p(l,u),p(u,d),p(l,f),p(l,m),p(m,h),p(i,v),p(i,w),p(w,M),p(w,D),p(w,S),p(w,C),p(w,N),p(i,F),p(i,R),B=!0,V||(O=[x(c,"click",at.clear),x(u,"click",t[11]),x(m,"click",t[12]),x(M,"keydown",t[5]),x(M,"input",t[4]),x(S,"click",at.incrementMod),x(N,"click",at.decrementMod),x(w,"wheel",E(t[6])),x(R,"click",t[8])],V=!0)},p(t,e){if(8&e){let o;for(T=t[3],o=0;o<T.length;o+=1){const r=vt(t,T,o);j[o]?(j[o].p(r,e),Z(j[o],1)):(j[o]=yt(r),j[o].c(),Z(j[o],1),j[o].m(n,null))}for(Q(),o=T.length;o<j.length;o+=1)q(o);X()}(!B||4&e&&a!==(a="dice-tray-btn "+("kh"===t[2]?"active":"")+" svelte-16wzgtt"))&&z(u,"class",a),(!B||4&e&&g!==(g="dice-tray-btn "+("kl"===t[2]?"active":"")+" svelte-16wzgtt"))&&z(m,"class",g),(!B||2&e&&A!==(A=t[1].mod))&&(M.value=A)},i(t){if(!B){for(let t=0;t<T.length;t+=1)Z(j[t]);H((()=>{L||(L=nt(e,lt,{},!0)),L.run(1)})),B=!0}},o(t){j=j.filter(Boolean);for(let t=0;t<j.length;t+=1)tt(j[t]);L||(L=nt(e,lt,{},!1)),L.run(0),B=!1},d(t){t&&y(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(j,t),t&&L&&L.end(),V=!1,r(O)}}}function yt(e){let n,o;return n=new gt({props:{die:e[15]}}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){ot(n,t,e),o=!0},p:t,i(t){o||(Z(n.$$.fragment,t),o=!0)},o(t){tt(n.$$.fragment,t),o=!1},d(t){rt(n,t)}}}function bt(t){let e,n,o=t[0]&&$t(t);return{c(){o&&o.c(),e=_("")},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&Z(o,1)):(o=$t(t),o.c(),Z(o,1),o.m(e.parentNode,e)):o&&(Q(),tt(o,1,1,(()=>{o=null})),X())},i(t){n||(Z(o),n=!0)},o(t){tt(o),n=!1},d(t){o&&o.d(t),t&&y(e)}}}function wt(t,e,n){let o,r,i;l(t,mt,(t=>n(10,o=t))),l(t,at,(t=>n(1,r=t))),l(t,ft,(t=>n(2,i=t)));let{isVisible:c=!1}=e;const s=new KeyboardEvent("keydown",{code:"Enter",key:"Enter"});let d;function a(t){u(ft,i=i!==t?t:"",i)}async function f(){n(0,c=!c),c&&(await(q(),T),feather.replace())}var m;m=()=>{n(9,d=document.querySelector("#chat-message")),document.querySelector(".chat-control-icon").addEventListener("click",f),feather.replace()},R().$$.on_mount.push(m),function(t){R().$$.on_destroy.push(t)}((()=>{document.querySelector(".chat-control-icon").removeEventListener("click",f)}));return t.$$set=t=>{"isVisible"in t&&n(0,c=t.isVisible)},t.$$.update=()=>{2&t.$$.dirty&&(r.mod>99?at.setMod(99):r.mod<-99&&at.setMod(-99)),1536&t.$$.dirty&&d&&n(9,d.value=o,d)},[c,r,i,[4,6,8,10,12,20,100],function(t){const e=t.target.value;return e>99?(at.setMod(99),void(t.target.value=99)):e<-99?(at.setMod(-99),void(t.target.value=-99)):void at.setMod(e)},function(t){return{ArrowLeft:1,ArrowDown:1}[t.key]?(t.preventDefault(),void at.decrementMod()):{ArrowRight:1,ArrowUp:1}[t.key]?(t.preventDefault(),void at.incrementMod()):void 0},function({deltaY:t}){t<0?at.incrementMod():at.decrementMod()},a,function(){d.dispatchEvent(s),ft.update((()=>"")),at.clear()},d,o,()=>a("kh"),()=>a("kl")]}class _t extends ct{constructor(t){super(),it(this,t,wt,bt,c,{isVisible:0})}}Hooks.once("init",(()=>{game.settings.register("foundry-vtt-dice-tray","startVisible",{name:"Render page with dice tray visible",hint:"Choose whether to start with dice tray visible",scope:"client",config:!0,type:Boolean,choices:{true:"Yes",false:"No"},default:!0}),Hooks.once("renderChatLog",((t,e,n)=>{e.find("#chat-form").after('<div id="foundry-vtt-dice-tray"></div>');const o=e.find("#foundry-vtt-dice-tray")[0];new _t({target:o,props:{isVisible:game.settings.get("foundry-vtt-dice-tray","startVisible")}})}))}))}();
//# sourceMappingURL=dice-tray.js.map
