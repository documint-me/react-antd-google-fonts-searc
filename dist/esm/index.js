import React, { useState, useCallback, useEffect, useContext, useMemo } from 'react';
import { Col, Card, Skeleton, Typography, Row, Input, Select, Segmented, Button, Slider, Radio, Modal, message, Checkbox, Space, BackTop, Drawer, Divider } from 'antd';
import { AppstoreOutlined, BarsOutlined, ReloadOutlined, CloseOutlined, FilterOutlined, SettingOutlined } from '@ant-design/icons';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var texts = [
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789',
    'fontName',
    'Grumpy wizards make toxic brew for the evil Queen and Jack.',
    'Bright vixens jump dozy fowl quack',
    'Waltz bad nymph for quick jugs vex',
    'Brick quiz whangs jumpy veldt fox',
    'The quick brown fox jumps over the lazy dog.',
];
var weightLabels = {
    100: 'Thin',
    200: 'Extra-Light',
    300: 'Light',
    400: 'Normal',
    500: 'Medium',
    600: 'Semi-Bold',
    700: 'Bold',
    800: 'Extra-Bold',
    900: 'Ultra-Bold'
};

var webfontloader = {exports: {}};

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */

(function (module) {
	(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return +new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document;}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild);}function v(a){a.parentNode&&a.parentNode.removeChild(a);}
	function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e]);}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e]);}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"");}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return !0;return !1}
	function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null);}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d();},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d();}):setTimeout(function(){e=!0;d();},0);u(a,"head",b);}
	function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f));};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")));},d||5E3);return f}return null}function B(){this.a=0;this.c=null;}function C(a){a.a++;return function(){a.a--;D(a);}}function E(a,b){a.c=b;D(a);}function D(a){0==a.a&&a.c&&(a.c(),a.c=null);}function F(a){this.a=a||"-";}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10));}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d);}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
	function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes;}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading");}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d);}K(a,"inactive");}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]();}function ja(){this.c={};}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c));}return d}function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f);}function N(a){u(a.c,"body",a.a);}function O(a){return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")}function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0;}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25);},function(){e();});}f();}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f);});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a);},function(){b.j(b.a);});};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
	O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m);}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10));}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this);};
	function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return !0;return !1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v);}function ma(a){setTimeout(p(function(){U(this);},a),50);}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);},a),0);}function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c;}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this);};
	W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e);}K(b,"fontinactive",a);na(this);};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a));}function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0;}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a);};
	function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else {b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
	X=x?42<parseInt(x[1],10):xa?!1:!0;}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r);}for(h=0;h<l.length;h++)l[h].start();}},0);}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c);});}function ra(a,b){this.c=a;this.a=b;}
	ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k));}a(e);}else setTimeout(function(){b();},50);}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
	d]=function(){return c.a},b());}).id="__MonotypeAPIScript__"+d;}else a([]);};function sa(a,b){this.c=a;this.a=b;}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f);});};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||"";}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f));}}
	function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b}function ya(a){this.f=a;this.a=[];this.c={};}
	var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
	Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else {k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("");}}else k="";k&&g.push(k);}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
	g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d));}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]));}}function Ea(a,b){this.c=a;this.a=b;}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa);});};function Ga(a,b){this.c=a;this.a=b;}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0});}catch(l){}a(e);}},2E3):a([]);};function Ha(a,b){this.c=a;this.f=b;this.a=[];}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)));}a(d.a);},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([]);})):a([]);};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
} (webfontloader));

var WebFont = webfontloader.exports;

