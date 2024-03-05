/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/*BST 는 왼쪽은작고 오른쪽은 크다*/

var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    
    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    } else if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    } else {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    }
};