!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self)["w-dynamic-scroll"]=t()}(this,function(){"use strict";var n=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n};function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(n,t){return n(t={exports:{}},t.exports),t.exports}var o=r(function(n){var e=function(n){var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(n,t,e,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(n,t,e){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=f(n,t,e);if("normal"===c.type){if(r=e.done?p:v,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=p,e.method="throw",e.arg=c.arg)}}}(n,e,a),i}function f(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var l="suspendedStart",v="suspendedYield",h="executing",p="completed",d={};function y(){}function g(){}function m(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(L([])));_&&_!==r&&o.call(_,a)&&(b=_);var j=m.prototype=y.prototype=Object.create(b);function x(n){["next","throw","return"].forEach(function(t){n[t]=function(n){return this._invoke(t,n)}})}function O(n){var e;this._invoke=function(r,i){function a(){return new Promise(function(e,a){!function e(r,i,a,u){var c=f(n[r],n,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===t(l)&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(n){e("next",n,a,u)},function(n){e("throw",n,a,u)}):Promise.resolve(l).then(function(n){s.value=n,a(s)},function(n){return e("throw",n,a,u)})}u(c.arg)}(r,i,e,a)})}return e=e?e.then(a,a):a()}}function E(n,t){var r=n.iterator[t.method];if(r===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,E(n,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function k(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function P(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function L(n){if(n){var t=n[a];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,i=function t(){for(;++r<n.length;)if(o.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=j.constructor=m,m.constructor=g,m[c]=g.displayName="GeneratorFunction",n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,m):(n.__proto__=m,c in n||(n[c]="GeneratorFunction")),n.prototype=Object.create(j),n},n.awrap=function(n){return{__await:n}},x(O.prototype),O.prototype[u]=function(){return this},n.AsyncIterator=O,n.async=function(t,e,r,o){var i=new O(s(t,e,r,o));return n.isGeneratorFunction(e)?i:i.next().then(function(n){return n.done?n.value:i.next()})},x(j),j[c]="Generator",j[a]=function(){return this},j.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=L,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!n)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(r,o){return u.type="throw",u.arg=n,t.next=r,o&&(t.method="next",t.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:L(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),d}},n}(n.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}});function i(n,t,e,r,o,i,a){try{var u=n[i](a),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,o)}var a=function(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function u(n){i(a,r,o,u,c,"next",n)}function c(n){i(a,r,o,u,c,"throw",n)}u(void 0)})}};var u=function(n,t){for(var e=-1,r=null==n?0:n.length;++e<r&&!1!==t(n[e],e,n););return n};var c=function(n){return function(t,e,r){for(var o=-1,i=Object(t),a=r(t),u=a.length;u--;){var c=a[n?u:++o];if(!1===e(i[c],c,i))break}return t}}();var s=function(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r},f="object"==t(e)&&e&&e.Object===Object&&e,l="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,v=f||l||Function("return this")(),h=v.Symbol,p=Object.prototype,d=p.hasOwnProperty,y=p.toString,g=h?h.toStringTag:void 0;var m=function(n){var t=d.call(n,g),e=n[g];try{n[g]=void 0;var r=!0}catch(n){}var o=y.call(n);return r&&(t?n[g]=e:delete n[g]),o},b=Object.prototype.toString;var w=function(n){return b.call(n)},_="[object Null]",j="[object Undefined]",x=h?h.toStringTag:void 0;var O=function(n){return null==n?void 0===n?j:_:x&&x in Object(n)?m(n):w(n)};var E=function(n){return null!=n&&"object"==t(n)},S="[object Arguments]";var k=function(n){return E(n)&&O(n)==S},P=Object.prototype,L=P.hasOwnProperty,T=P.propertyIsEnumerable,H=k(function(){return arguments}())?k:function(n){return E(n)&&L.call(n,"callee")&&!T.call(n,"callee")},A=Array.isArray;var I=function(){return!1},B=r(function(n,t){var e=t&&!t.nodeType&&t,r=e&&n&&!n.nodeType&&n,o=r&&r.exports===e?v.Buffer:void 0,i=(o?o.isBuffer:void 0)||I;n.exports=i}),z=9007199254740991,M=/^(?:0|[1-9]\d*)$/;var N=function(n,e){var r=t(n);return!!(e=null==e?z:e)&&("number"==r||"symbol"!=r&&M.test(n))&&n>-1&&n%1==0&&n<e},R=9007199254740991;var D=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=R},$={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$["[object Arguments]"]=$["[object Array]"]=$["[object ArrayBuffer]"]=$["[object Boolean]"]=$["[object DataView]"]=$["[object Date]"]=$["[object Error]"]=$["[object Function]"]=$["[object Map]"]=$["[object Number]"]=$["[object Object]"]=$["[object RegExp]"]=$["[object Set]"]=$["[object String]"]=$["[object WeakMap]"]=!1;var C=function(n){return E(n)&&D(n.length)&&!!$[O(n)]};var F=function(n){return function(t){return n(t)}},Y=r(function(n,t){var e=t&&!t.nodeType&&t,r=e&&n&&!n.nodeType&&n,o=r&&r.exports===e&&f.process,i=function(){try{var n=r&&r.require&&r.require("util").types;return n||o&&o.binding&&o.binding("util")}catch(n){}}();n.exports=i}),U=Y&&Y.isTypedArray,W=U?F(U):C,G=Object.prototype.hasOwnProperty;var V=function(n,t){var e=A(n),r=!e&&H(n),o=!e&&!r&&B(n),i=!e&&!r&&!o&&W(n),a=e||r||o||i,u=a?s(n.length,String):[],c=u.length;for(var f in n)!t&&!G.call(n,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||N(f,c))||u.push(f);return u},q=Object.prototype;var X=function(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||q)};var J=function(n,t){return function(e){return n(t(e))}}(Object.keys,Object),K=Object.prototype.hasOwnProperty;var Q=function(n){if(!X(n))return J(n);var t=[];for(var e in Object(n))K.call(n,e)&&"constructor"!=e&&t.push(e);return t};var Z=function(n){var e=t(n);return null!=n&&("object"==e||"function"==e)},nn="[object AsyncFunction]",tn="[object Function]",en="[object GeneratorFunction]",rn="[object Proxy]";var on=function(n){if(!Z(n))return!1;var t=O(n);return t==tn||t==en||t==nn||t==rn};var an=function(n){return null!=n&&D(n.length)&&!on(n)};var un=function(n){return an(n)?V(n):Q(n)};var cn=function(n,t){return function(e,r){if(null==e)return e;if(!an(e))return n(e,r);for(var o=e.length,i=t?o:-1,a=Object(e);(t?i--:++i<o)&&!1!==r(a[i],i,a););return e}}(function(n,t){return n&&c(n,t,un)});var sn=function(n){return n};var fn=function(n){return"function"==typeof n?n:sn};var ln=function(n,t){return(A(n)?u:cn)(n,fn(t))};var vn=function(n,t){for(var e=-1,r=null==n?0:n.length,o=Array(r);++e<r;)o[e]=t(n[e],e,n);return o};var hn=function(){this.__data__=[],this.size=0};var pn=function(n,t){return n===t||n!=n&&t!=t};var dn=function(n,t){for(var e=n.length;e--;)if(pn(n[e][0],t))return e;return-1},yn=Array.prototype.splice;var gn=function(n){var t=this.__data__,e=dn(t,n);return!(e<0)&&(e==t.length-1?t.pop():yn.call(t,e,1),--this.size,!0)};var mn=function(n){var t=this.__data__,e=dn(t,n);return e<0?void 0:t[e][1]};var bn=function(n){return dn(this.__data__,n)>-1};var wn=function(n,t){var e=this.__data__,r=dn(e,n);return r<0?(++this.size,e.push([n,t])):e[r][1]=t,this};function _n(n){var t=-1,e=null==n?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}_n.prototype.clear=hn,_n.prototype.delete=gn,_n.prototype.get=mn,_n.prototype.has=bn,_n.prototype.set=wn;var jn=_n;var xn=function(){this.__data__=new jn,this.size=0};var On=function(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e};var En=function(n){return this.__data__.get(n)};var Sn,kn=function(n){return this.__data__.has(n)},Pn=v["__core-js_shared__"],Ln=(Sn=/[^.]+$/.exec(Pn&&Pn.keys&&Pn.keys.IE_PROTO||""))?"Symbol(src)_1."+Sn:"";var Tn=function(n){return!!Ln&&Ln in n},Hn=Function.prototype.toString;var An=function(n){if(null!=n){try{return Hn.call(n)}catch(n){}try{return n+""}catch(n){}}return""},In=/^\[object .+?Constructor\]$/,Bn=Function.prototype,zn=Object.prototype,Mn=Bn.toString,Nn=zn.hasOwnProperty,Rn=RegExp("^"+Mn.call(Nn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Dn=function(n){return!(!Z(n)||Tn(n))&&(on(n)?Rn:In).test(An(n))};var $n=function(n,t){return null==n?void 0:n[t]};var Cn=function(n,t){var e=$n(n,t);return Dn(e)?e:void 0},Fn=Cn(v,"Map"),Yn=Cn(Object,"create");var Un=function(){this.__data__=Yn?Yn(null):{},this.size=0};var Wn=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},Gn="__lodash_hash_undefined__",Vn=Object.prototype.hasOwnProperty;var qn=function(n){var t=this.__data__;if(Yn){var e=t[n];return e===Gn?void 0:e}return Vn.call(t,n)?t[n]:void 0},Xn=Object.prototype.hasOwnProperty;var Jn=function(n){var t=this.__data__;return Yn?void 0!==t[n]:Xn.call(t,n)},Kn="__lodash_hash_undefined__";var Qn=function(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=Yn&&void 0===t?Kn:t,this};function Zn(n){var t=-1,e=null==n?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}Zn.prototype.clear=Un,Zn.prototype.delete=Wn,Zn.prototype.get=qn,Zn.prototype.has=Jn,Zn.prototype.set=Qn;var nt=Zn;var tt=function(){this.size=0,this.__data__={hash:new nt,map:new(Fn||jn),string:new nt}};var et=function(n){var e=t(n);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};var rt=function(n,t){var e=n.__data__;return et(t)?e["string"==typeof t?"string":"hash"]:e.map};var ot=function(n){var t=rt(this,n).delete(n);return this.size-=t?1:0,t};var it=function(n){return rt(this,n).get(n)};var at=function(n){return rt(this,n).has(n)};var ut=function(n,t){var e=rt(this,n),r=e.size;return e.set(n,t),this.size+=e.size==r?0:1,this};function ct(n){var t=-1,e=null==n?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}ct.prototype.clear=tt,ct.prototype.delete=ot,ct.prototype.get=it,ct.prototype.has=at,ct.prototype.set=ut;var st=ct,ft=200;var lt=function(n,t){var e=this.__data__;if(e instanceof jn){var r=e.__data__;if(!Fn||r.length<ft-1)return r.push([n,t]),this.size=++e.size,this;e=this.__data__=new st(r)}return e.set(n,t),this.size=e.size,this};function vt(n){var t=this.__data__=new jn(n);this.size=t.size}vt.prototype.clear=xn,vt.prototype.delete=On,vt.prototype.get=En,vt.prototype.has=kn,vt.prototype.set=lt;var ht=vt,pt="__lodash_hash_undefined__";var dt=function(n){return this.__data__.set(n,pt),this};var yt=function(n){return this.__data__.has(n)};function gt(n){var t=-1,e=null==n?0:n.length;for(this.__data__=new st;++t<e;)this.add(n[t])}gt.prototype.add=gt.prototype.push=dt,gt.prototype.has=yt;var mt=gt;var bt=function(n,t){for(var e=-1,r=null==n?0:n.length;++e<r;)if(t(n[e],e,n))return!0;return!1};var wt=function(n,t){return n.has(t)},_t=1,jt=2;var xt=function(n,t,e,r,o,i){var a=e&_t,u=n.length,c=t.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(n);if(s&&i.get(t))return s==t;var f=-1,l=!0,v=e&jt?new mt:void 0;for(i.set(n,t),i.set(t,n);++f<u;){var h=n[f],p=t[f];if(r)var d=a?r(p,h,f,t,n,i):r(h,p,f,n,t,i);if(void 0!==d){if(d)continue;l=!1;break}if(v){if(!bt(t,function(n,t){if(!wt(v,t)&&(h===n||o(h,n,e,r,i)))return v.push(t)})){l=!1;break}}else if(h!==p&&!o(h,p,e,r,i)){l=!1;break}}return i.delete(n),i.delete(t),l},Ot=v.Uint8Array;var Et=function(n){var t=-1,e=Array(n.size);return n.forEach(function(n,r){e[++t]=[r,n]}),e};var St=function(n){var t=-1,e=Array(n.size);return n.forEach(function(n){e[++t]=n}),e},kt=1,Pt=2,Lt="[object Boolean]",Tt="[object Date]",Ht="[object Error]",At="[object Map]",It="[object Number]",Bt="[object RegExp]",zt="[object Set]",Mt="[object String]",Nt="[object Symbol]",Rt="[object ArrayBuffer]",Dt="[object DataView]",$t=h?h.prototype:void 0,Ct=$t?$t.valueOf:void 0;var Ft=function(n,t,e,r,o,i,a){switch(e){case Dt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case Rt:return!(n.byteLength!=t.byteLength||!i(new Ot(n),new Ot(t)));case Lt:case Tt:case It:return pn(+n,+t);case Ht:return n.name==t.name&&n.message==t.message;case Bt:case Mt:return n==t+"";case At:var u=Et;case zt:var c=r&kt;if(u||(u=St),n.size!=t.size&&!c)return!1;var s=a.get(n);if(s)return s==t;r|=Pt,a.set(n,t);var f=xt(u(n),u(t),r,o,i,a);return a.delete(n),f;case Nt:if(Ct)return Ct.call(n)==Ct.call(t)}return!1};var Yt=function(n,t){for(var e=-1,r=t.length,o=n.length;++e<r;)n[o+e]=t[e];return n};var Ut=function(n,t,e){var r=t(n);return A(n)?r:Yt(r,e(n))};var Wt=function(n,t){for(var e=-1,r=null==n?0:n.length,o=0,i=[];++e<r;){var a=n[e];t(a,e,n)&&(i[o++]=a)}return i};var Gt=function(){return[]},Vt=Object.prototype.propertyIsEnumerable,qt=Object.getOwnPropertySymbols,Xt=qt?function(n){return null==n?[]:(n=Object(n),Wt(qt(n),function(t){return Vt.call(n,t)}))}:Gt;var Jt=function(n){return Ut(n,un,Xt)},Kt=1,Qt=Object.prototype.hasOwnProperty;var Zt=function(n,t,e,r,o,i){var a=e&Kt,u=Jt(n),c=u.length;if(c!=Jt(t).length&&!a)return!1;for(var s=c;s--;){var f=u[s];if(!(a?f in t:Qt.call(t,f)))return!1}var l=i.get(n);if(l&&i.get(t))return l==t;var v=!0;i.set(n,t),i.set(t,n);for(var h=a;++s<c;){var p=n[f=u[s]],d=t[f];if(r)var y=a?r(d,p,f,t,n,i):r(p,d,f,n,t,i);if(!(void 0===y?p===d||o(p,d,e,r,i):y)){v=!1;break}h||(h="constructor"==f)}if(v&&!h){var g=n.constructor,m=t.constructor;g!=m&&"constructor"in n&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof m&&m instanceof m)&&(v=!1)}return i.delete(n),i.delete(t),v},ne=Cn(v,"DataView"),te=Cn(v,"Promise"),ee=Cn(v,"Set"),re=Cn(v,"WeakMap"),oe=An(ne),ie=An(Fn),ae=An(te),ue=An(ee),ce=An(re),se=O;(ne&&"[object DataView]"!=se(new ne(new ArrayBuffer(1)))||Fn&&"[object Map]"!=se(new Fn)||te&&"[object Promise]"!=se(te.resolve())||ee&&"[object Set]"!=se(new ee)||re&&"[object WeakMap]"!=se(new re))&&(se=function(n){var t=O(n),e="[object Object]"==t?n.constructor:void 0,r=e?An(e):"";if(r)switch(r){case oe:return"[object DataView]";case ie:return"[object Map]";case ae:return"[object Promise]";case ue:return"[object Set]";case ce:return"[object WeakMap]"}return t});var fe=se,le=1,ve="[object Arguments]",he="[object Array]",pe="[object Object]",de=Object.prototype.hasOwnProperty;var ye=function(n,t,e,r,o,i){var a=A(n),u=A(t),c=a?he:fe(n),s=u?he:fe(t),f=(c=c==ve?pe:c)==pe,l=(s=s==ve?pe:s)==pe,v=c==s;if(v&&B(n)){if(!B(t))return!1;a=!0,f=!1}if(v&&!f)return i||(i=new ht),a||W(n)?xt(n,t,e,r,o,i):Ft(n,t,c,e,r,o,i);if(!(e&le)){var h=f&&de.call(n,"__wrapped__"),p=l&&de.call(t,"__wrapped__");if(h||p){var d=h?n.value():n,y=p?t.value():t;return i||(i=new ht),o(d,y,e,r,i)}}return!!v&&(i||(i=new ht),Zt(n,t,e,r,o,i))};var ge=function n(t,e,r,o,i){return t===e||(null==t||null==e||!E(t)&&!E(e)?t!=t&&e!=e:ye(t,e,r,o,n,i))},me=1,be=2;var we=function(n,t,e,r){var o=e.length,i=o,a=!r;if(null==n)return!i;for(n=Object(n);o--;){var u=e[o];if(a&&u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++o<i;){var c=(u=e[o])[0],s=n[c],f=u[1];if(a&&u[2]){if(void 0===s&&!(c in n))return!1}else{var l=new ht;if(r)var v=r(s,f,c,n,t,l);if(!(void 0===v?ge(f,s,me|be,r,l):v))return!1}}return!0};var _e=function(n){return n==n&&!Z(n)};var je=function(n){for(var t=un(n),e=t.length;e--;){var r=t[e],o=n[r];t[e]=[r,o,_e(o)]}return t};var xe=function(n,t){return function(e){return null!=e&&(e[n]===t&&(void 0!==t||n in Object(e)))}};var Oe=function(n){var t=je(n);return 1==t.length&&t[0][2]?xe(t[0][0],t[0][1]):function(e){return e===n||we(e,n,t)}},Ee="[object Symbol]";var Se=function(n){return"symbol"==t(n)||E(n)&&O(n)==Ee},ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pe=/^\w*$/;var Le=function(n,e){if(A(n))return!1;var r=t(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Se(n))||(Pe.test(n)||!ke.test(n)||null!=e&&n in Object(e))},Te="Expected a function";function He(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new TypeError(Te);var e=function e(){var r=arguments,o=t?t.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var a=n.apply(this,r);return e.cache=i.set(o,a)||i,a};return e.cache=new(He.Cache||st),e}He.Cache=st;var Ae=He,Ie=500;var Be=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ze=/\\(\\)?/g,Me=function(n){var t=Ae(n,function(n){return e.size===Ie&&e.clear(),n}),e=t.cache;return t}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(Be,function(n,e,r,o){t.push(r?o.replace(ze,"$1"):e||n)}),t}),Ne=1/0,Re=h?h.prototype:void 0,De=Re?Re.toString:void 0;var $e=function n(t){if("string"==typeof t)return t;if(A(t))return vn(t,n)+"";if(Se(t))return De?De.call(t):"";var e=t+"";return"0"==e&&1/t==-Ne?"-0":e};var Ce=function(n){return null==n?"":$e(n)};var Fe=function(n,t){return A(n)?n:Le(n,t)?[n]:Me(Ce(n))},Ye=1/0;var Ue=function(n){if("string"==typeof n||Se(n))return n;var t=n+"";return"0"==t&&1/n==-Ye?"-0":t};var We=function(n,t){for(var e=0,r=(t=Fe(t,n)).length;null!=n&&e<r;)n=n[Ue(t[e++])];return e&&e==r?n:void 0};var Ge=function(n,t,e){var r=null==n?void 0:We(n,t);return void 0===r?e:r};var Ve=function(n,t){return null!=n&&t in Object(n)};var qe=function(n,t,e){for(var r=-1,o=(t=Fe(t,n)).length,i=!1;++r<o;){var a=Ue(t[r]);if(!(i=null!=n&&e(n,a)))break;n=n[a]}return i||++r!=o?i:!!(o=null==n?0:n.length)&&D(o)&&N(a,o)&&(A(n)||H(n))};var Xe=function(n,t){return null!=n&&qe(n,t,Ve)},Je=1,Ke=2;var Qe=function(n,t){return Le(n)&&_e(t)?xe(Ue(n),t):function(e){var r=Ge(e,n);return void 0===r&&r===t?Xe(e,n):ge(t,r,Je|Ke)}};var Ze=function(n){return function(t){return null==t?void 0:t[n]}};var nr=function(n){return function(t){return We(t,n)}};var tr=function(n){return Le(n)?Ze(Ue(n)):nr(n)};var er=function(n){return"function"==typeof n?n:null==n?sn:"object"==t(n)?A(n)?Qe(n[0],n[1]):Oe(n):tr(n)};var rr=function(n,t){var e=-1,r=an(n)?Array(n.length):[];return cn(n,function(n,o,i){r[++e]=t(n,o,i)}),r};var or=function(n,t){return(A(n)?vn:rr)(n,er(t))},ir="[object String]";var ar=function(n){return"string"==typeof n||!A(n)&&E(n)&&O(n)==ir},ur=Ze("length"),cr=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var sr=function(n){return cr.test(n)},fr="[\\ud800-\\udfff]",lr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",vr="\\ud83c[\\udffb-\\udfff]",hr="[^\\ud800-\\udfff]",pr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",yr="(?:"+lr+"|"+vr+")"+"?",gr="[\\ufe0e\\ufe0f]?"+yr+("(?:\\u200d(?:"+[hr,pr,dr].join("|")+")[\\ufe0e\\ufe0f]?"+yr+")*"),mr="(?:"+[hr+lr+"?",lr,pr,dr,fr].join("|")+")",br=RegExp(vr+"(?="+vr+")|"+mr+gr,"g");var wr=function(n){for(var t=br.lastIndex=0;br.test(n);)++t;return t};var _r=function(n){return sr(n)?wr(n):ur(n)},jr="[object Map]",xr="[object Set]";var Or=function(n){if(null==n)return 0;if(an(n))return ar(n)?_r(n):n.length;var t=fe(n);return t==jr||t==xr?n.size:Q(n).length},Er=NaN,Sr=/^\s+|\s+$/g,kr=/^[-+]0x[0-9a-f]+$/i,Pr=/^0b[01]+$/i,Lr=/^0o[0-7]+$/i,Tr=parseInt;var Hr=function(n){if("number"==typeof n)return n;if(Se(n))return Er;if(Z(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=Z(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Sr,"");var e=Pr.test(n);return e||Lr.test(n)?Tr(n.slice(2),e?2:8):kr.test(n)?Er:+n},Ar=1/0,Ir=17976931348623157e292;var Br=function(n){return n?(n=Hr(n))===Ar||n===-Ar?(n<0?-1:1)*Ir:n==n?n:0:0===n?n:0};var zr=function(n){var t=Br(n),e=t%1;return t==t?e?t-e:t:0},Mr=v.isFinite,Nr=Math.min;var Rr=function(n){var t=Math[n];return function(n,e){if(n=Hr(n),(e=null==e?0:Nr(zr(e),292))&&Mr(n)){var r=(Ce(n)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+e));return+((r=(Ce(o)+"e").split("e"))[0]+"e"+(+r[1]-e))}return t(n)}}("round");function Dr(n){return!(!function(n){return"[object String]"===Object.prototype.toString.call(n)}(n)||""===n)}function $r(n){var t=!1;return Dr(n)?t=!isNaN(Number(n)):function(n){return"[object Number]"===Object.prototype.toString.call(n)}(n)&&(t=!0),t}function Cr(n){return $r(n)?Br(n):0}function Fr(n){if(!$r(n))return 0;n=Cr(n);var t=Rr(n);return"0"===String(t)?0:t}var Yr=function(n){return"number"==typeof n&&n==zr(n)};function Ur(n){return!!function(n){return!!$r(n)&&(n=Cr(n),Yr(n))}(n)&&Fr(n)>0}function Wr(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],o=e.length;if(Ur(t))for(n=0;n<t;n++)r[n]=e[0|Math.random()*o];else{if("rfc4122"!==t)return"";var i;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",n=0;n<36;n++)r[n]||(i=0|16*Math.random(),r[n]=e[19===n?3&i|8:i])}return r.join("")}function Gr(){var n,t,e=new Promise(function(){n=arguments[0],t=arguments[1]});return e.resolve=n,e.reject=t,e}function Vr(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;$r(n)||(n=10);var t=Gr();return setTimeout(function(){t.resolve()},n),t}var qr=function(n,t){var e=[];return cn(n,function(n,r,o){t(n,r,o)&&e.push(n)}),e};var Xr=function(n,t){return(A(n)?Wt:qr)(n,er(t))};var Jr=function(n,t,e){for(var r=-1,o=n.length;++r<o;){var i=n[r],a=t(i);if(null!=a&&(void 0===u?a==a&&!Se(a):e(a,u)))var u=a,c=i}return c};var Kr=function(n,t){return n>t};var Qr=function(n,t){return n&&n.length?Jr(n,er(t),Kr):void 0};function Zr(n,t){for(var e=Or(n),r=0,o=t(r),i=e-1,a=t(i),u=!0,c=null;u;){var s=Math.floor((i+r)/2),f=t(s);if(o<0&&f<0&&a<0){c=null,u=!1;break}if(o>0&&f>0&&a>0){c=null,u=!1;break}if(0===o){c=r,u=!1;break}if(0===f){c=s,u=!1;break}if(0===a){c=i,u=!1;break}if(s===r||s===i){var l=[{i:r,v:o},{i:s,v:f},{i:i,v:a}];l=Xr(l,function(n){return n.v<=0}),c=Qr(l,"v").i,u=!1;break}o*f>0?(r=s,o=f):(i=s,a=f)}return c}var no={};var to={props:{viewHeight:{type:Number,default:400},contentHeight:{type:Number,default:1e4},scrollDelta:{type:Number,default:100},barSizeMin:{type:Number,default:50},barColor:{type:String,default:"#bbb"},barBackgroundColor:{type:String,default:"rgba(0,0,0,0)"},ratio:{type:Number,default:0}},data:function(){return{mmkey:null,ratioTrans:0,barPressY:null,barPressing:!1,barOpacity:.5}},mounted:function(){var n=this;n.mmkey=Wr();var t=n.$refs.divPanel;t.addEventListener("wheel",function(t){var e=t.deltaY/Math.abs(t.deltaY);n.scrollPanel(n.mmkey,e),window.event?t.cancelBubble=!0:t.stopPropagation(),t.preventDefault()}),t.addEventListener("touchstart",function(t){n.pressBar(-t.touches[0].clientY/5)}),t.addEventListener("touchmove",function(t){n.dragBar(n.mmkey,-t.touches[0].clientY/5),t.stopPropagation(),t.preventDefault()}),t.addEventListener("touchend",function(t){n.freedBar(n.mmkey)}),window.addEventListener("mousedown",function(t){n.pressWin(n.mmkey,t.clientY)}),window.addEventListener("mousemove",function(t){n.dragBar(n.mmkey,t.clientY)}),window.addEventListener("mouseup",function(t){n.freedBar(n.mmkey)})},beforeDestroy:function(){var n=this,t=n.$refs.divPanel;t.removeEventListener("wheel",n.mouseWheel),t.removeEventListener("touchstart",n.pressBar),t.removeEventListener("touchmove",n.dragBar),t.removeEventListener("touchend",n.freedBar),window.removeEventListener("mousedown",n.pressWin),window.removeEventListener("mousemove",n.dragBar),window.removeEventListener("mouseup",n.freedBar)},computed:{changeRatio:function(){var n=this.ratio;return n=Math.max(n,0),n=Math.min(n,1),this.ratioTrans=n,""},barSize:function(){var n=this.viewHeight/this.contentHeight,t=Math.max(n*this.viewHeight,this.barSizeMin);return t},barLoc:function(){return this.ratioTrans*this.viewHeightEff},contentHeightEff:function(){var n=this.contentHeight-this.viewHeight;return n=Math.max(n,0)},viewHeightEff:function(){var n=this.viewHeight-this.barSize-4;return n=Math.max(n,0)},viewTop:function(){return this.ratioTrans*this.contentHeightEff},viewBottom:function(){return this.viewTop+this.viewHeight}},methods:{pressWin:function(n,t){this.mmkey===n&&(this.barPressY=t)},pressBar:function(n){this.barPressing=!0,n&&(this.barPressY=n)},dragBar:function(n,t){var e=this;if(e.mmkey===n&&e.barPressing){var r=(t-e.barPressY)/e.viewHeightEff;e.scrollByDeltaRatio(r),e.barPressY=t}},freedBar:function(n){this.mmkey===n&&this.barPressing&&(this.barPressing=!1,this.triggerEvent("freedBar"))},triggerEvent:function(n){var t=this;setTimeout(function(){var e={from:n,r:t.ratioTrans,t:t.viewTop,b:t.viewBottom,ch:t.contentHeight};t.$emit("update:ratio",t.ratioTrans),t.$emit("change",e),n&&t.$emit(n,e)},1)},scrollByDeltaRatio:function(n){var t=this,e=t.ratioTrans;e>=0&&e<=1&&(e+=n),e=Math.max(e,0),e=Math.min(e,1),0===t.contentHeightEff&&(e=0),t.ratioTrans!==e&&(t.ratioTrans=e,t.triggerEvent())},scrollByDelta:function(n){var t=n/this.contentHeight;this.scrollByDeltaRatio(t)},scrollPanel:function(n,t){if(this.mmkey===n){var e=t*this.scrollDelta;this.scrollByDelta(e)}}}};var eo,ro=function(n,t,e,r,o,i,a,u,c,s){"boolean"!=typeof a&&(c=u,u=a,a=!1);var f,l="function"==typeof e?e.options:e;if(n&&n.render&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),t&&t.call(this,c(n)),n&&n._registeredComponents&&n._registeredComponents.add(i)},l._ssrRegister=f):t&&(f=a?function(){t.call(this,s(this.$root.$options.shadowRoot))}:function(n){t.call(this,u(n))}),f)if(l.functional){var v=l.render;l.render=function(n,t){return f.call(t),v(n,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return e},oo="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var io={};var ao=function(n){return function(n,t){return function(n,t){var e=oo?t.media||"default":n,r=io[e]||(io[e]={ids:new Set,styles:[]});if(!r.ids.has(n)){r.ids.add(n);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===eo&&(eo=document.head||document.getElementsByTagName("head")[0]),eo.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(n,t)}};const uo=to;var co=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{style:"position:relative; overflow:hidden; height:"+n.viewHeight+";",attrs:{changeRatio:n.changeRatio},on:{mouseenter:function(t){n.barOpacity=1},mouseleave:function(t){n.barOpacity=.5}}},[e("div",{style:"height:"+(n.viewHeight+1)+"px;"}),n._v(" "),n.contentHeightEff>0?e("div",{staticStyle:{position:"absolute",top:"0",right:"0px",height:"100%","z-index":"1"}},[e("div",{style:"position:relative; width:10px; height:100%; background-color:"+n.barBackgroundColor+"; padding:2px;"},[e("div",{style:"width:100%; height:"+n.barSize+"px; background-color:"+n.barColor+"; border-radius:15px; user-select:none; transform:translateY("+n.barLoc+"px); cursor:pointer; opacity:"+n.barOpacity+"; transition:opacity 0.5s;",on:{mousedown:n.pressBar,dragstart:function(n){return n.stopPropagation(),n.preventDefault(),!1},dragover:function(n){return n.stopPropagation(),n.preventDefault(),!1},drop:function(n){return n.stopPropagation(),n.preventDefault(),!1}}})])]):n._e(),n._v(" "),e("div",{ref:"divPanel",style:"position:absolute; top:0px; width:calc(100% + 18px); overflow-y:auto; overflow-x:hidden; height:"+n.viewHeight+"px;"},[n._t("default")],2)])};co._withStripped=!0;var so=ro({render:co,staticRenderFns:[]},function(n){n&&n("data-v-fe9974ca_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WScrollPanel.vue"},media:void 0})},uo,"data-v-fe9974ca",!1,void 0,ao,void 0);function fo(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function lo(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?fo(r,!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):fo(r).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var vo,ho,po={set:function(n,t){no[n]=t},get:function(n){return no[n]},remove:function(n){delete no[n]}};const yo={components:{WScrollPanel:so},props:{rows:{type:Array,default:function(){return[]}},viewHeight:{type:Number,default:400},itemMinHeight:{type:Number,default:24},itemsPreload:{type:Number,default:40}},data:function(){return{mmkey:null,changeHeight:!0,scrollRatio:0,scrollInfor:null,scrollToEnd:!1,itemsHeight:0,useItems:[]}},beforeDestroy:function(){po.remove(this.mmkey)},mounted:function(){this.refresh("mounted")},watch:{rows:{immediate:!0,deep:!0,handler:function(n){0!==Or(n)&&this.changeRows(n)}}},computed:{},methods:{changeRows:function(n){var t,e=this;if(t=n,"[object Array]"!==Object.prototype.toString.call(t)){return"rows is not array"}if(0===Or(n)){return"rows is empty"}null===e.mmkey?e.mmkey=Wr():po.remove(e.mmkey);var r=or(n,function(n,t){return{index:t,height:e.itemMinHeight,y:t*e.itemMinHeight,row:n}});po.set(e.mmkey,r),e.refresh("changeRows")},refresh:(ho=a(o.mark(function n(t){var e,r,i,u,c,s,f,l,v;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(f=function(){return(f=a(o.mark(function n(){var t;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u();case 2:t=n.sent;case 3:if(!t){n.next=9;break}return n.next=6,u();case 6:t=n.sent,n.next=3;break;case 9:case"end":return n.stop()}},n)}))).apply(this,arguments)},s=function(){return f.apply(this,arguments)},c=function(){return(c=a(o.mark(function n(){var t,a;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=Gr(),!((r+=1)>i)){n.next=5;break}return t.resolve(!1),n.abrupt("return",t);case 5:return e.genUseItems(),n.next=8,Vr(1);case 8:return a=e.updateItems(),t.resolve(a),n.abrupt("return",t);case 11:case"end":return n.stop()}},n)}))).apply(this,arguments)},u=function(){return c.apply(this,arguments)},null!==(e=this).mmkey){n.next=7;break}return n.abrupt("return");case 7:return r=0,i=3,n.next=11,s();case 11:for(e.genUseItems(),l=0;l<Or(e.useItems);l++)(v=e.useItems[l]).delayShow||(v.delayShow=!0);case 13:case"end":return n.stop()}},n,this)})),function(n){return ho.apply(this,arguments)}),genUseItems:function(){var n=this;if(null!==n.mmkey){null===n.scrollInfor&&(n.scrollInfor={r:0,t:0,b:n.viewHeight,ch:n.itemsHeight});var t=po.get(n.mmkey),e=Or(t),r=Zr(t,function(e){var r=t[e];return n.scrollInfor.t-(r.y+r.height)});null===r&&(r=0);var o=Math.max(r-n.itemsPreload,0),i=Zr(t,function(e){var r=t[e];return n.scrollInfor.b-r.y});null===i&&(i=e-1);var a=Math.min(i+n.itemsPreload,e-1),u=!1,c=Or(n.useItems);if(c>0){var s=n.useItems[0].index===o,f=n.useItems[c-1].index===i;u=s&&f}for(var l=[],v=o;v<=a;v++){var h=lo({},t[v]);h.screenY=h.y-n.scrollInfor.t,h.nowShow=v>=r,h.delayShow=u,l.push(h)}n.useItems=l}},updateItems:function(){var n=this;if(null===n.mmkey)return!1;var t=po.get(n.mmkey),e=Or(t);ln(n.$refs.wdsDiv,function(r){if(r.getAttribute&&r.getAttribute("nowShow")){var o=Fr(r.getAttribute("index"));if(o>=0&&o<e){var i=r.clientHeight;t[o].height!==i&&(t[o].height=i,n.changeHeight=!0)}}});var r=n.changeHeight;if(r){for(var o=0,i=0;i<e;i++){var a=t[i];a.y!==o&&(a.y=o),o+=a.height}n.itemsHeight!==o&&(n.itemsHeight=o),n.changeHeight=!1}return r},scrollItems:(vo=a(o.mark(function n(t){var e;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==(e=this).mmkey){n.next=3;break}return n.abrupt("return");case 3:if(e.scrollInfor=t,e.refresh("scrollItems"),e.scrollToEnd||1!==t.r){n.next=13;break}return e.scrollToEnd=!0,n.next=9,Vr(100);case 9:return e.$refs.wsp.triggerEvent(),n.next=12,Vr(100);case 12:e.scrollToEnd=!1;case 13:case"end":return n.stop()}},n,this)})),function(n){return vo.apply(this,arguments)})}};var go=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("WScrollPanel",{ref:"wsp",attrs:{ratio:n.scrollRatio,viewHeight:n.viewHeight,contentHeight:n.itemsHeight},on:{"update:ratio":function(t){n.scrollRatio=t},change:n.scrollItems}},[n._l(n.useItems,function(t,r){return[e("div",{key:r,ref:"wdsDiv",refInFor:!0,style:"position:absolute; top:"+t.screenY+"px; width:100%; opacity:"+(t.nowShow&&t.delayShow?1:.001)+"; "+(t.delayShow?"transition:opacity 0.1s":""),attrs:{index:t.index,nowShow:t.nowShow}},[n._t("block",null,{row:t.row,irow:t.index})],2)]})],2)};go._withStripped=!0;return ro({render:go,staticRenderFns:[]},function(n){n&&n("data-v-73381db7_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WDynamicScroll.vue"},media:void 0})},yo,"data-v-73381db7",!1,void 0,ao,void 0)});
//# sourceMappingURL=w-dynamic-scroll.umd.js.map