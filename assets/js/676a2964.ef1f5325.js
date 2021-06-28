(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[4282],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1387:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s={id:"allsettlements",title:"Interface: AllSettlements",sidebar_label:"AllSettlements",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/allsettlements",id:"api/interfaces/allsettlements",isDocsHomePage:!1,title:"Interface: AllSettlements",description:"Properties",source:"@site/docs/api/interfaces/allsettlements.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/allsettlements",permalink:"/docs/api/interfaces/allsettlements",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"allsettlements",title:"Interface: AllSettlements",sidebar_label:"AllSettlements",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"BeeResponseError",permalink:"/docs/api/classes/beeresponseerror"},next:{title:"BalanceResponse",permalink:"/docs/api/interfaces/balanceresponse"}},c=[{value:"Properties",id:"properties",children:[{value:"settlements",id:"settlements",children:[]},{value:"totalReceived",id:"totalreceived",children:[]},{value:"totalSent",id:"totalsent",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"settlements"},"settlements"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"settlements"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/settlements"},(0,i.kt)("inlineCode",{parentName:"a"},"Settlements")),"[]"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L13"},"bee-js/src/types/debug.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"totalreceived"},"totalReceived"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"totalReceived"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/numberstring"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberString"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L11"},"bee-js/src/types/debug.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"totalsent"},"totalSent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"totalSent"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/numberstring"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberString"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L12"},"bee-js/src/types/debug.ts:12")))}u.isMDXComponent=!0}}]);