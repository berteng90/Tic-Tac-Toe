//Factory function for creating player details
function createPlayer(name) {
  return {
    name: name,
    marker: "X",
  }
}

// function createAIPlayer(difficulty) {
//   return {
//     difficulty: difficulty,
//     marker: "O",
//   }
// }


const player = createPlayer('Eng', 'X')
const EMPTY = ""
const gameBoard = [[EMPTY, EMPTY, EMPTY],
[EMPTY, EMPTY, EMPTY],
[EMPTY, EMPTY, EMPTY]]

const winningCombinations = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 9]]

const board = document.getElementById("game-container")

for (x = 0; x < gameBoard.length; x++) {
  const row = document.createElement("div")
  row.classList.add("row")
  board.appendChild(row)
  for (y = 0; y < 3; y++) {
    const cell = document.createElement('div')
    cell.classList.add(`cell`)
    cell.setAttribute('x-loc', x)
    cell.setAttribute('y-loc', y)
    row.appendChild(cell)
    cell.addEventListener('click', () => {
      let x = cell.getAttribute('x-loc')
      let y = cell.getAttribute('y-loc')
      if (!cell.textContent === EMPTY) {

      } else {
        console.log(player.marker)
        cell.textContent = player.marker
      }
      updateBoard(x, y);
    })

  }
}



function updateBoard(x, y) {
  gameBoard[x][y] = 'X'
  let foundEmptyCell = true
  do {
    const randomX = Math.floor(Math.random() * 3)
    const randomY = Math.floor(Math.random() * 3)
    if (gameBoard[randomX][randomY] === EMPTY) {
      gameBoard[randomX][randomY] = 'O'
      const cell = document.querySelector(`[x-loc="${randomX}"][y-loc="${randomY}"]`);
      cell.textContent = 'O'
      foundEmptyCell = true
    } else {
      foundEmptyCell = false
    }
    console.log(gameBoard)
  }
  while (foundEmptyCell = false)

}
