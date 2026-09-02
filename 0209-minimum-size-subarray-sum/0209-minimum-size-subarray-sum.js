var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minVal = Infinity;

    for(let right=0; right<nums.length; right++){
        sum += nums[right]

        while(sum>=target){
            minVal = Math.min(minVal, right-left+1)

            sum -= nums[left]
            left++
        }
    }

    return minVal === Infinity ? 0 : minVal;
};