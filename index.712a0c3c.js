var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,i.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"7bk21":"index.712a0c3c.js","fVJut":"sprite-stars.020edb1a.svg","83IUQ":"my-library.8338c27b.js","f7PRz":"index.e88f918c.js"}')),i("8FnLx"),i("1iCTa");const s=document.querySelector(".notification-trailer-fail-btn-close"),o=(document.querySelector(".notification-trailer-fail"),document.querySelector(".notification-trailer-fail-overlay"));function c(){l()}function l(){o.style.visibility="hidden"}function a(e){"Escape"===e.code&&(document.removeEventListener("keydown",a),l())}document.querySelector('button[data-btn="trailer-fail"]').addEventListener("click",(function(){o.style.visibility="visible",o.style.transition="visibility 250ms linear 250ms",s.addEventListener("click",c),o.addEventListener("click",(function(e){e.currentTarget===e.target&&l()})),document.addEventListener("keydown",a)}));new URL(i("kyEFX").resolve("fVJut"),import.meta.url).toString();var d=i("2rpgd"),r=i("7rYDH");const u=document.querySelector(".weekly");function p(){window.innerWidth<768?r.getWeekTrending(1).then((e=>{m([e.results[0]]).then((e=>u.innerHTML=e)).catch((e=>console.log(e)))})):r.getWeekTrending(1).then((e=>{m(e.results.slice(0,3)).then((e=>u.innerHTML=e)).catch((e=>console.log(e)))}))}async function m(e){return e.reduce(((e,n)=>e+function({id:e,poster_path:n,title:t,name:i,genre_ids:s,release_date:o,first_air_date:c,vote_average:l}){const a=(0,d.getNameOfGenresById)(s);let r=a.slice(0,2).join(", ");const u=o||c;window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches&&(r=a.slice(0,1).join(", "));r.length>18&&(r=a.slice(0,1).join(", "));return`<li class="catalog__card" data-id="${e}">\n  <div class="catalog__img-wrapper">\n    <img src="https://image.tmdb.org/t/p/w500${n||"Oops. There is no poster to this movie"}" alt="${i||t}" width="395" height="574" class="catalog__img" />\n  </div>\n  <div class="catalog__info info">\n    <p class="info__title">${i||t}</p>\n<div class="info__wrap">\n<ul class="info__list">\n    <li class="info__descr">${r}</li>\n    <li class="info__descr">${function(e){return e?e.slice(0,4):""}(u)}</li>\n    </ul>\n<div class="catalog__stars-wrap">\n<div class="catalog__rating-active" style="width:${l/2/.05}%"></div>\n</div>\n</div>\n  </div>\n</li>`}(n)),"")}window.addEventListener("resize",p),p();r=i("7rYDH"),d=i("2rpgd"),d=i("2rpgd");var _=i("b5rV1");_=i("b5rV1");const g=document.querySelector(".upcoming-content");r.getUpcoming().then((({results:e})=>{const n=new Date,t=e.filter((e=>n<Date.parse(e.release_date)));if(0===t.length)return void(g.innerHTML='<div class="upcoming-error-container">\n        <p class="upcoming-error-container__text">\n          OOPS...<br />\n          We are very sorry!<br />\n          But we couldn\'t find any upcoming movies this month.\n        </p>\n      </div>');const i=Math.floor(Math.random()*t.length),s=function({backdrop_path:e,genre_ids:n,title:t,overview:i,vote_average:s,vote_count:o,release_date:c,popularity:l}){const a=s.toFixed(1),r=l.toFixed(1),u=(0,d.getNameOfGenresById)(n).slice(0,3).join(" ");return`\n      <img\n        class="upcoming-content__img"\n        src="https://image.tmdb.org/t/p/w500${e}"\n        alt="${t}"\n       \n      \n      />\n\n      <div class="upcoming-content__desktop">\n        <h3 class="upcoming-content__name">${t}</h3>\n\n        <div class="upcoming-thumb">\n          <ul class="upcoming-list left">\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Release date</p>\n              <p class="upcoming-list__date">${c}</p>\n            </li>\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Vote / Votes</p>\n              <p class="upcoming-list__vote">\n                <span class="vote"> ${a}</span> / <span class="vote">${o}</span>\n              </p>\n            </li>\n          </ul>\n\n          <ul class="upcoming-list rigth">\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Popularity</p>\n              <p class="upcoming-list__pop">${r}</p>\n            </li>\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Genre</p>\n              <p class="upcoming-list__genre">${u}</p>\n            </li>\n          </ul>\n        </div>\n\n        <h3 class="upcoming-content__title">About</h3>\n        <p class="upcoming-content__text">${i}\n        </p>\n\n  <button type="button" class="upcoming-content__btn" id="add">\n  Remind me\n</button>   \n <button type="button" class="upcoming-content__btn-remove hidden" id="remove">\n  Remove from my library\n</button>    \n`}(t[i]);var o;o=s,g.innerHTML=o;const c=document.getElementById("add"),l=document.getElementById("remove");let a=(0,_.getAddedMovies)();a=a||[],a.includes(t[i].id)&&(c.classList.add("hidden"),l.classList.remove("hidden")),c.addEventListener("click",(function(){let e=(0,_.getAddedMovies)();if(e=e||[],e.includes(t[i].id))return c.classList.add("hidden"),void l.classList.remove("hidden");e.push(t[i].id),(0,_.setAddedMovies)(e),c.classList.add("hidden"),l.classList.remove("hidden")})),l.addEventListener("click",(function(){let e=(0,_.getAddedMovies)();if(e=e||[],e.includes(t[i].id)){let n=e.findIndex((e=>e===t[i].id));e.splice(n,1),(0,_.setAddedMovies)(e),c.classList.remove("hidden"),l.classList.add("hidden")}}))})).catch((e=>console.log(e))),(0,d.setGenresInStorage)(),i("aRVga");
//# sourceMappingURL=index.712a0c3c.js.map