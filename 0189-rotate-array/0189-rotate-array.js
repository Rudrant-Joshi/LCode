var rotate = function(nums, k) {
    k = k % nums.length;

    let x = 0;
    let j = nums.length - k;
    let arr = [];

    for (let i = 0; i < k; i++) {
        arr[i] = nums[j];
        j++;
    }

    for (let i = k; i < nums.length; i++) {
        arr[i] = nums[x];
        x++;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }

    return nums;
};