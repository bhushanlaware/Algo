

function waterfallStreams(array, source, row = 0, quantity = 100, bucket = null) {
  console.log(row, source, quantity)
  if (bucket === null) {
    bucket = new Array(array[0].length).fill(0);
    console.log('size', bucket, array[0].length, array.length)
  }
  if (row === array.length - 1) {
    const a = bucket[source] + (quantity);
    bucket[source] = a
    console.log('here', bucket, bucket[source])

    return bucket;
  }
  if (array[row + 1][source]) {
    // Go left
    let col = source;
    while (array[row + 1][col] === 1 && array[row][col - 1] !== 1 && col >= 0) {
      col--;
    }
    if (col !== -1 && array[row][col] !== 1 && array[row + 1][col] !== 1) {
      waterfallStreams(array, col, row + 1, quantity / 2, bucket);
    }
    // Go right
    col = source;
    while (array[row + 1][col] === 1 && array[row][col + 1] !== 1 && col < array.length) {
      col++;
    }
    if (col !== array[0].length && array[row + 1][col] !== 1 && array[row][col] !== 1) {
      waterfallStreams(array, col, row + 1, quantity / 2, bucket);
    }
    return bucket;
  }
  else {
    return waterfallStreams(array, source, row + 1, quantity, bucket);
  }
}

console.log(waterfallStreams([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
], 8))