import { creatMarkupCatalogCard } from './catalog';
import * as Api from './api';

const catalogRef = document.querySelector('.catalog');
const btnSearch = document.querySelector('.catalog__btn');
const input = document.querySelector('.catalog__input');

btnSearch.addEventListener('click', onBtnSearch);

async function onBtnSearch(e) {
  try {
    const search = input.value;
    console.log(search);

    const searchData = await Api.getBySearch(search, 1);
    const searchResult = searchData.results;

    creatMarkupCatalogCard(searchResult).then(
      data => (catalogRef.innerHTML = data)
    );
  } catch (error) {
    console.log(error);
  }
}
Api.getWeekTrending(1).then(data => {
  const films = data.results;

  creatMarkupCatalogCard(films)
    .then(data => (catalogRef.innerHTML = data))
    .catch(error => console.log(error));
});
