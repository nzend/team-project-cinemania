// Тут додаємо імпорт готового модулю за зразком:
import * as Api from './api';
import {  } from "./modal-info/modal-info";
// import * as moduleName from './js/module-name';

const catalogRef = document.querySelector('.catalog');
console.log(catalogRef);

Api.getTrending(1).then(data => {
  const films = data.results;
  console.log(films);

  displayMarkup(films);
});

async function getNameOfGenresById(ids) {
  try {
    const { genres } = await Api.getGanres();
    const nameOfGenres = ids.map(id => {
      const filmById = genres.find(film => film.id === id);
      return filmById.name;
    });
    return nameOfGenres;
  } catch (error) {
    console.log(error);
  }
}

async function creatMarkupCatalogCard({
  backdrop_path,
  title,
  name,
  genre_ids,
  release_date,
  first_air_date,
}) {
  const nameOfGenres = await getNameOfGenresById(genre_ids);
  //   console.log(nameOfGenres);
  // getNameOfGenresById(genre_ids).then(data => console.log(data))
  return `<li class="catalog__card">
    <div class="catalog__img-wrapper">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="" />
    </div>
    <div class="catalog__info info">
      <p class="info__title">${name || title}</p>
      <ul class="info__list">
        <li class="info__descr"></li>
        <li class="info__descr">${release_date || first_air_date}</li>
      </ul>
    </div>
  </li>`;
}

function displayMarkup(data) {
  const list = data.reduce(
    (markup, movie) => markup + creatMarkupCatalogCard(movie),
    ''
  );

  catalogRef.innerHTML = list;
}

function clearMarkup(element) {
  return (element.innerHTML = '');
}
