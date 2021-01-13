const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const a = prompt('Один из просмотренных вами фильмов?', ''),
      b = prompt('На сколько оцните его?', ''),
      c = prompt('Один из просмотренных вами фильмов?', ''),
      d = prompt('На сколько оцните его?', '')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB);