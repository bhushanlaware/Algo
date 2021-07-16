function minHeightBst(array = []) {
  // Write your code here.\
  let root = null;
  function contructBST(start, end) {
    const mid = Math.floor((start + end) / 2);
    if (start > end) return;
    if (!root) {
      root = new BST(array[mid]);
    }
    else {
      root.insert(array[mid]);
    }
    contructBST(start, mid - 1);
    contructBST(mid + 1, end);
  }
  contructBST(0, array.length-1)
  return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
const array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
const tree = minHeightBst(array);
console.log(JSON.stringify(tree, null, 2));

