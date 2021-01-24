const arr = [1, 23, 85, 7]
arr.sort(compareNum) // сортировка числового массива по порядку. При помощи фу-ии
console.log(arr);
function compareNum(a, b){
  return a - b
}

// arr.pop()   // удаляет последний элемент в массиве
// arr.push(19) // добавляет элемент
//  console.log(arr);

// for (i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for (let value of arr){
//   console.log(value);
// }

// arr.forEach(function(item, i, arr){
//   console.log(`${i}: ${item} значение массива ${arr}`);
// })

// const str = prompt("","")
// const product = str.split(", ") // превращает строку в массив
// product.sort() // сортировка
// console.log(product.join('; ')); // join - превращает массив в строку