function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/intro.html-D9dwEpHI.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/index.html-D5LnkeFh.js","assets/CRNN_blog.html-Cb6b7OD4.js","assets/cucollection_blog.html-DLix_uWp.js","assets/cuda_blog.html-CBZ1Rex-.js","assets/distributed_embeddings_blog.html-Cw7oBr-d.js","assets/howToBuildThisBlog.html-Dxn0xRj3.js","assets/hugectr_blog.html-BrFINEES.js","assets/hugectr_src_blog.html-d9qgPAFk.js","assets/index.html-DI16Z1C4.js","assets/torchrec_cn_embedding_note.html-YEVLbIAq.js","assets/warpcore_blog.html-Cz_5IJvA.js","assets/c___note.html-BYbhq9Nq.js","assets/deep_learning.html-b-b3zdJE.js","assets/linux_command.html-G4dNyKFL.js","assets/LLM.html-9hu1pKVY.js","assets/loss.html-CJxfnubw.js","assets/markdown.html-DJcQDvEC.js","assets/metrics.html-DKJGeFbq.js","assets/PLAN_Z.html-B9yJBwFA.js","assets/precision.html-B_dd_MdY.js","assets/index.html-D1wTsZoY.js","assets/torchrec_note.html-B-i_O6mg.js","assets/uml_note.html-IaIR5y-b.js","assets/index.html-Cgwhpoct.js","assets/404.html-DYVdKbdY.js","assets/index.html-1jQ9-Uww.js","assets/index.html-BEDqx9YQ.js","assets/index.html-BltlhrdK.js","assets/index.html-C0yITs6x.js","assets/index.html-maJbTduo.js","assets/index.html-BPQ9UPx_.js","assets/index.html-BQB6pLKG.js","assets/index.html-Be8HnZrW.js","assets/index.html-DzX6xTUq.js","assets/index.html-BxZ6QV-X.js","assets/index.html-Dl0UMf-I.js","assets/index.html-xBRd_OsE.js","assets/index.html-BTkUZ9Ws.js","assets/index.html-D57wSldI.js","assets/index.html-Dqr1foaP.js","assets/index.html-CSGzSmAq.js","assets/index.html-BnBAmG4V.js","assets/index.html-d2G8e39M.js","assets/index.html-CpCodvQl.js","assets/index.html-hEB5WJuD.js","assets/index.html-DX2Ijbyk.js","assets/index.html-Da6Vp1bl.js","assets/index.html-CGr0tdaC.js","assets/index.html-D5fEOhj5.js","assets/index.html-C1vK6J6C.js","assets/index.html-DgD_mq8U.js","assets/index.html-Demc7CPi.js","assets/index.html-D31kcDwM.js","assets/index.html-COTqqkDG.js","assets/index.html-DtZDr4LJ.js","assets/index.html-BYDcpP-H.js","assets/index.html-QpKn8zOy.js","assets/index.html-Fd1nQRc_.js","assets/index.html-BEVLRn0k.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const xt={},Tn=[],oe=()=>{},xp=()=>!1,xs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),No=t=>t.startsWith("onUpdate:"),Pt=Object.assign,zo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ep=Object.prototype.hasOwnProperty,ct=(t,e)=>Ep.call(t,e),nt=Array.isArray,Zn=t=>va(t)==="[object Map]",Cp=t=>va(t)==="[object Set]",st=t=>typeof t=="function",zt=t=>typeof t=="string",ga=t=>typeof t=="symbol",$t=t=>t!==null&&typeof t=="object",ai=t=>($t(t)||st(t))&&st(t.then)&&st(t.catch),Tp=Object.prototype.toString,va=t=>Tp.call(t),$p=t=>va(t).slice(8,-1),Lp=t=>va(t)==="[object Object]",Bo=t=>zt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$n=Do(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ap=/-(\w)/g,ue=ba(t=>t.replace(Ap,(e,n)=>n?n.toUpperCase():"")),Sp=/\B([A-Z])/g,Hn=ba(t=>t.replace(Sp,"-$1").toLowerCase()),Es=ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=ba(t=>t?`on${Es(t)}`:""),Je=(t,e)=>!Object.is(t,e),Da=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ra=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ip=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pp=t=>{const e=zt(t)?Number(t):NaN;return isNaN(e)?t:e};let Il;const oi=()=>Il||(Il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(t){if(nt(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],a=zt(s)?Dp(s):Ho(s);if(a)for(const o in a)e[o]=a[o]}return e}else if(zt(t)||$t(t))return t}const Rp=/;(?![^(]*\))/g,Op=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Dp(t){const e={};return t.replace(Mp,"").split(Rp).forEach(n=>{if(n){const s=n.split(Op);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Fo(t){let e="";if(zt(t))e=t;else if(nt(t))for(let n=0;n<t.length;n++){const s=Fo(t[n]);s&&(e+=s+" ")}else if($t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zp=Do(Np);function li(t){return!!t||t===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Bp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Hp(t,e=Xt){e&&e.active&&e.effects.push(t)}function ri(){return Xt}function Fp(t){Xt&&Xt.cleanups.push(t)}let cn;class jo{constructor(e,n,s,a){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hp(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(jp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),hn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ke,n=cn;try{return Ke=!0,cn=this,this._runnings++,Pl(this),this.fn()}finally{Rl(this),this._runnings--,cn=n,Ke=e}}stop(){var e;this.active&&(Pl(this),Rl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function jp(t){return t.value}function Pl(t){t._trackId++,t._depsLength=0}function Rl(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ii(t.deps[e],t);t.deps.length=t._depsLength}}function ii(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ke=!0,io=0;const ci=[];function fn(){ci.push(Ke),Ke=!1}function hn(){const t=ci.pop();Ke=t===void 0?!0:t}function Vo(){io++}function qo(){for(io--;!io&&co.length;)co.shift()()}function ui(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&ii(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const co=[];function pi(t,e,n){Vo();for(const s of t.keys()){let a;s._dirtyLevel<e&&(a??(a=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(a??(a=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&co.push(s.scheduler)))}qo()}const di=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ia=new WeakMap,un=Symbol(""),uo=Symbol("");function Yt(t,e,n){if(Ke&&cn){let s=ia.get(t);s||ia.set(t,s=new Map);let a=s.get(n);a||s.set(n,a=di(()=>s.delete(n))),ui(cn,a)}}function Se(t,e,n,s,a,o){const l=ia.get(t);if(!l)return;let r=[];if(e==="clear")r=[...l.values()];else if(n==="length"&&nt(t)){const c=Number(s);l.forEach((u,p)=>{(p==="length"||!ga(p)&&p>=c)&&r.push(u)})}else switch(n!==void 0&&r.push(l.get(n)),e){case"add":nt(t)?Bo(n)&&r.push(l.get("length")):(r.push(l.get(un)),Zn(t)&&r.push(l.get(uo)));break;case"delete":nt(t)||(r.push(l.get(un)),Zn(t)&&r.push(l.get(uo)));break;case"set":Zn(t)&&r.push(l.get(un));break}Vo();for(const c of r)c&&pi(c,4);qo()}function Vp(t,e){var n;return(n=ia.get(t))==null?void 0:n.get(e)}const qp=Do("__proto__,__v_isRef,__isVue"),fi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ga)),Ol=Up();function Up(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=lt(this);for(let o=0,l=this.length;o<l;o++)Yt(s,"get",o+"");const a=s[e](...n);return a===-1||a===!1?s[e](...n.map(lt)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fn(),Vo();const s=lt(this)[e].apply(this,n);return qo(),hn(),s}}),t}function Gp(t){const e=lt(this);return Yt(e,"has",t),e.hasOwnProperty(t)}class hi{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const a=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(a?o?od:bi:o?vi:gi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const l=nt(e);if(!a){if(l&&ct(Ol,n))return Reflect.get(Ol,n,s);if(n==="hasOwnProperty")return Gp}const r=Reflect.get(e,n,s);return(ga(n)?fi.has(n):qp(n))||(a||Yt(e,"get",n),o)?r:Bt(r)?l&&Bo(n)?r:r.value:$t(r)?a?mn(r):Cs(r):r}}class mi extends hi{constructor(e=!1){super(!1,e)}set(e,n,s,a){let o=e[n];if(!this._isShallow){const c=Rn(o);if(!ca(s)&&!Rn(s)&&(o=lt(o),s=lt(s)),!nt(e)&&Bt(o)&&!Bt(s))return c?!1:(o.value=s,!0)}const l=nt(e)&&Bo(n)?Number(n)<e.length:ct(e,n),r=Reflect.set(e,n,s,a);return e===lt(a)&&(l?Je(s,o)&&Se(e,"set",n,s):Se(e,"add",n,s)),r}deleteProperty(e,n){const s=ct(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&s&&Se(e,"delete",n,void 0),a}has(e,n){const s=Reflect.has(e,n);return(!ga(n)||!fi.has(n))&&Yt(e,"has",n),s}ownKeys(e){return Yt(e,"iterate",nt(e)?"length":un),Reflect.ownKeys(e)}}class Wp extends hi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kp=new mi,Yp=new Wp,Jp=new mi(!0),Uo=t=>t,ya=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,s=!1){t=t.__v_raw;const a=lt(t),o=lt(e);n||(Je(e,o)&&Yt(a,"get",e),Yt(a,"get",o));const{has:l}=ya(a),r=s?Uo:n?Ko:cs;if(l.call(a,e))return r(t.get(e));if(l.call(a,o))return r(t.get(o));t!==a&&t.get(e)}function Vs(t,e=!1){const n=this.__v_raw,s=lt(n),a=lt(t);return e||(Je(t,a)&&Yt(s,"has",t),Yt(s,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function qs(t,e=!1){return t=t.__v_raw,!e&&Yt(lt(t),"iterate",un),Reflect.get(t,"size",t)}function Ml(t){t=lt(t);const e=lt(this);return ya(e).has.call(e,t)||(e.add(t),Se(e,"add",t,t)),this}function Dl(t,e){e=lt(e);const n=lt(this),{has:s,get:a}=ya(n);let o=s.call(n,t);o||(t=lt(t),o=s.call(n,t));const l=a.call(n,t);return n.set(t,e),o?Je(e,l)&&Se(n,"set",t,e):Se(n,"add",t,e),this}function Nl(t){const e=lt(this),{has:n,get:s}=ya(e);let a=n.call(e,t);a||(t=lt(t),a=n.call(e,t)),s&&s.call(e,t);const o=e.delete(t);return a&&Se(e,"delete",t,void 0),o}function zl(){const t=lt(this),e=t.size!==0,n=t.clear();return e&&Se(t,"clear",void 0,void 0),n}function Us(t,e){return function(s,a){const o=this,l=o.__v_raw,r=lt(l),c=e?Uo:t?Ko:cs;return!t&&Yt(r,"iterate",un),l.forEach((u,p)=>s.call(a,c(u),c(p),o))}}function Gs(t,e,n){return function(...s){const a=this.__v_raw,o=lt(a),l=Zn(o),r=t==="entries"||t===Symbol.iterator&&l,c=t==="keys"&&l,u=a[t](...s),p=n?Uo:e?Ko:cs;return!e&&Yt(o,"iterate",c?uo:un),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:r?[p(d[0]),p(d[1])]:p(d),done:f}},[Symbol.iterator](){return this}}}}function De(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qp(){const t={get(o){return js(this,o)},get size(){return qs(this)},has:Vs,add:Ml,set:Dl,delete:Nl,clear:zl,forEach:Us(!1,!1)},e={get(o){return js(this,o,!1,!0)},get size(){return qs(this)},has:Vs,add:Ml,set:Dl,delete:Nl,clear:zl,forEach:Us(!1,!0)},n={get(o){return js(this,o,!0)},get size(){return qs(this,!0)},has(o){return Vs.call(this,o,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Us(!0,!1)},s={get(o){return js(this,o,!0,!0)},get size(){return qs(this,!0)},has(o){return Vs.call(this,o,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Gs(o,!1,!1),n[o]=Gs(o,!0,!1),e[o]=Gs(o,!1,!0),s[o]=Gs(o,!0,!0)}),[t,n,e,s]}const[Xp,Zp,td,ed]=Qp();function Go(t,e){const n=e?t?ed:td:t?Zp:Xp;return(s,a,o)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?s:Reflect.get(ct(n,a)&&a in s?n:s,a,o)}const nd={get:Go(!1,!1)},sd={get:Go(!1,!0)},ad={get:Go(!0,!1)},gi=new WeakMap,vi=new WeakMap,bi=new WeakMap,od=new WeakMap;function ld(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rd(t){return t.__v_skip||!Object.isExtensible(t)?0:ld($p(t))}function Cs(t){return Rn(t)?t:Wo(t,!1,Kp,nd,gi)}function yi(t){return Wo(t,!1,Jp,sd,vi)}function mn(t){return Wo(t,!0,Yp,ad,bi)}function Wo(t,e,n,s,a){if(!$t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=a.get(t);if(o)return o;const l=rd(t);if(l===0)return t;const r=new Proxy(t,l===2?s:n);return a.set(t,r),r}function Ln(t){return Rn(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function ca(t){return!!(t&&t.__v_isShallow)}function ki(t){return Ln(t)||Rn(t)}function lt(t){const e=t&&t.__v_raw;return e?lt(e):t}function _i(t){return Object.isExtensible(t)&&ra(t,"__v_skip",!0),t}const cs=t=>$t(t)?Cs(t):t,Ko=t=>$t(t)?mn(t):t;class wi{constructor(e,n,s,a){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new jo(()=>e(this._value),()=>ts(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const e=lt(this);return(!e._cacheable||e.effect.dirty)&&Je(e._value,e._value=e.effect.run())&&ts(e,4),Yo(e),e.effect._dirtyLevel>=2&&ts(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function id(t,e,n=!1){let s,a;const o=st(t);return o?(s=t,a=oe):(s=t.get,a=t.set),new wi(s,a,o||!a,n)}function Yo(t){var e;Ke&&cn&&(t=lt(t),ui(cn,(e=t.dep)!=null?e:t.dep=di(()=>t.dep=void 0,t instanceof wi?t:void 0)))}function ts(t,e=4,n){t=lt(t);const s=t.dep;s&&pi(s,e)}function Bt(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return xi(t,!1)}function At(t){return xi(t,!0)}function xi(t,e){return Bt(t)?t:new cd(t,e)}class cd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:lt(e),this._value=n?e:cs(e)}get value(){return Yo(this),this._value}set value(e){const n=this.__v_isShallow||ca(e)||Rn(e);e=n?e:lt(e),Je(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:cs(e),ts(this,4))}}function pn(t){return Bt(t)?t.value:t}const ud={get:(t,e,n)=>pn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const a=t[e];return Bt(a)&&!Bt(n)?(a.value=n,!0):Reflect.set(t,e,n,s)}};function Ei(t){return Ln(t)?t:new Proxy(t,ud)}class pd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>Yo(this),()=>ts(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Jo(t){return new pd(t)}class dd{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vp(lt(this._object),this._key)}}class fd{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Fn(t,e,n){return Bt(t)?t:st(t)?new fd(t):$t(t)&&arguments.length>1?hd(t,e,n):Q(t)}function hd(t,e,n){const s=t[e];return Bt(s)?s:new dd(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ye(t,e,n,s){try{return s?t(...s):t()}catch(a){Ts(a,e,n)}}function re(t,e,n,s){if(st(t)){const o=Ye(t,e,n,s);return o&&ai(o)&&o.catch(l=>{Ts(l,e,n)}),o}const a=[];for(let o=0;o<t.length;o++)a.push(re(t[o],e,n,s));return a}function Ts(t,e,n,s=!0){const a=e?e.vnode:null;if(e){let o=e.parent;const l=e.proxy,r=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](t,l,r)===!1)return}o=o.parent}const c=e.appContext.config.errorHandler;if(c){Ye(c,null,10,[t,l,r]);return}}md(t,n,a,s)}function md(t,e,n,s=!0){console.error(t)}let us=!1,po=!1;const Ft=[];let we=0;const An=[];let Ve=null,on=0;const Ci=Promise.resolve();let Qo=null;function Ze(t){const e=Qo||Ci;return t?e.then(this?t.bind(this):t):e}function gd(t){let e=we+1,n=Ft.length;for(;e<n;){const s=e+n>>>1,a=Ft[s],o=ps(a);o<t||o===t&&a.pre?e=s+1:n=s}return e}function ka(t){(!Ft.length||!Ft.includes(t,us&&t.allowRecurse?we+1:we))&&(t.id==null?Ft.push(t):Ft.splice(gd(t.id),0,t),Ti())}function Ti(){!us&&!po&&(po=!0,Qo=Ci.then($i))}function vd(t){const e=Ft.indexOf(t);e>we&&Ft.splice(e,1)}function bd(t){nt(t)?An.push(...t):(!Ve||!Ve.includes(t,t.allowRecurse?on+1:on))&&An.push(t),Ti()}function Bl(t,e,n=us?we+1:0){for(;n<Ft.length;n++){const s=Ft[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Ft.splice(n,1),n--,s()}}}function ua(t){if(An.length){const e=[...new Set(An)].sort((n,s)=>ps(n)-ps(s));if(An.length=0,Ve){Ve.push(...e);return}for(Ve=e,on=0;on<Ve.length;on++)Ve[on]();Ve=null,on=0}}const ps=t=>t.id==null?1/0:t.id,yd=(t,e)=>{const n=ps(t)-ps(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $i(t){po=!1,us=!0,Ft.sort(yd);try{for(we=0;we<Ft.length;we++){const e=Ft[we];e&&e.active!==!1&&Ye(e,null,14)}}finally{we=0,Ft.length=0,ua(),us=!1,Qo=null,(Ft.length||An.length)&&$i()}}function kd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||xt;let a=n;const o=e.startsWith("update:"),l=o&&e.slice(7);if(l&&l in s){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:d,trim:f}=s[p]||xt;f&&(a=n.map(h=>zt(h)?h.trim():h)),d&&(a=n.map(Ip))}let r,c=s[r=Ma(e)]||s[r=Ma(ue(e))];!c&&o&&(c=s[r=Ma(Hn(e))]),c&&re(c,t,6,a);const u=s[r+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[r])return;t.emitted[r]=!0,re(u,t,6,a)}}function Li(t,e,n=!1){const s=e.emitsCache,a=s.get(t);if(a!==void 0)return a;const o=t.emits;let l={},r=!1;if(!st(t)){const c=u=>{const p=Li(u,e,!0);p&&(r=!0,Pt(l,p))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!o&&!r?($t(t)&&s.set(t,null),null):(nt(o)?o.forEach(c=>l[c]=null):Pt(l,o),$t(t)&&s.set(t,l),l)}function _a(t,e){return!t||!xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(t,e[0].toLowerCase()+e.slice(1))||ct(t,Hn(e))||ct(t,e))}let le=null,Ai=null;function pa(t){const e=le;return le=t,Ai=t&&t.type.__scopeId||null,e}function _d(t,e=le,n){if(!e||t._n)return t;const s=(...a)=>{s._d&&Ql(-1);const o=pa(e);let l;try{l=t(...a)}finally{pa(o),s._d&&Ql(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Na(t){const{type:e,vnode:n,proxy:s,withProxy:a,props:o,propsOptions:[l],slots:r,attrs:c,emit:u,render:p,renderCache:d,data:f,setupState:h,ctx:g,inheritAttrs:w}=t;let k,b;const E=pa(t);try{if(n.shapeFlag&4){const T=a||s,M=T;k=he(p.call(M,T,d,o,h,f,g)),b=c}else{const T=e;k=he(T.length>1?T(o,{attrs:c,slots:r,emit:u}):T(o,null)),b=e.props?c:wd(c)}}catch(T){os.length=0,Ts(T,t,1),k=Ot(xe)}let y=k;if(b&&w!==!1){const T=Object.keys(b),{shapeFlag:M}=y;T.length&&M&7&&(l&&T.some(No)&&(b=xd(b,l)),y=Qe(y,b))}return n.dirs&&(y=Qe(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),k=y,pa(E),k}const wd=t=>{let e;for(const n in t)(n==="class"||n==="style"||xs(n))&&((e||(e={}))[n]=t[n]);return e},xd=(t,e)=>{const n={};for(const s in t)(!No(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ed(t,e,n){const{props:s,children:a,component:o}=t,{props:l,children:r,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Hl(s,l,u):!!l;if(c&8){const p=e.dynamicProps;for(let d=0;d<p.length;d++){const f=p[d];if(l[f]!==s[f]&&!_a(u,f))return!0}}}else return(a||r)&&(!r||!r.$stable)?!0:s===l?!1:s?l?Hl(s,l,u):!0:!!l;return!1}function Hl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let a=0;a<s.length;a++){const o=s[a];if(e[o]!==t[o]&&!_a(n,o))return!0}return!1}function Cd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Si="components";function ie(t,e){return $d(Si,t,!0,e)||t}const Td=Symbol.for("v-ndc");function $d(t,e,n=!0,s=!1){const a=le||Nt;if(a){const o=a.type;if(t===Si){const r=w1(o,!1);if(r&&(r===e||r===ue(e)||r===Es(ue(e))))return o}const l=Fl(a[t]||o[t],e)||Fl(a.appContext[t],e);return!l&&s?o:l}}function Fl(t,e){return t&&(t[e]||t[ue(e)]||t[Es(ue(e))])}const Ld=t=>t.__isSuspense;function Ii(t,e){e&&e.pendingBranch?nt(t)?e.effects.push(...t):e.effects.push(t):bd(t)}const Ad=Symbol.for("v-scx"),Sd=()=>kt(Ad);function Xo(t,e){return Zo(t,null,e)}const Ws={};function pt(t,e,n){return Zo(t,e,n)}function Zo(t,e,{immediate:n,deep:s,flush:a,once:o,onTrack:l,onTrigger:r}=xt){if(e&&o){const C=e;e=(...D)=>{C(...D),M()}}const c=Nt,u=C=>s===!0?C:En(C,s===!1?1:void 0);let p,d=!1,f=!1;if(Bt(t)?(p=()=>t.value,d=ca(t)):Ln(t)?(p=()=>u(t),d=!0):nt(t)?(f=!0,d=t.some(C=>Ln(C)||ca(C)),p=()=>t.map(C=>{if(Bt(C))return C.value;if(Ln(C))return u(C);if(st(C))return Ye(C,c,2)})):st(t)?e?p=()=>Ye(t,c,2):p=()=>(h&&h(),re(t,c,3,[g])):p=oe,e&&s){const C=p;p=()=>En(C())}let h,g=C=>{h=y.onStop=()=>{Ye(C,c,4),h=y.onStop=void 0}},w;if(Ss)if(g=oe,e?n&&re(e,c,3,[p(),f?[]:void 0,g]):p(),a==="sync"){const C=Sd();w=C.__watcherHandles||(C.__watcherHandles=[])}else return oe;let k=f?new Array(t.length).fill(Ws):Ws;const b=()=>{if(!(!y.active||!y.dirty))if(e){const C=y.run();(s||d||(f?C.some((D,P)=>Je(D,k[P])):Je(C,k)))&&(h&&h(),re(e,c,3,[C,k===Ws?void 0:f&&k[0]===Ws?[]:k,g]),k=C)}else y.run()};b.allowRecurse=!!e;let E;a==="sync"?E=b:a==="post"?E=()=>Gt(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),E=()=>ka(b));const y=new jo(p,oe,E),T=ri(),M=()=>{y.stop(),T&&zo(T.effects,y)};return e?n?b():k=y.run():a==="post"?Gt(y.run.bind(y),c&&c.suspense):y.run(),w&&w.push(M),M}function Id(t,e,n){const s=this.proxy,a=zt(t)?t.includes(".")?Pi(s,t):()=>s[t]:t.bind(s,s);let o;st(e)?o=e:(o=e.handler,n=e);const l=As(this),r=Zo(a,o.bind(s),n);return l(),r}function Pi(t,e){const n=e.split(".");return()=>{let s=t;for(let a=0;a<n.length&&s;a++)s=s[n[a]];return s}}function En(t,e,n=0,s){if(!$t(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Bt(t))En(t.value,e,n,s);else if(nt(t))for(let a=0;a<t.length;a++)En(t[a],e,n,s);else if(Cp(t)||Zn(t))t.forEach(a=>{En(a,e,n,s)});else if(Lp(t))for(const a in t)En(t[a],e,n,s);return t}function _e(t,e,n,s){const a=t.dirs,o=e&&e.dirs;for(let l=0;l<a.length;l++){const r=a[l];o&&(r.oldValue=o[l].value);let c=r.dir[s];c&&(fn(),re(c,n,8,[t.el,r,t,e]),hn())}}const qe=Symbol("_leaveCb"),Ks=Symbol("_enterCb");function Ri(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bt(()=>{t.isMounted=!0}),zi(()=>{t.isUnmounting=!0}),t}const ne=[Function,Array],Oi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ne,onEnter:ne,onAfterEnter:ne,onEnterCancelled:ne,onBeforeLeave:ne,onLeave:ne,onAfterLeave:ne,onLeaveCancelled:ne,onBeforeAppear:ne,onAppear:ne,onAfterAppear:ne,onAppearCancelled:ne},Pd={name:"BaseTransition",props:Oi,setup(t,{slots:e}){const n=Ls(),s=Ri();return()=>{const a=e.default&&tl(e.default(),!0);if(!a||!a.length)return;let o=a[0];if(a.length>1){for(const f of a)if(f.type!==xe){o=f;break}}const l=lt(t),{mode:r}=l;if(s.isLeaving)return za(o);const c=jl(o);if(!c)return za(o);const u=ds(c,l,s,n);fs(c,u);const p=n.subTree,d=p&&jl(p);if(d&&d.type!==xe&&!ln(c,d)){const f=ds(d,l,s,n);if(fs(d,f),r==="out-in")return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},za(o);r==="in-out"&&c.type!==xe&&(f.delayLeave=(h,g,w)=>{const k=Mi(s,d);k[String(d.key)]=d,h[qe]=()=>{g(),h[qe]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Rd=Pd;function Mi(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ds(t,e,n,s){const{appear:a,mode:o,persisted:l=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:w,onAppear:k,onAfterAppear:b,onAppearCancelled:E}=e,y=String(t.key),T=Mi(n,t),M=(P,Y)=>{P&&re(P,s,9,Y)},C=(P,Y)=>{const I=Y[1];M(P,Y),nt(P)?P.every(q=>q.length<=1)&&I():P.length<=1&&I()},D={mode:o,persisted:l,beforeEnter(P){let Y=r;if(!n.isMounted)if(a)Y=w||r;else return;P[qe]&&P[qe](!0);const I=T[y];I&&ln(t,I)&&I.el[qe]&&I.el[qe](),M(Y,[P])},enter(P){let Y=c,I=u,q=p;if(!n.isMounted)if(a)Y=k||c,I=b||u,q=E||p;else return;let R=!1;const Z=P[Ks]=Ct=>{R||(R=!0,Ct?M(q,[P]):M(I,[P]),D.delayedLeave&&D.delayedLeave(),P[Ks]=void 0)};Y?C(Y,[P,Z]):Z()},leave(P,Y){const I=String(t.key);if(P[Ks]&&P[Ks](!0),n.isUnmounting)return Y();M(d,[P]);let q=!1;const R=P[qe]=Z=>{q||(q=!0,Y(),Z?M(g,[P]):M(h,[P]),P[qe]=void 0,T[I]===t&&delete T[I])};T[I]=t,f?C(f,[P,R]):R()},clone(P){return ds(P,e,n,s)}};return D}function za(t){if($s(t))return t=Qe(t),t.children=null,t}function jl(t){return $s(t)?t.children?t.children[0]:void 0:t}function fs(t,e){t.shapeFlag&6&&t.component?fs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tl(t,e=!1,n){let s=[],a=0;for(let o=0;o<t.length;o++){let l=t[o];const r=n==null?l.key:String(n)+String(l.key!=null?l.key:o);l.type===Zt?(l.patchFlag&128&&a++,s=s.concat(tl(l.children,e,r))):(e||l.type!==xe)&&s.push(r!=null?Qe(l,{key:r}):l)}if(a>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function z(t,e){return st(t)?Pt({name:t.name},e,{setup:t}):t}const es=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Od(t){st(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:a=200,timeout:o,suspensible:l=!0,onError:r}=t;let c=null,u,p=0;const d=()=>(p++,c=null,f()),f=()=>{let h;return c||(h=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),r)return new Promise((w,k)=>{r(g,()=>w(d()),()=>k(g),p+1)});throw g}).then(g=>h!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return z({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return u},setup(){const h=Nt;if(u)return()=>Ba(u,h);const g=E=>{c=null,Ts(E,h,13,!s)};if(l&&h.suspense||Ss)return f().then(E=>()=>Ba(E,h)).catch(E=>(g(E),()=>s?Ot(s,{error:E}):null));const w=Q(!1),k=Q(),b=Q(!!a);return a&&setTimeout(()=>{b.value=!1},a),o!=null&&setTimeout(()=>{if(!w.value&&!k.value){const E=new Error(`Async component timed out after ${o}ms.`);g(E),k.value=E}},o),f().then(()=>{w.value=!0,h.parent&&$s(h.parent.vnode)&&(h.parent.effect.dirty=!0,ka(h.parent.update))}).catch(E=>{g(E),k.value=E}),()=>{if(w.value&&u)return Ba(u,h);if(k.value&&s)return Ot(s,{error:k.value});if(n&&!b.value)return Ot(n)}}})}function Ba(t,e){const{ref:n,props:s,children:a,ce:o}=e.vnode,l=Ot(t,s,a);return l.ref=n,l.ce=o,delete e.vnode.ce,l}const $s=t=>t.type.__isKeepAlive;function Md(t,e){Di(t,"a",e)}function Dd(t,e){Di(t,"da",e)}function Di(t,e,n=Nt){const s=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(wa(e,s,n),n){let a=n.parent;for(;a&&a.parent;)$s(a.parent.vnode)&&Nd(s,e,n,a),a=a.parent}}function Nd(t,e,n,s){const a=wa(e,t,s,!0);jn(()=>{zo(s[e],a)},n)}function wa(t,e,n=Nt,s=!1){if(n){const a=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{if(n.isUnmounted)return;fn();const r=As(n),c=re(e,n,t,l);return r(),hn(),c});return s?a.unshift(o):a.push(o),o}}const Pe=t=>(e,n=Nt)=>(!Ss||t==="sp")&&wa(t,(...s)=>e(...s),n),zd=Pe("bm"),bt=Pe("m"),Bd=Pe("bu"),Ni=Pe("u"),zi=Pe("bum"),jn=Pe("um"),Hd=Pe("sp"),Fd=Pe("rtg"),jd=Pe("rtc");function Vd(t,e=Nt){wa("ec",t,e)}const fo=t=>t?Xi(t)?al(t)||t.proxy:fo(t.parent):null,ns=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fo(t.parent),$root:t=>fo(t.root),$emit:t=>t.emit,$options:t=>el(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ka(t.update)}),$nextTick:t=>t.n||(t.n=Ze.bind(t.proxy)),$watch:t=>Id.bind(t)}),Ha=(t,e)=>t!==xt&&!t.__isScriptSetup&&ct(t,e),qd={get({_:t},e){const{ctx:n,setupState:s,data:a,props:o,accessCache:l,type:r,appContext:c}=t;let u;if(e[0]!=="$"){const h=l[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return a[e];case 4:return n[e];case 3:return o[e]}else{if(Ha(s,e))return l[e]=1,s[e];if(a!==xt&&ct(a,e))return l[e]=2,a[e];if((u=t.propsOptions[0])&&ct(u,e))return l[e]=3,o[e];if(n!==xt&&ct(n,e))return l[e]=4,n[e];ho&&(l[e]=0)}}const p=ns[e];let d,f;if(p)return e==="$attrs"&&Yt(t,"get",e),p(t);if((d=r.__cssModules)&&(d=d[e]))return d;if(n!==xt&&ct(n,e))return l[e]=4,n[e];if(f=c.config.globalProperties,ct(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:a,ctx:o}=t;return Ha(a,e)?(a[e]=n,!0):s!==xt&&ct(s,e)?(s[e]=n,!0):ct(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:a,propsOptions:o}},l){let r;return!!n[l]||t!==xt&&ct(t,l)||Ha(e,l)||(r=o[0])&&ct(r,l)||ct(s,l)||ct(ns,l)||ct(a.config.globalProperties,l)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ct(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vl(t){return nt(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ho=!0;function Ud(t){const e=el(t),n=t.proxy,s=t.ctx;ho=!1,e.beforeCreate&&ql(e.beforeCreate,t,"bc");const{data:a,computed:o,methods:l,watch:r,provide:c,inject:u,created:p,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:w,deactivated:k,beforeDestroy:b,beforeUnmount:E,destroyed:y,unmounted:T,render:M,renderTracked:C,renderTriggered:D,errorCaptured:P,serverPrefetch:Y,expose:I,inheritAttrs:q,components:R,directives:Z,filters:Ct}=e;if(u&&Gd(u,s,null),l)for(const tt in l){const W=l[tt];st(W)&&(s[tt]=W.bind(n))}if(a){const tt=a.call(n,n);$t(tt)&&(t.data=Cs(tt))}if(ho=!0,o)for(const tt in o){const W=o[tt],St=st(W)?W.bind(n,n):st(W.get)?W.get.bind(n,n):oe,be=!st(W)&&st(W.set)?W.set.bind(n):oe,ee=_({get:St,set:be});Object.defineProperty(s,tt,{enumerable:!0,configurable:!0,get:()=>ee.value,set:Mt=>ee.value=Mt})}if(r)for(const tt in r)Bi(r[tt],s,n,tt);if(c){const tt=st(c)?c.call(n):c;Reflect.ownKeys(tt).forEach(W=>{ge(W,tt[W])})}p&&ql(p,t,"c");function U(tt,W){nt(W)?W.forEach(St=>tt(St.bind(n))):W&&tt(W.bind(n))}if(U(zd,d),U(bt,f),U(Bd,h),U(Ni,g),U(Md,w),U(Dd,k),U(Vd,P),U(jd,C),U(Fd,D),U(zi,E),U(jn,T),U(Hd,Y),nt(I))if(I.length){const tt=t.exposed||(t.exposed={});I.forEach(W=>{Object.defineProperty(tt,W,{get:()=>n[W],set:St=>n[W]=St})})}else t.exposed||(t.exposed={});M&&t.render===oe&&(t.render=M),q!=null&&(t.inheritAttrs=q),R&&(t.components=R),Z&&(t.directives=Z)}function Gd(t,e,n=oe){nt(t)&&(t=mo(t));for(const s in t){const a=t[s];let o;$t(a)?"default"in a?o=kt(a.from||s,a.default,!0):o=kt(a.from||s):o=kt(a),Bt(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function ql(t,e,n){re(nt(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bi(t,e,n,s){const a=s.includes(".")?Pi(n,s):()=>n[s];if(zt(t)){const o=e[t];st(o)&&pt(a,o)}else if(st(t))pt(a,t.bind(n));else if($t(t))if(nt(t))t.forEach(o=>Bi(o,e,n,s));else{const o=st(t.handler)?t.handler.bind(n):e[t.handler];st(o)&&pt(a,o,t)}}function el(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:a,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,r=o.get(e);let c;return r?c=r:!a.length&&!n&&!s?c=e:(c={},a.length&&a.forEach(u=>da(c,u,l,!0)),da(c,e,l)),$t(e)&&o.set(e,c),c}function da(t,e,n,s=!1){const{mixins:a,extends:o}=e;o&&da(t,o,n,!0),a&&a.forEach(l=>da(t,l,n,!0));for(const l in e)if(!(s&&l==="expose")){const r=Wd[l]||n&&n[l];t[l]=r?r(t[l],e[l]):e[l]}return t}const Wd={data:Ul,props:Gl,emits:Gl,methods:Qn,computed:Qn,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Qn,directives:Qn,watch:Yd,provide:Ul,inject:Kd};function Ul(t,e){return e?t?function(){return Pt(st(t)?t.call(this,this):t,st(e)?e.call(this,this):e)}:e:t}function Kd(t,e){return Qn(mo(t),mo(e))}function mo(t){if(nt(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?Pt(Object.create(null),t,e):e}function Gl(t,e){return t?nt(t)&&nt(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Vl(t),Vl(e??{})):e}function Yd(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const s in e)n[s]=qt(t[s],e[s]);return n}function Hi(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jd=0;function Qd(t,e){return function(s,a=null){st(s)||(s=Pt({},s)),a!=null&&!$t(a)&&(a=null);const o=Hi(),l=new WeakSet;let r=!1;const c=o.app={_uid:Jd++,_component:s,_props:a,_container:null,_context:o,_instance:null,version:E1,get config(){return o.config},set config(u){},use(u,...p){return l.has(u)||(u&&st(u.install)?(l.add(u),u.install(c,...p)):st(u)&&(l.add(u),u(c,...p))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,p){return p?(o.components[u]=p,c):o.components[u]},directive(u,p){return p?(o.directives[u]=p,c):o.directives[u]},mount(u,p,d){if(!r){const f=Ot(s,a);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),p&&e?e(f,u):t(f,u,d),r=!0,c._container=u,u.__vue_app__=c,al(f.component)||f.component.proxy}},unmount(){r&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,p){return o.provides[u]=p,c},runWithContext(u){const p=ss;ss=c;try{return u()}finally{ss=p}}};return c}}let ss=null;function ge(t,e){if(Nt){let n=Nt.provides;const s=Nt.parent&&Nt.parent.provides;s===n&&(n=Nt.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=Nt||le;if(s||ss){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ss._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&st(e)?e.call(s&&s.proxy):e}}function Xd(t,e,n,s=!1){const a={},o={};ra(o,xa,1),t.propsDefaults=Object.create(null),Fi(t,e,a,o);for(const l in t.propsOptions[0])l in a||(a[l]=void 0);n?t.props=s?a:yi(a):t.type.props?t.props=a:t.props=o,t.attrs=o}function Zd(t,e,n,s){const{props:a,attrs:o,vnode:{patchFlag:l}}=t,r=lt(a),[c]=t.propsOptions;let u=!1;if((s||l>0)&&!(l&16)){if(l&8){const p=t.vnode.dynamicProps;for(let d=0;d<p.length;d++){let f=p[d];if(_a(t.emitsOptions,f))continue;const h=e[f];if(c)if(ct(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const g=ue(f);a[g]=go(c,r,g,h,t,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{Fi(t,e,a,o)&&(u=!0);let p;for(const d in r)(!e||!ct(e,d)&&((p=Hn(d))===d||!ct(e,p)))&&(c?n&&(n[d]!==void 0||n[p]!==void 0)&&(a[d]=go(c,r,d,void 0,t,!0)):delete a[d]);if(o!==r)for(const d in o)(!e||!ct(e,d))&&(delete o[d],u=!0)}u&&Se(t,"set","$attrs")}function Fi(t,e,n,s){const[a,o]=t.propsOptions;let l=!1,r;if(e)for(let c in e){if($n(c))continue;const u=e[c];let p;a&&ct(a,p=ue(c))?!o||!o.includes(p)?n[p]=u:(r||(r={}))[p]=u:_a(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,l=!0)}if(o){const c=lt(n),u=r||xt;for(let p=0;p<o.length;p++){const d=o[p];n[d]=go(a,c,d,u[d],t,!ct(u,d))}}return l}function go(t,e,n,s,a,o){const l=t[n];if(l!=null){const r=ct(l,"default");if(r&&s===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&st(c)){const{propsDefaults:u}=a;if(n in u)s=u[n];else{const p=As(a);s=u[n]=c.call(null,e),p()}}else s=c}l[0]&&(o&&!r?s=!1:l[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function ji(t,e,n=!1){const s=e.propsCache,a=s.get(t);if(a)return a;const o=t.props,l={},r=[];let c=!1;if(!st(t)){const p=d=>{c=!0;const[f,h]=ji(d,e,!0);Pt(l,f),h&&r.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!c)return $t(t)&&s.set(t,Tn),Tn;if(nt(o))for(let p=0;p<o.length;p++){const d=ue(o[p]);Wl(d)&&(l[d]=xt)}else if(o)for(const p in o){const d=ue(p);if(Wl(d)){const f=o[p],h=l[d]=nt(f)||st(f)?{type:f}:Pt({},f);if(h){const g=Jl(Boolean,h.type),w=Jl(String,h.type);h[0]=g>-1,h[1]=w<0||g<w,(g>-1||ct(h,"default"))&&r.push(d)}}}const u=[l,r];return $t(t)&&s.set(t,u),u}function Wl(t){return t[0]!=="$"&&!$n(t)}function Kl(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Yl(t,e){return Kl(t)===Kl(e)}function Jl(t,e){return nt(e)?e.findIndex(n=>Yl(n,t)):st(e)&&Yl(e,t)?0:-1}const Vi=t=>t[0]==="_"||t==="$stable",nl=t=>nt(t)?t.map(he):[he(t)],t1=(t,e,n)=>{if(e._n)return e;const s=_d((...a)=>nl(e(...a)),n);return s._c=!1,s},qi=(t,e,n)=>{const s=t._ctx;for(const a in t){if(Vi(a))continue;const o=t[a];if(st(o))e[a]=t1(a,o,s);else if(o!=null){const l=nl(o);e[a]=()=>l}}},Ui=(t,e)=>{const n=nl(e);t.slots.default=()=>n},e1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=lt(e),ra(e,"_",n)):qi(e,t.slots={})}else t.slots={},e&&Ui(t,e);ra(t.slots,xa,1)},n1=(t,e,n)=>{const{vnode:s,slots:a}=t;let o=!0,l=xt;if(s.shapeFlag&32){const r=e._;r?n&&r===1?o=!1:(Pt(a,e),!n&&r===1&&delete a._):(o=!e.$stable,qi(e,a)),l=e}else e&&(Ui(t,e),l={default:1});if(o)for(const r in a)!Vi(r)&&l[r]==null&&delete a[r]};function fa(t,e,n,s,a=!1){if(nt(t)){t.forEach((f,h)=>fa(f,e&&(nt(e)?e[h]:e),n,s,a));return}if(es(s)&&!a)return;const o=s.shapeFlag&4?al(s.component)||s.component.proxy:s.el,l=a?null:o,{i:r,r:c}=t,u=e&&e.r,p=r.refs===xt?r.refs={}:r.refs,d=r.setupState;if(u!=null&&u!==c&&(zt(u)?(p[u]=null,ct(d,u)&&(d[u]=null)):Bt(u)&&(u.value=null)),st(c))Ye(c,r,12,[l,p]);else{const f=zt(c),h=Bt(c);if(f||h){const g=()=>{if(t.f){const w=f?ct(d,c)?d[c]:p[c]:c.value;a?nt(w)&&zo(w,o):nt(w)?w.includes(o)||w.push(o):f?(p[c]=[o],ct(d,c)&&(d[c]=p[c])):(c.value=[o],t.k&&(p[t.k]=c.value))}else f?(p[c]=l,ct(d,c)&&(d[c]=l)):h&&(c.value=l,t.k&&(p[t.k]=l))};l?(g.id=-1,Gt(g,n)):g()}}}let Ne=!1;const s1=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",a1=t=>t.namespaceURI.includes("MathML"),Ys=t=>{if(s1(t))return"svg";if(a1(t))return"mathml"},Js=t=>t.nodeType===8;function o1(t){const{mt:e,p:n,o:{patchProp:s,createText:a,nextSibling:o,parentNode:l,remove:r,insert:c,createComment:u}}=t,p=(y,T)=>{if(!T.hasChildNodes()){n(null,y,T),ua(),T._vnode=y;return}Ne=!1,d(T.firstChild,y,null,null,null),ua(),T._vnode=y,Ne&&console.error("Hydration completed but contains mismatches.")},d=(y,T,M,C,D,P=!1)=>{const Y=Js(y)&&y.data==="[",I=()=>w(y,T,M,C,D,Y),{type:q,ref:R,shapeFlag:Z,patchFlag:Ct}=T;let _t=y.nodeType;T.el=y,Ct===-2&&(P=!1,T.dynamicChildren=null);let U=null;switch(q){case On:_t!==3?T.children===""?(c(T.el=a(""),l(y),y),U=y):U=I():(y.data!==T.children&&(Ne=!0,y.data=T.children),U=o(y));break;case xe:E(y)?(U=o(y),b(T.el=y.content.firstChild,y,M)):_t!==8||Y?U=I():U=o(y);break;case as:if(Y&&(y=o(y),_t=y.nodeType),_t===1||_t===3){U=y;const tt=!T.children.length;for(let W=0;W<T.staticCount;W++)tt&&(T.children+=U.nodeType===1?U.outerHTML:U.data),W===T.staticCount-1&&(T.anchor=U),U=o(U);return Y?o(U):U}else I();break;case Zt:Y?U=g(y,T,M,C,D,P):U=I();break;default:if(Z&1)(_t!==1||T.type.toLowerCase()!==y.tagName.toLowerCase())&&!E(y)?U=I():U=f(y,T,M,C,D,P);else if(Z&6){T.slotScopeIds=D;const tt=l(y);if(Y?U=k(y):Js(y)&&y.data==="teleport start"?U=k(y,y.data,"teleport end"):U=o(y),e(T,tt,null,M,C,Ys(tt),P),es(T)){let W;Y?(W=Ot(Zt),W.anchor=U?U.previousSibling:tt.lastChild):W=y.nodeType===3?Qi(""):Ot("div"),W.el=y,T.component.subTree=W}}else Z&64?_t!==8?U=I():U=T.type.hydrate(y,T,M,C,D,P,t,h):Z&128&&(U=T.type.hydrate(y,T,M,C,Ys(l(y)),D,P,t,d))}return R!=null&&fa(R,null,C,T),U},f=(y,T,M,C,D,P)=>{P=P||!!T.dynamicChildren;const{type:Y,props:I,patchFlag:q,shapeFlag:R,dirs:Z,transition:Ct}=T,_t=Y==="input"||Y==="option";if(_t||q!==-1){Z&&_e(T,null,M,"created");let U=!1;if(E(y)){U=Gi(C,Ct)&&M&&M.vnode.props&&M.vnode.props.appear;const W=y.content.firstChild;U&&Ct.beforeEnter(W),b(W,y,M),T.el=y=W}if(R&16&&!(I&&(I.innerHTML||I.textContent))){let W=h(y.firstChild,T,y,M,C,D,P);for(;W;){Ne=!0;const St=W;W=W.nextSibling,r(St)}}else R&8&&y.textContent!==T.children&&(Ne=!0,y.textContent=T.children);if(I)if(_t||!P||q&48)for(const W in I)(_t&&(W.endsWith("value")||W==="indeterminate")||xs(W)&&!$n(W)||W[0]===".")&&s(y,W,null,I[W],void 0,void 0,M);else I.onClick&&s(y,"onClick",null,I.onClick,void 0,void 0,M);let tt;(tt=I&&I.onVnodeBeforeMount)&&se(tt,M,T),Z&&_e(T,null,M,"beforeMount"),((tt=I&&I.onVnodeMounted)||Z||U)&&Ii(()=>{tt&&se(tt,M,T),U&&Ct.enter(y),Z&&_e(T,null,M,"mounted")},C)}return y.nextSibling},h=(y,T,M,C,D,P,Y)=>{Y=Y||!!T.dynamicChildren;const I=T.children,q=I.length;for(let R=0;R<q;R++){const Z=Y?I[R]:I[R]=he(I[R]);if(y)y=d(y,Z,C,D,P,Y);else{if(Z.type===On&&!Z.children)continue;Ne=!0,n(null,Z,M,null,C,D,Ys(M),P)}}return y},g=(y,T,M,C,D,P)=>{const{slotScopeIds:Y}=T;Y&&(D=D?D.concat(Y):Y);const I=l(y),q=h(o(y),T,I,M,C,D,P);return q&&Js(q)&&q.data==="]"?o(T.anchor=q):(Ne=!0,c(T.anchor=u("]"),I,q),q)},w=(y,T,M,C,D,P)=>{if(Ne=!0,T.el=null,P){const q=k(y);for(;;){const R=o(y);if(R&&R!==q)r(R);else break}}const Y=o(y),I=l(y);return r(y),n(null,T,I,Y,M,C,Ys(I),D),Y},k=(y,T="[",M="]")=>{let C=0;for(;y;)if(y=o(y),y&&Js(y)&&(y.data===T&&C++,y.data===M)){if(C===0)return o(y);C--}return y},b=(y,T,M)=>{const C=T.parentNode;C&&C.replaceChild(y,T);let D=M;for(;D;)D.vnode.el===T&&(D.vnode.el=D.subTree.el=y),D=D.parent},E=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[p,d]}const Gt=Ii;function l1(t){return r1(t,o1)}function r1(t,e){const n=oi();n.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:l,createText:r,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:f,setScopeId:h=oe,insertStaticContent:g}=t,w=(m,v,x,A=null,L=null,N=null,F=void 0,O=null,B=!!v.dynamicChildren)=>{if(m===v)return;m&&!ln(m,v)&&(A=$(m),Mt(m,L,N,!0),m=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:S,ref:V,shapeFlag:X}=v;switch(S){case On:k(m,v,x,A);break;case xe:b(m,v,x,A);break;case as:m==null&&E(v,x,A,F);break;case Zt:R(m,v,x,A,L,N,F,O,B);break;default:X&1?M(m,v,x,A,L,N,F,O,B):X&6?Z(m,v,x,A,L,N,F,O,B):(X&64||X&128)&&S.process(m,v,x,A,L,N,F,O,B,K)}V!=null&&L&&fa(V,m&&m.ref,N,v||m,!v)},k=(m,v,x,A)=>{if(m==null)s(v.el=r(v.children),x,A);else{const L=v.el=m.el;v.children!==m.children&&u(L,v.children)}},b=(m,v,x,A)=>{m==null?s(v.el=c(v.children||""),x,A):v.el=m.el},E=(m,v,x,A)=>{[m.el,m.anchor]=g(m.children,v,x,A,m.el,m.anchor)},y=({el:m,anchor:v},x,A)=>{let L;for(;m&&m!==v;)L=f(m),s(m,x,A),m=L;s(v,x,A)},T=({el:m,anchor:v})=>{let x;for(;m&&m!==v;)x=f(m),a(m),m=x;a(v)},M=(m,v,x,A,L,N,F,O,B)=>{v.type==="svg"?F="svg":v.type==="math"&&(F="mathml"),m==null?C(v,x,A,L,N,F,O,B):Y(m,v,L,N,F,O,B)},C=(m,v,x,A,L,N,F,O)=>{let B,S;const{props:V,shapeFlag:X,transition:J,dirs:et}=m;if(B=m.el=l(m.type,N,V&&V.is,V),X&8?p(B,m.children):X&16&&P(m.children,B,null,A,L,Fa(m,N),F,O),et&&_e(m,null,A,"created"),D(B,m,m.scopeId,F,A),V){for(const gt in V)gt!=="value"&&!$n(gt)&&o(B,gt,null,V[gt],N,m.children,A,L,It);"value"in V&&o(B,"value",null,V.value,N),(S=V.onVnodeBeforeMount)&&se(S,A,m)}et&&_e(m,null,A,"beforeMount");const at=Gi(L,J);at&&J.beforeEnter(B),s(B,v,x),((S=V&&V.onVnodeMounted)||at||et)&&Gt(()=>{S&&se(S,A,m),at&&J.enter(B),et&&_e(m,null,A,"mounted")},L)},D=(m,v,x,A,L)=>{if(x&&h(m,x),A)for(let N=0;N<A.length;N++)h(m,A[N]);if(L){let N=L.subTree;if(v===N){const F=L.vnode;D(m,F,F.scopeId,F.slotScopeIds,L.parent)}}},P=(m,v,x,A,L,N,F,O,B=0)=>{for(let S=B;S<m.length;S++){const V=m[S]=O?Ue(m[S]):he(m[S]);w(null,V,v,x,A,L,N,F,O)}},Y=(m,v,x,A,L,N,F)=>{const O=v.el=m.el;let{patchFlag:B,dynamicChildren:S,dirs:V}=v;B|=m.patchFlag&16;const X=m.props||xt,J=v.props||xt;let et;if(x&&nn(x,!1),(et=J.onVnodeBeforeUpdate)&&se(et,x,v,m),V&&_e(v,m,x,"beforeUpdate"),x&&nn(x,!0),S?I(m.dynamicChildren,S,O,x,A,Fa(v,L),N):F||W(m,v,O,null,x,A,Fa(v,L),N,!1),B>0){if(B&16)q(O,v,X,J,x,A,L);else if(B&2&&X.class!==J.class&&o(O,"class",null,J.class,L),B&4&&o(O,"style",X.style,J.style,L),B&8){const at=v.dynamicProps;for(let gt=0;gt<at.length;gt++){const wt=at[gt],Dt=X[wt],de=J[wt];(de!==Dt||wt==="value")&&o(O,wt,Dt,de,L,m.children,x,A,It)}}B&1&&m.children!==v.children&&p(O,v.children)}else!F&&S==null&&q(O,v,X,J,x,A,L);((et=J.onVnodeUpdated)||V)&&Gt(()=>{et&&se(et,x,v,m),V&&_e(v,m,x,"updated")},A)},I=(m,v,x,A,L,N,F)=>{for(let O=0;O<v.length;O++){const B=m[O],S=v[O],V=B.el&&(B.type===Zt||!ln(B,S)||B.shapeFlag&70)?d(B.el):x;w(B,S,V,null,A,L,N,F,!0)}},q=(m,v,x,A,L,N,F)=>{if(x!==A){if(x!==xt)for(const O in x)!$n(O)&&!(O in A)&&o(m,O,x[O],null,F,v.children,L,N,It);for(const O in A){if($n(O))continue;const B=A[O],S=x[O];B!==S&&O!=="value"&&o(m,O,S,B,F,v.children,L,N,It)}"value"in A&&o(m,"value",x.value,A.value,F)}},R=(m,v,x,A,L,N,F,O,B)=>{const S=v.el=m?m.el:r(""),V=v.anchor=m?m.anchor:r("");let{patchFlag:X,dynamicChildren:J,slotScopeIds:et}=v;et&&(O=O?O.concat(et):et),m==null?(s(S,x,A),s(V,x,A),P(v.children||[],x,V,L,N,F,O,B)):X>0&&X&64&&J&&m.dynamicChildren?(I(m.dynamicChildren,J,x,L,N,F,O),(v.key!=null||L&&v===L.subTree)&&Wi(m,v,!0)):W(m,v,x,V,L,N,F,O,B)},Z=(m,v,x,A,L,N,F,O,B)=>{v.slotScopeIds=O,m==null?v.shapeFlag&512?L.ctx.activate(v,x,A,F,B):Ct(v,x,A,L,N,F,B):_t(m,v,B)},Ct=(m,v,x,A,L,N,F)=>{const O=m.component=v1(m,A,L);if($s(m)&&(O.ctx.renderer=K),b1(O),O.asyncDep){if(L&&L.registerDep(O,U),!m.el){const B=O.subTree=Ot(xe);b(null,B,v,x)}}else U(O,m,v,x,L,N,F)},_t=(m,v,x)=>{const A=v.component=m.component;if(Ed(m,v,x))if(A.asyncDep&&!A.asyncResolved){tt(A,v,x);return}else A.next=v,vd(A.update),A.effect.dirty=!0,A.update();else v.el=m.el,A.vnode=v},U=(m,v,x,A,L,N,F)=>{const O=()=>{if(m.isMounted){let{next:V,bu:X,u:J,parent:et,vnode:at}=m;{const kn=Ki(m);if(kn){V&&(V.el=at.el,tt(m,V,F)),kn.asyncDep.then(()=>{m.isUnmounted||O()});return}}let gt=V,wt;nn(m,!1),V?(V.el=at.el,tt(m,V,F)):V=at,X&&Da(X),(wt=V.props&&V.props.onVnodeBeforeUpdate)&&se(wt,et,V,at),nn(m,!0);const Dt=Na(m),de=m.subTree;m.subTree=Dt,w(de,Dt,d(de.el),$(de),m,L,N),V.el=Dt.el,gt===null&&Cd(m,Dt.el),J&&Gt(J,L),(wt=V.props&&V.props.onVnodeUpdated)&&Gt(()=>se(wt,et,V,at),L)}else{let V;const{el:X,props:J}=v,{bm:et,m:at,parent:gt}=m,wt=es(v);if(nn(m,!1),et&&Da(et),!wt&&(V=J&&J.onVnodeBeforeMount)&&se(V,gt,v),nn(m,!0),X&&vt){const Dt=()=>{m.subTree=Na(m),vt(X,m.subTree,m,L,null)};wt?v.type.__asyncLoader().then(()=>!m.isUnmounted&&Dt()):Dt()}else{const Dt=m.subTree=Na(m);w(null,Dt,x,A,m,L,N),v.el=Dt.el}if(at&&Gt(at,L),!wt&&(V=J&&J.onVnodeMounted)){const Dt=v;Gt(()=>se(V,gt,Dt),L)}(v.shapeFlag&256||gt&&es(gt.vnode)&&gt.vnode.shapeFlag&256)&&m.a&&Gt(m.a,L),m.isMounted=!0,v=x=A=null}},B=m.effect=new jo(O,oe,()=>ka(S),m.scope),S=m.update=()=>{B.dirty&&B.run()};S.id=m.uid,nn(m,!0),S()},tt=(m,v,x)=>{v.component=m;const A=m.vnode.props;m.vnode=v,m.next=null,Zd(m,v.props,A,x),n1(m,v.children,x),fn(),Bl(m),hn()},W=(m,v,x,A,L,N,F,O,B=!1)=>{const S=m&&m.children,V=m?m.shapeFlag:0,X=v.children,{patchFlag:J,shapeFlag:et}=v;if(J>0){if(J&128){be(S,X,x,A,L,N,F,O,B);return}else if(J&256){St(S,X,x,A,L,N,F,O,B);return}}et&8?(V&16&&It(S,L,N),X!==S&&p(x,X)):V&16?et&16?be(S,X,x,A,L,N,F,O,B):It(S,L,N,!0):(V&8&&p(x,""),et&16&&P(X,x,A,L,N,F,O,B))},St=(m,v,x,A,L,N,F,O,B)=>{m=m||Tn,v=v||Tn;const S=m.length,V=v.length,X=Math.min(S,V);let J;for(J=0;J<X;J++){const et=v[J]=B?Ue(v[J]):he(v[J]);w(m[J],et,x,null,L,N,F,O,B)}S>V?It(m,L,N,!0,!1,X):P(v,x,A,L,N,F,O,B,X)},be=(m,v,x,A,L,N,F,O,B)=>{let S=0;const V=v.length;let X=m.length-1,J=V-1;for(;S<=X&&S<=J;){const et=m[S],at=v[S]=B?Ue(v[S]):he(v[S]);if(ln(et,at))w(et,at,x,null,L,N,F,O,B);else break;S++}for(;S<=X&&S<=J;){const et=m[X],at=v[J]=B?Ue(v[J]):he(v[J]);if(ln(et,at))w(et,at,x,null,L,N,F,O,B);else break;X--,J--}if(S>X){if(S<=J){const et=J+1,at=et<V?v[et].el:A;for(;S<=J;)w(null,v[S]=B?Ue(v[S]):he(v[S]),x,at,L,N,F,O,B),S++}}else if(S>J)for(;S<=X;)Mt(m[S],L,N,!0),S++;else{const et=S,at=S,gt=new Map;for(S=at;S<=J;S++){const Qt=v[S]=B?Ue(v[S]):he(v[S]);Qt.key!=null&&gt.set(Qt.key,S)}let wt,Dt=0;const de=J-at+1;let kn=!1,Ll=0;const Wn=new Array(de);for(S=0;S<de;S++)Wn[S]=0;for(S=et;S<=X;S++){const Qt=m[S];if(Dt>=de){Mt(Qt,L,N,!0);continue}let ke;if(Qt.key!=null)ke=gt.get(Qt.key);else for(wt=at;wt<=J;wt++)if(Wn[wt-at]===0&&ln(Qt,v[wt])){ke=wt;break}ke===void 0?Mt(Qt,L,N,!0):(Wn[ke-at]=S+1,ke>=Ll?Ll=ke:kn=!0,w(Qt,v[ke],x,null,L,N,F,O,B),Dt++)}const Al=kn?i1(Wn):Tn;for(wt=Al.length-1,S=de-1;S>=0;S--){const Qt=at+S,ke=v[Qt],Sl=Qt+1<V?v[Qt+1].el:A;Wn[S]===0?w(null,ke,x,Sl,L,N,F,O,B):kn&&(wt<0||S!==Al[wt]?ee(ke,x,Sl,2):wt--)}}},ee=(m,v,x,A,L=null)=>{const{el:N,type:F,transition:O,children:B,shapeFlag:S}=m;if(S&6){ee(m.component.subTree,v,x,A);return}if(S&128){m.suspense.move(v,x,A);return}if(S&64){F.move(m,v,x,K);return}if(F===Zt){s(N,v,x);for(let X=0;X<B.length;X++)ee(B[X],v,x,A);s(m.anchor,v,x);return}if(F===as){y(m,v,x);return}if(A!==2&&S&1&&O)if(A===0)O.beforeEnter(N),s(N,v,x),Gt(()=>O.enter(N),L);else{const{leave:X,delayLeave:J,afterLeave:et}=O,at=()=>s(N,v,x),gt=()=>{X(N,()=>{at(),et&&et()})};J?J(N,at,gt):gt()}else s(N,v,x)},Mt=(m,v,x,A=!1,L=!1)=>{const{type:N,props:F,ref:O,children:B,dynamicChildren:S,shapeFlag:V,patchFlag:X,dirs:J}=m;if(O!=null&&fa(O,null,x,m,!0),V&256){v.ctx.deactivate(m);return}const et=V&1&&J,at=!es(m);let gt;if(at&&(gt=F&&F.onVnodeBeforeUnmount)&&se(gt,v,m),V&6)ye(m.component,x,A);else{if(V&128){m.suspense.unmount(x,A);return}et&&_e(m,null,v,"beforeUnmount"),V&64?m.type.remove(m,v,x,L,K,A):S&&(N!==Zt||X>0&&X&64)?It(S,v,x,!1,!0):(N===Zt&&X&384||!L&&V&16)&&It(B,v,x),A&&Jt(m)}(at&&(gt=F&&F.onVnodeUnmounted)||et)&&Gt(()=>{gt&&se(gt,v,m),et&&_e(m,null,v,"unmounted")},x)},Jt=m=>{const{type:v,el:x,anchor:A,transition:L}=m;if(v===Zt){Ce(x,A);return}if(v===as){T(m);return}const N=()=>{a(x),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:F,delayLeave:O}=L,B=()=>F(x,N);O?O(m.el,N,B):B()}else N()},Ce=(m,v)=>{let x;for(;m!==v;)x=f(m),a(m),m=x;a(v)},ye=(m,v,x)=>{const{bum:A,scope:L,update:N,subTree:F,um:O}=m;A&&Da(A),L.stop(),N&&(N.active=!1,Mt(F,m,v,x)),O&&Gt(O,v),Gt(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},It=(m,v,x,A=!1,L=!1,N=0)=>{for(let F=N;F<m.length;F++)Mt(m[F],v,x,A,L)},$=m=>m.shapeFlag&6?$(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el);let j=!1;const H=(m,v,x)=>{m==null?v._vnode&&Mt(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,x),j||(j=!0,Bl(),ua(),j=!1),v._vnode=m},K={p:w,um:Mt,m:ee,r:Jt,mt:Ct,mc:P,pc:W,pbc:I,n:$,o:t};let rt,vt;return e&&([rt,vt]=e(K)),{render:H,hydrate:rt,createApp:Qd(H,rt)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gi(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wi(t,e,n=!1){const s=t.children,a=e.children;if(nt(s)&&nt(a))for(let o=0;o<s.length;o++){const l=s[o];let r=a[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=a[o]=Ue(a[o]),r.el=l.el),n||Wi(l,r)),r.type===On&&(r.el=l.el)}}function i1(t){const e=t.slice(),n=[0];let s,a,o,l,r;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(a=n[n.length-1],t[a]<u){e[s]=a,n.push(s);continue}for(o=0,l=n.length-1;o<l;)r=o+l>>1,t[n[r]]<u?o=r+1:l=r;u<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}function Ki(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ki(e)}const c1=t=>t.__isTeleport,Zt=Symbol.for("v-fgt"),On=Symbol.for("v-txt"),xe=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),os=[];let me=null;function y6(t=!1){os.push(me=t?null:[])}function u1(){os.pop(),me=os[os.length-1]||null}let hs=1;function Ql(t){hs+=t}function p1(t){return t.dynamicChildren=hs>0?me||Tn:null,u1(),hs>0&&me&&me.push(t),t}function k6(t,e,n,s,a,o){return p1(Ji(t,e,n,s,a,o,!0))}function vo(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const xa="__vInternal",Yi=({key:t})=>t??null,oa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?zt(t)||Bt(t)||st(t)?{i:le,r:t,k:e,f:!!n}:t:null);function Ji(t,e=null,n=null,s=0,a=null,o=t===Zt?0:1,l=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yi(e),ref:e&&oa(e),scopeId:Ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:le};return r?(sl(c,n),o&128&&t.normalize(c)):n&&(c.shapeFlag|=zt(n)?8:16),hs>0&&!l&&me&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&me.push(c),c}const Ot=d1;function d1(t,e=null,n=null,s=0,a=null,o=!1){if((!t||t===Td)&&(t=xe),vo(t)){const r=Qe(t,e,!0);return n&&sl(r,n),hs>0&&!o&&me&&(r.shapeFlag&6?me[me.indexOf(t)]=r:me.push(r)),r.patchFlag|=-2,r}if(x1(t)&&(t=t.__vccOpts),e){e=f1(e);let{class:r,style:c}=e;r&&!zt(r)&&(e.class=Fo(r)),$t(c)&&(ki(c)&&!nt(c)&&(c=Pt({},c)),e.style=Ho(c))}const l=zt(t)?1:Ld(t)?128:c1(t)?64:$t(t)?4:st(t)?2:0;return Ji(t,e,n,s,a,l,o,!0)}function f1(t){return t?ki(t)||xa in t?Pt({},t):t:null}function Qe(t,e,n=!1){const{props:s,ref:a,patchFlag:o,children:l}=t,r=e?h1(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:r,key:r&&Yi(r),ref:e&&e.ref?n&&a?nt(a)?a.concat(oa(e)):[a,oa(e)]:oa(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qe(t.ssContent),ssFallback:t.ssFallback&&Qe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qi(t=" ",e=0){return Ot(On,null,t,e)}function _6(t,e){const n=Ot(as,null,t);return n.staticCount=e,n}function he(t){return t==null||typeof t=="boolean"?Ot(xe):nt(t)?Ot(Zt,null,t.slice()):typeof t=="object"?Ue(t):Ot(On,null,String(t))}function Ue(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qe(t)}function sl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(nt(e))n=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),sl(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(xa in e)?e._ctx=le:a===3&&le&&(le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:le},n=32):(e=String(e),s&64?(n=16,e=[Qi(e)]):n=8);t.children=e,t.shapeFlag|=n}function h1(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=Fo([e.class,s.class]));else if(a==="style")e.style=Ho([e.style,s.style]);else if(xs(a)){const o=e[a],l=s[a];l&&o!==l&&!(nt(o)&&o.includes(l))&&(e[a]=o?[].concat(o,l):l)}else a!==""&&(e[a]=s[a])}return e}function se(t,e,n,s=null){re(t,e,7,[n,s])}const m1=Hi();let g1=0;function v1(t,e,n){const s=t.type,a=(e?e.appContext:t.appContext)||m1,o={uid:g1++,vnode:t,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ji(s,a),emitsOptions:Li(s,a),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:s.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=kd.bind(null,o),t.ce&&t.ce(o),o}let Nt=null;const Ls=()=>Nt||le;let ha,bo;{const t=oi(),e=(n,s)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(s),o=>{a.length>1?a.forEach(l=>l(o)):a[0](o)}};ha=e("__VUE_INSTANCE_SETTERS__",n=>Nt=n),bo=e("__VUE_SSR_SETTERS__",n=>Ss=n)}const As=t=>{const e=Nt;return ha(t),t.scope.on(),()=>{t.scope.off(),ha(e)}},Xl=()=>{Nt&&Nt.scope.off(),ha(null)};function Xi(t){return t.vnode.shapeFlag&4}let Ss=!1;function b1(t,e=!1){e&&bo(e);const{props:n,children:s}=t.vnode,a=Xi(t);Xd(t,n,a,e),e1(t,s);const o=a?y1(t,e):void 0;return e&&bo(!1),o}function y1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_i(new Proxy(t.ctx,qd));const{setup:s}=n;if(s){const a=t.setupContext=s.length>1?_1(t):null,o=As(t);fn();const l=Ye(s,t,0,[t.props,a]);if(hn(),o(),ai(l)){if(l.then(Xl,Xl),e)return l.then(r=>{Zl(t,r,e)}).catch(r=>{Ts(r,t,0)});t.asyncDep=l}else Zl(t,l,e)}else Zi(t,e)}function Zl(t,e,n){st(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$t(e)&&(t.setupState=Ei(e)),Zi(t,n)}let tr;function Zi(t,e,n){const s=t.type;if(!t.render){if(!e&&tr&&!s.render){const a=s.template||el(t).template;if(a){const{isCustomElement:o,compilerOptions:l}=t.appContext.config,{delimiters:r,compilerOptions:c}=s,u=Pt(Pt({isCustomElement:o,delimiters:r},l),c);s.render=tr(a,u)}}t.render=s.render||oe}{const a=As(t);fn();try{Ud(t)}finally{hn(),a()}}}function k1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Yt(t,"get","$attrs"),e[n]}}))}function _1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return k1(t)},slots:t.slots,emit:t.emit,expose:e}}function al(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ei(_i(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)},has(e,n){return n in e||n in ns}}))}function w1(t,e=!0){return st(t)?t.displayName||t.name:t.name||e&&t.__name}function x1(t){return st(t)&&"__vccOpts"in t}const _=(t,e)=>id(t,e,Ss);function i(t,e,n){const s=arguments.length;return s===2?$t(e)&&!nt(e)?vo(e)?Ot(t,null,[e]):Ot(t,e):Ot(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vo(n)&&(n=[n]),Ot(t,e,n))}const E1="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const C1="http://www.w3.org/2000/svg",T1="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,er=Ge&&Ge.createElement("template"),$1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const a=e==="svg"?Ge.createElementNS(C1,t):e==="mathml"?Ge.createElementNS(T1,t):Ge.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:t=>Ge.createTextNode(t),createComment:t=>Ge.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ge.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,a,o){const l=n?n.previousSibling:e.lastChild;if(a&&(a===o||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===o||!(a=a.nextSibling)););else{er.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const r=er.content;if(s==="svg"||s==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}e.insertBefore(r,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ze="transition",Kn="animation",Mn=Symbol("_vtc"),Xe=(t,{slots:e})=>i(Rd,ec(t),e);Xe.displayName="Transition";const tc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L1=Xe.props=Pt({},Oi,tc),sn=(t,e=[])=>{nt(t)?t.forEach(n=>n(...e)):t&&t(...e)},nr=t=>t?nt(t)?t.some(e=>e.length>1):t.length>1:!1;function ec(t){const e={};for(const R in t)R in tc||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:a,enterFromClass:o=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=l,appearToClass:p=r,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=A1(a),w=g&&g[0],k=g&&g[1],{onBeforeEnter:b,onEnter:E,onEnterCancelled:y,onLeave:T,onLeaveCancelled:M,onBeforeAppear:C=b,onAppear:D=E,onAppearCancelled:P=y}=e,Y=(R,Z,Ct)=>{Fe(R,Z?p:r),Fe(R,Z?u:l),Ct&&Ct()},I=(R,Z)=>{R._isLeaving=!1,Fe(R,d),Fe(R,h),Fe(R,f),Z&&Z()},q=R=>(Z,Ct)=>{const _t=R?D:E,U=()=>Y(Z,R,Ct);sn(_t,[Z,U]),sr(()=>{Fe(Z,R?c:o),$e(Z,R?p:r),nr(_t)||ar(Z,s,w,U)})};return Pt(e,{onBeforeEnter(R){sn(b,[R]),$e(R,o),$e(R,l)},onBeforeAppear(R){sn(C,[R]),$e(R,c),$e(R,u)},onEnter:q(!1),onAppear:q(!0),onLeave(R,Z){R._isLeaving=!0;const Ct=()=>I(R,Z);$e(R,d),sc(),$e(R,f),sr(()=>{R._isLeaving&&(Fe(R,d),$e(R,h),nr(T)||ar(R,s,k,Ct))}),sn(T,[R,Ct])},onEnterCancelled(R){Y(R,!1),sn(y,[R])},onAppearCancelled(R){Y(R,!0),sn(P,[R])},onLeaveCancelled(R){I(R),sn(M,[R])}})}function A1(t){if(t==null)return null;if($t(t))return[ja(t.enter),ja(t.leave)];{const e=ja(t);return[e,e]}}function ja(t){return Pp(t)}function $e(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mn]||(t[Mn]=new Set)).add(e)}function Fe(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Mn];n&&(n.delete(e),n.size||(t[Mn]=void 0))}function sr(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S1=0;function ar(t,e,n,s){const a=t._endId=++S1,o=()=>{a===t._endId&&s()};if(n)return setTimeout(o,n);const{type:l,timeout:r,propCount:c}=nc(t,e);if(!l)return s();const u=l+"end";let p=0;const d=()=>{t.removeEventListener(u,f),o()},f=h=>{h.target===t&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},r+1),t.addEventListener(u,f)}function nc(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),a=s(`${ze}Delay`),o=s(`${ze}Duration`),l=or(a,o),r=s(`${Kn}Delay`),c=s(`${Kn}Duration`),u=or(r,c);let p=null,d=0,f=0;e===ze?l>0&&(p=ze,d=l,f=o.length):e===Kn?u>0&&(p=Kn,d=u,f=c.length):(d=Math.max(l,u),p=d>0?l>u?ze:Kn:null,f=p?p===ze?o.length:c.length:0);const h=p===ze&&/\b(transform|all)(,|$)/.test(s(`${ze}Property`).toString());return{type:p,timeout:d,propCount:f,hasTransform:h}}function or(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>lr(n)+lr(t[s])))}function lr(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function sc(){return document.body.offsetHeight}function I1(t,e,n){const s=t[Mn];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rr=Symbol("_vod"),P1=Symbol("_vsh"),R1=Symbol(""),O1=/(^|;)\s*display\s*:/;function M1(t,e,n){const s=t.style,a=zt(n);let o=!1;if(n&&!a){if(e)if(zt(e))for(const l of e.split(";")){const r=l.slice(0,l.indexOf(":")).trim();n[r]==null&&la(s,r,"")}else for(const l in e)n[l]==null&&la(s,l,"");for(const l in n)l==="display"&&(o=!0),la(s,l,n[l])}else if(a){if(e!==n){const l=s[R1];l&&(n+=";"+l),s.cssText=n,o=O1.test(n)}}else e&&t.removeAttribute("style");rr in t&&(t[rr]=o?s.display:"",t[P1]&&(s.display="none"))}const ir=/\s*!important$/;function la(t,e,n){if(nt(n))n.forEach(s=>la(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=D1(t,e);ir.test(n)?t.setProperty(Hn(s),n.replace(ir,""),"important"):t[s]=n}}const cr=["Webkit","Moz","ms"],Va={};function D1(t,e){const n=Va[e];if(n)return n;let s=ue(e);if(s!=="filter"&&s in t)return Va[e]=s;s=Es(s);for(let a=0;a<cr.length;a++){const o=cr[a]+s;if(o in t)return Va[e]=o}return e}const ur="http://www.w3.org/1999/xlink";function N1(t,e,n,s,a){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ur,e.slice(6,e.length)):t.setAttributeNS(ur,e,n);else{const o=zp(e);n==null||o&&!li(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function z1(t,e,n,s,a,o,l){if(e==="innerHTML"||e==="textContent"){s&&l(s,a,o),t[e]=n??"";return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const u=r==="OPTION"?t.getAttribute("value")||"":t.value,p=n??"";(u!==p||!("_value"in t))&&(t.value=p),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=li(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function B1(t,e,n,s){t.addEventListener(e,n,s)}function H1(t,e,n,s){t.removeEventListener(e,n,s)}const pr=Symbol("_vei");function F1(t,e,n,s,a=null){const o=t[pr]||(t[pr]={}),l=o[e];if(s&&l)l.value=s;else{const[r,c]=j1(e);if(s){const u=o[e]=U1(s,a);B1(t,r,u,c)}else l&&(H1(t,r,l,c),o[e]=void 0)}}const dr=/(?:Once|Passive|Capture)$/;function j1(t){let e;if(dr.test(t)){e={};let s;for(;s=t.match(dr);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let qa=0;const V1=Promise.resolve(),q1=()=>qa||(V1.then(()=>qa=0),qa=Date.now());function U1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;re(G1(s,n.value),e,5,[s])};return n.value=t,n.attached=q1(),n}function G1(t,e){if(nt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,W1=(t,e,n,s,a,o,l,r,c)=>{const u=a==="svg";e==="class"?I1(t,s,u):e==="style"?M1(t,n,s):xs(e)?No(e)||F1(t,e,n,s,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K1(t,e,s,u))?z1(t,e,s,o,l,r,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),N1(t,e,s,u))};function K1(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&fr(e)&&st(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return fr(e)&&zt(n)?!1:e in t}const ac=new WeakMap,oc=new WeakMap,ma=Symbol("_moveCb"),hr=Symbol("_enterCb"),lc={name:"TransitionGroup",props:Pt({},L1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ls(),s=Ri();let a,o;return Ni(()=>{if(!a.length)return;const l=t.moveClass||`${t.name||"v"}-move`;if(!t2(a[0].el,n.vnode.el,l))return;a.forEach(Q1),a.forEach(X1);const r=a.filter(Z1);sc(),r.forEach(c=>{const u=c.el,p=u.style;$e(u,l),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[ma]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u[ma]=null,Fe(u,l))};u.addEventListener("transitionend",d)})}),()=>{const l=lt(t),r=ec(l);let c=l.tag||Zt;a=o,o=e.default?tl(e.default()):[];for(let u=0;u<o.length;u++){const p=o[u];p.key!=null&&fs(p,ds(p,r,s,n))}if(a)for(let u=0;u<a.length;u++){const p=a[u];fs(p,ds(p,r,s,n)),ac.set(p,p.el.getBoundingClientRect())}return Ot(c,null,o)}}},Y1=t=>delete t.mode;lc.props;const J1=lc;function Q1(t){const e=t.el;e[ma]&&e[ma](),e[hr]&&e[hr]()}function X1(t){oc.set(t,t.el.getBoundingClientRect())}function Z1(t){const e=ac.get(t),n=oc.get(t),s=e.left-n.left,a=e.top-n.top;if(s||a){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${a}px)`,o.transitionDuration="0s",t}}function t2(t,e,n){const s=t.cloneNode(),a=t[Mn];a&&a.forEach(r=>{r.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(r=>r&&s.classList.add(r)),s.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(s);const{hasTransform:l}=nc(s);return o.removeChild(s),l}const e2=Pt({patchProp:W1},$1);let Ua,mr=!1;function n2(){return Ua=mr?Ua:l1(e2),mr=!0,Ua}const s2=(...t)=>{const e=n2().createApp(...t),{mount:n}=e;return e.mount=s=>{const a=o2(s);if(a)return n(a,!0,a2(a))},e};function a2(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function o2(t){return zt(t)?document.querySelector(t):t}var l2=["link","meta","script","style","noscript","template"],r2=["title","base"],i2=([t,e,n])=>r2.includes(t)?t:l2.includes(t)?t==="meta"&&e.name?`${t}.${e.name}`:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,Object.entries(e).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),n]):null,c2=t=>{const e=new Set,n=[];return t.forEach(s=>{const a=i2(s);a&&!e.has(a)&&(e.add(a),n.push(s))}),n},u2=t=>t[0]==="/"?t:`/${t}`,rc=t=>t[t.length-1]==="/"||t.endsWith(".html")?t:`${t}/`,Re=t=>/^(https?:)?\/\//.test(t),p2=/.md((\?|#).*)?$/,Dn=(t,e="/")=>!!(Re(t)||t.startsWith("/")&&!t.startsWith(e)&&!p2.test(t)),ic=t=>/^[a-z][a-z0-9+.-]*:/.test(t),gn=t=>Object.prototype.toString.call(t)==="[object Object]",d2=t=>{const[e,...n]=t.split(/(\?|#)/);if(!e||e.endsWith("/"))return t;let s=e.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+n.join("")},Ea=t=>t[t.length-1]==="/"?t.slice(0,-1):t,cc=t=>t[0]==="/"?t.slice(1):t,f2=(t,e)=>{const n=Object.keys(t).sort((s,a)=>{const o=a.split("/").length-s.split("/").length;return o!==0?o:a.length-s.length});for(const s of n)if(e.startsWith(s))return s;return"/"},Tt=t=>typeof t=="string";const h2="modulepreload",m2=function(t){return"/"+t},gr={},G=function(e,n,s){let a=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),r=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.all(n.map(c=>{if(c=m2(c),c in gr)return;gr[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===c&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":h2,u||(f.as="script",f.crossOrigin=""),f.href=c,r&&f.setAttribute("nonce",r),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return a.then(()=>e()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})},g2=JSON.parse('{"/notes/c++_note.html":"/notes/c___note.html"}'),v2=Object.fromEntries([["/intro.html",{loader:()=>G(()=>import("./intro.html-D9dwEpHI.js"),__vite__mapDeps([0,1])),meta:{d:1711452816e3,r:{minutes:.57,words:171},t:"介绍页",i:"star",y:"a"}}],["/",{loader:()=>G(()=>import("./index.html-D5LnkeFh.js"),__vite__mapDeps([2,1])),meta:{t:"Home",i:"home"}}],["/blogs/CRNN_blog.html",{loader:()=>G(()=>import("./CRNN_blog.html-Cb6b7OD4.js"),__vite__mapDeps([3,1])),meta:{d:1704672e6,l:"2024年1月8日",c:["DeepLearning"],g:["CRNN"],e:`
<h2>0.项目</h2>
<p>论文：<a href="https://arxiv.org/abs/1507.05717" target="_blank" rel="noopener noreferrer">An End-to-End Trainable Neural Network for Image-based Sequence Recognition and Its Application to Scene Text Recognition</a></p>
<p>论文配套代码：https://github.com/bgshih/crnn/tree/master</p>
<p>pytorch复现代码：https://github.com/meijieru/crnn.pytorch</p>`,r:{minutes:6.95,words:2085},t:"CRNN网络调研适配记录",y:"a"}}],["/blogs/cucollection_blog.html",{loader:()=>G(()=>import("./cucollection_blog.html-DLix_uWp.js"),__vite__mapDeps([4,1])),meta:{d:16697664e5,l:"2022年11月30日",c:["高性能"],g:["CUDA","Hash"],e:`
<h2>0. 测试目标</h2>
<ul>
<li>cucollection性能分析（测试在负载因子为0.8/0.9时的性能，以及空载时的插入性能，吞吐量，带宽 etc）key为64bit int，数据使用均匀分布</li>
<li>
<ul>
<li>[x] 阅读benchmark代码，修改benchmark中的参数，测试不同负载因子下的性能( dynamic, static)</li>
<li>[x] 弄清example中的示例，基本用法，可参考test</li>
<li>[x] 根据所需测试性能参数修改benchmark测试</li>
</ul>
</li>
</ul>
<h2>1. 环境配置</h2>`,r:{minutes:14.38,words:4315},t:"cuCollections性能测试",y:"a"}}],["/blogs/cuda_blog.html",{loader:()=>G(()=>import("./cuda_blog.html-CBZ1Rex-.js"),__vite__mapDeps([5,1])),meta:{d:1700784e6,l:"2023年11月24日",c:["硬件"],g:["CUDA"],e:`
<h2>0 目标</h2>
<ul>
<li>快速掌握<code>CUDA</code>编程的大致方式</li>
<li>了解<code>CUDA</code>软硬件组织架构与关系</li>
<li>了解如何查找文档</li>
</ul>
<h2>1 介绍</h2>
<h3>1.1 架构</h3>
<ul>
<li>
<p><strong>CUDA (Compute Unified Device Architecture)</strong>：统一计算设备架构，在 GPU 上发布的一个新的硬件和软件架构,它不需要映射到一个图形 API 便可在 GPU 上管理和进行并行数据计算</p>
</li>
<li>
<p><strong>CPU、GPU架构对比</strong>：GPU 被设计用于高密度和并行计算,更确切地说是用于图形渲染，因此更多的晶体管被投入到数据处理而不是数据缓存和流量控制</p>
</li>
<li>
<p><strong>CUDA软件堆栈</strong>：CUDA 软件堆栈由几层组成:一个硬件驱动程序,一个应用程序编程接口(API)和它的Runtime, 还有二个高级的通用数学库,CUFFT 和CUBLAS</p>
</li>
<li>
<p><strong>CUDA内存操作</strong>：CUDA 提供一般 DRAM 内存寻址方式: Gather 和 Scatter内存操作，它可以在 DRAM的任何区域进行读写数据的操作</p>
</li>
<li>
<p>允许并行数据缓冲或者在 On-chip 内存共享使数据更接近ALU，可以进行快速的常规读写存取,在线程之间共享数据。应用程序可以最小化数据到 DRAM 的 overfetch 和 round-trips, 从而减少对 DRAM 内存带宽的依赖</p>
</li>
</ul>`,r:{minutes:4.65,words:1396},t:"CUDA学习笔记",y:"a"}}],["/blogs/distributed_embeddings_blog.html",{loader:()=>G(()=>import("./distributed_embeddings_blog.html-Cw7oBr-d.js"),__vite__mapDeps([6,1])),meta:{d:16910208e5,l:"2023年8月3日",c:["高性能"],g:["CUDA","Tensorflow","Embedding"],e:`
<h2>1. Introduce</h2>
<ul>
<li>
<p>参考链接：</p>
<ul>
<li>项目地址：https://github.com/NVIDIA-Merlin/distributed-embeddings</li>
<li>相关blog：https://developer.nvidia.com/blog/fast-terabyte-scale-recommender-training-made-easy-with-nvidia-merlin-distributed-embeddings/</li>
<li>相关项目：https://github.com/NVIDIA/DeepLearningExamples/tree/master/TensorFlow2/Recommendation/DLRM#hybrid-parallel-training-with-merlin-distributed-embeddings</li>
<li>项目文档：https://nvidia-merlin.github.io/distributed-embeddings/index.html</li>
</ul>
</li>
<li>
<p>基于TF2构建大embedding，提供可伸缩模型并行封装器，能够自动将嵌入表分布到多GPU上（目前支持table-wise和column-wise）</p>
</li>
<li>
<p>支持混合模型并行（dist_model_parallel）：</p>
<figure><figcaption></figcaption></figure>
</li>
<li>
<p>仅需修改少量代码即可使用</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> dist_model_parallel <span class="token keyword">as</span> dmp
 
<span class="token keyword">class</span> <span class="token class-name">MyEmbeddingModel</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span>  <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> table_sizes<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    self<span class="token punctuation">.</span>embedding_layers <span class="token operator">=</span> <span class="token punctuation">[</span>tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>layers<span class="token punctuation">.</span>Embedding<span class="token punctuation">(</span>input_dim<span class="token punctuation">,</span> output_dim<span class="token punctuation">)</span> <span class="token keyword">for</span> input_dim<span class="token punctuation">,</span> output_dim <span class="token keyword">in</span> table_sizes<span class="token punctuation">]</span>
    <span class="token comment"># 1. Add this line to wrap list of embedding layers used in the model</span>
    self<span class="token punctuation">.</span>embedding_layers <span class="token operator">=</span> dmp<span class="token punctuation">.</span>DistributedEmbedding<span class="token punctuation">(</span>self<span class="token punctuation">.</span>embedding_layers<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> inputs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># embedding_outputs = [e(i) for e, i in zip(self.embedding_layers, inputs)]</span>
    embedding_outputs <span class="token operator">=</span> self<span class="token punctuation">.</span>embedding_layers<span class="token punctuation">(</span>inputs<span class="token punctuation">)</span>
     
<span class="token decorator annotation punctuation">@tf<span class="token punctuation">.</span>function</span>
<span class="token keyword">def</span> <span class="token function">training_step</span><span class="token punctuation">(</span>inputs<span class="token punctuation">,</span> labels<span class="token punctuation">,</span> first_batch<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">with</span> tf<span class="token punctuation">.</span>GradientTape<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> tape<span class="token punctuation">:</span>
    probs <span class="token operator">=</span> model<span class="token punctuation">(</span>inputs<span class="token punctuation">)</span>
    loss_value <span class="token operator">=</span> loss<span class="token punctuation">(</span>labels<span class="token punctuation">,</span> probs<span class="token punctuation">)</span>
 
  <span class="token comment"># 2. Change Horovod Gradient Tape to dmp tape</span>
  <span class="token comment"># tape = hvd.DistributedGradientTape(tape)</span>
  tape <span class="token operator">=</span> dmp<span class="token punctuation">.</span>DistributedGradientTape<span class="token punctuation">(</span>tape<span class="token punctuation">)</span>
  grads <span class="token operator">=</span> tape<span class="token punctuation">.</span>gradient<span class="token punctuation">(</span>loss_value<span class="token punctuation">,</span> model<span class="token punctuation">.</span>trainable_variables<span class="token punctuation">)</span>
  opt<span class="token punctuation">.</span>apply_gradients<span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>grads<span class="token punctuation">,</span> model<span class="token punctuation">.</span>trainable_variables<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
  <span class="token keyword">if</span> first_batch<span class="token punctuation">:</span>
    <span class="token comment"># 3. Change Horovod broadcast_variables to dmp's</span>
    <span class="token comment"># hvd.broadcast_variables(model.variables, root_rank=0)</span>
    dmp<span class="token punctuation">.</span>broadcast_variables<span class="token punctuation">(</span>model<span class="token punctuation">.</span>variables<span class="token punctuation">,</span> root_rank<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> loss_value
</code></pre></div></li>
<li>
<p>示例</p>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> tensorflow <span class="token keyword">as</span> tf
<span class="token keyword">import</span> distributed_embeddings<span class="token punctuation">.</span>python<span class="token punctuation">.</span>layers<span class="token punctuation">.</span>dist_model_parallel <span class="token keyword">as</span> dmp
<span class="token keyword">from</span> distributed_embeddings<span class="token punctuation">.</span>python<span class="token punctuation">.</span>layers<span class="token punctuation">.</span>dist_model_parallel <span class="token keyword">import</span> Embedding<span class="token punctuation">,</span> DistributedEmbedding
layer0 <span class="token operator">=</span> Embedding<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"emb_0"</span><span class="token punctuation">)</span>
layer1 <span class="token operator">=</span> Embedding<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> combiner<span class="token operator">=</span><span class="token string">"mean"</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"emb_1"</span><span class="token punctuation">)</span>
layer2 <span class="token operator">=</span> tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>layers<span class="token punctuation">.</span>Embedding<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"emb_2"</span><span class="token punctuation">)</span>
layer3 <span class="token operator">=</span> tf<span class="token punctuation">.</span>keras<span class="token punctuation">.</span>layers<span class="token punctuation">.</span>Embedding<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">"emb_3"</span><span class="token punctuation">)</span>
layers0 <span class="token operator">=</span> <span class="token punctuation">[</span>layer0<span class="token punctuation">,</span> layer1<span class="token punctuation">]</span>
layers1 <span class="token operator">=</span> <span class="token punctuation">[</span>layer2<span class="token punctuation">,</span> layer3<span class="token punctuation">]</span>
emb_layers0 <span class="token operator">=</span> DistributedEmbedding<span class="token punctuation">(</span>layers0<span class="token punctuation">,</span> column_slice_threshold<span class="token operator">=</span><span class="token number">32000</span><span class="token punctuation">)</span>
emb_layers1 <span class="token operator">=</span> DistributedEmbedding<span class="token punctuation">(</span>layers1<span class="token punctuation">,</span> column_slice_threshold<span class="token operator">=</span><span class="token number">32000</span><span class="token punctuation">)</span>
</code></pre></div></li>
<li>
<p>API:</p>
<ul>
<li>
<p>distributed_embeddings.python.layers.embedding.</p>
<p>Embedding</p>
<ul>
<li>接口基本上对齐 tf.keras.layers.Embedding，且增加了支持同时lookup多个embedding 再将它们combine（sum/mean）为一个vector输出</li>
<li>支持多种数据类型：onehot/fixed hotness (multihot, 输入tensor维度相同)/variable hotness（multihot，  输入tensor维度不同，使用tf.RaggedTensor）/sparse tensor(multihot,  使用tf.sparse.SparseTensor，按照csr格式存储稀疏tensor)</li>
</ul>
</li>
<li>
<p>distributed_embeddings.python.layers.dist_model_parallel.</p>
<p>DistributedEmbedding</p>
<ul>
<li>支持按列切分embedding table，适用于emb table规模庞大且无法存入单张卡内存的情况</li>
<li>可设置column_slice_threshold参数确定切分阈值（elements num）</li>
<li>可封装共享embedding table，如两个特征域，一个表示watched_video, 一个表示browsed_video，他们的特征都是videos,因此可公用同一个emb table</li>
</ul>
</li>
</ul>
<p>性能表现：</p>
<ul>
<li>DLRM model with 113 billion parameters (421 GiB model size) trained on the <a href="https://labs.criteo.com/2013/12/download-terabyte-click-logs/" target="_blank" rel="noopener noreferrer">Criteo Terabyte Click Logs</a> dataset（官方数据，未实测）</li>
</ul>
<table>
<thead>
<tr>
<th>Hardware</th>
<th>Description</th>
<th>Training Throughput (samples/second)</th>
<th>Speedup over CPU</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>2 x AMD EPYC 7742</strong></td>
<td>Both MLP layers and embeddings on CPU</td>
<td>17.7k</td>
<td>1x</td>
</tr>
<tr>
<td><strong>1 x A100-80GB</strong>; 2 x AMD EPYC 7742</td>
<td>Large embeddings on CPU, everything else on GPU</td>
<td>768k</td>
<td>43x</td>
</tr>
<tr>
<td><strong>DGX A100 (8xA100-80GB)</strong></td>
<td>Hybrid parallel with NVIDIA Merlin <strong>Distributed-Embeddings,</strong> whole model on GPU</td>
<td>12.1M</td>
<td><strong>683x</strong></td>
</tr>
</tbody>
</table>
<p>Synthetic models benchmark （见第三节test部分benchmarks测试）</p>
<ul>
<li>模型规模定义</li>
</ul>
<table>
<thead>
<tr>
<th>Model</th>
<th>Total number of embedding tables</th>
<th>Total embedding size (GiB)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tiny</td>
<td>55</td>
<td>4.2</td>
</tr>
<tr>
<td>Small</td>
<td>107</td>
<td>26.3</td>
</tr>
<tr>
<td>Medium</td>
<td>311</td>
<td>206.2</td>
</tr>
<tr>
<td>Large</td>
<td>612</td>
<td>773.8</td>
</tr>
<tr>
<td>Jumbo</td>
<td>1,022</td>
<td>3,109.5</td>
</tr>
</tbody>
</table>
<ul>
<li>官方性能(DGX-A100-80GB, batchsize=65536, optimizer=adagrad )</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>Model</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th><strong>Training step time (ms)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>Model</strong></td>
<td style="text-align:center"><strong>1 GPU</strong></td>
<td style="text-align:center"><strong>8 GPU</strong></td>
<td style="text-align:center"><strong>16 GPU</strong></td>
<td style="text-align:center"><strong>32 GPU</strong></td>
<td><strong>128 GPU</strong></td>
</tr>
<tr>
<td style="text-align:center"><strong>Tiny</strong></td>
<td style="text-align:center">17.6</td>
<td style="text-align:center">3.6</td>
<td style="text-align:center">3.2</td>
<td style="text-align:center"></td>
<td></td>
</tr>
<tr>
<td style="text-align:center"><strong>Small</strong></td>
<td style="text-align:center">57.8</td>
<td style="text-align:center">14.0</td>
<td style="text-align:center">11.6</td>
<td style="text-align:center">7.4</td>
<td></td>
</tr>
<tr>
<td style="text-align:center"><strong>Medium</strong></td>
<td style="text-align:center"></td>
<td style="text-align:center">64.4</td>
<td style="text-align:center">44.9</td>
<td style="text-align:center">31.1</td>
<td>17.2</td>
</tr>
<tr>
<td style="text-align:center"><strong>Large</strong></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center">65.0</td>
<td>33.4</td>
</tr>
<tr>
<td style="text-align:center"><strong>Jumbo</strong></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td>102.3</td>
</tr>
</tbody>
</table>
<ul>
<li>实测性能(Tesla T4, batchsize=65536, optimizer=adagrad)</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>Model</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th><strong>Training step time (ms)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>Model</strong></td>
<td style="text-align:center">1 GPU</td>
<td>4 GPU</td>
</tr>
<tr>
<td style="text-align:center"><strong>Tiny</strong></td>
<td style="text-align:center">42.703</td>
<td>82.856</td>
</tr>
</tbody>
</table>
<ul>
<li>对比TF原生数据并行</li>
</ul>
<table>
<thead>
<tr>
<th><strong>Solution</strong></th>
<th style="text-align:center"><strong>Training step time (ms)</strong></th>
<th><strong>Training step time (ms)</strong></th>
<th><strong>Training step time (ms)</strong></th>
<th><strong>Training step time (ms)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Solution</strong></td>
<td style="text-align:center"><strong>1 GPU</strong></td>
<td><strong>2 GPU</strong></td>
<td><strong>4 GPU</strong></td>
<td><strong>8 GPU</strong></td>
</tr>
<tr>
<td>NVIDIA Merlin Distributed Embeddings <strong>Model Parallel</strong></td>
<td style="text-align:center">17.7</td>
<td><strong>11.6</strong></td>
<td><strong>6.4</strong></td>
<td><strong>4.2</strong></td>
</tr>
<tr>
<td>Native TensorFlow <strong>Data Parallel</strong></td>
<td style="text-align:center">19.9</td>
<td>20.2</td>
<td>21.2</td>
<td>22.3</td>
</tr>
</tbody>
</table>
</li>
</ul>`,r:{minutes:4.45,words:1334},t:"Distributed_embeddings",y:"a"}}],["/blogs/howToBuildThisBlog.html",{loader:()=>G(()=>import("./howToBuildThisBlog.html-Dxn0xRj3.js"),__vite__mapDeps([7,1])),meta:{d:1711584e6,l:"2024年3月28日",c:["前端"],g:["Vuepress"],e:`
<h2>一、环境</h2>
<p>基于<a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">Vuepress</a>，使用<a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">theme-hope</a>主题</p>
<h2>二、部署方法</h2>
<h3>1.配置环境(Windows)</h3>
<p>可参考<a href="https://theme-hope.vuejs.press/zh/get-started/env.html" target="_blank" rel="noopener noreferrer">运行环境设置</a></p>`,r:{minutes:1.72,words:517},t:"如何搭建本博客",y:"a"}}],["/blogs/hugectr_blog.html",{loader:()=>G(()=>import("./hugectr_blog.html-BrFINEES.js"),__vite__mapDeps([8,1])),meta:{d:16910208e5,l:"2023年8月3日",c:["推荐系统"],g:["CUDA","HugeCTR"],e:`
<h2>1 背景</h2>
<h3>1.1 推荐系统与深度学习</h3>
<ul>
<li>
<p>随着互联网的发展，受益于数据爆炸式地增长，用户获取信息的途径与方式越来越轻松多样，但也因为其中夹杂着大量庞杂冗余甚至无用的信息，如何提供用户真正感兴趣的内容也成为了各大企业尤其是商业领域重点关的问题。<strong>推荐系统就是从海量的数据中，根据用户偏好为其选择出可能感兴趣的内容并推送给用户</strong></p>
</li>
<li>
<p><strong>CTR（Click-trough  rate）也即点击率</strong>，是用于评估广告、搜索内容、博文等质量、搜索相关程度以及用户喜爱程度的重要指标，也能反馈给信息提供者所推荐给用户的内容是否合适、质量是否上乘、该内容是否选对了潜在受众。<strong>CTR的定义为内容被用户点击的次数除以内容展示给用户的次数</strong>，e.g. 一条广告被用户刷到了100次，但用户只点进去了1次，那么点击率就是1%</p>
</li>
<li>
<p>从技术架构上，可将推荐系统分为数据与模型部分：</p>
<ul>
<li><strong>数据部分</strong>主要负责“用户”“物品”“场景”的信息收集与处理；</li>
<li><strong>模型部分</strong>是推荐系统的主体，模型的结构一般由“召回层”“排序层”“补充策略与算法层”组成：
<ul>
<li><strong>召回层</strong>：一般利用高效的召回规则、算法或简单的模型,快速从海量的候选集中召回用户可能感兴趣的物品</li>
<li><strong>排序层</strong>：利用排序模型对初筛的候选集进行精排序</li>
<li><strong>补充策略与算法层</strong>：也被称为“再排序层”,可以在将推荐列表返回用户之前,为兼顾结果的“多样性”“流行度”“新鲜度”等指标,结合一些补充的策略和算法对推荐列表进行一定的调整,最终形成用户可见的推荐列表</li>
</ul>
</li>
</ul>
</li>
<li>
<figure><figcaption>img</figcaption></figure>
</li>
<li>
<p>与传统推荐系统实现方式相比，深度学习推荐模型具有更强的表达能力，模型结构更加灵活能够适应不同的使用场景，但现代推荐系统及使用场景有以下<strong>特点与难点</strong>：</p>
<ul>
<li>
<p>现代推荐模型合并了<strong>TB级别的嵌入表</strong>，传统推理服务架构无法将整个模型部署到单个服务器上（高时延、高存储占用）</p>
</li>
<li>
<p>许多推荐场景<strong>需要支持在线推理与模型更新</strong>，要求低时延</p>
</li>
<li>
<p>查找embedding的过程是独立的，因此<strong>容易实现并行化</strong>（GPU：higher  bandwidth &amp; throughput），但也需要占用大量内存资源和少量的计算资源（<strong>不平衡的资源需求</strong>降低了GPU在推理系统中的吸引力）→ 大多现存解决方案将嵌入查找操作与在GPU中的稠密计算相解耦，放入CPU中进行（放弃GPU带宽优势，CPU与GPU间的<strong>通信带宽成为首要瓶颈</strong>）</p>
</li>
<li>
<p>现实世界推荐数据集的经验证据表明，在 CTR 和其他推荐任务的推理过程中嵌入key访问通常表现出很强的局部性，并且大致遵循<strong>幂律分布</strong>，具有<strong>长尾效应</strong> <em>（大量特征的embedding总和占据了整个模型的大部分，但是他们出现的频率非常低，因此将这种特征长期存储在CPU和GPU中是低效的）</em></p>
<figure><figcaption>Visualization of power law distribution representing the likelihood of embedding key accesses. A few embeddings are accessed far more often than the others.</figcaption></figure>
</li>
</ul>
</li>
</ul>`,r:{minutes:22.31,words:6692},t:"HugeCTR 学习笔记",y:"a"}}],["/blogs/hugectr_src_blog.html",{loader:()=>G(()=>import("./hugectr_src_blog.html-d9qgPAFk.js"),__vite__mapDeps([9,1])),meta:{d:1698192e6,l:"2023年10月25日",c:["推荐系统"],g:["CUDA","HugeCTR"],e:`
<h2>1. Data</h2>
<ul>
<li>
<p>深度推荐模型的输入特征可分为数值特征和分类特征，数值特征是一组连续值，而分类特征是离散值，以HugeCTR按照Criteo点击率数据格式（每个数据sample包括14个数值特征和26个分类特征，总共40个特征）合成的数据为例：</p>
</li>
<li>
<p><strong>数值特征</strong>（numeric feature、dense feature）：</p>
<ul>
<li>
<table>
<thead>
<tr>
<th></th>
<th>_col0</th>
<th>_col1</th>
<th>_col2</th>
<th>_col3</th>
<th>_col4</th>
<th>_col5</th>
<th>_col6</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0.080380</td>
<td>0.435741</td>
<td>0.078185</td>
<td>0.194161</td>
<td>0.087724</td>
<td>0.845081</td>
<td>0.937019</td>
</tr>
<tr>
<td>1</td>
<td>0.310647</td>
<td>0.669963</td>
<td>0.218886</td>
<td>0.945537</td>
<td>0.735421</td>
<td>0.637027</td>
<td>0.007011</td>
</tr>
<tr>
<td>2</td>
<td>0.337267</td>
<td>0.908792</td>
<td>0.795987</td>
<td>0.608301</td>
<td>0.290421</td>
<td>0.012273</td>
<td>0.671650</td>
</tr>
<tr>
<td>3</td>
<td>0.873908</td>
<td>0.694296</td>
<td>0.796788</td>
<td>0.553089</td>
<td>0.872149</td>
<td>0.502299</td>
<td>0.114150</td>
</tr>
<tr>
<td>4</td>
<td>0.333109</td>
<td>0.456773</td>
<td>0.403027</td>
<td>0.091778</td>
<td>0.215718</td>
<td>0.729457</td>
<td>0.941204</td>
</tr>
</tbody>
</table>
</li>
<li>
<table>
<thead>
<tr>
<th></th>
<th>_col7</th>
<th>_col8</th>
<th>_col9</th>
<th>_col10</th>
<th>_col11</th>
<th>_col12</th>
<th>_col13</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0.977882</td>
<td>0.042342</td>
<td>0.054632</td>
<td>0.855919</td>
<td>0.264451</td>
<td>0.224891</td>
<td>0.467242</td>
</tr>
<tr>
<td>1</td>
<td>0.204856</td>
<td>0.307856</td>
<td>0.775143</td>
<td>0.265654</td>
<td>0.301945</td>
<td>0.066413</td>
<td>0.499416</td>
</tr>
<tr>
<td>2</td>
<td>0.960113</td>
<td>0.018073</td>
<td>0.639101</td>
<td>0.229013</td>
<td>0.645756</td>
<td>0.123180</td>
<td>0.894010</td>
</tr>
<tr>
<td>3</td>
<td>0.444433</td>
<td>0.001794</td>
<td>0.147979</td>
<td>0.083302</td>
<td>0.744487</td>
<td>0.971924</td>
<td>0.362019</td>
</tr>
<tr>
<td>4</td>
<td>0.997079</td>
<td>0.563684</td>
<td>0.811862</td>
<td>0.457039</td>
<td>0.133213</td>
<td>0.169442</td>
<td>0.124149</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p><strong>分类特征</strong>（sparse feature、category feature）：</p>
<ul>
<li>
<table>
<thead>
<tr>
<th></th>
<th>_col14</th>
<th>_col15</th>
<th>_col16</th>
<th>_col17</th>
<th>_col18</th>
<th>_col19</th>
<th>_col20</th>
<th>_col21</th>
<th>_col22</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>151</td>
<td>0</td>
<td>9</td>
<td>13</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>9</td>
<td>4</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
<td>11</td>
<td>4801</td>
<td>44</td>
<td>2</td>
<td>160</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>4549</td>
<td>3</td>
<td>1</td>
<td>10</td>
<td>31</td>
<td>2</td>
<td>485</td>
<td>2</td>
<td>10</td>
</tr>
<tr>
<td>3</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>3</td>
<td>111</td>
<td>10</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>5</td>
<td>160</td>
<td>0</td>
<td>72</td>
<td>0</td>
<td>13</td>
<td>53</td>
<td>0</td>
</tr>
</tbody>
</table>
</li>
<li>
<table>
<thead>
<tr>
<th></th>
<th>_col23</th>
<th>_col24</th>
<th>_col25</th>
<th>_col26</th>
<th>_col27</th>
<th>_col28</th>
<th>_col29</th>
<th>_col30</th>
<th>_col31</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>2</td>
<td>395</td>
<td>41</td>
<td>1</td>
<td>14</td>
<td>5</td>
<td>2</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>101</td>
<td>3</td>
<td>1</td>
<td>1</td>
<td>4</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>19</td>
<td>6</td>
<td>6</td>
<td>1</td>
<td>0</td>
<td>4</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>2</td>
<td>38</td>
<td>6</td>
<td>1</td>
<td>7</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>63</td>
<td>616</td>
<td>7</td>
<td>1</td>
<td>175</td>
<td>23</td>
<td>4</td>
<td>0</td>
<td>1</td>
</tr>
</tbody>
</table>
</li>
<li>
<table>
<thead>
<tr>
<th></th>
<th>_col32</th>
<th>_col33</th>
<th>_col34</th>
<th>_col35</th>
<th>_col36</th>
<th>_col37</th>
<th>_col38</th>
<th>_col39</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>1</td>
<td>1</td>
<td>5283</td>
<td>4</td>
<td>0</td>
<td>21</td>
<td>33</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
<td>204</td>
<td>310</td>
<td>1640</td>
<td>6</td>
<td>4</td>
<td>6</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>7</td>
<td>29</td>
<td>2</td>
<td>11</td>
<td>66</td>
<td>2</td>
<td>22</td>
</tr>
<tr>
<td>3</td>
<td>9</td>
<td>43</td>
<td>2</td>
<td>10</td>
<td>286</td>
<td>6</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>0</td>
<td>477</td>
<td>10</td>
<td>6</td>
<td>0</td>
<td>2</td>
<td>0</td>
<td>30</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>数据相关属性：</p>
<ul>
<li>
<p>以生成模拟数据为例：</p>
<ul>
<li>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># generate_data.py</span>

<span class="token keyword">import</span> hugectr
<span class="token keyword">from</span> hugectr<span class="token punctuation">.</span>tools <span class="token keyword">import</span> DataGenerator<span class="token punctuation">,</span> DataGeneratorParams
<span class="token keyword">from</span> mpi4py <span class="token keyword">import</span> MPI
<span class="token keyword">import</span> argparse
parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"Data Generation"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--num_files"</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"number of files in training data"</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--eval_num_files"</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"number of files in validation data"</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--num_samples_per_file'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"number of samples per file"</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">1000000</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'--dir_name'</span><span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">"data directory name(Required)"</span><span class="token punctuation">)</span>
args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>

data_generator_params <span class="token operator">=</span> DataGeneratorParams<span class="token punctuation">(</span>
  <span class="token builtin">format</span> <span class="token operator">=</span> hugectr<span class="token punctuation">.</span>DataReaderType_t<span class="token punctuation">.</span>Parquet<span class="token punctuation">,</span>
  label_dim <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  dense_dim <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">,</span>
  num_slot <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">,</span>
  num_files <span class="token operator">=</span> args<span class="token punctuation">.</span>num_files<span class="token punctuation">,</span>
  eval_num_files <span class="token operator">=</span> args<span class="token punctuation">.</span>eval_num_files<span class="token punctuation">,</span>
  i64_input_key <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
  num_samples_per_file <span class="token operator">=</span> args<span class="token punctuation">.</span>num_samples_per_file<span class="token punctuation">,</span>
  source <span class="token operator">=</span> <span class="token string">"./etc_data/"</span> <span class="token operator">+</span> args<span class="token punctuation">.</span>dir_name <span class="token operator">+</span> <span class="token string">"/file_list.txt"</span><span class="token punctuation">,</span>
  eval_source <span class="token operator">=</span> <span class="token string">"./etc_data/"</span> <span class="token operator">+</span> args<span class="token punctuation">.</span>dir_name <span class="token operator">+</span> <span class="token string">"/file_list_test.txt"</span><span class="token punctuation">,</span>
  slot_size_array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12988</span><span class="token punctuation">,</span> <span class="token number">7129</span><span class="token punctuation">,</span> <span class="token number">8720</span><span class="token punctuation">,</span> <span class="token number">5820</span><span class="token punctuation">,</span> <span class="token number">15196</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4914</span><span class="token punctuation">,</span> <span class="token number">1020</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">14274</span><span class="token punctuation">,</span> <span class="token number">10220</span><span class="token punctuation">,</span> <span class="token number">15088</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1518</span><span class="token punctuation">,</span> <span class="token number">3672</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">12817</span><span class="token punctuation">,</span> <span class="token number">13908</span><span class="token punctuation">,</span> <span class="token number">13447</span><span class="token punctuation">,</span> <span class="token number">9447</span><span class="token punctuation">,</span> <span class="token number">5867</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  nnz_array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment"># for parquet, check_type doesn't make any difference</span>
  check_type <span class="token operator">=</span> hugectr<span class="token punctuation">.</span>Check_t<span class="token punctuation">.</span>Non<span class="token punctuation">,</span>
  dist_type <span class="token operator">=</span> hugectr<span class="token punctuation">.</span>Distribution_t<span class="token punctuation">.</span>PowerLaw<span class="token punctuation">,</span>
  power_law_type <span class="token operator">=</span> hugectr<span class="token punctuation">.</span>PowerLaw_t<span class="token punctuation">.</span>Short<span class="token punctuation">)</span>
data_generator <span class="token operator">=</span> DataGenerator<span class="token punctuation">(</span>data_generator_params<span class="token punctuation">)</span>
data_generator<span class="token punctuation">.</span>generate<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li>
<li>
<p>num_files：即数据集分为几个子集，也是使用ETC训练时每一个pass所用到的数据，子集数等于训练所需pass数</p>
</li>
<li>
<p>num_samples_per_file：也即每个子数据集的样本数</p>
</li>
<li>
<p>label_dim：每一个sample的标签维度</p>
</li>
<li>
<p>dense_dim：连续特征的数量</p>
</li>
<li>
<p>num_slot：分类特征的数量，也即slot数（特征域数量）</p>
</li>
<li>
<p>slot_size_array：每一个slot中的最大特征数量（也就是特征域的大小）</p>
</li>
<li>
<p>nnz_array： 样本在对应的slot (特征域)中最多可同时有几个特征（用于选择是one-hot还是multi-hot）</p>
</li>
</ul>
</li>
<li>
<p>执行脚本生成模拟数据（总共产生8个训练数据子集和2个测试子集）：</p>
<ul>
<li>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>python generate_data<span class="token punctuation">.</span>py <span class="token operator">-</span><span class="token operator">-</span>dir_name <span class="token string">"file0"</span>
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:28.823<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: Generate Parquet dataset
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:28.823<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: train data folder: ./etc_data/file0, <span class="token builtin class-name">eval</span> data folder: ./etc_data/file0, slot_size_array: <span class="token number">12988</span>, <span class="token number">7129</span>, <span class="token number">8720</span>, <span class="token number">5820</span>, <span class="token number">15196</span>, <span class="token number">4</span>, <span class="token number">4914</span>, <span class="token number">1020</span>, <span class="token number">30</span>, <span class="token number">14274</span>, <span class="token number">10220</span>, <span class="token number">15088</span>, <span class="token number">10</span>, <span class="token number">1518</span>, <span class="token number">3672</span>, <span class="token number">48</span>, <span class="token number">4</span>, <span class="token number">820</span>, <span class="token number">15</span>, <span class="token number">12817</span>, <span class="token number">13908</span>, <span class="token number">13447</span>, <span class="token number">9447</span>, <span class="token number">5867</span>, <span class="token number">45</span>, <span class="token number">33</span>, nnz array: <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token number">1</span>, <span class="token comment">#files for train: 8, #files for eval: 2, #samples per file: 1000000, Use power law distribution: 1, alpha of power law: 1.3</span>
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:28.823<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0 exist
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:28.823<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_0.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:33.757<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_1.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:36.560<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_2.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:39.337<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_3.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:42.083<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_4.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:44.807<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_5.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:47.641<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_6.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:50.377<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/train/gen_7.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:53.131<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/file_list.txt done<span class="token operator">!</span>
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:53.132<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/val/gen_0.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:55.941<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/val/gen_1.parquet
<span class="token punctuation">[</span>HCTR<span class="token punctuation">]</span><span class="token punctuation">[</span>03:28:58.788<span class="token punctuation">]</span><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span><span class="token punctuation">[</span>RK0<span class="token punctuation">]</span><span class="token punctuation">[</span>main<span class="token punctuation">]</span>: ./etc_data/file0/file_list_test.txt done<span class="token operator">!</span>
</code></pre></div></li>
<li>
<p>输出keysets（以gen_0为例）：</p>
<ul>
<li>
<p>每一个子数据集（每个pass用的数据集）会生成一个keysets，所有数据的keysets构成一个更大的集合all_keysets，最终将根据all_keysets生成keysets文件xxx.keyset供GPU在t时刻预读取t+1时刻的数据到ETC中</p>
</li>
<li>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  ------------------------
  unique_keys:
  <span class="token number">0</span>            <span class="token number">0</span>
  <span class="token number">1</span>            <span class="token number">1</span>
  <span class="token number">2</span>            <span class="token number">2</span>
  <span class="token number">3</span>            <span class="token number">3</span>
  <span class="token number">4</span>            <span class="token number">4</span>
          <span class="token punctuation">..</span>.  
  <span class="token number">12115</span>    <span class="token number">12978</span>
  <span class="token number">12116</span>    <span class="token number">12979</span>
  <span class="token number">12117</span>    <span class="token number">12981</span>
  <span class="token number">12118</span>    <span class="token number">12983</span>
  <span class="token number">12119</span>    <span class="token number">12986</span>
  Name: _col14, Length: <span class="token number">12120</span>, dtype: int64
  ------------------------
  unique_keys:
  <span class="token number">0</span>       <span class="token number">12988</span>
  <span class="token number">1</span>       <span class="token number">12989</span>
  <span class="token number">2</span>       <span class="token number">12990</span>
  <span class="token number">3</span>       <span class="token number">12991</span>
  <span class="token number">4</span>       <span class="token number">12992</span>
          <span class="token punctuation">..</span>.  
  <span class="token number">7077</span>    <span class="token number">20111</span>
  <span class="token number">7078</span>    <span class="token number">20112</span>
  <span class="token number">7079</span>    <span class="token number">20113</span>
  <span class="token number">7080</span>    <span class="token number">20114</span>
  <span class="token number">7081</span>    <span class="token number">20116</span>
  Name: _col15, Length: <span class="token number">7082</span>, dtype: int64
  ------------------------
  unique_keys:
  <span class="token number">0</span>       <span class="token number">20117</span>
  <span class="token number">1</span>       <span class="token number">20118</span>
  <span class="token number">2</span>       <span class="token number">20119</span>
  <span class="token number">3</span>       <span class="token number">20120</span>
  <span class="token number">4</span>       <span class="token number">20121</span>
          <span class="token punctuation">..</span>.  
  <span class="token number">8554</span>    <span class="token number">28827</span>
  <span class="token number">8555</span>    <span class="token number">28828</span>
  <span class="token number">8556</span>    <span class="token number">28830</span>
  <span class="token number">8557</span>    <span class="token number">28831</span>
  <span class="token number">8558</span>    <span class="token number">28834</span>
  Name: _col16, Length: <span class="token number">8559</span>, dtype: int64
  ------------------------
  unique_keys:
  <span class="token number">0</span>       <span class="token number">28837</span>
  <span class="token number">1</span>       <span class="token number">28838</span>
  <span class="token number">2</span>       <span class="token number">28839</span>
  <span class="token number">3</span>       <span class="token number">28840</span>
  <span class="token number">4</span>       <span class="token number">28841</span>
          <span class="token punctuation">..</span>.  
  <span class="token number">5798</span>    <span class="token number">34652</span>
  <span class="token number">5799</span>    <span class="token number">34653</span>
  <span class="token number">5800</span>    <span class="token number">34654</span>
  <span class="token number">5801</span>    <span class="token number">34655</span>
  <span class="token number">5802</span>    <span class="token number">34656</span>
  Name: _col17, Length: <span class="token number">5803</span>, dtype: int64
</code></pre></div></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>使用ETC分pass训练示例(与上例不同，此例使用10个pass来训练)：</p>
<ul>
<li>
<table>
<thead>
<tr>
<th style="text-align:right">Pass ID</th>
<th style="text-align:right">Number of Unique Keys</th>
<th style="text-align:right">Embedding size (GB)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">#0</td>
<td style="text-align:right">24199179</td>
<td style="text-align:right">11.54</td>
</tr>
<tr>
<td style="text-align:right">#1</td>
<td style="text-align:right">26015075</td>
<td style="text-align:right">12.40</td>
</tr>
<tr>
<td style="text-align:right">#2</td>
<td style="text-align:right">27387817</td>
<td style="text-align:right">13.06</td>
</tr>
<tr>
<td style="text-align:right">#3</td>
<td style="text-align:right">23672542</td>
<td style="text-align:right">11.29</td>
</tr>
<tr>
<td style="text-align:right">#4</td>
<td style="text-align:right">26053910</td>
<td style="text-align:right">12.42</td>
</tr>
<tr>
<td style="text-align:right">#5</td>
<td style="text-align:right">27697628</td>
<td style="text-align:right">13.21</td>
</tr>
<tr>
<td style="text-align:right">#6</td>
<td style="text-align:right">24727672</td>
<td style="text-align:right">11.79</td>
</tr>
<tr>
<td style="text-align:right">#7</td>
<td style="text-align:right">25643779</td>
<td style="text-align:right">12.23</td>
</tr>
<tr>
<td style="text-align:right">#8</td>
<td style="text-align:right">26374086</td>
<td style="text-align:right">12.58</td>
</tr>
<tr>
<td style="text-align:right">#9</td>
<td style="text-align:right">26580983</td>
<td style="text-align:right">12.67</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>数据预处理时，HugeCTR将分类特征转换为整型序列的方法：</p>
<ul>
<li>
<p>使用NVTabular：</p>
</li>
<li>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># e.g. using NVTabular</span>

target_encode <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">'brand'</span><span class="token punctuation">,</span> <span class="token string">'user_id'</span><span class="token punctuation">,</span> <span class="token string">'product_id'</span><span class="token punctuation">,</span> <span class="token string">'cat_2'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'ts_weekday'</span><span class="token punctuation">,</span> <span class="token string">'ts_day'</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span>
    nvt<span class="token punctuation">.</span>ops<span class="token punctuation">.</span>TargetEncoding<span class="token punctuation">(</span>
        nvt<span class="token punctuation">.</span>ColumnGroup<span class="token punctuation">(</span><span class="token string">'target'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        kfold<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
        p_smooth<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>
        out_dtype<span class="token operator">=</span><span class="token string">"float32"</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
</code></pre></div></li>
<li>
<blockquote>
<p>https://nvidia-merlin.github.io/NVTabular/v0.7.1/api/ops/targetencoding.html</p>
<p>Target encoding is a common feature-engineering technique for categorical columns in tabular datasets. For each categorical group, the mean of a continuous target column is calculated, and the group-specific mean of each row is used to create a new feature (column). To prevent overfitting, the following additional logic is applied:</p>
<blockquote>
<ol>
<li>
<p>Cross Validation: To prevent overfitting in training data, a cross-validation strategy is used - The data is split into k random “folds”, and the mean values within the i-th fold are calculated with data from all other folds. The cross-validation strategy is only employed when the dataset is used to update recorded statistics. For transformation-only workflow execution, global-mean statistics are used instead.</p>
</li>
<li>
<p>Smoothing: To prevent overfitting for low cardinality categories, the means are smoothed with the overall mean of the target variable.</p>
</li>
</ol>
</blockquote>
</blockquote>
</li>
</ul>
</li>
</ul>`,r:{minutes:12.77,words:3832},t:"HugeCTR源码阅读笔记",y:"a"}}],["/blogs/",{loader:()=>G(()=>import("./index.html-DI16Z1C4.js"),__vite__mapDeps([10,1])),meta:{r:{minutes:.49,words:146},t:"Blogs",i:"blog",y:"a"}}],["/blogs/torchrec_cn_embedding_note.html",{loader:()=>G(()=>import("./torchrec_cn_embedding_note.html-YEVLbIAq.js"),__vite__mapDeps([11,1])),meta:{d:1698192e6,l:"2023年10月25日",c:["推荐系统"],g:["CNCard","Embedding"],e:`
<h2>1.目标</h2>
<ul>
<li>实现对torchrec embedding/embeddingbag底层存储结构的替换，用于实现embedding table动态扩容，贴合实际业务场景</li>
<li>训练DLRM网络性能目标：吞吐550万，精度0.8025</li>
</ul>
<h2>2.替换内容</h2>
<ul>
<li>使用collection替换torch.nn.EmbeddingBag底层数据结构</li>
<li>需要实现：
<ul>
<li>embeddingbag随机初始化</li>
<li>embedding的池化操作：sum（主要）/mean/max</li>
<li>forward()：向embeddingbag中传入一个/一批待查找key（Tensor），embeddingbag返回查询的embedding vector(一个/多个embedding做池化后得到的Tensor)</li>
<li>实现cpu和cncard端embedding table（attr: device, embeddingbag.to() : "meta"/"cpu"/"cncard"）</li>
<li>支持动态扩容，可新增相关类方法</li>
</ul>
</li>
</ul>`,r:{minutes:2.17,words:652},t:"torchrec cn_embedding模块设计方案",y:"a"}}],["/blogs/warpcore_blog.html",{loader:()=>G(()=>import("./warpcore_blog.html-Cz_5IJvA.js"),__vite__mapDeps([12,1])),meta:{d:16680384e5,l:"2022年11月10日",c:["高性能"],g:["CUDA","Hash"],e:`
<p>项目链接：<a href="https://github.com/sleeepyjack/warpcore" target="_blank" rel="noopener noreferrer">https://github.com/sleeepyjack/warpcore</a></p>
<p>文档：<a href="https://sleeepyjack.github.io/warpcore/index.html" target="_blank" rel="noopener noreferrer">https://sleeepyjack.github.io/warpcore/index.html</a></p>`,r:{minutes:9.85,words:2956},t:"WARPCORE 学习笔记",y:"a"}}],["/notes/c___note.html",{loader:()=>G(()=>import("./c___note.html-BYbhq9Nq.js"),__vite__mapDeps([13,1])),meta:{d:16970688e5,l:"2023年10月12日",c:["C++"],g:["C++"],e:`
<h2>1. 类静态成员函数&amp;变量</h2>
<ul>
<li><a href="https://blog.csdn.net/weicao1990/article/details/81558328" target="_blank" rel="noopener noreferrer">link</a></li>
</ul>
<ol>
<li>静态成员变量
<ol>
<li>
<p>static成员的所有者是类本身和对象，但是多个对象拥有一样的静态成员；</p>
</li>
<li>
<p>静态成员变量不能在类定义里边初始化，只能在class body外初始化。</p>
</li>
<li>
<p>静态成员仍然遵循public，private，protected访问准则。</p>
</li>
<li>
<p>静态成员函数没有this指针，它不能返回非静态成员，因为除了对象会调用它外，类本身也可以调用。</p>
</li>
</ol>
</li>
<li>静态成员函数
<ol>
<li>出现在类体外的函数定义不能指定关键字static；</li>
<li>静态成员之间可以相互访问，包括静态成员函数访问静态成员变量和访问静态成员函数；</li>
<li>非静态成员函数可以任意地访问静态成员函数和静态成员变量；</li>
<li>静态成员函数不能访问非静态成员函数和非静态成员变量；</li>
<li>由于没有this指针的额外开销，因此静态成员函数与类的全局函数相比速度上会有少许的增长；</li>
<li>调用静态成员函数，可以用成员访问操作符(.)和(-&gt;)为一个类的对象或指向类对象的指针调用静态成员函数，或者"类名::静态成员函数名"的方式调用;</li>
<li>当同一类的所有对象使用一个量时，对于这个共用的量，可以用静态数据成员变量，这个变量对于同一类的所有的对象都取相同的值。</li>
</ol>
</li>
</ol>`,r:{minutes:1.4,words:420},t:"C++ note",y:"a"}}],["/notes/deep_learning.html",{loader:()=>G(()=>import("./deep_learning.html-b-b3zdJE.js"),__vite__mapDeps([14,1])),meta:{d:1703808e6,l:"2023年12月29日",c:["DeepLearning"],g:["DeepLearning"],e:`
<h2>0.WTN</h2>
<ul>
<li>[ ] Dataloader的worker对训练推理的影响 https://zhuanlan.zhihu.com/p/673642279</li>
<li>[ ] train &amp; val &amp; inference</li>
<li>[ ] gradient accumulation</li>
<li>[ ] mixed precision</li>
<li>[ ] datasets (type, data structure)</li>
<li>[ ] fully finetune, finetune, lora, pretrain</li>
<li>[ ] prompt, 幻读， difficulties</li>
<li>[ ] llama1,2, chatgpt</li>
<li>[ ] bert，transformers</li>
<li>[ ] deepspeed, fastchat, megatron, colossalAi ...</li>
<li>[ ] torch.run, torch.launch, mp.spawn</li>
</ul>`,r:{minutes:3.1,words:931},t:"DL相关",y:"a"}}],["/notes/linux_command.html",{loader:()=>G(()=>import("./linux_command.html-G4dNyKFL.js"),__vite__mapDeps([15,1])),meta:{d:17095968e5,l:"2024年3月5日",c:["Linux"],g:["Linux"],e:`
<h2>docker相关</h2>
<h2>查看相关</h2>
<table>
<thead>
<tr>
<th>command</th>
<th>定义</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>tee [-ai][--help][--version][文件...]</td>
<td>用于读取标准输入的数据，并将其内容输出成文件<br>  -a或--append 　附加到既有文件的后面，而非覆盖它．<br> -i或--ignore-interrupts 　忽略中断信号。</td>
<td><strong>常用方法</strong>：<br>1. \`[command]</td>
</tr>
<tr>
<td>cpufreq-info</td>
<td>查看cpu状态：<br>apt-get install cpufrequtils<br>查看cpu模式：<br>cat /sys/devices/system/cpu/cpu1/cpufreq/scaling_governor<br>调为性能模式：cpufreq-set -g performance<br>调为节能模式：cpufreq-set -g powersave</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:2.59,words:778},t:"Linux 快捷指令",y:"a"}}],["/notes/LLM.html",{loader:()=>G(()=>import("./LLM.html-9hu1pKVY.js"),__vite__mapDeps([16,1])),meta:{d:17034624e5,l:"2023年12月25日",c:["LLM"],g:["LLM"],e:`
<h2>1. Conceptions</h2>
<ul>
<li>
<table>
<thead>
<tr>
<th>概念</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>token/word segmentation</td>
<td>将原始文本切分成子单元的过程就叫做 Tokenization。即，按照特定需求把文本中的句子、段落切分成一个字符串序列（其中的元素通常称为token 或叫词语），方便后续的处理分析工作。它是一个离散的文本单元，它可以是单词、标点符号、数字或其他语言元素，这些元素被用作训练和生成文本的基本单位。Token有粒度之分，如：词、字符或subword</td>
<td>解读资料：https://zhuanlan.zhihu.com/p/444774532</td>
</tr>
<tr>
<td>困惑度 Perplexity (PPL)</td>
<td>困惑度是一种用来评估语言模型的指标。它衡量了一个语言模型在给定数据集上的预测能力和概率分布的复杂性。较低的困惑度表示模型对数据集的拟合效果更好，也就是说，模型更能准确地预测下一个词或下一个句子。</td>
<td></td>
</tr>
<tr>
<td>SFT</td>
<td>监督微调（Supervised Fine-Tuning）</td>
<td></td>
</tr>
<tr>
<td>RLHF</td>
<td>基于人类反馈的强化学习 (Reinforcement Learning from Human Feedback)</td>
<td></td>
</tr>
<tr>
<td>embedding</td>
<td>（词）嵌入，可用于降维或升维，将特征拉近拉远到一个合适的观察点，将不同特征联系起来</td>
<td>https://zhuanlan.zhihu.com/p/616419336</td>
</tr>
<tr>
<td>seq2seq</td>
<td>序列到序列，该技术突破了传统的固定大小输入问题框架，提出了一种全新的端到端的映射方法。技术的核心是 Encoder-Decoder 架构，Encoder 负责将输入序列压缩成指定长度的向量，这个向量就可以看成是这个序列的语义，称为编码。而 Decoder 则负责根据语义向量生成指定的序列，这个过程也称为解码。Seq2Seq 是输出的长度不确定时采用的模型，因此在机器翻译、对话系统、自动文摘等自然语言处理任务中被广泛运用。</td>
<td>https://zhuanlan.zhihu.com/p/558138527<br>https://zhuanlan.zhihu.com/p/520657912?utm_id=0</td>
</tr>
<tr>
<td>attention</td>
<td>注意力机制（Attention Mechanism）源于对人类视觉的研究，主要理论原理是：信息处理时选择性地关注所有信息的一部分，同时忽略其他可见的信息。在计算能力有限情况下，注意力机制是解决信息超载问题的主要手段的一种资源分配方案，将计算资源分配给更重要的任务。</td>
<td>attention机制：https://zhuanlan.zhihu.com/p/46990010<br>atention图解：https://zhuanlan.zhihu.com/p/342235515<br>https://zhuanlan.zhihu.com/p/42724582<br>https://zhuanlan.zhihu.com/p/53682800<br>如何理解attention中的QKV：https://www.zhihu.com/question/298810062<br>transformer中的attention为什么scaled：https://www.zhihu.com/question/339723385<br>attention计算公式中的softmax：https://zhuanlan.zhihu.com/p/157490738<br></td>
</tr>
<tr>
<td>transformer</td>
<td>Transformer最早起源于论文Attention is all your need，是谷歌云TPU推荐的参考模型。 目前，在NLP领域当中，主要存在三种特征处理器：CNN、RNN以及Transformer，当前Transformer的流行程度已经大过CNN和RNN，它抛弃了传统CNN和RNN神经网络，整个网络结构完全由Attention机制以及前馈神经网络组成。论文中给出Transformer的定义是：Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence aligned RNNs or convolution。</td>
<td>论文 ：https://arxiv.org/abs/1706.03762<br>源码参考：https://github.com/huggingface/transformers<br>解读资料：https://blog.csdn.net/m0_67505927/article/details/123209347<br>https://blog.csdn.net/qq_52302919/article/details/122207924<br>B站李宏毅的视频，有几节专门讲attention和transformer的，比较清晰：https://www.bilibili.com/video/BV1Wv411h7kN?p=23<br></td>
</tr>
<tr>
<td>Beam search</td>
<td>集束搜索。一种搜索算法，是对greedy search的一个改进，相对greedy search扩大了搜索空间，但远不及穷举搜索指数级的搜索空间，是二者的一个折中方案。在文本生成任务中常用的解码策略。</td>
<td>https://zhuanlan.zhihu.com/p/82829880</td>
</tr>
<tr>
<td>AIGC (Artificial Intelligence Generated Content / AI-Generated Content)</td>
<td>人工智能生成内容，一种利用人工智能技术自动生成文章、音频、视频等多媒体内容的方法。</td>
<td></td>
</tr>
<tr>
<td>LLM ( Large Language Model)</td>
<td>大语言模型，使用大量文本数据训练的深度学习模型，可以生成自然语言文本或理解语言文本的含义。特点是规模庞大（包含数十亿参数），能学习到语言数据中的复杂模式。</td>
<td></td>
</tr>
<tr>
<td>GPT (Generative Pre-trained Transformer)</td>
<td>生成式预训练Transformer模型, 由OpenAI提出的一系列强大的预训练语言模型，兼具“大规模”和“预训练”两种属性。</td>
<td></td>
</tr>
<tr>
<td>BERT (Bidirectional Encoder Representations from Transformers)</td>
<td>基于Transformer的双向编码表征，谷歌提出的一个LLM，对NLP研究产生了重大影响。该模型使用双向方法从一个词的左右两边捕捉上下文，使得各种任务的性能提高，如情感分析和命名实体识别。</td>
<td></td>
</tr>
<tr>
<td>Bloom ( BigScience Large Open-science Open-access Multi-lingual Language Model)</td>
<td>BLOOM是一种基于trasnformer架构的解码器（Decoder-Only）自回归大语言模型，由BigScience社区开发和发布。该模型除了176B 之外，还提供了几个较小的模型，其模型参数规模为：560M，1.1B，1.7B，3B 和7.1B。</td>
<td>论文：https://arxiv.org/abs/2211.05100<br>解读：https://zhuanlan.zhihu.com/p/640016830</td>
</tr>
<tr>
<td>Flash Attention</td>
<td>FlashAttention 是一种重新排序注意力计算的算法，它无需任何近似即可加速注意力计算并减少内存占用，主要解决Transformer计算速度慢和存储占用高的问题，所以作为目前LLM的模型加速它是一个非常好的解决方案。</td>
<td>论文：<br>https://arxiv.org/abs/2205.14135<br>解读资料：<br>https://zhuanlan.zhihu.com/p/639228219<br>https://zhuanlan.zhihu.com/p/647364218<br>https://baijiahao.baidu.com/s?id=1774803715921029316&amp;wfr=spider&amp;for=pc<br></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</li>
</ul>`,r:{minutes:12.22,words:3666},t:"LLM",y:"a"}}],["/notes/loss.html",{loader:()=>G(()=>import("./loss.html-CJxfnubw.js"),__vite__mapDeps([17,1])),meta:{d:1703808e6,l:"2023年12月29日",c:["DeepLearning"],g:["Loss"],e:`
<ol>
<li>
<p>loss 不收敛</p>
<ul>
<li>
<p>欠拟合</p>
<ul>
<li>
<p>特征：训练集上loss始终和初始大小相当，accuracy很低</p>
</li>
<li>
<p>网络拟合能力不足</p>
<ul>
<li>每一个batch使用相同的数据训练，检查loss和acc是否有变化来判断</li>
<li>改进：增加网络深度（层数），宽度（神经元数量）</li>
</ul>
</li>
<li>
<p>网络配置问题</p>
<ul>
<li>
<p>权重初始化是否合理</p>
</li>
<li>
<table>
<thead>
<tr>
<th>初始化方式</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>全零初始化 Zeros</td>
<td>造成网络对称，所有神经元进行相同参数更新</td>
</tr>
<tr>
<td>全1初始化 Ones</td>
<td>造成网络对称，所有神经元进行相同参数更新</td>
</tr>
<tr>
<td>初始化为固定值value Constant</td>
<td>造成网络对称，所有神经元进行相同参数更新</td>
</tr>
<tr>
<td>随机正态分布初始化 RandomNormal</td>
<td></td>
</tr>
<tr>
<td>随机均匀分布初始化 RandomUniform</td>
<td></td>
</tr>
<tr>
<td>截尾高斯分布初始化 TruncatedNormal</td>
<td></td>
</tr>
<tr>
<td>VarianceScaling</td>
<td></td>
</tr>
<tr>
<td>用随机正交矩阵初始化Orthogonal</td>
<td></td>
</tr>
<tr>
<td>使用单位矩阵初始化 Identiy</td>
<td></td>
</tr>
<tr>
<td>LeCun均匀分布初始化方法 lecun_uniform</td>
<td></td>
</tr>
<tr>
<td>LeCun正态分布初始化方法 lecun_normal</td>
<td></td>
</tr>
<tr>
<td>Glorot正态分布初始化方法 glorot_normal</td>
<td></td>
</tr>
<tr>
<td>Glorot均匀分布初始化 glorot_uniform</td>
<td>一种均值为0，以0为中心的对称区间均匀分布的随机数；接近于0的均匀分布会导致梯度消失</td>
</tr>
<tr>
<td>He正态分布初始化 he_normal</td>
<td></td>
</tr>
<tr>
<td>He均匀分布初始化 he_uniform</td>
<td></td>
</tr>
</tbody>
</table>
</li>
<li>
<p>使用适当的激活函数</p>
</li>
<li>
<table>
<thead>
<tr>
<th>激活函数</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>ReLU</td>
<td>一般用于卷积层、全连接层</td>
</tr>
<tr>
<td>tanh</td>
<td>一般用于循环层</td>
</tr>
<tr>
<td>softmax</td>
<td>一般用于全连接层做输出层</td>
</tr>
<tr>
<td>sigmoid</td>
<td>不常用</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>使用适当的优化器和学习率</p>
</li>
<li>
<p>未进行归一化导致尺度不平衡，误差增大</p>
</li>
</ul>
</li>
<li>
<p>人工构造少量数据反复训练，看是否下降。若不下降，则可能脚本有问题，若下降，则超参可能有问题</p>
</li>
<li>
<p>梯度检查</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>loss 为nan，inf</p>
<ul>
<li>100个iter内出现可能是学习率过高</li>
<li>若为rnn之类的网络，可能是梯度爆炸，可增加梯度截断（gradient clipping）</li>
<li>梯度消失：导数特别小，导致连乘接近无穷小（输入数据太小，或输出数据落在激活函数饱和区），使loss不下降，但不会出现nan和inf</li>
<li>梯度爆炸：导数特别大，导致连乘特别大，超出表示范围（输入数据未归一化（减均值，除方差，加入BN，L2等normalization方法）），可能出现inf</li>
<li>batchNorm层很多时，检查tensor输入该层后是否变为nan（可能因为训练集和验证集是不同的分布，使移动均值和移动方差为nan，可设置track_runing_stats=False禁用）</li>
<li>每个batch前梯度要清零<code>optimizer.zero_grad</code></li>
<li>0做除数，0或负数做对数(loss正常下降，突然出现nan。可对预测数据增加最小值偏移，避免小于等于0)，根号下要大于0，同时要加个Epsilon，因为开根号的导数，变量在分母上，不加Epsilon导数就成了nan</li>
<li>计算loss的数组越界</li>
<li>涉及指数计算时算得无穷：$\\frac{e{x}}{e{y}}=\\frac{INF}{INF}=NAN$ ，可减去最大值处理</li>
<li>label缺失</li>
<li>输入数据就含有NAN（使用简单的网络读取输入进行检查）</li>
<li>使用不同精度数据，loss超过精度类型最大范围</li>
<li>pooling步长大于核尺寸</li>
</ul>
</li>
<li>
<p>loss 为负</p>
<ul>
<li>https://blog.csdn.net/qq_43733107/article/details/128915638</li>
</ul>
</li>
</ol>`,r:{minutes:2.82,words:847},t:"Loss 相关问题",y:"a"}}],["/notes/markdown.html",{loader:()=>G(()=>import("./markdown.html-DJcQDvEC.js"),__vite__mapDeps([18,1])),meta:{d:1704672e6,l:"2024年1月8日",c:["学习笔记"],g:["Markdown"],e:`
<p><a href="https://www.jianshu.com/p/e74eb43960a1" target="_blank" rel="noopener noreferrer">链接</a></p>
<h2>运算符</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>解释</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>行内公式</td>
<td>将公式插入到本行内，符号：$公式内容$</td>
<td>$xyz$</td>
</tr>
<tr>
<td>独行公式</td>
<td>将公式插入到新的一行内，并且居中，符号：$$公式内容$$</td>
<td>$$xyz$$</td>
</tr>
<tr>
<td>上标符号</td>
<td>符号：^</td>
<td>$x^4$</td>
</tr>
<tr>
<td>下标符号</td>
<td>符号：_</td>
<td>$x_1$</td>
</tr>
<tr>
<td>组合符号</td>
<td>符号：{}</td>
<td>\${16}_{8}O{2+}_{2}$</td>
</tr>
<tr>
<td>汉字形式</td>
<td>符号：\\mbox{}</td>
<td>$V_{\\mbox{初始}}$ $v_{初始}$</td>
</tr>
<tr>
<td>字体控制</td>
<td>符号：\\displaystyle</td>
<td>$\\displaystyle \\frac{x+y}{y+z}$</td>
</tr>
<tr>
<td>下划线符号</td>
<td>符号：\\underline</td>
<td>$\\underline{x+y}$</td>
</tr>
<tr>
<td>标签</td>
<td 数字="">符号\\tag</td>
<td>$\\tag{11}$</td>
</tr>
<tr>
<td>上大括号</td>
<td 算式="">符号：\\overbrace</td>
<td>$\\overbrace{a+b+c+d}^{2.0}$</td>
</tr>
<tr>
<td>下大括号</td>
<td 算式="">符号：\\underbrace</td>
<td>$a+\\underbrace{b+c}_{1.0}+d$</td>
</tr>
<tr>
<td>上位符号</td>
<td 基位符号="">符号：\\stacrel{上位符号}</td>
<td>$\\vec{x}\\stackrel{\\mathrm{def}}{=}{x_1,\\dots,x_n}$</td>
</tr>
<tr>
<td>两个quad空格</td>
<td>符号：\\qquad</td>
<td>$x \\qquad y$</td>
</tr>
<tr>
<td>quad空格</td>
<td>符号：\\quad</td>
<td>$x \\quad y$</td>
</tr>
<tr>
<td>大空格</td>
<td>符号: | $x \\ y$</td>
<td></td>
</tr>
<tr>
<td>中空格</td>
<td>符号: :</td>
<td>$x : y$</td>
</tr>
<tr>
<td>小空格</td>
<td>符号: ,</td>
<td>$x , y$</td>
</tr>
<tr>
<td>紧贴</td>
<td>符号: !</td>
<td>$x ! y$</td>
</tr>
<tr>
<td>括号</td>
<td>符号：（）\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)</td>
<td>$（）\\big(\\big) \\Big(\\Big) \\bigg(\\bigg) \\Bigg(\\Bigg)$</td>
</tr>
<tr>
<td>中括号</td>
<td>符号：[]</td>
<td>$[x+y]$</td>
</tr>
<tr>
<td>大括号</td>
<td>符号：{}</td>
<td>\${x+y}$</td>
</tr>
<tr>
<td>自适应括号</td>
<td>符号：\\left \\right</td>
<td>$\\left(x\\right)$，$\\left(x{yz}\\right)$</td>
</tr>
<tr>
<td>组合公式</td>
<td>符号：{上位公式 \\choose 下位公式}</td>
<td>\${n+1 \\choose k}={n \\choose k}+{n \\choose k-1}$</td>
</tr>
<tr>
<td>组合公式</td>
<td>符号：{上位公式 \\atop 下位公式}</td>
<td>$\\sum_{k_0,k_1,\\ldots&gt;0 \\atop k_0+k_1+\\cdots=n}A_{k_0}A_{k_1}\\cdots$</td>
</tr>
<tr>
<td>分段函数</td>
<td cases="">符号：\\begin{cases} 公式1, 条件1 \\\\ 公式2， 条件2 \\end</td>
<td>$y=\\begin{cases} -x, \\quad x\\leq 0 \\ x, \\quad x&gt;0 \\end{cases}$</td>
</tr>
<tr>
<td>加法运算</td>
<td>符号：+</td>
<td>$x+y=z$</td>
</tr>
<tr>
<td>减法运算</td>
<td>符号：-</td>
<td>$x-y=z$</td>
</tr>
<tr>
<td>加减运算</td>
<td>符号：\\pm</td>
<td>$x \\pm y=z$</td>
</tr>
<tr>
<td>减加运算</td>
<td>符号：\\mp</td>
<td>$x \\mp y=z$</td>
</tr>
<tr>
<td>乘法运算</td>
<td>符号：\\times</td>
<td>$x \\times y=z$</td>
</tr>
<tr>
<td>点乘运算</td>
<td>符号：\\cdot</td>
<td>$x \\cdot y=z$</td>
</tr>
<tr>
<td>星乘运算</td>
<td>符号：\\ast</td>
<td>$x \\ast y=z$</td>
</tr>
<tr>
<td>除法运算</td>
<td>符号：\\div</td>
<td>$x \\div y=z$</td>
</tr>
<tr>
<td>斜法运算</td>
<td>符号：/</td>
<td>$x/y=z$</td>
</tr>
<tr>
<td>分式表示</td>
<td 分母="">符号：\\frac{分子}</td>
<td>$\\frac{x+y}{y+z}$</td>
</tr>
<tr>
<td>分式表示</td>
<td 分母="">符号：{分子} \\voer</td>
<td>\${x+y} \\over {y+z}$</td>
</tr>
<tr>
<td>绝对值表示</td>
<td>符号：|</td>
<td>$</td>
</tr>
<tr>
<td>平均数运算</td>
<td 算式="">符号：\\overline</td>
<td>$\\overline{xyz}$</td>
</tr>
<tr>
<td>开二次方运算</td>
<td>符号：\\sqrt</td>
<td>$\\sqrt x$</td>
</tr>
<tr>
<td>开方运算</td>
<td 被开方数="">符号：\\sqrt[开方数]</td>
<td>$\\sqrt[3]{x+y}$</td>
</tr>
<tr>
<td>对数运算</td>
<td>符号：\\log</td>
<td>$\\log(x)$</td>
</tr>
<tr>
<td>极限运算</td>
<td>符号：\\lim</td>
<td>$\\lim^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</td>
</tr>
<tr>
<td>极限运算</td>
<td>符号：\\displaystyle \\lim</td>
<td>$\\displaystyle \\lim^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</td>
</tr>
<tr>
<td>求和运算</td>
<td>符号：\\sum</td>
<td>$\\sum^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</td>
</tr>
<tr>
<td>求和运算</td>
<td>符号：\\displaystyle \\sum</td>
<td>$\\displaystyle \\sum^{x \\to \\infty}_{y \\to 0}{\\frac{x}{y}}$</td>
</tr>
<tr>
<td>积分运算</td>
<td>符号：\\int</td>
<td>$\\int^{\\infty}_{0}{xdx}$</td>
</tr>
<tr>
<td>积分运算</td>
<td>符号：\\displaystyle \\int</td>
<td>$\\displaystyle \\int^{\\infty}_{0}{xdx}$</td>
</tr>
<tr>
<td>微分运算</td>
<td>符号：\\partial</td>
<td>$\\frac{\\partial x}{\\partial y}$</td>
</tr>
<tr>
<td>矩阵表示</td>
<td matrix="">符号：\\begin{matrix} \\end</td>
<td>$\\left[ \\begin{matrix} 1 &amp;2 &amp;\\cdots &amp;4\\5 &amp;6 &amp;\\cdots &amp;8\\\\vdots &amp;\\vdots &amp;\\ddots &amp;\\vdots\\13 &amp;14 &amp;\\cdots &amp;16\\end{matrix} \\right]$</td>
</tr>
<tr>
<td>等于运算</td>
<td>符号：=</td>
<td>$x+y=z$</td>
</tr>
<tr>
<td>大于运算</td>
<td>符号：&gt;</td>
<td>$x+y&gt;z$</td>
</tr>
<tr>
<td>小于运算</td>
<td>符号：&lt;</td>
<td>$x+y&lt;z$</td>
</tr>
<tr>
<td>大于等于运算</td>
<td>符号：\\geq</td>
<td>$x+y \\geq z$</td>
</tr>
<tr>
<td>小于等于运算</td>
<td>符号：\\leq</td>
<td>$x+y \\leq z$</td>
</tr>
<tr>
<td>不等于运算</td>
<td>符号：\\neq</td>
<td>$x+y \\neq z$</td>
</tr>
<tr>
<td>不大于等于运算</td>
<td>符号：\\ngeq</td>
<td>$x+y \\ngeq z$</td>
</tr>
<tr>
<td>不大于等于运算</td>
<td>符号：\\not\\geq</td>
<td>$x+y \\not\\geq z$</td>
</tr>
<tr>
<td>不小于等于运算</td>
<td>符号：\\nleq</td>
<td>$x+y \\nleq z$</td>
</tr>
<tr>
<td>不小于等于运算</td>
<td>符号：\\not\\leq</td>
<td>$x+y \\not\\leq z$</td>
</tr>
<tr>
<td>约等于运算</td>
<td>符号：\\approx</td>
<td>$x+y \\approx z$</td>
</tr>
<tr>
<td>恒定等于运算</td>
<td>符号：\\equiv</td>
<td>$x+y \\equiv z$</td>
</tr>
<tr>
<td>属于运算</td>
<td>符号：\\in</td>
<td>$x \\in y$</td>
</tr>
<tr>
<td>不属于运算</td>
<td>符号：\\notin</td>
<td>$x \\notin y$</td>
</tr>
<tr>
<td>不属于运算</td>
<td>符号：\\not\\in</td>
<td>$x \\not\\in y$</td>
</tr>
<tr>
<td>子集运算</td>
<td>符号：\\subset</td>
<td>$x \\subset y$</td>
</tr>
<tr>
<td>子集运算</td>
<td>符号：\\supset</td>
<td>$x \\supset y$</td>
</tr>
<tr>
<td>真子集运算</td>
<td>符号：\\subseteq</td>
<td>$x \\subseteq y$</td>
</tr>
<tr>
<td>非真子集运算</td>
<td>符号：\\subsetneq</td>
<td>$x \\subsetneq y$</td>
</tr>
<tr>
<td>真子集运算</td>
<td>符号：\\supseteq</td>
<td>$x \\supseteq y$</td>
</tr>
<tr>
<td>非真子集运算</td>
<td>符号：\\supsetneq</td>
<td>$x \\supsetneq y$</td>
</tr>
<tr>
<td>非子集运算</td>
<td>符号：\\not\\subset</td>
<td>$x \\not\\subset y$</td>
</tr>
<tr>
<td>非子集运算</td>
<td>符号：\\not\\supset</td>
<td>$x \\not\\supset y$</td>
</tr>
<tr>
<td>并集运算</td>
<td>符号：\\cup</td>
<td>$x \\cup y$</td>
</tr>
<tr>
<td>交集运算</td>
<td>符号：\\cap</td>
<td>$x \\cap y$</td>
</tr>
<tr>
<td>差集运算</td>
<td>符号：\\setminus</td>
<td>$x \\setminus y$</td>
</tr>
<tr>
<td>同或运算</td>
<td>符号：\\bigodot</td>
<td>$x \\bigodot y$</td>
</tr>
<tr>
<td>同与运算</td>
<td>符号：\\bigotimes</td>
<td>$x \\bigotimes y$</td>
</tr>
<tr>
<td>实数集合</td>
<td r="">符号：\\mathbb</td>
<td>$\\mathbb{R}$</td>
</tr>
<tr>
<td>自然数集合</td>
<td z="">符号：\\mathbb</td>
<td>$\\mathbb{Z}$</td>
</tr>
<tr>
<td>空集</td>
<td>符号：\\emptyset</td>
<td>$\\emptyset$</td>
</tr>
<tr>
<td>无穷</td>
<td>符号：\\infty</td>
<td>$\\infty$</td>
</tr>
<tr>
<td>虚数</td>
<td>符号：\\imath</td>
<td>$\\imath$</td>
</tr>
<tr>
<td>虚数</td>
<td>符号：\\jmath</td>
<td>$\\jmath$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\hat</td>
<td>$\\hat{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\check</td>
<td>$\\check{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\breve</td>
<td>$\\breve{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\tilde</td>
<td>$\\tilde{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\bar</td>
<td>$\\bar{a}$</td>
</tr>
<tr>
<td>矢量符号</td>
<td a="">符号\\vec</td>
<td>$\\vec{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\acute</td>
<td>$\\acute{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\grave</td>
<td>$\\grave{a}$</td>
</tr>
<tr>
<td>数学符号</td>
<td a="">符号\\mathring</td>
<td>$\\mathring{a}$</td>
</tr>
<tr>
<td>一阶导数符号</td>
<td a="">符号\\dot</td>
<td>$\\dot{a}$</td>
</tr>
<tr>
<td>二阶导数符号</td>
<td a="">符号\\ddot</td>
<td>$\\ddot{a} $</td>
</tr>
<tr>
<td>上箭头</td>
<td>符号：\\uparrow</td>
<td>$\\uparrow $</td>
</tr>
<tr>
<td>上箭头</td>
<td>符号：\\Uparrow</td>
<td>$\\Uparrow$</td>
</tr>
<tr>
<td>下箭头</td>
<td>符号：\\downarrow</td>
<td>$\\downarrow $</td>
</tr>
<tr>
<td>下箭头</td>
<td>符号：\\Downarrow</td>
<td>$\\Downarrow$</td>
</tr>
<tr>
<td>左箭头</td>
<td>符号：\\leftarrow</td>
<td>$\\leftarrow$</td>
</tr>
<tr>
<td>左箭头</td>
<td>符号：\\Leftarrow</td>
<td>$\\Leftarrow$</td>
</tr>
<tr>
<td>右箭头</td>
<td>符号：\\rightarrow</td>
<td>$\\rightarrow$</td>
</tr>
<tr>
<td>右箭头</td>
<td>符号：\\Rightarrow</td>
<td>$\\Rightarrow$</td>
</tr>
<tr>
<td>底端对齐的省略号</td>
<td>符号：\\ldots</td>
<td>$1,2,\\ldots ,n$</td>
</tr>
<tr>
<td>中线对齐的省略号</td>
<td>符号：\\cdots</td>
<td>$x_1^2 + x_2^2 + \\cdots + x_n^2$</td>
</tr>
<tr>
<td>竖直对齐的省略号</td>
<td>符号：\\vdots</td>
<td>$\\vdots$</td>
</tr>
<tr>
<td>斜对齐的省略号</td>
<td>符号：\\ddots</td>
<td>$\\ddots$</td>
</tr>
</tbody>
</table>`,r:{minutes:4.64,words:1392},t:"Markdown 语法",y:"a"}}],["/notes/metrics.html",{loader:()=>G(()=>import("./metrics.html-DKJGeFbq.js"),__vite__mapDeps([19,1])),meta:{d:17034624e5,l:"2023年12月25日",c:["DeepLearning"],g:["Metics"],e:`
<h2>0. GOAL</h2>
<p>各类评估指标整理汇总，影响因素，提升方法</p>
<h2>1. 性能相关</h2>
<ol>
<li>
<p>基本概念</p>
<ul>
<li>
<table>
<thead>
<tr>
<th>名称</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>NVLink</td>
<td></td>
<td>节点内device连接方式之一</td>
</tr>
<tr>
<td>PCIe</td>
<td>高速串行计算机扩展总线标准</td>
<td>节点内device连接方式之一</td>
</tr>
<tr>
<td>Infinit Band (IB)</td>
<td></td>
<td>节点间device连接方式（多机）</td>
</tr>
<tr>
<td>ASIC</td>
<td>专用集成电路</td>
<td></td>
</tr>
<tr>
<td>FPGA</td>
<td>现场可编辑门阵列</td>
<td></td>
</tr>
<tr>
<td>SHArP</td>
<td>软硬结合的通信协议，实现在了NVIDIA Quantum HDR Switch的ASIC里</td>
<td>把聚合计算（reduce）从节点卸载到网络(交换机)中进行，相比tree和ring算法收发数据量大幅减少参考：https://www.zhihu.com/question/63219175/answer/206697974</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>性能指标</p>
<ul>
<li>
<table>
<thead>
<tr>
<th>名称</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>Size(Bytes)</td>
<td>数据大小</td>
<td></td>
</tr>
<tr>
<td>Description</td>
<td>测试描述（数据量*字节数）</td>
<td></td>
</tr>
<tr>
<td>Duration</td>
<td>耗时</td>
<td></td>
</tr>
<tr>
<td>Throughput(Gbps, fps, ...)</td>
<td>吞吐，每秒处理的图片/samples/文本/...数</td>
<td>一般用iter e2e时间来计算：$thoughput = \\frac{n_{card}*batchsize}{e2e_time}$</td>
</tr>
<tr>
<td>BusBW(Gbps)</td>
<td>带宽</td>
<td></td>
</tr>
<tr>
<td>扩展率</td>
<td>网络训练效率与卡数关系的衡量指标</td>
<td>$扩展率=\\frac{throghput_{n card}}{n*throughput_{1card}}*100%=\\frac{e2e_time_{1card}}{e2e_time_{ncard}}*100%$</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
<li>
<p>性能测试</p>
</li>
</ol>`,r:{minutes:3.55,words:1065},t:"Metrics",y:"a"}}],["/notes/PLAN_Z.html",{loader:()=>G(()=>import("./PLAN_Z.html-B9yJBwFA.js"),__vite__mapDeps([20,1])),meta:{d:17101152e5,l:"2024年3月11日",c:["TODO"],g:["TODO"],n:!0,r:{minutes:.96,words:289},t:"TODO LIST",y:"a"}}],["/notes/precision.html",{loader:()=>G(()=>import("./precision.html-B_dd_MdY.js"),__vite__mapDeps([21,1])),meta:{d:17084736e5,l:"2024年2月21日",c:["DeepLearning"],g:["precision"],e:`
<h2></h2>
<p>参考：https://developer.nvidia.com/blog/accelerating-ai-training-with-tf32-tensor-cores/</p>
<p>在深度学习中，范围比精度更重要。</p>
<h2>FP64</h2>
<figure><figcaption>img</figcaption></figure>
<p>双精度</p>
<h2>FP32</h2>
<figure><figcaption>img</figcaption></figure>
<p>单精度</p>
<h2>TF32</h2>
<p>用于A100架构TensorCore，指数范围i与FP32相同，尾数范围与FP16相同。兼容FP32和FP16，只需截断就可相互转换。先截断为TF32计算再转为FP32对历史工作无影响，且无需更改代码即可使用。</p>`,r:{minutes:.78,words:234},t:"Floating Point precision formats",y:"a"}}],["/notes/",{loader:()=>G(()=>import("./index.html-D1wTsZoY.js"),__vite__mapDeps([22,1])),meta:{r:{minutes:.31,words:94},t:"Notes",i:"note-sticky",y:"a"}}],["/notes/torchrec_note.html",{loader:()=>G(()=>import("./torchrec_note.html-B-i_O6mg.js"),__vite__mapDeps([23,1])),meta:{d:16873056e5,l:"2023年6月21日",c:["推荐系统"],g:["Torchrec"],e:`
<h2>0.0 未迁移依赖库汇总</h2>
<ol>
<li>torch
<ul>
<li>torch.distributed._shard</li>
<li>torch.fx._compatibility</li>
<li>torch.distributed._composable</li>
<li>torch.distributed.optim._apply_optimizer_in_backward</li>
<li>torch.distributed.fsdp</li>
<li>torch._C.distributed_c10d.ProcessGroupNCCL</li>
<li>torch.distributed._composable.contract</li>
</ul>
</li>
<li>fbgemm-gpu</li>
</ol>`,r:{minutes:25.64,words:7693},t:"Torchrec调研",y:"a"}}],["/notes/uml_note.html",{loader:()=>G(()=>import("./uml_note.html-IaIR5y-b.js"),__vite__mapDeps([24,1])),meta:{d:16798752e5,l:"2023年3月27日",c:["学习笔记"],g:["UML"],e:`
<h2>1.关系线条类型</h2>
<figure><figcaption>这里写图片描述</figcaption></figure>
<p>类与类之间由弱到强关系是:   <strong>没关系 &lt; 依赖 &lt; 关联 &lt; 聚合 &lt; 组合</strong></p>
<p>类图：</p>
<ul>
<li>+：public</li>
<li>-：private</li>
<li>#：protected</li>
</ul>
<p>类间数量的对应关系</p>
<ul>
<li>1…1表示另一个类的一个对象只与该类的一个对象有关系</li>
<li>0…* 表示另一个类的一个对象与该类的零个或多个对象有关系</li>
<li>1…* 表示另一个类的一个对象与该类的一个或多个对象有关系</li>
<li>0…1表示另一个类的一个对象没有或只与该类的一个对象有关系</li>
</ul>`,r:{minutes:3.8,words:1141},t:"UML学习笔记",y:"a"}}],["/thinking/",{loader:()=>G(()=>import("./index.html-Cgwhpoct.js"),__vite__mapDeps([25,1])),meta:{r:{minutes:.24,words:71},t:"Thinking",i:"lightbulb",y:"a"}}],["/404.html",{loader:()=>G(()=>import("./404.html-DYVdKbdY.js"),__vite__mapDeps([26,1])),meta:{t:""}}],["/category/",{loader:()=>G(()=>import("./index.html-1jQ9-Uww.js"),__vite__mapDeps([27,1])),meta:{t:"分类",I:!1}}],["/category/deeplearning/",{loader:()=>G(()=>import("./index.html-BEDqx9YQ.js"),__vite__mapDeps([28,1])),meta:{t:"DeepLearning 分类",I:!1}}],["/category/%E9%AB%98%E6%80%A7%E8%83%BD/",{loader:()=>G(()=>import("./index.html-BltlhrdK.js"),__vite__mapDeps([29,1])),meta:{t:"高性能 分类",I:!1}}],["/category/%E7%A1%AC%E4%BB%B6/",{loader:()=>G(()=>import("./index.html-C0yITs6x.js"),__vite__mapDeps([30,1])),meta:{t:"硬件 分类",I:!1}}],["/category/%E5%89%8D%E7%AB%AF/",{loader:()=>G(()=>import("./index.html-maJbTduo.js"),__vite__mapDeps([31,1])),meta:{t:"前端 分类",I:!1}}],["/category/%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F/",{loader:()=>G(()=>import("./index.html-BPQ9UPx_.js"),__vite__mapDeps([32,1])),meta:{t:"推荐系统 分类",I:!1}}],["/category/c__/",{loader:()=>G(()=>import("./index.html-BQB6pLKG.js"),__vite__mapDeps([33,1])),meta:{t:"C++ 分类",I:!1}}],["/category/linux/",{loader:()=>G(()=>import("./index.html-Be8HnZrW.js"),__vite__mapDeps([34,1])),meta:{t:"Linux 分类",I:!1}}],["/category/llm/",{loader:()=>G(()=>import("./index.html-DzX6xTUq.js"),__vite__mapDeps([35,1])),meta:{t:"LLM 分类",I:!1}}],["/category/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",{loader:()=>G(()=>import("./index.html-BxZ6QV-X.js"),__vite__mapDeps([36,1])),meta:{t:"学习笔记 分类",I:!1}}],["/category/todo/",{loader:()=>G(()=>import("./index.html-Dl0UMf-I.js"),__vite__mapDeps([37,1])),meta:{t:"TODO 分类",I:!1}}],["/tag/",{loader:()=>G(()=>import("./index.html-xBRd_OsE.js"),__vite__mapDeps([38,1])),meta:{t:"标签",I:!1}}],["/tag/crnn/",{loader:()=>G(()=>import("./index.html-BTkUZ9Ws.js"),__vite__mapDeps([39,1])),meta:{t:"标签: CRNN",I:!1}}],["/tag/cuda/",{loader:()=>G(()=>import("./index.html-D57wSldI.js"),__vite__mapDeps([40,1])),meta:{t:"标签: CUDA",I:!1}}],["/tag/hash/",{loader:()=>G(()=>import("./index.html-Dqr1foaP.js"),__vite__mapDeps([41,1])),meta:{t:"标签: Hash",I:!1}}],["/tag/tensorflow/",{loader:()=>G(()=>import("./index.html-CSGzSmAq.js"),__vite__mapDeps([42,1])),meta:{t:"标签: Tensorflow",I:!1}}],["/tag/embedding/",{loader:()=>G(()=>import("./index.html-BnBAmG4V.js"),__vite__mapDeps([43,1])),meta:{t:"标签: Embedding",I:!1}}],["/tag/vuepress/",{loader:()=>G(()=>import("./index.html-d2G8e39M.js"),__vite__mapDeps([44,1])),meta:{t:"标签: Vuepress",I:!1}}],["/tag/hugectr/",{loader:()=>G(()=>import("./index.html-CpCodvQl.js"),__vite__mapDeps([45,1])),meta:{t:"标签: HugeCTR",I:!1}}],["/tag/cncard/",{loader:()=>G(()=>import("./index.html-hEB5WJuD.js"),__vite__mapDeps([46,1])),meta:{t:"标签: CNCard",I:!1}}],["/tag/c__/",{loader:()=>G(()=>import("./index.html-DX2Ijbyk.js"),__vite__mapDeps([47,1])),meta:{t:"标签: C++",I:!1}}],["/tag/deeplearning/",{loader:()=>G(()=>import("./index.html-Da6Vp1bl.js"),__vite__mapDeps([48,1])),meta:{t:"标签: DeepLearning",I:!1}}],["/tag/linux/",{loader:()=>G(()=>import("./index.html-CGr0tdaC.js"),__vite__mapDeps([49,1])),meta:{t:"标签: Linux",I:!1}}],["/tag/llm/",{loader:()=>G(()=>import("./index.html-D5fEOhj5.js"),__vite__mapDeps([50,1])),meta:{t:"标签: LLM",I:!1}}],["/tag/loss/",{loader:()=>G(()=>import("./index.html-C1vK6J6C.js"),__vite__mapDeps([51,1])),meta:{t:"标签: Loss",I:!1}}],["/tag/markdown/",{loader:()=>G(()=>import("./index.html-DgD_mq8U.js"),__vite__mapDeps([52,1])),meta:{t:"标签: Markdown",I:!1}}],["/tag/metics/",{loader:()=>G(()=>import("./index.html-Demc7CPi.js"),__vite__mapDeps([53,1])),meta:{t:"标签: Metics",I:!1}}],["/tag/todo/",{loader:()=>G(()=>import("./index.html-D31kcDwM.js"),__vite__mapDeps([54,1])),meta:{t:"标签: TODO",I:!1}}],["/tag/precision/",{loader:()=>G(()=>import("./index.html-COTqqkDG.js"),__vite__mapDeps([55,1])),meta:{t:"标签: precision",I:!1}}],["/tag/torchrec/",{loader:()=>G(()=>import("./index.html-DtZDr4LJ.js"),__vite__mapDeps([56,1])),meta:{t:"标签: Torchrec",I:!1}}],["/tag/uml/",{loader:()=>G(()=>import("./index.html-BYDcpP-H.js"),__vite__mapDeps([57,1])),meta:{t:"标签: UML",I:!1}}],["/article/",{loader:()=>G(()=>import("./index.html-QpKn8zOy.js"),__vite__mapDeps([58,1])),meta:{t:"文章",I:!1}}],["/star/",{loader:()=>G(()=>import("./index.html-Fd1nQRc_.js"),__vite__mapDeps([59,1])),meta:{t:"星标",I:!1}}],["/timeline/",{loader:()=>G(()=>import("./index.html-BEVLRn0k.js"),__vite__mapDeps([60,1])),meta:{t:"时间轴",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof document<"u";function b2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ht=Object.assign;function Ga(t,e){const n={};for(const s in e){const a=e[s];n[s]=ve(a)?a.map(t):t(a)}return n}const ls=()=>{},ve=Array.isArray,uc=/#/g,y2=/&/g,k2=/\//g,_2=/=/g,w2=/\?/g,pc=/\+/g,x2=/%5B/g,E2=/%5D/g,dc=/%5E/g,C2=/%60/g,fc=/%7B/g,T2=/%7C/g,hc=/%7D/g,$2=/%20/g;function ol(t){return encodeURI(""+t).replace(T2,"|").replace(x2,"[").replace(E2,"]")}function L2(t){return ol(t).replace(fc,"{").replace(hc,"}").replace(dc,"^")}function yo(t){return ol(t).replace(pc,"%2B").replace($2,"+").replace(uc,"%23").replace(y2,"%26").replace(C2,"`").replace(fc,"{").replace(hc,"}").replace(dc,"^")}function A2(t){return yo(t).replace(_2,"%3D")}function S2(t){return ol(t).replace(uc,"%23").replace(w2,"%3F")}function I2(t){return t==null?"":S2(t).replace(k2,"%2F")}function ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const P2=/\/$/,R2=t=>t.replace(P2,"");function Wa(t,e,n="/"){let s,a={},o="",l="";const r=e.indexOf("#");let c=e.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(s=e.slice(0,c),o=e.slice(c+1,r>-1?r:e.length),a=t(o)),r>-1&&(s=s||e.slice(0,r),l=e.slice(r,e.length)),s=N2(s??e,n),{fullPath:s+(o&&"?")+o+l,path:s,query:a,hash:ms(l)}}function O2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vr(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function M2(t,e,n){const s=e.matched.length-1,a=n.matched.length-1;return s>-1&&s===a&&Nn(e.matched[s],n.matched[a])&&mc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!D2(t[n],e[n]))return!1;return!0}function D2(t,e){return ve(t)?br(t,e):ve(e)?br(e,t):t===e}function br(t,e){return ve(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function N2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let o=n.length-1,l,r;for(l=0;l<s.length;l++)if(r=s[l],r!==".")if(r==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(l).join("/")}var gs;(function(t){t.pop="pop",t.push="push"})(gs||(gs={}));var rs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(rs||(rs={}));function z2(t){if(!t)if(wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),R2(t)}const B2=/^[^#]+#/;function H2(t,e){return t.replace(B2,"#")+e}function F2(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ca=()=>({left:window.scrollX,top:window.scrollY});function j2(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;e=F2(a,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yr(t,e){return(history.state?history.state.position-e:-1)+t}const ko=new Map;function V2(t,e){ko.set(t,e)}function q2(t){const e=ko.get(t);return ko.delete(t),e}let U2=()=>location.protocol+"//"+location.host;function gc(t,e){const{pathname:n,search:s,hash:a}=e,o=t.indexOf("#");if(o>-1){let r=a.includes(t.slice(o))?t.slice(o).length:1,c=a.slice(r);return c[0]!=="/"&&(c="/"+c),vr(c,"")}return vr(n,t)+s+a}function G2(t,e,n,s){let a=[],o=[],l=null;const r=({state:f})=>{const h=gc(t,location),g=n.value,w=e.value;let k=0;if(f){if(n.value=h,e.value=f,l&&l===g){l=null;return}k=w?f.position-w.position:0}else s(h);a.forEach(b=>{b(n.value,g,{delta:k,type:gs.pop,direction:k?k>0?rs.forward:rs.back:rs.unknown})})};function c(){l=n.value}function u(f){a.push(f);const h=()=>{const g=a.indexOf(f);g>-1&&a.splice(g,1)};return o.push(h),h}function p(){const{history:f}=window;f.state&&f.replaceState(ht({},f.state,{scroll:Ca()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function kr(t,e,n,s=!1,a=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:a?Ca():null}}function W2(t){const{history:e,location:n}=window,s={value:gc(t,n)},a={value:e.state};a.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,u,p){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:U2()+t+c;try{e[p?"replaceState":"pushState"](u,"",f),a.value=u}catch(h){console.error(h),n[p?"replace":"assign"](f)}}function l(c,u){const p=ht({},e.state,kr(a.value.back,c,a.value.forward,!0),u,{position:a.value.position});o(c,p,!0),s.value=c}function r(c,u){const p=ht({},a.value,e.state,{forward:c,scroll:Ca()});o(p.current,p,!0);const d=ht({},kr(s.value,c,null),{position:p.position+1},u);o(c,d,!1),s.value=c}return{location:s,state:a,push:r,replace:l}}function K2(t){t=z2(t);const e=W2(t),n=G2(t,e.state,e.location,e.replace);function s(o,l=!0){l||n.pauseListeners(),history.go(o)}const a=ht({location:"",base:t,go:s,createHref:H2.bind(null,t)},e,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function Y2(t){return typeof t=="string"||t&&typeof t=="object"}function vc(t){return typeof t=="string"||typeof t=="symbol"}const Le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bc=Symbol("");var _r;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_r||(_r={}));function zn(t,e){return ht(new Error,{type:t,[bc]:!0},e)}function Te(t,e){return t instanceof Error&&bc in t&&(e==null||!!(t.type&e))}const wr="[^/]+?",J2={sensitive:!1,strict:!1,start:!0,end:!0},Q2=/[.+*?^${}()[\]/\\]/g;function X2(t,e){const n=ht({},J2,e),s=[];let a=n.start?"^":"";const o=[];for(const u of t){const p=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(Q2,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:w,optional:k,regexp:b}=f;o.push({name:g,repeatable:w,optional:k});const E=b||wr;if(E!==wr){h+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+T.message)}}let y=w?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(y=k&&u.length<2?`(?:/${y})`:"/"+y),k&&(y+="?"),a+=y,h+=20,k&&(h+=-8),w&&(h+=-20),E===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const l=new RegExp(a,n.sensitive?"":"i");function r(u){const p=u.match(l),d={};if(!p)return null;for(let f=1;f<p.length;f++){const h=p[f]||"",g=o[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function c(u){let p="",d=!1;for(const f of t){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const h of f)if(h.type===0)p+=h.value;else if(h.type===1){const{value:g,repeatable:w,optional:k}=h,b=g in u?u[g]:"";if(ve(b)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=ve(b)?b.join("/"):b;if(!E)if(k)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);p+=E}}return p||"/"}return{re:l,score:s,keys:o,parse:r,stringify:c}}function Z2(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function t0(t,e){let n=0;const s=t.score,a=e.score;for(;n<s.length&&n<a.length;){const o=Z2(s[n],a[n]);if(o)return o;n++}if(Math.abs(a.length-s.length)===1){if(xr(s))return 1;if(xr(a))return-1}return a.length-s.length}function xr(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const e0={type:0,value:""},n0=/[a-zA-Z0-9_]/;function s0(t){if(!t)return[[]];if(t==="/")return[[e0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const a=[];let o;function l(){o&&a.push(o),o=[]}let r=0,c,u="",p="";function d(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;r<t.length;){if(c=t[r++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),l()):c===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:n0.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),l(),a}function a0(t,e,n){const s=X2(s0(t.path),n),a=ht(s,{record:t,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function o0(t,e){const n=[],s=new Map;e=Tr({strict:!1,end:!0,sensitive:!1},e);function a(p){return s.get(p)}function o(p,d,f){const h=!f,g=l0(p);g.aliasOf=f&&f.record;const w=Tr(e,p),k=[g];if("alias"in p){const y=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of y)k.push(ht({},g,{components:f?f.record.components:g.components,path:T,aliasOf:f?f.record:g}))}let b,E;for(const y of k){const{path:T}=y;if(d&&T[0]!=="/"){const M=d.record.path,C=M[M.length-1]==="/"?"":"/";y.path=d.record.path+(T&&C+T)}if(b=a0(y,d,w),f?f.alias.push(b):(E=E||b,E!==b&&E.alias.push(b),h&&p.name&&!Cr(b)&&l(p.name)),g.children){const M=g.children;for(let C=0;C<M.length;C++)o(M[C],b,f&&f.children[C])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return E?()=>{l(E)}:ls}function l(p){if(vc(p)){const d=s.get(p);d&&(s.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function r(){return n}function c(p){let d=0;for(;d<n.length&&t0(p,n[d])>=0&&(p.record.path!==n[d].record.path||!yc(p,n[d]));)d++;n.splice(d,0,p),p.record.name&&!Cr(p)&&s.set(p.record.name,p)}function u(p,d){let f,h={},g,w;if("name"in p&&p.name){if(f=s.get(p.name),!f)throw zn(1,{location:p});w=f.record.name,h=ht(Er(d.params,f.keys.filter(E=>!E.optional).concat(f.parent?f.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),p.params&&Er(p.params,f.keys.map(E=>E.name))),g=f.stringify(h)}else if(p.path!=null)g=p.path,f=n.find(E=>E.re.test(g)),f&&(h=f.parse(g),w=f.record.name);else{if(f=d.name?s.get(d.name):n.find(E=>E.re.test(d.path)),!f)throw zn(1,{location:p,currentLocation:d});w=f.record.name,h=ht({},d.params,p.params),g=f.stringify(h)}const k=[];let b=f;for(;b;)k.unshift(b.record),b=b.parent;return{name:w,path:g,params:h,matched:k,meta:i0(k)}}return t.forEach(p=>o(p)),{addRoute:o,resolve:u,removeRoute:l,getRoutes:r,getRecordMatcher:a}}function Er(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function l0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:r0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function r0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Cr(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function i0(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function Tr(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function yc(t,e){return e.children.some(n=>n===t||yc(t,n))}function c0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<s.length;++a){const o=s[a].replace(pc," "),l=o.indexOf("="),r=ms(l<0?o:o.slice(0,l)),c=l<0?null:ms(o.slice(l+1));if(r in e){let u=e[r];ve(u)||(u=e[r]=[u]),u.push(c)}else e[r]=c}return e}function $r(t){let e="";for(let n in t){const s=t[n];if(n=A2(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ve(s)?s.map(o=>o&&yo(o)):[s&&yo(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function u0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ve(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const p0=Symbol(""),Lr=Symbol(""),Ta=Symbol(""),ll=Symbol(""),_o=Symbol("");function Yn(){let t=[];function e(s){return t.push(s),()=>{const a=t.indexOf(s);a>-1&&t.splice(a,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function We(t,e,n,s,a,o=l=>l()){const l=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((r,c)=>{const u=f=>{f===!1?c(zn(4,{from:n,to:e})):f instanceof Error?c(f):Y2(f)?c(zn(2,{from:e,to:f})):(l&&s.enterCallbacks[a]===l&&typeof f=="function"&&l.push(f),r())},p=o(()=>t.call(s&&s.instances[a],e,n,u));let d=Promise.resolve(p);t.length<3&&(d=d.then(u)),d.catch(f=>c(f))})}function Ka(t,e,n,s,a=o=>o()){const o=[];for(const l of t)for(const r in l.components){let c=l.components[r];if(!(e!=="beforeRouteEnter"&&!l.instances[r]))if(d0(c)){const p=(c.__vccOpts||c)[e];p&&o.push(We(p,n,s,l,r,a))}else{let u=c();o.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=b2(p)?p.default:p;l.components[r]=d;const h=(d.__vccOpts||d)[e];return h&&We(h,n,s,l,r,a)()}))}}return o}function d0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ar(t){const e=kt(Ta),n=kt(ll),s=_(()=>e.resolve(pn(t.to))),a=_(()=>{const{matched:c}=s.value,{length:u}=c,p=c[u-1],d=n.matched;if(!p||!d.length)return-1;const f=d.findIndex(Nn.bind(null,p));if(f>-1)return f;const h=Sr(c[u-2]);return u>1&&Sr(p)===h&&d[d.length-1].path!==h?d.findIndex(Nn.bind(null,c[u-2])):f}),o=_(()=>a.value>-1&&g0(n.params,s.value.params)),l=_(()=>a.value>-1&&a.value===n.matched.length-1&&mc(n.params,s.value.params));function r(c={}){return m0(c)?e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(ls):Promise.resolve()}return{route:s,href:_(()=>s.value.href),isActive:o,isExactActive:l,navigate:r}}const f0=z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ar,setup(t,{slots:e}){const n=Cs(Ar(t)),{options:s}=kt(Ta),a=_(()=>({[Ir(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ir(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),h0=f0;function m0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function g0(t,e){for(const n in e){const s=e[n],a=t[n];if(typeof s=="string"){if(s!==a)return!1}else if(!ve(a)||a.length!==s.length||s.some((o,l)=>o!==a[l]))return!1}return!0}function Sr(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ir=(t,e,n)=>t??e??n,v0=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kt(_o),a=_(()=>t.route||s.value),o=kt(Lr,0),l=_(()=>{let u=pn(o);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),r=_(()=>a.value.matched[l.value]);ge(Lr,_(()=>l.value+1)),ge(p0,r),ge(_o,a);const c=Q();return pt(()=>[c.value,r.value,t.name],([u,p,d],[f,h,g])=>{p&&(p.instances[d]=u,h&&h!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!Nn(p,h)||!f)&&(p.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=a.value,p=t.name,d=r.value,f=d&&d.components[p];if(!f)return Pr(n.default,{Component:f,route:u});const h=d.props[p],g=h?h===!0?u.params:typeof h=="function"?h(u):h:null,k=i(f,ht({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[p]=null)},ref:c}));return Pr(n.default,{Component:k,route:u})||k}}});function Pr(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const b0=v0;function y0(t){const e=o0(t.routes,t),n=t.parseQuery||c0,s=t.stringifyQuery||$r,a=t.history,o=Yn(),l=Yn(),r=Yn(),c=At(Le);let u=Le;wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ga.bind(null,$=>""+$),d=Ga.bind(null,I2),f=Ga.bind(null,ms);function h($,j){let H,K;return vc($)?(H=e.getRecordMatcher($),K=j):K=$,e.addRoute(K,H)}function g($){const j=e.getRecordMatcher($);j&&e.removeRoute(j)}function w(){return e.getRoutes().map($=>$.record)}function k($){return!!e.getRecordMatcher($)}function b($,j){if(j=ht({},j||c.value),typeof $=="string"){const v=Wa(n,$,j.path),x=e.resolve({path:v.path},j),A=a.createHref(v.fullPath);return ht(v,x,{params:f(x.params),hash:ms(v.hash),redirectedFrom:void 0,href:A})}let H;if($.path!=null)H=ht({},$,{path:Wa(n,$.path,j.path).path});else{const v=ht({},$.params);for(const x in v)v[x]==null&&delete v[x];H=ht({},$,{params:d(v)}),j.params=d(j.params)}const K=e.resolve(H,j),rt=$.hash||"";K.params=p(f(K.params));const vt=O2(s,ht({},$,{hash:L2(rt),path:K.path})),m=a.createHref(vt);return ht({fullPath:vt,hash:rt,query:s===$r?u0($.query):$.query||{}},K,{redirectedFrom:void 0,href:m})}function E($){return typeof $=="string"?Wa(n,$,c.value.path):ht({},$)}function y($,j){if(u!==$)return zn(8,{from:j,to:$})}function T($){return D($)}function M($){return T(ht(E($),{replace:!0}))}function C($){const j=$.matched[$.matched.length-1];if(j&&j.redirect){const{redirect:H}=j;let K=typeof H=="function"?H($):H;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=E(K):{path:K},K.params={}),ht({query:$.query,hash:$.hash,params:K.path!=null?{}:$.params},K)}}function D($,j){const H=u=b($),K=c.value,rt=$.state,vt=$.force,m=$.replace===!0,v=C(H);if(v)return D(ht(E(v),{state:typeof v=="object"?ht({},rt,v.state):rt,force:vt,replace:m}),j||H);const x=H;x.redirectedFrom=j;let A;return!vt&&M2(s,K,H)&&(A=zn(16,{to:x,from:K}),ee(K,K,!0,!1)),(A?Promise.resolve(A):I(x,K)).catch(L=>Te(L)?Te(L,2)?L:be(L):W(L,x,K)).then(L=>{if(L){if(Te(L,2))return D(ht({replace:m},E(L.to),{state:typeof L.to=="object"?ht({},rt,L.to.state):rt,force:vt}),j||x)}else L=R(x,K,!0,m,rt);return q(x,K,L),L})}function P($,j){const H=y($,j);return H?Promise.reject(H):Promise.resolve()}function Y($){const j=Ce.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext($):$()}function I($,j){let H;const[K,rt,vt]=k0($,j);H=Ka(K.reverse(),"beforeRouteLeave",$,j);for(const v of K)v.leaveGuards.forEach(x=>{H.push(We(x,$,j))});const m=P.bind(null,$,j);return H.push(m),It(H).then(()=>{H=[];for(const v of o.list())H.push(We(v,$,j));return H.push(m),It(H)}).then(()=>{H=Ka(rt,"beforeRouteUpdate",$,j);for(const v of rt)v.updateGuards.forEach(x=>{H.push(We(x,$,j))});return H.push(m),It(H)}).then(()=>{H=[];for(const v of vt)if(v.beforeEnter)if(ve(v.beforeEnter))for(const x of v.beforeEnter)H.push(We(x,$,j));else H.push(We(v.beforeEnter,$,j));return H.push(m),It(H)}).then(()=>($.matched.forEach(v=>v.enterCallbacks={}),H=Ka(vt,"beforeRouteEnter",$,j,Y),H.push(m),It(H))).then(()=>{H=[];for(const v of l.list())H.push(We(v,$,j));return H.push(m),It(H)}).catch(v=>Te(v,8)?v:Promise.reject(v))}function q($,j,H){r.list().forEach(K=>Y(()=>K($,j,H)))}function R($,j,H,K,rt){const vt=y($,j);if(vt)return vt;const m=j===Le,v=wn?history.state:{};H&&(K||m?a.replace($.fullPath,ht({scroll:m&&v&&v.scroll},rt)):a.push($.fullPath,rt)),c.value=$,ee($,j,H,m),be()}let Z;function Ct(){Z||(Z=a.listen(($,j,H)=>{if(!ye.listening)return;const K=b($),rt=C(K);if(rt){D(ht(rt,{replace:!0}),K).catch(ls);return}u=K;const vt=c.value;wn&&V2(yr(vt.fullPath,H.delta),Ca()),I(K,vt).catch(m=>Te(m,12)?m:Te(m,2)?(D(m.to,K).then(v=>{Te(v,20)&&!H.delta&&H.type===gs.pop&&a.go(-1,!1)}).catch(ls),Promise.reject()):(H.delta&&a.go(-H.delta,!1),W(m,K,vt))).then(m=>{m=m||R(K,vt,!1),m&&(H.delta&&!Te(m,8)?a.go(-H.delta,!1):H.type===gs.pop&&Te(m,20)&&a.go(-1,!1)),q(K,vt,m)}).catch(ls)}))}let _t=Yn(),U=Yn(),tt;function W($,j,H){be($);const K=U.list();return K.length?K.forEach(rt=>rt($,j,H)):console.error($),Promise.reject($)}function St(){return tt&&c.value!==Le?Promise.resolve():new Promise(($,j)=>{_t.add([$,j])})}function be($){return tt||(tt=!$,Ct(),_t.list().forEach(([j,H])=>$?H($):j()),_t.reset()),$}function ee($,j,H,K){const{scrollBehavior:rt}=t;if(!wn||!rt)return Promise.resolve();const vt=!H&&q2(yr($.fullPath,0))||(K||!H)&&history.state&&history.state.scroll||null;return Ze().then(()=>rt($,j,vt)).then(m=>m&&j2(m)).catch(m=>W(m,$,j))}const Mt=$=>a.go($);let Jt;const Ce=new Set,ye={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,hasRoute:k,getRoutes:w,resolve:b,options:t,push:T,replace:M,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:o.add,beforeResolve:l.add,afterEach:r.add,onError:U.add,isReady:St,install($){const j=this;$.component("RouterLink",h0),$.component("RouterView",b0),$.config.globalProperties.$router=j,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(c)}),wn&&!Jt&&c.value===Le&&(Jt=!0,T(a.location).catch(rt=>{}));const H={};for(const rt in Le)Object.defineProperty(H,rt,{get:()=>c.value[rt],enumerable:!0});$.provide(Ta,j),$.provide(ll,yi(H)),$.provide(_o,c);const K=$.unmount;Ce.add($),$.unmount=function(){Ce.delete($),Ce.size<1&&(u=Le,Z&&Z(),Z=null,c.value=Le,Jt=!1,tt=!1),K()}}};function It($){return $.reduce((j,H)=>j.then(()=>Y(H)),Promise.resolve())}return ye}function k0(t,e){const n=[],s=[],a=[],o=Math.max(e.matched.length,t.matched.length);for(let l=0;l<o;l++){const r=e.matched[l];r&&(t.matched.find(u=>Nn(u,r))?s.push(r):n.push(r));const c=t.matched[l];c&&(e.matched.find(u=>Nn(u,c))||a.push(c))}return[n,s,a]}function vn(){return kt(Ta)}function tn(){return kt(ll)}var rl=Symbol(""),Ee=()=>{const t=kt(rl);if(!t)throw new Error("useClientData() is called without provider.");return t},_0=()=>Ee().pageComponent,mt=()=>Ee().pageData,ft=()=>Ee().pageFrontmatter,w0=()=>Ee().pageHead,il=()=>Ee().pageLang,x0=()=>Ee().pageLayout,Oe=()=>Ee().routeLocale,E0=()=>Ee().routes,kc=()=>Ee().siteData,Is=()=>Ee().siteLocaleData,C0=Symbol(""),wo=At(g2),vs=At(v2),_c=t=>{const e=d2(t);if(vs.value[e])return e;const n=encodeURI(e);return vs.value[n]?n:wo.value[e]||wo.value[n]||e},Vn=t=>{const e=_c(t),n=vs.value[e]??{...vs.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...n}},$a=z({name:"ClientOnly",setup(t,e){const n=Q(!1);return bt(()=>{n.value=!0}),()=>{var s,a;return n.value?(a=(s=e.slots).default)==null?void 0:a.call(s):null}}}),wc=z({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(t){const e=_0(),n=_(()=>{if(!t.path)return e.value;const s=Vn(t.path);return Od(()=>s.loader().then(({comp:a})=>a))});return()=>i(n.value)}}),te=(t={})=>t,Et=t=>Re(t)?t:`/${cc(t)}`,T0=t=>{if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget){const e=t.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return t.preventDefault(),!0}},Lt=({active:t=!1,activeClass:e="route-link-active",to:n,...s},{slots:a})=>{var c;const o=vn(),l=_c(n),r=l.startsWith("#")||l.startsWith("?")?l:Et(l);return i("a",{...s,class:["route-link",{[e]:t}],href:r,onClick:(u={})=>{T0(u)?o.push(n).catch():Promise.resolve()}},(c=a.default)==null?void 0:c.call(a))};Lt.displayName="RouteLink";Lt.props={active:Boolean,activeClass:String,to:String};var $0="Layout",L0="en-US",an=Cs({resolveLayouts:t=>t.reduce((e,n)=>({...e,...n.layouts}),{}),resolvePageHead:(t,e,n)=>{const s=Tt(e.description)?e.description:n.description,a=[...Array.isArray(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:s}]];return c2(a)},resolvePageHeadTitle:(t,e)=>[t.title,e.title].filter(n=>!!n).join(" | "),resolvePageLang:(t,e)=>t.lang||e.lang||L0,resolvePageLayout:(t,e)=>{const n=Tt(t.frontmatter.layout)?t.frontmatter.layout:$0;if(!e[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return e[n]},resolveRouteLocale:(t,e)=>f2(t,e),resolveSiteLocaleData:(t,e)=>{var n;return{...t,...t.locales[e],head:[...((n=t.locales[e])==null?void 0:n.head)??[],...t.head??[]]}}});const A0={},qn=t=>{const e=Oe();return _(()=>t[e.value]??{})};var Ut=Uint8Array,Cn=Uint16Array,S0=Int32Array,xc=new Ut([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ec=new Ut([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),I0=new Ut([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cc=function(t,e){for(var n=new Cn(31),s=0;s<31;++s)n[s]=e+=1<<t[s-1];for(var a=new S0(n[30]),s=1;s<30;++s)for(var o=n[s];o<n[s+1];++o)a[o]=o-n[s]<<5|s;return{b:n,r:a}},Tc=Cc(xc,2),$c=Tc.b,P0=Tc.r;$c[28]=258,P0[258]=28;var R0=Cc(Ec,0),O0=R0.b,xo=new Cn(32768);for(var yt=0;yt<32768;++yt){var Be=(yt&43690)>>1|(yt&21845)<<1;Be=(Be&52428)>>2|(Be&13107)<<2,Be=(Be&61680)>>4|(Be&3855)<<4,xo[yt]=((Be&65280)>>8|(Be&255)<<8)>>1}var is=function(t,e,n){for(var s=t.length,a=0,o=new Cn(e);a<s;++a)t[a]&&++o[t[a]-1];var l=new Cn(e);for(a=1;a<e;++a)l[a]=l[a-1]+o[a-1]<<1;var r;if(n){r=new Cn(1<<e);var c=15-e;for(a=0;a<s;++a)if(t[a])for(var u=a<<4|t[a],p=e-t[a],d=l[t[a]-1]++<<p,f=d|(1<<p)-1;d<=f;++d)r[xo[d]>>c]=u}else for(r=new Cn(s),a=0;a<s;++a)t[a]&&(r[a]=xo[l[t[a]-1]++]>>15-t[a]);return r},Ps=new Ut(288);for(var yt=0;yt<144;++yt)Ps[yt]=8;for(var yt=144;yt<256;++yt)Ps[yt]=9;for(var yt=256;yt<280;++yt)Ps[yt]=7;for(var yt=280;yt<288;++yt)Ps[yt]=8;var Lc=new Ut(32);for(var yt=0;yt<32;++yt)Lc[yt]=5;var M0=is(Ps,9,1),D0=is(Lc,5,1),Ya=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},fe=function(t,e,n){var s=e/8|0;return(t[s]|t[s+1]<<8)>>(e&7)&n},Ja=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},N0=function(t){return(t+7)/8|0},cl=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new Ut(t.subarray(e,n))},z0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ae=function(t,e,n){var s=new Error(e||z0[t]);if(s.code=t,Error.captureStackTrace&&Error.captureStackTrace(s,ae),!n)throw s;return s},B0=function(t,e,n,s){var a=t.length,o=s?s.length:0;if(!a||e.f&&!e.l)return n||new Ut(0);var l=!n,r=l||e.i!=2,c=e.i;l&&(n=new Ut(a*3));var u=function(rt){var vt=n.length;if(rt>vt){var m=new Ut(Math.max(vt*2,rt));m.set(n),n=m}},p=e.f||0,d=e.p||0,f=e.b||0,h=e.l,g=e.d,w=e.m,k=e.n,b=a*8;do{if(!h){p=fe(t,d,1);var E=fe(t,d+1,3);if(d+=3,E)if(E==1)h=M0,g=D0,w=9,k=5;else if(E==2){var C=fe(t,d,31)+257,D=fe(t,d+10,15)+4,P=C+fe(t,d+5,31)+1;d+=14;for(var Y=new Ut(P),I=new Ut(19),q=0;q<D;++q)I[I0[q]]=fe(t,d+q*3,7);d+=D*3;for(var R=Ya(I),Z=(1<<R)-1,Ct=is(I,R,1),q=0;q<P;){var _t=Ct[fe(t,d,Z)];d+=_t&15;var y=_t>>4;if(y<16)Y[q++]=y;else{var U=0,tt=0;for(y==16?(tt=3+fe(t,d,3),d+=2,U=Y[q-1]):y==17?(tt=3+fe(t,d,7),d+=3):y==18&&(tt=11+fe(t,d,127),d+=7);tt--;)Y[q++]=U}}var W=Y.subarray(0,C),St=Y.subarray(C);w=Ya(W),k=Ya(St),h=is(W,w,1),g=is(St,k,1)}else ae(1);else{var y=N0(d)+4,T=t[y-4]|t[y-3]<<8,M=y+T;if(M>a){c&&ae(0);break}r&&u(f+T),n.set(t.subarray(y,M),f),e.b=f+=T,e.p=d=M*8,e.f=p;continue}if(d>b){c&&ae(0);break}}r&&u(f+131072);for(var be=(1<<w)-1,ee=(1<<k)-1,Mt=d;;Mt=d){var U=h[Ja(t,d)&be],Jt=U>>4;if(d+=U&15,d>b){c&&ae(0);break}if(U||ae(2),Jt<256)n[f++]=Jt;else if(Jt==256){Mt=d,h=null;break}else{var Ce=Jt-254;if(Jt>264){var q=Jt-257,ye=xc[q];Ce=fe(t,d,(1<<ye)-1)+$c[q],d+=ye}var It=g[Ja(t,d)&ee],$=It>>4;It||ae(3),d+=It&15;var St=O0[$];if($>3){var ye=Ec[$];St+=Ja(t,d)&(1<<ye)-1,d+=ye}if(d>b){c&&ae(0);break}r&&u(f+131072);var j=f+Ce;if(f<St){var H=o-St,K=Math.min(St,j);for(H+f<0&&ae(3);f<K;++f)n[f]=s[H+f]}for(;f<j;++f)n[f]=n[f-St]}}e.l=h,e.p=Mt,e.b=f,e.f=p,h&&(p=1,e.m=w,e.d=g,e.n=k)}while(!p);return f!=n.length&&l?cl(n,0,f):n.subarray(0,f)},H0=new Ut(0),F0=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&ae(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&ae(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function j0(t,e){return B0(t.subarray(F0(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Rr=typeof TextEncoder<"u"&&new TextEncoder,Eo=typeof TextDecoder<"u"&&new TextDecoder,V0=0;try{Eo.decode(H0,{stream:!0}),V0=1}catch{}var q0=function(t){for(var e="",n=0;;){var s=t[n++],a=(s>127)+(s>223)+(s>239);if(n+a>t.length)return{s:e,r:cl(t,n-1)};a?a==3?(s=((s&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|s>>10,56320|s&1023)):a&1?e+=String.fromCharCode((s&31)<<6|t[n++]&63):e+=String.fromCharCode((s&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(s)}};function U0(t,e){if(e){for(var n=new Ut(t.length),s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}if(Rr)return Rr.encode(t);for(var a=t.length,o=new Ut(t.length+(t.length>>1)),l=0,r=function(p){o[l++]=p},s=0;s<a;++s){if(l+5>o.length){var c=new Ut(l+8+(a-s<<1));c.set(o),o=c}var u=t.charCodeAt(s);u<128||e?r(u):u<2048?(r(192|u>>6),r(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|t.charCodeAt(++s)&1023,r(240|u>>18),r(128|u>>12&63),r(128|u>>6&63),r(128|u&63)):(r(224|u>>12),r(128|u>>6&63),r(128|u&63))}return cl(o,0,l)}function G0(t,e){if(e){for(var n="",s=0;s<t.length;s+=16384)n+=String.fromCharCode.apply(null,t.subarray(s,s+16384));return n}else{if(Eo)return Eo.decode(t);var a=q0(t),o=a.s,n=a.r;return n.length&&ae(8),o}}const Or=t=>{const e=atob(t);return G0(j0(U0(e,!0)))},ce=(t,e)=>{var s;const n=(s=(e==null?void 0:e._instance)||Ls())==null?void 0:s.appContext.components;return n?t in n||ue(t)in n||Es(ue(t))in n:!1},Ac=t=>new Promise(e=>setTimeout(e,t)),Sc=t=>typeof t<"u",Qa=t=>typeof t=="number",Co=Array.isArray,Bn=(t,e)=>Tt(t)&&t.startsWith(e),W0=(t,e)=>Tt(t)&&t.endsWith(e),Rs=Object.entries,pe=Object.keys,ul=t=>{if(t){if(typeof t=="number")return new Date(t);const e=Date.parse(t.toString());if(!Number.isNaN(e))return new Date(e)}return null},La=t=>Bn(t,"/");function Ic(t,e){let n,s,a;const o=Q(!0),l=()=>{o.value=!0,a()};pt(t,l,{flush:"sync"});const r=typeof e=="function"?e:e.get,c=typeof e=="function"?void 0:e.set,u=Jo((p,d)=>(s=p,a=d,{get(){return o.value&&(n=r(),o.value=!1),s(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=l),u}function Un(t){return ri()?(Fp(t),!0):!1}function Ht(t){return typeof t=="function"?t():pn(t)}const Os=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K0=Object.prototype.toString,Y0=t=>K0.call(t)==="[object Object]",dn=()=>{},Mr=J0();function J0(){var t,e;return Os&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function pl(t,e){function n(...s){return new Promise((a,o)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(a).catch(o)})}return n}const Pc=t=>t();function Q0(t,e={}){let n,s,a=dn;const o=r=>{clearTimeout(r),a(),a=dn};return r=>{const c=Ht(t),u=Ht(e.maxWait);return n&&o(n),c<=0||u!==void 0&&u<=0?(s&&(o(s),s=null),Promise.resolve(r())):new Promise((p,d)=>{a=e.rejectOnCancel?d:p,u&&!s&&(s=setTimeout(()=>{n&&o(n),s=null,p(r())},u)),n=setTimeout(()=>{s&&o(s),s=null,p(r())},c)})}}function X0(...t){let e=0,n,s=!0,a=dn,o,l,r,c,u;!Bt(t[0])&&typeof t[0]=="object"?{delay:l,trailing:r=!0,leading:c=!0,rejectOnCancel:u=!1}=t[0]:[l,r=!0,c=!0,u=!1]=t;const p=()=>{n&&(clearTimeout(n),n=void 0,a(),a=dn)};return f=>{const h=Ht(l),g=Date.now()-e,w=()=>o=f();return p(),h<=0?(e=Date.now(),w()):(g>h&&(c||!s)?(e=Date.now(),w()):r&&(o=new Promise((k,b)=>{a=u?b:k,n=setTimeout(()=>{e=Date.now(),s=!0,k(w()),p()},Math.max(0,h-g))})),!c&&!n&&(n=setTimeout(()=>s=!0,h)),s=!1,o)}}function Z0(t=Pc){const e=Q(!0);function n(){e.value=!1}function s(){e.value=!0}const a=(...o)=>{e.value&&t(...o)};return{isActive:mn(e),pause:n,resume:s,eventFilter:a}}function tf(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const s=e;e=void 0,s&&await s},n}function Rc(t){return t||Ls()}function ef(...t){if(t.length!==1)return Fn(...t);const e=t[0];return typeof e=="function"?mn(Jo(()=>({get:e,set:dn}))):Q(e)}function nf(t,e=200,n={}){return pl(Q0(e,n),t)}function sf(t,e=200,n=!1,s=!0,a=!1){return pl(X0(e,n,s,a),t)}function af(t,e,n={}){const{eventFilter:s=Pc,...a}=n;return pt(t,pl(s,e),a)}function of(t,e,n={}){const{eventFilter:s,...a}=n,{eventFilter:o,pause:l,resume:r,isActive:c}=Z0(s);return{stop:af(t,e,{...a,eventFilter:o}),pause:l,resume:r,isActive:c}}function Aa(t,e=!0,n){Rc()?bt(t,n):e?t():Ze(t)}function lf(t,e){Rc(e)&&jn(t,e)}function rf(t,e,n={}){const{immediate:s=!0}=n,a=Q(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function r(){a.value=!1,l()}function c(...u){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,t(...u)},Ht(e))}return s&&(a.value=!0,Os&&c()),Un(r),{isPending:mn(a),start:c,stop:r}}function bs(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,a=Bt(t),o=Q(t);function l(r){if(arguments.length)return o.value=r,o.value;{const c=Ht(n);return o.value=o.value===c?Ht(s):c,o.value}}return a?l:[o,l]}function Ae(t){var e;const n=Ht(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ie=Os?window:void 0,Oc=Os?window.document:void 0,Mc=Os?window.navigator:void 0;function Rt(...t){let e,n,s,a;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,a]=t,e=Ie):[e,n,s,a]=t,!e)return dn;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],l=()=>{o.forEach(p=>p()),o.length=0},r=(p,d,f,h)=>(p.addEventListener(d,f,h),()=>p.removeEventListener(d,f,h)),c=pt(()=>[Ae(e),Ht(a)],([p,d])=>{if(l(),!p)return;const f=Y0(d)?{...d}:d;o.push(...n.flatMap(h=>s.map(g=>r(p,h,g,f))))},{immediate:!0,flush:"post"}),u=()=>{c(),l()};return Un(u),u}function cf(){const t=Q(!1),e=Ls();return e&&bt(()=>{t.value=!0},e),t}function Ms(t){const e=cf();return _(()=>(e.value,!!t()))}function Dc(t,e={}){const{window:n=Ie}=e,s=Ms(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const o=Q(!1),l=u=>{o.value=u.matches},r=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l))},c=Xo(()=>{s.value&&(r(),a=n.matchMedia(Ht(t)),"addEventListener"in a?a.addEventListener("change",l):a.addListener(l),o.value=a.matches)});return Un(()=>{c(),r(),a=void 0}),o}function Dr(t,e={}){const{controls:n=!1,navigator:s=Mc}=e,a=Ms(()=>s&&"permissions"in s);let o;const l=typeof t=="string"?{name:t}:t,r=Q(),c=()=>{o&&(r.value=o.state)},u=tf(async()=>{if(a.value){if(!o)try{o=await s.permissions.query(l),Rt(o,"change",c),c()}catch{r.value="prompt"}return o}});return u(),n?{state:r,isSupported:a,query:u}:r}function uf(t={}){const{navigator:e=Mc,read:n=!1,source:s,copiedDuring:a=1500,legacy:o=!1}=t,l=Ms(()=>e&&"clipboard"in e),r=Dr("clipboard-read"),c=Dr("clipboard-write"),u=_(()=>l.value||o),p=Q(""),d=Q(!1),f=rf(()=>d.value=!1,a);function h(){l.value&&b(r.value)?e.clipboard.readText().then(E=>{p.value=E}):p.value=k()}u.value&&n&&Rt(["copy","cut"],h);async function g(E=Ht(s)){u.value&&E!=null&&(l.value&&b(c.value)?await e.clipboard.writeText(E):w(E),p.value=E,d.value=!0,f.start())}function w(E){const y=document.createElement("textarea");y.value=E??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function k(){var E,y,T;return(T=(y=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:y.toString())!=null?T:""}function b(E){return E==="granted"||E==="prompt"}return{isSupported:u,text:p,copied:d,copy:g}}const Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xs="__vueuse_ssr_handlers__",pf=df();function df(){return Xs in Qs||(Qs[Xs]=Qs[Xs]||{}),Qs[Xs]}function ff(t,e){return pf[t]||e}function hf(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const mf={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Nr="vueuse-storage";function Gn(t,e,n,s={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=Ie,eventFilter:f,onError:h=I=>{console.error(I)},initOnMounted:g}=s,w=(p?At:Q)(typeof e=="function"?e():e);if(!n)try{n=ff("getDefaultStorage",()=>{var I;return(I=Ie)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!n)return w;const k=Ht(e),b=hf(k),E=(a=s.serializer)!=null?a:mf[b],{pause:y,resume:T}=of(w,()=>C(w.value),{flush:o,deep:l,eventFilter:f});d&&r&&Aa(()=>{Rt(d,"storage",P),Rt(d,Nr,Y),g&&P()}),g||P();function M(I,q){d&&d.dispatchEvent(new CustomEvent(Nr,{detail:{key:t,oldValue:I,newValue:q,storageArea:n}}))}function C(I){try{const q=n.getItem(t);if(I==null)M(q,null),n.removeItem(t);else{const R=E.write(I);q!==R&&(n.setItem(t,R),M(q,R))}}catch(q){h(q)}}function D(I){const q=I?I.newValue:n.getItem(t);if(q==null)return c&&k!=null&&n.setItem(t,E.write(k)),k;if(!I&&u){const R=E.read(q);return typeof u=="function"?u(R,k):b==="object"&&!Array.isArray(R)?{...k,...R}:R}else return typeof q!="string"?q:E.read(q)}function P(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){w.value=k;return}if(!(I&&I.key!==t)){y();try{(I==null?void 0:I.newValue)!==E.write(w.value)&&(w.value=D(I))}catch(q){h(q)}finally{I?Ze(T):T()}}}}function Y(I){P(I.detail)}return w}function gf(t){return Dc("(prefers-color-scheme: dark)",t)}function vf(t,e,n={}){const{window:s=Ie,...a}=n;let o;const l=Ms(()=>s&&"ResizeObserver"in s),r=()=>{o&&(o.disconnect(),o=void 0)},c=_(()=>Array.isArray(t)?t.map(d=>Ae(d)):[Ae(t)]),u=pt(c,d=>{if(r(),l.value&&s){o=new ResizeObserver(e);for(const f of d)f&&o.observe(f,a)}},{immediate:!0,flush:"post"}),p=()=>{r(),u()};return Un(p),{isSupported:l,stop:p}}function bf(t,e={width:0,height:0},n={}){const{window:s=Ie,box:a="content-box"}=n,o=_(()=>{var d,f;return(f=(d=Ae(t))==null?void 0:d.namespaceURI)==null?void 0:f.includes("svg")}),l=Q(e.width),r=Q(e.height),{stop:c}=vf(t,([d])=>{const f=a==="border-box"?d.borderBoxSize:a==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(s&&o.value){const h=Ae(t);if(h){const g=s.getComputedStyle(h);l.value=Number.parseFloat(g.width),r.value=Number.parseFloat(g.height)}}else if(f){const h=Array.isArray(f)?f:[f];l.value=h.reduce((g,{inlineSize:w})=>g+w,0),r.value=h.reduce((g,{blockSize:w})=>g+w,0)}else l.value=d.contentRect.width,r.value=d.contentRect.height},n);Aa(()=>{const d=Ae(t);d&&(l.value="offsetWidth"in d?d.offsetWidth:e.width,r.value="offsetHeight"in d?d.offsetHeight:e.height)});const u=pt(()=>Ae(t),d=>{l.value=d?e.width:0,r.value=d?e.height:0});function p(){c(),u()}return{width:l,height:r,stop:p}}const zr=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function dl(t,e={}){const{document:n=Oc,autoExit:s=!1}=e,a=_(()=>{var b;return(b=Ae(t))!=null?b:n==null?void 0:n.querySelector("html")}),o=Q(!1),l=_(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),r=_(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),c=_(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||a.value&&b in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),p=Ms(()=>a.value&&n&&l.value!==void 0&&r.value!==void 0&&c.value!==void 0),d=()=>u?(n==null?void 0:n[u])===a.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const b=a.value;if((b==null?void 0:b[c.value])!=null)return!!b[c.value]}}return!1};async function h(){if(!(!p.value||!o.value)){if(r.value)if((n==null?void 0:n[r.value])!=null)await n[r.value]();else{const b=a.value;(b==null?void 0:b[r.value])!=null&&await b[r.value]()}o.value=!1}}async function g(){if(!p.value||o.value)return;f()&&await h();const b=a.value;l.value&&(b==null?void 0:b[l.value])!=null&&(await b[l.value](),o.value=!0)}async function w(){await(o.value?h():g())}const k=()=>{const b=f();(!b||b&&d())&&(o.value=b)};return Rt(n,zr,k,!1),Rt(()=>Ae(a),zr,k,!1),s&&Un(h),{isSupported:p,isFullscreen:o,enter:g,exit:h,toggle:w}}function Xa(t){return typeof Window<"u"&&t instanceof Window?t.document.documentElement:typeof Document<"u"&&t instanceof Document?t.documentElement:t}function Za(t,e=dn,n={}){const{immediate:s=!0,manual:a=!1,type:o="text/javascript",async:l=!0,crossOrigin:r,referrerPolicy:c,noModule:u,defer:p,document:d=Oc,attrs:f={}}=n,h=Q(null);let g=null;const w=E=>new Promise((y,T)=>{const M=P=>(h.value=P,y(P),P);if(!d){y(!1);return}let C=!1,D=d.querySelector(`script[src="${Ht(t)}"]`);D?D.hasAttribute("data-loaded")&&M(D):(D=d.createElement("script"),D.type=o,D.async=l,D.src=Ht(t),p&&(D.defer=p),r&&(D.crossOrigin=r),u&&(D.noModule=u),c&&(D.referrerPolicy=c),Object.entries(f).forEach(([P,Y])=>D==null?void 0:D.setAttribute(P,Y)),C=!0),D.addEventListener("error",P=>T(P)),D.addEventListener("abort",P=>T(P)),D.addEventListener("load",()=>{D.setAttribute("data-loaded","true"),e(D),M(D)}),C&&(D=d.head.appendChild(D)),E||M(D)}),k=(E=!0)=>(g||(g=w(E)),g),b=()=>{if(!d)return;g=null,h.value&&(h.value=null);const E=d.querySelector(`script[src="${Ht(t)}"]`);E&&d.head.removeChild(E)};return s&&!a&&Aa(k),a||lf(b),{scriptTag:h,load:k,unload:b}}function Nc(t){const e=window.getComputedStyle(t);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&t.clientWidth<t.scrollWidth||e.overflowY==="auto"&&t.clientHeight<t.scrollHeight)return!0;{const n=t.parentNode;return!n||n.tagName==="BODY"?!1:Nc(n)}}function yf(t){const e=t||window.event,n=e.target;return Nc(n)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const Zs=new WeakMap;function zc(t,e=!1){const n=Q(e);let s=null;pt(ef(t),l=>{const r=Xa(Ht(l));if(r){const c=r;Zs.get(c)||Zs.set(c,c.style.overflow),n.value&&(c.style.overflow="hidden")}},{immediate:!0});const a=()=>{const l=Xa(Ht(t));!l||n.value||(Mr&&(s=Rt(l,"touchmove",r=>{yf(r)},{passive:!1})),l.style.overflow="hidden",n.value=!0)},o=()=>{var l;const r=Xa(Ht(t));!r||!n.value||(Mr&&(s==null||s()),r.style.overflow=(l=Zs.get(r))!=null?l:"",Zs.delete(r),n.value=!1)};return Un(o),_({get(){return n.value},set(l){l?a():o()}})}function Bc(t,e,n={}){const{window:s=Ie}=n;return Gn(t,e,s==null?void 0:s.sessionStorage,n)}function kf(t={}){const{window:e=Ie,behavior:n="auto"}=t;if(!e)return{x:Q(0),y:Q(0)};const s=Q(e.scrollX),a=Q(e.scrollY),o=_({get(){return s.value},set(r){scrollTo({left:r,behavior:n})}}),l=_({get(){return a.value},set(r){scrollTo({top:r,behavior:n})}});return Rt(e,"scroll",()=>{s.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:l}}function _f(t={}){const{window:e=Ie,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:o=!0}=t,l=Q(n),r=Q(s),c=()=>{e&&(o?(l.value=e.innerWidth,r.value=e.innerHeight):(l.value=e.document.documentElement.clientWidth,r.value=e.document.documentElement.clientHeight))};if(c(),Aa(c),Rt("resize",c,{passive:!0}),a){const u=Dc("(orientation: portrait)");pt(u,()=>c())}return{width:l,height:r}}var wf=z({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(t){const e=_(()=>{const s=["font-icon icon"],a=`fas fa-${t.icon}`;return s.push("fa-fw fa-sm"),s.push(t.icon.includes(" ")?t.icon:a),s}),n=_(()=>{const s={};return t.color&&(s.color=t.color),t.size&&(s["font-size"]=Number.isNaN(Number(t.size))?t.size:`${t.size}px`),pe(s).length?s:null});return()=>t.icon?i("span",{key:t.icon,class:e.value,style:n.value}):null}});const Hc=({type:t="info",text:e="",vertical:n,color:s},{slots:a})=>{var o;return i("span",{class:["vp-badge",t,{diy:s}],style:{verticalAlign:n??!1,backgroundColor:s??!1}},((o=a.default)==null?void 0:o.call(a))||e)};Hc.displayName="Badge";const Fc=({title:t,desc:e="",logo:n,background:s,color:a,link:o})=>{const l=[n?i("img",{class:"vp-card-logo",src:Et(n),loading:"lazy","no-view":""}):null,i("div",{class:"vp-card-content"},[i("div",{class:"vp-card-title",innerHTML:t}),i("hr"),i("div",{class:"vp-card-desc",innerHTML:e})])],r={};return s&&(r.background=s),a&&(r.color=a),o?Dn(o)?i("a",{class:"vp-card",href:o,target:"_blank",style:r},l):i(Lt,{to:o,class:"vp-card",style:r},()=>l):i("div",{class:"vp-card",style:r},l)};Fc.displayName="VPCard";const xf=te({enhance:({app:t})=>{ce("FontIcon")||t.component("FontIcon",wf),ce("Badge")||t.component("Badge",Hc),ce("VPCard")||t.component("VPCard",Fc)},setup:()=>{Za("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Za("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Za("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[]}),Br=async(t,e)=>{const{path:n,query:s}=t.currentRoute.value,{scrollBehavior:a}=t.options;t.options.scrollBehavior=void 0,await t.replace({path:n,query:s,hash:e}),t.options.scrollBehavior=a},Ef=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:s=5})=>{const a=vn();Rt("scroll",nf(()=>{var g,w;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<s){Br(a,"");return}const c=window.innerHeight+l,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(u-c)<s,d=Array.from(document.querySelectorAll(t)),h=Array.from(document.querySelectorAll(e)).filter(k=>d.some(b=>b.hash===k.hash));for(let k=0;k<h.length;k++){const b=h[k],E=h[k+1],y=l>=(((g=b.parentElement)==null?void 0:g.offsetTop)??0)-s,T=!E||l<(((w=E.parentElement)==null?void 0:w.offsetTop)??0)-s;if(!(y&&T))continue;const C=decodeURIComponent(a.currentRoute.value.hash),D=decodeURIComponent(b.hash);if(C===D)return;if(p){for(let P=k+1;P<h.length;P++)if(C===decodeURIComponent(h[P].hash))return}Br(a,D);return}},n))},Cf=".vp-sidebar-link, .vp-toc-link",Tf=".header-anchor",$f=200,Lf=5,Af=te({setup(){Ef({headerLinkSelector:Cf,headerAnchorSelector:Tf,delay:$f,offset:Lf})}});let jc=t=>Tt(t.title)?{title:t.title}:null;const Vc=Symbol(""),Sf=t=>{jc=t},If=()=>kt(Vc),Pf=t=>{t.provide(Vc,jc)};var Rf={"/":{title:"目录",empty:"暂无目录"}};const Of=z({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(t){const e=If(),n=qn(Rf),s=mt(),a=E0(),o=kc(),r=At(Rs(a.value).map(([u,{meta:p}])=>{const d=e(p);if(!d)return null;const f=u.split("/").length;return{level:W0(u,"/")?f-2:f-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...d}}).filter(u=>gn(u)&&Tt(u.title))),c=_(()=>{const u=t.base?u2(rc(t.base)):s.value.path.replace(/\/[^/]+$/,"/"),p=u.split("/").length-2,d=[];return r.value.filter(({level:f,path:h})=>{if(!Bn(h,u)||h===u)return!1;if(u==="/"){const g=pe(o.value.locales).filter(w=>w!=="/");if(h==="/404.html"||g.some(w=>Bn(h,w)))return!1}return f-p<=t.level}).sort(({title:f,level:h,order:g},{title:w,level:k,order:b})=>{const E=h-k;return E||(Qa(g)?Qa(b)?g>0?b>0?g-b:-1:b<0?g-b:1:g:Qa(b)?b:f.localeCompare(w))}).forEach(f=>{var w;const{base:h,level:g}=f;switch(g-p){case 1:{d.push(f);break}case 2:{const k=d.find(b=>b.path===h);k&&(k.children??(k.children=[])).push(f);break}default:{const k=d.find(b=>b.path===h.replace(/\/[^/]+\/$/,"/"));if(k){const b=(w=k.children)==null?void 0:w.find(E=>E.path===h);b&&(b.children??(b.children=[])).push(f)}}}}),d});return()=>{const u=c.value.some(p=>p.children);return i("div",{class:["vp-catalog-wrapper",{index:t.index}]},[t.hideHeading?null:i("h2",{class:"vp-catalog-main-title"},n.value.title),c.value.length?i(t.index?"ol":"ul",{class:["vp-catalogs",{deep:u}]},c.value.map(({children:p=[],title:d,path:f,content:h})=>{const g=i(Lt,{class:"vp-catalog-title",to:f},()=>h?i(h):d);return i("li",{class:"vp-catalog"},u?[i("h3",{id:d,class:["vp-catalog-child-title",{"has-children":p.length}]},[i("a",{href:`#${d}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),g]),p.length?i(t.index?"ol":"ul",{class:"vp-child-catalogs"},p.map(({children:w=[],content:k,path:b,title:E})=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":w.length}]},[i("a",{href:`#${E}`,class:"vp-catalog-header-anchor"},"#"),i(Lt,{class:"vp-catalog-title",to:b},()=>k?i(k):E)]),w.length?i(t.index?"ol":"div",{class:t.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},w.map(({content:y,path:T,title:M})=>t.index?i("li",{class:"vp-sub-catalog"},i(Lt,{to:T},()=>y?i(y):M)):i(Lt,{class:"vp-sub-catalog-link",to:T},()=>y?i(y):M))):null]))):null]:i("div",{class:"vp-catalog-child-title"},g))})):i("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),Mf=te({enhance:({app:t})=>{Pf(t),ce("Catalog",t)||t.component("Catalog",Of)}});var Df={"/":{backToTop:"返回顶部"}};const Nf=z({name:"BackToTop",setup(t){const e=ft(),n=qn(Df),s=At(),{height:a}=bf(s),{height:o}=_f(),{y:l}=kf(),r=_(()=>e.value.backToTop!==!1&&l.value>100),c=_(()=>l.value/(a.value-o.value)*100);return bt(()=>{s.value=document.body}),()=>i(Xe,{name:"back-to-top"},()=>r.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[i("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},i("svg",i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),i("div",{class:"back-to-top-icon"})]):null)}}),zf=te({rootComponents:[Nf]}),Bf=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),qc=z({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(t){const e=Oe(),n=_(()=>t.locales[e.value]??{openInNewWindow:"open in new window"});return()=>i("span",[Bf,i("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var Hf={};const Ff=Hf,jf=te({enhance({app:t}){t.component("ExternalLinkIcon",i(qc,{locales:Ff}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const it={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:t=>{const e=it.isStarted();t=to(t,it.settings.minimum,1),it.status=t===1?null:t;const n=it.render(!e),s=n.querySelector(it.settings.barSelector),a=it.settings.speed,o=it.settings.easing;return n.offsetWidth,Vf(l=>{ta(s,{transform:"translate3d("+Hr(t)+"%,0,0)",transition:"all "+a+"ms "+o}),t===1?(ta(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){ta(n,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){it.remove(),l()},a)},a)):setTimeout(()=>l(),a)}),it},isStarted:()=>typeof it.status=="number",start:()=>{it.status||it.set(0);const t=()=>{setTimeout(()=>{it.status&&(it.trickle(),t())},it.settings.trickleSpeed)};return it.settings.trickle&&t(),it},done:t=>!t&&!it.status?it:it.inc(.3+.5*Math.random()).set(1),inc:t=>{let e=it.status;return e?(typeof t!="number"&&(t=(1-e)*to(Math.random()*e,.1,.95)),e=to(e+t,0,.994),it.set(e)):it.start()},trickle:()=>it.inc(Math.random()*it.settings.trickleRate),render:t=>{if(it.isRendered())return document.getElementById("nprogress");Fr(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=it.settings.template;const n=e.querySelector(it.settings.barSelector),s=t?"-100":Hr(it.status||0),a=document.querySelector(it.settings.parent);return ta(n,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&Fr(a,"nprogress-custom-parent"),a==null||a.appendChild(e),e},remove:()=>{jr(document.documentElement,"nprogress-busy"),jr(document.querySelector(it.settings.parent),"nprogress-custom-parent");const t=document.getElementById("nprogress");t&&qf(t)},isRendered:()=>!!document.getElementById("nprogress")},to=(t,e,n)=>t<e?e:t>n?n:t,Hr=t=>(-1+t)*100,Vf=function(){const t=[];function e(){const n=t.shift();n&&n(e)}return function(n){t.push(n),t.length===1&&e()}}(),ta=function(){const t=["Webkit","O","Moz","ms"],e={};function n(l){return l.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(r,c){return c.toUpperCase()})}function s(l){const r=document.body.style;if(l in r)return l;let c=t.length;const u=l.charAt(0).toUpperCase()+l.slice(1);let p;for(;c--;)if(p=t[c]+u,p in r)return p;return l}function a(l){return l=n(l),e[l]??(e[l]=s(l))}function o(l,r,c){r=a(r),l.style[r]=c}return function(l,r){for(const c in r){const u=r[c];u!==void 0&&Object.prototype.hasOwnProperty.call(r,c)&&o(l,c,u)}}}(),Uc=(t,e)=>(typeof t=="string"?t:fl(t)).indexOf(" "+e+" ")>=0,Fr=(t,e)=>{const n=fl(t),s=n+e;Uc(n,e)||(t.className=s.substring(1))},jr=(t,e)=>{const n=fl(t);if(!Uc(t,e))return;const s=n.replace(" "+e+" "," ");t.className=s.substring(1,s.length-1)},fl=t=>(" "+(t.className||"")+" ").replace(/\s+/gi," "),qf=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)},Uf=()=>{bt(()=>{const t=vn(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||it.start()}),t.afterEach(n=>{e.add(n.path),it.done()})})},Gf=te({setup(){Uf()}}),Wf=JSON.parse(`{"encrypt":{"config":{"/notes/PLAN_Z.html":["$2a$10$uzrUmfiBq6iBpMWpg0lwFuzfsqXLVJFoDXCx/05XzaKQLjBjjq7jK"]}},"author":{"name":"BradZhone","url":"https://github.com/BradZhone"},"logo":"light.png","logoDark":"dark.png","docsDir":"src","darkmode":"toggle","footer":"BradZhone's Blog","displayFooter":true,"blog":{"intro":"/intro.html","medias":{"Email":"mailto:callmezxz@gmail.com","GitHub":"https://github.com/BradZhone"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"Blogs","icon":"blog","link":"/blogs/"},{"text":"Notes","icon":"note-sticky","link":"/notes/"},{"text":"Thinking","icon":"lightbulb","link":"/thinking/"},{"text":"About Me","icon":"star","link":"/intro.html"}],"sidebar":{"/":[{"text":"Blogs","icon":"blog","prefix":"blogs/","link":"blogs/","children":"structure"},{"text":"Notes","icon":"note-sticky","prefix":"notes/","link":"notes/","children":"structure"},{"text":"Thinking","icon":"lightbulb","prefix":"thinking/","link":"thinking/","children":"structure"}]}}}}`),Kf=Q(Wf),Gc=()=>Kf,Wc=Symbol(""),Yf=()=>{const t=kt(Wc);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},Jf=(t,e)=>{const{locales:n,...s}=t;return{...s,...n==null?void 0:n[e]}},Qf=te({enhance({app:t}){const e=Gc(),n=t._context.provides[rl],s=_(()=>Jf(e.value,n.routeLocale.value));t.provide(Wc,s),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return s.value}}})}});var Xf={provider:"Giscus",lightTheme:"light",darkTheme:"transparent_dark",repo:"BradZhone/bradzhone.github.io",repoId:"R_kgDOLlrpEQ",category:"Announcements",categoryId:"DIC_kwDOLlrpEc4CeSuW"};const Zf=Xf;let t3=Zf;const Kc=Symbol(""),Yc=()=>kt(Kc),e3=Yc,n3=t=>{t.provide(Kc,t3)},Jc=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[i("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},i("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},i("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Jc.displayName="LoadingIcon";const Vr=["ar","ca","da","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","uz","vi","zh-CN","zh-TW"],s3=z({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(t){const e=e3(),n=il(),s=!!(e.repo&&e.repoId&&e.category&&e.categoryId),{repo:a,repoId:o,category:l,categoryId:r}=e,c=Q(!1),u=_(()=>{if(Vr.includes(n.value))return n.value;const d=n.value.split("-")[0];return Vr.includes(d)?d:"en"}),p=_(()=>({repo:a,repoId:o,category:l,categoryId:r,lang:u.value,theme:t.darkmode?e.darkTheme||"dark":e.lightTheme||"light",mapping:e.mapping||"pathname",term:t.identifier,inputPosition:e.inputPosition||"top",reactionsEnabled:e.reactionsEnabled===!1?"0":"1",strict:e.strict===!1?"0":"1",loading:e.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return bt(async()=>{await G(()=>import("./giscus-7BMGhbDA.js"),__vite__mapDeps([])),c.value=!0}),()=>s?i("div",{id:"comment",class:["giscus-wrapper",{"input-top":e.inputPosition!=="bottom"}]},c.value?i("giscus-widget",p.value):i(Jc)):null}}),a3=z({name:"CommentService",props:{darkmode:Boolean},setup(t){const e=Yc(),n=mt(),s=ft(),a=e.comment!==!1,o=_(()=>s.value.comment||a&&s.value.comment!==!1);return()=>i(s3,{id:"vp-comment",identifier:s.value.commentID||n.value.path,darkmode:t.darkmode,style:{display:o.value?"block":"none"}})}}),o3=te({enhance:({app:t})=>{n3(t),t.component("CommentService",a3)}}),l3=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,r3=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&l3.test(navigator.userAgent),i3=({delay:t=500,duration:e=2e3,locales:n,selector:s,showInMobile:a})=>{const{copy:o,copied:l}=uf({legacy:!0,copiedDuring:e}),r=qn(n),c=mt(),u=f=>{if(!f.hasAttribute("copy-code-registered")){const h=document.createElement("button");h.type="button",h.classList.add("vp-copy-code-button"),h.innerHTML='<div class="vp-copy-icon" />',h.setAttribute("aria-label",r.value.copy),h.setAttribute("data-copied",r.value.copied),f.parentElement&&f.parentElement.insertBefore(h,f),f.setAttribute("copy-code-registered","")}},p=()=>{Ze().then(()=>Ac(t)).then(()=>{s.forEach(f=>{document.querySelectorAll(f).forEach(u)})})},d=(f,h,g)=>{let{innerText:w=""}=h;/language-(shellscript|shell|bash|sh|zsh)/.test(f.classList.toString())&&(w=w.replace(/^ *(\$|>) /gm,"")),o(w).then(()=>{g.classList.add("copied"),pt(l,()=>{g.classList.remove("copied"),g.blur()},{once:!0})})};bt(()=>{const f=!r3()||a;f&&p(),Rt("click",h=>{const g=h.target;if(g.matches('div[class*="language-"] > button.copy')){const w=g.parentElement,k=g.nextElementSibling;k&&d(w,k,g)}else if(g.matches('div[class*="language-"] div.vp-copy-icon')){const w=g.parentElement,k=w.parentElement,b=w.nextElementSibling;b&&d(k,b,w)}}),pt(()=>c.value.path,()=>{f&&p()})})};var c3={"/":{copy:"复制代码",copied:"已复制"}},u3=['.theme-hope-content div[class*="language-"] pre'];const p3=500,d3=2e3,f3=c3,h3=u3,m3=!1,g3=te({setup:()=>{i3({selector:h3,locales:f3,duration:d3,delay:p3,showInMobile:m3})}});var v3={"/":{author:"著作权归:author所有",license:"基于:license协议",link:"原文链接：:link"}},b3={canonical:"https://bradzhone.github.io",author:"BradZhone",license:"",global:!0,disableCopy:!1,disableSelection:!1,triggerLength:100,maxLength:0};const je=b3,{canonical:ea}=je,y3=()=>{const t=ft(),e=qn(v3),n=mt(),s=_(()=>!!t.value.copy||t.value.copy!==!1&&je.global),a=_(()=>gn(t.value.copy)?t.value.copy:null),o=_(()=>{var h;return((h=a.value)==null?void 0:h.disableCopy)??je.disableCopy}),l=_(()=>{var h;return s.value?((h=a.value)==null?void 0:h.disableSelection)??je.disableSelection:!1}),r=_(()=>{var h;return s.value?((h=a.value)==null?void 0:h.maxLength)??je.maxLength:0}),c=_(()=>{var h;return((h=a.value)==null?void 0:h.triggerLength)??je.triggerLength}),u=()=>ea?`${Ea(Re(ea)?ea:`https://${ea}`)}${n.value.path}`:window.location.href,p=(h,g)=>{const{author:w,license:k,link:b}=e.value;return[h?w.replace(":author",h):"",g?k.replace(":license",g):"",b.replace(":link",u())].filter(E=>E).join(`
`)},d=()=>{if(Tt(n.value.copyright))return n.value.copyright.replace(":link",u());const{author:h,license:g}=n.value.copyright||{};return p(h??je.author,g??je.license)},f=h=>{const g=getSelection();if(g){const w=g.getRangeAt(0);if(s.value){const k=w.toString().length;if(o.value||r.value&&k>r.value)return h.preventDefault();if(k>=c.value){h.preventDefault();const b=d(),E=document.createElement("div");E.appendChild(g.getRangeAt(0).cloneContents()),h.clipboardData&&(h.clipboardData.setData("text/html",`${E.innerHTML}<hr><div class="copyright">${b.replace(/\\n/g,"<br>")}</div>`),h.clipboardData.setData("text/plain",`${g.getRangeAt(0).cloneContents().textContent||""}
------
${b}`))}}}};bt(()=>{const h=document.querySelector("#app");Rt(h,"copy",f),Xo(()=>{h.style.userSelect=l.value?"none":"auto"})})},k3=te({setup:()=>{y3()}}),na=Gn("VUEPRESS_CODE_TAB_STORE",{});var _3=z({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(t,{slots:e}){const n=Q(t.active),s=At([]),a=()=>{t.tabId&&(na.value[t.tabId]=t.data[n.value].id)},o=(u=n.value)=>{n.value=u<s.value.length-1?u+1:0,s.value[n.value].focus()},l=(u=n.value)=>{n.value=u>0?u-1:s.value.length-1,s.value[n.value].focus()},r=(u,p)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=p):u.key==="ArrowRight"?(u.preventDefault(),o()):u.key==="ArrowLeft"&&(u.preventDefault(),l()),t.tabId&&(na.value[t.tabId]=t.data[n.value].id)},c=()=>{if(t.tabId){const u=t.data.findIndex(({id:p})=>na.value[t.tabId]===p);if(u!==-1)return u}return t.active};return bt(()=>{n.value=c(),pt(()=>na.value[t.tabId],(u,p)=>{if(t.tabId&&u!==p){const d=t.data.findIndex(({id:f})=>f===u);d!==-1&&(n.value=d)}})}),()=>t.data.length?i("div",{class:"vp-code-tabs"},[i("div",{class:"vp-code-tabs-nav",role:"tablist"},t.data.map(({id:u},p)=>{const d=p===n.value;return i("button",{type:"button",ref:f=>{f&&(s.value[p]=f)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${t.id}-${p}`,"aria-selected":d,onClick:()=>{n.value=p,a()},onKeydown:f=>r(f,p)},e[`title${p}`]({value:u,isActive:d}))})),t.data.map(({id:u},p)=>{const d=p===n.value;return i("div",{class:["vp-code-tab",{active:d}],id:`codetab-${t.id}-${p}`,role:"tabpanel","aria-expanded":d},[i("div",{class:"vp-code-tab-title"},e[`title${p}`]({value:u,isActive:d})),e[`tab${p}`]({value:u,isActive:d})])})]):null}});const Qc=({active:t=!1},{slots:e})=>{var n;return i("div",{class:["code-group-item",{active:t}],"aria-selected":t},(n=e.default)==null?void 0:n.call(e))};Qc.displayName="CodeGroupItem";const w3=z({name:"CodeGroup",slots:Object,setup(t,{slots:e}){const n=Q(-1),s=At([]),a=(r=n.value)=>{n.value=r<s.value.length-1?r+1:0,s.value[n.value].focus()},o=(r=n.value)=>{n.value=r>0?r-1:s.value.length-1,s.value[n.value].focus()},l=(r,c)=>{r.key===" "||r.key==="Enter"?(r.preventDefault(),n.value=c):r.key==="ArrowRight"?(r.preventDefault(),a(c)):r.key==="ArrowLeft"&&(r.preventDefault(),o(c))};return()=>{var c;const r=(((c=e.default)==null?void 0:c.call(e))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return r.length===0?null:(n.value<0||n.value>r.length-1?(n.value=r.findIndex(u=>"active"in u.props),n.value===-1&&(n.value=0)):r.forEach((u,p)=>{u.props.active=p===n.value}),i("div",{class:"code-group"},[i("div",{class:"code-group-nav"},r.map((u,p)=>{const d=p===n.value;return i("button",{type:"button",ref:f=>{f&&(s.value[p]=f)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{n.value=p},onKeydown:f=>l(f,p)},u.props.title)})),r]))}}}),dt=({name:t="",color:e="currentColor"},{slots:n})=>{var s;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${t}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${t} icon`},(s=n.default)==null?void 0:s.call(n))};dt.displayName="IconBase";const Xc=({size:t=48,stroke:e=4,wrapper:n=!0,height:s=2*t})=>{const a=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};Xc.displayName="LoadingIcon";const Zc=(t,{slots:e})=>{var n;return(n=e.default)==null?void 0:n.call(e)},tu=()=>i(dt,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));tu.displayName="GitHubIcon";const eu=()=>i(dt,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));eu.displayName="GitLabIcon";const nu=()=>i(dt,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));nu.displayName="GiteeIcon";const su=()=>i(dt,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));su.displayName="BitbucketIcon";const au=()=>i(dt,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));au.displayName="SourceIcon";const Sa=(t,e)=>{let n=1;for(let s=0;s<t.length;s++)n+=t.charCodeAt(s),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%e};let x3=class{constructor(){this.messageElements={};const e="message-container",n=document.getElementById(e);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,n=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=e,this.containerElement.appendChild(s),this.messageElements[a]=s,n>0&&setTimeout(()=>{this.close(a)},n),a}close(e){if(e){const n=this.messageElements[e];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[e]})}else pe(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const ou=/#.*$/u,E3=t=>{const e=ou.exec(t);return e?e[0]:""},qr=t=>decodeURI(t).replace(ou,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),lu=(t,e)=>{if(!Sc(e))return!1;const n=qr(t.path),s=qr(e),a=E3(e);return a?a===t.hash&&(!s||n===s):n===s},C3=t=>Re(t)?t:`https://github.com/${t}`,ru=t=>!Re(t)||/github\.com/.test(t)?"GitHub":/bitbucket\.org/.test(t)?"Bitbucket":/gitlab\.com/.test(t)?"GitLab":/gitee\.com/.test(t)?"Gitee":null;var T3=t=>Object.prototype.toString.call(t)==="[object Object]",ys=t=>typeof t=="string";const iu=Array.isArray,Ur=t=>T3(t)&&ys(t.name),ks=(t,e=!1)=>t?iu(t)?t.map(n=>ys(n)?{name:n}:Ur(n)?n:null).filter(n=>n!==null):ys(t)?[{name:t}]:Ur(t)?[t]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,t),[]):[],cu=(t,e)=>{if(t){if(iu(t)&&t.every(ys))return t;if(ys(t))return[t];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,t)}return[]},uu=t=>cu(t,"category"),pu=t=>cu(t,"tag"),$3='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',L3='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var A3={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const eo=A3,Gr={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},S3=(t,e,n)=>{const s=document.createElement(t);return gn(e)&&pe(e).forEach(a=>{if(a.indexOf("data"))s[a]=e[a];else{const o=a.replace("data","");s.dataset[o]=e[a]}}),n&&n.forEach(a=>{s.appendChild(a)}),s},hl=t=>({...eo,...t,jsLib:Array.from(new Set([...eo.jsLib||[],...t.jsLib||[]])),cssLib:Array.from(new Set([...eo.cssLib||[],...t.cssLib||[]]))}),Sn=(t,e)=>{if(Sc(t[e]))return t[e];const n=new Promise(s=>{var o;const a=document.createElement("script");a.src=e,(o=document.querySelector("body"))==null||o.appendChild(a),a.onload=()=>{s()}});return t[e]=n,n},I3=(t,e)=>{if(e.css&&Array.from(t.childNodes).every(n=>n.nodeName!=="STYLE")){const n=S3("style",{innerHTML:e.css});t.appendChild(n)}},P3=(t,e,n)=>{const s=n.getScript();if(s&&Array.from(e.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${t} .vp-code-demo-display').shadowRoot;
${s}}`)),e.appendChild(a)}},R3=t=>{const e=pe(t),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(s=>{const a=e.filter(o=>Gr[s].types.includes(o));if(a.length){const o=a[0];n[s]=[t[o].replace(/^\n|\n$/g,""),Gr[s].map[o]||o]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},du=t=>t.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),fu=t=>`<div id="app">
${du(t)}
</div>`,O3=t=>`${t.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,M3=t=>t.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),hu=t=>`(function(exports){var module={};module.exports=exports;${t};return module.exports.__esModule?module.exports.default:module.exports;})({})`,D3=(t,e)=>{const n=hl(e),s=t.js[0]||"";return{...n,html:du(t.html[0]||""),js:s,css:t.css[0]||"",isLegal:t.isLegal,getScript:()=>{var a;return n.useBabel?((a=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:a.code)||"":s}}},N3=/<template>([\s\S]+)<\/template>/u,z3=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,B3=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,H3=(t,e)=>{const n=hl(e),s=t.html[0]||"",a=N3.exec(s),o=z3.exec(s),l=B3.exec(s),r=a?a[1].replace(/^\n|\n$/g,""):"",[c="",u=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[p="",d=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],f=u===""&&(d===""||d==="css");return{...n,html:fu(r),js:M3(c),css:p,isLegal:f,jsLib:[n.vue,...n.jsLib],getScript:()=>{var g,w;const h=e.useBabel?((w=(g=window.Babel)==null?void 0:g.transform(c,{presets:["es2015"]}))==null?void 0:w.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${hu(h)};appOptions.template=\`${r.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},F3=(t,e)=>{const n=hl(e);return{...n,html:fu(""),js:O3(t.js[0]||""),css:t.css[0]||(t.js[0]?t.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:t.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var a,o;const s=((o=(a=window.Babel)==null?void 0:a.transform(t.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${hu(s)}))`}}},In={},j3=t=>Promise.all([Sn(In,t.babel),Sn(In,t.react),Sn(In,t.reactDOM)]),V3=t=>{const e=[Sn(In,t.vue)];return t.useBabel&&e.push(Sn(In,t.babel)),Promise.all(e)},q3=t=>t.useBabel?Sn(In,t.babel):Promise.resolve();var U3=z({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const[n,s]=bs(!1),a=At(),o=At(),l=Q("0"),r=Q(!1),c=_(()=>JSON.parse(t.config?Or(t.config):"{}")),u=_(()=>{const g=JSON.parse(Or(t.code));return R3(g)}),p=_(()=>t.type==="react"?F3(u.value,c.value):t.type==="vue"?H3(u.value,c.value):D3(u.value,c.value)),d=_(()=>p.value.isLegal),f=(g=!1)=>{const w=a.value.attachShadow({mode:"open"}),k=document.createElement("div");k.classList.add("code-demo-app"),w.appendChild(k),d.value?(g&&(k.innerHTML=p.value.html),I3(w,p.value),P3(t.id,w,p.value),l.value="0"):l.value="auto",r.value=!0},h=()=>{switch(t.type){case"react":return j3(p.value).then(()=>f());case"vue":return V3(p.value).then(()=>f());default:return q3(p.value).then(()=>f(!0))}};return Rt("beforeprint",()=>{s(!0)}),bt(()=>{setTimeout(()=>{h()},800)}),()=>{var g;return i("div",{class:"vp-code-demo",id:t.id},[i("div",{class:"vp-code-demo-header"},[p.value.isLegal?i("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{l.value=n.value?"0":`${o.value.clientHeight+13.8}px`,s()}}):null,t.title?i("span",{class:"vp-code-demo-title"},decodeURIComponent(t.title)):null,p.value.isLegal&&p.value.jsfiddle!==!1?i("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[i("input",{type:"hidden",name:"html",value:p.value.html}),i("input",{type:"hidden",name:"js",value:p.value.js}),i("input",{type:"hidden",name:"css",value:p.value.css}),i("input",{type:"hidden",name:"wrap",value:"1"}),i("input",{type:"hidden",name:"panel_js",value:"3"}),i("input",{type:"hidden",name:"resources",value:[...p.value.cssLib,...p.value.jsLib].join(",")}),i("button",{type:"submit",class:"jsfiddle-button",innerHTML:L3,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!p.value.isLegal||p.value.codepen!==!1?i("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[i("input",{type:"hidden",name:"data",value:JSON.stringify({html:p.value.html,js:p.value.js,css:p.value.css,js_external:p.value.jsLib.join(";"),css_external:p.value.cssLib.join(";"),layout:p.value.codepenLayout,html_pre_processor:u.value?u.value.html[1]:"none",js_pre_processor:u.value?u.value.js[1]:p.value.jsx?"babel":"none",css_pre_processor:u.value?u.value.css[1]:"none",editors:p.value.codepenEditors})}),i("button",{type:"submit",innerHTML:$3,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),r.value?null:i(Xc,{class:"vp-code-demo-loading"}),i("div",{ref:a,class:"vp-code-demo-display",style:{display:d.value&&r.value?"block":"none"}}),i("div",{class:"vp-code-demo-code-wrapper",style:{height:l.value}},i("div",{ref:o,class:"vp-code-demo-codes"},(g=e.default)==null?void 0:g.call(e)))])}}}),G3=z({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(t,{slots:e}){const[n,s]=bs(!1),a=At(),o=Q("0");return Rt("beforeprint",()=>{s(!0)}),()=>{var l,r;return i("div",{class:"vp-md-demo",id:t.id},[i("div",{class:"vp-md-demo-header"},[i("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{o.value=n.value?"0":`${a.value.clientHeight+13.8}px`,s()}}),t.title?decodeURIComponent(t.title):null]),i("div",{class:"vp-md-demo-display"},(l=e.default)==null?void 0:l.call(e)),i("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},i("div",{ref:a,class:"vp-md-demo-codes"},(r=e.code)==null?void 0:r.call(e)))])}}});const W3=()=>{Rt("beforeprint",()=>{document.querySelectorAll("details").forEach(t=>{t.open=!0})})},no=Gn("VUEPRESS_TAB_STORE",{});var K3=z({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(t,{slots:e}){const n=Q(t.active),s=At([]),a=()=>{t.tabId&&(no.value[t.tabId]=t.data[n.value].id)},o=(u=n.value)=>{n.value=u<s.value.length-1?u+1:0,s.value[n.value].focus()},l=(u=n.value)=>{n.value=u>0?u-1:s.value.length-1,s.value[n.value].focus()},r=(u,p)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=p):u.key==="ArrowRight"?(u.preventDefault(),o()):u.key==="ArrowLeft"&&(u.preventDefault(),l()),a()},c=()=>{if(t.tabId){const u=t.data.findIndex(({id:p})=>no.value[t.tabId]===p);if(u!==-1)return u}return t.active};return bt(()=>{n.value=c(),pt(()=>no.value[t.tabId],(u,p)=>{if(t.tabId&&u!==p){const d=t.data.findIndex(({id:f})=>f===u);d!==-1&&(n.value=d)}})}),()=>t.data.length?i("div",{class:"vp-tabs"},[i("div",{class:"vp-tabs-nav",role:"tablist"},t.data.map(({id:u},p)=>{const d=p===n.value;return i("button",{type:"button",ref:f=>{f&&(s.value[p]=f)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${t.id}-${p}`,"aria-selected":d,onClick:()=>{n.value=p,a()},onKeydown:f=>r(f,p)},e[`title${p}`]({value:u,isActive:d}))})),t.data.map(({id:u},p)=>{const d=p===n.value;return i("div",{class:["vp-tab",{active:d}],id:`tab-${t.id}-${p}`,role:"tabpanel","aria-expanded":d},[i("div",{class:"vp-tab-title"},e[`title${p}`]({value:u,isActive:d})),e[`tab${p}`]({value:u,isActive:d})])})]):null}});const Y3=te({enhance:({app:t})=>{t.component("CodeTabs",_3),ce("CodeGroup",t)||t.component("CodeGroup",w3),ce("CodeGroupItem",t)||t.component("CodeGroupItem",Qc),t.component("CodeDemo",U3),t.component("MdDemo",G3),t.component("Tabs",K3)},setup:()=>{W3()}});let J3={};const mu=Symbol(""),Q3=()=>kt(mu),X3=t=>{t.provide(mu,J3)},Z3='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',t4=t=>Tt(t)?Array.from(document.querySelectorAll(t)):t.map(e=>Array.from(document.querySelectorAll(e))).flat(),gu=t=>new Promise((e,n)=>{t.complete?e({type:"image",element:t,src:t.src,width:t.naturalWidth,height:t.naturalHeight,alt:t.alt,msrc:t.src}):(t.onload=()=>e(gu(t)),t.onerror=s=>n(s))}),e4=t=>{const{isSupported:e,toggle:n}=dl();t.on("uiRegister",()=>{e.value&&t.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{n()}}),t.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,a)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),a.on("change",()=>{s.setAttribute("href",a.currSlide.data.src)})}}),t.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,a)=>{const o=[];let l=-1;for(let r=0;r<a.getNumItems();r++){const c=document.createElement("div");c.className="photo-swipe-bullet",c.onclick=u=>{a.goTo(o.indexOf(u.target))},o.push(c),s.appendChild(c)}a.on("change",()=>{l>=0&&o[l].classList.remove("active"),o[a.currIndex].classList.add("active"),l=a.currIndex})}})})},n4=(t,e,n=!0)=>G(()=>import("./photoswipe.esm-SzV8tJDW.js"),__vite__mapDeps([])).then(({default:s})=>{let a=null;const o=t.map(l=>({html:Z3,element:l,msrc:l.src}));return t.forEach((l,r)=>{const c=()=>{a==null||a.destroy(),a=new s({preloaderDelay:0,showHideAnimationType:"zoom",...e,dataSource:o,index:r,...n?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),e4(a),a.addFilter("thumbEl",()=>l),a.addFilter("placeholderSrc",()=>l.src),a.init()};l.getAttribute("photo-swipe")||(l.style.cursor="zoom-in",l.addEventListener("click",()=>{c()}),l.addEventListener("keypress",({key:u})=>{u==="Enter"&&c()}),l.setAttribute("photo-swipe","")),gu(l).then(u=>{o.splice(r,1,u),a==null||a.refreshSlideContent(r)})}),n?Rt("wheel",()=>{a==null||a.close()}):()=>{}}),s4=({selector:t,locales:e,delay:n=500,scrollToClose:s=!0})=>{const a=Q3(),o=qn(e),l=mt(),r=ft();let c=null;const u=()=>{const{photoSwipe:p}=r.value;p!==!1&&Ze().then(()=>Ac(n)).then(async()=>{const d=Tt(p)?p:t;c=await n4(t4(d),{...a,...o.value},s)})};bt(()=>{u(),pt(()=>l.value.path,()=>{c==null||c(),u()})}),jn(()=>{c==null||c()})};var a4={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const o4=".theme-hope-content :not(a) > img:not([no-view])",l4=a4,r4=800,i4=!0,c4=te({enhance:({app:t})=>{X3(t)},setup:()=>{s4({selector:o4,delay:r4,locales:l4,scrollToClose:i4})}}),vu=()=>{const t=mt();return _(()=>t.value.readingTime??null)},bu=(t,e)=>{const{minutes:n,words:s}=t,{less1Minute:a,word:o,time:l}=e;return{time:n<1?a:l.replace("$time",Math.round(n).toString()),words:o.replace("$word",s.toString())}};var Wr={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Kr={words:"",time:""},To=typeof Wr>"u"?null:Wr,yu=()=>To?qn(To):_(()=>null),u4=()=>{if(typeof To>"u")return _(()=>Kr);const t=vu(),e=yu();return _(()=>t.value&&e.value?bu(t.value,e.value):Kr)},Me=()=>Gc(),ot=()=>Yf(),bn=()=>{const t=Me();return _(()=>!!t.value.pure)},so=()=>null,p4="719px",d4="1440px",f4="false",ku={mobileBreakPoint:p4,pcBreakPoint:d4,enableThemeColor:f4,"vp-blog-hero":"_vp-blog-hero_3y3xu_9"},ml={"/blogs/":["howToBuildThisBlog","CRNN_blog","cucollection_blog","cuda_blog","distributed_embeddings_blog","hugectr_blog","hugectr_src_blog","torchrec_cn_embedding_note","warpcore_blog"],"/notes/":["/notes/c___note.html","deep_learning","precision","linux_command","LLM","loss","markdown","metrics","PLAN_Z","torchrec_note","uml_note"],"/thinking/":[]},_u=t=>{const{icon:e="",color:n,size:s}=t,a=n||s?{}:null;return n&&(a.color=n),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),Re(e)?i("img",{class:"icon",src:e,alt:"","no-view":"",style:a}):La(e)?i("img",{class:"icon",src:Et(e),alt:"","aria-hidden":"","no-view":"",style:a}):i(ie("FontIcon"),t)};_u.displayName="HopeIcon";var Vt=_u;const h4="http://.",yn=()=>{const t=vn(),e=tn();return n=>{if(n)if(La(n))e.path!==n&&t.push(n);else if(ic(n))window&&window.open(n);else{const s=e.path.slice(0,e.path.lastIndexOf("/"));t.push(new URL(`${s}/${encodeURI(n)}`,h4).pathname)}}},wu=()=>{const t=ot(),e=ft();return _(()=>{const{author:n}=e.value;return n?ks(n):n===!1?[]:ks(t.value.author,!1)})},m4=()=>{const t=ft(),e=kt(Symbol.for("categoryMap"));return _(()=>uu(t.value.category).map(n=>{var s;return{name:n,path:((s=e==null?void 0:e.value.map[n])==null?void 0:s.path)||""}}))},g4=()=>{const t=ft(),e=kt(Symbol.for("tagMap"));return _(()=>pu(t.value.tag).map(n=>{var s;return{name:n,path:((s=e==null?void 0:e.value.map[n])==null?void 0:s.path)||""}}))},v4=()=>{const t=ft(),e=mt();return _(()=>{const n=ul(t.value.date);if(n)return n;const{createdTime:s}=e.value.git||{};return s?new Date(s):null})},b4=()=>{const t=ot(),e=mt(),n=ft(),s=wu(),a=m4(),o=g4(),l=v4(),r=vu(),c=u4(),u=_(()=>({author:s.value,category:a.value,date:l.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:n.value.isOriginal||!1,readingTime:r.value,readingTimeLocale:c.value,pageview:"pageview"in n.value?n.value.pageview:!0})),p=_(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in t.value?t.value.pageInfo:null);return{info:u,items:p}},{mobileBreakPoint:y4,pcBreakPoint:k4}=ku,Yr=t=>t.endsWith("px")?Number(t.slice(0,-2)):null,Ds=()=>{const t=Q(!1),e=Q(!1),n=()=>{t.value=window.innerWidth<=(Yr(y4)??719),e.value=window.innerWidth>=(Yr(k4)??1440)};return bt(()=>{n(),Rt("resize",n,!1),Rt("orientationchange",n,!1)}),{isMobile:t,isPC:e}},xu=Symbol(""),Ns=()=>{const t=kt(xu);if(!t)throw new Error("useDarkmode() is called without provider.");return t},_4=t=>{const e=Me(),n=gf(),s=_(()=>e.value.darkmode||"switch"),a=Gn("vuepress-theme-hope-scheme","auto"),o=_(()=>{const r=s.value;return r==="disable"?!1:r==="enable"?!0:r==="auto"?n.value:r==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&n.value}),l=_(()=>{const r=s.value;return r==="switch"||r==="toggle"});t.provide(xu,{canToggle:l,config:s,isDarkmode:o,status:a}),Object.defineProperties(t.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},w4=()=>{const{config:t,isDarkmode:e,status:n}=Ns();Xo(()=>{t.value==="disable"?n.value="light":t.value==="enable"?n.value="dark":t.value==="toggle"&&n.value==="auto"&&(n.value="light")}),bt(()=>{pt(e,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var Wt=(t=>(t.title="t",t.shortTitle="s",t.icon="i",t.index="I",t.order="O",t.breadcrumbExclude="b",t))(Wt||{}),jt=(t=>(t.type="y",t.author="a",t.date="d",t.localizedDate="l",t.category="c",t.tag="g",t.isEncrypted="n",t.isOriginal="o",t.readingTime="r",t.excerpt="e",t.sticky="u",t.cover="v",t))(jt||{}),Eu=(t=>(t.article="a",t.home="h",t.slide="s",t.page="p",t))(Eu||{});const rn=(t="",e="")=>La(e)?e:`${rc(t)}${e}`,Pn=(t,e=!1)=>{const{meta:n,path:s,notFound:a}=Vn(t);return a?{text:s,link:s}:{text:!e&&n[Wt.shortTitle]?n[Wt.shortTitle]:n[Wt.title]||s,link:s,...n[Wt.icon]?{icon:n[Wt.icon]}:{}}},$o=({config:t,prefix:e=""})=>{const n=(s,a=e)=>{const o=Tt(s)?Pn(rn(a,s)):s.link?{...s,...Dn(s.link)?{}:{link:Pn(rn(a,s.link)).link}}:s;if("children"in o){const l=rn(a,o.prefix),r=o.children==="structure"?ml[l]:o.children;return{type:"group",...o,prefix:l,children:r.map(c=>n(c,l))}}return{type:"page",...o}};return t.map(s=>n(s))},x4=({config:t,page:e,headerDepth:n})=>{const s=pe(t).sort((a,o)=>o.length-a.length);for(const a of s)if(Bn(decodeURI(e.path),a)){const o=t[a];return o?$o({config:o==="structure"?ml[a]:o,page:e,headerDepth:n,prefix:a}):[]}return console.warn(`${e.path} is missing sidebar config.`),[]},E4=({config:t,routeLocale:e,page:n,headerDepth:s})=>t==="structure"?$o({config:ml[e],page:n,headerDepth:s,prefix:e}):Co(t)?$o({config:t,page:n,headerDepth:s}):gn(t)?x4({config:t,page:n,headerDepth:s}):[],Cu=Symbol(""),C4=()=>{const t=ft(),e=ot(),n=mt(),s=Oe(),a=_(()=>t.value.home?!1:t.value.sidebar??e.value.sidebar??"structure"),o=_(()=>t.value.headerDepth??e.value.headerDepth??2),l=Ic(()=>[a.value,o.value,n.value.path,null],()=>E4({config:a.value,routeLocale:s.value,page:n.value,headerDepth:o.value}));ge(Cu,l)},gl=()=>{const t=kt(Cu);if(!t)throw new Error("useSidebarItems() is called without provider.");return t};var T4=z({name:"PageFooter",setup(){const t=Me(),e=ot(),n=ft(),s=wu(),a=_(()=>{const{copyright:u,footer:p}=n.value;return p!==!1&&!!(u||p||e.value.displayFooter)}),o=_(()=>{const{footer:u}=n.value;return u===!1?!1:Tt(u)?u:e.value.footer||""}),l=_(()=>s.value.map(({name:u})=>u).join(", ")),r=u=>`Copyright © ${new Date().getFullYear()} ${l.value} ${u?`${u} Licensed`:""}`,c=_(()=>{const{copyright:u,license:p=""}=n.value,{license:d}=t.value,{copyright:f}=e.value;return u??(p?r(p):Tt(f)?f:l.value||d?r(d):!1)});return()=>a.value?i("footer",{class:"vp-footer-wrapper"},[o.value?i("div",{class:"vp-footer",innerHTML:o.value}):null,c.value?i("div",{class:"vp-copyright",innerHTML:c.value}):null]):null}}),Kt=z({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(t,{attrs:e,emit:n,slots:s}){const a=tn(),o=kc(),l=Fn(t,"config"),r=_(()=>Re(l.value.link)),c=_(()=>!r.value&&ic(l.value.link)),u=_(()=>l.value.target||(r.value?"_blank":void 0)),p=_(()=>u.value==="_blank"),d=_(()=>!r.value&&!c.value&&!p.value),f=_(()=>l.value.rel||(p.value?"noopener noreferrer":null)),h=_(()=>l.value.ariaLabel||l.value.text),g=_(()=>{if(t.exact)return!1;const k=pe(o.value.locales);return k.length?k.every(b=>b!==l.value.link):l.value.link!=="/"}),w=_(()=>d.value?l.value.activeMatch?new RegExp(l.value.activeMatch,"u").test(a.path):g.value?Bn(a.path,l.value.link):a.path===l.value.link:!1);return()=>{const{before:k,after:b,default:E}=s,{text:y,icon:T,link:M}=l.value;return d.value?i(Lt,{to:M,"aria-label":h.value,...e,class:["nav-link",{active:w.value},e.class],onFocusout:()=>n("focusout")},()=>E?E():[k?k():i(Vt,{icon:T}),y,b==null?void 0:b()]):i("a",{href:M,rel:f.value,target:u.value,"aria-label":h.value,...e,class:["nav-link",e.class],onFocusout:()=>n("focusout")},E?E():[k?k():i(Vt,{icon:T}),y,t.noExternalLinkIcon?null:i(qc),b==null?void 0:b()])}}}),$4=z({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=mt(),s=Fn(t,"config"),a=_(()=>s.value.ariaLabel||s.value.text),o=Q(!1);pt(()=>n.value.path,()=>{o.value=!1});const l=r=>{r.detail===0&&(o.value=!o.value)};return()=>{var r;return i("div",{class:["dropdown-wrapper",{open:o.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:l},[((r=e.title)==null?void 0:r.call(e))||i("span",{class:"title"},[i(Vt,{icon:s.value.icon}),t.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},s.value.children.map((c,u)=>{const p=u===s.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in c?[i("h4",{class:"dropdown-subtitle"},c.link?i(Kt,{config:c,onFocusout:()=>{c.children.length===0&&p&&(o.value=!1)}}):i("span",c.text)),i("ul",{class:"dropdown-subitem-wrapper"},c.children.map((d,f)=>i("li",{class:"dropdown-subitem"},i(Kt,{config:d,onFocusout:()=>{f===c.children.length-1&&p&&(o.value=!1)}}))))]:i(Kt,{config:c,onFocusout:()=>{p&&(o.value=!1)}}))}))])])}}});const Tu=(t,e="")=>Tt(t)?Pn(rn(e,t)):"children"in t?{...t,...t.link&&!Dn(t.link)?Pn(rn(e,t.link)):{},children:t.children.map(n=>Tu(n,rn(e,t.prefix)))}:{...t,link:Dn(t.link)?t.link:Pn(rn(e,t.link)).link},$u=()=>{const t=ot(),e=()=>(t.value.navbar||[]).map(n=>Tu(n));return Ic(()=>t.value.navbar,()=>e())},L4=()=>{const t=ot(),e=_(()=>t.value.repo||null),n=_(()=>e.value?C3(e.value):null),s=_(()=>e.value?ru(e.value):null),a=_(()=>n.value?t.value.repoLabel??(s.value===null?"Source":s.value):null);return _(()=>!n.value||!a.value||t.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:n.value})};var A4=z({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(t){const e=mt(),n=Fn(t,"config"),s=_(()=>n.value.ariaLabel||n.value.text),a=Q(!1);pt(()=>e.value.path,()=>{a.value=!1});const o=(l,r)=>r[r.length-1]===l;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[i("span",{class:"title"},[i(Vt,{icon:n.value.icon}),t.config.text]),i("span",{class:["arrow",a.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},n.value.children.map(l=>i("li",{class:"dropdown-item"},"children"in l?[i("h4",{class:"dropdown-subtitle"},l.link?i(Kt,{config:l,onFocusout:()=>{o(l,n.value.children)&&l.children.length===0&&(a.value=!1)}}):i("span",l.text)),i("ul",{class:"dropdown-subitem-wrapper"},l.children.map(r=>i("li",{class:"dropdown-subitem"},i(Kt,{config:r,onFocusout:()=>{o(r,l.children)&&o(l,n.value.children)&&(a.value=!1)}}))))]:i(Kt,{config:l,onFocusout:()=>{o(l,n.value.children)&&(a.value=!1)}}))))]}}),S4=z({name:"NavScreenLinks",setup(){const t=$u();return()=>t.value.length?i("nav",{class:"nav-screen-links"},t.value.map(e=>i("div",{class:"navbar-links-item"},"children"in e?i(A4,{config:e}):i(Kt,{config:e})))):null}});const Lu=()=>i(dt,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Lu.displayName="DarkIcon";const Au=()=>i(dt,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Au.displayName="LightIcon";const Su=()=>i(dt,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Su.displayName="AutoIcon";const Iu=()=>i(dt,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Iu.displayName="EnterFullScreenIcon";const Pu=()=>i(dt,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Pu.displayName="CancelFullScreenIcon";const Ru=()=>i(dt,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Ru.displayName="OutlookIcon";var Ou=z({name:"AppearanceSwitch",setup(){const{config:t,isDarkmode:e,status:n}=Ns(),s=bn(),a=()=>{t.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},o=async l=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!l){a();return}const r=l.clientX,c=l.clientY,u=Math.hypot(Math.max(r,innerWidth-r),Math.max(c,innerHeight-c)),p=e.value;await document.startViewTransition(async()=>{a(),await Ze()}).ready,e.value!==p&&document.documentElement.animate({clipPath:e.value?[`circle(${u}px at ${r}px ${c}px)`,`circle(0px at ${r}px ${c}px)`]:[`circle(0px at ${r}px ${c}px)`,`circle(${u}px at ${r}px ${c}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>i("button",{type:"button",id:"appearance-switch",onClick:o},[i(Su,{style:{display:n.value==="auto"?"block":"none"}}),i(Lu,{style:{display:n.value==="dark"?"block":"none"}}),i(Au,{style:{display:n.value==="light"?"block":"none"}})])}}),I4=z({name:"AppearanceMode",setup(){const t=ot(),{canToggle:e}=Ns(),n=_(()=>t.value.outlookLocales.darkmode);return()=>e.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},n.value),i(Ou)]):null}});const ao=ku.enableThemeColor==="true";var Mu=z({name:"ToggleFullScreenButton",setup(){const t=ot(),{isSupported:e,isFullscreen:n,toggle:s}=dl(),a=_(()=>t.value.outlookLocales.fullscreen);return()=>e?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),i("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>s()},n.value?i(Pu):i(Iu))]):null}}),Du=z({name:"OutlookSettings",setup(){const t=Me(),e=bn(),n=_(()=>!e.value&&t.value.fullscreen);return()=>i($a,()=>[null,i(I4),n.value?i(Mu):null])}}),P4=z({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(t,{emit:e,slots:n}){const s=mt(),{isMobile:a}=Ds(),o=At(),l=zc(o);return bt(()=>{o.value=document.body,pt(a,r=>{!r&&t.show&&(l.value=!1,e("close"))}),pt(()=>s.value.path,()=>{l.value=!1,e("close")})}),jn(()=>{l.value=!1}),()=>i(Xe,{name:"fade",onEnter:()=>{l.value=!0},onAfterLeave:()=>{l.value=!1}},()=>{var r,c;return t.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(r=n.before)==null?void 0:r.call(n),i(S4),i("div",{class:"vp-outlook-wrapper"},i(Du)),(c=n.after)==null?void 0:c.call(n)])):null})}}),R4=z({name:"NavbarBrand",setup(){const t=Oe(),e=Is(),n=ot(),s=_(()=>n.value.home||t.value),a=_(()=>e.value.title),o=_(()=>n.value.navTitle??a.value),l=_(()=>n.value.logo?Et(n.value.logo):null),r=_(()=>n.value.logoDark?Et(n.value.logoDark):null);return()=>i(Lt,{to:s.value,class:"vp-brand"},()=>[l.value?i("img",{class:["vp-nav-logo",{light:!!r.value}],src:l.value,alt:""}):null,r.value?i("img",{class:["vp-nav-logo dark"],src:r.value,alt:""}):null,o.value?i("span",{class:["vp-site-name",{"hide-in-pad":l.value&&n.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),O4=z({name:"NavbarLinks",setup(){const t=$u();return()=>t.value.length?i("nav",{class:"vp-nav-links"},t.value.map(e=>i("div",{class:"nav-item hide-in-mobile"},"children"in e?i($4,{config:e}):i(Kt,{config:e})))):null}}),M4=z({name:"RepoLink",components:{BitbucketIcon:su,GiteeIcon:nu,GitHubIcon:tu,GitLabIcon:eu,SourceIcon:au},setup(){const t=L4();return()=>t.value?i("div",{class:"nav-item vp-repo"},i("a",{class:"vp-repo-link",href:t.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":t.value.label},i(ie(`${t.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Nu=({active:t=!1},{emit:e})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":t}],"aria-label":"Toggle Navbar","aria-expanded":t,"aria-controls":"nav-screen",onClick:()=>e("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));Nu.displayName="ToggleNavbarButton";var D4=Nu;const Lo=(t,{emit:e})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},i("span",{class:"icon"}));Lo.displayName="ToggleSidebarButton",Lo.emits=["toggle"];var N4=Lo,z4=z({name:"OutlookButton",setup(){const{isSupported:t}=dl(),e=Me(),n=bn(),s=mt(),{canToggle:a}=Ns(),o=Q(!1),l=_(()=>!n.value&&e.value.fullscreen&&t);return pt(()=>s.value.path,()=>{o.value=!1}),()=>a.value||l.value||ao?i("div",{class:"nav-item hide-in-mobile"},a.value&&!l.value&&!ao?i(Ou):l.value&&!a.value&&!ao?i(Mu):i("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[i(Ru),i("div",{class:"outlook-dropdown"},i(Du))])):null}}),B4=z({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(t,{emit:e,slots:n}){const s=ot(),{isMobile:a}=Ds(),o=Q(!1),l=_(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||a.value)}),r=_(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:R4,Language:so,Links:O4,Repo:M4,Outlook:z4,Search:ce("Docsearch")?ie("Docsearch"):ce("SearchBox")?ie("SearchBox"):so},u=p=>c[p]??(ce(p)?ie(p):so);return()=>{var p,d,f,h,g,w;return[i("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":l.value,"hide-icon":s.value.navbarIcon===!1}]},[i("div",{class:"vp-navbar-start"},[i(N4,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(p=n.startBefore)==null?void 0:p.call(n),(r.value.start||[]).map(k=>i(u(k))),(d=n.startAfter)==null?void 0:d.call(n)]),i("div",{class:"vp-navbar-center"},[(f=n.centerBefore)==null?void 0:f.call(n),(r.value.center||[]).map(k=>i(u(k))),(h=n.centerAfter)==null?void 0:h.call(n)]),i("div",{class:"vp-navbar-end"},[(g=n.endBefore)==null?void 0:g.call(n),(r.value.end||[]).map(k=>i(u(k))),(w=n.endAfter)==null?void 0:w.call(n),i(D4,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),i(P4,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var k;return(k=n.screenTop)==null?void 0:k.call(n)},after:()=>{var k;return(k=n.screenBottom)==null?void 0:k.call(n)}})]}}});const _s=(t,e,n=!1)=>"activeMatch"in e?new RegExp(e.activeMatch,"u").test(t.path):lu(t,e.link)?!0:"children"in e&&!n?e.children.some(s=>_s(t,s)):!1,zu=(t,e)=>e.type==="group"?e.children.some(n=>n.type==="group"?zu(t,n):n.type==="page"&&_s(t,n,!0))||"prefix"in e&&lu(t,e.prefix):!1;var H4=z({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(t){const e=tn();return()=>Tt(t.config.link)?i(Kt,{class:["vp-sidebar-link","vp-sidebar-page",{active:_s(e,t.config,!0)}],exact:!0,config:t.config}):i("p",t,[i(Vt,{icon:t.config.icon}),t.config.text])}}),F4=z({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(t,{emit:e}){const n=tn(),s=_(()=>_s(n,t.config)),a=_(()=>_s(n,t.config,!0));return()=>{const{collapsible:o,children:l=[],icon:r,prefix:c,link:u,text:p}=t.config;return i("section",{class:"vp-sidebar-group"},[i(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||u,exact:a.value,active:s.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:d=>{d.key==="Enter"&&e("toggle")}}:{}},[i(Vt,{icon:r}),u?i(Kt,{class:"vp-sidebar-title",config:{text:p,link:u},noExternalLinkIcon:!0}):i("span",{class:"vp-sidebar-title"},p),o?i("span",{class:["vp-arrow",t.open?"down":"end"]}):null]),t.open||!o?i(Bu,{key:c,config:l}):null])}}}),Bu=z({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(t){const e=tn(),n=Q(-1),s=a=>{n.value=a===n.value?-1:a};return pt(()=>e.path,()=>{const a=t.config.findIndex(o=>zu(e,o));n.value=a},{immediate:!0,flush:"post"}),()=>i("ul",{class:"vp-sidebar-links"},t.config.map((a,o)=>i("li",a.type==="group"?i(F4,{config:a,open:o===n.value,onToggle:()=>s(o)}):i(H4,{config:a}))))}}),j4=z({name:"SideBar",slots:Object,setup(t,{slots:e}){const n=tn(),s=ot(),a=gl(),o=At();return bt(()=>{pt(()=>n.hash,l=>{const r=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${l}"]`);if(!r)return;const{top:c,height:u}=o.value.getBoundingClientRect(),{top:p,height:d}=r.getBoundingClientRect();p<c?r.scrollIntoView(!0):p+d>c+u&&r.scrollIntoView(!1)},{immediate:!0})}),()=>{var l,r,c;return i("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}],key:"sidebar"},[(l=e.top)==null?void 0:l.call(e),((r=e.default)==null?void 0:r.call(e))||i(Bu,{config:a.value}),(c=e.bottom)==null?void 0:c.call(e)])}}}),vl=z({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(t,{slots:e}){const n=vn(),s=mt(),a=ft(),o=ot(),{isMobile:l,isPC:r}=Ds(),[c,u]=bs(!1),[p,d]=bs(!1),f=gl(),h=Q(!1),g=_(()=>t.noNavbar||a.value.navbar===!1||o.value.navbar===!1?!1:!!(s.value.title||o.value.logo||o.value.repo||o.value.navbar)),w=_(()=>t.noSidebar?!1:a.value.sidebar!==!1&&f.value.length!==0&&!a.value.home),k=_(()=>t.noToc||a.value.home?!1:a.value.toc||o.value.toc!==!1&&a.value.toc!==!1),b={x:0,y:0},E=C=>{b.x=C.changedTouches[0].clientX,b.y=C.changedTouches[0].clientY},y=C=>{const D=C.changedTouches[0].clientX-b.x,P=C.changedTouches[0].clientY-b.y;Math.abs(D)>Math.abs(P)*1.5&&Math.abs(D)>40&&(D>0&&b.x<=80?u(!0):u(!1))},T=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let M=0;return Rt("scroll",sf(()=>{const C=T();C<=58||C<M?h.value=!1:M+200<C&&!c.value&&(h.value=!0),M=C},300,!0)),pt(l,C=>{C||u(!1)}),bt(()=>{const C=zc(document.body);pt(c,P=>{C.value=P});const D=n.afterEach(()=>{u(!1)});jn(()=>{C.value=!1,D()})}),()=>i(ce("GlobalEncrypt")?ie("GlobalEncrypt"):Zc,()=>i("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!w.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":k.value,"hide-navbar":h.value,"sidebar-collapsed":!l.value&&!r.value&&p.value,"sidebar-open":l.value&&c.value},t.containerClass,a.value.containerClass||""],onTouchStart:E,onTouchEnd:y},[g.value?i(B4,{onToggleSidebar:()=>u()},{startBefore:()=>{var C;return(C=e.navbarStartBefore)==null?void 0:C.call(e)},startAfter:()=>{var C;return(C=e.navbarStartAfter)==null?void 0:C.call(e)},centerBefore:()=>{var C;return(C=e.navbarCenterBefore)==null?void 0:C.call(e)},centerAfter:()=>{var C;return(C=e.navbarCenterAfter)==null?void 0:C.call(e)},endBefore:()=>{var C;return(C=e.navbarEndBefore)==null?void 0:C.call(e)},endAfter:()=>{var C;return(C=e.navbarEndAfter)==null?void 0:C.call(e)},screenTop:()=>{var C;return(C=e.navScreenTop)==null?void 0:C.call(e)},screenBottom:()=>{var C;return(C=e.navScreenBottom)==null?void 0:C.call(e)}}):null,i(Xe,{name:"fade"},()=>c.value?i("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),i(Xe,{name:"fade"},()=>l.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},i("span",{class:["arrow",p.value?"end":"start"]}))),i(j4,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var C;return(C=e.sidebarTop)==null?void 0:C.call(e)},bottom:()=>{var C;return(C=e.sidebarBottom)==null?void 0:C.call(e)}}),e.default(),i(T4)]))}}),ut=z({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(t,{slots:e}){const n=a=>{a.style.transition=`transform ${t.duration}s ease-in-out ${t.delay}s, opacity ${t.duration}s ease-in-out ${t.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>i(t.type==="single"?Xe:J1,{name:"drop",appear:t.appear,onAppear:n,onAfterAppear:s,onEnter:n,onAfterEnter:s,onBeforeLeave:n},()=>e.default())}});const Ao=({custom:t})=>i(wc,{class:["theme-hope-content",{custom:t}]});Ao.displayName="MarkdownContent",Ao.props={custom:Boolean};var bl=Ao;const Hu=()=>i(dt,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Hu.displayName="AuthorIcon";const Fu=()=>i(dt,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Fu.displayName="CalendarIcon";const ju=()=>i(dt,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ju.displayName="CategoryIcon";const Vu=()=>i(dt,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Vu.displayName="PrintIcon";const qu=()=>i(dt,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));qu.displayName="TagIcon";const Uu=()=>i(dt,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Uu.displayName="TimerIcon";const Gu=()=>i(dt,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Gu.displayName="WordIcon";const en=()=>{const t=ot();return _(()=>t.value.metaLocales)};var V4=z({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(t){const e=en();return()=>t.author.length?i("span",{class:"page-author-info","aria-label":`${e.value.author}${t.pure?"":"🖊"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(Hu),i("span",t.author.map(n=>n.url?i("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):i("span",{class:"page-author-item"},n.name))),i("span",{property:"author",content:t.author.map(n=>n.name).join(", ")})]):null}}),q4=z({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(t){const e=en(),n=yn();return()=>t.category.length?i("span",{class:"page-category-info","aria-label":`${e.value.category}${t.pure?"":"🌈"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(ju),t.category.map(({name:s,path:a})=>i("span",{class:["page-category-item",{[`category${Sa(s,9)}`]:!t.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&n(a)}},s)),i("meta",{property:"articleSection",content:t.category.map(({name:s})=>s).join(",")})]):null}}),U4=z({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(t){const e=il(),n=en();return()=>t.date?i("span",{class:"page-date-info","aria-label":`${n.value.date}${t.pure?"":"📅"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(Fu),i("span",i($a,()=>t.localizedDate||t.date.toLocaleDateString(e.value))),i("meta",{property:"datePublished",content:t.date.toISOString()||""})]):null}}),G4=z({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(t){const e=en();return()=>t.isOriginal?i("span",{class:"page-original-info"},e.value.origin):null}}),W4=z({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(t){const e=en(),n=_(()=>{if(!t.readingTime)return null;const{minutes:s}=t.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=t.readingTimeLocale)!=null&&s.time?i("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${t.pure?"":"⌛"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(Uu),i("span",(a=t.readingTimeLocale)==null?void 0:a.time),i("meta",{property:"timeRequired",content:n.value})]):null}}}),K4=z({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(t){const e=en(),n=yn();return()=>t.tag.length?i("span",{class:"page-tag-info","aria-label":`${e.value.tag}${t.pure?"":"🏷"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(qu),t.tag.map(({name:s,path:a})=>i("span",{class:["page-tag-item",{[`tag${Sa(s,9)}`]:!t.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&n(a)}},s)),i("meta",{property:"keywords",content:t.tag.map(({name:s})=>s).join(",")})]):null}}),Y4=z({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(t){const e=en();return()=>{var n,s,a;return(n=t.readingTimeLocale)!=null&&n.words?i("span",{class:"page-word-info","aria-label":`${e.value.words}${t.pure?"":"🔠"}`,...t.pure?{}:{"data-balloon-pos":"up"}},[i(Gu),i("span",(s=t.readingTimeLocale)==null?void 0:s.words),i("meta",{property:"wordCount",content:(a=t.readingTime)==null?void 0:a.words})]):null}}}),Wu=z({name:"PageInfo",components:{AuthorInfo:V4,CategoryInfo:q4,DateInfo:U4,OriginalInfo:G4,PageViewInfo:()=>null,ReadingTimeInfo:W4,TagInfo:K4,WordInfo:Y4},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(t){const e=bn();return()=>t.items?i("div",{class:"page-info"},t.items.map(n=>i(ie(`${n}Info`),{...t.info,pure:e.value}))):null}}),J4=z({name:"PrintButton",setup(){const t=Me(),e=ot();return()=>t.value.print===!1?null:i("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},i(Vu))}}),Ku=z({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(t,{slots:e}){const n=tn(),s=mt(),a=en(),[o,l]=bs(),r=At(),c=Q("-1.7rem"),u=d=>{var f;(f=r.value)==null||f.scrollTo({top:d,behavior:"smooth"})},p=()=>{if(r.value){const d=document.querySelector(".vp-toc-item.active");d?c.value=`${d.getBoundingClientRect().top-r.value.getBoundingClientRect().top+r.value.scrollTop}px`:c.value="-1.7rem"}else c.value="-1.7rem"};return bt(()=>{pt(()=>n.hash,d=>{if(r.value){const f=document.querySelector(`#toc a.toc-link[href$="${d}"]`);if(!f)return;const{top:h,height:g}=r.value.getBoundingClientRect(),{top:w,height:k}=f.getBoundingClientRect();w<h?u(r.value.scrollTop+w-h):w+k>h+g&&u(r.value.scrollTop+w+k-h-g)}}),pt(()=>n.fullPath,p,{flush:"post",immediate:!0})}),()=>{var g,w;const d=({title:k,level:b,slug:E})=>i(Lt,{to:`#${E}`,class:["vp-toc-link",`level${b}`],onClick:()=>{l()}},()=>k),f=(k,b)=>k.length&&b>0?i("ul",{class:"vp-toc-list"},k.map(E=>{const y=f(E.children,b-1);return[i("li",{class:["vp-toc-item",{active:n.hash===`#${E.slug}`}]},d(E)),y?i("li",y):null]})):null,h=t.items.length?f(t.items,t.headerDepth):s.value.headers?f(s.value.headers,t.headerDepth):null;return h?i("div",{class:"vp-toc-placeholder"},[i("aside",{id:"toc"},[(g=e.before)==null?void 0:g.call(e),i("div",{class:"vp-toc-header",onClick:()=>{l()}},[a.value.toc,i(J4),i("div",{class:["arrow",o.value?"down":"end"]})]),i("div",{class:["vp-toc-wrapper",o.value?"open":""],ref:r},[h,i("div",{class:"vp-toc-marker",style:{top:c.value}})]),(w=e.after)==null?void 0:w.call(e)])]):null}}}),yl=z({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=mt(),n=ot(),s=At(),a=({target:o})=>{const l=document.querySelector(o.hash);if(l){const r=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",r)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",r),l.focus(),window.scrollTo(0,0)}};return bt(()=>{pt(()=>e.value.path,()=>s.value.focus())}),()=>[i("span",{ref:s,tabindex:"-1"}),i("a",{href:`#${t.content}`,class:"vp-skip-link sr-only",onClick:a},n.value.routeLocales.skipToContent)]}});let oo=null,Jn=null;const Q4={wait:()=>oo,pending:()=>{oo=new Promise(t=>{Jn=t})},resolve:()=>{Jn==null||Jn(),oo=null,Jn=null}},Yu=()=>Q4;var Ju=z({name:"FadeSlideY",slots:Object,setup(t,{slots:e}){const{resolve:n,pending:s}=Yu();return()=>i(Xe,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:s},()=>{var a;return(a=e.default)==null?void 0:a.call(e)})}});const X4=(t,e)=>{const n=t.replace(e,"/").split("/"),s=[];let a=Ea(e);return n.forEach((o,l)=>{l!==n.length-1?(a+=`${o}/`,s.push({link:a,name:o||"Home"})):o!==""&&(a+=o,s.push({link:a,name:o}))}),s},Qu=(t,{slots:e})=>{var d,f;const{bgImage:n,bgImageDark:s,bgImageStyle:a,color:o,description:l,image:r,imageDark:c,header:u,features:p=[]}=t;return i("div",{class:"vp-feature-wrapper"},[n?i("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${n})`},a]}):null,s?i("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-feature",style:o?{color:o}:{}},[((d=e.image)==null?void 0:d.call(e,t))||[r?i("img",{class:["vp-feature-image",{light:c}],src:Et(r),alt:""}):null,c?i("img",{class:"vp-feature-image dark",src:Et(c),alt:""}):null],((f=e.info)==null?void 0:f.call(e,t))||[u?i("h2",{class:"vp-feature-header"},u):null,l?i("p",{class:"vp-feature-description",innerHTML:l}):null],p.length?i("div",{class:"vp-features"},p.map(({icon:h,title:g,details:w,link:k})=>{const b=[i("h3",{class:"vp-feature-title"},[i(Vt,{icon:h}),i("span",{innerHTML:g})]),i("p",{class:"vp-feature-details",innerHTML:w})];return k?Dn(k)?i("a",{class:"vp-feature-item link",href:k,"aria-label":g,target:"_blank"},b):i(Lt,{class:"vp-feature-item link",to:k,"aria-label":g},()=>b):i("div",{class:"vp-feature-item"},b)})):null])])};Qu.displayName="FeaturePanel";var Jr=Qu,Z4=z({name:"HeroInfo",slots:Object,setup(t,{slots:e}){const n=ft(),s=Is(),a=_(()=>n.value.heroFullScreen??!1),o=_(()=>{const{heroText:u,tagline:p}=n.value;return{text:u??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:a.value}}),l=_(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:f,heroImageStyle:h}=n.value;return{image:p?Et(p):null,imageDark:d?Et(d):null,style:h,alt:f||u||"",isFullScreen:a.value}}),r=_(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=n.value;return{image:Tt(u)?Et(u):null,imageDark:Tt(p)?Et(p):null,bgStyle:d,isFullScreen:a.value}}),c=_(()=>n.value.actions??[]);return()=>{var u,p,d;return i("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((u=e.heroBg)==null?void 0:u.call(e,r.value))||[r.value.image?i("div",{class:["vp-hero-mask",{light:r.value.imageDark}],style:[{"background-image":`url(${r.value.image})`},r.value.bgStyle]}):null,r.value.imageDark?i("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${r.value.imageDark})`},r.value.bgStyle]}):null],i("div",{class:"vp-hero-info"},[((p=e.heroImage)==null?void 0:p.call(e,l.value))||i(ut,{appear:!0,type:"group"},()=>[l.value.image?i("img",{key:"light",class:["vp-hero-image",{light:l.value.imageDark}],style:l.value.style,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?i("img",{key:"dark",class:"vp-hero-image dark",style:l.value.style,src:l.value.imageDark,alt:l.value.alt}):null]),((d=e.heroInfo)==null?void 0:d.call(e,o.value))??i("div",{class:"vp-hero-infos"},[o.value.text?i(ut,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?i(ut,{appear:!0,delay:.08},()=>i("p",{id:"main-description",innerHTML:o.value.tagline})):null,c.value.length?i(ut,{appear:!0,delay:.12},()=>i("p",{class:"vp-hero-actions"},c.value.map(f=>i(Kt,{class:["vp-hero-action",f.type||"default"],config:f,noExternalLinkIcon:!0},f.icon?{before:()=>i(Vt,{icon:f.icon})}:{})))):null])])])}}});const Xu=(t,{slots:e})=>{var f,h,g;const{bgImage:n,bgImageDark:s,bgImageStyle:a,color:o,description:l,image:r,imageDark:c,header:u,highlights:p=[],type:d="un-order"}=t;return i("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[n?i("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${n})`},a]}):null,s?i("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-highlight"},[((f=e.image)==null?void 0:f.call(e,t))||[r?i("img",{class:["vp-highlight-image",{light:c}],src:Et(r),alt:""}):null,c?i("img",{class:"vp-highlight-image dark",src:Et(c),alt:""}):null],((h=e.info)==null?void 0:h.call(e,t))||[i("div",{class:"vp-highlight-info-wrapper"},i("div",{class:"vp-highlight-info"},[u?i("h2",{class:"vp-highlight-header",innerHTML:u}):null,l?i("p",{class:"vp-highlight-description",innerHTML:l}):null,((g=e.highlights)==null?void 0:g.call(e,p))||i(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},p.map(({icon:w,title:k,details:b,link:E})=>{const y=[i(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?i(Vt,{class:"vp-highlight-icon",icon:w}):null,i("span",{innerHTML:k})]),b?i(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return i(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?Dn(E)?i("a",{class:"vp-highlight-item link",href:E,"aria-label":k,target:"_blank"},y):i(Lt,{class:"vp-highlight-item link",to:E,"aria-label":k},()=>y):i("div",{class:"vp-highlight-item"},y))}))]))]])])};Xu.displayName="HighlightPanel";var th=Xu,eh=z({name:"HomePage",slots:Object,setup(t,{slots:e}){const n=bn(),s=ft(),a=_(()=>{const{features:l}=s.value;return Co(l)?l:null}),o=_(()=>{const{highlights:l}=s.value;return Co(l)?l:null});return()=>{var l,r,c,u;return i("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(l=e.top)==null?void 0:l.call(e),i(Z4),((r=o.value)==null?void 0:r.map(p=>"features"in p?i(Jr,p):i(th,p)))||(a.value?i(ut,{appear:!0,delay:.24},()=>i(Jr,{features:a.value})):null),(c=e.center)==null?void 0:c.call(e),i(ut,{appear:!0,delay:.32},()=>i(bl)),(u=e.bottom)==null?void 0:u.call(e)])}}}),nh=z({name:"BreadCrumb",setup(){const t=mt(),e=Oe(),n=ft(),s=ot(),a=At([]),o=_(()=>(n.value.breadcrumb||n.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&a.value.length>1),l=_(()=>n.value.breadcrumbIcon||n.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),r=()=>{const c=X4(t.value.path,e.value).map(({link:u,name:p})=>{const{path:d,meta:f,notFound:h}=Vn(u);return h||f[Wt.breadcrumbExclude]?null:{title:f[Wt.shortTitle]||f[Wt.title]||p,icon:f[Wt.icon],path:d}}).filter(u=>u!==null);c.length>1&&(a.value=c)};return bt(()=>{pt(()=>t.value.path,r,{immediate:!0})}),()=>i("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((c,u)=>i("li",{class:{"is-active":a.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[i(Lt,{to:c.path,property:"item",typeof:"WebPage"},()=>[l.value?i(Vt,{icon:c.icon}):null,i("span",{property:"name"},c.title||"Unknown")]),i("meta",{property:"position",content:u+1})]))):[])}});const Qr=t=>t===!1||gn(t)?t:Tt(t)?Pn(t,!0):null,So=(t,e,n)=>{const s=t.findIndex(a=>a.link===e);if(s!==-1){const a=t[s+n];return a!=null&&a.link?a:null}for(const a of t)if("children"in a){const o=So(a.children,e,n);if(o)return o}return null};var sh=z({name:"PageNav",setup(){const t=ot(),e=ft(),n=gl(),s=mt(),a=yn(),o=_(()=>{const r=Qr(e.value.prev);return r===!1?null:r||(t.value.prevLink===!1?null:So(n.value,s.value.path,-1))}),l=_(()=>{const r=Qr(e.value.next);return r===!1?null:r||(t.value.nextLink===!1?null:So(n.value,s.value.path,1))});return Rt("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?l.value&&(a(l.value.link),r.preventDefault()):r.key==="ArrowLeft"&&o.value&&(a(o.value.link),r.preventDefault()))}),()=>o.value||l.value?i("nav",{class:"vp-page-nav"},[o.value?i(Kt,{class:"prev",config:o.value},()=>{var r,c;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),t.value.metaLocales.prev]),i("div",{class:"link"},[i(Vt,{icon:(r=o.value)==null?void 0:r.icon}),(c=o.value)==null?void 0:c.text])]}):null,l.value?i(Kt,{class:"next",config:l.value},()=>{var r,c;return[i("div",{class:"hint"},[t.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(r=l.value)==null?void 0:r.text,i(Vt,{icon:(c=l.value)==null?void 0:c.icon})])]}):null]):null}});const ah={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},oh=({docsRepo:t,docsBranch:e,docsDir:n,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const o=ru(t);let l;return a?l=a:o!==null&&(l=ah[o]),l?l.replace(/:repo/u,Re(t)?t:`https://github.com/${t}`).replace(/:branch/u,e).replace(/:path/u,cc(`${Ea(n)}/${s}`)):null},lh=()=>{const t=ot(),e=mt(),n=ft();return _(()=>{const{repo:s,docsRepo:a=s,docsBranch:o="main",docsDir:l="",editLink:r,editLinkPattern:c=""}=t.value;if(!(n.value.editLink??r??!0)||!a)return null;const u=oh({docsRepo:a,docsBranch:o,docsDir:l,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return u?{text:t.value.metaLocales.editLink,link:u}:null})},rh=()=>{const t=Is(),e=ot(),n=mt(),s=ft();return _(()=>{var a,o;return!(s.value.lastUpdated??e.value.lastUpdated??!0)||!((a=n.value.git)!=null&&a.updatedTime)?null:new Date((o=n.value.git)==null?void 0:o.updatedTime).toLocaleString(t.value.lang)})},ih=()=>{const t=ot(),e=mt(),n=ft();return _(()=>{var s;return n.value.contributors??t.value.contributors??!0?((s=e.value.git)==null?void 0:s.contributors)??null:null})};var ch=z({name:"PageTitle",setup(){const t=mt(),e=ft(),n=ot(),{info:s,items:a}=b4();return()=>i("div",{class:"vp-page-title"},[i("h1",[n.value.titleIcon===!1?null:i(Vt,{icon:e.value.icon}),t.value.title]),i(Wu,{info:s.value,...a.value===null?{}:{items:a.value}}),i("hr")])}});const Zu=()=>i(dt,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Zu.displayName="EditIcon";var uh=z({name:"PageMeta",setup(){const t=ot(),e=lh(),n=rh(),s=ih();return()=>{const{metaLocales:a}=t.value;return i("footer",{class:"page-meta"},[e.value?i("div",{class:"meta-item edit-link"},i(Kt,{class:"label",config:e.value},{before:()=>i(Zu)})):null,i("div",{class:"meta-item git-info"},[n.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${a.lastUpdated}: `),i($a,()=>i("span",{class:"info"},n.value))]):null,s.value&&s.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${a.contributors}: `),s.value.map(({email:o,name:l},r)=>[i("span",{class:"contributor",title:`email: ${o}`},l),r!==s.value.length-1?",":""])]):null])])}}}),ph=z({name:"NormalPage",slots:Object,setup(t,{slots:e}){const n=ft(),{isDarkmode:s}=Ns(),a=ot(),o=_(()=>n.value.toc||n.value.toc!==!1&&a.value.toc!==!1);return()=>i("main",{id:"main-content",class:"vp-page"},i(ce("LocalEncrypt")?ie("LocalEncrypt"):Zc,()=>{var l,r,c,u;return[(l=e.top)==null?void 0:l.call(e),n.value.cover?i("div",{class:"page-cover"},i("img",{src:Et(n.value.cover),alt:"","no-view":""})):null,i(nh),i(ch),o.value?i(Ku,{headerDepth:n.value.headerDepth??a.value.headerDepth??2},{before:()=>{var p;return(p=e.tocBefore)==null?void 0:p.call(e)},after:()=>{var p;return(p=e.tocAfter)==null?void 0:p.call(e)}}):null,(r=e.contentBefore)==null?void 0:r.call(e),i(bl),(c=e.contentAfter)==null?void 0:c.call(e),i(uh),i(sh),ce("CommentService")?i(ie("CommentService"),{darkmode:s.value}):null,(u=e.bottom)==null?void 0:u.call(e)]}))}}),dh=z({name:"Layout",slots:Object,setup(t,{slots:e}){const n=Me(),s=ot(),a=mt(),o=ft(),{isMobile:l}=Ds(),r=_(()=>{var c,u;return((c=s.value.blog)==null?void 0:c.sidebarDisplay)||((u=n.value.blog)==null?void 0:u.sidebarDisplay)||"mobile"});return()=>[i(yl),i(vl,{},{default:()=>{var c;return((c=e.default)==null?void 0:c.call(e))||(o.value.home?i(eh):i(Ju,()=>i(ph,{key:a.value.path},{top:()=>{var u;return(u=e.top)==null?void 0:u.call(e)},bottom:()=>{var u;return(u=e.bottom)==null?void 0:u.call(e)},contentBefore:()=>{var u;return(u=e.contentBefore)==null?void 0:u.call(e)},contentAfter:()=>{var u;return(u=e.contentAfter)==null?void 0:u.call(e)},tocBefore:()=>{var u;return(u=e.tocBefore)==null?void 0:u.call(e)},tocAfter:()=>{var u;return(u=e.tocAfter)==null?void 0:u.call(e)}})))},...r.value==="none"?{}:{navScreenBottom:()=>i(ie("BloggerInfo"))},...!l.value&&r.value==="always"?{sidebar:()=>i(ie("BloggerInfo"))}:{}})]}}),fh=z({name:"NotFoundHint",setup(){const t=ot(),e=()=>{const n=t.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},t.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},e())])}}),hh=z({name:"NotFound",slots:Object,setup(t,{slots:e}){const n=vn(),s=Oe(),a=ot();return()=>[i(yl),i(vl,{noSidebar:!0},()=>{var o;return i("main",{id:"main-content",class:"vp-page not-found"},((o=e.default)==null?void 0:o.call(e))||[i(fh),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>{n.push(a.value.home??s.value)}},a.value.routeLocales.home)])])})]}});const mh={Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},gh={category:{"/":{path:"/category/",map:{DeepLearning:{path:"/category/deeplearning/",indexes:[0,1,2,3,4]},高性能:{path:"/category/高性能/",indexes:[5,6,7]},硬件:{path:"/category/硬件/",indexes:[8]},前端:{path:"/category/前端/",indexes:[9]},推荐系统:{path:"/category/推荐系统/",indexes:[10,11,12,13]},"C++":{path:"/category/c++/",indexes:[14]},Linux:{path:"/category/linux/",indexes:[15]},LLM:{path:"/category/llm/",indexes:[16]},学习笔记:{path:"/category/学习笔记/",indexes:[17,18]},TODO:{path:"/category/todo/",indexes:[19]}}}},tag:{"/":{path:"/tag/",map:{CRNN:{path:"/tag/crnn/",indexes:[1]},CUDA:{path:"/tag/cuda/",indexes:[8,10,5,12,6,7]},Hash:{path:"/tag/hash/",indexes:[6,7]},Tensorflow:{path:"/tag/tensorflow/",indexes:[5]},Embedding:{path:"/tag/embedding/",indexes:[11,5]},Vuepress:{path:"/tag/vuepress/",indexes:[9]},HugeCTR:{path:"/tag/hugectr/",indexes:[10,12]},CNCard:{path:"/tag/cncard/",indexes:[11]},"C++":{path:"/tag/c++/",indexes:[14]},DeepLearning:{path:"/tag/deeplearning/",indexes:[2]},Linux:{path:"/tag/linux/",indexes:[15]},LLM:{path:"/tag/llm/",indexes:[16]},Loss:{path:"/tag/loss/",indexes:[3]},Markdown:{path:"/tag/markdown/",indexes:[17]},Metics:{path:"/tag/metics/",indexes:[4]},TODO:{path:"/tag/todo/",indexes:[19]},precision:{path:"/tag/precision/",indexes:[0]},Torchrec:{path:"/tag/torchrec/",indexes:[13]},UML:{path:"/tag/uml/",indexes:[18]}}}}},tp=["/notes/precision.html","/blogs/CRNN_blog.html","/notes/deep_learning.html","/notes/loss.html","/notes/metrics.html","/blogs/distributed_embeddings_blog.html","/blogs/cucollection_blog.html","/blogs/warpcore_blog.html","/blogs/cuda_blog.html","/blogs/howToBuildThisBlog.html","/blogs/hugectr_src_blog.html","/blogs/torchrec_cn_embedding_note.html","/blogs/hugectr_blog.html","/notes/torchrec_note.html","/notes/c___note.html","/notes/linux_command.html","/notes/LLM.html","/notes/markdown.html","/notes/uml_note.html","/notes/PLAN_Z.html","/intro.html","/blogs/","/notes/","/thinking/"],Io=At(gh);mn(Io);const ep=t=>{const e=mt(),n=ft(),s=Oe();return _(()=>{var r;const a=t??((r=n.value.blog)==null?void 0:r.key)??"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!Io.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const o=Io.value[a][s.value],l={path:o.path,map:{}};for(const c in o.map){const u=o.map[c];l.map[c]={path:u.path,items:[]};for(const p of u.indexes){const{path:d,meta:f}=Vn(tp[p]);l.map[c].items.push({path:d,info:f})}e.value.path===u.path&&(l.currentItems=l.map[c].items)}return l})},vh={article:{"/":{path:"/article/",indexes:[9,20,19,15,0,1,17,2,3,16,4,8,10,11,14,5,12,13,18,6,7,21,22,23]}},star:{"/":{path:"/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[9,20,19,15,0,1,17,2,3,16,4,8,10,11,14,5,12,13,18,6,7]}}},Po=At(vh);mn(Po);const Ia=t=>{const e=ft(),n=Oe();return _(()=>{var l;const s=t??((l=e.value.blog)==null?void 0:l.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Po.value[s])throw new Error(`useBlogType: key ${t} is invalid`);const a=Po.value[s][n.value],o={path:a.path,items:[]};for(const r of a.indexes){const{path:c,meta:u}=Vn(tp[r]);o.items.push({path:c,info:u})}return o})},kl=()=>i(dt,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));kl.displayName="LockIcon";var bh=[];const np=Symbol.for("categoryMap"),zs=()=>{const t=kt(np);if(!t)throw new Error("useCategoryMap() is called without provider.");return t},yh=()=>{const t=ep("category");ge(np,t)},Bs=()=>{const t=Me(),e=ot();return _(()=>({...t.value.blog,...e.value.blog}))},sp=Symbol.for("tagMap"),Hs=()=>{const t=kt(sp);if(!t)throw new Error("useTagMap() is called without provider.");return t},kh=()=>{const t=ep("tag");ge(sp,t)},_h=t=>{const e=ot();return _(()=>{const{[jt.author]:n}=t.value;return n?ks(n):n===!1?[]:ks(e.value.author,!1)})},wh=t=>{const e=zs();return _(()=>uu(t.value[jt.category]).map(n=>({name:n,path:e.value.map[n].path})))},xh=t=>{const e=Hs();return _(()=>pu(t.value[jt.tag]).map(n=>({name:n,path:e.value.map[n].path})))},Eh=t=>_(()=>{const{[jt.date]:e}=t.value;return ul(e)}),Ch=t=>{const e=Fn(t,"info"),n=Bs(),s=_h(e),a=wh(e),o=xh(e),l=Eh(e),r=yu(),c=_(()=>({author:s.value,category:a.value,date:l.value,localizedDate:e.value[jt.localizedDate]||"",tag:o.value,isOriginal:e.value[jt.isOriginal]||!1,readingTime:e.value[jt.readingTime]||null,readingTimeLocale:e.value[jt.readingTime]&&r.value?bu(e.value[jt.readingTime],r.value):null,pageview:t.path})),u=_(()=>n.value.articleInfo);return{info:c,items:u}},ap=Symbol(""),Fs=()=>{const t=kt(ap);if(!t)throw new Error("useArticles() is called without provider.");return t},Th=()=>{const t=Ia("article");ge(ap,t)},op=Symbol(""),_l=()=>{const t=kt(op);if(!t)throw new Error("useStars() is called without provider.");return t},$h=()=>{const t=Ia("star");ge(op,t)},lp=Symbol(""),wl=()=>{const t=kt(lp);if(!t)throw new Error("useTimelines() is called without provider.");return t},Lh=()=>{const t=Ia("timeline"),e=_(()=>{const n=[];return t.value.items.forEach(({info:s,path:a})=>{const o=ul(s[jt.date]);if(o){const l=o.getFullYear(),r=o.getMonth()+1,c=o.getDate();(!n[0]||n[0].year!==l)&&n.unshift({year:l,items:[]}),n[0].items.push({date:`${r}/${c}`,info:s,path:a})}}),{...t.value,config:n.reverse()}});ge(lp,e)},Ah=()=>{Th(),yh(),$h(),kh(),Lh()};var Sh=z({name:"SocialMedia",setup(){const t=Bs(),e=bn(),n=_(()=>{const s=t.value.medias;return s?Rs(s).map(([a,o])=>({name:a,icon:mh[a],url:o})):[]});return()=>n.value.length?i("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:a,url:o})=>i("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":s,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),xl=z({name:"BloggerInfo",setup(){const t=Bs(),e=Is(),n=ot(),s=Fs(),a=zs(),o=Hs(),l=wl(),r=yn(),c=_(()=>{var f;return t.value.name||((f=ks(n.value.author)[0])==null?void 0:f.name)||e.value.title}),u=_(()=>t.value.avatar||n.value.logo),p=_(()=>n.value.blogLocales),d=_(()=>t.value.intro);return()=>{const{article:f,category:h,tag:g,timeline:w}=p.value,k=[[s.value.path,s.value.items.length,f],[a.value.path,pe(a.value.map).length,h],[o.value.path,pe(o.value.map).length,g],[l.value.path,l.value.items.length,w]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>r(d.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:t.value.roundAvatar}],src:Et(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,c.value?i("div",{class:"vp-blogger-name",property:"name"},c.value):null,t.value.description?i("div",{class:"vp-blogger-description",innerHTML:t.value.description}):null,d.value?i("meta",{property:"url",content:Et(d.value)}):null]),i("div",{class:"vp-blog-counts"},k.map(([b,E,y])=>i(Lt,{class:"vp-blog-count",to:b},()=>[i("div",{class:"count"},E),i("div",y)]))),i(Sh)])}}});const El=()=>i(dt,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));El.displayName="CategoryIcon";const Cl=()=>i(dt,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Cl.displayName="TagIcon";const Tl=()=>i(dt,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Tl.displayName="TimelineIcon";const rp=()=>i(dt,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));rp.displayName="SlideIcon";const ip=()=>i(dt,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);ip.displayName="StickyIcon";const Pa=()=>i(dt,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Pa.displayName="ArticleIcon";const cp=()=>i(dt,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));cp.displayName="BookIcon";const up=()=>i(dt,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));up.displayName="LinkIcon";const pp=()=>i(dt,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));pp.displayName="ProjectIcon";const dp=()=>i(dt,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));dp.displayName="FriendIcon";const Ro=()=>i(dt,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ro.displayName="SlideDownIcon";const fp=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});fp.displayName="EmptyIcon";var Ih=z({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const n=Fn(t,"info"),{info:s,items:a}=Ch(t);return()=>{var f,h,g;const{[Wt.title]:o,[jt.type]:l,[jt.isEncrypted]:r=!1,[jt.cover]:c,[jt.excerpt]:u,[jt.sticky]:p}=n.value,d=s.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((f=e.cover)==null?void 0:f.call(e,{cover:c}))||(c?[i("img",{class:"vp-article-cover",src:Et(c),alt:"",loading:"lazy"}),i("meta",{property:"image",content:Et(c)})]:[]),p?i(ip):null,i(Lt,{to:t.path},()=>{var w;return((w=e.title)==null?void 0:w.call(e,{title:o,isEncrypted:r,type:l}))||i("header",{class:"vp-article-title"},[r?i(kl):null,l===Eu.slide?i(rp):null,i("span",{property:"headline"},o)])}),((h=e.excerpt)==null?void 0:h.call(e,{excerpt:u}))||(u?i("div",{class:"vp-article-excerpt",innerHTML:u}):null),i("hr",{class:"vp-article-hr"}),((g=e.info)==null?void 0:g.call(e,{info:d}))||i(Wu,{info:d,...a.value?{items:a.value}:{}})]))}}}),Ph=z({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(t,{emit:e}){let n;const s=ot(),a=Q(""),o=_(()=>s.value.paginationLocales),l=_(()=>Math.ceil(t.total/t.perPage)),r=_(()=>!!l.value&&l.value!==1),c=_(()=>l.value<7?!1:t.current>4),u=_(()=>l.value<7?!1:t.current<l.value-3),p=_(()=>{const{current:h}=t;let g=1,w=l.value;const k=[];l.value>=7&&(h<=4&&h<l.value-3?(g=1,w=5):h>4&&h>=l.value-3?(w=l.value,g=l.value-4):l.value>7&&(g=h-2,w=h+2));for(let b=g;b<=w;b++)k.push(b);return k}),d=h=>e("updateCurrentPage",h),f=h=>{const g=parseInt(h,10);g<=l.value&&g>0?d(g):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/gu,l.value.toString())}`)};return bt(()=>{n=new x3}),()=>i("div",{class:"vp-pagination"},r.value?i("nav",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[t.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(t.current-1)},o.value.prev):null,c.value?[i("div",{role:"navigation",onClick:()=>d(1)},1),i("div",{class:"ellipsis"},"...")]:null,p.value.map(h=>i("div",{key:h,class:{active:t.current===h},role:"navigation",onClick:()=>d(h)},h)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>d(l.value)},l.value)]:null,t.current<l.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(t.current+1)},o.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${o.value.navigate}: `),i("input",{id:"navigation-text",value:a.value,onInput:({target:h})=>{a.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),f(a.value))}}),i("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:o.value.action,onClick:()=>f(a.value)},o.value.action)])]):[])}}),$l=z({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(t){const e=tn(),n=vn(),s=Bs(),a=Q(1),o=_(()=>s.value.articlePerPage||10),l=_(()=>t.items.slice((a.value-1)*o.value,a.value*o.value)),r=async c=>{a.value=c;const u={...e.query};!(u.page===c.toString()||c===1&&!u.page)&&(c===1?delete u.page:u.page=c.toString(),await n.push({path:e.path,query:u}))};return bt(()=>{const{page:c}=e.query;r(c?Number(c):1),pt(a,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>i("div",{id:"article-list",class:"vp-article-list",role:"feed"},l.value.length?[...l.value.map(({info:c,path:u},p)=>i(ut,{appear:!0,delay:p*.04},()=>i(Ih,{key:u,info:c,path:u}))),i(Ph,{current:a.value,perPage:o.value,total:t.items.length,onUpdateCurrentPage:r})]:i(fp))}}),hp=z({name:"CategoryList",setup(){const t=mt(),e=zs();return()=>i("ul",{class:"vp-category-list"},Rs(e.value.map).sort(([,n],[,s])=>s.items.length-n.items.length).map(([n,{path:s,items:a}])=>i("li",{class:["vp-category",`vp-category${Sa(n,9)}`,{active:s===t.value.path}]},i(Lt,{to:s},()=>[n,i("span",{class:"count"},a.length)]))))}}),mp=z({name:"TagList",setup(){const t=ft(),e=Hs(),n=s=>{var a;return s===((a=t.value.blog)==null?void 0:a.name)};return()=>i("ul",{class:"tag-list-wrapper"},Rs(e.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:o}])=>i("li",{class:["tag",`tag${Sa(s,9)}`,{active:n(s)}]},i(Lt,{to:a},()=>[s,i("span",{class:"tag-num"},o.length)]))))}}),Rh=z({name:"TimelineList",setup(){const t=ot(),e=wl(),n=yn(),s=_(()=>t.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>n(e.value.path)},[i(Tl),i("span",{class:"num"},e.value.items.length),s.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},e.value.config.map(({year:a,items:o},l)=>i(ut,{appear:!0,delay:.08*(l+1)},()=>i("li",[i("h3",{class:"timeline-year"},a),i("ul",{class:"timeline-year-wrapper"},o.map(({date:r,info:c,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},r),i(Lt,{class:"timeline-title",to:u},()=>c[Wt.title])])))])))))])}});const Oh={article:Pa,category:El,tag:Cl,timeline:Tl};var gp=z({name:"InfoList",setup(){const t=ot(),e=Fs(),n=zs(),s=_(()=>pe(n.value.map).length),a=_l(),o=Hs(),l=_(()=>pe(o.value.map).length),r=yn(),c=Q("article"),u=_(()=>t.value.blogLocales);return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},Rs(Oh).map(([p,d])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=p}},i("div",{class:["icon-wrapper",{active:c.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},i(d))))),i(ut,()=>c.value==="article"?i("div",{class:"vp-star-article-wrapper"},[i("div",{class:"title",onClick:()=>r(e.value.path)},[i(Pa),i("span",{class:"num"},e.value.items.length),u.value.article]),i("hr"),a.value.items.length?i("ul",{class:"vp-star-articles"},a.value.items.map(({info:p,path:d},f)=>i(ut,{appear:!0,delay:.08*(f+1)},()=>i("li",{class:"vp-star-article"},i(Lt,{to:d},()=>p[Wt.title]))))):i("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):c.value==="category"?i("div",{class:"vp-category-wrapper"},[s.value?[i("div",{class:"title",onClick:()=>r(n.value.path)},[i(El),i("span",{class:"num"},s.value),u.value.category]),i("hr"),i(ut,{delay:.04},()=>i(hp))]:i("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):c.value==="tag"?i("div",{class:"vp-tag-wrapper"},[l.value?[i("div",{class:"title",onClick:()=>r(o.value.path)},[i(Cl),i("span",{class:"num"},l.value),u.value.tag]),i("hr"),i(ut,{delay:.04},()=>i(mp))]:i("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):i(ut,()=>i(Rh)))])}}),Ra=z({name:"BlogWrapper",slots:Object,setup(t,{slots:e}){const{isMobile:n}=Ds();return()=>[i(yl),i(vl,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>i(xl),...n.value?{sidebar:()=>i(gp)}:{}})]}});const vp=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(ut,()=>i(xl)),i(ut,{delay:.04},()=>i(gp))]);vp.displayName="InfoPanel";var Oa=vp,Mh=z({name:"BlogPage",setup(){const t=mt(),e=ft(),n=zs(),s=Hs();return()=>{const{key:a="",name:o=""}=e.value.blog||{},l=o?a==="category"?n.value.map[o].items:a==="tag"?s.value.map[o].items:[]:[];return i(Ra,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ut,()=>a==="category"?i(hp):a==="tag"?i(mp):null),o?i(ut,{appear:!0,delay:.24},()=>i($l,{key:t.value.path,items:l})):null]),i(ut,{delay:.16},()=>i(Oa,{key:"blog"}))])))}}});const Dh="//theme-hope-assets.vuejs.press/hero/default.jpg";var Nh=z({name:"BlogHero",slots:Object,setup(t,{slots:e}){const n=ft(),s=Is(),a=At(),o=_(()=>n.value.heroFullScreen??!1),l=_(()=>{const{heroText:c,heroImage:u,heroImageDark:p,heroAlt:d,heroImageStyle:f,tagline:h}=n.value;return{text:c??s.value.title??"Hello",tagline:h??"",image:u?Et(u):null,imageDark:p?Et(p):null,alt:d||c||"",style:f,isFullScreen:o.value}}),r=_(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:p}=n.value;return{image:Tt(c)?Et(c):c===!1?null:Dh,imageDark:Tt(u)?Et(u):null,bgStyle:p,isFullScreen:o.value}});return()=>{var c,u;return n.value.hero===!1?null:i("div",{ref:a,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!r.value.image}]},[((c=e.heroBg)==null?void 0:c.call(e,r.value))||[r.value.image?i("div",{class:["vp-blog-mask",{light:r.value.imageDark}],style:[{background:`url(${r.value.image}) center/cover no-repeat`},r.value.bgStyle]}):null,r.value.imageDark?i("div",{class:"vp-blog-mask dark",style:[{background:`url(${r.value.imageDark}) center/cover no-repeat`},r.value.bgStyle]}):null],((u=e.heroInfo)==null?void 0:u.call(e,l.value))||[i(ut,{appear:!0,type:"group",delay:.04},()=>[l.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:l.value.imageDark}],style:l.value.style,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:l.value.style,src:l.value.imageDark,alt:l.value.alt}):null]),i(ut,{appear:!0,delay:.08},()=>l.value.text?i("h1",{class:"vp-blog-hero-title"},l.value.text):null),i(ut,{appear:!0,delay:.12},()=>l.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:l.value.tagline}):null)],l.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[i(Ro),i(Ro)]):null])}}});const zh=["link","article","book","project","friend"];var Bh=z({name:"ProjectPanel",components:{ArticleIcon:Pa,BookIcon:cp,FriendIcon:dp,LinkIcon:up,ProjectIcon:pp},props:{items:{type:Array,required:!0}},setup(t){const e=bn(),n=yn(),s=(a="",o="icon")=>zh.includes(a)?i(ie(`${a}-icon`)):Re(a)?i("img",{class:"vp-project-image",src:a,alt:o}):La(a)?i("img",{class:"vp-project-image",src:Et(a),alt:o}):i(Vt,{icon:a});return()=>i("div",{class:"vp-project-panel"},t.items.map(({icon:a,link:o,name:l,desc:r},c)=>i("div",{class:["vp-project-card",{[`project${c%9}`]:!e.value}],onClick:()=>n(o)},[s(a,l),i("div",{class:"vp-project-name"},l),i("div",{class:"vp-project-desc"},r)])))}}),Hh=z({name:"BlogHome",setup(){const t=Fs(),e=ft(),n=_(()=>e.value.projects??[]);return()=>i("div",{class:"vp-page vp-blog"},[i(Nh),i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?i(ut,{appear:!0,delay:.16},()=>i(Bh,{items:n.value})):null,i(ut,{appear:!0,delay:.24},()=>i($l,{items:t.value.items}))]),i(ut,{appear:!0,delay:.16},()=>i(Oa,{key:"blog"}))]),i(ut,{appear:!0,delay:.28},()=>i(bl))])}});const bp=()=>i(Ra,()=>i(Hh));bp.displayName="BlogHomeLayout";var Fh=bp,jh=z({name:"ArticleType",setup(){const t=mt(),e=Oe(),n=ot(),s=Fs(),a=_l(),o=_(()=>{const l=n.value.blogLocales;return[{text:l.all,path:s.value.path},{text:l.star,path:a.value.path},...bh.map(({key:r,path:c})=>({text:l[r],path:c.replace(/^\//,e.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},o.value.map(l=>i("li",{class:["vp-article-type",{active:l.path===t.value.path}]},i(Lt,{to:l.path},()=>l.text))))}}),Vh=z({name:"BlogPage",setup(){const t=Ia(),e=ft(),n=mt(),s=Fs(),a=_l(),o=_(()=>{const{key:l="",type:r}=e.value.blog||{};return l==="star"?a.value.items:r==="type"&&l?t.value.items:s.value.items});return()=>i(Ra,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ut,()=>i(jh)),i(ut,{appear:!0,delay:.24},()=>i($l,{key:n.value.path,items:o.value}))]),i(ut,{delay:.16},()=>i(Oa,{key:"blog"}))])))}}),qh=z({name:"TimelineItems",setup(){const t=Bs(),e=ot(),n=wl(),s=_(()=>t.value.timeline||e.value.blogLocales.timelineTitle),a=_(()=>n.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(ut,()=>i("li",{class:"motto"},s.value)),i(Ku,{items:a.value}),n.value.config.map(({year:o,items:l},r)=>i(ut,{appear:!0,delay:.08*(r+1),type:"group"},()=>[i("h3",{key:"title",id:o,class:"timeline-year-title"},i("span",o)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},l.map(({date:c,info:u,path:p})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Lt,{class:"timeline-title",to:p},()=>u[Wt.title])])))])]))]))}});const yp=()=>i(Ra,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ut,{appear:!0,delay:.24},()=>i(qh))]),i(ut,{delay:.16},()=>i(Oa,{key:"blog"}))])));yp.displayName="Timeline";var Uh=yp,Gh={};const _n="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),lo=Array.from({length:64},(t,e)=>e),sa=t=>Array(t).fill(-1),He=[...sa(46),0,1,...lo.slice(54,64),...sa(7),...lo.slice(2,28),...sa(6),...lo.slice(28,54),...sa(5)],Xr=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Zr=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],kp=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Oo=(t,e)=>{if(e<=0||e>t.length)throw Error(`Illegal len: ${e}`);let n=0,s,a;const o=[];for(;n<e;){if(s=t[n++]&255,o.push(_n[s>>2&63]),s=(s&3)<<4,n>=e){o.push(_n[s&63]);break}if(a=t[n++]&255,s|=a>>4&15,o.push(_n[s&63]),s=(a&15)<<2,n>=e){o.push(_n[s&63]);break}a=t[n++]&255,s|=a>>6&3,o.push(_n[s&63]),o.push(_n[a&63])}return o.join("")},Wh=(t,e)=>{if(e<=0)throw Error(`Illegal len: ${e}`);const n=t.length;let s=0,a=0,o,l,r,c,u,p;const d=[];for(;s<n-1&&a<e&&(p=t.charCodeAt(s++),o=p<He.length?He[p]:-1,p=t.charCodeAt(s++),l=p<He.length?He[p]:-1,!(o==-1||l==-1||(u=o<<2>>>0,u|=(l&48)>>4,d.push(String.fromCharCode(u)),++a>=e||s>=n)||(p=t.charCodeAt(s++),r=p<He.length?He[p]:-1,r==-1)||(u=(l&15)<<4>>>0,u|=(r&60)>>2,d.push(String.fromCharCode(u)),++a>=e||s>=n)));)p=t.charCodeAt(s++),c=p<He.length?He[p]:-1,u=(r&3)<<6>>>0,u|=c,d.push(String.fromCharCode(u)),++a;return d.map(f=>f.charCodeAt(0))},Kh=(t,e)=>{let n=null;for(typeof t=="number"&&(n=t,t=()=>null);n!==null||(n=t())!==null;)n<128?e(n&127):n<2048?(e(n>>6&31|192),e(n&63|128)):n<65536?(e(n>>12&15|224),e(n>>6&63|128),e(n&63|128)):(e(n>>18&7|240),e(n>>12&63|128),e(n>>6&63|128),e(n&63|128)),n=null},Yh=(t,e)=>{let n,s=null;for(;(n=s!==null?s:t())!==null;){if(n>=55296&&n<=57343&&(s=t())!==null&&s>=56320&&s<=57343){e((n-55296)*1024+s-56320+65536),s=null;continue}e(n)}s!==null&&e(s)},Jh=(t,e)=>{Yh(t,function(n){Kh(n,e)})},Qh=typeof process=="object"&&Gh.NEXT_RUNTIME==="edge"?setTimeout:typeof setImmediate=="function"?setImmediate:typeof process=="object"&&typeof process.nextTick=="function"?process.nextTick:setTimeout,Xh=t=>{const e=[];let n=0;return Jh(()=>n>=t.length?null:t.charCodeAt(n++),s=>{e.push(s)}),e},ws=(t,e,n,s)=>{let a,o=t[e],l=t[e+1];return o^=n[0],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[1],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[2],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[3],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[4],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[5],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[6],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[7],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[8],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[9],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[10],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[11],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[12],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[13],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[14],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^n[15],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^n[16],t[e]=l^n[17],t[e+1]=o,t},xn=(t,e)=>{let n=0;for(let s=0;s<4;++s)n=n<<8|t[e]&255,e=(e+1)%t.length;return{key:n,offp:e}},ti=(t,e,n)=>{const s=e.length,a=n.length;let o=0,l=[0,0],r;for(let c=0;c<s;c++)r=xn(t,o),o=r.offp,e[c]=e[c]^r.key;for(let c=0;c<s;c+=2)l=ws(l,0,e,n),e[c]=l[0],e[c+1]=l[1];for(let c=0;c<a;c+=2)l=ws(l,0,e,n),n[c]=l[0],n[c+1]=l[1]},Zh=(t,e,n,s)=>{const a=n.length,o=s.length;let l=0,r=[0,0],c;for(let u=0;u<a;u++)c=xn(e,l),l=c.offp,n[u]=n[u]^c.key;l=0;for(let u=0;u<a;u+=2)c=xn(t,l),l=c.offp,r[0]^=c.key,c=xn(t,l),l=c.offp,r[1]^=c.key,r=ws(r,0,n,s),n[u]=r[0],n[u+1]=r[1];for(let u=0;u<o;u+=2)c=xn(t,l),l=c.offp,r[0]^=c.key,c=xn(t,l),l=c.offp,r[1]^=c.key,r=ws(r,0,n,s),s[u]=r[0],s[u+1]=r[1]},ei=(t,e,n,s,a)=>{const o=kp.slice(),l=o.length;if(n<4||n>31){const f=new Error(`Illegal number of rounds (4-31): ${n}`);if(s===!1)return Promise.reject(f);throw f}if(e.length!==16){const f=new Error(`Illegal salt length: ${e.length} != 16`);if(s===!1)return Promise.reject(f);throw f}n=1<<n>>>0;let r,c,u=0,p;Int32Array?(r=new Int32Array(Xr),c=new Int32Array(Zr)):(r=Xr.slice(),c=Zr.slice()),Zh(e,t,r,c);const d=()=>{if(a&&a(u/n),u<n){const f=Date.now();for(;u<n&&(u=u+1,ti(t,r,c),ti(e,r,c),!(Date.now()-f>100)););}else{for(u=0;u<64;u++)for(p=0;p<l>>1;p++)ws(o,p<<1,r,c);const f=[];for(u=0;u<l;u++)f.push((o[u]>>24&255)>>>0),f.push((o[u]>>16&255)>>>0),f.push((o[u]>>8&255)>>>0),f.push((o[u]&255)>>>0);return s===!1?Promise.resolve(f):f}if(s===!1)return new Promise(f=>Qh(()=>{d().then(f)}))};if(s===!1)return d();{let f;for(;;)if(typeof(f=d())<"u")return f||[]}},t6=t=>{try{let e;typeof window<"u"?e=window.crypto??window.msCrypto:e=globalThis.crypto;const n=new Uint32Array(t);return e==null||e.getRandomValues(n),Array.from(n)}catch{throw Error("WebCryptoAPI is not available")}},e6=(t=10)=>{if(typeof t!="number")throw Error("Illegal arguments: "+typeof t);t<4?t=4:t>31&&(t=31);const e=[];return e.push("$2a$"),t<10&&e.push("0"),e.push(t.toString()),e.push("$"),e.push(Oo(t6(16),16)),e.join("")};function n6(t,e,n,s){if(typeof t!="string"||typeof e!="string"){const h=new Error("Invalid string / salt: Not a string");if(n===!1)return Promise.reject(h);throw h}let a,o;if(e.charAt(0)!=="$"||e.charAt(1)!=="2"){const h=new Error("Invalid salt version: "+e.substring(0,2));if(n===!1)return Promise.reject(h);throw h}if(e.charAt(2)==="$")a="\0",o=3;else{if(a=e.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||e.charAt(3)!=="$"){const h=Error("Invalid salt revision: "+e.substring(2,4));if(n===!1)return Promise.reject(h);throw h}o=4}if(e.charAt(o+2)>"$"){const h=new Error("Missing salt rounds");if(n===!1)return Promise.reject(h);throw h}const l=parseInt(e.substring(o,o+1),10)*10,r=parseInt(e.substring(o+1,o+2),10),c=l+r,u=e.substring(o+3,o+25);t+=a>="a"?"\0":"";const p=Xh(t),d=Wh(u,16),f=h=>{const g=[];return g.push("$2"),a>="a"&&g.push(a),g.push("$"),c<10&&g.push("0"),g.push(c.toString()),g.push("$"),g.push(Oo(d,d.length)),g.push(Oo(h,kp.length*4-1)),g.join("")};return n===!1?ei(p,d,c,!1,s).then(h=>f(h)):f(ei(p,d,c,!0,s))}const s6=(t,e=10)=>{if(typeof e=="number"&&(e=e6(e)),typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return n6(t,e,!0)},Mo=(t,e)=>{if(typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return e.length!==60?!1:s6(t,e.substring(0,e.length-31))===e};var _p=z({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(t,{emit:e}){const n=ft(),s=ot(),a=Q(""),o=Q(!1),l=Q(!1),r=_(()=>s.value.encryptLocales);let c=null;const u=()=>{c&&clearTimeout(c),o.value=!1,e("verify",a.value,l.value),Ze().then(()=>{o.value=!0,c=setTimeout(()=>{o.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:t.full||n.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:o.value}]},o.value?r.value.errorHint:i(kl,{"aria-label":r.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:a.value,placeholder:r.value.placeholder,onInput:({target:p})=>{a.value=p.value},onKeydown:({key:p})=>{p==="Enter"&&u()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:l.value,onChange:()=>l.value=!l.value}),r.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>u()},"OK")]))}});const wp=()=>{const t=Me();return _(()=>t.value.encrypt||{})},ni="VUEPRESS_HOPE_GLOBAL_TOKEN",a6=()=>{const t=wp(),e=Gn(ni,""),n=Bc(ni,""),s=_(()=>{const{global:o=!1,admin:l=[]}=t.value;return o&&l.length>0}),a=_(()=>{if(s.value){if(e.value)return t.value.admin.some(o=>Mo(e.value,o));if(n.value)return t.value.admin.some(o=>Mo(n.value,o))}return!1});return{isEncrypted:s,isDecrypted:a,validate:(o,l=!1)=>{(l?e:n).value=o}}},ro=(t="",e)=>!!t&&Mo(t,e),si="VUEPRESS_HOPE_PATH_TOKEN",o6=()=>{const t=mt(),e=wp(),n=Gn(si,{}),s=Bc(si,{}),a=l=>gn(e.value.config)?pe(e.value.config).filter(r=>Bn(decodeURI(l),r)).sort((r,c)=>c.length-r.length):[],o=l=>{const r=a(l);if(r.length>0){const{config:c={}}=e.value;return{isEncrypted:!0,isDecrypted:r.some(u=>n.value[u]&&c[u].some(p=>ro(n.value[u],p))||s.value[u]&&c[u].some(p=>ro(s.value[u],p)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:_(()=>o(t.value.path)),getStatus:o,validate:(l,r=!1)=>{const{config:c={}}=e.value,u=a(t.value.path);for(const p of u)if(c[p].filter(d=>ro(l,d))){(r?n:s).value[p]=l;break}}}};var l6=z({name:"GlobalEncrypt",slots:Object,setup(t,{slots:e}){const{isDecrypted:n,isEncrypted:s,validate:a}=a6(),o=Q(!1);return bt(()=>{o.value=!0}),()=>i(Ju,()=>s.value?o.value?n.value?e.default():i(_p,{full:!0,onVerify:a}):null:e.default())}}),r6=z({name:"LocalEncrypt",slots:Object,setup(t,{slots:e}){const{status:n,validate:s}=o6(),a=Q(!1);return bt(()=>{a.value=!0}),()=>{const{isEncrypted:o,isDecrypted:l}=n.value;return o?a.value?l?e.default():i(_p,{full:!0,onVerify:s}):null:e.default()}}});Sf(t=>{const e=t.t,n=t.I!==!1,s=t.i;return n?{title:e,content:s?()=>[i(Vt,{icon:s}),e]:null,order:t.O,index:t.I}:null});const i6=te({enhance:({app:t,router:e})=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=async(...s)=>(await Yu().wait(),n(...s)),_4(t),t.component("HopeIcon",Vt),t.component("BloggerInfo",xl),t.component("GlobalEncrypt",l6),t.component("LocalEncrypt",r6)},setup:()=>{w4(),C4(),Ah()},layouts:{Layout:dh,NotFound:hh,BlogCategory:Mh,BlogHome:Fh,BlogType:Vh,Timeline:Uh}}),aa=[A0,xf,Af,Mf,zf,jf,Gf,Qf,o3,g3,k3,Y3,c4,i6],c6=JSON.parse(`{"base":"/","lang":"zh-CN","title":"BradZhone's Blog","description":"","head":[],"locales":{}}`);var Xn=At(c6),u6=K2,p6=()=>{const t=y0({history:u6(Ea("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,n,s)=>s||(e.hash?{el:e.hash}:{top:0})});return t.beforeResolve(async(e,n)=>{if(e.path!==n.path||n===Le){const s=Vn(e.path);if(s.path!==e.path)return s.path;const a=await s.loader();e.meta={...s.meta,_pageChunk:a}}else e.path===n.path&&(e.meta=n.meta)}),t},d6=t=>{t.component("ClientOnly",$a),t.component("Content",wc),t.component("RouteLink",Lt)},f6=(t,e,n)=>{const s=_(()=>e.currentRoute.value.path),a=Jo((k,b)=>({get(){return k(),e.currentRoute.value.meta._pageChunk},set(E){e.currentRoute.value.meta._pageChunk=E,b()}})),o=_(()=>an.resolveLayouts(n)),l=_(()=>an.resolveRouteLocale(Xn.value.locales,s.value)),r=_(()=>an.resolveSiteLocaleData(Xn.value,l.value)),c=_(()=>a.value.comp),u=_(()=>a.value.data),p=_(()=>u.value.frontmatter),d=_(()=>an.resolvePageHeadTitle(u.value,r.value)),f=_(()=>an.resolvePageHead(d.value,p.value,r.value)),h=_(()=>an.resolvePageLang(u.value,r.value)),g=_(()=>an.resolvePageLayout(u.value,o.value)),w={layouts:o,pageData:u,pageComponent:c,pageFrontmatter:p,pageHead:f,pageHeadTitle:d,pageLang:h,pageLayout:g,redirects:wo,routeLocale:l,routePath:s,routes:vs,siteData:Xn,siteLocaleData:r};return t.provide(rl,w),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>h.value},$page:{get:()=>u.value},$routeLocale:{get:()=>l.value},$site:{get:()=>Xn.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>Et}}),w},h6=()=>{const t=w0(),e=il();let n=[];const s=()=>{t.value.forEach(l=>{const r=m6(l);r&&n.push(r)})},a=()=>{const l=[];return t.value.forEach(r=>{const c=g6(r);c&&l.push(c)}),l},o=()=>{document.documentElement.lang=e.value;const l=a();n.forEach((r,c)=>{const u=l.findIndex(p=>r.isEqualNode(p));u===-1?(r.remove(),delete n[c]):l.splice(u,1)}),l.forEach(r=>document.head.appendChild(r)),n=[...n.filter(r=>!!r),...l]};ge(C0,o),bt(()=>{s(),pt(t,o,{immediate:!1})})},m6=([t,e,n=""])=>{const s=Object.entries(e).map(([r,c])=>Tt(c)?`[${r}=${JSON.stringify(c)}]`:c===!0?`[${r}]`:"").join(""),a=`head > ${t}${s}`;return Array.from(document.querySelectorAll(a)).find(r=>r.innerText===n)||null},g6=([t,e,n])=>{if(!Tt(t))return null;const s=document.createElement(t);return gn(e)&&Object.entries(e).forEach(([a,o])=>{Tt(o)?s.setAttribute(a,o):o===!0&&s.setAttribute(a,"")}),Tt(n)&&s.appendChild(document.createTextNode(n)),s},v6=s2,b6=async()=>{var n;const t=v6({name:"Vuepress",setup(){var o;h6();for(const l of aa)(o=l.setup)==null||o.call(l);const s=aa.flatMap(({rootComponents:l=[]})=>l.map(r=>i(r))),a=x0();return()=>[i(a.value),s]}}),e=p6();d6(t),f6(t,e,aa);for(const s of aa)await((n=s.enhance)==null?void 0:n.call(s,{app:t,router:e,siteData:Xn}));return t.use(e),{app:t,router:e}};b6().then(({app:t,router:e})=>{e.isReady().then(()=>{t.mount("#app")})});export{Ji as a,Qi as b,k6 as c,b6 as createVueApp,Ot as d,_6 as e,y6 as o,ie as r,_d as w};
