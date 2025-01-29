let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100)
function checkGuess() {
    let guessedNumber = parseInt(userInput.value); 

    if (guessedNumber > randomNumber ) {
        gameResult.textContent =  "Too High! Try Again";
        gameResult.style.backgroundColor = "violet";
    }
    else if (guessedNumber < randomNumber ) {
        gameResult.textContent =  "Too Low! Try Again";
        gameResult.style.backgroundColor = "violet";
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent =  "Congratualation you own the game!";
        gameResult.style.backgroundColor = "green";
    }
    else{
        gameResult.textContent =  "Invalid input! Give Valid output";
        gameResult.style.backgroundColor = "red";
    }
 
}