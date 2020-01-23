//set minutes
let mins = 2;

//calculate the seconds
let secs = mins * 60;

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

// END OF THE GAME

function gameOver() {
  // set timer to 0
  secs = 0;
  mins = 0;

  // show pop up div of points
  document.querySelector(".game-over").style.display = "block";
  document.querySelector("#points-at-end").innerText = totalPoints;

  // set highscore
  if (localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", "0");
  }

  let highScore = parseInt(localStorage.getItem("highscore"));

  if (totalPoints > highScore) {
    console.log("Highscore if", highScore, totalPoints);
    localStorage.setItem("highscore", totalPoints.toString());
  }

  // show highscore

  document.querySelector("#high-score").innerText = localStorage.getItem(
    "highscore"
  );

  // hide next button
  document.querySelector(".next-btn").classList.toggle("hidden");

  $categoryInput.classList.toggle("hidden");

  // reset cards to code
  for (let i = 0; i < $cardSlot.length; i++) {
    $cardSlot[i].innerText = initialCards[i];
  }

  // stop title colors from changing
  clearTimeout(colorTimeout);

  // randomize gif at end

  function randomGif() {
    let randomNumber = Math.floor(Math.random() * 12);

    return "images/win-" + randomNumber + ".gif";
  }

  if (totalPoints > 10) {
    document.querySelector(".final-gif").innerHTML =
      '<img src="' + randomGif() + '" width="100px">';
  } else {
    document.querySelector(".final-gif").innerHTML =
      '<img src="images/fail.gif" width="100px">';
  }
}
