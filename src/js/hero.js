import { getDayTrending, getVideos } from './api.js';
import * as basicLightbox from 'basiclightbox';
import black from '../../src/images/hero/hero-desktop-1x.png';
import white from '../../src/images/hero/hero-white-desktop-2x.png';
import hall from '../../src/images/library/hero-hall-desktop-1x.jpg';
import people from '../../src/images/hero/hero-people-desktop-1x.jpg';

const hero = document.querySelector('.hero');
const LightSwitcher = document.querySelector('.switcher');
const url = window.location.href;
hero.style.backgroundImage = `url(${people})`;

if (url.includes('library')) {
  hero.innerHTML = '';
  hero.style.backgroundImage = `url(${hall})`;

  const libMurkup = `
    <div class="hero-wrap__content">
      <h2 class="title">Create Your Dream Cinema</h2>

      <p class="description">
        Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks.
      </p>
      <a href="./catalog.html" class="watch-trailer__btn">Get Started</a>
    </div>
 
  `;
  hero.innerHTML = libMurkup;
}

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
        const infoTr = videos.find(el => el.name === 'Official Trailer');
        const keyTr = infoTr.key;

        const instance = basicLightbox.create(`

      <iframe class="iframe" src="https://www.youtube.com/embed/${keyTr}" width="560" height="315" frameborder="0"></iframe>
`);
        instance.show(() => console.log('lightbox now visible'));
      })
      .catch(error => {
        const instance = basicLightbox.create(`
<div class="notification-trailer-fail">

    <p class="notification-trailer-fail-text">OOPS...<br/> We are very sorry!<br /> But we couldn’t find the trailer.</p>
        <div class="bg-box"></div>
</div>

`);
        const closeBtn = document.querySelector('.btn-close');
        instance.show(() => console.log('lightbox now visible'));
      });
  }

  // -----------------------------------------
});

function createTrendingMarkup(movieOfDay) {
	hero.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movieOfDay.backdrop_path})`;
	console.log(movieOfDay.overview.length);
  const markup = `
           <span class="black-span">
          
           
            <div class="hero-wrap__content">
                    <h2 class="title">${
                      movieOfDay.title || movieOfDay.name
                    }</h2>
                    <div class="catalog__stars-wrap-hero">
                        <div class="catalog__rating-active"
                        style="width:${
                          movieOfDay.vote_average / 2 / 0.05
                        }%"></div>
                    </div>
                    <p class="description">${
                      movieOfDay.overview.slice(0, 315) + '...'
                    }</p>
                    <button class="watch-trailer__btn" id="trailer-btn" data-btn="trailer-fail" >Watch trailer</button>
                </div>
                </span>
        
    `;
  hero.innerHTML = markup;
}

const notificationBtnClose = document.querySelector(
  `.notification-trailer-fail-btn-close`
);
const notification = document.querySelector(`.notification-trailer-fail`);
const notificationTrailerFailOverlay = document.querySelector(
  `.notification-trailer-fail-overlay`
);
