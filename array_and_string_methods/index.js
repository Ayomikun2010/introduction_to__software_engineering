// first to reverse the string i must have to 
// create a variable called the reversed
// then i assign it to an empty string
// then i create a reversed function to reverse the string 
// then pick the letters from the back of the string to the front   
// then print the string 




// write a function that reverse this string

function reverseString(str_chars){
    let len_of_val_passed = str_chars.length;

    let val2 = "";

    for(let counter = len_of_val_passed - 1; counter >= 0; counter--){
       val2 += str_chars[counter];
    // console.log(str_chars[counter]);
    }

     console.log(val2);
}

let val = "Cheer";
reverseString(val);

reverseString("Ayomikun");

let newStr = "Tinubu";

reverseString(newStr);

// function reversed() {
//     for (let count = 0; count <= letters; count++) {
//         let value = letters
//         reversed = reversed
//         console.log(reversed)
//     }
// }


// String Methods

let str1 = "  Jide  ";

console.log(str1)
str1 = str1.trim()
console.log(str1)

console.log(str1);
// to uppercase
let email = "michealkorede2010@gmail.com";
address = email.toUpperCase()
console.log(address);

email = email.toLowerCase()
console.log(email);

let isTrueOrFalse = email.includes("@")
console.log(isTrueOrFalse);

let startsIsTrueOrFalse = email.startsWith("micheal")
console.log(startsIsTrueOrFalse);

let endIsTrueOrFalse = email.endsWith(".pdf")
if (email.endsWith(".pdf") == false ){
    console.log("confirming what its printing");
   console.log(endIsTrueOrFalse);
}

let indexNo = email.indexOf("m")
console.log(indexNo);


let sliceEnd = email.slice(0,7)        // index number of 0,7 will be minused by 1 which will be 0,6
console.log(sliceEnd);


let replaceString = email.replace("korede", "success")
console.log(replaceString);

let arrayString = email.split("e")
console.log(arrayString);



// Array Methods
let names = ["samuel", "micheal", "joshua", "debbie", "success", "abibat", "mathias"];
let nameSplice = names.splice(0,4)
console.log(nameSplice);


let country = ["nigeria", "united kingdom", "canada", "france", "spain", "south africa", "algeria"];
let countrySplit = country.slice(0,4)
console.log(countrySplit);

let fruits = ["apple", "banana", "orange", "mango"]
let fruitsSlice = fruits.slice(0,2)
console.log(fruitsSlice);
console.log(fruits);

let results = ["apple", "banana"]


let numbers = [10, 20, 30, 40, 50]
let numbersSlice = numbers.slice(2)
console.log(numbersSlice);


// push
let food = ["rice", "beans", "yam", "bread"]
food.push("eba")
console.log(food);

// pop
food.pop("bread")
console.log(food);

// unshift
food.unshift("amala")
console.log(food);

// shift
food.shift("amala")
console.log(food);

// includes
let check = food.includes("rice")
console.log(check);


// splice
let phones = ["samsung", "iphone", "huawei", "redme", "tecno", "itel"]
let splicePhone = phones.splice(1,4)
console.log(splicePhone)
console.log(phones);



let colours = ["red", "blue", "green"]
let colourSplice = colours.splice(1, 1, "yellow")
console.log(colours);
console.log(colourSplice);

let letters = ["A", "B", "D"]
let spliceLetter = letters.splice(2, 0, "C");
console.log(spliceLetter);
console.log(letters);













































































