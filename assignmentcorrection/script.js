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


let names_of_student = ["Jide", "Bola", "Shola", "Jinadu", "Phoebe", "Britus", "Thompson"];
let no_of_student = names_of_student.length;
console.log("no of student" + no_of_student);
let count = 0;
let id = 1;

for (count = 0; count<no_of_student; count++){
    console.log(names_of_student[count] + " " + (count + 1));
    // console.log(names_of_student[count] + " " + id);
    // id++;
}



// I want to list out each name present in the names array
// when I list out this name, it should be in this format: name id


// for me to fetch the names one by one;
// I need to know the size or length of the names array
// I need to create a variable that tracks the id
// I need to use a loop to iterate, for loop since I know the size of array
// I need to declare the for loop and then create a counter variable inside
// the counter variable sets a condition against the length of the names array
// I then iterate
// during iteration, I print console.log(names[counter] + " " + id)
// id iterates and ends when the condition is met











