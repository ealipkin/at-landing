/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.10.3
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.02.2020
 */

(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(function () { return factory(global, global.document, undefined); });
    else if (typeof module === 'object' && typeof module.exports === 'object')
        module.exports = factory(global, global.document, undefined);
    else
        factory(global, global.document, undefined);
}(typeof window !== 'undefined' ? window : this,
    function (window, document, undefined) {
        'use strict';
        var PLUGINNAME = 'OverlayScrollbars';
        var TYPES = {
            o: 'object',
            f: 'function',
            a: 'array',
            s: 'string',
            b: 'boolean',
            n: 'number',
            u: 'undefined',
            z: 'null'
            //d : 'date',
            //e : 'error',
            //r : 'regexp',
            //y : 'symbol'
        };
        var LEXICON = {
            c: 'class',
            s: 'style',
            i: 'id',
            l: 'length',
            p: 'prototype',
            oH: 'offsetHeight',
            cH: 'clientHeight',
            sH: 'scrollHeight',
            oW: 'offsetWidth',
            cW: 'clientWidth',
            sW: 'scrollWidth',
            hOP: 'hasOwnProperty',
            bCR: 'getBoundingClientRect'
        };
        var VENDORS = (function () {
            //https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
            var jsCache = {};
            var cssCache = {};
            var cssPrefixes = ['-webkit-', '-moz-', '-o-', '-ms-'];
            var jsPrefixes = ['WebKit', 'Moz', 'O', 'MS'];
            function firstLetterToUpper(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            return {
                _cssPrefixes: cssPrefixes,
                _jsPrefixes: jsPrefixes,
                _cssProperty: function (name) {
                    var result = cssCache[name];

                    if (cssCache[LEXICON.hOP](name))
                        return result;

                    var uppercasedName = firstLetterToUpper(name);
                    var elmStyle = document.createElement('div')[LEXICON.s];
                    var resultPossibilities;
                    var i = 0;
                    var v;
                    var currVendorWithoutDashes;

                    for (; i < cssPrefixes.length; i++) {
                        currVendorWithoutDashes = cssPrefixes[i].replace(/-/g, '');
                        resultPossibilities = [
                            name, //transition
                            cssPrefixes[i] + name, //-webkit-transition
                            currVendorWithoutDashes + uppercasedName, //webkitTransition
                            firstLetterToUpper(currVendorWithoutDashes) + uppercasedName //WebkitTransition
                        ];
                        for (v = 0; v < resultPossibilities[LEXICON.l]; v++) {
                            if (elmStyle[resultPossibilities[v]] !== undefined) {
                                result = resultPossibilities[v];
                                break;
                            }
                        }
                    }

                    cssCache[name] = result;
                    return result;
                },
                _jsAPI: function (name, isInterface, fallback) {
                    var i = 0;
                    var result = jsCache[name];

                    if (!jsCache[LEXICON.hOP](name)) {
                        result = window[name];
                        for (; i < jsPrefixes[LEXICON.l]; i++)
                            result = result || window[(isInterface ? jsPrefixes[i] : jsPrefixes[i].toLowerCase()) + firstLetterToUpper(name)];
                        jsCache[name] = result;
                    }
                    return result || fallback;
                }

            }
        })();
        var COMPATIBILITY = (function () {
            function windowSize(x) {
                return x ? window.innerWidth || document.documentElement[LEXICON.cW] || document.body[LEXICON.cW] : window.innerHeight || document.documentElement[LEXICON.cH] || document.body[LEXICON.cH];
            }
            function bind(func, thisObj) {
                if (typeof func != TYPES.f) {
                    throw "Can't bind function!";
                    // closest thing possible to the ECMAScript 5
                    // internal IsCallable function
                    //throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
                }
                var proto = LEXICON.p;
                var aArgs = Array[proto].slice.call(arguments, 2);
                var fNOP = function () { };
                var fBound = function () { return func.apply(this instanceof fNOP ? this : thisObj, aArgs.concat(Array[proto].slice.call(arguments))); };

                if (func[proto])
                    fNOP[proto] = func[proto]; // Function.prototype doesn't have a prototype property
                fBound[proto] = new fNOP();

                return fBound;
            }

            return {
                /**
                 * Gets the current window width.
                 * @returns {Number|number} The current window width in pixel.
                 */
                wW: bind(windowSize, 0, true),

                /**
                 * Gets the current window height.
                 * @returns {Number|number} The current window height in pixel.
                 */
                wH: bind(windowSize, 0),

                /**
                 * Gets the MutationObserver Object or undefined if not supported.
                 * @returns {MutationObserver|*|undefined} The MutationsObserver Object or undefined.
                 */
                mO: bind(VENDORS._jsAPI, 0, 'MutationObserver', true),

                /**
                 * Gets the ResizeObserver Object or undefined if not supported.
                 * @returns {MutationObserver|*|undefined} The ResizeObserver Object or undefined.
                 */
                rO: bind(VENDORS._jsAPI, 0, 'ResizeObserver', true),

                /**
                 * Gets the RequestAnimationFrame method or it's corresponding polyfill.
                 * @returns {*|Function} The RequestAnimationFrame method or it's corresponding polyfill.
                 */
                rAF: bind(VENDORS._jsAPI, 0, 'requestAnimationFrame', false, function (func) { return window.setTimeout(func, 1000 / 60); }),

                /**
                 * Gets the CancelAnimationFrame method or it's corresponding polyfill.
                 * @returns {*|Function} The CancelAnimationFrame method or it's corresponding polyfill.
                 */
                cAF: bind(VENDORS._jsAPI, 0, 'cancelAnimationFrame', false, function (id) { return window.clearTimeout(id); }),

                /**
                 * Gets the current time.
                 * @returns {number} The current time.
                 */
                now: function () {
                    return Date.now && Date.now() || new Date().getTime();
                },

                /**
                 * Stops the propagation of the given event.
                 * @param event The event of which the propagation shall be stoped.
                 */
                stpP: function (event) {
                    if (event.stopPropagation)
                        event.stopPropagation();
                    else
                        event.cancelBubble = true;
                },

                /**
                 * Prevents the default action of the given event.
                 * @param event The event of which the default action shall be prevented.
                 */
                prvD: function (event) {
                    if (event.preventDefault && event.cancelable)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                },

                /**
                 * Gets the pageX and pageY values of the given mouse event.
                 * @param event The mouse event of which the pageX and pageX shall be got.
                 * @returns {{x: number, y: number}} x = pageX value, y = pageY value.
                 */
                page: function (event) {
                    event = event.originalEvent || event;

                    var strPage = 'page';
                    var strClient = 'client';
                    var strX = 'X';
                    var strY = 'Y';
                    var target = event.target || event.srcElement || document;
                    var eventDoc = target.ownerDocument || document;
                    var doc = eventDoc.documentElement;
                    var body = eventDoc.body;

                    //if touch event return return pageX/Y of it
                    if (event.touches !== undefined) {
                        var touch = event.touches[0];
                        return {
                            x: touch[strPage + strX],
                            y: touch[strPage + strY]
                        }
                    }

                    // Calculate pageX/Y if not native supported
                    if (!event[strPage + strX] && event[strClient + strX] && event[strClient + strX] != null) {

                        return {
                            x: event[strClient + strX] +
                                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                                (doc && doc.clientLeft || body && body.clientLeft || 0),
                            y: event[strClient + strY] +
                                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                                (doc && doc.clientTop || body && body.clientTop || 0)
                        }
                    }
                    return {
                        x: event[strPage + strX],
                        y: event[strPage + strY]
                    };
                },

                /**
                 * Gets the clicked mouse button of the given mouse event.
                 * @param event The mouse event of which the clicked button shal be got.
                 * @returns {number} The number of the clicked mouse button. (0 : none | 1 : leftButton | 2 : middleButton | 3 : rightButton)
                 */
                mBtn: function (event) {
                    var button = event.button;
                    if (!event.which && button !== undefined)
                        return (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                    else
                        return event.which;
                },

                /**
                 * Checks whether a item is in the given array and returns its index.
                 * @param item The item of which the position in the array shall be determined.
                 * @param arr The array.
                 * @returns {number} The zero based index of the item or -1 if the item isn't in the array.
                 */
                inA: function (item, arr) {
                    for (var i = 0; i < arr[LEXICON.l]; i++)
                        //Sometiems in IE a "SCRIPT70" Permission denied error occurs if HTML elements in a iFrame are compared
                        try {
                            if (arr[i] === item)
                                return i;
                        }
                        catch (e) { }
                    return -1;
                },

                /**
                 * Returns true if the given value is a array.
                 * @param arr The potential array.
                 * @returns {boolean} True if the given value is a array, false otherwise.
                 */
                isA: function (arr) {
                    var def = Array.isArray;
                    return def ? def(arr) : this.type(arr) == TYPES.a;
                },

                /**
                 * Determine the internal JavaScript [[Class]] of the given object.
                 * @param obj The object of which the type shall be determined.
                 * @returns {string} The type of the given object.
                 */
                type: function (obj) {
                    if (obj === undefined)
                        return obj + '';
                    if (obj === null)
                        return obj + '';
                    return Object[LEXICON.p].toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
                },


                bind: bind

                /**
                 * Gets the vendor-prefixed CSS property by the given name.
                 * For example the given name is "transform" and you're using a old Firefox browser then the returned value would be "-moz-transform".
                 * If the browser doesn't need a vendor-prefix, then the returned string is the given name.
                 * If the browser doesn't support the given property name at all (not even with a vendor-prefix) the returned value is null.
                 * @param propName The unprefixed CSS property name.
                 * @returns {string|null} The vendor-prefixed CSS property or null if the browser doesn't support the given CSS property.

                cssProp: function(propName) {
                    return VENDORS._cssProperty(propName);
                }
                */
            }
        })();

        var MATH = Math;
        var JQUERY = window.jQuery;
        var EASING = (function () {
            var _easingsMath = {
                p: MATH.PI,
                c: MATH.cos,
                s: MATH.sin,
                w: MATH.pow,
                t: MATH.sqrt,
                n: MATH.asin,
                a: MATH.abs,
                o: 1.70158
            };

            /*
             x : current percent (0 - 1),
             t : current time (duration * percent),
             b : start value (from),
             c : end value (to),
             d : duration

             easingName : function(x, t, b, c, d) { return easedValue; }
             */

            return {
                swing: function (x, t, b, c, d) {
                    return 0.5 - _easingsMath.c(x * _easingsMath.p) / 2;
                },
                linear: function (x, t, b, c, d) {
                    return x;
                },
                easeInQuad: function (x, t, b, c, d) {
                    return c * (t /= d) * t + b;
                },
                easeOutQuad: function (x, t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                },
                easeInOutQuad: function (x, t, b, c, d) {
                    return ((t /= d / 2) < 1) ? c / 2 * t * t + b : -c / 2 * ((--t) * (t - 2) - 1) + b;
                },
                easeInCubic: function (x, t, b, c, d) {
                    return c * (t /= d) * t * t + b;
                },
                easeOutCubic: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                },
                easeInOutCubic: function (x, t, b, c, d) {
                    return ((t /= d / 2) < 1) ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
                },
                easeInQuart: function (x, t, b, c, d) {
                    return c * (t /= d) * t * t * t + b;
                },
                easeOutQuart: function (x, t, b, c, d) {
                    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                },
                easeInOutQuart: function (x, t, b, c, d) {
                    return ((t /= d / 2) < 1) ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                },
                easeInQuint: function (x, t, b, c, d) {
                    return c * (t /= d) * t * t * t * t + b;
                },
                easeOutQuint: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                },
                easeInOutQuint: function (x, t, b, c, d) {
                    return ((t /= d / 2) < 1) ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                },
                easeInSine: function (x, t, b, c, d) {
                    return -c * _easingsMath.c(t / d * (_easingsMath.p / 2)) + c + b;
                },
                easeOutSine: function (x, t, b, c, d) {
                    return c * _easingsMath.s(t / d * (_easingsMath.p / 2)) + b;
                },
                easeInOutSine: function (x, t, b, c, d) {
                    return -c / 2 * (_easingsMath.c(_easingsMath.p * t / d) - 1) + b;
                },
                easeInExpo: function (x, t, b, c, d) {
                    return (t == 0) ? b : c * _easingsMath.w(2, 10 * (t / d - 1)) + b;
                },
                easeOutExpo: function (x, t, b, c, d) {
                    return (t == d) ? b + c : c * (-_easingsMath.w(2, -10 * t / d) + 1) + b;
                },
                easeInOutExpo: function (x, t, b, c, d) {
                    if (t == 0) return b;
                    if (t == d) return b + c;
                    if ((t /= d / 2) < 1) return c / 2 * _easingsMath.w(2, 10 * (t - 1)) + b;
                    return c / 2 * (-_easingsMath.w(2, -10 * --t) + 2) + b;
                },
                easeInCirc: function (x, t, b, c, d) {
                    return -c * (_easingsMath.t(1 - (t /= d) * t) - 1) + b;
                },
                easeOutCirc: function (x, t, b, c, d) {
                    return c * _easingsMath.t(1 - (t = t / d - 1) * t) + b;
                },
                easeInOutCirc: function (x, t, b, c, d) {
                    return ((t /= d / 2) < 1) ? -c / 2 * (_easingsMath.t(1 - t * t) - 1) + b : c / 2 * (_easingsMath.t(1 - (t -= 2) * t) + 1) + b;
                },
                easeInElastic: function (x, t, b, c, d) {
                    var s = _easingsMath.o; var p = 0; var a = c;
                    if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
                    if (a < _easingsMath.a(c)) { a = c; s = p / 4; }
                    else s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a);
                    return -(a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p)) + b;
                },
                easeOutElastic: function (x, t, b, c, d) {
                    var s = _easingsMath.o; var p = 0; var a = c;
                    if (t == 0) return b;
                    if ((t /= d) == 1) return b + c;
                    if (!p) p = d * .3;
                    if (a < _easingsMath.a(c)) { a = c; s = p / 4; }
                    else s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a);
                    return a * _easingsMath.w(2, -10 * t) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) + c + b;
                },
                easeInOutElastic: function (x, t, b, c, d) {
                    var s = _easingsMath.o; var p = 0; var a = c;
                    if (t == 0) return b;
                    if ((t /= d / 2) == 2) return b + c;
                    if (!p) p = d * (.3 * 1.5);
                    if (a < _easingsMath.a(c)) { a = c; s = p / 4; }
                    else s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a);
                    if (t < 1) return -.5 * (a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p)) + b;
                    return a * _easingsMath.w(2, -10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) * .5 + c + b;
                },
                easeInBack: function (x, t, b, c, d, s) {
                    s = s || _easingsMath.o;
                    return c * (t /= d) * t * ((s + 1) * t - s) + b;
                },
                easeOutBack: function (x, t, b, c, d, s) {
                    s = s || _easingsMath.o;
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                },
                easeInOutBack: function (x, t, b, c, d, s) {
                    s = s || _easingsMath.o;
                    return ((t /= d / 2) < 1) ? c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                },
                easeInBounce: function (x, t, b, c, d) {
                    return c - this.easeOutBounce(x, d - t, 0, c, d) + b;
                },
                easeOutBounce: function (x, t, b, c, d) {
                    var o = 7.5625;
                    if ((t /= d) < (1 / 2.75)) {
                        return c * (o * t * t) + b;
                    } else if (t < (2 / 2.75)) {
                        return c * (o * (t -= (1.5 / 2.75)) * t + .75) + b;
                    } else if (t < (2.5 / 2.75)) {
                        return c * (o * (t -= (2.25 / 2.75)) * t + .9375) + b;
                    } else {
                        return c * (o * (t -= (2.625 / 2.75)) * t + .984375) + b;
                    }
                },
                easeInOutBounce: function (x, t, b, c, d) {
                    return (t < d / 2) ? this.easeInBounce(x, t * 2, 0, c, d) * .5 + b : this.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                }
            };
            /*
             *
             * TERMS OF USE - EASING EQUATIONS
             * 
             * Open source under the BSD License. 
             * 
             * Copyright Â© 2001 Robert Penner
             * All rights reserved.
             * 
             * Redistribution and use in source and binary forms, with or without modification, 
             * are permitted provided that the following conditions are met:
             * 
             * Redistributions of source code must retain the above copyright notice, this list of 
             * conditions and the following disclaimer.
             * Redistributions in binary form must reproduce the above copyright notice, this list 
             * of conditions and the following disclaimer in the documentation and/or other materials 
             * provided with the distribution.
             * 
             * Neither the name of the author nor the names of contributors may be used to endorse 
             * or promote products derived from this software without specific prior written permission.
             * 
             * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
             * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
             * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
             *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
             *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
             *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
             * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
             *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
             * OF THE POSSIBILITY OF SUCH DAMAGE. 
             *
             */
        })();
        var FRAMEWORK = (function () {
            var _rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
            var _strSpace = ' ';
            var _strEmpty = '';
            var _strScrollLeft = 'scrollLeft';
            var _strScrollTop = 'scrollTop';
            var _animations = [];
            var _type = COMPATIBILITY.type;
            var _cssNumber = {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            };

            function extend() {
                var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                    i = 1,
                    length = arguments[LEXICON.l],
                    deep = false;

                // Handle a deep copy situation
                if (_type(target) == TYPES.b) {
                    deep = target;
                    target = arguments[1] || {};
                    // skip the boolean and the target
                    i = 2;
                }

                // Handle case when target is a string or something (possible in deep copy)
                if (_type(target) != TYPES.o && !_type(target) == TYPES.f) {
                    target = {};
                }

                // extend jQuery itself if only one argument is passed
                if (length === i) {
                    target = FakejQuery;
                    --i;
                }

                for (; i < length; i++) {
                    // Only deal with non-null/undefined values
                    if ((options = arguments[i]) != null) {
                        // Extend the base object
                        for (name in options) {
                            src = target[name];
                            copy = options[name];

                            // Prevent never-ending loop
                            if (target === copy) {
                                continue;
                            }

                            // Recurse if we're merging plain objects or arrays
                            if (deep && copy && (isPlainObject(copy) || (copyIsArray = COMPATIBILITY.isA(copy)))) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && COMPATIBILITY.isA(src) ? src : [];

                                } else {
                                    clone = src && isPlainObject(src) ? src : {};
                                }

                                // Never move original objects, clone them
                                target[name] = extend(deep, clone, copy);

                                // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                }

                // Return the modified object
                return target;
            };

            function inArray(item, arr, fromIndex) {
                for (var i = fromIndex || 0; i < arr[LEXICON.l]; i++)
                    if (arr[i] === item)
                        return i;
                return -1;
            }

            function isFunction(obj) {
                return _type(obj) == TYPES.f;
            };

            function isEmptyObject(obj) {
                for (var name in obj)
                    return false;
                return true;
            };

            function isPlainObject(obj) {
                if (!obj || _type(obj) != TYPES.o)
                    return false;

                var key;
                var proto = LEXICON.p;
                var hasOwnProperty = Object[proto].hasOwnProperty;
                var hasOwnConstructor = hasOwnProperty.call(obj, 'constructor');
                var hasIsPrototypeOf = obj.constructor && obj.constructor[proto] && hasOwnProperty.call(obj.constructor[proto], 'isPrototypeOf');

                if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                    return false;
                }


                for (key in obj) { /**/ }

                return _type(key) == TYPES.u || hasOwnProperty.call(obj, key);
            };

            function each(obj, callback) {
                var i = 0;

                if (isArrayLike(obj)) {
                    for (; i < obj[LEXICON.l]; i++) {
                        if (callback.call(obj[i], i, obj[i]) === false)
                            break;
                    }
                }
                else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === false)
                            break;
                    }
                }

                return obj;
            };

            function isArrayLike(obj) {
                var length = !!obj && [LEXICON.l] in obj && obj[LEXICON.l];
                var t = _type(obj);
                return isFunction(t) ? false : (t == TYPES.a || length === 0 || _type(length) == TYPES.n && length > 0 && (length - 1) in obj);
            }

            function stripAndCollapse(value) {
                var tokens = value.match(_rnothtmlwhite) || [];
                return tokens.join(_strSpace);
            }

            function matches(elem, selector) {
                var nodeList = (elem.parentNode || document).querySelectorAll(selector) || [];
                var i = nodeList[LEXICON.l];

                while (i--)
                    if (nodeList[i] == elem)
                        return true;

                return false;
            }

            function insertAdjacentElement(el, strategy, child) {
                if (_type(child) == TYPES.a) {
                    for (var i = 0; i < child[LEXICON.l]; i++)
                        insertAdjacentElement(el, strategy, child[i]);
                }
                else if (_type(child) == TYPES.s)
                    el.insertAdjacentHTML(strategy, child);
                else
                    el.insertAdjacentElement(strategy, child.nodeType ? child : child[0]);
            }

            function setCSSVal(el, prop, val) {
                try {
                    if (el[LEXICON.s][prop] !== undefined)
                        el[LEXICON.s][prop] = parseCSSVal(prop, val);
                } catch (e) { }
            }

            function parseCSSVal(prop, val) {
                if (!_cssNumber[prop.toLowerCase()] && _type(val) == TYPES.n)
                    val += 'px';
                return val;
            }

            function startNextAnimationInQ(animObj, removeFromQ) {
                var index;
                var nextAnim;
                if (removeFromQ !== false)
                    animObj.q.splice(0, 1);
                if (animObj.q[LEXICON.l] > 0) {
                    nextAnim = animObj.q[0];
                    animate(animObj.el, nextAnim.props, nextAnim.duration, nextAnim.easing, nextAnim.complete, true);
                }
                else {
                    index = inArray(animObj, _animations);
                    if (index > -1)
                        _animations.splice(index, 1);
                }
            }

            function setAnimationValue(el, prop, value) {
                if (prop === _strScrollLeft || prop === _strScrollTop)
                    el[prop] = value;
                else
                    setCSSVal(el, prop, value);
            }

            function animate(el, props, options, easing, complete, guaranteedNext) {
                var hasOptions = isPlainObject(options);
                var from = {};
                var to = {};
                var i = 0;
                var key;
                var animObj;
                var start;
                var progress;
                var step;
                var specialEasing;
                var duration;
                if (hasOptions) {
                    easing = options.easing;
                    start = options.start;
                    progress = options.progress;
                    step = options.step;
                    specialEasing = options.specialEasing;
                    complete = options.complete;
                    duration = options.duration;
                }
                else
                    duration = options;
                specialEasing = specialEasing || {};
                duration = duration || 400;
                easing = easing || 'swing';
                guaranteedNext = guaranteedNext || false;

                for (; i < _animations[LEXICON.l]; i++) {
                    if (_animations[i].el === el) {
                        animObj = _animations[i];
                        break;
                    }
                }

                if (!animObj) {
                    animObj = {
                        el: el,
                        q: []
                    };
                    _animations.push(animObj);
                }

                for (key in props) {
                    if (key === _strScrollLeft || key === _strScrollTop)
                        from[key] = el[key];
                    else
                        from[key] = FakejQuery(el).css(key);
                }

                for (key in from) {
                    if (from[key] !== props[key] && props[key] !== undefined)
                        to[key] = props[key];
                }

                if (!isEmptyObject(to)) {
                    var timeNow;
                    var end;
                    var percent;
                    var fromVal;
                    var toVal;
                    var easedVal;
                    var timeStart;
                    var frame;
                    var elapsed;
                    var qPos = guaranteedNext ? 0 : inArray(qObj, animObj.q);
                    var qObj = {
                        props: to,
                        duration: hasOptions ? options : duration,
                        easing: easing,
                        complete: complete
                    };
                    if (qPos === -1) {
                        qPos = animObj.q[LEXICON.l];
                        animObj.q.push(qObj);
                    }

                    if (qPos === 0) {
                        if (duration > 0) {
                            timeStart = COMPATIBILITY.now();
                            frame = function () {
                                timeNow = COMPATIBILITY.now();
                                elapsed = (timeNow - timeStart);
                                end = qObj.stop || elapsed >= duration;
                                percent = 1 - ((MATH.max(0, timeStart + duration - timeNow) / duration) || 0);

                                for (key in to) {
                                    fromVal = parseFloat(from[key]);
                                    toVal = parseFloat(to[key]);
                                    easedVal = (toVal - fromVal) * EASING[specialEasing[key] || easing](percent, percent * duration, 0, 1, duration) + fromVal;
                                    setAnimationValue(el, key, easedVal);
                                    if (isFunction(step)) {
                                        step(easedVal, {
                                            elem: el,
                                            prop: key,
                                            start: fromVal,
                                            now: easedVal,
                                            end: toVal,
                                            pos: percent,
                                            options: {
                                                easing: easing,
                                                speacialEasing: specialEasing,
                                                duration: duration,
                                                complete: complete,
                                                step: step
                                            },
                                            startTime: timeStart
                                        });
                                    }
                                }

                                if (isFunction(progress))
                                    progress({}, percent, MATH.max(0, duration - elapsed));

                                if (end) {
                                    startNextAnimationInQ(animObj);
                                    if (isFunction(complete))
                                        complete();
                                }
                                else
                                    qObj.frame = COMPATIBILITY.rAF()(frame);
                            };
                            qObj.frame = COMPATIBILITY.rAF()(frame);
                        }
                        else {
                            for (key in to)
                                setAnimationValue(el, key, to[key]);
                            startNextAnimationInQ(animObj);
                        }
                    }
                }
                else if (guaranteedNext)
                    startNextAnimationInQ(animObj);
            }

            function stop(el, clearQ, jumpToEnd) {
                var animObj;
                var qObj;
                var key;
                var i = 0;
                for (; i < _animations[LEXICON.l]; i++) {
                    animObj = _animations[i];
                    if (animObj.el === el) {
                        if (animObj.q[LEXICON.l] > 0) {
                            qObj = animObj.q[0];
                            qObj.stop = true;
                            COMPATIBILITY.cAF()(qObj.frame);
                            animObj.q.splice(0, 1);

                            if (jumpToEnd)
                                for (key in qObj.props)
                                    setAnimationValue(el, key, qObj.props[key]);

                            if (clearQ)
                                animObj.q = [];
                            else
                                startNextAnimationInQ(animObj, false);
                        }
                        break;
                    }
                }
            }

            function elementIsVisible(el) {
                return !!(el[LEXICON.oW] || el[LEXICON.oH] || el.getClientRects()[LEXICON.l]);
            }

            function FakejQuery(selector) {
                if (arguments[LEXICON.l] === 0)
                    return this;

                var base = new FakejQuery();
                var elements = selector;
                var i = 0;
                var elms;
                var el;

                if (_type(selector) == TYPES.s) {
                    elements = [];
                    if (selector.charAt(0) === '<') {
                        el = document.createElement('div');
                        el.innerHTML = selector;
                        elms = el.children;
                    }
                    else {
                        elms = document.querySelectorAll(selector);
                    }

                    for (; i < elms[LEXICON.l]; i++)
                        elements.push(elms[i]);
                }

                if (elements) {
                    if (_type(elements) != TYPES.s && (!isArrayLike(elements) || elements === window || elements === elements.self))
                        elements = [elements];

                    for (i = 0; i < elements[LEXICON.l]; i++)
                        base[i] = elements[i];

                    base[LEXICON.l] = elements[LEXICON.l];
                }

                return base;
            };

            FakejQuery[LEXICON.p] = {

                //EVENTS:

                on: function (eventName, handler) {
                    eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty];

                    var eventNameLength = eventName[LEXICON.l];
                    var i = 0;
                    var el;
                    return this.each(function () {
                        el = this;
                        try {
                            if (el.addEventListener) {
                                for (; i < eventNameLength; i++)
                                    el.addEventListener(eventName[i], handler);
                            }
                            else if (el.detachEvent) {
                                for (; i < eventNameLength; i++)
                                    el.attachEvent('on' + eventName[i], handler);
                            }
                        } catch (e) { }
                    });
                },

                off: function (eventName, handler) {
                    eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty];

                    var eventNameLength = eventName[LEXICON.l];
                    var i = 0;
                    var el;
                    return this.each(function () {
                        el = this;
                        try {
                            if (el.removeEventListener) {
                                for (; i < eventNameLength; i++)
                                    el.removeEventListener(eventName[i], handler);
                            }
                            else if (el.detachEvent) {
                                for (; i < eventNameLength; i++)
                                    el.detachEvent('on' + eventName[i], handler);
                            }
                        } catch (e) { }
                    });
                },

                one: function (eventName, handler) {
                    eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty];
                    return this.each(function () {
                        var el = FakejQuery(this);
                        FakejQuery.each(eventName, function (i, oneEventName) {
                            var oneHandler = function (e) {
                                handler.call(this, e);
                                el.off(oneEventName, oneHandler);
                            };
                            el.on(oneEventName, oneHandler);
                        });
                    });
                },

                trigger: function (eventName) {
                    var el;
                    var event;
                    return this.each(function () {
                        el = this;
                        if (document.createEvent) {
                            event = document.createEvent('HTMLEvents');
                            event.initEvent(eventName, true, false);
                            el.dispatchEvent(event);
                        }
                        else {
                            el.fireEvent('on' + eventName);
                        }
                    });
                },

                //DOM NODE INSERTING / REMOVING:

                append: function (child) {
                    return this.each(function () { insertAdjacentElement(this, 'beforeend', child); });
                },

                prepend: function (child) {
                    return this.each(function () { insertAdjacentElement(this, 'afterbegin', child); });
                },

                before: function (child) {
                    return this.each(function () { insertAdjacentElement(this, 'beforebegin', child); });
                },

                after: function (child) {
                    return this.each(function () { insertAdjacentElement(this, 'afterend', child); });
                },

                remove: function () {
                    return this.each(function () {
                        var el = this;
                        var parentNode = el.parentNode;
                        if (parentNode != null)
                            parentNode.removeChild(el);
                    });
                },

                unwrap: function () {
                    var parents = [];
                    var i;
                    var el;
                    var parent;

                    this.each(function () {
                        parent = this.parentNode;
                        if (inArray(parent, parents) === - 1)
                            parents.push(parent);
                    });

                    for (i = 0; i < parents[LEXICON.l]; i++) {
                        el = parents[i];
                        parent = el.parentNode;
                        while (el.firstChild)
                            parent.insertBefore(el.firstChild, el);
                        parent.removeChild(el);
                    }

                    return this;
                },

                wrapAll: function (wrapperHTML) {
                    var i;
                    var nodes = this;
                    var wrapper = FakejQuery(wrapperHTML)[0];
                    var deepest = wrapper;
                    var parent = nodes[0].parentNode;
                    var previousSibling = nodes[0].previousSibling;
                    while (deepest.childNodes[LEXICON.l] > 0)
                        deepest = deepest.childNodes[0];

                    for (i = 0; nodes[LEXICON.l] - i; deepest.firstChild === nodes[0] && i++)
                        deepest.appendChild(nodes[i]);

                    var nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild;
                    parent.insertBefore(wrapper, nextSibling);

                    return this;
                },

                wrapInner: function (wrapperHTML) {
                    return this.each(function () {
                        var el = FakejQuery(this);
                        var contents = el.contents();

                        if (contents[LEXICON.l])
                            contents.wrapAll(wrapperHTML);
                        else
                            el.append(wrapperHTML);
                    });
                },

                wrap: function (wrapperHTML) {
                    return this.each(function () { FakejQuery(this).wrapAll(wrapperHTML); });
                },


                //DOM NODE MANIPULATION / INFORMATION:

                css: function (styles, val) {
                    var el;
                    var key;
                    var cptStyle;
                    var getCptStyle = window.getComputedStyle;
                    if (_type(styles) == TYPES.s) {
                        if (val === undefined) {
                            el = this[0];
                            cptStyle = getCptStyle ? getCptStyle(el, null) : el.currentStyle[styles];

                            //https://bugzilla.mozilla.org/show_bug.cgi?id=548397 can be null sometimes if iframe with display: none (firefox only!)
                            return getCptStyle ? cptStyle != null ? cptStyle.getPropertyValue(styles) : el[LEXICON.s][styles] : cptStyle;
                        }
                        else {
                            return this.each(function () {
                                setCSSVal(this, styles, val);
                            });
                        }
                    }
                    else {
                        return this.each(function () {
                            for (key in styles)
                                setCSSVal(this, key, styles[key]);
                        });
                    }
                },

                hasClass: function (className) {
                    var elem, i = 0;
                    var classNamePrepared = _strSpace + className + _strSpace;
                    var classList;

                    while ((elem = this[i++])) {
                        classList = elem.classList;
                        if (classList && classList.contains(className))
                            return true;
                        else if (elem.nodeType === 1 && (_strSpace + stripAndCollapse(elem.className + _strEmpty) + _strSpace).indexOf(classNamePrepared) > -1)
                            return true;
                    }

                    return false;
                },

                addClass: function (className) {
                    var classes;
                    var elem;
                    var cur;
                    var curValue;
                    var clazz;
                    var finalValue;
                    var supportClassList;
                    var elmClassList;
                    var i = 0;
                    var v = 0;

                    if (className) {
                        classes = className.match(_rnothtmlwhite) || [];

                        while ((elem = this[i++])) {
                            elmClassList = elem.classList;
                            if (supportClassList === undefined)
                                supportClassList = elmClassList !== undefined;

                            if (supportClassList) {
                                while ((clazz = classes[v++]))
                                    elmClassList.add(clazz);
                            }
                            else {
                                curValue = elem.className + _strEmpty;
                                cur = elem.nodeType === 1 && (_strSpace + stripAndCollapse(curValue) + _strSpace);

                                if (cur) {
                                    while ((clazz = classes[v++]))
                                        if (cur.indexOf(_strSpace + clazz + _strSpace) < 0)
                                            cur += clazz + _strSpace;

                                    finalValue = stripAndCollapse(cur);
                                    if (curValue !== finalValue)
                                        elem.className = finalValue;
                                }
                            }
                        }
                    }

                    return this;
                },

                removeClass: function (className) {
                    var classes;
                    var elem;
                    var cur;
                    var curValue;
                    var clazz;
                    var finalValue;
                    var supportClassList;
                    var elmClassList;
                    var i = 0;
                    var v = 0;

                    if (className) {
                        classes = className.match(_rnothtmlwhite) || [];

                        while ((elem = this[i++])) {
                            elmClassList = elem.classList;
                            if (supportClassList === undefined)
                                supportClassList = elmClassList !== undefined;

                            if (supportClassList) {
                                while ((clazz = classes[v++]))
                                    elmClassList.remove(clazz);
                            }
                            else {
                                curValue = elem.className + _strEmpty;
                                cur = elem.nodeType === 1 && (_strSpace + stripAndCollapse(curValue) + _strSpace);

                                if (cur) {
                                    while ((clazz = classes[v++]))
                                        while (cur.indexOf(_strSpace + clazz + _strSpace) > -1)
                                            cur = cur.replace(_strSpace + clazz + _strSpace, _strSpace);

                                    finalValue = stripAndCollapse(cur);
                                    if (curValue !== finalValue)
                                        elem.className = finalValue;
                                }
                            }
                        }
                    }

                    return this;
                },

                hide: function () {
                    return this.each(function () { this[LEXICON.s].display = 'none'; });
                },

                show: function () {
                    return this.each(function () { this[LEXICON.s].display = 'block'; });
                },

                attr: function (attrName, value) {
                    var i = 0;
                    var el;
                    while (el = this[i++]) {
                        if (value === undefined)
                            return el.getAttribute(attrName);
                        el.setAttribute(attrName, value);
                    }
                    return this;
                },

                removeAttr: function (attrName) {
                    return this.each(function () { this.removeAttribute(attrName); });
                },

                offset: function () {
                    var el = this[0];
                    var rect = el[LEXICON.bCR]();
                    var scrollLeft = window.pageXOffset || document.documentElement[_strScrollLeft];
                    var scrollTop = window.pageYOffset || document.documentElement[_strScrollTop];
                    return {
                        top: rect.top + scrollTop,
                        left: rect.left + scrollLeft
                    };
                },

                position: function () {
                    var el = this[0];
                    return {
                        top: el.offsetTop,
                        left: el.offsetLeft
                    };
                },

                scrollLeft: function (value) {
                    var i = 0;
                    var el;
                    while (el = this[i++]) {
                        if (value === undefined)
                            return el[_strScrollLeft];
                        el[_strScrollLeft] = value;
                    }
                    return this;
                },

                scrollTop: function (value) {
                    var i = 0;
                    var el;
                    while (el = this[i++]) {
                        if (value === undefined)
                            return el[_strScrollTop];
                        el[_strScrollTop] = value;
                    }
                    return this;
                },

                val: function (value) {
                    var el = this[0];
                    if (!value)
                        return el.value;
                    el.value = value;
                    return this;
                },


                //DOM TRAVERSAL / FILTERING:

                first: function () {
                    return this.eq(0);
                },

                last: function () {
                    return this.eq(-1);
                },

                eq: function (index) {
                    return FakejQuery(this[index >= 0 ? index : this[LEXICON.l] + index]);
                },

                find: function (selector) {
                    var children = [];
                    var i;
                    this.each(function () {
                        var el = this;
                        var ch = el.querySelectorAll(selector);
                        for (i = 0; i < ch[LEXICON.l]; i++)
                            children.push(ch[i]);
                    });
                    return FakejQuery(children);
                },

                children: function (selector) {
                    var children = [];
                    var el;
                    var ch;
                    var i;

                    this.each(function () {
                        ch = this.children;
                        for (i = 0; i < ch[LEXICON.l]; i++) {
                            el = ch[i];
                            if (selector) {
                                if ((el.matches && el.matches(selector)) || matches(el, selector))
                                    children.push(el);
                            }
                            else
                                children.push(el);
                        }
                    });
                    return FakejQuery(children);
                },

                parent: function (selector) {
                    var parents = [];
                    var parent;
                    this.each(function () {
                        parent = this.parentNode;
                        if (selector ? FakejQuery(parent).is(selector) : true)
                            parents.push(parent);
                    });
                    return FakejQuery(parents);
                },

                is: function (selector) {

                    var el;
                    var i;
                    for (i = 0; i < this[LEXICON.l]; i++) {
                        el = this[i];
                        if (selector === ':visible')
                            return elementIsVisible(el);
                        if (selector === ':hidden')
                            return !elementIsVisible(el);
                        if ((el.matches && el.matches(selector)) || matches(el, selector))
                            return true;
                    }
                    return false;
                },

                contents: function () {
                    var contents = [];
                    var childs;
                    var i;

                    this.each(function () {
                        childs = this.childNodes;
                        for (i = 0; i < childs[LEXICON.l]; i++)
                            contents.push(childs[i]);
                    });

                    return FakejQuery(contents);
                },

                each: function (callback) {
                    return each(this, callback);
                },


                //ANIMATION:

                animate: function (props, duration, easing, complete) {
                    return this.each(function () { animate(this, props, duration, easing, complete); });
                },

                stop: function (clearQ, jump) {
                    return this.each(function () { stop(this, clearQ, jump); });
                }
            };

            extend(FakejQuery, {
                extend: extend,
                inArray: inArray,
                isEmptyObject: isEmptyObject,
                isPlainObject: isPlainObject,
                each: each
            });

            return FakejQuery;
        })();
        var INSTANCES = (function () {
            var _targets = [];
            var _instancePropertyString = '__overlayScrollbars__';

            /**
             * Register, unregister or get a certain (or all) instances.
             * Register: Pass the target and the instance.
             * Unregister: Pass the target and null.
             * Get Instance: Pass the target from which the instance shall be got.
             * Get Targets: Pass no arguments.
             * @param target The target to which the instance shall be registered / from which the instance shall be unregistered / the instance shall be got
             * @param instance The instance.
             * @returns {*|void} Returns the instance from the given target.
             */
            return function (target, instance) {
                var argLen = arguments[LEXICON.l];
                if (argLen < 1) {
                    //return all targets
                    return _targets;
                }
                else {
                    if (instance) {
                        //register instance
                        target[_instancePropertyString] = instance;
                        _targets.push(target);
                    }
                    else {
                        var index = COMPATIBILITY.inA(target, _targets);
                        if (index > -1) {
                            if (argLen > 1) {
                                //unregister instance
                                delete target[_instancePropertyString];
                                _targets.splice(index, 1);
                            }
                            else {
                                //get instance from target
                                return _targets[index][_instancePropertyString];
                            }
                        }
                    }
                }
            }
        })();
        var PLUGIN = (function () {
            var _plugin;
            var _pluginsGlobals;
            var _pluginsAutoUpdateLoop;
            var _pluginsExtensions = [];
            var _pluginsOptions = (function () {
                var type = COMPATIBILITY.type;
                var possibleTemplateTypes = [
                    TYPES.b, //boolean
                    TYPES.n, //number
                    TYPES.s, //string
                    TYPES.a, //array
                    TYPES.o, //object
                    TYPES.f, //function
                    TYPES.z  //null
                ];
                var restrictedStringsSplit = ' ';
                var restrictedStringsPossibilitiesSplit = ':';
                var classNameAllowedValues = [TYPES.z, TYPES.s];
                var numberAllowedValues = TYPES.n;
                var booleanNullAllowedValues = [TYPES.z, TYPES.b];
                var booleanTrueTemplate = [true, TYPES.b];
                var booleanFalseTemplate = [false, TYPES.b];
                var callbackTemplate = [null, [TYPES.z, TYPES.f]];
                var inheritedAttrsTemplate = [['style', 'class'], [TYPES.s, TYPES.a, TYPES.z]];
                var resizeAllowedValues = 'n:none b:both h:horizontal v:vertical';
                var overflowBehaviorAllowedValues = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden';
                var scrollbarsVisibilityAllowedValues = 'v:visible h:hidden a:auto';
                var scrollbarsAutoHideAllowedValues = 'n:never s:scroll l:leave m:move';
                var optionsDefaultsAndTemplate = {
                    className: ['os-theme-dark', classNameAllowedValues],                //null || string
                    resize: ['none', resizeAllowedValues],                               //none || both  || horizontal || vertical || n || b || h || v
                    sizeAutoCapable: booleanTrueTemplate,                                //true || false
                    clipAlways: booleanTrueTemplate,                                     //true || false
                    normalizeRTL: booleanTrueTemplate,                                   //true || false
                    paddingAbsolute: booleanFalseTemplate,                               //true || false
                    autoUpdate: [null, booleanNullAllowedValues],                        //true || false || null
                    autoUpdateInterval: [33, numberAllowedValues],                       //number
                    nativeScrollbarsOverlaid: {
                        showNativeScrollbars: booleanFalseTemplate,                      //true || false
                        initialize: booleanTrueTemplate                                  //true || false
                    },
                    overflowBehavior: {
                        x: ['scroll', overflowBehaviorAllowedValues],                    //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
                        y: ['scroll', overflowBehaviorAllowedValues]                     //visible-hidden  || visible-scroll || hidden || scroll || v-h || v-s || h || s
                    },
                    scrollbars: {
                        visibility: ['auto', scrollbarsVisibilityAllowedValues],         //visible || hidden || auto || v || h || a
                        autoHide: ['never', scrollbarsAutoHideAllowedValues],            //never || scroll || leave || move || n || s || l || m
                        autoHideDelay: [800, numberAllowedValues],                       //number
                        dragScrolling: booleanTrueTemplate,                              //true || false
                        clickScrolling: booleanFalseTemplate,                            //true || false
                        touchSupport: booleanTrueTemplate,                               //true || false
                        snapHandle: booleanFalseTemplate                                 //true || false
                    },
                    textarea: {
                        dynWidth: booleanFalseTemplate,                                  //true || false
                        dynHeight: booleanFalseTemplate,                                 //true || false
                        inheritedAttrs: inheritedAttrsTemplate                          //string || array || null
                    },
                    callbacks: {
                        onInitialized: callbackTemplate,                                 //null || function
                        onInitializationWithdrawn: callbackTemplate,                     //null || function
                        onDestroyed: callbackTemplate,                                   //null || function
                        onScrollStart: callbackTemplate,                                 //null || function
                        onScroll: callbackTemplate,                                      //null || function
                        onScrollStop: callbackTemplate,                                  //null || function
                        onOverflowChanged: callbackTemplate,                             //null || function
                        onOverflowAmountChanged: callbackTemplate,                       //null || function
                        onDirectionChanged: callbackTemplate,                            //null || function
                        onContentSizeChanged: callbackTemplate,                          //null || function
                        onHostSizeChanged: callbackTemplate,                             //null || function
                        onUpdated: callbackTemplate                                      //null || function
                    }
                };
                var convert = function (template) {
                    var recursive = function (obj) {
                        var key;
                        var val;
                        var valType;
                        for (key in obj) {
                            if (!obj[LEXICON.hOP](key))
                                continue;
                            val = obj[key];
                            valType = type(val);
                            if (valType == TYPES.a)
                                obj[key] = val[template ? 1 : 0];
                            else if (valType == TYPES.o)
                                obj[key] = recursive(val);
                        }
                        return obj;
                    };
                    return recursive(FRAMEWORK.extend(true, {}, optionsDefaultsAndTemplate));
                };

                return {
                    _defaults: convert(),

                    _template: convert(true),

                    /**
                     * Validates the passed object by the passed template.
                     * @param obj The object which shall be validated.
                     * @param template The template which defines the allowed values and types.
                     * @param writeErrors True if errors shall be logged to the console.
                     * @param diffObj If a object is passed then only valid differences to this object will be returned.
                     * @returns {{}} A object which contains two objects called "default" and "prepared" which contains only the valid properties of the passed original object and discards not different values compared to the passed diffObj.
                     */
                    _validate: function (obj, template, writeErrors, diffObj) {
                        var validatedOptions = {};
                        var validatedOptionsPrepared = {};
                        var objectCopy = FRAMEWORK.extend(true, {}, obj);
                        var inArray = FRAMEWORK.inArray;
                        var isEmptyObj = FRAMEWORK.isEmptyObject;
                        var checkObjectProps = function (data, template, diffData, validatedOptions, validatedOptionsPrepared, prevPropName) {
                            for (var prop in template) {
                                if (template[LEXICON.hOP](prop) && data[LEXICON.hOP](prop)) {
                                    var isValid = false;
                                    var isDiff = false;
                                    var templateValue = template[prop];
                                    var templateValueType = type(templateValue);
                                    var templateIsComplex = templateValueType == TYPES.o;
                                    var templateTypes = type(templateValue) != TYPES.a ? [templateValue] : templateValue;
                                    var dataDiffValue = diffData[prop];
                                    var dataValue = data[prop];
                                    var dataValueType = type(dataValue);
                                    var propPrefix = prevPropName ? prevPropName + '.' : '';
                                    var error = "The option \"" + propPrefix + prop + "\" wasn't set, because";
                                    var errorPossibleTypes = [];
                                    var errorRestrictedStrings = [];
                                    var restrictedStringValuesSplit;
                                    var restrictedStringValuesPossibilitiesSplit;
                                    var isRestrictedValue;
                                    var mainPossibility;
                                    var currType;
                                    var i;
                                    var v;
                                    var j;

                                    dataDiffValue = dataDiffValue === undefined ? {} : dataDiffValue;

                                    //if the template has a object as value, it means that the options are complex (verschachtelt)
                                    if (templateIsComplex && dataValueType == TYPES.o) {
                                        validatedOptions[prop] = {};
                                        validatedOptionsPrepared[prop] = {};
                                        checkObjectProps(dataValue, templateValue, dataDiffValue, validatedOptions[prop], validatedOptionsPrepared[prop], propPrefix + prop);
                                        FRAMEWORK.each([data, validatedOptions, validatedOptionsPrepared], function (index, value) {
                                            if (isEmptyObj(value[prop])) {
                                                delete value[prop];
                                            }
                                        });
                                    }
                                    else if (!templateIsComplex) {
                                        for (i = 0; i < templateTypes[LEXICON.l]; i++) {
                                            currType = templateTypes[i];
                                            templateValueType = type(currType);
                                            //if currtype is string and starts with restrictedStringPrefix and end with restrictedStringSuffix
                                            isRestrictedValue = templateValueType == TYPES.s && inArray(currType, possibleTemplateTypes) === -1;
                                            if (isRestrictedValue) {
                                                errorPossibleTypes.push(TYPES.s);

                                                //split it into a array which contains all possible values for example: ["y:yes", "n:no", "m:maybe"]
                                                restrictedStringValuesSplit = currType.split(restrictedStringsSplit);
                                                errorRestrictedStrings = errorRestrictedStrings.concat(restrictedStringValuesSplit);
                                                for (v = 0; v < restrictedStringValuesSplit[LEXICON.l]; v++) {
                                                    //split the possible values into their possibiliteis for example: ["y", "yes"] -> the first is always the mainPossibility
                                                    restrictedStringValuesPossibilitiesSplit = restrictedStringValuesSplit[v].split(restrictedStringsPossibilitiesSplit);
                                                    mainPossibility = restrictedStringValuesPossibilitiesSplit[0];
                                                    for (j = 0; j < restrictedStringValuesPossibilitiesSplit[LEXICON.l]; j++) {
                                                        //if any possibility matches with the dataValue, its valid
                                                        if (dataValue === restrictedStringValuesPossibilitiesSplit[j]) {
                                                            isValid = true;
                                                            break;
                                                        }
                                                    }
                                                    if (isValid)
                                                        break;
                                                }
                                            }
                                            else {
                                                errorPossibleTypes.push(currType);

                                                if (dataValueType === currType) {
                                                    isValid = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (isValid) {
                                            isDiff = dataValue !== dataDiffValue;

                                            if (isDiff)
                                                validatedOptions[prop] = dataValue;

                                            if (isRestrictedValue ? inArray(dataDiffValue, restrictedStringValuesPossibilitiesSplit) < 0 : isDiff)
                                                validatedOptionsPrepared[prop] = isRestrictedValue ? mainPossibility : dataValue;
                                        }
                                        else if (writeErrors) {
                                            console.warn(error + " it doesn't accept the type [ " + dataValueType.toUpperCase() + " ] with the value of \"" + dataValue + "\".\r\n" +
                                                "Accepted types are: [ " + errorPossibleTypes.join(', ').toUpperCase() + " ]." +
                                                (errorRestrictedStrings[length] > 0 ? "\r\nValid strings are: [ " + errorRestrictedStrings.join(', ').split(restrictedStringsPossibilitiesSplit).join(', ') + " ]." : ''));
                                        }
                                        delete data[prop];
                                    }
                                }
                            }
                        };
                        checkObjectProps(objectCopy, template, diffObj || {}, validatedOptions, validatedOptionsPrepared);

                        //add values which aren't specified in the template to the finished validated object to prevent them from being discarded
                        /*
                        if(keepForeignProps) {
                            FRAMEWORK.extend(true, validatedOptions, objectCopy);
                            FRAMEWORK.extend(true, validatedOptionsPrepared, objectCopy);
                        }
                        */

                        if (!isEmptyObj(objectCopy) && writeErrors)
                            console.warn('The following options are discarded due to invalidity:\r\n' + window.JSON.stringify(objectCopy, null, 2));

                        return {
                            _default: validatedOptions,
                            _prepared: validatedOptionsPrepared
                        };
                    }
                }
            }());

            /**
             * Initializes the object which contains global information about the plugin and each instance of it.
             */
            function initOverlayScrollbarsStatics() {
                if (!_pluginsGlobals)
                    _pluginsGlobals = new OverlayScrollbarsGlobals(_pluginsOptions._defaults);
                if (!_pluginsAutoUpdateLoop)
                    _pluginsAutoUpdateLoop = new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals);
            }

            /**
             * The global object for the OverlayScrollbars objects. It contains resources which every OverlayScrollbars object needs. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
             * @param defaultOptions
             * @constructor
             */
            function OverlayScrollbarsGlobals(defaultOptions) {
                var _base = this;
                var strOverflow = 'overflow';
                var strHidden = 'hidden';
                var strScroll = 'scroll';
                var bodyElement = FRAMEWORK('body');
                var scrollbarDummyElement = FRAMEWORK('<div id="os-dummy-scrollbar-size"><div></div></div>');
                var scrollbarDummyElement0 = scrollbarDummyElement[0];
                var dummyContainerChild = FRAMEWORK(scrollbarDummyElement.children('div').eq(0));

                bodyElement.append(scrollbarDummyElement);
                scrollbarDummyElement.hide().show(); //fix IE8 bug (incorrect measuring)

                var nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement0);
                var nativeScrollbarIsOverlaid = {
                    x: nativeScrollbarSize.x === 0,
                    y: nativeScrollbarSize.y === 0
                };
                var msie = (function () {
                    var ua = window.navigator.userAgent;
                    var strIndexOf = 'indexOf';
                    var strSubString = 'substring';
                    var msie = ua[strIndexOf]('MSIE ');
                    var trident = ua[strIndexOf]('Trident/');
                    var edge = ua[strIndexOf]('Edge/');
                    var rv = ua[strIndexOf]('rv:');
                    var result;
                    var parseIntFunc = parseInt;

                    // IE 10 or older => return version number
                    if (msie > 0)
                        result = parseIntFunc(ua[strSubString](msie + 5, ua[strIndexOf]('.', msie)), 10);

                    // IE 11 => return version number
                    else if (trident > 0)
                        result = parseIntFunc(ua[strSubString](rv + 3, ua[strIndexOf]('.', rv)), 10);

                    // Edge (IE 12+) => return version number
                    else if (edge > 0)
                        result = parseIntFunc(ua[strSubString](edge + 5, ua[strIndexOf]('.', edge)), 10);

                    // other browser
                    return result;
                })();

                FRAMEWORK.extend(_base, {
                    defaultOptions: defaultOptions,
                    msie: msie,
                    autoUpdateLoop: false,
                    autoUpdateRecommended: !COMPATIBILITY.mO(),
                    nativeScrollbarSize: nativeScrollbarSize,
                    nativeScrollbarIsOverlaid: nativeScrollbarIsOverlaid,
                    nativeScrollbarStyling: (function () {
                        var result = false;
                        scrollbarDummyElement.addClass('os-viewport-native-scrollbars-invisible');
                        try {
                            result = (scrollbarDummyElement.css('scrollbar-width') === 'none' && (msie > 9 || !msie)) || window.getComputedStyle(scrollbarDummyElement0, '::-webkit-scrollbar').getPropertyValue('display') === 'none';
                        } catch (ex) { }

                        //fix opera bug: scrollbar styles will only appear if overflow value is scroll or auto during the activation of the style.
                        //and set overflow to scroll
                        //scrollbarDummyElement.css(strOverflow, strHidden).hide().css(strOverflow, strScroll).show();
                        //return (scrollbarDummyElement0[LEXICON.oH] - scrollbarDummyElement0[LEXICON.cH]) === 0 && (scrollbarDummyElement0[LEXICON.oW] - scrollbarDummyElement0[LEXICON.cW]) === 0;

                        return result;
                    })(),
                    overlayScrollbarDummySize: { x: 30, y: 30 },
                    cssCalc: (function () {
                        var dummyStyle = document.createElement('div')[LEXICON.s];
                        var strCalc = 'calc';
                        var i = -1;
                        var prop;

                        for (; i < VENDORS._cssPrefixes[LEXICON.l]; i++) {
                            prop = i < 0 ? strCalc : VENDORS._cssPrefixes[i] + strCalc;
                            dummyStyle.cssText = 'width:' + prop + '(1px);';
                            if (dummyStyle[LEXICON.l])
                                return prop;
                        }
                        return null;
                    })(),
                    restrictedMeasuring: (function () {
                        //https://bugzilla.mozilla.org/show_bug.cgi?id=1439305
                        scrollbarDummyElement.css(strOverflow, strHidden);
                        var scrollSize = {
                            w: scrollbarDummyElement0[LEXICON.sW],
                            h: scrollbarDummyElement0[LEXICON.sH]
                        };
                        scrollbarDummyElement.css(strOverflow, 'visible');
                        var scrollSize2 = {
                            w: scrollbarDummyElement0[LEXICON.sW],
                            h: scrollbarDummyElement0[LEXICON.sH]
                        };
                        return (scrollSize.w - scrollSize2.w) !== 0 || (scrollSize.h - scrollSize2.h) !== 0;
                    })(),
                    rtlScrollBehavior: (function () {
                        scrollbarDummyElement.css({ 'overflow-y': strHidden, 'overflow-x': strScroll, 'direction': 'rtl' }).scrollLeft(0);
                        var dummyContainerOffset = scrollbarDummyElement.offset();
                        var dummyContainerChildOffset = dummyContainerChild.offset();
                        scrollbarDummyElement.scrollLeft(999);
                        var dummyContainerScrollOffsetAfterScroll = dummyContainerChild.offset();
                        return {
                            //origin direction = determines if the zero scroll position is on the left or right side
                            //'i' means 'invert' (i === true means that the axis must be inverted to be correct)
                            //true = on the left side
                            //false = on the right side
                            i: dummyContainerOffset.left === dummyContainerChildOffset.left,
                            //negative = determines if the maximum scroll is positive or negative
                            //'n' means 'negate' (n === true means that the axis must be negated to be correct)
                            //true = negative
                            //false = positive
                            n: dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left === 0
                        };
                    })(),
                    supportTransform: VENDORS._cssProperty('transform') !== undefined,
                    supportTransition: VENDORS._cssProperty('transition') !== undefined,
                    supportPassiveEvents: (function () {
                        var supportsPassive = false;
                        try {
                            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                                get: function () {
                                    supportsPassive = true;
                                }
                            }));
                        } catch (e) { }
                        return supportsPassive;
                    })(),
                    supportResizeObserver: !!COMPATIBILITY.rO(),
                    supportMutationObserver: !!COMPATIBILITY.mO()
                });

                scrollbarDummyElement.removeAttr(LEXICON.s).remove();

                //Catch zoom event:
                (function () {
                    if (nativeScrollbarIsOverlaid.x && nativeScrollbarIsOverlaid.y)
                        return;

                    var abs = MATH.abs;
                    var windowWidth = COMPATIBILITY.wW();
                    var windowHeight = COMPATIBILITY.wH();
                    var windowDpr = getWindowDPR();
                    var onResize = function () {
                        if (INSTANCES().length > 0) {
                            var newW = COMPATIBILITY.wW();
                            var newH = COMPATIBILITY.wH();
                            var deltaW = newW - windowWidth;
                            var deltaH = newH - windowHeight;

                            if (deltaW === 0 && deltaH === 0)
                                return;

                            var deltaWRatio = MATH.round(newW / (windowWidth / 100.0));
                            var deltaHRatio = MATH.round(newH / (windowHeight / 100.0));
                            var absDeltaW = abs(deltaW);
                            var absDeltaH = abs(deltaH);
                            var absDeltaWRatio = abs(deltaWRatio);
                            var absDeltaHRatio = abs(deltaHRatio);
                            var newDPR = getWindowDPR();

                            var deltaIsBigger = absDeltaW > 2 && absDeltaH > 2;
                            var difference = !differenceIsBiggerThanOne(absDeltaWRatio, absDeltaHRatio);
                            var dprChanged = newDPR !== windowDpr && windowDpr > 0;
                            var isZoom = deltaIsBigger && difference && dprChanged;
                            var oldScrollbarSize = _base.nativeScrollbarSize;
                            var newScrollbarSize;

                            if (isZoom) {
                                bodyElement.append(scrollbarDummyElement);
                                newScrollbarSize = _base.nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement[0]);
                                scrollbarDummyElement.remove();
                                if (oldScrollbarSize.x !== newScrollbarSize.x || oldScrollbarSize.y !== newScrollbarSize.y) {
                                    FRAMEWORK.each(INSTANCES(), function () {
                                        if (INSTANCES(this))
                                            INSTANCES(this).update('zoom');
                                    });
                                }
                            }

                            windowWidth = newW;
                            windowHeight = newH;
                            windowDpr = newDPR;
                        }
                    };

                    function differenceIsBiggerThanOne(valOne, valTwo) {
                        var absValOne = abs(valOne);
                        var absValTwo = abs(valTwo);
                        return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
                    }

                    function getWindowDPR() {
                        var dDPI = window.screen.deviceXDPI || 0;
                        var sDPI = window.screen.logicalXDPI || 1;
                        return window.devicePixelRatio || (dDPI / sDPI);
                    }

                    FRAMEWORK(window).on('resize', onResize);
                })();

                function calcNativeScrollbarSize(measureElement) {
                    return {
                        x: measureElement[LEXICON.oH] - measureElement[LEXICON.cH],
                        y: measureElement[LEXICON.oW] - measureElement[LEXICON.cW]
                    };
                }
            }

            /**
             * The object which manages the auto update loop for all OverlayScrollbars objects. This object is initialized only once: if the first OverlayScrollbars object gets initialized.
             * @constructor
             */
            function OverlayScrollbarsAutoUpdateLoop(globals) {
                var _base = this;
                var _inArray = FRAMEWORK.inArray;
                var _getNow = COMPATIBILITY.now;
                var _strAutoUpdate = 'autoUpdate';
                var _strAutoUpdateInterval = _strAutoUpdate + 'Interval';
                var _strLength = LEXICON.l;
                var _loopingInstances = [];
                var _loopingInstancesIntervalCache = [];
                var _loopIsActive = false;
                var _loopIntervalDefault = 33;
                var _loopInterval = _loopIntervalDefault;
                var _loopTimeOld = _getNow();
                var _loopID;


                /**
                 * The auto update loop which will run every 50 milliseconds or less if the update interval of a instance is lower than 50 milliseconds.
                 */
                var loop = function () {
                    if (_loopingInstances[_strLength] > 0 && _loopIsActive) {
                        _loopID = COMPATIBILITY.rAF()(function () {
                            loop();
                        });
                        var timeNew = _getNow();
                        var timeDelta = timeNew - _loopTimeOld;
                        var lowestInterval;
                        var instance;
                        var instanceOptions;
                        var instanceAutoUpdateAllowed;
                        var instanceAutoUpdateInterval;
                        var now;

                        if (timeDelta > _loopInterval) {
                            _loopTimeOld = timeNew - (timeDelta % _loopInterval);
                            lowestInterval = _loopIntervalDefault;
                            for (var i = 0; i < _loopingInstances[_strLength]; i++) {
                                instance = _loopingInstances[i];
                                if (instance !== undefined) {
                                    instanceOptions = instance.options();
                                    instanceAutoUpdateAllowed = instanceOptions[_strAutoUpdate];
                                    instanceAutoUpdateInterval = MATH.max(1, instanceOptions[_strAutoUpdateInterval]);
                                    now = _getNow();

                                    if ((instanceAutoUpdateAllowed === true || instanceAutoUpdateAllowed === null) && (now - _loopingInstancesIntervalCache[i]) > instanceAutoUpdateInterval) {
                                        instance.update('auto');
                                        _loopingInstancesIntervalCache[i] = new Date(now += instanceAutoUpdateInterval);
                                    }

                                    lowestInterval = MATH.max(1, MATH.min(lowestInterval, instanceAutoUpdateInterval));
                                }
                            }
                            _loopInterval = lowestInterval;
                        }
                    } else {
                        _loopInterval = _loopIntervalDefault;
                    }
                };

                /**
                 * Add OverlayScrollbars instance to the auto update loop. Only successful if the instance isn't already added.
                 * @param instance The instance which shall be updated in a loop automatically.
                 */
                _base.add = function (instance) {
                    if (_inArray(instance, _loopingInstances) === -1) {
                        _loopingInstances.push(instance);
                        _loopingInstancesIntervalCache.push(_getNow());
                        if (_loopingInstances[_strLength] > 0 && !_loopIsActive) {
                            _loopIsActive = true;
                            globals.autoUpdateLoop = _loopIsActive;
                            loop();
                        }
                    }
                };

                /**
                 * Remove OverlayScrollbars instance from the auto update loop. Only successful if the instance was added before.
                 * @param instance The instance which shall be updated in a loop automatically.
                 */
                _base.remove = function (instance) {
                    var index = _inArray(instance, _loopingInstances);
                    if (index > -1) {
                        //remove from loopingInstances list
                        _loopingInstancesIntervalCache.splice(index, 1);
                        _loopingInstances.splice(index, 1);

                        //correct update loop behavior
                        if (_loopingInstances[_strLength] === 0 && _loopIsActive) {
                            _loopIsActive = false;
                            globals.autoUpdateLoop = _loopIsActive;
                            if (_loopID !== undefined) {
                                COMPATIBILITY.cAF()(_loopID);
                                _loopID = -1;
                            }
                        }
                    }
                };
            }

            /**
             * A object which manages the scrollbars visibility of the target element.
             * @param pluginTargetElement The element from which the scrollbars shall be hidden.
             * @param options The custom options.
             * @param extensions The custom extensions.
             * @param globals
             * @param autoUpdateLoop
             * @returns {*}
             * @constructor
             */
            function OverlayScrollbarsInstance(pluginTargetElement, options, extensions, globals, autoUpdateLoop) {
                //shortcuts
                var type = COMPATIBILITY.type;
                var inArray = FRAMEWORK.inArray;
                var each = FRAMEWORK.each;

                //make correct instanceof
                var _base = new _plugin();
                var _frameworkProto = FRAMEWORK[LEXICON.p];

                //if passed element is no HTML element: skip and return
                if (!isHTMLElement(pluginTargetElement))
                    return;

                //if passed element is already initialized: set passed options if there are any and return its instance
                if (INSTANCES(pluginTargetElement)) {
                    var inst = INSTANCES(pluginTargetElement);
                    inst.options(options);
                    return inst;
                }

                //globals:
                var _nativeScrollbarIsOverlaid;
                var _overlayScrollbarDummySize;
                var _rtlScrollBehavior;
                var _autoUpdateRecommended;
                var _msieVersion;
                var _nativeScrollbarStyling;
                var _cssCalc;
                var _nativeScrollbarSize;
                var _supportTransition;
                var _supportTransform;
                var _supportPassiveEvents;
                var _supportResizeObserver;
                var _supportMutationObserver;
                var _restrictedMeasuring;

                //general readonly:
                var _initialized;
                var _destroyed;
                var _isTextarea;
                var _isBody;
                var _documentMixed;
                var _domExists;

                //general:
                var _isBorderBox;
                var _sizeAutoObserverAdded;
                var _paddingX;
                var _paddingY;
                var _borderX;
                var _borderY;
                var _marginX;
                var _marginY;
                var _isRTL;
                var _sleeping;
                var _contentBorderSize = {};
                var _scrollHorizontalInfo = {};
                var _scrollVerticalInfo = {};
                var _viewportSize = {};
                var _nativeScrollbarMinSize = {};

                //naming:
                var _strMinusHidden = '-hidden';
                var _strMarginMinus = 'margin-';
                var _strPaddingMinus = 'padding-';
                var _strBorderMinus = 'border-';
                var _strTop = 'top';
                var _strRight = 'right';
                var _strBottom = 'bottom';
                var _strLeft = 'left';
                var _strMinMinus = 'min-';
                var _strMaxMinus = 'max-';
                var _strWidth = 'width';
                var _strHeight = 'height';
                var _strFloat = 'float';
                var _strEmpty = '';
                var _strAuto = 'auto';
                var _strSync = 'sync';
                var _strScroll = 'scroll';
                var _strHundredPercent = '100%';
                var _strX = 'x';
                var _strY = 'y';
                var _strDot = '.';
                var _strSpace = ' ';
                var _strScrollbar = 'scrollbar';
                var _strMinusHorizontal = '-horizontal';
                var _strMinusVertical = '-vertical';
                var _strScrollLeft = _strScroll + 'Left';
                var _strScrollTop = _strScroll + 'Top';
                var _strMouseTouchDownEvent = 'mousedown touchstart';
                var _strMouseTouchUpEvent = 'mouseup touchend touchcancel';
                var _strMouseTouchMoveEvent = 'mousemove touchmove';
                var _strMouseTouchEnter = 'mouseenter';
                var _strMouseTouchLeave = 'mouseleave';
                var _strKeyDownEvent = 'keydown';
                var _strKeyUpEvent = 'keyup';
                var _strSelectStartEvent = 'selectstart';
                var _strTransitionEndEvent = 'transitionend webkitTransitionEnd oTransitionEnd';
                var _strResizeObserverProperty = '__overlayScrollbarsRO__';

                //class names:
                var _cassNamesPrefix = 'os-';
                var _classNameHTMLElement = _cassNamesPrefix + 'html';
                var _classNameHostElement = _cassNamesPrefix + 'host';
                var _classNameHostTextareaElement = _classNameHostElement + '-textarea';
                var _classNameHostScrollbarHorizontalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusHorizontal + _strMinusHidden;
                var _classNameHostScrollbarVerticalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusVertical + _strMinusHidden;
                var _classNameHostTransition = _classNameHostElement + '-transition';
                var _classNameHostRTL = _classNameHostElement + '-rtl';
                var _classNameHostResizeDisabled = _classNameHostElement + '-resize-disabled';
                var _classNameHostScrolling = _classNameHostElement + '-scrolling';
                var _classNameHostOverflow = _classNameHostElement + '-overflow';
                var _classNameHostOverflowX = _classNameHostOverflow + '-x';
                var _classNameHostOverflowY = _classNameHostOverflow + '-y';
                var _classNameTextareaElement = _cassNamesPrefix + 'textarea';
                var _classNameTextareaCoverElement = _classNameTextareaElement + '-cover';
                var _classNamePaddingElement = _cassNamesPrefix + 'padding';
                var _classNameViewportElement = _cassNamesPrefix + 'viewport';
                var _classNameViewportNativeScrollbarsInvisible = _classNameViewportElement + '-native-scrollbars-invisible';
                var _classNameViewportNativeScrollbarsOverlaid = _classNameViewportElement + '-native-scrollbars-overlaid';
                var _classNameContentElement = _cassNamesPrefix + 'content';
                var _classNameContentArrangeElement = _cassNamesPrefix + 'content-arrange';
                var _classNameContentGlueElement = _cassNamesPrefix + 'content-glue';
                var _classNameSizeAutoObserverElement = _cassNamesPrefix + 'size-auto-observer';
                var _classNameResizeObserverElement = _cassNamesPrefix + 'resize-observer';
                var _classNameResizeObserverItemElement = _cassNamesPrefix + 'resize-observer-item';
                var _classNameResizeObserverItemFinalElement = _classNameResizeObserverItemElement + '-final';
                var _classNameTextInherit = _cassNamesPrefix + 'text-inherit';
                var _classNameScrollbar = _cassNamesPrefix + _strScrollbar;
                var _classNameScrollbarTrack = _classNameScrollbar + '-track';
                var _classNameScrollbarTrackOff = _classNameScrollbarTrack + '-off';
                var _classNameScrollbarHandle = _classNameScrollbar + '-handle';
                var _classNameScrollbarHandleOff = _classNameScrollbarHandle + '-off';
                var _classNameScrollbarUnusable = _classNameScrollbar + '-unusable';
                var _classNameScrollbarAutoHidden = _classNameScrollbar + '-' + _strAuto + _strMinusHidden;
                var _classNameScrollbarCorner = _classNameScrollbar + '-corner';
                var _classNameScrollbarCornerResize = _classNameScrollbarCorner + '-resize';
                var _classNameScrollbarCornerResizeB = _classNameScrollbarCornerResize + '-both';
                var _classNameScrollbarCornerResizeH = _classNameScrollbarCornerResize + _strMinusHorizontal;
                var _classNameScrollbarCornerResizeV = _classNameScrollbarCornerResize + _strMinusVertical;
                var _classNameScrollbarHorizontal = _classNameScrollbar + _strMinusHorizontal;
                var _classNameScrollbarVertical = _classNameScrollbar + _strMinusVertical;
                var _classNameDragging = _cassNamesPrefix + 'dragging';
                var _classNameThemeNone = _cassNamesPrefix + 'theme-none';
                var _classNamesDynamicDestroy = [
                    _classNameViewportNativeScrollbarsInvisible,
                    _classNameViewportNativeScrollbarsOverlaid,
                    _classNameScrollbarTrackOff,
                    _classNameScrollbarHandleOff,
                    _classNameScrollbarUnusable,
                    _classNameScrollbarAutoHidden,
                    _classNameScrollbarCornerResize,
                    _classNameScrollbarCornerResizeB,
                    _classNameScrollbarCornerResizeH,
                    _classNameScrollbarCornerResizeV,
                    _classNameDragging].join(_strSpace);

                //callbacks:
                var _callbacksInitQeueue = [];

                //options:
                var _defaultOptions;
                var _currentOptions;
                var _currentPreparedOptions;

                //extensions:
                var _extensions = {};
                var _extensionsPrivateMethods = 'added removed on contract';

                //update
                var _lastUpdateTime;
                var _swallowedUpdateHints = {};
                var _swallowedUpdateTimeout;
                var _swallowUpdateLag = 42;
                var _imgs = [];

                //DOM elements:
                var _windowElement;
                var _documentElement;
                var _htmlElement;
                var _bodyElement;
                var _targetElement;                     //the target element of this OverlayScrollbars object
                var _hostElement;                       //the host element of this OverlayScrollbars object -> may be the same as targetElement
                var _sizeAutoObserverElement;           //observes size auto changes
                var _sizeObserverElement;               //observes size and padding changes
                var _paddingElement;                    //manages the padding
                var _viewportElement;                   //is the viewport of our scrollbar model
                var _contentElement;                    //the element which holds the content
                var _contentArrangeElement;             //is needed for correct sizing of the content element (only if native scrollbars are overlays)
                var _contentGlueElement;                //has always the size of the content element
                var _textareaCoverElement;              //only applied if target is a textarea element. Used for correct size calculation and for prevention of uncontrolled scrolling
                var _scrollbarCornerElement;
                var _scrollbarHorizontalElement;
                var _scrollbarHorizontalTrackElement;
                var _scrollbarHorizontalHandleElement;
                var _scrollbarVerticalElement;
                var _scrollbarVerticalTrackElement;
                var _scrollbarVerticalHandleElement;
                var _windowElementNative;
                var _documentElementNative;
                var _targetElementNative;
                var _hostElementNative;
                var _sizeAutoObserverElementNative;
                var _sizeObserverElementNative;
                var _paddingElementNative;
                var _viewportElementNative;
                var _contentElementNative;

                //Cache:
                var _hostSizeCache;
                var _contentScrollSizeCache;
                var _arrangeContentSizeCache;
                var _hasOverflowCache;
                var _hideOverflowCache;
                var _widthAutoCache;
                var _heightAutoCache;
                var _cssMaxValueCache;
                var _cssBoxSizingCache;
                var _cssPaddingCache;
                var _cssBorderCache;
                var _cssMarginCache;
                var _cssDirectionCache;
                var _cssDirectionDetectedCache;
                var _paddingAbsoluteCache;
                var _clipAlwaysCache;
                var _contentGlueSizeCache;
                var _overflowBehaviorCache;
                var _overflowAmountCache;
                var _ignoreOverlayScrollbarHidingCache;
                var _autoUpdateCache;
                var _sizeAutoCapableCache;
                var _contentElementScrollSizeChangeDetectedCache;
                var _hostElementSizeChangeDetectedCache;
                var _scrollbarsVisibilityCache;
                var _scrollbarsAutoHideCache;
                var _scrollbarsClickScrollingCache;
                var _scrollbarsDragScrollingCache;
                var _resizeCache;
                var _normalizeRTLCache;
                var _classNameCache;
                var _oldClassName;
                var _textareaAutoWrappingCache;
                var _textareaInfoCache;
                var _textareaSizeCache;
                var _textareaDynHeightCache;
                var _textareaDynWidthCache;
                var _bodyMinSizeCache;
                var _viewportScrollSizeCache;
                var _displayIsHiddenCache;
                var _updateAutoCache = {};

                //MutationObserver:
                var _mutationObserverHost;
                var _mutationObserverContent;
                var _mutationObserverHostCallback;
                var _mutationObserverContentCallback;
                var _mutationObserversConnected;
                var _mutationObserverAttrsTextarea = ['wrap', 'cols', 'rows'];
                var _mutationObserverAttrsHost = [LEXICON.i, LEXICON.c, LEXICON.s, 'open'];

                //events:
                var _destroyEvents = [];

                //textarea:
                var _textareaHasFocus;

                //scrollbars:
                var _scrollbarsAutoHideTimeoutId;
                var _scrollbarsAutoHideMoveTimeoutId;
                var _scrollbarsAutoHideDelay;
                var _scrollbarsAutoHideNever;
                var _scrollbarsAutoHideScroll;
                var _scrollbarsAutoHideMove;
                var _scrollbarsAutoHideLeave;
                var _scrollbarsHandleHovered;
                var _scrollbarsHandlesDefineScrollPos;

                //resize
                var _resizeNone;
                var _resizeBoth;
                var _resizeHorizontal;
                var _resizeVertical;


                //==== Event Listener ====//

                /**
                 * Adds or removes a event listener from the given element. 
                 * @param element The element to which the event listener shall be applied or removed.
                 * @param eventNames The name(s) of the events.
                 * @param listener The method which shall be called.
                 * @param remove True if the handler shall be removed, false or undefined if the handler shall be added.
                 */
                function setupResponsiveEventListener(element, eventNames, listener, remove, passive) {
                    var collected = type(eventNames) == TYPES.a && type(listener) == TYPES.a;
                    var method = remove ? 'removeEventListener' : 'addEventListener';
                    var onOff = remove ? 'off' : 'on';
                    var events = collected ? false : eventNames.split(_strSpace)
                    var i = 0;

                    if (collected) {
                        for (; i < eventNames[LEXICON.l]; i++)
                            setupResponsiveEventListener(element, eventNames[i], listener[i], remove);
                    }
                    else {
                        for (; i < events[LEXICON.l]; i++) {
                            if (_supportPassiveEvents)
                                element[0][method](events[i], listener, { passive: passive || false });
                            else
                                element[onOff](events[i], listener);
                        }
                    }
                }


                function addDestroyEventListener(element, eventNames, listener, passive) {
                    setupResponsiveEventListener(element, eventNames, listener, false, passive);
                    _destroyEvents.push(COMPATIBILITY.bind(setupResponsiveEventListener, 0, element, eventNames, listener, true, passive));
                }

                //==== Resize Observer ====//

                /**
                 * Adds or removes a resize observer from the given element.
                 * @param targetElement The element to which the resize observer shall be added or removed.
                 * @param onElementResizedCallback The callback which is fired every time the resize observer registers a size change or false / undefined if the resizeObserver shall be removed.
                 */
                function setupResizeObserver(targetElement, onElementResizedCallback) {
                    if (targetElement) {
                        var resizeObserver = COMPATIBILITY.rO();
                        var strAnimationStartEvent = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart';
                        var strChildNodes = 'childNodes';
                        var constScroll = 3333333;
                        var callback = function () {
                            targetElement[_strScrollTop](constScroll)[_strScrollLeft](_isRTL ? _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll : constScroll);
                            onElementResizedCallback();
                        };
                        //add resize observer:
                        if (onElementResizedCallback) {
                            if (_supportResizeObserver) {
                                var element = targetElement.append(generateDiv(_classNameResizeObserverElement + ' observed')).contents()[0];
                                var observer = element[_strResizeObserverProperty] = new resizeObserver(callback);
                                observer.observe(element);
                            }
                            else {
                                if (_msieVersion > 9 || !_autoUpdateRecommended) {
                                    targetElement.prepend(
                                        generateDiv(_classNameResizeObserverElement,
                                            generateDiv({ c: _classNameResizeObserverItemElement, dir: 'ltr' },
                                                generateDiv(_classNameResizeObserverItemElement,
                                                    generateDiv(_classNameResizeObserverItemFinalElement)
                                                ) +
                                                generateDiv(_classNameResizeObserverItemElement,
                                                    generateDiv({ c: _classNameResizeObserverItemFinalElement, style: 'width: 200%; height: 200%' })
                                                )
                                            )
                                        )
                                    );

                                    var observerElement = targetElement[0][strChildNodes][0][strChildNodes][0];
                                    var shrinkElement = FRAMEWORK(observerElement[strChildNodes][1]);
                                    var expandElement = FRAMEWORK(observerElement[strChildNodes][0]);
                                    var expandElementChild = FRAMEWORK(expandElement[0][strChildNodes][0]);
                                    var widthCache = observerElement[LEXICON.oW];
                                    var heightCache = observerElement[LEXICON.oH];
                                    var isDirty;
                                    var rAFId;
                                    var currWidth;
                                    var currHeight;
                                    var factor = 2;
                                    var nativeScrollbarSize = globals.nativeScrollbarSize; //care don't make changes to this object!!!
                                    var reset = function () {
                                        /*
                                         var sizeResetWidth = observerElement[LEXICON.oW] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                                         var sizeResetHeight = observerElement[LEXICON.oH] + nativeScrollbarSize.x * factor + nativeScrollbarSize.y * factor + _overlayScrollbarDummySize.x + _overlayScrollbarDummySize.y;
                                         var expandChildCSS = {};
                                         expandChildCSS[_strWidth] = sizeResetWidth;
                                         expandChildCSS[_strHeight] = sizeResetHeight;
                                         expandElementChild.css(expandChildCSS);


                                         expandElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                                         shrinkElement[_strScrollLeft](sizeResetWidth)[_strScrollTop](sizeResetHeight);
                                         */
                                        expandElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                                        shrinkElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                                    };
                                    var onResized = function () {
                                        rAFId = 0;
                                        if (!isDirty)
                                            return;

                                        widthCache = currWidth;
                                        heightCache = currHeight;
                                        callback();
                                    };
                                    var onScroll = function (event) {
                                        currWidth = observerElement[LEXICON.oW];
                                        currHeight = observerElement[LEXICON.oH];
                                        isDirty = currWidth != widthCache || currHeight != heightCache;

                                        if (event && isDirty && !rAFId) {
                                            COMPATIBILITY.cAF()(rAFId);
                                            rAFId = COMPATIBILITY.rAF()(onResized);
                                        }
                                        else if (!event)
                                            onResized();

                                        reset();
                                        if (event) {
                                            COMPATIBILITY.prvD(event);
                                            COMPATIBILITY.stpP(event);
                                        }
                                        return false;
                                    };
                                    var expandChildCSS = {};
                                    var observerElementCSS = {};

                                    setTopRightBottomLeft(observerElementCSS, _strEmpty, [
                                        -((nativeScrollbarSize.y + 1) * factor),
                                        nativeScrollbarSize.x * -factor,
                                        nativeScrollbarSize.y * -factor,
                                        -((nativeScrollbarSize.x + 1) * factor)
                                    ]);

                                    FRAMEWORK(observerElement).css(observerElementCSS);
                                    expandElement.on(_strScroll, onScroll);
                                    shrinkElement.on(_strScroll, onScroll);
                                    targetElement.on(strAnimationStartEvent, function () {
                                        onScroll(false);
                                    });
                                    //lets assume that the divs will never be that large and a constant value is enough
                                    expandChildCSS[_strWidth] = constScroll;
                                    expandChildCSS[_strHeight] = constScroll;
                                    expandElementChild.css(expandChildCSS);

                                    reset();
                                }
                                else {
                                    var attachEvent = _documentElementNative.attachEvent;
                                    var isIE = _msieVersion !== undefined;
                                    if (attachEvent) {
                                        targetElement.prepend(generateDiv(_classNameResizeObserverElement));
                                        findFirst(targetElement, _strDot + _classNameResizeObserverElement)[0].attachEvent('onresize', callback);
                                    }
                                    else {
                                        var obj = _documentElementNative.createElement(TYPES.o);
                                        obj.setAttribute('tabindex', '-1');
                                        obj.setAttribute(LEXICON.c, _classNameResizeObserverElement);
                                        obj.onload = function () {
                                            var wnd = this.contentDocument.defaultView;
                                            wnd.addEventListener('resize', callback);
                                            wnd.document.documentElement.style.display = 'none';
                                        };
                                        obj.type = 'text/html';
                                        if (isIE)
                                            targetElement.prepend(obj);
                                        obj.data = 'about:blank';
                                        if (!isIE)
                                            targetElement.prepend(obj);
                                        targetElement.on(strAnimationStartEvent, callback);
                                    }
                                }
                            }

                            if (targetElement[0] === _sizeObserverElementNative) {
                                var directionChanged = function () {
                                    var dir = _hostElement.css('direction');
                                    var css = {};
                                    var scrollLeftValue = 0;
                                    var result = false;
                                    if (dir !== _cssDirectionDetectedCache) {
                                        if (dir === 'ltr') {
                                            css[_strLeft] = 0;
                                            css[_strRight] = _strAuto;
                                            scrollLeftValue = constScroll;
                                        }
                                        else {
                                            css[_strLeft] = _strAuto;
                                            css[_strRight] = 0;
                                            scrollLeftValue = _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll;
                                        }
                                        //execution order is important for IE!!!
                                        _sizeObserverElement.children().eq(0).css(css);
                                        _sizeObserverElement[_strScrollLeft](scrollLeftValue)[_strScrollTop](constScroll);
                                        _cssDirectionDetectedCache = dir;
                                        result = true;
                                    }
                                    return result;
                                };
                                directionChanged();
                                addDestroyEventListener(targetElement, _strScroll, function (event) {
                                    if (directionChanged())
                                        update();
                                    COMPATIBILITY.prvD(event);
                                    COMPATIBILITY.stpP(event);
                                    return false;
                                });
                            }
                        }
                        //remove resize observer:
                        else {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                var resizeObserverObj = element[_strResizeObserverProperty];
                                if (resizeObserverObj) {
                                    resizeObserverObj.disconnect();
                                    delete element[_strResizeObserverProperty];
                                }
                            }
                            else {
                                remove(targetElement.children(_strDot + _classNameResizeObserverElement).eq(0));
                            }
                        }
                    }
                }

                /**
                 * Freezes or unfreezes the given resize observer.
                 * @param targetElement The element to which the target resize observer is applied.
                 * @param freeze True if the resize observer shall be frozen, false otherwise.
                 
                function freezeResizeObserver(targetElement, freeze) {
                    if (targetElement !== undefined) {
                        if(freeze) {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                element[_strResizeObserverProperty].unobserve(element);
                            }
                            else {
                                targetElement = targetElement.children(_strDot + _classNameResizeObserverElement).eq(0);
                                var w = targetElement.css(_strWidth);
                                var h = targetElement.css(_strHeight);
                                var css = {};
                                css[_strWidth] = w;
                                css[_strHeight] = h;
                                targetElement.css(css);
                            }
                        }
                        else {
                            if (_supportResizeObserver) {
                                var element = targetElement.contents()[0];
                                element[_strResizeObserverProperty].observe(element);
                            }
                            else {
                                var css = { };
                                css[_strHeight] = _strEmpty;
                                css[_strWidth] = _strEmpty;
                                targetElement.children(_strDot + _classNameResizeObserverElement).eq(0).css(css);
                            }
                        }
                    }
                }
                */


                //==== Mutation Observers ====//

                /**
                 * Creates MutationObservers for the host and content Element if they are supported.
                 */
                function createMutationObservers() {
                    if (_supportMutationObserver) {
                        var mutationObserverContentLag = 11;
                        var mutationObserver = COMPATIBILITY.mO();
                        var contentLastUpdate = COMPATIBILITY.now();
                        var mutationTarget;
                        var mutationAttrName;
                        var contentTimeout;
                        var now;
                        var sizeAuto;
                        var action;

                        _mutationObserverHostCallback = function (mutations) {
                            var doUpdate = false;
                            var mutation;

                            if (_initialized && !_sleeping) {
                                each(mutations, function () {
                                    mutation = this;
                                    mutationTarget = mutation.target;
                                    mutationAttrName = mutation.attributeName;

                                    if (mutationAttrName === LEXICON.c)
                                        doUpdate = hostClassNamesChanged(mutation.oldValue, mutationTarget.className);
                                    else if (mutationAttrName === LEXICON.s)
                                        doUpdate = mutation.oldValue !== mutationTarget[LEXICON.s].cssText;
                                    else
                                        doUpdate = true;

                                    if (doUpdate)
                                        return false;
                                });

                                if (doUpdate)
                                    _base.update(_strAuto);
                            }
                            return doUpdate;
                        };
                        _mutationObserverContentCallback = function (mutations) {
                            var doUpdate = false;
                            var mutation;

                            if (_initialized && !_sleeping) {
                                each(mutations, function () {
                                    mutation = this;
                                    doUpdate = isUnknownMutation(mutation);
                                    return !doUpdate;
                                });

                                if (doUpdate) {
                                    now = COMPATIBILITY.now();
                                    sizeAuto = (_heightAutoCache || _widthAutoCache);
                                    action = function () {
                                        if (!_destroyed) {
                                            contentLastUpdate = now;

                                            //if cols, rows or wrap attr was changed
                                            if (_isTextarea)
                                                textareaUpdate();

                                            if (sizeAuto)
                                                update();
                                            else
                                                _base.update(_strAuto);
                                        }
                                    };
                                    clearTimeout(contentTimeout);
                                    if (mutationObserverContentLag <= 0 || now - contentLastUpdate > mutationObserverContentLag || !sizeAuto)
                                        action();
                                    else
                                        contentTimeout = setTimeout(action, mutationObserverContentLag);
                                }
                            }
                            return doUpdate;
                        }

                        _mutationObserverHost = new mutationObserver(_mutationObserverHostCallback);
                        _mutationObserverContent = new mutationObserver(_mutationObserverContentCallback);
                    }
                }

                /**
                 * Connects the MutationObservers if they are supported.
                 */
                function connectMutationObservers() {
                    if (_supportMutationObserver && !_mutationObserversConnected) {
                        _mutationObserverHost.observe(_hostElementNative, {
                            attributes: true,
                            attributeOldValue: true,
                            attributeFilter: _mutationObserverAttrsHost
                        });

                        _mutationObserverContent.observe(_isTextarea ? _targetElementNative : _contentElementNative, {
                            attributes: true,
                            attributeOldValue: true,
                            subtree: !_isTextarea,
                            childList: !_isTextarea,
                            characterData: !_isTextarea,
                            attributeFilter: _isTextarea ? _mutationObserverAttrsTextarea : _mutationObserverAttrsHost
                        });

                        _mutationObserversConnected = true;
                    }
                }

                /**
                 * Disconnects the MutationObservers if they are supported.
                 */
                function disconnectMutationObservers() {
                    if (_supportMutationObserver && _mutationObserversConnected) {
                        _mutationObserverHost.disconnect();
                        _mutationObserverContent.disconnect();

                        _mutationObserversConnected = false;
                    }
                }


                //==== Events of elements ====//

                /**
                 * This method gets called every time the host element gets resized. IMPORTANT: Padding changes are detected too!!
                 * It refreshes the hostResizedEventArgs and the hostSizeResizeCache.
                 * If there are any size changes, the update method gets called.
                 */
                function hostOnResized() {
                    if (!_sleeping) {
                        var changed;
                        var hostSize = {
                            w: _sizeObserverElementNative[LEXICON.sW],
                            h: _sizeObserverElementNative[LEXICON.sH]
                        };

                        changed = checkCache(hostSize, _hostElementSizeChangeDetectedCache);
                        _hostElementSizeChangeDetectedCache = hostSize;
                        if (changed)
                            update({ _hostSizeChanged: true });
                    }
                }

                /**
                 * The mouse enter event of the host element. This event is only needed for the autoHide feature.
                 */
                function hostOnMouseEnter() {
                    if (_scrollbarsAutoHideLeave)
                        refreshScrollbarsAutoHide(true);
                }

                /**
                 * The mouse leave event of the host element. This event is only needed for the autoHide feature.
                 */
                function hostOnMouseLeave() {
                    if (_scrollbarsAutoHideLeave && !_bodyElement.hasClass(_classNameDragging))
                        refreshScrollbarsAutoHide(false);
                }

                /**
                 * The mouse move event of the host element. This event is only needed for the autoHide "move" feature.
                 */
                function hostOnMouseMove() {
                    if (_scrollbarsAutoHideMove) {
                        refreshScrollbarsAutoHide(true);
                        clearTimeout(_scrollbarsAutoHideMoveTimeoutId);
                        _scrollbarsAutoHideMoveTimeoutId = setTimeout(function () {
                            if (_scrollbarsAutoHideMove && !_destroyed)
                                refreshScrollbarsAutoHide(false);
                        }, 100);
                    }
                }

                /**
                 * Prevents text from deselection if attached to the document element on the mousedown event of a DOM element.
                 * @param event The select start event.
                 */
                function documentOnSelectStart(event) {
                    COMPATIBILITY.prvD(event);
                    return false;
                }

                /**
                 * A callback which will be called after a img element has downloaded its src asynchronous.
                 */
                function imgOnLoad() {
                    update({ _contentSizeChanged: true });
                }

                /**
                * Adds or removes mouse & touch events of the host element. (for handling auto-hiding of the scrollbars)
                * @param destroy Indicates whether the events shall be added or removed.
                */
                function setupHostMouseTouchEvents(destroy) {
                    setupResponsiveEventListener(_hostElement,
                        _strMouseTouchMoveEvent,
                        hostOnMouseMove,
                        (_scrollbarsAutoHideMove ? destroy : true), true);
                    setupResponsiveEventListener(_hostElement,
                        [_strMouseTouchEnter, _strMouseTouchLeave],
                        [hostOnMouseEnter, hostOnMouseLeave],
                        (_scrollbarsAutoHideMove ? true : destroy), true);

                    //if the plugin is initialized and the mouse is over the host element, make the scrollbars visible
                    if (!_initialized && !destroy)
                        _hostElement.one('mouseover', hostOnMouseEnter);
                }


                //==== Update Detection ====//

                /**
                 * Measures the min width and min height of the body element and refreshes the related cache.
                 * @returns {boolean} True if the min width or min height has changed, false otherwise.
                 */
                function bodyMinSizeChanged() {
                    var bodyMinSize = {};
                    if (_isBody && _contentArrangeElement) {
                        bodyMinSize.w = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strWidth));
                        bodyMinSize.h = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strHeight));
                        bodyMinSize.c = checkCache(bodyMinSize, _bodyMinSizeCache);
                        bodyMinSize.f = true; //flag for "measured at least once"
                    }
                    _bodyMinSizeCache = bodyMinSize;
                    return !!bodyMinSize.c;
                }

                /**
                 * Returns true if the class names really changed (new class without plugin host prefix)
                 * @param oldCassNames The old ClassName string.
                 * @param newClassNames The new ClassName string.
                 * @returns {boolean} True if the class names has really changed, false otherwise.
                 */
                function hostClassNamesChanged(oldCassNames, newClassNames) {
                    var currClasses = (newClassNames !== undefined && newClassNames !== null) ? newClassNames.split(_strSpace) : _strEmpty;
                    var oldClasses = (oldCassNames !== undefined && oldCassNames !== null) ? oldCassNames.split(_strSpace) : _strEmpty;
                    if (currClasses === _strEmpty && oldClasses === _strEmpty)
                        return false;
                    var diff = getArrayDifferences(oldClasses, currClasses);
                    var changed = false;
                    var oldClassNames = _oldClassName !== undefined && _oldClassName !== null ? _oldClassName.split(_strSpace) : [_strEmpty];
                    var currClassNames = _classNameCache !== undefined && _classNameCache !== null ? _classNameCache.split(_strSpace) : [_strEmpty];

                    //remove none theme from diff list to prevent update
                    var idx = inArray(_classNameThemeNone, diff);
                    var curr;
                    var i;
                    var v;
                    var o;
                    var c;

                    if (idx > -1)
                        diff.splice(idx, 1);

                    for (i = 0; i < diff.length; i++) {
                        curr = diff[i];
                        if (curr.indexOf(_classNameHostElement) !== 0) {
                            o = true;
                            c = true;
                            for (v = 0; v < oldClassNames.length; v++) {
                                if (curr === oldClassNames[v]) {
                                    o = false;
                                    break;
                                }
                            }
                            for (v = 0; v < currClassNames.length; v++) {
                                if (curr === currClassNames[v]) {
                                    c = false;
                                    break;
                                }
                            }
                            if (o && c) {
                                changed = true;
                                break;
                            }
                        }

                    }
                    return changed;
                }

                /**
                 * Returns true if the given mutation is not from a from the plugin generated element. If the target element is a textarea the mutation is always unknown.
                 * @param mutation The mutation which shall be checked.
                 * @returns {boolean} True if the mutation is from a unknown element, false otherwise.
                 */
                function isUnknownMutation(mutation) {
                    var attributeName = mutation.attributeName;
                    var mutationTarget = mutation.target;
                    var mutationType = mutation.type;
                    var strClosest = 'closest';

                    if (mutationTarget === _contentElementNative)
                        return attributeName === null;
                    if (mutationType === 'attributes' && (attributeName === LEXICON.c || attributeName === LEXICON.s) && !_isTextarea) {
                        //ignore className changes by the plugin
                        if (attributeName === LEXICON.c && FRAMEWORK(mutationTarget).hasClass(_classNameHostElement))
                            return hostClassNamesChanged(mutation.oldValue, mutationTarget.getAttribute(LEXICON.c));

                        //only do it of browser support it natively
                        if (typeof mutationTarget[strClosest] != TYPES.f)
                            return true;
                        if (mutationTarget[strClosest](_strDot + _classNameResizeObserverElement) !== null ||
                            mutationTarget[strClosest](_strDot + _classNameScrollbar) !== null ||
                            mutationTarget[strClosest](_strDot + _classNameScrollbarCorner) !== null)
                            return false;
                    }
                    return true;
                }

                /**
                 * Returns true if the content size was changed since the last time this method was called.
                 * @returns {boolean} True if the content size was changed, false otherwise.
                 */
                function updateAutoContentSizeChanged() {
                    if (_sleeping)
                        return false;

                    var contentMeasureElement = getContentMeasureElement();
                    var textareaValueLength = _isTextarea && _widthAutoCache && !_textareaAutoWrappingCache ? _targetElement.val().length : 0;
                    var setCSS = !_mutationObserversConnected && _widthAutoCache && !_isTextarea;
                    var viewportScrollSize = {};
                    var css = {};
                    var float;
                    var bodyMinSizeC;
                    var changed;
                    var viewportScrollSizeChanged;
                    var contentElementScrollSize;

                    //fix for https://bugzilla.mozilla.org/show_bug.cgi?id=1439305, it only works with "clipAlways : true"
                    //it can work with "clipAlways : false" too, but I had to set the overflow of the viewportElement to hidden every time before measuring
                    if (_restrictedMeasuring) {
                        viewportScrollSize = {
                            x: _viewportElementNative[LEXICON.sW],
                            y: _viewportElementNative[LEXICON.sH]
                        }
                    }
                    if (setCSS) {
                        float = _contentElement.css(_strFloat);
                        css[_strFloat] = _isRTL ? _strRight : _strLeft;
                        css[_strWidth] = _strAuto;
                        _contentElement.css(css);
                    }
                    contentElementScrollSize = {
                        w: contentMeasureElement[LEXICON.sW] + textareaValueLength,
                        h: contentMeasureElement[LEXICON.sH] + textareaValueLength
                    };
                    if (setCSS) {
                        css[_strFloat] = float;
                        css[_strWidth] = _strHundredPercent;
                        _contentElement.css(css);
                    }

                    bodyMinSizeC = bodyMinSizeChanged();
                    changed = checkCache(contentElementScrollSize, _contentElementScrollSizeChangeDetectedCache);
                    viewportScrollSizeChanged = checkCache(viewportScrollSize, _viewportScrollSizeCache);

                    _contentElementScrollSizeChangeDetectedCache = contentElementScrollSize;
                    _viewportScrollSizeCache = viewportScrollSize;

                    return changed || bodyMinSizeC || viewportScrollSizeChanged;
                }

                /**
                 * Returns true when a attribute which the MutationObserver would observe has changed.  
                 * @returns {boolean} True if one of the attributes which a MutationObserver would observe has changed, false or undefined otherwise.
                 */
                function meaningfulAttrsChanged() {
                    if (_sleeping || _mutationObserversConnected)
                        return;

                    var changed;
                    var elem;
                    var curr;
                    var cache;
                    var checks = [
                        {
                            _elem: _hostElement,
                            _props: _mutationObserverAttrsHost.concat(':visible')
                        },
                        {
                            _elem: _isTextarea ? _targetElement : undefined,
                            _props: _mutationObserverAttrsTextarea
                        }
                    ];

                    each(checks, function (index, check) {
                        elem = check._elem;
                        if (elem) {
                            each(check._props, function (index, prop) {
                                curr = prop.charAt(0) === ':' ? elem.is(prop) : elem.attr(prop);
                                cache = _updateAutoCache[prop];

                                changed = changed || checkCache(curr, cache);

                                _updateAutoCache[prop] = curr;
                            });
                        }
                    });

                    return changed;
                }

                /**
                 * Checks is a CSS Property of a child element is affecting the scroll size of the content.
                 * @param propertyName The CSS property name.
                 * @returns {boolean} True if the property is affecting the content scroll size, false otherwise.
                 */
                function isSizeAffectingCSSProperty(propertyName) {
                    if (!_initialized)
                        return true;
                    var flexGrow = 'flex-grow';
                    var flexShrink = 'flex-shrink';
                    var flexBasis = 'flex-basis';
                    var affectingPropsX = [
                        _strWidth,
                        _strMinMinus + _strWidth,
                        _strMaxMinus + _strWidth,
                        _strMarginMinus + _strLeft,
                        _strMarginMinus + _strRight,
                        _strLeft,
                        _strRight,
                        'font-weight',
                        'word-spacing',
                        flexGrow,
                        flexShrink,
                        flexBasis
                    ];
                    var affectingPropsXContentBox = [
                        _strPaddingMinus + _strLeft,
                        _strPaddingMinus + _strRight,
                        _strBorderMinus + _strLeft + _strWidth,
                        _strBorderMinus + _strRight + _strWidth
                    ];
                    var affectingPropsY = [
                        _strHeight,
                        _strMinMinus + _strHeight,
                        _strMaxMinus + _strHeight,
                        _strMarginMinus + _strTop,
                        _strMarginMinus + _strBottom,
                        _strTop,
                        _strBottom,
                        'line-height',
                        flexGrow,
                        flexShrink,
                        flexBasis
                    ];
                    var affectingPropsYContentBox = [
                        _strPaddingMinus + _strTop,
                        _strPaddingMinus + _strBottom,
                        _strBorderMinus + _strTop + _strWidth,
                        _strBorderMinus + _strBottom + _strWidth
                    ];
                    var _strS = 's';
                    var _strVS = 'v-s';
                    var checkX = _overflowBehaviorCache.x === _strS || _overflowBehaviorCache.x === _strVS;
                    var checkY = _overflowBehaviorCache.y === _strS || _overflowBehaviorCache.y === _strVS;
                    var sizeIsAffected = false;
                    var checkPropertyName = function (arr, name) {
                        for (var i = 0; i < arr[LEXICON.l]; i++) {
                            if (arr[i] === name)
                                return true;
                        }
                        return false;
                    };

                    if (checkY) {
                        sizeIsAffected = checkPropertyName(affectingPropsY, propertyName);
                        if (!sizeIsAffected && !_isBorderBox)
                            sizeIsAffected = checkPropertyName(affectingPropsYContentBox, propertyName);
                    }
                    if (checkX && !sizeIsAffected) {
                        sizeIsAffected = checkPropertyName(affectingPropsX, propertyName);
                        if (!sizeIsAffected && !_isBorderBox)
                            sizeIsAffected = checkPropertyName(affectingPropsXContentBox, propertyName);
                    }
                    return sizeIsAffected;
                }


                //==== Update ====//

                /**
                 * Updates the variables and size of the textarea element, and manages the scroll on new line or new character.
                 */
                function textareaUpdate() {
                    if (!_sleeping) {
                        var wrapAttrOff = !_textareaAutoWrappingCache;
                        var minWidth = _viewportSize.w;
                        var minHeight = _viewportSize.h;
                        var css = {};
                        var doMeasure = _widthAutoCache || wrapAttrOff;
                        var origWidth;
                        var width;
                        var origHeight;
                        var height;

                        //reset min size
                        css[_strMinMinus + _strWidth] = _strEmpty;
                        css[_strMinMinus + _strHeight] = _strEmpty;

                        //set width auto
                        css[_strWidth] = _strAuto;
                        _targetElement.css(css);

                        //measure width
                        origWidth = _targetElementNative[LEXICON.oW];
                        width = doMeasure ? MATH.max(origWidth, _targetElementNative[LEXICON.sW] - 1) : 1;
                        /*width += (_widthAutoCache ? _marginX + (!_isBorderBox ? wrapAttrOff ? 0 : _paddingX + _borderX : 0) : 0);*/

                        //set measured width
                        css[_strWidth] = _widthAutoCache ? _strAuto /*width*/ : _strHundredPercent;
                        css[_strMinMinus + _strWidth] = _strHundredPercent;

                        //set height auto
                        css[_strHeight] = _strAuto;
                        _targetElement.css(css);

                        //measure height
                        origHeight = _targetElementNative[LEXICON.oH];
                        height = MATH.max(origHeight, _targetElementNative[LEXICON.sH] - 1);

                        //append correct size values
                        css[_strWidth] = width;
                        css[_strHeight] = height;
                        _textareaCoverElement.css(css);

                        //apply min width / min height to prevent textarea collapsing
                        css[_strMinMinus + _strWidth] = minWidth /*+ (!_isBorderBox && _widthAutoCache ? _paddingX + _borderX : 0)*/;
                        css[_strMinMinus + _strHeight] = minHeight /*+ (!_isBorderBox && _heightAutoCache ? _paddingY + _borderY : 0)*/;
                        _targetElement.css(css);

                        return {
                            _originalWidth: origWidth,
                            _originalHeight: origHeight,
                            _dynamicWidth: width,
                            _dynamicHeight: height
                        };
                    }
                }

                /**
                 * Updates the plugin and DOM to the current options.
                 * This method should only be called if a update is 100% required.
                 * @param updateHints A objects which contains hints for this update:
                 * {
                 *   _hostSizeChanged : boolean,
                 *   _contentSizeChanged : boolean,
                 *   _force : boolean,                             == preventSwallowing
                 *   _changedOptions : { },                        == preventSwallowing && preventSleep
                *  }
                 */
                function update(updateHints) {
                    clearTimeout(_swallowedUpdateTimeout);
                    updateHints = updateHints || {};
                    _swallowedUpdateHints._hostSizeChanged |= updateHints._hostSizeChanged;
                    _swallowedUpdateHints._contentSizeChanged |= updateHints._contentSizeChanged;
                    _swallowedUpdateHints._force |= updateHints._force;

                    var now = COMPATIBILITY.now();
                    var hostSizeChanged = !!_swallowedUpdateHints._hostSizeChanged;
                    var contentSizeChanged = !!_swallowedUpdateHints._contentSizeChanged;
                    var force = !!_swallowedUpdateHints._force;
                    var changedOptions = updateHints._changedOptions;
                    var swallow = _swallowUpdateLag > 0 && _initialized && !_destroyed && !force && !changedOptions && (now - _lastUpdateTime) < _swallowUpdateLag && (!_heightAutoCache && !_widthAutoCache);
                    var displayIsHidden;

                    if (swallow)
                        _swallowedUpdateTimeout = setTimeout(update, _swallowUpdateLag);

                    //abort update due to:
                    //destroyed
                    //swallowing
                    //sleeping
                    //host is hidden or has false display
                    if (_destroyed || swallow || (_sleeping && !changedOptions) || (_initialized && !force && (displayIsHidden = _hostElement.is(':hidden'))) || _hostElement.css('display') === 'inline')
                        return;

                    _lastUpdateTime = now;
                    _swallowedUpdateHints = {};

                    //if scrollbar styling is possible and native scrollbars aren't overlaid the scrollbar styling will be applied which hides the native scrollbars completely.
                    if (_nativeScrollbarStyling && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
                        //native scrollbars are hidden, so change the values to zero
                        _nativeScrollbarSize.x = 0;
                        _nativeScrollbarSize.y = 0;
                    }
                    else {
                        //refresh native scrollbar size (in case of zoom)
                        _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
                    }

                    // Scrollbar padding is needed for firefox, because firefox hides scrollbar automatically if the size of the div is too small.
                    // The calculation: [scrollbar size +3 *3]
                    // (+3 because of possible decoration e.g. borders, margins etc., but only if native scrollbar is NOT a overlaid scrollbar)
                    // (*3 because (1)increase / (2)decrease -button and (3)resize handle)
                    _nativeScrollbarMinSize = {
                        x: (_nativeScrollbarSize.x + (_nativeScrollbarIsOverlaid.x ? 0 : 3)) * 3,
                        y: (_nativeScrollbarSize.y + (_nativeScrollbarIsOverlaid.y ? 0 : 3)) * 3
                    };

                    //changedOptions = changedOptions || { };
                    //freezeResizeObserver(_sizeObserverElement, true);
                    //freezeResizeObserver(_sizeAutoObserverElement, true);

                    var checkCacheAutoForce = function () {
                        return checkCache.apply(this, [].slice.call(arguments).concat([force]));
                    };

                    //save current scroll offset
                    var currScroll = {
                        x: _viewportElement[_strScrollLeft](),
                        y: _viewportElement[_strScrollTop]()
                    };

                    var currentPreparedOptionsScrollbars = _currentPreparedOptions.scrollbars;
                    var currentPreparedOptionsTextarea = _currentPreparedOptions.textarea;

                    //scrollbars visibility:
                    var scrollbarsVisibility = currentPreparedOptionsScrollbars.visibility;
                    var scrollbarsVisibilityChanged = checkCacheAutoForce(scrollbarsVisibility, _scrollbarsVisibilityCache);

                    //scrollbars autoHide:
                    var scrollbarsAutoHide = currentPreparedOptionsScrollbars.autoHide;
                    var scrollbarsAutoHideChanged = checkCacheAutoForce(scrollbarsAutoHide, _scrollbarsAutoHideCache);

                    //scrollbars click scrolling
                    var scrollbarsClickScrolling = currentPreparedOptionsScrollbars.clickScrolling;
                    var scrollbarsClickScrollingChanged = checkCacheAutoForce(scrollbarsClickScrolling, _scrollbarsClickScrollingCache);

                    //scrollbars drag scrolling
                    var scrollbarsDragScrolling = currentPreparedOptionsScrollbars.dragScrolling;
                    var scrollbarsDragScrollingChanged = checkCacheAutoForce(scrollbarsDragScrolling, _scrollbarsDragScrollingCache);

                    //className
                    var className = _currentPreparedOptions.className;
                    var classNameChanged = checkCacheAutoForce(className, _classNameCache);

                    //resize
                    var resize = _currentPreparedOptions.resize;
                    var resizeChanged = checkCacheAutoForce(resize, _resizeCache) && !_isBody; //body can't be resized since the window itself acts as resize possibility.

                    //paddingAbsolute
                    var paddingAbsolute = _currentPreparedOptions.paddingAbsolute;
                    var paddingAbsoluteChanged = checkCacheAutoForce(paddingAbsolute, _paddingAbsoluteCache);

                    //clipAlways
                    var clipAlways = _currentPreparedOptions.clipAlways;
                    var clipAlwaysChanged = checkCacheAutoForce(clipAlways, _clipAlwaysCache);

                    //sizeAutoCapable
                    var sizeAutoCapable = _currentPreparedOptions.sizeAutoCapable && !_isBody; //body can never be size auto, because it shall be always as big as the viewport.
                    var sizeAutoCapableChanged = checkCacheAutoForce(sizeAutoCapable, _sizeAutoCapableCache);

                    //showNativeScrollbars
                    var ignoreOverlayScrollbarHiding = _currentPreparedOptions.nativeScrollbarsOverlaid.showNativeScrollbars;
                    var ignoreOverlayScrollbarHidingChanged = checkCacheAutoForce(ignoreOverlayScrollbarHiding, _ignoreOverlayScrollbarHidingCache);

                    //autoUpdate
                    var autoUpdate = _currentPreparedOptions.autoUpdate;
                    var autoUpdateChanged = checkCacheAutoForce(autoUpdate, _autoUpdateCache);

                    //overflowBehavior
                    var overflowBehavior = _currentPreparedOptions.overflowBehavior;
                    var overflowBehaviorChanged = checkCacheAutoForce(overflowBehavior, _overflowBehaviorCache, force);

                    //dynWidth:
                    var textareaDynWidth = currentPreparedOptionsTextarea.dynWidth;
                    var textareaDynWidthChanged = checkCacheAutoForce(_textareaDynWidthCache, textareaDynWidth);

                    //dynHeight:
                    var textareaDynHeight = currentPreparedOptionsTextarea.dynHeight;
                    var textareaDynHeightChanged = checkCacheAutoForce(_textareaDynHeightCache, textareaDynHeight);

                    //scrollbars visibility
                    _scrollbarsAutoHideNever = scrollbarsAutoHide === 'n';
                    _scrollbarsAutoHideScroll = scrollbarsAutoHide === 's';
                    _scrollbarsAutoHideMove = scrollbarsAutoHide === 'm';
                    _scrollbarsAutoHideLeave = scrollbarsAutoHide === 'l';

                    //scrollbars autoHideDelay
                    _scrollbarsAutoHideDelay = currentPreparedOptionsScrollbars.autoHideDelay;

                    //old className
                    _oldClassName = _classNameCache;

                    //resize
                    _resizeNone = resize === 'n';
                    _resizeBoth = resize === 'b';
                    _resizeHorizontal = resize === 'h';
                    _resizeVertical = resize === 'v';

                    //normalizeRTL
                    _normalizeRTLCache = _currentPreparedOptions.normalizeRTL;

                    //ignore overlay scrollbar hiding
                    ignoreOverlayScrollbarHiding = ignoreOverlayScrollbarHiding && (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y);

                    //refresh options cache
                    _scrollbarsVisibilityCache = scrollbarsVisibility;
                    _scrollbarsAutoHideCache = scrollbarsAutoHide;
                    _scrollbarsClickScrollingCache = scrollbarsClickScrolling;
                    _scrollbarsDragScrollingCache = scrollbarsDragScrolling;
                    _classNameCache = className;
                    _resizeCache = resize;
                    _paddingAbsoluteCache = paddingAbsolute;
                    _clipAlwaysCache = clipAlways;
                    _sizeAutoCapableCache = sizeAutoCapable;
                    _ignoreOverlayScrollbarHidingCache = ignoreOverlayScrollbarHiding;
                    _autoUpdateCache = autoUpdate;
                    _overflowBehaviorCache = extendDeep({}, overflowBehavior);
                    _textareaDynWidthCache = textareaDynWidth;
                    _textareaDynHeightCache = textareaDynHeight;
                    _hasOverflowCache = _hasOverflowCache || { x: false, y: false };

                    //set correct class name to the host element
                    if (classNameChanged) {
                        removeClass(_hostElement, _oldClassName + _strSpace + _classNameThemeNone);
                        addClass(_hostElement, className !== undefined && className !== null && className.length > 0 ? className : _classNameThemeNone);
                    }

                    //set correct auto Update
                    if (autoUpdateChanged) {
                        if (autoUpdate === true) {
                            disconnectMutationObservers();
                            autoUpdateLoop.add(_base);
                        }
                        else if (autoUpdate === null) {
                            if (_autoUpdateRecommended) {
                                disconnectMutationObservers();
                                autoUpdateLoop.add(_base);
                            }
                            else {
                                autoUpdateLoop.remove(_base);
                                connectMutationObservers();
                            }
                        }
                        else {
                            autoUpdateLoop.remove(_base);
                            connectMutationObservers();
                        }
                    }

                    //activate or deactivate size auto capability
                    if (sizeAutoCapableChanged) {
                        if (sizeAutoCapable) {
                            if (!_contentGlueElement) {
                                _contentGlueElement = FRAMEWORK(generateDiv(_classNameContentGlueElement));
                                _paddingElement.before(_contentGlueElement);
                            }
                            else {
                                _contentGlueElement.show();
                            }
                            if (_sizeAutoObserverAdded) {
                                _sizeAutoObserverElement.show();
                            }
                            else {
                                _sizeAutoObserverElement = FRAMEWORK(generateDiv(_classNameSizeAutoObserverElement));
                                _sizeAutoObserverElementNative = _sizeAutoObserverElement[0];

                                _contentGlueElement.before(_sizeAutoObserverElement);
                                var oldSize = { w: -1, h: -1 };
                                setupResizeObserver(_sizeAutoObserverElement, function () {
                                    var newSize = {
                                        w: _sizeAutoObserverElementNative[LEXICON.oW],
                                        h: _sizeAutoObserverElementNative[LEXICON.oH]
                                    };
                                    if (checkCache(newSize, oldSize)) {
                                        if (_initialized && (_heightAutoCache && newSize.h > 0) || (_widthAutoCache && newSize.w > 0)) {
                                            update();
                                        }
                                        else if (_initialized && (!_heightAutoCache && newSize.h === 0) || (!_widthAutoCache && newSize.w === 0)) {
                                            update();
                                        }
                                    }
                                    oldSize = newSize;
                                });
                                _sizeAutoObserverAdded = true;
                                //fix heightAuto detector bug if height is fixed but contentHeight is 0.
                                //the probability this bug will ever happen is very very low, thats why its ok if we use calc which isn't supported in IE8.
                                if (_cssCalc !== null)
                                    _sizeAutoObserverElement.css(_strHeight, _cssCalc + '(100% + 1px)');
                            }
                        }
                        else {
                            if (_sizeAutoObserverAdded)
                                _sizeAutoObserverElement.hide();
                            if (_contentGlueElement)
                                _contentGlueElement.hide();
                        }
                    }

                    //if force, update all resizeObservers too
                    if (force) {
                        _sizeObserverElement.find('*').trigger(_strScroll);
                        if (_sizeAutoObserverAdded)
                            _sizeAutoObserverElement.find('*').trigger(_strScroll);
                    }

                    //display hidden:
                    displayIsHidden = displayIsHidden === undefined ? _hostElement.is(':hidden') : displayIsHidden;
                    var displayIsHiddenChanged = checkCacheAutoForce(displayIsHidden, _displayIsHiddenCache);

                    //textarea AutoWrapping:
                    var textareaAutoWrapping = _isTextarea ? _targetElement.attr('wrap') !== 'off' : false;
                    var textareaAutoWrappingChanged = checkCacheAutoForce(textareaAutoWrapping, _textareaAutoWrappingCache);

                    //detect direction:
                    var cssDirection = _hostElement.css('direction');
                    var cssDirectionChanged = checkCacheAutoForce(cssDirection, _cssDirectionCache);

                    //detect box-sizing:
                    var boxSizing = _hostElement.css('box-sizing');
                    var boxSizingChanged = checkCacheAutoForce(boxSizing, _cssBoxSizingCache);

                    //detect padding:
                    var padding = {
                        c: force,
                        t: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strTop)),
                        r: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strRight)),
                        b: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strBottom)),
                        l: parseToZeroOrNumber(_hostElement.css(_strPaddingMinus + _strLeft))
                    };

                    //width + height auto detecting var:
                    var sizeAutoObserverElementBCRect;
                    //exception occurs in IE8 sometimes (unknown exception)
                    try {
                        sizeAutoObserverElementBCRect = _sizeAutoObserverAdded ? _sizeAutoObserverElementNative[LEXICON.bCR]() : null;
                    } catch (ex) {
                        return;
                    }

                    _isRTL = cssDirection === 'rtl';
                    _isBorderBox = (boxSizing === 'border-box');
                    var isRTLLeft = _isRTL ? _strLeft : _strRight;
                    var isRTLRight = _isRTL ? _strRight : _strLeft;

                    //detect width auto:
                    var widthAutoResizeDetection = false;
                    var widthAutoObserverDetection = (_sizeAutoObserverAdded && (_hostElement.css(_strFloat) !== 'none' /*|| _isTextarea */)) ? (MATH.round(sizeAutoObserverElementBCRect.right - sizeAutoObserverElementBCRect.left) === 0) && (!paddingAbsolute ? (_hostElementNative[LEXICON.cW] - _paddingX) > 0 : true) : false;
                    if (sizeAutoCapable && !widthAutoObserverDetection) {
                        var tmpCurrHostWidth = _hostElementNative[LEXICON.oW];
                        var tmpCurrContentGlueWidth = _contentGlueElement.css(_strWidth);
                        _contentGlueElement.css(_strWidth, _strAuto);

                        var tmpNewHostWidth = _hostElementNative[LEXICON.oW];
                        _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);
                        widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;
                        if (!widthAutoResizeDetection) {
                            _contentGlueElement.css(_strWidth, tmpCurrHostWidth + 1);
                            tmpNewHostWidth = _hostElementNative[LEXICON.oW];
                            _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth);
                            widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth;
                        }
                    }
                    var widthAuto = (widthAutoObserverDetection || widthAutoResizeDetection) && sizeAutoCapable && !displayIsHidden;
                    var widthAutoChanged = checkCacheAutoForce(widthAuto, _widthAutoCache);
                    var wasWidthAuto = !widthAuto && _widthAutoCache;

                    //detect height auto:
                    var heightAuto = _sizeAutoObserverAdded && sizeAutoCapable && !displayIsHidden ? (MATH.round(sizeAutoObserverElementBCRect.bottom - sizeAutoObserverElementBCRect.top) === 0) /* && (!paddingAbsolute && (_msieVersion > 9 || !_msieVersion) ? true : true) */ : false;
                    var heightAutoChanged = checkCacheAutoForce(heightAuto, _heightAutoCache);
                    var wasHeightAuto = !heightAuto && _heightAutoCache;

                    //detect border:
                    //we need the border only if border box and auto size
                    var strMinusWidth = '-' + _strWidth;
                    var updateBorderX = (widthAuto && _isBorderBox) || !_isBorderBox;
                    var updateBorderY = (heightAuto && _isBorderBox) || !_isBorderBox;
                    var border = {
                        c: force,
                        t: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strTop + strMinusWidth), true) : 0,
                        r: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strRight + strMinusWidth), true) : 0,
                        b: updateBorderY ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strBottom + strMinusWidth), true) : 0,
                        l: updateBorderX ? parseToZeroOrNumber(_hostElement.css(_strBorderMinus + _strLeft + strMinusWidth), true) : 0
                    };

                    //detect margin:
                    var margin = {
                        c: force,
                        t: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strTop)),
                        r: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strRight)),
                        b: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strBottom)),
                        l: parseToZeroOrNumber(_hostElement.css(_strMarginMinus + _strLeft))
                    };

                    //detect css max width & height:
                    var cssMaxValue = {
                        h: String(_hostElement.css(_strMaxMinus + _strHeight)),
                        w: String(_hostElement.css(_strMaxMinus + _strWidth))
                    };

                    //vars to apply correct css
                    var contentElementCSS = {};
                    var contentGlueElementCSS = {};

                    //funcs
                    var getHostSize = function () {
                        //has to be clientSize because offsetSize respect borders
                        return {
                            w: _hostElementNative[LEXICON.cW],
                            h: _hostElementNative[LEXICON.cH]
                        };
                    };
                    var getViewportSize = function () {
                        //viewport size is padding container because it never has padding, margin and a border
                        //determine zoom rounding error -> sometimes scrollWidth/Height is smaller than clientWidth/Height
                        //if this happens add the difference to the viewportSize to compensate the rounding error
                        return {
                            w: _paddingElementNative[LEXICON.oW] + MATH.max(0, _contentElementNative[LEXICON.cW] - _contentElementNative[LEXICON.sW]),
                            h: _paddingElementNative[LEXICON.oH] + MATH.max(0, _contentElementNative[LEXICON.cH] - _contentElementNative[LEXICON.sH])
                        };
                    };

                    //set info for padding
                    var paddingAbsoluteX = _paddingX = padding.l + padding.r;
                    var paddingAbsoluteY = _paddingY = padding.t + padding.b;
                    paddingAbsoluteX *= paddingAbsolute ? 1 : 0;
                    paddingAbsoluteY *= paddingAbsolute ? 1 : 0;
                    padding.c = checkCacheAutoForce(padding, _cssPaddingCache);

                    //set info for border
                    _borderX = border.l + border.r;
                    _borderY = border.t + border.b;
                    border.c = checkCacheAutoForce(border, _cssBorderCache);

                    //set info for margin
                    _marginX = margin.l + margin.r;
                    _marginY = margin.t + margin.b;
                    margin.c = checkCacheAutoForce(margin, _cssMarginCache);

                    //set info for css max value
                    cssMaxValue.ih = parseToZeroOrNumber(cssMaxValue.h); //ih = integer height
                    cssMaxValue.iw = parseToZeroOrNumber(cssMaxValue.w); //iw = integer width
                    cssMaxValue.ch = cssMaxValue.h.indexOf('px') > -1; //ch = correct height
                    cssMaxValue.cw = cssMaxValue.w.indexOf('px') > -1; //cw = correct width
                    cssMaxValue.c = checkCacheAutoForce(cssMaxValue, _cssMaxValueCache);

                    //refresh cache
                    _displayIsHiddenCache = displayIsHidden;
                    _textareaAutoWrappingCache = textareaAutoWrapping;
                    _cssDirectionCache = cssDirection;
                    _cssBoxSizingCache = boxSizing;
                    _widthAutoCache = widthAuto;
                    _heightAutoCache = heightAuto;
                    _cssPaddingCache = padding;
                    _cssBorderCache = border;
                    _cssMarginCache = margin;
                    _cssMaxValueCache = cssMaxValue;

                    //IEFix direction changed
                    if (cssDirectionChanged && _sizeAutoObserverAdded)
                        _sizeAutoObserverElement.css(_strFloat, isRTLRight);

                    //apply padding:
                    if (padding.c || cssDirectionChanged || paddingAbsoluteChanged || widthAutoChanged || heightAutoChanged || boxSizingChanged || sizeAutoCapableChanged) {
                        var paddingElementCSS = {};
                        var textareaCSS = {};
                        setTopRightBottomLeft(contentGlueElementCSS, _strMarginMinus, [-padding.t, -padding.r, -padding.b, -padding.l]);
                        if (paddingAbsolute) {
                            setTopRightBottomLeft(paddingElementCSS, _strEmpty, [padding.t, padding.r, padding.b, padding.l]);
                            if (_isTextarea)
                                setTopRightBottomLeft(textareaCSS, _strPaddingMinus);
                            else
                                setTopRightBottomLeft(contentElementCSS, _strPaddingMinus);
                        }
                        else {
                            setTopRightBottomLeft(paddingElementCSS, _strEmpty);
                            if (_isTextarea)
                                setTopRightBottomLeft(textareaCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);
                            else
                                setTopRightBottomLeft(contentElementCSS, _strPaddingMinus, [padding.t, padding.r, padding.b, padding.l]);
                        }
                        _paddingElement.css(paddingElementCSS);
                        _targetElement.css(textareaCSS);
                    }

                    //viewport size is padding container because it never has padding, margin and a border.
                    _viewportSize = getViewportSize();

                    //update Textarea
                    var textareaSize = _isTextarea ? textareaUpdate() : false;
                    var textareaSizeChanged = _isTextarea && checkCacheAutoForce(textareaSize, _textareaSizeCache);
                    var textareaDynOrigSize = _isTextarea && textareaSize ? {
                        w: textareaDynWidth ? textareaSize._dynamicWidth : textareaSize._originalWidth,
                        h: textareaDynHeight ? textareaSize._dynamicHeight : textareaSize._originalHeight
                    } : {};
                    _textareaSizeCache = textareaSize;

                    //fix height auto / width auto in cooperation with current padding & boxSizing behavior:
                    if (heightAuto && (heightAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c)) {
                        /*
                        if (cssMaxValue.ch)
                            contentElementCSS[_strMaxMinus + _strHeight] =
                                (cssMaxValue.ch ? (cssMaxValue.ih - paddingAbsoluteY + (_isBorderBox ? -_borderY : _paddingY))
                                : _strEmpty);
                        */
                        contentElementCSS[_strHeight] = _strAuto;
                    }
                    else if (heightAutoChanged || paddingAbsoluteChanged) {
                        contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty;
                        contentElementCSS[_strHeight] = _strHundredPercent;
                    }
                    if (widthAuto && (widthAutoChanged || paddingAbsoluteChanged || boxSizingChanged || cssMaxValue.c || padding.c || border.c || cssDirectionChanged)) {
                        /*
                        if (cssMaxValue.cw)
                            contentElementCSS[_strMaxMinus + _strWidth] =
                                (cssMaxValue.cw ? (cssMaxValue.iw - paddingAbsoluteX + (_isBorderBox ? -_borderX : _paddingX)) +
                                (_nativeScrollbarIsOverlaid.y ? _overlayScrollbarDummySize.y : 0)
                                : _strEmpty);
                        */
                        contentElementCSS[_strWidth] = _strAuto;
                        contentGlueElementCSS[_strMaxMinus + _strWidth] = _strHundredPercent; //IE Fix
                    }
                    else if (widthAutoChanged || paddingAbsoluteChanged) {
                        contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty;
                        contentElementCSS[_strWidth] = _strHundredPercent;
                        contentElementCSS[_strFloat] = _strEmpty;
                        contentGlueElementCSS[_strMaxMinus + _strWidth] = _strEmpty; //IE Fix
                    }
                    if (widthAuto) {
                        if (!cssMaxValue.cw)
                            contentElementCSS[_strMaxMinus + _strWidth] = _strEmpty;
                        //textareaDynOrigSize.w || _strAuto :: doesnt works because applied margin will shift width
                        contentGlueElementCSS[_strWidth] = _strAuto;

                        contentElementCSS[_strWidth] = _strAuto;
                        contentElementCSS[_strFloat] = isRTLRight;
                    }
                    else {
                        contentGlueElementCSS[_strWidth] = _strEmpty;
                    }
                    if (heightAuto) {
                        if (!cssMaxValue.ch)
                            contentElementCSS[_strMaxMinus + _strHeight] = _strEmpty;
                        //textareaDynOrigSize.h || _contentElementNative[LEXICON.cH] :: use for anti scroll jumping
                        contentGlueElementCSS[_strHeight] = textareaDynOrigSize.h || _contentElementNative[LEXICON.cH];
                    }
                    else {
                        contentGlueElementCSS[_strHeight] = _strEmpty;
                    }
                    if (sizeAutoCapable)
                        _contentGlueElement.css(contentGlueElementCSS);
                    _contentElement.css(contentElementCSS);

                    //CHECKPOINT HERE ~
                    contentElementCSS = {};
                    contentGlueElementCSS = {};

                    //if [content(host) client / scroll size, or target element direction, or content(host) max-sizes] changed, or force is true
                    if (hostSizeChanged || contentSizeChanged || textareaSizeChanged || cssDirectionChanged || boxSizingChanged || paddingAbsoluteChanged || widthAutoChanged || widthAuto || heightAutoChanged || heightAuto || cssMaxValue.c || ignoreOverlayScrollbarHidingChanged || overflowBehaviorChanged || clipAlwaysChanged || resizeChanged || scrollbarsVisibilityChanged || scrollbarsAutoHideChanged || scrollbarsDragScrollingChanged || scrollbarsClickScrollingChanged || textareaDynWidthChanged || textareaDynHeightChanged || textareaAutoWrappingChanged) {
                        var strOverflow = 'overflow';
                        var strOverflowX = strOverflow + '-x';
                        var strOverflowY = strOverflow + '-y';
                        var strHidden = 'hidden';
                        var strVisible = 'visible';
                        //decide whether the content overflow must get hidden for correct overflow measuring, it !MUST! be always hidden if the height is auto
                        var hideOverflow4CorrectMeasuring = _restrictedMeasuring ?
                            (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) || //it must be hidden if native scrollbars are overlaid
                            (_viewportSize.w < _nativeScrollbarMinSize.y || _viewportSize.h < _nativeScrollbarMinSize.x) || //it must be hidden if host-element is too small
                            heightAuto || displayIsHiddenChanged //it must be hidden if height is auto or display was changed
                            : heightAuto; //if there is not the restricted Measuring bug, it must be hidden if the height is auto

                        //Reset the viewport (very important for natively overlaid scrollbars and zoom change
                        //don't change the overflow prop as it is very expensive and affects performance !A LOT!
                        var viewportElementResetCSS = {};
                        var resetXTmp = _hasOverflowCache.y && _hideOverflowCache.ys && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? (_nativeScrollbarIsOverlaid.y ? _viewportElement.css(isRTLLeft) : -_nativeScrollbarSize.y) : 0;
                        var resetBottomTmp = _hasOverflowCache.x && _hideOverflowCache.xs && !ignoreOverlayScrollbarHiding && !_nativeScrollbarStyling ? (_nativeScrollbarIsOverlaid.x ? _viewportElement.css(_strBottom) : -_nativeScrollbarSize.x) : 0;
                        setTopRightBottomLeft(viewportElementResetCSS, _strEmpty);
                        _viewportElement.css(viewportElementResetCSS);
                        if (hideOverflow4CorrectMeasuring)
                            _contentElement.css(strOverflow, strHidden);

                        //measure several sizes:
                        var contentMeasureElement = getContentMeasureElement();
                        //in Firefox content element has to have overflow hidden, else element margins aren't calculated properly, this element prevents this bug, but only if scrollbars aren't overlaid
                        var contentMeasureElementGuaranty = _restrictedMeasuring && !hideOverflow4CorrectMeasuring ? _viewportElementNative : contentMeasureElement;
                        var contentSize = {
                            //use clientSize because natively overlaidScrollbars add borders
                            w: textareaDynOrigSize.w || contentMeasureElement[LEXICON.cW],
                            h: textareaDynOrigSize.h || contentMeasureElement[LEXICON.cH]
                        };
                        var scrollSize = {
                            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
                            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
                        };

                        //apply the correct viewport style and measure viewport size
                        viewportElementResetCSS[_strBottom] = wasHeightAuto ? _strEmpty : resetBottomTmp;
                        viewportElementResetCSS[isRTLLeft] = wasWidthAuto ? _strEmpty : resetXTmp;
                        _viewportElement.css(viewportElementResetCSS);
                        _viewportSize = getViewportSize();

                        //measure and correct several sizes
                        var hostSize = getHostSize();
                        var contentGlueSize = {
                            //client/scrollSize + AbsolutePadding -> because padding is only applied to the paddingElement if its absolute, so you have to add it manually
                            //hostSize is clientSize -> so padding should be added manually, right? FALSE! Because content glue is inside hostElement, so we don't have to worry about padding
                            w: MATH.max((widthAuto ? contentSize.w : scrollSize.w) + paddingAbsoluteX, hostSize.w),
                            h: MATH.max((heightAuto ? contentSize.h : scrollSize.h) + paddingAbsoluteY, hostSize.h)
                        };
                        contentGlueSize.c = checkCacheAutoForce(contentGlueSize, _contentGlueSizeCache);
                        _contentGlueSizeCache = contentGlueSize;

                        //apply correct contentGlue size
                        if (sizeAutoCapable) {
                            //size contentGlue correctly to make sure the element has correct size if the sizing switches to auto
                            if (contentGlueSize.c || (heightAuto || widthAuto)) {
                                contentGlueElementCSS[_strWidth] = contentGlueSize.w;
                                contentGlueElementCSS[_strHeight] = contentGlueSize.h;

                                //textarea-sizes are already calculated correctly at this point
                                if (!_isTextarea) {
                                    contentSize = {
                                        //use clientSize because natively overlaidScrollbars add borders
                                        w: contentMeasureElement[LEXICON.cW],
                                        h: contentMeasureElement[LEXICON.cH]
                                    };
                                }
                            }
                            var textareaCoverCSS = {};
                            var setContentGlueElementCSSfunction = function (horizontal) {
                                var scrollbarVars = getScrollbarVars(horizontal);
                                var wh = scrollbarVars._w_h;
                                var strWH = scrollbarVars._width_height;
                                var autoSize = horizontal ? widthAuto : heightAuto;
                                var borderSize = horizontal ? _borderX : _borderY;
                                var paddingSize = horizontal ? _paddingX : _paddingY;
                                var marginSize = horizontal ? _marginX : _marginY;
                                var maxSize = contentGlueElementCSS[strWH] + (_isBorderBox ? borderSize : -paddingSize);

                                //make contentGlue size -1 if element is not auto sized, to make sure that a resize event happens when the element shrinks
                                if (!autoSize || (!autoSize && border.c))
                                    contentGlueElementCSS[strWH] = hostSize[wh] - (_isBorderBox ? 0 : paddingSize + borderSize) - 1 - marginSize;

                                //if size is auto and host is same size as max size, make content glue size +1 to make sure size changes will be detected
                                if (autoSize && cssMaxValue['c' + wh] && cssMaxValue['i' + wh] === maxSize)
                                    contentGlueElementCSS[strWH] = maxSize + (_isBorderBox ? 0 : paddingSize) + 1;

                                //if size is auto and host is smaller than size as min size, make content glue size -1 to make sure size changes will be detected (this is only needed if padding is 0)
                                if (autoSize && (contentSize[wh] < _viewportSize[wh]) && (horizontal && _isTextarea ? !textareaAutoWrapping : true)) {
                                    if (_isTextarea)
                                        textareaCoverCSS[strWH] = parseToZeroOrNumber(_textareaCoverElement.css(strWH)) - 1;
                                    contentGlueElementCSS[strWH] -= 1;
                                }

                                //make sure content glue size is at least 1
                                if (contentSize[wh] > 0)
                                    contentGlueElementCSS[strWH] = MATH.max(1, contentGlueElementCSS[strWH]);
                            };
                            setContentGlueElementCSSfunction(true);
                            setContentGlueElementCSSfunction(false);

                            if (_isTextarea)
                                _textareaCoverElement.css(textareaCoverCSS);
                            _contentGlueElement.css(contentGlueElementCSS);
                        }
                        if (widthAuto)
                            contentElementCSS[_strWidth] = _strHundredPercent;
                        if (widthAuto && !_isBorderBox && !_mutationObserversConnected)
                            contentElementCSS[_strFloat] = 'none';

                        //apply and reset content style
                        _contentElement.css(contentElementCSS);
                        contentElementCSS = {};

                        //measure again, but this time all correct sizes:
                        var contentScrollSize = {
                            w: MATH.max(contentMeasureElement[LEXICON.sW], contentMeasureElementGuaranty[LEXICON.sW]),
                            h: MATH.max(contentMeasureElement[LEXICON.sH], contentMeasureElementGuaranty[LEXICON.sH])
                        };
                        contentScrollSize.c = contentSizeChanged = checkCacheAutoForce(contentScrollSize, _contentScrollSizeCache);
                        _contentScrollSizeCache = contentScrollSize;

                        //remove overflow hidden to restore overflow
                        if (hideOverflow4CorrectMeasuring)
                            _contentElement.css(strOverflow, _strEmpty);

                        //refresh viewport size after correct measuring
                        _viewportSize = getViewportSize();

                        hostSize = getHostSize();
                        hostSizeChanged = checkCacheAutoForce(hostSize, _hostSizeCache);
                        _hostSizeCache = hostSize;

                        var hideOverflowForceTextarea = _isTextarea && (_viewportSize.w === 0 || _viewportSize.h === 0);
                        var previousOverflowAmount = _overflowAmountCache;
                        var overflowBehaviorIsVS = {};
                        var overflowBehaviorIsVH = {};
                        var overflowBehaviorIsS = {};
                        var overflowAmount = {};
                        var hasOverflow = {};
                        var hideOverflow = {};
                        var canScroll = {};
                        var viewportRect = _paddingElementNative[LEXICON.bCR]();
                        var setOverflowVariables = function (horizontal) {
                            var scrollbarVars = getScrollbarVars(horizontal);
                            var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                            var xyI = scrollbarVarsInverted._x_y;
                            var xy = scrollbarVars._x_y;
                            var wh = scrollbarVars._w_h;
                            var widthHeight = scrollbarVars._width_height;
                            var scrollMax = _strScroll + scrollbarVars._Left_Top + 'Max';
                            var fractionalOverflowAmount = viewportRect[widthHeight] ? MATH.abs(viewportRect[widthHeight] - _viewportSize[wh]) : 0;
                            var checkFractionalOverflowAmount = previousOverflowAmount && previousOverflowAmount[xy] > 0 && _viewportElementNative[scrollMax] === 0;
                            overflowBehaviorIsVS[xy] = overflowBehavior[xy] === 'v-s';
                            overflowBehaviorIsVH[xy] = overflowBehavior[xy] === 'v-h';
                            overflowBehaviorIsS[xy] = overflowBehavior[xy] === 's';
                            overflowAmount[xy] = MATH.max(0, MATH.round((contentScrollSize[wh] - _viewportSize[wh]) * 100) / 100);
                            overflowAmount[xy] *= (hideOverflowForceTextarea || (checkFractionalOverflowAmount && fractionalOverflowAmount > 0 && fractionalOverflowAmount < 1)) ? 0 : 1;
                            hasOverflow[xy] = overflowAmount[xy] > 0;

                            //hideOverflow:
                            //x || y : true === overflow is hidden by "overflow: scroll" OR "overflow: hidden"
                            //xs || ys : true === overflow is hidden by "overflow: scroll"
                            hideOverflow[xy] = overflowBehaviorIsVS[xy] || overflowBehaviorIsVH[xy] ? (hasOverflow[xyI] && !overflowBehaviorIsVS[xyI] && !overflowBehaviorIsVH[xyI]) : hasOverflow[xy];
                            hideOverflow[xy + 's'] = hideOverflow[xy] ? (overflowBehaviorIsS[xy] || overflowBehaviorIsVS[xy]) : false;

                            canScroll[xy] = hasOverflow[xy] && hideOverflow[xy + 's'];
                        };
                        setOverflowVariables(true);
                        setOverflowVariables(false);

                        overflowAmount.c = checkCacheAutoForce(overflowAmount, _overflowAmountCache);
                        _overflowAmountCache = overflowAmount;
                        hasOverflow.c = checkCacheAutoForce(hasOverflow, _hasOverflowCache);
                        _hasOverflowCache = hasOverflow;
                        hideOverflow.c = checkCacheAutoForce(hideOverflow, _hideOverflowCache);
                        _hideOverflowCache = hideOverflow;

                        //if native scrollbar is overlay at x OR y axis, prepare DOM
                        if (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) {
                            var borderDesign = 'px solid transparent';
                            var contentArrangeElementCSS = {};
                            var arrangeContent = {};
                            var arrangeChanged = force;
                            var setContentElementCSS;

                            if (hasOverflow.x || hasOverflow.y) {
                                arrangeContent.w = _nativeScrollbarIsOverlaid.y && hasOverflow.y ? contentScrollSize.w + _overlayScrollbarDummySize.y : _strEmpty;
                                arrangeContent.h = _nativeScrollbarIsOverlaid.x && hasOverflow.x ? contentScrollSize.h + _overlayScrollbarDummySize.x : _strEmpty;
                                arrangeChanged = checkCacheAutoForce(arrangeContent, _arrangeContentSizeCache);
                                _arrangeContentSizeCache = arrangeContent;
                            }

                            if (hasOverflow.c || hideOverflow.c || contentScrollSize.c || cssDirectionChanged || widthAutoChanged || heightAutoChanged || widthAuto || heightAuto || ignoreOverlayScrollbarHidingChanged) {
                                contentElementCSS[_strMarginMinus + isRTLRight] = contentElementCSS[_strBorderMinus + isRTLRight] = _strEmpty;
                                setContentElementCSS = function (horizontal) {
                                    var scrollbarVars = getScrollbarVars(horizontal);
                                    var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                                    var xy = scrollbarVars._x_y;
                                    var strDirection = horizontal ? _strBottom : isRTLLeft;
                                    var invertedAutoSize = horizontal ? heightAuto : widthAuto;

                                    if (_nativeScrollbarIsOverlaid[xy] && hasOverflow[xy] && hideOverflow[xy + 's']) {
                                        contentElementCSS[_strMarginMinus + strDirection] = invertedAutoSize ? (ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy]) : _strEmpty;
                                        contentElementCSS[_strBorderMinus + strDirection] = ((horizontal ? !invertedAutoSize : true) && !ignoreOverlayScrollbarHiding) ? (_overlayScrollbarDummySize[xy] + borderDesign) : _strEmpty;
                                    }
                                    else {
                                        arrangeContent[scrollbarVarsInverted._w_h] =
                                            contentElementCSS[_strMarginMinus + strDirection] =
                                            contentElementCSS[_strBorderMinus + strDirection] = _strEmpty;
                                        arrangeChanged = true;
                                    }
                                };

                                if (_nativeScrollbarStyling) {
                                    if (ignoreOverlayScrollbarHiding)
                                        removeClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                                    else
                                        addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                                }
                                else {
                                    setContentElementCSS(true);
                                    setContentElementCSS(false);
                                }
                            }
                            if (ignoreOverlayScrollbarHiding) {
                                arrangeContent.w = arrangeContent.h = _strEmpty;
                                arrangeChanged = true;
                            }
                            if (arrangeChanged && !_nativeScrollbarStyling) {
                                contentArrangeElementCSS[_strWidth] = hideOverflow.y ? arrangeContent.w : _strEmpty;
                                contentArrangeElementCSS[_strHeight] = hideOverflow.x ? arrangeContent.h : _strEmpty;

                                if (!_contentArrangeElement) {
                                    _contentArrangeElement = FRAMEWORK(generateDiv(_classNameContentArrangeElement));
                                    _viewportElement.prepend(_contentArrangeElement);
                                }
                                _contentArrangeElement.css(contentArrangeElementCSS);
                            }
                            _contentElement.css(contentElementCSS);
                        }

                        var viewportElementCSS = {};
                        var paddingElementCSS = {};
                        var setViewportCSS;
                        if (hostSizeChanged || hasOverflow.c || hideOverflow.c || contentScrollSize.c || overflowBehaviorChanged || boxSizingChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged || clipAlwaysChanged || heightAutoChanged) {
                            viewportElementCSS[isRTLRight] = _strEmpty;
                            setViewportCSS = function (horizontal) {
                                var scrollbarVars = getScrollbarVars(horizontal);
                                var scrollbarVarsInverted = getScrollbarVars(!horizontal);
                                var xy = scrollbarVars._x_y;
                                var XY = scrollbarVars._X_Y;
                                var strDirection = horizontal ? _strBottom : isRTLLeft;

                                var reset = function () {
                                    viewportElementCSS[strDirection] = _strEmpty;
                                    _contentBorderSize[scrollbarVarsInverted._w_h] = 0;
                                };
                                if (hasOverflow[xy] && hideOverflow[xy + 's']) {
                                    viewportElementCSS[strOverflow + XY] = _strScroll;
                                    if (ignoreOverlayScrollbarHiding || _nativeScrollbarStyling) {
                                        reset();
                                    }
                                    else {
                                        viewportElementCSS[strDirection] = -(_nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[xy] : _nativeScrollbarSize[xy]);
                                        _contentBorderSize[scrollbarVarsInverted._w_h] = _nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[scrollbarVarsInverted._x_y] : 0;
                                    }
                                } else {
                                    viewportElementCSS[strOverflow + XY] = _strEmpty;
                                    reset();
                                }
                            };
                            setViewportCSS(true);
                            setViewportCSS(false);

                            // if the scroll container is too small and if there is any overflow with no overlay scrollbar (and scrollbar styling isn't possible), 
                            // make viewport element greater in size (Firefox hide Scrollbars fix)
                            // because firefox starts hiding scrollbars on too small elements
                            // with this behavior the overflow calculation may be incorrect or the scrollbars would appear suddenly
                            // https://bugzilla.mozilla.org/show_bug.cgi?id=292284
                            if (!_nativeScrollbarStyling
                                && (_viewportSize.h < _nativeScrollbarMinSize.x || _viewportSize.w < _nativeScrollbarMinSize.y)
                                && ((hasOverflow.x && hideOverflow.x && !_nativeScrollbarIsOverlaid.x) || (hasOverflow.y && hideOverflow.y && !_nativeScrollbarIsOverlaid.y))) {
                                viewportElementCSS[_strPaddingMinus + _strTop] = _nativeScrollbarMinSize.x;
                                viewportElementCSS[_strMarginMinus + _strTop] = -_nativeScrollbarMinSize.x;

                                viewportElementCSS[_strPaddingMinus + isRTLRight] = _nativeScrollbarMinSize.y;
                                viewportElementCSS[_strMarginMinus + isRTLRight] = -_nativeScrollbarMinSize.y;
                            }
                            else {
                                viewportElementCSS[_strPaddingMinus + _strTop] =
                                    viewportElementCSS[_strMarginMinus + _strTop] =
                                    viewportElementCSS[_strPaddingMinus + isRTLRight] =
                                    viewportElementCSS[_strMarginMinus + isRTLRight] = _strEmpty;
                            }
                            viewportElementCSS[_strPaddingMinus + isRTLLeft] =
                                viewportElementCSS[_strMarginMinus + isRTLLeft] = _strEmpty;

                            //if there is any overflow (x OR y axis) and this overflow shall be hidden, make overflow hidden, else overflow visible
                            if ((hasOverflow.x && hideOverflow.x) || (hasOverflow.y && hideOverflow.y) || hideOverflowForceTextarea) {
                                //only hide if is Textarea
                                if (_isTextarea && hideOverflowForceTextarea) {
                                    paddingElementCSS[strOverflowX] =
                                        paddingElementCSS[strOverflowY] = strHidden;
                                }
                            }
                            else {
                                if (!clipAlways || (overflowBehaviorIsVH.x || overflowBehaviorIsVS.x || overflowBehaviorIsVH.y || overflowBehaviorIsVS.y)) {
                                    //only un-hide if Textarea
                                    if (_isTextarea) {
                                        paddingElementCSS[strOverflowX] =
                                            paddingElementCSS[strOverflowY] = _strEmpty;
                                    }
                                    viewportElementCSS[strOverflowX] =
                                        viewportElementCSS[strOverflowY] = strVisible;
                                }
                            }

                            _paddingElement.css(paddingElementCSS);
                            _viewportElement.css(viewportElementCSS);
                            viewportElementCSS = {};

                            //force soft redraw in webkit because without the scrollbars will may appear because DOM wont be redrawn under special conditions
                            if ((hasOverflow.c || boxSizingChanged || widthAutoChanged || heightAutoChanged) && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)) {
                                var elementStyle = _contentElementNative[LEXICON.s];
                                var dump;
                                elementStyle.webkitTransform = 'scale(1)';
                                elementStyle.display = 'run-in';
                                dump = _contentElementNative[LEXICON.oH];
                                elementStyle.display = _strEmpty; //|| dump; //use dump to prevent it from deletion if minify
                                elementStyle.webkitTransform = _strEmpty;
                            }
                            /*
                            //force hard redraw in webkit if native overlaid scrollbars shall appear
                            if (ignoreOverlayScrollbarHidingChanged && ignoreOverlayScrollbarHiding) {
                                _hostElement.hide();
                                var dump = _hostElementNative[LEXICON.oH];
                                _hostElement.show();
                            }
                            */
                        }

                        //change to direction RTL and width auto Bugfix in Webkit
                        //without this fix, the DOM still thinks the scrollbar is LTR and thus the content is shifted to the left
                        contentElementCSS = {};
                        if (cssDirectionChanged || widthAutoChanged || heightAutoChanged) {
                            if (_isRTL && widthAuto) {
                                var floatTmp = _contentElement.css(_strFloat);
                                var posLeftWithoutFloat = MATH.round(_contentElement.css(_strFloat, _strEmpty).css(_strLeft, _strEmpty).position().left);
                                _contentElement.css(_strFloat, floatTmp);
                                var posLeftWithFloat = MATH.round(_contentElement.position().left);

                                if (posLeftWithoutFloat !== posLeftWithFloat)
                                    contentElementCSS[_strLeft] = posLeftWithoutFloat;
                            }
                            else {
                                contentElementCSS[_strLeft] = _strEmpty;
                            }
                        }
                        _contentElement.css(contentElementCSS);

                        //handle scroll position
                        if (_isTextarea && contentSizeChanged) {
                            var textareaInfo = getTextareaInfo();
                            if (textareaInfo) {
                                var textareaRowsChanged = _textareaInfoCache === undefined ? true : textareaInfo._rows !== _textareaInfoCache._rows;
                                var cursorRow = textareaInfo._cursorRow;
                                var cursorCol = textareaInfo._cursorColumn;
                                var widestRow = textareaInfo._widestRow;
                                var lastRow = textareaInfo._rows;
                                var lastCol = textareaInfo._columns;
                                var cursorPos = textareaInfo._cursorPosition;
                                var cursorMax = textareaInfo._cursorMax;
                                var cursorIsLastPosition = (cursorPos >= cursorMax && _textareaHasFocus);
                                var textareaScrollAmount = {
                                    x: (!textareaAutoWrapping && (cursorCol === lastCol && cursorRow === widestRow)) ? _overflowAmountCache.x : -1,
                                    y: (textareaAutoWrapping ? cursorIsLastPosition || textareaRowsChanged && (previousOverflowAmount ? (currScroll.y === previousOverflowAmount.y) : false) : (cursorIsLastPosition || textareaRowsChanged) && cursorRow === lastRow) ? _overflowAmountCache.y : -1
                                };
                                currScroll.x = textareaScrollAmount.x > -1 ? (_isRTL && _normalizeRTLCache && _rtlScrollBehavior.i ? 0 : textareaScrollAmount.x) : currScroll.x; //if inverted, scroll to 0 -> normalized this means to max scroll offset.
                                currScroll.y = textareaScrollAmount.y > -1 ? textareaScrollAmount.y : currScroll.y;
                            }
                            _textareaInfoCache = textareaInfo;
                        }
                        if (_isRTL && _rtlScrollBehavior.i && _nativeScrollbarIsOverlaid.y && hasOverflow.x && _normalizeRTLCache)
                            currScroll.x += _contentBorderSize.w || 0;
                        if (widthAuto)
                            _hostElement[_strScrollLeft](0);
                        if (heightAuto)
                            _hostElement[_strScrollTop](0);
                        _viewportElement[_strScrollLeft](currScroll.x)[_strScrollTop](currScroll.y);

                        //scrollbars management:
                        var scrollbarsVisibilityVisible = scrollbarsVisibility === 'v';
                        var scrollbarsVisibilityHidden = scrollbarsVisibility === 'h';
                        var scrollbarsVisibilityAuto = scrollbarsVisibility === 'a';

                        var showScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, true, canScroll.x);
                        var showScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, true, canScroll.y);
                        var hideScrollbarH = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, true, false, canScroll.x);
                        var hideScrollbarV = COMPATIBILITY.bind(refreshScrollbarAppearance, 0, false, false, canScroll.y);

                        //manage class name which indicates scrollable overflow
                        if (hideOverflow.x || hideOverflow.y)
                            addClass(_hostElement, _classNameHostOverflow);
                        else
                            removeClass(_hostElement, _classNameHostOverflow);
                        if (hideOverflow.x)
                            addClass(_hostElement, _classNameHostOverflowX);
                        else
                            removeClass(_hostElement, _classNameHostOverflowX);
                        if (hideOverflow.y)
                            addClass(_hostElement, _classNameHostOverflowY);
                        else
                            removeClass(_hostElement, _classNameHostOverflowY);

                        //add or remove rtl class name for styling purposes
                        if (cssDirectionChanged) {
                            if (_isRTL)
                                addClass(_hostElement, _classNameHostRTL);
                            else
                                removeClass(_hostElement, _classNameHostRTL);
                        }

                        //manage the resize feature (CSS3 resize "polyfill" for this plugin)
                        if (_isBody)
                            addClass(_hostElement, _classNameHostResizeDisabled);
                        if (resizeChanged) {
                            removeClass(_scrollbarCornerElement, [
                                _classNameScrollbarCornerResize,
                                _classNameScrollbarCornerResizeB,
                                _classNameScrollbarCornerResizeH,
                                _classNameScrollbarCornerResizeV].join(_strSpace));
                            if (_resizeNone) {
                                addClass(_hostElement, _classNameHostResizeDisabled);
                            }
                            else {
                                removeClass(_hostElement, _classNameHostResizeDisabled);
                                addClass(_scrollbarCornerElement, _classNameScrollbarCornerResize);
                                if (_resizeBoth)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeB);
                                else if (_resizeHorizontal)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeH);
                                else if (_resizeVertical)
                                    addClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeV);
                            }
                        }

                        //manage the scrollbars general visibility + the scrollbar interactivity (unusable class name)
                        if (scrollbarsVisibilityChanged || overflowBehaviorChanged || hideOverflow.c || hasOverflow.c || ignoreOverlayScrollbarHidingChanged) {
                            if (ignoreOverlayScrollbarHiding) {
                                if (ignoreOverlayScrollbarHidingChanged) {
                                    removeClass(_hostElement, _classNameHostScrolling);
                                    if (ignoreOverlayScrollbarHiding) {
                                        hideScrollbarH();
                                        hideScrollbarV();
                                    }
                                }
                            }
                            else if (scrollbarsVisibilityAuto) {
                                if (canScroll.x)
                                    showScrollbarH();
                                else
                                    hideScrollbarH();

                                if (canScroll.y)
                                    showScrollbarV();
                                else
                                    hideScrollbarV();
                            }
                            else if (scrollbarsVisibilityVisible) {
                                showScrollbarH();
                                showScrollbarV();
                            }
                            else if (scrollbarsVisibilityHidden) {
                                hideScrollbarH();
                                hideScrollbarV();
                            }
                        }

                        //manage the scrollbars auto hide feature (auto hide them after specific actions)
                        if (scrollbarsAutoHideChanged || ignoreOverlayScrollbarHidingChanged) {
                            if (_scrollbarsAutoHideLeave || _scrollbarsAutoHideMove) {
                                setupHostMouseTouchEvents(true);
                                setupHostMouseTouchEvents();
                            }
                            else {
                                setupHostMouseTouchEvents(true);
                            }

                            if (_scrollbarsAutoHideNever)
                                refreshScrollbarsAutoHide(true);
                            else
                                refreshScrollbarsAutoHide(false, true);
                        }

                        //manage scrollbars handle length & offset - don't remove!
                        if (hostSizeChanged || overflowAmount.c || heightAutoChanged || widthAutoChanged || resizeChanged || boxSizingChanged || paddingAbsoluteChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged) {
                            refreshScrollbarHandleLength(true);
                            refreshScrollbarHandleOffset(true);
                            refreshScrollbarHandleLength(false);
                            refreshScrollbarHandleOffset(false);
                        }

                        //manage interactivity
                        if (scrollbarsClickScrollingChanged)
                            refreshScrollbarsInteractive(true, scrollbarsClickScrolling);
                        if (scrollbarsDragScrollingChanged)
                            refreshScrollbarsInteractive(false, scrollbarsDragScrolling);

                        //callbacks:
                        if (cssDirectionChanged) {
                            dispatchCallback('onDirectionChanged', {
                                isRTL: _isRTL,
                                dir: cssDirection
                            });
                        }
                        if (hostSizeChanged) {
                            dispatchCallback('onHostSizeChanged', {
                                width: _hostSizeCache.w,
                                height: _hostSizeCache.h
                            });
                        }
                        if (contentSizeChanged) {
                            dispatchCallback('onContentSizeChanged', {
                                width: _contentScrollSizeCache.w,
                                height: _contentScrollSizeCache.h
                            });
                        }
                        if (hasOverflow.c || hideOverflow.c) {
                            dispatchCallback('onOverflowChanged', {
                                x: hasOverflow.x,
                                y: hasOverflow.y,
                                xScrollable: hideOverflow.xs,
                                yScrollable: hideOverflow.ys,
                                clipped: hideOverflow.x || hideOverflow.y
                            });
                        }
                        if (overflowAmount.c) {
                            dispatchCallback('onOverflowAmountChanged', {
                                x: overflowAmount.x,
                                y: overflowAmount.y
                            });
                        }
                    }

                    //fix body min size
                    if (_isBody && _bodyMinSizeCache && (_hasOverflowCache.c || _bodyMinSizeCache.c)) {
                        //its possible that no min size was measured until now, because the content arrange element was just added now, in this case, measure now the min size.
                        if (!_bodyMinSizeCache.f)
                            bodyMinSizeChanged();
                        if (_nativeScrollbarIsOverlaid.y && _hasOverflowCache.x)
                            _contentElement.css(_strMinMinus + _strWidth, _bodyMinSizeCache.w + _overlayScrollbarDummySize.y);
                        if (_nativeScrollbarIsOverlaid.x && _hasOverflowCache.y)
                            _contentElement.css(_strMinMinus + _strHeight, _bodyMinSizeCache.h + _overlayScrollbarDummySize.x);
                        _bodyMinSizeCache.c = false;
                    }

                    //freezeResizeObserver(_sizeObserverElement, false);
                    //freezeResizeObserver(_sizeAutoObserverElement, false);

                    dispatchCallback('onUpdated', { forced: force });
                }


                //==== Options ====//

                /**
                 * Sets new options but doesn't call the update method.
                 * @param newOptions The object which contains the new options.
                 * @returns {*} A object which contains the changed options.
                 */
                function setOptions(newOptions) {
                    var validatedOpts = _pluginsOptions._validate(newOptions, _pluginsOptions._template, true, _currentOptions)

                    _currentOptions = extendDeep({}, _currentOptions, validatedOpts._default);
                    _currentPreparedOptions = extendDeep({}, _currentPreparedOptions, validatedOpts._prepared);

                    return validatedOpts._prepared;
                }


                //==== Structure ====//

                /**
                 * Builds or destroys the wrapper and helper DOM elements.
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupStructureDOM(destroy) {
                    var strParent = 'parent';
                    var classNameResizeObserverHost = 'os-resize-observer-host';
                    var classNameTextareaElementFull = _classNameTextareaElement + _strSpace + _classNameTextInherit;
                    var textareaClass = _isTextarea ? _strSpace + _classNameTextInherit : _strEmpty;
                    var adoptAttrs = _currentPreparedOptions.textarea.inheritedAttrs;
                    var adoptAttrsMap = {};
                    var applyAdoptedAttrs = function () {
                        var applyAdoptedAttrsElm = destroy ? _targetElement : _hostElement;
                        each(adoptAttrsMap, function (key, value) {
                            if (type(value) == TYPES.s) {
                                if (key == LEXICON.c)
                                    applyAdoptedAttrsElm.addClass(value);
                                else
                                    applyAdoptedAttrsElm.attr(key, value);
                            }
                        });
                    };
                    var hostElementClassNames = [
                        _classNameHostElement,
                        _classNameHostTextareaElement,
                        _classNameHostResizeDisabled,
                        _classNameHostRTL,
                        _classNameHostScrollbarHorizontalHidden,
                        _classNameHostScrollbarVerticalHidden,
                        _classNameHostTransition,
                        _classNameHostScrolling,
                        _classNameHostOverflow,
                        _classNameHostOverflowX,
                        _classNameHostOverflowY,
                        _classNameThemeNone,
                        _classNameTextareaElement,
                        _classNameTextInherit,
                        _classNameCache].join(_strSpace);
                    var hostElementCSS = {};

                    //get host element as first element, because that's the most upper element and required for the other elements
                    _hostElement = _hostElement || (_isTextarea ? (_domExists ? _targetElement[strParent]()[strParent]()[strParent]()[strParent]() : FRAMEWORK(generateDiv(_classNameHostTextareaElement))) : _targetElement);
                    _contentElement = _contentElement || selectOrGenerateDivByClass(_classNameContentElement + textareaClass);
                    _viewportElement = _viewportElement || selectOrGenerateDivByClass(_classNameViewportElement + textareaClass);
                    _paddingElement = _paddingElement || selectOrGenerateDivByClass(_classNamePaddingElement + textareaClass);
                    _sizeObserverElement = _sizeObserverElement || selectOrGenerateDivByClass(classNameResizeObserverHost);
                    _textareaCoverElement = _textareaCoverElement || (_isTextarea ? selectOrGenerateDivByClass(_classNameTextareaCoverElement) : undefined);

                    //on destroy, remove all generated class names from the host element before collecting the adopted attributes 
                    //to prevent adopting generated class names
                    if (destroy)
                        removeClass(_hostElement, hostElementClassNames);

                    //collect all adopted attributes
                    adoptAttrs = type(adoptAttrs) == TYPES.s ? adoptAttrs.split(_strSpace) : adoptAttrs;
                    if (type(adoptAttrs) == TYPES.a && _isTextarea) {
                        each(adoptAttrs, function (i, v) {
                            if (type(v) == TYPES.s) {
                                adoptAttrsMap[v] = destroy ? _hostElement.attr(v) : _targetElement.attr(v);
                            }
                        });
                    }

                    if (!destroy) {
                        if (_isTextarea) {
                            if (!_currentPreparedOptions.sizeAutoCapable) {
                                hostElementCSS[_strWidth] = _targetElement.css(_strWidth);
                                hostElementCSS[_strHeight] = _targetElement.css(_strHeight);
                            }

                            if (!_domExists)
                                _targetElement.addClass(_classNameTextInherit).wrap(_hostElement);

                            //jQuery clones elements in wrap functions, so we have to select them again
                            _hostElement = _targetElement[strParent]().css(hostElementCSS);
                        }

                        if (!_domExists) {
                            //add the correct class to the target element
                            addClass(_targetElement, _isTextarea ? classNameTextareaElementFull : _classNameHostElement);

                            //wrap the content into the generated elements to create the required DOM
                            _hostElement.wrapInner(_contentElement)
                                .wrapInner(_viewportElement)
                                .wrapInner(_paddingElement)
                                .prepend(_sizeObserverElement);

                            //jQuery clones elements in wrap functions, so we have to select them again
                            _contentElement = findFirst(_hostElement, _strDot + _classNameContentElement);
                            _viewportElement = findFirst(_hostElement, _strDot + _classNameViewportElement);
                            _paddingElement = findFirst(_hostElement, _strDot + _classNamePaddingElement);

                            if (_isTextarea) {
                                _contentElement.prepend(_textareaCoverElement);
                                applyAdoptedAttrs();
                            }
                        }

                        if (_nativeScrollbarStyling)
                            addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible);
                        if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y)
                            addClass(_viewportElement, _classNameViewportNativeScrollbarsOverlaid);
                        if (_isBody)
                            addClass(_htmlElement, _classNameHTMLElement);

                        _sizeObserverElementNative = _sizeObserverElement[0];
                        _hostElementNative = _hostElement[0];
                        _paddingElementNative = _paddingElement[0];
                        _viewportElementNative = _viewportElement[0];
                        _contentElementNative = _contentElement[0];
                    }
                    else {
                        if (_domExists && _initialized) {
                            //clear size observer
                            _sizeObserverElement.children().remove();

                            //remove the style property and classes from already generated elements
                            each([_paddingElement, _viewportElement, _contentElement, _textareaCoverElement], function (i, elm) {
                                if (elm) {
                                    removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                                }
                            });

                            //add classes to the host element which was removed previously to match the expected DOM
                            addClass(_hostElement, _isTextarea ? _classNameHostTextareaElement : _classNameHostElement);
                        }
                        else {
                            //remove size observer
                            remove(_sizeObserverElement);

                            //unwrap the content to restore DOM
                            _contentElement.contents()
                                .unwrap()
                                .unwrap()
                                .unwrap();

                            if (_isTextarea) {
                                _targetElement.unwrap();
                                remove(_hostElement);
                                remove(_textareaCoverElement);
                                applyAdoptedAttrs();
                            }
                        }

                        if (_isTextarea)
                            _targetElement.removeAttr(LEXICON.s);

                        if (_isBody)
                            removeClass(_htmlElement, _classNameHTMLElement);
                    }
                }

                /**
                 * Adds or removes all wrapper elements interactivity events.
                 * @param destroy Indicates whether the Events shall be added or removed.
                 */
                function setupStructureEvents() {
                    var textareaKeyDownRestrictedKeyCodes = [
                        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123,    //F1 to F12
                        33, 34,                                                   //page up, page down
                        37, 38, 39, 40,                                           //left, up, right, down arrows
                        16, 17, 18, 19, 20, 144                                   //Shift, Ctrl, Alt, Pause, CapsLock, NumLock
                    ];
                    var textareaKeyDownKeyCodesList = [];
                    var textareaUpdateIntervalID;
                    var scrollStopTimeoutId;
                    var scrollStopDelay = 175;
                    var strFocus = 'focus';

                    function updateTextarea(doClearInterval) {
                        textareaUpdate();
                        _base.update(_strAuto);
                        if (doClearInterval && _autoUpdateRecommended)
                            clearInterval(textareaUpdateIntervalID);
                    }
                    function textareaOnScroll(event) {
                        _targetElement[_strScrollLeft](_rtlScrollBehavior.i && _normalizeRTLCache ? 9999999 : 0);
                        _targetElement[_strScrollTop](0);
                        COMPATIBILITY.prvD(event);
                        COMPATIBILITY.stpP(event);
                        return false;
                    }
                    function textareaOnDrop(event) {
                        setTimeout(function () {
                            if (!_destroyed)
                                updateTextarea();
                        }, 50);
                    }
                    function textareaOnFocus() {
                        _textareaHasFocus = true;
                        addClass(_hostElement, strFocus);
                    }
                    function textareaOnFocusout() {
                        _textareaHasFocus = false;
                        textareaKeyDownKeyCodesList = [];
                        removeClass(_hostElement, strFocus);
                        updateTextarea(true);
                    }
                    function textareaOnKeyDown(event) {
                        var keyCode = event.keyCode;

                        if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
                            if (!textareaKeyDownKeyCodesList[LEXICON.l]) {
                                updateTextarea();
                                textareaUpdateIntervalID = setInterval(updateTextarea, 1000 / 60);
                            }
                            if (inArray(keyCode, textareaKeyDownKeyCodesList) < 0)
                                textareaKeyDownKeyCodesList.push(keyCode);
                        }
                    }
                    function textareaOnKeyUp(event) {
                        var keyCode = event.keyCode;
                        var index = inArray(keyCode, textareaKeyDownKeyCodesList);

                        if (inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0) {
                            if (index > -1)
                                textareaKeyDownKeyCodesList.splice(index, 1);
                            if (!textareaKeyDownKeyCodesList[LEXICON.l])
                                updateTextarea(true);
                        }
                    }
                    function contentOnTransitionEnd(event) {
                        if (_autoUpdateCache === true)
                            return;
                        event = event.originalEvent || event;
                        if (isSizeAffectingCSSProperty(event.propertyName))
                            _base.update(_strAuto);
                    }
                    function viewportOnScroll(event) {
                        if (!_sleeping) {
                            if (scrollStopTimeoutId !== undefined)
                                clearTimeout(scrollStopTimeoutId);
                            else {
                                if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                    refreshScrollbarsAutoHide(true);

                                if (!nativeOverlayScrollbarsAreActive())
                                    addClass(_hostElement, _classNameHostScrolling);

                                dispatchCallback('onScrollStart', event);
                            }

                            //if a scrollbars handle gets dragged, the mousemove event is responsible for refreshing the handle offset
                            //because if CSS scroll-snap is used, the handle offset gets only refreshed on every snap point
                            //this looks laggy & clunky, it looks much better if the offset refreshes with the mousemove
                            if (!_scrollbarsHandlesDefineScrollPos) {
                                refreshScrollbarHandleOffset(true);
                                refreshScrollbarHandleOffset(false);
                            }
                            dispatchCallback('onScroll', event);

                            scrollStopTimeoutId = setTimeout(function () {
                                if (!_destroyed) {
                                    //OnScrollStop:
                                    clearTimeout(scrollStopTimeoutId);
                                    scrollStopTimeoutId = undefined;

                                    if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                        refreshScrollbarsAutoHide(false);

                                    if (!nativeOverlayScrollbarsAreActive())
                                        removeClass(_hostElement, _classNameHostScrolling);

                                    dispatchCallback('onScrollStop', event);
                                }
                            }, scrollStopDelay);
                        }
                    }


                    if (_isTextarea) {
                        if (_msieVersion > 9 || !_autoUpdateRecommended) {
                            addDestroyEventListener(_targetElement, 'input', updateTextarea);
                        }
                        else {
                            addDestroyEventListener(_targetElement,
                                [_strKeyDownEvent, _strKeyUpEvent],
                                [textareaOnKeyDown, textareaOnKeyUp]);
                        }

                        addDestroyEventListener(_targetElement,
                            [_strScroll, 'drop', strFocus, strFocus + 'out'],
                            [textareaOnScroll, textareaOnDrop, textareaOnFocus, textareaOnFocusout]);
                    }
                    else {
                        addDestroyEventListener(_contentElement, _strTransitionEndEvent, contentOnTransitionEnd);
                    }
                    addDestroyEventListener(_viewportElement, _strScroll, viewportOnScroll, true);
                }


                //==== Scrollbars ====//

                /**
                 * Builds or destroys all scrollbar DOM elements (scrollbar, track, handle)
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupScrollbarsDOM(destroy) {
                    var selectOrGenerateScrollbarDOM = function (isHorizontal) {
                        var scrollbarClassName = isHorizontal ? _classNameScrollbarHorizontal : _classNameScrollbarVertical;
                        var scrollbar = selectOrGenerateDivByClass(_classNameScrollbar + _strSpace + scrollbarClassName, true);
                        var track = selectOrGenerateDivByClass(_classNameScrollbarTrack, scrollbar);
                        var handle = selectOrGenerateDivByClass(_classNameScrollbarHandle, scrollbar);

                        if (!_domExists && !destroy) {
                            scrollbar.append(track);
                            track.append(handle);
                        }

                        return {
                            _scrollbar: scrollbar,
                            _track: track,
                            _handle: handle
                        };
                    };
                    function resetScrollbarDOM(isHorizontal) {
                        var scrollbarVars = getScrollbarVars(isHorizontal);
                        var scrollbar = scrollbarVars._scrollbar;
                        var track = scrollbarVars._track;
                        var handle = scrollbarVars._handle;

                        if (_domExists && _initialized) {
                            each([scrollbar, track, handle], function (i, elm) {
                                removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                            });
                        }
                        else {
                            remove(scrollbar || selectOrGenerateScrollbarDOM(isHorizontal)._scrollbar);
                        }
                    }
                    var horizontalElements;
                    var verticalElements;

                    if (!destroy) {
                        horizontalElements = selectOrGenerateScrollbarDOM(true);
                        verticalElements = selectOrGenerateScrollbarDOM();

                        _scrollbarHorizontalElement = horizontalElements._scrollbar;
                        _scrollbarHorizontalTrackElement = horizontalElements._track;
                        _scrollbarHorizontalHandleElement = horizontalElements._handle;
                        _scrollbarVerticalElement = verticalElements._scrollbar;
                        _scrollbarVerticalTrackElement = verticalElements._track;
                        _scrollbarVerticalHandleElement = verticalElements._handle;

                        if (!_domExists) {
                            _paddingElement.after(_scrollbarVerticalElement);
                            _paddingElement.after(_scrollbarHorizontalElement);
                        }
                    }
                    else {
                        resetScrollbarDOM(true);
                        resetScrollbarDOM();
                    }
                }

                /**
                 * Initializes all scrollbar interactivity events. (track and handle dragging, clicking, scrolling)
                 * @param isHorizontal True if the target scrollbar is the horizontal scrollbar, false if the target scrollbar is the vertical scrollbar.
                 */
                function setupScrollbarEvents(isHorizontal) {
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var insideIFrame = _windowElementNative.top !== _windowElementNative;
                    var xy = scrollbarVars._x_y;
                    var XY = scrollbarVars._X_Y;
                    var scroll = _strScroll + scrollbarVars._Left_Top;
                    var strActive = 'active';
                    var strSnapHandle = 'snapHandle';
                    var scrollDurationFactor = 1;
                    var increaseDecreaseScrollAmountKeyCodes = [16, 17]; //shift, ctrl
                    var trackTimeout;
                    var mouseDownScroll;
                    var mouseDownOffset;
                    var mouseDownInvertedScale;

                    function getPointerPosition(event) {
                        return _msieVersion && insideIFrame ? event['screen' + XY] : COMPATIBILITY.page(event)[xy]; //use screen coordinates in EDGE & IE because the page values are incorrect in frames.
                    }
                    function getPreparedScrollbarsOption(name) {
                        return _currentPreparedOptions.scrollbars[name];
                    }
                    function increaseTrackScrollAmount() {
                        scrollDurationFactor = 0.5;
                    }
                    function decreaseTrackScrollAmount() {
                        scrollDurationFactor = 1;
                    }
                    function documentKeyDown(event) {
                        if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1)
                            increaseTrackScrollAmount();
                    }
                    function documentKeyUp(event) {
                        if (inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1)
                            decreaseTrackScrollAmount();
                    }
                    function onMouseTouchDownContinue(event) {
                        var originalEvent = event.originalEvent || event;
                        var isTouchEvent = originalEvent.touches !== undefined;
                        return _sleeping || _destroyed || nativeOverlayScrollbarsAreActive() || !_scrollbarsDragScrollingCache || (isTouchEvent && !getPreparedScrollbarsOption('touchSupport')) ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
                    }
                    function documentDragMove(event) {
                        if (onMouseTouchDownContinue(event)) {
                            var trackLength = scrollbarVarsInfo._trackLength;
                            var handleLength = scrollbarVarsInfo._handleLength;
                            var scrollRange = scrollbarVarsInfo._maxScroll;
                            var scrollRaw = (getPointerPosition(event) - mouseDownOffset) * mouseDownInvertedScale;
                            var scrollDeltaPercent = scrollRaw / (trackLength - handleLength);
                            var scrollDelta = (scrollRange * scrollDeltaPercent);
                            scrollDelta = isFinite(scrollDelta) ? scrollDelta : 0;
                            if (_isRTL && isHorizontal && !_rtlScrollBehavior.i)
                                scrollDelta *= -1;

                            _viewportElement[scroll](MATH.round(mouseDownScroll + scrollDelta));

                            if (_scrollbarsHandlesDefineScrollPos)
                                refreshScrollbarHandleOffset(isHorizontal, mouseDownScroll + scrollDelta);

                            if (!_supportPassiveEvents)
                                COMPATIBILITY.prvD(event);
                        }
                        else
                            documentMouseTouchUp(event);
                    }
                    function documentMouseTouchUp(event) {
                        event = event || event.originalEvent;

                        setupResponsiveEventListener(_documentElement,
                            [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent],
                            [documentDragMove, documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart],
                            true);

                        if (_scrollbarsHandlesDefineScrollPos)
                            refreshScrollbarHandleOffset(isHorizontal, true);

                        _scrollbarsHandlesDefineScrollPos = false;
                        removeClass(_bodyElement, _classNameDragging);
                        removeClass(scrollbarVars._handle, strActive);
                        removeClass(scrollbarVars._track, strActive);
                        removeClass(scrollbarVars._scrollbar, strActive);

                        mouseDownScroll = undefined;
                        mouseDownOffset = undefined;
                        mouseDownInvertedScale = 1;

                        decreaseTrackScrollAmount();

                        if (trackTimeout !== undefined) {
                            _base.scrollStop();
                            clearTimeout(trackTimeout);
                            trackTimeout = undefined;
                        }

                        if (event) {
                            var rect = _hostElementNative[LEXICON.bCR]();
                            var mouseInsideHost = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;

                            //if mouse is outside host element
                            if (!mouseInsideHost)
                                hostOnMouseLeave();

                            if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                                refreshScrollbarsAutoHide(false);
                        }
                    }
                    function onHandleMouseTouchDown(event) {
                        if (onMouseTouchDownContinue(event))
                            onHandleMouseTouchDownAction(event);
                    }
                    function onHandleMouseTouchDownAction(event) {
                        mouseDownScroll = _viewportElement[scroll]();
                        mouseDownScroll = isNaN(mouseDownScroll) ? 0 : mouseDownScroll;
                        if (_isRTL && isHorizontal && !_rtlScrollBehavior.n || !_isRTL)
                            mouseDownScroll = mouseDownScroll < 0 ? 0 : mouseDownScroll;

                        mouseDownInvertedScale = getHostElementInvertedScale()[xy];
                        mouseDownOffset = getPointerPosition(event);

                        _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
                        addClass(_bodyElement, _classNameDragging);
                        addClass(scrollbarVars._handle, strActive);
                        addClass(scrollbarVars._scrollbar, strActive);

                        setupResponsiveEventListener(_documentElement,
                            [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strSelectStartEvent],
                            [documentDragMove, documentMouseTouchUp, documentOnSelectStart]);

                        if (_msieVersion || !_documentMixed)
                            COMPATIBILITY.prvD(event);
                        COMPATIBILITY.stpP(event);
                    }
                    function onTrackMouseTouchDown(event) {
                        if (onMouseTouchDownContinue(event)) {
                            var scrollDistance = MATH.round(_viewportSize[scrollbarVars._w_h]);
                            var trackOffset = scrollbarVars._track.offset()[scrollbarVars._left_top];
                            var ctrlKey = event.ctrlKey;
                            var instantScroll = event.shiftKey;
                            var instantScrollTransition = instantScroll && ctrlKey;
                            var isFirstIteration = true;
                            var easing = 'linear';
                            var decreaseScroll;
                            var finishedCondition;
                            var scrollActionFinsished = function (transition) {
                                if (_scrollbarsHandlesDefineScrollPos)
                                    refreshScrollbarHandleOffset(isHorizontal, transition);
                            };
                            var scrollActionInstantFinished = function () {
                                scrollActionFinsished();
                                onHandleMouseTouchDownAction(event);
                            };
                            var scrollAction = function () {
                                if (!_destroyed) {
                                    var mouseOffset = (mouseDownOffset - trackOffset) * mouseDownInvertedScale;
                                    var handleOffset = scrollbarVarsInfo._handleOffset;
                                    var trackLength = scrollbarVarsInfo._trackLength;
                                    var handleLength = scrollbarVarsInfo._handleLength;
                                    var scrollRange = scrollbarVarsInfo._maxScroll;
                                    var currScroll = scrollbarVarsInfo._currentScroll;
                                    var scrollDuration = 270 * scrollDurationFactor;
                                    var timeoutDelay = isFirstIteration ? MATH.max(400, scrollDuration) : scrollDuration;
                                    var instantScrollPosition = scrollRange * ((mouseOffset - (handleLength / 2)) / (trackLength - handleLength)); // 100% * positionPercent
                                    var rtlIsNormal = _isRTL && isHorizontal && ((!_rtlScrollBehavior.i && !_rtlScrollBehavior.n) || _normalizeRTLCache);
                                    var decreaseScrollCondition = rtlIsNormal ? handleOffset < mouseOffset : handleOffset > mouseOffset;
                                    var scrollObj = {};
                                    var animationObj = {
                                        easing: easing,
                                        step: function (now) {
                                            if (_scrollbarsHandlesDefineScrollPos) {
                                                _viewportElement[scroll](now); //https://github.com/jquery/jquery/issues/4340
                                                refreshScrollbarHandleOffset(isHorizontal, now);
                                            }
                                        }
                                    };
                                    instantScrollPosition = isFinite(instantScrollPosition) ? instantScrollPosition : 0;
                                    instantScrollPosition = _isRTL && isHorizontal && !_rtlScrollBehavior.i ? (scrollRange - instantScrollPosition) : instantScrollPosition;

                                    //_base.scrollStop();

                                    if (instantScroll) {
                                        _viewportElement[scroll](instantScrollPosition); //scroll instantly to new position
                                        if (instantScrollTransition) {
                                            //get the scroll position after instant scroll (in case CSS Snap Points are used) to get the correct snapped scroll position
                                            //and the animation stops at the correct point
                                            instantScrollPosition = _viewportElement[scroll]();
                                            //scroll back to the position before instant scrolling so animation can be performed
                                            _viewportElement[scroll](currScroll);

                                            instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.i ? (scrollRange - instantScrollPosition) : instantScrollPosition;
                                            instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.n ? -instantScrollPosition : instantScrollPosition;

                                            scrollObj[xy] = instantScrollPosition;
                                            _base.scroll(scrollObj, extendDeep(animationObj, {
                                                duration: 130,
                                                complete: scrollActionInstantFinished
                                            }));
                                        }
                                        else
                                            scrollActionInstantFinished();
                                    }
                                    else {
                                        decreaseScroll = isFirstIteration ? decreaseScrollCondition : decreaseScroll;
                                        finishedCondition = rtlIsNormal
                                            ? (decreaseScroll ? handleOffset + handleLength >= mouseOffset : handleOffset <= mouseOffset)
                                            : (decreaseScroll ? handleOffset <= mouseOffset : handleOffset + handleLength >= mouseOffset);

                                        if (finishedCondition) {
                                            clearTimeout(trackTimeout);
                                            _base.scrollStop();
                                            trackTimeout = undefined;
                                            scrollActionFinsished(true);
                                        }
                                        else {
                                            trackTimeout = setTimeout(scrollAction, timeoutDelay);

                                            scrollObj[xy] = (decreaseScroll ? '-=' : '+=') + scrollDistance;
                                            _base.scroll(scrollObj, extendDeep(animationObj, {
                                                duration: scrollDuration
                                            }));
                                        }
                                        isFirstIteration = false;
                                    }
                                }
                            };
                            if (ctrlKey)
                                increaseTrackScrollAmount();

                            mouseDownInvertedScale = getHostElementInvertedScale()[xy];
                            mouseDownOffset = COMPATIBILITY.page(event)[xy];

                            _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle);
                            addClass(_bodyElement, _classNameDragging);
                            addClass(scrollbarVars._track, strActive);
                            addClass(scrollbarVars._scrollbar, strActive);

                            setupResponsiveEventListener(_documentElement,
                                [_strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent],
                                [documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart]);

                            scrollAction();
                            COMPATIBILITY.prvD(event);
                            COMPATIBILITY.stpP(event);
                        }
                    }
                    function onTrackMouseTouchEnter(event) {
                        //make sure both scrollbars will stay visible if one scrollbar is hovered if autoHide is "scroll" or "move".
                        _scrollbarsHandleHovered = true;
                        if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                            refreshScrollbarsAutoHide(true);
                    }
                    function onTrackMouseTouchLeave(event) {
                        _scrollbarsHandleHovered = false;
                        if (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove)
                            refreshScrollbarsAutoHide(false);
                    }
                    function onScrollbarMouseTouchDown(event) {
                        COMPATIBILITY.stpP(event);
                    }

                    addDestroyEventListener(scrollbarVars._handle,
                        _strMouseTouchDownEvent,
                        onHandleMouseTouchDown);
                    addDestroyEventListener(scrollbarVars._track,
                        [_strMouseTouchDownEvent, _strMouseTouchEnter, _strMouseTouchLeave],
                        [onTrackMouseTouchDown, onTrackMouseTouchEnter, onTrackMouseTouchLeave]);
                    addDestroyEventListener(scrollbarVars._scrollbar,
                        _strMouseTouchDownEvent,
                        onScrollbarMouseTouchDown);

                    if (_supportTransition) {
                        addDestroyEventListener(scrollbarVars._scrollbar, _strTransitionEndEvent, function (event) {
                            if (event.target !== scrollbarVars._scrollbar[0])
                                return;
                            refreshScrollbarHandleLength(isHorizontal);
                            refreshScrollbarHandleOffset(isHorizontal);
                        });
                    }
                }

                /**
                 * Shows or hides the given scrollbar and applied a class name which indicates if the scrollbar is scrollable or not.
                 * @param isHorizontal True if the horizontal scrollbar is the target, false if the vertical scrollbar is the target.
                 * @param shallBeVisible True if the scrollbar shall be shown, false if hidden.
                 * @param canScroll True if the scrollbar is scrollable, false otherwise.
                 */
                function refreshScrollbarAppearance(isHorizontal, shallBeVisible, canScroll) {
                    var scrollbarClassName = isHorizontal ? _classNameHostScrollbarHorizontalHidden : _classNameHostScrollbarVerticalHidden;
                    var scrollbarElement = isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement;

                    if (shallBeVisible)
                        removeClass(_hostElement, scrollbarClassName);
                    else
                        addClass(_hostElement, scrollbarClassName);

                    if (canScroll)
                        removeClass(scrollbarElement, _classNameScrollbarUnusable);
                    else
                        addClass(scrollbarElement, _classNameScrollbarUnusable);
                }

                /**
                 * Autoshows / autohides both scrollbars with.
                 * @param shallBeVisible True if the scrollbars shall be autoshown (only the case if they are hidden by a autohide), false if the shall be auto hidden.
                 * @param delayfree True if the scrollbars shall be hidden without a delay, false or undefined otherwise.
                 */
                function refreshScrollbarsAutoHide(shallBeVisible, delayfree) {
                    clearTimeout(_scrollbarsAutoHideTimeoutId);
                    if (shallBeVisible) {
                        //if(_hasOverflowCache.x && _hideOverflowCache.xs)
                        removeClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden);
                        //if(_hasOverflowCache.y && _hideOverflowCache.ys)
                        removeClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
                    }
                    else {
                        var anyActive;
                        var strActive = 'active';
                        var hide = function () {
                            if (!_scrollbarsHandleHovered && !_destroyed) {
                                anyActive = _scrollbarHorizontalHandleElement.hasClass(strActive) || _scrollbarVerticalHandleElement.hasClass(strActive);
                                if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave))
                                    addClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden);
                                if (!anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave))
                                    addClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
                            }
                        };
                        if (_scrollbarsAutoHideDelay > 0 && delayfree !== true)
                            _scrollbarsAutoHideTimeoutId = setTimeout(hide, _scrollbarsAutoHideDelay);
                        else
                            hide();
                    }
                }

                /**
                 * Refreshes the handle length of the given scrollbar.
                 * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
                 */
                function refreshScrollbarHandleLength(isHorizontal) {
                    var handleCSS = {};
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var digit = 1000000;
                    //get and apply intended handle length
                    var handleRatio = MATH.min(1, (_hostSizeCache[scrollbarVars._w_h] - (_paddingAbsoluteCache ? (isHorizontal ? _paddingX : _paddingY) : 0)) / _contentScrollSizeCache[scrollbarVars._w_h]);
                    handleCSS[scrollbarVars._width_height] = (MATH.floor(handleRatio * 100 * digit) / digit) + '%'; //the last * digit / digit is for flooring to the 4th digit

                    if (!nativeOverlayScrollbarsAreActive())
                        scrollbarVars._handle.css(handleCSS);

                    //measure the handle length to respect min & max length
                    scrollbarVarsInfo._handleLength = scrollbarVars._handle[0]['offset' + scrollbarVars._Width_Height];
                    scrollbarVarsInfo._handleLengthRatio = handleRatio;
                }

                /**
                 * Refreshes the handle offset of the given scrollbar.
                 * @param isHorizontal True if the horizontal scrollbar handle shall be refreshed, false if the vertical one shall be refreshed.
                 * @param scrollOrTransition The scroll position of the given scrollbar axis to which the handle shall be moved or a boolean which indicates whether a transition shall be applied. If undefined or boolean if the current scroll-offset is taken. (if isHorizontal ? scrollLeft : scrollTop)
                 */
                function refreshScrollbarHandleOffset(isHorizontal, scrollOrTransition) {
                    var transition = type(scrollOrTransition) == TYPES.b;
                    var transitionDuration = 250;
                    var isRTLisHorizontal = _isRTL && isHorizontal;
                    var scrollbarVars = getScrollbarVars(isHorizontal);
                    var scrollbarVarsInfo = scrollbarVars._info;
                    var strTranslateBrace = 'translate(';
                    var strTransform = VENDORS._cssProperty('transform');
                    var strTransition = VENDORS._cssProperty('transition');
                    var nativeScroll = isHorizontal ? _viewportElement[_strScrollLeft]() : _viewportElement[_strScrollTop]();
                    var currentScroll = scrollOrTransition === undefined || transition ? nativeScroll : scrollOrTransition;

                    //measure the handle length to respect min & max length
                    var handleLength = scrollbarVarsInfo._handleLength;
                    var trackLength = scrollbarVars._track[0]['offset' + scrollbarVars._Width_Height];
                    var handleTrackDiff = trackLength - handleLength;
                    var handleCSS = {};
                    var transformOffset;
                    var translateValue;

                    //DONT use the variable '_contentScrollSizeCache[scrollbarVars._w_h]' instead of '_viewportElement[0]['scroll' + scrollbarVars._Width_Height]'
                    // because its a bit behind during the small delay when content size updates
                    //(delay = mutationObserverContentLag, if its 0 then this var could be used)
                    var maxScroll = (_viewportElementNative[_strScroll + scrollbarVars._Width_Height] - _viewportElementNative['client' + scrollbarVars._Width_Height]) * (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1); //* -1 if rtl scroll max is negative
                    var getScrollRatio = function (base) {
                        return isNaN(base / maxScroll) ? 0 : MATH.max(0, MATH.min(1, base / maxScroll));
                    };
                    var getHandleOffset = function (scrollRatio) {
                        var offset = handleTrackDiff * scrollRatio;
                        offset = isNaN(offset) ? 0 : offset;
                        offset = (isRTLisHorizontal && !_rtlScrollBehavior.i) ? (trackLength - handleLength - offset) : offset;
                        offset = MATH.max(0, offset);
                        return offset;
                    };
                    var scrollRatio = getScrollRatio(nativeScroll);
                    var unsnappedScrollRatio = getScrollRatio(currentScroll);
                    var handleOffset = getHandleOffset(unsnappedScrollRatio);
                    var snappedHandleOffset = getHandleOffset(scrollRatio);

                    scrollbarVarsInfo._maxScroll = maxScroll;
                    scrollbarVarsInfo._currentScroll = nativeScroll;
                    scrollbarVarsInfo._currentScrollRatio = scrollRatio;

                    if (_supportTransform) {
                        transformOffset = isRTLisHorizontal ? -(trackLength - handleLength - handleOffset) : handleOffset; //in px
                        //transformOffset = (transformOffset / trackLength * 100) * (trackLength / handleLength); //in %
                        translateValue = isHorizontal ? strTranslateBrace + transformOffset + 'px, 0)' : strTranslateBrace + '0, ' + transformOffset + 'px)';

                        handleCSS[strTransform] = translateValue;

                        //apply or clear up transition
                        if (_supportTransition)
                            handleCSS[strTransition] = transition && MATH.abs(handleOffset - scrollbarVarsInfo._handleOffset) > 1 ? getCSSTransitionString(scrollbarVars._handle) + ', ' + (strTransform + _strSpace + transitionDuration + 'ms') : _strEmpty;
                    }
                    else
                        handleCSS[scrollbarVars._left_top] = handleOffset;


                    //only apply css if offset has changed and overflow exists.
                    if (!nativeOverlayScrollbarsAreActive()) {
                        scrollbarVars._handle.css(handleCSS);

                        //clear up transition
                        if (_supportTransform && _supportTransition && transition) {
                            scrollbarVars._handle.one(_strTransitionEndEvent, function () {
                                if (!_destroyed)
                                    scrollbarVars._handle.css(strTransition, _strEmpty);
                            });
                        }
                    }

                    scrollbarVarsInfo._handleOffset = handleOffset;
                    scrollbarVarsInfo._snappedHandleOffset = snappedHandleOffset;
                    scrollbarVarsInfo._trackLength = trackLength;
                }

                /**
                 * Refreshes the interactivity of the given scrollbar element.
                 * @param isTrack True if the track element is the target, false if the handle element is the target.
                 * @param value True for interactivity false for no interactivity.
                 */
                function refreshScrollbarsInteractive(isTrack, value) {
                    var action = value ? 'removeClass' : 'addClass';
                    var element1 = isTrack ? _scrollbarHorizontalTrackElement : _scrollbarHorizontalHandleElement;
                    var element2 = isTrack ? _scrollbarVerticalTrackElement : _scrollbarVerticalHandleElement;
                    var className = isTrack ? _classNameScrollbarTrackOff : _classNameScrollbarHandleOff;

                    element1[action](className);
                    element2[action](className);
                }

                /**
                 * Returns a object which is used for fast access for specific variables.
                 * @param isHorizontal True if the horizontal scrollbar vars shall be accessed, false if the vertical scrollbar vars shall be accessed.
                 * @returns {{wh: string, WH: string, lt: string, _wh: string, _lt: string, t: *, h: *, c: {}, s: *}}
                 */
                function getScrollbarVars(isHorizontal) {
                    return {
                        _width_height: isHorizontal ? _strWidth : _strHeight,
                        _Width_Height: isHorizontal ? 'Width' : 'Height',
                        _left_top: isHorizontal ? _strLeft : _strTop,
                        _Left_Top: isHorizontal ? 'Left' : 'Top',
                        _x_y: isHorizontal ? _strX : _strY,
                        _X_Y: isHorizontal ? 'X' : 'Y',
                        _w_h: isHorizontal ? 'w' : 'h',
                        _l_t: isHorizontal ? 'l' : 't',
                        _track: isHorizontal ? _scrollbarHorizontalTrackElement : _scrollbarVerticalTrackElement,
                        _handle: isHorizontal ? _scrollbarHorizontalHandleElement : _scrollbarVerticalHandleElement,
                        _scrollbar: isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement,
                        _info: isHorizontal ? _scrollHorizontalInfo : _scrollVerticalInfo
                    };
                }


                //==== Scrollbar Corner ====//

                /**
                 * Builds or destroys the scrollbar corner DOM element.
                 * @param destroy Indicates whether the DOM shall be build or destroyed.
                 */
                function setupScrollbarCornerDOM(destroy) {
                    _scrollbarCornerElement = _scrollbarCornerElement || selectOrGenerateDivByClass(_classNameScrollbarCorner, true);

                    if (!destroy) {
                        if (!_domExists) {
                            _hostElement.append(_scrollbarCornerElement);
                        }
                    }
                    else {
                        if (_domExists && _initialized) {
                            removeClass(_scrollbarCornerElement.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
                        }
                        else {
                            remove(_scrollbarCornerElement);
                        }
                    }
                }

                /**
                 * Initializes all scrollbar corner interactivity events.
                 */
                function setupScrollbarCornerEvents() {
                    var insideIFrame = _windowElementNative.top !== _windowElementNative;
                    var mouseDownPosition = {};
                    var mouseDownSize = {};
                    var mouseDownInvertedScale = {};
                    var reconnectMutationObserver;

                    function documentDragMove(event) {
                        if (onMouseTouchDownContinue(event)) {
                            var pageOffset = getCoordinates(event);
                            var hostElementCSS = {};
                            if (_resizeHorizontal || _resizeBoth)
                                hostElementCSS[_strWidth] = (mouseDownSize.w + (pageOffset.x - mouseDownPosition.x) * mouseDownInvertedScale.x);
                            if (_resizeVertical || _resizeBoth)
                                hostElementCSS[_strHeight] = (mouseDownSize.h + (pageOffset.y - mouseDownPosition.y) * mouseDownInvertedScale.y);
                            _hostElement.css(hostElementCSS);
                            COMPATIBILITY.stpP(event);
                        }
                        else {
                            documentMouseTouchUp(event);
                        }
                    }
                    function documentMouseTouchUp(event) {
                        var eventIsTrusted = event !== undefined;

                        setupResponsiveEventListener(_documentElement,
                            [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent],
                            [documentOnSelectStart, documentDragMove, documentMouseTouchUp],
                            true);

                        removeClass(_bodyElement, _classNameDragging);
                        if (_scrollbarCornerElement.releaseCapture)
                            _scrollbarCornerElement.releaseCapture();

                        if (eventIsTrusted) {
                            if (reconnectMutationObserver)
                                connectMutationObservers();
                            _base.update(_strAuto);
                        }
                        reconnectMutationObserver = false;
                    }
                    function onMouseTouchDownContinue(event) {
                        var originalEvent = event.originalEvent || event;
                        var isTouchEvent = originalEvent.touches !== undefined;
                        return _sleeping || _destroyed ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
                    }
                    function getCoordinates(event) {
                        return _msieVersion && insideIFrame ? { x: event.screenX, y: event.screenY } : COMPATIBILITY.page(event);
                    }

                    addDestroyEventListener(_scrollbarCornerElement, _strMouseTouchDownEvent, function (event) {
                        if (onMouseTouchDownContinue(event) && !_resizeNone) {
                            if (_mutationObserversConnected) {
                                reconnectMutationObserver = true;
                                disconnectMutationObservers();
                            }

                            mouseDownPosition = getCoordinates(event);

                            mouseDownSize.w = _hostElementNative[LEXICON.oW] - (!_isBorderBox ? _paddingX : 0);
                            mouseDownSize.h = _hostElementNative[LEXICON.oH] - (!_isBorderBox ? _paddingY : 0);
                            mouseDownInvertedScale = getHostElementInvertedScale();

                            setupResponsiveEventListener(_documentElement,
                                [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent],
                                [documentOnSelectStart, documentDragMove, documentMouseTouchUp]);

                            addClass(_bodyElement, _classNameDragging);
                            if (_scrollbarCornerElement.setCapture)
                                _scrollbarCornerElement.setCapture();

                            COMPATIBILITY.prvD(event);
                            COMPATIBILITY.stpP(event);
                        }
                    });
                }


                //==== Utils ====//

                /**
                 * Calls the callback with the given name. The Context of this callback is always _base (this).
                 * @param name The name of the target which shall be called.
                 * @param args The args with which the callback shall be called.
                 */
                function dispatchCallback(name, args) {
                    if (_initialized) {
                        var callback = _currentPreparedOptions.callbacks[name];
                        var extensionOnName = name;
                        var ext;

                        if (extensionOnName.substr(0, 2) === 'on')
                            extensionOnName = extensionOnName.substr(2, 1).toLowerCase() + extensionOnName.substr(3);

                        if (type(callback) == TYPES.f)
                            callback.call(_base, args);

                        each(_extensions, function () {
                            ext = this;
                            if (type(ext.on) == TYPES.f)
                                ext.on(extensionOnName, args);
                        });
                    }
                    else if (!_destroyed)
                        _callbacksInitQeueue.push({ n: name, a: args });
                }

                /**
                 * Sets the "top, right, bottom, left" properties, with a given prefix, of the given css object.
                 * @param targetCSSObject The css object to which the values shall be applied.
                 * @param prefix The prefix of the "top, right, bottom, left" css properties. (example: 'padding-' is a valid prefix)
                 * @param values A array of values which shall be applied to the "top, right, bottom, left" -properties. The array order is [top, right, bottom, left].
                 * If this argument is undefined the value '' (empty string) will be applied to all properties.
                 */
                function setTopRightBottomLeft(targetCSSObject, prefix, values) {
                    if (values === undefined)
                        values = [_strEmpty, _strEmpty, _strEmpty, _strEmpty];

                    targetCSSObject[prefix + _strTop] = values[0];
                    targetCSSObject[prefix + _strRight] = values[1];
                    targetCSSObject[prefix + _strBottom] = values[2];
                    targetCSSObject[prefix + _strLeft] = values[3];
                }

                /**
                 * Returns the computed CSS transition string from the given element.
                 * @param element The element from which the transition string shall be returned.
                 * @returns {string} The CSS transition string from the given element.
                 */
                function getCSSTransitionString(element) {
                    var transitionStr = VENDORS._cssProperty('transition');
                    var assembledValue = element.css(transitionStr);
                    if (assembledValue)
                        return assembledValue;
                    var regExpString = '\\s*(' + '([^,(]+(\\(.+?\\))?)+' + ')[\\s,]*';
                    var regExpMain = new RegExp(regExpString);
                    var regExpValidate = new RegExp('^(' + regExpString + ')+$');
                    var properties = 'property duration timing-function delay'.split(' ');
                    var result = [];
                    var strResult;
                    var valueArray;
                    var i = 0;
                    var j;
                    var splitCssStyleByComma = function (str) {
                        strResult = [];
                        if (!str.match(regExpValidate))
                            return str;
                        while (str.match(regExpMain)) {
                            strResult.push(RegExp.$1);
                            str = str.replace(regExpMain, _strEmpty);
                        }

                        return strResult;
                    };
                    for (; i < properties[LEXICON.l]; i++) {
                        valueArray = splitCssStyleByComma(element.css(transitionStr + '-' + properties[i]));
                        for (j = 0; j < valueArray[LEXICON.l]; j++)
                            result[j] = (result[j] ? result[j] + _strSpace : _strEmpty) + valueArray[j];
                    }
                    return result.join(', ');
                }

                /**
                 * Calculates the host-elements inverted scale. (invertedScale = 1 / scale)
                 * @returns {{x: number, y: number}} The scale of the host-element.
                 */
                function getHostElementInvertedScale() {
                    var rect = _paddingElementNative[LEXICON.bCR]();
                    return {
                        x: _supportTransform ? 1 / (MATH.round(rect.width) / _paddingElementNative[LEXICON.oW]) || 1 : 1,
                        y: _supportTransform ? 1 / (MATH.round(rect.height) / _paddingElementNative[LEXICON.oH]) || 1 : 1
                    };
                }

                /**
                 * Checks whether the given object is a HTMLElement.
                 * @param o The object which shall be checked.
                 * @returns {boolean} True the given object is a HTMLElement, false otherwise.
                 */
                function isHTMLElement(o) {
                    var strOwnerDocument = 'ownerDocument';
                    var strHTMLElement = 'HTMLElement';
                    var wnd = o && o[strOwnerDocument] ? (o[strOwnerDocument].parentWindow || window) : window;
                    return (
                        typeof wnd[strHTMLElement] == TYPES.o ? o instanceof wnd[strHTMLElement] : //DOM2
                            o && typeof o == TYPES.o && o !== null && o.nodeType === 1 && typeof o.nodeName == TYPES.s
                    );
                }

                /**
                 * Compares 2 arrays and returns the differences between them as a array.
                 * @param a1 The first array which shall be compared.
                 * @param a2 The second array which shall be compared.
                 * @returns {Array} The differences between the two arrays.
                 */
                function getArrayDifferences(a1, a2) {
                    var a = [];
                    var diff = [];
                    var i;
                    var k;
                    for (i = 0; i < a1.length; i++)
                        a[a1[i]] = true;
                    for (i = 0; i < a2.length; i++) {
                        if (a[a2[i]])
                            delete a[a2[i]];
                        else
                            a[a2[i]] = true;
                    }
                    for (k in a)
                        diff.push(k);
                    return diff;
                }

                /**
                 * Returns Zero or the number to which the value can be parsed.
                 * @param value The value which shall be parsed.
                 * @param toFloat Indicates whether the number shall be parsed to a float.
                 */
                function parseToZeroOrNumber(value, toFloat) {
                    var num = toFloat ? parseFloat(value) : parseInt(value, 10);
                    return isNaN(num) ? 0 : num;
                }

                /**
                 * Gets several information of the textarea and returns them as a object or undefined if the browser doesn't support it.
                 * @returns {{cursorRow: Number, cursorCol, rows: Number, cols: number, wRow: number, pos: number, max : number}} or undefined if not supported.
                 */
                function getTextareaInfo() {
                    //read needed values
                    var textareaCursorPosition = _targetElementNative.selectionStart;
                    if (textareaCursorPosition === undefined)
                        return;

                    var textareaValue = _targetElement.val();
                    var textareaLength = textareaValue[LEXICON.l];
                    var textareaRowSplit = textareaValue.split('\n');
                    var textareaLastRow = textareaRowSplit[LEXICON.l];
                    var textareaCurrentCursorRowSplit = textareaValue.substr(0, textareaCursorPosition).split('\n');
                    var widestRow = 0;
                    var textareaLastCol = 0;
                    var cursorRow = textareaCurrentCursorRowSplit[LEXICON.l];
                    var cursorCol = textareaCurrentCursorRowSplit[textareaCurrentCursorRowSplit[LEXICON.l] - 1][LEXICON.l];
                    var rowCols;
                    var i;

                    //get widest Row and the last column of the textarea
                    for (i = 0; i < textareaRowSplit[LEXICON.l]; i++) {
                        rowCols = textareaRowSplit[i][LEXICON.l];
                        if (rowCols > textareaLastCol) {
                            widestRow = i + 1;
                            textareaLastCol = rowCols;
                        }
                    }

                    return {
                        _cursorRow: cursorRow, //cursorRow
                        _cursorColumn: cursorCol, //cursorCol
                        _rows: textareaLastRow, //rows
                        _columns: textareaLastCol, //cols
                        _widestRow: widestRow, //wRow
                        _cursorPosition: textareaCursorPosition, //pos
                        _cursorMax: textareaLength //max
                    };
                }

                /**
                 * Determines whether native overlay scrollbars are active.
                 * @returns {boolean} True if native overlay scrollbars are active, false otherwise.
                 */
                function nativeOverlayScrollbarsAreActive() {
                    return (_ignoreOverlayScrollbarHidingCache && (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y));
                }

                /**
                 * Gets the element which is used to measure the content size.
                 * @returns {*} TextareaCover if target element is textarea else the ContentElement.
                 */
                function getContentMeasureElement() {
                    return _isTextarea ? _textareaCoverElement[0] : _contentElementNative;
                }

                /**
                 * Generates a string which represents a HTML div with the given classes or attributes.
                 * @param classesOrAttrs The class of the div as string or a object which represents the attributes of the div. (The class attribute can also be written as "className".)
                 * @param content The content of the div as string.
                 * @returns {string} The concated string which represents a HTML div and its content.
                 */
                function generateDiv(classesOrAttrs, content) {
                    return '<div ' + (classesOrAttrs ? type(classesOrAttrs) == TYPES.s ?
                        'class="' + classesOrAttrs + '"' :
                        (function () {
                            var key;
                            var attrs = _strEmpty;
                            if (FRAMEWORK.isPlainObject(classesOrAttrs)) {
                                for (key in classesOrAttrs)
                                    attrs += (key === 'c' ? 'class' : key) + '="' + classesOrAttrs[key] + '" ';
                            }
                            return attrs;
                        })() :
                        _strEmpty) +
                        '>' +
                        (content || _strEmpty) +
                        '</div>';
                }

                /**
                 * Selects or generates a div with the given class attribute.
                 * @param className The class names (divided by spaces) of the div which shall be selected or generated.
                 * @param selectParentOrOnlyChildren The parent element from which of the element shall be selected. (if undefined or boolean its hostElement)
                 * If its a boolean it decides whether only the children of the host element shall be selected.
                 * @returns {*} The generated or selected element.
                 */
                function selectOrGenerateDivByClass(className, selectParentOrOnlyChildren) {
                    var onlyChildren = type(selectParentOrOnlyChildren) == TYPES.b;
                    var selectParent = onlyChildren ? _hostElement : (selectParentOrOnlyChildren || _hostElement);

                    return (_domExists && !selectParent[LEXICON.l])
                        ? null
                        : _domExists
                            ? selectParent[onlyChildren ? 'children' : 'find'](_strDot + className.replace(/\s/g, _strDot)).eq(0)
                            : FRAMEWORK(generateDiv(className))
                }

                /**
                 * Gets the value of the given property from the given object.
                 * @param obj The object from which the property value shall be got.
                 * @param path The property of which the value shall be got.
                 * @returns {*} Returns the value of the searched property or undefined of the property wasn't found.
                 */
                function getObjectPropVal(obj, path) {
                    var splits = path.split(_strDot);
                    var i = 0;
                    var val;
                    for (; i < splits.length; i++) {
                        if (!obj[LEXICON.hOP](splits[i]))
                            return;
                        val = obj[splits[i]];
                        if (i < splits.length && type(val) == TYPES.o)
                            obj = val;
                    }
                    return val;
                }

                /**
                 * Sets the value of the given property from the given object.
                 * @param obj The object from which the property value shall be set.
                 * @param path The property of which the value shall be set.
                 * @param val The value of the property which shall be set.
                 */
                function setObjectPropVal(obj, path, val) {
                    var splits = path.split(_strDot);
                    var splitsLength = splits.length;
                    var i = 0;
                    var extendObj = {};
                    var extendObjRoot = extendObj;
                    for (; i < splitsLength; i++)
                        extendObj = extendObj[splits[i]] = i + 1 < splitsLength ? {} : val;
                    FRAMEWORK.extend(obj, extendObjRoot, true);
                }


                //==== Utils Cache ====//

                /**
                 * Compares two values or objects and returns true if they aren't equal.
                 * @param current The first value or object which shall be compared.
                 * @param cache The second value or object which shall be compared.
                 * @param force If true the returned value is always true.
                 * @returns {boolean} True if both values or objects aren't equal or force is true, false otherwise.
                 */
                function checkCache(current, cache, force) {
                    if (force)
                        return force;
                    if (type(current) == TYPES.o && type(cache) == TYPES.o) {
                        for (var prop in current) {
                            if (prop !== 'c') {
                                if (current[LEXICON.hOP](prop) && cache[LEXICON.hOP](prop)) {
                                    if (checkCache(current[prop], cache[prop]))
                                        return true;
                                }
                                else {
                                    return true;
                                }
                            }
                        }
                    }
                    else {
                        return current !== cache;
                    }
                    return false;
                }


                //==== Shortcuts ====//

                /**
                 * jQuery extend method shortcut with a appended "true" as first argument.
                 */
                function extendDeep() {
                    return FRAMEWORK.extend.apply(this, [true].concat([].slice.call(arguments)));
                }

                /**
                 * jQuery addClass method shortcut.
                 */
                function addClass(el, classes) {
                    return _frameworkProto.addClass.call(el, classes);
                }

                /**
                 * jQuery removeClass method shortcut.
                 */
                function removeClass(el, classes) {
                    return _frameworkProto.removeClass.call(el, classes);
                }

                /**
                 * jQuery remove method shortcut.
                 */
                function remove(el) {
                    return _frameworkProto.remove.call(el);
                }

                /**
                 * Finds the first child element with the given selector of the given element.
                 * @param el The root element from which the selector shall be valid.
                 * @param selector The selector of the searched element.
                 * @returns {*} The first element which is a child of the given element and matches the givens selector.
                 */
                function findFirst(el, selector) {
                    return _frameworkProto.find.call(el, selector).eq(0);
                }


                //==== API ====//

                /**
                 * Puts the instance to sleep. It wont respond to any changes in the DOM and won't update. Scrollbar Interactivity is also disabled as well as the resize handle.
                 * This behavior can be reset by calling the update method.
                 */
                _base.sleep = function () {
                    _sleeping = true;
                };

                /**
                 * Updates the plugin and DOM to the current options.
                 * This method should only be called if a update is 100% required.
                 * @param force True if every property shall be updated and the cache shall be ignored.
                 * !INTERNAL USAGE! : force can be a string "auto", "sync" or "zoom" too
                 * if "auto" then before a real update the content size and host element attributes gets checked, and if they changed only then the update method will be called.
                 * if "sync" then the async update process (MutationObserver or UpdateLoop) gets synchronized and a corresponding update takes place if one was needed due to pending changes.
                 * if "zoom" then a update takes place where it's assumed that content and host size changed
                 * @returns {boolean|undefined} 
                 * If force is "sync" then a boolean is returned which indicates whether a update was needed due to pending changes.
                 * If force is "auto" then a boolean is returned whether a update was needed due to attribute or size changes.
                 * undefined otherwise.
                 */
                _base.update = function (force) {
                    if (_destroyed)
                        return;

                    var attrsChanged;
                    var contentSizeC;
                    var isString = type(force) == TYPES.s;
                    var imgElementSelector = 'img';
                    var imgElementLoadEvent = 'load';
                    var doUpdateAuto;
                    var mutHost;
                    var mutContent;

                    if (isString) {
                        if (force === _strAuto) {
                            attrsChanged = meaningfulAttrsChanged();
                            contentSizeC = updateAutoContentSizeChanged();
                            doUpdateAuto = attrsChanged || contentSizeC;
                            if (doUpdateAuto) {
                                update({
                                    _contentSizeChanged: contentSizeC,
                                    _changedOptions: _initialized ? undefined : _currentPreparedOptions
                                });
                            }
                        }
                        else if (force === _strSync) {
                            if (_mutationObserversConnected) {
                                mutHost = _mutationObserverHostCallback(_mutationObserverHost.takeRecords());
                                mutContent = _mutationObserverContentCallback(_mutationObserverContent.takeRecords());
                            }
                            else {
                                mutHost = _base.update(_strAuto);
                            }
                        }
                        else if (force === 'zoom') {
                            update({
                                _hostSizeChanged: true,
                                _contentSizeChanged: true
                            });
                        }
                    }
                    else {
                        force = _sleeping || force;
                        _sleeping = false;
                        if (!_base.update(_strSync) || force)
                            update({ _force: force });
                    }
                    if (!_isTextarea) {
                        _contentElement.find(imgElementSelector).each(function (i, el) {
                            var index = COMPATIBILITY.inA(el, _imgs);
                            if (index === -1)
                                FRAMEWORK(el).off(imgElementLoadEvent, imgOnLoad).on(imgElementLoadEvent, imgOnLoad);
                        });
                    }
                    return doUpdateAuto || mutHost || mutContent;
                };

                /**
                 Gets or sets the current options. The update method will be called automatically if new options were set.
                 * @param newOptions If new options are given, then the new options will be set, if new options aren't given (undefined or a not a plain object) then the current options will be returned.
                 * @param value If new options is a property path string, then this value will be used to set the option to which the property path string leads.
                 * @returns {*}
                 */
                _base.options = function (newOptions, value) {
                    var option = {};
                    var changedOps;

                    //return current options if newOptions are undefined or empty
                    if (FRAMEWORK.isEmptyObject(newOptions) || !FRAMEWORK.isPlainObject(newOptions)) {
                        if (type(newOptions) == TYPES.s) {
                            if (arguments.length > 1) {
                                setObjectPropVal(option, newOptions, value);
                                changedOps = setOptions(option);
                            }
                            else
                                return getObjectPropVal(_currentOptions, newOptions);
                        }
                        else
                            return _currentOptions;
                    }
                    else {
                        changedOps = setOptions(newOptions);
                    }

                    if (!FRAMEWORK.isEmptyObject(changedOps)) {
                        update({ _changedOptions: changedOps });
                    }
                };

                /**
                 * Restore the DOM, disconnects all observers, remove all resize observers and put the instance to sleep.
                 */
                _base.destroy = function () {
                    if (_destroyed)
                        return;

                    //remove this instance from auto update loop
                    autoUpdateLoop.remove(_base);

                    //disconnect all mutation observers
                    disconnectMutationObservers();

                    //remove all resize observers
                    setupResizeObserver(_sizeObserverElement);
                    setupResizeObserver(_sizeAutoObserverElement);

                    //remove all extensions
                    for (var extName in _extensions)
                        _base.removeExt(extName);

                    //remove all 'destroy' events
                    while (_destroyEvents[LEXICON.l] > 0)
                        _destroyEvents.pop()();

                    //remove all events from host element
                    setupHostMouseTouchEvents(true);

                    //remove all helper / detection elements
                    if (_contentGlueElement)
                        remove(_contentGlueElement);
                    if (_contentArrangeElement)
                        remove(_contentArrangeElement);
                    if (_sizeAutoObserverAdded)
                        remove(_sizeAutoObserverElement);

                    //remove all generated DOM
                    setupScrollbarsDOM(true);
                    setupScrollbarCornerDOM(true);
                    setupStructureDOM(true);

                    //remove all generated image load events
                    for (var i = 0; i < _imgs[LEXICON.l]; i++)
                        FRAMEWORK(_imgs[i]).off('load', imgOnLoad);
                    _imgs = undefined;

                    _destroyed = true;
                    _sleeping = true;

                    //remove this instance from the instances list
                    INSTANCES(pluginTargetElement, 0);
                    dispatchCallback('onDestroyed');

                    //remove all properties and methods
                    //for (var property in _base)
                    //    delete _base[property];
                    //_base = undefined;
                };

                /**
                 * Scrolls to a given position or element.
                 * @param coordinates
                 * 1. Can be "coordinates" which looks like:
                 *    { x : ?, y : ? } OR          Object with x and y properties
                 *    { left : ?, top : ? } OR     Object with left and top properties
                 *    { l : ?, t : ? } OR          Object with l and t properties
                 *    [ ?, ? ] OR                  Array where the first two element are the coordinates (first is x, second is y)
                 *    ?                            A single value which stays for both axis
                 *    A value can be a number, a string or a calculation.
                 *
                 *    Operators:
                 *    [NONE]  The current scroll will be overwritten by the value.
                 *    '+='    The value will be added to the current scroll offset
                 *    '-='    The value will be subtracted from the current scroll offset
                 *    '*='    The current scroll wil be multiplicated by the value.
                 *    '/='    The current scroll wil be divided by the value.
                 *
                 *    Units:
                 *    [NONE]  The value is the final scroll amount.                   final = (value * 1)
                 *    'px'    Same as none
                 *    '%'     The value is dependent on the current scroll value.     final = ((currentScrollValue / 100) * value)
                 *    'vw'    The value is multiplicated by the viewport width.       final = (value * viewportWidth)
                 *    'vh'    The value is multiplicated by the viewport height.      final = (value * viewportHeight)
                 *
                 *    example final values:
                 *    200, '200px', '50%', '1vw', '1vh', '+=200', '/=1vw', '*=2px', '-=5vh', '+=33%', '+= 50% - 2px', '-= 1vw - 50%'
                 *
                 * 2. Can be a HTML or jQuery element:
                 *    The final scroll offset is the offset (without margin) of the given HTML / jQuery element.
                 *
                 * 3. Can be a object with a HTML or jQuery element with additional settings:
                 *    {
                 *      el : [HTMLElement, jQuery element],             MUST be specified, else this object isn't valid.
                 *      scroll : [string, array, object],               Default value is 'always'.
                 *      block : [string, array, object],                Default value is 'begin'.
                 *      margin : [number, boolean, array, object]       Default value is false.
                 *    }
                 *
                 *    Possible scroll settings are:
                 *    'always'      Scrolls always.
                 *    'ifneeded'    Scrolls only if the element isnt fully in view.
                 *    'never'       Scrolls never.
                 *
                 *    Possible block settings are:
                 *    'begin'   Both axis shall be docked to the "begin" edge. - The element will be docked to the top and left edge of the viewport.
                 *    'end'     Both axis shall be docked to the "end" edge. - The element will be docked to the bottom and right edge of the viewport. (If direction is RTL to the bottom and left edge.)
                 *    'center'  Both axis shall be docked to "center". - The element will be centered in the viewport.
                 *    'nearest' The element will be docked to the nearest edge(s).
                 *
                 *    Possible margin settings are: -- The actual margin of the element wont be affect, this option affects only the final scroll offset.
                 *    [BOOLEAN]                                         If true the css margin of the element will be used, if false no margin will be used.
                 *    [NUMBER]                                          The margin will be used for all edges.
                 *
                 * @param duration The duration of the scroll animation, OR a jQuery animation configuration object.
                 * @param easing The animation easing.
                 * @param complete The animation complete callback.
                 * @returns {{
                 *   position: {x: number, y: number},
                 *   ratio: {x: number, y: number},
                 *   max: {x: number, y: number},
                 *   handleOffset: {x: number, y: number},
                 *   handleLength: {x: number, y: number},
                 *   handleLengthRatio: {x: number, y: number}, t
                 *   rackLength: {x: number, y: number},
                 *   isRTL: boolean,
                 *   isRTLNormalized: boolean
                 *  }}
                 */
                _base.scroll = function (coordinates, duration, easing, complete) {
                    if (arguments.length === 0 || coordinates === undefined) {
                        var infoX = _scrollHorizontalInfo;
                        var infoY = _scrollVerticalInfo;
                        var normalizeInvert = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.i;
                        var normalizeNegate = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.n;
                        var scrollX = infoX._currentScroll;
                        var scrollXRatio = infoX._currentScrollRatio;
                        var maxScrollX = infoX._maxScroll;
                        scrollXRatio = normalizeInvert ? 1 - scrollXRatio : scrollXRatio;
                        scrollX = normalizeInvert ? maxScrollX - scrollX : scrollX;
                        scrollX *= normalizeNegate ? -1 : 1;
                        maxScrollX *= normalizeNegate ? -1 : 1;

                        return {
                            position: {
                                x: scrollX,
                                y: infoY._currentScroll
                            },
                            ratio: {
                                x: scrollXRatio,
                                y: infoY._currentScrollRatio
                            },
                            max: {
                                x: maxScrollX,
                                y: infoY._maxScroll
                            },
                            handleOffset: {
                                x: infoX._handleOffset,
                                y: infoY._handleOffset
                            },
                            handleLength: {
                                x: infoX._handleLength,
                                y: infoY._handleLength
                            },
                            handleLengthRatio: {
                                x: infoX._handleLengthRatio,
                                y: infoY._handleLengthRatio
                            },
                            trackLength: {
                                x: infoX._trackLength,
                                y: infoY._trackLength
                            },
                            snappedHandleOffset: {
                                x: infoX._snappedHandleOffset,
                                y: infoY._snappedHandleOffset
                            },
                            isRTL: _isRTL,
                            isRTLNormalized: _normalizeRTLCache
                        };
                    }

                    _base.update(_strSync);

                    var normalizeRTL = _normalizeRTLCache;
                    var coordinatesXAxisProps = [_strX, _strLeft, 'l'];
                    var coordinatesYAxisProps = [_strY, _strTop, 't'];
                    var coordinatesOperators = ['+=', '-=', '*=', '/='];
                    var durationIsObject = type(duration) == TYPES.o;
                    var completeCallback = durationIsObject ? duration.complete : complete;
                    var i;
                    var finalScroll = {};
                    var specialEasing = {};
                    var doScrollLeft;
                    var doScrollTop;
                    var animationOptions;
                    var strEnd = 'end';
                    var strBegin = 'begin';
                    var strCenter = 'center';
                    var strNearest = 'nearest';
                    var strAlways = 'always';
                    var strNever = 'never';
                    var strIfNeeded = 'ifneeded';
                    var strLength = LEXICON.l;
                    var settingsAxis;
                    var settingsScroll;
                    var settingsBlock;
                    var settingsMargin;
                    var finalElement;
                    var elementObjSettingsAxisValues = [_strX, _strY, 'xy', 'yx'];
                    var elementObjSettingsBlockValues = [strBegin, strEnd, strCenter, strNearest];
                    var elementObjSettingsScrollValues = [strAlways, strNever, strIfNeeded];
                    var coordinatesIsElementObj = coordinates[LEXICON.hOP]('el');
                    var possibleElement = coordinatesIsElementObj ? coordinates.el : coordinates;
                    var possibleElementIsJQuery = possibleElement instanceof FRAMEWORK || JQUERY ? possibleElement instanceof JQUERY : false;
                    var possibleElementIsHTMLElement = possibleElementIsJQuery ? false : isHTMLElement(possibleElement);
                    var updateScrollbarInfos = function () {
                        if (doScrollLeft)
                            refreshScrollbarHandleOffset(true);
                        if (doScrollTop)
                            refreshScrollbarHandleOffset(false);
                    };
                    var proxyCompleteCallback = type(completeCallback) != TYPES.f ? undefined : function () {
                        updateScrollbarInfos();
                        completeCallback();
                    };
                    function checkSettingsStringValue(currValue, allowedValues) {
                        for (i = 0; i < allowedValues[strLength]; i++) {
                            if (currValue === allowedValues[i])
                                return true;
                        }
                        return false;
                    }
                    function getRawScroll(isX, coordinates) {
                        var coordinateProps = isX ? coordinatesXAxisProps : coordinatesYAxisProps;
                        coordinates = type(coordinates) == TYPES.s || type(coordinates) == TYPES.n ? [coordinates, coordinates] : coordinates;

                        if (type(coordinates) == TYPES.a)
                            return isX ? coordinates[0] : coordinates[1];
                        else if (type(coordinates) == TYPES.o) {
                            //decides RTL normalization "hack" with .n
                            //normalizeRTL = type(coordinates.n) == TYPES.b ? coordinates.n : normalizeRTL; 
                            for (i = 0; i < coordinateProps[strLength]; i++)
                                if (coordinateProps[i] in coordinates)
                                    return coordinates[coordinateProps[i]];
                        }
                    }
                    function getFinalScroll(isX, rawScroll) {
                        var isString = type(rawScroll) == TYPES.s;
                        var operator;
                        var amount;
                        var scrollInfo = isX ? _scrollHorizontalInfo : _scrollVerticalInfo;
                        var currScroll = scrollInfo._currentScroll;
                        var maxScroll = scrollInfo._maxScroll;
                        var mult = ' * ';
                        var finalValue;
                        var isRTLisX = _isRTL && isX;
                        var normalizeShortcuts = isRTLisX && _rtlScrollBehavior.n && !normalizeRTL;
                        var strReplace = 'replace';
                        var evalFunc = eval;
                        var possibleOperator;
                        if (isString) {
                            //check operator
                            if (rawScroll[strLength] > 2) {
                                possibleOperator = rawScroll.substr(0, 2);
                                if (inArray(possibleOperator, coordinatesOperators) > -1)
                                    operator = possibleOperator;
                            }

                            //calculate units and shortcuts
                            rawScroll = operator ? rawScroll.substr(2) : rawScroll;
                            rawScroll = rawScroll
                            [strReplace](/min/g, 0) //'min' = 0%
                            [strReplace](/</g, 0)   //'<'   = 0%
                            [strReplace](/max/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)    //'max' = 100%
                            [strReplace](/>/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)      //'>'   = 100%
                            [strReplace](/px/g, _strEmpty)
                            [strReplace](/%/g, mult + (maxScroll * (isRTLisX && _rtlScrollBehavior.n ? -1 : 1) / 100.0))
                            [strReplace](/vw/g, mult + _viewportSize.w)
                            [strReplace](/vh/g, mult + _viewportSize.h);
                            amount = parseToZeroOrNumber(isNaN(rawScroll) ? parseToZeroOrNumber(evalFunc(rawScroll), true).toFixed() : rawScroll);
                        }
                        else {
                            amount = rawScroll;
                        }

                        if (amount !== undefined && !isNaN(amount) && type(amount) == TYPES.n) {
                            var normalizeIsRTLisX = normalizeRTL && isRTLisX;
                            var operatorCurrScroll = currScroll * (normalizeIsRTLisX && _rtlScrollBehavior.n ? -1 : 1);
                            var invert = normalizeIsRTLisX && _rtlScrollBehavior.i;
                            var negate = normalizeIsRTLisX && _rtlScrollBehavior.n;
                            operatorCurrScroll = invert ? (maxScroll - operatorCurrScroll) : operatorCurrScroll;
                            switch (operator) {
                                case '+=':
                                    finalValue = operatorCurrScroll + amount;
                                    break;
                                case '-=':
                                    finalValue = operatorCurrScroll - amount;
                                    break;
                                case '*=':
                                    finalValue = operatorCurrScroll * amount;
                                    break;
                                case '/=':
                                    finalValue = operatorCurrScroll / amount;
                                    break;
                                default:
                                    finalValue = amount;
                                    break;
                            }
                            finalValue = invert ? maxScroll - finalValue : finalValue;
                            finalValue *= negate ? -1 : 1;
                            finalValue = isRTLisX && _rtlScrollBehavior.n ? MATH.min(0, MATH.max(maxScroll, finalValue)) : MATH.max(0, MATH.min(maxScroll, finalValue));
                        }
                        return finalValue === currScroll ? undefined : finalValue;
                    }
                    function getPerAxisValue(value, valueInternalType, defaultValue, allowedValues) {
                        var resultDefault = [defaultValue, defaultValue];
                        var valueType = type(value);
                        var valueArrLength;
                        var valueArrItem;

                        //value can be [ string, or array of two strings ]
                        if (valueType == valueInternalType) {
                            value = [value, value];
                        }
                        else if (valueType == TYPES.a) {
                            valueArrLength = value[strLength];
                            if (valueArrLength > 2 || valueArrLength < 1)
                                value = resultDefault;
                            else {
                                if (valueArrLength === 1)
                                    value[1] = defaultValue;
                                for (i = 0; i < valueArrLength; i++) {
                                    valueArrItem = value[i];
                                    if (type(valueArrItem) != valueInternalType || !checkSettingsStringValue(valueArrItem, allowedValues)) {
                                        value = resultDefault;
                                        break;
                                    }
                                }
                            }
                        }
                        else if (valueType == TYPES.o)
                            value = [value[_strX] || defaultValue, value[_strY] || defaultValue];
                        else
                            value = resultDefault;
                        return { x: value[0], y: value[1] };
                    }
                    function generateMargin(marginTopRightBottomLeftArray) {
                        var result = [];
                        var currValue;
                        var currValueType;
                        var valueDirections = [_strTop, _strRight, _strBottom, _strLeft];
                        for (i = 0; i < marginTopRightBottomLeftArray[strLength]; i++) {
                            if (i === valueDirections[strLength])
                                break;
                            currValue = marginTopRightBottomLeftArray[i];
                            currValueType = type(currValue);
                            if (currValueType == TYPES.b)
                                result.push(currValue ? parseToZeroOrNumber(finalElement.css(_strMarginMinus + valueDirections[i])) : 0);
                            else
                                result.push(currValueType == TYPES.n ? currValue : 0);
                        }
                        return result;
                    }

                    if (possibleElementIsJQuery || possibleElementIsHTMLElement) {
                        //get settings
                        var margin = coordinatesIsElementObj ? coordinates.margin : 0;
                        var axis = coordinatesIsElementObj ? coordinates.axis : 0;
                        var scroll = coordinatesIsElementObj ? coordinates.scroll : 0;
                        var block = coordinatesIsElementObj ? coordinates.block : 0;
                        var marginDefault = [0, 0, 0, 0];
                        var marginType = type(margin);
                        var marginLength;
                        finalElement = possibleElementIsJQuery ? possibleElement : FRAMEWORK(possibleElement);

                        if (finalElement[strLength] > 0) {
                            //margin can be [ boolean, number, array of 2, array of 4, object ]
                            if (marginType == TYPES.n || marginType == TYPES.b)
                                margin = generateMargin([margin, margin, margin, margin]);
                            else if (marginType == TYPES.a) {
                                marginLength = margin[strLength];
                                if (marginLength === 2)
                                    margin = generateMargin([margin[0], margin[1], margin[0], margin[1]]);
                                else if (marginLength >= 4)
                                    margin = generateMargin(margin);
                                else
                                    margin = marginDefault;
                            }
                            else if (marginType == TYPES.o)
                                margin = generateMargin([margin[_strTop], margin[_strRight], margin[_strBottom], margin[_strLeft]]);
                            else
                                margin = marginDefault;

                            //block = type(block) === TYPES.b ? block ? [ strNearest, strBegin ] : [ strNearest, strEnd ] : block;
                            settingsAxis = checkSettingsStringValue(axis, elementObjSettingsAxisValues) ? axis : 'xy';
                            settingsScroll = getPerAxisValue(scroll, TYPES.s, strAlways, elementObjSettingsScrollValues);
                            settingsBlock = getPerAxisValue(block, TYPES.s, strBegin, elementObjSettingsBlockValues);
                            settingsMargin = margin;

                            var viewportScroll = {
                                l: _scrollHorizontalInfo._currentScroll,
                                t: _scrollVerticalInfo._currentScroll
                            };
                            // use padding element instead of viewport element because padding element has never padding, margin or position applied.
                            var viewportOffset = _paddingElement.offset();

                            //get coordinates
                            var elementOffset = finalElement.offset();
                            var doNotScroll = {
                                x: settingsScroll.x == strNever || settingsAxis == _strY,
                                y: settingsScroll.y == strNever || settingsAxis == _strX
                            };
                            elementOffset[_strTop] -= settingsMargin[0];
                            elementOffset[_strLeft] -= settingsMargin[3];
                            var elementScrollCoordinates = {
                                x: MATH.round(elementOffset[_strLeft] - viewportOffset[_strLeft] + viewportScroll.l),
                                y: MATH.round(elementOffset[_strTop] - viewportOffset[_strTop] + viewportScroll.t)
                            };
                            if (_isRTL) {
                                if (!_rtlScrollBehavior.n && !_rtlScrollBehavior.i)
                                    elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + viewportScroll.l);
                                if (_rtlScrollBehavior.n && normalizeRTL)
                                    elementScrollCoordinates.x *= -1;
                                if (_rtlScrollBehavior.i && normalizeRTL)
                                    elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + (_scrollHorizontalInfo._maxScroll - viewportScroll.l));
                            }

                            //measuring is required
                            if (settingsBlock.x != strBegin || settingsBlock.y != strBegin || settingsScroll.x == strIfNeeded || settingsScroll.y == strIfNeeded || _isRTL) {
                                var measuringElm = finalElement[0];
                                var rawElementSize = _supportTransform ? measuringElm[LEXICON.bCR]() : {
                                    width: measuringElm[LEXICON.oW],
                                    height: measuringElm[LEXICON.oH]
                                };
                                var elementSize = {
                                    w: rawElementSize[_strWidth] + settingsMargin[3] + settingsMargin[1],
                                    h: rawElementSize[_strHeight] + settingsMargin[0] + settingsMargin[2]
                                };
                                var finalizeBlock = function (isX) {
                                    var vars = getScrollbarVars(isX);
                                    var wh = vars._w_h;
                                    var lt = vars._left_top;
                                    var xy = vars._x_y;
                                    var blockIsEnd = settingsBlock[xy] == (isX ? _isRTL ? strBegin : strEnd : strEnd);
                                    var blockIsCenter = settingsBlock[xy] == strCenter;
                                    var blockIsNearest = settingsBlock[xy] == strNearest;
                                    var scrollNever = settingsScroll[xy] == strNever;
                                    var scrollIfNeeded = settingsScroll[xy] == strIfNeeded;
                                    var vpSize = _viewportSize[wh];
                                    var vpOffset = viewportOffset[lt];
                                    var elSize = elementSize[wh];
                                    var elOffset = elementOffset[lt];
                                    var divide = blockIsCenter ? 2 : 1;
                                    var elementCenterOffset = elOffset + (elSize / 2);
                                    var viewportCenterOffset = vpOffset + (vpSize / 2);
                                    var isInView =
                                        elSize <= vpSize
                                        && elOffset >= vpOffset
                                        && elOffset + elSize <= vpOffset + vpSize;

                                    if (scrollNever)
                                        doNotScroll[xy] = true;
                                    else if (!doNotScroll[xy]) {
                                        if (blockIsNearest || scrollIfNeeded) {
                                            doNotScroll[xy] = scrollIfNeeded ? isInView : false;
                                            blockIsEnd = elSize < vpSize ? elementCenterOffset > viewportCenterOffset : elementCenterOffset < viewportCenterOffset;
                                        }
                                        elementScrollCoordinates[xy] -= blockIsEnd || blockIsCenter ? ((vpSize / divide) - (elSize / divide)) * (isX && _isRTL && normalizeRTL ? -1 : 1) : 0;
                                    }
                                };
                                finalizeBlock(true);
                                finalizeBlock(false);
                            }

                            if (doNotScroll.y)
                                delete elementScrollCoordinates.y;
                            if (doNotScroll.x)
                                delete elementScrollCoordinates.x;

                            coordinates = elementScrollCoordinates;
                        }
                    }

                    finalScroll[_strScrollLeft] = getFinalScroll(true, getRawScroll(true, coordinates));
                    finalScroll[_strScrollTop] = getFinalScroll(false, getRawScroll(false, coordinates));
                    doScrollLeft = finalScroll[_strScrollLeft] !== undefined;
                    doScrollTop = finalScroll[_strScrollTop] !== undefined;

                    if ((doScrollLeft || doScrollTop) && (duration > 0 || durationIsObject)) {
                        if (durationIsObject) {
                            duration.complete = proxyCompleteCallback;
                            _viewportElement.animate(finalScroll, duration);
                        }
                        else {
                            animationOptions = {
                                duration: duration,
                                complete: proxyCompleteCallback
                            };
                            if (type(easing) == TYPES.a || FRAMEWORK.isPlainObject(easing)) {
                                specialEasing[_strScrollLeft] = easing[0] || easing.x;
                                specialEasing[_strScrollTop] = easing[1] || easing.y;
                                animationOptions.specialEasing = specialEasing;
                            }
                            else {
                                animationOptions.easing = easing;
                            }
                            _viewportElement.animate(finalScroll, animationOptions);
                        }
                    }
                    else {
                        if (doScrollLeft)
                            _viewportElement[_strScrollLeft](finalScroll[_strScrollLeft]);
                        if (doScrollTop)
                            _viewportElement[_strScrollTop](finalScroll[_strScrollTop]);
                        updateScrollbarInfos();
                    }
                };

                /**
                 * Stops all scroll animations.
                 * @returns {*} The current OverlayScrollbars instance (for chaining).
                 */
                _base.scrollStop = function (param1, param2, param3) {
                    _viewportElement.stop(param1, param2, param3);
                    return _base;
                };

                /**
                 * Returns all relevant elements.
                 * @param elementName The name of the element which shall be returned.
                 * @returns {{target: *, host: *, padding: *, viewport: *, content: *, scrollbarHorizontal: {scrollbar: *, track: *, handle: *}, scrollbarVertical: {scrollbar: *, track: *, handle: *}, scrollbarCorner: *} | *}
                 */
                _base.getElements = function (elementName) {
                    var obj = {
                        target: _targetElementNative,
                        host: _hostElementNative,
                        padding: _paddingElementNative,
                        viewport: _viewportElementNative,
                        content: _contentElementNative,
                        scrollbarHorizontal: {
                            scrollbar: _scrollbarHorizontalElement[0],
                            track: _scrollbarHorizontalTrackElement[0],
                            handle: _scrollbarHorizontalHandleElement[0]
                        },
                        scrollbarVertical: {
                            scrollbar: _scrollbarVerticalElement[0],
                            track: _scrollbarVerticalTrackElement[0],
                            handle: _scrollbarVerticalHandleElement[0]
                        },
                        scrollbarCorner: _scrollbarCornerElement[0]
                    };
                    return type(elementName) == TYPES.s ? getObjectPropVal(obj, elementName) : obj;
                };

                /**
                 * Returns a object which describes the current state of this instance.
                 * @param stateProperty A specific property from the state object which shall be returned.
                 * @returns {{widthAuto, heightAuto, overflowAmount, hideOverflow, hasOverflow, contentScrollSize, viewportSize, hostSize, autoUpdate} | *}
                 */
                _base.getState = function (stateProperty) {
                    function prepare(obj) {
                        if (!FRAMEWORK.isPlainObject(obj))
                            return obj;
                        var extended = extendDeep({}, obj);
                        var changePropertyName = function (from, to) {
                            if (extended[LEXICON.hOP](from)) {
                                extended[to] = extended[from];
                                delete extended[from];
                            }
                        };
                        changePropertyName('w', _strWidth); //change w to width
                        changePropertyName('h', _strHeight); //change h to height
                        delete extended.c; //delete c (the 'changed' prop)
                        return extended;
                    };
                    var obj = {
                        destroyed: !!prepare(_destroyed),
                        sleeping: !!prepare(_sleeping),
                        autoUpdate: prepare(!_mutationObserversConnected),
                        widthAuto: prepare(_widthAutoCache),
                        heightAuto: prepare(_heightAutoCache),
                        padding: prepare(_cssPaddingCache),
                        overflowAmount: prepare(_overflowAmountCache),
                        hideOverflow: prepare(_hideOverflowCache),
                        hasOverflow: prepare(_hasOverflowCache),
                        contentScrollSize: prepare(_contentScrollSizeCache),
                        viewportSize: prepare(_viewportSize),
                        hostSize: prepare(_hostSizeCache),
                        documentMixed: prepare(_documentMixed)
                    };
                    return type(stateProperty) == TYPES.s ? getObjectPropVal(obj, stateProperty) : obj;
                };

                /**
                 * Gets all or specific extension instance.
                 * @param extName The name of the extension from which the instance shall be got.
                 * @returns {{}} The instance of the extension with the given name or undefined if the instance couldn't be found.
                 */
                _base.ext = function (extName) {
                    var result;
                    var privateMethods = _extensionsPrivateMethods.split(' ');
                    var i = 0;
                    if (type(extName) == TYPES.s) {
                        if (_extensions[LEXICON.hOP](extName)) {
                            result = extendDeep({}, _extensions[extName]);
                            for (; i < privateMethods.length; i++)
                                delete result[privateMethods[i]];
                        }
                    }
                    else {
                        result = {};
                        for (i in _extensions)
                            result[i] = extendDeep({}, _base.ext(i));
                    }
                    return result;
                };

                /**
                 * Adds a extension to this instance.
                 * @param extName The name of the extension which shall be added.
                 * @param extensionOptions The extension options which shall be used.
                 * @returns {{}} The instance of the added extension or undefined if the extension couldn't be added properly.
                 */
                _base.addExt = function (extName, extensionOptions) {
                    var registeredExtensionObj = _plugin.extension(extName);
                    var instance;
                    var instanceAdded;
                    var instanceContract;
                    var contractResult;
                    var contractFulfilled = true;
                    if (registeredExtensionObj) {
                        if (!_extensions[LEXICON.hOP](extName)) {
                            instance = registeredExtensionObj.extensionFactory.call(_base,
                                extendDeep({}, registeredExtensionObj.defaultOptions),
                                FRAMEWORK,
                                COMPATIBILITY);

                            if (instance) {
                                instanceContract = instance.contract;
                                if (type(instanceContract) == TYPES.f) {
                                    contractResult = instanceContract(window);
                                    contractFulfilled = type(contractResult) == TYPES.b ? contractResult : contractFulfilled;
                                }
                                if (contractFulfilled) {
                                    _extensions[extName] = instance;
                                    instanceAdded = instance.added;
                                    if (type(instanceAdded) == TYPES.f)
                                        instanceAdded(extensionOptions);

                                    return _base.ext(extName);
                                }
                            }
                        }
                        else
                            return _base.ext(extName);
                    }
                    else
                        console.warn("A extension with the name \"" + extName + "\" isn't registered.");
                };

                /**
                 * Removes a extension from this instance.
                 * @param extName The name of the extension which shall be removed.
                 * @returns {boolean} True if the extension was removed, false otherwise e.g. if the extension wasn't added before.
                 */
                _base.removeExt = function (extName) {
                    var instance = _extensions[extName];
                    var instanceRemoved;
                    if (instance) {
                        delete _extensions[extName];

                        instanceRemoved = instance.removed;
                        if (type(instanceRemoved) == TYPES.f)
                            instanceRemoved();

                        return true;
                    }
                    return false;
                };

                /**
                 * Constructs the plugin.
                 * @param targetElement The element to which the plugin shall be applied.
                 * @param options The initial options of the plugin.
                 * @param extensions The extension(s) which shall be added right after the initialization.
                 * @returns {boolean} True if the plugin was successfully initialized, false otherwise.
                 */
                function construct(targetElement, options, extensions) {
                    _defaultOptions = globals.defaultOptions;
                    _nativeScrollbarStyling = globals.nativeScrollbarStyling;
                    _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize);
                    _nativeScrollbarIsOverlaid = extendDeep({}, globals.nativeScrollbarIsOverlaid);
                    _overlayScrollbarDummySize = extendDeep({}, globals.overlayScrollbarDummySize);
                    _rtlScrollBehavior = extendDeep({}, globals.rtlScrollBehavior);

                    //parse & set options but don't update
                    setOptions(extendDeep({}, _defaultOptions, options));

                    _cssCalc = globals.cssCalc;
                    _msieVersion = globals.msie;
                    _autoUpdateRecommended = globals.autoUpdateRecommended;
                    _supportTransition = globals.supportTransition;
                    _supportTransform = globals.supportTransform;
                    _supportPassiveEvents = globals.supportPassiveEvents;
                    _supportResizeObserver = globals.supportResizeObserver;
                    _supportMutationObserver = globals.supportMutationObserver;
                    _restrictedMeasuring = globals.restrictedMeasuring;
                    _documentElement = FRAMEWORK(targetElement.ownerDocument);
                    _documentElementNative = _documentElement[0];
                    _windowElement = FRAMEWORK(_documentElementNative.defaultView || _documentElementNative.parentWindow);
                    _windowElementNative = _windowElement[0];
                    _htmlElement = findFirst(_documentElement, 'html');
                    _bodyElement = findFirst(_htmlElement, 'body');
                    _targetElement = FRAMEWORK(targetElement);
                    _targetElementNative = _targetElement[0];
                    _isTextarea = _targetElement.is('textarea');
                    _isBody = _targetElement.is('body');
                    _documentMixed = _documentElementNative !== document;

                    /* On a div Element The if checks only whether:
                     * - the targetElement has the class "os-host"
                     * - the targetElement has a a child with the class "os-padding"
                     * 
                     * If that's the case, its assumed the DOM has already the following structure:
                     * (The ".os-host" element is the targetElement)
                     *
                     *  <div class="os-host">
                     *      <div class="os-resize-observer-host"></div>
                     *      <div class="os-padding">
                     *          <div class="os-viewport">
                     *              <div class="os-content"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-horizontal ">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-vertical">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar-corner"></div>
                     *  </div>
                     *
                     * =====================================================================================
                     * 
                     * On a Textarea Element The if checks only whether:
                     * - the targetElement has the class "os-textarea" 
                     * - the targetElement is inside a element with the class "os-content" 
                     * 
                     * If that's the case, its assumed the DOM has already the following structure:
                     * (The ".os-textarea" (textarea) element is the targetElement)
                     *
                     *  <div class="os-host-textarea">
                     *      <div class="os-resize-observer-host"></div>
                     *      <div class="os-padding os-text-inherit">
                     *          <div class="os-viewport os-text-inherit">
                     *              <div class="os-content os-text-inherit">
                     *                  <div class="os-textarea-cover"></div>
                     *                  <textarea class="os-textarea os-text-inherit"></textarea>
                     *              </div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-horizontal ">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar os-scrollbar-vertical">
                     *          <div class="os-scrollbar-track">
                     *              <div class="os-scrollbar-handle"></div>
                     *          </div>
                     *      </div>
                     *      <div class="os-scrollbar-corner"></div>
                     *  </div>
                     */
                    _domExists = _isTextarea
                        ? _targetElement.hasClass(_classNameTextareaElement) && _targetElement.parent().hasClass(_classNameContentElement)
                        : _targetElement.hasClass(_classNameHostElement) && _targetElement.children(_strDot + _classNamePaddingElement)[LEXICON.l];

                    var initBodyScroll;
                    var bodyMouseTouchDownListener;

                    //check if the plugin hasn't to be initialized
                    if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !_currentPreparedOptions.nativeScrollbarsOverlaid.initialize) {
                        dispatchCallback('onInitializationWithdrawn');
                        if (_domExists) {
                            setupStructureDOM(true);
                            setupScrollbarsDOM(true);
                            setupScrollbarCornerDOM(true);
                        }

                        _destroyed = true;
                        _sleeping = true;

                        return _base;
                    }

                    if (_isBody) {
                        initBodyScroll = {};
                        initBodyScroll.l = MATH.max(_targetElement[_strScrollLeft](), _htmlElement[_strScrollLeft](), _windowElement[_strScrollLeft]());
                        initBodyScroll.t = MATH.max(_targetElement[_strScrollTop](), _htmlElement[_strScrollTop](), _windowElement[_strScrollTop]());

                        bodyMouseTouchDownListener = function () {
                            _viewportElement.removeAttr('tabindex');
                            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, true, true);
                        }
                    }

                    //build OverlayScrollbars DOM
                    setupStructureDOM();
                    setupScrollbarsDOM();
                    setupScrollbarCornerDOM();

                    //create OverlayScrollbars events
                    setupStructureEvents();
                    setupScrollbarEvents(true);
                    setupScrollbarEvents(false);
                    setupScrollbarCornerEvents();

                    //create mutation observers
                    createMutationObservers();

                    //build resize observer for the host element
                    setupResizeObserver(_sizeObserverElement, hostOnResized);

                    if (_isBody) {
                        //apply the body scroll to handle it right in the update method
                        _viewportElement[_strScrollLeft](initBodyScroll.l)[_strScrollTop](initBodyScroll.t);

                        //set the focus on the viewport element so you dont have to click on the page to use keyboard keys (up / down / space) for scrolling
                        if (document.activeElement == targetElement && _viewportElementNative.focus) {
                            //set a tabindex to make the viewportElement focusable
                            _viewportElement.attr('tabindex', '-1');
                            _viewportElementNative.focus();

                            /* the tabindex has to be removed due to;
                             * If you set the tabindex attribute on an <div>, then its child content cannot be scrolled with the arrow keys unless you set tabindex on the content, too
                             * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                             */
                            setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, false, true);
                        }
                    }

                    //update for the first time & initialize cache
                    _base.update(_strAuto);

                    //the plugin is initialized now!
                    _initialized = true;
                    dispatchCallback('onInitialized');

                    //call all callbacks which would fire before the initialized was complete
                    each(_callbacksInitQeueue, function (index, value) { dispatchCallback(value.n, value.a); });
                    _callbacksInitQeueue = [];

                    //add extensions
                    if (type(extensions) == TYPES.s)
                        extensions = [extensions];
                    if (COMPATIBILITY.isA(extensions))
                        each(extensions, function (index, value) { _base.addExt(value); });
                    else if (FRAMEWORK.isPlainObject(extensions))
                        each(extensions, function (key, value) { _base.addExt(key, value); });

                    //add the transition class for transitions AFTER the first update & AFTER the applied extensions (for preventing unwanted transitions)
                    setTimeout(function () {
                        if (_supportTransition && !_destroyed)
                            addClass(_hostElement, _classNameHostTransition);
                    }, 333);

                    return _base;
                }

                if (_plugin.valid(construct(pluginTargetElement, options, extensions))) {
                    INSTANCES(pluginTargetElement, _base);
                }

                return _base;
            }

            /**
             * Initializes a new OverlayScrollbarsInstance object or changes options if already initialized or returns the current instance.
             * @param pluginTargetElements The elements to which the Plugin shall be initialized.
             * @param options The custom options with which the plugin shall be initialized.
             * @param extensions The extension(s) which shall be added right after initialization.
             * @returns {*}
             */
            _plugin = window[PLUGINNAME] = function (pluginTargetElements, options, extensions) {
                if (arguments[LEXICON.l] === 0)
                    return this;

                var arr = [];
                var optsIsPlainObj = FRAMEWORK.isPlainObject(options);
                var inst;
                var result;

                //pluginTargetElements is null or undefined
                if (!pluginTargetElements)
                    return optsIsPlainObj || !options ? result : arr;

                /*
                   pluginTargetElements will be converted to:
                   1. A jQueryElement Array
                   2. A HTMLElement Array
                   3. A Array with a single HTML Element
                   so pluginTargetElements is always a array.
                */
                pluginTargetElements = pluginTargetElements[LEXICON.l] != undefined ? pluginTargetElements : [pluginTargetElements[0] || pluginTargetElements];
                initOverlayScrollbarsStatics();

                if (pluginTargetElements[LEXICON.l] > 0) {
                    if (optsIsPlainObj) {
                        FRAMEWORK.each(pluginTargetElements, function (i, v) {
                            inst = v;
                            if (inst !== undefined)
                                arr.push(OverlayScrollbarsInstance(inst, options, extensions, _pluginsGlobals, _pluginsAutoUpdateLoop));
                        });
                    }
                    else {
                        FRAMEWORK.each(pluginTargetElements, function (i, v) {
                            inst = INSTANCES(v);
                            if ((options === '!' && _plugin.valid(inst)) || (COMPATIBILITY.type(options) == TYPES.f && options(v, inst)))
                                arr.push(inst);
                            else if (options === undefined)
                                arr.push(inst);
                        });
                    }
                    result = arr[LEXICON.l] === 1 ? arr[0] : arr;
                }
                return result;
            };

            /**
             * Returns a object which contains global information about the plugin and each instance of it.
             * The returned object is just a copy, that means that changes to the returned object won't have any effect to the original object.
             */
            _plugin.globals = function () {
                initOverlayScrollbarsStatics();
                var globals = FRAMEWORK.extend(true, {}, _pluginsGlobals);
                delete globals['msie'];
                return globals;
            };

            /**
             * Gets or Sets the default options for each new plugin initialization.
             * @param newDefaultOptions The object with which the default options shall be extended.
             */
            _plugin.defaultOptions = function (newDefaultOptions) {
                initOverlayScrollbarsStatics();
                var currDefaultOptions = _pluginsGlobals.defaultOptions;
                if (newDefaultOptions === undefined)
                    return FRAMEWORK.extend(true, {}, currDefaultOptions);

                //set the new default options
                _pluginsGlobals.defaultOptions = FRAMEWORK.extend(true, {}, currDefaultOptions, _pluginsOptions._validate(newDefaultOptions, _pluginsOptions._template, true, currDefaultOptions)._default);
            };

            /**
             * Checks whether the passed instance is a non-destroyed OverlayScrollbars instance.
             * @param osInstance The potential OverlayScrollbars instance which shall be checked.
             * @returns {boolean} True if the passed value is a non-destroyed OverlayScrollbars instance, false otherwise.
             */
            _plugin.valid = function (osInstance) {
                return osInstance instanceof _plugin && !osInstance.getState().destroyed;
            };

            /**
             * Registers, Unregisters or returns a extension.
             * Register: Pass the name and the extension. (defaultOptions is optional)
             * Unregister: Pass the name and anything except a function as extension parameter.
             * Get extension: Pass the name of the extension which shall be got.
             * Get all extensions: Pass no arguments.
             * @param extensionName The name of the extension which shall be registered, unregistered or returned.
             * @param extension A function which generates the instance of the extension or anything other to remove a already registered extension.
             * @param defaultOptions The default options which shall be used for the registered extension.
             */
            _plugin.extension = function (extensionName, extension, defaultOptions) {
                var extNameTypeString = COMPATIBILITY.type(extensionName) == TYPES.s;
                var argLen = arguments[LEXICON.l];
                var i = 0;
                if (argLen < 1 || !extNameTypeString) {
                    //return a copy of all extension objects
                    return FRAMEWORK.extend(true, { length: _pluginsExtensions[LEXICON.l] }, _pluginsExtensions);
                }
                else if (extNameTypeString) {
                    if (COMPATIBILITY.type(extension) == TYPES.f) {
                        //register extension
                        _pluginsExtensions.push({
                            name: extensionName,
                            extensionFactory: extension,
                            defaultOptions: defaultOptions
                        });
                    }
                    else {
                        for (; i < _pluginsExtensions[LEXICON.l]; i++) {
                            if (_pluginsExtensions[i].name === extensionName) {
                                if (argLen > 1)
                                    _pluginsExtensions.splice(i, 1); //remove extension
                                else
                                    return FRAMEWORK.extend(true, {}, _pluginsExtensions[i]); //return extension with the given name
                            }
                        }
                    }
                }
            };

            return _plugin;
        })();

        if (JQUERY && JQUERY.fn) {
            /**
             * The jQuery initialization interface.
             * @param options The initial options for the construction of the plugin. To initialize the plugin, this option has to be a object! If it isn't a object, the instance(s) are returned and the plugin wont be initialized.
             * @param extensions The extension(s) which shall be added right after initialization.
             * @returns {*} After initialization it returns the jQuery element array, else it returns the instance(s) of the elements which are selected.
             */
            JQUERY.fn.overlayScrollbars = function (options, extensions) {
                var _elements = this;
                if (JQUERY.isPlainObject(options)) {
                    JQUERY.each(_elements, function () { PLUGIN(this, options, extensions); });
                    return _elements;
                }
                else
                    return PLUGIN(_elements, options);
            };
        }
        return PLUGIN;
    }
));
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs=n()}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});

/*!
 * fullPage 3.0.8 - Extensions 0.1.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(rn,ln){"use strict";var an="fullpage-wrapper",sn="."+an,cn="fp-responsive",un="fp-notransition",fn="fp-destroyed",dn="fp-enabled",vn="fp-viewing",pn="active",hn="."+pn,gn="fp-completely",mn="fp-section",Sn="."+mn,bn=Sn+hn,wn="fp-tableCell",yn="."+wn,En="fp-auto-height",xn="fp-normal-scroll",An="fp-nav",Ln="#"+An,Mn="fp-tooltip",Tn="fp-slide",On="."+Tn,kn=On+hn,Cn="fp-slides",Hn="."+Cn,Rn="fp-slidesContainer",In="."+Rn,zn="fp-table",Bn="fp-slidesNav",Nn="."+Bn,jn=Nn+" a",e="fp-controlArrow",Pn="."+e,Wn="fp-prev",Dn=Pn+".fp-prev",Yn=Pn+".fp-next";function Vn(e,t){rn.console&&rn.console[e]&&rn.console[e]("fullPage: "+t)}function Zn(e,t){return(t=1<arguments.length?t:ln)?t.querySelectorAll(e):null}function Xn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Xn(e[r],o[r]))}return e}function Gn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Fn(){return"innerHeight"in rn?rn.innerHeight:ln.documentElement.offsetHeight}function Un(){return rn.innerWidth}function Qn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!bo(o,t);)o=o[n];return o}function _n(e,t){return n(e,t,"previousElementSibling")}function Jn(e,t){return n(e,t,"nextElementSibling")}function Kn(e,t){if(null==t)return e.previousElementSibling;var n=Kn(e);return n&&bo(n,t)?n:null}function $n(e,t){if(null==t)return e.nextElementSibling;var n=$n(e);return n&&bo(n,t)?n:null}function qn(e){return e[e.length-1]}function eo(e,t){e=oo(e)?e[0]:e;for(var n=null!=t?Zn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return oo(e)?e:[e]}function to(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function no(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function oo(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ro(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function io(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function lo(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||ln.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function ao(e,t){o(e,t,!0)}function so(e,t){for("string"==typeof t&&(t=yo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function co(e){for(var t=ln.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function uo(e,t){return e&&1===e.nodeType?bo(e,t)?e:uo(e.parentNode,t):null}function fo(e,t){r(e,e.nextSibling,t)}function vo(e,t){r(e,e,t)}function r(e,t,n){oo(n)||("string"==typeof n&&(n=yo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function po(){var e=ln.documentElement;return(rn.pageYOffset||e.scrollTop)-(e.clientTop||0)}function ho(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function go(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function mo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function So(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof rn.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=ln.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function bo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function wo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function yo(e){var t=ln.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Eo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(bo(o,t)||null==t)&&r.push(o),o=o[n];return r}function xo(e,t){return i(e,t,"nextElementSibling")}function Ao(e,t){return i(e,t,"previousElementSibling")}function Lo(e,t){e.insertBefore(t,e.firstChild)}return rn.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||rn;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),rn.fp_utils={$:Zn,deepExtend:Xn,hasClass:Gn,getWindowHeight:Fn,css:Qn,until:n,prevUntil:_n,nextUntil:Jn,prev:Kn,next:$n,last:qn,index:eo,getList:l,hide:to,show:no,isArrayOrList:oo,addClass:ro,removeClass:io,appendTo:lo,wrap:o,wrapAll:ao,wrapInner:so,unwrap:co,closest:uo,after:fo,before:vo,insertBefore:r,getScrollTop:po,siblings:ho,preventDefault:go,isFunction:mo,trigger:So,matches:bo,toggle:wo,createElementFromHTML:yo,remove:Eo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:xo,prevAll:Ao,showError:Vn,prependTo:Lo,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Gn(e,t);o&&null==n||!n?io(e,t):(!o&&null==n||n)&&ro(e,t)}}},function(e,g){var n=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<ln.domain.indexOf("alvarotrigo.com"),r=Zn("html, body"),s=Zn("html")[0],m=Zn("body")[0];if(!Gn(s,dn)){var S={};g=Xn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:rn.fp_scrolloverflow?rn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Zn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,l,c,o,a=!1,i=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),u="ontouchstart"in rn||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Zn(e)[0]:e,y=Fn(),f=Un(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Xn({},v.m);var p,h,A,L,M,T,O,k,C,H,R=Dt(),I={touchmove:"ontouchmove"in rn?"touchmove":R.move,touchstart:"ontouchstart"in rn?"touchstart":R.down},z=!1,B=!Gn(m,nt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),N='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});rn.addEventListener("testPassive",null,P),rn.removeEventListener("testPassive",null,P)}catch(e){}var W,D,Y=Xn({},g),V=!1,Z=!0,X={};$t(),rn.fp_easings=Xn(rn.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.8",S.setAutoScrolling=oe,S.setRecordHistory=re,S.setScrollingSpeed=ie,S.setFitToSection=le,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=ae,S.setAllowScrolling=se,S.setKeyboardScrolling=ue,S.moveSectionUp=fe,S.moveSectionDown=de,S.silentMoveTo=ve,S.moveTo=pe,S.moveSlideRight=he,S.moveSlideLeft=ge,S.fitToSection=He,S.reBuild=me,S.setResponsive=be,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ye,isTouch:u,c:lt,getXmovement:kt,removeAnimation:Mt,getTransforms:Xt,lazyLoad:Je,addAnimation:Lt,performHorizontalMove:yt,landscapeScroll:St,silentLandscapeScroll:Vt,keepSlidesPosition:De,silentScroll:Zt,styleSlides:Le,styleSection:Te,scrollHandler:Ce,getEventsPage:Yt,getMSPointer:Dt,isReallyTouch:Be,usingExtension:Ut,toggleControlArrows:bt,touchStartHandler:Ne,touchMoveHandler:ze}}},S.destroy=function(e){So(w,"destroy",e),oe(!1,"internal"),se(!0),ce(!1),ue(!1),ro(w,fn),[M,L,h,T,O,C,A].forEach(function(e){clearTimeout(e)}),rn.removeEventListener("scroll",Ce),rn.removeEventListener("hashchange",ct),rn.removeEventListener("resize",Et),ln.removeEventListener("keydown",ft),ln.removeEventListener("keyup",dt),["click","touchstart"].forEach(function(e){ln.removeEventListener(e,we)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){ln.removeEventListener(e,Ee,!0)}),Qt("dragAndMove","destroy"),e&&(Zt(0),Zn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Qe(e,"src")}),Zn("img[data-srcset]").forEach(function(e){Qe(e,"srcset")}),Eo(Zn(Ln+", "+Nn+", "+Pn)),Qn(Zn(Sn),{height:"","background-color":"",padding:""}),Qn(Zn(On),{width:""}),Qn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Qn(r,{overflow:"",height:""}),io(s,dn),io(m,cn),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(vn)&&io(m,e)}),Zn(Sn+", "+On).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),io(e,zn+" "+pn+" "+gn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Gn(e,mn)&&!V&&e.removeAttribute("data-anchor")}),Ft(w),[yn,In,Hn].forEach(function(e){Zn(e,w).forEach(function(e){co(e)})}),rn.scrollTo(0,0),[mn,Tn,Rn].forEach(function(e){io(Zn("."+e),e)}))},S.getActiveSection=function(){return new nn(Zn(bn)[0])},S.getActiveSlide=function(){return Ge(Zn(kn,Zn(bn)[0])[0])},S.landscapeScroll=St,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Zn(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Zn(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:oe},S.shared={afterRenderActions:ke,isNormalScrollElement:!1},rn.fullpage_api=S,rn.fullpage_extensions=!0,g.$&&Object.keys(S).forEach(function(e){g.$.fn.fullpage[e]=S[e]}),Ae("continuousHorizontal"),Ae("scrollHorizontally"),Ae("resetSliders"),Ae("interlockedSlides"),Ae("responsiveSlides"),Ae("fadingEffect"),Ae("dragAndMove"),Ae("offsetSections"),Ae("scrollOverflowReset"),Ae("parallax"),Ae("cards"),Qt("dragAndMove","init"),g.css3&&(g.css3=function(){var e,t=ln.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",ln.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=rn.getComputedStyle(t).getPropertyValue(n[o]));return ln.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Zn(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(V=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var n="[data-tooltip]",o=Zn(g.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Qn(w,{height:"100%",position:"relative"}),ro(w,an),ro(s,dn),y=Fn(),io(w,fn),ro(Zn(g.sectionSelector,w),mn),ro(Zn(g.slideSelector,w),Tn),Qt("parallax","init");for(var e=Zn(Sn),t=0;t<e.length;t++){var n=t,o=e[t],r=Zn(On,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Te(o,n),l=o,a=n,void 0!==g.anchors[a]&&Gn(l,pn)&&Tt(g.anchors[a],a),g.menu&&g.css3&&null!=uo(Zn(g.menu)[0],sn)&&Zn(g.menu).forEach(function(e){m.appendChild(e)}),0<i?Le(o,r,i):g.verticalCentered&&Ct(o)}var l,a;g.fixedElements&&g.css3&&Zn(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=ln.createElement("div");e.setAttribute("id",An);var t=ln.createElement("ul");e.appendChild(t),lo(e,m);var n=Zn(Ln)[0];ro(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&ro(n,"fp-show-active");for(var o="",r=0;r<Zn(Sn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+Oe(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+Mn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}Zn("ul",n)[0].innerHTML=o,Qn(Zn(Ln),{"margin-top":"-"+Zn(Ln)[0].offsetHeight/2+"px"}),ro(Zn("a",Zn("li",Zn(Ln)[0])[eo(Zn(bn)[0],Sn)]),pn)}(),Zn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Qt("fadingEffect","apply"),Qt("cards","init"),g.scrollOverflow&&(p=g.scrollOverflowHandler.init(g))}(),se(!0),ce(!0),oe(g.autoScrolling,"internal"),At(),Wt(),"complete"===ln.readyState&&st(),rn.addEventListener("load",st),g.scrollOverflow||ke(),function(){for(var e=1;e<4;e++)C=setTimeout(xe,350*e)}(),B||lt("l"),rn.addEventListener("scroll",Ce),rn.addEventListener("hashchange",ct),rn.addEventListener("blur",gt),rn.addEventListener("resize",Et),ln.addEventListener("keydown",ft),ln.addEventListener("keyup",dt),["click","touchstart"].forEach(function(e){ln.addEventListener(e,we)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ye(e,!1)}),["mouseleave","touchend"].forEach(function(e){ye(e,!0)})),Qt("dragAndMove","turnOffTouch"));var G,F,U,Q=!1,_=0,J=0,K=0,$=0,q=(new Date).getTime(),ee=0,te=0,ne=y;return S}function oe(e,t){e||Zt(0),Kt("autoScrolling",e,t);var n=Zn(bn)[0];if(g.autoScrolling&&!g.scrollBar)Qn(r,{overflow:"hidden",height:"100%"}),re(Y.recordHistory,"internal"),Qn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Zt(n.offsetTop);else if(Qn(r,{overflow:"visible",height:"initial"}),re(!!g.autoScrolling&&Y.recordHistory,"internal"),Qn(w,{"-ms-touch-action":"","touch-action":""}),Ft(w),null!=n){var o=Fe(n.offsetTop);o.element.scrollTo(0,o.options)}So(w,"setAutoScrolling",e)}function re(e,t){Kt("recordHistory",e,t)}function ie(e,t){"internal"!==t&&Ut("fadingEffect")&&S.fadingEffect.update(e),Ut("cards")&&S.cards.update(e),Kt("scrollingSpeed",e,t)}function le(e,t){Kt("fitToSection",e,t)}function ae(e){e?(function(){var e,t="";rn.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in ln.createElement("div")?"wheel":void 0!==ln.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?ln[e](t+"MozMousePixelScroll",Pe,o):ln[e](t+n,Pe,o)}(),w.addEventListener("mousedown",vt),w.addEventListener("mouseup",pt)):(ln.addEventListener?(ln.removeEventListener("mousewheel",Pe,!1),ln.removeEventListener("wheel",Pe,!1),ln.removeEventListener("MozMousePixelScroll",Pe,!1)):ln.detachEvent("onmousewheel",Pe),w.removeEventListener("mousedown",vt),w.removeEventListener("mouseup",pt))}function se(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Gt(t,e,"m")}):Gt(t,"all","m"),So(w,"setAllowScrolling",{value:t,directions:e})}function ce(e){e?(ae(!0),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,Ie,{passive:!1}),m.addEventListener(I.touchmove,Ie,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,Ne),e.removeEventListener(I.touchmove,ze,{passive:!1}),e.addEventListener(I.touchstart,Ne),e.addEventListener(I.touchmove,ze,{passive:!1})}}()):(ae(!1),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,ze,{passive:!1}),m.removeEventListener(I.touchmove,Ie,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,Ne),e.removeEventListener(I.touchmove,ze,{passive:!1})}}())}function ue(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Gt(t,e,"k")}):(Gt(t,"all","k"),g.keyboardScrolling=t)}function fe(){var e=_n(Zn(bn)[0],Sn);e||!g.loopTop&&!g.continuousVertical||(e=qn(Zn(Sn))),null!=e&&Ve(e,null,!0)}function de(){var e=Jn(Zn(bn)[0],Sn);e||!g.loopBottom&&!g.continuousVertical||(e=Zn(Sn)[0]),null!=e&&Ve(e,null,!1)}function ve(e,t){ie(0,"internal"),pe(e,t),ie(Y.scrollingSpeed,"internal")}function pe(e,t){var n=It(e);void 0!==t?zt(e,t):null!=n&&Ve(n)}function he(e){We("right",e)}function ge(e){We("left",e)}function me(e){if(!Gn(w,fn)){E=!0,y=Fn(),f=Un();for(var t=Zn(Sn),n=0;n<t.length;++n){var o=t[n],r=Zn(Hn,o)[0],i=Zn(On,o);g.verticalCentered&&Qn(Zn(yn,o),{height:Ht(o)+"px"}),Qn(o,{height:Me(o)+"px"}),1<i.length&&St(r,Zn(kn,r)[0])}g.scrollOverflow&&p.createScrollBarForAll();var l=eo(Zn(bn)[0],Sn);l&&!Ut("fadingEffect")&&ve(l+1),E=!1,mo(g.afterResize)&&e&&g.afterResize.call(w,rn.innerWidth,rn.innerHeight),mo(g.afterReBuild)&&!e&&g.afterReBuild.call(w),So(w,"afterRebuild")}}function Se(){return Gn(m,cn)}function be(e){var t=Se();e?t||(oe(!1,"internal"),le(!1,"internal"),to(Zn(Ln)),ro(m,cn),mo(g.afterResponsive)&&g.afterResponsive.call(w,e),Qt("responsiveSlides","toSections"),So(w,"afterResponsive",e),g.scrollOverflow&&p.createScrollBarForAll()):t&&(oe(Y.autoScrolling,"internal"),le(Y.autoScrolling,"internal"),no(Zn(Ln)),io(m,cn),mo(g.afterResponsive)&&g.afterResponsive.call(w,e),Qt("responsiveSlides","toSlides"),So(w,"afterResponsive",e))}function we(e){var t=e.target;t&&uo(t,Ln+" a")?function(e){go(e);var t=eo(uo(this,Ln+" li"));Ve(Zn(Sn)[t])}.call(t,e):bo(t,".fp-tooltip")?function(){So(Kn(this),"click")}.call(t):bo(t,Pn)?function(){var e=uo(this,Sn);Gn(this,Wn)?v.m.left&&ge(e):v.m.right&&he(e)}.call(t,e):bo(t,jn)||null!=uo(t,jn)?function(e){go(e);var t=Zn(Hn,uo(this,Sn))[0],n=Zn(On,t)[eo(uo(this,"li"))];St(t,n)}.call(t,e):uo(t,g.menu+" [data-menuanchor]")&&function(e){!Zn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(go(e),pe(this.getAttribute("data-menuanchor")))}.call(t,e)}function ye(e,t){ln["fp_"+e]=t,ln.addEventListener(e,Ee,!0)}function Ee(e){var t=e.type,o=!1,r=g.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==ln||!i)return ce(!0),void(r&&g.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(Z=!1,setTimeout(function(){Z=!0},800)),("mouseenter"!==t||Z)&&(g.normalScrollElements.split(",").forEach(function(e){if(!o){var t=bo(i,e),n=uo(i,e);(t||n)&&(S.shared.isNormalScrollElement||(ce(!1),r&&g.scrollOverflowHandler.setIscroll(i,!1)),S.shared.isNormalScrollElement=!0,o=!0)}}),!o&&S.shared.isNormalScrollElement&&(ce(!0),r&&g.scrollOverflowHandler.setIscroll(i,!0),S.shared.isNormalScrollElement=!1))}function xe(){var e=Fn(),t=Un();y===e&&f===t||(y=e,f=t,me(!0))}function Ae(e){var t="fp_"+e+"Extension";X[e]=g[e+"Key"],S[e]=void 0!==rn[t]?new rn[t]:null,S[e]&&S[e].c(e)}function Le(e,t,n){var o=100*n,r=100/n,i=ln.createElement("div");i.className=Cn,ao(t,i);var l,a,s=ln.createElement("div");s.className=Rn,ao(t,s),Qn(Zn(In,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[yo('<div class="fp-controlArrow fp-prev"></div>'),yo('<div class="fp-controlArrow fp-next"></div>')],fo(Zn(Hn,l)[0],a),"#fff"!==g.controlArrowColor&&(Qn(Zn(Yn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Qn(Zn(Dn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||to(Zn(Dn,l))),g.slidesNavigation&&function(e,t){lo(yo('<div class="'+Bn+'"><ul></ul></div>'),e);var n=Zn(Nn,e)[0];ro(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)lo(yo('<li><a href="#"><span class="fp-sr-only">'+Oe(o,"Slide")+"</span><span></span></a></li>"),Zn("ul",n)[0]);Qn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ro(Zn("a",Zn("li",n)[0]),pn)}(e,n)),t.forEach(function(e){Qn(e,{width:r+"%"}),g.verticalCentered&&Ct(e)});var c=Zn(kn,e)[0];null!=c&&(0!==eo(Zn(bn),Sn)||0===eo(Zn(bn),Sn)&&0!==eo(c))?(Vt(c,"internal"),ro(c,"fp-initial")):ro(t[0],pn)}function Me(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Fn()}function Te(e,t){t||null!=Zn(bn)[0]||ro(e,pn),o=Zn(bn)[0],Qn(e,{height:Me(e)+"px"}),g.paddingTop&&Qn(e,{"padding-top":g.paddingTop}),g.paddingBottom&&Qn(e,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[t]&&Qn(e,{"background-color":g.sectionsColor[t]}),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}function Oe(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function ke(){var e,t,n=Zn(bn)[0];ro(n,gn),Je(n),_e(),$e(n),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),e=ut(),t=It(e.section),e.section&&t&&(void 0===t||eo(t)!==eo(o))||!mo(g.afterLoad)||Ze("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:eo(n,Sn)}),mo(g.afterRender)&&Ze("afterRender"),So(w,"afterRender")}function Ce(){var e;if(So(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Ut("dragAndMove"))&&!Jt()){var t=Ut("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):po(),n=0,o=t+Fn()/2,r=(Ut("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Fn())===t,i=Zn(Sn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Gn(e=i[n],pn)){Q=!0;var a,s,c=Zn(bn)[0],u=eo(c,Sn)+1,f=Ot(e),d=e.getAttribute("data-anchor"),v=eo(e,Sn)+1,p=Zn(kn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=eo(p)),x&&(ro(e,pn),io(ho(e),pn),Qt("parallax","afterLoad"),mo(g.onLeave)&&Ze("onLeave",h),mo(g.afterLoad)&&Ze("afterLoad",h),Ut("resetSliders")&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),et(c),Je(e),$e(e),Tt(d,v-1),g.anchors.length&&(b=d),Nt(a,s,d)),clearTimeout(T),T=setTimeout(function(){Q=!1},100)}g.fitToSection&&(clearTimeout(O),O=setTimeout(function(){g.fitToSection&&Zn(bn)[0].offsetHeight<=y&&He()},g.fitToSectionDelay))}}function He(){x&&(E=!0,Ve(Zn(bn)[0]),E=!1)}function Re(e){if(v.m[e]){var t="down"===e?de:fe;if(Ut("scrollHorizontally")&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Zn(bn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ie(e){g.autoScrolling&&Be(e)&&v.m.up&&go(e)}function ze(e){var t=uo(e.target,Sn)||Zn(bn)[0];if(Be(e)){g.autoScrolling&&go(e);var n=Yt(e);K=n.y,$=n.x,Zn(Hn,t).length&&Math.abs(J-$)>Math.abs(_-K)?!a&&Math.abs(J-$)>Un()/100*g.touchSensitivity&&($<J?v.m.right&&he(t):v.m.left&&ge(t)):g.autoScrolling&&x&&Math.abs(_-K)>rn.innerHeight/100*g.touchSensitivity&&(K<_?Re("down"):_<K&&Re("up"))}}function Be(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ne(e){if(g.fitToSection&&(W=!1),Be(e)){var t=Yt(e);_=t.y,J=t.x}}function je(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Pe(e){var t=(new Date).getTime(),n=Gn(Zn(".fp-completely")[0],xn);if(!v.m.down&&!v.m.up)return go(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||rn.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),g.scrollBar&&go(e);var a=t-q;if(q=t,200<a&&(d=[]),x&&!_t()){var s=je(d,10);je(d,70)<=s&&l&&Re(r<0?"down":"up")}return!1}g.fitToSection&&(W=!1)}function We(e,t){var n=null==t?Zn(bn)[0]:t,o=Zn(Hn,n)[0];if(!(null==o||_t()||a||Zn(On,o).length<2)){var r=Zn(kn,o)[0],i=null;if(null==(i="left"===e?_n(r,On):Jn(r,On))){if(!g.loopHorizontal)return;var l=ho(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,St(o,i,e)}}function De(){for(var e=Zn(kn),t=0;t<e.length;t++)Vt(e[t],"internal")}function Ye(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Ut("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():ee<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==$n(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),ee=o}function Ve(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ye(e),yMovement:Ot(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:eo(e,Sn),activeSlide:Zn(kn,e)[0],activeSection:Zn(bn)[0],leavingSection:eo(Zn(bn),Sn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&po()===i.dtop&&!Gn(e,En))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=eo(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,mo(g.onLeave)&&!1===Ze("onLeave",i))return}var a;Qt("parallax","apply",i),Qt("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?vo(Zn(bn)[0],xo(s.activeSection,Sn)):fo(Zn(bn)[0],Ao(s.activeSection,Sn).reverse()),Zt(Zn(bn)[0].offsetTop),De(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=Ot(s.element),s.leavingSection=eo(s.activeSection,Sn)+1,s.sectionIndex=eo(s.element,Sn),So(Zn(sn)[0],"onContinuousVertical",s),i=s),Ut("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||et(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),ro(e,pn),io(ho(e),pn),Je(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Nt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Rt(t,!0),g.scrollingSpeed?(clearTimeout(L),L=setTimeout(function(){Ue(e)},g.scrollingSpeed)):Ue(e)}else{var n=Fe(e.dtop);S.test.top=-e.dtop+"px",qt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Ue(e)},30):Ue(e)})}}(i),b=i.anchorLink,Tt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Zn(Sn).length-1:0)}}var s}function Ze(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Xe(Zn(bn)[0]),slide:Ge(Zn(kn,Zn(bn)[0])[0])}},onLeave:function(){return{origin:Xe(r.activeSection),destination:Xe(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Xe(r.section),origin:Ge(r.prevSlide),destination:Ge(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(So(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Xe(e){return e?new nn(e):null}function Ge(e){return e?new on(e):null}function Fe(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Zn(sn)[0]):(t.options=e,t.element=rn),t}function Ue(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?vo(Zn(Sn)[0],t.wrapAroundElements):fo(Zn(Sn)[Zn(Sn).length-1],t.wrapAroundElements),Zt(Zn(bn)[0].offsetTop),De(),t.sectionIndex=eo(t.element,Sn),t.leavingSection=eo(t.activeSection,Sn)+1),mo(g.afterLoad)&&!e.localIsResizing&&Ze("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Qt("parallax","afterLoad"),Qt("scrollOverflowReset","reset"),Ut("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||$e(e.element),ro(e.element,gn),io(ho(e.element),gn),_e(),x=!0,mo(e.callback)&&e.callback()}function Qe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function _e(){var e=Zn(".fp-auto-height")[0]||Se()&&Zn(".fp-auto-height-responsive")[0];g.lazyLoading&&e&&Zn(Sn+":not("+hn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Je(e)})}function Je(o){g.lazyLoading&&Zn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",tt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Qe(n,e),n.addEventListener("load",function(){Ke(o)}))}),bo(n,"source")){var e=uo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Ke(o)})}})}function Ke(e){g.scrollOverflow&&(clearTimeout(D),D=setTimeout(function(){p.createScrollBar(e)},200))}function $e(e){var t=tt(e);Zn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Zn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&qe(e),e.onload=function(){e.hasAttribute("data-autoplay")&&qe(e)}})}function qe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function et(e){var t=tt(e);Zn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Zn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function tt(e){var t=Zn(kn,e);return t.length&&(e=t[0]),e}function nt(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function ot(f){var d=void 0!==X[f]&&X[f].length,e=[],v=!1;return oo(X[f])?e=X[f]:e.push(X[f]),e.forEach(function(e){var t=function(){if(ln.domain.length){for(var e=ln.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=nt(n[0]),r=nt(n[1]),i=nt(n[2]),l=nt(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length;if(!d&&a)return!1;var s=d?nt(e):"",c=1<(s=s.split("_")).length&&-1<s[1].indexOf(f,s[1].length-f.length),u=s[0].indexOf(t,s[0].length-t.length)<0;v=v||!(u&&a&&l!=s[0])&&c||!a}),v}function rt(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(F)){clearTimeout(U);var t=nt("bDIwc2V0VGltZW91dDAzbA==");U=rn[t](it,900)}})}function it(){z=!1}function lt(e){if(F=ln.createElement("div"),G=nt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),B||(G=G.replace("extensions/","").replace("Extension","")),F.innerHTML=G,F=F.firstChild,"MutationObserver"in rn&&new MutationObserver(rt).observe(ln.body,{childList:!0,subtree:!1}),(!B||Ut(e)&&S[e])&&(!ot(e)||!B)){at();var t=nt("MzQ1c2V0SW50ZXJ2YWwxMjM=");rn[t](at,2e3)}}function at(){F&&(z||(Math.random()<.5?Lo(m,F):lo(F,m),z=!0),F.setAttribute("style",nt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,nt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function st(){var e=ut(),t=e.section,n=e.slide;t&&(g.animateAnchor?zt(t,n):ve(t,n))}function ct(){if(!Q&&!g.lockAnchors){var e=ut(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;if(t&&t.length){var i=!Ut("dragAndMove")||l;(t&&t!==b&&!o||r||!a&&l!=n&&i)&&zt(t,n)}}}function ut(){var e,t,n=rn.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function ft(e){clearTimeout(k);var t=ln.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=ln.activeElement,u=ht(tt(Zn(bn)[0]));function f(e){return go(e),u[0]?u[0].focus():null}(t=e,n=ht(ln),o=n.indexOf(ln.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ge(uo(i,On)),a=Xe(uo(i,Sn)),l||a)&&(c?null==uo(c,bn+","+bn+" "+kn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&go(e))}(e):bo(t,"textarea")||bo(t,"input")||bo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&go(e),c=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=ln.activeElement,o=bo(n,"video")||bo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&fe();break;case 32:if(t&&v.k.up&&!o){fe();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||de());break;case 36:v.k.up&&pe(1);break;case 35:v.k.down&&pe(Zn(Sn).length);break;case 37:v.k.left&&ge();break;case 39:v.k.right&&he()}}(e)},150))}function dt(e){t&&(c=e.ctrlKey)}function vt(e){2==e.which&&(te=e.pageY,w.addEventListener("mousemove",mt))}function pt(e){2==e.which&&w.removeEventListener("mousemove",mt)}function ht(e){return[].slice.call(Zn(N,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function gt(){c=t=!1}function mt(e){g.autoScrolling&&(x&&(e.pageY<te&&v.m.up?fe():e.pageY>te&&v.m.down&&de()),te=e.pageY)}function St(e,t,n){var o=uo(e,Sn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:eo(t),section:o,sectionIndex:eo(o,Sn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Zn(Nn,o)[0],slideAnchor:Pt(t),prevSlide:Zn(kn,o)[0],prevSlideIndex:eo(Zn(kn,o)[0]),localIsResizing:E};r.xMovement=kt(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Qt("parallax","applyHorizontal",r),Qt("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&mo(g.onSlideLeave)&&!1===Ze("onSlideLeave",r)?a=!1:(ro(t,pn),io(ho(t),pn),r.localIsResizing||(et(r.prevSlide),Je(t)),bt(r),Gn(o,pn)&&!r.localIsResizing&&Nt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Jt()?wt(r):yt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Ut("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function bt(e){!g.loopHorizontal&&g.controlArrows&&(wo(Zn(Dn,e.section),0!==e.slideIndex),wo(Zn(Yn,e.section),null!=$n(e.destiny)))}function wt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(io(Zn(hn,t),pn),ro(Zn("a",Zn("li",t)[n]),pn)),e.localIsResizing||(Qt("parallax","afterSlideLoads"),Qt("scrollOverflowReset","setPrevious",e.prevSlide),Qt("scrollOverflowReset","reset"),mo(g.afterSlideLoad)&&Ze("afterSlideLoad",e),x=!0,$e(e.destiny)),a=!1,Ut("interlockedSlides")&&S.interlockedSlides.apply(e)}function yt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Qn(Lt(Zn(In,e)),Xt(r)),M=setTimeout(function(){n&&wt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),qt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&wt(t)})}function Et(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)A=setTimeout(xt,200*e)},200)}function xt(){if(So(w,"onResize"),At(),i){var e=ln.activeElement;if(!bo(e,"textarea")&&!bo(e,"input")&&!bo(e,"select")){var t=Fn();Math.abs(t-ne)>20*Math.max(ne,t)/100&&(me(!0),ne=t)}}else xe()}function At(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&rn.innerWidth<e,o=t&&rn.innerHeight<t;e&&t?be(n||o):e?be(n):t&&be(o)}function Lt(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return io(e,un),Qn(e,{"-webkit-transition":t,transition:t})}function Mt(e){return ro(e,un)}function Tt(e,t){var n,o,r,i;n=e,Zn(g.menu).forEach(function(e){g.menu&&null!=e&&(io(Zn(hn,e),pn),ro(Zn('[data-menuanchor="'+n+'"]',e),pn))}),o=e,r=t,i=Zn(Ln)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(io(Zn(hn,Zn(Ln)[0]),pn),ro(o?Zn('a[href="#'+o+'"]',Zn(Ln)[0]):Zn("a",Zn("li",Zn(Ln)[0])[r]),pn))}function Ot(e){var t=eo(Zn(bn)[0],Sn),n=eo(e,Sn);return t==n?"none":n<t?"up":"down"}function kt(e,t){return e==t?"none":t<e?"left":"right"}function Ct(e){if(!Gn(e,zn)){var t=ln.createElement("div");t.className=wn,t.style.height=Ht(e)+"px",ro(e,zn),so(e,t)}}function Ht(e){var t=Me(e);if(g.paddingTop||g.paddingBottom){var n=e;Gn(n,mn)||(n=uo(e,Sn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Rt(e,t){t?Lt(w):Mt(w),clearTimeout(H),Qn(w,Xt(e)),S.test.translate3d=e,H=setTimeout(function(){io(w,un)},10)}function It(e){var t=Zn(Sn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Zn(Sn)[n]}return t}function zt(e,t){var n=It(e);if(null!=n){var o,r,i,l=(null==(i=Zn(On+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Zn(On,r)[o]),i);Pt(n)===b||Gn(n,pn)?Bt(l):Ve(n,function(){Bt(l)})}}function Bt(e){null!=e&&St(uo(e,Hn),e)}function Nt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),jt(r+"/"+(l=t))):(null!=e&&(l=t),jt(n))),Wt()}function jt(e){if(g.recordHistory)location.hash=e;else if(i||u)rn.history.replaceState(void 0,void 0,"#"+e);else{var t=rn.location.href.split("#")[0];rn.location.replace(t+"#"+e)}}function Pt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=eo(e);return null==t&&(t=n),t}function Wt(){var e=Zn(bn)[0],t=Zn(kn,e)[0],n=Pt(e),o=Pt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+vn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),ro(m,vn+"-"+r)}function Dt(){return rn.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Yt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,u&&Be(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Vt(e,t){ie(0,"internal"),void 0!==t&&(E=!0),St(uo(e,Hn),e),void 0!==t&&(E=!1),ie(Y.scrollingSpeed,"internal")}function Zt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)Rt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Qn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=Fe(t);en(n.element,n.options)}}function Xt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Gt(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Ft(e){return Qn(e,{"-webkit-transition":"none",transition:"none"})}function Ut(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function Qt(e,t,n){if(Ut(e))return S[e][t](n)}function _t(){return Ut("dragAndMove")&&S.dragAndMove.isAnimating}function Jt(){return Ut("dragAndMove")&&S.dragAndMove.isGrabbing}function Kt(e,t,n){g[e]=t,"internal"!==n&&(Y[e]=t)}function $t(){var e=g.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Vn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Vn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Gn(s,dn)?Vn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Vn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Vn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Vn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Vn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Zn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Zn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Vn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Vn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function qt(t,n,o,r){var e,i=(e=t).self!=rn&&Gn(e,Cn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?po():e.offsetTop,l=n-i,a=0;W=!0;var s=function(){if(W){var e=n;a+=20,o&&(e=rn.fp_easings[g.easing](a,i,l,o)),en(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function en(e,t){!g.autoScrolling||g.scrollBar||e.self!=rn&&Gn(e,Cn)?e.self!=rn&&Gn(e,Cn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function tn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=eo(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function nn(e){tn.call(this,e,Sn)}function on(e){tn.call(this,e,On)}$t()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),o={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e,n,r){t&&(void 0===r?void 0===n?t(e):t(e,n):t(e,n,r))},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish,t)},_=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"poster",i(t,e.data_poster)),v(t,"src",i(t,e.data_src)),t.load()}},p=function(t,e){var n,r,o=e._settings,a=t.tagName,s=m[a];if(s)return s(t,o),f(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=i(t,e.data_src),r=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),r&&(t.style.backgroundImage=r)}(t,o)},g=function(t,e){r?t.classList.add(e):t.className+=(t.className?" ":"")+e},y=function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},h=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},A=function(t,e,n){var r=n._settings,o=e?r.class_loaded:r.class_error,a=e?r.callback_loaded:r.callback_error,i=t.target;y(i,r.class_loading),g(i,o),d(a,i,n),f(n,-1)},I=function(t,e){var n=function n(o){A(o,!0,e),w(t,n,r)},r=function r(o){A(o,!1,e),w(t,n,r)};!function(t,e,n){h(t,"load",e),h(t,"loadeddata",e),h(t,"error",n)}(t,n,r)},k=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;S(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){L(t,e),O(t)},n),l(t,r))},S=function(t,e,n){var r=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),g(t,r.class_loading)),p(t,e),function(t){s(t,"was-processed","true")}(t),d(r.callback_reveal,t,e),d(r.callback_set,t,e))},z=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e,n){var r=n._settings;d(r.callback_enter,t,e,n),r.load_delay?x(t,n):L(t,n)}(e.target,e,t):function(t,e,n){var r=n._settings;d(r.callback_exit,t,e,n),r.load_delay&&O(t)}(e.target,e,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],N=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t){var e=t._settings;_toConsumableArray(e.container.querySelectorAll("."+e.class_error)).forEach(function(t){y(t,e.class_error),function(t){s(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var r;this._settings=function(t){return _extends({},o,t)}(e),this._loadingCount=0,z(this),this.update(n),r=this,t&&window.addEventListener("online",function(t){M(r)})};return R.prototype={update:function(t){var n,r=this,o=this._settings;(this._elements=N(t,o),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(o)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),S(t,n))}),this._elements=N(t,o)),this._elements.forEach(function(t){r._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){S(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});
//# sourceMappingURL=lazyload.min.js.map

/*! lightgallery - v1.6.12 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
/*! lightgallery - v1.6.12 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {
    'use strict';

    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // Current jquery element
        this.$el = $(element);

        // lightGallery settings
        this.s = $.extend({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = ('ontouchstart' in document.documentElement);

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        // Gallery items
        if (this.s.dynamic) {
            this.$items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.$items = this.$el;
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.$items = $(this.s.selectWithin).find(this.s.selector);
                } else {
                    this.$items = this.$el.find($(this.s.selector));
                }
            } else {
                this.$items = this.$el.children();
            }
        }

        // .lg-item
        this.$slide = '';

        // .lg-outer
        this.$outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function() {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.$items.length) {
            _this.s.preload = _this.$items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            $('body').addClass('lg-from-hash');
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                });

                $('body').addClass('lg-on');
            }
        }

        if (_this.s.dynamic) {

            _this.$el.trigger('onBeforeOpen.lg');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                });
            }
        } else {

            // Using different namespace for click because click event should not unbind if selector is same object('this')
            _this.$items.on('click.lgcustom', function(event) {

                // For IE8
                try {
                    event.preventDefault();
                    event.preventDefault();
                } catch (er) {
                    event.returnValue = false;
                }

                _this.$el.trigger('onBeforeOpen.lg');

                _this.index = _this.s.index || _this.$items.index(this);

                // prevent accidental double execution
                if (!$('body').hasClass('lg-on')) {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                }
            });
        }

    };

    Plugin.prototype.build = function(index) {

        var _this = this;

        _this.structure();

        // module constructor
        $.each($.fn.lightGallery.modules, function(key) {
            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
        });

        // initiate slide function
        _this.slide(index, false, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.$items.length > 1) {

            _this.arrow();

            setTimeout(function() {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        } else {
            _this.$slide.on('click.lg', function() {
                _this.$el.trigger('onSlideClick.lg');
            });
        }

        _this.counter();

        _this.closeGallery();

        _this.$el.trigger('onAfterOpen.lg');

        // Hide controllers if mouse doesn't move for some period
        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

            _this.$outer.removeClass('lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function() {
                _this.$outer.addClass('lg-hide-items');
            }, _this.s.hideBarsDelay);

        });

        _this.$outer.trigger('mousemove.lg');

    };

    Plugin.prototype.structure = function() {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        $('body').append('<div class="lg-backdrop"></div>');
        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.$items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.$items.length > 1) {
            controls = '<div class="lg-actions">' +
                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
                '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
            '<div class="lg-inner">' + list + '</div>' +
            '<div class="lg-toolbar lg-group">' +
            '<span class="lg-close lg-icon"></span>' +
            '</div>' +
            controls +
            subHtmlCont +
            '</div>' +
            '</div>';

        $('body').append(template);
        this.$outer = $('.lg-outer');
        this.$slide = this.$outer.find('.lg-item');

        if (this.s.useLeft) {
            this.$outer.addClass('lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            this.$outer.addClass('lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        $(window).on('resize.lg orientationchange.lg', function() {
            setTimeout(function() {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        this.$slide.eq(this.index).addClass('lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            this.$outer.addClass('lg-css3');
        } else {
            this.$outer.addClass('lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        this.$outer.addClass(this.s.mode);

        if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass('lg-grab');
        }

        if (this.s.showAfterLoad) {
            this.$outer.addClass('lg-show-after-load');
        }

        if (this.doCss()) {
            var $inner = this.$outer.find('.lg-inner');
            $inner.css('transition-timing-function', this.s.cssEasing);
            $inner.css('transition-duration', this.s.speed + 'ms');
        }

        setTimeout(function() {
            $('.lg-backdrop').addClass('in');
        });

        setTimeout(function() {
            _this.$outer.addClass('lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $(window).scrollTop();

    };

    // For fixed height gallery
    Plugin.prototype.setTop = function() {
        if (this.s.height !== '100%') {
            var wH = $(window).height();
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var $lGallery = this.$outer.find('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                $lGallery.css('top', top + 'px');
            } else {
                $lGallery.css('top', '0px');
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function() {
        // check for css animation support
        var support = function() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function(src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.$items.eq(index).attr('data-html');
        }

        if (!src) {
            if(html) {
                return {
                    html5: true
                };
            } else {
                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
                return false;
            }
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function() {
        if (this.s.counter) {
            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function(index) {
        var subHtml = null;
        var subHtmlUrl;
        var $currentEle;
        if (this.s.dynamic) {
            if (this.s.dynamicEl[index].subHtmlUrl) {
                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
            } else {
                subHtml = this.s.dynamicEl[index].subHtml;
            }
        } else {
            $currentEle = this.$items.eq(index);
            if ($currentEle.attr('data-sub-html-url')) {
                subHtmlUrl = $currentEle.attr('data-sub-html-url');
            } else {
                subHtml = $currentEle.attr('data-sub-html');
                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
                }
            }
        }

        if (!subHtmlUrl) {
            if (typeof subHtml !== 'undefined' && subHtml !== null) {

                // get first letter of subhtml
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                        subHtml = $currentEle.find(subHtml).html();
                    } else {
                        subHtml = $(subHtml).html();
                    }
                }
            } else {
                subHtml = '';
            }
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

            if (subHtmlUrl) {
                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
            }

        } else {

            if (subHtmlUrl) {
                this.$slide.eq(index).load(subHtmlUrl);
            } else {
                this.$slide.eq(index).append(subHtml);
            }
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
            }
        }

        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function(index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.$items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function(index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _$img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = $(window).width();
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;

        } else {

            if (_this.$items.eq(index).attr('data-poster')) {
                _hasPoster = true;
                _poster = _this.$items.eq(index).attr('data-poster');
            }

            _html = _this.$items.eq(index).attr('data-html');
            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

            if (_this.$items.eq(index).attr('data-responsive')) {
                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.$items.eq(index).attr('data-srcset');
            _sizes = _this.$items.eq(index).attr('data-sizes');

        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
            if (iframe) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

            } else if (_isVideo) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
            } else {
                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
            }

            _this.$el.trigger('onAferAppendSlide.lg', [index]);

            _$img = _this.$slide.eq(index).find('.lg-object');
            if (_sizes) {
                _$img.attr('sizes', _sizes);
            }

            if (_srcset) {
                _$img.attr('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_$img[0]]
                    });
                } catch (e) {
                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _this.$slide.eq(index).addClass('lg-loaded');
        }

        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !$('body').hasClass('lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function() {
                _this.$slide.eq(index).addClass('lg-complete');
                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
            }, _speed);

        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _this.$slide.eq(index).addClass('lg-complete');
        }

        if (rec === true) {
            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

        var _prevIndex = this.$outer.find('.lg-current').index();
        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && (_prevIndex === index)) {
            return;
        }

        var _length = this.$slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

                }

                if (_src) {
                    $('#lg-download').attr('href', _src);
                    _this.$outer.removeClass('lg-hide-download');
                } else {
                    _this.$outer.addClass('lg-hide-download');
                }
            }

            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function() {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!direction) {
                if (index < _prevIndex) {
                    direction = 'prev';
                } else if (index > _prevIndex) {
                    direction = 'next';
                }
            }

            if (!fromTouch) {

                // remove all transitions
                _this.$outer.addClass('lg-no-trans');

                this.$slide.removeClass('lg-prev-slide lg-next-slide');

                if (direction === 'prev') {

                    //prevslide
                    this.$slide.eq(index).addClass('lg-prev-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
                } else {

                    // next slide
                    this.$slide.eq(index).addClass('lg-next-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function() {
                    _this.$slide.removeClass('lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _this.$slide.eq(index).addClass('lg-current');

                    // reset all transitions
                    _this.$outer.removeClass('lg-no-trans');
                }, 50);
            } else {

                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev;
                var touchNext;
                if (_length > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;

                    if ((index === 0) && (_prevIndex === _length - 1)) {

                        // next slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

                        // prev slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    }

                } else {
                    touchPrev = 0;
                    touchNext = 1;
                }

                if (direction === 'prev') {
                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
                } else {
                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
                }

                _this.$slide.eq(index).addClass('lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function() {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function() {
                    _this.lgBusy = false;
                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                }, this.s.speed);

            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                $('#lg-counter-current').text(index + 1);
            }

        }
        _this.index = index;

    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if ((_this.index + 1) < _this.$slide.length) {
                _this.index++;
                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                _this.slide(_this.index, fromTouch, false, 'next');
            } else {
                if (_loop) {
                    _this.index = 0;
                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                    _this.slide(_this.index, fromTouch, false, 'next');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-right-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                _this.slide(_this.index, fromTouch, false, 'prev');
            } else {
                if (_loop) {
                    _this.index = _this.$items.length - 1;
                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                    _this.slide(_this.index, fromTouch, false, 'prev');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-left-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function() {
        var _this = this;
        if (this.$items.length > 1) {
            $(window).on('keyup.lg', function(e) {
                if (_this.$items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        $(window).on('keydown.lg', function(e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_this.$outer.hasClass('lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _this.$outer.removeClass('lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function() {
        var _this = this;
        this.$outer.find('.lg-prev').on('click.lg', function() {
            _this.goToPrevSlide();
        });

        this.$outer.find('.lg-next').on('click.lg', function() {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function(index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            if ((index + 1) < this.$slide.length) {
                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
            }

            if (index > 0) {
                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            $el.css('left', xValue);
        } else {
            $el.css({
                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
            });
        }
    };

    Plugin.prototype.touchMove = function(startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            this.$outer.addClass('lg-dragging');

            // move current slide
            this.setTranslate(this.$slide.eq(this.index), distance, 0);

            // move next and prev slide with current slide
            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function(distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _this.$outer.addClass('lg-slide');
        }

        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

        // set transition duration
        setTimeout(function() {
            _this.$outer.removeClass('lg-dragging');
            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToNextSlide(true);
            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _this.$el.trigger('onSlideClick.lg');
            }

            _this.$slide.removeAttr('style');
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function() {
            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
                _this.$outer.removeClass('lg-slide');
            }
        }, _this.s.speed + 100);

    };

    Plugin.prototype.enableSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.doCss()) {

            _this.$slide.on('touchstart.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.originalEvent.targetTouches[0].pageX;
                }
            });

            _this.$slide.on('touchmove.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    e.preventDefault();
                    endCoords = e.originalEvent.targetTouches[0].pageX;
                    _this.touchMove(startCoords, endCoords);
                    isMoved = true;
                }
            });

            _this.$slide.on('touchend.lg', function() {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords - startCoords);
                    } else {
                        _this.$el.trigger('onSlideClick.lg');
                    }
                }
            });
        }

    };

    Plugin.prototype.enableDrag = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && _this.doCss()) {
            _this.$slide.on('mousedown.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy && !$(e.target).text().trim()) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.pageX;
                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.$outer.scrollLeft += 1;
                    _this.$outer.scrollLeft -= 1;

                    // *

                    _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

                    _this.$el.trigger('onDragstart.lg');
                }
            });

            $(window).on('mousemove.lg', function(e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _this.$el.trigger('onDragmove.lg');
                }
            });

            $(window).on('mouseup.lg', function(e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _this.$el.trigger('onDragend.lg');
                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                    _this.$el.trigger('onSlideClick.lg');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });

        }
    };

    Plugin.prototype.manageSwipeClass = function() {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.s.loop && this.$slide.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.$slide.length - 1;
            } else if (this.index === this.$slide.length - 1) {
                _touchNext = 0;
            }
        }

        this.$slide.removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
        }

        this.$slide.eq(_touchNext).addClass('lg-next-slide');
    };

    Plugin.prototype.mousewheel = function() {
        var _this = this;
        _this.$outer.on('mousewheel.lg', function(e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });

    };

    Plugin.prototype.closeGallery = function() {

        var _this = this;
        var mousedown = false;
        this.$outer.find('.lg-close').on('click.lg', function() {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _this.$outer.on('mousedown.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }

            });
            
            _this.$outer.on('mousemove.lg', function() {
                mousedown = false;
            });

            _this.$outer.on('mouseup.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
                    if (!_this.$outer.hasClass('lg-dragging')) {
                        _this.destroy();
                    }
                }

            });

        }

    };

    Plugin.prototype.destroy = function(d) {

        var _this = this;

        if (!d) {
            _this.$el.trigger('onBeforeClose.lg');
            $(window).scrollTop(_this.prevScrollTop);
        }


        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection
                this.$items.off('click.lg click.lgcustom');
            }

            $.removeData(_this.el, 'lightGallery');
        }

        // Unbind all events added by lightGallery
        this.$el.off('.lg.tm');

        // Distroy all lightGallery modules
        $.each($.fn.lightGallery.modules, function(key) {
            if (_this.modules[key]) {
                _this.modules[key].destroy();
            }
        });

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        $(window).off('.lg');
        $('body').removeClass('lg-on lg-from-hash');

        if (_this.$outer) {
            _this.$outer.removeClass('lg-visible');
        }

        $('.lg-backdrop').removeClass('in');

        setTimeout(function() {
            if (_this.$outer) {
                _this.$outer.remove();
            }

            $('.lg-backdrop').remove();

            if (!d) {
                _this.$el.trigger('onCloseAfter.lg');
            }

        }, _this.s.backdropDuration + 50);
    };

    $.fn.lightGallery = function(options) {
        return this.each(function() {
            if (!$.data(this, 'lightGallery')) {
                $.data(this, 'lightGallery', new Plugin(this, options));
            } else {
                try {
                    $(this).data('lightGallery').init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        });
    };

    $.fn.lightGallery.modules = {};

})();


}));

/*! lg-autoplay - v1.0.4 - 2017-03-28
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {


(function() {

    'use strict';

    var defaults = {
        autoplay: false,
        pause: 5000,
        progressBar: true,
        fourceAutoplay: false,
        autoplayControls: true,
        appendAutoplayControlsTo: '.lg-toolbar'
    };

    /**
     * Creates the autoplay plugin.
     * @param {object} element - lightGallery element
     */
    var Autoplay = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // Execute only if items are above 1
        if (this.core.$items.length < 2) {
            return false;
        }

        this.core.s = $.extend({}, defaults, this.core.s);
        this.interval = false;

        // Identify if slide happened from autoplay
        this.fromAuto = true;

        // Identify if autoplay canceled from touch/drag
        this.canceledOnTouch = false;

        // save fourceautoplay value
        this.fourceAutoplayTemp = this.core.s.fourceAutoplay;

        // do not allow progress bar if browser does not support css3 transitions
        if (!this.core.doCss()) {
            this.core.s.progressBar = false;
        }

        this.init();

        return this;
    };

    Autoplay.prototype.init = function() {
        var _this = this;

        // append autoplay controls
        if (_this.core.s.autoplayControls) {
            _this.controls();
        }

        // Create progress bar
        if (_this.core.s.progressBar) {
            _this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
        }

        // set progress
        _this.progress();

        // Start autoplay
        if (_this.core.s.autoplay) {
            _this.$el.one('onSlideItemLoad.lg.tm', function() {
                _this.startlAuto();
            });
        }

        // cancel interval on touchstart and dragstart
        _this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function() {
            if (_this.interval) {
                _this.cancelAuto();
                _this.canceledOnTouch = true;
            }
        });

        // restore autoplay if autoplay canceled from touchstart / dragstart
        _this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function() {
            if (!_this.interval && _this.canceledOnTouch) {
                _this.startlAuto();
                _this.canceledOnTouch = false;
            }
        });

    };

    Autoplay.prototype.progress = function() {

        var _this = this;
        var _$progressBar;
        var _$progress;

        _this.$el.on('onBeforeSlide.lg.tm', function() {

            // start progress bar animation
            if (_this.core.s.progressBar && _this.fromAuto) {
                _$progressBar = _this.core.$outer.find('.lg-progress-bar');
                _$progress = _this.core.$outer.find('.lg-progress');
                if (_this.interval) {
                    _$progress.removeAttr('style');
                    _$progressBar.removeClass('lg-start');
                    setTimeout(function() {
                        _$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
                        _$progressBar.addClass('lg-start');
                    }, 20);
                }
            }

            // Remove setinterval if slide is triggered manually and fourceautoplay is false
            if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
                _this.cancelAuto();
            }

            _this.fromAuto = false;

        });
    };

    // Manage autoplay via play/stop buttons
    Autoplay.prototype.controls = function() {
        var _this = this;
        var _html = '<span class="lg-autoplay-button lg-icon"></span>';

        // Append autoplay controls
        $(this.core.s.appendAutoplayControlsTo).append(_html);

        _this.core.$outer.find('.lg-autoplay-button').on('click.lg', function() {
            if ($(_this.core.$outer).hasClass('lg-show-autoplay')) {
                _this.cancelAuto();
                _this.core.s.fourceAutoplay = false;
            } else {
                if (!_this.interval) {
                    _this.startlAuto();
                    _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
                }
            }
        });
    };

    // Autostart gallery
    Autoplay.prototype.startlAuto = function() {
        var _this = this;

        _this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
        _this.core.$outer.addClass('lg-show-autoplay');
        _this.core.$outer.find('.lg-progress-bar').addClass('lg-start');

        _this.interval = setInterval(function() {
            if (_this.core.index + 1 < _this.core.$items.length) {
                _this.core.index++;
            } else {
                _this.core.index = 0;
            }

            _this.fromAuto = true;
            _this.core.slide(_this.core.index, false, false, 'next');
        }, _this.core.s.speed + _this.core.s.pause);
    };

    // cancel Autostart
    Autoplay.prototype.cancelAuto = function() {
        clearInterval(this.interval);
        this.interval = false;
        this.core.$outer.find('.lg-progress').removeAttr('style');
        this.core.$outer.removeClass('lg-show-autoplay');
        this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
    };

    Autoplay.prototype.destroy = function() {

        this.cancelAuto();
        this.core.$outer.find('.lg-progress-bar').remove();
    };

    $.fn.lightGallery.modules.autoplay = Autoplay;

})();


}));

/*! lg-fullscreen - v1.1.0 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        fullScreen: true
    };

    function isFullScreen() {
        return (
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
        );
    }

    var Fullscreen = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // extend module defalut settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.init();

        return this;
    };

    Fullscreen.prototype.init = function() {
        var fullScreen = '';
        if (this.core.s.fullScreen) {

            // check for fullscreen browser support
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled &&
                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                return;
            } else {
                fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
                this.core.$outer.find('.lg-toolbar').append(fullScreen);
                this.fullScreen();
            }
        }
    };

    Fullscreen.prototype.requestFullscreen = function() {
        var el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    };

    Fullscreen.prototype.exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
    Fullscreen.prototype.fullScreen = function() {
        var _this = this;

        $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function() {
            _this.core.$outer.toggleClass('lg-fullscreen-on');
        });

        this.core.$outer.find('.lg-fullscreen').on('click.lg', function() {
            if (isFullScreen()) {
                _this.exitFullscreen();
            } else {
                _this.requestFullscreen();
            }
        });

    };

    Fullscreen.prototype.destroy = function() {

        // exit from fullscreen if activated
        if(isFullScreen()) {
            this.exitFullscreen();
        }

        $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
    };

    $.fn.lightGallery.modules.fullscreen = Fullscreen;

})();

}));

/*! lg-pager - v1.0.2 - 2017-01-22
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        pager: false
    };

    var Pager = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);
        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.pager && this.core.$items.length > 1) {
            this.init();
        }

        return this;
    };

    Pager.prototype.init = function() {
        var _this = this;
        var pagerList = '';
        var $pagerCont;
        var $pagerOuter;
        var timeout;

        _this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[i].thumb + '" /></div></span>';
            }
        } else {
            _this.core.$items.each(function() {

                if (!_this.core.s.exThumbImage) {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).find('img').attr('src') + '" /></div></span>';
                } else {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).attr(_this.core.s.exThumbImage) + '" /></div></span>';
                }

            });
        }

        $pagerOuter = _this.core.$outer.find('.lg-pager-outer');

        $pagerOuter.html(pagerList);

        $pagerCont = _this.core.$outer.find('.lg-pager-cont');
        $pagerCont.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            _this.core.index = _$this.index();
            _this.core.slide(_this.core.index, false, true, false);
        });

        $pagerOuter.on('mouseover.lg', function() {
            clearTimeout(timeout);
            $pagerOuter.addClass('lg-pager-hover');
        });

        $pagerOuter.on('mouseout.lg', function() {
            timeout = setTimeout(function() {
                $pagerOuter.removeClass('lg-pager-hover');
            });
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function(e, prevIndex, index) {
            $pagerCont.removeClass('lg-pager-active');
            $pagerCont.eq(index).addClass('lg-pager-active');
        });

    };

    Pager.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.pager = Pager;

})();


}));

/*! lg-thumbnail - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbHeight: '80px',
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toogleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        // extend module default settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.$el = $(element);
        this.$thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = (this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
        this.thumbIndex = this.core.index;

        if (this.core.s.animateThumb) {
            this.core.s.thumbHeight = '100%';
        }

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function() {
        var _this = this;
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function(){
                    _this.core.$outer.addClass('lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                this.core.$outer.addClass('lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb && this.core.doCss()) {
                if (this.core.s.enableThumbDrag) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toogle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {

                if (!_this.core.s.exThumbImage) {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    Thumbnail.prototype.setTranslate = function(value) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        this.core.$outer.find('.lg-thumb').css({
            transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
        });
    };

    Thumbnail.prototype.animateThumb = function(index) {
        var $thumb = this.core.$outer.find('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = ((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
            if (this.left > (this.thumbTotalWidth - this.thumbOuterWidth)) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!$thumb.hasClass('on')) {
                    this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.animate({
                        left: -this.left + 'px'
                    }, this.core.s.speed);
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.css('left', -this.left + 'px');
                }
            }

            this.setTranslate(this.left);

        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function() {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        _this.$thumbOuter.addClass('lg-grab');

        _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.$outer.scrollLeft += 1;
                _this.core.$outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
            }
        });

        $(window).on('mousemove.lg.thumb', function(e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        $(window).on('mouseup.lg.thumb', function() {
            if (isMoved) {
                isMoved = false;
                _this.$thumbOuter.removeClass('lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }

            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });

    };

    Thumbnail.prototype.enableThumbSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.originalEvent.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                isMoved = true;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchend.lg', function() {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });

    };

    Thumbnail.prototype.toogle = function() {
        var _this = this;
        if (_this.core.s.toogleThumb) {
            _this.core.$outer.addClass('lg-can-toggle');
            _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
            _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function() {
                _this.core.$outer.toggleClass('lg-thumb-open');
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function() {
        var _this = this;
        $(window).on('keydown.lg.thumb', function(e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.$outer.addClass('lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.$outer.removeClass('lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function() {
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
            this.$thumbOuter.remove();
            this.core.$outer.removeClass('lg-has-thumb');
        }
    };

    $.fn.lightGallery.modules.Thumbnail = Thumbnail;

})();

}));

/*! lg-video - v1.2.2 - 2018-05-01
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {
    
        'use strict';
    
        var defaults = {
            videoMaxWidth: '855px',

            autoplayFirstVideo: true,

            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,

            videojs: false,
            videojsOptions: {}
        };
    
        var Video = function(element) {
    
            this.core = $(element).data('lightGallery');
    
            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;
    
            this.init();
    
            return this;
        };
    
        Video.prototype.init = function() {
            var _this = this;
    
            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
    
            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
    
            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
                _this.core.$el.on('onSlideClick.lg.tm', function() {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    _this.loadVideoOnclick($el);
                });
            } else {
    
                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function() {
                    _this.loadVideoOnclick($(this));
                });
            }
    
            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
    
            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
            });
            
            if (_this.core.s.autoplayFirstVideo) {
                _this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index) {
                    if (!_this.core.lGalleryOn) {
                        var $el = _this.core.$slide.eq(index);
                        setTimeout(function () {
                            _this.loadVideoOnclick($el);
                        }, 100);
                    }
                });
            }
        };
    
        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};
    
            // Enable autoplay based on setting for first video if poster doesn't exist
            if (noPoster) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
                }
            }
    
            if (isVideo.youtube) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.vimeo) {
    
                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    
            } else if (isVideo.dailymotion) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }
    
                video = html;
    
            } else if (isVideo.vk) {
    
                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="//vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            }
    
            return video;
        };

        Video.prototype.loadVideoOnclick = function($el){

            var _this = this;
            // check slide has poster
            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                // check already video element present
                if (!$el.hasClass('lg-has-video')) {

                    $el.addClass('lg-video-playing lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function(_src, _html) {

                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                            }
                        }

                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);

                    } else {

                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                        _loadVideo(_src, _html);

                    }

                    var $tempImg = $el.find('.lg-object');
                    $el.find('.lg-video').append($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                        $el.removeClass('lg-complete');
                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
                            $el.addClass('lg-complete');
                        });
                    }

                } else {

                    var youtubePlayer = $el.find('.lg-youtube').get(0);
                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                    var html5Player = $el.find('.lg-html5').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');

                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    $el.addClass('lg-video-playing');

                }
            }
        };
    
        Video.prototype.destroy = function() {
            this.videoLoaded = false;
        };

        function onHasVideo(event, index, src, html) {
            /*jshint validthis:true */
            var _this = this;
            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
            if (html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                    }
                }
            }
        }

        function onAferAppendSlide(event, index) {
            /*jshint validthis:true */
            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
            if (!$videoCont.hasClass('lg-has-iframe')) {
                $videoCont.css('max-width', this.core.s.videoMaxWidth);
                this.videoLoaded = true;
            }
        }

        function onBeforeSlide(event, prevIndex, index) {
            /*jshint validthis:true */
            var _this = this;

            var $videoSlide = _this.core.$slide.eq(prevIndex);
            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
            var html5Player = $videoSlide.find('.lg-html5').get(0);
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');

            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            } if (vkPlayer) {
                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[index].src;
            } else {
                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

            }

            var _isVideo = _this.core.isVideo(_src, index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                _this.core.$outer.addClass('lg-hide-download');
            }

        }
    
        $.fn.lightGallery.modules.video = Video;
    
    })();

}));

/*! lg-zoom - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var getUseLeft = function() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var defaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = $(window).width() / 2;
            this.pageY = ($(window).height() / 2) + $(window).scrollTop();
        }

        return this;
    };

    Zoom.prototype.init = function() {

        var _this = this;
        var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
        }

        if (_this.core.s.useLeftForZoom) {
            _this.core.$outer.addClass('lg-use-left-for-zoom');
        } else {
            _this.core.$outer.addClass('lg-use-transition-for-zoom');
        }

        this.core.$outer.find('.lg-toolbar').append(zoomIcons);

        // Add zoomable class
        _this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function(event, index, delay) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if ($('body').hasClass('lg-from-hash') && delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                $('body').removeClass('lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function() {
                _this.core.$slide.eq(index).addClass('lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function(scaleVal) {

            var $image = _this.core.$outer.find('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = ($(window).width() - $image.prop('offsetWidth')) / 2;
            var offsetY = (($(window).height() - $image.prop('offsetHeight')) / 2) + $(window).scrollTop();

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * (_x);
            var y = (scaleVal - 1) * (_y);

            $image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                $image.parent().css({
                    left: -x + 'px',
                    top: -y + 'px'
                }).attr('data-x', x).attr('data-y', y);
            } else {
                $image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
            }
        };

        var callScale = function() {
            if (scale > 1) {
                _this.core.$outer.addClass('lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function(event, $image, index, fromIcon) {
            var w = $image.prop('offsetWidth');
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || $image[0].naturalWidth || w;
            } else {
                nw = _this.core.$items.eq(index).attr('data-width') || $image[0].naturalWidth || w;
            }

            var _scale;

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = $(window).width() / 2;
                _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            } else {
                _this.pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function() {
                _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        _this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function(event, index) {

            // Get the current element
            var $image = _this.core.$slide.eq(index).find('.lg-image');

            $image.on('dblclick', function(event) {
                actualSize(event, $image, index);
            });

            $image.on('touchstart', function(event) {
                if (!tapped) {
                    tapped = setTimeout(function() {
                        tapped = null;
                    }, 300);
                } else {
                    clearTimeout(tapped);
                    tapped = null;
                    actualSize(event, $image, index);
                }

                event.preventDefault();
            });

        });

        // Update zoom on resize and orientationchange
        $(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function() {
            _this.pageX = $(window).width() / 2;
            _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            zoom(scale);
        });

        $('#lg-zoom-out').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-zoom-in').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-actual-size').on('click.lg', function(event) {
            actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        _this.zoomDrag();

        _this.zoomSwipe();

    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function() {
        this.core.$outer.removeClass('lg-zoomed');
        this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
        this.core.$slide.find('.lg-image').removeAttr('style data-scale');

        // Reset pagx pagy values to center
        this.pageX = $(window).width() / 2;
        this.pageY = ($(window).height() / 2) + $(window).scrollTop();
    };

    Zoom.prototype.zoomSwipe = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('touchstart.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
                if ((allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.originalEvent.targetTouches[0].pageX,
                        y: e.originalEvent.targetTouches[0].pageY
                    };
                }
            }

        });

        _this.core.$slide.on('touchmove.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {

                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                e.preventDefault();
                isMoved = true;

                endCoords = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {

                    if (_this.core.s.useLeftForZoom) {
                        _$el.css({
                            left: distanceX + 'px',
                            top: distanceY + 'px'
                        });
                    } else {
                        _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                    }
                }

            }

        });

        _this.core.$slide.on('touchend.lg', function() {
            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if (isMoved) {
                    isMoved = false;
                    _this.core.$outer.removeClass('lg-zoom-dragging');
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }
            }
        });

    };

    Zoom.prototype.zoomDrag = function() {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('mousedown.lg.zoom', function(e) {

            // execute only on .lg-object
            var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

            allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
            allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if ($(e.target).hasClass('lg-object') && (allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };

                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.$outer.scrollLeft += 1;
                    _this.core.$outer.scrollLeft -= 1;

                    _this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
                }
            }
        });

        $(window).on('mousemove.lg.zoom', function(e) {
            if (isDraging) {
                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = {
                    x: e.pageX,
                    y: e.pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _$el.css({
                        left: distanceX + 'px',
                        top: distanceY + 'px'
                    });
                } else {
                    _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        $(window).on('mouseup.lg.zoom', function(e) {

            if (isDraging) {
                isDraging = false;
                _this.core.$outer.removeClass('lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && ((startCoords.x !== endCoords.x) || (startCoords.y !== endCoords.y))) {
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }

                isMoved = false;
            }

            _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');

        });
    };

    Zoom.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY) {

        var _this = this;
        var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
        var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');
        var distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
        var distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
        var minY = (_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
        var maxY = Math.abs(($image.prop('offsetHeight') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').height() + minY);
        var minX = (_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
        var maxX = Math.abs(($image.prop('offsetWidth') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').width() + minX);

        if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {
            if (allowY) {
                if (distanceY <= -maxY) {
                    distanceY = -maxY;
                } else if (distanceY >= -minY) {
                    distanceY = -minY;
                }
            }

            if (allowX) {
                if (distanceX <= -maxX) {
                    distanceX = -maxX;
                } else if (distanceX >= -minX) {
                    distanceX = -minX;
                }
            }

            if (allowY) {
                _$el.attr('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_$el.attr('data-y'));
            }

            if (allowX) {
                _$el.attr('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_$el.attr('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _$el.css({
                    left: distanceX + 'px',
                    top: distanceY + 'px'
                });
            } else {
                _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }

        }
    };

    Zoom.prototype.destroy = function() {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        _this.core.$el.off('.lg.zoom');
        $(window).off('.lg.zoom');
        _this.core.$slide.off('.lg.zoom');
        _this.core.$el.off('.lg.tm.zoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    $.fn.lightGallery.modules.zoom = Zoom;

})();


}));

/*! lg-hash - v1.0.4 - 2017-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        hash: true
    };

    var Hash = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.hash) {
            this.oldHash = window.location.hash;
            this.init();
        }

        return this;
    };

    Hash.prototype.init = function() {
        var _this = this;
        var _hash;

        // Change hash value on after each slide transition
        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {
            if (history.replaceState) {
                history.replaceState(null, null, window.location.pathname + window.location.search + '#lg=' + _this.core.s.galleryId + '&slide=' + index);
            } else {
                window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + index;
            }
        });

        // Listen hash change and change the slide according to slide value
        $(window).on('hashchange.lg.hash', function() {
            _hash = window.location.hash;
            var _idx = parseInt(_hash.split('&slide=')[1], 10);

            // it galleryId doesn't exist in the url close the gallery
            if ((_hash.indexOf('lg=' + _this.core.s.galleryId) > -1)) {
                _this.core.slide(_idx, false, false);
            } else if (_this.core.lGalleryOn) {
                _this.core.destroy();
            }

        });
    };

    Hash.prototype.destroy = function() {

        if (!this.core.s.hash) {
            return;
        }

        // Reset to old hash value
        if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
            if (history.replaceState) {
                history.replaceState(null, null, this.oldHash);
            } else {
                window.location.hash = this.oldHash;
            }
        } else {
            if (history.replaceState) {
                history.replaceState(null, document.title, window.location.pathname + window.location.search);
            } else {
                window.location.hash = '';
            }
        }

        this.core.$el.off('.lg.hash');

    };

    $.fn.lightGallery.modules.hash = Hash;

})();


}));

/*! lg-share - v1.1.0 - 2017-10-03
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        facebookDropdownText: 'Facebook',
        twitter: true,
        twitterDropdownText: 'Twitter',
        googlePlus: true,
        googlePlusDropdownText: 'GooglePlus',
        pinterest: true,
        pinterestDropdownText: 'Pinterest'
    };

    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };

    Share.prototype.init = function() {
        var _this = this;
        var shareHtml = '<span id="lg-share" class="lg-icon">' +
            '<ul class="lg-dropdown" style="position: absolute;">';
        shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
        shareHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(shareHtml);
        this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        $('#lg-share').on('click.lg', function(){
            _this.core.$outer.toggleClass('lg-dropdown-active');
        });

        $('#lg-dropdown-overlay').on('click.lg', function(){
            _this.core.$outer.removeClass('lg-dropdown-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {

                $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.getSahreProps(index, 'facebookShareUrl') || window.location.href)));

                $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.getSahreProps(index, 'tweetText') + '&url=' + (encodeURIComponent(_this.getSahreProps(index, 'twitterShareUrl') || window.location.href)));

                $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.getSahreProps(index, 'googleplusShareUrl') || window.location.href)));

                $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.getSahreProps(index, 'pinterestShareUrl') || window.location.href)) + '&media=' + encodeURIComponent(_this.getSahreProps(index, 'src')) + '&description=' + _this.getSahreProps(index, 'pinterestText'));

            }, 100);
        });
    };

    Share.prototype.getSahreProps = function(index, prop){
        var shareProp = '';
        if(this.core.s.dynamic) {
            shareProp = this.core.s.dynamicEl[index][prop];
        } else {
            var _href = this.core.$items.eq(index).attr('href');
            var _prop = this.core.$items.eq(index).data(prop);
            shareProp = prop === 'src' ? _href || _prop : _prop;
        }
        return shareProp;
    };

    Share.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.share = Share;

})();



}));

/*! lg-video - v1.2.2 - 2018-05-01
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {
    
        'use strict';
    
        var defaults = {
            videoMaxWidth: '855px',

            autoplayFirstVideo: true,

            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,

            videojs: false,
            videojsOptions: {}
        };
    
        var Video = function(element) {
    
            this.core = $(element).data('lightGallery');
    
            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;
    
            this.init();
    
            return this;
        };
    
        Video.prototype.init = function() {
            var _this = this;
    
            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
    
            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
    
            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
                _this.core.$el.on('onSlideClick.lg.tm', function() {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    _this.loadVideoOnclick($el);
                });
            } else {
    
                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function() {
                    _this.loadVideoOnclick($(this));
                });
            }
    
            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
    
            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
            });
            
            if (_this.core.s.autoplayFirstVideo) {
                _this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index) {
                    if (!_this.core.lGalleryOn) {
                        var $el = _this.core.$slide.eq(index);
                        setTimeout(function () {
                            _this.loadVideoOnclick($el);
                        }, 100);
                    }
                });
            }
        };
    
        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};
    
            // Enable autoplay based on setting for first video if poster doesn't exist
            if (noPoster) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
                }
            }
    
            if (isVideo.youtube) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.vimeo) {
    
                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    
            } else if (isVideo.dailymotion) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }
    
                video = html;
    
            } else if (isVideo.vk) {
    
                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="//vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            }
    
            return video;
        };

        Video.prototype.loadVideoOnclick = function($el){

            var _this = this;
            // check slide has poster
            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                // check already video element present
                if (!$el.hasClass('lg-has-video')) {

                    $el.addClass('lg-video-playing lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function(_src, _html) {

                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                            }
                        }

                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);

                    } else {

                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                        _loadVideo(_src, _html);

                    }

                    var $tempImg = $el.find('.lg-object');
                    $el.find('.lg-video').append($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                        $el.removeClass('lg-complete');
                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
                            $el.addClass('lg-complete');
                        });
                    }

                } else {

                    var youtubePlayer = $el.find('.lg-youtube').get(0);
                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                    var html5Player = $el.find('.lg-html5').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');

                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    $el.addClass('lg-video-playing');

                }
            }
        };
    
        Video.prototype.destroy = function() {
            this.videoLoaded = false;
        };

        function onHasVideo(event, index, src, html) {
            /*jshint validthis:true */
            var _this = this;
            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
            if (html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                    }
                }
            }
        }

        function onAferAppendSlide(event, index) {
            /*jshint validthis:true */
            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
            if (!$videoCont.hasClass('lg-has-iframe')) {
                $videoCont.css('max-width', this.core.s.videoMaxWidth);
                this.videoLoaded = true;
            }
        }

        function onBeforeSlide(event, prevIndex, index) {
            /*jshint validthis:true */
            var _this = this;

            var $videoSlide = _this.core.$slide.eq(prevIndex);
            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
            var html5Player = $videoSlide.find('.lg-html5').get(0);
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');

            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            } if (vkPlayer) {
                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[index].src;
            } else {
                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

            }

            var _isVideo = _this.core.isVideo(_src, index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                _this.core.$outer.addClass('lg-hide-download');
            }

        }
    
        $.fn.lightGallery.modules.video = Video;
    
    })();

}));

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

(function($) {
  var pubsub = $({});

  $.subscribe = function() {
    pubsub.on.apply(pubsub, arguments);
  };
  $.unsubscribe = function() {
    pubsub.off.apply(pubsub, arguments);
  };
  $.publish = function() {
    pubsub.trigger.apply(pubsub, arguments);
  };

  pubStack = []; // стэк событий опубликованных до инициализации всех виджетов

  $.initWidgets = function($block) {
    // виджеты могут быть иницилизированны как внутри всей страницы, так и внутри конкретного блока
    var $context = $block || $('html');

    // Если какой-либо виджет публикует событие при инициализации,
    // в момент до того как будет инициализирован виджет который подпишется на это событие
    // то последний не сможет обработать это событие, т.к. оно произойдет раньше подписки.
    // Для это переопределяем метод publish,
    // что все события произошедшие до момента иницилизации всех виджетов попали в массив,
    // из которого мы их вызовем после загрузки всех виджетов
    $.publish = function(eventName, data) {
      pubStack.push({eventName: eventName, data: data});
    };

    $.each($context.find('.js-widget'), function() {
      var $this = $(this),
        config = this.onclick ? this.onclick() : {};

      for (var widget in config) {
        if ($.fn[widget]) {
          $this[widget](config[widget])
          .removeClass('js-widget')
          .addClass('js-widget-inited');
        }
      }
    });

    // возвращаем в исходное состояние
    $.publish = function() {
      pubsub.trigger.apply(pubsub, arguments);
    };

    // вызываем "скопившиеся" опубликованные события
    $.each(pubStack, function() {
      $.publish(this.eventName, this.data);
    });

    // отчищаем стэк опубликованных событий
    pubStack.length = 0;
  };
  $.destroyWidgets = function($block) {
    // виджеты могут быть удалены как внутри всего сайт, так и внутри конкретного блока
    var $context = $block || $('html');

    $.each($context.find('.js-widget-inited'), function() {
      var $this = $(this),
        config = this.onclick ? this.onclick() : {};

      for (var widget in config) {
        if ($.fn[widget]) {
          $this[widget]('destroy')
          .removeClass('js-widget-inited')
          .addClass('js-widget');
        }
      }
    });
  };

}(jQuery));

$(function() {
  // поиск и инициализация всех виджетов на странице
  $.initWidgets();
});
"use strict";

var videoContainer = document.querySelector('.background-video');
var bgVideo = videoContainer && videoContainer.querySelector('video');
var mainMenu = document.querySelector('.main-menu');
var menu = document.querySelector('.menu');
var contactsLinks = document.querySelector('.contacts-links');
var promoVideo = document.querySelector('.promo-video');

var getVideoAspectRatio = function getVideoAspectRatio() {
  return window.innerWidth < 768 ? 3 / 4 : 16 / 9;
};

var VIDEO_GAP = 550;

var updateVideoSize = function updateVideoSize(video) {
  var newWidth;
  var newHeight;
  var $el = $(video);
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if (windowWidth > 1500) {
    newWidth = '100%';
    newHeight = 'auto';
  } else {
    newWidth = windowHeight > windowWidth - VIDEO_GAP ? 'auto' : '100%';
    newHeight = windowHeight > windowWidth - VIDEO_GAP ? '100%' : 'auto';
  }

  $el.width(newWidth).height(newHeight);
};

var handleBackgroundVideo = function handleBackgroundVideo() {
  if (bgVideo) {
    updateVideoSize(bgVideo);
  }
};

var toggleIsBlack = function toggleIsBlack(isBlack) {
  if (!isBlack) {
    menu.classList.add('menu_black');

    if (contactsLinks) {
      contactsLinks.classList.add('contacts-links_black');
    }

    if (promoVideo) {
      promoVideo.classList.add('promo-video_black');
    }
  } else {
    menu.classList.remove('menu_black');

    if (contactsLinks) {
      contactsLinks.classList.remove('contacts-links_black');
    }

    if (promoVideo) {
      promoVideo.classList.remove('promo-video_black');
    }
  }
};

var getAnchors = function getAnchors() {
  return ['main', 'meet', 'provide', 'media', 'programs', 'reviews', 'contacts'];
};

var initFullPage = function initFullPage() {
  $('.page-container').fullpage({
    //options here
    licenseKey: '3B638E30-7BAE4068-BFE661C6-783CCD7A',
    anchors: getAnchors(),
    autoScrolling: true,
    scrollHorizontally: true,
    loopBottom: true,
    normalScrollElements: '.scrollable-content',
    responsiveWidth: 1024,
    responsiveHeight: 550,
    onLeave: function onLeave(origin, destination, direction) {
      var item = destination.item;
      var isBlack = item.classList.contains('section-black');
      toggleIsBlack(isBlack);
      $('.offer-info').fadeOut();
      closeMenu();
      window.lazyLoadInstance.update();
      var isDestinationVisible = $(destination.item).is(':visible');

      if (!isDestinationVisible) {
        if (direction === 'down') {
          setTimeout(function () {
            $('[href="#media"]')[0].click();
          }, 10);
        } else {
          setTimeout(function () {
            $('[href="#meet"]')[0].click();
          }, 10);
        }
      }

      $(mainMenu).addClass('_hidden');
      promoVideo.classList.add('_hidden');
    },
    afterLoad: function afterLoad(origin, destination, direction) {
      var item = destination.item;
      var isBlack = item.classList.contains('section-black');
      var anchor = item.dataset.anchor;

      if (destination.isFirst) {
        if (promoVideo) {
          promoVideo.classList.remove('_hidden');
        }

        $(mainMenu).removeClass('_hidden');
      } else {
        if (promoVideo) {
          promoVideo.classList.add('_hidden');
        }
      }

      $('.questions').fadeOut();
      $('.offer-info').fadeOut();
      $('body').removeClass('hidden');
      $('.menu').removeClass('hidden');
      $('.menu__link_active').removeClass('menu__link_active');
      $(".menu__link[href=\"#".concat(anchor, "\"]")).addClass('menu__link_active');
      toggleIsBlack(isBlack);
      window.lazyLoadInstance.update();
    }
  });
};

var closeMenu = function closeMenu() {
  $('.menu').removeClass('menu_opened');
  $('body').removeClass('hidden');
};

(function () {
  $(document).ready(function () {
    initFullPage();
    window.addEventListener('resize', function () {
      updateVideoSize(bgVideo);
    });
  });
  $('.move-to-link').click(function (e) {
    var moveTo = e.currentTarget.dataset.moveTo;
    fullpage_api.moveTo(moveTo);
  });
  $('.info-list__link').click(function (e) {
    var $target = $(e.currentTarget);
    var $section = $target.closest('.section');
    var $popup = $section.find('.info-block');
    var container = $section.find('.info-list');
    var inner = $popup[0].querySelector('.info-block__inner');
    $popup.fadeIn();
    container.addClass('info-list_opened');
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
  $('.info-block__close').click(function (e) {
    var $target = $(e.currentTarget);
    var $popup = $target.closest('.info-block');
    $popup.fadeOut();
    $('.info-list_opened').removeClass('info-list_opened');
  });
  var $orderModal = $('.order-modal');
  document.addEventListener('click', function (e) {
    var target = e.target;
    var isPopupClick = target.classList.contains('offer-info');
    var isInsidePopup = target.closest('.offer-info');

    if (!isPopupClick && !isInsidePopup) {
      $('.offer-info').fadeOut();
    }

    var isOrderModal = target.classList.contains('order-modal');
    var isInsideModal = target.closest('.order-modal');

    if (!isOrderModal && !isInsideModal) {
      $orderModal.fadeOut();
    }

    var isMenu = target.classList.contains('menu');
    var isInsideMenu = target.closest('.menu');

    if (!isMenu && !isInsideMenu) {
      closeMenu();
    }

    var isInfoBlock = target.classList.contains('info-block');
    var isInsideInfoBlock = target.closest('.info-block');
    var isOpenedLink = target.classList.contains('info-list__link');

    if (!isInfoBlock && !isInsideInfoBlock && !isOpenedLink) {
      closeInfoBlock();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      $('.offer-info').fadeOut();
      $orderModal.fadeOut();
      closeMenu();
      closeInfoBlock();
    }
  });

  function closeInfoBlock() {
    $('.info-block').fadeOut();
    $('.info-list_opened').removeClass('info-list_opened');
  }

  window.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });
  window.lazyLoadInstance.update();
  var $videoCard = $('.video-card');

  if ($videoCard) {
    $videoCard.lightGallery({
      selector: 'a',
      thumbnail: false,
      appendCounterTo: '.lg',
      addClass: 'no-pages'
    });
  }

  $('.promo-video').lightGallery({
    selector: '.promo-video__button',
    thumbnail: false,
    counter: false,
    appendCounterTo: '.lg'
  }); // handleBackgroundVideo();
})();
"use strict";

(function () {
  $('.menu__link').click(function (e) {
    var $target = $(e.currentTarget);
    $('.menu__link').removeClass('menu__link_active');
    $target.addClass('menu__link_active');

    if (window.outerWidth < 768) {
      $('.menu').removeClass('menu_opened');
      $('body').removeClass('hidden');
    }
  });
  $('.menu__toggle').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.currentTarget);
    var $menu = $target.closest('.menu');

    if ($menu.hasClass('menu_opened')) {
      $menu.removeClass('menu_opened');
      $('body').removeClass('hidden');
    } else {
      $menu.addClass('menu_opened');
      $('body').addClass('hidden');
    }
  });
})();
"use strict";

;

(function () {
  var $slider = $('.mosaic__inner');
  $('.mosaic').lightGallery({
    selector: '.mosaic__row a',
    thumbnail: false,
    appendCounterTo: '.lg'
  });
  $slider.slick({
    dots: true,
    arrows: true,
    // fade: true,
    speed: 1000,
    lazyLoad: 'ondemand',
    infinite: true,
    edgeFriction: '2',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    appendArrows: '.mosaic__controls',
    appendDots: '.mosaic__controls',
    centerPadding: '15%'
  });
})();
"use strict";

;

(function () {
  var openOfferPopup = function openOfferPopup(id) {
    var $popup = $(".offer-info[data-id=\"".concat(id, "\"]"));
    var inner = $popup[0].querySelector('.offer-info__text');
    $('.offer-info').fadeOut();
    $popup.css('display', 'flex').hide().fadeIn();
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
    $('body').addClass('hidden');
  };

  $('.offers__button').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = e.currentTarget; // const isInsideOffers = target.closest('.offers__item');
    // if (!isInsideOffers) {

    var id = target.dataset.id;
    openOfferPopup(id); // }
  });
  $('.offers__item').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $target = $(e.currentTarget);
    var id = $target.find('.offers__button').data('id');
    openOfferPopup(id);
  });
  $('.offer-info__back .close-btn').click(function (e) {
    var $target = $(e.currentTarget);
    var $popup = $target.closest('.offer-info');
    $popup.fadeOut();
    $('body').addClass('hidden');
  });
  $('.offer-info__button').click(function (e) {
    $(e.currentTarget).closest('.offer-info').fadeOut();
  });
})();
"use strict";

;

(function () {
  var $orderModal = $('.order-modal');
  var $orderForm = $('.order-modal__inner');
  var fieldsMap = {
    'name': 'Имя',
    'email': 'Почта',
    'event_type': 'Тип мероприятия',
    'budget': 'Бюджет',
    'day': 'День',
    'month': 'Месяц',
    'year': 'Год'
  };
  var $formLoader = $('.order-modal__loader');
  var $formMain = $('.order-modal__main');
  var $formSuccess = $('.order-modal__success-message');
  var orderForm = document.querySelector('.order-modal__inner');
  $orderForm.on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $form = $(e.currentTarget);
    var data = $form.serializeArray();
    var title = 'Раздел сайта - ' + $('title').text();
    var text = data.map(function (item) {
      return "".concat(fieldsMap[item.name], " - ").concat(item.value);
    });
    var resultText = text.join(' | \n');
    var dataText = "".concat(title, ".| \n ").concat(resultText);
    $formLoader.fadeIn();
    $.ajax({
      type: 'POST',
      url: '/mail.php',
      data: {
        dataText: dataText
      },
      success: function success(response) {
        $formMain.hide();
        $formSuccess.show();
        $formLoader.fadeOut();
        orderForm.reset();
      },
      error: function error(data) {
        orderForm.reset();
        $formLoader.fadeOut();
      }
    });
  });
  $('.order-modal__close').click(function () {
    $orderModal.fadeOut();
  });
  $('body').click(function (e) {
    var currentTarget = e.target;

    if (currentTarget.classList.contains('open-order')) {
      $('.lg-close').click();
      e.preventDefault();
      e.stopPropagation();
      $('body').css('overflow', 'visible');
      $formMain.show();
      $formSuccess.hide();
      $orderModal.fadeIn();
    }
  });
  var $daySelect = $('.labeled-select__select_day');
  var $monthSelect = $('.labeled-select__select_month');
  var $yearSelect = $('.labeled-select__select_year');
  var now = new Date();
  var calculatedYear = now.getFullYear();
  var maxYear = calculatedYear + 10;
  $yearSelect.html('');

  for (var i = calculatedYear; i <= maxYear; i++) {
    $yearSelect.append("<option>".concat(i, "</option>"));
  }

  updateDates();

  function zeroPad(num, size) {
    var s = String(num);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }

    return s;
  }

  $daySelect.val(now.getDate());
  $monthSelect.val(zeroPad(now.getMonth() + 1, 2));
  $yearSelect.val(now.getFullYear());
  $daySelect.change(function () {
    updateDates();
  });
  $monthSelect.change(function () {
    updateDates();
  });
  $yearSelect.change(function () {
    updateDates();
  });

  function updateDates() {
    var now = new Date();
    var currentDate = now.getDate();
    var currentMonth = now.getMonth() + 1;
    var currentYear = now.getFullYear();
    var selectedDate = Number($daySelect.val());
    var selectedMonth = Number($monthSelect.val());
    var selectedYear = Number($yearSelect.val());
    var selectedParsedDate = dayjs("".concat(selectedYear, "-").concat(selectedMonth, "-").concat(selectedDate));
    var currentParsedDate = dayjs(now);
    var selectedEqualCurrent = selectedYear === currentYear && selectedMonth === currentMonth;
    var maxDay = selectedParsedDate.daysInMonth();
    var dateDay = selectedEqualCurrent ? currentParsedDate.date() : 1;
    $daySelect.html('');

    for (var _i = dateDay; _i <= maxDay; _i++) {
      $daySelect.append("<option>".concat(_i, "</option>"));
    }

    $daySelect.val(selectedDate >= dateDay ? selectedDate : dateDay);
    var calculatedMonth = selectedYear === currentYear ? currentMonth : 1;
    var maxMonth = 12;
    $monthSelect.html('');

    for (var _i2 = calculatedMonth; _i2 <= maxMonth; _i2++) {
      $monthSelect.append("<option ".concat(_i2 === selectedMonth ? 'selected' : '', ">").concat(zeroPad(_i2, 2), "</option>"));
    }
  }
})();
"use strict";

;

(function () {
  $('.open-questions').click(function (e) {
    var $popup = $(".questions");
    var inner = $popup[0].querySelector('.questions__content');
    $('.menu').addClass('hidden');
    $('body').addClass('hidden');
    $popup.fadeIn();
    var instance = new OverlayScrollbars(inner, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
  $('.questions__close').click(function (e) {
    var $target = $(e.currentTarget);
    var $section = $target.closest('.questions');
    $('.menu').removeClass('hidden');
    $section.fadeOut();
    $('body').removeClass('hidden');
  });
})();
"use strict";

;

(function () {
  var slider = $('.slider__inner');
  slider.on('afterChange', function (event, currentSlide) {
    var slides = document.querySelectorAll('.slider__text');
    slides.forEach(function (slide) {
      var instance = new OverlayScrollbars(slide, {});
      instance.sleep();
      setTimeout(function () {
        instance.update(true);
      }, 1000);
    });
  });
  slider.on('init', function (event) {// console.log(event);
  });
  slider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15%',
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });
  var slides = document.querySelectorAll('.slider__text');
  slides.forEach(function (slide) {
    new OverlayScrollbars(slide);
    var instance = new OverlayScrollbars(slide, {});
    instance.sleep();
    setTimeout(function () {
      instance.update(true);
    }, 1000);
  });
})();