function sortingFun(a, b) {
  if (a[0] === b[0]) {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        return 0
      }
      else {
        return (a[2] < b[2]) ? -1 : 1;
      }
    }
    else {
      return (a[1] < b[1]) ? -1 : 1;
    }
  }
  else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}
function threeNumberSum(array, targetSum) {
  // Write your code here.
  const setS = new Set();
  const output = new Set();
  array.forEach(x => { setS.add(x) });
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] !== array[j]) {
        const requriedSum = targetSum - array[i] - array[j];
        if (requriedSum !== array[i] && requriedSum !== array[j] && setS.has(requriedSum)) {
          const triplet = [array[i], array[j], requriedSum].sort((a, b) => a - b);
          output.add(triplet.join(' '));
        }
      }
    }
  }

  return [...output].map(x => x.split(' ').map(y => parseInt(y))).sort(sortingFun)
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
