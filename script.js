//game starting variables
const player1Input = document.querySelector('#player1-char');
const player2Input = document.querySelector('#player2-char');
const tableSquares = document.querySelectorAll('td');
const playerTurn = document.querySelector('#current-player');
const gameWinner = document.querySelector('#player-win');
let playerUp = 'Player1';
playerTurn.textContent = `${playerUp}`
const resetBtn = document.querySelector('#reset-game');

//event listener for each square in the table to run the game functions
tableSquares.forEach(square => square.addEventListener('click', (event) => {
    event.preventDefault();
    //square will refer to the element the event was hooked on
    let currSquare = square;

    //check if square has empty class before marking square
        //If not, then add the starting player's (p1) character to the board square
        //if player up is p2 click even will add their input
    if (currSquare.className === '') {
        markSquare(currSquare, player1Input.value);
    } else {
      return;
    }
    if (playerUp === 'Player2') {
        markSquare(currSquare, player2Input.value);
    }
    changePlayers();
    checkWinner(tableSquares);
}));



function changePlayers() {
    playerUp = playerUp === 'Player1' ? 'Player2' : 'Player1';
    playerTurn.textContent = `${playerUp}`;
}

function markSquare(square, playerInput) {
    square.classList.add(`${playerUp}`);
    square.innerText = playerInput;
  }
  

//Logic for Winning the Game: compare tableSquares to winners
    //loop through wincombos array of arrays
    //if the tablesquare of the matching wincombo contains the same class
        //that player of specific class is the winner
        //update the game result to reflect winner
function checkWinner(tableSquares) {
    const winCombo = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diag top left to bottom right
        [2, 4, 6], // diag top right to bottom left
    ];
  
    for (let i = 0; i < winCombo.length; i++) {
      const combo = winCombo[i];
      const square1 = tableSquares[combo[0]];
      const square2 = tableSquares[combo[1]];
      const square3 = tableSquares[combo[2]];
  
      if (square1.className && square1.className === square2.className && square1.className === square3.className) {
        gameWinner.innerText = `${square1.className.split(' ')[0]} Wins!`;
        square1.classList.add('winning-square');
        square2.classList.add('winning-square');
        square3.classList.add('winning-square');
        confetti({
          particleCount: 150
        });
        return;
      }
    }
    checkDraw(tableSquares);
  }

//function to determine if there is no winner in the game (draw)  
function checkDraw(tableSquares) {
  // Check if all squares are marked
    //array from the table of squares
      //every square/el in array have no class
  const allSquaresMarked = Array.from(tableSquares).every(square => square.classList.length > 0);

  // If all squares are marked and no winner is found
    //then a draw
  if (allSquaresMarked && gameWinner.innerText === '') {
    gameWinner.innerText = 'Draw!';
    return true;
  }

  return false;
}  
  
//event listener for reset button to clear out all the class names for td
    //clear out all updated text that was dependent on game winner
//separate function for resetting the game    
resetBtn.addEventListener('click', resetGame);

function resetGame() {
    tableSquares.forEach(square => {
      square.classList.remove('Player1', 'Player2', 'winning-square');
      square.innerText = '';
    });
    player1Input.value = "X";
    player2Input.value = "0";
    playerUp = 'Player1';
    playerTurn.textContent = `${playerUp}`;
    gameWinner.innerText = '';
  }

