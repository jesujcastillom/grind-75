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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const q = [root];
    const res = [[]];
    let rL = 1;

    while(q.length) {
        const arr = res.at(-1) ?? [];

        for (let i = 0; i < rL; i++, rL--) {
            const node = q.shift();

            if (node == null) continue;

            arr.push(node.val)

            q.push(node.left);
            q.push(node.right);
        }

        if (rL == 0) {
            if (!arr.length) res.pop();
            rL ||= arr.length * 2
            if (q.length) res.push([])
        }
    }

    return res;
};
