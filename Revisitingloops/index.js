// 1. Write a program that prints all numbers from 1 to 100 that are divisible by 4 and 6.
let number = 100;

for (let count = 1; count <= number; count++) {
    if (count % 4 == 0 && count % 6 == 0) {
        console.log("divisible by 4 and 6");
    } else if (count % 4 == 0) {
        console.log("divisible by 4");
    } else if (count % 6 == 0) {
        console.log("divisible by 6");
    } else {
        console.log(count);
    }
}



// 2. Using a for loop, calculate the value of 8! (8 factorial). Display the final answer.
let factorial = 1;
let i = 1;

for (i = 1; i <= 8; i++) {
    factorial = factorial * i;
    console.log(factorial);
}

//  3. A student scores 45, 56, 72, 68, 91, 39, 84, 77, 63, 58. Without using an array, store each score in a separate variable and use a loop to determine:
// The total score
// The average score
// How many scores are
let score1 = 45;
let score2 = 56;
let score3 = 72;
let score4 = 68;
let score5 = 91;
let score6 = 39;
let score7 = 84;
let score8 = 77;
let score9 = 63;
let score10 = 58;

let total = 0;
let count = 0;
// using an object
let scores = {
    score1: score1,
    score2: score2,
    score3: score3,
    score4: score4,
    score5: score5,
    score6: score6,
    score7: score7,
    score8: score8,
    score9: score9,
    score10: score10
};

for (let score in scores) {
    total += scores[score];

    if (scores[score] >= 50) {
        count++;
    }
}

let average = total / 10;

console.log("Total score:", total);
console.log("Average score:", average);
console.log("Scores 50 and above:", count);

//  4. Use a while loop to reverse the digits of the number 48391. The output should be:
// 19384
let num = 48391;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reversed);


//  5. Write a for loop that prints every number from 1 to 50, but:

// Print "Fizz" if the number is divisible by 3.
// Print "Buzz" if divisible by 5.
// Print "FizzBuzz" if divisible by both.
// Otherwise print the number.
let numb = 50;
let v = 1;
for (v = 1; v <= 50; v++) {
    if (v % 3 == 0 && v % 5 == 0) {
        console.log("FizzBuzz");
    } else if (v % 3 == 0) {
        console.log("Fizz");
    } else if (v % 5 == 0) {
        console.log("Bizz");
    } else {
        console.log(v);
    }
}

//  6. Write a program that finds all prime numbers between 2 and 50 using nested loops.
for (let number = 2; number <= 50; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {

        if (number % divisor === 0) {
            isPrime = false;
            break;
        }

    }

}
     if (isPrime) {
         console.log(number);
     }


//  7. Using nested for loops, print the pattern below:
// 1
// 12
// 123
// 1234
// 12345
for (let i = 1; i <= 5; i++) {

    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}

//  8. A car starts with ₦50,000 worth of fuel. Every trip consumes ₦3,750. Use a while loop to display the remaining fuel value after each trip until it is less than the cost of another trip.
let fuel_worth = 50000;
let every_trip_consumes = 3750;
let trip = 0;
while (fuel_worth >= every_trip_consumes) {
    fuel_worth = fuel_worth - every_trip_consumes;
    trip++;
    console.log("After trip " + trip + ": ₦" + fuel_worth)
}

//  9. Write a for loop that counts how many numbers between 100 and 999 have a digit sum equal to 12.
// Example: 345 → 3 + 4 + 5 = 12
let coun = 0;

for (let number = 100; number <= 999; number++) {

    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number / 10) % 10);
    let ones = number % 10;

    let sum = hundreds + tens + ones;

    if (sum === 12) {
        coun++;
    }
}

console.log("Numbers with digit sum 12:", coun)



//  10. A number is called perfect if the sum of its proper divisors equals the number itself.
// Using loops, determine whether 28 is a perfect number and display the divisors and their total.
// Expected format:
// Divisors: 1, 2, 4, 7, 14
// Sum = 28
// 28 is a Perfect Number
// count = 10;
// for ()