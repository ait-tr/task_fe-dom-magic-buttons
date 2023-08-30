
const btn = document.getElementById("magic-btn");
const clonedBtn = btn.cloneNode(true);

clonedBtn.id = "magic-btn-2";
btn.style.cursor = "pointer";
btn.addEventListener('click', () => {

  document.body.appendChild(clonedBtn);
  // console.log('tuk tuk'); 
  // console.log(clonedBtn);
  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.style.cursor = "pointer";
  clonedBtn.setAttribute("class", "second-btn"); 
})


clonedBtn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.textContent = "Ты изменил меня!";
  text.style.color = "#f7c815";
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "#f7c815";
  clonedBtn.style.backgroundColor = "#f7c815";
})