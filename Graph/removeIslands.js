function removeIslands(arr = [[]]) {
    // Write your code here.
    const connectedSet = new Set()
    function checkConnection(i, j) {
        if (
            i >= 0 &&
            j >= 0 &&
            i < arr.length &&
            j < arr[0].length &&
            arr[i][j]
        ) {
            return (
                connectedSet.has(`${i}${j}`) ||
                checkConnection(i - 1, j) ||
                checkConnection(i + 1, j) ||
                checkConnection(i, j + 1) ||
                checkConnection(i, j - 1)
            )
        }
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            const value = arr[i][j]
            if (value) {
                if (
                    i === 0 ||
                    j === 0 ||
                    i === arr.length - 1 ||
                    j === arr[0].length - 1
                ) {
                    connectedSet.add(`${i}${j}`)
                } else {
                    const isConnected = checkConnection(i, j)
                    if (isConnected) {
                        connectedSet.add(`${i}${j}`)
                    } else {
                        arr[i][j] = 0
                    }
                }
            }
        }
    }

    return []
}

const input = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
]

const expected = [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1],
]
const output = removeIslands(input)
console.log(JSON.stringify(output) === JSON.stringify(expected))
