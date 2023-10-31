// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

let btnToggle = true;

btn.addEventListener('click', () => {
  clonedBtn.classList.add("second-btn");
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.textContent = "Я изменю тебя";
  document.body.appendChild(clonedBtn);
});

clonedBtn.addEventListener('click', () => {
  if (btnToggle) {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  } else {
    btn.style.backgroundColor = "#f7c815";
    btn.style.color = "white";
  }
  btnToggle = !btnToggle;
});