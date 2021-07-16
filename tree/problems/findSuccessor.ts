// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  // Write your code here.
  if(node.right){
    if(node.right.left){
      let currentNode:BinaryTree=node.right.left;
      while(currentNode.left){
        currentNode=currentNode.left;
      }
      return currentNode;
    }
    else{
      return node.right;
    }
  }
  else{
    if(node.parent?.left===node){
      return parent;
    }
    else{
      let currentNode=node.parent;
      while(currentNode.parent.left!==currentNode){
        currentNode=currentNode.parent;
      }
     return currentNode.parent;
    }
  }
  return null;
}
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;
const node = root.left.right;
const expected = root;
const actual = findSuccessor(root, node);
console.log(actual);
