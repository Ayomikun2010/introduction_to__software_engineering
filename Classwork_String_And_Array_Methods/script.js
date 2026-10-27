// Exercise 1
// Create a variable:
// let studentName = "JavaScript Developer";
// Find the number of characters in the string using length.
// Convert the string to uppercase.
// Convert the string to lowercase.
// Print all three results.
let studentName = "JavaScript Developer";
let lengthOfCharacter = studentName.length
let toCapitalLetter = studentName.toUpperCase()
let toSmallLetter = studentName.toLowerCase()
console.log(lengthOfCharacter);
console.log(toCapitalLetter);
console.log(toSmallLetter);


// Exercise 2
// Imagine a user entered their username into a registration form:
// let username = "    AyomiSam    ";
// Using trim():
// Remove the unnecessary spaces.
// Store the cleaned username in a new variable.
// Print the cleaned username.
// Print its length.
// Question: Why is trim() useful when handling form inputs?
let username = "     AyomiSam    "
let triming = username.trim()
let trimedUserName = triming
let trimedNameLength = trimedUserName.length
console.log(triming);
console.log(trimedUserName);
console.log(trimedNameLength);
console.log("Trim is useful when handing input as not to create excess space by the user when inputing important details like passwords, names and so on");


// Exercise 3 — Email Normalization
// You receive the following email from a user:
// let email = "   AYO.MIKUN@GMAIL.COM   ";
// Your program should:
// Remove the spaces around the email.
// Convert the email to lowercase.
// Print the final result.
// Expected result:
// ayo.mikun@gmail.com
// Challenge: Can you do it using method chaining?
let email = "   AYO.MIKUN@GMAIL.COM   ";
let trimEmail = email.trim()
let toLowerLetter = trimEmail.toLowerCase()
console.log(trimEmail);
console.log(toLowerLetter);


// Exercise 4 — Checking an Email
// Given:
// let email = "mikun@gmail.com";
// Use includes() to check whether the email contains:
// @
// Print the result.
// Your output should be:
// true
// Extra Challenge
// Check whether the email contains:
// gmail
// and:
// yahoo
let Email = "mikun@gmail.com";
let isIncluded = Email.includes("@");
let isIncluded2 = Email.includes("gmail");
let isIncluded3 = Email.includes("yahoo");
console.log(isIncluded);
console.log(isIncluded2);
console.log(isIncluded3);


// Exercise 5
// Given:
// let url = "https://samayo.com";
// Use startsWith() to check whether the URL starts with:
// https
// Print the result.
// Challenge
// Test the following URLs:
// let url1 = "https://google.com";
// let url2 = "http://google.com";
// let url3 = "ftp://google.com";
// Determine which ones start with "https".
let url = "https://samayo.com";
let itStartsWith = url.startsWith("https")
// Challenge
let url1 = "https://google.com";
let url2 = "http://google.com";
let url3 = "ftp://google.com";
let startsWithHttps1 = url1.includes("https");
let startsWithHttps2 = url2.includes("https");
let startsWithHttps3 = url3.includes("https");
console.log(itStartsWith);
// Challenge
console.log(startsWithHttps1);
console.log(startsWithHttps2);
console.log(startsWithHttps3);


// Exercise 6
// You are building a document upload system.
// Given:
// let file1 = "student-report.pdf";
// let file2 = "profile-picture.jpg";
// let file3 = "assignment.pdf";
// Use endsWith() to determine which files are PDF files.
// Your output should be:
// true
// false
// true
// Challenge
// Check whether each file is:
// .pdf
// .jpg
// .png
let file1 = "student-report.pdf";
let file2 = "profile-picture.jpg";
let file3 = "assignment.pdf";
let endsWithPdf1 = file1.endsWith(".pdf");
let endsWithPdf2 = file2.endsWith(".pdf");
let endsWithPdf3 = file3.endsWith(".pdf");
// Challenge
let file1EndWithPdf = file1.endsWith(".pdf");
let file2EndWithJdf = file2.endsWith(".jpg");
let file3EndWithPng = file3.endsWith(".png");
console.log(endsWithPdf1);
console.log(endsWithPdf2);
console.log(endsWithPdf3);
// Challenge
console.log(file1EndWithPdf);
console.log(file2EndWithJdf);
console.log(file3EndWithPng);


// Exercise 7
// Given:
// let language = "JavaScript";
// Use indexOf() to find the position of:
// S
// Then find the position of:
// a
// Then find:
// Python
// Questions
// What happens when the character exists?
// What does indexOf() return when the value does not exist?
let language = "JavaScript";
let indexPosition1 = language.indexOf("S")
let indexPosition2 = language.indexOf("a")
let indexPosition3 = language.indexOf("python")
console.log(indexPosition1);
console.log(indexPosition2);
console.log(indexPosition3);
// Questions
console.log("It displays the index number of the character");
console.log("It returns a negative number if value does not exist");


