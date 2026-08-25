var reverseString = function(s) {
  let last = s.length-1
    for(let i=0; i<s.length/2; i++){
      let temp = s[i]
      s[i] = s[last];
      s[last] = temp
      last--;
    }
    return s
};