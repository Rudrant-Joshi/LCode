var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let lsum = 0, rsum = 0;
        for (let j = i - 1; j >= 0; j--) lsum += nums[j];
        for (let j = i + 1; j < nums.length; j++) rsum += nums[j];
        if (lsum === rsum) return i;
    }
    return -1;
};