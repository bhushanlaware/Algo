//? Time =O(n^2)
//? Best Time =O(n)
//? Space =O(1)

const bubbleSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    let isSwaped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwaped = true;
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (!isSwaped) break;
  }
  return arr;
}

console.log(bubbleSort([77, 2, 3, 1, 4, 2, 34, 7]))