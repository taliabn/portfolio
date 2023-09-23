(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=n.p+"static/media/pong-demo.5acc7c83.gif",j=n.p+"static/media/chess-demo.2158afef.gif",b=n.p+"static/media/resume.eded39bc.pdf",h={homepage:"https://taliabn.github.io/cleanfolio"},d={name:"Talia Ben-Naim",role:"Aspiring Software Engineer",description:"Hello! I am a third year Northwestern University student pursuing a combined BS/MS degree in Computer Science and Computer Engineering respectively with an anticipated graduation date in June 2025. My passion lies in software development and possess a wide range of skills spanning from assembly to databases to python to React. I am constantly excited about learning new technologies, and my pursuit of computer science is fueled by a strong desire to make a meaningful impact. Feel free to connect with me through the provided contact details or explore my skills and projects on this website.",social:{linkedin:"https://www.linkedin.com/in/talia-ben-naim/",github:"https://github.com/taliabn/"},resume:b},u=[{name:"Numble",description:"A wordle-inspired daily arithmetic puzzle game.",stack:["Python","Django","Javascript","HTML","Bootstrap"],sourceCode:"https://github.com",livePreview:"https://numble.fly.dev/"},{name:"Chess",description:"A chess engine inspired by lichess.org and written in C++.",collaborator:"Justin Aronson",collaboratorSite:"https://github.com/JustinAronson",stack:["C++"],sourceCode:"https://github.com/taliabn/chess",livePreview:j},{name:"Pong",description:"An implementation of the Atari classic Pong that is written from scratch in ARM assembly.",stack:["ARM Assembly"],sourceCode:"https://github.com/taliabn/pong",livePreview:o},{name:"Evolutionary Robotics",description:"Conducting evolutionary robotics simulations to explore the impact of various neural network controller architectures on robots evolved for locomotion.",stack:["Python","Data Analysis"],sourceCode:"https://github.com/taliabn/pong-assembly",livePreview:"https://youtu.be/uux9ZBXE7Lc"}],m=["Python","C","C++","Verilog","HTML","JavaScript","React","AWS","Docker","Git","Bash","SQL","MATLAB","R"],p="taliaben-naim2025@u.northwestern.edu",f=n(16),O=n.n(f),x=n(14),g=n.n(x),k=n(18),v=n.n(k),N=n(17),_=n.n(N),w=(n(28),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(a.a)(l,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,m.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,p?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(g.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(_.a,{}):Object(s.jsx)(v.a,{})})]})}),y=(n(32),function(){var e=h.homepage,t=h.title;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(w,{})]})}),C=n(11),S=n.n(C),A=n(19),P=n.n(A),E=(n(33),function(){var e=d.name,t=d.role,n=d.description,c=d.social,a=d.resume;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["An ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,target:"_blank",rel:"noopener noreferrer","aria-label":"github",className:"link link--icon",children:Object(s.jsx)(S.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(P.a,{})})]})]})]})}),L=n(7),M=n.n(L),R=n(20),B=n.n(R),J=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.collaborator&&Object(s.jsxs)("p",{className:"project__description",children:["Developed in collaboration with",Object(s.jsx)("a",{href:t.collaboratorSite,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:t.collaborator})]}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(S.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(B.a,{})})]})}),T=(n(36),function(){return u.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(s.jsx)(J,{project:e},M()())}))})]}):null}),I=(n(37),function(){return m.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:m.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),D=n(21),H=n.n(D),z=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(H.a,{fontSize:"large"})})}):null}),F=(n(39),function(){return p?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(p),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),G=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Adapted from template created by Raj Shekhar"})})}),Q=(n(41),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(y,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(T,{}),Object(s.jsx)(I,{}),Object(s.jsx)(F,{})]}),Object(s.jsx)(z,{}),Object(s.jsx)(G,{})]})});n(42);Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)(Q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5ba2cdb8.chunk.js.map