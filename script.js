let colors = ["#4EFFEF", "#73A6AD", "#9B97B2", "#D8A7CA", "#C7B8EA"];

// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  return colors[Math.floor(Math.random() * (colors.length - 1))];

  // return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function changeColor() {
  let letters = document.querySelector("h1");
  let miaTest = letters.innerText;
  let split = miaTest.split("");
  let colorLetter = split.map(el => {
    let color = generateRandomColor();
    return `<span style='color: ${color}'>${el}</span>`;
  });
  let join = colorLetter.join("");
  console.log(join);
  //   letters.style.color = generateRandomColor();
  letters.innerHTML = join;
}

setInterval(changeColor, 100);
// console.log(letters[0]);
//   let miaTest = letters.innerHTML;
//   let split = miaTest.split("");
//   //   console.log(split);
//   let mapped = split.map(function(letter) {
//     let color = generateRandomColor();
//     return `<span style="color: ${color}">${letter}</span>`;
//   });
//   console.log(mapped.join(""));
