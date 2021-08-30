(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[3344],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=l(n),k=r,b=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(b,p(p({ref:t},s),{},{components:n})):a.createElement(b,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),p={id:"topology",title:"Interface: Topology",sidebar_label:"Topology",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"api/interfaces/topology",id:"api/interfaces/topology",isDocsHomePage:!1,title:"Interface: Topology",description:"Properties",source:"@site/docs/api/interfaces/topology.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/topology",permalink:"/docs/api/interfaces/topology",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"topology",title:"Interface: Topology",sidebar_label:"Topology",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"Tag",permalink:"/docs/api/interfaces/tag"},next:{title:"TransactionInfo",permalink:"/docs/api/interfaces/transactioninfo"}},l=[{value:"Properties",id:"properties",children:[{value:"baseAddr",id:"baseaddr",children:[]},{value:"bins",id:"bins",children:[]},{value:"connected",id:"connected",children:[]},{value:"depth",id:"depth",children:[]},{value:"nnLowWatermark",id:"nnlowwatermark",children:[]},{value:"population",id:"population",children:[]},{value:"timestamp",id:"timestamp",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"baseaddr"},"baseAddr"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"baseAddr"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L162"},"bee-js/src/types/debug.ts:162")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bins"},"bins"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bins"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_0")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_10")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_11")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_12")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_13")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_14")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_15")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_2")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_3")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_4")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_5")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_6")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_7")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_8")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bin_9")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/bin"},(0,i.kt)("inlineCode",{parentName:"a"},"Bin")))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L168"},"bee-js/src/types/debug.ts:168")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connected"},"connected"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"connected"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L164"},"bee-js/src/types/debug.ts:164")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depth"},"depth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"depth"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L167"},"bee-js/src/types/debug.ts:167")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nnlowwatermark"},"nnLowWatermark"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nnLowWatermark"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L166"},"bee-js/src/types/debug.ts:166")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"population"},"population"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"population"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L163"},"bee-js/src/types/debug.ts:163")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timestamp"},"timestamp"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/debug.ts#L165"},"bee-js/src/types/debug.ts:165")))}m.isMDXComponent=!0}}]);