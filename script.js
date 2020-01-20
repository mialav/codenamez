let colors = ["#4EFFEF", "#73A6AD", "#9B97B2", "#D8A7CA", "#C7B8EA"];

// Generates a random color from color palette
function generateRandomColor() {
  return colors[Math.floor(Math.random() * (colors.length - 1))];

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
  letters.innerHTML = join;
}

setInterval(changeColor, 100);
