// Question 1: Multiples Counter
// Write a program that counts how many numbers between 50 and 200 are divisible by 7. 
// Print both the numbers and the final count.
let count = 0;

for (let i = 50; i <= 200; i++) {
    if (i % 7 === 0) {
        console.log(i);
        count++;
    }
}

console.log("Total count:", count);


// Question 2: Number Pyramid
// Using nested for loops, print the pattern below:
// 55555
// 4444
// 333
// 22
// 1
for (let i = 5; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i;
    }

    console.log(row);
}


// Question 3: ATM Withdrawal
// An account balance is ₦85,000. A customer withdraws ₦12,000 repeatedly.
// Use a while loop to display the balance after each withdrawal until another withdrawal is no longer possible.
let balance = 85000;
let withdrawal = 12000;

while (balance >= withdrawal) {
    balance = balance - withdrawal;
    console.log("Balance after withdrawal: ₦" + balance);
}


// Question 4: Common Multiples
// Write a program that prints the first 15 numbers that are divisible by both 4 and 9.
let num = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 9 === 0) {
        console.log(i);
        num++;

        if (num === 15) {
            break;
        }
    }
}


// Question 5: Digit Counter
// Using a while loop, determine how many digits are in the number:
// 987654321
// The output should be:
// The number has 9 digits.
let number = 987654321;
let coun = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    coun++;
}

console.log("The number has " + coun + " digits.");


// Question 6: Multiplication Grid
// Using nested for loops, print the multiplication table from 1 × 1 to 5 × 5.
// Example:
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// ...
for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += (i * j) + " ";
    }

    console.log(row);
}


// Question 7: Largest Divisor
// Find the largest number less than 100 that is divisible by 8 and 12. Use a loop to solve it.
let largest = 0;

for (let i = 99; i >= 1; i--) {
    if (i % 8 === 0 && i % 12 === 0) {
        largest = i;
        break;
    }
}

console.log("Largest number is:", largest);


// Question 8: Salary Growth
// A worker earns ₦30,000 in Month 1. His salary increases by ₦2,500 every month. 
// Use a for loop to display his salary from Month 1 to Month 12.
let salary = 30000;

for (let month = 1; month <= 12; month++) {
    console.log("Month " + month + ": ₦" + salary);

    salary = salary + 2500;
}


// Question 9: Armstrong Number Check
// Determine whether 153 is an Armstrong number. 
// An Armstrong number is a number whose digits cubed and added together equal the original number.
// Example:
// 13+53+33=153
// Display the calculation and the result.
let numb = 153;
let originalNumber = numb;
let sum = 0;
let calculation = "";

while (numb > 0) {
    let digit = numb % 10;

    sum += digit ** 3;

    calculation = digit + "³" + (calculation ? " + " + calculation : "");

    numb = Math.floor(numb / 10);
}

console.log(calculation + " = " + sum);

if (sum === originalNumber) {
    console.log(originalNumber + " is an Armstrong number.");
} else {
    console.log(originalNumber + " is not an Armstrong number.");
}


// Question 10: Staircase Pattern
// Using nested loops, print this pattern:
// #
// ##
// ###
// ####
// #####
for (let i = 1; i <= 5; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "#";
    }

    console.log(row);
}
