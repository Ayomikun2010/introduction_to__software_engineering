const containerElem = document.getElementById("container");
const titleElem = document.getElementById("title");
const decrElem = document.getElementById("decr");
const inpElem = document.getElementById("inp");
const submitBtnElem = document.getElementById("submitBtn");
const presentElem = document.getElementById("present");
const attemptsElem = document.getElementById("attempts");

let randonVal = Math.floor(Math.random() * 20) + 1;

submitBtnElem.addEventListener("click", function () {

    let valEntered = Number(inpElem.value)

    if (valEntered === 0) {
        presentElem.textContent = "You must pass a Number";
        return;
    }

    if (valEntered === randonVal) {
        presentElem.textContent = "You Won";
        return;
    }
    if (valEntered < randonVal) {
        presentElem.textContent = "Number too low";
        return;
    }
    if (valEntered > randonVal) {
        presentElem.textContent = "Number too high";
        return;
    }

})



let ss3_students = [
    ["Shola", "Gbenga", "Tunde"],
    ["Deborah", "Funbi", "Tope"],
    ["Amina", "Haruna", "Jamilu"]
]

let ss3_student_name = ["Shola", "Gbenga", "Tunde", "Deborah", "Funbi", "Tope", "Amina", "Haruna", "Jamilu"]

let ss3_size = ss3_students.length

for (let counter = 0; counter < ss3_size; counter++) {
    console.log(ss3_students[counter]);

    for (let i = 0; i < ss3_students[counter].length; i++) {

        if (counter == 0) {
            console.log(ss3_students[counter][i] + " Welcome");
        } else if (counter == 1) {
            console.log(ss3_students[counter][i] + " sit");
        } else {
            console.log(ss3_students[counter][i] + " Clap");
        }

    }
}



let ss3_student_details = [
    ["Shola", "Gbenga", "Tunde"],
    ["Male", "Male", "Male"],
    ["16", "17", "15"]
]
let studentSize = ss3_student_details.length;

for(let arrCounter = 0; arrCounter < ss3_student_details.length; arrCounter++){

    for(let rowCounter = 0; rowCounter < ss3_student_details[arrCounter].length; rowCounter++){
        if(rowCounter == 0 && arrCounter == 0){
            console.log("The student name is: " + ss3_student_details[arrCounter][rowCounter] + 
                " and the student is " + ss3_student_details[arrCounter + 1][rowCounter] +
                "and the student age is " + ss3_student_details[arrCounter + 2][rowCounter]
            );
        } else if( rowCounter == 1 && arrCounter == 0){
             console.log("The student name is: " + ss3_student_details[arrCounter][rowCounter] + 
                " and the student is " + ss3_student_details[arrCounter + 1][rowCounter] +
                "and the student age is " + ss3_student_details[arrCounter + 2][rowCounter]
            );
        } else if(arrCounter == 0 && rowCounter == 2){
             console.log("The student name is: " + ss3_student_details[arrCounter][rowCounter] + 
                " and the student is " + ss3_student_details[arrCounter + 1][rowCounter] +
                "and the student age is " + ss3_student_details[arrCounter + 2][rowCounter]
            );
        }
    }
}

// for (let counter = 0; counter < studentSize; counter++) {
//     // console.log(ss3_student_details[i]);
//     let details = "";
//     for (let count = 0; count < ss3_student_details[counter].length; count++) {
        
//         if (counter == 0 ) {
//             details = "The student name is: " + ss3_student_details[counter][count];
//         } else if(counter == 1){
//             details  += " they are a " + ss3_student_details[counter][count];
//         } else {
//             details += " and the age is " + ss3_student_details[counter][count];
//         }
//         // console.log(details);
//     }
//     console.log(details);
// }





