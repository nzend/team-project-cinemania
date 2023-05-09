import { getDayTrending } from './api.js';
import black from '../../src/images/hero/hero-desktop-1x.png';
import white from '../../src/images/hero/hero-white-desktop-2x.png';

const hero = document.querySelector('.hero');
const LightSwitcher = document.querySelector('.switcher');

/* const LightSwitcher = document.querySelector('.switcher'); */
console.log("Is Hero");

LightSwitcher.addEventListener('click', switchPhoto);

function switchPhoto() {
    const blackImage = document.querySelector('.black');
    const currentImageSrc = blackImage.getAttribute('src');
    const newImageSrc = currentImageSrc === black ? white : black;
    blackImage.setAttribute('src', newImageSrc);
}


getDayTrending(1).then(({ results }) => {
    const random = Math.floor(Math.random() * (results.length - 1));
  /* console.log(random); */
    console.log(results[random]);
    hero.innerHTML = '';
    const movieOfDay = results[random];
    createTrendingMarkup(movieOfDay);
});

function createTrendingMarkup(movieOfDay) {
    const markup = `
<div class="hero-wrap">
    <div class="thumb">
    <div class="background-image">
    <img
        src="https://image.tmdb.org/t/p/w500${movieOfDay.backdrop_path}"
        alt="Hero image"
        class="backend"
    />
    <img src="${black}" class="black" />
    </div>
    <div class="hero-wrap__content">
        <h1 class="title">${movieOfDay.title || movieOfDay.name}</h1>
    <div class="catalog__stars-wrap">
        <div
            class="catalog__rating-active"
            style="width:${movieOfDay.vote_average / 2 / 0.05}%"
        ></div>
        </div>
        <p class="description">${movieOfDay.overview}</p>
        <button class="button-mob">Watch trailer</button>
    </div>
    </div>
</div>
    `;
    hero.innerHTML = markup;
    LightSwitcher.addEventListener('click', switchPhoto);
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
