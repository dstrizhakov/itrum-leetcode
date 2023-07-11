/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head;
  let prev = null;
  let next = null;
  while(current !== null) {
      //store next
      next = current.next;
      // Reverse current node's pointer
      current.next = prev;
      // Move pointers one position ahead.
      prev = current;
      current = next;
      head = prev;
      }
      return head;
};