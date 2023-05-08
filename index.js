function addMagicButton() {
  var magicButton = document.createElement("button");
  magicButton.id = "magic-btn-2";
  magicButton.innerText = "Я изменю тебя";

  magicButton.style.backgroundColor = "#a78b71";
  magicButton.style.color = "white";


  var container = document.getElementById("text");
  container.appendChild(magicButton);
}
var originalButton = document.getElementById("magic-btn");
originalButton.addEventListener("click", addMagicButton);
