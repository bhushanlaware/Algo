function taskAssignment(k = 0, tasks = []) {
    // Write your code here.
    const pairs = []
    const taskWithIndex = tasks.map((v, i) => ({ v, i }));
    taskWithIndex.sort((a, b) => a.v - b.v);
    
    for (let i = 0; i < k; i++) {
        pairs.push([taskWithIndex[i].i, taskWithIndex[tasks.length-1-i].i]);
    }
    return pairs;
}
const k = 3
const tasks = [1, 3, 5, 3, 1, 4]
console.log(taskAssignment(k, tasks))
