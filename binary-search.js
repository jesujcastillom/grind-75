/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const leftSlice = nums.slice(0, nums.length / 2);

    if (nums.length <= 1) {
        return nums[0] === target ? 0 : -1;
    }

    if (target <= leftSlice[leftSlice.length - 1]) {
        return search(leftSlice, target);
    }

    const rightIndex = search(nums.slice(leftSlice.length), target);

    if (rightIndex < 0) {
        return rightIndex
    }

    return leftSlice.length + rightIndex;
};
