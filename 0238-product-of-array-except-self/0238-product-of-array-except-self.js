
var productExceptSelf = function(nums) {
  let n = nums.length;
  let arr = new Array(n).fill(1);

  let left = 1; 
  
  for(let i=0; i<n; i++){
    arr[i] = left;
    left = left * nums[i]
  }

  let right = 1;

  for(let i=n-1; i>=0; i--){
    arr[i] = arr[i] * right;
    right = right * nums[i]
  }

  return arr
};