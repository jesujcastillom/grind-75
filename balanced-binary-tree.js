/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} head
 * @return {boolean}
 */
function isBalanced(head) {
    if (!head) return true;

    const lh = height(head.left);
    const rh = height(head.right);

    return Math.abs(rh - lh) <= 1 && isBalanced(head.left) && isBalanced(head.right);
}

function height(head) {
    if (!head) return 0;

    return Math.max(height(head.left), height(head.right)) + 1;
}
