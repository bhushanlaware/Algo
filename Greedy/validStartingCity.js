function validStartingCity(distances = [], fuel = [], mpg = 0) {
    // Write your code here.
    let minDistance = 0
    let minIndex = 0
    let currentDistance = 0
    for (let i = 0; i < distances.length; i++) {
        currentDistance += fuel[i] * mpg - distances[i]
        if (currentDistance < minDistance) {
            minDistance = currentDistance
            minIndex = i
        }
    }

    return minIndex;
}
const distances = [5, 25, 15, 10, 15]
const fuel = [1, 2, 1, 0, 3]
const mpg = 10
const actual = validStartingCity(distances, fuel, mpg)
console.log(actual)
