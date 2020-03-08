/*
* Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
* 
* For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
* 
*     1
*    / \
*   2   2
*  / \ / \
* 3  4 4  3
*  
* 
* But the following [1,2,2,null,3,null,3] is not:
* 
*     1
*    / \
*   2   2
*    \   \
*    3    3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
   
    if(root === null)
        return true
    
    return checkSymmetry(root.left, root.right)
};

const checkSymmetry = (leftRoot, rightRoot) => {
    
    if(leftRoot === null && rightRoot === null)
        return true
    else if(leftRoot === null && rightRoot !== null)
        return false
    else if(leftRoot !== null && rightRoot === null)
        return false    
    else if(leftRoot.val !== rightRoot.val)
        return false
    
    return checkSymmetry(leftRoot.left, rightRoot.right) && checkSymmetry(leftRoot.right, rightRoot.left);
}