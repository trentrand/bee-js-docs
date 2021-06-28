(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[7874],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9779:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s={id:"utils.eth.makehexethaddress",title:"Function: makeHexEthAddress",sidebar_label:"makeHexEthAddress",custom_edit_url:null},o=void 0,l={unversionedId:"api/functions/utils.eth.makehexethaddress",id:"api/functions/utils.eth.makehexethaddress",isDocsHomePage:!1,title:"Function: makeHexEthAddress",description:"Utils.Eth.makeHexEthAddress",source:"@site/docs/api/functions/utils.eth.makehexethaddress.md",sourceDirName:"api/functions",slug:"/api/functions/utils.eth.makehexethaddress",permalink:"/docs/api/functions/utils.eth.makehexethaddress",editUrl:null,version:"current",frontMatter:{id:"utils.eth.makehexethaddress",title:"Function: makeHexEthAddress",sidebar_label:"makeHexEthAddress",custom_edit_url:null},sidebar:"Balls",previous:{title:"makeEthereumWalletSigner",permalink:"/docs/api/functions/utils.eth.makeethereumwalletsigner"},next:{title:"toLittleEndian",permalink:"/docs/api/functions/utils.eth.tolittleendian"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".makeHexEthAddress"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"makeHexEthAddress"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.eth.hexethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"HexEthAddress"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/utils.eth.ethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"EthAddress"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.eth.hexethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"HexEthAddress"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/eth.ts#L27"},"bee-js/src/utils/eth.ts:27")))}p.isMDXComponent=!0}}]);