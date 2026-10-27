const container1Elem = document.getElementById("container1");
const innerContainer1Elem = document.getElementById("innerContainer1");
const inputBoxElem = document.getElementById("inputBox");
const innerContainer2Elem = document.getElementById("innerContainer2");
const buttonsElem = document.getElementsByClassName("buttons");
const saveInputBtnElem = document.getElementById("saveInputBtn");
const saveTabBtnElem = document.getElementById("saveTabBtn");
const deleteAllBtnElem = document.getElementById("deleteAllBtn");
const innercontainer3Elem = document.getElementById("innercontainer3");
const ulList = document.getElementById("ul-list");

let arrOfValues = [];

function confirmInputIsText(val1) {
    if (val1 === "" || val1 === " ") {
        console.log("value is empty");
        return;
    }
}

function saveInput() {
    let inputVal = inputBoxElem.value.trim();

    if (inputVal === "" || inputVal === " ") {
        console.log("value is empty");
        return;
    }

    // confirmInputIsText(inputVal);
    arrOfValues.push(inputVal);
    console.log(arrOfValues);
    renderItems(arrOfValues);
}

function renderItems(arrValues) {

    let renderItems = " ";
    for (let counter = 0; counter < arrOfValues.length; counter++) {
        renderItems += `<li>${arrValues[counter]} </li>`

    }
    ulList.innerHTML = renderItems;

}

// saveInputBtnElem.addEventListener("click")


function deleteAll() {

    let arrOfValues = []; 
    ulList.innerHTML = "";
        
    
}









