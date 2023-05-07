// console.log('modal info module work!!');

import SimpleLightbox from 'simplelightbox';
import { setGenresInStorage, getNameOfGenresById } from '../get-genres';
import { getInfoMovie } from '../api';

setGenresInStorage();

function getElement(selector) {
  console.log(document.querySelector(selector));
  return document.querySelector(selector);
}

function filmData(filmId) {
  
}

 function modalMarkup(movieId) {
  const {
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
  } = getInfoMovie(movieId)
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));

  // console.log('🚀 movieData:', original_title, vote_average, vote_count, popularity, overview);
  console.log(genres);
  const markup = `<div class="modal-film">
  <img
    src=""
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
          <span class="stats__values">/</span>
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
</div>
`;
  console.log(markup);
  return markup;
}

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
console.log(modalMarkup(12));

function renderMarkup(markup) {
  document.body.innerHTML = markup;
}
const qwerty = modalMarkup(12);
renderMarkup(qwerty);
