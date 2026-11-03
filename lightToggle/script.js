const toggleElem = document.getElementById("toggle");
const bulbContainerElem = document.getElementById("bulbContainer");
const offBulbElem = document.getElementById("Off bulb");
const onBulbElem = document.getElementById("On bulb");

let offBulb = true;
toggleElem.addEventListener("click", function(){
    if(offBulb===false){
        offBulbElem.hidden = false;
        onBulbElem.hidden = true;
        toggleElem.textContent = "Turn on"
          // offBulb = true;
         offBulb = true;
    } else {
        offBulbElem.hidden = true;
        onBulbElem.hidden = false;
         toggleElem.textContent = "Turn off"
          offBulb = false;
            // offBulb = true;
    }   
    
    // let onbulb = true;
    // if(onbulb===true){
    //     offBulbElem.hidden = true;
    //     onBulbElem.hidden = false;
    //     // offBulb = true;
    // }
})