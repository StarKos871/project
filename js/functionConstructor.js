
// Фу-ия конструирования объектов. Эта ф-ия создает объекты внутри себя
function User (name, id){
  this.name = name
  this.id = id
  this.human = true
  this.hello = function (){
    console.log(`Hello ${this.name}`);
  }
}

User.prototype.exit = function (){ // добавление нового объекта 
  console.log(`Пользователь ${this.name} ушел`);
}
console.log(User());
const Kos  = new User('Kos', 25)
const Tima = new User('Tima', 4)

Kos.hello() // выводится содержимое hello прописанное в ф-ии User
Tima.hello()
console.log(Kos, Tima); // в консоль выводятся объекты