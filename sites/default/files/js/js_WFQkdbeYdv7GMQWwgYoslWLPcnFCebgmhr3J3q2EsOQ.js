/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.2
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.2",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;

    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });
    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $(once('contextual-render', '[data-contextual-id]', context));

      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));

        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }

        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);

              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);

      if (newIsOpen) {
        this.focus();
      }

      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }

      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,r=e.tabbable={};t(r),r.noConflict=function(){return e.tabbable=n,r}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},d=function(e,t){return!(!c(e,t)||l(t)||i(t)<0)},f=t.concat("iframe").join(",");e.focusable=function(e,t){return o(e,(t=t||{}).includeContainer,c.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,f)&&c(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&d(t,e)},e.tabbable=function(e,t){var n=[],r=[];return o(e,(t=t||{}).includeContainer,d.bind(null,t)).forEach((function(e,t){var o=i(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }

      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);

      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.uri) {
        var pb = this;
        var uri = this.uri;

        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }

        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;

  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };

  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };

  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, window, Drupal, drupalSettings, _ref) {
  var isFocusable = _ref.isFocusable,
      tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];

        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }

        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;

    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }

    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';

    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}

    responseText = '';

    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }

      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }

    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);

      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;

        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');

    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }

    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }

      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);

      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());

    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);

    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }

    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }

    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);

        if (response[i].command === 'invoke' && response[i].method === 'focus' || response[i].command === 'focusFirst') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};

    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();
    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;

        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');

      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);

      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');

        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');

            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);

      if (container) {
        var tabbableElements = tabbable(container);

        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }

      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));

      if (response.clearPrevious) {
        messages.clear();
      }

      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings, window.tabbable);;
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});

;
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});

