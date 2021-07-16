// @ts-check
function longestPeak(array = []) {
  // Write your code here.
  const peaks = [];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      peaks.push(i);
    }
  }
  let maxPeak = 0;
  peaks.forEach(peak => {
    let i = peak-1;
    let j = peak+1;
    let currentPeak = 3;
    while (i > 0 && array[i - 1] < array[i]) {
      i--;
      currentPeak++;
    }
    while (j < array.length && array[j] > array[j + 1]) {
      j++;
      currentPeak++;
    }
    if (currentPeak > maxPeak) {
      maxPeak = currentPeak;
    }
  })
return maxPeak;
}
const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(array));