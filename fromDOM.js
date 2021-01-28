const box = document.getElementById('box')

console.log(box);

const btns = document.getElementsByTagName('button')
console.log(btns); // будет сформирован псевдомассив. 
console.log(btns[1]); // будет выделен 2 элемент. 

const circles = document.getElementsByClassName('circle')
console.log(circles);// Получение по классу

const hearts = document.querySelectorAll('.heart')

hearts.forEach(item => {
  console.log(item);
})