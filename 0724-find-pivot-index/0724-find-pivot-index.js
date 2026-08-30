var pivotIndex = function(nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    let lsum = 0;

    for(let i=0; i<nums.length; i++){
        let rsum = total-nums[i]-lsum;
        if(lsum == rsum) return i
        lsum += nums[i]
    }
    return -1
};
