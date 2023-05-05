// import { getWeekTrending } from './api';

import * as Api from './api';
import { setGenresInStorage } from './get-genres';
import { getNameOfGenresById } from './get-genres';

import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c9873e67c5e03bd61e79d852c2fd46a6';
export const IMG_SRC = 'https://image.tmdb.org/t/p/';

const container = document.querySelector('.upcoming-content');

// Отримує параметр поточної сторінки та повертає промікс фільмів які очікуються на сайті

export async function getUpcoming(page = 1) {
  const url = `${MAIN_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;

  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

getUpcoming().then(({ results }) => {
  console.log(results);
  const random = Math.floor(Math.random() * (results.length - 1));

  const render = createMarkup(results[random]);

  renderMarkup(render);
});

// Api.getWeekTrending().then(({ results }) => {
//   const render = createMarkup(results[3]);
//   renderMarkup(render);
// });

setGenresInStorage();

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
  const genre = getNameOfGenresById(genre_ids);

  return `
      <img
        class="upcoming-content__img"
        src="https://image.tmdb.org/t/p/w500${backdrop_path}"
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
              <p class="upcoming-list__genre">${genre}</p>
            </li>
          </ul>
        </div>

        <h3 class="upcoming-content__title">About</h3>
        <p class="upcoming-content__text">${overview}
        </p>

  <button type="button" class="upcoming-content__btn">
  Remind me
</button>;      
`;
}

function renderMarkup(markup) {
  container.innerHTML = markup;
}

function clearMarkup() {
  container.innerHTML = '';
}
