function nQueenProblem(numOfQueens) {
  const posArr = new Array(numOfQueens).fill('x');
  const solutions = [];

  function isValid(pos, queen) {
    if (posArr[pos] === 'x') {
      if (pos - 1 >= 0 && (queen - 1) === posArr[pos - 1]) {
        return false;
      }
      if (pos + 1 < numOfQueens && (queen - 1) === posArr[pos + 1]) {
        return false;
      }
      return true;
    }
    return false;
  }

  function putQueen(queen) {
    if (!posArr.includes('x')) {
      solutions.push([...posArr]);
      return true;
    }

    for (let i = 0; i < numOfQueens; i++) {
      if (isValid(i, queen)) {
        posArr[i] = queen;
        (putQueen(queen + 1))
        posArr[i] = 'x'

      }
    }
    return false;
  }

  putQueen(1);
  return solutions;
}

console.log(nQueenProblem(5));