// Exercise 8
// Given:
// let word = "JavaScript";
// Use slice() to extract:
// Java
// Then extract:
// Script
// Then extract:
// ava
// Important: Do not change the original string.
let word = "JavaScript";
let extractWord1 = word.slice(0, 4)
let extractWord2 = word.slice(4)
let extractWord3 = word.slice(1, 4)
console.log(extractWord1);
console.log(extractWord2);
console.log(extractWord3);


// Exercise 9
// Given:
// let email = "segun@gmail.com";
// Use indexOf() and slice() to extract only the username.
// Expected result:
// segun
// Hint
// First find the position of:
// @
// Then use that position with slice().
let emailName = "segun@gmail.com";
let Position = emailName.indexOf("@")
let extractUserName = emailName.slice(0, 5)
console.log(Position);
console.log(extractUserName);


// Exercise 10
// Given:
// let sentence = "I am learning Java";
// Replace:
// Java
// with:
// JavaScript
// Expected result:
// I am learning JavaScript
let sentence = "I am learning Java"
let replaceWord = sentence.replace("java", "javascript")
console.log(sentence);



// Exercise 11
// You receive this sentence:
// let message = "Welcome to the Python backend course.";
// Replace "Python" with "JavaScript".
// Print the new sentence.
// Question
// Does replace() change the original string?
// Test it by printing the original variable after using replace().
let message = "Welcome to the Python backend course.";
let replaceMessage = message.replace("javscript", "python")
console.log(replaceMessage);


// Exercise 12
// Given:
// let skills = "Java Spring SQL Docker Git";
// Use split() to convert the string into an array.
// Expected result:
// ["Java", "Spring", "SQL", "Docker", "Git"]
// Then:
// Find the number of skills.
// Check whether "Java" exists.
// Find the index of "SQL".
let skills = "Java Spring SQL Docker Git";
let splitSkill = skills.split(" ")
console.log(splitSkill)
//Then
let lengthOfSplitSkill = splitSkill.length
console.log(lengthOfSplitSkill);
let checkSkill = splitSkill.includes("Java")
console.log(checkSkill);
let checkIndex = splitSkill.indexOf("SQL")
console.log(checkIndex);


// Exercise 13
// Given:
// let fruits = ["Apple", "Banana", "Orange"];
// Perform the following operations:
// Add "Mango" to the end.
// Add "Pineapple" to the beginning.
// Print the final array.
// Expected result:
// ["Pineapple", "Apple", "Banana", "Orange", "Mango"]
let fruits = ["Apple", "Banana", "Orange"];
let newFruit = "Mango";
let pushFruit = fruits.push(newFruit)
console.log(fruits);
let newFruit2 = "Pineapple";
let pushFruit2 = fruits.unshift(newFruit2)
console.log(fruits);


// Exercise 14
// Start with:
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// Remove the last item using pop().
// Remove the first item using shift().
// Print the resulting array.
// Then answer:
// What is the difference between pop() and shift()?
let Fruits = ["Apple", "Banana", "Orange", "Mango"];
let removeString = Fruits.pop("Mango")
let removeString2 = Fruits.shift("Apple")
console.log(Fruits);
console.log(Fruits);
console.log("The difference between pop and shift is that pop removes value from the back of an array while shift removes value from the front of an array");


// Exercise 15
// Given:
// let skills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"];
// Use length to determine:
// How many skills are in the array?
// Print the first skill.
// Print the last skill.
let Skills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"];
let skillLength = Skills.length
let firstSkill = Skills.slice(0, 1)
let lastSkill = Skills.slice(4)
console.log(skillLength);
console.log(firstSkill);
console.log(lastSkill);


// Exercise 16
// Given:
// let skills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"];
// Use includes() to check whether the following skills exist:
// Java
// Python
// Docker
// JavaScript
// Then use indexOf() to find the position of:
// PostgreSQL
// This section is very important.
 let sKills = ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git"];
let isTrueOrFalse1 = sKills.includes("Java")
let isTrueOrFalse2 = sKills.includes("Python")
let isTrueOrFalse3 = sKills.includes("Docker")
let isTrueOrFalse4 = sKills.includes("Javascript")
let positionOf = sKills.indexOf("PostgreSQL")
console.log(isTrueOrFalse1);
console.log(isTrueOrFalse2);
console.log(isTrueOrFalse3);
console.log(isTrueOrFalse4);
console.log(positionOf);


// Exercise 17
// Given:
// let numbers = [10, 20, 30, 40, 50];
// Use slice() to extract:
// [20, 30, 40]
// Then print the original array.
// Question
// Did slice() change the original array?
let numbers = [10, 20, 30, 40, 50];
let extractNumber = numbers.splice(1, 3)
console.log(extractNumber);



// Exercise 18
// Start with:
// let numbers = [10, 20, 30, 40, 50];
// Use splice() to remove:
// 20
// 30
// Then print the array.
// Expected result:
// [10, 40, 50]
let arraynumbers = [10, 20, 30, 40, 50];
let removeNumber1 = arraynumbers.splice(1, 2)
console.log(removeNumber1);
console.log(arraynumbers);



































































































































