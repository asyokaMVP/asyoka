"use strict";(self.webpackChunkasyoka=self.webpackChunkasyoka||[]).push([[1835],{5482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ProductDesign/ucd","title":"Design Thinking & User-Centered Design (UCD)","description":"","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/ProductDesign/ucd.md","sourceDirName":"ProductDesign","slug":"/ProductDesign/ucd","permalink":"/asyoka/de/docs/ProductDesign/ucd","draft":false,"unlisted":false,"editUrl":"https://github.com/asyokamvp/asyoka/tree/main/docs/ProductDesign/ucd.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"ucd","title":"Design Thinking & User-Centered Design (UCD)","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/asyoka/de/docs/ProductDesign/introduction"},"next":{"title":"A/B Testing","permalink":"/asyoka/de/docs/ProductDesign/abtesting"}}');var r=t(4848),s=t(8453),a=t(2598);const o={id:"ucd",title:"Design Thinking & User-Centered Design (UCD)",sidebar_position:1},c=void 0,d={},l=[];function u(e){return(0,r.jsx)(a.ty,{children:(0,r.jsx)(a.N3,{})})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2598:(e,n,t)=>{t.d(n,{uu:()=>g,ty:()=>h,N3:()=>m});var i={};t.r(i),t.d(i,{DocsCryptoIntroduction:()=>o,DocsProductDesignAbtesting:()=>c,DocsQuantumIntroduction:()=>a});var r=t(6540);function s(e){const n={},t=/@(\w+)\s*{\s*([^,]+),([^@]+)}/g,i=/(\w+)\s*=\s*{([^}]+)}/g;let r;for(;null!==(r=t.exec(e));){const[e,t,s,a]=r,o={};let c;for(;null!==(c=i.exec(a));){const[e,n,t]=c;o[n.toLowerCase()]=t.trim()}n[s]={...o,id:s,type:t.toLowerCase()}}return n}const a="\n@misc{attentionisallyouneed,\n    title={Attention Is All You Need}, \n    author={Ashish Vaswani and Noam Shazeer and Niki Parmar and Jakob Uszkoreit and Llion Jones and Aidan N. Gomez and Lukasz Kaiser and Illia Polosukhin},\n    year={2023},\n    eprint={1706.03762},\n    archivePrefix={arXiv},\n    primaryClass={cs.CL},\n    url={https://arxiv.org/abs/1706.03762}, \n}",o="\n@article{cryptography,   \n    title = {Advances in quantum cryptography},\n    volume = {12},\n    ISSN = {1943-8206},\n    url = {https://arxiv.org/abs/1906.01645},\n    DOI = {10.1364/aop.361502},\n    number = {4},\n    journal = {Advances in Optics and Photonics},\n    publisher = {Optica Publishing Group},\n    author = {Pirandola, S. and Andersen, U. L. and Banchi, L. and Berta, M. and Bunandar, D. and Colbeck, R. and Englund, D. and Gehring, T. and Lupo, C. and Ottaviani, C. and Pereira, J. L. and Razavi, M. and Shamsul Shaari, J. and Tomamichel, M. and Usenko, V. C. and Vallone, G. and Villoresi, P. and Wallden, P.},\n    year = {2020},\n    month = {dec},\n    pages = {1012}\n}",c="\n@misc{abtesting,\n    title={A/B Testing: A Systematic Literature Review}, \n    author={Federico Quin and Danny Weyns and Matthias Galster and Camila Costa Silva},\n    year={2023},\n    eprint={2308.04929},\n    archivePrefix={arXiv},\n    primaryClass={cs.SE},\n    url={https://arxiv.org/abs/2308.04929}, \n}";var d=t(6347),l=t(4848);const u=(0,r.createContext)(null),h=e=>{let{children:n}=e;const[t,a]=(0,r.useState)([]),[o,c]=(0,r.useState)({}),h=(0,d.zy)();(0,r.useEffect)((()=>{const e=h.pathname.split("/").filter(Boolean),n="docs"===e[0]?0:1,t=e.slice(n).map((e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""))).join("");let r=t;(t.startsWith("De")||t.startsWith("Ru"))&&(r=t.substring(2)),console.log("Looking for BibTeX for path:",r);const a=i[r];if(a){const e=s(a);c(e)}else console.warn(`No BibTeX found for path: ${r}`)}),[h]);return(0,l.jsx)(u.Provider,{value:{citations:t,addCitation:(e,n)=>{a((t=>t.some((n=>n.id===e))?t:[...t,{id:e,...n}]))},references:o},children:n})},p=()=>(0,r.useContext)(u),g=e=>{let{id:n}=e;const{addCitation:t,references:i}=p(),s=i[n];if((0,r.useEffect)((()=>{s&&t(n,s)}),[n,s,t]),!s)return null;const a=(e=>{const n=e.split(" and ").join(", ").split(", ");if(n.length<=2)return e;return`${n[0].trim().split(" ").pop()} et al.`})(s.author),o=()=>{const e=document.getElementById(`ref-${n}`);if(e){const n=window.innerHeight,t=e.getBoundingClientRect(),i=window.pageYOffset+t.top-n/2;window.scrollTo({top:i,behavior:"smooth"}),e.classList.add("reference-highlight"),setTimeout((()=>{e.classList.remove("reference-highlight")}),2e3)}};return(0,l.jsxs)("span",{className:"citation",onClick:o,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||o()},children:["[",a," ",s.year,"]"]})},m=()=>{const{citations:e}=p();return e&&0!==e.length?(0,l.jsxs)("div",{className:"references-section",children:[(0,l.jsx)("h2",{children:"References"}),(0,l.jsx)("ol",{children:e.map((e=>(0,l.jsxs)("li",{id:`ref-${e.id}`,children:[e.author,e.author.endsWith(".")?"":"."," "," ",e.url?(0,l.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}):e.title,",",e.journal&&(0,l.jsxs)("em",{children:[" ",e.journal]}),e.volume&&(0,l.jsxs)(l.Fragment,{children:[", ",e.volume]}),e.pages&&(0,l.jsxs)(l.Fragment,{children:[", ",e.pages]})," (",e.year,")"]},e.id)))})]}):null}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);