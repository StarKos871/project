// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// }

// const a = prompt('Один из просмотренных вами фильмов?', ''),
//       b = prompt('На сколько оцните его?', ''),
//       c = prompt('Один из просмотренных вами фильмов?', ''),
//       d = prompt('На сколько оцните его?', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

// console.log(personalMovieDB);

// const  num = 50;
// // Тернарный  оператор: форма записи внизу. Если переменная = чему-то, то (?) какое то действие,
// //  иначе (:) другое
// (num == 50) ? console.log('Ok!') : console.log('Error');

// const mun = 50

// switch (mun) {
//   case 49:
//     console.log("No!")
//     break
//   case 50:
//     console.log('Yes!!!')
//     break
//   default:
//     console.log('In second day')
//     break
// }

// Циклы

// let num = 50

// // while (num < 55) {
// //   console.log(num)
// //   num++
// // }

// for (i = 0; i <= 10; i++){
//   console.log(num)
//   num++
// } 

for (i = 0; i < 10; i++){
  if (i === 6){
    // break   (этот операор позволяет остановить цикл при выполнении определенного уловия)
    continue  // (этот оператор позволяет продолжить выполнение цикла, но без цифры прописанной в условии)
  }
  console.log(i);
}