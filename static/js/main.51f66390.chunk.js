(this.webpackJsonpmyhut=this.webpackJsonpmyhut||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(3),s=n.n(r),a=(n(12),n(4)),u=n(5),i=n(7),h=n(6),l=(n(13),n(14),n(0)),p=function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},j=(n(16),function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"computers",src:"https://robohash.org/".concat(e.IconComputers.id,"?set=set2&size=180x180")}),Object(l.jsxs)("h2",{children:[" ",e.IconComputers.name," "]}),Object(l.jsx)("p",{children:e.IconComputers.email})]})}),d=(n(17),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.IconComputers.map((function(e){return Object(l.jsx)(j,{IconComputers:e},e.id)}))})}),m=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchbox:t.target.value})},e.state={IconComputers:[],searchbox:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({IconComputers:t})}))}},{key:"render",value:function(){var e=this.state,t=e.IconComputers,n=e.searchbox,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Icon Computers"}),Object(l.jsx)(p,{placeholder:"Search Laptop",handleChange:this.handleChange}),Object(l.jsx)(d,{IconComputers:c})]})}}]),n}(o.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.51f66390.chunk.js.map