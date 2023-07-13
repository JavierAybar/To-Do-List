"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(669),t.b),l=i()(o()),u=s()(d);l.push([n.id,`body {\n  height: 100vh;\n  background-color: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\n.todo__container {\n  width: auto;\n  border: 1px solid rgb(205 205 205);\n}\n\n.task__item,\n.add__input,\n.todo__title {\n  padding: 15px;\n  border: 1px solid rgb(205 205 205);\n  background-color: #f4f4f4;\n  display: flex;\n  gap: 10px;\n}\n\n.list__container {\n  width: 500px;\n}\n\n.btn__clear {\n  width: 100%;\n  padding: 20px;\n  font-size: 1rem;\n  background-color: #e9e7e7;\n  border: 1px solid rgb(205 205 205);\n  color: rgb(112, 108, 108);\n  cursor: pointer;\n}\n\n.todo__title {\n  display: flex;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.add__input {\n  display: inline;\n  width: 100%;\n}\n\n.points__img {\n  width: 16px;\n  cursor: move;\n}\n\n.update__icon {\n  width: 18px;\n  height: auto;\n  margin-left: auto;\n  transform: rotate(295deg);\n}\n\n.enter__icon {\n  width: 25px;\n}\n\n.submit__btn {\n  position: absolute;\n  top: 16px;\n  right: 13px;\n  width: 28px;\n  cursor: pointer;\n  background: url(${u}) no-repeat center center;\n  background-size: cover;\n  border: none;\n  color: transparent;\n}\n\n.input__container {\n  position: relative;\n  background-color: #f4f4f4;\n}\n\n.trash__img {\n  width: 16px;\n  margin-left: auto;\n  cursor: pointer;\n  opacity: 0;\n}\n\n.task__item:hover .trash__img {\n  opacity: unset;\n}\n\n.task__item:hover {\n  background-color: rgba(233, 208, 99, 0.377);\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},591:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),d=t(565),l=t.n(d),u=t(216),p=t.n(u),f=t(589),m=t.n(f),g=t(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const _=t.p+"f3dd0eea61235383f4d2.svg",v=t.p+"d5bf49961e1447ab6262.png",b=t.p+"99dcfec6f53115a3e076.svg",y=document.querySelector(".add__input"),x=document.querySelector(".list__container"),k=n=>{x.innerHTML="",n.forEach(((n,e)=>{const t=document.createElement("li");t.classList.add("task__item"),t.innerHTML=`\n      <input class="check__box" type="checkbox" data-index="${e}">\n      <p class="edit__content">${n.description}</p>\n      <img class="trash__img" src=${b} alt="">\n      <img class="points__img" src=${v} alt="">\n      `,x.appendChild(t)}))};let S=JSON.parse(localStorage.getItem("tasks"))||[];document.querySelector(".update__icon").setAttribute("src",_),k(S),document.querySelector(".submit__btn").addEventListener("click",(n=>{n.preventDefault(),(n=>{const e={description:y.value,completed:!1,index:n.length};n.push(e),localStorage.setItem("tasks",JSON.stringify(n))})(S),y.value="",k(S),localStorage.setItem("tasks",JSON.stringify(S))})),document.querySelector(".btn__clear").addEventListener("click",(()=>{document.querySelectorAll(".check__box:checked").forEach((n=>{const e=n.parentNode,t=Array.from(e.parentNode.children).indexOf(e);S=S.filter(((n,e)=>e!==t)),e.remove()})),localStorage.setItem("tasks",JSON.stringify(S))})),x.addEventListener("click",(n=>{if(n.target.classList.contains("trash__img")){const e=n.target.parentNode,t=Array.from(e.parentNode.children).indexOf(e);S=S.filter(((n,e)=>e!==t)),e.remove(),localStorage.setItem("tasks",JSON.stringify(S))}})),(()=>{const n=document.querySelectorAll(".edit__content");x.addEventListener("click",(e=>{e.target.classList.contains(".edit__content")&&(n.contentEditable=!0,null===n.value)&&e.target.parentNode.remove()}))})()},669:(n,e,t)=>{n.exports=t.p+"19b79d66c72f865ec013.svg"}},n=>{n(n.s=591)}]);