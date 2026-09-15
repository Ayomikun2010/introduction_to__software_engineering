const titleElem = document.getElementById("title");
const greetbuttonElem = document.getElementById("greetBtn");
const nameInputElem = document.getElementById("nameInput");
const messageElem = document.getElementById("message");
const colorBtnElem = document.getElementById("colorBtn");
const studentListElem = document.getElementById("studentList");
const numberOutputElem = document.getElementById("numberOutput");

// 1. Access and Change Text
titleElem.innerText = "DOM Manipulation Assignment";

// 2. Greeting Button
greetbuttonElem.addEventListener("click", function () {
    nameInputElem.textContent
    if (nameInputElem.textContent = "") {
        console.log("Please enter your name.");
    } else {
        console.log(messageElem.innerText = "Welcome!")
    }


})

// 3. Change Title Color
colorBtnElem.addEventListener("click", function () {
// const colour = "blue";
    titleElem.style.color = "blue";

})

// 4. Count Existing Students (For Loop)
let list = document.createElement("li");
list.textContent = studentListElem.innerHTML;
for (i = 1; i <= list.textContent; i++){
    console.log("Total Students:" + i)
}
//  let list_of_student = studentListElem.textContent;
// for (i = 1; i <= studentListElem.textContent; i++){
//      console.log("Total Students:" + i);
// }