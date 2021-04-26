function $(n,l,f,o,y,h){return{tag:n,key:l,attrs:f,children:o,text:y,dom:h,domSize:void 0,state:void 0,events:void 0,instance:void 0}}$.normalize=function(n){return Array.isArray(n)?$("[",void 0,void 0,$.normalizeChildren(n),void 0,void 0):n==null||typeof n=="boolean"?null:typeof n=="object"?n:$("#",void 0,void 0,String(n),void 0,void 0)};$.normalizeChildren=function(n){var l=[];if(n.length){for(var f=n[0]!=null&&n[0].key!=null,o=1;o<n.length;o++)if((n[o]!=null&&n[o].key!=null)!==f)throw new TypeError("Vnodes must either always have keys or never have keys!");for(var o=0;o<n.length;o++)l[o]=$.normalize(n[o])}return l};var B=$,qe=function(){var n=arguments[this],l=this+1,f;if(n==null?n={}:(typeof n!="object"||n.tag!=null||Array.isArray(n))&&(n={},l=this),arguments.length===l+1)f=arguments[l],Array.isArray(f)||(f=[f]);else for(f=[];l<arguments.length;)f.push(arguments[l++]);return B("",n.key,n,f)},at=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,_e={},te={}.hasOwnProperty;function Fe(n){for(var l in n)if(te.call(n,l))return!1;return!0}function lt(n){for(var l,f="div",o=[],y={};l=at.exec(n);){var h=l[1],m=l[2];if(h===""&&m!=="")f=m;else if(h==="#")y.id=m;else if(h===".")o.push(m);else if(l[3][0]==="["){var u=l[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),l[4]==="class"?o.push(u):y[l[4]]=u===""?u:u||!0}}return o.length>0&&(y.className=o.join(" ")),_e[n]={tag:f,attrs:y}}function st(n,l){var f=l.attrs,o=B.normalizeChildren(l.children),y=te.call(f,"class"),h=y?f.class:f.className;if(l.tag=n.tag,l.attrs=null,l.children=void 0,!Fe(n.attrs)&&!Fe(f)){var m={};for(var u in f)te.call(f,u)&&(m[u]=f[u]);f=m}for(var u in n.attrs)te.call(n.attrs,u)&&u!=="className"&&!te.call(f,u)&&(f[u]=n.attrs[u]);(h!=null||n.attrs.className!=null)&&(f.className=h!=null?n.attrs.className!=null?String(n.attrs.className)+" "+String(h):h:n.attrs.className!=null?n.attrs.className:null),y&&(f.class=null);for(var u in f)if(te.call(f,u)&&u!=="key"){l.attrs=f;break}return Array.isArray(o)&&o.length===1&&o[0]!=null&&o[0].tag==="#"?l.text=o[0].children:l.children=o,l}function ft(n){if(n==null||typeof n!="string"&&typeof n!="function"&&typeof n.view!="function")throw Error("The selector must be either a string or a component.");var l=qe.apply(1,arguments);return typeof n=="string"&&(l.children=B.normalizeChildren(l.children),n!=="[")?st(_e[n]||lt(n),l):(l.tag=n,l)}var oe=ft,ct=function(n){return n==null&&(n=""),B("<",void 0,void 0,n,void 0,void 0)},ot=function(){var n=qe.apply(0,arguments);return n.tag="[",n.children=B.normalizeChildren(n.children),n};oe.trust=ct;oe.fragment=ot;var ue=oe,re=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function mt(n,l,f){return f={path:l,exports:{},require:function(o,y){return ut(o,y==null?f.path:y)}},n(f,f.exports),f.exports}function ut(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var _=function(n){if(!(this instanceof _))throw new Error("Promise must be called with `new`");if(typeof n!="function")throw new TypeError("executor must be a function");var l=this,f=[],o=[],y=c(f,!0),h=c(o,!1),m=l._instance={resolvers:f,rejectors:o},u=typeof setImmediate=="function"?setImmediate:setTimeout;function c(d,b){return function v(g){var j;try{if(b&&g!=null&&(typeof g=="object"||typeof g=="function")&&typeof(j=g.then)=="function"){if(g===l)throw new TypeError("Promise can't be resolved w/ itself");w(j.bind(g))}else u(function(){!b&&d.length===0&&console.error("Possible unhandled promise rejection:",g);for(var x=0;x<d.length;x++)d[x](g);f.length=0,o.length=0,m.state=b,m.retry=function(){v(g)}})}catch(x){h(x)}}}function w(d){var b=0;function v(j){return function(x){b++>0||j(x)}}var g=v(h);try{d(v(y),g)}catch(j){g(j)}}w(n)};_.prototype.then=function(n,l){var f=this,o=f._instance;function y(c,w,d,b){w.push(function(v){if(typeof c!="function")d(v);else try{h(c(v))}catch(g){m&&m(g)}}),typeof o.retry=="function"&&b===o.state&&o.retry()}var h,m,u=new _(function(c,w){h=c,m=w});return y(n,o.resolvers,h,!0),y(l,o.rejectors,m,!1),u};_.prototype.catch=function(n){return this.then(null,n)};_.prototype.finally=function(n){return this.then(function(l){return _.resolve(n()).then(function(){return l})},function(l){return _.resolve(n()).then(function(){return _.reject(l)})})};_.resolve=function(n){return n instanceof _?n:new _(function(l){l(n)})};_.reject=function(n){return new _(function(l,f){f(n)})};_.all=function(n){return new _(function(l,f){var o=n.length,y=0,h=[];if(n.length===0)l([]);else for(var m=0;m<n.length;m++)(function(u){function c(w){y++,h[u]=w,y===o&&l(h)}n[u]!=null&&(typeof n[u]=="object"||typeof n[u]=="function")&&typeof n[u].then=="function"?n[u].then(c,f):c(n[u])})(m)})};_.race=function(n){return new _(function(l,f){for(var o=0;o<n.length;o++)n[o].then(l,f)})};var ne=_,De=mt(function(n){typeof window!="undefined"?(typeof window.Promise=="undefined"?window.Promise=ne:window.Promise.prototype.finally||(window.Promise.prototype.finally=ne.prototype.finally),n.exports=window.Promise):typeof re!="undefined"?(typeof re.Promise=="undefined"?re.Promise=ne:re.Promise.prototype.finally||(re.Promise.prototype.finally=ne.prototype.finally),n.exports=re.Promise):n.exports=ne}),ht=function(n){var l=n&&n.document,f,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function y(t){return t.attrs&&t.attrs.xmlns||o[t.tag]}function h(t,e){if(t.state!==e)throw new Error("`vnode.state` must not be modified")}function m(t){var e=t.state;try{return this.apply(e,arguments)}finally{h(t,e)}}function u(){try{return l.activeElement}catch(t){return null}}function c(t,e,r,i,a,p,k){for(var T=r;T<i;T++){var C=e[T];C!=null&&w(t,C,a,k,p)}}function w(t,e,r,i,a){var p=e.tag;if(typeof p=="string")switch(e.state={},e.attrs!=null&&be(e.attrs,e,r),p){case"#":d(t,e,a);break;case"<":v(t,e,i,a);break;case"[":g(t,e,r,i,a);break;default:j(t,e,r,i,a)}else z(t,e,r,i,a)}function d(t,e,r){e.dom=l.createTextNode(e.children),V(t,e.dom,r)}var b={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function v(t,e,r,i){var a=e.children.match(/^\s*?<(\w+)/im)||[],p=l.createElement(b[a[1]]||"div");r==="http://www.w3.org/2000/svg"?(p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",p=p.firstChild):p.innerHTML=e.children,e.dom=p.firstChild,e.domSize=p.childNodes.length,e.instance=[];for(var k=l.createDocumentFragment(),T;T=p.firstChild;)e.instance.push(T),k.appendChild(T);V(t,k,i)}function g(t,e,r,i,a){var p=l.createDocumentFragment();if(e.children!=null){var k=e.children;c(p,k,0,k.length,r,null,i)}e.dom=p.firstChild,e.domSize=p.childNodes.length,V(t,p,a)}function j(t,e,r,i,a){var p=e.tag,k=e.attrs,T=k&&k.is;i=y(e)||i;var C=i?T?l.createElementNS(i,p,{is:T}):l.createElementNS(i,p):T?l.createElement(p,{is:T}):l.createElement(p);if(e.dom=C,k!=null&&Ze(e,k,i),V(t,C,a),!Y(e)&&(e.text!=null&&(e.text!==""?C.textContent=e.text:e.children=[B("#",void 0,void 0,e.text,void 0,void 0)]),e.children!=null)){var L=e.children;c(C,L,0,L.length,r,null,i),e.tag==="select"&&k!=null&&Ye(e,k)}}function x(t,e){var r;if(typeof t.tag.view=="function"){if(t.state=Object.create(t.tag),r=t.state.view,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0}else{if(t.state=void 0,r=t.tag,r.$$reentrantLock$$!=null)return;r.$$reentrantLock$$=!0,t.state=t.tag.prototype!=null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(be(t.state,t,e),t.attrs!=null&&be(t.attrs,t,e),t.instance=B.normalize(m.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function z(t,e,r,i,a){x(e,r),e.instance!=null?(w(t,e.instance,r,i,a),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:0):e.domSize=0}function N(t,e,r,i,a,p){if(!(e===r||e==null&&r==null))if(e==null||e.length===0)c(t,r,0,r.length,i,a,p);else if(r==null||r.length===0)W(t,e,0,e.length);else{var k=e[0]!=null&&e[0].key!=null,T=r[0]!=null&&r[0].key!=null,C=0,L=0;if(!k)for(;L<e.length&&e[L]==null;)L++;if(!T)for(;C<r.length&&r[C]==null;)C++;if(T===null&&k==null)return;if(k!==T)W(t,e,L,e.length),c(t,r,C,r.length,i,a,p);else if(T){for(var M=e.length-1,q=r.length-1,ce,U,I,D,E,je;M>=L&&q>=C&&(D=e[M],E=r[q],D.key===E.key);)D!==E&&R(t,D,E,i,a,p),E.dom!=null&&(a=E.dom),M--,q--;for(;M>=L&&q>=C&&(U=e[L],I=r[C],U.key===I.key);)L++,C++,U!==I&&R(t,U,I,i,S(e,L,a),p);for(;M>=L&&q>=C&&!(C===q||U.key!==E.key||D.key!==I.key);)je=S(e,L,a),J(t,D,je),D!==I&&R(t,D,I,i,je,p),++C<=--q&&J(t,U,a),U!==E&&R(t,U,E,i,a,p),E.dom!=null&&(a=E.dom),L++,M--,D=e[M],E=r[q],U=e[L],I=r[C];for(;M>=L&&q>=C&&D.key===E.key;)D!==E&&R(t,D,E,i,a,p),E.dom!=null&&(a=E.dom),M--,q--,D=e[M],E=r[q];if(C>q)W(t,e,L,M+1);else if(L>M)c(t,r,C,q+1,i,a,p);else{var it=a,Oe=q-C+1,ae=new Array(Oe),ve=0,A=0,ke=2147483647,Te=0,ce,ze;for(A=0;A<Oe;A++)ae[A]=-1;for(A=q;A>=C;A--){ce==null&&(ce=Q(e,L,M+1)),E=r[A];var ee=ce[E.key];ee!=null&&(ke=ee<ke?ee:-1,ae[A-C]=ee,D=e[ee],e[ee]=null,D!==E&&R(t,D,E,i,a,p),E.dom!=null&&(a=E.dom),Te++)}if(a=it,Te!==M-L+1&&W(t,e,L,M+1),Te===0)c(t,r,C,q+1,i,a,p);else if(ke===-1)for(ze=Z(ae),ve=ze.length-1,A=q;A>=C;A--)I=r[A],ae[A-C]===-1?w(t,I,i,p,a):ze[ve]===A-C?ve--:J(t,I,a),I.dom!=null&&(a=r[A].dom);else for(A=q;A>=C;A--)I=r[A],ae[A-C]===-1&&w(t,I,i,p,a),I.dom!=null&&(a=r[A].dom)}}else{var Ce=e.length<r.length?e.length:r.length;for(C=C<L?C:L;C<Ce;C++)U=e[C],I=r[C],!(U===I||U==null&&I==null)&&(U==null?w(t,I,i,p,S(e,C+1,a)):I==null?se(t,U):R(t,U,I,i,S(e,C+1,a),p));e.length>Ce&&W(t,e,C,e.length),r.length>Ce&&c(t,r,C,r.length,i,a,p)}}}function R(t,e,r,i,a,p){var k=e.tag,T=r.tag;if(k===T){if(r.state=e.state,r.events=e.events,nt(r,e))return;if(typeof k=="string")switch(r.attrs!=null&&xe(r.attrs,r,i),k){case"#":G(e,r);break;case"<":X(t,e,r,p,a);break;case"[":O(t,e,r,i,a,p);break;default:P(e,r,i,p)}else F(t,e,r,i,a,p)}else se(t,e),w(t,r,i,p,a)}function G(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function X(t,e,r,i,a){e.children!==r.children?(Ee(t,e),v(t,r,i,a)):(r.dom=e.dom,r.domSize=e.domSize,r.instance=e.instance)}function O(t,e,r,i,a,p){N(t,e.children,r.children,i,a,p);var k=0,T=r.children;if(r.dom=null,T!=null){for(var C=0;C<T.length;C++){var L=T[C];L!=null&&L.dom!=null&&(r.dom==null&&(r.dom=L.dom),k+=L.domSize||1)}k!==1&&(r.domSize=k)}}function P(t,e,r,i){var a=e.dom=t.dom;i=y(e)||i,e.tag==="textarea"&&(e.attrs==null&&(e.attrs={}),e.text!=null&&(e.attrs.value=e.text,e.text=void 0)),$e(e,t.attrs,e.attrs,i),Y(e)||(t.text!=null&&e.text!=null&&e.text!==""?t.text.toString()!==e.text.toString()&&(t.dom.firstChild.nodeValue=e.text):(t.text!=null&&(t.children=[B("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),e.text!=null&&(e.children=[B("#",void 0,void 0,e.text,void 0,void 0)]),N(a,t.children,e.children,r,null,i)))}function F(t,e,r,i,a,p){if(r.instance=B.normalize(m.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");xe(r.state,r,i),r.attrs!=null&&xe(r.attrs,r,i),r.instance!=null?(e.instance==null?w(t,r.instance,i,p,a):R(t,e.instance,r.instance,i,a,p),r.dom=r.instance.dom,r.domSize=r.instance.domSize):e.instance!=null?(se(t,e.instance),r.dom=void 0,r.domSize=0):(r.dom=e.dom,r.domSize=e.domSize)}function Q(t,e,r){for(var i=Object.create(null);e<r;e++){var a=t[e];if(a!=null){var p=a.key;p!=null&&(i[p]=e)}}return i}var K=[];function Z(t){for(var e=[0],r=0,i=0,a=0,p=K.length=t.length,a=0;a<p;a++)K[a]=t[a];for(var a=0;a<p;++a)if(t[a]!==-1){var k=e[e.length-1];if(t[k]<t[a]){K[a]=k,e.push(a);continue}for(r=0,i=e.length-1;r<i;){var T=(r>>>1)+(i>>>1)+(r&i&1);t[e[T]]<t[a]?r=T+1:i=T}t[a]<t[e[r]]&&(r>0&&(K[a]=e[r-1]),e[r]=a)}for(r=e.length,i=e[r-1];r-- >0;)e[r]=i,i=K[i];return K.length=0,e}function S(t,e,r){for(;e<t.length;e++)if(t[e]!=null&&t[e].dom!=null)return t[e].dom;return r}function J(t,e,r){var i=l.createDocumentFragment();le(t,i,e),V(t,i,r)}function le(t,e,r){for(;r.dom!=null&&r.dom.parentNode===t;){if(typeof r.tag!="string"){if(r=r.instance,r!=null)continue}else if(r.tag==="<")for(var i=0;i<r.instance.length;i++)e.appendChild(r.instance[i]);else if(r.tag!=="[")e.appendChild(r.dom);else if(r.children.length===1){if(r=r.children[0],r!=null)continue}else for(var i=0;i<r.children.length;i++){var a=r.children[i];a!=null&&le(t,e,a)}break}}function V(t,e,r){r!=null?t.insertBefore(e,r):t.appendChild(e)}function Y(t){if(t.attrs==null||t.attrs.contenteditable==null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="<"){var r=e[0].children;t.dom.innerHTML!==r&&(t.dom.innerHTML=r)}else if(t.text!=null||e!=null&&e.length!==0)throw new Error("Child node of a contenteditable must be trusted");return!0}function W(t,e,r,i){for(var a=r;a<i;a++){var p=e[a];p!=null&&se(t,p)}}function se(t,e){var r=0,i=e.state,a,p;if(typeof e.tag!="string"&&typeof e.state.onbeforeremove=="function"){var k=m.call(e.state.onbeforeremove,e);k!=null&&typeof k.then=="function"&&(r=1,a=k)}if(e.attrs&&typeof e.attrs.onbeforeremove=="function"){var k=m.call(e.attrs.onbeforeremove,e);k!=null&&typeof k.then=="function"&&(r|=2,p=k)}if(h(e,i),!r)fe(e),pe(t,e);else{if(a!=null){var T=function(){r&1&&(r&=2,r||C())};a.then(T,T)}if(p!=null){var T=function(){r&2&&(r&=1,r||C())};p.then(T,T)}}function C(){h(e,i),fe(e),pe(t,e)}}function Ee(t,e){for(var r=0;r<e.instance.length;r++)t.removeChild(e.instance[r])}function pe(t,e){for(;e.dom!=null&&e.dom.parentNode===t;){if(typeof e.tag!="string"){if(e=e.instance,e!=null)continue}else if(e.tag==="<")Ee(t,e);else{if(e.tag!=="["&&(t.removeChild(e.dom),!Array.isArray(e.children)))break;if(e.children.length===1){if(e=e.children[0],e!=null)continue}else for(var r=0;r<e.children.length;r++){var i=e.children[r];i!=null&&pe(t,i)}}break}}function fe(t){if(typeof t.tag!="string"&&typeof t.state.onremove=="function"&&m.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&m.call(t.attrs.onremove,t),typeof t.tag!="string")t.instance!=null&&fe(t.instance);else{var e=t.children;if(Array.isArray(e))for(var r=0;r<e.length;r++){var i=e[r];i!=null&&fe(i)}}}function Ze(t,e,r){for(var i in e)ge(t,i,null,e[i],r)}function ge(t,e,r,i,a){if(!(e==="key"||e==="is"||i==null||we(e)||r===i&&!et(t,e)&&typeof i!="object")){if(e[0]==="o"&&e[1]==="n")return Re(t,e,i);if(e.slice(0,6)==="xlink:")t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),i);else if(e==="style")Ie(t.dom,r,i);else if(Ae(t,e,a)){if(e==="value"&&((t.tag==="input"||t.tag==="textarea")&&t.dom.value===""+i&&t.dom===u()||t.tag==="select"&&r!==null&&t.dom.value===""+i||t.tag==="option"&&r!==null&&t.dom.value===""+i))return;t.tag==="input"&&e==="type"?t.dom.setAttribute(e,i):t.dom[e]=i}else typeof i=="boolean"?i?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="className"?"class":e,i)}}function Ve(t,e,r,i){if(!(e==="key"||e==="is"||r==null||we(e)))if(e[0]==="o"&&e[1]==="n"&&!we(e))Re(t,e,void 0);else if(e==="style")Ie(t.dom,r,null);else if(Ae(t,e,i)&&e!=="className"&&!(e==="value"&&(t.tag==="option"||t.tag==="select"&&t.dom.selectedIndex===-1&&t.dom===u()))&&!(t.tag==="input"&&e==="type"))t.dom[e]=null;else{var a=e.indexOf(":");a!==-1&&(e=e.slice(a+1)),r!==!1&&t.dom.removeAttribute(e==="className"?"class":e)}}function Ye(t,e){if("value"in e)if(e.value===null)t.dom.selectedIndex!==-1&&(t.dom.value=null);else{var r=""+e.value;(t.dom.value!==r||t.dom.selectedIndex===-1)&&(t.dom.value=r)}"selectedIndex"in e&&ge(t,"selectedIndex",null,e.selectedIndex,void 0)}function $e(t,e,r,i){if(r!=null)for(var a in r)ge(t,a,e&&e[a],r[a],i);var p;if(e!=null)for(var a in e)(p=e[a])!=null&&(r==null||r[a]==null)&&Ve(t,a,p,i)}function et(t,e){return e==="value"||e==="checked"||e==="selectedIndex"||e==="selected"&&t.dom===u()||t.tag==="option"&&t.dom.parentNode===l.activeElement}function we(t){return t==="oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="onbeforeremove"||t==="onbeforeupdate"}function Ae(t,e,r){return r===void 0&&(t.tag.indexOf("-")>-1||t.attrs!=null&&t.attrs.is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in t.dom}var tt=/[A-Z]/g;function rt(t){return"-"+t.toLowerCase()}function de(t){return t[0]==="-"&&t[1]==="-"?t:t==="cssFloat"?"float":t.replace(tt,rt)}function Ie(t,e,r){if(e!==r)if(r==null)t.style.cssText="";else if(typeof r!="object")t.style.cssText=r;else if(e==null||typeof e!="object"){t.style.cssText="";for(var i in r){var a=r[i];a!=null&&t.style.setProperty(de(i),String(a))}}else{for(var i in r){var a=r[i];a!=null&&(a=String(a))!==String(e[i])&&t.style.setProperty(de(i),a)}for(var i in e)e[i]!=null&&r[i]==null&&t.style.removeProperty(de(i))}}function ye(){this._=f}ye.prototype=Object.create(null),ye.prototype.handleEvent=function(t){var e=this["on"+t.type],r;typeof e=="function"?r=e.call(t.currentTarget,t):typeof e.handleEvent=="function"&&e.handleEvent(t),this._&&t.redraw!==!1&&(0,this._)(),r===!1&&(t.preventDefault(),t.stopPropagation())};function Re(t,e,r){if(t.events!=null){if(t.events[e]===r)return;r!=null&&(typeof r=="function"||typeof r=="object")?(t.events[e]==null&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0)}else r!=null&&(typeof r=="function"||typeof r=="object")&&(t.events=new ye,t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=r)}function be(t,e,r){typeof t.oninit=="function"&&m.call(t.oninit,e),typeof t.oncreate=="function"&&r.push(m.bind(t.oncreate,e))}function xe(t,e,r){typeof t.onupdate=="function"&&r.push(m.bind(t.onupdate,e))}function nt(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="function"){var r=m.call(t.attrs.onbeforeupdate,t,e);if(r!==void 0&&!r)break}if(typeof t.tag!="string"&&typeof t.state.onbeforeupdate=="function"){var r=m.call(t.state.onbeforeupdate,t,e);if(r!==void 0&&!r)break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,t.text=e.text,!0}return function(t,e,r){if(!t)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=[],a=u(),p=t.namespaceURI;t.vnodes==null&&(t.textContent=""),e=B.normalizeChildren(Array.isArray(e)?e:[e]);var k=f;try{f=typeof r=="function"?r:void 0,N(t,t.vnodes,e,i,null,p==="http://www.w3.org/1999/xhtml"?void 0:p)}finally{f=k}t.vnodes=e,a!=null&&u()!==a&&typeof a.focus=="function"&&a.focus();for(var T=0;T<i.length;T++)i[T]()}},He=ht(window),pt=function(n,l,f){var o=[],y=!1,h=!1;function m(){if(y)throw new Error("Nested m.redraw.sync() call");y=!0;for(var w=0;w<o.length;w+=2)try{n(o[w],B(o[w+1]),u)}catch(d){f.error(d)}y=!1}function u(){h||(h=!0,l(function(){h=!1,m()}))}u.sync=m;function c(w,d){if(d!=null&&d.view==null&&typeof d!="function")throw new TypeError("m.mount(element, component) expects a component, not a vnode");var b=o.indexOf(w);b>=0&&(o.splice(b,2),n(w,[],u)),d!=null&&(o.push(w,d),n(w,B(d),u))}return{mount:c,redraw:u}},me=pt(He,requestAnimationFrame,console),Me=function(n){if(Object.prototype.toString.call(n)!=="[object Object]")return"";var l=[];for(var f in n)o(f,n[f]);return l.join("&");function o(y,h){if(Array.isArray(h))for(var m=0;m<h.length;m++)o(y+"["+m+"]",h[m]);else if(Object.prototype.toString.call(h)==="[object Object]")for(var m in h)o(y+"["+m+"]",h[m]);else l.push(encodeURIComponent(y)+(h!=null&&h!==""?"="+encodeURIComponent(h):""))}},Ne=Object.assign||function(n,l){l&&Object.keys(l).forEach(function(f){n[f]=l[f]})},Le=function(n,l){if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names *must* be separated");if(l==null)return n;var f=n.indexOf("?"),o=n.indexOf("#"),y=o<0?n.length:o,h=f<0?y:f,m=n.slice(0,h),u={};Ne(u,l);var c=m.replace(/:([^\/\.-]+)(\.{3})?/g,function(x,z,N){return delete u[z],l[z]==null?x:N?l[z]:encodeURIComponent(String(l[z]))}),w=c.indexOf("?"),d=c.indexOf("#"),b=d<0?c.length:d,v=w<0?b:w,g=c.slice(0,v);f>=0&&(g+=n.slice(f,y)),w>=0&&(g+=(f<0?"?":"&")+c.slice(w,b));var j=Me(u);return j&&(g+=(f<0&&w<0?"?":"&")+j),o>=0&&(g+=n.slice(o)),d>=0&&(g+=(o<0?"":"&")+c.slice(d)),g},gt=function(n,l,f){var o=0;function y(u){return new l(u)}y.prototype=l.prototype,y.__proto__=l;function h(u){return function(c,w){typeof c!="string"?(w=c,c=c.url):w==null&&(w={});var d=new l(function(j,x){u(Le(c,w.params),w,function(z){if(typeof w.type=="function")if(Array.isArray(z))for(var N=0;N<z.length;N++)z[N]=new w.type(z[N]);else z=new w.type(z);j(z)},x)});if(w.background===!0)return d;var b=0;function v(){--b==0&&typeof f=="function"&&f()}return g(d);function g(j){var x=j.then;return j.constructor=y,j.then=function(){b++;var z=x.apply(j,arguments);return z.then(v,function(N){if(v(),b===0)throw N}),g(z)},j}}}function m(u,c){for(var w in u.headers)if({}.hasOwnProperty.call(u.headers,w)&&c.test(w))return!0;return!1}return{request:h(function(u,c,w,d){var b=c.method!=null?c.method.toUpperCase():"GET",v=c.body,g=(c.serialize==null||c.serialize===JSON.serialize)&&!(v instanceof n.FormData),j=c.responseType||(typeof c.extract=="function"?"":"json"),x=new n.XMLHttpRequest,z=!1,N=x,R,G=x.abort;x.abort=function(){z=!0,G.call(this)},x.open(b,u,c.async!==!1,typeof c.user=="string"?c.user:void 0,typeof c.password=="string"?c.password:void 0),g&&v!=null&&!m(c,/^content-type$/i)&&x.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof c.deserialize!="function"&&!m(c,/^accept$/i)&&x.setRequestHeader("Accept","application/json, text/*"),c.withCredentials&&(x.withCredentials=c.withCredentials),c.timeout&&(x.timeout=c.timeout),x.responseType=j;for(var X in c.headers)({}).hasOwnProperty.call(c.headers,X)&&x.setRequestHeader(X,c.headers[X]);x.onreadystatechange=function(O){if(!z&&O.target.readyState===4)try{var P=O.target.status>=200&&O.target.status<300||O.target.status===304||/^file:\/\//i.test(u),F=O.target.response,Q;if(j==="json"?!O.target.responseType&&typeof c.extract!="function"&&(F=JSON.parse(O.target.responseText)):(!j||j==="text")&&F==null&&(F=O.target.responseText),typeof c.extract=="function"?(F=c.extract(O.target,c),P=!0):typeof c.deserialize=="function"&&(F=c.deserialize(F)),P)w(F);else{try{Q=O.target.responseText}catch(Z){Q=F}var K=new Error(Q);K.code=O.target.status,K.response=F,d(K)}}catch(Z){d(Z)}},typeof c.config=="function"&&(x=c.config(x,c,u)||x,x!==N&&(R=x.abort,x.abort=function(){z=!0,R.call(this)})),v==null?x.send():typeof c.serialize=="function"?x.send(c.serialize(v)):v instanceof n.FormData?x.send(v):x.send(JSON.stringify(v))}),jsonp:h(function(u,c,w,d){var b=c.callbackName||"_mithril_"+Math.round(Math.random()*1e16)+"_"+o++,v=n.document.createElement("script");n[b]=function(g){delete n[b],v.parentNode.removeChild(v),w(g)},v.onerror=function(){delete n[b],v.parentNode.removeChild(v),d(new Error("JSONP request failed"))},v.src=u+(u.indexOf("?")<0?"?":"&")+encodeURIComponent(c.callbackKey||"callback")+"="+encodeURIComponent(b),n.document.documentElement.appendChild(v)})}},Ue=gt(window,De,me.redraw),Be=function(n){if(n===""||n==null)return{};n.charAt(0)==="?"&&(n=n.slice(1));for(var l=n.split("&"),f={},o={},y=0;y<l.length;y++){var h=l[y].split("="),m=decodeURIComponent(h[0]),u=h.length===2?decodeURIComponent(h[1]):"";u==="true"?u=!0:u==="false"&&(u=!1);var c=m.split(/\]\[?|\[/),w=o;m.indexOf("[")>-1&&c.pop();for(var d=0;d<c.length;d++){var b=c[d],v=c[d+1],g=v==""||!isNaN(parseInt(v,10));if(b===""){var m=c.slice(0,d).join();f[m]==null&&(f[m]=Array.isArray(w)?w.length:0),b=f[m]++}else if(b==="__proto__")break;if(d===c.length-1)w[b]=u;else{var j=Object.getOwnPropertyDescriptor(w,b);j!=null&&(j=j.value),j==null&&(w[b]=j=g?[]:{}),w=j}}}return o},he=function(n){var l=n.indexOf("?"),f=n.indexOf("#"),o=f<0?n.length:f,y=l<0?o:l,h=n.slice(0,y).replace(/\/{2,}/g,"/");return h?(h[0]!=="/"&&(h="/"+h),h.length>1&&h[h.length-1]==="/"&&(h=h.slice(0,-1))):h="/",{path:h,params:l<0?{}:Be(n.slice(l+1,o))}},wt=function(n){var l=he(n),f=Object.keys(l.params),o=[],y=new RegExp("^"+l.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(h,m,u){return m==null?"\\"+h:(o.push({k:m,r:u==="..."}),u==="..."?"(.*)":u==="."?"([^/]+)\\.":"([^/]+)"+(u||""))})+"$");return function(h){for(var m=0;m<f.length;m++)if(l.params[f[m]]!==h.params[f[m]])return!1;if(!o.length)return y.test(h.path);var u=y.exec(h.path);if(u==null)return!1;for(var m=0;m<o.length;m++)h.params[o[m].k]=o[m].r?u[m+1]:decodeURIComponent(u[m+1]);return!0}},Pe={},dt=function(n,l){var f;function o(b,v,g){if(b=Le(b,v),f!=null){f();var j=g?g.state:null,x=g?g.title:null;g&&g.replace?n.history.replaceState(j,x,d.prefix+b):n.history.pushState(j,x,d.prefix+b)}else n.location.href=d.prefix+b}var y=Pe,h,m,u,c,w=d.SKIP={};function d(b,v,g){if(b==null)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var j=0,x=Object.keys(g).map(function(P){if(P[0]!=="/")throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(P))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:P,component:g[P],check:wt(P)}}),z=typeof setImmediate=="function"?setImmediate:setTimeout,N=De.resolve(),R=!1,G;if(f=null,v!=null){var X=he(v);if(!x.some(function(P){return P.check(X)}))throw new ReferenceError("Default route doesn't match any known routes")}function O(){R=!1;var P=n.location.hash;d.prefix[0]!=="#"&&(P=n.location.search+P,d.prefix[0]!=="?"&&(P=n.location.pathname+P,P[0]!=="/"&&(P="/"+P)));var F=P.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(d.prefix.length),Q=he(F);Ne(Q.params,n.history.state);function K(){if(F===v)throw new Error("Could not resolve default route "+v);o(v,null,{replace:!0})}Z(0);function Z(S){for(;S<x.length;S++)if(x[S].check(Q)){var J=x[S].component,le=x[S].route,V=J,Y=c=function(W){if(Y===c){if(W===w)return Z(S+1);h=W!=null&&(typeof W.view=="function"||typeof W=="function")?W:"div",m=Q.params,u=F,c=null,y=J.render?J:null,j===2?l.redraw():(j=2,l.redraw.sync())}};J.view||typeof J=="function"?(J={},Y(V)):J.onmatch?N.then(function(){return J.onmatch(Q.params,F,le)}).then(Y,K):Y("div");return}K()}}return f=function(){R||(R=!0,z(O))},typeof n.history.pushState=="function"?(G=function(){n.removeEventListener("popstate",f,!1)},n.addEventListener("popstate",f,!1)):d.prefix[0]==="#"&&(f=null,G=function(){n.removeEventListener("hashchange",O,!1)},n.addEventListener("hashchange",O,!1)),l.mount(b,{onbeforeupdate:function(){return j=j?2:1,!(!j||Pe===y)},oncreate:O,onremove:G,view:function(){if(!(!j||Pe===y)){var P=[B(h,m.key,m)];return y&&(P=y.render(P[0])),P}}})}return d.set=function(b,v,g){c!=null&&(g=g||{},g.replace=!0),c=null,o(b,v,g)},d.get=function(){return u},d.prefix="#!",d.Link={view:function(b){var v=b.attrs.options,g={},j,x;Ne(g,b.attrs),g.selector=g.options=g.key=g.oninit=g.oncreate=g.onbeforeupdate=g.onupdate=g.onbeforeremove=g.onremove=null;var z=oe(b.attrs.selector||"a",g,b.children);return(z.attrs.disabled=Boolean(z.attrs.disabled))?(z.attrs.href=null,z.attrs["aria-disabled"]="true",z.attrs.onclick=null):(j=z.attrs.onclick,x=z.attrs.href,z.attrs.href=d.prefix+x,z.attrs.onclick=function(N){var R;typeof j=="function"?R=j.call(N.currentTarget,N):j==null||typeof j!="object"||typeof j.handleEvent=="function"&&j.handleEvent(N),R!==!1&&!N.defaultPrevented&&(N.button===0||N.which===0||N.which===1)&&(!N.currentTarget.target||N.currentTarget.target==="_self")&&!N.ctrlKey&&!N.metaKey&&!N.shiftKey&&!N.altKey&&(N.preventDefault(),N.redraw=!1,d.set(x,null,v))}),z}},d.param=function(b){return m&&b!=null?m[b]:m},d},yt=dt(window,me),H=function(){return ue.apply(this,arguments)};H.m=ue;H.trust=ue.trust;H.fragment=ue.fragment;H.mount=me.mount;H.route=yt;H.render=He;H.redraw=me.redraw;H.request=Ue.request;H.jsonp=Ue.jsonp;H.parseQueryString=Be;H.buildQueryString=Me;H.parsePathname=he;H.buildPathname=Le;H.vnode=B;H.PromisePolyfill=ne;var bt=H,s=bt;var xt={view:n=>[s("nav",{class:"dt w-100  border-box center pa3 pb3-ns pb0 ph5-l"},[s("a",{class:"dtc v-mid mid-gray  tl mb1",href:"/",title:"Home"},[s("img",{class:"dib w4",src:"static/logo.png",alt:"small scale consulting"})]),s("div",{class:"dtc v-mid w-75 tr"},[s("a",{class:"f5-ns f6 inter fw7 link ph3 pv2 mb2 dib white",href:"https://calendly.com/keithporcaro/web-intro",style:"background-image:linear-gradient(to bottom right, #ff6666, #fe8c65)"},"Book a time")])]),s("article",{class:"pa3 pa5-ns pt3-ns pt0 mw8 center spvar fw4 near-black vh-100"},[s("section",{class:"f4-ns f5 lh-copy"},n.children)])]},ie=xt;var Ct={view:n=>[[s("section",{class:"lh-copy"},[s("p",{class:"spvar f3-ns f4"},["I'm Keith Porcaro. small scale consulting is my shingle for services work. With clients, I execute projects at the intersection of law, technology, and governance. Here's a few recent projects that were especially interesting."])])]]},Ke=Ct;var jt=[{title:"Red Team",href:"redteam",color:"#FFCACA",description:"Imagining scenarios where data governance initiatives go wrong.",icon:"static/square-wide-dumpster.png",partners:[{logo:"static/moz.png"}]},{title:"Data maturity quiz",color:"#FFE8CA",href:"lighthouse",description:"Helping labor unions assess their data readiness.",icon:"static/square-lighthouse.png",partners:[{logo:"static/prospect.png"},{logo:"static/whynotlab.webp",class:"pa1",style:"background-color:black"}]},{title:"Health networks",color:"#CAE2FF",href:"networks",description:"Better governance for pediatric health data collaborations.",icon:"static/square-clipboard.png",partners:[{logo:"static/childrens.png"}]},{title:"Legal referrals",color:"#E4CAFF",href:"referrals",description:"Peer-to-peer legal aid referrals for housing issues.",icon:"static/square-mailbox.png",partners:[{logo:"static/centrolegal-logo.png"},{logo:"static/baylegal.png"},{logo:"static/legallink.webp"}]}],kt={view:n=>[s("h1",{class:"mt3 mb0 f3 f2-ns fw7",style:`color:${n.attrs.color||"black"}`}),s("section",{class:"mw12 flex flex-wrap"},[jt.map(l=>s(vt,l))])]},vt={view:n=>s("div",{class:"br4 bn mv3 mr2 pa3 pt3 center",style:`background-color:${n.attrs.color}; width:26rem`},[s("div",{class:"dt flex items-center justify-between"},[s("div",{class:"dtc v-mid w-third mr3"},[s("a",{href:`#!/${n.attrs.href}`},[s("img",{class:"w-100",src:n.attrs.icon})])]),s("div",{class:"dtc v-mid flex-auto mr2"},[s("a",{href:`#!/${n.attrs.href}`,class:"mb2 black no-underline f3 lora fw4 lh-title"},n.attrs.title),s("div",{class:"f5 mt2"},[n.attrs.description])])])])};var Je=kt;var Tt={view:n=>[[s("section",{class:"mw7 center lh-copy"},[s("p",{class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Health networks"),s("div",{class:"dt"},[s("div",{class:"dtc v-mid"},[s("img",{class:"w3 mr3 pt4-ns pt3",src:"static/square-clipboard.png"})]),s("div",{class:"dtc v-mid"},[s("h2",{class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Health networks")])]),s("p",{class:"f4-ns inter f5"},["ImproveCareNow is a community of patients, parents, researchers, and clinicians focused on improving outcomes for children with Crohn's disease and IBD. I engaged with ICN and Cincinnati Children's Hospital to identify opportunities to modernize ImproveCareNow's governance."]),s("p",{class:"f4-ns inter f5"},["To conduct the engagement, I worked with stakeholders across the ICN community to understand the state of the network and the evolving needs of its membership. In particular, my work focused on how the network's governance could catch up with its growth."]),s("p",{class:"f4-ns inter f5"},["The resulting report included 27 recommendations, ranging from board composition to data review processes to the design of community platforms. ImproveCareNow hopes to use this work to develop resilient, community-led governance."]),s("a",{class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white",href:"https://d3n8a8pro7vhmx.cloudfront.net/improvecarenow/pages/5160/attachments/original/1594043919/ICN_Digital_Assets_Final.pdf?1594043919",style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"},"Read the report"),s("div",{class:"dt mt3"},[s("h2",{class:"db black no-underline f3-ns f4 inter i fw2 lh-title"},"Partners"),s("dt",{class:"ml2 "},[s("img",{class:"h2 v-mid dtc mr2",src:"static/childrens.png"}),s("img",{class:"h2 ml4 v-mid dtc pa2",src:"static/icn.png"})])])])]]},Se=Tt;var zt={view:n=>[[s("section",{class:"mw7 center lh-copy"},[s("p",{class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Lighthouse"),s("div",{class:"dt"},[s("div",{class:"dtc v-mid"},[s("img",{class:"w3 mr3 pt4-ns pt3",src:"static/square-lighthouse.png"})]),s("div",{class:"dtc v-mid"},[s("h2",{class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Data maturity quiz")])]),s("p",{class:"f4-ns inter f5"},["Lighthouse was a collaboration with Prospect and the Why Not Lab. We sought to empower unions to more confidently steward and govern data and technology projects, without drowning them in legalese."]),s("p",{class:"f4-ns inter f5"},["The result was a simple, engaging maturity quiz (with emoji). Unions can use Lighthouse to assess their own readiness for managing data projects, and find advice and resources to build their own capacity."]),s("p",{class:"f4-ns inter f5"},["The Lighthouse site is open-source and freely remixable. The quiz itself collects no data from the user. "]),s("a",{class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white",href:"https://lighthouse.prospect.org.uk/",style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"},"Visit Lighthouse"),s("div",{class:"dt mt3"},[s("h2",{class:"db black no-underline f3-ns f4 inter i fw2 lh-title"},"Partners"),s("dt",{class:"ml2 "},[s("img",{class:"h2 v-mid dtc mr2",src:"static/prospect.png"}),s("img",{class:"h2 ml4 v-mid dtc bg-black pa2",src:"static/whynotlab.webp"})])])])]]},We=zt;var Nt={view:n=>[[s("section",{class:"mw7 center lh-copy"},[s("p",{class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Red Team"),s("div",{class:"dt"},[s("div",{class:"dtc v-mid"},[s("img",{class:"w3 mr3 pt4-ns pt3",src:"static/square-wide-dumpster.png"})]),s("div",{class:"dtc v-mid"},[s("h2",{class:"mb0 black no-underline f1-ns f2 lora fw4 lh-title"},"Red Team")])]),s("p",{class:"f4-ns inter f5"},["In collaboration with the Mozilla Foundation Insights team, I produced a red team brief for Mozilla's forthcoming Data Futures Lab. The brief consisted of nearly two dozen miniature speculative narratives on how data stewardship initiatives could go awry."]),s("p",{class:"f4-ns inter f5"},["The brief was written to support Mozilla's strategic planning process as it prepared to launch the Data Futures Lab: a hub for convening and supporting power-shifting data governance initiatives."]),s("p",{class:"f4-ns inter f5"},["The report's goal was to help Mozilla leadership recognize where the field's imagined solutions might be incomplete, and who might bear the burden of an experiment's failure. "]),s("a",{class:"f5-ns f6 mt2 dim inter fw7 link ph3 pv2 mb2 dib white",href:"https://foundation.mozilla.org/en/initiatives/data-futures/what-could-go-wrong/",style:"background-image:linear-gradient(to bottom right, #6a66ff, #7a2cfe)"},"Read the report"),s("div",{class:"dt mt3"},[s("h2",{class:"db black no-underline f3-ns f4 inter fw2 lh-title"},"Partners"),s("img",{class:"h2 mr2",src:"static/moz.png"})])])]]},Qe=Nt;var Lt={view:n=>[[s("section",{class:"mw7 center lh-copy"},[s("p",{class:"mt4 mb3 black no-underline f5 lora fw4 lh-title"},"Past projects > Legal referrals"),s("div",{class:"dt"},[s("div",{class:"dtc w3 v-mid"},[s("img",{class:"w3 mr3 pt4-ns pt3",src:"static/square-mailbox.png"})]),s("div",{class:"dtc v-mid"},[s("h2",{class:"mb0 ml3 black no-underline f1-ns f2 lora fw4 lh-title"},"Legal referrals")])]),s("p",{class:"f4-ns inter f5"},["The Peer-to-Peer (P2P) Referral Network was a collaboration with Centro Legal de la Raza, Bay Area Legal Aid, Eviction Defence Center, East Bay Community law Center, Asian Pacific Islander Legal Outreach, Housing and Economic Rights Advocates, and Legal Link. The organizations collaborated to build an inter-organizational referral system for clients facing housing instability in Alameda County. I helped organize project, and steered the development of the referral system through its initial prototyping and deployment phase."]),s("p",{class:"f4-ns inter f5"},["Prior to the project, the participating organizations did not have a formal system of making referrals to one another. So, we built a habit of making referrals gradually, moving from email templates and shared Google Docs to web forms and eventually the host organization's own case management system."]),s("p",{class:"f4-ns inter f5"},["We built and launched a working referral system within 60 days, and continued to refine the system over a six-month period."]),s("div",{class:"dt mt3"},[s("h2",{class:"db black no-underline f3-ns f4 inter fw2 i lh-title"},"Partners"),s("dt",[s("img",{class:"h2 v-mid dtc mr4",src:"static/centrolegal-logo.png"}),s("img",{class:"h2 v-mid dtc pa2 mr4",src:"static/baylegal.png"}),s("img",{class:"h2 v-mid dtc pa2",src:"static/legallink.webp"})])])])]]},Ge=Lt;var Pt=[{src:"moz.png"},{src:"childrens.png"},{src:"prospect.png"},{src:"canada.svg"},{src:"centrolegal-logo.png"},{src:"legallink.webp"},{src:"ia.png"},{src:"whynotlab.webp",class:"pa1",style:"background-color: black"},{src:"liftdane.png"},{src:"hive.png"},{src:"bl.png"},{src:"improvecarenow.png"},{src:"cccfalong.png"}],Et={view:n=>[s("div",{class:"mw7 mt4 flex justify-around tc center flex-wrap mh3"},Pt.map(l=>{var f,o;return s("img",{class:`dtc ma3 ${(f=l.class)!=null?f:""}`,style:`height:2.5rem; ${(o=l.style)!=null?o:""}`,src:`static/${l.src}`})}))]},Xe=Et;s.route(document.body,"/",{"/":{onmatch:()=>{window.scrollTo(0,0)},render:()=>s(ie,{title:"",step:null,nextLink:null,nextCopy:null,prevLink:null,prevCopy:null},[s(Ke),s(Je),s(Xe)])},"/redteam":{onmatch:()=>{window.scrollTo(0,0)},render:()=>s(ie,{title:"",step:null,nextLink:null,nextCopy:null,prevLink:null,prevCopy:null},[s(Qe)])},"/lighthouse":{onmatch:()=>{window.scrollTo(0,0)},render:()=>s(ie,{title:"",step:null,nextLink:null,nextCopy:null,prevLink:null,prevCopy:null},[s(We)])},"/referrals":{onmatch:()=>{window.scrollTo(0,0)},render:()=>s(ie,{title:"",step:null,nextLink:null,nextCopy:null,prevLink:null,prevCopy:null},[s(Ge)])},"/networks":{onmatch:()=>{window.scrollTo(0,0)},render:()=>s(ie,{title:"",step:null,nextLink:null,nextCopy:null,prevLink:null,prevCopy:null},[s(Se)])}});