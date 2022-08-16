function findMaxRect(matrix) {
  const rectMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
  console.log(rectMatrix);


  function findSquare(i, j) {
    if (rectMatrix[i][j]) return rectMatrix[i][j];

    if (i + 1 < matrix.length &&
      j + 1 < matrix[0].length &&
      matrix[i + 1][j] === 1 &&
      matrix[i][j + 1] === 1 &&
      matrix[i + 1][j + 1] === 1) {
      const rectSize = 1 + Math.max(findSquare(i + 1, j), findSquare(i, j + 1), findSquare(i + 1, j + 1));
      rectMatrix[i][j] = rectSize;
    }
    rectMatrix[i][j] = matrix[i][j];
    return matrix[i][j];;
  }

  let maxRect = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const rectSize = 1 + findSquare(i, j);
      rectMatrix[i][j] = rectSize;
      maxRect = Math.max(maxRect, rectSize);
    }
  }
  return maxRect;
}

// console.log(findMaxRect([
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 0, 0]]));

function previousSmallerElement(arr) {
  const stack = [];
  console.log(stack.at(-1))
  const preMin = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && stack.at(-1) > arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      preMin[i] = stack.at(-1);
    } else {
      preMin[i] = -1
    }
    stack.push(arr[i]);
  }
  return preMin;
}
function nextSmallerElement(arr) {
  const stack = [];
  const nextMin = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack.at(-1) > arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      nextMin[i] = stack.at(-1);
    } else {
      nextMin[i] = -1;
    }
    stack.push(arr[i]);
  }
  return nextMin;
}
console.log(nextSmallerElement([9, 8, 5, 4, 1]))
