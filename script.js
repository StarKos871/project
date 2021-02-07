

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

// for (i = 0; i < 10; i++){
//   if (i === 6){
//     // break   (этот оператор позволяет остановить цикл при выполнении определенного уловия)
//     continue  // (этот оператор позволяет продолжить выполнение цикла, но без цифры прописанной в условии)
//   }
//   console.log(i);
// }


function loadScript (src){
  const script = document.createElement('script')// создаем переменную и в html док-е создаем тэг script
  script.src = src // тут мы создаем путь где будет располагаться этот файл
  script.async = false // ассинхронность выставлена так потому что нам нужен порядок загрузки файлов последовательный. Если это убрать, то будет показан тот файл первым, который легче весит
  document.body.append(script) // добавляем наш файл в конец body
}

loadScript('script.js') // вызываем ф-ию и передаем путь где она будет находиться