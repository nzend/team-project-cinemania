import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';
import * as Loader from './loader/loader';
import Pagination from 'tui-pagination';

const catalogRef = document.querySelector('.catalog');
const btnSearch = document.querySelector('.catalog__btn');
const input = document.querySelector('.catalog__input');
const notFound = document.querySelector('.text-sorry');

btnSearch.addEventListener('click', onBtnSearch);

// Виконує запит по введеній назві
async function onBtnSearch(e) {
  pag.innerHTML = '';
  try {
    const search = input.value.trim();

    await Api.getBySearch(search, 1).then(data => {
      console.log(data);
      const pagination = createPagination(data.total_results, data.total_pages);
      pagination.on('beforeMove', ({ page }) => {
        console.log(page);
        catalogRef.innerHTML = '';

        Api.getBySearch(search, page).then(res => {
          console.log(res.page);
          console.log(res);
          const films = res.results;

          createMarkupCatalogCard(films)
            .then(data => (catalogRef.innerHTML = data))
            .catch(error => console.log(error));
          //   gallery.innerHTML = createMarkupCatalogCard(data.results);
        });
      });
    });

    const searchDatas = await Api.getBySearch(search, 1);
    // console.log(searchDatas);
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
        console.log(data.total_results);
        console.log(data.total_pages);

        const pagination = createPagination(
          data.total_results,
          data.total_pages
        );
        console.log(pagination);
        pagination.on('beforeMove', ({ page }) => {
          catalogRef.innerHTML = '';
          Api.getWeekTrending(page).then(data => {
            const films = data.results;

            createMarkupCatalogCard(films)
              .then(data => (catalogRef.innerHTML = data))
              .catch(error => console.log(error));
            //   gallery.innerHTML = createMarkupCatalogCard(data.results);
          });
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
    console.log(error);
  }
}
//  Рендерить за замовчування фільми за трендом тижня
// Api.getWeekTrending(1).then(data => {
//   const films = data.results;

//   createMarkupCatalogCard(films)
//     .then(data => (catalogRef.innerHTML = data))
//     .catch(error => console.log(error));
// });

// __________________________________________________

import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';

// const catalogRef = document.querySelector('.catalog');

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

// console.log(refs.pagination);
const TUI_VISIBLE_PAGES = 3;

const galleryMovie = document.querySelector('.catalog');
Api.getWeekTrending().then(data => {
  console.log(data.results);
});

Api.getWeekTrending(1).then(data => {
  const films = data.results;

  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createMarkupCatalogCard(data.results)
  );
  console.log(data.total_results);
  console.log(data.total_pages);

  const pagination = createPagination(data.total_results, data.total_pages);
  console.log(pagination);
  pagination.on('beforeMove', ({ page }) => {
    catalogRef.innerHTML = '';
    Api.getWeekTrending(page).then(data => {
      const films = data.results;

      createMarkupCatalogCard(films)
        .then(data => (catalogRef.innerHTML = data))
        .catch(error => console.log(error));
      //   gallery.innerHTML = createMarkupCatalogCard(data.results);
    });
  });

  createMarkupCatalogCard(films)
    .then(data => (catalogRef.innerHTML = data))
    .catch(error => console.log(error));
});
