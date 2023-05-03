const KEY_ADDED_MOVIES = 'addedMovies';

// Нічого не отримує, віддає значення ключа KEY_ADDED_MOVIES *массив
export function getAddedMovies() {
  return JSON.parse(localStorage.getItem(KEY_ADDED_MOVIES));
}

// Отримує масив та записує його в якості значення ключа KEY_ADDED_MOVIES
export function setAddedMovies(arr) {
  localStorage.setItem(KEY_ADDED_MOVIES, JSON.stringify(arr));
}
