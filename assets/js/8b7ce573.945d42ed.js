(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[4160],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(9443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var d=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,p=e.groupId,m=e.className,g=o(),f=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,n.useState)(r),k=v[0],b=v[1],w=n.Children.toArray(e.children),y=[];if(null!=p){var N=f[p];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&b(N)}var T=function(e){var t=e.currentTarget,a=y.indexOf(t),n=d[a].value;b(n),null!=p&&(h(p,n),setTimeout((function(){var e,a,n,r,o,i,l,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case u:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},6917:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(5064),l=a(8215),s={title:"Track Upload Status",id:"track-upload",slug:"/track-upload",sidebar_label:"Track Upload"},u=void 0,c={unversionedId:"user-documentation/track-upload",id:"user-documentation/track-upload",isDocsHomePage:!1,title:"Track Upload Status",description:"In Swarm, an instruction to upload data to the network goes through 3 consecutive stages before it is completed:",source:"@site/docs/user-documentation/track-upload.md",sourceDirName:"user-documentation",slug:"/track-upload",permalink:"/docs/track-upload",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/user-documentation/track-upload.md",version:"current",frontMatter:{title:"Track Upload Status",id:"track-upload",slug:"/track-upload",sidebar_label:"Track Upload"},sidebar:"Balls",previous:{title:"Upload and Download",permalink:"/docs/upload-download"},next:{title:"Postal Service over Swarm",permalink:"/docs/pss"}},d=[{value:"What is a tag",id:"what-is-a-tag",children:[]},{value:"Create tag",id:"create-tag",children:[]},{value:"Upload with tag",id:"upload-with-tag",children:[]},{value:"Retrieve tag",id:"retrieve-tag",children:[]}],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Swarm, an instruction to upload data to the network goes through 3 consecutive stages before it is completed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Splitting"),(0,o.kt)("li",{parentName:"ul"},"Storing"),(0,o.kt)("li",{parentName:"ul"},"Sending")),(0,o.kt)("p",null,"In the splitting state, the file is deconstructed in chunks (Swarms canonical data unit) and packaged in a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Binary Merkle Tree"),". After splitting, the chunks are stored in your local database where they enter a queue, to be sent to the network."),(0,o.kt)("p",null,"Sending starts immediately when the first chunks are split and stored. After the chunk is sent, your node will receive a receipt from the node that has stored the chunk, marking the completion of the upload for that chunk. After a receipt has been received for all chunks, the upload is complete."),(0,o.kt)("h2",{id:"what-is-a-tag"},"What is a tag"),(0,o.kt)("p",null,"The status of your upload can be followed by using ",(0,o.kt)("inlineCode",{parentName:"p"},"tags"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," is a label given to all chunks that belong to the same upload instruction. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"bee-js")," library, tag looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Tag {\n  total: number     // the total number of chunks for upload(s) related with this tag\n  processed: number // the total number of chunks stored and queued for sending\n  synced: number    // the total number of chunks that are synced with the network \n\n  uid: number       // a unique identifier for this tag\n  startedAt: string // when the tag was first used\n}\n")),(0,o.kt)("h2",{id:"create-tag"},"Create tag"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Forbidden on Gateways")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a node that is in Gateway mode then this operation is not allowed!"))),(0,o.kt)("p",null,"Creating a tag is easy. Just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createTag")," function."),(0,o.kt)(i.Z,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const tag = await bee.createTag()\n"))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const tag = await bee.createTag()\n")))),(0,o.kt)("h2",{id:"upload-with-tag"},"Upload with tag"),(0,o.kt)("p",null,"You can then use the tag when uploading data, by providing it in the options arguments for each of these methods."),(0,o.kt)(i.Z,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'await bee.uploadData("Bee is awesome!", { tag })\n// OR\nawait bee.uploadFile(file, "foo.txt", { tag })\n// OR\nawait bee.uploadFiles(files, { tag })\n// OR\nawait bee.uploadFilesToCollection("./", true, { tag })\n'))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await bee.uploadData("Bee is awesome!", { tag })\n// OR\nawait bee.uploadFile(file, "foo.txt", { tag })\n// OR\nawait bee.uploadFiles(files, { tag })\n// OR\nawait bee.uploadFilesToCollection("./", true, { tag })\n')))),(0,o.kt)("h2",{id:"retrieve-tag"},"Retrieve tag"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Forbidden on Gateways")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a node that is in Gateway mode then this operation is not allowed!"))),(0,o.kt)("p",null,"Each time you want to check the upload status, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"retrieveTag")," function."),(0,o.kt)(i.Z,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const updatedTag = await bee.retrieveTag(tag)\n// OR\nconst updatedTag = await bee.retrieveTag(tag.uid)\n"))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const updatedTag = await bee.retrieveTag(tag)\n// OR\nconst updatedTag = await bee.retrieveTag(tag.uid)\n")))))}m.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);