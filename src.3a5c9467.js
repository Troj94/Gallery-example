parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"UcKC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=require("./partials/items.js");const t=document.querySelector(".js-gallery"),r=document.querySelector(".js-lightbox"),l=document.querySelector(".lightbox__image"),a=()=>{r.classList.remove("is-open")},s=(e,t)=>{l.setAttribute(e,t)},n=(e,t)=>{t.insertAdjacentHTML("afterbegin",e.map(e=>`<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${e.original}"\n  >\n    <img\n      class="gallery__image"\n      src="${e.preview}"\n      data-source="${e.original}"\n      alt="${e.description}"\n    />\n  </a>\n</li>`).join(""))};n(e.galleryItems,t);const i=document.querySelectorAll(".gallery__link"),c=t.querySelector("li");t.addEventListener("click",e=>{e.preventDefault(),"IMG"===e.target.nodeName&&(r.classList.add("is-open"),s("src",e.target.dataset.source),s("alt",e.target.alt))}),r.addEventListener("click",e=>{"BUTTON"===e.target.nodeName?(a(),s("src","")):"IMG"!==e.target.nodeName&&(a(),s("src",""))}),window.addEventListener("keydown",t=>{let r=e.galleryItems.findIndex(e=>e.original===l.src);"Escape"===t.code?(a(),s("src",""),window.removeEventListener("keydown",t)):"ArrowLeft"===t.code?(0===r?r=e.galleryItems.length-1:r-=1,s("src",e.galleryItems[r].original),s("alt",e.galleryItems[r].description)):"ArrowRight"===t.code&&(r===e.galleryItems.length-1?r=0:r+=1,s("src",e.galleryItems[r].original),s("alt",e.galleryItems[r].description))});
},{"./sass/main.scss":"clu1","./partials/items.js":"UcKC"}]},{},["Focm"], null)
//# sourceMappingURL=/Gallery-example/src.3a5c9467.js.map