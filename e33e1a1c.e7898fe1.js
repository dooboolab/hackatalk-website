(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,g=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return n?r.a.createElement(g,c(c({ref:t},l),{},{components:n})):r.a.createElement(g,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(104)),o={id:"pagination",title:"Pagination",sidebar_label:"Pagination"},c={unversionedId:"development/pagination",id:"development/pagination",isDocsHomePage:!1,title:"Pagination",description:"One of the challenges when using graphql is pagination. Facebook's relay cursor pagination seems currently the best solution on implementing infinite scroll view which we normally see in many mobile apps.",source:"@site/docs/development/pagination.md",permalink:"/docs/development/pagination",sidebar_label:"Pagination",sidebar:"docs",previous:{title:"Features",permalink:"/docs/development/features"},next:{title:"Overview",permalink:"/docs/client/overview"}},p=[{value:"Server",id:"server",children:[]},{value:"Client",id:"client",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"One of the challenges when using graphql is ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/pagination"}),"pagination"),". Facebook's ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://relay.dev/graphql/connections.htm"}),"relay cursor pagination")," seems currently the best solution on implementing ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pronebird/UIScrollView-InfiniteScroll"}),"infinite scroll view")," which we normally see in many mobile apps."),Object(i.a)("img",{src:"https://user-images.githubusercontent.com/27461460/89128314-dad82900-d52f-11ea-86b4-0b54dbba2860.png",width:"400"}),Object(i.a)("p",null,"Although it has some limitations when we face offset pagination scenario as above, ",Object(i.a)("inlineCode",{parentName:"p"},"relay cursor pagination")," is currently the most ideal way to support mobile's infinite scrollview."),Object(i.a)("h3",{id:"server"},"Server"),Object(i.a)("p",null,"Previously, implementing ",Object(i.a)("inlineCode",{parentName:"p"},"relay-cursor-pagination")," with orm like ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://sequelize.org"}),"sequelize")," was a bit complicated. Here's how we've it done in ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/graphql-seoul/graphql-pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-relays-cursor-based-connection-pattern-72ab0daceed4"}),"medium post")," previously."),Object(i.a)("p",null,"However, we've migrated to ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"prisma.io"}),"primsa2")," and ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.nexusjs.org"}),"nexus")," so this becomes much easier. ",Object(i.a)("inlineCode",{parentName:"p"},"Nexus")," even supports ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://nexusjs.org/components-standalone/schema/plugins/connection#connection-plugin"}),"connection plugin")," and we'll be using it in our server."),Object(i.a)("h3",{id:"client"},"Client"),Object(i.a)("p",null,"In client, we use ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://relay.dev"}),"relay"),". There is a great explanation on using ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.howtographql.com/react-relay/8-pagination"}),"relay pagination")," in ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org"}),"react"),"."))}s.isMDXComponent=!0}}]);