var isAnagram = function(s, t) {
  let a1 = s.split('').sort().join('') 
  let b1 = t.split('').sort().join('') 
  
  return a1 === b1
};