import { getDayTrending, getVideos } from './api.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import black from '../../src/images/hero/hero-desktop-1x.png';
import white from '../../src/images/hero/hero-white-desktop-2x.png';

const hero = document.querySelector('.hero');
const LightSwitcher = document.querySelector('.switcher');

LightSwitcher.addEventListener('click', switchPhoto);

function switchPhoto() {
  const blackImage = document.querySelector('.black');
  const currentImageSrc = blackImage.getAttribute('src');
  const newImageSrc = currentImageSrc === black ? white : black;
  blackImage.setAttribute('src', newImageSrc);

  localStorage.setItem('imageColor', newImageSrc);
}

getDayTrending(1).then(({ results }) => {
  const random = Math.floor(Math.random() * (results.length - 1));
  hero.innerHTML = '';
  const movieOfDay = results[random];
  createTrendingMarkup(movieOfDay);

  const trailerBtn = hero.querySelector('#trailer-btn');
  trailerBtn.addEventListener('click', onBtnClick);

  function onBtnClick(params) {
    getVideos(movieOfDay.id)
      .then(videos => {
        console.log(videos);
        const infoTr = videos.find(el => el.name === 'Official Trailer');
        const keyTr = infoTr.key;

        console.log(infoTr);
        console.log(keyTr);

        const instance = basicLightbox.create(`

     <iframe class="iframe" src="https://www.youtube.com/embed/${keyTr}" width="560" height="315" frameborder="0"></iframe>
`);
        console.log(instance);

        instance.show(() => console.log('lightbox now visible'));
      })
      .catch(error => {
        const instance = basicLightbox.create(`    
<div class="notification-trailer-fail">
<button type="button" class="btn-close">
      <svg class="btn-close--svg" >
        <use width="24" heigth="24" href="./images/sprite.svg#icon-close" ></use>
      </svg>
    </button>
    <p class="notification-trailer-fail-text">OOPS...<br/> We are very sorry!<br /> But we couldn’t find the trailer.</p>
        <div class="bg-box"></div>
</div>

`);
        instance.show(() => console.log('lightbox now visible'));
        console.log(error);
      });
  }

  // -----------------------------------------
});

function createTrendingMarkup(movieOfDay) {
  const markup = `
        <div class="hero-wrap">
            <div class="thumb">
                <div class="background-image">
                    <img src="https://image.tmdb.org/t/p/original${
                      movieOfDay.backdrop_path
                    }"
                    alt="Hero image" class="backend" />
                    <img src="${black}" class="black" />
                </div>
                <div class="hero-wrap__content">
                    <h1 class="title">${
                      movieOfDay.title || movieOfDay.name
                    }</h1>
                    <div class="catalog__stars-wrap">
                        <div class="catalog__rating-active"
                        style="width:${
                          movieOfDay.vote_average / 2 / 0.05
                        }%"></div>
                    </div>
                    <p class="description">${movieOfDay.overview}</p>
                    <button class="watch-trailer__btn" id="trailer-btn" data-btn="trailer-fail" >Watch trailer</button>
                </div>
            </div>
        </div>
    `;
  hero.innerHTML = markup;
}

/* function createTrendingMarkup(movieOfDay) {
    const markup = `
    <div class="hero-wrap">
        <div class="background-image">
            <img src="https://image.tmdb.org/t/p/w500${movieOfDay.backdrop_path}" alt="Hero image">
        </div>
        <h1 class="title">${movieOfDay.title || movieOfDay.name}</h1>
        <div class="catalog__stars-wrap">
            <div class="catalog__rating-active" style="width:${movieOfDay.vote_average / 2 / 0.05}%"></div>
        </div> 
        <p class="description">${movieOfDay.overview}</p>
        <button class="button-mob">Watch trailer</button>
    </div>
    `
    hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movieOfDay.backdrop_path}')`;
    hero.innerHTML = markup;
} */
const notificationBtnClose = document.querySelector(
  `.notification-trailer-fail-btn-close`
);
const notification = document.querySelector(`.notification-trailer-fail`);
const notificationTrailerFailOverlay = document.querySelector(
  `.notification-trailer-fail-overlay`
);

function onOpenModalBtnClick() {
  notificationTrailerFailOverlay.style.visibility = 'visible';
  notificationTrailerFailOverlay.style.transition =
    'visibility 250ms linear 250ms';
  notificationBtnClose.addEventListener(
    `click`,
    onNotificationTrailerFailBtnClick
  );
  notificationTrailerFailOverlay.addEventListener(
    `click`,
    onNotificationTrailerFailOverlay
  );
  function onNotificationTrailerFailOverlay(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
  document.addEventListener('keydown', onEscKeyPress);
}

function onNotificationTrailerFailBtnClick() {
  onCloseModal();
}

function onCloseModal() {
  notificationTrailerFailOverlay.style.visibility = 'hidden';
}

function onEscKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  document.removeEventListener('keydown', onEscKeyPress);
  onCloseModal();
}
