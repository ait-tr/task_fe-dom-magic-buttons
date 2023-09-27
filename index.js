// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  clonedBtn.innerText = "Я изменю тебя"
  clonedBtn.style.color = 'white'
  clonedBtn.style.backgroundColor = '#a78b71'
  document.body.appendChild(clonedBtn)
})

clonedBtn.addEventListener('click', () =>{
  const elem = document.getElementById("magic-btn-2")
  elem.id = "elem";
  elem.style.color = 'black'
  elem.style.backgroundColor = '#9c4a1a'
  document.body.appendChild(elem)
})




