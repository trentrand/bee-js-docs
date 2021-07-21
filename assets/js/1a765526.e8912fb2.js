(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[8097],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1156:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),s={id:"utils.eth.ethtoswarmaddress",title:"Function: ethToSwarmAddress",sidebar_label:"ethToSwarmAddress",custom_edit_url:null},o=void 0,l={unversionedId:"api/functions/utils.eth.ethtoswarmaddress",id:"api/functions/utils.eth.ethtoswarmaddress",isDocsHomePage:!1,title:"Function: ethToSwarmAddress",description:"Utils.Eth.ethToSwarmAddress",source:"@site/docs/api/functions/utils.eth.ethtoswarmaddress.md",sourceDirName:"api/functions",slug:"/api/functions/utils.eth.ethtoswarmaddress",permalink:"/docs/api/functions/utils.eth.ethtoswarmaddress",editUrl:null,version:"current",frontMatter:{id:"utils.eth.ethtoswarmaddress",title:"Function: ethToSwarmAddress",sidebar_label:"ethToSwarmAddress",custom_edit_url:null},sidebar:"Balls",previous:{title:"prepareWebsocketData",permalink:"/docs/api/functions/utils.data.preparewebsocketdata"},next:{title:"fromLittleEndian",permalink:"/docs/api/functions/utils.eth.fromlittleendian"}},d=[],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".ethToSwarmAddress"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ethToSwarmAddress"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ethAddress"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.eth.overlayaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"OverlayAddress"))),(0,i.kt)("p",null,"Get swarm overlay address from public ethereum address and swarm network id"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ethAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/utils.hex.hexstring"},(0,i.kt)("inlineCode",{parentName:"a"},"HexString"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/types/utils.eth.hexethaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"HexEthAddress"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Public ethereum address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"networkId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Swarm network id")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/types/utils.eth.overlayaddress"},(0,i.kt)("inlineCode",{parentName:"a"},"OverlayAddress"))),(0,i.kt)("p",null,"Swarm overlay address"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/6f227e1/src/utils/eth.ts#L162"},"bee-js/src/utils/eth.ts:162")))}u.isMDXComponent=!0}}]);