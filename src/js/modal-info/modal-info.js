import { getInfoMovie } from '../api';

document.querySelector('.catalog').addEventListener('click', onCatalogClick);

function makeGenres(objArray) {
  const genres = [];
  objArray.map(obj => {
    genres.push(obj.name);
  });
  if (genres.length === 0) {
    return '';
  }
  // console.log(genres.join(' '));
  return genres.join(' ');
}
function createCardMarkup({
  original_title,
  vote_average,
  poster_path,
  vote_count,
  popularity,
  overview,
  genres,
}) {
  return `<div class="modal__wrap"><div class="modal-film">
   <button class="modal__close">
    <svg class="modal__svg" width="24" height="24">
      <use width="24" height="24" class="svg__use" href="./images/sprite.svg#icon-close"></use>
    </svg>
  </button>
  <img
    src="https://image.tmdb.org/t/p/w500${poster_path}"
    alt="john"
    class="film__preview"
  />
  <div class="film__wrap">
    <h3 class="film__title">${original_title}</h3>
    <ul class="film__stats">
      <li class="stats__item">
        <p class="stats__key">Vote / Votes</p>
        <div class="stats__wrap">
          <span class="stats__vote">${vote_average.toFixed(1)}</span>
          <span class="stats__values stats__values--slash">/</span>
          <span class="stats__vote">${vote_count}</span>
        </div>
      </li>

      <li class="stats__item">
        <span class="stats__key">Popularity</span>
        <span class="stats__values">${popularity.toFixed(1)}</span>
      </li>

      <li class="stats__item">
        <span class="stats__key">Genre</span>
        <span class="stats__values">${makeGenres(genres)}</span>
      </li>
    </ul>

    <p class="film__about">About</p>
    <p class="film__text">
      ${overview}
    </p>

    <button type="button" class="film__button">Add to my library</button>
  </div>
</div></div>`;
}
function onCatalogClick(event) {
  event.preventDefault();
  console.log('sda');
  const filmID = event.target.getAttribute('data-id');
  const catalog = event.currentTarget;

  getInfoMovie(filmID).then(data => {
    // document.querySelector('.catalog').innerHTML = createCardMarkup(data);
    document
      .querySelector('body')
      .insertAdjacentHTML('beforeend', createCardMarkup(data));
  });
}

function modalClose(params) {
  
}