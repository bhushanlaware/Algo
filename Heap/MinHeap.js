// Feel free to add new properties and methods to the class.
const fs= require('fs');
class MinHeap {
    constructor(array) {
        this.heap = array
        this.buildHeap()
    }
    //? o(n)
    buildHeap() {
        // Write your code here.
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.minify(i)
        }
    }
    minify(i) {
        i++
        let left = i * 2
        let right = i * 2 + 1
        left--
        right--
        i--
        if (left < this.heap.length) {
            let smallest = this.heap[left] < this.heap[right] ? left : right
            smallest = this.heap[smallest] < this.heap[i] ? smallest : i
            if (smallest !== i) {
                const temp = this.heap[smallest]
                this.heap[smallest] = this.heap[i]
                this.heap[i] = temp
                this.minify(smallest)
            }
        }
    }
    //? o(1)
    peek() {
        // Write your code here.
        return this.heap[0]
    }
    //? o(logn)
    remove() {
        // Write your code here.
        const head = this.heap[0]
        const tail = this.heap.pop()
        this.heap[0] = tail
        this.minify(0)
        return head
    }
    //? o(logn)
    insert(value) {
        // Write your code here.
        this.heap.push(value)
        let current = this.heap.length
        let parent = Math.floor(current / 2)
        current--
        parent--
        while (current > 1 && this.heap[current] < this.heap[parent]) {
            const temp = this.heap[current]
            this.heap[current] = this.heap[parent]
            this.heap[parent] = temp
            current = parent
            parent++
            parent = Math.floor(parent / 2)
            parent--
        }
    }
    display() {
        let divider = 2;
        let str = ''
        let count = 1
        for (let i = 0; i < this.heap.length; i++) {
            str += '\t'.repeat(Math.floor(this.heap.length/divider))
            str += this.heap[i]
            count++
            if (Number.isInteger(Math.log2(count))) {
                str += '\n'
                divider ++
            }
        }
        fs.writeFileSync('out.txt',str);
        console.log(str);
        
    }
}
const isMinHeapPropertySatisfied = (array) => {
    for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
        const parentIdx = Math.floor((currentIdx - 1) / 2)
        if (array[parentIdx] > array[currentIdx]) return false
    }
    return true
}

const minHap = new MinHeap([
    544, -578, 556, 713, -655, -359, -810, -731, 194, -531, -685, 689, -279,
    -738, 886, -54, -320, -500, 738, 445, -401, 993, -753, 329, -396, -924,
    -975, 376, 748, -356, 972, 459, 399, 669, -488, 568, -702, 551, 763, -90,
    -249, -45, 452, -917, 394, 195, -877, 153, 153, 788, 844, 867, 266, -739,
    904, -154, -947, 464, 343, -312, 150, -656, 528, 61, 94, -581,
])
console.log(minHap.remove())
console.log(minHap.heap)
minHap.insert(-8)
minHap.display()

console.log(isMinHeapPropertySatisfied(minHap.heap))
