"use strict";(self.webpackChunkasyoka=self.webpackChunkasyoka||[]).push([[5688],{7838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"ProductMetrics/introduction","title":"Product Metrics","description":"","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/ProductMetrics/ProductMetrics.md","sourceDirName":"ProductMetrics","slug":"/ProductMetrics/","permalink":"/asyoka/de/docs/ProductMetrics/","draft":false,"unlisted":false,"editUrl":"https://github.com/asyokamvp/asyoka/tree/main/docs/ProductMetrics/ProductMetrics.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"introduction","title":"Product Metrics","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"A/B Testing","permalink":"/asyoka/de/docs/ProductDesign/abtesting"},"next":{"title":"Introduction","permalink":"/asyoka/de/docs/ProductMetrics/introduction"}}');var i=n(4848),o=n(8453);n(2598);const a={id:"introduction",title:"Product Metrics",sidebar_position:1},s=void 0,c={},d=[];function l(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l()}},2598:(e,t,n)=>{n.d(t,{uu:()=>m,ty:()=>h,N3:()=>f});var r={};n.r(r),n.d(r,{DocsCryptoIntroduction:()=>s,DocsProductDesignAbtesting:()=>c,DocsQuantumIntroduction:()=>a});var i=n(6540);function o(e){const t={},n=/@(\w+)\s*{\s*([^,]+),([^@]+)}/g,r=/(\w+)\s*=\s*{([^}]+)}/g;let i;for(;null!==(i=n.exec(e));){const[e,n,o,a]=i,s={};let c;for(;null!==(c=r.exec(a));){const[e,t,n]=c;s[t.toLowerCase()]=n.trim()}t[o]={...s,id:o,type:n.toLowerCase()}}return t}const a="\n@misc{attentionisallyouneed,\n    title={Attention Is All You Need}, \n    author={Ashish Vaswani and Noam Shazeer and Niki Parmar and Jakob Uszkoreit and Llion Jones and Aidan N. Gomez and Lukasz Kaiser and Illia Polosukhin},\n    year={2023},\n    eprint={1706.03762},\n    archivePrefix={arXiv},\n    primaryClass={cs.CL},\n    url={https://arxiv.org/abs/1706.03762}, \n}",s="\n@article{cryptography,   \n    title = {Advances in quantum cryptography},\n    volume = {12},\n    ISSN = {1943-8206},\n    url = {https://arxiv.org/abs/1906.01645},\n    DOI = {10.1364/aop.361502},\n    number = {4},\n    journal = {Advances in Optics and Photonics},\n    publisher = {Optica Publishing Group},\n    author = {Pirandola, S. and Andersen, U. L. and Banchi, L. and Berta, M. and Bunandar, D. and Colbeck, R. and Englund, D. and Gehring, T. and Lupo, C. and Ottaviani, C. and Pereira, J. L. and Razavi, M. and Shamsul Shaari, J. and Tomamichel, M. and Usenko, V. C. and Vallone, G. and Villoresi, P. and Wallden, P.},\n    year = {2020},\n    month = {dec},\n    pages = {1012}\n}",c="\n@misc{abtesting,\n    title={A/B Testing: A Systematic Literature Review}, \n    author={Federico Quin and Danny Weyns and Matthias Galster and Camila Costa Silva},\n    year={2023},\n    eprint={2308.04929},\n    archivePrefix={arXiv},\n    primaryClass={cs.SE},\n    url={https://arxiv.org/abs/2308.04929}, \n}";var d=n(6347),l=n(4848);const u=(0,i.createContext)(null),h=e=>{let{children:t}=e;const[n,a]=(0,i.useState)([]),[s,c]=(0,i.useState)({}),h=(0,d.zy)();(0,i.useEffect)((()=>{const e=h.pathname.split("/").filter(Boolean),t="docs"===e[0]?0:1,n=e.slice(t).map((e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""))).join("");let i=n;(n.startsWith("De")||n.startsWith("Ru"))&&(i=n.substring(2)),console.log("Looking for BibTeX for path:",i);const a=r[i];if(a){const e=o(a);c(e)}else console.warn(`No BibTeX found for path: ${i}`)}),[h]);return(0,l.jsx)(u.Provider,{value:{citations:n,addCitation:(e,t)=>{a((n=>n.some((t=>t.id===e))?n:[...n,{id:e,...t}]))},references:s},children:t})},p=()=>(0,i.useContext)(u),m=e=>{let{id:t}=e;const{addCitation:n,references:r}=p(),o=r[t];if((0,i.useEffect)((()=>{o&&n(t,o)}),[t,o,n]),!o)return null;const a=(e=>{const t=e.split(" and ").join(", ").split(", ");if(t.length<=2)return e;return`${t[0].trim().split(" ").pop()} et al.`})(o.author),s=()=>{const e=document.getElementById(`ref-${t}`);if(e){const t=window.innerHeight,n=e.getBoundingClientRect(),r=window.pageYOffset+n.top-t/2;window.scrollTo({top:r,behavior:"smooth"}),e.classList.add("reference-highlight"),setTimeout((()=>{e.classList.remove("reference-highlight")}),2e3)}};return(0,l.jsxs)("span",{className:"citation",onClick:s,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||s()},children:["[",a," ",o.year,"]"]})},f=()=>{const{citations:e}=p();return e&&0!==e.length?(0,l.jsxs)("div",{className:"references-section",children:[(0,l.jsx)("h2",{children:"References"}),(0,l.jsx)("ol",{children:e.map((e=>(0,l.jsxs)("li",{id:`ref-${e.id}`,children:[e.author,e.author.endsWith(".")?"":"."," "," ",e.url?(0,l.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}):e.title,",",e.journal&&(0,l.jsxs)("em",{children:[" ",e.journal]}),e.volume&&(0,l.jsxs)(l.Fragment,{children:[", ",e.volume]}),e.pages&&(0,l.jsxs)(l.Fragment,{children:[", ",e.pages]})," (",e.year,")"]},e.id)))})]}):null}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);