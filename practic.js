//  Обработчик событий

// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay')


    
// btn.onclick = function() {
//   alert('Hello')// Это устаревшая форма
// }

// btn.addEventListener('click', () => {
//   alert('Hi')// это уже современный способ
// })


// Этот пример включения и выключения обработчика после определенного события
// let i = 0
// const deleteElement = (e) => {
//   console.log(e.target);
//   console.log(e.type);
  // i++
  // e.target.remove() // При наведении удаляем объект
  // if (i == 1){
  //   btn.removeEventListener('click', deleteElement)
  // }
// }
// onse позволяет выполнение нажатия на кнопку лишь один раз
// btns.forEach(btn => {
//   btn.addEventListener('click', deleteElement, {once: true}); // Перебор всех кнопок на странице
// }) 

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

// В этом блоке рассматривается получение первого и последнего "ребенка" у "родителя"
// console.log(document.body.firstChild);// получение первого элемента
// console.log(document.body.firstElementChild);// получение первого элемента
// console.log(document.body.lastChild);// получение последнего элемента
// console.log(document.body.lastElementChild);// получение последнего элемента

// В этом блоке рассматривается получение "родительского" элемента
// console.log(document.querySelector('#current').parentNode);// эта команда дает возможность вывести в консоль родителя элемента с id current
// console.log(document.querySelector('#current').parentElement);// эта команда дает возможность вывести в консоль родителя элемента с id current

// В этом блоке рассматривается получение соседнего или же "брата" элемента
// console.log(document.querySelector('[data-current = "3"]').nextSibling);// получить следующий элемент после data-current = "3". Это будет текстовый элемент, а именно пробел от нажатия Enter
// console.log(document.querySelector('[data-current = "3"]').previousSibling);// получить предыдущий элемент до data-current = "3". Это будет текстовый элемент, а именно пробел от нажатия Enter
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);// получить следующий элемент после data-current = "3". Это будет элемент 4
// console.log(document.querySelector('[data-current = "3"]').previousElementSibling);// получить предыдущий элемент до data-current = "3". Это будет  элемент 2

// Цикл который убирает все текстовые пробелы и выводит только элементы внутри body
for (let node of document.body.childNodes) {
  if(node.nodeName == '#text') {
    continue
  }

  console.log(node);
}
