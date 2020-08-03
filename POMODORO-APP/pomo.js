 var minutes = prompt("How many minute/minutes do you need before break?","0");
var seconds = "00"

var click = new Audio("click.mp3");
var bell =  new Audio("bell.mp3");

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
   click.play();

   minutes = minutes - 1;
   seconds = 59;

   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   var minutes_interval = setInterval(minutesTimer, 60000);
   var seconds_interval = setInterval(secondsTimer, 1000);

   function minutesTimer() {
       minutes = minutes - 1;
       document.getElementById("minutes").innerHTML = minutes;
   }



function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    if(seconds <= 0) {
        if(minutes <= 0){
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);

            document.getElementById("done").innerHTML = "It's break time";

            document.getElementById("done").classList.add("show_message");
            
            bell.play(); 
           
        }
        seconds = 60;   
        
    }   
  }
}