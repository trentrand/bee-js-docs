(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?l.a.createElement(m,p(p({ref:t},s),{},{components:n})):l.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},170:function(e,t,n){"use strict";var a=n(0),l=n(171);t.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),l=Object(a.createContext)(void 0);t.a=l},173:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(170),i=n(168),p=n(55),o=n.n(p),s=37,c=39;t.a=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(a.useState)(p),j=g[0],O=g[1],v=a.Children.toArray(e.children);if(null!=b){var y=f[b];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&O(y)}var w=function(e){O(e),null!=b&&h(b,e)},T=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},174:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(167)),i=n(173),p=n(174),o={title:"Create dApp in React",id:"create-dapp",slug:"/create-dapp"},s={unversionedId:"tutorials/create-dapp",id:"tutorials/create-dapp",isDocsHomePage:!1,title:"Create dApp in React",description:"In this tutorial we will go over creating dApp in React with the bee-js library. Once build this dApp can be hosted directly on the Swarm network and interact with it.",source:"@site/docs/tutorials/create-dapp.md",slug:"/create-dapp",permalink:"/docs/create-dapp",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/tutorials/create-dapp.md",version:"current",sidebar:"Balls",previous:{title:"Postal Service over Swarm",permalink:"/docs/pss"},next:{title:"@ethersphere/bee-js",permalink:"/docs/api"}},c=[{value:"Creating the dApp boilerplate",id:"creating-the-dapp-boilerplate",children:[]},{value:"Adding bee-js",id:"adding-bee-js",children:[]},{value:"Making it a dApp - uploading to Swarm",id:"making-it-a-dapp---uploading-to-swarm",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial we will go over creating dApp in React with the ",Object(r.b)("inlineCode",{parentName:"p"},"bee-js")," library. Once build this dApp can be hosted directly on the Swarm network and interact with it."),Object(r.b)("h2",{id:"creating-the-dapp-boilerplate"},"Creating the dApp boilerplate"),Object(r.b)("p",null,"We will use React Create App to bootstrap the environment for us. Run the following command (you can replace the ",Object(r.b)("inlineCode",{parentName:"p"},"dApp")," with your own project name)."),Object(r.b)(i.a,{groupId:"npmxyarn",defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"npx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app dApp\n"))),Object(r.b)(p.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm init react-app dApp\n"))),Object(r.b)(p.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app dApp\n")))),Object(r.b)("p",null,"For typescript support don't forget to add the ",Object(r.b)("inlineCode",{parentName:"p"},"--template typescript")," option:"),Object(r.b)(i.a,{groupId:"npmxyarn",defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"npx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app dApp --template typescript\n"))),Object(r.b)(p.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm init react-app dApp --template typescript\n"))),Object(r.b)(p.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app dApp --template typescript\n")))),Object(r.b)("h2",{id:"adding-bee-js"},"Adding bee-js"),Object(r.b)("p",null,"First of all, we need to add ",Object(r.b)("inlineCode",{parentName:"p"},"bee-js")," as a dependency to the project. Navigate to the project directory (e.g. in our case ",Object(r.b)("inlineCode",{parentName:"p"},"cd dApp"),") and let's install ",Object(r.b)("inlineCode",{parentName:"p"},"bee-js"),":"),Object(r.b)(i.a,{groupId:"npmyarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install @ethersphere/bee-js --save\n"))),Object(r.b)(p.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @ethersphere/bee-js --save\n")))),Object(r.b)("p",null,"Now let's edit the main App file."),Object(r.b)(i.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import React, { useState } from \'react\'\nimport \'./App.css\'\nimport { Bee } from \'@ethersphere/bee-js\'\n\nconst beeUrl = "https://gateway.ethswarm.org"\nconst bee = new Bee(beeUrl)\n\nfunction App() {\n  const [ file, setFile ] = useState<File | null>(null)\n  const [ link, setLink ] = useState<string | null>(null)\n  const [ uploading, setUploading ] = useState(false)\n\n  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {\n    event.preventDefault()\n\n    if (file) {\n      setUploading(true)\n      const hash = await bee.uploadFile(file)\n      setLink(`${beeUrl}/files/${hash}`)\n      setUploading(false)\n    }\n  }\n\n  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const f = e.target && e.target.files && e.target.files[0]\n\n    setFile(f)\n  }\n\n  return (\n    <div className="App">\n      <h1>Upload file to Swarm</h1>\n      <form onSubmit={handleSubmit}>\n        <input type="file" name="file" onChange={onFileChange} />\n        <input type="submit" />\n      </form>\n      { uploading && <code>Uploading...</code> }\n      { link && <code><a href={link}>{link}</a></code> }\n    </div>\n  )\n}\n\nexport default App\n'))),Object(r.b)(p.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},'import React, { useState } from \'react\'\nimport \'./App.css\'\nimport { Bee } from \'@ethersphere/bee-js\'\n\nconst beeUrl = "https://gateway.ethswarm.org"\nconst bee = new Bee(beeUrl)\n\nfunction App() {\n  const [ file, setFile ] = useState(null)\n  const [ link, setLink ] = useState(null)\n  const [ uploading, setUploading ] = useState(false)\n\n  const handleSubmit = async (event)=> {\n    event.preventDefault()\n\n    if (file) {\n      setUploading(true)\n      const hash = await bee.uploadFile(file)\n      setLink(`${beeUrl}/files/${hash}`)\n      setUploading(false)\n    }\n  }\n\n  const onFileChange = (e) => {\n    const f = e.target && e.target.files && e.target.files[0]\n\n    setFile(f)\n  }\n\n  return (\n    <div className="App">\n      <h1>Upload file to Swarm</h1>\n      <form onSubmit={handleSubmit}>\n        <input type="file" name="file" onChange={onFileChange} />\n        <input type="submit" />\n      </form>\n      { uploading && <code>Uploading...</code> }\n      { link && <code><a href={link}>{link}</a></code> }\n    </div>\n  )\n}\n\nexport default App\n')))),Object(r.b)("p",null,"Let's break it down, the first important lines are importing the ",Object(r.b)("inlineCode",{parentName:"p"},"Bee")," class and creating the bee instance:"),Object(r.b)(i.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Bee } from '@ethersphere/bee-js'\n\nconst beeUrl = \"https://gateway.ethswarm.org\"\nconst bee = new Bee(beeUrl)\n"))),Object(r.b)(p.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { Bee } from '@ethersphere/bee-js'\n\nconst beeUrl = \"https://gateway.ethswarm.org\"\nconst bee = new Bee(beeUrl)\n")))),Object(r.b)("p",null,"Next we'll have a look at the content of the ",Object(r.b)("inlineCode",{parentName:"p"},"App")," function. At the start of the function, we create few state variables. The ",Object(r.b)("inlineCode",{parentName:"p"},"file")," will hold the file to be uploaded, the ",Object(r.b)("inlineCode",{parentName:"p"},"link")," eventually contains the URL to download the file once it is uploaded to Swarm, and the ",Object(r.b)("inlineCode",{parentName:"p"},"uploading")," value indicates if the file is being uploaded right now."),Object(r.b)("p",null,"At the bottom of the ",Object(r.b)("inlineCode",{parentName:"p"},"App")," function there is a JSX code with a header, simple form to upload a single file and two text fields that are conditionally displayed. The important thing to notice is the ",Object(r.b)("inlineCode",{parentName:"p"},"onFileChange")," handler on the file input and the ",Object(r.b)("inlineCode",{parentName:"p"},"handleSubmit")," function."),Object(r.b)(i.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const [ file, setFile ] = useState<File | null>(null)\n  const [ link, setLink ] = useState<string | null>(null)\n  const [ uploading, setUploading ] = useState(false)\n\n  // Omitted code...\n\n  return (\n    <div className="App">\n      <h1>Upload file to Swarm</h1>\n      <form onSubmit={handleSubmit}>\n        <input type="file" name="file" onChange={onFileChange} />\n        <input type="submit" />\n      </form>\n      { uploading && <code>Uploading...</code> }\n      { link && <code><a href={link}>{link}</a></code> }\n    </div>\n  )\n}\n'))),Object(r.b)(p.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const [ file, setFile ] = useState(null)\n  const [ link, setLink ] = useState(null)\n  const [ uploading, setUploading ] = useState(false)\n\n  // Omitted code...\n\n  return (\n    <div className="App">\n      <h1>Upload file to Swarm</h1>\n      <form onSubmit={handleSubmit}>\n        <input type="file" name="file" onChange={onFileChange} />\n        <input type="submit" />\n      </form>\n      { uploading && <code>Uploading...</code> }\n      { link && <code><a href={link}>{link}</a></code> }\n    </div>\n  )\n}\n')))),Object(r.b)("p",null,"Lets disect the two handlers. The ",Object(r.b)("inlineCode",{parentName:"p"},"onFileChange")," function listens to the file input changes and when a new file is selected, it just stores it in the ",Object(r.b)("inlineCode",{parentName:"p"},"file")," state variable."),Object(r.b)(i.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  const f = e.target && e.target.files && e.target.files[0]\n\n  setFile(f)\n}\n"))),Object(r.b)(p.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const onFileChange = (e) => {\n  const f = e.target && e.target.files && e.target.files[0]\n\n  setFile(f)\n}\n")))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"handleSubmit")," function does all the interesting work. If a file is selected, it uploads it to Swarm using the ",Object(r.b)("inlineCode",{parentName:"p"},"uploadFile")," function which returns the hash of the file. The function then sets the download URL and marks the upload process done."),Object(r.b)(i.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {\n    event.preventDefault()\n\n    if (file) {\n      setUploading(true)\n      const hash = await bee.uploadFile(file)\n      setLink(`${beeUrl}/files/${hash}`)\n      setUploading(false)\n    }\n  }\n"))),Object(r.b)(p.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"  const handleSubmit = async (event)=> {\n    event.preventDefault()\n\n    if (file) {\n      setUploading(true)\n      const hash = await bee.uploadFile(file)\n      setLink(`${beeUrl}/files/${hash}`)\n      setUploading(false)\n    }\n  }\n")))),Object(r.b)("h2",{id:"making-it-a-dapp---uploading-to-swarm"},"Making it a dApp - uploading to Swarm"),Object(r.b)("p",null,"For the project to trully be a dApp, it should not be hosted on any centralised system. One way to achieve that is to upload it to Swarm. Before we do so, we need to edit few more things and build the project."),Object(r.b)("p",null,"Let's start with the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file. Here we need to set the homepage. This line makes the build process use relative path in the resulting bundle."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "homepage": ".",\n')),Object(r.b)("p",null,"Next, we need to build the project with the provided build command."),Object(r.b)(i.a,{groupId:"npmyarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm run build\n"))),Object(r.b)(p.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn build\n")))),Object(r.b)("p",null,"This will create a ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," folder that should be uploaded to the Swarm. We are working on ",Object(r.b)("inlineCode",{parentName:"p"},"swarm-cli")," which will make the upload process easier, but in the mean time you can follow the ",Object(r.b)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/getting-started/host-your-website-using-ens"},"Host Your Website on Swarm tutorial in the bee docs"),"."))}b.isMDXComponent=!0}}]);