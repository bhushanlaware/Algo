// ListNode<Integer> solution(ListNode<Integer> l, int k) {
//   if(l==null || k<=1){
//       return l;
//   }
//   //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
//   ListNode<Integer> head=l;
//   ListNode<Integer> prev=l;
//   ListNode<Integer> currHead=l;
//   int count=1;
//   while(l!=null)
//   {

//       if(count==k){
//           ListNode<Integer> temp1=l.next;
//           l.next=null;
//           ListNode<Integer> reversedList=reverse(currHead,null);
//           head=reversedList;
//           ListNode<Integer> rev=reversedList;
//           while(rev.next!=null){
//               rev=rev.next;
//           }
//           currHead=temp1;
//           l=temp1.next;
//           count++;
//       }
//       else if(count%k==0){
//           ListNode<Integer> temp1=l.next;
//           l.next=null;
//          // printNode(head,"Currhead-temp1 elif");

//           ListNode<Integer> reversedList=reverse(currHead,null);
//          // printNode(reversedList,"reversed-temp1 elif");
//           currHead=temp1;
//           ListNode<Integer> t=head;
//          // printNode(head,"rev on 45");
//           while(t.next!=null){
//               t=t.next;
//           }
//           t.next=reversedList;
//           ListNode<Integer> rev=reversedList;
//           while(rev.next!=null){
//               // System.out.println(rev.value+"-->");
//                rev=rev.next;
//           }
//          // printNode(rev,"rev on 55");
//           if(temp1!=null)
//               l=temp1.next;
//           else l=null;


//           count++;
//       }
//       else{
//           l=l.next;
//       }
//       count++;
//   }
//   ListNode<Integer> temp=head;
//   while(temp.next!=null){
//               temp=temp.next;
//   }
// //  printNode(currHead, "end of currHead");
//   temp.next=currHead;

// return head;

// }

function solution(l, k) {
  if (l == null || k <= 1) {
    return l;
  }
  //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
  let head = l;
  let prev = l;
  let currHead = l;
  let count = 1;
  while (l != null) {
    if (count == k) {
      let temp1 = l.next;
      l.next = null;
      let reversedList = reverse(currHead, null);
      head = reversedList;
      let rev = reversedList;
      while (rev.next != null) {
        rev = rev.next;
      }
      currHead = temp1;
      l = temp1.next;
      count++;
    } else if (count % k == 0) {
      let temp1 = l.next;
      l.next = null;
      // printNode(head,"Currhead-temp1 elif");
      let reversedList = reverse(currHead, null);
      // printNode(reversedList,"reversed-temp1 elif");
      currHead = temp1;
      let t = head;
      // printNode(head,"rev on 45");
      while (t.next != null) {

        t = t.next;
      }
      t.next = reversedList;
      let rev = reversedList;
      while (rev.next != null) {
        // System.out.println(rev.value+"-->");
        rev = rev.next;
      }
      // printNode(rev,"rev on 55");
      if (temp1 != null)

        l = temp1.next;
      else l = null;

      count++;
    } else {
      l = l.next;
    }
    count++;
  }
  let temp = head;
  while (temp.next != null) {

    temp = temp.next;
  }
  temp.next = currHead;
  return head;

  function reverse(head, prev) {
    if (head == null) {
      return prev;
    }
    let temp = head.next;
    head.next = prev;
    return reverse(temp, head);
  }

}
