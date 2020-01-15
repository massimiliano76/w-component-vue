/*!
 * w-shell-material v1.3.3
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-shell-material"]=n()}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==e(n)&&n&&n.Object===Object&&n,r="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,o=t||r||Function("return this")(),a=o.Symbol;var i=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},c=Array.isArray,f=Object.prototype,l=f.hasOwnProperty,u=f.toString,d=a?a.toStringTag:void 0;var s=function(e){var n=l.call(e,d),t=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=u.call(e);return r&&(n?e[d]=t:delete e[d]),o},p=Object.prototype.toString;var g=function(e){return p.call(e)},h=a?a.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?s(e):g(e)};var b=function(n){return null!=n&&"object"==e(n)};var y=function(n){return"symbol"==e(n)||b(n)&&"[object Symbol]"==v(n)},m=a?a.prototype:void 0,_=m?m.toString:void 0;var x=function e(n){if("string"==typeof n)return n;if(c(n))return i(n,e)+"";if(y(n))return _?_.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t};var k=function(e){return null==e?"":x(e)};var S=function(e,n,t){var r=-1,o=e.length;n<0&&(n=-n>o?0:o+n),(t=t>o?o:t)<0&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+n];return a};var I=function(e,n,t){var r=e.length;return t=void 0===t?r:t,!n&&t>=r?e:S(e,n,t)},j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var A=function(e){return j.test(e)};var C=function(e){return e.split("")},w="[\\ud800-\\udfff]",T="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",O="\\ud83c[\\udffb-\\udfff]",z="[^\\ud800-\\udfff]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",R="(?:"+T+"|"+O+")"+"?",F="[\\ufe0e\\ufe0f]?"+R+("(?:\\u200d(?:"+[z,E,P].join("|")+")[\\ufe0e\\ufe0f]?"+R+")*"),$="(?:"+[z+T+"?",T,E,P,w].join("|")+")",M=RegExp(O+"(?="+O+")|"+$+F,"g");var B=function(e){return e.match(M)||[]};var U=function(e){return A(e)?B(e):C(e)};var L=function(e){return function(n){n=k(n);var t=A(n)?U(n):void 0,r=t?t[0]:n.charAt(0),o=t?I(t,1).join(""):n.slice(1);return r[e]()+o}}("toUpperCase");var N=function(e){return L(k(e).toLowerCase())};var D=function(e,n,t,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(t=e[++o]);++o<a;)t=n(t,e[o],o,e);return t};var W=function(e){return function(n){return null==e?void 0:e[n]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Z=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,G=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var V=function(e){return(e=k(e))&&e.replace(Z,W).replace(G,"")},Y=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var J=function(e){return e.match(Y)||[]},H=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var X=function(e){return H.test(e)},q="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",K="["+q+"]",Q="\\d+",ee="[\\u2700-\\u27bf]",ne="[a-z\\xdf-\\xf6\\xf8-\\xff]",te="[^\\ud800-\\udfff"+q+Q+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",re="(?:\\ud83c[\\udde6-\\uddff]){2}",oe="[\\ud800-\\udbff][\\udc00-\\udfff]",ae="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ie="(?:"+ne+"|"+te+")",ce="(?:"+ae+"|"+te+")",fe="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",le="[\\ufe0e\\ufe0f]?"+fe+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",re,oe].join("|")+")[\\ufe0e\\ufe0f]?"+fe+")*"),ue="(?:"+[ee,re,oe].join("|")+")"+le,de=RegExp([ae+"?"+ne+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[K,ae,"$"].join("|")+")",ce+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[K,ae+ie,"$"].join("|")+")",ae+"?"+ie+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ae+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Q,ue].join("|"),"g");var se=function(e){return e.match(de)||[]};var pe=function(e,n,t){return e=k(e),void 0===(n=t?void 0:n)?X(e)?se(e):J(e):e.match(n)||[]},ge=RegExp("['’]","g");var he=function(e){return function(n){return D(pe(V(n).replace(ge,"")),e,"")}}((function(e,n,t){return n=n.toLowerCase(),e+(t?N(n):n)}));var ve=function(e,n){return e===n||e!=e&&n!=n};var be=function(n){var t=e(n);return null!=n&&("object"==t||"function"==t)};var ye=function(e){if(!be(e))return!1;var n=v(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var me=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var _e=function(e){return null!=e&&me(e.length)&&!ye(e)},xe=/^(?:0|[1-9]\d*)$/;var ke=function(n,t){var r=e(n);return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&xe.test(n))&&n>-1&&n%1==0&&n<t};var Se=function(n,t,r){if(!be(r))return!1;var o=e(t);return!!("number"==o?_e(r)&&ke(t,r.length):"string"==o&&t in r)&&ve(r[t],n)};var Ie=function(e){return b(e)&&"[object RegExp]"==v(e)};var je=function(e){return function(n){return e(n)}},Ae=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){var r=n&&!n.nodeType&&n,o=r&&e&&!e.nodeType&&e,a=o&&o.exports===r&&t.process,i=function(){try{var e=o&&o.require&&o.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=i})),Ce=Ae&&Ae.isRegExp,we=Ce?je(Ce):Ie;var Te=function(e,n,t){return t&&"number"!=typeof t&&Se(e,n,t)&&(n=t=void 0),(t=void 0===t?4294967295:t>>>0)?(e=k(e))&&("string"==typeof n||null!=n&&!we(n))&&!(n=x(n))&&A(e)?I(U(e),0,t):e.split(n,t):[]},Oe=Object.prototype;var ze=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||Oe)};var Ee=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),Pe=Object.prototype.hasOwnProperty;var Re,Fe=function(e){if(!ze(e))return Ee(e);var n=[];for(var t in Object(e))Pe.call(e,t)&&"constructor"!=t&&n.push(t);return n},$e=o["__core-js_shared__"],Me=(Re=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+Re:"";var Be=function(e){return!!Me&&Me in e},Ue=Function.prototype.toString;var Le=function(e){if(null!=e){try{return Ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ne=/^\[object .+?Constructor\]$/,De=Function.prototype,We=Object.prototype,Ze=De.toString,Ge=We.hasOwnProperty,Ve=RegExp("^"+Ze.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!be(e)||Be(e))&&(ye(e)?Ve:Ne).test(Le(e))};var Je=function(e,n){return null==e?void 0:e[n]};var He=function(e,n){var t=Je(e,n);return Ye(t)?t:void 0},Xe=He(o,"DataView"),qe=He(o,"Map"),Ke=He(o,"Promise"),Qe=He(o,"Set"),en=He(o,"WeakMap"),nn=Le(Xe),tn=Le(qe),rn=Le(Ke),on=Le(Qe),an=Le(en),cn=v;(Xe&&"[object DataView]"!=cn(new Xe(new ArrayBuffer(1)))||qe&&"[object Map]"!=cn(new qe)||Ke&&"[object Promise]"!=cn(Ke.resolve())||Qe&&"[object Set]"!=cn(new Qe)||en&&"[object WeakMap]"!=cn(new en))&&(cn=function(e){var n=v(e),t="[object Object]"==n?e.constructor:void 0,r=t?Le(t):"";if(r)switch(r){case nn:return"[object DataView]";case tn:return"[object Map]";case rn:return"[object Promise]";case on:return"[object Set]";case an:return"[object WeakMap]"}return n});var fn=cn;var ln=function(e){return"string"==typeof e||!c(e)&&b(e)&&"[object String]"==v(e)};var un=function(e){return function(n){return null==n?void 0:n[e]}}("length"),dn="[\\ud800-\\udfff]",sn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",pn="\\ud83c[\\udffb-\\udfff]",gn="[^\\ud800-\\udfff]",hn="(?:\\ud83c[\\udde6-\\uddff]){2}",vn="[\\ud800-\\udbff][\\udc00-\\udfff]",bn="(?:"+sn+"|"+pn+")"+"?",yn="[\\ufe0e\\ufe0f]?"+bn+("(?:\\u200d(?:"+[gn,hn,vn].join("|")+")[\\ufe0e\\ufe0f]?"+bn+")*"),mn="(?:"+[gn+sn+"?",sn,hn,vn,dn].join("|")+")",_n=RegExp(pn+"(?="+pn+")|"+mn+yn,"g");var xn=function(e){for(var n=_n.lastIndex=0;_n.test(e);)++n;return n};var kn=function(e){return A(e)?xn(e):un(e)};var Sn=function(e){if(null==e)return 0;if(_e(e))return ln(e)?kn(e):e.length;var n=fn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Fe(e).length},In=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jn=/^\w*$/;var An=function(n,t){if(c(n))return!1;var r=e(n);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!y(n))||(jn.test(n)||!In.test(n)||null!=t&&n in Object(t))},Cn=He(Object,"create");var wn=function(){this.__data__=Cn?Cn(null):{},this.size=0};var Tn=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},On=Object.prototype.hasOwnProperty;var zn=function(e){var n=this.__data__;if(Cn){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return On.call(n,e)?n[e]:void 0},En=Object.prototype.hasOwnProperty;var Pn=function(e){var n=this.__data__;return Cn?void 0!==n[e]:En.call(n,e)};var Rn=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Cn&&void 0===n?"__lodash_hash_undefined__":n,this};function Fn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Fn.prototype.clear=wn,Fn.prototype.delete=Tn,Fn.prototype.get=zn,Fn.prototype.has=Pn,Fn.prototype.set=Rn;var $n=Fn;var Mn=function(){this.__data__=[],this.size=0};var Bn=function(e,n){for(var t=e.length;t--;)if(ve(e[t][0],n))return t;return-1},Un=Array.prototype.splice;var Ln=function(e){var n=this.__data__,t=Bn(n,e);return!(t<0)&&(t==n.length-1?n.pop():Un.call(n,t,1),--this.size,!0)};var Nn=function(e){var n=this.__data__,t=Bn(n,e);return t<0?void 0:n[t][1]};var Dn=function(e){return Bn(this.__data__,e)>-1};var Wn=function(e,n){var t=this.__data__,r=Bn(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function Zn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Zn.prototype.clear=Mn,Zn.prototype.delete=Ln,Zn.prototype.get=Nn,Zn.prototype.has=Dn,Zn.prototype.set=Wn;var Gn=Zn;var Vn=function(){this.size=0,this.__data__={hash:new $n,map:new(qe||Gn),string:new $n}};var Yn=function(n){var t=e(n);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n};var Jn=function(e,n){var t=e.__data__;return Yn(n)?t["string"==typeof n?"string":"hash"]:t.map};var Hn=function(e){var n=Jn(this,e).delete(e);return this.size-=n?1:0,n};var Xn=function(e){return Jn(this,e).get(e)};var qn=function(e){return Jn(this,e).has(e)};var Kn=function(e,n){var t=Jn(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function Qn(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Qn.prototype.clear=Vn,Qn.prototype.delete=Hn,Qn.prototype.get=Xn,Qn.prototype.has=qn,Qn.prototype.set=Kn;var et=Qn;function nt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function t(){var r=arguments,o=n?n.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(nt.Cache||et),t}nt.Cache=et;var tt=nt;var rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ot=/\\(\\)?/g,at=function(e){var n=tt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(rt,(function(e,t,r,o){n.push(r?o.replace(ot,"$1"):t||e)})),n}));var it=function(e,n){return c(e)?e:An(e,n)?[e]:at(k(e))};var ct=function(e){if("string"==typeof e||y(e))return e;var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var ft=function(e,n){for(var t=0,r=(n=it(n,e)).length;null!=e&&t<r;)e=e[ct(n[t++])];return t&&t==r?e:void 0};var lt=function(e,n,t){var r=null==e?void 0:ft(e,n);return void 0===r?t:r},ut={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}};var dt={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){return this.icon.indexOf("fa-")>=0?this.icon+" fa-fw":this.icon},useSize:function(){var e=this.size;return this.icon.indexOf("fa-")>=0?e-4:e},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}};var st=function(e,n,t,r,o,a,i,c,f,l){"boolean"!=typeof i&&(f=c,c=i,i=!1);var u,d="function"==typeof t?t.options:t;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),r&&(d._scopeId=r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,f(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):n&&(u=i?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(e){n.call(this,c(e))}),u)if(d.functional){var s=d.render;d.render=function(e,n){return u.call(n),s(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,u):[u]}return t},pt="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var gt=document.head||document.getElementsByTagName("head")[0],ht={};var vt=function(e){return function(e,n){return function(e,n){var t=pt?n.media||"default":e,r=ht[t]||(ht[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=n.source;if(n.map&&(o+="\n/*# sourceURL="+n.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),gt.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var a=r.ids.size-1,i=document.createTextNode(o),c=r.element.childNodes;c[a]&&r.element.removeChild(c[a]),c.length?r.element.insertBefore(i,c[a]):r.element.appendChild(i)}}}(e,n)}};const bt=dt;var yt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return""!==e.icon?t("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[t("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1):e._e()};yt._withStripped=!0;const mt={components:{WIcon:st({render:yt,staticRenderFns:[]},(function(e){e&&e("data-v-5ea7e17f_0",{source:"\n.v-icon[data-v-5ea7e17f] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [color=''] 輸入圖標背景顏色字串，預設''\r\n * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})}),bt,"data-v-5ea7e17f",!1,void 0,vt,void 0)},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorFocus:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorFocus:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},focused:{type:Boolean,default:!1}},data:function(){return{focusedTrans:!1}},mounted:function(){},computed:{changeParam:function(){return this.focusedTrans=this.focused,""},useTitleColor:function(){var e={};return e.color=function(e){if("white"===e)return"#fff";if("black"===e)return"#000";if("transparent"===e)return"rgba(0,0,0,0)";var n=Te(e," ");if(2!==Sn(n))return e;var t=n[0].trim();t=he(t);var r=n[1];void 0===r&&(r="base"),r=r.replace("-","").trim();var o=lt(ut,"default.".concat(t,".").concat(r),null);return null===o&&(o=e),o}(this.titleColor),e},usePadding:function(){var e={};return this.small?e.padding="0px":e.padding="3px 6px",e},usePaddingSlot:function(){var e={"padding-top":"0px","padding-bottom":"0px","padding-left":"0px","padding-right":"0px"};return""!==this.leftIcon&&(e["padding-left"]="10px"),""!==this.rightIcon&&(e["padding-right"]="10px"),e}},methods:{clickIcon:function(e){var n=this;!1!==n.editable&&setTimeout((function(){n.$emit("click-"+e)}),1)}}};var _t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"group",style:[e.usePadding,{opacity:e.editable?1:.6}],attrs:{changeParam:e.changeParam}},[e.leftIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.clickIcon("left")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("div",e._g({attrs:{ShellMaterial:"leftIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:e.leftIcon,color:e.focusedTrans?e.leftIconColorFocus:e.leftIconColor}})],1)]}}],null,!1,2950564174)},[e._v(" "),t("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),t("div",{staticStyle:{width:"100%"}},[t("div",{style:[{position:"relative"},e.usePaddingSlot]},[t("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n                "+e._s(e.title)+"\n            ")]),e._v(" "),e._t("default")],2)]),e._v(" "),e.rightIcon?t("div",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.clickIcon("right")}}},[t("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t("div",e._g({attrs:{ShellMaterial:"rightIcon"}},Object.assign({},r)),[t("w-icon",{attrs:{icon:e.rightIcon,color:e.focusedTrans?e.rightIconColorFocus:e.rightIconColor}})],1)]}}],null,!1,999997262)},[e._v(" "),t("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])};_t._withStripped=!0;return st({render:_t,staticRenderFns:[]},(function(e){e&&e("data-v-011fd0a9_0",{source:"\n.group[data-v-011fd0a9] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\src\\components\\WShellMaterial.vue"],names:[],mappings:";AAsOA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA",file:"WShellMaterial.vue",sourcesContent:["<template>\r\n    <div\r\n        :changeParam=\"changeParam\"\r\n        class=\"group\"\r\n        :style=\"[usePadding,{'opacity':editable?1:0.6}]\"\r\n    >\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialLeft }\">\r\n                    <div ShellMaterial=\"leftIcon\" v-on=\"{...ttShellMaterialLeft}\">\r\n                        <w-icon\r\n                            :icon=\"leftIcon\"\r\n                            :color=\"focusedTrans?leftIconColorFocus:leftIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{leftIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n        <div style=\"width:100%;\">\r\n\r\n            <div :style=\"[{'position':'relative'},usePaddingSlot]\">\r\n\r\n                <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                    {{title}}\r\n                </div>\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialRight }\">\r\n                    <div ShellMaterial=\"rightIcon\" v-on=\"{...ttShellMaterialRight}\">\r\n                        <w-icon\r\n                            :icon=\"rightIcon\"\r\n                            :color=\"focusedTrans?rightIconColorFocus:rightIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{rightIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport color2hex from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] 輸入標題字串，預設''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'\r\n * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''\r\n * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''\r\n * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true\r\n * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true\r\n * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorFocus: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        focused: {\r\n            type: Boolean,\r\n            default: false,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focusedTrans: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //focusedTrans\r\n            vo.focusedTrans = vo.focused\r\n\r\n            return ''\r\n        },\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '0px'\r\n            s['padding-right'] = '0px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(() => {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n</style>\r\n"]},media:void 0})}),mt,"data-v-011fd0a9",!1,void 0,vt,void 0)}));
//# sourceMappingURL=w-shell-material.umd.js.map
