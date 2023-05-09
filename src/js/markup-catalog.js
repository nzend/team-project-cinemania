import { getNameOfGenresById } from './get-genres';
import errorWallpaper from '../../src/images/catalog/wallpaper-error.jpeg';

// Створює строку розмітки усих карточок фільмів
export async function createMarkupCatalogCard(data) {
  const markUp = data
    .slice(0, 10)
    .reduce((markup, film) => markup + makeCard(film), '');
  return markUp;
}

// Створює розмітку карточки фільму
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

  //Якшо постер не прийшов, ставить заглушку
  if (poster_path)
    poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
  else poster_path = errorWallpaper;

  // Якшо строка жанрів більша, рендерити один жанр
  if (stringOfGenres.length > 18)
    stringOfGenres = arrOfGenres.slice(0, 1).join(', ');

  return `<li class="catalog__card" data-id="${id}">
    <div class="catalog__img-wrapper">
      <img src=${poster_path} alt="${
    name || title
  }" width="395" height="574" class="catalog__img" />
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

// Повертає з отриманої дати рік
function convertReleaseDate(date) {
  if (date) {
    return date.slice(0, 4);
  } else return '';
}
