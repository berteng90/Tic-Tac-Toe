const NOUGHT = 'O';
const CROSS = 'X';
const EMPTY = '';

let currentPlayer = CROSS;

const ticTacToeBoard = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY]

];

function insertAt(row, col) {
  if (ticTacToeBoard[row][col] === EMPTY) {
    ticTacToeBoard[row][col] = currentPlayer;

    // Switch to the other player.
    currentPlayer = currentPlayer === NOUGHT ? CROSS : NOUGHT;
  }
}


const gameContainer = document.getElementById('game-container');
console.log(ticTacToeBoard.length)

for (let row = 0; row < ticTacToeBoard.length; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('row');

  for (let col = 0; col < ticTacToeBoard[row].length; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    // Add an event listener to the cell that calls the insertAt() function
    // when the cell is clicked.
    cell.addEventListener('click', () => {
      insertAt(row, col);
      renderBoard();
    });

    rowContainer.appendChild(cell);
  }

  gameContainer.appendChild(rowContainer);
}

function renderBoard() {
  for (let row = 0; row < ticTacToeBoard.length; row++) {
    for (let col = 0; col < ticTacToeBoard[row].length; col++) {
      const cell = document.querySelector(`#game-container .row:nth-child(${row + 1}) .cell:nth-child(${col + 1})`);
      cell.textContent = ticTacToeBoard[row][col];
    }
  }
}

// Call the renderBoard() function initially to render the empty board to the screen.
renderBoard();
