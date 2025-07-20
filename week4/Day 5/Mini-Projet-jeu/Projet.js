const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

let board = ["", "", "", "", "", "", "", "", ""];
let playerSymbol = "";
let computerSymbol = "";
let currentPlayer = "";
let gameOver = false;

const boardDiv = document.getElementById("board");
const overlay = document.getElementById("overlay");
const resultText = document.getElementById("resultText");

function chooseSymbol(symbol) {
  playerSymbol = symbol;
  computerSymbol = symbol === "X" ? "O" : "X";
  currentPlayer = playerSymbol;
  document.getElementById("symbol-choice").style.display = "none";
  startGame();
  
}

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  overlay.classList.add("hidden");
  boardDiv.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    cell.addEventListener("click", () => {
      if (currentPlayer === playerSymbol) makeMove(i);
    });
    boardDiv.appendChild(cell);
  }
  
}

function makeMove(index) {
  if (gameOver || board[index] !== "") return;

  board[index] = currentPlayer;
  document.getElementById(`cell-${index}`).textContent = currentPlayer;

  if (checkWinner(currentPlayer)) {
    endGame(currentPlayer === playerSymbol ? "You win!" : "You lose!");
    return;
  }

  if (board.every(cell => cell !== "")) {
    endGame("Draw!");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (!gameOver && currentPlayer === computerSymbol) {
    setTimeout(computerMove, 500);
  }
}

function computerMove() {
  const emptyIndices = board.map((val, idx) => val === "" ? idx : null).filter(idx => idx !== null);
  if (emptyIndices.length === 0) return;
  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  makeMove(randomIndex);
}

function checkWinner(symbol) {
  return winningCombos.some(combo =>
    combo.every(index => board[index] === symbol)
  );
}

function endGame(message) {
  gameOver = true;
  resultText.textContent = message;
  overlay.classList.remove("hidden");
}

function restartGame() {
  chooseSymbol(playerSymbol);
}
