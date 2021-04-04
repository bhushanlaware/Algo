class MaxHeap {
  constructor(arr = []) {
    this.values = arr;
    this.recontruct();
  }
  //? o(n)
  recontruct() {
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.maxify(i);
    }
  }
  //? o(log(n))
  maxify(i) {
    i++;
    let left = 2 * i;
    let right = 2 * i + 1;
    left--; right--; i--;
    let max = i;
    if (left < this.values.length) {
      max = this.values[left] > this.values[i] ? left : i;
      if (right < this.values.length)
        max = this.values[right] > this.values[max] ? right : max;
    }
    if (max !== i) {
      const temp = this.values[i];
      this.values[i] = this.values[max]
      this.values[max] = temp;
      this.maxify(max);
    }
  }
  //? O(log(n))
  insert(value) {
    this.values.push(value);
    let current = this.values.length - 1;
    let parent = Math.floor(current / 2);
    while (current >= 1 && this.values[current] > this.values[parent]) {
      const temp = this.values[parent];
      this.values[parent] = this.values[current];
      this.values[current] = temp;
      current = parent;
      parent = Math.floor(current / 2);
    }
  }
  //? O(1)
  getMax() {
    return this.values[0];
  }
  sortAsc() {
    this.sortDesc();
    this.values.reverse();
  }
  sortDesc() {
    const arr = [];
    for (let i = 0; this.values.length > 0; i++) {
      arr.push(this.values.shift());
      this.maxify(0);
    }
    this.values = arr;
  }
}
const a = [77, 2, 3, 1, 4, 2, 34, 7, 100];
const newHeap = new MaxHeap(a);
newHeap.sortDesc();
console.log(newHeap);

