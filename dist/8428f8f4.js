function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,r=t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new s(t,i)),e},o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return r(i)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>r("string"==typeof t?t:t+""))(e)})(t):t;var a,h,c,d;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=v){var s,n;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:p.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var i,s,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:p.fromAttribute;this.Πh=o,this[o]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var g,f,y,b;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(a=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(a,{ReactiveElement:m}),(null!==(c=(d=globalThis).reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,k="?"+x,$=`<${k}>`,U=document,P=(t="")=>U.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,R=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,q=/"/g,O=/^(?:script|style|textarea)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),M=new WeakMap,I=U.createTreeWalker(U,129,null,!1);class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=A;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,a=o.exec(i),null!==a);)c=o.lastIndex,o===A?"!--"===a[1]?o=L:void 0!==a[1]?o=R:void 0!==a[2]?(O.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=H):void 0!==a[3]&&(o=H):o===H?">"===a[0]?(o=null!=n?n:A,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?H:'"'===a[3]?q:T):o===q||o===T?o=H:o===L||o===R?o=A:(o=H,n=void 0);const d=o===H&&t[e+1].startsWith("/>")?" ":"";r+=o===A?i+$:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+x+d):i+x+(-2===h?(s.push(void 0),e):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,s]})(t,e);if(this.el=B.createElement(a,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Y:"@"===e[1]?J:V})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),I.nextNode(),l.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===k)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function _(t,e,i=t,s){var n,r,o,l;if(e===z)return e;let a=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=C(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a.O)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,s)),void 0!==s?(null!==(o=(l=i).Σi)&&void 0!==o?o:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=_(t,a.S(t,e.values),a,s)),e}class D{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);I.currentNode=n;let r=I.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new W(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Q(r,this,t)),this.l.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=I.nextNode(),o++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class W{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=_(this,t,e),C(t)?t===j||null==t||""===t?(this.H!==j&&this.R(),this.H=j):t!==this.H&&t!==z&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(U.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new D(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new B(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new W(this.k(P()),this.k(P()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class V{constructor(t,e,i,s,n){this.type=1,this.H=j,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(j),this.strings=i):this.H=j}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=_(this,t,e,0),r=!C(t)||t!==this.H&&t!==z,r&&(this.H=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=_(this,s[i+o],e,o),l===z&&(l=this.H[o]),r||(r=!C(l)||l!==this.H[o]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}r&&!s&&this.W(t)}W(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends V{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===j?void 0:t}}class Y extends V{constructor(){super(...arguments),this.type=4}W(t){t&&t!==j?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends V{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=_(this,t,e,0))&&void 0!==i?i:j)===z)return;const s=this.H,n=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==j&&(s===j||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){_(this,t)}}var Z,F,G,X,tt,et;null===(f=(g=globalThis).litHtmlPlatformSupport)||void 0===f||f.call(g,B,W),(null!==(y=(b=globalThis).litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Z=(et=globalThis).litElementVersions)&&void 0!==Z?Z:et.litElementVersions=[]).push("3.0.0-rc.2");class it extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new W(e.insertBefore(P(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return z}}it.finalized=!0,it._$litElement$=!0,null===(G=(F=globalThis).litElementHydrateSupport)||void 0===G||G.call(F,{LitElement:it}),null===(tt=(X=globalThis).litElementPlatformSupport)||void 0===tt||tt.call(X,{LitElement:it});const st=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return function(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)}({...t,state:!0,attribute:!1})}function ot(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var n;if(void 0===s){const s=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(r.finisher=function(e){t(e,s)}),r}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(n,s)}})({descriptor:i=>{const s={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i;return void 0===this[e]&&(this[e]=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t)),this[e]}}return s}})}let lt,at,ht,ct,dt=t=>t,pt=class extends it{constructor(){super(),this.isLoading=!0,this.senses=[],toxicity.load(.75).then((t=>{this.model=t,this.isLoading=!1}))}submit(){this.isLoading||0===this.input.value.length||(this.isLoading=!0,this.senses=[],this.requestUpdate(),this.model.classify(this.input.value).then((t=>{let e=!1;t.forEach((t=>{t.results[0].match&&(e=!0,this.senses.push(N(lt||(lt=dt`<sl-tag pill type = "danger">${0}</sl-tag>`),t.label.toUpperCase())))})),e||this.senses.push(N(at||(at=dt`<sl-tag pill type ="success">No Toxicity Detected</sl-tag>`))),this.isLoading=!1,this.requestUpdate()})))}reset(){this.input.value="",this.senses=[],this.requestUpdate()}enter(t){"Enter"===t.key&&this.submit()}render(){return N(ht||(ht=dt`
        <div class="tinit-center">
            <p>Before you comment verbally or digitally make sure it's
                not
                toxic!
                <br>
                <small>For assistance use Artificial Intelligence ;)</small>
            </p>
            <br>
            <sl-input pill label="Comment:" placeholder="Your comment goes here." @keyup=${0}></sl-input>
            <sl-button pill size="small" type="primary" @click=${0} ?loading=${0}>Submit</sl-button>
            <sl-button pill size="small" type="default" @click=${0}>Reset</sl-button>        
            <br>
            <br>
            <br>
            <slot name="label">Sense:</slot>
            <br>
            ${0}
        </div>
        `),this.enter,this.submit,this.isLoading,this.reset,this.senses)}};pt.styles=o(ct||(ct=dt`
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
            text-align:center;
        }
        sl-input{
            margin: 5px 0;
        }
        sl-tag{
            margin: 2px 2px;
        }
    `)),t([rt()],pt.prototype,"model",void 0),t([ot("sl-input")],pt.prototype,"input",void 0),pt=t([st("comment-sense")],pt);let ut,vt,mt=t=>t,gt=class extends it{constructor(){super(),this.isLoading=!0,qna.load().then((t=>{this.model=t,this.isLoading=!1}))}submit(){this.isLoading||0===this.paragraph.value.length||0===this.question.value.length||(this.isLoading=!0,this.answer.value="",this.requestUpdate(),this.model.findAnswers(this.question.value,this.paragraph.value).then((t=>{0!==t.length?this.answer.value=t[0].text:this.answer.value="Oops can't help you with that.",this.isLoading=!1,this.requestUpdate()})))}reset(){this.paragraph.value="",this.question.value="",this.answer.value=""}enter(t){"Enter"===t.key&&this.submit()}render(){return N(ut||(ut=mt`
        <div class="tinit-center">
            <p>Lazy enough to find an answer to a question from a
                paragraph? Don't
                Worry this got you covered
                <br>
                <small>Enter a paragraph and a question related to it, you
                    MIGHT get an answer.</small>
            </p>
            <br>
            <sl-textarea id="txtarea" rows=2 resize="auto" placeholder="Your paragraph goes here." label="Paragraph:"></sl-textarea>
            <sl-input pill id="question" label="Question:" placeholder="Your question goes here." @keyup=${0}></sl-input>
            <div class="center">
                <sl-button pill size="small" type="primary" @click=${0} ?loading=${0}>Submit</sl-button>
                <sl-button pill size="small" type="default" @click=${0}>Reset</sl-button>
            </div>
            <br>
            <sl-input pill id="answer" label="Answer:" readonly placeholder="Detected answer will appear here."></sl-input>
        </div>

        `),this.enter,this.submit,this.isLoading,this.reset)}};gt.styles=o(vt||(vt=mt`
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
        }
        sl-input{
            margin: 15px 0;
        }
        .center{
            text-align:center;
        }
        #txtarea::part(base){
            border-radius: var(--sl-input-height-medium);
        }
        #txtarea::part(label),#question::part(label),#answer::part(label){
            margin-left:var(--sl-spacing-medium);
        }
    `)),t([rt()],gt.prototype,"model",void 0),t([ot("#txtarea")],gt.prototype,"paragraph",void 0),t([ot("#question")],gt.prototype,"question",void 0),t([ot("#answer")],gt.prototype,"answer",void 0),gt=t([st("pa-que-ans")],gt);let ft,yt,bt,wt,St=t=>t,xt=class extends it{constructor(){super(),this.isLoading=!0,this.imagelink="",this.predictions=[],mobilenet.load().then((t=>{this.model=t,this.isLoading=!1}))}change(t){let e=t.target.files[0];this.imagelink=window.URL.createObjectURL(e),this.requestUpdate()}submit(){this.isLoading||""===this.imagelink||(this.isLoading=!0,this.predictions=[],this.requestUpdate(),this.model.classify(this.img).then((t=>{let e=!1;t.forEach((t=>{e=!0,this.predictions.push(N(ft||(ft=St`<sl-tag pill type = "success">${0}</sl-tag>`),t.className.toUpperCase()))})),e||this.predictions.push(N(yt||(yt=St`<sl-tag pill type ="danger">Nothing Detected</sl-tag>`))),this.isLoading=!1,this.requestUpdate()})))}reset(){this.imagelink="",this.predictions=[],this.requestUpdate()}render(){return N(bt||(bt=St`
        <div class="tinit-center">
            <p>To detect what the object is!... digitally
                <br>
                <small>This might help you ;)</small>
            </p>
            <br>
                <label for="photo">
                    <sl-tag pill size="large" type="primary"><sl-icon id="icon" name="link-45deg"></sl-icon> Select An Image</sl-tag>
                    <sl-avatar image="${0}" shape="rounded"><sl-icon slot="icon" name="image"></sl-icon></sl-avatar>
                </label>
                <input id="photo" type="file" accept="image/*" @change=${0}>
            <div class="center">
                <sl-button pill size="small" type="primary" @click=${0} ?loading=${0}>Submit</sl-button>
                <sl-button pill size="small" type="default" @click=${0}>Reset</sl-button>
            </div>
            <br>
            <br>
            <slot name="label">Predictions:</slot>
            <br>
            ${0}
        </div>
        <img src=${0}>
        `),this.imagelink,this.change,this.submit,this.isLoading,this.reset,this.predictions,this.imagelink)}};xt.styles=o(wt||(wt=St`
        p{
            text-align:center;
        }
        .tinit-center{
            max-width:500px;
            margin: 0 auto;
            text-align:center;
        }
        .center{
            text-align:center;
        }
        sl-tag{
            margin : 2px 2px;
        }
        input,img{
            display:none;
        }
    `)),t([rt()],xt.prototype,"model",void 0),t([ot("img")],xt.prototype,"img",void 0),xt=t([st("what-is-it")],xt);let kt,$t,Ut=t=>t,Pt=class extends it{render(){return N(kt||(kt=Ut`
    <div>
      <h2>AI-Projects</h2>
      <sl-tab-group class="tab-grp">
        <sl-tab slot="nav" panel="pqa">PaQueAns&nbsp;<sl-icon name="book"></sl-icon></sl-tab>
        <sl-tab active slot="nav" panel="cs">CommentSense&nbsp;<sl-icon name="chat-square-text"></sl-icon></sl-tab>
        <sl-tab slot="nav" panel="wii">What-Is-It&nbsp;<sl-icon name="camera"></sl-icon></sl-tab>
        <sl-tab-panel name="pqa"><pa-que-ans></pa-que-ans></sl-tab-panel>
        <sl-tab-panel name="cs"><comment-sense></comment-sense></sl-tab-panel>
        <sl-tab-panel name="wii"><what-is-it></what-is-it></sl-tab-panel>
      </sl-tab-group>
    </div>`))}};Pt.styles=o($t||($t=Ut`
    div{
      font-family: var(--sl-font-sans);
      color: var(--sl-color-gray-600);
    }
    h2{
      text-align: center;
      font-size: var(--sl-font-size-x-large);
      color: var(--sl-color-primary-500);
      font-weight:400;
    }
    .tab-grp::part(tabs){
      justify-content:center;
    }
  `)),Pt=t([st("ai-projects")],Pt);
