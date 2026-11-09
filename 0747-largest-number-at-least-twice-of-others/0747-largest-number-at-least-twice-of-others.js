var dominantIndex = function(nums) {
    let max = Math.max(...nums);

    for(let i=0; i<nums.length; i++){
        if(max === nums[i]) continue
        if(max<nums[i]*2) return -1
    }
    return nums.indexOf(max);
};