(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},32:function(e,t,a){e.exports=a.p+"static/media/logo_1000.a884de59.png"},33:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.e4306b43.png"},34:function(e,t,a){e.exports=a.p+"static/media/dani-pic.1cfaedda.png"},35:function(e,t,a){e.exports=a.p+"static/media/marin-pic.a4563df7.png"},36:function(e,t,a){e.exports=a.p+"static/media/alex-pic.ffd69271.png"},37:function(e,t,a){e.exports=a.p+"static/media/jean-pic.f1e4a21d.png"},38:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.dd039298.png"},39:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.99e33baa.png"},40:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.279e820e.png"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(19),l=a.n(r),s=a(43),c=a(7),o=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(8),u=a(3),v=a.n(u),h=a(14),p=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],s=r[1],c=Object(i.useState)([]),o=Object(d.a)(c,2),m=o[0],u=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",b),window.addEventListener("resize",E)),p())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",E))},b=Object(h.throttle)((function(){f(),p()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),p()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var f=p,b=a(11),E=a(1),g=a.n(E),N=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=document.createElement("img");d(m.current,e)}),[]);var d=function(e,t){var a,i;e.style.display="none",e.before(t),t.src=(a=e.getAttribute("width")||0,i=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(a," ").concat(i,'"%3E%3C/svg%3E')),t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.style.opacity="0",e.className&&t.classList.add(e.className),e.addEventListener("load",(function(){t.remove(),e.style.display=""}))};return n.a.createElement("img",Object.assign({},c,{ref:m,className:t,src:a,width:r,height:l,alt:s}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=N,O=function(e){var t=e.className,i=Object(o.a)(e,["className"]),r=g()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(w,{src:a(32),alt:"Open",width:64,height:64})))},y=a(10),D=a.n(y),x=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),h=v[0],p=v[1],f=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",w),document.addEventListener("click",y),function(){document.removeEventListener("keydown",w),document.addEventListener("click",y),N()}}));var E=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",p(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),p(!1)},w=function(e){h&&27===e.keyCode&&N()},y=function(e){f.current&&h&&!f.current.contains(e.target)&&e.target!==b.current&&N()},x=g()("site-header",s&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:x}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},n.a.createElement(O,null),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:h?N:E},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:f,className:g()("header-nav",h&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))}),!l&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(D.a,{onClick:N,href:"#contact",className:"button button-wide-mobile button-sm"}," Contact us")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=x,k=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(D.a,{href:"#contact"},"Contact")),n.a.createElement("li",null,n.a.createElement(D.a,{href:"#about_us"}," About us "))))},C=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/iris_media_off"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/company/iris-news-media/"},n.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"rgba(0, 0, 0, 0)",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Linkedin"),n.a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"#626262"}))))))},L=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(o.a)(e,["className","topOuterDivider","topDivider"]),l=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(O,null),n.a.createElement(C,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(k,null),n.a.createElement("div",{className:"footer-copyright"},"IRIS website made using ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};L.defaultProps={topOuterDivider:!1,topDivider:!1};var H=L,B=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(H,null))},F=a(4),A={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(F.a)({},A.types),defaults:Object(F.a)({},A.defaults)},S={types:Object(F.a)({},A.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)({},A.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(F.a)({},A.types,{pushLeft:v.a.bool}),defaults:Object(F.a)({},A.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},h=function(e){e.stopPropagation()},p=g()("modal",l&&"is-active",c&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:p,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:h},c?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:c})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};T.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var M=T,R=Object(F.a)({},P.defaults),_=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(i.useState)(!1),p=Object(d.a)(h,2),f=p[0],b=p[1],E=g()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:E}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:N},n.a.createElement("div",{id:"top",className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-8 reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("span",{className:"text-color-primary"},"IRIS")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"350"},"In truth, we thrive."))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://player.vimeo.com/video/415859099",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),b(!0)}},n.a.createElement(w,{className:"has-shadow",src:a(33),alt:"Hero",width:627,height:352}))),n.a.createElement(M,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),b(!1)},video:"https://player.vimeo.com/video/415859099",videoTag:"iframe"}))))};_.defaultProps=R;var z=_,q=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(o.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",null," ",i,a.title&&n.a.createElement(c,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};q.defaultProps={children:null,tag:"h2"};var W=q,V=Object(F.a)({},I.defaults),G=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),p=g()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{id:"about_us",className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(W,{id:"about_us",data:{title:"About Us",paragraph:"We are a team of four international students in Computer Science Engineering. Our technical background allows us to use innovative and powerful tools in order to solve modern problems. In today's society, we are concerned by this era of news media and fake news. We are determined, motivated and we strongly believe that we can make a difference."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(34),alt:"Dani Rogmans",width:86,height:86}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Dani Rogmans"),n.a.createElement("p",{className:"m-0 text-sm"},"Dani is Dutch and Lebanese, he lived in many places around the world such as Paris, Dubai and Delft and graduated with an International Baccalaureate. Defined mostly by his internationalism, his musical and social skills and his ability to adapt to various situations, Dani is constantly seeking to learn more.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(35),alt:"Features tile icon 06",width:86,height:86}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Marin Duroyon"),n.a.createElement("a",{href:"https://www.linkedin.com/in/marin-duroyon-585003195/",display:"inline"},n.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"rgba(0, 0, 0, 0)",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Linkedin"),n.a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"#626262"}))),n.a.createElement("p",{className:"m-0 text-sm"},"Marin is French and American, since his youngest age, he has been dedicating his free time in projects to find solutions to concrete problems. Passionated by cybersecurity, skateboard and programming, Marin never ceases to fight for democracy, freedom and privacy."))))),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(36),alt:"Features tile icon 01",width:86,height:86}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Alexandra Feldman"),n.a.createElement("a",{href:"https://www.linkedin.com/in/alexandra-feldman-88ab1051/"},n.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"rgba(0, 0, 0, 0)",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Linkedin"),n.a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"#626262"}))),n.a.createElement("p",{className:"m-0 text-sm"},"Alexandra comes from Belgium and is deeply involved in academic activities, conducting research related to blockchain and data privacy. Starting at an early age, she has been leading projects aiming to solve ecology and societal-related issues. ")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(37),alt:"Features tile icon 06",width:86,height:86}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Jean Gal"),n.a.createElement("a",{href:"https://www.linkedin.com/in/jean-gal-b1280b155/"},n.a.createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"rgba(0, 0, 0, 0)",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Linkedin"),n.a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",fill:"#626262"}))),n.a.createElement("p",{className:"m-0 text-sm"},"Jean comes from France, and has been living abroad his whole life. Being immersed in various cultures, from a young age, Jean is driven by his open-mindedness, determination and team-spirit acquired during international sport competitions. Throughout his life he organized several charity events and was seeking for a way to change our world. He now focuses on improving Iris to attain that goal.                        "))))))))};G.defaultProps=V;var J=G,K=Object(F.a)({},S.defaults),U=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=(e.topDivider,e.bottomDivider),s=e.hasBgColor,c=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=e.imageFill,h=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=g()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),f=g()("features-split-inner section-inner",l&&"has-bottom-divider"),b=g()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(W,{data:{title:"What is Iris ?",paragraph:"Iris is a decentralized platform promoting the publication of reliable, fact-checked articles."},className:"center-content"}),n.a.createElement("div",{className:b},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Become a writer"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Write about what you witness"),n.a.createElement("p",{className:"m-0"},"On the Iris platform, anyone can submit articles which will be published if it meets the standard format requirements. The pieces of information in the article that are highlighted by the algorithm as potentially fake news will be verified by the community.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(38),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Become a reader"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Read censor-free news"),n.a.createElement("p",{className:"m-0"},"On Iris, you can read articles written by any publisher. On the news timeline, you can access articles related to your center of interests from diverse publishers. Readers can show they like an article by donating to the publisher.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(39),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Become a corrector"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Improve the news ecosystem"),n.a.createElement("p",{className:"m-0"},"Verify uncertain information that needs to be fact-checked. On Iris, you can participate in detecting the fake-news and get a remuneration.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(40),alt:"Features split 03",width:528,height:396})))))))};U.defaultProps=K;var Y=U,$=Object(F.a)({},I.defaults),Q=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(W,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName")))))))))};Q.defaultProps=$;var X=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,l=Object(o.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},l,{className:s,htmlFor:r}),a)};X.defaultProps={children:null,labelHidden:!1,id:null};var Z=X,ee=function(e){var t=e.children,a=e.className,i=e.status,r=Object(o.a)(e,["children","className","status"]),l=g()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:l}),t)};ee.defaultProps={children:null,status:!1};var te=ee,ae=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,l=e.type,s=e.name,c=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,f=e.rows,b=e.hint,E=Object(o.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=g()("form-input",h&&"form-input-".concat(h),c&&"form-".concat(c),t),O="textarea"===l?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(Z,{labelHidden:r,id:E.id},i),n.a.createElement("div",{className:N},n.a.createElement(O,Object.assign({},E,{type:"textarea"!==l?l:null,className:w,name:s,disabled:m,value:d,placeholder:p,rows:"textarea"===l?f:null})),a),b&&n.a.createElement(te,{status:c},b))};ae.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=ae,ne=Object(F.a)({},P.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container",id:"contact"},n.a.createElement("div",{className:v},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0 text_email"},"Let us your email to get updates")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(ie,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};re.defaultProps=ne;var le=re,se=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,{className:"illustration-section-01"}),n.a.createElement(Y,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(J,null),n.a.createElement(le,{split:!0}))};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/iris",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ce=function(){var e=Object(i.useRef)(),t=Object(s.d)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(m,{exact:!0,path:"/",component:se,layout:B}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);var oe=Object(c.a)();l.a.render(n.a.createElement(s.b,{history:oe},n.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9f1a6bf6.chunk.js.map