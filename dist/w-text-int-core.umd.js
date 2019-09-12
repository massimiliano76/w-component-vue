/*!
 * w-text-int-core v1.1.20
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e["w-text-int-core"]=t())})(this,function(){'use strict';function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":D&&D in Object(e)?B(e):F(e)}function n(t){return null!=t&&"object"==e(t)}function a(t){return"symbol"==e(t)||Z(t)&&G(t)=="[object Symbol]"}function o(e){if("string"==typeof e)return e;if(E(e))return O(e,o)+"";if(Y(e))return K?K.call(e):"";var t=e+"";return"0"==t&&1/e==-J?"-0":t}function i(t){var n=e(t);return null!=t&&("object"==n||"function"==n)}function l(t,n){var a=e(t);return n=null==n?9007199254740991:n,!!n&&("number"==a||"symbol"!=a&&lt.test(t))&&-1<t&&0==t%1&&t<n}function r(t,n,a){if(!nt(a))return!1;var o=e(n);return!("number"==o?!(it(a)&&rt(n,a.length)):!("string"==o&&n in a))&&tt(a[n],t)}function d(t){if("white"===t)return"#fff";if("black"===t)return"#000";if("transparent"===t)return"#rgba(0,0,0,0)";var n=st(t," "),e=n[0].trim();e=et(e);var a=n[1];a===void 0&&(a="base"),a=a.replace("-","").trim();var o="#666";try{o=ut.default[e][a]}catch(n){console.log("can not convert color: "+t,ut.default)}return o}function c(e,t){var n=ht?t.media||"default":e,a=mt[n]||(mt[n]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),void 0===A&&(A=document.head||document.getElementsByTagName("head")[0]),A.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(o),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{var i=a.ids.size-1,l=document.createTextNode(o),r=a.element.childNodes;r[i]&&a.element.removeChild(r[i]),r.length?a.element.insertBefore(l,r[i]):a.element.appendChild(l)}}}function f(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function s(e){return!!(f(e)&&""!==e)}function u(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function p(e){var t=!1;return s(e)?t=!isNaN(+e):u(e)&&(t=!0),t}function g(e){if(!p(e))return 0;var t=Pt(e);return t}function h(e){if(!p(e))return 0;e=g(e);var t=Et(e);return"0"===t+""?0:t}function m(e){if(!p(e))return!1;var t=0<=g(e);return t}function v(e){if(!p(e))return!1;var t=0>=g(e);return t}function b(e){return!!p(e)&&(e=g(e),Nt(e))}function y(e){if(!b(e))return!1;var t=0<h(e);return t}function k(e){if(!b(e))return!1;var t=0<=h(e);return t}function x(e){if(!b(e))return!1;var t=0>h(e);return t}function I(e){if(!b(e))return!1;var t=0>=h(e);return t}function C(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function S(e,t){var n=!1,a="";if("isstr"===t)f(e)||(n=!0,a="\u9700\u8981\u70BA\u5B57\u4E32",e="");else if("isnum"===t)p(e)||(n=!0,a="\u9700\u8981\u70BA\u6578\u5B57",e=0);else if("isp0num"===t)m(e)||(n=!0,a="\u9700\u8981\u70BA\u542B0\u7684\u6B63\u6D6E\u9EDE\u6578",e=0);else if("isn0num"===t)v(e)||(n=!0,a="\u9700\u8981\u70BA\u542B0\u7684\u8CA0\u6D6E\u9EDE\u6578",e=0);else if("isint"===t)b(e)||(n=!0,a="\u9700\u8981\u70BA\u6574\u6578",e=0);else if("ispint"===t)y(e)||(n=!0,a="\u9700\u8981\u70BA\u4E0D\u542B0\u6B63\u6574\u6578",e=0);else if("isp0int"===t)k(e)||(n=!0,a="\u9700\u8981\u70BA\u542B0\u6B63\u6574\u6578",e=0);else if("isnint"===t)x(e)||(n=!0,a="\u9700\u8981\u70BA\u4E0D\u542B0\u8CA0\u6574\u6578",e=0);else if("isn0int"===t)I(e)||(n=!0,a="\u9700\u8981\u70BA\u542B0\u8CA0\u6574\u6578",e=0);else if(C(t)){e=t(e)}else"any"===t?p(e)||f(e)||(n=!0,a="\u9700\u8981\u70BA\u5B57\u4E32\u6216\u6578\u5B57",e=""):(n=!0,a="\u9700\u8981\u6307\u5B9A\u9A57\u8B49\u985E\u578B",e=null);var o={value:e,err:n,errmsg:a};return o}var A,_="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,T="object"==e(_)&&_&&_.Object===Object&&_,w=T,j="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,H=w||j||Function("return this")(),P=H,z=P.Symbol,M=z,O=function(e,t){for(var n=-1,a=null==e?0:e.length,o=Array(a);++n<a;)o[n]=t(e[n],n,e);return o},$=Array.isArray,E=$,N=Object.prototype,R=N.hasOwnProperty,V=N.toString,W=M?M.toStringTag:void 0,B=function(e){var t=R.call(e,W),n=e[W];try{e[W]=void 0;var a=!0}catch(t){}var o=V.call(e);return a&&(t?e[W]=n:delete e[W]),o},U=Object.prototype,L=U.toString,F=function(e){return L.call(e)},D=M?M.toStringTag:void 0,G=t,Z=n,Y=a,J=1/0,q=M?M.prototype:void 0,K=q?q.toString:void 0,X=o,Q=function(e){return null==e?"":X(e)},ee=function(e,t,n){var a=-1,o=e.length;0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++a<o;)i[a]=e[a+t];return i},te=function(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:ee(e,t,n)},ne=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),ae=function(e){return ne.test(e)},oe=function(e){return e.split("")},ie="\\ud800-\\udfff",le="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",re="\\ud83c[\\udffb-\\udfff]",de="[^"+ie+"]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",se="(?:"+le+"|"+re+")"+"?",ue="["+"\\ufe0e\\ufe0f"+"]?",pe="(?:"+"\\u200d"+"(?:"+[de,ce,fe].join("|")+")"+ue+se+")*",ge="(?:"+[de+le+"?",le,ce,fe,"["+ie+"]"].join("|")+")",he=RegExp(re+"(?="+re+")|"+ge+(ue+se+pe),"g"),me=function(e){return e.match(he)||[]},ve=function(e){return ae(e)?me(e):oe(e)},be=function(e){return function(t){t=Q(t);var n=ae(t)?ve(t):void 0,a=n?n[0]:t.charAt(0),o=n?te(n,1).join(""):t.slice(1);return a[e]()+o}}("toUpperCase"),ye=function(e){return be(Q(e).toLowerCase())},ke=function(e,t,n,a){var o=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n},xe=function(e){return function(t){return null==e?void 0:e[t]}}({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),Ie=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ce=RegExp("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]","g"),Se=function(e){return e=Q(e),e&&e.replace(Ie,xe).replace(Ce,"")},Ae=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_e=function(e){return e.match(Ae)||[]},Te=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,we=function(e){return Te.test(e)},je="\\ud800-\\udfff",He="\\u2700-\\u27bf",Pe="a-z\\xdf-\\xf6\\xf8-\\xff",ze="A-Z\\xc0-\\xd6\\xd8-\\xde",Me="\\xac\\xb1\\xd7\\xf7"+"\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"+"\\u2000-\\u206f"+" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="['\u2019]",$e="["+Me+"]",Ee="\\d+",Ne="["+Pe+"]",Re="[^"+je+Me+Ee+He+Pe+ze+"]",Ve="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="["+ze+"]",Ue="(?:"+Ne+"|"+Re+")",Le="(?:"+Oe+"(?:d|ll|m|re|s|t|ve))?",Fe="(?:"+Oe+"(?:D|LL|M|RE|S|T|VE))?",De="(?:"+("["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]")+"|"+"\\ud83c[\\udffb-\\udfff]"+")"+"?",Ge="["+"\\ufe0e\\ufe0f"+"]?",Ze="(?:"+"\\u200d"+"(?:"+["[^"+je+"]",Ve,We].join("|")+")"+Ge+De+")*",Ye="(?:"+["["+He+"]",Ve,We].join("|")+")"+(Ge+De+Ze),Je=RegExp([Be+"?"+Ne+"+"+Le+"(?="+[$e,Be,"$"].join("|")+")","(?:"+Be+"|"+Re+")"+"+"+Fe+"(?="+[$e,Be+Ue,"$"].join("|")+")",Be+"?"+Ue+"+"+Le,Be+"+"+Fe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ee,Ye].join("|"),"g"),qe=function(e){return e.match(Je)||[]},Ke=function(e,t,n){return e=Q(e),t=n?void 0:t,void 0===t?we(e)?qe(e):_e(e):e.match(t)||[]},Xe=RegExp("['\u2019]","g"),Qe=function(e){return function(t){return ke(Ke(Se(t).replace(Xe,"")),e,"")}}(function(e,t,n){return t=t.toLowerCase(),e+(n?ye(t):t)}),et=Qe,tt=function(e,t){return e===t||e!==e&&t!==t},nt=i,at=function(e){if(!nt(e))return!1;var t=G(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ot=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},it=function(e){return null!=e&&ot(e.length)&&!at(e)},lt=/^(?:0|[1-9]\d*)$/,rt=l,dt=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){var n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,i=o&&w.process,l=function(){try{var e=a&&a.require&&a.require("util").types;return e?e:i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=l}),ct=dt&&dt.isRegExp,ft=ct?function(e){return function(t){return e(t)}}(ct):function(e){return Z(e)&&G(e)=="[object RegExp]"},st=function(e,t,n){return(n&&"number"!=typeof n&&r(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=Q(e),e&&("string"==typeof t||null!=t&&!ft(t))&&(t=X(t),!t&&ae(e))?te(ve(e),0,n):e.split(t,n))},ut={default:{red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"transparent"}}},pt={props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:Number,default:24}},data:function(){return{}},mounted:function(){},computed:{useIcon:function(){var e=this;return 0<=e.icon.indexOf("fa-")?e.icon+" fa-fw":e.icon},useSize:function(){var e=this,t=e.size;return 0<=e.icon.indexOf("fa-")?t-4:t},useStyle:function(){return{"vertical-align":"middle"}}},methods:{}},gt=function(e,t,n,a,o,i,l,r,d,c){"boolean"!=typeof l&&(d=r,r=l,l=!1);var f="function"==typeof n?n.options:n;e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),a&&(f._scopeId=a);var s;if(i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=s):t&&(s=l?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),s)if(f.functional){var u=f.render;f.render=function(e,t){return s.call(t),u(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,s):[s]}return n},ht="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),mt={},vt=function(){return function(e,t){return c(e,t)}};var bt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return""===e.icon?e._e():n("div",{staticStyle:{display:"flex","align-items":"center","user-select":"none"}},[n("v-icon",{style:e.useStyle,attrs:{color:e.color,size:e.useSize}},[e._v("\n        "+e._s(e.useIcon)+"\n    ")])],1)};bt._withStripped=!0;var yt=gt({render:bt,staticRenderFns:[]},function(e){e&&e("data-v-c4e40804_0",{source:"\n.v-icon[data-v-c4e40804] {\r\n    transition: all 0.7s;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WIcon.vue"],names:[],mappings:";AA6FA;IACA,oBAAA;AACA",file:"WIcon.vue",sourcesContent:["<template>\r\n    <div style=\"display:flex; align-items:center; user-select:none;\" v-if=\"icon!==''\">\r\n\r\n        <v-icon\r\n            :style=\"useStyle\"\r\n            :color=\"color\"\r\n            :size=\"useSize\"\r\n        >\r\n            {{useIcon}}\r\n        </v-icon>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n\r\n/**\r\n * @vue-prop {String} [icon=''] \u8F38\u5165\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [color=''] \u8F38\u5165\u5716\u6A19\u80CC\u666F\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Number} [size=24] \u8F38\u5165\u5716\u6A19\u5927\u5C0F\uFF0C\u55AE\u4F4D\u70BApx\uFF0C\u9810\u8A2D24\r\n */\r\nexport default {\r\n    props: {\r\n        icon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        color: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        size: {\r\n            type: Number,\r\n            default: 24,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useIcon: function () {\r\n            //console.log('computed useIcon')\r\n\r\n            let vo = this\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return vo.icon + ' fa-fw'\r\n            }\r\n            return vo.icon\r\n        },\r\n\r\n        useSize: function () {\r\n            //console.log('computed useSize')\r\n\r\n            let vo = this\r\n\r\n            //size\r\n            let size = vo.size\r\n\r\n            if (vo.icon.indexOf('fa-') >= 0) {\r\n                return size - 4\r\n            }\r\n            return size\r\n        },\r\n\r\n        useStyle: function () {\r\n            //console.log('computed useStyle')\r\n\r\n            //let vo = this\r\n\r\n            let s = {\r\n                'vertical-align': 'middle'\r\n            }\r\n            // s['transform'] = ''\r\n            // if (vo.icon.indexOf('fa-') >= 0) {\r\n            //     s['transform'] += ' translateY(-1px)'\r\n            // }\r\n            // s['transform'] += ' translateX(-1px)'\r\n            return s\r\n        },\r\n\r\n\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.v-icon {\r\n    transition: all 0.7s;\r\n}\r\n</style>\r\n"]},media:void 0})},pt,"data-v-c4e40804",!1,void 0,vt,void 0),kt={components:{WIcon:yt},props:{title:{type:String,default:""},titleColor:{type:String,default:"deep-orange darken-1"},leftIcon:{type:String,default:""},leftIconColor:{type:String,default:"deep-orange lighten-2"},leftIconColorHover:{type:String,default:"deep-orange lighten-1"},leftIconTooltip:{type:String,default:""},rightIcon:{type:String,default:""},rightIconColor:{type:String,default:"deep-orange lighten-2"},rightIconColorHover:{type:String,default:"deep-orange lighten-1"},rightIconTooltip:{type:String,default:""},small:{type:Boolean,default:!0},editable:{type:Boolean,default:!0}},data:function(){return{focused:!1}},mounted:function(){},computed:{useTitleColor:function(){var e=this,t={};return t.color=d(e.titleColor),t},usePadding:function(){var e=this,t={};return t.padding=e.small?"0px":"3px 6px",t},usePaddingSlot:function(){var e=this,t={};return t["padding-top"]="0px",t["padding-bottom"]="0px",t["padding-left"]="0px",t["padding-right"]="0px",""!==e.leftIcon&&(t["padding-left"]="10px"),""!==e.rightIcon&&(t["padding-right"]="10px"),t}},methods:{clickIcon:function(e){var t=this;!1===t.editable||setTimeout(function(){t.$emit("click-"+e)},1)}}};var xt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group",style:[e.usePadding,{opacity:e.editable?1:.6}],on:{mouseenter:function(){e.focused=!0},mouseleave:function(){e.focused=!1}}},[e.leftIcon?n("div",{staticStyle:{cursor:"pointer"},on:{click:function(){return e.clickIcon("left")}}},[n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.leftIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("div",e._g({attrs:{ShellMaterial:"leftIcon"}},Object.assign({},a)),[n("w-icon",{attrs:{icon:e.leftIcon,color:e.focused?e.leftIconColorHover:e.leftIconColor}})],1)]}}],null,!1,1182175422)},[e._v(" "),n("span",[e._v(e._s(e.leftIconTooltip))])])],1):e._e(),e._v(" "),n("div",{staticStyle:{width:"100%"}},[n("div",{style:[{position:"relative"},e.usePaddingSlot]},[n("div",{style:[{position:"absolute",top:"0px",transform:"translateY(-120%)","font-size":"0.9rem","white-space":"nowrap",opacity:.7},e.useTitleColor]},[e._v("\n                "+e._s(e.title)+"\n            ")]),e._v(" "),e._t("default")],2)]),e._v(" "),e.rightIcon?n("div",{staticStyle:{cursor:"pointer"},on:{click:function(){return e.clickIcon("right")}}},[n("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition",disabled:""===e.rightIconTooltip},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("div",e._g({attrs:{ShellMaterial:"rightIcon"}},Object.assign({},a)),[n("w-icon",{attrs:{icon:e.rightIcon,color:e.focused?e.rightIconColorHover:e.rightIconColor}})],1)]}}],null,!1,226692222)},[e._v(" "),n("span",[e._v(e._s(e.rightIconTooltip))])])],1):e._e()])};xt._withStripped=!0;var It=gt({render:xt,staticRenderFns:[]},function(e){e&&e("data-v-3edeb57f_0",{source:"\n.group[data-v-3edeb57f] {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WShellMaterial.vue"],names:[],mappings:";AAuNA;IACA,oBAAA;IACA,aAAA;IACA,2BAAA;IACA,mBAAA;AACA",file:"WShellMaterial.vue",sourcesContent:["<template>\r\n    <div\r\n        class=\"group\"\r\n        :style=\"[usePadding,{'opacity':editable?1:0.6}]\"\r\n        @mouseenter=\"focused=true\"\r\n        @mouseleave=\"focused=false\"\r\n    >\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('left')\" v-if=\"leftIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"leftIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialLeft }\">\r\n                    <div ShellMaterial=\"leftIcon\" v-on=\"{...ttShellMaterialLeft}\">\r\n                        <w-icon\r\n                            :icon=\"leftIcon\"\r\n                            :color=\"focused?leftIconColorHover:leftIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{leftIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n        <div style=\"width:100%;\">\r\n\r\n            <div :style=\"[{'position':'relative'},usePaddingSlot]\">\r\n\r\n                <div :style=\"[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]\">\r\n                    {{title}}\r\n                </div>\r\n\r\n                <slot></slot>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div style=\"cursor:pointer;\" @click=\"clickIcon('right')\" v-if=\"rightIcon\">\r\n\r\n            <v-tooltip bottom transition=\"slide-y-transition\" :disabled=\"rightIconTooltip===''\">\r\n\r\n                <template v-slot:activator=\"{ on: ttShellMaterialRight }\">\r\n                    <div ShellMaterial=\"rightIcon\" v-on=\"{...ttShellMaterialRight}\">\r\n                        <w-icon\r\n                            :icon=\"rightIcon\"\r\n                            :color=\"focused?rightIconColorHover:rightIconColor\"\r\n                        ></w-icon>\r\n                    </div>\r\n                </template>\r\n\r\n                <span>{{rightIconTooltip}}</span>\r\n\r\n            </v-tooltip>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { color2hex } from '../js/vuetifyColor.mjs'\r\nimport WIcon from './WIcon.vue'\r\n\r\n/**\r\n * @vue-prop {String} [title=''] \u8F38\u5165\u6A19\u984C\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [titleColor='deep-orange darken-1'] \u8F38\u5165\u6A19\u984C\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange darken-1'\r\n * @vue-prop {String} [leftIcon=''] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-2'\r\n * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] \u8F38\u5165\u5DE6\u5074\u5716\u6A19Hover\u6642\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-1'\r\n * @vue-prop {String} [leftIconTooltip=''] \u8F38\u5165\u5DE6\u5074\u5716\u6A19\u63D0\u793A\u6587\u5B57\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [rightIcon=''] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u5B57\u4E32\uFF0C\u53EF\u70BAmdi,md,fa\u4EE3\u865F\u6216mdi/js\u8DEF\u5F91\uFF0C\u9810\u8A2D''\r\n * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-2'\r\n * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] \u8F38\u5165\u53F3\u5074\u5716\u6A19Hover\u6642\u984F\u8272\u5B57\u4E32\uFF0C\u9810\u8A2D'deep-orange lighten-1'\r\n * @vue-prop {String} [rightIconTooltip=''] \u8F38\u5165\u53F3\u5074\u5716\u6A19\u63D0\u793A\u6587\u5B57\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Boolean} [small=true] \u8F38\u5165\u662F\u5426\u70BA\u5C0F\u578B\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n * @vue-prop {Boolean} [editable=true] \u8F38\u5165\u662F\u5426\u70BA\u7DE8\u8F2F\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    components: {\r\n        WIcon\r\n    },\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        titleColor: {\r\n            type: String,\r\n            default: 'deep-orange darken-1',\r\n        },\r\n        leftIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        leftIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        leftIconColorHover: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        leftIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIcon: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        rightIconColor: {\r\n            type: String,\r\n            default: 'deep-orange lighten-2',\r\n        },\r\n        rightIconColorHover: {\r\n            type: String,\r\n            default: 'deep-orange lighten-1',\r\n        },\r\n        rightIconTooltip: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        small: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focused: false,\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        useTitleColor: function() {\r\n            //console.log('computed useTitleColor')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['color'] = color2hex(vo.titleColor)\r\n            return s\r\n        },\r\n\r\n        usePadding: function() {\r\n            //console.log('computed usePadding')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            if (vo.small) {\r\n                s['padding'] = '0px'\r\n            }\r\n            else {\r\n                s['padding'] = '3px 6px'\r\n            }\r\n            return s\r\n        },\r\n\r\n        usePaddingSlot: function() {\r\n            //console.log('computed usePaddingSlot')\r\n\r\n            let vo = this\r\n\r\n            let s = {}\r\n            s['padding-top'] = '0px'\r\n            s['padding-bottom'] = '0px'\r\n            s['padding-left'] = '0px'\r\n            s['padding-right'] = '0px'\r\n            if (vo.leftIcon !== '') {\r\n                s['padding-left'] = '10px'\r\n            }\r\n            if (vo.rightIcon !== '') {\r\n                s['padding-right'] = '10px'\r\n            }\r\n            return s\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        clickIcon: function (mode) {\r\n            //console.log('methods clickIcon', mode)\r\n\r\n            let vo = this\r\n\r\n            if (vo.editable === false) {\r\n                return\r\n            }\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //emit\r\n                vo.$emit('click-' + mode)\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.group {\r\n    transition: all 0.7s;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n</style>\r\n"]},media:void 0})},kt,"data-v-3edeb57f",!1,void 0,vt,void 0),Ct=0/0,St=/^\s+|\s+$/g,At=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,Tt=/^0o[0-7]+$/i,wt=parseInt,jt=function(e){if("number"==typeof e)return e;if(Y(e))return Ct;if(nt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=nt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(St,"");var n=_t.test(e);return n||Tt.test(e)?wt(e.slice(2),n?2:8):At.test(e)?Ct:+e},Ht=1/0,Pt=function(e){if(!e)return 0===e?e:0;if(e=jt(e),e===Ht||e===-Ht){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},zt=function(e){var t=Pt(e),n=t%1;return t===t?n?t-n:t:0},Mt=P.isFinite,Ot=Math.min,$t=function(e){var t=Math[e];return function(e,n){if(e=jt(e),n=null==n?0:Ot(zt(n),292),n&&Mt(e)){var a=(Q(e)+"e").split("e"),o=t(a[0]+"e"+(+a[1]+n));return a=(Q(o)+"e").split("e"),+(a[0]+"e"+(+a[1]-n))}return t(e)}}("round"),Et=$t,Nt=function(e){return"number"==typeof e&&e==zt(e)},Rt={props:{type:{type:String,default:"any"},value:{type:[String,Number]},textAlign:{type:String,default:"left"},placeholder:{type:String,default:""},editable:{type:Boolean,default:!0}},data:function(){return{focused:!1,value_trans:""}},mounted:function(){},computed:{changeParam:function(){var e=this;return e.value_trans=e.value,""}},methods:{changeContent:function(e){var t=this,n=S(t.value_trans,t.type),a=n.value,o=n.errmsg;setTimeout(function(){t.value_trans=a,t.$emit("input",a,o),t.$emit(e,a,o),t.focused=!1},1)},setValueTrans:function(e){var t=this;t.value_trans=e}}};var Vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{changeParam:e.changeParam}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value_trans,expression:"value_trans"}],ref:"inp",staticClass:"basic",style:[{width:"100%"},{height:"28px"},{"text-align":e.textAlign},{opacity:e.value_trans||e.focused?1:.6}],attrs:{type:"text",readonly:!e.editable,placeholder:e.placeholder},domProps:{value:e.value_trans},on:{focus:function(){e.focused=!0},blur:function(){return e.changeContent("blur")},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeContent("enter")},input:function(t){t.target.composing||(e.value_trans=t.target.value)}}})])};Vt._withStripped=!0;var Wt=gt({render:Vt,staticRenderFns:[]},function(e){e&&e("data-v-526b969e_0",{source:"\n.basic[data-v-526b969e] {\r\n    transition: all 0.7s;\r\n    outline: none;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-102-3-w-component-vue\\w-component-vue\\src\\components\\WTextCore.vue"],names:[],mappings:";AAwHA;IACA,oBAAA;IACA,aAAA;AACA",file:"WTextCore.vue",sourcesContent:["<template>\r\n    <div :changeParam=\"changeParam\">\r\n\r\n        <input\r\n            ref=\"inp\"\r\n            class=\"basic\"\r\n            type=\"text\"\r\n            :style=\"[{'width':'100%'},{'height':'28px'},{'text-align':textAlign},{'opacity':(!value_trans && !focused)?0.6:1}]\"\r\n            :readonly=\"!editable\"\r\n            :placeholder=\"placeholder\"\r\n            v-model=\"value_trans\"\r\n            @focus=\"focused=true\"\r\n            @blur=\"changeContent('blur')\"\r\n            @keyup.enter=\"changeContent('enter')\"\r\n        >\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport verifyValue from 'wsemi/src/verifyValue.mjs'\r\n\r\n/**\r\n * @vue-prop {String} [type='any'] \u8F38\u5165\u6587\u5B57\u6846\u985E\u578B\u5B57\u4E32\uFF0C\u9810\u8A2D'any'\r\n * @vue-prop {String|Number} value \u8F38\u5165\u6587\u5B57\u6846\u503C\r\n * @vue-prop {String} [textAlign='left'] \u8F38\u5165\u6587\u5B57\u5DE6\u53F3\u5C0D\u9F4A\u5B57\u4E32\uFF0C\u9810\u8A2D'left'\r\n * @vue-prop {String} [placeholder=''] \u8F38\u5165\u7121\u6587\u5B57\u6642\u7684\u66FF\u4EE3\u5B57\u7B26\u5B57\u4E32\uFF0C\u9810\u8A2D''\r\n * @vue-prop {Boolean} [editable=true] \u8F38\u5165\u662F\u5426\u70BA\u7DE8\u8F2F\u6A21\u5F0F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'any',\r\n        },\r\n        value: {\r\n            type: [String, Number],\r\n        },\r\n        textAlign: {\r\n            type: String,\r\n            default: 'left',\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            focused: false,\r\n            value_trans: '',\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n\r\n        changeParam: function () {\r\n            //console.log('computed changeParam')\r\n\r\n            let vo = this\r\n\r\n            //value_trans\r\n            vo.value_trans = vo.value\r\n\r\n            return ''\r\n        },\r\n    },\r\n    methods: {\r\n\r\n        changeContent: function (evname) {\r\n            //console.log('methods changeContent', evname)\r\n\r\n            let vo = this\r\n\r\n            //verifyValue\r\n            let r = verifyValue(vo.value_trans, vo.type)\r\n\r\n            //value, errmsg\r\n            let value = r.value\r\n            let errmsg = r.errmsg\r\n\r\n            //setTimeout\r\n            setTimeout(function() {\r\n\r\n                //reset for error condition\r\n                vo.value_trans = value\r\n\r\n                //emit\r\n                vo.$emit('input', value, errmsg)\r\n\r\n                //emit\r\n                vo.$emit(evname, value, errmsg)\r\n\r\n                //focused\r\n                vo.focused = false\r\n\r\n            }, 1)\r\n\r\n        },\r\n\r\n        setValueTrans: function(value) {\r\n            //console.log('methods setValueTrans', value)\r\n\r\n            let vo = this\r\n\r\n            //set value_trans\r\n            vo.value_trans = value\r\n\r\n        },\r\n\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.basic {\r\n    transition: all 0.7s;\r\n    outline: none;\r\n}\r\n</style>\r\n"]},media:void 0})},Rt,"data-v-526b969e",!1,void 0,vt,void 0),Bt={components:{WShellMaterial:It,WTextCore:Wt},props:{width:{type:Number,default:70},value:{type:Number,default:0},valueMax:{type:Number,default:null},leftIconTooltip:{type:String,default:"\u6E1B\u5C11"},rightIconTooltip:{type:String,default:"\u589E\u52A0"},buttonColor:{type:String,default:"white"},buttonColorHover:{type:String,default:"white"},editable:{type:Boolean,default:!0}},data:function(){return{mdiPlusCircle:"M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",mdiMinusCircle:"M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",value_trans:""}},mounted:function(){},computed:{changeParam:function(){var e=this;return e.value_trans=e.value,""}},methods:{changeContent:function(e,t){var n=this;if(!1!==n.editable){e=h(e),"minus"===t?e-=1:"add"==t&&(e+=1),n.valueMax&&e>n.valueMax&&(e=n.valueMax);var a=S(e,"isp0int"),o=a.value,i=a.errmsg;setTimeout(function(){n.value_trans=o,n.$emit("input",o),n.$emit("errmsg",i)},1),setTimeout(function(){n.$refs.inp.setValueTrans(o)},1)}}}};var Ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{changeParam:e.changeParam}},[n("w-shell-material",{attrs:{leftIcon:e.mdiMinusCircle,leftIconColor:e.buttonColor,leftIconColorHover:e.buttonColorHover,leftIconTooltip:e.leftIconTooltip,rightIcon:e.mdiPlusCircle,rightIconColor:e.buttonColor,rightIconColorHover:e.buttonColorHover,rightIconTooltip:e.rightIconTooltip,editable:e.editable},on:{"click-left":function(){return e.changeContent(e.value_trans,"minus")},"click-right":function(){return e.changeContent(e.value_trans,"add")}}},[n("w-text-core",{ref:"inp",style:{width:e.width+"px"},attrs:{textAlign:"center",editable:e.editable,value:e.value_trans},on:{input:function(t){e.changeContent(t,"")}}})],1)],1)};Ut._withStripped=!0;var Lt=gt({render:Ut,staticRenderFns:[]},function(e){e&&e("data-v-2a0ce0ec_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"WTextIntCore.vue"},media:void 0})},Bt,"data-v-2a0ce0ec",!1,void 0,vt,void 0);return Lt});
//# sourceMappingURL=w-text-int-core.umd.js.map
