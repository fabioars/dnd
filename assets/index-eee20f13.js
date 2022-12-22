(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();function N(){}function Wa(a,e){for(const o in e)a[o]=e[o];return a}function _a(a){return a()}function za(){return Object.create(null)}function G(a){a.forEach(_a)}function Ua(a){return typeof a=="function"}function T(a,e){return a!=a?e==e:a!==e||a&&typeof a=="object"||typeof a=="function"}let da;function W(a,e){return da||(da=document.createElement("a")),da.href=e,a===da.href}function Ka(a){return Object.keys(a).length===0}function Fa(a,e,o,r){if(a){const s=Ia(a,e,o,r);return a[0](s)}}function Ia(a,e,o,r){return a[1]&&r?Wa(o.ctx.slice(),a[1](r(e))):o.ctx}function Na(a,e,o,r){if(a[2]&&r){const s=a[2](r(o));if(e.dirty===void 0)return s;if(typeof s=="object"){const t=[],n=Math.max(e.dirty.length,s.length);for(let d=0;d<n;d+=1)t[d]=e.dirty[d]|s[d];return t}return e.dirty|s}return e.dirty}function ya(a,e,o,r,s,t){if(s){const n=Ia(e,o,r,t);a.p(n,s)}}function Ta(a){if(a.ctx.length>32){const e=[],o=a.ctx.length/32;for(let r=0;r<o;r++)e[r]=-1;return e}return-1}function p(a,e){a.appendChild(e)}function D(a,e,o){a.insertBefore(e,o||null)}function P(a){a.parentNode&&a.parentNode.removeChild(a)}function ra(a,e){for(let o=0;o<a.length;o+=1)a[o]&&a[o].d(e)}function f(a){return document.createElement(a)}function Xa(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function B(a){return document.createTextNode(a)}function x(){return B(" ")}function ba(){return B("")}function M(a,e,o,r){return a.addEventListener(e,o,r),()=>a.removeEventListener(e,o,r)}function K(a){return function(e){return e.preventDefault(),a.call(this,e)}}function u(a,e,o){o==null?a.removeAttribute(e):a.getAttribute(e)!==o&&a.setAttribute(e,o)}function w(a){return a===""?null:+a}function Za(a){return Array.from(a.childNodes)}function X(a,e){e=""+e,a.wholeText!==e&&(a.data=e)}function O(a,e){a.value=e??""}function _(a,e,o){a.classList[o?"add":"remove"](e)}function Ya(a,e,{bubbles:o=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(a,o,r,e),s}class ae{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,o,r=null){this.e||(this.is_svg?this.e=Xa(o.nodeName):this.e=f(o.nodeName),this.t=o,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let o=0;o<this.n.length;o+=1)D(this.t,this.n[o],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(P)}}let sa;function oa(a){sa=a}function ee(){if(!sa)throw new Error("Function called outside component initialization");return sa}function ka(){const a=ee();return(e,o,{cancelable:r=!1}={})=>{const s=a.$$.callbacks[e];if(s){const t=Ya(e,o,{cancelable:r});return s.slice().forEach(n=>{n.call(a,t)}),!t.defaultPrevented}return!0}}const ea=[],ta=[],pa=[],va=[],oe=Promise.resolve();let fa=!1;function re(){fa||(fa=!0,oe.then(Ra))}function qa(a){pa.push(a)}function Aa(a){va.push(a)}const ga=new Set;let ia=0;function Ra(){const a=sa;do{for(;ia<ea.length;){const e=ea[ia];ia++,oa(e),se(e.$$)}for(oa(null),ea.length=0,ia=0;ta.length;)ta.pop()();for(let e=0;e<pa.length;e+=1){const o=pa[e];ga.has(o)||(ga.add(o),o())}pa.length=0}while(ea.length);for(;va.length;)va.pop()();fa=!1,ga.clear(),oa(a)}function se(a){if(a.fragment!==null){a.update(),G(a.before_update);const e=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,e),a.after_update.forEach(qa)}}const la=new Set;let H;function Qa(){H={r:0,c:[],p:H}}function $a(){H.r||G(H.c),H=H.p}function L(a,e){a&&a.i&&(la.delete(a),a.i(e))}function J(a,e,o,r){if(a&&a.o){if(la.has(a))return;la.add(a),H.c.push(()=>{la.delete(a),r&&(o&&a.d(1),r())}),a.o(e)}else r&&r()}function ja(a,e,o,r){const s=a.$$.props[e];s!==void 0&&(a.$$.bound[s]=o,r===void 0&&o(a.$$.ctx[s]))}function I(a){a&&a.c()}function U(a,e,o,r){const{fragment:s,after_update:t}=a.$$;s&&s.m(e,o),r||qa(()=>{const n=a.$$.on_mount.map(_a).filter(Ua);a.$$.on_destroy?a.$$.on_destroy.push(...n):G(n),a.$$.on_mount=[]}),t.forEach(qa)}function F(a,e){const o=a.$$;o.fragment!==null&&(G(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function te(a,e){a.$$.dirty[0]===-1&&(ea.push(a),re(),a.$$.dirty.fill(0)),a.$$.dirty[e/31|0]|=1<<e%31}function k(a,e,o,r,s,t,n,d=[-1]){const l=sa;oa(a);const i=a.$$={fragment:null,ctx:[],props:t,update:N,not_equal:s,bound:za(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:za(),dirty:d,skip_bound:!1,root:e.target||l.$$.root};n&&n(i.root);let z=!1;if(i.ctx=o?o(a,e.props||{},(h,S,...q)=>{const C=q.length?q[0]:S;return i.ctx&&s(i.ctx[h],i.ctx[h]=C)&&(!i.skip_bound&&i.bound[h]&&i.bound[h](C),z&&te(a,h)),S}):[],i.update(),z=!0,G(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const h=Za(e.target);i.fragment&&i.fragment.l(h),h.forEach(P)}else i.fragment&&i.fragment.c();e.intro&&L(a.$$.fragment),U(a,e.target,e.anchor,e.customElement),Ra()}oa(l)}class R{$destroy(){F(this,1),this.$destroy=N}$on(e,o){if(!Ua(o))return N;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(o),()=>{const s=r.indexOf(o);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Ka(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ne(a){let e;return{c(){e=B("Hello World")},m(o,r){D(o,e,r)},d(o){o&&P(e)}}}function de(a){let e,o,r,s;const t=a[1].default,n=Fa(t,a,a[0],null),d=n||ne();return{c(){e=f("header"),o=f("div"),r=f("h1"),d&&d.c(),u(r,"class","header__title svelte-liwc8f"),u(o,"class","header__container svelte-liwc8f"),u(e,"class","header svelte-liwc8f")},m(l,i){D(l,e,i),p(e,o),p(o,r),d&&d.m(r,null),s=!0},p(l,[i]){n&&n.p&&(!s||i&1)&&ya(n,t,l,l[0],s?Na(t,l[0],i,null):Ta(l[0]),null)},i(l){s||(L(d,l),s=!0)},o(l){J(d,l),s=!1},d(l){l&&P(e),d&&d.d(l)}}}function ie(a,e,o){let{$$slots:r={},$$scope:s}=e;return a.$$set=t=>{"$$scope"in t&&o(0,s=t.$$scope)},[s,r]}class ue extends R{constructor(e){super(),k(this,e,ie,de,T,{})}}function Ca(a,e,o){const r=a.slice();return r[3]=e[o],r}function Sa(a){let e,o,r=a[3].label+"",s,t,n,d;function l(){return a[2](a[3])}return{c(){e=f("li"),o=f("a"),s=B(r),t=x(),u(o,"href","#"),u(o,"class","nav__link svelte-1n62zsf"),u(e,"class","nav__item svelte-1n62zsf"),_(e,"nav__item--active",a[3].slug==a[0])},m(i,z){D(i,e,z),p(e,o),p(o,s),p(e,t),n||(d=M(o,"click",K(l)),n=!0)},p(i,z){a=i,z&2&&r!==(r=a[3].label+"")&&X(s,r),z&3&&_(e,"nav__item--active",a[3].slug==a[0])},d(i){i&&P(e),n=!1,d()}}}function me(a){let e,o,r=a[1],s=[];for(let t=0;t<r.length;t+=1)s[t]=Sa(Ca(a,r,t));return{c(){e=f("nav"),o=f("ul");for(let t=0;t<s.length;t+=1)s[t].c();u(o,"class","nav__list svelte-1n62zsf"),u(e,"class","nav svelte-1n62zsf")},m(t,n){D(t,e,n),p(e,o);for(let d=0;d<s.length;d+=1)s[d].m(o,null)},p(t,[n]){if(n&3){r=t[1];let d;for(d=0;d<r.length;d+=1){const l=Ca(t,r,d);s[d]?s[d].p(l,n):(s[d]=Sa(l),s[d].c(),s[d].m(o,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=r.length}},i:N,o:N,d(t){t&&P(e),ra(s,t)}}}function ce(a,e,o){let{value:r}=e,{items:s}=e;const t=n=>o(0,r=n.slug);return a.$$set=n=>{"value"in n&&o(0,r=n.value),"items"in n&&o(1,s=n.items)},[r,s,t]}class pe extends R{constructor(e){super(),k(this,e,ce,me,T,{value:0,items:1})}}function le(a){let e,o,r;const s=a[2].default,t=Fa(s,a,a[1],null);return{c(){e=f("ul"),t&&t.c(),u(e,"class",o="list "+a[0]+" svelte-t0otg3")},m(n,d){D(n,e,d),t&&t.m(e,null),r=!0},p(n,[d]){t&&t.p&&(!r||d&2)&&ya(t,s,n,n[1],r?Na(s,n[1],d,null):Ta(n[1]),null),(!r||d&1&&o!==(o="list "+n[0]+" svelte-t0otg3"))&&u(e,"class",o)},i(n){r||(L(t,n),r=!0)},o(n){J(t,n),r=!1},d(n){n&&P(e),t&&t.d(n)}}}function ge(a,e,o){let{$$slots:r={},$$scope:s}=e,{className:t=""}=e;return a.$$set=n=>{"className"in n&&o(0,t=n.className),"$$scope"in n&&o(1,s=n.$$scope)},[t,s,r]}class Ba extends R{constructor(e){super(),k(this,e,ge,le,T,{className:0})}}const ve="/dnd/assets/x-25909307.svg";function Ea(a,e,o){const r=a.slice();return r[2]=e[o],r}function Va(a){let e,o=a[0][a[2]]+"",r;return{c(){e=new ae(!1),r=ba(),e.a=r},m(s,t){e.m(o,s,t),D(s,r,t)},p(s,t){t&1&&o!==(o=s[0][s[2]]+"")&&e.p(o)},d(s){s&&P(r),s&&e.d()}}}function fe(a){let e,o,r,s,t,n,d,l,i,z=a[0].name+"",h,S,q,C,b=Object.keys(a[0]),A=[];for(let v=0;v<b.length;v+=1)A[v]=Va(Ea(a,b,v));return{c(){e=f("div"),o=f("div"),r=x(),s=f("div"),t=f("button"),n=f("img"),l=x(),i=f("h2"),h=B(z),S=x();for(let v=0;v<A.length;v+=1)A[v].c();u(o,"class","overlay svelte-1wu5zh3"),W(n.src,d=ve)||u(n,"src",d),u(n,"alt","close"),u(t,"class","close svelte-1wu5zh3"),u(i,"class","title svelte-1wu5zh3"),u(s,"class","container svelte-1wu5zh3"),u(e,"class","modal svelte-1wu5zh3"),_(e,"active",a[0].isActive)},m(v,E){D(v,e,E),p(e,o),p(e,r),p(e,s),p(s,t),p(t,n),p(s,l),p(s,i),p(i,h),p(s,S);for(let m=0;m<A.length;m+=1)A[m].m(s,null);q||(C=[M(o,"click",K(a[1])),M(t,"click",K(a[1]))],q=!0)},p(v,[E]){if(E&1&&z!==(z=v[0].name+"")&&X(h,z),E&1){b=Object.keys(v[0]);let m;for(m=0;m<b.length;m+=1){const g=Ea(v,b,m);A[m]?A[m].p(g,E):(A[m]=Va(g),A[m].c(),A[m].m(s,null))}for(;m<A.length;m+=1)A[m].d(1);A.length=b.length}E&1&&_(e,"active",v[0].isActive)},i:N,o:N,d(v){v&&P(e),ra(A,v),q=!1,G(C)}}}function qe(a,e,o){let{entry:r}=e;function s(){o(0,r.isActive=!1,r)}return a.$$set=t=>{"entry"in t&&o(0,r=t.entry)},[r,s]}class he extends R{constructor(e){super(),k(this,e,qe,fe,T,{entry:0})}}const be="/dnd/assets/search-3252ceb1.svg";function xa(a,e,o){const r=a.slice();return r[6]=e[o],r}function Pa(a,e,o){const r=a.slice();return r[6]=e[o],r[9]=e,r[10]=o,r}function Da(a){let e,o,r,s=a[6].name+"",t,n,d;function l(){return a[5](a[6],a[9],a[10])}return{c(){e=f("li"),o=f("a"),r=f("span"),t=B(s),u(r,"class","init__text"),u(o,"href","#"),u(o,"class","init__content svelte-12ax5ri"),u(e,"class","init__item svelte-12ax5ri")},m(i,z){D(i,e,z),p(e,o),p(o,r),p(r,t),n||(d=M(o,"click",K(l)),n=!0)},p(i,z){a=i,z&4&&s!==(s=a[6].name+"")&&X(t,s)},d(i){i&&P(e),n=!1,d()}}}function Ma(a){let e,o;return e=new he({props:{entry:a[6]}}),{c(){I(e.$$.fragment)},m(r,s){U(e,r,s),o=!0},p(r,s){const t={};s&4&&(t.entry=r[6]),e.$set(t)},i(r){o||(L(e.$$.fragment,r),o=!0)},o(r){J(e.$$.fragment,r),o=!1},d(r){F(e,r)}}}function Ae(a){let e,o,r,s,t,n,d,l,i,z,h,S,q,C=a[2],b=[];for(let m=0;m<C.length;m+=1)b[m]=Da(Pa(a,C,m));let A=a[2],v=[];for(let m=0;m<A.length;m+=1)v[m]=Ma(xa(a,A,m));const E=m=>J(v[m],1,1,()=>{v[m]=null});return{c(){e=f("li"),o=f("form"),r=f("input"),s=x(),t=f("button"),n=f("img"),l=x();for(let m=0;m<b.length;m+=1)b[m].c();i=x();for(let m=0;m<v.length;m+=1)v[m].c();z=ba(),u(r,"type","search"),u(r,"class","input svelte-12ax5ri"),u(r,"placeholder",a[0]),W(n.src,d=be)||u(n,"src",d),u(n,"alt","add user"),u(n,"class","svelte-12ax5ri"),u(t,"class","button button--icon svelte-12ax5ri"),t.disabled=!0,u(o,"class","init__form svelte-12ax5ri"),u(e,"class","init__item svelte-12ax5ri")},m(m,g){D(m,e,g),p(e,o),p(o,r),O(r,a[1]),p(o,s),p(o,t),p(t,n),D(m,l,g);for(let c=0;c<b.length;c+=1)b[c].m(m,g);D(m,i,g);for(let c=0;c<v.length;c+=1)v[c].m(m,g);D(m,z,g),h=!0,S||(q=[M(r,"input",a[4]),M(o,"submit",K(ze))],S=!0)},p(m,g){if((!h||g&1)&&u(r,"placeholder",m[0]),g&2&&O(r,m[1]),g&4){C=m[2];let c;for(c=0;c<C.length;c+=1){const j=Pa(m,C,c);b[c]?b[c].p(j,g):(b[c]=Da(j),b[c].c(),b[c].m(i.parentNode,i))}for(;c<b.length;c+=1)b[c].d(1);b.length=C.length}if(g&4){A=m[2];let c;for(c=0;c<A.length;c+=1){const j=xa(m,A,c);v[c]?(v[c].p(j,g),L(v[c],1)):(v[c]=Ma(j),v[c].c(),L(v[c],1),v[c].m(z.parentNode,z))}for(Qa(),c=A.length;c<v.length;c+=1)E(c);$a()}},i(m){if(!h){for(let g=0;g<A.length;g+=1)L(v[g]);h=!0}},o(m){v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)J(v[g]);h=!1},d(m){m&&P(e),m&&P(l),ra(b,m),m&&P(i),ra(v,m),m&&P(z),S=!1,G(q)}}}function je(a){let e,o;return e=new Ba({props:{className:"db",$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},m(r,s){U(e,r,s),o=!0},p(r,[s]){const t={};s&2055&&(t.$$scope={dirty:s,ctx:r}),e.$set(t)},i(r){o||(L(e.$$.fragment,r),o=!0)},o(r){J(e.$$.fragment,r),o=!1},d(r){F(e,r)}}}const ze=()=>{};function Ce(a,e,o){let r,{data:s}=e,{label:t}=e,n="";function d(){n=this.value,o(1,n)}const l=(i,z,h)=>o(2,z[h].isActive=!0,r);return a.$$set=i=>{"data"in i&&o(3,s=i.data),"label"in i&&o(0,t=i.label)},a.$$.update=()=>{a.$$.dirty&10&&o(2,r=Object.keys(s.entries).map(i=>({...s.entries[i],isModalOpen:!1})).filter(i=>i.name.toLowerCase().includes(n.toLowerCase())))},[t,n,r,s,d,l]}class ua extends R{constructor(e){super(),k(this,e,Ce,je,T,{data:3,label:0})}}const Se="/dnd/assets/user-plus-3c6aeeff.svg",Ee="/dnd/assets/user-minus-e4725f11.svg";function La(a,e,o){const r=a.slice();return r[18]=e[o],r[19]=e,r[20]=o,r}function Oa(a){let e,o,r,s=a[18].iniciative.sum+"",t,n,d,l,i,z,h,S,q,C,b,A,v,E,m,g,c,j,Q,Z;function V(){a[12].call(d,a[19],a[20])}function y(){a[13].call(i,a[19],a[20])}function na(){return a[14](a[20])}function Y(){a[15].call(A,a[19],a[20])}function wa(){a[16].call(m,a[19],a[20])}function Ha(){a[17].call(c,a[19],a[20])}return{c(){e=f("li"),o=f("form"),r=f("span"),t=B(s),n=x(),d=f("input"),l=x(),i=f("input"),z=x(),h=f("button"),S=f("img"),C=x(),b=f("div"),A=f("input"),E=x(),m=f("input"),g=x(),c=f("input"),j=x(),u(r,"class","iniciative svelte-1tz6fzi"),u(d,"type","text"),u(d,"class","input input--clear svelte-1tz6fzi"),u(d,"placeholder","Personagem"),u(i,"type","text"),u(i,"class","input input--clear input--dice svelte-1tz6fzi"),u(i,"placeholder","1d20"),W(S.src,q=Ee)||u(S,"src",q),u(S,"alt","remove user"),u(h,"class","button button--icon button--secondary"),u(h,"type","button"),u(o,"class","init__form svelte-1tz6fzi"),u(A,"type","range"),u(A,"name","HP"),u(A,"min","0"),u(A,"max",v=a[18].maxHp),u(A,"id","hp"),u(m,"type","number"),u(m,"class","input input--clear svelte-1tz6fzi"),u(m,"placeholder","HP"),u(c,"type","number"),u(c,"class","input input--clear svelte-1tz6fzi"),u(c,"placeholder","Max HP"),u(b,"class","hp svelte-1tz6fzi"),u(e,"class","init__item svelte-1tz6fzi"),_(e,"current",a[1]===a[20])},m(aa,$){D(aa,e,$),p(e,o),p(o,r),p(r,t),p(o,n),p(o,d),O(d,a[18].name),p(o,l),p(o,i),O(i,a[18].dice),p(o,z),p(o,h),p(h,S),p(e,C),p(e,b),p(b,A),O(A,a[18].hp),p(b,E),p(b,m),O(m,a[18].hp),p(b,g),p(b,c),O(c,a[18].maxHp),p(e,j),Q||(Z=[M(d,"input",V),M(i,"input",y),M(h,"click",na),M(o,"submit",K(De)),M(A,"change",Y),M(A,"input",Y),M(m,"input",wa),M(c,"input",Ha)],Q=!0)},p(aa,$){a=aa,$&1&&s!==(s=a[18].iniciative.sum+"")&&X(t,s),$&1&&d.value!==a[18].name&&O(d,a[18].name),$&1&&i.value!==a[18].dice&&O(i,a[18].dice),$&1&&v!==(v=a[18].maxHp)&&u(A,"max",v),$&1&&O(A,a[18].hp),$&1&&w(m.value)!==a[18].hp&&O(m,a[18].hp),$&1&&w(c.value)!==a[18].maxHp&&O(c,a[18].maxHp),$&2&&_(e,"current",a[1]===a[20])},d(aa){aa&&P(e),Q=!1,G(Z)}}}function Ve(a){let e,o,r,s,t,n,d,l,i,z,h,S,q,C,b,A,v,E=a[0],m=[];for(let g=0;g<E.length;g+=1)m[g]=Oa(La(a,E,g));return{c(){e=f("li"),o=f("form"),r=f("input"),s=x(),t=f("input"),n=x(),d=f("input"),l=x(),i=f("input"),z=x(),h=f("button"),S=f("img"),C=x();for(let g=0;g<m.length;g+=1)m[g].c();b=ba(),u(r,"type","text"),u(r,"class","input svelte-1tz6fzi"),u(r,"placeholder","Personagem"),u(t,"type","text"),u(t,"class","input input--dice svelte-1tz6fzi"),u(t,"placeholder","1d20"),u(d,"type","number"),u(d,"min","0"),u(d,"class","input input--dice svelte-1tz6fzi"),u(d,"placeholder","HP"),u(i,"type","number"),u(i,"min","0"),u(i,"class","input input--dice svelte-1tz6fzi"),u(i,"placeholder","Max HP"),W(S.src,q=Se)||u(S,"src",q),u(S,"alt","add user"),u(h,"class","button button--icon"),u(o,"class","init__form svelte-1tz6fzi"),u(e,"class","init__item svelte-1tz6fzi")},m(g,c){D(g,e,c),p(e,o),p(o,r),O(r,a[2]),p(o,s),p(o,t),O(t,a[3]),p(o,n),p(o,d),O(d,a[4]),p(o,l),p(o,i),O(i,a[5]),p(o,z),p(o,h),p(h,S),D(g,C,c);for(let j=0;j<m.length;j+=1)m[j].m(g,c);D(g,b,c),A||(v=[M(r,"input",a[8]),M(t,"input",a[9]),M(d,"input",a[10]),M(i,"input",a[11]),M(o,"submit",K(a[6]))],A=!0)},p(g,c){if(c&4&&r.value!==g[2]&&O(r,g[2]),c&8&&t.value!==g[3]&&O(t,g[3]),c&16&&w(d.value)!==g[4]&&O(d,g[4]),c&32&&w(i.value)!==g[5]&&O(i,g[5]),c&131){E=g[0];let j;for(j=0;j<E.length;j+=1){const Q=La(g,E,j);m[j]?m[j].p(Q,c):(m[j]=Oa(Q),m[j].c(),m[j].m(b.parentNode,b))}for(;j<m.length;j+=1)m[j].d(1);m.length=E.length}},d(g){g&&P(e),g&&P(C),ra(m,g),g&&P(b),A=!1,G(v)}}}function xe(a){let e,o;return e=new Ba({props:{className:"init",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){I(e.$$.fragment)},m(r,s){U(e,r,s),o=!0},p(r,[s]){const t={};s&2097215&&(t.$$scope={dirty:s,ctx:r}),e.$set(t)},i(r){o||(L(e.$$.fragment,r),o=!0)},o(r){J(e.$$.fragment,r),o=!1},d(r){F(e,r)}}}const Ja=50,Pe="1d20",De=()=>{};function Me(a,e,o){let{chars:r}=e,{current:s=-1}=e,t="",n="",d,l;function i(){n===""&&o(3,n=Pe),o(0,r=[{name:t,dice:n,maxHp:l||Ja,hp:d||Ja,iniciative:{sum:0}},...r]),o(2,t=""),o(3,n="")}function z(c){o(0,r=r.map((j,Q)=>({...j,i:Q})).filter(({i:j})=>j!==c))}function h(){t=this.value,o(2,t)}function S(){n=this.value,o(3,n)}function q(){d=w(this.value),o(4,d)}function C(){l=w(this.value),o(5,l)}function b(c,j){c[j].name=this.value,o(0,r)}function A(c,j){c[j].dice=this.value,o(0,r)}const v=c=>z(c);function E(c,j){c[j].hp=w(this.value),o(0,r)}function m(c,j){c[j].hp=w(this.value),o(0,r)}function g(c,j){c[j].maxHp=w(this.value),o(0,r)}return a.$$set=c=>{"chars"in c&&o(0,r=c.chars),"current"in c&&o(1,s=c.current)},[r,s,t,n,d,l,i,z,h,S,q,C,b,A,v,E,m,g]}class Le extends R{constructor(e){super(),k(this,e,Me,xe,T,{chars:0,current:1})}}const Ga="/dnd/assets/play-41903c19.svg";function Oe(a){let e,o,r,s,t,n;return{c(){e=f("div"),o=f("button"),r=f("img"),W(r.src,s=Ga)||u(r,"src",s),u(r,"alt",""),u(r,"class","icon-play svelte-ugm1i9"),u(o,"class","button button--alt svelte-ugm1i9"),u(e,"class","container svelte-ugm1i9")},m(d,l){D(d,e,l),p(e,o),p(o,r),t||(n=M(o,"click",a[1]),t=!0)},p:N,i:N,o:N,d(d){d&&P(e),t=!1,n()}}}function Je(a){const e=ka();return[e,r=>e("play",r)]}class _e extends R{constructor(e){super(),k(this,e,Je,Oe,T,{})}}const Ue="/dnd/assets/square-2833c38a.svg";function Fe(a){let e,o,r,s,t=a[0]+1+"",n,d,l,i,z,h,S,q,C,b,A;return{c(){e=f("div"),o=f("span"),r=B("Turno "),s=f("strong"),n=B(t),d=x(),l=f("button"),i=f("img"),h=x(),S=f("button"),q=f("img"),u(o,"class","label svelte-1l0zhbb"),W(i.src,z=Ue)||u(i,"src",z),u(i,"alt",""),u(i,"class","icon svelte-1l0zhbb"),u(l,"class","button button--small svelte-1l0zhbb"),W(q.src,C=Ga)||u(q,"src",C),u(q,"alt",""),u(q,"class","icon svelte-1l0zhbb"),u(S,"class","button button--alt svelte-1l0zhbb"),u(e,"class","container svelte-1l0zhbb")},m(v,E){D(v,e,E),p(e,o),p(o,r),p(o,s),p(s,n),p(e,d),p(e,l),p(l,i),p(e,h),p(e,S),p(S,q),b||(A=[M(l,"click",a[2]),M(S,"click",a[3])],b=!0)},p(v,[E]){E&1&&t!==(t=v[0]+1+"")&&X(n,t)},i:N,o:N,d(v){v&&P(e),b=!1,G(A)}}}function Ie(a,e,o){let{turnCount:r=0}=e;const s=ka(),t=d=>s("stop",d),n=d=>s("next",d);return a.$$set=d=>{"turnCount"in d&&o(0,r=d.turnCount)},[r,s,t,n]}class Ne extends R{constructor(e){super(),k(this,e,Ie,Fe,T,{turnCount:0})}}function ma(a,e,o=JSON.stringify){window.localStorage.setItem(a,o(e))}function ca(a,e=null,o=JSON.parse){const r=window.localStorage.getItem(a);return r?o(r):e}function ye(a,e){return a=Math.ceil(a),e=Math.floor(e),Math.floor(Math.random()*(e-a+1))+a}function Te(a){if(!/\d+d\d+((\+|\-)\d+)?/g.test(a))throw`Invalid Dice: ${a}`;const[o,r]=a.split("d"),s=parseInt(o),t=/\+|\-/g,n=t.test(r),d=n?r.search(t):0,l=parseInt(r.substring(0,n?d:r.length)),i=n?parseInt(r.substring(d)):0;return[s,l,i]}function ke(a){const[e,o,r]=Te(a);return Re(e,o,r)}function Re(a,e,o=0){const s=new Array(a).fill(0).map(()=>ye(1,e));return{sum:s.reduce((n,d)=>n+d,0)+o,roll:s,bonus:o,dice:`${a}d${e}${o>=0?`+${o}`:o}`}}function Qe(a){let e,o,r;function s(n){a[8](n)}let t={};return a[3]!==void 0&&(t.turnCount=a[3]),e=new Ne({props:t}),ta.push(()=>ja(e,"turnCount",s,a[3])),e.$on("stop",a[6]),e.$on("next",a[5]),{c(){I(e.$$.fragment)},m(n,d){U(e,n,d),r=!0},p(n,d){const l={};!o&&d&8&&(o=!0,l.turnCount=n[3],Aa(()=>o=!1)),e.$set(l)},i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){J(e.$$.fragment,n),r=!1},d(n){F(e,n)}}}function $e(a){let e,o;return e=new _e({}),e.$on("play",a[4]),{c(){I(e.$$.fragment)},m(r,s){U(e,r,s),o=!0},p:N,i(r){o||(L(e.$$.fragment,r),o=!0)},o(r){J(e.$$.fragment,r),o=!1},d(r){F(e,r)}}}function Be(a){let e,o,r,s,t,n,d;function l(q){a[7](q)}let i={current:a[2]};a[1]!==void 0&&(i.chars=a[1]),e=new Le({props:i}),ta.push(()=>ja(e,"chars",l,a[1]));const z=[$e,Qe],h=[];function S(q,C){return q[0]===ha?0:1}return t=S(a),n=h[t]=z[t](a),{c(){I(e.$$.fragment),r=x(),s=f("div"),n.c(),u(s,"class","control svelte-jpumiv")},m(q,C){U(e,q,C),D(q,r,C),D(q,s,C),h[t].m(s,null),d=!0},p(q,[C]){const b={};C&4&&(b.current=q[2]),!o&&C&2&&(o=!0,b.chars=q[1],Aa(()=>o=!1)),e.$set(b);let A=t;t=S(q),t===A?h[t].p(q,C):(Qa(),J(h[A],1,1,()=>{h[A]=null}),$a(),n=h[t],n?n.p(q,C):(n=h[t]=z[t](q),n.c()),L(n,1),n.m(s,null))},i(q){d||(L(e.$$.fragment,q),L(n),d=!0)},o(q){J(e.$$.fragment,q),J(n),d=!1},d(q){F(e,q),q&&P(r),q&&P(s),h[t].d()}}}const ha="create",Ge="run";function we(a,e,o){let r=ca("mode",ha),s=ca("chars",[]),t=ca("iniciative",-1),n=ca("turnCount",0);function d(){o(0,r=Ge),l(),o(2,t=0)}function l(){o(1,s=[...s].map(q=>({...q,iniciative:ke(q.dice)})).sort((q,C)=>C.iniciative.sum-q.iniciative.sum))}function i(){if(t+1>=s.length)return o(3,n+=1),o(2,t=0);o(2,t+=1)}function z(){o(2,t=-1),o(3,n=0),o(0,r=ha)}function h(q){s=q,o(1,s)}function S(q){n=q,o(3,n)}return a.$$.update=()=>{a.$$.dirty&2&&ma("chars",s),a.$$.dirty&1&&ma("mode",r),a.$$.dirty&4&&ma("iniciative",t),a.$$.dirty&8&&ma("turnCount",n)},[r,s,t,n,d,i,z,h,S]}class He extends R{constructor(e){super(),k(this,e,we,Be,T,{})}}const We="Classes (SRD)",Ke={Sorcerer:{description:`<p>Ao criar um aventureiro feiticeiro, você recebe as seguintes características de classe.</p>
<h3>Pontos de vida</h3>
<p><strong>Dado de Vida:</strong> ld6 por nível como feiticeiro<br><strong>Ponto de Vida no 1º Nível:</strong> 6 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> ld6 (ou 4) + seu modificador de Constituição por nível como feiticeiro</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Nenhuma<br><strong>Armas:</strong> Adagas, dardos, fundas, bastões e bestas leves<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Constituição e Carisma<br><strong>Perícias:</strong> Escolha duas entre Arcanismo, Enganação, Intimidação, Intuição, Persuasão e Religião</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma besta leve e 20 virotes ou (b) qualquer arma simples</li>
<li>(a) uma bolsa de componentes ou (b) um foco arcano</li>
<li>(a) kit de aventureiro ou (b) kit de explorador</li>
<li>Duas adagas</li>
</ul>
<h1>O Feiticeiro</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Pontos de Feitiçaria</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>̶</td>
<td>{Conjuração}, {Origem de Feitiçaria}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>2</td>
<td>{Fonte de Magia}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>3</td>
<td>Espaço de Magia de 2º Nível, {Metamagia}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>5</td>
<td>Espaço de Magia de 3º Nível</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>6</td>
<td>Característica de Origem de Feitiçaria</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>7</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>8</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>9</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>10</td>
<td>{Metamagia}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>11</td>
<td>Espaço de Magia de 6º Nível</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>12</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>13</td>
<td>Espaço de Magia de 7º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>14</td>
<td>Característica de Origem de Feitiçaria</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>15</td>
<td>Espaço de magia de 8º Nível</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>16</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>17</td>
<td>Espaço de Magia de 9º Nível, {Metamagia}</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>18</td>
<td>Característica de Origem de Feitiçaria</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>19</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>20</td>
<td>{Restauração de Feitiçaria}</td>
</tr>
</tbody>
</table>
<h1>Origem Feiticeira</h1>
<p>Diferentes feiticeiros possuem diferentes origens para sua magia inata, como a linhagem dracônica.</p>
<h2>Linhagem Dracônica</h2>
<p>Sua magia inata vem da magia dracônica misturada ao seu sangue ou ao sangue dos seus ancestrais. Geralmente, os feiticeiros com esta origem traçam sua ascendência até algum feiticeiro poderoso de épocas ancestrais, que fez um acordo com um dragão ou pode, de fato, ter sido um descendente direto de um dragão. Algumas dessas linhagens são bem estabelecidas no mundo, mas muitas são obscuras. Qualquer feiticeiro pode ser o primeiro de uma nova linhagem, como resultado de um pacto ou de alguma outra circunstância excepcional. </p>
<h3>Características do Ancestral Dracônico</h3>
<p>1º Nível: {Ancestral Dragão} {Resiliência Dracônica}</p>
<p>6º Nível: {Afinidade Elemental}</p>
<p>14º Nível: {Asas de Dragão}</p>
<p>18º Nível: {Presença Dracônica}</p>`,name:"Feiticeiro"},Monk:{description:`<p>Ao criar um aventureiro monge, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de monge<br><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d8 (ou 5) + seu modificador de Constituição por nível de monge após o 1º</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Nenhuma<br><strong>Armas:</strong> Armas simples e espadas curtas<br><strong>Ferramentas:</strong> Escolha um tipo de ferramenta de artesão ou instrumento musical<br><strong>Salvaguardas:</strong> Força e Destreza<br><strong>Perícias:</strong> Escolha duas entre Acrobacia, Atletismo, Furtividade, História, Intuição e Religião</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma espada curta ou (b) qualquer arma simples</li>
<li>(a) kit de aventureiro ou (b) kit de explorador</li>
<li>10 dardos</li>
</ul>
<h1>O Monge</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Artes Marciais</td>
<td>Pontos de Ki</td>
<td>Deslocamento sem Armadura</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>1d4</td>
<td>—</td>
<td>—</td>
<td>{Defesa sem Armadura}, {Artes Marciais}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>1d4</td>
<td>2</td>
<td>+3m.</td>
<td>{Ki}, {Movimento sem Armadura}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>1d4</td>
<td>3</td>
<td>+3m.</td>
<td>{Tradição Monástica}, {Desviar Projéteis}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>1d4</td>
<td>4</td>
<td>+3m.</td>
<td>{Aumento no Valor de Atributo}, {Queda Lenta}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>1d6</td>
<td>5</td>
<td>+3m.</td>
<td>{Ataque Extra}, {Golpe Atordoante}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>1d6</td>
<td>6</td>
<td>+4,5m.</td>
<td>
<p>{Golpes Potencializados com Ki},</p>
<p>Característica de Tradição Monástica</p>
</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>1d6</td>
<td>7</td>
<td>+4,5m.</td>
<td>{Evasão}, {Mente Tranquila}</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>1d6</td>
<td>8</td>
<td>+4,5m.</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>1d6</td>
<td>9</td>
<td>+4,5m.</td>
<td>Aperfeiçoamento do Deslocamento sem Armadura</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>1d6</td>
<td>10</td>
<td>+6m.</td>
<td>{Pureza do Corpo}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>1d8</td>
<td>11</td>
<td>+20 ft.</td>
<td>Característica de Tradição Monástica</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>1d8</td>
<td>12</td>
<td>+6m.</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>1d8</td>
<td>13</td>
<td>+6m.</td>
<td>{Idioma do Sol e da Lua}</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>1d8</td>
<td>14</td>
<td>+7,5m.</td>
<td>{Alma de Diamante}</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>1d8</td>
<td>15</td>
<td>+7,5m.</td>
<td>{Corpo Atemporal}</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>1d8</td>
<td>16</td>
<td>+7,5m.</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>1d10</td>
<td>17</td>
<td>+7,5m.</td>
<td>Característica de Tradição Monástica</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>1d10</td>
<td>18</td>
<td>+9m.</td>
<td>{Corpo Vazio}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>1d10</td>
<td>19</td>
<td>+9m.</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>1d10</td>
<td>20</td>
<td>+9m.</td>
<td>{Autoaperfeiçoamento}</td>
</tr>
</tbody>
</table>
<h1>Tradições Monásticas</h1>
<p>Três tradições são comuns nos monastérios espalhados por todo o multiverso. A maior parte desses locais pratica uma única tradição, mas alguns monastérios honram todas as três, e instruem cada monge de acordo com a sua aptidão e interesse dele. As três tradições contam com as mesmas técnicas básicas, divergindo conforme o estudante se torna mais apto. Assim sendo, ao alcançar o 3° nível, o monge precisa escolher uma dessas tradições.</p>
<h2>Caminho da Mão Espalmada</h2>
<p>Os monges do Caminho da Mão Espalmada são os mestres absolutos do combate com artes marciais, quer se utilizem de armas ou não. Eles aprendem técnicas para empurrar e derrubar seus oponentes, manipular o ki para curar o dano causado em seus próprios corpos, e praticam a meditação avançada, capaz de protegê-los do perigo.</p>
<h3>Características do Caminho da Mão Aberta</h3>
<p>3º Nível: {Técnica da Mão Espalmada}</p>
<p>6º Nível: {Integridade Corporal}</p>
<p>11º Nível: {Tranquilidade}</p>
<p>17º Nível: {Palma Vibrante}</p>`,name:"Monge"},Warlock:{description:`<p>Ao criar um aventureiro bruxo, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de bruxo<br><strong>Pontos de vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> ld8 (ou 5) + seu modificador de Constituição por nível como bruxo</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves<br><strong>Armas:</strong> Armas simples<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Sabedoria, Carisma<br><strong>Perícias:</strong> Escolha duas perícias entre Arcanismo, Enganação, História, Intimidação, Investigação, Natureza e Religião</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente: </p>
<ul>
<li>(a) uma besta leve e 20 virotes ou (b) qualquer arma simples</li>
<li>(a) uma bolsa de componentes ou (b) um foco arcano</li>
<li>(a) kit de erudito ou (b) kit de explorador</li>
<li>Armadura de couro, qualquer arma simples e duas adagas</li>
</ul>
<h1>Avançando com o Bruxo</h1>
<table border="0" cellspacing="0">
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
<td>Invocações</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Patrono Sobrenatural}, {Magia de Pacto}</td>
<td>̶</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Invocações Místicas}</td>
<td>2</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>{Dádiva do Pacto}</td>
<td>2</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
<td>2</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Magia de 3º Nível, +1 Invocação</td>
<td>3</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>Característica de Patrono Sobrenatural</td>
<td>3</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Magia de 4º Nível, +1 Invocação</td>
<td>4</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
<td>4</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Magia de 5º Nível, +1 Invocação</td>
<td>5</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>Característica de Patrono Sobrenatural</td>
<td>5</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>{Arcana Mística (6º círculo) }</td>
<td>5</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo},  +1 Invocação</td>
<td>6</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>{Arcana Mística (7º círculo)}</td>
<td>6</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>Característica de Patrono Sobrenatural</td>
<td>6</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>{Arcana Mística (8º círculo)}, +1 Invocação</td>
<td>7</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
<td>7</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>{Arcana Mística (9º círculo)}</td>
<td>7</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>+1 Invocação</td>
<td>8</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
<td>8</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>{Mestre Místico}</td>
<td>8</td>
</tr>
</tbody>
</table>
<hr>
<h3>Sua Dádiva do Pacto</h3>
<p>Cada opção de Dádiva do Pacto produz uma criatura ou objeto especial que reflete a natureza do seu patrono.</p>
<p><em><strong>Pacto da Corrente. </strong></em>Seu familiar é mais esperto que um familiar típico. Sua forma padrão pode ser reflexo do seu patrono, como diabretes e quasits vinculados ao Corruptor.</p>
<p><em><strong>Pacto da Lâmina. </strong></em>Se o seu patrono for a Arquifada, sua arma 
deveria ser uma lâmina fina entalhada com frondosas videiras.</p>
<p><em><strong>Pacto do Tomo. </strong></em> Seu Livro das Sombras deveria ser um tomo o costurado com couro de demônio e cravado com ferro, contendo magias de conjuração e rico em conhecimento proibido sobre regiões sinistras do cosmos, um presente do Corruptor.</p>
<hr>
<h1>Patronos Sobrenaturais</h1>
<p>Os seres que servem como patronos para bruxos são poderosos habitantes de outros planos de existência - não exatamente deuses, mas criaturas com poderes quase divinos. Diferentes patronos garantem aos bruxos o acesso a diferentes poderes e invocações, esperando favores significativos em troca. </p>
<p>Alguns patronos colecionam bruxos, repartindo conhecimento místico praticamente de graça ou se gabando de suas habilidades para prender mortais à sua vontade. Outros concedem seus poderes apenas relutantemente, e podem fazer um pacto com um único bruxo. Bruxos que servem ao mesmo patrono podem ver uns aos outros como aliados, irmãos ou rivais.</p>
<h2>O Ínfero</h2>
<p>Você fez um pacto com um habitante dos planos de existência inferiores, um ser cujos objetivos são maléficos, ainda que você lute contra eles. Tais seres desejam a corrupção ou a destruição de todas as coisas, até mesmo de você. Inferos poderosos o suficiente para forjar pactos incluem lordes demoníacos como Demogorgon, Orcus, Fraz'Urb-luu e Bafomé; arquidiabos como Asmodeus, Dispater, Mefistófeles e Belial; demônios do fosso e balores especialmente poderosos ou ultroloths e outros senhores dos yugoloths. </p>
<h3>Características do Ínfero</h3>
<p>1º Nível: {Lista Expandida de Magias} {Benção do Tenebroso}</p>
<p>6º Nível: {Sorte do Próprio Tenebroso}</p>
<p>10º Nível: {Resistência Ínfera}</p>
<p>14º Nível: {Lançar no Inferno}</p>`,name:"Bruxo"},Fighter:{description:`<p>Ao criar um aventureiro guerreiro, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d10 por nível de guerreiro<br><strong>Pontos de Vida no 1º Nível:</strong> 10 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d10 (ou 6) + seu modificador de Constituição por nível de guerreiro</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Todas as armaduras e escudos<br><strong>Armas:</strong> Armas simples e marciais<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Força e Constituição<br><strong>Perícias:</strong> Escolha duas entre Acrobacia, Atletismo, História, Intimidação, Intuição, Lidar com Animais, Percepção e
Sobrevivência</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente: </p>
<ul>
<li>(a) cota de malha ou (b) armadura de couro, arco longo e 20 flechas</li>
<li>(a) uma arma marcial e um escudo ou (b) duas armas marciais</li>
<li>(a) uma besta leve e 20 virotes ou (b) duas machadinhas</li>
<li>(a) kit de aventureiro ou (b) kit de explorador</li>
</ul>
<h1>Avançando com o Guerreiro</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Estilo de Luta}, {Retomar o Fôlego}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Surto de Ação (um uso)}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>{Arquétipo Marcial}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>{Ataque Extra}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Característica de Arquétipo Marcial</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>{Indomável (um uso)}</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>Característica de Arquétipo Marcial</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>{Ataque Extra (2)}</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>{Indomável (dois usos)}</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Característica de Arquétipo Marcial</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>{Surto de Ação (dois usos)}, {Indomável (três usos)}</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>Característica de Arquétipo Marcial</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>{Ataque Extra (3)}</td>
</tr>
</tbody>
</table>
<h1>Arquétipos Marciais</h1>
<p>Diferentes guerreiros escolhem diferentes abordagens para aperfeiçoar suas habilidades de combate. O arquétipo marcial que você escolhe reflete a sua abordagem.</p>
<h2>Campeão</h2>
<p>O arquétipo Campeão se concentra no desenvolvimento da força física, cultivando uma perfeição mortífera. Aqueles que se inspiram neste arquétipo combinam o treinamento rigoroso com a excelência física, desferindo golpes devastadores.</p>
<h3>Características do Campeão</h3>
<p>3º Nível: {Crítico Aprimorado}</p>
<p>7º Nível: {Atleta Extraordinário}</p>
<p>10º Nível: {Estilo de Luta Adicional}</p>
<p>15º Nível: {Crítico Superior}</p>
<p>18º Nível: {Sobrevivente}</p>`,name:"Guerreiro"},Bard:{description:`<p>Ao criar um aventureiro bardo, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de bardo<br><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> ld8 (ou 5) + seu modificador de Constituição por nível de bardo</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras Leves<br><strong>Armas:</strong> Armas simples, bestas de mão, espadas longas, rapieiras e espadas curtas<br><strong>Ferramentas:</strong> Três instrumentos musicais à sua escolha<br><strong>Salvaguardas:</strong> Destreza e Carisma<br><strong>Perícias:</strong> Escolha três</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma rapieira, (b) uma espada longa ou (e) qualquer arma simples</li>
<li>(a) kit de diplomata ou (b) kit de artista</li>
<li>(a) um alaúde ou (b) qualquer outro instrumento musical</li>
<li>Uma armadura de couro e uma adaga</li>
</ul>
<h1>Avançando com o Bardo</h1>
<table border="0" cellspacing="0">
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Conjuração}, {Inspiração de Bardo (d6)}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Pau pra Toda Obra}, {Canção do Descanso (d6)}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>{Colégio de Bardo} {Especialista}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>{Inspiração de Bardo (d8)}, {Fonte de Inspiração}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>{Contra-Encantamento}, Habilidade de Colégio de Bardo</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Espaço de Magia 4º nível</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 5º nível {Canção do Descanso (d8)}</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>{Inspiração de Bardo (d10)}, {Especialista}, {Segredos Mágicos}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>Espaço de Magia de 6º Nível</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de Magia de 7º Nível, {Canção do Descanso (d10)}</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>{Segredos Mágicos}, Habilidade de Colégio de Bardo</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Espaço de Magia de 8º Nível, {Inspiração de Bardo (d12)}</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 9º Nível, {Canção do Descanso (d12)}</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>{Segredos Mágicos}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>{Inspiração Superior}</td>
</tr>
</tbody>
</table>
<h1>Colégios de Bardo</h1>
<h2>Colégio do Conhecimento</h2>
<p>Bardos deste colégio sabem um pouco de tudo, recolhendo fragmentos de conhecimento das fontes mais diversas, desde os tomos eruditos às histórias dos camponeses. Seja cantando baladas populares em tavernas ou composições elaboradas nas cortes reais, estes bardos usam seus dons para manter o público encantado. Quando os aplausos terminam, o público pode parecer atônito, questionando aquilo em que até então acreditou, desde sua fé no clero local até sua fidelidade ao rei. </p>
<p>A lealdade desses bardos se dirige à busca pela beleza e a verdade, e não à obediência a um monarca ou a princípios religiosos. Um nobre que empregue um bardo, seja como arauto, seja como conselheiro, sabe que este sempre preferirá a sinceridade à polidez. </p>
<p>Os membros deste colégio se reúnem em bibliotecas e, às vezes, em academias repletas de salas de estudo e alojamentos, onde compartilham entre si os seus conhecimentos. Eles também se juntam em festivais ou assembleias de estado, onde podem expor a corrupção, desvendar as mentiras e zombar das figuras de autoridade.</p>
<h3>Características do Colégio do Conhecimento</h3>
<p>3º Nível: {Proficiência Bônus} {Palavras de Interrupção}</p>
<p>6º Nível: {Segredos Mágicos Adicionais}</p>
<p>14º Nível: {Perícia Inigualável}</p>`,name:"Bardo"},Ranger:{description:`<p>Ao criar um aventureiro guardião, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d10 por nível de patrulheiro<br><strong>Pontos de Vida no 1º Nível:</strong> 10 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d10 (ou 6) + seu modificador de Constituição por nível corno guardião</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves, armaduras médias e escudos<br><strong>Armas:</strong> Armas simples e armas marciais <br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Força e Destreza<br><strong>Perícias:</strong> Escolha três dentre Atletismo, Furtividade, Intuição, Investigação, Lidar com animais, Natureza, Percepção e Sobrevivência</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) lórica de escarnas ou (b) armadura de couro</li>
<li>(a) duas espadas curtas ou (b) duas armas simples corpo a corpo</li>
<li>(a) kit de aventureiro ou (b) kit de explorador</li>
<li>Um arco longo e urna aljava com 20 flechas</li>
</ul>
<h1>Avançando com o Patrulheiro</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Inimigo Favorito}, {Explorador Natural}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Estilo de Luta}, {Conjuração}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>{Arquétipo de Guardião}, {Consciência Primitiva}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Espaço de Magia de 2º Nível, {Ataque Extra}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>Aprimoramento de Características: {Inimigo Favorito} e {Explorador Natural}</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Característica de Arquétipo de Guardião</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}, {Passo da Terra}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 3º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>Aprimoramento de Características: { Inimigo Favorito} e {Sumir de Vista}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>Característica de Arquétipo de Guardião</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>Aprimoramento de Características: {Inimigo Favorito} e {Desaparecer}</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Característica de Arquétipo de Guardião</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>{Sentidos Selvagens}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>{Matador de Inimigos}</td>
</tr>
</tbody>
</table>
<h1>Arquétipos de Guardião</h1>
<p>Uma expressão clássica do guardião é o Caçador</p>
<h2>Caçador</h2>
<p>Assumir o arquétipo do Caçador significa aceitar seu papel como uma barreira entre a civilização e os horrores dos ermos. Ao seguir este caminho, você aprende técnicas especializadas no combate às ameaças que enfrenta, desde ataques de ogros e hordas de orques, até imponentes gigantes e terríveis dragões. </p>
<h3>Características do Caçador</h3>
<p>3º Nível: {Presa do Caçador}</p>
<p>7º Nível: {Táticas Defensivas}</p>
<p>11º Nível: {Ataque Múltiplo}</p>
<p>15º Nível: {Defesa do Caçador}</p>`,name:"Guardião"},Paladin:{description:`<p>Ao criar um aventureiro paladino, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d10 por nível de paladino<br><strong>Pontos de Vida no 1º Nível:</strong> 10 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d10 (ou 6) + seu modificador de Constituição por nível de paladino</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Todas as armaduras e escudos<br><strong>Armas:</strong> Armas simples e armas marciais<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Sabedoria e Carisma<br><strong>Perícias:</strong> Escolha duas entre Atletismo, Intimidação, Intuição, Medicina, Persuasão e Religião</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma arma marcial e um escudo ou (b) duas armas marciais</li>
<li>(a) cinco azagaias ou (b) qualquer arma simples de combate corpo a corpo</li>
<li>(a) kit de sacerdote ou (b) kit de explorador</li>
<li>Cota de malha e um símbolo sagrado</li>
</ul>
<h1>Avançando com o Paladino</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Sentido Divino},  {Mãos Consagradas}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Estilo de Luta}, {Conjuração}, {Destruição Divina}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>{Saúde Divina}, {Juramento Sagrado}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Espaço de Magia de 2º Nível, {Ataque Extra}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>{Aura de Proteção}</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Característica de Juramento Sagrado</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 3º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>{Aura da Coragem}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>{Improved Divine Smite}</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Destruição Divina Aprimorada}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>{Toque Purificador}</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Característica de Juramento Sagrado</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>Aprimoramentos de Aura</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>Característica de Juramento Sagrado</td>
</tr>
</tbody>
</table>
<h1>Juramentos Sagrados</h1>
<p>Tornar-se um Paladino envolve realizar votos de compromisso sagrado com a causa da justiça, o que implica uma jornada ativa de luta contra o mal. O juramento final, realizado quando se alcança o 3 ° nível, é o ápice de todo o treinamento de um paladino. Alguns personagens desta classe não se consideram verdadeiros paladinos até alcançarem o 3 ° nível e realizarem este juramento. Para outros, o juramento em si é uma mera formalidade, um reconhecimento oficial daquilo que sempre foi verdadeiro em seus corações.</p>
<h2>Juramento da Devoção</h2>
<p>O Juramento da Devoção vincula um paladino aos mais elevados ideais da justiça, virtude e ordem. Algumas vezes chamados de cavaleiros, cavaleiros brancos ou guerreiros sagrados, esses paladinos personificam o ideal do cavaleiro de armadura brilhante, que age com honra em busca da justiça e do bem maior. Eles cultivam e perseguem os mais elevados padrões de conduta, e alguns, de um modo ou de outro, exigem que o resto do mundo mantenha os mesmos padrões. Muitos dos que realizam esse juramento são devotos de deuses da justiça e do bem, usando os mandamentos das suas divindades como medida para sua devoção. Eles admiram os anjos - os mais perfeitos servos do bem - e os têm como seus ideais, incorporando imagens de asas angelicais em seus elmos e brasões.</p>
<h3>Magias de Juramento</h3>
<p>Você ganha as seguintes magias de juramento nos níveis de paladino listados.</p>
<table>
<thead>
<tr>
<td><strong>Nível de Paladino</strong></td>
<td><strong>Magias</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>3º</td>
<td>{proteção contra o bem e o mal}, {santuário}</td>
</tr>
<tr>
<td>5º</td>
<td>{restauração menor}, {zona da verdade}</td>
</tr>
<tr>
<td>9º</td>
<td>{sinal de esperança}, {dissipar magia}</td>
</tr>
<tr>
<td>13º</td>
<td>{movimentação livre}, {defensor da fé}</td>
</tr>
<tr>
<td>17º</td>
<td>{comunhão}, {coluna de chamas}</td>
</tr>
</tbody>
</table>
<h3>Canalizar Divindade</h3>
<p>Ao fazer este juramento no 3 ° nível, você ganha as duas opções de  {Canalizar Divindade}.</p>
<p>{Arma Sagrada}</p>
<p>{Expulsar o Profano}</p>
<h3>Quebrando seu Juramento</h3>
<p>Um paladino tenta manter os mais elevados padrões de conduta, embora até os mais virtuosos falhem. Às vezes, o caminho da retidão prova-se muito exigente. Em alguns casos, uma situação exige a escolha entre o menor de dois males. Em outras, o calor da emoção faz o paladino transgredir seu juramento.</p>
<p>Um paladino que quebre o seu voto geralmente busca a absolvição de um clérigo que compartilhe da sua fé, ou de outro paladino da mesma ordem. O paladino desgraçado deverá fazer vigília e orações durante uma noite, como prova de penitência, ou realizar um ato de remissão semelhante. Após cumprido o ritual de confissão e perdão, o paladino se renova.</p>
<p>Caso um paladino viole deliberadamente o seu juramento e não mostre sinais de arrependimento, as consequências podem ser mais graves. De acordo com o julgamento do DM, um paladino impenitente pode ser forçado a abandonar sua classe e adotar uma nova. Talvez seja o caso de mudar para Violador, uma opção de classe para paladino. Esta opção de classe é detalhada no Dungeon Master's Guide: Livro do Mestre.</p>`,name:"Paladino"},Barbarian:{description:`<p>Ao criar um aventureiro bárbaro, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d12 por nível de bárbaro<br><strong>Pontos de Vida no 1º Nível:</strong> 12 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d12 (ou 7) + seu modificador de Constituição por nível de Bárbaro</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves, armaduras médias e escudos<br><strong>Armas:</strong> Armas simples e armas marciais<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Força e Constituição<br><strong>Perícias:</strong> Escolha duas entre Atletismo, Intimidação, Lidar com Animais, Natureza, Percepção e Sobrevivência</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) um machado grande ou (b) qualquer arma marcial de combate corpo a corpo</li>
<li>(a) duas machadinhas ou (b) qualquer arma simples</li>
<li>Um kit de explorador e quatro azagaias</li>
</ul>
<h1>Avançando com o Bárbaro</h1>
<table border="0" cellspacing="0" cellpadding="0">
<thead>
<tr>
<td height="17">Níveis</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
<td>Fúria</td>
<td>Dano da Fúria</td>
</tr>
</thead>
<tbody>
<tr>
<td height="17">1º</td>
<td>+2</td>
<td>{Fúria}, {Defesa sem Armadura}</td>
<td>2</td>
<td>+2</td>
</tr>
<tr>
<td height="17">2º</td>
<td>+2</td>
<td>{Ataque Imprudente}, {Sentido de Perigo}</td>
<td>2</td>
<td>+2</td>
</tr>
<tr>
<td height="17">3º</td>
<td>+2</td>
<td>{Caminho Primitivo}</td>
<td>3</td>
<td>+2</td>
</tr>
<tr>
<td height="17">4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
<td>3</td>
<td>+2</td>
</tr>
<tr>
<td height="17">5º</td>
<td>+3</td>
<td>{Ataque Extra}, {Movimento Rápido}</td>
<td>3</td>
<td>+2</td>
</tr>
<tr>
<td height="17">6º</td>
<td>+3</td>
<td>Característica de Trilha</td>
<td>4</td>
<td>+2</td>
</tr>
<tr>
<td height="17">7º</td>
<td>+3</td>
<td>{Instinto Primitivo}</td>
<td>4</td>
<td>+2</td>
</tr>
<tr>
<td height="17">8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
<td>4</td>
<td>+2</td>
</tr>
<tr>
<td height="17">9º</td>
<td>+4</td>
<td>{Crítico Brutal (1 dado)}</td>
<td>4</td>
<td>+3</td>
</tr>
<tr>
<td height="17">10º</td>
<td>+4</td>
<td>Característica de Trilha</td>
<td>4</td>
<td>+3</td>
</tr>
<tr>
<td height="17">11º</td>
<td>+4</td>
<td>{Fúria Implacável}</td>
<td>4</td>
<td>+3</td>
</tr>
<tr>
<td height="17">12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
<td>5</td>
<td>+3</td>
</tr>
<tr>
<td height="17">13º</td>
<td>+5</td>
<td>{Crítico Brutal (2 dados)}</td>
<td>5</td>
<td>+3</td>
</tr>
<tr>
<td height="17">14º</td>
<td>+5</td>
<td>Característica de Trilha</td>
<td>5</td>
<td>+3</td>
</tr>
<tr>
<td height="17">15º</td>
<td>+5</td>
<td>{Fúria Persistente}</td>
<td>5</td>
<td>+3</td>
</tr>
<tr>
<td height="17">16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
<td>5</td>
<td>+4</td>
</tr>
<tr>
<td height="17">17º</td>
<td>+6</td>
<td>{Crítico Brutal (3 dados)}</td>
<td>6</td>
<td>+4</td>
</tr>
<tr>
<td height="17">18º</td>
<td>+6</td>
<td>{Força Indomável}</td>
<td>6</td>
<td>+4</td>
</tr>
<tr>
<td height="17">19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
<td>6</td>
<td>+4</td>
</tr>
<tr>
<td height="17">20º</td>
<td>+6</td>
<td>{Campeão Primitivo}</td>
<td>Ilimitado</td>
<td>+4</td>
</tr>
</tbody>
</table>
<h1>Trilha Primitiva</h1>
<h2>Trilha do Berserker</h2>
<p>Para alguns bárbaros, a fúria é apenas um meio para se atingir um fim - e esse fim é a violência. A Trilha do Berserker é um caminho de fúria desenfreada, banhada em sangue. Assim que você é tomado pela fúria do berserker, passa a exultar no caos da batalha, descuidando-se da sua própria saúde ou bem-estar.</p>
<h3>Características da Trilha do Berserker</h3>
<p>3º Nível: {Frenesi}</p>
<p>6º Nível: {Fúria Irracional}</p>
<p>10º Nível: {Presença Intimidante}</p>
<p>14º Nível: {Retaliação}</p>`,name:"Bárbaro"},Cleric:{description:`<p>Como um clérigo, você adquire as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de clérigo<br><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d8 (ou 5) + seu modificador de Constituição</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves, armaduras médias, escudos<br><strong>Armas:</strong> Todas as armas simples<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Sabedoria, Carisma<br><strong>Perícias:</strong> Escolha duas dentre História, Intuição, Medicina, Persuasão e Religião</p>
<h3>Equipamentos</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma maça ou (b) um martelo de guerra (se for proficiente)</li>
<li>(a) brunea, (b) armadura de couro ou (c) cota de malha (se for proficiente)</li>
<li>(a) um besta leve e 20 virotes ou (b) qualquer arma simples</li>
<li>(a) um pacote de sacerdote ou (b) um pacote de aventureiro</li>
<li>Um escudo e um símbolo sagrado</li>
</ul>
<h1>O Clérigo</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Conjuração} , {Domínio Divino}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Canalizar Divindade (1/descanso)}, Característica de Domínio Divino</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>Espaço de Magia de 2º Nível</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Espaço de Magia de 3º Nível, {Destruir Mortos-Vivos (CR 1/2)}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>{Destruir Mortos-Vivos (ND 1/2)}, Característica de Domínio Divino</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}, {Destruir Mortos-Vivos (ND 1)}, Característica de Domínio Divino</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>{Intervenção Divina}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>Espaço de Magia de 6º Nível, {Destruir Mortos-Vivos (ND 2)} </td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de magia de 7º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>{Destruir Mortos-Vivos (ND 3)} </td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Espaço de Magia de 8º Nível</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 9º Nível, {Destruir Mortos-Vivos (ND 4)}, Característica de Domínio Divino</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>{Canalizar Divindade (3/descanso)}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>{Aprimoramento de Intervenção Divina}</td>
</tr>
</tbody>
</table>
<h1>Domínios Divinos</h1>
<h2>Domínio da Vida</h2>
<p>O domínio da vida foca na vívida energia positiva – uma das forças fundamentais do universo – que sustenta toda a vida. Os deuses da vida promovem a vitalidade e a saúde, curando os doentes e feridos, cuidando dos necessitados, além de afastar as forças da morte e hordas de mortos-vivos. Quase toda divindade não maligna pode alegar influência sobre esse domínio. Em particular divindades da agricultura (como Chauntea, Arawai e Demeter), do sol (como Lathander, Pelor e Re-Horakhty), da cura ou resistência (como Ilmater, Mishakal, Apolo e Diancecht), e do lar e comunidade (como Hestia, Hathor e Boldrei).</p>
<h3>Magias do Domínio da Vida</h3>
<table>
<thead>
<tr>
<td><strong>Nível de Clérigo</strong></td>
<td><strong>Magias</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>{Benção}, {Curar Ferimentos}</td>
</tr>
<tr>
<td>3º</td>
<td>{Restauração Menor}, {Arma Espiritual}</td>
</tr>
<tr>
<td>5º</td>
<td>{Sinal de Esperança}, {Revivificar}</td>
</tr>
<tr>
<td>7º</td>
<td>{Proteção Contra a Morte}, {Guardião da Fé}</td>
</tr>
<tr>
<td>9º</td>
<td>{Curar Ferimentos em Massa}, {Reviver os Mortos}</td>
</tr>
</tbody>
</table>
<h3>Características do Domínio da Vida</h3>
<p>1º Nível: {Proficiência Adicional} {Discípulo da Vida}</p>
<p>2º Nível: {Canalizar Divindade: Preservar a Vida}</p>
<p>6º Nível: {Curandeiro Abençoado}</p>
<p>8º Nível: {Golpe Divino}</p>
<p>17º Nível: {Cura Suprema}</p>`,name:"Clérigo"},Wizard:{description:`<p>Como um mago, você adquire as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d6 por nível de mago<br><strong>Pontos de Vida no 1º Nível:</strong> 6 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d6 (ou4) + seu modificador de Constituição por nível de mago após o 1°</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Nenhuma<br><strong>Armas:</strong> Adagas, dardos, fundas, bordões, bestas leves<br><strong>Ferramentas:</strong> Nenhuma<br><strong>Salvaguardas:</strong> Inteligência, Sabedoria<br><strong>Perícias:</strong> Escolha duas entre Arcanismo, História, Intuição, Investigação, Medicina e Religião</p>
<h3>Equipamentos</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente: </p>
<ul>
<li>(a) um bordão ou (b) uma adaga</li>
<li>(a) uma bolsa de componentes ou (b) um foco arcano</li>
<li>(a) um pacote de estudioso ou (b) um pacote de explorador</li>
<li>Um grimório</li>
</ul>
<h1>O Mago</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>{Conjuração}, {Recuperação Arcana}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>{Tradição Arcana}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>Espaço de Magia de 2º Nível</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Espaço de Magia de 3º Nível</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>Característica de Tradição Arcana</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td> Característica de Tradição Arcana</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>Espaço de Magia de 6º Nível</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de Magia de 7º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td> Característica de Tradição Arcana</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Espaço de Magia de 8º Nível</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 9º Nível</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>{Dominar Magia}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>
<p>{Assinatura Mágica (Primeira Magia)}</p>
<p>{Assinatura Mágica (Segunda Magia)}</p>
</td>
</tr>
</tbody>
</table>
<h3>O Seu Grimório</h3>
<p>As magias que você pode adicionar em seu grimório, à medida que sobe de nível, refletem suas próprias pesquisas arcanas, conduzidas à sua maneira, bem como as suas descobertas sobre a natureza do multiverso. Você pode encontrar outras magias durante suas aventuras, como um feitiço escrito em um pergaminho que estava no baú de um mago maligno, por exemplo, ou em um tomo empoeirado de uma biblioteca antiga.</p>
<p><em><strong>Copiar uma Magia para o Grimório.</strong></em> Quando você encontrar uma magia de mago de 1° nível ou superior, você pode adicioná-la em seu grimório, desde que seja de um nível que você possua espaços de magia, além de dispor de tempo para decifrá-la e copiá-la.</p>
<p>Copiar uma magia para seu grimório envolve reproduzir suas formas básicas e então precisa decifrar a notação singular utilizada pelo mago que a escreveu. Você deve praticar a magia até entender os sons e gestos exigidos, para então transcrevê-la em seu grimório com sua própria notação.</p>
<p>Para cada nível da magia a ser copiada, gasta-se 2 horas e 50 po. O custo representa os componentes materiais que você gasta para experimentar a magia até dominá-la, bem como as finas tintas utilizadas para escrevê-la. Uma vez gasto o tempo e o dinheiro, você pode preparar a magia copiada como as suas outras magias.</p>
<p><em><strong>Substituir o Grimório.</strong></em> Você pode copiar uma magia de seu grimório em outro livro – por exemplo, se você quiser fazer uma cópia reserva de seu grimório. O processo é igual ao de copiar uma nova magia em seu grimório, só que mais rápido e fácil, pois o mago entende suas próprias notações e sabe como conjurar a magia. Você precisa gastar somente 1 hora e 10 po para cada nível de magia copiada.</p>
<p>Se perder o seu grimório, você pode usar o mesmo procedimento para transcrever suas magias preparadas em um novo grimório. Preencher o restante do grimório exigirá que você encontre novas magias, como normalmente se faz. Por essa razão, muitos magos mantêm seus grimórios reservas em lugares seguros.</p>
<p><em><strong>A Aparência do Grimório.</strong></em> Seu grimório é uma compilação de magias, com sua própria decoração e anotações de rodapé. Pode ser um livro de couro simples e funcional, recebido como presente de seu mestre, ou um tomo finamente encadernado com bordas douradas que você encontrou em uma antiga biblioteca, ou mesmo um conjunto de folhas soltas amontoadas após você perder seu grimório anterior em um acidente.</p>
<h1>Tradições Arcanas</h1>
<p>O estudo de magia é antigo, remetendo às primeiras descobertas letais da magia. Está firmemente estabelecido nos mundos de D&D, com várias tradições dedicadas ao seu complexo estudo.</p>
<p>As tradições arcanas mais comuns no multiverso envolvem as escolas de magia. Magos, através das eras, catalogaram milhares de magias, agrupando-as em oito categorias chamadas escolas. Em alguns lugares, essas tradições são literalmente escolas. Em outras instituições, elas funcionam mais como departamentos acadêmicos, com faculdades rivais competindo por estudantes e financiamentos. Mesmo os magos que treinam aprendizes na solidão de suas próprias torres, utilizam essa divisão da magia em escolas como um instrumento pedagógico, já que as magias de cada escola requerem um domínio de técnicas diferentes.</p>
<h2>Escola de Evocação</h2>
<p>Você foca seu estudo para criar poderosos efeitos elementais, como um frio cortante, uma chama intensa, um trovão estrondoso, um relâmpago devastador e ácido ardente. Alguns evocadores encontram emprego nas forças militares, servindo como artilharia para explodir fileiras inimigas de longe. Outros usam seu poder espetacular para proteger os fracos, enquanto alguns buscam o ganho próprio como bandidos, aventureiros ou aspirantes de tiranos.</p>
<h3>Características da Escola de Evocação</h3>
<p>2º Nível: {Evocação Instruída} {Esculpir Magias}</p>
<p>6º Nível: {Truque Potente}</p>
<p>10º Nível: {Evocação Potencializada}</p>
<p>14º Nível: {Sobrecarga}</p>`,name:"Mago"},Rogue:{description:`<p>Como um ladino, você adquire as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de ladino<br><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d8 (ou 5) + seu modificador de Constituição por nível de ladino após o 1°</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves<br><strong>Armas:</strong> Armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas<br><strong>Ferramentas:</strong> Ferramentas de ladrão<br><strong>Salvaguardas:</strong> Destreza, Inteligência<br><strong>Perícias:</strong> Escolha quatro dentre Acrobacia, Atletismo, Atuação, Enganação, Furtividade, Intimidação, Intuição, Investigação, Percepção, Persuasão e Prestidigitação</p>
<h3>Equipamento</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente:</p>
<ul>
<li>(a) uma rapieira ou (b) uma espada longa</li>
<li>(a) um arco curto e uma aljava com 20 flechas ou (b) uma espada curta</li>
<li>(a) um pacote de assaltante ou (b) um pacote de aventureiro ou (c) um pacote de explorador</li>
<li>(a) Armadura de couro, duas adagas e ferramentas de ladrão</li>
</ul>
<h1>O Ladino</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Ataque Furtivo</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td>1d6</td>
<td>{Especialização}, {Ataque Furtivo}, {Gíria de Ladrão}</td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td>1d6</td>
<td>{Ação Ardilosa}</td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>2d6</td>
<td>{Arquétipo de Ladino}</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td>2d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>3d6</td>
<td>{Esquiva Sobrenatural}</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>3d6</td>
<td>{Especialização}</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>4d6</td>
<td>{Evasão}</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td>4d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>5d6</td>
<td>Característica de Arquétipo de Ladino</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>5d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>6d6</td>
<td>{Talento Confiável}</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td>6d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>7d6</td>
<td>Característica de Arquétipo de Ladino</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>7d6</td>
<td>{Sentido Cego}</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>8d6</td>
<td>{Mente Escorregadia}</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td>8d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>9d6</td>
<td>Característica de Arquétipo de Ladino</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td>9d6</td>
<td>{Elusivo}</td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td>10d6</td>
<td>{Aumento no Valor de Atributo}</td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td>10d6</td>
<td>{Golpe de Sorte}</td>
</tr>
</tbody>
</table>
<h1>Arquétipos de Ladino</h1>
<p>Ladinos possuem muitas características em comum, incluindo a ênfase no aperfeiçoamento de suas perícias, na precisão e aproximação mortal em combate, e nos seus reflexos cada vez mais rápidos. Mas, diferentes ladinos orientam seus talentos em direções variadas, personificadas pelos vários arquétipos de ladino. Seu arquétipo escolhido reflete o seu foco – não necessariamente a indicação de sua profissão, mas a descrição de suas técnicas preferidas.</p>
<h2>Ladrão</h2>
<p>Você aprimorou suas habilidades na arte do furto de pequenos itens. Gatunos, bandidos, batedores de carteira e outros criminosos geralmente seguem esse arquétipo, mas também aqueles ladinos que preferem se ver como caçadores de tesouro profissionais, exploradores de masmorras e investigadores. Além de aprimorar sua agilidade e furtividade, você aprende perícias úteis para desbravar ruínas antigas, ler idiomas incomuns e usar itens mágicos que normalmente não poderia.</p>
<h3>Características de Ladrão</h3>
<p>3º Nível: {Mãos Rápidas} {Andarilho de Telhados}</p>
<p>9º Nível: {Furtividade Suprema}</p>
<p>13º Nível: {Usar Instrumento Mágico}</p>
<p>17º Nível: {Reflexos de Ladrão}</p>`,name:"Ladino"},Druid:{description:`<p>Ao criar um aventureiro druida, você recebe as seguintes características de classe.</p>
<h3>Pontos de Vida</h3>
<p><strong>Dado de Vida:</strong> 1d8 por nível de druida<br><strong>Pontos de Vida no 1º Nível:</strong> 8 + seu modificador de Constituição<br><strong>Pontos de Vida a partir do 2º Nível:</strong> 1d8 (ou 5) + seu modificador de Constituição por nível de druida</p>
<h3>Proficiências</h3>
<p><strong>Armaduras:</strong> Armaduras leves, armaduras médias e escudos (druidas não usam armaduras ou escudos de metal)<br><strong>Armas:</strong> Adagas, azagaias, bastões, cimitarras, dardos, foices, fundas, lanças e porretes<br><strong>Ferramentas:</strong> kit de herbalisrno<br><strong>Salvaguardas:</strong> Inteligência e Sabedoria<br><strong>Perícias:</strong> Escolha duas entre Arcanismo, Intuição, Lidar com Animais, Medicina, Natureza, Percepção, Religião e Sobrevivência</p>
<h3>Equipamentos</h3>
<p>Você começa com o seguinte equipamento, além daquele que recebe do seu antecedente: </p>
<ul>
<li>(a) um escudo de madeira ou (b) qualquer arma simples</li>
<li>(a) uma cimitarra ou (b) qualquer arma simples de combate corpo a corpo</li>
<li>Armadura de couro, kit de explorador e um foco druídico</li>
</ul>
<h1>Avançando com o Druida</h1>
<table>
<thead>
<tr>
<td>Nível</td>
<td>Bônus de Proficiência</td>
<td>Características de Classe</td>
</tr>
</thead>
<tbody>
<tr>
<td>1º</td>
<td>+2</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="LzJ5ayHt0OlSVGxi"><i class="fas fa-suitcase"></i> Druídico</a>, <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="i6tPm3FNK13Ftc9v"><i class="fas fa-suitcase"></i> Conjuração</a></td>
</tr>
<tr>
<td>2º</td>
<td>+2</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="swK0r5TOIxredxWS"><i class="fas fa-suitcase"></i> Forma Selvagem (ND Máx 1/4)</a>, <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="u6Du2P9s81SWuGbi"><i class="fas fa-suitcase"></i> Círculo Druídico</a></td>
</tr>
<tr>
<td>3º</td>
<td>+2</td>
<td>Espaço de Magia de 2º Nível</td>
</tr>
<tr>
<td>4º</td>
<td>+2</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="swK0r5TOIxredxWS"><i class="fas fa-suitcase"></i> Forma Selvagem (ND Máx 1/2)</a>, <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="s0Cc2zcX0JzIgam5"><i class="fas fa-suitcase"></i> Aumento no Valor de Atributo</a></td>
</tr>
<tr>
<td>5º</td>
<td>+3</td>
<td>Espaço de Magia de 3º Nível</td>
</tr>
<tr>
<td>6º</td>
<td>+3</td>
<td>Característica de Círculo Druídico</td>
</tr>
<tr>
<td>7º</td>
<td>+3</td>
<td>Espaço de Magia de 4º Nível</td>
</tr>
<tr>
<td>8º</td>
<td>+3</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="swK0r5TOIxredxWS"><i class="fas fa-suitcase"></i> Forma Selvagem (ND Máx 1)</a>, <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="s0Cc2zcX0JzIgam5"><i class="fas fa-suitcase"></i> Aumento no Valor de Atributo</a></td>
</tr>
<tr>
<td>9º</td>
<td>+4</td>
<td>Espaço de Magia de 5º Nível</td>
</tr>
<tr>
<td>10º</td>
<td>+4</td>
<td>Característica de Círculo Druídico</td>
</tr>
<tr>
<td>11º</td>
<td>+4</td>
<td>Espaço de Magia de 6º Nível</td>
</tr>
<tr>
<td>12º</td>
<td>+4</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="s0Cc2zcX0JzIgam5"><i class="fas fa-suitcase"></i> Aumento no Valor de Atributo</a></td>
</tr>
<tr>
<td>13º</td>
<td>+5</td>
<td>Espaço de Magia de 7º Nível</td>
</tr>
<tr>
<td>14º</td>
<td>+5</td>
<td>Característica de Círculo Druídico</td>
</tr>
<tr>
<td>15º</td>
<td>+5</td>
<td>Espaço de Magia de 8º Nível</td>
</tr>
<tr>
<td>16º</td>
<td>+5</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="s0Cc2zcX0JzIgam5"><i class="fas fa-suitcase"></i> Aumento no Valor de Atributo</a></td>
</tr>
<tr>
<td>17º</td>
<td>+6</td>
<td>Espaço de Magia de 9º Nível</td>
</tr>
<tr>
<td>18º</td>
<td>+6</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="cVDEQo0ow1WJT7Wl"><i class="fas fa-suitcase"></i> Corpo Atemporal</a>, <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="xvgPu1O57DgXCM86"><i class="fas fa-suitcase"></i> Magias Bestiais</a></td>
</tr>
<tr>
<td>19º</td>
<td>+6</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="s0Cc2zcX0JzIgam5"><i class="fas fa-suitcase"></i> Aumento no Valor de Atributo</a></td>
</tr>
<tr>
<td>20º</td>
<td>+6</td>
<td><a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="ip4bvmGoz3qkoqes"><i class="fas fa-suitcase"></i> Arquidruida</a></td>
</tr>
</tbody>
</table>
<h3>Plantas e Madeiras Sagradas</h3>
<p>Um druida considera certas plantas como sagradas, especialm@nte o amieiro, o freixo, o vidoeiro, o sabugueiro, a avelã, o azevinho, o junípero, o visco, o carvalho, a sorva, o salgueiro e o teixo. Os druidas costumam usar essas plantas como parte de seus fo\\cos de conjuração, a eles incorporando folhas de carvalho, teixo ou ramos de visco, por exemplo.</p>
<p>Da mesma forma, usam essas madeiras para fazer outros objetos, como armas e escudos. O teixo é associado à morte e ao renascimento e, por isso, empunhaduras de cimitarras ou foices podem ser esculpidas a partir dessas madeiras. O freixo é associado à vida e o carvalho à força. Essas madeiras fazem excelentes cabos, hastes ou armas completas, como clavas ou bastões, bem como escudos. O amieiro é associado ao ar, podendo ser usado para armas de arremesso, como dardos ou azagaias.</p>
<p>Druidas de regiões que não possuem as plantas aqui descritas selecionam outras, mas com propósitos semelhantes. Por exemplo, um druida de uma região desértica pode utilizar de plantas como o agave e o cacto.</p>
<h3>O Druida e os Deuses</h3>
<p>Alguns druidas veneram as próprias forças da natureza, mas, a maioria dos druidas são devotados de uma das muitas divindades da natureza adoradas no multiverso (a lista de deuses encontrada no <a class="entity-link" draggable="true" data-pack="dnd5e.rules" data-id="2JNtWRo7wMq08bXn"><i class="fas fa-book-open"></i> apêndice B</a> inclui muitos desses deuses). A adoração desses deuses é, muitas vezes, considerada uma tradição mais antiga que as crenças de clérigos e pessoas urbanizadas. </p>
<h1>Círculos Druídicos</h1>
<h2>Círculo da Terra</h2>
<p>O Círculo da Terra é composto por místicos e sábios que guardam o conhecimento e os ritos ancestrais por meio de uma vasta tradição oral. Esses druidas se reúnem em círculos de árvores ou pedras sagradas para sussurrar segredos primais em Druídico. Os membros mais sábios do círculo presidem como sumos sacerdotes das comunidades que preservam a Velha Fé, além de servirem como consultores para seus governantes. Na qualidade de membro do círculo, sua magia é influenciada pelo terreno onde você foi iniciado nos ritos misteriosos da Terra.</p>
<h3>Características do Círculo da Terra</h3>
<p>2º Nível: <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="lT8GsPOPgRzDC3QJ"><i class="fas fa-suitcase"></i> Truque Bônus</a> <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="wKdRtFsvGfMKQHLY"><i class="fas fa-suitcase"></i> Recuperação Natural</a></p>
<p>3º 5º, 7º, 9º Nível: <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="YiK59gWSlcQ6Mbdz"><i class="fas fa-suitcase"></i> Magias de Círculo Druídico</a></p>
<p>6º Nível: <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="3FB25qKxmkmxcxuC"><i class="fas fa-suitcase"></i> Passo da Terra</a></p>
<p>10º Nível: <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="OTvrJSJSUgAwXrWX"><i class="fas fa-suitcase"></i> Proteção Natural</a></p>
<p>14º Nível: <a class="entity-link" draggable="true" data-pack="dnd5e.classfeatures" data-id="EuX1kJNIw1F68yus"><i class="fas fa-suitcase"></i> Santuário Natural</a></p>`,name:"Druida"}},Xe={label:We,entries:Ke},Ze="Traços raciais (SRD)",Ye={Dwarf:{description:`<p><em>Um personagem anão possui uma variedade de habilidades inatas, parte integrante da natureza dos anões.</em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Constituição aumenta em 2.</p>
<p><em><strong>Idade.</strong></em> Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem 350 anos.</p>
<p><em><strong>Tendência.</strong></em> A maioria dos anões é leal, pois acreditam firmemente nos benefícios de uma sociedade bem organizada. Eles tendem para o bem, com um forte senso de honestidade e uma crença de que todos merecem compartilhar os benefícios de uma ordem social justa.</p>
<p><em><strong>Tamanho. </strong></em>Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 kg. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento. </strong></em>Seu deslocamento base de caminhada é de 7,5 metros. Seu deslocamento não é reduzido quando estiver usando armadura pesada.</p>
<p><em><strong>Visão no Escuro.</strong></em> Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Resiliência Anã.</strong></em> @Compendium[dnd5e.races.ufysTkqet2Ctmtyi]{Resiliência Anã} Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno.</p>
<p><em><strong>Treinamento Anão em Combate.</strong></em> Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.</p>
<p><em><strong>Proficiência com Ferramentas.</strong></em> Você tem proficiência em uma ferramenta de artesão à sua escolha entre: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.</p>
<p><em><strong>Especialização em Rochas.</strong></em> @Compendium[dnd5e.races.mQPZDRbUhgYTbXKa]{Especialização em Rochas} Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.</p>
<p><em><strong>Idiomas.</strong></em> Você pode falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o anão falar.</p>`,source:"LdJ pg. 20",name:"Anão"},"High Elf":{description:`<p><em>Como alto elfo, você possui uma mente afiada e um domínio da magia básico. Em muitos dos mundos de D&D, existem dois tipos de altos elfos. Um tipo são arrogantes e reclusos, acreditando serem superiores aos não elfos e até mesmo a outros elfos. O outro tipo são mais comuns e amigáveis, e muitas vezes encontrados entre humanos e outras raças. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Inteligência aumenta em 1.</p>
<p><em><strong>Treinamento Élfico com Armas.</strong></em> Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.</p>
<p><em><strong>Truque.</strong></em> Você conhece um truque, à sua escolha, da lista de truques do mago. Inteligência é a habilidade usado para conjurar este truque.</p>
<p><em><strong>Idioma Adicional.</strong></em> Você pode falar, ler e escrever um idioma adicional à sua escolha.</p>`,source:"LdJ pg. 23",name:"Alto Elfo"},Halfling:{description:`<p><em>Seu halfling possui uma série de características em comum com todos os outros halflings. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Destreza aumenta em 2.</p>
<p><em><strong>Idade.</strong></em> Um halfling atinge a idade adulta aos 20 anos e pode chegar a 150 anos.</p>
<p><em><strong>Tendência.</strong></em> A maioria dos halflings é leal e boa. Via de regra, eles possuem um bom coração e são amáveis, odeiam ver o sofrimento dos outros e não toleram a opressão. Eles também são muito ordeiros e tradicionais, fortemente apegados à sua comunidade e ao conforto de suas antigas tradições.</p>
<p><em><strong>Tamanho.</strong></em> Halflings medem cerca de 0,90 metro de altura e pesam aproximadamente 20 kg. Seu tamanho é Pequeno.</p>
<p><em><strong>Deslocamento. </strong></em>Seu deslocamento base de caminhada é 7,5 metros.</p>
<p><em><strong>Sortudo.</strong></em> @Compendium[dnd5e.races.LOMdcNAGWh5xpfm4]{Sortudo} Quando você obtiver um 1 natural em uma jogada de ataque, teste de habilidade ou teste de resistência, você pode jogar de novo o dado e deve utilizar o novo resultado.</p>
<p><em><strong>Bravura.</strong></em> @Compendium[dnd5e.races.7Yoo9hG0hfPSmBoC]{Bravura} Você tem vantagem em testes de resistência contra ficar amedrontado.</p>
<p><em><strong>Agilidade Halfling.</strong></em> @Compendium[dnd5e.races.PqxZgcJzp1VVgP8t]{Agilidade Halfling} Você pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.</p>
<p><em><strong>Idiomas.</strong></em> Você pode falar, ler e escrever Comum e Halfling. A linguagem Halfling não é secreta, mas os halflings são relutantes em compartilhá-la com os outros. Eles escrevem muito pouco, por isso eles não possuem uma literatura rica. No entanto, sua tradição oral é muito forte. Quase todos os halflings falam o idioma Comum para conversar com as pessoas das terras que habitam, ou através das quais eles estejam viajando.</p>`,source:"LdJ pg. 28",name:"Halfling"},"Half-Elf":{description:`<p><em>Seu personagem meio-elfo possui algumas qualidades em comum com os elfos e algumas são exclusivas dos meio-elfos. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Carisma aumenta em 2 e outros dois valores de habilidade, à sua escolha, aumentam em 1.</p>
<p><em><strong>Idade.</strong></em> Meio-elfos atingem a maturidade ao mesmo tempo que os humanos atingem a idade adulta, por volta dos 20 anos. Eles vivem muito mais que os humanos, no entanto, raramente ultrapassam os 180 anos.</p>
<p><em><strong>Tendência.</strong></em> Meio-elfos compartilham a veia caótica da sua herança élfica. Eles valorizam tanto a sua liberdade quanto sua expressão criativa, não demonstrando qualquer apresso por líderes ou seguidores. Eles se irritam com regras, ressentindo com exigências de outros e, as vezes, se provam incertos, ou pelo menos, imprevisíveis.</p>
<p><em><strong>Tamanho.</strong></em> Meio-elfos tem aproximadamente a mesma altura dos humanos, variando entre 1,50 metro e 1,80 metro. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento.</strong></em> Seu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Visão no Escuro.</strong></em> r no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Ancestral Feérico.</strong></em> @Compendium[dnd5e.races.cnTbpPPeGW7vGjOV]{Ancestral Feérico} Você possui vantagem em testes de resistência contra encantamento e magia não pode colocar você pra dormir.</p>
<p><em><strong>Versatilidade em Perícia.</strong></em> Você ganha proficiência em duas perícias, à sua escolha.</p>
<p><em><strong>Idiomas.</strong></em> Você sabe falar, ler e escrever Comum, Élfico e um idioma adicional, à sua escolha.</p>`,source:"LdJ pg. 39",name:"Meio-Elfo"},Dragonborn:{description:`<p><em>Sua herança dracônica se manifesta em vários traços que você partilha com outros draconatos. </em></p>
<p><em><strong>Aumento no Valor de Habilidade. </strong></em>Seu valor de Força aumenta em 2 e seu valor de Carisma aumenta em 1.</p>
<p><em><strong>Idade.</strong></em> Draconatos jovens crescem rapidamente. Eles caminham horas após nascerem, adquirindo o tamanho e desenvolvimento semelhante a de uma criança humana de 10 anos com 3 anos de idade e alcançam a maturidade aos 15. Eles costumam viver até os 80.</p>
<p><em><strong>Tendência.</strong></em> Os draconatos tendem aos extremos, realizando uma escolha consciente de um lado ou do outro da guerra cósmica entre o bem e o mal. A maioria dos draconatos é boa, mas os que vão para o lado de Tiamat podem se tornar vilões terríveis.</p>
<p><em><strong>Tamanho.</strong></em> Os draconatos são mais altos e mais pesados que os humanos, geralmente possuindo mais de 1,80 metro e normalmente pesando mais de 125 kg. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento.</strong></em> Seu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Ancestral Dracônico.</strong></em> Você possui um ancestral dracônico. Escolha um tipo de dragão da tabela Ancestral Dracônico. Sua arma de sopro e resistência a dano são determinadas pelo tipo de dragão, como mostrado na tabela.</p>
<table>
<thead>
<tr>
<td>Dragão</td>
<td>Tipo de Dano</td>
<td>Arma de Sopro</td>
</tr>
</thead>
<tbody>
<tr>
<td>Negro</td>
<td>Acido</td>
<td>Linha de 1,5m/9m (teste de Des)</td>
</tr>
<tr>
<td>Azul</td>
<td>Elétrico</td>
<td>Linha de 1,5m/9m (teste de Des)</td>
</tr>
<tr>
<td>Latão</td>
<td>Fogo</td>
<td>Linha de 1,5m/9m (teste de Des)</td>
</tr>
<tr>
<td>Bronze</td>
<td>Elétrico</td>
<td>Linha de 1,5m/9m (teste de Des)</td>
</tr>
<tr>
<td>Cobre</td>
<td>Acido</td>
<td>Linha de 1,5m/9m (teste de Des)</td>
</tr>
<tr>
<td>Ouro</td>
<td>Fogo</td>
<td>Cone de 4,5m (teste de Des)</td>
</tr>
<tr>
<td>Verde</td>
<td>Veneno</td>
<td>Cone de 4,5m (teste de Con)</td>
</tr>
<tr>
<td>Vermelho</td>
<td>Fogo</td>
<td>Cone de 4,5m (teste de Des)</td>
</tr>
<tr>
<td>Prata</td>
<td>Frio</td>
<td>Cone de 4,5m (teste de Con)</td>
</tr>
<tr>
<td>Branco</td>
<td>Frio</td>
<td>Cone de 4,5m (teste de Con)</td>
</tr>
</tbody>
</table>
<p><em><strong>Arma de Sopro. </strong></em>@Compendium[dnd5e.races.KL7wx9Q8XNJQir0k]{Arma de Sopro} Você pode usar uma ação para exalar energia destrutiva. Seu ancestral dracônico determina o tamanho, formado e tipo de dano que você expele.</p>
<p>Quando você usa sua arma de sopro, cada criatura na área exalada deve realizar um teste de resistência, o tipo do teste é determinado pelo seu ancestral dracônico. A CD do teste de resistência é 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano num fracasso e metade desse dano num sucesso. O dano aumenta para 3d6 no 6° nível, 4d6 no 11° nível e 5d6 no 16° nível.</p>
<p>Depois de usar sua arma de sopro, você não poderá utilizá-la novamente até completar um descanso curto ou longo.</p>
<p><em><strong>Resistência a Dano.</strong></em> @Compendium[dnd5e.races.XxCuhIk6hAu6rNB0]{Resistência a Dano} Você possui resistência ao tipo de dano associado ao seu ancestral dracônico.</p>
<p><em><strong>Idiomas. </strong></em>Você pode falar, ler e escrever Comum e Dracônico. O idioma Dracônico é conhecido por ser uma das mais antigas línguas e ainda é usado no estudo de magia. A linguagem soa áspera para a maioria das criaturas, incluindo várias consoantes e silabas firmes.</p>`,source:"LdJ pg. 34",name:"Draconato"},"Rock Gnome":{description:`<p><em>Como um gnomo das rochas, você possui uma inventividade e resistência naturais acima dos outros gnomos.</em></p>
<p><em><strong>Aumento no Valor de Habilidade. </strong></em>Seu valor de Constituição aumenta em 1.</p>
<p><em><strong>Conhecimento de Artífice.</strong></em> @Compendium[dnd5e.races.OQA1sHxKnSJq01dL]{Conhecimento de Artífice} Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente use.</p>
<p><em><strong>Engenhoqueiro.</strong></em> @Compendium[dnd5e.races.koRPOLtj8XAFMwnW]{Engenhoqueiro} Você possui proficiência com ferramentas de artesão (ferramentas de engenhoqueiro). Usando essas ferramentas, você pode gastar 1 hora e 10 po em materiais para construir um mecanismo Miúdo (CA 5, 1 pv). O mecanismo para de funcionar após 24 horas (a não ser que você gaste 1 hora reparando-o para manter o mecanismo funcionando), ou quando você usa sua ação para desmantelá-lo; nesse momento, você pode recuperar o material usado para criá-lo. Você pode ter até três desses mecanismos ativos ao mesmo tempo.</p>
<p>Quando você criar um mecanismo, escolha uma das seguintes opções:</p>
<p><em>Brinquedo Mecânico. </em> Esse brinquedo é um animal, monstro ou pessoa mecânica, como um sapo, rato, pássaro, dragão ou soldado. Quando colocado no chão, o brinquedo se move 1,5 metro pelo chão em cada um dos seus turnos em uma direção aleatória. Ele faz barulhos apropriados a criatura que ele representa.</p>
<p><em>Isqueiro Mecânico.</em> O mecanismo produz uma miniatura de chama, que você pode usar para acender uma vela, tocha ou fogueira. Usar o mecanismo requer sua ação.</p>
<p><em>Caixa de Música.</em> Quando aberta, essa caixa de música toca uma canção a um volume moderado. A caixa para de tocar quando alcança o fim da música ou quando é fechada.</p>`,source:"LdJ pg. 36",name:"Gnomo das Rochas"},"Hill Dwarf":{description:`<p><em>Como um anão da colina, você tem sentidos aguçados, maior intuição e notável resiliência. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Sabedoria aumenta em 1.</p>
<p><em><strong>Tenacidade Anã.</strong></em> Seu máximo de pontos de vida aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.</p>`,name:"Anão da Colina"},Tiefling:{description:`<p><em>Os tieflings compartilham certos traços raciais como resultado de sua descendência infernal. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Inteligência aumenta em 1 e seu valor de Carisma aumenta em 2.</p>
<p><em><strong>Idade.</strong></em> Os tieflings amadurecem ao mesmo tempo que os humanos, mas vivem alguns anos a mais.</p>
<p><em><strong>Tendência.</strong></em> Tieflings não possuem uma tendência inata ao mal, mas muitos acabam por abraçá-lo. Maligno ou não, uma natureza independente inclina a maioria dos tieflings ao alinhamento caótico.</p>
<p><em><strong>Tamanho.</strong></em> Os tieflings possuem o mesmo tamanho e compleição dos humanos. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento. </strong></em>YSeu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Visão no Escuro.</strong></em> Graças a sua herança infernal, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Resistência Infernal. </strong></em>@Compendium[dnd5e.races.q71Pe1F8RRtEJt8Q]{Resistência Infernal} Você possui resistência a dano de fogo.</p>
<p><em><strong>Legado Infernal.</strong></em> @Compendium[dnd5e.races.wJc88B8OP1y1xzMw]{Legado Infernal} Você conhece o truque @Compendium[dnd5e.spells.MUO1uYN7JR1hm4dR]{Taumaturgia}. Quando você atingir o 3° nível, você poderá conjurar a magia @Compendium[dnd5e.spells.22dPoeXfaaAv4K3h]{Repreensão Infernal} como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia @Compendium[dnd5e.spells.S7VbUetIfVT7B6Eq]{Escuridão}. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.</p>
<p><em><strong>Idiomas.</strong></em> Você sabe falar, ler e escrever Comum e Infernal. </p>`,source:"LdJ pg. 43",name:"Tiefling"},"Fey Ancestry":{description:"<p>Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.</p>",source:"LdJ pg. 23, 39",name:"Ancestral Feérico"},Gnome:{description:`<p><em>Seu personagem gnomo possui certas características em comum com todos os outros gnomos. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Inteligência aumenta em 2.</p>
<p><em><strong>Idade.</strong></em> Gnomos amadurecem a mesma proporção que os humanos e, a maioria, atinge a idade adulta por volta dos 40 anos. Eles podem viver entre 350 e 500 anos.</p>
<p><em><strong>Tendência.</strong></em> Os gnomos geralmente são bons. Os que tendem para a ordem são sábios, engenheiros, pesquisadores, escolásticos, investigadores ou inventores. Os que tendem ao caos são menestréis, engenhoqueiros, andarilhos ou joalheiros caprichosos. Gnomos são bons de coração e, até mesmo os trapaceiros entre eles tendem a ser mais brincalhões que perversos.</p>
<p><em><strong>Tamanho. </strong></em>Os gnomos tem entre 0,90 e 1,20 metro e seu peso médio é de 20 kg. Seu tamanho é Pequeno.</p>
<p><em><strong>Visão no Escuro. </strong></em>Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Esperteza Gnômica. </strong></em>@Compendium[dnd5e.races.EHhr9umJ5kxJFCQH]{Esperteza Gnômica} Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.</p>
<p><em><strong>Idiomas.</strong></em> Você sabe falar, ler e escrever Comum e Gnômico. A linguagem Gnômica, que usa o alfabeto Anão, é conhecida por suas técnicas de dissertação e por seus catálogos de conhecimento sobre o mundo natural.</p>`,source:"LdJ pg. 36",name:"Gnomo"},Tinker:{description:`<p>Você possui proficiência com ferramentas de artesão (ferramentas de engenhoqueiro). Usando essas ferramentas, você pode gastar 1 hora e 10 po em materiais para construir um mecanismo Miúdo (CA 5, 1 pv). O mecanismo para de funcionar após 24 horas (a não ser que você gaste 1 hora reparando-o para manter o mecanismo funcionando), ou quando você usa sua ação para desmantelá-lo; nesse momento, você pode recuperar o material usado para criá-lo. Você pode ter até três desses mecanismos ativos ao mesmo tempo. Quando você criar um mecanismo, escolha uma das seguintes opções:</p>
<p><em>Brinquedo Mecânico:</em> Esse brinquedo é um animal, monstro ou pessoa mecânica, como um sapo, rato, pássaro, dragão ou soldado. Quando colocado no chão, o brinquedo se move 1,5 metro pelo chão em cada um dos seus turnos em uma direção aleatória. Ele faz barulhos apropriados a criatura que ele representa.</p>
<p><em>Isqueiro Mecânico:</em> O mecanismo produz uma miniatura de chama, que você pode usar para acender uma vela, tocha ou fogueira. Usar o mecanismo requer sua ação.</p>
<p><em>Caixa de Música:</em> Quando aberta, essa caixa de música toca uma canção a um volume moderado. A caixa para de tocar quando alcança o fim da música ou quando é fechada.</p>`,source:"LdJ pg. 37",name:"Engenhoqueiro"},"Half-Orc":{description:`<p><em>Seu personagem meio-orc possui certas características derivadas da sua ancestralidade orc. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1. </p>
<p><em><strong>Idade.</strong></em> Os meio-orcs amadurecem um pouco antes dos humanos, atingindo a idade adulta aos 14 anos. Eles envelhecem notavelmente mais rápido e, raramente, vivem mais de 75 anos.</p>
<p><em><strong>Tendência.</strong></em> Meio-orcs tem uma tendência inata ao caos devido aos seus parentes orcs e não são fortemente inclinados ao bem. Meio-orcs que cresceram entre orcs e desejam viver e estão dispostos a passar sua vida entre eles, tendem a ser malignos.</p>
<p><em><strong>Tamanho.</strong></em> Meio-orcs são de certa forma maiores e mais largos que os humanos, medindo entre 1,80 metro e 2,10 metros. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento.</strong></em> Seu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Visão no Escuro.</strong></em> Graças ao seu sangue orc, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Ameaçador.</strong></em> Você adquire proficiência na perícia Intimidação..</p>
<p><em><strong>Resistência Implacável.</strong></em> @Compendium[dnd5e.races.97c8i9Z28thvZuA8]{Resistência Implacável} Quando você é reduzido a 0 pontos de vida mas não é completamente morto, você pode voltar para 1 ponto de vida. Você não pode usar essa característica novamente até completar um descanso longo.</p>
<p><em><strong>Ataques Selvagens.</strong></em> @Compendium[dnd5e.races.0kUsT4sMUOr5FcoX]{Ataques Selvagens} Quando você atinge um ataque crítico com uma arma corpo-a-corpo, você pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra causado pelo acerto crítico.</p>
<p><em><strong>Idiomas.</strong></em> Você sabe falar, ler e escrever Comum, Orc. O Orc é um idioma ríspido, possuindo uma linguagem de consoantes duras. Ele não possui alfabeto próprio, mas usa o alfabeto Anão.</p>`,source:"LdJ pg. 41",name:"Meio-Orc"},Elf:{description:`<p><em>Seu elfo tem uma variedade de habilidades naturais, resultado de milhares de anos de refinamento élfico. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Seu valor de Destreza aumenta em 2.</p>
<p><em><strong>Idade.</strong></em> Embora os elfos atinjam a maturidade física com praticamente a mesma idade dos humanos, a compreensão élfica da idade adulta vai além da maturidade física, abrangendo sua experiência sobre o mundo. Um elfo tipicamente assume a idade adulta e um nome adulto com cerca de 100 anos de idade e pode viver 750 anos.</p>
<p><em><strong>Tendência</strong></em>. Elfos amam a liberdade, a diversidade e a expressão pessoal, então eles inclinam-se forte e suavemente para aspectos do caos. Eles valorizam e protegem a liberdade dos outros como a sua própria, e são geralmente mais bondosos que o contrário. Os drow são exceção. Seu exílio no Subterrâneo fez deles perversos e perigosos.</p>
<p><em><strong>Tamanho.</strong></em> Elfos medem entre 1,50 a 1,80 metro de altura e possuem constituição delgada. Seu tamanho é Médio.</p>
<p><em><strong>Deslocamento.</strong></em> Seu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Visão no Escuro.</strong></em> Acostumado às florestas crepusculares e ao céu noturno, você possui uma visão superior em condições de escuridão e na penumbra. Você pode enxergar na penumbra a até 18 metros como se fosse na luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.</p>
<p><em><strong>Sentidos Aguçados.</strong></em> Você tem proficiência na perícia Percepção.</p>
<p><em><strong>Ancestral Feérico.</strong></em> @Compendium[dnd5e.races.cnTbpPPeGW7vGjOV]{Ancestral Feérico} Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.</p>
<p><em><strong>Transe.</strong></em> Elfos não precisam dormir. Ao invés disso, eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. (A palavra em idioma comum para tal meditação é "transe".) Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática. Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.</p>
<p><em><strong>Idiomas.</strong></em> Você pode falar, ler e escrever Comum e Élfico. O Élfico é um idioma fluido, com entonações sutis e gramática complexa. A literatura élfica é rica e diversa, e suas canções e poemas são famosos entre outras raças. Muitos bardos aprendem essa língua para que possam adicionar canções élficas ao seu repertório.</p>`,source:"LdJ pg. 23",name:"Elfo"},Human:{description:`<p><em>É difícil fazer generalizações sobre os humanos, mas seu humano possui as seguintes características. </em></p>
<p><em><strong>Aumento no Valor de Habilidade.</strong></em> Todos os seus valores de habilidade aumentam em 1.</p>
<p><em><strong>Idade.</strong></em> Os humanos chegam à idade adulta no final da adolescência e vivem menos de um século.</p>
<p><em><strong>Tendência. </strong></em>Os humanos não possuem inclinação a nenhuma tendência em especial. Os melhores e os piores são encontrados entre eles.</p>
<p><em><strong>Tamanho.</strong></em> Os humanos variam muito em altura e peso, podem ter quase 1,50 metro ou mais de 1,80 metro. Independentemente da sua posição entre esses valores, o seu tamanho é Médio.</p>
<p><em><strong>Deslocamento.</strong></em> Seu deslocamento base de caminhada é 9 metros.</p>
<p><em><strong>Idiomas. </strong></em>Você pode falar, ler e escrever Comum e outro idioma adicional, à sua escolha. Os humanos normalmente aprendem os idiomas dos povos que convivem, incluindo dialetos obscuros. Eles gostam de rechear seu discurso com palavras emprestadas de outras línguas: xingamentos orcs, expressões musicais élficas, frases militares anãs e outros.</p>`,source:"LdJ pg. 31",name:"Humano"}},ao={source:"data.source",range:{path:"data.range",converter:"range"},target:{path:"data.target",converter:"target"}},eo={label:Ze,entries:Ye,mapping:ao},oo="Magias (SRD)",ro={Polymorph:{description:`<p>A magia transforma uma criatura à sua vista, no alcance da magia, em uma nova forma. Uma criatura não voluntária deve fazer uma salvaguarda de Sabedoria para evitar o efeito. A magia não tem efeito sobre um Metamorfo ou em uma criatura com 0 pontos de vida.</p>
<p>A transformação permanece enquanto a magia durar, até o alvo cair a 0 pontos de vida ou morrer. A nova forma pode ser qualquer fera cujo nível de desafio seja igual ou menor que o do alvo (ou do nível do alvo, caso este não tenha um nível de desafio). As estatísticas de jogo do alvo, incluindo valores de habilidades mentais, são substituídas pelas estatísticas da fera escolhida. Ele mantém seu alinhamento e personalidade.</p>
<p>O alvo assume os pontos de vida de sua nova forma. Ao retornar à sua forma original, o alvo também retorna para o mesmo número de pontos de vida que tinha antes de se transformar. Se a transformação se reverter como resultado do alvo ter caído para 0 ponto de vida, todo o excesso de dano será transferido para a sua forma original. Contanto que o excesso de dano não reduza a forma original do alvo a 0 ponto de vida, ele não cai inconsciente.</p>
<p>As ações que o alvo pode realizar são limitadas pela natureza de sua nova forma, e ele não pode falar, conjurar magias ou executar qualquer ação que requeira mãos ou fala.</p>
<p>Os equipamentos do alvo se fundem à sua nova forma. A criatura não pode ativar, usar, segurar ou se beneficiar de qualquer outra maneira de seus equipamentos.</p>`,source:"LdJ pg. 267",material:"um casulo de lagarta",name:"Polimorfia"},"Hunter's Mark":{description:`<p>Escolha uma criatura à sua vista e no alcance e da magia, marcando-a misticamente como sua presa. Enquanto a magia durar, você causa 1d6 pontos de dano adicionais no alvo sempre que o atingir com um ataque armado, e tem vantagem em qualquer teste de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) feito para encontrá-lo. Se os pontos de vida do alvo forem reduzidos a 0 antes desta magia se encerrar, você pode usar uma ação bônus em um turno subsequente seu para marcar uma nova criatura.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia com um espaço de magia de 3º ou 4º círculo, você pode manter a sua concentração por até 8 horas. Ao usar um espaço de magia de 5º círculo ou maior, você pode manter a sua concentração na magia por até 24 horas.</p>`,source:"LdJ pg. 256",name:"Marca do Predador"},"Water Breathing":{description:"<p>Até dez criaturas voluntárias à sua vista e no alcance da magia, ganham a habilidade de respirar embaixo d'água enquanto a magia durar. As criaturas afetadas pela magia ainda conservam sua forma natural de respiração.</p>",source:"LdJ pg. 277",material:"um caniço curto ou um pedaço de palha",name:"Respirar na Água"},"Dispel Magic":{description:`<p>Escolha uma criatura, objeto ou efeito mágico no alcance da magia. Quaisquer magias de 3º círculo ou inferiores que afetam o alvo se encerram. Para cada magia de 4º círculo ou superior que esteja afetando o alvo, faça um teste de atributo usando seu atributo de conjuração. A CD é igual a 10 + o círculo desta magia. Em caso de sucesso, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, você automaticamente encerra os efeitos de uma magia que esteja afetando o alvo, se o círculo da magia for igual ou menor ao círculo do espaço de magia que você usou.</p>`,source:"LdJ pg. 238",name:"Dissipar Magia"},"Resilient Sphere":{description:`<p>Uma esfera de energia cintilante envolve uma criatura ou objeto de tamanho Grande ou menor, no alcance da magia. Uma criatura que estiver na esfera contra a própria vontade deve fazer uma salvaguarda de Destreza. Se falhar, a criatura fica enclausurada enquanto a magia durar.</p>
<p>Nada - nem objetos físicos, energia ou outros efeitos mágicos - pode passar através da barreira, para dentro ou fora, apesar de uma criatura na esfera poder respirar nela. A esfera é imune a todos os danos e qualquer criatura ou objeto dentro dela não pode sofrer dano por ataques ou efeitos provenientes do exterior, tampouco pode causar dano à qualquer coisa do lado de fora.</p>
<p>A esfera não possui peso e é grande o suficiente para conter apenas a criatura ou objeto dentro dela. Uma criatura enclausurada pode usar sua ação, empurrando-se contra a parede da esfera e, assim, rolando-a por até metade do deslocamento da criatura. Da mesma forma, o globo pode ser apanhado e movido por outras criaturas.</p>
<p>Uma magia Desintegrar tendo como alvo o globo, o destrói sem causar dano a qualquer coisa dentro dele.</p>`,material:"um peça hemisférica de cristal transparente e claro e uma peça hemisférica correspondente de goma arábica",name:"Esfera Resiliente"},"Conjure Animals":{description:`<p>Você invoca espíritos feéricos que assumem a forma de feras e surgem em espaços desocupados à sua vista, no alcance da magia. Escolha o que aparece entre as opções a seguir:</p>
<ul>
<li>Uma fera com nível de desafio 2 ou menor.</li>
<li>Duas feras com nível de desafio 1 ou menor.</li>
<li>Quatro feras com nível de desafio 1/2 ou menor.</li>
<li>Oito feras com nível de desafio 1/4 ou menor.</li>
<li>Cada fera também é considerada feérica, desaparecendo ao ficar com 0 pontos de vida ou ao término da magia.</li>
</ul>
<p>As criaturas invocadas são amistosas com você e seus companheiros. Jogue a iniciativa para as criaturas invocadas como um grupo, que tem seu próprio turno. As criaturas invocadas obedecem a qualquer comando verbal que você lhes direcione (não requer ação sua). Caso não seja dado comando algum, elas se defendem de seres hostis, não executando nenhuma outra ação. O DM fornece as estatísticas das criaturas.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando espaços de magia de círculos superiores, escolha uma das opções de invocação apresentadas anteriormente, e mais criaturas aparecem: o dobro com um espaço de 5º círculo, o triplo com um espaço de 7º círculo e o quádruplo com um espaço de 9º círculo.</p>`,source:"LdJ pg. 250",name:"Conjurar Animais"},"Conjure Elemental":{description:`<p>Você invoca um servo elemental. Escolha uma área de ar, terra, fogo ou água, no alcance da magia, que preencha um cubo de 3 metros [10 ft.]. Um elemental de nível de desafio 5 ou menor, apropriado à área escolhida, aparece em um espaço desocupado a até 3 metros [10 ft.] da área escolhida. Por exemplo, um elemental do fogo emerge de uma fogueira, um elemental da terra se ergue do solo. O elemental desaparece ao ficar com 0 pontos de vida ou ao término da magia.</p>
<p>Ele é amistoso com você e seus companheiros enquanto a magia durar. Jogue a iniciativa para o elemental, que tem seus próprios turnos. Ele obedece a qualquer comando verbal que você lhe dê (não requer ação sua), desde que isso não viole o alinhamento dele. Caso não seja dado comando algum, ele se defende de seres hostis, não executando nenhuma outra ação.</p>
<p>Caso a sua concentração seja quebrada, o elemental não desaparece. Em vez disso, você perde o controle sobre o elemental, que se torna hostil para com você e seus companheiros. Um elemental descontrolado não pode ser dispensado, porém desaparece uma hora depois de ter sido invocado. O DM fornece as estatísticas do elemental.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando um espaço de magia de 6º círculo ou superior, o nível de desafio aumenta em 1 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 251",material:"incenso aceso para ar, argila mole para terra, enxofre e fósforo para fogo ou água e areia para água",name:"Invocar Elemental"},Invisibility:{description:`<p>Uma criatura que você tocar torna-se invisível enquanto a magia durar. Qualquer coisa que o alvo estiver usando ou carregando torna-se invisível enquanto estiver em sua posse. A magia se encerra quando o alvo efetuar um ataque ou conjurar uma magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, você pode atingir uma criatura adicional para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 250",material:"um cílio envolto em goma arábica",name:"Invisibilidade"},Glibness:{description:"<p>Enquanto a magia durar, quando você realiza um teste de Carisma, pode substituir o número que tirou por 15. Além disso, não importa o que diga, uma magia que determinaria se você está falando a verdade indica que você está sendo honesto.</p>",source:"LdJ pg. 254",name:"Loquacidade"},Knock:{description:`<p>Escolha um objeto à sua vista e no alcance da magia. O objeto pode ser uma porta, uma caixa, um baú, um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que impeça o acesso.</p>
<p>Um alvo que seja mantido fechado por uma fechadura mundana ou que esteja emperrado ou obstruído torna-se destrancado, desemperrado ou desobstruído. Se o objeto possui várias fechaduras, apenas uma delas é destrancada.</p>
<p>Se você escolher um alvo mantido fechado com tranca arcana, os efeitos sobre ele ficam suprimidos por 10 minutos, durante os quais o alvo pode ser aberto e fechado normalmente.</p>
<p>Ao conjurar a magia, um estrondo, audível a até 90 metros [300 ft.], emana do objeto escolhido como alvo.</p>`,source:"LdJ pg. 216",name:"Arrombar"},"Hellish Rebuke":{description:`<p>Você aponta o seu dedo e a criatura que lhe causou dano é momentaneamente cercada por chamas infernais. Ela deve fazer uma salvaguarda de Destreza. Se falhar, sofre 2d10 pontos de dano ígneo, ou metade do dano em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 277",name:"Repreensão Diabólica"},"Gaseous Form":{description:`<p>Você toca uma criatura voluntária. O alvo, junto com tudo aquilo que estiver usando e carregando, é transformado em uma nuvem de neblina, enquanto a magia durar. A magia termina se os pontos de vida da criatura forem reduzidos a 0. Criaturas incorpóreas não são afetadas.</p>
<p>Enquanto estiver nesta forma, o único método de movimento do alvo é o voo com deslocamento de 3 metros [10 ft.]. O alvo pode entrar e ocupar o espaço de outra criatura. O alvo tem resistência a danos não-mágicos e vantagem em salvaguardas de Força, Destreza e Constituição. O alvo pode passar através de pequenos orifícios, aberturas estreitas e até mesmo por meras rachaduras, embora trate líquidos como se fossem superfícies sólidas. O alvo não é afetado por queda, e continua pairando no ar mesmo quando atordoado ou incapacitado.</p>
<p>Enquanto estiver sob a forma de nuvem, o alvo não pode falar ou manipular objetos, aqueles que estiver carregando ou segurando não podem ser descartados ou usados, e nenhuma forma de interação pode ser estabelecida com eles. O alvo não pode atacar ou conjurar magias.</p>`,source:"LdJ pg. 245",material:"um pouco de gaze e um pouco de fumaça",name:"Forma Gasosa"},Sunbeam:{description:`<p>Um feixe de luz brilhante surge da sua mão em uma linha de 1,5 metro [5 ft.] de largura por 18 metros [60 ft.] de comprimento. Cada criatura na linha deve fazer uma salvaguarda de Constituição. Se falhar, sofre 6d8 pontos de dano radiante e está cega até o seu próximo turno, ou metade do dano e não ficará cega em caso de sucesso. Mortos-vivos e gosmas têm desvantagem nesta salvaguarda.</p>
<p>Você pode criar uma nova linha de radiância com uma ação em qualquer turno seu antes da magia terminar.</p>
<p>Enquanto a magia durar, uma fagulha de radiância luminosa brilha na sua mão. Ela emite luz plena em um raio de 9 metros [30 ft.] e meia-luz por mais 9 metros [30 ft.]. Esta luz é considerada luz solar.</p>`,source:"LdJ pg. 273",material:"uma lupa",name:"Raio Solar"},"Speak with Plants":{description:`<p>Você é capaz de imbuir plantas a até 9 metros [30 ft.] de distância com intelecto limitado e razão, dando-lhes a habilidade de se comunicar e seguir comandos simples. Podem ser feitas perguntas a elas sobre eventos até o dia anterior, na área da magia, sendo possível receber informações sobre as criaturas que passaram, o clima e outras circunstâncias.</p>
<p>Pode-se tornar terreno difícil criado por Crescimento de Plantas (como moitas e vegetação rasteira) em terreno comum enquanto a magia durar. Ou você pode tornar um terreno comum, onde há plantas presentes, em terreno difícil, enquanto a magia durar, fazendo com que vinhas e galhos atrapalhem perseguidores, por exemplo.</p>
<p>Plantas podem praticar outras tarefas para você, a critério do DM. A magia não possibilita que as plantas se soltem de suas raízes ou se desloquem, mas elas podem mover galhos, caules e gavinhas livremente.</p>
<p>Se uma criatura do tipo planta está na área, você pode se comunicar com ela, como se vocês compartilhassem um idioma comum, mas isso não dá nenhuma habilidade mágica de influenciá-la.</p>
<p>Esta magia faz com que plantas criadas pela magia Emaranhar soltem uma criatura contida.</p>`,source:"LdJ pg. 243",name:"Falar com Plantas"},"Detect Poison and Disease":{description:"<p>Enquanto a magia durar, você pode sentir a presença e a localização de venenos, criaturas venenosas e doenças a até 9 metros [30 ft.] de distância. Você também pode identificar o tipo de veneno, criatura venenosa ou doença em cada caso.</p><p>A magia pode atravessar a maioria das barreiras, sendo bloqueada, no entanto, por 30 centímetros [1 foot] de pedra, 2,5 centímetros [1 inch] de metal comum, uma folha fina de chumbo ou 1 metro [3 ft.] de madeira ou terra.</p>",source:"LdJ pg. 237",material:"uma folha de teixo",name:"Detectar Veneno e Doença"},"Heat Metal":{description:`<p>Escolha um objeto metálico manufaturado, como uma arma de metal ou uma armadura de metal pesada ou média, à sua vista e no alcance da magia. Você faz com que o objeto brilhe em um tom vermelho incandescente. Qualquer criatura que esteja em contato físico com o objeto sofre 2d8 pontos de dano ígneo no momento da conjuração. Enquanto a magia durar, você pode usar sua ação bônus em cada um dos seus turnos subsequentes para causar esse dano novamente.</p>
<p>Se uma criatura estiver segurando ou usando o objeto e sofrer o dano, ela deve ser bem-sucedida em uma salvaguarda de Constituição ou derruba o objeto, se puder. Caso não o faça, ela tem desvantagem nas jogadas de ataque e em testes de atributo até o início do próximo turno do conjurador desta magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 242",material:"um pedaço de ferro e uma chama",name:"Esquentar Metal"},Enthrall:{description:"<p>Você dita uma sequência de palavras dispersivas, fazendo com que criaturas à sua escolha, à sua vista, dentro do alcance da magia e que possam ouvi-lo, façam uma salvaguarda de Sabedoria. Qualquer criatura que não possa ser enfeitiçada é automaticamente bem-sucedida na salvaguarda, e se você ou seus companheiros estiverem combatendo a criatura alvo, ela tem vantagem nesse teste. Se falhar, o alvo tem desvantagem nos testes de Sabedoria (Percepção) para perceber qualquer outra criatura que não seja o conjurador, enquanto a magia durar ou até que o alvo não consiga mais ouvi-lo. A magia termina se você estiver incapacitado ou se não puder mais falar.</p>",source:"LdJ pg. 222",name:"Cativar"},"Mass Healing Word":{description:`<p>Conforme você diz palavras de restauração, até seis criaturas à sua escolha, à sua vista e no alcance da magia, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de atributo de conjuração. Essa magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, a cura aumenta em 1d4 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 265",name:"Palavra Curativa em Massa"},"Power Word Stun":{description:`<p>Você fala uma palavra de poder que pode sobrecarregar a mente de uma criatura à sua vista e no alcance da magia, deixando-a pasma. Se o alvo tiver 150 pontos de vida ou menos, ele fica atordoado. Caso contrário, a magia não tem efeito.</p>
<p>O alvo atordoado deve fazer uma salvaguarda de Constituição no fim de cada um dos próprios turnos. Em caso de sucesso, o efeito de atordoamento se encerra.</p>`,source:"LdJ pg. 265",name:"Palavra de Poder: Atordoar"},"Hold Person":{description:`<p>Escolha um humanoide à sua vista e no alcance da magia. O alvo deve ser bem-sucedido em uma salvaguarda de Sabedoria ou fica paralisado enquanto a magia durar. No final de cada um dos turnos dele, o alvo pode fazer outra salvaguarda de Sabedoria. Em caso de sucesso, a magia se encerra sobre o alvo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, você pode atingir um humanoide adicional para cada círculo do espaço acima do 2º. Os humanoides devem estar a até de 9 metros [30 ft.] uns dos outros quando você os atingir.</p>`,source:"LdJ pg. 249",material:"um pedaço pequeno e reto de ferro",name:"Imobilizar Pessoa"},"Calm Emotions":{description:`<p>Você tenta suprimir emoções fortes em um grupo de criaturas. Cada humanoide dentro de uma esfera de 6 metros de raio [20-foot-radius sphere] centrada em um ponto dentro do alcance da magia deve fazer uma salvaguarda de Carisma; uma criatura pode escolher falhar nesta salvaguarda, caso deseje. Se uma criatura falhar na salvaguarda, escolha um dos dois efeitos a seguir. Você pode suprimir qualquer efeito que cause a um alvo as condições enfeitiçado ou amedrontado. Quando esta magia termina, qualquer efeito suprimido retorna, caso a duração não tenha expirado nesse meio-tempo.</p>
<p>Como alternativa, você pode tornar o alvo indiferente a criaturas, à sua escolha, contra as quais o alvo era hostil. Tal indiferença termina se o alvo for atacado ou ferido por uma magia, ou se testemunhar quaisquer de seus próprios amigos sendo feridos. Quando a magia termina, a criatura torna-se hostil novamente, a menos que o DM decida de outra forma.</p>`,source:"LdJ pg. 211",name:"Acalmar Emoções"},Identify:{description:"<p>Escolha um objeto que você deve tocar durante a conjuração da magia. Se for um item mágico ou algum outro tipo de objeto imbuído de magia, você descobre as propriedades dele e como usá-las, se ele exige sintonização para ser usado e quantas cargas tem, caso as tenha. Você também descobre se alguma magia está afetando o objeto e que magia é essa. Se o item foi criado por uma magia, você também identifica qual magia o criou.</p><p>Se em vez disso você tocar uma criatura durante a conjuração, você descobre quais magias a estão afetando, caso estejam.</p>",source:"LdJ pg. 248",material:"uma pérola no valor mínimo de 100 PO e uma pena de coruja",name:"Indentificar"},Wish:{description:`<p>Desejo é a mais poderosa magia que uma criatura mortal pode conjurar. Simplesmente falando em voz alta, você pode alterar os próprios fundamentos da realidade de acordo com seus desejos.</p>
        <p>O uso básico desta magia é duplicar qualquer outra magia de 8º círculo ou inferior. Você não precisa cumprir todos os requisitos da magia duplicada, incluindo componentes dispendiosos. A magia simplesmente tem efeito.</p>
        <p>Como alternativa, você pode criar um dos efeitos a seguir à sua escolha:</p>
        <ul>
        <li>Você cria um objeto de até 25.000 PO em valor que não seja um item mágico. O objeto não pode ser maior do que 90 metros [300 ft.] em qualquer dimensão, e aparece em um espaço desocupado, à sua vista, no chão.</li>
        <li>Você permite que até vinte criaturas à sua vista recuperem todos os pontos de vida e encerra todos os efeitos que estejam agindo sobre elas, conforme descritos na magia Restauração Maior.</li>
        <li>Você concede a até dez criaturas à sua vista resistência a um tipo de dano à sua escolha.</li>
        <li>Você concede a até dez criaturas à sua vista imunidade a uma única magia ou outro efeito mágico por 8 horas. Por exemplo, você poderia tornar a si mesmo e todos os seus companheiros imunes ao ataque drenar vida de um lich.</li>
        <li>Você pode desfazer um acontecimento recente, forçando uma nova jogada de dados feita na última rodada (incluindo o seu último turno). A realidade remodela-se para acomodar o novo resultado. Por exemplo, uma magia Desejo poderia desfazer um teste bem-sucedido de um oponente, o acerto crítico de um inimigo ou a falha em um teste de um amigo. Você pode fazer com que a nova jogada seja feita com vantagem ou desvantagem, e pode escolher se deseja usar a nova jogada ou a jogada original.</li>
        </ul>
        <p>Você pode ser capaz de realizar algo além da gama de exemplos acima. Defina o seu desejo para o DM tão precisamente quanto possível. O DM tem grande liberdade para decidir o que ocorre em tal circunstância; quanto maior o desejo, maior a probabilidade de algo dar errado. A magia pode simplesmente falhar, o efeito que você deseja pode ser apenas parcialmente alcançado ou você pode sofrer alguma consequência imprevista como resultado da forma como formulou o desejo. Por exemplo, desejar que um vilão estivesse morto poderia impulsioná-lo para a frente no tempo, para um período em que o vilão não está mais vivo, removendo você efetivamente do jogo. Da mesma forma, desejar um item mágico lendário ou artefato pode instantaneamente transportá-lo para a presença do atual proprietário do item.</p>
        <p>O esforço necessário para conjurar esta magia de forma a produzir qualquer efeito que não seja a duplicação de outra magia lhe enfraquece. Depois de sofrer essa fadiga, toda vez que conjurar uma magia, até que termine um descanso longo, você sofre 1d10 pontos de dano necrótico por círculo da magia. Este dano não pode ser reduzido ou impedido de nenhuma maneira. Além disso, sua Força cai para 3, se não já for 3 ou inferior, por 2d4 dias. Para cada um desses dias que você gastar em repouso, sem fazer nada além de atividades leves, o tempo de recuperação diminui em 2 dias. Por fim, há uma chance de 33 por cento de que você jamais seja capaz de conjurar Desejo novamente se sofrer esta fadiga.</p>`,source:"LdJ pg. 234",name:"Desejo"},"Magic Missile":{description:`<p>Você cria três dardos brilhantes feitos de pura energia mágica. Cada dardo acerta uma criatura à sua escolha, à sua vista e no alcance da magia. Um dardo causa 1d4+1 pontos de dano energético no alvo. Os dardos acertam ao mesmo tempo, e você pode direcioná-los para uma mesma criatura ou várias.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você cria um dardo a mais para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 259",name:"Mísseis Mágicos"},"Planar Binding":{description:`<p>Com essa magia, você tenta forçar um celestial, um elemental, um feérico ou um ínfero a servi-lo. A criatura deve estar dentro do alcance da magia durante todo o tempo de conjuração (normalmente, a criatura é convocada primeiro para o centro de um círculo mágico invertido para mantê-la presa, enquanto esta magia é conjurada). Após a conclusão da conjuração, a criatura deve fazer uma salvaguarda de Carisma. Se falhar, fica destinada a lhe servir enquanto a magia durar. Se a criatura foi convocada ou criada por outra magia, a duração daquela é estendida para coincidir com a duração desta magia.</p>
<p>Uma criatura ancorada deve seguir suas instruções tanto quanto possível. Você pode ordenar a criatura a acompanhá-lo em uma aventura, a vigiar um local ou a entregar uma mensagem. A criatura obedece suas instruções à risca, mas se for hostil a você, ela se esforça para distorcer suas palavras de modo a atingir os próprios objetivos. Se a criatura concluir suas instruções antes de terminado o efeito da magia, ela vai até você para relatar o fato. Se você estiver em um plano de existência diferente, ela retorna ao lugar onde você a ancorou, lá permanecendo enquanto a magia durar.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando espaço de magia de círculo superior, a duração aumenta para 10 dias com um espaço de 6º círculo, para 30 dias com um espaço de 7º círculo, para 180 dias com um espaço de 8º círculo e para um ano e um dia com um espaço de magia de 9º círculo.</p>`,source:"LdJ pg. 213",material:"uma joia valendo pelo menos 1.000 PO, que é consumida pela magia",name:"Âncora Planar"},"Acid Arrow":{description:`<p>Uma flecha com um rastro verde cintilante voa em direção ao alvo dentro do alcance e explode, borrifando ácido. Faça um ataque mágico à distância contra o alvo. Em caso de acerto, o alvo sofre 4d4 pontos de dano ácido imediatamente e 2d4 pontos de dano ácido ao final do próximo turno dele. Se errar, a flecha borrifa ácido no alvo causando metade do dano inicial e não causa dano ao final do próximo turno dele.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano (tanto o inicial quanto o final) aumenta em 1d4 para cada círculo do espaço acima do 2º.</p>`,material:"folhas de ruibarbo em pó e um estômago de víbora",name:"Flecha Ácida"},"Comprehend Languages":{description:"<p>Enquanto a magia durar, você entende o significado literal de qualquer idioma falado que ouvir. Você tambem entende qualquer idioma escrito que veja, mas deve tocar a superfície sobre a qual as palavras estão escritas. Demora cerca de 1 minuto para ler uma página de texto.</p><p>Esta magia não decodifica mensagens secretas em um texto ou um glifo, como um selo arcano, que não faça parte de um idioma escrito.</p>",source:"LdJ pg. 225",material:"um pitada de fuligem e sal",name:"Compreender Idiomas"},Contingency:{description:`<p>Escolha uma magia de 5º círculo ou inferior que você possa conjurar, que tenha tempo de conjuração de 1 ação e que possa tê-lo como alvo. Você conjura essa magia - chamada magia contingente - como parte da conjuração de Contingência, usando espaços de magia para ambas. No entanto, a magia contingente não se efetiva. Em vez disso, ela entra em ação quando ocorrer determinada circunstância. Você descreve essa circunstância ao conjurar as duas magias. Por exemplo, uma Contingência conjurada com a magia Respirar na Água pode estipular que esta última entra em vigor quando você está envolto em água ou líquido semelhante.</p>
<p>A magia contingente entra em vigor imediatamente após a circunstância ocorrer pela primeira vez, independentemente da sua escolha ou vontade, e então Contingência termina.</p>
<p>A magia contingente afeta somente você, mesmo que ela normalmente possa ter outros alvos. Você só pode usar uma magia Contingência de cada vez. Caso conjure esta magia novamente, o efeito da Contingência anterior se encerra, o mesmo ocorrendo se o componente material para contingência já não estiver em sua posse.</p>`,source:"LdJ pg. 227",material:"uma estatueta de si mesmo, esculpida em marfim e decorada com pedras preciosas no valor mínimo de 1.500 PO",name:"Contingência"},Augury:{description:`<p>Ao lançar varetas incrustadas com pedras preciosas, jogar ossos de dragão, dispor cartas ornamentadas ou empregar alguma outra ferramenta de adivinhação, você recebe um presságio de uma entidade de outro mundo sobre os resultados de um determinado curso de ação que você planeja tomar dentro dos próximos 30 minutos. O DM escolhe entre os seguintes presságios possíveis:</p>
</ul>
<li>Prosperidade, para bons resultados</li>
<li>Infortúnio, para maus resultados</li>
<li>Prosperidade e Infortúnio, para resultados bons e maus</li>
</li>Nada, para resultados que não são especialmente bons ou maus</li>
</ul>
<p>A magia não leva em conta quaisquer circunstâncias possíveis que possam mudar o resultado futuro, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro.</p>
<p>Caso você conjure a magia duas ou mais vezes antes de concluir seu próximo descanso longo, há uma chance cumulativa de 25% para cada conjuração após a primeira de você obter uma resposta aleatória. O DM faz esta jogada em segredo.</p>`,source:"LdJ pg. 217",material:"varetas, ossos ou símbolos semelhantes especialmente marcados, no valor de pelos menos 25 PO",name:"Augúrio"},"Mass Suggestion":{description:`<p>Você sugere um curso de ação (limitado a uma sentença ou duas) e magicamente influencia até doze criaturas à sua escolha, à sua vista e no alcance da magia, que possam ouvi-lo e compreendê-lo. Criaturas que não podem ser enfeitiçadas são imunes a este efeito. A sugestão precisa ser dita de uma forma que faça o curso de ação parecer razoável. Pedir à criatura que se esfaqueie, jogue-se contra uma lança, imole-se ou faça algum outro ato evidentemente danoso, automaticamente cancela o efeito da magia.</p>
<p>Cada alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, ele seguirá os atos sugeridos da melhor forma, dentro das suas próprias habilidades. O curso de ação sugerido é seguido enquanto a magia durar. Se ele puder ser completado em um período menor, a magia se encerra assim que isso ocorrer.</p>
<p>Você também pode especificar condições que ativarão uma atividade especial enquanto a magia durar. Por exemplo, pode ser sugerido que um grupo de soldados dê todo o dinheiro em sua posse ao primeiro mendigo que encontrar. Se a condição não for realizada antes do fim dos efeitos da magia, a atividade não é concluída.</p>
<p>Se você ou algum de seus companheiros causar dano a uma criatura afetada por esta magia, esta se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia com um espaço de magia de 7º círculo, a duração será 10 dias. Usando um espaço de magia de 8º círculo, a duração será 30 dias. Ao usar um espaço de magia de 9º círculo, a duração será um ano e um dia.</p>`,source:"LdJ pg. 282",material:"uma língua de uma cobra e um pouco de favo de mel ou uma gota de óleo adocicado",name:"Sugestão em Massa"},"Burning Hands":{description:`<p>Enquanto você mantiver suas mãos com os polegares tocando um ao outro e os demais dedos abertos, uma fina camada de chamas parte da ponta de seus dedos estendidos. Cada criatura dentro de um cone de 4,5 metros [15-foot cone] deve fazer uma salvaguarda de Destreza. Se falhar, sofre 3d6 pontos de dano, ou metade do dano em caso de sucesso.</p>
<p>O fogo incendeia todos os objetos inflamáveis na área que não estejam sendo usados ou transportados.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 256",name:"Mãos Flamejantes"},Silence:{description:"<p>Enquanto a magia durar, nenhum som pode ser criado dentro ou passar através de uma esfera de 6 metros de raio, centrado em um ponto à sua escolha e no alcance da magia. Qualquer criatura ou objeto inteiramente dentro da esfera é imune a dano trovejante, e criaturas ficam surdas enquanto estiverem totalmente dentro dela. Conjurar uma magia que inclua um componente verbal é impossível dentro da área de efeito.</p>",source:"LdJ pg. 280",name:"Silêncio"},"Flame Strike":{description:`<p>Uma coluna vertical de fogo divino ressoa, caindo dos céus sobre um local que você especifica. Cada criatura dentro de um cilindro de 3 metros de raio e 12 metros de altura [10-foot-radius, 40-foot-tall cylinder], centrado em um ponto no alcance da magia, deve fazer uma salvaguarda de Destreza. Se falhar, sofre 4d6 pontos de dano ígneo e 4d6 pontos de dano radiante, ou metade do dano em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o dano ígneo ou o dano radiante aumenta em 1d6 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 224",material:"uma pitada de enxofre",name:"Coluna de Chamas"},"Find Steed":{description:`<p>Você invoca um espírito que assume a forma de uma montaria especialmente inteligente, forte e fiel, criando um vínculo de longa duração com ela. Aparecendo em um espaço desocupado dentro do alcance, a montaria toma uma forma à sua escolha: um alce, um camelo, um cavalo de guerra, um mastim ou um pônei (seu DM pode permitir que outros animais sejam conjurados como montarias). A montaria tem as estatísticas da forma escolhida, mas é um celestial, feérico ou ínfero (à sua escolha), em vez do tipo normal. Além disso, se a criatura tiver uma Inteligência igual ou menor que 5, esta se torna 6 e ela adquire a capacidade de entender um idioma que você possa falar, à sua escolha.</p>
<p>Ela serve como sua montaria, tanto em combate quanto fora dele, e vocês têm um elo instintivo que lhes permite lutar como uma unidade perfeita. Enquanto estiver montado na criatura, qualquer magia que você conjurar e que tenha a si mesmo como alvo, afeta também a sua montaria.</p>
<p>Quando a criatura ficar com 0 pontos de vida, ela desaparece, não deixando corpo algum para trás. Você também pode dispensar sua montaria a qualquer momento com uma ação, fazendo-a desaparecer. Em ambos os casos, conjurar esta magia novamente invoca o mesmo animal, restaurado com pontos de vida máximos.</p>
<p>Enquanto sua montaria estiver a até 1,5 quilômetro [1 mile] de você, é possível se comunicar telepaticamente com ela.</p>
<p>Não é possível ter mais de uma montaria vinculada por esta magia ao mesmo tempo. Com uma ação, você pode liberar a montaria de seu vínculo a qualquer momento, fazendo-a desaparecer.</p>`,name:"Convocar Montaria"},Forbiddance:{description:`<p>Você cria uma defesa contra viagem mágica que protege uma área de até 3.500 metros quadrados [40.000 square feet] e até 9 metros [30 ft.] de altura, a partir do chão. Enquanto a magia durar, nenhuma criatura pode se teleportar para dentro dessa área ou usar portais, como aqueles criados pela magia Portal, para adentrá-la. A magia bloqueia a área contra viagens planares e, portanto, impede que criaturas acessem a área por meio do Plano Astral, Plano Etéreo, Faéria, Sombral ou pela magia Transição Planar.</p>
<p>Além disso, esta magia causa dano a tipos de criaturas escolhidos por você. Ao conjurá-la, escolha um ou mais dos seguintes tipos: celestiais, elementais, feéricos, ínferos e mortos-vivos. Quando uma criatura do tipo escolhido entra na área da magia pela primeira vez ou inicia o próprio turno dentro da área, ela sofre 5d10 pontos de dano radiante ou necrótico (à sua escolha).</p>
<p>Ao conjurar esta magia, você pode designar uma senha. Uma criatura que diga a senha ao adentrar a área não sofre nenhum dano da magia.</p>
<p>A área mágica não pode se sobrepor com a área de outra magia Proibição. Se você conjurar Proibição todos os dias no mesmo local, durante 30 dias, a magia dura até ser dissipada e os componentes materiais são consumidos ao término da última conjuração.</p>`,source:"LdJ pg. 270",material:"uma aspersão de água benta, um incenso raro e rubi em pó no valor mínimo de 1.000 PO",name:"Proibição"},"Meld into Stone":{description:`<p>Você pisa em um objeto ou superfície de pedra grande o suficiente para conter o seu corpo totalmente, mesclando a si mesmo e a todo o equipamento que estiver carregando enquanto a magia durar. Usando seu movimento, você pisa na pedra, tornando sua presença totalmente invisível ou indetectável por sentidos não-mágicos.</p>
<p>Enquanto fundido à rocha, você não pode ver o que acontece fora dela, e quaisquer testes de Sabedoria (Percepção) que você fizer para ouvir sons do lado de fora são feitos com desvantagem. Você permanece ciente da passagem do tempo e pode conjurar magias em si mesmo enquanto mesclado à pedra. Você pode usar seu movimento para sair da pedra a qual se mesclou, encerrando a magia. Exceto isso, você não pode se mover.</p>
<p>Dano físico menor causado à rocha não lhe fere, mas a destruição parcial ou mudança no formato desta (de maneira que você não caiba mais dentro dela) o expele, causando 6d6 pontos de dano contundente. A completa destruição da pedra (ou transformação dela em uma substância diferente) também o expele, causando-lhe 50 pontos de dano contundente. Se expelido, você fica caído no espaço desocupado mais próximo de onde entrou na rocha.</p>`,name:"Mesclar-se às Rochas"},Foresight:{description:`<p>Você toca uma criatura voluntária. O alvo ganha uma capacidade limitada de ver o futuro imediato. Enquanto a magia durar, o alvo não pode ser surpreendido e tem vantagem em jogadas de ataque, testes de atributos e salvaguardas. Além disso, outras criaturas têm desvantagem em jogadas de ataque contra o alvo enquanto a magia durar.</p>
<p>Esta magia se encerra imediatamente se você conjurá-la novamente antes que a duração inicial tenha terminado.</p>`,source:"LdJ pg. 280",material:"uma pena de beija-flor",name:"Sexto Sentido"},"Hypnotic Pattern":{description:`<p>Você cria um padrão distorcido de cores o qual serpenteia no ar dentro de um cubo de 9 metros de lado [30-foot cube], no alcance da magia. O padrão aparece por um momento e desaparece. Cada criatura na área, e que seja capaz de ver o padrão, deve fazer uma salvaguarda de Sabedoria. Se falhar, a criatura fica enfeitiçada enquanto a magia durar. Criaturas afetadas por esta magia estão incapacitadas e tem deslocamento igual a 0.</p>
<p>Uma criatura afetada por esta magia terá os efeitos encerrados sobre si caso venha a sofrer qualquer tipo de dano ou se alguém usar uma ação para sacudi-la, removendo-a de seu estupor.</p>`,source:"LdJ pg. 264",material:"uma vareta de incenso brilhante ou um frasco de cristal cheio de material fosforescente",name:"Padrão Hipnótico"},"Word of Recall":{description:"<p>Você e até 5 criaturas voluntárias a até 1,5 metros [5 ft.] a partir de você, são instantaneamente teleportadas para um santuá­rio designado previamente. Você e quaisquer criaturas que se teleportem aparecem em um espaço desocupado mais próximo ao espaço designado no ato de preparação do seu santuário (veja adiante). Ao conjurar esta magia sem preparar um santuário, a magia não tem efeito.</p><p>Você deve designar um santuário conjurando esta magia em um local, como um templo, seja ele dedicado ou fortemente ligado à sua divindade. Se você tentar conjurar esta magia em uma área que não é dedicada à sua divindade, a magia não tem efeito.</p>",source:"LdJ pg. 265",name:"Palavra de Regresso"},Fabricate:{description:`<p>Você transforma matérias-primas em produtos do mesmo material. Por exemplo, você pode fabricar uma ponte de madeira a partir de um monte de árvores, uma corda a partir de um pedaço de cânhamo, e roupas a partir do linho ou lã.</p>
<p>Escolha uma matéria prima à sua vista e no alcance da magia. Você pode fabricar um objeto de tamanho Grande ou menor (que caiba dentro de um cubo de 3 metros [10 ft.], ou oito cubos de 1,5 metro [5 ft.] conectados), desde que haja matéria prima suficiente. Se você estiver trabalhando com metal, pedra ou outra substância mineral, todavia, o objeto fabricado não pode ser maior que Médio (contido em um cubo de 1,5 [5 ft.] metro). A qualidade dos objetos feitos pela magia depende da qualidade da matéria-prima.</p>
<p>Criaturas ou itens mágicos não podem ser criados ou transmutados por meio desta magia. Você também não pode usá-la para criar itens que ordinariamente exijam alto grau de manufatura, como joias, armas, vidro ou armadura, a não ser que tenha proficiência com o tipo de ferramentas de artesão necessárias para fabricar tais objetos.</p>`,name:"Fabricar"},"Storm of Vengeance":{description:`<p><strong>Alcance:</strong> visão</p>
<p>Uma agitada nuvem tempestuosa se forma, centrada em um ponto à sua vista, e se alastra em um raio de 108 metros [360 ft.]. Relâmpagos brilham na área, trovões ressoam e ventos fortes rugem. Cada criatura sob a nuvem (a não mais de 1,5 quilômetros [5000 ft.] de altura abaixo da nuvem) deve fazer uma salvaguarda de Constituição, quando ela surge. Se falhar, a criatura sofre 2d6 pontos de dano trovejante e fica surda por 5 minutos.</p>
<p>A cada rodada que você mantiver a concentração nesta magia, a tempestade produz um efeito adicional no seu turno.</p>
<p><strong>Rodada 2</strong>. Chuva ácida cai da nuvem. Cada criatura e objeto sob a nuvem sofre 1d6 pontos de dano ácido.</p>
<p><strong>Rodada 3</strong>. Você invoca seis raios da nuvem para atingir seis criaturas ou objetos à sua escolha sob as nuvens. Uma criatura não pode ser atingida por mais de um raio. Uma criatura atingida deve fazer uma salvaguarda de Destreza. Se falhar, o alvo sofre 10d6 pontos de dano elétrico, ou metade do dano em caso de sucesso.</p>
<p><strong>Rodada 4</strong>. Granizo cai da nuvens. Cada criatura sob a nuvem sofre 2d6 pontos de dano contundente.</p>
<p><strong>Rodada 5–10</strong>. Ventos e chuva gélida assolam a área sob a nuvem. A área se torna terreno difícil e fica totalmente obscurecida. Cada criatura na área sofre 1d6 pontos de dano gélido. Ataques com armas de combate à distância na área são impossíveis. O vento e a chuva contam como distração severa para propósitos de manter a concentração em magias. Finalmente, rajadas de vento forte (entre 32 e 80 quilômetros [20 - 50 miles] por hora) dispersam automaticamente neblina, névoa e fenômenos similares na área, sejam mundanos ou mágicos.</p>`,source:"LdJ pg. 285",name:"Tempestade da Vingança"},"Branding Smite":{description:`<p>Enquanto durar esta magia, na próxima vez que você atingir uma criatura com uma arma, ela brilhará com radiação astral conforme você acerta. O ataque causa 2d6 pontos de dano radiante adicionais ao alvo, que torna-se visível (caso esteja invisível), emitindo uma luz fraca, criando meia-luz num raio de 1,5 metro [5 ft.] e não podendo retornar à condição invisível enquanto a magia durar.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 256",name:"Marca da Punição"},"Guiding Bolt":{description:`<p>Um lampejo de luz dispara em direção a uma criatura à sua escolha e dentro do alcance da magia. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 4d6 pontos de dano radiante, e a próxima jogada de ataque feita contra ele, antes do final do seu próximo turno, tem vantagem graças à meia-luz mística brilhando no alvo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 272",name:"Raio Guia"},"False Life":{description:`<p>Você instila em si mesmo um arremedo necromântico de vida, ganhando 1d4+4 pontos de vida temporários enquanto a magia durar.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você ganha 5 pontos de vida temporários para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 289",material:"uma pequena quantidade de álcool ou bebidas alcoólica destilada",name:"Vitalidade Vazia"},"Control Water":{description:`<p>Você controla qualquer corpo de água parada dentro de uma área à sua escolha, em um cubo de 30 metros [100 ft.] de lado e enquanto esta magia durar. Você pode escolher entre qualquer um dos efeitos a seguir. Ao conjurar esta magia com uma ação em seu turno, você pode repetir o mesmo efeito ou pode escolher outro.</p>
<p><strong>Inundação.</strong> Você provoca o aumento do nível de toda a água parada na área, que sobe até 6 metros [20 ft.]. Se a área inclui uma margem, a água transborda sobre a terra seca. Caso você tenha escolhido uma área em um grande corpo de água, em vez de uma inundação, você cria uma onda de 6 metros [20 ft.] de altura que viaja de um lado da área para o outro, até quebrar. Quaisquer veículos de tamanho Grande ou menor no caminho da onda são carregados com ela para o outro lado. Quaisquer veículos de tamanho Grande ou menor atingidos pela onda têm 25% de chance de emborcar.</p>
<p>O nível da água permanece elevado enquanto a magia durar ou caso você escolha um efeito diferente. Se este efeito produziu uma onda, ela se repete no início do seu próximo turno, enquanto durar o efeito da inundação.</p>
<p><strong>Dividir a Água.</strong> Você faz com que a água na área se afaste e crie uma trincheira que se estende por toda a área da magia, com a água afastada formando uma parede em cada lado. A trincheira permanece enquanto a magia durar ou até que você escolha um efeito diferente. A água, então, lentamente preenche a trincheira ao longo da próxima rodada, até que o nível normal da água seja restaurado.</p>
<p><strong>Redirecionar Fluxo.</strong> Você faz o fluxo de água na área mover-se na direção que você escolher, mesmo que a água tenha que fluir entre obstáculos, subir paredes ou seguir em outras direções improváveis. A água na área move-se de acordo com o seu direcionamento, mas tendo ultrapassado a área da magia, ela retoma o fluxo natural, de acordo com as condições do terreno. A água continua a mover-se na direção que você escolheu enquanto a magia durar ou até que você escolha um efeito diferente.</p>
<p><strong>Redemoinho.</strong> Este efeito requer um corpo d'água de pelo menos 15 metros [50 ft.] quadrados e 7,5 metros [25 ft.] de profundidade. Você provoca a formação de um redemoinho no centro da área. O redemoinho forma um vórtice que tem 1,5 metro [5 ft.] de base, até 15 metros [50 ft.] de largura no topo e 7,5 metros [25 ft.] de altura. Qualquer criatura ou objeto na água e a cerca de 7,5 metros [25 ft.] do vórtice é puxado 3 metros [10 ft.] em direção a ele. Uma criatura pode nadar para longe do vórtice sendo bem-sucedida em um teste de Força (Atletismo) contra a CD para evitar sua magia.</p>
<p>Quando uma criatura entra no vórtice pela primeira vez durante um turno ou inicia o turno ali, ela deve fazer uma salvaguarda de Força. Se falhar, sofre 2d8 pontos de dano contundente, sendo aprisionada no vórtice enquanto a magia durar. Em caso de sucesso, sofre metade do dano e não é aprisionada no vórtice. Uma criatura capturada no vórtice pode usar uma ação para tentar nadar para longe dele, como descrito anteriormente, mas tem desvantagem no teste de Força (Atletismo) para fazê-lo.</p>
<p>Quando um objeto entra no vórtice pela primeira vez durante um turno, ele sofre 2d8 pontos de dano contundente; esse dano ocorre a cada rodada em que o objeto permanecer no vórtice.</p>`,source:"LdJ pg. 228",material:"uma gota de água e uma pitada de poeira",name:"Controlar Água"},Alarm:{description:"<p>Você prepara um alarme contra intrusos indesejados. Escolha uma porta, uma janela ou uma área dentro do alcance que não seja maior que um cubo de 6 metros de lado [20-foot cube]. Enquanto a magia durar, um alarme o alerta quando uma criatura Minúscula ou maior tocar ou entrar na área protegida. Ao conjurar a magia, você pode escolher quais criaturas não dispararão o alarme. Você também pode escolher se o alarme é mental ou audível.</p><p>Um alarme mental avisa com um sibilo em sua mente, se você estiver no alcance de 1,5 quilômetro [1 mile] da área protegida. Esse sibilo o desperta caso você esteja dormindo.</p><p>Um alarme audível produz o som de uma sineta durante 10 segundos, dentro de um alcance de 18 metros [60 ft.].</p>",source:"LdJ pg. 211",material:"uma sineta e o pedaço de um fino fio de prata",name:"Alarme"},"Scorching Ray":{description:`<p>Você cria três raios de fogo e os dispara em alvos que estejam no alcance da magia. Você pode dispará-los contra um alvo ou vários.</p>
<p>Faça um ataque mágico à distância para cada raio. Se acertar, o alvo sofre 2d6 pontos de dano ígneo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, você cria um raio adicional para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 272",name:"Raio Ardente"},"Magic Mouth":{description:"<p>Você implanta uma mensagem em um objeto que esteja no alcance da magia. Essa mensagem é revelada quando uma circunstância de disparo ocorrer. Escolha um objeto à sua vista e que não esteja sendo usado ou carregado por outra criatura. Fale, então, a mensagem, que deve ter 25 palavras ou menos, embora ela possa ser emitida ao longo de um período de até 10 minutos. Por fim, determine a circunstância de disparo para magia revelar a mensagem.</p><p>Quando tal circunstância ocorrer, uma boca encantada aparece no objeto e recita a mensagem com a sua voz e no mesmo volume que você falou. Se o objeto escolhido tiver uma boca ou algo que se assemelhe (por exemplo, a boca de uma estátua), a boca encantada se sobrepõe de forma a parecer que as palavras saem da boca do próprio objeto. Ao conjurar a magia, você determina se ela se encerra após entregar a mensagem ou se permanece para repetir o conteúdo sempre que a circunstância de disparo ocorrer.</p><p>A circunstância de disparo pode ser tão abrangente ou específica quanto você quiser, mas deve ser baseada em condições visuais ou auditivas que ocorram a até 9 metros [30 ft.] do objeto. Por exemplo, você pode instruir a boca a falar sempre que uma criatura se aproxime a até 9 metros [30 ft.] do objeto, ou quando um sino de prata soar a até 9 metros [30 ft.] de distância do objeto.</p>",source:"LdJ pg. 219",material:"um pequeno pedaço de favo de mel e pó de jade valendo pelo menos 10 PO, os quais são consumidos pela magia",name:"Boca Encantada"},"Illusory Script":{description:`<p>Você escreve em um pergaminho, papel ou algum material apropriado para escrita, infundindo-o com uma ilusão potente enquanto a magia durar.</p>
<p>Para você e quaisquer criaturas escolhidas quando a magia é conjurada a escrita parece com sua caligrafia normal e expressa qualquer significado de sua intenção quando o texto foi escrito. Para todos os demais, as palavras aparecem como se fossem escritas em um alfabeto · desconhecido ou mágico, tornando-as ininteligíveis. Se preferir, você pode fazer com que a escrita tenha a aparência de um texto completamente diferente, escrito em outra caligrafia e idioma, apesar de ser necessário que você conheça o idioma.</p>
<p>Caso a magia seja dissipada, tanto o texto original quanto o ilusório desaparecem.</p>
<p>Uma criatura com visão verdadeira pode ler a mensagem escondida.</p>`,source:"LdJ pg. 240",material:"uma tinta à base de chumbo no valor mínimo de 10 PO, a qual a magia consome",name:"Escrita Ilusória"},"Divine Favor":{description:"<p>Sua oração o fortalece com o resplendor divino. Enquanto a magia durar, seus ataques com armas causam 1d4 pontos de dano radiante adicional em caso de acerto.</p>",source:"LdJ pg. 243",name:"Favor Divino"},"Wind Walk":{description:`<p>Você e até dez criaturas voluntárias à sua vista, no alcance da magia, assumem uma forma gasosa - parecendo como tufos de nuvem - enquanto a magia durar. Enquanto permanecer nesta forma de nuvem, uma criatura tem deslocamento de voo de 90 metros [300 ft.] e resistência a dano por armas não mágicas. As únicas ações que uma criatura pode executar nesta forma são Correr ou reverter para sua forma normal. Reverter demora 1 minuto, durante o qual a criatura fica incapacitada e não pode se mover. Enquanto a magia durar, uma criatura pode reverter para a forma de nuvem, que também requer 1 minuto de transformação.</p>
        <p>Se uma criatura estiver em forma de nuvem e voando quando o efeito terminar, ela desce 18 metros [60 ft.] por rodada durante 1 minuto até aterrissar, fazendo-o com segurança. Se não conseguir aterrissar após 1 minuto, ela cai a distância restante.</p>`,source:"LdJ pg. 221",material:"fogo e água benta",name:"Caminhar no Vento"},"Alter Self":{description:`<p>Você assume uma forma diferente. Quando conjurar a magia, escolha uma das opções a seguir, cujos efeitos persistem enquanto a magia durar. Dentro desse período, você pode usar uma ação para finalizar uma das opções escolhidas, e obter os benefícios de outra.</p>
<p><strong>Adaptação Aquática.</strong> Você adapta seu corpo para o ambiente aquático, com guelras crescendo e membranas nascendo entre seus dedos. Você pode respirar debaixo d'água e ganha deslocamento de natação com valor igual ao seu deslocamento de caminhada.</p>
<p><strong>Mudar Aparência.</strong> Você transforma sua aparência conforme desejar, alterando sua altura, peso, características raciais, som da voz, comprimento do cabelo, cor da pele e características peculiares, se existirem. Você pode adquirir a aparência de outra raça, embora nenhuma de suas estatísticas mude. Você não pode parecer com uma criatura de tamanho diferente do seu, e sua forma básica permanece a mesma; por exemplo, se você é bípede, você não pode usar a magia para se tornar quadrúpede. A qualquer momento, enquanto a magia durar, você pode usar sua ação para trocar de aparência novamente.</p>
<p><strong>Armas Naturais.</strong> Crescem em seu corpo garras, presas, espinhos, chifres ou uma arma natural diferente, à sua escolha. Seu ataque desarmado causa 1d6 pontos de dano contundente, cortante ou perfurante, conforme a arma natural escolhida, e você é proficiente com seus ataques desarmados. Por fim, sua arma natural é mágica e você tem um bônus de +1 em suas jogadas de ataque e dano quando usá-la.</p>`,source:"LdJ pg. 212",name:"Alterar-se"},"Teleportation Circle":{description:`<p>Ao conjurar a magia, você traça um círculo com 3 metros [10 ft.] de diâmetro no chão, inscrito com símbolos que ligam a sua localização a um círculo de teleporte permanente à sua escolha, cuja sequência de símbolos você conheça e que se encontre no mesmo plano de existência que você. Um portal cintilante se abre dentro do círculo que você desenhou e permanece aberto até o final de seu próximo turno. Qualquer criatura que entre no portal aparece instantaneamente a até 1,5 metro [5 ft.] do círculo de destino ou no espaço desocupado mais próximo, se este estiver ocupado.</p>
<p>Muitos grandes templos, guildas e outros lugares importantes têm círculos de teleporte permanentes inscritos em algum lugar dentro de seus limites. Cada um desses círculos inclui uma sequência única de símbolos - uma sucessão de runas mágicas dispostas em um padrão específico. Quando ganha a habilidade de conjurar esta magia, você aprende as sequência de símbolos para dois destinos no Plano Material, determinados pelo DM. Você pode aprender mais sequências de símbolos durante suas aventuras. Você pode guardar uma nova sequência de símbolos na memória depois de estudá-la por 1 minuto.</p>
<p>Você pode criar um círculo permanente de teleporte ao conjurar esta magia no mesmo local, todos os dias, durante um ano. Você não precisa usar o círculo para se teleportar ao conjurar a magia desta forma.</p>`,source:"LdJ pg. 223",material:"gizes raros e tintas infundidas com gemas preciosas valendo 50 PO, que a magia consome",name:"Círculo de Teleporte"},"Arcane Lock":{description:`<p>Você toca uma porta, janela, portão, baú, ou outro tipo de entrada que já esteja fechada, tornando-a bloqueada enquanto a magia durar. Você e as criaturas que designar ao realizar a conjuração podem abrir o objeto normalmente. Você também pode definir uma senha que, quando dita a até 1,5 metro [5 ft.] do objeto, suprima esta magia durante 1 minuto. Caso contrário, o objeto fica trancado até que seja quebrado ou a magia seja dissipada ou suprimida. Conjurar Arrombar no objeto suprime a tranca arcana por 10 minutos.</p>
<p>Enquanto afetado por esta magia, o objeto é mais difícil de quebrar ou arrombar; a CD para quebrá-lo ou arrombar qualquer fechadura contida nele aumenta em 10.</p>`,source:"LdJ pg. 287",material:"pó de ouro no valor de pelo menos 25 PO, que é consumido pela magia",name:"Tranca Arcana"},Bless:{description:`<p>Você abençoa até três criaturas à sua escolha dentro do alcance da magia. Sempre que um alvo realiza um jogada de ataque ou uma salvaguarda antes da magia terminar, ele deve jogar 1d4 e adicionar o número obtido à jogada de ataque ou testes de salvaguarda.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode escolher como alvo uma criatura adicional para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 219",material:"uma aspersão de água benta",name:"Bênção"},"Secret Chest":{description:`<p>Você esconde uma arca e todo o conteúdo dela no Plano Etéreo. É necessário que você toque a arca e a réplica em miniatura que serve como componente material para a magia. Ela pode armazenar até 340 litros [12 cubic feet] de matéria não viva (1 metro [3 ft.] por 60 centímetros [2 ft.] por 60 centímetros).</p>
<p>Enquanto a arca permanecer no Plano Etéreo, você pode usar uma ação e tocar a réplica para evocá-la. Ela aparece no chão, em um espaço desocupado a até 1,5 metro [5 ft.] de você. Tocando ambas, a arca e a réplica, e usando uma ação, você pode enviar a primeira de volta ao Plano Etéreo.</p>
<p>Após 60 dias, há uma chance cumulativa de 5% por dia de que o efeito da magia termine, o que também ocorre se a magia for conjurada novamente, se a réplica for destruída ou se você escolher encerrar a magia com uma ação. Se a arca estiver no Plano Etéreo ao término da magia, ela está perdida para sempre.</p>`,material:"um baú requintado de 1 metro [3 ft.] de comprimento por 60 centímetros [2 ft.] de altura e profundidade, feito a partir de materiais raros no valor mínimo de 5.000 PO e uma réplica pequena feita do mesmo material no valor mínimo de 50 PO",name:"Arca Secreta"},"Spare the Dying":{description:"<p>Você toca uma criatura viva que tenha 0 pontos de vida. A criatura se torna estável. Essa magia não tem efeito sobre mortos-vivos ou constructos.</p>",source:"LdJ pg. 211",name:"Acudir os Moribundos"},"Dominate Person":{description:`<p>Você tenta influenciar um humanoide à sua vista no alcance da magia. Ele deve ser bem-sucedido em uma salvaguarda de Sabedoria ou está enfeitiçado por você enquanto a magia durar. Se você ou criaturas amigáveis a você estiverem lutando contra o alvo, ele tem vantagem na salvaguarda.</p>
<p>Enquanto o alvo estiver enfeitiçado, você tem um elo telepático com ele desde que ambos estejam no mesmo plano de existência. Enquanto estiver consciente, você pode usar o elo telepático para enviar comandos para a criatura (nenhuma ação é necessária), que faz o possível para obedecer. Você pode especificar um curso de ação genérico e simples, como "Ataque aquela criatura", "Corra para cá" ou "Pegue aquele objeto". Se a criatura completar a ordem e não receber novas instruções suas, ela se defende e se preserva o melhor que puder.</p>
<p>Você pode usar sua ação para assumir controle total e preciso do alvo. Até o fim do seu turno, a criatura executa apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo, você também pode fazer com que a criatura use a reação dela, mas isso requer que você use sua reação também.</p>
<p>Toda vez que o alvo sofre dano, ele faz uma salvaguarda de Sabedoria contra a magia. Em caso de sucesso, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia com um espaço de magia de 6º círculo, a duração será concentração, até 10 minutos. Ao conjurar esta magia com um espaço de magia de 7º círculo, a duração será concentração, até 1 hora. Ao conjurar esta magia com um espaço de magia de 8º círculo, a duração será concentração, até 8 horas.</p>`,source:"LdJ pg. 238",name:"Dominar Pessoa"},Bane:{description:`<p>Até três criaturas, à sua escolha, à sua vista e que estejam dentro do alcance da magia, devem realizar salvaguardas de Carisma. Enquanto a magia durar, sempre que um alvo que falhar nessa salvaguarda fizer uma jogada de ataque ou uma salvaguarda, ele deverá jogar 1d4 e subtrair o número obtido do resultado da jogada de ataque ou salvaguarda.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode enfeitiçar uma criatura adicional para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 267",material:"uma gota de sangue",name:"Perdição"},"Enhance Ability":{description:`<p>Você toca uma criatura e lança sobre ela um aperfeiçoamento mágico. Escolha um dos efeitos a seguir; o alvo ganha esse efeito enquanto a magia durar.</p>
<ul>
<li><strong>Astúcia da Raposa</strong>. O alvo tem vantagem nos testes de Inteligência.</li>
<li><strong>Elegância do Gato</strong>. O alvo tem vantagem nos testes de Destreza. Ele também não sofre dano por queda ao cair 6 metros [20 ft.] ou menos, caso não esteja incapacitado.</li>
<li><strong>Esplendor da Águia</strong>. O alvo tem vantagem nos testes de Carisma.</li>
<li><strong>Força do Touro</strong>. O alvo tem vantagem nos testes de Força e dobra a capacidade de carga.</li>
<li><strong>Resistência do Urso</strong>. O alvo tem vantagem nos testes de Constituição. Ele também ganha 2d6 pontos de vida temporários que são perdidos ao término da magia.</li>
<li><strong>Sabedoria da Coruja</strong>. O alvo tem vantagem nos testes de Sabedoria.</li>
</ul>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, você pode atingir uma criatura adicional para cada círculo do espaço acima do 2º.</p>
<p> </p>`,source:"LdJ pg. 214",material:"pelo ou uma pena de uma fera",name:"Aprimorar Atributo"},"Spike Growth":{description:`<p>O chão, em um raio de 6 metros [20-foot radius] centrado em um ponto no alcance da magia, é revirado e dele brotam espigões e espinhos. A área se torna terreno difícil enquanto a magia durar. Quando uma criatura se mover para dentro ou para fora da área, ela sofre 2d4 pontos de dano perfurante para cada 1,5 metro [5 ft.] que se mover.</p>
<p>A transformação do solo é camuflada para parecer natural. Qualquer criatura que não possa ver a área no momento da conjuração da magia deve fazer um teste de Sabedoria (Percepção) contra a CD para evitar sua magia para perceber o terreno como perigoso antes de entrar nele.</p>`,source:"LdJ pg. 230",material:"sete espinhos afiados ou sete pequenos galhos, cada um deles com a ponta afiada",name:"Crescer Espinhos"},Confusion:{description:`<p>Esta magia assalta e distorce a mente das criaturas, implantando delírios e provocando ações descontroladas. Cada criatura em uma esfera de 3 metros de raio [10-foot-radius sphere], centrada em um ponto à sua escolha e dentro do alcance da magia, deve ser bem-sucedida em uma salvaguarda de Sabedoria, ou é afetada por esta magia.</p>
<p>Um alvo afetado não pode executar reações e no início de cada um de seus próprios turnos deve jogar 1d10, determinando assim, o comportamento durante esse turno.</p>
<p> <table class="big"><tr><th>d10</th><th>Comportamento</th></tr><tr><td style="width:15%;">1</td><td>A criatura usa todo o deslocamento dela para se movimentar em uma direção aleatória. Para determinar a direção, jogue 1d8 e atribua uma direção para cada face do dado. A criatura não executa uma ação neste turno.</td></tr><tr><td>2—6</td><td>A criatura não se move e nem realiza ações nesse turno.</td></tr><tr><td>7—8</td><td>A criatura usa a ação dela para fazer um ataque corpo a corpo contra uma criatura determinada aleatoriamente e que esteja no alcance dela. Se não houver nenhuma criatura dentro do alcance, a criatura não faz nada neste turno.</td></tr><tr><td>9—10</td><td>A criatura pode agir e mover-se normalmente.</td></tr></table></p>
<p>No final de cada um dos próprios turnos, o alvo afetado por esta magia pode fazer uma salvaguarda de Sabedoria. Se for bem-sucedido, este efeito termina para ele.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o raio da esfera aumenta em 1,5 metro [5 ft.] para cada círculo do espaço acima do 4º.</p>`,source:"LdJ pg. 226",material:"três cascas de noz",name:"Confusão"},Regenerate:{description:`<p>Você toca uma criatura e estimula sua capacidade natural de cura. O alvo recupera 4d8+15 pontos de vida. Enquanto a magia durar, o alvo recupera 1 ponto de vida no começo de cada turno dele (10 pontos de vida por minuto).</p>
<p>Membros amputados do corpo do alvo (dedos, pernas, cauda e assim por diante), se houver, são restaurados após 2 minutos. Se a parte amputada do corpo for colocada no lugar, a magia instantaneamente faz com que o membro se reconecte.</p>`,source:"LdJ pg. 276",material:"uma roda de oração e água benta",name:"Regeneração"},"Disguise Self":{description:"<p>Você faz com que você mesmo - incluindo suas roupas, armaduras, armas e outros pertences que esteja carregando - ganhe outra aparência, enquanto a magia durar ou até que você use sua ação para encerrá-la. Você pode parecer 30 centímetros [1 ft.] mais baixo ou mais alto, e parecer magro, gordo ou algo entre os dois. Você não pode alterar o seu tipo de corpo, portanto, deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da ilusão cabe a você.</p><p>As alterações feitas por esta magia não se sustentam diante de uma inspeção física. Por exemplo, se você usar esta magia para adicionar um chapéu à sua indumentária, objetos atravessam o chapéu, e quem o tocar não sentirá nada ou sentirá sua cabeça e cabelos. Se você usar esta magia para parecer mais magro do que é, alguém que estenda a mão para tocá-lo pode esbarrar em você enquanto ela ainda estiver, aparentemente, tocando o ar.</p><p>Para descobrir que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência, devendo ser bem-sucedida em um teste de Inteligência (Investigação) contra a CD para evitar sua magia.</p>",source:"LdJ pg. 237",name:"Disfarçar-se"},"Dimension Door":{description:`<p>Você pode se teleportar a partir de sua localização atual para qualquer outro local dentro do alcance da magia. Você chega exatamente no local desejado. Pode se tratar de um lugar que você possa ver, visualizar ou descrever, relatando a distância e a direção, como "60 metros [200 ft.] em linha reta para baixo" ou "para cima e para o noroeste a um ângulo de 45 graus, a 90 metros [300 ft.]."</p>
<p>Você pode levar consigo objetos, desde que o peso deles não exceda aquele que você consiga carregar. Você também pode levar uma criatura voluntária, do seu tamanho ou menor, que esteja portando equipamentos até a capacidade de carga dela. A criatura deve estar a até 1,5 metro [5 ft.] de você quando você conjurar esta magia.</p>
<p>Se você ou qualquer criatura que você leve junto chegarem a um local ocupado por um objeto ou outra criatura, sofrerão, cada, 4d6 pontos de dano energético, e a magia falha em teleportá-los.</p>`,source:"LdJ pg. 268",name:"Porta Dimensional"},"Raise Dead":{description:"<p>Uma criatura que você toca retorna dos mortos, desde que não tenha falecido há mais de 10 dias. Se a alma dela estiver disposta e livre para retornar ao corpo, ela retorna à vida com 1 ponto de vida.</p><p>A magia também neutraliza quaisquer venenos e cura doenças não-mágicas que a afetavam no momento em que morreu. Entretanto, a magia não remove doenças mágicas ou efeitos semelhantes; se eles não forem cancelados antes da conjuração, voltam a ter efeito assim que a criatura voltar a viver. Esta magia não retorna um morto-vivo à vida.</p><p>Todas as lesões mortais são fechadas, mas partes perdidas do corpo não são restauradas. Se o cadáver tiver partes ou órgãos vitais do corpo faltando - como a cabeça, por exemplo, a magia falha automaticamente.</p><p>Voltar à vida após a morte é uma provação. O alvo sofre -4 de penalidade em todas as jogadas de ataque, salvaguardas e testes de atributo. Toda vez que o alvo completa um descanso longo, a penalidade é reduzida em 1, até desaparecer.</p>",source:"LdJ pg. 278",material:"um diamante no valor mínimo de 500 PO, que a magia consome",name:"Reviver os Mortos"},"Wall of Thorns":{description:`<p>Você cria uma muralha com o emaranhado de arbustos resistentes, flexíveis e repletos de espinhos que parecem agulhas. Ela aparece em uma superfície sólida, à sua vista, no alcance da magia e permanece enquanto esta durar. É possível escolher entre uma muralha de até 18 metros [60 ft.] de comprimento, 3 metros [10 ft.] de altura e 1,5 metros [5 ft.] de espessura ou uma esfera que tenha até 6 metros [20 ft.] de diâmetro, 6 metros [20 ft.] de altura e 1,5 metro [5 ft.] de espessura. A muralha bloqueia a linha de visão.</p>
<p>Quando a muralha surge, cada criatura dentro da área deve fazer uma salvaguarda de Destreza. Se falhar, sofre 7d8 pontos de dano perfurante, ou metade do dano em caso de sucesso.</p>
<p>Uma criatura pode atravessá-la, embora de forma lenta e dolorosa. Para cada 30 centímetros [1 foot] percorridos através dela, é necessário gastar 1,2 metro [4 ft.] de deslocamento. Se uma criatura entra na muralha pela primeira vez ou termina o próprio turno lá dentro, deve fazer uma salvaguarda de Destreza. Se falhar, sofre 7d8 pontos de dano cortante, ou metade do dano em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, ambos os danos aumentam em 1d8 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 260",material:"um punhado de espinhos",name:"Muralha de Espinhos"},"Animate Objects":{description:`<p>Objetos ganham vida ao seu comando. Escolha até dez objetos não-mágicos no alcance da magia e que não estejam sendo usados ou carregados. Alvos de tamanho Médio contam como dois objetos, de tamanho Grande contam como quatro objetos e os de tamanho Enorme contam como oito objetos. Você não pode animar qualquer objeto maior que Enorme. Cada alvo se anima, tornando-se uma criatura sobre o seu controle enquanto a magia durar ou até ficar com 0 pontos de vida.</p>
<p>Com uma ação bônus, você pode comandar mentalmente qualquer criatura que tenha criado com esta magia e que esteja a até 150 metros [500 ft.] de você (se controlar múltiplas criaturas, você pode comandar uma ou todas simultaneamente, emitindo o mesmo comando para todas). Você decide qual ação a criatura tomará e para onde ela se moverá durante o próximo turno dela, ou você pode emitir um comando mais genérico, como manter a guarda de uma câmara ou corredor. Se você não emitir nenhum comando, a criatura apenas se defende de criaturas hostis. Uma vez dada a ordem, a criatura continua seguindo-a até que a tarefa esteja completa.</p>
<div><b>ESTATÍSTICAS DE OBJETO ANIMADO</b></div><br><table class="big"><tr><th scope="col">Tamanho</th><th scope="col">PV</th><th scope="col">CA</th><th scope="col">Ataque</th><th scope="col">For</th><th scope="col">Des</th></tr><tr><td>Minúsculo</td><td>20</td><td>18</td><td>+8 para acertar, 1d4 + 4 pontos de dano</td><td>4</td><td>18</td></tr><tr><td>Pequeno</td><td>25</td><td>16</td><td>+6 para acertar, 1d8 + 2 pontos de dano</td><td>6</td><td>14</td></tr><tr><td>Médio</td><td>40</td><td>13</td><td>+5 para acertar, 2d6 + 1 pontos de dano</td><td>10</td><td>12</td></tr><tr><td>Grande</td><td>50</td><td>10</td><td>+6 para acertar, 2d10 + 2 pontos de dano</td><td>14</td><td>10</td></tr><tr><td>Enorme</td><td>80</td><td>10</td><td>+8 para acertar, 2d12 + 4 pontos de dano</td><td>18</td><td>6</td></tr></table>
<p>Um objeto animado é um constructo com CA, pontos de vida, ataques, Força e Destreza determinados pelo tamanho dele. A Constituição é 10, a Inteligência e Sabedoria são 3 e o Carisma é 1. O deslocamento é de 9 metros [30 ft.]; se o objeto não tiver pernas ou outros apêndices que possa usar para se locomover, ele tem um deslocamento de voo de 9 metros [30 ft.] e pode flutuar. Se o objeto estiver preso firmemente a uma superfície ou a um objeto maior, como uma corrente presa a uma parede, o deslocamento é 0. Ele tem percepção às cegas em um raio de 9 metros [30 ft.] e é cego além dessa distância. Quando o objeto animado ficar com 0 pontos de vida, ele reverte para a forma original e qualquer dano restante é transferido para a forma original de objeto.</p>
<p>Se você ordenar a um objeto que ataque, ele faz um único ataque corpo a corpo contra uma criatura a até 1,5 metro [5 ft.] de distância dele. Ele ataca com uma pancada, cujo bônus de ataque e dano contundente são determinados pelo tamanho dele. O DM pode determinar que um objeto específico inflige dano cortante ou perfurante, dependendo da forma que ele possuir.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, você pode animar mais dois objetos para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 213",name:"Animar Objetos"},"Flame Blade":{description:`<p>Você evoca uma lâmina de fogo em sua mão livre. A lâmina é semelhante em tamanho e forma a uma cimitarra e permanece enquanto a magia durar. Se você soltar a lâmina, ela desaparece, mas você pode evocá-la novamente com uma ação bônus.</p>
<p>A lâmina de fogo pode ser usada para fazer um ataque mágico corpo a corpo, usando uma ação. Se acertar, o alvo sofre 3d6 pontos de dano ígneo.</p>
<p>A lâmina flamejante emite luz plena em um raio de 3 metros [10 ft.] e cria meia-luz por 3 metros adicionais.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d6 para cada dois círculos do espaço de magia acima do 2º.</p>`,source:"LdJ pg. 252",material:"uma folha de sumagre",name:"Lâmina Flamejante"},"Delayed Blast Fireball":{description:`<p>Um facho de luz amarela dispara do seu dedo em riste, condensando-se na forma de uma conta brilhante num ponto escolhido dentro do alcance da magia por toda a duração. Quando a magia se encerra, seja porque sua concentração foi quebrada ou por decisão sua, a conta desabrocha, com um rugido baixo, em uma explosão de chamas que se alastram pelos cantos. Cada criatura em uma esfera com raio de 6 metros [20-foot-radius sphere] centrada na conta deve fazer uma salvaguarda de Destreza. Se falhar, sofre dano ígneo equivalente ao total acumulado de dano, ou metade do dano, em caso de sucesso.</p>
<p>O dano base da magia é 12d6. Se ao final do seu turno a conta ainda não tiver sido detonada, o dano aumenta em 1d6.</p>
<p>Se a conta brilhante for tocada antes que o intervalo expire, a criatura que a tocar precisa fazer uma salvaguarda de Destreza. Se falhar, a magia encerra imediatamente e a conta explode em chamas; se for bem-sucedida, a criatura pode arremessar a conta a até 12 metros [40 ft.] de distância. Se a conta atingir uma criatura ou objeto sólido, a magia se encerra e ela explode.</p>
<p>O fogo danifica objetos na área e incendeia objetos inflamáveis que não estejam sendo usados ou carregados.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 8º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 7º.</p>`,source:"LdJ pg. 220",material:"uma pequena bola de guano de morcego e enxofre",name:"Bola de Fogo Adiável"},Longstrider:{description:`<p>Você toca uma criatura. O deslocamento do alvo aumenta em 3 metros [10 ft.] enquanto a magia durar.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode enfeitiçar uma criatura adicional para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 266",material:"uma pitada de poeira",name:"Passos Largos"},Symbol:{description:`<p>Ao conjurar esta magia, você traça um glifo prejudicial, inscrevendo-o em uma superfície (como uma secção de piso, uma parede ou uma mesa) ou dentro de um objeto que pode ser fechado para escondê-lo (como um livro, um pergaminho ou arca de tesouro). Se você escolher uma superfície, o símbolo pode cobrir uma área de superfície não maior do que 3 metros [10 ft.] de diâmetro. Se a opção for por um objeto, ele precisa permanecer no mesmo lugar; se for movido mais do que 3 metros de onde a magia foi conjurada, o símbolo é quebrado e a magia termina sem ser disparada.</p>
<p>O símbolo é quase invisível, exigindo um teste de Inteligência (Investigação) contra a CD para evitar sua magia para encontrá-lo.</p>
<p>Você decide o que ativa o glifo ao conjurar a magia. Para aqueles que forem inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou pisar no glifo, remover um outro objeto que o cubra, aproximar-se a uma certa distância dele ou manipular um objeto que o contenha. Para os que forem inscritos dentro de algo, as condições podem ser a abertura do objeto, se aproximar a uma certa distância, ou ver ou ler o glifo.</p>
<p>Você pode refinar o gatilho para que a magia seja ativada apenas sob certas circunstâncias ou de acordo com as características físicas da criatura (como altura ou peso), ou tipo físico (por exemplo, a proteção poderia ser programada para afetar megeras ou metamorfos). Você também pode especificar criaturas que não ativarão o glifo, como aquelas que disserem uma palavra-chave específica.</p>
<p>Quando você inscreve o glifo, escolha uma das opções abaixo como efeito. Uma vez ativado, o glifo brilha, preenchendo uma esfera de 18 metros [60 ft.] com meia-luz durante 10 minutos, após isso, a magia termina. Ao ser ativado, cada criatura dentro da esfera será afetada pelo efeito escolhido para o glifo, assim como qualquer criatura que entre na esfera pela primeira vez ou termine o próprio turno ali.</p>
<ul>
<li><strong>Atordoamento.</strong> Cada alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, torna-se atordoado durante 1 minuto.</li>
<li><strong>Desesperança.</strong> Cada alvo deve fazer uma salvaguarda de Carisma. Se falhar, torna-se dominado pelo desespero por 1 minuto. Durante este período, o alvo não pode atacar criaturas utilizando habilidades que causem dano, magias ou outros efeitos mágicos.</li>
<li><strong>Discórdia.</strong> Cada alvo deve fazer uma salvaguarda de Constituição. Se falhar, o alvo discute e contradiz outra criatura durante 1 minuto. Durante este período, o alvo é incapaz de comunicação coerente e tem desvantagem em jogadas de ataque e testes de atributo.</li>
<li><strong>Dor.</strong> Cada alvo deve fazer uma salvaguarda de Constituição. Se falhar, torna-se incapacitado, durante 1 minuto, devido a dores excruciantes.</li>
<li><strong>Insanidade.</strong> Cada alvo deve fazer uma salvaguarda de Inteligência. Se falhar, torna-se insano durante 1 minuto. Uma criatura insana não pode executar ações, ler ou entender o que os outros dizem e fala de modo incoerente. O DM controla o movimento dela, o qual é errático.</li>
<li><strong>Medo.</strong> Cada alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, torna-se amedrontado por 1 minuto. Uma criatura amedrontada solta tudo que estiver segurando e deve se mover para pelo menos 9 metros [30 ft.] de distância do glifo em cada um de seus turnos, se possível.</li>
<li><strong>Morte.</strong> Cada alvo deve fazer uma salvaguarda de Constituição. Se falhar, sofre 10d10 pontos de dano necrótico, ou metade do dano em caso de sucesso.</li>
<li><strong>Sono.</strong> Cada alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, cairá inconsciente durante 10 minutos. A criatura acorda se sofrer dano ou se alguém usar uma ação para chacoalhá-la ou estapeá-la até a acordar.</li>
</ul>`,source:"LdJ pg. 280",material:"mercúrio, fósforo e pó de diamante e opala com um valor mínimo de 1.000 PO, que a magia consome",name:"Símbolo"},Daylight:{description:"<p>Uma esfera de luz com raio de 18 metros [60 ft.] se expande a partir de um ponto à sua escolha e no alcance da magia. A esfera é de luz plena e emite meia-luz por mais 18 metros [60 ft.].</p><p>Se o ponto escolhido for um objeto que você está segurando ou que não esteja sendo usado ou carregado, a luz brilha a partir do objeto e move-se com ele. Cobrir completamente o objeto afetado com algo opaco, como uma tigela ou um elmo, bloqueia a luz.</p><p>Se qualquer área desta magia se sobrepuser a uma área de escuridão criada por uma magia de 3º círculo ou inferior, a magia que criou a escuridão é anulada.</p>",source:"LdJ pg. 254",name:"Luz do Dia"},"Hideous Laughter":{description:`<p>Você escolhe uma criatura à sua vista e no alcance da magia, que passa a perceber tudo como hilariantemente engraçado, sofrendo ataques de riso, caso seja afetada pela magia. O alvo deve ser bem-sucedido em uma salvaguarda de Sabedoria ou fica caído, incapacitado e incapaz de se levantar enquanto a magia durar. Uma criatura de Inteligência 4 ou menos não pode ser afetada.</p>
<p>Ao final de cada turno, e em cada ocasião que sofrer dano, o alvo pode tentar outra salvaguarda de Sabedoria. O alvo tem vantagem se a salvaguarda for disparada por dano sofrido. Em caso de sucesso, a magia se encerra.</p>`,material:"tortas minúsculas e uma pena, que é agitada no ar",name:"Gargalhada Nefasta"},"Create Food and Water":{description:"<p>Você cria 20 quilos [45 pounds] de comida e 120 litros [30 gallons] de água no chão ou em recipientes no alcance da magia, o suficiente para sustentar até quinze humanoides ou cinco montarias por 24 horas. A comida não é temperada, mas é nutritiva e estraga se não for ingerida dentro de 24 horas. A água é limpa e não estraga.</p>",source:"LdJ pg. 231",name:"Criar Comida e Água"},"Phantasmal Killer":{description:`<p>Você se conecta aos pesadelos de uma criatura à sua vista e dentro do alcance da magia. A criatura é assolada por uma manifestação ilusória dos próprios medos mais profundos, visível apenas para ela. O alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, fica amedrontado enquanto a magia durar. No final de cada turno do alvo, enquanto a magia durar, ele deve fazer uma salvaguarda de Sabedoria. Se falhar, sofre 4d10 pontos de dano psíquico; se for bem-sucedido, a magia termina.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 4º.</p>`,source:"LdJ pg. 216",name:"Assassino Fantasmagórico"},Light:{description:"<p>Você toca um objeto que não seja maior do que 3 metros [10 ft.] em qualquer dimensão. Até o fim da magia, o objeto emite luz plena em um raio de 6 metros [20-foot radius] e cria meia-luz por 6 metros [20 ft.] adicionais. Essa luz pode ser da cor de sua preferência. Cobrir completamente o objeto afetado com algo opaco bloqueia a luz. A magia termina se você conjurá-la novamente ou se a dispensar com uma ação.</p><p>Caso você designe como alvo um objeto que esteja sendo carregado ou usado por uma criatura hostil, a criatura deve ser bem-sucedida em uma salvaguarda de Destreza para evitar a magia.</p>",source:"LdJ pg. 254",material:"um vaga-lume ou musgo fosforescente",name:"Luz"},"Silent Image":{description:"<p>Você cria a imagem de um objeto, criatura ou algum fenômeno visual que não seja maior do que um cubo de 4,5 metros [15-foot cube]. A imagem surge em um lugar no alcance da magia e permanece enquanto esta durar. A imagem é puramente visual; ela não é acompanhada de som, cheiro ou outros efeitos sensoriais.</p><p>Você pode usar sua ação para fazer a imagem se deslocar para qualquer lugar dentro do alcance da magia. À medida que a imagem muda de lugar, você pode alterar a aparência para que movimentos dela pareçam naturais. Por exemplo, se você criar a imagem de uma criatura e movê-la, é possível mudar a imagem para que ela pareça estar andando.</p><p>Interação física com a imagem revela que ela é uma ilusão, pois coisas podem passar através dela. Uma criatura que use uma ação para examinar a imagem pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra a CD para evitar sua magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura pode ver através da imagem.</p>",source:"LdJ pg. 249",material:"um pouco de lã",name:"Imagem Silenciosa"},"Dancing Lights":{description:"<p>Você cria até quatro luzes no alcance da magia, fazendo com que se pareçam com tochas, lanternas ou globos brilhantes que pairam no ar por toda a duração da magia. Você também pode combinar as quatro luzes para que brilhem em uma forma vagamente humanoide de tamanho Médio. Qualquer que seja a forma escolhida, cada luz emite meia-luz em um raio de 3 metros [10-foot radius].</p><p>Com uma ação bônus em seu turno, você pode mover as luzes até 18 metros [60 ft.] para um novo lugar dentro do alcance da magia. Uma luz deve estar a até 6 metros [20 ft.] de outra luz criada por esta magia, e uma se apaga quando ultrapassa o alcance da magia.</p>",source:"LdJ pg. 254",material:"um pouco de fósforo ou uma folha de olmo ou uma larva luminosa",name:"Luzes Dançantes"},"Mage Armor":{description:"<p>Você toca uma criatura voluntária que não esteja usando armadura. Uma força mágica protetora circunda-a enquanto a magia durar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia termina se o alvo vestir uma armadura ou se você a dispensar com uma ação.</p>",source:"LdJ pg. 216",material:"um pedaço de couro curtido",name:"Armadura Arcana"},Contagion:{description:`<p>Seu toque inflige doenças. Faça um ataque mágico corpo a corpo contra uma criatura ao seu alcance. Em caso de acerto, você inflige à criatura uma das doenças descritas abaixo, à sua escolha.</p>
<p>No final de cada um dos turnos do alvo, ele deve fazer uma salvaguarda de Constituição. Após falhar em três salvaguardas, a doença continua a surtir efeito enquanto a magia durar, e a criatura deve parar de realizar essas salvaguardas. Após ser bem-sucedida em três dessas salvaguardas, a criatura se recupera da doença e a magia se encerra.</p>
<p>Dado esta magia infligir uma doença natural no alvo, qualquer efeito que cure a doença ou alivie seus efeitos, aplica-se igualmente à doença infligida por esta magia.</p>
<p><strong>Ardência Mental.</strong> A mente da criatura torna-se febril. A criatura tem desvantagem em testes de Inteligência e salvaguardas de Inteligência, além de, em combates, se comportar como se estivesse sob os efeitos da magia Confusão.</p>
<p><strong>Doença da Cegueira.</strong> A dor aflige a mente da criatura e seus olhos tornam-se brancos e leitosos. A criatura tem desvantagem nos testes e salvaguardas de Sabedoria e está cega.</p>
<p><strong>Febre Perniciosa.</strong> Uma febre violenta percorre o corpo da criatura. A criatura tem desvantagem nos testes e salvaguardas de Força, bem como nas jogadas de ataque que utilizem Força.</p>
<p><strong>Necrose da Carne.</strong> A carne da criatura começa a se decompor. A criatura tem desvantagem nos testes de Carisma e vulnerabilidade a todo tipo de dano.</p>
<p><strong>Ruína Pegajosa.</strong> A criatura começa a sangrar incontrolavelmente. Ela tem desvantagem nos testes e salvaguardas de Constituição. Além disso, sempre que sofrer dano, fica atordoada até o final do próximo turno dela.</p>
<p><strong>Tremedeira.</strong> A criatura é acometida por espasmos. Ela tem desvantagem nos testes e salvaguardas de Destreza, bem como nas jogadas de ataque que utilizem Destreza.</p>`,source:"LdJ pg. 227",name:"Contágio"},"Zone of Truth":{description:`<p>Você cria uma zona mágica, protegendo contra enganação uma área de esfera com 4,5 metros de raio [15-foot-radius sphere] centrada em um ponto à sua escolha, no alcance da magia. Enquanto a magia durar, quando uma criatura entra pela primeira vez ou inicia o turno na área da magia, ela deve fazer uma salvaguarda de Carisma. Se falhar, a criatura não pode falar uma mentira deliberada enquanto estiver no raio da magia. Você sabe se cada criatura é bem-sucedida ou se falhou na salvaguarda.</p>
        <p>Uma criatura afetada por esta magia está ciente dos efeitos dela e, portanto, pode evitar responder às perguntas que normalmente responderia com uma mentira. A criatura pode ser evasiva em suas respostas enquanto permanecer dentro dos limites da zona da verdade.</p>`,source:"LdJ pg. 289",name:"Zona da Verdade"},"Black Tentacles":{description:`<p>Tentáculos negros se contorcem, preenchendo uma área de 6 metros quadrados [20-foot square] de solo à sua vista, no alcance da magia. Enquanto a magia durar, os tentáculos transformam o solo da área em terreno difícil.</p>
<p>Quando uma criatura entra pela primeira vez ou quando inicia o próprio turno na área afetada, ela deve fazer uma salvaguarda de Destreza. Se falhar, sofre 3d6 pontos de dano contundente, ficando @Compendium[dnd5e.rules.QRKWz3p6v9Rl1Tzh]{contida} pelos tentáculos até que a magia encerre. Uma criatura que inicie o próprio turno na área e esteja @Compendium[dnd5e.rules.QRKWz3p6v9Rl1Tzh]{contida} pelos tentáculos, sofre 3d6 pontos de dano contundente.</p>
<p>Uma criatura @Compendium[dnd5e.rules.QRKWz3p6v9Rl1Tzh]{contida} pelos tentáculos pode usar a própria ação para fazer um teste de Força ou Destreza (à escolha dela) contra a CD para evitar sua magia. Em caso de sucesso, ela se liberta.</p>`,material:"um pedaço do tentáculo de um polvo ou lula gigante",name:"Tentáculos Negros"},"See Invisibility":{description:"<p>Enquanto a magia durar, você vê criaturas e objetos invisíveis, como se eles fossem visíveis, além de poder ver no Plano Etéreo. Criaturas e objetos etéreos parecem fantasmagóricos e translúcidos.</p>",source:"LdJ pg. 288",material:"uma pitada de talco e uma pequena pitada de pó de prata",name:"Ver o Invisível"},"Tree Stride":{description:`<p>Você ganha a habilidade de entrar em uma árvore e se mover de dentro dela para dentro de outra árvore do mesmo tipo no alcance de 150 metros [500 ft.]. Ambas as árvores devem estar vivas e precisam ser no mínimo do mesmo tamanho que você. É preciso usar 1,5 metro [5 ft.] de movimento para entrar em uma árvore. Você instantaneamente sabe a localização de todas as outras árvores do mesmo tipo a até 150 metros [500 ft.] e, como parte do mesmo movimento usado para entrar na árvore, você pode passar para dentro de uma dessas árvores ou sair da árvore em que está. Você aparece em um ponto à sua escolha a 1,5 metro [5 ft.] da árvore de destino, usando outro 1,5 metro [5 ft.] de movimento. Se não tiver mais movimento disponível, você aparece a 1,5 metro [5 ft.] da árvore que entrou.</p>
<p>Você pode usar esta habilidade de transporte uma vez por rodada enquanto a magia durar. Você deve terminar cada turno fora de uma árvore.</p>`,source:"LdJ pg. 266",name:"Passo Arbóreo"},"Create Undead":{description:`<p>Esta magia só pode ser conjurada à noite. Escolha até três cadáveres de humanoides Pequenos ou Médios dentro do alcance da magia. Cada corpo se torna um carniçal sob o seu controle (O DM fornece as estatísticas dessas criaturas).</p>
<p>Com uma ação bônus em cada um dos seus turnos, você pode comandar mentalmente qualquer criatura animada por você com esta magia, se ela estiver a até 36 metros [120 ft.] de você (se várias criaturas forem controladas, é possível controlar qualquer uma ou todas ao mesmo tempo, desde que seja dado o mesmo comando para todas delas). Você decide qual ação a criatura tomará e para onde se moverá durante o próximo turno dela, ou você pode emitir um comando geral, como manter a guarda de uma câmara ou corredor. Se você não emitir nenhum comando, a criatura apenas se defende de criaturas hostis. Uma vez dada a ordem, a criatura continua a segui-la até que a tarefa esteja completa.</p>
<p>A criatura estará sob seu controle por 24 horas e, depois, não obedece mais a qualquer comando que você tenha dado. Para manter o controle por mais 24 horas, você deve conjurar novamente esta magia na criatura antes que o período atual de 24 horas acabe. Esse uso da magia reafirma seu controle sobre até três mortos-vivos que tenham sido animados por você com esta magia, em vez de animar outros.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo, você pode animar ou reafirmar o controle sobre até quatro carniçais. Ao conjurar esta magia usando um espaço de magia de 8º círculo, você pode animar ou reafirmar o controle sobre até cinco carniçais ou dois lívidos ou inumanos. Ao conjurar esta magia usando um espaço de magia de 9º círculo, você pode animar ou reafirmar o controle sobre até cinco carniçais ou três lívidos ou inumanos, ou duas múmias.</p>`,source:"LdJ pg. 231",material:"um pote de barro com terra de cova, um pote de barro com água estagnada e uma ônix preta de 150 PO para cada cadáver",name:"Criar Mortos-Vivos"},"Fire Bolt":{description:`<p>Você lança uma faísca de fogo em uma criatura ou objeto no alcance da magia. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d1O pontos de dano ígneo. Um objeto inflamável atingido por esta magia inflama-se caso não esteja sendo vestido ou carregado.</p>
<p>O dano desta magia aumenta em 1d10 quando você alcança o 5º nível (2d10), o 11º nível (3d10) e o 17º nível (4d10).</p>`,source:"LdJ pg. 272",name:"Raio de Fogo"},"Reverse Gravity":{description:`<p>Esta magia inverte a gravidade numa área de 15 metros de raio e 30 metros de altura, formando um cilindro [50-foot-radius, 100-foot high cylinder] centrado em um ponto no alcance da magia. Todas as criaturas e objetos que não estão, de alguma forma, ancorados ao solo nessa área, "caem" para cima e alcançam o topo da área quando a magia é conjurada. Uma criatura pode fazer uma salvaguarda de Destreza para se agarrar a um objeto fixo que possa alcançar, evitando a queda.</p>
<p>Se algum objeto sólido (como um teto) for encontrado durante esta queda, criaturas e objetos caindo se chocam contra ele, como fariam durante uma queda normal para baixo. Se um objeto ou criatura atingir o topo da área sem bater em nada, ele permanece lá, oscilando ligeiramente, enquanto a magia durar.</p>
<p>Ao final da duração, objetos e criaturas afetados caem de volta para baixo.</p>`,source:"LdJ pg. 250",material:"um magnetita e limalhas de ferro",name:"Inverter a Gravidade"},Counterspell:{description:`<p>Você tenta interromper uma criatura no processo de conjurar uma magia. Se ela estiver conjurando uma magia de 3º círculo ou inferior, a magia falha e não tem efeito. Se ela estiver conjurando uma magia de 4º círculo ou superior, faça um teste de atributo usando o seu atributo de conjuração. A CD é igual a 10 + o círculo da magia conjurada pela criatura. Em caso de sucesso, a magia da criatura falha e não surte efeito.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, a magia interrompida não tem efeito se o círculo dela for menor ou igual ao círculo do espaço de magia que você usou.</p>`,source:"LdJ pg. 227",name:"Contramagia"},"Antimagic Field":{description:`<p>Você é circundado por uma esfera antimagia invisível, com 3 metros de raio [10-foot-radius sphere]. Essa área é separada da energia mágica que permeia o Multiverso. Dentro da esfera, magias não podem ser conjuradas, criaturas convocadas desaparecem e itens mágicos tornam-se mundanos. Enquanto a magia durar, a esfera, centrada em você, move-se para onde quer que você vá.</p>
<p>Magias e outros efeitos mágicos, exceto aqueles criados por um artefato ou uma divindade, são suprimidos na esfera e não podem penetrá-la. Um espaço de magia utilizado para conjurar uma magia suprimida é consumido normalmente. Enquanto um efeito é suprimido, ele não funciona, mas o tempo que passa suprimido conta para sua duração.</p>
<p><strong>Áreas de Magias.</strong> A área de outra magia ou efeito mágico como Bola de Fogo, não se alastra para dentro da esfera. Se a esfera se sobrepuser a uma área de magia, a parte da área coberta pela esfera é suprimida. Por exemplo, as chamas criadas por Muralha de Fogo são suprimidas dentro da esfera, criando uma lacuna na muralha se a área sobreposta for grande o suficiente.</p>
<p><strong>Criaturas e Objetos.</strong> Quaisquer criaturas ou objetos conjurados ou criados por magia desaparecem temporariamente da existência enquanto estiverem dentro da esfera, reaparecendo instantaneamente uma vez que o espaço ocupado por eles não esteja mais dentro da esfera.</p>
<p><strong>Dissipar Magia.</strong> Magias e outros efeitos mágicos, como Dissipar Magia, não afetam a esfera. Da mesma forma, as esferas criadas por campos antimagia diferentes não anulam umas às outras.</p>
<p><strong>Efeitos de Alvo.</strong> Magias e outros efeitos mágicos, como os de Mísseis Mágicos e Enfeitiçar Pessoa, que tenham como alvo uma criatura ou um objeto dentro da esfera não têm efeito sobre eles.</p>
<p><strong>Itens Mágicos.</strong> As propriedades e poderes de itens mágicos são suprimidos dentro da esfera. Por exemplo, uma espada longa +1 dentro da esfera funciona como uma espada longa não-mágica.</p>
<p>As propriedades e poderes de uma arma mágica são suprimidos se usados contra um alvo dentro da esfera ou usados por um atacante dentro da esfera. Se uma arma ou munição mágica sair completamente da esfera (por exemplo, se você atirar uma flecha ou arremessar uma lança mágica em um alvo fora da esfera), a magia do item deixa de ser suprimida assim que este deixar a esfera.</p>
<p><strong>Magias.</strong> Quaisquer magias ou outros efeitos mágicos ativos sobre uma criatura ou objeto dentro da esfera são suprimidos enquanto a criatura ou objeto estiver dentro dela.</p>
<p><strong>Viagem Mágica.</strong> Teleporte e viagens planares falham dentro da esfera, seja esta o ponto de destino ou o ponto de partida de tal viagem mágica. Um portal para outra localidade, mundo ou plano de existência, assim como uma abertura para um espaço interdimensional, como o criado pela magia Corda Extradimensional, fecha-se temporariamente enquanto estiver dentro da esfera.</p>`,source:"LdJ pg. 221",material:"uma pitada de pó de ferro ou raspas de ferro",name:"Campo Antimagia"},"Lesser Restoration":{description:"<p>Você toca uma criatura e pode tanto curar uma doença quanto remover uma condição que a aflija. A condição pode ser cego, envenenado, paralisado ou surdo.</p>",source:"LdJ pg. 278",name:"Restauração Menor"},"Gust of Wind":{description:"<p>Uma linha de vento forte, com 18 metros [60 ft.] de comprimento e 3 metros [10 ft.] de largura, é soprada a partir de você em uma direção à sua escolha, enquanto a magia durar. Cada criatura que comece seu próprio turno na linha deve ser bem-sucedida em uma salvaguarda de Força ou é empurrada 4,5 metros [15 ft.] para longe de você, a favor da linha de vento.</p><p>Qualquer criatura na linha deve gastar 3 metros [10 ft.] de deslocamento para cada 1,5 metro [5 ft.] que se movimentar na sua direção.</p><p>A lufada dispersa gases ou vapor e apaga velas, tochas e chamas semelhantes que estejam desprotegidas na área. Ela faz com que chamas protegidas, como as de lanternas, oscilem descontroladamente e tenham 50 por cento de chance de se extinguirem.</p><p>Com uma ação bônus em cada um dos seus turnos antes do final da magia, você pode mudar a direção na qual a linha sopra a partir de você.</p>",source:"LdJ pg. 254",material:"uma semente de legume",name:"Lufada de Vento"},"Flaming Sphere":{description:`<p>Uma esfera de fogo com 1,5 metro de diâmetro [5-foot-diameter sphere] aparece em um espaço desocupado à sua escolha, no alcance da magia e permanece enquanto esta durar. Qualquer criatura que termine seu próprio turno no alcance de 1,5 metro [5 ft.] da esfera deve fazer uma salvaguarda de Destreza. Se falhar, sofre 2d6 pontos de dano ígneo, ou metade do dano em caso de sucesso.</p>
<p>Com uma ação bônus, você pode mover a esfera até 9 metros [30 ft.]. Se forçá-la contra uma criatura, esta deve fazer uma salvaguarda contra o dano da esfera, que fica imóvel neste turno.</p>
<p>Ao mover a esfera, você pode direcioná-la sobre barreiras de até 1,5 metro [5 ft.] de altura e fazê-la saltar sobre fossos de até 3 metros [10 ft.] de largura. A esfera incendeia objetos inflamáveis que não estejam sendo usados ou carregados, emitindo luz plena em um raio de 6 metros e meia-luz por mais 6 metros.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 241",material:"um pouco de sebo, uma pitada de enxofre e poeira de ferro em pó",name:"Esfera Flamejante"},"Antipathy/Sympathy":{description:`<p>Esta magia atrai ou repele criaturas à sua escolha. Você escolhe um alvo dentro do alcance da magia, seja uma criatura ou objeto Enorme ou menor, ou uma área que não seja maior do que um cubo de 60 metros de lado [200-foot cube]. Depois, especifique um tipo de criatura inteligente, como dragões vermelhos, goblins ou vampiros. Você confere ao alvo uma aura que atrai ou repele o tipo de criatura especificado, enquanto a magia durar. Escolha antipatia ou simpatia como efeito das auras.</p>
<p><strong>Antipatia.</strong> O encantamento faz com que criaturas do tipo que você designou sintam um intenso desejo de deixar a área e evitar o alvo. Quando a criatura avistar o alvo ou aproximar-se a até 18 metros [60 ft.] ou menos dele, a criatura deve ser bem-sucedida em uma salvaguarda de Sabedoria ou fica amedrontada. A criatura permanece amedrontada enquanto puder ver o alvo ou estiver a até 18 metros [60 ft.] ou menos dele. Enquanto estiver amedrontada pelo alvo, a criatura deve usar seu deslocamento para mover-se para o local seguro mais próximo de onde não possa mais ver o alvo. Se a criatura mover-se para mais que 18 metros [60 ft.] do alvo e não puder mais vê-lo, ela não está mais amedrontada, mas fica amedrontada novamente se avistar o alvo ou ficar a até 18 metros [60 ft.] ou menos dele.</p>
<p><strong>Simpatia.</strong> O encantamento faz com que as criaturas especificadas sintam um intenso desejo de se aproximar do alvo, enquanto estiverem a até 18 metros [60 ft.] dele ou puderem vê-lo. Quando a criatura vir o alvo, ou se aproximar a até 18 metros [60 ft.] ou menos dele, ela deve ser bem-sucedida em uma salvaguarda de Sabedoria ou usar o deslocamento em cada um dos turnos dela para entrar na área ou ficar sob alcance do alvo. Tendo feito isso, a criatura não pode afastar-se voluntariamente do alvo.</p>
<p>Se o alvo causar dano ou ferir de qualquer outra forma a criatura afetada por esta magia, esta pode fazer uma salvaguarda de Sabedoria para encerrar o efeito, como descrito adiante.</p>
<p><strong>Encerrando o Efeito.</strong> Se uma criatura afetada por esta magia terminar o turno a uma distância maior do que 18 metros [60 ft.] do alvo ou sem poder vê-lo, ela deve fazer uma salvaguarda de Sabedoria. Em caso de sucesso, ela não está mais sob efeito desta magia e reconhece o sentimento de repugnância ou de atração como sendo mágico. Além disso, uma criatura sob este efeito pode realizar outra salvaguarda de Sabedoria a cada 24 horas que a magia persistir.</p>
<p>Uma criatura bem-sucedida na salvaguarda contra esse efeito fica imune a ele por 1 minuto, podendo voltar a ser afetada após esse período.</p>`,source:"LdJ pg. 214",material:"um pedaço de alume embebido ou em vinagre para o efeito de antipatia ou em uma gota de mel para o efeito de simpatia",name:"Antipatia/Simpatia"},Blink:{description:`<p>Jogue 1d20 no final de cada um de seus turnos enquanto a magia durar. Com um resultado igual ou maior que 11, você desaparece do seu plano de existência atual e aparece no Plano Etéreo (a magia falha e a conjuração é desperdiçada se você já estiver nesse plano). No início do seu próximo turno, e quando a magia terminar, se você estiver no Plano Etéreo, você retorna para um espaço desocupado à sua escolha, à sua vista e que esteja a até 3 metros [10 ft.] do espaço de onde você desapareceu. Se não houver espaço desocupado disponível dentro desse alcance, você aparece no próximo espaço desocupado (escolhido aleatoriamente, se mais do que um espaço estiver igualmente próximo). Você pode encerrar esta magia com uma ação.</p>
<p>Enquanto estiver no Plano Etéreo, você pode ver (em tons de cinza, a uma distância de até 18 metros [60 ft.]) e ouvir seu plano de origem. Você só pode afetar e ser afetado por criaturas que estejam no Plano Etéreo. Criaturas que não estejam nesse plano não podem percebê-lo ou interagir com você, a menos que tenham uma habilidade específica que lhes permita fazê-lo.</p>`,source:"LdJ pg. 267",name:"Piscar"},Sending:{description:"<p>Uma mensagem de vinte e cinco palavras ou menos é enviada para uma criatura conhecida. A criatura ouve a mensagem mentalmente, reconhece você como o remetente, caso lhe conheça, e pode responder da mesma maneira imediatamente. A magia permite criaturas com o valor de Inteligência mínimo de 1 entender o sentido da sua mensagem.</p><p>A mensagem pode ser enviada a qualquer distância e até a outros planos de existência, mas se o alvo estiver em um plano diferente do seu, existe uma chance de 5 por cento de que ela não seja entregue.</p>",source:"LdJ pg. 276",material:"um pequeno pedaço de um fio fino de cobre",name:"Remeter"},Disintegrate:{description:`<p>Um pequeno raio verde sai da ponta do seu dedo, dirigindo-se a um alvo à sua vista, no alcance da magia. O alvo deve ser uma criatura, um objeto ou uma criação de força mágica, como a barreira criada por Muralha de Energia.</p>
<p>Uma criatura atingida por esta magia deve fazer uma salvaguarda de Destreza. Se falhar, o alvo sofre 10d6+40 pontos de dano energético, sendo desintegrado caso seus pontos de vida sejam reduzidos a 0.</p>
<p>Uma criatura desintegrada e tudo que ela estiver usando e carregando, exceto itens mágicos, são reduzidos a uma pilha de poeira cinza. A criatura pode ter a vida restaurada apenas por meio da magia true Ressurreição Verdadeira ou Desejo.</p>
<p>Esta magia desintegra automaticamente um objeto não mágico de tamanho Grande ou menor ou uma criação de força mágica. Se o alvo for um objeto ou criação de força mágica de tamanho Enorme ou maior, esta magia desintegra uma porção equivalente a um cubo de 3 metros [10-foot cube] de lado dela. Itens mágicos não são afetados por esta magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, o dano da magia aumenta em 3d6 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 235",material:"uma magnetita e uma pitada de pó",name:"Desintegrar"},"Finger of Death":{description:`<p>Você descarrega energia negativa em uma criatura à sua vista e no alcance da magia, causando-lhe fortes dores. O alvo deve fazer uma salvaguarda de Constituição. Se falhar, sofre 7d8+30 pontos de dano necrótico, ou metade do dano em caso de sucesso.</p>
<p>Um humanoide morto por esta magia levanta-se, no início do seu próximo turno, como um zumbi que esta permanentemente sob o seu comando, seguindo suas ordens verbais da melhor forma possível.</p>`,source:"LdJ pg. 234",name:"Dedo da Morte"},Telekinesis:{description:`<p>Você ganha a habilidade de mover ou manipular criaturas ou objetos através do pensamento. Ao conjurar a magia e com uma ação a cada rodada enquanto a magia durar, você pode exercer sua vontade em uma criatura ou objeto à sua vista no alcance desta, causando o efeito apropriado a seguir. Você pode afetar o mesmo alvo rodada após rodada ou escolher um novo a qualquer momento. Se mudar de alvo, o anterior deixa de ser afetado pela magia.</p>
<p><strong>Criatura.</strong> Você pode tentar mover uma criatura de tamanho Enorme ou menor. Faça um teste de atributo usando sua atributo de conjuração resistido pelo teste de Força da criatura. Se vencer, você move a criatura a até 9 metros [30 ft.] em qualquer direção, inclusive para cima, mas não além do alcance da magia. Até o final do seu próximo turno, a criatura está contida pelo seu agarrão telecinético. Uma criatura erguida está suspensa no ar.</p>
<p>Em rodadas subsequentes, você pode usar sua ação para tentar manter seu agarrão telecinético na criatura repetindo o teste resistido.</p>
<p><strong>Objeto.</strong> Você pode tentar mover um objeto que não pese mais do que 450 quilos [1000 pounds]. Se o objeto não estiver sendo usado ou carregado, você o move automaticamente a até 9 metros [30 ft.] em qualquer direção, limitado no alcance da magia.</p>
<p>Se o objeto estiver sendo usado ou carregado por uma criatura, você deve fazer um teste de atributo com seu atributo de conjuração resistido pelo teste de Força da criatura. Se for bem-sucedido, você puxa o objeto para longe da criatura e pode movê-lo a até 9 metros [30 ft.] em qualquer direção, limitado-se ao alcance da magia.</p>
<p>Você pode exercer controle fino em objetos com seu agarrão telecinético, como manipular uma ferramenta simples, abrir uma porta ou recipiente, armazenar ou recuperar um item de um recipiente, ou derramar o conteúdo de um frasco.</p>`,source:"LdJ pg. 283",name:"Telecinese"},"Speak with Dead":{description:"<p>Você concede um arremedo de vida e inteligência a um cadáver à sua escolha, no alcance da magia, permitindo-lhe responder às perguntas feitas a ele. O cadáver ainda deve ter uma boca e não pode ser um morto-vivo. A magia falha se ele já foi alvo desta magia nos últimos 10 dias.</p><p>Enquanto a magia durar, você pode fazer até cinco perguntas. O cadáver sabe apenas o que sabia em vida, incluindo idiomas que conhecia. As respostas são normalmente curtas, enigmáticas ou repetitivas, e o cadáver não é compelido a dar uma resposta verdadeira se você for hostil ou se ele o reconhecer como um inimigo. Esta magia não devolve a alma ao corpo da criatura, apenas seu espírito animado. Assim, o cadáver não pode aprender novas informações, não compreende qualquer coisa que aconteceu desde que morreu, e não pode especular sobre eventos futuros.</p>",source:"LdJ pg. 243",material:"incenso aceso",name:"Falar com Mortos"},"Fog Cloud":{description:`<p>Você cria uma esfera de nevoeiro com raio de 6 metros [20-foot radius], centrado em um ponto no alcance da magia. A esfera se alastra, contornando os cantos e a área afetada fica totalmente obscurecida. Ele permanece enquanto a magia durar ou até que um vento de velocidade moderada (de pelo menos 15 quilômetros por hora) ou maior a disperse.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o raio da esfera aumenta em 6 metros para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 262",name:"Névoa Obscurecente"},"Arcane Eye":{description:"<p>Você cria um olho mágico e invisível dentro do alcance da magia. Esse olho paira no ar enquanto a magia durar.</p><p>Você recebe mentalmente as imagens vindas do olho, que conta com visão normal e visão no escuro de 9 metros [30 ft.]. O olho pode enxergar em qualquer direção.</p><p>Com uma ação, você pode mover o olho por até 9 metros [30 ft.] em qualquer direção. Não há limites para quão longe de você o olho pode se mover, porém, ele não pode entrar em outro plano de existência. Qualquer barreira sólida bloqueará os movimentos do olho, mas ele pode passar por uma pequena abertura de pelo menos 2,5 centímetros [1 inch].</p>",source:"LdJ pg. 264",material:"um pouco de pelo de morcego",name:"Olho Arcano"},"Locate Animals or Plants":{description:"<p>Descreva ou nomeie um tipo específico de animal ou planta. Concentrando-se na voz da natureza ao seu redor, você descobre a direção e a distância (até 7,5 quilômetros [5 miles]) em que a criatura ou planta mais próxima daquele tipo se encontra, caso exista alguma na área.</p>",source:"LdJ pg. 253",material:"um pouco de pelo de um cão de caça",name:"Localizar Animais ou Plantas"},"Lightning Bolt":{description:`<p>Um raio formando uma linha de 30 metros [100 ft.] de comprimento por 1,5 metro [5 ft.] de largura dispara a partir de você em uma direção à sua escolha. Cada criatura na linha deve fazer uma salvaguarda de Destreza. Se falhar, sofre 8d6 pontos de dano elétrico, ou metade do dano em caso de sucesso.</p>
<p>O raio incendeia objetos inflamáveis na área que não estejam sendo usados ou carregados.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 276",material:"um punhado de pelos e um cajado de âmbar, cristal ou vidro",name:"Relâmpago"},"Fire Storm":{description:`<p>Uma tempestade feita de camadas crepitantes de chamas aparece em uma localização à sua escolha e no alcance da magia. A área da tempestade consiste em até 10 cubos de 3 metros [10-foot cubes], que você pode arranjar como quiser. Cada cubo deve ter ao menos uma face adjacente à face de outro cubo. Cada criatura na área deve fazer uma salvaguarda de Destreza. Se falhar, sofre 7d10 pontos de dano ígneo, ou metade do dano em caso de sucesso.</p>
<p>O fogo danifica objetos na área e incendeia objetos inflamáveis que não estejam sendo usados ou carregados. Você pode determinar que a vida vegetal na área não seja afetada por esta magia.</p>`,source:"LdJ pg. 285",name:"Tempestade de Fogo"},"Plane Shift":{description:"<p>Você e até oito criaturas voluntárias que deem as mãos em um círculo são transportadas para um plano de existência diferente. Você pode especificar um destino, em termos gerais, como a Cidade de Bronze no Plano Elemental do Fogo ou o palácio de Dispáter no segundo nível dos Nove Infernos, e você aparece dentro ou perto do destino. Se estiver tentando chegar até a Cidade de Bronze, por exemplo, você pode chegar na Rua de Aço, diante do Portão de Cinzas, ou pode ver a cidade do outro lado do Mar de Fogo, a critério do DM.</p><p>Se preferir, e conhecer a sequência de símbolos de um círculo de teleporte em outro plano de existência, esta magia pode levá-lo a este círculo. Se o círculo de teleporte for muito pequeno para conter todas as criaturas que forem transportadas, elas aparecem no local desocupado mais próximo do círculo.</p><p>Você pode usar essa magia para banir uma criatura involuntária para outro plano. Escolha uma criatura no alcance da magia e faça um ataque mágico corpo a corpo contra ela. Se acertar, a criatura deve fazer uma salvaguarda de Carisma. Se falhar, ela é transportada para um local aleatório no plano de existência que você especificar. Uma criatura transportada desta forma deve encontrar o caminho de volta para o plano de existência em que você se encontre.</p>",source:"LdJ pg. 287",material:"um bastão de metal bifurcado no valor mínimo de 250 PO, sintonizado com um determinado plano de existência",name:"Transição Planar"},"Find Familiar":{description:`<p>Você passa a contar com os serviços de um familiar, um espírito que assume a forma de um animal à sua escolha: morcego, gato, caranguejo, sapo (rã), falcão, lagarto, polvo, coruja, cobra venenosa, peixe (piranha), rato, corvo, cavalo marinho, aranha ou furão. Aparecendo em um espaço desocupado dentro do alcance da magia, o familiar tem as estatísticas da forma escolhida, apesar de ser um celestial, feérico ou ínfero (à sua escolha), em vez de uma fera.</p>
<p>Seu familiar age independentemente de você, mas ele sempre obedece aos seus comandos. Em combate, joga a própria iniciativa e age no próprio turno. Um familiar não pode atacar, mas pode realizar outras ações normalmente.</p>
<p>Ao ficar com 0 pontos de vida, ele desaparece, não deixando forma física alguma para trás. O familiar reaparece após você conjurar esta magia novamente.</p>
<p>Enquanto seu familiar estiver a até 30 metros [100 ft.] de você, é possível se comunicar telepaticamente com ele. Além disso, com uma ação, você pode ver através dos olhos dele e ouvir o que ele ouve até o começo de seu próximo turno, ganhando os benefícios de quaisquer sentidos especiais que ele tenha. Durante este tempo, você fica surdo e cego no que diz respeito aos seus próprios sentidos.</p>
<p>Com uma ação, você pode dispensar seu familiar temporariamente. Ele desaparece em um bolsão dimensional onde aguarda a sua convocação. Se preferir, você pode dispensá-lo permanentemente. Enquanto o familiar estiver temporariamente dispensado, com uma ação você pode fazer com que ele reapareça em qualquer espaço desocupado a até 9 metros [30 ft.] de você.</p>
<p>Você não pode ter mais de um familiar por vez. Se conjurar esta magia quando já tiver um familiar, você apenas fará com que o seu familiar adote uma nova forma. Escolha uma das formas da lista acima. O seu familiar se transforma na criatura escolhida.</p>
<p>Por fim, quando conjurar uma magia com alcance de toque, seu familiar pode lançar a magia como se ele mesmo a tivesse conjurado. Ele deve estar a até 30 metros [100 ft.] de você, e você deve usar a reação dele para lançar a magia quando a conjurar. Se a magia pedir uma jogada de ataque, use o seu modificador de ataque.</p>`,source:"LdJ pg. 229",material:"10 PO em carvão, incenso e ervas que devem ser consumidos pelo fogo em um braseiro de latão",name:"Convocar Familiar"},"Acid Splash":{description:`<p>Você lança uma bolha de ácido. Escolha uma ou duas criaturas à sua vista, dentro do alcance da magia. Se escolher duas, elas devem estar a 1,5 metro [5 ft.] uma da outra. Um alvo deve ser bem-sucedido em uma salvaguarda de Destreza. Se falhar, sofre <span title="" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6&quot;}">1d6</span> pontos de dano ácido.</p>
<p>O dano desta magia aumenta em <span title="" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6&quot;}">1d6</span>&nbsp;quando você alcança o 5º nível (<span title="" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;2d6&quot;}">2d6</span>), 11º nível (<span title="" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;3d6&quot;}">3d6</span>) e 17º nível (<span title="" data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;4d6&quot;}">4d6</span>).</p>`,source:"LdJ pg. 220",name:"Bolha Ácida"},Barkskin:{description:"<p>Você toca uma criatura voluntária. A magia transforma a pele do alvo, tornando-a áspera e com a aparência de casca de árvore. Enquanto a magia durar, o alvo tem uma CA que não pode ser menor do que 16, independente do tipo de armadura vestida.</p>",source:"LdJ pg. 267",material:"um punhado de casca de carvalho",name:"Pele-casca"},Geas:{description:`<p>Você lança um comando mágico sobre uma criatura à sua vista e no alcance da magia, forçando-a a realizar algum serviço ou impedindo-a de executar alguma ação ou curso de atividade, conforme você desejar. Se a criatura for capaz de entendê-lo ela deve ser bem-sucedida em uma salvaguarda de Sabedoria ou ficará enfeitiçada por você enquanto a magia durar. Enquanto a criatura estiver enfeitiçada por você, ela sofre 5d10 pontos de dano psíquico ao agir de maneira diretamente contraditória às suas instruções, mas não mais do que uma vez ao dia. Uma criatura que não for capaz de entendê-lo não é afetada por esta magia.</p>
<p>Você pode emitir qualquer comando que desejar, a não ser um que resulte em morte certa. Se você emitir um comando suicida, a magia se encerra.</p>
<p>A magia termina antecipadamente se você usar a sua ação para dissipá-la. Uma magia Remover Maldição, Restauração Maior ou Desejo também a encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º ou 8º círculo, a duração é de 1 ano. Ao conjurar esta magia usando um espaço de magia de 9º círculo, a magia dura até ser encerrada por uma das magias mencionadas acima.</p>`,source:"LdJ pg. 258",name:"Missão"},"Warding Bond":{description:`<p>Esta magia protege uma criatura voluntária que você toca, criando uma conexão mística entre o alvo e você enquanto a magia durar. Enquanto o alvo estiver no alcance de 18 metros [60 ft.] do conjurador, ele ganha +1 de bônus na CA e em salvaguardas, e tem resistência contra todo tipo de dano. Além disso, cada vez que ele sofre dano, você sofre a mesma quantidade de dano.</p>
<p>A magia se encerra se você cair a 0 pontos de vida ou se vocês se afastarem a mais de 18 metros [60 ft.] um do outro. Ela também se encerra se for conjurada novamente em qualquer uma das criaturas conectadas. Você também pode dispensar a magia com uma ação.</p>`,source:"LdJ pg. 288",material:"um par de anéis de platina no valor mínimo de 50 PO cada, que você e o alvo devem usar enquanto a magia durar",name:"Vínculo de Proteção"},"Time Stop":{description:`<p>Você interrompe brevemente o fluxo do tempo para todos, exceto para si. O tempo não passa para outras criaturas, enquanto você tem 1d4+1 turnos consecutivos, nos quais pode agir e se mover normalmente.</p>
<p>Esta magia se encerra se uma das ações que você executar neste período, ou qualquer efeito que criar durante este período, afetar uma criatura além de você ou um objeto sendo usado ou carregado por alguém que não você. Além disso, a magia se encerra se você se mover para um lugar a mais de 300 metros [1.000 ft.] do local onde a conjurou.</p>`,source:"LdJ pg. 265",name:"Parar o Tempo"},"Spiritual Weapon":{description:`<p>Você cria uma arma espectral flutuante, no alcance da magia. A arma permanece enquanto a magia durar, ou até você conjurar essa magia novamente. Ao conjurar a magia, você faz um ataque mágico corpo a corpo contra uma criatura a até 1,5  [5 ft.] da arma. Se acertar, o alvo sofre dano energético igual a 1d8 + seu modificador de atributo de conjuração.</p>
<p>Com uma ação bônus em seu turno, você pode mover a arma até 6 metros [20 ft.] e repetir o ataque contra uma criatura a até 1,5 metro [5 ft.] dela.</p>
<p>A arma pode tomar qualquer forma desejada. Clérigos de divindades associadas a uma arma específica (São Cuthbert é conhecido por sua maça e Thor por seu martelo) fazem o efeito desta magia se assemelhar a esta arma.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d8 para cada dois espaços de magia acima do 2º círculo.</p>`,source:"LdJ pg. 216",name:"Arma Espiritual"},"Spider Climb":{description:"<p>Enquanto a magia durar, uma criatura voluntária tocada por você ganha a habilidade de se mover para cima, para baixo e ao longo de superfícies verticais e de cabeça para baixo através de tetos, mantendo suas mãos livres. O alvo também ganha um deslocamento de escalada idêntico ao próprio deslocamento de caminhada.</p>",source:"LdJ pg. 240",material:"uma gota de betume e uma aranha",name:"Escalada de Aranha"},"Circle of Death":{description:`<p>Uma esfera de energia negativa emite ondulações em um raio de 18 metros [60-foot radius] a partir de um ponto dentro da área do alcance da magia. Cada criatura na área deve fazer uma salvaguarda de Constituição. Se falhar, sofre 8d6 de dano necrótico, ou metade do dano em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, o dano aumenta em 2d6 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 223",material:"o pó de uma pérola negra esmagada com valor mínimo de 500 PO",name:"Círculo da Morte"},"Conjure Minor Elementals":{description:`<p>Você invoca elementais, que surgem em espaços desocupados à sua vista no alcance da magia. Escolha o que surge entre as opções a seguir:</p>
<ul>
<li>Um elemental com nível de desafio 2 ou menor;</li>
<li>Dois elementais com nível de desafio 1 ou menor;</li>
<li>Quatro elementais com nível de desafio 1/2 ou menor;</li>
<li>Oito elementais com nível de desafio 1/4 ou menor.</li>
</ul>
<p>Um elemental desaparece ao ficar com 0 pontos de vida ou ao término da magia.</p>
<p>As criaturas invocadas são amistosas com você e seus companheiros. Jogue a iniciativa para as criaturas invocadas como um grupo, que tem seus próprios turnos. Os elementais invocadas obedecem a qualquer comando verbal que você lhes direcionar (não requer ação sua). Caso não seja dado comando algum, elas se defendem de seres hostis, não executando nenhuma outra ação. O DM fornece as estatísticas das criaturas.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando espaços de magia de círculos superiores, escolha uma das opções de invocação apresentadas anteriormente, e mais criaturas aparecem: o dobro com um espaço de 6º círculo e o triplo com um espaço de 8º círculo.</p>`,source:"LdJ pg. 251",name:"Invocar Elementais Menores"},Sleep:{description:`<p>Esta magia coloca criaturas em um sono mágico. Jogue 5d8; o resultado equivale a quantos pontos de vida de criaturas esta magia pode afetar. As criaturas que estiverem dentro de um raio de 6 metros [20-foot radius] a partir de um ponto à sua escolha, são afetadas em ordem ascendente de pontos de vida atuais (ignorando criaturas inconscientes).</p>
<p>Começando com quem tiver menos pontos de vida no momento da conjuração, cada indivíduo afetado por esta magia cai Inconsciente até o final do efeito desta, ou até o adormecido sofrer dano ou alguém usar uma ação para chacoalhá-lo ou estapeá-lo para que acorde. Subtraia os pontos de vida de cada criatura do total, antes de continuar para a próxima com os pontos de vida mais baixos. Os pontos de vida da criatura devem ser iguais ou menores que o total remanescente para que aquela criatura seja afetada.</p>
<p>Mortos-vivos e criaturas imunes a serem enfeitiçadas não são afetadas por esta magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, jogue 2d8 adicionais a cada espaço acima do 1º círculo.</p>`,source:"LdJ pg. 282",material:"uma pitada de areia fina, pétalas de rosa, ou um grilo",name:"Sono"},"Purify Food and Drink":{description:"<p>Toda a comida e bebida não-mágica dentro de uma esfera de 1,5 metro de raio [5-foot radius] centrada em um ponto à sua escolha, no alcance da magia, é purificada e tornada livre de venenos e doenças.</p>",source:"LdJ pg. 272",name:"Purificar Alimentos e Bebidas"},"Find Traps":{description:"<p>Você sente a presença de qualquer armadilha em sua linha de visão e no alcance da magia. Uma armadilha, para os fins desta magia, inclui qualquer coisa que causaria um efeito repentino ou inesperado que você considera danoso ou indesejado, e que tenha sido especificamente projetada como tal por quem a criou. Assim, a magia sentiria uma área afetada pelas magias Alarme, Glifo de Proteção ou uma armadilha mecânica de fosso, mas não revela uma fraqueza natural no piso, um teto instável ou um sumidouro escondido.</p><p>O efeito revela apenas se há uma armadilha presente. Você não descobre a localização de cada armadilha, mas passa a saber a natureza geral do perigo imposto pela armadilha que você sente.</p>",source:"LdJ pg. 239",name:"Encontrar Armadilhas"},Teleport:{description:`<p>Esta magia transporta instantaneamente você e até oito criaturas voluntárias à sua escolha e à sua vista, no alcance da magia, ou um único objeto sob as mesmas condições, até um destino que escolher. Se o alvo for um objeto, ele deve ser capaz de caber completamente em um cubo de 3 metros [10 ft.], e não pode estar sendo segurado ou carregado por uma criatura não voluntária.</p>
<p>O destino que você escolhe deve ser de seu conhecimento e deve estar no mesmo plano de existência. Sua familiaridade com o destino determina se você chega lá com sucesso. O DM joga um d100 e consulta a tabela.</p>
<table border="1">
<tbody>
<tr>
<td><strong>Familiaridade</strong></td>
<td><strong>Azar</strong></td>
<td><strong>Área Similar</strong></td>
<td><strong>Fora do Alvo</strong></td>
<td><strong>No Alvo</strong></td>
</tr>
<tr>
<td>Círculo Permanente</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>01-100</td>
</tr>
<tr>
<td>Objeto Associado</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>01-100</td>
</tr>
<tr>
<td>Muito Familiar</td>
<td>01-05</td>
<td>06-13</td>
<td>14-24</td>
<td>25-100</td>
</tr>
<tr>
<td>Visto Casualmente</td>
<td>01-33</td>
<td>34-43</td>
<td>44-53</td>
<td>54-100</td>
</tr>
<tr>
<td>Visto uma vez</td>
<td>01-43</td>
<td>44-53</td>
<td>54-73</td>
<td>74-100</td>
</tr>
<tr>
<td>Descrição</td>
<td>01-43</td>
<td>44-53</td>
<td>54-73</td>
<td>74-100</td>
</tr>
<tr>
<td>Destino falso</td>
<td>01-50</td>
<td>51-100</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<p><strong>Familiaridade</strong>. "Círculo permanente" significa um círculo de teleporte cuja sequência de símbolos você conhece. "Objeto associado" significa que você possui um objeto retirado do destino desejado nos últimos seis meses, como um livro da biblioteca de um mago, roupa de cama de uma suíte real ou um pedaço de mármore da tumba secreta de um lich.</p>
<p>"Muito familiar" é um lugar que você visitou muitas vezes, um lugar que você estudou cuidadosamente ou um lugar à sua vista ao conjurar a magia. "Visto casualmente" é um lugar que você viu mais de uma vez, porém não está familiarizado. "Visto uma vez" é um lugar que você só viu uma vez, possivelmente usando magia. "Descrição" é um lugar cuja localização e aparência você sabe através da descrição de alguém, talvez de um mapa.</p>
<p>"Falso destino" é um lugar que não existe. Talvez você tenha tentado escrutinar magicamente o santuário de um inimigo, mas em vez disso viu uma ilusão ou está tentando se teleportar para um local familiar que não existe mais.</p>
<p><strong>No Alvo</strong>. Você e o seu grupo (ou o objeto alvo) aparecem onde você quiser.</p>
<p><strong>Fora do Alvo</strong>. Você e o seu grupo (ou o objeto alvo) aparecem a uma distância e direção aleatórias do destino. A distância do alvo é 1d10 x 1d10 % da distância que você viajou. Por exemplo, se você tentou viajar 190 quilômetros [120 miles], pousou fora do alvo e tirou um 5 e um 3 nos dois d10, então você está fora do alvo por 15 por cento, ou seja, 28 quilômetros [18 miles]. O DM determina a direção fora do alvo aleatoriamente jogando 1d8 e designando 1 como norte, 2 como nordeste, 3 como leste e assim por diante, ao redor dos pontos da bússola. Se foi teleportado para uma cidade costeira e acabou 28 quilômetros [18 miles] mar adentro, você pode estar em apuros.</p>
<p><strong>Área Similar</strong>. Você e o seu grupo (ou o objeto alvo) acabam em uma área diferente que é visual ou tematicamente similar à área alvo. Se você estiver indo para o seu laboratório de casa, por exemplo, você pode acabar parando no laboratório de outro mago, ou em uma loja de suprimentos alquímicos que tenha muitas das mesmas ferramentas e utensílios que o seu laboratório. Geralmente, você aparece no lugar similar mais próximo, mas como a magia não tem limite de alcance, é possível que você acabe parando em qualquer lugar do plano.</p>
<p><strong>Azar</strong>. A natureza imprevisível da magia resulta em uma jornada difícil. Cada criatura se teleportando (ou o objeto alvo) sofre 3d10 pontos de dano energético, e o DM joga novamente a tabela para ver onde você parou (mais de um azar pode acontecer, causando dano cada vez).</p>`,source:"LdJ pg. 283",name:"Teleporte"},"Arcane Sword":{description:"<p>Você cria um plano de força em forma de espada que paira dentro do intervalo. Dura pela duração.</p><p>Quando a espada aparecer, você faz um ataque feitiço contra um alvo à sua escolha dentro de 5 pés da espada. Em um golpe, o alvo recebe 3d10 danos forçados. Até que a magia termine, você pode usar uma ação bônus em cada um dos seus turnos para mover a espada para um ponto que você pode ver e repetir esse ataque contra o mesmo alvo ou um diferente.</p>",material:"uma miniatura em platina de uma espada, com o pomo e o cabo de cobre e zinco, no valor de 250 PO",name:"Espada Arcana"},"Color Spray":{description:`<p>Uma deslumbrante variedade de luzes ofuscantes e coloridas projeta-se da sua mão. Jogue 6d10; o resultado será a quantidade total de pontos de vida das criaturas que esta magia pode afetar. Criaturas em um cone de 4,5 metros [15-foot cone] com origem em você são afetadas em ordem crescente de seus pontos de vida atuais (ignorando criaturas inconscientes e criaturas que não possam enxergar).</p>
<p>Começando com a criatura com a menor quantidade de pontos de vida, cada criatura afetada por esta magia fica cega enquanto a magia durar. Subtraia os pontos de vida de cada criatura do total, antes de continuar para a próxima com os pontos de vida mais baixos. Os pontos de vida da criatura devem ser menores ou iguais ao total remanescente para que ela seja afetada.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, jogue 2d10 adicionais para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 252",material:"uma pitada de pó ou de areia colorida nas cores vermelha, amarela e azul",name:"Leque Cromático"},Cloudkill:{description:`<p>Você cria uma esfera com raio de 6 metros [20-foot-radius sphere], feita de uma névoa venenosa amarelo-esverdeada, centrada em um ponto à sua escolha e no alcance da magia. A névoa se alastra, contornando os cantos e a área afetada fica totalmente obscurecida. Ela persiste enquanto a magia durar ou até que um vento forte a disperse, encerrando a magia.</p>
<p>Quando uma criatura entra na área da magia pela primeira vez ou inicia o próprio turno ali, ela deve fazer uma salvaguarda de Constituição. Se falhar, sofre 5d8 de dano venenoso, ou metade do dano em caso de sucesso. As criaturas são afetadas mesmo se prenderem a respiração ou não precisarem respirar.</p>
<p>O nevoeiro se distancia 3 metros [10 ft.] de você no início de cada um de seus turnos, deslizando sobre o solo. Os vapores, por serem mais pesados que o ar, descem para o nível mais baixo da terra, esvaindo-se por eventuais aberturas.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 262",name:"Névoa Mortal"},Revivify:{description:"<p>Você toca uma criatura que faleceu há menos de um minuto. Aquela criatura volta à vida com 1 ponto de vida. A magia não pode retornar quem morreu de idade avançada, nem pode restaurar quaisquer partes perdidas do corpo.</p>",source:"LdJ pg. 278",material:"diamantes no valor mínimo de 300 PO, que a magia consome",name:"Revivificar"},"Dominate Beast":{description:`<p>Você tenta cativar uma fera à sua vista, dentro do alcance da magia. Ela deve ser bem-sucedida em uma salvaguarda de Sabedoria ou fica enfeitiçada enquanto durar a magia. Se você ou criaturas amigáveis a você estiverem lutando contra a fera, ela tem vantagem na salvaguarda.</p>
<p>Você possui um elo telepático com a criatura, permanecendo conectados enquanto ela estiver enfeitiçada e ambos estejam no mesmo plano de existência. Você pode usar este elo telepático para enviar comandos para a criatura, enquanto você estiver consciente (nenhuma ação é necessária) e ela faz o possível para obedecer. Pode ser especificado um curso de ação genérico e simples, como "Ataque aquela criatura", "Corra para cá" ou "Pegue aquele objeto". Se a criatura completar a ordem e não receber novas instruções suas, ela se defende e se preserva o melhor que puder.</p>
<p>Você pode usar sua ação para assumir controle total e preciso do alvo. Até o fim do seu turno, a criatura executa apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo, você também pode fazer com que a criatura use a reação dela, mas isso requer que você use sua reação também.</p>
<p>Toda vez que o alvo sofrer dano, ele deve fazer uma nova salvaguarda de Sabedoria contra CD para evitar a sua magia. Em caso de sucesso, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia com um espaço de magia de 5º círculo, a duração será concentração, até 10 minutos. Ao conjurar esta magia com um espaço de magia de 6º círculo, a duração será concentração, até 1 hora. Ao conjurar esta magia utilizando um espaço de magia de 7º círculo, a duração será concentração, até 8 horas.</p>`,source:"LdJ pg. 238",name:"Dominar Fera"},"Protection from Poison":{description:`<p>Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno afligir o alvo, você neutraliza o veneno que sabe estar presente, ou neutraliza um deles, ao acaso.</p>
<p>Enquanto a magia durar, o alvo tem vantagem nas salvaguardas contra ser envenenado, e resistência a dano venenoso.</p> `,source:"LdJ pg. 271",name:"Proteção Contra Veneno"},Mislead:{description:`<p>Você se torna invisível ao mesmo tempo em que uma duplicata ilusória aparece onde você está. A duplicata permanece enquanto a magia durar, porém a invisibilidade se encerra se você atacar ou conjurar uma magia.</p>
<p>Você pode usar sua ação para mover sua duplicata ilusória a até o dobro do seu deslocamento e fazê-la gesticular, falar e se comportar da maneira que você escolher.</p>
<p>Você pode ver através dos olhos e ouvir através dos ouvidos da duplicata como se estivesse onde ela está. Em cada um de seus turnos, com uma ação bônus, você pode mudar dos sentidos dela para os seus, ou voltar para os dela. Enquanto estiver usando os sentidos de sua duplicata, você está cego e surdo em relação aos seus arredores.</p>`,source:"LdJ pg. 235",name:"Despistar"},Awaken:{description:`<p>Depois de gastar o tempo de conjuração traçando padrões mágicos com uma pedra preciosa, você toca em uma fera ou planta de tamanho Enorme ou menor. O alvo deve ter um valor de Inteligência igual a 3 ou menor ou não possuir Inteligência alguma. O alvo ganha um valor de Inteligência de 10. O alvo também ganha a habilidade de falar um idioma que você conheça. Se o alvo for uma planta, ela ganha a habilidade de mover seus galhos, raízes, cipós, trepadeiras e assim por diante, além de ganhar sentidos semelhantes aos de um humano. Seu DM escolhe as estatísticas adequadas a uma planta despertada, como as de um arbusto ou árvore despertados.</p>
<p>A fera ou planta despertada fica enfeitiçada por você durante 30 dias, ou até que você ou seus companheiros façam qualquer coisa que a prejudique. Quando a condição de enfeitiçada termina, a criatura despertada escolhe se quer permanecer amigável com você, com base em como foi tratada enquanto estava enfeitiçada.</p>`,source:"LdJ pg. 235",material:"uma ágata no valor mínimo de 1.000 PO, que é consumida pela magia",name:"Despertar"},"Freezing Sphere":{description:`<p>Um globo frígido de energia gélida é disparado da ponta de seus dedos até um ponto à sua escolha, no alcance da magia, onde explode em uma esfera de 18 metros de raio [60-foot-radius sphere]. Cada criatura na área deve fazer uma salvaguarda de Constituição. Se falhar, sofre 10d6 pontos de dano gélido, ou metade do dano em caso de sucesso.</p>
<p>Se o globo acertar um corpo de água ou um líquido formado principalmente de água (isso não inclui criaturas baseadas em água), ele congela o líquido até uma profundidade de 15 centímetros [6 inches] sobre uma área de 9 metros [30 ft.] quadrados. O gelo dura 1 minuto. Criaturas que estavam nadando na superfície de água congelada ficam presas no gelo. Uma criatura pode usar uma ação para fazer um teste de Força contra a CD para evitar sua magia para se libertar.</p>
<p>Você pode abster-se de disparar o globo depois de completar a magia, se assim desejar. Um pequeno globo com o tamanho aproximado de uma pedra de funda, frio ao toque, aparece em sua mão. A qualquer momento, você ou a criatura a quem você der o globo pode jogá-lo (a um alcance de 12 metros [40 ft.]) ou arremessá-lo com uma funda (no alcance normal da funda). Ele se despedaça no impacto com o mesmo efeito que a conjuração normal da magia. Você também pode colocar o globo no chão sem quebrá-lo. Depois de 1 minuto, se o globo já não estiver despedaçado, ele explode.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 241",material:"uma pequena esfera de cristal",name:"Esfera Congelante"},"Continual Flame":{description:"<p>Uma chama, brilhante como uma tocha, surge de um objeto que você toca. O efeito assemelha-se ao de uma chama comum, exceto pelo fato de não emitir calor nem consumir oxigênio. Uma chama contínua pode ser coberta ou escondida, mas não apagada ou abafada.</p>",source:"LdJ pg. 223",material:"rubi em pó no valor mínimo de 50 PO, o qual a magia consome",name:"Chama Contínua"},"Prayer of Healing":{description:`<p>Escolha até seis criaturas à sua vista e no alcance da magia. Elas recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de atributo de conjuração. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, a cura aumenta em 1d8 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 264",name:"Oração de Cura"},Levitate:{description:`<p>Escolha um criatura ou objeto à sua vista e no alcance da magia. O alvo sobe verticalmente a até 6 metros [20 ft.] de altura, permanecendo suspenso enquanto a magia durar. A magia pode levitar um alvo que pese até 225 quilos [500 pounds]. Uma criatura involuntária que seja bem-sucedida em uma salvaguarda de Constituição não é afetada.</p>
<p>O alvo pode se mover apenas ao empurrar ou puxar um objeto fixo ou superfície ao alcance dele (como uma parede ou teto), o que permite que ele se mova como se estivesse escalando. No seu turno, você pode mudar a altitude do alvo em até 6 metros [20 ft.] em qualquer direção. Se você for o alvo, pode mover-se para cima ou para baixo como parte do seu deslocamento. Caso contrário, você pode usar sua ação para mover o alvo, que deve permanecer no alcance da magia.</p>
<p>Quando esta magia terminar, caso ainda esteja no ar, o alvo inicia uma descida suave, flutuando em direção ao solo.</p>`,source:"LdJ pg. 253",material:"um pequeno laço de couro ou um pedaço de fio dourado dobrado na forma de uma xícara com haste longa em uma das extremidades",name:"Levitação"},Thaumaturgy:{description:`<p>Você manifesta um pequeno milagre, um sinal de poder sobrenatural dentro do alcance da magia. Você pode criar um dos seguintes efeitos mágicos no alcance da magia:</p>
<ul>
<li>Sua voz ressoa até três vezes mais alta do que o normal durante 1 minuto.</li>
<li>Você faz chamas tremularem, clarearem, escurecerem ou mudarem de cor durante 1 minuto.</li>
<li>Você causa tremores inofensivos no solo durante 1 minuto.</li>
<li>Você cria um som instantâneo que se origina de um ponto à sua escolha, no alcance da magia, como o estrondo de um trovão, o gralhar de um corvo ou sussurros sinistros.</li>
<li>Você instantaneamente faz uma porta ou janela destrancada se abrir ou fechar.</li>
<li>Você pode alterar a aparência dos seus olhos durante 1 minuto.</li>
</ul>
<p>Se conjurar esta magia múltiplas vezes, você pode ter até três dos seus efeitos de 1 minuto ativos ao mesmo tempo, e pode dispensar um efeito com uma ação.</p>`,source:"LdJ pg. 282",name:"Taumaturgia"},"Detect Evil and Good":{description:"<p>Enquanto a magia durar, você pode sentir a presença e localização de uma criatura do tipo aberração, celestial, elemental, feérico, ínfero ou morto-vivo que encontre-se a até 9 metros [30 ft.] de distância. Da mesma forma, você sabe se existe um lugar ou objeto a até 9 metros [30 ft.] que tenha sido magicamente consagrado ou profanado.</p><p>A magia pode atravessar a maioria das barreiras, sendo bloqueada, no entanto, por 30 centímetros [1 foot] de pedra, 2,5 centímetros [1 inch] de metal comum, uma folha fina de chumbo ou 1 metro [3 ft.] de madeira ou terra.</p>",source:"LdJ pg. 236",name:"Detectar o Bem e o Mal"},Shapechange:{description:`<p>Você assume a forma de uma criatura diferente enquanto a magia durar. A nova forma pode ser de qualquer criatura com um nível de desafio igual ou menor que o seu nível. A criatura não pode ser um constructo ou um morto-vivo, e você deve ter visto este tipo de criatura pelo menos uma vez. Você se transforma em um exemplar aproximado daquela criatura, sem quaisquer níveis de classe e sem a característica Conjuração.</p>
<p>Suas estatísticas de jogo são substituídas pelas estatísticas da criatura escolhida, embora você mantenha seu alinhamento, personalidade e valores de Inteligência, Sabedoria e Carisma. Você também conserva todas as suas perícias e salvaguardas, além de ganhar as da criatura. Se a criatura tiver a mesma proficiência que você e o bônus listado no bloco de estatísticas dela for maior que o seu, use o bônus da criatura em vez do seu. Você não pode usar quaisquer ações lendárias ou de covil da nova forma.</p>
<p>Você assume os pontos de vida e os Dados de Vida da nova forma. Ao retornar à sua forma original, você volta a ter a quantidade de pontos de vida que tinha antes da transformação. Se reverter à sua forma original como resultado de uma queda para 0 pontos de vida, qualquer excesso de dano será transferido para sua forma original. Desde que o excesso de dano não reduza sua forma original a 0 pontos de vida, você não cairá inconsciente.</p>
<p>Você mantém o benefício de todas as características de sua classe, raça ou outra fonte e pode usá-las se a nova forma for fisicamente capaz de fazê-lo. Você não pode usar quaisquer sentidos especiais que tenha (visão no escuro, por exemplo) a menos que a nova forma também tenha esse sentido. Você só pode falar se a criatura puder falar normalmente.</p>
<p>Ao se transformar, você escolhe se seu equipamento cai no chão, funde-se com a nova forma ou se é usado por ela. Equipamento carregado funciona normalmente. O DM decide se é possível para a nova forma usar um item do equipamento, com base no formato e tamanho da criatura. Seu equipamento não muda de tamanho ou formato para coincidir com a nova forma, e qualquer equipamento que a nova forma não puder usar deve cair no chão ou se fundir a ela. Equipamento que se funde não tem efeito nesse estado.</p>
<p>Enquanto a magia durar, você pode usar sua ação para assumir uma forma diferente, seguindo as mesmas restrições e regras para a forma original, com uma exceção: se sua nova forma possuir mais pontos de vida que a sua forma atual, seus pontos de vida permanecem no valor atual.</p>`,source:"LdJ pg. 258",material:"uma argola de jade no valor de pelo menos 1.500 PO, que você deve colocar em sua cabeça antes de conjurar a magia",name:"Metamorfose"},"Private Sanctum":{description:`<p>Você transforma uma área no alcance da magia em um local magicamente seguro. Pode ser um cubo de lado tão pequeno quanto 1,5 metro [5 ft.] ou tão grande quanto 30 metros [100 ft.]. A magia permanece pela duração ou até que você a encerre com uma ação.</p>
<p>Ao conjurar a magia, você decide qual tipo de segurança ela fornece, escolhendo quantas desejar entre as seguintes propriedades:</p>
<ul>
<li>Sons não podem atravessar a barreira na borda da área protegida.</li>
<li>A borda tem aparência escura e opaca, impedindo a visão (incluindo visão no escuro) através dela.</li>
<li>Sensores criados por adivinhação não podem surgir dentro da área protegida, ou passar pelo perímetro.</li>
<li>Criaturas na área não podem ser alvos de magias de adivinhação.</li>
<li>Nada pode se teleportar para dentro da área protegida.</li>
<li>Viagem planar é bloqueada no interior do local.</li>
</ul>
<p>Conjurar esta magia no mesmo lugar todo dia por um ano torna o seu efeito permanente.</p>
<p><strong>Em Círculos Superiores</strong>. Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, você pode aumentar o tamanho do cubo em 30 metros [100 ft.] para cada círculo do espaço acima do 4º. Então, você poderia proteger um cubo que não tenha mais que 60 metros [200 ft.] em um dos lados, usando um espaço de magia de 5º círculo.</p>`,material:"uma folha fina de chumbo, um pedaço de vidro opaco, um chumaço de algodão ou pedaço de pano e crisólita em pó",name:"Santuário Particular"},"Tiny Hut":{description:`<p>Um domo imóvel com 3 metros de raio [10-foot-radius dome], feito de energia, surge ao redor e acima de você, permanecendo estacionário enquanto a magia durar. A magia termina se você deixar a área do domo.</p>
<p>Além de você, até nove criaturas de tamanho Médio cabem dentro do domo. Se uma criatura maior ou mais do que nove criaturas encontrarem-se dentro da área da magia, ela falha. Criaturas e objetos dentro do domo no ato da conjuração podem se mover através dele livremente. Todas as outras criaturas e objetos são impedidos de atravessá-lo, o mesmo valendo para magias e outros efeitos mágicos. A atmosfera interna é confortável e seca, independentemente do clima externo.</p>
<p>Até o fim da magia, você pode determinar se no interior reina a meia-luz ou a escuridão. Do lado de fora o domo é de uma cor opaca, à sua escolha, mas é transparente para quem estiver dentro.</p>`,material:"uma pequena conta de cristal",name:"Pequeno Refúgio"},"Wall of Stone":{description:`<p>Uma muralha não-mágica, feita de pedra maciça, surge em um ponto à sua vista e no alcance da magia. Ela tem 15 centímetros [6 inches] de espessura e é composta de 10 painéis de 3 metros [10 ft.] de lado. Cada painel deve ser contíguo ao outro. Se preferir, você pode criar painéis de 3 por 6 metros [10-foot-by-20-foot] que têm apenas 7,5 centímetros [3 inches] de espessura.</p>
<p>Ao surgir, se muralha passar por um espaço ocupado por uma criatura, esta última é empurrada para um dos lados da muralha (à sua escolha). Se a criatura estiver prestes a ficar cercada pela muralha (ou entre a muralha e outra superfície sólida), ela pode fazer uma salvaguarda de Destreza. Se for bem-sucedida, ela usa uma reação para se mover até o máximo de seu deslocamento, de modo a não ser enclausurada pela muralha.</p>
<p>A muralha pode ter qualquer forma que você desejar, apesar de não poder ocupar o mesmo espaço que uma criatura ou objeto. Ela não precisa ser vertical ou se apoiar inteiramente em uma fundação sólida. Entretanto, necessita se mesclar e ser solidamente suportada por rochas já existentes. Assim, é possível usar esta magia para criar uma ponte sobre um abismo ou criar uma rampa.</p>
<p>Se for criado algo de amplitude superior a 6 metros [20 ft.] de comprimento, é necessário dividir pela metade o tamanho de cada painel, para criar suportes. É possível fazer com que a muralha tenha, de forma bruta, ameias, parapeitos etc.</p>
<p>A muralha é um objeto de pedra que pode ser danificado e, portanto, rompido. Cada painel tem CA 15 e 30 pontos de vida para cada 2,5 centímetros [1 inch] de espessura. Reduzir um painel a 0 pontos de vida o destrói e pode fazer com que painéis conectados entrem em colapso, a critério do DM.</p>
<p>Se você mantiver sua concentração por toda duração da magia, a muralha se torna permanente e não pode ser dissipada. De outra forma, ela desaparece ao final da magia.</p>`,source:"LdJ pg. 261",material:"um pequeno bloco de granito",name:"Muralha de Pedra"},"Ray of Enfeeblement":{description:"<p>Um feixe negro de energia debilitante brota do seu dedo em direção a uma criatura no alcance da magia. Faça um ataque mágico à distância contra o alvo. Se acertar, enquanto a magia durar, o alvo passa a causar apenas metade do dano em ataques armados que usem Força.</p><p>No final de cada um dos próprios turnos, o alvo pode fazer uma salvaguarda de Constituição contra a magia. Em caso de sucesso, a magia se encerra.</p>",source:"LdJ pg. 273",name:"Raio do Enfraquecimento"},"Insect Plague":{description:`<p>Um enxame de gafanhotos vorazes preenche uma esfera com raio de 6 metros [20 ft.], centrada em um ponto à sua escolha e no alcance da magia. A esfera de insetos se alastra, contornando os cantos. Enquanto a magia durar, a área afetada torna-se parcialmente obscurecida e terreno difícil.</p>
<p>Quando o enxame surge, cada criatura no local do efeito deve ser bem-sucedida em uma salvaguarda de Constitui­ção. Se falhar, sofre 4d10 pontos de dano perfurante, ou metade do dano em caso de sucesso. Uma criatura também deve fazer esta salvaguarda ao entrar pela primeira vez, ou ao terminar o próprio turno na área da magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 269",material:"alguns grãos de açúcar, alguns grãos de cereais e uma mancha de gordura",name:"Praga de Insetos"},Aid:{description:`<p>Esta magia reforça seus aliados com tenacidade e determinação. Escolha até três criaturas dentro do alcance. Os pontos de vida máximos e os pontos de vida atuais de cada alvo aumentam em 5 enquanto a magia durar.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, os pontos de vida do alvo aumentam em 5 pontos adicionais para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 218",material:"uma pequena tira de tecido branco",name:"Auxílio"},Compulsion:{description:`<p>Criaturas à sua escolha, à sua vista, que estejam dentro do alcance da magia e possam ouvi-lo devem fazer uma salvaguarda de Sabedoria. Um alvo é automaticamente bem-sucedido nessa salvaguarda se não puder ser enfeitiçado. Se falhar, o alvo é afetado por esta magia. Enquanto a magia durar, você pode usar sua ação bônus em cada um dos seus turnos para designar uma direção paralela ao solo. Cada alvo afetado deve usar tanto do próprio deslocamento quanto possível para mover-se naquela direção no próximo turno dele. Ele pode realizar a própria ação antes de mover-se. Depois de se deslocar dessa maneira, o alvo pode fazer outra salvaguarda de Sabedoria para tentar encerrar o efeito.</p>
<p>Um alvo não é compelido a mover-se em direção a um perigo obviamente mortal, como um incêndio ou fosso, mas provoca ataques de oportunidade enquanto se move na direção designada.</p>`,source:"LdJ pg. 225",name:"Compulsão"},Guidance:{description:"<p>Você toca uma criatura voluntária. Uma vez antes que a magia termine, o alvo pode jogar 1d4 e somar resultado a um teste de atributo da escolha dele. Ele pode jogar o dado antes ou depois de fazer o teste. A magia, então, se encerra.</p>",source:"LdJ pg. 264",name:"Orientação"},Etherealness:{description:`<p>Você adentra as regiões fronteiriças de Plano Etéreo, na área onde ele se sobrepõe ao seu plano atual. Você permanece na Fronteira Etérea enquanto a magia durar ou até que você use sua ação para dispensar a magia. Durante esse tempo, você pode se mover em qualquer direção. Se você se mover para cima ou para baixo, cada 0,3 metro [1 foot] de deslocamento custa 0,6 metro [2 ft.]. Você pode ver e ouvir o plano do qual é originário, mas tudo parece cinza e nada pode ser visto a mais de 18 metros [60 ft.] de distância.</p>
<p>Enquanto estiver no Plano Etéreo, você só pode afetar e ser afetado por outras criaturas nesse plano. Criaturas que não estejam no Plano Etéreo não podem percebê-lo e nem interagir com você, a menos que uma habilidade especial ou mágica lhes dê essa capacidade.</p>
<p>Você ignora todos os objetos e efeitos que não estejam no Plano Etéreo, o que lhe permite mover-se através de objetos que você perceba no plano do qual é originário.</p>
<p>Ao término da magia, você retorna imediatamente ao seu plano de origem, no lugar que está ocupando no momento. Se ocupar o mesmo lugar de um objeto ou criatura quando isso acontecer, você é imediatamente desviado para o espaço desocupado mais próximo que puder ocupar, sofrendo 10 pontos de dano energético a cada 1,5 metro [5 ft.] percorrido.</p>
<p>Esta magia não tem nenhum efeito se você conjurá-la enquanto estiver no Plano Etéreo ou em um plano que não faça fronteira com ele, como um dos Planos Externos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 8º círculo ou superior, você pode atingir até três criaturas (incluindo você mesmo) para cada círculo do espaço acima do 7º. As criaturas devem estar a até 3 metros [10 ft.] de você quando esta magia for conjurada.</p>`,source:"LdJ pg. 244",name:"Forma Etérea"},"Mass Cure Wounds":{description:`<p>Uma onda de energia curativa banha uma área a partir de um ponto à sua escolha e no alcance da magia. Escolha até seis criaturas em uma esfera com raio de 9 metros [30 ft.] e centrada neste ponto. Cada alvo recupera pontos de vida equivalente a 3d8 + seu modificador de atributo de conjuração. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior,, a cura aumenta em 1d8 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 233",name:"Curar Ferimentos em Massa"},"True Polymorph":{description:`<p>Escolha uma criatura ou objeto não-mágico à sua vista, no alcance da magia. Você pode transformar uma criatura em outra criatura diferente, uma criatura em um objeto ou um objeto em uma criatura (o objeto não deve estar sendo usado nem carregado por outra criatura). A transformação permanece enquanto a magia durar, até o alvo cair a 0 pontos de vida ou morrer. Se você se concentrar nesta magia até a duração completa, a transformação permanece até ser dissipada.</p>
<p>Uma criatura não voluntária pode fazer uma salvaguarda de Sabedoria para evitar o efeito. A magia não tem efeito sobre um metamorfo ou em uma criatura com 0 pontos de vida.</p>
<p><strong>Criatura em Criatura.</strong> Se você transformar uma criatura alvo em outro tipo de criatura, a nova forma pode ser de qualquer tipo que você desejar, desde que o nível de desafio seja igual ou menor que o do alvo (ou o nível do alvo, caso este não tenha um nível de desafio). As estatísticas de jogo do alvo, incluindo valores de habilidades mentais, são substituídas pelas estatísticas da nova forma. Ele mantém seu alinhamento e personalidade.</p>
<p>O alvo assume os pontos de vida de sua nova forma. Ao retornar à sua forma original, o alvo também retorna para o mesmo número de pontos de vida que tinha antes de se transformar. Se a transformação se reverter como resultado do alvo ter caído para 0 pontos de vida, todo o excesso de dano será transferido para a sua forma original. Contanto que o excesso de dano não reduza a forma original do alvo a 0 pontos de vida, ele não cai inconsciente.</p>
<p>As ações que o alvo pode realizar são limitadas pela natureza de sua nova forma, e ele não pode falar, conjurar magias ou executar qualquer ação que requeira mãos ou fala, a não ser que a sua nova forma seja capaz de tais ações.</p>
<p>Os equipamentos do alvo se fundem à sua nova forma. A criatura não pode ativar, usar, segurar ou se beneficiar de qualquer outra maneira de seus equipamentos.</p>
<p><strong>Objeto em Criatura.</strong> Você pode transformar um objeto em qualquer tipo de criatura, desde que o tamanho do objeto alvo não seja maior que o tamanho da criatura e o nível de desafio desta seja 9 ou menos. A criatura é amigável a você e a seus companheiros. Ela age em cada um de seus turnos. Você decide que ação ela executa e como ela se move. O DM fornecerá as estatísticas e decide as ações e movimentos dela.</p>
<p>Se a magia se tornar permanente, você não controlará mais a criatura. Ela pode permanecer amigável a você, dependendo de como a tratou.</p>
<p><strong>Criatura em Objeto.</strong> Se você transformar uma criatura em um objeto, ela se transforma junto com tudo o que estiver vestindo e carregando, desde que o tamanho do objeto não seja maior do que o tamanho da criatura. As estatísticas da criatura se transformam nas do objeto. Após a magia terminar e a criatura retornar à sua forma original, ela não terá memórias do período que passou em forma de objeto.</p>`,source:"LdJ pg. 268",material:"uma gota de mercúrio, um bocado de goma arábica e um fio de fumaça",name:"Polimorfia Total"},"Chain Lightning":{description:`<p>Você cria um raio de eletricidade que salta em direção a um alvo à sua escolha, o qual você possa ver e que esteja dentro do alcance da magia. Em seguida, três raios saltam do alvo na direção de até três outros alvos, que devem estar a até 9 metros [30 ft.] do primeiro. Cada alvo pode ser uma criatura ou um objeto, e só pode ser atingido por apenas um dos raios.</p>
<p>O alvo deve fazer uma salvaguarda de Constituição. Se falhar, sofre 10d8 de dano elétrico, ou metade do dano em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, um raio adicional salta do primeiro alvo em direção a outro, para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 230",material:"um pouco de pelo; um pedaço de âmbar, vidro ou um bastão de cristal; e três alfinetes de prata",name:"Corrente de Relâmpagos"},Goodberry:{description:"<p>Até dez frutos aparecem na sua mão, tornando-se magicamente infundidos. Uma criatura pode usar uma ação para comer um fruto. Comer um fruto restaura 1 ponto de vida, além de fornecer nutrição suficiente para sustentar uma criatura por um dia.</p><p>Os frutos perdem sua potência se não tiverem sido consumidos após 24 horas da conjuração desta magia.</p>",source:"LdJ pg. 221",material:"um ramo de visco",name:"Bom Fruto"},"Stone Shape":{description:"<p>Você toca um objeto de pedra de tamanho Médio ou menor ou uma secção de rocha com não mais que 1,5 metro [5 ft.] em qualquer direção e a modela em qualquer formato que sirva à seus propósitos. Assim, por exemplo, você poderia modelar uma grande rocha em uma arma, ídolo ou baú, ou fazer uma pequena passagem por uma parede, desde que a parede tenha menos do que 1,5 metro [5 ft.] de espessura. Você também pode moldar uma porta de pedra ou remodelar seu entorno para selar a porta. O objeto que você cria pode ter até duas dobradiças e uma fechadura, porém detalhes mecânicos mais complexos não são possíveis.</p>",source:"LdJ pg. 259",material:"argila mole, que deve ser moldada para se assemelhar ao formato do objeto de pedra desejado",name:"Moldar Rochas"},Stoneskin:{description:"<p>Você toca uma criatura voluntária. A magia enrijece toda a pele do alvo, tornando-a tão dura quanto uma rocha. Enquanto a magia durar, o alvo tem resistência contra dano não-mágico contundente, cortante e perfurante.</p>",source:"LdJ pg. 267",material:"pó de diamante no valor mínimo de 100 PO, que a magia consome",name:"Pele-rocha"},"Cone of Cold":{description:`<p>Uma explosão de ar frio irrompe das suas mãos. Cada criatura dentro de um cone de 18 metros [60 ft.] deve fazer uma salvaguarda de Constituição. Se falhar, sofre 8d8 pontos de dano gélido, ou metade do dano em caso de sucesso.</p>
<p>Uma criatura morta por esta magia torna-se uma estátua congelada até derreter.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 226",material:"um pequeno cristal ou cone de vidro",name:"Cone de Frio"},"Arcanist's Magic Aura":{description:`<p>Você toca uma criatura ou objeto, criando uma ilusão sobre o alvo e fazendo com que magias de adivinhação revelem informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não esteja sendo carregado ou usado por outra criatura.</p>
<p>Ao conjurar a magia, escolha um ou ambos os efeitos a seguir. O efeito fica ativo enquanto a magia durar. Se você conjurar esta magia na mesma criatura ou objeto todos os dias durante 30 dias, colocando o mesmo efeito toda vez, a ilusão dura até ser dissipada.</p>
<p><strong>Falsa Aura.</strong> Você altera a maneira como o alvo parece para magias e efeitos mágicos, como Detectar Magia, que detectam auras mágicas. Você pode fazer um objeto não mágico parecer mágico, um objeto mágico parecer não mágico ou alterar a aura mágica do objeto, de modo que ele pareça pertencer a uma escola específica de magia que você escolher. Quando usar este efeito em um objeto, você pode fazer com que a magia falsa fique aparente para qualquer criatura que manipule o item.</p>
<p><strong>Máscara.</strong> Você altera a maneira como o alvo parece para magias e efeitos mágicos que detectam tipos de criatura, como o Sentido Divino de um paladino ou o gatilho de uma magia Símbolo. Você escolhe um tipo de criatura e outras magias e efeitos mágicos passam a tratar o alvo como se este pertencesse ao tipo ou alinhamento da criatura escolhida.</p>`,material:"um pequeno quadrado de seda",name:"Aura Mágica do Arcanista"},Darkness:{description:`<p>Uma esfera de escuridão mágica, com raio de 4,5 m [15-foot radius], se alastra a partir de um ponto à sua escolha, no alcance da magia e permanece enquanto a magia durar. A escuridão se alastra, contornando os cantos. Uma criatura com visão no escuro não pode ver através dessa escuridão, e uma luz não mágica não pode iluminá-la.</p>
<p>Se o ponto escolhido estiver em um objeto que você está segurando ou que não esteja sendo usado ou carregado, a escuridão emana do objeto e move-se com ele. Cobrir completamente a origem da escuridão com um objeto opaco, como uma tigela ou elmo, bloqueia a escuridão.</p>
<p>Se alguma parte da área da magia se sobrepuser a uma área de luz criada por uma magia de 2º círculo ou inferior, a magia que criou a luz é anulada.</p>`,source:"LdJ pg. 241",material:"pelo de morcego e uma gota de piche ou pedaço de carvão",name:"Escuridão"},"Faithful Hound":{description:`<p>Você conjura um cão de guarda fantasma em um espaço desocupado à sua vista, no alcance da magia, onde ele permanece enquanto a magia durar, até você dispensá-lo com uma ação, ou até você se mover a mais de 30 metros [100 ft.] dele.</p>
<p>O cão é invisível para todas as criaturas, exceto para você e não pode ser ferido. Quando uma criatura Pequena ou maior se aproximar a até 9 metros [30 ft.] do cão, sem primeiro dizer a senha que você especifica ao conjurar a magia, ele começa a latir alto. O cão enxerga criaturas invisíveis e pode ver no Plano Etéreo. Ele ignora ilusões.</p>
<p>No início de cada um de seus turnos, o cão tenta morder uma criatura hostil à você que esteja a até 1,5 metro [5 ft.] dele. O bônus de ataque do cão é igual ao seu modificador de atributo de conjuração + seu bônus de proficiência. Se acertar, ele causa 4d8 pontos de dano perfurante.</p>`,material:"um pequeno apito de prata, um pedaço de osso e um fio",name:"Cão Fiel"},Hallow:{description:`<p>Você toca um ponto e infunde uma área em torno dele com poder sagrado (ou profano). A área pode ter um raio de até 18 metros [60 ft.], e a magia falha se o raio incluir uma área já sob o efeito de uma magia consagrar. A área afetada está sujeita aos efeitos a seguir.</p>
<p>Primeiro, celestiais, elementais, feéricos, ínferos e mortos-vivos não podem entrar na área, tampouco essas criaturas podem enfeitiçar, amedrontar ou possuir outras criaturas na área. Qualquer criatura enfeitiçada, amedrontada ou possuída por tais criaturas já não está mais sob quaisquer dessas condições ao entrar na área. Você pode excluir um ou mais desses tipos de criaturas deste efeito.</p>
<p>Segundo, você pode vincular um efeito adicional à área. Escolha o efeito da lista a seguir, ou escolha um efeito oferecido pelo DM. Alguns destes efeitos aplicam-se às criaturas na área; você pode determinar se o efeito se aplica a todas as criaturas, a criaturas que seguem um líder ou divindade específicos, ou a criaturas de um determinado tipo, como orcs e trolls. Quando uma criatura que deveria ser afetada entra na área da magia pela primeira vez durante um turno, ou inicia o próprio turno ali, deve fazer uma salvaguarda de Carisma. Se for bem-sucedida, a criatura ignora o efeito adicional até sair da área.</p>
<ul>
<li><strong>Coragem.</strong> Criaturas afetadas não podem ser amedrontadas enquanto estiverem na área.</li>
<li><strong>Descanso Eterno.</strong> Cadáveres enterrados na área não podem ser transformados em mortos-vivos.</li>
<li><strong>Escuridão.</strong> Escuridão preenche a área. Luz normal, bem como luz mágica criada por feitiços de um círculo inferior ao do espaço de magia que você usou para conjurar esta magia não podem iluminar a área.</li>
<li><strong>Idiomas.</strong> Criaturas afetadas por esta magia podem se comunicar com qualquer outra criatura na área, mesmo se não compartilharem um idioma comum.</li>
<li><strong>Interferência Extradimensional.</strong> Criaturas afetadas por esta magia não podem se mover ou viajar usando teleporte ou meios extradimensionais ou interplanares.</li>
<li><strong>Luz do Dia.</strong> Luz plena preenche a área. Escuridão mágica criada por feitiços de um círculo inferior ao do espaço de magia que você usou para conjurar esta magia não pode extinguir a luz.</li>
<li><strong>Medo.</strong> Criaturas afetadas por esta magia ficam amedrontadas enquanto estiverem na área.</li>
<li><strong>Proteção Contra Energia.</strong> Criaturas afetadas na área têm resistência a um tipo de dano à sua escolha, exceto contundente, cortante e perfurante.</li>
<li><strong>Silêncio.</strong> Nenhum som pode emanar de dentro da área, e nenhum som pode adentrá-la.</li>
<li><strong>Vulnerabilidade a Energia.</strong> Criaturas afetadas na área têm vulnerabilidade a um tipo de dano à sua escolha, exceto contundente, cortante e perfurante.</li>
</ul>`,source:"LdJ pg. 226",material:"ervas, óleo e incenso no valor mínimo de 1.000 PO, que a magia consome",name:"Consagrar"},Druidcraft:{description:`<p>Sussurando para os espirítos da natureza, você cria um dos seguintes efeitos dentro do alcance:</p>
<ul>
<li>Um pequeno e inofensivo efeito sensorial que prevê qual será o clima na sua localização nas próximas 24 horas. O efeito pode se manifestar como uma esfera dourada para céu claro, uma nuvem para chuva, flocos de neve caindo para neve, e assim por diante. Esse efeito persiste por uma rodada.</li>
<li>Uma flor desabrocha, uma semente amadurece ou um broto de folha se abre.</li>
<li>Um efeito sensorial inofensivo e instantâneo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o fraco odor de um gambá. O efeito deve caber em um cubo de 1,5 metro [5-foot cube].</li>
<li>Uma vela, tocha ou fogueira pequena acende ou apaga imediatamente.</li>
</ul>`,source:"LdJ pg. 216",name:"Arte Druídica"},"Magic Weapon":{description:`<p>Você toca uma arma não-mágica. Enquanto a magia durar, essa arma se torna uma arma mágica com bônus de +1 para jogadas de ataque e dano.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o bônus aumenta para +2. Quando você usa um espaço de magia de 6º círculo ou superior, o bônus aumenta para +3.</p>`,source:"LdJ pg. 216",name:"Arma Mágica"},"Instant Summons":{description:`<p>Você toca um objeto pesando não mais do que 5 quilos [10 pounds], cuja maior dimensão seja de 1,8 metro [6 ft.] ou menor. Esta magia deixa uma marca invisível na superfície do objeto e, de maneira invisível, inscreve o nome do item na safira que você usou como componente material. Cada vez que conjurar esta magia, você deve usar uma safira diferente.</p>
<p>Em qualquer momento posterior, você pode usar sua ação para dizer o nome do item e esmagar a safira. O item aparece imediatamente na sua mão, independentemente de qualquer distância física ou planar, o que encerra a magia.</p>
<p>Se alguma outra criatura estiver segurando ou transportando o item, esmagar a safira não o transporta até você, em vez disso você descobre quem é a criatura de posse do objeto e, aproximadamente, onde ela se encontra naquele momento.</p>
<p>Dissipar Magia ou um efeito similar aplicado com sucesso na safira encerra o efeito desta magia.</p>`,material:"uma safira no valor de 1.000 PO",name:"Convocação Instantânea"},"Locate Object":{description:"<p>Descreva ou nomeie um objeto que lhe seja familiar. Você sente a direção do local onde ele se encontra, caso esteja a, no máximo, 300 metros [1000 ft.] de distância. Se o objeto estiver se movendo, você sabe em que direção.</p><p>A magia pode localizar um objeto específico que você conheça, desde que você já o tenha visto de perto - a até 9 metros [30 ft.] - ao menos uma vez. Se preferir, a magia pode localizar um objeto de um tipo específico, como certo tipo de traje, joia, mobília, ferramenta ou arma.</p><p>Esta magia não pode localizar um objeto se qualquer espessura de chumbo, até mesmo uma folha fina, bloquear o caminho direto entre você ele.</p>",source:"LdJ pg. 254",material:"um galho bifurcado",name:"Localizar Objeto"},Haste:{description:`<p>Escolha uma criatura voluntária, à sua vista e dentro do alcance da magia. Enquanto a magia durar, o alvo tem deslocamento dobrado, ganha +2 na CA, tem vantagem nas salvaguardas de Destreza e ganha uma ação adicional em cada um dos próprios turnos. Essa ação pode ser usada apenas como as ações Atacar (ataque armado, apenas), Correr, Desengajar, Esconder ou Usar um Objeto.</p>
<p>Quando a magia termina, o alvo é dominado por uma onda de letargia e não pode se mover ou executar ações até o final do próximo turno dele.</p>`,source:"LdJ pg. 223",material:"um corte de raiz de alcaçuz",name:"Celeridade"},"Divine Word":{description:`<p>Você profere uma palavra sagrada, imbuída com o poder que moldou o mundo na aurora da criação. Escolha qualquer número de criaturas à sua vista, no alcance da magia.Cada criatura que puder ouvi-lo deve fazer uma salvaguarda de Carisma. Se falhar, uma criatura sofre um efeito baseado nos pontos de vida atuais dela:</p>
</ul>
<li>50 pontos de vida ou menos: surda por 1 minuto;</li>
<li>40 pontos de vida ou menos: surda e cega por 10 minutos;</li>
<li>30 pontos de vida ou menos: cega, surda e atordoada por 1 hora;</li>
<li>20 pontos de vida ou menos: morta instantaneamente.</li>
</ul>
<p>Independentemente dos seus pontos de vida atuais, um celestial, elemental, feérico ou ínfero que falhe na salvaguarda é forçado a voltar para o plano de origem dele (se já não estiver lá), não podendo voltar ao seu plano atual durante 24 horas por qualquer meio inferior à magia Desejo.</p>`,source:"LdJ pg. 265",name:"Palavra Sagrada"},"Astral Projection":{description:`<p>Você e até oito criaturas voluntárias dentro do alcance da magia projetam seus corpos astrais no Plano Astral (a magia falha e a conjuração é desperdiçada caso você já se encontre nesse plano). O corpo material que você deixa para trás fica inconsciente e em estado de animação suspensa; ele não precisa de comida ou ar e não envelhece.</p>
<p>Seu corpo astral se assemelha à sua forma mortal em quase todos os sentidos, replicando suas estatísticas de jogo e posses. A principal diferença é a adição de um cordão prateado que se estende das suas omoplatas e deixa um rastro para trás, desvanecendo até ficar invisível após 30 centímetros [1 foot]. Esse cordão é sua conexão com seu corpo material. Enquanto o cordão permanece intacto, você pode encontrar seu caminho de volta para casa. Se ele for cortado - algo que só pode acontecer quando um efeito especificamente declarar isto -, sua alma e o corpo são separados, matando-o instantaneamente.</p>
<p>Sua forma astral pode viajar livremente no Plano Astral e passar através de portais ali existentes, que levem a qualquer outro plano. Se você entrar em um novo plano ou voltar para o plano em que estava quando conjurou esta magia, seu corpo e posses são transportadas ao longo do cordão prateado, permitindo que você entre novamente em seu corpo, imediatamente ao ingressar no novo plano. Sua forma astral é uma encarnação separada. Qualquer dano ou outros efeitos que se apliquem a ela não têm nenhum efeito em seu corpo físico, nem persistem quando você retorna para ele.</p>
<p>A magia termina para você e seus companheiros quando você usa sua ação para encerrá-la. Quando a magia termina, a criatura afetada retorna ao próprio corpo físico e desperta.</p>
<p>A magia também pode terminar mais cedo para você ou para um de seus companheiros. Uma magia Dissipar Magia conjurada com sucesso contra um corpo astral ou físico encerra a magia para essa criatura. Se o corpo original da criatura ou de sua forma astral fica com 0 pontos de vida, a magia se encerra para essa criatura. Se a magia se encerrar e o cordão prateado estiver intacto, ele puxa a forma astral da criatura de volta para o próprio corpo, que sai do estado de animação suspensa.</p>
<p>Se você for devolvido ao seu corpo prematuramente, seus companheiros permanecem em suas formas astrais e devem encontrar um meio de voltar para seus corpos, geralmente ao ficarem com 0 pontos de vida.</p>`,source:"LdJ pg. 270",material:"para cada criatura que afetar com esta magia, você deve fornecer um zircão no valor de pelo menos 1.000 PO e uma barra de prata com entalhes ornamentais no valor de pelo menos 100 PO, que serão consumidos pela magia",name:"Projeção Astral"},"Irresistible Dance":{description:`<p>Escolha uma criatura à sua vista, no alcance da magia. O alvo começa a dançar comicamente onde estiver: balançando-se, batendo os pés e se contorcendo enquanto a magia durar. Criaturas que não podem ser enfeitiçadas são imunes a esta magia.</p>
<p>Uma criatura sob o efeito da magia deve usar todo o movimento para dançar sem sair do próprio espaço, além de ter desvantagem em salvaguardas de Destreza e jogadas de ataque. Enquanto o alvo estiver afetado por esta magia, outras criaturas têm vantagem nas jogadas de ataque contra ele. Usando uma ação, uma criatura afetada pode fazer uma salvaguarda de Sabedoria para recuperar o controle sobre si mesma. Em caso de sucesso, a magia termina.</p>`,source:"LdJ pg. 234",name:"Dança Irresistível"},"Guardian of Faith":{description:`<p>Uma sentinela espectral de tamanho Grande aparece e flutua em um espaço desocupado à sua escolha, à sua vista e no alcance da magia. Ele permanece enquanto a magia durar. A sentinela é indistinta exceto por uma espada brilhante e um escudo ornado com o símbolo da sua divindade.</p>
<p>Qualquer criatura hostil a você que se mova para um espaço a até 3 metros [10 ft.] da sentinela pela primeira vez em um turno deve ser bem-sucedida em uma salvaguarda de Destreza. Se falhar, sofre 20 pontos de dano radiante, ou metade do dano em caso de sucesso. A sentinela desaparece quando tiver causado um total de 60 pontos de dano.</p>`,source:"LdJ pg. 234",name:"Defensor da Fé"},"Dispel Evil and Good":{description:`<p>Uma energia cintilante o envolve e protege contra feéricos, mortos-vivos e criaturas originárias de além do Plano Material. Enquanto a magia durar, celestiais, elementais, feéricos, ínferos e mortos-vivos têm desvantagem nas jogadas de ataque contra você.</p>
<p>Você pode encerrar precocemente a magia usando qualquer uma das funções especiais abaixo.</p>
<p><strong>Quebrar Encantamento.</strong> Utilize sua ação para tocar uma criatura, dentro do alcance da magia, que esteja amedrontada, enfeitiçada ou possuída por um celestial, elemental, feérico, ínfero ou morto-vivo. A criatura tocada não está mais encantada, amedrontada ou possuída por tais criaturas.</p>
<p><strong>Regressar.</strong> Utilize sua ação para executar um ataque mágico corpo a corpo contra um celestial, elemental, feérico, ínfero ou morto-vivo ao seu alcance. Em caso de sucesso, você força a criatura a retornar ao próprio plano de origem. Ela deve ser bem-sucedida em uma salvaguarda de Carisma ou é mandada de volta (se já não estiver lá). Caso já não estejam nos próprios planos, mortos-vivos são enviados para o Sombral e feéricos para a Faéria.</p>`,source:"LdJ pg. 238",material:"água benta ou pó de prata e de ferro",name:"Dissipar o Bem e o Mal"},"Stinking Cloud":{description:"<p>Você cria uma esfera com raio de 6 metros [20-foot-radius sphere], feita de um gás amarelo e nauseabundo, centrado em um ponto à sua escolha e no alcance da magia. A nuvem se alastra, contornando os cantos e a área afetada fica totalmente obscurecida. Ela persiste enquanto a magia durar.</p><p>Cada criatura que estiver totalmente dentro da nuvem no início do próprio turno, deve fazer uma salvaguarda de Constituição contra veneno. Se falhar, a criatura gasta uma ação naquele turno vomitando e cambaleando. Criaturas que não precisam respirar ou são imunes a veneno têm sucesso automático nesta salvaguarda.</p><p>Um vento moderado (de pelo menos 15 quilômetros [10 miles] por hora) dispersa a nuvem após 4 rodadas. Um vento forte (de pelo menos 30 quilômetros [20 miles] por hora) a dispersa após 1 rodada.</p>",source:"LdJ pg. 263",material:"um ovo podre ou várias folhas de repolho",name:"Nuvem Fétida"},Blur:{description:"<p>Seu corpo torna-se turvo, mudando e oscilando para todos os que possam vê-lo. Ao longo da duração desta magia, qualquer criatura tem desvantagem em jogadas de ataque contra você. Um atacante é imune a este efeito se não depender da visão, como alguém com percepção às cegas, ou se puder ver através de ilusões, como alguém com visão verdadeira.</p>",source:"LdJ pg. 288",name:"Turvar"},Web:{description:`<p>Você conjura uma massa de teia espessa e pegajosa em um ponto à sua escolha e no alcance da magia. A teia preenche um cubo de 6 metros [20 ft.] a partir daquele ponto enquanto a magia durar. A teia é considerada terreno difícil e torna a área parcialmente obscurecida.</p>
        <p>Se a teia não estiver sendo sustentada por duas massas sólidas (como paredes ou árvores) ou estiver em camadas, cobrindo o chão, parede ou teto, ela colapsa sobre si mesma, e a magia se encerra no início do seu próximo turno. A cobertura de teias sobre uma superfície possui uma profundidade de 1,5 metro [5 ft.].</p>
        <p>Cada criatura que entrar ou iniciar o próprio turno na teia deve fazer uma salvaguarda de Destreza. Se falhar, a criatura está contida enquanto estiver na teia ou até que consiga se soltar.</p>
        <p>Uma criatura contida pela teia pode usar a própria ação para fazer uma salvaguarda de Força contra a CD para evitar sua magia. Se for bem-sucedida, ela não estará mais contida.</p>
        <p>As teias são inflamáveis. Qualquer cubo de teia de 1,5 metro [5 ft.] que for exposto ao fogo, queima em 1 rodada e causa 2d4 pontos de dano ígneo a qualquer criatura que comece o próprio turno no fogo.</p>`,source:"LdJ pg. 283",material:"um pouco de teia de aranha",name:"Teia"},"Vampiric Touch":{description:`<p>O toque de sua mão, envolta por sombra, pode retirar força vital de outros para curar as suas próprias feridas. Faça um ataque mágico corpo a corpo contra uma criatura no seu alcance. Se o ataque for bem-sucedido, o alvo sofre 3d6 pontos de dano necrótico e você recupera uma quantidade de pontos de vida igual à metade da quantidade de dano necrótico causado. Enquanto a magia durar, você pode fazer o ataque novamente em cada um de seus turnos, com uma ação.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano 1 aumenta em 1d6 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 287",name:"Toque Vampírico"},"Mage Hand":{description:`<p>Uma mão flutuante e espectral aparece em um ponto à sua escolha e no alcance da magia. A mão permanece enquanto a magia durar ou até você dispensá-la com uma ação. A mão desaparece caso se distancie mais de 9 metros [30 ft.] de você ou se você conjurar a magia novamente.</p>
<p>Você pode usar sua ação para controlar a mão. Você pode fazer com que ela manipule objetos, abra portas ou recipientes destrancados, guarde ou pegue itens de recipientes abertos, ou derrame o conteúdo de frascos. Você pode movê-la até 9 metros [30 ft.] a cada vez que a usa.</p>
<p> Ela não pode atacar, ativar itens mágicos ou carregar mais de 4,5 quilos [10 pounds].</p>`,source:"LdJ pg. 256",name:"Mãos Mágicas"},"Death Ward":{description:"<p>Ao tocar uma criatura você lhe concede alguma medida de proteção contra a morte.</p><p>Na primeira vez que ela sofrer dano e isso reduzir-lhe os pontos de vida a 0, ela volta a ter 1 ponto de vida e a magia termina.</p><p>Se a magia ainda estiver em ação quando a criatura for submetida a um efeito que a mataria instantaneamente sem causar dano, esse efeito é anulado e a magia termina.</p>",source:"LdJ pg. 271",name:"Proteção Contra Morte"},Shillelagh:{description:"<p>A madeira de uma clava ou cajado que você está segurando é imbuída com o poder da natureza. Enquanto a magia durar, seu atributo de conjuração pode ser usado no lugar da Força para as jogadas de ataque e dano corpo a corpo usando aquela arma, e o dado de dano passa a ser 1d8. A arma também se torna mágica, se já não o for. A magia termina se for conjurada novamente ou se você se desfizer da arma.</p>",source:"LdJ pg. 221",material:"visco, uma folha de trevo e uma clava ou cajado",name:"Bordão Místico"},"Legend Lore":{description:'<p>Nomeie ou descreva uma pessoa, local ou objeto. A magia traz à sua mente um breve resumo de conhecimento significativo sobre aquilo que você nomeou. O conhecimento pode consistir de contos atuais, histórias esquecidas ou até mesmo conhecimento secreto que nunca foi amplamente sabido. Se aquilo que nomeou não for de importância lendária, você não obtém nenhuma informação. Quanto mais informação você já tiver sobre a coisa, mais precisa e detalhada é a informação que recebe.</p><p>Essa informação é precisa, mas pode ser expressa em linguagem figurada. Por exemplo, se você tem um misterioso machado mágico na mão, a magia pode produzir esta informação: "Ai do malfeitor cuja mão tocar o machado, pois mesmo o cabo dele decepa a mão dos ímpios. Apenas um verdadeiro Filho da Pedra, um adorador de Moradin e por ele amado poderá evocar os verdadeiros poderes do machado, e apenas com a palavra sagrada Rudnogg nos lábios".</p>',source:"LdJ pg. 252",material:"um incenso no valor mínimo de 250 PO, que a magia consome,e quatro tiras de marfim no valor mínimo de 50 PO cada",name:"Lendas e Histórias"},"Ice Storm":{description:`<p>Uma saraivada de pedras de gelo bate no chão em um cilindro de 6 metros de raio por 12 metros de altura [20-foot-radius, 40-foot-tall cylinder], centrado em um ponto no alcance da magia. Cada criatura na área afetada deve fazer uma salvaguarda de Destreza. Se falhar, sofre 2d8 pontos de dano contundente e 4d6 pontos de dano gélido, ou metade do dano em caso de sucesso.</p>
<p>O granizo transforma a área da tempestade em terreno difícil até o final do seu próximo turno.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o dano contundente aumenta em 1d8 para cada círculo do espaço acima do 4º círculo.</p>`,source:"LdJ pg. 286",material:"uma pitada de pó e algumas gotas de água",name:"Tempestade Glacial"},Thunderwave:{description:`<p>Uma onda de força trovejante varre tudo a partir de você. Cada criatura em um cubo de 4,5 metros [15-foot cube] originando em você deve fazer uma salvaguarda de Constituição. Se falhar, sofre 2d8 pontos de dano trovejante e é empurrada 3 metros [10 ft.] para longe de você. Em caso de sucesso, a criatura sofre metade do dano e não é empurrada.</p>
<p>Além disso, objetos soltos que estejam completamente dentro da área de efeito são automaticamente empurrados 3 metros [10 ft.] para longe de você, e a magia emite um estrondo trovejante audível a até 90 metros [300 ft.].</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 264",name:"Onda Trovejante"},"Enlarge/Reduce":{description:`<p>Você faz com que uma criatura ou um objeto, à sua vista e dentro do alcance da magia, fique maior ou menor enquanto a magia durar. Escolha uma criatura ou um objeto que não esteja sendo usado ou carregado. Se o alvo não for voluntário, ele pode fazer uma salvaguarda de Constituição. Em caso de sucesso, a magia não surte efeito.</p>
<p>Se o alvo for uma criatura, tudo o que estiver usando e carregando muda de tamanho junto com ela. Qualquer item descartado por uma criatura afetada por esta magia retorna, imediatamente, ao tamanho normal.</p>
<p><strong>Aumentar</strong>. O tamanho do alvo dobra em todas as dimensões, e o peso é multiplicado por oito. O tamanho aumenta em uma categoria - de Médio para Grande, por exemplo. Se não houver espaço suficiente para o alvo dobrar o próprio tamanho, ele atinge o tamanho máximo possível no espaço disponível. Enquanto a magia durar, o alvo também tem vantagem em testes de Força e salvaguardas de Força. As armas dele também crescem para combinar com o novo tamanho. Se o alvo realizar um ataque bem-sucedido com essas armas, elas causam 1d4 pontos de dano a mais do que o normal da arma enquanto estiverem ampliadas.</p>
<p><strong>Reduzir</strong>. O tamanho do alvo é reduzido à metade em todas as dimensões, e o peso é reduzido para um oitavo do normal. Essa redução diminui o tamanho do alvo em uma categoria - de Médio para Pequeno, por exemplo. Enquanto a magia durar, o alvo tem desvantagem em testes de Força e salvaguardas de Força. As armas dele também encolhem para combinar com o novo tamanho. Se o alvo realizar um ataque bem-sucedido com essas armas, elas causam 1d4 pontos de dano a menos que o normal da arma enquanto estiverem reduzidas (o dano mínimo é 1).</p>`,source:"LdJ pg. 218",material:"uma pitada de pó de ferro",name:"Aumentar/Reduzir"},Weird:{description:"<p>Absorvendo os medos mais profundos de um grupo de criaturas, você cria aparições ilusórias nas mentes delas, visíveis apenas para elas. Cada criatura em uma esfera de 9 metros de raio [30-foot-radius sphere] centrada em um ponto à sua escolha e no alcance da magia, deve fazer uma salvaguarda de Sabedoria. Se falhar, a criatura fica amedrontada enquanto a magia durar. A ilusão faz menção aos mais profundos medos da criatura, manifestando os piores pesadelos em forma de uma ameaça implacável. Ao final do turno de cada criatura amedrontada, ela deve fazer uma salvaguarda de Sabedoria. Se falhar, sofre 4d10 pontos de dano psíquico; se for bem­-sucedida, a magia se encerra para a criatura.</p>",source:"LdJ pg. 239",name:"Encarnação Fantasmagórica"},"Globe of Invulnerability":{description:`<p>Uma barreira imóvel e levemente cintilante surge a 3 metros de raio [10-foot radius] em volta de você e permanece enquanto durar a magia.</p>
<p>Qualquer magia de 5º círculo ou inferior conjurada do lado de fora da barreira não poderá afetar criaturas ou objetos dentro dela, mesmo se for conjurada usando um espaço de magia superior. A magia pode atingir criaturas e objetos dentro da barreira, mas não terá efeito sobre eles. Da mesma forma, a área dentro da barreira é excluída das zonas afetadas por essa magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, a barreira bloqueia magias um círculo superior para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 246",material:"uma conta de cristal ou vidro que se estilhaça quando a magia termina",name:"Globo de Invulnerabilidade"},"Greater Restoration":{description:`<p>Você toca uma criatura, imbuindo-a com energia positiva que desfaz um efeito debilitante. Você pode reduzir o nível de exaustão dela em 1 ou cancelar algum dos efeitos a seguir:</p>
<ul>
<li>Um efeito que enfeitiçou ou petrificou o alvo;</li>
<li>Uma maldição, incluindo a sintonia do indivíduo com um item mágico amaldiçoado;</li>
<li>Qualquer redução de um dos valores de atributo do alvo;</li>
<li>Um efeito que reduza os pontos de vida máximos do alvo.</li>
</ul>`,source:"LdJ pg. 278",material:"pó de diamante no valor mínimo de 100 PO, o qual a magia consome",name:"Restauração Maior"},"Wall of Fire":{description:`<p>Você cria uma muralha de fogo sobre uma superfície sólida no alcance da magia. Você pode constituir uma muralha de até 18 metros [60 ft.] de comprimento, 6 metros [20 ft.] de altura e 30 centímetros [1 ft.] de espessura, ou uma parede circular de até 6 metros de diâmetro, 6 metros de altura e 30 centímetros de espessura. Ela é opaca e permanece enquanto a magia durar.</p>
<p>Quando a muralha surge, cada criatura dentro da área deve fazer uma salvaguarda de Destreza. Se falhar, sofre 5d8 pontos de dano ígneo, ou metade do dano em caso de sucesso.</p>
<p>Uma face da muralha, à sua escolha durante a conjuração, causa 5d8 pontos de dano ígneo a cada criatura que termine o próprio turno a menos de 3 metros [10 ft.] daquela face da muralha. Ela sofre o mesmo dano ao entrar na muralha pela primeira vez, ou quando termina o próprio turno lá dentro. A outra face da muralha não causa dano.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 4º.</p>`,source:"LdJ pg. 260",material:"um pequeno pedaço de fósforo",name:"Muralha de Fogo"},"Mirror Image":{description:`<p>Três duplicatas ilusórias de você aparecem no seu espaço. Até a magia acabar, as duplicatas se movem com você e copiam as suas ações, trocando de posição, tornando impossível rastrear qual imagem é real. Você pode usar sua ação para dissipar as duplicatas ilusórias.</p>
<p>Cada vez que uma criatura mirar você com um ataque enquanto a magia durar, role um d20 para determinar se o ataque, em vez de você, mira uma das suas duplicatas.</p>
<p>Se você tiver três duplicatas, você deve rolar um 6 ou maior para mudar o alvo do ataque para uma duplicata. Com duas duplicatas, você deve rolar um 8 ou maior. Com uma duplicata, você deve rolar um 11 ou maior.</p>
<p>A CA de uma duplicata é igual a 10 + seu modificador de Destreza. Se um ataque atingir uma duplicata, ela é destruída. Uma duplicata só pode ser destruída por um ataque que a atinja. Ela ignora todos os outros danos e efeitos. A magia acaba quando todas as três duplicatas forem destruídas.</p>
<p>Uma criatura não pode ser afetada por essa magia se não puder enxergar, se ela contar com outros sentidos além da visão, como percepção às cegas, ou se ela puder perceber ilusões como falsas, como com visão verdadeira.</p>`,source:"LdJ pg. 276",name:"Reflexos"},"Animal Messenger":{description:`<p>Por meio desta magia, você usa um animal para entregar uma mensagem. Escolha uma fera Minúscula à sua vista e no alcance da magia, como um esquilo, uma gralha azul ou um morcego. Você especifica uma localização que já tenha visitado e um destinatário que combine com uma descrição geral, tal como: "uma mulher ou um homem vestido com o uniforme da guarda da cidade" ou "um anão ruivo usando um chapéu pontudo". Você também deve falar uma mensagem de até vinte e cinco palavras. Enquanto a magia durar, a fera alvo viaja em direção à localização especificada, cobrindo cerca de 80 quilômetros [50 miles] durante 24 horas para um mensageiro voador, ou 40 quilômetros [25 miles] para outros animais.</p>
<p>Quando o mensageiro chegar, ele entrega a mensagem para a criatura que você descreveu, replicando o som da sua voz. O mensageiro fala somente com a criatura que combina com a descrição que você forneceu. Se o mensageiro não alcançar o destino antes do fim da duração da magia, a mensagem se perde e a fera refaz o caminho de volta para o lugar onde você conjurou a magia.</p>
<p><strong>Em Círculos Superiores.</strong> Se você conjurar essa magia usando um espaço de magia de 3º círculo ou superior, a duração da magia aumenta em 48 horas para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 257",material:"um punhado de comida",name:"Mensageiro Animal"},"Conjure Celestial":{description:`<p>Você invoca um celestial com nível de desafio 4 ou menor, que surge em um espaço desocupado à sua vista e no alcance da magia. O celestial desaparece ao atingir 0 pontos de vida ou ao término da magia.</p>
<p>O celestial é amistoso com você e seus companheiros enquanto durar a magia. Jogue a iniciativa para o celestial, que tem seus próprios turnos. O celestial obedece a qualquer comando verbal que você lhe direcione (não requer ação sua), desde que isso não viole o alinhamento dele. Caso não seja dado comando algum, ele se defende de seres hostis, não executando nenhuma outra ação. O DM fornece as estatísticas do celestial.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 9º círculo, você convoca um celestial de nível de desafio 5 ou menor.</p>`,source:"LdJ pg. 250",name:"Invocar Celestial"},Fear:{description:`<p>Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura num cone de 9 metros [30 ft.] deve ser bem-sucedida numa salvaguarda de Sabedoria ou derrubará o que estiver segurando e ficará amedrontada enquanto a magia durar.</p>
<p>Em cada um dos turnos dela, a criatura deve executar a ação Correr e distanciar-se o máximo que puder de você pela rota mais segura disponível, a menos que não haja para onde ir. Se a criatura finalizar o turno dela em um local onde não possa mais vê-lo, ela pode fazer uma salvaguarda de Sabedoria. Em caso de sucesso, a magia se encerra para ela.</p>`,source:"LdJ pg. 257",material:"uma pena branca ou um coração de galinha",name:"Medo"},"Remove Curse":{description:"<p>Ao tocar uma criatura ou objeto, todas as maldições lançadas sobre eles se encerram. Se o objeto for um item mágico amaldiçoado, a maldição se mantém, mas a magia quebra a sintonia do dono com o objeto, de modo que ele pode ser removido ou descartado.</p> ",source:"LdJ pg. 276",name:"Remover Maldição"},Gate:{description:`<p>Você conjura um portal ligando um espaço desocupado, à sua vista, a um lugar específico em outro plano de existência. O portal é uma abertura circular, que pode ter de 1,5 [5 ft.] a 6 metros [20 ft.] de diâmetro. Você pode orientá-lo em qualquer direção que escolher. Ele permanece aberto enquanto a magia durar.</p>
<p>O portal tem uma frente e um verso em cada plano onde aparecer. É possível viajar simplesmente atravessando-o pela frente. Qualquer coisa que atravessá-lo será transportada instantaneamente para o outro plano, aparecendo no espaço desocupado mais próximo ao portal.</p>
<p>Divindades e outros regentes planares podem evitar que portais criados por esta magia abram-se em sua presença ou em qualquer lugar dos seus domínios.</p>
<p>Ao conjurar esta magia, você pode citar o nome de uma criatura específica (um pseudônimo, um título ou apelido não servem). Se essa criatura estiver em um plano diferente do seu, o portal abre-se em um espaço imediatamente ao lado da criatura citada e a arrasta através dele para o lugar desocupado mais próximo do seu lado do portal. Você não ganha poder especial algum sobre a criatura, e ela é livre para agir conforme o DM achar apropriado. A criatura pode ir embora, atacá-lo ou ajudá-lo.</p>`,source:"LdJ pg. 268",material:"um diamante, cujo valor mínimo seja de 5.000 PO",name:"Portal"},Divination:{description:"<p>Sua magia e uma oferenda colocam-no em contato com um deus ou um dos servos dele. Você faz uma única pergunta a respeito de um objetivo específico, evento ou atividade que ocorrerá no prazo de 7 dias. O DM oferece uma resposta verdadeira. A resposta pode ser uma frase curta, uma rima enigmática ou um presságio.</p><p>A magia não leva em conta quaisquer circunstâncias que possam mudar o resultado futuro, como a conjuração de magias adicionais ou a perda ou chegada de um companheiro.</p><p>Se você conjurar a magia duas ou mais vezes antes de concluir seu próximo descanso longo, há uma chance cumulativa de 25% para cada conjuração após a primeira de você obter uma resposta aleatória. O DM faz essa jogada em segredo.</p>",source:"LdJ pg. 270",material:"incenso e uma oferenda sacrificial adequada à sua religião, valendo, juntos, pelo menos 25 PO, que são consumidos pela magia",name:"Presságio"},"Shocking Grasp":{description:`<p>Raios saltam de sua mão para transmitir um choque a uma criatura que você tentar tocar. Faça um ataque mágico corpo a corpo contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo uma armadura feita de metal. Se acertar, o alvo sofre 1d8 pontos de dano elétrico e não pode executar reações até o início do próximo turno dele.</p>
<p>O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).</p>`,name:"Toque Chocante"},"True Seeing":{description:"<p>Você toca uma criatura voluntária. O alvo ganha a capacidade de ver as coisas como elas são verdadeiramente. Enquanto a magia durar, a criatura terá visão verdadeira, notará portas secretas escondidas por magia e poderá ver no Plano Etéreo em um alcance de 36 metros [120 ft.].</p>",source:"LdJ pg. 289",material:"unguento para os olhos, custando 25 PO, feito a partir de cogumelo em pó, açafrão e gordura, que é consumido pela magia",name:"Visão da Verdade"},"Mass Heal":{description:"<p>Uma onda de energia curativa flui a partir de você para todas as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos como desejar entre qualquer número de criaturas à sua vista e no alcance da magia. Criaturas curadas por esta magia também são curadas de todas as doenças e quaisquer efeitos que as deixem cegas ou surdas. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>",source:"LdJ pg. 233",name:"Cura Completa em Massa"},Forcecage:{description:`<p>Uma prisão com a forma de um cubo invisível e imóvel, composta de força mágica, surge ao redor de uma área à sua escolha e no alcance da magia. Ela pode ser uma jaula ou uma caixa sólida, à sua escolha.</p>
<p>A jaula pode ter até 6 metros [20 ft.] de lado, sendo feita de barras de 1,5 centímetros [1/2 inch] de espessura com espaços de 1,5 centímetros [1/2 inch] entre elas.</p>
<p>A caixa pode ter 3 metros [10 ft.] de lado e cria uma barreira sólida que impede qualquer matéria de passar através dela, bloqueando quaisquer magias conjuradas dentro ou fora da área.</p>
<p>Quando a magia é conjurada, qualquer criatura que estiver completamente dentro da área afetada fica aprisionada. Criaturas que estejam apenas parcialmente na área, ou que sejam grandes demais para caber dentro da área, são empurradas para longe do centro da área, até ficarem completamente fora dela.</p>
<p>Uma criatura dentro da prisão não pode deixá-la por meios não-mágicos. Se a criatura tenta usar alguma forma de teleporte ou viagem extraplanar para sair da prisão, precisa primeiro fazer uma salvaguarda de Carisma. Se falhar, ela não pode sair e desperdiça o uso da magia ou efeito; se for bem-sucedida, ela pode usar a magia para deixar a prisão. A prisão também se estende ao Plano Etéreo, bloqueando viagens etéreas</p>
<p>Esta magia não pode ser dissipada por Dissipar Magia.</p>`,source:"LdJ pg. 222",material:"pó de rubi, cujo valor mínimo seja de 1.500 PO",name:"Cárcere de Energia"},"Water Walk":{description:"<p>Esta magia concede a capacidade de deslocamento sobre qualquer superfície líquida - como água, ácido, lama, neve, areia movediça ou lava - como se fosse terra firme e inofensiva (criaturas cruzando lava derretida ainda podem sofrer dano devido ao calor). Enquanto esta magia durar, até dez criaturas voluntárias, à sua vista e no alcance da magia, ganham esta habilidade.</p><p>Se você escolher uma criatura submersa como alvo, a magia carrega o alvo até a superfície do líquido a uma taxa de 18 metros [60 ft.] por rodada.</p>",source:"LdJ pg. 221",material:"um pedaço de cortiça",name:"Caminhar Sobre as Águas"},"Plant Growth":{description:"<p>Esta magia canaliza vitalidade para as plantas dentro de uma área específica. Existem dois usos possíveis para a magia, garantindo tanto benefícios imediatos quanto de longa duração.</p><p>Se você conjurar esta magia usando uma ação, escolha um ponto dentro do alcance. Todas as plantas normais em um raio de 30 metros [100-foot radius] centradas neste ponto tornam-se espessas e super desenvolvidas. Uma criatura se movendo através da área deve gastar 6 metros [20 ft.] de movimento para cada 1,5 metro [5 ft.] que se mover.</p><p>Você pode excluir uma ou mais áreas de qualquer tamanho dentro de área da magia a ser afetada.</p><p>Se você conjurar esta magia ao longo de 8 horas, você enriquece a terra. Todas as plantas em um raio de 1 quilômetro [0,5 mile] centradas em um ponto dentro do alcance se tornam enriquecidas durante 1 ano. As plantas produzem duas vezes a quantidade normal de alimento quando colhidas.</p>",source:"LdJ pg. 230",name:"Crescimento de Plantas"},"Eldritch Blast":{description:`<p>Um raio de energia crepitante salta na direção de uma criatura dentro do alcance da magia. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d10 pontos de dano energético.</p>
<p>A magia cria mais de um raio quando você atinge níveis mais elevados: dois raios no 5º nível, três raios no 11º nível, e quatro raios no 17º nível. Você pode direcionar os raios contra o mesmo alvo ou contra alvos diferentes. Faça uma jogada de ataque separada para cada raio.</p>`,source:"LdJ pg. 273",name:"Raio Místico"},"Control Weather":{description:`<p>Enquanto esta magia durar, você assume o controle do clima no alcance de 8 quilômetros [5 miles]. É preciso estar ao ar livre para conjurar esta magia. Caso você se mova para um lugar onde não tenha um caminho desimpedido até o céu, a magia se encerra antecipadamente.</p>
<p>Ao realizar esta conjuração, você muda as condições climáticas atuais, que são determinadas pelo DM com base no clima e na estação do ano. Você pode mudar a precipitação, a temperatura e o vento. Demora 1d4 x 10 minutos para as novas condições fazerem efeito. Depois que elas se estabelecerem, você pode mudá-las novamente. Quando a magia terminar, o clima gradualmente retorna ao normal.</p>
<p>Ao mudar as condições do clima, encontre a atual condição nas tabelas a seguir e mude o estágio dela em um, para cima ou para baixo. Ao mudar o vento, você pode mudar sua direção.</p>
<div style="width:75%; margin:auto;"><b>PRECIPITAÇÃO</b></div><table class="small">     <tr>         <th>Estágio</th>         <th>Condição</th>     </tr>     <tr>         <td>1</td>         <td>Claro</td>     </tr>     <tr>         <td>2</td>         <td>Nuvens leves</td>     </tr>     <tr>         <td>3</td>         <td>Nublado ou com neblina</td>     </tr>     <tr>         <td>4</td>         <td>Chuva, granizo leve ou neve</td>     </tr>     <tr>         <td>5</td>         <td>Chuva torrencial, tempestade de granizo ou nevasca</td>     </tr> </table><br><div style="width:75%; margin:auto;"><b>TEMPERATURA</b></div><table class="small">     <tr>         <th>Estágio</th>         <th>Condição</th>     </tr>     <tr>         <td>1</td>         <td>Calor insuportável</td>     </tr>     <tr>         <td>2</td>         <td>Quente</td>     </tr>     <tr>         <td>3</td>         <td>Ameno</td>     </tr>     <tr>         <td>4</td>         <td>Fresco</td>     </tr>     <tr>         <td>5</td>         <td>Frio</td>     </tr>     <tr>         <td>6</td>         <td>Frio ártico</td>     </tr> </table><br><div style="width:75%; margin:auto;"><b>VENTO</b></div><table class="small">     <tr>         <th>Estágio</th>         <th>Condição</th>     </tr>     <tr>         <td>1</td>         <td>Calmo</td>     </tr>     <tr>         <td>2</td>         <td>Moderado</td>     </tr>     <tr>         <td>3</td>         <td>Vento Forte</td>     </tr>     <tr>         <td>4</td>         <td>Ventania</td>     </tr>     <tr>         <td>5</td>         <td>Tempestade</td>     </tr> </table>`,source:"LdJ pg. 228",material:"um incenso queimando e pedaços de terra e madeira misturados a água",name:"Controlar o Clima"},Eyebite:{description:`<p>Enquanto a magia durar, seus olhos tornam-se um vazio escuro imbuído com um poder aterrorizante. Escolha uma criatura à sua vista e que esteja a até 18 metros [60 ft.] de você, que deverá ser bem-sucedida em uma salvaguarda de Sabedoria ou será afetada por um dos efeitos a seguir, à sua escolha, enquanto a magia durar. Em cada um de seus turnos, até a magia terminar, você pode usar sua ação para atingir outra criatura, mas não pode ter como alvo uma criatura novamente se ela for bem-sucedida em uma salvaguarda contra esta conjuração de Mau Olhado.</p>
<ul>
<li><strong>Adormecer</strong>. O alvo fica inconsciente. Ele acorda ao sofrer algum dano ou se outra criatura usar a ação dela para sacudi-lo até acordá-lo.</li>
<li><strong>Apavorard</strong>. O alvo fica amedrontado por você. Em cada um dos turnos dele, o alvo amedrontado deve executar a ação Correr e afastar-se de você pela rota mais segura e curta disponível, a menos que não haja nenhum lugar para onde ir. Se ele se dirigir para um local a pelo menos 18 metros [60 ft.] de você, de onde não possa mais vê-lo, este efeito termina.</li>
<li><strong>Adoecer</strong>. O alvo tem desvantagem nas jogadas de ataque e testes de atributo. No final de cada um dos turnos dele, o alvo pode fazer outra salvaguarda de Sabedoria. Se for bem-sucedido, o efeito termina.</li>
</ul>`,source:"LdJ pg. 257",name:"Mau Olhado"},"Beacon of Hope":{description:"<p>Esta magia concede esperança e vitalidade. Escolha qualquer número de criaturas dentro do alcance da magia. Durante a duração desta magia, cada alvo terá vantagem em salvaguardas de Sabedoria e contra a morte, além de recuperar a quantidade máxima de pontos de vida possível de qualquer fonte de cura.</p>",source:"LdJ pg. 281",name:"Sinal de Esperança"},Imprisonment:{description:`<p>Você cria um dispositivo de retenção mágica para aprisionar uma criatura à sua vista e no alcance da magia. O alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, fica preso pela magia; se for bem-sucedido, fica imune a esta magia caso você a conjure novamente. A criatura não precisa respirar, comer ou beber, e não envelhece enquanto estiver afetada por esta magia. Magias de adivinhação não podem localizar ou perceber o alvo.</p>
<p>Ao conjurar esta magia, você escolhe uma das seguintes formas de aprisionamento.</p>
<p><strong>Acorrentar</strong>. Pesadas correntes firmemente enraizadas ao chão prendem o alvo no lugar. O alvo fica contido enquanto a magia durar, e não pode mover-se ou ser movido por quaisquer meios antes disso. O componente especial para esta versão da magia é uma corrente fina feita de algum metal precioso.</p>
<p><strong>Contenção Reduzida</strong>. O alvo é encolhido até uma altura de 2,5 centímetros [1 inch] e fica preso dentro de uma pedra preciosa ou objeto similar. Luz pode passar através da pedra preciosa normalmente (permitindo que o alvo possa ver o que há fora e que outras criaturas de fora possam vê-lo), porém nada mais pode passar, mesmo por meio de teleporte ou viagem planar. A pedra preciosa não pode ser lapidada ou quebrada enquanto a magia permanecer em vigor. O componente especial para esta versão da magia é uma grande gema transparente, como uma safira, diamante ou rubi.</p>
<p><strong>Enterrar</strong>. O alvo é enterrado bem fundo no solo em uma esfera de força mágica grande o suficiente para contê-lo. Nada pode passar através da esfera, nem qualquer criatura pode teleportar ou usar viagem planar para entrar ou sair dela. O componente especial para esta versão da magia é um pequeno orbe de mitral.</p>
<p><strong>Prisão Cercada</strong>. A magia transporta o alvo para um minúsculo semiplano protegido contra teleporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura confinada ou área semelhante, à sua escolha. O componente especial para esta versão da magia é uma representação em miniatura da prisão feita em jade.</p>
<p><strong>Torpor</strong>. O alvo fica inconsciente e não pode ser despertado. O componente especial para esta versão da magia consiste em raras ervas soníferas.</p>
<p><strong>Terminando a Magia</strong>. Durante a conjuração desta magia, qualquer que seja a versão dela, você pode especificar uma condição que fará com que ela termine e o alvo seja liberado. A condição pode ser tão específica ou tão elaborada quanto você desejar, mas o DM deve concordar que a condição seja razoável e que tenha uma probabilidade de vir a acontecer. As condições podem ser baseadas no nome, identidade ou divindade de uma criatura, mas seja como for, deve ser baseada em ações ou qualidades observáveis e não em coisas intangíveis como nível, classe ou pontos de vida.</p>
<p>Uma magia Dissipar Magia pode encerrar esta magia somente se for conjurada como uma magia de 9º círculo, tendo como alvo seja a prisão ou o componente especial usado para criá-lo.</p>
<p>Você pode usar um determinado componente especial para criar apenas uma prisão de cada vez. Se você conjurar a magia novamente usando o mesmo componente, o alvo da primeira conjuração é imediatamente liberado de sua prisão.</p>`,source:"LdJ pg. 215",material:"uma representação em velino ou uma estatueta esculpida à semelhança do alvo, além de um componente especial que varia de acordo com a versão da magia que você escolher, no valor de pelo menos 500 PO por Dado de Vida do alvo",name:"Aprisionamento"},Jump:{description:"<p>Você toca uma criatura. Enquanto a magia durar, a distância de salto da criatura é triplicada.</p>",source:"LdJ pg. 278",material:"uma perna traseira de um gafanhoto",name:"Salto"},"Arcane Hand":{description:`<p>Você cria uma mão de tamanho Grande, feita de uma energia translúcida e reluzente, em um espaço desocupado à sua vista e dentro do alcance da magia. A mão persiste enquanto a magia durar e move-se ao seu comando, imitando os movimentos de sua própria mão.</p>
<p>A mão é um objeto que tem CA 20 e pontos de vida iguais ao valor máximo de seus pontos de vida. Se ela cair para 0 pontos de vida, a magia se encerra. Ela tem Força 26 (+8) e Destreza 10 (+0), não preenchendo o espaço que parece ocupar.</p>
<p>No turno em que você conjurar a magia e depois, usando uma ação bônus nos seus turnos subsequentes, você poderá movê-la por até 18 metros [60 ft.] e causar os seguintes efeitos:</p>
<p><strong>Punho Cerrado.</strong> A mão ataca uma criatura ou objeto a até 1,5 metro [5 ft.] dela. Faça um ataque mágico de combate corpo a corpo para a mão como se ela fizesse parte do seu corpo, ou seja, usando suas próprias estatísticas de jogo. Em caso de acerto, o alvo sofre 4d8 pontos de dano energético.</p>
<p><strong>Mão Vigorosa.</strong> A mão tenta empurrar uma criatura a até 1,5 metro [5 ft.] de distância em uma direção que você escolher. Faça um teste de Força da mão, resistido pela Força (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem no teste. Se for bem-sucedido, a mão empurra o alvo a até 1,5 metro [5 ft.] de distância, mais 1,5 metro [5 ft.] multiplicado por cinco vezes o valor de seu modificador do atributo de conjuração. A mão se move com o alvo para permanecer a 1,5 metro [5 ft.] dele.</p>
<p><strong>Mão Esmagadora.</strong> A mão tenta agarrar uma criatura de tamanho Enorme ou menor dentro do alcance de 1,5 metro [5 ft.]. Você usa o valor da Força da mão para resolver o agarramento. Se o alvo for Médio ou menor, você tem vantagem no teste. Enquanto a mão estiver agarrando o alvo, você pode usar uma ação bônus para fazer com que a mão o esmague. Quando você faz isso, o alvo sofre dano contundente equivalente a 2d6 pontos de dano + o modificador de seu atributo de conjuração.</p>
<p><strong>Mão Interposta.</strong> A mão se interpõe entre você e uma criatura à sua escolha, até que você lhe dê um comando diferente. A mão se desloca até ficar entre você e o alvo, proporcionando a você meia cobertura contra o alvo. Este último não pode se mover através do espaço da mão se o valor de Força dele for menor ou igual ao da mão. Se o valor de Força do alvo for maior do que o valor de Força da mão, ele pode se mover em direção a você atravessando o espaço ocupado pela mão, mas esse espaço é considerado terreno difícil para o alvo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o dano da opção Punho Cerrado aumenta em 2d8 e o da Mão Esmagadora aumenta em 2d6 para cada círculo do espaço acima do 5º.</p>`,material:"uma casca de ovo e uma luva feita de pele de cobra",name:"Mão Arcana"},"Create or Destroy Water":{description:`<p>Você pode criar ou destruir água.</p>
<p><strong>Criar Água.</strong> Você cria até 40 litros de água limpa em um recipiente limpo, aberto e no alcance da magia. A água também pode cair como chuva em um cubo de 9 metros [30-foot cube] dentro do alcance da magia, extinguindo chamas expostas dentro dessa área.</p>
<p><strong>Destruir Água.</strong> Você destrói até 40 litros de água em um recipiente aberto dentro do alcance da magia. Ou você pode dispersar névoa em um cubo de 9 metros [30-foot cube] dentro do alcance da magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode criar ou destruir 40 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro [5 ft.] para cada círculo de magia acima do 1º.</p>`,source:"LdJ pg. 231",material:"uma gota de água, se for criá-la, ou alguns grãos de areia, se for destruí-la",name:"Criar ou Destruir Água"},"Speak with Animals":{description:"<p>Você adquire a habilidade de compreender e se comunicar verbalmente com feras enquanto a magia durar. O conhecimento e a consciência são limitados pela inteligência delas mas, no mínimo, são capazes de dar informação sobre localidades e monstros próximos, incluindo tudo o que notam ou notaram nas últimas 24 horas. Você pode tentar persuadir uma fera a lhe fazer um pequeno favor, a critério do DM.</p>",source:"LdJ pg. 243",name:"Falar com Animais"},Nondetection:{description:"<p>Enquanto a magia durar, você oculta um alvo que você toque de magias de adivinhação. O alvo pode ser uma criatura voluntária, um local ou um objeto que não ultrapasse 3 metros em qualquer dimensão. O alvo não pode ser afetado por qualquer magia de adivinhação ou percebido por sensores mágicos de vidência.</p>",source:"LdJ pg. 249",material:"uma pitada de pó de diamante no valor mínimo de 25 PO polvilhado sobre o alvo, que a magia consome",name:"Indetectável"},"Rope Trick":{description:"<p>Você toca um pedaço de corda de até 18 metros [60 ft.] de comprimento. Uma extremidade da corda, em seguida, sobe para o ar, até ficar perpendicular ao solo. Na extremidade superior da corda, uma entrada invisível se abre para um espaço extradimensional enquanto a magia durar.</p><p>O espaço extradimensional pode ser alcançado escalando-se a corda até o topo. O espaço pode conter até oito criaturas de tamanho Médio ou menores. A corda pode ser puxada para o espaço, fazendo com que desapareça de vista para quem está de fora do espaço.</p><p>Ataques e magias não podem atravessar a entrada, seja para dentro ou para fora do espaço extradimensional, mas quem está dentro pode ver do lado de fora, como se olhasse através de uma janela de 1,00 x 1,50 metro [3-foot-by-5-foot], tendo a corda como centro.</p><p>Qualquer coisa dentro do espaço extradimensional cai quando a magia termina.</p>",source:"LdJ pg. 230",material:"extrato de milho em pó e um laço torcido de pergaminho",name:"Corda Extradimensional"},Command:{description:`<p>Você emite uma palavra de comando para uma criatura à sua vista e no alcance da magia. O alvo deve ser bemsucedido em uma salvaguarda de Sabedoria, ou passa a obedecer o comando no próximo turno dele. A magia não tem nenhum efeito se o alvo for um morto-vivo, se não entender seu idioma ou se o comando for diretamente prejudicial a ele.</p>
<p>A seguir, veja alguns exemplos típicos de comandos e seus efeitos. Você pode emitir um comando diferente dos descritos aqui. Se fizer isso, o DM determina como o alvo se comporta. Se o alvo não puder seguir seu comando, a magia se encerra.</p>
<p><strong>Abaixar.</strong> O alvo fica caído e, em seguida, termina o próprio turno.</p>
<p><strong>Aproximar.</strong> O alvo se move em sua direção pela rota mais curta e direta, terminando o turno ao se aproximar a até 1,5 metro [5 ft.] de você.</p>
<p><strong>Fugir.</strong> O alvo gasta o próprio turno afastando-se de você pelo meio mais rápido disponível.</p>
<p><strong>Largar.</strong> O alvo deixa cair tudo o que está segurando e então termina o próprio turno.</p>
<p><strong>Parar.</strong> O alvo não se mexe e não executa nenhuma ação. Uma criatura voadora permanece no ar, desde que seja capaz de fazê-lo. Se precisar se mover para ficar no ar, ela voa a distância mínima necessária para fazê-lo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode afetar uma criatura adicional para cada círculo do espaço acima do 1º. As criaturas devem estar a até 9 metros [30 ft.] umas das outras quando você as escolhe como alvo.</p>`,source:"LdJ pg. 225",name:"Comando"},"Fire Shield":{description:`<p>Chamas finas e bruxuleantes recobrem seu corpo enquanto a magia durar, emitindo luz plena em um raio de 3 metros [10 ft.] e meia-luz por 3 metros adicionais. A magia termina antecipadamente quando você usa uma ação para dissipá-la.</p>
<p>As labaredas proporcionam a você um escudo ígneo ou um escudo gélido, à sua escolha. O escudo ígneo lhe confere resistência contra dano gélido e o escudo gélido fornece resistência contra dano ígneo.</p>
<p>Além disso, sempre que uma criatura a menos de 1,5 metros [5 ft.] de você acertá-lo com um ataque corpo a corpo, o escudo entra em erupção flamejante. O atacante sofre 2d8 pontos de dano ígneo de um escudo ígneo e 2d8 pontos de dano gélido de um escudo gélido.</p>`,source:"LdJ pg. 240",material:"um pouco de fósforo ou um vaga-lume",name:"Escudo Ardente"},"Programmed Illusion":{description:`<p>Você cria a ilusão de um objeto, criatura ou outro fenômeno visível no alcance da magia e que é ativado quando uma condição específica ocorre. O efeito ilusório é imperceptível até ser ativado. A ilusão não pode ser maior do que um cubo de 9 metros [30 ft.]. Ao conjurar essa magia você decide como a ilusão se comporta e que sons ela faz. A encenação programada pode durar até 5 minutos.</p>
<p>Quando a condição que você especificou ocorrer, a ilusão surge e age da maneira que você descreveu. Uma vez terminada a encenação, a ilusão desaparece e permanece dormente por 10 minutos. Após esse tempo, a ilusão pode ser ativada novamente.</p>
<p>A condição de ativação pode ser tão específica ou genérica quanto você desejar, no entanto deve basear-se em condições visuais ou sonoras que ocorram a até 9 metros [30 ft.] da área. Por exemplo, você poderia criar uma ilusão de si mesmo para avisar outros que tentem abrir uma porta com armadilha ou poderia programar a ilusão para ser ativada apenas quando uma criatura disser uma determinada palavra ou frase.</p>
<p>Interação física com a imagem revela que se trata de uma ilusão, pois coisas podem passar através dela. Uma criatura que gaste uma ação para examinar a imagem, pode perceber o caráter ilusório desta com um teste bem-sucedido de Inteligência (Investigação) contra a CD para evitar sua magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura pode ver através da imagem, e qualquer som que a ilusão faça se torna abafado para a criatura.</p>`,source:"LdJ pg. 248",material:"um pouco de lã e pó de jade, cujo valor mínimo seja de 25 PO",name:"Ilusão Programada"},Moonbeam:{description:`<p>Um feixe pálido de luz prateada brilha em um cilindro de 1,5 metro de raio e 12 metros de altura [5-foot-radius, 40-foot-high cilinder], centrado em um ponto no alcance da magia. O cilindro é preenchido por meia-luz enquanto a magia durar.</p>
<p>Quando uma criatura entra pela primeira vez ou inicia o próprio turno na área da magia, ela será engolfada em chamas fantasmagóricas que causam dor lancinante, e deve fazer uma salvaguarda de Constituição. Se falhar, sofre 2d10 pontos de dano radiante, ou metade do dano em caso de sucesso.</p>
<p>Um metamorfo faz esta salvaguarda com desvantagem. Se falhar, ele também reverte para própria forma original, permanecendo incapaz de assumir uma forma diferente até sair da luz da magia.</p>
<p>Em cada um de seus turnos após conjurar esta magia, você pode usar uma ação para mover o feixe a até 18 metros [60 ft.] em qualquer direção.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 273",material:"várias sementes de qualquer trepadeira-da-lua e um pedaço de feldspato opalescente",name:"Raio Lunar"},"Mind Blank":{description:"<p>Enquanto a magia durar, uma criatura voluntária que você toque fica imune a dano psíquico, a qualquer efeito capaz de sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e à condição enfeitiçado. A magia pode até mesmo evitar a magia Desejo e magias ou efeitos de poder semelhante usadas para afetar a mente do alvo ou para obter informação sobre ele.</p>",source:"LdJ pg. 253",name:"Limpar a Mente"},"Floating Disk":{description:`<p>Esta magia cria um disco circular horizontal feito de energia com 1 metro de diâmetro e 2,5 centímetros de altura, que flutua a 1 metro [3 ft] do chão em um espaço desocupado à sua escolha, à sua vista e no alcance da magia. O disco permanece enquanto a magia durar, e pode carregar até 225 quilos. Se mais peso for colocado sobre ele, a magia se encerra e tudo oque está no disco cai.</p>
<p>O disco é imóvel enquanto você estiver a até 6 metros [20 ft] dele. Se você se mover para mais de 6 metros [20 ft] de distância dele, o disco segue você, permanecendo a até 6 metros [20 ft] de distância de você. Ele pode atravessar terrenos irregulares, subir ou descer escadas, declives e afins, mas não pode atravessar uma mudança de elevação de 3 metros [10 ft] ou mais. Por exemplo, o disco não pode se mover através de um fosso de 3 metros [10 ft] de profundidade, nem poderia deixar tal fosso se fosse criado no fundo dele.</p>
<p>Se você se mover a mais de 30 metros [100 ft] do disco (geralmente por ele não poder se mover através de um obstáculo para seguir você), a magia se encerra.</p>`,material:"uma gota de mercúrio",name:"Disco Flutuante"},"Find the Path":{description:`<p>Esta magia permite que você encontre a rota física mais curta e direta até uma localidade específica que lhe seja familiar, no mesmo plano de existência. Se você nomear um destino em outro plano, um destino móvel (uma fortaleza móvel) ou uma localidade não específica (como "um covil de um dragão verde" ), a magia falha.</p>
<p>Enquanto a magia durar e você estiver no mesmo plano de existência que seu destino, você sabe quão longe e em qual direção ele está. Enquanto estiver a caminho de lá, toda vez que lhe for apresentada uma escolha de caminhos, você automaticamente sabe determinar qual o mais curto e direto (mas não necessariamente o mais seguro) até o destino.</p>`,source:"LdJ pg. 239",material:"um conjunto de ferramentas divinatórias - como ossos, palitos de marfim, cartas, dentes ou runas esculpidas - no valor mínimo de 100 PO e um objeto da localidade que você deseja encontrar",name:"Encontrar o Caminho"},"Unseen Servant":{description:`<p>Esta magia cria uma força invisível, irracional e amorfa que cumpre tarefas simples dadas por você. O servo surge em um espaço desocupado sobre o solo no alcance da magia. Ele tem CA 10, 1 ponto de vida, Força 2 e não pode atacar. Se ele cair para 0 ponto de vida, a magia se encerra.</p>
<p>Uma vez em cada um dos seus turnos, com uma ação bônus, você pode comandar mentalmente o servo a se mover até 4,5 metros [15 ft.] e interagir com um objeto. O servo pode executar tarefas simples que um servo humano poderia fazer, como buscar coisas, limpar, remendar, dobrar roupas, acender fogo, servir comida e servir vinho. Uma vez dado o comando, o servo faz a tarefa da melhor forma, dentro de suas capacidades, até completá-la e, então, aguarda seu próximo comando.</p>
<p>Se for determinado que o servo faça algo que o moveria além de 18 metros [60 ft.] de distância de você, a magia se encerra.</p>`,source:"LdJ pg. 279",material:"um pedaço de barbante e uma lasca de madeira",name:"Servo Invisível"},"Vicious Mockery":{description:`<p>Você lança uma série de insultos carregados com sutis encantamentos contra uma criatura à sua vista e no alcance da magia. Se o alvo puder ouvir você (embora ele não precise lhe entender), ele deve ser bem-sucedido em uma salvaguarda de Sabedoria. Se falhar, sofre 1d4 pontos de dano psíquico e terá desvantagem na próxima jogada de ataque que ele fizer antes do fim do próximo turno dele.</p>
<p>O dano desta magia aumenta em 1d4 quando você alcança o 5º nível (2d4), o 11º nível (3d4) e o 17º nível (4d4).</p>`,source:"LdJ pg. 289",name:"Zombaria Perversa"},Clairvoyance:{description:`<p>Você cria um sensor invisível em um local que lhe seja familiar (um lugar que visitou ou que já tenha visto) ou em uma localidade óbvia, mas que não lhe seja familiar (como atrás de uma porta, contornando uma esquina ou em um bosque), ambos dentro do alcance da magia. O sensor permanece no local enquanto a magia durar, não podendo ser atacado nem ser alvo de qualquer outro tipo de interação.</p>
<p>Ao conjurar a magia, você escolhe ver ou ouvir. Você pode usar o sentido escolhido por meio do sensor como se estivesse no espaço ocupado por ele. Com uso de uma ação, você pode alternar entre ver e ouvir.</p>
<p>Uma criatura que possa ver o sensor (como aquelas que se beneficiam de Ver o Invisível ou visão verdadeira), enxerga um orbe luminoso e intangível do tamanho de um punho.</p>`,source:"LdJ pg. 224",material:"um foco no valor de pelo menos 100 PO, seja um chifre ornado com gemas e usado para escutar, ou olho de vidro usado para ver",name:"Clarividência"},Maze:{description:`<p>Você bane uma criatura à sua vista e no alcance da magia, para um semiplano labiríntico. O alvo permanece nesse lugar enquanto a magia durar ou até escapar do labirinto.</p>
<p>Ele pode usar uma ação para tentar escapar. Para fazê-lo, é necessário ser bem-sucedido em um teste de Inteligência com CD 20. Em caso de sucesso, ele escapa e a magia se encerra (um minotauro ou demônio goristro têm sucesso automático).</p>
<p>Quando esta magia termina, o alvo reaparece no espaço que estava ou, se esse espaço estiver ocupado, no espaço desocupado mais próximo.</p>`,source:"LdJ pg. 252",name:"Labirinto"},"Ray of Frost":{description:`<p>Um feixe branco-azulado, luminoso e gélido parte na direção de uma criatura no alcance da magia. Faça um ataque mágico à distância contra o alvo. Se acertar, o alvo sofre 1d8 pontos de dano gélido e o deslocamento dele é reduzido em 3 metros [10 ft.] até o começo do seu próximo turno.</p>
<p>O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).</p>`,source:"LdJ pg. 272",name:"Raio de Gelo"},"Giant Insect":{description:`<p>Você transforma até dez centopeias, três aranhas, cinco vespas ou um escorpião no alcance da magia, em versões gigantes de suas formas naturais, enquanto a magia durar. Uma centopeia torna-se uma centopeia gigante, uma aranha, uma aranha gigante, uma vespa, uma vespa gigante e um escorpião, um escorpião gigante.</p>
<p>Cada criatura obedece aos seus comandos verbais e, em combate, age no mesmo turno que você, em cada rodada. O DM fornece as estatísticas para essas criaturas, sendo responsável por resolver ações e movimentos delas.</p>
<p>Uma criatura permanece em tamanho gigante enquanto a magia durar, enquanto não chegar a 0 ponto de vida ou até você usar uma ação para dispensar o efeito sobre ela.</p>
<p>O DM pode permitir que você escolha alvos diferentes dos listados. Se você transformar uma abelha, a versão gigante desta pode ter as mesmas estatísticas de uma vespa gigante, por exemplo.</p>`,source:"LdJ pg. 249",name:"Inseto Gigante"},Commune:{description:`<p>Você entra em contato com sua divindade ou com um representante dela, e faz até três perguntas que podem ser respondidas com sim ou não. É preciso fazer as perguntas antes da magia terminar. Você recebe uma resposta correta para cada pergunta.</p>
<p>Seres divinos não são, necessariamente, oniscientes, então você pode receber "indeterminado" como resposta, caso a pergunta se refira a uma informação que está além do conhecimento da divindade. No caso em que uma única palavra como resposta puder levar a uma interpretação errada ou contrária aos interesses da divindade, o DM pode responder com uma frase curta.</p>
<p>Se você conjurar a magia duas ou mais vezes antes de concluir seu próximo descanso longo, há uma chance cumulativa de 25% para cada conjuração após a primeira de você não obter uma resposta. O DM faz essa jogada em segredo.</p>`,source:"LdJ pg. 225",material:"incenso e um frasco de água benta ou profana",name:"Comunhão"},Passwall:{description:`<p>Uma passagem surge numa superfície de madeira, argamassa ou pedra (como uma parede, teto ou chão) escolhida, à sua vista, no alcance da magia e permanece enquanto esta durar. Você escolhe a dimensão da abertura: até 1,5 metro [5 ft.] de largura, 2,5 metros [8 ft.] de altura e 6 metros [20 ft.] de profundidade. A passagem não cria instabilidade na estrutura ao redor dela.</p>
<p>Ao desaparecer, qualquer criatura ou objeto que estiver dentro da passagem criada pela magia é expelido com segurança para um espaço desocupado na superfície na qual você conjurou a magia.</p>`,source:"LdJ pg. 233",material:"uma pitada de sementes de gergelim",name:"Criar Passagem"},"Conjure Woodland Beings":{description:`<p>Você invoca feéricos, que surgem em espaços desocupados à sua vista,no alcance da magia. Escolha o que aparece entre as opções a seguir:</p>
<ul>
<li>Uma criatura feérica com nível de desafio 2 ou menor;</li>
<li>Duas criaturas feéricas com nível de desafio 1 ou menor;</li>
<li>Quatro criaturas feéricas com nível de desafio 1/2 ou menor;</li>
<li>Oito criaturas feéricas com nível de desafio 1/4 ou menor.</li>
</ul>
<p>Cada criatura invocada desaparece quando cai a 0 ponto de vida ou quando a magia termina.</p>
<p>As criaturas invocadas são amistosas com você e seus companheiros. Jogue a iniciativa para as criaturas invocadas como um grupo, que tem seus próprios turnos. Elas obedecem a qualquer comando verbal que você lhes dê (não requer ação sua). Se você não lhes der comando algum, elas apenas se defendem de criaturas hostis,não executando outras ações. O DM fornece as estatísticas das criaturas.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando espaços de magia de círculos superiores, escolha uma das opções de invocação apresentadas anteriormente, e mais criaturas aparecem: o dobro com um espaço de 6º círculo e o triplo com um espaço de 8º círculo.</p>`,source:"LdJ pg. 251",material:"uma baga de azevinho para cada criatura invocada",name:"Invocar Seres da Floresta"},"Blade Barrier":{description:`<p>Você cria uma barreira vertical de lâminas rodopiantes e afiadas feitas de energia mágica. A barreira aparece dentro do alcance da magia e permanece enquanto a magia durar. Você pode fazer uma barreira reta de até 30 metros [100 ft.] de comprimento, 6 metros [20 ft.] de altura e 1,5 metro [5 ft.] de espessura, ou uma barreira circular de até 18 metros [60 ft.] de diâmetro, 6 metros [20 ft.] de altura e 1,5 metro [5 ft.] de espessura. A barreira fornece três quartos de cobertura para as criaturas atrás dela; o espaço dela é considerado terreno difícil.</p>
<p>Quando uma criatura entra na área da barreira pela primeira vez ou inicia o próprio turno ali, ela deve fazer uma salvaguarda de Destreza. Se falhar, sofre 6d10 pontos de dano cortante, ou metade do dano em caso de sucesso.</p>`,source:"LdJ pg. 219",name:"Barreira de Lâminas"},"Contact Other Plane":{description:`<p>Você estabelece contato mental com um semideus, o espírito de um sábio morto há muito tempo ou alguma outra entidade misteriosa de outro plano. Entrar em contato com essa inteligência extraplanar pode sobrecarregar, ou até mesmo danificar, a sua mente. Ao conjurar esta magia, faça uma salvaguarda de Inteligência com CD 15. Se falhar, sofre 6d6 pontos de dano psíquico e fica insano até terminar um descanso longo. Enquanto estiver insano, você não pode executar ações, não consegue entender o que outras criaturas dizem, não pode ler, e fala apenas inarticuladamente. Uma conjuração da magia restauração maior em você encerra este efeito.</p>
<p>Em caso de sucesso, você pode fazer até 5 perguntas à entidade. Você deve fazer suas perguntas antes da magia terminar. O DM responde cada pergunta com uma palavra, como "sim", "não", "talvez", "nunca", "irrelevante" ou "indeterminado" (quando a entidade não souber a resposta para a pergunta). Se a resposta de uma palavra for dúbia, o DM pode oferecer uma frase curta como resposta.</p>`,source:"LdJ pg. 227",name:"Contato Extraplanar"},"Freedom of Movement":{description:`<p>Você toca uma criatura voluntária. Enquanto a magia durar, o movimento do alvo não é afetado por terreno difícil, e magias e outros efeitos mágicos não podem reduzir o deslocamento, paralisar ou conter o alvo.</p>
<p>O alvo também pode gastar 1,5 metro [5 ft.] de movimento para escapar automaticamente de impedimentos não-mágicos, como algemas ou o agarramento de uma criatura. Por fim, estar debaixo d'água não impõe penalidades ao movimento do alvo ou aos seus ataques.</p>`,source:"LdJ pg. 260",material:"uma cinta de couro amarrada ao redor do braço ou apêndice similar",name:"Movimentação Livre"},"Sleet Storm":{description:`<p>Enquanto a magia durar, uma chuva congelante e granizo caem sobre um cilindro de 6 metros de altura [20-foot tall] com um raio de 12 metros [40-foot radius], centralizado em um ponto à sua escolha e no alcance da magia. A área fica totalmente obscurecida e as chamas expostas (caso existam na área) são extintas.</p>
<p>O solo da área é coberto com gelo liso, tornando-o terreno difícil. Quando uma criatura entra na área da magia pela primeira vez ou inicia o próprio turno ali, ela deve fazer uma salvaguarda de Destreza. Se falhar, ela fica caída.</p>
<p>Se uma criatura começar o próprio turno na área da magia e estiver se concentrando em uma magia, a criatura deve ser bem-sucedida em uma salvaguarda de Constituição contra a sua CD para evitar magia ou perderá a concentração.</p>`,source:"LdJ pg. 262",material:"uma pitada de pó e algumas gotas de água",name:"Nevasca"},Resistance:{description:"<p>Você toca uma criatura voluntária. Uma vez antes da magia terminar, o alvo pode jogar 1d4 e adicionar o número a uma salvaguarda à sua escolha. Ele pode jogar o dado antes ou depois de fazer a salvaguarda. A magia, então, se encerra.</p>",source:"LdJ pg. 277",material:"uma capa em miniatura",name:"Resistência"},"Power Word Kill":{description:"<p>Você profere uma palavra de poder que pode forçar uma criatura à sua vista e no alcance da magia, a morrer instantaneamente. Se o alvo tiver 100 pontos de vida ou menos, ele morre. Caso contrário, a magia não tem efeito.</p>",source:"LdJ pg. 265",name:"Palavra de Poder: Matar"},"Commune with Nature":{description:`<p>Você se torna um com a natureza por um curto período, ganhando conhecimento do território circundante. Ao ar livre, a magia lhe dá informações sobre o terreno num raio de 5 quilômetros [3 miles]. Em cavernas e outros ambientes naturais subterrâneos, o raio é limitado a 90 metros [300 ft.]. A magia não funciona onde a natureza foi substituída por construções, como masmorras, aldeias e cidades.</p>
<p>Você ganha instantaneamente o conhecimento de até três fatos sobre qualquer um dos temas a seguir, à sua escolha, e sobre como eles se relacionam com a área:</p>
</ul>
<li>Terreno e corpos d'água;</li>
<li>Plantas, minerais, animais ou povos predominantes;</li>
<li>Celestiais, elementais, feéricos, ínferos ou mortos-vivos poderosos;</li>
<li>Influência de outros planos de existência;</li>
<li>Construções.</li>
</ul>
<p>Por exemplo, você pode determinar a localização de mortos-vivos poderosos na área, a localização das principais fontes de água potável e a localização de quaisquer aldeias próximas.</p>`,source:"LdJ pg. 225",name:"Comunhão com a Natureza"},"Produce Flame":{description:`<p>Uma chama bruxuleante surge em sua mão. Ela permanece assim enquanto a magia durar e não causa dano a você ou ao seu equipamento. A labareda emite luz plena em um raio de 3 metros [10-foot radius] e meia-luz por mais 3 metros [10 ft.]. A magia termina se você a dispensar com uma ação ou se conjurá-la novamente.</p>
<p>Você também pode atacar com a chama, embora fazê-lo encerre a magia. Ao conjurar a chama, ou com uma ação em um turno posterior, é possível arremessar a labareda em uma criatura a até 9 metros [30 ft.] de você. Faça um ataque mágico à distância. Se acertar, o alvo sofre 1d8 pontos de dano ígneo.</p>
<p>O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).</p>`,source:"LdJ pg. 231",name:"Criar Chamas"},"Dominate Monster":{description:`<p>Você tenta cativar uma criatura à sua vista e no alcance da magia. Ela deve ser bem-sucedida em uma salvaguarda de Sabedoria ou fica enfeitiçada enquanto a magia durar. Se você ou criaturas amigáveis a você estiverem lutando contra a criatura alvo, ela tem vantagem na salvaguarda.</p>
<p>Você possui um elo telepático com a criatura, permanecendo conectados enquanto ela estiver enfeitiçada e ambos estejam no mesmo plano de existência. Você pode usar este elo telepático para enviar comandos para a criatura, enquanto você estiver consciente (nenhuma ação é necessá­ria) e ela faz o possível para obedecer. Pode ser especificado um curso de ação genérico e simples, como "Ataque aquela criatura", "Corra para cá" ou "Pegue aquele objeto". Se a criatura completar a ordem e não receber novas instruções suas, ela se defende e se preserva o melhor que puder.</p>
<p>Você pode usar sua ação para assumir controle total e preciso do alvo. Até o fim do seu turno, a criatura executa apenas as ações que você escolher e não faz nada que você não permita. Durante esse tempo, você também pode fazer com que a criatura use a reação dela, mas isso requer que você use sua reação também.</p>
<p>Toda vez que o alvo sofrer dano, ele deve fazer uma nova salvaguarda de Sabedoria contra CD para evitar a sua magia. Em caso de sucesso, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia com um espaço de magia de 9º círculo, a duração será de concentração, até 8 horas.</p>`,source:"LdJ pg. 238",name:"Dominar Monstro"},"Prismatic Spray":{description:`<p>Oito raios de luz multicoloridos saem da sua mão. Cada raio possui uma cor única, com poder e propósito diferente. Cada criatura em um cone de 18 metros [60 ft.] deve fazer uma salvaguarda de Destreza. Para cada alvo, jogue 1d8 para determinar que raio a afeta.</p>
<ol>
<li><strong>1. Vermelho</strong>. Se falhar, o alvo sofre 10d6 pontos de dano ígneo, ou metade do dano em caso de sucesso.</li>
<li><strong>2. Laranja</strong>. Se falhar, o alvo sofre 10d6 pontos de dano ácido, ou metade do dano em caso de sucesso.</li>
<li><strong>3. Amarelo</strong>. Se falhar, o alvo sofre 10d6 pontos de dano elétrico, ou metade do dano em caso de sucesso.</li>
<li><strong>4. Verde</strong>. Se falhar, o alvo sofre 10d6 pontos de dano venenoso, ou metade do dano em caso de sucesso.</li>
<li><strong>5. Azul</strong>. Se falhar, o alvo sofre 10d6 pontos de dano gélido, ou metade do dano em caso de sucesso.</li>
<li><strong>6. Índigo</strong>. Se falhar, o alvo está contido. Ele deve, então, fazer uma salvaguarda de Constituição ao final de cada um de seus turnos. Com três sucessos, a magia se encerra. Se falhar três vezes, ele é transformado permanentemente em pedra e se sujeita à condição de petrificado. Os sucessos e falhas não precisam ser consecutivos; mantenha registro de ambos até que o alvo tenha três de um tipo.</li>
<li><strong>7. Violeta</strong>. Se falhar, o alvo está cego. Ela deve, então, fazer uma salvaguarda de Sabedoria no começo de seu próximo turno. Um sucesso encerra a cegueira. Se falhar, a criatura é transportada para outro plano de existência à escolha do DM e não está mais cega (normalmente, uma criatura que está em um plano que não é o seu plano natural é banida para casa, enquanto outras criaturas são geralmente lançadas nos Planos Astral ou Etéreo).</li>
<li><strong>8. Especial</strong>. O alvo é atingido por dois raios. Jogue mais duas vezes, jogando novamente quaisquer 8.</li>
</ol>`,source:"LdJ pg. 273",name:"Rajada Prismática"},"Project Image":{description:`<p>Você cria uma cópia ilusória de si mesmo, que permanece enquanto a magia durar. A cópia pode aparecer em qualquer local que você já tenha visto dentro do alcance da magia, independentemente da interposição de obstáculos. A ilusão se parece e soa como você, mas é intangível. Se a ilusão sofrer qualquer dano, ela desaparece e a magia se encerra.</p>
<p>Você pode usar uma ação para mover a ilusão a até duas vezes o seu deslocamento e fazê-la gesticular, falar e se comportar da maneira que você escolher. Ela imita seus maneirismos perfeitamente.</p>
<p>Você pode ver através dos olhos e ouvir através dos ouvidos de sua cópia como se estivesse no espaço ocupado por ela. No seu turno, com uma ação bônus, você pode parar de usar os sentidos da cópia para usar os seus, ou voltar para os dela novamente. Enquanto estiver usando os sentidos de sua cópia, você estará cego e surdo em relação aos seus arredores.</p>
<p>Interação física com a cópia revela que ela é uma ilusão, pois coisas podem passar através dela. Se uma criatura usar uma ação para examinar a imagem, ela pode determinar que se trata de uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra a CD para evitar sua magia. Se a criatura discernir a ilusão pelo que realmente é, poderá ver através da imagem, e qualquer som que a ilusão faça se torna abafado para a criatura.</p> `,source:"LdJ pg. 270",material:"uma pequena réplica de você feita com materiais com valor mínimo de 5 PO",name:"Projetar Imagem"},"Charm Person":{description:`<p>Você tenta enfeitiçar um humanoide à sua vista e dentro do alcance da magia. O alvo deve fazer uma salvaguarda de Sabedoria - com vantagem caso você ou seus companheiros estejam lutando contra ele. Se falhar, ele fica enfeitiçado por você enquanto a magia durar ou até que você ou seus companheiros lhe causem dano. A criatura enfeitiçada considera você como um conhecido amigável. Quando a magia termina, a criatura sabe que foi enfeitiçada por você.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode enfeitiçar uma criatura adicional para cada círculo do espaço acima do 1º. As criaturas devem estar a até 9 metros [30 ft.] umas das outras quando você as escolher como alvo.</p>`,source:"LdJ pg. 240",name:"Enfeitiçar Pessoa"},"Call Lightning":{description:`<p>Uma nuvem de tempestade aparece na forma de um cilindro de 3 metros de altura [10 ft. tall cilinder] com um raio de 18 metros [60 ft. radius], centralizado em um ponto à sua vista, dentro do alcance diretamente acima de você. A magia falha se você não puder ver um ponto no ar onde a nuvem de tempestade possa aparecer (por exemplo, se você estiver em uma sala que não possa acomodar a nuvem).</p>
<p>Ao conjurar a magia, escolha um ponto que você possa ver sob a nuvem. Um raio de eletricidade parte da nuvem até esse ponto. Cada criatura a uma distância de até 1,5 metro [5 ft.] desse ponto deve fazer uma salvaguarda de Destreza. Se falhar, sofre 3d10 pontos de dano elétrico, ou metade do dano em caso de sucesso. Em cada um de seus turnos, enquanto a magia durar, você pode usar sua ação para convocar relâmpagos dessa maneira, atingindo o mesmo ponto ou outro.</p>
<p>Se você estiver ao ar livre e em condições tempestuosas ao conjurar esta magia, ela lhe confere o controle sobre a tempestade existente, em vez de criar uma nova. Sob essas condições, o dano da magia aumenta em 1d10.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 229",name:"Convocar Relâmpagos"},"Magic Jar":{description:`<p>Seu corpo cai em estado catatônico enquanto sua alma sai dele e entra no receptáculo que você usou como componente material da magia. Enquanto sua alma habitar o receptáculo, você percebe seus arredores como se estivesse no lugar do receptáculo. Você não pode se mover ou usar reações. A única ação que você pode executar é projetar a sua alma a até 30 metros [100 ft.] do receptáculo, seja retornando para o seu corpo vivo (e encerrando a magia) ou tentando possuir um corpo humanoide.</p>
<p>Você pode tentar possuir qualquer criatura humanoide a até 30 metros [100 ft.] do seu alcance e que esteja à sua vista (criaturas protegidas pela magia Proteção Contra o Bem e o Mal ou Círculo Mágico não podem ser possuídas). O alvo deve fazer uma salvaguarda de Carisma. Se falhar,sua alma projeta-se do receptáculo para dentro do corpo do alvo, expulsando a alma dele, que agora ficará aprisionada no receptáculo. Em caso de sucesso, o alvo resiste aos seus esforços para possuí-lo, e você não pode tentar fazê-lo novamente por 24 horas.</p>
<p>Uma vez que possua o corpo de uma criatura, você o controla. Suas estatísticas de jogo são substituídas pelas da criatura, apesar de você manter seu alinhamento e seus valores de Inteligência, Sabedoria e Carisma. Você também mantém os benefícios das suas próprias características de classe. Se o alvo tiver níveis de classe, você não pode usar nenhuma das características de classe dele.</p>
<p>Enquanto isso, a alma da criatura possuída pode perceber os arredores, a partir do receptáculo, usando seus próprios sentidos, mas não pode se mover ou executar ações.</p>
<p>Enquanto estiver possuindo um corpo, você pode usar uma das suas ações para retornar do corpo do hospedeiro para o receptáculo, se este estiver a até 30 metros [100 ft.] de distância, devolvendo a alma do hospedeiro para o corpo dele. Se o corpo do hospedeiro morrer enquanto você estiver nele, a criatura morre e você deve fazer uma salvaguarda de Carisma contra a CD do seu próprio atributo de conjuração. Em caso de sucesso e o receptáculo estiver a até 30 metros [100 ft.] de distância, sua alma retorna a ele. Caso contrário, você morre.</p>
<p>Se o receptáculo for destruído ou a magia terminar, sua alma retorna imediatamente para seu próprio corpo. Se o seu corpo estiver a mais de 30 metros [100 ft.] de você ou se ele estiver morto quando sua alma tentar retornar para ele, você morre. Se a alma de outra criatura estiver no receptáculo quando ele for destruído, ela retorna para o próprio corpo se ele estiver vivo e a até 30 metros [100 ft.] de distância. Caso contrário, a criatura morre.</p>
<p>Quando a magia termina, o receptáculo é destruído.</p>`,source:"LdJ pg. 275",material:"uma gema, cristal, relicário ou outro recipiente ornamental no valor mínimo de 500 PO",name:"Receptáculo Arcano"},Grease:{description:`<p>Uma graxa escorregadia recobre uma área de 3 metros quadrados [10-foot square] de chão em um ponto dentro do alcance da magia, tornando-a terreno difícil enquanto esta durar.</p>
<p>Quando a graxa aparece, cada criatura parada na área precisa ser bem-sucedida em uma salvaguarda de Destreza ou é considerada caída. Uma criatura que entre ou termine seu próprio turno na área também precisa ser bem-sucedida em uma salvaguarda de Destreza, ou fica caída.</p>`,source:"LdJ pg. 246",material:"um pouco de torresmo ou manteiga",name:"Graxa"},"Wind Wall":{description:`<p>Uma muralha de ventos fortes surge do chão em um ponto à sua escolha, no alcance da magia e permanece enquanto a magia durar. Ela pode ter até 15 metros [50 ft.] de comprimento, 4,5 metros [15 ft.] de altura e 30 centímetros [1 foot] de espessura. Você pode moldá-la à sua escolha, desde que ela percorra um caminho contínuo no chão.</p>
        <p>Quando a muralha surge, cada criatura dentro da área deve fazer uma salvaguarda de Força. Se falhar, sofre 3d8 pontos de dano contundente, ou metade do dano em caso de sucesso.</p>
        <p>O vento forte mantém névoa, fumaça e outros gases à distância. Objetos e criaturas voadoras Pequenas ou menores não conseguem atravessar a muralha. Materiais leves e soltos, trazidos para dentro da muralha, voam para cima. Flechas, virotes e outros projéteis comuns, disparados contra alvos atrás da muralha, são defletidos para cima e erram automaticamente (pedras arremessadas por gigantes, máquinas de sítio ou projéteis similares não são afetados). Criaturas em forma gasosa não conseguem passar através da muralha.</p>`,source:"LdJ pg. 261",material:"um minúsculo leque e uma pluma de origem exótica",name:"Muralha de Vento"},"Mirage Arcane":{description:`<p>Você faz o terreno em uma área de até 1,5 quilômetro quadrado parecer, soar, cheirar e até passar a sensação de que é outro tipo de terreno. O formato geral do terreno, entretanto, se mantém. Campos abertos ou uma estrada podem ser modificados para se parecerem com um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado verdejante, um precipício com um suave declive ou um barranco pedregoso com uma estrada larga e plana.</p>
<p>Da mesma forma, você pode alterar a aparência das estruturas ou adicioná-las onde nenhuma está presente. A magia não disfarça, oculta ou adiciona criaturas.</p>
<p>A ilusão inclui elementos audíveis, visuais, táteis e olfativos, de modo que pode tornar terreno limpo em terreno difícil (ou vice versa) ou, de outra forma, impedir movimento através da área. Qualquer pedaço do terreno ilusório (como uma rocha ou galho) que seja removido da área da magia desaparece imediatamente.</p>
<p>Criaturas com visão verdadeira podem ver através da ilusão, enxergando a forma real do terreno; porém, todos os outros elementos visuais se mantém, de modo que, mesmo ciente da presença da ilusão, ela ainda pode interagir fisicamente com seus efeitos.</p>`,source:"LdJ pg. 258",name:"Miragem Arcana"},Scrying:{description:`<p>Você pode ver e escutar uma determinada criatura à sua escolha que esteja no mesmo plano de existência. O alvo deve fazer uma salvaguarda de Sabedoria, modificada por quão bem você o conhece e pelo tipo de conexão física com ele. Se um alvo souber que você está conjurando esta magia, ele pode abrir mão da salvaguarda voluntariamente se ele quiser ser observado.</p>
<table border="1">
<tbody>
<tr>
<td><span style="text-decoration: underline;"><strong>Conhecimento</strong></span></td>
<td><span style="text-decoration: underline;"><strong>Modificador de Salvaguarda</strong></span></td>
</tr>
<tr>
<td>Segunda mão (ouviu falar do alvo)</td>
<td>+5</td>
</tr>
<tr>
<td>Primeira mão (você conhece o alvo)</td>
<td>+0</td>
</tr>
<tr>
<td>Familiar (você conhece bem o alvo)</td>
<td>-5</td>
</tr>
</tbody>
</table>
<p> </p>
<table style="height: 84px;" border="1">
<tbody>
<tr style="height: 21px;">
<td style="height: 21px; width: 228px;"><span style="text-decoration: underline;"><strong>Conexão</strong></span></td>
<td style="height: 21px; width: 229px;"><span style="text-decoration: underline;"><strong>Modificador de Salvaguarda</strong></span></td>
</tr>
<tr style="height: 21px;">
<td style="height: 21px; width: 228px;">Semelhança ou imagem</td>
<td style="height: 21px; width: 229px;">-2</td>
</tr>
<tr style="height: 21px;">
<td style="height: 21px; width: 228px;">Posse ou vestimenta</td>
<td style="height: 21px; width: 229px;">-4</td>
</tr>
<tr style="height: 21px;">
<td style="height: 21px; width: 228px;">Parte do corpo, cacho de cabelo, lasca de unha ou coisa do tipo</td>
<td style="height: 21px; width: 229px;">-10</td>
</tr>
</tbody>
</table>
<p>Em caso de sucesso, o alvo não é afetado e você não pode usar esta magia contra ele novamente por 24 horas.</p>
<p>Se falhar, a magia cria um sensor invisível no alcance de 3 metros [10 ft.] do alvo. Você pode ver e ouvir através do sensor, como se estivesse no local. O sensor move-se com o alvo, ficando a 3 metros [10 ft.] dele enquanto a magia durar. Uma criatura que possa ver objetos invisíveis, pode ver o sensor como um orbe luminoso do tamanho de um punho.</p>
<p>Em vez de focar em uma criatura, você pode escolher uma localidade que tenha visto antes como alvo desta magia. Quando o fizer, o sensor aparece na localidade e não se move.</p>`,source:"LdJ pg. 288",material:"um foco no valor mínimo de 1.000 PO, como uma bola de cristal, um espelho de prata ou um recipiente preenchido com água benta",name:"Vidência"},"Planar Ally":{description:`<p>Você suplica a uma entidade extraplanar por ajuda. Você precisa conhecer a entidade, que pode ser: uma divindade, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. A entidade envia um celestial, um elemental ou um ínfero leal a ela para ajudá-lo, fazendo com que a criatura apareça em um espaço desocupado no alcance da magia. Se souber o nome de uma criatura específica, você pode dizer esse nome ao conjurar esta magia, solicitando por essa criatura em particular, embora outra criatura ainda possa ser enviada (à escolha do DM).</p>
<p>Ao aparecer, a criatura enviada não se encontra obrigada a comportar-se de uma forma específica. Você pode pedir para a criatura executar um serviço em troca de pagamento, mas ela não é obrigada a fazê-lo. A tarefa requisitada pode variar, desde coisas simples ("carregue-nos através do abismo" ou "lute conosco em uma batalha") até as mais complexas ("espione nossos inimigos" ou "proteja-nos durante a nossa incursão na masmorra"). Você deve ser capaz de comunicar-se com a criatura para negociar pelos serviços dela.</p>
<p>O pagamento é variável. Um celestial pode exigir uma doação considerável de ouro ou itens mágicos para um templo aliado, enquanto um demônio pode exigir o sacrifício de uma vida ou presentes na forma de tesouros. Algumas criaturas podem trocar o serviço delas por uma missão a ser realizada por você.</p>
<p>Como regra geral, uma tarefa que possa ser medida em minutos requer um pagamento estimado em 100 PO por minuto. Uma tarefa medida em horas requer 1.000 PO por hora. E uma tarefa medida em dias (até 10) requer 10.000 PO por dia. O DM pode ajustar estes pagamentos baseados nas circunstâncias sob as quais você conjura a magia. Se a tarefa estiver em concordância com o alinhamento da criatura, o pagamento pode ser reduzido pela metade ou mesmo desnecessário. Tarefas inofensivas normalmente exigem apenas metade do pagamento sugerido, enquanto tarefas especialmente perigosas podem exigir um presente maior. Criaturas raramente aceitam tarefas que pareçam suicidas.</p>
<p>Após concluir a tarefa ou quando a duração do serviço combinado expirar, a criatura se reportará a você - caso seja apropriado e possível em relação à tarefa -, retornando, então, para o plano de origem dela. Se você for incapaz de chegar a um acordo sobre o valor do serviço, a criatura retorna imediatamente para o plano de origem dela.</p>
<p>Uma criatura alistada junta-se ao seu grupo, contando como um membro e recebendo uma parte dos pontos de experiência ganhos.</p>`,source:"LdJ pg. 212",name:"Aliado Extraplanar"},"Wall of Ice":{description:`<p>Você cria uma muralha de gelo sobre uma superfície sólida no alcance da magia. Você pode moldá-la no formato de um domo hemisférico ou de esfera com até 3 metros [10 ft.] de raio, ou formar uma superfície plana composta por dez painéis de 3 metros [10 ft.] de lado. Cada painel precisa ser contíguo ao outro. Seja qual for o formato assumido, a muralha possui 30 centímetros [1 foot] de espessura e permanece enquanto a magia durar.</p>
<p>Ao surgir, se muralha passar por um espaço ocupado por uma criatura, esta última é empurrada para um dos lados da muralha e precisa fazer uma salvaguarda de Destreza. Se falhar, sofre 10d6 pontos de dano gélido, ou metade em caso de sucesso.</p>
<p>A muralha é um objeto de gelo que pode ser danificado e, portanto, rompido. Sua CA é 12, tem 30 pontos de vida para cada painel de 3 metros [10 ft.] e é vulnerável a dano ígneo. Reduzir uma seção da muralha para 0 pontos de vida a destrói, deixando no lugar uma fina camada de ar gélido. Uma criatura passando pela camada de ar gélido pela primeira vez no próprio turno deve fazer uma salvaguarda de Constituição. Se falhar, sofre 5d6 pontos de dano gélido, ou metade em caso de sucesso.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando espaço de magia de 7º círculo ou superior, o dano que a muralha causa quando aparece aumenta em 2d6, e o dano ao se passar pela camada de ar gélido aumenta em 1d6 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 261",material:"um pequeno pedaço de quartzo",name:"Muralha de Gelo"},"Poison Spray":{description:`<p>Você estende a sua mão, projetando um sopro de gás nocivo da sua palma, que segue em direção a uma criatura à sua vista e no alcance da magia. A criatura deve ser bem-sucedida em uma salvaguarda de Constituição ou sofre 1d12 pontos de dano venenoso.</p>
<p>O dano desta magia aumenta em 1d12 quando você alcança o 5º nível (2d12), o 11º nível (3d12) e o 17º nível (4d12).</p>`,source:"LdJ pg. 273",name:"Rajada de Veneno"},Entangle:{description:`<p>Ervas daninhas e vinhas aderentes brotam do chão em um quadrado de 6 metros de lado [20-foot square] a partir de um ponto no alcance da magia. Enquanto a magia durar, as plantas transformam o solo da área em terreno difícil.</p>
<p>Qualquer criatura na área, que não for bem-sucedida em uma salvaguarda de Força, fica contida pelas plantas constritoras enquanto a magia durar. Uma criatura contida pelas plantas pode usar uma ação para fazer um teste de Força contra a CD para evitar sua magia. Em caso de sucesso, ela se liberta.</p>
<p>Quando a magia termina, as plantas invocadas murcham.</p>`,source:"LdJ pg. 239",name:"Emaranhar"},"Locate Creature":{description:"<p>Descreva ou nomeie uma criatura que lhe seja familiar. Você sente a direção do local onde ela se encontra, caso esteja a, no máximo, 300 metros [1000 ft.] de distância. Se a criatura estiver se movendo, você sabe em que direção.</p><p>Esta magia pode localizar uma criatura específica que você conheça, ou a criatura mais próxima de um tipo específico (como um humano ou unicórnio), contanto que você já tenha visto tal criatura de perto - a até 9 metros [30 ft.] - ao menos uma vez. Se a criatura que você descreveu ou nomeou está com uma forma diferente, como sob o efeito da magia Polimorfia, esta magia não a localiza.</p><p>Esta magia também não pode localizar uma criatura se água corrente, com pelo menos 3 metros [10 ft.] de largura, bloquear o caminho direto entre você e ela.</p>",source:"LdJ pg. 253",material:"um pouco de pelo de um cão de caça",name:"Localizar Criatura"},Heroism:{description:`<p>Você toca uma criatura voluntária que torna-se imbuída de bravura. Enquanto a magia durar, o alvo está imune a ser amedrontado e ganha uma quantidade de pontos de vida temporários igual ao seu modificador do atributo de conjuração, no início de cada um dos turnos dela. Quando a magia terminar, o alvo perde quaisquer pontos de vida temporários remanescentes derivados desta magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando um espaço de magia de 2º círculo ou superior, você pode escolher uma criatura adicional como alvo para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 248",name:"Heroísmo"},"Detect Magic":{description:"<p>Enquanto a magia durar, você pode sentir a presença de energia mágica a até 9 metros [30 ft.]. Caso seja bem-sucedido ao fazê-lo, você pode usar sua ação para ver uma tênue aura ao redor de qualquer criatura ou objeto que possuam energia mágica e que estejam visíveis na área, distinguindo, inclusive, a escola da magia, caso ela pertença a alguma.</p><p>A magia pode atravessar a maioria das barreiras, sendo bloqueada, no entanto, por 30 centímetros [1 foot] de pedra, 2,5 centímetros [1 inch] de metal comum, uma folha fina de chumbo ou 1 metro [3 ft.] de madeira ou terra.</p>",source:"LdJ pg. 236",name:"Detectar Magia"},Tongues:{description:"<p>A magia concede à uma criatura que você toque a habilidade de compreender e falar qualquer idioma que ela escute. Além disso, quando o alvo falar, qualquer criatura que conheça ao menos um idioma e conseguir ouvir o alvo, compreende o que ele diz.</p> ",source:"LdJ pg. 253",material:"um pequeno modelo em argila de um zigurate",name:"Línguas"},Sanctuary:{description:`<p>Você protege uma criatura que esteja dentro do alcance da magia contra ataques. Enquanto a magia durar, qualquer criatura que tenha a criatura protegida como alvo de um ataque ou de uma magia prejudicial deve antes fazer uma salvaguarda de Sabedoria. Se falhar, o atacante deve escolher outro alvo ou perderá o ataque ou magia. Esta magia não garante ao alvo proteção contra efeitos de área, como a explosão de uma bola de fogo.</p>
<p>Se o alvo protegido fizer um ataque ou conjurar uma magia que afete uma criatura inimiga, a magia se encerra.</p>`,source:"LdJ pg. 279",material:"um pequeno espelho de prata",name:"Santuário"},Clone:{description:"<p>Esta magia cria uma duplicata inerte de uma criatura viva, a título de garantia contra a morte. Esse clone forma-se dentro de um receptáculo selado, crescendo e amadurecendo completamente após 120 dias; também existe a opção de o clone ser a versão mais jovem da mesma criatura. Ele se mantém inerte e dura indefinidamente, contanto que o receptáculo não seja perturbado.</p><p>A qualquer momento após o clone amadurecer, se a criatura original morrer, a alma dela é transferida para o clone, considerando que a alma seja livre e disposta a retornar. O clone é fisicamente idêntico ao original, tendo a mesma personalidade, memórias e habilidades, mas nenhum dos equipamentos da forma original. Os restos mortais da criatura original permanecem, se ainda existirem, ficam inertes e não podem ter a vida restaurada, já que a alma da criatura está em outro receptáculo.</p>",source:"LdJ pg. 224",material:"dia, como uma grande urna, caixão, cisto cheio de lama no chão ou um receptáculo de cristal preenchido com água salgada",name:"Clone"},"Animal Friendship":{description:`<p>Esta magia permite que você convença uma fera de que não pretende causar-lhe mal. Escolha uma fera à sua vista, no alcance da magia. Ela deve ser capaz de vê-lo e ouvi-lo. Se a Inteligência da fera for 4 ou maior, a magia falha. Caso contrário, a fera deve ser bem-sucedida em uma salvaguarda de Sabedoria ou fica enfeitiçada por você enquanto a magia durar. Se você ou qualquer um de seus companheiros causar dano ao alvo, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, você pode afetar uma fera adicional para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 213",material:"um punhado de comida",name:"Amizade Animal"},Darkvision:{description:"<p>Ao tocar uma criatura voluntária você lhe concede a capacidade de enxergar no escuro. O alvo ganha visão no escuro com alcance de até 18 metros [60 ft.] enquanto a magia durar.</p>",source:"LdJ pg. 289",material:"uma pitada de cenoura seca ou uma ágata",name:"Visão no Escuro"},Feeblemind:{description:`<p>Você assola a mente de uma criatura à sua vista e no alcance da magia, tentando despedaçar o intelecto e a personalidade dela. O alvo sofre 4d6 pontos de dano psíquico e deve fazer uma salvaguarda de Inteligência.</p>
<p>Se falhar, o valor da Inteligência e do Carisma da criatura passa a ser 1. A criatura não pode conjurar magias, ativar itens mágicos, compreender idiomas ou se comunicar de forma inteligível. Ela pode identificar seus próprios amigos, segui-los e até protegê-los.</p>
<p>Ao final de um período de 30 dias, a criatura pode repetir a salvaguarda contra a magia. Em caso de sucesso, a magia se encerra.</p>
<p>Ela também pode ser anulada por Restauração Maior, Cura Completa ou Desejo.</p>`,source:"LdJ pg. 240",material:"um punhado de argila, cristal, vidro ou esferas minerais",name:"Enfraquecer Intelecto"},Sunburst:{description:`<p>Luz solar brilhante lampeja em um raio de 18 metros [60 ft.], centrada em um ponto à sua escolha e no alcance da magia. Cada criatura dentro da área da luz deve fazer uma salvaguarda de Constituição. Se falhar, sofre 12d6 pontos de dano radiante e fica cega durante 1 minuto. Em caso de sucesso, ela sofre metade do dano e não fica cega por esta magia. Mortos-vivos e gosmas têm desvantagem nesta salvaguarda.</p>
<p>Uma criatura cega por esta magia deve fazer outra salvaguarda de Constituição ao final de cada um dos próprios turnos. Em caso de sucesso, ela não estará mais cega.</p>
<p>Esta magia desfaz qualquer escuridão na área de efeito, mesmo a que for criada por uma magia.</p>`,source:"LdJ pg. 242",material:"fogo e um pedaço de pedra-do-sol",name:"Explosão Solar"},Message:{description:`<p>Você aponta seu dedo para uma criatura no alcance da magia e sussurra uma mensagem. O alvo (e somente ele) ouve a sua mensagem e pode responder ao sussurrar uma réplica que apenas você será capaz de ouvir.</p>
<p>Você pode conjurar esta magia através de objetos sólidos se for familiar com o alvo e souber que ele está atrás da barreira. Silêncio mágico, 30 centímetros [1 foot] de pedra, 3 centímetros [1 inch] de metal comum, uma folha fina de chumbo ou 90 centímetros [3 ft.] de madeira bloqueia a magia. A magia não precisa seguir uma linha reta, podendo viajar livremente ao redor de cantos ou através de aberturas.</p>`,material:"um pequeno pedaço de fio de cobre",name:"Mensagem"},"Protection from Energy":{description:"<p>Você toca uma criatura voluntária. Enquanto a magia durar, o alvo passa a ter resistência a um tipo de dano à sua escolha: ácido, elétrico, ígneo, gélido ou trovejante.</p>",source:"LdJ pg. 271",name:"Proteção Contra Energia"},"Holy Aura":{description:"<p>Uma luz divina emana de você e se manifesta em um brilho suave por um raio de 9 metros [30 ft.] ao seu redor. Criaturas dentro do raio e à sua escolha emitem meia-luz em um raio de 1,5 metro [5 ft.] e têm vantagem em todas as salvaguardas, as demais criaturas têm desvantagem em jogadas de ataque contra as primeiras enquanto a magia durar. Além disso, quando um ínfero ou um morto-vivo atinge uma criatura afetada por esta magia com um ataque corpo a corpo, a aura cintila com uma luz brilhante. O atacante deve ser bem-sucedido em uma salvaguarda de Constituição ou fica cego enquanto a magia durar.</p>",source:"LdJ pg. 218",material:"um pequeno relicário no valor de pelo menos 1.000 PO, contendo uma relíquia sagrada, como um pedaço de tecido do manto de um santo ou um pedaço de pergaminho de um texto religioso",name:"Aura Sagrada"},"Shield of Faith":{description:"<p>Um campo luminoso surge ao redor de uma criatura à sua escolha e no alcance da magia. A criatura ganha um bônus de +2 à CA enquanto esta magia durar.</p>",source:"LdJ pg. 241",material:"um pequeno pergaminho contendo um fragmento de texto sagrado",name:"Escudo da Fé"},Simulacrum:{description:`<p>Você cria uma duplicata ilusória de uma fera ou de um humanoide que esteja no alcance da magia todo o tempo da conjuração. A duplicata é uma criatura parcialmente real, formada de gelo ou neve, que pode fazer ações e também ser afetada como um ser normal. Ela parece ser idêntica à original, mas tem apenas metade dos pontos de vida máximos da criatura original e é formada sem nenhum equipamento. Além disso, a duplicata usa todas as estatísticas da criatura original, exceto pelo fato de que a duplicata é um constructo.</p>
<p>O simulacro é amigável a você e a quem você designar. Ele obedece seus comandos falados, movendo-se e atuando de acordo com seus desejos, agindo durante o seu turno no combate. O simulacro não tem a habilidade de aprender ou de se tornar mais poderoso, logo nunca eleva seu nível ou outras habilidades, nem pode recuperar espaços de magia perdidos.</p>
<p>Se for danificado, você pode repará-lo em um laboratório alquímico, usando ervas raras e minerais no valor de 100 PO por cada ponto de vida a ser restabelecido. Ele durará até cair a 0 pontos de vida, momento no qual voltará a ser neve e derreterá instantaneamente.</p>
<p>Se esta magia for conjurada novamente, qualquer duplicata atualmente ativa criada por você é imediatamente destruída.</p>`,source:"LdJ pg. 281",material:"neve ou gelo suficientes para criar uma cópia de tamanho idêntico ao da criatura duplicada; algum cabelo, lascas de unhas e outra parte do corpo da criatura, que são colocados dentro da neve ou gelo, e rubi em pó no valor mínimo de 1.500 PO salpicado sobre a duplicata, que a magia consome",name:"Simulacro"},Resurrection:{description:"<p>Você toca uma criatura, morta há não mais de um século, que não tenha morrido de causas naturais e que não seja um morto-vivo. Se a alma dela estiver livre e disposta, a criatura retorna à vida com todos os pontos de vida.</p><p>A magia neutraliza quaisquer venenos e cura doenças normais que afligiam a criatura quando morreu. Entretanto, ela não remove maldições, doenças mágicas ou coisas do gênero; se esses efeitos não forem removidos antes da conjuração da magia, eles voltam a afligir o alvo após o seu retomo à vida.</p><p>A magia fecha todas as lesões fatais e restaura quaisquer partes corpóreas perdidas.</p><p>Voltar à vida após a morte é uma provação. O alvo sofre -4 de penalidade em todas as jogadas de ataque, salvaguardas e testes de atributo. Toda vez que o alvo completa um descanso longo, a penalidade é reduzida em 1, até desaparecer completamente.</p><p>Conjurar esta magia para restaurar vida a um indivíduo que esteja morto por um ano ou mais é algo extenuante para o conjurador. Até terminar um descanso longo, é impossível conjurar magias novamente e também todas as jogadas de ataque, testes de atributo e salvaguardas possuem desvantagem.</p>",source:"LdJ pg. 277",material:"um diamante no valor mínimo de 1.000 PO, que a magia consome",name:"Ressurreição"},"Prismatic Wall":{description:`<p>Uma superfície cintilante e multicolorida de luz forma uma muralha vertical e opaca de até 27 metros [90 ft.] de comprimento, 9 metros [30 ft.] de altura e 2,5 centímetros [1 inch] de espessura, centrada em um ponto à sua vista, no alcance da magia. Se preferir, você pode moldar a muralha em uma esfera de até 30 metros [100 ft.] de diâmetro, centrada em um ponto à sua escolha, no alcance da magia. A muralha permanece no lugar pela duração da magia. Se você posicionar a muralha de modo que esta passe por um espaço ocupado por uma criatura, a magia falha, e sua ação e o espaço de magia são perdidos.</p>
<p>A muralha emite luz plena por 30 metros [100 ft.] e meia-luz por mais 30 metros [100 ft.]. Você e as criaturas designadas no momento da conjuração podem passar pela muralha e ficar próximas a esta, sem sofrer dano. Se outra criatura que pode ver a muralha se mover a até 6 metros [20 ft.] dela ou começar o turno lá, precisa ser bem-sucedida em uma salvaguarda de Constituição ou fica cega durante 1 minuto.</p>
<p>A muralha tem sete camadas, cada uma de uma cor diferente. Quando uma criatura tenta tocá-la ou passar por ela, o fará uma camada por vez. À cada camada (cor), a criatura precisa fazer uma salvaguarda de Destreza ou será afetada pelas propriedades daquela camada, conforme descrito adiante.</p>
<p>A muralha pode ser destruída, uma camada por vez, na ordem do vermelho para o violeta e de um modo específico para cada uma das camadas. Uma vez que uma camada é destruída, permanece desse modo pela duração da magia. Campo Antimagia não tem efeito sobre a muralha, e Dissipar Magia afeta apenas a camada violeta.</p>
<ol>
<li><strong>1. Vermelho</strong>. Se falhar, a criatura sofre 10d6 pontos de dano ígneo, ou metade do dano em caso de sucesso. Enquanto esta camada estiver ativa, ataques à distância não-mágicos não podem atravessar a muralha. Esta camada é destruída caso sofra ao menos 25 pontos de dano gélido.</li>
<li><strong>2. Laranja</strong>. Se falhar, a criatura sofre 10d6 pontos de dano ácido, ou metade do dano em caso de sucesso. Enquanto esta camada estiver ativa, ataques mágicos à distância não podem atravessar a muralha. Esta camada pode ser destruída por um vento forte.</li>
<li><strong>3. Amarelo</strong>. Se falhar, a criatura sofre 10d6 pontos de dano elétrico, ou metade do dano em caso de sucesso. Esta camada é destruída caso sofra ao menos 60 pontos de dano energético.</li>
<li><strong>4. Verde</strong>. Se falhar, a criatura sofre 10d6 pontos de dano venenoso, ou metade do dano em caso de sucesso. Uma magia Criar Passagem ou outra magia de mesmo círculo ou superior que puder abrir uma porta em uma superfície sólida, destrói esta camada.</li>
<li><strong>5. Azul</strong>. Se falhar, a criatura sofre 10d6 pontos de dano gélido, ou metade do dano em caso de sucesso. Esta camada é destruída caso sofra ao menos 25 pontos de dano ígneo.</li>
<li><strong>6. Anil</strong>. Se falhar, a criatura é contida. Ela deve, então, fazer uma salvaguarda de Constituição ao final de cada um dos próprios turnos. Se falhar três vezes, a criatura é transformada permanentemente em pedra e está sujeita à condição de petrificada. Se obter três sucessos, a magia se encerra. Os sucessos e falhas não precisam ser consecutivos; mantenha a contagem de ambos até que a criatura tenha três de um tipo.
<ul>
<li>Enquanto esta camada estiver ativa, magias não podem atravessar a muralha. Esta camada é destruída por luz plena emanada pela magia Luz do Dia ou uma magia similar do mesmo círculo ou superior.</li>
</ul>
</li>
<li><strong>7. Violeta</strong>. Se falhar, a criatura fica cega. Ela deve, então, fazer uma salvaguarda de Sabedoria no começo de seu próximo turno. Um sucesso encerra a cegueira. Se falhar, a criatura é transportada para outro plano à escolha do DM e não está mais cega (tipicamente, uma criatura que está em um plano que não é o de origem dela, é banida de volta, enquanto outras criaturas são normalmente lançadas nos Planos Astral ou Etéreo). Esta camada é destruída por Dissipar Magia ou magia semelhante de mesmo círculo ou superior, que seja capaz de encerrar magias ou efeitos mágicos.</li>
</ol>`,source:"LdJ pg. 261",name:"Muralha Prismática"},Dream:{description:`<p>Esta magia molda os sonhos de uma criatura. Escolha uma criatura conhecida como alvo. Ela deve estar no mesmo plano de existência que você. Criaturas que não dormem, como elfos, não podem ser contatadas por esta magia. Você ou uma criatura voluntária tocada por você, entra em um estado de transe, atuando como mensageira. Enquanto estiver em transe, o mensageiro está ciente do que acontece ao redor dele, mas não pode executar ações ou mover-se.</p>
<p>Se o alvo estiver dormindo, o mensageiro aparece nos sonhos dele e, enquanto a magia durar e o sono persistir, pode conversar com ele. O mensageiro também pode moldar o ambiente do sonho, criando paisagens, objetos e outras imagens, podendo ainda sair do transe a qualquer momento, o que encerra previamente o efeito da magia. O alvo recorda perfeitamente o sonho ao acordar. Se o alvo estiver acordado quando você conjurar a magia, o mensageiro ficará ciente, podendo terminar o transe (e a magia), ou aguardar o alvo cair no sono até o ponto no qual ele aparece nos sonhos do alvo.</p>
<p>Você pode fazer o mensageiro parecer monstruoso e aterrador para o alvo. Se fizer isso, o mensageiro só poderá entregar uma mensagem com não mais do que dez palavras e, em seguida, o alvo deverá fazer uma salvaguarda de Sabedoria. Se falhar, ecos da monstruosidade fantasmagórica geram um pesadelo que dura por todo o tempo de sono, impedindo o alvo de obter qualquer benefício com o descanso. Além disso, quando o alvo acorda, sofre 3d6 pontos de dano psíquico.</p>
<p>Caso você tenha uma parte do corpo do alvo, tal como uma mecha de cabelo, pedaço de unha, pele ou parte semelhante, a salvaguarda é feita com desvantagem.</p>`,source:"LdJ pg. 281",material:"um punhado de areia, um pouco de tinta e uma pena de escrita, arrancada de um pássaro adormecido",name:"Sonho"},Mending:{description:`<p>Esta magia repara um objeto quebrado ou rompido que você toque, como um elo de corrente quebrado, duas metades de uma chave quebrada, um manto rasgado ou um odre vazando. Se a quebra ou ruptura não for maior que 30 centímetros [1 ft.] em qualquer direção, você a repara sem deixar traços do ano anterior.</p>
<p>Esta magia pode reparar um item mágico ou constructo, mas não pode restaurar a magia de tal objeto.</p>`,material:"duas magnetitas",name:"Reparar"},"Flesh to Stone":{description:`<p>Você tenta transformar em pedra uma criatura à sua vista e no alcance da magia. Se o corpo do alvo for feito de carne, ele deve fazer uma salvaguarda de Constituição. Se falhar, fica contida imediatamente, conforme sua carne começa a endurecer. Em caso de sucesso, a criatura não é afetada.</p>
<p>Uma criatura contida por esta magia deve fazer outra salvaguarda de Constituição ao final de cada um dos turnos dela. Se for bem-sucedida três vezes, a magia se encerra. Se falhar três vezes, é transformada em pedra, passando a ser considerada com a condição petrificada, enquanto a magia durar. Os sucessos e falhas não precisam ser consecutivos; mantenha registro de ambos até que o alvo tenha três de um tipo.</p>
<p>Se a criatura for quebrada fisicamente enquanto petrificada, ela sofre deformações semelhantes, caso reverta para o estado original.</p>
<p>Se você mantiver sua concentração nesta magia durante toda a duração, a criatura permanece petrificada até que o efeito seja removido.</p>`,source:"LdJ pg. 234",material:"uma pitada de limo, água e terra",name:"De Carne Para Pedra"},"Inflict Wounds":{description:`<p>Faça um ataque mágico corpo a corpo contra uma criatura ao seu alcance. Se acertar, o alvo sofre 3d10 pontos de dano necrótico.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, o dano aumenta em 1d10 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 249",name:"Infligir Ferimentos"},"Hold Monster":{description:`<p>Escolha uma criatura à sua vista e no alcance da magia. O alvo deve ser bem-sucedido em uma salvaguarda de Sabedoria ou fica paralisado enquanto a magia durar. Esta magia não tem efeito sobre mortos-vivos. No final de cada um dos turnos dele, o alvo pode fazer uma nova salvaguarda de Sabedoria. Em caso de sucesso, a magia se encerra sobre o alvo.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, você pode atingir uma criatura adicional para cada círculo do espaço acima do 5º. As criaturas devem estar a até 9 metros umas das outras quando você as atingir.</p>`,source:"LdJ pg. 249",material:"um pedaço pequeno e reto de ferro",name:"Imobilizar Monstro"},Creation:{description:`<p>Você puxa mechas de material sombrio vindo do Sombral para criar, dentro do alcance da magia, um objeto inanimado, feito de matéria vegetal: tecido, madeira ou algo similar. Você também pode usar esta magia para criar objetos minerais, como rocha, cristal ou metal. O item criado deve ser menor que um cubo de 1,5 metro [5 ft.] de lado e deve ter uma forma e material que você já tenha visto.</p>
<p>A duração depende do componente do objeto. Se o objeto for composto de vários materiais, use a menor duração.</p>
<ul>
<li>Vegetal - 1 dia</li>
<li>Rocha ou cristal - 12 horas</li>
<li>Metais preciosos - 1 hora</li>
<li>Pedras preciosas - 10 minutos</li>
<li>Adamantina ou mithral - 1 minuto</li>
</ul>
<p>Usar qualquer material criado por esta magia como material componente de outra faz com que aquela magia falhe.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, o cubo aumenta em 1,5 metro [5 ft.] para cada círculo do espaço acima do 5º.</p>`,source:"LdJ pg. 231",material:"um pequeno pedaço de material do mesmo tipo de item que se planeja criar",name:"Criação"},"Meteor Swarm":{description:`<p>Esferas em chamas, feitas de pura brasa, atingem o solo em quatro pontos diferentes à sua vista e dentro do alcance da magia. A esfera se alastra, contornando os cantos. Cada criatura em um raio de 12 metros [40 ft.], centrado em cada ponto escolhido, precisa fazer uma salvaguarda de Destreza. Se falhar, sofre 20d6 pontos de dano ígneo e 20d6 pontos de dano contundente, ou metade do dano em caso de sucesso. Uma criatura na área afetada por mais de uma esfera, sofre os efeitos de apenas uma.</p>
<p>A magia danifica objetos na área e inflama objetos que não estão sendo usados ou carregados.</p>`,source:"LdJ pg. 223",name:"Chuva de Meteoros"},"True Strike":{description:"<p>Você aponta o seu dedo para um alvo no alcance. Sua magia garante uma leve intuição das defesas do alvo. Em seu próximo turno, você ganha vantagem em sua primeira jogada de ataque contra o alvo, desde que a magia não tenha terminado.</p>",source:"LdJ pg. 246",name:"Golpe Certeiro"},Seeming:{description:`<p>Esta magia permite que você altere a aparência de qualquer número de criaturas à sua vista e no alcance da magia. Você dá a cada alvo uma nova aparência ilusória, à sua escolha. Um alvo involuntário pode fazer uma salvaguarda de Carisma e, se for bem-sucedido, não é afetado.</p>
<p>A magia disfarça aparência física bem como roupas, armaduras, armas e equipamento. Você pode fazer cada criatura parecer 30 centímetros [1 foot] maior ou menor e aparentar ser gorda, magra ou algo entre. os dois. Não é possível alterar a estrutura do corpo do alvo, então é preciso escolher uma forma que tenha um arranjo de membros semelhante. No mais, a extensão da ilusão cabe a você. A magia permanece pela duração ou até você usar sua ação para dispensá-la.</p>
<p>As alterações feitas por esta magia não se sustentam diante de uma inspeção física. Por exemplo, se você usar esta magia para adicionar um chapéu à indumentária da criatura, objetos atravessam-no, e quem o tocar não sentirá nada ou apenas a cabeça e os cabelos da criatura. Se você usar esta magia para parecer mais magro do que é, alguém que estenda a mão para tocá-lo pode esbarrar em você enquanto ela ainda estiver, aparentemente, tocando o ar.</p>
<p>Uma criatura pode usar a própria ação para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra a CD para evitar sua magia. Se tiver êxito, ela torna-se ciente de que o alvo está disfarçado.</p>`,source:"LdJ pg. 280",name:"Similaridade"},"Heroes' Feast":{description:`<p>Você faz surgir um grande banquete, incluindo comida e bebida magníficas. O banquete leva 1 hora para ser consumido e desaparece no final desse tempo; os efeitos benéficos não aparecem até que essa hora se passe. Até doze outras criaturas podem partilhar o banquete.</p>
<p>Uma criatura que partilhe do banquete ganha vários benefícios. A criatura é curada de todas as doenças e envenenamentos, torna-se imune a veneno e a ficar amedrontada, e faz todas as salvaguardas de Sabedoria com vantagem. O valor dos pontos de vida máximos dela também aumenta em 2d10, ganhando esse mesmo número em pontos de vida. Estes benefícios duram 24 horas.</p>`,source:"LdJ pg. 219",material:"uma tigela com uma gema incrustada valendo pelo menos 1.000 PO, a qual é consumida pela magia",name:"Banquete de Heróis"},"Gentle Repose":{description:"<p>Você toca um cadáver ou outros restos mortais. Enquanto a magia durar, o alvo está protegido da decomposição e não pode se tornar um morto-vivo.</p><p>A magia também estende efetivamente o tempo limite para trazer o alvo dos mortos, pois os dias passados sob a influência desta magia não contam contra o tempo limite de magias como Reviver os Mortos.</p>",source:"LdJ pg. 277",material:"uma pitada de sal e uma peça de cobre colocada sobre cada um dos olhos do cadáver, lugar no qual devem permanecer enquanto a magia durar",name:"Repouso Tranquilo"},"Sacred Flame":{description:`<p>Uma irradiação instantânea semelhante a uma chama irrompe em uma criatura à sua vista, no alcance da magia. O alvo deve fazer uma salvaguarda de Destreza. Se falhar, sofre 1d8 pontos de dano radiante. O alvo não tem benefício algum de cobertura para essa salvaguarda.</p>
<p>O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).</p>`,source:"LdJ pg. 223",name:"Chama Sagrada"},"Faerie Fire":{description:`<p>Todos os objetos em um cubo de 6 metros [20-foot cube] no alcance da magia se tornam delineados por uma luz azul, verde ou violeta (à sua escolha). Qualquer criatura que esteja na área quando a magia for conjurada também é delineada pela luz, caso falhe em uma salvaguarda de Destreza. Enquanto a magia durar, objetos e criaturas afetadas por ela emitem uma luz tênue, criando meia-luz em um raio de 3 metros [10-foot radius].</p>
<p>Qualquer jogada de ataque contra uma criatura ou objeto afetado tem vantagem, caso o atacante possa vê-los. Objetos e criaturas afetados não podem se beneficiar por estarem invisíveis.</p>`,source:"LdJ pg. 244",name:"Fogo das Fadas"},"Major Image":{description:`<p>Você cria a imagem de um objeto, criatura ou algum fenômeno visível que não seja maior do que um cubo de 6 metros [20-foot cube]. A imagem surge em um ponto à sua vista dentro do alcance da magia e permanece enquanto a magia durar. Ela parece ser real, incluindo sons, cheiros e temperatura apropriados à coisa retratada. Você não pode criar calor ou frio suficientes a ponto de causar dano, um som tão alto que cause dano trovejante ou que deixe uma criatura surda, ou um odor tão forte que cause enjoo (como o fedor de um troglodita).</p><p>Enquanto você estiver no alcance da ilusão, você pode usar sua ação para fazer a imagem se mover para qualquer outro local dentro do alcance da magia. À medida que a imagem muda de lugar, é possível alterar a aparência dela para que os movimentos pareçam naturais. Por exemplo, se você criar a imagem de uma criatura e movê-la, é possível alterar a imagem para que ela pareça estar andando. De forma semelhante, é possível fazer a ilusão emitir sons diferentes em momentos distintos, possibilitando inclusive que ela participe de uma conversa, por exemplo.</p><p>Interação física com a imagem revelará que se trata de uma ilusão porque coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que é uma ilusão com um teste bem-sucedido de Inteligência (Investigação) contra a CD para evitar sua magia. Se uma criatura discernir a ilusão pelo que ela é, a criatura enxerga através da imagem e qualquer som emitido torna-se abafado para a criatura.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou superior, ela dura até ser dissipada, não necessitando de concentração.</p>`,source:"LdJ pg. 248",material:"um pouco de lã",name:"Imagem Maior"},"Healing Word":{description:`<p>Escolha uma criatura à sua vista e no alcance da magia. Ela recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de atributo de conjuração. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, a cura aumenta em 1d4 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 264",name:"Palavra Curativa"},"Wall of Force":{description:`<p>Uma muralha de força invisível surge em um ponto escolhido e no alcance da magia. Ela aparece em qualquer orientação à sua escolha, como uma barreira vertical ou horizontal, ou em qualquer inclinação. Ela pode flutuar livremente ou repousar sobre uma superfície sólida. Você pode moldá-la no formato de domo hemisférico ou de esfera com até 3 metros de raio [10-foot-radius sphere], ou formar uma superfície plana composta por dez painéis de 3 metros [10 ft.] de lado. Cada painel precisa ser contíguo ao outro. Seja qual for o formato assumido, a muralha possui 6 milímetros [1/4 inch] de espessura. Ela fica ativa enquanto a magia durar. Ao surgir, se a muralha passar por um espaço ocupado por uma criatura, esta última é empurrada para um dos lados da muralha (à sua escolha).</p>
<p>Nada pode passar fisicamente pela muralha. Ela é imune a todo tipo de dano e não pode ser anulada por Dissipar Magia. Entretanto, a magia Desintegrar a destrói instantaneamente. A muralha também se estende para o Plano Etéreo, bloqueando viagens etéreas através dela.</p>`,source:"LdJ pg. 260",material:"uma pitada do pó de uma pedra preciosa clara esmagada",name:"Muralha de Energia"},"Minor Illusion":{description:"<p>Você cria um som ou uma imagem de um objeto ao alcanceda magia, que permanece enquanto esta durar. A ilusão termina se você a dispensar com uma ação ou conjurá-la novamente.</p><p>Se você cria um som, o volume emitido pode variar desde um sussurro até um grito. Pode ser a sua voz, a voz de outra pessoa, o rugido de um leão, a batida de tambores ou qualquer outro som à sua escolha. O som continua no mesmo tom enquanto a magia durar, ou você pode fazer sons mais discretos em momentos diferentes, antes que a magia termine.</p><p>Se você criar uma imagem de um objeto - como uma cadeira, pegadas lamacentas ou uma pequena arca - esta não pode ser maior que um cubo de 1,5 metro [5-foot cube]. A imagem não pode emitir som, luz, odor ou qualquer outro efeito sensorial. Interação física com a imagem revela que se trata de uma ilusão, pois coisas passam através dela.</p><p>Se uma criatura usar uma ação para examinar o som ou a imagem, a criatura pode determinar que é uma ilusão comum teste bem-sucedido de Inteligência (Investigação) contra a CD para evitar sua magia. A ilusão torna-se desbotada para uma criatura que consiga discerni-la.</p>",source:"LdJ pg. 248",material:"um pouco de lã",name:"Ilusão Menor"},"Animal Shapes":{description:`<p>Sua magia transforma outras criaturas em feras. Escolha qualquer número de criaturas voluntárias à sua vista e dentro do alcance. Você transforma cada alvo em uma fera Grande ou menor, cujo nível de desafio seja 4 ou menor. Nos turnos subsequentes, você pode usar uma ação para dar novas formas às criaturas afetadas.</p>
<p>A transformação persiste enquanto a magia durar ou até que o alvo fique com 0 pontos de vida ou morra. Você pode escolher uma forma diferente para cada alvo. As estatísticas de jogo de cada alvo são substituídas pelas estatísticas da fera escolhida, embora o alvo mantenha o alinhamento e valores de Inteligência, Sabedoria e Carisma originais. O alvo assume os pontos de vida da nova forma, e quando reverte para a forma original, retorna para a quantidade de pontos de vida que possuía antes da transformação. Se a transformação for revertida como resultado dos pontos de vida do alvo serem reduzidos a 0, todo o excesso de dano será transferido para a forma original. Contanto que esse excesso de dano não reduza a forma original do alvo a 0 pontos de vida, ele não fica inconsciente. As ações que a criatura pode executar estão limitadas pela nova forma, e ela não pode falar ou conjurar magias.</p>
<p>Os equipamentos do alvo se fundem à nova forma. O alvo não pode ativar, empunhar, ou receber quaisquer benefícios desses equipamentos.</p>`,source:"LdJ pg. 245",name:"Formas Animais"},"Animate Dead":{description:`<p>Esta magia cria um servo morto-vivo. Escolha uma pilha de ossos ou o cadáver de um humanoide Médio ou Pequeno, dentro do alcance da magia. Você infunde o alvo com uma perversa imitação de vida, fazendo-o se erguer como uma criatura morta-viva. O alvo se torna um esqueleto, se você escolheu ossos, ou um zumbi, se você escolheu um cadáver (o DM fornece as estatísticas da criatura).</p>
<p>Em cada um de seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que tenha criado com esta magia, e que esteja a até 18 metros [60 ft.] de você (se controlar múltiplas criaturas, você pode comandar uma ou todas simultaneamente, emitindo o mesmo comando para todas). Você decide qual ação a criatura tomará e para onde ela se moverá durante o próximo turno dela, ou você pode emitir um comando mais genérico, como manter a guarda de uma câmara ou corredor. Se você não emitir nenhum comando, a criatura apenas se defende de criaturas hostis. Uma vez dada a ordem, a criatura continuará seguindo-a até que a tarefa esteja completa.</p>
<p>A criatura fica sob seu controle por 24 horas, período após o qual ela para de obedecer aos seus comandos. Para manter o controle por mais 24 horas, é necessário conjurar novamente esta magia na criatura antes que o período de controle atual de 24 horas acabe. Isso restabelece o seu controle sobre até quatro criaturas que você tenha animado com esta magia em vez de animar uma nova.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou maior, você pode animar ou restabelecer o controle sobre mais dois mortos-vivos para cada círculo do espaço acima do 3º. Cada uma das criaturas precisa ter vindo de uma pilha de ossos ou cadáver único.</p>`,source:"LdJ pg. 213",material:"uma gota de sangue, um pedaço de carne e uma pitada de pó de osso",name:"Animar Mortos"},"Glyph of Warding":{description:`<p>Ao conjurar esta magia, você inscreve um glifo que mais tarde desencadeia um efeito mágico. Você o inscreve em uma superfície (como uma mesa, uma seção de piso ou parede) ou dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou uma arca de tesouro) e onde o glifo possa ser escondido. O símbolo pode cobrir uma área de até 3 metros de diâmetro [10-foot diameter]. Se a superfície ou objeto for movido mais de 3 metros [10 ft.] de onde você conjurou esta magia, o símbolo é quebrado e a magia se encerra, sem efeito.</p>
<p>O glifo é quase invisível, exigindo um teste de Inteligência (Investigação) contra a CD para evitar sua magia para encontrá-lo.</p>
<p>Ao conjurar esta magia, você decide o gatilho do glifo. Para os glifos que foram inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou pisar no glifo, remover um objeto que o cubra, aproximar-se a uma certa distância dele ou manipular um objeto que o contenha. Para os que forem inscritos dentro de um objeto, as condições podem ser a abertura deste, aproximar-se a uma certa distância, ou ainda ver ou ler o glifo. Uma vez que um glifo seja disparado, esta magia termina.</p>
<p>Você pode refinar o gatilho para que a magia seja ativada apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser programada para afetar aberrações ou drow) ou alinhamento. Podem também ser especificadas condições para que não se dispare o glifo, como dizer uma palavra-chave, por exemplo.</p>
<p>Quando você inscrever o glifo, escolha entre runas explosivas ou glifo arcano.</p>
<p><strong>Runas Explosivas</strong>. Quando acionada, a runa explode com energia mística em uma esfera de 6 metros [20 ft.] centrada no glifo. A esfera se alastra, contornando os cantos. Cada criatura na área deve fazer uma salvaguarda de Destreza. Se falhar, sofre 5d8 pontos de dano ácido, elétrico, gélido, ígneo ou trovejante (à sua escolha, ao conjurar a magia), ou metade do dano em caso de sucesso.</p>
<p><strong>Glifo Arcano</strong>. Você pode armazenar uma magia preparada de 3º círculo ou inferior junto ao glifo, se conjurar esta magia como parte do processo. Ela deve ter como alvo uma única criatura, ou uma área. A magia que foi conjurada não tem efeito imediato nesta modalidade. Ela se ativa quando o glifo for disparado. Se a magia tiver um alvo, quem acionou o glifo é atingido. Se a magia afetar uma área, o centro é a criatura. Se a magia invocar criaturas hostis ou criar objetos nocivos ou armadilhas, eles surgem o mais próximo possível do intruso e o atacam. Se a magia exigir concentra­ção, ela permanece até o fim de sua duração total.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano por um símbolo de runas explosivas aumenta em 1d8 para cada círculo do espaço acima do 3º. Se criar um glifo arcano, você pode armazenar qualquer magia até o mesmo círculo que o espaço que foi usado para conjurar o Glifo de Proteção.</p>`,source:"LdJ pg. 245",material:"incenso e pó de diamante no valor mínimo de 200 PO, os quais a magia consome",name:"Glifo de Proteção"},"Bestow Curse":{description:`<p>Quando você toca uma criatura, ela deve ser bem-sucedida em uma salvaguarda de Sabedoria ou torna-se amaldiçoada enquanto a magia durar. Ao conjurar esta magia, você deve escolher a natureza da maldição, entre as seguintes opções:</p>
</ul>
<li>Escolha um atributo. Enquanto amaldiçoado, o alvo tem desvantagem nos testes de atributo e salvaguardas feitas com este atributo.</li>
<li>Enquanto amaldiçoado, o alvo tem desvantagem nas jogadas de ataque contra você.</li>
<li>Enquanto amaldiçoado, o alvo deve fazer uma salvaguarda de Sabedoria no início de cada um dos turnos dele. Se falha, desperdiça a própria ação nesse turno, ficando sem fazer nada.</li>
<li>Enquanto o alvo está amaldiçoado, seus ataques e magias contra ele causam 1d8 pontos de dano necrótico extra.</li>
</ul>
<p>Uma magia Remover Maldição encerra o efeito da magia. À escolha do DM, você pode optar por um efeito de maldição alternativo, mas ele não deve ser mais poderoso do que os descritos acima. O DM tem a palavra final sobre este efeito da maldição alternativa.</p>
<p><strong>Em Círculos Superiores.</strong> Se você conjurar esta magia usando um espaço de magia de 4º círculo ou superior, a duração dela será Concentração, até 10 minutos. Se você usar um espaço de magia de 5º círculo ou superior, a duração passa a ser 8 horas. Se você usar um espaço de magia de 7º círculo ou superior, a duração passa a ser 24 horas. Se você usar um espaço de magia de 9º círculo, a magia dura até ser dissipada. Usar um espaço de magia de 5º círculo ou superior concede uma duração que não requer concentração.</p>`,source:"LdJ pg. 278",name:"Rogar Maldição"},"Pass without Trace":{description:"<p>Um véu de sombras e silêncio irradia de você, mascarando você e seus aliados contra detecção. Enquanto a magia durar, cada criatura à sua escolha no alcance de 9 metros [30 ft.] (incluindo você) tem um bônus de +10 nos testes de Destreza (Furtividade) e não pode ser rastreada a não ser por meios mágicos. Uma criatura com este bônus não deixa rastros ou outros traços de sua passagem.</p>",source:"LdJ pg. 266",material:"cinzas de uma folha de visco queimada e um ramo de abeto",name:"Passo sem Rastro"},"Incendiary Cloud":{description:`<p>Uma nuvem rodopiante de fumaça que atira brasas quentes aparece em uma esfera com raio de 6 metros [20-foot-radius sphere], centrada em um ponto à sua escolha e no alcance da magia. A nuvem se alastra, contornando os cantos e a área afetada fica totalmente obscurecida. Ela permanece enquanto a magia durar ou até que um vento de velocidade moderada (de ao menos 15 quilômetros [10 miles] por hora) ou maior a disperse.</p>
<p>Quando a nuvem aparece, cada criatura dentro dela deve fazer uma salvaguarda de Destreza. Se falhar, sofre 10d8 pontos de dano ígneo, ou metade do dano em caso de sucesso. Uma criatura deve fazer esta salvaguarda quando entra na área da magia pela primeira vez ou inicia o pró­prio turno ali.</p>
<p>A nuvem se distancia 3 metros [10 ft.] de você em uma direção à sua escolha no início de cada um de seus turnos.</p>`,source:"LdJ pg. 263",name:"Nuvem Incendiária"},"Magnificent Mansion":{description:`<p>Você conjura uma habitação extradimensional, no alcance da magia e que permanece enquanto esta durar. Você escolhe onde a única entrada está localizada. A entrada brilha fracamente e possui 1,5 metro [5 ft.] de largura e 3 metros [10 ft.] de altura. Você e qualquer criatura que designar ao conjurar a magia podem entrar na habitação extradimensional enquanto o portal permanecer aberto. Você pode abrir ou fechar o portal se estiver a até 9 metros [30 ft.] dele. Quando está fechado, o portal é invisível.</p>
<p>Além do portal, existe um magnífico saguão com numerosas câmaras além dele. O ambiente é limpo, fresco e aquecido.</p>
<p>Você pode criar qualquer projeto que desejar, mas o espaço não pode exceder 50 cubos, cada cubo tendo 3 metros [10 ft.] de lado. O lugar é mobiliado e decorado como você escolher. Ele contém comida o suficiente para servir um banquete de nove pratos para até 100 pessoas. Uma equipe de 100 servos semi transparentes auxiliam a todos os que entram. Você decide a aparência visual desses servos e seus trajes. Eles são completamente obedientes às suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano normal poderia executar, mas não podem atacar ou executar qualquer ação que possa diretamente ferir outra criatura. Assim sendo, os servos podem buscar coisas, limpar, consertar, dobrar roupas, acender o fogo, servir comida, oferecer vinho e assim por diante. Os servos podem ir a qualquer lugar da mansão, mas não podem deixá-la. Mobiliário e outros objetos criados por esta magia dissipam-se em fumaça se forem retirados da mansão. Quando a magia termina, quaisquer criaturas dentro do espaço extradimensional são expelidas em espaços abertos o mais próximo da entrada.</p>`,material:"um portal em miniatura esculpido em marfim, um pedaço pequeno de mármore polido e uma diminuta colher de prata, cada item com valor mínimo de 5 PO",name:"Mansão Magnífica"},"Detect Thoughts":{description:"<p>Enquanto a magia durar, você pode ler os pensamentos de certas criaturas. Ao conjurar esta magia, e com uma ação em cada um de seus turnos enquanto a magia durar, você pode focar sua mente em qualquer criatura à sua vista e que esteja a até 9 metros [30 ft.] de distância de você. Se a criatura que você escolher tiver uma Inteligência igual ou menor que 3, ou não falar qualquer idioma, ela não é afetada.</p><p>Inicialmente, você descobre os pensamentos superficiais da criatura - o que está mais evidente na mente dela naquele momento. Com uma ação, você pode mudar sua atenção para os pensamentos de outra criatura ou tentar sondar mais profundamente a mente da mesma criatura. Se sondar mais profundamente, o alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, você ganha acesso aos raciocínios (se houver), estado emocional e qualquer coisa que ocupe grande parte da mente dele (como alguma coisa com a qual ele se preocupa, ame ou odeie). Se o alvo for bem-sucedido, a magia se encerra. De qualquer forma, o alvo sabe que você está sondando a mente dele e, a menos que você mude sua atenção para os pensamentos de outra criatura, a criatura pode usar uma ação para fazer um teste de Inteligência resistido por um teste de Inteligência seu; se ela for bem-sucedida, a magia se encerra.</p><p>Perguntas verbais dirigidas à criatura alvo moldam naturalmente o curso dos pensamentos dela, o que torna esta magia particularmente eficaz como parte de um interrogatório.</p><p>Você também pode usar esta magia para detectar a presença de criaturas pensantes que você não possa ver. Ao conjurar esta magia ou como sua ação, enquanto a magia durar, você pode procurar por pensamentos em uma área de 9 metros [30 ft.] de distância de você. A magia pode penetrar barreiras,sendo bloqueada, no entanto, por 60 centímetros [2 ft.] de rocha, 5 centímetros [2 inches] de qualquer metal ou uma folha fina de chumbo. Você não pode detectar uma criatura com Inteligência igual a 3 ou menor, ou que não fale nenhum idioma.</p><p>Depois de detectar a presença de uma criatura desse modo, você pode ler os pensamentos dela pelo restante da duração da magia, conforme descrito acima, mesmo que não possa vê-la, embora ela ainda precise estar dentro do alcance da magia.</p>",source:"LdJ pg. 237",material:"uma peça de cobre",name:"Detectar Pensamentos"},"Feather Fall":{description:"<p>Escolha até cinco criaturas no alcance da magia e que estejam caindo. A velocidade de queda de uma criatura é reduzida para 18 metros [60 ft.] por rodada enquanto a magia durar. Se a criatura pousar antes do fim da magia, não sofrerá dano por queda, podendo aterrissar em pé, e a magia se encerra para ela.</p>",source:"LdJ pg. 272",material:"uma pena pequena ou penugem",name:"Queda Suave"},Banishment:{description:`<p>Você tenta enviar uma criatura à sua vista e que esteja dentro do alcance da magia para outro plano de existência. O alvo deve ser bem-sucedido em uma salvaguarda de Carisma ou será banido.</p>
<p>Se o alvo for nativo do plano em que você se encontra, ele é banido para um semiplano inofensivo. Enquanto permanecer lá, fica incapacitado. O alvo permanece banido enquanto a magia durar, quando, então, reaparece no espaço de onde partiu ou no espaço desocupado mais próximo, se o espaço original estiver ocupado.</p>
<p>Se o alvo for nativo de um plano de existência diferente daquele no qual você se encontra, ele é banido com um ligeiro estalo, voltando para o seu próprio plano de origem. Se a magia se encerrar antes que 1 minuto se passe, o alvo reaparece no espaço de onde partiu ou no espaço desocupado mais próximo, se o espaço original estiver ocupado. Caso contrário, o alvo não retorna.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou maior, você pode atingir uma criatura adicional para cada círculo do espaço acima do 4º.</p>`,source:"LdJ pg. 219",material:"um item desagradável para o alvo",name:"Banimento"},Blight:{description:`<p>Energia necromântica envolve uma criatura à sua escolha, à sua vista e no alcance da magia, drenando a umidade e a vitalidade dela. O alvo deve fazer uma salvaguarda de Constituição. Se falhar, sofre 8d8 de dano necrótico, ou metade do dano em caso de sucesso. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p>Se você escolher como alvo uma criatura do tipo planta ou uma planta mágica, ela faz a salvaguarda com desvantagem e a magia causa dano máximo.</p>
<p>Se você escolher como alvo uma planta não-mágica que não seja uma criatura, como uma árvore ou arbusto, ela não faz a salvaguarda e simplesmente murcha e morre.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 4º.</p>`,source:"LdJ pg. 254",name:"Malogro"},"True Resurrection":{description:"<p>Você toca uma criatura, morta há não mais do que dois séculos e que tenha morrido por qualquer motivo, exceto por idade avançada. Se a alma dela estiver livre e disposta, a criatura retoma à vida com todos os pontos de vida.</p><p>Esta magia fecha todas as feridas, neutraliza qualquer veneno, cura todas as doenças e cancela quaisquer maldições que afetavam a criatura quando ela morreu. Membros ou órgãos amputados ou danificados são restabelecidos. Se a criatura era um morto-vivo, ela é restaurada para a sua forma não-morta-viva.</p><p>A magia pode até fornecer um novo corpo se o original não existir mais. Neste caso, o nome da criatura deve ser dito. Ela, então, aparece em um espaço desocupado à sua escolha a até 3 metros [10 ft.] de você.</p>",source:"LdJ pg. 277",material:"uma aspersão de água benta e diamantes no valor mínimo de 25.000 PO, que a magia consome",name:"Ressurreição Verdadeira"},Heal:{description:`<p>Escolha uma criatura à sua vista e no alcance da magia. Uma onda de energia positiva a preenche, fazendo com que recupere 70 pontos de vida. Esta magia também põe fim a cegueira, surdez ou a qualquer doença que afete o alvo. Esta magia não tem efeito sobre constructos ou mortos-vivos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, a quantidade de pontos de vida recuperados aumenta em 10 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 233",name:"Cura Completa"},"Modify Memory":{description:`<p>Você tenta reformular as memórias de outra criatura. Uma criatura à sua vista deve fazer uma salvaguarda de Sabedoria. Se você estiver lutando contra a criatura, ela tem vantagem na salvaguarda. Se falhar, o alvo se torna enfeitiçado por você enquanto a magia durar. Um alvo enfeitiçado está incapacitado e inconsciente dos seus arredores, apesar de ainda poder ouvir você. Se ele sofrer qualquer dano ou for alvo de outra magia, esta magia se encerra e nenhuma das memórias do alvo é modificada.</p>
<p>Enquanto o alvo estiver enfeitiçado, você pode afetar as memórias de um evento que ele experimentou nas últimas 24 horas e que não tenha durado mais do que 10 minutos. Você pode eliminar permanentemente todas as memórias do evento, permitir que o alvo relembre do evento com perfeita clareza de detalhes, mudar as memórias dos detalhes do evento ou criar uma memória de algum outro evento.</p>
<p>Você deve falar com o alvo para descrever como as memórias dele são afetadas, e ele deve ser capaz de entender seu idioma para a memória modificada se enraizar. A mente dele preenche quaisquer lacunas de detalhes da sua descrição. Se a magia se encerrar antes de você terminar de descrever a memória modificada, a memória da criatura não é alterada. Caso contrário, as memórias modificadas se instalam quando a magia se encerrar.</p>
<p>Uma memória modificada não necessariamente afeta a maneira como o alvo habitualmente se comporta, principalmente se a memória entrar em contradição com as inclinações naturais, alinhamento ou crenças dela. Uma memória modificada ilógica, como implantar uma memória de quanto a criatura gosta de se banhar com ácido, é descartada, talvez como se fosse um sonho ruim. O DM pode julgar uma memória modificada com sendo demasiadamente absurda para afetar o alvo de maneira significativa.</p>
<p>Uma magia Remover Maldição ou Restauração Maior conjurada no alvo restaura a memória original da criatura.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 6º círculo ou maior, você pode alterar as memórias do alvo de um evento que aconteceu a até 7 dias atrás (6º círculo), 30 dias atrás (7º círculo), 1 ano atrás (8º círculo), ou qualquer período no passado da criatura (9º círculo).</p>`,source:"LdJ pg. 259",name:"Modificar Memória"},"Transport via Plants":{description:"<p>Esta magia cria um vínculo mágico entre uma planta inanimada Grande ou maior no alcance da magia e outra planta, a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino pelo menos uma vez antes. Enquanto a magia durar, qualquer criatura pode entrar pela planta alvo e sair na planta de destino usando 1,5 metro [5 ft.] de deslocamento.</p>",source:"LdJ pg. 285",name:"Teleporte via Plantas"},"Hallucinatory Terrain":{description:`<p>Você faz com que um terreno natural em um cubo de 45 metros [150-foot cube] no alcance da magia pareça, soe e cheire como outro tipo de terreno natural. Assim, campos abertos ou um caminho podem ser modificados para que se assemelhem a um pântano, montanha, fenda ou algum outro terreno difícil ou intransitável. Uma lagoa pode ser modificada para se parecer com um prado verdejante, um precipício com um declive suave, ou um barranco pedregoso com uma estrada larga e plana. Estruturas manufaturadas, equipamentos e criaturas dentro da área não mudam a aparência.</p>
<p>As características táteis do terreno não são alteradas, portanto criaturas entrando na área são propensas a ver através da ilusão. Se a diferença não for óbvia ao toque, uma criatura examinando cuidadosamente a ilusão pode tentar um teste de Inteligência (Investigação) contra a CD para evitar suas magias, assim desacreditando a magia. Uma criatura que perceba a ilusão pelo o que é ela é, verá uma imagem difusa, sobreposta ao terreno.</p>`,source:"LdJ pg. 286",material:"uma pedra, um graveto e um pedaço de uma planta verde",name:"Terreno Alucinatório"},"Greater Invisibility":{description:"<p>Você ou uma criatura tocada por você torna-se invisível enquanto a magia durar. Qualquer coisa que o alvo estiver usando ou carregando torna-se invisível enquanto permanecer em contato com ele.</p>",source:"LdJ pg. 250",name:"Invisibilidade Maior"},Harm:{description:"<p>Você transmite uma doença virulenta a uma criatura à sua vista e dentro do alcance da magia. O alvo deve fazer uma salvaguarda de Constituição. Se falhar, sofre 14d6 pontos de dano necrótico, ou metade do dano se bem-sucedido. O dano não pode reduzir os pontos de vida do alvo a menos de 1. Se o alvo falhar na salvaguarda, o valor de seus pontos de vida máximos é reduzido durante 1 hora em uma quantidade equivalente ao dano necrótico sofrido. Qualquer efeito que remova uma doença permite que o valor dos pontos de vida máximos do alvo retorne ao normal, antes do tempo de encerramento desta magia.</p>",source:"LdJ pg. 259",name:"Moléstia"},"Telepathic Bond":{description:`<p>Você forja uma ligação telepática com até oito criaturas voluntárias à sua escolha, no alcance da magia, ligando psiquicamente cada criatura com todos os demais, enquanto a magia durar. Criaturas com um valor de Inteligência de 2 ou menos não são afetadas por esta magia.</p>
<p>Enquanto a magia durar, os alvos podem se comunicar telepaticamente através da ligação, independentemente de terem ou não um idioma em comum. A comunicação é possível a qualquer distância, mas não pode se estender para outros planos de existência.</p>`,material:"pedaços de cascas de ovos de dois tipos diferentes de criatura",name:"Ligação Telepática"},"Spirit Guardians":{description:`<p>Você convoca espíritos para lhe proteger. Eles vagueiam ao seu redor a uma distância de até 4,5 metros [15 ft.] enquanto a magia durar. Se você for bom ou neutro, os espíritos assumem formas angelicais ou feéricas (à sua escolha). Se seu alinhamento for maligno, eles se assemelham a ínferos.</p>
<p>Ao conjurar esta magia, você pode designar qualquer número de criaturas à sua vista para não serem afetadas por ela. Uma criatura afetada por esta magia possui apenas metade do deslocamento na área. Ao entrar na área pela primeira vez ou iniciar o turno nela, a criatura deve fazer uma salvaguarda de Sabedoria. Se falhar, sofre 3d8 pontos de dano radiante (se você for bom ou neutro) ou 3d8 pontos de dano necrótico (se for mau). Em caso de sucesso, a criatura sofre metade do dano.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 246",material:"um símbolo sagrado",name:"Guardiões Espirituais"},"Cure Wounds":{description:`<p>Uma criatura tocada por você recupera um número de pontos de vida igual a 1d8 + o modificador do seu atributo de conjuração. Esta magia não tem efeito sobre mortos-vivos ou constructos.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, a cura aumenta em 1d8 para cada círculo do espaço acima do 1º.</p>`,source:"LdJ pg. 233",name:"Curar Ferimentos"},Prestidigitation:{description:`<p>Esta magia é um pequeno truque mágico que conjuradores iniciantes usam para praticar. Crie um dos seguintes efeitos mágicos no alcance da magia:</p>
<ul>
<li>Você cria um efeito sensorial instantâneo e inofensivo como uma chuva de faíscas, um sopro de vento, notas musicais suaves ou um odor característico.</li>
<li>Você faz com que uma vela, tocha ou pequena fogueira seja imediatamente acesa ou apagada.</li>
<li>Você instantaneamente limpa ou suja um objeto que não seja maior que um cubo de 30 centímetros de lado [1 cubic foot].</li>
<li>Você resfria, esquenta ou tempera um objeto que não seja maior que um cubo de até 30 centímetros de lado [1 cubic foot] feito de matéria não-viva por 1 hora.</li>
<li>Você colore, faz uma pequena marca ou um símbolo aparecer em um objeto ou superfície por 1 hora.</li>
<li>Você cria uma bugiganga não-mágica ou uma imagem ilusória que pode caber em sua mão e esta dura até o fim do seu próximo turno.</li>
</ul>
<p>Se você conjurar esta magia múltiplas vezes, é possível ter três de seus efeitos não instantâneos ativos ao mesmo tempo e qualquer desses efeitos pode ser encerrado com uma ação.</p>`,source:"LdJ pg. 270",name:"Prestidigitação Arcana"},"Chill Touch":{description:`<p>Você cria uma mão esquelética e fantasmagórica no espaço ocupado por uma criatura que se encontre no alcance da magia. Faça um ataque mágico à distância contra a criatura para atingi-la com um calafrio sepulcral. Se o ataque for bem-sucedido, ela sofre 1d8 pontos de dano necrótico e não pode recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão se agarra ao alvo.</p>
<p>Se você atacar um alvo morto-vivo, ele também terá desvantagem nas jogadas de ataque contra você até o final do seu próximo turno.</p>
<p>O dano desta magia aumenta em 1d8 quando você alcança o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).</p>`,source:"LdJ pg. 287",name:"Toque Necrótico"},Shatter:{description:`<p>Um ruído súbito e estridente, dolorosamente intenso, irrompe a partir de um ponto à sua escolha, no alcance da magia. Cada criatura em uma esfera de 3 metros de raio [10-foot-radius sphere] centrado naquele ponto deve fazer uma salvaguarda de Constituição. Se falhar, sofre 3d8 pontos de dano trovejante, ou metade do dano em caso de sucesso. Uma criatura feita de material inorgânico, como pedra, cristal ou metal tem desvantagem nesta salvaguarda.</p>
<p>Um objeto não-mágico que não esteja sendo usado ou carregado também sofre o dano se estiver na área da magia.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, o dano aumenta em 1d8 para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 235",material:"uma lasca de mica",name:"Despedaçar"},"Antilife Shell":{description:`<p>Uma barreira cintilante estende-se a partir de você em um raio de 3 metros [10 ft.]. Ela permanece centrada em você e, portanto, acompanha-o aonde quer que vá, barrando a presença de criaturas que não sejam mortos-vivos e constructos. A barreira persiste enquanto a magia durar.</p>
<p>A barreira impede uma criatura afetada por ela de ultrapassá-la completa ou parcialmente. Tal criatura, contudo, pode conjurar magias, realizar ataques com armas de combate à distância ou armas de combate corpo a corpo que possuam a propriedade extensão, através da barreira.</p>
<p>Se você se mover de modo que uma criatura seja forçada a atravessar a barreira, a magia se encerra.</p>`,source:"LdJ pg. 233",name:"Cúpula Antivida"},"Phantom Steed":{description:"<p>Uma criatura Grande, quase real, similar a um cavalo, aparece no solo, surgindo num espaço desocupado à sua escolha e no alcance da magia. Você decide a aparência da montaria, mas ela é equipada com sela, estribo e arreio. Qualquer equipamento criado pela magia desaparece em uma nuvem de fumaça se movido a mais de 3 metros [10 ft.] de distância da mesma.</p><p>Enquanto a magia durar,uma criatura à sua escolha pode fazer uso da montaria. Utilize as estatísticas de um cavalo de montaria, exceto por seu deslocamento de 30 metros [100 ft.] e por poder viajar 16 quilômetros [10 miles] em uma hora ou 20 quilômetros [13 miles] em trote rápido. Quando a magia termina, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia se encerra se você dispensa a montaria ou se ela sofrer qualquer dano.</p>",source:"LdJ pg. 259",name:"Montaria Fantasmagórica"},"Misty Step":{description:"<p>Rodeado brevemente por uma névoa prateada, você se teleporta a até 9 metros [30 ft.] para um espaço desocupado à sua vista.</p>",source:"LdJ pg. 266",name:"Passo Nebuloso"},Sequester:{description:`<p>Você esconde uma criatura voluntária ou um objeto, tornando-o livre de detecção enquanto a magia durar. Ao conjurar a magia e tocar o alvo, este torna-se invisível e não pode ser alvo de magias de adivinhação ou percebido através de sensores mágicos criados por feitiços de adivinhação.</p>
<p>Se o alvo for uma criatura, ela cai em um estado de animação suspensa. O tempo deixa de passar para ela, que passa a não sofrer os efeitos do envelhecimento.</p>
<p>Você pode definir uma condição para a magia terminar mais cedo. A condição pode ser qualquer coisa que você escolher, mas deve ocorrer ou ser visível no alcance de 1,5 quilômetros [1 mile] do alvo. Exemplos incluem "depois de 1.000 anos" ou "quando o tarrasque despertar". Esta magia também termina se o alvo sofrer qualquer dano.</p>`,source:"LdJ pg. 276",material:"um pó composto de poeira de diamante, esmeralda, rubi e safira no valor mínimo de 5.000 PO, que a magia consome",name:"Refugiar"},Earthquake:{description:`<p>Você pode criar uma perturbação sísmica em um ponto no chão, à sua vista e no alcance da magia. Enquanto a magia durar, um intenso tremor rasga o chão em um círculo com raio de 30 metros [100-foot radius] centrado nesse ponto, sacudindo as criaturas e estruturas em contato com o solo nessa área.</p>
<p>O terreno na área se torna terreno difícil. Cada criatura em solo afetado e que esteja se concentrando, deve fazer uma salvaguarda de Constituição. Se falhar, a criatura terá a concentração quebrada.</p>
<p>Ao conjurar esta magia, e ao final de cada turno que gastar concentrando-se nela, cada criatura no solo da área deve fazer uma salvaguarda de Destreza. Se falhar, a criatura ficará caída.</p>
<p>Esta magia pode ter efeitos adicionais, dependendo do terreno na área, conforme determinado pelo DM.</p>
<p><strong>Fissuras</strong>. Fissuras se abrem por toda a área da magia no início de seu próximo turno, após você ter conjurado a magia. Um total de 1d6 fissuras se abrem em locais escolhidos pelo DM. Cada uma possui 1d10 x 3 metros [10 ft.] de profundidade, 3 metros [10 ft.] de largura, e estendem-se de uma borda da área da magia até o lado oposto. Uma criatura em pé em um lugar onde a fissura se abre deve ser bem-sucedida em uma salvaguarda de Destreza ou cairá nela.Uma criatura bem-sucedida move-se com a borda da fissura quando esta se abre.</p>
<p>Uma fissura que se abre debaixo de uma estrutura provoca automaticamente o seu colapso (veja a seguir).</p>
<p><strong>Estruturas</strong>. Assim que você conjura a magia e no começo de cada um dos seus turnos, enquanto a magia durar, o tremor causa 50 pontos de dano contundente em qualquer estrutura em contato com o chão na área atingida. Se uma estrutura chegar a 0 pontos de vida, ela entra em colapso e, potencialmente, provoca danos às criaturas próximas. Uma criatura dentro da metade da distância da altura da estrutura deve fazer uma salvaguarda de Destreza. Se falhar, sofre 5d6 pontos de dano contundente, fica caída e soterrada nos escombros, exigindo um teste de Força com CD 20 (Atletismo) como uma ação para escapar. O DM pode ajustar a CD para mais ou para menos, dependendo da natureza dos escombros. Com um teste bem-sucedido, a criatura sofre metade do dano e não fica caída ou soterrada.</p>`,source:"LdJ pg. 286",material:"uma pitada de sujeira, um pedaço de rocha e um pedaço de argila",name:"Terremoto"},Demiplane:{description:"<p>Você cria uma porta de sombras em uma superfície sólida e plana, à sua vista e dentro do alcance da magia. A porta é grande o suficiente para permitir que uma criatura Média passe sem impedimento. Quando aberta, a porta leva para um semiplano que parece ser um quarto vazio, com 9 metros [30 ft.] em cada dimensão, feito de madeira ou pedra. Quando a magia termina, a porta desaparece e quaisquer criaturas ou objetos dentro do semiplano ficam presos ali, já que a porta também desaparece do outro lado.</p><p>Todas as vezes que conjurar esta magia, você pode criar um novo semiplano ou fazer a porta de sombras se conectar a um semiplano que tenha criado em uma conjuração anterior desta magia. Além disso, se você conhecer a natureza e o conteúdo de um semiplano criado por uma conjuração desta magia por outra criatura, você pode fazer a porta de sombras se conectar a esse semiplano e não ao seu.</p>",source:"LdJ pg. 279",name:"Semiplano"},"Protection from Evil and Good":{description:`<p>Enquanto a magia durar, uma criatura voluntária tocada por você passa a ter proteção contra certos tipos de criaturas: aberrações, celestiais, elementais, feéricos, ínferos e mortos-vivos.</p>
<p>A proteção concede vários benefícios. Criaturas destes tipos têm desvantagem nas jogadas de ataque contra o alvo. O alvo não pode ser amedrontado, enfeitiçado ou possuído por elas. Se o alvo já estiver amedrontado, enfeitiçado ou possuído por estas criaturas, ele terá vantagem sobre qualquer nova salvaguarda contra o efeito relevante.</p>`,source:"LdJ pg. 271",material:"água benta ou pó de prata e ferro, que a magia consome",name:"Proteção Contra o Bem e o Mal"},"Magic Circle":{description:`<p>Você cria um cilindro de 3 metros de raio e 6 metros de altura [10-foot-radius, 20-foot-tall cylinder] feito de energia mágica, centrado em um ponto no solo à sua vista e no alcance da magia. Runas brilhantes aparecem onde quer que o cilindro toque, seja o solo ou outra superfície.</p>
<p>Escolha um ou mais dentre os seguintes tipos de criaturas: celestiais, elementais, feéricos, ínferos ou mortos-vivos. O círculo afeta criaturas do(s) tipo(s) escolhido(s) dos seguintes modos:</p>
<ul>
<li>A criatura não pode entrar voluntariamente no cilindro por meios não-mágicos. Caso tente usar teleporte ou viagem interplanar para fazê-lo, ela precisa primeiro ser bem-sucedida em uma salvaguarda de Carisma.</li>
<li>A criatura tem desvantagem nas jogadas de ataque contra alvos dentro do cilindro.</li>
<li>Alvos dentro do cilindro não podem ser amedrontados, enfeitiçados ou possuídos pela criatura.</li>
</ul>
<p>Ao conjurar esta magia, você pode escolher que ela funcione na direção reversa, evitando que uma criatura do tipo especificado saia do cilindro, protegendo alvos fora dele.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, a duração aumenta em 1 hora para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 224",material:"água benta ou prata e ferro em pó valendo no mínimo 100 PO, os quais a magia consome",name:"Círculo Mágico"},"Move Earth":{description:`<p>Escolha uma área de terreno não maior do que 12 metros [40 ft.] de lado no alcance da magia. Você pode remodelar terra, areia ou argila na área, da maneira que quiser e enquanto a magia durar. Você pode aumentar ou diminuir as elevações da área, criar ou encher um fosso, erguer ou achatar uma muralha ou formar um pilar. A extensão das alterações não pode exceder metade da maior dimensão da área. Sendo assim, caso afete um quadrado de 12 metros [40 ft.], você pode criar um pilar de até 6 metros [20 ft.] de altura, erguer ou abaixar elevações de até 6 metros [20 ft.] no quadrado, cavar um fosso de até 6 metros [20 ft.] e daí por diante. As mudanças levam 10 minutos para sejam totalmente concluídas.</p>
<p>Ao final de cada 10 minutos concentrado na magia, você pode escolher uma nova área de terreno para afetar.</p>
<p>Como a transformação no terreno ocorre lentamente, criaturas na área normalmente não ficam presas nem sofrem dano pela movimentação do solo.</p>
<p>Esta magia não pode manipular rocha natural ou construções de pedra. Pedras e estruturas se movimentam para se acomodar ao novo terreno. Se a maneira como você mudar o terreno causar a instabilidade de estruturas na área, elas podem colapsar.</p>
<p>Da mesma forma, esta magia não afeta diretamente o crescimento de plantas. A terra movida carrega as plantas junto com ela.</p>`,source:"LdJ pg. 260",material:"uma lâmina de ferro e uma pequena sacola contendo uma mistura de solos - argila, terra e areia",name:"Mover Terra"},"Conjure Fey":{description:`<p>Você invoca um feérico com nível de desafio 6 ou menor, ou um espírito feérico que assume a forma de uma fera de nível de desafio 6 ou menor. Ele surge em um espaço desocupado à sua vista, no alcance da magia, desaparecendo ao atingir 0 pontos de vida ou ao término da magia.</p>
<p>O feérico é amistoso com você e seus companheiros enquanto a magia durar. Jogue a iniciativa para a criatura, que tem seus próprios turnos. Ela obedece a qualquer comando verbal que você lhe dê (não requer ação sua), desde que isso não viole o alinhamento dela. Caso não seja dado comando algum à criatura feérica, ela apenas se defende de seres hostis, não executando outras ações.</p>
<p>Caso a sua concentração seja quebrada, o feérico não desaparece. Em vez disso, você perde o controle sobre a criatura feérica, que se torna hostil para com você e seus companheiros. Um feérico descontrolado não pode ser dispensado, porém desaparece 1 hora após você o ter invocado. O DM fornece as estatísticas da criatura feérica.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 7º círculo ou superior, o nível de desafio aumenta em 1 para cada círculo do espaço acima do 6º.</p>`,source:"LdJ pg. 251",name:"Invocar Feérico"},Fly:{description:`<p>Você toca uma criatura voluntária. O alvo ganha um deslocamento de voo de 18 metros [60 ft.] enquanto a magia durar. Ao término da magia, caso o alvo ainda esteja no ar, ele cai, a menos que possa parar a queda.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia utilizando um espaço de magia de 4º círculo ou superior, você pode escolher uma criatura alvo adicional para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 289",material:"uma pena da asa de qualquer pássaro",name:"Voo"},Slow:{description:`<p>Você altera o tempo ao redor para até seis criaturas à sua escolha em um cubo de 12 metros [40-foot cube] no alcance da magia. Cada alvo deve ser bem-sucedido em uma salvaguarda de Sabedoria ou sofre os efeitos enquanto a magia durar.</p>
<p>Um alvo afetado tem seu deslocamento reduzido à metade, tem uma penalidade de -2 em sua CA e salvaguardas de Destreza, e não pode usar reações. No turno dele, ele pode usar uma ação ou ação bônus, mas não ambas. A despeito dos atributos ou dos itens mágicos de uma criatura, ela não pode fazer mais do que um ataque corpo a corpo ou à distância durante o turno dela.</p>
<p>Se a criatura tentar conjurar uma magia com um tempo de conjuração de 1 ação, jogue 1d20. Em um resultado de 11 ou mais, a magia não tem efeito até o próximo turno da criatura, e ela deve usar sua ação naquele turno para completar a magia. Se não puder, a magia é desperdiçada.</p>
<p>Uma criatura afetada por esta magia faz uma nova salvaguarda de Sabedoria no final de cada um dos turnos dela. Em um sucesso,o efeito se encerra sobre ela.</p>`,source:"LdJ pg. 252",material:"uma gota de melaço",name:"Lentidão"},"Guards and Wards":{description:`<p>Você cria uma defesa que protege até 225 metros quadrados [2.500 square feet] de área útil (uma área quadrada de 15 metros [50 ft.] de lado, ou cem quadrados de 1,5 metro [5 ft.], ou 25 quadrados de 3 metros [10 ft.]). A área defendida pode ter até 6 metros [20 ft.] de altura e assumir a forma que você desejar. Você pode defender várias secções de uma fortaleza, dividindo a área entre elas na medida em que puder andar em cada área contígua, enquanto está conjurando a magia.</p>
<p>Ao conjurar esta magia, você pode especificar os indiví­duos que não são afetados por um ou por todos os efeitos. Você também pode especificar uma senha que, dita em voz alta, torna imune aos efeitos aquele que a proferir.</p>
<p>Ao conjurar Proteger Fortaleza trate a área defendida como sendo alvo dos seguintes efeitos:</p>
<p><strong>Corredores</strong>. Um nevoeiro preenche todos os corredores defendidos, tornando-os fortemente obscurecidos. Além disso, em cada interseção ou passagem que ofereça uma escolha de direção, há uma chance de 50 por cento de uma criatura, que não seja você, acreditar que segue na direção oposta à que escolheu.</p>
<p><strong>Portas</strong>. Todas as portas da área protegida são bloqueadas magicamente, como se estivessem seladas pela magia Tranca Arcana. Além disso, você pode cobrir até dez portas com uma ilusão (equivalente à função objeto ilusório da magia Ilusão Menor), para fazer com que se pareçam como seções contínuas da parede.</p>
<p><strong>Escadas</strong>. Teias preenchem todas as escadas da área defendida, de cima a baixo, como a magia Teia. Essas teias voltam a crescer em 10 minutos se forem queimadas ou arrancadas enquanto a magia Proteger Fortaleza durar.</p>
<p><strong>Outros Efeitos Mágicos</strong>. Você pode colocar, à sua escolha, um dos seguintes efeitos mágicos dentro da área defendida.</p>
<ul>
<li>Luzes Dançantes em quatro corredores. Você pode definir um programa simples que as luzes repetirão enquanto a magia Proteger Fortaleza durar.</li>
<li>Boca Encantada em dois locais.</li>
<li>Núvem Fétida em dois locais. Os vapores aparecem nos lugares que você designar; eles retornam dentro de 10 minutos se dispersados pelo vento, enquanto a magia Proteger Fortaleza durar.</li>
<li>Uma Lufada de Vento soprando constantemente em um corredor ou aposento.</li>
<li>Sugestão em um lugar. Você deve selecionar uma área de 1,5 metro [5 ft.] quadrado, e qualquer criatura que entrar ou passar através dessa área recebe a sugestão mentalmente.</li>
</ul>
<p>Toda a área defendida irradia magia. Uma conjuração bem-sucedida de Dissipar Magia sobre determinado efeito remove apenas esse efeito.</p>
<p>Você pode criar uma estrutura permanentemente protegida e defendida ao conjurar esta magia nela, todos os dias, durante um ano.</p>`,source:"LdJ pg. 271",material:"incenso queimando, uma pequena porção de enxofre e óleo, um cordão com nós atados, uma pequena quantidade de sangue de tríbulo brutal e uma pequena haste de prata no valor mínimo de 10 PO",name:"Proteger Fortaleza"},Shield:{description:"<p>Uma barreira de força mágica invisível surge e protege você. Até o início de seu próximo turno, você terá +5 na CA, incluindo contra o ataque que disparou a reação, e você não sofre dano de Mísseis Mágicos.</p>",source:"LdJ pg. 240",name:"Égide"},Suggestion:{description:`<p>Você sugere um curso de ação (limitado a uma sentença ou duas) e influencia magicamente uma criatura à sua vista no alcance da magia e que possa lhe ouvir e compreender. Criaturas que não podem ser enfeitiçadas são imunes a este efeito. A sugestão precisa ser dita de uma forma que faça o curso de ação parecer razoável. Pedir à criatura que se esfaqueie, jogue-se contra uma lança, imole-se ou faça algum outro ato evidentemente danoso, automaticamente cancela o efeito da magia.</p>
<p>O alvo deve fazer uma salvaguarda de Sabedoria. Se falhar, ele segue os atos sugeridos da melhor forma possível, segundo suas habilidades. A continuidade dos atos será feita enquanto a magia durar. Se a atividade sugerida pode ser completada em um período menor, a magia se encerra quando o sujeito termina aquilo que lhe foi sugerido.</p>
<p>Também podem ser especificadas condições que disparam uma atividade especial enquanto estiver dentro da duração da magia. Por exemplo, pode ser sugerido que uma cavaleira dê sua montaria ao primeiro mendigo que ela encontrar. Se a condição não for preenchida antes do fim dos efeitos, a atividade não é concluída.</p>
<p>Se você ou qualquer de seus companheiros causarem dano ao alvo, a magia se encerra.</p>`,source:"LdJ pg. 282",material:"uma língua de uma cobra e um pouco de favo de mel ou uma gota de óleo adocicado",name:"Sugestão"},Reincarnate:{description:`<p>Você toca um humanoide morto ou um pedaço de um humanoide morto. Contanto que a criatura não esteja morta há mais de 10 dias, a magia forma um novo corpo adulto para ela e convoca sua alma a entrar no corpo. Se a alma da criatura não estiver livre ou disposta para tal, a magia falha.</p>
<p>A magia molda um novo corpo para a criatura habitar, o que pode causar uma mudança de raça da criatura. O DM joga um d100 e consulta a tabela a seguir para determinar que forma a criatura assume quando restaurada à vida, ou o DM escolhe uma forma.</p>
<table border="1">
<tbody>
<tr>
<td><span style="text-decoration: underline;"><strong>d100</strong></span></td>
<td><span style="text-decoration: underline;"><strong>Raça</strong></span></td>
</tr>
<tr>
<td>01-04</td>
<td>Anão da Colina</td>
</tr>
<tr>
<td>05-13</td>
<td>Anão da Montanha</td>
</tr>
<tr>
<td>14-21</td>
<td>Draconato</td>
</tr>
<tr>
<td>22-25</td>
<td>Elfo, Alto</td>
</tr>
<tr>
<td>26-34</td>
<td>Elfo Obscuro (drow)</td>
</tr>
<tr>
<td>35-42</td>
<td>Elfo Silvestre</td>
</tr>
<tr>
<td>43-46</td>
<td>Gnomo dos Bosques</td>
</tr>
<tr>
<td>47-52</td>
<td>Gnomo das Rochas</td>
</tr>
<tr>
<td>53-56</td>
<td>Humano</td>
</tr>
<tr>
<td>57-60</td>
<td>Meio-elfo</td>
</tr>
<tr>
<td>61-68</td>
<td>Meio-orc</td>
</tr>
<tr>
<td>69-76</td>
<td>Pequenino Pé-Ligeiro</td>
</tr>
<tr>
<td>77-96</td>
<td>Pequenino Robusto</td>
</tr>
<tr>
<td>97-00</td>
<td>Tiferino</td>
</tr>
</tbody>
</table>
<p>A criatura reencarnada recorda sua vida e experiências anteriores. Ela mantém as capacidades que tinha em sua forma original, exceto pela mudança de sua raça original para a nova e dos seus traços raciais, obviamente.</p>`,source:"LdJ pg. 275",material:"óleos raros e unguentos no valor mínimo de 1.000 PO, que a magia consome",name:"Reencarnar"},"Expeditious Retreat":{description:"<p>Esta magia permite que você se mova em um ritmo incrível. Ao conjurá-la, e depois com uma ação bônus em cada um dos seus turnos até a magia se encerrar, você pode executar a ação Correr.</p>",source:"LdJ pg. 278",name:"Retirada Acelerada"},Fireball:{description:`<p>Um rastro brilhante lampeja do seu dedo apontado para um local à sua escolha e no alcance da magia, onde desabrocha com um estrondo grave em uma explosão de chamas. Cada criatura em uma esfera com raio de 6 metros [20-foot-radius sphere], centrada naquele ponto, deve fazer uma salvaguarda de Destreza. Se falhar, sofre 8d6 pontos de dano ígneo, ou metade do dano em caso de sucesso.</p>
<p>O fogo se alastra, contornando os cantos. Ele incendeia objetos inflamáveis na área que não estejam sendo usados ou carregados.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d6 para cada círculo do espaço acima do 3º.</p>`,source:"LdJ pg. 220",material:"uma pequena bola de guano de morcego e enxofre",name:"Bola de Fogo"},"Blindness/Deafness":{description:`<p>Você pode cegar ou ensurdecer um inimigo. Escolha um alvo à sua vista e que esteja no alcance desta magia. Ele deve fazer uma salvaguarda de Constituição. Se falhar, fica cego ou surdo (à sua escolha) enquanto a magia durar. No final de cada um dos turnos dele, o alvo pode realizar uma salvaguarda de Constituição. Se for bem-sucedido, a magia se encerra.</p>
<p><strong>Em Círculos Superiores.</strong> Ao conjurar esta magia usando um espaço de magia de 3º círculo ou superior, você pode atingir uma criatura adicional para cada círculo do espaço acima do 2º.</p>`,source:"LdJ pg. 222",name:"Cegueira/Surdez"}},so={source:"data.source",material:"data.materials.value",range:{path:"data.range",converter:"range"},target:{path:"data.target",converter:"target"}},to={label:oo,entries:ro,mapping:so},no="Bens comerciais",io={Pepper:{description:"<p>Os grãos da pimenta são pequenos frutos, ou drupas, de uma planta da pimenta, uma videira florida geralmente conhecida como Pimenta-Preta. Altamente apreciada pelos chefes por sua versatilidade, pode ser utilizada por aventureiras quando moída. </p>",source:"LdJ pg. 157",name:"Pimenta"},Silver:{description:`<p>A prata há muito é apreciada por sua natureza não reativa e facilidade com que pode ser moldada nas mais finas decorações, adornos e, claro, usada como moeda.</p>
<p>A prata raramente é encontrada em sua forma nativa em pepitas. Normalmente é encontrado misturado com outras substâncias como enxofre ou cloro, em minérios ou como uma liga com o ouro. A prata superficial pode ser encontrada, mas é muito mais comumente extraída no subsolo. A mineração de prata é lucrativa e pode inspirar corridas de prata.</p>`,source:"LdJ pg. 157",name:"Prata"},Flour:{description:"<p>Grão que foi moído por um moleiro.</p>",source:"LdJ pg. 157",name:"Farinha"},Platinum:{description:`<p>Muito mais rara do que o ouro, a platina pode ser tratada como o pináculo da riqueza ou o vestígio de uma época passada que pode ser recebida com desconfiança ou inveja.</p>
<p>Ao contrário do ouro, a platina é quase exclusivamente extraída no subsolo.</p>`,source:"LdJ pg. 157",name:"Platina"},Linen:{description:`<p>Um metro quadrado de linho de qualidade e peso médios. Usado para muitos itens e roupas.</p>
<p>Mais duradouro que o algodão, sua durabilidade e respirabilidade o tornam particularmente valorizado em climas quentes.</p>
<p>
Existem diferentes tipos de linho, com tramas mais leves começando em 6 onças por jarda quadrada e o restante indo até 15 onças.</p>`,source:"LdJ pg. 157",name:"Linho"},Gold:{description:`<p>O ouro é o rei da moeda para muitas civilizações. Normalmente mais comum do que os gostos da platina, mas nem de longe tão comum quanto outros metais como o ferro, ocupa um lugar ideal em raridade e não reatividade.</p>
<p>Ao contrário da prata, o ouro pode ser encontrado mais facilmente na superfície. Tanto a mineração de superfície quanto a subterrânea podem ser extremamente lucrativas. A corrida do ouro pode e tem sido fonte de grande felicidade e grande tragédia</p>`,source:"LdJ pg. 157",name:"Ouro"},Saffron:{description:'<p>Provavelmente um dos ingredientes mais valorizados do mundo, o açafrão é tão caro porque exige muito trabalho para ser produzido. Feito de Crocus sativus, ou mais comumente o "açafrão crocus", são necessárias 80.000 flores de açafrão para produzir 1 quilo de açafrão. Por peso, vale mais do que ouro. Apreciado pelos mais exigentes cozinheiros e boticários por seu aromatizante e supostos benefícios à saúde.</p>',source:"LdJ pg. 157",name:"Açafrão"},Sheep:{description:`<p>Uma criatura útil para pequenos fazendeiros e habitantes das terras altas, embora não sejam tão ágeis quanto cabras, eles têm a valiosa habilidade de ser tosados ​​todos os anos, dando às pessoas uma fonte de roupas, tapetes e mantas para camas e cadeiras. Seu tamanho maior também significa que são mais valiosos para o abate.</p>
<p>Dependendo da raça, ovelhas adultas podem variar de 100 libras até 350 libras.</p>`,source:"LdJ pg. 157",name:"Ovelha"},Cinnamon:{description:"<p>Retirado da casca interna da canela, uma especiaria popular, embora um pouco mais rara, entre os chefs de todo o mundo. Adorado por crianças quando combinado com açúcar para fazer diversos tipos de guloseimas.</p>",source:"LdJ pg. 157",name:"Canela"},Iron:{description:"<p>Frequentemente, o burro de carga do metalúrgico, o ferro é apreciado por sua relativa abundância e facilidade de obtenção. O ferro da superfície pode ser encontrado em meteoros caídos e xenólitos, mas é muito mais comumente extraído no subsolo. No entanto, deve-se ter cuidado, caso contrário a ferrugem terá seu preço.</p>",source:"LdJ pg. 157",name:"Ferro"},Ginger:{description:`<p>Especiaria que vem da raiz fresca ou seca da planta de gengibre "Zingiber officinale". Pertence à mesma família da cúrcuma e do cardamomo</p>
<p>Valorizado por chefs e doces, amado por crianças e por aqueles com gostos mais apimentados.</p>`,source:"LdJ pg. 157",name:"Gengibre"},Cow:{description:`<p>Uma criatura para fazendeiros de grandes áreas, as vacas requerem grandes áreas de pasto plano, o que significa que não são tão comuns quanto outros animais. No entanto, eles vivem mais e dão muito mais leite. Eles também são uma fonte de couro muito mais durável, menos sujeito a rachaduras e resistente ao calor e sujeira.</p>
<p>Dependendo do gênero e da raça, as vacas adultas podem pesar entre 1.000 e 1.800 libras.</p>`,source:"LdJ pg. 157",name:"Vaca"},Ox:{description:"<p>Essencialmente, um novilho especialmente criado para carne ou leite, que atingiu a idade de 5 anos. Essas bestas de carga pesadas podem puxar ou carregar seu próprio peso corporal. Usados para uma infinidade de tarefas, como transportar carroças, debulhar grãos, alimentar máquinas que irrigam ou moem grãos e até mesmo quando montados, os bois são criaturas altamente apreciadas pelos trabalhadores de vários setores.</p>",source:"LdJ pg. 157",name:"Boi"},Wheat:{description:"<p>Um ingrediente comum para pão, cerveja e muito mais; ele é a base de alimentação para pessoas onde suas terras são abertas e relativamente planas, o clima é temperado e a área segura o suficiente para os agricultores trabalharem.</p>",source:"LdJ pg. 157",name:"Trigo"},Pig:{description:`<p>Uma criatura para fazendeiros de área média ou grande, os porcos se reproduzem de forma relativamente rápida e são criaturas robustas que fornecem todos os tipos de possibilidades de cozimento para o cozinheiro, principalmente o bacon. Sua pele também pode ser usada como couro mais barato, mas é menos resistente a rasgos em comparação com cordeiro ou cabra. Os porcos também são a fonte de banha.</p>
<p>A maioria dos porcos pesa entre 113 e 122kg no abate, dão cortes comerciais ideais, e gordura média.</p>`,source:"LdJ pg. 157",name:"Porco"},Cotton:{description:`<p>Um metro quadrado de algodão de qualidade e peso médio. Usado para muitos itens e roupas.</p>
<p>Muito mais leve, mais confortável e mais fácil de trabalhar do que a tela; no entanto, a cultura mais delicada significa que é mais cara e mais difícil de se obter.</p>`,source:"LdJ pg. 157",name:"Algodão"},Copper:{description:`<p>Cobiçado por construtores navais, alquimistas, joalheiros e chefs, o cobre é normalmente extraído da superfície, mas existe mineração subterrânea quando as fontes da superfície estão esgotadas ou não são encontradas.</p>
<p>Embora possa ser usado como armadura, é muito melhor misturado com estanho para fazer uma liga de bronze muito mais superior para necessidades militares.</p>`,source:"LdJ pg. 157",name:"Cobre"},Salt:{description:"<p>Apreciado por chefs como tempero e conservante de suprimentos onde o álcool ou vinagre são indesejados.</p>",source:"LdJ pg. 157",name:"Sal"},Silk:{description:`<p>Um metro quadrado de seda de qualidade de peso médio. Usado para itens e roupas.</p>
<p>O melhor e mais desejável dos tecidos comuns, a seda é a mais leve. A maioria das sedas pesa entre 56g e 113g por metro quadrado. Quanto mais pesada a seda, maior a qualidade, mais durável e mais opaco é a cor.</p>`,source:"LdJ pg. 157",name:"Seda"},Chicken:{description:"<p>A fonte dos omeletes e asas de frango, a galinha média adulta pesa entre 2 e 4kg. </p>",source:"LdJ pg. 157",name:"Galinha"},Canvas:{description:`<p>Um metro quadrado de tela de qualidade e peso médio. Usado para muitos itens e roupas.</p>
<p>Classificados de 1 a 12, quanto menor o número, melhor será a qualidade e maior será o peso. A tela de qualidade nº 1 pesa cerca de 700g por metro quadrado, enquanto a mais fraca e mais leve nº 12 pode pesar apenas 300g.</p>`,source:"LdJ pg. 157",name:"Tela"},Goat:{description:`<p>Uma criatura útil para pequenos fazendeiros e habitantes das terras altas, as cabras são eficazes em evitar que os prados cresçam demais, ao mesmo tempo que fornecem leite, queijo e, eventualmente, peles e carne.</p>
<p>Dependendo da raça, as cabras adultas podem variar de 20 até 130kg.</p>`,source:"LdJ pg. 157",name:"Cabra"},Cloves:{description:`<p>Um tempero forte apreciado por chefs e destiladores, que funciona bem para dar sabor a carnes e guisados, molhos ricos, bebidas quentes como cidra e chá chai, pão, queijos e sobremesas doces como tortas e bolos de frutas.</p>
<p>O cravo ou cravo-da-índia (Syzygium aromaticum), é uma árvore perene da família da murta, eles são secos e possuem botão fechado.</p>`,source:"LdJ pg. 157",name:"Cravo"}},uo={source:"data.source",weight:{path:"data.weight",converter:"weight"}},mo={label:no,entries:io,mapping:uo};function co(a){let e=a[1].find(a[2]).label+"",o;return{c(){o=B(e)},m(r,s){D(r,o,s)},p(r,s){s&1&&e!==(e=r[1].find(r[2]).label+"")&&X(o,e)},d(r){r&&P(o)}}}function po(a){let e,o,r,s,t,n,d,l,i,z,h,S,q,C,b,A,v,E,m,g,c,j;o=new ue({props:{$$slots:{default:[co]},$$scope:{ctx:a}}});function Q(V){a[3](V)}let Z={items:a[1]};return a[0]!==void 0&&(Z.value=a[0]),s=new pe({props:Z}),ta.push(()=>ja(s,"value",Q,a[0])),i=new He({}),S=new ua({props:{data:Xe,label:"Classes"}}),b=new ua({props:{data:eo,label:"Raças"}}),E=new ua({props:{data:to,label:"Magias"}}),c=new ua({props:{data:mo,label:"Comércio"}}),{c(){e=f("div"),I(o.$$.fragment),r=x(),I(s.$$.fragment),n=x(),d=f("div"),l=f("div"),I(i.$$.fragment),z=x(),h=f("div"),I(S.$$.fragment),q=x(),C=f("div"),I(b.$$.fragment),A=x(),v=f("div"),I(E.$$.fragment),m=x(),g=f("div"),I(c.$$.fragment),u(l,"class","item svelte-18gp8wx"),_(l,"active",a[0]==="/iniciativa"),u(h,"class","item svelte-18gp8wx"),_(h,"active",a[0]==="/classes"),u(C,"class","item svelte-18gp8wx"),_(C,"active",a[0]==="/racas"),u(v,"class","item svelte-18gp8wx"),_(v,"active",a[0]==="/magias"),u(g,"class","item svelte-18gp8wx"),_(g,"active",a[0]==="/tradegoods"),u(d,"class","content svelte-18gp8wx"),u(e,"class","page svelte-18gp8wx")},m(V,y){D(V,e,y),U(o,e,null),p(e,r),U(s,e,null),p(e,n),p(e,d),p(d,l),U(i,l,null),p(d,z),p(d,h),U(S,h,null),p(d,q),p(d,C),U(b,C,null),p(d,A),p(d,v),U(E,v,null),p(d,m),p(d,g),U(c,g,null),j=!0},p(V,[y]){const na={};y&17&&(na.$$scope={dirty:y,ctx:V}),o.$set(na);const Y={};!t&&y&1&&(t=!0,Y.value=V[0],Aa(()=>t=!1)),s.$set(Y),(!j||y&1)&&_(l,"active",V[0]==="/iniciativa"),(!j||y&1)&&_(h,"active",V[0]==="/classes"),(!j||y&1)&&_(C,"active",V[0]==="/racas"),(!j||y&1)&&_(v,"active",V[0]==="/magias"),(!j||y&1)&&_(g,"active",V[0]==="/tradegoods")},i(V){j||(L(o.$$.fragment,V),L(s.$$.fragment,V),L(i.$$.fragment,V),L(S.$$.fragment,V),L(b.$$.fragment,V),L(E.$$.fragment,V),L(c.$$.fragment,V),j=!0)},o(V){J(o.$$.fragment,V),J(s.$$.fragment,V),J(i.$$.fragment,V),J(S.$$.fragment,V),J(b.$$.fragment,V),J(E.$$.fragment,V),J(c.$$.fragment,V),j=!1},d(V){V&&P(e),F(o),F(s),F(i),F(S),F(b),F(E),F(c)}}}function lo(a,e,o){let r="/iniciativa";const s=[{slug:"/iniciativa",label:"Iniciativa"},{slug:"/classes",label:"Classes"},{slug:"/racas",label:"Raças"},{slug:"/magias",label:"Magias"},{slug:"/tradegoods",label:"Comércio"}],t=d=>d.slug===r;function n(d){r=d,o(0,r)}return[r,s,t,n]}class go extends R{constructor(e){super(),k(this,e,lo,po,T,{})}}function vo(a){let e,o,r;return o=new go({}),{c(){e=f("main"),I(o.$$.fragment)},m(s,t){D(s,e,t),U(o,e,null),r=!0},p:N,i(s){r||(L(o.$$.fragment,s),r=!0)},o(s){J(o.$$.fragment,s),r=!1},d(s){s&&P(e),F(o)}}}class fo extends R{constructor(e){super(),k(this,e,null,vo,T,{})}}new fo({target:document.getElementById("app")});
