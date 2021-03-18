// Правило передачи инфы на сервер. Все должно передаваться в двойных кавычках.

const person = {
  name: 'Alex',
  tel: '+7454545454',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
}
// Объект JSON является стандартным в браузере. И у него есть 2 метода - stringify и parse. 
console.log(JSON.stringify(person)); // about.js:7 {"name":"Alex","tel":"+7454545454"} результат такой, вся инфа принимает такой вид. И теперь сервер поймет что ему передали.
console.log(JSON.parse(JSON.stringify(person)));  // about.js:8 {name: "Alex", tel: "+7454545454"} так выглядит обработка инфы пришедшей с сервера. 

const clone = JSON.parse(JSON.stringify(person)) // глубокое клонирование 
clone.parents.mom = 'Ann' // задаем новое значение для клона.

console.log(person); // итог: тут ничего не изменилось
console.log(clone); // а тут изменились данные mom