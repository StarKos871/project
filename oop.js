// let str = 'some'
// let strObj = new String(str)

// console.log(typeof(str)); 
// console.log(typeof(strObj)); 

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function(){
    console.log('Hello');
  }

}

const john = Object.create(soldier) //create(Творить) Мы создаем новый обьект Джон, который будет прототипно наследоваться от солдата


// const john = { 
//   health: 50
// }

// // john.__proto__= soldier // Это старая форма записи. С помощью прототипа мы позаимствовали содержимое из другого обьекта
// Object.setPrototypeOf(john, soldier)// Это новая форма записи. 
// john.sayHello()
