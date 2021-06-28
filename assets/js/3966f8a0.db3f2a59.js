(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[9014],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,b=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6278:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={id:"cashoutresult",title:"Interface: CashoutResult",sidebar_label:"CashoutResult",sidebar_position:0,custom_edit_url:null},s=void 0,u={unversionedId:"api/interfaces/cashoutresult",id:"api/interfaces/cashoutresult",isDocsHomePage:!1,title:"Interface: CashoutResult",description:"Properties",source:"@site/docs/api/interfaces/cashoutresult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/cashoutresult",permalink:"/docs/api/interfaces/cashoutresult",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"cashoutresult",title:"Interface: CashoutResult",sidebar_label:"CashoutResult",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"CashoutOptions",permalink:"/docs/api/interfaces/cashoutoptions"},next:{title:"ChainState",permalink:"/docs/api/interfaces/chainstate"}},c=[{value:"Properties",id:"properties",children:[{value:"bounced",id:"bounced",children:[]},{value:"lastPayout",id:"lastpayout",children:[]},{value:"recipient",id:"recipient",children:[]}]}],p={toc:c};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"bounced"},"bounced"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bounced"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L52"},"bee-js/src/types/debug.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastpayout"},"lastPayout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lastPayout"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/numberstring"},(0,a.kt)("inlineCode",{parentName:"a"},"NumberString"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L51"},"bee-js/src/types/debug.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"recipient"},"recipient"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"recipient"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/types/debug.ts#L50"},"bee-js/src/types/debug.ts:50")))}l.isMDXComponent=!0}}]);