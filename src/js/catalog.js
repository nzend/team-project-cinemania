// Тут додаємо імпорт готового модулю за зразком:
import * as Api from './api';
// import * as moduleName from './js/module-name';

const catalogRef = document.querySelector('.catalog');
console.log(catalogRef);

Api.getTrending(1).then(films => {
  console.log(films.results);
  displayMarkup(films.results);
});

function creatMarkupCatalogCard({
  backdrop_path,
  title,
  name,
  genre_ids,
  release_date,
  first_air_date
}) {
	console.log(genre_ids[0]);
  return `<li class="catalog__card">
    <div class="catalog__img-wrapper">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="" />
    </div>
    <div class="catalog__info info">
      <p class="info__title">${name || title}</p>
      <ul class="info__list">
        <li class="info__descr">${(genre_ids[0], genre_ids[1])}</li>
        <li class="info__descr">${release_date || first_air_date}</li>
      </ul>
    </div>
  </li>`;
}

function displayMarkup(data) {
  console.log(data);
  const list = data.reduce(
    (markup, movie) => markup + creatMarkupCatalogCard(movie),
    ''
  );

  catalogRef.innerHTML = list;
}

function clearMarkup(element) {
  return (element.innerHTML = '');
}