var PAGE_SIZE = 1000;
var SEARCH_PAGE_SIZE = 500;
var loadFontData = function (sort, ignoreWebfontsLoad) { return __awaiter(void 0, void 0, void 0, function () {
    var url, key, res, resJson_1, pages, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = 'https://www.googleapis.com/webfonts/v1/webfonts?';
                key = 'AIzaSyD_nw41oN07OX5vrjt_uD_UEm_QVD-OZ4k' // process.env.REACT_APP_GOOGLE_API_KEY
                ;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("".concat(url, "sort=").concat(sort, "&key=").concat(key))];
            case 2:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 3:
                resJson_1 = _a.sent();
                pages = Math.ceil(resJson_1.items.length / PAGE_SIZE);
                !ignoreWebfontsLoad && Array.from(Array(pages).keys()).forEach(function (page) {
                    WebFont.load({
                        classes: false,
                        google: {
                            families: __spreadArray([], resJson_1.items, true).slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map(function (font) { return font.family; }),
                            text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
                        },
                    });
                });
                return [2 /*return*/, resJson_1.items];
            case 4:
                error_1 = _a.sent();
                console.error(url, error_1.toString());
                return [2 /*return*/, []];
            case 5: return [2 /*return*/];
        }
    });
}); };
var checkCategory = function (font, category, subset) {
    if (category === 'all' && subset === 'all') {
        return true;
    }
    if (category === 'all' && subset !== 'all') {
        return font.subsets.indexOf(subset) > -1;
    }
    if (category !== 'all' && subset === 'all') {
        return font.category === category;
    }
    return font.category === category && font.subsets.indexOf(subset) > -1;
};
var filterFonts = function (allFonts, sort, category, subset, search) {
    search = search.toLowerCase().trim();
    var fonts = [];
    var data = allFonts[sort];
    data = data.filter(function (elem) {
        var isCategory = true, isMatch = true;
        isCategory = Boolean(checkCategory(elem, category, subset));
        if (search.length > 0) {
            isMatch = elem.family.toLowerCase().indexOf(search) !== -1;
        }
        return isCategory && isMatch;
    });
    data.forEach(function (font) {
        var hasRegular = font.variants.indexOf('regular') !== -1;
        var subsets = '';
        if (subset !== 'latin') {
            if (font.subsets.indexOf('latin') !== -1) {
                subsets = ':latin,' + category;
            }
            else {
                subsets = ':' + category;
            }
        }
        if (hasRegular) {
            fonts.push(font.family + subsets);
        }
        else {
            fonts.push(font.family + ':' + font.variants[0] + subsets);
        }
    });
    if (fonts.length > 0) {
        var pages = Math.ceil(fonts.length / SEARCH_PAGE_SIZE);
        Array.from(Array(pages).keys()).forEach(function (page) {
            WebFont.load({
                classes: false,
                google: {
                    families: fonts.slice(page * SEARCH_PAGE_SIZE, (page + 1) * SEARCH_PAGE_SIZE)
                },
            });
        });
    }
    return data;
};

