// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.

	function traverseToEnd(node){
		if(!node){
			return 0;
		}
		else { 
			const pos=traverseToEnd(node.next)+1;
				 if(k+1===pos){
					 if(node.next.next){
					 	node.next=node.next.next;
					 }
					 else{
						 node.next=null;
					 }
				 }
			return pos;
		 }
	}
	traverseToEnd(head);
	return head;
}
class LinkedList1 extends LinkedList {
    addMany(values) {
        let current = this
        while (current.next !== null) {
            current = current.next
        }
        for (const value of values) {
            current.next = new LinkedList(value)
            current = current.next
        }
        return this
    }

    getNodesInArray() {
        const nodes = []
        let current = this
        while (current !== null) {
            nodes.push(current.value)
            current = current.next
        }
        return nodes
    }
}
const test = new LinkedList1(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9])
removeKthNodeFromEnd(test,10)
console.log(test.getNodesInArray())

