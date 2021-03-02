(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(167)),c={id:"allsettlements",title:"Interface: AllSettlements",sidebar_label:"AllSettlements",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/allsettlements",id:"api/interfaces/allsettlements",isDocsHomePage:!1,title:"Interface: AllSettlements",description:"Interface: AllSettlements",source:"@site/docs/api/interfaces/allsettlements.md",slug:"/api/interfaces/allsettlements",permalink:"/docs/api/interfaces/allsettlements",editUrl:null,version:"current",sidebar_label:"AllSettlements",sidebar:"Balls",previous:{title:"Interface: FlexBytes<Min, Max>",permalink:"/docs/api/interfaces/utils.bytes.flexbytes"},next:{title:"Interface: BalanceResponse",permalink:"/docs/api/interfaces/balanceresponse"}},i=[{value:"Properties",id:"properties",children:[{value:"settlements",id:"settlements",children:[]},{value:"totalreceived",id:"totalreceived",children:[]},{value:"totalsent",id:"totalsent",children:[]}]}],o={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"interface-allsettlements"},"Interface: AllSettlements"),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"settlements"},"settlements"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"settlements"),": ",Object(l.b)("a",{parentName:"p",href:"/docs/api/interfaces/settlements"},Object(l.b)("em",{parentName:"a"},"Settlements")),"[]"),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/debug.ts#L10"},"bee-js/src/types/debug.ts:10")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"totalreceived"},"totalreceived"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"totalreceived"),": ",Object(l.b)("em",{parentName:"p"},"number")),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/debug.ts#L8"},"bee-js/src/types/debug.ts:8")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"totalsent"},"totalsent"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"totalsent"),": ",Object(l.b)("em",{parentName:"p"},"number")),Object(l.b)("p",null,"Defined in: ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/7dfd556/src/types/debug.ts#L9"},"bee-js/src/types/debug.ts:9")))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||l;return n?a.a.createElement(f,s(s({ref:t},o),{},{components:n})):a.a.createElement(f,s({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);