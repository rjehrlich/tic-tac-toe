//console.log('hello new project!')

const player1Input = document.querySelector('#player1-char');
//console.log(player1Input);
const player2Input = document.querySelector('#player2-char');
//console.log(player2Input);
const tableSquares = document.querySelectorAll('td');
//console.log(tableSquares);
const playerTurn = document.querySelector('#current-player')
console.log(playerTurn);
let playerUp = 'Player 1';

tableSquares.forEach(el => el.addEventListener('click', (event) => {
    event.preventDefault();
    //el will refer to the element the event was hooked on
    let currSquare = el;
    console.log(el);
    if (currSquare.className === "") {
        currSquare.className = playerUp;
        changePlayers();
    }
}));

function changePlayers() {
    if (playerUp === 'Player 1') {
        playerUp = 'Player 2';
        playerTurn.textContent = `Current Player is: ${playerUp}`;
    } else {
        playerUp = 'Player 1';
        playerTurn.textContent = `Current Player is: ${playerUp}`;
    }
    playerTurn.className = playerUp;
}