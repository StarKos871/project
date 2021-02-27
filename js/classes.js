class Rectangle { // имя класса задается строго с большой буквы
  constructor(width, height) { // сюда мы вносим аргументы которые нам нужны
    this.width = width
    this.height = height
  }
  calcArea(){ // метод.
    return this.height * this.width// вернуть площадь посредством умножения 
  }
}

class ColoredRectangleWithText extends Rectangle { // наследуем у класса Rectangle
  constructor(height, width, text, bgColor){
    super(height, width) // этой командой мы переносим все аргументы из Rectangle. Оно должно стоять на первом месте всегда
    this.text = text
    this.bgColor = bgColor
  }
  showMyProps(){
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}
const div = new ColoredRectangleWithText(10, 3, 'Hello Kos', 'yellow')
div.showMyProps()
console.log(div.calcArea());

// const square = new Rectangle(10, 10)
// console.log(square.calcArea());