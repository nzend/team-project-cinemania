import { creatMarkupCatalogCard } from "./catalog";
import * as Api from './api';

const catalogRef = document.querySelector('.catalog');


Api.getTrending(1).then(data => {
  const films = data.results;

	creatMarkupCatalogCard(films).then( data => catalogRef.innerHTML = data).catch(error => console.log(error));
 
});

