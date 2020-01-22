//set minutes
var mins = 1;

//calculate the seconds
var secs = mins * 60;

minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");

minutes.innerText = pad2(Math.floor(secs / 60));
seconds.innerText = pad2(secs - Math.round(mins * 60));

//countdown function is evoked when page is loaded
function countdown() {
  setTimeout("Decrement()", 60);
}

//Decrement function decrement the value.
function Decrement() {
  if (seconds < 59) {
    seconds.innerText = secs;
  } else {
    minutes.innerText = getminutes();
    seconds.innerText = getseconds();
  }

  if (mins < 1) {
    minutes.style.color = "red";
    seconds.style.color = "red";
  }

  if (mins < 0) {
    secs--;
    setTimeout("Decrement()", 1000);
  } else if (secs > 0) {
    secs--;
    setTimeout("Decrement()", 1000);
  } else {
    gameOver();
  }
  //   }
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
  return (number < 10 ? "0" : "") + number;
}

// once time is up
function gameOver() {
  // set timer to 0
  secs = 0;
  mins = 0;

  // show pop up div of points
  document.querySelector(".game-over").style.display = "block";
  document.querySelector("#points-at-end").innerText = totalPoints;

  // hide next button
  document.querySelector(".next-btn").classList.toggle("hidden");

  $categoryInput.classList.toggle("hidden");

  // reset cards to code
  for (let i = 0; i < $cardSlot.length; i++) {
    $cardSlot[i].innerText = initialCards[i];
  }
}
