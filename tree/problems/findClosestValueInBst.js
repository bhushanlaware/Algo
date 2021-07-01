function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closestValue = currentNode.value;
  while (currentNode) {
    const currentDiff = Math.abs(currentNode.value - target);
    const closestDiff = Math.abs(closestValue - target);
    closestValue = currentDiff < closestDiff ? currentNode.value : closestValue;

    if (currentNode.value === target) {
      return currentNode.value;
    }
    else if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closestValue;

}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
const actual = findClosestValueInBst(root, 12);
console.log(actual);