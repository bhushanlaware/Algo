function solveSudoku(board) {
  const row = [...Array(9)].map(() => Array(9).fill(0));
  const col = [...Array(9)].map(() => Array(9).fill(0));
  const box = [...Array(9)].map(() => Array(9).fill(0));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        const boxIndex = (i / 3 | 0) * 3 + (j / 3 | 0);
        row[i][num - 1] = 1;
        col[j][num - 1] = 1;
        box[boxIndex][num - 1] = 1;
      }
    }
  }
  function dfs(board, row, col, box, i, j) {
    if (i === 9) return true;
    if (j === 9) return dfs(board, row, col, box, i + 1, 0);
    if (board[i][j] !== ".") return dfs(board, row, col, box, i, j + 1);
    for (let num = 1; num <= 9; num++) {
      if (
        row[i][num - 1] + col[j][num - 1] + box[(i / 3 | 0) * 3 + (j / 3 | 0)][num - 1] ===
        0
      ) {
        board[i][j] = num;
        row[i][num - 1] = 1;
        col[j][num - 1] = 1;
        box[(i / 3 | 0) * 3 + (j / 3 | 0)][num - 1] = 1;
        if (dfs(board, row, col, box, i, j + 1)) return true;
        board[i][j] = ".";
        row[i][num - 1] = 0;
        col[j][num - 1] = 0;
        box[(i / 3 | 0) * 3 + (j / 3
          | 0)][num - 1] = 0;
      }
    }
    return false;
  }
  dfs(board, row, col, box, 0, 0);
  return board
}

const a = solveSudoku([
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7]
]);
console.log(a)
// Do not edit the line below.
exports.solveSudoku = solveSudoku;

