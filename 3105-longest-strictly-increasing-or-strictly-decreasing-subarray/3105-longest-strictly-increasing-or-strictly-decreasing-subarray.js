
var longestMonotonicSubarray = function(nums) {
    let inc = 1, dec = 1, maxLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            inc++;
            dec = 1;
        } 
        else if (nums[i] < nums[i-1]) {
            dec++;
            inc = 1;
        } 
        else {
            inc = 1;
            dec = 1;
        }

        maxLength = Math.max(maxLength, inc, dec);
    }

    return maxLength;
};
