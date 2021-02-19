const box = document.getElementById('box')
const btns = document.getElementsByTagName('button')
const circles = document.getElementsByClassName('circle')
const wrapper = document.querySelector('.wrapper')
const hearts = wrapper.querySelectorAll('.heart') // можно не только через обращение к документу, но и через обращение к блоку
const div = document.createElement('div') // Создание блока

// console.log(box);

// console.log(btns); // будет сформирован псевдомассив. 
// console.log(btns[1]); // будет выделен 2 элемент. 

// console.log(circles);// Получение по классу


hearts.forEach(item => {
  console.log(item);
})

// box.style.backgroundColor = 'blue'// Обращение ко всем элементам

btns[2].style.borderRadius = '50%'// Обращение к определенному элементу

box.style.cssText = 'background-color: red;' // А это обращение ко множеству элементов у которых есть одинаковый id

hearts.forEach(item => (
  item.style.backgroundColor = 'green' // Вот это множество элементов покрасили
))

// const text = document.createTextNode('Тут был я')// Создание текста

div.classList.add('black') // Обращаемся к блоку-> классу -> создать и название класса в сss файле

document.body.append(div)// Создание блока в конце body

// wrapper.append(div) // Вставляет в конец 
// wrapper.prepend(div) // Вставляет в начало

// hearts[1].after(div) // После второго сердечка вставить элемент
// hearts[1].before(div) // Перед вторым сердечком вставить элемент

// circles[0].remove()// Удаление элемента
circles[0].style.cssText = 'background-color: red'
hearts[0].replaceWith(circles[0])
div.innerHTML = '<h1>Hello</h1>' // Вставить кусок  HTML. 
div.textContent = 'Hello' // Вставить текст. Кроме текста нельзя ниче
div.insertAdjacentElement('', '<h2>HI people</h2>') // втавить элементы до, после и тд