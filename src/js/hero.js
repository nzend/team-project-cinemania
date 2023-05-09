import { getDayTrending, getVideos } from './api.js';
import * as basicLightbox from 'basiclightbox';
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
    console.log(results[random]);
    hero.innerHTML = '';
    const movieOfDay = results[random];
    createTrendingMarkup(movieOfDay);

    getVideos(movieOfDay.id).then(videos => {
    const trailerBtn = hero.querySelector('#trailer-btn');
    const trailerVideo = videos.find(video => video.type === 'Trailer') || videos[0];
    if (trailerVideo && trailerVideo.key) {
        trailerBtn.addEventListener('click', () => {
            const keyTrailer = trailerVideo.key;
            basicLightbox
                .create(
                    `<iframe width="640" height="360"
                    src="https://www.youtube.com/embed/${keyTrailer}"
                    title="" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>`
                )
                .show();
        });
    } else {
        const modalBtn = document.querySelector('[data-btn="trailer-fail"]');
        modalBtn.addEventListener('click', () => {
            basicLightbox.create('<p>Sorry, no trailer available for this movie.</p>').show();
        });
        trailerBtn.classList.add('is-hidden');
    }
});

});

function createTrendingMarkup(movieOfDay) {
    const markup = `
        <div class="hero-wrap">
            <div class="thumb">
                <div class="background-image">
                    <img src="https://image.tmdb.org/t/p/original${movieOfDay.backdrop_path}"
                    alt="Hero image" class="backend" />
                    <img src="${black}" class="black" />
                </div>
                <div class="hero-wrap__content">
                    <h1 class="title">${movieOfDay.title || movieOfDay.name}</h1>
                    <div class="catalog__stars-wrap">
                        <div class="catalog__rating-active"
                        style="width:${movieOfDay.vote_average / 2 / 0.05}%"></div>
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
