// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");

const magicBtn = document.querySelector('#magic-btn');

const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  const newBtn = document.createElement('button');
  newBtn.id = 'magic-btn-2';
  newBtn.textContent = 'Я изменю тебя';

newBtn.style.backgroundColor = '#a78b71';
newBtn.style.color = 'white';

newBtn.addEventListener('click',() => {
  const magicBtn = document.querySelector('#magic-btn');
  magicBtn.style.backgroundColor = '#9c4a1a';
  magicBtn.style.color = 'black';
});
document.body.appendChild(newBtn);
})
