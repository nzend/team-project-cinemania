console.log('Hello');
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getBySearch, getWeekTrending } from './api';
import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';

const catalogRef = document.querySelector('.catalog');

const pag = document.querySelector('#pagination');
const gallery = document.querySelector('.catalog');

function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 3 ? visiblePages : TUI_VISIBLE_PAGES,
  };

  const pagination = new Pagination(pag, options);

  if (visiblePages > 1) {
    pag.style.display = 'block';
  } else {
    pag.style.display = 'none';
  }

  return pagination;
}

// console.log(refs.pagination);
const TUI_VISIBLE_PAGES = 3;

const galleryMovie = document.querySelector('.catalog');
getWeekTrending().then(data => {
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createMarkupCatalogCard(data.results)
  );

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
    gallery.innerHTML = '';
    getWeekTrending(page).then(data => {
      const films = data.results;

      createMarkupCatalogCard(films)
        .then(data => (catalogRef.innerHTML = data))
        .catch(error => console.log(error));
      //   gallery.innerHTML = createMarkupCatalogCard(data.results);
    });
  });
});

Api.getWeekTrending(1).then(data => {
  const films = data.results;

  createMarkupCatalogCard(films)
    .then(data => (catalogRef.innerHTML = data))
    .catch(error => console.log(error));
});
