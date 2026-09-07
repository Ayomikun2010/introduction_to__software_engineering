// DOM -> Document Object Model

// Accessing Elements
const signupElement = document.getElementById("signUp");
const submitElem = document.getElementById("submitBtn");
const newDisplay = document.getElementById("con1");

// Modify Element

signupElement.innerText = "Ayomikun City";

submitElem.addEventListener("click", displayKing);

function displayKing(event){
   event.preventDefault();
   newDisplay.innerHTML += "<h2>Ayomikun is the King in this city</h2>";
}

// submitElem.addEventListener("click", function displayThankYou(){
//    // newDisplay.value = "Welcome Home"; 

//    newDisplay.innerHTML = "<h2>Ayomikun is the King in this city</h2>";
// //    newDisplay.innerText = "Welcome Home"
   
//    // innerHTML("<h2> Ayomikun Is the King in this City and Thank you everyone for accepting.</h2>")
// });

// function displayThankYou(){
//    let newDisplay = document.getElementById("con1");

//    newDisplay.innerText = "Welcome Home"
   
//    // innerHTML("<h2> Ayomikun Is the King in this City and Thank you everyone for accepting.</h2>")
// }