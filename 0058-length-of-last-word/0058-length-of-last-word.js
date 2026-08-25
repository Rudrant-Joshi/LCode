var lengthOfLastWord = function(s) {
  let words = s.trim().split(/\s+/); 
  let final = words[words.length-1]
  return final.length
};
