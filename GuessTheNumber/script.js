

let a = Math.floor(Math.random() * 100) + 1;
let score = 100;
let chance = 100;
let timer;
let timerDisplay = document.getElementById('timer');
let isFirstGuess = true;

const inputBox = document.getElementById('input-box');
const outputText = document.getElementById('outputtext');
const submitButton = document.querySelector('.submit-button');

function updateTimer() {
    timerDisplay.textContent = score;
    if (score === 0) {
        clearInterval(timer);
        outputText.textContent = "Time's up! You didn't guess the correct number.";
        submitButton.disabled = true;
    }
}

function checkGuess() {
    outputText.textContent = "";

    if (isFirstGuess) {
        // Start the timer only on the first guess
        timer = setInterval(function () {
            score--;
            updateTimer();
        }, 1000);

        isFirstGuess = false;
    }

    let input = inputBox.value;
    input = Number.parseInt(input);

    if (isNaN(input)) {
        outputText.textContent = "Enter a valid number";
        return;
    }

   
    if(input != a){
        chance = chance-1;
    }
    if (input === a) {
        clearInterval(timer);
        outputText.textContent = "Congratulations! You guessed the correct number. You guessed the number in " + (100 - chance) + " chances.";
        submitButton.disabled = true;
    } else if (input > a && input < 100) {
        outputText.textContent = "Your number is greater than the actual number";
    } else if (input < a && input > 0) {
        outputText.textContent = "Your number is smaller than the actual number";
    } else {
        outputText.textContent = "Enter a number between 1 and 100";
    }
    updateTimer();
}

submitButton.addEventListener('click', checkGuess);


