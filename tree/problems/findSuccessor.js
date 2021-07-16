"use strict";
exports.__esModule = true;
exports.findSuccessor = exports.BinaryTree = void 0;
// This is an input class. Do not edit.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
function findSuccessor(tree, node) {
    // Write your code here.
    if (node.right) {
        if (node.right.left) {
            var currentNode = node.right.left;
            while (currentNode.left) {
                currentNode = currentNode.left;
            }
            return currentNode;
        }
        else {
            return node.right;
        }
    }
    else {
        if (node.parent.left === node) {
            return parent;
        }
        else {
            var currentNode = node.parent;
            while (currentNode.parent.left !== currentNode) {
                currentNode = currentNode.parent;
            }
            return currentNode.parent;
        }
    }
    return null;
}
exports.findSuccessor = findSuccessor;
var root = new BinaryTree(1);
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
var node = root.left.right;
var expected = root;
var actual = findSuccessor(root, node);
console.log(actual);
