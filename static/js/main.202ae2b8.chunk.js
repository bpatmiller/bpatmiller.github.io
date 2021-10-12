(this["webpackJsonpportfolio-responsive"]=this["webpackJsonpportfolio-responsive"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var r=n(129),a=n(1),c=n(56),i=n.n(c),o=n(76),s=n(24),l=n(128),j=n(130),h=n(12),d=function(){return Object(a.useContext)(h.d)},b=n(30),p=n(122),x=n(123),u=n(121),g=n(96),O=n(46),f=n(3),m=function(){var e=d().location;return Object(O.useTransition)(e,{key:e.pathname,from:{opacity:"/"===e.pathname?-8:1,transform:"/"===e.pathname?"rotate(-90deg)":"rotate(105deg)"},enter:{opacity:1,transform:"rotate(105deg)"},config:{}})((function(e,t){return Object(f.jsx)(O.animated.div,{style:e,children:Object(f.jsx)(u.a,{href:"/",children:Object(f.jsxs)("svg",{height:"96px",margin:"auto",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",fill:"white",children:[Object(f.jsxs)("defs",{children:[Object(f.jsx)("path",{fill:"white",stroke:"white",id:"textCurve",d:"M243.2, 382.4c-74.8,    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5, 135.5 S318, 382.4, 243.2, 382.4z"}),Object(f.jsxs)("linearGradient",{id:"GradientV",children:[Object(f.jsx)("stop",{offset:"0","stop-color":"#36a126"}),Object(f.jsx)("stop",{offset:"1","stop-color":"#fc466b"})]}),Object(f.jsxs)("linearGradient",{id:"GradientH",gradientTransform:"rotate(90)",children:[Object(f.jsx)("stop",{offset:"0","stop-color":"#090979"}),Object(f.jsx)("stop",{offset:"1","stop-color":"#fcb045"})]})]}),Object(f.jsx)("mask",{id:"Mask",children:Object(f.jsx)("text",{fontSize:"104px",children:Object(f.jsx)("textPath",{fill:"current",href:"#textCurve",children:"Brendan P Miller ***"})})}),Object(f.jsx)("rect",{x:"0",y:"0",width:"500",height:"500",fill:"white",mask:"url(#Mask)"})]})})},t.key)}))},C=function(e){var t=e.children;return Object(f.jsxs)(p.a,{backgroundColor:"gray.800",color:"white",width:"100%",height:"100vh",flexDirection:["column","column","column","row","row"],children:[Object(f.jsx)(p.a,{flexDirection:"row",justify:"center",align:"flex-start",height:[32,32,32,"100%","100%"],w:["100%","100%","100%","156px","256px"],children:Object(f.jsxs)(p.a,{p:0,flexDirection:["row","row","row","column","column"],align:"center",children:[Object(f.jsx)(x.a,{p:4,children:Object(f.jsx)(m,{})}),Object(f.jsx)(x.a,{p:4,children:Object(f.jsx)(u.a,{href:"https://github.com/bpatmiller",children:Object(f.jsx)(g.a,{size:"2em"})})})]})}),Object(f.jsx)(p.a,{p:0,height:"100%",grow:9,overflow:"hide",children:t})]})},E=n(5),w=n(124),F=n(131),D=n(125),B=(Object(b.animated)(w.a),Object(b.animated)(F.a)),v=Object(b.animated)(x.a),A=function(e){var t=e.contents.map((function(e){return Object(f.jsx)(y,{title:e.title,link:e.link,img:e.img})}));return Object(f.jsx)(p.a,{margin:"auto",wrap:"wrap",justify:"space-around",align:"center",maxWidth:"1200px",height:"100%",p:4,children:t})},y=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0],c=n[1],i=Object(b.useSpring)({transform:r?"translate(-10px,-10px)":"translate(0px,0px)"});Object(b.useSpring)({opacity:r?"100%":"30%",margin:0,padding:0});return Object(f.jsx)(v,{boxSize:["sm","sm","sm","sm","md"],m:0,mb:[10,10,10,0,0],style:i,backgroundColor:"gray.700",overflow:"hidden",borderRadius:"lg",borderWidth:"1px",boxShadow:"6px 6px 8px 2px #000",borderColor:"gray.600",children:Object(f.jsx)(D.a,{h:"100%",w:"100%",rounded:"md",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:Object(f.jsxs)(D.b,{href:"/#".concat(e.link),children:[Object(f.jsx)(B,{fit:"cover",h:"calc(100% - 3em)",w:"100%",src:e.img}),Object(f.jsx)(p.a,{w:"100%",p:1,justify:"center",align:"center",backgroundColor:"gray.700",children:Object(f.jsx)(w.a,{fontSize:"2xl",children:e.title})})]})})})},k=[{title:"Fractalize.JS",link:"fractalize",img:"/frac.png"},{title:"Audio Reactive GAN",link:"argan",img:"/gan.jpg"},{title:"Chessboard",link:"chess",img:"/chess.png"},{title:"Multiple Interacting Fluids",link:"gfm2d",img:"/gfm2d.png"}],S=function(){return Object(f.jsx)(A,{contents:k})},M=n(126),z=n(127),G=function(e){var t=["cyan","pink","green","orange","red","purple"];return t[e.charCodeAt(0)%t.length]},W=function(e){return Object(f.jsxs)(p.a,{p:8,direction:"column",align:"basline",children:[Object(f.jsxs)(p.a,{justify:"space-between",align:"baseline",gridColumnGap:8,children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(M.a,{children:e.title})}),Object(f.jsx)(x.a,{children:e.date}),Object(f.jsx)(x.a,{children:e.tags.map((function(e){return Object(f.jsx)(z.a,{colorScheme:G(e),m:1,children:e})}))})]}),Object(f.jsx)(x.a,{maxW:800,children:e.paragraphs.map((function(e){return Object(f.jsx)(w.a,{children:e})}))})]})},J={title:"Fractalize.JS",paragraphs:["hello","hi","test"],date:"2021",tags:["ML","Fractals","Web","JS"]},P=function(){return Object(f.jsx)(W,Object(s.a)({},J))},L={title:"Audio Reactive GAN",paragraphs:["hello","hi","test"],date:"2021",tags:["ML","Audio","Python"]},T=function(){return Object(f.jsx)(W,Object(s.a)({},L))},I={title:"Chess",paragraphs:["hello","hi","test"],date:"2021",tags:["Frontend","Web","JS"]},R=function(){return Object(f.jsx)(W,Object(s.a)({},I))},N={title:"Multiple Interacting Fluids",paragraphs:["hello","hi","test"],date:"2019",tags:["Fluid Simulation","Python"]},H=function(){return Object(f.jsx)(W,Object(s.a)({},N))},V=Object(l.a)(Object(s.a)(Object(s.a)({},{colors:{pink:{50:"#F7EEEF",100:"#E8CED2",200:"#DAAFB6",300:"#CB8F99",400:"#BD707C",500:"#AE5160",600:"#8C404D",700:"#693039",800:"#462026",900:"#231013"},red:{50:"#FAECEA",100:"#F1CAC5",200:"#E8A9A0",300:"#E0877B",400:"#D76556",500:"#CE4331",600:"#A53627",700:"#7C281D",800:"#521B14",900:"#290D0A"},teal:{50:"#ECF9F7",100:"#C9EEE9",200:"#A6E2DA",300:"#84D7CC",400:"#61CCBD",500:"#3EC1AF",600:"#329A8C",700:"#257469",800:"#194D46",900:"#0C2723"},cyan:{50:"#E8F4FC",100:"#BFE1F7",200:"#97CEF2",300:"#6EBBED",400:"#45A8E8",500:"#1C94E3",600:"#1677B6",700:"#115988",800:"#0B3B5B",900:"#061E2D"},purple:{50:"#F0EDF7",100:"#D6CDE9",200:"#BCADDC",300:"#A28DCE",400:"#876DC0",500:"#6D4DB2",600:"#573E8E",700:"#412E6B",800:"#2C1F47",900:"#160F24"},green:{50:"#EDF8EF",100:"#CCEBD3",200:"#ABDEB7",300:"#8AD19B",400:"#69C47F",500:"#48B763",600:"#3A9250",700:"#2B6E3C",800:"#1D4928",900:"#0E2514"},orange:{50:"#FCF0E9",100:"#F6D4C1",200:"#F0B999",300:"#EA9E70",400:"#E58248",500:"#DF6720",600:"#B2521A",700:"#863E13",800:"#59290D",900:"#2D1506"}}}),{},{initialColorMode:"light"})),$=function(){var e=d().location,t=Object(b.useTransition)(e,{key:e.pathname,from:{opacity:0,transform:"/"===e.pathname?"translate(0px,-100%)":"translate(0px,100%)"},enter:{opacity:1,transform:"translate(0px, 0px)"}});return Object(f.jsx)(j.a,{theme:V,children:Object(f.jsx)(C,{children:t((function(e,t){return Object(f.jsx)(b.animated.div,{style:e,children:Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{exact:!0,path:"/",component:S}),Object(f.jsx)(h.a,{exact:!0,path:"/fractalize",component:P}),Object(f.jsx)(h.a,{exact:!0,path:"/argan",component:T}),Object(f.jsx)(h.a,{exact:!0,path:"/chess",component:R}),Object(f.jsx)(h.a,{exact:!0,path:"/gfm2d",component:H})]})},t.key)}))})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(f.jsx)(a.StrictMode,{children:Object(f.jsxs)(o.a,{basename:"/",children:[Object(f.jsx)(r.a,{}),Object(f.jsx)($,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),q()}},[[113,1,2]]]);
//# sourceMappingURL=main.202ae2b8.chunk.js.map