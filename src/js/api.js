import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import sprite from '../images/sprite.svg';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c9873e67c5e03bd61e79d852c2fd46a6';
export const IMG_SRC = 'https://image.tmdb.org/t/p/';

// Отримує параметр поточної сторінки та повертає промікс фільмів що були в тренді протягом дня
export async function getDayTrending(page = 1) {
  const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує параметр поточної сторінки та повертає промікс фільмів що були в тренді протягом тижня
export async function getWeekTrending(page = 1) {
  const url = `${MAIN_URL}/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує пошуковий запит від користувача та номер поточної сторінки, повертає промікс фільмів що відповідають запиту
export async function getBySearch(query, page) {
  const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує Id та повертає промікс з цим фільмом
export async function getInfoMovie(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.status === 404);

      const instance = basicLightbox.create(`
		<div class="notification-trailer-fail">
		 <button class="modal__close">
    <svg class="modal__svg" width="24" height="24">
      <use width="24" height="24" class="svg__use" href="${sprite}#icon-close"></use>
    </svg>
  </button>
    	<p class="notification-trailer-fail-text">OOPS...<br/> We are very sorry!<br /> There is no info of this film</p>
        <div class="bg-box"></div>
</div>

`);
      const closeBtn = document.querySelector('.btn-close');
      console.log(closeBtn);
      instance.show();
    });
}

// Отримує масив індексів збережених фільмів з LocalStorage та повертає промікс
export async function getArrayOfMovies(array) {
  const arrayOfMovies = array.map(async movie_id => {
    return await axios
      .get(`${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
  });

  const resultData = await Promise.all(arrayOfMovies);
  return resultData;
}

// Повертає промікс з масивом об'єктів з назвою жанру та id
export async function getGanres() {
  const url = `${MAIN_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

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

export async function getVideos(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {});
}
