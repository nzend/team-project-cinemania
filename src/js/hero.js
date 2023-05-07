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
        <div class="rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path fill="url(#a)"
                    d="M13.852 16.875a.563.563 0 0 1-.33-.106L9 13.491 4.48 16.77a.562.562 0 0 1-.863-.635l1.763-5.224L.81 7.776a.562.562 0 0 1 .316-1.026h5.639l1.701-5.237a.562.562 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027l-4.572 3.132 1.762 5.222a.564.564 0 0 1-.532.743Z" />
                <defs>
                    <linearGradient id="a" x1="2.625" x2="13.876" y1="2.25" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119" />
                        <stop offset="1" stop-color="#F89F19" stop-opacity=".68" />
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path fill="url(#a)"
                    d="M13.852 16.875a.563.563 0 0 1-.33-.106L9 13.491 4.48 16.77a.562.562 0 0 1-.863-.635l1.763-5.224L.81 7.776a.562.562 0 0 1 .316-1.026h5.639l1.701-5.237a.562.562 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027l-4.572 3.132 1.762 5.222a.564.564 0 0 1-.532.743Z" />
                <defs>
                    <linearGradient id="a" x1="2.625" x2="13.876" y1="2.25" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119" />
                        <stop offset="1" stop-color="#F89F19" stop-opacity=".68" />
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path fill="url(#a)"
                    d="M13.852 16.875a.563.563 0 0 1-.33-.106L9 13.491 4.48 16.77a.562.562 0 0 1-.863-.635l1.763-5.224L.81 7.776a.562.562 0 0 1 .316-1.026h5.639l1.701-5.237a.562.562 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027l-4.572 3.132 1.762 5.222a.564.564 0 0 1-.532.743Z" />
                <defs>
                    <linearGradient id="a" x1="2.625" x2="13.876" y1="2.25" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119" />
                        <stop offset="1" stop-color="#F89F19" stop-opacity=".68" />
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path fill="url(#a)"
                    d="M13.852 16.875a.563.563 0 0 1-.33-.106L9 13.491 4.48 16.77a.562.562 0 0 1-.863-.635l1.763-5.224L.81 7.776a.562.562 0 0 1 .316-1.026h5.639l1.701-5.237a.562.562 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027l-4.572 3.132 1.762 5.222a.564.564 0 0 1-.532.743Z" />
                <defs>
                    <linearGradient id="a" x1="2.625" x2="13.876" y1="2.25" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119" />
                        <stop offset="1" stop-color="#F89F19" stop-opacity=".68" />
                    </linearGradient>
                </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                <path fill="url(#a)"
                    d="M13.852 16.875a.563.563 0 0 1-.33-.106L9 13.491 4.48 16.77a.562.562 0 0 1-.863-.635l1.763-5.224L.81 7.776a.562.562 0 0 1 .316-1.026h5.639l1.701-5.237a.562.562 0 0 1 1.07 0l1.702 5.238h5.638a.563.563 0 0 1 .319 1.027l-4.572 3.132 1.762 5.222a.564.564 0 0 1-.532.743Z" />
                <defs>
                    <linearGradient id="a" x1="2.625" x2="13.876" y1="2.25" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119" />
                        <stop offset="1" stop-color="#F89F19" stop-opacity=".68" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <p class="description">${movieOfDay.overview}</p>
        <button class="button-mob">Watch trailer</button>
    </div>`
}
