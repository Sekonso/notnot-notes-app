(()=>{var e={249:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Yellowtail&display=swap);"]),a.push([e.id,'/* Yellowtail and inter font import */\n\n:root {\n  --pink: #f8a7ae;\n  --light-blue: #93bffe;\n  --dark-blue: #648cf2;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "Inter", sans-serif;\n}\n\nmain {\n  min-height: 75vh;\n}\n\nbutton {\n  border: none;\n}\nbutton:hover {\n  cursor: pointer;\n}\nbutton:active {\n  scale: 0.9;\n}\n\ninput,\ntextarea {\n  display: block;\n  border: 3px solid white;\n  outline: none;\n  width: 100%;\n  padding: 0.5rem;\n}\ninput:disabled,\ntextarea:disabled {\n  background: white;\n}\n\nheader,\nmain,\nfooter {\n  padding: 1rem 2rem;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 0.8rem;\n  color: var(--light-blue);\n}\n\n/* Navbar */\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.7rem;\n}\n.navbar > * {\n  font-family: "Yellowtail", cursive;\n}\n.navbar h1 {\n  font-size: 3.5rem;\n  color: var(--light-blue);\n}\n\n.navbar p {\n  font-size: 1.5rem;\n  color: var(--pink);\n}\n@media (max-width: 480px) {\n  .navbar {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n  }\n}\n',""]);const s=a},219:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,'/* Main buttons container */\n.main-buttons {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n\n/* Add note toggler */\n.form-toggler {\n  background: var(--dark-blue);\n  color: white;\n  padding: 0.5rem 1.7rem;\n  border-radius: 50px;\n  transition: background 0.3s ease-in;\n}\n.form-toggler:hover {\n  background: var(--pink);\n}\n\n/* Notes type selector */\n#notes-type-selector {\n  padding: 0.45rem 1rem;\n  background: var(--dark-blue);\n  color: white;\n  border-radius: 50px;\n  border: none;\n}\n\n#notes-type-selector:hover {\n  cursor: pointer;\n}\n\n/* Note form */\nnote-form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 9999;\n}\nnote-form {\n  display: none;\n}\n\nnote-form form {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  background: white;\n  color: black;\n  border-radius: 10px;\n  transform: scale(0.5);\n  opacity: 0;\n  transition: transform 0.2s ease;\n}\nnote-form form.appended {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.form-cancel {\n  align-self: flex-end;\n  margin-bottom: 1rem;\n  background: none;\n  color: var(--light-blue);\n}\n.form-cancel:hover {\n  color: var(--pink);\n}\n.form-cancel i {\n  font-size: 1.5rem;\n}\n\n#title-input {\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n#title-input:focus {\n  border-bottom: 3px solid var(--light-blue);\n}\n\n#body-input {\n  min-height: 7rem;\n  overflow: auto;\n  scroll-behavior: auto;\n}\n#body-input:focus {\n  border: 3px solid var(--light-blue);\n  border-radius: 5px;\n}\n\n.note-add {\n  align-self: center;\n  width: 50%;\n  padding: 0.5rem;\n  margin-top: 1.5rem;\n  background: var(--dark-blue);\n  color: white;\n  border-radius: 50px;\n  transition: background 0.3s ease-in;\n}\n.note-add:hover {\n  background: var(--pink);\n}\n\n.warning {\n  color: red;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n}\n\n/* Note list */\nnote-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(225px, 1fr));\n  gap: 2rem;\n  color: var(--dark-blue);\n}\n\n/* note-item */\nnote-item {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background: var(--pink);\n  color: white;\n  padding: 1.5rem;\n  border-radius: 10px;\n  opacity: 0;\n}\nnote-item.appended {\n  opacity: 1;\n  animation: pop 0.5s;\n}\nnote-item:nth-child(even) {\n  background: var(--dark-blue);\n}\n\nnote-item h1,\nnote-item p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nnote-item h1 {\n  white-space: nowrap;\n}\nnote-item p {\n  height: 5rem;\n}\n\n/* Note item buttons */\n.note-buttons-container {\n  display: flex;\n  gap: 0.7rem;\n}\n\n.note-button {\n  background: var(--pink);\n  color: white;\n  height: 32px;\n  width: 32px;\n  padding: 0.5rem;\n  border-radius: 50%;\n}\n.note-button:hover {\n  background: white;\n  color: var(--pink);\n  transition: background 0.3s ease-in;\n  display: inline-block;\n  animation: shaky 0.5s infinite;\n}\n\nnote-item:nth-child(odd) .note-button {\n  background: var(--dark-blue);\n  transition: background 0.3s ease-in;\n}\nnote-item:nth-child(odd) .note-button:hover {\n  background: white;\n  color: var(--dark-blue);\n}\n\n/* Loading */\n.loading::before {\n  content: "Loading";\n  animation: loading 1s infinite steps(4);\n  display: inline-block;\n  color: var(--dark-blue);\n}\n\n/* Confirmation dialogue */\nconfirm-dialogue {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 9999;\n}\n\n.confirm-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  background: white;\n  padding: 2rem;\n  border-radius: 10px;\n  transform: scale(0.5);\n  opacity: 0;\n  transition: transform 0.2s ease;\n}\n.confirm-container.appended {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.confirm-message {\n  font-size: 1.3rem;\n  text-align: center;\n}\n\n.confirm-buttons-container {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.confirm-buttons-container button {\n  width: 100%;\n  padding: 0.5rem 0;\n  border-radius: 50px;\n  background: var(--dark-blue);\n  color: white;\n  transition: background 0.3s ease-in;\n}\n.confirm-buttons-container button:hover {\n  background: var(--pink);\n}\n\n/* Loading animation */\n@keyframes loading {\n  0% {\n    content: "Loading";\n  }\n  25% {\n    content: "Loading.";\n  }\n  50% {\n    content: "Loading..";\n  }\n  75% {\n    content: "Loading...";\n  }\n}\n\n/* Shaky icon animation */\n@keyframes shaky {\n  0%,\n  100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}\n\n/* Pop effect animation */\n@keyframes pop {\n  0% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* Phone display */\n@media (max-width: 760px) {\n  .main-buttons {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n\n  .main-buttons > * {\n    width: 100%;\n  }\n\n  note-form form {\n    width: 85%;\n    padding: 1rem;\n  }\n\n  #body-input {\n    height: 10rem;\n  }\n\n  note-list {\n    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\n  }\n\n  .confirm-dialogue {\n    width: 90%;\n  }\n}\n',""]);const s=a},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var h=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)n[h].references++,n[h].updater(m);else{var p=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var d=r(e,o),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},236:()=>{class e extends HTMLElement{static observedAttributes=["mode"];_noteData={id:"",title:"",body:"",createdAt:"",archived:!1};constructor(){super(),this._mode=this.getAttribute("mode")}connectedCallback(){this.render(),this.hideForm()}attributeChangedCallback(e,n,t){this[`_${e}`]=t,this.render()}render(){this.innerHTML="",this.appendChild(this.generateForm()),this.elementsEventHandler(),setTimeout((()=>{document.querySelector("note-form form").classList.add("appended")}),100)}generateForm(){const e=document.createElement("form"),n=document.createElement("button");n.classList.add("form-cancel"),n.setAttribute("type","button"),n.innerHTML='<i class="fa-solid fa-xmark"></i>';const t=document.createElement("div");t.classList.add("title-form-group"),t.innerHTML=`\n      <input\n        type="text"\n        id="title-input"\n        value="${this._noteData.title}"\n        placeholder="Insert a title"\n        autocomplete="off"\n        minlength="0"\n        maxlength="50"\n        ${this.checkDisabled()}\n        required\n      />\n    `;const r=document.createElement("div");if(r.classList.add("body-form-group"),r.innerHTML=`\n      <textarea\n        name="body-input"\n        id="body-input"\n        placeholder="Start typing"\n        autocomplete="off"\n        minlength="0"\n        maxlength="250"\n        ${this.checkDisabled()}\n        required\n      >${this._noteData.body}</textarea>\n    `,e.appendChild(n),e.appendChild(t),e.appendChild(r),"add"===this._mode){const n=document.createElement("button");n.classList.add("note-add"),n.innerText="Add",e.appendChild(n)}return e}displayForm(e){this.setAttribute("mode",e),document.querySelector("note-form").style.display="flex"}hideForm(){document.querySelector("note-form").style.display="none"}checkDisabled(){if("view"===this._mode)return"disabled"}addNote(){const e={title:this.querySelector("#title-input").value,body:this.querySelector("#body-input").value};document.querySelector("note-list").addNote(e)}setNoteData(e){this._noteData=e}clearNoteData(){this._noteData={id:"",title:"",body:"",createdAt:"",archived:!1}}appendWarning(e,n){const t=document.createElement("p");t.classList.add("warning"),t.innerText=n,e.insertAdjacentElement("afterend",t)}addElementEvent(e,n,t){document.querySelector(e).addEventListener(n,t)}elementsEventHandler(){this.addElementEvent(".form-cancel","click",this.hideForm),this.addElementEvent("note-form form","submit",(e=>{e.preventDefault(),this.addNote(),this.clearNoteData(),this.hideForm()})),this.addElementEvent("#title-input","input",(e=>{const n=e.target.nextElementSibling;e.target.value.length<=0?(n&&n.remove(),this.appendWarning(e.target,"Please fill out this field")):e.target.value.length>=50?(n&&n.remove(),this.appendWarning(e.target,"You have reached character limit(50)")):n&&n.remove()})),this.addElementEvent("#body-input","input",(e=>{const n=e.target.nextElementSibling;e.target.value.length<=0?(n&&n.remove(),this.appendWarning(e.target,"Please fill out this field")):e.target.value.length>=250?(n&&n.remove(),this.appendWarning(e.target,"You have reached character limit(250)")):n&&n.remove()}))}}customElements.define("note-form",e)},874:()=>{class e extends HTMLElement{static observedAttributes=["type"];_notesData=[];constructor(){super(),this._type=this.getAttribute("type")}connectedCallback(){this.getNotes()}attributeChangedCallback(e,n,t){this[`_${e}`]=t}render(){if(this.innerHTML="",this._notesData.length<=0)this.innerHTML="<h1>Data masih kosong...</h1>";else{const e=this.generateNoteItemElements(this._notesData);this.append(...e)}}async getNotes(){try{this.renderLoading();const e=await fetch("https://notes-api.dicoding.dev/v2/notes");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const n=await e.json();this._notesData=await n.data,this.render()}catch(e){console.error(`Error getting notes data: ${e}`),window.alert(`Error getting notes data: ${e}`)}}async getArchivedNotes(){try{this.renderLoading();const e=await fetch("https://notes-api.dicoding.dev/v2/notes/archived");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const n=await e.json();this._notesData=await n.data,this.render()}catch(e){console.error(`Error getting notes data: ${e}`),window.alert(`Error getting archived notes data: ${e}`)}}async getNote(e){try{const n=await fetch(`https://notes-api.dicoding.dev/v2/notes/${e}`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return(await n.json()).data}catch(e){console.error(`Error getting note data: ${e}`),window.alert(`Error getting note data: ${e}`)}}async addNote(e){try{this.renderLoading();const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t=await fetch("https://notes-api.dicoding.dev/v2/notes",n);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);if("non-archived"===this._type){const e=await t.json();this._notesData.push(await e.data)}this.render()}catch(e){console.error(`Error uploading new data: ${e}`),window.alert(`Error uploading new data: ${e}`)}}async deleteNote(e){try{this.renderLoading();const n=await fetch(`https://notes-api.dicoding.dev/v2/notes/${e}`,{method:"DELETE"});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);this._notesData=this._notesData.filter((n=>n.id!=e))}catch(e){console.error(`Error deleting data: ${e}`),window.alert(`Error deleting data: ${e}`)}this.render()}async archiveNote(e){try{this.renderLoading();const n=await fetch(`https://notes-api.dicoding.dev/v2/notes/${e}/archive`,{method:"POST"});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);this._notesData=this._notesData.filter((n=>n.id!=e))}catch(e){console.error(`Error archiving data: ${e}`),window.alert(`Error archiving data: ${e}`)}this.render()}async unarchiveNote(e){try{this.renderLoading();const n=await fetch(`https://notes-api.dicoding.dev/v2/notes/${e}/unarchive`,{method:"POST"});if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);this._notesData=this._notesData.filter((n=>n.id!=e))}catch(e){console.error(`Error unarchiving data: ${e}`),window.alert(`Error unarchiving data: ${e}`)}this.render()}renderLoading(){this.innerHTML='<h1 class="loading"></h1>'}generateNoteItemElements(){return this._notesData.map((e=>{const n=document.createElement("note-item");return n.setNote(e),n.setAttribute("type",`${this._type}`),setTimeout((()=>{n.classList.add("appended")}),100),n}))}}customElements.define("note-list",e)}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),d=t.n(s),c=t(540),l=t.n(c),u=t(113),h=t.n(u),m=t(249),p={};p.styleTagTransform=h(),p.setAttributes=d(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),n()(m.A,p),m.A&&m.A.locals&&m.A.locals;var f=t(219),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(f.A,g),f.A&&f.A.locals&&f.A.locals,t(874);class v extends HTMLElement{static observedAttributes=["type"];_note={id:null,title:null,body:null,createdAt:null,archived:null};constructor(){super(),this._type=this.getAttribute("type")}connectedCallback(){this.render()}attributeChangedCallback(e,n,t){this[`_${e}`]=t,this.render()}render(){this.innerHTML="";const e=document.createElement("h1");e.classList.add("note-title"),e.innerText=this._note.title;const n=document.createElement("p");n.classList.add("note-body"),n.innerHTML=this._note.body.replace(/\n/g,"<br>");const t=document.createElement("div");t.classList.add("note-buttons-container");const r=document.createElement("button");r.classList.add("note-view-button","note-button"),r.innerHTML='<i class="fa-solid fa-ellipsis"></i>';const o=document.createElement("button");o.classList.add("note-archive-button","note-button"),"non-archived"===this._type?o.innerHTML='<i class="fa-solid fa-folder-plus"></i>':"archived"===this._type&&(o.innerHTML='<i class="fa-solid fa-folder-minus"></i>');const i=document.createElement("button");i.classList.add("note-delete-button","note-button"),i.innerHTML='<i class="fa-solid fa-trash"></i>';const a=document.querySelector("note-form"),s=document.querySelector("confirm-dialogue");r.addEventListener("click",(()=>{a.setNoteData(this._note),a.displayForm("view")})),o.addEventListener("click",(()=>{"non-archived"===this._type&&(s.displayConfirmDialogue("archive"),s.setAttribute("target",this._note.id)),"archived"===this._type&&(s.displayConfirmDialogue("unarchive"),s.setAttribute("target",this._note.id))})),i.addEventListener("click",(()=>{s.displayConfirmDialogue("delete"),s.setAttribute("target",this._note.id)})),t.appendChild(r),t.appendChild(o),t.appendChild(i),this.appendChild(e),this.appendChild(n),this.appendChild(t)}setNote(e){this._note=e,this.render()}}customElements.define("note-item",v),t(236);class b extends HTMLElement{static observedAttributes=["option","target"];constructor(){super(),this._option=this.getAttribute("option"),this._target=this.getAttribute("target")}connectedCallback(){this.render(),this.hideConfirmDialogue()}attributeChangedCallback(e,n,t){this[`_${e}`]=t,this.render()}render(){this.innerHTML="";const e=document.createElement("div");e.classList.add("confirm-container");const n=document.createElement("h1");n.classList.add("confirm-message"),n.innerText=`Are you sure to ${this._option} this note?`;const t=document.createElement("div");t.classList.add("confirm-buttons-container");const r=document.createElement("button");r.innerText="Yes";const o=document.createElement("button");o.innerText="No",r.addEventListener("click",(()=>{"archive"===this._option&&document.querySelector("note-list").archiveNote(this._target),"unarchive"===this._option&&document.querySelector("note-list").unarchiveNote(this._target),"delete"===this._option&&document.querySelector("note-list").deleteNote(this._target),this.hideConfirmDialogue()})),o.addEventListener("click",this.hideConfirmDialogue),t.appendChild(r),t.appendChild(o),e.appendChild(n),e.appendChild(t),this.appendChild(e),setTimeout((()=>{document.querySelector(".confirm-container").classList.add("appended")}),100)}displayConfirmDialogue(e){this.setAttribute("option",e),document.querySelector("confirm-dialogue").style.display="flex"}hideConfirmDialogue(){document.querySelector("confirm-dialogue").style.display="none"}}customElements.define("confirm-dialogue",b);const y=document.querySelector(".form-toggler"),w=document.querySelector("note-form");y.addEventListener("click",(()=>{w.clearNoteData(),w.displayForm("add")}));const x=document.querySelector("#notes-type-selector"),E=document.querySelector("note-list");x.addEventListener("change",(()=>{"non-archived"===x.value?(E.setAttribute("type","non-archived"),E.getNotes()):"archived"===x.value&&(E.setAttribute("type","archived"),E.getArchivedNotes())}))})()})();