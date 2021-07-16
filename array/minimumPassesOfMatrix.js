function minimumPassesOfMatrix(matrix = [[]]) {
    // Write your code here.

    let currentQueue = []
    let nextQueue = []
    let numberOfPasses = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] > 0) currentQueue.push([i, j])
        }
    }

    function makePositive(i, j) {
        if (i - 1 >= 0 && matrix[i - 1][j] < 0) {
            matrix[i - 1][j] = matrix[i - 1][j] * -1
            nextQueue.push([i - 1, j])
        }
        if (i + 1 < matrix.length && matrix[i + 1][j] < 0) {
            matrix[i + 1][j] = matrix[i + 1][j] * -1
            nextQueue.push([i + 1, j])
        }
        if (j - 1 >= 0 && matrix[i][j - 1] < 0) {
            matrix[i][j - 1] = matrix[i][j - 1] * -1
            nextQueue.push([i, j - 1])
        }
        if (j + 1 < matrix[0].length && matrix[i][j + 1] < 0) {
            matrix[i][j + 1] = matrix[i][j + 1] * -1
            nextQueue.push([i, j + 1])
        }
    }
    while (currentQueue.length) {
        numberOfPasses++
        currentQueue.forEach(([i, j]) => {
            makePositive(i, j)
        })
        currentQueue = [...nextQueue]
        nextQueue = []
    }

    return matrix.some((a) => a.some((b) => b < 0)) ? -1 : numberOfPasses - 1
}

const input = [
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [-1, 0, 3, 0, 3],
]
console.log(minimumPassesOfMatrix(input))
