(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";a.r(t);a(50);var n=a(0),r=a.n(n),i=a(147),l=a(153),o=a(156),c=(a(162),a(160)),m=a(161),u=Object(i.b)("a",{target:"e14mn3180"})({textDecoration:"none",color:"#22292f"},";"),s=Object(i.b)("div",{target:"e14mn3181"})({marginBottom:"2.5rem",maxWidth:"40rem"},";"),d=Object(i.b)("h3",{target:"e14mn3182"})({fontSize:"1.5rem",lineHeight:"1.25",marginBottom:"0.5rem"},";"),g=Object(i.b)("img",{target:"e14mn3183"})({display:"block",width:"100%",marginLeft:"0",marginRight:"1rem",marginBottom:"0.5rem"},";"),f=Object(i.a)("color:gray;margin-left:2px;margin-right:2px;"),p=function(e){var t=e.node,a=t.title,n=t.virtuals.previewImage.imageId,i=n?r.a.createElement(g,{src:"https://miro.medium.com/fit/c/1400/420/"+n}):"";return r.a.createElement(u,{target:"_blank",href:"https://medium.com/@leelorz6/"+t.id,key:t.id},r.a.createElement(s,null,r.a.createElement(d,null,a),i,r.a.createElement("div",null),t.virtuals.tags.map(function(e){var t=e.name;return r.a.createElement("small",{key:t},r.a.createElement(c.a,{className:f,icon:m.c})," "+t+" ")}),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement(c.a,{className:f,icon:m.a})," ",t.latestPublishedAt," ",r.a.createElement(c.a,{className:f,icon:m.d})," ",t.author.name),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.virtuals.subtitle}})))};a.d(t,"pageQuery",function(){return y});var b=Object(i.b)("article",{target:"e1oxt2ww0"})({fontFamily:'"system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',marginLeft:"auto",marginRight:"auto",padding:"2rem"},";"),h=Object(i.b)("a",{target:"e1oxt2ww1"})({textDecoration:"none",color:"#4dc0b5",fontWeight:700},";"),y=(t.default=function(e){var t=e.data.allMediumPost.edges;return r.a.createElement(l.a,null,r.a.createElement(b,null,r.a.createElement(o.c,null,r.a.createElement(o.d,null,"Articles"),r.a.createElement("div",null,"I have published articles on Medium. Feel free to"," ",r.a.createElement(h,{href:"https://medium.com/@leelorz6/"},"follow"),".")),t.map(function(e){var t=e.node;return r.a.createElement(p,{node:t,key:t.id})})))},"4194228091")},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(146),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var m=a(26);a.d(t,"waitForRouteChange",function(){return m.c});var u=a(148),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(36);a.d(t,"parsePath",function(){return d.a});var g=r.a.createContext({}),f=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(53),c=a(1),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},151:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),l=a(149),o=Object(i.b)("nav",{target:"e1valow30"})({display:"flex",fontFamily:'"system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",backgroundColor:"#4dc0b5",padding:"1.5rem"},";"),c=Object(i.b)("div",{target:"e1valow31"})({display:"flex",alignItems:"center",flexShrink:0,color:"#ffffff",marginRight:"1.5rem"},";"),m=Object(i.b)("span",{target:"e1valow32"})({fontWeight:600,fontSize:"1.25rem",letterSpacing:"-0.05em"},";"),u=Object(i.b)("div",{target:"e1valow33"})({width:"auto",display:"flex",justifyContent:"flex-end",alignItems:"center"},";"),s=Object(i.b)("div",{target:"e1valow34"})({fontSize:".875rem","@media (min-width: 992px)":{flexGrow:1}},";"),d=Object(i.b)("span",{target:"e1valow35"})({display:"inline-block",marginTop:"0",":hover":{color:"#ffffff"},marginLeft:"1rem","@media (min-width: 992px)":{marginRight:"1rem"}},";"),g=Object(i.a)("box-shadow:none;text-decoration:none;color:inherit;"),f=Object(i.a)("color:#a0f0ed;"),p=Object(i.a)("color:#fff;"),b=function(){return r.a.createElement(o,null,r.a.createElement(l.Link,{className:g,to:"/"},r.a.createElement(c,null,r.a.createElement(m,null,"Nutti Saelor"))),r.a.createElement(u,null,r.a.createElement(s,null,r.a.createElement(l.Link,{to:"/article",className:f,activeClassName:p},r.a.createElement(d,null,"Articles")),r.a.createElement(l.Link,{to:"/project",className:f,activeClassName:p},r.a.createElement(d,null,"Projects")),r.a.createElement(l.Link,{to:"/resume",className:f,activeClassName:p},r.a.createElement(d,null,"Resume")))))},h=Object(i.b)("div",{target:"em3sd5m0"})({fontFamily:'"system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',display:"flex",justifyContent:"center",minHeight:"1.5rem",paddingBottom:"0.25rem"},";"),y=function(){return r.a.createElement(h,null,"2018 © Nutti Saelor")},v=(a(151),Object(i.b)("div",{target:"ei365hv0"})({height:"100vh",display:"flex",flexDirection:"column"},";")),E=Object(i.b)("div",{target:"ei365hv1"})({height:"100%",display:"flex",flexDirection:"column",flexGrow:1},";");t.a=function(e){var t=e.children;return r.a.createElement(v,null,r.a.createElement(b,null),r.a.createElement(E,null,t,r.a.createElement(y,null)))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return o});var n=a(147),r=Object(n.b)("div",{target:"e1toedz20"})({fontFamily:'"system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"',marginLeft:"auto",marginRight:"auto",marginBottom:"2rem",padding:"2rem"},";"),i=Object(n.b)("div",{target:"e1toedz21"})({marginLeft:"1rem",marginRight:"1rem",marginTop:"2rem",marginBottom:"2rem",textAlign:"center",color:"#3d4852"},";"),l=Object(n.b)("h2",{target:"e1toedz22"})({marginBottom:"1rem",fontSize:"2.25rem",lineHeight:"1.25",marginTop:"0",fontWeight:500},";"),o=Object(n.b)("img",{target:"e1toedz23"})({display:"block",height:"12rem",borderRadius:"9999px",marginLeft:"auto",marginRight:"auto",marginBottom:"1rem","@media (min-width: 576px)":{marginBottom:"0",marginRight:"0",marginLeft:"0"}},";")},162:function(e,t,a){var n=a(28).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-article-index-js-3a3613394515522a11b2.js.map