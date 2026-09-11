var firstMissingPositive = function(nums) {
    let count = 1;
    let set = new Set(nums);
    while (set.has(count))  count++;
    return count;
};