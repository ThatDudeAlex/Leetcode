/*
* Reverse a singly linked list.
* 
* Example:
* 
* Input: 1->2->3->4->5->NULL
* Output: 5->4->3->2->1->NULL
*
* Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reverseList = function(head) {
    
    if(head === null)
        return null
    else if(head.next === null)
        return head
    
    head = reverseLinkedList(head)
    return head
};

const reverseLinkedList = head => {
    let currentNode = head;
    let prevNode = null;
    let nextNode = null;
    
    while(currentNode != null){
        nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }
    return prevNode;
}