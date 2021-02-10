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

// function loadScript (src){
//   const script = document.createElement('script')// создаем переменную и в html док-е создаем тэг script
//   script.src = src // тут мы создаем путь где будет располагаться этот файл
//   script.async = false // ассинхронность выставлена так потому что нам нужен порядок загрузки файлов последовательный. Если это убрать, то будет показан тот файл первым, который легче весит
//   document.body.append(script) // добавляем наш файл в конец body
// }

// loadScript('script.js') // вызываем ф-ию и передаем путь где она будет находиться

const btns = document.querySelectorAll('button')
wrapper = document.querySelector('.btn-clock')
// console.log(btns[0].classList.length); // показывает количество классов
// console.log(btns[0].classList.item(0)); // метод item позволяет получить класс под определенным индексом
// console.log(btns[1].classList.add('red')); // метод add позволяет добавить класс
// console.log(btns[0].classList.remove('blue')); // метод add позволяет удалить класс
// console.log(btns[0].classList.toggle('red')); // метод toggle позволяет удалить класс если он есть, или добавить если его нет

// if (btns[1].classList.contains('red')) { // проверяет находится ли элемент в теле страницы
//   console.log('red');
// }

// btns[0].addEventListener('click', () =>{  // для первой кнопки устанавливаем слушателя на клик
//   // if (!btns[1].classList.contains('red')){ // условие для второй  кнопки если нет класса red
//   //   btns[1].classList.add('red') // тогда мы его устанавливаем
//   // }else{
//   //   btns[1].classList.remove('red') /// иначе убираем
//   // }

//   btns[1].classList.toggle('red') // выполняется тоже самое что и выше. Но в больших проектах не всегда может это работать
// })

wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.tagName == 'BUTTON') {
    console.log('Hello')
  }
})
wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.matches('button.red')) {
    // это более продвинутый метод. Позволяет определить тэги с классами и повесить на них какое то действие
    console.log('Hello')
  }
})

const btn = document.createElement('button') // создает новый элемент с тэгом button
btn.classList.add('red') // в нем создаем класс red
wrapper.append(btn) // создаем эту кнопку в родителе
