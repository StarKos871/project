let num = 20

// function showFirstMessage(text){
//   console.log(text);
// }
// showFirstMessage('Hello World!')

// функции- применение с return. return завершает функцию и после него ничего 
// выполняться не будет
// function calc(a, b){
//   return(a+b);
// }

// console.log(calc(10, 6));


// Так же return может выносить переменную за пределы функции.
// This is function declaration
function ret(){
  let num = 50
  return (num)
}
// let anotherNum = ret()
// console.log(anotherNum)

// Функциональное выражение (function expression). Оно отличается тем что срабатывает тогда, когда до нее доходит 
//код. Только после этого она сработает. Т.к. она обьявлена в переменной, она и работает 
//сродни переменной

let logger = function(){
  console.log('I Los');
}
// logger()


// Стрелочная функция

const calc = (a, b) => a + b