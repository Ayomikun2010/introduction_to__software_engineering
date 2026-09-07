/* DataType for Javascript*/

// Number
// Symbol
// BigInt
// Undefined
// String
// Null
// Boolean
// Object

let stats = true;              //  Boolean
let val= 'C';                   //  String
let price_of_food = 30.4;       //  Number data type
let num_of_units = 2;           //  Number
let num_of_weekly_units = 10;
let is_active = false;          // boolean
let first_name = "Samuel";      // string
let middle_name = "Ayomikun"
let total_sales = BigInt(1256379287354362849040289787278989765423839020278899); // bigint
let val_2 = null;               // null
let val_3 = undefined;          // undefined
let val_4;

// num2 = num2 + 50;

let full_name = first_name + " " + middle_name;
let f_name = first_name + num_of_units;
let total_num = num_of_units + num_of_weekly_units;
let f_name_2 = first_name + num_of_units + num_of_weekly_units;

console.log(full_name);
console.log(f_name);
console.log(total_num);
console.log(f_name_2);
console.log(stats)


// Typeof
console.log(typeof val_4);
let signature = typeof middle_name;

console.log(signature);


//OPERATORS IN JS

// assign operator =
// addition operator +
// subtraction operator -
// division operator /
// multiplication operator *
// modulus/remainder operator %
// exponentiation operator **
// increment operator ++
// decrement operator --

let math_val_1 = 20;
let math_val_2 = 50;
let math_val_3 = 150;
let math_val_4 = 5;

console.log(math_val_1 + math_val_4);
console.log(math_val_1 - math_val_4);

console.log(math_val_1 / math_val_4);
console.log(math_val_1 * math_val_4);

console.log(math_val_1 % math_val_4);
console.log(math_val_1 % 3);

console.log(math_val_1 % 7);
console.log(math_val_1 % 3);

console.log(math_val_1 ** 3);

console.log(math_val_1++);
console.log(math_val_1);
console.log(++math_val_1);

//THE JAVA SCRICPT MARKETING TABLE FOR A YOUNG ENTREPRENEUN WHO RUNS A BUSINESS OF SELLING T-SHIRTS
let Unit_price_per_shirt = 8500;
let number_of_shirts_sold_on_monday = 5;
let number_of_shirts_sold_on_tuesday = 8;
let number_of_shirts_sold_on_wednesday = 6;
let number_of_shirts_sold_on_thursday = 10;
let number_of_shirts_sold_on_friday = 7;
let total_number_of_shirts_sold_during_the_week = number_of_shirts_sold_on_monday +
 number_of_shirts_sold_on_tuesday +
 number_of_shirts_sold_on_wednesday + 
 number_of_shirts_sold_on_thursday + number_of_shirts_sold_on_friday;
 
let cost_of_transportation = 12000;
let cost_of_internet = 5000;
let cost_of_packaing = 8500;
let cost_of_advertising = 15000
let total_cost_of_expenses = cost_of_transportation + cost_of_internet + cost_of_packaing + cost_of_advertising;
console.log(total_cost_of_expenses)

console.log(total_number_of_shirts_sold_during_the_week);
console.log(typeof cost_of_transportation);
console.log(typeof cost_of_internet);
console.log(typeof cost_of_packaing);
console.log(typeof cost_of_advertising);
console.log(typeof amount_of_a_shirt)
let amount_of_money_made_on_monday = Unit_price_per_shirt * 5;
let amount_of_money_made_on_tuesday = Unit_price_per_shirt * 8;
let amount_of_money_made_on_wednesday = Unit_price_per_shirt * 8;
let amount_of_money_made_on_thursday = Unit_price_per_shirt * 6;
let amount_of_money_made_on_friday = Unit_price_per_shirt * 7;
console.log(amount_of_money_made_on_monday);
console.log(amount_of_money_made_on_tuesday);
console.log(amount_of_money_made_on_wednesday);
console.log(amount_of_money_made_on_thursday);
console.log(amount_of_money_made_on_friday);





// LOOP (Iteration or Iterator or looping or repeatedly)

// We have 2 types of loop
// 1. For loop
// 2. While Loop


//For Loop:

// A teacher has 10 students and he wants each if them to see their name on the register before entering the class

// let no_of_students = 0;

