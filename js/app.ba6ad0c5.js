(function(t){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function i(t){return a.p+"js/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"97c0df29",notfound:"c386cfe3",settings:"f4634f97"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100",attrs:{id:"app"}},[n("b-container",{staticClass:"h-100"},[n("b-row",{staticClass:"h-100"},[n("keep-alive",[n("router-view")],1)],1)],1),n("div",{staticClass:"d-flex justify-content-start fixed-bottom",attrs:{id:"nav"}},[n("circle-menu",{attrs:{type:"left",number:3,circle:"",btn:"",colors:["#F27141","#F2441D","#F29422","#734646"]}},[n("router-link",{attrs:{slot:"item_1",to:"/"},slot:"item_1"},[n("font-awesome-icon",{staticClass:"text-white",attrs:{size:"2x",icon:["fas","home"]}})],1),t._v(" | "),n("router-link",{attrs:{slot:"item_2",to:"/list"},slot:"item_2"},[n("font-awesome-icon",{staticClass:"text-white",attrs:{size:"2x",icon:["fas","list-ul"]}})],1),t._v(" | "),n("router-link",{attrs:{slot:"item_3",to:"/settings"},slot:"item_3"},[n("font-awesome-icon",{staticClass:"text-white",attrs:{size:"2x",icon:["fas","music"]}})],1),t._v(" | ")],1)],1)],1)},i=[],a=n("2877"),c={},l=Object(a["a"])(c,s,i,!1,null,"aecbb70c",null),u=l.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 h-100",attrs:{id:"home"}},[n("div",{staticClass:"h1 d-flex justify-content-center my-3"},[t._v("Pomodoro")]),n("b-container",{staticClass:"d-flex flex-column justify-content-center align-items-center h-75"},[n("b-row",{staticClass:"flex-column justify-content-center align-items-center"},[n("h1",[t._v(t._s(t.currentText))]),n("h2",[t._v(t._s(t.timetext))]),n("radial-progress-bar",{attrs:{diameter:300,"completed-steps":t.completedSteps,"total-steps":t.totalSteps,"start-color":t.startColor,"is-clockwise":t.isClockwise,"stop-color":t.stopColor}},["1"==t.status?n("img",{attrs:{src:"./img/01.gif",height:"170px",width:"350px"},on:{click:t.pause}}):"0"==t.status?n("img",{attrs:{src:"./img/休息.gif",height:"170px",width:"200px"}}):"2"==t.status?n("img",{attrs:{src:"./img/02.gif",height:"170px",width:"200px"}}):t._e()])],1),n("b-row",{staticClass:"justify-content-center align-items-center"},[1!=t.status?n("b-btn",{attrs:{variant:"link"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?n("b-btn",{attrs:{variant:"link"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0||t.todos.length>0?n("b-btn",{attrs:{variant:"link"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e()],1)],1)],1)},p=[],h=(n("99af"),{data:function(){return{status:0,timer:0,startColor:"#67EFFF",stopColor:"#C1D6FF",isClockwise:!1}},computed:{currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"點擊開始":"請新增待辦事項"},timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)},alarm:function(){return this.$store.getters.alarm},timeleft:function(){return this.$store.getters.timeleft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos},totalSteps:function(){return this.$store.getters.totaltimes},completedSteps:function(){return this.totalSteps-this.timeleft}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():alert("結束")},pause:function(){clearInterval(this.timer),this.status=2}}}),g=h,v=Object(a["a"])(g,m,p,!1,null,null,null),b=v.exports;o["default"].use(d["a"]);var w=[{path:"/",name:"Home",component:b,meta:{title:"番茄鐘"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"*",name:"NotFount",component:function(){return n.e("notfound").then(n.bind(null,"6c57"))},meta:{title:"番茄鐘 | 404"}}],k=new d["a"]({routes:w});k.afterEach((function(t,e){document.title=t.meta.title}));var y=k,x=(n("a434"),n("b0c0"),n("2f62")),_=n("0e44");o["default"].use(x["a"]);var C=parseInt("1500"),j=parseInt("300"),O=new x["a"].Store({state:{todos:[],timeleft:C,alarm:"alarm1.mp3",current:"",isBreak:!1},getters:{alarm:function(t){return t.alarm},todos:function(t){return t.todos},timeleft:function(t){return t.timeleft},current:function(t){return t.current},isBreak:function(t){return t.isBreak},totaltimes:function(t){return t.isBreak?j:C}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},dragTodo:function(t,e){t.todos=e},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},start:function(t){t.isBreak?t.current="休息一下":!t.isBreak&&t.todos.length>0&&(t.current=t.todos[0].name,t.todos.splice(0,1))},countdown:function(t){t.timeleft--},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.timeleft=t.isBreak?j:C}},actions:{},modules:{},plugins:[Object(_["a"])()]}),S=n("ecee"),T=n("ad3d"),$=n("c074"),B=n("310e"),F=n.n(B),P=n("531a"),E=n.n(P),A=(n("ecb2"),n("df2d"),n("3301")),M=n.n(A),I=n("a584");o["default"].use(I["a"],{config:{id:"UA-1234567-1"}}),o["default"].config.productionTip=!1,S["c"].add($["a"],$["f"],$["j"],$["k"],$["h"],$["g"],$["e"],$["i"],$["b"],$["d"],$["c"]),o["default"].component("font-awesome-icon",T["a"]),o["default"].component("draggable",F.a),o["default"].component("RadialProgressBar",E.a),o["default"].component("CircleMenu",M.a),new o["default"]({router:y,store:O,render:function(t){return t(u)}}).$mount("#app")},df2d:function(t,e,n){}});
//# sourceMappingURL=app.ba6ad0c5.js.map