// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
btn.style.cursor = "pointer";
btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.appendChild(clonedBtn);
  console.log('tuk tuk'); // проверка - вывод на консоль 'tuk tuk'
  console.log(clonedBtn);
  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.style.cursor = "pointer";
  // обращаемся к классу
  // clonedBtn.className = "second-btn";
  clonedBtn.setAttribute("class", "second-btn"); // второй вариант
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  console.log('Akunamatata')
  // изменяем текст параграфа с id 'text'
  const text = document.getElementById('text');
  text.textContent = "Ты изменил меня!";
  text.style.color = "#f7c815";
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "#f7c815";
  clonedBtn.style.backgroundColor = "#f7c815";
})