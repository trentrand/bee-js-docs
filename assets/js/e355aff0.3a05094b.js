(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[8246],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4717:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={id:"batchid",title:"Type alias: BatchId",sidebar_label:"BatchId",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/types/batchid",id:"api/types/batchid",isDocsHomePage:!1,title:"Type alias: BatchId",description:"\u01ac BatchId: HexString",source:"@site/docs/api/types/batchid.md",sourceDirName:"api/types",slug:"/api/types/batchid",permalink:"/docs/api/types/batchid",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"batchid",title:"Type alias: BatchId",sidebar_label:"BatchId",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"AnyJson",permalink:"/docs/api/types/anyjson"},next:{title:"BrandedString",permalink:"/docs/api/types/brandedstring"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"BatchId"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},(0,a.kt)("inlineCode",{parentName:"a"},"HexString")),"<typeof ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/variables/batch_id_hex_length"},(0,a.kt)("inlineCode",{parentName:"a"},"BATCH_ID_HEX_LENGTH")),">"),(0,a.kt)("p",null,"BatchId is result of keccak256 hash so 64 hex string without prefix."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/types/index.ts#L53"},"bee-js/src/types/index.ts:53")))}u.isMDXComponent=!0}}]);