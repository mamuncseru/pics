(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(17),i=n.n(s),c=n(8),u=n.n(c),o=n(18),l=n(3),h=n(4),j=n(6),m=n(5),p=n(19),b=n.n(p).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID TQsvKDjR_Rds0r5taP943gJzaZPti7RFhgnHt6e5j1o"}}),f=(n(43),n(0)),d=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,n=e.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,alt:t,src:n.regular})})}}]),n}(r.a.Component),v=function(e){var t=e.images.map((function(e){return Object(f.jsx)(d,{image:e},e.id)}));return Object(f.jsx)("div",{className:"image-list",children:t})},O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("label",{children:"Image Search"})}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),n}(r.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:n}});case 2:a=t.sent,e.setState({images:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(f.jsx)(O,{onSubmit:this.onSearchSubmit}),Object(f.jsx)(v,{images:this.state.images})]})}}]),n}(r.a.Component);i.a.render(Object(f.jsx)(g,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.af4fbbb8.chunk.js.map