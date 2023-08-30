// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
const targetElement = document.getElementById("target-element");
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.classList.add('second-btn');

const btnStyles = getComputedStyle(btn);

console.log(btn);
console.log(clonedBtn);


btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";

  targetElement.append(clonedBtn);
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  clonedBtn.classList.add('new-styles-for-btn');
  clonedBtn.textContent = "Новые стили";
  clonedBtn.style.color = "white";
})
