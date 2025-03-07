/*! For license information please see 6419.f62cf691.js.LICENSE.txt */
(self.webpackChunkasyoka=self.webpackChunkasyoka||[]).push([[6419],{6419:(e,t,r)=>{"use strict";const n=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),a=Symbol("Comlink.thrown"),u=e=>"object"==typeof e&&null!==e||"function"==typeof e,l={canHandle:e=>u(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return h(e,t),[r,[r]]},deserialize:e=>(e.start(),function(e,t){const r=new Map;return e.addEventListener("message",(function(e){const{data:t}=e;if(!t||!t.id)return;const n=r.get(t.id);if(n)try{n(t)}finally{r.delete(t.id)}})),g(e,r,[],t)}(e))},c=new Map([["proxy",l],["throw",{canHandle:e=>u(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function h(e,t=globalThis,r=["*"]){t.addEventListener("message",(function i(s){if(!s||!s.data)return;if(!function(e,t){for(const r of e){if(t===r||"*"===r)return!0;if(r instanceof RegExp&&r.test(t))return!0}return!1}(r,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:u,type:l,path:c}=Object.assign({path:[]},s.data),f=(s.data.argumentList||[]).map(E);let p;try{const t=c.slice(0,-1).reduce(((e,t)=>e[t]),e),r=c.reduce(((e,t)=>e[t]),e);switch(l){case"GET":p=r;break;case"SET":t[c.slice(-1)[0]]=E(s.data.value),p=!0;break;case"APPLY":p=r.apply(t,f);break;case"CONSTRUCT":p=function(e){return Object.assign(e,{[n]:!0})}(new r(...f));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;h(e,r),p=function(e,t){return v.set(e,t),e}(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(y){p={value:y,[a]:0}}Promise.resolve(p).catch((e=>({value:e,[a]:0}))).then((r=>{const[n,s]=w(r);t.postMessage(Object.assign(Object.assign({},n),{id:u}),s),"RELEASE"===l&&(t.removeEventListener("message",i),d(t),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[r,n]=w({value:new TypeError("Unserializable return value"),[a]:0});t.postMessage(Object.assign(Object.assign({},r),{id:u}),n)}))})),t.start&&t.start()}function d(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function f(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e){return Q(e,new Map,{type:"RELEASE"}).then((()=>{d(e)}))}const y=new WeakMap,m="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(y.get(e)||0)-1;y.set(e,t),0===t&&p(e)}));function g(e,t,r=[],n=function(){}){let o=!1;const a=new Proxy(n,{get(n,i){if(f(o),i===s)return()=>{!function(e){m&&m.unregister(e)}(a),p(e),t.clear(),o=!0};if("then"===i){if(0===r.length)return{then:()=>a};const n=Q(e,t,{type:"GET",path:r.map((e=>e.toString()))}).then(E);return n.then.bind(n)}return g(e,t,[...r,i])},set(n,i,s){f(o);const[a,u]=w(s);return Q(e,t,{type:"SET",path:[...r,i].map((e=>e.toString())),value:a},u).then(E)},apply(n,s,a){f(o);const u=r[r.length-1];if(u===i)return Q(e,t,{type:"ENDPOINT"}).then(E);if("bind"===u)return g(e,t,r.slice(0,-1));const[l,c]=x(a);return Q(e,t,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:l},c).then(E)},construct(n,i){f(o);const[s,a]=x(i);return Q(e,t,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:s},a).then(E)}});return function(e,t){const r=(y.get(t)||0)+1;y.set(t,r),m&&m.register(e,t,e)}(a,e),a}function x(e){const t=e.map(w);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const v=new WeakMap;function w(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,i]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},i]}return[{type:"RAW",value:e},v.get(e)||[]]}function E(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function Q(e,t,r,n){return new Promise((i=>{const s=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.set(s,i),e.start&&e.start(),e.postMessage(Object.assign({id:s},r),n)}))}var k=r(8291),b=r.n(k),S=r(7542);const L=12;function T(e,t){const r=function(e,t){const r=e.map((e=>/\p{Unified_Ideograph}/u.test(e)?function(e,t){const r=[];return function e(n,i){let s=0,o=!1;for(const a of t)if(n.substr(0,a.length)===a){const t={missed:i.missed,term:i.term.concat({value:a})};n.length>a.length?e(n.substr(a.length),t):r.push(t),o=!0}else for(let t=a.length-1;t>s;t-=1){const u=a.substr(0,t);if(n.substr(0,t)===u){s=t;const a={missed:i.missed,term:i.term.concat({value:u,trailing:!0})};n.length>t?e(n.substr(t),a):r.push(a),o=!0;break}}o||(n.length>0?e(n.substr(1),{missed:i.missed+1,term:i.term}):i.term.length>0&&r.push(i))}(e,{missed:0,term:[]}),r.sort(((e,t)=>{const r=e.missed>0?1:0,n=t.missed>0?1:0;return r!==n?r-n:e.term.length-t.term.length})).map((e=>e.term))}(e,t):[{value:e}])).slice(0,L),n=r.filter((e=>e.length>1));let i=1,s=!1;for(const a of n)if(s)a.splice(1,a.length-1);else{a.length>6&&a.splice(6,a.length-6);const e=i*a.length;if(e>=L){if(e>L){const e=Math.floor(L/i);a.splice(e,a.length-e),i*=e}else i=e;i>6&&(s=!0)}else i=e}const o=[];return function e(t,n){if(t===r.length||n.length>=L)o.push(n.slice(0,L));else for(const i of r[t])e(t+1,n.concat(i))}(0,[]),o}(e,t);if(0===r.length)return[{tokens:e,term:e.map((e=>({value:e,presence:b().Query.presence.REQUIRED,wildcard:b().Query.wildcard.LEADING|b().Query.wildcard.TRAILING})))}];for(const o of r)o[o.length-1].maybeTyping=!0;const n=[];for(const o of S.BH)if("en"===o)S.sx||n.unshift(b().stopWordFilter);else{const e=b()[o];e.stopWordFilter&&n.unshift(e.stopWordFilter)}let i;if(n.length>0){const e=e=>n.reduce(((e,t)=>e.filter((e=>t(e.value)))),e);i=[];const t=[];for(const n of r){const r=e(n);i.push(r),r.length<n.length&&r.length>0&&t.push(r)}r.push(...t)}else i=r.slice();const s=[];for(const o of i)if(o.length>2)for(let e=o.length-1;e>=0;e-=1)s.push(o.slice(0,e).concat(o.slice(e+1)));return P(r).concat(P(s))}function P(e){return I(e).concat(I(e.filter((e=>{const t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function I(e,t){return e.map((e=>({tokens:e.map((e=>e.value)),term:e.map((e=>({value:e.value,presence:b().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?b().Query.wildcard.TRAILING:b().Query.wildcard.NONE})))})))}var O;!function(e){e[e.Title=0]="Title",e[e.Heading=1]="Heading",e[e.Description=2]="Description",e[e.Keywords=3]="Keywords",e[e.Content=4]="Content"}(O||(O={}));const R=new Map;h(class{async fetchIndexes(e,t){await this.lowLevelFetchIndexes(e,t)}async lowLevelFetchIndexes(e,t){const r=`${e}${t}`;let n=R.get(r);return n||(n=async function(e,t){const r=`${e}${S.IH.replace("{dir}",t?`-${t.replace(/\//g,"-")}`:"")}`;if(new URL(r,location.origin).origin!==location.origin)throw new Error("Unexpected version url");const n=await(await fetch(r)).json(),i=n.map(((e,t)=>{let{documents:r,index:n}=e;return{type:t,documents:r,index:b().Index.load(n)}})),s=n.reduce(((e,t)=>{for(const r of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(r[0][0])&&e.add(r[0]);return e}),new Set);return{wrappedIndexes:i,zhDictionary:Array.from(s)}}(e,t),R.set(r,n)),n}async search(e,t,r,n){const i=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return b()[t[0]].tokenizer(e).map((e=>e.toString()));let r=/[^-\s]+/g;return t.includes("zh")&&(r=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(r)||[]}(r,S.BH);if(0===i.length)return[];const{wrappedIndexes:s,zhDictionary:o}=await this.lowLevelFetchIndexes(e,t),a=T(i,o),u=[];e:for(const{term:l,tokens:c}of a)for(const{documents:e,index:t,type:r}of s)if(u.push(...t.query((e=>{for(const t of l)e.term(t.value,{wildcard:t.wildcard,presence:t.presence})})).slice(0,n).filter((e=>!u.some((t=>t.document.i.toString()===e.ref)))).slice(0,n-u.length).map((t=>{const n=e.find((e=>e.i.toString()===t.ref));return{document:n,type:r,page:r!==O.Title&&s[0].documents.find((e=>e.i===n.p)),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),u.length>=n)break e;return function(e){e.forEach(((e,t)=>{e.index=t})),e.sort(((t,r)=>{let n=t.type!==O.Heading&&t.type!==O.Content&&t.type!==O.Description||!t.page?t.index:e.findIndex((e=>e.document===t.page)),i=r.type!==O.Heading&&r.type!==O.Content&&r.type!==O.Description||!r.page?r.index:e.findIndex((e=>e.document===r.page));if(-1===n&&(n=t.index),-1===i&&(i=r.index),n===i){const e=(0===r.type?1:0)-(0===t.type?1:0);return 0===e?t.index-r.index:e}return n-i}))}(u),function(e){e.forEach(((t,r)=>{r>0&&t.page&&e.slice(0,r).some((e=>(e.type===O.Keywords?e.page:e.document)===t.page))&&(r<e.length-1&&e[r+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(u),u}})},8291:(e,t,r)=>{var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,E,Q,k,b,S,L,T,P,I,O,R,C,F,N,j=function(e){var t=new j.Builder;return t.pipeline.add(j.trimmer,j.stopWordFilter,j.stemmer),t.searchPipeline.add(j.stemmer),e.call(t,t),t.build()};j.version="2.3.9",j.utils={},j.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),j.utils.asString=function(e){return null==e?"":e.toString()},j.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},j.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},j.FieldRef.joiner="/",j.FieldRef.fromString=function(e){var t=e.indexOf(j.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new j.FieldRef(n,r,e)},j.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+j.FieldRef.joiner+this.docRef),this._stringValue},j.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},j.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},j.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},j.Set.prototype.contains=function(e){return!!this.elements[e]},j.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===j.Set.complete)return this;if(e===j.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new j.Set(i)},j.Set.prototype.union=function(e){return e===j.Set.complete?j.Set.complete:e===j.Set.empty?this:new j.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},j.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},j.Token=function(e,t){this.str=e||"",this.metadata=t||{}},j.Token.prototype.toString=function(){return this.str},j.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},j.Token.prototype.clone=function(e){return e=e||function(e){return e},new j.Token(e(this.str,this.metadata),this.metadata)},j.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new j.Token(j.utils.asString(e).toLowerCase(),j.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(j.tokenizer.separator)||s==n){if(a>0){var u=j.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new j.Token(r.slice(o,s),u))}o=s+1}}return i},j.tokenizer.separator=/[\s\-]+/,j.Pipeline=function(){this._stack=[]},j.Pipeline.registeredFunctions=Object.create(null),j.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&j.utils.warn("Overwriting existing registered function: "+t),e.label=t,j.Pipeline.registeredFunctions[e.label]=e},j.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||j.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},j.Pipeline.load=function(e){var t=new j.Pipeline;return e.forEach((function(e){var r=j.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},j.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){j.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},j.Pipeline.prototype.after=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},j.Pipeline.prototype.before=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},j.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},j.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},j.Pipeline.prototype.runString=function(e,t){var r=new j.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},j.Pipeline.prototype.reset=function(){this._stack=[]},j.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return j.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},j.Vector=function(e){this._magnitude=0,this.elements=e||[]},j.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},j.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},j.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},j.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},j.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},j.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},j.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},j.Vector.prototype.toJSON=function(){return this.elements},j.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},h="^("+(l="[^aeiou][^aeiouy]*")+")?"+(c=(u="[aeiouy]")+"[aeiou]*")+l+"("+c+")?$",d="^("+l+")?"+c+l+c+l,f="^("+l+")?"+u,p=new RegExp("^("+l+")?"+c+l),y=new RegExp(d),m=new RegExp(h),g=new RegExp(f),x=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,w=/^(.+?)eed$/,E=/^(.+?)(ed|ing)$/,Q=/.$/,k=/(at|bl|iz)$/,b=new RegExp("([^aeiouylsz])\\1$"),S=new RegExp("^"+l+u+"[^aeiouwxy]$"),L=/^(.+?[^aeiou])y$/,T=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,P=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,I=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,O=/^(.+?)(s|t)(ion)$/,R=/^(.+?)e$/,C=/ll$/,F=new RegExp("^"+l+u+"[^aeiouwxy]$"),N=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=v,(i=x).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=E,(i=w).test(e)){var c=i.exec(e);(i=p).test(c[1])&&(i=Q,e=e.replace(i,""))}else s.test(e)&&(t=(c=s.exec(e))[1],(s=g).test(t)&&(u=b,l=S,(s=k).test(e=t)?e+="e":u.test(e)?(i=Q,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=L).test(e)&&(e=(t=(c=i.exec(e))[1])+"i"),(i=T).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+o[r])),(i=P).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+a[r])),s=O,(i=I).test(e)?(t=(c=i.exec(e))[1],(i=y).test(t)&&(e=t)):s.test(e)&&(t=(c=s.exec(e))[1]+c[2],(s=y).test(t)&&(e=t)),(i=R).test(e)&&(t=(c=i.exec(e))[1],s=m,u=F,((i=y).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=y,(i=C).test(e)&&s.test(e)&&(i=Q,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(N)}),j.Pipeline.registerFunction(j.stemmer,"stemmer"),j.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},j.stopWordFilter=j.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),j.Pipeline.registerFunction(j.stopWordFilter,"stopWordFilter"),j.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},j.Pipeline.registerFunction(j.trimmer,"trimmer"),j.TokenSet=function(){this.final=!1,this.edges={},this.id=j.TokenSet._nextId,j.TokenSet._nextId+=1},j.TokenSet._nextId=1,j.TokenSet.fromArray=function(e){for(var t=new j.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},j.TokenSet.fromClause=function(e){return"editDistance"in e?j.TokenSet.fromFuzzyString(e.term,e.editDistance):j.TokenSet.fromString(e.term)},j.TokenSet.fromFuzzyString=function(e,t){for(var r=new j.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new j.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else{a=new j.TokenSet;i.node.edges["*"]=a}if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else{u=new j.TokenSet;i.node.edges["*"]=u}1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new j.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},j.TokenSet.fromString=function(e){for(var t=new j.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new j.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},j.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},j.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},j.TokenSet.prototype.intersect=function(e){for(var t=new j.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new j.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}return t},j.TokenSet.Builder=function(){this.previousWord="",this.root=new j.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},j.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(n=r;n<e.length;n++){var i=new j.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},j.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},j.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},j.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},j.Index.prototype.search=function(e){return this.query((function(t){new j.QueryParser(e,t).parse()}))},j.Index.prototype.query=function(e){for(var t=new j.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new j.Vector;e.call(t,t);for(a=0;a<t.clauses.length;a++){var u=t.clauses[a],l=null,c=j.Set.empty;l=u.usePipeline?this.pipeline.runString(u.term,{fields:u.fields}):[u.term];for(var h=0;h<l.length;h++){var d=l[h];u.term=d;var f=j.TokenSet.fromClause(u),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&u.presence===j.Query.presence.REQUIRED){for(var y=0;y<u.fields.length;y++){s[R=u.fields[y]]=j.Set.empty}break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<u.fields.length;y++){var w=x[R=u.fields[y]],E=Object.keys(w),Q=g+"/"+R,k=new j.Set(E);if(u.presence==j.Query.presence.REQUIRED&&(c=c.union(k),void 0===s[R]&&(s[R]=j.Set.complete)),u.presence!=j.Query.presence.PROHIBITED){if(n[R].upsert(v,u.boost,(function(e,t){return e+t})),!i[Q]){for(var b=0;b<E.length;b++){var S,L=E[b],T=new j.FieldRef(L,R),P=w[L];void 0===(S=r[T])?r[T]=new j.MatchData(g,R,P):S.add(g,R,P)}i[Q]=!0}}else void 0===o[R]&&(o[R]=j.Set.empty),o[R]=o[R].union(k)}}}if(u.presence===j.Query.presence.REQUIRED)for(y=0;y<u.fields.length;y++){s[R=u.fields[y]]=s[R].intersect(c)}}var I=j.Set.complete,O=j.Set.empty;for(a=0;a<this.fields.length;a++){var R;s[R=this.fields[a]]&&(I=I.intersect(s[R])),o[R]&&(O=O.union(o[R]))}var C=Object.keys(r),F=[],N=Object.create(null);if(t.isNegated()){C=Object.keys(this.fieldVectors);for(a=0;a<C.length;a++){T=C[a];var D=j.FieldRef.fromString(T);r[T]=new j.MatchData}}for(a=0;a<C.length;a++){var _=(D=j.FieldRef.fromString(C[a])).docRef;if(I.contains(_)&&!O.contains(_)){var A,z=this.fieldVectors[D],M=n[D.fieldName].similarity(z);if(void 0!==(A=N[_]))A.score+=M,A.matchData.combine(r[D]);else{var B={ref:_,score:M,matchData:r[D]};N[_]=B,F.push(B)}}}return F.sort((function(e,t){return t.score-e.score}))},j.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:j.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},j.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new j.TokenSet.Builder,a=j.Pipeline.load(e.pipeline);e.version!=j.version&&j.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+j.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new j.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new j.Index(t)},j.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=j.tokenizer,this.pipeline=new j.Pipeline,this.searchPipeline=new j.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},j.Builder.prototype.ref=function(e){this._ref=e},j.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},j.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},j.Builder.prototype.k1=function(e){this._k1=e},j.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new j.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},j.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=j.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},j.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=j.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new j.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(y=j.idf(this.invertedIndex[x],this.documentCount),n[x]=y):y=n[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},j.Builder.prototype.createTokenSet=function(){this.tokenSet=j.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},j.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new j.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},j.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},j.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},j.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},j.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},j.Query=function(e){this.clauses=[],this.allFields=e},j.Query.wildcard=new String("*"),j.Query.wildcard.NONE=0,j.Query.wildcard.LEADING=1,j.Query.wildcard.TRAILING=2,j.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},j.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=j.Query.wildcard.NONE),e.wildcard&j.Query.wildcard.LEADING&&e.term.charAt(0)!=j.Query.wildcard&&(e.term="*"+e.term),e.wildcard&j.Query.wildcard.TRAILING&&e.term.slice(-1)!=j.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=j.Query.presence.OPTIONAL),this.clauses.push(e),this},j.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=j.Query.presence.PROHIBITED)return!1;return!0},j.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,j.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},j.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},j.QueryParseError.prototype=new Error,j.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},j.QueryLexer.prototype.run=function(){for(var e=j.QueryLexer.lexText;e;)e=e(this)},j.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},j.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},j.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},j.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return j.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},j.QueryLexer.prototype.width=function(){return this.pos-this.start},j.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},j.QueryLexer.prototype.backup=function(){this.pos-=1},j.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=j.QueryLexer.EOS&&this.backup()},j.QueryLexer.prototype.more=function(){return this.pos<this.length},j.QueryLexer.EOS="EOS",j.QueryLexer.FIELD="FIELD",j.QueryLexer.TERM="TERM",j.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",j.QueryLexer.BOOST="BOOST",j.QueryLexer.PRESENCE="PRESENCE",j.QueryLexer.lexField=function(e){return e.backup(),e.emit(j.QueryLexer.FIELD),e.ignore(),j.QueryLexer.lexText},j.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(j.QueryLexer.TERM)),e.ignore(),e.more())return j.QueryLexer.lexText},j.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.EDIT_DISTANCE),j.QueryLexer.lexText},j.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.BOOST),j.QueryLexer.lexText},j.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(j.QueryLexer.TERM)},j.QueryLexer.termSeparator=j.tokenizer.separator,j.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==j.QueryLexer.EOS)return j.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return j.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if(t.match(j.QueryLexer.termSeparator))return j.QueryLexer.lexTerm}else e.escapeCharacter()}},j.QueryParser=function(e,t){this.lexer=new j.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},j.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=j.QueryParser.parseClause;e;)e=e(this);return this.query},j.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},j.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},j.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},j.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case j.QueryLexer.PRESENCE:return j.QueryParser.parsePresence;case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new j.QueryParseError(r,t.start,t.end)}},j.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=j.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=j.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new j.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n){r="expecting term or field, found nothing";throw new j.QueryParseError(r,t.start,t.end)}switch(n.type){case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:r="expecting term or field, found '"+n.type+"'";throw new j.QueryParseError(r,n.start,n.end)}}},j.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i){n="expecting term, found nothing";throw new j.QueryParseError(n,t.start,t.end)}if(i.type===j.QueryLexer.TERM)return j.QueryParser.parseTerm;n="expecting term, found '"+i.type+"'";throw new j.QueryParseError(n,i.start,i.end)}},j.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new j.QueryParseError(n,r.start,r.end)}else e.nextClause()}},j.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},j.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return j})?n.call(t,r,t,e):n)||(e.exports=i)}()}}]);