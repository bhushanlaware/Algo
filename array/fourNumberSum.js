function fourNumberSum(array, targetSum) {
  // Write your code here.
  array = array.map(Number);

  let sumMap = new Map();
  let subset = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        sumMap.set(array[i] + array[j], `${i} ${j}`);
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i === j) continue;

      const remainingSum = targetSum - array[i] - array[j];
      if (sumMap.has(remainingSum)) {
        const [k, m] = sumMap.get(remainingSum).split(' ').map(Number);
        if (k !== i && k !== j && m !== i && m !== j) {
          subset.add([array[i], array[j], array[k], array[m]].sort().toString());
        }
      }
    }
  }
  return [...subset].map(x => x.split(',').map(Number));
}
const out = fourNumberSum([7, 6, 4, -1, 1, 2], 16);
console.log(out)