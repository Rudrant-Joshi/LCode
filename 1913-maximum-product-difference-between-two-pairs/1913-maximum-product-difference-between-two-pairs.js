var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    result = ((nums[nums.length-2]*nums[nums.length-1]) - (nums[0]*nums[1]))
    return result
};