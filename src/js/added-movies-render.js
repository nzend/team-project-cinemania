import * as Api from './api';
import { getAddedMovies, setAddedMovies } from './local-storage';


const myLibGallery = document.querySelector('.mylib-gallery');
const addBtn = document.querySelector('button');
const LOCALSTORAGE_KEY = 'movieId';
const libraryFilms = getAddedMovies();
console.log(libraryFilms);

addBtn.addEventListener('click', onAddBtn);


function onAddBtn(evt) {
 const v = [447365, 447365, 420808]
 setAddedMovies(v)
};

function renderLibrary(arrIds) {
 console.log(arrIds);
 arrIds.map(id => {
  console.log(id);
  Api.getInfoMovie(id)
 .then(data => {
  console.log(data);
 
  const list = makeCard(data);
  myLibGallery.insertAdjacentHTML("beforeend", list);
})
.catch(error => console.log(error))
 })
}


renderLibrary(libraryFilms);

  function makeCard({
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
      <ul class="info__list">
      <li class="info__descr">${getNameOfGenres(genres)}</li>
      <li class="info__descr">${convertReleaseDate(date)}</li>
  <div class="catalog__stars-wrap">
  <div class="catalog__rating-active" style="width:${vote_average / 2 / 0.05}%"></div>
  </div>
      </ul>
  
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
  arr.push(genre.name)
   })
 return arr.slice(0,2).join(', ');
  }