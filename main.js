function checkGuess() {
  let guessBox = document.getElementById("guessBox");
  let userGuess = guessBox.value;
  console.log("The user guessed " + userGuess);
  guessBox.value = "";
  if(userGuess  < randomNumber) {
    console.log("TOO LOW");
  }
  if(userGuess > randomNumber) {
    console.log("TOO HIGH");
  }
  if(userGuess == randomNumber) {
    console.log("You are a winner!");
  }
}
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = getRandomNumber();
let guessBtn = document.getElementById("guessButton");
guessBtn.addEventListener("click", checkGuess);