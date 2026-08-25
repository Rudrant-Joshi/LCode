var buildArray = function(nums) {
    let arr = []
    for(i=0; i<nums.length; i++){
        arr[i] = nums[nums[i]]
    }
    return arr
};