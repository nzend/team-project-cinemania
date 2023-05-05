import { creatMarkupCatalogCard } from './catalog';
import { clearMarkup } from './catalog';
import * as Api from './api';

const catalogRef = document.querySelector('.catalog');
const input = document.querySelector('.catalog__input');
console.log(input);

input.addEventListener('input', onInputSearch);

async function onInputSearch(e) {
	clearMarkup(catalogRef);
	try {
		const search = e.currentTarget.value;
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
