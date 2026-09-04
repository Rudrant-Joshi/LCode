var intersection = function(nums1, nums2) {
    let arr = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
            arr.push(nums1[i]);
        }
    }
    return arr;
};