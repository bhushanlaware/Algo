class Node {
  left;
  right;
  freq;
  constructor(left, right, freq, value = null) {
    this.left = left;
    this.right = right;
    this.freq = freq;
    this.value = value;
  }
}


class MinHeap {
  arr = ['x'];
  add(node) {
    this.arr.push(node);
    let curr = this.arr.length - 1;
    let parent = Math.floor(curr / 2);

    while (parent > 0 && this.arr[parent].freq > this.arr[curr].freq) {
      this.swap(parent, curr);
      curr = parent;
      parent = Math.floor(parent / 2);
    }
  }
  swap(i, j) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  minify(i) {
    const left = i * 2;
    const right = i * 2 + 1;
    if (right >= this.arr.length) {
      return;
    }
    console.log(left, right, i, this.arr[i].freq, this.arr[left].freq, this.arr[right].freq);
    let smallest = this.arr[left].freq < this.arr[right].freq ? left : right;
    smallest = this.arr[smallest].freq < this.arr[i].freq ? smallest : i;
    if (i !== smallest) {
      this.swap(i, smallest);
      this.minify(smallest);
    }
  }

  deleteMin() {
    const top = this.arr[1];
    this.arr[1] = this.arr[this.arr.length - 1];
    this.arr.length--;
    this.minify(1);
    return top;
  }
  size() {
    return this.arr.length - 1;
  }
}

function huffmanCoading(freqArr) {
  // create min Heap for all freqArr with node
  const minHeap = new MinHeap();
  for (const freq of freqArr) {
    const node = new Node(null, null, freq[1], freq[0]);
    minHeap.add(node);
  }
  while (true) {
    if (minHeap.size() === 1) break;
    const left = minHeap.deleteMin();
    const right = minHeap.deleteMin();

    const node = new Node(left, right, left.freq + right.freq);
    minHeap.add(node);
  }
  const huffmanTree = minHeap.deleteMin();
  const codes = [];
  function traverse(node, code) {
    if (node.value) {
      codes.push([node.value, code]);
      return;
    }
    traverse(node.left, code + '0');
    traverse(node.right, code + '1');
  }
  traverse(huffmanTree, '');
  return codes;
}

const b = huffmanCoading([['A', 6], ['B', 1], ['C', 6], ['D', 2], ['E', 5]]);
console.log(JSON.stringify(b));