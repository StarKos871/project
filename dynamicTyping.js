//String

//1) Превращение в строку
console.log(typeof(String(null))); 

//2) Другой способ. Конкотинация
console.log(typeof(5 + ''));

//Пример для сложния строк и чисел

num = 5

console.log('https://vk.com/catalog/' + num);

//Превращение в число
//1)
console.log(typeof(Number('5' )));
//2)
console.log(typeof(+'5'));// Унарный + это называется
//3)
// console.log(parseInt('19');

// The boolean

// 0, '', undefined, null, NaN. - this is false

console.log(typeof(Boolean('5')));
//2)
console.log(typeof(!!'4555'));