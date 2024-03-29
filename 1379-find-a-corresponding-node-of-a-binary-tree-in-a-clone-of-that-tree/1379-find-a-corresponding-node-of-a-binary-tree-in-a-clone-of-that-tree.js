/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    
    if(!cloned) return ;
    
    if( target.val === cloned.val ) return cloned;
    
    
    return getTargetCopy(original.right,cloned.right,target) || getTargetCopy(original.left, cloned.left,target)
    
};