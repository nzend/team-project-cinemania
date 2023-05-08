import { setGenresInStorage, getNameOfGenresById } from './get-genres';



export async function creatMarkupCatalogCard(data) {
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
  const arrOfGenres = getNameOfGenresById(genre_ids);
  let stringOfGenres = arrOfGenres.slice(0, 2).join(', ');
  const date = release_date || first_air_date;
  const mediaQuery = window.matchMedia(
    '(min-width: 768px) and (max-width: 1199px)'
  );

  if (mediaQuery.matches) {
    stringOfGenres = arrOfGenres.slice(0, 1).join(', ');
  }

  if (stringOfGenres.length > 18)
	  stringOfGenres = arrOfGenres.slice(0, 1).join(', ');


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
