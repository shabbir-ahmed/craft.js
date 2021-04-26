(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(47),r=t(207),i=(t(0),t(208)),d=t(210),l={id:"helpers",title:"NodeHelpers",sidebar_label:"NodeHelpers"},o={id:"version-0.1.0-beta.17/api/helpers",title:"NodeHelpers",description:"Methods that helps describe a specified Node.",source:"@site/versioned_docs/version-0.1.0-beta.17/api/NodeHelpers.md",permalink:"/r/docs/api/helpers",version:"0.1.0-beta.17",sidebar_label:"NodeHelpers",sidebar:"version-0.1.0-beta.17/docs",previous:{title:"useNode()",permalink:"/r/docs/api/useNode"},next:{title:"Layers",permalink:"/r/docs/additional/layers"}},s=[{value:"Usage",id:"usage",children:[{value:"useEditor hook",id:"useeditor-hook",children:[]},{value:"User Component rules",id:"user-component-rules",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"descendants",id:"descendants",children:[]},{value:"ancestors",id:"ancestors",children:[]},{value:"linkedNodes",id:"linkednodes",children:[]},{value:"childNodes",id:"childnodes",children:[]},{value:"isRoot",id:"isroot",children:[]},{value:"isCanvas",id:"iscanvas",children:[]},{value:"isLinkedNode",id:"islinkednode",children:[]},{value:"isDeletable",id:"isdeletable",children:[]},{value:"isTopLevelNode",id:"istoplevelnode",children:[]},{value:"isParentOfTopLevelNode",id:"isparentoftoplevelnode",children:[]},{value:"isDraggable",id:"isdraggable",children:[]},{value:"isDroppable",id:"isdroppable",children:[]},{value:"toSerializedNode",id:"toserializednode",children:[]},{value:"toNodeTree",id:"tonodetree",children:[]}]}],c={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Methods that helps describe a specified ",Object(i.b)("inlineCode",{parentName:"p"},"Node"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"useeditor-hook"},"useEditor hook"),Object(i.b)("p",null,"You can access the NodeHelpers via the ",Object(i.b)("inlineCode",{parentName:"p"},"node")," query method in the ",Object(i.b)("inlineCode",{parentName:"p"},"useEditor")," hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import {useEditor} from "@craftjs/core";\n\nconst TextComponent = () => {\n  const { id } = useNode();\n  const { query: {node} } = useEditor();\n  const isRoot = node(id).Root(),\n        isDraggable = node(id).Draggable();\n  ...\n}\n')),Object(i.b)("h3",{id:"user-component-rules"},"User Component rules"),Object(i.b)("p",null,"NodeHelpers can also be accessed via the last parameter of each User Component rules."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const MyComp = () => {\n\n}\nMyComp.craft = { \n  rules: {\n    canDrag: (node: Node, helper: NodeHelpers) => {\n      const ancestors = helper(node.id).ancestors();\n      ...\n    },\n    canMoveIn : (incoming: Node, self: Node, helper: NodeHelpers) => {\n      const isRoot = helper(node.id).isRoot();\n      ...\n    }\n    canMoveOut: (outgoing: Node, self: Node, helper: NodeHelpers) => {\n      const isDeletable = helper(node.id).isDeletable();\n      ...\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"get"},"get"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Get ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," object from id"),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)(d.a,{items:[["Node"]],mdxType:"API"}),Object(i.b)("h3",{id:"descendants"},"descendants"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns an array of Node ids of all child Nodes of a given Node."),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)(d.a,{items:[["deep","boolean","If set to true, retrieve all descendants in nested levels. Default is false"],["includeOnly?","'childNodes' | 'linkedNodes'","Get descendants that are either childNodes or linkedNodes. If unset, get all descendants"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)(d.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// The descendants of `div` when deep=false\n<div> \n  // highlight-next-line\n  <h2>Yo</h2>\n  // highlight-next-line\n  <Element is={Container}>\n    <h3>Child</h3>\n    // highlight-next-line\n  </Element>\n</div>\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// The descendants of `div` when deep=true\n<div> \n  // highlight-start\n  <h2>Yo</h2>\n  <Element is={Container}>\n    <h3>Child</h3>\n  </Element>\n  // highlight-end\n</div>\n\nconst Container = () => {\n  return (\n    <div>\n      // highlight-start\n      <Element id="linked-div">\n        <h1>Hello</h1>\n      <Element>\n      // highlight-end\n    </div>\n  )\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// The descendants of `div` when deep=true and includeOnly="childNodes" only\n<div> \n  // highlight-start\n  <h2>Yo</h2>\n  <Element is={Container}>\n    <h3>Child</h3>\n  </Element>\n  // highlight-end\n</div>\n\nconst Container = () => {\n  return (\n    <div>\n      <Element id="linked-div">\n        <h1>Hello</h1>\n      <Element>\n    </div>\n  )\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// The descendants of `div` when deep=true and includeOnly="linkedNodes" only\n<div> \n  <h2>Yo</h2>\n  <Element is={Container}>\n    <h3>Child</h3>\n  </Element>\n</div>\n\nconst Container = () => {\n  return (\n    <div>\n      // highlight-start\n      <Element id="linked-div">\n        <h1>Hello</h1>\n      <Element>\n      // highlight-end\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"ancestors"},"ancestors"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns an array of Node ids of all ancestors"),Object(i.b)("h4",{id:"returns-2"},"Returns"),Object(i.b)(d.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(i.b)("h3",{id:"linkednodes"},"linkedNodes"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns an array of linked Node ids"),Object(i.b)("h4",{id:"returns-3"},"Returns"),Object(i.b)(d.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(i.b)("h3",{id:"childnodes"},"childNodes"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns an array of child Node ids"),Object(i.b)("h4",{id:"returns-4"},"Returns"),Object(i.b)(d.a,{items:[["NodeId[]"]],mdxType:"API"}),Object(i.b)("h3",{id:"isroot"},"isRoot"),Object(i.b)(d.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a given Node is the Root Node"),Object(i.b)("h4",{id:"returns-5"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <div> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Element is={Container}> // false \n            <h3>Child</h3> // false\n          </Element>\n        </div>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"iscanvas"},"isCanvas"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a given Node is a Canvas"),Object(i.b)("h4",{id:"returns-6"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8}","{5,8}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Element canvas> // true\n          <div>Yo</div> // false\n          <Element is={Container}>It's me</Element> // false\n          <Element canvas> // true \n            <h3>Child</h3> // false\n          </Element>\n        </Element>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"islinkednode"},"isLinkedNode"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a given Node is linked to the parent Node via an arbitrary id"),Object(i.b)("h4",{id:"returns-7"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{17}","{17}":!0}),'const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Element canvas> // false\n          <div>Yo</div> // false\n          <Element is={Hero}>It\'s me</Element> // false\n        </Element>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Hero = ({background, title}) => {\n  return (\n    <div style={{ background }}>\n      <Element id="title" is={Text} text={title} /> // true\n      ...\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"isdeletable"},"isDeletable"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be deleted as long as it is ",Object(i.b)("strong",{parentName:"p"},"not")," one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Root Node"),Object(i.b)("li",{parentName:"ul"},"Top-level Node")),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)(d.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-8"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,21}","{5,21}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <div> // false\n          <div>Yo</div> // true\n          <h2>It\'s me</h2> // true\n          <Element canvas> // true \n            <h3>Child</h3> // true\n            <Container /> // true\n          </Element>\n        </div>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Element id="main"> // false\n        <h2>Hi</h2> // true\n      </Element>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"istoplevelnode"},"isTopLevelNode"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node is considered top-level if it's one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Root Node"),Object(i.b)("li",{parentName:"ul"},"A linked Node defined inside a User Component")),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)(d.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-9"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,21,27}","{5,21,27}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <div> // true\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <div> // false \n            <h3>Child</h3> // false\n            <Container /> // false\n          </div>\n        </div>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Element id="main"> // true\n        <h2>Hi</h2> // false\n        <Element> // false\n          <h2>Hi</h2> // false\n        </Element>\n      </Element>\n      <Element id="secondary"> // true\n        <h2>Hi</h2> // false\n        <Element> // false\n          <h2>Hi</h2> // false\n        </Element>\n      </Element>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"isparentoftoplevelnode"},"isParentOfTopLevelNode"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"This returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a Node's User Component defines a ",Object(i.b)("inlineCode",{parentName:"p"},"<Element />")," in its render method."),Object(i.b)("h4",{id:"returns-10"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{10}","{10}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Element> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Element> // false \n            <h3>Child</h3> // false\n            <Container /> // true\n          </Element>\n        </Element>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Element id="main"> // false\n        <h2>Hi</h2> // false\n        <Element> // false\n          <h2>Hi</h2> // false\n        </Element>\n      </Element>\n      <Element id="seconday"> // false\n        <h2>Hi</h2> // false\n        <Element> // false\n          <h2>Hi</h2> // false\n        </Element>\n      </Element>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"isdraggable"},"isDraggable"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be dragged and moved if it satisfies both of the following conditions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Node is an immediate child of a Canvas Node, hence it's draggable"),Object(i.b)("li",{parentName:"ul"},"The Node's ",Object(i.b)("inlineCode",{parentName:"li"},"canDrag")," rule allows it to be moved ")),Object(i.b)("h4",{id:"parameters-3"},"Parameters"),Object(i.b)(d.a,{items:[["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-11"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("h3",{id:"isdroppable"},"isDroppable"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a Node is Droppable relative to the target Node."),Object(i.b)("h4",{id:"parameters-4"},"Parameters"),Object(i.b)(d.a,{items:[["targetId","NodeId","The target Node"],["onError","(err: string) => void","Error callback"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-12"},"Returns"),Object(i.b)(d.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"In the following example, we're checking if our ",Object(i.b)("inlineCode",{parentName:"p"},"MyCanvas")," component would be able to accept the current selected Node in the editor."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const MyCanvas = () => {\n  const { id } = useNode();\n  const { canWeAcceptTheSelectedNode } = useEditor((state, query) => ({\n    canWeAcceptTheSelectedNode: state.events.selected && query.node(id).Droppable(state.events.selected)\n  }));\n}\n")),Object(i.b)("h3",{id:"toserializednode"},"toSerializedNode"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Gets the current Node in it's ",Object(i.b)("inlineCode",{parentName:"p"},"SerializedNode")," form"),Object(i.b)("h4",{id:"returns-13"},"Returns"),Object(i.b)(d.a,{items:[["SerializedNode"]],mdxType:"API"}),Object(i.b)("h3",{id:"tonodetree"},"toNodeTree"),Object(i.b)(d.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Gets the current Node and its descendants in its ",Object(i.b)("inlineCode",{parentName:"p"},"NodeTree")," form"),Object(i.b)("h4",{id:"parameters-5"},"Parameters"),Object(i.b)(d.a,{items:[["includeOnly?","'childNodes' | 'linkedNodes'","Get descendants that are either childNodes or linkedNodes. If unset, get all descendants"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-14"},"Returns"),Object(i.b)(d.a,{items:[["NodeTree"]],mdxType:"API"}))}b.isMDXComponent=!0},207:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),c=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=c(t),u=a,m=b["".concat(d,".").concat(u)]||b[u]||p[u]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var s=2;s<i;s++)d[s]=t[s];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},209:function(e,n,t){"use strict";var a=t(0),r=t(48);n.a=function(){return Object(a.useContext)(r.a)}},210:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=function(e){var n=e.item,t=n[0],a=n.length>1&&"string"==typeof n[1]&&n[1],i=3==n.length?"string"==typeof n[2]&&n[2]:4==n.length&&"string"==typeof n[3]&&n[3],l=n.length>1&&Array.isArray(n[n.length-1])&&n[n.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,t&&r.a.createElement("code",{className:"api-title"},t),a&&r.a.createElement("strong",{className:"api-type"},a)),i&&r.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:i}}),l&&r.a.createElement(d,{items:l}))},d=function(e){var n=e.items;return r.a.createElement("ul",null,n&&n.map((function(e,n){return r.a.createElement(i,{item:e,key:n})})))},l=function(e){var n,t=e.type,a=e.title,i=void 0===a||a,d=e.noMargin,l=void 0===d||d;switch(t){case"hoc":n="Higher-Order Component";break;default:n=t[0].toUpperCase()+t.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+t+" "+(i?"badge-title":"")+" "+(l?"badge-no-margin":"")},n))},o=t(209),s=function(e){var n=e.img,t=Object(o.a)().siteConfig.baseUrl;return r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("img",{src:t+"img/"+n})))};t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return l})),t.d(n,"b",(function(){})),t.d(n,"c",(function(){return s}))}}]);