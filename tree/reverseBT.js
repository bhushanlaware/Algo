const Tree = require('./binaryTree2');
const a = [77, 2, 3, 1, 4, 2, 34, 7];
const newTree = new Tree(a);
// console.log(newTree.inorder())
console.log(newTree.topDownParsing());

newTree.reverse();
// console.log(newTree.inorder())
console.log(newTree.topDownParsing());