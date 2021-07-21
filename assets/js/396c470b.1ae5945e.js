(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[7062],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,x=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(x,o(o({ref:t},p),{},{components:r})):n.createElement(x,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1819:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={id:"utils.hex.isprefixedhexstring",title:"Function: isPrefixedHexString",sidebar_label:"isPrefixedHexString",custom_edit_url:null},s=void 0,l={unversionedId:"api/functions/utils.hex.isprefixedhexstring",id:"api/functions/utils.hex.isprefixedhexstring",isDocsHomePage:!1,title:"Function: isPrefixedHexString",description:"Utils.Hex.isPrefixedHexString",source:"@site/docs/api/functions/utils.hex.isprefixedhexstring.md",sourceDirName:"api/functions",slug:"/api/functions/utils.hex.isprefixedhexstring",permalink:"/docs/api/functions/utils.hex.isprefixedhexstring",editUrl:null,version:"current",frontMatter:{id:"utils.hex.isprefixedhexstring",title:"Function: isPrefixedHexString",sidebar_label:"isPrefixedHexString",custom_edit_url:null},sidebar:"Balls",previous:{title:"isHexString",permalink:"/docs/api/functions/utils.hex.ishexstring"},next:{title:"makeHexString",permalink:"/docs/api/functions/utils.hex.makehexstring"}},u=[],p={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".isPrefixedHexString"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isPrefixedHexString"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"): s is PrefixedHexString"),(0,a.kt)("p",null,"Type guard for PrefixedHexStrings.\nDoes enforce presence of 0x prefix!"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"s")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string input")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"s is PrefixedHexString"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/hex.ts#L144"},"bee-js/src/utils/hex.ts:144")))}c.isMDXComponent=!0}}]);