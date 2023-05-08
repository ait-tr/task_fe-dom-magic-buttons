function addMagicButton() {
  var magicButton = document.createElement("button");
  magicButton.id = "magic-btn-2";
  magicButton.innerText = "Я изменю тебя";

  magicButton.style.backgroundColor = "#9c4a1a";
  magicButton.style.color = "black";


  var container = document.getElementById("text");
  container.appendChild(magicButton);
}
var originalButton = document.getElementById("magic-btn");
originalButton.addEventListener("click", addMagicButton);
