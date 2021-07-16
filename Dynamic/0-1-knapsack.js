
function knapsackProblem(items = [[]], capacity = 0) {
  const matrix = new Array(capacity + 1).fill(0).map(_ => new Array(items.length).fill(0));
  function findInMatrix(index, capacity) {
    if (capacity === 0 || index === -1) return 0;
    else {
      return matrix[index][capacity];
    }
  }
  function findSolution(index, capacity) {
    if (capacity === 0 || index === -1) return 0;

    const profit = items[index][0];
    const weight = items[index][1];

    if (weight <= capacity) {
      let ifIncluded = findInMatrix(index - 1, capacity - weight);
      if (!ifIncluded) {
        ifIncluded = findSolution(index - 1, capacity - weight);
        matrix[index - 1, capacity - weight];
      }
      let ifNotIncluded = findInMatrix(index - 1, capacity);
      if (!ifNotIncluded) {
        ifNotIncluded = findSolution(index - 1, capacity);
        matrix[index - 1, capacity];
      }
      const maxProfit = Math.max(profit + ifIncluded, ifNotIncluded);
      matrix[index, capacity] = maxProfit;
      return maxProfit;
    }
    else {
      return findSolution(index - 1, capacity);
    }
  }
  return findSolution(items.length - 1, capacity);
}
const out = knapsackProblem(
  [
    [1, 2],
    [4, 3],
    [5, 6],
    [6, 7],
  ],
  10,
);
console.log(out)