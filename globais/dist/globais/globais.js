var k={1881:(i,d,l)=>{var s={"./Module":()=>l.e(175).then(()=>()=>l(3175))},b=(f,w)=>(l.R=w,w=l.o(s,f)?s[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),l.R=void 0,w),p=(f,w)=>{if(l.S){var c="default",y=l.S[c];if(y&&y!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[c]=f,l.I(c,w)}};l.d(d,{get:()=>b,init:()=>p})}},$={};function a(i){var d=$[i];if(void 0!==d)return d.exports;var l=$[i]={exports:{}};return k[i](l,l.exports,a),l.exports}a.m=k,a.c=$,a.d=(i,d)=>{for(var l in d)a.o(d,l)&&!a.o(i,l)&&Object.defineProperty(i,l,{enumerable:!0,get:d[l]})},a.f={},a.e=i=>Promise.all(Object.keys(a.f).reduce((d,l)=>(a.f[l](i,d),d),[])),a.u=i=>i+"."+{175:"3262cd26545d6cdf",181:"89c82ccb74f29a74",252:"ceaf91a1cac84b63",412:"0849e6ffc427eef9",471:"cb6db5accdc7e466",529:"f55b9d63f10d9f4d",571:"31876c829371dedf",895:"8bf808bee7951149"}[i]+".js",a.miniCssF=i=>{},a.o=(i,d)=>Object.prototype.hasOwnProperty.call(i,d),(()=>{var i={},d="globais:";a.l=(l,s,b,p)=>{if(i[l])i[l].push(s);else{var f,w;if(void 0!==b)for(var c=document.getElementsByTagName("script"),y=0;y<c.length;y++){var g=c[y];if(g.getAttribute("src")==l||g.getAttribute("data-webpack")==d+b){f=g;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.setAttribute("data-webpack",d+b),f.src=a.tu(l)),i[l]=[s];var m=(x,E)=>{f.onerror=f.onload=null,clearTimeout(C);var S=i[l];if(delete i[l],f.parentNode&&f.parentNode.removeChild(f),S&&S.forEach(h=>h(E)),x)return x(E)},C=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),a.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{a.S={};var i={},d={};a.I=(l,s)=>{s||(s=[]);var b=d[l];if(b||(b=d[l]={}),!(s.indexOf(b)>=0)){if(s.push(b),i[l])return i[l];a.o(a.S,l)||(a.S[l]={});var p=a.S[l],w="globais",c=(m,C,x,E)=>{var S=p[m]=p[m]||{},h=S[C];(!h||!h.loaded&&(!E!=!h.eager?E:w>h.from))&&(S[C]={get:x,from:w,eager:!!E})},g=[];return"default"===l&&(c("@angular/common/http","13.2.2",()=>a.e(471).then(()=>()=>a(529))),c("@angular/common","13.2.2",()=>a.e(895).then(()=>()=>a(6895))),c("@angular/core","13.2.2",()=>a.e(571).then(()=>()=>a(1571))),c("@angular/router","13.2.2",()=>a.e(412).then(()=>()=>a(4252)))),i[l]=g.length?Promise.all(g).then(()=>i[l]=1):1}}})(),(()=>{var i;a.tt=()=>(void 0===i&&(i={createScriptURL:d=>d},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),a.tu=i=>a.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=i})(),(()=>{var i=e=>{var t=o=>o.split(".").map(u=>+u==u?+u:u),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(v=e[o]))[0]?"-":(n>0?".":"")+(n=2,v);return r}var u=[];for(o=1;o<e.length;o++){var v=e[o];u.push(0===v?"not("+V()+")":1===v?"("+V()+" || "+V()+")":2===v?u.pop()+" "+u.pop():l(v))}return V();function V(){return u.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=i(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,u=1,v=!0;;u++,o++){var V,T,P=u<e.length?(typeof e[u])[0]:"";if(o>=t.length||"o"==(T=(typeof(V=t[o]))[0]))return!v||("u"==P?u>r&&!n:""==P!=n);if("u"==T){if(!v||"u"!=P)return!1}else if(v)if(P==T)if(u<=r){if(V!=e[u])return!1}else{if(n?V>e[u]:V<e[u])return!1;V!=e[u]&&(v=!1)}else if("s"!=P&&"n"!=P){if(n||u<=r)return!1;v=!1,u--}else{if(u<=r||T<P!=n)return!1;v=!1}else"s"!=P&&"n"!=P&&(v=!1,u--)}}var F=[],j=F.pop.bind(F);for(o=1;o<e.length;o++){var A=e[o];F.push(1==A?j()|j():2==A?j()&j():A?s(A,t):!j())}return!!j()},f=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,o)=>!n||!r[n].loaded&&((e,t)=>{e=i(e),t=i(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var u=t[r],v=(typeof u)[0];if(o!=v)return"o"==o&&"n"==v||"s"==v||"u"==o;if("o"!=o&&"u"!=o&&n!=u)return n<u;r++}})(n,o)?o:n,0)},g=(e,t,r,n)=>{var o=f(e,r);if(!s(n,o))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(n)+")")(e,r,o,n));return S(e[r][o])},S=e=>(e.loaded=1,e.get()),O=(e=>function(t,r,n,o){var u=a.I(t);return u&&u.then?u.then(e.bind(e,t,a.S[t],r,n,o)):e(t,a.S[t],r,n,o)})((e,t,r,n,o)=>t&&a.o(t,r)?g(t,0,r,n):o()),M={},z={5552:()=>O("default","@angular/common",[2,13,2,2],()=>a.e(181).then(()=>()=>a(6895))),6139:()=>O("default","@angular/core",[2,13,2,2],()=>a.e(571).then(()=>()=>a(1571))),6721:()=>O("default","@angular/router",[2,13,2,2],()=>a.e(252).then(()=>()=>a(4252))),5951:()=>O("default","@angular/common/http",[2,13,2,2],()=>a.e(529).then(()=>()=>a(529)))},L={175:[6721,6139,5552,5951],412:[5552,6139],471:[5552,6139],895:[6139]};a.f.consumes=(e,t)=>{a.o(L,e)&&L[e].forEach(r=>{if(a.o(M,r))return t.push(M[r]);var n=v=>{M[r]=0,a.m[r]=V=>{delete a.c[r],V.exports=v()}},o=v=>{delete M[r],a.m[r]=V=>{throw delete a.c[r],v}};try{var u=z[r]();u.then?t.push(M[r]=u.then(n).catch(o)):n(u)}catch(v){o(v)}})}})(),(()=>{var i={710:0};a.f.j=(s,b)=>{var p=a.o(i,s)?i[s]:void 0;if(0!==p)if(p)b.push(p[2]);else{var f=new Promise((g,m)=>p=i[s]=[g,m]);b.push(p[2]=f);var w=a.p+a.u(s),c=new Error;a.l(w,g=>{if(a.o(i,s)&&(0!==(p=i[s])&&(i[s]=void 0),p)){var m=g&&("load"===g.type?"missing":g.type),C=g&&g.target&&g.target.src;c.message="Loading chunk "+s+" failed.\n("+m+": "+C+")",c.name="ChunkLoadError",c.type=m,c.request=C,p[1](c)}},"chunk-"+s,s)}};var d=(s,b)=>{var c,y,[p,f,w]=b,g=0;if(p.some(C=>0!==i[C])){for(c in f)a.o(f,c)&&(a.m[c]=f[c]);w&&w(a)}for(s&&s(b);g<p.length;g++)a.o(i,y=p[g])&&i[y]&&i[y][0](),i[y]=0},l=self.webpackChunkglobais=self.webpackChunkglobais||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var U=a(1881),R=U.get,B=U.init;export{R as get,B as init};