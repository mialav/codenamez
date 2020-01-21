//set minutes
var mins = 2;

//calculate the seconds
var secs = mins * 60;

//countdown function is evoked when page is loaded
function countdown() {
  setTimeout("Decrement()", 60);
}

//Decrement function decrement the value.
function Decrement() {
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");

    //if less than a minute remaining
    //Display only seconds value.
    if (seconds < 59) {
      seconds.innerText = secs;
    }

    //Display both minutes and seconds
    //getminutes and getseconds is used to
    //get minutes and seconds
    else {
      minutes.innerText = getminutes();
      seconds.innerText = getseconds();
    }
    //when less than a minute remaining
    //colour of the minutes and seconds
    //changes to red
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
    }
    //if seconds becomes zero,
    //then page alert time up
    if (mins < 0) {
    //   alert("time up");
    //   minutes.value = 0;
    //   seconds.value = 0;
    // clearTimeout();
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout("Decrement()", 100);
    }
  }
}

function getminutes() {
  //minutes is seconds divided by 60, rounded down
  mins = pad2(Math.floor(secs / 60));
  return mins;
}

function getseconds() {
  //take minutes remaining (as seconds) away
  //from total seconds remaining
  return pad2(secs - Math.round(mins * 60));
}

function pad2(number) {
   
    return (number < 10 ? '0' : '') + number;
  
}
