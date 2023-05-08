'use strict';

import sprite from '../../src/images/sprite-stars.svg';
import { getNameOfGenresById } from './get-genres';
import * as Api from './api';
// import * as moduleName from './js/module-name';

const filmList = document.querySelector('.weekly');

// функція яка перевіряє ширину екрану, якщо менше 768px то завантажує тільки один фільм
function renderWeeklyFilms() {
  if (window.innerWidth < 768) {
    Api.getWeekTrending(1).then(data => {
      const films = [data.results[0]];
      creatMarkupCatalogCard(films)
        .then(data => (filmList.innerHTML = data))
        .catch(error => console.log(error));
    });
  } else {
    Api.getWeekTrending(1).then(data => {
      const films = data.results.slice(0, 3);
      creatMarkupCatalogCard(films)
        .then(data => (filmList.innerHTML = data))
        .catch(error => console.log(error));
    });
  }
}

window.addEventListener('resize', renderWeeklyFilms);
renderWeeklyFilms();

async function creatMarkupCatalogCard(data) {
  const markUp = data.reduce((markup, film) => markup + makeCard(film), '');
  return markUp;
}

function makeCard({
  id,
  poster_path,
  title,
  name,
  genre_ids,
  release_date,
  first_air_date,
  vote_average,
}) {
  const arrOfGenres = getNameOfGenresById(genre_ids);
  let stringOfGenres = arrOfGenres.slice(0, 2).join(', ');
  const date = release_date || first_air_date;
  const mediaQuery = window.matchMedia(
    '(min-width: 768px) and (max-width: 1279px)'
  );

  // На таблетці відображає один жанр
  if (mediaQuery.matches) {
    stringOfGenres = arrOfGenres.slice(0, 1).join(', ');
  }

  // Якшо строка жанрів більша, рендерити один жанр
  if (stringOfGenres.length > 18)
    stringOfGenres = arrOfGenres.slice(0, 1).join(', ');

  // const currentGenres = () => {
  //   if (window.innerWidth < 1280) {
  //     return stringOfGenres[0];
  //   }
  //   return stringOfGenres.join(', ');
  // };

  // window.addEventListener('resize', () => {
  //   currentGenres();
  // });

  return `<li class="catalog__card" data-id="${id}">
  <div class="catalog__img-wrapper">
    <img src="https://image.tmdb.org/t/p/w500${
      poster_path || 'Oops. There is no poster to this movie'
    }" alt="${name || title}" width="395" height="574" class="catalog__img" />
  </div>
  <div class="catalog__info info">
    <p class="info__title">${name || title}</p>
<div class="info__wrap">
<ul class="info__list">
    <li class="info__descr">${stringOfGenres}</li>
    <li class="info__descr">${convertReleaseDate(date)}</li>
    </ul>
<div class="catalog__stars-wrap">
<div class="catalog__rating-active" style="width:${
    vote_average / 2 / 0.05
  }%"></div>
</div>
</div>
  </div>
</li>`;
}

function convertReleaseDate(date) {
  if (date) {
    return date.slice(0, 4);
  } else return '';
}
