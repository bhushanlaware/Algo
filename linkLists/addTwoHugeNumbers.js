function ListNode(value) {
  this.value = value;
  this.next = null;
}
function solution(a, b) {

  const arrb = getArrB();

  function addToA(h) {
    const carry = addToA(h.next);
    return Math.round((+h.value + carry + arrb.pop()) / 1000);
  }

  function getArrB() {
    let h = b;
    const a = [];
    while (h) {
      a.push(h.value);
      h = h.next;
    }
    return a;
  }
  return a;
}
solution()
