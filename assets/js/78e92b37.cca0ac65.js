(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[7239],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6757:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={id:"utils.hex.makehexstring",title:"Function: makeHexString",sidebar_label:"makeHexString",custom_edit_url:null},o=void 0,p={unversionedId:"api/functions/utils.hex.makehexstring",id:"api/functions/utils.hex.makehexstring",isDocsHomePage:!1,title:"Function: makeHexString",description:"Utils.Hex.makeHexString",source:"@site/docs/api/functions/utils.hex.makehexstring.md",sourceDirName:"api/functions",slug:"/api/functions/utils.hex.makehexstring",permalink:"/docs/api/functions/utils.hex.makehexstring",editUrl:null,version:"current",frontMatter:{id:"utils.hex.makehexstring",title:"Function: makeHexString",sidebar_label:"makeHexString",custom_edit_url:null},sidebar:"Balls",previous:{title:"isPrefixedHexString",permalink:"/docs/api/functions/utils.hex.isprefixedhexstring"},next:{title:"clearOnRequest",permalink:"/docs/api/functions/utils.hooks.clearonrequest"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".makeHexString"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"makeHexString"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"L"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"len?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"L"),">"),(0,i.kt)("p",null,"Creates unprefixed hex string from wide range of data."),(0,i.kt)("p",null,"TODO: Make Length mandatory: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/issues/208"},"https://github.com/ethersphere/bee-js/issues/208")),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"L")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"len?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"L")),(0,i.kt)("td",{parentName:"tr",align:"left"},"of the resulting HexString WITHOUT prefix!")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"L"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/hex.ts#L33"},"bee-js/src/utils/hex.ts:33")))}m.isMDXComponent=!0}}]);