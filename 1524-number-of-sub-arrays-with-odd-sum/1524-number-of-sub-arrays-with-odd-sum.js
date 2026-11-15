var numOfSubarrays = function(arr) {
    let odd = 0;
    let even = 1;
    let count = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;

        if (sum % 2 === 0) {
            count += odd;
            even++;
        } 
        else {
            count += even;
            odd++;
        }

        count %= 1000000007;
    }

    return count;
};
