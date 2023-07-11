/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

  let current = head;
  let nodes = new Map();
  let i = 0;
  while (true){
      if (!current) return false;
      current = current.next;  
      if (nodes.has(current)){
          return true
      } else {
     nodes.set(current, i)
      i++;
      }
  }
  
};