/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);;
/*! SmartMenus jQuery Plugin - v1.0.0-beta1 - June 1, 2015
 * http://www.smartmenus.org/
 * Copyright 2015 Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */(function(t){function i(i){var r=".smartmenus_mouse";if(h||i)h&&i&&(t(document).unbind(r),h=!1);else{var u=!0,l=null;t(document).bind(o([["mousemove",function(i){var e={x:i.pageX,y:i.pageY,timeStamp:(new Date).getTime()};if(l){var s=Math.abs(l.x-e.x),o=Math.abs(l.y-e.y);if((s>0||o>0)&&2>=s&&2>=o&&300>=e.timeStamp-l.timeStamp&&(n=!0,u)){var r=t(i.target).closest("a");r.is("a")&&t.each(a,function(){return t.contains(this.$root[0],r[0])?(this.itemEnter({currentTarget:r[0]}),!1):void 0}),u=!1}}l=e}],[s()?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(t){e(t.originalEvent)&&(n=!1)}]],r)),h=!0}}function e(t){return!/^(4|mouse)$/.test(t.pointerType)}function s(){return"ontouchstart"in window}function o(i,e){e||(e="");var s={};return t.each(i,function(t,i){s[i[0].split(" ").join(e+" ")+e]=i[1]}),s}var a=[],r=!!window.createPopup,n=!1,h=!1;t.SmartMenus=function(i,e){this.$root=t(i),this.opts=e,this.rootId="",this.accessIdPrefix="",this.$subArrow=null,this.activatedItems=[],this.visibleSubMenus=[],this.showTimeout=0,this.hideTimeout=0,this.scrollTimeout=0,this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.idInc=0,this.$firstLink=null,this.$firstSub=null,this.disabled=!1,this.$disableOverlay=null,this.isTouchScrolling=!1,this.wasCollapsible=!1,this.init()},t.extend(t.SmartMenus,{hideAll:function(){t.each(a,function(){this.menuHideAll()})},destroy:function(){for(;a.length;)a[0].destroy();i(!0)},prototype:{init:function(e){var s=this;if(!e){a.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.accessIdPrefix="sm-"+this.rootId+"-",this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=!0);var r=".smartmenus";this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(o([["mouseover focusin",t.proxy(this.rootOver,this)],["mouseout focusout",t.proxy(this.rootOut,this)],["keydown",t.proxy(this.rootKeyDown,this)]],r)).delegate("a",o([["mouseenter",t.proxy(this.itemEnter,this)],["mouseleave",t.proxy(this.itemLeave,this)],["mousedown",t.proxy(this.itemDown,this)],["focus",t.proxy(this.itemFocus,this)],["blur",t.proxy(this.itemBlur,this)],["click",t.proxy(this.itemClick,this)],["touchend",t.proxy(this.itemTouchEnd,this)]],r)),r+=this.rootId,this.opts.hideOnClick&&t(document).bind(o([["touchstart",t.proxy(this.docTouchStart,this)],["touchmove",t.proxy(this.docTouchMove,this)],["touchend",t.proxy(this.docTouchEnd,this)],["click",t.proxy(this.docClick,this)]],r)),t(window).bind(o([["resize orientationchange",t.proxy(this.winResize,this)]],r)),this.opts.subIndicators&&(this.$subArrow=t("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),i()}if(this.$firstSub=this.$root.find("ul").each(function(){s.menuInit(t(this))}).eq(0),this.$firstLink=this.$root.find("a").eq(0),this.opts.markCurrentItem){var n=/(index|default)\.[^#\?\/]*/i,h=/#.*/,u=window.location.href.replace(n,""),l=u.replace(h,"");this.$root.find("a").each(function(){var i=this.href.replace(n,""),e=t(this);(i==u||i==l)&&(e.addClass("current"),s.opts.markCurrentTree&&e.parentsUntil("[data-smartmenus-id]","ul").each(function(){t(this).dataSM("parent-a").addClass("current")}))})}this.wasCollapsible=this.isCollapsible()},destroy:function(i){if(!i){var e=".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(e).undelegate(e),e+=this.rootId,t(document).unbind(e),t(window).unbind(e),this.opts.subIndicators&&(this.$subArrow=null)}this.menuHideAll();var s=this;this.$root.find("ul").each(function(){var i=t(this);i.dataSM("scroll-arrows")&&i.dataSM("scroll-arrows").remove(),i.dataSM("shown-before")&&((s.opts.subMenusMinWidth||s.opts.subMenusMaxWidth)&&i.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap"),i.dataSM("scroll-arrows")&&i.dataSM("scroll-arrows").remove(),i.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})),0==i.attr("id").indexOf(s.accessIdPrefix)&&i.removeAttr("id")}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"),this.$root.find("a.has-submenu").each(function(){var i=t(this);0==i.attr("id").indexOf(s.accessIdPrefix)&&i.removeAttr("id")}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"),this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove(),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),i||(this.$root=null,this.$firstLink=null,this.$firstSub=null,this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),a.splice(t.inArray(this,a),1))},disable:function(i){if(!this.disabled){if(this.menuHideAll(),!i&&!this.opts.isPopup&&this.$root.is(":visible")){var e=this.$root.offset();this.$disableOverlay=t('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(!0),opacity:0}).appendTo(document.body)}this.disabled=!0}},docClick:function(i){return this.isTouchScrolling?(this.isTouchScrolling=!1,void 0):((this.visibleSubMenus.length&&!t.contains(this.$root[0],i.target)||t(i.target).is("a"))&&this.menuHideAll(),void 0)},docTouchEnd:function(){if(this.lastTouch){if(!(!this.visibleSubMenus.length||void 0!==this.lastTouch.x2&&this.lastTouch.x1!=this.lastTouch.x2||void 0!==this.lastTouch.y2&&this.lastTouch.y1!=this.lastTouch.y2||this.lastTouch.target&&t.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},350)}this.lastTouch=null}},docTouchMove:function(t){if(this.lastTouch){var i=t.originalEvent.touches[0];this.lastTouch.x2=i.pageX,this.lastTouch.y2=i.pageY}},docTouchStart:function(t){var i=t.originalEvent.touches[0];this.lastTouch={x1:i.pageX,y1:i.pageY,target:i.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getClosestMenu:function(i){for(var e=t(i).closest("ul");e.dataSM("in-mega");)e=e.parent().closest("ul");return e[0]||null},getHeight:function(t){return this.getOffset(t,!0)},getOffset:function(t,i){var e;"none"==t.css("display")&&(e={position:t[0].style.position,visibility:t[0].style.visibility},t.css({position:"absolute",visibility:"hidden"}).show());var s=t[0].getBoundingClientRect&&t[0].getBoundingClientRect(),o=s&&(i?s.height||s.bottom-s.top:s.width||s.right-s.left);return o||0===o||(o=i?t[0].offsetHeight:t[0].offsetWidth),e&&t.hide().css(e),o},getStartZIndex:function(t){var i=parseInt(this[t?"$root":"$firstSub"].css("z-index"));return!t&&isNaN(i)&&(i=parseInt(this.$root.css("z-index"))),isNaN(i)?1:i},getTouchPoint:function(t){return t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0]||t},getViewport:function(t){var i=t?"Height":"Width",e=document.documentElement["client"+i],s=window["inner"+i];return s&&(e=Math.min(e,s)),e},getViewportHeight:function(){return this.getViewport(!0)},getViewportWidth:function(){return this.getViewport()},getWidth:function(t){return this.getOffset(t)},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(t){return this.handleEvents()&&!this.isLinkInMegaMenu(t)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){var i="fixed"==this.$root.css("position");return i||this.$root.parentsUntil("body").each(function(){return"fixed"==t(this).css("position")?(i=!0,!1):void 0}),i},isLinkInMegaMenu:function(i){return t(this.getClosestMenu(i[0])).hasClass("mega-menu")},isTouchMode:function(){return!n||this.isCollapsible()},itemActivate:function(i,e){var s=i.closest("ul"),o=s.dataSM("level");if(o>1&&(!this.activatedItems[o-2]||this.activatedItems[o-2][0]!=s.dataSM("parent-a")[0])){var a=this;t(s.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(s).each(function(){a.itemActivate(t(this).dataSM("parent-a"))})}if((!this.isCollapsible()||e)&&this.menuHideSubMenus(this.activatedItems[o-1]&&this.activatedItems[o-1][0]==i[0]?o:o-1),this.activatedItems[o-1]=i,this.$root.triggerHandler("activate.smapi",i[0])!==!1){var r=i.dataSM("sub");r&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(r)}},itemBlur:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&this.$root.triggerHandler("blur.smapi",e[0])},itemClick:function(i){if(this.isTouchScrolling)return this.isTouchScrolling=!1,i.stopPropagation(),!1;var e=t(i.currentTarget);if(this.handleItemEvents(e)){if(this.$root.triggerHandler("click.smapi",e[0])===!1)return!1;e.dataSM("href")&&e.attr("href",e.dataSM("href")).removeDataSM("href");var s=t(i.target).is("span.sub-arrow"),o=e.dataSM("sub");if(o&&!o.is(":visible")){if(this.itemActivate(e),o.is(":visible"))return this.focusActivated=!0,!1}else if(this.isCollapsible()&&s)return this.itemActivate(e),this.menuHide(o),!1;return this.opts.showOnClick&&o&&2==o.dataSM("level")?(this.clickActivated=!0,this.menuShow(o),!1):e.hasClass("disabled")?!1:this.$root.triggerHandler("select.smapi",e[0])===!1?!1:void 0}},itemDown:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&e.dataSM("mousedown",!0)},itemEnter:function(i){var e=t(i.currentTarget);if(this.handleItemEvents(e)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var s=this;this.showTimeout=setTimeout(function(){s.itemActivate(e)},this.opts.showOnClick&&1==e.closest("ul").dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",e[0])}},itemFocus:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&(!this.focusActivated||this.isTouchMode()&&e.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==e[0]||this.itemActivate(e,!0),this.$root.triggerHandler("focus.smapi",e[0]))},itemLeave:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&(this.isTouchMode()||this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0),e.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",e[0]))},itemTouchEnd:function(i){var e=t(i.currentTarget);if(this.handleItemEvents(e)){var s=e.dataSM("sub");"#"!==e.attr("href").charAt(0)&&s&&!s.is(":visible")&&e.dataSM("href",e.attr("href")).attr("href","#")}},menuHide:function(i){if(this.$root.triggerHandler("beforehide.smapi",i[0])!==!1&&(i.stop(!0,!0),"none"!=i.css("display"))){var e=function(){i.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?this.opts.collapsibleHideFunction.call(this,i,e):i.hide(this.opts.collapsibleHideDuration,e):this.opts.hideFunction?this.opts.hideFunction.call(this,i,e):i.hide(this.opts.hideDuration,e),i.dataSM("ie-shim")&&i.dataSM("ie-shim").remove(),i.dataSM("scroll")&&(this.menuScrollStop(i),i.css({"touch-action":"","-ms-touch-action":""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()),i.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded","false"),i.attr({"aria-expanded":"false","aria-hidden":"true"});var s=i.dataSM("level");this.activatedItems.splice(s-1,1),this.visibleSubMenus.splice(t.inArray(i,this.visibleSubMenus),1),this.$root.triggerHandler("hide.smapi",i[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);for(var t=this.opts.isPopup?1:0,i=this.visibleSubMenus.length-1;i>=t;i--)this.menuHide(this.visibleSubMenus[i]);this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove())),this.activatedItems=[],this.visibleSubMenus=[],this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0},menuHideSubMenus:function(t){for(var i=this.activatedItems.length-1;i>=t;i--){var e=this.activatedItems[i].dataSM("sub");e&&this.menuHide(e)}},menuIframeShim:function(i){r&&this.opts.overlapControlsInIE&&!i.dataSM("ie-shim")&&i.dataSM("ie-shim",t("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(t){if(!t.dataSM("in-mega")){t.hasClass("mega-menu")&&t.find("ul").dataSM("in-mega",!0);for(var i=2,e=t[0];(e=e.parentNode.parentNode)!=this.$root[0];)i++;var s=t.prevAll("a").eq(-1);s.length||(s=t.prevAll().find("a").eq(-1)),s.addClass("has-submenu").dataSM("sub",t),t.dataSM("parent-a",s).dataSM("level",i).parent().dataSM("sub",t);var o=s.attr("id")||this.accessIdPrefix+ ++this.idInc,a=t.attr("id")||this.accessIdPrefix+ ++this.idInc;s.attr({id:o,"aria-haspopup":"true","aria-controls":a,"aria-expanded":"false"}),t.attr({id:a,role:"group","aria-hidden":"true","aria-labelledby":o,"aria-expanded":"false"}),this.opts.subIndicators&&s[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(i){var e,a,r=i.dataSM("parent-a"),n=r.closest("li"),h=n.parent(),u=i.dataSM("level"),l=this.getWidth(i),c=this.getHeight(i),d=r.offset(),m=d.left,p=d.top,f=this.getWidth(r),v=this.getHeight(r),b=t(window),S=b.scrollLeft(),g=b.scrollTop(),M=this.getViewportWidth(),w=this.getViewportHeight(),T=h.hasClass("sm")&&!h.hasClass("sm-vertical"),I=this.opts.rightToLeftSubMenus&&!n.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&n.is("[data-sm-reverse]"),$=2==u?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,x=2==u?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;if(T?(e=I?f-l-$:$,a=this.opts.bottomToTopSubMenus?-c-x:v+x):(e=I?$-l:f-$,a=this.opts.bottomToTopSubMenus?v-x-c:x),this.opts.keepInViewport){var y=m+e,C=p+a;if(I&&S>y?e=T?S-y+e:f-$:!I&&y+l>S+M&&(e=T?S+M-l-y+e:$-l),T||(w>c&&C+c>g+w?a+=g+w-c-C:(c>=w||g>C)&&(a+=g-C)),T&&(C+c>g+w+.49||g>C)||!T&&c>w+.49){var H=this;i.dataSM("scroll-arrows")||i.dataSM("scroll-arrows",t([t('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],t('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){i.dataSM("scroll").up=t(this).hasClass("scroll-up"),H.menuScroll(i)},mouseleave:function(t){H.menuScrollStop(i),H.menuScrollOut(i,t)},"mousewheel DOMMouseScroll":function(t){t.preventDefault()}}).insertAfter(i));var A=".smartmenus_scroll";i.dataSM("scroll",{step:1,itemH:v,subH:c,arrowDownH:this.getHeight(i.dataSM("scroll-arrows").eq(1))}).bind(o([["mouseover",function(t){H.menuScrollOver(i,t)}],["mouseout",function(t){H.menuScrollOut(i,t)}],["mousewheel DOMMouseScroll",function(t){H.menuScrollMousewheel(i,t)}]],A)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:e+(parseInt(i.css("border-left-width"))||0),width:l-(parseInt(i.css("border-left-width"))||0)-(parseInt(i.css("border-right-width"))||0),zIndex:i.css("z-index")}).eq(T&&this.opts.bottomToTopSubMenus?0:1).show(),this.isFixed()&&i.css({"touch-action":"none","-ms-touch-action":"none"}).bind(o([[s()?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(t){H.menuScrollTouch(i,t)}]],A))}}i.css({top:"auto",left:"0",marginLeft:e,marginTop:a-v}),this.menuIframeShim(i),i.dataSM("ie-shim")&&i.dataSM("ie-shim").css({zIndex:i.css("z-index"),width:l,height:c,marginLeft:e,marginTop:a-v})},menuScroll:function(t,i,e){var s,o=t.dataSM("scroll"),a=t.dataSM("scroll-arrows"),r=parseFloat(t.css("margin-top")),h=o.up?o.upEnd:o.downEnd;if(!i&&o.velocity){if(o.velocity*=.9,s=o.velocity,.5>s)return this.menuScrollStop(t),void 0}else s=e||(i||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(o.step));var u=t.dataSM("level");this.activatedItems[u-1]&&this.activatedItems[u-1].dataSM("sub")&&this.activatedItems[u-1].dataSM("sub").is(":visible")&&this.menuHideSubMenus(u-1);var l=o.up&&r>=h||!o.up&&h>=r?r:Math.abs(h-r)>s?r+(o.up?s:-s):h;if(t.add(t.dataSM("ie-shim")).css("margin-top",l),n&&(o.up&&l>o.downEnd||!o.up&&o.upEnd>l)&&a.eq(o.up?1:0).show(),l==h)n&&a.eq(o.up?0:1).hide(),this.menuScrollStop(t);else if(!i){this.opts.scrollAccelerate&&o.step<this.opts.scrollStep&&(o.step+=.5);var c=this;this.scrollTimeout=setTimeout(function(){c.menuScroll(t)},this.opts.scrollInterval)}},menuScrollMousewheel:function(t,i){if(this.getClosestMenu(i.target)==t[0]){i=i.originalEvent;var e=(i.wheelDelta||-i.detail)>0;t.dataSM("scroll-arrows").eq(e?0:1).is(":visible")&&(t.dataSM("scroll").up=e,this.menuScroll(t,!0))}i.preventDefault()},menuScrollOut:function(i,e){n&&(/^scroll-(up|down)/.test((e.relatedTarget||"").className)||(i[0]==e.relatedTarget||t.contains(i[0],e.relatedTarget))&&this.getClosestMenu(e.relatedTarget)==i[0]||i.dataSM("scroll-arrows").css("visibility","hidden"))},menuScrollOver:function(t,i){if(n&&!/^scroll-(up|down)/.test(i.target.className)&&this.getClosestMenu(i.target)==t[0]){this.menuScrollRefreshData(t);var e=t.dataSM("scroll");t.dataSM("scroll-arrows").eq(0).css("margin-top",e.upEnd).end().eq(1).css("margin-top",e.downEnd+e.subH-e.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function(i){var e=i.dataSM("scroll"),s=t(window),o=s.scrollTop()-i.dataSM("parent-a").offset().top-e.itemH;t.extend(e,{upEnd:o,downEnd:o+this.getViewportHeight()-e.subH})},menuScrollStop:function(i){return this.scrollTimeout?(clearTimeout(this.scrollTimeout),this.scrollTimeout=0,t.extend(i.dataSM("scroll"),{step:1,velocity:0}),!0):void 0},menuScrollTouch:function(i,s){if(s=s.originalEvent,e(s)){var o=this.getTouchPoint(s);if(this.getClosestMenu(o.target)==i[0]){var a=i.dataSM("scroll");if(/(start|down)$/i.test(s.type))this.menuScrollStop(i)?(s.preventDefault(),this.isTouchScrolling=!0):this.isTouchScrolling=!1,this.menuScrollRefreshData(i),t.extend(a,{touchY:o.pageY,touchTimestamp:s.timeStamp,velocity:0});else if(/move$/i.test(s.type)){var r=a.touchY;void 0!==r&&r!=o.pageY&&(this.isTouchScrolling=!0,t.extend(a,{up:o.pageY>r,touchY:o.pageY,touchTimestamp:s.timeStamp,velocity:a.velocity+.5*Math.abs(o.pageY-r)}),this.menuScroll(i,!0,Math.abs(a.touchY-r))),s.preventDefault()}else void 0!==a.touchY&&(120>s.timeStamp-a.touchTimestamp&&a.velocity>0&&(a.velocity*=.5,this.menuScrollStop(i),this.menuScroll(i),s.preventDefault()),delete a.touchY)}}},menuShow:function(t){if((t.dataSM("beforefirstshowfired")||(t.dataSM("beforefirstshowfired",!0),this.$root.triggerHandler("beforefirstshow.smapi",t[0])!==!1))&&this.$root.triggerHandler("beforeshow.smapi",t[0])!==!1&&(t.dataSM("shown-before",!0).stop(!0,!0),!t.is(":visible"))){var i=t.dataSM("parent-a");if((this.opts.keepHighlighted||this.isCollapsible())&&i.addClass("highlighted"),this.isCollapsible())t.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""});else{if(t.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1),(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)&&(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth)){var e=this.getWidth(t);t.css("max-width",this.opts.subMenusMaxWidth),e>this.getWidth(t)&&t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").insertBefore(t)}var s=function(){t.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,t,s):t.show(this.opts.collapsibleShowDuration,s):this.opts.showFunction?this.opts.showFunction.call(this,t,s):t.show(this.opts.showDuration,s),i.attr("aria-expanded","true"),t.attr({"aria-expanded":"true","aria-hidden":"false"}),this.visibleSubMenus.push(t),this.$root.triggerHandler("show.smapi",t[0])}},popupHide:function(t){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},t?1:this.opts.hideTimeout)},popupShow:function(t,i){if(!this.opts.isPopup)return alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'),void 0;if(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.$root.dataSM("shown-before",!0).stop(!0,!0),!this.$root.is(":visible")){this.$root.css({left:t,top:i}),this.menuIframeShim(this.$root),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:t,top:i}).insertBefore(this.$root);var e=this,s=function(){e.$root.css("overflow","")};this.opts.showFunction?this.opts.showFunction.call(this,this.$root,s):this.$root.show(this.opts.showDuration,s),this.visibleSubMenus[0]=this.$root}},refresh:function(){this.destroy(!0),this.init(!0)},rootKeyDown:function(i){if(this.handleEvents())switch(i.keyCode){case 27:var e=this.activatedItems[0];if(e){this.menuHideAll(),e[0].focus();var s=e.dataSM("sub");s&&this.menuHide(s)}break;case 32:var o=t(i.target);if(o.is("a")&&this.handleItemEvents(o)){var s=o.dataSM("sub");s&&!s.is(":visible")&&(this.itemClick({currentTarget:i.target}),i.preventDefault())}}},rootOut:function(t){if(this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},this.opts.hideTimeout)}},rootOver:function(t){this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(t){if(this.handleEvents()){if(!("onorientationchange"in window)||"orientationchange"==t.type){var i=this.isCollapsible();this.wasCollapsible&&i||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll()),this.wasCollapsible=i}}else if(this.$disableOverlay){var e=this.$root.offset();this.$disableOverlay.css({top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}}}}),t.fn.dataSM=function(t,i){return i?this.data(t+"_smartmenus",i):this.data(t+"_smartmenus")},t.fn.removeDataSM=function(t){return this.removeData(t+"_smartmenus")},t.fn.smartmenus=function(i){if("string"==typeof i){var e=arguments,s=i;return Array.prototype.shift.call(e),this.each(function(){var i=t(this).data("smartmenus");i&&i[s]&&i[s].apply(i,e)})}var o=t.extend({},t.fn.smartmenus.defaults,i);return this.each(function(){new t.SmartMenus(this,o)})},t.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollInterval:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(t,i){t.fadeOut(200,i)},collapsibleShowDuration:0,collapsibleShowFunction:function(t,i){t.slideDown(200,i)},collapsibleHideDuration:0,collapsibleHideFunction:function(t,i){t.slideUp(200,i)},showOnClick:!1,hideOnClick:!0,keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0}})(jQuery);;
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);;

/** 
	* Filename:     custom.js
	* Version:      1.0.0 (2019-08-04)
	* Website:      https://www.zymphonies.com
	* Description:  Global Script
	* Author:		Zymphonies Team
					support@zymphonies.com
**/

function theme_menu(){

	//Main menu
	jQuery('#main-menu').smartmenus();
	
	//Mobile menu toggle
	jQuery('.navbar-toggle').click(function(){
		jQuery('.region-primary-menu').addClass('expand');
	});
	jQuery('.navbar-toggle-close').click(function(){
		jQuery('.region-primary-menu').removeClass('expand');
	});

	//Mobile drop-down menu
	if ( jQuery(window).width() < 767) {
		jQuery(".region-primary-menu li a:not(.has-submenu)").click(function () {
			jQuery('.region-primary-menu').hide();
	    });
	}

}

function theme_home(){
	
	//flexslider
	jQuery('.flexslider').flexslider({
    	animation: "slide"	
    });

}

jQuery(document).ready(function($){
	theme_menu();
	theme_home();
});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;

      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');

        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });
    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
      var formFields;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');

      if (trigger === 'unload') {
        once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
          form.removeAttribute('data-drupal-form-fields');
          $(form).off('.formUpdated');
        });
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));

      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();

          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }

      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));

          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;

    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }

    var hash = url.hash.substr(1);

    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function DetailsSummarizedContent(node) {
    this.$node = $(node);
    this.setupSummary();
  }

  $.extend(DetailsSummarizedContent, {
    instances: []
  });
  $.extend(DetailsSummarizedContent.prototype, {
    setupSummary: function setupSummary() {
      this.$detailsSummarizedContentWrapper = $(Drupal.theme('detailsSummarizedContentWrapper'));
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper);
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = this.$node.drupalGetSummary();
      this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText', text));
    }
  });
  Drupal.behaviors.detailsSummary = {
    attach: function attach(context) {
      DetailsSummarizedContent.instances = DetailsSummarizedContent.instances.concat(once('details', 'details', context).map(function (details) {
        return new DetailsSummarizedContent(details);
      }));
    }
  };
  Drupal.DetailsSummarizedContent = DetailsSummarizedContent;

  Drupal.theme.detailsSummarizedContentWrapper = function () {
    return "<span class=\"summary\"></span>";
  };

  Drupal.theme.detailsSummarizedContentText = function (text) {
    return text ? " (".concat(text, ")") : '';
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $(once('detailsAria', 'body')).on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';
        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);
    var anchor = window.location.hash && window.location.hash !== '#' ? ", ".concat(window.location.hash) : '';

    if (this.$node.find(".error".concat(anchor)).length) {
      this.$node.attr('open', true);
    }

    this.setupSummaryPolyfill();
  }

  $.extend(CollapsibleDetails, {
    instances: []
  });
  $.extend(CollapsibleDetails.prototype, {
    setupSummaryPolyfill: function setupSummaryPolyfill() {
      var $summary = this.$node.find('> summary');
      $summary.attr('tabindex', '-1');
      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($summary).after(document.createTextNode(' '));
      $('<a class="details-title"></a>').attr('href', "#".concat(this.$node.attr('id'))).prepend($summary.contents()).appendTo($summary);
      $summary.append(this.$summary).on('click', $.proxy(this.onSummaryClick, this));
    },
    onSummaryClick: function onSummaryClick(e) {
      this.toggle();
      e.preventDefault();
    },
    toggle: function toggle() {
      var _this = this;

      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');

      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }

      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });
  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }

      once('collapse', 'details', context).forEach(function (detail) {
        detail.classList.add('collapse-processed');
        CollapsibleDetails.instances.push(new CollapsibleDetails(detail));
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };

  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);
  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);

        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');

      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));

      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }

      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);

      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }

          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }

      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;

      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }

      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;

        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));

        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');

      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');

      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! shepherd.js 8.3.1 */

