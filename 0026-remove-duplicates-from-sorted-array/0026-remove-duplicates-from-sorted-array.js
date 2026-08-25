var removeDuplicates = function(nums) {
    let x=1;
    for(i=1; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[x] = nums[i]
            x++
        }
    }
    return x
};