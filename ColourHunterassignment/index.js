const container1Elem = document.getElementById("container1");
const colourElem = document.getElementById("Color");
const targetElem = document.getElementById("target");
const containerRandBElem = document.getElementById("containerRandB");
const redElem = document.getElementById("red");
const blueElem = document.getElementById("blue");
const containerGandYElem = document.getElementById("containerGandY");
const greenElem = document.getElementById("green");
const yellowElem = document.getElementById("yellow");
const container2Elem = document.getElementById("container2");
const container3Elem = document.getElementById("container3");

const colours = ["Red", "Blue", "Green", "Yellow"];
let length = colours.length;
let randomIndex = Math.floor(Math.random() * length);
let randomColour = colours[randomIndex];
const paragraphElem = document.createElement("p");
paragraphElem.textContent = "Target: " + randomColour;
targetElem.appendChild(paragraphElem);


const resultElem = document.createElement("p");
container2Elem.appendChild(resultElem);


let score = 0;
const scoreElem = document.createElement("p");
container3Elem.appendChild(scoreElem);


// function checkColour(clickedColour) {

//     if (clickedColour === randomColour) {

//         resultElem.textContent = "Correct";

//         score++;

//     } else {

//         resultElem.textContent = "Wrong";

//         score--;
//     }

//     scoreElem.textContent = "Score: " + score;
// }



redElem.addEventListener("click", function () {

    if ("Red" === randomColour) {
        resultElem.textContent = "Correct";
        score++;
    } else {
        resultElem.textContent = "Wrong";
        score--;
    }
    scoreElem.textContent = "Score: " + score;
})
// checkColour("Red");


blueElem.addEventListener("click", function () {
    if ("blue" === randomColour) {
        resultElem.textContent = "Correct";
        score++;
    } else {
        resultElem.textContent = "Wrong";
        score--;
    }
    scoreElem.textContent = "Score: " + score;
   //  checkColour("Blue");

})


greenElem.addEventListener("click", function () {
    if ("green" === randomColour) {
        resultElem.textContent = "Correct";
        score++;
    } else {
        resultElem.textContent = "Wrong";
        score--;
    }
    scoreElem.textContent = "Score: " + score;
   //  checkColour("Green");
})


yellowElem.addEventListener("click", function () {
    if ("yellow" === randomColour) {
        resultElem.textContent = "Correct";
        score++;
    } else {
        resultElem.textContent = "Wrong";
        score--;
    }
    scoreElem.textContent = "Score: " + score;
    // checkColour("Yellow");
})








