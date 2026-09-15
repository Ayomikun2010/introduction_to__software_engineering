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
    if (nameInputElem.textContent = " ") {
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
const liElem = document.getElementsByTagName("li");
let count = 0;
for (count = 0; count <= liElem.length; count++) {
    numberOutputElem.textContent = "Total student:" + count
}

// 5. Number List (For Loop)
let num = 1;
let i = 1;
for (i = 1; i <= 10; i++) {
    const newElement = document.createElement("p");
    newElement.textContent = i;
    numberOutputElem.appendChild(newElement);
}

// 6. Even and Odd Numbers (For Loop + If Else)
let number = 20;
let countNum = 1;
for (countNum = 1; countNum <= 20; countNum++) {
    if (countNum % 2 == 0) {
        console.log(countNum + " is even");
    } else if (countNum % 2 == 1) {
        console.log(countNum + " is odd");
    }
    const con = document.createElement("div");
    con.textContent = countNum;
    numberOutputElem.appendChild(con);

}

// 7. Add Five New Students (For Loop)
let noOfStudent = [
    "Grace",
    "Daniel",
    "Esther",
    "Michael",
    "Peace"
];
let nameOfStudent = noOfStudent.length;

for (i = 0; i < noOfStudent.length; i++) {
    const li = document.createElement("li");
    li.textContent = noOfStudent[i];
    numberOutputElem.appendChild(li);
}

// 8. Countdown (While Loop)
let no = 1;
let u = 10;
while (u >= no) {
    const newContainer = document.createElement("p");
    newContainer.textContent = u;
    numberOutputElem.appendChild(newContainer);
    u--
}

// 9. Find the First Number Divisible by 7 (While Loop + If)

let n = 1;
while (n <= 100) {
if (n % 7 == 0) {
console.log("First number divisble by 7 is " + n);
break;
}
    n++
}

// 10. Multiplication Table (For Loop + DOM)

