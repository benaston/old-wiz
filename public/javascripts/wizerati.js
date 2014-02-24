/* Zepto v1.1.3 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[T.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function U(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);;//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined;
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(Zepto);//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
//
//     Some code (c) 2005, 2013 jQuery Foundation, Inc. and other contributors

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                var fn = $.isFunction(fns[i]) && fns[i]
                deferred[tuple[1]](function(){
                  var returned = fn && fn.apply(this, arguments)
                  if (returned && $.isFunction(returned.promise)) {
                    returned.promise()
                        .done(defer.resolve)
                        .fail(defer.reject)
                        .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)
                  }
                })
              })
              fns = null
            }).promise()
          },

          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },
        deferred = {}

    $.each(tuples, function(i, tuple){
      var list = tuple[2],
          stateString = tuple[3]

      promise[tuple[1]] = list.add

      if (stateString) {
        list.add(function(){
          state = stateString
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    promise.promise(deferred)
    if (func) func.call(deferred, deferred)
    return deferred
  }

  $.when = function(sub) {
    var resolveValues = slice.call(arguments),
        len = resolveValues.length,
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0,
        deferred = remain === 1 ? sub : Deferred(),
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)
            } else if (!(--remain)) {
              deferred.resolveWith(ctx, val)
            }
          }
        }

    if (len > 1) {
      progressValues = new Array(len)
      progressContexts = new Array(len)
      resolveContexts = new Array(len)
      for ( ; i < len; ++i ) {
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
              .done(updateFn(i, resolveContexts, resolveValues))
              .fail(deferred.reject)
              .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain
        }
      }
    }
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(Zepto);//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
      push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
      nativeForEach      = ArrayProto.forEach,
      nativeMap          = ArrayProto.map,
      nativeReduce       = ArrayProto.reduce,
      nativeReduceRight  = ArrayProto.reduceRight,
      nativeFilter       = ArrayProto.filter,
      nativeEvery        = ArrayProto.every,
      nativeSome         = ArrayProto.some,
      nativeIndexOf      = ArrayProto.indexOf,
      nativeLastIndexOf  = ArrayProto.lastIndexOf,
      nativeIsArray      = Array.isArray,
      nativeKeys         = Object.keys,
      nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
          var a = left.criteria;
          var b = right.criteria;
          if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
          }
          return left.index - right.index;
        }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate, context) {
    predicate = lookupIterator(predicate);
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate.call(context, elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

  // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
            a.global == b.global &&
            a.multiline == b.multiline &&
            a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
        _.isFunction(bCtor) && (bCtor instanceof bCtor))
        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };
//  _.templateSettings = {
//    evaluate    : /<\u0025([\s\S]+?)\u0025>/g,
//    interpolate : /<\u0025=([\s\S]+?)\u0025>/g,
//    escape      : /<\u0025-([\s\S]+?)\u0025>/g
//  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
          .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);;/*jshint onevar: false */
