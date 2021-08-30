(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[692],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,k=f["".concat(o,".").concat(m)]||f[m]||c[m]||i;return r?n.createElement(k,p(p({ref:t},s),{},{components:r})):n.createElement(k,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1850:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),p={id:"feedwriter",title:"Interface: FeedWriter",sidebar_label:"FeedWriter",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"api/interfaces/feedwriter",id:"api/interfaces/feedwriter",isDocsHomePage:!1,title:"Interface: FeedWriter",description:"FeedWriter is an interface for updating feeds",source:"@site/docs/api/interfaces/feedwriter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/feedwriter",permalink:"/docs/api/interfaces/feedwriter",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"feedwriter",title:"Interface: FeedWriter",sidebar_label:"FeedWriter",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"FeedReader",permalink:"/docs/api/interfaces/feedreader"},next:{title:"FileData",permalink:"/docs/api/interfaces/filedata"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"owner",id:"owner",children:[]},{value:"topic",id:"topic",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"download",id:"download",children:[]},{value:"upload",id:"upload",children:[]}]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FeedWriter is an interface for updating feeds"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader"},(0,i.kt)("inlineCode",{parentName:"a"},"FeedReader"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"FeedWriter"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.eth.hexethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"HexEthAddress"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader"},"FeedReader"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader#owner"},"owner")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L292"},"bee-js/src/types/index.ts:292")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topic"},"topic"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"topic"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/topic"},(0,i.kt)("inlineCode",{parentName:"a"},"Topic"))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader"},"FeedReader"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader#topic"},"topic")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L293"},"bee-js/src/types/index.ts:293")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"sequence"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"epoch"')),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader"},"FeedReader"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader#type"},"type")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L291"},"bee-js/src/types/index.ts:291")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"download"},"download"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"download"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FetchFeedUpdateResponse"),">"),(0,i.kt)("p",null,"Download the latest feed update"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FeedUpdateOptions"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FetchFeedUpdateResponse"),">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader"},"FeedReader"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/feedreader#download"},"download")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L297"},"bee-js/src/types/index.ts:297")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"upload"},"upload"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"upload"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"postageBatchId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/reference"},(0,i.kt)("inlineCode",{parentName:"a"},"Reference")),">"),(0,i.kt)("p",null,"Upload a new feed update"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"postageBatchId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/batchid"},(0,i.kt)("inlineCode",{parentName:"a"},"BatchId"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Postage BatchId to be used to upload the data with")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/reference"},(0,i.kt)("inlineCode",{parentName:"a"},"Reference"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"ChunkReference")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The reference to be stored in the new update")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FeedUploadOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional options like ",(0,i.kt)("inlineCode",{parentName:"td"},"at"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/reference"},(0,i.kt)("inlineCode",{parentName:"a"},"Reference")),">"),(0,i.kt)("p",null,"Reference that points at Single Owner Chunk that contains the new update and pointer to the updated chunk reference."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/74056cb/src/types/index.ts#L329"},"bee-js/src/types/index.ts:329")))}c.isMDXComponent=!0}}]);