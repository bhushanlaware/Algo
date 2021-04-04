//Better than bubble
// 
const insertionSort = (arr = []) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j] && j > 0) {
      const temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([77, 2, 3, 1, 4, 2, 34, 7]));