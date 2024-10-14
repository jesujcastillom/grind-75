/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const viewedNumbers = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (viewedNumbers.has(diff)) {
            return [viewedNumbers.get(diff), i];
        }
        viewedNumbers.set(nums[i], i);
    }
};
