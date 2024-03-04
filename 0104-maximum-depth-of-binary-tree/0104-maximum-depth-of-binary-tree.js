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
 * @return {number}
 */
const searchDepth = (node, depth) => {
    if(node === null) return depth;
    depth++;
    
    const leftDepth = searchDepth(node.left, depth);
    const rightDepth = searchDepth(node.right, depth);
    
    const max = Math.max(leftDepth, rightDepth);
    return max;
}

const maxDepth = (root) => {
    return searchDepth(root,0);
};
