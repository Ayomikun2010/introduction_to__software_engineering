const bulbContainerElem = document.getElementById("bulbContainer");
const offBulbElem = document.getElementById("Off bulb");
const onBulbElem = document.getElementById("On bulb");
const toggleElem = document.getElementById("toggle");

let isOn = false;
toggleElem.addEventListener("click", function(){
      if(isOn===true){
        offBulbElem.hidden = false;
        onBulbElem.hidden = true;
       
    } else {
        offBulbElem.hidden = true;
        onBulbElem.hidden = false;
        toggleElem.textContent = "Turn off";
       
    }

    // if(isOn===true){
    //     offBulbElem.hidden = true;
    //     onBulbElem.hidden = false;
    //     toggleElem.textContent = "Turn off";
    // } else {
    //     offBulbElem.hidden = false;
    //     onBulbElem.hidden = true;
    //     toggleElem.textContent = "Turn on";
    // }
})




