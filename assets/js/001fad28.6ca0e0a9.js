(self.webpackChunkbee_js_docs=self.webpackChunkbee_js_docs||[]).push([[7423],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),o="tabItem_1uMI",d="tabItemActive_2DSg";var c=37,l=39;var p=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,u=e.groupId,m=e.className,h=r(),f=h.tabGroupChoices,g=h.setTabGroupChoices,k=(0,a.useState)(i),v=k[0],w=k[1],b=a.Children.toArray(e.children),N=[];if(null!=u){var y=f[u];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&w(y)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;w(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,i,r,s,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,s=window,o=s.innerHeight,c=s.innerWidth,n>=0&&r<=c&&i<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case l:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},1678:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),s=(n(5064),n(8215),{title:"SOC and Feeds",id:"soc-and-feeds",slug:"/soc-and-feeds",sidebar_label:"SOC and Feeds"}),o=void 0,d={unversionedId:"user-documentation/soc-and-feeds",id:"user-documentation/soc-and-feeds",isDocsHomePage:!1,title:"SOC and Feeds",description:"Swarm provides the ability to store content in content-addressed chunks or Single Owner Chunks (SOC). With single owner chunks, a user can assign arbitrary data to an address and attest chunk integrity with their digital signature.",source:"@site/docs/user-documentation/soc-and-feeds.md",sourceDirName:"user-documentation",slug:"/soc-and-feeds",permalink:"/docs/soc-and-feeds",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/user-documentation/soc-and-feeds.md",version:"current",frontMatter:{title:"SOC and Feeds",id:"soc-and-feeds",slug:"/soc-and-feeds",sidebar_label:"SOC and Feeds"},sidebar:"Balls",previous:{title:"Postal Service over Swarm",permalink:"/docs/pss"},next:{title:"Exports",permalink:"/docs/api"}},c=[{value:"Single Owner Chunks",id:"single-owner-chunks",children:[{value:"Reading SOCs",id:"reading-socs",children:[]},{value:"Writing SOCs",id:"writing-socs",children:[]}]},{value:"Feeds",id:"feeds",children:[{value:"Topic",id:"topic",children:[]},{value:"High level JSON API",id:"high-level-json-api",children:[]},{value:"Low level API",id:"low-level-api",children:[]},{value:"Using feed manifest",id:"using-feed-manifest",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Swarm provides the ability to store content in content-addressed chunks or Single Owner Chunks (SOC). With single owner chunks, a user can assign arbitrary data to an address and attest chunk integrity with their digital signature."),(0,r.kt)("p",null,"Feeds are a unique feature of Swarm. They constitute the primary use case for single owner chunks. Developers can use Feeds to version revisions of a mutable resource, indexing sequential updates to a topic, publish the parts to streams, or post consecutive messages in a communication channel. Feeds implement persisted pull-messaging and can also be interpreted as a pub-sub system."),(0,r.kt)("p",null,"Because Feeds are built on top of SOCs, their interfaces are somewhat similar and use common concepts."),(0,r.kt)("h2",{id:"single-owner-chunks"},"Single Owner Chunks"),(0,r.kt)("p",null,"BeeJs calculates a SOC address as the hash of an ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," is a 32 bytes long arbitrary data, usually expected as a hex string or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," is an Ethereum address that consists of 20 bytes in a format of a hex string or  ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SOCs are immutable!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'You might be tempted to modify a SOC\'s content to "update" the chunk. Reuploading of SOC is forbidden in Swarm as it might create uncertain behavior. Bee node will reject the API call if it finds already existing SOC for the given address. Either use a different ',(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),", or you might be looking for Feeds as your use case."))),(0,r.kt)("h3",{id:"reading-socs"},"Reading SOCs"),(0,r.kt)("p",null,"To read data from a SOC, we need to make a reader object bound to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),". Then we can download the data with the provided chunk's ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'\nconst socReader = bee.makeSOCReader(owner)\nconst identifier = '0000000000000000000000000000000000000000000000000000000000000000'\nconst soc = await socReader.download(identifier)\nconst data = soc.payload()\n")),(0,r.kt)("h3",{id:"writing-socs"},"Writing SOCs"),(0,r.kt)("p",null,"When writing a SOC, first, we need to make a writer object. Because we need to sign the chunk, we need to pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"signer")," object. The ",(0,r.kt)("inlineCode",{parentName:"p"},"signer")," object can be either an Ethereum private key (as a hex string or ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),") or an instance of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/types/signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer"))," interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," interface can be used for integration with 3rd party Ethereum wallet applications because Swarm uses the same format for signing chunks that Ethereum uses for signing transactions."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Default ",(0,r.kt)("inlineCode",{parentName:"h5"},"signer"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you are instantiating ",(0,r.kt)("inlineCode",{parentName:"p"},"Bee")," class you can pass it a default signer that will be used if you won't specify it\ndirectly for the ",(0,r.kt)("inlineCode",{parentName:"p"},"makeSOCWriter"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/bee#constructor"},(0,r.kt)("inlineCode",{parentName:"a"},"Bee")," constructor")," for more info."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Ethereum Wallet signers")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to use your browser Ethereum Wallet like Metamask you can use utility called ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/functions/utils.eth.makeethereumwalletsigner"},(0,r.kt)("inlineCode",{parentName:"a"},"makeEthereumWalletSigner")),"  that we ship with bee-js\nwhich creates a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/types/signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer"))," object out of given EIP-1193 compatible provider."),(0,r.kt)("p",{parentName:"div"},"See it used in our example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/examples-js/tree/master/eth-wallet-signing"},"here"),"."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { utils } from '@ethersphere/bee-js'\n\nconst signer = utils.Eth.makeEthereumWalletSigner(window.ethereum)\n...\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SyncSigner = (digest: Data) => Signature | string\ntype AsyncSigner = (digest: Data) => Promise<Signature | string>\n\n/**\n * Interface for implementing Ethereum compatible signing.\n *\n * @property sign     The sign function that can be sync or async\n * @property address  The Ethereum address of the signer\n */\nexport type Signer = {\n  sign: SyncSigner | AsyncSigner\n  address: EthAddress\n}\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Your communication privacy may be at risk")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We suggest using either ephemeral private keys (e.g. randomly generated) or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," interface when writing to SOC or Feeds. Never use your real Ethereum private keys here (or in any web applications really) directly because you may lose your funds stored on it."))),(0,r.kt)("p",null,"Using the writer interface is similar to using the reader:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const postageBatchId = await bee.createPostageBatch(\"100\", 17)\nconst signer = '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd'\nconst socWriter = bee.makeSOCWriter(signer)\nconst identifier = '0000000000000000000000000000000000000000000000000000000000000000'\nconst data = new Uint8Array([1, 2, 3])\nconst response = await socWriter.upload(postageBatchId, identifier, data)\n")),(0,r.kt)("h2",{id:"feeds"},"Feeds"),(0,r.kt)("p",null,"Feeds are an abstraction built on top of SOCs to provide mutable resources on the otherwise immutable data types that Swarm supports."),(0,r.kt)("p",null,"One of the most common use cases for feeds is to store mutable data in an immutable address. For example, when hosting a website on Swarm, we may want its address stored in ENS, but we don't want to pay for changing the reference every time the site is updated."),(0,r.kt)("p",null,"A feed is defined by its ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," (see above), a ",(0,r.kt)("inlineCode",{parentName:"p"},"topic")," (32 bytes arbitrary data as a hex string or ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"), and a ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," defines how the updates and lookup of the feed index are made (currently only the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," type is supported)."),(0,r.kt)("p",null,"The publisher is the owner of the feed, and only they can post updates to the feed. Posting an update requires (1) constructing the identifier from the topic and the correct index and (2) signing it concatenated together with the hash of the arbitrary content of the update."),(0,r.kt)("p",null,"Conversely, users can consume a feed by retrieving the chunk by its address. Retrieving an update requires the consumer to construct the address from the owner\u2019s address and the identifier. To calculate the identifier, they need the topic and the appropriate index. For this, they need to know the indexing scheme."),(0,r.kt)("p",null,"Feeds enable Swarm users to represent a sequence of content updates. The content of the update is the payload that the feed owner signs against the identifier. The payload can be a swarm reference from which the user can retrieve the associated data."),(0,r.kt)("h3",{id:"topic"},"Topic"),(0,r.kt)("p",null,"In Swarm, ",(0,r.kt)("inlineCode",{parentName:"p"},"topic")," is a 32-byte long arbitrary byte array. It's possible to choose an arbitrary topic for each application, and then knowing someone's (or something's) address, it's possible to find their feeds. Also, this can be the hash of a human-readable string, specifying the topic and optionally the subtopic of the feed. There is a helper function provided for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const topic = bee.makeFeedTopic('my-dapp.eth/outbox')\n")),(0,r.kt)("h3",{id:"high-level-json-api"},"High level JSON API"),(0,r.kt)("p",null,"Many applications are storing or manipulating data in JSON. bee-js has convenience high level API to use feeds with JSON objects.\nIt consists of two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/bee#setjsonfeed"},(0,r.kt)("inlineCode",{parentName:"a"},"setJsonFeed"))," method to set JSON compatible data to feed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/bee#getjsonfeed"},(0,r.kt)("inlineCode",{parentName:"a"},"getJsonFeed"))," method to get JSON compatible data (and parse them) from feed")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bee's instance signer")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can pass a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/types/signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer"))," (or compatible data) into ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/bee#constructor"},(0,r.kt)("inlineCode",{parentName:"a"},"Bee")," class constructor"),", which then\nwill be used as default ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const postageBatchId = await bee.createPostageBatch(\"100\", 17)\n\nawait bee.setJsonFeed(\n  postageBatchId,\n  'some cool arbitraty topic', \n  { some: ['cool', { json: 'compatible' }, 'object']}, \n  { signer: '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd' }\n)\n\nconst data = await bee.getJsonFeed(\n  'some cool arbitraty topic', \n  { signer: '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd' }\n)\n\nconsole.log(data)\n// Prints: { some: ['cool', { json: 'compatible' }, 'object']}\n")),(0,r.kt)("h3",{id:"low-level-api"},"Low level API"),(0,r.kt)("p",null,"Low level API is an API that is more flexible in its usage, but requires better understanding and mainly more method calls."),(0,r.kt)("h4",{id:"reading-feeds"},"Reading feeds"),(0,r.kt)("p",null,"To read data from a feed, we need to make a reader object for a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"topic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),", then we can download the latest update containing a reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const topic = '0000000000000000000000000000000000000000000000000000000000000000'\nconst owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'\nconst feedReader = bee.makeFeedReader('sequence', topic, owner)\nconst feedUpdate = await feedReader.download()\nconsole.log(feedUpdate.reference) // prints the latest reference stored in the feed\n")),(0,r.kt)("h4",{id:"writing-feeds"},"Writing feeds"),(0,r.kt)("p",null,"When writing a feed, typically an immutable content is uploaded first, and then its reference is updated in the feed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"signer")," here is the same as with ",(0,r.kt)("a",{parentName:"p",href:"#writing-socs"},"writing the SOCs")," (with the same caveats!)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const postageBatchId = await bee.createPostageBatch(\"100\", 17)\nconst data = new Uint8Array([1, 2, 3])\nconst reference = await bee.uploadData(data)\nconst topic = '0000000000000000000000000000000000000000000000000000000000000000'\nconst signer = '0x634fb5a872396d9693e5c9f9d7233cfa93f395c093371017ff44aa9ae6564cdd'\nconst feedWriter = bee.makeFeedWriter('sequence', topic, signer)\nconst response = await feedWriter.upload(postageBatchId, reference)\n")),(0,r.kt)("h3",{id:"using-feed-manifest"},"Using feed manifest"),(0,r.kt)("p",null,"One of the most common use cases for feeds is to store mutable data in an immutable address. For example, when hosting a website on Swarm, we may want its address stored in ENS, but we don't want to pay for changing the reference every time the site is updated."),(0,r.kt)("p",null,'Swarm provides a feature called "feed manifests" for this use case. It is a content-addressed chunk that stores a feed\'s definition (the ',(0,r.kt)("inlineCode",{parentName:"p"},"type"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"topic"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),"). When it is looked up using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bzz")," endpoint, Swarm recognizes that it refers to a feed and continues the lookup according to the feed parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const postageBatchId = await bee.createPostageBatch(\"100\", 17)\nconst topic = '0000000000000000000000000000000000000000000000000000000000000000'\nconst owner = '0x8d3766440f0d7b949a5e32995d09619a7f86e632'\nconst reference = bee.createFeedManifest(postageBatchId, 'sequence', topic, owner)\n")),(0,r.kt)("p",null,"This creates the feed manifest chunk on Swarm. You can use the returned reference to look up with the ",(0,r.kt)("inlineCode",{parentName:"p"},"/bzz")," endpoint or use it with ENS."))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);