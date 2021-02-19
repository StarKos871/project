const obj = {
  a: 5,
  b: 10
}

// const copy = obj // Ссылка на обьект. Он не делает копию, а ссылается на обьект выше
// copy.a = 50
// console.log(copy);

// Функция копирует вложенный в нее обьект. 
function copy(mainObj){
  let copyObj = {}

  let key
  for(key in mainObj){
    copyObj[key] = mainObj[key]
  }
  return(copyObj)
}
const numbers = {
  a: 4,
  b: 7,
  c: {
    x: 2,
    y: 9
  }
}
const newNumbers = copy(numbers)
newNumbers.a = 10
console.log(newNumbers); // Тут вывели копию и выше изменили содержимое обьекта
console.log(numbers); // Тут вывели оригинал без изменений

const add = {
  d: 17,
  e: 27
}

console.log(Object.assign(numbers, add)); /// Этой командой мы совместили 2 обьекта. В качестве аргументов передается 1: в какой обьект передавать, 2: какой именно передавать

// Копируем массив 

// const oldArray = ['a', 'b', 'd', 'c']
// const newArray = oldArray.slice()
// newArray[1] = 'Kis hello'
// console.log(oldArray);
// console.log(newArray);

// Еще, более современные методы. Спрэд оператор ... разворачивает массив в виде строк. И это можно засунуть куда нить или применить

const video = ['youtube', 'vimeo', 'rutube']
      blogs = ['livejournal', 'wordpress', 'blogers']
      internet = [...video, ...blogs, 'vk']

console.log(internet);

// Это мы копировали обьект при помощи спрэда который ввели в стандарте ES9
const q ={
  one: 1,
  two: 2
}
const newObj = {...q}
console.log(newObj);