var SearchContext = React.createContext({
    editFontOpen: false,
    setEditFontOpen: function () { },
    loading: false,
    allFonts: { popularity: [] },
    fonts: [],
    savedFonts: [],
    setSavedFonts: function () { },
    previewSize: 0,
    setPreviewSize: function () { },
    view: '',
    setView: function () { },
    search: '',
    setSearch: function () { },
    category: '',
    setSubset: function () { },
    subset: '',
    setCategory: function () { },
    sort: '',
    setSort: function () { },
    text: '',
    setText: function () { },
    font: { family: '', variants: [], subsets: [] },
    setFont: function () { },
    randomizeText: function () { },
    suggest: function () { },
    resetAll: function () { },
    currentFontLoading: false,
    setCurrentFontLoading: function () { },
});
var SearchProvider = function (_a) {
    var addedFonts = _a.addedFonts, children = _a.children;
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(false), editFontOpen = _c[0], setEditFontOpen = _c[1];
    var _d = useState(false), currentFontLoading = _d[0], setCurrentFontLoading = _d[1];
    var _e = useState({ popularity: [] }), allFonts = _e[0], setAllFonts = _e[1];
    var _f = useState([]), fonts = _f[0], setFonts = _f[1];
    var _g = useState(addedFonts !== null && addedFonts !== void 0 ? addedFonts : []), savedFonts = _g[0], setSavedFonts = _g[1];
    var _h = useState(30), previewSize = _h[0], setPreviewSize = _h[1];
    var _j = useState('grid'), view = _j[0], setView = _j[1];
    var _k = useState(''), search = _k[0], setSearch = _k[1];
    var _l = useState('all'), category = _l[0], setCategory = _l[1];
    var _m = useState('all'), subset = _m[0], setSubset = _m[1];
    var _o = useState('popularity'), sort = _o[0], setSort = _o[1];
    var _p = useState('The quick brown fox jumps over the lazy dog.'), text = _p[0], setText = _p[1];
    var _q = useState({ family: '', variants: [], subsets: [] }), font = _q[0], setFont = _q[1];
    var randomizeText = useCallback(function () { return setText(texts[Math.floor(Math.random() * texts.length)]); }, []);
    var resetAll = useCallback(function () {
        setPreviewSize(30);
        setCategory('all');
        setSort('popularity');
        setText('The quick brown fox jumps over the lazy dog.');
        setSubset('');
        setSearch('');
    }, []);
    var suggest = useCallback(function (_key) { }, []);
    useEffect(function () {
        setLoading(true);
        var loadAllFonts = function () { return __awaiter(void 0, void 0, void 0, function () {
            var fonts;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadFontData(sort)];
                    case 1:
                        fonts = _b.sent();
                        setAllFonts(__assign(__assign({}, allFonts), (_a = {}, _a[sort] = fonts, _a)));
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        loadAllFonts();
    }, [sort]);
    useEffect(function () {
        allFonts[sort] && setFonts(filterFonts(allFonts, sort, category, subset, search));
    }, [allFonts, sort, category, search, subset]);
    return (React.createElement(SearchContext.Provider, { value: {
            editFontOpen: editFontOpen,
            setEditFontOpen: setEditFontOpen,
            loading: loading,
            fonts: fonts,
            allFonts: allFonts,
            savedFonts: savedFonts,
            setSavedFonts: setSavedFonts,
            previewSize: previewSize,
            suggest: suggest,
            setPreviewSize: setPreviewSize,
            view: view,
            setView: setView,
            search: search,
            setSearch: setSearch,
            category: category,
            setCategory: setCategory,
            subset: subset,
            setSubset: setSubset,
            sort: sort,
            setSort: setSort,
            text: text,
            setText: setText,
            font: font,
            setFont: setFont,
            randomizeText: randomizeText,
            resetAll: resetAll,
            currentFontLoading: currentFontLoading,
            setCurrentFontLoading: setCurrentFontLoading,
        } }, children));
};
var useSearchContext = function () { return useContext(SearchContext); };

var FontSkeleton = function () {
    var view = useSearchContext().view;
    var isGrid = view === 'grid';
    return (React.createElement(Col, { span: isGrid ? 6 : 24 },
        React.createElement(Card, null,
            React.createElement(Skeleton, { active: true }))));
};

var Text$5 = Typography.Text;
var Font$1 = function (_a) {
    var font = _a.font;
    var _b = useSearchContext(), view = _b.view, text = _b.text, previewSize = _b.previewSize, setFont = _b.setFont, setEditFontOpen = _b.setEditFontOpen, setCurrentFontLoading = _b.setCurrentFontLoading;
    var isGrid = view === 'grid';
    return (React.createElement(Col, { span: isGrid ? 6 : 24 },
        React.createElement(Card, { onClick: function () {
                setFont(font);
                setEditFontOpen(true);
                WebFont.load({
                    classes: false,
                    google: {
                        families: [font.family + ':' + font.variants.join(',') + ':' + font.subsets.join(',')],
                        text: 'acdedghilmnortuxBEILMNSTU0123456789-',
                    },
                    active: function () {
                        setCurrentFontLoading(false);
                    },
                    loading: function () {
                        setCurrentFontLoading(true);
                    },
                });
            } },
            React.createElement(Row, { gutter: [16, 16] },
                React.createElement(Col, { span: 12 },
                    React.createElement(Text$5, { strong: true }, font.family)),
                React.createElement(Col, { span: 12, style: { display: 'flex', justifyContent: 'flex-end' } },
                    React.createElement(Text$5, { type: "secondary" },
                        font.variants.length,
                        " Style",
                        font.variants.length === 1 ? '' : 's')),
                React.createElement(Col, { span: 24 },
                    React.createElement("div", { className: "preview", style: {
                            fontSize: previewSize,
                            fontFamily: "'" + font.family + "'",
                        } },
                        React.createElement("div", null,
                            React.createElement("span", null, text === 'fontName' ? font.family : text))))))));
};
var Fonts = function () {
    var _a = useSearchContext(), loading = _a.loading, fonts = _a.fonts;
    return (React.createElement(React.Fragment, null,
        loading && [1, 2, 3, 4, 5, 6, 7, 8].map(function (val) { return React.createElement(FontSkeleton, { key: val }); }),
        !loading && (React.createElement(React.Fragment, null, fonts.length ? (fonts.map(function (font, i) { return React.createElement(Font$1, { key: i, font: font }); })) : (React.createElement(Col, { span: 24, style: { textAlign: 'center' } },
            React.createElement(Text$5, { strong: true }, "No fonts found")))))));
};

var Search = Input.Search;
var SearchInput = function () {
    var _a = useSearchContext(), search = _a.search, setSearch = _a.setSearch;
    return React.createElement(Search, { placeholder: "input search text", value: search, onChange: function (e) { return setSearch(e.target.value); } });
};

var SortInput = function () {
    var _a = useSearchContext(), sort = _a.sort, setSort = _a.setSort;
    return (React.createElement(Select, { value: sort, style: { width: '100%' }, onChange: setSort, options: [
            { label: 'Trending', value: 'trending' },
            { label: 'Popularity', value: 'popularity' },
            { label: 'Alpha', value: 'alpha' },
            { label: 'Date', value: 'date' },
            { label: 'Style', value: 'style' }
        ] }));
};

var ToggleView = function () {
    var _a = useSearchContext(), view = _a.view, setView = _a.setView;
    return (React.createElement(Segmented, { value: view, onChange: function (value) { return setView(value.toString()); }, options: [
            {
                label: '',
                value: 'grid',
                icon: React.createElement(AppstoreOutlined, null),
            },
            {
                label: '',
                value: 'list',
                icon: React.createElement(BarsOutlined, null),
            },
        ] }));
};

var TextArea = Input.TextArea;
var Text$4 = Typography.Text;
var Preview = function () {
    var _a = useSearchContext(), text = _a.text, setText = _a.setText, randomizeText = _a.randomizeText, previewSize = _a.previewSize, setPreviewSize = _a.setPreviewSize;
    return (React.createElement(Row, { gutter: [16, 16] },
        React.createElement(Col, { span: 24 },
            React.createElement(Button, { type: "text", icon: React.createElement(ReloadOutlined, null), onClick: randomizeText }, "Randomize")),
        React.createElement(Col, { span: 24 },
            React.createElement(TextArea, { placeholder: "Type something...", value: text, onChange: function (e) { return setText(e.target.value); } })),
        React.createElement(Col, { span: 4, style: { alignContent: 'center' } },
            React.createElement(Text$4, { type: "secondary" },
                previewSize,
                "px")),
        React.createElement(Col, { span: 20 },
            React.createElement(Slider, { value: previewSize, onChange: setPreviewSize }))));
};

var Text$3 = Typography.Text;
var Filters = function () {
    var _a = useSearchContext(), category = _a.category, setCategory = _a.setCategory, subset = _a.subset, setSubset = _a.setSubset;
    return (React.createElement(Row, { gutter: [16, 16] },
        React.createElement(Col, { span: 24 },
            React.createElement("div", { style: { marginBottom: 5 } },
                React.createElement(Text$3, { type: "secondary" }, "Category:")),
            React.createElement(Radio.Group, { value: category, onChange: function (e) { return setCategory(e.target.value); }, options: [
                    { label: 'All', value: 'all' },
                    { label: 'Sans-Serif', value: 'sans-serif' },
                    { label: 'Serif', value: 'serif' },
                    { label: 'Display', value: 'display' },
                    { label: 'Handwriting', value: 'handwriting' },
                    { label: 'Monospace', value: 'monospace' },
                ], optionType: "button", buttonStyle: "solid" })),
        React.createElement(Col, { span: 24 },
            React.createElement("div", { style: { marginBottom: 5 } },
                React.createElement(Text$3, { type: "secondary" }, "Subset:")),
            React.createElement(Radio.Group, { value: subset, onChange: function (e) { return setSubset(e.target.value); }, options: [
                    { label: 'All', value: 'all' },
                    { label: 'Arabic', value: 'arabic' },
                    { label: 'Cyrillic', value: 'cyrillic' },
                    { label: 'Cyrillic Extended', value: 'cyrillic-ext' },
                    { label: 'Devanagari', value: 'devanagari' },
                    { label: 'Greek', value: 'greek' },
                    { label: 'Greek Extended', value: 'greek-ext' },
                    { label: 'Hebrew', value: 'hebrew' },
                    { label: 'Khmer', value: 'khmer' },
                    { label: 'Latin', value: 'latin' },
                    { label: 'Latin Extended', value: 'latin-ext' },
                    { label: 'Tamil', value: 'tamil' },
                    { label: 'Telugu', value: 'telugu' },
                    { label: 'Thai', value: 'thai' },
                    { label: 'Vietnamese', value: 'vietnamese' },
                ], optionType: "button", buttonStyle: "solid" }))));
};

var ResetAllButton = function () {
    var resetAll = useSearchContext().resetAll;
    return (React.createElement(Button, { type: "text", icon: React.createElement(ReloadOutlined, null), onClick: resetAll }, "Reset"));
};

var Text$2 = Typography.Text;
var ResultsCount = function () {
    var fonts = useSearchContext().fonts;
    return (React.createElement(Text$2, { type: "secondary" },
        fonts.length,
        " results"));
};

var getLinkFormats = function (font) {
    var family = font.family.replace(/ /g, '+');
    var url = 'https://fonts.googleapis.com/css?family=' + family;
    var category = font.category;
    if (category === 'display' || category === 'handwriting') {
        category = 'cursive';
    }
    if (font.variants.length > 0) {
        url = url + ':' + font.variants.join(',');
    }
    if (font.subsets.length > 0) {
        url = url + '&subset=' + font.subsets.join(',');
    }
    var value = "'" + font.family + "', " + category;
    var html = "<link href='" + url + "' rel='stylesheet' type='text/css'>";
    var css = '@import url(' + url + ');';
    var google = 'https://fonts.google.com/specimen/' + family;
    return {
        html: html,
        css: css,
        fontFamily: value,
        google: google,
        url: url
    };
};
var transformVariantsLinks = function (variants, fontFamily) {
    return variants.map(function (variant) {
        var slug = variant;
        var style = '';
        var fontStyle = 'normal';
        var fontWeight = 400;
        if (slug === 'regular') {
            slug = '400';
        }
        else if (slug === 'italic') {
            slug = '400italic';
            style = 'Italic';
            fontStyle = 'italic';
        }
        else if (slug.length === 3) {
            fontWeight = parseInt(slug);
        }
        else {
            style = 'Italic';
            fontStyle = 'italic';
            fontWeight = parseInt(slug.substring(0, 3));
        }
        return {
            label: weightLabels[fontWeight],
            variant: variant,
            slug: slug,
            style: style,
            weight: fontWeight,
            css: {
                fontFamily: fontFamily,
                fontStyle: fontStyle,
                fontWeight: fontWeight,
            },
        };
    });
};

var useFontSettings = function (fonts, setFonts, onChange) {
    var saveFont = useCallback(function (font) {
        var fontToUpdate = fonts.findIndex(function (thisFont) { return thisFont.family === font.family; });
        if (fontToUpdate >= 0) {
            var fontsToUpdate = __spreadArray([], fonts, true);
            fontsToUpdate[fontToUpdate] = font;
            setFonts(fontsToUpdate);
            onChange === null || onChange === void 0 ? void 0 : onChange(fontsToUpdate);
        }
        else {
            console.log(__spreadArray(__spreadArray([], fonts, true), [font], false));
            setFonts(__spreadArray(__spreadArray([], fonts, true), [font], false));
            onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], fonts, true), [font], false));
        }
    }, [fonts, setFonts, onChange]);
    var deleteFont = useCallback(function (font) {
        var fontToDelete = fonts.findIndex(function (thisFont) { return thisFont.family === font.family; });
        if (fontToDelete > -1) {
            var fontsToUpdate = __spreadArray([], fonts, true);
            fontsToUpdate.splice(fontToDelete, 1);
            setFonts(fontsToUpdate);
            onChange === null || onChange === void 0 ? void 0 : onChange(fontsToUpdate);
        }
    }, [fonts, setFonts, onChange]);
    return {
        saveFont: saveFont,
        deleteFont: deleteFont,
    };
};