let name_of_students = ["Jide", "Sambo", "Bolaji", "Ayodele", "Daniel", "Shola", "Bimpe", "Fola", "Bella", "Chizoba"]; // Array or Object for javascript

let no_of_students = name_of_students.length;

console.log("NO OF STUDENTS: " + no_of_students)

for(let count = 0; count<no_of_students; count++){
    console.log(name_of_students[count])
    console.log("=====================")
}


// INCREMENT OPERATOR

let samuel_age = 16;

// lets increment samue age by 1

samuel_age = samuel_age + 1;

console.log(samuel_age);

// samuel_age = samuel_age + 1;
samuel_age+=1;
console.log(samuel_age); // 18

// pre increment and post increment

++samuel_age; // pre increments

console.log(samuel_age);

samuel_age++; // post increment

console.log(samuel_age);


let counter = 2;

console.log(++counter);         // pre increment
console.log("val: " + counter)  

console.log(counter++);         // post increment

console.log(counter);


// DECREMENT OPERATOR

let num = 3;

num - 1;

console.log(num);  // why


num--;                  // post decrement

console.log(num)


let num2 = 7;

console.log(num2--);

console.log(num2)


// pre decrement

let num3 = 5;

console.log(--num3);

num3-=1;

console.log(num3);


// CONDITIONAL OPERATORS

// if, if else, >, ==

// let ayo_age = 16;
// let ayo_age = 25;
let ayo_age = 10

if(ayo_age > 12){
    console.log("Ayo is gradually becoming a young man")
} else {
    console.log("Ayo is still a small boy")
}

if(ayo_age == 20){
    console.log("Ayo is a young Man")
} else {
    console.log("Ayo is almost a Man")
}

if(ayo_age >= 30){
    console.log("Ayo is a Man")
}
else if(ayo_age > 20){
    console.log("Ayo is a young man")
} 
else{
    console.log("Ayo is still growing");
}


// ASSIGNMENT ONE FOR THE WEEK: CRITICAL THINKING
let tunde_age = 17;             // 1     
tunde_age+=1
console.log(++tunde_age);
console.log(tunde_age++);
console.log(tunde_age);

let total_no_of_customers_waiting_during_the_day = 250;   //2
let total_no_of_customers_attended_to_during_the_day = 25;
let total_no_of_new_customers_that_arrives = 12;
let total_no_of_customers_waiting = total_no_of_customers_waiting_during_the_day + total_no_of_new_customers_that_arrives;
console.log(total_no_of_customers_waiting);

let mathematics_score = 74;   //3
let engish_score = 68;
let biology_score = 81;
let Tal_score = mathematics_score + engish_score + biology_score;
let average_score = Tal_score / 3;
console.log(average_score);
console.log(Tal_score);
if(average_score>=70){
    console.log("excellent");
} else {
if(average_score >= 50  <= 69);
    console.log("pass");
} 
if(average_score < 50);
{
    console.log("failed");
}
                                                                
                                                                
                                                                
// let x = 5             //4                                    
// console.log(x++)= 5;                                         
// console.log(x)= 6;                                          
// console.log(++x)= 7;                                        
// console.log(--x)= 6;                                        
// console.log(x--)= 6;                                        
// console.log(x)= 5;                                          
let x = 5                                                      
console.log(x++);                                              
console.log(x);                                                
console.log(++x);                                              
console.log(--x);                                              
console.log(x--);                                              
console.log(x);

