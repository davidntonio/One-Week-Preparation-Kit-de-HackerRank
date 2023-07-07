class SinglyLinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeLists(headA, headB) {
    if (!headA) return headB;
    if (!headB) return headA;
  
    let mergedHead = null;
    let current = null;
  
    while (headA && headB) {
      if (headA.data <= headB.data) {
        if (!mergedHead) {
          mergedHead = headA;
          current = headA;
        } else {
          current.next = headA;
          current = current.next;
        }
        headA = headA.next;
      } else {
        if (!mergedHead) {
          mergedHead = headB;
          current = headB;
        } else {
          current.next = headB;
          current = current.next;
        }
        headB = headB.next;
      }
    }
  
    if (headA) {
      current.next = headA;
    } else if (headB) {
      current.next = headB;
    }
  
    return mergedHead;
  }
  
  const headA = new SinglyLinkedListNode(1);
  headA.next = new SinglyLinkedListNode(2);
  headA.next.next = new SinglyLinkedListNode(3);
  
  const headB = new SinglyLinkedListNode(3);
  headB.next = new SinglyLinkedListNode(4);
  
  const mergedHead = mergeLists(headA, headB);
  
  let current = mergedHead;
  while (current) {
    process.stdout.write(`${current.data} `);
    current = current.next;
  }
  