var Text$1 = Typography.Text;
var EditFont = function (_a) {
    var onChange = _a.onChange;
    var _b = useSearchContext(), font = _b.font, savedFonts = _b.savedFonts, setSavedFonts = _b.setSavedFonts, editFontOpen = _b.editFontOpen, setEditFontOpen = _b.setEditFontOpen, currentFontLoading = _b.currentFontLoading;
    var saveFont = useFontSettings(savedFonts, setSavedFonts, onChange).saveFont;
    var currentSavedFont = useMemo(function () { return savedFonts.find(function (f) { return f.family === font.family; }); }, [savedFonts, font]);
    var allFalse = useCallback(function (obj) { return Object.values(obj).every(function (value) { return !value; }); }, []);
    var getCheckboxValues = useCallback(function (item) {
        return font[item].reduce(function (acc, search) {
            var _a;
            if (!search)
                return acc;
            if (!currentSavedFont)
                acc[search] = true;
            else
                acc[search] = Boolean((_a = currentSavedFont === null || currentSavedFont === void 0 ? void 0 : currentSavedFont[item]) === null || _a === void 0 ? void 0 : _a.includes(search));
            return acc;
        }, {});
    }, [font, currentSavedFont]);
    var _c = useState(getCheckboxValues('variants')), variants = _c[0], setVariants = _c[1];
    var _d = useState(getCheckboxValues('subsets')), subsets = _d[0], setSubsets = _d[1];
    useEffect(function () {
        setVariants(getCheckboxValues('variants'));
        setSubsets(getCheckboxValues('subsets'));
    }, [font, currentSavedFont]);
    return (React.createElement(Modal, { title: font.family, okText: "Save", open: editFontOpen, onOk: function () {
            if (allFalse(variants) || allFalse(subsets)) {
                message.info('Select at least one subset and one variant');
            }
            else {
                saveFont(__assign(__assign({}, font), { variants: Object.keys(variants).filter(function (key) { return variants[key]; }), subsets: Object.keys(subsets).filter(function (key) { return subsets[key]; }) }));
                setEditFontOpen(false);
            }
        }, onCancel: function () { return setEditFontOpen(false); } },
        React.createElement(Row, { gutter: 16 },
            React.createElement(Col, { span: 12 },
                React.createElement("div", null,
                    React.createElement(Text$1, { strong: true }, "Variants")),
                currentFontLoading && React.createElement(Skeleton, { active: true }),
                !currentFontLoading && transformVariantsLinks(font.variants.sort(), getLinkFormats(font).fontFamily).map(function (variant, i) {
                    return (React.createElement("div", { key: i },
                        React.createElement(Checkbox, { style: variant.css, checked: variants[variant.variant], onChange: function (e) {
                                var _a;
                                return setVariants(__assign(__assign({}, variants), (_a = {}, _a[variant.variant] = e.target.checked, _a)));
                            } },
                            variant.label,
                            " ",
                            variant.weight,
                            " ",
                            variant.style)));
                })),
            React.createElement(Col, { span: 12 },
                React.createElement("div", null,
                    React.createElement(Text$1, { strong: true }, "Subsets")),
                currentFontLoading && React.createElement(Skeleton, { active: true }),
                !currentFontLoading && font.subsets.map(function (subset) {
                    return (React.createElement("div", { key: subset },
                        React.createElement(Checkbox, { checked: subsets[subset], onChange: function (e) {
                                var _a;
                                return setSubsets(__assign(__assign({}, subsets), (_a = {}, _a[subset] = e.target.checked, _a)));
                            } }, subset)));
                })))));
};