(function (root) {

    var toString = Object.prototype.toString;

    var _c = function (key, value, options) {

        options = options || {};

        if (arguments.length > 1 && toString.call(value) !== "[object Object]") {

            if (value === null || typeof value == "undefined") {
                options.expires = -1;
            }

            if (toString.call(options.expires) == "[object Number]") {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return ( document.cookie = [
                encodeURIComponent(key), "=",
                options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join('') );
        }

        options = value || {};

        var result,
            decode = options.raw ? function (s) {
                return s;
            } : decodeURIComponent;

        return ( result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie) ) ?
            decode(result[1]) :
            null;
    };

    // Attach to underscore as a mixin
    if (typeof root._ !== "undefined") {
        root._.mixin({ cookie: _c });

        // Or just assign it to window._
    } else {
        root._ = _c;
    }

})(this);
;//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){return function(c){return k(a.call(this,c),b)}}function d(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function e(){}function f(a){w(a),h(this,a)}function g(a){var b=q(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function i(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&qb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function l(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&db.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function o(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&s(a[d])!==s(b[d]))&&g++;return g+f}function p(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Tb[a]||Ub[b]||b}return a}function q(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=p(c),b&&(d[b]=a[c]));return d}function r(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}db[b]=function(e,f){var g,h,i=db.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=db().utc().set(d,a);return i.call(db.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function s(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function t(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function u(a){return v(a)?366:365}function v(a){return a%4===0&&a%100!==0||a%400===0}function w(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[jb]<0||a._a[jb]>11?jb:a._a[kb]<1||a._a[kb]>t(a._a[ib],a._a[jb])?kb:a._a[lb]<0||a._a[lb]>23?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>59?nb:a._a[ob]<0||a._a[ob]>999?ob:-1,a._pf._overflowDayOfYear&&(ib>b||b>kb)&&(b=kb),a._pf.overflow=b)}function x(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function y(a){return a?a.toLowerCase().replace("_","-"):a}function z(a,b){return b._isUTC?db(a).zone(b._offset||0):db(a).local()}function A(a,b){return b.abbr=a,pb[a]||(pb[a]=new e),pb[a].set(b),pb[a]}function B(a){delete pb[a]}function C(a){var b,c,d,e,f=0,g=function(a){if(!pb[a]&&rb)try{require("./lang/"+a)}catch(b){}return pb[a]};if(!a)return db.fn._lang;if(!m(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=y(a[f]).split("-"),b=e.length,d=y(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&o(e,d,!0)>=b-1)break;b--}f++}return db.fn._lang}function D(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function E(a){var b,c,d=a.match(vb);for(b=0,c=d.length;c>b;b++)d[b]=Yb[d[b]]?Yb[d[b]]:D(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function F(a,b){return a.isValid()?(b=G(b,a.lang()),Vb[b]||(Vb[b]=E(b)),Vb[b](a)):a.lang().invalidDate()}function G(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(wb.lastIndex=0;d>=0&&wb.test(a);)a=a.replace(wb,c),wb.lastIndex=0,d-=1;return a}function H(a,b){var c,d=b._strict;switch(a){case"DDDD":return Ib;case"YYYY":case"GGGG":case"gggg":return d?Jb:zb;case"Y":case"G":case"g":return Lb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Kb:Ab;case"S":if(d)return Gb;case"SS":if(d)return Hb;case"SSS":if(d)return Ib;case"DDD":return yb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Cb;case"a":case"A":return C(b._l)._meridiemParse;case"X":return Fb;case"Z":case"ZZ":return Db;case"T":return Eb;case"SSSS":return Bb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Hb:xb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return xb;default:return c=new RegExp(P(O(a.replace("\\","")),"i"))}}function I(a){a=a||"";var b=a.match(Db)||[],c=b[b.length-1]||[],d=(c+"").match(Qb)||["-",0,0],e=+(60*d[1])+s(d[2]);return"+"===d[0]?-e:e}function J(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[jb]=s(b)-1);break;case"MMM":case"MMMM":d=C(c._l).monthsParse(b),null!=d?e[jb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[kb]=s(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=s(b));break;case"YY":e[ib]=s(b)+(s(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ib]=s(b);break;case"a":case"A":c._isPm=C(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[lb]=s(b);break;case"m":case"mm":e[mb]=s(b);break;case"s":case"ss":e[nb]=s(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ob]=s(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=I(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function K(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=M(a),a._w&&null==a._a[kb]&&null==a._a[jb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ib]?db().weekYear():a._a[ib]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Z(f(g.GG),g.W||1,g.E,4,1):(i=C(a._l),j=null!=g.d?V(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Z(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ib]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ib]?d[ib]:a._a[ib],a._dayOfYear>u(e)&&(a._pf._overflowDayOfYear=!0),c=U(e,0,a._dayOfYear),a._a[jb]=c.getUTCMonth(),a._a[kb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[lb]+=s((a._tzm||0)/60),l[mb]+=s((a._tzm||0)%60),a._d=(a._useUTC?U:T).apply(null,l)}}function L(a){var b;a._d||(b=q(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],K(a))}function M(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function N(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=C(a._l),h=""+a._i,i=h.length,j=0;for(d=G(a._f,g).match(vb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(H(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Yb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),J(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[lb]<12&&(a._a[lb]+=12),a._isPm===!1&&12===a._a[lb]&&(a._a[lb]=0),K(a),w(a)}function O(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function P(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(f=0;f<a._f.length;f++)g=0,c=h({},a),c._pf=b(),c._f=a._f[f],N(c),x(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));h(a,d||c)}function R(a){var b,c,d=a._i,e=Mb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Ob.length;c>b;b++)if(Ob[b][1].exec(d)){a._f=Ob[b][0]+(e[6]||" ");break}for(b=0,c=Pb.length;c>b;b++)if(Pb[b][1].exec(d)){a._f+=Pb[b][0];break}d.match(Db)&&(a._f+="Z"),N(a)}else a._d=new Date(d)}function S(b){var c=b._i,d=sb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?R(b):m(c)?(b._a=c.slice(0),K(b)):n(c)?b._d=new Date(+c):"object"==typeof c?L(b):b._d=new Date(c)}function T(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function U(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function V(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function W(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function X(a,b,c){var d=hb(Math.abs(a)/1e3),e=hb(d/60),f=hb(e/60),g=hb(f/24),h=hb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",hb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,W.apply({},i)}function Y(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=db(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Z(a,b,c,d,e){var f,g,h=U(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:u(a-1)+g}}function $(a){var b=a._i,c=a._f;return null===b?db.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=C().preparse(b)),db.isMoment(b)?(a=i(b),a._d=new Date(+b._d)):c?m(c)?Q(a):N(a):S(a),new f(a))}function _(a,b){db.fn[a]=db.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),db.updateOffset(this),this):this._d["get"+c+b]()}}function ab(a){db.duration.fn[a]=function(){return this._data[a]}}function bb(a,b){db.duration.fn["as"+a]=function(){return+this/b}}function cb(a){var b=!1,c=db;"undefined"==typeof ender&&(a?(gb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},h(gb.moment,c)):gb.moment=db)}for(var db,eb,fb="2.5.1",gb=this,hb=Math.round,ib=0,jb=1,kb=2,lb=3,mb=4,nb=5,ob=6,pb={},qb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},rb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,sb=/^\/?Date\((\-?\d+)/i,tb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ub=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,vb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,wb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,xb=/\d\d?/,yb=/\d{1,3}/,zb=/\d{1,4}/,Ab=/[+\-]?\d{1,6}/,Bb=/\d+/,Cb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Db=/Z|[\+\-]\d\d:?\d\d/gi,Eb=/T/i,Fb=/[\+\-]?\d+(\.\d{1,3})?/,Gb=/\d/,Hb=/\d\d/,Ib=/\d{3}/,Jb=/\d{4}/,Kb=/[+-]?\d{6}/,Lb=/[+-]?\d+/,Mb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Nb="YYYY-MM-DDTHH:mm:ssZ",Ob=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Pb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Qb=/([\+\-]|\d\d)/gi,Rb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Sb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Tb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ub={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vb={},Wb="DDD w W M D d".split(" "),Xb="M D H h m s w W".split(" "),Yb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+k(Math.abs(a),6)},gg:function(){return k(this.weekYear()%100,2)},gggg:function(){return k(this.weekYear(),4)},ggggg:function(){return k(this.weekYear(),5)},GG:function(){return k(this.isoWeekYear()%100,2)},GGGG:function(){return k(this.isoWeekYear(),4)},GGGGG:function(){return k(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return s(this.milliseconds()/100)},SS:function(){return k(s(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},SSSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+":"+k(s(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+k(s(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Zb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Wb.length;)eb=Wb.pop(),Yb[eb+"o"]=d(Yb[eb],eb);for(;Xb.length;)eb=Xb.pop(),Yb[eb+eb]=c(Yb[eb],2);for(Yb.DDDD=c(Yb.DDD,3),h(e.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=db.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=db([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return Y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),db=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),$(g)},db.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),$(g).utc()},db.unix=function(a){return db(1e3*a)},db.duration=function(a,b){var c,d,e,f=a,h=null;return db.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=tb.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:s(h[kb])*c,h:s(h[lb])*c,m:s(h[mb])*c,s:s(h[nb])*c,ms:s(h[ob])*c}):(h=ub.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new g(f),db.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},db.version=fb,db.defaultFormat=Nb,db.updateOffset=function(){},db.lang=function(a,b){var c;return a?(b?A(y(a),b):null===b?(B(a),a="en"):pb[a]||C(a),c=db.duration.fn._lang=db.fn._lang=C(a),c._abbr):db.fn._lang._abbr},db.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),C(a)},db.isMoment=function(a){return a instanceof f||null!=a&&a.hasOwnProperty("_isAMomentObject")},db.isDuration=function(a){return a instanceof g},eb=Zb.length-1;eb>=0;--eb)r(Zb[eb]);for(db.normalizeUnits=function(a){return p(a)},db.invalid=function(a){var b=db.utc(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b},db.parseZone=function(a){return db(a).parseZone()},h(db.fn=f.prototype,{clone:function(){return db(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=db(this).utc();return 0<a.year()&&a.year()<=9999?F(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&o(this._a,(this._isUTC?db.utc(this._a):db(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=F(this,a||db.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=z(a,this),g=6e4*(this.zone()-f.zone());return b=p(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-db(this).startOf("month")-(f-db(f).startOf("month")))/d,e-=6e4*(this.zone()-db(this).startOf("month").zone()-(f.zone()-db(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:j(e)},from:function(a,b){return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(db(),a)},calendar:function(){var a=z(db(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return v(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=V(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),db.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=p(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=p(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+db(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+db(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+z(a,this).startOf(b)},min:function(a){return a=db.apply(null,arguments),this>a?this:a},max:function(a){return a=db.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=I(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&l(this,db.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?db(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return t(this.year(),this.month())},dayOfYear:function(a){var b=hb((db(this).startOf("day")-db(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=Y(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=Y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=Y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=p(a),this[a]()},set:function(a,b){return a=p(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=C(b),this)}}),eb=0;eb<Rb.length;eb++)_(Rb[eb].toLowerCase().replace(/s$/,""),Rb[eb]);_("year","FullYear"),db.fn.days=db.fn.day,db.fn.months=db.fn.month,db.fn.weeks=db.fn.week,db.fn.isoWeeks=db.fn.isoWeek,db.fn.toJSON=db.fn.toISOString,h(db.duration.fn=g.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=j(e/1e3),h.seconds=a%60,b=j(a/60),h.minutes=b%60,c=j(b/60),h.hours=c%24,f+=j(c/24),h.days=f%30,g+=j(f/30),h.months=g%12,d=j(g/12),h.years=d},weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*s(this._months/12)},humanize:function(a){var b=+this,c=X(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=db.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=db.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=p(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=p(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:db.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(eb in Sb)Sb.hasOwnProperty(eb)&&(bb(eb,Sb[eb]),ab(eb.toLowerCase()));bb("Weeks",6048e5),db.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},db.lang("en",{ordinal:function(a){var b=a%10,c=1===s(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),rb?(module.exports=db,cb(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&cb(d.config().noGlobal===a),db}):cb()}).call(this);;'use strict';
window.invertebrate = {}; //'namespace' in the global namespace to hang stuff off

/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

(function ($) {

  var o = $({});

  $.subscribe = function () {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function () {
    o.off.apply(o, arguments);
  };

  $.publish = function () {
    o.trigger.apply(o, arguments);
  };

}($));
;(function (invertebrate) {
  'use strict';

  function TemplateUriHelper(configSvc, serverUriSelectionFunc) {

    if (!(this instanceof invertebrate.TemplateUriHelper)) {
      return new invertebrate.TemplateUriHelper(configSvc, serverUriSelectionFunc);
    }

    var that = this,
        _configSvc = null;

    this.serverUriSelectionFunc = function () {
      return './template-server/';
    }; //see note 1

    this.getTemplateUri = function (templateName) {
      if (!templateName) {
        throw 'templateName not supplied.';
      }

      var templatesUriPart = _configSvc.config.templatesUriPart;
      if (!templatesUriPart) {
        throw 'templatesUriPart empty.';
      }
      var serverUri = that.serverUriSelectionFunc();
      if (!serverUri) {
        throw 'serverUri empty.';
      }

      return '' + serverUri + templatesUriPart + templateName;
    };

    this.getPostRenderScriptUri = function (postRenderScriptName) {
      if (!postRenderScriptName) {
        throw 'postRenderScriptName not supplied.';
      }

      var postRenderScriptsUriPart = _configSvc.config.templatePostRenderScriptsUriPart;
      if (!postRenderScriptsUriPart) {
        throw 'postRenderScriptsUriPart empty.';
      }
      var serverUri = that.serverUriSelectionFunc();
      if (!serverUri) {
        throw 'serverUri empty.';
      }

      return '' + serverUri + postRenderScriptsUriPart + postRenderScriptName;
    };

    function init() {
      if (!configSvc) {
        throw 'configSvc not supplied';
      }

      _configSvc = configSvc;
      that.serverUriSelectionFunc = serverUriSelectionFunc || that.serverUriSelectionFunc;

      return that;
    }

    return init();
  }

  invertebrate.TemplateUriHelper = TemplateUriHelper;
}(invertebrate));;(function (invertebrate, $, _, moment) {
  'use strict';

  function App(templateServerSvc) {
    if (!(this instanceof invertebrate.App)) {
      return new invertebrate.App(templateServerSvc);
    }

    var that = this,
        _templateServerSvc = null,
        _templates = {},
        _templatePostRenderScripts = {},
        _inFlightRequests = {};

    //implements trivial string-based modularisation
    this.mod = function () {
      var mods = {};

      return function (name) {
        if (mods[name]) {
          return mods[name];
        }

        return mods[name] = {};
      };
    }();

    this.fetchTemplate = function (uri, options) {
      var defaultOptions = {
        done: function (metadata) {
        },
        fail: function (jqxhr, settings, exception) {
          console.log(exception);
          throw exception;
        }
      };

      options = _.extend({}, defaultOptions, options);

      //attempt to solve issue of sending off many requests for the same template before first request has returned
      if(_inFlightRequests[uri]) {
        setTimeout(function checkCacheForTemplate(){
          if (_templates[uri]) {
            return options.done(_templates[uri]);
          } else {
            setTimeout(checkCacheForTemplate, 10);
          }
        }, 10);

        return; /*critical*/
      }

      if (_templates[uri]) {
        return options.done(_templates[uri]);
      }

      _inFlightRequests[uri] = 'inFlight';
      return $.ajax({ url: uri, cache: false })
          .done(function (data) {
            delete _inFlightRequests[uri];
            var t = _.template(data);
            _templates[uri] = t;
            options.done(t);
          })
          .fail(function ajaxFail(jqxhr, settings, exception) {
            console.log(jqxhr.status);
          });

    };

    this.renderTemplate = function ($el, templateName, model, options) {
      var defaults = {
        done: function ($el) {
        },
        error: function (jqxhr, settings, exception) {
          console.log(exception);
          throw exception;
        },
        postRenderActionScriptUri: null
      };
      options = _.extend({}, defaults, options);

      if (!$el) {
        throw '$el1 not supplied';
      }
      if (!model) {
        throw 'model not supplied';
      }

      var templateUri = _templateServerSvc.getTemplateUri(templateName);
      //could modify to use self cache
      that.fetchTemplate(templateUri, { done: function (tmpl) {
        $el.html(tmpl({ model: _.clone(model), $: $, moment: moment }));

        if (options.postRenderScriptName) {
          var postRenderScriptUri = _templateServerSvc.getPostRenderScriptUri(options.postRenderScriptName);
          that.fetchTemplatePostRenderScript(postRenderScriptUri, function (data) {
            _templatePostRenderScripts[postRenderScriptUri]($, $el);
            options.done($el); //NOTE: this is in correct location (really)! Purpose: supply $el1 for possible additional work, like dom insertion
          });
        } else {
          options.done($el); //complete for when there is no post-render action script
        }
      }});
    };

    //invoked by this.renderTemplate if a post-render action script is specified.
    this.fetchTemplatePostRenderScript = function (uri, done) {
      if (!uri) {
        throw 'uri not supplied.';
      }
      if (!done) {
        throw 'done not supplied.';
      }

      if (_templatePostRenderScripts[uri]) {
        return done(_templatePostRenderScripts[uri]);
      }

      return $.ajax({url: uri, dataType: 'text', cache: false, success: function (data, textStatus, jqXHR) {
        _templatePostRenderScripts[uri] = eval(data).postRenderScript; //use Function
        done(data);
      }}).fail(function (jqxhr, settings, exception) {
            console.log(exception);
          });
    };

    function init() {
      if (!templateServerSvc) {
        throw 'templateServerSvc not supplied';
      }

      _templateServerSvc = templateServerSvc;
      return that;
    }

    return init();
  }

  invertebrate.App = App;
}(invertebrate, $, _, moment));
;'use strict';

Array.prototype.move = function (oldIndex, newIndex) {
  if (newIndex >= this.length) {
    var k = newIndex - this.length;
    while ((k--) + 1) {
      this.push(undefined);
    }
  }

  this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);

  return this; // for testing purposes
};
;(function (invertebrate, _) {
  'use strict';

  function Config(env) {
    if (!(this instanceof invertebrate.Config)) {
      return new invertebrate.Config(env);
    }

    var envEnum = null;

    this.devConfig = {};
    this.prodConfig = {};
    this.sharedConfig = {};

    //should be called from types implementing this prototype
    this.collateConfiguration = function () {
      this.envEnum = envEnum || invertebrate.env;

      switch (env) {
        case this.envEnum.dev:
          this.config = _.extend({}, this.sharedConfig, this.devConfig);
          break;
        case this.envEnum.prod:
          this.config = _.extend({}, this.sharedConfig, this.prodConfig);
          break;
        default:
          throw 'invalid environment: ' + env;
      }

      return this;
    };

    function init() {
      return this;
    }

    return init();
  }

  invertebrate.Config = Config;
}(invertebrate, _));
;'use strict';
(function (invertebrate) {
  invertebrate.env = {
    dev: '1',
    test: '2',
    prod: '3'
  };
}(invertebrate));
;(function (invertebrate) {
  'use strict';

  function Model() {

    if (!(this instanceof invertebrate.Model)) {
      return new invertebrate.Model();
    }

    var that = this;

    that.resourceName = 'not set';

    function init() {
//            $.subscribe('sync://syncableModels/', that.sync);

      return that;
    }

    return init();
  }

  invertebrate.Model = Model;

  invertebrate.Model.prototype.sync = function () {
    //this is a placeholder for future sync functionality
  };

  //todo: refactor off
  invertebrate.Model.isExtendedBy = function (child) {
    child.prototype = new invertebrate.Model();
    child.prototype.constructor = child;
  };
}(invertebrate));
;(function (invertebrate, $, _) {
  'use strict';

  function Router(defaultPageTitle) {

    var that = this,
        _defaultPageTitle = null;

    this.routes = {};

    this.registerRoute = function (uri, action, options) {
      var defaults = { silent: false, title: _defaultPageTitle, uriTransform: function (uri, dto) {
        return uri;
      }, isExternal: false };
      options = _.extend({}, defaults, options);

      that.routes[uri] = { action: action, options: options };
    };

    this.redirect = function (uri) {
//            history.pushState(null, null, uri);
      that.route(uri);
    };

    this.route = function (uri, dto, options) {
      options = options || { silent: false };

      var splitUri = uri.split('?');
      var uriWithoutQueryString = splitUri[0];
      var queryString = splitUri[1] || '';

      var escapedRoute = uriWithoutQueryString.replace(/\//g, '\\/');
      var pattern = new RegExp('^' + escapedRoute, 'g');

      var firstMatchingRouteUri = _.filter(Object.keys(that.routes), function (key) {
        return pattern.exec(key);
      })[0];

      if (!firstMatchingRouteUri) {
        throw 'no matching route ' + uriWithoutQueryString;
      }

      var route = that.routes[firstMatchingRouteUri];

      if (!route.options.silent && !options.silent) {
        document.title = route.options.title;
        history.pushState(null, null, route.options.uriTransform(uri, dto));
      }

      if (dto) {
        route.action(dto);

        return;
      }

      var queryStringArguments = queryString.split('&');
      route.action(extractQueryString(queryStringArguments, options.isExternal));
    };

    function routeHyperlink(evt) {
      var href = $(this).attr('href');
      var protocol = 'http//';

      /* jshint -W116 */
      if (href == null) {
        evt.preventDefault();
        return;
      }

      if (href.slice(protocol.length) !== protocol) {
        evt.preventDefault();
        that.route(href);
      }
    }

    function routeFormSubmission(evt) {
      var action = $(this).attr('action');
      var protocol = 'http//';

      if (action.slice(protocol.length) !== protocol) {
        evt.preventDefault();

        that.route(action, createDtoFromForm($(this)));
      }
    }

    function createDtoFromForm($form) {
      var dto = {};
      var $textfields = $form.find('input[type=text],input[type=password]');
      _.each($textfields, function ($t) {
        dto[$t.name] = $t.value;
      });

      var $selections = $form.find('input[type=radio]:checked,input[type=checkbox]:checked');
      _.each($selections, function ($r) {
        dto[$r.name] = $r.value;
      });

      return dto;
    }

    function extractQueryString(queryString, isExternal) {
      var dto = {};
      dto.__isInvertebrateExternal__ = isExternal;

      if (queryString === '') {
        return dto;
      }

      for (var i = 0; i < queryString.length; ++i) {
        var p = queryString[i].split('=');
        if (p.length !== 2) continue;
        dto[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
      }

      return dto;
    }

    function init() {
      if (!defaultPageTitle) {
        throw 'defaultPageTitle not supplied.';
      }

      _defaultPageTitle = defaultPageTitle;

      window.addEventListener('popstate', function (e) {
        that.route(location.pathname + location.search, null, {silent: true, isExternal: true });
      });

      $(document).on('click', 'a:not([data-bypass-router])', routeHyperlink);
      $(document).on('submit', 'form', routeFormSubmission);
    }

    init();
  }

  invertebrate.Router = Router;
}(invertebrate, $, _));
;(function (invertebrate, $) {
  'use strict';

  function SyncSvc(configSvc, serverUriSelectionFunc) {

    if (!(this instanceof invertebrate.SyncSvc)) {
      return new invertebrate.SyncSvc(configSvc, serverUriSelectionFunc);
    }

    var that = this,
        _configSvc = null,
        _syncInterval = null;

    this.serverUriSelectionFunc = function () {
      return './example/templateServer/';
    }; //see note 1

    this.metadata = {}; //scripts register themselves in here

    this.sync = function (options) {
      $.publish('sync://syncableModels/'); //review uri
    };

    this.start = function () {
      var syncInterval = _configSvc.syncInterval || 10000;

      _syncInterval = setInterval(function () {
        that.sync(null);
      }, syncInterval);
    };

    this.stop = function () {
      clearInterval(_syncInterval);
    };

    function init() {
      if (!configSvc) {
        throw 'configSvc not supplied';
      }

      _configSvc = configSvc;
      that.serverUriSelectionFunc = serverUriSelectionFunc || that.serverUriSelectionFunc;

      return that;
    }

    return init();
  }

  invertebrate.SyncSvc = SyncSvc;
}(invertebrate, $));;(function (invertebrate) {
  'use strict';

  var util = {};

  //`decoratingFunction` should accept arguments `context, done(err, result)`.
  util.decorate = function (objectToDecorate, decoratingFunction) {

    var decoratedObject = Object.create(objectToDecorate);

    getAllMethodNames(objectToDecorate).forEach(function (methodName) {
      decoratedObject[methodName] = function decoratorFunction() {
        var args = [].slice.call(arguments, 0);
        var context = { ctor: objectToDecorate.constructor.name,
          pType: objectToDecorate.prototype,
          objectType: typeof (objectToDecorate),
          methodName: methodName,
          timestamp: new Date().toISOString(),
          args: args.map(function (a) {
            if (typeof a === 'object') {
              return JSON.stringify(a);
            }

            return a;
          }) };

        return decoratingFunction(context, function done(err) {
          if (err) {
            throw err;
          }

          return objectToDecorate[methodName].apply(objectToDecorate, args);
        });
      };
    });

    return decoratedObject;
  };

  function getAllMethodNames(object) {
    return Object.getOwnPropertyNames(object).filter(function (property) {
      return typeof object[property] === 'function';
    });
  }


  invertebrate.util = util;

}(invertebrate));
;(function (invertebrate) {
  'use strict';

  function View(model) {
    if (!(this instanceof invertebrate.View)) {
      return new invertebrate.View(model);
    }

    var that = this;

    function init() {
      return that;
    }

    return init();
  }

  invertebrate.View = View;

  invertebrate.View.prototype.onDomReady = function () {
  };

  //todo: refactor off
  invertebrate.View.isExtendedBy = function (child) {
    child.prototype = new invertebrate.View();
    child.prototype.constructor = child;
  };
}(invertebrate));;//order of declaration matters here.
window.wizerati = {
  mod: function () {
    var mods = {};

    return function (name) {
      if (mods[name]) {

        return mods[name];
      }

      return mods[name] = {};
    };
  }()
};
;(function (app) {
  'use strict';

  function AccountService(wizeratiClient) {

    if (!(this instanceof app.AccountService)) {
      return new app.AccountService(wizeratiClient);
    }

    var that = this,
        _wizeratiClient = null;

    this.create = function (name, email, options) {
      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      if (!options.wait) {
        throw 'options.wait not supplied.';
      }

      var entity = new app.AccountEntity();
      entity.name = name;
      entity.email = email;
      options.wait();
      setTimeout(function () {
        options.success();
      }, 3000);
      //_wizeratiClient.Put(entity, options);
    };

    function init() {
      if (!wizeratiClient) {
        throw 'wizeratiClient not supplied';
      }

      _wizeratiClient = wizeratiClient;

      return that;
    }

    return init();
  }

  app.AccountService = AccountService;

}(wizerati));
;(function (app) {
  'use strict';

  //todo: split authorization and authentication?
  function AuthenticationService() {

    if (!(this instanceof app.AuthenticationService)) {
      return new app.AuthenticationService();
    }

    var that = this;

    this.authenticate = function (username, password) {

//          $.ajax({ url: options.searchUri, success: success, cache: false });
      return false;
    };

    function init() {

      return that;
    }

    return init();
  }

  app.AuthenticationService = AuthenticationService;

}(wizerati));
;(function (app, _) {
  'use strict';

  function CookieService() {

    if (!(this instanceof CookieService)) {
      return new CookieService();
    }

    var that = this,
        _cookieName = 'wizerati';

    this.getAuthorizationCookie = function () {
      return _.cookie(_cookieName);
    };

    this.setAuthorizationCookie = function (role) {
      _.cookie(_cookieName, role, { expires: 7, path: '/' });
    };

    this.deleteAuthorizationCookie = function () {
      _.cookie(_cookieName, null);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.CookieService = CookieService;

}(wizerati, _));
;(function (app) {
  'use strict';

  function CroniclService(loginService, config) {

    if (!(this instanceof app.CroniclService)) {
      return new app.CroniclService(loginService, config);
    }

    var that = this,
        _loginService = null,
        _config = null;

    this.getCroniclUri = function () {
      return _config.config.templateServerUris[_loginService.getCurrentRole()];
    };

    function init() {
      if (!loginService) {
        throw 'loginService not supplied';
      }
      if (!config) {
        throw 'config not supplied';
      }

      _loginService = loginService;
      _config = config;

      return that;
    }

    return init();
  }

  app.CroniclService = CroniclService;

}(wizerati));
;(function (app) {
  'use strict';

  function LogInService(cookieService) {

    if (!(this instanceof app.LogInService)) {
      return new app.LogInService(cookieService);
    }

    var that = this,
        _cookieService = null,
        _roleEnum = null;

    this.logIn = function (options) {
      if (!options.username && !options.role) {
        throw 'username not supplied';
      }
      if (!options.password && !options.role) {
        throw 'password not supplied';
      }

      if (options.role) {
        _cookieService.setAuthorizationCookie(options.role);
        initializeUI();

        return;
      } else {
        if (authenticate(options.username, options.password)) {
          _cookieService.setAuthorizationCookie(options.role);

          return;
        }
      }

      throw 'authentication failed.';
    };

    this.getCurrentRole = function () {
      var cookie = _cookieService.getAuthorizationCookie();

      if (!cookie) {
        return _roleEnum.ContractorStranger;
      }

      if (cookie !== _roleEnum.Contractor
          && cookie !== _roleEnum.Employer
          && cookie !== _roleEnum.ContractorStranger
          && cookie !== _roleEnum.EmployerStranger) {

        throw 'invalid role found in cookie "' + cookie + '"';
      }

      return cookie;
    };

    function authenticate(username, password) {
      return (username === 'ben' || username === 'sally');
    }

//    function authorize(username) {
//      if (username == 'ben') {
//        return _role = _roleEnum.Contractor;
//      } else if (username == 'sally') {
//        return _role = _roleEnum.Employer;
//      }
//
//      throw 'unauthorized.';
//    }

    //gets the value of a cookie by name
    //see: http://stackoverflow.com/questions/10730362/javascript-get-cookie-by-name
//    function getCookieValue(name) {
//      var parts = document.cookie.split(name + '=');
//      if (parts.length == 2) return parts.pop().split(';').shift();
//    }

    function init() {
      if (!cookieService) {
        throw 'cookieService not supplied';
      }

      _roleEnum = app.mod('enum').UserRole;

      _cookieService = cookieService;

      return that;
    }

    return init();
  }

  app.LogInService = LogInService;

}(wizerati));
;//try forcing service types to communicate with the UI only via routing and local storage?
(function (app, $) {
  'use strict';

  function SearchService(croniclService, itemCache) {

    if (!(this instanceof app.SearchService)) {
      return new app.SearchService(croniclService, itemCache);
    }

    var that = this,
        _croniclService = null,
        _itemCache = null;

    //rename to success, plus add timeout argument and error
    this.runSearch = function (keywords, location, rate, done) {
      done = !done ? function (data) {
      } : done;

      function success(data) {
        if (!data) {
          throw 'data not supplied';
        }

        var results = $.parseJSON(data);
        _itemCache.insert(results);
        done(results);
      }

      $.ajax({
        url: _croniclService.getCroniclUri() + 'search',
        success: success,
        cache: false
      });
    };

    function init() {
      if (!croniclService) {
        throw 'croniclService not supplied.';
      }

      if (!itemCache) {
        throw 'itemCache not supplied.';
      }

      _croniclService = croniclService;
      _itemCache = itemCache;

      return that;
    }

    return init();
  }

  app.SearchService = SearchService;

}(wizerati, $));

//throw 'next: use cronicl service to get the uri,
// then pass it into done argument (which should update the relevant models - and hence the UI)';

//use a factory for the search URI?
//var defaults = {
//    searchUri: './items?q=',
//    keywords: null,
//    filterModel: null,
//    pre: function () {
//    },
//    success: function () {
//    }, //function(data) - instantiate the relevant models from the json for use by the application
//    error: function (e) {
//        throw 'runSearch error: ' + e;
//    }
//};
//
//options = _.extend({}, defaults, options);
//
//if (!data) {
//    throw 'data not supplied';
//}

//            console.log(data);
//write the results to local storage, then return to the controller
//the controller can then coordinate the updating of any views

//var results = $.parseJSON(data);
//console.log(data);
//            var resultModels = [];
//
//            _.each(results, function (r) {
//                resultModels.push(_modelFactory.create(r));
//            });
//
//
//            _resultListModel.setResults(resultModels);

//                var resultModels = [];
//
//                _.each(results, function (r) {
//                    resultModels.push(_resultModelFactory.create(r));
//                });
;(function (app) {
  'use strict';

  function WizeratiClient(requestFactory, restClientFetch, restClientStore) {

    if (!(this instanceof app.WizeratiClient)) {
      return new app.WizeratiClient(requestFactory,
          restClientFetch,
          restClientStore);
    }

    var that = this,
        _requestFactory = null,
        _restClientFetch = null,
        _restClientStore = null;

    this.get = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForGet(entity);

      _restClientFetch.Execute(request, options);
    };

    this.put = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForPut(entity);

      _restClientStore.Execute(request, options);
    };

    this.post = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForPost(entity);

      _restClientStore.Execute(request, options);
    };

    function init() {
      if (!requestFactory) {
        throw 'requestFactory not supplied';
      }

      if (!restClientFetch) {
        throw 'restClientFetch not supplied';
      }

      if (!restClientStore) {
        throw 'restClientStore not supplied';
      }

      _requestFactory = requestFactory;
      _restClientFetch = restClientFetch;
      _restClientStore = restClientStore;

      return that;
    }

    return init();
  }

  app.WizeratiClient = WizeratiClient;

}(wizerati));
;(function (app, invertebrate, _) {
  'use strict';

  function Config(env) {
    if (!(this instanceof app.Config)) {
      return new app.Config(env);
    }

    var that = this,
        devConfig = {
      wizeratiUri: '/',
      templateServerUris: {
        '1': './contract/',
        '2': './contractor/',
        '3': './contract/',
        '4': './contractor/'
      },
      'enableTrace': 'false'
    },
    prodConfig = {
      wizeratiUri: 'https://www.wizerati.com/',
      templateServerUris: { Contractor: 'https://contract.croni.cl/',
        Employer: 'https://contractor.croni.cl/' }
    },
    sharedConfig = {
      templatesUriPart: 'templates/',
      templatePostRenderScriptsUriPart: 'template-post-render-scripts/',
      metadataUriPart: 'metadata'
    };

    function init() {
      if (!env) {
        throw 'env not supplied';
      }

      var config = _.extend(that, new invertebrate.Config(env));
      config.devConfig = devConfig;
      config.prodConfig = prodConfig;
      config.sharedConfig = sharedConfig;
      config.collateConfiguration();
      return config;
    }

    return init();
  }

  app.Config = Config;

}(wizerati, invertebrate, _));
;(function (app, $, invertebrate) {
  'use strict';

  function ActionedItemsModel() {

    if (!(this instanceof app.ActionedItemsModel)) {
      return new app.ActionedItemsModel();
    }

    var that = this,
        _actionedItems = {};

    this.updateEventUri = 'update://ActionedItemsModel/';

    this.isActioned = function (id) {
      return !!_actionedItems[id];
    };

    this.addActionedItemId = function (value) {
      _actionedItems[value] = value;

      $.publish(that.updateEventUri);
    };

    this.removeActionedItemId = function (value) {
      delete _actionedItems[value];

      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.ActionedItemsModel = ActionedItemsModel;
  invertebrate.Model.isExtendedBy(app.ActionedItemsModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function AdvertisersPanelModel() {

    if (!(this instanceof app.AdvertisersPanelModel)) {
      return new app.AdvertisersPanelModel();
    }

    var that = this,
        _isVisible = false;

    this.updateEventUri = 'update://AdvertisersPanelModel/';

    this.setIsVisible = function (value) {
      _isVisible = value;

      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.AdvertisersPanelModel = AdvertisersPanelModel;
  invertebrate.Model.isExtendedBy(app.AdvertisersPanelModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function DeleteFavoriteGroupConfirmationDialogModel() {

    if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogModel)) {
      return new app.DeleteFavoriteGroupConfirmationDialogModel();
    }

    var that = this,
        _favoriteGroupId = null,
        _isWaiting = '', //should identify the dom element to indicate waiting
        _notifications = []; //eg. [{ type: 'formField', id: 'foo' }]

    this.updateEventUri = 'update://DeleteFavoriteGroupConfirmationDialogModel/';

    this.getFavoriteGroupId = function () {
      return _favoriteGroupId;
    };

    this.setFavoriteGroupId = function (value, options) {
      options = options || { silent: false };

      if (!value) {
        throw 'value not supplied.';
      }

      _favoriteGroupId = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    this.getIsWaiting = function () {
      return _isWaiting;
    };

    this.setIsWaiting = function (value, options) {
      options = options || { silent: false };

      if (!value) {
        throw 'value not supplied.';
      }

      _isWaiting = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      return that;
    }

    return init();
  }

  app.DeleteFavoriteGroupConfirmationDialogModel = DeleteFavoriteGroupConfirmationDialogModel;
  invertebrate.Model.isExtendedBy(app.DeleteFavoriteGroupConfirmationDialogModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate, _) {
  'use strict';

  function FavoritesCubeModel(itemRepository, resultListModel) {

    if (!(this instanceof app.FavoritesCubeModel)) {
      return new app.FavoritesCubeModel(itemRepository,
          resultListModel);
    }

    var that = this,
        _favorites = [
          [], //top
          [], //left
          [], //front
          [], //right
          [], //bottom
          []  //back
        ],
        _faceLabels = ['my favorites', 'my favorites 2', 'my favorites 3', 'my favorites 4', 'my favorites 5', 'my favorites 6'],
        _itemRepository = null,
        _resultListModel = null,
        _faceActiveStatuses = [true, false, false, false, false, false],
        _modeEnum = app.mod('enum').FavoritesCubeMode,
        _mode = _modeEnum.Default;

    this.updateEventUri = 'update://FavoritesCubeModel/';
    this.updateEventUriPrivate = 'update://favoritescubemodel/private'; //used when it is unneccessary to tell other UI elements of a change, saving re-painting.

    this.getFaceLabels = function () {
      return _faceLabels;
    };

    this.getFavoriteGroupName = function (id) {
      return _faceLabels[id];
    };

    this.getMode = function () {
      return _mode;
    };

    this.setMode = function (value) {
      if (!value) {
        throw 'value not supplied';
      }

      _mode = value;
      $.publish(that.updateEventUriPrivate);
    };

    this.deactivateFace = function (faceId) {
      if (faceId > 5) {
        throw 'faceId invalid.';
      }

      _faceActiveStatuses[faceId] = false;

      //update the client-side results collection
      for (var i = 0; i < _favorites[faceId].length; i++) {
        var id = _favorites[faceId][i];
        _itemRepository.getById(id, function (item) {
          item['isFavoriteOnFace' + faceId] = false;
        });
      }

      _favorites[faceId] = [];

      if (_faceActiveStatuses.indexOf(true) === -1) {
        _mode = _modeEnum.Default;
      }
      //ensure the items of interest and result list views are notified
      $.publish(that.updateEventUri);
    };

    this.getFaceStatuses = function () {

      return _faceActiveStatuses;
    };

    this.setFaceStatuses = function (value) {
      if (!value) {
        throw 'value not supplied';
      }

      _faceActiveStatuses = value;
      $.publish(that.updateEventUri);
    };

    this.getFavorites = function () {

      return _favorites;
    };

    this.addFavorite = function (id, face) {
      if (!id) {
        throw 'favorite not supplied';
      }

      if (!face) {
        throw 'face not supplied';
      }

      if (!_.find(_favorites[face], function (i) {
        return i === id;
      })) {
        _favorites[face].push(id);
        _itemRepository.getById(id, function (item) {
          item['isFavoriteOnFace' + face] = true;
          $.publish(that.updateEventUri);
        });
      }
    };

    this.removeFavorite = function (id, face) {
      if (!id) {
        throw 'id not supplied';
      }

      if (!face) {
        throw 'face not supplied';
      }

      _favorites[parseInt(face)] = _.reject(_favorites[parseInt(face)], function (idOnCubeFace) {
        return idOnCubeFace === id;
      });

      _itemRepository.getById(id, function (item) {
        item['isFavoriteOnFace' + face] = false;
        $.publish(that.updateEventUri);
      });
    };

    this.isFavoriteOnAnyFace = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      return _favorites.map(function (a) {
        return _.any(a, function (i) {
          return i === id;
        });
      }).reduce(function (prev, curr) {
            return prev || curr;
          });
    };

    function init() {
      if (!itemRepository) {
        throw 'itemRepository not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _itemRepository = itemRepository;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.FavoritesCubeModel = FavoritesCubeModel;
  invertebrate.Model.isExtendedBy(app.FavoritesCubeModel);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate) {
  'use strict';

  function HiddenItemsModel() {

    if (!(this instanceof app.HiddenItemsModel)) {
      return new app.HiddenItemsModel();
    }

    var that = this,
        _hiddenItems = {};

    this.updateEventUri = 'update://HiddenItemsModel/';

    this.isHidden = function (id) {

      return !!_hiddenItems[id];
    };

    this.addHiddenItemId = function (value) {
      _hiddenItems[value] = value;

      $.publish(that.updateEventUri);
    };

    this.removeHiddenItemId = function (value) {
      delete _hiddenItems[value];

      $.publish(that.updateEventUri);
    };

    function init() {

      return that;
    }

    return init();
  }

  app.HiddenItemsModel = HiddenItemsModel;
  invertebrate.Model.isExtendedBy(app.HiddenItemsModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate, _) {
  'use strict';

  function ItemsOfInterestModel(selectedItemModel) {
    if (!(this instanceof app.ItemsOfInterestModel)) {
      return new app.ItemsOfInterestModel(selectedItemModel);
    }

    var that = this,
        _selectedItemModel = null,
        _itemsOfInterest = { selectedItem: '',
          pinnedItems: [] };

    this.updateEventUri = 'update://ItemsOfInterestModel/';

    this.isItemOfInterest = function (id) {
      return (_itemsOfInterest.pinnedItems.indexOf(id)) !== -1;
    };

    this.getItemsOfInterest = function () {
      return _itemsOfInterest;
    };

    this.addItemOfInterest = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      if (_.find(that.getItemsOfInterest().pinnedItems, function (idOfPinnedItem) {
        return idOfPinnedItem === id;
      })) {
        return;
      }

      if (_selectedItemModel.getSelectedItemId() === id) {
        _selectedItemModel.setSelectedItemId(null, {silent: true});
        _itemsOfInterest.selectedItem = null;
      }

      _itemsOfInterest.pinnedItems.push(id);

      $.publish(that.updateEventUri);
    };

    this.removeItemOfInterest = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      _itemsOfInterest.pinnedItems = _.reject(_itemsOfInterest.pinnedItems, function (idOfPinnedItem) {
        return idOfPinnedItem === id;
      });

      $.publish(that.updateEventUri, { action: 'removal', removedItemId: id});
    };

    this.isPinned = function (id) {
      return _.any(_itemsOfInterest.pinnedItems, function (i) {
        return i === id;
      });
    };

    function init() {

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      _selectedItemModel = selectedItemModel;

      return that;
    }

    return init();
  }

  app.ItemsOfInterestModel = ItemsOfInterestModel;
  invertebrate.Model.isExtendedBy(app.ItemsOfInterestModel);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate) {
  'use strict';

  function LoginPanelModel() {

    if (!(this instanceof app.LoginPanelModel)) {
      return new app.LoginPanelModel();
    }

    var that = this,
        _username = null,
        _password = null,
        _isLoginFailedMessageVisible = false,
        _isVisible = false;

    this.updateEventUri = 'update://LoginPanelModel/';

    this.getUsername = function () {
      return _username;
    };

    this.setUsername = function (value) {
      _username = value;
    };

    this.getPassword = function () {
      return _password;
    };

    this.setPassword = function (value) {
      _password = value;
    };

    this.getIsLoginFailedMessageVisible = function () {
      return _isLoginFailedMessageVisible;
    };

    this.setIsLoginFailedMessageVisible = function (value) {
      _isLoginFailedMessageVisible = value;
      $.publish(that.updateEventUri);
    };

    this.getIsVisible = function () {
      return _isVisible;
    };

    this.setIsVisible = function (value) {
      _isVisible = value;
      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.LoginPanelModel = LoginPanelModel;
  invertebrate.Model.isExtendedBy(app.LoginPanelModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function PurchasePanelModel() {

    if (!(this instanceof app.PurchasePanelModel)) {
      return new app.PurchasePanelModel();
    }

    var that = this,
        _activeTab = '0',
        _isWaiting = '', //should identify the dom element to indicate waiting
        _notifications = []; //eg. [{ type: 'formField', id: 'foo' }]

    this.updateEventUri = 'update://PurchasePanelModel/';

    this.getNotifications = function () {
      return _notifications;
    };

    this.setNotifications = function (value) {
      if (!value) {
        throw 'value not supplied.';
      }

      _notifications = value;
      $.publish(that.updateEventUri);
    };

    this.getIsWaiting = function () {
      return _isWaiting;
    };

    this.setIsWaiting = function (value, options) {
      options = options || { silent: false };

      if (!value) {
        throw 'value not supplied.';
      }

      _isWaiting = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    this.getActiveTab = function () {
      return _activeTab;
    };

    this.setActiveTab = function (value) {
      if (!value) {
        throw 'value not supplied.';
      }

      _activeTab = value;
      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.PurchasePanelModel = PurchasePanelModel;
  invertebrate.Model.isExtendedBy(app.PurchasePanelModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate, _) {
  'use strict';

  function ResultListModel() {
    if (!(this instanceof app.ResultListModel)) {
      return new app.ResultListModel();
    }

    var that = this,
        _searchId = 'initial-value',
        _mode = '0',
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode,
        _results = []; //note these will be GUIDs - use the ItemCache for the actual objects

    this.updateEventUri = 'update://ResultListModel/';

    this.getSearchId = function () {
      return _searchId;
    };

    this.getResults = function () {
      return _results;
    };

    this.setResults = function (value, searchId) {
      _results = value;
      _searchId = searchId;
      _mode = _searchPanelModeEnum.Default;
      $.publish(that.updateEventUri);
    };

    this.getMode = function () {
      return _mode;
    };

    this.setMode = function (value, options) {
      options = options || {silent: false};

      _mode = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    this.getResult = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      return _.find(_results, function (r) {
        return r.id === id;
      });
    };

    this.setSelectedResultId = function (id) {
      if (!id) {
        throw 'id not supplied';
      }

      _.each(_results, function (r) {
        if (r.id === id) {
          r.isSelected = true;
        } else {
          r.isSelected = false;
        }
      });

      $.publish(that.updateEventUri);
    };

    function init() {

      return that;
    }

    return init();
  }

  app.ResultListModel = ResultListModel;
  invertebrate.Model.isExtendedBy(app.ResultListModel);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate) {
  'use strict';

  function SearchFormModel() {

    if (!(this instanceof app.SearchFormModel)) {
      return new app.SearchFormModel();
    }

    var that = this,
        _keywords = null,
        _location = null,
        _isWaiting = 'false',
        _rate = null;

    this.updateEventUri = 'update://SearchFormModel/';

    this.getKeywords = function () {
      return _keywords;
    };

    this.setKeywords = function (value, options) {
      options = options || { silent: false };

      _keywords = value;

      if (options.silent === false) {
        $.publish(that.updateEventUri);
      }
    };

    this.getLocation = function () {
      return _location;
    };

    this.setLocation = function (value, options) {
      options = options || { silent: false };
      _location = value;

      if (options.silent === false) {
        $.publish(that.updateEventUri);
      }
    };

    this.getRate = function () {
      return _rate;
    };

    this.setRate = function (value, options) {
      options = options || { silent: false };
      _rate = value;

      if (options.silent === false) {
        $.publish(that.updateEventUri);
      }
    };

    this.getIsWaiting = function () {
      return _isWaiting;
    };

    this.setIsWaiting = function (value, options) {
      options = options || { silent: false };

      /*jshint -W116 */
      if (value == null) {
        throw 'value not supplied.';
      }

      if (value !== 'true' && value !== 'false') {
        throw 'invalid argument (value).';
      }

      _isWaiting = value;

      if (options.silent === false) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SearchFormModel = SearchFormModel;
  invertebrate.Model.isExtendedBy(app.SearchFormModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function SearchPanelModel() {

    if (!(this instanceof app.SearchPanelModel)) {
      return new app.SearchPanelModel();
    }

    var that = this,
        _mode = null,
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode;

    this.updateEventUri = 'update://SearchPanelModel/';

    this.getMode = function () {
      return _mode || _searchPanelModeEnum.Default;
    };

    this.setMode = function (value, options) {
      options = options || {silent: false};

      _mode = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      _mode = _searchPanelModeEnum.Default;

      return that;
    }

    return init();
  }

  app.SearchPanelModel = SearchPanelModel;
  invertebrate.Model.isExtendedBy(app.SearchPanelModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function SelectedCubeFaceModel() {

    if (!(this instanceof app.SelectedCubeFaceModel)) {
      return new app.SelectedCubeFaceModel();
    }

    var that = this,
        _selectedCubeFaceId = '0';

    this.updateEventUri = 'update://SelectedCubeFaceModel/';

    this.getSelectedCubeFaceId = function () {
      return _selectedCubeFaceId;
    };

    this.setSelectedCubeFaceId = function (value) {
      _selectedCubeFaceId = value;
      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SelectedCubeFaceModel = SelectedCubeFaceModel;
  invertebrate.Model.isExtendedBy(app.SelectedCubeFaceModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function SelectedItemModel() {

    if (!(this instanceof app.SelectedItemModel)) {
      return new app.SelectedItemModel();
    }

    var that = this,
        _selectedResultId = null,
        _previouslySelectedResultId = null;

    this.updateEventUri = 'update://SelectedItemModel/';

    this.getSelectedItemId = function () {
      return _selectedResultId;
    };

    this.getPreviouslySelectedItemId = function () {
      return _previouslySelectedResultId;
    };

    this.setSelectedItemId = function (value, options) {
      options = options || { silent: false };

      _previouslySelectedResultId = _selectedResultId;
      _selectedResultId = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SelectedItemModel = SelectedItemModel;
  invertebrate.Model.isExtendedBy(app.SelectedItemModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function SingleItemModel() {

    if (!(this instanceof app.SingleItemModel)) {
      return new app.SingleItemModel();
    }

    var that = this,
        _selectedResultId = null,
        _previouslySelectedResultId = null;

    this.updateEventUri = 'update://SelectedItemModel/';

    this.getSelectedItemId = function () {
      return _selectedResultId;
    };

    this.getPreviouslySelectedItemId = function () {

      return _previouslySelectedResultId;
    };

    this.setSelectedItemId = function (value, options) {
      options = options || { silent: false };

      _previouslySelectedResultId = _selectedResultId;
      _selectedResultId = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SingleItemModel = SingleItemModel;
  invertebrate.Model.isExtendedBy(app.SingleItemModel);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function UIRootModel() {

    if (!(this instanceof app.UIRootModel)) {
      return new app.UIRootModel();
    }

    var that = this,
        _uiMode = '0',
        _modal = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.updateEventUri = 'update://UIRootModel/';

    this.getUIMode = function () {
      return _uiMode || '';
    };

    this.setUIMode = function (value, options) {
      options = options || {silent: false};

      _uiMode = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    this.getModal = function () {
      return _modal || '';
    };

    this.setModal = function (value) {
      _modal = value;
      $.publish(that.updateEventUri);
    };

//    this.getPreviousUIMode = function () {
//      return _previousUIMode;
//    };

    function init() {
      _uiMode = _uiModeEnum.GreenfieldSearch;
      return that;
    }

    return init();
  }

  app.UIRootModel = UIRootModel;
  invertebrate.Model.isExtendedBy(app.UIRootModel);

}(wizerati, $, invertebrate));

//wiz.mod('cronicl').CroniclSvc.getMyItemMetadata(function (metadata) {
//    $('#searchField').attr('placeholder', metadata.searchFieldPlaceholderValue);
//    $('#newItemLink').text('New ' + metadata.itemNameAlternative);
//    $('#emptyMessageMyItems').text('My  ' + metadata.itemNameAlternativePlural + ' are shown here');
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
//wiz.mod('cronicl').CroniclSvc.getSearchItemMetadata(function (metadata) {
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
;(function (app, $, invertebrate) {
  'use strict';

  function AccountActivationView(model) {

    if (!(this instanceof app.AccountActivationView)) {
      return new app.AccountActivationView(model);
    }

    var that = this,
        _el = '#activation-panel';

    this.$el = null;
    this.Model = null;

    this.render = function () {
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.AccountActivationView = AccountActivationView;
  invertebrate.View.isExtendedBy(app.AccountActivationView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractFavoriteView(model) {

    if (!(this instanceof app.ContractFavoriteView)) {
      return new app.ContractFavoriteView(model);
    }

    var that = this,
        _el = '<div class="thumbnail thumbnail-108"></div>',
        _templateName = 'favorite.html';

    this.$el = $(_el);
    this.Model = null;

    this.render = function () {
      if (that.Model.isSelected) {
        that.$el.addClass('selected');
      } else {
        that.$el.removeClass('selected');
      }

      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});

      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      return that;
    }

    return init();
  }

  app.ContractFavoriteView = ContractFavoriteView;
  invertebrate.View.isExtendedBy(app.ContractFavoriteView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractItemOfInterestView(model) {

    if (!(this instanceof app.ContractItemOfInterestView)) {
      return new app.ContractItemOfInterestView(model);
    }

    var that = this,
        _el = '<article class="item-of-interest overflow-y-scroll overflow-x-hidden lucid-column"></article>',
        _templateName = 'item-of-interest.html';

    this.$el = $(_el);
    this.Model = null;

    this.render = function () {
      that.$el.attr('data-id', that.Model.id);

      if (that.Model.isSelected) {
        that.$el.addClass('selected');
      }

      if (that.Model.shouldAnimateIn) {
        that.$el.addClass('collapsed');
      }

      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});

      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      return that;
    }

    return init();
  }

  app.ContractItemOfInterestView = ContractItemOfInterestView;
  invertebrate.View.isExtendedBy(app.ContractItemOfInterestView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractResultView(model) {

    if (!(this instanceof app.ContractResultView)) {
      return new app.ContractResultView(model);
    }

    var that = this,
        _el = '<li class="t t-219"></li>',
        _templateName = 'result.html';

    this.$el = $(_el);
    this.Model = null;

    this.render = function () {
      if (that.Model.isSelected) {
        that.$el.addClass('selected');
      } else {
        that.$el.removeClass('selected');
      }

      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});

      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;
      return that;
    }

    return init();
  }

  app.ContractResultView = ContractResultView;
  invertebrate.View.isExtendedBy(app.ContractResultView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractorFavoriteView(model) {

    if (!(this instanceof app.ContractorFavoriteView)) {
      return new app.ContractorFavoriteView(model);
    }

    var that = this,
        _el = '<div class="thumbnail thumbnail-108"></div>',
        _templateName = 'favorite.html';

    this.$el = $(_el);
    this.Model = null;

    this.render = function () {
      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});
      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;
      that.render();
      return that;
    }

    return init();
  }

  app.ContractorFavoriteView = ContractorFavoriteView;
  invertebrate.View.isExtendedBy(app.ContractorFavoriteView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractorItemOfInterestView(model) {

    if (!(this instanceof app.ContractorItemOfInterestView)) {
      return new app.ContractorItemOfInterestView(model);
    }

    var that = this,
        _el = '<article id="selected-item" class="overflow-y-scroll lucid-column"></article>',
        _templateName = 'item-of-interest.html';

    this.$el = $(_el);
    this.Model = null;

    this.render = function () {
      that.$el.attr('data-id', that.Model.id);

      if (that.Model.isSelected) {
        that.$el.addClass('selected');
      }

      if (that.Model.shouldAnimateIn) {
        that.$el.addClass('collapsed');
      }

      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});

      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      return that;
    }

    return init();
  }

  app.ContractorItemOfInterestView = ContractorItemOfInterestView;
  invertebrate.View.isExtendedBy(app.ContractorItemOfInterestView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function ContractorResultView(model) {

    if (!(this instanceof app.ContractorResultView)) {
      return new app.ContractorResultView(model);
    }

    var that = this,
        _el = '<li class="thumbnail thumbnail-219" data-id="' + model.Id + '"></li>',
        _templateName = 'result.html';

    this.$el = null;
    this.Model = null;

    this.render = function (options) {
      app.instance.renderTemplate(that.$el,
          _templateName,
          that.Model,
          {});

      return that;
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      return that;
    }

    return init();
  }

  app.ContractorResultView = ContractorResultView;
  invertebrate.View.isExtendedBy(app.ContractorResultView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate, document) {
  'use strict';

  function DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel) {

    if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogView)) {
      return new app.DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel);
    }

    var that = this,
        _el = '#delete-favorite-group-confirmation-dialog',
        _messageContainerEl = '.message-container',
        _deleteButtonEl = '.btn-danger',
        _favoritesCubeModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.$el = null;
    this.Model = null;

    this.render = function () {
      var favoriteGroupId = that.Model.getFavoriteGroupId();
      var favoriteGroupName = _favoritesCubeModel.getFavoriteGroupName(favoriteGroupId);
      that.$el.find(_messageContainerEl).html('<p>You have chosen to delete the following group of favorites:</p><blockquote><em>' + favoriteGroupName + '</em></blockquote><p>This cannot be undone.</p><p>Are you sure you want to delete this group?</p>')
      that.$el.find(_deleteButtonEl).attr('href', '/favoritegroup/destroy?id=' + favoriteGroupId);
    };

    this.bindEvents = function () {
      $(document).keyup(function (e) {
        if (e.keyCode === 27 && app.mod('views').uiRootView.Model.getModal() === _uiModeEnum.DeleteFavoriteGroupConfirmationDialog) {
          that.Model.setIsVisible(false);
        }
      });
    };

    this.onDomReady = function () {
      that.$el = $(_el);
      that.bindEvents();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied';
      }

      that.Model = model;
      _favoritesCubeModel = favoritesCubeModel;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.DeleteFavoriteGroupConfirmationDialogView = DeleteFavoriteGroupConfirmationDialogView;
  invertebrate.View.isExtendedBy(app.DeleteFavoriteGroupConfirmationDialogView);

}(wizerati, $, invertebrate, document));
;(function (app, $, invertebrate, _) {
  'use strict';

  function FavoritesCubeView(model, favoriteViewFactory, selectedCubeFaceModel, selectedItemModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

    if (!(this instanceof app.FavoritesCubeView)) {
      return new app.FavoritesCubeView(model,
          favoriteViewFactory,
          selectedCubeFaceModel,
          selectedItemModel,
          hiddenItemsModel,
          actionedItemsModel,
          itemsOfInterestModel);
    }

    var that = this,
        _el = '#favorites-cube',
        _favoriteViewFactory = null,
        _selectedCubeFaceModel = null,
        _selectedItemModel = null,
        _actionedItemsModel = null,
        _hiddenItemsModel = null,
        _itemsOfInterestModel = null,
        _labelEls = [ '.cube-face-labels li:nth-child(1)',   //top
          '.cube-face-labels li:nth-child(2)',   //left
          '.cube-face-labels li:nth-child(3)',   //front
          '.cube-face-labels li:nth-child(4)',   //right
          '.cube-face-labels li:nth-child(5)',   //bottom
          '.cube-face-labels li:nth-child(6)' ], //back
        _faceEls = ['.top', '.left', '.front', '.right', '.bottom', '.back' ],
        _modeEnum = app.mod('enum').FavoritesCubeMode;

    this.$el = null;
    this.Model = null;

    this.render = function () {
      var mode = that.Model.getMode();
      that.$el.attr('data-mode', mode);
      that.$el.find('.favorites-cube-edit-link').attr('href', '/favoritescubemode/update?mode=' + (mode === _modeEnum.Default ? _modeEnum.Edit : _modeEnum.Default));
      that.$el.find('.favorites-cube-edit-link').text((mode === _modeEnum.Default ? 'edit' : 'done'));
      that.$el.find('.cube-controls').attr('data-active-faces', that.Model.getFaceStatuses().reduce(function (previousValue, currentValue, index, array) {
        return previousValue + (currentValue ? '1' : '0');
      }, ''));

      if (_.flatten(that.Model.getFavorites(), true).length === 0) {
        that.$el.addClass('hide');
        return;
      } else {
        that.$el.removeClass('hide');
      }

      $.each(that.Model.getFavorites(), function (index1, faceFavorites) {
        var $face = that.$el.find(_faceEls[index1]);
        var $faceSelectorSpots = that.$el.find('.face-selector:nth-child(' + (index1 + 1) + ') .spot'); //plus 1 because 1-based in DOM
        $face.find('*').not('.face-empty-message').remove();
        $faceSelectorSpots.removeClass('filled');
        $.each(faceFavorites, function (index2, f) {
          _favoriteViewFactory.create(f, _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
            $face.append($v);
            $($faceSelectorSpots[index2]).addClass('filled');
          });
        });
      });

      that.$el.attr('data-selected-face-id',
          _selectedCubeFaceModel.getSelectedCubeFaceId());

      var faceLabels = that.Model.getFaceLabels();
      $.each(_labelEls, function (index, el) {
        $(el).text(faceLabels[index]);
      });
    };

    this.onDomReady = function () {
      that.$el = $(_el);
      that.render();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      if (!favoriteViewFactory) {
        throw 'favoriteViewFactory not supplied';
      }

      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied';
      }

      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied';
      }

      that.Model = model;
      _favoriteViewFactory = favoriteViewFactory;
      _selectedCubeFaceModel = selectedCubeFaceModel;
      _selectedItemModel = selectedItemModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;
      _itemsOfInterestModel = itemsOfInterestModel;

      $.subscribe(that.Model.updateEventUriPrivate, that.render);
      $.subscribe(that.Model.updateEventUri, that.render);
      $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
      $.subscribe(_selectedItemModel.updateEventUri, that.render);
      $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
      $.subscribe(_actionedItemsModel.updateEventUri, that.render);
      $.subscribe(_itemsOfInterestModel.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.FavoritesCubeView = FavoritesCubeView;
  invertebrate.View.isExtendedBy(app.FavoritesCubeView);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate, _) {
  'use strict';

  //todo, render to in mem dom fragment with
  //single write to DOM to minimise repaint
  //use JQUery scrollTop to reset scroll position of
  //scrolled elements
  //fix jankiness of item selection and items of interest update
  function ItemsOfInterestView(model, itemOfInterestViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel) {

    if (!(this instanceof app.ItemsOfInterestView)) {
      return new app.ItemsOfInterestView(model,
          itemOfInterestViewFactory,
          selectedCubeFaceModel,
          selectedItemModel,
          favoritesCubeModel,
          hiddenItemsModel,
          actionedItemsModel);
    }

    var that = this,
        _el1 = '#items-of-interest-panel-1',
        _el2 = '#items-of-interest-panel-2',
        _itemOfInterestViewFactory = null,
        _selectedCubeFaceModel = null,
        _selectedItemModel = null,
        _favoritesCubeModel = null,
        _hiddenItemsModel = null,
        _actionedItemsModel = null,
        _scrollTopValues = {},
        _scrollLeft = 0;

    this.$el = null;
    this.$el2 = null;
    this.$currentEl = null;
    this.Model = null;

    function storeScrollTopValues() {
      var selectedItem = that.$el.find('.item-of-interest.selected');

      if (selectedItem) {
        _scrollTopValues[selectedItem.attr('data-id') + 's'] = $(selectedItem).scrollTop();
      }

      _.each(that.$el.find('.item-of-interest:not(.selected)'), function (e) {
        _scrollTopValues[$(e).attr('data-id')] = $(e).scrollTop();
      });
    }

    function storeScrollLeftValue() {
      _scrollLeft = $('body').scrollLeft();
    }

    this.renderWithSelectedItemAnimation = function () {
      renderPrivate();
    }

    this.render = function () {
      var args = Array.prototype.slice.call(arguments);
      var options = args.length > 1 ? args[1] : {};
      renderPrivate({ animateSelectedItem: false, removedItemId: options.removedItemId });
    };

    function renderPrivate(options) {
      options = options || {animateSelectedItem: true};

      storeScrollTopValues();
      storeScrollLeftValue();

      var $prevEl = that.$currentEl || that.$el2;
      that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no 'flicker' as the results are rendered.
      that.$currentEl.empty();

      var items = that.Model.getItemsOfInterest();
      items.selectedItem = _selectedItemModel.getSelectedItemId();

      if (items.selectedItem) {
        _itemOfInterestViewFactory.create(items.selectedItem,
            _selectedCubeFaceModel.getSelectedCubeFaceId(),
            true,
            options.animateSelectedItem,
            function ($v) {

              function addSelectedItem() {
                that.$currentEl.prepend($v);
                $v.scrollTop(_scrollTopValues[items.selectedItem + 's']);
                setTimeout(function () {
                  $v.removeClass('collapsed');
                }, 300);

                $('body').scrollLeft(_scrollLeft);
              }

              addPinnedItems(items.pinnedItems, addSelectedItem);
            });
      } else {
        addPinnedItems(items.pinnedItems, function () {
          $('body').scrollLeft(_scrollLeft);
        });
      }

      if (options.removedItemId) {
        $prevEl.find('.item-of-interest[data-id=' + options.removedItemId + ']').addClass('collapsed');
        setTimeout(function () {
          $prevEl.addClass('buffer');
          that.$currentEl.removeClass('buffer');
          setTimeout(function () {
            $prevEl.empty();
          }, 300);
        }, 200); //wait for removal animation to complete

        return;
      }

      $prevEl.addClass('buffer');
      that.$currentEl.removeClass('buffer');
      setTimeout(function () {
        $prevEl.empty();
      }, 300);
    }

    function addPinnedItems(items, done) {
      done = done || function () {
      };

      _.each(items, function (id) {
        if (id === null) {
          return;
        }
        _itemOfInterestViewFactory.create(id,
            _selectedCubeFaceModel.getSelectedCubeFaceId(),
            false,
            false,
            function ($v) {
              that.$currentEl.prepend($v)
              $v.scrollTop(_scrollTopValues[id]);
            });
      });
      done();
    }

    this.onDomReady = function () {
      that.$el = $(_el1);
      that.$el2 = $(_el2);
      that.render();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      if (!itemOfInterestViewFactory) {
        throw 'itemOfInterestViewFactory not supplied';
      }

      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied';
      }

      if (!favoritesCubeModel) {
        throw 'selectedItemModel not supplied';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied';
      }

      that.Model = model;
      _itemOfInterestViewFactory = itemOfInterestViewFactory;
      _selectedCubeFaceModel = selectedCubeFaceModel;
      _selectedItemModel = selectedItemModel;
      _favoritesCubeModel = favoritesCubeModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;

      $.subscribe(that.Model.updateEventUri, that.render);
      $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
      $.subscribe(_selectedItemModel.updateEventUri, that.renderWithSelectedItemAnimation);
      $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
      $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
      $.subscribe(_actionedItemsModel.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.ItemsOfInterestView = ItemsOfInterestView;
  invertebrate.View.isExtendedBy(app.ItemsOfInterestView);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate, document) {
  'use strict';

  function LoginPanelView(model) {

    if (!(this instanceof app.LoginPanelView)) {
      return new app.LoginPanelView(model);
    }

    var that = this,
        _el = '#log-in-panel',
        _cancelButtonEl = '.btn-cancel',
        _successButtonEl = '.log-in .btn-success',
        _usernameEl = '.username',
        _passwordEl = '.password',
        _uiModeEnum = app.mod('enum').UIMode;

    this.$el = null,
        this.$cancelButton = null,
        this.$successButton = null,
        this.$username = null,
        this.$password = null,
        this.Model = null;

    this.render = function () {
      if (that.Model.getIsVisible()) {
        that.$el.removeClass('hide');
      }

      if (that.Model.getIsLoginFailedMessageVisible()) {
        that.$el.addClass('login-error');
      }
    };

    this.bindEvents = function () {
      that.$username.on('change', function () {
        that.Model.setUsername(that.$username.val());
      });

      that.$password.on('change', function () {
        that.Model.setPassword(that.$password.val());
      });

      that.$cancelButton.on('click', function () {
        cancel();
      });

      that.$successButton.on('click', function () {
        app.instance.router.route('/session/create', { $parentDomNode: that.$el });
      });

      $(document).keyup(function (e) {
        if (e.keyCode === 27 && app.mod('views').uiRootView.Model.getUIMode() === _uiModeEnum.LogIn) {
          cancel();
        }
      });
    };

    function cancel() {
      app.instance.router.route('/');
    }

    this.onDomReady = function () {
      that.$el = $(_el);
      that.$cancelButton = that.$el.find(_cancelButtonEl);
      that.$password = that.$el.find(_passwordEl);
      that.$username = that.$el.find(_usernameEl);
      that.$successButton = that.$el.find(_successButtonEl);
      that.bindEvents();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.LoginPanelView = LoginPanelView;
  invertebrate.View.isExtendedBy(app.LoginPanelView);

}(wizerati, $, invertebrate, document));
;(function (app, $, invertebrate) {
  'use strict';

  function PurchasePanelView(model) {

    if (!(this instanceof app.PurchasePanelView)) {
      return new app.PurchasePanelView(model);
    }

    var that = this,
        _el = '#purchase-panel';

    this.$el = null;
    this.Model = null;

    this.render = function () {
      that.$el.attr('data-state', that.Model.getActiveTab());
      that.$el.attr('data-is-waiting', that.Model.getIsWaiting());
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.PurchasePanelView = PurchasePanelView;
  invertebrate.View.isExtendedBy(app.PurchasePanelView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate, _) {
  'use strict';

  function ResultListView(model, resultViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

    if (!(this instanceof app.ResultListView)) {
      return new app.ResultListView(model,
          resultViewFactory,
          selectedCubeFaceModel,
          selectedItemModel,
          favoritesCubeModel,
          hiddenItemsModel,
          actionedItemsModel,
          itemsOfInterestModel);
    }

    var that = this,
        _elContainer = '.result-list-container',
        _el1 = '#result-list-panel-1',
        _el2 = '#result-list-panel-2',
        _resultViewFactory = null,
        _selectedCubeFaceModel = null,
        _selectedItemModel = null,
        _favoritesCubeModel = null,
        _actionedItemsModel = null,
        _hiddenItemsModel = null,
        _itemsOfInterestModel = null,
        _scrollTopValue = 0,
        _lastKnownSearchId = null;

    this.$elContainer = null;
    this.$el = null;
    this.$el2 = null;
    this.$currentEl = null;
    this.Model = null;

    function calculateScrollTopValueToMaintain($el, searchId) {
      if (_lastKnownSearchId === searchId) {
        _scrollTopValue = $el.scrollTop();
      } else {
        _scrollTopValue = 0;
        _lastKnownSearchId = searchId;
      }
    }

    this.render = function () {
      var $prevEl = that.$currentEl || that.$el2;
      var searchId = that.Model.getSearchId();
      var isFreshSearch = _lastKnownSearchId !== searchId;
      calculateScrollTopValueToMaintain($prevEl, searchId);
      that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no 'flicker' as the results are rendered.
      that.$currentEl.empty();

      that.$currentEl.addClass('ios-scroll-enable');

      var selectedCubeFaceId = _selectedCubeFaceModel.getSelectedCubeFaceId();
      _.each(that.Model.getResults(), function (id) {
        _resultViewFactory.create(id, selectedCubeFaceId, function ($v) {
          that.$currentEl.append($v);
        });
      });

      that.$currentEl.scrollTop(_scrollTopValue);
      setTimeout(function () {
        $prevEl.addClass('buffer');
      }, 0); //reduces jank on iOS (yes really)

      var mode = that.Model.getMode();
      if (isFreshSearch) {
        setTimeout(function () { //this avoids the user seeing the appending of results to the DOM as an 'animation'
          that.$currentEl.removeClass('buffer');
          that.$elContainer.attr('data-mode', mode);
        }, 350);
      } else {
        setTimeout(function () {
          that.$currentEl.removeClass('buffer');
          that.$elContainer.attr('data-mode', mode);
        }, 0); //reduces jank on iOS (yes really)
      }

      setTimeout(function () {
        //Circumvent iOS bug whereby scrolling is applied to the hidden 'buffer' list.
        $prevEl.empty();
        $prevEl.removeClass('ios-scroll-enable');
      }, 300); //This timeout must be longer than the css transition to avoid interrupting it with a flicker.
    };

//        function renderResults(results, index) {
//            index = index === undefined ? 0 : index;
//
//            if (index === results.length) {
//                return;
//            }
//
//            _resultViewFactory.create(results[index], _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
//                that.$el1.append($v);
//            });
//
//            setTimeout(function () {
//                renderResults(results, ++index)
//            }, 950);
//        }

    this.onDomReady = function () {
      that.$el = $(_el1);
      that.$el2 = $(_el2);
      that.$elContainer = $(_elContainer);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      if (!resultViewFactory) {
        throw 'resultViewFactory not supplied';
      }

      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied';
      }

      if (!favoritesCubeModel) {
        throw 'selectedItemModel not supplied';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied';
      }

      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied';
      }

      that.Model = model;
      _resultViewFactory = resultViewFactory;
      _selectedCubeFaceModel = selectedCubeFaceModel;
      _selectedItemModel = selectedItemModel;
      _favoritesCubeModel = favoritesCubeModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;
      _itemsOfInterestModel = itemsOfInterestModel;

      $.subscribe(that.Model.updateEventUri, that.render);
      $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
      $.subscribe(_selectedItemModel.updateEventUri, that.render);
      $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
      $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
      $.subscribe(_actionedItemsModel.updateEventUri, that.render);
      $.subscribe(_itemsOfInterestModel.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.ResultListView = ResultListView;
  invertebrate.View.isExtendedBy(app.ResultListView);

}(wizerati, $, invertebrate, _));
;(function (app, $, invertebrate) {
  'use strict';

  function SearchFormView(model) {

    if (!(this instanceof app.SearchFormView)) {
      return new app.SearchFormView(model);
    }

    var that = this,
        _el = '#search-form',
        _templateName = 'search-form.html',
//        _postRenderScriptName = 'search-form.js',
        _waitStateIsBeingMonitored = false; //is the periodic check for whether we are waiting running?

    this.$el = null;
    this.Model = null;

    this.render = function () {
      var options = { done: that.bindEvents, postRenderScriptName: null };

      return app.instance.renderTemplate(that.$el,
          _templateName, that.Model, options);
    };

    this.bindEvents = function () {
      var $keywords = that.$el.find('#keywords');
      $keywords.on('change', function () {
        that.Model.setKeywords($keywords.val(), { silent: true });
      });

      var $location = that.$el.find('#location');
      $location.on('change', function () {
        that.Model.setLocation($location.val(), { silent: true });
      });

      var $rate = that.$el.find('input[name="r"]');
      $rate.on('change', function () {
        that.Model.setRate(that.$el.find('input[name="r"]:checked').val(), { silent: true });
      });

      if (!_waitStateIsBeingMonitored) {
        monitorWaitState();
      }
    };

    this.postRender = function () {
    };

    //We take control here in the view of changes to the view when the wait state changes (i.e. we do not leave this to the usual template rendering process).
    //We do this because we want to control the precise timings of the checks to correspond to individual revolutions of the wait animation.
    //This enables us to always stop the animation at its natural end, rather than stopping the animation half way through, which looks jarring.
    //If we are waiting, then re-set the data-is-waiting state to false and wait a tick to enable the DOM to register the change in data attribute (so we can re-trigger the animation).
    //On the next tick, we trigger the animation and wait the precise duration of the animation.
    //We then (taking our time, because we are using setTimeout and not setInterval) see if we are still waiting, if we are, we repeat the process.
    //If we are not waiting then we set the data-attribute to stop the animation and set a flag variable to indicate we are no-longer monitoring the model for changes to the wait state.
    //Re-setting this flag means that when the search form is re-rendered, we know to kick off the wait state monitoring process again.
    function monitorWaitState() {
      _waitStateIsBeingMonitored = true;

      if (that.Model.getIsWaiting() === 'true') {
        that.$el.find('.btn-primary').attr('data-is-waiting', 'false');
        setTimeout(function () {
          that.$el.find('.btn-primary').attr('data-is-waiting', 'true'); //trigger animation
          setTimeout(monitorWaitState, 2500); //wait for animation to complete before checking
        }, 0);
      } else {
        that.$el.find('.btn-primary').attr('data-is-waiting', 'false');
        _waitStateIsBeingMonitored = false;
      }
    }

    this.onDomReady = function () {
      that.$el = $(_el);
      that.render();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.SearchFormView = SearchFormView;
  invertebrate.View.isExtendedBy(app.SearchFormView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function SearchPanelView(model) {

    if (!(this instanceof app.SearchPanelView)) {
      return new app.SearchPanelView(model);
    }

    var that = this,
        _el = '#search-panel',
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode;

    this.$el = null;
    this.Model = null;

    this.render = function (e, options) {
      options = options || { done: that.postRender };

      that.$el.attr('data-mode', that.Model.getMode());
      var oppositeMode = that.Model.getMode() === _searchPanelModeEnum.Default ? _searchPanelModeEnum.Minimized : _searchPanelModeEnum.Default;
      that.$el.find('.handle').attr('href', '/searchpanelmode/update?mode=' + oppositeMode);
    };

    this.postRender = function () {
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;
      $.subscribe(that.Model.updateEventUri, that.render);
      that.bindEvents();
      return that;
    }

    return init();
  }

  app.SearchPanelView = SearchPanelView;
  invertebrate.View.isExtendedBy(app.SearchPanelView);

}(wizerati, $, invertebrate));
;(function (app, $, invertebrate) {
  'use strict';

  function UIRootView(model) {

    if (!(this instanceof app.UIRootView)) {
      return new app.UIRootView(model);
    }

    var that = this,
        _el = 'body';

    this.$el = null;
    this.Model = null;

    this.render = function (e, options) {
      options = options || { done: that.postRender };

      //two step DOM manipulation to enable visibility of CSS transition
      //first set display property
      var modal = that.Model.getModal();
      that.$el.removeClass('modal-visible'); //re-adding of this class will trigger CSS transition
      that.$el.attr('data-ui-mode', that.Model.getUIMode());
      that.$el.attr('data-modal', modal);

      if (modal) {
        setTimeout(function () {
          that.$el.addClass('modal-visible');
        }, 0);  //re-adding of this class will trigger CSS transition
      }

    };

    this.postRender = function () {
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      that.bindEvents();

      return that;
    }

    return init();
  }

  app.UIRootView = UIRootView;
  invertebrate.View.isExtendedBy(app.UIRootView);

}(wizerati, $, invertebrate));
;(function (app) {
  'use strict';

  function AccountActivationController(uiRootModel) {

    if (!(this instanceof app.AccountActivationController)) {
      return new app.AccountActivationController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _modalEnum = wizerati.mod('enum').Modal;

    this.create = function (dto) {

      //send the key to the server and render the result
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AccountActivationController = AccountActivationController;

}(wizerati));
;(function (app) {
  'use strict';

  function AccountActivationPanelController(uiRootModel) {

    if (!(this instanceof app.AccountActivationPanelController)) {
      return new app.AccountActivationPanelController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = app.mod('enum').UIMode,
        _modalEnum = app.mod('enum').Modal;

    this.index = function () {
      _uiRootModel.setModal(_modalEnum.AccountActivation);
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (e) {
        console.log('error: AccountActivationPanelController.destroy. ' + e);
      }

      var uiMode = _uiRootModel.getUIMode();

      //refactor?
      if (uiMode === _uiModeEnum.GreenfieldSearch) {
        app.instance.router.redirect('/');
      } else if (uiMode === _uiModeEnum.Search) {
        app.instance.router.redirect('/search');
      } else {
        throw 'invalid UI mode';
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AccountActivationPanelController = AccountActivationPanelController;

}(wizerati));
;(function (app) {
  'use strict';

  function ActionedItemsController(actionedItemsModel) {

    if (!(this instanceof app.ActionedItemsController)) {
      return new app.ActionedItemsController(actionedItemsModel);
    }

    var that = this,
        _actionedItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _actionedItemsModel.addActionedItemId(dto.id);
    };

    this.destroy = function (dto) {

      _actionedItemsModel.removeActionedItemId(dto.id);
    };

    function init() {
      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      _actionedItemsModel = actionedItemsModel;

      return that;
    }

    return init();
  }

  app.ActionedItemsController = ActionedItemsController;

}(wizerati));
;(function (app) {
  'use strict';

  function AdvertisersController(uiRootModel) {

    if (!(this instanceof app.AdvertisersController)) {
      return new app.AdvertisersController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.Purchase);
      } catch (err) {
        console.log('error: AdvertisersController.index');
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AdvertisersController = AdvertisersController;

}(wizerati));
;(function (app) {
  'use strict';

  function DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel) {

    if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogController)) {
      return new app.DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel);
    }

    var that = this,
        _deleteFavoriteGroupConfirmationDialogModel = null,
        _uiRootModel = null,
        _modalEnum = app.mod('enum').Modal;

    this.index = function (dto) {
      if (dto.__isInvertebrateExternal__) {
        app.instance.router.redirect('/');
        return;
      }

      _deleteFavoriteGroupConfirmationDialogModel.setFavoriteGroupId(dto.id);

      if (_uiRootModel.getModal() != _modalEnum.DeleteFavoriteGroupConfirmationDialog) {
        _uiRootModel.setModal(_modalEnum.DeleteFavoriteGroupConfirmationDialog);
      }
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: DeleteFavoriteGroupConfirmationDialogController.destroy. ' + err);
      }
    };

    function init() {
      if (!deleteFavoriteGroupConfirmationDialogModel) {
        throw 'deleteFavoriteGroupConfirmationDialogModel not supplied.';
      }

      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;
      _deleteFavoriteGroupConfirmationDialogModel = deleteFavoriteGroupConfirmationDialogModel;

      return that;
    }

    return init();
  }

  app.DeleteFavoriteGroupConfirmationDialogController = DeleteFavoriteGroupConfirmationDialogController;

}(wizerati));
;(function (app) {
  'use strict';

  function FavoriteGroupController(favoritesCubeModel, uiRootModel) {

    if (!(this instanceof app.FavoriteGroupController)) {
      return new app.FavoriteGroupController(favoritesCubeModel, uiRootModel);
    }

    var that = this,
        _favoritesCubeModel = null,
        _uiRootModel = null;

    this.create = function () {
      var faceStatuses = _favoritesCubeModel.getFaceStatuses();
      if (faceStatuses.indexOf(false) === -1) {
        throw 'Up to six favorite groups may be created.';
      }

      faceStatuses[faceStatuses.indexOf(false)] = true;
      _favoritesCubeModel.setFaceStatuses(faceStatuses);
    };

    this.destroy = function (dto) {
      if (dto.id == null) {
        throw 'id not supplied.';
      }

      _favoritesCubeModel.deactivateFace(dto.id);
      _uiRootModel.setModal(null);
    };

    function init() {
      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied.';
      }

      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _favoritesCubeModel = favoritesCubeModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.FavoriteGroupController = FavoriteGroupController;

}(wizerati));
;(function (app) {
  'use strict';

  function FavoritesController(favoritesCubeModel, selectedCubeFaceModel) {

    if (!(this instanceof app.FavoritesController)) {
      return new app.FavoritesController(favoritesCubeModel,
          selectedCubeFaceModel);
    }

    var that = this,
        _favoritesCubeModel = null,
        _selectedCubeFaceModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      var currentCubeFace = _selectedCubeFaceModel.getSelectedCubeFaceId();
      if (_.find(_favoritesCubeModel.getFavorites[currentCubeFace], function (id) {
        return id === dto.id;
      })) {
        return;
      }

      _favoritesCubeModel.addFavorite(dto.id, currentCubeFace);
    };

    this.destroy = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _favoritesCubeModel.removeFavorite(dto.id, _selectedCubeFaceModel.getSelectedCubeFaceId());
    };

    function init() {
      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied.';
      }

      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied.';
      }

      _favoritesCubeModel = favoritesCubeModel;
      _selectedCubeFaceModel = selectedCubeFaceModel;

      return that;
    }

    return init();
  }

  app.FavoritesController = FavoritesController;

}(wizerati));
;(function (app) {
  'use strict';

  function FavoritesCubeModeController(favoritesCubeModel) {

    if (!(this instanceof app.FavoritesCubeModeController)) {
      return new app.FavoritesCubeModeController(favoritesCubeModel);
    }

    var that = this,
        _favoritesCubeModel = null;

    this.update = function (dto) {
      _favoritesCubeModel.setMode(dto.mode);
    };

    function init() {
      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied.';
      }

      _favoritesCubeModel = favoritesCubeModel;

      return that;
    }

    return init();
  }

  app.FavoritesCubeModeController = FavoritesCubeModeController;

}(wizerati));
;(function (app) {
  'use strict';

  function HiddenItemsController(hiddenItemsModel) {

    if (!(this instanceof app.HiddenItemsController)) {
      return new app.HiddenItemsController(hiddenItemsModel);
    }

    var that = this,
        _hiddenItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _hiddenItemsModel.addHiddenItemId(dto.id);
    };

    this.destroy = function (dto) {

      _hiddenItemsModel.removeHiddenItemId(dto.id);
    };

    function init() {
      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied.';
      }

      _hiddenItemsModel = hiddenItemsModel;

      return that;
    }

    return init();
  }

  app.HiddenItemsController = HiddenItemsController;

}(wizerati));
;(function (app) {
  'use strict';

  function HomeController(uiRootModel, searchPanelModel, resultListModel) {

    if (!(this instanceof app.HomeController)) {
      return new app.HomeController(uiRootModel, searchPanelModel, resultListModel);
    }

    var that = this,
        _uiRootModel = null,
        _searchPanelModel = null,
        _resultListModel = null,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _searchPanelModeEnum = wizerati.mod('enum').SearchPanelMode,
        _resultListModeEnum = wizerati.mod('enum').ResultListMode;


    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch, {silent: true}); //todo: retrieve state from local state bag
        _searchPanelModel.setMode(_searchPanelModeEnum.Default, {silent: false});
        _resultListModel.setMode(_resultListModeEnum.Default, {silent: false});
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: HomeController.index. ' + err);
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _uiRootModel = uiRootModel;
      _searchPanelModel = searchPanelModel;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.HomeController = HomeController;

}(wizerati));
;//(function (app) {
//  "use strict";
//
//  function ItemsController(uiRootModel, singleItemModel, itemRepository) {
//
//    if (!(this instanceof app.ItemsController)) {
//      return new app.ItemsController(uiRootModel, singleItemModel, itemRepository);
//    }
//
//    var that = this,
//        _uiModeEnum = wizerati.mod("enum").UIMode,
//        _uiRootModel = null,
//        _singleItemModel = null,
//        _itemRepository = null;
//
//    this.show = function (dto) {
//      try {
//        _uiRootModel.setUIMode(_uiModeEnum.SingleItem);
//        _itemRepository.getById(dto.id, function (item) {
//          _singleItemModel.setItem(item.id);
//        });
//      } catch (err) {
//        console.log("error: ItemsController.show. " + err);
//      }
//    };
//
//    this.uriTransformShow = function (uri, dto) {
//      return uri + '?id=' + encodeURIComponent(dto.id);
//    };
//
//    function init() {
//      if (!uiRootModel) {
//        throw "uiRootModel not supplied.";
//      }
//
//      if (!searchFormModel) {
//        throw "searchFormModel not supplied.";
//      }
//
//      if (!searchService) {
//        throw "searchService not supplied.";
//      }
//
//      if (!resultListModel) {
//        throw "resultListModel not supplied.";
//      }
//
//      _uiRootModel = uiRootModel;
//      _searchFormModel = searchFormModel;
//      _searchService = searchService;
//      _resultListModel = resultListModel;
//
//      return that;
//    }
//
//    return init();
//  }
//
//  app.ItemsController = ItemsController;
//
//}(wizerati));
//
//
////throw "script downloaded to be assigned to an object in a known location and then subsequently invoked by the search controller for wait, success, fail, timeout";
;(function (app) {
  'use strict';

  function ItemsOfInterestController(itemsOfInterestModel) {

    if (!(this instanceof app.ItemsOfInterestController)) {
      return new app.ItemsOfInterestController(itemsOfInterestModel);
    }

    var that = this,
        _itemsOfInterestModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _itemsOfInterestModel.addItemOfInterest(dto.id);
    };

    //todo: result list items should be object literals like {id:'foo'}
    this.destroy = function (dto) {
      //take control of the rendering process here to avoid the jarring re-paint with a massively changed width

      _itemsOfInterestModel.removeItemOfInterest(dto.id);
    };

    function init() {
      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      _itemsOfInterestModel = itemsOfInterestModel;

      return that;
    }

    return init();
  }

  app.ItemsOfInterestController = ItemsOfInterestController;

}(wizerati));
;(function (app) {
  'use strict';

  function LoginController(loginPanelModel, uiRootModel) {

    if (!(this instanceof app.LoginController)) {
      return new app.LoginController(loginPanelModel, uiRootModel);
    }

    var that = this,
        _loginPanelModel = null,
        _uiRootModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.LogIn);
        _loginPanelModel.setIsVisible(true);
      } catch (err) {
        console.log('error: LoginController.index');
      }
    };

    function init() {
      if (!loginPanelModel) {
        throw 'loginPanelModel not supplied.';
      }
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _loginPanelModel = loginPanelModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.LoginController = LoginController;

}(wizerati));
;(function (app) {
  'use strict';

  //for account entity manipulation for the purchase panel
  function PurchasePanelAccountsController(purchasePanelModel, accountService) {

    if (!(this instanceof app.PurchasePanelAccountsController)) {
      return new app.PurchasePanelAccountsController(purchasePanelModel, accountService);
    }

    var that = this,
        _accountService = null,
        _purchasePanelModel = null,
        _modalEnum = app.mod('enum').Modal;

    this.create = function (dto) {
      try {
        _accountService.create(dto.name, dto.email,
            { success: function () {
              _purchasePanelModel.setIsWaiting(' ');
              app.instance.router.redirect('/purchasepanel?tab=3');
            },
              fail: function () {
                _purchasePanelModel.setIsWaiting(' ');
                var notifications = _purchasePanelModel.getNotifications();
                notifications.push({type: 'error', message: 'An error occurred while creating your account.'});
                _purchasePanelModel.setNotifications(notifications);
              },
              wait: function () {
                _purchasePanelModel.setIsWaiting('success');
              },
              timeout: function () {
                _purchasePanelModel.setIsTimedOut('success');
              } });
      }
      catch (e) {
        throw 'error in PurchasePanelAccountsController.create. ' + e;
      }
    };

    function init() {
      if (!purchasePanelModel) {
        throw 'purchasePanelModel not supplied.';
      }

      if (!accountService) {
        throw 'accountService not supplied.';
      }

      _purchasePanelModel = purchasePanelModel;
      _accountService = accountService;

      return that;
    }

    return init();
  }

  app.PurchasePanelAccountsController = PurchasePanelAccountsController;

}(wizerati));
;(function (app) {
  'use strict';

  function PurchasePanelController(purchasePanelModel, uiRootModel) {

    if (!(this instanceof app.PurchasePanelController)) {
      return new app.PurchasePanelController(purchasePanelModel, uiRootModel);
    }

    var that = this,
        _purchasePanelModel = null,
        _uiRootModel = null,
        _modalEnum = app.mod('enum').Modal;

    this.index = function (dto) {
      try {
        if (_uiRootModel.getModal() != _modalEnum.Purchase) {
          _uiRootModel.setModal(_modalEnum.Purchase);
        }

        _purchasePanelModel.setActiveTab(dto.tab);
      } catch (err) {
        console.log('error: PurchasePanelController.show. ' + err);
      }
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: PurchasePanelController.destroy. ' + err);
      }
    };

    function init() {
      if (!purchasePanelModel) {
        throw 'purchasePanelModel not supplied.';
      }

      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _purchasePanelModel = purchasePanelModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.PurchasePanelController = PurchasePanelController;

}(wizerati));
;(function (app) {
  'use strict';

  function ResultListModeController(resultListModel) {

    if (!(this instanceof app.ResultListModeController)) {
      return new app.ResultListModeController(resultListModel);
    }

    var that = this,
        _resultListModel = null;

    this.update = function (dto) {
      try {
        if (_resultListModel.getMode() !== dto.mode) {
          _resultListModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: ResultListModeController.update. ' + err);
      }
    };

    function init() {
      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.ResultListModeController = ResultListModeController;

}(wizerati));
;(function (app) {
  'use strict';

  function SearchController(uiRootModel, searchFormModel, searchService, resultListModel, guidFactory) {

    if (!(this instanceof app.SearchController)) {
      return new app.SearchController(uiRootModel,
          searchFormModel,
          searchService,
          resultListModel, guidFactory);
    }

    var that = this,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _uiRootModel = null,
        _searchFormModel = null,
        _searchService = null,
        _resultListModel = null,
        _guidFactory = null;

    this.show = function (dto) {
      try {
        if (dto.__isInvertebrateExternal__) {
          _searchFormModel.setKeywords(dto.keywords, {silent: true});
          _searchFormModel.setLocation(dto.location, {silent: true});
          _searchFormModel.setRate(dto.r, {silent: true});
        }

        _uiRootModel.setUIMode(_uiModeEnum.Search);
        _searchFormModel.setIsWaiting('true');
        _searchService.runSearch(dto.keywords,
            dto.location,
            dto.r,
            function done(results) {
              _resultListModel.setResults(_.map(results, function (r) {
                return r.id;
              }), _guidFactory.create());
              _searchFormModel.setIsWaiting('false', {silent: true}); //silent to because we are taking special control over the rendering of the wait state.
            });
      } catch (err) {
        console.log('error: SearchController.show. ' + err);
      }
    };

    this.uriTransformShow = function (uri, dto) {
      return uri + '?keywords=' + encodeURIComponent(dto.keywords) + '&location=' + encodeURIComponent(dto.location) + '&r=' + encodeURIComponent(dto.r);
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      if (!searchFormModel) {
        throw 'searchFormModel not supplied.';
      }

      if (!searchService) {
        throw 'searchService not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      if (!guidFactory) {
        throw 'guidFactory not supplied.';
      }

      _uiRootModel = uiRootModel;
      _searchFormModel = searchFormModel;
      _searchService = searchService;
      _resultListModel = resultListModel;
      _guidFactory = guidFactory;

      return that;
    }

    return init();
  }

  app.SearchController = SearchController;

}(wizerati));
;(function (app) {
  'use strict';

  function SearchPanelModeController(searchPanelModel) {

    if (!(this instanceof app.SearchPanelModeController)) {
      return new app.SearchPanelModeController(searchPanelModel);
    }

    var that = this,
        _searchPanelModel = null;

    this.update = function (dto) {
      try {
        if (_searchPanelModel.getMode() !== dto.mode) {
          _searchPanelModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: SearchPanelController.update. ' + err);
      }
    };

    function init() {
      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      _searchPanelModel = searchPanelModel;

      return that;
    }

    return init();
  }

  app.SearchPanelModeController = SearchPanelModeController;

}(wizerati));
;(function (app) {
  'use strict';

  function SelectedCubeFaceController(selectedCubeFaceModel) {

    if (!(this instanceof app.SelectedCubeFaceController)) {
      return new app.SelectedCubeFaceController(selectedCubeFaceModel);
    }

    var that = this,
        _selectedCubeFaceModel = null;

    this.update = function (dto) {
      try {
        _selectedCubeFaceModel.setSelectedCubeFaceId(dto.id);
      } catch (err) {
        console.log('error: SelectedCubeFaceController.update. ' + err);
      }
    };

    function init() {
      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied.';
      }

      _selectedCubeFaceModel = selectedCubeFaceModel;

      return that;
    }

    return init();
  }

  app.SelectedCubeFaceController = SelectedCubeFaceController;

}(wizerati));
;(function (app) {
  'use strict';

  function SelectedItemController(selectedItemModel, searchPanelModel, resultListModel) {

    if (!(this instanceof app.SelectedItemController)) {
      return new app.SelectedItemController(selectedItemModel, searchPanelModel, resultListModel);
    }

    var that = this,
        _selectedItemModel = null,
        _searchPanelModel = null,
        _resultListModel = null,
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode,
        _resultListModeEnum = app.mod('enum').ResultListMode;

    this.update = function (dto) {
      try {
        if (!dto) {
          throw 'dto not supplied';
        }

        if (dto.__isInvertebrateExternal__) {
          app.instance.router.redirect('/items/show?id=' + dto.id);
          return;
        }

        if (dto.source === 'results') {
          _searchPanelModel.setMode(_searchPanelModeEnum.Minimized);
        } else if (dto.source === 'favorites') {
          _resultListModel.setMode(_resultListModeEnum.Minimized, {silent: true});
        }

        _selectedItemModel.setSelectedItemId(dto.id);
      } catch (err) {
        console.log('error: SelectedItemController.update. ' + err);
      }
    };

    function init() {
      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _selectedItemModel = selectedItemModel;
      _searchPanelModel = searchPanelModel;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.SelectedItemController = SelectedItemController;

}(wizerati));
;(function (app) {
  'use strict';

  function SessionController(loginPanelModel, authenticationService) {

    if (!(this instanceof app.SessionController)) {
      return new app.SessionController(loginPanelModel, authenticationService);
    }

    var that = this,
        _loginPanelModel = null,
        _authenticationService = null;

    this.create = function () {
      if (!_authenticationService.authenticate(_loginPanelModel.getUsername(), _loginPanelModel.getPassword())) {
        _loginPanelModel.setIsLoginFailedMessageVisible(true);
      }

      //...
    };

    function init() {
      if (!loginPanelModel) {
        throw 'loginPanelModel not supplied.';
      }

      if (!authenticationService) {
        throw 'authenticationService not supplied.';
      }

      _loginPanelModel = loginPanelModel;
      _authenticationService = authenticationService;

      return that;
    }

    return init();
  }

  app.SessionController = SessionController;

}(wizerati));
;(function (app) {
  'use strict';

  function FavoriteViewFactory(loginService, itemRepository, selectedItemModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

    if (!(this instanceof app.FavoriteViewFactory)) {
      return new app.FavoriteViewFactory(loginService,
          itemRepository,
          selectedItemModel,
          hiddenItemsModel,
          actionedItemsModel,
          itemsOfInterestModel);
    }

    var that = this,
        _loginService = null,
        _itemRepository = null,
        _selectedItemModel = null,
        _hiddenItemsModel = null,
        _actionedItemsModel = null,
        _itemsOfInterestModel = null,
        _roleEnum = app.mod('enum').UserRole;

    this.create = function (id, currentCubeFace, done) {
      var role = _loginService.getCurrentRole();
      switch (role) {
        case _roleEnum.Employer:
        case _roleEnum.EmployerStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            item.isItemOfInterest = _itemsOfInterestModel.isItemOfInterest(item.id);
            done(new app.ContractorFavoriteView(item).render().$el);
          });
          break;
        case _roleEnum.Contractor:
        case _roleEnum.ContractorStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            item.isItemOfInterest = _itemsOfInterestModel.isItemOfInterest(item.id);
            done(new app.ContractFavoriteView(item).render().$el);
          });
          break;
        default:
          throw 'invalid user role "' + role + '"';
      }
    };

    function init() {
      if (!loginService) {
        throw 'loginService not supplied.';
      }

      if (!itemRepository) {
        throw 'itemRepository not supplied.';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied.';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      _loginService = loginService;
      _itemRepository = itemRepository;
      _selectedItemModel = selectedItemModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;
      _itemsOfInterestModel = itemsOfInterestModel;

      return that;
    }

    return init();
  }

  app.FavoriteViewFactory = FavoriteViewFactory;

}(wizerati));
;(function (app) {
  'use strict';

  function GuidFactory() {

    if (!(this instanceof app.GuidFactory)) {
      return new app.GuidFactory();
    }

    var that = this;

    this.create = function () {
      var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };

      return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    };

    function init() {

      return that;
    }

    return init();
  }

  app.GuidFactory = GuidFactory;

}(wizerati));
;(function (app) {
  'use strict';

  //algo for re-drawing:
  //items in dom ! (in latest item of interest collection ? leave : collapse and remove)
  function ItemOfInterestViewFactory(loginService, itemRepository, selectedItemModel, itemsOfInterestModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel) {

    if (!(this instanceof app.ItemOfInterestViewFactory)) {
      return new app.ItemOfInterestViewFactory(loginService,
          itemRepository,
          selectedItemModel,
          itemsOfInterestModel,
          favoritesCubeModel,
          hiddenItemsModel,
          actionedItemsModel);
    }

    var that = this,
        _loginService = null,
        _itemRepository = null,
        _selectedItemModel = null,
        _itemsOfInterestModel = null,
        _favoritesCubeModel = null,
        _hiddenItemsModel = null,
        _actionedItemsModel = null,
        _roleEnum = app.mod('enum').UserRole;

    this.create = function (id, currentCubeFace, isSelectedItem, animateSelectedItem, done) {
      if (!id) {
        throw 'id not supplied.';
      }

      if (!currentCubeFace) {
        throw 'currentCubeFace not supplied.';
      }


      if (isSelectedItem === undefined || isSelectedItem === null) {
        throw 'isSelectedItem not supplied.';
      }

      if (animateSelectedItem === undefined || animateSelectedItem === null) {
        throw 'animateSelectedItem not supplied.';
      }

      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied.';
      }

      if (!done) {
        throw 'done not supplied.';
      }

      var role = _loginService.getCurrentRole();
      switch (role) {
        case _roleEnum.Employer:
        case _roleEnum.EmployerStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id);
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
            item.isPinned = !isSelectedItem;
            item.pinnedItemCount = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length;
            item.isPinnable = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 5 && !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
              i === id;
            });
            item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id));
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            var $e = new app.ContractorItemOfInterestView(item).render().$el;
            done($e);
          });
          break;
        case _roleEnum.Contractor:
        case _roleEnum.ContractorStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id);
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = isSelectedItem;
            item.isPinned = !isSelectedItem;
            item.pinnedItemCount = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length;
            item.isPinnable = !_hiddenItemsModel.isHidden(item.id) && (_itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 5 && (!isSelectedItem || !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
              return i === item.id;
            })));
            item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id)) && isSelectedItem && !_actionedItemsModel.isActioned(item.id);
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            item.isActionable = !_hiddenItemsModel.isHidden(item.id);
            done(new app.ContractItemOfInterestView(item).render().$el);
          });
          break;
        default:
          throw 'invalid user role "' + role + '"';
      }
    };

    function init() {
      if (!loginService) {
        throw 'loginService not supplied.';
      }

      if (!itemRepository) {
        throw 'itemRepository not supplied.';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied.';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied.';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      _loginService = loginService;
      _itemRepository = itemRepository;
      _selectedItemModel = selectedItemModel;
      _itemsOfInterestModel = itemsOfInterestModel;
      _favoritesCubeModel = favoritesCubeModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;

      return that;
    }

    return init();
  }

  app.ItemOfInterestViewFactory = ItemOfInterestViewFactory;

}(wizerati));
;(function (app) {
  'use strict';

  function ResultViewFactory(loginService, itemRepository, selectedItemModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

    if (!(this instanceof app.ResultViewFactory)) {
      return new app.ResultViewFactory(loginService,
          itemRepository,
          selectedItemModel,
          hiddenItemsModel,
          actionedItemsModel,
          itemsOfInterestModel);
    }

    var that = this,
        _loginService = null,
        _itemRepository = null,
        _selectedItemModel = null,
        _hiddenItemsModel = null,
        _actionedItemsModel = null,
        _itemsOfInterestModel = null,
        _roleEnum = app.mod('enum').UserRole;

    this.create = function (id, currentCubeFace, done) {
      if (!id) {
        throw 'id not supplied.';
      }

      if (!currentCubeFace) {
        throw 'currentCubeFace not supplied.';
      }

      if (!done) {
        throw 'done not supplied.';
      }

      var role = _loginService.getCurrentRole();
      switch (role) {
        case _roleEnum.Employer:
        case _roleEnum.EmployerStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            done(new app.ContractorResultView(item).render().$el);
          });
          break;
        case _roleEnum.Contractor:
        case _roleEnum.ContractorStranger:
          _itemRepository.getById(id, function (item) {
            item.isFavorite = item['isFavoriteOnFace' + currentCubeFace];
            item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
            item.isHidden = _hiddenItemsModel.isHidden(item.id);
            item.isActioned = _actionedItemsModel.isActioned(item.id);
            item.isPinned = _itemsOfInterestModel.isPinned(item.id);
            done(new app.ContractResultView(item).render().$el);
          });
          break;
        default:
          throw 'invalid user role "' + role + '"';
      }
    };

    function init() {
      if (!loginService) {
        throw 'loginService not supplied.';
      }

      if (!itemRepository) {
        throw 'itemRepository not supplied.';
      }

      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied.';
      }

      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      _loginService = loginService;
      _itemRepository = itemRepository;
      _selectedItemModel = selectedItemModel;
      _hiddenItemsModel = hiddenItemsModel;
      _actionedItemsModel = actionedItemsModel;
      _itemsOfInterestModel = itemsOfInterestModel;

      return that;
    }

    return init();
  }

  app.ResultViewFactory = ResultViewFactory;

}(wizerati));
;(function (app) {
  'use strict';

  function WizeratiClientRequestFactory() {

    if (!(this instanceof app.WizeratiClientRequestFactory)) {
      return new app.WizeratiClientRequestFactory();
    }

    var that = this,
        _config = null;

    this.createForGet = function (entity) {
      if (!entity) {
        throw 'entity not supplied.'
      }

      return { uri: '/foo', method: 'PUT', data: 'bar' };
    };

    function init() {

      return that;
    }

    return init();
  }

  app.WizeratiClientRequestFactory = WizeratiClientRequestFactory;

}(wizerati));
;(function (app) {
  'use strict';

  function ItemCache() {

    if (!(this instanceof app.ItemCache)) {
      return new app.ItemCache();
    }

    var that = this;

    this.items = {};

    //note: if the item already exists then
    // any additional metadata on the object
    // is retained (e.g. whether it is
    // currently selected)
    this.insert = function (items) {
      if (!items) {
        throw 'items not supplied.';
      }

      _.each(items, function (i) {
        that.items[i.id] = _.extend({}, that.items[i.id], i);
      });
    };

    this.exists = function (key) {
      if (!key) {
        throw 'key not supplied.';
      }

      return !!(that.items[key]);
    };

    function init() {

      return that;
    }

    return init();
  }

  app.ItemCache = ItemCache;

}(wizerati));
;(function (app) {
  'use strict';

  function AccountEntity() {

    if (!(this instanceof app.AccountEntity)) {
      return new app.AccountEntity();
    }

    var that = this,
        _loginService = null,
        _config = null;

    this.name = '';
    this.email = '';
  }

  app.AccountEntity = AccountEntity;

}(wizerati));
;(function (app, $) {
  'use strict';

  function ItemRepository(itemCache, croniclService) {

    if (!(this instanceof app.ItemRepository)) {
      return new app.ItemRepository(itemCache,
          croniclService);
    }

    var that = this,
        _itemCache = null,
        _croniclService = null;

    this.getById = function (id, done) {
      var cachedItem = _itemCache.items[id];
      if (cachedItem) {
        done(cachedItem);
        return;
      }

      function success(data) {
        if (!data) {
          throw 'data not supplied';
        }

        var result = $.parseJSON(data);
        _itemCache.insert([result]);

        done(result);
      }

      setTimeout(function () {
        $.ajax({ url: _croniclService.getCroniclUri() + 'items/' + id,
          success: success,
          cache: false });
      }, 2000);
    };

    function init() {
      if (!itemCache) {
        throw 'itemCache not supplied.';
      }

      if (!croniclService) {
        throw 'croniclService not supplied.';
      }

      _itemCache = itemCache;
      _croniclService = croniclService;

      return that;
    }

    return init();
  }

  app.ItemRepository = ItemRepository;

}(wizerati, $));
;//order of declaration matters here.
(function (mod) {
  'use strict';

  try {
    mod.UserRole = {
      Contractor: '1',
      Employer: '2',
      ContractorStranger: '3',
      EmployerStranger: '4'
    };

    mod.UIMode = {
      NotReady: '-1',
      GreenfieldSearch: '0',
      Search: '1',
      SingleItem: '2'
    };

    mod.Modal = {
      Purchase: '0',
      LogIn: '1',
      MyAccount: '2',
      AccountActivation: '3',
      DeleteFavoriteGroupConfirmationDialog: '4'
    };

    mod.SearchPanelMode = {
      Default: '0',
      Minimized: '1'
    };

    mod.ResultListMode = {
      Default: '0',
      Minimized: '1'
    };

    mod.ItemsOfInterestAction = {
      Remove: '0'
    };

    mod.FavoritesCubeMode = {
      Default: '0',
      Edit: '1'
    };

  } catch (e) {
    throw 'problem registering enum module. ' + e;
  }

}(wizerati.mod('enum')));


(function (mod) {
  'use strict';

  try {
    mod.config = new wizerati.Config(invertebrate.env.dev);
  }
  catch (e) {
    throw 'problem registering config module. ' + e;
  }

}(wizerati.mod('config')));

(function (mod) {
  'use strict';

  try {
    //todo fix the dep injection here
    mod.wizeratiClient = new wizerati.WizeratiClient(new wizerati.WizeratiClientRequestFactory(), 'bar', 'bam');
  }
  catch (e) {
    throw 'problem registering clients module. ' + e;
  }

}(wizerati.mod('clients')));

(function (mod) {
  'use strict';

  try {
    mod.itemCache = new wizerati.ItemCache();
  }
  catch (e) {
    throw 'problem registering caches module. ' + e;
  }

}(wizerati.mod('caches')));

(function (mod) {
  'use strict';

  try {
    mod.authenticationService = new wizerati.AuthenticationService();
    mod.cookieService = new wizerati.CookieService();
    mod.logInService = new wizerati.LogInService(mod.cookieService);
    mod.croniclService = new wizerati.CroniclService(mod.logInService, wizerati.mod('config').config); //pass in login service instead?
    mod.searchService = new wizerati.SearchService(mod.croniclService, wizerati.mod('caches').itemCache);
    mod.accountService = new wizerati.AccountService(wizerati.mod('clients').wizeratiClient);
  }
  catch (e) {
    throw 'problem registering services module. ' + e;
  }

}(wizerati.mod('services')));

(function (mod) {

  try {
    mod.itemRepository = new wizerati.ItemRepository(wizerati.mod('caches').itemCache, wizerati.mod('services').croniclService);
  }
  catch (e) {
    throw 'problem registering repositories module. ' + e;
  }

}(wizerati.mod('repositories')));

(function (mod) {
  'use strict';

  try {
    mod.TemplateUriHelper = new invertebrate.TemplateUriHelper(wizerati.mod('config').config, wizerati.mod('services').croniclService.getCroniclUri);
  }
  catch (e) {
    throw 'problem registering templates module. ' + e;
  }

}(wizerati.mod('templates')));

(function (mod, i, config) {
  'use strict';

  function traceCalls(context, done) {
    if (config.enableTrace === 'true') {
      console.log(context.timestamp + ': ' + context.ctor + '::' + context.methodName + '%s', context.args.length > 0 ? ' called with: ' + context.args : '');
    }
    return done(null, null);
  }

  try {
    mod.searchFormModel = i.util.decorate(new wizerati.SearchFormModel(), traceCalls);
    mod.uiRootModel = i.util.decorate(new wizerati.UIRootModel(), traceCalls);
    mod.loginPanelModel = i.util.decorate(new wizerati.LoginPanelModel(), traceCalls);
    mod.resultListModel = i.util.decorate(new wizerati.ResultListModel(), traceCalls);
    mod.selectedCubeFaceModel = i.util.decorate(new wizerati.SelectedCubeFaceModel(), traceCalls);
    mod.selectedItemModel = i.util.decorate(new wizerati.SelectedItemModel(), traceCalls);
    mod.hiddenItemsModel = i.util.decorate(new wizerati.HiddenItemsModel(), traceCalls);
    mod.actionedItemsModel = i.util.decorate(new wizerati.ActionedItemsModel(), traceCalls);
    mod.favoritesCubeModel = i.util.decorate(new wizerati.FavoritesCubeModel(wizerati.mod('repositories').itemRepository, mod.resultListModel), traceCalls);
    mod.itemsOfInterestModel = i.util.decorate(new wizerati.ItemsOfInterestModel(mod.selectedItemModel), traceCalls);
    mod.purchasePanelModel = i.util.decorate(new wizerati.PurchasePanelModel(), traceCalls);
    mod.searchPanelModel = i.util.decorate(new wizerati.SearchPanelModel(), traceCalls);
    mod.deleteFavoriteGroupConfirmationDialogModel = i.util.decorate(new wizerati.DeleteFavoriteGroupConfirmationDialogModel(), traceCalls);
  }
  catch (e) {
    throw 'problem registering models module. ' + e;
  }

}(wizerati.mod('models'), invertebrate, wizerati.mod('config').config.config));

(function (mod) {
  'use strict';

  try {
    mod.favoriteViewFactory = new wizerati.FavoriteViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.itemOfInterestViewFactory = new wizerati.ItemOfInterestViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').itemsOfInterestModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel);
    mod.resultViewFactory = new wizerati.ResultViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.wizeratiClientRequestFactory = new wizerati.WizeratiClientRequestFactory();
    mod.guidFactory = new wizerati.GuidFactory();
  }
  catch (e) {
    throw 'problem registering factories module. ' + e;
  }

}(wizerati.mod('factories')));

(function (mod) {
  'use strict';

  try {
    mod.searchFormView = new wizerati.SearchFormView(wizerati.mod('models').searchFormModel);
    mod.uiRootView = new wizerati.UIRootView(wizerati.mod('models').uiRootModel);
    mod.loginPanelView = new wizerati.LoginPanelView(wizerati.mod('models').loginPanelModel);
    mod.favoritesCubeView = new wizerati.FavoritesCubeView(wizerati.mod('models').favoritesCubeModel, wizerati.mod('factories').favoriteViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.resultListView = new wizerati.ResultListView(wizerati.mod('models').resultListModel, wizerati.mod('factories').resultViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.itemsOfInterestView = new wizerati.ItemsOfInterestView(wizerati.mod('models').itemsOfInterestModel, wizerati.mod('factories').itemOfInterestViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel);
    mod.purchasePanelView = new wizerati.PurchasePanelView(wizerati.mod('models').purchasePanelModel);
    mod.searchPanelView = new wizerati.SearchPanelView(wizerati.mod('models').searchPanelModel);
    mod.deleteFavoriteGroupConfirmationDialogView = new wizerati.DeleteFavoriteGroupConfirmationDialogView(wizerati.mod('models').deleteFavoriteGroupConfirmationDialogModel, wizerati.mod('models').favoritesCubeModel);
  }
  catch (e) {
    throw 'problem registering views module. ' + e;
  }

}(wizerati.mod('views')));

(function (mod) {
  'use strict';

  try {
    mod.sessionController = new wizerati.SessionController(wizerati.mod('models').loginPanelModel,
        wizerati.mod('services').authenticationService);
    mod.loginController = new wizerati.LoginController(wizerati.mod('models').loginPanelModel,
        wizerati.mod('models').uiRootModel);
    mod.homeController = new wizerati.HomeController(wizerati.mod('models').uiRootModel, wizerati.mod('models').searchPanelModel, wizerati.mod('models').resultListModel);
    mod.advertisersController = new wizerati.AdvertisersController(wizerati.mod('models').uiRootModel);
    mod.searchController = new wizerati.SearchController(wizerati.mod('models').uiRootModel,
        wizerati.mod('models').searchFormModel,
        wizerati.mod('services').searchService,
        wizerati.mod('models').resultListModel,
        wizerati.mod('factories').guidFactory);
    mod.selectedItemController = new wizerati.SelectedItemController(wizerati.mod('models').selectedItemModel, wizerati.mod('models').searchPanelModel, wizerati.mod('models').resultListModel);
    mod.favoritesController = new wizerati.FavoritesController(wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').selectedCubeFaceModel);
    mod.selectedCubeFaceController = new wizerati.SelectedCubeFaceController(wizerati.mod('models').selectedCubeFaceModel);
    mod.itemsOfInterestController = new wizerati.ItemsOfInterestController(wizerati.mod('models').itemsOfInterestModel);
    mod.hiddenItemsController = new wizerati.HiddenItemsController(wizerati.mod('models').hiddenItemsModel);
    mod.actionedItemsController = new wizerati.ActionedItemsController(wizerati.mod('models').actionedItemsModel);
    mod.purchasePanelController = new wizerati.PurchasePanelController(wizerati.mod('models').purchasePanelModel, wizerati.mod('models').uiRootModel);
    mod.accountActivationController = new wizerati.AccountActivationController(wizerati.mod('models').uiRootModel);
    mod.accountActivationPanelController = new wizerati.AccountActivationPanelController(wizerati.mod('models').uiRootModel);
    mod.purchasePanelAccountsController = new wizerati.PurchasePanelAccountsController(wizerati.mod('models').purchasePanelModel, wizerati.mod('services').accountService);
    mod.searchPanelModeController = new wizerati.SearchPanelModeController(wizerati.mod('models').searchPanelModel);
    mod.resultListModeController = new wizerati.ResultListModeController(wizerati.mod('models').resultListModel);
    mod.favoriteGroupController = new wizerati.FavoriteGroupController(wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').uiRootModel);
    mod.favoritesCubeModeController = new wizerati.FavoritesCubeModeController(wizerati.mod('models').favoritesCubeModel);
    mod.deleteFavoriteGroupConfirmationDialogController = new wizerati.DeleteFavoriteGroupConfirmationDialogController(wizerati.mod('models').deleteFavoriteGroupConfirmationDialogModel, wizerati.mod('models').uiRootModel);
  }
  catch (e) {
    throw 'problem registering controllers module. ' + e;
  }

}(wizerati.mod('controllers')));

(function (mod) {
  'use strict';

  try {
    mod.postRenderActions = [];
  }
  catch (e) {
    throw 'problem registering ui module. ' + e;
  }

}(wizerati.mod('ui')));
;(function (app) {
  'use strict';

  function RouteRegistrar() {
    if (!(this instanceof app.RouteRegistrar)) {
      return new app.RouteRegistrar();
    }

    var that = this;

    this.registerRoutes = function (instance) {
      try {

        instance.router.registerRoute('/', function () {
          app.mod('controllers').homeController.index();
        });

        instance.router.registerRoute('/session/create', function (model) {
          app.mod('controllers').sessionController.create(model);
        });

        instance.router.registerRoute('/login', function () {
          app.mod('controllers').loginController.index();
        });

        instance.router.registerRoute('/advertisers', function () {
          app.mod('controllers').advertisersController.index();
        });

        instance.router.registerRoute('/search', function (dto) {
          app.mod('controllers').searchController.show(dto);
        }, { title: 'Wizerati Search', uriTransform: app.mod('controllers').searchController.uriTransformShow });

        instance.router.registerRoute('/selecteditem/update', function (dto) {
          app.mod('controllers').selectedItemController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/favorites/create', function (dto) {
          app.mod('controllers').favoritesController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/favorites/destroy', function (dto) {
          app.mod('controllers').favoritesController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/selectedcubeface/update', function (dto) {
          app.mod('controllers').selectedCubeFaceController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/itemsofinterest/create', function (dto) {
          app.mod('controllers').itemsOfInterestController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/itemsofinterest/destroy', function (dto) {
          app.mod('controllers').itemsOfInterestController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/hiddenitems/create', function (dto) {
          app.mod('controllers').hiddenItemsController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/hiddenitems/destroy', function (dto) {
          app.mod('controllers').hiddenItemsController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/actioneditems/create', function (dto) {
          app.mod('controllers').actionedItemsController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/actioneditems/destroy', function (dto) {
          app.mod('controllers').actionedItemsController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/purchasepanel', function (dto) {
          app.mod('controllers').purchasePanelController.index(dto);
        });

        instance.router.registerRoute('/purchasepanel/destroy', function (dto) {
          app.mod('controllers').purchasePanelController.destroy(dto);
        });

        instance.router.registerRoute('/accountactivationpanel', function (dto) {
          app.mod('controllers').accountActivationPanelController.index(dto);
        });

        instance.router.registerRoute('/accountactivationpanel/destroy', function (dto) {
          app.mod('controllers').accountActivationPanelController.destroy(dto);
        });

        instance.router.registerRoute('/accountactivation/create', function (dto) {
          app.mod('controllers').accountActivationController.create(dto);
        });

        instance.router.registerRoute('/purchasepanelaccounts/create', function (dto) {
          app.mod('controllers').purchasePanelAccountsController.create(dto);
        });

        instance.router.registerRoute('/searchpanelmode/update', function (dto) {
          app.mod('controllers').searchPanelModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/resultlistmode/update', function (dto) {
          app.mod('controllers').resultListModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritegroup/create', function (dto) {
          app.mod('controllers').favoriteGroupController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritegroup/destroy', function (dto) {
          app.mod('controllers').favoriteGroupController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritescubemode/update', function (dto) {
          app.mod('controllers').favoritesCubeModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/deletefavoritegroupconfirmationdialog', function (dto) {
          app.mod('controllers').deleteFavoriteGroupConfirmationDialogController.index(dto);
        }, { silent: true });

        instance.router.registerRoute('/deletefavoritegroupconfirmationdialog/destroy', function (dto) {
          app.mod('controllers').deleteFavoriteGroupConfirmationDialogController.destroy(dto);
        }, { silent: true });

      } catch (e) {
        throw 'RouteRegistrar::registerRoutes threw an exception. ' + e;
      }
    };

    function init() {
    }

    return init();
  }

  app.RouteRegistrar = RouteRegistrar;
}(wizerati));
;(function (app, invertebrate, _) {
  'use strict';

  console.log('apply should prompt the user for credentials if not signed in, otherwise present the fields for registration')
  function App(env, router) {
    if (!(this instanceof app.App)) {
      return new app.App(env, router);
    }

    var that = this;

    function init() {
      if (!env) {
        throw 'env not supplied';
      }

      if (!router) {
        throw 'router not supplied';
      }

      that.env = env;
      that.router = router;

      return _.extend(that, new invertebrate.App(app.mod('templates').TemplateUriHelper));
    }

    return init();
  }

  app.App = App;
}(wizerati, invertebrate, _));
;$(function () {
  'use strict';

  //dom binding
  window.wizerati.instance = new wizerati.App(window.invertebrate.env.dev, new window.invertebrate.Router('Wizerati'));

  _.each(window.wizerati.mod('views'), function (v) {
    v.onDomReady();
  });

  //this should happen at the end here to ensure everything is initialized before routing begins
  new wizerati.RouteRegistrar().registerRoutes(window.wizerati.instance);
});