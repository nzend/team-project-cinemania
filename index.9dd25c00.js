function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("2rpgd",(function(n,t){e(n.exports,"setGenresInStorage",(function(){return i})),e(n.exports,"getNameOfGenresById",(function(){return s}));var r=o("7rYDH");function i(){r.getGanres().then((e=>{localStorage.setItem("genres",JSON.stringify(e.genres))}))}function s(e){const n=localStorage.getItem("genres"),t=JSON.parse(n);return e.map((e=>{const n=t.find((n=>n.id===e));return n?("Science Fiction"===n.name?n.name="Sci-Fi":n.name,n.name):""}))}i()})),o.register("9tydV",(function(e,n){const t=document.querySelector(".back-home"),r=document.querySelector(".header").offsetTop;t.classList.add("hidden"),window.addEventListener("scroll",(()=>{window.pageYOffset>r?t.classList.remove("hidden"):t.classList.add("hidden")})),t.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}));
//# sourceMappingURL=index.9dd25c00.js.map