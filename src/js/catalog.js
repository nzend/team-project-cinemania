// Тут додаємо імпорт готового модулю за зразком:
import sprite from '../../src/images/sprite-stars.svg';
import { setGenresInStorage, getNameOfGenresById } from './get-genres';

// import * as moduleName from './js/module-name';

setGenresInStorage();
console.log(sprite);
export async function creatMarkupCatalogCard(data) {
  const list = data
    .map(
      ({
        id,
        poster_path,
        title,
        name,
        genre_ids,
        release_date,
        first_air_date,
      }) => {
        const arrOfGenres = getNameOfGenresById(genre_ids);
        const stringOfGenres = arrOfGenres.slice(0, 2).join(', ');
        const date = release_date || first_air_date;

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

		  
<svg width="20" height="20">
              <use href="${sprite}#icon-star-full"></use>
            </svg>
</div>
      </ul>
    </div>
  </li>`;
      }
    )
    .join('');
  return list;
}

function makeStars(n) {
  console.log(n / 2);
  const numberOfStars = Math.round(n / 2);
  console.log(numberOfStars);
}
makeStars(7.44);

function convertReleaseDate(date) {
  if (date) {
    return date.slice(0, 4);
  } else return '';
}

export function clearMarkup(element) {
  return (element.innerHTML = '');
}
