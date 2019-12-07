// Source : https://leetcode.com/problems/palindrome-linked-list/
// Author : Jose Nunez
// Date   : 2019-06-08

/*
* Given a singly linked list, determine if it is a palindrome.
*
* Example 1:
*
* Input: 1->2
* Output: false
* Example 2:
*
* Input: 1->2->2->1
* Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
    const linkedString = [];
    
    
    if (head == null || head.next == null)
        return true;
    
    while(head !== null){
        linkedString.push(head.val);
        head = head.next;
    }
        
    while(true){   
         if(linkedString.length <= 1)
             return true;
         else if( linkedString.shift() !== linkedString.pop() )
             return false; 
    }
};