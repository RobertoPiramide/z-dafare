var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();console.log("Parto");"serviceWorker"in navigator?navigator.serviceWorker.register("sw.js").then(e=>{console.log("SW Registered!"),console.log(e)}).catch(e=>{console.log("SW Registration Failed!"),console.log(e)}):console.log("NO serviceWorker!");function S(){}function se(e){return e()}function H(){return Object.create(null)}function A(e){e.forEach(se)}function oe(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function pe(e){return Object.keys(e).length===0}function ge(e,...t){if(e==null){for(const s of t)s(void 0);return S}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function _e(e,t,n){e.$$.on_destroy.push(ge(t,n))}function be(e,t,n){return e.set(n),t}function b(e,t){e.appendChild(t)}function ce(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function ie(e){return document.createTextNode(e)}function j(){return ie(" ")}function L(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function J(e,t){e.value=t??""}let G;function T(e){G=e}const C=[],X=[];let N=[];const Y=[],ke=Promise.resolve();let F=!1;function $e(){F||(F=!0,ke.then(re))}function K(e){N.push(e)}const q=new Set;let I=0;function re(){if(I!==0)return;const e=G;do{try{for(;I<C.length;){const t=C[I];I++,T(t),we(t.$$)}}catch(t){throw C.length=0,I=0,t}for(T(null),C.length=0,I=0;X.length;)X.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];q.has(n)||(q.add(n),n())}N.length=0}while(C.length);for(;Y.length;)Y.pop()();F=!1,q.clear(),T(e)}function we(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}function ve(e){const t=[],n=[];N.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),N=t}const B=new Set;let xe;function Q(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Ee(e,t,n,s){if(e&&e.o){if(B.has(e))return;B.add(e),xe.c.push(()=>{B.delete(e)}),e.o(t)}}function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Se(e,t){e.d(1),t.delete(e.key)}function je(e,t,n,s,o,i,u,f,l,c,m,d){let h=e.length,g=i.length,r=h;const _={};for(;r--;)_[e[r].key]=r;const k=[],O=new Map,a=new Map,y=[];for(r=g;r--;){const p=d(o,i,r),v=n(p);let x=u.get(v);x?y.push(()=>x.p(p,t)):(x=c(v,p),x.c()),O.set(v,k[r]=x),v in _&&a.set(v,Math.abs(r-_[v]))}const w=new Set,Z=new Set;function W(p){Q(p,1),p.m(f,m),u.set(p.key,p),m=p.first,g--}for(;h&&g;){const p=k[g-1],v=e[h-1],x=p.key,M=v.key;p===v?(m=p.first,h--,g--):O.has(M)?!u.has(x)||w.has(x)?W(p):Z.has(M)?h--:a.get(x)>a.get(M)?(Z.add(x),W(p)):(w.add(M),h--):(l(v,u),h--)}for(;h--;){const p=e[h];O.has(p.key)||l(p,u)}for(;g;)W(k[g-1]);return A(y),k}function Ae(e){e&&e.c()}function le(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),K(()=>{const i=e.$$.on_mount.map(se).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...i):A(i),e.$$.on_mount=[]}),o.forEach(K)}function ue(e,t){const n=e.$$;n.fragment!==null&&(ve(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(C.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,s,o,i,u=null,f=[-1]){const l=G;T(e);const c=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:H(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};u&&u(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(d,h,...g)=>{const r=g.length?g[0]:h;return c.ctx&&o(c.ctx[d],c.ctx[d]=r)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](r),m&&Oe(e,d)),h}):[],c.update(),m=!0,A(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const d=me(t.target);c.fragment&&c.fragment.l(d),d.forEach(V)}else c.fragment&&c.fragment.c();t.intro&&Q(e.$$.fragment),le(e,t.target,t.anchor),re()}T(l)}class fe{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){ue(this,1),this.$destroy=S}$on(t,n){if(!oe(n))return S;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);const z=[];function ze(e,t=S){let n;const s=new Set;function o(f){if(U(e,f)&&(e=f,n)){const l=!z.length;for(const c of s)c[1](),z.push(c,e);if(l){for(let c=0;c<z.length;c+=2)z[c][0](z[c+1]);z.length=0}}}function i(f){o(f(e))}function u(f,l=S){const c=[f,l];return s.add(c),s.size===1&&(n=t(o,i)||S),f(e),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}const P=ze([]),Ce={apiKey:"AIzaSyAxMyRQcO8vVr3si8jNjc8Zi_gzS5E3RPg",authDomain:"caffe-ebdc4.firebaseapp.com",databaseURL:"https://caffe-ebdc4.firebaseio.com",projectId:"caffe-ebdc4",storageBucket:"caffe-ebdc4.appspot.com",messagingSenderId:"350305420197",appId:"1:350305420197:web:c707358054dbba7bb9de4c"};firebase.initializeApp(Ce);const R=firebase.firestore(),Le=async()=>{R.collection("tasks").orderBy("done").orderBy("text").get().then(e=>{e.forEach(t=>{const n=t.data(),o=t.id,i=n.text,u=n.done;P.update(f=>[...f,{id:o,text:i,done:u}])})})};Le();let Ne=async e=>{const t=await R.collection("tasks").add({text:e,done:!1});P.update(n=>[...n,{id:t.id,text:e,done:!1}])};const Te=async e=>{R.collection("tasks").doc(e).get().then(n=>{if(n.exists){const o=n.data().done;R.collection("tasks").doc(e).update({done:!o})}else console.log("Il documento non esiste")}).catch(n=>{console.log("Errore durante il recupero del documento:",n)})},Pe=async e=>{R.collection("tasks").doc(e).delete()};function te(e,t,n){const s=e.slice();return s[11]=t[n],s[12]=t,s[13]=n,s}function ne(e,t){let n,s,o,i=t[11].text+"",u,f,l,c,m,d;function h(){t[5].call(s,t[12],t[13])}function g(){return t[6](t[11])}function r(){return t[7](t[11])}return{key:e,first:null,c(){n=E("li"),s=E("input"),o=j(),u=ie(i),f=j(),l=E("button"),l.textContent="Elimina",c=j(),$(s,"type","checkbox"),$(l,"class","btn btn-error btn-sm svelte-1jz5vbu"),$(n,"class","svelte-1jz5vbu"),this.first=n},m(_,k){ce(_,n,k),b(n,s),s.checked=t[11].done,b(n,o),b(n,u),b(n,f),b(n,l),b(n,c),m||(d=[L(s,"change",h),L(s,"change",g),L(l,"click",r)],m=!0)},p(_,k){t=_,k&2&&(s.checked=t[11].done),k&2&&i!==(i=t[11].text+"")&&ye(u,i)},d(_){_&&V(n),m=!1,A(d)}}}function Re(e){let t,n,s,o,i=[],u=new Map,f,l,c,m,d,h,g,r,_,k=ee(e[1]);const O=a=>a[11].id;for(let a=0;a<k.length;a+=1){let y=te(e,k,a),w=O(y);u.set(w,i[a]=ne(w,y))}return{c(){t=E("main"),n=E("h1"),n.textContent="Lista dei Task",s=j(),o=E("ul");for(let a=0;a<i.length;a+=1)i[a].c();f=j(),l=E("div"),c=E("input"),m=j(),d=E("button"),d.textContent="Aggiungi",h=j(),g=E("div"),g.textContent=`${Me}`,$(n,"class","svelte-1jz5vbu"),$(c,"type","text"),$(c,"class","input input-bordered input-primary"),$(c,"placeholder","Aggiungi un nuovo task..."),$(d,"class","btn btn-active btn-accent"),$(l,"id","input-div"),$(l,"class","svelte-1jz5vbu"),$(t,"class","svelte-1jz5vbu")},m(a,y){ce(a,t,y),b(t,n),b(t,s),b(t,o);for(let w=0;w<i.length;w+=1)i[w]&&i[w].m(o,null);b(t,f),b(t,l),b(l,c),J(c,e[0]),b(l,m),b(l,d),b(t,h),b(t,g),r||(_=[L(c,"input",e[8]),L(c,"keydown",e[9]),L(d,"click",e[10])],r=!0)},p(a,[y]){y&26&&(k=ee(a[1]),i=je(i,y,O,1,a,k,u,o,Se,ne,null,te)),y&1&&c.value!==a[0]&&J(c,a[0])},i:S,o:S,d(a){a&&V(t);for(let y=0;y<i.length;y+=1)i[y].d();r=!1,A(_)}}}let Me="";function Be(e,t,n){let s;_e(e,P,r=>n(1,s=r));let o="";function i(r){r==""&&(r=o),Ne(r),n(0,o="")}function u(r){be(P,s=s.filter(_=>_.id!==r),s),Pe(r)}function f(r){Te(r)}function l(r,_){r[_].done=this.checked,P.set(s)}const c=r=>f(r.id),m=r=>u(r.id);function d(){o=this.value,n(0,o)}return[o,s,i,u,f,l,c,m,d,r=>r.key==="Enter"&&i(r.target.value),()=>i("")]}class We extends fe{constructor(t){super(),ae(this,t,Be,Re,U,{})}}function De(e){let t,n;return t=new We({}),{c(){Ae(t.$$.fragment)},m(s,o){le(t,s,o),n=!0},p:S,i(s){n||(Q(t.$$.fragment,s),n=!0)},o(s){Ee(t.$$.fragment,s),n=!1},d(s){ue(t,s)}}}class qe extends fe{constructor(t){super(),ae(this,t,null,De,U,{})}}new qe({target:document.getElementById("app")});
