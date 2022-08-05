// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  // Write your code here.
  const parentMap = new Map();
  const resNodes = [];
  const visitedNodes = new Set();
  const bfsQueue = [];
  let targetNode = null;

  function dfs(node, parent) {
    if (!node) return;
    parentMap.set(node, parent);

    if (node.value === target) {
      targetNode = node;
    }

    dfs(node.left, node)
    dfs(node.right, node);
  }

  function bfs(node, dist) {
    if (visitedNodes.has(node)) {
      return;
    }
    visitedNodes.add(node);

    console.log(node.value, dist)

    if (dist == k) {
      resNodes.push(node);
      return;
    }

    if (node.left) {
      bfsQueue.push([node.left, dist]);
    }
    if (node.right) {
      bfsQueue.push([node.right, dist]);
    }
    if (parentMap.get(node)) {
      bfsQueue.push([parentMap.get(node), dist])
    }
    while (bfsQueue.length) {
      const [nextNode, nextDist] = bfsQueue.shift()
      bfs(nextNode, nextDist + 1)
    }
  }

  dfs(tree, null);
  bfs(targetNode, 0);

  return resNodes.map(x => x.value);
}


const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.right.right.left = new BinaryTree(7);
root.right.right.right = new BinaryTree(8);
const target = 3;
const k = 2;
const expected = [2, 7, 8];
const actual = findNodesDistanceK(root, target, k);
console.log(actual);