const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  color: {
    border: 'black',
    bg: 'red',
  },
  makeTest (){
    console.log('Text');
  }
}

options.makeTest()
const {border, bg} = options.color // Деструктуризация, вытаскиваем border, bg для дальнейшей работы с ними
console.log(bg);
// console.log(Object.keys(options).length); // показывает сколько ключей в объекте
// delete options.name  // Удаление свойства из объекта
// console.log(options);
// let counter = 0 // Счетчик. Считает количество свойств в объекте
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//       counter++
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     counter++
//   }
// }
// console.log(counter);