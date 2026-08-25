var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let first = 0;
    let last = s.length - 1;

    while (first < last) {
        if (s[first] !== s[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
};