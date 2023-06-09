import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';
import * as Loader from './loader/loader';
import Pagination from 'tui-pagination';

const catalogRef = document.querySelector('.catalog');
const btnSearch = document.querySelector('.catalog__btn');
const input = document.querySelector('.catalog__input');
const notFound = document.querySelector('.text-sorry');

btnSearch.addEventListener('click', onBtnSearch);

Loader.show(catalogRef)

// Виконує запит по введеній назві
async function onBtnSearch(e) {
  catalogRef.innerHTML = '';
  pag.innerHTML = '';
  try {
    const search = input.value.trim();
    // catalogRef.innerHTML = '';
    Loader.show(catalogRef); // додаємо спінер перед запитом
    
    await Api.getBySearch(search, 1).then(data => {
      const pagination = createPagination(data.total_results, data.total_pages);
      // catalogRef.innerHTML = '';

      pagination.on('beforeMove', ({ page }) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        catalogRef.innerHTML = '';
        Loader.show(catalogRef); // додаємо спінер перед запитом
        Api.getBySearch(search, page).then(res => {
          const films = res.results;

          createMarkupCatalogCard(films)
            .then(data => (catalogRef.innerHTML = data))
            .catch(error => console.log(error));
        }).finally(() => Loader.hide(catalogRef)); // ховаємо спінер
      });
    });

    const searchDatas = await Api.getBySearch(search, 1);
    const searchResult = searchDatas.results;

    createMarkupCatalogCard(searchResult).then(data => {
      catalogRef.innerHTML = data;
    });

    if (input.value === '') {
      Api.getWeekTrending(1).then(data => {
        const films = data.results;
        if (data.length === 0) {
          catalogRef.innerHTML = '';
          pag.innerHTML = '';
          notFound.style.display = 'block';
          pag.innerHTML = '';
        }

        galleryMovie.insertAdjacentHTML(
          'beforeend',
          createMarkupCatalogCard(data.results)
        );

        const pagination = createPagination(
          data.total_results,
          data.total_pages
        );
        pagination.on('beforeMove', ({ page }) => {
          document.documentElement.scrollTop = 0;
          catalogRef.innerHTML = '';
          Loader.show(catalogRef) // додаємо спінер
          Api.getWeekTrending(page).then(data => {
            const films = data.results;
            createMarkupCatalogCard(films)
              .then(data => (catalogRef.innerHTML = data))
              .catch(error => console.log(error));
            //   gallery.innerHTML = createMarkupCatalogCard(data.results);
          }).finally(() => Loader.hide(catalogRef)); // ховаємо спінер
        });

        createMarkupCatalogCard(films)
          .then(data => (catalogRef.innerHTML = data))
          .catch(error => console.log(error));
      });
    }
  } catch (error) {
    if (searchResult.length === 0) {
      notFound.style.display = 'block';
      pag.innerHTML = '';
    }
  }
}

// __________________________________________________

import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';

const pag = document.querySelector('#pagination');

function createPagination(totalItems, visiblePages) {
  const myTheme = {
    color: '#333',
    activeColor: '#fff',
    borderColor: '#ddd',
    activeBorderColor: '#ccc',
    marginLeft: '500px',
    marginRight: 'auto',
  };
  const options = {
    myTheme: myTheme,
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 3 ? visiblePages : TUI_VISIBLE_PAGES,
    prev: '<',
    next: '>',
  };
  const pagination = new Pagination(pag, options);

  if (visiblePages > 1) {
    pag.style.display = 'block';
  } else {
    pag.style.display = 'none';
  }

  return pagination;
}

const TUI_VISIBLE_PAGES = 3;

const galleryMovie = document.querySelector('.catalog');
Api.getWeekTrending().then(data => {});

Loader.show(galleryMovie) // показуємо спінер

Api.getWeekTrending(1).then(data => {
  Loader.show(galleryMovie)
  const films = data.results;
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createMarkupCatalogCard(data.results)
  );
  Loader.hide(galleryMovie) // ховаємо спінер

  const pagination = createPagination(data.total_results, data.total_pages);
  pagination.on('beforeMove', ({ page }) => {
    catalogRef.innerHTML = '';
    Loader.show(galleryMovie); // показуємо спінер
    Api.getWeekTrending(page).then(data => {
      const films = data.results;

      createMarkupCatalogCard(films)
        .then(data => {
          Loader.hide(galleryMovie); // ховаємо спінер
          catalogRef.innerHTML = data})
        .catch(error => console.log(error));
    });
  });

  createMarkupCatalogCard(films)
    .then(data => (catalogRef.innerHTML = data))
    .catch(error => console.log(error));
});
