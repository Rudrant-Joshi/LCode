var rotate = function(nums, k) {
    k = k % nums.length;

    let arr = [];

    let last = nums.length - k; 
    for (let i = 0; i < k; i++) {
        arr[i] = nums[last];
        last++;
    }

    let first = 0;
    for (let i = k; i < nums.length; i++) {
        arr[i] = nums[first];
        first++;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }

    return nums;
};