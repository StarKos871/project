let numberOfFilms

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '') // + перед prompt означает что вводиться должно только число
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}
// start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}


function rememberMyFilms(){

  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных вами фильмов?', ''),
      b = prompt('На сколько оцните его?', '')
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b
    } else {
      console.log('Error')
      i--
    }
  }
}
// rememberMyFilms()

function detectPersonalMovie(){
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель!')
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
  } else {
    console.log('Произошла ошибка')
  }
  console.log(personalMovieDB)
}
// detectPersonalMovie()

function showMyDB (hidden){
  if (!hidden){
    console.log(personalMovieDB)
  }
}
showMyDB(personalMovieDB.private)

function writeYourGenre(){
  for ( let i = 1; i <= 3; i++){    
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильма под номером ${i}`)
  }
}
writeYourGenre()
