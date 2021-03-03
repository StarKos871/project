const log = function(a, b, ...rest){ // rest - остальное. Показывает что будут еще аргументы, но они не обязательны. И передадутся в виде массива
  console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage')

function calcOrDouble(num, basis = 2){ // задавать значение аргумента можно прямо при передаче аргумента
  console.log(num * basis);
}
calcOrDouble(4)