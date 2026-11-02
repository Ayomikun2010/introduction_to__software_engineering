const nameboxElem = document.getElementById("namebox");
const classboxElem = document.getElementById("classbox");
const ageboxElem = document.getElementById("agebox");
const dateboxElem = document.getElementById("datebox");
const submitBtnElem = document.getElementById("submitBtn");

let studentsVal = []
submitBtnElem.addEventListener("click", function () {
    let studentNames = nameboxElem.value
    let studentClass = classboxElem.value
    let studentAge = ageboxElem.value
    let filledDate = dateboxElem.value

    let studentDetails = [studentNames, studentClass, studentAge, filledDate]
    studentsVal.push(studentDetails)
    console.log(studentsVal)
})

let arrOfNames = []
function arrayFunction() {
    let addName = "micheal";
    arrOfNames.push(addName)
    console.log(arrOfNames);
}
arrOfNames = ["samuel", "david"];
arrayFunction(arrOfNames);


// let arrayOfNames = []
// function arrayFunction() {
//     let newName = "ayo";
//     arrayOfNames.push(newName)
//     console.log(arrayOfNames);
// }
//   arrayOfNames = ["samuel", "micheal"];
//  arrayFunction(arrayOfNames)

let addArray = []
function addFunction(name) {
    let arrayLength = addArray.length
    let addName = "";
     for (counter = arrayLength + 1; counter >= 0; counter++) {

     }  
}
// addArray + arrOfNames
//  arrayFunction(arrOfNames)
// addName = "ayo"
//  addFunction(addName)

//  arrayFunction()




















