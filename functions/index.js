// FUNCTIONS


function printName(){
    console.log("Student Name is: " + "Ayomikun");
}

function printStudentName(name_of_student){
    console.log("Student Name is: "+ name_of_student);
}


printName();

printStudentName("Deborah");
printStudentName("Jibola");
printStudentName("Daniel")


// LOGICAL OPERATORS

// || OR  
// true + false = true
// false + true = true
// true + true = true


// && AND 
//  true + true = true
// false + true = false
// true + false = false

let age = 16;

let students = ["Bolu", "Shope", "Bisoye"];
let students_age = [15, 17, 16];

if(students_age[0] > 12 && students_age[0] < 16){
    console.log("This student is Bolu");
}

if(students_age[0] == 13 || students_age[0] == 15){
    console.log("Bolu is growing")
} else{
    console.log("Bolu might be growing or not");
}

if(students_age[0] == 15 || students_age[0] == 13){
    console.log("Bolu is growing")
} else{
    console.log("Bolu might be growing or not");
}

if(students_age[0] == 15 && students_age[0] == 13){
    console.log("Bolu is growing")
} else{
    console.log("Bolu might be growing or not");
}

// let, var, const;

// let age; // declaring a variable
// let age2 = 2; // defining a variable

// FUNCTIONS

function printNameAndAge(name, age){
    console.log("The student name is: "+ name + " and the student age is: " + age);
}

printNameAndAge("Ayomikun", 16)

// Write a function called add7 that takes one number and return that number + 7.
// * add7(10) should return 17
function add7(no){
    return no + 15;
}
const result = add7(7);
console.log(result);


// write a funtion called multiply that takes 2 numbers and returns their product
// * multiply(3, 2) should return 6
function multiply(no1, no2){
   return no1 * no2 
}
const multiplyResult = multiply(2, 2);
console.log(multiplyResult)