// Rock , Paper , Scissors


let userInput;

//DOM
const point = document.getElementById('player-score');
const result = document.getElementById('result');
const endGame = document.getElementById('endGameButton');
const conditions = document.querySelectorAll('.rpsButton');

conditions.forEach((condition) => {
  condition.onclick = () => {
    console.log('clicked');
    userInput = condition.value;
    randomComputerCondition();
    compareResult();
  };
});


// get random condition from computer
let computerInput;
let randomComputerCondition = () => {
  let computerData = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.floor(Math.random() * computerData.length);
  computerInput = computerData[randomNumber];
};

// compare
let compareResult = () => {
  let score = 0;
  let innerHTML = (situation) => {
    return `<h1> ${situation} </h1>
                <p> ${userInput} vs ${computerInput}</p>`;
  };

  if (userInput == computerInput) {
    result.innerHTML = innerHTML('Draw');
    point.innerText = score;
  } else if (userInput == 'Rock' && computerInput == 'Scissors') {
    result.innerHTML = innerHTML('You Win');
    score = score + 1;
    point.innerText = score;
  } else if (userInput == 'Paper' && computerInput == 'Rock') {
    result.innerHTML = innerHTML('You Win');
    score = score + 1;
    point.innerText = score;
  } else if (userInput == 'Scissors' && computerInput == 'Paper') {
    result.innerHTML = innerHTML('You Win');
    score = score + 1;
    point.innerText = score;
  } else {
    result.innerHTML = innerHTML('You Lose');
    score = score - 1;
    point.innerText = score;
  }
};

//Reset Game
let resetGame = () => {
  score=0;
  result.innerHTML = ``;
  point.innerText = score;
};
endGame.onclick = () => {
  resetGame();
};