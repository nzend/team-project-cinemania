import { rawListeners } from 'process';
import * as Api from './api';
import { setGenresInStorage } from './get-genres';
import { getNameOfGenresById } from './get-genres';
import { setAddedMovies } from './local-storage';
import { getAddedMovies } from './local-storage';

const container = document.querySelector('.upcoming-content');

Api.getUpcoming()
  .then(({ results }) => {
    const NOW_Date = new Date();

    const filmUpcomingRelease = results.filter(
      film => NOW_Date < Date.parse(film.release_date)
    );

    if (filmUpcomingRelease.length === 0) {
      renderMarkupError();

      return;
    }

    const random = Math.floor(Math.random() * filmUpcomingRelease.length);
    const render = createMarkup(filmUpcomingRelease[random]);

    renderMarkup(render);

    const buttonAdd = document.getElementById('add');
    const buttonRemove = document.getElementById('remove');

    let existing = getAddedMovies();
    existing = existing ? existing : [];
    if (existing.includes(filmUpcomingRelease[random].id)) {
      buttonAdd.classList.add('hidden');
      buttonRemove.classList.remove('hidden');
    }

    buttonAdd.addEventListener('click', onClickAdd);
    buttonRemove.addEventListener('click', onClickRemove);

    function onClickAdd() {
      let existing = getAddedMovies();
      existing = existing ? existing : [];
      if (existing.includes(filmUpcomingRelease[random].id)) {
        buttonAdd.classList.add('hidden');
        buttonRemove.classList.remove('hidden');
        return;
      }
      existing.push(filmUpcomingRelease[random].id);
      setAddedMovies(existing);
      buttonAdd.classList.add('hidden');
      buttonRemove.classList.remove('hidden');
    }

    function onClickRemove() {
      let existing = getAddedMovies();
      existing = existing ? existing : [];
      if (existing.includes(filmUpcomingRelease[random].id)) {
        let index = existing.findIndex(
          id => id === filmUpcomingRelease[random].id
        );

        existing.splice(index, 1);
        setAddedMovies(existing);

        buttonAdd.classList.remove('hidden');
        buttonRemove.classList.add('hidden');
      }
    }
  })
  .catch(error => console.log(error));

function createMarkup({
  backdrop_path,
  genre_ids,
  title,
  overview,
  vote_average,
  vote_count,
  release_date,
  popularity,
}) {
  const vote = vote_average.toFixed(1);
  const populate = popularity.toFixed(1);
  const genres = getNameOfGenresById(genre_ids).slice(0, 3).join(' ');

  return `
      <img
        class="upcoming-content__img"
        src="https://image.tmdb.org/t/p/original${backdrop_path}"
        alt="${title}"
       
      
      />

      <div class="upcoming-content__desktop">
        <h3 class="upcoming-content__name">${title}</h3>

        <div class="upcoming-thumb">
          <ul class="upcoming-list left">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Release date</p>
              <p class="upcoming-list__date">${release_date}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Vote / Votes</p>
              <p class="upcoming-list__vote">
                <span class="vote"> ${vote}</span> / <span class="vote">${vote_count}</span>
              </p>
            </li>
          </ul>

          <ul class="upcoming-list rigth">
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Popularity</p>
              <p class="upcoming-list__pop">${populate}</p>
            </li>
            <li class="upcoming-list__item">
              <p class="upcoming-list__text">Genre</p>
              <p class="upcoming-list__genre">${genres}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${overview}
        </p>

  <button type="button" class="upcoming-content__btn" id="add">
  Remind me
</button>   
 <button type="button" class="upcoming-content__btn-remove hidden" id="remove">
  Remove from my library
</button>    
`;
}

function renderMarkup(markup) {
  container.innerHTML = markup;
}

function renderMarkupError() {
  container.innerHTML = `<div class="upcoming-error-container">
        <p class="upcoming-error-container__text">
          OOPS...<br />
          We are very sorry!<br />
          But we couldn't find any upcoming movies this month.
        </p>
      </div>`;
}
