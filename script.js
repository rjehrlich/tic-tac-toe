const player1Input = document.querySelector('#player1-char');
//console.log(player1Input);
const player2Input = document.querySelector('#player2-char');
//console.log(player2Input);
const tableSquares = document.querySelectorAll('td');
//console.log(tableSquares);
const playerTurn = document.querySelector('#current-player');
//console.log(playerTurn);
const gameWinner = document.querySelector('#player-win');
let playerUp = 'Player1';
playerTurn.textContent = `Player Up: ${playerUp}`
const resetBtn = document.querySelector('#reset-game');


tableSquares.forEach(square => square.addEventListener('click', (event) => {
    event.preventDefault();
    //square will refer to the element the event was hooked on
    let currSquare = square;

    //check if square has empty class & no text content before marking square
        //If either not met
            //the click event will not add new content to the square
    if (currSquare.className === '') {
        currSquare.classList.add(`${playerUp}`);
        currSquare.innerText = player1Input.value;
    }
    if (playerUp === 'Player2') {
        currSquare.classList.add(`${playerUp}`);
        currSquare.innerText = player2Input.value;
    }
    changePlayers();
    checkWinner(tableSquares);
}));



function changePlayers() {
    if (playerUp === 'Player1') {
        playerUp = 'Player2';
        playerTurn.textContent = `Player Up: ${playerUp}`;
    } else {
        playerUp = 'Player1';
        playerTurn.textContent = `Player Up: ${playerUp}`;
    }

    checkWinner(tableSquares);
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
        return;
      }
    }
  }
  
//add event listener for reset button to clear out all the class names for td
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
    playerTurn.textContent = `Player Up: ${playerUp}`;
    gameWinner.innerText = '';
  }