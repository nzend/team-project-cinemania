import * as Api from './api';

const savedGenres = localStorage.getItem('genres');
const parsedGenres = JSON.parse(savedGenres);

export function setGenresInStorage() {
  Api.getGanres().then(data => {
    localStorage.setItem('genres', JSON.stringify(data.genres));
  });
}

export function getNameOfGenresById(ids) {
  // Приймає масив з айді, повертає масив з назвами жанрів

  // const savedGenres = localStorage.getItem('genres');
  // const parsedGenres = JSON.parse(savedGenres);
  const nameOfGenres = ids.map(id => {
    const filmById = parsedGenres.find(film => {
      return film.id === id;
    });

    if (!filmById) return ''; //Якщо не знайшлося співпадіння з айді, повертає пусту строку
    filmById.name === 'Science Fiction'
      ? (filmById.name = 'Sci-Fi')
      : filmById.name;
    return filmById.name;
  });
  return nameOfGenres; //Масив з іменами жанрів
}
if (!parsedGenres) {
  setGenresInStorage();
}
