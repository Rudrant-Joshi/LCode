var reverseWords = function(s) {
    s = s.split(' ');

    let str = "";

    for (let i = 0; i < s.length; i++) {
        str += s[i].split('').reverse().join('');
        
        if (i < s.length - 1) {
            str += ' ';
        }
    }

    return str;
};