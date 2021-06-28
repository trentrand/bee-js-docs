(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[1918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(p,".").concat(f)]||c[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),l={id:"utils.eth.tolittleendian",title:"Function: toLittleEndian",sidebar_label:"toLittleEndian",custom_edit_url:null},o=void 0,p={unversionedId:"api/functions/utils.eth.tolittleendian",id:"api/functions/utils.eth.tolittleendian",isDocsHomePage:!1,title:"Function: toLittleEndian",description:"Utils.Eth.toLittleEndian",source:"@site/docs/api/functions/utils.eth.tolittleendian.md",sourceDirName:"api/functions",slug:"/api/functions/utils.eth.tolittleendian",permalink:"/docs/api/functions/utils.eth.tolittleendian",editUrl:null,version:"current",frontMatter:{id:"utils.eth.tolittleendian",title:"Function: toLittleEndian",sidebar_label:"toLittleEndian",custom_edit_url:null},sidebar:"Balls",previous:{title:"makeHexEthAddress",permalink:"/docs/api/functions/utils.eth.makehexethaddress"},next:{title:"fileArrayBuffer",permalink:"/docs/api/functions/utils.file.filearraybuffer"}},u=[],d={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".toLittleEndian"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toLittleEndian"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"bigEndian"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pad?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},(0,a.kt)("inlineCode",{parentName:"a"},"HexString"))," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"Convert big-endian hex or number to little-endian.\nNote: Before conversion it is automatically padded to even length hexstring"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"bigEndian")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/types/utils.hex.hexstring"},(0,a.kt)("inlineCode",{parentName:"a"},"HexString"))),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Big-endian hex string or number to convert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pad")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"2")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Length to which the string should be padded before conversion (defaul: 2)")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},(0,a.kt)("inlineCode",{parentName:"a"},"HexString"))," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"never")),(0,a.kt)("p",null,"little-endian encoded hexstring"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0e69ca1/src/utils/eth.ts#L106"},"bee-js/src/utils/eth.ts:106")))}s.isMDXComponent=!0}}]);