function board() {
  return [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
  ];
}

function rendering(board) {
  const table = document.getElementById("sudoku-board");
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("td");
      const value = board[i][j];

      if (value !== "") {
      } else {
      }
    }
  }
}

function handling(event) {}

function starting() {
  const sudokuGame = board();
  rendering(sudokuGame);
}
