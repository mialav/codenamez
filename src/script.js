// RANDOM COLORS //

let colors = ["#4EFFEF", "#73A6AD", "#9B97B2", "#D8A7CA", "#C7B8EA"];

// Generate a random color from color palette
function generateRandomColor() {
  return colors[Math.floor(Math.random() * (colors.length - 1))];
}

function changeColor() {
  let letters = document.querySelector("h1");
  let letter = letters.innerText;
  let split = letter.split("");
  let colorLetter = split.map(el => {
    let color = generateRandomColor();
    return `<span style='color: ${color}'>${el}</span>`;
  });
  let join = colorLetter.join("");
  // console.log(join);
  letters.innerHTML = join;
}

// SHOW/HIDE INSTRUCTIONS //
let $instructions = document.querySelector(".instructions");
console.log($instructions);
let $rules = document.querySelector(".rules");

$instructions.onclick = function() {
  //
  $rules.classList.toggle("hidden");
};

// RANDOM CARDS //

// card slots in game board
let $cardSlot = document.getElementsByClassName("word");

// empty array for randomized cards in play
let currentCards = [];

// choose a random card

function generateRandomCard() {
  return words[Math.floor(Math.random() * (words.length - 1))];
}

function addRandomCards() {
  while (currentCards.length <= $cardSlot.length) {
    let card = generateRandomCard();

    // make sure the generated cards are unique
    if (currentCards.indexOf(card) === -1) {
      currentCards.push(card);
    }
  }

  for (let i = 0; i < $cardSlot.length; i++) {
    $cardSlot[i].innerText = currentCards[i].word;
  }
}

// GUESS CATEGORIES //

let $points = document.getElementById("point-amount");
let $categoryInput = document.querySelector(".category-input");
let $categoriesCorrect = document.getElementById("categories-correct");

let totalPoints = 0;

$categoryInput.addEventListener("submit", guessCategory);

function guessCategory(e) {
  e.preventDefault();

  let newGuess = document.getElementById("guess").value.toLowerCase();

  let correctCategory = document.createElement("li");

  let categoryCounter = 0;

  for (let i = 0; i < currentCards.length; i++) {
    if (currentCards[i].categories.indexOf(newGuess) != -1) {
      categoryCounter++;
    }
  }

  if (categoryCounter > 1) {
    correctCategory.appendChild(
      document.createTextNode(newGuess + " / " + categoryCounter + " points")
    );

    $categoriesCorrect.appendChild(correctCategory);

    totalPoints += categoryCounter;

    $categoryInput.reset();
  }

  $points.innerText = totalPoints;
}
