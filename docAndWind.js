const box = document.querySelector('.box'),
      btn = document.querySelector('.button')

// const width = box.clientWidth; // полученинин ширины без отступов
// const height = box.clientHeight; // полученин высоты без отступов

// const width = box.offsetWidth; // полученинин ширины как в стилях прописано
// const height = box.offsetHeight; // полученинин высоты как в стилях прописано

const width = box.scrollWidth; // полученинин ширины без полосы прокрутки
const height = box.scrollHeight;// полученин высоты даже той которая скрыта полосой прокрутки
console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px'
  console.log(box.scrollTop); // получение пикселей вверху отмотанных
})
// console.log(box.getBoundingClientRect()); // получить границы пользовательского элемента

// const style = window.getComputedStyle(box) // получили все стили элемента box
// console.log(style.display);// а тут получим то что задано в display

// console.log(document.documentElement.scrollTop);
console.log(window.scrollBy(0, 300)); // прокрутка страницы по определенное значение. (х, у) принимает в себя
console.log(window.scrollTo(0, 300)); // прокрутка страницы до определенного значения. (х, у) принимает в себя