(this["webpackJsonpexpense-it"]=this["webpackJsonpexpense-it"]||[]).push([[0],{145:function(e,t){},146:function(e,t){},228:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(85),i=n.n(s),a=(n(94),n(86)),l=n.n(a),o=n(2),d=n(12),j=r.a.createContext(void 0),b=n(50),h=n.n(b),x=n(88),m=n(87),u=n(89),p=n(1),O=function(){return Object(p.jsxs)("header",{style:{marginBottom:"5em"},children:[Object(p.jsx)("h1",{children:"ExpenseIT"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)(d.b,{to:"/",children:"Home"}),Object(p.jsx)("span",{style:{fontSize:"1.5em",margin:"0 0.5em"},children:"\u2022"}),Object(p.jsx)(d.b,{to:"/add-expense",children:"Add Expense"}),Object(p.jsx)("span",{style:{fontSize:"1.5em",margin:"0 0.5em"},children:"\u2022"}),Object(p.jsx)(d.b,{to:"/import-from-revolut",children:"Revolut import"})]})]})},f=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=(0,Object(c.useContext)(j).airbase)("charts");return Object(c.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.select({maxRecords:10}).all();case 2:t=e.sent,n=Object(x.a)(t),console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})))()}),[r,s]),Object(p.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{children:n.map((function(e){return Object(p.jsxs)("div",{style:{maxWidth:"50em"},children:[Object(p.jsx)("h3",{children:e.fields.display_name}),Object(p.jsx)("img",{style:{width:"100%",height:"auto"},src:e.fields.chart_url,alt:""}),Object(p.jsx)("hr",{style:{borderTopWidth:"0.2em",color:"gray"}})]})}))})]})},g=(n(228),function(){return Object(p.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(O,{}),Object(p.jsx)("iframe",{className:"airtable-embed airtable-dynamic-height",src:"https://airtable.com/embed/shrePn1hzEaEzM92c?backgroundColor=cyan",width:"100%",height:"932",title:"add-expense",style:{background:"transparent",border:"0px solid #ccc"}})]})}),y=function(){return Object(p.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)(O,{}),Object(p.jsx)("iframe",{className:"airtable-embed",src:"https://airtable.com/embed/shrTikm3blao4jou3?backgroundColor=cyan",width:"100%",height:"533",title:"import-from-revolut",style:{background:"transparent",border:"0px solid #ccc"}})]})},v=function(){return Object(o.g)([{path:"/add-expense",element:Object(p.jsx)(g,{})},{path:"/import-from-revolut",element:Object(p.jsx)(y,{})},{element:Object(p.jsx)(f,{})}])},w=function(){var e=new l.a({apiKey:"keyRvpceFbtg8GScw"}).base("appheg8R37XJzODe9");return Object(p.jsx)(j.Provider,{value:{airbase:e},children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d.a,{children:Object(p.jsx)(v,{})})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),k()},94:function(e,t,n){}},[[229,1,2]]]);
//# sourceMappingURL=main.dbc57c84.chunk.js.map