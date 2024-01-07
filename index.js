

let seconds = 0;
let minutes = 0;
let hours = 0;

let displayTime = document.getElementById("display-time")

let timer = null;


var startButton = document.getElementById("start-button");

var stopButton = document.getElementById("stop-button");

var resetButton = document.getElementById("reset-button");

function start () {
     seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        
    }
    let h = hours < 10 ? "0" + hours :hours;
    let m = minutes < 10 ? "0" + minutes :minutes;
    let s = seconds < 10 ? "0" + seconds :seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}



startButton.addEventListener("click", function () {


    if (timer !== null) {
        clearInterval(timer);
    }
   timer = setInterval(start, 1000);

})
stopButton.addEventListener("click", function () {
    clearInterval(timer);
})
resetButton.addEventListener("click", function () {
    clearInterval(timer);
    hours = 0;
   minutes = 0;
   seconds = 0;
    displayTime.innerHTML =  "00:00:00";


})



