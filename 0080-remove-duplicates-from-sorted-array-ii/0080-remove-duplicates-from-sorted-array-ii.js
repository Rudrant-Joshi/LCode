var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length-2; i++){
        
        let k=i+2;
        if(nums[i]===nums[k]){
            nums.splice(k,1)
            i--
        }
    }
    return nums.length
};