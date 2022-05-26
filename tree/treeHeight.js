//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }


function treeHeight(t) {
  // your code here
  if (t === null) {
    return 0;
  }
  return 1 + Math.max(treeHeight(t.left), treeHeight(t.right));
}