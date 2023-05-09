import { getInfoMovie } from '../api';
import { getAddedMovies, setAddedMovies } from '../local-storage';
import sprite from '../../images/sprite.svg';

//* INTERACTION WITH CATALOG
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
  return `<div class="modal__wrap">
  <div class="modal-film">
  <button class="modal__close">
    <svg class="modal__svg" width="24" height="24">
      <use width="24" height="24" class="svg__use" href="${sprite}#icon-close"></use>
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
    <button type="button" class="upcoming-content__btn weekly__btn--add"  id="add">
  Add to my library
</button>   
 <button type="button" class="upcoming-content__btn-remove weekly__btn--remove hidden" id="remove">
  Remove from my library
</button>

    
 
  </div>
</div></div>`;
}
function onCatalogClick(event) {
  event.preventDefault();

  const filmID = event.target.offsetParent.getAttribute('data-id');
  const catalog = event.currentTarget;

  getInfoMovie(filmID).then(data => {
    // document.querySelector('.catalog').innerHTML = createCardMarkup(data);
    document
      .querySelector('body')
      .insertAdjacentHTML('beforeend', createCardMarkup(data));

    const buttonAdd = document.querySelector('.weekly__btn--add');
    const buttonRemove = document.querySelector('.weekly__btn--remove');
    //!---------
    let existing = getAddedMovies();
    existing = existing ? existing : [];
    if (existing.includes(filmID)) {
      buttonAdd.classList.add('hidden');
      buttonRemove.classList.remove('hidden');
    }
    buttonAdd.addEventListener('click', onClickAdd);
    buttonRemove.addEventListener('click', onClickRemove);
    console.log(buttonAdd);

    function onClickAdd() {
      let existing = getAddedMovies();
      existing = existing ? existing : [];
      if (existing.includes(filmID)) {
        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');
        return;
      }
      existing.push(filmID);
      setAddedMovies(existing);
      buttonAdd.classList.add('hidden');
      buttonRemove.classList.remove('hidden');
      console.log('its working');
    }

    function onClickRemove() {
      let existing = getAddedMovies();
      existing = existing ? existing : [];
      if (existing.includes(filmID)) {
        let index = existing.findIndex(id => id === filmID);

        existing.splice(index, 1);
        setAddedMovies(existing);
        buttonAdd.classList.remove('hidden');
        buttonRemove.classList.add('hidden');
      }
      console.log('its working');
    }
    //!---------
    document.body.addEventListener('keyup', closeOnEsc);
    document
      .querySelector('.modal__close')
      .addEventListener('click', modalClose);
    document
      .querySelector('.modal__wrap')
      .addEventListener('click', closeOnOverlay);
  });
  // .catch(error => console.log(error));
}

//* MODAL CLOSING

function modalClose(event) {
  const modalWrap = document.querySelector('.modal__wrap');
  if (modalWrap) {
    modalWrap.remove();
  }
  return;
  event.target.removeEventListener('click', onCatalogClick);
}

function closeOnEsc(event) {
  if (event.keyCode === 27) {
    const modalWrap = document.querySelector('.modal__wrap');
    if (modalWrap) {
      modalWrap.remove();
    }
    event.target.removeEventListener('keyup', onCatalogClick);
  }
  return;
}

function closeOnOverlay(event) {
  const modalWrap = document.querySelector('.modal__wrap');
  if (modalWrap && event.target === modalWrap) {
    modalWrap.remove();
  }

  event.target.removeEventListener('click', onCatalogClick);
  return;
}
