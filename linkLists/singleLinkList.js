
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class SingleLinkList {
  constructor(data, isBulk = false) {
    if (data) {
      this.add(data, isBulk);
    }
    else {
      this.head = null;
    }
  }
  add(data, isBulk) {
    if (!this.head) {
      this.head = isBulk ? new Node(data[0], null) : new Node(data, null);
      if (!isBulk) return;
    }
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      if (isBulk) {
        data.forEach(element => {
          current.next = new Node(element, null);
          current = current.next;
        });
      }
      else {
        current.next = new Node(data, null);
      }
    }
  }
}
const newList = new SingleLinkList([77, 2, 3, 1, 4, 2, 34, 7], true);
console.log(newList);