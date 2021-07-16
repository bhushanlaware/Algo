// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const sortedArr = [];
  function inorder(tree) {
    if (tree) {
      inorder(tree.left)
      sortedArr.push(tree.value)
      inorder(tree.right)
    }
  }
  inorder(tree);
  return sortedArr[sortedArr.length - k];
}
const root = new BST(15);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.left.right = new BST(3);
root.left.right = new BST(5);
root.right = new BST(20);
root.right.left = new BST(17);
root.right.right = new BST(22);
const k = 3;
const actual = findKthLargestValueInBst(root, k);
console.log(actual);