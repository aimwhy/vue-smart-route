!function(i){function e(e){for(var t,r,n=e[0],a=e[1],u=e[2],o=0,s=[];o<n.length;o++)r=n[o],p[r]&&s.push(p[r][0]),p[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(i[t]=a[t]);for(f&&f(e);s.length;)s.shift()();return l.push.apply(l,u||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==p[u]&&(n=!1)}n&&(l.splice(t--,1),e=h(h.s=r[0]))}return e}var r={},m={1:0},p={1:0},l=[];function h(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(l){var e=[];m[l]?e.push(m[l]):0!==m[l]&&{0:1}[l]&&e.push(m[l]=new Promise(function(e,n){for(var t=({}[l]||l)+"."+{0:"31429154"}[l]+".css",a=h.p+t,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var o=(i=r[u]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===a))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){var i;if((o=(i=s[u]).getAttribute("data-href"))===t||o===a)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var t=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+l+" failed.\n("+t+")");r.request=t,delete m[l],c.parentNode.removeChild(c),n(r)},c.href=a,document.getElementsByTagName("head")[0].appendChild(c)}).then(function(){m[l]=0}));var t,r=p[l];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,t){r=p[l]=[e,t]});e.push(r[2]=n);var a,u=document.getElementsByTagName("head")[0],o=document.createElement("script");o.charset="utf-8",o.timeout=120,h.nc&&o.setAttribute("nonce",h.nc),o.src=h.p+""+({}[t=l]||t)+"."+{0:"31429154"}[t]+".js",a=function(e){o.onerror=o.onload=null,clearTimeout(s);var t=p[l];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+r+": "+n+")");a.type=r,a.request=n,t[1](a)}p[l]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:o})},12e4);o.onerror=o.onload=a,u.appendChild(o)}return Promise.all(e)},h.m=i,h.c=r,h.d=function(e,t,r){h.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},h.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(h.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(r,n,function(e){return t[e]}.bind(null,n));return r},h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,"a",t),t},h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h.p="./",h.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=n;l.push([9,2]),c()}({16:function(e,t,r){"use strict";var n=r(3);r.n(n).a},20:function(e,t,r){"use strict";r.r(t);var n=r(2),m=r.n(n),a=r(0),p=r.n(a),u=r(1),h=r.n(u),o=r(4),s=r(6),i={data:function(){return{query:"",routes:[]}}},c=(r(16),r(7)),l=Object(c.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"},{name:"smart-routes",rawName:"v-smart-routes",value:t.routes,expression:"routes"}],attrs:{placeholder:"search or run something...",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("nav",[t.routes.length?r("ul",t._l(t.routes,function(e){return r("li",{key:e.name+Math.random(),domProps:{innerHTML:t._s(e.title)},on:{click:e.handler}})})):r("div",[t._v("\n      ...\n    ")])]),t._v(" "),r("main",[r("router-view")],1)])},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("You can write "),r("b",[e._v("about")]),e._v(", "),r("b",[e._v("search: {query}")]),e._v(", "),r("b",[e._v("user {username}")]),e._v(", "),r("b",[e._v("user {id}")]),e._v(", "),r("b",[e._v("user {username} {id}")]),e._v(" or "),r("b",[e._v("a mail address and the subject")]),e._v(", also "),r("b",[e._v("async {query}")]),e._v(" will return an async response.")])}],!1,null,null,null);l.options.__file="App.vue";var f=l.exports,d=r(8),v=r.n(d);function y(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;if(Array.isArray(e))return e.reduce(function(e,t){var r=t.name,n=t.path,a=t.smart,u=t.children,o=void 0===u?[]:u;return e.push({name:r,path:n,smart:a,children:o,level:s}),o.length&&(e=e.concat(y(o,s+1))),e},[])}function b(e,t){var r=e.match(/(:[0-9a-z_\-]+)/gi);if(!r)return{query:t};var n=r.map(function(e){return e.slice(1).trim()}),a={query:{},params:{}};return Object.keys(t).forEach(function(e){a[n.includes(e)?"params":"query"][e]=t[e]}),a}function w(e,t,r,n,a){return m()({},e,{title:t.replace(/\*([^*]+)\*/g,"<mark>$1</mark>"),handler:function(){return r.handler(e,n,a)}})}function g(e,t){return _.apply(this,arguments)}function _(){return(_=h()(p.a.mark(function e(a,l){var t,r,n,u,o,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.$router.options.routes,n=y(r),u=n.filter(function(e){return e.smart}).map(function(e){return{name:e.name,path:e.path,smart:e.smart}}),o=u.map(function(){var t=h()(p.a.mark(function e(t){var o,s,i,c,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.name,s=t.path,(i=t.smart).matcher){e.next=3;break}throw new Error("Smart routes must have matchers!");case 3:return c=function(e){return l.$router.push(e)},i.handler||(i.handler=c),r=("function"==typeof i.matcher.search?i.matcher.search(l):i.matcher.search).map(function(e){return a.toString().match(e)}).filter(Boolean),e.next=8,Promise.all(r.map(function(){var t=h()(p.a.mark(function e(t){var r,n,a,u;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(r=t.groups?t.groups:t,n=m()({name:o,path:s},b(s,t.groups)),"function"==typeof i.matcher.routes)return e.next=7,i.matcher.routes(r,l);e.next=9;break;case 7:return a=e.sent,e.abrupt("return",a.map(function(e){return w(e,e.title,i,c,l)}));case 9:return u=i.matcher.title(r,l),e.abrupt("return",w(n,u,i,c,l));case 11:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()));case 8:return n=e.sent,e.abrupt("return",[].concat.apply([],n).filter(Boolean));case 10:case"end":return e.stop()}},e,this)}));return function(e){return t.apply(this,arguments)}}()),e.next=6,Promise.all(o);case 6:return s=e.sent,e.abrupt("return",(t=[]).concat.apply(t,v()(s)));case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var x={install:function(e){e.directive("smart-routes",{bind:function(e,r,t){var n,a=t.data.directives.filter(function(e){return"model"===e.name});if(!a.length)throw new Error("An input with v-smart-routes directive must have v-model.");t.context.$watch(a[0].expression,(n=h()(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,this);case 2:this[r.expression]=e.sent;case 3:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)}))}})}};o.a.use(s.a),o.a.use(x);var k,q=new s.a({mode:"hash",routes:[{name:"autocomplete",path:"/autocomplete",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/async\s(?<query>.*)/],routes:(k=h()(p.a.mark(function e(t){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.abrupt("return",new Promise(function(e){setTimeout(function(){e([{name:"viewUser",params:{username:r},title:"Go to user *fkadev*"},{name:"sendMail",query:{email:"x@y.com",subject:"hello!"},title:"Send automail"},{name:"goToUser",params:{id:3},title:"Go To user 2"}])},1e3)}));case 2:case"end":return e.stop()}},e,this)})),function(e){return k.apply(this,arguments)})}}},{name:"users",path:"/users",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/user/],title:function(){return"Go to users"}}},children:[{name:"newUser",path:"new",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/user/,/new\suser(\s+(?<name>.*))?/],title:function(e){var t=e.name;return t?"Create user with name *".concat(t,"*"):"Create new user"}}}},{name:"goToUser",path:"/user/:id",component:function(){return r.e(0).then(r.bind(null,23))}},{name:"viewUser",path:"view/:username",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/user\s*(?<id>\d+)/,/user\s*(?<username>[^\d\s]*)(\s(?<id>\d+))?/],title:function(e){var t=e.username,r=e.id;return!t&&r?"View user with ID *".concat(r,"*"):t&&r?"View user with username *".concat(t,"* and ID *").concat(r,"*"):t?"View user with username *".concat(t,"*"):"View all users"}},handler:function(e,t){e.params.username||!e.query.id?e.params.username||e.query.id?t(e):t({name:"users"}):t(m()({},e,{name:"goToUser"}))}}}]},{name:"home",path:"/",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/home/],title:function(){return"Go to homepage"}}}},{name:"about",path:"/about",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/about/],title:function(){return"About us"}}}},{name:"search",path:"/search",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/^(search|q)\:?\s+(?<query>.+)/i],title:function(e){var t=e.query;return"Search about *".concat(t,"*")}}}},{name:"sendMail",path:"/mail",component:function(){return r.e(0).then(r.bind(null,23))},smart:{matcher:{search:[/(?<email>[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)/i,/(?<email>[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)\s+(?<subject>\w+)/i],title:function(e){var t=e.email,r=e.subject;return r?"Send email to *".concat(t,"* with subject *").concat(r,"*"):"Send email to *".concat(t,"*")}}}}]});new o.a({el:"#app",router:q,render:function(e){return e(f)}})},3:function(e,t,r){},9:function(e,t,r){e.exports=r(20)}});
//# sourceMappingURL=main.743ef0ea.js.map