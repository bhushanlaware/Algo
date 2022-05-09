// max sequencial subset sum in array

function maxSequencialSubsetSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
        maxSum = currentSum;
        }
        if (currentSum < 0) {
        currentSum = 0;
        }
    }
    return maxSum;
    }

    console.log(maxSequencialSubsetSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    // what is the ans of above code?
    


