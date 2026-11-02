console.log(1+1);

// While Loops
// let foodPresent = true;

// while(foodPresent == true){
//     console.log("Give food")
//     foodPresent = false;
// }

// task 1: run a loop that checks dele is a boy
// when dele loops for 3 times, dele should become a girl.

// because we do not know how long it will run for, we will use a while loop
// while dele is a boy
// when dele loops 3 times:
//    dele should become a girl

let dele_gender = "boy";
let cond_4_loopn = 3;
let counter = 0;

while(dele_gender == "boy"){
    counter++;
    console.log("Dele looping counter: " + counter);
    if(counter == 3){
        dele_gender = 'girl'
    }   
}


let count = 1;        // 1
console.log("counting from 1 to 20:")
while(count<=20){
    console.log(count)
    count++
}
console.log("Done counting");


let number = 15;      // 2
console.log("countdown starting");
while(number>=1){
    console.log(number)
    number--;
}
console.log("BLAST OFF!")

let countEven = 2;        // 3
console.log("Even numbers from 2 to 50:")
while(countEven<=50){
    if (countEven % 2 == 0){
        console.log(countEven);
    }
    countEven++;
}
console.log("Done")


let NUMBER = 9;            // 4
let muiltipler = 1;
console.log("Multiplication table of 9:");
while(muiltipler<=12){
    let result = NUMBER * muiltipler;
    console.log(NUMBER + " x " + muiltipler + " = "+ result);
    muiltipler++
}

let num = 1         // 5
let total = 0
while(num<=100){
    total =  total + num
    num++
}
console.log("Total = " + total)


// let name_of_student = ["esther", "david", "samuel", "grace", "ibrahim","chioma", "tobi", "favour"]    // 6
// let countOfStudent = 0;
// console.log("Student register");{
// while((countOfStudent + 1) + "" + name_of_student(countOfStudent));
// countOfStudent++
// }
// console.log("total size of class" + name_of_student.length)


let attempts = 1         // 7
console.log("Entering system password")
while(attempts<=3){
    console.log("Attempts" + attempts)
    attempts++
}
console.log("Access Blocked")


let oddNum = 1;       // 8
console.log("odd number from 1 to 35");
while(oddNum<=35){
    console.log(oddNum)
    o+=2
}


// let scores = [65, 80, 42, 91, 58, 77, 39, 100]    // 9
// let i = 0;
// let TOTAL = 0;
// let highest = scores[0];
// let lowest = scores[0];
// while(i < scores.length){
// let current_score = scores[i];
// total += current_score;
// if(current_score>highest){
//     highest = current_score;
// }
// if(current_score<lowest){
//     lowest = current_score;
// }
// i++
// }
// let average = total / scores.length;


// let balance = 100000;         // 10
// let transaction = [-15000, 20000, -80000, 12000, -25000];
// console.log("Starting balance:  ₦" + balance);
// console.log("");
// let c = 0;
// while(c<transaction.length){
//     let current_Transaction = transaction[c];
//     balance = balance + current_Transaction;
//     console.log("Transaction" + (c + 1));
//     if (current_Transaction>0){
//         console.log("Type: Deposit  ₦" + current_Transaction);
//     } else{
//         console.log("Type: Withdraw  ₦" + Math.abu(current_Transaction));
//     }
//     console.log("Balance:  ₦" + balance);
//     console.log("");
//     c++
// }
// console.log("Final Balance:  ₦" + balance);