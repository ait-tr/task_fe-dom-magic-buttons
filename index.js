// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.appendChild(clonedBtn);
  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.style.borderRadius = "10px";
  clonedBtn.style.border = "none";
  clonedBtn.style.padding = "15px";
  clonedBtn.style.margin = "20px";
  clonedBtn.style.fontSize = "20px";
  
})
// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  // изменяем текст параграфа с id 'text'
  const text = document.getElementById('text');
  text.textContent = "Ты изменил меня!";
  text.style.color = "#f7c815";
})