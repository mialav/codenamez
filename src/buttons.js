var $startButton = document.querySelector(".start-btn");
var $stopButton = document.getElementsByClassName(".stop-btn");


let startCounter = 0;

$startButton.addEventListener("click", function() {
    if (startCounter < 1) {
    countdown(); 
    setInterval(changeColor, 100); 
    addRandomCards();
    startCounter++;

    $rules.classList.toggle("hidden");
    document.querySelector("#hide-instructions").classList.toggle("hidden");

    // turn start button to stop button
    /* 
    $startButton.classList.remove("start-btn");
    $startButton.classList.add("stop-btn");
    console.log($startButton.className);

    $startButton.innerText = "STOP"; */
    }
    
});

let $newGameButton = document.querySelector("#reload");

$newGameButton.addEventListener("click", function() {
    document.location.reload(true);
})







