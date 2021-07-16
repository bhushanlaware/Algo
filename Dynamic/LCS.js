function longestCommonSubsequence(str1 = '', str2 = '') {
  // Write your code here.
  const lcsMatrix = new Array(str1.length).fill(false).map(_ => new Array(str2.length).fill(false));
  function findInMatrix(i, j) {
    if (i === -1 || j === -1)
      return [];
    const value = lcsMatrix[i][j];
    return value;
  }

  function LCS(i, j) {
    if (i === -1 || j === -1) {
      return [];
    }
    else if (str1.charAt(i) === str2.charAt(j)) {
      const strArr = findInMatrix(i - 1, j - 1) || LCS(i - 1, j - 1);
      strArr.push(str1.charAt(i));
      lcsMatrix[i][j] = [...strArr];
      return strArr;
    }
    else {
      let subStr1 = findInMatrix(i - 1, j)
      if (!subStr1) {
        subStr1 = LCS(i - 1, j);
      }
      let subStr2 = findInMatrix(i, j - 1)
      if (!subStr2) {
        subStr2 = LCS(i, j - 1);
      }
      const strArr = subStr1.length > subStr2.length ? subStr1 : subStr2;
      lcsMatrix[i][j] = [...strArr];
      return strArr;
    }
  }

  return LCS(str1.length - 1, str2.length - 1);
}
console.time('timer');
console.log(longestCommonSubsequence('clement', 'antoine'));
console.timeEnd('timer');
