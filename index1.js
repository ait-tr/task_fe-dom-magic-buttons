// Отримуємо кнопку за id
const btn = document.querySelector('#magic-btn');

// Встановлюємо обробник подій на першу кнопку
btn.addEventListener('click', function createAndModifyButton() {
  // Створюємо нову кнопку
  const newBtn = document.createElement('button');
  newBtn.id = "magic-btn-2";
  newBtn.textContent = "Я изменю тебя";
  // Задаємо стилі для нової кнопки
  newBtn.style.backgroundColor = "#a78b71";
  newBtn.style.color = "white";

  // Додаємо нову кнопку до body
  document.body.appendChild(newBtn);

  // Встановлюємо обробник подій на нову кнопку
  newBtn.addEventListener('click', function changeOriginalButtonStyle() {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });

  // Видаляємо обробник подій, щоб нова кнопка додавалася тільки один раз
  btn.removeEventListener('click', createAndModifyButton);
});