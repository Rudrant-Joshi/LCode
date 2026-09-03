var isPalindrome = function(x) {
    x = String(x)
    let last = x.length-1;

  for(let i=0; i<x.length/2; i++){
    if(x[i] !== x[last]){
        return false
    }
    last--
  }  
  return true
};