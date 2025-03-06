"use strict";(self.webpackChunkasyoka=self.webpackChunkasyoka||[]).push([[2105],{9531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"ProductDesign/abtesting","title":"A/B Testing","description":"A/B testing  is a method of comparing two versions of a product to determine which one performs better. It involves randomly assigning users to different versions of the product and measuring the results.","source":"@site/docs/ProductDesign/abtesting.md","sourceDirName":"ProductDesign","slug":"/ProductDesign/abtesting","permalink":"/asyoka/docs/ProductDesign/abtesting","draft":false,"unlisted":false,"editUrl":"https://github.com/asyokamvp/asyoka/tree/main/docs/ProductDesign/abtesting.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"abtesting","title":"A/B Testing","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/asyoka/docs/ProductDesign/introduction"},"next":{"title":"Introduction","permalink":"/asyoka/docs/ProductMetrics/introduction"}}');var i=t(4848),r=t(8453),o=t(9457);const a={id:"abtesting",title:"A/B Testing",sidebar_position:2},c="A/B Testing",d={},l=[];function u(e){const n={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(o.ty,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ab-testing",children:"A/B Testing"})}),(0,i.jsxs)(n.p,{children:["A/B testing ",(0,i.jsx)(o.uu,{id:"abtesting"})," is a method of comparing two versions of a product to determine which one performs better. It involves randomly assigning users to different versions of the product and measuring the results."]}),(0,i.jsx)(o.N3,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9457:(e,n,t)=>{t.d(n,{uu:()=>g,ty:()=>h,N3:()=>m});var s={};t.r(s),t.d(s,{DocsCryptoIntroduction:()=>a,DocsProductDesignAbtesting:()=>c,DocsQuantumIntroduction:()=>o});var i=t(6540);function r(e){const n={},t=/@(\w+)\s*{\s*([^,]+),([^@]+)}/g,s=/(\w+)\s*=\s*{([^}]+)}/g;let i;for(;null!==(i=t.exec(e));){const[e,t,r,o]=i,a={};let c;for(;null!==(c=s.exec(o));){const[e,n,t]=c;a[n.toLowerCase()]=t.trim()}n[r]={...a,id:r,type:t.toLowerCase()}}return n}const o="\n@misc{attentionisallyouneed,\n    title={Attention Is All You Need}, \n    author={Ashish Vaswani and Noam Shazeer and Niki Parmar and Jakob Uszkoreit and Llion Jones and Aidan N. Gomez and Lukasz Kaiser and Illia Polosukhin},\n    year={2023},\n    eprint={1706.03762},\n    archivePrefix={arXiv},\n    primaryClass={cs.CL},\n    url={https://arxiv.org/abs/1706.03762}, \n}",a="\n@article{cryptography,   \n    title = {Advances in quantum cryptography},\n    volume = {12},\n    ISSN = {1943-8206},\n    url = {https://arxiv.org/abs/1906.01645},\n    DOI = {10.1364/aop.361502},\n    number = {4},\n    journal = {Advances in Optics and Photonics},\n    publisher = {Optica Publishing Group},\n    author = {Pirandola, S. and Andersen, U. L. and Banchi, L. and Berta, M. and Bunandar, D. and Colbeck, R. and Englund, D. and Gehring, T. and Lupo, C. and Ottaviani, C. and Pereira, J. L. and Razavi, M. and Shamsul Shaari, J. and Tomamichel, M. and Usenko, V. C. and Vallone, G. and Villoresi, P. and Wallden, P.},\n    year = {2020},\n    month = {dec},\n    pages = {1012}\n}",c="\n@misc{abtesting,\n    title={A/B Testing: A Systematic Literature Review}, \n    author={Federico Quin and Danny Weyns and Matthias Galster and Camila Costa Silva},\n    year={2023},\n    eprint={2308.04929},\n    archivePrefix={arXiv},\n    primaryClass={cs.SE},\n    url={https://arxiv.org/abs/2308.04929}, \n}";var d=t(6347),l=t(4848);const u=(0,i.createContext)(null),h=e=>{let{children:n}=e;const[t,o]=(0,i.useState)([]),[a,c]=(0,i.useState)({}),h=(0,d.zy)();(0,i.useEffect)((()=>{const e=h.pathname.split("/").filter(Boolean),n="docs"===e[0]?1:2,t=e.slice(n).map((e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""))).join("");console.log("Looking for BibTeX for path:",t);const i=s[t];if(i){const e=r(i);c(e)}else console.warn(`No BibTeX found for path: ${t}`)}),[h]);return(0,l.jsx)(u.Provider,{value:{citations:t,addCitation:(e,n)=>{o((t=>t.some((n=>n.id===e))?t:[...t,{id:e,...n}]))},references:a},children:n})},p=()=>(0,i.useContext)(u),g=e=>{let{id:n}=e;const{addCitation:t,references:s}=p(),r=s[n];if((0,i.useEffect)((()=>{r&&t(n,r)}),[n,r,t]),!r)return null;const o=(e=>{const n=e.split(" and ").join(", ").split(", ");if(n.length<=2)return e;return`${n[0].trim().split(" ").pop()} et al.`})(r.author),a=()=>{const e=document.getElementById(`ref-${n}`);if(e){const n=window.innerHeight,t=e.getBoundingClientRect(),s=window.pageYOffset+t.top-n/2;window.scrollTo({top:s,behavior:"smooth"}),e.classList.add("reference-highlight"),setTimeout((()=>{e.classList.remove("reference-highlight")}),2e3)}};return(0,l.jsxs)("span",{className:"citation",onClick:a,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||a()},children:["[",o," ",r.year,"]"]})},m=()=>{const{citations:e}=p();return e&&0!==e.length?(0,l.jsxs)("div",{className:"references-section",children:[(0,l.jsx)("h2",{children:"References"}),(0,l.jsx)("ol",{children:e.map((e=>(0,l.jsxs)("li",{id:`ref-${e.id}`,children:[e.author,e.author.endsWith(".")?"":"."," "," ",e.url?(0,l.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}):e.title,",",e.journal&&(0,l.jsxs)("em",{children:[" ",e.journal]}),e.volume&&(0,l.jsxs)(l.Fragment,{children:[", ",e.volume]}),e.pages&&(0,l.jsxs)(l.Fragment,{children:[", ",e.pages]})," (",e.year,")"]},e.id)))})]}):null}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);