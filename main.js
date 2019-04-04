//global variables
var timeStart;
var counterStart = 0;
var paused = false;



//catching the buttons from html page
var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var recordBtn = document.getElementById("record");

//executing the functions
// actionKey();
startStopTime();
recordTime();
resetTime();


function startStopTime() {
  startBtn.addEventListener("click", function() {
  if(paused == false) {
      startTimer();
      paused = true;
    } 

    else {
      stopTimer();
      paused = false;
    }
  });
}


function recordTime() {
   //create li from the timer text
    recordBtn.addEventListener("click", function() {
    //catch the timer value
    var timer = document.getElementById("timer");
    //create li tag
    var liTag = document.createElement("li");
    //catch value of timer in li tag
    liTag.innerHTML = timer.textContent;
    //catch the ul
    var ulTag = document.getElementById("pasttimes");
    //append li to ul
    ulTag.appendChild(liTag);
  });
}


   
function resetTime() {
  resetBtn.addEventListener("click", function() {
    //stop the timer first
    counterStart = 0;
    //catch the timer value
    var timer = document.getElementById("timer");
    //catch the ul tag
    var ulList = document.getElementById("pasttimes");
    //set the timer back to 0 and remove LIs
    timer.innerHTML = 0;
    stopTimer();
    ulList.innerHTML = "";
  });
}



//start timer function
function startTimer() {
    timeStart = setInterval(function() {
      counterStart++;
      document.getElementById("timer").innerHTML = counterStart / 100;
    }, 10);
}

//stop timer function
function stopTimer() {
  clearInterval(timeStart);
}




// document.addEventListener("keypress", function(event) {
//   var key = event.key;
//   console.log(key);
  
//   if (key == 's' && paused == false) {
//     startTimer();
//   } 
//   else if (key == 's' && paused == true) {
//     stopTimer();
//   }
// });