// let_number_of_student = 0;
let name_of_student = ["Esther","david","samuel","grace","ibrahim","chioma","tobi","favour"]    // 5
let NUM_of_student = name_of_students.length
console.log("NUM_of_student" + NUM_of_student)
for (let count = 0; count<NUM_of_student; count++)
    console.log(name_of_student[count])
    console.log("=======") 

    // Even number hunter // 6
    // let no = 1;    
     for(let no = 1; no<= 30; no++){
     if (no % 2 === 0);
        console.log(no);

    }

    // Countdown from 10 to 1      // 7
    for(let countdown = 10; countdown>1; countdown--){
        console.log(countdown);
        console.log("LIFTOFF!");
    }

    let salary_earned_per_month = 185000;  // 8
    // Expenses
    let rent = 50000;
    let food = 32500;
    let transport = 18000;
    let internet = 7500;
    let total_expenses = rent + food + transport + internet;
    let amount_of_money_remaining_after_expenses = salary_earned_per_month - total_expenses;
    if(amount_of_money_remaining_after_expenses > 50000){
        console.log("You saved money this month")   
    } else {
         console.log("Reduce your sending")
    }

    let number = 7;  // 9
    // let count = 1;
    for(let count = 1; count<=12; count++){
        console.log((number * count));
    }
    
    

     // ASSIGNMENT TWO (WEEK 1): JAVASCRIPT, LOGICAL AND CRITICAL THINKING
     // let number = 10           // 1
     // number+= 5 == 15
     // console.log(number) = 15
     // number++ == 15
     // console.log(number) = 16
     // console.log(++number) = 17
     // number-- = 17
     // console.log(number) = 16
     // console.log(number--) = 16
     // console.log(number) = 15
        let Number = 10
        Number+=5
        console.log(Number);
        Number++ 
        console.log(Number);
        console.log(++Number);
        Number--
        console.log(Number);
        console.log(Number--);
        console.log(Number);
        
        let ATM_starts = 500000;      // 2
        // Transaction
        let first_customer_withdraws = 75000;
        let another_customer_deposits = 120000;
        let second_customer_withdraws = 50000;
        let bank_adds_to_the_account = 25000;
        let third_customer_withdraws = 80000;

        let initial_balance = ATM_starts
        let After_transaction_1 = initial_balance - first_customer_withdraws;
        let After_transaction_2 = initial_balance - another_customer_deposits;
        let After_transaction_3 = initial_balance - second_customer_withdraws;
        let After_transaction_4 = initial_balance - bank_adds_to_the_account;
        let Final_transaction = initial_balance - third_customer_withdraws;
        console.log(initial_balance);
        console.log(After_transaction_1);
        console.log(After_transaction_2);
        console.log(After_transaction_3);
        console.log(After_transaction_4);
        console.log(Final_transaction);

        let Mathematics_score = 82;                 // 3
        let Engish_score = 71;
        let Physics_score = 64;
        let Computerscience_score = 91;
        let Total_score = Mathematics_score + Engish_score + Physics_score + Computerscience_score;
        let Average_score = Total_score / 4;
        if(total_score >= 90){
            console.log("Outstanding")
        }
        else if(total_score >=75  <= 89){
            console.log("Excellent")
        }
        else if(total_score >=60  <= 74){
            console.log("Good")
        }
        else if(total_score >=50  <= 59){
            console.log("Pass")
        }
        else{
            console.log("failed")
        }
        
         // let NO = 3                  // 4
        //  for(let count = 1; count<=5; count++){
        //      console.log(NO);
        //    NO += 3;  
        // }
        //  Answers to the question
        // 1. What will be printed
        //     3
        //     6
        //     9
        //     12
        //     15
        // 2.  how many times will the loop run
        //     5 times because count <= 5
        // 3.  what will the value of number be after the loop finishes?
        //     18 

        let NO = 3               
        for(let count = 1; count<=5; count++){                       
           console.log(NO);                                          
           NO += 3;                                                  
        }
        let No = 3
        for(let count = 1; coun<=4; count++){
            console.log(NO)
            NO+= 3;
        }

        let COUNT = 1;           // 5
        for(let  COUNT = 1;  COUNT<=50; count++)
        if( COUNT % 2 === 0){
            console.log("count is even");
        } else {
            console.log("count is odd");
        }

        let customer_money = 100000;         // 6
        // Item
        let rice = 45000;
        let milk = 8500;
        let bread = 2000;
        let eggs = 6500;
        let chicken = 18000;
        let total_cost_of_item = rice + milk + bread + eggs + chicken;
        let total_amount_of_change_the_customer_should_receive = customer_money - total_cost_of_item;
        if(total_amount_of_change_the_customer_should_receive > 20){
            console.log("Large change")
        }
        else{
            console.log("Small change")
        }
        
        // let count = 0             // 7
        let numbers = [12,7,25,18,4,31,10]
        let total_element = number.length
        console.log("TOTAL ELEMENT;" + total_element);
        console.log("-----")
        for(count = 0; count<number.length; count++);
        let currentNumber = number[count];
        // Checking where number greater than 15
        if(currentNumber>15){
            console.log("currentNumber is greater than 15")
        }
        // Every even number
        if(currentNumber % 2===0){
            console.log("currentNumber is even");
        }


        let salaries = [        // 8
            85000,
            120000,
            95000,
            200000,
            75000,
            150000,
            110000,
            60000,
        ];
        let total_salary = 0;
        let high_earners = 0;
        console.log("All salaries")
        for(let count = 0; count<salaries.length; count++)
        let present_salary = salaries[count]
        // Display every salary
        console.log("Employee" + (count + 1) + ": ₦" + current_salary)
        // Calculate total amount the company pays all employee
        total_salary+=current_salary
        // calculate average
        let average_salary = total_salary / salaries.length
        // Count employee earning 100000 or more
        if(current_salary>=100000){
            high_earners++;
        }
        console.log("-------");
        console.log("Total amount company pays: ₦" + total_salary);
        console.log("Average salary: ₦" + average_salary);
        console.log("Employees earning  ₦100000 or more:" + high_earners);        
        

        // ASSIGNMENT THREE (WEEK 1): JavaScript Deep Dive FOR LOOPS
        //for (let count = 1; count <= 5; count++) {         // 1
     //console.log("Count: " + count);
 //}
        // what will be printed
        // count: 1
        // count: 2
        // count: 3
        // count: 4
        // count: 5
        // 1. What is the first value of count?
        // count = 1
        // 2. How many times does the loop execute?
        // 5 times
        // 3. What is the value of count when the loop stops?
        // value = 6
        // 4. Why does the loop stop?
        // when the condition becomes false
        for (let count = 1; count <= 5; count++) {
     console.log("Count: " + count);
    }


    // let count = 2; count <= 20; count += 2) {        // 2
   //   console.log(count);
