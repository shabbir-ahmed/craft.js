(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(47),a=n(207),i=(n(0),n(208)),o=n(210),c={id:"layers",title:"Layers"},l={id:"version-0.1.0-beta.17/additional/layers",title:"Layers",description:"A Photoshop-like layers panel for your page editor.",source:"@site/versioned_docs/version-0.1.0-beta.17/additional/layers.md",permalink:"/r/docs/additional/layers",version:"0.1.0-beta.17",sidebar:"version-0.1.0-beta.17/docs",previous:{title:"NodeHelpers",permalink:"/r/docs/api/helpers"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Types",id:"types",children:[{value:"Layer",id:"layer",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>&lt;Layers /&gt;</code>",id:"layers-",children:[]},{value:"<code>useLayer</code>",id:"uselayer",children:[]}]},{value:"Default components",id:"default-components",children:[]}],s={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Photoshop-like layers panel for your page editor."),Object(i.b)(o.c,{img:"layers.gif",mdxType:"Image"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @craftjs/layers\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {Editor} from "@craftjs/core"\nimport {Layers} from "@craftjs/layers"\n\nexport default function App() {\n  return (\n    <div style={{margin: "0 auto", width: "800px"}}>\n      <Typography variant="h5" align="center">A super simple page editor</Typography>\n      <Editor resolver={...}>\n        <Layers />\n      </Editor>\n    </div>\n  );\n} \n')),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("h3",{id:"layer"},"Layer"),Object(i.b)("h4",{id:"properties"},"Properties"),Object(i.b)(o.a,{items:[["id","NodeId","A randomly generated unique id"],["depth","number","A depth of the current Layer"],["expanded","boolean","Returns true if the Layer is expanded"],["events","Object",[["selected","boolean","Is true if the layer is clicked"],["hovered","boolean","Is true if the layer is being hovered"]]],["dom","HTMLElement","The DOM of the current layer including its header and children. This is defined by the `connectLayer` connector"],["headingDom","HTMLElement","The DOM of the current Layer's heading. This is defined by the `connectLayerHeader` connector"]],mdxType:"API"}),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("h3",{id:"layers-"},Object(i.b)("inlineCode",{parentName:"h3"},"<Layers />")),Object(i.b)("h4",{id:"props"},"Props"),Object(i.b)(o.a,{items:[["expandRootOnLoad?","boolean","Optional. If enabled, the Root Node will be expanded by default"],["renderLayer?","React.ReactElement","Optional. Specify the component to render each layer"]],mdxType:"API"}),Object(i.b)("h3",{id:"uselayer"},Object(i.b)("inlineCode",{parentName:"h3"},"useLayer")),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)(o.a,{items:[["collector","(layer: Layer) => Collected","A function that collects relevant state information from the corresponding `Layer`. The component will re-render when the values returned by this function changes."]],mdxType:"API"}),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)(o.a,{items:[[null,"Object",[["connectors","Object",[["drag","(dom: HTMLElement, nodeId: String) => HTMLElement","Specifies the DOM that should be draggable"],["layer","(dom: HTMLElement, nodeId: String) => HTMLElement","Specifies the DOM that represents the entire Layer"],["layerHeading","(dom: HTMLElement, nodeId: String) => HTMLElement","Specifies the DOM that represents the layer's heading"]]],["actions","Object",[["toggleLayer","() => void","Toggle the corresponding Layer's expanded state"]]]]]],mdxType:"API"}),Object(i.b)("h2",{id:"default-components"},"Default components"),Object(i.b)("p",null,"The following components are available for you to extend if you wish to design your own component to render the layers (which can be specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"renderLayer")," prop)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<DefaultLayer />")," ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<DefaultLayerHeader />")," ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<EditableLayerName>")," This component enables the end user to edit the layer names. The values are saved into the respective Node's ",Object(i.b)("inlineCode",{parentName:"li"},"custom.displayName")," prop.")))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"\nconst Layer = () => {\n  return (\n    <div>\n      <DefaultLayerHeader />\n    </div>\n  )\n}\n\nconst App = () => {\n  return (\n    <Editor>\n      <Frame>\n        ...\n      </Frame>\n      <Layers \n        renderLayer={Layer}\n      />\n    </Editor>\n  )\n}\n")))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},210:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=function(e){var t=e.item,n=t[0],r=t.length>1&&"string"==typeof t[1]&&t[1],i=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],c=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,n&&a.a.createElement("code",{className:"api-title"},n),r&&a.a.createElement("strong",{className:"api-type"},r)),i&&a.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:i}}),c&&a.a.createElement(o,{items:c}))},o=function(e){var t=e.items;return a.a.createElement("ul",null,t&&t.map((function(e,t){return a.a.createElement(i,{item:e,key:t})})))},c=function(e){var t,n=e.type,r=e.title,i=void 0===r||r,o=e.noMargin,c=void 0===o||o;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+n+" "+(i?"badge-title":"")+" "+(c?"badge-no-margin":"")},t))},l=n(209),d=function(e){var t=e.img,n=Object(l.a)().siteConfig.baseUrl;return a.a.createElement("div",{className:"img-wrapper"},a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("img",{src:n+"img/"+t})))};n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"b",(function(){})),n.d(t,"c",(function(){return d}))}}]);