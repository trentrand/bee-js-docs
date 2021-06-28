(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[7552],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),y=s,m=f["".concat(o,".").concat(y)]||f[y]||p[y]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5370:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(2122),s=n(9756),i=(n(7294),n(3905)),a={id:"utils.bytes",title:"Namespace: Bytes",sidebar_label:"Bytes",custom_edit_url:null},l=void 0,o={unversionedId:"api/modules/utils.bytes",id:"api/modules/utils.bytes",isDocsHomePage:!1,title:"Namespace: Bytes",description:"Utils.Bytes",source:"@site/docs/api/modules/utils.bytes.md",sourceDirName:"api/modules",slug:"/api/modules/utils.bytes",permalink:"/docs/api/modules/utils.bytes",editUrl:null,version:"current",frontMatter:{id:"utils.bytes",title:"Namespace: Bytes",sidebar_label:"Bytes",custom_edit_url:null},sidebar:"Balls",previous:{title:"Utils",permalink:"/docs/api/modules/utils"},next:{title:"Collections",permalink:"/docs/api/modules/utils.collections"}},u=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".Bytes"),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils.bytes.bytes"},"Bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/utils.bytes.flexbytes"},"FlexBytes"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.assertbytes"},"assertBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.assertflexbytes"},"assertFlexBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.bytesatoffset"},"bytesAtOffset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.bytesequal"},"bytesEqual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.flexbytesatoffset"},"flexBytesAtOffset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.isbytes"},"isBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.isflexbytes"},"isFlexBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.makebytes"},"makeBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/functions/utils.bytes.wrapbyteswithhelpers"},"wrapBytesWithHelpers"))))}p.isMDXComponent=!0}}]);