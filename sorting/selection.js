//? always O(n^2)
//? Better if swap operation are expensive as it take at most O(n) swaps
const selctionSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selctionSort([77, 2, 3, 1, 4, 2, 34, 7]));