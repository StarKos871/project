// 'use strict'
// 1) Обычная ф-ия: this = window; если use strict - underfind
// function showThis(){
//   console.log(this);
// }
// showThis()

// // 2) Контекст у метода объектов - сам объект

// const obj = {
//   a: 28,
//   b: 35,
//   sum: function (){
//     console.log(this);
//   }
// }
// obj.sum()

// // 3) this в конструкторах и классах - это новый экземпляр объекта.
// function User (name, id){
//   this.name = name
//   this.id = id
//   this.human = true
//   this.hello = function (){
//     console.log(`Hello ${this.name}`);
//   }
// }

// // 4. Ручное присвоение контекста this: call, apply, bind

// function sayName(surname){
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// }
// sayName.call(user, 'Smith') // ф-ия обратись к user. Они одинаковы. Отличие лишь в синтаксисе второго и последующих аргументов. Они записываются строкой.
// sayName.apply(user, ['Smith']) // ф-ия примени user. А тут в виде массива

// function count(num){ // эта ф-ия принимает 1 аргумент, а this принимает данные из double
//   return this * num
// }
// const double = count.bind(2) // bind(связать). Она создает новую ф-ию и передает заданный аргумент. 

// console.log(double(3));


// примеры
// если в этом примере указать не классическую ф-ию, а стрелочну. ( ()=> {} ), то будет underfind т.к. стрелочная не имеет  своего контекста.
const btn = document.querySelector('button')
btn.addEventListener('click', function (){ // если колбэк ф-ия будет именно в таком классическом виде записана, то this- это будет сам объект. Он также определяется как и e.target.
  this.style.background = 'green' // окрасится в заданный цвет при нажатии
  // console.log(this); // в консоль выводится button со стилями
})

const obj = {
  num: 5,
  sayNumber: function (){
    const say = () => { // это пример стрелочной ф-ии и контекста. У нее нет контекста и поэтому она будет обращаться к родителю, т.е. к function в которой она находится. А та в свою очередь обратится к объекту в котором находится.
      console.log(this);
    }
    say()
  } 
}
obj.sayNumber()

const double = a => a * 2 // это пример стрелочной ф-ии с одним аргументом. Она будет возвращать результат независимо от того что нет слова return.
// const double = (a, b) => a * 2 // если передаем 2 аргумента и более, то тогда нужны скобки