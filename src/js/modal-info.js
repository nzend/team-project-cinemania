import { getInfoMovie } from './api';
import { getAddedMovies, setAddedMovies } from './local-storage';
import { makeCard, myLibGallery, errorContainer } from './added-movies-render';
import sprite from '../images/sprite.svg';

//* INTERACTION WITH CATALOG
document.querySelector('.catalog').addEventListener('click', onCatalogClick);

const url = window.location.href; // Бере поточну сторінку

function makeGenres(objArray) {
  const genres = [];
  objArray.map(obj => {
    genres.push(obj.name);
  });
  if (genres.length === 0) {
    return '';
  }
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
    <svg class="modal__svg" width="10" height="10">
      <use width="10" height="10" class="svg__use" href="${sprite}#icon-close2"></use>
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
	console.dir(event.target);
console.log(event.target.offsetParent);
  const filmID = event.target.offsetParent.getAttribute('data-id');

  getInfoMovie(filmID)
    .then(data => {
      document
        .querySelector('body')
        .insertAdjacentHTML('beforeend', createCardMarkup(data)); // finish render
      //--------------------------------------------------------------

      document.querySelector('body').classList.add('modal-open');

      const buttonAdd = document.querySelector('.weekly__btn--add');
      const buttonRemove = document.querySelector('.weekly__btn--remove');
      //-----------------------------------------------------------------------
    

      // CHECKED IF LIBRARY
      if (url.includes('library')) {
        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');
      }

      //
      let existing = getAddedMovies();
      existing = existing ? existing : []; // Робить перевірку на данні в локал сторедж

      //Якшо є даний фільм приховує кнопку «додати», показує «видалити»
      if (existing.includes(filmID)) {
        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');
      }

      // SHOOSE DOM ELEMENTS
      buttonAdd.addEventListener('click', onClickAdd);
      buttonRemove.addEventListener('click', onClickRemove);

      // buttonAdd.classList.add('hidden');
      // buttonRemove.classList.remove('hidden'); ------------------- тут завалився проект!
      function onClickAdd() {
        let existing = getAddedMovies();
        existing = existing ? existing : [];

        if (url.includes('library')) {
          buttonAdd.classList.remove('hidden');
          buttonRemove.classList.add('hidden');
        }

        if (existing.includes(filmID)) {
          buttonAdd.classList.add('hidden');
          buttonRemove.classList.remove('hidden');
          return;
        }

        // Записує новий айді, відправляє данні в локал сторедж
        existing.push(filmID);
        setAddedMovies(existing);

        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');

        //   Робить рендеринг картки, якшо знаходимося на сторінці library
        if (url.includes('library')) {
          getInfoMovie(filmID).then(film => {
            myLibGallery.insertAdjacentHTML('beforeEnd', makeCard(film));
          });
        }
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

        if (url.includes('library')) {
          const libraryFilms = getAddedMovies() || [];
          console.log(libraryFilms.length === 0);
          if (libraryFilms.length === 0) {
            errorContainer.style.display = 'block';
          }

          removeFromPage(filmID);
        }
      }

      //!---------
      document.body.addEventListener('keyup', closeOnEsc);
      document
        .querySelector('.modal__close')
        .addEventListener('click', modalClose);
      document
        .querySelector('.modal__wrap')
        .addEventListener('click', closeOnOverlay);
    })
    .catch(error => console.log(error));
}

//* MODAL CLOSING

function modalClose(event) {
  const modalWrap = document.querySelector('.modal__wrap');
  if (modalWrap) {
    modalWrap.remove();
  }
  event.target.removeEventListener('click', onCatalogClick);
  document.querySelector('body').classList.remove('modal-open');
  return;
}

function closeOnEsc(event) {
  if (event.keyCode === 27) {
    const modalWrap = document.querySelector('.modal__wrap');
    if (modalWrap) {
      modalWrap.remove();
    }
    document.querySelector('body').classList.remove('modal-open');
    event.target.removeEventListener('keyup', onCatalogClick);
  }
  return;
}

function closeOnOverlay(event) {
  const modalWrap = document.querySelector('.modal__wrap');
  if (modalWrap && event.target === modalWrap) {
    modalWrap.remove();
  }
  document.querySelector('body').classList.remove('modal-open');
  event.target.removeEventListener('click', onCatalogClick);
  return;
}

function removeFromPage(id) {
  const el = document.querySelector(`[data-id="${id}"]`);
  console.log(el.parentElement.className === 'mylib-gallery__list catalog');

  if (el.parentElement.className === 'mylib-gallery__list catalog') {
    el.remove();
  } else {
    el.remove();
  }
}

function renderMarkupError() {
  return `<div class="library-content" id="is-hidden">
      <div class="library-content__wrap">
        <p class="library-content__text">
          OOPS... <br />
          We are very sorry! <br />
          You don’t have any movies at your library.
        </p>
      </div>
      <a class="library-btn" href="./catalog.html">Search movie</a>
    </div>`;
}
