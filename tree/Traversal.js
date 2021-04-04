const Tree = require('./binaryTree2');
const a = [77, 2, 3, 1, 4, 2, 34, 7];
const newTree = new Tree(a);
// console.log(JSON.stringify(newTree, null, 2));
console.log('Inorder', newTree.inorder());
console.log('Preorder', newTree.preorder())
console.log('Postorder', newTree.postorder())
