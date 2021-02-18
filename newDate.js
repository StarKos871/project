const now = new Date() // показывает нынешнюю дату и время

console.log(now.setHours(18)); // задать час
console.log(now);

let start = new Date()
for (i = 0; i < 100000; i++){ // цикл для определения времени работы системы загрузки
  let some = i ** 3 // возведение в 3 степень
}
let end = new Date()
alert(`Цикл отработал за ${end - start} милисекунд`)

// console.log(now.getFullYear()); // получить год
// console.log(now.getMonth()); // получить месяц. Месяц будет на 1 меньше потому что начинается отсчет с 0
// console.log(now.getDate()); // получить дату 
// console.log(now.getDay()); // получить день. Отсчет начинается с воскресенья (0) и 6 день будет суббота


// console.log(now.getTimezoneOffset()); // получить разницу в минутах между часовым поясом и UTC
// console.log(now.getTime()); // получить количество милисекунд с 1970 года


