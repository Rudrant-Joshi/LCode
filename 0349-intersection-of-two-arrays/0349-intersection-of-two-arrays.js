var intersection = function(nums1, nums2) {
    let arr= []
    let x = 0
    for(let i=0; i<nums1.length; i++){
      if(nums2.includes(nums1[i]) == true) {
        if(arr.includes(nums1[i])!= true){
          arr[x] = nums1[i]
          x++ 
        }
      }
    }
    return arr
};