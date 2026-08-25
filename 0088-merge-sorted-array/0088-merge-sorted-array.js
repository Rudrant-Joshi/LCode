var merge = function(nums1, m, nums2, n) {
  let i=m-1 , j=n-1;

  for(x=nums1.length-1; x>=0; x--){

    if((nums1[i]>= nums2[j] || j < 0 ) && i >= 0) {
      nums1[x] = nums1[i]
      i--
    }
    else  {
      nums1[x] = nums2[j]
      j--
    }
  };
  return nums1
}