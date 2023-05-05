import * as Api from './api';
// import * as moduleName from './js/module-name';

const filmList = document.querySelector('.weekly-films');

Api.getWeekTrending(1).then(data => {
  const films = data.results.slice(0, 3);
  creatMarkupCatalogCard(films)
    .then(data => (filmList.innerHTML = data))
    .catch(error => console.log(error));
});

function getNameOfGenresById(ids) {
  const savedGenres = localStorage.getItem('genres');
  const parsedGenres = JSON.parse(savedGenres);

  const nameOfGenres = ids.map(id => {
    const filmById = parsedGenres.find(film => {
      return film.id === id;
    });
    if (!filmById) return '';
    return filmById.name;
  });
  return nameOfGenres;
}

function setGenresInStorage() {
  Api.getGanres().then(data => {
    localStorage.setItem('genres', JSON.stringify(data.genres));
  });
}

setGenresInStorage();

export async function creatMarkupCatalogCard(data) {
  const list = data
    .map(
      ({
        backdrop_path,
        title,
        name,
        genre_ids,
        release_date,
        first_air_date,
      }) => {
        const arrOfGenres = getNameOfGenresById(genre_ids);
        const stringOfGenres = arrOfGenres.slice(0, 2).join(', ');

        return `<li class="catalog__card">
    <div class="catalog__img-wrapper">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${
          name || title
        }" width="395" height="574" class="catalog__img" />
    </div>
    <div class="catalog__info info">
      <p class="info__title">${name || title}</p>
      <ul class="info__list">
        <li class="info__descr">${stringOfGenres}</li>
        <li class="info__descr">${
          release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
        }</li>
      </ul>
    </div>
  </li>`;
      }
    )
    .join('');
  return list;
}

function clearMarkup(element) {
  return (element.innerHTML = '');
}
