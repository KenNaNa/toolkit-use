/*!
 * toolkit-use v0.0.14
 * (c) 2023 ~ 至今 kennana
 * Released under the MIT License.
 */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||t||Function("return this")(),n={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=u,a=Function.prototype.call,f=c?a.bind(a):function(){return a.apply(a,arguments)},l={},s={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!s.call({1:2},1);l.f=v?function(t){var r=p(this,t);return!!r&&r.enumerable}:s;var g,y,d=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},b=u,h=Function.prototype,m=h.call,S=b&&h.bind.bind(m,m),x=b?S:function(t){return function(){return m.apply(t,arguments)}},O=x,w=O({}.toString),E=O("".slice),I=function(t){return E(w(t),8,-1)},j=o,A=I,N=Object,P=x("".split),_=j((function(){return!N("z").propertyIsEnumerable(0)}))?function(t){return"String"==A(t)?P(t,""):N(t)}:N,R=function(t){return null==t},T=R,F=TypeError,M=function(t){if(T(t))throw F("Can't call method on "+t);return t},C=_,$=M,k=function(t){return C($(t))},D="object"==typeof document&&document.all,L={all:D,IS_HTMLDDA:void 0===D&&void 0!==D},z=L.all,G=L.IS_HTMLDDA?function(t){return"function"==typeof t||t===z}:function(t){return"function"==typeof t},U=G,B=L.all,V=L.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:U(t)||t===B}:function(t){return"object"==typeof t?null!==t:U(t)},W=e,Y=G,K=function(t,r){return arguments.length<2?(e=W[t],Y(e)?e:void 0):W[t]&&W[t][r];var e},X=x({}.isPrototypeOf),H=e,q="undefined"!=typeof navigator&&String(navigator.userAgent)||"",J=H.process,Q=H.Deno,Z=J&&J.versions||Q&&Q.version,tt=Z&&Z.v8;tt&&(y=(g=tt.split("."))[0]>0&&g[0]<4?1:+(g[0]+g[1])),!y&&q&&(!(g=q.match(/Edge\/(\d+)/))||g[1]>=74)&&(g=q.match(/Chrome\/(\d+)/))&&(y=+g[1]);var rt=y,et=rt,nt=o,ot=e.String,it=!!Object.getOwnPropertySymbols&&!nt((function(){var t=Symbol();return!ot(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&et&&et<41})),ut=it&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ct=K,at=G,ft=X,lt=Object,st=ut?function(t){return"symbol"==typeof t}:function(t){var r=ct("Symbol");return at(r)&&ft(r.prototype,lt(t))},pt=String,vt=G,gt=function(t){try{return pt(t)}catch(t){return"Object"}},yt=TypeError,dt=function(t){if(vt(t))return t;throw yt(gt(t)+" is not a function")},bt=dt,ht=R,mt=function(t,r){var e=t[r];return ht(e)?void 0:bt(e)},St=f,xt=G,Ot=V,wt=TypeError,Et={exports:{}},It=e,jt=Object.defineProperty,At=function(t,r){try{jt(It,t,{value:r,configurable:!0,writable:!0})}catch(e){It[t]=r}return r},Nt=At,Pt="__core-js_shared__",_t=e[Pt]||Nt(Pt,{}),Rt=_t;(Et.exports=function(t,r){return Rt[t]||(Rt[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.31.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Tt=Et.exports,Ft=M,Mt=Object,Ct=function(t){return Mt(Ft(t))},$t=Ct,kt=x({}.hasOwnProperty),Dt=Object.hasOwn||function(t,r){return kt($t(t),r)},Lt=x,zt=0,Gt=Math.random(),Ut=Lt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ut(++zt+Gt,36)},Vt=Tt,Wt=Dt,Yt=Bt,Kt=it,Xt=ut,Ht=e.Symbol,qt=Vt("wks"),Jt=Xt?Ht.for||Ht:Ht&&Ht.withoutSetter||Yt,Qt=function(t){return Wt(qt,t)||(qt[t]=Kt&&Wt(Ht,t)?Ht[t]:Jt("Symbol."+t)),qt[t]},Zt=f,tr=V,rr=st,er=mt,nr=function(t,r){var e,n;if("string"===r&&xt(e=t.toString)&&!Ot(n=St(e,t)))return n;if(xt(e=t.valueOf)&&!Ot(n=St(e,t)))return n;if("string"!==r&&xt(e=t.toString)&&!Ot(n=St(e,t)))return n;throw wt("Can't convert object to primitive value")},or=TypeError,ir=Qt("toPrimitive"),ur=function(t,r){if(!tr(t)||rr(t))return t;var e,n=er(t,ir);if(n){if(void 0===r&&(r="default"),e=Zt(n,t,r),!tr(e)||rr(e))return e;throw or("Can't convert object to primitive value")}return void 0===r&&(r="number"),nr(t,r)},cr=ur,ar=st,fr=function(t){var r=cr(t,"string");return ar(r)?r:r+""},lr=V,sr=e.document,pr=lr(sr)&&lr(sr.createElement),vr=function(t){return pr?sr.createElement(t):{}},gr=vr,yr=!i&&!o((function(){return 7!=Object.defineProperty(gr("div"),"a",{get:function(){return 7}}).a})),dr=i,br=f,hr=l,mr=d,Sr=k,xr=fr,Or=Dt,wr=yr,Er=Object.getOwnPropertyDescriptor;n.f=dr?Er:function(t,r){if(t=Sr(t),r=xr(r),wr)try{return Er(t,r)}catch(t){}if(Or(t,r))return mr(!br(hr.f,t,r),t[r])};var Ir={},jr=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ar=V,Nr=String,Pr=TypeError,_r=function(t){if(Ar(t))return t;throw Pr(Nr(t)+" is not an object")},Rr=i,Tr=yr,Fr=jr,Mr=_r,Cr=fr,$r=TypeError,kr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Lr="enumerable",zr="configurable",Gr="writable";Ir.f=Rr?Fr?function(t,r,e){if(Mr(t),r=Cr(r),Mr(e),"function"==typeof t&&"prototype"===r&&"value"in e&&Gr in e&&!e[Gr]){var n=Dr(t,r);n&&n[Gr]&&(t[r]=e.value,e={configurable:zr in e?e[zr]:n[zr],enumerable:Lr in e?e[Lr]:n[Lr],writable:!1})}return kr(t,r,e)}:kr:function(t,r,e){if(Mr(t),r=Cr(r),Mr(e),Tr)try{return kr(t,r,e)}catch(t){}if("get"in e||"set"in e)throw $r("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var Ur=Ir,Br=d,Vr=i?function(t,r,e){return Ur.f(t,r,Br(1,e))}:function(t,r,e){return t[r]=e,t},Wr={exports:{}},Yr=i,Kr=Dt,Xr=Function.prototype,Hr=Yr&&Object.getOwnPropertyDescriptor,qr=Kr(Xr,"name"),Jr={EXISTS:qr,PROPER:qr&&"something"===function(){}.name,CONFIGURABLE:qr&&(!Yr||Yr&&Hr(Xr,"name").configurable)},Qr=G,Zr=_t,te=x(Function.toString);Qr(Zr.inspectSource)||(Zr.inspectSource=function(t){return te(t)});var re,ee,ne,oe=Zr.inspectSource,ie=G,ue=e.WeakMap,ce=ie(ue)&&/native code/.test(String(ue)),ae=Bt,fe=Tt("keys"),le=function(t){return fe[t]||(fe[t]=ae(t))},se={},pe=ce,ve=e,ge=V,ye=Vr,de=Dt,be=_t,he=le,me=se,Se="Object already initialized",xe=ve.TypeError,Oe=ve.WeakMap;if(pe||be.state){var we=be.state||(be.state=new Oe);we.get=we.get,we.has=we.has,we.set=we.set,re=function(t,r){if(we.has(t))throw xe(Se);return r.facade=t,we.set(t,r),r},ee=function(t){return we.get(t)||{}},ne=function(t){return we.has(t)}}else{var Ee=he("state");me[Ee]=!0,re=function(t,r){if(de(t,Ee))throw xe(Se);return r.facade=t,ye(t,Ee,r),r},ee=function(t){return de(t,Ee)?t[Ee]:{}},ne=function(t){return de(t,Ee)}}var Ie={set:re,get:ee,has:ne,enforce:function(t){return ne(t)?ee(t):re(t,{})},getterFor:function(t){return function(r){var e;if(!ge(r)||(e=ee(r)).type!==t)throw xe("Incompatible receiver, "+t+" required");return e}}},je=x,Ae=o,Ne=G,Pe=Dt,_e=i,Re=Jr.CONFIGURABLE,Te=oe,Fe=Ie.enforce,Me=Ie.get,Ce=String,$e=Object.defineProperty,ke=je("".slice),De=je("".replace),Le=je([].join),ze=_e&&!Ae((function(){return 8!==$e((function(){}),"length",{value:8}).length})),Ge=String(String).split("String"),Ue=Wr.exports=function(t,r,e){"Symbol("===ke(Ce(r),0,7)&&(r="["+De(Ce(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!Pe(t,"name")||Re&&t.name!==r)&&(_e?$e(t,"name",{value:r,configurable:!0}):t.name=r),ze&&e&&Pe(e,"arity")&&t.length!==e.arity&&$e(t,"length",{value:e.arity});try{e&&Pe(e,"constructor")&&e.constructor?_e&&$e(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=Fe(t);return Pe(n,"source")||(n.source=Le(Ge,"string"==typeof r?r:"")),t};Function.prototype.toString=Ue((function(){return Ne(this)&&Me(this).source||Te(this)}),"toString");var Be=Wr.exports,Ve=G,We=Ir,Ye=Be,Ke=At,Xe=function(t,r,e,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:r;if(Ve(e)&&Ye(e,i,n),n.global)o?t[r]=e:Ke(r,e);else{try{n.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=e:We.f(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},He={},qe=Math.ceil,Je=Math.floor,Qe=Math.trunc||function(t){var r=+t;return(r>0?Je:qe)(r)},Ze=function(t){var r=+t;return r!=r||0===r?0:Qe(r)},tn=Ze,rn=Math.max,en=Math.min,nn=function(t,r){var e=tn(t);return e<0?rn(e+r,0):en(e,r)},on=Ze,un=Math.min,cn=function(t){return t>0?un(on(t),9007199254740991):0},an=cn,fn=function(t){return an(t.length)},ln=k,sn=nn,pn=fn,vn=function(t){return function(r,e,n){var o,i=ln(r),u=pn(i),c=sn(n,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},gn={includes:vn(!0),indexOf:vn(!1)},yn=Dt,dn=k,bn=gn.indexOf,hn=se,mn=x([].push),Sn=function(t,r){var e,n=dn(t),o=0,i=[];for(e in n)!yn(hn,e)&&yn(n,e)&&mn(i,e);for(;r.length>o;)yn(n,e=r[o++])&&(~bn(i,e)||mn(i,e));return i},xn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],On=Sn,wn=xn.concat("length","prototype");He.f=Object.getOwnPropertyNames||function(t){return On(t,wn)};var En={};En.f=Object.getOwnPropertySymbols;var In=K,jn=He,An=En,Nn=_r,Pn=x([].concat),_n=In("Reflect","ownKeys")||function(t){var r=jn.f(Nn(t)),e=An.f;return e?Pn(r,e(t)):r},Rn=Dt,Tn=_n,Fn=n,Mn=Ir,Cn=o,$n=G,kn=/#|\.prototype\./,Dn=function(t,r){var e=zn[Ln(t)];return e==Un||e!=Gn&&($n(r)?Cn(r):!!r)},Ln=Dn.normalize=function(t){return String(t).replace(kn,".").toLowerCase()},zn=Dn.data={},Gn=Dn.NATIVE="N",Un=Dn.POLYFILL="P",Bn=Dn,Vn=e,Wn=n.f,Yn=Vr,Kn=Xe,Xn=At,Hn=function(t,r,e){for(var n=Tn(r),o=Mn.f,i=Fn.f,u=0;u<n.length;u++){var c=n[u];Rn(t,c)||e&&Rn(e,c)||o(t,c,i(r,c))}},qn=Bn,Jn=function(t,r){var e,n,o,i,u,c=t.target,a=t.global,f=t.stat;if(e=a?Vn:f?Vn[c]||Xn(c,{}):(Vn[c]||{}).prototype)for(n in r){if(i=r[n],o=t.dontCallGetSet?(u=Wn(e,n))&&u.value:e[n],!qn(a?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Hn(i,o)}(t.sham||o&&o.sham)&&Yn(i,"sham",!0),Kn(e,n,i,t)}},Qn=e,Zn=x,to=dt,ro=G,eo=String,no=TypeError,oo=function(t,r,e){try{return Zn(to(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}},io=_r,uo=function(t){if("object"==typeof t||ro(t))return t;throw no("Can't set "+eo(t)+" as a prototype")},co=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=oo(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return io(e),uo(n),r?t(e,n):e.__proto__=n,e}}():void 0),ao=G,fo=V,lo=co,so=x(1..valueOf),po={};po[Qt("toStringTag")]="z";var vo="[object z]"===String(po),go=vo,yo=G,bo=I,ho=Qt("toStringTag"),mo=Object,So="Arguments"==bo(function(){return arguments}()),xo=go?bo:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=mo(t),ho))?e:So?bo(r):"Object"==(n=bo(r))&&yo(r.callee)?"Arguments":n},Oo=xo,wo=String,Eo=function(t){if("Symbol"===Oo(t))throw TypeError("Cannot convert a Symbol value to a string");return wo(t)},Io=M,jo=Eo,Ao="\t\n\v\f\r                　\u2028\u2029\ufeff",No=x("".replace),Po=RegExp("^["+Ao+"]+"),_o=RegExp("(^|[^"+Ao+"])["+Ao+"]+$"),Ro=function(t){return function(r){var e=jo(Io(r));return 1&t&&(e=No(e,Po,"")),2&t&&(e=No(e,_o,"$1")),e}},To={start:Ro(1),end:Ro(2),trim:Ro(3)},Fo=Jn,Mo=i,Co=e,$o=Qn,ko=x,Do=Bn,Lo=Dt,zo=function(t,r,e){var n,o;return lo&&ao(n=r.constructor)&&n!==e&&fo(o=n.prototype)&&o!==e.prototype&&lo(t,o),t},Go=X,Uo=st,Bo=ur,Vo=o,Wo=He.f,Yo=n.f,Ko=Ir.f,Xo=so,Ho=To.trim,qo="Number",Jo=Co[qo];$o[qo];var Qo=Jo.prototype,Zo=Co.TypeError,ti=ko("".slice),ri=ko("".charCodeAt),ei=function(t){var r,e,n,o,i,u,c,a,f=Bo(t,"number");if(Uo(f))throw Zo("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=Ho(f),43===(r=ri(f,0))||45===r){if(88===(e=ri(f,2))||120===e)return NaN}else if(48===r){switch(ri(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(u=(i=ti(f,2)).length,c=0;c<u;c++)if((a=ri(i,c))<48||a>o)return NaN;return parseInt(i,n)}return+f},ni=Do(qo,!Jo(" 0o1")||!Jo("0b1")||Jo("+0x1")),oi=function(t){var r,e=arguments.length<1?0:Jo(function(t){var r=Bo(t,"number");return"bigint"==typeof r?r:ei(r)}(t));return Go(Qo,r=this)&&Vo((function(){Xo(r)}))?zo(Object(e),this,oi):e};oi.prototype=Qo,ni&&(Qo.constructor=oi),Fo({global:!0,constructor:!0,wrap:!0,forced:ni},{Number:oi});ni&&function(t,r){for(var e,n=Mo?Wo(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;n.length>o;o++)Lo(r,e=n[o])&&!Lo(t,e)&&Ko(t,e,Yo(r,e))}($o[qo],Jo);var ii=xo,ui=vo?{}.toString:function(){return"[object "+ii(this)+"]"};vo||Xe(Object.prototype,"toString",ui,{unsafe:!0});var ci=_r,ai=function(){var t=ci(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r},fi=f,li=Dt,si=X,pi=ai,vi=RegExp.prototype,gi=Jr.PROPER,yi=Xe,di=_r,bi=Eo,hi=o,mi=function(t){var r=t.flags;return void 0!==r||"flags"in vi||li(t,"flags")||!si(vi,t)?r:fi(pi,t)},Si="toString",xi=RegExp.prototype[Si],Oi=hi((function(){return"/a/b"!=xi.call({source:"a",flags:"b"})})),wi=gi&&xi.name!=Si;(Oi||wi)&&yi(RegExp.prototype,Si,(function(){var t=di(this);return"/"+bi(t.source)+"/"+bi(mi(t))}),{unsafe:!0});var Ei=I,Ii=Array.isArray||function(t){return"Array"==Ei(t)},ji=x,Ai=o,Ni=G,Pi=xo,_i=oe,Ri=function(){},Ti=[],Fi=K("Reflect","construct"),Mi=/^\s*(?:class|function)\b/,Ci=ji(Mi.exec),$i=!Mi.exec(Ri),ki=function(t){if(!Ni(t))return!1;try{return Fi(Ri,Ti,t),!0}catch(t){return!1}},Di=function(t){if(!Ni(t))return!1;switch(Pi(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return $i||!!Ci(Mi,_i(t))}catch(t){return!0}};Di.sham=!0;var Li=!Fi||Ai((function(){var t;return ki(ki.call)||!ki(Object)||!ki((function(){t=!0}))||t}))?Di:ki,zi=fr,Gi=Ir,Ui=d,Bi=o,Vi=rt,Wi=Qt("species"),Yi=x([].slice),Ki=Jn,Xi=Ii,Hi=Li,qi=V,Ji=nn,Qi=fn,Zi=k,tu=function(t,r,e){var n=zi(r);n in t?Gi.f(t,n,Ui(0,e)):t[n]=e},ru=Qt,eu=Yi,nu=function(t){return Vi>=51||!Bi((function(){var r=[];return(r.constructor={})[Wi]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}("slice"),ou=ru("species"),iu=Array,uu=Math.max;Ki({target:"Array",proto:!0,forced:!nu},{slice:function(t,r){var e,n,o,i=Zi(this),u=Qi(i),c=Ji(t,u),a=Ji(void 0===r?u:r,u);if(Xi(i)&&(e=i.constructor,(Hi(e)&&(e===iu||Xi(e.prototype))||qi(e)&&null===(e=e[ou]))&&(e=void 0),e===iu||void 0===e))return eu(i,c,a);for(n=new(void 0===e?iu:e)(uu(a-c,0)),o=0;c<a;c++,o++)c in i&&tu(n,o,i[c]);return n.length=o,n}});var cu=o,au=e.RegExp,fu=cu((function(){var t=au("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),lu=fu||cu((function(){return!au("a","y").sticky})),su={BROKEN_CARET:fu||cu((function(){var t=au("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:lu,UNSUPPORTED_Y:fu},pu={},vu=Sn,gu=xn,yu=Object.keys||function(t){return vu(t,gu)},du=i,bu=jr,hu=Ir,mu=_r,Su=k,xu=yu;pu.f=du&&!bu?Object.defineProperties:function(t,r){mu(t);for(var e,n=Su(r),o=xu(r),i=o.length,u=0;i>u;)hu.f(t,e=o[u++],n[e]);return t};var Ou,wu=K("document","documentElement"),Eu=_r,Iu=pu,ju=xn,Au=se,Nu=wu,Pu=vr,_u="prototype",Ru="script",Tu=le("IE_PROTO"),Fu=function(){},Mu=function(t){return"<"+Ru+">"+t+"</"+Ru+">"},Cu=function(t){t.write(Mu("")),t.close();var r=t.parentWindow.Object;return t=null,r},$u=function(){try{Ou=new ActiveXObject("htmlfile")}catch(t){}var t,r,e;$u="undefined"!=typeof document?document.domain&&Ou?Cu(Ou):(r=Pu("iframe"),e="java"+Ru+":",r.style.display="none",Nu.appendChild(r),r.src=String(e),(t=r.contentWindow.document).open(),t.write(Mu("document.F=Object")),t.close(),t.F):Cu(Ou);for(var n=ju.length;n--;)delete $u[_u][ju[n]];return $u()};Au[Tu]=!0;var ku,Du,Lu=Object.create||function(t,r){var e;return null!==t?(Fu[_u]=Eu(t),e=new Fu,Fu[_u]=null,e[Tu]=t):e=$u(),void 0===r?e:Iu.f(e,r)},zu=o,Gu=e.RegExp,Uu=zu((function(){var t=Gu(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Bu=o,Vu=e.RegExp,Wu=Bu((function(){var t=Vu("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Yu=f,Ku=x,Xu=Eo,Hu=ai,qu=su,Ju=Lu,Qu=Ie.get,Zu=Uu,tc=Wu,rc=Tt("native-string-replace",String.prototype.replace),ec=RegExp.prototype.exec,nc=ec,oc=Ku("".charAt),ic=Ku("".indexOf),uc=Ku("".replace),cc=Ku("".slice),ac=(Du=/b*/g,Yu(ec,ku=/a/,"a"),Yu(ec,Du,"a"),0!==ku.lastIndex||0!==Du.lastIndex),fc=qu.BROKEN_CARET,lc=void 0!==/()??/.exec("")[1];(ac||lc||fc||Zu||tc)&&(nc=function(t){var r,e,n,o,i,u,c,a=this,f=Qu(a),l=Xu(t),s=f.raw;if(s)return s.lastIndex=a.lastIndex,r=Yu(nc,s,l),a.lastIndex=s.lastIndex,r;var p=f.groups,v=fc&&a.sticky,g=Yu(Hu,a),y=a.source,d=0,b=l;if(v&&(g=uc(g,"y",""),-1===ic(g,"g")&&(g+="g"),b=cc(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==oc(l,a.lastIndex-1))&&(y="(?: "+y+")",b=" "+b,d++),e=new RegExp("^(?:"+y+")",g)),lc&&(e=new RegExp("^"+y+"$(?!\\s)",g)),ac&&(n=a.lastIndex),o=Yu(ec,v?e:a,b),v?o?(o.input=cc(o.input,d),o[0]=cc(o[0],d),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:ac&&o&&(a.lastIndex=a.global?o.index+o[0].length:n),lc&&o&&o.length>1&&Yu(rc,o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=Ju(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var sc=nc;Jn({target:"RegExp",proto:!0,forced:/./.exec!==sc},{exec:sc});var pc=u,vc=Function.prototype,gc=vc.apply,yc=vc.call,dc="object"==typeof Reflect&&Reflect.apply||(pc?yc.bind(gc):function(){return yc.apply(gc,arguments)}),bc=I,hc=x,mc=function(t){if("Function"===bc(t))return hc(t)},Sc=Xe,xc=sc,Oc=o,wc=Qt,Ec=Vr,Ic=wc("species"),jc=RegExp.prototype,Ac=x,Nc=Ze,Pc=Eo,_c=M,Rc=Ac("".charAt),Tc=Ac("".charCodeAt),Fc=Ac("".slice),Mc=function(t){return function(r,e){var n,o,i=Pc(_c(r)),u=Nc(e),c=i.length;return u<0||u>=c?t?"":void 0:(n=Tc(i,u))<55296||n>56319||u+1===c||(o=Tc(i,u+1))<56320||o>57343?t?Rc(i,u):n:t?Fc(i,u,u+2):o-56320+(n-55296<<10)+65536}},Cc={codeAt:Mc(!1),charAt:Mc(!0)}.charAt,$c=x,kc=Ct,Dc=Math.floor,Lc=$c("".charAt),zc=$c("".replace),Gc=$c("".slice),Uc=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Bc=/\$([$&'`]|\d{1,2})/g,Vc=f,Wc=_r,Yc=G,Kc=I,Xc=sc,Hc=TypeError,qc=dc,Jc=f,Qc=x,Zc=function(t,r,e,n){var o=wc(t),i=!Oc((function(){var r={};return r[o]=function(){return 7},7!=""[t](r)})),u=i&&!Oc((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Ic]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r}));if(!i||!u||e){var c=mc(/./[o]),a=r(o,""[t],(function(t,r,e,n,o){var u=mc(t),a=r.exec;return a===xc||a===jc.exec?i&&!o?{done:!0,value:c(r,e,n)}:{done:!0,value:u(e,r,n)}:{done:!1}}));Sc(String.prototype,t,a[0]),Sc(jc,o,a[1])}n&&Ec(jc[o],"sham",!0)},ta=o,ra=_r,ea=G,na=R,oa=Ze,ia=cn,ua=Eo,ca=M,aa=function(t,r,e){return r+(e?Cc(t,r).length:1)},fa=mt,la=function(t,r,e,n,o,i){var u=e+t.length,c=n.length,a=Bc;return void 0!==o&&(o=kc(o),a=Uc),zc(i,a,(function(i,a){var f;switch(Lc(a,0)){case"$":return"$";case"&":return t;case"`":return Gc(r,0,e);case"'":return Gc(r,u);case"<":f=o[Gc(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>c){var s=Dc(l/10);return 0===s?i:s<=c?void 0===n[s-1]?Lc(a,1):n[s-1]+Lc(a,1):i}f=n[l-1]}return void 0===f?"":f}))},sa=function(t,r){var e=t.exec;if(Yc(e)){var n=Vc(e,t,r);return null!==n&&Wc(n),n}if("RegExp"===Kc(t))return Vc(Xc,t,r);throw Hc("RegExp#exec called on incompatible receiver")},pa=Qt("replace"),va=Math.max,ga=Math.min,ya=Qc([].concat),da=Qc([].push),ba=Qc("".indexOf),ha=Qc("".slice),ma="$0"==="a".replace(/./,"$0"),Sa=!!/./[pa]&&""===/./[pa]("a","$0");Zc("replace",(function(t,r,e){var n=Sa?"$":"$0";return[function(t,e){var n=ca(this),o=na(t)?void 0:fa(t,pa);return o?Jc(o,t,n,e):Jc(r,ua(n),t,e)},function(t,o){var i=ra(this),u=ua(t);if("string"==typeof o&&-1===ba(o,n)&&-1===ba(o,"$<")){var c=e(r,i,u,o);if(c.done)return c.value}var a=ea(o);a||(o=ua(o));var f=i.global;if(f){var l=i.unicode;i.lastIndex=0}for(var s=[];;){var p=sa(i,u);if(null===p)break;if(da(s,p),!f)break;""===ua(p[0])&&(i.lastIndex=aa(u,ia(i.lastIndex),l))}for(var v,g="",y=0,d=0;d<s.length;d++){for(var b=ua((p=s[d])[0]),h=va(ga(oa(p.index),u.length),0),m=[],S=1;S<p.length;S++)da(m,void 0===(v=p[S])?v:String(v));var x=p.groups;if(a){var O=ya([b],m,h,u);void 0!==x&&da(O,x);var w=ua(qc(o,void 0,O))}else w=la(b,u,h,m,x,o);h>=y&&(g+=ha(u,y,h)+w,y=h+b.length)}return g+ha(u,y)}]}),!!ta((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!ma||Sa);var xa=function(t,r){var e=0,n=Number(t);if(!isNaN(n)){var o=n.toString().split(".");if(o.length>1&&o[1].length>r)"5"===o[1].slice(r,r+1)&&(n+=Math.pow(.1,r+1)),e=n.toFixed(r);else e=n;e=Number(e)}return e};function Oa(t,r){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=xa(Number(100*t),r).toString();return e&&(n+="%"),n}var wa=function(t,r){var e=t.replace("%",""),n=Number(e)/100;return xa(n,r)};export{Oa as toPercent,wa as toPoint,xa as transformDecimal};
