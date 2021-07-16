function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0])
  let prev = array[0];
  // console.log(array);
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    if (prev[1] >= array[i][0]) {
      prev = [prev[0], Math.max(prev[1], array[i][1])];
    }
    else {
      newArr.push(prev);
      prev = array[i];
    }
  }
  newArr.push(prev);
  return newArr;
}
console.log(mergeOverlappingIntervals([
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10]
]));