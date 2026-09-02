var findMaxAverage = function(nums, k) {
    let windowSum=0;
    for(i=0; i<k; i++) windowSum += nums[i]

    let maxSum = windowSum;

    for(i=k; i<nums.length; i++){
        windowSum += nums[i] - nums[i-k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum/k
};