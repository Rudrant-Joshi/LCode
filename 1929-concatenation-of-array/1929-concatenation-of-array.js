var getConcatenation = function(nums) {
    let length = nums.length-1
    let arr = [length*2]

    for(i=0; i<=length; i++){
        arr[i] = nums[i]
        arr[i+length+1] = nums[i]
    }
    return arr
};