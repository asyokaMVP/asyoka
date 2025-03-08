"use strict";(self.webpackChunkasyoka=self.webpackChunkasyoka||[]).push([[6967],{344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ProductMetrics/abtesting","title":"A/B Testing","description":"A/B testing , also known as online controlled experimentation or continuous experimentation, is a statistical hypothesis testing method used to compare two variants of a software component, user interface, or algorithm in a live system. The goal of A/B testing is to determine which variant performs better based on predefined metrics such as user engagement, click-through rates, or conversion rates.","source":"@site/docs/ProductMetrics/abtesting.md","sourceDirName":"ProductMetrics","slug":"/ProductMetrics/abtesting","permalink":"/asyoka/docs/ProductMetrics/abtesting","draft":false,"unlisted":false,"editUrl":"https://github.com/asyokamvp/asyoka/tree/main/docs/ProductMetrics/abtesting.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"abtesting","title":"A/B Testing","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Product Metrics","permalink":"/asyoka/docs/ProductMetrics/"},"next":{"title":"Development & Launch","permalink":"/asyoka/docs/DevelopmentLaunch/"}}');var i=t(4848),r=t(8453),o=t(2598);const a={id:"abtesting",title:"A/B Testing",sidebar_position:2},l="A/B Testing",c={},d=[{value:"<strong>1. Experiment Design</strong>",id:"1-experiment-design",level:3},{value:"<strong>2. Execution in a Live System</strong>",id:"2-execution-in-a-live-system",level:3},{value:"<strong>3. Statistical Analysis</strong>",id:"3-statistical-analysis",level:3},{value:"<strong>4. Decision-Making</strong>",id:"4-decision-making",level:3},{value:"<strong>Challenges in A/B Testing</strong>",id:"challenges-in-ab-testing",level:2},{value:"<strong>Applications in Software Engineering</strong>",id:"applications-in-software-engineering",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(o.ty,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ab-testing",children:"A/B Testing"})}),(0,i.jsxs)(n.p,{children:["A/B testing ",(0,i.jsx)(o.uu,{id:"abtesting"}),", also known as online controlled experimentation or continuous experimentation, is a statistical hypothesis testing method used to compare two variants of a software component, user interface, or algorithm in a live system. The goal of A/B testing is to determine which variant performs better based on predefined metrics such as user engagement, click-through rates, or conversion rates."]}),(0,i.jsx)(n.h3,{id:"1-experiment-design",children:(0,i.jsx)(n.strong,{children:"1. Experiment Design"})}),(0,i.jsx)(n.p,{children:"A/B testing follows the principles of controlled experiments. It involves:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Formulating a Hypothesis"}),": A specific change is hypothesized to improve a key performance metric."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Randomized User Assignment"}),": Users are randomly assigned to one of two groups:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Control Group (A)"}),": Receives the original version (baseline)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Treatment Group (B)"}),": Receives the modified version."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Metric Definition"}),": Success criteria such as click rates, revenue per user, or session duration are determined."]}),"\n"]}),(0,i.jsx)(n.h3,{id:"2-execution-in-a-live-system",children:(0,i.jsx)(n.strong,{children:"2. Execution in a Live System"})}),(0,i.jsx)(n.p,{children:"Unlike traditional offline experiments, A/B testing occurs in production environments with real users:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Live Deployment"}),": Both versions run simultaneously."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Traffic Splitting"}),": User traffic is divided among the two variants, often using a 50/50 split."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Collection"}),": Real-time logging of user interactions, engagement, and other behavioral data."]}),"\n"]}),(0,i.jsx)(n.h3,{id:"3-statistical-analysis",children:(0,i.jsx)(n.strong,{children:"3. Statistical Analysis"})}),(0,i.jsx)(n.p,{children:"A/B testing relies on statistical inference to determine whether observed differences are significant:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hypothesis Testing"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Null Hypothesis (H\u2080)"}),": No difference exists between the two versions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Alternative Hypothesis (H\u2081)"}),": The treatment (B) has a statistically significant effect."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Statistical Tests"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"t-Tests (Student\u2019s t-test, Welch\u2019s t-test)"}),": Used for comparing means of normally distributed metrics."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Chi-Square Test"}),": Used for categorical data (e.g., click/no-click)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Mann-Whitney U Test"}),": A non-parametric alternative when data is not normally distributed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bayesian Methods"}),": Estimate the probability of improvement rather than relying solely on p-values."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Confidence Intervals"}),": Used to quantify the uncertainty of estimated effects."]}),"\n"]}),(0,i.jsx)(n.h3,{id:"4-decision-making",children:(0,i.jsx)(n.strong,{children:"4. Decision-Making"})}),(0,i.jsx)(n.p,{children:"Once the statistical analysis is complete, the results inform:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Feature Rollout"}),": If the treatment outperforms the control, it is deployed system-wide."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Iteration and Optimization"}),": If inconclusive, further tests with adjusted parameters may be conducted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rollback"}),": If the new variant performs worse, the control is retained."]}),"\n"]}),(0,i.jsx)(n.h2,{id:"challenges-in-ab-testing",children:(0,i.jsx)(n.strong,{children:"Challenges in A/B Testing"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Selection Bias"}),": Users may not be perfectly randomized, leading to skewed results."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Network Effects"}),": User interactions may create dependencies across groups."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multiple Testing Problem"}),": Running many tests increases the chance of false positives (Type I errors)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Long-Term vs. Short-Term Effects"}),": Short-term changes may not reflect long-term user behavior."]}),"\n"]}),(0,i.jsx)(n.h2,{id:"applications-in-software-engineering",children:(0,i.jsx)(n.strong,{children:"Applications in Software Engineering"})}),(0,i.jsx)(n.p,{children:"A/B testing is extensively used in:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web and UI Design"}),": Evaluating different layouts, button placements, and user flows."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Algorithm Optimization"}),": Testing variations in search ranking, recommendation systems, and AI models."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"E-commerce and Advertising"}),": Determining the best pricing, promotions, and ad placements."]}),"\n"]}),(0,i.jsx)(n.p,{children:"A/B testing is a critical tool for data-driven decision-making, ensuring that changes are validated through empirical evidence before full deployment."}),(0,i.jsx)(o.N3,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2598:(e,n,t)=>{t.d(n,{uu:()=>m,ty:()=>u,N3:()=>p});var s={};t.r(s),t.d(s,{DocsCryptoIntroduction:()=>a,DocsProductDesignAbtesting:()=>l,DocsQuantumIntroduction:()=>o});var i=t(6540);function r(e){const n={},t=/@(\w+)\s*{\s*([^,]+),([^@]+)}/g,s=/(\w+)\s*=\s*{([^}]+)}/g;let i;for(;null!==(i=t.exec(e));){const[e,t,r,o]=i,a={};let l;for(;null!==(l=s.exec(o));){const[e,n,t]=l;a[n.toLowerCase()]=t.trim()}n[r]={...a,id:r,type:t.toLowerCase()}}return n}const o="\n@misc{attentionisallyouneed,\n    title={Attention Is All You Need}, \n    author={Ashish Vaswani and Noam Shazeer and Niki Parmar and Jakob Uszkoreit and Llion Jones and Aidan N. Gomez and Lukasz Kaiser and Illia Polosukhin},\n    year={2023},\n    eprint={1706.03762},\n    archivePrefix={arXiv},\n    primaryClass={cs.CL},\n    url={https://arxiv.org/abs/1706.03762}, \n}",a="\n@article{cryptography,   \n    title = {Advances in quantum cryptography},\n    volume = {12},\n    ISSN = {1943-8206},\n    url = {https://arxiv.org/abs/1906.01645},\n    DOI = {10.1364/aop.361502},\n    number = {4},\n    journal = {Advances in Optics and Photonics},\n    publisher = {Optica Publishing Group},\n    author = {Pirandola, S. and Andersen, U. L. and Banchi, L. and Berta, M. and Bunandar, D. and Colbeck, R. and Englund, D. and Gehring, T. and Lupo, C. and Ottaviani, C. and Pereira, J. L. and Razavi, M. and Shamsul Shaari, J. and Tomamichel, M. and Usenko, V. C. and Vallone, G. and Villoresi, P. and Wallden, P.},\n    year = {2020},\n    month = {dec},\n    pages = {1012}\n}",l="\n@misc{abtesting,\n    title={A/B Testing: A Systematic Literature Review}, \n    author={Federico Quin and Danny Weyns and Matthias Galster and Camila Costa Silva},\n    year={2023},\n    eprint={2308.04929},\n    archivePrefix={arXiv},\n    primaryClass={cs.SE},\n    url={https://arxiv.org/abs/2308.04929}, \n}";var c=t(6347),d=t(4848);const h=(0,i.createContext)(null),u=e=>{let{children:n}=e;const[t,o]=(0,i.useState)([]),[a,l]=(0,i.useState)({}),u=(0,c.zy)();(0,i.useEffect)((()=>{const e=u.pathname.split("/").filter(Boolean),n="docs"===e[0]?0:1,t=e.slice(n).map((e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""))).join("");let i=t;(t.startsWith("De")||t.startsWith("Ru"))&&(i=t.substring(2)),console.log("Looking for BibTeX for path:",i);const o=s[i];if(o){const e=r(o);l(e)}else console.warn(`No BibTeX found for path: ${i}`)}),[u]);return(0,d.jsx)(h.Provider,{value:{citations:t,addCitation:(e,n)=>{o((t=>t.some((n=>n.id===e))?t:[...t,{id:e,...n}]))},references:a},children:n})},g=()=>(0,i.useContext)(h),m=e=>{let{id:n}=e;const{addCitation:t,references:s}=g(),r=s[n];if((0,i.useEffect)((()=>{r&&t(n,r)}),[n,r,t]),!r)return null;const o=(e=>{const n=e.split(" and ").join(", ").split(", ");if(n.length<=2)return e;return`${n[0].trim().split(" ").pop()} et al.`})(r.author),a=()=>{const e=document.getElementById(`ref-${n}`);if(e){const n=window.innerHeight,t=e.getBoundingClientRect(),s=window.pageYOffset+t.top-n/2;window.scrollTo({top:s,behavior:"smooth"}),e.classList.add("reference-highlight"),setTimeout((()=>{e.classList.remove("reference-highlight")}),2e3)}};return(0,d.jsxs)("span",{className:"citation",onClick:a,role:"button",tabIndex:0,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||a()},children:["[",o," ",r.year,"]"]})},p=()=>{const{citations:e}=g();return e&&0!==e.length?(0,d.jsxs)("div",{className:"references-section",children:[(0,d.jsx)("h2",{children:"References"}),(0,d.jsx)("ol",{children:e.map((e=>(0,d.jsxs)("li",{id:`ref-${e.id}`,children:[e.author,e.author.endsWith(".")?"":"."," "," ",e.url?(0,d.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}):e.title,",",e.journal&&(0,d.jsxs)("em",{children:[" ",e.journal]}),e.volume&&(0,d.jsxs)(d.Fragment,{children:[", ",e.volume]}),e.pages&&(0,d.jsxs)(d.Fragment,{children:[", ",e.pages]})," (",e.year,")"]},e.id)))})]}):null}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);