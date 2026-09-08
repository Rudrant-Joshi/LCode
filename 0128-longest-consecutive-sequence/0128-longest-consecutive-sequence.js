var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxCount = 0;

    for (const num of set) {

        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            maxCount = Math.max(maxCount, count);
        }
    }
    return maxCount;
};