'use strict';(function(G,ca){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ca():"function"===typeof define&&define.amd?define(ca):(G="undefined"!==typeof globalThis?globalThis:G||self,G.Shepherd=ca())})(this,function(){function G(a,b){return!1!==b.clone&&b.isMergeableObject(a)?V(Array.isArray(a)?[]:{},a,b):a}function ca(a,b,c){return a.concat(b).map(function(a){return G(a,c)})}function tb(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ia(a){return Object.keys(a).concat(tb(a))}function Ja(a,b){try{return b in a}catch(c){return!1}}function ub(a,b,c){var d={};c.isMergeableObject(a)&&Ia(a).forEach(function(b){d[b]=G(a[b],c)});Ia(b).forEach(function(e){if(!Ja(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ja(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:V}else f=V;d[e]=f(a[e],b[e],c)}else d[e]=G(b[e],c)});return d}function V(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||ca;c.isMergeableObject=c.isMergeableObject||vb;c.cloneUnlessOtherwiseSpecified=G;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?G(b,c):d?c.arrayMerge(a,b,c):ub(a,b,c)}function W(a){return"function"===typeof a}function da(a){return"string"===typeof a}function Ka(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function wb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function xb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=wb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function B(a){return a?(a.nodeName||"").toLowerCase():null}function z(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function ea(a){var b=z(a).Element;return a instanceof b||a instanceof Element}function y(a){var b=z(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function La(a){if("undefined"===typeof ShadowRoot)return!1;var b=z(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function F(a){return a.split("-")[0]}
function X(a){a=a.getBoundingClientRect();return{width:a.width,height:a.height,top:a.top,right:a.right,bottom:a.bottom,left:a.left,x:a.left,y:a.top}}function ta(a){var b=X(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Ma(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&La(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}
function H(a){return z(a).getComputedStyle(a)}function L(a){return((ea(a)?a.ownerDocument:a.document)||window.document).documentElement}function la(a){return"html"===B(a)?a:a.assignedSlot||a.parentNode||(La(a)?a.host:null)||L(a)}function Na(a){return y(a)&&"fixed"!==H(a).position?a.offsetParent:null}function fa(a){for(var b=z(a),c=Na(a);c&&0<=["table","td","th"].indexOf(B(c))&&"static"===H(c).position;)c=Na(c);if(c&&("html"===B(c)||"body"===B(c)&&"static"===H(c).position))return b;if(!c)a:{c=-1!==
navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!y(a)||"fixed"!==H(a).position)for(a=la(a);y(a)&&0>["html","body"].indexOf(B(a));){var d=H(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function ua(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Oa(a){return Object.assign({},
{top:0,right:0,bottom:0,left:0},a)}function Pa(a,b){return b.reduce(function(b,d){b[d]=a;return b},{})}function Qa(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.offsets,h=a.position,k=a.gpuAcceleration,m=a.adaptive;a=a.roundOffsets;if(!0===a){a=f.y;var g=window.devicePixelRatio||1;a={x:ma(ma(f.x*g)/g)||0,y:ma(ma(a*g)/g)||0}}else a="function"===typeof a?a(f):f;g=a;a=g.x;a=void 0===a?0:a;g=g.y;g=void 0===g?0:g;var l=f.hasOwnProperty("x");f=f.hasOwnProperty("y");var p="left",t="top",A=window;
if(m){var C=fa(c),u="clientHeight",D="clientWidth";C===z(c)&&(C=L(c),"static"!==H(C).position&&(u="scrollHeight",D="scrollWidth"));"top"===e&&(t="bottom",g-=C[u]-d.height,g*=k?1:-1);"left"===e&&(p="right",a-=C[D]-d.width,a*=k?1:-1)}c=Object.assign({position:h},m&&yb);if(k){var v;return Object.assign({},c,(v={},v[t]=f?"0":"",v[p]=l?"0":"",v.transform=2>(A.devicePixelRatio||1)?"translate("+a+"px, "+g+"px)":"translate3d("+a+"px, "+g+"px, 0)",v))}return Object.assign({},c,(b={},b[t]=f?g+"px":"",b[p]=
l?a+"px":"",b.transform="",b))}function na(a){return a.replace(/left|right|bottom|top/g,function(a){return zb[a]})}function Ra(a){return a.replace(/start|end/g,function(a){return Ab[a]})}function va(a){a=z(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function wa(a){return X(L(a)).left+va(a).scrollLeft}function xa(a){a=H(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function Sa(a){return 0<=["html","body","#document"].indexOf(B(a))?a.ownerDocument.body:
y(a)&&xa(a)?a:Sa(la(a))}function ha(a,b){var c;void 0===b&&(b=[]);var d=Sa(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=z(d);d=a?[c].concat(c.visualViewport||[],xa(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(ha(la(d)))}function ya(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function Ta(a,b){if("viewport"===b){b=z(a);var c=L(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||
(e=b.offsetLeft,f=b.offsetTop));a={width:d,height:c,x:e+wa(a),y:f};a=ya(a)}else y(b)?(a=X(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=L(a),a=L(f),d=va(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=E(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=E(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+wa(f),d=-d.scrollTop,
"rtl"===H(b||a).direction&&(f+=E(a.clientWidth,b?b.clientWidth:0)-c),a=ya({width:c,height:e,x:f,y:d}));return a}function Bb(a){var b=ha(la(a)),c=0<=["absolute","fixed"].indexOf(H(a).position)&&y(a)?fa(a):a;return ea(c)?b.filter(function(a){return ea(a)&&Ma(a,c)&&"body"!==B(a)}):[]}function Cb(a,b,c){b="clippingParents"===b?Bb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(b,c){c=Ta(a,c);b.top=E(c.top,b.top);b.right=M(c.right,b.right);b.bottom=M(c.bottom,b.bottom);b.left=E(c.left,b.left);return b},
Ta(a,c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function Ua(a){var b=a.reference,c=a.element,d=(a=a.placement)?F(a):null;a=a?a.split("-")[1]:null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?ua(d):null;if(null!=d)switch(f="y"===d?"height":"width",
a){case "start":e[d]-=b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ia(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var h=c.altBoundary,k=void 0===h?!1:h;c=c.padding;c=void 0===c?0:c;c=Oa("number"!==typeof c?c:Pa(c,ja));var m=a.elements.reference;h=a.rects.popper;k=a.elements[k?"popper"===d?"reference":"popper":
d];e=Cb(ea(k)?k:k.contextElement||L(a.elements.popper),e,f);f=X(m);k=Ua({reference:f,element:h,strategy:"absolute",placement:b});h=ya(Object.assign({},h,k));f="popper"===d?h:f;var g={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var l=a[b];Object.keys(g).forEach(function(a){var b=0<=["right","bottom"].indexOf(a)?1:-1,c=0<=["top","bottom"].indexOf(a)?"y":"x";g[a]+=l[c]*b})}return g}function Db(a,
b){void 0===b&&(b={});var c=b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,h=b.allowedAutoPlacements,k=void 0===h?Va:h,m=b.placement.split("-")[1];b=m?f?Wa:Wa.filter(function(a){return a.split("-")[1]===m}):ja;f=b.filter(function(a){return 0<=k.indexOf(a)});0===f.length&&(f=b);var g=f.reduce(function(b,f){b[f]=ia(a,{placement:f,boundary:c,rootBoundary:d,padding:e})[F(f)];return b},{});return Object.keys(g).sort(function(a,b){return g[a]-g[b]})}function Eb(a){if("auto"===F(a))return[];
var b=na(a);return[Ra(a),b,Ra(b)]}function Xa(a,b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function Ya(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Fb(a,b,c){void 0===c&&(c=!1);var d=L(b);a=X(a);var e=y(b),f={scrollLeft:0,scrollTop:0},h={x:0,y:0};if(e||!e&&!c){if("body"!==B(b)||xa(d))f=b!==z(b)&&y(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:va(b);y(b)?(h=
X(b),h.x+=b.clientLeft,h.y+=b.clientTop):d&&(h.x=wa(d))}return{x:a.left+f.scrollLeft-h.x,y:a.top+f.scrollTop-h.y,width:a.width,height:a.height}}function Gb(a){function b(a){d.add(a.name);[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(a){d.has(a)||(a=c.get(a))&&b(a)});e.push(a)}var c=new Map,d=new Set,e=[];a.forEach(function(a){c.set(a.name,a)});a.forEach(function(a){d.has(a.name)||b(a)});return e}function Hb(a){var b=Gb(a);return Ib.reduce(function(a,d){return a.concat(b.filter(function(a){return a.phase===
d}))},[])}function Jb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Kb(a){var b=a.reduce(function(a,b){var c=a[b.name];a[b.name]=c?Object.assign({},c,b,{options:Object.assign({},c.options,b.options),data:Object.assign({},c.data,b.data)}):b;return a},{});return Object.keys(b).map(function(a){return b[a]})}function Za(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return!(a&&
"function"===typeof a.getBoundingClientRect)})}function za(){za=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return za.apply(this,arguments)}function Lb(){return[{name:"applyStyles",fn({state:a}){Object.keys(a.elements).forEach(b=>{if("popper"===b){var c=a.attributes[b]||{},d=a.elements[b];Object.assign(d.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});
Object.keys(c).forEach(a=>{let b=c[a];!1===b?d.removeAttribute(a):d.setAttribute(a,!0===b?"":b)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Mb(a){let b=Lb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=za({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function $a(a){return da(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Aa(a){a=a.options.attachTo||
{};let b=Object.assign({},a);if(da(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Ba(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Nb(a,b){let c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",
enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Mb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=ab(a,c));return c=ab(b.options,c)}function ab(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(a=>a.name);b=b.modifiers.filter(a=>!d.includes(a.name));c.modifiers=Array.from(new Set([...b,
...a.popperOptions.modifiers]))}return c}return b}function x(){}function Ob(a,b){for(let c in b)a[c]=b[c];return a}function Y(a){return a()}function bb(a){return"function"===typeof a}function I(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function w(a){a.parentNode.removeChild(a)}function cb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function oa(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function q(a,b,c){null==c?
a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function db(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:q(a,d,b[d])}function Z(a,b,c){a.classList[c?"add":"remove"](b)}function pa(){if(!P)throw Error("Function called outside component initialization");return P}function Ca(a){qa.push(a)}function eb(){if(!Da){Da=!0;do{for(var a=0;a<ka.length;a+=
1){var b=ka[a];P=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(Y);let a=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,a);b.after_update.forEach(Ca)}}P=null;for(ka.length=0;aa.length;)aa.pop()();for(a=0;a<qa.length;a+=1)b=qa[a],Ea.has(b)||(Ea.add(b),b());qa.length=0}while(ka.length);for(;fb.length;)fb.pop()();Da=Fa=!1;Ea.clear()}}function Q(){R={r:0,c:[],p:R}}function S(){R.r||R.c.forEach(Y);R=R.p}function n(a,b){a&&a.i&&(ra.delete(a),a.i(b))}function r(a,b,c,d){a&&a.o&&!ra.has(a)&&
(ra.add(a),R.c.push(()=>{ra.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function T(a){a&&a.c()}function N(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:h,after_update:k}=a.$$;e&&e.m(b,c);d||Ca(()=>{let b=f.map(Y).filter(bb);h?h.push(...b):b.forEach(Y);a.$$.on_mount=[]});k.forEach(Ca)}function O(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(Y),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function J(a,b,c,d,e,f,h=[-1]){let k=P;P=a;let m=a.$$={fragment:null,ctx:null,props:f,
update:x,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(k?k.$$.context:b.context||[]),callbacks:Object.create(null),dirty:h,skip_bound:!1},g=!1;m.ctx=c?c(a,b.props||{},(b,c,...d)=>{d=d.length?d[0]:c;if(m.ctx&&e(m.ctx[b],m.ctx[b]=d)){if(!m.skip_bound&&m.bound[b])m.bound[b](d);g&&(-1===a.$$.dirty[0]&&(ka.push(a),Fa||(Fa=!0,Pb.then(eb)),a.$$.dirty.fill(0)),a.$$.dirty[b/31|0]|=1<<b%31)}return c}):[];m.update();g=!0;m.before_update.forEach(Y);
m.fragment=d?d(m.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),m.fragment&&m.fragment.l(c),c.forEach(w)):m.fragment&&m.fragment.c(),b.intro&&n(a.$$.fragment),N(a,b.target,b.anchor,b.customElement),eb());P=k}function Qb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");q(b,"aria-label",c=a[3]?a[3]:null);q(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];q(b,"tabindex","0")},m(c,d){c.insertBefore(b,d||null);b.innerHTML=
a[5];e||(f=oa(b,"click",function(){bb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(e,[f]){a=e;f&32&&(b.innerHTML=a[5]);f&8&&c!==(c=a[3]?a[3]:null)&&q(b,"aria-label",c);f&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&q(b,"class",d);f&4&&(b.disabled=a[2])},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Rb(a,b,c){let {config:d}=b,{step:e}=b,f,h,k,m,g,l;a.$$set=a=>{"config"in a&&c(6,d=a.config);"step"in a&&c(7,e=a.step)};a.$$.update=()=>{if(a.$$.dirty&192){c(0,f=d.action?
d.action.bind(e.tour):null);c(1,h=d.classes);if(d.disabled){var b=d.disabled;b=W(b)?b.call(e):b}else b=!1;c(2,k=b);c(3,m=d.label);c(4,g=d.secondary);c(5,l=d.text)}};return[f,h,k,m,g,l,d,e]}function gb(a,b,c){a=a.slice();a[2]=b[c];return a}function hb(a){let b,c,d=a[1],e=[];for(let b=0;b<d.length;b+=1)e[b]=ib(gb(a,d,b));let f=a=>r(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();b=document.createTextNode("")},m(a,d){for(let b=0;b<e.length;b+=1)e[b].m(a,d);a.insertBefore(b,
d||null);c=!0},p(a,c){if(c&3){d=a[1];let h;for(h=0;h<d.length;h+=1){let f=gb(a,d,h);e[h]?(e[h].p(f,c),n(e[h],1)):(e[h]=ib(f),e[h].c(),n(e[h],1),e[h].m(b.parentNode,b))}Q();for(h=d.length;h<e.length;h+=1)f(h);S()}},i(a){if(!c){for(a=0;a<d.length;a+=1)n(e[a]);c=!0}},o(a){e=e.filter(Boolean);for(a=0;a<e.length;a+=1)r(e[a]);c=!1},d(a){var c=e;for(let b=0;b<c.length;b+=1)c[b]&&c[b].d(a);a&&w(b)}}}function ib(a){let b,c;b=new Sb({props:{config:a[2],step:a[0]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,
e);c=!0},p(a,c){let d={};c&2&&(d.config=a[2]);c&1&&(d.step=a[0]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function Tb(a){let b,c,d=a[1]&&hb(a);return{c(){b=document.createElement("footer");d&&d.c();q(b,"class","shepherd-footer")},m(a,f){a.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(a,[c]){a[1]?d?(d.p(a,c),c&2&&n(d,1)):(d=hb(a),d.c(),n(d,1),d.m(b,null)):d&&(Q(),r(d,1,1,()=>{d=null}),S())},i(a){c||(n(d),c=!0)},o(a){r(d);c=!1},d(a){a&&w(b);d&&d.d()}}}
function Ub(a,b,c){let d,{step:e}=b;a.$$set=a=>{"step"in a&&c(0,e=a.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function Vb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";q(c,"aria-hidden","true");q(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");q(b,"class","shepherd-cancel-icon");q(b,"type","button")},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);e||(f=oa(b,"click",a[1]),e=!0)},p(a,[c]){c&
1&&d!==(d=a[0].label?a[0].label:"Close Tour")&&q(b,"aria-label",d)},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Wb(a,b,c){let {cancelIcon:d}=b,{step:e}=b;a.$$set=a=>{"cancelIcon"in a&&c(0,d=a.cancelIcon);"step"in a&&c(2,e=a.step)};return[d,a=>{a.preventDefault();e.cancel()},e]}function Xb(a){let b;return{c(){b=document.createElement("h3");q(b,"id",a[1]);q(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function Yb(a,
b,c){let {labelId:d}=b,{element:e}=b,{title:f}=b;pa().$$.after_update.push(()=>{W(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=a=>{"labelId"in a&&c(1,d=a.labelId);"element"in a&&c(0,e=a.element);"title"in a&&c(2,f=a.title)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function jb(a){let b,c;b=new Zb({props:{labelId:a[0],title:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.labelId=a[0]);c&4&&(d.title=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,
a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function kb(a){let b,c;b=new $b({props:{cancelIcon:a[3],step:a[1]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&8&&(d.cancelIcon=a[3]);c&2&&(d.step=a[1]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function ac(a){let b,c,d,e=a[2]&&jb(a),f=a[3]&&a[3].enabled&&kb(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();q(b,"class","shepherd-header")},
m(a,k){a.insertBefore(b,k||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(a,[d]){a[2]?e?(e.p(a,d),d&4&&n(e,1)):(e=jb(a),e.c(),n(e,1),e.m(b,c)):e&&(Q(),r(e,1,1,()=>{e=null}),S());a[3]&&a[3].enabled?f?(f.p(a,d),d&8&&n(f,1)):(f=kb(a),f.c(),n(f,1),f.m(b,null)):f&&(Q(),r(f,1,1,()=>{f=null}),S())},i(a){d||(n(e),n(f),d=!0)},o(a){r(e);r(f);d=!1},d(a){a&&w(b);e&&e.d();f&&f.d()}}}function bc(a,b,c){let {labelId:d}=b,{step:e}=b,f,h;a.$$set=a=>{"labelId"in a&&c(0,d=a.labelId);"step"in a&&c(1,e=
a.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,h=e.options.cancelIcon))};return[d,e,f,h]}function cc(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-text");q(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function dc(a,b,c){let {descriptionId:d}=b,{element:e}=b,{step:f}=b;pa().$$.after_update.push(()=>{let {text:a}=f.options;W(a)&&(a=a.call(f));a instanceof HTMLElement?e.appendChild(a):
c(0,e.innerHTML=a,e)});a.$$set=a=>{"descriptionId"in a&&c(1,d=a.descriptionId);"element"in a&&c(0,e=a.element);"step"in a&&c(2,f=a.step)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function lb(a){let b,c;b=new ec({props:{labelId:a[1],step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&2&&(d.labelId=a[1]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function mb(a){let b,c;b=new fc({props:{descriptionId:a[0],
step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.descriptionId=a[0]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function nb(a){let b,c;b=new gc({props:{step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function hc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,k,m=c&&lb(a),g=e&&mb(a),l=h&&nb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");g&&g.c();f=document.createTextNode(" ");l&&l.c();q(b,"class","shepherd-content")},m(a,c){a.insertBefore(b,c||null);m&&m.m(b,null);b.appendChild(d);g&&g.m(b,null);b.appendChild(f);l&&l.m(b,null);k=!0},p(a,[k]){k&4&&(c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled);c?m?(m.p(a,k),k&4&&n(m,1)):(m=lb(a),m.c(),n(m,1),m.m(b,d)):m&&(Q(),r(m,1,1,()=>{m=null}),S());k&4&&(e=void 0!==a[2].options.text);e?g?(g.p(a,k),k&4&&n(g,1)):(g=mb(a),g.c(),n(g,1),g.m(b,f)):g&&(Q(),r(g,1,1,()=>{g=null}),S());k&4&&(h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length);h?l?(l.p(a,k),k&4&&n(l,1)):(l=nb(a),l.c(),n(l,1),l.m(b,null)):l&&(Q(),r(l,1,1,()=>{l=null}),S())},i(a){k||(n(m),n(g),n(l),k=!0)},o(a){r(m);r(g);r(l);k=!1},d(a){a&&w(b);m&&
m.d();g&&g.d();l&&l.d()}}}function ic(a,b,c){let {descriptionId:d}=b,{labelId:e}=b,{step:f}=b;a.$$set=a=>{"descriptionId"in a&&c(0,d=a.descriptionId);"labelId"in a&&c(1,e=a.labelId);"step"in a&&c(2,f=a.step)};return[d,e,f]}function ob(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-arrow");q(b,"data-popper-arrow","")},m(a,d){a.insertBefore(b,d||null)},d(a){a&&w(b)}}}function jc(a){let b,c,d,e,f,h,k,m,g=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&
a[4].options.attachTo.on&&ob();d=new kc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let l=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],p={};for(let a=0;a<l.length;a+=1)p=Ob(p,l[a]);return{c(){b=document.createElement("div");g&&g.c();c=document.createTextNode(" ");T(d.$$.fragment);db(b,p);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},m(e,
f){e.insertBefore(b,f||null);g&&g.m(b,null);b.appendChild(c);N(d,b,null);a[13](b);h=!0;k||(m=oa(b,"keydown",a[7]),k=!0)},p(a,[k]){a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on?g||(g=ob(),g.c(),g.m(b,c)):g&&(g.d(1),g=null);var m={};k&4&&(m.descriptionId=a[2]);k&8&&(m.labelId=a[3]);k&16&&(m.step=a[4]);d.$set(m);m=b;{k=[(!h||k&20&&e!==(e=void 0!==a[4].options.text?a[2]:null))&&{"aria-describedby":e},(!h||k&24&&f!==(f=a[4].options.title?a[3]:null))&&
{"aria-labelledby":f},k&2&&a[1],{role:"dialog"},{tabindex:"0"}];let b={},c={},d={$$scope:1},g=l.length;for(;g--;){let a=l[g],e=k[g];if(e){for(u in a)u in e||(c[u]=1);for(let a in e)d[a]||(b[a]=e[a],d[a]=1);l[g]=e}else for(let b in a)d[b]=1}for(let a in c)a in b||(b[a]=void 0);var u=b}db(m,p=u);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},i(a){h||(n(d.$$.fragment,a),h=!0)},o(a){r(d.$$.fragment,a);h=!1},d(c){c&&w(b);g&&g.d();O(d);a[13](null);k=!1;m()}}}
function pb(a){return a.split(" ").filter(a=>!!a.length)}function lc(a,b,c){let {classPrefix:d}=b,{element:e}=b,{descriptionId:f}=b,{firstFocusableElement:h}=b,{focusableElements:k}=b,{labelId:m}=b,{lastFocusableElement:g}=b,{step:l}=b,{dataStepId:p}=b,t,A,C;pa().$$.on_mount.push(()=>{c(1,p={[`data-${d}shepherd-step-id`]:l.id});c(9,k=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,h=k[0]);
c(10,g=k[k.length-1])});pa().$$.after_update.push(()=>{if(C!==l.options.classes){var a=C;da(a)&&(a=pb(a),a.length&&e.classList.remove(...a));a=C=l.options.classes;da(a)&&(a=pb(a),a.length&&e.classList.add(...a))}});a.$$set=a=>{"classPrefix"in a&&c(11,d=a.classPrefix);"element"in a&&c(0,e=a.element);"descriptionId"in a&&c(2,f=a.descriptionId);"firstFocusableElement"in a&&c(8,h=a.firstFocusableElement);"focusableElements"in a&&c(9,k=a.focusableElements);"labelId"in a&&c(3,m=a.labelId);"lastFocusableElement"in
a&&c(10,g=a.lastFocusableElement);"step"in a&&c(4,l=a.step);"dataStepId"in a&&c(1,p=a.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,t=l.options&&l.options.cancelIcon&&l.options.cancelIcon.enabled),c(6,A=l.options&&l.options.title))};return[e,p,f,m,l,t,A,a=>{const {tour:b}=l;switch(a.keyCode){case 9:if(0===k.length){a.preventDefault();break}if(a.shiftKey){if(document.activeElement===h||document.activeElement.classList.contains("shepherd-element"))a.preventDefault(),g.focus()}else document.activeElement===
g&&(a.preventDefault(),h.focus());break;case 27:b.options.exitOnEsc&&l.cancel();break;case 37:b.options.keyboardNavigation&&b.back();break;case 39:b.options.keyboardNavigation&&b.next()}},h,k,g,d,()=>e,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function mc(a){a&&({steps:a}=a,a.forEach(a=>{a.options&&!1===a.options.canClickTarget&&a.options.attachTo&&a.target instanceof HTMLElement&&a.target.classList.remove("shepherd-target-click-disabled")}))}function nc({width:a,height:b,x:c=0,y:d=0,
r:e=0}){let {innerWidth:f,innerHeight:h}=window;return`M${f},${h}\
H0\
V0\
H${f}\
V${h}\
Z\
M${c+e},${d}\
a${e},${e},0,0,0-${e},${e}\
V${b+d-e}\
a${e},${e},0,0,0,${e},${e}\
H${a+c-e}\
a${e},${e},0,0,0,${e}-${e}\
V${d+e}\
a${e},${e},0,0,0-${e}-${e}\
Z`}function oc(a){let b,c,d,e,f;return{c(){b=cb("svg");c=cb("path");q(c,"d",a[2]);q(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);a[11](b);e||(f=oa(b,"touchmove",a[3]),e=!0)},p(a,[e]){e&4&&q(c,"d",a[2]);e&2&&d!==(d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&q(b,"class",d)},i:x,o:x,d(c){c&&w(b);a[11](null);e=!1;f()}}}function qb(a){if(!a)return null;let b=a instanceof HTMLElement&&
window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:qb(a.parentElement)}function pc(a,b,c){function d(){c(4,l={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,p=!1);k()}function f(a=0,b=0,e,f){if(f){var g=f.getBoundingClientRect();var u=g.y||g.top;g=g.bottom||u+g.height;if(e){var h=e.getBoundingClientRect();e=h.y||h.top;h=h.bottom||e+h.height;u=Math.max(u,e);g=Math.min(g,h)}u={y:u,height:Math.max(g-u,0)};let {y:d,height:k}=u,{x:m,width:p,left:A}=
f.getBoundingClientRect();c(4,l={width:p+2*a,height:k+2*a,x:(m||A)-a,y:d-a,r:b})}else d()}function h(){c(1,p=!0)}function k(){t&&(cancelAnimationFrame(t),t=void 0);window.removeEventListener("touchmove",C,{passive:!1})}function m(a){let {modalOverlayOpeningPadding:b,modalOverlayOpeningRadius:c}=a.options,d=qb(a.target),e=()=>{t=void 0;f(b,c,d,a.target);t=requestAnimationFrame(e)};e();window.addEventListener("touchmove",C,{passive:!1})}let {element:g}=b,{openingProperties:l}=b;Ba();let p=!1,t=void 0,
A;d();let C=a=>{a.preventDefault()};a.$$set=a=>{"element"in a&&c(0,g=a.element);"openingProperties"in a&&c(4,l=a.openingProperties)};a.$$.update=()=>{a.$$.dirty&16&&c(2,A=nc(l))};return[g,p,A,a=>{a.stopPropagation()},l,()=>g,d,e,f,function(a){k();a.tour.options.useModalOverlay?(m(a),h()):e()},h,function(a){aa[a?"unshift":"push"](()=>{g=a;c(0,g)})}]}var vb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===
qc);return b},qc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;V.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");return a.reduce(function(a,d){return V(a,d,b)},{})};var rc=V;class Ga{on(a,b,c,d=!1){void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;
void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a,...b){void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((c,d)=>{let {ctx:e,handler:f,once:h}=c;f.apply(e||this,b);h&&this.bindings[a].splice(d,1)});return this}}var ja=["top","bottom","right","left"],Wa=ja.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),Va=[].concat(ja,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",
b+"-end"])},[]),Ib="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),E=Math.max,M=Math.min,ma=Math.round,yb={top:"auto",right:"auto",bottom:"auto",left:"auto"},sa={passive:!0},zb={left:"right",right:"left",bottom:"top",top:"bottom"},Ab={start:"end",end:"start"},rb={placement:"bottom",modifiers:[],strategy:"absolute"},sc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?rb:a;return function(a,b,
h){function e(){g.orderedModifiers.forEach(function(a){var b=a.name,c=a.options;c=void 0===c?{}:c;a=a.effect;"function"===typeof a&&(b=a({state:g,name:b,instance:t,options:c}),l.push(b||function(){}))})}function f(){l.forEach(function(a){return a()});l=[]}void 0===h&&(h=d);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},rb,d),modifiersData:{},elements:{reference:a,popper:b},attributes:{},styles:{}},l=[],p=!1,t={state:g,setOptions:function(h){f();g.options=Object.assign({},d,
g.options,h);g.scrollParents={reference:ea(a)?ha(a):a.contextElement?ha(a.contextElement):[],popper:ha(b)};h=Hb(Kb([].concat(c,g.options.modifiers)));g.orderedModifiers=h.filter(function(a){return a.enabled});e();return t.update()},forceUpdate:function(){if(!p){var a=g.elements,b=a.reference;a=a.popper;if(Za(b,a))for(g.rects={reference:Fb(b,fa(a),"fixed"===g.options.strategy),popper:ta(a)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(a){return g.modifiersData[a.name]=
Object.assign({},a.data)}),b=0;b<g.orderedModifiers.length;b++)if(!0===g.reset)g.reset=!1,b=-1;else{var c=g.orderedModifiers[b];a=c.fn;var d=c.options;d=void 0===d?{}:d;c=c.name;"function"===typeof a&&(g=a({state:g,options:d,name:c,instance:t})||g)}}},update:Jb(function(){return new Promise(function(a){t.forceUpdate();a(g)})}),destroy:function(){f();p=!0}};if(!Za(a,b))return t;t.setOptions(h).then(function(a){if(!p&&h.onFirstUpdate)h.onFirstUpdate(a)});return t}}({defaultModifiers:[{name:"eventListeners",
enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,h=z(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&k.forEach(function(a){a.addEventListener("scroll",c.update,sa)});f&&h.addEventListener("resize",c.update,sa);return function(){e&&k.forEach(function(a){a.removeEventListener("scroll",c.update,sa)});f&&h.removeEventListener("resize",c.update,sa)}},data:{}},
{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=Ua({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:F(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a};
null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,Qa(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Qa(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",
enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(a){var c=b.styles[a]||{},e=b.attributes[a]||{},f=b.elements[a];y(f)&&B(f)&&(Object.assign(f.style,c),Object.keys(e).forEach(function(a){var b=e[a];!1===b?f.removeAttribute(a):f.setAttribute(a,!0===b?"":b)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=
c;b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(a){var d=b.elements[a],f=b.attributes[a]||{};a=Object.keys(b.styles.hasOwnProperty(a)?b.styles[a]:c[a]).reduce(function(a,b){a[b]="";return a},{});y(d)&&B(d)&&(Object.assign(d.style,a),Object.keys(f).forEach(function(a){d.removeAttribute(a)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;
a=a.options.offset;var d=void 0===a?[0,0]:a;a=Va.reduce(function(a,c){var e=b.rects;var f=F(c);var h=0<=["left","top"].indexOf(f)?-1:1,k="function"===typeof d?d(Object.assign({},e,{placement:c})):d;e=k[0];k=k[1];e=e||0;k=(k||0)*h;f=0<=["left","right"].indexOf(f)?{x:k,y:e}:{x:e,y:k};a[c]=f;return a},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",
fn:function(a){var b=a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,h=c.padding,k=c.boundary,m=c.rootBoundary,g=c.altBoundary,l=c.flipVariations,p=void 0===l?!0:l,t=c.allowedAutoPlacements;c=b.options.placement;l=F(c);f=f||(l!==c&&p?Eb(c):[na(c)]);var A=[c].concat(f).reduce(function(a,c){return a.concat("auto"===F(c)?Db(b,{placement:c,boundary:k,rootBoundary:m,padding:h,flipVariations:p,allowedAutoPlacements:t}):
c)},[]);c=b.rects.reference;f=b.rects.popper;var n=new Map;l=!0;for(var u=A[0],D=0;D<A.length;D++){var v=A[D],q=F(v),r="start"===v.split("-")[1],U=0<=["top","bottom"].indexOf(q),x=U?"width":"height",w=ia(b,{placement:v,boundary:k,rootBoundary:m,altBoundary:g,padding:h});r=U?r?"right":"left":r?"bottom":"top";c[x]>f[x]&&(r=na(r));x=na(r);U=[];d&&U.push(0>=w[q]);e&&U.push(0>=w[r],0>=w[x]);if(U.every(function(a){return a})){u=v;l=!1;break}n.set(v,U)}if(l)for(d=function(a){var b=A.find(function(b){if(b=
n.get(b))return b.slice(0,a).every(function(a){return a})});if(b)return u=b,"break"},e=p?3:1;0<e&&"break"!==d(e);e--);b.placement!==u&&(b.modifiersData[a]._skip=!0,b.placement=u,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;d=void 0===d?!0:d;var h=c.tetherOffset,k=void 0===h?0:h,m=ia(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary});c=F(b.placement);var g=b.placement.split("-")[1],l=!g,p=ua(c);c="x"===p?"y":"x";h=b.modifiersData.popperOffsets;var t=b.rects.reference,n=b.rects.popper,q="function"===typeof k?k(Object.assign({},b.rects,{placement:b.placement})):k;k={x:0,y:0};if(h){if(e||f){var u="y"===p?"top":"left",D="y"===p?"bottom":"right",v="y"===p?"height":"width",r=h[p],x=h[p]+m[u],w=h[p]-m[D],z=d?-n[v]/2:0,y="start"===g?t[v]:n[v];g="start"===g?-n[v]:-t[v];n=b.elements.arrow;n=
d&&n?ta(n):{width:0,height:0};var B=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};u=B[u];D=B[D];n=E(0,M(t[v],n[v]));y=l?t[v]/2-z-n-u-q:y-n-u-q;t=l?-t[v]/2+z+n+D+q:g+n+D+q;l=b.elements.arrow&&fa(b.elements.arrow);q=b.modifiersData.offset?b.modifiersData.offset[b.placement][p]:0;l=h[p]+y-q-(l?"y"===p?l.clientTop||0:l.clientLeft||0:0);t=h[p]+t-q;e&&(e=d?M(x,l):x,w=d?E(w,t):w,e=E(e,M(r,w)),h[p]=e,k[p]=e-r);f&&(f=h[c],e=f+m["x"===p?"top":
"left"],m=f-m["x"===p?"bottom":"right"],e=d?M(e,l):e,d=d?E(m,t):m,d=E(e,M(f,d)),h[c]=d,k[c]=d-f)}b.modifiersData[a]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,h=c.modifiersData.popperOffsets,k=F(c.placement);a=ua(k);k=0<=["left","right"].indexOf(k)?"height":"width";if(f&&h){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Oa("number"!==typeof e?e:Pa(e,ja));
var m=ta(f),g="y"===a?"top":"left",l="y"===a?"bottom":"right",p=c.rects.reference[k]+c.rects.reference[a]-h[a]-c.rects.popper[k];h=h[a]-c.rects.reference[a];f=(f=fa(f))?"y"===a?f.clientHeight||0:f.clientWidth||0:0;h=f/2-m[k]/2+(p/2-h/2);k=E(e[g],M(h,f-m[k]-e[l]));c.modifiersData[d]=(b={},b[a]=k,b.centerOffset=k-h,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Ma(b.elements.popper,
a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ia(b,{elementContext:"reference"}),h=ia(b,{altBoundary:!0});c=Xa(f,c);d=Xa(h,d,e);e=Ya(c);h=Ya(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:h};b.attributes.popper=
Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":h})}}]});let P,ka=[],aa=[],qa=[],fb=[],Pb=Promise.resolve(),Fa=!1,Da=!1,Ea=new Set,ra=new Set,R;class K{$destroy(){O(this,1);this.$destroy=x}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let a=c.indexOf(b);-1!==a&&c.splice(a,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class Sb extends K{constructor(a){super();
J(this,a,Rb,Qb,I,{config:6,step:7})}}class gc extends K{constructor(a){super();J(this,a,Ub,Tb,I,{step:0})}}class $b extends K{constructor(a){super();J(this,a,Wb,Vb,I,{cancelIcon:0,step:2})}}class Zb extends K{constructor(a){super();J(this,a,Yb,Xb,I,{labelId:1,element:0,title:2})}}class ec extends K{constructor(a){super();J(this,a,bc,ac,I,{labelId:0,step:1})}}class fc extends K{constructor(a){super();J(this,a,dc,cc,I,{descriptionId:1,element:0,step:2})}}class kc extends K{constructor(a){super();J(this,
a,ic,hc,I,{descriptionId:0,labelId:1,step:2})}}class tc extends K{constructor(a){super();J(this,a,lc,jc,I,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var sb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function a(a,b){this.scrollLeft=a;this.scrollTop=b}function b(a){if(null===
a||"object"!==typeof a||void 0===a.behavior||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"===typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+a.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(a,b){if("Y"===b)return a.clientHeight+r<a.scrollHeight;if("X"===b)return a.clientWidth+r<a.scrollWidth}function f(a,b){a=g.getComputedStyle(a,null)["overflow"+b];return"auto"===a||"scroll"===a}function h(a){var b=
e(a,"Y")&&f(a,"Y");a=e(a,"X")&&f(a,"X");return b||a}function k(a){var b=(q()-a.startTime)/468;var c=.5*(1-Math.cos(Math.PI*(1<b?1:b)));b=a.startX+(a.x-a.startX)*c;c=a.startY+(a.y-a.startY)*c;a.method.call(a.scrollable,b,c);b===a.x&&c===a.y||g.requestAnimationFrame(k.bind(g,a))}function m(b,c,d){var e=q();if(b===l.body){var f=g;var h=g.scrollX||g.pageXOffset;b=g.scrollY||g.pageYOffset;var u=n.scroll}else f=b,h=b.scrollLeft,b=b.scrollTop,u=a;k({scrollable:f,method:u,startTime:e,startX:h,startY:b,x:c,
y:d})}var g=window,l=document;if(!("scrollBehavior"in l.documentElement.style&&!0!==g.__forceSmoothScrollPolyfill__)){var p=g.HTMLElement||g.Element,n={scroll:g.scroll||g.scrollTo,scrollBy:g.scrollBy,elementScroll:p.prototype.scroll||a,scrollIntoView:p.prototype.scrollIntoView},q=g.performance&&g.performance.now?g.performance.now.bind(g.performance):Date.now,r=/MSIE |Trident\/|Edge\//.test(g.navigator.userAgent)?1:0;g.scroll=g.scrollTo=function(a,c){void 0!==a&&(!0===b(a)?n.scroll.call(g,void 0!==
a.left?a.left:"object"!==typeof a?a:g.scrollX||g.pageXOffset,void 0!==a.top?a.top:void 0!==c?c:g.scrollY||g.pageYOffset):m.call(g,l.body,void 0!==a.left?~~a.left:g.scrollX||g.pageXOffset,void 0!==a.top?~~a.top:g.scrollY||g.pageYOffset))};g.scrollBy=function(a,c){void 0!==a&&(b(a)?n.scrollBy.call(g,void 0!==a.left?a.left:"object"!==typeof a?a:0,void 0!==a.top?a.top:void 0!==c?c:0):m.call(g,l.body,~~a.left+(g.scrollX||g.pageXOffset),~~a.top+(g.scrollY||g.pageYOffset)))};p.prototype.scroll=p.prototype.scrollTo=
function(a,c){if(void 0!==a)if(!0===b(a)){if("number"===typeof a&&void 0===c)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==a.left?~~a.left:"object"!==typeof a?~~a:this.scrollLeft,void 0!==a.top?~~a.top:void 0!==c?~~c:this.scrollTop)}else c=a.left,a=a.top,m.call(this,this,"undefined"===typeof c?this.scrollLeft:~~c,"undefined"===typeof a?this.scrollTop:~~a)};p.prototype.scrollBy=function(a,c){void 0!==a&&(!0===b(a)?n.elementScroll.call(this,void 0!==a.left?
~~a.left+this.scrollLeft:~~a+this.scrollLeft,void 0!==a.top?~~a.top+this.scrollTop:~~c+this.scrollTop):this.scroll({left:~~a.left+this.scrollLeft,top:~~a.top+this.scrollTop,behavior:a.behavior}))};p.prototype.scrollIntoView=function(a){if(!0===b(a))n.scrollIntoView.call(this,void 0===a?!0:a);else{for(a=this;a!==l.body&&!1===h(a);)a=a.parentNode||a.host;var c=a.getBoundingClientRect(),d=this.getBoundingClientRect();a!==l.body?(m.call(this,a,a.scrollLeft+d.left-c.left,a.scrollTop+d.top-c.top),"fixed"!==
g.getComputedStyle(a).position&&g.scrollBy({left:c.left,top:c.top,behavior:"smooth"})):g.scrollBy({left:d.left,top:d.top,behavior:"smooth"})}}}}}})()});sb.polyfill;sb.polyfill();class Ha extends Ga{constructor(a,b={}){super(a,b);this.tour=a;this.classPrefix=this.tour.options?$a(this.tour.options.classPrefix):"";this.styles=a.styles;Ka(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&
(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Aa(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(W(this.options.beforeShowPromise)){let a=
this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new tc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,
styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Aa(this);W(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a={}){let b=
this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=rc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ba()}`;c&&Object.keys(c).forEach(a=>{this.on(a,c[a],this)})}_setupElements(){void 0!==this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&xb(this);{this.tooltip&&this.tooltip.destroy();let a=Aa(this),b=a.element,c=Nb(a,this);
this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=sc(b,this.el,c);this.target=a.element}}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),
b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);
a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class uc extends K{constructor(a){super();J(this,a,pc,oc,I,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let ba=new Ga;class vc extends Ga{constructor(a={}){super(a);Ka(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=$a(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(a=>{(a=>{this.on(a,b=>{b=b||{};b.tour=this;ba.trigger(a,b)})})(a)});this._setTourID();return this}addStep(a,b){a instanceof Ha?a.tour=this:a=new Ha(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);
return a}addSteps(a){Array.isArray(a)&&a.forEach(a=>{this.addStep(a)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return ba.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((b,d)=>{if(b.id===a)return b.isOpen()&&b.hide(),b.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a=0,b=!0){if(a=da(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),W(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",
{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(a=>a.destroy());mc(this);this.trigger(a,{index:b});ba.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=
document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});ba.activeTour=this}_setupModal(){this.modal=new uc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);this.show(b?a+1:a-1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||
this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ba()}`}}Object.assign(ba,{Tour:vc,Step:Ha});return ba})

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, settings, document, Shepherd) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      once('tour', 'body').forEach(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (tourModel, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        });

        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).attr('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        this._removeIrrelevantTourItems(this._getTour());

        var tourItems = this.model.get('tour');
        var that = this;

        if (tourItems.length) {
          settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({
            name: 'moveArrowJoyridePosition',
            enabled: true,
            phase: 'write',
            fn: function fn(_ref) {
              var state = _ref.state;
              var arrow = state.elements.arrow;
              var placement = state.placement;

              if (arrow && /^top|bottom/.test(placement) && /-start|-end$/.test(placement)) {
                var horizontalPosition = placement.split('-')[1];
                var offset = horizontalPosition === 'start' ? 28 : state.elements.popper.clientWidth - 56;
                arrow.style.transform = "translate3d(".concat(offset, "px, 0px, 0px)");
              }
            }
          });
          var shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
          shepherdTour.on('cancel', function () {
            that.model.set('isActive', false);
          });
          shepherdTour.on('complete', function () {
            that.model.set('isActive', false);
          });
          tourItems.forEach(function (tourStepConfig, index) {
            var tourItemOptions = {
              title: tourStepConfig.title ? Drupal.checkPlain(tourStepConfig.title) : null,
              text: function text() {
                return Drupal.theme('tourItemContent', tourStepConfig);
              },
              attachTo: tourStepConfig.attachTo,
              buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
              classes: tourStepConfig.classes,
              index: index
            };
            tourItemOptions.when = {
              show: function show() {
                var nextButton = shepherdTour.currentStep.el.querySelector('footer button');
                nextButton.focus();

                if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                  Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                }
              }
            };
            shepherdTour.addStep(tourItemOptions);
          });
          shepherdTour.start();
          this.model.set({
            isActive: true,
            activeTour: shepherdTour
          });
        }
      } else {
        this.model.get('activeTour').cancel();
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems(tourItems) {
      var tips = /tips=([^&]+)/.exec(queryString);
      var filteredTour = tourItems.filter(function (tourItem) {
        if (tips && tourItem.hasOwnProperty('classes') && tourItem.classes.indexOf(tips[1]) === -1) {
          return false;
        }

        return !(tourItem.selector && !document.querySelector(tourItem.selector));
      });

      if (tourItems.length !== filteredTour.length) {
        filteredTour.forEach(function (filteredTourItem, filteredTourItemId) {
          filteredTour[filteredTourItemId].counter = Drupal.t('!tour_item of !total', {
            '!tour_item': filteredTourItemId + 1,
            '!total': filteredTour.length
          });

          if (filteredTourItemId === filteredTour.length - 1) {
            filteredTour[filteredTourItemId].cancelText = Drupal.t('End tour');
          }
        });
        this.model.set('tour', filteredTour);
      }
    }
  });

  Drupal.tour.nextButton = function (shepherdTour, tourStepConfig) {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText ? tourStepConfig.cancelText : Drupal.t('Next'),
      action: tourStepConfig.cancelText ? shepherdTour.cancel : shepherdTour.next
    };
  };

  Drupal.theme.tourItemContent = function (tourStepConfig) {
    return "".concat(tourStepConfig.body, "<div class=\"tour-progress\">").concat(tourStepConfig.counter, "</div>");
  };
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
      isTabbable = _ref.isTabbable;

  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$trapFocus = _ref2.trapFocus,
          trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;

      var il = this.stack.length;

      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));

        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;

      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;

      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }

      $hasFocus.trigger('focus');

      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');

      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');

      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];

        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }

        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;

          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }

          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }

        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if ($('body:not(.toolbar-fixed) #toolbar-item-administration-tray').hasClass('toolbar-tray-vertical')) {
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
(function ($) {
  $(document).ready(function () {
    $('.toolbar-tray.toolbar-tray-horizontal .menu-item.menu-item--expanded').hover(function () {
      // At the current depth, we should delete all "hover-intent" classes.
      // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
      $(this).parent().find('li').removeClass('hover-intent');
      $(this).addClass('hover-intent');
    },
      function () {
        $(this).removeClass('hover-intent');
      });
  });
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');

      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        var $toolbarEscape = $(toolbarEscape);

        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = placeholderReplacement.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        once.remove('big-pipe', placeholderReplacement);
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    once('big-pipe', 'script[data-big-pipe-replacement-for-placeholder-with-id]', context).forEach(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();
  window.addEventListener('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);;
