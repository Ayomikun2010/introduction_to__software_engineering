const colourboxElement = document.getElementById("colour-box");
const changecolourElement = document.getElementById("btn-change-color")
const resetbuttonElement = document.getElementById("btn-reset");

colourboxElement.style.backgroundColor = "crimson";

resetbuttonElement.addEventListener("click", displayKing);

function displayKing(event){
    event.displaydefault();
   resetbuttonElement.style.backgroundColor = "crimson"; 
}

