(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"1a33":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 overflow-auto",attrs:{id:"list"}},[r("div",[r("div",{staticClass:"h1 d-flex justify-content-center my-3"},[t._v("List")]),r("b-container",{staticClass:"form-inline fluid"},[r("b-form-input",{staticClass:"col-9",attrs:{type:t.type},model:{value:t.newtodo,callback:function(e){t.newtodo=e},expression:"newtodo"}}),r("b-btn",{staticClass:"col-3",attrs:{variant:"success"},on:{click:t.addTodo}},[t._v("新增")])],1),r("b-table-simple",{staticClass:"text-center mt-3",attrs:{striped:"","per-page":t.perPage,"current-page":t.currentPage}},[r("b-thead",[r("b-tr",[r("b-th",[t._v("事項")]),r("b-th",[t._v("動作")])],1)],1),r("draggable",t._b({attrs:{tag:"tbody"},model:{value:t.pagetodo,callback:function(e){t.pagetodo=e},expression:"pagetodo"}},"draggable",t.dragOption,!1),[0==t.todos.length?r("b-tr",[r("b-td",{attrs:{colspan:"2"}},[t._v("沒有資料")])],1):t._l(t.pagetodo,(function(e,n){return r("b-tr",{key:n},[r("b-td",[e.edit?r("b-form-input",{model:{value:e.model,callback:function(r){t.$set(e,"model",r)},expression:"todo.model"}}):t._e(),e.edit?r("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(e){return t.cancelTodo(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1):t._e(),e.edit?r("b-btn",{staticClass:"text-success",attrs:{variant:"link"},on:{click:function(e){return t.saveTodo(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","save"]}})],1):r("span",[t._v(t._s(e.name))])],1),r("b-td",[r("b-btn",{staticClass:"text-primary",attrs:{variant:"link"},on:{click:function(e){return t.editTodo(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),r("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(e){return t.delTodo(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}})],1)],1)],1)}))],2)],1)],1),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table",id:"pagination",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},o=[];r("99af"),r("fb6a"),r("a434");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("b0c0"),r("25f0");function s(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||c(t)||s(t)||u()}var l={data:function(){return{type:"search",perPage:5,currentPage:1,newtodo:"",dragOption:{animation:200}}},methods:{addTodo:function(){this.newtodo.length>0&&(this.$store.commit("addTodo",this.newtodo),this.newtodo="")},delTodo:function(t){this.$store.commit("delTodo",t)},editTodo:function(t){this.$store.commit("editTodo",t)},cancelTodo:function(t){this.$store.commit("cancelTodo",t)},saveTodo:function(t){this.$store.commit("saveTodo",t)}},computed:{pagetodo:{get:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.todos.slice(t,e)},set:function(t){var e;console.log(t);var r=(this.currentPage-1)*this.perPage;(e=this.todos).splice.apply(e,[r,this.perPage].concat(f(t)))}},todos:{get:function(){return this.$store.getters.todos},set:function(t){this.$store.commit("dragTodo",t)}},rows:function(){return this.$store.getters.todos.length}}},d=l,g=r("2877"),p=Object(g["a"])(d,n,o,!1,null,null,null);e["default"]=p.exports},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,g,p=o(t),b="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=u(p),S=0;if(y&&(h=n(h,v>2?arguments[2]:void 0,2)),void 0==m||b==Array&&a(m))for(e=c(p.length),r=new b(e);e>S;S++)g=y?h(p[S],S):p[S],s(r,S,g);else for(l=m.call(p),d=l.next,r=new b;!(f=d.call(l)).done;S++)g=y?i(l,h,[f.value,S],!0):f.value,s(r,S,g);return r.length=S,r}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),g=r("861d"),p=r("825a"),b=r("7b0b"),v=r("fc6a"),h=r("c04e"),y=r("5c6c"),m=r("7c73"),S=r("df75"),w=r("241c"),T=r("057f"),x=r("7418"),O=r("06cf"),P=r("9bf2"),L=r("d1e7"),A=r("9112"),C=r("6eeb"),k=r("5692"),j=r("f772"),E=r("d012"),$=r("90e3"),_=r("b622"),M=r("e538"),N=r("746f"),R=r("d44e"),I=r("69f3"),V=r("b727").forEach,D=j("hidden"),G="Symbol",F="prototype",H=_("toPrimitive"),J=I.set,q=I.getterFor(G),B=Object[F],Q=o.Symbol,U=i("JSON","stringify"),W=O.f,z=P.f,K=T.f,X=L.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=o.QObject,ot=!nt||!nt[F]||!nt[F].findChild,it=c&&f((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],z(t,e,r),n&&t!==B&&z(B,e,n)}:z,at=function(t,e){var r=Y[t]=m(Q[F]);return J(r,{type:G,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,r){t===B&&st(Z,e,r),p(t);var n=h(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,D)&&t[D][n]&&(t[D][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,D)||z(t,D,y(1,{})),t[D][n]=!0),it(t,n,r)):z(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=S(r).concat(pt(r));return V(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,D)&&this[D][e])||r)},dt=function(t,e){var r=v(t),n=h(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var o=W(r,n);return!o||!l(Y,n)||l(r,D)&&r[D][n]||(o.enumerable=!0),o}},gt=function(t){var e=K(v(t)),r=[];return V(e,(function(t){l(Y,t)||l(E,t)||r.push(t)})),r},pt=function(t){var e=t===B,r=K(e?Z:v(t)),n=[];return V(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),r=function(t){this===B&&r.call(Z,t),l(this,D)&&l(this[D],e)&&(this[D][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(B,e,{configurable:!0,set:r}),at(e,t)},C(Q[F],"toString",(function(){return q(this).tag})),C(Q,"withoutSetter",(function(t){return at($(t),t)})),L.f=lt,P.f=st,O.f=dt,w.f=T.f=gt,x.f=pt,M.f=function(t){return at(_(t),t)},c&&(z(Q[F],"description",{configurable:!0,get:function(){return q(this).description}}),a||C(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),V(S(rt),(function(t){N(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(b(t))}}),U){var bt=!s||f((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(g(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,U.apply(null,o)}})}Q[F][H]||A(Q[F],H,Q[F].valueOf),R(Q,G),E[D]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(g,p,b,v){for(var h,y,m=i(g),S=o(m),w=n(p,b,3),T=a(S.length),x=0,O=v||c,P=e?O(g,T):r?O(g,0):void 0;T>x;x++)if((d||x in S)&&(h=S[x],y=w(h,x,m),t))if(e)P[x]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return x;case 2:s.call(P,h)}else if(f)return!1;return l?-1:u||f?f:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),f=i.values;for(var l in o){var d=n[l],g=d&&d.prototype;if(g){if(g[s]!==f)try{a(g,s,f)}catch(b){g[s]=f}if(g[u]||a(g,u,l),o[l])for(var p in i)if(g[p]!==i[p])try{a(g,p,i[p])}catch(b){g[p]=i[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var g=d.prototype=f.prototype;g.constructor=d;var p=g.toString,b="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;s(g,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),g=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),v=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!g||!p},{slice:function(t,e){var r,n,f,l=s(this),d=c(l.length),g=a(t,d),p=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,g,p);for(n=new(void 0===r?Array:r)(h(p-g,0)),f=0;g<p;g++,f++)g in l&&u(n,f,l[g]);return n.length=f,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=list.46875933.js.map