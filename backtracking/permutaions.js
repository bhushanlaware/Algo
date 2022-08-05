// find all permutations of a string "ABC" which do not contain "AB"

function findPermutations(str) {
  const arr = str.split('');

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function isValid(s) {
    if (s > 0) {
      if (arr[s - 1] === 'A' && arr[s] === 'B') {
        return false;
      }
    }
    return true;
  }

  function possibleSol(s) {

    if (s === arr.length - 1) {
      console.log(arr.join(''))
      return;
    }

    for (let i = s; i < arr.length; i++) {
      swap(s, i);

      if (!isValid(s)) {
        return;
      }
      possibleSol(s + 1);
      swap(s, i);
    }
  }

  possibleSol(0);
}

findPermutations("ABC");