const container1Elem = document.getElementById("container1");
const basketElem = document.getElementById("basket");
const inputElem = document.getElementById("input");
const addElem = document.getElementById("add");
const generateElem = document.getElementById("generate");
const container2Elem = document.getElementById("container2");
const container3Elem = document.getElementById("container3");


addElem.addEventListener("click", function () {
    let itemEntered = inputElem.value;
    
    items.push(itemEntered);
    displayItem();
    inputElem.value = "";

})

generateElem.addEventListener("click", function () {
    const items = ["Rice", "Milk", "Bread", "Eggs", "Tea"]
    let number = items.length;
    for (let count = 0; count < items.length; count++) {
   const paragraphElem = document.createElement("p");
   paragraphElem.textContent = items[count];
   container2Elem.appendChild(paragraphElem);

    }
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Total Item: " + items.length;
    container3Elem.appendChild(paragraph);

})


