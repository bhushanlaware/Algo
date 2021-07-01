// This is an input class. Do not edit.
class List {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function removeDuplicatesFromLinkedList(linkedList) {
//   // Write your code here.
// 	const setV=new Set();
// 	let prev=linkedList;
// 	let current= linkedList;

// 	while(current){
//     if(setV.has(current.value)){
//       prev.next=current.next;
//       current=current.next;
// 		}
//     else{
//       prev=current;
//       setV.add(current.value);
//       current=current.next;
//     }


// 	}
//   return linkedList;
// }


function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  const vs = new Set();
  function traverse(node) {
    if (!node) return false;
    let isDuplicate = false;
    if (vs.has(node.value)) {
      isDuplicate = traverse(node.next);
      if (isDuplicate) {
        node.next = node.next.next;
      }
      return true;
    }
    else if (node) {
      vs.add(node.value);
      isDuplicate = traverse(node.next);
      if (isDuplicate) {
        node.next = node.next.next;
      }
      return false;
    }
  }
  traverse(linkedList);
  return linkedList;
}
// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

class LinkedList extends List {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
const expected = new LinkedList(1).addMany([3, 4, 5, 6]);
const actual = removeDuplicatesFromLinkedList(input);
const output = actual.getNodesInArray();
console.log(output);
