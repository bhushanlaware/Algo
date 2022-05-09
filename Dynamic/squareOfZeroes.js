function squareOfZeroes(matrix) {
  // Write your code here.
  const colN = matrix.length;
  const rowN = matrix[0].length;
  const table = new Array(colN).fill(0).map(() => new Array(rowN).fill(0));

  for (let i = colN - 1; i >= 0; i--) {
    for (let j = rowN - 1; j >= 0; j--) {

      if (matrix[i][j]) {
        table[i][j] = [0, 0]

      }
      else {
        const nextCol = i + 1 < colN ? table[i + 1][j][0] + 1 : 1;
        const nextRow = j + 1 < rowN ? table[i][j + 1][1] + 1 : 1;
        table[i][j] = [nextCol, nextRow]

      }
      const tC = table[i][j][0];
      const tR = table[i][j][1];

      if (tC > 1 && tC === tR) {
        if (table[i + tC - 1][j][1] === tC && table[i][j + tR - 1][0] === tC) {
          return true;
        }
      }
    }
  }

  console.log(table);

  return false;
}