// }

   // Then explain the purpose of each of these three parts:
// let count = 2 : It run only once
// count <= 20:To check whether it is true
// count += 2: It the last thing that run
// To run the program:
    let cOUNT = 2; (cOUNT <= 20 cOUNT += 2) ; {
     console.log(cOUNT); 
    }
    // Finally, change the loop so that it prints:

     // 3
     // 6
     // 9
     // 12
     // 15
     // 18
     // 21
     // 24
     // 27
     // 30
    let count = 3; ( COUnt <= 27;  COUnt += 2) {
     console.log( COUnt); 
    }

    // Write a for loop that prints:     // 3

// 20
//19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// Then modify your loop so that it prints only:

// 20
// 18
// 16
// 14
// 12
// 10

// Write a for loop that prints:
for(let count = 20; count >= 10; count--){
    console.log(count);
}

// Then modify your loop so that it prints only:
for(let count = 20; count >= 10; count-=2){
    console.log(count);
}

console.log("Checking number 1 to 5");      // 4
for(let count = 1; count <= 50; count++){
    if(count % 2 === 0){
        console.log(count + "even");
    } else {
        console.log(count + "is odd");
    }
}

let even_count = 0;          // 5
let odd_count = 0;
console.log("checking numbers from 1 to 100....");
for(let count = 1; count <= 100; count++){
    if(count % 2 === 0){
        even_count++;
    } else {
        odd_count++;
    }
}


let total = 0;          // 6
console.log("Adding numbers from 1 to 100");
for(let count = 1; count <= 100; count++){
    total += count;
    console.log("Total" + total); 
}

let student = ["samuel", "david", "daniel", "grace", "esther", "micheal", "john," "sarah"];   // 7
console.log("Student list")
for(let count = 0; count <student.length; count++){
    console.log("Student" + (count + 1) + ": " + student(count));
}

console.log("Number that even and greater than 20");            // 8
for(let count = 1; count <= 50; count++){
    if(count % 2 === 0  count > 20){
        console.log(count);
    }
}

let scores = [
    45, 67, 82, 91, 38,
    74, 56, 88, 93, 49,
    71, 64, 35, 80, 77,  
]
let total_students = scores.length;
let total_score = 0;
let pass_count = 0;
let fail_count = 0;
let high_score = scores[0];
let low_score = [0];
let eighty_plus_count = 0;
let even_count = 0;
let odd_count = 0;


let number_of_student = ["david", "samuel", "fola", "micheal", "jeremiah", "mayowa", "seun", "alex", "shina", "bright"]
"student name" = number_of_student.length
for(let count = 1; count < student_name; count++);
console.log(student_name);



















        
