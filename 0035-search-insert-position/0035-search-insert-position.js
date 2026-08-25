var searchInsert = function(nums, target) {
    let result = undefined;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result = i;
            break
        } else if (target < nums[i]) {
            result = i;
            break
        }
    }

    if (result === undefined) {
        result = nums.length;
    }

    return result;
};