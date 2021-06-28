(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[4867],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4072:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={id:"utils.eth.makeethereumwalletsigner",title:"Function: makeEthereumWalletSigner",sidebar_label:"makeEthereumWalletSigner",custom_edit_url:null},o=void 0,s={unversionedId:"api/functions/utils.eth.makeethereumwalletsigner",id:"api/functions/utils.eth.makeethereumwalletsigner",isDocsHomePage:!1,title:"Function: makeEthereumWalletSigner",description:"Utils.Eth.makeEthereumWalletSigner",source:"@site/docs/api/functions/utils.eth.makeethereumwalletsigner.md",sourceDirName:"api/functions",slug:"/api/functions/utils.eth.makeethereumwalletsigner",permalink:"/docs/api/functions/utils.eth.makeethereumwalletsigner",editUrl:null,version:"current",frontMatter:{id:"utils.eth.makeethereumwalletsigner",title:"Function: makeEthereumWalletSigner",sidebar_label:"makeEthereumWalletSigner",custom_edit_url:null},sidebar:"Balls",previous:{title:"makeEthAddress",permalink:"/docs/api/functions/utils.eth.makeethaddress"},next:{title:"makeHexEthAddress",permalink:"/docs/api/functions/utils.eth.makehexethaddress"}},p=[],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".makeEthereumWalletSigner"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"makeEthereumWalletSigner"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ethAddress?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/signer"},(0,i.kt)("inlineCode",{parentName:"a"},"Signer")),">"),(0,i.kt)("p",null,"Function that takes Ethereum EIP-1193 compatible provider and create an Signer instance that\nuses ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign")," method to sign requested data."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/utils.eth.jsonrpc"},(0,i.kt)("inlineCode",{parentName:"a"},"JsonRPC"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Injected web3 provider like window.ethereum or other compatible with EIP-1193")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ethAddress?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/utils.hex.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/utils.eth.hexethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"HexEthAddress"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional address of the account which the data should be signed with. If not specified ",(0,i.kt)("inlineCode",{parentName:"td"},"eth_requestAccounts")," request is used to get the account address.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/signer"},(0,i.kt)("inlineCode",{parentName:"a"},"Signer")),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/eth.ts#L192"},"bee-js/src/utils/eth.ts:192")))}c.isMDXComponent=!0}}]);