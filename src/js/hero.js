import { getDayTrending } from './api.js';

const hero = document.querySelector('.hero');

    getDayTrending(1).then(({ results }) => {
    const random = Math.floor(Math.random() * (results.length - 1));
    /* console.log(random); */
    console.log(results[random]);
    hero.innerHTML = '';
    const movieOfDay = results[random];
    createTrendingMarkup(movieOfDay);
}); 

/* async function updateHero() {
    const data = await getWeekTrending(1).then(data => {
        const trending = data.results[0];
        return data;
    }).catch(error => console.log(error));

    if (!data) return;

    const pages = data.results.map(result => result.page);
    return { data, trending };
}

async function getRandomPageData() {
    const { data, trending } = await updateHero();
    if (!data) return;

    const pages = data.results.map(result => result.page);
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];

    const pageData = {
        page: randomPage,
        data: {
            title: trending.title,
            overview: trending.overview,
            vote_average: trending.vote_average,
            backdrop_path: trending.backdrop_path
        }
    };
    return pageData;
}  */


function createTrendingMarkup(movieOfDay) {
    const markup = `
    <div class="container">
        <h1 class="title">${movieOfDay.title || movieOfDay.name}</h1>
        <div class="catalog__stars-wrap">
            <div class="catalog__rating-active" style="width:${vote_average / 2 / 0.05}%">
            </div>
        </div>
        <p class="description">${movieOfDay.overview}</p>
        <button class="button-mob">Watch trailer</button>
    </div>`
    hero.innerHTML = markup;
}
