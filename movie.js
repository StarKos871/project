



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '') // + перед prompt означает что вводиться должно только число
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  rememberMyFilms: function(){
  
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
  },
  detectPersonalMovie: function(){
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
  },
  showMyDB: function(hidden){
    if (!hidden){
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.private){
      personalMovieDB.private = false
    }else {
      personalMovieDB.private = true
    }
  },
  writeYourGenre: function(){
    for ( let i = 1; i < 2; i++){    
      // genre = prompt(`Ваш любимый жанр фильма под номером ${i}`)
      genre = prompt(`Введите жанр любимый через запятую`)
      
      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные или вовсе не ввели ни чего');
        i--
      }else {
        personalMovieDB.genres = genre.split(', ')
        personalMovieDB.genres.sort()
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
  }
  
}








