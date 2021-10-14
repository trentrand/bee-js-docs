(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[6688],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3706:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"reference",title:"Type alias: Reference",sidebar_label:"Reference",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/types/reference",id:"api/types/reference",isDocsHomePage:!1,title:"Type alias: Reference",description:"\u01ac Reference: HexString \\| HexString",source:"@site/docs/api/types/reference.md",sourceDirName:"api/types",slug:"/api/types/reference",permalink:"/docs/api/types/reference",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"reference",title:"Type alias: Reference",sidebar_label:"Reference",sidebar_position:0,custom_edit_url:null},sidebar:"Balls",previous:{title:"Readable",permalink:"/docs/api/types/readable"},next:{title:"Signature",permalink:"/docs/api/types/signature"}},s=[],l={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Reference"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString")),"<typeof ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/variables/reference_hex_length"},(0,i.kt)("inlineCode",{parentName:"a"},"REFERENCE_HEX_LENGTH")),">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString")),"<typeof ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/variables/encrypted_reference_hex_length"},(0,i.kt)("inlineCode",{parentName:"a"},"ENCRYPTED_REFERENCE_HEX_LENGTH")),">"),(0,i.kt)("p",null,"Generic reference that can be either non-encrypted reference which is a hex string of length 64 or encrypted\nreference which is a hex string of length 128."),(0,i.kt)("p",null,"Encrypted reference consists of two parts. The reference address itself (like non-encrypted reference) and decryption key."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/access-the-swarm/store-with-encryption"},"Bee docs - Store with Encryption")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/ae6a776/src/types/index.ts#L53"},"bee-js/src/types/index.ts:53")))}f.isMDXComponent=!0}}]);