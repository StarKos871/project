 
//  console.log('загрузка данных...');

// const req = new Promise((resolve, reject) => { // решиться, отвергнуть. Выполнено или не выполнено. Promise - обещание

//   setTimeout(() => { // устанавливаем таймер
//     console.log('Подготовка данных...'); // выводим сообщене для наглядности

//     const product = { // создадим объект с какими то данными
//       name: 'TV',
//       price: 2000
//   }
//     resolve(product) // обещание прошло успешно и передаем туда объект
//   }, 2000) // выполнить через 2 сек
// })

// req.then((product) => { // then - когда resolve. catch - когда reject. then(тогда, потом) catch(ловить)
//   return new Promise((resolve, reject) => { // вернуть новое обещание
//     setTimeout(() => { // с таймером
//       product.status = 'order' // и добавить status = 'order'
//       // resolve(product) 
//       reject() //это значит что-то пошло не так
//     }, 2000)  
//   })  
// }).then(data => { // также цепочкой можно передавать дальше новые задачи. И они будут выполняться последовательно
//   data.modify = true // добавляем новый элемент в объект
//   return(data) // возвращаем данные
  
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.error('произошла ошибкаааааа');
// }).finally(() => { // в этом блоке мы можем например очистить форму от старых данных и т.д.
//   console.log('Finally');
// })


const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

// Promise.all([test(1000), test(2000)]).then(() => { // ждет пока прогрузятся или выполнятся ВСЕ действия указанные в обещании
//   console.log('All');
// })

Promise.race([test(1000), test(2000)]).then(() => { // ждет пока прогрузятся или выполнятся первое действие указанные в обещании
  console.log('All');
})

