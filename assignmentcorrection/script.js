const colorBoxElement = document.getElementById("color-box");
const btnChangeColorElem = document.getElementById("btn-change-color");
const resetbtnElem = document.getElementById("btn-reset");
const updateTextBtnElem = document.getElementById("btn-change-text");
const addToListBtnElem = document.getElementById("btn-add-item");
const textInputElem = document.getElementById("text-input");

btnChangeColorElem.addEventListener("click", function(){
    const colors = ["green", "crimson", "red", 'blue', "purple"];
    const len = colors.length

    let randomVal = Math.floor(Math.random() * len);

colorBoxElement.style.backgroundColor = colors[randomVal];
})

resetbtnElem.addEventListener("click", function(){
    const color = "lightgray";
    
    colorBoxElement.style.backgroundColor = color;
})

updateTextBtnElem.addEventListener("click", function(){
const textInputElem = "Ayomikun";
colorBoxElement.textContent 
})



console.log("Printing the element object")

console.log(colorBoxElement)

console.log("=====================")

let person = {
    name: "Ayomikun",
    age: 16,
    foot: {
        right: "5 fingers",
        left: "5 fingers"
    }
}

console.log(person);

person.age = 12

console.log(person);

person.foot.right = "6 fingers"

console.log(person)

// h1{
//     display: flex,
//     color: red
// }


let names = ["Jide", "Bola", "Shola", "Jinadu", "Phoebe", "Britus", "Thompson"];
console.log(names);







