// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // o(logn)
  insert(value) {
    let currentNode = this;
    let preNode = currentNode;
    while (currentNode) {
      preNode = currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (preNode.value > value) {
      preNode.left = new BST(value)
    }
    else {
      preNode.right = new BST(value)
    }
    return this;
  }



  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value === value) return true;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  // o(logn)
  getRightDecendantValue() {
    let currentNode = this;
    currentNode = currentNode.right;
    let prevNode = currentNode;
    while (currentNode && currentNode.left) {
      prevNode = currentNode;
      currentNode = currentNode.left;
    }
    if (this.right === currentNode) {
      this.right = currentNode && currentNode.right;
    }
    else {
      prevNode.left = null;
    }
    return currentNode && currentNode.value || this.value;
  }
  // o(logn)
  remove(value) {
    let currentNode = this;
    let prevNode = currentNode;
    // o(logn)
    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if(currentNode===this){
      const rightDecendant = currentNode.getRightDecendantValue();
      currentNode.value = rightDecendant;
      return;
    }
    if (currentNode) {
      //Child
      if (!currentNode.left && !currentNode.right) {

        if (prevNode.left === currentNode) {
          prevNode.left = null;
        }
        else {
          prevNode.right = null;
        }
      }
      else if (currentNode.left && !currentNode.right) {
        if (prevNode.left === currentNode) {
          prevNode.left = currentNode.left;
        }
        else {
          prevNode.right = currentNode.left;
        }
      }
      else if (!currentNode.left && currentNode.right) {
        if (prevNode.left === currentNode) {
          prevNode.left = currentNode.right;
        }
        else {
          prevNode.right = currentNode.right;
        }
      } else {
        const rightDecendant = currentNode.getRightDecendantValue();
        currentNode.value = rightDecendant;
      }

    }
    return this;

  }
}

const root = new BST(10);
root.insert(5);
root.insert(15);
// root.insert(2);
// root.insert(5);
// root.insert(13);
// root.insert(22);
// root.insert(1);
// root.insert(14);
// root.insert(12);
// root.insert(10);
// root.insert(15);
// root.remove(10);
root.remove(5);
root.remove(15);
root.remove(10);
// console.log(root.contains(5));
console.log(JSON.stringify(root, null, 2))

