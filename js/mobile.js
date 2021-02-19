// touchstart //  возникновение касания к эл-у
// touchmove // если палец коснулся и двигается, то срабатывает 
// touchend // если палец оторвать от эл-а
// touchenter // если ведем пальцем по экрану и наскальзываем на событие какое нибудь
// touchleave // если не оторвался от элемента, а продолжил дальше скользить
// touchcancel // когда точка соприкосновения больше не регистрируется на поверхности


window.addEventListener('DOMContentLoaded', ()=> {
  const box = document.querySelector('.box')

  box.addEventListener('touchstart', (e) => {
    e.preventDefault()
    console.log('Start')
    console.log(e.touches);
    console.log(e.targetTouches);
    console.log(e.changedTouches); // список пальцев которые участвуют в тек событии
  })

  // box.addEventListener('touchmove', (e) => {
  //   e.preventDefault()
  //   console.log('Move');
  // })

  // box.addEventListener('touchend', (e) => {
  //   e.preventDefault()
  //   console.log('End');
  // })
})