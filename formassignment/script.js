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

    // let studentDetails = [studentNames, studentClass, studentAge, filledDate]
    studentsVal.push(studentDetails)
    console.log(studentsVal)
})

// let arrOfNames = []
// function arrayFunction(name) {
//     let newNames = "micheal";
//     arrOfNames.push(newNames)
//     console.log(arrOfNames);
// }
// arrOfNames = ["samuel", "david"]
// arrayFunction(arrOfNames)

let arrOfNames = []
function arrayFunction(name) {
    arrOfNames = ["samuel", "micheal"]
    console.log(arrOfNames)


    // function arrayAdd(name){
    //     newNames = ["ayo"];
    // }
    // arrOfNames + newNames

}


let addArray = []
function addFunction(name) {
    let arraylength = addArray.length
    let addName = "";
    // for (counter = arraylength + 1; counter >= 0; counter++) {

    // }  
}
addArray + arrOfNames
// arrayFunction(arrOfNames)
addName = "ayo"
// addFunction(addName)

//  arrayFunction()




















