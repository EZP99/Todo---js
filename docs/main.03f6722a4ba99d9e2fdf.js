(()=>{"use strict";var e={553:(e,t,r)=>{const o=r(468);class n extends o{static from(e){return e instanceof o?e:new n(e)}constructor(e){super(),this._sourceLike=e}source(){return this._sourceLike.source()}buffer(){return"function"==typeof this._sourceLike.buffer?this._sourceLike.buffer():super.buffer()}size(){return"function"==typeof this._sourceLike.size?this._sourceLike.size():super.size()}map(e){return"function"==typeof this._sourceLike.map?this._sourceLike.map(e):super.map(e)}sourceAndMap(e){return"function"==typeof this._sourceLike.sourceAndMap?this._sourceLike.sourceAndMap(e):super.sourceAndMap(e)}updateHash(e){if("function"==typeof this._sourceLike.updateHash)return this._sourceLike.updateHash(e);if("function"==typeof this._sourceLike.map)throw new Error("A Source-like object with a 'map' method must also provide an 'updateHash' method");e.update(this.buffer())}}e.exports=n},468:e=>{e.exports=class{source(){throw new Error("Abstract")}buffer(){const e=this.source();return Buffer.isBuffer(e)?e:Buffer.from(e,"utf-8")}size(){return this.buffer().length}map(e){return null}sourceAndMap(e){return{source:this.source(),map:this.map(e)}}updateHash(e){throw new Error("Abstract")}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}r.d(o,{L:()=>v});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var r,o,n;return r=t,n=[{key:"fromJson",value:function(e){var r=e.id,o=e.tarea,n=e.completado,a=e.creado,i=new t(o);return i.id=r,i.completado=n,i.creado=a,i}}],(o=null)&&e(r.prototype,o),n&&e(r,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var r,o,a;return r=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,r=n(this.todos);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(console.log(e,o.id),o.id===e){o.id=!o.completado,this.guardarLocalStorage();break}}}catch(e){r.e(e)}finally{r.f()}}},{key:"eliminarCompletado",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(t.fromJson)}}])&&i(r.prototype,o),a&&i(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();r(553);function u(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var l=document.querySelector(".todo-list"),f=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),p=document.querySelector(".filters"),h=document.querySelectorAll(".filtro"),m=function(e){var t='\n    <li class=" '.concat(e.completado?"completed":"",' " data-id="').concat(e.id,' ">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completed?"checked":""," >\n            <label> ").concat(e.tarea,'  </label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li> '),r=document.createElement("div");return r.innerHTML=t,l.append(r.firstElementChild),r.firstElementChild};f.addEventListener("keyup",(function(e){if(13===e.keyCode&&f.value.length>0){var r=new t(f.value);v.nuevoTodo(r),console.log(v),m(r),f.value=""}})),l.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,o=r.getAttribute("data-id");t.includes("input")?(v.marcarCompletado(o),r.classList.toggle("completed")):t.includes("button")&&(v.eliminarTodo(o),l.removeChild(r))})),d.addEventListener("click",(function(){v.eliminarCompletado();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];!t.classList.contains("completed")||l.removeChild(t)}})),p.addEventListener("click",(function(e){console.log(e.target.text);var t=e.target.text;if(h.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected"),t){var r,o=u(l.children);try{for(o.s();!(r=o.n()).done;){var n=r.value;console.log(n),n.classList.remove("hidden");var a=n.classList.contains("completed");switch(t){case"Pendientes":a&&n.classList.add("hidden");break;case"Completados":a||n.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var v=new c;v.todos.forEach(m),console.log(v.todos)})()})();