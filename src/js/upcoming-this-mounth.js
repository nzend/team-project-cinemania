// import { getWeekTrending } from './api';

import * as Api from './api';

console.log('hello world!');

const container = document.querySelector('.upcoming-content');

Api.getWeekTrending().then(({ results }) => {
  // console.log(results[0]);
  // console.log(createMarkup(results[0]));

  const render = createMarkup(results[1]);
  // console.log(render);

  renderMarkup(render);
});

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

  return `<div class="upcoming-content">
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
              <p class="upcoming-list__genre">${genre_ids}</p>
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

// `<div class="photo-card">
//    <a href="${largeImageURL}">
//       <img src="${webformatURL}" alt="${tags}" loading="lazy" "/>
//    </a>

//     <div class="info">
//       <p class="info-item">
//         <b>Likes</b>${likes}
//       </p>
//       <p class="info-item">
//         <b>Views</b>${views}
//       </p>
//       <p class="info-item">
//         <b>Comments</b>${comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads</b>${downloads}
//       </p>
//     </div>
//   </div>`;
