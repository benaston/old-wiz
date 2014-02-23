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
})(Zepto);/*jshint onevar: false */
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
;'use strict';
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
}(invertebrate));;(function (invertebrate, $, _) {
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
        $el.html(tmpl({ model: _.clone(model) }, { jQuery: $ }));

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
}(invertebrate, $, _));
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

  function HomeController(uiRootModel) {

    if (!(this instanceof app.HomeController)) {
      return new app.HomeController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = wizerati.mod('enum').UIMode;


    this.index = function () {
      try {
//                throw 'get redirection after purchase panel/destroy working';
        _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch, {silent: true}); //todo: retrieve state from local state bag
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: HomeController.index. ' + err);
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
    mod.homeController = new wizerati.HomeController(wizerati.mod('models').uiRootModel);
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