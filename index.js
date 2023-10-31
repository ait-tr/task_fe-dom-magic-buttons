// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
const btn1 = document.querySelector("#magic-btn");

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  btn.textContent="Я изменю тебя";
  btn.style.backgroundColor = "#a78b71";
})
btn1.addEventListener('click', () => {
  btn1.textContent= "Я изменю тебя";
  btn1.style.backgroundColor = "#9c4a1a";
})
// здесь можете создать EventListener для второй кнопки