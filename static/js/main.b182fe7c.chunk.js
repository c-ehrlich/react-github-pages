(this["webpackJsonpstarting-react"]=this["webpackJsonpstarting-react"]||[]).push([[0],{33:function(e,n,t){},34:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(10),a=t.n(c),s=t(56),o=(t(33),t(13)),u=(t(34),t(14)),j=t(3),d=t.n(j),l=(d.a.shape({id:d.a.string.isRequired,name:d.a.shape({english:d.a.string.isRequired,japanese:d.a.string.isRequired,chinese:d.a.string.isRequired,french:d.a.string.isRequired}),type:d.a.arrayOf(d.a.string.isRequired),base:d.a.shape({HP:d.a.number.isRequired,Attack:d.a.number.isRequired,Defense:d.a.number.isRequired,"Sp. Attack":d.a.number.isRequired,"Sp. Defense":d.a.number.isRequired,Speed:d.a.number.isRequired})}),t(7)),b=t(23),f=t.n(b)()((function(e){return{pokemon:[],setPokemon:function(n){return e((function(e){return Object(l.a)(Object(l.a)({},e),{},{pokemon:n})}))},filter:"",setFilter:function(n){return e((function(e){return Object(l.a)(Object(l.a)({},e),{},{filter:n})}))},selectedPokemon:null,setSelectedPokemon:function(n){return e((function(e){return Object(l.a)(Object(l.a)({},e),{},{selectedPokemon:n})}))}}}));fetch("/react-github-pages/pokemon.json").then((function(e){return e.json()})).then((function(e){f.setState((function(n){return Object(l.a)(Object(l.a)({},n),{},{pokemon:e})}))}));var h,O,m,p,g=f,x=t(2),k=function(){var e=g((function(e){return e.selectedPokemon}));return e?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:e.name.english}),Object(x.jsx)("table",{children:Object(x.jsx)("tbody",{children:Object.keys(e.base).map((function(n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:n}),Object(x.jsx)("td",{children:e.base[n]})]},n)}))})})]}):null},v=u.a.input(h||(h=Object(o.a)(["\n  width: 100%;\n  font-size: x-large;\n  padding: 0.2rem;\n"]))),q=function(){var e=g((function(e){return e.filter})),n=g((function(e){return e.setFilter}));return Object(x.jsx)(v,{type:"text",value:e,onChange:function(e){return n(e.target.value)}})},R=t(57),y=function(e){var n=e.pokemon,t=e.onClick;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:n.name.english}),Object(x.jsx)("td",{children:n.type.join(", ")}),Object(x.jsx)("td",{children:Object(x.jsx)(R.a,{variant:"contained",color:"primary",onClick:function(){return t(n)},children:"More Information"})})]},n.id)})},P=function(){var e=g((function(e){return e.pokemon})),n=g((function(e){return e.filter})),t=g((function(e){return e.setSelectedPokemon}));return Object(x.jsx)("table",{width:"100%",children:Object(x.jsx)("tbody",{children:e.filter((function(e){return e.name.english.toLocaleLowerCase().includes(n.toLocaleLowerCase())})).slice(0,20).map((function(e,n){return Object(x.jsx)(y,{pokemon:e,onClick:function(e){return t(e)}},"".concat(n,"-").concat(e))}))})})},C=u.a.h1(O||(O=Object(o.a)(["\n  text-align: center;\n"]))),S=u.a.div(m||(m=Object(o.a)(["\n  margin: auto;\n  width: 800px;\n  padding-top: 1rem;\n"]))),w=u.a.div(p||(p=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-column-gap: 1rem;\n"])));var F=function(){return Object(x.jsxs)(S,{children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(C,{children:"Pokemon Search"}),Object(x.jsxs)(w,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(q,{}),Object(x.jsx)(P,{})]}),Object(x.jsx)(k,{})]})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(x.jsxs)(i.a.StrictMode,{children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(F,{})]}),document.getElementById("root")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.b182fe7c.chunk.js.map