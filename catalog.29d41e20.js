!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a=i("bpxeT"),c=i("2TvXO"),o=(a=i("bpxeT"),c=i("2TvXO"),i("lwvvG"));function s(e){return l.apply(this,arguments)}function l(){return(l=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.slice(0,10).reduce((function(e,t){return e+u(t)}),""),e.abrupt("return",r);case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function u(e){var t=e.id,n=e.poster_path,r=e.title,i=e.name,a=e.genre_ids,c=e.release_date,s=e.first_air_date,l=e.vote_average,u=(0,o.getNameOfGenresById)(a),d=u.slice(0,2).join(", "),f=c||s;return window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches&&(d=u.slice(0,1).join(", ")),d.length>18&&(d=u.slice(0,1).join(", ")),'<li class="catalog__card" data-id="'.concat(t,'">\n    <div class="catalog__img-wrapper">\n      <img src="https://image.tmdb.org/t/p/w500').concat(n||"Oops. There is no poster to this movie",'" alt="').concat(i||r,'" width="395" height="574" class="catalog__img" />\n    </div>\n    <div class="catalog__info info">\n      <p class="info__title">').concat(i||r,'</p>\n\t\t<div class="info__wrap">\n\t\t<ul class="info__list">\n      <li class="info__descr">').concat(d,'</li>\n      <li class="info__descr">').concat(function(e){return e?e.slice(0,4):""}(f),'</li>\n      </ul>\n\t\t<div class="catalog__stars-wrap">\n\t\t<div class="catalog__rating-active" style="width:').concat(l/2/.05,'%"></div>\n\t\t</div>\n\t\t</div>\n    </div>\n  </li>')}var d=i("b7ONl"),f=document.querySelector(".catalog"),p=document.querySelector(".catalog__btn"),_=document.querySelector(".catalog__input");function v(){return(v=e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=_.value.trim(),e.next=4,d.getBySearch(r,1);case 4:i=e.sent,s(i.results).then((function(e){return f.innerHTML=e})),""===_.value&&d.getWeekTrending(1).then((function(e){s(e.results).then((function(e){return f.innerHTML=e})).catch((function(e){return console.log(e)}))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}p.addEventListener("click",(function(e){return v.apply(this,arguments)})),d.getWeekTrending(1).then((function(e){s(e.results).then((function(e){return f.innerHTML=e})).catch((function(e){return console.log(e)}))})),i("cs7FV"),i("78qpV")}();
//# sourceMappingURL=catalog.29d41e20.js.map
