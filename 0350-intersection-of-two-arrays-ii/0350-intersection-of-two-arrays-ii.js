var intersect = function(nums1, nums2) {
    let arr= []
    let x = 0
    for(let i=0; i<nums1.length; i++){
      if(nums2.includes(nums1[i]) === true) {
          index = nums2.indexOf(nums1[i])
          nums2.splice(index, 1); 

          arr[x] = nums1[i]
          x++ 
      }
    }
    return arr
};