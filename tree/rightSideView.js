function rightSideView(root) {
  let level = 1;
  let index = 0;
  let result = [];
  while (index < root.length - 1) {
    result.push(root[index]);
    const numberOfNodesLevel = 2 ** level;
    index += numberOfNodesLevel;
    level++;
  }
  result.push(root[root.length - 1]);
  return result;
}
console.log(rightSideView([1, 2, 3, null, 5, null, 4]));
