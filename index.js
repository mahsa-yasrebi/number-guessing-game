
const randomNumber = Math.ceil(Math.random() * 100);
let numberGuess = 0;

console.log(randomNumber);

const validateNumber = (value) => {
  if (value.trim() === "" || isNaN(value)) {
    return "Please enter a valid number";
  } else if (Number(value) < 1 || Number(value) > 100) {
    return "Please enter a number between 1 and 100";
  }

  return true;
};

const checkGuess = (guess) => {
  numberGuess++;

  if (guess === randomNumber) {
    console.log("Your guess is correct!");
    console.log(`You guessed it in ${numberGuess} attempts.`);
    return true;
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }

  return false;
};

const play = () => {
  if (numberGuess >= 10) {
    console.log("Game Over! You've used all 10 attempts.");
    console.log(`The correct number was ${randomNumber}.`);
    return;
  }

  const number = prompt("Enter a number between 1 and 100:");

  if (number === null) {
    console.log("Game cancelled!");
    return;
  }

  const validation = validateNumber(number);

  if (validation !== true) {
    console.log(validation);
    return play();
  }

  const guess = Number(number);
  const isCorrect = checkGuess(guess);

  if (isCorrect) {
    return;
  }

  if (numberGuess >= 10) {
    console.log("Game Over! You've used all 10 attempts.");
    console.log(`The correct number was ${randomNumber}.`);
    return;
  }

  play();
};

play();
