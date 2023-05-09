import * as Api from './api';
import { getAddedMovies, setAddedMovies } from './local-storage';


export const myLibGallery = document.querySelector('.mylib-gallery__list');
const libContent = document.querySelector('#is-hidden');
const libGallery = document.querySelector('.gallery-hidden');


const libraryFilms = getAddedMovies();

 function renderLibrary(arrOfFilms) {
 Api.getArrayOfMovies(arrOfFilms)
    .then(data => { 
      if (data.length === 0) {
        libContent.classList.remove('is-hidden')
        return
      }
      data.map(film => {
			myLibGallery.insertAdjacentHTML('beforeEnd', makeCard(film));
			libGallery.classList.remove('gallery-hidden');
      });
    })
    .catch(error => console.error(error));
}

renderLibrary(libraryFilms);

  export function makeCard({
  id,
  poster_path,
  title,
  name,
  genres,
  release_date,
  first_air_date,
  vote_average,
}) {
   
  const date = release_date || first_air_date;
 
  return `<li class="catalog__card" data-id="${id}">
    <div class="catalog__img-wrapper">
      <img src="https://image.tmdb.org/t/p/w500${
        poster_path || 'Oops. There is no poster to this movie'
      }" alt="${name || title}" width="395" height="574" class="catalog__img" />
    </div>
    <div class="catalog__info info">
      <p class="info__title">${name || title}</p>
  <div class="info__wrap">
  <ul class="info__list">
      <li class="info__descr">${getNameOfGenres(genres)}</li>
      <li class="info__descr">${convertReleaseDate(date)}</li>
      </ul>
  <div class="catalog__stars-wrap">
  <div class="catalog__rating-active" style="width:${vote_average / 2 / 0.05}%"></div>
  </div>
  </div>
    </div>
  </li>`;
}
  
  function convertReleaseDate(date) {
    if (date) {
      return date.slice(0, 4);
    } else return '';
  }

  function getNameOfGenres(arrGenres) {
    const arr = [];
    arrGenres.map(genre => {
      genre.name === 'Science Fiction' ? (genre.name = 'Sci-Fi') : genre.name;
     arr.push(genre.name)
      })
    return arr.slice(0,2).join(', ');
     }

    //  function renderMarkupError() {
    //   container.innerHTML = `<div class="upcoming-error-container">
    //         <p class="upcoming-error-container__text">
    //           OOPS...<br />
    //           We are very sorry!<br />
    //           But we couldn't find any upcoming movies this month.
    //         </p>
    //       </div>`;
    // }