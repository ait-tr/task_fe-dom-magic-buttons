// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  clonedBtn.style.color = "#fff";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.innerText = "Я изменю тебя";
  document.body.appendChild(clonedBtn).className = "second-btn"; 
  // добавила класс, т.к. прочитала это в комментариях к чужим домашкам
  // из задания не было очевидно
})

// EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  // при нажатии на вторую кнопку
  btn.style.color = "#000";
  btn.style.backgroundColor = "#9c4a1a";
  // ваш код начинается здесь
})