//  Обработчик событий

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay')


    
// btn.onclick = function() {
//   alert('Hello')// Это устаревшая форма
// }

// btn.addEventListener('click', () => {
//   alert('Hi')// это уже современный способ
// })


// Этот пример включения и выключения обработчика после определенного события
// let i = 0
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++
  // e.target.remove() // При наведении удаляем объект
  // if (i == 1){
  //   btn.removeEventListener('click', deleteElement)
  // }
}
// onse позволяет выполнение нажатия на кнопку лишь один раз
btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true}); // Перебор всех кнопок на странице
}) 

// btn.addEventListener('click', deleteElement)

// Смысл этого примера заключается в том, что мы можем закрывать обработчик и у родителя (overlay)
// Это всплытие собитий. Обработчик сначала обрабатывает самый первый элемент, а затем родителя и так далее по иерархии выше.
// let i = 0
// const deleteElement = (e) => {
//   console.log(e.target);
//   console.log(e.type);
//   i++
//   // e.target.remove() // При наведении удаляем объект
//   if (i == 1){
//     btn.removeEventListener('click', deleteElement)
//   }
// }

// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)

//---------------- 8499-234-16-90


// Этот пример того как мы можем отменить стандартные установки браузера и отключить переход по ссылке.
// е - event. (событие)
// const link = document.querySelector('a')

// link.addEventListener('click', (e) => {
//   e.preventDefault() // событие предотвратить по умолчанию
//   console.log(e.target);
// })
// //----------------------------------