function find(A, B) {
  let prev = 0;
  let curr = 1

  while (A[prev] < A[curr]) {
    console.log('here', A[prev], A[curr])
    prev++;
    curr++
  }
  console.log(prev, curr)
  const leftA = A.slice(0, prev);
  const rightA = A.slice(curr);
  const left = binarySearchInc(leftA, B);
  const right = binarySearchDec(rightA, B);
  if (left) return left;
  if (right) return curr + right;
  return -1;
}

function binarySearchInc(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// binary search for decrementing array
function binarySearchDec(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log('ams', find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 12))