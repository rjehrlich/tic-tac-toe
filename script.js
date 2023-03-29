//console.log('hello new project!')

const player1Input = document.querySelector('#player1-char');
//console.log(player1Input);
const player2Input = document.querySelector('#player2-char');
//console.log(player2Input);
const tableSquares = document.querySelectorAll('td');
//console.log(tableSquares);
const playerTurn = document.querySelector('#current-player');
//console.log(playerTurn);
let playerUp = 'player1';
const tableArr = []

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', resetGame);


tableSquares.forEach(el => el.addEventListener('click', (event) => {
    event.preventDefault();
    //el will refer to the element the event was hooked on
    let currSquare = el;
    //console.log(el);
    if (currSquare.className === '') {
        currSquare.className = playerUp;
        if (currSquare.className === 'player1') {
            currSquare.innerText = player1Input.value
        } else {
            currSquare.innerText = player2Input.value
        }
        changePlayers();
    }
        tableArr.push(currSquare.innerText)
        console.log(tableArr);
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

//Logic for Winning the Game
function checkWinner(currSquare) {

}
