const boardSize = 10;
const mineCount = 20;
let board = [];

function board() {
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({ isMine: false, revealed: false });
    }
    board.push(row);
  }
}

function minesLocation() {
  for (let i = 0; i < mineCount; i++) {
    let x, y;
    do {} while ();
  }
}

function nearbyMines(x, y) {
    let count = 0;
  // Iterando sobre cuadrados(celdas o cajas) vecinos
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newX = x + i;
      const newY = y + j;
      // Chekiando si está en los límites del tablero
      if (newX >= 0 && newX < boardSize && newY >= 0 && newY < boardSize) {
        // Chekiando si algún cuadrado vecino tiene una mina 
        if (board[newX][newY].isMine) {
          count++;
        }
      }
    }
  }

  return count;
}

function revealing(x, y) {
   if () {
      
    }

    if () {
      // Game over bro 💀
      revealingAll();
      showAlert('Game Over!', 'error');
    } else {
    }

    // Chekiando si el usuario/cliente ganó
    if (checking()) {
      showAlert('You Win!', 'success');
    }

    rendering();
}

function revealingAll() {
      for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
      }
    }
}

function checking() {
 for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if () {
        }
      }
    }
}

function rendering() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = '';

  for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        
      }
    }
}

function showAlert(message, icon) {
  Swal.fire({
    title: message,
    icon: icon,
    confirmButtonText: "OK",
  });
}

function starting() {
  board();
  minesLocation();
  rendering();
}

starting();
