(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[3311],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,x=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(x,o(o({ref:t},u),{},{components:r})):n.createElement(x,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8664:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={id:"utils.hex.prefixedhexstring",title:"Type alias: PrefixedHexString",sidebar_label:"PrefixedHexString",custom_edit_url:null},s=void 0,p={unversionedId:"api/types/utils.hex.prefixedhexstring",id:"api/types/utils.hex.prefixedhexstring",isDocsHomePage:!1,title:"Type alias: PrefixedHexString",description:"Utils.Hex.PrefixedHexString",source:"@site/docs/api/types/utils.hex.prefixedhexstring.md",sourceDirName:"api/types",slug:"/api/types/utils.hex.prefixedhexstring",permalink:"/docs/api/types/utils.hex.prefixedhexstring",editUrl:null,version:"current",frontMatter:{id:"utils.hex.prefixedhexstring",title:"Type alias: PrefixedHexString",sidebar_label:"PrefixedHexString",custom_edit_url:null},sidebar:"Balls",previous:{title:"HexString",permalink:"/docs/api/types/utils.hex.hexstring"},next:{title:"ADDRESS_HEX_LENGTH",permalink:"/docs/api/variables/address_hex_length"}},l=[],u={toc:l};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".PrefixedHexString"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"PrefixedHexString"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/brandedtype"},(0,a.kt)("inlineCode",{parentName:"a"},"BrandedType")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"PrefixedHexString"'),">"),(0,a.kt)("p",null,"Type for HexString with prefix.\nThe main hex type used internally should be non-prefixed HexString\nand therefore this type should be used as least as possible.\nBecause of that it does not contain the Length property as the variables\nshould be validated and converted to HexString ASAP."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/hex.ts#L23"},"bee-js/src/utils/hex.ts:23")))}c.isMDXComponent=!0}}]);