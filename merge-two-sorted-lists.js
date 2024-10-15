/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2;
    }
    let base = list1.val <= list2.val ? list1 : list2;
    let current = list1 === base ? list2 : list1;

    do {
        if (base.next === null) {
            base.next = current;
            break;
        }
        if (current.val <= base.next.val) {
            const aux = current.next;
            current.next = base.next;
            base.next = current;
            current = aux;
            continue;
        }
        base = base.next;
    } while(current);

    
    return list1.val <= list2.val ? list1 : list2;
};
