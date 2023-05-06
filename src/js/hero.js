import { getWeekTrending} from './api.js';


async function updateHero() {
    const data = await getWeekTrending();
    const trending = data.results[0];
    if (!trending) return;

    heroTitle.textContent = trending.title;
    heroDescription.textContent = trending.overview;
}


