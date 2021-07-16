// @ts-check
function spiralTraverse(array = []) {
  // Write your code here.
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = array.length - 1;
  let colEnd = array[0].length - 1;
  const output = [];
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      output.push(array[rowStart][i]);
    }
    for (let i = rowStart + 1; i <= rowEnd; i++) {
      output.push(array[i][colEnd]);
    }
    if (rowStart !== rowEnd)
      for (let i = colEnd - 1; i >= colStart; i--) {
        output.push(array[rowEnd][i])
      }
    if (colStart !== colEnd)
      for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
        output.push(array[i][colStart])
      }
    rowStart++;
    colStart++;
    rowEnd--;
    colEnd--;
  }
  return output;
}
const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
console.log(spiralTraverse(matrix));