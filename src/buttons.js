let $startButton = document.querySelector(".start-btn");
let $stopButton = document.getElementsByClassName(".stop-btn");

let startCounter = 0;

let colorTimeout = "";
$startButton.addEventListener("click", function() {
  if (startCounter < 1) {
    countdown();
    colorTimeout = setInterval(changeColor, 100);
    addRandomCards();
    startCounter++;

    $rules.classList.toggle("hidden");
    document.querySelector("#hide-instructions").classList.toggle("hidden");

    document.querySelector(".next-btn").classList.toggle("hidden");

    $startButton.classList.toggle("hidden");

    // turn start button to stop button
    /* 
    $startButton.classList.remove("start-btn");
    $startButton.classList.add("stop-btn");
    console.log($startButton.className);

    $startButton.innerText = "STOP"; */
  }
});

// NEW GAME BUTTON ONCE GAME IS OVER

let $newGameButton = document.querySelector("#reload");

$newGameButton.addEventListener("click", function() {
  document.location.reload();
});

// NEXT BUTTON

let $nextButton = document.querySelector(".next-btn");

$nextButton.addEventListener("click", function() {
  console.log("click");
  addRandomCards();

  while ($categoriesCorrect.firstChild) {
    $categoriesCorrect.removeChild($categoriesCorrect.firstChild);
  }

  currentCategories = [];
});
