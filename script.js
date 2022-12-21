//Factory function for creating player details
function createPlayer(name) {
  return {
    name: name,
    marker: "X",
  }
}


const player = createPlayer('Eng', 'X')
const EMPTY = ""
let playerMoves = []
let AIMoves = []
const gameBoard = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY]
]

const winningCombinations = [
  ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'],
  ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['7', '5', '9']
]

const board = document.getElementById("game-container")

for (x = 0; x < gameBoard.length; x++) {
  let cellNo = 0
  const row = document.createElement("div")
  row.classList.add("row")
  board.appendChild(row)
  if (x === 0) {
    cellNo = 1
  } else if (x === 1) {
    cellNo = 4
  } else {
    cellNo = 7
  }
  for (y = 0; y < 3; y++) {
    const cell = document.createElement('div')
    cell.classList.add(`cell`)
    cell.setAttribute('x-loc', x)
    cell.setAttribute('y-loc', y)
    cell.setAttribute('cell-id', cellNo)
    cellNo++;
    row.appendChild(cell)
    cell.addEventListener('click', () => {

      if (cell.textContent === EMPTY) {
        let xcol = cell.getAttribute('x-loc')
        let yrow = cell.getAttribute('y-loc')
        let z = cell.getAttribute('cell-id')
        cell.textContent = player.marker
        updateBoard(xcol, yrow, z);
      } else {
      }

    })

  }
}



function updateBoard(x, y, z) {
  gameBoard[x][y] = 'X'
  playerMoves.push(z)
  checkForWinner(playerMoves)
  let foundEmptyCell = false
  do {
    let randomX = Math.floor(Math.random() * 3)
    let randomY = Math.floor(Math.random() * 3)
    if (gameBoard[randomX][randomY] === EMPTY) {
      gameBoard[randomX][randomY] = 'O'
      const cell = document.querySelector(`[x-loc="${randomX}"][y-loc="${randomY}"]`);
      cell.textContent = 'O'
      let z = cell.getAttribute('cell-id')
      AIMoves.push(z)
      checkForWinner(AIMoves);
      foundEmptyCell = true

    } else {

    }
  }
  while (foundEmptyCell === false)

}



function checkForWinner(Moves) {
  let winCon = []
  for (i = 0; i < winningCombinations.length; i++) {
    for (z = 0; z < winningCombinations[i].length; z++) {
      if (Moves.includes(winningCombinations[i][z])) {
        winCon.push(winningCombinations[i][z])

        z++;
        if (Moves.includes(winningCombinations[i][z])) {
          winCon.push(winningCombinations[i][z])
          z++;
          if (Moves.includes(winningCombinations[i][z])) {
            winCon.push(winningCombinations[i][z])

          } else {
            winCon = []
            break;
          }
        } else {
          winCon = []
          break;
        }
      } else {
        winCon = []
        break;
      }
    }
  }
}

