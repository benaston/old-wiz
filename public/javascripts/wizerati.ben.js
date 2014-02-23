/*! wizerati 23-02-2014 */
var Zepto=function(){function a(a){return null==a?String(a):U[V.call(a)]||"object"}function b(b){return"function"==a(b)}function c(a){return null!=a&&a==a.window}function d(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function e(b){return"object"==a(b)}function f(a){return e(a)&&!c(a)&&Object.getPrototypeOf(a)==Object.prototype}function g(a){return"number"==typeof a.length}function h(a){return D.call(a,function(a){return null!=a})}function i(a){return a.length>0?x.fn.concat.apply([],a):a}function j(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function k(a){return a in G?G[a]:G[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function l(a,b){return"number"!=typeof b||H[j(a)]?b:b+"px"}function m(a){var b,c;return F[a]||(b=E.createElement(a),E.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),F[a]=c),F[a]}function n(a){return"children"in a?C.call(a.children):x.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function o(a,b,c){for(w in b)c&&(f(b[w])||Z(b[w]))?(f(b[w])&&!f(a[w])&&(a[w]={}),Z(b[w])&&!Z(a[w])&&(a[w]=[]),o(a[w],b[w],c)):b[w]!==v&&(a[w]=b[w])}function p(a,b){return null==b?x(a):x(a).filter(b)}function q(a,c,d,e){return b(c)?c.call(a,d,e):c}function r(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function s(a,b){var c=a.className,d=c&&c.baseVal!==v;return b===v?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function t(a){var b;try{return a?"true"==a||("false"==a?!1:"null"==a?null:/^0/.test(a)||isNaN(b=Number(a))?/^[\[\{]/.test(a)?x.parseJSON(a):a:b):a}catch(c){return a}}function u(a,b){b(a);for(var c in a.childNodes)u(a.childNodes[c],b)}var v,w,x,y,z,A,B=[],C=B.slice,D=B.filter,E=window.document,F={},G={},H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,J=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,M=/([A-Z])/g,N=["val","css","html","text","data","width","height","offset"],O=["after","prepend","before","append"],P=E.createElement("table"),Q=E.createElement("tr"),R={tr:E.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:Q,th:Q,"*":E.createElement("div")},S=/complete|loaded|interactive/,T=/^[\w-]*$/,U={},V=U.toString,W={},X=E.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Z=Array.isArray||function(a){return a instanceof Array};return W.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=X).appendChild(a),d=~W.qsa(e,b).indexOf(a),f&&X.removeChild(a),d},z=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},A=function(a){return D.call(a,function(b,c){return a.indexOf(b)==c})},W.fragment=function(a,b,c){var d,e,g;return J.test(a)&&(d=x(E.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(K,"<$1></$2>")),b===v&&(b=I.test(a)&&RegExp.$1),b in R||(b="*"),g=R[b],g.innerHTML=""+a,d=x.each(C.call(g.childNodes),function(){g.removeChild(this)})),f(c)&&(e=x(d),x.each(c,function(a,b){N.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},W.Z=function(a,b){return a=a||[],a.__proto__=x.fn,a.selector=b||"",a},W.isZ=function(a){return a instanceof W.Z},W.init=function(a,c){var d;if(!a)return W.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&I.test(a))d=W.fragment(a,RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}else{if(b(a))return x(E).ready(a);if(W.isZ(a))return a;if(Z(a))d=h(a);else if(e(a))d=[a],a=null;else if(I.test(a))d=W.fragment(a.trim(),RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}}return W.Z(d,a)},x=function(a,b){return W.init(a,b)},x.extend=function(a){var b,c=C.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){o(a,c,b)}),a},W.qsa=function(a,b){var c,e="#"==b[0],f=!e&&"."==b[0],g=e||f?b.slice(1):b,h=T.test(g);return d(a)&&h&&e?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:C.call(h&&!e?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},x.contains=function(a,b){return a!==b&&a.contains(b)},x.type=a,x.isFunction=b,x.isWindow=c,x.isArray=Z,x.isPlainObject=f,x.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},x.inArray=function(a,b,c){return B.indexOf.call(b,a,c)},x.camelCase=z,x.trim=function(a){return null==a?"":String.prototype.trim.call(a)},x.uuid=0,x.support={},x.expr={},x.map=function(a,b){var c,d,e,f=[];if(g(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return i(f)},x.each=function(a,b){var c,d;if(g(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},x.grep=function(a,b){return D.call(a,b)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){U["[object "+b+"]"]=b.toLowerCase()}),x.fn={forEach:B.forEach,reduce:B.reduce,push:B.push,sort:B.sort,indexOf:B.indexOf,concat:B.concat,map:function(a){return x(x.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return x(C.apply(this,arguments))},ready:function(a){return S.test(E.readyState)&&E.body?a(x):E.addEventListener("DOMContentLoaded",function(){a(x)},!1),this},get:function(a){return a===v?C.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return B.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):x(D.call(this,function(b){return W.matches(b,a)}))},add:function(a,b){return x(A(this.concat(x(a,b))))},is:function(a){return this.length>0&&W.matches(this[0],a)},not:function(a){var c=[];if(b(a)&&a.call!==v)this.each(function(b){a.call(this,b)||c.push(this)});else{var d="string"==typeof a?this.filter(a):g(a)&&b(a.item)?C.call(a):x(a);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return x(c)},has:function(a){return this.filter(function(){return e(a)?x.contains(this,a):x(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!e(a)?a:x(a)},last:function(){var a=this[this.length-1];return a&&!e(a)?a:x(a)},find:function(a){var b,c=this;return b="object"==typeof a?x(a).filter(function(){var a=this;return B.some.call(c,function(b){return x.contains(b,a)})}):1==this.length?x(W.qsa(this[0],a)):this.map(function(){return W.qsa(this,a)})},closest:function(a,b){var c=this[0],e=!1;for("object"==typeof a&&(e=x(a));c&&!(e?e.indexOf(c)>=0:W.matches(c,a));)c=c!==b&&!d(c)&&c.parentNode;return x(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=x.map(c,function(a){return(a=a.parentNode)&&!d(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return p(b,a)},parent:function(a){return p(A(this.pluck("parentNode")),a)},children:function(a){return p(this.map(function(){return n(this)}),a)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(a){return p(this.map(function(a,b){return D.call(n(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return x.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=m(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a);if(this[0]&&!c)var d=x(a).get(0),e=d.parentNode||this.length>1;return this.each(function(b){x(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){x(this[0]).before(a=x(a));for(var b;(b=a.children()).length;)a=b.first();x(a).append(this)}return this},wrapInner:function(a){var c=b(a);return this.each(function(b){var d=x(this),e=d.contents(),f=c?a.call(this,b):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=x(this);(a===v?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return x(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return x(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(b){var c=this.innerHTML;x(this).empty().append(q(this,a,b,c))})},text:function(a){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=a===v?"":""+a})},attr:function(a,b){var c;return"string"==typeof a&&b===v?0==this.length||1!==this[0].nodeType?v:"value"==a&&"INPUT"==this[0].nodeName?this.val():!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:this.each(function(c){if(1===this.nodeType)if(e(a))for(w in a)r(this,w,a[w]);else r(this,a,q(this,b,c,this.getAttribute(a)))})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&r(this,a)})},prop:function(a,b){return a=Y[a]||a,b===v?this[0]&&this[0][a]:this.each(function(c){this[a]=q(this,b,c,this[a])})},data:function(a,b){var c=this.attr("data-"+a.replace(M,"-$1").toLowerCase(),b);return null!==c?t(c):v},val:function(a){return 0===arguments.length?this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(b){this.value=q(this,a,b,this.value)})},offset:function(a){if(a)return this.each(function(b){var c=x(this),d=q(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(0==this.length)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(b,c){if(arguments.length<2){var d=this[0],e=getComputedStyle(d,"");if(!d)return;if("string"==typeof b)return d.style[z(b)]||e.getPropertyValue(b);if(Z(b)){var f={};return x.each(Z(b)?b:[b],function(a,b){f[b]=d.style[z(b)]||e.getPropertyValue(b)}),f}}var g="";if("string"==a(b))c||0===c?g=j(b)+":"+l(b,c):this.each(function(){this.style.removeProperty(j(b))});else for(w in b)b[w]||0===b[w]?g+=j(w)+":"+l(w,b[w])+";":this.each(function(){this.style.removeProperty(j(w))});return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(x(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?B.some.call(this,function(a){return this.test(s(a))},k(a)):!1},addClass:function(a){return a?this.each(function(b){y=[];var c=s(this),d=q(this,a,b,c);d.split(/\s+/g).forEach(function(a){x(this).hasClass(a)||y.push(a)},this),y.length&&s(this,c+(c?" ":"")+y.join(" "))}):this},removeClass:function(a){return this.each(function(b){return a===v?s(this,""):(y=s(this),q(this,a,b,y).split(/\s+/g).forEach(function(a){y=y.replace(k(a)," ")}),void s(this,y.trim()))})},toggleClass:function(a,b){return a?this.each(function(c){var d=x(this),e=q(this,a,c,s(this));e.split(/\s+/g).forEach(function(a){(b===v?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===v?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===v?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=L.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(x(a).css("margin-top"))||0,c.left-=parseFloat(x(a).css("margin-left"))||0,d.top+=parseFloat(x(b[0]).css("border-top-width"))||0,d.left+=parseFloat(x(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||E.body;a&&!L.test(a.nodeName)&&"static"==x(a).css("position");)a=a.offsetParent;return a})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});x.fn[a]=function(e){var f,g=this[0];return e===v?c(g)?g["inner"+b]:d(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=x(this),g.css(a,q(this,e,b,g[a]()))})}}),O.forEach(function(b,c){var d=c%2;x.fn[b]=function(){var b,e,f=x.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:W.fragment(c)}),g=this.length>1;return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null,f.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!e)return x(a).remove();u(e.insertBefore(a,b),function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},x.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return x(a)[b](this),this}}),W.Z.prototype=x.fn,W.uniq=A,W.deserializeValue=t,x.zepto=W,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns);return(q[b(a)]||[]).filter(function(a){return!(!a||c.e&&a.e!=c.e||c.ns&&!h.test(a.ns)||f&&b(a.fn)!==b(f)||g&&a.sel!=g)})}function d(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[]);e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h);var e=d(b);e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget;return!c||c!==this&&!a.contains(this,c)?e.fn.apply(this,arguments):void 0}),e.del=m;var o=m||h;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i;var b=o.apply(c,a._args==l?[a]:[a].concat(a._args));return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return(c||!b.isDefaultPrevented)&&(c||(c=b),a.each(y,function(a,d){var e=c[a];b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a};for(b in a)x.test(b)||a[b]===l||(c[b]=a[b]);return j(c,a)}var l,m=1,n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){if(o(c)){var e=function(){return c.apply(d,arguments)};return e._zid=b(c),e}if(p(d))return a.proxy(c[d],c);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this;return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(p(c)||o(e)||e===!1||(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0);return f&&f!==m?(d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))):void 0}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this;return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(p(c)||o(d)||d===!1||(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f;return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){p(a)||(b=a,a=b.type);var c=document.createEvent(r[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}}(Zepto),function(a){function b(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.isDefaultPrevented()}function c(a,c,d,e){return a.global?b(c||s,d,e):void 0}function d(b){b.global&&0===a.active++&&c(b,null,"ajaxStart")}function e(b){b.global&&!--a.active&&c(b,null,"ajaxStop")}function f(a,b){var d=b.context;return b.beforeSend.call(d,a,b)===!1||c(b,d,"ajaxBeforeSend",[a,b])===!1?!1:void c(b,d,"ajaxSend",[a,b])}function g(a,b,d,e){var f=d.context,g="success";d.success.call(f,a,g,b),e&&e.resolveWith(f,[a,g,b]),c(d,f,"ajaxSuccess",[b,d,a]),i(g,b,d)}function h(a,b,d,e,f){var g=e.context;e.error.call(g,d,b,a),f&&f.rejectWith(g,[d,b,a]),c(e,g,"ajaxError",[d,e,a||b]),i(b,d,e)}function i(a,b,d){var f=d.context;d.complete.call(f,b,a),c(d,f,"ajaxComplete",[b,d]),e(d)}function j(){}function k(a){return a&&(a=a.split(";",2)[0]),a&&(a==x?"html":a==w?"json":u.test(a)?"script":v.test(a)&&"xml")||"text"}function l(a,b){return""==b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function m(b){b.processData&&b.data&&"string"!=a.type(b.data)&&(b.data=a.param(b.data,b.traditional)),!b.data||b.type&&"GET"!=b.type.toUpperCase()||(b.url=l(b.url,b.data),b.data=void 0)}function n(b,c,d,e){return a.isFunction(c)&&(e=d,d=c,c=void 0),a.isFunction(d)||(e=d,d=void 0),{url:b,data:c,success:d,dataType:e}}function o(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"==f||"array"==f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"==f||!d&&"object"==f?o(b,i,d,c):b.add(c,i)})}var p,q,r=0,s=window.document,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,w="application/json",x="text/html",y=/^\s*$/;a.active=0,a.ajaxJSONP=function(b,c){if(!("type"in b))return a.ajax(b);var d,e,i=b.jsonpCallback,j=(a.isFunction(i)?i():i)||"jsonp"+ ++r,k=s.createElement("script"),l=window[j],m=function(b){a(k).triggerHandler("error",b||"abort")},n={abort:m};return c&&c.promise(n),a(k).on("load error",function(f,i){clearTimeout(e),a(k).off().remove(),"error"!=f.type&&d?g(d[0],n,b,c):h(null,i||"error",n,b,c),window[j]=l,d&&a.isFunction(l)&&l(d[0]),l=d=void 0}),f(n,b)===!1?(m("abort"),n):(window[j]=function(){d=arguments},k.src=b.url.replace(/\?(.+)=\?/,"?$1="+j),s.head.appendChild(k),b.timeout>0&&(e=setTimeout(function(){m("timeout")},b.timeout)),n)},a.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},a.ajax=function(b){var c=a.extend({},b||{}),e=a.Deferred&&a.Deferred();for(p in a.ajaxSettings)void 0===c[p]&&(c[p]=a.ajaxSettings[p]);d(c),c.crossDomain||(c.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(c.url)&&RegExp.$2!=window.location.host),c.url||(c.url=window.location.toString()),m(c),c.cache===!1&&(c.url=l(c.url,"_="+Date.now()));var i=c.dataType,n=/\?.+=\?/.test(c.url);if("jsonp"==i||n)return n||(c.url=l(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),a.ajaxJSONP(c,e);var o,r=c.accepts[i],s={},t=function(a,b){s[a.toLowerCase()]=[a,b]},u=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,v=c.xhr(),w=v.setRequestHeader;if(e&&e.promise(v),c.crossDomain||t("X-Requested-With","XMLHttpRequest"),t("Accept",r||"*/*"),(r=c.mimeType||r)&&(r.indexOf(",")>-1&&(r=r.split(",",2)[0]),v.overrideMimeType&&v.overrideMimeType(r)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&t("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(q in c.headers)t(q,c.headers[q]);if(v.setRequestHeader=t,v.onreadystatechange=function(){if(4==v.readyState){v.onreadystatechange=j,clearTimeout(o);var b,d=!1;if(v.status>=200&&v.status<300||304==v.status||0==v.status&&"file:"==u){i=i||k(c.mimeType||v.getResponseHeader("content-type")),b=v.responseText;try{"script"==i?(1,eval)(b):"xml"==i?b=v.responseXML:"json"==i&&(b=y.test(b)?null:a.parseJSON(b))}catch(f){d=f}d?h(d,"parsererror",v,c,e):g(b,v,c,e)}else h(v.statusText||null,v.status?"error":"abort",v,c,e)}},f(v,c)===!1)return v.abort(),h(null,"abort",v,c,e),v;if(c.xhrFields)for(q in c.xhrFields)v[q]=c.xhrFields[q];var x="async"in c?c.async:!0;v.open(c.type,c.url,x,c.username,c.password);for(q in s)w.apply(v,s[q]);return c.timeout>0&&(o=setTimeout(function(){v.onreadystatechange=j,v.abort(),h(null,"timeout",v,c,e)},c.timeout)),v.send(c.data?c.data:null),v},a.get=function(){return a.ajax(n.apply(null,arguments))},a.post=function(){var b=n.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=n.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,f=this,g=b.split(/\s/),h=n(b,c,d),i=h.success;return g.length>1&&(h.url=g[0],e=g[1]),h.success=function(b){f.html(e?a("<div>").html(b.replace(t,"")).find(e):b),i&&i.apply(f,arguments)},a.ajax(h),this};var z=encodeURIComponent;a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(z(a)+"="+z(b))},o(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b,c=[];return a([].slice.call(this.get(0).elements)).each(function(){b=a(this);var d=b.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=d&&"reset"!=d&&"button"!=d&&("radio"!=d&&"checkbox"!=d||this.checked)&&c.push({name:b.attr("name"),value:b.val()})}),c},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(a){"__proto__"in{}||a.extend(a.zepto,{Z:function(b,c){return b=b||[],a.extend(b,a.fn),b.selector=c||"",b.__Z=!0,b},isZ:function(b){return"array"===a.type(b)&&"__Z"in b}});try{getComputedStyle(void 0)}catch(b){var c=getComputedStyle;window.getComputedStyle=function(a){try{return c(a)}catch(b){return null}}}}(Zepto),function(a){a.Callbacks=function(b){b=a.extend({},b);var c,d,e,f,g,h,i=[],j=!b.once&&[],k=function(a){for(c=b.memory&&a,d=!0,h=f||0,f=0,g=i.length,e=!0;i&&g>h;++h)if(i[h].apply(a[0],a[1])===!1&&b.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i.length=0:l.disable())},l={add:function(){if(i){var d=i.length,h=function(c){a.each(c,function(a,c){"function"==typeof c?b.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!=typeof c&&h(c)})};h(arguments),e?g=i.length:c&&(f=d,k(c))}return this},remove:function(){return i&&a.each(arguments,function(b,c){for(var d;(d=a.inArray(c,i,d))>-1;)i.splice(d,1),e&&(g>=d&&--g,h>=d&&--h)}),this},has:function(b){return!(!i||!(b?a.inArray(b,i)>-1:i.length))},empty:function(){return g=i.length=0,this},disable:function(){return i=j=c=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||d&&!j||(b=b||[],b=[a,b.slice?b.slice():b],e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!d}};return l}}(Zepto),function(a){function b(c){var d=[["resolve","done",a.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",a.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",a.Callbacks({memory:1})]],e="pending",f={state:function(){return e},always:function(){return g.done(arguments).fail(arguments),this},then:function(){var c=arguments;return b(function(b){a.each(d,function(d,e){var h=a.isFunction(c[d])&&c[d];g[e[1]](function(){var c=h&&h.apply(this,arguments);if(c&&a.isFunction(c.promise))c.promise().done(b.resolve).fail(b.reject).progress(b.notify);else{var d=this===f?b.promise():this,g=h?[c]:arguments;b[e[0]+"With"](d,g)}})}),c=null}).promise()},promise:function(b){return null!=b?a.extend(b,f):f}},g={};return a.each(d,function(a,b){var c=b[2],h=b[3];f[b[1]]=c.add,h&&c.add(function(){e=h},d[1^a][2].disable,d[2][2].lock),g[b[0]]=function(){return g[b[0]+"With"](this===g?f:this,arguments),this},g[b[0]+"With"]=c.fireWith}),f.promise(g),c&&c.call(g,g),g}var c=Array.prototype.slice;a.when=function(d){var e,f,g,h=c.call(arguments),i=h.length,j=0,k=1!==i||d&&a.isFunction(d.promise)?i:0,l=1===k?d:b(),m=function(a,b,d){return function(f){b[a]=this,d[a]=arguments.length>1?c.call(arguments):f,d===e?l.notifyWith(b,d):--k||l.resolveWith(b,d)}};if(i>1)for(e=new Array(i),f=new Array(i),g=new Array(i);i>j;++j)h[j]&&a.isFunction(h[j].promise)?h[j].promise().done(m(j,g,h)).fail(l.reject).progress(m(j,f,e)):--k;return k||l.resolveWith(g,h),l.promise()},a.Deferred=b}(Zepto),function(a){var b=Object.prototype.toString,c=function(a,c,d){if(d=d||{},arguments.length>1&&"[object Object]"!==b.call(c)){if((null===c||"undefined"==typeof c)&&(d.expires=-1),"[object Number]"==b.call(d.expires)){var e=d.expires,f=d.expires=new Date;f.setDate(f.getDate()+e)}return c=String(c),document.cookie=[encodeURIComponent(a),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=c||{};var g,h=d.raw?function(a){return a}:decodeURIComponent;return(g=new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie))?h(g[1]):null};"undefined"!=typeof a._?a._.mixin({cookie:c}):a._=c}(this),window.invertebrate={},function(a){var b=a({});a.subscribe=function(){b.on.apply(b,arguments)},a.unsubscribe=function(){b.off.apply(b,arguments)},a.publish=function(){b.trigger.apply(b,arguments)}}($),function(a){"use strict";function b(b,c){function d(){if(!b)throw"configSvc not supplied";return f=b,e.serverUriSelectionFunc=c||e.serverUriSelectionFunc,e}if(!(this instanceof a.TemplateUriHelper))return new a.TemplateUriHelper(b,c);var e=this,f=null;return this.serverUriSelectionFunc=function(){return"./template-server/"},this.getTemplateUri=function(a){if(!a)throw"templateName not supplied.";var b=f.config.templatesUriPart;if(!b)throw"templatesUriPart empty.";var c=e.serverUriSelectionFunc();if(!c)throw"serverUri empty.";return""+c+b+a},this.getPostRenderScriptUri=function(a){if(!a)throw"postRenderScriptName not supplied.";var b=f.config.templatePostRenderScriptsUriPart;if(!b)throw"postRenderScriptsUriPart empty.";var c=e.serverUriSelectionFunc();if(!c)throw"serverUri empty.";return""+c+b+a},d()}a.TemplateUriHelper=b}(invertebrate),function(invertebrate,$,_){"use strict";function App(templateServerSvc){function init(){if(!templateServerSvc)throw"templateServerSvc not supplied";return _templateServerSvc=templateServerSvc,that}if(!(this instanceof invertebrate.App))return new invertebrate.App(templateServerSvc);var that=this,_templateServerSvc=null,_templates={},_templatePostRenderScripts={},_inFlightRequests={};return this.mod=function(){var a={};return function(b){return a[b]?a[b]:a[b]={}}}(),this.fetchTemplate=function(a,b){var c={done:function(){},fail:function(a,b,c){throw console.log(c),c}};return b=_.extend({},c,b),_inFlightRequests[a]?void setTimeout(function d(){return _templates[a]?b.done(_templates[a]):void setTimeout(d,10)},10):_templates[a]?b.done(_templates[a]):(_inFlightRequests[a]="inFlight",$.ajax({url:a,cache:!1}).done(function(c){delete _inFlightRequests[a];var d=_.template(c);_templates[a]=d,b.done(d)}).fail(function(a){console.log(a.status)}))},this.renderTemplate=function(a,b,c,d){var e={done:function(){},error:function(a,b,c){throw console.log(c),c},postRenderActionScriptUri:null};if(d=_.extend({},e,d),!a)throw"$el1 not supplied";if(!c)throw"model not supplied";var f=_templateServerSvc.getTemplateUri(b);that.fetchTemplate(f,{done:function(b){if(a.html(b({model:_.clone(c)},{jQuery:$})),d.postRenderScriptName){var e=_templateServerSvc.getPostRenderScriptUri(d.postRenderScriptName);that.fetchTemplatePostRenderScript(e,function(){_templatePostRenderScripts[e]($,a),d.done(a)})}else d.done(a)}})},this.fetchTemplatePostRenderScript=function(uri,done){if(!uri)throw"uri not supplied.";if(!done)throw"done not supplied.";return _templatePostRenderScripts[uri]?done(_templatePostRenderScripts[uri]):$.ajax({url:uri,dataType:"text",cache:!1,success:function(data,textStatus,jqXHR){_templatePostRenderScripts[uri]=eval(data).postRenderScript,done(data)}}).fail(function(a,b,c){console.log(c)})},init()}invertebrate.App=App}(invertebrate,$,_),Array.prototype.move=function(a,b){if(b>=this.length)for(var c=b-this.length;c--+1;)this.push(void 0);return this.splice(b,0,this.splice(a,1)[0]),this},function(a,b){"use strict";function c(c){function d(){return this}if(!(this instanceof a.Config))return new a.Config(c);var e=null;return this.devConfig={},this.prodConfig={},this.sharedConfig={},this.collateConfiguration=function(){switch(this.envEnum=e||a.env,c){case this.envEnum.dev:this.config=b.extend({},this.sharedConfig,this.devConfig);break;case this.envEnum.prod:this.config=b.extend({},this.sharedConfig,this.prodConfig);break;default:throw"invalid environment: "+c}return this},d()}a.Config=c}(invertebrate,_),function(a){a.env={dev:"1",test:"2",prod:"3"}}(invertebrate),function(a){"use strict";function b(){function b(){return c}if(!(this instanceof a.Model))return new a.Model;var c=this;return c.resourceName="not set",b()}a.Model=b,a.Model.prototype.sync=function(){},a.Model.isExtendedBy=function(b){b.prototype=new a.Model,b.prototype.constructor=b}}(invertebrate),function(a,b,c){"use strict";function d(a){function d(a){var c=b(this).attr("href"),d="http//";
return null==c?void a.preventDefault():void(c.slice(d.length)!==d&&(a.preventDefault(),i.route(c)))}function e(a){var c=b(this).attr("action"),d="http//";c.slice(d.length)!==d&&(a.preventDefault(),i.route(c,f(b(this))))}function f(a){var b={},d=a.find("input[type=text],input[type=password]");c.each(d,function(a){b[a.name]=a.value});var e=a.find("input[type=radio]:checked,input[type=checkbox]:checked");return c.each(e,function(a){b[a.name]=a.value}),b}function g(a,b){var c={};if(c.__isInvertebrateExternal__=b,""===a)return c;for(var d=0;d<a.length;++d){var e=a[d].split("=");2===e.length&&(c[e[0]]=decodeURIComponent(e[1].replace(/\+/g," ")))}return c}function h(){if(!a)throw"defaultPageTitle not supplied.";j=a,window.addEventListener("popstate",function(){i.route(location.pathname+location.search,null,{silent:!0,isExternal:!0})}),b(document).on("click","a:not([data-bypass-router])",d),b(document).on("submit","form",e)}var i=this,j=null;this.routes={},this.registerRoute=function(a,b,d){var e={silent:!1,title:j,uriTransform:function(a){return a},isExternal:!1};d=c.extend({},e,d),i.routes[a]={action:b,options:d}},this.redirect=function(a){i.route(a)},this.route=function(a,b,d){d=d||{silent:!1};var e=a.split("?"),f=e[0],h=e[1]||"",j=f.replace(/\//g,"\\/"),k=new RegExp("^"+j,"g"),l=c.filter(Object.keys(i.routes),function(a){return k.exec(a)})[0];if(!l)throw"no matching route "+f;var m=i.routes[l];if(m.options.silent||d.silent||(document.title=m.options.title,history.pushState(null,null,m.options.uriTransform(a,b))),b)return void m.action(b);var n=h.split("&");m.action(g(n,d.isExternal))},h()}a.Router=d}(invertebrate,$,_),function(a,b){"use strict";function c(c,d){function e(){if(!c)throw"configSvc not supplied";return g=c,f.serverUriSelectionFunc=d||f.serverUriSelectionFunc,f}if(!(this instanceof a.SyncSvc))return new a.SyncSvc(c,d);var f=this,g=null,h=null;return this.serverUriSelectionFunc=function(){return"./example/templateServer/"},this.metadata={},this.sync=function(){b.publish("sync://syncableModels/")},this.start=function(){var a=g.syncInterval||1e4;h=setInterval(function(){f.sync(null)},a)},this.stop=function(){clearInterval(h)},e()}a.SyncSvc=c}(invertebrate,$),function(a){"use strict";function b(a){return Object.getOwnPropertyNames(a).filter(function(b){return"function"==typeof a[b]})}var c={};c.decorate=function(a,c){var d=Object.create(a);return b(a).forEach(function(b){d[b]=function(){var d=[].slice.call(arguments,0),e={ctor:a.constructor.name,pType:a.prototype,objectType:typeof a,methodName:b,timestamp:(new Date).toISOString(),args:d.map(function(a){return"object"==typeof a?JSON.stringify(a):a})};return c(e,function(c){if(c)throw c;return a[b].apply(a,d)})}}),d},a.util=c}(invertebrate),function(a){"use strict";function b(b){function c(){return d}if(!(this instanceof a.View))return new a.View(b);var d=this;return c()}a.View=b,a.View.prototype.onDomReady=function(){},a.View.isExtendedBy=function(b){b.prototype=new a.View,b.prototype.constructor=b}}(invertebrate),window.wizerati={mod:function(){var a={};return function(b){return a[b]?a[b]:a[b]={}}}()},function(a){"use strict";function b(b){function c(){if(!b)throw"wizeratiClient not supplied";return e=b,d}if(!(this instanceof a.AccountService))return new a.AccountService(b);var d=this,e=null;return this.create=function(b,c,d){if(!d)throw"options not supplied.";if(!d.success)throw"options.success not supplied.";if(!d.fail)throw"options.fail not supplied.";if(!d.wait)throw"options.wait not supplied.";var e=new a.AccountEntity;e.name=b,e.email=c,d.wait(),setTimeout(function(){d.success()},3e3)},c()}a.AccountService=b}(wizerati),function(a){"use strict";function b(){function b(){return c}if(!(this instanceof a.AuthenticationService))return new a.AuthenticationService;var c=this;return this.authenticate=function(){return!1},b()}a.AuthenticationService=b}(wizerati),function(a,b){"use strict";function c(){function a(){return d}if(!(this instanceof c))return new c;var d=this,e="wizerati";return this.getAuthorizationCookie=function(){return b.cookie(e)},this.setAuthorizationCookie=function(a){b.cookie(e,a,{expires:7,path:"/"})},this.deleteAuthorizationCookie=function(){b.cookie(e,null)},a()}a.CookieService=c}(wizerati,_),function(a){"use strict";function b(b,c){function d(){if(!b)throw"loginService not supplied";if(!c)throw"config not supplied";return f=b,g=c,e}if(!(this instanceof a.CroniclService))return new a.CroniclService(b,c);var e=this,f=null,g=null;return this.getCroniclUri=function(){return g.config.templateServerUris[f.getCurrentRole()]},d()}a.CroniclService=b}(wizerati),function(a){"use strict";function b(b){function c(a){return"ben"===a||"sally"===a}function d(){if(!b)throw"cookieService not supplied";return g=a.mod("enum").UserRole,f=b,e}if(!(this instanceof a.LogInService))return new a.LogInService(b);var e=this,f=null,g=null;return this.logIn=function(a){if(!a.username&&!a.role)throw"username not supplied";if(!a.password&&!a.role)throw"password not supplied";if(a.role)return f.setAuthorizationCookie(a.role),void initializeUI();if(c(a.username,a.password))return void f.setAuthorizationCookie(a.role);throw"authentication failed."},this.getCurrentRole=function(){var a=f.getAuthorizationCookie();if(!a)return g.ContractorStranger;if(a!==g.Contractor&&a!==g.Employer&&a!==g.ContractorStranger&&a!==g.EmployerStranger)throw'invalid role found in cookie "'+a+'"';return a},d()}a.LogInService=b}(wizerati),function(a,b){"use strict";function c(c,d){function e(){if(!c)throw"croniclService not supplied.";if(!d)throw"itemCache not supplied.";return g=c,h=d,f}if(!(this instanceof a.SearchService))return new a.SearchService(c,d);var f=this,g=null,h=null;return this.runSearch=function(a,c,d,e){function f(a){if(!a)throw"data not supplied";var c=b.parseJSON(a);h.insert(c),e(c)}e=e?e:function(){},b.ajax({url:g.getCroniclUri()+"search",success:f,cache:!1})},e()}a.SearchService=c}(wizerati,$),function(a){"use strict";function b(b,c,d){function e(){if(!b)throw"requestFactory not supplied";if(!c)throw"restClientFetch not supplied";if(!d)throw"restClientStore not supplied";return g=b,h=c,i=d,f}if(!(this instanceof a.WizeratiClient))return new a.WizeratiClient(b,c,d);var f=this,g=null,h=null,i=null;return this.get=function(a,b){if(!a)throw"entity not supplied.";if(!b)throw"options not supplied.";if(!b.success)throw"options.success not supplied.";if(!b.fail)throw"options.fail not supplied.";var c=g.createForGet(a);h.Execute(c,b)},this.put=function(a,b){if(!a)throw"entity not supplied.";if(!b)throw"options not supplied.";if(!b.success)throw"options.success not supplied.";if(!b.fail)throw"options.fail not supplied.";var c=g.createForPut(a);i.Execute(c,b)},this.post=function(a,b){if(!a)throw"entity not supplied.";if(!b)throw"options not supplied.";if(!b.success)throw"options.success not supplied.";if(!b.fail)throw"options.fail not supplied.";var c=g.createForPost(a);i.Execute(c,b)},e()}a.WizeratiClient=b}(wizerati),function(a,b,c){"use strict";function d(d){function e(){if(!d)throw"env not supplied";var a=c.extend(f,new b.Config(d));return a.devConfig=g,a.prodConfig=h,a.sharedConfig=i,a.collateConfiguration(),a}if(!(this instanceof a.Config))return new a.Config(d);var f=this,g={wizeratiUri:"/",templateServerUris:{1:"./contract/",2:"./contractor/",3:"./contract/",4:"./contractor/"},enableTrace:"false"},h={wizeratiUri:"https://www.wizerati.com/",templateServerUris:{Contractor:"https://contract.croni.cl/",Employer:"https://contractor.croni.cl/"}},i={templatesUriPart:"templates/",templatePostRenderScriptsUriPart:"template-post-render-scripts/",metadataUriPart:"metadata"};return e()}a.Config=d}(wizerati,invertebrate,_),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.ActionedItemsModel))return new a.ActionedItemsModel;var d=this,e={};return this.updateEventUri="update://ActionedItemsModel/",this.isActioned=function(a){return!!e[a]},this.addActionedItemId=function(a){e[a]=a,b.publish(d.updateEventUri)},this.removeActionedItemId=function(a){delete e[a],b.publish(d.updateEventUri)},c()}a.ActionedItemsModel=d,c.Model.isExtendedBy(a.ActionedItemsModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.AdvertisersPanelModel))return new a.AdvertisersPanelModel;var d=this,e=!1;return this.updateEventUri="update://AdvertisersPanelModel/",this.setIsVisible=function(a){e=a,b.publish(d.updateEventUri)},c()}a.AdvertisersPanelModel=d,c.Model.isExtendedBy(a.AdvertisersPanelModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.DeleteFavoriteGroupConfirmationDialogModel))return new a.DeleteFavoriteGroupConfirmationDialogModel;var d=this,e=null,f="";return this.updateEventUri="update://DeleteFavoriteGroupConfirmationDialogModel/",this.getFavoriteGroupId=function(){return e},this.setFavoriteGroupId=function(a,c){if(c=c||{silent:!1},!a)throw"value not supplied.";e=a,c.silent||b.publish(d.updateEventUri)},this.getIsWaiting=function(){return f},this.setIsWaiting=function(a,c){if(c=c||{silent:!1},!a)throw"value not supplied.";f=a,c.silent||b.publish(d.updateEventUri)},c()}a.DeleteFavoriteGroupConfirmationDialogModel=d,c.Model.isExtendedBy(a.DeleteFavoriteGroupConfirmationDialogModel)}(wizerati,$,invertebrate),function(a,b,c,d){"use strict";function e(c,e){function f(){if(!c)throw"itemRepository not supplied.";if(!e)throw"resultListModel not supplied.";return j=c,k=e,g}if(!(this instanceof a.FavoritesCubeModel))return new a.FavoritesCubeModel(c,e);var g=this,h=[[],[],[],[],[],[]],i=["my favorites","my favorites 2","my favorites 3","my favorites 4","my favorites 5","my favorites 6"],j=null,k=null,l=[!0,!1,!1,!1,!1,!1],m=a.mod("enum").FavoritesCubeMode,n=m.Default;return this.updateEventUri="update://FavoritesCubeModel/",this.updateEventUriPrivate="update://favoritescubemodel/private",this.getFaceLabels=function(){return i},this.getFavoriteGroupName=function(a){return i[a]},this.getMode=function(){return n},this.setMode=function(a){if(!a)throw"value not supplied";n=a,b.publish(g.updateEventUriPrivate)},this.deactivateFace=function(a){if(a>5)throw"faceId invalid.";l[a]=!1;for(var c=0;c<h[a].length;c++){var d=h[a][c];j.getById(d,function(b){b["isFavoriteOnFace"+a]=!1})}h[a]=[],-1===l.indexOf(!0)&&(n=m.Default),b.publish(g.updateEventUri)},this.getFaceStatuses=function(){return l},this.setFaceStatuses=function(a){if(!a)throw"value not supplied";l=a,b.publish(g.updateEventUri)},this.getFavorites=function(){return h},this.addFavorite=function(a,c){if(!a)throw"favorite not supplied";if(!c)throw"face not supplied";d.find(h[c],function(b){return b===a})||(h[c].push(a),j.getById(a,function(a){a["isFavoriteOnFace"+c]=!0,b.publish(g.updateEventUri)}))},this.removeFavorite=function(a,c){if(!a)throw"id not supplied";if(!c)throw"face not supplied";h[parseInt(c)]=d.reject(h[parseInt(c)],function(b){return b===a}),j.getById(a,function(a){a["isFavoriteOnFace"+c]=!1,b.publish(g.updateEventUri)})},this.isFavoriteOnAnyFace=function(a){if(!a)throw"id not supplied";return h.map(function(b){return d.any(b,function(b){return b===a})}).reduce(function(a,b){return a||b})},f()}a.FavoritesCubeModel=e,c.Model.isExtendedBy(a.FavoritesCubeModel)}(wizerati,$,invertebrate,_),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.HiddenItemsModel))return new a.HiddenItemsModel;var d=this,e={};return this.updateEventUri="update://HiddenItemsModel/",this.isHidden=function(a){return!!e[a]},this.addHiddenItemId=function(a){e[a]=a,b.publish(d.updateEventUri)},this.removeHiddenItemId=function(a){delete e[a],b.publish(d.updateEventUri)},c()}a.HiddenItemsModel=d,c.Model.isExtendedBy(a.HiddenItemsModel)}(wizerati,$,invertebrate),function(a,b,c,d){"use strict";function e(c){function e(){if(!c)throw"selectedItemModel not supplied.";return g=c,f}if(!(this instanceof a.ItemsOfInterestModel))return new a.ItemsOfInterestModel(c);var f=this,g=null,h={selectedItem:"",pinnedItems:[]};return this.updateEventUri="update://ItemsOfInterestModel/",this.isItemOfInterest=function(a){return-1!==h.pinnedItems.indexOf(a)},this.getItemsOfInterest=function(){return h},this.addItemOfInterest=function(a){if(!a)throw"id not supplied";d.find(f.getItemsOfInterest().pinnedItems,function(b){return b===a})||(g.getSelectedItemId()===a&&(g.setSelectedItemId(null,{silent:!0}),h.selectedItem=null),h.pinnedItems.push(a),b.publish(f.updateEventUri))},this.removeItemOfInterest=function(a){if(!a)throw"id not supplied";h.pinnedItems=d.reject(h.pinnedItems,function(b){return b===a}),b.publish(f.updateEventUri,{action:"removal",removedItemId:a})},this.isPinned=function(a){return d.any(h.pinnedItems,function(b){return b===a})},e()}a.ItemsOfInterestModel=e,c.Model.isExtendedBy(a.ItemsOfInterestModel)}(wizerati,$,invertebrate,_),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.LoginPanelModel))return new a.LoginPanelModel;var d=this,e=null,f=null,g=!1,h=!1;return this.updateEventUri="update://LoginPanelModel/",this.getUsername=function(){return e},this.setUsername=function(a){e=a},this.getPassword=function(){return f},this.setPassword=function(a){f=a},this.getIsLoginFailedMessageVisible=function(){return g},this.setIsLoginFailedMessageVisible=function(a){g=a,b.publish(d.updateEventUri)},this.getIsVisible=function(){return h},this.setIsVisible=function(a){h=a,b.publish(d.updateEventUri)},c()}a.LoginPanelModel=d,c.Model.isExtendedBy(a.LoginPanelModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.PurchasePanelModel))return new a.PurchasePanelModel;var d=this,e="0",f="",g=[];return this.updateEventUri="update://PurchasePanelModel/",this.getNotifications=function(){return g},this.setNotifications=function(a){if(!a)throw"value not supplied.";g=a,b.publish(d.updateEventUri)},this.getIsWaiting=function(){return f},this.setIsWaiting=function(a,c){if(c=c||{silent:!1},!a)throw"value not supplied.";f=a,c.silent||b.publish(d.updateEventUri)},this.getActiveTab=function(){return e},this.setActiveTab=function(a){if(!a)throw"value not supplied.";e=a,b.publish(d.updateEventUri)},c()}a.PurchasePanelModel=d,c.Model.isExtendedBy(a.PurchasePanelModel)}(wizerati,$,invertebrate),function(a,b,c,d){"use strict";function e(){function c(){return e}if(!(this instanceof a.ResultListModel))return new a.ResultListModel;var e=this,f="initial-value",g="0",h=a.mod("enum").SearchPanelMode,i=[];return this.updateEventUri="update://ResultListModel/",this.getSearchId=function(){return f},this.getResults=function(){return i},this.setResults=function(a,c){i=a,f=c,g=h.Default,b.publish(e.updateEventUri)},this.getMode=function(){return g},this.setMode=function(a,c){c=c||{silent:!1},g=a,c.silent||b.publish(e.updateEventUri)},this.getResult=function(a){if(!a)throw"id not supplied";return d.find(i,function(b){return b.id===a})},this.setSelectedResultId=function(a){if(!a)throw"id not supplied";d.each(i,function(b){b.isSelected=b.id===a?!0:!1}),b.publish(e.updateEventUri)},c()}a.ResultListModel=e,c.Model.isExtendedBy(a.ResultListModel)}(wizerati,$,invertebrate,_),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.SearchFormModel))return new a.SearchFormModel;var d=this,e=null,f=null,g="false",h=null;return this.updateEventUri="update://SearchFormModel/",this.getKeywords=function(){return e},this.setKeywords=function(a,c){c=c||{silent:!1},e=a,c.silent===!1&&b.publish(d.updateEventUri)},this.getLocation=function(){return f},this.setLocation=function(a,c){c=c||{silent:!1},f=a,c.silent===!1&&b.publish(d.updateEventUri)},this.getRate=function(){return h},this.setRate=function(a,c){c=c||{silent:!1},h=a,c.silent===!1&&b.publish(d.updateEventUri)},this.getIsWaiting=function(){return g},this.setIsWaiting=function(a,c){if(c=c||{silent:!1},null==a)throw"value not supplied.";if("true"!==a&&"false"!==a)throw"invalid argument (value).";g=a,c.silent===!1&&b.publish(d.updateEventUri)},c()}a.SearchFormModel=d,c.Model.isExtendedBy(a.SearchFormModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return e=f.Default,d}if(!(this instanceof a.SearchPanelModel))return new a.SearchPanelModel;var d=this,e=null,f=a.mod("enum").SearchPanelMode;return this.updateEventUri="update://SearchPanelModel/",this.getMode=function(){return e||f.Default},this.setMode=function(a,c){c=c||{silent:!1},e=a,c.silent||b.publish(d.updateEventUri)},c()}a.SearchPanelModel=d,c.Model.isExtendedBy(a.SearchPanelModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.SelectedCubeFaceModel))return new a.SelectedCubeFaceModel;var d=this,e="0";return this.updateEventUri="update://SelectedCubeFaceModel/",this.getSelectedCubeFaceId=function(){return e},this.setSelectedCubeFaceId=function(a){e=a,b.publish(d.updateEventUri)},c()}a.SelectedCubeFaceModel=d,c.Model.isExtendedBy(a.SelectedCubeFaceModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.SelectedItemModel))return new a.SelectedItemModel;var d=this,e=null,f=null;return this.updateEventUri="update://SelectedItemModel/",this.getSelectedItemId=function(){return e},this.getPreviouslySelectedItemId=function(){return f},this.setSelectedItemId=function(a,c){c=c||{silent:!1},f=e,e=a,c.silent||b.publish(d.updateEventUri)},c()}a.SelectedItemModel=d,c.Model.isExtendedBy(a.SelectedItemModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return d}if(!(this instanceof a.SingleItemModel))return new a.SingleItemModel;var d=this,e=null,f=null;return this.updateEventUri="update://SelectedItemModel/",this.getSelectedItemId=function(){return e},this.getPreviouslySelectedItemId=function(){return f},this.setSelectedItemId=function(a,c){c=c||{silent:!1},f=e,e=a,c.silent||b.publish(d.updateEventUri)},c()}a.SingleItemModel=d,c.Model.isExtendedBy(a.SingleItemModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(){function c(){return e=g.GreenfieldSearch,d}if(!(this instanceof a.UIRootModel))return new a.UIRootModel;var d=this,e="0",f=null,g=a.mod("enum").UIMode;return this.updateEventUri="update://UIRootModel/",this.getUIMode=function(){return e||""},this.setUIMode=function(a,c){c=c||{silent:!1},e=a,c.silent||b.publish(d.updateEventUri)},this.getModal=function(){return f||""},this.setModal=function(a){f=a,b.publish(d.updateEventUri)},c()}a.UIRootModel=d,c.Model.isExtendedBy(a.UIRootModel)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,b.subscribe(e.Model.updateEventUri,e.render),e}if(!(this instanceof a.AccountActivationView))return new a.AccountActivationView(c);var e=this,f="#activation-panel";return this.$el=null,this.Model=null,this.render=function(){},this.bindEvents=function(){},this.onDomReady=function(){e.$el=b(f)},d()}a.AccountActivationView=d,c.View.isExtendedBy(a.AccountActivationView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,e}if(!(this instanceof a.ContractFavoriteView))return new a.ContractFavoriteView(c);var e=this,f='<div class="thumbnail thumbnail-108"></div>',g="favorite.html";return this.$el=b(f),this.Model=null,this.render=function(){return e.Model.isSelected?e.$el.addClass("selected"):e.$el.removeClass("selected"),a.instance.renderTemplate(e.$el,g,e.Model,{}),e},d()}a.ContractFavoriteView=d,c.View.isExtendedBy(a.ContractFavoriteView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,e}if(!(this instanceof a.ContractItemOfInterestView))return new a.ContractItemOfInterestView(c);var e=this,f='<article class="item-of-interest overflow-y-scroll overflow-x-hidden lucid-column"></article>',g="item-of-interest.html";return this.$el=b(f),this.Model=null,this.render=function(){return e.$el.attr("data-id",e.Model.id),e.Model.isSelected&&e.$el.addClass("selected"),e.Model.shouldAnimateIn&&e.$el.addClass("collapsed"),a.instance.renderTemplate(e.$el,g,e.Model,{}),e},d()}a.ContractItemOfInterestView=d,c.View.isExtendedBy(a.ContractItemOfInterestView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,e}if(!(this instanceof a.ContractResultView))return new a.ContractResultView(c);var e=this,f='<li class="t t-219"></li>',g="result.html";return this.$el=b(f),this.Model=null,this.render=function(){return e.Model.isSelected?e.$el.addClass("selected"):e.$el.removeClass("selected"),a.instance.renderTemplate(e.$el,g,e.Model,{}),e},d()}a.ContractResultView=d,c.View.isExtendedBy(a.ContractResultView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,e.render(),e}if(!(this instanceof a.ContractorFavoriteView))return new a.ContractorFavoriteView(c);var e=this,f='<div class="thumbnail thumbnail-108"></div>',g="favorite.html";return this.$el=b(f),this.Model=null,this.render=function(){return a.instance.renderTemplate(e.$el,g,e.Model,{}),e},d()}a.ContractorFavoriteView=d,c.View.isExtendedBy(a.ContractorFavoriteView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,e}if(!(this instanceof a.ContractorItemOfInterestView))return new a.ContractorItemOfInterestView(c);var e=this,f='<article id="selected-item" class="overflow-y-scroll lucid-column"></article>',g="item-of-interest.html";return this.$el=b(f),this.Model=null,this.render=function(){return e.$el.attr("data-id",e.Model.id),e.Model.isSelected&&e.$el.addClass("selected"),e.Model.shouldAnimateIn&&e.$el.addClass("collapsed"),a.instance.renderTemplate(e.$el,g,e.Model,{}),e},d()}a.ContractorItemOfInterestView=d,c.View.isExtendedBy(a.ContractorItemOfInterestView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(b){function c(){if(!b)throw"model not supplied";return d.Model=b,d}if(!(this instanceof a.ContractorResultView))return new a.ContractorResultView(b);var d=this,e=('<li class="thumbnail thumbnail-219" data-id="'+b.Id+'"></li>',"result.html");return this.$el=null,this.Model=null,this.render=function(){return a.instance.renderTemplate(d.$el,e,d.Model,{}),d},c()}a.ContractorResultView=d,c.View.isExtendedBy(a.ContractorResultView)}(wizerati,$,invertebrate),function(a,b,c,d){"use strict";function e(c,e){function f(){if(!c)throw"model not supplied";if(!e)throw"favoritesCubeModel not supplied";return g.Model=c,k=e,b.subscribe(g.Model.updateEventUri,g.render),g}if(!(this instanceof a.DeleteFavoriteGroupConfirmationDialogView))return new a.DeleteFavoriteGroupConfirmationDialogView(c,e);var g=this,h="#delete-favorite-group-confirmation-dialog",i=".message-container",j=".btn-danger",k=null,l=a.mod("enum").UIMode;return this.$el=null,this.Model=null,this.render=function(){var a=g.Model.getFavoriteGroupId(),b=k.getFavoriteGroupName(a);g.$el.find(i).html("<p>You have chosen to delete the following group of favorites:</p><blockquote><em>"+b+"</em></blockquote><p>This cannot be undone.</p><p>Are you sure you want to delete this group?</p>"),g.$el.find(j).attr("href","/favoritegroup/destroy?id="+a)},this.bindEvents=function(){b(d).keyup(function(b){27===b.keyCode&&a.mod("views").uiRootView.Model.getModal()===l.DeleteFavoriteGroupConfirmationDialog&&g.Model.setIsVisible(!1)})},this.onDomReady=function(){g.$el=b(h),g.bindEvents()},f()}a.DeleteFavoriteGroupConfirmationDialogView=e,c.View.isExtendedBy(a.DeleteFavoriteGroupConfirmationDialogView)}(wizerati,$,invertebrate,document),function(a,b,c,d){"use strict";function e(c,e,f,g,h,i,j){function k(){if(!c)throw"model not supplied";if(!e)throw"favoriteViewFactory not supplied";if(!f)throw"selectedCubeFaceModel not supplied";if(!g)throw"selectedItemModel not supplied";if(!h)throw"hiddenItemsModel not supplied";if(!i)throw"actionedItemsModel not supplied";if(!j)throw"itemsOfInterestModel not supplied";return l.Model=c,n=e,o=f,p=g,r=h,q=i,s=j,b.subscribe(l.Model.updateEventUriPrivate,l.render),b.subscribe(l.Model.updateEventUri,l.render),b.subscribe(o.updateEventUri,l.render),b.subscribe(p.updateEventUri,l.render),b.subscribe(r.updateEventUri,l.render),b.subscribe(q.updateEventUri,l.render),b.subscribe(s.updateEventUri,l.render),l}if(!(this instanceof a.FavoritesCubeView))return new a.FavoritesCubeView(c,e,f,g,h,i,j);var l=this,m="#favorites-cube",n=null,o=null,p=null,q=null,r=null,s=null,t=[".cube-face-labels li:nth-child(1)",".cube-face-labels li:nth-child(2)",".cube-face-labels li:nth-child(3)",".cube-face-labels li:nth-child(4)",".cube-face-labels li:nth-child(5)",".cube-face-labels li:nth-child(6)"],u=[".top",".left",".front",".right",".bottom",".back"],v=a.mod("enum").FavoritesCubeMode;return this.$el=null,this.Model=null,this.render=function(){var a=l.Model.getMode();if(l.$el.attr("data-mode",a),l.$el.find(".favorites-cube-edit-link").attr("href","/favoritescubemode/update?mode="+(a===v.Default?v.Edit:v.Default)),l.$el.find(".favorites-cube-edit-link").text(a===v.Default?"edit":"done"),l.$el.find(".cube-controls").attr("data-active-faces",l.Model.getFaceStatuses().reduce(function(a,b){return a+(b?"1":"0")},"")),0===d.flatten(l.Model.getFavorites(),!0).length)return void l.$el.addClass("hide");l.$el.removeClass("hide"),b.each(l.Model.getFavorites(),function(a,c){var d=l.$el.find(u[a]),e=l.$el.find(".face-selector:nth-child("+(a+1)+") .spot");d.find("*").not(".face-empty-message").remove(),e.removeClass("filled"),b.each(c,function(a,c){n.create(c,o.getSelectedCubeFaceId(),function(c){d.append(c),b(e[a]).addClass("filled")})})}),l.$el.attr("data-selected-face-id",o.getSelectedCubeFaceId());var c=l.Model.getFaceLabels();b.each(t,function(a,d){b(d).text(c[a])})},this.onDomReady=function(){l.$el=b(m),l.render()},k()}a.FavoritesCubeView=e,c.View.isExtendedBy(a.FavoritesCubeView)}(wizerati,$,invertebrate,_),function(a,b,c,d){"use strict";function e(c,e,f,g,h,i,j){function k(){var a=p.$el.find(".item-of-interest.selected");a&&(y[a.attr("data-id")+"s"]=b(a).scrollTop()),d.each(p.$el.find(".item-of-interest:not(.selected)"),function(a){y[b(a).attr("data-id")]=b(a).scrollTop()})}function l(){z=b("body").scrollLeft()}function m(a){a=a||{animateSelectedItem:!0},k(),l();var c=p.$currentEl||p.$el2;p.$currentEl=c===p.$el?p.$el2:p.$el,p.$currentEl.empty();var d=p.Model.getItemsOfInterest();return d.selectedItem=u.getSelectedItemId(),d.selectedItem?s.create(d.selectedItem,t.getSelectedCubeFaceId(),!0,a.animateSelectedItem,function(a){function c(){p.$currentEl.prepend(a),a.scrollTop(y[d.selectedItem+"s"]),setTimeout(function(){a.removeClass("collapsed")},300),b("body").scrollLeft(z)}n(d.pinnedItems,c)}):n(d.pinnedItems,function(){b("body").scrollLeft(z)}),a.removedItemId?(c.find(".item-of-interest[data-id="+a.removedItemId+"]").addClass("collapsed"),void setTimeout(function(){c.addClass("buffer"),p.$currentEl.removeClass("buffer"),setTimeout(function(){c.empty()},300)},200)):(c.addClass("buffer"),p.$currentEl.removeClass("buffer"),void setTimeout(function(){c.empty()},300))}function n(a,b){b=b||function(){},d.each(a,function(a){null!==a&&s.create(a,t.getSelectedCubeFaceId(),!1,!1,function(b){p.$currentEl.prepend(b),b.scrollTop(y[a])})}),b()}function o(){if(!c)throw"model not supplied";if(!e)throw"itemOfInterestViewFactory not supplied";if(!f)throw"selectedCubeFaceModel not supplied";if(!g)throw"selectedItemModel not supplied";if(!h)throw"selectedItemModel not supplied";if(!i)throw"hiddenItemsModel not supplied";if(!j)throw"actionedItemsModel not supplied";return p.Model=c,s=e,t=f,u=g,v=h,w=i,x=j,b.subscribe(p.Model.updateEventUri,p.render),b.subscribe(t.updateEventUri,p.render),b.subscribe(u.updateEventUri,p.renderWithSelectedItemAnimation),b.subscribe(v.updateEventUri,p.render),b.subscribe(w.updateEventUri,p.render),b.subscribe(x.updateEventUri,p.render),p}if(!(this instanceof a.ItemsOfInterestView))return new a.ItemsOfInterestView(c,e,f,g,h,i,j);var p=this,q="#items-of-interest-panel-1",r="#items-of-interest-panel-2",s=null,t=null,u=null,v=null,w=null,x=null,y={},z=0;return this.$el=null,this.$el2=null,this.$currentEl=null,this.Model=null,this.renderWithSelectedItemAnimation=function(){m()},this.render=function(){var a=Array.prototype.slice.call(arguments),b=a.length>1?a[1]:{};m({animateSelectedItem:!1,removedItemId:b.removedItemId})},this.onDomReady=function(){p.$el=b(q),p.$el2=b(r),p.render()},o()}a.ItemsOfInterestView=e,c.View.isExtendedBy(a.ItemsOfInterestView)}(wizerati,$,invertebrate,_),function(a,b,c,d){"use strict";function e(c){function e(){a.instance.router.route("/")}function f(){if(!c)throw"model not supplied";return g.Model=c,b.subscribe(g.Model.updateEventUri,g.render),g}if(!(this instanceof a.LoginPanelView))return new a.LoginPanelView(c);var g=this,h="#log-in-panel",i=".btn-cancel",j=".log-in .btn-success",k=".username",l=".password",m=a.mod("enum").UIMode;return this.$el=null,this.$cancelButton=null,this.$successButton=null,this.$username=null,this.$password=null,this.Model=null,this.render=function(){g.Model.getIsVisible()&&g.$el.removeClass("hide"),g.Model.getIsLoginFailedMessageVisible()&&g.$el.addClass("login-error")},this.bindEvents=function(){g.$username.on("change",function(){g.Model.setUsername(g.$username.val())}),g.$password.on("change",function(){g.Model.setPassword(g.$password.val())}),g.$cancelButton.on("click",function(){e()}),g.$successButton.on("click",function(){a.instance.router.route("/session/create",{$parentDomNode:g.$el})}),b(d).keyup(function(b){27===b.keyCode&&a.mod("views").uiRootView.Model.getUIMode()===m.LogIn&&e()})},this.onDomReady=function(){g.$el=b(h),g.$cancelButton=g.$el.find(i),g.$password=g.$el.find(l),g.$username=g.$el.find(k),g.$successButton=g.$el.find(j),g.bindEvents()},f()}a.LoginPanelView=e,c.View.isExtendedBy(a.LoginPanelView)}(wizerati,$,invertebrate,document),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,b.subscribe(e.Model.updateEventUri,e.render),e}if(!(this instanceof a.PurchasePanelView))return new a.PurchasePanelView(c);var e=this,f="#purchase-panel";return this.$el=null,this.Model=null,this.render=function(){e.$el.attr("data-state",e.Model.getActiveTab()),e.$el.attr("data-is-waiting",e.Model.getIsWaiting())},this.bindEvents=function(){},this.onDomReady=function(){e.$el=b(f)},d()}a.PurchasePanelView=d,c.View.isExtendedBy(a.PurchasePanelView)}(wizerati,$,invertebrate),function(a,b,c,d){"use strict";function e(c,e,f,g,h,i,j,k){function l(a,b){z===b?y=a.scrollTop():(y=0,z=b)}function m(){if(!c)throw"model not supplied";if(!e)throw"resultViewFactory not supplied";if(!f)throw"selectedCubeFaceModel not supplied";if(!g)throw"selectedItemModel not supplied";if(!h)throw"selectedItemModel not supplied";if(!i)throw"hiddenItemsModel not supplied";if(!j)throw"actionedItemsModel not supplied";if(!k)throw"itemsOfInterestModel not supplied";return n.Model=c,r=e,s=f,t=g,u=h,w=i,v=j,x=k,b.subscribe(n.Model.updateEventUri,n.render),b.subscribe(s.updateEventUri,n.render),b.subscribe(t.updateEventUri,n.render),b.subscribe(u.updateEventUri,n.render),b.subscribe(w.updateEventUri,n.render),b.subscribe(v.updateEventUri,n.render),b.subscribe(x.updateEventUri,n.render),n}if(!(this instanceof a.ResultListView))return new a.ResultListView(c,e,f,g,h,i,j,k);var n=this,o=".result-list-container",p="#result-list-panel-1",q="#result-list-panel-2",r=null,s=null,t=null,u=null,v=null,w=null,x=null,y=0,z=null;return this.$elContainer=null,this.$el=null,this.$el2=null,this.$currentEl=null,this.Model=null,this.render=function(){var a=n.$currentEl||n.$el2,b=n.Model.getSearchId(),c=z!==b;l(a,b),n.$currentEl=a===n.$el?n.$el2:n.$el,n.$currentEl.empty(),n.$currentEl.addClass("ios-scroll-enable");
var e=s.getSelectedCubeFaceId();d.each(n.Model.getResults(),function(a){r.create(a,e,function(a){n.$currentEl.append(a)})}),n.$currentEl.scrollTop(y),setTimeout(function(){a.addClass("buffer")},0);var f=n.Model.getMode();c?setTimeout(function(){n.$currentEl.removeClass("buffer"),n.$elContainer.attr("data-mode",f)},350):setTimeout(function(){n.$currentEl.removeClass("buffer"),n.$elContainer.attr("data-mode",f)},0),setTimeout(function(){a.empty(),a.removeClass("ios-scroll-enable")},300)},this.onDomReady=function(){n.$el=b(p),n.$el2=b(q),n.$elContainer=b(o)},m()}a.ResultListView=e,c.View.isExtendedBy(a.ResultListView)}(wizerati,$,invertebrate,_),function(a,b,c){"use strict";function d(c){function d(){i=!0,"true"===f.Model.getIsWaiting()?(f.$el.find(".btn-primary").attr("data-is-waiting","false"),setTimeout(function(){f.$el.find(".btn-primary").attr("data-is-waiting","true"),setTimeout(d,2500)},0)):(f.$el.find(".btn-primary").attr("data-is-waiting","false"),i=!1)}function e(){if(!c)throw"model not supplied";return f.Model=c,b.subscribe(f.Model.updateEventUri,f.render),f}if(!(this instanceof a.SearchFormView))return new a.SearchFormView(c);var f=this,g="#search-form",h="search-form.html",i=!1;return this.$el=null,this.Model=null,this.render=function(){var b={done:f.bindEvents,postRenderScriptName:null};return a.instance.renderTemplate(f.$el,h,f.Model,b)},this.bindEvents=function(){var a=f.$el.find("#keywords");a.on("change",function(){f.Model.setKeywords(a.val(),{silent:!0})});var b=f.$el.find("#location");b.on("change",function(){f.Model.setLocation(b.val(),{silent:!0})});var c=f.$el.find('input[name="r"]');c.on("change",function(){f.Model.setRate(f.$el.find('input[name="r"]:checked').val(),{silent:!0})}),i||d()},this.postRender=function(){},this.onDomReady=function(){f.$el=b(g),f.render()},e()}a.SearchFormView=d,c.View.isExtendedBy(a.SearchFormView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,b.subscribe(e.Model.updateEventUri,e.render),e.bindEvents(),e}if(!(this instanceof a.SearchPanelView))return new a.SearchPanelView(c);var e=this,f="#search-panel",g=a.mod("enum").SearchPanelMode;return this.$el=null,this.Model=null,this.render=function(a,b){b=b||{done:e.postRender},e.$el.attr("data-mode",e.Model.getMode());var c=e.Model.getMode()===g.Default?g.Minimized:g.Default;e.$el.find(".handle").attr("href","/searchpanelmode/update?mode="+c)},this.postRender=function(){},this.bindEvents=function(){},this.onDomReady=function(){e.$el=b(f)},d()}a.SearchPanelView=d,c.View.isExtendedBy(a.SearchPanelView)}(wizerati,$,invertebrate),function(a,b,c){"use strict";function d(c){function d(){if(!c)throw"model not supplied";return e.Model=c,b.subscribe(e.Model.updateEventUri,e.render),e.bindEvents(),e}if(!(this instanceof a.UIRootView))return new a.UIRootView(c);var e=this,f="body";return this.$el=null,this.Model=null,this.render=function(a,b){b=b||{done:e.postRender};var c=e.Model.getModal();e.$el.removeClass("modal-visible"),e.$el.attr("data-ui-mode",e.Model.getUIMode()),e.$el.attr("data-modal",c),c&&setTimeout(function(){e.$el.addClass("modal-visible")},0)},this.postRender=function(){},this.bindEvents=function(){},this.onDomReady=function(){e.$el=b(f)},d()}a.UIRootView=d,c.View.isExtendedBy(a.UIRootView)}(wizerati,$,invertebrate),function(a){"use strict";function b(b){function c(){if(!b)throw"uiRootModel not supplied.";return e=b,d}if(!(this instanceof a.AccountActivationController))return new a.AccountActivationController(b);{var d=this,e=null;wizerati.mod("enum").Modal}return this.create=function(){},c()}a.AccountActivationController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"uiRootModel not supplied.";return e=b,d}if(!(this instanceof a.AccountActivationPanelController))return new a.AccountActivationPanelController(b);var d=this,e=null,f=a.mod("enum").UIMode,g=a.mod("enum").Modal;return this.index=function(){e.setModal(g.AccountActivation)},this.destroy=function(){try{e.setModal(null)}catch(b){console.log("error: AccountActivationPanelController.destroy. "+b)}var c=e.getUIMode();if(c===f.GreenfieldSearch)a.instance.router.redirect("/");else{if(c!==f.Search)throw"invalid UI mode";a.instance.router.redirect("/search")}},c()}a.AccountActivationPanelController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"actionedItemsModel not supplied.";return e=b,d}if(!(this instanceof a.ActionedItemsController))return new a.ActionedItemsController(b);var d=this,e=null;return this.create=function(a){if(!a)throw"dto not supplied.";e.addActionedItemId(a.id)},this.destroy=function(a){e.removeActionedItemId(a.id)},c()}a.ActionedItemsController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"uiRootModel not supplied.";return e=b,d}if(!(this instanceof a.AdvertisersController))return new a.AdvertisersController(b);var d=this,e=null,f=a.mod("enum").UIMode;return this.index=function(){try{e.setUIMode(f.Purchase)}catch(a){console.log("error: AdvertisersController.index")}},c()}a.AdvertisersController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"deleteFavoriteGroupConfirmationDialogModel not supplied.";if(!c)throw"uiRootModel not supplied.";return g=c,f=b,e}if(!(this instanceof a.DeleteFavoriteGroupConfirmationDialogController))return new a.DeleteFavoriteGroupConfirmationDialogController(b,c);var e=this,f=null,g=null,h=a.mod("enum").Modal;return this.index=function(b){return b.__isInvertebrateExternal__?void a.instance.router.redirect("/"):(f.setFavoriteGroupId(b.id),void(g.getModal()!=h.DeleteFavoriteGroupConfirmationDialog&&g.setModal(h.DeleteFavoriteGroupConfirmationDialog)))},this.destroy=function(){try{g.setModal(null)}catch(a){console.log("error: DeleteFavoriteGroupConfirmationDialogController.destroy. "+a)}},d()}a.DeleteFavoriteGroupConfirmationDialogController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"favoritesCubeModel not supplied.";if(!c)throw"uiRootModel not supplied.";return f=b,g=c,e}if(!(this instanceof a.FavoriteGroupController))return new a.FavoriteGroupController(b,c);var e=this,f=null,g=null;return this.create=function(){var a=f.getFaceStatuses();if(-1===a.indexOf(!1))throw"Up to six favorite groups may be created.";a[a.indexOf(!1)]=!0,f.setFaceStatuses(a)},this.destroy=function(a){if(null==a.id)throw"id not supplied.";f.deactivateFace(a.id),g.setModal(null)},d()}a.FavoriteGroupController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"favoritesCubeModel not supplied.";if(!c)throw"selectedCubeFaceModel not supplied.";return f=b,g=c,e}if(!(this instanceof a.FavoritesController))return new a.FavoritesController(b,c);var e=this,f=null,g=null;return this.create=function(a){if(!a)throw"dto not supplied.";var b=g.getSelectedCubeFaceId();_.find(f.getFavorites[b],function(b){return b===a.id})||f.addFavorite(a.id,b)},this.destroy=function(a){if(!a)throw"dto not supplied.";f.removeFavorite(a.id,g.getSelectedCubeFaceId())},d()}a.FavoritesController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"favoritesCubeModel not supplied.";return e=b,d}if(!(this instanceof a.FavoritesCubeModeController))return new a.FavoritesCubeModeController(b);var d=this,e=null;return this.update=function(a){e.setMode(a.mode)},c()}a.FavoritesCubeModeController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"hiddenItemsModel not supplied.";return e=b,d}if(!(this instanceof a.HiddenItemsController))return new a.HiddenItemsController(b);var d=this,e=null;return this.create=function(a){if(!a)throw"dto not supplied.";e.addHiddenItemId(a.id)},this.destroy=function(a){e.removeHiddenItemId(a.id)},c()}a.HiddenItemsController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"uiRootModel not supplied.";return e=b,d}if(!(this instanceof a.HomeController))return new a.HomeController(b);var d=this,e=null,f=wizerati.mod("enum").UIMode;return this.index=function(){try{e.setUIMode(f.GreenfieldSearch,{silent:!0}),e.setModal(null)}catch(a){console.log("error: HomeController.index. "+a)}},c()}a.HomeController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"itemsOfInterestModel not supplied.";return e=b,d}if(!(this instanceof a.ItemsOfInterestController))return new a.ItemsOfInterestController(b);var d=this,e=null;return this.create=function(a){if(!a)throw"dto not supplied.";e.addItemOfInterest(a.id)},this.destroy=function(a){e.removeItemOfInterest(a.id)},c()}a.ItemsOfInterestController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"loginPanelModel not supplied.";if(!c)throw"uiRootModel not supplied.";return f=b,g=c,e}if(!(this instanceof a.LoginController))return new a.LoginController(b,c);var e=this,f=null,g=null,h=a.mod("enum").UIMode;return this.index=function(){try{g.setUIMode(h.LogIn),f.setIsVisible(!0)}catch(a){console.log("error: LoginController.index")}},d()}a.LoginController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"purchasePanelModel not supplied.";if(!c)throw"accountService not supplied.";return g=b,f=c,e}if(!(this instanceof a.PurchasePanelAccountsController))return new a.PurchasePanelAccountsController(b,c);{var e=this,f=null,g=null;a.mod("enum").Modal}return this.create=function(b){try{f.create(b.name,b.email,{success:function(){g.setIsWaiting(" "),a.instance.router.redirect("/purchasepanel?tab=3")},fail:function(){g.setIsWaiting(" ");var a=g.getNotifications();a.push({type:"error",message:"An error occurred while creating your account."}),g.setNotifications(a)},wait:function(){g.setIsWaiting("success")},timeout:function(){g.setIsTimedOut("success")}})}catch(c){throw"error in PurchasePanelAccountsController.create. "+c}},d()}a.PurchasePanelAccountsController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"purchasePanelModel not supplied.";if(!c)throw"uiRootModel not supplied.";return f=b,g=c,e}if(!(this instanceof a.PurchasePanelController))return new a.PurchasePanelController(b,c);var e=this,f=null,g=null,h=a.mod("enum").Modal;return this.index=function(a){try{g.getModal()!=h.Purchase&&g.setModal(h.Purchase),f.setActiveTab(a.tab)}catch(b){console.log("error: PurchasePanelController.show. "+b)}},this.destroy=function(){try{g.setModal(null)}catch(a){console.log("error: PurchasePanelController.destroy. "+a)}},d()}a.PurchasePanelController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"resultListModel not supplied.";return e=b,d}if(!(this instanceof a.ResultListModeController))return new a.ResultListModeController(b);var d=this,e=null;return this.update=function(a){try{e.getMode()!==a.mode&&e.setMode(a.mode)}catch(b){console.log("error: ResultListModeController.update. "+b)}},c()}a.ResultListModeController=b}(wizerati),function(a){"use strict";function b(b,c,d,e,f){function g(){if(!b)throw"uiRootModel not supplied.";if(!c)throw"searchFormModel not supplied.";if(!d)throw"searchService not supplied.";if(!e)throw"resultListModel not supplied.";if(!f)throw"guidFactory not supplied.";return j=b,k=c,l=d,m=e,n=f,h}if(!(this instanceof a.SearchController))return new a.SearchController(b,c,d,e,f);var h=this,i=wizerati.mod("enum").UIMode,j=null,k=null,l=null,m=null,n=null;return this.show=function(a){try{a.__isInvertebrateExternal__&&(k.setKeywords(a.keywords,{silent:!0}),k.setLocation(a.location,{silent:!0}),k.setRate(a.r,{silent:!0})),j.setUIMode(i.Search),k.setIsWaiting("true"),l.runSearch(a.keywords,a.location,a.r,function(a){m.setResults(_.map(a,function(a){return a.id}),n.create()),k.setIsWaiting("false",{silent:!0})})}catch(b){console.log("error: SearchController.show. "+b)}},this.uriTransformShow=function(a,b){return a+"?keywords="+encodeURIComponent(b.keywords)+"&location="+encodeURIComponent(b.location)+"&r="+encodeURIComponent(b.r)},g()}a.SearchController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"searchPanelModel not supplied.";return e=b,d}if(!(this instanceof a.SearchPanelModeController))return new a.SearchPanelModeController(b);var d=this,e=null;return this.update=function(a){try{e.getMode()!==a.mode&&e.setMode(a.mode)}catch(b){console.log("error: SearchPanelController.update. "+b)}},c()}a.SearchPanelModeController=b}(wizerati),function(a){"use strict";function b(b){function c(){if(!b)throw"selectedCubeFaceModel not supplied.";return e=b,d}if(!(this instanceof a.SelectedCubeFaceController))return new a.SelectedCubeFaceController(b);var d=this,e=null;return this.update=function(a){try{e.setSelectedCubeFaceId(a.id)}catch(b){console.log("error: SelectedCubeFaceController.update. "+b)}},c()}a.SelectedCubeFaceController=b}(wizerati),function(a){"use strict";function b(b,c,d){function e(){if(!b)throw"selectedItemModel not supplied.";if(!c)throw"searchPanelModel not supplied.";if(!d)throw"resultListModel not supplied.";return g=b,h=c,i=d,f}if(!(this instanceof a.SelectedItemController))return new a.SelectedItemController(b,c,d);var f=this,g=null,h=null,i=null,j=a.mod("enum").SearchPanelMode,k=a.mod("enum").ResultListMode;return this.update=function(b){try{if(!b)throw"dto not supplied";if(b.__isInvertebrateExternal__)return void a.instance.router.redirect("/items/show?id="+b.id);"results"===b.source?h.setMode(j.Minimized):"favorites"===b.source&&i.setMode(k.Minimized,{silent:!0}),g.setSelectedItemId(b.id)}catch(c){console.log("error: SelectedItemController.update. "+c)}},e()}a.SelectedItemController=b}(wizerati),function(a){"use strict";function b(b,c){function d(){if(!b)throw"loginPanelModel not supplied.";if(!c)throw"authenticationService not supplied.";return f=b,g=c,e}if(!(this instanceof a.SessionController))return new a.SessionController(b,c);var e=this,f=null,g=null;return this.create=function(){g.authenticate(f.getUsername(),f.getPassword())||f.setIsLoginFailedMessageVisible(!0)},d()}a.SessionController=b}(wizerati),function(a){"use strict";function b(b,c,d,e,f,g){function h(){if(!b)throw"loginService not supplied.";if(!c)throw"itemRepository not supplied.";if(!d)throw"selectedItemModel not supplied.";if(!e)throw"hiddenItemsModel not supplied.";if(!f)throw"actionedItemsModel not supplied.";if(!g)throw"itemsOfInterestModel not supplied.";return j=b,k=c,l=d,m=e,n=f,o=g,i}if(!(this instanceof a.FavoriteViewFactory))return new a.FavoriteViewFactory(b,c,d,e,f,g);var i=this,j=null,k=null,l=null,m=null,n=null,o=null,p=a.mod("enum").UserRole;return this.create=function(b,c,d){var e=j.getCurrentRole();switch(e){case p.Employer:case p.EmployerStranger:k.getById(b,function(b){b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=l.getSelectedItemId()===b.id,b.isHidden=m.isHidden(b.id),b.isActioned=n.isActioned(b.id),b.isItemOfInterest=o.isItemOfInterest(b.id),d(new a.ContractorFavoriteView(b).render().$el)});break;case p.Contractor:case p.ContractorStranger:k.getById(b,function(b){b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=l.getSelectedItemId()===b.id,b.isHidden=m.isHidden(b.id),b.isActioned=n.isActioned(b.id),b.isItemOfInterest=o.isItemOfInterest(b.id),d(new a.ContractFavoriteView(b).render().$el)});break;default:throw'invalid user role "'+e+'"'}},h()}a.FavoriteViewFactory=b}(wizerati),function(a){"use strict";function b(){function b(){return c}if(!(this instanceof a.GuidFactory))return new a.GuidFactory;var c=this;return this.create=function(){var a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},b()}a.GuidFactory=b}(wizerati),function(a){"use strict";function b(b,c,d,e,f,g,h){function i(){if(!b)throw"loginService not supplied.";if(!c)throw"itemRepository not supplied.";if(!d)throw"selectedItemModel not supplied.";if(!e)throw"itemsOfInterestModel not supplied.";if(!f)throw"favoritesCubeModel not supplied.";if(!g)throw"hiddenItemsModel not supplied.";if(!h)throw"actionedItemsModel not supplied.";return k=b,l=c,m=d,n=e,o=f,p=g,q=h,j}if(!(this instanceof a.ItemOfInterestViewFactory))return new a.ItemOfInterestViewFactory(b,c,d,e,f,g,h);var j=this,k=null,l=null,m=null,n=null,o=null,p=null,q=null,r=a.mod("enum").UserRole;return this.create=function(b,c,d,e,g){if(!b)throw"id not supplied.";if(!c)throw"currentCubeFace not supplied.";if(void 0===d||null===d)throw"isSelectedItem not supplied.";if(void 0===e||null===e)throw"animateSelectedItem not supplied.";if(!f)throw"favoritesCubeModel not supplied.";if(!g)throw"done not supplied.";var h=k.getCurrentRole();switch(h){case r.Employer:case r.EmployerStranger:l.getById(b,function(b){b.isFavoritable=o.getFavorites()[c].length<6&&!p.isHidden(b.id),b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=m.getSelectedItemId()===b.id,b.isPinned=!d,b.pinnedItemCount=n.getItemsOfInterest().pinnedItems.length,b.isPinnable=n.getItemsOfInterest().pinnedItems.length<5&&!_.find(n.getItemsOfInterest().pinnedItems,function(a){}),b.shouldAnimateIn=e&&d&&n.getItemsOfInterest().pinnedItems.length>0&&!m.getPreviouslySelectedItemId(),b.isHidden=p.isHidden(b.id),b.isHideable=!o.isFavoriteOnAnyFace(b.id),b.isActioned=q.isActioned(b.id);var f=new a.ContractorItemOfInterestView(b).render().$el;g(f)});break;case r.Contractor:case r.ContractorStranger:l.getById(b,function(b){b.isFavoritable=o.getFavorites()[c].length<6&&!p.isHidden(b.id),b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=d,b.isPinned=!d,b.pinnedItemCount=n.getItemsOfInterest().pinnedItems.length,b.isPinnable=!p.isHidden(b.id)&&n.getItemsOfInterest().pinnedItems.length<5&&(!d||!_.find(n.getItemsOfInterest().pinnedItems,function(a){return a===b.id})),b.shouldAnimateIn=e&&d&&n.getItemsOfInterest().pinnedItems.length>0&&!m.getPreviouslySelectedItemId(),b.isHidden=p.isHidden(b.id),b.isHideable=!o.isFavoriteOnAnyFace(b.id)&&d&&!q.isActioned(b.id),b.isActioned=q.isActioned(b.id),b.isActionable=!p.isHidden(b.id),g(new a.ContractItemOfInterestView(b).render().$el)});break;default:throw'invalid user role "'+h+'"'}},i()}a.ItemOfInterestViewFactory=b}(wizerati),function(a){"use strict";function b(b,c,d,e,f,g){function h(){if(!b)throw"loginService not supplied.";if(!c)throw"itemRepository not supplied.";if(!d)throw"selectedItemModel not supplied.";if(!e)throw"hiddenItemsModel not supplied.";if(!f)throw"actionedItemsModel not supplied.";if(!g)throw"itemsOfInterestModel not supplied.";return j=b,k=c,l=d,m=e,n=f,o=g,i}if(!(this instanceof a.ResultViewFactory))return new a.ResultViewFactory(b,c,d,e,f,g);var i=this,j=null,k=null,l=null,m=null,n=null,o=null,p=a.mod("enum").UserRole;return this.create=function(b,c,d){if(!b)throw"id not supplied.";if(!c)throw"currentCubeFace not supplied.";if(!d)throw"done not supplied.";var e=j.getCurrentRole();switch(e){case p.Employer:case p.EmployerStranger:k.getById(b,function(b){b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=l.getSelectedItemId()===b.id,b.isHidden=m.isHidden(b.id),b.isActioned=n.isActioned(b.id),d(new a.ContractorResultView(b).render().$el)});break;case p.Contractor:case p.ContractorStranger:k.getById(b,function(b){b.isFavorite=b["isFavoriteOnFace"+c],b.isSelected=l.getSelectedItemId()===b.id,b.isHidden=m.isHidden(b.id),b.isActioned=n.isActioned(b.id),b.isPinned=o.isPinned(b.id),d(new a.ContractResultView(b).render().$el)});break;default:throw'invalid user role "'+e+'"'}},h()}a.ResultViewFactory=b}(wizerati),function(a){"use strict";function b(){function b(){return c}if(!(this instanceof a.WizeratiClientRequestFactory))return new a.WizeratiClientRequestFactory;var c=this;return this.createForGet=function(a){if(!a)throw"entity not supplied.";return{uri:"/foo",method:"PUT",data:"bar"}},b()}a.WizeratiClientRequestFactory=b}(wizerati),function(a){"use strict";function b(){function b(){return c}if(!(this instanceof a.ItemCache))return new a.ItemCache;var c=this;return this.items={},this.insert=function(a){if(!a)throw"items not supplied.";_.each(a,function(a){c.items[a.id]=_.extend({},c.items[a.id],a)})},this.exists=function(a){if(!a)throw"key not supplied.";return!!c.items[a]},b()}a.ItemCache=b}(wizerati),function(a){"use strict";function b(){if(!(this instanceof a.AccountEntity))return new a.AccountEntity;this.name="",this.email=""}a.AccountEntity=b}(wizerati),function(a,b){"use strict";function c(c,d){function e(){if(!c)throw"itemCache not supplied.";if(!d)throw"croniclService not supplied.";return g=c,h=d,f}if(!(this instanceof a.ItemRepository))return new a.ItemRepository(c,d);var f=this,g=null,h=null;return this.getById=function(a,c){function d(a){if(!a)throw"data not supplied";var d=b.parseJSON(a);g.insert([d]),c(d)}var e=g.items[a];return e?void c(e):void setTimeout(function(){b.ajax({url:h.getCroniclUri()+"items/"+a,success:d,cache:!1})},2e3)},e()}a.ItemRepository=c}(wizerati,$),function(a){"use strict";try{a.UserRole={Contractor:"1",Employer:"2",ContractorStranger:"3",EmployerStranger:"4"},a.UIMode={GreenfieldSearch:"0",Search:"1",SingleItem:"2"},a.Modal={Purchase:"0",LogIn:"1",MyAccount:"2",AccountActivation:"3",DeleteFavoriteGroupConfirmationDialog:"4"},a.SearchPanelMode={Default:"0",Minimized:"1"},a.ResultListMode={Default:"0",Minimized:"1"},a.ItemsOfInterestAction={Remove:"0"},a.FavoritesCubeMode={Default:"0",Edit:"1"}}catch(b){throw"problem registering enum module. "+b}}(wizerati.mod("enum")),function(a){"use strict";try{a.config=new wizerati.Config(invertebrate.env.dev)}catch(b){throw"problem registering config module. "+b}}(wizerati.mod("config")),function(a){"use strict";try{a.wizeratiClient=new wizerati.WizeratiClient(new wizerati.WizeratiClientRequestFactory,"bar","bam")}catch(b){throw"problem registering clients module. "+b}}(wizerati.mod("clients")),function(a){"use strict";try{a.itemCache=new wizerati.ItemCache}catch(b){throw"problem registering caches module. "+b}}(wizerati.mod("caches")),function(a){"use strict";try{a.authenticationService=new wizerati.AuthenticationService,a.cookieService=new wizerati.CookieService,a.logInService=new wizerati.LogInService(a.cookieService),a.croniclService=new wizerati.CroniclService(a.logInService,wizerati.mod("config").config),a.searchService=new wizerati.SearchService(a.croniclService,wizerati.mod("caches").itemCache),a.accountService=new wizerati.AccountService(wizerati.mod("clients").wizeratiClient)}catch(b){throw"problem registering services module. "+b}}(wizerati.mod("services")),function(a){try{a.itemRepository=new wizerati.ItemRepository(wizerati.mod("caches").itemCache,wizerati.mod("services").croniclService)}catch(b){throw"problem registering repositories module. "+b}}(wizerati.mod("repositories")),function(a){"use strict";try{a.TemplateUriHelper=new invertebrate.TemplateUriHelper(wizerati.mod("config").config,wizerati.mod("services").croniclService.getCroniclUri)}catch(b){throw"problem registering templates module. "+b}}(wizerati.mod("templates")),function(a,b,c){"use strict";function d(a,b){return"true"===c.enableTrace&&console.log(a.timestamp+": "+a.ctor+"::"+a.methodName+"%s",a.args.length>0?" called with: "+a.args:""),b(null,null)}try{a.searchFormModel=b.util.decorate(new wizerati.SearchFormModel,d),a.uiRootModel=b.util.decorate(new wizerati.UIRootModel,d),a.loginPanelModel=b.util.decorate(new wizerati.LoginPanelModel,d),a.resultListModel=b.util.decorate(new wizerati.ResultListModel,d),a.selectedCubeFaceModel=b.util.decorate(new wizerati.SelectedCubeFaceModel,d),a.selectedItemModel=b.util.decorate(new wizerati.SelectedItemModel,d),a.hiddenItemsModel=b.util.decorate(new wizerati.HiddenItemsModel,d),a.actionedItemsModel=b.util.decorate(new wizerati.ActionedItemsModel,d),a.favoritesCubeModel=b.util.decorate(new wizerati.FavoritesCubeModel(wizerati.mod("repositories").itemRepository,a.resultListModel),d),a.itemsOfInterestModel=b.util.decorate(new wizerati.ItemsOfInterestModel(a.selectedItemModel),d),a.purchasePanelModel=b.util.decorate(new wizerati.PurchasePanelModel,d),a.searchPanelModel=b.util.decorate(new wizerati.SearchPanelModel,d),a.deleteFavoriteGroupConfirmationDialogModel=b.util.decorate(new wizerati.DeleteFavoriteGroupConfirmationDialogModel,d)}catch(e){throw"problem registering models module. "+e}}(wizerati.mod("models"),invertebrate,wizerati.mod("config").config.config),function(a){"use strict";try{a.favoriteViewFactory=new wizerati.FavoriteViewFactory(wizerati.mod("services").logInService,wizerati.mod("repositories").itemRepository,wizerati.mod("models").selectedItemModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel,wizerati.mod("models").itemsOfInterestModel),a.itemOfInterestViewFactory=new wizerati.ItemOfInterestViewFactory(wizerati.mod("services").logInService,wizerati.mod("repositories").itemRepository,wizerati.mod("models").selectedItemModel,wizerati.mod("models").itemsOfInterestModel,wizerati.mod("models").favoritesCubeModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel),a.resultViewFactory=new wizerati.ResultViewFactory(wizerati.mod("services").logInService,wizerati.mod("repositories").itemRepository,wizerati.mod("models").selectedItemModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel,wizerati.mod("models").itemsOfInterestModel),a.wizeratiClientRequestFactory=new wizerati.WizeratiClientRequestFactory,a.guidFactory=new wizerati.GuidFactory}catch(b){throw"problem registering factories module. "+b}}(wizerati.mod("factories")),function(a){"use strict";try{a.searchFormView=new wizerati.SearchFormView(wizerati.mod("models").searchFormModel),a.uiRootView=new wizerati.UIRootView(wizerati.mod("models").uiRootModel),a.loginPanelView=new wizerati.LoginPanelView(wizerati.mod("models").loginPanelModel),a.favoritesCubeView=new wizerati.FavoritesCubeView(wizerati.mod("models").favoritesCubeModel,wizerati.mod("factories").favoriteViewFactory,wizerati.mod("models").selectedCubeFaceModel,wizerati.mod("models").selectedItemModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel,wizerati.mod("models").itemsOfInterestModel),a.resultListView=new wizerati.ResultListView(wizerati.mod("models").resultListModel,wizerati.mod("factories").resultViewFactory,wizerati.mod("models").selectedCubeFaceModel,wizerati.mod("models").selectedItemModel,wizerati.mod("models").favoritesCubeModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel,wizerati.mod("models").itemsOfInterestModel),a.itemsOfInterestView=new wizerati.ItemsOfInterestView(wizerati.mod("models").itemsOfInterestModel,wizerati.mod("factories").itemOfInterestViewFactory,wizerati.mod("models").selectedCubeFaceModel,wizerati.mod("models").selectedItemModel,wizerati.mod("models").favoritesCubeModel,wizerati.mod("models").hiddenItemsModel,wizerati.mod("models").actionedItemsModel),a.purchasePanelView=new wizerati.PurchasePanelView(wizerati.mod("models").purchasePanelModel),a.searchPanelView=new wizerati.SearchPanelView(wizerati.mod("models").searchPanelModel),a.deleteFavoriteGroupConfirmationDialogView=new wizerati.DeleteFavoriteGroupConfirmationDialogView(wizerati.mod("models").deleteFavoriteGroupConfirmationDialogModel,wizerati.mod("models").favoritesCubeModel)}catch(b){throw"problem registering views module. "+b}}(wizerati.mod("views")),function(a){"use strict";try{a.sessionController=new wizerati.SessionController(wizerati.mod("models").loginPanelModel,wizerati.mod("services").authenticationService),a.loginController=new wizerati.LoginController(wizerati.mod("models").loginPanelModel,wizerati.mod("models").uiRootModel),a.homeController=new wizerati.HomeController(wizerati.mod("models").uiRootModel),a.advertisersController=new wizerati.AdvertisersController(wizerati.mod("models").uiRootModel),a.searchController=new wizerati.SearchController(wizerati.mod("models").uiRootModel,wizerati.mod("models").searchFormModel,wizerati.mod("services").searchService,wizerati.mod("models").resultListModel,wizerati.mod("factories").guidFactory),a.selectedItemController=new wizerati.SelectedItemController(wizerati.mod("models").selectedItemModel,wizerati.mod("models").searchPanelModel,wizerati.mod("models").resultListModel),a.favoritesController=new wizerati.FavoritesController(wizerati.mod("models").favoritesCubeModel,wizerati.mod("models").selectedCubeFaceModel),a.selectedCubeFaceController=new wizerati.SelectedCubeFaceController(wizerati.mod("models").selectedCubeFaceModel),a.itemsOfInterestController=new wizerati.ItemsOfInterestController(wizerati.mod("models").itemsOfInterestModel),a.hiddenItemsController=new wizerati.HiddenItemsController(wizerati.mod("models").hiddenItemsModel),a.actionedItemsController=new wizerati.ActionedItemsController(wizerati.mod("models").actionedItemsModel),a.purchasePanelController=new wizerati.PurchasePanelController(wizerati.mod("models").purchasePanelModel,wizerati.mod("models").uiRootModel),a.accountActivationController=new wizerati.AccountActivationController(wizerati.mod("models").uiRootModel),a.accountActivationPanelController=new wizerati.AccountActivationPanelController(wizerati.mod("models").uiRootModel),a.purchasePanelAccountsController=new wizerati.PurchasePanelAccountsController(wizerati.mod("models").purchasePanelModel,wizerati.mod("services").accountService),a.searchPanelModeController=new wizerati.SearchPanelModeController(wizerati.mod("models").searchPanelModel),a.resultListModeController=new wizerati.ResultListModeController(wizerati.mod("models").resultListModel),a.favoriteGroupController=new wizerati.FavoriteGroupController(wizerati.mod("models").favoritesCubeModel,wizerati.mod("models").uiRootModel),a.favoritesCubeModeController=new wizerati.FavoritesCubeModeController(wizerati.mod("models").favoritesCubeModel),a.deleteFavoriteGroupConfirmationDialogController=new wizerati.DeleteFavoriteGroupConfirmationDialogController(wizerati.mod("models").deleteFavoriteGroupConfirmationDialogModel,wizerati.mod("models").uiRootModel)}catch(b){throw"problem registering controllers module. "+b}}(wizerati.mod("controllers")),function(a){"use strict";try{a.postRenderActions=[]}catch(b){throw"problem registering ui module. "+b}}(wizerati.mod("ui")),function(a){"use strict";function b(){function b(){}if(!(this instanceof a.RouteRegistrar))return new a.RouteRegistrar;return this.registerRoutes=function(b){try{b.router.registerRoute("/",function(){a.mod("controllers").homeController.index()}),b.router.registerRoute("/session/create",function(b){a.mod("controllers").sessionController.create(b)}),b.router.registerRoute("/login",function(){a.mod("controllers").loginController.index()}),b.router.registerRoute("/advertisers",function(){a.mod("controllers").advertisersController.index()}),b.router.registerRoute("/search",function(b){a.mod("controllers").searchController.show(b)},{title:"Wizerati Search",uriTransform:a.mod("controllers").searchController.uriTransformShow}),b.router.registerRoute("/selecteditem/update",function(b){a.mod("controllers").selectedItemController.update(b)},{silent:!0}),b.router.registerRoute("/favorites/create",function(b){a.mod("controllers").favoritesController.create(b)},{silent:!0}),b.router.registerRoute("/favorites/destroy",function(b){a.mod("controllers").favoritesController.destroy(b)},{silent:!0}),b.router.registerRoute("/selectedcubeface/update",function(b){a.mod("controllers").selectedCubeFaceController.update(b)},{silent:!0}),b.router.registerRoute("/itemsofinterest/create",function(b){a.mod("controllers").itemsOfInterestController.create(b)},{silent:!0}),b.router.registerRoute("/itemsofinterest/destroy",function(b){a.mod("controllers").itemsOfInterestController.destroy(b)},{silent:!0}),b.router.registerRoute("/hiddenitems/create",function(b){a.mod("controllers").hiddenItemsController.create(b)},{silent:!0}),b.router.registerRoute("/hiddenitems/destroy",function(b){a.mod("controllers").hiddenItemsController.destroy(b)},{silent:!0}),b.router.registerRoute("/actioneditems/create",function(b){a.mod("controllers").actionedItemsController.create(b)
},{silent:!0}),b.router.registerRoute("/actioneditems/destroy",function(b){a.mod("controllers").actionedItemsController.destroy(b)},{silent:!0}),b.router.registerRoute("/purchasepanel",function(b){a.mod("controllers").purchasePanelController.index(b)}),b.router.registerRoute("/purchasepanel/destroy",function(b){a.mod("controllers").purchasePanelController.destroy(b)}),b.router.registerRoute("/accountactivationpanel",function(b){a.mod("controllers").accountActivationPanelController.index(b)}),b.router.registerRoute("/accountactivationpanel/destroy",function(b){a.mod("controllers").accountActivationPanelController.destroy(b)}),b.router.registerRoute("/accountactivation/create",function(b){a.mod("controllers").accountActivationController.create(b)}),b.router.registerRoute("/purchasepanelaccounts/create",function(b){a.mod("controllers").purchasePanelAccountsController.create(b)}),b.router.registerRoute("/searchpanelmode/update",function(b){a.mod("controllers").searchPanelModeController.update(b)},{silent:!0}),b.router.registerRoute("/resultlistmode/update",function(b){a.mod("controllers").resultListModeController.update(b)},{silent:!0}),b.router.registerRoute("/favoritegroup/create",function(b){a.mod("controllers").favoriteGroupController.create(b)},{silent:!0}),b.router.registerRoute("/favoritegroup/destroy",function(b){a.mod("controllers").favoriteGroupController.destroy(b)},{silent:!0}),b.router.registerRoute("/favoritescubemode/update",function(b){a.mod("controllers").favoritesCubeModeController.update(b)},{silent:!0}),b.router.registerRoute("/deletefavoritegroupconfirmationdialog",function(b){a.mod("controllers").deleteFavoriteGroupConfirmationDialogController.index(b)},{silent:!0}),b.router.registerRoute("/deletefavoritegroupconfirmationdialog/destroy",function(b){a.mod("controllers").deleteFavoriteGroupConfirmationDialogController.destroy(b)},{silent:!0})}catch(c){throw"RouteRegistrar::registerRoutes threw an exception. "+c}},b()}a.RouteRegistrar=b}(wizerati),function(a,b,c){"use strict";function d(d,e){function f(){if(!d)throw"env not supplied";if(!e)throw"router not supplied";return g.env=d,g.router=e,c.extend(g,new b.App(a.mod("templates").TemplateUriHelper))}if(!(this instanceof a.App))return new a.App(d,e);var g=this;return f()}console.log("apply should prompt the user for credentials if not signed in, otherwise present the fields for registration"),a.App=d}(wizerati,invertebrate,_),$(function(){"use strict";window.wizerati.instance=new wizerati.App(window.invertebrate.env.dev,new window.invertebrate.Router("Wizerati")),_.each(window.wizerati.mod("views"),function(a){a.onDomReady()}),(new wizerati.RouteRegistrar).registerRoutes(window.wizerati.instance)});;//     Underscore.js 1.6.0
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
}).call(this);