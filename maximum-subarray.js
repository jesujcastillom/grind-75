/**
 * @param {number[]} nums
 * @return {number}
 */

 function maxCrossingSubArray(nums, low, mid, high) {
    let leftSum = -Infinity;
    let sum = 0;

    for(let i = mid; i >= low; i--) {
        sum += nums[i]
        leftSum = Math.max(sum, leftSum);
    }
    
    sum = 0;
    let rightSum = -Infinity;
    for(let j = mid + 1; j <= high; j++) {
        sum += nums[j];
        rightSum = Math.max(sum, rightSum);
    }

    return leftSum + rightSum;
 }
function maxSubArray(nums, low = 0, high = nums.length - 1) {
    if (low === high) {
        return nums[low];
    }

    const mid = Math.floor((high + low) / 2);

    return Math.max(
        maxSubArray(nums, low, mid), //left
        maxSubArray(nums, mid + 1, high), //right
        maxCrossingSubArray(nums, low, mid, high),
    )
};
