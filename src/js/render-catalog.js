import { createMarkupCatalogCard } from './markup-catalog';
import * as Api from './api';

const catalogRef = document.querySelector('.catalog');
const btnSearch = document.querySelector('.catalog__btn');
const input = document.querySelector('.catalog__input');

btnSearch.addEventListener('click', onBtnSearch);

// Виконує запит по введеній назві
async function onBtnSearch(e) {
  try {
    const search = input.value.trim();

    const searchData = await Api.getBySearch(search, 1);
    const searchResult = searchData.results;

    createMarkupCatalogCard(searchResult).then(
      data => (catalogRef.innerHTML = data)
    );

    if (input.value === '') {
      Api.getWeekTrending(1).then(data => {
        const films = data.results;

        createMarkupCatalogCard(films)
          .then(data => (catalogRef.innerHTML = data))
          .catch(error => console.log(error));
      });
    }
  } catch (error) {
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
