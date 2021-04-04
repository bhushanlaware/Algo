
class BinaryTree {
  // constructor() {
  //   this.root = null;
  // }
  constructor() {
    this.root = null;
  }


  insert(data) {
    const newNode = new BinaryNode(data, null, null);
    if (!this.root) {
      this.root = newNode;
    }
    else {
      let current = this.root;
      while (true) {
        if (data === current.data) {
          return;
        }
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
          }
          current = current.left;
        }
        else {
          if (!current.right) {
            current.right = newNode;
          }
          current = current.right;
        }
      }
    }
  }
}
class BinaryNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const a = [77, 2, 3, 1, 4, 2, 34, 7];
const newBinaryTree = new BinaryTree();
for (let i = 0; i < a.length; i++) {
  newBinaryTree.insert(a[i]);
}
console.log(JSON.stringify(newBinaryTree, null, 2));
