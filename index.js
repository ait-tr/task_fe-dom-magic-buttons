// найдем первую кнопку по id
// const btn = document.getElementById("magic-btn");
const btn = document.querySelector('#magic-btn');
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.classList.add("second-btn");
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";


let toggle = true;
btn.addEventListener('click', () => {
  if(toggle) {
    document.body.appendChild(clonedBtn);
    
    clonedBtn.addEventListener('click', () => {
      clonedBtn.style.backgroundColor = "#9c4a1a";
      clonedBtn.style.color = "black";
    });
  } else {
    document.body.removeChild(clonedBtn);   
  }
  toggle = !toggle;  
});
