const getTabs = (length) => {
  let a = '';
  for (let i = 0; i < length; i++) {
    a += '\t';
  }
}
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  insert(data) {
    if (data === this.data) return;
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data)
      }
      else {
        this.left = new Node(data, null, null)
      }
    }
    else {
      if (this.right) {
        this.right.insert(data)
      }
      else {
        this.right = new Node(data, null, null)
      }
    }
  }
  inorder(arr) {
    this.left && this.left.inorder(arr);
    arr.push(this.data);
    this.right && this.right.inorder(arr);
  }
  preorder(arr) {
    arr.push(this.data);
    this.left && this.left.preorder(arr);
    this.right && this.right.preorder(arr);
  }
  postorder(arr) {
    this.left && this.left.postorder(arr);
    this.right && this.right.postorder(arr);
    arr.push(this.data);
  }
  reverse() {
    if (!this.left && !this.right) return;
    const temp = this.left;
    this.left = this.right;
    this.right = temp;
  }
  height() {
    if (!this.left && !this.right) return 0;
    const leftH = this.left ? this.left.height() : 0;
    const rightH = this.right ? this.right.height() : 0;
    return leftH > rightH ? leftH + 1 : rightH + 1;
  }
}

class Tree {
  constructor(arr) {
    if (!arr) {
      this.root = null;
    }
    else {
      this.generateTree(arr);
    }
  }
  generateTree(arr = []) {
    this.root = arr[0] && new Node(arr[0], null, null);
    for (let i = 1; i < arr.length; i++) {
      this.root.insert(arr[i]);
    }
  }
  inorder() {
    const arr = []
    this.root.inorder(arr);
    return arr;
  }
  preorder() {
    const arr = []
    this.root.preorder(arr);
    return arr;
  }
  postorder() {
    const arr = []
    this.root.postorder(arr);
    return arr;
  }
  reverse() {
    this.root.reverse();
  }
  height() {
    return this.root.height();
  }
  topDownParsing() {
    const arr = [this.root.data];
    const stack = [this.root];
    while (stack.length !== 0) {
      const current = stack.pop();
      // arr.push(current.data);
      if (current.left) {
        arr.push(current.left.data);
        stack.push(current.left);
      }
      if (current.right) {
        arr.push(current.right.data);
        stack.push(current.right)
      }
    }
    return arr;
  }
}

module.exports = Tree;
// const a = [77, 2, 3, 1, 4, 2, 34, 7];
// const newTree = new Tree(a);
// console.log(JSON.stringify(newTree, null, 2));