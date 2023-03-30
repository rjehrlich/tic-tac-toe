//console.log('hello new project!')

const player1Input = document.querySelector('#player1-char');
//console.log(player1Input);
const player2Input = document.querySelector('#player2-char');
//console.log(player2Input);
const tableSquares = document.querySelectorAll('td');
//console.log(tableSquares);
const playerTurn = document.querySelector('#current-player');
//console.log(playerTurn);
const gameWinner = document.querySelector('#player-win');
let playerUp = 'player1';
//const tableSpaces = Array(9).fill(null)
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

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', resetGame);


tableSquares.forEach(square => square.addEventListener('click', (event) => {
    event.preventDefault();
    //square will refer to the element the event was hooked on
    let currSquare = square;
 
    if (currSquare.className === '') {
        currSquare.className = playerUp;
        if (currSquare.className === 'player1') {
            currSquare.innerText = player1Input.value
        } else {
            currSquare.innerText = player2Input.value
        }
        changePlayers();
    }
        //tableArr.push(event.target.id);
        //console.log(tableArr);
        //console.log(tableSpaces);
        //checkWinner(winCombo, tableSquares);
}));



function changePlayers() {
    if (playerUp === 'player1') {
        playerUp = 'player2';
        playerTurn.textContent = `Current Player: ${playerUp}`;
    } else {
        playerUp = 'player1';
        playerTurn.textContent = `Current Player: ${playerUp}`;
    }
    playerTurn.className = playerUp;
    
}

//add event listener for reset button to clear out all the class names for td?
function resetGame() {
    tableSquares.forEach(td => {
        td.innerText = '';
        tableSquares.className = '';
    })
    location.reload();
}

//Logic for Winning the Game: compare tableSquares to winners
    //loop through tableSquares & winners
    //if the tablesquare of the matching wincombo contains the class player1
        //player 1 is the winner
    //if the tablesquare of the matching wincombo contains the class player2
        //player 2 is the winner
function checkWinner(winCombo, tableSquares) {

    winCombo.forEach(array => {
        const player1Wins = array.every(el => tableSquares[el].firstChild.classList.contains('player1'))

        if (player1Wins) {
            gameWinner.innerText = 'Player 1 Wins!'
            return
        }
    })

    winCombo.forEach(array => {
        const player2Wins = array.every(el => tableSquares[el].firstChild.classList.contains('player2'))

        if (player2Wins) {
            gameWinner.innerText = 'Player 2 Wins!'
            return
        }
    })
}
