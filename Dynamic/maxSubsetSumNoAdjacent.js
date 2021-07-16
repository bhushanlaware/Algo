function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    function getMaxSum(i, prevSum1, prevSum2) {
        if (i < array.length) {
            const currentSum = Math.max(prevSum2 + array[i], prevSum1)
            return getMaxSum(i + 1, currentSum, prevSum1)
        }
        return Math.max(prevSum2, prevSum1)
    }
    return array.length === 0
        ? 0
        : array.length === 1
        ? array[0]
        : array.length === 2
        ? Math.max(array[0], array[1])
        : getMaxSum(2, Math.max(array[0], array[1]), array[0])
}
function maxSubsetSumNoAdjacent2(array) {
    // Write your code here.
  if(!array.length) return 0;
      if(array.length===1) return array[0];
      const maxSum=array.slice();
      maxSum[1]=Math.max(array[0],array[1]);
      for(let i=2;i<array.length;i++){
          maxSum[i]=Math.max(maxSum[i-1],maxSum[i-2]+array[i]);
      }
      return maxSum[maxSum.length-1]
  }
console.log(maxSubsetSumNoAdjacent1([30, 25, 50, 55, 100, 120]))
