//button1
const btn = document.getElementById("magic-btn");
console.log(btn);
btn.addEventListener('click', () => {
  console.log("Bebe Rexha");
  document.body.append(clonedBtn);
})


//button2
const clonedBtn = btn.cloneNode(true);
console.log(clonedBtn);
clonedBtn.id = "magic-btn-2";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

clonedBtn.addEventListener('click', () => {
  console.log("FFF");
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
})
