"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{5319:function(e,n,t){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{p:function(){return R}});var l,i,s,c=t(7294);function d(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof t?t.apply(void 0,o):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,d),u}function f(e){var n=e.props,t=e.slot,a=e.defaultTag,u=e.features,s=e.visible,c=void 0===s||s,f=e.name;if(c)return p(n,t,a,f);var v=null!=u?u:l.None;if(v&l.Static){var m=n.static,g=void 0!==m&&m,y=o(n,["static"]);if(g)return p(y,t,a,f)}if(v&l.RenderStrategy){var b,E=n.unmount,S=void 0===E||E,h=o(n,["unmount"]);return d(S?i.Unmount:i.Hidden,((b={})[i.Unmount]=function(){return null},b[i.Hidden]=function(){return p(r({},h,{hidden:!0,style:{display:"none"}}),t,a,f)},b))}return p(n,t,a,f)}function p(e,n,t,r){var a;void 0===n&&(n={});var l=m(e,["unmount","static"]),i=l.as,s=void 0===i?t:i,d=l.children,f=l.refName,p=void 0===f?"ref":f,v=o(l,["as","children","refName"]),g=void 0!==e.ref?((a={})[p]=e.ref,a):{},y="function"===typeof d?d(n):d;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),s===c.Fragment&&Object.keys(v).length>0){if(!(0,c.isValidElement)(y)||Array.isArray(y)&&y.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,c.cloneElement)(y,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},l=u(t);!(r=l()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(m(v,["ref"])),y.props,["onClick"]),g))}return(0,c.createElement)(s,Object.assign({},m(v,["ref"]),s!==c.Fragment&&g),y)}function v(e){var n;return Object.assign((0,c.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function m(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=u(n);!(t=o()).done;){var a=t.value;a in r&&delete r[a]}return r}function g(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,c.useRef)(n);return(0,c.useEffect)((function(){r.current=n}),[n]),(0,c.useCallback)((function(e){for(var n,t=u(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function y(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(l||(l={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(i||(i={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(s||(s={}));var b="undefined"!==typeof window?c.useLayoutEffect:c.useEffect,E={serverHandoffComplete:!1};var S=0;function h(){return++S}function w(){var e=function(){var e=(0,c.useState)(E.serverHandoffComplete),n=e[0],t=e[1];return(0,c.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,c.useEffect)((function(){!1===E.serverHandoffComplete&&(E.serverHandoffComplete=!0)}),[]),n}(),n=(0,c.useState)(e?h:null),t=n[0],r=n[1];return b((function(){null===t&&r(h())}),[t]),null!=t?""+t:void 0}var C,k,P,O,I=(0,c.createContext)(null);function T(e){var n=e.value,t=e.children;return c.createElement(I.Provider,{value:n},t)}function D(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}I.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(C||(C={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(P||(P={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(O||(O={}));var j=((k={})[O.ToggleDisclosure]=function(e){var n;return r({},e,{disclosureState:d(e.disclosureState,(n={},n[P.Open]=P.Closed,n[P.Closed]=P.Open,n))})},k[O.CloseDisclosure]=function(e){return e.disclosureState===P.Closed?e:r({},e,{disclosureState:P.Closed})},k[O.LinkPanel]=function(e){return!0===e.linkedPanel?e:r({},e,{linkedPanel:!0})},k[O.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:r({},e,{linkedPanel:!1})},k[O.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:r({},e,{buttonId:n.buttonId})},k[O.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:r({},e,{panelId:n.panelId})},k),A=(0,c.createContext)(null);function x(e){var n=(0,c.useContext)(A);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+R.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return n}A.displayName="DisclosureContext";var H=(0,c.createContext)(null);function L(e){var n=(0,c.useContext)(H);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+R.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return n}H.displayName="DisclosureAPIContext";var N=(0,c.createContext)(null);function U(e,n){return d(n.type,j,e,n)}N.displayName="DisclosurePanelContext";var B=c.Fragment;function R(e){var n,t=e.defaultOpen,r=void 0!==t&&t,a=o(e,["defaultOpen"]),u="headlessui-disclosure-button-"+w(),l="headlessui-disclosure-panel-"+w(),i=(0,c.useReducer)(U,{disclosureState:r?P.Open:P.Closed,linkedPanel:!1,buttonId:u,panelId:l}),s=i[0].disclosureState,p=i[1];(0,c.useEffect)((function(){return p({type:O.SetButtonId,buttonId:u})}),[u,p]),(0,c.useEffect)((function(){return p({type:O.SetPanelId,panelId:l})}),[l,p]);var v=(0,c.useCallback)((function(e){p({type:O.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(u):document.getElementById(u);null==n||n.focus()}),[p,u]),m=(0,c.useMemo)((function(){return{close:v}}),[v]),g=(0,c.useMemo)((function(){return{open:s===P.Open,close:v}}),[s,v]);return c.createElement(A.Provider,{value:i},c.createElement(H.Provider,{value:m},c.createElement(T,{value:d(s,(n={},n[P.Open]=C.Open,n[P.Closed]=C.Closed,n))},f({props:a,slot:g,defaultTag:B,name:"Disclosure"}))))}var M=v((function e(n,t){var o=x([R.name,e.name].join(".")),a=o[0],u=o[1],l=(0,c.useRef)(null),i=g(l,t),d=(0,c.useContext)(N),p=null!==d&&d===a.panelId,v=(0,c.useCallback)((function(e){var n;if(p){if(a.disclosureState===P.Closed)return;switch(e.key){case s.Space:case s.Enter:e.preventDefault(),e.stopPropagation(),u({type:O.ToggleDisclosure}),null==(n=document.getElementById(a.buttonId))||n.focus()}}else switch(e.key){case s.Space:case s.Enter:e.preventDefault(),e.stopPropagation(),u({type:O.ToggleDisclosure})}}),[u,p,a.disclosureState]),m=(0,c.useCallback)((function(e){switch(e.key){case s.Space:e.preventDefault()}}),[]),E=(0,c.useCallback)((function(e){var t;y(e.currentTarget)||(n.disabled||(p?(u({type:O.ToggleDisclosure}),null==(t=document.getElementById(a.buttonId))||t.focus()):u({type:O.ToggleDisclosure})))}),[u,n.disabled,a.buttonId,p]),S=(0,c.useMemo)((function(){return{open:a.disclosureState===P.Open}}),[a]),h=function(e,n){var t=(0,c.useState)((function(){return D(e)})),r=t[0],o=t[1];return b((function(){o(D(e))}),[e.type,e.as]),b((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,l);return f({props:r({},n,p?{ref:i,type:h,onKeyDown:v,onClick:E}:{ref:i,id:a.buttonId,type:h,"aria-expanded":n.disabled?void 0:a.disclosureState===P.Open,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:v,onKeyUp:m,onClick:E}),slot:S,defaultTag:"button",name:"Disclosure.Button"})})),F=l.RenderStrategy|l.Static,_=v((function e(n,t){var o=x([R.name,e.name].join(".")),a=o[0],u=o[1],l=L([R.name,e.name].join(".")).close,i=g(t,(function(){a.linkedPanel||u({type:O.LinkPanel})})),s=(0,c.useContext)(I),d=null!==s?s===C.Open:a.disclosureState===P.Open;(0,c.useEffect)((function(){return function(){return u({type:O.UnlinkPanel})}}),[u]),(0,c.useEffect)((function(){var e;a.disclosureState!==P.Closed||null!=(e=n.unmount)&&!e||u({type:O.UnlinkPanel})}),[a.disclosureState,n.unmount,u]);var p=(0,c.useMemo)((function(){return{open:a.disclosureState===P.Open,close:l}}),[a,l]),v={ref:i,id:a.panelId},m=n;return c.createElement(N.Provider,{value:a.panelId},f({props:r({},m,v),slot:p,defaultTag:"div",features:F,visible:d,name:"Disclosure.Panel"}))}));R.Button=M,R.Panel=_},3153:function(e,n,t){t.d(n,{g8U:function(){return o}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),r.createElement("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}))}}}]);