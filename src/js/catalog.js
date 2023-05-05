// Тут додаємо імпорт готового модулю за зразком:
import sprite from '../../src/images/sprite-stars.svg';
import { setGenresInStorage, getNameOfGenresById } from './get-genres';

// import * as moduleName from './js/module-name';

setGenresInStorage();

export async function creatMarkupCatalogCard(data) {
  console.log(data);
  const markUp = data
    .slice(0, 10)
    .reduce((markup, film) => markup + makeCard(film), '');
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
  console.log(first_air_date, release_date);

  const arrOfGenres = getNameOfGenresById(genre_ids);
  const stringOfGenres = arrOfGenres.slice(0, 2).join(', ');
  const date = release_date || first_air_date;

  initRatings(vote_average);

  return `<li class="catalog__card" data-id="${id}">
    <div class="catalog__img-wrapper">
      <img src="https://image.tmdb.org/t/p/w500${
        poster_path || 'Oops. There is no poster to this movie'
      }" alt="${name || title}" width="395" height="574" class="catalog__img" />
    </div>
    <div class="catalog__info info">
      <p class="info__title">${name || title}</p>
      <ul class="info__list">
      <li class="info__descr">${stringOfGenres}</li>
      <li class="info__descr">${convertReleaseDate(date)}</li>
      </ul>
		<div class="catalog__stars-wrap">
		<div class="catalog__raitnig-active"></div>
		<div class="catalog__raitnig-list"></div>
		</div>
    </div>
  </li>`;
}


function initRatings(n) {
  let raitingActive;
  const value = n;
 const raitings = document.querySelectorAll('.catalog__stars-wrap');
  for (let index = 0; index < raitings.length; index += 1) {
    const raiting = raitings[index];
    console.log(raiting);
    initRaiting(raiting);
  }

  function initRaiting(raiting) {
    initRaitingVars(raiting);

    setRaitingWidth(value);
  }

  function initRaitingVars(raiting) {
    raitingActive = raiting.querySelector('.catalog__raitnig-active');
    console.log(raitingActive);
  }

  function setRaitingWidth(value) {
    const raitngActiveWidth = value / 2 / 0.05;
    raitingActive.style.width = `${raitngActiveWidth}%`;
  }
}

function convertReleaseDate(date) {
  if (date) {
    return date.slice(0, 4);
  } else return '';
}

export function clearMarkup(element) {
  return (element.innerHTML = '');
}
