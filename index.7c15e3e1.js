!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){i[n]=e},e.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"9p9yL":"index.7c15e3e1.js","5SXwj":"sprite-stars.020edb1a.svg","k7SKl":"my-library.c472f6c1.js","45zUA":"index.369fe63f.js"}')),r("cs7FV"),r("78qpV"),r("gVa74");var o=r("bpxeT"),c=r("2TvXO");r("aNJCr").getBundleURL("9p9yL"),r("iE7OH").resolve("5SXwj");var s=r("lwvvG"),a=r("b7ONl"),l=document.querySelector(".weekly");function u(){window.innerWidth<768?a.getWeekTrending(1).then((function(n){d([n.results[0]]).then((function(n){return l.innerHTML=n})).catch((function(n){return console.log(n)}))})):a.getWeekTrending(1).then((function(n){d(n.results.slice(0,3)).then((function(n){return l.innerHTML=n})).catch((function(n){return console.log(n)}))}))}function d(n){return p.apply(this,arguments)}function p(){return(p=n(o)(n(c).mark((function e(t){var i;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.reduce((function(n,e){return n+f(e)}),""),n.abrupt("return",i);case 2:case"end":return n.stop()}}),e)})))).apply(this,arguments)}function f(n){var e=n.id,t=n.poster_path,i=n.title,r=n.name,o=n.genre_ids,c=n.release_date,a=n.first_air_date,l=n.vote_average,u=(0,s.getNameOfGenresById)(o),d=u.slice(0,2).join(", "),p=c||a;return window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches&&(d=u.slice(0,1).join(", ")),d.length>18&&(d=u.slice(0,1).join(", ")),'<li class="catalog__card" data-id="'.concat(e,'">\n  <div class="catalog__img-wrapper">\n    <img data-src="https://image.tmdb.org/t/p/w500').concat(t||"Oops. There is no poster to this movie",'" alt="').concat(r||i,'" width="395" height="574" class="catalog__img lazyload" />\n  </div>\n  <div class="catalog__info info">\n    <p class="info__title">').concat(r||i,'</p>\n<div class="info__wrap">\n<ul class="info__list">\n    <li class="info__descr">').concat(d,'</li>\n    <li class="info__descr">').concat(function(n){return n?n.slice(0,4):""}(p),'</li>\n    </ul>\n<div class="catalog__stars-wrap">\n<div class="catalog__rating-active" style="width:').concat(l/2/.05,'%"></div>\n</div>\n</div>\n  </div>\n</li>')}window.addEventListener("resize",u),u();var m,g,_={};function v(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function w(n){if(m===setTimeout)return setTimeout(n,0);if((m===v||!m)&&setTimeout)return m=setTimeout,setTimeout(n,0);try{return m(n,0)}catch(e){try{return m.call(null,n,0)}catch(e){return m.call(this,n,0)}}}!function(){try{m="function"==typeof setTimeout?setTimeout:v}catch(n){m=v}try{g="function"==typeof clearTimeout?clearTimeout:h}catch(n){g=h}}();var y,b=[],T=!1,L=-1;function x(){T&&y&&(T=!1,y.length?b=y.concat(b):L=-1,b.length&&M())}function M(){if(!T){var n=w(x);T=!0;for(var e=b.length;e;){for(y=b,b=[];++L<e;)y&&y[L].run();L=-1,e=b.length}y=null,T=!1,function(n){if(g===clearTimeout)return clearTimeout(n);if((g===h||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(n);try{g(n)}catch(e){try{return g.call(null,n)}catch(e){return g.call(this,n)}}}(n)}}function E(n,e){this.fun=n,this.array=e}function A(){}_.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];b.push(new E(n,e)),1!==b.length||T||w(M)},E.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=A,_.addListener=A,_.once=A,_.off=A,_.removeListener=A,_.removeAllListeners=A,_.emit=A,_.prependListener=A,_.prependOnceListener=A,_.listeners=function(n){return[]},_.binding=function(n){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(n){throw new Error("process.chdir is not supported")},_.umask=function(){return 0};a=r("b7ONl"),s=r("lwvvG"),s=r("lwvvG");var O=r("4LMMA"),H=(O=r("4LMMA"),document.querySelector(".upcoming-content"));a.getUpcoming().then((function(n){var e=n.results,t=new Date,i=e.filter((function(n){return t<Date.parse(n.release_date)}));if(0!==i.length){var r,o=Math.floor(Math.random()*i.length),c=function(n){var e=n.backdrop_path,t=n.genre_ids,i=n.title,r=n.overview,o=n.vote_average,c=n.vote_count,a=n.release_date,l=n.popularity,u=o.toFixed(1),d=l.toFixed(1),p=(0,s.getNameOfGenresById)(t).slice(0,3).join(" ");return'\n      <img\n        class="upcoming-content__img lazyload"\n        data-src="https://image.tmdb.org/t/p/original'.concat(e,'"\n        alt="').concat(i,'"\n       \n      \n      />\n\n      <div class="upcoming-content__desktop">\n        <h3 class="upcoming-content__name">').concat(i,'</h3>\n\n        <div class="upcoming-thumb">\n          <ul class="upcoming-list left">\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Release date</p>\n              <p class="upcoming-list__date">').concat(a,'</p>\n            </li>\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Vote / Votes</p>\n              <p class="upcoming-list__vote">\n                <span class="vote"> ').concat(u,'</span> / <span class="vote">').concat(c,'</span>\n              </p>\n            </li>\n          </ul>\n\n          <ul class="upcoming-list rigth">\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Popularity</p>\n              <p class="upcoming-list__pop">').concat(d,'</p>\n            </li>\n            <li class="upcoming-list__item">\n              <p class="upcoming-list__text">Genre</p>\n              <p class="upcoming-list__genre">').concat(p,'</p>\n            </li>\n          </ul>\n        </div>\n\n        <h3 class="upcoming-content__title">About</h3>\n        <p class="upcoming-content__text">').concat(r,'\n        </p>\n\n  <button type="button" class="upcoming-content__btn" id="add">\n  Remind me\n</button>   \n <button type="button" class="upcoming-content__btn-remove hidden" id="remove">\n  Remove from my library\n</button>    \n')}(i[o]);r=c,H.innerHTML=r;var a=document.getElementById("add"),l=document.getElementById("remove"),u=(0,O.getAddedMovies)();(u=u||[]).includes(i[o].id.toString())&&(a.classList.add("hidden"),l.classList.remove("hidden")),a.addEventListener("click",(function(){var n=(0,O.getAddedMovies)();if((n=n||[]).includes(i[o].id))return a.classList.add("hidden"),void l.classList.remove("hidden");n.push(i[o].id.toString()),(0,O.setAddedMovies)(n),a.classList.add("hidden"),l.classList.remove("hidden")})),l.addEventListener("click",(function(){var n=(0,O.getAddedMovies)();if((n=n||[]).includes(i[o].id.toString())){var e=n.findIndex((function(n){return n===i[o].id}));n.splice(e,1),(0,O.setAddedMovies)(n),a.classList.remove("hidden"),l.classList.add("hidden")}}))}else H.innerHTML='<div class="upcoming-error-container">\n        <p class="upcoming-error-container__text">\n          OOPS...<br />\n          We are very sorry!<br />\n          But we couldn\'t find any upcoming movies this month.\n        </p>\n      </div>'})).catch((function(n){return console.log(n)})),r("2v3Ni"),r("6IdhT")}();
//# sourceMappingURL=index.7c15e3e1.js.map
