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


const board = document.getElementById("game-container")

for (x = 0; x < gameBoard.length; x++) {
  const row = document.createElement("div")
  row.classList.add("row")
  board.appendChild(row)
  for (y = 0; y < 3; y++) {
    const cell = document.createElement('div')
    cell.classList.add(`cell`)
    row.appendChild(cell)
    cell.addEventListener('click', () => {
    })
    const allCell = document.querySelectorAll(".cell")
    allCell.forEach(() => {

    })
  }
}



function updateBoard(cell) {

}
