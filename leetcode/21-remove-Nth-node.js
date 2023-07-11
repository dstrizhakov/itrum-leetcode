/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const getLength = function(head) {
  let current = head;
  let count = 0;
  while(current){
      current = current.next;
      count++;
  } 
  return count;
}
var removeNthFromEnd = function(head, n) {
 const length = getLength(head);
 const position = length - n + 1;

 let prev = null;
 let current = head;

 for (let i = 1; i < position; i++) {
     prev = current;
     current = current.next;
 }

 if (prev === null) {
     head = head.next;
     return head;
 }
 else {
     prev.next = prev.next.next;
     return head;
 }

};