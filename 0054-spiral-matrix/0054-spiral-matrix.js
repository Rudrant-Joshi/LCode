
var spiralOrder = function(matrix) {
    let res = [];
    let row = matrix.length;
    let col = matrix[0].length;

    let top = 0, left = 0;
    let bottom = row - 1, right = col - 1;

    while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++)
            res.push(matrix[top][i]);
        top++;

        for (let i = top; i <= bottom; i++)
            res.push(matrix[i][right]);
        right--;

        for (let i = right; i >= left && top <= bottom; i--)
            res.push(matrix[bottom][i]);
        bottom--;

        for (let i = bottom; i >= top && left <= right; i--)
            res.push(matrix[i][left]);
        left++;
    }

    return res;
};
