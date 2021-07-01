const { func } = require("prop-types");

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  // Write your code here.
  function getLength() {
    let current = head;
    let length = 0;
    while (current.next) {
      current = current.next;
      length++;
    }
    current.next = head;
    return length + 1;
  }
  function shift(newTail) {
    let current = head;
    // console.log(current.value, newTail);
    let length = 0;
    while (length + 1 !== newTail) {
      current = current.next;
      // console.log(current.value)
      length++;
    }
    // console.log(current.value, 'tail')
    head = current.next;
    current.next = null;
  }

  const length = getLength();
  // console.log(length)
  const newTail = length - k % length;
  // console.log(newTail);
  shift(newTail);
  return head;

}
function display(head) {
  let current = head;
  let str = '';
  while (current) {
    str += current.value + " ";
    current = current.next;
  }
  console.log(str);
}
const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(4);
head.next.next.next.next.next = new LinkedList(5);


display(head);
const newHead = shiftLinkedList(head, 2);
display(newHead);

