/*
* Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are 
* overlapped while the others are not.
* 
* You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up 
* as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
* 
* Example 1:
* 
* Input: 
* 	Tree 1                     Tree 2                  
*           1                         2                             
*          / \                       / \                            
*         3   2                     1   3                        
*        /                           \   \                      
*       5                             4   7                  
* Output: 
* Merged tree:
* 	     3
* 	    / \
* 	   4   5
* 	  / \   \ 
* 	 5   4   7
*  
* Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var mergeTrees = function(t1, t2) {
    let mergedTree = null
    
    // checks to see if either of the trees are empty, and if not continue mergin
    if(t1 !== null & t2 !== null)
        mergedTree = new TreeNode(t1.val + t2.val)
    else if(t1 !== null && t2 === null)
        return t1
    else if(t1 === null && t2 !== null)
        return t2
    else 
        return null
    
    // if both trees contain a left sub-tree, then traverse them. if only 1 tree has a left sub-tree then assign that 
    // tree as our left sub-tree by default
    if(t1.left !== null && t2.left !== null)
        mergedTree.left = traverseTrees(t1.left, t2.left)
    else if(t1.left !== null && t2.left === null)
        mergedTree.left = t1.left
    else
        mergedTree.left = t2.left
    
    // if both trees contain a right sub-tree, then traverse them. if only 1 tree has a right sub-tree then assign that 
    // tree as our right sub-tree by default
    if(t1.right !== null && t2.right !== null)
        mergedTree.right = traverseTrees(t1.right, t2.right)
    else if(t1.right !== null && t2.right === null)
        mergedTree.right = t1.right
    else
        mergedTree.right = t2.right
    
    return mergedTree
};

// recursively traverses the trees being passed in
const traverseTrees = (t1,t2) => {
    let node = null;
    
    // base cases. 
    if(t1 !== null && t2 !== null)
        node = new TreeNode(t1.val + t2.val)
    
    if(t1 !== null && t2 === null)
        return t1
    
    if(t1 === null && t2 !== null)
        return t2
    
    
    if((t1.left !== null) && (t2.left !== null)){
        node.left = traverseTrees(t1.left, t2.left)
    }
    
    if((t1.right !== null) && (t2.right !== null)){
        node.right = traverseTrees(t1.right, t2.right)
    }
    
    if(t1.left === null && t2.left !== null)
        node.left = t2.left
    else if(t1.left !== null && t2.left === null)
        node.left = t1.left
    
    if(t1.right === null && t2.right !== null)
        node.right = t2.right
    else if(t1.right !== null && t2.right === null)
        node.right = t1.right
    
    return node;
}