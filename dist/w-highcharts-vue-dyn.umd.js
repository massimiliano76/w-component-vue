/*!
 * w-highcharts-vue-dyn v1.2.53
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t=t||self)["w-highcharts-vue-dyn"]=e(t.Vue)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t};var n=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}();var r=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var u="object"==o(a)&&a&&a.Object===Object&&a,c="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),f=s.Symbol,l=Object.prototype,v=l.hasOwnProperty,d=l.toString,p=f?f.toStringTag:void 0;var h=function(t){var e=v.call(t,p),n=t[p];try{t[p]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(e?t[p]=n:delete t[p]),o},y=Object.prototype.toString;var b=function(t){return y.call(t)},m="[object Null]",_="[object Undefined]",g=f?f.toStringTag:void 0;var j=function(t){return null==t?void 0===t?_:m:g&&g in Object(t)?h(t):b(t)};var w=function(t){return null!=t&&"object"==o(t)},S="[object Arguments]";var O=function(t){return w(t)&&j(t)==S},A=Object.prototype,k=A.hasOwnProperty,M=A.propertyIsEnumerable,x=O(function(){return arguments}())?O:function(t){return w(t)&&k.call(t,"callee")&&!M.call(t,"callee")},T=Array.isArray;var Y=function(){return!1},z=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?s.Buffer:void 0,a=(o?o.isBuffer:void 0)||Y;t.exports=a})),N=9007199254740991,C=/^(?:0|[1-9]\d*)$/;var E=function(t,e){var n=o(t);return!!(e=null==e?N:e)&&("number"==n||"symbol"!=n&&C.test(t))&&t>-1&&t%1==0&&t<e},P=9007199254740991;var $=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=P},F={};F["[object Float32Array]"]=F["[object Float64Array]"]=F["[object Int8Array]"]=F["[object Int16Array]"]=F["[object Int32Array]"]=F["[object Uint8Array]"]=F["[object Uint8ClampedArray]"]=F["[object Uint16Array]"]=F["[object Uint32Array]"]=!0,F["[object Arguments]"]=F["[object Array]"]=F["[object ArrayBuffer]"]=F["[object Boolean]"]=F["[object DataView]"]=F["[object Date]"]=F["[object Error]"]=F["[object Function]"]=F["[object Map]"]=F["[object Number]"]=F["[object Object]"]=F["[object RegExp]"]=F["[object Set]"]=F["[object String]"]=F["[object WeakMap]"]=!1;var L=function(t){return w(t)&&$(t.length)&&!!F[j(t)]};var H=function(t){return function(e){return t(e)}},I=i((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&u.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),R=I&&I.isTypedArray,V=R?H(R):L,B=Object.prototype.hasOwnProperty;var D=function(t,e){var n=T(t),o=!n&&x(t),a=!n&&!o&&z(t),i=!n&&!o&&!a&&V(t),u=n||o||a||i,c=u?r(t.length,String):[],s=c.length;for(var f in t)!e&&!B.call(t,f)||u&&("length"==f||a&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||E(f,s))||c.push(f);return c},U=Object.prototype;var G=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||U)};var W=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),X=Object.prototype.hasOwnProperty;var q=function(t){if(!G(t))return W(t);var e=[];for(var n in Object(t))X.call(t,n)&&"constructor"!=n&&e.push(n);return e};var J=function(t){var e=o(t);return null!=t&&("object"==e||"function"==e)},Z="[object AsyncFunction]",K="[object Function]",Q="[object GeneratorFunction]",tt="[object Proxy]";var et=function(t){if(!J(t))return!1;var e=j(t);return e==K||e==Q||e==Z||e==tt};var nt=function(t){return null!=t&&$(t.length)&&!et(t)};var rt=function(t){return nt(t)?D(t):q(t)};var ot=function(t,e){return function(n,r){if(null==n)return n;if(!nt(n))return t(n,r);for(var o=n.length,a=e?o:-1,i=Object(n);(e?a--:++a<o)&&!1!==r(i[a],a,i););return n}}((function(t,e){return t&&n(t,e,rt)}));var at=function(t){return t};var it=function(t){return"function"==typeof t?t:at};var ut=function(t,n){return(T(t)?e:ot)(t,it(n))};var ct=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var st=function(){this.__data__=[],this.size=0};var ft=function(t,e){return t===e||t!=t&&e!=e};var lt=function(t,e){for(var n=t.length;n--;)if(ft(t[n][0],e))return n;return-1},vt=Array.prototype.splice;var dt=function(t){var e=this.__data__,n=lt(e,t);return!(n<0)&&(n==e.length-1?e.pop():vt.call(e,n,1),--this.size,!0)};var pt=function(t){var e=this.__data__,n=lt(e,t);return n<0?void 0:e[n][1]};var ht=function(t){return lt(this.__data__,t)>-1};var yt=function(t,e){var n=this.__data__,r=lt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=st,bt.prototype.delete=dt,bt.prototype.get=pt,bt.prototype.has=ht,bt.prototype.set=yt;var mt=bt;var _t=function(){this.__data__=new mt,this.size=0};var gt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var jt=function(t){return this.__data__.get(t)};var wt,St=function(t){return this.__data__.has(t)},Ot=s["__core-js_shared__"],At=(wt=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||""))?"Symbol(src)_1."+wt:"";var kt=function(t){return!!At&&At in t},Mt=Function.prototype.toString;var xt=function(t){if(null!=t){try{return Mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Tt=/^\[object .+?Constructor\]$/,Yt=Function.prototype,zt=Object.prototype,Nt=Yt.toString,Ct=zt.hasOwnProperty,Et=RegExp("^"+Nt.call(Ct).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pt=function(t){return!(!J(t)||kt(t))&&(et(t)?Et:Tt).test(xt(t))};var $t=function(t,e){return null==t?void 0:t[e]};var Ft=function(t,e){var n=$t(t,e);return Pt(n)?n:void 0},Lt=Ft(s,"Map"),Ht=Ft(Object,"create");var It=function(){this.__data__=Ht?Ht(null):{},this.size=0};var Rt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Vt="__lodash_hash_undefined__",Bt=Object.prototype.hasOwnProperty;var Dt=function(t){var e=this.__data__;if(Ht){var n=e[t];return n===Vt?void 0:n}return Bt.call(e,t)?e[t]:void 0},Ut=Object.prototype.hasOwnProperty;var Gt=function(t){var e=this.__data__;return Ht?void 0!==e[t]:Ut.call(e,t)},Wt="__lodash_hash_undefined__";var Xt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ht&&void 0===e?Wt:e,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=It,qt.prototype.delete=Rt,qt.prototype.get=Dt,qt.prototype.has=Gt,qt.prototype.set=Xt;var Jt=qt;var Zt=function(){this.size=0,this.__data__={hash:new Jt,map:new(Lt||mt),string:new Jt}};var Kt=function(t){var e=o(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Qt=function(t,e){var n=t.__data__;return Kt(e)?n["string"==typeof e?"string":"hash"]:n.map};var te=function(t){var e=Qt(this,t).delete(t);return this.size-=e?1:0,e};var ee=function(t){return Qt(this,t).get(t)};var ne=function(t){return Qt(this,t).has(t)};var re=function(t,e){var n=Qt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function oe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}oe.prototype.clear=Zt,oe.prototype.delete=te,oe.prototype.get=ee,oe.prototype.has=ne,oe.prototype.set=re;var ae=oe,ie=200;var ue=function(t,e){var n=this.__data__;if(n instanceof mt){var r=n.__data__;if(!Lt||r.length<ie-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ae(r)}return n.set(t,e),this.size=n.size,this};function ce(t){var e=this.__data__=new mt(t);this.size=e.size}ce.prototype.clear=_t,ce.prototype.delete=gt,ce.prototype.get=jt,ce.prototype.has=St,ce.prototype.set=ue;var se=ce,fe="__lodash_hash_undefined__";var le=function(t){return this.__data__.set(t,fe),this};var ve=function(t){return this.__data__.has(t)};function de(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new ae;++e<n;)this.add(t[e])}de.prototype.add=de.prototype.push=le,de.prototype.has=ve;var pe=de;var he=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};var ye=function(t,e){return t.has(e)},be=1,me=2;var _e=function(t,e,n,r,o,a){var i=n&be,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var f=-1,l=!0,v=n&me?new pe:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var d=t[f],p=e[f];if(r)var h=i?r(p,d,f,e,t,a):r(d,p,f,t,e,a);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!he(e,(function(t,e){if(!ye(v,e)&&(d===t||o(d,t,n,r,a)))return v.push(e)}))){l=!1;break}}else if(d!==p&&!o(d,p,n,r,a)){l=!1;break}}return a.delete(t),a.delete(e),l},ge=s.Uint8Array;var je=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var we=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Se=1,Oe=2,Ae="[object Boolean]",ke="[object Date]",Me="[object Error]",xe="[object Map]",Te="[object Number]",Ye="[object RegExp]",ze="[object Set]",Ne="[object String]",Ce="[object Symbol]",Ee="[object ArrayBuffer]",Pe="[object DataView]",$e=f?f.prototype:void 0,Fe=$e?$e.valueOf:void 0;var Le=function(t,e,n,r,o,a,i){switch(n){case Pe:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Ee:return!(t.byteLength!=e.byteLength||!a(new ge(t),new ge(e)));case Ae:case ke:case Te:return ft(+t,+e);case Me:return t.name==e.name&&t.message==e.message;case Ye:case Ne:return t==e+"";case xe:var u=je;case ze:var c=r&Se;if(u||(u=we),t.size!=e.size&&!c)return!1;var s=i.get(t);if(s)return s==e;r|=Oe,i.set(t,e);var f=_e(u(t),u(e),r,o,a,i);return i.delete(t),f;case Ce:if(Fe)return Fe.call(t)==Fe.call(e)}return!1};var He=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};var Ie=function(t,e,n){var r=e(t);return T(t)?r:He(r,n(t))};var Re=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a};var Ve=function(){return[]},Be=Object.prototype.propertyIsEnumerable,De=Object.getOwnPropertySymbols,Ue=De?function(t){return null==t?[]:(t=Object(t),Re(De(t),(function(e){return Be.call(t,e)})))}:Ve;var Ge=function(t){return Ie(t,rt,Ue)},We=1,Xe=Object.prototype.hasOwnProperty;var qe=function(t,e,n,r,o,a){var i=n&We,u=Ge(t),c=u.length;if(c!=Ge(e).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in e:Xe.call(e,f)))return!1}var l=a.get(t);if(l&&a.get(e))return l==e;var v=!0;a.set(t,e),a.set(e,t);for(var d=i;++s<c;){var p=t[f=u[s]],h=e[f];if(r)var y=i?r(h,p,f,e,t,a):r(p,h,f,t,e,a);if(!(void 0===y?p===h||o(p,h,n,r,a):y)){v=!1;break}d||(d="constructor"==f)}if(v&&!d){var b=t.constructor,m=e.constructor;b!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m)&&(v=!1)}return a.delete(t),a.delete(e),v},Je=Ft(s,"DataView"),Ze=Ft(s,"Promise"),Ke=Ft(s,"Set"),Qe=Ft(s,"WeakMap"),tn=xt(Je),en=xt(Lt),nn=xt(Ze),rn=xt(Ke),on=xt(Qe),an=j;(Je&&"[object DataView]"!=an(new Je(new ArrayBuffer(1)))||Lt&&"[object Map]"!=an(new Lt)||Ze&&"[object Promise]"!=an(Ze.resolve())||Ke&&"[object Set]"!=an(new Ke)||Qe&&"[object WeakMap]"!=an(new Qe))&&(an=function(t){var e=j(t),n="[object Object]"==e?t.constructor:void 0,r=n?xt(n):"";if(r)switch(r){case tn:return"[object DataView]";case en:return"[object Map]";case nn:return"[object Promise]";case rn:return"[object Set]";case on:return"[object WeakMap]"}return e});var un=an,cn=1,sn="[object Arguments]",fn="[object Array]",ln="[object Object]",vn=Object.prototype.hasOwnProperty;var dn=function(t,e,n,r,o,a){var i=T(t),u=T(e),c=i?fn:un(t),s=u?fn:un(e),f=(c=c==sn?ln:c)==ln,l=(s=s==sn?ln:s)==ln,v=c==s;if(v&&z(t)){if(!z(e))return!1;i=!0,f=!1}if(v&&!f)return a||(a=new se),i||V(t)?_e(t,e,n,r,o,a):Le(t,e,c,n,r,o,a);if(!(n&cn)){var d=f&&vn.call(t,"__wrapped__"),p=l&&vn.call(e,"__wrapped__");if(d||p){var h=d?t.value():t,y=p?e.value():e;return a||(a=new se),o(h,y,n,r,a)}}return!!v&&(a||(a=new se),qe(t,e,n,r,o,a))};var pn=function t(e,n,r,o,a){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:dn(e,n,r,o,t,a))},hn=1,yn=2;var bn=function(t,e,n,r){var o=n.length,a=o,i=!r;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new se;if(r)var v=r(s,f,c,t,e,l);if(!(void 0===v?pn(f,s,hn|yn,r,l):v))return!1}}return!0};var mn=function(t){return t==t&&!J(t)};var _n=function(t){for(var e=rt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,mn(o)]}return e};var gn=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};var jn=function(t){var e=_n(t);return 1==e.length&&e[0][2]?gn(e[0][0],e[0][1]):function(n){return n===t||bn(n,t,e)}},wn="[object Symbol]";var Sn=function(t){return"symbol"==o(t)||w(t)&&j(t)==wn},On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,An=/^\w*$/;var kn=function(t,e){if(T(t))return!1;var n=o(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Sn(t))||(An.test(t)||!On.test(t)||null!=e&&t in Object(e))},Mn="Expected a function";function xn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Mn);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(xn.Cache||ae),n}xn.Cache=ae;var Tn=xn,Yn=500;var zn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nn=/\\(\\)?/g,Cn=function(t){var e=Tn(t,(function(t){return n.size===Yn&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(zn,(function(t,n,r,o){e.push(r?o.replace(Nn,"$1"):n||t)})),e})),En=1/0,Pn=f?f.prototype:void 0,$n=Pn?Pn.toString:void 0;var Fn=function t(e){if("string"==typeof e)return e;if(T(e))return ct(e,t)+"";if(Sn(e))return $n?$n.call(e):"";var n=e+"";return"0"==n&&1/e==-En?"-0":n};var Ln=function(t){return null==t?"":Fn(t)};var Hn=function(t,e){return T(t)?t:kn(t,e)?[t]:Cn(Ln(t))},In=1/0;var Rn=function(t){if("string"==typeof t||Sn(t))return t;var e=t+"";return"0"==e&&1/t==-In?"-0":e};var Vn=function(t,e){for(var n=0,r=(e=Hn(e,t)).length;null!=t&&n<r;)t=t[Rn(e[n++])];return n&&n==r?t:void 0};var Bn=function(t,e,n){var r=null==t?void 0:Vn(t,e);return void 0===r?n:r};var Dn=function(t,e){return null!=t&&e in Object(t)};var Un=function(t,e,n){for(var r=-1,o=(e=Hn(e,t)).length,a=!1;++r<o;){var i=Rn(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&$(o)&&E(i,o)&&(T(t)||x(t))};var Gn=function(t,e){return null!=t&&Un(t,e,Dn)},Wn=1,Xn=2;var qn=function(t,e){return kn(t)&&mn(e)?gn(Rn(t),e):function(n){var r=Bn(n,t);return void 0===r&&r===e?Gn(n,t):pn(e,r,Wn|Xn)}};var Jn=function(t){return function(e){return null==e?void 0:e[t]}};var Zn=function(t){return function(e){return Vn(e,t)}};var Kn=function(t){return kn(t)?Jn(Rn(t)):Zn(t)};var Qn=function(t){return"function"==typeof t?t:null==t?at:"object"==o(t)?T(t)?qn(t[0],t[1]):jn(t):Kn(t)};var tr=function(t,e){var n=-1,r=nt(t)?Array(t.length):[];return ot(t,(function(t,o,a){r[++n]=e(t,o,a)})),r};var er=function(t,e){return(T(t)?ct:tr)(t,Qn(e))},nr=Array.prototype.join;var rr=function(t,e){return null==t?"":nr.call(t,e)};function or(t){return"[object Array]"===Object.prototype.toString.call(t)}function ar(t){return"[object String]"===Object.prototype.toString.call(t)}function ir(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function ur(){var t,e,n=new Promise((function(){t=arguments[0],e=arguments[1]}));return n.resolve=t,n.reject=e,n}var cr=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a},sr=NaN,fr=/^\s+|\s+$/g,lr=/^[-+]0x[0-9a-f]+$/i,vr=/^0b[01]+$/i,dr=/^0o[0-7]+$/i,pr=parseInt;var hr=function(t){if("number"==typeof t)return t;if(Sn(t))return sr;if(J(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=J(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(fr,"");var n=vr.test(t);return n||dr.test(t)?pr(t.slice(2),n?2:8):lr.test(t)?sr:+t},yr=1/0,br=17976931348623157e292;var mr=function(t){return t?(t=hr(t))===yr||t===-yr?(t<0?-1:1)*br:t==t?t:0:0===t?t:0};var _r=function(t){var e=mr(t),n=e%1;return e==e?n?e-n:e:0};var gr=function(t,e,n){var r=null==t?0:t.length;return r?(e=n||void 0===e?1:_r(e),cr(t,e<0?0:e,r)):[]};var jr=function(t){return"number"==typeof t&&t==_r(t)};function wr(t){return!(!ar(t)||""===t)}function Sr(t){var e=!1;return wr(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Or(t){return Sr(t)?mr(t):0}var Ar=s.isFinite,kr=Math.min;var Mr=function(t){var e=Math[t];return function(t,n){if(t=hr(t),(n=null==n?0:kr(_r(n),292))&&Ar(t)){var r=(Ln(t)+"e").split("e"),o=e(r[0]+"e"+(+r[1]+n));return+((r=(Ln(o)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}("round");function xr(t){return!!function(t){return!!Sr(t)&&(t=Or(t),jr(t))}(t)&&function(t){if(!Sr(t))return 0;t=Or(t);var e=Mr(t);return"0"===String(e)?0:e}(t)>0}function Tr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180,n=ur();if(!ir(t))return n.reject("waitfunction需輸入函數f"),n;if(!0===t())return n.resolve(),n;xr(e)||(e=180);var r=0,o=setInterval((function(){r+=1,!0===t()&&(clearInterval(o),n.resolve()),r>=e&&(clearInterval(o),n.resolve())}),1e3);return n}function Yr(t,e){if(!wr(t))return"";if(!xr(e))return"";var n=t.length-e;return n<0&&(n=0),t.substr(n,e)}var zr={},Nr={};function Cr(t){var e=t.tagName,n=t.path,r=t.attributes,o=void 0===r?{}:r,a=t.func,i=ur();if("done"===zr[n])return i.resolve("loaded"),i;if("loading"===zr[n])return Tr((function(){return"done"===zr[n]})).then((function(){i.resolve("loaded")})),i;zr[n]="loading";var u=document.createElement(e);return ut(o,(function(t,e){u.setAttribute(e,t)})),o.rel&&"stylesheet"===o.rel?(u.setAttribute("href",n),setTimeout((function(){i.resolve(u),zr[n]="done"}),1)):(u.src=n,u.addEventListener("load",(function(){var t;ir(a)?t=Tr(a):(t=ur()).resolve(),t.then((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Sr(t)||(t=10);var e=ur();return setTimeout((function(){e.resolve()}),t),e}(500)})).then((function(){i.resolve(u),zr[n]="done"}))})),u.addEventListener("error",(function(){i.reject(u),zr[n]="done"}))),document.getElementsByTagName("head")[0].appendChild(u),i}function Er(t){var e=ur();or(t)||(t=[t]),ut(t,(function(e,n){ar(e)&&(t[n]={path:e})}));var n=rr(er(t,"path"),"|");return"done"===Nr[n]?(e.resolve("loaded"),e):"loading"===Nr[n]?(Tr((function(){return"done"===Nr[n]})).then((function(){e.resolve("loaded")})),e):(Nr[n]="loading",ut(t,(function(t,e){t.type||(".js"===Yr(t.path,3)?t.type="js":".css"===Yr(t.path,4)?t.type="css":t.type="unknow")})),function(t,e){var n=ur();if(!or(t))return n.reject("rs is not array"),n;ir(e)||(e=function(t){return t});var r=-1,o=[];return t.reduce((function(t,n){return t.then((function(t){return o.push(t),e(n,r+=1)}))}),Promise.resolve()).then((function(t){o.push(t),o=gr(o),n.resolve(o)})).catch((function(t){n.reject(t)})),n}(t,(function(t){var e=ur();if("js"===t.type)e=Cr({tagName:"script",path:t.path,attributes:{type:"text/javascript"},func:t.func});else if("css"===t.type)e=Cr({tagName:"link",path:t.path,attributes:{rel:"stylesheet"}});else{var n="invalid pathItem.type: "+t.type;console.log(n),e.reject(n)}return e})).finally((function(){Nr[n]="done"})))}var Pr={components:{},props:{name:{type:String,default:"cir1"},size:{type:Number,default:48}},data:function(){return{}},computed:{},methods:{}};var $r=function(t,e,n,r,o,a,i,u,c,s){"boolean"!=typeof i&&(c=u,u=i,i=!1);var f,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):e&&(f=i?function(){e.call(this,s(this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),f)if(l.functional){var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return n},Fr="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var Lr=document.head||document.getElementsByTagName("head")[0],Hr={};var Ir=function(t){return function(t,e){return function(t,e){var n=Fr?e.media||"default":t,r=Hr[n]||(Hr[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),Lr.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),u=r.element.childNodes;u[a]&&r.element.removeChild(u[a]),u.length?r.element.insertBefore(i,u[a]):r.element.appendChild(i)}}}(t,e)}};const Rr=Pr;var Vr=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},["cir1"===this.name?[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",width:this.size,height:this.size}},[e("circle",{attrs:{cx:"50",cy:"50",r:"14.6699",fill:"none",stroke:"#420457","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:"-0.5s"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:"-0.5s"}})]),this._v(" "),e("circle",{attrs:{cx:"50",cy:"50",r:"33.9915",fill:"none",stroke:"#5a3faa","stroke-width":"10"}},[e("animate",{attrs:{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;40",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline"}}),this._v(" "),e("animate",{attrs:{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline"}})])])]:this._e()],2)};Vr._withStripped=!0;var Br=$r({render:Vr,staticRenderFns:[]},(function(t){t&&t("data-v-619e545c_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WIconLoading.vue"},media:void 0})}),Rr,"data-v-619e545c",!1,void 0,Ir,void 0);function Dr(){var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:null;return t||e.Vue}t&&!window.Vue&&(window.Vue=t);const Ur={components:{WIconLoading:Br},props:{pathItems:{type:Array,default:function(){return["https://cdn.jsdelivr.net/npm/highcharts@8.0.0/highcharts.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/stock.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/heatmap.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/boost.js","https://cdn.jsdelivr.net/npm/highcharts@8.0.0/modules/boost-canvas.js","https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js"]}},options:{type:Object,default:function(){}}},data:function(){return{cmpName:"WIconLoading"}},mounted:function(){var t=this;Er(t.pathItems).then((function(e){if("loaded"!==e){window.Highcharts.setOptions({credits:{enabled:!1},global:{useUTC:!1},lang:{decimalPoint:".",thousandsSep:",",contextButtonTitle:"圖表匯出功能表",downloadJPEG:"下載 JPEG 圖片",downloadPDF:"下載 PDF 文件",downloadPNG:"下載 PNG 文件",downloadSVG:"下載 SVG 文件",downloadXLS:"下載 XLS 文件",openInCloud:"在 Highcharts Cloud 中打開",drillUpText:"返回 {series.name}",invalidDate:"無效的時間",loading:"載入中...",months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],noData:"沒有資料",printChart:"列印圖表",resetZoom:"重置縮放比例",resetZoomTitle:"重置為原始大小",shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],weekdays:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],viewData:"查看資料",rangeSelectorFrom:"開始時間",rangeSelectorTo:"結束時間",rangeSelectorZoom:"範圍",zoomIn:"縮小",zoomOut:"放大"},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y/%m/%d",week:"%Y/%m/%d",month:"%Y/%m",year:"%Y"}},xAxis:{dateTimeLabelFormats:{second:"%Y<br/>%m/%d",minute:"%Y<br/>%m/%d",hour:"%Y<br/>%m/%d",day:"%Y<br/>%m/%d",week:"%Y<br/>%m/%d",month:"%Y<br/>%m/%d",year:"%Y<br/>%m/%d"}},rangeSelector:{enabled:!1},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%Y/%m/%d %H:%M:%S.%L","%Y/%m/%d %H:%M:%S.%L"," ~ %H:%M:%S.%L"],second:["%Y/%m/%d %H:%M:%S","%Y/%m/%d %H:%M:%S"," ~ %H:%M:%S"],minute:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],hour:["%Y/%m/%d %H:%M","%Y/%m/%d %H:%M"," ~ %H:%M"],day:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],week:["%Y/%m/%d","%Y/%m/%d"," ~ %Y/%m/%d"],month:["%Y/%m","%Y/%m"," ~ %Y/%m"],year:["%Y","%Y"," ~ %Y"]}}}}});var n=window.VueHighcharts;n.default&&(n=n.default),Dr().use(n)}t.cmpName="Highcharts"}))},computed:{},methods:{}};var Gr=function(){var t=this.$createElement;return(this._self._c||t)(this.cmpName,{ref:"$self",tag:"component",attrs:{options:this.options}})};Gr._withStripped=!0;return $r({render:Gr,staticRenderFns:[]},(function(t){t&&t("data-v-2fae74c2_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WHighchartsVueDyn.vue"},media:void 0})}),Ur,"data-v-2fae74c2",!1,void 0,Ir,void 0)}));
//# sourceMappingURL=w-highcharts-vue-dyn.umd.js.map