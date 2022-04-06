(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6694)}])},6694:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return se}});var a=s(5893),r=s(7294),n=function(e){var t=e.children,s=e.text,r=e.big,n=e.c,i=void 0===n?"":n,l="object"===typeof i?i:{};return r?(0,a.jsx)("h1",{className:"heading--big text-gray-50 leading-none mb-3 md:w-[26ch] ".concat(i),children:s||t}):(0,a.jsx)("h2",{className:"heading ".concat(l?"":i),style:l,children:s||t})},i=s(1664),l=function(e){var t=e.text,s=e.href,r=e.invert,n=e.blank,l=void 0!==n&&n;return(0,a.jsx)(i.default,{href:s,children:(0,a.jsx)("a",{target:l?"_blank":"_self",className:r?"text-hero hover:text-gray-50 transition-colors text-2xl":"text-gray-50 hover:text-hero transition-colors text-2xl",children:t})})},o=function(e){var t=e.text,s=e.invert,n=e.value,i=void 0!==n&&n,l=e.copy,o=void 0!==l&&l,c=(0,r.useState)(!1),d=c[0],x=c[1],m=(0,r.useState)(t),h=m[0],u=m[1];return(0,a.jsx)("button",{className:s?"hover:text-gray-50 transition-colors text-2xl ".concat(o&&d?"text-green-500":"text-hero"):"hover:text-hero transition-colors text-2xl ".concat(o&&d?"text-green-500":"text-gray-50"),onClick:o?function(e){navigator.clipboard.writeText(e.target.value),u("Copied!!"),x(!0),setTimeout((function(){u(t),x(!1)}),750)}:function(){},value:i&&i,children:h})},c=function(e){var t=e.small,s=void 0!==t&&t,r=e.big,i=e.des,c=e.links,d=e.children,x=e.copy,m=void 0!==x&&x;return(0,a.jsxs)("div",{className:"hero__box",children:[s&&(0,a.jsx)(n,{big:!1,children:s}),(0,a.jsx)(n,{big:!0,children:r}),(0,a.jsx)("p",{className:"hero__text text-gray-300 text-2xl leading-tight mb-3 w-10/12",children:i}),c&&m&&c.map((function(e,t){var s=e.text,r=e.copy,n=void 0!==r&&r,i=e.copyText;return n&&(0,a.jsx)(o,{text:s,invert:!0,value:i,copy:n},t)}))||c&&c.map((function(e,t){var s=e.text,r=e.href;e.copy;return(0,a.jsx)(l,{text:s,href:r,invert:!0},t)})),d]})},d=function(e){var t=e.src;return(0,a.jsx)("iframe",{src:t,className:"select-none h-full w-full"})},x=s(5434),m=function(){var e=(0,r.useState)(null),t=e[0],s=e[1];return(0,r.useEffect)((function(){s("./objects/mac.html")}),[]),(0,a.jsxs)("header",{className:"hero relative",children:[(0,a.jsx)("div",{id:"mac",className:"mac text-gray-50 grid place-items-center lg:col-span-2 absolute w-full h-full lg:relative",children:t&&(0,a.jsx)(d,{src:t})}),(0,a.jsxs)("div",{className:"hero__box grid col-span-3 lg:col-span-1",children:[(0,a.jsx)("div",{className:"hidden lg:block",children:(0,a.jsx)(d,{src:"./objects/objects.html"})}),(0,a.jsx)("div",{className:"flex items-center mx-auto w-11/12",children:(0,a.jsx)("div",{className:"z-10 lg:before:hidden before:absolute before:h-[75vh] before:w-full before:bg-dark-4 before:opacity-[0.07] before:z-[5] before:top-0",children:(0,a.jsx)(c,{small:"Web Developer",big:(0,a.jsxs)(a.Fragment,{children:["Hello I am ",(0,a.jsx)("br",{}),"Eashaan Thakur a web developer"]}),links:[{text:"E: eashaan@th4kur.me",href:"/",copy:!0,copyText:"eashaan@th4kur.me"}],copy:!0,des:"I am currently a high school student, learning new technologies in web development. I love building websites and am constantly trying out new ideas. "})})})]}),(0,a.jsx)("div",{className:"absolute bottom-10 w-full flex justify-center lg:hidden",children:(0,a.jsx)(l,{invert:!0,text:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.x3N,{className:"text-4xl animate-bounce"})}),href:"#about"})})]})},h=s(9008),u=s(1228),g=s(3153),f=function(){var e=(0,r.useState)([{question:"Why learn to code?",ans:"I started out in coding so that I could do something productive during lockdown and ended up loving it. Coding gives me very much creative freedom as I can build anything I want and nothing makes me happier than that."},{question:"Where does your inner drive come from?",ans:"Web development is a constantly changing field with new languages and frameworks popping up everyday. I like to learn more and more about new technologies as it is my passion, So my inner drive to build websites comes from my willingness to gain knowledge."},{question:"What is your personal philosophy?",ans:"Here goes an answer for the above question. It is a bit philosophical so ill give it a thought before answering."}]),t=e[0];e[1];return(0,a.jsx)("div",{className:"w-full lg:px-4 lg:pt-16 md:pt-2",children:(0,a.jsx)("div",{className:"w-full max-w-md p-2 lg:mx-auto rounded-2xl bg-dark",children:t.map((function(e,t){var s=e.question,r=e.ans;return(0,a.jsx)("div",{className:"mb-1",children:(0,a.jsx)(u.p,{children:function(e){var t=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u.p.Button,{className:"flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-gray-200 bg-dark-5 rounded-lg hover:bg-dark-4",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)(g.g8U,{className:"".concat(t?"transform rotate-180":"transform rotate-[270deg]"," w-5 h-5 text-gray-300 self-center")})]}),(0,a.jsx)(u.p.Panel,{className:"px-4 pt-4 pb-2 text-xl text-gray-300",children:r})]})}})},t)}))})})},p=function(){return(0,a.jsx)("section",{id:"about",className:"w-full min-h-[85vh] py-10 sm:py-5 bg-dark-4 grid place-content-center",children:(0,a.jsxs)("div",{className:"w-10/12 mx-auto grid lg:grid-cols-2 items-center md:gap-5 gap-2",children:[(0,a.jsx)("div",{className:"md:pl-2",children:(0,a.jsx)(c,{small:"About Me",big:(0,a.jsxs)(a.Fragment,{children:["You can't use up creativity ",(0,a.jsx)("br",{})," The more you use the more you have left in your significant mind."]}),des:"I believe creativity is really important in web development. Making creative and user friendly website truly makes me happy with my work. If you have any more questions about me please find the answers beside.",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"mr-3 text-7xl text-hero self-start ",children:"2+"}),(0,a.jsxs)("p",{className:"self-center text-xl leading-none text-gray-300 translate-y-[-5px]",children:["Years of ",(0,a.jsx)("br",{})," Experience"]})]})})}),(0,a.jsxs)("div",{className:"grid justify-start",children:[(0,a.jsxs)("div",{className:"md:pl-2 grid justify-start",children:[(0,a.jsx)("div",{children:(0,a.jsx)(n,{text:"FAQs",big:!1})}),(0,a.jsx)(n,{text:(0,a.jsx)(a.Fragment,{children:"Here are the answers to some frequently asked questions"}),big:!0,c:"lg:mx-auto"})]}),(0,a.jsx)(f,{})]})]})})},j=s(859),b=s(2585),v=s(9583),y=s(7735),N=function(e){var t=e.text,s=e.bg,n=(e.color,e.icon),i=(0,r.useState)(n),l=i[0],o=i[1];return(0,a.jsx)("i",{className:"tag ".concat(s),onMouseEnter:function(){return o(t)},onMouseLeave:function(){return o(n)},children:l})},w=function(e){e.input;return(0,a.jsxs)("div",{className:"grid sm:grid-cols-6 grid-cols-5 place-content-center",children:[(0,a.jsxs)("div",{className:"language self-end",children:[(0,a.jsx)(y.PSn,{className:" text-orange-600 text-[2.5rem] mb-1"}),(0,a.jsx)("p",{children:"HTML"})]}),(0,a.jsxs)("div",{className:"language self-end",children:[(0,a.jsx)(y.H5g,{className:" text-cyan-500 text-[2.5rem] mb-1"}),(0,a.jsx)("p",{children:"CSS"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(j.N2N,{className:" text-yellow-400 text-5xl "}),(0,a.jsx)("p",{children:"JavaScript"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(j.Z85,{className:" text-teal-500 text-5xl "}),(0,a.jsx)(N,{text:"Beginner",bg:"bg-blue-900 text-gray-100",icon:(0,a.jsx)(b.C7i,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)("p",{children:"Python"})]})]})},k=function(){return(0,a.jsxs)("div",{className:"grid sm:grid-cols-6 grid-cols-4 grid-rows-2 place-content-center",children:[(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(N,{text:"Gaining XP",bg:"bg-orange-500 text-dark-5 font-semibold",icon:(0,a.jsx)(v.Mp$,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)(y.t$b,{className:" text-green-500 text-5xl"}),(0,a.jsx)("p",{className:"fade",children:"MongoDB"}),(0,a.jsx)("p",{className:"fade-counter",children:"M"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(N,{text:"Gaining XP",bg:"bg-orange-500 text-dark-5 font-semibold",icon:(0,a.jsx)(v.Mp$,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)(y.AmJ,{className:" text-gray-100 text-5xl "}),(0,a.jsx)("p",{className:"fade",children:"Express.js"}),(0,a.jsx)("p",{className:"fade-counter",children:"E"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(N,{text:"Beginner",bg:"bg-blue-900 text-gray-100",icon:(0,a.jsx)(b.C7i,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)(j.GR$,{className:" text-blue-500 text-5xl react"}),(0,a.jsx)("p",{className:"fade",children:"React"}),(0,a.jsx)("p",{className:"fade-counter",children:"R"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(N,{text:"Gaining XP",bg:"bg-orange-500 text-dark-5 font-semibold",icon:(0,a.jsx)(v.Mp$,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)(j.f9f,{className:" text-green-400 text-5xl mb-1"}),(0,a.jsx)("p",{className:"fade",children:"Node.js"}),(0,a.jsx)("p",{className:"fade-counter",children:"N"})]}),(0,a.jsxs)("div",{className:"language",children:[(0,a.jsx)(j.x9X,{className:" text-pink-600 text-5xl mb-1"}),(0,a.jsx)("p",{children:"Sass"})]}),(0,a.jsxs)("div",{className:"language self-center",children:[(0,a.jsx)(y.Xou,{className:" text-yellow-400 text-4xl mb-2"}),(0,a.jsx)(N,{text:"Beginner",bg:"bg-blue-900 text-gray-100",icon:(0,a.jsx)(b.C7i,{},Math.trunc(100*Math.random()+1))}),(0,a.jsx)("p",{children:"Next.js"})]}),(0,a.jsxs)("div",{className:"language self-center",children:[(0,a.jsx)(y.YnA,{className:"text-cyan-400 text-5xl"}),(0,a.jsx)("p",{children:"TailwindCSS"})]})]})},S=function(){return(0,a.jsx)("section",{className:"min-h-[85vh] bg-dark-4 flex items-center py-10 sm:py-5 border-b-[1px] border-dark-2",children:(0,a.jsxs)("div",{className:"w-10/12 grid lg:grid-cols-2 items-center mx-auto my-auto",children:[(0,a.jsx)("div",{className:"h-full",children:(0,a.jsx)(c,{small:"Technologies",big:"The only way to learn a new programming language is by writing programs in it.",des:"I completely agree with the above quote by Dennis Ritchie, and beside are the programming languages and frameworks that I have used in quite a few projects and I'm quite comfortable with."})}),(0,a.jsxs)("div",{className:"md:pt-3 lg:pt-0",children:[(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)(n,{text:"Languages",big:!1}),(0,a.jsx)(w,{})]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)(n,{text:"Frameworks",big:!1}),(0,a.jsx)(k,{})]})]})]})})},T=s(4051),I=s.n(T),C=s(5131),F=s(8346),P=s(3750),M=s(7516),_=s(471);function E(e,t,s,a,r,n,i){try{var l=e[n](i),o=l.value}catch(c){return void s(c)}l.done?t(o):Promise.resolve(o).then(a,r)}function q(e){return function(){var t=this,s=arguments;return new Promise((function(a,r){var n=e.apply(t,s);function i(e){E(n,a,r,i,l,"next",e)}function l(e){E(n,a,r,i,l,"throw",e)}i(void 0)}))}}function A(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function D(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){A(e,t,s[t])}))}return e}function O(){return O=q(I().mark((function e(t){var s,a,r,n,i,l,o=arguments;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.length>1&&void 0!==o[1]?o[1]:{},a=s.timeout,r=void 0===a?3e3:a,n=new AbortController,i=setTimeout((function(){return n.abort()}),r),e.next=6,fetch(t,D({},s,{signal:n.signal}));case 6:return l=e.sent,clearTimeout(i),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}var H=function(e){return O.apply(this,arguments)};function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}function B(e,t,s,a,r,n,i){try{var l=e[n](i),o=l.value}catch(c){return void s(c)}l.done?t(o):Promise.resolve(o).then(a,r)}function L(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return W(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(e){var t=e.data,s=0,i=t.cardData,l=t.modalData,o=t.requestsData,c=t.github,d=(0,r.useState)(!1),x=d[0],m=d[1],h=(0,r.useState)("Check Demo Status"),u=h[0],g=h[1],f=(0,r.useState)(!1),p=f[0],b=f[1],y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";m(e),g(o[t]||t||o[e])},N=function(){var e,t=(e=I().mark((function e(t,a,r){var n;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=r||null,"done"===x){e.next=18;break}if(t.preventDefault(),y("load",n||"load"),"onfail"!==r){e.next=11;break}return e.next=8,H(a,{timeout:15e3});case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,H(a);case 13:e.t0=e.sent;case 14:e.t0.ok&&(y("success",r||"success"),setTimeout((function(){return y("done")}),500)),e.next=19;break;case 18:return e.abrupt("return");case 19:e.next=29;break;case 21:if(e.prev=21,e.t1=e.catch(0),!(++s>2)){e.next=27;break}return y("fail","There seems to be a server error"),e.abrupt("return");case 27:y("fail"),setTimeout((function(){N(t,a,"onfail")}),500);case 29:case"end":return e.stop()}}),e,null,[[0,21]])})),function(){var t=this,s=arguments;return new Promise((function(a,r){var n=e.apply(t,s);function i(e){B(n,a,r,i,l,"next",e)}function l(e){B(n,a,r,i,l,"throw",e)}i(void 0)}))});return function(e,s,a){return t.apply(this,arguments)}}(),w=function(){b(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{onClick:function(){b(!0)},className:"animate-border relative py-4 px-3 rounded bg-dark-4 h-full grid grid-rows-2 cursor-pointer gap-2 items-start",children:[(0,a.jsx)("div",{className:"".concat(i.imageSrc," bg-cover h-full w-full")}),(0,a.jsx)("div",{className:"flex flex-col justify-center",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"text-gray-200 text-2xl",children:i.title}),(0,a.jsx)("p",{className:"text-gray-400 text-[1.35rem] leading-none",children:i.shortDes})]})})]}),(0,a.jsx)(C.u,{appear:!0,show:p,as:r.Fragment,children:(0,a.jsx)(F.V,{as:"div",className:"fixed inset-0 z-[99999] overflow-y-auto",onClose:w,children:(0,a.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,a.jsx)(C.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(F.V.Overlay,{className:"fixed inset-0 bg-dark-3 bg-opacity-30"})}),(0,a.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,a.jsx)(C.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,a.jsxs)("div",{className:"inline-block w-full max-w-lg p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-dark-5 shadow-xl rounded-2xl relative",children:[(0,a.jsx)(n,{text:"Project",big:!1}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)("div",{className:"".concat(i.modalImg," bg-cover w-full h-[30vh] rounded")}),(0,a.jsx)(F.V.Title,{as:"h3",className:"text-3xl font-medium leading-6 text-gray-200 mb-1 mt-2",children:l.title}),(0,a.jsx)("p",{className:"text-2xl text-gray-400 leading-none",children:l.des})]}),(0,a.jsx)(v.aHS,{className:"text-hero-dark absolute top-4 right-5 text-lg cursor-pointer",onClick:w}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(n,{text:"Technologies Used",big:!1,c:{marginBottom:0}}),(0,a.jsx)("div",{className:"flex mt-1",children:L(l.languages)}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(n,{text:"Links",big:!1,c:{marginBottom:0}}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row place-items-start",children:[(0,a.jsxs)("a",{className:"py-1 px-2 ".concat(("success"===x?"text-emerald-500":"fail"===x&&"text-red-500")||"text-pink-600"," text-xl bg-dark-4 rounded mr-2 mb-2 md:mb-0 flex items-center focus:border-none"),style:{textShadow:"1px 2px 6px #000000e1"},onClick:function(e){N(e,o.url)},href:"done"===x?o.finalUrl:"#",target:"_blank",rel:"noreferrer",children:["load"===x&&(0,a.jsx)(_.frZ,{className:"animate-spin mr-1 mb-1"})||"success"===x&&(0,a.jsx)(P.IPg,{className:"text-emerald-500 mr-1 transform -translate-y-[2px]"})||"fail"===x&&(0,a.jsx)(v.aHS,{className:"text-red-500 text-sm mr-1 transform -translate-y-[2px]"})||"done"===x&&(0,a.jsx)(M.rpH,{className:"text-sm mr-1 transform -translate-y-[2px]"}),u]}),(0,a.jsxs)("a",{href:c.stat&&c.link,className:"py-1 px-2 text-pink-600 text-xl bg-dark-4 rounded flex items-center ".concat(c.stat?"":"cursor-not-allowed with-info"," relative"),style:{textShadow:"1px 2px 6px #000000e1"},children:[(0,a.jsx)(j.RVq,{className:"mr-1 leading-none text-xl transform -translate-y-[2px]"}),c.stat?"Source Code":"Not Permitted",(0,a.jsx)("i",{className:"bg-dark-5 text-gray-200 p-1 not-italic absolute w-[30ch] top-[-5rem] inset-x-0 hidden -translate-x-9 cursor-text text-center",children:"Source code cant be publicly shared but code snippets can be shared upon request"})]})]})]})]})]})})]})})})]})},U=[{github:{stat:void 0},cardData:{imageSrc:"bg-[url('/siis.png')]",modalImg:"bg-[url('/siis-modal.png')]",title:"SiiS Website",shortDes:"I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss."},modalData:{title:"SiiS Website",des:"I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss. I also did some basic SEO.",languages:[(0,a.jsx)(y.PSn,{className:"text-orange-600 text-[1.8rem] mr-2"},1),(0,a.jsx)(y.YnA,{className:" text-cyan-400 text-3xl mr-2"},2),(0,a.jsx)(j.N2N,{className:" text-yellow-400 text-3xl"},3)]},requestsData:{finalUrl:"https://www.siis.in/",url:"https://proxy.eashaan.workers.dev/?url=http://www.siis.in",load:"Checking website status",success:"Website is online",done:"Visit Website"}},{github:{stat:!0,link:"https://github.com/TH4KUR/brilliance"},cardData:{imageSrc:"bg-[url('/brilliance.png')]",modalImg:"bg-[url('/brilliance-modal.png')]",title:"Brilliance App",shortDes:"I made this app as a entry for my first hackathon. This app helps students to track their progress throughout their session and compare it with their friends and many more."},modalData:{title:"Brilliance App",des:"I made this app as a entry for my first hackathon. This app helps students to track their progress throughout their session and compare it with their friends to compete with them and many more. I have two github branches the hackathon original and the recently updated one. ",languages:[(0,a.jsx)(y.PSn,{className:"text-orange-600 text-[1.7rem] mr-2"},1),(0,a.jsx)(j.N2N,{className:" text-yellow-400 text-3xl mr-2"},2),(0,a.jsx)(j.f9f,{className:" text-green-400 text-3xl mr-2"},3),(0,a.jsx)(y.t$b,{className:" text-green-500 text-3xl"},4)]},requestsData:{finalUrl:"https://fast-shore-10116.herokuapp.com/",url:"https://proxy.eashaan.workers.dev/?url=https://fast-shore-10116.herokuapp.com/allusers",load:"Checking website status",success:"Website is online",fail:"Website is offline",onfail:"Giving the app a caffene shot",done:"Visit Website"}}],V=function(){var e=(0,r.useState)(!1),t=e[0],s=e[1],n=(0,r.useState)((0,a.jsx)(a.Fragment,{children:"Load More \u2192"})),i=n[0],l=n[1];return(0,a.jsx)("section",{id:"projects",className:"w-full min-h-[86vh] bg-dark-5 grid",children:(0,a.jsxs)("div",{className:"w-[86.3%] py-10 mx-auto grid lg:grid-cols-2 items-center",children:[(0,a.jsx)("div",{children:(0,a.jsx)(c,{small:"My Projects",big:(0,a.jsxs)(a.Fragment,{children:["Any fool can write code that a computer can understand. ",(0,a.jsx)("br",{})," ","Good programmers write code that humans can understand."]}),des:"I understand that the best way to measure the understanding and experience of one's expertise in a language is by looking at the way he writes code. So here are some of my best projects so far.",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("button",{className:"".concat(t?"text-gray-100":"text-hero hover:text-gray-50"," transition-colors text-2xl border-b border-current pb-0 leading-none cursor-pointer"),onClick:function(){s(!1),l((0,a.jsx)(a.Fragment,{children:"That's it for now"}))},disabled:t,children:i})})})}),(0,a.jsx)("div",{className:"grid gap-3 sm:grid-cols-2 mt-6 sm:mt-0 2xl:grid-cols-3 md:w-10/12 lg:w-full",children:U.map((function(e,t){return(0,a.jsx)(R,{data:e},t)}))})]})})},X=s(2510),$=s.n(X),z=s(155),G=function(){return(0,a.jsxs)("section",{id:"contact",className:"w-full min-h-[90vh] bg-dark-4 py-20",children:[(0,a.jsx)("div",{className:"w-[86.3%] mx-auto grid grid-cols-2",children:(0,a.jsx)(n,{text:"Contact Me",big:!1})}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 w-[86.3%] mx-auto mt-5",children:[(0,a.jsxs)("div",{className:"md:w-[86.3%] pb-2 md:pb-0",children:[(0,a.jsx)(c,{big:"Have any more questions?",des:"If you have any more questions regarding me or just want to provide feed, then you can simply reach me through the contact form beside. "}),(0,a.jsx)("img",{src:"/contact.svg",draggable:"false",alt:"contact",className:" w-3/4 lg:block hidden"})]}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("form",{action:"#",method:"POST",onSubmit:function(e){return e.preventDefault()},children:(0,a.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[(0,a.jsx)("div",{className:"px-4 py-5 bg-dark-5 sm:p-6",children:(0,a.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"first-name",className:"block text-2xl leading-none font-medium text-gray-200",children:"First name"}),(0,a.jsx)("input",{readOnly:!0,type:"text",name:"first-name",id:"first-name",autoComplete:"given-name",className:"mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md",value:"Eashaan"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"last-name",className:"block text-2xl leading-none font-medium text-gray-200",children:"Last name"}),(0,a.jsx)("input",{readOnly:!0,type:"text",name:"last-name",id:"last-name",autoComplete:"family-name",className:"mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md",value:"Thakur"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"block text-2xl leading-none font-medium text-gray-200",children:"Email address"}),(0,a.jsx)("input",{readOnly:!0,type:"text",name:"email-address",id:"email-address",autoComplete:"email",className:"mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md",value:"max910payne@gmail.com"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-5",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-2xl leading-none font-medium text-gray-200",children:"Your message"}),(0,a.jsx)("textarea",{name:"message",id:"message",autoComplete:"email",className:"mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md resize-none h-[6.5rem] sm:h-[6rem]",value:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde vitae in beatae rerum officiis officia.",readOnly:!0})]})]})}),(0,a.jsxs)("div",{className:"px-4 py-3 bg-dark-3 text-right sm:px-6 flex justify-between items-center",children:[(0,a.jsxs)("p",{className:"flex text-xl text-hero-dark text-left leading-none",children:[(0,a.jsx)(z.gpR,{className:"text-hero text-base self-center mr-4"})," ","Form under construction,",(0,a.jsx)("br",{})," will be up soon ;)"]}),(0,a.jsx)("button",{disabled:!0,type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl leading-none font-medium rounded-md text-white bg-hero cursor-not-allowed hover:bg-hero-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hero ".concat($().textShadow),children:"Send"})]})]})})})]})]})},J=s(4298),Y=function(){return(0,a.jsxs)("footer",{style:{minHeight:"40vh"},className:"gap-4 grid items-top sm:grid-cols-4 px-10 lg:px-20 py-10 bg-dark-5",children:[(0,a.jsxs)("div",{className:"grid grid-rows-auto lg:h-3/4",children:[(0,a.jsxs)("div",{className:"grid items-center",children:[(0,a.jsx)("img",{className:"h-7",src:"/logo.svg",alt:"E. logo"}),(0,a.jsx)("p",{className:"text-gray-300 text-lg lg:w-[40ch] pt-3",children:"\xa9 This website was built by Eashaan Th4kur. All rights reserved."})]}),(0,a.jsx)("div",{className:"gap-2 grid grid-cols-3 h-12 items-start justify-items-start text-gray-300 w-2/5",children:(0,a.jsx)(l,{text:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(j.RVq,{})}),invert:!0,href:"https://github.com/th4kur",blank:!0})})]}),(0,a.jsx)("ul",{className:"lg:h-3/4 lg:justify-self-center"}),(0,a.jsxs)("ul",{className:"lg:h-3/4 lg:justify-self-end w-1/2",children:[(0,a.jsx)("li",{className:"font-medium mb-3 sm:mb-6 text-hero-dark text-xl",children:"Quick Links"}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)(i.default,{href:"#about",children:(0,a.jsx)("a",{className:"hover:text-gray-500 text-gray-300 text-lg transition-colors",children:"About"})})}),(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)(i.default,{href:"#projects",children:(0,a.jsx)("a",{className:"hover:text-gray-500 text-gray-300 text-lg transition-colors",children:"Projects"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"#contact",children:(0,a.jsx)("a",{className:"hover:text-gray-500 text-gray-300 text-lg transition-colors",children:"Contact"})})})]}),(0,a.jsxs)("ul",{className:"lg:h-3/4 lg:justify-self-center",children:[(0,a.jsx)("li",{className:"font-medium mb-3 sm:mb-6 text-hero-dark text-xl",children:"Contact Me"}),(0,a.jsx)("li",{className:"mb-2 text-gray-300 text-lg",children:"Email: max910payne@gmail.com"})]})]})},Q=function(e){var t=e.text,s=e.href;return(0,a.jsx)("a",{className:"drop-shadow text-white bg-hero hover:bg-hero-dark btn",href:s,children:t})},Z=s(6835),K=s(8193),ee=[{name:"Home",href:"/"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];function te(){return(0,a.jsx)("nav",{className:"fixed inset-x-0 top-0 container mx-auto z-[200]",children:(0,a.jsx)("div",{className:"bg-dark text-2xl font-light leading-none px-2 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"relative flex items-center justify-between justify-items-stretch h-16",children:[(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/logo.svg",alt:"logo",height:35,width:35})})}),(0,a.jsx)("ul",{className:"list-none grid-cols-4 gap-4 items-center justify-items-center sm:grid hidden",children:ee.map((function(e,t){var s=e.name,r=e.href;return(0,a.jsx)("li",{children:(0,a.jsx)(l,{text:s,href:r})},t)}))}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"hidden sm:block",children:(0,a.jsx)(Q,{text:"Portfolio",href:"/portfolio"})}),(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsx)("div",{className:"w-full max-w-sm px-4",children:(0,a.jsx)(Z.J,{className:"relative",children:function(e){var t=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Z.J.Button,{className:"\n                ".concat(t?"":"text-opacity-90","\n                text-white group"),children:(0,a.jsx)("span",{children:(0,a.jsx)(K.qTj,{className:"text-lg"})})}),(0,a.jsx)(C.u,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,a.jsx)(Z.J.Panel,{className:"absolute z-10 w-screen max-w-[15rem] px-4 mt-3 right-0 translate-x-6 sm:px-0 lg:max-w-3xl",children:(0,a.jsx)("div",{className:"bg-dark-4 h-[10vh] grid place-content-center text-center text-gray-200 text-lg p-3",children:(0,a.jsx)("span",{className:"text-hero",children:"Currently working on it,"})})})})]})}})})})]})]})})})}function se(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.default,{children:[(0,a.jsx)("link",{rel:"shortcut icon",href:"/logo.svg"}),(0,a.jsx)("title",{children:"Home - Eashaan's Portfolio"})]}),(0,a.jsx)(te,{}),(0,a.jsx)(m,{}),(0,a.jsx)(p,{}),(0,a.jsx)(V,{}),(0,a.jsx)(S,{}),(0,a.jsx)(G,{}),(0,a.jsx)(Y,{}),(0,a.jsx)(J.default,{src:"../utils/redirect.js",strategy:"beforeInteractive"})]})}},2510:function(e){e.exports={textShadow:"Form_textShadow__b69_l"}}},function(e){e.O(0,[415,228,260,980,445,921,955,13,874,617,224,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);