var Text = Typography.Text;
var Font = function (_a) {
    var font = _a.font, onChange = _a.onChange;
    var _b = useSearchContext(), savedFonts = _b.savedFonts, setSavedFonts = _b.setSavedFonts, setFont = _b.setFont, setEditFontOpen = _b.setEditFontOpen;
    var deleteFont = useFontSettings(savedFonts, setSavedFonts, onChange).deleteFont;
    return (React.createElement(Col, { span: 24 },
        React.createElement(Card, { style: { cursor: 'pointer' }, onClick: function () {
                WebFont.load({
                    classes: false,
                    google: {
                        families: [font.family + ':' + font.variants.join(',') + ':' + font.subsets.join(',')],
                        text: 'acdedghilmnortuxBEILMNSTU0123456789-',
                    },
                    active: function () {
                        setFont(font);
                        setEditFontOpen(true);
                    },
                });
            } },
            React.createElement(Row, { gutter: 16 },
                React.createElement(Col, { span: 21 },
                    React.createElement("div", { style: {
                            fontFamily: "'" + font.family + "'",
                        } },
                        React.createElement("div", null,
                            React.createElement("span", null, font.family)))),
                React.createElement(Col, { span: 3 },
                    React.createElement(Button, { type: "text", icon: React.createElement(CloseOutlined, null), onClick: function (e) {
                            e.stopPropagation();
                            deleteFont(font);
                        } }))))));
};
var AddedFonts = function (_a) {
    var onChange = _a.onChange;
    var _b = useSearchContext(), savedFonts = _b.savedFonts, fonts = _b.fonts;
    return (React.createElement(React.Fragment, null, savedFonts.length ? (savedFonts.map(function (font, i) { var _a; return React.createElement(Font, { key: i, onChange: onChange, font: (_a = fonts.find(function (f) { return f.family === font.family; })) !== null && _a !== void 0 ? _a : font }); })) : (React.createElement(Col, { span: 24, style: { textAlign: 'center' } },
        React.createElement(Text, { strong: true }, "You haven't added any fonts")))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "";
styleInject(css_248z);

var SearchLayout = function (_a) {
    var addedFonts = _a.addedFonts, onChange = _a.onChange;
    var _b = useState(false), openFilters = _b[0], setOpenFilters = _b[1];
    var _c = useState(false), openSettings = _c[0], setOpenSettings = _c[1];
    return (React.createElement(SearchProvider, { addedFonts: addedFonts },
        React.createElement(EditFont, { onChange: onChange }),
        React.createElement(Space, { direction: "vertical", size: "middle", style: { display: 'flex' } },
            React.createElement(BackTop, null),
            React.createElement(Drawer, { title: React.createElement(ResetAllButton, null), placement: "right", onClose: function () { return setOpenFilters(false); }, open: openFilters },
                React.createElement(Divider, { orientation: "left" }, "Preview"),
                React.createElement(Preview, null),
                React.createElement(Divider, { orientation: "left" }, "Filters"),
                React.createElement(Filters, null)),
            React.createElement(Drawer, { title: "My Fonts", placement: "right", onClose: function () { return setOpenSettings(false); }, open: openSettings },
                React.createElement(Row, { gutter: [16, 16] },
                    React.createElement(AddedFonts, { onChange: onChange }))),
            React.createElement(Row, { gutter: [16, 16] },
                React.createElement(Col, { span: 21 },
                    React.createElement(SearchInput, null)),
                React.createElement(Col, { span: 3, className: "flex-end" },
                    React.createElement(SortInput, null)),
                React.createElement(Col, { span: 24 },
                    React.createElement(Button, { shape: "round", onClick: function () { return setOpenFilters(!openFilters); }, type: "primary", icon: openFilters ? React.createElement(CloseOutlined, null) : React.createElement(FilterOutlined, null), style: { marginRight: 5 } }, "Filters"),
                    React.createElement(Button, { shape: "round", onClick: function () { return setOpenSettings(!openSettings); }, type: openSettings ? 'primary' : 'default', icon: openSettings ? React.createElement(CloseOutlined, null) : React.createElement(SettingOutlined, null) }, "Manage My Fonts"))),
            React.createElement(Row, { gutter: [16, 16] },
                React.createElement(Col, { span: 12 },
                    React.createElement(ResultsCount, null)),
                React.createElement(Col, { span: 12, className: "flex-end" },
                    React.createElement(ToggleView, null))),
            React.createElement(Row, { gutter: [16, 16], className: 'fonts-body' },
                React.createElement(Fonts, null)))));
};

var plugin = function (editor, opts) {
    var options = __assign({ section: 'text', property: 'font-family' }, opts);
    var section = options.section, property = options.property;
    var pfx = editor.getConfig().stylePrefix;
    var sm = editor.Styles;
    var typeSelect = sm.getType('select');
    var loadFontToCanvas = function (font) {
        var doc = editor.Canvas.getDocument();
        var html = getLinkFormats(font).html;
        var link = editor.$(html);
        doc.head.appendChild(link.get(0));
    };
    editor.Commands.add('add-google-font', function (editor, _sender, options) {
        var _a;
        var name = options.name, value = options.value;
        var font = { id: value, name: name !== null && name !== void 0 ? name : value, value: value };
        var prop = editor.StyleManager.getProperty(String(section), String(property));
        // @ts-ignore
        prop === null || prop === void 0 ? void 0 : prop.set('addedFonts', __spreadArray(__spreadArray([], ((_a = prop === null || prop === void 0 ? void 0 : prop.get('addedFonts')) !== null && _a !== void 0 ? _a : []), true), [font], false));
    });
    editor.Commands.add('add-google-fonts', function (editor, _sender, options) {
        var fonts = options.fonts;
        var prop = editor.StyleManager.getProperty(String(section), String(property));
        // @ts-ignore
        prop === null || prop === void 0 ? void 0 : prop.view.set('addedFonts', fonts.map(function (font) { return ({ id: font.family.split(',')[0], name: font.family, value: font.family }); }));
        fonts.forEach(function (font) { return loadFontToCanvas(font); });
    });
    sm.addType('font-select', {
        model: typeSelect.model,
        view: typeSelect.view.extend({
            init: function () {
                this.listenTo(this.model, 'change:value', this.addGoogleFont);
                this.listenTo(this.model, 'change:addedFonts', this.updateOptions);
            },
            addGoogleFont: function () {
                var _a, _b;
                var googleFonts = this.googleFonts;
                var fontName = this.model.getFullValue(undefined, { skipImportant: true });
                var font = googleFonts.find(function (font) { return font.family === fontName; });
                var selInp = (_a = this.input) === null || _a === void 0 ? void 0 : _a.querySelector("option[value='".concat(fontName, "']"));
                if (font && selInp.getAttribute('data-gf')) {
                    editor.runCommand('add-google-font', { name: font.family.split(',')[0], value: font.family, font: font });
                    loadFontToCanvas(font);
                    // * add font to global manager
                    (_b = options.onSelectGoogleFont) === null || _b === void 0 ? void 0 : _b.call(options, font);
                }
            },
            templateInput: function () {
                return "<div class=\"".concat(pfx, "field ").concat(pfx, "select\"><span id=\"").concat(pfx, "input-holder\"><input type=\"text\" name=\"font\"></span><div class=\"").concat(pfx, "sel-arrow\"><div class=\"").concat(pfx, "d-s-arrow\"></div></div></div>");
            },
            updateOptions: function () {
                this.input = null;
                this.onRender();
            },
            onRender: function () {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    var optGroupStr_1, allFonts, _b, addedFonts, localFonts, inputH;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!!this.input) return [3 /*break*/, 4];
                                optGroupStr_1 = '';
                                if (!((_a = this.googleFonts) !== null && _a !== void 0)) return [3 /*break*/, 1];
                                _b = _a;
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, loadFontData('popularity', true)];
                            case 2:
                                _b = (_c.sent());
                                _c.label = 3;
                            case 3:
                                allFonts = _b;
                                addedFonts = this.model.get('addedFonts');
                                this.googleFonts = allFonts;
                                localFonts = __spreadArray(__spreadArray([
                                    {
                                        label: 'User Fonts',
                                        options: this.model.getOptions(),
                                    }
                                ], (addedFonts && addedFonts.length
                                    ? [
                                        {
                                            label: 'Added Google Fonts',
                                            options: addedFonts,
                                        },
                                    ]
                                    : []), true), [
                                    {
                                        label: 'Google Fonts',
                                        options: allFonts.map(function (font) { return ({
                                            name: font.family.split(',')[0],
                                            value: font.family,
                                            style: "font-family: \"".concat(font.family, "\";"),
                                            'data-gf': 1,
                                        }); }),
                                    },
                                ], false);
                                this.fontOptions = localFonts;
                                localFonts.forEach(function (group) {
                                    var groupStyle = group.style ? group.style.replace(/"/g, '&quot;') : '';
                                    var groupStyleAttr = groupStyle ? "style=\"".concat(groupStyle, "\"") : '';
                                    var groupLabel = group.label.replace(/"/g, '&quot;');
                                    var optionsStr = '';
                                    group.options.forEach(function (option) {
                                        var name = option.name || option.value;
                                        var style = option.style ? option.style.replace(/"/g, '&quot;') : '';
                                        var gf = option['data-gf'] ? option['data-gf'] : '';
                                        var gfAttr = gf ? 'data-gf="1"' : '';
                                        var styleAttr = style ? "style=\"".concat(style, "\"") : '';
                                        var value = option.value.replace(/"/g, '&quot;');
                                        optionsStr += "<option value=\"".concat(value, "\" ").concat(styleAttr, " ").concat(gfAttr, ">").concat(name, "</option>");
                                    });
                                    optGroupStr_1 += "<optgroup label=\"".concat(groupLabel, "\" ").concat(groupStyleAttr, ">").concat(optionsStr, "</optgroup>");
                                });
                                inputH = this.el.querySelector("#".concat(pfx, "input-holder"));
                                inputH.innerHTML = "<select>".concat(optGroupStr_1, "</select>");
                                this.input = inputH.firstChild;
                                _c.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            },
        }),
    });
};

export { SearchLayout as GoogleFontsSearch, getLinkFormats, plugin as grapesjsGoogleFonts };
//# sourceMappingURL=index.js.map
