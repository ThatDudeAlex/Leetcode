/*
* Invert a binary tree.
* 
* Example:
* 
* Input:
* 
*      4
*    /   \
*   2     7
*  / \   / \
* 1   3 6   9
* Output:
* 
*      4
*    /   \
*   7     2
*  / \   / \
* 9   6 3   1
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
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root)
        return root

    traverseTree(root, root.left, root.right)
    return root
};

const traverseTree = (root, leftChild, rightChild) => {
    let temp = null;

    if(!leftChild && !rightChild)
        return
    
    temp = leftChild;
    leftChild = rightChild;
    rightChild = temp;
    root.left = leftChild;
    root.right = rightChild

    if(leftChild)
        traverseTree(leftChild, leftChild.left, leftChild.right);
    
    if(rightChild)
        traverseTree(rightChild, rightChild.left, rightChild.right);
}