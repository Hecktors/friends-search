(this["webpackJsonpfriends-search"]=this["webpackJsonpfriends-search"]||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(9),c=t.n(i),o=t(8),s=t(10),l=t(16),u={searchField:""},d={friends:[],isPending:!1,error:""},h=(t(27),t(3)),f=t(4),m=t(6),p=t(5),E=t(7),b=function(e){function n(){return Object(h.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return a.a.createElement("h1",{className:"ma0 p0 pt4 f1 white"},"Find your Friend!")}}]),n}(r.Component),g=function(e){var n=e.searchField,t=e.searchChange;return a.a.createElement("div",{className:""},a.a.createElement("input",{"aria-label":"Search",className:"searchbox pa1 ba",type:"search",value:n,onChange:t,placeholder:"search friend"}))},v=function(e){e.id;var n=e.first,t=e.last,r=(e.email,e.pic),i=e.country,c=e.city;return a.a.createElement("article",{className:"card ma1 dib br3 pa1 pa3-ns ba b--black-10"},a.a.createElement("div",{className:"tc"},a.a.createElement("img",{src:r,className:"br-100 w4 dib ba b--black-05 pa1",alt:"friend"}),a.a.createElement("h3",{className:"f5 mb2"},n,a.a.createElement("br",null),t),a.a.createElement("p",{className:"fz-sm fw4 dark-gray mt0"},"".concat(c,", ").concat(i))))},y=function(e){var n=e.friends;return a.a.createElement("div",null,n.map((function(e){return a.a.createElement(v,{key:e.login.uuid,id:e.login.uuid,first:e.name.first,last:e.name.last,email:e.email,country:e.location.country,city:e.location.city,pic:e.picture.medium})})))},w=function(e){return a.a.createElement("div",{className:"scroll pt3",style:{overflowY:"scroll",border:"1px solid gray"}},e.children)},F=function(e){function n(){var e;return Object(h.a)(this,n),(e=Object(m.a)(this,Object(p.a)(n).call(this))).state={hasError:!1},e}return Object(E.a)(n,e),Object(f.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",{className:"red"},"Oooops... there's an error"):this.props.children}}]),n}(a.a.Component),j=(t(28),function(e){e({type:"GET_FRIENDS_PENDING"}),fetch("https://randomuser.me/api/?results=30").then((function(e){return e.json()})).then((function(n){return e({type:"GET_FRIENDS_SUCCESS",payload:n.results})})).catch((function(n){return e({type:"GET_FRIENDS_FAILED",payload:n})}))}),O=function(e){function n(){return Object(h.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.friends,r=e.isPending,i=e.setSearchField;if(r)return a.a.createElement("h1",null,"Loading...");var c=[];return t.length>0&&(c=t.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last," ").concat(e.email).toLowerCase().includes(n.toLowerCase())}))),a.a.createElement("div",{className:"App tc"},a.a.createElement("header",{className:"pb3"},a.a.createElement(b,null),a.a.createElement(g,{searchField:n,searchChange:i})),a.a.createElement(F,null,a.a.createElement(w,null,a.a.createElement(y,{friends:c}))))}}]),n}(a.a.Component),S=Object(s.b)((function(e){return{searchField:e.setSearchField.searchField,friends:e.requestFriends.friends,isPending:e.requestFriends.isPending,error:e.requestFriends.error}}),(function(e){return{setSearchField:function(n){return e({type:"SET_SEARCH_FIELD",payload:n.target.value})},requestFriends:e(j)}}))(O),N=(t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function k(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=Object(o.c)({setSearchField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(n.type){case"SET_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(n.type){case"GET_FRIENDS_PENDING":return Object.assign({},e,{isPending:!0});case"GET_FRIENDS_SUCCESS":return Object.assign({},e,{friends:n.payload,isPending:!1});case"GET_FRIENDS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),_=Object(o.d)(C,Object(o.a)(l.a));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/friends-search",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/friends-search","/service-worker.js");N?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.be93cdd7.chunk.js.map