var myAtoi = function(s) {
    let i = 0;
    let sign = 1;

    // 1. Ignore spaces
    while (s[i] === ' ') i++;

    // 2. Check sign
    if (s[i] === '-') sign = -1;
    if (s[i] === '-' || s[i] === '+') i++;

    // 3. Convert number
    let num = 0;

    while (s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + Number(s[i]);
        i++;
    }

    num *= sign;

    // 4. Check range
    if (num > 2147483647) {
        return 2147483647;
    }
    else if (num < -2147483648) {
        return -2147483648;
    }
    else {
        return num;
}};
