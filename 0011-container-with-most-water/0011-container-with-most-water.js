var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while (l < r) {
        let width = r - l;
        let h = Math.min(height[l], height[r]);

        let area = width * h;
        max = Math.max(max, area);

        // Move the smaller height
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return max;
};