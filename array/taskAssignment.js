function taskAssignment(k = 0, tasks = []) {
    // Write your code here.
    const pairs = []
    const taskWithIndex = tasks.map((v, i) => ({ v, i }))
    tasks.sort((a, b) => a.v - b.v)
    for (let i = 0; i < k; k++) {
        pairs.push([taskWithIndex[i].v, taskWithIndex[tasks.length-1-i].v]);
    }
    return pairs;
}
const k = 3
const tasks = [1, 3, 5, 3, 1, 4]
console.log(taskAssignment(k, tasks))
