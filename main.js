(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    padding: 16px;\n}\n\n.nav-buttons {\n    font-size: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n}\n\n.btn {\n    cursor: pointer;\n    padding: 16px;\n  }\n\nmain {\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1;\n}\n\n.new-task {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n}\n\n.buttons {\n    display: flex;\n    justify-content: space-between;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t=[]){this.name=e,this.tasks=t}get info(){return this.tasks}assignTask(e){this.tasks.push(e)}}const t=function(){const t=[new e("Select Project"),new e("Add To New Project")];return{getProjects:()=>t,setProjects:e=>t.push(e)}}();class r{constructor(e,t,n,r){this.title=e,this.date=t,this.project=n,this.description=r}get info(){return`${this.title} on ${this.date} in ${this.project}: ${this.description}`}}var o=n(379),a=n.n(o),i=n(795),c=n.n(i),s=n(569),d=n.n(s),l=n(565),u=n.n(l),p=n(216),m=n.n(p),f=n(589),h=n.n(f),v=n(426),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=m(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,t.getProjects();const g=document.getElementById("content");g.appendChild(function(){const e=document.createElement("header"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");e.appendChild(t);let a=["projects","new"],i=0;return[r,o].forEach((e=>{e.className=`${a[i]} btn`,n.appendChild(e),i++})),t.className="logo",n.className="nav-buttons",e.appendChild(n),t.innerText="To Do App",r.innerText="Projects",o.innerText="New Task",e}()),g.appendChild(function(){const e=document.createElement("main"),n=document.createElement("form");n.method="post";let r=["Title","Date","Add To Existing Project","Add To New Project","Description"];for(let e in r){const o=r[e],a=o.replace(/\s/g,"-").toLowerCase(),i=document.createElement("div"),c=document.createElement("label");if(i.className=a,c.htmlFor=a,"Description"===o){let e=document.createElement("div"),t=document.createElement("textarea");t.name=o,t.id=a,t.required=!0,i.appendChild(c),e.appendChild(t),i.appendChild(e)}else if("Add To Existing Project"===o){let e=document.createElement("div"),n=document.createElement("select");n.name="project",n.id=a,n.required=!0;let r=t.getProjects();for(let e in r){let t=document.createElement("option");t.text=r[e].name,"Select Project"===r[e].name?t.value="":t.value=r[e].name,n.options.add(t)}i.appendChild(c),e.appendChild(n),i.appendChild(e)}else if("Add To New Project"===o){let e=document.createElement("div"),t=document.createElement("input");t.type="text",t.name="project",t.id=a,t.disabled=!0,i.appendChild(c),e.appendChild(t),i.appendChild(e)}else if("Date"===o){let e=document.createElement("div"),t=document.createElement("input");t.type="date",t.name=o,t.id=a,t.required=!0,i.appendChild(c),e.appendChild(t),i.appendChild(e)}else{let e=document.createElement("div"),t=document.createElement("input");t.type="text",t.name=o,t.id=a,t.required=!0,i.appendChild(c),e.appendChild(t),i.appendChild(e)}c.innerText=o,n.appendChild(i)}const o=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button");return o.className="buttons",a.type="submit",a.id="submit",i.id="cancel",a.innerText="Submit",i.innerText="Cancel",o.appendChild(a),o.appendChild(i),n.appendChild(o),n.className="new-task",e.appendChild(n),e}()),document.querySelector(".nav-buttons").addEventListener("click",(e=>{let t=document.querySelector("main");"projects btn"===e.target.className&&(t.textContent="projects")}));const b=document.querySelector(".new-task"),x=document.querySelector(".buttons"),C=document.querySelector(".add-to-existing-project");x.addEventListener("click",(e=>{if("submit"===e.target.id){if(!1===b.checkValidity())return void b.reportValidity();const e=new FormData(b),t=new r;for(const n of e)t[n[0].replace(/\s/g,"-").toLowerCase()]=n[1];console.log(t)}else"cancel"===e.target.id&&(document.querySelector("main"),console.log("cancel"));e.preventDefault()})),C.addEventListener("change",(e=>{const t=document.getElementById("add-to-new-project");console.log(e.target.value),"Add To New Project"===e.target.value?(t.disabled=!1,t.required=!0,console.log(t)):(t.innerText="",t.disabled=!0)}))})()})();